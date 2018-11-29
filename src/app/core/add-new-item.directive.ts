import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAddNewItem]'
})
export class AddNewItemDirective {

  @Output() createItem: EventEmitter<void> = new EventEmitter<void>();

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'darkgrey';
  }

  @HostListener('mouseover') onMouseOver(): void {
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click') onClick(): void {
    this.createItem.emit();
  }

}
