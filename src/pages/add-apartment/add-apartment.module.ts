import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddApartmentPage } from './add-apartment';

@NgModule({
  declarations: [
    AddApartmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddApartmentPage),
  ],
})
export class AddApartmentPageModule {}
