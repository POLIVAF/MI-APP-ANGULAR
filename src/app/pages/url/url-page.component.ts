/*
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h1>URL Component</h1>

    <input 
      type="text" 
      placeholder="Enter URL"
      [(ngModel)]="url"
    />

    <button (click)="guardarUrl()">Guardar</button>

   @if (urlGuardada) {
  <p>
    URL guardada: {{ urlGuardada }}
  </p>
}
  `
})
export class UrlPageComponent {

  public url: string = '';
  public urlGuardada: string = '';

  guardarUrl() {
    this.urlGuardada = this.url;
  }

} 
*/