import { EventEmitter } from './emitter';

export interface Person {
  name: string;
  balance: number;
};

export interface Persons {
  [key: string]: Person;
};

export interface TranscationData {
  personId: number;
  amount: number;
};

export interface UserData {
  name: string;
  amount: number;
}

export enum Events {
  register = 'register',
  add = 'add',
  withdraw = 'withdraw',
  changeBalance = 'changeBalance',
};

export type Emit<data> = (type: Events, data: data) => EventEmitter;

export type Handler<T> = (data: T) => void;

export type EventsMap = {
  [key in Events]?: Handler<any>[];
};
