import {
  Component,
  ChangeDetectionStrategy,
  signal,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MapComponent } from './map/map.component';
import { LeftPanelComponent } from './panels/left-panel.component';
import { RightPanelComponent } from './panels/right-panel.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MapComponent, LeftPanelComponent, RightPanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
})
export class LayoutComponent {
  // Static layout: top toolbar over map and bottom details panel
}

