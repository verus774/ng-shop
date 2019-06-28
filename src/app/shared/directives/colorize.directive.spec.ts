import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ColorizeDirective} from './colorize.directive';

@Component({
  template: `
  <h2 appColorize="yellow">Something Yellow</h2>
  <h2 appColorize>The Default (Coral)</h2>
  <h2>No Highlight</h2>
  `
})
class TestComponent {}

describe('ColorizeDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let bareH2: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ColorizeDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(ColorizeDirective));
    bareH2 = fixture.debugElement.query(By.css('h2:not([appColorize])'));

    des.forEach((de: DebugElement) => {
      de.triggerEventHandler('mouseenter', null);
    });

    fixture.detectChanges();
  });

  it('should have 2 colorized elements', () => {
    expect(des.length).toBe(2);
  });

  it('should color 1st <h2> background "yellow"', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('should color 2nd <h2> background w/ default color', () => {
    const dir = des[1].injector.get(ColorizeDirective) as ColorizeDirective;
    const bgColor = des[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe(dir.defaultColor);
  });

  it('cannot inject `ColorizeDirective` in 3rd <h2>', () => {
    const dir = bareH2.injector.get(ColorizeDirective, null);
    expect(dir).toBe(null);
  });

});
