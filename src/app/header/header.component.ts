import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() tabChangeEmiter = new EventEmitter<string>();
  actualOpenTab = 'mainMenu';

  onSelect(selected: string) {
    this.actualOpenTab = selected;
    this.tabChangeEmiter.emit(this.actualOpenTab);
  }
}
