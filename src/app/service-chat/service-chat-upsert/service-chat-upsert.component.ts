import { Component, OnInit } from '@angular/core';
import { ServiceChat } from 'src/app/_models/serviceChat';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceChatService } from 'src/app/_services/service-chat.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-chat-upsert',
  templateUrl: './service-chat-upsert.component.html',
  styleUrls: ['./service-chat-upsert.component.css']
})
export class ServiceChatUpsertComponent implements OnInit {
  chat: ServiceChat;
  chats: Observable<ServiceChat[]>;
  action: string;
  ready: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceChatService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.ready = false;
    this.chat = new ServiceChat();

    this.chat.id = this.route.snapshot.params.id;
    this.action = 'Create';
    if (this.chat.id) {
      this.load();
    }
    this.chats = this.serviceService.getAllChats();
    this.ready = true;
  }

  load() {
    this.action = 'Update';
    this.serviceService.getChat(this.chat.id).subscribe(
      (service: ServiceChat) => {
        this.chat = service;
      },
      (error) => {
        this.alertify.error(error);
      }
    )
  }

  updateChat() {
    this.serviceService.updateChat(this.chat).subscribe(
      (data) => {
        console.log(data);
        this.alertify.success("Чат успешно изменен");
      },
      (error) => {
        console.log(error);
        this.alertify.success("Чат успешно изменен");
      }
    );
  }

  save() {
    this.serviceService.createChat(this.chat).subscribe( next => {
        this.alertify.success("Чат успешно создан");
      },
      error => { 
        this.alertify.success("Чат успешно создан");
        console.log(error);
      }
    );
    this.chat = new ServiceChat();
    this.gotoList();
  }

  onSubmit() {
    if (this.chat.id) {
      this.updateChat();
    } else {
      this.save();
    }
  }

  gotoList() {
    this.chat = new ServiceChat();
    this.router.navigate(['/chats']);
  }

}
