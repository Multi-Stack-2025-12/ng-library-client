import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  ERROR_NOTIFICATION_SERVICE
} from "./chunk-NLQAS4GR.js";
import "./chunk-4X7K53IY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YVX33TRA.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-AAMY5BAW.js";
import "./chunk-SRFMFTJB.js";
import "./chunk-PPXS6FGZ.js";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-D33O7Q62.js";
import "./chunk-6A2HOHL3.js";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "./chunk-GDKSC7DA.js";
import {
  OverlayConfig,
  OverlayModule,
  createGlobalPositionStrategy,
  createOverlayRef
} from "./chunk-P4DQWMUJ.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-EHW3GY6U.js";
import "./chunk-C66NWAPW.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-AH7R46HD.js";
import "./chunk-MVTMKKNJ.js";
import "./chunk-V3E4Z457.js";
import "./chunk-4FNHGJJ6.js";
import "./chunk-FQZXVUHV.js";
import "./chunk-V3OF64KU.js";
import "./chunk-HZAFOQ6G.js";
import "./chunk-JS5ASQ4R.js";
import {
  LiveAnnouncer,
  _IdGenerator
} from "./chunk-SFEUOERL.js";
import "./chunk-WV74OLZB.js";
import "./chunk-KOIXL4O4.js";
import "./chunk-OHJYKAZU.js";
import {
  _animationsDisabled,
  _getAnimationsState
} from "./chunk-XULCE6FV.js";
import "./chunk-RCM6EQBQ.js";
import {
  BreakpointObserver,
  Breakpoints
} from "./chunk-2ZTVOQRA.js";
import "./chunk-HAZYOZPT.js";
import "./chunk-O5Y7S7UY.js";
import "./chunk-PJJUZBHU.js";
import "./chunk-KQYFGZWB.js";
import {
  BidiModule
} from "./chunk-THZK6FDD.js";
import "./chunk-ABHUNIZJ.js";
import "./chunk-TRX5OSN2.js";
import {
  Platform
} from "./chunk-4ZILTARH.js";
import {
  DATE_PIPE_DEFAULT_OPTIONS,
  JsonPipe,
  NgTemplateOutlet
} from "./chunk-IISRQVBV.js";
import "./chunk-VQPDKJCC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  NgModule,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterNextRender,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LYFZ6E5Q.js";
import {
  DOCUMENT,
  InjectionToken,
  Injector,
  NgZone,
  Version,
  computed,
  inject,
  makeEnvironmentProviders,
  require_operators,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵresetView,
  ɵɵrestoreView
} from "./chunk-K2NTFZSD.js";
import {
  require_cjs
} from "./chunk-O5J3CNTX.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@angular/material/fesm2022/_line-chunk.mjs
var import_operators = __toESM(require_operators(), 1);
var MatLine = class _MatLine {
  static ɵfac = function MatLine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLine)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatLine,
    selectors: [["", "mat-line", ""], ["", "matLine", ""]],
    hostAttrs: [1, "mat-line"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      }
    }]
  }], null, null);
})();
var MatLineModule = class _MatLineModule {
  static ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatLineModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatLineModule,
    imports: [MatLine],
    exports: [MatLine, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatLine],
      exports: [MatLine, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/core.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators2 = __toESM(require_operators(), 1);
var VERSION = new Version("21.1.3");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  _matDateLocale = inject(MAT_DATE_LOCALE, {
    optional: true
  });
  constructor() {
    super();
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  setTime(target, hours, minutes, seconds) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!inRange(hours, 0, 23)) {
        throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
      }
      if (!inRange(minutes, 0, 59)) {
        throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
      }
      if (!inRange(seconds, 0, 59)) {
        throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
      }
    }
    const clone = this.clone(target);
    clone.setHours(hours, minutes, seconds, 0);
    return clone;
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  parseTime(userValue, parseFormat) {
    if (typeof userValue !== "string") {
      return userValue instanceof Date ? new Date(userValue.getTime()) : null;
    }
    const value = userValue.trim();
    if (value.length === 0) {
      return null;
    }
    let result = this._parseTimeString(value);
    if (result === null) {
      const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
      if (withoutExtras.length > 0) {
        result = this._parseTimeString(withoutExtras);
      }
    }
    return result || this.invalid();
  }
  addSeconds(date, amount) {
    return new Date(date.getTime() + amount * 1e3);
  }
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  _parseTimeString(value) {
    const parsed = value.toUpperCase().match(TIME_REGEX);
    if (parsed) {
      let hours = parseInt(parsed[1]);
      const minutes = parseInt(parsed[2]);
      let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
      const amPm = parsed[4];
      if (hours === 12) {
        hours = amPm === "AM" ? 0 : hours;
      } else if (amPm === "PM") {
        hours += 12;
      }
      if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
        return this.setTime(this.today(), hours, minutes, seconds || 0);
      }
    }
    return null;
  }
  static ɵfac = function NativeDateAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateAdapter)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NativeDateAdapter,
    factory: _NativeDateAdapter.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [], null);
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    timeInput: {
      hour: "numeric",
      minute: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    },
    timeOptionLabel: {
      hour: "numeric",
      minute: "numeric"
    }
  }
};
var NativeDateModule = class _NativeDateModule {
  static ɵfac = function NativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NativeDateModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [{
      provide: DateAdapter,
      useClass: NativeDateAdapter
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
  static ɵfac = function MatNativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNativeDateModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatNativeDateModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [provideNativeDateAdapter()]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 11);
    ɵɵelement(1, "circle", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("viewBox", ctx_r0._viewBox());
    ɵɵadvance();
    ɵɵstyleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    ɵɵattribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: () => ({
    diameter: BASE_SIZE
  })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  _noopAnimations;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  _determinateCircle;
  constructor() {
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    const animationsState = _getAnimationsState();
    const element = this._elementRef.nativeElement;
    this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
    this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (!this._noopAnimations && animationsState === "reduced-motion") {
      element.classList.add("mat-progress-spinner-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  mode;
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static ɵfac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        ɵɵclassMap("mat-" + ctx.color);
        ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mat-progress-spinner-size", ctx.diameter + "px")("--mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
        ɵɵclassProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementStart(2, "div", 2, 1);
        ɵɵnamespaceSVG();
        ɵɵelementStart(4, "svg", 3);
        ɵɵelement(5, "circle", 4);
        ɵɵelementEnd()();
        ɵɵnamespaceHTML();
        ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        ɵɵelementContainer(9, 8);
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 9);
        ɵɵelementContainer(11, 8);
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 10);
        ɵɵelementContainer(13, 8);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = ɵɵreference(1);
        ɵɵadvance(4);
        ɵɵattribute("viewBox", ctx._viewBox());
        ɵɵadvance();
        ɵɵstyleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        ɵɵattribute("r", ctx._circleRadius());
        ɵɵadvance(4);
        ɵɵproperty("ngTemplateOutlet", circle_r2);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", circle_r2);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static ɵfac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatProgressSpinnerModule,
    imports: [MatProgressSpinner, MatSpinner],
    exports: [MatProgressSpinner, MatSpinner, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@eac-arch/ui-kit/fesm2022/eac-arch-ui-kit.mjs
var import_rxjs3 = __toESM(require_cjs(), 1);

// node_modules/@angular/material/fesm2022/snack-bar.mjs
var import_rxjs2 = __toESM(require_cjs(), 1);
var import_operators3 = __toESM(require_operators(), 1);
function SimpleSnackBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "button", 2);
    ɵɵlistener("click", function SimpleSnackBar_Conditional_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.action());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.data.action, " ");
  }
}
var _c02 = ["label"];
function MatSnackBarContainer_ng_template_4_Template(rf, ctx) {
}
var MAX_TIMEOUT = Math.pow(2, 31) - 1;
var MatSnackBarRef = class {
  _overlayRef;
  instance;
  containerInstance;
  _afterDismissed = new import_rxjs2.Subject();
  _afterOpened = new import_rxjs2.Subject();
  _onAction = new import_rxjs2.Subject();
  _durationTimeoutId;
  _dismissedByAction = false;
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }
    clearTimeout(this._durationTimeoutId);
  }
  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;
      this._onAction.next();
      this._onAction.complete();
      this.dismiss();
    }
    clearTimeout(this._durationTimeoutId);
  }
  closeWithAction() {
    this.dismissWithAction();
  }
  _dismissAfter(duration) {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();
      this._afterOpened.complete();
    }
  }
  _finishDismiss() {
    this._overlayRef.dispose();
    if (!this._onAction.closed) {
      this._onAction.complete();
    }
    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });
    this._afterDismissed.complete();
    this._dismissedByAction = false;
  }
  afterDismissed() {
    return this._afterDismissed;
  }
  afterOpened() {
    return this.containerInstance._onEnter;
  }
  onAction() {
    return this._onAction;
  }
};
var MAT_SNACK_BAR_DATA = new InjectionToken("MatSnackBarData");
var MatSnackBarConfig = class {
  politeness = "polite";
  announcementMessage = "";
  viewContainerRef;
  duration = 0;
  panelClass;
  direction;
  data = null;
  horizontalPosition = "center";
  verticalPosition = "bottom";
};
var MatSnackBarLabel = class _MatSnackBarLabel {
  static ɵfac = function MatSnackBarLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarLabel)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatSnackBarLabel,
    selectors: [["", "matSnackBarLabel", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarLabel, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarLabel]`,
      host: {
        "class": "mat-mdc-snack-bar-label mdc-snackbar__label"
      }
    }]
  }], null, null);
})();
var MatSnackBarActions = class _MatSnackBarActions {
  static ɵfac = function MatSnackBarActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarActions)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatSnackBarActions,
    selectors: [["", "matSnackBarActions", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarActions, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarActions]`,
      host: {
        "class": "mat-mdc-snack-bar-actions mdc-snackbar__actions"
      }
    }]
  }], null, null);
})();
var MatSnackBarAction = class _MatSnackBarAction {
  static ɵfac = function MatSnackBarAction_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarAction)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatSnackBarAction,
    selectors: [["", "matSnackBarAction", ""]],
    hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarAction, [{
    type: Directive,
    args: [{
      selector: `[matSnackBarAction]`,
      host: {
        "class": "mat-mdc-snack-bar-action mdc-snackbar__action"
      }
    }]
  }], null, null);
})();
var SimpleSnackBar = class _SimpleSnackBar {
  snackBarRef = inject(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);
  constructor() {
  }
  action() {
    this.snackBarRef.dismissWithAction();
  }
  get hasAction() {
    return !!this.data.action;
  }
  static ɵfac = function SimpleSnackBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimpleSnackBar)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SimpleSnackBar,
    selectors: [["simple-snack-bar"]],
    hostAttrs: [1, "mat-mdc-simple-snack-bar"],
    exportAs: ["matSnackBar"],
    decls: 3,
    vars: 2,
    consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], ["matButton", "", "matSnackBarAction", "", 3, "click"]],
    template: function SimpleSnackBar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵconditionalCreate(2, SimpleSnackBar_Conditional_2_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵtextInterpolate1(" ", ctx.data.message, "\n");
        ɵɵadvance();
        ɵɵconditional(ctx.hasAction ? 2 : -1);
      }
    },
    dependencies: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
    styles: [".mat-mdc-simple-snack-bar{display:flex}.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label{max-height:50vh;overflow:auto}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleSnackBar, [{
    type: Component,
    args: [{
      selector: "simple-snack-bar",
      exportAs: "matSnackBar",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
      host: {
        "class": "mat-mdc-simple-snack-bar"
      },
      template: '<div matSnackBarLabel>\n  {{data.message}}\n</div>\n\n@if (hasAction) {\n  <div matSnackBarActions>\n    <button matButton matSnackBarAction (click)="action()">\n      {{data.action}}\n    </button>\n  </div>\n}\n',
      styles: [".mat-mdc-simple-snack-bar{display:flex}.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label{max-height:50vh;overflow:auto}\n"]
    }]
  }], () => [], null);
})();
var ENTER_ANIMATION = "_mat-snack-bar-enter";
var EXIT_ANIMATION = "_mat-snack-bar-exit";
var MatSnackBarContainer = class _MatSnackBarContainer extends BasePortalOutlet {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _platform = inject(Platform);
  _animationsDisabled = _animationsDisabled();
  snackBarConfig = inject(MatSnackBarConfig);
  _document = inject(DOCUMENT);
  _trackedModals = /* @__PURE__ */ new Set();
  _enterFallback;
  _exitFallback;
  _injector = inject(Injector);
  _announceDelay = 150;
  _announceTimeoutId;
  _destroyed = false;
  _portalOutlet;
  _onAnnounce = new import_rxjs2.Subject();
  _onExit = new import_rxjs2.Subject();
  _onEnter = new import_rxjs2.Subject();
  _animationState = "void";
  _live;
  _label;
  _role;
  _liveElementId = inject(_IdGenerator).getId("mat-snack-bar-container-live-");
  constructor() {
    super();
    const config = this.snackBarConfig;
    if (config.politeness === "assertive" && !config.announcementMessage) {
      this._live = "assertive";
    } else if (config.politeness === "off") {
      this._live = "off";
    } else {
      this._live = "polite";
    }
    if (this._platform.FIREFOX) {
      if (this._live === "polite") {
        this._role = "status";
      }
      if (this._live === "assertive") {
        this._role = "alert";
      }
    }
  }
  attachComponentPortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._afterPortalAttached();
    return result;
  }
  attachTemplatePortal(portal) {
    this._assertNotAttached();
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._afterPortalAttached();
    return result;
  }
  attachDomPortal = (portal) => {
    this._assertNotAttached();
    const result = this._portalOutlet.attachDomPortal(portal);
    this._afterPortalAttached();
    return result;
  };
  onAnimationEnd(animationName) {
    if (animationName === EXIT_ANIMATION) {
      this._completeExit();
    } else if (animationName === ENTER_ANIMATION) {
      clearTimeout(this._enterFallback);
      this._ngZone.run(() => {
        this._onEnter.next();
        this._onEnter.complete();
      });
    }
  }
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      this._screenReaderAnnounce();
      if (this._animationsDisabled) {
        afterNextRender(() => {
          this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(ENTER_ANIMATION)));
        }, {
          injector: this._injector
        });
      } else {
        clearTimeout(this._enterFallback);
        this._enterFallback = setTimeout(() => {
          this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible");
          this.onAnimationEnd(ENTER_ANIMATION);
        }, 200);
      }
    }
  }
  exit() {
    if (this._destroyed) {
      return (0, import_rxjs2.of)(void 0);
    }
    this._ngZone.run(() => {
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      clearTimeout(this._announceTimeoutId);
      if (this._animationsDisabled) {
        afterNextRender(() => {
          this._ngZone.run(() => queueMicrotask(() => this.onAnimationEnd(EXIT_ANIMATION)));
        }, {
          injector: this._injector
        });
      } else {
        clearTimeout(this._exitFallback);
        this._exitFallback = setTimeout(() => this.onAnimationEnd(EXIT_ANIMATION), 200);
      }
    });
    return this._onExit;
  }
  ngOnDestroy() {
    this._destroyed = true;
    this._clearFromModals();
    this._completeExit();
  }
  _completeExit() {
    clearTimeout(this._exitFallback);
    queueMicrotask(() => {
      this._onExit.next();
      this._onExit.complete();
    });
  }
  _afterPortalAttached() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;
    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        panelClasses.forEach((cssClass) => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }
    this._exposeToModals();
    const label = this._label.nativeElement;
    const labelClass = "mdc-snackbar__label";
    label.classList.toggle(labelClass, !label.querySelector(`.${labelClass}`));
  }
  _exposeToModals() {
    const id = this._liveElementId;
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      this._trackedModals.add(modal);
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  _clearFromModals() {
    this._trackedModals.forEach((modal) => {
      const ariaOwns = modal.getAttribute("aria-owns");
      if (ariaOwns) {
        const newValue = ariaOwns.replace(this._liveElementId, "").trim();
        if (newValue.length > 0) {
          modal.setAttribute("aria-owns", newValue);
        } else {
          modal.removeAttribute("aria-owns");
        }
      }
    });
    this._trackedModals.clear();
  }
  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempting to attach snack bar content after content is already attached");
    }
  }
  _screenReaderAnnounce() {
    if (this._announceTimeoutId) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._announceTimeoutId = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        const element = this._elementRef.nativeElement;
        const inertElement = element.querySelector("[aria-hidden]");
        const liveElement = element.querySelector("[aria-live]");
        if (inertElement && liveElement) {
          let focusedElement = null;
          if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
            focusedElement = document.activeElement;
          }
          inertElement.removeAttribute("aria-hidden");
          liveElement.appendChild(inertElement);
          focusedElement?.focus();
          this._onAnnounce.next();
          this._onAnnounce.complete();
        }
      }, this._announceDelay);
    });
  }
  static ɵfac = function MatSnackBarContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarContainer)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatSnackBarContainer,
    selectors: [["mat-snack-bar-container"]],
    viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(CdkPortalOutlet, 7)(_c02, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._label = _t.first);
      }
    },
    hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container"],
    hostVars: 6,
    hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("animationend", function MatSnackBarContainer_animationend_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event.animationName);
        })("animationcancel", function MatSnackBarContainer_animationcancel_HostBindingHandler($event) {
          return ctx.onAnimationEnd($event.animationName);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("mat-snack-bar-container-enter", ctx._animationState === "visible")("mat-snack-bar-container-exit", ctx._animationState === "hidden")("mat-snack-bar-container-animations-enabled", !ctx._animationsDisabled);
      }
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 6,
    vars: 3,
    consts: [["label", ""], [1, "mdc-snackbar__surface", "mat-mdc-snackbar-surface"], [1, "mat-mdc-snack-bar-label"], ["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
    template: function MatSnackBarContainer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1)(1, "div", 2, 0)(3, "div", 3);
        ɵɵtemplate(4, MatSnackBarContainer_ng_template_4_Template, 0, 0, "ng-template", 4);
        ɵɵelementEnd();
        ɵɵelement(5, "div");
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(5);
        ɵɵattribute("aria-live", ctx._live)("role", ctx._role)("id", ctx._liveElementId);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarContainer, [{
    type: Component,
    args: [{
      selector: "mat-snack-bar-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mdc-snackbar mat-mdc-snack-bar-container",
        "[class.mat-snack-bar-container-enter]": '_animationState === "visible"',
        "[class.mat-snack-bar-container-exit]": '_animationState === "hidden"',
        "[class.mat-snack-bar-container-animations-enabled]": "!_animationsDisabled",
        "(animationend)": "onAnimationEnd($event.animationName)",
        "(animationcancel)": "onAnimationEnd($event.animationName)"
      },
      template: '<div class="mdc-snackbar__surface mat-mdc-snackbar-surface">\n  <!--\n    This outer label wrapper will have the class `mdc-snackbar__label` applied if\n    the attached template/component does not contain it.\n  -->\n  <div class="mat-mdc-snack-bar-label" #label>\n    <!-- Initialy holds the snack bar content, will be empty after announcing to screen readers. -->\n    <div aria-hidden="true">\n      <ng-template cdkPortalOutlet />\n    </div>\n\n    <!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n    <div [attr.aria-live]="_live" [attr.role]="_role" [attr.id]="_liveElementId"></div>\n  </div>\n</div>\n',
      styles: ["@keyframes _mat-snack-bar-enter{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}@keyframes _mat-snack-bar-exit{from{opacity:1}to{opacity:0}}.mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-snack-bar-container-animations-enabled{opacity:0}.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible{opacity:1}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter{animation:_mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit{animation:_mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-button-text-state-layer-color: currentColor;--mat-button-text-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}\n"]
    }]
  }], () => [], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    _label: [{
      type: ViewChild,
      args: ["label", {
        static: true
      }]
    }]
  });
})();
var MAT_SNACK_BAR_DEFAULT_OPTIONS = new InjectionToken("mat-snack-bar-default-options", {
  providedIn: "root",
  factory: () => new MatSnackBarConfig()
});
var MatSnackBar = class _MatSnackBar {
  _live = inject(LiveAnnouncer);
  _injector = inject(Injector);
  _breakpointObserver = inject(BreakpointObserver);
  _parentSnackBar = inject(_MatSnackBar, {
    optional: true,
    skipSelf: true
  });
  _defaultConfig = inject(MAT_SNACK_BAR_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _snackBarRefAtThisLevel = null;
  simpleSnackBarComponent = SimpleSnackBar;
  snackBarContainerComponent = MatSnackBarContainer;
  handsetCssClass = "mat-mdc-snack-bar-handset";
  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }
  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  open(message, action = "", config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultConfig), config);
    _config.data = {
      message,
      action
    };
    if (_config.announcementMessage === message) {
      _config.announcementMessage = void 0;
    }
    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }
  ngOnDestroy() {
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  _attach(content, userConfig) {
    const config = __spreadValues(__spreadValues(__spreadValues({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new MatSnackBarRef(container, overlayRef);
    if (content instanceof TemplateRef) {
      const portal = new TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);
      const portal = new ComponentPortal(content, void 0, injector);
      const contentRef = container.attachComponentPortal(portal);
      snackBarRef.instance = contentRef.instance;
    }
    this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe((0, import_operators3.takeUntil)(overlayRef.detachments())).subscribe((state) => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
    });
    if (config.announcementMessage) {
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }
    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  _animateSnackBar(snackBarRef, config) {
    snackBarRef.afterDismissed().subscribe(() => {
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
      if (config.announcementMessage) {
        this._live.clear();
      }
    });
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      snackBarRef.containerInstance.enter();
    }
  }
  _createOverlay(config) {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;
    const positionStrategy = createGlobalPositionStrategy(this._injector);
    const isRtl = config.direction === "rtl";
    const isLeft = config.horizontalPosition === "left" || config.horizontalPosition === "start" && !isRtl || config.horizontalPosition === "end" && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== "center";
    if (isLeft) {
      positionStrategy.left("0");
    } else if (isRight) {
      positionStrategy.right("0");
    } else {
      positionStrategy.centerHorizontally();
    }
    if (config.verticalPosition === "top") {
      positionStrategy.top("0");
    } else {
      positionStrategy.bottom("0");
    }
    overlayConfig.positionStrategy = positionStrategy;
    overlayConfig.disableAnimations = this._animationsDisabled;
    return createOverlayRef(this._injector, overlayConfig);
  }
  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }
  static ɵfac = function MatSnackBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBar)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MatSnackBar,
    factory: _MatSnackBar.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBar, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var DIRECTIVES = [MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction];
var MatSnackBarModule = class _MatSnackBarModule {
  static ɵfac = function MatSnackBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSnackBarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatSnackBarModule,
    imports: [OverlayModule, PortalModule, MatButtonModule, SimpleSnackBar, MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
    exports: [BidiModule, MatSnackBarContainer, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [MatSnackBar],
    imports: [OverlayModule, PortalModule, MatButtonModule, SimpleSnackBar, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSnackBarModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, MatButtonModule, SimpleSnackBar, ...DIRECTIVES],
      exports: [BidiModule, ...DIRECTIVES],
      providers: [MatSnackBar]
    }]
  }], null, null);
})();

// node_modules/@eac-arch/ui-kit/fesm2022/eac-arch-ui-kit.mjs
var import_operators4 = __toESM(require_operators(), 1);
function LoadingOverlayComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵelement(2, "mat-progress-spinner", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("local", ctx_r0.mode() === "local");
  }
}
function ErrorDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "mat-icon");
    ɵɵtext(2, "link");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r0.data.requestUrl);
  }
}
function ErrorDialogComponent_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1("(", error_r2.code, ")");
  }
}
function ErrorDialogComponent_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "strong");
    ɵɵtext(2, "Field:");
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", error_r2.field, " ");
  }
}
function ErrorDialogComponent_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11)(1, "strong");
    ɵɵtext(2, "Additional Information:");
    ɵɵelementEnd();
    ɵɵelementStart(3, "pre");
    ɵɵtext(4);
    ɵɵpipe(5, "json");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const error_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, error_r2.meta));
  }
}
function ErrorDialogComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "mat-expansion-panel", 4)(1, "mat-expansion-panel-header")(2, "mat-panel-title")(3, "strong");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵconditionalCreate(5, ErrorDialogComponent_For_8_Conditional_5_Template, 2, 1, "span", 7);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 8)(7, "p", 9);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵconditionalCreate(9, ErrorDialogComponent_For_8_Conditional_9_Template, 4, 1, "div", 10);
    ɵɵconditionalCreate(10, ErrorDialogComponent_For_8_Conditional_10_Template, 6, 3, "div", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(error_r2.title);
    ɵɵadvance();
    ɵɵconditional(error_r2.code ? 5 : -1);
    ɵɵadvance(3);
    ɵɵtextInterpolate(error_r2.message);
    ɵɵadvance();
    ɵɵconditional(error_r2.field ? 9 : -1);
    ɵɵadvance();
    ɵɵconditional(error_r2.meta ? 10 : -1);
  }
}
var DdMmYyyyDateAdapter = class extends NativeDateAdapter {
  parse(value) {
    if (typeof value === "string") {
      const match = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value.trim());
      if (match) {
        const day = +match[1];
        const month = +match[2];
        const year = +match[3];
        const date = new Date(year, month - 1, day);
        if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
          return date;
        }
        return null;
      }
    }
    return super.parse(value);
  }
  format(date, displayFormat) {
    if (displayFormat === "input") {
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const yyyy = date.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    }
    return super.format(date, displayFormat);
  }
};
var DD_MM_YYYY_FORMATS = {
  parse: {
    dateInput: "dd/MM/yyyy"
  },
  display: {
    dateInput: "input",
    monthYearLabel: "MMM yyyy",
    dateA11yLabel: "dd/MM/yyyy",
    monthYearA11yLabel: "MMMM yyyy"
  }
};
function provideGlobalDateFormat(locale = "es-PE") {
  return makeEnvironmentProviders([{
    provide: MAT_DATE_LOCALE,
    useValue: locale
  }, {
    provide: DateAdapter,
    useClass: DdMmYyyyDateAdapter,
    deps: [MAT_DATE_LOCALE]
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: DD_MM_YYYY_FORMATS
  }, {
    provide: DATE_PIPE_DEFAULT_OPTIONS,
    useValue: {
      dateFormat: "dd/MM/yyyy"
    }
  }]);
}
function parseLocalDate(dateStr) {
  if (!dateStr) return null;
  const raw = dateStr.substring(0, 10);
  const [year, month, day] = raw.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}
function toLocalDateStr(d) {
  if (!d) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
var LoadingService = class _LoadingService {
  _count = signal(0, ...ngDevMode ? [{
    debugName: "_count"
  }] : []);
  busy = computed(() => this._count() > 0, ...ngDevMode ? [{
    debugName: "busy"
  }] : []);
  show() {
    this._count.update((c) => c + 1);
  }
  hide() {
    this._count.update((c) => Math.max(0, c - 1));
  }
  static ɵfac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _LoadingService,
    factory: _LoadingService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LoadingOverlayComponent = class _LoadingOverlayComponent {
  mode = input("global", ...ngDevMode ? [{
    debugName: "mode"
  }] : []);
  active = input(null, ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  loading = inject(LoadingService);
  isActive = computed(() => {
    const globalBusy = this.loading.busy();
    if (this.mode() === "global") {
      return globalBusy;
    } else {
      return !globalBusy && !!this.active();
    }
  }, ...ngDevMode ? [{
    debugName: "isActive"
  }] : []);
  static ɵfac = function LoadingOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingOverlayComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LoadingOverlayComponent,
    selectors: [["eac-ui-loading-overlay"]],
    inputs: {
      mode: [1, "mode"],
      active: [1, "active"]
    },
    decls: 1,
    vars: 1,
    consts: [[1, "loading-overlay", 3, "local"], [1, "loading-overlay"], ["role", "status", "aria-live", "polite", "aria-label", "Loading", 1, "spinner-wrap"], ["mode", "indeterminate", "diameter", "56"]],
    template: function LoadingOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, LoadingOverlayComponent_Conditional_0_Template, 3, 2, "div", 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.isActive() ? 0 : -1);
      }
    },
    dependencies: [MatProgressSpinnerModule, MatProgressSpinner],
    styles: [".loading-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;background:color-mix(in srgb,var(--mat-scrim, rgba(0, 0, 0, .32)) 32%,transparent);-webkit-backdrop-filter:blur(1.5px);backdrop-filter:blur(1.5px);pointer-events:all}.loading-overlay.local[_ngcontent-%COMP%]{position:absolute;inset:0;background:color-mix(in srgb,var(--mat-sys-surface, #fff) 55%,transparent);-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);z-index:1100}.spinner-wrap[_ngcontent-%COMP%]{padding:12px 16px;border-radius:14px;background:color-mix(in srgb,var(--mat-sys-surface, #fff) 90%,transparent);box-shadow:var(--mat-elevation-level4, 0 10px 30px rgba(0, 0, 0, .2));border:1px solid color-mix(in srgb,var(--mat-sys-outline-variant, #000) 24%,transparent);color:var(--mat-sys-on-surface, currentColor)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingOverlayComponent, [{
    type: Component,
    args: [{
      selector: "eac-ui-loading-overlay",
      imports: [MatProgressSpinnerModule],
      template: `@if (isActive()) {\r
<div class="loading-overlay" [class.local]="mode() === 'local'">\r
  <div class="spinner-wrap" role="status" aria-live="polite" aria-label="Loading">\r
    <mat-progress-spinner mode="indeterminate" diameter="56"></mat-progress-spinner>\r
  </div>\r
</div>\r
}\r
`,
      styles: [".loading-overlay{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;background:color-mix(in srgb,var(--mat-scrim, rgba(0, 0, 0, .32)) 32%,transparent);-webkit-backdrop-filter:blur(1.5px);backdrop-filter:blur(1.5px);pointer-events:all}.loading-overlay.local{position:absolute;inset:0;background:color-mix(in srgb,var(--mat-sys-surface, #fff) 55%,transparent);-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);z-index:1100}.spinner-wrap{padding:12px 16px;border-radius:14px;background:color-mix(in srgb,var(--mat-sys-surface, #fff) 90%,transparent);box-shadow:var(--mat-elevation-level4, 0 10px 30px rgba(0, 0, 0, .2));border:1px solid color-mix(in srgb,var(--mat-sys-outline-variant, #000) 24%,transparent);color:var(--mat-sys-on-surface, currentColor)}\n"]
    }]
  }], null, {
    mode: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mode",
        required: false
      }]
    }],
    active: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "active",
        required: false
      }]
    }]
  });
})();
var loadingInterceptor = (req, next) => {
  if (req.headers.has("X-Skip-Global-Loading")) return next(req);
  const loading = inject(LoadingService);
  loading.show();
  return next(req).pipe(
    // delay(500),
    (0, import_rxjs3.finalize)(() => loading.hide())
  );
};
var NotificationSnackbarComponent = class _NotificationSnackbarComponent {
  data = inject(MAT_SNACK_BAR_DATA);
  snackBarRef = inject(MatSnackBarRef);
  close() {
    this.snackBarRef.dismiss();
  }
  getIcon() {
    switch (this.data.type) {
      case "success":
        return "check_circle";
      case "error":
        return "error";
      case "warning":
        return "warning";
      case "info":
      default:
        return "info";
    }
  }
  static ɵfac = function NotificationSnackbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationSnackbarComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NotificationSnackbarComponent,
    selectors: [["eac-ui-notification-snackbar"]],
    decls: 8,
    vars: 4,
    consts: [[1, "notification-snackbar"], [1, "notification-icon"], [1, "notification-message"], ["mat-icon-button", "", 1, "notification-close", 3, "click"]],
    template: function NotificationSnackbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "mat-icon", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 2);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 3);
        ɵɵlistener("click", function NotificationSnackbarComponent_Template_button_click_5_listener() {
          return ctx.close();
        });
        ɵɵelementStart(6, "mat-icon");
        ɵɵtext(7, "close");
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap("notification-" + ctx.data.type);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.getIcon());
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.data.message);
      }
    },
    dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton],
    styles: [".notification-snackbar[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:4px 8px;min-width:300px;max-width:500px}.notification-snackbar[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]{flex-shrink:0;width:24px;height:24px;font-size:24px}.notification-snackbar[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%]{flex:1;font-size:14px;line-height:1.4}.notification-snackbar[_ngcontent-%COMP%]   .notification-close[_ngcontent-%COMP%]{flex-shrink:0;width:32px;height:32px}.notification-snackbar[_ngcontent-%COMP%]   .notification-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}.notification-success[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]{color:#4caf50}.notification-error[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]{color:#f44336}.notification-warning[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]{color:#ff9800}.notification-info[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]{color:#2196f3}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationSnackbarComponent, [{
    type: Component,
    args: [{
      selector: "eac-ui-notification-snackbar",
      imports: [MatIconModule, MatButtonModule],
      template: `<div class="notification-snackbar" [class]="'notification-' + data.type">\r
  <mat-icon class="notification-icon">{{ getIcon() }}</mat-icon>\r
  <span class="notification-message">{{ data.message }}</span>\r
  <button mat-icon-button class="notification-close" (click)="close()">\r
    <mat-icon>close</mat-icon>\r
  </button>\r
</div>\r
`,
      styles: [".notification-snackbar{display:flex;align-items:center;gap:12px;padding:4px 8px;min-width:300px;max-width:500px}.notification-snackbar .notification-icon{flex-shrink:0;width:24px;height:24px;font-size:24px}.notification-snackbar .notification-message{flex:1;font-size:14px;line-height:1.4}.notification-snackbar .notification-close{flex-shrink:0;width:32px;height:32px}.notification-snackbar .notification-close mat-icon{font-size:18px;width:18px;height:18px}.notification-success .notification-icon{color:#4caf50}.notification-error .notification-icon{color:#f44336}.notification-warning .notification-icon{color:#ff9800}.notification-info .notification-icon{color:#2196f3}\n"]
    }]
  }], null, null);
})();
var NotificationService = class _NotificationService {
  snackBar = inject(MatSnackBar);
  show(config) {
    const snackBarConfig = {
      duration: config.duration ?? this.getDefaultDuration(config.type),
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: [`notification-${config.type}`],
      data: config
    };
    this.snackBar.openFromComponent(NotificationSnackbarComponent, snackBarConfig);
  }
  showSuccess(message, duration) {
    this.show({
      message,
      type: "success",
      duration
    });
  }
  showError(message, duration) {
    this.show({
      message,
      type: "error",
      duration
    });
  }
  showWarning(message, duration) {
    this.show({
      message,
      type: "warning",
      duration
    });
  }
  showInfo(message, duration) {
    this.show({
      message,
      type: "info",
      duration
    });
  }
  getDefaultDuration(type) {
    switch (type) {
      case "error":
        return 5e3;
      case "warning":
        return 4e3;
      case "success":
      case "info":
      default:
        return 3e3;
    }
  }
  static ɵfac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NotificationService,
    factory: _NotificationService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ErrorDialogComponent = class _ErrorDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  static ɵfac = function ErrorDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorDialogComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ErrorDialogComponent,
    selectors: [["eac-ui-error-dialog"]],
    decls: 12,
    vars: 2,
    consts: [["mat-dialog-title", ""], [1, "error-icon"], [1, "error-origin"], [1, "error-list"], [1, "error-item"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], [1, "error-code"], [1, "error-details"], [1, "error-message"], [1, "error-field"], [1, "error-meta"]],
    template: function ErrorDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "h2", 0)(1, "mat-icon", 1);
        ɵɵtext(2, "error");
        ɵɵelementEnd();
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-dialog-content");
        ɵɵconditionalCreate(5, ErrorDialogComponent_Conditional_5_Template, 5, 1, "div", 2);
        ɵɵelementStart(6, "div", 3);
        ɵɵrepeaterCreate(7, ErrorDialogComponent_For_8_Template, 11, 5, "mat-expansion-panel", 4, ɵɵrepeaterTrackByIndex);
        ɵɵelementEnd()();
        ɵɵelementStart(9, "mat-dialog-actions", 5)(10, "button", 6);
        ɵɵtext(11, "Close");
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.data.title || "Error", "\n");
        ɵɵadvance(2);
        ɵɵconditional(ctx.data.requestUrl ? 5 : -1);
        ɵɵadvance(2);
        ɵɵrepeater(ctx.data.errors);
      }
    },
    dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, JsonPipe],
    styles: ["h2[mat-dialog-title][_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;color:#d32f2f}h2[mat-dialog-title][_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%]{font-size:28px;width:28px;height:28px}mat-dialog-content[_ngcontent-%COMP%]{max-height:60vh}mat-dialog-content[_ngcontent-%COMP%]   .error-origin[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:12px;padding:6px 10px;border-radius:4px;background-color:var(--mat-sys-surface-variant, #f5f5f5);color:var(--mat-sys-on-surface-variant, #666);font-size:.85em;font-family:monospace;overflow-wrap:anywhere}mat-dialog-content[_ngcontent-%COMP%]   .error-origin[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex-shrink:0;font-size:16px;width:16px;height:16px}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:0 2px 4px #0000001a}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]   .error-code[_ngcontent-%COMP%]{color:#666;font-size:.9em}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]{padding:16px 0}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:0 0 12px;line-height:1.5}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-field[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-meta[_ngcontent-%COMP%]{margin-top:12px;padding:8px 12px;background-color:#f5f5f5;border-radius:4px}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:4px;color:#666;font-size:.9em}mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-field[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], mat-dialog-content[_ngcontent-%COMP%]   .error-list[_ngcontent-%COMP%]   .error-item[_ngcontent-%COMP%]   .error-details[_ngcontent-%COMP%]   .error-meta[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;padding:8px;background-color:#fff;border:1px solid #ddd;border-radius:4px;font-size:.85em;overflow-x:auto}mat-dialog-actions[_ngcontent-%COMP%]{padding:16px 24px}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorDialogComponent, [{
    type: Component,
    args: [{
      selector: "eac-ui-error-dialog",
      imports: [MatDialogModule, MatButtonModule, MatIconModule, MatExpansionModule, JsonPipe],
      template: `<h2 mat-dialog-title>\r
  <mat-icon class="error-icon">error</mat-icon>\r
  {{ data.title || 'Error' }}\r
</h2>\r
\r
<mat-dialog-content>\r
  @if (data.requestUrl) {\r
    <div class="error-origin">\r
      <mat-icon>link</mat-icon>\r
      <span>{{ data.requestUrl }}</span>\r
    </div>\r
  }\r
  <div class="error-list">\r
    @for (error of data.errors; track $index) {\r
      <mat-expansion-panel class="error-item">\r
        <mat-expansion-panel-header>\r
          <mat-panel-title>\r
            <strong>{{ error.title }}</strong>\r
            @if (error.code) {\r
              <span class="error-code">({{ error.code }})</span>\r
            }\r
          </mat-panel-title>\r
        </mat-expansion-panel-header>\r
        \r
        <div class="error-details">\r
          <p class="error-message">{{ error.message }}</p>\r
          \r
          @if (error.field) {\r
            <div class="error-field">\r
              <strong>Field:</strong> {{ error.field }}\r
            </div>\r
          }\r
          \r
          @if (error.meta) {\r
            <div class="error-meta">\r
              <strong>Additional Information:</strong>\r
              <pre>{{ error.meta | json }}</pre>\r
            </div>\r
          }\r
        </div>\r
      </mat-expansion-panel>\r
    }\r
  </div>\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end">\r
  <button mat-button mat-dialog-close>Close</button>\r
</mat-dialog-actions>\r
`,
      styles: ["h2[mat-dialog-title]{display:flex;align-items:center;gap:12px;color:#d32f2f}h2[mat-dialog-title] .error-icon{font-size:28px;width:28px;height:28px}mat-dialog-content{max-height:60vh}mat-dialog-content .error-origin{display:flex;align-items:center;gap:8px;margin-bottom:12px;padding:6px 10px;border-radius:4px;background-color:var(--mat-sys-surface-variant, #f5f5f5);color:var(--mat-sys-on-surface-variant, #666);font-size:.85em;font-family:monospace;overflow-wrap:anywhere}mat-dialog-content .error-origin mat-icon{flex-shrink:0;font-size:16px;width:16px;height:16px}mat-dialog-content .error-list{display:flex;flex-direction:column;gap:12px}mat-dialog-content .error-list .error-item.mat-expansion-panel{box-shadow:0 2px 4px #0000001a}mat-dialog-content .error-list .error-item mat-panel-title{display:flex;align-items:center;gap:8px}mat-dialog-content .error-list .error-item mat-panel-title .error-code{color:#666;font-size:.9em}mat-dialog-content .error-list .error-item .error-details{padding:16px 0}mat-dialog-content .error-list .error-item .error-details .error-message{margin:0 0 12px;line-height:1.5}mat-dialog-content .error-list .error-item .error-details .error-field,mat-dialog-content .error-list .error-item .error-details .error-meta{margin-top:12px;padding:8px 12px;background-color:#f5f5f5;border-radius:4px}mat-dialog-content .error-list .error-item .error-details .error-field strong,mat-dialog-content .error-list .error-item .error-details .error-meta strong{display:block;margin-bottom:4px;color:#666;font-size:.9em}mat-dialog-content .error-list .error-item .error-details .error-field pre,mat-dialog-content .error-list .error-item .error-details .error-meta pre{margin:0;padding:8px;background-color:#fff;border:1px solid #ddd;border-radius:4px;font-size:.85em;overflow-x:auto}mat-dialog-actions{padding:16px 24px}\n"]
    }]
  }], null, null);
})();
var ErrorDialogService = class _ErrorDialogService {
  dialog = inject(MatDialog);
  show(data) {
    const config = {
      data,
      width: "600px",
      maxWidth: "90vw",
      maxHeight: "80vh",
      panelClass: "error-dialog-container",
      autoFocus: false,
      restoreFocus: true
    };
    const dialogRef = this.dialog.open(ErrorDialogComponent, config);
    if (data.autoClose && data.duration) {
      setTimeout(() => {
        dialogRef.close();
      }, data.duration);
    }
  }
  static ɵfac = function ErrorDialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorDialogService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ErrorDialogService,
    factory: _ErrorDialogService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ErrorHandlerService = class _ErrorHandlerService {
  notificationService = inject(NotificationService);
  errorDialogService = inject(ErrorDialogService);
  handleHttpError(errorResponse, statusCode, requestUrl) {
    const errors = errorResponse.errors;
    if (this.shouldShowDialog(errors)) {
      this.showErrorDialog(errors, requestUrl);
    } else if (errors.length > 0) {
      this.showErrorSnackbar(errors[0]);
    }
  }
  handleCoreError(error) {
    this.errorDialogService.show({
      title: "Unexpected Error",
      errors: [{
        title: error.name || "Error",
        message: error.message || "An unexpected error occurred.",
        code: error.name,
        meta: error.stack ? {
          stack: error.stack
        } : void 0
      }]
    });
  }
  shouldShowDialog(errors) {
    if (errors.length > 1) return true;
    const firstError = errors[0];
    if (firstError.code) return true;
    if (firstError.meta && Object.keys(firstError.meta).length > 0) return true;
    if (firstError.source?.pointer || firstError.source?.parameter) return true;
    return false;
  }
  showErrorDialog(errors, requestUrl) {
    const errorDetails = errors.map((err) => ({
      title: err.title,
      message: err.detail || "No additional details available",
      code: err.code,
      field: err.source?.pointer?.replace("/data/attributes/", "") || err.source?.parameter || void 0,
      meta: err.meta
    }));
    this.errorDialogService.show({
      errors: errorDetails,
      title: errors.length > 1 ? `${errors.length} Errors Occurred` : "Error Details",
      requestUrl
    });
  }
  showErrorSnackbar(error) {
    const message = error.detail || error.title || "An error occurred";
    this.notificationService.showError(message);
  }
  static ɵfac = function ErrorHandlerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ErrorHandlerService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ErrorHandlerService,
    factory: _ErrorHandlerService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideNotifications() {
  return makeEnvironmentProviders([{
    provide: ERROR_NOTIFICATION_SERVICE,
    useExisting: ErrorHandlerService
  }]);
}
var ConfirmLeaveDialog = class _ConfirmLeaveDialog {
  ref;
  data;
  constructor(ref, data) {
    this.ref = ref;
    this.data = data;
  }
  close(result) {
    this.ref.close(result);
  }
  static ɵfac = function ConfirmLeaveDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmLeaveDialog)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ConfirmLeaveDialog,
    selectors: [["eac-confirm-leave-dialog"]],
    decls: 15,
    vars: 4,
    consts: [["mat-dialog-title", "", 1, "dlg-title"], ["mat-dialog-content", "", 1, "dlg-content"], ["mat-dialog-actions", "", "align", "end", 1, "dlg-actions"], ["mat-stroked-button", "", 1, "btn-stay", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "btn-leave", 3, "click"]],
    template: function ConfirmLeaveDialog_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "h2", 0)(1, "mat-icon");
        ɵɵtext(2, "warning_amber");
        ɵɵelementEnd();
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 1);
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 2)(7, "button", 3);
        ɵɵlistener("click", function ConfirmLeaveDialog_Template_button_click_7_listener() {
          return ctx.close(false);
        });
        ɵɵelementStart(8, "mat-icon");
        ɵɵtext(9, "back_hand");
        ɵɵelementEnd();
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 4);
        ɵɵlistener("click", function ConfirmLeaveDialog_Template_button_click_11_listener() {
          return ctx.close(true);
        });
        ɵɵelementStart(12, "mat-icon");
        ɵɵtext(13, "thumb_up");
        ɵɵelementEnd();
        ɵɵtext(14);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.data.title, "\n");
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.data.message, "\n");
        ɵɵadvance(5);
        ɵɵtextInterpolate1(" ", ctx.data.cancelText ?? "Stay", " ");
        ɵɵadvance(4);
        ɵɵtextInterpolate1(" ", ctx.data.confirmText ?? "Leave", " ");
      }
    },
    dependencies: [MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmLeaveDialog, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "eac-confirm-leave-dialog",
      imports: [MatDialogModule, MatButtonModule, MatIconModule],
      template: `<h2 mat-dialog-title class="dlg-title">\r
  <mat-icon>warning_amber</mat-icon>\r
  {{ data.title }}\r
</h2>\r
\r
<div mat-dialog-content class="dlg-content">\r
  {{ data.message }}\r
</div>\r
\r
<div mat-dialog-actions align="end" class="dlg-actions">\r
  <button mat-stroked-button class="btn-stay" (click)="close(false)">\r
    <mat-icon>back_hand</mat-icon>\r
    {{ data.cancelText ?? 'Stay' }}\r
  </button>\r
\r
  <button mat-flat-button color="primary" class="btn-leave" (click)="close(true)">\r
    <mat-icon>thumb_up</mat-icon>\r
    {{ data.confirmText ?? 'Leave' }}\r
  </button>\r
</div>\r
`
    }]
  }], () => [{
    type: MatDialogRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_DATA]
    }]
  }], null);
})();
var pendingChangesGuard = (component) => {
  if (!component?.hasUnsavedChanges()) return true;
  const dialog = inject(MatDialog);
  const ref = dialog.open(ConfirmLeaveDialog, {
    width: "460px",
    panelClass: "dlg-unsaved",
    data: {
      title: "Unsaved Changes",
      message: "You have unsaved changes. Leave anyway?",
      confirmText: "Leave",
      cancelText: "Stay"
    }
  });
  return ref.afterClosed().pipe((0, import_operators4.map)((res) => !!res));
};
var ConfirmDeleteDialog = class _ConfirmDeleteDialog {
  ref;
  data;
  constructor(ref, data) {
    this.ref = ref;
    this.data = data;
  }
  close(result) {
    this.ref.close(result);
  }
  static ɵfac = function ConfirmDeleteDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDeleteDialog)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ConfirmDeleteDialog,
    selectors: [["eac-confirm-delete-dialog"]],
    decls: 14,
    vars: 4,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "warn", "cdkFocusInitial", "", 3, "click"]],
    template: function ConfirmDeleteDialog_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "h2", 0)(1, "mat-icon");
        ɵɵtext(2, "delete_forever");
        ɵɵelementEnd();
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 1)(5, "p");
        ɵɵtext(6);
        ɵɵelementEnd()();
        ɵɵelementStart(7, "div", 2)(8, "button", 3);
        ɵɵlistener("click", function ConfirmDeleteDialog_Template_button_click_8_listener() {
          return ctx.close(false);
        });
        ɵɵtext(9);
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 4);
        ɵɵlistener("click", function ConfirmDeleteDialog_Template_button_click_10_listener() {
          return ctx.close(true);
        });
        ɵɵelementStart(11, "mat-icon");
        ɵɵtext(12, "delete");
        ɵɵelementEnd();
        ɵɵtext(13);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.data.title ?? "Confirm delete", "\n");
        ɵɵadvance(3);
        ɵɵtextInterpolate(ctx.data.message);
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.data.cancelText ?? "Cancel", " ");
        ɵɵadvance(4);
        ɵɵtextInterpolate1(" ", ctx.data.confirmText ?? "Delete", " ");
      }
    },
    dependencies: [MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatIconModule, MatIcon],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDeleteDialog, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "eac-confirm-delete-dialog",
      imports: [MatDialogModule, MatButtonModule, MatIconModule],
      template: `<h2 mat-dialog-title>\r
  <mat-icon>delete_forever</mat-icon>\r
  {{ data.title ?? 'Confirm delete' }}\r
</h2>\r
\r
<div mat-dialog-content>\r
  <p>{{ data.message }}</p>\r
</div>\r
\r
<div mat-dialog-actions align="end">\r
  <button mat-stroked-button (click)="close(false)">\r
    {{ data.cancelText ?? 'Cancel' }}\r
  </button>\r
  <button mat-flat-button color="warn" (click)="close(true)" cdkFocusInitial>\r
    <mat-icon>delete</mat-icon>\r
    {{ data.confirmText ?? 'Delete' }}\r
  </button>\r
</div>\r
`
    }]
  }], () => [{
    type: MatDialogRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_DATA]
    }]
  }], null);
})();
export {
  ConfirmDeleteDialog,
  ConfirmLeaveDialog,
  DD_MM_YYYY_FORMATS,
  DdMmYyyyDateAdapter,
  LoadingOverlayComponent,
  LoadingService,
  NotificationService,
  loadingInterceptor,
  parseLocalDate,
  pendingChangesGuard,
  provideGlobalDateFormat,
  provideNotifications,
  toLocalDateStr
};
//# sourceMappingURL=@eac-arch_ui-kit.js.map
