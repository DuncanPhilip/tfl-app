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
  leftPanelWidth = signal(256);
  rightPanelWidth = signal(256);

  private isDraggingLeft = false;
  private isDraggingRight = false;
  private startX = 0;
  private startLeftWidth = 0;
  private startRightWidth = 0;

  constructor(private elementRef: ElementRef) {}

  onLeftSplitterDown(event: MouseEvent): void {
    this.isDraggingLeft = true;
    this.startX = event.clientX;
    this.startLeftWidth = this.leftPanelWidth();
    event.preventDefault();
  }

  onRightSplitterDown(event: MouseEvent): void {
    this.isDraggingRight = true;
    this.startX = event.clientX;
    this.startRightWidth = this.rightPanelWidth();
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDraggingLeft) {
      const delta = event.clientX - this.startX;
      const newWidth = Math.max(200, this.startLeftWidth + delta);
      this.leftPanelWidth.set(newWidth);
    }

    if (this.isDraggingRight) {
      const delta = this.startX - event.clientX;
      const newWidth = Math.max(200, this.startRightWidth + delta);
      this.rightPanelWidth.set(newWidth);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDraggingLeft = false;
    this.isDraggingRight = false;
  }
}
