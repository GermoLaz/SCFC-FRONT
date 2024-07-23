import { Component, ViewChild } from '@angular/core';
import { FilesUploadComponent } from '../../components/files-Upload/files-upload.component';
import { DifferenceTableComponent } from '../../components/differences-table/differences-table.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @ViewChild(FilesUploadComponent) filesUploadComponent!: FilesUploadComponent;
  @ViewChild(DifferenceTableComponent) differenceTableComponent!: DifferenceTableComponent;
  
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
}