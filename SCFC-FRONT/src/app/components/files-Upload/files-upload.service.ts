import { Difference } from '../../models/difference.model';
import { Injectable } from '@angular/core';
import { AjaxService } from '../../services/ajax.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FilesUploadService {
  /* swal2 */
  private errorTitle = 'Error';
  private errorSwalIcon: SweetAlertIcon = 'error';

  private url = 'http://localhost:8080/invoice/compare';
  constructor(private ajxStv: AjaxService) { }

  getDifferences(localFile: File, afipFile: File): Promise<{ differencesFromFile1: Difference[], differencesFromFile2: Difference[] }> {
    return new Promise((resolve, reject) => {
      const formData: FormData = new FormData();
      formData.append('file', localFile);
      formData.append('file2', afipFile);

      this.ajxStv.POST(this.url, formData).subscribe(
        (resp: any) => {
          console.log('Respuesta del servidor:', resp);
          if (resp.error) {
            Swal.fire(this.errorTitle, /*this.errSrv.getMessage(resp.error), this.errorSwalIcon*/ '');
            reject();
          } else {
            // Asegúrate de que resp tiene la estructura correcta
            if (resp.differencesFromFile1 && resp.differencesFromFile2) {
              console.log('Respuesta del servidor:', resp);

              resolve(resp);
            } else {
              console.log('Respuesta del servidor:', resp);

              reject('La respuesta del servidor no tiene la estructura correcta.');
            }
          }
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
          reject(error);
        }
      );
    });
  }
}


//ANALIZAR MODIFICACION PARA QUE EL SUBSCRIBE NO QUEDE DEPRECADO

// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

// private destroy$ = new Subject<void>();


// getDifferences(localFile: File, afipFile: File): Promise<String> {
//   return new Promise((resolve, reject) => {
//     const formData: FormData = new FormData();
//     formData.append('file', localFile);
//     formData.append('file2', afipFile);

//     this.http.post(this.url, formData).pipe(
//       takeUntil(this.destroy$)
//     ).subscribe(
//       (resp: Differences) => {
//         if (resp.error) {
//           Swal.fire(this.errorTItle, /*this.errSrv.getMessage(resp.error), this.errorSwalIcon*/ '');
//           reject();
//         } else {
//           resolve(resp.data);
//         }
//       },
//       // error}
//       () => {
//         reject();
//       }
//     );
//   });
// }

// ngOnDestroy() {
//   this.destroy$.next();
//   this.destroy$.complete();
// }




