import { Component, OnInit } from '@angular/core';
import { Text } from '../_models/text';
import { TextService } from '../_services/text.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  texts: Observable<Text[]>;

  constructor(
    private textService: TextService,
    private alertify: AlertifyService, 
    private router: Router)
     { }

    ngOnInit() 
    {
      this.reloadData();
    }
  
    reloadData() {
      this.texts = this.textService.getAllTexts();
    }

    updateText(id: number){
      this.router.navigate(['text/text-upsert', id]);
    }



}
