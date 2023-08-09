import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent, ProfileComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ProfileComponent],
  bootstrap: [ProfileComponent],
})

@NgModule({
  imports: [BrowserModule],
  declarations: [CardComponent],
  bootstrap: [CardComponent],
})
export class AppModule {}
