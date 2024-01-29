import { Component } from '@angular/core';
import { RoadmapComponent } from '../roadmap/roadmap.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [RoadmapComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
