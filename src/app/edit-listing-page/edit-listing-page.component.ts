import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListing } from '../fake-data';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.scss',
})
export class EditListingPageComponent implements OnInit {
  public listing: Listing | undefined;

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private listingService: ListingsService
  ) {}

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    // this.listing = fakeListing.find((listing) => listing.id === id);
    this.listingService
      .getListingById(id)
      .subscribe((listing) => (this.listing = listing));
  }
  onSubmit({name, description, price }: { name: string | undefined; description: string | undefined; price: number | undefined }): void {
    // alert('Saving Changes to the Listing...');
    this.listingService.editListing(this.listing?.id, name, description, price).subscribe(
      () =>{
        this.router.navigateByUrl('/my-listing');
      }
    )

   
  }
}
