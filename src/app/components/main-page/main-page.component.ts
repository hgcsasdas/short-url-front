import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiResponseComponent } from '../api-response/api-response.component';
import { DemoComponent } from '../demo-components/demo/demo.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { UrlFormComponent } from '../url-form/url-form.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, UrlFormComponent, DemoComponent, FooterComponent, ApiResponseComponent],
  template: `
    <app-header></app-header>
    <app-url-form></app-url-form>
    <app-api-response></app-api-response>
    <app-demo></app-demo>
    <app-footer></app-footer>
  `,
  styles: []
})
export class MainPageComponent {

}
