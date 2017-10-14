import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router'
import { } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) {
  }

  ngOnDestroy() {
  }

  ngOnInit() {
		var today = new Date();
		let startDate = `${today.getFullYear().toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
		let endDate = `${(today.getFullYear()+10).toString()}/${(today.getMonth()+1).toString()}/${today.getDate().toString()}`;
  }

  GoToAbout()
  {
    this.router.navigateByUrl('/about');
  }
}
