import { NgModule, ModuleWithProviders } from '@angular/core';

import { InlineSVGComponent } from './inline-svg.component';
import { InlineSVGConfig } from './inline-svg.config';
import { InlineSVGDirective } from './inline-svg.directive';
import { SVGReplaceContent } from './svg-replace-content.service';

@NgModule({
  declarations: [InlineSVGDirective, InlineSVGComponent],
  exports: [InlineSVGDirective],
  providers: [SVGReplaceContent],
  entryComponents: [InlineSVGComponent]
})
export class InlineSVGModule {
  static forRoot(config?: InlineSVGConfig): ModuleWithProviders<InlineSVGModule> {
    return {
      ngModule: InlineSVGModule,
      providers: [
        { provide: InlineSVGConfig, useValue: config }
      ]
    };
  }
}
