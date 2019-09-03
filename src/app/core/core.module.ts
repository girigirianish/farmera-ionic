import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GroupsService, TeamsService } from '@farmera/core/contracts';

import { GroupsMockService, TeamsMockService } from '@farmera/core/services';

import { CORE } from '@farmera/core/constants';

@NgModule({
  imports: [HttpClientModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(CORE.ERROR_MESSAGES.MODULE_ALREADY_LOADED);
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: GroupsService, useClass: GroupsMockService },
        { provide: TeamsService, useClass: TeamsMockService }
      ]
    };
  }
}
