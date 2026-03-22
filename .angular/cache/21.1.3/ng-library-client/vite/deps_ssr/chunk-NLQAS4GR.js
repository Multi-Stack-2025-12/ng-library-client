import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  HttpErrorResponse
} from "./chunk-RCM6EQBQ.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵgetInheritedFactory
} from "./chunk-LYFZ6E5Q.js";
import {
  ErrorHandler,
  InjectionToken,
  inject,
  makeEnvironmentProviders,
  ɵɵdefineInjectable
} from "./chunk-K2NTFZSD.js";
import {
  require_cjs
} from "./chunk-O5J3CNTX.js";
import {
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@eac-arch/infrastructure-http/fesm2022/eac-arch-infrastructure-http.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var PagedList = class _PagedList {
  items;
  currentPage;
  totalPages;
  pageSize;
  totalCount;
  get hasPrevious() {
    return this.currentPage > 1;
  }
  get hasNext() {
    return this.currentPage < this.totalPages;
  }
  constructor(items, totalCount, pageNumber, pageSize) {
    if (pageSize <= 0) {
      throw new Error("Page size must be greater than 0");
    }
    if (pageNumber <= 0) {
      throw new Error("Page number must be greater than 0");
    }
    if (totalCount < 0) {
      throw new Error("Total count cannot be negative");
    }
    this.totalCount = totalCount;
    this.pageSize = pageSize;
    this.currentPage = pageNumber;
    this.totalPages = Math.ceil(totalCount / pageSize);
    this.items = Object.freeze([...items]);
  }
  static empty(pageSize = 10) {
    return new _PagedList([], 0, 1, pageSize);
  }
  static create(items, totalCount, pageNumber, pageSize) {
    return new _PagedList(items, totalCount, pageNumber, pageSize);
  }
};
var ERROR_NOTIFICATION_SERVICE = new InjectionToken("ErrorNotificationService");
var httpErrorInterceptor = (req, next) => {
  const notificationService = inject(ERROR_NOTIFICATION_SERVICE, {
    optional: true
  });
  return next(req).pipe((0, import_rxjs.catchError)((error) => {
    if (req.headers.has("X-Skip-Global-Error-Handler")) {
      return (0, import_rxjs.throwError)(() => error);
    }
    if (notificationService) {
      if (!(error instanceof HttpErrorResponse)) {
        const unknownError = {
          errors: [{
            status: "0",
            title: "Unexpected Error",
            detail: error instanceof Error ? error.message : "An unexpected error occurred while processing the request."
          }]
        };
        notificationService.handleHttpError(unknownError, 0, req.url);
        return (0, import_rxjs.throwError)(() => error);
      }
      if (error.status === 0 || !error.error) {
        const networkError = {
          errors: [{
            status: "0",
            title: "Connection Error",
            detail: "Could not connect to the server. Please check your connection or try again later."
          }]
        };
        notificationService.handleHttpError(networkError, 0, req.url);
      } else {
        try {
          const errorResponse = error.error;
          if (errorResponse.errors && Array.isArray(errorResponse.errors)) {
            notificationService.handleHttpError(errorResponse, error.status, req.url);
          } else {
            const genericError = {
              errors: [{
                status: error.status.toString(),
                title: error.statusText || "Error",
                detail: typeof error.error === "string" ? error.error : error.message || "An unexpected error occurred"
              }]
            };
            notificationService.handleHttpError(genericError, error.status, req.url);
          }
        } catch {
          const genericError = {
            errors: [{
              status: error.status.toString(),
              title: "Error",
              detail: error.message || "An unexpected error occurred"
            }]
          };
          notificationService.handleHttpError(genericError, error.status, req.url);
        }
      }
    }
    return (0, import_rxjs.throwError)(() => error);
  }));
};
var GlobalErrorHandler = class _GlobalErrorHandler extends ErrorHandler {
  // Inject in class field to stay within injection context
  notificationService = inject(ERROR_NOTIFICATION_SERVICE, {
    optional: true
  });
  handleError(error) {
    if (error instanceof HttpErrorResponse) {
      super.handleError(error);
      return;
    }
    console.error("Unhandled error:", error);
    if (this.notificationService) {
      this.notificationService.handleCoreError(error);
    }
    super.handleError(error);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵGlobalErrorHandler_BaseFactory;
    return function GlobalErrorHandler_Factory(__ngFactoryType__) {
      return (ɵGlobalErrorHandler_BaseFactory || (ɵGlobalErrorHandler_BaseFactory = ɵɵgetInheritedFactory(_GlobalErrorHandler)))(__ngFactoryType__ || _GlobalErrorHandler);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _GlobalErrorHandler,
    factory: _GlobalErrorHandler.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalErrorHandler, [{
    type: Injectable
  }], null, null);
})();
function provideErrorHandling() {
  return makeEnvironmentProviders([{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }]);
}
function toJsonPatchOperations(operations) {
  return operations.map(({
    op,
    path,
    value,
    from
  }) => ({
    op,
    path,
    value,
    from
  }));
}

export {
  PagedList,
  ERROR_NOTIFICATION_SERVICE,
  httpErrorInterceptor,
  provideErrorHandling,
  toJsonPatchOperations
};
//# sourceMappingURL=chunk-NLQAS4GR.js.map
