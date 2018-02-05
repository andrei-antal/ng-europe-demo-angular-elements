import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  MyRatingComponent,
  RatingService,
  RatingComponent,
} from './my-rating.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [MyRatingComponent, RatingComponent],
  providers: [RatingService],
  entryComponents: [MyRatingComponent],
})
export class CustomElementsModule {
  ngDoBootstrap() {}
}
