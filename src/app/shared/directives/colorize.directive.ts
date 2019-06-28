import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColorize]'
})
export class ColorizeDirective {
  defaultColor = 'coral';

  @Input('appColorize') bgColor: string;

  @HostBinding('style.background-color')
  hostBgColor;

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.hostBgColor = this.bgColor || this.defaultColor;
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.hostBgColor = '';
  }

}
