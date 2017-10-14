import { Component, OnInit, OnDestroy, AfterViewInit, Renderer, Inject } from '@angular/core';
import {Router} from '@angular/router'
import { DOCUMENT } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(@Inject(DOCUMENT) public document: any, public renderer: Renderer, public router:Router) {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
    const elem = this.renderer.createElement(this.document.head, 'meta');
    this.renderer.setElementProperty(elem, 'name', 'twitter:title');
    this.renderer.setElementProperty(elem, 'content', 'HOME PAGE');
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
