import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileService } from '../../services/file.service';
import { DifferenceService } from './../../services/difference.service';
import { InvoicesResponse } from '../../models/InvoicesResponse.model';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrl: './files-upload.component.css',
  providers: [MessageService]
})
export class FilesUploadComponent {
  @Output() processingComplete = new EventEmitter<boolean>();
  @ViewChild('fileUploadCSV') fileUploadCSV?: FileUpload;
  @ViewChild('fileUploadTXT') fileUploadTXT?: FileUpload;

  csvFile: any;
  txtFile: any;
  loading = false;
  showErrorDialog = false;
  errorMessage = '';

  constructor(
    private messageService: MessageService,
    private fileService: FileService,
    private differenceService: DifferenceService
  ) { }

  onSelectFile(event: any, fileType: 'csv' | 'txt') {
    if (fileType === 'csv') {
      this.csvFile = event.files[0];
      this.messageService.add({ severity: 'info', summary: 'Éxito', detail: 'Archivo CSV seleccionado' });
    } else {
      this.txtFile = event.files[0];
      this.messageService.add({ severity: 'info', summary: 'Éxito', detail: 'Archivo TXT seleccionado' });
    }
    if (this.csvFile && this.txtFile) {
      this.processFiles();
    }
  }

  processFiles() {
    this.loading = true;
    this.fileService.getDifferences(this.csvFile, this.txtFile).then(
      (invoiceResponse: InvoicesResponse) => {
        console.log(invoiceResponse);
        localStorage.setItem('allInvoices', JSON.stringify(invoiceResponse.allInvoices));
        this.differenceService.changeDifferences(invoiceResponse.differences);
        this.loading = false;
        this.processingComplete.emit(true);
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Archivos procesados correctamente' });
      }
    ).catch(error => {
      this.loading = false;
      this.showErrorDialog = true;
      this.errorMessage = error.message || 'Error desconocido';
      this.resetFiles();
    });
    setTimeout(() => {
      this.fileUploadCSV?.cd.markForCheck();
      this.fileUploadTXT?.cd.markForCheck();
    });
  }

  closeErrorDialog() {
    this.showErrorDialog = false;
    this.resetFiles();
  }

  resetFiles() {
    this.csvFile = null;
    this.txtFile = null;
    if (this.fileUploadCSV) {
      this.fileUploadCSV.clear();
    }
    if (this.fileUploadTXT) {
      this.fileUploadTXT.clear();
    }
  }
}