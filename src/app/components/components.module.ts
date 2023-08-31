import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng.module';
import { LayoutModule } from './layout/layout.module';
import { BagdeComponent } from './bagde/bagde.component';
import { ButtonComponent } from './button/button.component';
import { ViewPanelComponent } from './view-panel/view-panel.component';

@NgModule({
  declarations: [
    BagdeComponent,
    ButtonComponent,
    ViewPanelComponent
  ],
  imports: [CommonModule, PrimengModule, LayoutModule],
  exports: [LayoutModule],
})
export class ComponentsModule {}
