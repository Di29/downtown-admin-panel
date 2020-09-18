import { Component, OnInit } from '@angular/core';
import { ServiceChat } from '../_models/serviceChat';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceChatService } from 'src/app/_services/service-chat.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-chat',
  templateUrl: './service-chat.component.html',
  styleUrls: ['./service-chat.component.css']
})
export class ServiceChatComponent implements OnInit {
  chats: Observable<ServiceChat[]>;

  constructor(
    private chatService: ServiceChatService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.chats = this.chatService.getAllChats();
  }

  deleteChat(id: number) {
    this.alertify.confirm(
      "Вы уверены что хотите удалить?" , () => {
        this.chatService.deleteChat(id).subscribe(
          data => {
            this.alertify.success(data);
            this.reloadData();
          },
          error => { 
          this.alertify.success("Чат успешно удален");
          this.reloadData();
          }
        );
      }
    )
  }

  updateChat(id: number) {
    this.router.navigate(['chat/chat-upsert', id]);
  }

  createChat() {
    this.router.navigate(['chat/chat-upsert']);
  }

}
