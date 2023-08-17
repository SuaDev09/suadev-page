import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule, LayoutModule],
  exports: [LayoutModule],
})
export class ComponentsModule {}
