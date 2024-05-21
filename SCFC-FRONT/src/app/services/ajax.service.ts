import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient) {}

  POST(url: string, data: any, options = {}): Observable<any> {
    return this.http.post(url, data, options).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    )
  }

  GET(url: string): Observable<any> {
    console.log(url);
    return this.http.get(url).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    )
  }

  PUT(url: string, data: any, options = {}): Observable<any> {
    return this.http.put(url, data, options).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    )
  }

  DELETE(url: string, options = {}): Observable<any> {
    return this.http.delete(url, options).pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    )
  }

  /**
   * Procesa los errores comunes
   * @param err
   * @returns
   */
  private handleError(err: HttpErrorResponse): Observable<any> {
    switch (err.status) {
      case 401:
        Swal.fire('ERROR', 'El servidor de datos esta rechazando tus credenciales.', 'error');
        return throwError(err);
      default:
        Swal.fire('ERROR', `Se ha producido un error<br><small>${err.message}</small>`, 'error');
        return throwError(err);
    }
  }

}
