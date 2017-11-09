import { Component } from '@angular/core';
import {DatepickerOptions} from "../../ng-datepicker/ng-datepicker.component";

@Component({
  selector: 'app-home',
  templateUrl: 'app-home.component.html'
})
export class AppHomeComponent {
  date: Date;

  constructor() {
    this.date = null; // new Date();
  }

  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    placeholder: 'Set Date'
  };
}
