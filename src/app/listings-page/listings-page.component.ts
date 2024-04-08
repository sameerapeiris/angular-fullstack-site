import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListing } from '../fake-data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss'
})
export class ListingsPageComponent {
  public listings: Listing[] = []

  constructor(){}
  ngOnInit(){
    this.listings = fakeListing;
  }
}
