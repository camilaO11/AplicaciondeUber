import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: { sender: string; text: string }[] = [];
  newMessage: string = '';
  form: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Configuración del formulario
    this.form = this.formBuilder.group({
      promt: [''],
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'Tú', text: this.newMessage });
      this.newMessage = ''; // Limpia el cuadro de texto después de enviar el mensaje
    }
  }
  submit() {
    // Implementa la lógica del evento submit
    const formData = this.form.value;
    // Hacer algo con los datos del formulario, como enviarlos al servidor o procesarlos localmente.
  }
}


