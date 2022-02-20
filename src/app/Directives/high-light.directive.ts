import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHightlight = 'red';

  constructor(private el: ElementRef) {
    console.log('HighLightDirective');
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHightlight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
