// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [], // No declarations needed
  imports: [CommonModule], // Import the Modules that are needed in the app
  exports: [ButtonModule, MenubarModule], // Export the Modules to be used in the app
})
export class PrimengModule {}
