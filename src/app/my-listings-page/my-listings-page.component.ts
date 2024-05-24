import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.scss'
})
export class MyListingsPageComponent implements OnInit {

 public listings: Listing[] =[]
 constructor(){}
  ngOnInit(): void {
    this.listings = fakeListing
  }

  onDeleteListings(listingID: String | undefined| null){
    alert(`Delete Listing with ID ${listingID}`)
  }

}
