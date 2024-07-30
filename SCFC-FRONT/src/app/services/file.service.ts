import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { InvoicesResponse } from '../models/InvoicesResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  /* swal2 */
  private errorTitle = 'Error';
  private errorSwalIcon: SweetAlertIcon = 'error';

  private apiUrl = 'http://localhost:8080/invoice/';

  constructor(private http: HttpClient) {}

  getDifferences(localFile: File, afipFile: File): Promise<InvoicesResponse> {
    return new Promise(async (resolve, reject) => {
      const formData: FormData = new FormData();
      formData.append('file', localFile);
      formData.append('file2', afipFile);
      try {
        const res = await fetch(`${this.apiUrl}/compare`, {
          method: 'POST',
          body: formData      
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Error al procesar los archivos');
        }
        const json = await res.json();
        resolve(json);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  generateFile(invoices: any[]): Observable<Blob> {
    return this.http.post(`${this.apiUrl}generateFile`, invoices, {
      responseType: 'blob'
    });
  }
}




