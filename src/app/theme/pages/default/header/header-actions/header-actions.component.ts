import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
  selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
  templateUrl: "./header-actions.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class HeaderActionsComponent implements OnInit, AfterViewInit {


  constructor(private _script: ScriptLoaderService) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/demo/default/custom/header/actions.js');

  }

}
