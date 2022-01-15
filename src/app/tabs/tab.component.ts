/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Element } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-tab',
  styles: [
    `
     .pane{
       padding: 1em;
     }
   `
  ],
  template: `
     <div [hidden]="!active" class="pane">
       <ng-content></ng-content>
       <ng-container *ngIf="template"
         [ngTemplateOutlet]="template"
         [ngTemplateOutletContext]="{ any: dataContext }"
       >
       </ng-container>
     </div>
   `
})
export class TabComponent {
  @Input('tabTitle') title: string = "";
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template: any = {};
  @Input() dataContext = {};
}
