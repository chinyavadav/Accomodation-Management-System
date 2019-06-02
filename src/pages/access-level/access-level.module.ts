import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessLevelPage } from './access-level';

@NgModule({
  declarations: [
    AccessLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(AccessLevelPage),
  ],
})
export class AccessLevelPageModule {}
