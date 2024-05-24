import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  public email: string | undefined;
  public message: string | undefined;
  public listing: Listing | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListing.find((listing) => listing.id === id);
    this.message = `Hi I am interested in your ${
      this.listing?.name && this.listing?.name.toLowerCase()
    }.!`;
  }

  sendMessage() {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
