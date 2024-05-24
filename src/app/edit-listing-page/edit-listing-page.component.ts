import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.scss',
})
export class EditListingPageComponent implements OnInit {

  public listing: Listing | undefined;

  constructor(private rout: ActivatedRoute , private router: Router) {}

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this.listing = fakeListing.find((listing) => listing.id === id);
  }
  onSubmit(): void {
    alert('Saving Changes to the Listing...');
    this.router.navigateByUrl('/my-listing');
  }
}
