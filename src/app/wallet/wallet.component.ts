import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  protected readonly close = close;
  isOpen: boolean = false;

  onDragStart() {
    this.isOpen = true;
  }
}
