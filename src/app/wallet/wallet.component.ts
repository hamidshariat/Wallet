import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  isOpen: boolean = false;

  onDragStart(event: any) {
    event.dataTransfer.setData("imageId", event.target.id);
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onDrop(event: any) {
    let DisplayCloseWallet: any = document.getElementById("CloseWallet");
    event.preventDefault();
    const draggedImageId = event.dataTransfer.getData("imageId");
    const targetImageId = event.target.id;

    if (draggedImageId == 'DoToman' && targetImageId == 'CloseWallet' ||
      draggedImageId == 'PonsadToman' && targetImageId == 'CloseWallet' ||
      draggedImageId == 'PanjToman' && targetImageId == 'CloseWallet' ||
      draggedImageId == 'PanjahToman' && targetImageId == 'CloseWallet' ||
      draggedImageId == 'SadToman' && targetImageId == 'CloseWallet') {
      this.isOpen = true;
    }
    setTimeout(() => {
        this.isOpen = false;

    }
    , 1500);
  }


}
