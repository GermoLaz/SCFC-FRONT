import { Router } from '@angular/router';
import { DifferenceService } from './../../services/difference.service';
import { FilesUploadService } from './files-upload.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Difference } from '../../models/differences.model';
import { InvoicesResponse } from '../../models/InvoicesResponse.model';



@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrl: './files-upload.component.css',
  providers: [MessageService]
})
export class FilesUploadComponent {
  uploadedFiles: any[] = [];
  uploadedFile: any;

  constructor(private messageService: MessageService,
    private filesUploadService: FilesUploadService,
    private differenceService: DifferenceService,
    private router: Router) { }

  // onUpload(event: { files: any; }) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  //   console.log(this.uploadedFiles)
  //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });

  // }
  onUpload(event: { files: any; }) {
    this.uploadedFile = event.files[0];
    console.log(this.uploadedFile);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
  // onUploadAFIP(event: { files: any; }) {
  //   for (let file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }
  //   console.log(this.uploadedFiles);
  //   this.filesUploadService.getDifferences(this.uploadedFiles[0], this.uploadedFiles[0]);
  //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });

  // }

  onUploadAFIP(event: { files: any; }) {
    if (event.files.length < 2) {
      console.log('Por favor, cargue dos archivos.');
      this.messageService.add({ severity: 'info', summary: 'Error', detail: 'Por favor, cargue dos archivos.' });

      return;
    }


    const file1 = event.files[0];
    const file2 = event.files[1];

    // this.filesUploadService.getDifferences(file1, file2);
    this.filesUploadService.getDifferences(file1, file2).then(
      (invoiceResponse : InvoicesResponse) => {
        console.log(invoiceResponse)
        this.differenceService.changeDifferences(invoiceResponse.differences);
        // this.router.navigate(['/difference-table']);
      }
    );
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

}
