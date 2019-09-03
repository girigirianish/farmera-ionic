import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogBookPage } from './log-book.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LogBookPage
      }
    ])
  ],
  declarations: [LogBookPage]
})
export class LogBookPageModule {}
