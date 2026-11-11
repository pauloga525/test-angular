import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly buildDate = new Date().toLocaleString('es-EC');
  protected readonly clicks = signal(0);

  protected increment(): void {
    this.clicks.update(n => n + 1);
  }
}
