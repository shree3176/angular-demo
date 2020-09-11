import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent {
  title = 'Angular Basics';

  constructor(private _router: Router){}

  navigateToProductDetail(){
    this._router.navigate(["/blogs"]);                      
 }

}
