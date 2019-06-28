import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLinkStubDirective} from './testing-helpers';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkStubDirective)
    );

    links = linkDes.map(
      d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective
    );
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(5);
    expect(links[0].linkParams).toBe('/');
    expect(links[1].linkParams).toBe('/products-list');
  });

  it('can click Products link in template', () => {
    const productsLinkDe = linkDes[1];
    const productsLink = links[1];

    expect(productsLink.navigatedTo).toBeNull();

    productsLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(productsLink.navigatedTo).toBe('/products-list');
  });

});
