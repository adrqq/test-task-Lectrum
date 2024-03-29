// Для запуска файла использовать команду ts-node src/index.ts находясь в папке homeworks/2
import { EventEmitter } from './emitter';
import { Person,
  Persons, 
  Events, 
  TranscationData, 
  UserData 
} from './types';

class Bank extends EventEmitter {
  persons: Persons = {};

  constructor() {
    super();
    this.on(Events.add, (data: any) => this.add(data));
    this.on(Events.withdraw, (data: any) => this.withdraw(data));
  }

  register(person: Person): number {
    const id = Date.now();

    this.persons[id] = { ...person };
    this.emit(Events.register, person);

    return id;
  }

  private add(data: TranscationData): void {
    const { personId, amount } = data;
    const person: Person = this.persons[personId];

    if (!person) {
      throw new Error(`Пользователь с идентификатором ${personId} не найден`);
    }

    if (amount < 0) {
      throw new Error(`Сумма должна быть положительной`);
    }

    person.balance = person.balance + amount;

    this.emit<UserData>(Events.changeBalance, { name: person.name, amount: person.balance });
  }

  private withdraw(data: TranscationData): void {
    const { personId, amount } = data;
    const person: Person = this.persons[personId];

    if (!person) {
      throw new Error(`Пользователь с идентификатором ${personId} не найден`);
    }

    if (amount < 0) {
      throw new Error(`Сумма должна быть положительной`);
    }

    if (person.balance - amount <= 0) {
      throw new Error(`Недостаточно средств на счету пользователя ${person.name}`);
    } else {
      person.balance = person.balance - amount;
    }

    this.emit<UserData>(Events.changeBalance, { name: person.name, amount: person.balance });
  }
}

const bank = new Bank();

// added some users for testing

const personId: number = bank.register({
  name: 'Джон Доу',
  balance: 150
});

bank.emit<TranscationData>(Events.add, { personId: personId, amount: 40 });

// Задание со звёздочкой
bank.emit<TranscationData>(Events.withdraw, { personId: personId, amount: 70 });

const person2Id: number = bank.register({
  name: 'Джон Cноу',
  balance: 1000
});

bank.emit<TranscationData>(Events.add, { personId: person2Id, amount: 150 });

bank.emit<TranscationData>(Events.withdraw, { personId: person2Id, amount: 1000 });

console.log(bank.persons);





