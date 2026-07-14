import { Component, OnInit } from '@angular/core';
// import { Appointment } from '../../interfaces/appointment.interface';
// import { AppointmentService } from '../../services/appointment';
import { CommonModule } from '@angular/common';
import { CalendarModule, CalendarEvent, CalendarView as CalendarViewEnum} from 'angular-calendar';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './calendar-view.html',
  styleUrl: './calendar-view.css',
})
export class CalendarViewComponent  {

  view: CalendarViewEnum = CalendarViewEnum.Month;
  viewDate: Date = new Date();


  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'Ραντεβού - Γιώργος Παπαδόπουλος',
    },
    {
      start: new Date(new Date().setDate(new Date().getDate() + 2)),
      title: 'Ραντεβού - Μαρία Ιωάννου',
    },
  ];

  selectedDayEvents: CalendarEvent[] = [];

  dayClicked(day: { date: Date; events: CalendarEvent[] }): void {
    this.viewDate = day.date;
    this.selectedDayEvents = day.events;
  }

  // appointments: Appointment[] = [];
  // constructor(private appointmentService: AppointmentService) {}
  // ngOnInit() {
  //   this.appointmentService.getMyAppointments().subscribe(data => {
  //     this.appointments = data;
  //   });
  // }
}
