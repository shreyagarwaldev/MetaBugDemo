import { Component, OnDestroy, AfterViewInit, Renderer, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser'

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent {
    constructor(@Inject(DOCUMENT) public document: any, public renderer: Renderer, public router:Router) {
}

ngOnDestroy() {
}

ngAfterViewInit() {
    const elem = this.renderer.createElement(this.document.head, 'meta');
    this.renderer.setElementProperty(elem, 'name', 'twitter:title');
    this.renderer.setElementProperty(elem, 'content', 'ABOUT PAGE');
}

GoToHome()
{
  this.router.navigateByUrl('/');
}

}