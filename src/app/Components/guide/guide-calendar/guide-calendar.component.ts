import { Component } from '@angular/core';

@Component({
  selector: 'app-guide-calendar',
  templateUrl: './guide-calendar.component.html',
  styleUrls: ['./guide-calendar.component.css']
})
export class GuideCalendarComponent  {
  MONTH_NAMES: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month: number = 0;
  year: number = 2024; // Assuming default year
  DAYS: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  blankdays: any[] = []; // Define this array as needed
  no_of_days: number[] = []; // Define this array as needed
  events: any[] = []; // Define this array as needed

  constructor() {
    this.getNoOfDays();
  }
  ngOnInit() {
    const today = new Date();
    this.month = today.getMonth(); // Set current month
    this.getNoOfDays();
  }

  getNoOfDays() {
    this.no_of_days = [];
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      this.no_of_days.push(i);
    }
    const firstDayOfMonth = new Date(this.year, this.month, 1).getDay();
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.blankdays.push(i);
    }
  }

  showEventModal(date: number) {
    // Implement logic to show event modal for the selected date
    console.log('Show event modal for date:', date);
  }

  isToday(date: number): boolean {
    const today = new Date();
    const currentDate = new Date(this.year, this.month, date);
  
    // Check if the current date is today
    const isToday = today.toDateString() === currentDate.toDateString();
  
    // Return true if the date is today
    return isToday;
  }
  
  getFilteredEvents(year: number, month: number, date: number): any[] {
    const currentDate = new Date(year, month, date);
    return this.events.filter(event => {
      const eventDate = new Date(event.event_date);
      return eventDate.toDateString() === currentDate.toDateString();
    });
  }
  changeMonth(increment: number) {
    this.month += increment;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    } else if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.getNoOfDays();
  }
}
