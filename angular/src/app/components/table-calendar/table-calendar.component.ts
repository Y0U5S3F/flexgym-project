import { TableCalendarService } from './../../services/table-calendar.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-table-calendar',
    templateUrl: './table-calendar.component.html',
    styleUrls: ['./table-calendar.component.css']
})
export class TableCalendarComponent implements OnInit {
    weekDays: any[] = [];

    constructor(private tableCalendarService: TableCalendarService) { }

    ngOnInit(): void {
        this.getWeekActivities();
    }

    getWeekActivities(): void {
        this.tableCalendarService.getWeekActivities()
            .subscribe(weekActivities => {
                this.weekDays = weekActivities;
            });
    }
}