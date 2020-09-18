import { Component, OnInit } from '@angular/core';

import { Text } from 'src/app/_models/text';
import { ActivatedRoute, Router } from '@angular/router';
import { TextService } from 'src/app/_services/text.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-upsert',
  templateUrl: './text-upsert.component.html',
  styleUrls: ['./text-upsert.component.css']
})
export class TextUpsertComponent implements OnInit {

  text: Text;
  texts: Observable<Text[]>;
  action: string;
  ready: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private textService: TextService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.ready = false;
    this.text = new Text();

    this.text.id = this.route.snapshot.params.id;
    this.action = 'Create';
    if (this.text.id) {
      this.load();
    }
    this.texts = this.textService.getAllTexts();
    this.ready = true;
  }

  load() {
    this.action = 'Update';
    this.textService.getText(this.text.id).subscribe(
      (text: Text) => {
        this.text = text;
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  updateText() {
    this.textService.updateText(this.text).subscribe(
      (data) => {
        console.log(data);
        this.alertify.success("Текст успешно изменен");
      },
      (error) => {
        console.log(error);
        this.alertify.success("Текст успешно изменен");
      }
    );
  }

  onSubmit() {
    if (this.text.id) {
      this.updateText();
    }
  }

  gotoList() {
    this.text = new Text();
    this.router.navigate(['/texts']);
  }

}
