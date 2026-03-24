import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './top-panel.component.html',
  styleUrl: './top-panel.component.css',
})
export class TopPanelComponent {}
