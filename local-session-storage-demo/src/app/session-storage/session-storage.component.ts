import { Component } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export class SessionStorageComponent {
  // Almacena un valor en Session Storage
  setSessionStorageData() {
    sessionStorage.setItem('mensaje', 'Este es un valor almacenado en Session Storage');
  }

  // Recupera un valor de Session Storage
  getSessionStorageData() {
    const mensaje = sessionStorage.getItem('mensaje');
    alert(mensaje);
  }
}
