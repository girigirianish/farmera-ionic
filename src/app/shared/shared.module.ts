import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CardComponent, HeaderComponent } from '@farmera/shared/components';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CardComponent, HeaderComponent],
  exports: [CardComponent, HeaderComponent]
})
export class SharedModule {}
