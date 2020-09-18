import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Call } from '../_models/call'

@Injectable({
  providedIn: 'root'
})
export class CallService {
  private baseUrl = environment.apiUrl + 'calls';

  constructor(private hhtp: HttpClient) { }

  getCall(id: number): Observable<Call> {
    return this.hhtp.get<Call>(`${this.baseUrl}/id/${id}`);
  }

  getCallsByBlockName(name: string): Observable<Call[]> {
    return this.hhtp.get<Call[]>(`${this.baseUrl}/block/name/${name}`);
  }

  getCallsByBlockServiceName(bname: string, sname): Observable<Call[]> {
    return this.hhtp.get<Call[]>(`${this.baseUrl}/block/${bname}/service/${sname}`);
  }

  getAllCalls(): Observable<Call[]> {
    return this.hhtp.get<Call[]>(`${this.baseUrl}`);
  }

  createCall(call: Call): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, call);
  }

  updateCall(call: Call): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, call);
  }

  deleteCall(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/remove/${id}`);
  }
}
