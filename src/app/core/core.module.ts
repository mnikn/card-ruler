import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteItemDirective } from './delete-item.directive';
import { AddNewItemDirective } from './add-new-item.directive';
import { EditItemDirective } from './edit-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeleteItemDirective,
    AddNewItemDirective,
    EditItemDirective],
  exports: [
    DeleteItemDirective,
    AddNewItemDirective,
    EditItemDirective]
})
export class CoreModule {
}
