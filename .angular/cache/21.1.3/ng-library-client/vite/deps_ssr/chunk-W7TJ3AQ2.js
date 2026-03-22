import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MatTooltip,
  TooltipComponent
} from "./chunk-3IKGXUDE.js";
import {
  OverlayModule
} from "./chunk-P4DQWMUJ.js";
import {
  A11yModule
} from "./chunk-SFEUOERL.js";
import {
  CdkScrollableModule
} from "./chunk-O5Y7S7UY.js";
import {
  BidiModule
} from "./chunk-THZK6FDD.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineNgModule
} from "./chunk-LYFZ6E5Q.js";
import {
  require_operators,
  ɵɵdefineInjector
} from "./chunk-K2NTFZSD.js";
import {
  require_cjs
} from "./chunk-O5J3CNTX.js";
import {
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@angular/material/fesm2022/tooltip.mjs
var import_operators = __toESM(require_operators(), 1);
var import_rxjs = __toESM(require_cjs(), 1);
var MatTooltipModule = class _MatTooltipModule {
  static ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatTooltipModule,
    imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
    exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [A11yModule, OverlayModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
      exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
    }]
  }], null, null);
})();

export {
  MatTooltipModule
};
//# sourceMappingURL=chunk-W7TJ3AQ2.js.map
