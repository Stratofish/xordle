import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GameplayService} from "../Gameplay.service";

@Component({
  selector: 'app-board',
  templateUrl: './Board.component.html',
  styleUrls: ['./Board.component.css']
})
export class BoardComponent implements OnInit {

  attempts$: Observable<string[]>;
  usedAttempts$: Observable<number>;

  constructor(private service: GameplayService) {
    this.attempts$ = service.attempts.asObservable();
    this.usedAttempts$ = service.usedAttempts.asObservable();
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!event.repeat) {
      if (event.key.length === 1)
        this.service.addLetter(event.key);

      if (event.code === 'Backspace')
        this.service.backspace();

      if (event.code === 'Enter')
        this.service.enter();
    }
  }
}
