import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GameplayServiceService} from "../GameplayService.service";

@Component({
  selector: 'app-board',
  templateUrl: './Board.component.html',
  styleUrls: ['./Board.component.css']
})
export class BoardComponent implements OnInit {

  target$: Observable<string>;
  target: string = '';

  @Input()
  attempts: null | string[] = [];

  @Input()
  usedAttempts: number = 0;

  constructor(service: GameplayServiceService) {
    this.target$ = service.target.asObservable();
    this.target$.subscribe((value: string) => {
      this.target = value;
    });
  }

  ngOnInit(): void {
  }

}
