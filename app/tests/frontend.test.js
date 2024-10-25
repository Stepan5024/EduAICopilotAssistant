// frontend.test.js

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/server'; // Это сервер для мока запросов, настраивается в jest.config.js
import App from '../App'; // основной компонент приложения

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Тесты интерфейса Регистрация и Авторизация', () => {

    test('Переключение между вкладками регистрации и авторизации', () => {
        render(<App />);

        const registerTab = screen.getByText('Регистрация');
        const loginTab = screen.getByText('Войти');

        userEvent.click(registerTab);
        expect(screen.getByText('Регистрация')).toBeInTheDocument();

        userEvent.click(loginTab);
        expect(screen.getByText('Войти')).toBeInTheDocument();
    });

    test('Регистрация нового пользователя', async () => {
        render(<App />);

        userEvent.click(screen.getByText('Регистрация'));

        userEvent.type(screen.getByLabelText(/Имя пользователя/i), 'testUser');
        userEvent.type(screen.getByLabelText(/Email/i), 'test@example.com');
        userEvent.type(screen.getByLabelText(/Пароль/i), 'password123');

        fireEvent.submit(screen.getByRole('button', { name: /Зарегистрироваться/i }));

        await waitFor(() => expect(screen.getByText(/Добро пожаловать/i)).toBeInTheDocument());
        expect(screen.getByText('testUser')).toBeInTheDocument();
    });

    test('Вход в систему с корректными данными', async () => {
        render(<App />);

        userEvent.click(screen.getByText('Войти'));

        userEvent.type(screen.getByLabelText(/Email/i), 'test@example.com');
        userEvent.type(screen.getByLabelText(/Пароль/i), 'password123');

        fireEvent.submit(screen.getByRole('button', { name: /Войти/i }));

        await waitFor(() => expect(screen.getByText(/Добро пожаловать/i)).toBeInTheDocument());
        expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    test('Выход из системы', async () => {
        render(<App />);

        // Прежде чем выйти, выполним вход для перехода на вкладку приветствия
        userEvent.click(screen.getByText('Войти'));
        userEvent.type(screen.getByLabelText(/Email/i), 'test@example.com');
        userEvent.type(screen.getByLabelText(/Пароль/i), 'password123');
        fireEvent.submit(screen.getByRole('button', { name: /Войти/i }));

        await waitFor(() => expect(screen.getByText(/Добро пожаловать/i)).toBeInTheDocument());

        // Нажимаем на кнопку выхода
        userEvent.click(screen.getByText('Выйти'));

        // Проверяем, что перешли на вкладку авторизации
        expect(screen.getByText('Войти')).toBeInTheDocument();
    });
});
