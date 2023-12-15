import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'
})
export class TestFormComponent {

  socketUrl: string = 'wss://socketsbay.com/wss/v2/1/demo/';
  private socket: WebSocket | null = null;
  websocketIsOpen = false;

  conectar() {
    // Verifica si ya existe una conexión WebSocket
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.websocketIsOpen = true;
    } else {
      // Si no existe una conexión WebSocket o está cerrada, crea una nueva
      try {
        this.socket = new WebSocket(this.socketUrl);

        // Define los eventos del WebSocket
        this.socket.onopen = (event) => {
          this.websocketIsOpen = true;
          console.log('Conexión abierta:', event);
        };

        this.socket.onmessage = (event) => {
          console.log('Mensaje recibido:', event.data);
          // Aquí puedes manejar el mensaje recibido según tus necesidades
        };

        this.socket.onclose = (event) => {
          this.websocketIsOpen = false;
          console.log('Conexión cerrada:', event);
        };
      } catch (error) {
        console.error('Error al crear la conexión WebSocket:', error);
      }
    }
  }

  desconectar() {
    // Verifica si hay una conexión WebSocket abierta
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      // Cierra la conexión WebSocket
      this.socket.close();
      this.websocketIsOpen = false; // Deshabilita el indicador
    } else {
      console.log('No hay una conexión WebSocket abierta.');
      this.websocketIsOpen = false;
    }
  }

}
