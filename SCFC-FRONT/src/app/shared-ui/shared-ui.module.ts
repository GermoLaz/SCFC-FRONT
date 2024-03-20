import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    FileUploadModule
  ]

})

export class SharedUiModule { }
