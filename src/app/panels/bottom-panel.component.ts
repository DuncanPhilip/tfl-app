import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bottom-panel.component.html',
  styleUrl: './bottom-panel.component.css',
})
export class BottomPanelComponent {}
