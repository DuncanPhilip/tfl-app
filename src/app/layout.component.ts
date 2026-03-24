import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MapComponent } from './map/map.component';
import { TopPanelComponent } from './panels/top-panel.component';
import { BottomPanelComponent } from './panels/bottom-panel.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MapComponent, TopPanelComponent, BottomPanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}

