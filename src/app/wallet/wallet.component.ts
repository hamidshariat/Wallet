import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  isOpen: boolean = false;
  totalValue: number = 0;
   onDragStart(event: any,) {
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

    // @ts-ignore
    let draggedImageValue = parseInt(document.getElementById(draggedImageId).getAttribute('data-value') || '0');
    if (draggedImageValue > 0 && targetImageId == 'CloseWallet') {
      this.totalValue += draggedImageValue;
      this.isOpen = true;
    }

    setTimeout(() => {
      this.isOpen = false;
      // Update the UI or display the total value somewhere
      console.log("Total Value:", this.totalValue);
    }, 1500);

  }


  Deductamount2000() {
    this.totalValue = this.totalValue -2000
  }

  Deductamount500() {
    this.totalValue=this.totalValue-500
  }

  Deductamount5000() {
    this.totalValue=this.totalValue-5000

  }

  Deductamount50000() {
    this.totalValue=this.totalValue-50000

  }

  Deductamount100000() {
    this.totalValue=this.totalValue-100000

  }
}
function Deductamount2000() {
    throw new Error('Function not implemented.');
}

