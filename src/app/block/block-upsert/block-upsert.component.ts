import { Component, OnInit } from '@angular/core';
import { Block} from '../../_models/block';
import { BlockService } from '../../_services/block.service';
import { Observable } from 'rxjs';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-block-upsert',
  templateUrl: './block-upsert.component.html',
  styleUrls: ['./block-upsert.component.css']
})
export class BlockUpsertComponent implements OnInit {
  block: Block;
  blocks: Observable<Block[]>;
  action: string;
  ready: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockService: BlockService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.ready = false;
    this.block = new Block();

    this.block.id = this.route.snapshot.params.id;
    this.action = 'Create';
    if(this.block.id) {
      this.load();
    }
    this.blocks = this.blockService.getAllBlocks();
    this.ready = true;
  }

  load() {
    this.action = 'Update';
    this.blockService.getBlock(this.block.id).subscribe(
      (block: Block) => {
        this.block = block;
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  updateBlock() {
    this.blockService.updateBlock(this.block).subscribe(
      (data) => {
        console.log(data);
        this.alertify.success(data);
      },
      (error) => {
        this.alertify.success("Блок успешно изменен");
      }
    );
  }

  save() {
    this.blockService.createBlock(this.block).subscribe( next =>{
      this.alertify.success("Блок успешно добавлен");
    }, error => {
      this.alertify.success("Блок успешно добавлен");
      console.log(error);
    }
    );
    this.block = new Block();
    this.gotoList();
  }

  gotoList() {
   this.block = new Block();
   this.router.navigate(['/blocks']);
   
  }

  onSubmit() {
    if (this.block.id) {
      this.updateBlock();
    } else {
      this.save();
    }
  }

}
