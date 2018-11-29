import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appEditItem]'
})
export class EditItemDirective {
  @Output() editItem: EventEmitter<void> = new EventEmitter<void>();


  constructor(private element: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver(): void {
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click') onClick(): void {
    this.editItem.emit();
  }

}
