import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input() imgUrl!: string;
  @Input() title!: string;
  @Input() pageText!: string;
  @Input() isTitlePage? = false;
}
