import { Component, OnInit } from '@angular/core';
import { SVGReplaceContent } from 'ng-inline-svg';

@Component({
  selector: 'demo',
  template: `
    <div [inlineSVG]="'img/sample.svg'"></div>
  `
})
export class DemoComponent implements OnInit {
  private _showOther: boolean = false;
  private _attrs = {
    'width': '50',
    'height': '50'
  };

  constructor() {
    SVGReplaceContent.AddReplaceContent('#3aa3ff', '#00ff00');
  }
  ngOnInit() {
    setTimeout(() => {
      this._showOther = true;
    }, 100);
  }

  handleSVG(svg: SVGElement, parent: Element | null): SVGElement {
    console.log('Loaded SVG: ', svg, parent);
    svg.setAttribute('width', '100');
    return svg;
  }
}
