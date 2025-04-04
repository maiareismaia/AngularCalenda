import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * SharedModule contains common components, directives, and pipes that are used across multiple feature modules.
 * It should be imported in every feature module that needs its exports.
 */
@NgModule({
  declarations: [
    // Shared components, directives, and pipes will be declared here
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    // Also export any shared components, directives, and pipes
  ]
})
export class SharedModule { }
