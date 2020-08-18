import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdPaginationAdvanced } from './usersList.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdPaginationAdvanced],
  exports: [NgbdPaginationAdvanced],
  bootstrap: [NgbdPaginationAdvanced]
})
export class NgbdPaginationAdvancedModule {}
