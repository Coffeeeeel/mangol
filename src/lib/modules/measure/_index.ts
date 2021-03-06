import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { MangolMeasureComponent } from './measure.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MangolMeasureComponent
  ],
  declarations: [
    MangolMeasureComponent
  ]
})
export class MangolMeasureModule { }
