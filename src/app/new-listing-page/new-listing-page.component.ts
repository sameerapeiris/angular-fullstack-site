import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.scss',
})

export class NewListingPageComponent implements OnInit {

  ngOnInit(): void {}
  constructor(
    private router: Router, private listingsService: ListingsService
  ){}

  onSubmit({ name, description, price }: { name: string | undefined; description: string | undefined; price: number | undefined }): void {
    this.listingsService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listing');
      });
  }
}
