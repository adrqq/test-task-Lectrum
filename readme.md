# Задание

*Покрыть типами `ts`-файлы находящиеся в папке `src`.*

В данном примере максимально приближенный к _production_ модуль банковской системы, который регистрирует пользователя
и зачисляет ему на счёт деньги.

### Основное задание

1. В файле `src/types.ts` создать типы и интерфейсы для файлов `index.ts` и `emitter.ts`.
2. Все `any` должны быть заменены на соответствующие типы.
3. Для типизации `handler` попробуйте создать `generic`. Например: `type func<T> = (data: T) => void;`
4. Метода `add` доступен для вызова только внутри класса `Bank`.
5. Названия событий в методах `on` и `emit` вынести в `enum`.
6. Реализовать работу события `withdraw`. Реализация аналогичная работе события `add`.
7. При списании средств сумма на счету клиента не должна быть меньше 0.
8. После успешного списания в консоль должно вывестись сообщение `На счету Джон Доу — 120$`, где будет фигурировать новая сумма.
 Вывод в консоль реализовать аналогично тому как это реализовано в методе `add`.

**Обратите внимание!**

1. Для того что бы запустить файл `index.ts` вам потребуется установить глобально паке `ts-node`

```bash
yarn global add ts-node
```

Или с помощью `npm` 

```bash
npm i -g ts-node
```

2. В `ts`-файле не должно быть ошибок _TypeScript_.
3. Дописать в ts файле код который от вас потребует _TypeScript_ (проверки, валидации) и т.д.
4. Исправить ошибки в коде, что бы проверки выводили правильную информацию
