import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suggestion } from '../_models/suggestion'

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private baseUrl = environment.apiUrl + 'suggestions';

  constructor(private hhtp: HttpClient) { }

  getSuggestion(id: number): Observable<Suggestion> {
    return this.hhtp.get<Suggestion>(`${this.baseUrl}/id/${id}`);
  }

  getSuggestionByBlockId(id: string): Observable<Suggestion> {
    return this.hhtp.get<Suggestion>(`${this.baseUrl}/block/id/${id}`);
  }

  getSuggestionByServiceName(name: string): Observable<Suggestion> {
    return this.hhtp.get<Suggestion>(`${this.baseUrl}/service/name/${name}`);
  }

  getAllSuggestions(): Observable<Suggestion[]> {
    return this.hhtp.get<Suggestion[]>(`${this.baseUrl}`);
  }

  createSuggestion(block: Suggestion): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, block);
  }

  updateSuggestion(block: Suggestion): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, block);
  }

  deleteSuggestion(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/remove/${id}`);
  }
}
