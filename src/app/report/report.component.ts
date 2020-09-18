import { Component, OnInit } from '@angular/core';
import { Report } from '../_models/report';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/_services/report.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports: Observable<Report[]>;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.reports = this.reportService.getAllReports();
  }



  

}
