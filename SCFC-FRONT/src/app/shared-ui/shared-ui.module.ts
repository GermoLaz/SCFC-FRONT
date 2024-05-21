import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    TableModule
  ]

})

export class SharedUiModule { }
