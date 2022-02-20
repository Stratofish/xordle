import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameplayServiceService {

  target: Subject<string>;

  constructor() {
    this.target = new BehaviorSubject<string>('BOGUS');
  }
}
