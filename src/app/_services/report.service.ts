import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../_models/report'

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = environment.apiUrl + 'reports';

  constructor(private hhtp: HttpClient) { }

  getReport(id: number): Observable<Report> {
    return this.hhtp.get<Report>(`${this.baseUrl}/id/${id}`);
  }

  getReportByBlockId(id: string): Observable<Report> {
    return this.hhtp.get<Report>(`${this.baseUrl}/block/id/${id}`);
  }

  getReportByServiceName(name: string): Observable<Report> {
    return this.hhtp.get<Report>(`${this.baseUrl}/service/name/${name}`);
  }

  getAllReports(): Observable<Report[]> {
    return this.hhtp.get<Report[]>(`${this.baseUrl}`);
  }

  createReport(block: Report): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, block);
  }

  updateReport(block: Report): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, block);
  }

  deleteReport(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/remove/${id}`);
  }
}
