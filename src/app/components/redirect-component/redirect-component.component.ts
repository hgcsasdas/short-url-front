import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { LinksServiceService } from '../../services/links-service.service';
import { ErrorService } from '../../services/error-service.service';

@Component({
  selector: 'app-redirect-component',
  standalone: true,
  imports: [HttpClientModule],
  providers: [
    {
      provide: LinksServiceService,
      useFactory: (http: HttpClient, errorService: ErrorService) => new LinksServiceService(http, errorService),
      deps: [HttpClient, ErrorService],
    },
  ],  templateUrl: './redirect-component.component.html',
  styleUrl: './redirect-component.component.css',
})
export class RedirectComponentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private linksService: LinksServiceService
  ) {}

  ngOnInit() {
    const linkAcortado = this.route.snapshot.paramMap.get('linkAcortado');


    // Asegúrate de que linkAcortado no sea undefined
    if (linkAcortado) {
      this.linksService.getLink(linkAcortado).subscribe((response) => {
        if (response && response.redirectToLink) {
          window.location.href = response.redirectToLink;
        } else {
          // Manejar el caso de que no haya una URL de redirección
          console.log("URL de redirección no encontrada");
        }
      });
    } else {
      console.log("No se proporcionó un enlace acortado válido");
    }
  }
}
