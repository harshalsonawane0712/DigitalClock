import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigitalClock';

  date!: any
  daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  day!: string
  hour!: any
  mints!: any
  seconds!: any
  aMpM!: string

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date()
      this.updateDate(this.date)
    }, 1000)
  }

  updateDate(date: Date) {
    this.day = this.daysArray[this.date.getDay()]

    this.hour = date.getHours() % 12
    this.hour = this.hour ? (this.hour < 10 ? '0' + this.hour : this.hour) : 12

    this.mints = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    this.seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

    this.aMpM = date.getHours() >= 12 ? "PM" : "AM"
  }
}
