import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.scss',
})
export class MyListingsPageComponent implements OnInit {
  public listings: Listing[] = [];
  constructor(private listingService: ListingsService) {}
  ngOnInit(): void {
    // this.listings = fakeListing;
    this.listingService.getListingsForUser().subscribe((listing) => {
      this.listings = listing;
    });
  }

  onDeleteListings(listingID: any) {
    // alert(`Delete Listing with ID ${listingID}`)
    this.listingService.deleteListing(listingID).subscribe(() => {
      this.listings = this.listings.filter(
        (listings) => listings.id !== listingID
      );
    });
  }
}
