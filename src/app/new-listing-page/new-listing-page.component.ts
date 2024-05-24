import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.scss',
})
export class NewListingPageComponent implements OnInit {
  public name: string = '';
  public description: string = '';
  public price: string = ' ';
  ngOnInit(): void {}
  constructor(
    private router: Router
  ){}

  onSubmit (): void{
    alert("create new listing...")
    this.router.navigateByUrl("/my-listing")
  }
}
