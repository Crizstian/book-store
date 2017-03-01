import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

export interface Book {
  _id?: string,
  title: string,
  author: any,
  publisher: string,
  category: string,
  publication: any,
  price: any
}

export interface State {
  books: Array<Book>
  book: Book | any
}

const defaultState = {
  books: [],
  book: {}
}

const _store = new BehaviorSubject<State>(defaultState);

@Injectable()
export class Store {
  private _store = _store;
  changes = this._store.asObservable().distinctUntilChanged()

  setState(state: State) {
    this._store.next(state);
  }

  getState(): State {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }
}