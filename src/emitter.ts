import {
  Events,
  Handler,
  Person,
  EventsMap,
  UserData,
} from './types';

export class EventEmitter {
  events: EventsMap = Object.create(null);

  constructor() {
    this
      .on<Person>(Events.register, (person: Person) => {
        console.log(`Пользователь ${person.name} был успешно зарегистрирован`);
      })
      .on<UserData>(Events.changeBalance, ({ name, amount }: UserData) => {
        console.log(`На счету ${name} — ${amount}$`);
      });
  }

  on<T>(type: Events, handler: Handler<T>): EventEmitter {
    if (type in this.events) {
      this.events[type]?.push(handler);
    } else {
      this.events[type] = [handler];
    }

    return this;
  }

  emit<T>(type: Events, data: T): EventEmitter {
    const handlers = this.events[type];

    if (Array.isArray(handlers)) {
      handlers.forEach((handler) => handler(data));
    }

    return this;
  }
}
