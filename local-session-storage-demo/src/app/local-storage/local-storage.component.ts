import { Component } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {
  // Almacena un valor en Local Storage
  setLocalStorageData() {
    localStorage.setItem('mensaje', 'Este es un valor almacenado en Local Storage');
  }

  // Recupera un valor de Local Storage
  getLocalStorageData() {
    const mensaje = localStorage.getItem('mensaje');
    alert(mensaje);
  }
}
