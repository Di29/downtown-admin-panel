import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceChat } from '../_models/serviceChat';

@Injectable({
  providedIn: 'root'
})
export class ServiceChatService {
  private baseUrl = environment.apiUrl + 'chats';

  constructor(private hhtp: HttpClient) { }

  getChat(id: number): Observable<ServiceChat> {
    return this.hhtp.get<ServiceChat>(`${this.baseUrl}/id/${id}`);
  }

  getChatByChatId(id: number): Observable<ServiceChat> {
    return this.hhtp.get<ServiceChat>(`${this.baseUrl}/chat/id/${id}`);
  }

  getChatByServiceId(id: number): Observable<ServiceChat> {
    return this.hhtp.get<ServiceChat>(`${this.baseUrl}/service/id/${id}`);
  }

  getChatBlockId(id: number): Observable<ServiceChat> {
    return this.hhtp.get<ServiceChat>(`${this.baseUrl}/block/id/${id}`);
  }

  getAllChats(): Observable<ServiceChat[]> {
    return this.hhtp.get<ServiceChat[]>(`${this.baseUrl}`);
  }

  createChat(chat: ServiceChat): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, chat);
  }

  updateChat(chat: ServiceChat): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, chat);
  }

  deleteChat(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/remove/${id}`);
  }
}
