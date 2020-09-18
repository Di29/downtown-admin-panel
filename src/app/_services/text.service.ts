import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Text } from '../_models/text';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private baseUrl = environment.apiUrl + 'texts';

  constructor(private hhtp: HttpClient) { }

  getText(id: number): Observable<Text> {
    return this.hhtp.get<Text>(`${this.baseUrl}/id/${id}`);
  }

  getTextByName(name: string): Observable<Text> {
    return this.hhtp.get<Text>(`${this.baseUrl}/name/${name}`);
  }

  getAllTexts(): Observable<Text[]> {
    return this.hhtp.get<Text[]>(`${this.baseUrl}`);
  }

  updateText(block: Text): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, block);
  }
}
