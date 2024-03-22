import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivityService } from 'src/app/core/service/activity.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  
  constructor(private activityService : ActivityService) {}
  
  tagSelected : BehaviorSubject<string> = this.activityService.filter;
  selectTag(tag: string): void {
    
    this.activityService.filter.next(tag)
  }
}
