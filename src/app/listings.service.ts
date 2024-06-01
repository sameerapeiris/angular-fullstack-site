import { Injectable } from '@angular/core';
import { Listing } from './types';
import { fakeListing } from './fake-data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(
    private http: HttpClient,
  ) { }

  // getListings(): Listing []{
  //   return fakeListing
  // }
  getListings(): Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listings')
  }
}
