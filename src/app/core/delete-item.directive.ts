import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDeleteItem]'
})
export class DeleteItemDirective {

  @Output() deleteItem: EventEmitter<void> = new EventEmitter<void>();


  constructor(private element: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver(): void {
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click') onClick(): void {
    this.deleteItem.emit();
  }

}
