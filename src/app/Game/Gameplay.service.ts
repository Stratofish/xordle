import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

let BOARDS = 1;
let MAX_ATTEMPTS = 6;

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  target: Subject<string>;
  attempts_val: string[] = [];
  attempts: Subject<string[]>;
  usedAttempts_val: number = 0;
  usedAttempts: Subject<number>;

  constructor() {
    for (let attemptIndex = 0; attemptIndex < MAX_ATTEMPTS; attemptIndex++) {
      this.attempts_val.push('');
    }

    this.target = new BehaviorSubject<string>('BOGUS');
    this.attempts = new BehaviorSubject<string[]>(this.attempts_val);
    this.usedAttempts = new BehaviorSubject<number>(this.usedAttempts_val);
  }

  addLetter(letter: string) {
    if (this.attempts_val[this.usedAttempts_val].length >= 5)
      return;

    this.attempts_val[this.usedAttempts_val] += letter.toUpperCase();
    this.attempts.next(this.attempts_val);
  }

  backspace() {
    if (this.attempts_val[this.usedAttempts_val].length === 0)
      return;

    this.attempts_val[this.usedAttempts_val] = this.attempts_val[this.usedAttempts_val].slice(0, -1);
    this.attempts.next(this.attempts_val);
  }

  enter() {
    if (this.attempts_val[this.usedAttempts_val].length !== 5)
      return;

    this.usedAttempts_val++;
    this.usedAttempts.next(this.usedAttempts_val);
  }
}
