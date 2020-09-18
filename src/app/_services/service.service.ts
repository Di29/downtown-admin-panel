import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../_models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = environment.apiUrl + 'botservices';

  constructor(private hhtp: HttpClient) { }

  getServcie(id: number): Observable<Service> {
    return this.hhtp.get<Service>(`${this.baseUrl}/id/${id}`);
  }

  getServiceByName(name: string): Observable<Service> {
    return this.hhtp.get<Service>(`${this.baseUrl}/name/${name}`);
  }

  getAllServices(): Observable<Service[]> {
    return this.hhtp.get<Service[]>(`${this.baseUrl}`);
  }

  createService(block: Service): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, block);
  }

  updateService(block: Service): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, block);
  }

  deleteService(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/remove/${id}`);
  }
}
