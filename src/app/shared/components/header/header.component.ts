import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

import { MANAGE_PIGS } from '@farmera/shared/constants';
import { Group } from '@farmera/core/models';

@Component({
  selector: 'farmera-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input()
  public group: Group;

  constructor(
    private readonly actionSheetController: ActionSheetController,
    private readonly router: Router
  ) {}

  public async openManagePigsActionSheet(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: MANAGE_PIGS.ACTION_SHEET.HEADER_LABEL,
      buttons: [
        {
          text: MANAGE_PIGS.ACTION_SHEET.BUTTONS.ADD_PIGS.TEXT,
          handler: () =>
            console.log(MANAGE_PIGS.ACTION_SHEET.BUTTONS.ADD_PIGS.SELECTED_LOG)
        },
        {
          text: MANAGE_PIGS.ACTION_SHEET.BUTTONS.MOVE_PIGS.TEXT,
          handler: () =>
            console.log(MANAGE_PIGS.ACTION_SHEET.BUTTONS.MOVE_PIGS.SELECTED_LOG)
        },
        {
          text: MANAGE_PIGS.ACTION_SHEET.BUTTONS.SALE_PIGS.TEXT,
          handler: () =>
            console.log(MANAGE_PIGS.ACTION_SHEET.BUTTONS.SALE_PIGS.SELECTED_LOG)
        }
      ]
    });
    await actionSheet.present();
  }

  public ridrectToLogBookPage(): void {
    this.router.navigate(['log-book']);
  }
}
