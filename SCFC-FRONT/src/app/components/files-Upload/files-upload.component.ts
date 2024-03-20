import { Component } from '@angular/core';
import { UploadEvent } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrl: './files-upload.component.css',
  providers: [MessageService]
})
export class FilesUploadComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: { files: any; }) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles)
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });

  }
}
