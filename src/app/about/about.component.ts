import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser'

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    constructor(title: Title,
        public meta: Meta, public router:Router) {
meta.addTags([
{ name: 'twitter:title', content: 'This is about page' },
{ property: 'og:title', content: 'This is about page' },
]);
}

ngOnDestroy() {
this.meta.removeTag('property="og:title"');
this.meta.removeTag('name="twitter:title"');
}

GoToHome()
{
  this.router.navigateByUrl('/');
}

}