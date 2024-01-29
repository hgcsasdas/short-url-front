import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ErrorResponseDTO } from '../dto/errorResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSubject = new BehaviorSubject<ErrorResponseDTO | null>(null);
  error$ = this.errorSubject.asObservable();

  handleError(error: any): void {
    const errorResponse: ErrorResponseDTO = {
      message: error.message || 'Ocurrió un error inesperado',
      status: 'error'
    };
    this.errorSubject.next(errorResponse);
  }

  clearError(): void {
    this.errorSubject.next(null);
  }
}
