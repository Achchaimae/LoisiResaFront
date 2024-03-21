import { Component, Input } from '@angular/core';
import { ActivityReqDTO } from 'src/app/core/model/ActivityReqDTO.model';
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';
import { MediaReqDto } from 'src/app/core/model/MediaReqDTO.model';
import { ActivityService } from 'src/app/core/service/activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent {
  @Input() clubId: number | undefined;
  activityReq: ActivityReqDTO = {
    id: 0,
    mediaList: [],
    name: 'Activity Name',
    tariff: 0.0,
    rating: 0,
    club_id: 0
  };
  mediaUrl: string = '';

  constructor(private activityService: ActivityService) { }

  saveActivity(): void {
    if (this.clubId !== undefined) {
      this.activityReq.club_id = this.clubId;
      this.activityService.saveActivity(this.activityReq)
        .subscribe((response: ActivityRespDTO) => {
          console.log('Saved activity:', response);
        }, (error) => {
          console.error('Error saving activity:', error);
        });
    } else {
      console.error('Club ID is undefined.');
    }
  }

  addMedia(): void {
    if (this.mediaUrl.trim() !== '') {
      const mediaDto: MediaReqDto = {
        mediaUrl: this.mediaUrl,
      };
      this.activityReq.mediaList.push(mediaDto);
      this.mediaUrl = ''; // Clear the input field after adding media
    }
  }
}
