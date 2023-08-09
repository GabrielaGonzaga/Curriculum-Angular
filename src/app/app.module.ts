import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent, ProfileComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ProfileComponent, CardComponent],
  bootstrap: [AppModule],
  exports:[ProfileComponent, CardComponent],
})

export class AppModule {}

