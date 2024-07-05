import { Difference } from '../../models/differences.model';
import { Injectable } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { InvoicesResponse } from '../../models/InvoicesResponse.model';

@Injectable({
  providedIn: 'root'
})
export class FilesUploadService {
  /* swal2 */
  private errorTitle = 'Error';
  private errorSwalIcon: SweetAlertIcon = 'error';

  private url = 'http://localhost:8080/invoice/compare';

  getDifferences(localFile: File, afipFile: File): Promise<InvoicesResponse> {
    return new Promise( async (resolve, reject) => {
      const formData: FormData = new FormData();
      formData.append('file', localFile);
      formData.append('file2', afipFile);

      try {
        const res = await fetch(this.url, {
          method: 'POST',
          body: formData      
        })

        const json = await res.json()

        resolve(json)
      } catch (error) {
        console.error(error)
        reject(error)
      }
      
    });
  }
}




