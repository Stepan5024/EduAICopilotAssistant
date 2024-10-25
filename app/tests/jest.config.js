// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',  // Для тестирования frontend компонентов
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
