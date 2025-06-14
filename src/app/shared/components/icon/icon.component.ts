import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'b-icon',
  imports: [LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  name = input.required<LucideIconData>();
  color = input<string>('#6a7282');
  size = input<string | number>(24);
  strokeWidth = input<string | number>(2);
}
