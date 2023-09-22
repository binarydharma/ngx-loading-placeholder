import { Directive,ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[LoadingPlaceholder]'
})
export class NgxLoadingPlaceholderDirective{

  @Input() set LoadingPlaceholder(loading: boolean){
    if(!loading)
      this.el.nativeElement.classList.remove('placeholderChildren');
    else
      this.el.nativeElement.classList.add('placeholderChildren');
  };

  constructor(private el: ElementRef){}
}
