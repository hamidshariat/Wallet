import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoneyComponent } from './money/money.component';
import { WalletComponent } from './wallet/wallet.component';
import { ReroutingComponent } from './rerouting/rerouting.component';
import {MatButtonModule} from "@angular/material/button";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoneyComponent,
    WalletComponent,
    ReroutingComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    DragDropModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
