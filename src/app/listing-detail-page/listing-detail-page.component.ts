import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute } from '@angular/router';
import { fakeListing } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.scss',
})
export class ListingDetailPageComponent implements OnInit {
 public isLoading: boolean = true;
  public listing: any;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.listingService.getListingById(id).subscribe(
      listing =>{
        this.listing = listing;
        this.isLoading = false;
      }
    
    );

    this.listingService.addViewToListing(id).subscribe(
    () =>{console.log('view updated')}
    )
  }
  
 

}
