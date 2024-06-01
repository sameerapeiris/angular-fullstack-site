import { Component } from '@angular/core';
import { Listing } from '../types';
// import { fakeListing } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss'
})
export class ListingsPageComponent {
  public listings: Listing[] = []

  constructor( private listingService : ListingsService){}
  ngOnInit(){
    // this.listings = this.listingService.getListings();
    this.listingService.getListings()
    .subscribe(listings => this.listings = listings)
  }
}
