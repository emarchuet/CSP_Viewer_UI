import { Component } from '@angular/core';
import { ReportsService } from './services/reports.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CSPUI';
  public reports: Array<any> = [];
  constructor(
    private reportsService: ReportsService
  ) {
    this.reportsService.getReports().subscribe((resp:any)=>{
      console.log(resp);
      this.reports=resp;
    })
  }
}
