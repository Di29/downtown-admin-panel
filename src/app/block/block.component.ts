import { Component, OnInit } from '@angular/core';
import { Block} from '../_models/block';
import { BlockService } from '../_services/block.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  blocks: Observable<Block[]>;

  constructor(
    private blockService: BlockService, 
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.blocks = this.blockService.getAllBlocks();
  }

  deleteBlock(id: number) {
    this.alertify.confirm(
      'Вы уверены что хотите удалить?', () => {
        this.blockService.deleteBlock(id)
        .subscribe(
          data => {
            this.alertify.success(data);
            this.reloadData();
          },
          error => {
            this.alertify.success("Блок успешно удален");
            this.reloadData();
         }
        );
      }
    );
  }

  updateBlock(id: number) {
    this.router.navigate(['block/block-upsert', id]);
  }

  createBlock() {
    this.router.navigate(['block/block-upsert']);
  }

}
