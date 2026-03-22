import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  isPlatformBrowser
} from "./chunk-IISRQVBV.js";
import {
  Optional,
  PLATFORM_ID
} from "./chunk-LYFZ6E5Q.js";
import {
  InjectionToken,
  signal
} from "./chunk-K2NTFZSD.js";

// node_modules/@eac-arch/infrastructure-config/fesm2022/eac-arch-infrastructure-config.mjs
function traverse(obj, path) {
  let current = obj;
  for (const key of path.split(".")) {
    if (current != null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, key)) {
      current = current[key];
    } else {
      return { value: void 0, found: false };
    }
  }
  return { value: current, found: true };
}
function getByPath(obj, path) {
  const { value, found } = traverse(obj, path);
  return found ? value ?? null : null;
}
function requireByPath(obj, path, hint) {
  if (!path) {
    throw new Error(`Missing config path (empty). ${hint ?? ""}`.trim());
  }
  const { value, found } = traverse(obj, path);
  if (!found) {
    const msg = hint ? `Missing config "${path}". ${hint}` : `Missing config "${path}".`;
    throw new Error(msg);
  }
  return value;
}
var APP_CONFIG_TOKEN = new InjectionToken("APP_CONFIG_TOKEN");
var providePreloadedConfig = (cfg) => ({
  provide: APP_CONFIG_TOKEN,
  useValue: cfg
});
var ConfigService = class {
  STORAGE_KEY = "appConfig";
  isBrowser;
  _config;
  config;
  constructor(isBrowser2, preloaded) {
    this.isBrowser = isBrowser2;
    const initial = preloaded ?? this.readStorage();
    this._config = signal(initial, ...ngDevMode ? [{ debugName: "_config" }] : []);
    this.config = this._config.asReadonly();
    this.persist(initial);
  }
  raw() {
    return this._config();
  }
  get(path) {
    const src = this._config();
    return src ? getByPath(src, path) : null;
  }
  require(path, hint) {
    return requireByPath(this._config(), path, hint);
  }
  persist(cfg) {
    if (!this.isBrowser)
      return;
    cfg ? sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(cfg)) : sessionStorage.removeItem(this.STORAGE_KEY);
  }
  readStorage() {
    if (!this.isBrowser)
      return null;
    const raw = sessionStorage.getItem(this.STORAGE_KEY);
    if (!raw || raw === "undefined")
      return null;
    try {
      return JSON.parse(raw);
    } catch {
      sessionStorage.removeItem(this.STORAGE_KEY);
      return null;
    }
  }
};
function provideConfig() {
  return [
    {
      provide: ConfigService,
      useFactory: (platformId, preloaded) => new ConfigService(isPlatformBrowser(platformId), preloaded ?? null),
      deps: [PLATFORM_ID, [new Optional(), APP_CONFIG_TOKEN]]
    }
  ];
}
function provideConfigTesting(config = {}) {
  return [
    { provide: APP_CONFIG_TOKEN, useValue: config },
    {
      provide: ConfigService,
      useFactory: (preloaded) => new ConfigService(false, preloaded ?? null),
      deps: [APP_CONFIG_TOKEN]
    }
  ];
}
function isBrowser() {
  return typeof globalThis !== "undefined" && typeof globalThis["window"] === "object" && typeof globalThis["document"] === "object";
}
function prefetchConfig(url, timeoutMs = 2e3) {
  if (!isBrowser())
    return Promise.resolve(null);
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), timeoutMs);
  return fetch(url, { cache: "no-store", signal: ac.signal }).then((res) => res.ok ? res.json() : null).catch(() => null).finally(() => clearTimeout(timer));
}

export {
  getByPath,
  requireByPath,
  APP_CONFIG_TOKEN,
  providePreloadedConfig,
  ConfigService,
  provideConfig,
  provideConfigTesting,
  prefetchConfig
};
//# sourceMappingURL=chunk-EKJSAY7F.js.map
