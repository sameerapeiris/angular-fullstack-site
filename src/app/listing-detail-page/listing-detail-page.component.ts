import { Component } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute } from '@angular/router';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.scss',
})
export class ListingDetailPageComponent {
  public listing: Listing | undefined | null;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.listing = fakeListing.find((listing) => listing.id === id);
  }
}
