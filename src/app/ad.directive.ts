import { Directive, ViewContainerRef, Input,ComponentFactoryResolver } from '@angular/core';
import { AdItem }      from './ad-item';
import { HeroProfileComponent } from './hero-profile.component';

import { HeroJobAdComponent }   from './hero-job-ad.component';

@Directive({
  selector: '[ad-host]',
})
export class AdDirective {

  @Input() number: any;

  constructor(public viewContainerRef: ViewContainerRef,private componentFactoryResolver: ComponentFactoryResolver) { 
  }

  ngOnInit() {
             console.log("resolver vista_: "+this.number);
const item = [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
             const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item[this.number].component);

    const viewContainerRef = this.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).data = item[this.number].data;
      }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/