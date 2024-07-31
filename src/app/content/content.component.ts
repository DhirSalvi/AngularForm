import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private messageService: MessageService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.messageService.add({key:'1', severity: 'success', summary: 'Success', detail: 'Login Successful' });
    });
  }
}
