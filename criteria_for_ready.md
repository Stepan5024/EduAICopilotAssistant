Критерии приемлемости для системы EduAICopilotAssistant
1. Регистрация и авторизация пользователей
Пользователи могут успешно зарегистрироваться в системе с указанием необходимых данных (имя, роль, email, пароль).
Процедура двухфакторной аутентификации настроена и работает корректно для всех пользователей.
Пользователи могут безопасно входить в систему с использованием JWT токенов, токены корректно истекают по времени.
Администраторы могут управлять ролями пользователей (назначать и изменять роли).
Условия завершения:

Все пользователи могут зарегистрироваться и войти в систему без ошибок.
Система предоставляет пользователям доступ к функционалу в зависимости от их роли.
2. Главный интерфейс (canvas)
Методологи могут добавлять, редактировать и удалять элементы курса (тексты, видео, задания и тесты) с помощью интерактивного интерфейса.
Реализована функция drag-and-drop для удобного изменения структуры курсов.
Пользователь может взаимодействовать с ИИ-ассистентом на канвасе, получая рекомендации и предложения по контенту.
Возможность предварительного просмотра курса перед публикацией.
Условия завершения:

Все элементы курса могут быть добавлены, отредактированы или удалены через canvas.
ИИ-ассистент корректно взаимодействует с пользователем, предлагая полезные рекомендации.
Все изменения сохраняются и обновляются в реальном времени.
3. Генерация образовательного контента
Система принимает текстовые, аудиофайлы, видео и документы в качестве входных данных для создания курсов.
ИИ-ассистент успешно генерирует готовый контент (программы, лонгриды, тесты, задания) на основе предоставленных данных.
Методолог может корректировать сгенерированный контент перед публикацией.
Время генерации контента укладывается в установленные пределы (до 10 секунд для текста, до 30 секунд для видео/аудио).
Условия завершения:

Все типы контента могут быть успешно сгенерированы и отредактированы.
ИИ-ассистент генерирует корректный и релевантный контент для различных типов курсов.
Генерация контента происходит в пределах установленных временных ограничений.
4. Оценка и ревью материалов
Система может оценивать текстовые материалы по трём направлениям: грамматика, фактчекинг и методологические рекомендации.
Пользователи получают подробные рекомендации по улучшению структуры контента (например, разбить длинный урок на несколько частей).
Все проверки проводятся автоматически, а результаты отображаются в удобной форме для методолога.
Условия завершения:

Все загруженные материалы могут быть успешно оценены по трём направлениям.
Методолог получает точные и полезные рекомендации по улучшению курса.
Время оценки не превышает установленные лимиты (до 10 секунд для текстов).
5. Интеграция с LMS
Пользователь может экспортировать готовый курс в формате SCORM или xAPI для загрузки в LMS.
Все структурные элементы (уроки, задания, тесты) корректно передаются в LMS, сохраняя свою иерархию и содержимое.
Система уведомляет пользователя об успешной загрузке курса в LMS.
Условия завершения:

Экспорт курсов в LMS работает без ошибок, и все элементы курса сохраняют свою структуру.
Пользователь может успешно загрузить курс в LMS и получить уведомление об этом.
6. Уведомления и Telegram Bot
Пользователи получают уведомления о статусе создания и ревью курса через систему (email, интерфейс) и через Telegram-бота.
Бот может отправлять уведомления и принимать команды от методологов (например, запрос на генерацию контента).
Уведомления доставляются в реальном времени без задержек.
Условия завершения:

Telegram-бот корректно отправляет и принимает сообщения.
Пользователи получают уведомления без задержек и могут взаимодействовать с ботом.
7. Производительность и масштабируемость
Система справляется с одновременной работой до 500 пользователей без заметного ухудшения производительности.
Время отклика на пользовательские запросы не превышает 2 секунд для текстовых операций и 5 секунд для мультимедийных файлов.
Кэширование данных работает корректно, ускоряя доступ к часто запрашиваемой информации.
Условия завершения:

Все функциональные требования выполняются без снижения производительности системы при пиковой нагрузке.
Время отклика соответствует требованиям.
8. Безопасность
Вся передача данных зашифрована с использованием TLS 1.2 или выше.
Реализована многофакторная аутентификация для пользователей.
Система защищена от SQL-инъекций, XSS и CSRF-атак.
Логи активности пользователей записываются и доступны для аудита.
Условия завершения:

Система проходит все тесты на безопасность и предотвращает несанкционированный доступ к данным.
Логи активности записываются и могут быть использованы для расследования инцидентов.
9. Удобство использования
Интерфейс интуитивно понятен для пользователей с разным уровнем подготовки.
Пользователи могут освоить базовые функции системы за 30 минут.
Система поддерживает работу на различных устройствах и разрешениях экрана, а также соответствует требованиям доступности (WCAG 2.1).
Условия завершения:

Пользователи могут легко взаимодействовать с системой без необходимости длительного обучения.
Система проходит тестирование на совместимость с различными устройствами и браузерами.