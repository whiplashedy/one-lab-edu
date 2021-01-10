import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBodyFooterLayoutComponent } from './header-body-footer-layout/header-body-footer-layout.component';
import { BodyLayoutComponent } from './body-layout/body-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HeaderBodyFooterLayoutComponent, BodyLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ]
})
export class LayoutModule {
  constructor() {
    console.log("LayoutModule is loaded");
  }
}
