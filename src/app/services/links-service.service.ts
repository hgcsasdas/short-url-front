import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { redirectLinkResponseDTO } from '../dto/redirectLinkResponseDTO';
import { AcortarLinksResponseDTO } from '../dto/acortarLinkResponseDTO';
import { qrGenerateResponseDTO } from '../dto/qrGenerateResponseDTO';
import { ErrorService } from './error-service.service';


const baseUrl = (window as any).env?.API_BASE_URL as string;

@Injectable({
  providedIn: 'root',
})
export class LinksServiceService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  // Obtener el enlace redirigido
  getLink(linkAcortado: string): Observable<redirectLinkResponseDTO> {
    return this.http.get<redirectLinkResponseDTO>(`${baseUrl}/${linkAcortado}`)
      .pipe(
        catchError((error) => {
          console.log(error);

          this.errorService.handleError(error);
          return [];
        })
      );
  }

  // Crear enlace acortado
  createShortLink(originalLink: string): Observable<AcortarLinksResponseDTO> {
    return this.http.post<AcortarLinksResponseDTO>(`${baseUrl}/acortar`, { linkOriginal: originalLink })
      .pipe(
        catchError((error) => {
          this.errorService.handleError(error.error);
          return [];
        })
      );
  }

  // Crear enlace QR
  createQrLink(linkToQr: string, baseUrlWeb: string): Observable<qrGenerateResponseDTO> {
    return this.http.post<qrGenerateResponseDTO>(`${baseUrl}/qrGenerate`, { linkToQr, baseUrl: baseUrlWeb })
      .pipe(
        catchError((error) => {
          this.errorService.handleError(error);
          return [];
        })
      );
  }
}
