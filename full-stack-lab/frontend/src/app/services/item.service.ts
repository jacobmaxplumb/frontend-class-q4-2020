import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:3000/cart-items');
  }

  deleteItem(id: number): Observable<Item[]> {
    return this.http.delete<Item[]>(`http://localhost:3000/cart-items/${id}`);
  }

  addItem(item: Item): Observable<Item[]> {
    return this.http.post<Item[]>('http://localhost:3000/cart-items', item);
  }
}
