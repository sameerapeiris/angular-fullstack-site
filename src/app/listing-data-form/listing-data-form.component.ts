import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.scss',
})
export class ListingDataFormComponent implements OnInit{
  @Input() buttonText:any;
  @Input() currentName : string|undefined ;
  @Input() currentDescription : string|undefined ;
  @Input() currentPrice : number|undefined ;
  public name: string  | undefined ;
  public description: string  | undefined;
  public price: number  | undefined;

  @Output() onSubmit = new EventEmitter<Listing>();

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice
  }
  constructor(private router: Router) {


  }


  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views:0
    });
  }
}
