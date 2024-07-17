import { Component, ViewChild } from '@angular/core';
import { FilesUploadComponent } from '../../components/files-Upload/files-upload.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @ViewChild(FilesUploadComponent) filesUploadComponent!: FilesUploadComponent;
  
  showTable = false;

  onProcessingComplete(event: boolean) {
    this.showTable = event;
  }

  clearFiles() {
    if (this.filesUploadComponent) {
      this.filesUploadComponent.resetFiles();
    }
    this.showTable = false;
  }
}