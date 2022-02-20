import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {LetterClassification} from "../BoardLetter/LetterClassification";
import {Observable} from "rxjs";
import {GameplayServiceService} from "../GameplayService.service";

@Component({
  selector: 'app-keyboard',
  templateUrl: './Keyboard.component.html',
  styleUrls: ['./Keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  @Input()
  attempts: null | string[] = [];

  target$: Observable<string>;
  target: string = '';

  @Input()
  usedAttempts: number | null = 0;

  keys: string[][] = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["Z","X","C","V","B","N","M"]
  ];

  constructor(service: GameplayServiceService) {
    this.target$ = service.target.asObservable();
    this.target$.subscribe((value: string) => {
      this.target = value;
    });
  }

  ngOnInit(): void {
  }

  classifyKey(key: string) {
    if (this.attempts === null) this.attempts = [];
    if (this.usedAttempts === null) this.usedAttempts = 0;

    let classification = LetterClassification.Wrong;
    for (let attemptIndex = 0; attemptIndex < this.attempts.length; attemptIndex++) {
      if (attemptIndex < this.usedAttempts) {
        for (let letterIndex = 0; letterIndex < this.attempts[attemptIndex].length; letterIndex++) {
          if (key === this.attempts[attemptIndex][letterIndex]) {
            classification = LetterClassification.Unused;
            let keyPos = this.target.indexOf(key);
            if (keyPos !== -1) {
              classification = LetterClassification.Used;
              if (keyPos === letterIndex) {
                classification = LetterClassification.Correct;
              }
            }
          }
        }
      }
    }

    return classification;
  }

  private ngOnChanges() {

  }
}
