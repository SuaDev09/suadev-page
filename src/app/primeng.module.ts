// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Imports
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [], // No declarations needed
  imports: [CommonModule], // Import the Modules that are needed in the app
  exports: [ButtonModule], // Export the Modules to be used in the app
})
export class PrimengModule {}
