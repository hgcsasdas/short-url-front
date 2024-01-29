import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error-service.service';
import { ErrorResponseDTO } from '../../dto/errorResponseDTO';

@Component({
  selector: 'app-error-display',
  standalone: true,
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {
  error: ErrorResponseDTO | null = null;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.error$.subscribe(error => {
      console.log('ErrorDisplayComponent: error$ subscription');

      this.error = error;
    });
  }

  closeError(): void {
    this.errorService.clearError();
  }
}
