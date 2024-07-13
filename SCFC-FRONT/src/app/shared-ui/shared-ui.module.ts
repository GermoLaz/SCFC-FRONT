import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


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
    TableModule,
    ProgressSpinnerModule,
    CheckboxModule,
    PanelModule,
    BrowserAnimationsModule,
    DialogModule
  ]

})

export class SharedUiModule { }
