import { Directive, ElementRef} from '@angular/core';
@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {

  private show = false;

  constructor(private el: ElementRef) {
    this.setup();
  }

  toggle(input: any) {
    this.show = !this.show;
    if (this.show) {
      input.setAttribute('type', 'text');
      this.el.nativeElement.src = 'assets/icons/no_view.svg';
    } else {
      input.setAttribute('type', 'password');
      this.el.nativeElement.src = 'assets/icons/view.svg';
    }
  }

  setup() {
    const img: Element = this.el.nativeElement;
    const input = img.previousSibling;
    img.addEventListener('click', (event) => {
      this.toggle(input);
    });
  }

}
