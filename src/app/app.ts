import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {}
