import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';
import { fakeListing } from './fake-data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  private apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  // getListings(): Listing []{
  //   return fakeListing
  // }
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.apiUrl}/listings`);
  }

  getListingById(id: any): Observable<any> {
    // return this.http.get<Listing>(`/api/listings/${id}`);
    return this.http.get(`${this.apiUrl}/listings/${id}`);
  }

  addViewToListing(id: any): Observable<Listing> {
    return this.http.post<Listing>(
      `${this.apiUrl}/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }
  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.apiUrl}/users/12345/listings`);
  }

  deleteListing(id: any): Observable<Listing> {
    return this.http.delete<Listing>(`${this.apiUrl}/listings/${id}`);
  }



  createListing(name: string | undefined, description: string | undefined, price: number | undefined): Observable<Listing> {
    return this.http.post<Listing>(
      `${this.apiUrl}/listings`,
      { name, description, price },
      httpOptions,
    );
  }
}
