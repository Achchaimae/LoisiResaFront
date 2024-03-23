import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';
import { ActivityService } from 'src/app/core/service/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  activities: Observable<ActivityRespDTO[]> = this.activityService.activities
  currentPage: number = 0;
  selectedTag: string | null = null;
  tagSelected : BehaviorSubject<string> = this.activityService.filter;
  constructor(private activityService:ActivityService){}

  ngOnInit(): void {
    this.getActivities();
    this.tagSelected.subscribe((data : string) => {
      if(data!='all')
      this.activityService.getActivitiesByTag(data)
    })
  }

  getActivities(): void {
    this.activityService.getActivities(this.currentPage)
  }
 
  
}

