import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../_models/suggestion';
import { SuggestionService } from 'src/app/_services/suggestion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  suggestions: Observable<Suggestion[]>;

  constructor(
    private suggestionService: SuggestionService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.suggestions = this.suggestionService.getAllSuggestions();
  }

  

}
