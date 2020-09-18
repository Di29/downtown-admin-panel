import { Component, OnInit } from '@angular/core';
import { Subservice } from '../_models/subservice';
import { Observable } from 'rxjs';
import { SubserviceService } from '../_services/subservice.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent implements OnInit {
  subservices: Observable<Subservice[]>;

  constructor(
    private subserviceService: SubserviceService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.subservices = this.subserviceService.getAllSubservices();
  }

  deleteSubservice(id: number) {
    this.alertify.confirm(
      "Вы уверены что хотите удалить?" , () => {
        this.subserviceService.deleteSubservice(id).subscribe(
          data => {
            this.alertify.success(data);
            this.reloadData();
          },
          error => { 
          this.alertify.success("Подсервис успешно удален");
          this.reloadData();
          }
        );
      }
    )
  }

  updateSubservice(id: number) {
    this.router.navigate(['subservice/sub-upsert', id]);
  }

  createSubservice() {
    this.router.navigate(['subservice/sub-upsert']);
  }

}
