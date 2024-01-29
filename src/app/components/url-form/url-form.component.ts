import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LinksServiceService } from '../../services/links-service.service';
import { redirectLinkResponseDTO } from '../../dto/redirectLinkResponseDTO';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data.service';
import { AcortarLinksResponseDTO } from '../../dto/acortarLinkResponseDTO';
import { ErrorService } from '../../services/error-service.service';

@Component({
  selector: 'app-url-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [
    {
      provide: LinksServiceService,
      useFactory: (http: HttpClient, errorService: ErrorService) => new LinksServiceService(http, errorService),
      deps: [HttpClient, ErrorService],
    },
  ],
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css'],
})
export class UrlFormComponent {
  link?: redirectLinkResponseDTO;
  linkAcortado?: AcortarLinksResponseDTO;
  originalLink = '';

  isLoading = false;

  constructor(private linksService: LinksServiceService, private sharedDataService: SharedDataService) {}

  createShortLink() {
    this.isLoading = true;
    this.sharedDataService.setExisteLink(false);
    this.sharedDataService.setExisteQr(false);
    // Llama a la función del servicio para crear un enlace acortado
    this.linksService
      .createShortLink(this.originalLink)
      .subscribe((response) => {
        this.linkAcortado = response;

        this.sharedDataService.setLinkAcortado(this.linkAcortado?.linkAcortado || '');
        this.sharedDataService.setExisteLink(true);
        this.sharedDataService.setExisteQr(false);
        this.isLoading = false;
      });
  }


}
