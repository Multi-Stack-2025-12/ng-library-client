import {
  ActivatedRoute,
  Router
} from "./chunk-7CJR3TPL.js";
import {
  toObservable,
  toSignal
} from "./chunk-YGWDNACD.js";
import "./chunk-PH2KYO23.js";
import "./chunk-VGQ5TN4O.js";
import "./chunk-JGAWGW4Y.js";
import "./chunk-2ECK5FYK.js";
import "./chunk-IP6TPGYU.js";
import {
  computed,
  effect,
  inject,
  signal,
  untracked
} from "./chunk-ZCAJSTA7.js";
import {
  debounceTime
} from "./chunk-RSS3ODKE.js";
import "./chunk-46DXP6YY.js";

// node_modules/@eac-arch/infrastructure-state/fesm2022/eac-arch-infrastructure-state.mjs
var ListQueryParamsSyncer = class {
  route = inject(ActivatedRoute);
  router = inject(Router);
  /** Typed, writable signals — one per schema field, pre-seeded from URL or sessionStorage. */
  params;
  /** Read-only debounced signals for fields with debounce config. Use these in effects/computed for data loading. */
  debounced;
  constructor(schema) {
    const pm = this.route.snapshot.queryParamMap;
    const routePath = this.route.snapshot.pathFromRoot.flatMap((s) => s.url).map((seg) => seg.path).filter(Boolean).join("/");
    const storageKey = "qp:/" + (routePath || "unknown");
    const urlHasParams = Object.keys(schema).some((k) => pm.has(k));
    const rawStored = typeof sessionStorage !== "undefined" ? sessionStorage.getItem(storageKey) : null;
    const stored = !urlHasParams && rawStored !== null ? tryParse(rawStored) ?? {} : {};
    const rawSignals = {};
    for (const [key, desc] of Object.entries(schema)) {
      const raw = pm.get(key) ?? stored[key] ?? null;
      let initial;
      if (desc.type === "number") {
        const n = raw !== null ? Number(raw) : void 0;
        const parsed = Number.isFinite(n) ? n : desc.default;
        initial = parsed !== void 0 && desc.toSignal ? desc.toSignal(parsed) : parsed;
      } else if (desc.type === "sort") {
        initial = raw ? parseSortRaw(raw) : [];
      } else {
        initial = raw ?? desc.default ?? void 0;
      }
      rawSignals[key] = signal(initial);
    }
    this.params = rawSignals;
    const buildSnapshot = () => {
      const snap = {};
      for (const [key, desc] of Object.entries(schema)) {
        const val = rawSignals[key]();
        if (desc.type === "number") {
          snap[key] = val != null ? String(desc.fromSignal ? desc.fromSignal(val) : val) : null;
        } else if (desc.type === "sort") {
          snap[key] = buildSortRaw(val) || null;
        } else {
          snap[key] = val || null;
        }
      }
      return snap;
    };
    if (typeof sessionStorage !== "undefined") {
      const snap = buildSnapshot();
      sessionStorage.setItem(storageKey, JSON.stringify(snap));
    } else {
      console.warn("[Syncer] sessionStorage NOT available");
    }
    const urlReaders = {};
    for (const [key, desc] of Object.entries(schema)) {
      if (desc.type === "string" && desc.debounce) {
        const debounced = toSignal(toObservable(rawSignals[key]).pipe(debounceTime(desc.debounce)), { initialValue: rawSignals[key]() });
        urlReaders[key] = debounced;
      } else {
        urlReaders[key] = rawSignals[key];
      }
    }
    this.debounced = urlReaders;
    const urlSnapshot = computed(() => {
      const out = {};
      for (const key of Object.keys(schema)) {
        out[key] = urlReaders[key]();
      }
      return out;
    }, ...ngDevMode ? [{ debugName: "urlSnapshot" }] : []);
    effect(() => {
      const values = urlSnapshot();
      untracked(() => {
        const rawQuery = this.writeToUrl(schema, values);
        if (typeof sessionStorage !== "undefined") {
          sessionStorage.setItem(storageKey, JSON.stringify(rawQuery));
        }
      });
    });
  }
  // ---------------------------------------------------------------------------
  // Private — returns the raw query param map that was written
  // ---------------------------------------------------------------------------
  writeToUrl(schema, values) {
    const query = {};
    for (const [key, desc] of Object.entries(schema)) {
      const val = values[key];
      if (desc.type === "sort") {
        query[key] = buildSortRaw(val) || null;
      } else if (desc.type === "number") {
        if (val == null) {
          query[key] = null;
        } else {
          const mapped = desc.fromSignal ? desc.fromSignal(val) : val;
          query[key] = String(mapped);
        }
      } else {
        query[key] = val || null;
      }
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: query,
      queryParamsHandling: "merge",
      replaceUrl: true
    });
    return query;
  }
};
function tryParse(raw) {
  if (!raw)
    return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function parseSortRaw(raw) {
  return raw.split(",").map((part) => {
    const [field, direction] = part.trim().split(/\s+/);
    if (!field)
      return null;
    return { field, direction: direction === "desc" ? "desc" : "asc" };
  }).filter((x) => x !== null);
}
function buildSortRaw(fields) {
  if (!fields?.length)
    return "";
  return fields.map((f) => f.direction === "asc" ? f.field : `${f.field} ${f.direction}`).join(",");
}
export {
  ListQueryParamsSyncer
};
//# sourceMappingURL=@eac-arch_infrastructure-state.js.map
