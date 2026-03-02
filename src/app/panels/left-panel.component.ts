import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css',
})
export class LeftPanelComponent {}
