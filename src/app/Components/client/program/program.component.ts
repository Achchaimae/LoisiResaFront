import { Component, Input } from '@angular/core';
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent {
  @Input() activityData: ActivityRespDTO | null = null;
}
