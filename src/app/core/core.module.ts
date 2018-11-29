import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteItemDirective } from './delete-item.directive';
import { AddNewItemDirective } from './add-new-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeleteItemDirective, AddNewItemDirective],
  exports: [DeleteItemDirective, AddNewItemDirective]
})
export class CoreModule {
}
