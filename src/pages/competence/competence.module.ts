import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetencePage } from './competence';

@NgModule({
  declarations: [
    CompetencePage,
  ],
  imports: [
    IonicPageModule.forChild(CompetencePage),
  ],
})
export class CompetencePageModule {}
