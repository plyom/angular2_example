/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './app.component.css.shim';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/router/src/router_outlet_map';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
import * as import21 from '@angular/router/src/directives/router_link';
import * as import22 from '@angular/router/src/directives/router_link_active';
import * as import23 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.AppComponent();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AppComponent_0_4:Wrapper_AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'my-app',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new Wrapper_AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AppComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import9.ComponentFactory<import0.AppComponent> = new import9.ComponentFactory<import0.AppComponent>('my-app',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = [import10.styles];
var renderType_AppComponent:import2.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _RouterLinkWithHref_5_3:import11.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_5_4:import12.Wrapper_RouterLinkActive;
  _query_RouterLink_5_0:import13.QueryList<any>;
  _query_RouterLinkWithHref_5_1:import13.QueryList<any>;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _RouterLinkWithHref_8_3:import11.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_8_4:import12.Wrapper_RouterLinkActive;
  _query_RouterLink_8_0:import13.QueryList<any>;
  _query_RouterLinkWithHref_8_1:import13.QueryList<any>;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import3.AppElement;
  _RouterOutlet_12_5:import14.Wrapper_RouterOutlet;
  _text_13:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_24 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,parentRenderNode,'nav',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_3,'a',new import4.InlineArray4(4,'routerLink','/dashboard','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_5_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import15.Router),this.parentInjector.get(import16.ActivatedRoute),this.parentInjector.get(import17.LocationStrategy));
    this._RouterLinkActive_5_4 = new import12.Wrapper_RouterLinkActive(this.parentInjector.get(import15.Router),new import18.ElementRef(this._el_5),this.renderer);
    this._query_RouterLink_5_0 = new import13.QueryList<any>();
    this._query_RouterLinkWithHref_5_1 = new import13.QueryList<any>();
    this._text_6 = this.renderer.createText(this._el_5,'Dashboard',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_3,'a',new import4.InlineArray4(4,'routerLink','/heroes','routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_8_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import15.Router),this.parentInjector.get(import16.ActivatedRoute),this.parentInjector.get(import17.LocationStrategy));
    this._RouterLinkActive_8_4 = new import12.Wrapper_RouterLinkActive(this.parentInjector.get(import15.Router),new import18.ElementRef(this._el_8),this.renderer);
    this._query_RouterLink_8_0 = new import13.QueryList<any>();
    this._query_RouterLinkWithHref_8_1 = new import13.QueryList<any>();
    this._text_9 = this.renderer.createText(this._el_8,'Heroes',(null as any));
    this._text_10 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_12 = new import3.AppElement(12,(null as any),this,this._el_12);
    this._RouterOutlet_12_5 = new import14.Wrapper_RouterOutlet(this.parentInjector.get(import19.RouterOutletMap),this._appEl_12.vcRef,this.parentInjector.get(import20.ComponentFactoryResolver),(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_5,'click',this.eventHandler(this._handle_click_5_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._RouterLinkWithHref_5_3.context; }
    if (((token === import22.RouterLinkActive) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._RouterLinkActive_5_4.context; }
    if (((token === import21.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    if (((token === import22.RouterLinkActive) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkActive_8_4.context; }
    if (((token === import23.RouterOutlet) && (12 === requestNodeIndex))) { return this._RouterOutlet_12_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = '/dashboard';
    this._RouterLinkWithHref_5_3.check_routerLink(currVal_5_0_0,throwOnChange,false);
    this._RouterLinkWithHref_5_3.detectChangesInInputProps(this,this._el_5,throwOnChange);
    const currVal_5_1_0:any = 'active';
    this._RouterLinkActive_5_4.check_routerLinkActive(currVal_5_1_0,throwOnChange,false);
    this._RouterLinkActive_5_4.detectChangesInInputProps(this,this._el_5,throwOnChange);
    const currVal_8_0_0:any = '/heroes';
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.detectChangesInInputProps(this,this._el_8,throwOnChange);
    const currVal_8_1_0:any = 'active';
    this._RouterLinkActive_8_4.check_routerLinkActive(currVal_8_1_0,throwOnChange,false);
    this._RouterLinkActive_8_4.detectChangesInInputProps(this,this._el_8,throwOnChange);
    this._RouterOutlet_12_5.detectChangesInInputProps(this,this._el_12,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_5_0.dirty) {
        this._query_RouterLink_5_0.reset(([] as any[]));
        this._RouterLinkActive_5_4.context.links = this._query_RouterLink_5_0;
        this._query_RouterLink_5_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_5_1.dirty) {
        this._query_RouterLinkWithHref_5_1.reset([this._RouterLinkWithHref_5_3.context]);
        this._RouterLinkActive_5_4.context.linksWithHrefs = this._query_RouterLinkWithHref_5_1;
        this._query_RouterLinkWithHref_5_1.notifyOnChanges();
      }
      if (this._query_RouterLink_8_0.dirty) {
        this._query_RouterLink_8_0.reset(([] as any[]));
        this._RouterLinkActive_8_4.context.links = this._query_RouterLink_8_0;
        this._query_RouterLink_8_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_8_1.dirty) {
        this._query_RouterLinkWithHref_8_1.reset([this._RouterLinkWithHref_8_3.context]);
        this._RouterLinkActive_8_4.context.linksWithHrefs = this._query_RouterLinkWithHref_8_1;
        this._query_RouterLinkWithHref_8_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_5_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_8_4.context.ngAfterContentInit(); }
    }
    const currVal_24:any = import4.interpolate(1,'',this.context.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setText(this._text_1,currVal_24);
      this._expr_24 = currVal_24;
    }
    this._RouterLinkWithHref_5_3.detectChangesInHostProps(this,this._el_5,throwOnChange);
    this._RouterLinkActive_5_4.detectChangesInHostProps(this,this._el_5,throwOnChange);
    this._RouterLinkWithHref_8_3.detectChangesInHostProps(this,this._el_8,throwOnChange);
    this._RouterLinkActive_8_4.detectChangesInHostProps(this,this._el_8,throwOnChange);
    this._RouterOutlet_12_5.detectChangesInHostProps(this,this._el_12,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_5_3.context.ngOnDestroy();
    this._RouterLinkActive_5_4.context.ngOnDestroy();
    this._RouterLinkWithHref_8_3.context.ngOnDestroy();
    this._RouterLinkActive_8_4.context.ngOnDestroy();
    this._RouterOutlet_12_5.context.ngOnDestroy();
  }
  private _handle_click_5_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_5_0:any = ((<any>this._RouterLinkWithHref_5_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_5_0);
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_8_0:any = ((<any>this._RouterLinkWithHref_8_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_8_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}