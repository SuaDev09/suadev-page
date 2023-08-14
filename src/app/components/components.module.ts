import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, PrimengModule],
  exports: [MenubarComponent],
})
export class ComponentsModule {}
