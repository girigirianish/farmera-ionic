import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@farmera/shared';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
