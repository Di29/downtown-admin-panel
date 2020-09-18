import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subservice } from '../_models/subservice';

@Injectable({
  providedIn: 'root'
})
export class SubserviceService {
  private baseUrl = environment.apiUrl + 'subservices';

  constructor(private hhtp: HttpClient) { }

  getSubservice(id: number): Observable<Subservice> {
    return this.hhtp.get<Subservice>(`${this.baseUrl}/id/${id}`);
  }

  getSubserviceByServiceId(id: number): Observable<Subservice> {
    return this.hhtp.get<Subservice>(`${this.baseUrl}/subservice/id/${id}`);
  }

  getSubserviceByName(name: string): Observable<Subservice> {
    return this.hhtp.get<Subservice>(`${this.baseUrl}/subservice/name/${name}`);
  }

  getAllSubservices(): Observable<Subservice[]> {
    return this.hhtp.get<Subservice[]>(`${this.baseUrl}`);
  }

  createSubservice(block: Subservice): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, block);
  }

  updateSubservice(block: Subservice): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, block);
  }

  deleteSubservice(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/remove/${id}`);
  }
}
