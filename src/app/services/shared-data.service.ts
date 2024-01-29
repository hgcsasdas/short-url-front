import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private linkAcortadoSource = new BehaviorSubject<string>('');
  linkAcortado$ = this.linkAcortadoSource.asObservable();

  private existeLinkSource = new BehaviorSubject<boolean>(false);
  existeLink$ = this.existeLinkSource.asObservable();

  private existeQr = new BehaviorSubject<boolean>(false);
  existeQr$ = this.existeQr.asObservable();

  setLinkAcortado(linkAcortado: string) {
    this.linkAcortadoSource.next(linkAcortado);
  }

  setExisteLink(existeLink: boolean) {
    this.existeLinkSource.next(existeLink);
  }

  setExisteQr(existeQr: boolean) {
    this.existeQr.next(existeQr);
  }
}
