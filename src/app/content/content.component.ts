import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(
    private messageService: MessageService,
  ){}

  displayMessage(){
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
