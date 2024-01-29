import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LinksServiceService } from '../../services/links-service.service';
import { ErrorService } from '../../services/error-service.service';
import { ErrorDisplayComponent } from '../error-display/error-display.component';

@Component({
  selector: 'app-api-response',
  standalone: true,
  imports: [RouterModule, HttpClientModule, ErrorDisplayComponent],
  providers: [
    {
      provide: LinksServiceService,
      useFactory: (http: HttpClient, errorService: ErrorService) => new LinksServiceService(http, errorService),
      deps: [HttpClient, ErrorService],
    },
  ],
  templateUrl: './api-response.component.html',
  styleUrl: './api-response.component.css',
})
export class ApiResponseComponent implements OnInit {
  linkAcortado = '';
  linkLimpio = '';
  existeLink = false;
  existeQr = false;

  //Plataforma de despliegue
  urlBase = 'https://csn-s-url.netlify.app/';

  //qrVar
  qrCodeBase64 = '';

  constructor(
    private sharedDataService: SharedDataService,
    private linksService: LinksServiceService
  ) {}

  ngOnInit() {
    this.sharedDataService.linkAcortado$.subscribe((linkAcortado) => {
      this.linkLimpio = linkAcortado;
      this.linkAcortado = this.urlBase + linkAcortado;
    });

    this.sharedDataService.existeLink$.subscribe((existeLink) => {
      this.existeLink = existeLink;
    });

    this.sharedDataService.existeQr$.subscribe((existeQr) => {
      this.existeQr = existeQr;
    });
  }

  createQrLink() {
    this.linksService.createQrLink(this.linkLimpio, this.urlBase).subscribe({
      next: (response) => {
        if (response && response.qrCode) {
          this.sharedDataService.setExisteQr(true);
          this.qrCodeBase64 = response.qrCode;
        }
      },
      error: (error) => {
        // Aquí puedes manejar los errores, por ejemplo, mostrando un mensaje al usuario
      },
    });
  }
}
