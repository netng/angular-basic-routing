import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onToCategories() {
    this.router.navigate(
      ['/categories'],
      { 
        queryParams: { q: '123', search: 'jalan' },
        fragment: 'loading'
      }
    );
  }

}
