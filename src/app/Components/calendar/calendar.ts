import { Component } from '@angular/core';
import { CalendarViewComponent } from '../calendar-view/calendar-view';
import { Patients } from '../patients/patients';
import { Statistics } from '../statistics/statistics';
import { PendingTasks } from '../pending-tasks/pending-tasks';

type TabType = 'calendar-view' | 'patients' | 'statistics' | 'pending';

@Component({
  selector: 'app-calendar',
  imports: [CalendarViewComponent, Patients, Statistics, PendingTasks],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})

export class Calendar {
  activeTab: TabType = 'calendar-view';

  setTab(tab: TabType ){
    this.activeTab = tab;
  }
}
