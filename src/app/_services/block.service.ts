import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Block } from '../_models/block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  private baseUrl = environment.apiUrl + 'blocks';

  constructor(private hhtp: HttpClient) { }

  getBlock(id: number): Observable<Block> {
    return this.hhtp.get<Block>(`${this.baseUrl}/id/${id}`);
  }

  getBlockByName(name: string): Observable<Block> {
    return this.hhtp.get<Block>(`${this.baseUrl}/name/${name}`);
  }

  getAllBlocks(): Observable<Block[]> {
    return this.hhtp.get<Block[]>(`${this.baseUrl}`);
  }

  createBlock(block: Block): Observable<any> {
    return this.hhtp.post(`${this.baseUrl}/admin/add`, block);
  }

  updateBlock(block: Block): Observable<any> {
    return this.hhtp.put(`${this.baseUrl}/admin/update`, block);
  }

  deleteBlock(id: number): Observable<any> {
    return this.hhtp.delete(`${this.baseUrl}/admin/delete/${id}`);
  }

}
