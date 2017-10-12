import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(title: Title,
                public meta: Meta,
            public router:Router) {
    meta.addTags([
        { name: 'twitter:title', content: 'Home page' },
        { property: 'og:title', content: 'Home page' },
      ]);
  }

  ngOnDestroy() {
      this.meta.removeTag('property="og:title"');
      this.meta.removeTag('name="twitter:title"');
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
