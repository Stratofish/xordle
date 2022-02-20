import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './game/board/board.component';
import { BoardAttemptComponent } from './game/board-attempt/board-attempt.component';
import { BoardLetterComponent } from './game/board-letter/board-letter.component';
import { KeyboardComponent } from './game/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    GameComponent,
    BoardComponent,
    BoardAttemptComponent,
    BoardLetterComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
