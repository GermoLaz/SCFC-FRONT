import { Component, ViewChild } from '@angular/core';
import { FilesUploadComponent } from '../../components/files-Upload/files-upload.component';
import { DifferenceTableComponent } from '../../components/differences-table/differences-table.component';
import { FileService } from '../../services/file.service';
//import { MessageService } from 'primeng/api/messageservice';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @ViewChild(FilesUploadComponent) filesUploadComponent!: FilesUploadComponent;
  @ViewChild(DifferenceTableComponent) differenceTableComponent!: DifferenceTableComponent;
  constructor(
    private fileService: FileService,
    //private messageService: MessageService

  ) {}

  showTable = false;

  onProcessingComplete(event: boolean) {
    this.showTable = event;
  }


  onPanelCollapse(event: any) {
    this.adjustTableContainer();
  }

  onPanelExpand(event: any) {
    this.adjustTableContainer();
  }

  private adjustTableContainer() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }

  clearFiles() {
    if (this.filesUploadComponent) {
      this.filesUploadComponent.resetFiles();
    }
    this.showTable = false;
  }

  saveItems() {
    if (this.filesUploadComponent) {
      this.differenceTableComponent.saveItems()
    }
  }

  exportFile() {
    const allInvoices = JSON.parse(localStorage.getItem('allInvoices') || '[]');
    
    this.fileService.generateFile(allInvoices).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ivaCompras.txt';
        link.click();
        window.URL.revokeObjectURL(url);
        //this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Archivo exportado correctamente' });
      },
      (error) => {
        console.error('Error al exportar el archivo', error);
        //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo exportar el archivo' });
      }
    );
  }
}