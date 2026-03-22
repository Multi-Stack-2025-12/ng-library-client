import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  DiagLogLevel,
  INVALID_SPAN_CONTEXT,
  ROOT_CONTEXT,
  SamplingDecision,
  SpanKind,
  SpanStatusCode,
  TraceFlags,
  baggageEntryMetadataFromString,
  context,
  createContextKey,
  diag,
  isSpanContextValid,
  isValidTraceId,
  propagation,
  trace
} from "./chunk-5EBH3E27.js";
import {
  ConfigService
} from "./chunk-EKJSAY7F.js";
import {
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  ResolveEnd,
  ResolveStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from "./chunk-XR6OUGDR.js";
import "./chunk-OHJYKAZU.js";
import {
  HttpErrorResponse,
  HttpResponse
} from "./chunk-RCM6EQBQ.js";
import {
  isPlatformBrowser
} from "./chunk-IISRQVBV.js";
import "./chunk-VQPDKJCC.js";
import {
  APP_INITIALIZER,
  Injectable,
  PLATFORM_ID,
  setClassMetadata
} from "./chunk-LYFZ6E5Q.js";
import {
  DOCUMENT,
  InjectionToken,
  inject,
  makeEnvironmentProviders,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-K2NTFZSD.js";
import {
  require_cjs
} from "./chunk-O5J3CNTX.js";
import {
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS({
  "node_modules/@protobufjs/aspromise/index.js"(exports2, module2) {
    "use strict";
    module2.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length)
        params[offset++] = arguments[index++];
      return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err)
              reject(err);
            else {
              var params2 = new Array(arguments.length - 1), offset2 = 0;
              while (offset2 < params2.length)
                params2[offset2++] = arguments[offset2];
              resolve.apply(null, params2);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }
});

// node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS({
  "node_modules/@protobufjs/base64/index.js"(exports2) {
    "use strict";
    var base64 = exports2;
    base64.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    var i;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === void 0)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  }
});

// node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS({
  "node_modules/@protobufjs/eventemitter/index.js"(exports2, module2) {
    "use strict";
    module2.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = {};
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (evt === void 0)
        this._listeners = {};
      else {
        if (fn === void 0)
          this._listeners[evt] = [];
        else {
          var listeners = this._listeners[evt];
          for (var i = 0; i < listeners.length; )
            if (listeners[i].fn === fn)
              listeners.splice(i, 1);
            else
              ++i;
        }
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (; i < arguments.length; )
          args.push(arguments[i++]);
        for (i = 0; i < listeners.length; )
          listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }
});

// node_modules/@protobufjs/float/index.js
var require_float = __commonJS({
  "node_modules/@protobufjs/float/index.js"(exports2, module2) {
    "use strict";
    module2.exports = factory(factory);
    function factory(exports3) {
      if (typeof Float32Array !== "undefined") (function() {
        var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      })();
      else (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0)
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos);
          else if (isNaN(val))
            writeUint(2143289344, buf, pos);
          else if (val > 34028234663852886e22)
            writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
          else if (val < 11754943508222875e-54)
            writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
          else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
          return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      })();
      if (typeof Float64Array !== "undefined") (function() {
        var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      })();
      else (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 17976931348623157e292) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 22250738585072014e-324) {
              mantissa = val / 5e-324;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              if (exponent === 1024)
                exponent = 1023;
              mantissa = val * Math.pow(2, -exponent);
              writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
          return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      })();
      return exports3;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = val & 255;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }
});

// node_modules/@protobufjs/inquire/index.js
var require_inquire = __commonJS({
  "node_modules/@protobufjs/inquire/index.js"(exports, module) {
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length))
          return mod;
      } catch (e) {
      }
      return null;
    }
  }
});

// node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS({
  "node_modules/@protobufjs/utf8/index.js"(exports2) {
    "use strict";
    var utf8 = exports2;
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      var len = end - start;
      if (len < 1)
        return "";
      var parts = null, chunk = [], i = 0, t;
      while (start < end) {
        t = buffer[start++];
        if (t < 128)
          chunk[i++] = t;
        else if (t > 191 && t < 224)
          chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
          t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
          chunk[i++] = 55296 + (t >> 10);
          chunk[i++] = 56320 + (t & 1023);
        } else
          chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (parts) {
        if (i)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  }
});

// node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS({
  "node_modules/@protobufjs/pool/index.js"(exports2, module2) {
    "use strict";
    module2.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size2) {
        if (size2 < 1 || size2 > MAX)
          return alloc(size2);
        if (offset + size2 > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size2);
        if (offset & 7)
          offset = (offset | 7) + 1;
        return buf;
      };
    }
  }
});

// node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS({
  "node_modules/protobufjs/src/util/longbits.js"(exports2, module2) {
    "use strict";
    module2.exports = LongBits;
    var util = require_minimal();
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber(value) {
      if (value === 0)
        return zero;
      var sign = value < 0;
      if (sign)
        value = -value;
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295)
            hi = 0;
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if (typeof value === "number")
        return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (util.Long)
          value = util.Long.fromString(value);
        else
          return LongBits.fromNumber(parseInt(value, 10));
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo)
          hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash)
        return zero;
      return new LongBits(
        (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
        (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
      );
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(
        this.lo & 255,
        this.lo >>> 8 & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24,
        this.hi & 255,
        this.hi >>> 8 & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
      );
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(this.lo & 1);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }
});

// node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS({
  "node_modules/protobufjs/src/util/minimal.js"(exports2) {
    "use strict";
    var util = exports2;
    util.asPromise = require_aspromise();
    util.base64 = require_base64();
    util.EventEmitter = require_eventemitter();
    util.float = require_float();
    util.inquire = require_inquire();
    util.utf8 = require_utf8();
    util.pool = require_pool();
    util.LongBits = require_longbits();
    util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
    util.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    );
    util.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    );
    util.isInteger = Number.isInteger || /* istanbul ignore next */
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util.isObject = function isObject2(value) {
      return value && typeof value === "object";
    };
    util.isset = /**
     * Checks if a property on a message is considered to be present.
     * @param {Object} obj Plain object or message instance
     * @param {string} prop Property name
     * @returns {boolean} `true` if considered to be present, otherwise `false`
     */
    util.isSet = function isSet(obj, prop) {
      var value = obj[prop];
      if (value != null && obj.hasOwnProperty(prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util.Buffer = (function() {
      try {
        var Buffer2 = util.inquire("buffer").Buffer;
        return Buffer2.prototype.utf8Write ? Buffer2 : (
          /* istanbul ignore next */
          null
        );
      } catch (e) {
        return null;
      }
    })();
    util._Buffer_from = null;
    util._Buffer_allocUnsafe = null;
    util.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util.Long = /* istanbul ignore next */
    util.global.dcodeIO && /* istanbul ignore next */
    util.global.dcodeIO.Long || /* istanbul ignore next */
    util.global.Long || util.inquire("long");
    util.key2Re = /^true|false|0|1$/;
    util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util.longToHash = function longToHash(value) {
      return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };
    util.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util.LongBits.fromHash(hash);
      if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge5(dst, src, ifNotSet) {
      for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === void 0 || !ifNotSet)
          dst[keys[i]] = src[keys[i]];
      return dst;
    }
    util.merge = merge5;
    util.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name) {
      function CustomError(message, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge5(this, properties);
      }
      CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          enumerable: false,
          configurable: true
        },
        name: {
          get: function get() {
            return name;
          },
          set: void 0,
          enumerable: false,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: true
        },
        toString: {
          value: function value() {
            return this.name + ": " + this.message;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      return CustomError;
    }
    util.newError = newError;
    util.ProtocolError = newError("ProtocolError");
    util.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util.oneOfSetter = function setOneOf(fieldNames) {
      return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name)
            delete this[fieldNames[i]];
      };
    };
    util.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util._configure = function() {
      var Buffer2 = util.Buffer;
      if (!Buffer2) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
      }
      util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
      function Buffer_from(value, encoding) {
        return new Buffer2(value, encoding);
      };
      util._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
      function Buffer_allocUnsafe(size) {
        return new Buffer2(size);
      };
    };
  }
});

// node_modules/protobufjs/src/writer.js
var require_writer = __commonJS({
  "node_modules/protobufjs/src/writer.js"(exports2, module2) {
    "use strict";
    module2.exports = Writer;
    var util = require_minimal();
    var BufferWriter;
    var LongBits = util.LongBits;
    var base64 = util.base64;
    var utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    function noop() {
    }
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    if (util.Array !== Array)
      Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
        value
      )).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
      }
      while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
      }
      buf[pos++] = val.lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
        return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }
});

// node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS({
  "node_modules/protobufjs/src/writer_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferWriter;
    var Writer = require_writer();
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require_minimal();
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length; )
          buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util.isString(value))
        value = util._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      if (val.length < 40)
        util.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
        buf.utf8Write(val, pos);
      else
        buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
        this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }
});

// node_modules/protobufjs/src/reader.js
var require_reader = __commonJS({
  "node_modules/protobufjs/src/reader.js"(exports2, module2) {
    "use strict";
    module2.exports = Reader;
    var util = require_minimal();
    var BufferReader;
    var LongBits = util.LongBits;
    var utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array2(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer2) {
          return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
    util.Array.prototype.slice;
    Reader.prototype.uint32 = /* @__PURE__ */ (function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    })();
    Reader.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
        i = 0;
      } else {
        for (; i < 3; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
      }
      if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      } else {
        for (; i < 5; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4) | 0;
    };
    function readFixed64() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf))
        return this.buf.slice(start, end);
      if (start === end) {
        var nativeBuffer = util.Buffer;
        return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
      }
      return this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if (typeof length === "number") {
        if (this.pos + length > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
      } else {
        do {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
      }
      return this;
    };
    Reader.prototype.skipType = function(wireType) {
      switch (wireType) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          while ((wireType = this.uint32() & 7) !== 4) {
            this.skipType(wireType);
          }
          break;
        case 5:
          this.skip(4);
          break;
        /* istanbul ignore next */
        default:
          throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : (
        /* istanbul ignore next */
        "toNumber"
      );
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }
});

// node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS({
  "node_modules/protobufjs/src/reader_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferReader;
    var Reader = require_reader();
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require_minimal();
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }
});

// node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS({
  "node_modules/protobufjs/src/rpc/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var util = require_minimal();
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request)
        throw TypeError("request must be specified");
      var self2 = this;
      if (!callback)
        return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
      if (!self2.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return void 0;
      }
      try {
        return self2.rpcImpl(
          method,
          requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
          function rpcCallback(err, response) {
            if (err) {
              self2.emit("error", err, method);
              return callback(err);
            }
            if (response === null) {
              self2.end(
                /* endedByRPC */
                true
              );
              return void 0;
            }
            if (!(response instanceof responseCtor)) {
              try {
                response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
              } catch (err2) {
                self2.emit("error", err2, method);
                return callback(err2);
              }
            }
            self2.emit("data", response, method);
            return callback(null, response);
          }
        );
      } catch (err) {
        self2.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return void 0;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        if (!endedByRPC)
          this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }
});

// node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS({
  "node_modules/protobufjs/src/rpc.js"(exports2) {
    "use strict";
    var rpc = exports2;
    rpc.Service = require_service();
  }
});

// node_modules/protobufjs/src/roots.js
var require_roots = __commonJS({
  "node_modules/protobufjs/src/roots.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS({
  "node_modules/protobufjs/src/index-minimal.js"(exports2) {
    "use strict";
    var protobuf = exports2;
    protobuf.build = "minimal";
    protobuf.Writer = require_writer();
    protobuf.BufferWriter = require_writer_buffer();
    protobuf.Reader = require_reader();
    protobuf.BufferReader = require_reader_buffer();
    protobuf.util = require_minimal();
    protobuf.rpc = require_rpc();
    protobuf.roots = require_roots();
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }
});

// node_modules/protobufjs/minimal.js
var require_minimal2 = __commonJS({
  "node_modules/protobufjs/minimal.js"(exports2, module2) {
    "use strict";
    module2.exports = require_index_minimal();
  }
});

// node_modules/@opentelemetry/otlp-transformer/build/esm/generated/root.js
var require_root = __commonJS({
  "node_modules/@opentelemetry/otlp-transformer/build/esm/generated/root.js"(exports2, module2) {
    "use strict";
    var $protobuf = require_minimal2();
    var $Reader = $protobuf.Reader;
    var $Writer = $protobuf.Writer;
    var $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.opentelemetry = (function() {
      var opentelemetry4 = {};
      opentelemetry4.proto = (function() {
        var proto = {};
        proto.common = (function() {
          var common = {};
          common.v1 = (function() {
            var v1 = {};
            v1.AnyValue = (function() {
              function AnyValue(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              AnyValue.prototype.stringValue = null;
              AnyValue.prototype.boolValue = null;
              AnyValue.prototype.intValue = null;
              AnyValue.prototype.doubleValue = null;
              AnyValue.prototype.arrayValue = null;
              AnyValue.prototype.kvlistValue = null;
              AnyValue.prototype.bytesValue = null;
              var $oneOfFields;
              Object.defineProperty(AnyValue.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["stringValue", "boolValue", "intValue", "doubleValue", "arrayValue", "kvlistValue", "bytesValue"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              AnyValue.create = function create(properties) {
                return new AnyValue(properties);
              };
              AnyValue.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                  writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                  writer.uint32(
                    /* id 2, wireType 0 =*/
                    16
                  ).bool(message.boolValue);
                if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                  writer.uint32(
                    /* id 3, wireType 0 =*/
                    24
                  ).int64(message.intValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                  writer.uint32(
                    /* id 4, wireType 1 =*/
                    33
                  ).double(message.doubleValue);
                if (message.arrayValue != null && Object.hasOwnProperty.call(message, "arrayValue"))
                  $root.opentelemetry.proto.common.v1.ArrayValue.encode(message.arrayValue, writer.uint32(
                    /* id 5, wireType 2 =*/
                    42
                  ).fork()).ldelim();
                if (message.kvlistValue != null && Object.hasOwnProperty.call(message, "kvlistValue"))
                  $root.opentelemetry.proto.common.v1.KeyValueList.encode(message.kvlistValue, writer.uint32(
                    /* id 6, wireType 2 =*/
                    50
                  ).fork()).ldelim();
                if (message.bytesValue != null && Object.hasOwnProperty.call(message, "bytesValue"))
                  writer.uint32(
                    /* id 7, wireType 2 =*/
                    58
                  ).bytes(message.bytesValue);
                return writer;
              };
              AnyValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              AnyValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.AnyValue();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.stringValue = reader.string();
                      break;
                    }
                    case 2: {
                      message.boolValue = reader.bool();
                      break;
                    }
                    case 3: {
                      message.intValue = reader.int64();
                      break;
                    }
                    case 4: {
                      message.doubleValue = reader.double();
                      break;
                    }
                    case 5: {
                      message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.decode(reader, reader.uint32());
                      break;
                    }
                    case 6: {
                      message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.decode(reader, reader.uint32());
                      break;
                    }
                    case 7: {
                      message.bytesValue = reader.bytes();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              AnyValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              AnyValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                var properties = {};
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                  properties.value = 1;
                  if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  if (typeof message.boolValue !== "boolean")
                    return "boolValue: boolean expected";
                }
                if (message.intValue != null && message.hasOwnProperty("intValue")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                    return "intValue: integer|Long expected";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  if (typeof message.doubleValue !== "number")
                    return "doubleValue: number expected";
                }
                if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  {
                    var error = $root.opentelemetry.proto.common.v1.ArrayValue.verify(message.arrayValue);
                    if (error)
                      return "arrayValue." + error;
                  }
                }
                if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  {
                    var error = $root.opentelemetry.proto.common.v1.KeyValueList.verify(message.kvlistValue);
                    if (error)
                      return "kvlistValue." + error;
                  }
                }
                if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  if (!(message.bytesValue && typeof message.bytesValue.length === "number" || $util.isString(message.bytesValue)))
                    return "bytesValue: buffer expected";
                }
                return null;
              };
              AnyValue.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.common.v1.AnyValue)
                  return object;
                var message = new $root.opentelemetry.proto.common.v1.AnyValue();
                if (object.stringValue != null)
                  message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                  message.boolValue = Boolean(object.boolValue);
                if (object.intValue != null) {
                  if ($util.Long)
                    (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                  else if (typeof object.intValue === "string")
                    message.intValue = parseInt(object.intValue, 10);
                  else if (typeof object.intValue === "number")
                    message.intValue = object.intValue;
                  else if (typeof object.intValue === "object")
                    message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                }
                if (object.doubleValue != null)
                  message.doubleValue = Number(object.doubleValue);
                if (object.arrayValue != null) {
                  if (typeof object.arrayValue !== "object")
                    throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                  message.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.fromObject(object.arrayValue);
                }
                if (object.kvlistValue != null) {
                  if (typeof object.kvlistValue !== "object")
                    throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                  message.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.fromObject(object.kvlistValue);
                }
                if (object.bytesValue != null) {
                  if (typeof object.bytesValue === "string")
                    $util.base64.decode(object.bytesValue, message.bytesValue = $util.newBuffer($util.base64.length(object.bytesValue)), 0);
                  else if (object.bytesValue.length >= 0)
                    message.bytesValue = object.bytesValue;
                }
                return message;
              };
              AnyValue.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                  object.stringValue = message.stringValue;
                  if (options.oneofs)
                    object.value = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                  object.boolValue = message.boolValue;
                  if (options.oneofs)
                    object.value = "boolValue";
                }
                if (message.intValue != null && message.hasOwnProperty("intValue")) {
                  if (typeof message.intValue === "number")
                    object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                  else
                    object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                  if (options.oneofs)
                    object.value = "intValue";
                }
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                  object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                  if (options.oneofs)
                    object.value = "doubleValue";
                }
                if (message.arrayValue != null && message.hasOwnProperty("arrayValue")) {
                  object.arrayValue = $root.opentelemetry.proto.common.v1.ArrayValue.toObject(message.arrayValue, options);
                  if (options.oneofs)
                    object.value = "arrayValue";
                }
                if (message.kvlistValue != null && message.hasOwnProperty("kvlistValue")) {
                  object.kvlistValue = $root.opentelemetry.proto.common.v1.KeyValueList.toObject(message.kvlistValue, options);
                  if (options.oneofs)
                    object.value = "kvlistValue";
                }
                if (message.bytesValue != null && message.hasOwnProperty("bytesValue")) {
                  object.bytesValue = options.bytes === String ? $util.base64.encode(message.bytesValue, 0, message.bytesValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesValue) : message.bytesValue;
                  if (options.oneofs)
                    object.value = "bytesValue";
                }
                return object;
              };
              AnyValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              AnyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.common.v1.AnyValue";
              };
              return AnyValue;
            })();
            v1.ArrayValue = (function() {
              function ArrayValue(properties) {
                this.values = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ArrayValue.prototype.values = $util.emptyArray;
              ArrayValue.create = function create(properties) {
                return new ArrayValue(properties);
              };
              ArrayValue.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.values != null && message.values.length)
                  for (var i = 0; i < message.values.length; ++i)
                    $root.opentelemetry.proto.common.v1.AnyValue.encode(message.values[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              ArrayValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ArrayValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.ArrayValue();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.values && message.values.length))
                        message.values = [];
                      message.values.push($root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ArrayValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ArrayValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                  if (!Array.isArray(message.values))
                    return "values: array expected";
                  for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.values[i]);
                    if (error)
                      return "values." + error;
                  }
                }
                return null;
              };
              ArrayValue.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.common.v1.ArrayValue)
                  return object;
                var message = new $root.opentelemetry.proto.common.v1.ArrayValue();
                if (object.values) {
                  if (!Array.isArray(object.values))
                    throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                  message.values = [];
                  for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                      throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                    message.values[i] = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.values[i]);
                  }
                }
                return message;
              };
              ArrayValue.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.values = [];
                if (message.values && message.values.length) {
                  object.values = [];
                  for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.values[j], options);
                }
                return object;
              };
              ArrayValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ArrayValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.common.v1.ArrayValue";
              };
              return ArrayValue;
            })();
            v1.KeyValueList = (function() {
              function KeyValueList(properties) {
                this.values = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              KeyValueList.prototype.values = $util.emptyArray;
              KeyValueList.create = function create(properties) {
                return new KeyValueList(properties);
              };
              KeyValueList.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.values != null && message.values.length)
                  for (var i = 0; i < message.values.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.values[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              KeyValueList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              KeyValueList.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValueList();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.values && message.values.length))
                        message.values = [];
                      message.values.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              KeyValueList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              KeyValueList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                  if (!Array.isArray(message.values))
                    return "values: array expected";
                  for (var i = 0; i < message.values.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.values[i]);
                    if (error)
                      return "values." + error;
                  }
                }
                return null;
              };
              KeyValueList.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.common.v1.KeyValueList)
                  return object;
                var message = new $root.opentelemetry.proto.common.v1.KeyValueList();
                if (object.values) {
                  if (!Array.isArray(object.values))
                    throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                  message.values = [];
                  for (var i = 0; i < object.values.length; ++i) {
                    if (typeof object.values[i] !== "object")
                      throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                    message.values[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.values[i]);
                  }
                }
                return message;
              };
              KeyValueList.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.values = [];
                if (message.values && message.values.length) {
                  object.values = [];
                  for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.values[j], options);
                }
                return object;
              };
              KeyValueList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              KeyValueList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValueList";
              };
              return KeyValueList;
            })();
            v1.KeyValue = (function() {
              function KeyValue(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              KeyValue.prototype.key = null;
              KeyValue.prototype.value = null;
              KeyValue.create = function create(properties) {
                return new KeyValue(properties);
              };
              KeyValue.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                  writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).string(message.key);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                  $root.opentelemetry.proto.common.v1.AnyValue.encode(message.value, writer.uint32(
                    /* id 2, wireType 2 =*/
                    18
                  ).fork()).ldelim();
                return writer;
              };
              KeyValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              KeyValue.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.KeyValue();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.key = reader.string();
                      break;
                    }
                    case 2: {
                      message.value = $root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32());
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              KeyValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              KeyValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.key != null && message.hasOwnProperty("key")) {
                  if (!$util.isString(message.key))
                    return "key: string expected";
                }
                if (message.value != null && message.hasOwnProperty("value")) {
                  var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.value);
                  if (error)
                    return "value." + error;
                }
                return null;
              };
              KeyValue.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.common.v1.KeyValue)
                  return object;
                var message = new $root.opentelemetry.proto.common.v1.KeyValue();
                if (object.key != null)
                  message.key = String(object.key);
                if (object.value != null) {
                  if (typeof object.value !== "object")
                    throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                  message.value = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.value);
                }
                return message;
              };
              KeyValue.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults) {
                  object.key = "";
                  object.value = null;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                  object.key = message.key;
                if (message.value != null && message.hasOwnProperty("value"))
                  object.value = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.value, options);
                return object;
              };
              KeyValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              KeyValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.common.v1.KeyValue";
              };
              return KeyValue;
            })();
            v1.InstrumentationScope = (function() {
              function InstrumentationScope(properties) {
                this.attributes = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              InstrumentationScope.prototype.name = null;
              InstrumentationScope.prototype.version = null;
              InstrumentationScope.prototype.attributes = $util.emptyArray;
              InstrumentationScope.prototype.droppedAttributesCount = null;
              InstrumentationScope.create = function create(properties) {
                return new InstrumentationScope(properties);
              };
              InstrumentationScope.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                  writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).string(message.name);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                  writer.uint32(
                    /* id 2, wireType 2 =*/
                    18
                  ).string(message.version);
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 3, wireType 2 =*/
                      26
                    ).fork()).ldelim();
                if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                  writer.uint32(
                    /* id 4, wireType 0 =*/
                    32
                  ).uint32(message.droppedAttributesCount);
                return writer;
              };
              InstrumentationScope.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              InstrumentationScope.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.InstrumentationScope();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.name = reader.string();
                      break;
                    }
                    case 2: {
                      message.version = reader.string();
                      break;
                    }
                    case 3: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 4: {
                      message.droppedAttributesCount = reader.uint32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              InstrumentationScope.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              InstrumentationScope.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                  if (!$util.isString(message.name))
                    return "name: string expected";
                }
                if (message.version != null && message.hasOwnProperty("version")) {
                  if (!$util.isString(message.version))
                    return "version: string expected";
                }
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                  if (!$util.isInteger(message.droppedAttributesCount))
                    return "droppedAttributesCount: integer expected";
                }
                return null;
              };
              InstrumentationScope.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.common.v1.InstrumentationScope)
                  return object;
                var message = new $root.opentelemetry.proto.common.v1.InstrumentationScope();
                if (object.name != null)
                  message.name = String(object.name);
                if (object.version != null)
                  message.version = String(object.version);
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.droppedAttributesCount != null)
                  message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                return message;
              };
              InstrumentationScope.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.attributes = [];
                if (options.defaults) {
                  object.name = "";
                  object.version = "";
                  object.droppedAttributesCount = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                  object.name = message.name;
                if (message.version != null && message.hasOwnProperty("version"))
                  object.version = message.version;
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                  object.droppedAttributesCount = message.droppedAttributesCount;
                return object;
              };
              InstrumentationScope.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              InstrumentationScope.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.common.v1.InstrumentationScope";
              };
              return InstrumentationScope;
            })();
            v1.EntityRef = (function() {
              function EntityRef(properties) {
                this.idKeys = [];
                this.descriptionKeys = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              EntityRef.prototype.schemaUrl = null;
              EntityRef.prototype.type = null;
              EntityRef.prototype.idKeys = $util.emptyArray;
              EntityRef.prototype.descriptionKeys = $util.emptyArray;
              EntityRef.create = function create(properties) {
                return new EntityRef(properties);
              };
              EntityRef.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).string(message.schemaUrl);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                  writer.uint32(
                    /* id 2, wireType 2 =*/
                    18
                  ).string(message.type);
                if (message.idKeys != null && message.idKeys.length)
                  for (var i = 0; i < message.idKeys.length; ++i)
                    writer.uint32(
                      /* id 3, wireType 2 =*/
                      26
                    ).string(message.idKeys[i]);
                if (message.descriptionKeys != null && message.descriptionKeys.length)
                  for (var i = 0; i < message.descriptionKeys.length; ++i)
                    writer.uint32(
                      /* id 4, wireType 2 =*/
                      34
                    ).string(message.descriptionKeys[i]);
                return writer;
              };
              EntityRef.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              EntityRef.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.common.v1.EntityRef();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    case 2: {
                      message.type = reader.string();
                      break;
                    }
                    case 3: {
                      if (!(message.idKeys && message.idKeys.length))
                        message.idKeys = [];
                      message.idKeys.push(reader.string());
                      break;
                    }
                    case 4: {
                      if (!(message.descriptionKeys && message.descriptionKeys.length))
                        message.descriptionKeys = [];
                      message.descriptionKeys.push(reader.string());
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              EntityRef.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              EntityRef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                if (message.type != null && message.hasOwnProperty("type")) {
                  if (!$util.isString(message.type))
                    return "type: string expected";
                }
                if (message.idKeys != null && message.hasOwnProperty("idKeys")) {
                  if (!Array.isArray(message.idKeys))
                    return "idKeys: array expected";
                  for (var i = 0; i < message.idKeys.length; ++i)
                    if (!$util.isString(message.idKeys[i]))
                      return "idKeys: string[] expected";
                }
                if (message.descriptionKeys != null && message.hasOwnProperty("descriptionKeys")) {
                  if (!Array.isArray(message.descriptionKeys))
                    return "descriptionKeys: array expected";
                  for (var i = 0; i < message.descriptionKeys.length; ++i)
                    if (!$util.isString(message.descriptionKeys[i]))
                      return "descriptionKeys: string[] expected";
                }
                return null;
              };
              EntityRef.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.common.v1.EntityRef)
                  return object;
                var message = new $root.opentelemetry.proto.common.v1.EntityRef();
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                if (object.type != null)
                  message.type = String(object.type);
                if (object.idKeys) {
                  if (!Array.isArray(object.idKeys))
                    throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                  message.idKeys = [];
                  for (var i = 0; i < object.idKeys.length; ++i)
                    message.idKeys[i] = String(object.idKeys[i]);
                }
                if (object.descriptionKeys) {
                  if (!Array.isArray(object.descriptionKeys))
                    throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                  message.descriptionKeys = [];
                  for (var i = 0; i < object.descriptionKeys.length; ++i)
                    message.descriptionKeys[i] = String(object.descriptionKeys[i]);
                }
                return message;
              };
              EntityRef.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.idKeys = [];
                  object.descriptionKeys = [];
                }
                if (options.defaults) {
                  object.schemaUrl = "";
                  object.type = "";
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                if (message.type != null && message.hasOwnProperty("type"))
                  object.type = message.type;
                if (message.idKeys && message.idKeys.length) {
                  object.idKeys = [];
                  for (var j = 0; j < message.idKeys.length; ++j)
                    object.idKeys[j] = message.idKeys[j];
                }
                if (message.descriptionKeys && message.descriptionKeys.length) {
                  object.descriptionKeys = [];
                  for (var j = 0; j < message.descriptionKeys.length; ++j)
                    object.descriptionKeys[j] = message.descriptionKeys[j];
                }
                return object;
              };
              EntityRef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              EntityRef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.common.v1.EntityRef";
              };
              return EntityRef;
            })();
            return v1;
          })();
          return common;
        })();
        proto.resource = (function() {
          var resource = {};
          resource.v1 = (function() {
            var v1 = {};
            v1.Resource = (function() {
              function Resource(properties) {
                this.attributes = [];
                this.entityRefs = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Resource.prototype.attributes = $util.emptyArray;
              Resource.prototype.droppedAttributesCount = null;
              Resource.prototype.entityRefs = $util.emptyArray;
              Resource.create = function create(properties) {
                return new Resource(properties);
              };
              Resource.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                  writer.uint32(
                    /* id 2, wireType 0 =*/
                    16
                  ).uint32(message.droppedAttributesCount);
                if (message.entityRefs != null && message.entityRefs.length)
                  for (var i = 0; i < message.entityRefs.length; ++i)
                    $root.opentelemetry.proto.common.v1.EntityRef.encode(message.entityRefs[i], writer.uint32(
                      /* id 3, wireType 2 =*/
                      26
                    ).fork()).ldelim();
                return writer;
              };
              Resource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Resource.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.resource.v1.Resource();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.droppedAttributesCount = reader.uint32();
                      break;
                    }
                    case 3: {
                      if (!(message.entityRefs && message.entityRefs.length))
                        message.entityRefs = [];
                      message.entityRefs.push($root.opentelemetry.proto.common.v1.EntityRef.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Resource.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Resource.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                  if (!$util.isInteger(message.droppedAttributesCount))
                    return "droppedAttributesCount: integer expected";
                }
                if (message.entityRefs != null && message.hasOwnProperty("entityRefs")) {
                  if (!Array.isArray(message.entityRefs))
                    return "entityRefs: array expected";
                  for (var i = 0; i < message.entityRefs.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.EntityRef.verify(message.entityRefs[i]);
                    if (error)
                      return "entityRefs." + error;
                  }
                }
                return null;
              };
              Resource.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.resource.v1.Resource)
                  return object;
                var message = new $root.opentelemetry.proto.resource.v1.Resource();
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.droppedAttributesCount != null)
                  message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                if (object.entityRefs) {
                  if (!Array.isArray(object.entityRefs))
                    throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                  message.entityRefs = [];
                  for (var i = 0; i < object.entityRefs.length; ++i) {
                    if (typeof object.entityRefs[i] !== "object")
                      throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                    message.entityRefs[i] = $root.opentelemetry.proto.common.v1.EntityRef.fromObject(object.entityRefs[i]);
                  }
                }
                return message;
              };
              Resource.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.attributes = [];
                  object.entityRefs = [];
                }
                if (options.defaults)
                  object.droppedAttributesCount = 0;
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                  object.droppedAttributesCount = message.droppedAttributesCount;
                if (message.entityRefs && message.entityRefs.length) {
                  object.entityRefs = [];
                  for (var j = 0; j < message.entityRefs.length; ++j)
                    object.entityRefs[j] = $root.opentelemetry.proto.common.v1.EntityRef.toObject(message.entityRefs[j], options);
                }
                return object;
              };
              Resource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Resource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.resource.v1.Resource";
              };
              return Resource;
            })();
            return v1;
          })();
          return resource;
        })();
        proto.trace = (function() {
          var trace2 = {};
          trace2.v1 = (function() {
            var v1 = {};
            v1.TracesData = (function() {
              function TracesData(properties) {
                this.resourceSpans = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              TracesData.prototype.resourceSpans = $util.emptyArray;
              TracesData.create = function create(properties) {
                return new TracesData(properties);
              };
              TracesData.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resourceSpans != null && message.resourceSpans.length)
                  for (var i = 0; i < message.resourceSpans.length; ++i)
                    $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              TracesData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              TracesData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.TracesData();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.resourceSpans && message.resourceSpans.length))
                        message.resourceSpans = [];
                      message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              TracesData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              TracesData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                  if (!Array.isArray(message.resourceSpans))
                    return "resourceSpans: array expected";
                  for (var i = 0; i < message.resourceSpans.length; ++i) {
                    var error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                    if (error)
                      return "resourceSpans." + error;
                  }
                }
                return null;
              };
              TracesData.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.TracesData)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.TracesData();
                if (object.resourceSpans) {
                  if (!Array.isArray(object.resourceSpans))
                    throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                  message.resourceSpans = [];
                  for (var i = 0; i < object.resourceSpans.length; ++i) {
                    if (typeof object.resourceSpans[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected");
                    message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                  }
                }
                return message;
              };
              TracesData.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.resourceSpans = [];
                if (message.resourceSpans && message.resourceSpans.length) {
                  object.resourceSpans = [];
                  for (var j = 0; j < message.resourceSpans.length; ++j)
                    object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
                }
                return object;
              };
              TracesData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              TracesData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.TracesData";
              };
              return TracesData;
            })();
            v1.ResourceSpans = (function() {
              function ResourceSpans(properties) {
                this.scopeSpans = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ResourceSpans.prototype.resource = null;
              ResourceSpans.prototype.scopeSpans = $util.emptyArray;
              ResourceSpans.prototype.schemaUrl = null;
              ResourceSpans.create = function create(properties) {
                return new ResourceSpans(properties);
              };
              ResourceSpans.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                  $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).fork()).ldelim();
                if (message.scopeSpans != null && message.scopeSpans.length)
                  for (var i = 0; i < message.scopeSpans.length; ++i)
                    $root.opentelemetry.proto.trace.v1.ScopeSpans.encode(message.scopeSpans[i], writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork()).ldelim();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.schemaUrl);
                return writer;
              };
              ResourceSpans.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ResourceSpans.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ResourceSpans();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                      break;
                    }
                    case 2: {
                      if (!(message.scopeSpans && message.scopeSpans.length))
                        message.scopeSpans = [];
                      message.scopeSpans.push($root.opentelemetry.proto.trace.v1.ScopeSpans.decode(reader, reader.uint32()));
                      break;
                    }
                    case 3: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ResourceSpans.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ResourceSpans.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resource != null && message.hasOwnProperty("resource")) {
                  var error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                  if (error)
                    return "resource." + error;
                }
                if (message.scopeSpans != null && message.hasOwnProperty("scopeSpans")) {
                  if (!Array.isArray(message.scopeSpans))
                    return "scopeSpans: array expected";
                  for (var i = 0; i < message.scopeSpans.length; ++i) {
                    var error = $root.opentelemetry.proto.trace.v1.ScopeSpans.verify(message.scopeSpans[i]);
                    if (error)
                      return "scopeSpans." + error;
                  }
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                return null;
              };
              ResourceSpans.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.ResourceSpans)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.ResourceSpans();
                if (object.resource != null) {
                  if (typeof object.resource !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                  message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
                }
                if (object.scopeSpans) {
                  if (!Array.isArray(object.scopeSpans))
                    throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                  message.scopeSpans = [];
                  for (var i = 0; i < object.scopeSpans.length; ++i) {
                    if (typeof object.scopeSpans[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected");
                    message.scopeSpans[i] = $root.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(object.scopeSpans[i]);
                  }
                }
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                return message;
              };
              ResourceSpans.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.scopeSpans = [];
                if (options.defaults) {
                  object.resource = null;
                  object.schemaUrl = "";
                }
                if (message.resource != null && message.hasOwnProperty("resource"))
                  object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
                if (message.scopeSpans && message.scopeSpans.length) {
                  object.scopeSpans = [];
                  for (var j = 0; j < message.scopeSpans.length; ++j)
                    object.scopeSpans[j] = $root.opentelemetry.proto.trace.v1.ScopeSpans.toObject(message.scopeSpans[j], options);
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                return object;
              };
              ResourceSpans.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ResourceSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ResourceSpans";
              };
              return ResourceSpans;
            })();
            v1.ScopeSpans = (function() {
              function ScopeSpans(properties) {
                this.spans = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ScopeSpans.prototype.scope = null;
              ScopeSpans.prototype.spans = $util.emptyArray;
              ScopeSpans.prototype.schemaUrl = null;
              ScopeSpans.create = function create(properties) {
                return new ScopeSpans(properties);
              };
              ScopeSpans.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                  $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).fork()).ldelim();
                if (message.spans != null && message.spans.length)
                  for (var i = 0; i < message.spans.length; ++i)
                    $root.opentelemetry.proto.trace.v1.Span.encode(message.spans[i], writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork()).ldelim();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.schemaUrl);
                return writer;
              };
              ScopeSpans.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ScopeSpans.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.ScopeSpans();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                      break;
                    }
                    case 2: {
                      if (!(message.spans && message.spans.length))
                        message.spans = [];
                      message.spans.push($root.opentelemetry.proto.trace.v1.Span.decode(reader, reader.uint32()));
                      break;
                    }
                    case 3: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ScopeSpans.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ScopeSpans.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.scope != null && message.hasOwnProperty("scope")) {
                  var error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                  if (error)
                    return "scope." + error;
                }
                if (message.spans != null && message.hasOwnProperty("spans")) {
                  if (!Array.isArray(message.spans))
                    return "spans: array expected";
                  for (var i = 0; i < message.spans.length; ++i) {
                    var error = $root.opentelemetry.proto.trace.v1.Span.verify(message.spans[i]);
                    if (error)
                      return "spans." + error;
                  }
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                return null;
              };
              ScopeSpans.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.ScopeSpans)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.ScopeSpans();
                if (object.scope != null) {
                  if (typeof object.scope !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                  message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
                }
                if (object.spans) {
                  if (!Array.isArray(object.spans))
                    throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                  message.spans = [];
                  for (var i = 0; i < object.spans.length; ++i) {
                    if (typeof object.spans[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                    message.spans[i] = $root.opentelemetry.proto.trace.v1.Span.fromObject(object.spans[i]);
                  }
                }
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                return message;
              };
              ScopeSpans.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.spans = [];
                if (options.defaults) {
                  object.scope = null;
                  object.schemaUrl = "";
                }
                if (message.scope != null && message.hasOwnProperty("scope"))
                  object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
                if (message.spans && message.spans.length) {
                  object.spans = [];
                  for (var j = 0; j < message.spans.length; ++j)
                    object.spans[j] = $root.opentelemetry.proto.trace.v1.Span.toObject(message.spans[j], options);
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                return object;
              };
              ScopeSpans.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ScopeSpans.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.ScopeSpans";
              };
              return ScopeSpans;
            })();
            v1.Span = (function() {
              function Span(properties) {
                this.attributes = [];
                this.events = [];
                this.links = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Span.prototype.traceId = null;
              Span.prototype.spanId = null;
              Span.prototype.traceState = null;
              Span.prototype.parentSpanId = null;
              Span.prototype.flags = null;
              Span.prototype.name = null;
              Span.prototype.kind = null;
              Span.prototype.startTimeUnixNano = null;
              Span.prototype.endTimeUnixNano = null;
              Span.prototype.attributes = $util.emptyArray;
              Span.prototype.droppedAttributesCount = null;
              Span.prototype.events = $util.emptyArray;
              Span.prototype.droppedEventsCount = null;
              Span.prototype.links = $util.emptyArray;
              Span.prototype.droppedLinksCount = null;
              Span.prototype.status = null;
              Span.create = function create(properties) {
                return new Span(properties);
              };
              Span.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                  writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).bytes(message.traceId);
                if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                  writer.uint32(
                    /* id 2, wireType 2 =*/
                    18
                  ).bytes(message.spanId);
                if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.traceState);
                if (message.parentSpanId != null && Object.hasOwnProperty.call(message, "parentSpanId"))
                  writer.uint32(
                    /* id 4, wireType 2 =*/
                    34
                  ).bytes(message.parentSpanId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                  writer.uint32(
                    /* id 5, wireType 2 =*/
                    42
                  ).string(message.name);
                if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                  writer.uint32(
                    /* id 6, wireType 0 =*/
                    48
                  ).int32(message.kind);
                if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                  writer.uint32(
                    /* id 7, wireType 1 =*/
                    57
                  ).fixed64(message.startTimeUnixNano);
                if (message.endTimeUnixNano != null && Object.hasOwnProperty.call(message, "endTimeUnixNano"))
                  writer.uint32(
                    /* id 8, wireType 1 =*/
                    65
                  ).fixed64(message.endTimeUnixNano);
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 9, wireType 2 =*/
                      74
                    ).fork()).ldelim();
                if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                  writer.uint32(
                    /* id 10, wireType 0 =*/
                    80
                  ).uint32(message.droppedAttributesCount);
                if (message.events != null && message.events.length)
                  for (var i = 0; i < message.events.length; ++i)
                    $root.opentelemetry.proto.trace.v1.Span.Event.encode(message.events[i], writer.uint32(
                      /* id 11, wireType 2 =*/
                      90
                    ).fork()).ldelim();
                if (message.droppedEventsCount != null && Object.hasOwnProperty.call(message, "droppedEventsCount"))
                  writer.uint32(
                    /* id 12, wireType 0 =*/
                    96
                  ).uint32(message.droppedEventsCount);
                if (message.links != null && message.links.length)
                  for (var i = 0; i < message.links.length; ++i)
                    $root.opentelemetry.proto.trace.v1.Span.Link.encode(message.links[i], writer.uint32(
                      /* id 13, wireType 2 =*/
                      106
                    ).fork()).ldelim();
                if (message.droppedLinksCount != null && Object.hasOwnProperty.call(message, "droppedLinksCount"))
                  writer.uint32(
                    /* id 14, wireType 0 =*/
                    112
                  ).uint32(message.droppedLinksCount);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                  $root.opentelemetry.proto.trace.v1.Status.encode(message.status, writer.uint32(
                    /* id 15, wireType 2 =*/
                    122
                  ).fork()).ldelim();
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(
                    /* id 16, wireType 5 =*/
                    133
                  ).fixed32(message.flags);
                return writer;
              };
              Span.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Span.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.traceId = reader.bytes();
                      break;
                    }
                    case 2: {
                      message.spanId = reader.bytes();
                      break;
                    }
                    case 3: {
                      message.traceState = reader.string();
                      break;
                    }
                    case 4: {
                      message.parentSpanId = reader.bytes();
                      break;
                    }
                    case 16: {
                      message.flags = reader.fixed32();
                      break;
                    }
                    case 5: {
                      message.name = reader.string();
                      break;
                    }
                    case 6: {
                      message.kind = reader.int32();
                      break;
                    }
                    case 7: {
                      message.startTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 8: {
                      message.endTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 9: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 10: {
                      message.droppedAttributesCount = reader.uint32();
                      break;
                    }
                    case 11: {
                      if (!(message.events && message.events.length))
                        message.events = [];
                      message.events.push($root.opentelemetry.proto.trace.v1.Span.Event.decode(reader, reader.uint32()));
                      break;
                    }
                    case 12: {
                      message.droppedEventsCount = reader.uint32();
                      break;
                    }
                    case 13: {
                      if (!(message.links && message.links.length))
                        message.links = [];
                      message.links.push($root.opentelemetry.proto.trace.v1.Span.Link.decode(reader, reader.uint32()));
                      break;
                    }
                    case 14: {
                      message.droppedLinksCount = reader.uint32();
                      break;
                    }
                    case 15: {
                      message.status = $root.opentelemetry.proto.trace.v1.Status.decode(reader, reader.uint32());
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Span.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Span.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.traceId != null && message.hasOwnProperty("traceId")) {
                  if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                    return "traceId: buffer expected";
                }
                if (message.spanId != null && message.hasOwnProperty("spanId")) {
                  if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                    return "spanId: buffer expected";
                }
                if (message.traceState != null && message.hasOwnProperty("traceState")) {
                  if (!$util.isString(message.traceState))
                    return "traceState: string expected";
                }
                if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId")) {
                  if (!(message.parentSpanId && typeof message.parentSpanId.length === "number" || $util.isString(message.parentSpanId)))
                    return "parentSpanId: buffer expected";
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                if (message.name != null && message.hasOwnProperty("name")) {
                  if (!$util.isString(message.name))
                    return "name: string expected";
                }
                if (message.kind != null && message.hasOwnProperty("kind"))
                  switch (message.kind) {
                    default:
                      return "kind: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      break;
                  }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                  if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                    return "startTimeUnixNano: integer|Long expected";
                }
                if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano")) {
                  if (!$util.isInteger(message.endTimeUnixNano) && !(message.endTimeUnixNano && $util.isInteger(message.endTimeUnixNano.low) && $util.isInteger(message.endTimeUnixNano.high)))
                    return "endTimeUnixNano: integer|Long expected";
                }
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                  if (!$util.isInteger(message.droppedAttributesCount))
                    return "droppedAttributesCount: integer expected";
                }
                if (message.events != null && message.hasOwnProperty("events")) {
                  if (!Array.isArray(message.events))
                    return "events: array expected";
                  for (var i = 0; i < message.events.length; ++i) {
                    var error = $root.opentelemetry.proto.trace.v1.Span.Event.verify(message.events[i]);
                    if (error)
                      return "events." + error;
                  }
                }
                if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount")) {
                  if (!$util.isInteger(message.droppedEventsCount))
                    return "droppedEventsCount: integer expected";
                }
                if (message.links != null && message.hasOwnProperty("links")) {
                  if (!Array.isArray(message.links))
                    return "links: array expected";
                  for (var i = 0; i < message.links.length; ++i) {
                    var error = $root.opentelemetry.proto.trace.v1.Span.Link.verify(message.links[i]);
                    if (error)
                      return "links." + error;
                  }
                }
                if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount")) {
                  if (!$util.isInteger(message.droppedLinksCount))
                    return "droppedLinksCount: integer expected";
                }
                if (message.status != null && message.hasOwnProperty("status")) {
                  var error = $root.opentelemetry.proto.trace.v1.Status.verify(message.status);
                  if (error)
                    return "status." + error;
                }
                return null;
              };
              Span.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.Span)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.Span();
                if (object.traceId != null) {
                  if (typeof object.traceId === "string")
                    $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                  else if (object.traceId.length >= 0)
                    message.traceId = object.traceId;
                }
                if (object.spanId != null) {
                  if (typeof object.spanId === "string")
                    $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                  else if (object.spanId.length >= 0)
                    message.spanId = object.spanId;
                }
                if (object.traceState != null)
                  message.traceState = String(object.traceState);
                if (object.parentSpanId != null) {
                  if (typeof object.parentSpanId === "string")
                    $util.base64.decode(object.parentSpanId, message.parentSpanId = $util.newBuffer($util.base64.length(object.parentSpanId)), 0);
                  else if (object.parentSpanId.length >= 0)
                    message.parentSpanId = object.parentSpanId;
                }
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                if (object.name != null)
                  message.name = String(object.name);
                switch (object.kind) {
                  default:
                    if (typeof object.kind === "number") {
                      message.kind = object.kind;
                      break;
                    }
                    break;
                  case "SPAN_KIND_UNSPECIFIED":
                  case 0:
                    message.kind = 0;
                    break;
                  case "SPAN_KIND_INTERNAL":
                  case 1:
                    message.kind = 1;
                    break;
                  case "SPAN_KIND_SERVER":
                  case 2:
                    message.kind = 2;
                    break;
                  case "SPAN_KIND_CLIENT":
                  case 3:
                    message.kind = 3;
                    break;
                  case "SPAN_KIND_PRODUCER":
                  case 4:
                    message.kind = 4;
                    break;
                  case "SPAN_KIND_CONSUMER":
                  case 5:
                    message.kind = 5;
                    break;
                }
                if (object.startTimeUnixNano != null) {
                  if ($util.Long)
                    (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                  else if (typeof object.startTimeUnixNano === "string")
                    message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                  else if (typeof object.startTimeUnixNano === "number")
                    message.startTimeUnixNano = object.startTimeUnixNano;
                  else if (typeof object.startTimeUnixNano === "object")
                    message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                }
                if (object.endTimeUnixNano != null) {
                  if ($util.Long)
                    (message.endTimeUnixNano = $util.Long.fromValue(object.endTimeUnixNano)).unsigned = false;
                  else if (typeof object.endTimeUnixNano === "string")
                    message.endTimeUnixNano = parseInt(object.endTimeUnixNano, 10);
                  else if (typeof object.endTimeUnixNano === "number")
                    message.endTimeUnixNano = object.endTimeUnixNano;
                  else if (typeof object.endTimeUnixNano === "object")
                    message.endTimeUnixNano = new $util.LongBits(object.endTimeUnixNano.low >>> 0, object.endTimeUnixNano.high >>> 0).toNumber();
                }
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.droppedAttributesCount != null)
                  message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                if (object.events) {
                  if (!Array.isArray(object.events))
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                  message.events = [];
                  for (var i = 0; i < object.events.length; ++i) {
                    if (typeof object.events[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                    message.events[i] = $root.opentelemetry.proto.trace.v1.Span.Event.fromObject(object.events[i]);
                  }
                }
                if (object.droppedEventsCount != null)
                  message.droppedEventsCount = object.droppedEventsCount >>> 0;
                if (object.links) {
                  if (!Array.isArray(object.links))
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                  message.links = [];
                  for (var i = 0; i < object.links.length; ++i) {
                    if (typeof object.links[i] !== "object")
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                    message.links[i] = $root.opentelemetry.proto.trace.v1.Span.Link.fromObject(object.links[i]);
                  }
                }
                if (object.droppedLinksCount != null)
                  message.droppedLinksCount = object.droppedLinksCount >>> 0;
                if (object.status != null) {
                  if (typeof object.status !== "object")
                    throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                  message.status = $root.opentelemetry.proto.trace.v1.Status.fromObject(object.status);
                }
                return message;
              };
              Span.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.attributes = [];
                  object.events = [];
                  object.links = [];
                }
                if (options.defaults) {
                  if (options.bytes === String)
                    object.traceId = "";
                  else {
                    object.traceId = [];
                    if (options.bytes !== Array)
                      object.traceId = $util.newBuffer(object.traceId);
                  }
                  if (options.bytes === String)
                    object.spanId = "";
                  else {
                    object.spanId = [];
                    if (options.bytes !== Array)
                      object.spanId = $util.newBuffer(object.spanId);
                  }
                  object.traceState = "";
                  if (options.bytes === String)
                    object.parentSpanId = "";
                  else {
                    object.parentSpanId = [];
                    if (options.bytes !== Array)
                      object.parentSpanId = $util.newBuffer(object.parentSpanId);
                  }
                  object.name = "";
                  object.kind = options.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.startTimeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.endTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.endTimeUnixNano = options.longs === String ? "0" : 0;
                  object.droppedAttributesCount = 0;
                  object.droppedEventsCount = 0;
                  object.droppedLinksCount = 0;
                  object.status = null;
                  object.flags = 0;
                }
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                  object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                if (message.spanId != null && message.hasOwnProperty("spanId"))
                  object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                if (message.traceState != null && message.hasOwnProperty("traceState"))
                  object.traceState = message.traceState;
                if (message.parentSpanId != null && message.hasOwnProperty("parentSpanId"))
                  object.parentSpanId = options.bytes === String ? $util.base64.encode(message.parentSpanId, 0, message.parentSpanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.parentSpanId) : message.parentSpanId;
                if (message.name != null && message.hasOwnProperty("name"))
                  object.name = message.name;
                if (message.kind != null && message.hasOwnProperty("kind"))
                  object.kind = options.enums === String ? $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] === void 0 ? message.kind : $root.opentelemetry.proto.trace.v1.Span.SpanKind[message.kind] : message.kind;
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                  if (typeof message.startTimeUnixNano === "number")
                    object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                  else
                    object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                if (message.endTimeUnixNano != null && message.hasOwnProperty("endTimeUnixNano"))
                  if (typeof message.endTimeUnixNano === "number")
                    object.endTimeUnixNano = options.longs === String ? String(message.endTimeUnixNano) : message.endTimeUnixNano;
                  else
                    object.endTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.endTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.endTimeUnixNano.low >>> 0, message.endTimeUnixNano.high >>> 0).toNumber() : message.endTimeUnixNano;
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                  object.droppedAttributesCount = message.droppedAttributesCount;
                if (message.events && message.events.length) {
                  object.events = [];
                  for (var j = 0; j < message.events.length; ++j)
                    object.events[j] = $root.opentelemetry.proto.trace.v1.Span.Event.toObject(message.events[j], options);
                }
                if (message.droppedEventsCount != null && message.hasOwnProperty("droppedEventsCount"))
                  object.droppedEventsCount = message.droppedEventsCount;
                if (message.links && message.links.length) {
                  object.links = [];
                  for (var j = 0; j < message.links.length; ++j)
                    object.links[j] = $root.opentelemetry.proto.trace.v1.Span.Link.toObject(message.links[j], options);
                }
                if (message.droppedLinksCount != null && message.hasOwnProperty("droppedLinksCount"))
                  object.droppedLinksCount = message.droppedLinksCount;
                if (message.status != null && message.hasOwnProperty("status"))
                  object.status = $root.opentelemetry.proto.trace.v1.Status.toObject(message.status, options);
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                return object;
              };
              Span.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Span.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span";
              };
              Span.SpanKind = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SPAN_KIND_UNSPECIFIED"] = 0;
                values[valuesById[1] = "SPAN_KIND_INTERNAL"] = 1;
                values[valuesById[2] = "SPAN_KIND_SERVER"] = 2;
                values[valuesById[3] = "SPAN_KIND_CLIENT"] = 3;
                values[valuesById[4] = "SPAN_KIND_PRODUCER"] = 4;
                values[valuesById[5] = "SPAN_KIND_CONSUMER"] = 5;
                return values;
              })();
              Span.Event = (function() {
                function Event(properties) {
                  this.attributes = [];
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                Event.prototype.timeUnixNano = null;
                Event.prototype.name = null;
                Event.prototype.attributes = $util.emptyArray;
                Event.prototype.droppedAttributesCount = null;
                Event.create = function create(properties) {
                  return new Event(properties);
                };
                Event.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                    writer.uint32(
                      /* id 1, wireType 1 =*/
                      9
                    ).fixed64(message.timeUnixNano);
                  if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).string(message.name);
                  if (message.attributes != null && message.attributes.length)
                    for (var i = 0; i < message.attributes.length; ++i)
                      $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                        /* id 3, wireType 2 =*/
                        26
                      ).fork()).ldelim();
                  if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                    writer.uint32(
                      /* id 4, wireType 0 =*/
                      32
                    ).uint32(message.droppedAttributesCount);
                  return writer;
                };
                Event.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                Event.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Event();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.timeUnixNano = reader.fixed64();
                        break;
                      }
                      case 2: {
                        message.name = reader.string();
                        break;
                      }
                      case 3: {
                        if (!(message.attributes && message.attributes.length))
                          message.attributes = [];
                        message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                        break;
                      }
                      case 4: {
                        message.droppedAttributesCount = reader.uint32();
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                Event.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                Event.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                    if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                      return "timeUnixNano: integer|Long expected";
                  }
                  if (message.name != null && message.hasOwnProperty("name")) {
                    if (!$util.isString(message.name))
                      return "name: string expected";
                  }
                  if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                      return "attributes: array expected";
                    for (var i = 0; i < message.attributes.length; ++i) {
                      var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                      if (error)
                        return "attributes." + error;
                    }
                  }
                  if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                    if (!$util.isInteger(message.droppedAttributesCount))
                      return "droppedAttributesCount: integer expected";
                  }
                  return null;
                };
                Event.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Event)
                    return object;
                  var message = new $root.opentelemetry.proto.trace.v1.Span.Event();
                  if (object.timeUnixNano != null) {
                    if ($util.Long)
                      (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                    else if (typeof object.timeUnixNano === "string")
                      message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                    else if (typeof object.timeUnixNano === "number")
                      message.timeUnixNano = object.timeUnixNano;
                    else if (typeof object.timeUnixNano === "object")
                      message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                  }
                  if (object.name != null)
                    message.name = String(object.name);
                  if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                    message.attributes = [];
                    for (var i = 0; i < object.attributes.length; ++i) {
                      if (typeof object.attributes[i] !== "object")
                        throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected");
                      message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                    }
                  }
                  if (object.droppedAttributesCount != null)
                    message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                  return message;
                };
                Event.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.arrays || options.defaults)
                    object.attributes = [];
                  if (options.defaults) {
                    if ($util.Long) {
                      var long = new $util.Long(0, 0, false);
                      object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                      object.timeUnixNano = options.longs === String ? "0" : 0;
                    object.name = "";
                    object.droppedAttributesCount = 0;
                  }
                  if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                    if (typeof message.timeUnixNano === "number")
                      object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                    else
                      object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                  if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                  if (message.attributes && message.attributes.length) {
                    object.attributes = [];
                    for (var j = 0; j < message.attributes.length; ++j)
                      object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                  }
                  if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                    object.droppedAttributesCount = message.droppedAttributesCount;
                  return object;
                };
                Event.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Event";
                };
                return Event;
              })();
              Span.Link = (function() {
                function Link(properties) {
                  this.attributes = [];
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                Link.prototype.traceId = null;
                Link.prototype.spanId = null;
                Link.prototype.traceState = null;
                Link.prototype.attributes = $util.emptyArray;
                Link.prototype.droppedAttributesCount = null;
                Link.prototype.flags = null;
                Link.create = function create(properties) {
                  return new Link(properties);
                };
                Link.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                    writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).bytes(message.traceId);
                  if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                    writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).bytes(message.spanId);
                  if (message.traceState != null && Object.hasOwnProperty.call(message, "traceState"))
                    writer.uint32(
                      /* id 3, wireType 2 =*/
                      26
                    ).string(message.traceState);
                  if (message.attributes != null && message.attributes.length)
                    for (var i = 0; i < message.attributes.length; ++i)
                      $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                        /* id 4, wireType 2 =*/
                        34
                      ).fork()).ldelim();
                  if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                    writer.uint32(
                      /* id 5, wireType 0 =*/
                      40
                    ).uint32(message.droppedAttributesCount);
                  if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                    writer.uint32(
                      /* id 6, wireType 5 =*/
                      53
                    ).fixed32(message.flags);
                  return writer;
                };
                Link.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                Link.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Span.Link();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.traceId = reader.bytes();
                        break;
                      }
                      case 2: {
                        message.spanId = reader.bytes();
                        break;
                      }
                      case 3: {
                        message.traceState = reader.string();
                        break;
                      }
                      case 4: {
                        if (!(message.attributes && message.attributes.length))
                          message.attributes = [];
                        message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                        break;
                      }
                      case 5: {
                        message.droppedAttributesCount = reader.uint32();
                        break;
                      }
                      case 6: {
                        message.flags = reader.fixed32();
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                Link.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                Link.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.traceId != null && message.hasOwnProperty("traceId")) {
                    if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                      return "traceId: buffer expected";
                  }
                  if (message.spanId != null && message.hasOwnProperty("spanId")) {
                    if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                      return "spanId: buffer expected";
                  }
                  if (message.traceState != null && message.hasOwnProperty("traceState")) {
                    if (!$util.isString(message.traceState))
                      return "traceState: string expected";
                  }
                  if (message.attributes != null && message.hasOwnProperty("attributes")) {
                    if (!Array.isArray(message.attributes))
                      return "attributes: array expected";
                    for (var i = 0; i < message.attributes.length; ++i) {
                      var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                      if (error)
                        return "attributes." + error;
                    }
                  }
                  if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                    if (!$util.isInteger(message.droppedAttributesCount))
                      return "droppedAttributesCount: integer expected";
                  }
                  if (message.flags != null && message.hasOwnProperty("flags")) {
                    if (!$util.isInteger(message.flags))
                      return "flags: integer expected";
                  }
                  return null;
                };
                Link.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.trace.v1.Span.Link)
                    return object;
                  var message = new $root.opentelemetry.proto.trace.v1.Span.Link();
                  if (object.traceId != null) {
                    if (typeof object.traceId === "string")
                      $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                    else if (object.traceId.length >= 0)
                      message.traceId = object.traceId;
                  }
                  if (object.spanId != null) {
                    if (typeof object.spanId === "string")
                      $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                    else if (object.spanId.length >= 0)
                      message.spanId = object.spanId;
                  }
                  if (object.traceState != null)
                    message.traceState = String(object.traceState);
                  if (object.attributes) {
                    if (!Array.isArray(object.attributes))
                      throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                    message.attributes = [];
                    for (var i = 0; i < object.attributes.length; ++i) {
                      if (typeof object.attributes[i] !== "object")
                        throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected");
                      message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                    }
                  }
                  if (object.droppedAttributesCount != null)
                    message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                  if (object.flags != null)
                    message.flags = object.flags >>> 0;
                  return message;
                };
                Link.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.arrays || options.defaults)
                    object.attributes = [];
                  if (options.defaults) {
                    if (options.bytes === String)
                      object.traceId = "";
                    else {
                      object.traceId = [];
                      if (options.bytes !== Array)
                        object.traceId = $util.newBuffer(object.traceId);
                    }
                    if (options.bytes === String)
                      object.spanId = "";
                    else {
                      object.spanId = [];
                      if (options.bytes !== Array)
                        object.spanId = $util.newBuffer(object.spanId);
                    }
                    object.traceState = "";
                    object.droppedAttributesCount = 0;
                    object.flags = 0;
                  }
                  if (message.traceId != null && message.hasOwnProperty("traceId"))
                    object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                  if (message.spanId != null && message.hasOwnProperty("spanId"))
                    object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                  if (message.traceState != null && message.hasOwnProperty("traceState"))
                    object.traceState = message.traceState;
                  if (message.attributes && message.attributes.length) {
                    object.attributes = [];
                    for (var j = 0; j < message.attributes.length; ++j)
                      object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                  }
                  if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                    object.droppedAttributesCount = message.droppedAttributesCount;
                  if (message.flags != null && message.hasOwnProperty("flags"))
                    object.flags = message.flags;
                  return object;
                };
                Link.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Span.Link";
                };
                return Link;
              })();
              return Span;
            })();
            v1.Status = (function() {
              function Status(properties) {
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Status.prototype.message = null;
              Status.prototype.code = null;
              Status.create = function create(properties) {
                return new Status(properties);
              };
              Status.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                  writer.uint32(
                    /* id 2, wireType 2 =*/
                    18
                  ).string(message.message);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                  writer.uint32(
                    /* id 3, wireType 0 =*/
                    24
                  ).int32(message.code);
                return writer;
              };
              Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Status.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.trace.v1.Status();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 2: {
                      message.message = reader.string();
                      break;
                    }
                    case 3: {
                      message.code = reader.int32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.message != null && message.hasOwnProperty("message")) {
                  if (!$util.isString(message.message))
                    return "message: string expected";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                  switch (message.code) {
                    default:
                      return "code: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                      break;
                  }
                return null;
              };
              Status.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.trace.v1.Status)
                  return object;
                var message = new $root.opentelemetry.proto.trace.v1.Status();
                if (object.message != null)
                  message.message = String(object.message);
                switch (object.code) {
                  default:
                    if (typeof object.code === "number") {
                      message.code = object.code;
                      break;
                    }
                    break;
                  case "STATUS_CODE_UNSET":
                  case 0:
                    message.code = 0;
                    break;
                  case "STATUS_CODE_OK":
                  case 1:
                    message.code = 1;
                    break;
                  case "STATUS_CODE_ERROR":
                  case 2:
                    message.code = 2;
                    break;
                }
                return message;
              };
              Status.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.defaults) {
                  object.message = "";
                  object.code = options.enums === String ? "STATUS_CODE_UNSET" : 0;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                  object.message = message.message;
                if (message.code != null && message.hasOwnProperty("code"))
                  object.code = options.enums === String ? $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] === void 0 ? message.code : $root.opentelemetry.proto.trace.v1.Status.StatusCode[message.code] : message.code;
                return object;
              };
              Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.trace.v1.Status";
              };
              Status.StatusCode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STATUS_CODE_UNSET"] = 0;
                values[valuesById[1] = "STATUS_CODE_OK"] = 1;
                values[valuesById[2] = "STATUS_CODE_ERROR"] = 2;
                return values;
              })();
              return Status;
            })();
            v1.SpanFlags = (function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "SPAN_FLAGS_DO_NOT_USE"] = 0;
              values[valuesById[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK"] = 255;
              values[valuesById[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK"] = 256;
              values[valuesById[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK"] = 512;
              return values;
            })();
            return v1;
          })();
          return trace2;
        })();
        proto.collector = (function() {
          var collector = {};
          collector.trace = (function() {
            var trace2 = {};
            trace2.v1 = (function() {
              var v1 = {};
              v1.TraceService = (function() {
                function TraceService(rpcImpl, requestDelimited, responseDelimited) {
                  $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (TraceService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TraceService;
                TraceService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                  return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(TraceService.prototype["export"] = function export_(request, callback) {
                  return this.rpcCall(export_, $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest, $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse, request, callback);
                }, "name", { value: "Export" });
                return TraceService;
              })();
              v1.ExportTraceServiceRequest = (function() {
                function ExportTraceServiceRequest(properties) {
                  this.resourceSpans = [];
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportTraceServiceRequest.prototype.resourceSpans = $util.emptyArray;
                ExportTraceServiceRequest.create = function create(properties) {
                  return new ExportTraceServiceRequest(properties);
                };
                ExportTraceServiceRequest.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.resourceSpans != null && message.resourceSpans.length)
                    for (var i = 0; i < message.resourceSpans.length; ++i)
                      $root.opentelemetry.proto.trace.v1.ResourceSpans.encode(message.resourceSpans[i], writer.uint32(
                        /* id 1, wireType 2 =*/
                        10
                      ).fork()).ldelim();
                  return writer;
                };
                ExportTraceServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportTraceServiceRequest.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        if (!(message.resourceSpans && message.resourceSpans.length))
                          message.resourceSpans = [];
                        message.resourceSpans.push($root.opentelemetry.proto.trace.v1.ResourceSpans.decode(reader, reader.uint32()));
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportTraceServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportTraceServiceRequest.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.resourceSpans != null && message.hasOwnProperty("resourceSpans")) {
                    if (!Array.isArray(message.resourceSpans))
                      return "resourceSpans: array expected";
                    for (var i = 0; i < message.resourceSpans.length; ++i) {
                      var error = $root.opentelemetry.proto.trace.v1.ResourceSpans.verify(message.resourceSpans[i]);
                      if (error)
                        return "resourceSpans." + error;
                    }
                  }
                  return null;
                };
                ExportTraceServiceRequest.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                  if (object.resourceSpans) {
                    if (!Array.isArray(object.resourceSpans))
                      throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected");
                    message.resourceSpans = [];
                    for (var i = 0; i < object.resourceSpans.length; ++i) {
                      if (typeof object.resourceSpans[i] !== "object")
                        throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected");
                      message.resourceSpans[i] = $root.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(object.resourceSpans[i]);
                    }
                  }
                  return message;
                };
                ExportTraceServiceRequest.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.arrays || options.defaults)
                    object.resourceSpans = [];
                  if (message.resourceSpans && message.resourceSpans.length) {
                    object.resourceSpans = [];
                    for (var j = 0; j < message.resourceSpans.length; ++j)
                      object.resourceSpans[j] = $root.opentelemetry.proto.trace.v1.ResourceSpans.toObject(message.resourceSpans[j], options);
                  }
                  return object;
                };
                ExportTraceServiceRequest.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportTraceServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest";
                };
                return ExportTraceServiceRequest;
              })();
              v1.ExportTraceServiceResponse = (function() {
                function ExportTraceServiceResponse(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportTraceServiceResponse.prototype.partialSuccess = null;
                ExportTraceServiceResponse.create = function create(properties) {
                  return new ExportTraceServiceResponse(properties);
                };
                ExportTraceServiceResponse.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.partialSuccess != null && Object.hasOwnProperty.call(message, "partialSuccess"))
                    $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(message.partialSuccess, writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                  return writer;
                };
                ExportTraceServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportTraceServiceResponse.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.partialSuccess = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(reader, reader.uint32());
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportTraceServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportTraceServiceResponse.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess")) {
                    var error = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(message.partialSuccess);
                    if (error)
                      return "partialSuccess." + error;
                  }
                  return null;
                };
                ExportTraceServiceResponse.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                  if (object.partialSuccess != null) {
                    if (typeof object.partialSuccess !== "object")
                      throw TypeError(".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected");
                    message.partialSuccess = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(object.partialSuccess);
                  }
                  return message;
                };
                ExportTraceServiceResponse.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults)
                    object.partialSuccess = null;
                  if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess"))
                    object.partialSuccess = $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(message.partialSuccess, options);
                  return object;
                };
                ExportTraceServiceResponse.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportTraceServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse";
                };
                return ExportTraceServiceResponse;
              })();
              v1.ExportTracePartialSuccess = (function() {
                function ExportTracePartialSuccess(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportTracePartialSuccess.prototype.rejectedSpans = null;
                ExportTracePartialSuccess.prototype.errorMessage = null;
                ExportTracePartialSuccess.create = function create(properties) {
                  return new ExportTracePartialSuccess(properties);
                };
                ExportTracePartialSuccess.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.rejectedSpans != null && Object.hasOwnProperty.call(message, "rejectedSpans"))
                    writer.uint32(
                      /* id 1, wireType 0 =*/
                      8
                    ).int64(message.rejectedSpans);
                  if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                    writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).string(message.errorMessage);
                  return writer;
                };
                ExportTracePartialSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportTracePartialSuccess.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.rejectedSpans = reader.int64();
                        break;
                      }
                      case 2: {
                        message.errorMessage = reader.string();
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportTracePartialSuccess.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportTracePartialSuccess.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.rejectedSpans != null && message.hasOwnProperty("rejectedSpans")) {
                    if (!$util.isInteger(message.rejectedSpans) && !(message.rejectedSpans && $util.isInteger(message.rejectedSpans.low) && $util.isInteger(message.rejectedSpans.high)))
                      return "rejectedSpans: integer|Long expected";
                  }
                  if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
                    if (!$util.isString(message.errorMessage))
                      return "errorMessage: string expected";
                  }
                  return null;
                };
                ExportTracePartialSuccess.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                  if (object.rejectedSpans != null) {
                    if ($util.Long)
                      (message.rejectedSpans = $util.Long.fromValue(object.rejectedSpans)).unsigned = false;
                    else if (typeof object.rejectedSpans === "string")
                      message.rejectedSpans = parseInt(object.rejectedSpans, 10);
                    else if (typeof object.rejectedSpans === "number")
                      message.rejectedSpans = object.rejectedSpans;
                    else if (typeof object.rejectedSpans === "object")
                      message.rejectedSpans = new $util.LongBits(object.rejectedSpans.low >>> 0, object.rejectedSpans.high >>> 0).toNumber();
                  }
                  if (object.errorMessage != null)
                    message.errorMessage = String(object.errorMessage);
                  return message;
                };
                ExportTracePartialSuccess.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults) {
                    if ($util.Long) {
                      var long = new $util.Long(0, 0, false);
                      object.rejectedSpans = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                      object.rejectedSpans = options.longs === String ? "0" : 0;
                    object.errorMessage = "";
                  }
                  if (message.rejectedSpans != null && message.hasOwnProperty("rejectedSpans"))
                    if (typeof message.rejectedSpans === "number")
                      object.rejectedSpans = options.longs === String ? String(message.rejectedSpans) : message.rejectedSpans;
                    else
                      object.rejectedSpans = options.longs === String ? $util.Long.prototype.toString.call(message.rejectedSpans) : options.longs === Number ? new $util.LongBits(message.rejectedSpans.low >>> 0, message.rejectedSpans.high >>> 0).toNumber() : message.rejectedSpans;
                  if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                    object.errorMessage = message.errorMessage;
                  return object;
                };
                ExportTracePartialSuccess.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportTracePartialSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess";
                };
                return ExportTracePartialSuccess;
              })();
              return v1;
            })();
            return trace2;
          })();
          collector.metrics = (function() {
            var metrics = {};
            metrics.v1 = (function() {
              var v1 = {};
              v1.MetricsService = (function() {
                function MetricsService(rpcImpl, requestDelimited, responseDelimited) {
                  $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (MetricsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MetricsService;
                MetricsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                  return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(MetricsService.prototype["export"] = function export_(request, callback) {
                  return this.rpcCall(export_, $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest, $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse, request, callback);
                }, "name", { value: "Export" });
                return MetricsService;
              })();
              v1.ExportMetricsServiceRequest = (function() {
                function ExportMetricsServiceRequest(properties) {
                  this.resourceMetrics = [];
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportMetricsServiceRequest.prototype.resourceMetrics = $util.emptyArray;
                ExportMetricsServiceRequest.create = function create(properties) {
                  return new ExportMetricsServiceRequest(properties);
                };
                ExportMetricsServiceRequest.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.resourceMetrics != null && message.resourceMetrics.length)
                    for (var i = 0; i < message.resourceMetrics.length; ++i)
                      $root.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(message.resourceMetrics[i], writer.uint32(
                        /* id 1, wireType 2 =*/
                        10
                      ).fork()).ldelim();
                  return writer;
                };
                ExportMetricsServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportMetricsServiceRequest.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        if (!(message.resourceMetrics && message.resourceMetrics.length))
                          message.resourceMetrics = [];
                        message.resourceMetrics.push($root.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(reader, reader.uint32()));
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportMetricsServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportMetricsServiceRequest.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.resourceMetrics != null && message.hasOwnProperty("resourceMetrics")) {
                    if (!Array.isArray(message.resourceMetrics))
                      return "resourceMetrics: array expected";
                    for (var i = 0; i < message.resourceMetrics.length; ++i) {
                      var error = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(message.resourceMetrics[i]);
                      if (error)
                        return "resourceMetrics." + error;
                    }
                  }
                  return null;
                };
                ExportMetricsServiceRequest.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                  if (object.resourceMetrics) {
                    if (!Array.isArray(object.resourceMetrics))
                      throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected");
                    message.resourceMetrics = [];
                    for (var i = 0; i < object.resourceMetrics.length; ++i) {
                      if (typeof object.resourceMetrics[i] !== "object")
                        throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected");
                      message.resourceMetrics[i] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(object.resourceMetrics[i]);
                    }
                  }
                  return message;
                };
                ExportMetricsServiceRequest.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.arrays || options.defaults)
                    object.resourceMetrics = [];
                  if (message.resourceMetrics && message.resourceMetrics.length) {
                    object.resourceMetrics = [];
                    for (var j = 0; j < message.resourceMetrics.length; ++j)
                      object.resourceMetrics[j] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(message.resourceMetrics[j], options);
                  }
                  return object;
                };
                ExportMetricsServiceRequest.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportMetricsServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest";
                };
                return ExportMetricsServiceRequest;
              })();
              v1.ExportMetricsServiceResponse = (function() {
                function ExportMetricsServiceResponse(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportMetricsServiceResponse.prototype.partialSuccess = null;
                ExportMetricsServiceResponse.create = function create(properties) {
                  return new ExportMetricsServiceResponse(properties);
                };
                ExportMetricsServiceResponse.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.partialSuccess != null && Object.hasOwnProperty.call(message, "partialSuccess"))
                    $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(message.partialSuccess, writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                  return writer;
                };
                ExportMetricsServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportMetricsServiceResponse.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.partialSuccess = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(reader, reader.uint32());
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportMetricsServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportMetricsServiceResponse.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess")) {
                    var error = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(message.partialSuccess);
                    if (error)
                      return "partialSuccess." + error;
                  }
                  return null;
                };
                ExportMetricsServiceResponse.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                  if (object.partialSuccess != null) {
                    if (typeof object.partialSuccess !== "object")
                      throw TypeError(".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected");
                    message.partialSuccess = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(object.partialSuccess);
                  }
                  return message;
                };
                ExportMetricsServiceResponse.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults)
                    object.partialSuccess = null;
                  if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess"))
                    object.partialSuccess = $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(message.partialSuccess, options);
                  return object;
                };
                ExportMetricsServiceResponse.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportMetricsServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse";
                };
                return ExportMetricsServiceResponse;
              })();
              v1.ExportMetricsPartialSuccess = (function() {
                function ExportMetricsPartialSuccess(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportMetricsPartialSuccess.prototype.rejectedDataPoints = null;
                ExportMetricsPartialSuccess.prototype.errorMessage = null;
                ExportMetricsPartialSuccess.create = function create(properties) {
                  return new ExportMetricsPartialSuccess(properties);
                };
                ExportMetricsPartialSuccess.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.rejectedDataPoints != null && Object.hasOwnProperty.call(message, "rejectedDataPoints"))
                    writer.uint32(
                      /* id 1, wireType 0 =*/
                      8
                    ).int64(message.rejectedDataPoints);
                  if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                    writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).string(message.errorMessage);
                  return writer;
                };
                ExportMetricsPartialSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportMetricsPartialSuccess.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.rejectedDataPoints = reader.int64();
                        break;
                      }
                      case 2: {
                        message.errorMessage = reader.string();
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportMetricsPartialSuccess.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportMetricsPartialSuccess.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.rejectedDataPoints != null && message.hasOwnProperty("rejectedDataPoints")) {
                    if (!$util.isInteger(message.rejectedDataPoints) && !(message.rejectedDataPoints && $util.isInteger(message.rejectedDataPoints.low) && $util.isInteger(message.rejectedDataPoints.high)))
                      return "rejectedDataPoints: integer|Long expected";
                  }
                  if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
                    if (!$util.isString(message.errorMessage))
                      return "errorMessage: string expected";
                  }
                  return null;
                };
                ExportMetricsPartialSuccess.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                  if (object.rejectedDataPoints != null) {
                    if ($util.Long)
                      (message.rejectedDataPoints = $util.Long.fromValue(object.rejectedDataPoints)).unsigned = false;
                    else if (typeof object.rejectedDataPoints === "string")
                      message.rejectedDataPoints = parseInt(object.rejectedDataPoints, 10);
                    else if (typeof object.rejectedDataPoints === "number")
                      message.rejectedDataPoints = object.rejectedDataPoints;
                    else if (typeof object.rejectedDataPoints === "object")
                      message.rejectedDataPoints = new $util.LongBits(object.rejectedDataPoints.low >>> 0, object.rejectedDataPoints.high >>> 0).toNumber();
                  }
                  if (object.errorMessage != null)
                    message.errorMessage = String(object.errorMessage);
                  return message;
                };
                ExportMetricsPartialSuccess.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults) {
                    if ($util.Long) {
                      var long = new $util.Long(0, 0, false);
                      object.rejectedDataPoints = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                      object.rejectedDataPoints = options.longs === String ? "0" : 0;
                    object.errorMessage = "";
                  }
                  if (message.rejectedDataPoints != null && message.hasOwnProperty("rejectedDataPoints"))
                    if (typeof message.rejectedDataPoints === "number")
                      object.rejectedDataPoints = options.longs === String ? String(message.rejectedDataPoints) : message.rejectedDataPoints;
                    else
                      object.rejectedDataPoints = options.longs === String ? $util.Long.prototype.toString.call(message.rejectedDataPoints) : options.longs === Number ? new $util.LongBits(message.rejectedDataPoints.low >>> 0, message.rejectedDataPoints.high >>> 0).toNumber() : message.rejectedDataPoints;
                  if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                    object.errorMessage = message.errorMessage;
                  return object;
                };
                ExportMetricsPartialSuccess.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportMetricsPartialSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess";
                };
                return ExportMetricsPartialSuccess;
              })();
              return v1;
            })();
            return metrics;
          })();
          collector.logs = (function() {
            var logs = {};
            logs.v1 = (function() {
              var v1 = {};
              v1.LogsService = (function() {
                function LogsService(rpcImpl, requestDelimited, responseDelimited) {
                  $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
                (LogsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LogsService;
                LogsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                  return new this(rpcImpl, requestDelimited, responseDelimited);
                };
                Object.defineProperty(LogsService.prototype["export"] = function export_(request, callback) {
                  return this.rpcCall(export_, $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest, $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse, request, callback);
                }, "name", { value: "Export" });
                return LogsService;
              })();
              v1.ExportLogsServiceRequest = (function() {
                function ExportLogsServiceRequest(properties) {
                  this.resourceLogs = [];
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportLogsServiceRequest.prototype.resourceLogs = $util.emptyArray;
                ExportLogsServiceRequest.create = function create(properties) {
                  return new ExportLogsServiceRequest(properties);
                };
                ExportLogsServiceRequest.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.resourceLogs != null && message.resourceLogs.length)
                    for (var i = 0; i < message.resourceLogs.length; ++i)
                      $root.opentelemetry.proto.logs.v1.ResourceLogs.encode(message.resourceLogs[i], writer.uint32(
                        /* id 1, wireType 2 =*/
                        10
                      ).fork()).ldelim();
                  return writer;
                };
                ExportLogsServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportLogsServiceRequest.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        if (!(message.resourceLogs && message.resourceLogs.length))
                          message.resourceLogs = [];
                        message.resourceLogs.push($root.opentelemetry.proto.logs.v1.ResourceLogs.decode(reader, reader.uint32()));
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportLogsServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportLogsServiceRequest.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.resourceLogs != null && message.hasOwnProperty("resourceLogs")) {
                    if (!Array.isArray(message.resourceLogs))
                      return "resourceLogs: array expected";
                    for (var i = 0; i < message.resourceLogs.length; ++i) {
                      var error = $root.opentelemetry.proto.logs.v1.ResourceLogs.verify(message.resourceLogs[i]);
                      if (error)
                        return "resourceLogs." + error;
                    }
                  }
                  return null;
                };
                ExportLogsServiceRequest.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                  if (object.resourceLogs) {
                    if (!Array.isArray(object.resourceLogs))
                      throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected");
                    message.resourceLogs = [];
                    for (var i = 0; i < object.resourceLogs.length; ++i) {
                      if (typeof object.resourceLogs[i] !== "object")
                        throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected");
                      message.resourceLogs[i] = $root.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(object.resourceLogs[i]);
                    }
                  }
                  return message;
                };
                ExportLogsServiceRequest.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.arrays || options.defaults)
                    object.resourceLogs = [];
                  if (message.resourceLogs && message.resourceLogs.length) {
                    object.resourceLogs = [];
                    for (var j = 0; j < message.resourceLogs.length; ++j)
                      object.resourceLogs[j] = $root.opentelemetry.proto.logs.v1.ResourceLogs.toObject(message.resourceLogs[j], options);
                  }
                  return object;
                };
                ExportLogsServiceRequest.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportLogsServiceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest";
                };
                return ExportLogsServiceRequest;
              })();
              v1.ExportLogsServiceResponse = (function() {
                function ExportLogsServiceResponse(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportLogsServiceResponse.prototype.partialSuccess = null;
                ExportLogsServiceResponse.create = function create(properties) {
                  return new ExportLogsServiceResponse(properties);
                };
                ExportLogsServiceResponse.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.partialSuccess != null && Object.hasOwnProperty.call(message, "partialSuccess"))
                    $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(message.partialSuccess, writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                  return writer;
                };
                ExportLogsServiceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportLogsServiceResponse.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.partialSuccess = $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(reader, reader.uint32());
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportLogsServiceResponse.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportLogsServiceResponse.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess")) {
                    var error = $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(message.partialSuccess);
                    if (error)
                      return "partialSuccess." + error;
                  }
                  return null;
                };
                ExportLogsServiceResponse.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                  if (object.partialSuccess != null) {
                    if (typeof object.partialSuccess !== "object")
                      throw TypeError(".opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected");
                    message.partialSuccess = $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(object.partialSuccess);
                  }
                  return message;
                };
                ExportLogsServiceResponse.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults)
                    object.partialSuccess = null;
                  if (message.partialSuccess != null && message.hasOwnProperty("partialSuccess"))
                    object.partialSuccess = $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(message.partialSuccess, options);
                  return object;
                };
                ExportLogsServiceResponse.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportLogsServiceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse";
                };
                return ExportLogsServiceResponse;
              })();
              v1.ExportLogsPartialSuccess = (function() {
                function ExportLogsPartialSuccess(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ExportLogsPartialSuccess.prototype.rejectedLogRecords = null;
                ExportLogsPartialSuccess.prototype.errorMessage = null;
                ExportLogsPartialSuccess.create = function create(properties) {
                  return new ExportLogsPartialSuccess(properties);
                };
                ExportLogsPartialSuccess.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.rejectedLogRecords != null && Object.hasOwnProperty.call(message, "rejectedLogRecords"))
                    writer.uint32(
                      /* id 1, wireType 0 =*/
                      8
                    ).int64(message.rejectedLogRecords);
                  if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                    writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).string(message.errorMessage);
                  return writer;
                };
                ExportLogsPartialSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ExportLogsPartialSuccess.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.rejectedLogRecords = reader.int64();
                        break;
                      }
                      case 2: {
                        message.errorMessage = reader.string();
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ExportLogsPartialSuccess.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ExportLogsPartialSuccess.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.rejectedLogRecords != null && message.hasOwnProperty("rejectedLogRecords")) {
                    if (!$util.isInteger(message.rejectedLogRecords) && !(message.rejectedLogRecords && $util.isInteger(message.rejectedLogRecords.low) && $util.isInteger(message.rejectedLogRecords.high)))
                      return "rejectedLogRecords: integer|Long expected";
                  }
                  if (message.errorMessage != null && message.hasOwnProperty("errorMessage")) {
                    if (!$util.isString(message.errorMessage))
                      return "errorMessage: string expected";
                  }
                  return null;
                };
                ExportLogsPartialSuccess.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess)
                    return object;
                  var message = new $root.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                  if (object.rejectedLogRecords != null) {
                    if ($util.Long)
                      (message.rejectedLogRecords = $util.Long.fromValue(object.rejectedLogRecords)).unsigned = false;
                    else if (typeof object.rejectedLogRecords === "string")
                      message.rejectedLogRecords = parseInt(object.rejectedLogRecords, 10);
                    else if (typeof object.rejectedLogRecords === "number")
                      message.rejectedLogRecords = object.rejectedLogRecords;
                    else if (typeof object.rejectedLogRecords === "object")
                      message.rejectedLogRecords = new $util.LongBits(object.rejectedLogRecords.low >>> 0, object.rejectedLogRecords.high >>> 0).toNumber();
                  }
                  if (object.errorMessage != null)
                    message.errorMessage = String(object.errorMessage);
                  return message;
                };
                ExportLogsPartialSuccess.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults) {
                    if ($util.Long) {
                      var long = new $util.Long(0, 0, false);
                      object.rejectedLogRecords = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                      object.rejectedLogRecords = options.longs === String ? "0" : 0;
                    object.errorMessage = "";
                  }
                  if (message.rejectedLogRecords != null && message.hasOwnProperty("rejectedLogRecords"))
                    if (typeof message.rejectedLogRecords === "number")
                      object.rejectedLogRecords = options.longs === String ? String(message.rejectedLogRecords) : message.rejectedLogRecords;
                    else
                      object.rejectedLogRecords = options.longs === String ? $util.Long.prototype.toString.call(message.rejectedLogRecords) : options.longs === Number ? new $util.LongBits(message.rejectedLogRecords.low >>> 0, message.rejectedLogRecords.high >>> 0).toNumber() : message.rejectedLogRecords;
                  if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                    object.errorMessage = message.errorMessage;
                  return object;
                };
                ExportLogsPartialSuccess.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ExportLogsPartialSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess";
                };
                return ExportLogsPartialSuccess;
              })();
              return v1;
            })();
            return logs;
          })();
          return collector;
        })();
        proto.metrics = (function() {
          var metrics = {};
          metrics.v1 = (function() {
            var v1 = {};
            v1.MetricsData = (function() {
              function MetricsData(properties) {
                this.resourceMetrics = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              MetricsData.prototype.resourceMetrics = $util.emptyArray;
              MetricsData.create = function create(properties) {
                return new MetricsData(properties);
              };
              MetricsData.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resourceMetrics != null && message.resourceMetrics.length)
                  for (var i = 0; i < message.resourceMetrics.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(message.resourceMetrics[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              MetricsData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              MetricsData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.MetricsData();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.resourceMetrics && message.resourceMetrics.length))
                        message.resourceMetrics = [];
                      message.resourceMetrics.push($root.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              MetricsData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              MetricsData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resourceMetrics != null && message.hasOwnProperty("resourceMetrics")) {
                  if (!Array.isArray(message.resourceMetrics))
                    return "resourceMetrics: array expected";
                  for (var i = 0; i < message.resourceMetrics.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(message.resourceMetrics[i]);
                    if (error)
                      return "resourceMetrics." + error;
                  }
                }
                return null;
              };
              MetricsData.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.MetricsData)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.MetricsData();
                if (object.resourceMetrics) {
                  if (!Array.isArray(object.resourceMetrics))
                    throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected");
                  message.resourceMetrics = [];
                  for (var i = 0; i < object.resourceMetrics.length; ++i) {
                    if (typeof object.resourceMetrics[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected");
                    message.resourceMetrics[i] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(object.resourceMetrics[i]);
                  }
                }
                return message;
              };
              MetricsData.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.resourceMetrics = [];
                if (message.resourceMetrics && message.resourceMetrics.length) {
                  object.resourceMetrics = [];
                  for (var j = 0; j < message.resourceMetrics.length; ++j)
                    object.resourceMetrics[j] = $root.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(message.resourceMetrics[j], options);
                }
                return object;
              };
              MetricsData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              MetricsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.MetricsData";
              };
              return MetricsData;
            })();
            v1.ResourceMetrics = (function() {
              function ResourceMetrics(properties) {
                this.scopeMetrics = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ResourceMetrics.prototype.resource = null;
              ResourceMetrics.prototype.scopeMetrics = $util.emptyArray;
              ResourceMetrics.prototype.schemaUrl = null;
              ResourceMetrics.create = function create(properties) {
                return new ResourceMetrics(properties);
              };
              ResourceMetrics.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                  $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).fork()).ldelim();
                if (message.scopeMetrics != null && message.scopeMetrics.length)
                  for (var i = 0; i < message.scopeMetrics.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(message.scopeMetrics[i], writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork()).ldelim();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.schemaUrl);
                return writer;
              };
              ResourceMetrics.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ResourceMetrics.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ResourceMetrics();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                      break;
                    }
                    case 2: {
                      if (!(message.scopeMetrics && message.scopeMetrics.length))
                        message.scopeMetrics = [];
                      message.scopeMetrics.push($root.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(reader, reader.uint32()));
                      break;
                    }
                    case 3: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ResourceMetrics.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ResourceMetrics.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resource != null && message.hasOwnProperty("resource")) {
                  var error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                  if (error)
                    return "resource." + error;
                }
                if (message.scopeMetrics != null && message.hasOwnProperty("scopeMetrics")) {
                  if (!Array.isArray(message.scopeMetrics))
                    return "scopeMetrics: array expected";
                  for (var i = 0; i < message.scopeMetrics.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(message.scopeMetrics[i]);
                    if (error)
                      return "scopeMetrics." + error;
                  }
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                return null;
              };
              ResourceMetrics.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.ResourceMetrics)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.ResourceMetrics();
                if (object.resource != null) {
                  if (typeof object.resource !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected");
                  message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
                }
                if (object.scopeMetrics) {
                  if (!Array.isArray(object.scopeMetrics))
                    throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected");
                  message.scopeMetrics = [];
                  for (var i = 0; i < object.scopeMetrics.length; ++i) {
                    if (typeof object.scopeMetrics[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected");
                    message.scopeMetrics[i] = $root.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(object.scopeMetrics[i]);
                  }
                }
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                return message;
              };
              ResourceMetrics.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.scopeMetrics = [];
                if (options.defaults) {
                  object.resource = null;
                  object.schemaUrl = "";
                }
                if (message.resource != null && message.hasOwnProperty("resource"))
                  object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
                if (message.scopeMetrics && message.scopeMetrics.length) {
                  object.scopeMetrics = [];
                  for (var j = 0; j < message.scopeMetrics.length; ++j)
                    object.scopeMetrics[j] = $root.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(message.scopeMetrics[j], options);
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                return object;
              };
              ResourceMetrics.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ResourceMetrics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ResourceMetrics";
              };
              return ResourceMetrics;
            })();
            v1.ScopeMetrics = (function() {
              function ScopeMetrics(properties) {
                this.metrics = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ScopeMetrics.prototype.scope = null;
              ScopeMetrics.prototype.metrics = $util.emptyArray;
              ScopeMetrics.prototype.schemaUrl = null;
              ScopeMetrics.create = function create(properties) {
                return new ScopeMetrics(properties);
              };
              ScopeMetrics.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                  $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).fork()).ldelim();
                if (message.metrics != null && message.metrics.length)
                  for (var i = 0; i < message.metrics.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.Metric.encode(message.metrics[i], writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork()).ldelim();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.schemaUrl);
                return writer;
              };
              ScopeMetrics.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ScopeMetrics.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ScopeMetrics();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                      break;
                    }
                    case 2: {
                      if (!(message.metrics && message.metrics.length))
                        message.metrics = [];
                      message.metrics.push($root.opentelemetry.proto.metrics.v1.Metric.decode(reader, reader.uint32()));
                      break;
                    }
                    case 3: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ScopeMetrics.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ScopeMetrics.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.scope != null && message.hasOwnProperty("scope")) {
                  var error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                  if (error)
                    return "scope." + error;
                }
                if (message.metrics != null && message.hasOwnProperty("metrics")) {
                  if (!Array.isArray(message.metrics))
                    return "metrics: array expected";
                  for (var i = 0; i < message.metrics.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.Metric.verify(message.metrics[i]);
                    if (error)
                      return "metrics." + error;
                  }
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                return null;
              };
              ScopeMetrics.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.ScopeMetrics)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.ScopeMetrics();
                if (object.scope != null) {
                  if (typeof object.scope !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                  message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
                }
                if (object.metrics) {
                  if (!Array.isArray(object.metrics))
                    throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                  message.metrics = [];
                  for (var i = 0; i < object.metrics.length; ++i) {
                    if (typeof object.metrics[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                    message.metrics[i] = $root.opentelemetry.proto.metrics.v1.Metric.fromObject(object.metrics[i]);
                  }
                }
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                return message;
              };
              ScopeMetrics.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.metrics = [];
                if (options.defaults) {
                  object.scope = null;
                  object.schemaUrl = "";
                }
                if (message.scope != null && message.hasOwnProperty("scope"))
                  object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
                if (message.metrics && message.metrics.length) {
                  object.metrics = [];
                  for (var j = 0; j < message.metrics.length; ++j)
                    object.metrics[j] = $root.opentelemetry.proto.metrics.v1.Metric.toObject(message.metrics[j], options);
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                return object;
              };
              ScopeMetrics.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ScopeMetrics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ScopeMetrics";
              };
              return ScopeMetrics;
            })();
            v1.Metric = (function() {
              function Metric(properties) {
                this.metadata = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Metric.prototype.name = null;
              Metric.prototype.description = null;
              Metric.prototype.unit = null;
              Metric.prototype.gauge = null;
              Metric.prototype.sum = null;
              Metric.prototype.histogram = null;
              Metric.prototype.exponentialHistogram = null;
              Metric.prototype.summary = null;
              Metric.prototype.metadata = $util.emptyArray;
              var $oneOfFields;
              Object.defineProperty(Metric.prototype, "data", {
                get: $util.oneOfGetter($oneOfFields = ["gauge", "sum", "histogram", "exponentialHistogram", "summary"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              Metric.create = function create(properties) {
                return new Metric(properties);
              };
              Metric.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                  writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).string(message.name);
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                  writer.uint32(
                    /* id 2, wireType 2 =*/
                    18
                  ).string(message.description);
                if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.unit);
                if (message.gauge != null && Object.hasOwnProperty.call(message, "gauge"))
                  $root.opentelemetry.proto.metrics.v1.Gauge.encode(message.gauge, writer.uint32(
                    /* id 5, wireType 2 =*/
                    42
                  ).fork()).ldelim();
                if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                  $root.opentelemetry.proto.metrics.v1.Sum.encode(message.sum, writer.uint32(
                    /* id 7, wireType 2 =*/
                    58
                  ).fork()).ldelim();
                if (message.histogram != null && Object.hasOwnProperty.call(message, "histogram"))
                  $root.opentelemetry.proto.metrics.v1.Histogram.encode(message.histogram, writer.uint32(
                    /* id 9, wireType 2 =*/
                    74
                  ).fork()).ldelim();
                if (message.exponentialHistogram != null && Object.hasOwnProperty.call(message, "exponentialHistogram"))
                  $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(message.exponentialHistogram, writer.uint32(
                    /* id 10, wireType 2 =*/
                    82
                  ).fork()).ldelim();
                if (message.summary != null && Object.hasOwnProperty.call(message, "summary"))
                  $root.opentelemetry.proto.metrics.v1.Summary.encode(message.summary, writer.uint32(
                    /* id 11, wireType 2 =*/
                    90
                  ).fork()).ldelim();
                if (message.metadata != null && message.metadata.length)
                  for (var i = 0; i < message.metadata.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.metadata[i], writer.uint32(
                      /* id 12, wireType 2 =*/
                      98
                    ).fork()).ldelim();
                return writer;
              };
              Metric.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Metric.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Metric();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.name = reader.string();
                      break;
                    }
                    case 2: {
                      message.description = reader.string();
                      break;
                    }
                    case 3: {
                      message.unit = reader.string();
                      break;
                    }
                    case 5: {
                      message.gauge = $root.opentelemetry.proto.metrics.v1.Gauge.decode(reader, reader.uint32());
                      break;
                    }
                    case 7: {
                      message.sum = $root.opentelemetry.proto.metrics.v1.Sum.decode(reader, reader.uint32());
                      break;
                    }
                    case 9: {
                      message.histogram = $root.opentelemetry.proto.metrics.v1.Histogram.decode(reader, reader.uint32());
                      break;
                    }
                    case 10: {
                      message.exponentialHistogram = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(reader, reader.uint32());
                      break;
                    }
                    case 11: {
                      message.summary = $root.opentelemetry.proto.metrics.v1.Summary.decode(reader, reader.uint32());
                      break;
                    }
                    case 12: {
                      if (!(message.metadata && message.metadata.length))
                        message.metadata = [];
                      message.metadata.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Metric.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Metric.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name")) {
                  if (!$util.isString(message.name))
                    return "name: string expected";
                }
                if (message.description != null && message.hasOwnProperty("description")) {
                  if (!$util.isString(message.description))
                    return "description: string expected";
                }
                if (message.unit != null && message.hasOwnProperty("unit")) {
                  if (!$util.isString(message.unit))
                    return "unit: string expected";
                }
                if (message.gauge != null && message.hasOwnProperty("gauge")) {
                  properties.data = 1;
                  {
                    var error = $root.opentelemetry.proto.metrics.v1.Gauge.verify(message.gauge);
                    if (error)
                      return "gauge." + error;
                  }
                }
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  if (properties.data === 1)
                    return "data: multiple values";
                  properties.data = 1;
                  {
                    var error = $root.opentelemetry.proto.metrics.v1.Sum.verify(message.sum);
                    if (error)
                      return "sum." + error;
                  }
                }
                if (message.histogram != null && message.hasOwnProperty("histogram")) {
                  if (properties.data === 1)
                    return "data: multiple values";
                  properties.data = 1;
                  {
                    var error = $root.opentelemetry.proto.metrics.v1.Histogram.verify(message.histogram);
                    if (error)
                      return "histogram." + error;
                  }
                }
                if (message.exponentialHistogram != null && message.hasOwnProperty("exponentialHistogram")) {
                  if (properties.data === 1)
                    return "data: multiple values";
                  properties.data = 1;
                  {
                    var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(message.exponentialHistogram);
                    if (error)
                      return "exponentialHistogram." + error;
                  }
                }
                if (message.summary != null && message.hasOwnProperty("summary")) {
                  if (properties.data === 1)
                    return "data: multiple values";
                  properties.data = 1;
                  {
                    var error = $root.opentelemetry.proto.metrics.v1.Summary.verify(message.summary);
                    if (error)
                      return "summary." + error;
                  }
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                  if (!Array.isArray(message.metadata))
                    return "metadata: array expected";
                  for (var i = 0; i < message.metadata.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.metadata[i]);
                    if (error)
                      return "metadata." + error;
                  }
                }
                return null;
              };
              Metric.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.Metric)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.Metric();
                if (object.name != null)
                  message.name = String(object.name);
                if (object.description != null)
                  message.description = String(object.description);
                if (object.unit != null)
                  message.unit = String(object.unit);
                if (object.gauge != null) {
                  if (typeof object.gauge !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                  message.gauge = $root.opentelemetry.proto.metrics.v1.Gauge.fromObject(object.gauge);
                }
                if (object.sum != null) {
                  if (typeof object.sum !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                  message.sum = $root.opentelemetry.proto.metrics.v1.Sum.fromObject(object.sum);
                }
                if (object.histogram != null) {
                  if (typeof object.histogram !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                  message.histogram = $root.opentelemetry.proto.metrics.v1.Histogram.fromObject(object.histogram);
                }
                if (object.exponentialHistogram != null) {
                  if (typeof object.exponentialHistogram !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected");
                  message.exponentialHistogram = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(object.exponentialHistogram);
                }
                if (object.summary != null) {
                  if (typeof object.summary !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                  message.summary = $root.opentelemetry.proto.metrics.v1.Summary.fromObject(object.summary);
                }
                if (object.metadata) {
                  if (!Array.isArray(object.metadata))
                    throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                  message.metadata = [];
                  for (var i = 0; i < object.metadata.length; ++i) {
                    if (typeof object.metadata[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                    message.metadata[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.metadata[i]);
                  }
                }
                return message;
              };
              Metric.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.metadata = [];
                if (options.defaults) {
                  object.name = "";
                  object.description = "";
                  object.unit = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                  object.name = message.name;
                if (message.description != null && message.hasOwnProperty("description"))
                  object.description = message.description;
                if (message.unit != null && message.hasOwnProperty("unit"))
                  object.unit = message.unit;
                if (message.gauge != null && message.hasOwnProperty("gauge")) {
                  object.gauge = $root.opentelemetry.proto.metrics.v1.Gauge.toObject(message.gauge, options);
                  if (options.oneofs)
                    object.data = "gauge";
                }
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  object.sum = $root.opentelemetry.proto.metrics.v1.Sum.toObject(message.sum, options);
                  if (options.oneofs)
                    object.data = "sum";
                }
                if (message.histogram != null && message.hasOwnProperty("histogram")) {
                  object.histogram = $root.opentelemetry.proto.metrics.v1.Histogram.toObject(message.histogram, options);
                  if (options.oneofs)
                    object.data = "histogram";
                }
                if (message.exponentialHistogram != null && message.hasOwnProperty("exponentialHistogram")) {
                  object.exponentialHistogram = $root.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(message.exponentialHistogram, options);
                  if (options.oneofs)
                    object.data = "exponentialHistogram";
                }
                if (message.summary != null && message.hasOwnProperty("summary")) {
                  object.summary = $root.opentelemetry.proto.metrics.v1.Summary.toObject(message.summary, options);
                  if (options.oneofs)
                    object.data = "summary";
                }
                if (message.metadata && message.metadata.length) {
                  object.metadata = [];
                  for (var j = 0; j < message.metadata.length; ++j)
                    object.metadata[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.metadata[j], options);
                }
                return object;
              };
              Metric.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Metric.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Metric";
              };
              return Metric;
            })();
            v1.Gauge = (function() {
              function Gauge(properties) {
                this.dataPoints = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Gauge.prototype.dataPoints = $util.emptyArray;
              Gauge.create = function create(properties) {
                return new Gauge(properties);
              };
              Gauge.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.dataPoints != null && message.dataPoints.length)
                  for (var i = 0; i < message.dataPoints.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(message.dataPoints[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              Gauge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Gauge.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Gauge();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.dataPoints && message.dataPoints.length))
                        message.dataPoints = [];
                      message.dataPoints.push($root.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Gauge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Gauge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                  if (!Array.isArray(message.dataPoints))
                    return "dataPoints: array expected";
                  for (var i = 0; i < message.dataPoints.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(message.dataPoints[i]);
                    if (error)
                      return "dataPoints." + error;
                  }
                }
                return null;
              };
              Gauge.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.Gauge)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.Gauge();
                if (object.dataPoints) {
                  if (!Array.isArray(object.dataPoints))
                    throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                  message.dataPoints = [];
                  for (var i = 0; i < object.dataPoints.length; ++i) {
                    if (typeof object.dataPoints[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                    message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(object.dataPoints[i]);
                  }
                }
                return message;
              };
              Gauge.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.dataPoints = [];
                if (message.dataPoints && message.dataPoints.length) {
                  object.dataPoints = [];
                  for (var j = 0; j < message.dataPoints.length; ++j)
                    object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(message.dataPoints[j], options);
                }
                return object;
              };
              Gauge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Gauge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Gauge";
              };
              return Gauge;
            })();
            v1.Sum = (function() {
              function Sum(properties) {
                this.dataPoints = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Sum.prototype.dataPoints = $util.emptyArray;
              Sum.prototype.aggregationTemporality = null;
              Sum.prototype.isMonotonic = null;
              Sum.create = function create(properties) {
                return new Sum(properties);
              };
              Sum.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.dataPoints != null && message.dataPoints.length)
                  for (var i = 0; i < message.dataPoints.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(message.dataPoints[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                if (message.aggregationTemporality != null && Object.hasOwnProperty.call(message, "aggregationTemporality"))
                  writer.uint32(
                    /* id 2, wireType 0 =*/
                    16
                  ).int32(message.aggregationTemporality);
                if (message.isMonotonic != null && Object.hasOwnProperty.call(message, "isMonotonic"))
                  writer.uint32(
                    /* id 3, wireType 0 =*/
                    24
                  ).bool(message.isMonotonic);
                return writer;
              };
              Sum.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Sum.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Sum();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.dataPoints && message.dataPoints.length))
                        message.dataPoints = [];
                      message.dataPoints.push($root.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.aggregationTemporality = reader.int32();
                      break;
                    }
                    case 3: {
                      message.isMonotonic = reader.bool();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Sum.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Sum.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                  if (!Array.isArray(message.dataPoints))
                    return "dataPoints: array expected";
                  for (var i = 0; i < message.dataPoints.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(message.dataPoints[i]);
                    if (error)
                      return "dataPoints." + error;
                  }
                }
                if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                  switch (message.aggregationTemporality) {
                    default:
                      return "aggregationTemporality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                      break;
                  }
                if (message.isMonotonic != null && message.hasOwnProperty("isMonotonic")) {
                  if (typeof message.isMonotonic !== "boolean")
                    return "isMonotonic: boolean expected";
                }
                return null;
              };
              Sum.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.Sum)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.Sum();
                if (object.dataPoints) {
                  if (!Array.isArray(object.dataPoints))
                    throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                  message.dataPoints = [];
                  for (var i = 0; i < object.dataPoints.length; ++i) {
                    if (typeof object.dataPoints[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                    message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(object.dataPoints[i]);
                  }
                }
                switch (object.aggregationTemporality) {
                  default:
                    if (typeof object.aggregationTemporality === "number") {
                      message.aggregationTemporality = object.aggregationTemporality;
                      break;
                    }
                    break;
                  case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                  case 0:
                    message.aggregationTemporality = 0;
                    break;
                  case "AGGREGATION_TEMPORALITY_DELTA":
                  case 1:
                    message.aggregationTemporality = 1;
                    break;
                  case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                  case 2:
                    message.aggregationTemporality = 2;
                    break;
                }
                if (object.isMonotonic != null)
                  message.isMonotonic = Boolean(object.isMonotonic);
                return message;
              };
              Sum.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.dataPoints = [];
                if (options.defaults) {
                  object.aggregationTemporality = options.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                  object.isMonotonic = false;
                }
                if (message.dataPoints && message.dataPoints.length) {
                  object.dataPoints = [];
                  for (var j = 0; j < message.dataPoints.length; ++j)
                    object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(message.dataPoints[j], options);
                }
                if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                  object.aggregationTemporality = options.enums === String ? $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] === void 0 ? message.aggregationTemporality : $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] : message.aggregationTemporality;
                if (message.isMonotonic != null && message.hasOwnProperty("isMonotonic"))
                  object.isMonotonic = message.isMonotonic;
                return object;
              };
              Sum.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Sum.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Sum";
              };
              return Sum;
            })();
            v1.Histogram = (function() {
              function Histogram(properties) {
                this.dataPoints = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Histogram.prototype.dataPoints = $util.emptyArray;
              Histogram.prototype.aggregationTemporality = null;
              Histogram.create = function create(properties) {
                return new Histogram(properties);
              };
              Histogram.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.dataPoints != null && message.dataPoints.length)
                  for (var i = 0; i < message.dataPoints.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(message.dataPoints[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                if (message.aggregationTemporality != null && Object.hasOwnProperty.call(message, "aggregationTemporality"))
                  writer.uint32(
                    /* id 2, wireType 0 =*/
                    16
                  ).int32(message.aggregationTemporality);
                return writer;
              };
              Histogram.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Histogram.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Histogram();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.dataPoints && message.dataPoints.length))
                        message.dataPoints = [];
                      message.dataPoints.push($root.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.aggregationTemporality = reader.int32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Histogram.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Histogram.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                  if (!Array.isArray(message.dataPoints))
                    return "dataPoints: array expected";
                  for (var i = 0; i < message.dataPoints.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(message.dataPoints[i]);
                    if (error)
                      return "dataPoints." + error;
                  }
                }
                if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                  switch (message.aggregationTemporality) {
                    default:
                      return "aggregationTemporality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                      break;
                  }
                return null;
              };
              Histogram.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.Histogram)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.Histogram();
                if (object.dataPoints) {
                  if (!Array.isArray(object.dataPoints))
                    throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                  message.dataPoints = [];
                  for (var i = 0; i < object.dataPoints.length; ++i) {
                    if (typeof object.dataPoints[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                    message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(object.dataPoints[i]);
                  }
                }
                switch (object.aggregationTemporality) {
                  default:
                    if (typeof object.aggregationTemporality === "number") {
                      message.aggregationTemporality = object.aggregationTemporality;
                      break;
                    }
                    break;
                  case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                  case 0:
                    message.aggregationTemporality = 0;
                    break;
                  case "AGGREGATION_TEMPORALITY_DELTA":
                  case 1:
                    message.aggregationTemporality = 1;
                    break;
                  case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                  case 2:
                    message.aggregationTemporality = 2;
                    break;
                }
                return message;
              };
              Histogram.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.dataPoints = [];
                if (options.defaults)
                  object.aggregationTemporality = options.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                if (message.dataPoints && message.dataPoints.length) {
                  object.dataPoints = [];
                  for (var j = 0; j < message.dataPoints.length; ++j)
                    object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(message.dataPoints[j], options);
                }
                if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                  object.aggregationTemporality = options.enums === String ? $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] === void 0 ? message.aggregationTemporality : $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] : message.aggregationTemporality;
                return object;
              };
              Histogram.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Histogram.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Histogram";
              };
              return Histogram;
            })();
            v1.ExponentialHistogram = (function() {
              function ExponentialHistogram(properties) {
                this.dataPoints = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExponentialHistogram.prototype.dataPoints = $util.emptyArray;
              ExponentialHistogram.prototype.aggregationTemporality = null;
              ExponentialHistogram.create = function create(properties) {
                return new ExponentialHistogram(properties);
              };
              ExponentialHistogram.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.dataPoints != null && message.dataPoints.length)
                  for (var i = 0; i < message.dataPoints.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(message.dataPoints[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                if (message.aggregationTemporality != null && Object.hasOwnProperty.call(message, "aggregationTemporality"))
                  writer.uint32(
                    /* id 2, wireType 0 =*/
                    16
                  ).int32(message.aggregationTemporality);
                return writer;
              };
              ExponentialHistogram.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExponentialHistogram.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogram();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.dataPoints && message.dataPoints.length))
                        message.dataPoints = [];
                      message.dataPoints.push($root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.aggregationTemporality = reader.int32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExponentialHistogram.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExponentialHistogram.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                  if (!Array.isArray(message.dataPoints))
                    return "dataPoints: array expected";
                  for (var i = 0; i < message.dataPoints.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(message.dataPoints[i]);
                    if (error)
                      return "dataPoints." + error;
                  }
                }
                if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                  switch (message.aggregationTemporality) {
                    default:
                      return "aggregationTemporality: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                      break;
                  }
                return null;
              };
              ExponentialHistogram.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.ExponentialHistogram)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogram();
                if (object.dataPoints) {
                  if (!Array.isArray(object.dataPoints))
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected");
                  message.dataPoints = [];
                  for (var i = 0; i < object.dataPoints.length; ++i) {
                    if (typeof object.dataPoints[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected");
                    message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(object.dataPoints[i]);
                  }
                }
                switch (object.aggregationTemporality) {
                  default:
                    if (typeof object.aggregationTemporality === "number") {
                      message.aggregationTemporality = object.aggregationTemporality;
                      break;
                    }
                    break;
                  case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                  case 0:
                    message.aggregationTemporality = 0;
                    break;
                  case "AGGREGATION_TEMPORALITY_DELTA":
                  case 1:
                    message.aggregationTemporality = 1;
                    break;
                  case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                  case 2:
                    message.aggregationTemporality = 2;
                    break;
                }
                return message;
              };
              ExponentialHistogram.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.dataPoints = [];
                if (options.defaults)
                  object.aggregationTemporality = options.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0;
                if (message.dataPoints && message.dataPoints.length) {
                  object.dataPoints = [];
                  for (var j = 0; j < message.dataPoints.length; ++j)
                    object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(message.dataPoints[j], options);
                }
                if (message.aggregationTemporality != null && message.hasOwnProperty("aggregationTemporality"))
                  object.aggregationTemporality = options.enums === String ? $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] === void 0 ? message.aggregationTemporality : $root.opentelemetry.proto.metrics.v1.AggregationTemporality[message.aggregationTemporality] : message.aggregationTemporality;
                return object;
              };
              ExponentialHistogram.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExponentialHistogram.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ExponentialHistogram";
              };
              return ExponentialHistogram;
            })();
            v1.Summary = (function() {
              function Summary(properties) {
                this.dataPoints = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Summary.prototype.dataPoints = $util.emptyArray;
              Summary.create = function create(properties) {
                return new Summary(properties);
              };
              Summary.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.dataPoints != null && message.dataPoints.length)
                  for (var i = 0; i < message.dataPoints.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(message.dataPoints[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              Summary.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Summary.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Summary();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.dataPoints && message.dataPoints.length))
                        message.dataPoints = [];
                      message.dataPoints.push($root.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Summary.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Summary.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.dataPoints != null && message.hasOwnProperty("dataPoints")) {
                  if (!Array.isArray(message.dataPoints))
                    return "dataPoints: array expected";
                  for (var i = 0; i < message.dataPoints.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(message.dataPoints[i]);
                    if (error)
                      return "dataPoints." + error;
                  }
                }
                return null;
              };
              Summary.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.Summary)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.Summary();
                if (object.dataPoints) {
                  if (!Array.isArray(object.dataPoints))
                    throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                  message.dataPoints = [];
                  for (var i = 0; i < object.dataPoints.length; ++i) {
                    if (typeof object.dataPoints[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                    message.dataPoints[i] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(object.dataPoints[i]);
                  }
                }
                return message;
              };
              Summary.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.dataPoints = [];
                if (message.dataPoints && message.dataPoints.length) {
                  object.dataPoints = [];
                  for (var j = 0; j < message.dataPoints.length; ++j)
                    object.dataPoints[j] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(message.dataPoints[j], options);
                }
                return object;
              };
              Summary.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Summary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Summary";
              };
              return Summary;
            })();
            v1.AggregationTemporality = (function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0;
              values[valuesById[1] = "AGGREGATION_TEMPORALITY_DELTA"] = 1;
              values[valuesById[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2;
              return values;
            })();
            v1.DataPointFlags = (function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "DATA_POINT_FLAGS_DO_NOT_USE"] = 0;
              values[valuesById[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK"] = 1;
              return values;
            })();
            v1.NumberDataPoint = (function() {
              function NumberDataPoint(properties) {
                this.attributes = [];
                this.exemplars = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              NumberDataPoint.prototype.attributes = $util.emptyArray;
              NumberDataPoint.prototype.startTimeUnixNano = null;
              NumberDataPoint.prototype.timeUnixNano = null;
              NumberDataPoint.prototype.asDouble = null;
              NumberDataPoint.prototype.asInt = null;
              NumberDataPoint.prototype.exemplars = $util.emptyArray;
              NumberDataPoint.prototype.flags = null;
              var $oneOfFields;
              Object.defineProperty(NumberDataPoint.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["asDouble", "asInt"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              NumberDataPoint.create = function create(properties) {
                return new NumberDataPoint(properties);
              };
              NumberDataPoint.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                  writer.uint32(
                    /* id 2, wireType 1 =*/
                    17
                  ).fixed64(message.startTimeUnixNano);
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(
                    /* id 3, wireType 1 =*/
                    25
                  ).fixed64(message.timeUnixNano);
                if (message.asDouble != null && Object.hasOwnProperty.call(message, "asDouble"))
                  writer.uint32(
                    /* id 4, wireType 1 =*/
                    33
                  ).double(message.asDouble);
                if (message.exemplars != null && message.exemplars.length)
                  for (var i = 0; i < message.exemplars.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.Exemplar.encode(message.exemplars[i], writer.uint32(
                      /* id 5, wireType 2 =*/
                      42
                    ).fork()).ldelim();
                if (message.asInt != null && Object.hasOwnProperty.call(message, "asInt"))
                  writer.uint32(
                    /* id 6, wireType 1 =*/
                    49
                  ).sfixed64(message.asInt);
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 7, wireType 2 =*/
                      58
                    ).fork()).ldelim();
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(
                    /* id 8, wireType 0 =*/
                    64
                  ).uint32(message.flags);
                return writer;
              };
              NumberDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              NumberDataPoint.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.NumberDataPoint();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 7: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.startTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 3: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 4: {
                      message.asDouble = reader.double();
                      break;
                    }
                    case 6: {
                      message.asInt = reader.sfixed64();
                      break;
                    }
                    case 5: {
                      if (!(message.exemplars && message.exemplars.length))
                        message.exemplars = [];
                      message.exemplars.push($root.opentelemetry.proto.metrics.v1.Exemplar.decode(reader, reader.uint32()));
                      break;
                    }
                    case 8: {
                      message.flags = reader.uint32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              NumberDataPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              NumberDataPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                var properties = {};
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                  if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                    return "startTimeUnixNano: integer|Long expected";
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                  properties.value = 1;
                  if (typeof message.asDouble !== "number")
                    return "asDouble: number expected";
                }
                if (message.asInt != null && message.hasOwnProperty("asInt")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  if (!$util.isInteger(message.asInt) && !(message.asInt && $util.isInteger(message.asInt.low) && $util.isInteger(message.asInt.high)))
                    return "asInt: integer|Long expected";
                }
                if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                  if (!Array.isArray(message.exemplars))
                    return "exemplars: array expected";
                  for (var i = 0; i < message.exemplars.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.Exemplar.verify(message.exemplars[i]);
                    if (error)
                      return "exemplars." + error;
                  }
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                return null;
              };
              NumberDataPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.NumberDataPoint)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.NumberDataPoint();
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.startTimeUnixNano != null) {
                  if ($util.Long)
                    (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                  else if (typeof object.startTimeUnixNano === "string")
                    message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                  else if (typeof object.startTimeUnixNano === "number")
                    message.startTimeUnixNano = object.startTimeUnixNano;
                  else if (typeof object.startTimeUnixNano === "object")
                    message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                }
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.asDouble != null)
                  message.asDouble = Number(object.asDouble);
                if (object.asInt != null) {
                  if ($util.Long)
                    (message.asInt = $util.Long.fromValue(object.asInt)).unsigned = false;
                  else if (typeof object.asInt === "string")
                    message.asInt = parseInt(object.asInt, 10);
                  else if (typeof object.asInt === "number")
                    message.asInt = object.asInt;
                  else if (typeof object.asInt === "object")
                    message.asInt = new $util.LongBits(object.asInt.low >>> 0, object.asInt.high >>> 0).toNumber();
                }
                if (object.exemplars) {
                  if (!Array.isArray(object.exemplars))
                    throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected");
                  message.exemplars = [];
                  for (var i = 0; i < object.exemplars.length; ++i) {
                    if (typeof object.exemplars[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected");
                    message.exemplars[i] = $root.opentelemetry.proto.metrics.v1.Exemplar.fromObject(object.exemplars[i]);
                  }
                }
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                return message;
              };
              NumberDataPoint.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.exemplars = [];
                  object.attributes = [];
                }
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.startTimeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  object.flags = 0;
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                  if (typeof message.startTimeUnixNano === "number")
                    object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                  else
                    object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                  object.asDouble = options.json && !isFinite(message.asDouble) ? String(message.asDouble) : message.asDouble;
                  if (options.oneofs)
                    object.value = "asDouble";
                }
                if (message.exemplars && message.exemplars.length) {
                  object.exemplars = [];
                  for (var j = 0; j < message.exemplars.length; ++j)
                    object.exemplars[j] = $root.opentelemetry.proto.metrics.v1.Exemplar.toObject(message.exemplars[j], options);
                }
                if (message.asInt != null && message.hasOwnProperty("asInt")) {
                  if (typeof message.asInt === "number")
                    object.asInt = options.longs === String ? String(message.asInt) : message.asInt;
                  else
                    object.asInt = options.longs === String ? $util.Long.prototype.toString.call(message.asInt) : options.longs === Number ? new $util.LongBits(message.asInt.low >>> 0, message.asInt.high >>> 0).toNumber() : message.asInt;
                  if (options.oneofs)
                    object.value = "asInt";
                }
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                return object;
              };
              NumberDataPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              NumberDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.NumberDataPoint";
              };
              return NumberDataPoint;
            })();
            v1.HistogramDataPoint = (function() {
              function HistogramDataPoint(properties) {
                this.attributes = [];
                this.bucketCounts = [];
                this.explicitBounds = [];
                this.exemplars = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              HistogramDataPoint.prototype.attributes = $util.emptyArray;
              HistogramDataPoint.prototype.startTimeUnixNano = null;
              HistogramDataPoint.prototype.timeUnixNano = null;
              HistogramDataPoint.prototype.count = null;
              HistogramDataPoint.prototype.sum = null;
              HistogramDataPoint.prototype.bucketCounts = $util.emptyArray;
              HistogramDataPoint.prototype.explicitBounds = $util.emptyArray;
              HistogramDataPoint.prototype.exemplars = $util.emptyArray;
              HistogramDataPoint.prototype.flags = null;
              HistogramDataPoint.prototype.min = null;
              HistogramDataPoint.prototype.max = null;
              var $oneOfFields;
              Object.defineProperty(HistogramDataPoint.prototype, "_sum", {
                get: $util.oneOfGetter($oneOfFields = ["sum"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              Object.defineProperty(HistogramDataPoint.prototype, "_min", {
                get: $util.oneOfGetter($oneOfFields = ["min"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              Object.defineProperty(HistogramDataPoint.prototype, "_max", {
                get: $util.oneOfGetter($oneOfFields = ["max"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              HistogramDataPoint.create = function create(properties) {
                return new HistogramDataPoint(properties);
              };
              HistogramDataPoint.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                  writer.uint32(
                    /* id 2, wireType 1 =*/
                    17
                  ).fixed64(message.startTimeUnixNano);
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(
                    /* id 3, wireType 1 =*/
                    25
                  ).fixed64(message.timeUnixNano);
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                  writer.uint32(
                    /* id 4, wireType 1 =*/
                    33
                  ).fixed64(message.count);
                if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                  writer.uint32(
                    /* id 5, wireType 1 =*/
                    41
                  ).double(message.sum);
                if (message.bucketCounts != null && message.bucketCounts.length) {
                  writer.uint32(
                    /* id 6, wireType 2 =*/
                    50
                  ).fork();
                  for (var i = 0; i < message.bucketCounts.length; ++i)
                    writer.fixed64(message.bucketCounts[i]);
                  writer.ldelim();
                }
                if (message.explicitBounds != null && message.explicitBounds.length) {
                  writer.uint32(
                    /* id 7, wireType 2 =*/
                    58
                  ).fork();
                  for (var i = 0; i < message.explicitBounds.length; ++i)
                    writer.double(message.explicitBounds[i]);
                  writer.ldelim();
                }
                if (message.exemplars != null && message.exemplars.length)
                  for (var i = 0; i < message.exemplars.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.Exemplar.encode(message.exemplars[i], writer.uint32(
                      /* id 8, wireType 2 =*/
                      66
                    ).fork()).ldelim();
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 9, wireType 2 =*/
                      74
                    ).fork()).ldelim();
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(
                    /* id 10, wireType 0 =*/
                    80
                  ).uint32(message.flags);
                if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                  writer.uint32(
                    /* id 11, wireType 1 =*/
                    89
                  ).double(message.min);
                if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                  writer.uint32(
                    /* id 12, wireType 1 =*/
                    97
                  ).double(message.max);
                return writer;
              };
              HistogramDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              HistogramDataPoint.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.HistogramDataPoint();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 9: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.startTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 3: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 4: {
                      message.count = reader.fixed64();
                      break;
                    }
                    case 5: {
                      message.sum = reader.double();
                      break;
                    }
                    case 6: {
                      if (!(message.bucketCounts && message.bucketCounts.length))
                        message.bucketCounts = [];
                      if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                          message.bucketCounts.push(reader.fixed64());
                      } else
                        message.bucketCounts.push(reader.fixed64());
                      break;
                    }
                    case 7: {
                      if (!(message.explicitBounds && message.explicitBounds.length))
                        message.explicitBounds = [];
                      if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                          message.explicitBounds.push(reader.double());
                      } else
                        message.explicitBounds.push(reader.double());
                      break;
                    }
                    case 8: {
                      if (!(message.exemplars && message.exemplars.length))
                        message.exemplars = [];
                      message.exemplars.push($root.opentelemetry.proto.metrics.v1.Exemplar.decode(reader, reader.uint32()));
                      break;
                    }
                    case 10: {
                      message.flags = reader.uint32();
                      break;
                    }
                    case 11: {
                      message.min = reader.double();
                      break;
                    }
                    case 12: {
                      message.max = reader.double();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              HistogramDataPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              HistogramDataPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                var properties = {};
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                  if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                    return "startTimeUnixNano: integer|Long expected";
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.count != null && message.hasOwnProperty("count")) {
                  if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
                }
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  properties._sum = 1;
                  if (typeof message.sum !== "number")
                    return "sum: number expected";
                }
                if (message.bucketCounts != null && message.hasOwnProperty("bucketCounts")) {
                  if (!Array.isArray(message.bucketCounts))
                    return "bucketCounts: array expected";
                  for (var i = 0; i < message.bucketCounts.length; ++i)
                    if (!$util.isInteger(message.bucketCounts[i]) && !(message.bucketCounts[i] && $util.isInteger(message.bucketCounts[i].low) && $util.isInteger(message.bucketCounts[i].high)))
                      return "bucketCounts: integer|Long[] expected";
                }
                if (message.explicitBounds != null && message.hasOwnProperty("explicitBounds")) {
                  if (!Array.isArray(message.explicitBounds))
                    return "explicitBounds: array expected";
                  for (var i = 0; i < message.explicitBounds.length; ++i)
                    if (typeof message.explicitBounds[i] !== "number")
                      return "explicitBounds: number[] expected";
                }
                if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                  if (!Array.isArray(message.exemplars))
                    return "exemplars: array expected";
                  for (var i = 0; i < message.exemplars.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.Exemplar.verify(message.exemplars[i]);
                    if (error)
                      return "exemplars." + error;
                  }
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                if (message.min != null && message.hasOwnProperty("min")) {
                  properties._min = 1;
                  if (typeof message.min !== "number")
                    return "min: number expected";
                }
                if (message.max != null && message.hasOwnProperty("max")) {
                  properties._max = 1;
                  if (typeof message.max !== "number")
                    return "max: number expected";
                }
                return null;
              };
              HistogramDataPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.HistogramDataPoint)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.HistogramDataPoint();
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.startTimeUnixNano != null) {
                  if ($util.Long)
                    (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                  else if (typeof object.startTimeUnixNano === "string")
                    message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                  else if (typeof object.startTimeUnixNano === "number")
                    message.startTimeUnixNano = object.startTimeUnixNano;
                  else if (typeof object.startTimeUnixNano === "object")
                    message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                }
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.count != null) {
                  if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                  else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                  else if (typeof object.count === "number")
                    message.count = object.count;
                  else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
                }
                if (object.sum != null)
                  message.sum = Number(object.sum);
                if (object.bucketCounts) {
                  if (!Array.isArray(object.bucketCounts))
                    throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected");
                  message.bucketCounts = [];
                  for (var i = 0; i < object.bucketCounts.length; ++i)
                    if ($util.Long)
                      (message.bucketCounts[i] = $util.Long.fromValue(object.bucketCounts[i])).unsigned = false;
                    else if (typeof object.bucketCounts[i] === "string")
                      message.bucketCounts[i] = parseInt(object.bucketCounts[i], 10);
                    else if (typeof object.bucketCounts[i] === "number")
                      message.bucketCounts[i] = object.bucketCounts[i];
                    else if (typeof object.bucketCounts[i] === "object")
                      message.bucketCounts[i] = new $util.LongBits(object.bucketCounts[i].low >>> 0, object.bucketCounts[i].high >>> 0).toNumber();
                }
                if (object.explicitBounds) {
                  if (!Array.isArray(object.explicitBounds))
                    throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected");
                  message.explicitBounds = [];
                  for (var i = 0; i < object.explicitBounds.length; ++i)
                    message.explicitBounds[i] = Number(object.explicitBounds[i]);
                }
                if (object.exemplars) {
                  if (!Array.isArray(object.exemplars))
                    throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected");
                  message.exemplars = [];
                  for (var i = 0; i < object.exemplars.length; ++i) {
                    if (typeof object.exemplars[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected");
                    message.exemplars[i] = $root.opentelemetry.proto.metrics.v1.Exemplar.fromObject(object.exemplars[i]);
                  }
                }
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                if (object.min != null)
                  message.min = Number(object.min);
                if (object.max != null)
                  message.max = Number(object.max);
                return message;
              };
              HistogramDataPoint.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.bucketCounts = [];
                  object.explicitBounds = [];
                  object.exemplars = [];
                  object.attributes = [];
                }
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.startTimeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.count = options.longs === String ? "0" : 0;
                  object.flags = 0;
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                  if (typeof message.startTimeUnixNano === "number")
                    object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                  else
                    object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.count != null && message.hasOwnProperty("count"))
                  if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                  else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
                  if (options.oneofs)
                    object._sum = "sum";
                }
                if (message.bucketCounts && message.bucketCounts.length) {
                  object.bucketCounts = [];
                  for (var j = 0; j < message.bucketCounts.length; ++j)
                    if (typeof message.bucketCounts[j] === "number")
                      object.bucketCounts[j] = options.longs === String ? String(message.bucketCounts[j]) : message.bucketCounts[j];
                    else
                      object.bucketCounts[j] = options.longs === String ? $util.Long.prototype.toString.call(message.bucketCounts[j]) : options.longs === Number ? new $util.LongBits(message.bucketCounts[j].low >>> 0, message.bucketCounts[j].high >>> 0).toNumber() : message.bucketCounts[j];
                }
                if (message.explicitBounds && message.explicitBounds.length) {
                  object.explicitBounds = [];
                  for (var j = 0; j < message.explicitBounds.length; ++j)
                    object.explicitBounds[j] = options.json && !isFinite(message.explicitBounds[j]) ? String(message.explicitBounds[j]) : message.explicitBounds[j];
                }
                if (message.exemplars && message.exemplars.length) {
                  object.exemplars = [];
                  for (var j = 0; j < message.exemplars.length; ++j)
                    object.exemplars[j] = $root.opentelemetry.proto.metrics.v1.Exemplar.toObject(message.exemplars[j], options);
                }
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                if (message.min != null && message.hasOwnProperty("min")) {
                  object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                  if (options.oneofs)
                    object._min = "min";
                }
                if (message.max != null && message.hasOwnProperty("max")) {
                  object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                  if (options.oneofs)
                    object._max = "max";
                }
                return object;
              };
              HistogramDataPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              HistogramDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.HistogramDataPoint";
              };
              return HistogramDataPoint;
            })();
            v1.ExponentialHistogramDataPoint = (function() {
              function ExponentialHistogramDataPoint(properties) {
                this.attributes = [];
                this.exemplars = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ExponentialHistogramDataPoint.prototype.attributes = $util.emptyArray;
              ExponentialHistogramDataPoint.prototype.startTimeUnixNano = null;
              ExponentialHistogramDataPoint.prototype.timeUnixNano = null;
              ExponentialHistogramDataPoint.prototype.count = null;
              ExponentialHistogramDataPoint.prototype.sum = null;
              ExponentialHistogramDataPoint.prototype.scale = null;
              ExponentialHistogramDataPoint.prototype.zeroCount = null;
              ExponentialHistogramDataPoint.prototype.positive = null;
              ExponentialHistogramDataPoint.prototype.negative = null;
              ExponentialHistogramDataPoint.prototype.flags = null;
              ExponentialHistogramDataPoint.prototype.exemplars = $util.emptyArray;
              ExponentialHistogramDataPoint.prototype.min = null;
              ExponentialHistogramDataPoint.prototype.max = null;
              ExponentialHistogramDataPoint.prototype.zeroThreshold = null;
              var $oneOfFields;
              Object.defineProperty(ExponentialHistogramDataPoint.prototype, "_sum", {
                get: $util.oneOfGetter($oneOfFields = ["sum"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              Object.defineProperty(ExponentialHistogramDataPoint.prototype, "_min", {
                get: $util.oneOfGetter($oneOfFields = ["min"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              Object.defineProperty(ExponentialHistogramDataPoint.prototype, "_max", {
                get: $util.oneOfGetter($oneOfFields = ["max"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              ExponentialHistogramDataPoint.create = function create(properties) {
                return new ExponentialHistogramDataPoint(properties);
              };
              ExponentialHistogramDataPoint.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                  writer.uint32(
                    /* id 2, wireType 1 =*/
                    17
                  ).fixed64(message.startTimeUnixNano);
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(
                    /* id 3, wireType 1 =*/
                    25
                  ).fixed64(message.timeUnixNano);
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                  writer.uint32(
                    /* id 4, wireType 1 =*/
                    33
                  ).fixed64(message.count);
                if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                  writer.uint32(
                    /* id 5, wireType 1 =*/
                    41
                  ).double(message.sum);
                if (message.scale != null && Object.hasOwnProperty.call(message, "scale"))
                  writer.uint32(
                    /* id 6, wireType 0 =*/
                    48
                  ).sint32(message.scale);
                if (message.zeroCount != null && Object.hasOwnProperty.call(message, "zeroCount"))
                  writer.uint32(
                    /* id 7, wireType 1 =*/
                    57
                  ).fixed64(message.zeroCount);
                if (message.positive != null && Object.hasOwnProperty.call(message, "positive"))
                  $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(message.positive, writer.uint32(
                    /* id 8, wireType 2 =*/
                    66
                  ).fork()).ldelim();
                if (message.negative != null && Object.hasOwnProperty.call(message, "negative"))
                  $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(message.negative, writer.uint32(
                    /* id 9, wireType 2 =*/
                    74
                  ).fork()).ldelim();
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(
                    /* id 10, wireType 0 =*/
                    80
                  ).uint32(message.flags);
                if (message.exemplars != null && message.exemplars.length)
                  for (var i = 0; i < message.exemplars.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.Exemplar.encode(message.exemplars[i], writer.uint32(
                      /* id 11, wireType 2 =*/
                      90
                    ).fork()).ldelim();
                if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                  writer.uint32(
                    /* id 12, wireType 1 =*/
                    97
                  ).double(message.min);
                if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                  writer.uint32(
                    /* id 13, wireType 1 =*/
                    105
                  ).double(message.max);
                if (message.zeroThreshold != null && Object.hasOwnProperty.call(message, "zeroThreshold"))
                  writer.uint32(
                    /* id 14, wireType 1 =*/
                    113
                  ).double(message.zeroThreshold);
                return writer;
              };
              ExponentialHistogramDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ExponentialHistogramDataPoint.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.startTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 3: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 4: {
                      message.count = reader.fixed64();
                      break;
                    }
                    case 5: {
                      message.sum = reader.double();
                      break;
                    }
                    case 6: {
                      message.scale = reader.sint32();
                      break;
                    }
                    case 7: {
                      message.zeroCount = reader.fixed64();
                      break;
                    }
                    case 8: {
                      message.positive = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(reader, reader.uint32());
                      break;
                    }
                    case 9: {
                      message.negative = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(reader, reader.uint32());
                      break;
                    }
                    case 10: {
                      message.flags = reader.uint32();
                      break;
                    }
                    case 11: {
                      if (!(message.exemplars && message.exemplars.length))
                        message.exemplars = [];
                      message.exemplars.push($root.opentelemetry.proto.metrics.v1.Exemplar.decode(reader, reader.uint32()));
                      break;
                    }
                    case 12: {
                      message.min = reader.double();
                      break;
                    }
                    case 13: {
                      message.max = reader.double();
                      break;
                    }
                    case 14: {
                      message.zeroThreshold = reader.double();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ExponentialHistogramDataPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ExponentialHistogramDataPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                var properties = {};
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                  if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                    return "startTimeUnixNano: integer|Long expected";
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.count != null && message.hasOwnProperty("count")) {
                  if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
                }
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  properties._sum = 1;
                  if (typeof message.sum !== "number")
                    return "sum: number expected";
                }
                if (message.scale != null && message.hasOwnProperty("scale")) {
                  if (!$util.isInteger(message.scale))
                    return "scale: integer expected";
                }
                if (message.zeroCount != null && message.hasOwnProperty("zeroCount")) {
                  if (!$util.isInteger(message.zeroCount) && !(message.zeroCount && $util.isInteger(message.zeroCount.low) && $util.isInteger(message.zeroCount.high)))
                    return "zeroCount: integer|Long expected";
                }
                if (message.positive != null && message.hasOwnProperty("positive")) {
                  var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(message.positive);
                  if (error)
                    return "positive." + error;
                }
                if (message.negative != null && message.hasOwnProperty("negative")) {
                  var error = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(message.negative);
                  if (error)
                    return "negative." + error;
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                  if (!Array.isArray(message.exemplars))
                    return "exemplars: array expected";
                  for (var i = 0; i < message.exemplars.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.Exemplar.verify(message.exemplars[i]);
                    if (error)
                      return "exemplars." + error;
                  }
                }
                if (message.min != null && message.hasOwnProperty("min")) {
                  properties._min = 1;
                  if (typeof message.min !== "number")
                    return "min: number expected";
                }
                if (message.max != null && message.hasOwnProperty("max")) {
                  properties._max = 1;
                  if (typeof message.max !== "number")
                    return "max: number expected";
                }
                if (message.zeroThreshold != null && message.hasOwnProperty("zeroThreshold")) {
                  if (typeof message.zeroThreshold !== "number")
                    return "zeroThreshold: number expected";
                }
                return null;
              };
              ExponentialHistogramDataPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.startTimeUnixNano != null) {
                  if ($util.Long)
                    (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                  else if (typeof object.startTimeUnixNano === "string")
                    message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                  else if (typeof object.startTimeUnixNano === "number")
                    message.startTimeUnixNano = object.startTimeUnixNano;
                  else if (typeof object.startTimeUnixNano === "object")
                    message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                }
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.count != null) {
                  if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                  else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                  else if (typeof object.count === "number")
                    message.count = object.count;
                  else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
                }
                if (object.sum != null)
                  message.sum = Number(object.sum);
                if (object.scale != null)
                  message.scale = object.scale | 0;
                if (object.zeroCount != null) {
                  if ($util.Long)
                    (message.zeroCount = $util.Long.fromValue(object.zeroCount)).unsigned = false;
                  else if (typeof object.zeroCount === "string")
                    message.zeroCount = parseInt(object.zeroCount, 10);
                  else if (typeof object.zeroCount === "number")
                    message.zeroCount = object.zeroCount;
                  else if (typeof object.zeroCount === "object")
                    message.zeroCount = new $util.LongBits(object.zeroCount.low >>> 0, object.zeroCount.high >>> 0).toNumber();
                }
                if (object.positive != null) {
                  if (typeof object.positive !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected");
                  message.positive = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(object.positive);
                }
                if (object.negative != null) {
                  if (typeof object.negative !== "object")
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected");
                  message.negative = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(object.negative);
                }
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                if (object.exemplars) {
                  if (!Array.isArray(object.exemplars))
                    throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected");
                  message.exemplars = [];
                  for (var i = 0; i < object.exemplars.length; ++i) {
                    if (typeof object.exemplars[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected");
                    message.exemplars[i] = $root.opentelemetry.proto.metrics.v1.Exemplar.fromObject(object.exemplars[i]);
                  }
                }
                if (object.min != null)
                  message.min = Number(object.min);
                if (object.max != null)
                  message.max = Number(object.max);
                if (object.zeroThreshold != null)
                  message.zeroThreshold = Number(object.zeroThreshold);
                return message;
              };
              ExponentialHistogramDataPoint.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.attributes = [];
                  object.exemplars = [];
                }
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.startTimeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.count = options.longs === String ? "0" : 0;
                  object.scale = 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.zeroCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.zeroCount = options.longs === String ? "0" : 0;
                  object.positive = null;
                  object.negative = null;
                  object.flags = 0;
                  object.zeroThreshold = 0;
                }
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                  if (typeof message.startTimeUnixNano === "number")
                    object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                  else
                    object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.count != null && message.hasOwnProperty("count"))
                  if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                  else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
                  if (options.oneofs)
                    object._sum = "sum";
                }
                if (message.scale != null && message.hasOwnProperty("scale"))
                  object.scale = message.scale;
                if (message.zeroCount != null && message.hasOwnProperty("zeroCount"))
                  if (typeof message.zeroCount === "number")
                    object.zeroCount = options.longs === String ? String(message.zeroCount) : message.zeroCount;
                  else
                    object.zeroCount = options.longs === String ? $util.Long.prototype.toString.call(message.zeroCount) : options.longs === Number ? new $util.LongBits(message.zeroCount.low >>> 0, message.zeroCount.high >>> 0).toNumber() : message.zeroCount;
                if (message.positive != null && message.hasOwnProperty("positive"))
                  object.positive = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(message.positive, options);
                if (message.negative != null && message.hasOwnProperty("negative"))
                  object.negative = $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(message.negative, options);
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                if (message.exemplars && message.exemplars.length) {
                  object.exemplars = [];
                  for (var j = 0; j < message.exemplars.length; ++j)
                    object.exemplars[j] = $root.opentelemetry.proto.metrics.v1.Exemplar.toObject(message.exemplars[j], options);
                }
                if (message.min != null && message.hasOwnProperty("min")) {
                  object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                  if (options.oneofs)
                    object._min = "min";
                }
                if (message.max != null && message.hasOwnProperty("max")) {
                  object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                  if (options.oneofs)
                    object._max = "max";
                }
                if (message.zeroThreshold != null && message.hasOwnProperty("zeroThreshold"))
                  object.zeroThreshold = options.json && !isFinite(message.zeroThreshold) ? String(message.zeroThreshold) : message.zeroThreshold;
                return object;
              };
              ExponentialHistogramDataPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ExponentialHistogramDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint";
              };
              ExponentialHistogramDataPoint.Buckets = (function() {
                function Buckets2(properties) {
                  this.bucketCounts = [];
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                Buckets2.prototype.offset = null;
                Buckets2.prototype.bucketCounts = $util.emptyArray;
                Buckets2.create = function create(properties) {
                  return new Buckets2(properties);
                };
                Buckets2.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                    writer.uint32(
                      /* id 1, wireType 0 =*/
                      8
                    ).sint32(message.offset);
                  if (message.bucketCounts != null && message.bucketCounts.length) {
                    writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork();
                    for (var i = 0; i < message.bucketCounts.length; ++i)
                      writer.uint64(message.bucketCounts[i]);
                    writer.ldelim();
                  }
                  return writer;
                };
                Buckets2.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                Buckets2.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.offset = reader.sint32();
                        break;
                      }
                      case 2: {
                        if (!(message.bucketCounts && message.bucketCounts.length))
                          message.bucketCounts = [];
                        if ((tag & 7) === 2) {
                          var end2 = reader.uint32() + reader.pos;
                          while (reader.pos < end2)
                            message.bucketCounts.push(reader.uint64());
                        } else
                          message.bucketCounts.push(reader.uint64());
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                Buckets2.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                Buckets2.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.offset != null && message.hasOwnProperty("offset")) {
                    if (!$util.isInteger(message.offset))
                      return "offset: integer expected";
                  }
                  if (message.bucketCounts != null && message.hasOwnProperty("bucketCounts")) {
                    if (!Array.isArray(message.bucketCounts))
                      return "bucketCounts: array expected";
                    for (var i = 0; i < message.bucketCounts.length; ++i)
                      if (!$util.isInteger(message.bucketCounts[i]) && !(message.bucketCounts[i] && $util.isInteger(message.bucketCounts[i].low) && $util.isInteger(message.bucketCounts[i].high)))
                        return "bucketCounts: integer|Long[] expected";
                  }
                  return null;
                };
                Buckets2.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets)
                    return object;
                  var message = new $root.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                  if (object.offset != null)
                    message.offset = object.offset | 0;
                  if (object.bucketCounts) {
                    if (!Array.isArray(object.bucketCounts))
                      throw TypeError(".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected");
                    message.bucketCounts = [];
                    for (var i = 0; i < object.bucketCounts.length; ++i)
                      if ($util.Long)
                        (message.bucketCounts[i] = $util.Long.fromValue(object.bucketCounts[i])).unsigned = true;
                      else if (typeof object.bucketCounts[i] === "string")
                        message.bucketCounts[i] = parseInt(object.bucketCounts[i], 10);
                      else if (typeof object.bucketCounts[i] === "number")
                        message.bucketCounts[i] = object.bucketCounts[i];
                      else if (typeof object.bucketCounts[i] === "object")
                        message.bucketCounts[i] = new $util.LongBits(object.bucketCounts[i].low >>> 0, object.bucketCounts[i].high >>> 0).toNumber(true);
                  }
                  return message;
                };
                Buckets2.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.arrays || options.defaults)
                    object.bucketCounts = [];
                  if (options.defaults)
                    object.offset = 0;
                  if (message.offset != null && message.hasOwnProperty("offset"))
                    object.offset = message.offset;
                  if (message.bucketCounts && message.bucketCounts.length) {
                    object.bucketCounts = [];
                    for (var j = 0; j < message.bucketCounts.length; ++j)
                      if (typeof message.bucketCounts[j] === "number")
                        object.bucketCounts[j] = options.longs === String ? String(message.bucketCounts[j]) : message.bucketCounts[j];
                      else
                        object.bucketCounts[j] = options.longs === String ? $util.Long.prototype.toString.call(message.bucketCounts[j]) : options.longs === Number ? new $util.LongBits(message.bucketCounts[j].low >>> 0, message.bucketCounts[j].high >>> 0).toNumber(true) : message.bucketCounts[j];
                  }
                  return object;
                };
                Buckets2.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                Buckets2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets";
                };
                return Buckets2;
              })();
              return ExponentialHistogramDataPoint;
            })();
            v1.SummaryDataPoint = (function() {
              function SummaryDataPoint(properties) {
                this.attributes = [];
                this.quantileValues = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              SummaryDataPoint.prototype.attributes = $util.emptyArray;
              SummaryDataPoint.prototype.startTimeUnixNano = null;
              SummaryDataPoint.prototype.timeUnixNano = null;
              SummaryDataPoint.prototype.count = null;
              SummaryDataPoint.prototype.sum = null;
              SummaryDataPoint.prototype.quantileValues = $util.emptyArray;
              SummaryDataPoint.prototype.flags = null;
              SummaryDataPoint.create = function create(properties) {
                return new SummaryDataPoint(properties);
              };
              SummaryDataPoint.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.startTimeUnixNano != null && Object.hasOwnProperty.call(message, "startTimeUnixNano"))
                  writer.uint32(
                    /* id 2, wireType 1 =*/
                    17
                  ).fixed64(message.startTimeUnixNano);
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(
                    /* id 3, wireType 1 =*/
                    25
                  ).fixed64(message.timeUnixNano);
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                  writer.uint32(
                    /* id 4, wireType 1 =*/
                    33
                  ).fixed64(message.count);
                if (message.sum != null && Object.hasOwnProperty.call(message, "sum"))
                  writer.uint32(
                    /* id 5, wireType 1 =*/
                    41
                  ).double(message.sum);
                if (message.quantileValues != null && message.quantileValues.length)
                  for (var i = 0; i < message.quantileValues.length; ++i)
                    $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(message.quantileValues[i], writer.uint32(
                      /* id 6, wireType 2 =*/
                      50
                    ).fork()).ldelim();
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 7, wireType 2 =*/
                      58
                    ).fork()).ldelim();
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(
                    /* id 8, wireType 0 =*/
                    64
                  ).uint32(message.flags);
                return writer;
              };
              SummaryDataPoint.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              SummaryDataPoint.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 7: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.startTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 3: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 4: {
                      message.count = reader.fixed64();
                      break;
                    }
                    case 5: {
                      message.sum = reader.double();
                      break;
                    }
                    case 6: {
                      if (!(message.quantileValues && message.quantileValues.length))
                        message.quantileValues = [];
                      message.quantileValues.push($root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(reader, reader.uint32()));
                      break;
                    }
                    case 8: {
                      message.flags = reader.uint32();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              SummaryDataPoint.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              SummaryDataPoint.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano")) {
                  if (!$util.isInteger(message.startTimeUnixNano) && !(message.startTimeUnixNano && $util.isInteger(message.startTimeUnixNano.low) && $util.isInteger(message.startTimeUnixNano.high)))
                    return "startTimeUnixNano: integer|Long expected";
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.count != null && message.hasOwnProperty("count")) {
                  if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
                }
                if (message.sum != null && message.hasOwnProperty("sum")) {
                  if (typeof message.sum !== "number")
                    return "sum: number expected";
                }
                if (message.quantileValues != null && message.hasOwnProperty("quantileValues")) {
                  if (!Array.isArray(message.quantileValues))
                    return "quantileValues: array expected";
                  for (var i = 0; i < message.quantileValues.length; ++i) {
                    var error = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(message.quantileValues[i]);
                    if (error)
                      return "quantileValues." + error;
                  }
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                return null;
              };
              SummaryDataPoint.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.SummaryDataPoint)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint();
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.startTimeUnixNano != null) {
                  if ($util.Long)
                    (message.startTimeUnixNano = $util.Long.fromValue(object.startTimeUnixNano)).unsigned = false;
                  else if (typeof object.startTimeUnixNano === "string")
                    message.startTimeUnixNano = parseInt(object.startTimeUnixNano, 10);
                  else if (typeof object.startTimeUnixNano === "number")
                    message.startTimeUnixNano = object.startTimeUnixNano;
                  else if (typeof object.startTimeUnixNano === "object")
                    message.startTimeUnixNano = new $util.LongBits(object.startTimeUnixNano.low >>> 0, object.startTimeUnixNano.high >>> 0).toNumber();
                }
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.count != null) {
                  if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                  else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                  else if (typeof object.count === "number")
                    message.count = object.count;
                  else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
                }
                if (object.sum != null)
                  message.sum = Number(object.sum);
                if (object.quantileValues) {
                  if (!Array.isArray(object.quantileValues))
                    throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected");
                  message.quantileValues = [];
                  for (var i = 0; i < object.quantileValues.length; ++i) {
                    if (typeof object.quantileValues[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected");
                    message.quantileValues[i] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(object.quantileValues[i]);
                  }
                }
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                return message;
              };
              SummaryDataPoint.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                  object.quantileValues = [];
                  object.attributes = [];
                }
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.startTimeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.count = options.longs === String ? "0" : 0;
                  object.sum = 0;
                  object.flags = 0;
                }
                if (message.startTimeUnixNano != null && message.hasOwnProperty("startTimeUnixNano"))
                  if (typeof message.startTimeUnixNano === "number")
                    object.startTimeUnixNano = options.longs === String ? String(message.startTimeUnixNano) : message.startTimeUnixNano;
                  else
                    object.startTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.startTimeUnixNano.low >>> 0, message.startTimeUnixNano.high >>> 0).toNumber() : message.startTimeUnixNano;
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.count != null && message.hasOwnProperty("count"))
                  if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                  else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
                if (message.sum != null && message.hasOwnProperty("sum"))
                  object.sum = options.json && !isFinite(message.sum) ? String(message.sum) : message.sum;
                if (message.quantileValues && message.quantileValues.length) {
                  object.quantileValues = [];
                  for (var j = 0; j < message.quantileValues.length; ++j)
                    object.quantileValues[j] = $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(message.quantileValues[j], options);
                }
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                return object;
              };
              SummaryDataPoint.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              SummaryDataPoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.SummaryDataPoint";
              };
              SummaryDataPoint.ValueAtQuantile = (function() {
                function ValueAtQuantile(properties) {
                  if (properties) {
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                      if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                  }
                }
                ValueAtQuantile.prototype.quantile = null;
                ValueAtQuantile.prototype.value = null;
                ValueAtQuantile.create = function create(properties) {
                  return new ValueAtQuantile(properties);
                };
                ValueAtQuantile.encode = function encode(message, writer) {
                  if (!writer)
                    writer = $Writer.create();
                  if (message.quantile != null && Object.hasOwnProperty.call(message, "quantile"))
                    writer.uint32(
                      /* id 1, wireType 1 =*/
                      9
                    ).double(message.quantile);
                  if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(
                      /* id 2, wireType 1 =*/
                      17
                    ).double(message.value);
                  return writer;
                };
                ValueAtQuantile.encodeDelimited = function encodeDelimited(message, writer) {
                  return this.encode(message, writer).ldelim();
                };
                ValueAtQuantile.decode = function decode(reader, length, error) {
                  if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                  var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                  while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                      break;
                    switch (tag >>> 3) {
                      case 1: {
                        message.quantile = reader.double();
                        break;
                      }
                      case 2: {
                        message.value = reader.double();
                        break;
                      }
                      default:
                        reader.skipType(tag & 7);
                        break;
                    }
                  }
                  return message;
                };
                ValueAtQuantile.decodeDelimited = function decodeDelimited(reader) {
                  if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                  return this.decode(reader, reader.uint32());
                };
                ValueAtQuantile.verify = function verify(message) {
                  if (typeof message !== "object" || message === null)
                    return "object expected";
                  if (message.quantile != null && message.hasOwnProperty("quantile")) {
                    if (typeof message.quantile !== "number")
                      return "quantile: number expected";
                  }
                  if (message.value != null && message.hasOwnProperty("value")) {
                    if (typeof message.value !== "number")
                      return "value: number expected";
                  }
                  return null;
                };
                ValueAtQuantile.fromObject = function fromObject(object) {
                  if (object instanceof $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile)
                    return object;
                  var message = new $root.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                  if (object.quantile != null)
                    message.quantile = Number(object.quantile);
                  if (object.value != null)
                    message.value = Number(object.value);
                  return message;
                };
                ValueAtQuantile.toObject = function toObject(message, options) {
                  if (!options)
                    options = {};
                  var object = {};
                  if (options.defaults) {
                    object.quantile = 0;
                    object.value = 0;
                  }
                  if (message.quantile != null && message.hasOwnProperty("quantile"))
                    object.quantile = options.json && !isFinite(message.quantile) ? String(message.quantile) : message.quantile;
                  if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                  return object;
                };
                ValueAtQuantile.prototype.toJSON = function toJSON() {
                  return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
                ValueAtQuantile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                  if (typeUrlPrefix === void 0) {
                    typeUrlPrefix = "type.googleapis.com";
                  }
                  return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile";
                };
                return ValueAtQuantile;
              })();
              return SummaryDataPoint;
            })();
            v1.Exemplar = (function() {
              function Exemplar(properties) {
                this.filteredAttributes = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              Exemplar.prototype.filteredAttributes = $util.emptyArray;
              Exemplar.prototype.timeUnixNano = null;
              Exemplar.prototype.asDouble = null;
              Exemplar.prototype.asInt = null;
              Exemplar.prototype.spanId = null;
              Exemplar.prototype.traceId = null;
              var $oneOfFields;
              Object.defineProperty(Exemplar.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["asDouble", "asInt"]),
                set: $util.oneOfSetter($oneOfFields)
              });
              Exemplar.create = function create(properties) {
                return new Exemplar(properties);
              };
              Exemplar.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(
                    /* id 2, wireType 1 =*/
                    17
                  ).fixed64(message.timeUnixNano);
                if (message.asDouble != null && Object.hasOwnProperty.call(message, "asDouble"))
                  writer.uint32(
                    /* id 3, wireType 1 =*/
                    25
                  ).double(message.asDouble);
                if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                  writer.uint32(
                    /* id 4, wireType 2 =*/
                    34
                  ).bytes(message.spanId);
                if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                  writer.uint32(
                    /* id 5, wireType 2 =*/
                    42
                  ).bytes(message.traceId);
                if (message.asInt != null && Object.hasOwnProperty.call(message, "asInt"))
                  writer.uint32(
                    /* id 6, wireType 1 =*/
                    49
                  ).sfixed64(message.asInt);
                if (message.filteredAttributes != null && message.filteredAttributes.length)
                  for (var i = 0; i < message.filteredAttributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.filteredAttributes[i], writer.uint32(
                      /* id 7, wireType 2 =*/
                      58
                    ).fork()).ldelim();
                return writer;
              };
              Exemplar.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              Exemplar.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.metrics.v1.Exemplar();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 7: {
                      if (!(message.filteredAttributes && message.filteredAttributes.length))
                        message.filteredAttributes = [];
                      message.filteredAttributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 2: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 3: {
                      message.asDouble = reader.double();
                      break;
                    }
                    case 6: {
                      message.asInt = reader.sfixed64();
                      break;
                    }
                    case 4: {
                      message.spanId = reader.bytes();
                      break;
                    }
                    case 5: {
                      message.traceId = reader.bytes();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              Exemplar.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              Exemplar.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                var properties = {};
                if (message.filteredAttributes != null && message.hasOwnProperty("filteredAttributes")) {
                  if (!Array.isArray(message.filteredAttributes))
                    return "filteredAttributes: array expected";
                  for (var i = 0; i < message.filteredAttributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.filteredAttributes[i]);
                    if (error)
                      return "filteredAttributes." + error;
                  }
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                  properties.value = 1;
                  if (typeof message.asDouble !== "number")
                    return "asDouble: number expected";
                }
                if (message.asInt != null && message.hasOwnProperty("asInt")) {
                  if (properties.value === 1)
                    return "value: multiple values";
                  properties.value = 1;
                  if (!$util.isInteger(message.asInt) && !(message.asInt && $util.isInteger(message.asInt.low) && $util.isInteger(message.asInt.high)))
                    return "asInt: integer|Long expected";
                }
                if (message.spanId != null && message.hasOwnProperty("spanId")) {
                  if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                    return "spanId: buffer expected";
                }
                if (message.traceId != null && message.hasOwnProperty("traceId")) {
                  if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                    return "traceId: buffer expected";
                }
                return null;
              };
              Exemplar.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.metrics.v1.Exemplar)
                  return object;
                var message = new $root.opentelemetry.proto.metrics.v1.Exemplar();
                if (object.filteredAttributes) {
                  if (!Array.isArray(object.filteredAttributes))
                    throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected");
                  message.filteredAttributes = [];
                  for (var i = 0; i < object.filteredAttributes.length; ++i) {
                    if (typeof object.filteredAttributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected");
                    message.filteredAttributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.filteredAttributes[i]);
                  }
                }
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.asDouble != null)
                  message.asDouble = Number(object.asDouble);
                if (object.asInt != null) {
                  if ($util.Long)
                    (message.asInt = $util.Long.fromValue(object.asInt)).unsigned = false;
                  else if (typeof object.asInt === "string")
                    message.asInt = parseInt(object.asInt, 10);
                  else if (typeof object.asInt === "number")
                    message.asInt = object.asInt;
                  else if (typeof object.asInt === "object")
                    message.asInt = new $util.LongBits(object.asInt.low >>> 0, object.asInt.high >>> 0).toNumber();
                }
                if (object.spanId != null) {
                  if (typeof object.spanId === "string")
                    $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                  else if (object.spanId.length >= 0)
                    message.spanId = object.spanId;
                }
                if (object.traceId != null) {
                  if (typeof object.traceId === "string")
                    $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                  else if (object.traceId.length >= 0)
                    message.traceId = object.traceId;
                }
                return message;
              };
              Exemplar.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.filteredAttributes = [];
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  if (options.bytes === String)
                    object.spanId = "";
                  else {
                    object.spanId = [];
                    if (options.bytes !== Array)
                      object.spanId = $util.newBuffer(object.spanId);
                  }
                  if (options.bytes === String)
                    object.traceId = "";
                  else {
                    object.traceId = [];
                    if (options.bytes !== Array)
                      object.traceId = $util.newBuffer(object.traceId);
                  }
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.asDouble != null && message.hasOwnProperty("asDouble")) {
                  object.asDouble = options.json && !isFinite(message.asDouble) ? String(message.asDouble) : message.asDouble;
                  if (options.oneofs)
                    object.value = "asDouble";
                }
                if (message.spanId != null && message.hasOwnProperty("spanId"))
                  object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                  object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                if (message.asInt != null && message.hasOwnProperty("asInt")) {
                  if (typeof message.asInt === "number")
                    object.asInt = options.longs === String ? String(message.asInt) : message.asInt;
                  else
                    object.asInt = options.longs === String ? $util.Long.prototype.toString.call(message.asInt) : options.longs === Number ? new $util.LongBits(message.asInt.low >>> 0, message.asInt.high >>> 0).toNumber() : message.asInt;
                  if (options.oneofs)
                    object.value = "asInt";
                }
                if (message.filteredAttributes && message.filteredAttributes.length) {
                  object.filteredAttributes = [];
                  for (var j = 0; j < message.filteredAttributes.length; ++j)
                    object.filteredAttributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.filteredAttributes[j], options);
                }
                return object;
              };
              Exemplar.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              Exemplar.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.metrics.v1.Exemplar";
              };
              return Exemplar;
            })();
            return v1;
          })();
          return metrics;
        })();
        proto.logs = (function() {
          var logs = {};
          logs.v1 = (function() {
            var v1 = {};
            v1.LogsData = (function() {
              function LogsData(properties) {
                this.resourceLogs = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              LogsData.prototype.resourceLogs = $util.emptyArray;
              LogsData.create = function create(properties) {
                return new LogsData(properties);
              };
              LogsData.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resourceLogs != null && message.resourceLogs.length)
                  for (var i = 0; i < message.resourceLogs.length; ++i)
                    $root.opentelemetry.proto.logs.v1.ResourceLogs.encode(message.resourceLogs[i], writer.uint32(
                      /* id 1, wireType 2 =*/
                      10
                    ).fork()).ldelim();
                return writer;
              };
              LogsData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              LogsData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.LogsData();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      if (!(message.resourceLogs && message.resourceLogs.length))
                        message.resourceLogs = [];
                      message.resourceLogs.push($root.opentelemetry.proto.logs.v1.ResourceLogs.decode(reader, reader.uint32()));
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              LogsData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              LogsData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resourceLogs != null && message.hasOwnProperty("resourceLogs")) {
                  if (!Array.isArray(message.resourceLogs))
                    return "resourceLogs: array expected";
                  for (var i = 0; i < message.resourceLogs.length; ++i) {
                    var error = $root.opentelemetry.proto.logs.v1.ResourceLogs.verify(message.resourceLogs[i]);
                    if (error)
                      return "resourceLogs." + error;
                  }
                }
                return null;
              };
              LogsData.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.logs.v1.LogsData)
                  return object;
                var message = new $root.opentelemetry.proto.logs.v1.LogsData();
                if (object.resourceLogs) {
                  if (!Array.isArray(object.resourceLogs))
                    throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                  message.resourceLogs = [];
                  for (var i = 0; i < object.resourceLogs.length; ++i) {
                    if (typeof object.resourceLogs[i] !== "object")
                      throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                    message.resourceLogs[i] = $root.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(object.resourceLogs[i]);
                  }
                }
                return message;
              };
              LogsData.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.resourceLogs = [];
                if (message.resourceLogs && message.resourceLogs.length) {
                  object.resourceLogs = [];
                  for (var j = 0; j < message.resourceLogs.length; ++j)
                    object.resourceLogs[j] = $root.opentelemetry.proto.logs.v1.ResourceLogs.toObject(message.resourceLogs[j], options);
                }
                return object;
              };
              LogsData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              LogsData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.logs.v1.LogsData";
              };
              return LogsData;
            })();
            v1.ResourceLogs = (function() {
              function ResourceLogs(properties) {
                this.scopeLogs = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ResourceLogs.prototype.resource = null;
              ResourceLogs.prototype.scopeLogs = $util.emptyArray;
              ResourceLogs.prototype.schemaUrl = null;
              ResourceLogs.create = function create(properties) {
                return new ResourceLogs(properties);
              };
              ResourceLogs.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.resource != null && Object.hasOwnProperty.call(message, "resource"))
                  $root.opentelemetry.proto.resource.v1.Resource.encode(message.resource, writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).fork()).ldelim();
                if (message.scopeLogs != null && message.scopeLogs.length)
                  for (var i = 0; i < message.scopeLogs.length; ++i)
                    $root.opentelemetry.proto.logs.v1.ScopeLogs.encode(message.scopeLogs[i], writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork()).ldelim();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.schemaUrl);
                return writer;
              };
              ResourceLogs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ResourceLogs.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.ResourceLogs();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.resource = $root.opentelemetry.proto.resource.v1.Resource.decode(reader, reader.uint32());
                      break;
                    }
                    case 2: {
                      if (!(message.scopeLogs && message.scopeLogs.length))
                        message.scopeLogs = [];
                      message.scopeLogs.push($root.opentelemetry.proto.logs.v1.ScopeLogs.decode(reader, reader.uint32()));
                      break;
                    }
                    case 3: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ResourceLogs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ResourceLogs.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.resource != null && message.hasOwnProperty("resource")) {
                  var error = $root.opentelemetry.proto.resource.v1.Resource.verify(message.resource);
                  if (error)
                    return "resource." + error;
                }
                if (message.scopeLogs != null && message.hasOwnProperty("scopeLogs")) {
                  if (!Array.isArray(message.scopeLogs))
                    return "scopeLogs: array expected";
                  for (var i = 0; i < message.scopeLogs.length; ++i) {
                    var error = $root.opentelemetry.proto.logs.v1.ScopeLogs.verify(message.scopeLogs[i]);
                    if (error)
                      return "scopeLogs." + error;
                  }
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                return null;
              };
              ResourceLogs.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.logs.v1.ResourceLogs)
                  return object;
                var message = new $root.opentelemetry.proto.logs.v1.ResourceLogs();
                if (object.resource != null) {
                  if (typeof object.resource !== "object")
                    throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                  message.resource = $root.opentelemetry.proto.resource.v1.Resource.fromObject(object.resource);
                }
                if (object.scopeLogs) {
                  if (!Array.isArray(object.scopeLogs))
                    throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                  message.scopeLogs = [];
                  for (var i = 0; i < object.scopeLogs.length; ++i) {
                    if (typeof object.scopeLogs[i] !== "object")
                      throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                    message.scopeLogs[i] = $root.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(object.scopeLogs[i]);
                  }
                }
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                return message;
              };
              ResourceLogs.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.scopeLogs = [];
                if (options.defaults) {
                  object.resource = null;
                  object.schemaUrl = "";
                }
                if (message.resource != null && message.hasOwnProperty("resource"))
                  object.resource = $root.opentelemetry.proto.resource.v1.Resource.toObject(message.resource, options);
                if (message.scopeLogs && message.scopeLogs.length) {
                  object.scopeLogs = [];
                  for (var j = 0; j < message.scopeLogs.length; ++j)
                    object.scopeLogs[j] = $root.opentelemetry.proto.logs.v1.ScopeLogs.toObject(message.scopeLogs[j], options);
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                return object;
              };
              ResourceLogs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ResourceLogs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.logs.v1.ResourceLogs";
              };
              return ResourceLogs;
            })();
            v1.ScopeLogs = (function() {
              function ScopeLogs(properties) {
                this.logRecords = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              ScopeLogs.prototype.scope = null;
              ScopeLogs.prototype.logRecords = $util.emptyArray;
              ScopeLogs.prototype.schemaUrl = null;
              ScopeLogs.create = function create(properties) {
                return new ScopeLogs(properties);
              };
              ScopeLogs.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                  $root.opentelemetry.proto.common.v1.InstrumentationScope.encode(message.scope, writer.uint32(
                    /* id 1, wireType 2 =*/
                    10
                  ).fork()).ldelim();
                if (message.logRecords != null && message.logRecords.length)
                  for (var i = 0; i < message.logRecords.length; ++i)
                    $root.opentelemetry.proto.logs.v1.LogRecord.encode(message.logRecords[i], writer.uint32(
                      /* id 2, wireType 2 =*/
                      18
                    ).fork()).ldelim();
                if (message.schemaUrl != null && Object.hasOwnProperty.call(message, "schemaUrl"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.schemaUrl);
                return writer;
              };
              ScopeLogs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              ScopeLogs.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.ScopeLogs();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.decode(reader, reader.uint32());
                      break;
                    }
                    case 2: {
                      if (!(message.logRecords && message.logRecords.length))
                        message.logRecords = [];
                      message.logRecords.push($root.opentelemetry.proto.logs.v1.LogRecord.decode(reader, reader.uint32()));
                      break;
                    }
                    case 3: {
                      message.schemaUrl = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              ScopeLogs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              ScopeLogs.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.scope != null && message.hasOwnProperty("scope")) {
                  var error = $root.opentelemetry.proto.common.v1.InstrumentationScope.verify(message.scope);
                  if (error)
                    return "scope." + error;
                }
                if (message.logRecords != null && message.hasOwnProperty("logRecords")) {
                  if (!Array.isArray(message.logRecords))
                    return "logRecords: array expected";
                  for (var i = 0; i < message.logRecords.length; ++i) {
                    var error = $root.opentelemetry.proto.logs.v1.LogRecord.verify(message.logRecords[i]);
                    if (error)
                      return "logRecords." + error;
                  }
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl")) {
                  if (!$util.isString(message.schemaUrl))
                    return "schemaUrl: string expected";
                }
                return null;
              };
              ScopeLogs.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.logs.v1.ScopeLogs)
                  return object;
                var message = new $root.opentelemetry.proto.logs.v1.ScopeLogs();
                if (object.scope != null) {
                  if (typeof object.scope !== "object")
                    throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                  message.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(object.scope);
                }
                if (object.logRecords) {
                  if (!Array.isArray(object.logRecords))
                    throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                  message.logRecords = [];
                  for (var i = 0; i < object.logRecords.length; ++i) {
                    if (typeof object.logRecords[i] !== "object")
                      throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                    message.logRecords[i] = $root.opentelemetry.proto.logs.v1.LogRecord.fromObject(object.logRecords[i]);
                  }
                }
                if (object.schemaUrl != null)
                  message.schemaUrl = String(object.schemaUrl);
                return message;
              };
              ScopeLogs.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.logRecords = [];
                if (options.defaults) {
                  object.scope = null;
                  object.schemaUrl = "";
                }
                if (message.scope != null && message.hasOwnProperty("scope"))
                  object.scope = $root.opentelemetry.proto.common.v1.InstrumentationScope.toObject(message.scope, options);
                if (message.logRecords && message.logRecords.length) {
                  object.logRecords = [];
                  for (var j = 0; j < message.logRecords.length; ++j)
                    object.logRecords[j] = $root.opentelemetry.proto.logs.v1.LogRecord.toObject(message.logRecords[j], options);
                }
                if (message.schemaUrl != null && message.hasOwnProperty("schemaUrl"))
                  object.schemaUrl = message.schemaUrl;
                return object;
              };
              ScopeLogs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              ScopeLogs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.logs.v1.ScopeLogs";
              };
              return ScopeLogs;
            })();
            v1.SeverityNumber = (function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "SEVERITY_NUMBER_UNSPECIFIED"] = 0;
              values[valuesById[1] = "SEVERITY_NUMBER_TRACE"] = 1;
              values[valuesById[2] = "SEVERITY_NUMBER_TRACE2"] = 2;
              values[valuesById[3] = "SEVERITY_NUMBER_TRACE3"] = 3;
              values[valuesById[4] = "SEVERITY_NUMBER_TRACE4"] = 4;
              values[valuesById[5] = "SEVERITY_NUMBER_DEBUG"] = 5;
              values[valuesById[6] = "SEVERITY_NUMBER_DEBUG2"] = 6;
              values[valuesById[7] = "SEVERITY_NUMBER_DEBUG3"] = 7;
              values[valuesById[8] = "SEVERITY_NUMBER_DEBUG4"] = 8;
              values[valuesById[9] = "SEVERITY_NUMBER_INFO"] = 9;
              values[valuesById[10] = "SEVERITY_NUMBER_INFO2"] = 10;
              values[valuesById[11] = "SEVERITY_NUMBER_INFO3"] = 11;
              values[valuesById[12] = "SEVERITY_NUMBER_INFO4"] = 12;
              values[valuesById[13] = "SEVERITY_NUMBER_WARN"] = 13;
              values[valuesById[14] = "SEVERITY_NUMBER_WARN2"] = 14;
              values[valuesById[15] = "SEVERITY_NUMBER_WARN3"] = 15;
              values[valuesById[16] = "SEVERITY_NUMBER_WARN4"] = 16;
              values[valuesById[17] = "SEVERITY_NUMBER_ERROR"] = 17;
              values[valuesById[18] = "SEVERITY_NUMBER_ERROR2"] = 18;
              values[valuesById[19] = "SEVERITY_NUMBER_ERROR3"] = 19;
              values[valuesById[20] = "SEVERITY_NUMBER_ERROR4"] = 20;
              values[valuesById[21] = "SEVERITY_NUMBER_FATAL"] = 21;
              values[valuesById[22] = "SEVERITY_NUMBER_FATAL2"] = 22;
              values[valuesById[23] = "SEVERITY_NUMBER_FATAL3"] = 23;
              values[valuesById[24] = "SEVERITY_NUMBER_FATAL4"] = 24;
              return values;
            })();
            v1.LogRecordFlags = (function() {
              var valuesById = {}, values = Object.create(valuesById);
              values[valuesById[0] = "LOG_RECORD_FLAGS_DO_NOT_USE"] = 0;
              values[valuesById[255] = "LOG_RECORD_FLAGS_TRACE_FLAGS_MASK"] = 255;
              return values;
            })();
            v1.LogRecord = (function() {
              function LogRecord(properties) {
                this.attributes = [];
                if (properties) {
                  for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                      this[keys[i]] = properties[keys[i]];
                }
              }
              LogRecord.prototype.timeUnixNano = null;
              LogRecord.prototype.observedTimeUnixNano = null;
              LogRecord.prototype.severityNumber = null;
              LogRecord.prototype.severityText = null;
              LogRecord.prototype.body = null;
              LogRecord.prototype.attributes = $util.emptyArray;
              LogRecord.prototype.droppedAttributesCount = null;
              LogRecord.prototype.flags = null;
              LogRecord.prototype.traceId = null;
              LogRecord.prototype.spanId = null;
              LogRecord.prototype.eventName = null;
              LogRecord.create = function create(properties) {
                return new LogRecord(properties);
              };
              LogRecord.encode = function encode(message, writer) {
                if (!writer)
                  writer = $Writer.create();
                if (message.timeUnixNano != null && Object.hasOwnProperty.call(message, "timeUnixNano"))
                  writer.uint32(
                    /* id 1, wireType 1 =*/
                    9
                  ).fixed64(message.timeUnixNano);
                if (message.severityNumber != null && Object.hasOwnProperty.call(message, "severityNumber"))
                  writer.uint32(
                    /* id 2, wireType 0 =*/
                    16
                  ).int32(message.severityNumber);
                if (message.severityText != null && Object.hasOwnProperty.call(message, "severityText"))
                  writer.uint32(
                    /* id 3, wireType 2 =*/
                    26
                  ).string(message.severityText);
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                  $root.opentelemetry.proto.common.v1.AnyValue.encode(message.body, writer.uint32(
                    /* id 5, wireType 2 =*/
                    42
                  ).fork()).ldelim();
                if (message.attributes != null && message.attributes.length)
                  for (var i = 0; i < message.attributes.length; ++i)
                    $root.opentelemetry.proto.common.v1.KeyValue.encode(message.attributes[i], writer.uint32(
                      /* id 6, wireType 2 =*/
                      50
                    ).fork()).ldelim();
                if (message.droppedAttributesCount != null && Object.hasOwnProperty.call(message, "droppedAttributesCount"))
                  writer.uint32(
                    /* id 7, wireType 0 =*/
                    56
                  ).uint32(message.droppedAttributesCount);
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                  writer.uint32(
                    /* id 8, wireType 5 =*/
                    69
                  ).fixed32(message.flags);
                if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                  writer.uint32(
                    /* id 9, wireType 2 =*/
                    74
                  ).bytes(message.traceId);
                if (message.spanId != null && Object.hasOwnProperty.call(message, "spanId"))
                  writer.uint32(
                    /* id 10, wireType 2 =*/
                    82
                  ).bytes(message.spanId);
                if (message.observedTimeUnixNano != null && Object.hasOwnProperty.call(message, "observedTimeUnixNano"))
                  writer.uint32(
                    /* id 11, wireType 1 =*/
                    89
                  ).fixed64(message.observedTimeUnixNano);
                if (message.eventName != null && Object.hasOwnProperty.call(message, "eventName"))
                  writer.uint32(
                    /* id 12, wireType 2 =*/
                    98
                  ).string(message.eventName);
                return writer;
              };
              LogRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
              };
              LogRecord.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                  reader = $Reader.create(reader);
                var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.opentelemetry.proto.logs.v1.LogRecord();
                while (reader.pos < end) {
                  var tag = reader.uint32();
                  if (tag === error)
                    break;
                  switch (tag >>> 3) {
                    case 1: {
                      message.timeUnixNano = reader.fixed64();
                      break;
                    }
                    case 11: {
                      message.observedTimeUnixNano = reader.fixed64();
                      break;
                    }
                    case 2: {
                      message.severityNumber = reader.int32();
                      break;
                    }
                    case 3: {
                      message.severityText = reader.string();
                      break;
                    }
                    case 5: {
                      message.body = $root.opentelemetry.proto.common.v1.AnyValue.decode(reader, reader.uint32());
                      break;
                    }
                    case 6: {
                      if (!(message.attributes && message.attributes.length))
                        message.attributes = [];
                      message.attributes.push($root.opentelemetry.proto.common.v1.KeyValue.decode(reader, reader.uint32()));
                      break;
                    }
                    case 7: {
                      message.droppedAttributesCount = reader.uint32();
                      break;
                    }
                    case 8: {
                      message.flags = reader.fixed32();
                      break;
                    }
                    case 9: {
                      message.traceId = reader.bytes();
                      break;
                    }
                    case 10: {
                      message.spanId = reader.bytes();
                      break;
                    }
                    case 12: {
                      message.eventName = reader.string();
                      break;
                    }
                    default:
                      reader.skipType(tag & 7);
                      break;
                  }
                }
                return message;
              };
              LogRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                  reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
              };
              LogRecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                  return "object expected";
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano")) {
                  if (!$util.isInteger(message.timeUnixNano) && !(message.timeUnixNano && $util.isInteger(message.timeUnixNano.low) && $util.isInteger(message.timeUnixNano.high)))
                    return "timeUnixNano: integer|Long expected";
                }
                if (message.observedTimeUnixNano != null && message.hasOwnProperty("observedTimeUnixNano")) {
                  if (!$util.isInteger(message.observedTimeUnixNano) && !(message.observedTimeUnixNano && $util.isInteger(message.observedTimeUnixNano.low) && $util.isInteger(message.observedTimeUnixNano.high)))
                    return "observedTimeUnixNano: integer|Long expected";
                }
                if (message.severityNumber != null && message.hasOwnProperty("severityNumber"))
                  switch (message.severityNumber) {
                    default:
                      return "severityNumber: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                      break;
                  }
                if (message.severityText != null && message.hasOwnProperty("severityText")) {
                  if (!$util.isString(message.severityText))
                    return "severityText: string expected";
                }
                if (message.body != null && message.hasOwnProperty("body")) {
                  var error = $root.opentelemetry.proto.common.v1.AnyValue.verify(message.body);
                  if (error)
                    return "body." + error;
                }
                if (message.attributes != null && message.hasOwnProperty("attributes")) {
                  if (!Array.isArray(message.attributes))
                    return "attributes: array expected";
                  for (var i = 0; i < message.attributes.length; ++i) {
                    var error = $root.opentelemetry.proto.common.v1.KeyValue.verify(message.attributes[i]);
                    if (error)
                      return "attributes." + error;
                  }
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount")) {
                  if (!$util.isInteger(message.droppedAttributesCount))
                    return "droppedAttributesCount: integer expected";
                }
                if (message.flags != null && message.hasOwnProperty("flags")) {
                  if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
                }
                if (message.traceId != null && message.hasOwnProperty("traceId")) {
                  if (!(message.traceId && typeof message.traceId.length === "number" || $util.isString(message.traceId)))
                    return "traceId: buffer expected";
                }
                if (message.spanId != null && message.hasOwnProperty("spanId")) {
                  if (!(message.spanId && typeof message.spanId.length === "number" || $util.isString(message.spanId)))
                    return "spanId: buffer expected";
                }
                if (message.eventName != null && message.hasOwnProperty("eventName")) {
                  if (!$util.isString(message.eventName))
                    return "eventName: string expected";
                }
                return null;
              };
              LogRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.opentelemetry.proto.logs.v1.LogRecord)
                  return object;
                var message = new $root.opentelemetry.proto.logs.v1.LogRecord();
                if (object.timeUnixNano != null) {
                  if ($util.Long)
                    (message.timeUnixNano = $util.Long.fromValue(object.timeUnixNano)).unsigned = false;
                  else if (typeof object.timeUnixNano === "string")
                    message.timeUnixNano = parseInt(object.timeUnixNano, 10);
                  else if (typeof object.timeUnixNano === "number")
                    message.timeUnixNano = object.timeUnixNano;
                  else if (typeof object.timeUnixNano === "object")
                    message.timeUnixNano = new $util.LongBits(object.timeUnixNano.low >>> 0, object.timeUnixNano.high >>> 0).toNumber();
                }
                if (object.observedTimeUnixNano != null) {
                  if ($util.Long)
                    (message.observedTimeUnixNano = $util.Long.fromValue(object.observedTimeUnixNano)).unsigned = false;
                  else if (typeof object.observedTimeUnixNano === "string")
                    message.observedTimeUnixNano = parseInt(object.observedTimeUnixNano, 10);
                  else if (typeof object.observedTimeUnixNano === "number")
                    message.observedTimeUnixNano = object.observedTimeUnixNano;
                  else if (typeof object.observedTimeUnixNano === "object")
                    message.observedTimeUnixNano = new $util.LongBits(object.observedTimeUnixNano.low >>> 0, object.observedTimeUnixNano.high >>> 0).toNumber();
                }
                switch (object.severityNumber) {
                  default:
                    if (typeof object.severityNumber === "number") {
                      message.severityNumber = object.severityNumber;
                      break;
                    }
                    break;
                  case "SEVERITY_NUMBER_UNSPECIFIED":
                  case 0:
                    message.severityNumber = 0;
                    break;
                  case "SEVERITY_NUMBER_TRACE":
                  case 1:
                    message.severityNumber = 1;
                    break;
                  case "SEVERITY_NUMBER_TRACE2":
                  case 2:
                    message.severityNumber = 2;
                    break;
                  case "SEVERITY_NUMBER_TRACE3":
                  case 3:
                    message.severityNumber = 3;
                    break;
                  case "SEVERITY_NUMBER_TRACE4":
                  case 4:
                    message.severityNumber = 4;
                    break;
                  case "SEVERITY_NUMBER_DEBUG":
                  case 5:
                    message.severityNumber = 5;
                    break;
                  case "SEVERITY_NUMBER_DEBUG2":
                  case 6:
                    message.severityNumber = 6;
                    break;
                  case "SEVERITY_NUMBER_DEBUG3":
                  case 7:
                    message.severityNumber = 7;
                    break;
                  case "SEVERITY_NUMBER_DEBUG4":
                  case 8:
                    message.severityNumber = 8;
                    break;
                  case "SEVERITY_NUMBER_INFO":
                  case 9:
                    message.severityNumber = 9;
                    break;
                  case "SEVERITY_NUMBER_INFO2":
                  case 10:
                    message.severityNumber = 10;
                    break;
                  case "SEVERITY_NUMBER_INFO3":
                  case 11:
                    message.severityNumber = 11;
                    break;
                  case "SEVERITY_NUMBER_INFO4":
                  case 12:
                    message.severityNumber = 12;
                    break;
                  case "SEVERITY_NUMBER_WARN":
                  case 13:
                    message.severityNumber = 13;
                    break;
                  case "SEVERITY_NUMBER_WARN2":
                  case 14:
                    message.severityNumber = 14;
                    break;
                  case "SEVERITY_NUMBER_WARN3":
                  case 15:
                    message.severityNumber = 15;
                    break;
                  case "SEVERITY_NUMBER_WARN4":
                  case 16:
                    message.severityNumber = 16;
                    break;
                  case "SEVERITY_NUMBER_ERROR":
                  case 17:
                    message.severityNumber = 17;
                    break;
                  case "SEVERITY_NUMBER_ERROR2":
                  case 18:
                    message.severityNumber = 18;
                    break;
                  case "SEVERITY_NUMBER_ERROR3":
                  case 19:
                    message.severityNumber = 19;
                    break;
                  case "SEVERITY_NUMBER_ERROR4":
                  case 20:
                    message.severityNumber = 20;
                    break;
                  case "SEVERITY_NUMBER_FATAL":
                  case 21:
                    message.severityNumber = 21;
                    break;
                  case "SEVERITY_NUMBER_FATAL2":
                  case 22:
                    message.severityNumber = 22;
                    break;
                  case "SEVERITY_NUMBER_FATAL3":
                  case 23:
                    message.severityNumber = 23;
                    break;
                  case "SEVERITY_NUMBER_FATAL4":
                  case 24:
                    message.severityNumber = 24;
                    break;
                }
                if (object.severityText != null)
                  message.severityText = String(object.severityText);
                if (object.body != null) {
                  if (typeof object.body !== "object")
                    throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                  message.body = $root.opentelemetry.proto.common.v1.AnyValue.fromObject(object.body);
                }
                if (object.attributes) {
                  if (!Array.isArray(object.attributes))
                    throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                  message.attributes = [];
                  for (var i = 0; i < object.attributes.length; ++i) {
                    if (typeof object.attributes[i] !== "object")
                      throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                    message.attributes[i] = $root.opentelemetry.proto.common.v1.KeyValue.fromObject(object.attributes[i]);
                  }
                }
                if (object.droppedAttributesCount != null)
                  message.droppedAttributesCount = object.droppedAttributesCount >>> 0;
                if (object.flags != null)
                  message.flags = object.flags >>> 0;
                if (object.traceId != null) {
                  if (typeof object.traceId === "string")
                    $util.base64.decode(object.traceId, message.traceId = $util.newBuffer($util.base64.length(object.traceId)), 0);
                  else if (object.traceId.length >= 0)
                    message.traceId = object.traceId;
                }
                if (object.spanId != null) {
                  if (typeof object.spanId === "string")
                    $util.base64.decode(object.spanId, message.spanId = $util.newBuffer($util.base64.length(object.spanId)), 0);
                  else if (object.spanId.length >= 0)
                    message.spanId = object.spanId;
                }
                if (object.eventName != null)
                  message.eventName = String(object.eventName);
                return message;
              };
              LogRecord.toObject = function toObject(message, options) {
                if (!options)
                  options = {};
                var object = {};
                if (options.arrays || options.defaults)
                  object.attributes = [];
                if (options.defaults) {
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.timeUnixNano = options.longs === String ? "0" : 0;
                  object.severityNumber = options.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0;
                  object.severityText = "";
                  object.body = null;
                  object.droppedAttributesCount = 0;
                  object.flags = 0;
                  if (options.bytes === String)
                    object.traceId = "";
                  else {
                    object.traceId = [];
                    if (options.bytes !== Array)
                      object.traceId = $util.newBuffer(object.traceId);
                  }
                  if (options.bytes === String)
                    object.spanId = "";
                  else {
                    object.spanId = [];
                    if (options.bytes !== Array)
                      object.spanId = $util.newBuffer(object.spanId);
                  }
                  if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.observedTimeUnixNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                  } else
                    object.observedTimeUnixNano = options.longs === String ? "0" : 0;
                  object.eventName = "";
                }
                if (message.timeUnixNano != null && message.hasOwnProperty("timeUnixNano"))
                  if (typeof message.timeUnixNano === "number")
                    object.timeUnixNano = options.longs === String ? String(message.timeUnixNano) : message.timeUnixNano;
                  else
                    object.timeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixNano) : options.longs === Number ? new $util.LongBits(message.timeUnixNano.low >>> 0, message.timeUnixNano.high >>> 0).toNumber() : message.timeUnixNano;
                if (message.severityNumber != null && message.hasOwnProperty("severityNumber"))
                  object.severityNumber = options.enums === String ? $root.opentelemetry.proto.logs.v1.SeverityNumber[message.severityNumber] === void 0 ? message.severityNumber : $root.opentelemetry.proto.logs.v1.SeverityNumber[message.severityNumber] : message.severityNumber;
                if (message.severityText != null && message.hasOwnProperty("severityText"))
                  object.severityText = message.severityText;
                if (message.body != null && message.hasOwnProperty("body"))
                  object.body = $root.opentelemetry.proto.common.v1.AnyValue.toObject(message.body, options);
                if (message.attributes && message.attributes.length) {
                  object.attributes = [];
                  for (var j = 0; j < message.attributes.length; ++j)
                    object.attributes[j] = $root.opentelemetry.proto.common.v1.KeyValue.toObject(message.attributes[j], options);
                }
                if (message.droppedAttributesCount != null && message.hasOwnProperty("droppedAttributesCount"))
                  object.droppedAttributesCount = message.droppedAttributesCount;
                if (message.flags != null && message.hasOwnProperty("flags"))
                  object.flags = message.flags;
                if (message.traceId != null && message.hasOwnProperty("traceId"))
                  object.traceId = options.bytes === String ? $util.base64.encode(message.traceId, 0, message.traceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.traceId) : message.traceId;
                if (message.spanId != null && message.hasOwnProperty("spanId"))
                  object.spanId = options.bytes === String ? $util.base64.encode(message.spanId, 0, message.spanId.length) : options.bytes === Array ? Array.prototype.slice.call(message.spanId) : message.spanId;
                if (message.observedTimeUnixNano != null && message.hasOwnProperty("observedTimeUnixNano"))
                  if (typeof message.observedTimeUnixNano === "number")
                    object.observedTimeUnixNano = options.longs === String ? String(message.observedTimeUnixNano) : message.observedTimeUnixNano;
                  else
                    object.observedTimeUnixNano = options.longs === String ? $util.Long.prototype.toString.call(message.observedTimeUnixNano) : options.longs === Number ? new $util.LongBits(message.observedTimeUnixNano.low >>> 0, message.observedTimeUnixNano.high >>> 0).toNumber() : message.observedTimeUnixNano;
                if (message.eventName != null && message.hasOwnProperty("eventName"))
                  object.eventName = message.eventName;
                return object;
              };
              LogRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
              };
              LogRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === void 0) {
                  typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/opentelemetry.proto.logs.v1.LogRecord";
              };
              return LogRecord;
            })();
            return v1;
          })();
          return logs;
        })();
        return proto;
      })();
      return opentelemetry4;
    })();
    module2.exports = $root;
  }
});

// node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js
var SUPPRESS_TRACING_KEY = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
function suppressTracing(context2) {
  return context2.setValue(SUPPRESS_TRACING_KEY, true);
}
function isTracingSuppressed(context2) {
  return context2.getValue(SUPPRESS_TRACING_KEY) === true;
}

// node_modules/@opentelemetry/core/build/esm/baggage/constants.js
var BAGGAGE_KEY_PAIR_SEPARATOR = "=";
var BAGGAGE_PROPERTIES_SEPARATOR = ";";
var BAGGAGE_ITEMS_SEPARATOR = ",";
var BAGGAGE_HEADER = "baggage";
var BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
var BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
var BAGGAGE_MAX_TOTAL_LENGTH = 8192;

// node_modules/@opentelemetry/core/build/esm/baggage/utils.js
function serializeKeyPairs(keyPairs) {
  return keyPairs.reduce((hValue, current) => {
    const value = `${hValue}${hValue !== "" ? BAGGAGE_ITEMS_SEPARATOR : ""}${current}`;
    return value.length > BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
  }, "");
}
function getKeyPairs(baggage) {
  return baggage.getAllEntries().map(([key, value]) => {
    let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
    if (value.metadata !== void 0) {
      entry += BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
    }
    return entry;
  });
}
function parsePairKeyValue(entry) {
  if (!entry)
    return;
  const metadataSeparatorIndex = entry.indexOf(BAGGAGE_PROPERTIES_SEPARATOR);
  const keyPairPart = metadataSeparatorIndex === -1 ? entry : entry.substring(0, metadataSeparatorIndex);
  const separatorIndex = keyPairPart.indexOf(BAGGAGE_KEY_PAIR_SEPARATOR);
  if (separatorIndex <= 0)
    return;
  const rawKey = keyPairPart.substring(0, separatorIndex).trim();
  const rawValue = keyPairPart.substring(separatorIndex + 1).trim();
  if (!rawKey || !rawValue)
    return;
  let key;
  let value;
  try {
    key = decodeURIComponent(rawKey);
    value = decodeURIComponent(rawValue);
  } catch {
    return;
  }
  let metadata;
  if (metadataSeparatorIndex !== -1 && metadataSeparatorIndex < entry.length - 1) {
    const metadataString = entry.substring(metadataSeparatorIndex + 1);
    metadata = baggageEntryMetadataFromString(metadataString);
  }
  return { key, value, metadata };
}

// node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js
var W3CBaggagePropagator = class {
  inject(context2, carrier, setter) {
    const baggage = propagation.getBaggage(context2);
    if (!baggage || isTracingSuppressed(context2))
      return;
    const keyPairs = getKeyPairs(baggage).filter((pair) => {
      return pair.length <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
    }).slice(0, BAGGAGE_MAX_NAME_VALUE_PAIRS);
    const headerValue = serializeKeyPairs(keyPairs);
    if (headerValue.length > 0) {
      setter.set(carrier, BAGGAGE_HEADER, headerValue);
    }
  }
  extract(context2, carrier, getter) {
    const headerValue = getter.get(carrier, BAGGAGE_HEADER);
    const baggageString = Array.isArray(headerValue) ? headerValue.join(BAGGAGE_ITEMS_SEPARATOR) : headerValue;
    if (!baggageString)
      return context2;
    const baggage = {};
    if (baggageString.length === 0) {
      return context2;
    }
    const pairs = baggageString.split(BAGGAGE_ITEMS_SEPARATOR);
    pairs.forEach((entry) => {
      const keyPair = parsePairKeyValue(entry);
      if (keyPair) {
        const baggageEntry = { value: keyPair.value };
        if (keyPair.metadata) {
          baggageEntry.metadata = keyPair.metadata;
        }
        baggage[keyPair.key] = baggageEntry;
      }
    });
    if (Object.entries(baggage).length === 0) {
      return context2;
    }
    return propagation.setBaggage(context2, propagation.createBaggage(baggage));
  }
  fields() {
    return [BAGGAGE_HEADER];
  }
};

// node_modules/@opentelemetry/core/build/esm/common/attributes.js
function sanitizeAttributes(attributes) {
  const out = {};
  if (typeof attributes !== "object" || attributes == null) {
    return out;
  }
  for (const key in attributes) {
    if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
      continue;
    }
    if (!isAttributeKey(key)) {
      diag.warn(`Invalid attribute key: ${key}`);
      continue;
    }
    const val = attributes[key];
    if (!isAttributeValue(val)) {
      diag.warn(`Invalid attribute value set for key: ${key}`);
      continue;
    }
    if (Array.isArray(val)) {
      out[key] = val.slice();
    } else {
      out[key] = val;
    }
  }
  return out;
}
function isAttributeKey(key) {
  return typeof key === "string" && key !== "";
}
function isAttributeValue(val) {
  if (val == null) {
    return true;
  }
  if (Array.isArray(val)) {
    return isHomogeneousAttributeValueArray(val);
  }
  return isValidPrimitiveAttributeValueType(typeof val);
}
function isHomogeneousAttributeValueArray(arr) {
  let type;
  for (const element of arr) {
    if (element == null)
      continue;
    const elementType = typeof element;
    if (elementType === type) {
      continue;
    }
    if (!type) {
      if (isValidPrimitiveAttributeValueType(elementType)) {
        type = elementType;
        continue;
      }
      return false;
    }
    return false;
  }
  return true;
}
function isValidPrimitiveAttributeValueType(valType) {
  switch (valType) {
    case "number":
    case "boolean":
    case "string":
      return true;
  }
  return false;
}

// node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js
function loggingErrorHandler() {
  return (ex) => {
    diag.error(stringifyException(ex));
  };
}
function stringifyException(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException(ex));
  }
}
function flattenException(ex) {
  const result = {};
  let current = ex;
  while (current !== null) {
    Object.getOwnPropertyNames(current).forEach((propertyName) => {
      if (result[propertyName])
        return;
      const value = current[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current = Object.getPrototypeOf(current);
  }
  return result;
}

// node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js
var delegateHandler = loggingErrorHandler();
function globalErrorHandler(ex) {
  try {
    delegateHandler(ex);
  } catch {
  }
}

// node_modules/@opentelemetry/core/build/esm/platform/node/environment.js
import { inspect } from "util";
function getNumberFromEnv(key) {
  const raw = process.env[key];
  if (raw == null || raw.trim() === "") {
    return void 0;
  }
  const value = Number(raw);
  if (isNaN(value)) {
    diag.warn(`Unknown value ${inspect(raw)} for ${key}, expected a number, using defaults`);
    return void 0;
  }
  return value;
}
function getStringFromEnv(key) {
  const raw = process.env[key];
  if (raw == null || raw.trim() === "") {
    return void 0;
  }
  return raw;
}

// node_modules/@opentelemetry/core/build/esm/version.js
var VERSION = "2.5.1";

// node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js
function createConstMap(values) {
  let res = {};
  const len = values.length;
  for (let lp = 0; lp < len; lp++) {
    const val = values[lp];
    if (val) {
      res[String(val).toUpperCase().replace(/[-.]/g, "_")] = val;
    }
  }
  return res;
}

// node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js
var TMP_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
var TMP_DB_SYSTEM = "db.system";
var TMP_DB_CONNECTION_STRING = "db.connection_string";
var TMP_DB_USER = "db.user";
var TMP_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
var TMP_DB_NAME = "db.name";
var TMP_DB_STATEMENT = "db.statement";
var TMP_DB_OPERATION = "db.operation";
var TMP_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
var TMP_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
var TMP_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
var TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
var TMP_DB_CASSANDRA_TABLE = "db.cassandra.table";
var TMP_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
var TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
var TMP_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
var TMP_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
var TMP_DB_HBASE_NAMESPACE = "db.hbase.namespace";
var TMP_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
var TMP_DB_MONGODB_COLLECTION = "db.mongodb.collection";
var TMP_DB_SQL_TABLE = "db.sql.table";
var TMP_EXCEPTION_TYPE = "exception.type";
var TMP_EXCEPTION_MESSAGE = "exception.message";
var TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
var TMP_EXCEPTION_ESCAPED = "exception.escaped";
var TMP_FAAS_TRIGGER = "faas.trigger";
var TMP_FAAS_EXECUTION = "faas.execution";
var TMP_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
var TMP_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
var TMP_FAAS_DOCUMENT_TIME = "faas.document.time";
var TMP_FAAS_DOCUMENT_NAME = "faas.document.name";
var TMP_FAAS_TIME = "faas.time";
var TMP_FAAS_CRON = "faas.cron";
var TMP_FAAS_COLDSTART = "faas.coldstart";
var TMP_FAAS_INVOKED_NAME = "faas.invoked_name";
var TMP_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
var TMP_FAAS_INVOKED_REGION = "faas.invoked_region";
var TMP_NET_TRANSPORT = "net.transport";
var TMP_NET_PEER_IP = "net.peer.ip";
var TMP_NET_PEER_PORT = "net.peer.port";
var TMP_NET_PEER_NAME = "net.peer.name";
var TMP_NET_HOST_IP = "net.host.ip";
var TMP_NET_HOST_PORT = "net.host.port";
var TMP_NET_HOST_NAME = "net.host.name";
var TMP_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
var TMP_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
var TMP_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
var TMP_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
var TMP_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
var TMP_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
var TMP_PEER_SERVICE = "peer.service";
var TMP_ENDUSER_ID = "enduser.id";
var TMP_ENDUSER_ROLE = "enduser.role";
var TMP_ENDUSER_SCOPE = "enduser.scope";
var TMP_THREAD_ID = "thread.id";
var TMP_THREAD_NAME = "thread.name";
var TMP_CODE_FUNCTION = "code.function";
var TMP_CODE_NAMESPACE = "code.namespace";
var TMP_CODE_FILEPATH = "code.filepath";
var TMP_CODE_LINENO = "code.lineno";
var TMP_HTTP_METHOD = "http.method";
var TMP_HTTP_URL = "http.url";
var TMP_HTTP_TARGET = "http.target";
var TMP_HTTP_HOST = "http.host";
var TMP_HTTP_SCHEME = "http.scheme";
var TMP_HTTP_STATUS_CODE = "http.status_code";
var TMP_HTTP_FLAVOR = "http.flavor";
var TMP_HTTP_USER_AGENT = "http.user_agent";
var TMP_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
var TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
var TMP_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
var TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
var TMP_HTTP_SERVER_NAME = "http.server_name";
var TMP_HTTP_ROUTE = "http.route";
var TMP_HTTP_CLIENT_IP = "http.client_ip";
var TMP_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
var TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
var TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
var TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
var TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
var TMP_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
var TMP_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
var TMP_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
var TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
var TMP_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
var TMP_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
var TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
var TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
var TMP_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
var TMP_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
var TMP_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
var TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
var TMP_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
var TMP_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
var TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
var TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
var TMP_MESSAGING_SYSTEM = "messaging.system";
var TMP_MESSAGING_DESTINATION = "messaging.destination";
var TMP_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
var TMP_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
var TMP_MESSAGING_PROTOCOL = "messaging.protocol";
var TMP_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
var TMP_MESSAGING_URL = "messaging.url";
var TMP_MESSAGING_MESSAGE_ID = "messaging.message_id";
var TMP_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
var TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
var TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
var TMP_MESSAGING_OPERATION = "messaging.operation";
var TMP_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
var TMP_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
var TMP_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
var TMP_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
var TMP_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
var TMP_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
var TMP_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
var TMP_RPC_SYSTEM = "rpc.system";
var TMP_RPC_SERVICE = "rpc.service";
var TMP_RPC_METHOD = "rpc.method";
var TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
var TMP_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
var TMP_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
var TMP_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
var TMP_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
var TMP_MESSAGE_TYPE = "message.type";
var TMP_MESSAGE_ID = "message.id";
var TMP_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
var TMP_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
var SemanticAttributes = createConstMap([
  TMP_AWS_LAMBDA_INVOKED_ARN,
  TMP_DB_SYSTEM,
  TMP_DB_CONNECTION_STRING,
  TMP_DB_USER,
  TMP_DB_JDBC_DRIVER_CLASSNAME,
  TMP_DB_NAME,
  TMP_DB_STATEMENT,
  TMP_DB_OPERATION,
  TMP_DB_MSSQL_INSTANCE_NAME,
  TMP_DB_CASSANDRA_KEYSPACE,
  TMP_DB_CASSANDRA_PAGE_SIZE,
  TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
  TMP_DB_CASSANDRA_TABLE,
  TMP_DB_CASSANDRA_IDEMPOTENCE,
  TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
  TMP_DB_CASSANDRA_COORDINATOR_ID,
  TMP_DB_CASSANDRA_COORDINATOR_DC,
  TMP_DB_HBASE_NAMESPACE,
  TMP_DB_REDIS_DATABASE_INDEX,
  TMP_DB_MONGODB_COLLECTION,
  TMP_DB_SQL_TABLE,
  TMP_EXCEPTION_TYPE,
  TMP_EXCEPTION_MESSAGE,
  TMP_EXCEPTION_STACKTRACE,
  TMP_EXCEPTION_ESCAPED,
  TMP_FAAS_TRIGGER,
  TMP_FAAS_EXECUTION,
  TMP_FAAS_DOCUMENT_COLLECTION,
  TMP_FAAS_DOCUMENT_OPERATION,
  TMP_FAAS_DOCUMENT_TIME,
  TMP_FAAS_DOCUMENT_NAME,
  TMP_FAAS_TIME,
  TMP_FAAS_CRON,
  TMP_FAAS_COLDSTART,
  TMP_FAAS_INVOKED_NAME,
  TMP_FAAS_INVOKED_PROVIDER,
  TMP_FAAS_INVOKED_REGION,
  TMP_NET_TRANSPORT,
  TMP_NET_PEER_IP,
  TMP_NET_PEER_PORT,
  TMP_NET_PEER_NAME,
  TMP_NET_HOST_IP,
  TMP_NET_HOST_PORT,
  TMP_NET_HOST_NAME,
  TMP_NET_HOST_CONNECTION_TYPE,
  TMP_NET_HOST_CONNECTION_SUBTYPE,
  TMP_NET_HOST_CARRIER_NAME,
  TMP_NET_HOST_CARRIER_MCC,
  TMP_NET_HOST_CARRIER_MNC,
  TMP_NET_HOST_CARRIER_ICC,
  TMP_PEER_SERVICE,
  TMP_ENDUSER_ID,
  TMP_ENDUSER_ROLE,
  TMP_ENDUSER_SCOPE,
  TMP_THREAD_ID,
  TMP_THREAD_NAME,
  TMP_CODE_FUNCTION,
  TMP_CODE_NAMESPACE,
  TMP_CODE_FILEPATH,
  TMP_CODE_LINENO,
  TMP_HTTP_METHOD,
  TMP_HTTP_URL,
  TMP_HTTP_TARGET,
  TMP_HTTP_HOST,
  TMP_HTTP_SCHEME,
  TMP_HTTP_STATUS_CODE,
  TMP_HTTP_FLAVOR,
  TMP_HTTP_USER_AGENT,
  TMP_HTTP_REQUEST_CONTENT_LENGTH,
  TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
  TMP_HTTP_RESPONSE_CONTENT_LENGTH,
  TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
  TMP_HTTP_SERVER_NAME,
  TMP_HTTP_ROUTE,
  TMP_HTTP_CLIENT_IP,
  TMP_AWS_DYNAMODB_TABLE_NAMES,
  TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
  TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
  TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
  TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
  TMP_AWS_DYNAMODB_CONSISTENT_READ,
  TMP_AWS_DYNAMODB_PROJECTION,
  TMP_AWS_DYNAMODB_LIMIT,
  TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
  TMP_AWS_DYNAMODB_INDEX_NAME,
  TMP_AWS_DYNAMODB_SELECT,
  TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
  TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
  TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
  TMP_AWS_DYNAMODB_TABLE_COUNT,
  TMP_AWS_DYNAMODB_SCAN_FORWARD,
  TMP_AWS_DYNAMODB_SEGMENT,
  TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
  TMP_AWS_DYNAMODB_COUNT,
  TMP_AWS_DYNAMODB_SCANNED_COUNT,
  TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
  TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
  TMP_MESSAGING_SYSTEM,
  TMP_MESSAGING_DESTINATION,
  TMP_MESSAGING_DESTINATION_KIND,
  TMP_MESSAGING_TEMP_DESTINATION,
  TMP_MESSAGING_PROTOCOL,
  TMP_MESSAGING_PROTOCOL_VERSION,
  TMP_MESSAGING_URL,
  TMP_MESSAGING_MESSAGE_ID,
  TMP_MESSAGING_CONVERSATION_ID,
  TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
  TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
  TMP_MESSAGING_OPERATION,
  TMP_MESSAGING_CONSUMER_ID,
  TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
  TMP_MESSAGING_KAFKA_MESSAGE_KEY,
  TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
  TMP_MESSAGING_KAFKA_CLIENT_ID,
  TMP_MESSAGING_KAFKA_PARTITION,
  TMP_MESSAGING_KAFKA_TOMBSTONE,
  TMP_RPC_SYSTEM,
  TMP_RPC_SERVICE,
  TMP_RPC_METHOD,
  TMP_RPC_GRPC_STATUS_CODE,
  TMP_RPC_JSONRPC_VERSION,
  TMP_RPC_JSONRPC_REQUEST_ID,
  TMP_RPC_JSONRPC_ERROR_CODE,
  TMP_RPC_JSONRPC_ERROR_MESSAGE,
  TMP_MESSAGE_TYPE,
  TMP_MESSAGE_ID,
  TMP_MESSAGE_COMPRESSED_SIZE,
  TMP_MESSAGE_UNCOMPRESSED_SIZE
]);
var TMP_DBSYSTEMVALUES_OTHER_SQL = "other_sql";
var TMP_DBSYSTEMVALUES_MSSQL = "mssql";
var TMP_DBSYSTEMVALUES_MYSQL = "mysql";
var TMP_DBSYSTEMVALUES_ORACLE = "oracle";
var TMP_DBSYSTEMVALUES_DB2 = "db2";
var TMP_DBSYSTEMVALUES_POSTGRESQL = "postgresql";
var TMP_DBSYSTEMVALUES_REDSHIFT = "redshift";
var TMP_DBSYSTEMVALUES_HIVE = "hive";
var TMP_DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
var TMP_DBSYSTEMVALUES_HSQLDB = "hsqldb";
var TMP_DBSYSTEMVALUES_PROGRESS = "progress";
var TMP_DBSYSTEMVALUES_MAXDB = "maxdb";
var TMP_DBSYSTEMVALUES_HANADB = "hanadb";
var TMP_DBSYSTEMVALUES_INGRES = "ingres";
var TMP_DBSYSTEMVALUES_FIRSTSQL = "firstsql";
var TMP_DBSYSTEMVALUES_EDB = "edb";
var TMP_DBSYSTEMVALUES_CACHE = "cache";
var TMP_DBSYSTEMVALUES_ADABAS = "adabas";
var TMP_DBSYSTEMVALUES_FIREBIRD = "firebird";
var TMP_DBSYSTEMVALUES_DERBY = "derby";
var TMP_DBSYSTEMVALUES_FILEMAKER = "filemaker";
var TMP_DBSYSTEMVALUES_INFORMIX = "informix";
var TMP_DBSYSTEMVALUES_INSTANTDB = "instantdb";
var TMP_DBSYSTEMVALUES_INTERBASE = "interbase";
var TMP_DBSYSTEMVALUES_MARIADB = "mariadb";
var TMP_DBSYSTEMVALUES_NETEZZA = "netezza";
var TMP_DBSYSTEMVALUES_PERVASIVE = "pervasive";
var TMP_DBSYSTEMVALUES_POINTBASE = "pointbase";
var TMP_DBSYSTEMVALUES_SQLITE = "sqlite";
var TMP_DBSYSTEMVALUES_SYBASE = "sybase";
var TMP_DBSYSTEMVALUES_TERADATA = "teradata";
var TMP_DBSYSTEMVALUES_VERTICA = "vertica";
var TMP_DBSYSTEMVALUES_H2 = "h2";
var TMP_DBSYSTEMVALUES_COLDFUSION = "coldfusion";
var TMP_DBSYSTEMVALUES_CASSANDRA = "cassandra";
var TMP_DBSYSTEMVALUES_HBASE = "hbase";
var TMP_DBSYSTEMVALUES_MONGODB = "mongodb";
var TMP_DBSYSTEMVALUES_REDIS = "redis";
var TMP_DBSYSTEMVALUES_COUCHBASE = "couchbase";
var TMP_DBSYSTEMVALUES_COUCHDB = "couchdb";
var TMP_DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
var TMP_DBSYSTEMVALUES_DYNAMODB = "dynamodb";
var TMP_DBSYSTEMVALUES_NEO4J = "neo4j";
var TMP_DBSYSTEMVALUES_GEODE = "geode";
var TMP_DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
var TMP_DBSYSTEMVALUES_MEMCACHED = "memcached";
var TMP_DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
var DbSystemValues = createConstMap([
  TMP_DBSYSTEMVALUES_OTHER_SQL,
  TMP_DBSYSTEMVALUES_MSSQL,
  TMP_DBSYSTEMVALUES_MYSQL,
  TMP_DBSYSTEMVALUES_ORACLE,
  TMP_DBSYSTEMVALUES_DB2,
  TMP_DBSYSTEMVALUES_POSTGRESQL,
  TMP_DBSYSTEMVALUES_REDSHIFT,
  TMP_DBSYSTEMVALUES_HIVE,
  TMP_DBSYSTEMVALUES_CLOUDSCAPE,
  TMP_DBSYSTEMVALUES_HSQLDB,
  TMP_DBSYSTEMVALUES_PROGRESS,
  TMP_DBSYSTEMVALUES_MAXDB,
  TMP_DBSYSTEMVALUES_HANADB,
  TMP_DBSYSTEMVALUES_INGRES,
  TMP_DBSYSTEMVALUES_FIRSTSQL,
  TMP_DBSYSTEMVALUES_EDB,
  TMP_DBSYSTEMVALUES_CACHE,
  TMP_DBSYSTEMVALUES_ADABAS,
  TMP_DBSYSTEMVALUES_FIREBIRD,
  TMP_DBSYSTEMVALUES_DERBY,
  TMP_DBSYSTEMVALUES_FILEMAKER,
  TMP_DBSYSTEMVALUES_INFORMIX,
  TMP_DBSYSTEMVALUES_INSTANTDB,
  TMP_DBSYSTEMVALUES_INTERBASE,
  TMP_DBSYSTEMVALUES_MARIADB,
  TMP_DBSYSTEMVALUES_NETEZZA,
  TMP_DBSYSTEMVALUES_PERVASIVE,
  TMP_DBSYSTEMVALUES_POINTBASE,
  TMP_DBSYSTEMVALUES_SQLITE,
  TMP_DBSYSTEMVALUES_SYBASE,
  TMP_DBSYSTEMVALUES_TERADATA,
  TMP_DBSYSTEMVALUES_VERTICA,
  TMP_DBSYSTEMVALUES_H2,
  TMP_DBSYSTEMVALUES_COLDFUSION,
  TMP_DBSYSTEMVALUES_CASSANDRA,
  TMP_DBSYSTEMVALUES_HBASE,
  TMP_DBSYSTEMVALUES_MONGODB,
  TMP_DBSYSTEMVALUES_REDIS,
  TMP_DBSYSTEMVALUES_COUCHBASE,
  TMP_DBSYSTEMVALUES_COUCHDB,
  TMP_DBSYSTEMVALUES_COSMOSDB,
  TMP_DBSYSTEMVALUES_DYNAMODB,
  TMP_DBSYSTEMVALUES_NEO4J,
  TMP_DBSYSTEMVALUES_GEODE,
  TMP_DBSYSTEMVALUES_ELASTICSEARCH,
  TMP_DBSYSTEMVALUES_MEMCACHED,
  TMP_DBSYSTEMVALUES_COCKROACHDB
]);
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
var TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
var DbCassandraConsistencyLevelValues = createConstMap([
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
  TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
]);
var TMP_FAASTRIGGERVALUES_DATASOURCE = "datasource";
var TMP_FAASTRIGGERVALUES_HTTP = "http";
var TMP_FAASTRIGGERVALUES_PUBSUB = "pubsub";
var TMP_FAASTRIGGERVALUES_TIMER = "timer";
var TMP_FAASTRIGGERVALUES_OTHER = "other";
var FaasTriggerValues = createConstMap([
  TMP_FAASTRIGGERVALUES_DATASOURCE,
  TMP_FAASTRIGGERVALUES_HTTP,
  TMP_FAASTRIGGERVALUES_PUBSUB,
  TMP_FAASTRIGGERVALUES_TIMER,
  TMP_FAASTRIGGERVALUES_OTHER
]);
var TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
var TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
var TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
var FaasDocumentOperationValues = createConstMap([
  TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
  TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
  TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
]);
var TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
var TMP_FAASINVOKEDPROVIDERVALUES_AWS = "aws";
var TMP_FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
var TMP_FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
var FaasInvokedProviderValues = createConstMap([
  TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
  TMP_FAASINVOKEDPROVIDERVALUES_AWS,
  TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
  TMP_FAASINVOKEDPROVIDERVALUES_GCP
]);
var TMP_NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
var TMP_NETTRANSPORTVALUES_IP_UDP = "ip_udp";
var TMP_NETTRANSPORTVALUES_IP = "ip";
var TMP_NETTRANSPORTVALUES_UNIX = "unix";
var TMP_NETTRANSPORTVALUES_PIPE = "pipe";
var TMP_NETTRANSPORTVALUES_INPROC = "inproc";
var TMP_NETTRANSPORTVALUES_OTHER = "other";
var NetTransportValues = createConstMap([
  TMP_NETTRANSPORTVALUES_IP_TCP,
  TMP_NETTRANSPORTVALUES_IP_UDP,
  TMP_NETTRANSPORTVALUES_IP,
  TMP_NETTRANSPORTVALUES_UNIX,
  TMP_NETTRANSPORTVALUES_PIPE,
  TMP_NETTRANSPORTVALUES_INPROC,
  TMP_NETTRANSPORTVALUES_OTHER
]);
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
var TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
var TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
var TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
var NetHostConnectionTypeValues = createConstMap([
  TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
  TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
  TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
  TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
  TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
]);
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
var TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
var NetHostConnectionSubtypeValues = createConstMap([
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
  TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
]);
var TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
var TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
var MessagingDestinationKindValues = createConstMap([
  TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
  TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
]);
var TMP_MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
var TMP_MESSAGINGOPERATIONVALUES_PROCESS = "process";
var MessagingOperationValues = createConstMap([
  TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
  TMP_MESSAGINGOPERATIONVALUES_PROCESS
]);
var TMP_MESSAGETYPEVALUES_SENT = "SENT";
var TMP_MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
var MessageTypeValues = createConstMap([
  TMP_MESSAGETYPEVALUES_SENT,
  TMP_MESSAGETYPEVALUES_RECEIVED
]);

// node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js
var TMP_CLOUD_PROVIDER = "cloud.provider";
var TMP_CLOUD_ACCOUNT_ID = "cloud.account.id";
var TMP_CLOUD_REGION = "cloud.region";
var TMP_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
var TMP_CLOUD_PLATFORM = "cloud.platform";
var TMP_AWS_ECS_CONTAINER_ARN = "aws.ecs.container.arn";
var TMP_AWS_ECS_CLUSTER_ARN = "aws.ecs.cluster.arn";
var TMP_AWS_ECS_LAUNCHTYPE = "aws.ecs.launchtype";
var TMP_AWS_ECS_TASK_ARN = "aws.ecs.task.arn";
var TMP_AWS_ECS_TASK_FAMILY = "aws.ecs.task.family";
var TMP_AWS_ECS_TASK_REVISION = "aws.ecs.task.revision";
var TMP_AWS_EKS_CLUSTER_ARN = "aws.eks.cluster.arn";
var TMP_AWS_LOG_GROUP_NAMES = "aws.log.group.names";
var TMP_AWS_LOG_GROUP_ARNS = "aws.log.group.arns";
var TMP_AWS_LOG_STREAM_NAMES = "aws.log.stream.names";
var TMP_AWS_LOG_STREAM_ARNS = "aws.log.stream.arns";
var TMP_CONTAINER_NAME = "container.name";
var TMP_CONTAINER_ID = "container.id";
var TMP_CONTAINER_RUNTIME = "container.runtime";
var TMP_CONTAINER_IMAGE_NAME = "container.image.name";
var TMP_CONTAINER_IMAGE_TAG = "container.image.tag";
var TMP_DEPLOYMENT_ENVIRONMENT = "deployment.environment";
var TMP_DEVICE_ID = "device.id";
var TMP_DEVICE_MODEL_IDENTIFIER = "device.model.identifier";
var TMP_DEVICE_MODEL_NAME = "device.model.name";
var TMP_FAAS_NAME = "faas.name";
var TMP_FAAS_ID = "faas.id";
var TMP_FAAS_VERSION = "faas.version";
var TMP_FAAS_INSTANCE = "faas.instance";
var TMP_FAAS_MAX_MEMORY = "faas.max_memory";
var TMP_HOST_ID = "host.id";
var TMP_HOST_NAME = "host.name";
var TMP_HOST_TYPE = "host.type";
var TMP_HOST_ARCH = "host.arch";
var TMP_HOST_IMAGE_NAME = "host.image.name";
var TMP_HOST_IMAGE_ID = "host.image.id";
var TMP_HOST_IMAGE_VERSION = "host.image.version";
var TMP_K8S_CLUSTER_NAME = "k8s.cluster.name";
var TMP_K8S_NODE_NAME = "k8s.node.name";
var TMP_K8S_NODE_UID = "k8s.node.uid";
var TMP_K8S_NAMESPACE_NAME = "k8s.namespace.name";
var TMP_K8S_POD_UID = "k8s.pod.uid";
var TMP_K8S_POD_NAME = "k8s.pod.name";
var TMP_K8S_CONTAINER_NAME = "k8s.container.name";
var TMP_K8S_REPLICASET_UID = "k8s.replicaset.uid";
var TMP_K8S_REPLICASET_NAME = "k8s.replicaset.name";
var TMP_K8S_DEPLOYMENT_UID = "k8s.deployment.uid";
var TMP_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
var TMP_K8S_STATEFULSET_UID = "k8s.statefulset.uid";
var TMP_K8S_STATEFULSET_NAME = "k8s.statefulset.name";
var TMP_K8S_DAEMONSET_UID = "k8s.daemonset.uid";
var TMP_K8S_DAEMONSET_NAME = "k8s.daemonset.name";
var TMP_K8S_JOB_UID = "k8s.job.uid";
var TMP_K8S_JOB_NAME = "k8s.job.name";
var TMP_K8S_CRONJOB_UID = "k8s.cronjob.uid";
var TMP_K8S_CRONJOB_NAME = "k8s.cronjob.name";
var TMP_OS_TYPE = "os.type";
var TMP_OS_DESCRIPTION = "os.description";
var TMP_OS_NAME = "os.name";
var TMP_OS_VERSION = "os.version";
var TMP_PROCESS_PID = "process.pid";
var TMP_PROCESS_EXECUTABLE_NAME = "process.executable.name";
var TMP_PROCESS_EXECUTABLE_PATH = "process.executable.path";
var TMP_PROCESS_COMMAND = "process.command";
var TMP_PROCESS_COMMAND_LINE = "process.command_line";
var TMP_PROCESS_COMMAND_ARGS = "process.command_args";
var TMP_PROCESS_OWNER = "process.owner";
var TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
var TMP_PROCESS_RUNTIME_VERSION = "process.runtime.version";
var TMP_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
var TMP_SERVICE_NAME = "service.name";
var TMP_SERVICE_NAMESPACE = "service.namespace";
var TMP_SERVICE_INSTANCE_ID = "service.instance.id";
var TMP_SERVICE_VERSION = "service.version";
var TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
var TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
var TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
var TMP_TELEMETRY_AUTO_VERSION = "telemetry.auto.version";
var TMP_WEBENGINE_NAME = "webengine.name";
var TMP_WEBENGINE_VERSION = "webengine.version";
var TMP_WEBENGINE_DESCRIPTION = "webengine.description";
var SemanticResourceAttributes = createConstMap([
  TMP_CLOUD_PROVIDER,
  TMP_CLOUD_ACCOUNT_ID,
  TMP_CLOUD_REGION,
  TMP_CLOUD_AVAILABILITY_ZONE,
  TMP_CLOUD_PLATFORM,
  TMP_AWS_ECS_CONTAINER_ARN,
  TMP_AWS_ECS_CLUSTER_ARN,
  TMP_AWS_ECS_LAUNCHTYPE,
  TMP_AWS_ECS_TASK_ARN,
  TMP_AWS_ECS_TASK_FAMILY,
  TMP_AWS_ECS_TASK_REVISION,
  TMP_AWS_EKS_CLUSTER_ARN,
  TMP_AWS_LOG_GROUP_NAMES,
  TMP_AWS_LOG_GROUP_ARNS,
  TMP_AWS_LOG_STREAM_NAMES,
  TMP_AWS_LOG_STREAM_ARNS,
  TMP_CONTAINER_NAME,
  TMP_CONTAINER_ID,
  TMP_CONTAINER_RUNTIME,
  TMP_CONTAINER_IMAGE_NAME,
  TMP_CONTAINER_IMAGE_TAG,
  TMP_DEPLOYMENT_ENVIRONMENT,
  TMP_DEVICE_ID,
  TMP_DEVICE_MODEL_IDENTIFIER,
  TMP_DEVICE_MODEL_NAME,
  TMP_FAAS_NAME,
  TMP_FAAS_ID,
  TMP_FAAS_VERSION,
  TMP_FAAS_INSTANCE,
  TMP_FAAS_MAX_MEMORY,
  TMP_HOST_ID,
  TMP_HOST_NAME,
  TMP_HOST_TYPE,
  TMP_HOST_ARCH,
  TMP_HOST_IMAGE_NAME,
  TMP_HOST_IMAGE_ID,
  TMP_HOST_IMAGE_VERSION,
  TMP_K8S_CLUSTER_NAME,
  TMP_K8S_NODE_NAME,
  TMP_K8S_NODE_UID,
  TMP_K8S_NAMESPACE_NAME,
  TMP_K8S_POD_UID,
  TMP_K8S_POD_NAME,
  TMP_K8S_CONTAINER_NAME,
  TMP_K8S_REPLICASET_UID,
  TMP_K8S_REPLICASET_NAME,
  TMP_K8S_DEPLOYMENT_UID,
  TMP_K8S_DEPLOYMENT_NAME,
  TMP_K8S_STATEFULSET_UID,
  TMP_K8S_STATEFULSET_NAME,
  TMP_K8S_DAEMONSET_UID,
  TMP_K8S_DAEMONSET_NAME,
  TMP_K8S_JOB_UID,
  TMP_K8S_JOB_NAME,
  TMP_K8S_CRONJOB_UID,
  TMP_K8S_CRONJOB_NAME,
  TMP_OS_TYPE,
  TMP_OS_DESCRIPTION,
  TMP_OS_NAME,
  TMP_OS_VERSION,
  TMP_PROCESS_PID,
  TMP_PROCESS_EXECUTABLE_NAME,
  TMP_PROCESS_EXECUTABLE_PATH,
  TMP_PROCESS_COMMAND,
  TMP_PROCESS_COMMAND_LINE,
  TMP_PROCESS_COMMAND_ARGS,
  TMP_PROCESS_OWNER,
  TMP_PROCESS_RUNTIME_NAME,
  TMP_PROCESS_RUNTIME_VERSION,
  TMP_PROCESS_RUNTIME_DESCRIPTION,
  TMP_SERVICE_NAME,
  TMP_SERVICE_NAMESPACE,
  TMP_SERVICE_INSTANCE_ID,
  TMP_SERVICE_VERSION,
  TMP_TELEMETRY_SDK_NAME,
  TMP_TELEMETRY_SDK_LANGUAGE,
  TMP_TELEMETRY_SDK_VERSION,
  TMP_TELEMETRY_AUTO_VERSION,
  TMP_WEBENGINE_NAME,
  TMP_WEBENGINE_VERSION,
  TMP_WEBENGINE_DESCRIPTION
]);
var TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
var TMP_CLOUDPROVIDERVALUES_AWS = "aws";
var TMP_CLOUDPROVIDERVALUES_AZURE = "azure";
var TMP_CLOUDPROVIDERVALUES_GCP = "gcp";
var CloudProviderValues = createConstMap([
  TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
  TMP_CLOUDPROVIDERVALUES_AWS,
  TMP_CLOUDPROVIDERVALUES_AZURE,
  TMP_CLOUDPROVIDERVALUES_GCP
]);
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = "alibaba_cloud_ecs";
var TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = "alibaba_cloud_fc";
var TMP_CLOUDPLATFORMVALUES_AWS_EC2 = "aws_ec2";
var TMP_CLOUDPLATFORMVALUES_AWS_ECS = "aws_ecs";
var TMP_CLOUDPLATFORMVALUES_AWS_EKS = "aws_eks";
var TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = "aws_lambda";
var TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk";
var TMP_CLOUDPLATFORMVALUES_AZURE_VM = "azure_vm";
var TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = "azure_container_instances";
var TMP_CLOUDPLATFORMVALUES_AZURE_AKS = "azure_aks";
var TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = "azure_functions";
var TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = "azure_app_service";
var TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = "gcp_compute_engine";
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = "gcp_cloud_run";
var TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine";
var TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions";
var TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = "gcp_app_engine";
var CloudPlatformValues = createConstMap([
  TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
  TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
  TMP_CLOUDPLATFORMVALUES_AWS_EC2,
  TMP_CLOUDPLATFORMVALUES_AWS_ECS,
  TMP_CLOUDPLATFORMVALUES_AWS_EKS,
  TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
  TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
  TMP_CLOUDPLATFORMVALUES_AZURE_VM,
  TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
  TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
  TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
  TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
  TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
  TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
  TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
  TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
  TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
]);
var TMP_AWSECSLAUNCHTYPEVALUES_EC2 = "ec2";
var TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = "fargate";
var AwsEcsLaunchtypeValues = createConstMap([
  TMP_AWSECSLAUNCHTYPEVALUES_EC2,
  TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
]);
var TMP_HOSTARCHVALUES_AMD64 = "amd64";
var TMP_HOSTARCHVALUES_ARM32 = "arm32";
var TMP_HOSTARCHVALUES_ARM64 = "arm64";
var TMP_HOSTARCHVALUES_IA64 = "ia64";
var TMP_HOSTARCHVALUES_PPC32 = "ppc32";
var TMP_HOSTARCHVALUES_PPC64 = "ppc64";
var TMP_HOSTARCHVALUES_X86 = "x86";
var HostArchValues = createConstMap([
  TMP_HOSTARCHVALUES_AMD64,
  TMP_HOSTARCHVALUES_ARM32,
  TMP_HOSTARCHVALUES_ARM64,
  TMP_HOSTARCHVALUES_IA64,
  TMP_HOSTARCHVALUES_PPC32,
  TMP_HOSTARCHVALUES_PPC64,
  TMP_HOSTARCHVALUES_X86
]);
var TMP_OSTYPEVALUES_WINDOWS = "windows";
var TMP_OSTYPEVALUES_LINUX = "linux";
var TMP_OSTYPEVALUES_DARWIN = "darwin";
var TMP_OSTYPEVALUES_FREEBSD = "freebsd";
var TMP_OSTYPEVALUES_NETBSD = "netbsd";
var TMP_OSTYPEVALUES_OPENBSD = "openbsd";
var TMP_OSTYPEVALUES_DRAGONFLYBSD = "dragonflybsd";
var TMP_OSTYPEVALUES_HPUX = "hpux";
var TMP_OSTYPEVALUES_AIX = "aix";
var TMP_OSTYPEVALUES_SOLARIS = "solaris";
var TMP_OSTYPEVALUES_Z_OS = "z_os";
var OsTypeValues = createConstMap([
  TMP_OSTYPEVALUES_WINDOWS,
  TMP_OSTYPEVALUES_LINUX,
  TMP_OSTYPEVALUES_DARWIN,
  TMP_OSTYPEVALUES_FREEBSD,
  TMP_OSTYPEVALUES_NETBSD,
  TMP_OSTYPEVALUES_OPENBSD,
  TMP_OSTYPEVALUES_DRAGONFLYBSD,
  TMP_OSTYPEVALUES_HPUX,
  TMP_OSTYPEVALUES_AIX,
  TMP_OSTYPEVALUES_SOLARIS,
  TMP_OSTYPEVALUES_Z_OS
]);
var TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = "cpp";
var TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = "dotnet";
var TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = "erlang";
var TMP_TELEMETRYSDKLANGUAGEVALUES_GO = "go";
var TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = "java";
var TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
var TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = "php";
var TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = "python";
var TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = "ruby";
var TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = "webjs";
var TelemetrySdkLanguageValues = createConstMap([
  TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
  TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
  TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
  TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
  TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
  TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
  TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
  TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
  TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
  TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
]);

// node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js
var ATTR_EXCEPTION_MESSAGE = "exception.message";
var ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
var ATTR_EXCEPTION_TYPE = "exception.type";
var ATTR_SERVICE_NAME = "service.name";
var ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
var TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
var ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
var ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";

// node_modules/@opentelemetry/core/build/esm/semconv.js
var ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";

// node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js
var SDK_INFO = {
  [ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
  [ATTR_PROCESS_RUNTIME_NAME]: "node",
  [ATTR_TELEMETRY_SDK_LANGUAGE]: TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
  [ATTR_TELEMETRY_SDK_VERSION]: VERSION
};

// node_modules/@opentelemetry/core/build/esm/platform/node/index.js
var otperformance = performance;

// node_modules/@opentelemetry/core/build/esm/common/time.js
var NANOSECOND_DIGITS = 9;
var NANOSECOND_DIGITS_IN_MILLIS = 6;
var MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
function millisToHrTime(epochMillis) {
  const epochSeconds = epochMillis / 1e3;
  const seconds = Math.trunc(epochSeconds);
  const nanos = Math.round(epochMillis % 1e3 * MILLISECONDS_TO_NANOSECONDS);
  return [seconds, nanos];
}
function hrTime(performanceNow) {
  const timeOrigin = millisToHrTime(otperformance.timeOrigin);
  const now = millisToHrTime(typeof performanceNow === "number" ? performanceNow : otperformance.now());
  return addHrTimes(timeOrigin, now);
}
function hrTimeDuration(startTime, endTime) {
  let seconds = endTime[0] - startTime[0];
  let nanos = endTime[1] - startTime[1];
  if (nanos < 0) {
    seconds -= 1;
    nanos += SECOND_TO_NANOSECONDS;
  }
  return [seconds, nanos];
}
function isTimeInputHrTime(value) {
  return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
function isTimeInput(value) {
  return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
}
function addHrTimes(time1, time2) {
  const out = [time1[0] + time2[0], time1[1] + time2[1]];
  if (out[1] >= SECOND_TO_NANOSECONDS) {
    out[1] -= SECOND_TO_NANOSECONDS;
    out[0] += 1;
  }
  return out;
}

// node_modules/@opentelemetry/core/build/esm/ExportResult.js
var ExportResultCode;
(function(ExportResultCode5) {
  ExportResultCode5[ExportResultCode5["SUCCESS"] = 0] = "SUCCESS";
  ExportResultCode5[ExportResultCode5["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {}));

// node_modules/@opentelemetry/core/build/esm/propagation/composite.js
var CompositePropagator = class {
  _propagators;
  _fields;
  /**
   * Construct a composite propagator from a list of propagators.
   *
   * @param [config] Configuration object for composite propagator
   */
  constructor(config = {}) {
    this._propagators = config.propagators ?? [];
    this._fields = Array.from(new Set(this._propagators.map((p) => typeof p.fields === "function" ? p.fields() : []).reduce((x, y) => x.concat(y), [])));
  }
  /**
   * Run each of the configured propagators with the given context and carrier.
   * Propagators are run in the order they are configured, so if multiple
   * propagators write the same carrier key, the propagator later in the list
   * will "win".
   *
   * @param context Context to inject
   * @param carrier Carrier into which context will be injected
   */
  inject(context2, carrier, setter) {
    for (const propagator of this._propagators) {
      try {
        propagator.inject(context2, carrier, setter);
      } catch (err) {
        diag.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
      }
    }
  }
  /**
   * Run each of the configured propagators with the given context and carrier.
   * Propagators are run in the order they are configured, so if multiple
   * propagators write the same context key, the propagator later in the list
   * will "win".
   *
   * @param context Context to add values to
   * @param carrier Carrier from which to extract context
   */
  extract(context2, carrier, getter) {
    return this._propagators.reduce((ctx, propagator) => {
      try {
        return propagator.extract(ctx, carrier, getter);
      } catch (err) {
        diag.warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
      }
      return ctx;
    }, context2);
  }
  fields() {
    return this._fields.slice();
  }
};

// node_modules/@opentelemetry/core/build/esm/internal/validators.js
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
var VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
var VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}

// node_modules/@opentelemetry/core/build/esm/trace/TraceState.js
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
var TraceState = class _TraceState {
  _internalState = /* @__PURE__ */ new Map();
  constructor(rawTraceState) {
    if (rawTraceState)
      this._parse(rawTraceState);
  }
  set(key, value) {
    const traceState = this._clone();
    if (traceState._internalState.has(key)) {
      traceState._internalState.delete(key);
    }
    traceState._internalState.set(key, value);
    return traceState;
  }
  unset(key) {
    const traceState = this._clone();
    traceState._internalState.delete(key);
    return traceState;
  }
  get(key) {
    return this._internalState.get(key);
  }
  serialize() {
    return this._keys().reduce((agg, key) => {
      agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + this.get(key));
      return agg;
    }, []).join(LIST_MEMBERS_SEPARATOR);
  }
  _parse(rawTraceState) {
    if (rawTraceState.length > MAX_TRACE_STATE_LEN)
      return;
    this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse().reduce((agg, part) => {
      const listMember = part.trim();
      const i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
      if (i !== -1) {
        const key = listMember.slice(0, i);
        const value = listMember.slice(i + 1, part.length);
        if (validateKey(key) && validateValue(value)) {
          agg.set(key, value);
        } else {
        }
      }
      return agg;
    }, /* @__PURE__ */ new Map());
    if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
      this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
    }
  }
  _keys() {
    return Array.from(this._internalState.keys()).reverse();
  }
  _clone() {
    const traceState = new _TraceState();
    traceState._internalState = new Map(this._internalState);
    return traceState;
  }
};

// node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js
var TRACE_PARENT_HEADER = "traceparent";
var TRACE_STATE_HEADER = "tracestate";
var VERSION2 = "00";
var VERSION_PART = "(?!ff)[\\da-f]{2}";
var TRACE_ID_PART = "(?![0]{32})[\\da-f]{32}";
var PARENT_ID_PART = "(?![0]{16})[\\da-f]{16}";
var FLAGS_PART = "[\\da-f]{2}";
var TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
function parseTraceParent(traceParent) {
  const match = TRACE_PARENT_REGEX.exec(traceParent);
  if (!match)
    return null;
  if (match[1] === "00" && match[5])
    return null;
  return {
    traceId: match[2],
    spanId: match[3],
    traceFlags: parseInt(match[4], 16)
  };
}
var W3CTraceContextPropagator = class {
  inject(context2, carrier, setter) {
    const spanContext = trace.getSpanContext(context2);
    if (!spanContext || isTracingSuppressed(context2) || !isSpanContextValid(spanContext))
      return;
    const traceParent = `${VERSION2}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || TraceFlags.NONE).toString(16)}`;
    setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
    if (spanContext.traceState) {
      setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
    }
  }
  extract(context2, carrier, getter) {
    const traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
    if (!traceParentHeader)
      return context2;
    const traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
    if (typeof traceParent !== "string")
      return context2;
    const spanContext = parseTraceParent(traceParent);
    if (!spanContext)
      return context2;
    spanContext.isRemote = true;
    const traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
    if (traceStateHeader) {
      const state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
      spanContext.traceState = new TraceState(typeof state === "string" ? state : void 0);
    }
    return trace.setSpanContext(context2, spanContext);
  }
  fields() {
    return [TRACE_PARENT_HEADER, TRACE_STATE_HEADER];
  }
};

// node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js
var RPC_METADATA_KEY = createContextKey("OpenTelemetry SDK Context Key RPC_METADATA");
var RPCType;
(function(RPCType5) {
  RPCType5["HTTP"] = "http";
})(RPCType || (RPCType = {}));

// node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js
var objectTag = "[object Object]";
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
var objectCtorString = funcToString.call(Object);
var getPrototypeOf = Object.getPrototypeOf;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
var nativeObjectToString = objectProto.toString;
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
    return false;
  }
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function getRawTag(value) {
  const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  let unmasked = false;
  try {
    value[symToStringTag] = void 0;
    unmasked = true;
  } catch {
  }
  const result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
function objectToString(value) {
  return nativeObjectToString.call(value);
}

// node_modules/@opentelemetry/core/build/esm/utils/merge.js
var MAX_LEVEL = 20;
function merge(...args) {
  let result = args.shift();
  const objects = /* @__PURE__ */ new WeakMap();
  while (args.length > 0) {
    result = mergeTwoObjects(result, args.shift(), 0, objects);
  }
  return result;
}
function takeValue(value) {
  if (isArray(value)) {
    return value.slice();
  }
  return value;
}
function mergeTwoObjects(one, two, level = 0, objects) {
  let result;
  if (level > MAX_LEVEL) {
    return void 0;
  }
  level++;
  if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
    result = takeValue(two);
  } else if (isArray(one)) {
    result = one.slice();
    if (isArray(two)) {
      for (let i = 0, j = two.length; i < j; i++) {
        result.push(takeValue(two[i]));
      }
    } else if (isObject(two)) {
      const keys = Object.keys(two);
      for (let i = 0, j = keys.length; i < j; i++) {
        const key = keys[i];
        result[key] = takeValue(two[key]);
      }
    }
  } else if (isObject(one)) {
    if (isObject(two)) {
      if (!shouldMerge(one, two)) {
        return two;
      }
      result = Object.assign({}, one);
      const keys = Object.keys(two);
      for (let i = 0, j = keys.length; i < j; i++) {
        const key = keys[i];
        const twoValue = two[key];
        if (isPrimitive(twoValue)) {
          if (typeof twoValue === "undefined") {
            delete result[key];
          } else {
            result[key] = twoValue;
          }
        } else {
          const obj1 = result[key];
          const obj2 = twoValue;
          if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
            delete result[key];
          } else {
            if (isObject(obj1) && isObject(obj2)) {
              const arr1 = objects.get(obj1) || [];
              const arr2 = objects.get(obj2) || [];
              arr1.push({ obj: one, key });
              arr2.push({ obj: two, key });
              objects.set(obj1, arr1);
              objects.set(obj2, arr2);
            }
            result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
          }
        }
      }
    } else {
      result = two;
    }
  }
  return result;
}
function wasObjectReferenced(obj, key, objects) {
  const arr = objects.get(obj[key]) || [];
  for (let i = 0, j = arr.length; i < j; i++) {
    const info = arr[i];
    if (info.key === key && info.obj === obj) {
      return true;
    }
  }
  return false;
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
  if (!isPlainObject(one) || !isPlainObject(two)) {
    return false;
  }
  return true;
}

// node_modules/@opentelemetry/core/build/esm/utils/promise.js
var Deferred = class {
  _promise;
  _resolve;
  _reject;
  constructor() {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  get promise() {
    return this._promise;
  }
  resolve(val) {
    this._resolve(val);
  }
  reject(err) {
    this._reject(err);
  }
};

// node_modules/@opentelemetry/core/build/esm/utils/callback.js
var BindOnceFuture = class {
  _isCalled = false;
  _deferred = new Deferred();
  _callback;
  _that;
  constructor(callback, that) {
    this._callback = callback;
    this._that = that;
  }
  get isCalled() {
    return this._isCalled;
  }
  get promise() {
    return this._deferred.promise;
  }
  call(...args) {
    if (!this._isCalled) {
      this._isCalled = true;
      try {
        Promise.resolve(this._callback.call(this._that, ...args)).then((val) => this._deferred.resolve(val), (err) => this._deferred.reject(err));
      } catch (err) {
        this._deferred.reject(err);
      }
    }
    return this._deferred.promise;
  }
};

// node_modules/@opentelemetry/core/build/esm/utils/configuration.js
var logLevelMap = {
  ALL: DiagLogLevel.ALL,
  VERBOSE: DiagLogLevel.VERBOSE,
  DEBUG: DiagLogLevel.DEBUG,
  INFO: DiagLogLevel.INFO,
  WARN: DiagLogLevel.WARN,
  ERROR: DiagLogLevel.ERROR,
  NONE: DiagLogLevel.NONE
};

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/OTLPExporterBase.js
var OTLPExporterBase = class {
  _delegate;
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  /**
   * Export items.
   * @param items
   * @param resultCallback
   */
  export(items, resultCallback) {
    this._delegate.export(items, resultCallback);
  }
  forceFlush() {
    return this._delegate.forceFlush();
  }
  shutdown() {
    return this._delegate.shutdown();
  }
};

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/types.js
var OTLPExporterError = class extends Error {
  code;
  name = "OTLPExporterError";
  data;
  constructor(message, code, data) {
    super(message);
    this.data = data;
    this.code = code;
  }
};

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/shared-configuration.js
function validateTimeoutMillis(timeoutMillis) {
  if (Number.isFinite(timeoutMillis) && timeoutMillis > 0) {
    return timeoutMillis;
  }
  throw new Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${timeoutMillis}')`);
}
function wrapStaticHeadersInFunction(headers) {
  if (headers == null) {
    return void 0;
  }
  return () => headers;
}
function mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
  return {
    timeoutMillis: validateTimeoutMillis(userProvidedConfiguration.timeoutMillis ?? fallbackConfiguration.timeoutMillis ?? defaultConfiguration.timeoutMillis),
    concurrencyLimit: userProvidedConfiguration.concurrencyLimit ?? fallbackConfiguration.concurrencyLimit ?? defaultConfiguration.concurrencyLimit,
    compression: userProvidedConfiguration.compression ?? fallbackConfiguration.compression ?? defaultConfiguration.compression
  };
}
function getSharedConfigurationDefaults() {
  return {
    timeoutMillis: 1e4,
    concurrencyLimit: 30,
    compression: "none"
  };
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/legacy-node-configuration.js
var CompressionAlgorithm;
(function(CompressionAlgorithm2) {
  CompressionAlgorithm2["NONE"] = "none";
  CompressionAlgorithm2["GZIP"] = "gzip";
})(CompressionAlgorithm || (CompressionAlgorithm = {}));

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/bounded-queue-export-promise-handler.js
var BoundedQueueExportPromiseHandler = class {
  _concurrencyLimit;
  _sendingPromises = [];
  /**
   * @param concurrencyLimit maximum promises allowed in a queue at the same time.
   */
  constructor(concurrencyLimit) {
    this._concurrencyLimit = concurrencyLimit;
  }
  pushPromise(promise) {
    if (this.hasReachedLimit()) {
      throw new Error("Concurrency Limit reached");
    }
    this._sendingPromises.push(promise);
    const popPromise = () => {
      const index = this._sendingPromises.indexOf(promise);
      void this._sendingPromises.splice(index, 1);
    };
    promise.then(popPromise, popPromise);
  }
  hasReachedLimit() {
    return this._sendingPromises.length >= this._concurrencyLimit;
  }
  async awaitAll() {
    await Promise.all(this._sendingPromises);
  }
};
function createBoundedQueueExportPromiseHandler(options) {
  return new BoundedQueueExportPromiseHandler(options.concurrencyLimit);
}

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js
var SUPPRESS_TRACING_KEY2 = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/baggage/constants.js
var BAGGAGE_KEY_PAIR_SEPARATOR2 = "=";
var BAGGAGE_PROPERTIES_SEPARATOR2 = ";";
var BAGGAGE_ITEMS_SEPARATOR2 = ",";

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/baggage/utils.js
function parsePairKeyValue2(entry) {
  const valueProps = entry.split(BAGGAGE_PROPERTIES_SEPARATOR2);
  if (valueProps.length <= 0)
    return;
  const keyPairPart = valueProps.shift();
  if (!keyPairPart)
    return;
  const separatorIndex = keyPairPart.indexOf(BAGGAGE_KEY_PAIR_SEPARATOR2);
  if (separatorIndex <= 0)
    return;
  const key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
  const value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
  let metadata;
  if (valueProps.length > 0) {
    metadata = baggageEntryMetadataFromString(valueProps.join(BAGGAGE_PROPERTIES_SEPARATOR2));
  }
  return { key, value, metadata };
}
function parseKeyPairsIntoRecord2(value) {
  const result = {};
  if (typeof value === "string" && value.length > 0) {
    value.split(BAGGAGE_ITEMS_SEPARATOR2).forEach((entry) => {
      const keyPair = parsePairKeyValue2(entry);
      if (keyPair !== void 0 && keyPair.value.length > 0) {
        result[keyPair.key] = keyPair.value;
      }
    });
  }
  return result;
}

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js
function loggingErrorHandler2() {
  return (ex) => {
    diag.error(stringifyException2(ex));
  };
}
function stringifyException2(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException2(ex));
  }
}
function flattenException2(ex) {
  const result = {};
  let current = ex;
  while (current !== null) {
    Object.getOwnPropertyNames(current).forEach((propertyName) => {
      if (result[propertyName])
        return;
      const value = current[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current = Object.getPrototypeOf(current);
  }
  return result;
}

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js
var delegateHandler2 = loggingErrorHandler2();

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js
import { inspect as inspect2 } from "util";
function getNumberFromEnv2(key) {
  const raw = process.env[key];
  if (raw == null || raw.trim() === "") {
    return void 0;
  }
  const value = Number(raw);
  if (isNaN(value)) {
    diag.warn(`Unknown value ${inspect2(raw)} for ${key}, expected a number, using defaults`);
    return void 0;
  }
  return value;
}
function getStringFromEnv2(key) {
  const raw = process.env[key];
  if (raw == null || raw.trim() === "") {
    return void 0;
  }
  return raw;
}

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/platform/node/globalThis.js
var _globalThis2 = typeof globalThis === "object" ? globalThis : global;

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js
import { performance as performance2 } from "perf_hooks";

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/version.js
var VERSION3 = "2.1.0";

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/semconv.js
var ATTR_PROCESS_RUNTIME_NAME2 = "process.runtime.name";

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js
var SDK_INFO2 = {
  [ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
  [ATTR_PROCESS_RUNTIME_NAME2]: "node",
  [ATTR_TELEMETRY_SDK_LANGUAGE]: TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
  [ATTR_TELEMETRY_SDK_VERSION]: VERSION3
};

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/common/time.js
var NANOSECOND_DIGITS2 = 9;
var NANOSECOND_DIGITS_IN_MILLIS2 = 6;
var MILLISECONDS_TO_NANOSECONDS2 = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS2);
var SECOND_TO_NANOSECONDS2 = Math.pow(10, NANOSECOND_DIGITS2);

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/ExportResult.js
var ExportResultCode2;
(function(ExportResultCode5) {
  ExportResultCode5[ExportResultCode5["SUCCESS"] = 0] = "SUCCESS";
  ExportResultCode5[ExportResultCode5["FAILED"] = 1] = "FAILED";
})(ExportResultCode2 || (ExportResultCode2 = {}));

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/internal/validators.js
var VALID_KEY_CHAR_RANGE2 = "[_0-9a-z-*/]";
var VALID_KEY2 = `[a-z]${VALID_KEY_CHAR_RANGE2}{0,255}`;
var VALID_VENDOR_KEY2 = `[a-z0-9]${VALID_KEY_CHAR_RANGE2}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE2}{0,13}`;
var VALID_KEY_REGEX2 = new RegExp(`^(?:${VALID_KEY2}|${VALID_VENDOR_KEY2})$`);

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js
var VERSION_PART2 = "(?!ff)[\\da-f]{2}";
var TRACE_ID_PART2 = "(?![0]{32})[\\da-f]{32}";
var PARENT_ID_PART2 = "(?![0]{16})[\\da-f]{16}";
var FLAGS_PART2 = "[\\da-f]{2}";
var TRACE_PARENT_REGEX2 = new RegExp(`^\\s?(${VERSION_PART2})-(${TRACE_ID_PART2})-(${PARENT_ID_PART2})-(${FLAGS_PART2})(-.*)?\\s?$`);

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js
var RPC_METADATA_KEY2 = createContextKey("OpenTelemetry SDK Context Key RPC_METADATA");
var RPCType2;
(function(RPCType5) {
  RPCType5["HTTP"] = "http";
})(RPCType2 || (RPCType2 = {}));

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js
var funcProto2 = Function.prototype;
var funcToString2 = funcProto2.toString;
var objectCtorString2 = funcToString2.call(Object);
var objectProto2 = Object.prototype;
var hasOwnProperty2 = objectProto2.hasOwnProperty;
var nativeObjectToString2 = objectProto2.toString;

// node_modules/@opentelemetry/otlp-exporter-base/node_modules/@opentelemetry/core/build/esm/utils/configuration.js
var logLevelMap2 = {
  ALL: DiagLogLevel.ALL,
  VERBOSE: DiagLogLevel.VERBOSE,
  DEBUG: DiagLogLevel.DEBUG,
  INFO: DiagLogLevel.INFO,
  WARN: DiagLogLevel.WARN,
  ERROR: DiagLogLevel.ERROR,
  NONE: DiagLogLevel.NONE
};

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/logging-response-handler.js
function isPartialSuccessResponse(response) {
  return Object.prototype.hasOwnProperty.call(response, "partialSuccess");
}
function createLoggingPartialSuccessResponseHandler() {
  return {
    handleResponse(response) {
      if (response == null || !isPartialSuccessResponse(response) || response.partialSuccess == null || Object.keys(response.partialSuccess).length === 0) {
        return;
      }
      diag.warn("Received Partial Success response:", JSON.stringify(response.partialSuccess));
    }
  };
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/otlp-export-delegate.js
var OTLPExportDelegate = class {
  _transport;
  _serializer;
  _responseHandler;
  _promiseQueue;
  _timeout;
  _diagLogger;
  constructor(_transport, _serializer, _responseHandler, _promiseQueue, _timeout) {
    this._transport = _transport;
    this._serializer = _serializer;
    this._responseHandler = _responseHandler;
    this._promiseQueue = _promiseQueue;
    this._timeout = _timeout;
    this._diagLogger = diag.createComponentLogger({
      namespace: "OTLPExportDelegate"
    });
  }
  export(internalRepresentation, resultCallback) {
    this._diagLogger.debug("items to be sent", internalRepresentation);
    if (this._promiseQueue.hasReachedLimit()) {
      resultCallback({
        code: ExportResultCode2.FAILED,
        error: new Error("Concurrent export limit reached")
      });
      return;
    }
    const serializedRequest = this._serializer.serializeRequest(internalRepresentation);
    if (serializedRequest == null) {
      resultCallback({
        code: ExportResultCode2.FAILED,
        error: new Error("Nothing to send")
      });
      return;
    }
    this._promiseQueue.pushPromise(this._transport.send(serializedRequest, this._timeout).then((response) => {
      if (response.status === "success") {
        if (response.data != null) {
          try {
            this._responseHandler.handleResponse(this._serializer.deserializeResponse(response.data));
          } catch (e) {
            this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", e, response.data);
          }
        }
        resultCallback({
          code: ExportResultCode2.SUCCESS
        });
        return;
      } else if (response.status === "failure" && response.error) {
        resultCallback({
          code: ExportResultCode2.FAILED,
          error: response.error
        });
        return;
      } else if (response.status === "retryable") {
        resultCallback({
          code: ExportResultCode2.FAILED,
          error: new OTLPExporterError("Export failed with retryable status")
        });
      } else {
        resultCallback({
          code: ExportResultCode2.FAILED,
          error: new OTLPExporterError("Export failed with unknown error")
        });
      }
    }, (reason) => resultCallback({
      code: ExportResultCode2.FAILED,
      error: reason
    })));
  }
  forceFlush() {
    return this._promiseQueue.awaitAll();
  }
  async shutdown() {
    this._diagLogger.debug("shutdown started");
    await this.forceFlush();
    this._transport.shutdown();
  }
};
function createOtlpExportDelegate(components, settings) {
  return new OTLPExportDelegate(components.transport, components.serializer, createLoggingPartialSuccessResponseHandler(), components.promiseHandler, settings.timeout);
}

// node_modules/@opentelemetry/otlp-transformer/build/esm/logs/protobuf/logs.js
var root = __toESM(require_root());

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js
var SUPPRESS_TRACING_KEY3 = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js
function loggingErrorHandler3() {
  return (ex) => {
    diag.error(stringifyException3(ex));
  };
}
function stringifyException3(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException3(ex));
  }
}
function flattenException3(ex) {
  const result = {};
  let current = ex;
  while (current !== null) {
    Object.getOwnPropertyNames(current).forEach((propertyName) => {
      if (result[propertyName])
        return;
      const value = current[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current = Object.getPrototypeOf(current);
  }
  return result;
}

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js
var delegateHandler3 = loggingErrorHandler3();

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js
import { inspect as inspect3 } from "util";

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/platform/node/globalThis.js
var _globalThis3 = typeof globalThis === "object" ? globalThis : global;

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js
import { performance as performance3 } from "perf_hooks";

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/version.js
var VERSION4 = "2.1.0";

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/semconv.js
var ATTR_PROCESS_RUNTIME_NAME3 = "process.runtime.name";

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js
var SDK_INFO3 = {
  [ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
  [ATTR_PROCESS_RUNTIME_NAME3]: "node",
  [ATTR_TELEMETRY_SDK_LANGUAGE]: TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
  [ATTR_TELEMETRY_SDK_VERSION]: VERSION4
};

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/common/time.js
var NANOSECOND_DIGITS3 = 9;
var NANOSECOND_DIGITS_IN_MILLIS3 = 6;
var MILLISECONDS_TO_NANOSECONDS3 = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS3);
var SECOND_TO_NANOSECONDS3 = Math.pow(10, NANOSECOND_DIGITS3);
function hrTimeToNanoseconds3(time) {
  return time[0] * SECOND_TO_NANOSECONDS3 + time[1];
}

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/ExportResult.js
var ExportResultCode3;
(function(ExportResultCode5) {
  ExportResultCode5[ExportResultCode5["SUCCESS"] = 0] = "SUCCESS";
  ExportResultCode5[ExportResultCode5["FAILED"] = 1] = "FAILED";
})(ExportResultCode3 || (ExportResultCode3 = {}));

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/internal/validators.js
var VALID_KEY_CHAR_RANGE3 = "[_0-9a-z-*/]";
var VALID_KEY3 = `[a-z]${VALID_KEY_CHAR_RANGE3}{0,255}`;
var VALID_VENDOR_KEY3 = `[a-z0-9]${VALID_KEY_CHAR_RANGE3}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE3}{0,13}`;
var VALID_KEY_REGEX3 = new RegExp(`^(?:${VALID_KEY3}|${VALID_VENDOR_KEY3})$`);

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js
var VERSION_PART3 = "(?!ff)[\\da-f]{2}";
var TRACE_ID_PART3 = "(?![0]{32})[\\da-f]{32}";
var PARENT_ID_PART3 = "(?![0]{16})[\\da-f]{16}";
var FLAGS_PART3 = "[\\da-f]{2}";
var TRACE_PARENT_REGEX3 = new RegExp(`^\\s?(${VERSION_PART3})-(${TRACE_ID_PART3})-(${PARENT_ID_PART3})-(${FLAGS_PART3})(-.*)?\\s?$`);

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js
var RPC_METADATA_KEY3 = createContextKey("OpenTelemetry SDK Context Key RPC_METADATA");
var RPCType3;
(function(RPCType5) {
  RPCType5["HTTP"] = "http";
})(RPCType3 || (RPCType3 = {}));

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js
var funcProto3 = Function.prototype;
var funcToString3 = funcProto3.toString;
var objectCtorString3 = funcToString3.call(Object);
var objectProto3 = Object.prototype;
var hasOwnProperty3 = objectProto3.hasOwnProperty;
var nativeObjectToString3 = objectProto3.toString;

// node_modules/@opentelemetry/otlp-transformer/node_modules/@opentelemetry/core/build/esm/utils/configuration.js
var logLevelMap3 = {
  ALL: DiagLogLevel.ALL,
  VERBOSE: DiagLogLevel.VERBOSE,
  DEBUG: DiagLogLevel.DEBUG,
  INFO: DiagLogLevel.INFO,
  WARN: DiagLogLevel.WARN,
  ERROR: DiagLogLevel.ERROR,
  NONE: DiagLogLevel.NONE
};

// node_modules/@opentelemetry/otlp-transformer/build/esm/common/hex-to-binary.js
function intValue(charCode) {
  if (charCode >= 48 && charCode <= 57) {
    return charCode - 48;
  }
  if (charCode >= 97 && charCode <= 102) {
    return charCode - 87;
  }
  return charCode - 55;
}
function hexToBinary(hexStr) {
  const buf = new Uint8Array(hexStr.length / 2);
  let offset = 0;
  for (let i = 0; i < hexStr.length; i += 2) {
    const hi = intValue(hexStr.charCodeAt(i));
    const lo = intValue(hexStr.charCodeAt(i + 1));
    buf[offset++] = hi << 4 | lo;
  }
  return buf;
}

// node_modules/@opentelemetry/otlp-transformer/build/esm/common/utils.js
function hrTimeToNanos(hrTime5) {
  const NANOSECONDS = BigInt(1e9);
  return BigInt(Math.trunc(hrTime5[0])) * NANOSECONDS + BigInt(Math.trunc(hrTime5[1]));
}
function toLongBits(value) {
  const low = Number(BigInt.asUintN(32, value));
  const high = Number(BigInt.asUintN(32, value >> BigInt(32)));
  return { low, high };
}
function encodeAsLongBits(hrTime5) {
  const nanos = hrTimeToNanos(hrTime5);
  return toLongBits(nanos);
}
function encodeAsString(hrTime5) {
  const nanos = hrTimeToNanos(hrTime5);
  return nanos.toString();
}
var encodeTimestamp = typeof BigInt !== "undefined" ? encodeAsString : hrTimeToNanoseconds3;
function identity(value) {
  return value;
}
function optionalHexToBinary(str) {
  if (str === void 0)
    return void 0;
  return hexToBinary(str);
}
var DEFAULT_ENCODER = {
  encodeHrTime: encodeAsLongBits,
  encodeSpanContext: hexToBinary,
  encodeOptionalSpanContext: optionalHexToBinary
};
function getOtlpEncoder(options) {
  if (options === void 0) {
    return DEFAULT_ENCODER;
  }
  const useLongBits = options.useLongBits ?? true;
  const useHex = options.useHex ?? false;
  return {
    encodeHrTime: useLongBits ? encodeAsLongBits : encodeTimestamp,
    encodeSpanContext: useHex ? identity : hexToBinary,
    encodeOptionalSpanContext: useHex ? identity : optionalHexToBinary
  };
}

// node_modules/@opentelemetry/otlp-transformer/build/esm/common/internal.js
function createResource(resource) {
  const result = {
    attributes: toAttributes(resource.attributes),
    droppedAttributesCount: 0
  };
  const schemaUrl = resource.schemaUrl;
  if (schemaUrl && schemaUrl !== "")
    result.schemaUrl = schemaUrl;
  return result;
}
function createInstrumentationScope(scope) {
  return {
    name: scope.name,
    version: scope.version
  };
}
function toAttributes(attributes) {
  return Object.keys(attributes).map((key) => toKeyValue(key, attributes[key]));
}
function toKeyValue(key, value) {
  return {
    key,
    value: toAnyValue(value)
  };
}
function toAnyValue(value) {
  const t = typeof value;
  if (t === "string")
    return { stringValue: value };
  if (t === "number") {
    if (!Number.isInteger(value))
      return { doubleValue: value };
    return { intValue: value };
  }
  if (t === "boolean")
    return { boolValue: value };
  if (value instanceof Uint8Array)
    return { bytesValue: value };
  if (Array.isArray(value))
    return { arrayValue: { values: value.map(toAnyValue) } };
  if (t === "object" && value != null)
    return {
      kvlistValue: {
        values: Object.entries(value).map(([k, v]) => toKeyValue(k, v))
      }
    };
  return {};
}

// node_modules/@opentelemetry/otlp-transformer/build/esm/logs/protobuf/logs.js
var logsResponseType = root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse;
var logsRequestType = root.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;

// node_modules/@opentelemetry/otlp-transformer/build/esm/metrics/protobuf/metrics.js
var root2 = __toESM(require_root());

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/AggregationTemporality.js
var AggregationTemporality;
(function(AggregationTemporality2) {
  AggregationTemporality2[AggregationTemporality2["DELTA"] = 0] = "DELTA";
  AggregationTemporality2[AggregationTemporality2["CUMULATIVE"] = 1] = "CUMULATIVE";
})(AggregationTemporality || (AggregationTemporality = {}));

// node_modules/@opentelemetry/sdk-metrics/build/esm/export/MetricData.js
var InstrumentType;
(function(InstrumentType2) {
  InstrumentType2["COUNTER"] = "COUNTER";
  InstrumentType2["GAUGE"] = "GAUGE";
  InstrumentType2["HISTOGRAM"] = "HISTOGRAM";
  InstrumentType2["UP_DOWN_COUNTER"] = "UP_DOWN_COUNTER";
  InstrumentType2["OBSERVABLE_COUNTER"] = "OBSERVABLE_COUNTER";
  InstrumentType2["OBSERVABLE_GAUGE"] = "OBSERVABLE_GAUGE";
  InstrumentType2["OBSERVABLE_UP_DOWN_COUNTER"] = "OBSERVABLE_UP_DOWN_COUNTER";
})(InstrumentType || (InstrumentType = {}));
var DataPointType;
(function(DataPointType2) {
  DataPointType2[DataPointType2["HISTOGRAM"] = 0] = "HISTOGRAM";
  DataPointType2[DataPointType2["EXPONENTIAL_HISTOGRAM"] = 1] = "EXPONENTIAL_HISTOGRAM";
  DataPointType2[DataPointType2["GAUGE"] = 2] = "GAUGE";
  DataPointType2[DataPointType2["SUM"] = 3] = "SUM";
})(DataPointType || (DataPointType = {}));

// node_modules/@opentelemetry/sdk-metrics/build/esm/utils.js
function binarySearchUB(arr, value) {
  let lo = 0;
  let hi = arr.length - 1;
  let ret = arr.length;
  while (hi >= lo) {
    const mid = lo + Math.trunc((hi - lo) / 2);
    if (arr[mid] < value) {
      lo = mid + 1;
    } else {
      ret = mid;
      hi = mid - 1;
    }
  }
  return ret;
}

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/types.js
var AggregatorKind;
(function(AggregatorKind2) {
  AggregatorKind2[AggregatorKind2["DROP"] = 0] = "DROP";
  AggregatorKind2[AggregatorKind2["SUM"] = 1] = "SUM";
  AggregatorKind2[AggregatorKind2["LAST_VALUE"] = 2] = "LAST_VALUE";
  AggregatorKind2[AggregatorKind2["HISTOGRAM"] = 3] = "HISTOGRAM";
  AggregatorKind2[AggregatorKind2["EXPONENTIAL_HISTOGRAM"] = 4] = "EXPONENTIAL_HISTOGRAM";
})(AggregatorKind || (AggregatorKind = {}));

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Drop.js
var DropAggregator = class {
  kind = AggregatorKind.DROP;
  createAccumulation() {
    return void 0;
  }
  merge(_previous, _delta) {
    return void 0;
  }
  diff(_previous, _current) {
    return void 0;
  }
  toMetricData(_descriptor, _aggregationTemporality, _accumulationByAttributes, _endTime) {
    return void 0;
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Histogram.js
function createNewEmptyCheckpoint(boundaries) {
  const counts = boundaries.map(() => 0);
  counts.push(0);
  return {
    buckets: {
      boundaries,
      counts
    },
    sum: 0,
    count: 0,
    hasMinMax: false,
    min: Infinity,
    max: -Infinity
  };
}
var HistogramAccumulation = class {
  startTime;
  _boundaries;
  _recordMinMax;
  _current;
  constructor(startTime, _boundaries, _recordMinMax = true, _current = createNewEmptyCheckpoint(_boundaries)) {
    this.startTime = startTime;
    this._boundaries = _boundaries;
    this._recordMinMax = _recordMinMax;
    this._current = _current;
  }
  record(value) {
    if (Number.isNaN(value)) {
      return;
    }
    this._current.count += 1;
    this._current.sum += value;
    if (this._recordMinMax) {
      this._current.min = Math.min(value, this._current.min);
      this._current.max = Math.max(value, this._current.max);
      this._current.hasMinMax = true;
    }
    const idx = binarySearchUB(this._boundaries, value);
    this._current.buckets.counts[idx] += 1;
  }
  setStartTime(startTime) {
    this.startTime = startTime;
  }
  toPointValue() {
    return this._current;
  }
};
var HistogramAggregator = class {
  _boundaries;
  _recordMinMax;
  kind = AggregatorKind.HISTOGRAM;
  /**
   * @param _boundaries sorted upper bounds of recorded values.
   * @param _recordMinMax If set to true, min and max will be recorded. Otherwise, min and max will not be recorded.
   */
  constructor(_boundaries, _recordMinMax) {
    this._boundaries = _boundaries;
    this._recordMinMax = _recordMinMax;
  }
  createAccumulation(startTime) {
    return new HistogramAccumulation(startTime, this._boundaries, this._recordMinMax);
  }
  /**
   * Return the result of the merge of two histogram accumulations. As long as one Aggregator
   * instance produces all Accumulations with constant boundaries we don't need to worry about
   * merging accumulations with different boundaries.
   */
  merge(previous, delta) {
    const previousValue = previous.toPointValue();
    const deltaValue = delta.toPointValue();
    const previousCounts = previousValue.buckets.counts;
    const deltaCounts = deltaValue.buckets.counts;
    const mergedCounts = new Array(previousCounts.length);
    for (let idx = 0; idx < previousCounts.length; idx++) {
      mergedCounts[idx] = previousCounts[idx] + deltaCounts[idx];
    }
    let min = Infinity;
    let max = -Infinity;
    if (this._recordMinMax) {
      if (previousValue.hasMinMax && deltaValue.hasMinMax) {
        min = Math.min(previousValue.min, deltaValue.min);
        max = Math.max(previousValue.max, deltaValue.max);
      } else if (previousValue.hasMinMax) {
        min = previousValue.min;
        max = previousValue.max;
      } else if (deltaValue.hasMinMax) {
        min = deltaValue.min;
        max = deltaValue.max;
      }
    }
    return new HistogramAccumulation(previous.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
      buckets: {
        boundaries: previousValue.buckets.boundaries,
        counts: mergedCounts
      },
      count: previousValue.count + deltaValue.count,
      sum: previousValue.sum + deltaValue.sum,
      hasMinMax: this._recordMinMax && (previousValue.hasMinMax || deltaValue.hasMinMax),
      min,
      max
    });
  }
  /**
   * Returns a new DELTA aggregation by comparing two cumulative measurements.
   */
  diff(previous, current) {
    const previousValue = previous.toPointValue();
    const currentValue = current.toPointValue();
    const previousCounts = previousValue.buckets.counts;
    const currentCounts = currentValue.buckets.counts;
    const diffedCounts = new Array(previousCounts.length);
    for (let idx = 0; idx < previousCounts.length; idx++) {
      diffedCounts[idx] = currentCounts[idx] - previousCounts[idx];
    }
    return new HistogramAccumulation(current.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
      buckets: {
        boundaries: previousValue.buckets.boundaries,
        counts: diffedCounts
      },
      count: currentValue.count - previousValue.count,
      sum: currentValue.sum - previousValue.sum,
      hasMinMax: false,
      min: Infinity,
      max: -Infinity
    });
  }
  toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
    return {
      descriptor,
      aggregationTemporality,
      dataPointType: DataPointType.HISTOGRAM,
      dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
        const pointValue = accumulation.toPointValue();
        const allowsNegativeValues = descriptor.type === InstrumentType.GAUGE || descriptor.type === InstrumentType.UP_DOWN_COUNTER || descriptor.type === InstrumentType.OBSERVABLE_GAUGE || descriptor.type === InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
        return {
          attributes,
          startTime: accumulation.startTime,
          endTime,
          value: {
            min: pointValue.hasMinMax ? pointValue.min : void 0,
            max: pointValue.hasMinMax ? pointValue.max : void 0,
            sum: !allowsNegativeValues ? pointValue.sum : void 0,
            buckets: pointValue.buckets,
            count: pointValue.count
          }
        };
      })
    };
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/Buckets.js
var Buckets = class _Buckets {
  backing;
  indexBase;
  indexStart;
  indexEnd;
  /**
   * The term index refers to the number of the exponential histogram bucket
   * used to determine its boundaries. The lower boundary of a bucket is
   * determined by base ** index and the upper boundary of a bucket is
   * determined by base ** (index + 1). index values are signed to account
   * for values less than or equal to 1.
   *
   * indexBase is the index of the 0th position in the
   * backing array, i.e., backing[0] is the count
   * in the bucket with index `indexBase`.
   *
   * indexStart is the smallest index value represented
   * in the backing array.
   *
   * indexEnd is the largest index value represented in
   * the backing array.
   */
  constructor(backing = new BucketsBacking(), indexBase = 0, indexStart = 0, indexEnd = 0) {
    this.backing = backing;
    this.indexBase = indexBase;
    this.indexStart = indexStart;
    this.indexEnd = indexEnd;
  }
  /**
   * Offset is the bucket index of the smallest entry in the counts array
   * @returns {number}
   */
  get offset() {
    return this.indexStart;
  }
  /**
   * Buckets is a view into the backing array.
   * @returns {number}
   */
  get length() {
    if (this.backing.length === 0) {
      return 0;
    }
    if (this.indexEnd === this.indexStart && this.at(0) === 0) {
      return 0;
    }
    return this.indexEnd - this.indexStart + 1;
  }
  /**
   * An array of counts, where count[i] carries the count
   * of the bucket at index (offset+i).  count[i] is the count of
   * values greater than base^(offset+i) and less than or equal to
   * base^(offset+i+1).
   * @returns {number} The logical counts based on the backing array
   */
  counts() {
    return Array.from({ length: this.length }, (_, i) => this.at(i));
  }
  /**
   * At returns the count of the bucket at a position in the logical
   * array of counts.
   * @param position
   * @returns {number}
   */
  at(position) {
    const bias = this.indexBase - this.indexStart;
    if (position < bias) {
      position += this.backing.length;
    }
    position -= bias;
    return this.backing.countAt(position);
  }
  /**
   * incrementBucket increments the backing array index by `increment`
   * @param bucketIndex
   * @param increment
   */
  incrementBucket(bucketIndex, increment) {
    this.backing.increment(bucketIndex, increment);
  }
  /**
   * decrementBucket decrements the backing array index by `decrement`
   * if decrement is greater than the current value, it's set to 0.
   * @param bucketIndex
   * @param decrement
   */
  decrementBucket(bucketIndex, decrement) {
    this.backing.decrement(bucketIndex, decrement);
  }
  /**
   * trim removes leading and / or trailing zero buckets (which can occur
   * after diffing two histos) and rotates the backing array so that the
   * smallest non-zero index is in the 0th position of the backing array
   */
  trim() {
    for (let i = 0; i < this.length; i++) {
      if (this.at(i) !== 0) {
        this.indexStart += i;
        break;
      } else if (i === this.length - 1) {
        this.indexStart = this.indexEnd = this.indexBase = 0;
        return;
      }
    }
    for (let i = this.length - 1; i >= 0; i--) {
      if (this.at(i) !== 0) {
        this.indexEnd -= this.length - i - 1;
        break;
      }
    }
    this._rotate();
  }
  /**
   * downscale first rotates, then collapses 2**`by`-to-1 buckets.
   * @param by
   */
  downscale(by) {
    this._rotate();
    const size = 1 + this.indexEnd - this.indexStart;
    const each = 1 << by;
    let inpos = 0;
    let outpos = 0;
    for (let pos = this.indexStart; pos <= this.indexEnd; ) {
      let mod2 = pos % each;
      if (mod2 < 0) {
        mod2 += each;
      }
      for (let i = mod2; i < each && inpos < size; i++) {
        this._relocateBucket(outpos, inpos);
        inpos++;
        pos++;
      }
      outpos++;
    }
    this.indexStart >>= by;
    this.indexEnd >>= by;
    this.indexBase = this.indexStart;
  }
  /**
   * Clone returns a deep copy of Buckets
   * @returns {Buckets}
   */
  clone() {
    return new _Buckets(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
  }
  /**
   * _rotate shifts the backing array contents so that indexStart ==
   * indexBase to simplify the downscale logic.
   */
  _rotate() {
    const bias = this.indexBase - this.indexStart;
    if (bias === 0) {
      return;
    } else if (bias > 0) {
      this.backing.reverse(0, this.backing.length);
      this.backing.reverse(0, bias);
      this.backing.reverse(bias, this.backing.length);
    } else {
      this.backing.reverse(0, this.backing.length);
      this.backing.reverse(0, this.backing.length + bias);
    }
    this.indexBase = this.indexStart;
  }
  /**
   * _relocateBucket adds the count in counts[src] to counts[dest] and
   * resets count[src] to zero.
   */
  _relocateBucket(dest, src) {
    if (dest === src) {
      return;
    }
    this.incrementBucket(dest, this.backing.emptyBucket(src));
  }
};
var BucketsBacking = class _BucketsBacking {
  _counts;
  constructor(_counts = [0]) {
    this._counts = _counts;
  }
  /**
   * length returns the physical size of the backing array, which
   * is >= buckets.length()
   */
  get length() {
    return this._counts.length;
  }
  /**
   * countAt returns the count in a specific bucket
   */
  countAt(pos) {
    return this._counts[pos];
  }
  /**
   * growTo grows a backing array and copies old entries
   * into their correct new positions.
   */
  growTo(newSize, oldPositiveLimit, newPositiveLimit) {
    const tmp = new Array(newSize).fill(0);
    tmp.splice(newPositiveLimit, this._counts.length - oldPositiveLimit, ...this._counts.slice(oldPositiveLimit));
    tmp.splice(0, oldPositiveLimit, ...this._counts.slice(0, oldPositiveLimit));
    this._counts = tmp;
  }
  /**
   * reverse the items in the backing array in the range [from, limit).
   */
  reverse(from, limit) {
    const num = Math.floor((from + limit) / 2) - from;
    for (let i = 0; i < num; i++) {
      const tmp = this._counts[from + i];
      this._counts[from + i] = this._counts[limit - i - 1];
      this._counts[limit - i - 1] = tmp;
    }
  }
  /**
   * emptyBucket empties the count from a bucket, for
   * moving into another.
   */
  emptyBucket(src) {
    const tmp = this._counts[src];
    this._counts[src] = 0;
    return tmp;
  }
  /**
   * increments a bucket by `increment`
   */
  increment(bucketIndex, increment) {
    this._counts[bucketIndex] += increment;
  }
  /**
   * decrements a bucket by `decrement`
   */
  decrement(bucketIndex, decrement) {
    if (this._counts[bucketIndex] >= decrement) {
      this._counts[bucketIndex] -= decrement;
    } else {
      this._counts[bucketIndex] = 0;
    }
  }
  /**
   * clone returns a deep copy of BucketsBacking
   */
  clone() {
    return new _BucketsBacking([...this._counts]);
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/ieee754.js
var SIGNIFICAND_WIDTH = 52;
var EXPONENT_MASK = 2146435072;
var SIGNIFICAND_MASK = 1048575;
var EXPONENT_BIAS = 1023;
var MIN_NORMAL_EXPONENT = -EXPONENT_BIAS + 1;
var MAX_NORMAL_EXPONENT = EXPONENT_BIAS;
var MIN_VALUE = Math.pow(2, -1022);
function getNormalBase2(value) {
  const dv = new DataView(new ArrayBuffer(8));
  dv.setFloat64(0, value);
  const hiBits = dv.getUint32(0);
  const expBits = (hiBits & EXPONENT_MASK) >> 20;
  return expBits - EXPONENT_BIAS;
}
function getSignificand(value) {
  const dv = new DataView(new ArrayBuffer(8));
  dv.setFloat64(0, value);
  const hiBits = dv.getUint32(0);
  const loBits = dv.getUint32(4);
  const significandHiBits = (hiBits & SIGNIFICAND_MASK) * Math.pow(2, 32);
  return significandHiBits + loBits;
}

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/util.js
function ldexp(frac, exp) {
  if (frac === 0 || frac === Number.POSITIVE_INFINITY || frac === Number.NEGATIVE_INFINITY || Number.isNaN(frac)) {
    return frac;
  }
  return frac * Math.pow(2, exp);
}
function nextGreaterSquare(v) {
  v--;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v++;
  return v;
}

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/types.js
var MappingError = class extends Error {
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/ExponentMapping.js
var ExponentMapping = class {
  _shift;
  constructor(scale) {
    this._shift = -scale;
  }
  /**
   * Maps positive floating point values to indexes corresponding to scale
   * @param value
   * @returns {number} index for provided value at the current scale
   */
  mapToIndex(value) {
    if (value < MIN_VALUE) {
      return this._minNormalLowerBoundaryIndex();
    }
    const exp = getNormalBase2(value);
    const correction = this._rightShift(getSignificand(value) - 1, SIGNIFICAND_WIDTH);
    return exp + correction >> this._shift;
  }
  /**
   * Returns the lower bucket boundary for the given index for scale
   *
   * @param index
   * @returns {number}
   */
  lowerBoundary(index) {
    const minIndex = this._minNormalLowerBoundaryIndex();
    if (index < minIndex) {
      throw new MappingError(`underflow: ${index} is < minimum lower boundary: ${minIndex}`);
    }
    const maxIndex = this._maxNormalLowerBoundaryIndex();
    if (index > maxIndex) {
      throw new MappingError(`overflow: ${index} is > maximum lower boundary: ${maxIndex}`);
    }
    return ldexp(1, index << this._shift);
  }
  /**
   * The scale used by this mapping
   * @returns {number}
   */
  get scale() {
    if (this._shift === 0) {
      return 0;
    }
    return -this._shift;
  }
  _minNormalLowerBoundaryIndex() {
    let index = MIN_NORMAL_EXPONENT >> this._shift;
    if (this._shift < 2) {
      index--;
    }
    return index;
  }
  _maxNormalLowerBoundaryIndex() {
    return MAX_NORMAL_EXPONENT >> this._shift;
  }
  _rightShift(value, shift) {
    return Math.floor(value * Math.pow(2, -shift));
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/LogarithmMapping.js
var LogarithmMapping = class {
  _scale;
  _scaleFactor;
  _inverseFactor;
  constructor(scale) {
    this._scale = scale;
    this._scaleFactor = ldexp(Math.LOG2E, scale);
    this._inverseFactor = ldexp(Math.LN2, -scale);
  }
  /**
   * Maps positive floating point values to indexes corresponding to scale
   * @param value
   * @returns {number} index for provided value at the current scale
   */
  mapToIndex(value) {
    if (value <= MIN_VALUE) {
      return this._minNormalLowerBoundaryIndex() - 1;
    }
    if (getSignificand(value) === 0) {
      const exp = getNormalBase2(value);
      return (exp << this._scale) - 1;
    }
    const index = Math.floor(Math.log(value) * this._scaleFactor);
    const maxIndex = this._maxNormalLowerBoundaryIndex();
    if (index >= maxIndex) {
      return maxIndex;
    }
    return index;
  }
  /**
   * Returns the lower bucket boundary for the given index for scale
   *
   * @param index
   * @returns {number}
   */
  lowerBoundary(index) {
    const maxIndex = this._maxNormalLowerBoundaryIndex();
    if (index >= maxIndex) {
      if (index === maxIndex) {
        return 2 * Math.exp((index - (1 << this._scale)) / this._scaleFactor);
      }
      throw new MappingError(`overflow: ${index} is > maximum lower boundary: ${maxIndex}`);
    }
    const minIndex = this._minNormalLowerBoundaryIndex();
    if (index <= minIndex) {
      if (index === minIndex) {
        return MIN_VALUE;
      } else if (index === minIndex - 1) {
        return Math.exp((index + (1 << this._scale)) / this._scaleFactor) / 2;
      }
      throw new MappingError(`overflow: ${index} is < minimum lower boundary: ${minIndex}`);
    }
    return Math.exp(index * this._inverseFactor);
  }
  /**
   * The scale used by this mapping
   * @returns {number}
   */
  get scale() {
    return this._scale;
  }
  _minNormalLowerBoundaryIndex() {
    return MIN_NORMAL_EXPONENT << this._scale;
  }
  _maxNormalLowerBoundaryIndex() {
    return (MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/getMapping.js
var MIN_SCALE = -10;
var MAX_SCALE = 20;
var PREBUILT_MAPPINGS = Array.from({ length: 31 }, (_, i) => {
  if (i > 10) {
    return new LogarithmMapping(i - 10);
  }
  return new ExponentMapping(i - 10);
});
function getMapping(scale) {
  if (scale > MAX_SCALE || scale < MIN_SCALE) {
    throw new MappingError(`expected scale >= ${MIN_SCALE} && <= ${MAX_SCALE}, got: ${scale}`);
  }
  return PREBUILT_MAPPINGS[scale + 10];
}

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/ExponentialHistogram.js
var HighLow = class _HighLow {
  low;
  high;
  static combine(h1, h2) {
    return new _HighLow(Math.min(h1.low, h2.low), Math.max(h1.high, h2.high));
  }
  constructor(low, high) {
    this.low = low;
    this.high = high;
  }
};
var MAX_SCALE2 = 20;
var DEFAULT_MAX_SIZE = 160;
var MIN_MAX_SIZE = 2;
var ExponentialHistogramAccumulation = class _ExponentialHistogramAccumulation {
  startTime;
  _maxSize;
  _recordMinMax;
  _sum;
  _count;
  _zeroCount;
  _min;
  _max;
  _positive;
  _negative;
  _mapping;
  constructor(startTime, _maxSize = DEFAULT_MAX_SIZE, _recordMinMax = true, _sum = 0, _count = 0, _zeroCount = 0, _min = Number.POSITIVE_INFINITY, _max = Number.NEGATIVE_INFINITY, _positive = new Buckets(), _negative = new Buckets(), _mapping = getMapping(MAX_SCALE2)) {
    this.startTime = startTime;
    this._maxSize = _maxSize;
    this._recordMinMax = _recordMinMax;
    this._sum = _sum;
    this._count = _count;
    this._zeroCount = _zeroCount;
    this._min = _min;
    this._max = _max;
    this._positive = _positive;
    this._negative = _negative;
    this._mapping = _mapping;
    if (this._maxSize < MIN_MAX_SIZE) {
      diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${MIN_MAX_SIZE}`);
      this._maxSize = MIN_MAX_SIZE;
    }
  }
  /**
   * record updates a histogram with a single count
   * @param {Number} value
   */
  record(value) {
    this.updateByIncrement(value, 1);
  }
  /**
   * Sets the start time for this accumulation
   * @param {HrTime} startTime
   */
  setStartTime(startTime) {
    this.startTime = startTime;
  }
  /**
   * Returns the datapoint representation of this accumulation
   * @param {HrTime} startTime
   */
  toPointValue() {
    return {
      hasMinMax: this._recordMinMax,
      min: this.min,
      max: this.max,
      sum: this.sum,
      positive: {
        offset: this.positive.offset,
        bucketCounts: this.positive.counts()
      },
      negative: {
        offset: this.negative.offset,
        bucketCounts: this.negative.counts()
      },
      count: this.count,
      scale: this.scale,
      zeroCount: this.zeroCount
    };
  }
  /**
   * @returns {Number} The sum of values recorded by this accumulation
   */
  get sum() {
    return this._sum;
  }
  /**
   * @returns {Number} The minimum value recorded by this accumulation
   */
  get min() {
    return this._min;
  }
  /**
   * @returns {Number} The maximum value recorded by this accumulation
   */
  get max() {
    return this._max;
  }
  /**
   * @returns {Number} The count of values recorded by this accumulation
   */
  get count() {
    return this._count;
  }
  /**
   * @returns {Number} The number of 0 values recorded by this accumulation
   */
  get zeroCount() {
    return this._zeroCount;
  }
  /**
   * @returns {Number} The scale used by this accumulation
   */
  get scale() {
    if (this._count === this._zeroCount) {
      return 0;
    }
    return this._mapping.scale;
  }
  /**
   * positive holds the positive values
   * @returns {Buckets}
   */
  get positive() {
    return this._positive;
  }
  /**
   * negative holds the negative values by their absolute value
   * @returns {Buckets}
   */
  get negative() {
    return this._negative;
  }
  /**
   * updateByIncr supports updating a histogram with a non-negative
   * increment.
   * @param value
   * @param increment
   */
  updateByIncrement(value, increment) {
    if (Number.isNaN(value)) {
      return;
    }
    if (value > this._max) {
      this._max = value;
    }
    if (value < this._min) {
      this._min = value;
    }
    this._count += increment;
    if (value === 0) {
      this._zeroCount += increment;
      return;
    }
    this._sum += value * increment;
    if (value > 0) {
      this._updateBuckets(this._positive, value, increment);
    } else {
      this._updateBuckets(this._negative, -value, increment);
    }
  }
  /**
   * merge combines data from previous value into self
   * @param {ExponentialHistogramAccumulation} previous
   */
  merge(previous) {
    if (this._count === 0) {
      this._min = previous.min;
      this._max = previous.max;
    } else if (previous.count !== 0) {
      if (previous.min < this.min) {
        this._min = previous.min;
      }
      if (previous.max > this.max) {
        this._max = previous.max;
      }
    }
    this.startTime = previous.startTime;
    this._sum += previous.sum;
    this._count += previous.count;
    this._zeroCount += previous.zeroCount;
    const minScale = this._minScale(previous);
    this._downscale(this.scale - minScale);
    this._mergeBuckets(this.positive, previous, previous.positive, minScale);
    this._mergeBuckets(this.negative, previous, previous.negative, minScale);
  }
  /**
   * diff subtracts other from self
   * @param {ExponentialHistogramAccumulation} other
   */
  diff(other) {
    this._min = Infinity;
    this._max = -Infinity;
    this._sum -= other.sum;
    this._count -= other.count;
    this._zeroCount -= other.zeroCount;
    const minScale = this._minScale(other);
    this._downscale(this.scale - minScale);
    this._diffBuckets(this.positive, other, other.positive, minScale);
    this._diffBuckets(this.negative, other, other.negative, minScale);
  }
  /**
   * clone returns a deep copy of self
   * @returns {ExponentialHistogramAccumulation}
   */
  clone() {
    return new _ExponentialHistogramAccumulation(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
  }
  /**
   * _updateBuckets maps the incoming value to a bucket index for the current
   * scale. If the bucket index is outside of the range of the backing array,
   * it will rescale the backing array and update the mapping for the new scale.
   */
  _updateBuckets(buckets, value, increment) {
    let index = this._mapping.mapToIndex(value);
    let rescalingNeeded = false;
    let high = 0;
    let low = 0;
    if (buckets.length === 0) {
      buckets.indexStart = index;
      buckets.indexEnd = buckets.indexStart;
      buckets.indexBase = buckets.indexStart;
    } else if (index < buckets.indexStart && buckets.indexEnd - index >= this._maxSize) {
      rescalingNeeded = true;
      low = index;
      high = buckets.indexEnd;
    } else if (index > buckets.indexEnd && index - buckets.indexStart >= this._maxSize) {
      rescalingNeeded = true;
      low = buckets.indexStart;
      high = index;
    }
    if (rescalingNeeded) {
      const change = this._changeScale(high, low);
      this._downscale(change);
      index = this._mapping.mapToIndex(value);
    }
    this._incrementIndexBy(buckets, index, increment);
  }
  /**
   * _incrementIndexBy increments the count of the bucket specified by `index`.
   * If the index is outside of the range [buckets.indexStart, buckets.indexEnd]
   * the boundaries of the backing array will be adjusted and more buckets will
   * be added if needed.
   */
  _incrementIndexBy(buckets, index, increment) {
    if (increment === 0) {
      return;
    }
    if (buckets.length === 0) {
      buckets.indexStart = buckets.indexEnd = buckets.indexBase = index;
    }
    if (index < buckets.indexStart) {
      const span = buckets.indexEnd - index;
      if (span >= buckets.backing.length) {
        this._grow(buckets, span + 1);
      }
      buckets.indexStart = index;
    } else if (index > buckets.indexEnd) {
      const span = index - buckets.indexStart;
      if (span >= buckets.backing.length) {
        this._grow(buckets, span + 1);
      }
      buckets.indexEnd = index;
    }
    let bucketIndex = index - buckets.indexBase;
    if (bucketIndex < 0) {
      bucketIndex += buckets.backing.length;
    }
    buckets.incrementBucket(bucketIndex, increment);
  }
  /**
   * grow resizes the backing array by doubling in size up to maxSize.
   * This extends the array with a bunch of zeros and copies the
   * existing counts to the same position.
   */
  _grow(buckets, needed) {
    const size = buckets.backing.length;
    const bias = buckets.indexBase - buckets.indexStart;
    const oldPositiveLimit = size - bias;
    let newSize = nextGreaterSquare(needed);
    if (newSize > this._maxSize) {
      newSize = this._maxSize;
    }
    const newPositiveLimit = newSize - bias;
    buckets.backing.growTo(newSize, oldPositiveLimit, newPositiveLimit);
  }
  /**
   * _changeScale computes how much downscaling is needed by shifting the
   * high and low values until they are separated by no more than size.
   */
  _changeScale(high, low) {
    let change = 0;
    while (high - low >= this._maxSize) {
      high >>= 1;
      low >>= 1;
      change++;
    }
    return change;
  }
  /**
   * _downscale subtracts `change` from the current mapping scale.
   */
  _downscale(change) {
    if (change === 0) {
      return;
    }
    if (change < 0) {
      throw new Error(`impossible change of scale: ${this.scale}`);
    }
    const newScale = this._mapping.scale - change;
    this._positive.downscale(change);
    this._negative.downscale(change);
    this._mapping = getMapping(newScale);
  }
  /**
   * _minScale is used by diff and merge to compute an ideal combined scale
   */
  _minScale(other) {
    const minScale = Math.min(this.scale, other.scale);
    const highLowPos = HighLow.combine(this._highLowAtScale(this.positive, this.scale, minScale), this._highLowAtScale(other.positive, other.scale, minScale));
    const highLowNeg = HighLow.combine(this._highLowAtScale(this.negative, this.scale, minScale), this._highLowAtScale(other.negative, other.scale, minScale));
    return Math.min(minScale - this._changeScale(highLowPos.high, highLowPos.low), minScale - this._changeScale(highLowNeg.high, highLowNeg.low));
  }
  /**
   * _highLowAtScale is used by diff and merge to compute an ideal combined scale.
   */
  _highLowAtScale(buckets, currentScale, newScale) {
    if (buckets.length === 0) {
      return new HighLow(0, -1);
    }
    const shift = currentScale - newScale;
    return new HighLow(buckets.indexStart >> shift, buckets.indexEnd >> shift);
  }
  /**
   * _mergeBuckets translates index values from another histogram and
   * adds the values into the corresponding buckets of this histogram.
   */
  _mergeBuckets(ours, other, theirs, scale) {
    const theirOffset = theirs.offset;
    const theirChange = other.scale - scale;
    for (let i = 0; i < theirs.length; i++) {
      this._incrementIndexBy(ours, theirOffset + i >> theirChange, theirs.at(i));
    }
  }
  /**
   * _diffBuckets translates index values from another histogram and
   * subtracts the values in the corresponding buckets of this histogram.
   */
  _diffBuckets(ours, other, theirs, scale) {
    const theirOffset = theirs.offset;
    const theirChange = other.scale - scale;
    for (let i = 0; i < theirs.length; i++) {
      const ourIndex = theirOffset + i >> theirChange;
      let bucketIndex = ourIndex - ours.indexBase;
      if (bucketIndex < 0) {
        bucketIndex += ours.backing.length;
      }
      ours.decrementBucket(bucketIndex, theirs.at(i));
    }
    ours.trim();
  }
};
var ExponentialHistogramAggregator = class {
  _maxSize;
  _recordMinMax;
  kind = AggregatorKind.EXPONENTIAL_HISTOGRAM;
  /**
   * @param _maxSize Maximum number of buckets for each of the positive
   *    and negative ranges, exclusive of the zero-bucket.
   * @param _recordMinMax If set to true, min and max will be recorded.
   *    Otherwise, min and max will not be recorded.
   */
  constructor(_maxSize, _recordMinMax) {
    this._maxSize = _maxSize;
    this._recordMinMax = _recordMinMax;
  }
  createAccumulation(startTime) {
    return new ExponentialHistogramAccumulation(startTime, this._maxSize, this._recordMinMax);
  }
  /**
   * Return the result of the merge of two exponential histogram accumulations.
   */
  merge(previous, delta) {
    const result = delta.clone();
    result.merge(previous);
    return result;
  }
  /**
   * Returns a new DELTA aggregation by comparing two cumulative measurements.
   */
  diff(previous, current) {
    const result = current.clone();
    result.diff(previous);
    return result;
  }
  toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
    return {
      descriptor,
      aggregationTemporality,
      dataPointType: DataPointType.EXPONENTIAL_HISTOGRAM,
      dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
        const pointValue = accumulation.toPointValue();
        const allowsNegativeValues = descriptor.type === InstrumentType.GAUGE || descriptor.type === InstrumentType.UP_DOWN_COUNTER || descriptor.type === InstrumentType.OBSERVABLE_GAUGE || descriptor.type === InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
        return {
          attributes,
          startTime: accumulation.startTime,
          endTime,
          value: {
            min: pointValue.hasMinMax ? pointValue.min : void 0,
            max: pointValue.hasMinMax ? pointValue.max : void 0,
            sum: !allowsNegativeValues ? pointValue.sum : void 0,
            positive: {
              offset: pointValue.positive.offset,
              bucketCounts: pointValue.positive.bucketCounts
            },
            negative: {
              offset: pointValue.negative.offset,
              bucketCounts: pointValue.negative.bucketCounts
            },
            count: pointValue.count,
            scale: pointValue.scale,
            zeroCount: pointValue.zeroCount
          }
        };
      })
    };
  }
};

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js
var SUPPRESS_TRACING_KEY4 = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js
function loggingErrorHandler4() {
  return (ex) => {
    diag.error(stringifyException4(ex));
  };
}
function stringifyException4(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException4(ex));
  }
}
function flattenException4(ex) {
  const result = {};
  let current = ex;
  while (current !== null) {
    Object.getOwnPropertyNames(current).forEach((propertyName) => {
      if (result[propertyName])
        return;
      const value = current[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current = Object.getPrototypeOf(current);
  }
  return result;
}

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js
var delegateHandler4 = loggingErrorHandler4();

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/platform/node/environment.js
import { inspect as inspect4 } from "util";
function getStringFromEnv4(key) {
  const raw = process.env[key];
  if (raw == null || raw.trim() === "") {
    return void 0;
  }
  return raw;
}

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/platform/node/globalThis.js
var _globalThis4 = typeof globalThis === "object" ? globalThis : global;

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/platform/node/performance.js
import { performance as performance4 } from "perf_hooks";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/version.js
var VERSION5 = "2.1.0";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/semconv.js
var ATTR_PROCESS_RUNTIME_NAME4 = "process.runtime.name";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/platform/node/sdk-info.js
var SDK_INFO4 = {
  [ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
  [ATTR_PROCESS_RUNTIME_NAME4]: "node",
  [ATTR_TELEMETRY_SDK_LANGUAGE]: TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
  [ATTR_TELEMETRY_SDK_VERSION]: VERSION5
};

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/common/time.js
var NANOSECOND_DIGITS4 = 9;
var NANOSECOND_DIGITS_IN_MILLIS4 = 6;
var MILLISECONDS_TO_NANOSECONDS4 = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS4);
var SECOND_TO_NANOSECONDS4 = Math.pow(10, NANOSECOND_DIGITS4);
function millisToHrTime4(epochMillis) {
  const epochSeconds = epochMillis / 1e3;
  const seconds = Math.trunc(epochSeconds);
  const nanos = Math.round(epochMillis % 1e3 * MILLISECONDS_TO_NANOSECONDS4);
  return [seconds, nanos];
}
function hrTimeToMicroseconds4(time) {
  return time[0] * 1e6 + time[1] / 1e3;
}

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/ExportResult.js
var ExportResultCode4;
(function(ExportResultCode5) {
  ExportResultCode5[ExportResultCode5["SUCCESS"] = 0] = "SUCCESS";
  ExportResultCode5[ExportResultCode5["FAILED"] = 1] = "FAILED";
})(ExportResultCode4 || (ExportResultCode4 = {}));

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/internal/validators.js
var VALID_KEY_CHAR_RANGE4 = "[_0-9a-z-*/]";
var VALID_KEY4 = `[a-z]${VALID_KEY_CHAR_RANGE4}{0,255}`;
var VALID_VENDOR_KEY4 = `[a-z0-9]${VALID_KEY_CHAR_RANGE4}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE4}{0,13}`;
var VALID_KEY_REGEX4 = new RegExp(`^(?:${VALID_KEY4}|${VALID_VENDOR_KEY4})$`);

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js
var VERSION_PART4 = "(?!ff)[\\da-f]{2}";
var TRACE_ID_PART4 = "(?![0]{32})[\\da-f]{32}";
var PARENT_ID_PART4 = "(?![0]{16})[\\da-f]{16}";
var FLAGS_PART4 = "[\\da-f]{2}";
var TRACE_PARENT_REGEX4 = new RegExp(`^\\s?(${VERSION_PART4})-(${TRACE_ID_PART4})-(${PARENT_ID_PART4})-(${FLAGS_PART4})(-.*)?\\s?$`);

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/trace/rpc-metadata.js
var RPC_METADATA_KEY4 = createContextKey("OpenTelemetry SDK Context Key RPC_METADATA");
var RPCType4;
(function(RPCType5) {
  RPCType5["HTTP"] = "http";
})(RPCType4 || (RPCType4 = {}));

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js
var funcProto4 = Function.prototype;
var funcToString4 = funcProto4.toString;
var objectCtorString4 = funcToString4.call(Object);
var objectProto4 = Object.prototype;
var hasOwnProperty4 = objectProto4.hasOwnProperty;
var nativeObjectToString4 = objectProto4.toString;

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/core/build/esm/utils/configuration.js
var logLevelMap4 = {
  ALL: DiagLogLevel.ALL,
  VERBOSE: DiagLogLevel.VERBOSE,
  DEBUG: DiagLogLevel.DEBUG,
  INFO: DiagLogLevel.INFO,
  WARN: DiagLogLevel.WARN,
  ERROR: DiagLogLevel.ERROR,
  NONE: DiagLogLevel.NONE
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/LastValue.js
var LastValueAccumulation = class {
  startTime;
  _current;
  sampleTime;
  constructor(startTime, _current = 0, sampleTime = [0, 0]) {
    this.startTime = startTime;
    this._current = _current;
    this.sampleTime = sampleTime;
  }
  record(value) {
    this._current = value;
    this.sampleTime = millisToHrTime4(Date.now());
  }
  setStartTime(startTime) {
    this.startTime = startTime;
  }
  toPointValue() {
    return this._current;
  }
};
var LastValueAggregator = class {
  kind = AggregatorKind.LAST_VALUE;
  createAccumulation(startTime) {
    return new LastValueAccumulation(startTime);
  }
  /**
   * Returns the result of the merge of the given accumulations.
   *
   * Return the newly captured (delta) accumulation for LastValueAggregator.
   */
  merge(previous, delta) {
    const latestAccumulation = hrTimeToMicroseconds4(delta.sampleTime) >= hrTimeToMicroseconds4(previous.sampleTime) ? delta : previous;
    return new LastValueAccumulation(previous.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
  }
  /**
   * Returns a new DELTA aggregation by comparing two cumulative measurements.
   *
   * A delta aggregation is not meaningful to LastValueAggregator, just return
   * the newly captured (delta) accumulation for LastValueAggregator.
   */
  diff(previous, current) {
    const latestAccumulation = hrTimeToMicroseconds4(current.sampleTime) >= hrTimeToMicroseconds4(previous.sampleTime) ? current : previous;
    return new LastValueAccumulation(current.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
  }
  toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
    return {
      descriptor,
      aggregationTemporality,
      dataPointType: DataPointType.GAUGE,
      dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
        return {
          attributes,
          startTime: accumulation.startTime,
          endTime,
          value: accumulation.toPointValue()
        };
      })
    };
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Sum.js
var SumAccumulation = class {
  startTime;
  monotonic;
  _current;
  reset;
  constructor(startTime, monotonic, _current = 0, reset = false) {
    this.startTime = startTime;
    this.monotonic = monotonic;
    this._current = _current;
    this.reset = reset;
  }
  record(value) {
    if (this.monotonic && value < 0) {
      return;
    }
    this._current += value;
  }
  setStartTime(startTime) {
    this.startTime = startTime;
  }
  toPointValue() {
    return this._current;
  }
};
var SumAggregator = class {
  monotonic;
  kind = AggregatorKind.SUM;
  constructor(monotonic) {
    this.monotonic = monotonic;
  }
  createAccumulation(startTime) {
    return new SumAccumulation(startTime, this.monotonic);
  }
  /**
   * Returns the result of the merge of the given accumulations.
   */
  merge(previous, delta) {
    const prevPv = previous.toPointValue();
    const deltaPv = delta.toPointValue();
    if (delta.reset) {
      return new SumAccumulation(delta.startTime, this.monotonic, deltaPv, delta.reset);
    }
    return new SumAccumulation(previous.startTime, this.monotonic, prevPv + deltaPv);
  }
  /**
   * Returns a new DELTA aggregation by comparing two cumulative measurements.
   */
  diff(previous, current) {
    const prevPv = previous.toPointValue();
    const currPv = current.toPointValue();
    if (this.monotonic && prevPv > currPv) {
      return new SumAccumulation(current.startTime, this.monotonic, currPv, true);
    }
    return new SumAccumulation(current.startTime, this.monotonic, currPv - prevPv);
  }
  toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
    return {
      descriptor,
      aggregationTemporality,
      dataPointType: DataPointType.SUM,
      dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
        return {
          attributes,
          startTime: accumulation.startTime,
          endTime,
          value: accumulation.toPointValue()
        };
      }),
      isMonotonic: this.monotonic
    };
  }
};

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/Aggregation.js
var DropAggregation = class _DropAggregation {
  static DEFAULT_INSTANCE = new DropAggregator();
  createAggregator(_instrument) {
    return _DropAggregation.DEFAULT_INSTANCE;
  }
};
var SumAggregation = class _SumAggregation {
  static MONOTONIC_INSTANCE = new SumAggregator(true);
  static NON_MONOTONIC_INSTANCE = new SumAggregator(false);
  createAggregator(instrument) {
    switch (instrument.type) {
      case InstrumentType.COUNTER:
      case InstrumentType.OBSERVABLE_COUNTER:
      case InstrumentType.HISTOGRAM: {
        return _SumAggregation.MONOTONIC_INSTANCE;
      }
      default: {
        return _SumAggregation.NON_MONOTONIC_INSTANCE;
      }
    }
  }
};
var LastValueAggregation = class _LastValueAggregation {
  static DEFAULT_INSTANCE = new LastValueAggregator();
  createAggregator(_instrument) {
    return _LastValueAggregation.DEFAULT_INSTANCE;
  }
};
var HistogramAggregation = class _HistogramAggregation {
  static DEFAULT_INSTANCE = new HistogramAggregator([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4], true);
  createAggregator(_instrument) {
    return _HistogramAggregation.DEFAULT_INSTANCE;
  }
};
var ExplicitBucketHistogramAggregation = class {
  _recordMinMax;
  _boundaries;
  /**
   * @param boundaries the bucket boundaries of the histogram aggregation
   * @param _recordMinMax If set to true, min and max will be recorded. Otherwise, min and max will not be recorded.
   */
  constructor(boundaries, _recordMinMax = true) {
    this._recordMinMax = _recordMinMax;
    if (boundaries == null) {
      throw new Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
    }
    boundaries = boundaries.concat();
    boundaries = boundaries.sort((a, b) => a - b);
    const minusInfinityIndex = boundaries.lastIndexOf(-Infinity);
    let infinityIndex = boundaries.indexOf(Infinity);
    if (infinityIndex === -1) {
      infinityIndex = void 0;
    }
    this._boundaries = boundaries.slice(minusInfinityIndex + 1, infinityIndex);
  }
  createAggregator(_instrument) {
    return new HistogramAggregator(this._boundaries, this._recordMinMax);
  }
};
var ExponentialHistogramAggregation = class {
  _maxSize;
  _recordMinMax;
  constructor(_maxSize = 160, _recordMinMax = true) {
    this._maxSize = _maxSize;
    this._recordMinMax = _recordMinMax;
  }
  createAggregator(_instrument) {
    return new ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
  }
};
var DefaultAggregation = class {
  _resolve(instrument) {
    switch (instrument.type) {
      case InstrumentType.COUNTER:
      case InstrumentType.UP_DOWN_COUNTER:
      case InstrumentType.OBSERVABLE_COUNTER:
      case InstrumentType.OBSERVABLE_UP_DOWN_COUNTER: {
        return SUM_AGGREGATION;
      }
      case InstrumentType.GAUGE:
      case InstrumentType.OBSERVABLE_GAUGE: {
        return LAST_VALUE_AGGREGATION;
      }
      case InstrumentType.HISTOGRAM: {
        if (instrument.advice.explicitBucketBoundaries) {
          return new ExplicitBucketHistogramAggregation(instrument.advice.explicitBucketBoundaries);
        }
        return HISTOGRAM_AGGREGATION;
      }
    }
    diag.warn(`Unable to recognize instrument type: ${instrument.type}`);
    return DROP_AGGREGATION;
  }
  createAggregator(instrument) {
    return this._resolve(instrument).createAggregator(instrument);
  }
};
var DROP_AGGREGATION = new DropAggregation();
var SUM_AGGREGATION = new SumAggregation();
var LAST_VALUE_AGGREGATION = new LastValueAggregation();
var HISTOGRAM_AGGREGATION = new HistogramAggregation();
var EXPONENTIAL_HISTOGRAM_AGGREGATION = new ExponentialHistogramAggregation();
var DEFAULT_AGGREGATION = new DefaultAggregation();

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/AggregationOption.js
var AggregationType;
(function(AggregationType2) {
  AggregationType2[AggregationType2["DEFAULT"] = 0] = "DEFAULT";
  AggregationType2[AggregationType2["DROP"] = 1] = "DROP";
  AggregationType2[AggregationType2["SUM"] = 2] = "SUM";
  AggregationType2[AggregationType2["LAST_VALUE"] = 3] = "LAST_VALUE";
  AggregationType2[AggregationType2["EXPLICIT_BUCKET_HISTOGRAM"] = 4] = "EXPLICIT_BUCKET_HISTOGRAM";
  AggregationType2[AggregationType2["EXPONENTIAL_HISTOGRAM"] = 5] = "EXPONENTIAL_HISTOGRAM";
})(AggregationType || (AggregationType = {}));

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetector.js
var EnvDetector = class {
  // Type, attribute keys, and attribute values should not exceed 256 characters.
  _MAX_LENGTH = 255;
  // OTEL_RESOURCE_ATTRIBUTES is a comma-separated list of attributes.
  _COMMA_SEPARATOR = ",";
  // OTEL_RESOURCE_ATTRIBUTES contains key value pair separated by '='.
  _LABEL_KEY_VALUE_SPLITTER = "=";
  _ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.";
  _ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
  /**
   * Returns a {@link Resource} populated with attributes from the
   * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
   * function to conform to the Detector interface.
   *
   * @param config The resource detection config
   */
  detect(_config) {
    const attributes = {};
    const rawAttributes = getStringFromEnv4("OTEL_RESOURCE_ATTRIBUTES");
    const serviceName2 = getStringFromEnv4("OTEL_SERVICE_NAME");
    if (rawAttributes) {
      try {
        const parsedAttributes = this._parseResourceAttributes(rawAttributes);
        Object.assign(attributes, parsedAttributes);
      } catch (e) {
        diag.debug(`EnvDetector failed: ${e.message}`);
      }
    }
    if (serviceName2) {
      attributes[ATTR_SERVICE_NAME] = serviceName2;
    }
    return { attributes };
  }
  /**
   * Creates an attribute map from the OTEL_RESOURCE_ATTRIBUTES environment
   * variable.
   *
   * OTEL_RESOURCE_ATTRIBUTES: A comma-separated list of attributes describing
   * the source in more detail, e.g. “key1=val1,key2=val2”. Domain names and
   * paths are accepted as attribute keys. Values may be quoted or unquoted in
   * general. If a value contains whitespace, =, or " characters, it must
   * always be quoted.
   *
   * @param rawEnvAttributes The resource attributes as a comma-separated list
   * of key/value pairs.
   * @returns The sanitized resource attributes.
   */
  _parseResourceAttributes(rawEnvAttributes) {
    if (!rawEnvAttributes)
      return {};
    const attributes = {};
    const rawAttributes = rawEnvAttributes.split(this._COMMA_SEPARATOR, -1);
    for (const rawAttribute of rawAttributes) {
      const keyValuePair = rawAttribute.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
      if (keyValuePair.length !== 2) {
        continue;
      }
      let [key, value] = keyValuePair;
      key = key.trim();
      value = value.trim().split(/^"|"$/).join("");
      if (!this._isValidAndNotEmpty(key)) {
        throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
      }
      if (!this._isValid(value)) {
        throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
      }
      attributes[key] = decodeURIComponent(value);
    }
    return attributes;
  }
  /**
   * Determines whether the given String is a valid printable ASCII string with
   * a length not exceed _MAX_LENGTH characters.
   *
   * @param str The String to be validated.
   * @returns Whether the String is valid.
   */
  _isValid(name) {
    return name.length <= this._MAX_LENGTH && this._isBaggageOctetString(name);
  }
  // https://www.w3.org/TR/baggage/#definition
  _isBaggageOctetString(str) {
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      if (ch < 33 || ch === 44 || ch === 59 || ch === 92 || ch > 126) {
        return false;
      }
    }
    return true;
  }
  /**
   * Determines whether the given String is a valid printable ASCII string with
   * a length greater than 0 and not exceed _MAX_LENGTH characters.
   *
   * @param str The String to be validated.
   * @returns Whether the String is valid and not empty.
   */
  _isValidAndNotEmpty(str) {
    return str.length > 0 && this._isValid(str);
  }
};
var envDetector = new EnvDetector();

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/semconv.js
var ATTR_HOST_ARCH = "host.arch";
var ATTR_HOST_ID = "host.id";
var ATTR_HOST_NAME = "host.name";
var ATTR_OS_TYPE = "os.type";
var ATTR_OS_VERSION = "os.version";
var ATTR_PROCESS_COMMAND = "process.command";
var ATTR_PROCESS_COMMAND_ARGS = "process.command_args";
var ATTR_PROCESS_EXECUTABLE_NAME = "process.executable.name";
var ATTR_PROCESS_EXECUTABLE_PATH = "process.executable.path";
var ATTR_PROCESS_OWNER = "process.owner";
var ATTR_PROCESS_PID = "process.pid";
var ATTR_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
var ATTR_PROCESS_RUNTIME_NAME5 = "process.runtime.name";
var ATTR_PROCESS_RUNTIME_VERSION = "process.runtime.version";
var ATTR_SERVICE_INSTANCE_ID = "service.instance.id";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js
import { arch, hostname } from "os";

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId.js
import * as process2 from "process";
var getMachineIdImpl;
async function getMachineId() {
  if (!getMachineIdImpl) {
    switch (process2.platform) {
      case "darwin":
        getMachineIdImpl = (await import("./getMachineId-darwin-DAVDHWDM.js")).getMachineId;
        break;
      case "linux":
        getMachineIdImpl = (await import("./getMachineId-linux-HCBIKQ4C.js")).getMachineId;
        break;
      case "freebsd":
        getMachineIdImpl = (await import("./getMachineId-bsd-RBOBJLYF.js")).getMachineId;
        break;
      case "win32":
        getMachineIdImpl = (await import("./getMachineId-win-W6WKXNBF.js")).getMachineId;
        break;
      default:
        getMachineIdImpl = (await import("./getMachineId-unsupported-VYTNAG62.js")).getMachineId;
        break;
    }
  }
  return getMachineIdImpl();
}

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/utils.js
var normalizeArch = (nodeArchString) => {
  switch (nodeArchString) {
    case "arm":
      return "arm32";
    case "ppc":
      return "ppc32";
    case "x64":
      return "amd64";
    default:
      return nodeArchString;
  }
};
var normalizeType = (nodePlatform) => {
  switch (nodePlatform) {
    case "sunos":
      return "solaris";
    case "win32":
      return "windows";
    default:
      return nodePlatform;
  }
};

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js
var HostDetector = class {
  detect(_config) {
    const attributes = {
      [ATTR_HOST_NAME]: hostname(),
      [ATTR_HOST_ARCH]: normalizeArch(arch()),
      [ATTR_HOST_ID]: getMachineId()
    };
    return { attributes };
  }
};
var hostDetector = new HostDetector();

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetector.js
import { platform as platform2, release } from "os";
var OSDetector = class {
  detect(_config) {
    const attributes = {
      [ATTR_OS_TYPE]: normalizeType(platform2()),
      [ATTR_OS_VERSION]: release()
    };
    return { attributes };
  }
};
var osDetector = new OSDetector();

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetector.js
import * as os from "os";
var ProcessDetector = class {
  detect(_config) {
    const attributes = {
      [ATTR_PROCESS_PID]: process.pid,
      [ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
      [ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
      [ATTR_PROCESS_COMMAND_ARGS]: [
        process.argv[0],
        ...process.execArgv,
        ...process.argv.slice(1)
      ],
      [ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
      [ATTR_PROCESS_RUNTIME_NAME5]: "nodejs",
      [ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
    };
    if (process.argv.length > 1) {
      attributes[ATTR_PROCESS_COMMAND] = process.argv[1];
    }
    try {
      const userInfo3 = os.userInfo();
      attributes[ATTR_PROCESS_OWNER] = userInfo3.username;
    } catch (e) {
      diag.debug(`error obtaining process owner: ${e}`);
    }
    return { attributes };
  }
};
var processDetector = new ProcessDetector();

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ServiceInstanceIdDetector.js
import { randomUUID } from "crypto";
var ServiceInstanceIdDetector = class {
  detect(_config) {
    return {
      attributes: {
        [ATTR_SERVICE_INSTANCE_ID]: randomUUID()
      }
    };
  }
};
var serviceInstanceIdDetector = new ServiceInstanceIdDetector();

// node_modules/@opentelemetry/sdk-metrics/node_modules/@opentelemetry/resources/build/esm/detectors/NoopDetector.js
var NoopDetector = class {
  detect() {
    return {
      attributes: {}
    };
  }
};
var noopDetector = new NoopDetector();

// node_modules/@opentelemetry/sdk-metrics/build/esm/view/AttributesProcessor.js
var NoopAttributesProcessor = class {
  process(incoming, _context) {
    return incoming;
  }
};
var NOOP = new NoopAttributesProcessor();

// node_modules/@opentelemetry/otlp-transformer/build/esm/metrics/internal-types.js
var EAggregationTemporality;
(function(EAggregationTemporality2) {
  EAggregationTemporality2[EAggregationTemporality2["AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
  EAggregationTemporality2[EAggregationTemporality2["AGGREGATION_TEMPORALITY_DELTA"] = 1] = "AGGREGATION_TEMPORALITY_DELTA";
  EAggregationTemporality2[EAggregationTemporality2["AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
})(EAggregationTemporality || (EAggregationTemporality = {}));

// node_modules/@opentelemetry/otlp-transformer/build/esm/metrics/protobuf/metrics.js
var metricsResponseType = root2.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse;
var metricsRequestType = root2.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;

// node_modules/@opentelemetry/otlp-transformer/build/esm/trace/protobuf/trace.js
var root3 = __toESM(require_root());

// node_modules/@opentelemetry/otlp-transformer/build/esm/trace/internal.js
var SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK = 256;
var SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK = 512;
function buildSpanFlagsFrom(traceFlags, isRemote) {
  let flags = traceFlags & 255 | SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK;
  if (isRemote) {
    flags |= SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK;
  }
  return flags;
}
function sdkSpanToOtlpSpan(span, encoder) {
  const ctx = span.spanContext();
  const status = span.status;
  const parentSpanId = span.parentSpanContext?.spanId ? encoder.encodeSpanContext(span.parentSpanContext?.spanId) : void 0;
  return {
    traceId: encoder.encodeSpanContext(ctx.traceId),
    spanId: encoder.encodeSpanContext(ctx.spanId),
    parentSpanId,
    traceState: ctx.traceState?.serialize(),
    name: span.name,
    // Span kind is offset by 1 because the API does not define a value for unset
    kind: span.kind == null ? 0 : span.kind + 1,
    startTimeUnixNano: encoder.encodeHrTime(span.startTime),
    endTimeUnixNano: encoder.encodeHrTime(span.endTime),
    attributes: toAttributes(span.attributes),
    droppedAttributesCount: span.droppedAttributesCount,
    events: span.events.map((event) => toOtlpSpanEvent(event, encoder)),
    droppedEventsCount: span.droppedEventsCount,
    status: {
      // API and proto enums share the same values
      code: status.code,
      message: status.message
    },
    links: span.links.map((link) => toOtlpLink(link, encoder)),
    droppedLinksCount: span.droppedLinksCount,
    flags: buildSpanFlagsFrom(ctx.traceFlags, span.parentSpanContext?.isRemote)
  };
}
function toOtlpLink(link, encoder) {
  return {
    attributes: link.attributes ? toAttributes(link.attributes) : [],
    spanId: encoder.encodeSpanContext(link.context.spanId),
    traceId: encoder.encodeSpanContext(link.context.traceId),
    traceState: link.context.traceState?.serialize(),
    droppedAttributesCount: link.droppedAttributesCount || 0,
    flags: buildSpanFlagsFrom(link.context.traceFlags, link.context.isRemote)
  };
}
function toOtlpSpanEvent(timedEvent, encoder) {
  return {
    attributes: timedEvent.attributes ? toAttributes(timedEvent.attributes) : [],
    name: timedEvent.name,
    timeUnixNano: encoder.encodeHrTime(timedEvent.time),
    droppedAttributesCount: timedEvent.droppedAttributesCount || 0
  };
}
function createExportTraceServiceRequest(spans, options) {
  const encoder = getOtlpEncoder(options);
  return {
    resourceSpans: spanRecordsToResourceSpans(spans, encoder)
  };
}
function createResourceMap(readableSpans) {
  const resourceMap = /* @__PURE__ */ new Map();
  for (const record of readableSpans) {
    let ilsMap = resourceMap.get(record.resource);
    if (!ilsMap) {
      ilsMap = /* @__PURE__ */ new Map();
      resourceMap.set(record.resource, ilsMap);
    }
    const instrumentationScopeKey = `${record.instrumentationScope.name}@${record.instrumentationScope.version || ""}:${record.instrumentationScope.schemaUrl || ""}`;
    let records = ilsMap.get(instrumentationScopeKey);
    if (!records) {
      records = [];
      ilsMap.set(instrumentationScopeKey, records);
    }
    records.push(record);
  }
  return resourceMap;
}
function spanRecordsToResourceSpans(readableSpans, encoder) {
  const resourceMap = createResourceMap(readableSpans);
  const out = [];
  const entryIterator = resourceMap.entries();
  let entry = entryIterator.next();
  while (!entry.done) {
    const [resource, ilmMap] = entry.value;
    const scopeResourceSpans = [];
    const ilmIterator = ilmMap.values();
    let ilmEntry = ilmIterator.next();
    while (!ilmEntry.done) {
      const scopeSpans = ilmEntry.value;
      if (scopeSpans.length > 0) {
        const spans = scopeSpans.map((readableSpan) => sdkSpanToOtlpSpan(readableSpan, encoder));
        scopeResourceSpans.push({
          scope: createInstrumentationScope(scopeSpans[0].instrumentationScope),
          spans,
          schemaUrl: scopeSpans[0].instrumentationScope.schemaUrl
        });
      }
      ilmEntry = ilmIterator.next();
    }
    const processedResource = createResource(resource);
    const transformedSpans = {
      resource: processedResource,
      scopeSpans: scopeResourceSpans,
      schemaUrl: processedResource.schemaUrl
    };
    out.push(transformedSpans);
    entry = entryIterator.next();
  }
  return out;
}

// node_modules/@opentelemetry/otlp-transformer/build/esm/trace/protobuf/trace.js
var traceResponseType = root3.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse;
var traceRequestType = root3.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
var ProtobufTraceSerializer = {
  serializeRequest: (arg) => {
    const request = createExportTraceServiceRequest(arg);
    return traceRequestType.encode(request).finish();
  },
  deserializeResponse: (arg) => {
    return traceResponseType.decode(arg);
  }
};

// node_modules/@opentelemetry/exporter-trace-otlp-proto/build/esm/version.js
var VERSION6 = "0.206.0";

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/util.js
function validateAndNormalizeHeaders(partialHeaders) {
  return () => {
    const headers = {};
    Object.entries(partialHeaders?.() ?? {}).forEach(([key, value]) => {
      if (typeof value !== "undefined") {
        headers[key] = String(value);
      } else {
        diag.warn(`Header "${key}" has invalid value (${value}) and will be ignored`);
      }
    });
    return headers;
  };
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/otlp-http-configuration.js
function mergeHeaders(userProvidedHeaders, fallbackHeaders, defaultHeaders) {
  const requiredHeaders = __spreadValues({}, defaultHeaders());
  const headers = {};
  return () => {
    if (fallbackHeaders != null) {
      Object.assign(headers, fallbackHeaders());
    }
    if (userProvidedHeaders != null) {
      Object.assign(headers, userProvidedHeaders());
    }
    return Object.assign(headers, requiredHeaders);
  };
}
function validateUserProvidedUrl(url) {
  if (url == null) {
    return void 0;
  }
  try {
    const base = globalThis.location?.href;
    return new URL(url, base).href;
  } catch {
    throw new Error(`Configuration: Could not parse user-provided export URL: '${url}'`);
  }
}
function mergeOtlpHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
  return __spreadProps(__spreadValues({}, mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration)), {
    headers: mergeHeaders(validateAndNormalizeHeaders(userProvidedConfiguration.headers), fallbackConfiguration.headers, defaultConfiguration.headers),
    url: validateUserProvidedUrl(userProvidedConfiguration.url) ?? fallbackConfiguration.url ?? defaultConfiguration.url
  });
}
function getHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
  return __spreadProps(__spreadValues({}, getSharedConfigurationDefaults()), {
    headers: () => requiredHeaders,
    url: "http://localhost:4318/" + signalResourcePath
  });
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/otlp-node-http-configuration.js
function httpAgentFactoryFromOptions(options) {
  return async (protocol) => {
    const module2 = protocol === "http:" ? import("http") : import("https");
    const { Agent } = await module2;
    return new Agent(options);
  };
}
function mergeOtlpNodeHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
  return __spreadProps(__spreadValues({}, mergeOtlpHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration)), {
    agentFactory: userProvidedConfiguration.agentFactory ?? fallbackConfiguration.agentFactory ?? defaultConfiguration.agentFactory
  });
}
function getNodeHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
  return __spreadProps(__spreadValues({}, getHttpConfigurationDefaults(requiredHeaders, signalResourcePath)), {
    agentFactory: httpAgentFactoryFromOptions({ keepAlive: true })
  });
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/transport/http-transport-utils.js
import * as zlib from "zlib";
import { Readable } from "stream";

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/is-export-retryable.js
function isExportRetryable(statusCode) {
  const retryCodes = [429, 502, 503, 504];
  return retryCodes.includes(statusCode);
}
function parseRetryAfterToMills(retryAfter) {
  if (retryAfter == null) {
    return void 0;
  }
  const seconds = Number.parseInt(retryAfter, 10);
  if (Number.isInteger(seconds)) {
    return seconds > 0 ? seconds * 1e3 : -1;
  }
  const delay = new Date(retryAfter).getTime() - Date.now();
  if (delay >= 0) {
    return delay;
  }
  return 0;
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/transport/http-transport-utils.js
function sendWithHttp(request, params, agent, data, onDone, timeoutMillis) {
  const parsedUrl = new URL(params.url);
  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.pathname,
    method: "POST",
    headers: __spreadValues({}, params.headers()),
    agent
  };
  const req = request(options, (res) => {
    const responseData = [];
    res.on("data", (chunk) => responseData.push(chunk));
    res.on("end", () => {
      if (res.statusCode && res.statusCode < 299) {
        onDone({
          status: "success",
          data: Buffer.concat(responseData)
        });
      } else if (res.statusCode && isExportRetryable(res.statusCode)) {
        onDone({
          status: "retryable",
          retryInMillis: parseRetryAfterToMills(res.headers["retry-after"])
        });
      } else {
        const error = new OTLPExporterError(res.statusMessage, res.statusCode, Buffer.concat(responseData).toString());
        onDone({
          status: "failure",
          error
        });
      }
    });
  });
  req.setTimeout(timeoutMillis, () => {
    req.destroy();
    onDone({
      status: "failure",
      error: new Error("Request Timeout")
    });
  });
  req.on("error", (error) => {
    onDone({
      status: "failure",
      error
    });
  });
  compressAndSend(req, params.compression, data, (error) => {
    onDone({
      status: "failure",
      error
    });
  });
}
function compressAndSend(req, compression, data, onError) {
  let dataStream = readableFromUint8Array(data);
  if (compression === "gzip") {
    req.setHeader("Content-Encoding", "gzip");
    dataStream = dataStream.on("error", onError).pipe(zlib.createGzip()).on("error", onError);
  }
  dataStream.pipe(req).on("error", onError);
}
function readableFromUint8Array(buff) {
  const readable = new Readable();
  readable.push(buff);
  readable.push(null);
  return readable;
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/transport/http-exporter-transport.js
var HttpExporterTransport = class {
  _parameters;
  _utils = null;
  constructor(_parameters) {
    this._parameters = _parameters;
  }
  async send(data, timeoutMillis) {
    const { agent, request } = await this._loadUtils();
    return new Promise((resolve) => {
      sendWithHttp(request, this._parameters, agent, data, (result) => {
        resolve(result);
      }, timeoutMillis);
    });
  }
  shutdown() {
  }
  async _loadUtils() {
    let utils = this._utils;
    if (utils === null) {
      const protocol = new URL(this._parameters.url).protocol;
      const [agent, request] = await Promise.all([
        this._parameters.agentFactory(protocol),
        requestFunctionFactory(protocol)
      ]);
      utils = this._utils = { agent, request };
    }
    return utils;
  }
};
async function requestFunctionFactory(protocol) {
  const module2 = protocol === "http:" ? import("http") : import("https");
  const { request } = await module2;
  return request;
}
function createHttpExporterTransport(parameters) {
  return new HttpExporterTransport(parameters);
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/retrying-transport.js
var MAX_ATTEMPTS = 5;
var INITIAL_BACKOFF = 1e3;
var MAX_BACKOFF = 5e3;
var BACKOFF_MULTIPLIER = 1.5;
var JITTER = 0.2;
function getJitter() {
  return Math.random() * (2 * JITTER) - JITTER;
}
var RetryingTransport = class {
  _transport;
  constructor(_transport) {
    this._transport = _transport;
  }
  retry(data, timeoutMillis, inMillis) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._transport.send(data, timeoutMillis).then(resolve, reject);
      }, inMillis);
    });
  }
  async send(data, timeoutMillis) {
    const deadline = Date.now() + timeoutMillis;
    let result = await this._transport.send(data, timeoutMillis);
    let attempts = MAX_ATTEMPTS;
    let nextBackoff = INITIAL_BACKOFF;
    while (result.status === "retryable" && attempts > 0) {
      attempts--;
      const backoff = Math.max(Math.min(nextBackoff, MAX_BACKOFF) + getJitter(), 0);
      nextBackoff = nextBackoff * BACKOFF_MULTIPLIER;
      const retryInMillis = result.retryInMillis ?? backoff;
      const remainingTimeoutMillis = deadline - Date.now();
      if (retryInMillis > remainingTimeoutMillis) {
        return result;
      }
      result = await this.retry(data, remainingTimeoutMillis, retryInMillis);
    }
    return result;
  }
  shutdown() {
    return this._transport.shutdown();
  }
};
function createRetryingTransport(options) {
  return new RetryingTransport(options.transport);
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/otlp-http-export-delegate.js
function createOtlpHttpExportDelegate(options, serializer) {
  return createOtlpExportDelegate({
    transport: createRetryingTransport({
      transport: createHttpExporterTransport(options)
    }),
    serializer,
    promiseHandler: createBoundedQueueExportPromiseHandler(options)
  }, { timeout: options.timeoutMillis });
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/shared-env-configuration.js
function parseAndValidateTimeoutFromEnv(timeoutEnvVar) {
  const envTimeout = getNumberFromEnv2(timeoutEnvVar);
  if (envTimeout != null) {
    if (Number.isFinite(envTimeout) && envTimeout > 0) {
      return envTimeout;
    }
    diag.warn(`Configuration: ${timeoutEnvVar} is invalid, expected number greater than 0 (actual: ${envTimeout})`);
  }
  return void 0;
}
function getTimeoutFromEnv(signalIdentifier) {
  const specificTimeout = parseAndValidateTimeoutFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_TIMEOUT`);
  const nonSpecificTimeout = parseAndValidateTimeoutFromEnv("OTEL_EXPORTER_OTLP_TIMEOUT");
  return specificTimeout ?? nonSpecificTimeout;
}
function parseAndValidateCompressionFromEnv(compressionEnvVar) {
  const compression = getStringFromEnv2(compressionEnvVar)?.trim();
  if (compression == null || compression === "none" || compression === "gzip") {
    return compression;
  }
  diag.warn(`Configuration: ${compressionEnvVar} is invalid, expected 'none' or 'gzip' (actual: '${compression}')`);
  return void 0;
}
function getCompressionFromEnv(signalIdentifier) {
  const specificCompression = parseAndValidateCompressionFromEnv(`OTEL_EXPORTER_OTLP_${signalIdentifier}_COMPRESSION`);
  const nonSpecificCompression = parseAndValidateCompressionFromEnv("OTEL_EXPORTER_OTLP_COMPRESSION");
  return specificCompression ?? nonSpecificCompression;
}
function getSharedConfigurationFromEnvironment(signalIdentifier) {
  return {
    timeoutMillis: getTimeoutFromEnv(signalIdentifier),
    compression: getCompressionFromEnv(signalIdentifier)
  };
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/otlp-node-http-env-configuration.js
function getStaticHeadersFromEnv(signalIdentifier) {
  const signalSpecificRawHeaders = getStringFromEnv2(`OTEL_EXPORTER_OTLP_${signalIdentifier}_HEADERS`);
  const nonSignalSpecificRawHeaders = getStringFromEnv2("OTEL_EXPORTER_OTLP_HEADERS");
  const signalSpecificHeaders = parseKeyPairsIntoRecord2(signalSpecificRawHeaders);
  const nonSignalSpecificHeaders = parseKeyPairsIntoRecord2(nonSignalSpecificRawHeaders);
  if (Object.keys(signalSpecificHeaders).length === 0 && Object.keys(nonSignalSpecificHeaders).length === 0) {
    return void 0;
  }
  return Object.assign({}, parseKeyPairsIntoRecord2(nonSignalSpecificRawHeaders), parseKeyPairsIntoRecord2(signalSpecificRawHeaders));
}
function appendRootPathToUrlIfNeeded(url) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.toString();
  } catch {
    diag.warn(`Configuration: Could not parse environment-provided export URL: '${url}', falling back to undefined`);
    return void 0;
  }
}
function appendResourcePathToUrl(url, path) {
  try {
    new URL(url);
  } catch {
    diag.warn(`Configuration: Could not parse environment-provided export URL: '${url}', falling back to undefined`);
    return void 0;
  }
  if (!url.endsWith("/")) {
    url = url + "/";
  }
  url += path;
  try {
    new URL(url);
  } catch {
    diag.warn(`Configuration: Provided URL appended with '${path}' is not a valid URL, using 'undefined' instead of '${url}'`);
    return void 0;
  }
  return url;
}
function getNonSpecificUrlFromEnv(signalResourcePath) {
  const envUrl = getStringFromEnv2("OTEL_EXPORTER_OTLP_ENDPOINT");
  if (envUrl === void 0) {
    return void 0;
  }
  return appendResourcePathToUrl(envUrl, signalResourcePath);
}
function getSpecificUrlFromEnv(signalIdentifier) {
  const envUrl = getStringFromEnv2(`OTEL_EXPORTER_OTLP_${signalIdentifier}_ENDPOINT`);
  if (envUrl === void 0) {
    return void 0;
  }
  return appendRootPathToUrlIfNeeded(envUrl);
}
function getNodeHttpConfigurationFromEnvironment(signalIdentifier, signalResourcePath) {
  return __spreadProps(__spreadValues({}, getSharedConfigurationFromEnvironment(signalIdentifier)), {
    url: getSpecificUrlFromEnv(signalIdentifier) ?? getNonSpecificUrlFromEnv(signalResourcePath),
    headers: wrapStaticHeadersInFunction(getStaticHeadersFromEnv(signalIdentifier))
  });
}

// node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/convert-legacy-node-http-options.js
function convertLegacyAgentOptions(config) {
  if (typeof config.httpAgentOptions === "function") {
    return config.httpAgentOptions;
  }
  let legacy = config.httpAgentOptions;
  if (config.keepAlive != null) {
    legacy = __spreadValues({ keepAlive: config.keepAlive }, legacy);
  }
  if (legacy != null) {
    return httpAgentFactoryFromOptions(legacy);
  } else {
    return void 0;
  }
}
function convertLegacyHttpOptions(config, signalIdentifier, signalResourcePath, requiredHeaders) {
  if (config.metadata) {
    diag.warn("Metadata cannot be set when using http");
  }
  return mergeOtlpNodeHttpConfigurationWithDefaults({
    url: config.url,
    headers: wrapStaticHeadersInFunction(config.headers),
    concurrencyLimit: config.concurrencyLimit,
    timeoutMillis: config.timeoutMillis,
    compression: config.compression,
    agentFactory: convertLegacyAgentOptions(config)
  }, getNodeHttpConfigurationFromEnvironment(signalIdentifier, signalResourcePath), getNodeHttpConfigurationDefaults(requiredHeaders, signalResourcePath));
}

// node_modules/@opentelemetry/exporter-trace-otlp-proto/build/esm/platform/node/OTLPTraceExporter.js
var OTLPTraceExporter = class extends OTLPExporterBase {
  constructor(config = {}) {
    super(createOtlpHttpExportDelegate(convertLegacyHttpOptions(config, "TRACES", "v1/traces", {
      "User-Agent": `OTel-OTLP-Exporter-JavaScript/${VERSION6}`,
      "Content-Type": "application/x-protobuf"
    }), ProtobufTraceSerializer));
  }
};

// node_modules/@opentelemetry/resources/build/esm/default-service-name.js
var serviceName;
function defaultServiceName2() {
  if (serviceName === void 0) {
    try {
      const argv0 = globalThis.process.argv0;
      serviceName = argv0 ? `unknown_service:${argv0}` : "unknown_service";
    } catch {
      serviceName = "unknown_service";
    }
  }
  return serviceName;
}

// node_modules/@opentelemetry/resources/build/esm/utils.js
var isPromiseLike2 = (val) => {
  return val !== null && typeof val === "object" && typeof val.then === "function";
};

// node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js
var ResourceImpl = class _ResourceImpl {
  _rawAttributes;
  _asyncAttributesPending = false;
  _schemaUrl;
  _memoizedAttributes;
  static FromAttributeList(attributes, options) {
    const res = new _ResourceImpl({}, options);
    res._rawAttributes = guardedRawAttributes(attributes);
    res._asyncAttributesPending = attributes.filter(([_, val]) => isPromiseLike2(val)).length > 0;
    return res;
  }
  constructor(resource, options) {
    const attributes = resource.attributes ?? {};
    this._rawAttributes = Object.entries(attributes).map(([k, v]) => {
      if (isPromiseLike2(v)) {
        this._asyncAttributesPending = true;
      }
      return [k, v];
    });
    this._rawAttributes = guardedRawAttributes(this._rawAttributes);
    this._schemaUrl = validateSchemaUrl(options?.schemaUrl);
  }
  get asyncAttributesPending() {
    return this._asyncAttributesPending;
  }
  async waitForAsyncAttributes() {
    if (!this.asyncAttributesPending) {
      return;
    }
    for (let i = 0; i < this._rawAttributes.length; i++) {
      const [k, v] = this._rawAttributes[i];
      this._rawAttributes[i] = [k, isPromiseLike2(v) ? await v : v];
    }
    this._asyncAttributesPending = false;
  }
  get attributes() {
    if (this.asyncAttributesPending) {
      diag.error("Accessing resource attributes before async attributes settled");
    }
    if (this._memoizedAttributes) {
      return this._memoizedAttributes;
    }
    const attrs = {};
    for (const [k, v] of this._rawAttributes) {
      if (isPromiseLike2(v)) {
        diag.debug(`Unsettled resource attribute ${k} skipped`);
        continue;
      }
      if (v != null) {
        attrs[k] ??= v;
      }
    }
    if (!this._asyncAttributesPending) {
      this._memoizedAttributes = attrs;
    }
    return attrs;
  }
  getRawAttributes() {
    return this._rawAttributes;
  }
  get schemaUrl() {
    return this._schemaUrl;
  }
  merge(resource) {
    if (resource == null)
      return this;
    const mergedSchemaUrl = mergeSchemaUrl(this, resource);
    const mergedOptions = mergedSchemaUrl ? { schemaUrl: mergedSchemaUrl } : void 0;
    return _ResourceImpl.FromAttributeList([...resource.getRawAttributes(), ...this.getRawAttributes()], mergedOptions);
  }
};
function resourceFromAttributes2(attributes, options) {
  return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
function defaultResource2() {
  return resourceFromAttributes2({
    [ATTR_SERVICE_NAME]: defaultServiceName2(),
    [ATTR_TELEMETRY_SDK_LANGUAGE]: SDK_INFO[ATTR_TELEMETRY_SDK_LANGUAGE],
    [ATTR_TELEMETRY_SDK_NAME]: SDK_INFO[ATTR_TELEMETRY_SDK_NAME],
    [ATTR_TELEMETRY_SDK_VERSION]: SDK_INFO[ATTR_TELEMETRY_SDK_VERSION]
  });
}
function guardedRawAttributes(attributes) {
  return attributes.map(([k, v]) => {
    if (isPromiseLike2(v)) {
      return [
        k,
        v.catch((err) => {
          diag.debug("promise rejection for resource attribute: %s - %s", k, err);
          return void 0;
        })
      ];
    }
    return [k, v];
  });
}
function validateSchemaUrl(schemaUrl) {
  if (typeof schemaUrl === "string" || schemaUrl === void 0) {
    return schemaUrl;
  }
  diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", schemaUrl);
  return void 0;
}
function mergeSchemaUrl(old, updating) {
  const oldSchemaUrl = old?.schemaUrl;
  const updatingSchemaUrl = updating?.schemaUrl;
  const isOldEmpty = oldSchemaUrl === void 0 || oldSchemaUrl === "";
  const isUpdatingEmpty = updatingSchemaUrl === void 0 || updatingSchemaUrl === "";
  if (isOldEmpty) {
    return updatingSchemaUrl;
  }
  if (isUpdatingEmpty) {
    return oldSchemaUrl;
  }
  if (oldSchemaUrl === updatingSchemaUrl) {
    return oldSchemaUrl;
  }
  diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', oldSchemaUrl, updatingSchemaUrl);
  return void 0;
}

// node_modules/@opentelemetry/resources/build/esm/detectors/EnvDetector.js
var EnvDetector2 = class {
  // Type, attribute keys, and attribute values should not exceed 256 characters.
  _MAX_LENGTH = 255;
  // OTEL_RESOURCE_ATTRIBUTES is a comma-separated list of attributes.
  _COMMA_SEPARATOR = ",";
  // OTEL_RESOURCE_ATTRIBUTES contains key value pair separated by '='.
  _LABEL_KEY_VALUE_SPLITTER = "=";
  _ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.";
  _ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
  /**
   * Returns a {@link Resource} populated with attributes from the
   * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
   * function to conform to the Detector interface.
   *
   * @param config The resource detection config
   */
  detect(_config) {
    const attributes = {};
    const rawAttributes = getStringFromEnv("OTEL_RESOURCE_ATTRIBUTES");
    const serviceName2 = getStringFromEnv("OTEL_SERVICE_NAME");
    if (rawAttributes) {
      try {
        const parsedAttributes = this._parseResourceAttributes(rawAttributes);
        Object.assign(attributes, parsedAttributes);
      } catch (e) {
        diag.debug(`EnvDetector failed: ${e.message}`);
      }
    }
    if (serviceName2) {
      attributes[ATTR_SERVICE_NAME] = serviceName2;
    }
    return { attributes };
  }
  /**
   * Creates an attribute map from the OTEL_RESOURCE_ATTRIBUTES environment
   * variable.
   *
   * OTEL_RESOURCE_ATTRIBUTES: A comma-separated list of attributes describing
   * the source in more detail, e.g. “key1=val1,key2=val2”. Domain names and
   * paths are accepted as attribute keys. Values may be quoted or unquoted in
   * general. If a value contains whitespace, =, or " characters, it must
   * always be quoted.
   *
   * @param rawEnvAttributes The resource attributes as a comma-separated list
   * of key/value pairs.
   * @returns The sanitized resource attributes.
   */
  _parseResourceAttributes(rawEnvAttributes) {
    if (!rawEnvAttributes)
      return {};
    const attributes = {};
    const rawAttributes = rawEnvAttributes.split(this._COMMA_SEPARATOR, -1);
    for (const rawAttribute of rawAttributes) {
      const keyValuePair = rawAttribute.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
      if (keyValuePair.length !== 2) {
        continue;
      }
      let [key, value] = keyValuePair;
      key = key.trim();
      value = value.trim().split(/^"|"$/).join("");
      if (!this._isValidAndNotEmpty(key)) {
        throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
      }
      if (!this._isValid(value)) {
        throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
      }
      attributes[key] = decodeURIComponent(value);
    }
    return attributes;
  }
  /**
   * Determines whether the given String is a valid printable ASCII string with
   * a length not exceed _MAX_LENGTH characters.
   *
   * @param str The String to be validated.
   * @returns Whether the String is valid.
   */
  _isValid(name) {
    return name.length <= this._MAX_LENGTH && this._isBaggageOctetString(name);
  }
  // https://www.w3.org/TR/baggage/#definition
  _isBaggageOctetString(str) {
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      if (ch < 33 || ch === 44 || ch === 59 || ch === 92 || ch > 126) {
        return false;
      }
    }
    return true;
  }
  /**
   * Determines whether the given String is a valid printable ASCII string with
   * a length greater than 0 and not exceed _MAX_LENGTH characters.
   *
   * @param str The String to be validated.
   * @returns Whether the String is valid and not empty.
   */
  _isValidAndNotEmpty(str) {
    return str.length > 0 && this._isValid(str);
  }
};
var envDetector2 = new EnvDetector2();

// node_modules/@opentelemetry/resources/build/esm/semconv.js
var ATTR_HOST_ARCH2 = "host.arch";
var ATTR_HOST_ID2 = "host.id";
var ATTR_HOST_NAME2 = "host.name";
var ATTR_OS_TYPE2 = "os.type";
var ATTR_OS_VERSION2 = "os.version";
var ATTR_PROCESS_COMMAND2 = "process.command";
var ATTR_PROCESS_COMMAND_ARGS2 = "process.command_args";
var ATTR_PROCESS_EXECUTABLE_NAME2 = "process.executable.name";
var ATTR_PROCESS_EXECUTABLE_PATH2 = "process.executable.path";
var ATTR_PROCESS_OWNER2 = "process.owner";
var ATTR_PROCESS_PID2 = "process.pid";
var ATTR_PROCESS_RUNTIME_DESCRIPTION2 = "process.runtime.description";
var ATTR_PROCESS_RUNTIME_NAME6 = "process.runtime.name";
var ATTR_PROCESS_RUNTIME_VERSION2 = "process.runtime.version";
var ATTR_SERVICE_INSTANCE_ID2 = "service.instance.id";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js
import { arch as arch2, hostname as hostname2 } from "os";

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/machine-id/getMachineId.js
import * as process3 from "process";
var getMachineIdImpl2;
async function getMachineId2() {
  if (!getMachineIdImpl2) {
    switch (process3.platform) {
      case "darwin":
        getMachineIdImpl2 = (await import("./getMachineId-darwin-SUTBSO6Y.js")).getMachineId;
        break;
      case "linux":
        getMachineIdImpl2 = (await import("./getMachineId-linux-N4KLHZOW.js")).getMachineId;
        break;
      case "freebsd":
        getMachineIdImpl2 = (await import("./getMachineId-bsd-XMVTPI5W.js")).getMachineId;
        break;
      case "win32":
        getMachineIdImpl2 = (await import("./getMachineId-win-DDIGP6ZW.js")).getMachineId;
        break;
      default:
        getMachineIdImpl2 = (await import("./getMachineId-unsupported-P2WUHUEF.js")).getMachineId;
        break;
    }
  }
  return getMachineIdImpl2();
}

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/utils.js
var normalizeArch2 = (nodeArchString) => {
  switch (nodeArchString) {
    case "arm":
      return "arm32";
    case "ppc":
      return "ppc32";
    case "x64":
      return "amd64";
    default:
      return nodeArchString;
  }
};
var normalizeType2 = (nodePlatform) => {
  switch (nodePlatform) {
    case "sunos":
      return "solaris";
    case "win32":
      return "windows";
    default:
      return nodePlatform;
  }
};

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/HostDetector.js
var HostDetector2 = class {
  detect(_config) {
    const attributes = {
      [ATTR_HOST_NAME2]: hostname2(),
      [ATTR_HOST_ARCH2]: normalizeArch2(arch2()),
      [ATTR_HOST_ID2]: getMachineId2()
    };
    return { attributes };
  }
};
var hostDetector2 = new HostDetector2();

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/OSDetector.js
import { platform as platform4, release as release2 } from "os";
var OSDetector2 = class {
  detect(_config) {
    const attributes = {
      [ATTR_OS_TYPE2]: normalizeType2(platform4()),
      [ATTR_OS_VERSION2]: release2()
    };
    return { attributes };
  }
};
var osDetector2 = new OSDetector2();

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ProcessDetector.js
import * as os2 from "os";
var ProcessDetector2 = class {
  detect(_config) {
    const attributes = {
      [ATTR_PROCESS_PID2]: process.pid,
      [ATTR_PROCESS_EXECUTABLE_NAME2]: process.title,
      [ATTR_PROCESS_EXECUTABLE_PATH2]: process.execPath,
      [ATTR_PROCESS_COMMAND_ARGS2]: [
        process.argv[0],
        ...process.execArgv,
        ...process.argv.slice(1)
      ],
      [ATTR_PROCESS_RUNTIME_VERSION2]: process.versions.node,
      [ATTR_PROCESS_RUNTIME_NAME6]: "nodejs",
      [ATTR_PROCESS_RUNTIME_DESCRIPTION2]: "Node.js"
    };
    if (process.argv.length > 1) {
      attributes[ATTR_PROCESS_COMMAND2] = process.argv[1];
    }
    try {
      const userInfo3 = os2.userInfo();
      attributes[ATTR_PROCESS_OWNER2] = userInfo3.username;
    } catch (e) {
      diag.debug(`error obtaining process owner: ${e}`);
    }
    return { attributes };
  }
};
var processDetector2 = new ProcessDetector2();

// node_modules/@opentelemetry/resources/build/esm/detectors/platform/node/ServiceInstanceIdDetector.js
import { randomUUID as randomUUID2 } from "crypto";
var ServiceInstanceIdDetector2 = class {
  detect(_config) {
    return {
      attributes: {
        [ATTR_SERVICE_INSTANCE_ID2]: randomUUID2()
      }
    };
  }
};
var serviceInstanceIdDetector2 = new ServiceInstanceIdDetector2();

// node_modules/@opentelemetry/resources/build/esm/detectors/NoopDetector.js
var NoopDetector2 = class {
  detect() {
    return {
      attributes: {}
    };
  }
};
var noopDetector2 = new NoopDetector2();

// node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js
var ExceptionEventName = "exception";

// node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js
var SpanImpl = class {
  // Below properties are included to implement ReadableSpan for export
  // purposes but are not intended to be written-to directly.
  _spanContext;
  kind;
  parentSpanContext;
  attributes = {};
  links = [];
  events = [];
  startTime;
  resource;
  instrumentationScope;
  _droppedAttributesCount = 0;
  _droppedEventsCount = 0;
  _droppedLinksCount = 0;
  _attributesCount = 0;
  name;
  status = {
    code: SpanStatusCode.UNSET
  };
  endTime = [0, 0];
  _ended = false;
  _duration = [-1, -1];
  _spanProcessor;
  _spanLimits;
  _attributeValueLengthLimit;
  _performanceStartTime;
  _performanceOffset;
  _startTimeProvided;
  /**
   * Constructs a new SpanImpl instance.
   */
  constructor(opts) {
    const now = Date.now();
    this._spanContext = opts.spanContext;
    this._performanceStartTime = otperformance.now();
    this._performanceOffset = now - (this._performanceStartTime + otperformance.timeOrigin);
    this._startTimeProvided = opts.startTime != null;
    this._spanLimits = opts.spanLimits;
    this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
    this._spanProcessor = opts.spanProcessor;
    this.name = opts.name;
    this.parentSpanContext = opts.parentSpanContext;
    this.kind = opts.kind;
    this.links = opts.links || [];
    this.startTime = this._getTime(opts.startTime ?? now);
    this.resource = opts.resource;
    this.instrumentationScope = opts.scope;
    if (opts.attributes != null) {
      this.setAttributes(opts.attributes);
    }
    this._spanProcessor.onStart(this, opts.context);
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(key, value) {
    if (value == null || this._isSpanEnded())
      return this;
    if (key.length === 0) {
      diag.warn(`Invalid attribute key: ${key}`);
      return this;
    }
    if (!isAttributeValue(value)) {
      diag.warn(`Invalid attribute value set for key: ${key}`);
      return this;
    }
    const { attributeCountLimit } = this._spanLimits;
    const isNewKey = !Object.prototype.hasOwnProperty.call(this.attributes, key);
    if (attributeCountLimit !== void 0 && this._attributesCount >= attributeCountLimit && isNewKey) {
      this._droppedAttributesCount++;
      return this;
    }
    this.attributes[key] = this._truncateToSize(value);
    if (isNewKey) {
      this._attributesCount++;
    }
    return this;
  }
  setAttributes(attributes) {
    for (const [k, v] of Object.entries(attributes)) {
      this.setAttribute(k, v);
    }
    return this;
  }
  /**
   *
   * @param name Span Name
   * @param [attributesOrStartTime] Span attributes or start time
   *     if type is {@type TimeInput} and 3rd param is undefined
   * @param [timeStamp] Specified time stamp for the event
   */
  addEvent(name, attributesOrStartTime, timeStamp) {
    if (this._isSpanEnded())
      return this;
    const { eventCountLimit } = this._spanLimits;
    if (eventCountLimit === 0) {
      diag.warn("No events allowed.");
      this._droppedEventsCount++;
      return this;
    }
    if (eventCountLimit !== void 0 && this.events.length >= eventCountLimit) {
      if (this._droppedEventsCount === 0) {
        diag.debug("Dropping extra events.");
      }
      this.events.shift();
      this._droppedEventsCount++;
    }
    if (isTimeInput(attributesOrStartTime)) {
      if (!isTimeInput(timeStamp)) {
        timeStamp = attributesOrStartTime;
      }
      attributesOrStartTime = void 0;
    }
    const attributes = sanitizeAttributes(attributesOrStartTime);
    this.events.push({
      name,
      attributes,
      time: this._getTime(timeStamp),
      droppedAttributesCount: 0
    });
    return this;
  }
  addLink(link) {
    this.links.push(link);
    return this;
  }
  addLinks(links) {
    this.links.push(...links);
    return this;
  }
  setStatus(status) {
    if (this._isSpanEnded())
      return this;
    this.status = __spreadValues({}, status);
    if (this.status.message != null && typeof status.message !== "string") {
      diag.warn(`Dropping invalid status.message of type '${typeof status.message}', expected 'string'`);
      delete this.status.message;
    }
    return this;
  }
  updateName(name) {
    if (this._isSpanEnded())
      return this;
    this.name = name;
    return this;
  }
  end(endTime) {
    if (this._isSpanEnded()) {
      diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
      return;
    }
    this.endTime = this._getTime(endTime);
    this._duration = hrTimeDuration(this.startTime, this.endTime);
    if (this._duration[0] < 0) {
      diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime);
      this.endTime = this.startTime.slice();
      this._duration = [0, 0];
    }
    if (this._droppedEventsCount > 0) {
      diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
    }
    if (this._spanProcessor.onEnding) {
      this._spanProcessor.onEnding(this);
    }
    this._ended = true;
    this._spanProcessor.onEnd(this);
  }
  _getTime(inp) {
    if (typeof inp === "number" && inp <= otperformance.now()) {
      return hrTime(inp + this._performanceOffset);
    }
    if (typeof inp === "number") {
      return millisToHrTime(inp);
    }
    if (inp instanceof Date) {
      return millisToHrTime(inp.getTime());
    }
    if (isTimeInputHrTime(inp)) {
      return inp;
    }
    if (this._startTimeProvided) {
      return millisToHrTime(Date.now());
    }
    const msDuration = otperformance.now() - this._performanceStartTime;
    return addHrTimes(this.startTime, millisToHrTime(msDuration));
  }
  isRecording() {
    return this._ended === false;
  }
  recordException(exception, time) {
    const attributes = {};
    if (typeof exception === "string") {
      attributes[ATTR_EXCEPTION_MESSAGE] = exception;
    } else if (exception) {
      if (exception.code) {
        attributes[ATTR_EXCEPTION_TYPE] = exception.code.toString();
      } else if (exception.name) {
        attributes[ATTR_EXCEPTION_TYPE] = exception.name;
      }
      if (exception.message) {
        attributes[ATTR_EXCEPTION_MESSAGE] = exception.message;
      }
      if (exception.stack) {
        attributes[ATTR_EXCEPTION_STACKTRACE] = exception.stack;
      }
    }
    if (attributes[ATTR_EXCEPTION_TYPE] || attributes[ATTR_EXCEPTION_MESSAGE]) {
      this.addEvent(ExceptionEventName, attributes, time);
    } else {
      diag.warn(`Failed to record an exception ${exception}`);
    }
  }
  get duration() {
    return this._duration;
  }
  get ended() {
    return this._ended;
  }
  get droppedAttributesCount() {
    return this._droppedAttributesCount;
  }
  get droppedEventsCount() {
    return this._droppedEventsCount;
  }
  get droppedLinksCount() {
    return this._droppedLinksCount;
  }
  _isSpanEnded() {
    if (this._ended) {
      const error = new Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
      diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, error);
    }
    return this._ended;
  }
  // Utility function to truncate given value within size
  // for value type of string, will truncate to given limit
  // for type of non-string, will return same value
  _truncateToLimitUtil(value, limit) {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit);
  }
  /**
   * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
   * return string with truncated to {@code attributeValueLengthLimit} characters
   *
   * If the given attribute value is array of strings then
   * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
   *
   * Otherwise return same Attribute {@code value}
   *
   * @param value Attribute value
   * @returns truncated attribute value if required, otherwise same value
   */
  _truncateToSize(value) {
    const limit = this._attributeValueLengthLimit;
    if (limit <= 0) {
      diag.warn(`Attribute value limit must be positive, got ${limit}`);
      return value;
    }
    if (typeof value === "string") {
      return this._truncateToLimitUtil(value, limit);
    }
    if (Array.isArray(value)) {
      return value.map((val) => typeof val === "string" ? this._truncateToLimitUtil(val, limit) : val);
    }
    return value;
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js
var SamplingDecision2;
(function(SamplingDecision3) {
  SamplingDecision3[SamplingDecision3["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision3[SamplingDecision3["RECORD"] = 1] = "RECORD";
  SamplingDecision3[SamplingDecision3["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision2 || (SamplingDecision2 = {}));

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js
var AlwaysOffSampler = class {
  shouldSample() {
    return {
      decision: SamplingDecision2.NOT_RECORD
    };
  }
  toString() {
    return "AlwaysOffSampler";
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js
var AlwaysOnSampler = class {
  shouldSample() {
    return {
      decision: SamplingDecision2.RECORD_AND_SAMPLED
    };
  }
  toString() {
    return "AlwaysOnSampler";
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js
var ParentBasedSampler = class {
  _root;
  _remoteParentSampled;
  _remoteParentNotSampled;
  _localParentSampled;
  _localParentNotSampled;
  constructor(config) {
    this._root = config.root;
    if (!this._root) {
      globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured"));
      this._root = new AlwaysOnSampler();
    }
    this._remoteParentSampled = config.remoteParentSampled ?? new AlwaysOnSampler();
    this._remoteParentNotSampled = config.remoteParentNotSampled ?? new AlwaysOffSampler();
    this._localParentSampled = config.localParentSampled ?? new AlwaysOnSampler();
    this._localParentNotSampled = config.localParentNotSampled ?? new AlwaysOffSampler();
  }
  shouldSample(context2, traceId, spanName, spanKind, attributes, links) {
    const parentContext = trace.getSpanContext(context2);
    if (!parentContext || !isSpanContextValid(parentContext)) {
      return this._root.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    }
    if (parentContext.isRemote) {
      if (parentContext.traceFlags & TraceFlags.SAMPLED) {
        return this._remoteParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      return this._remoteParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    }
    if (parentContext.traceFlags & TraceFlags.SAMPLED) {
      return this._localParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    }
    return this._localParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
  }
  toString() {
    return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js
var TraceIdRatioBasedSampler = class {
  _ratio;
  _upperBound;
  constructor(ratio = 0) {
    this._ratio = this._normalize(ratio);
    this._upperBound = Math.floor(this._ratio * 4294967295);
  }
  shouldSample(context2, traceId) {
    return {
      decision: isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? SamplingDecision2.RECORD_AND_SAMPLED : SamplingDecision2.NOT_RECORD
    };
  }
  toString() {
    return `TraceIdRatioBased{${this._ratio}}`;
  }
  _normalize(ratio) {
    if (typeof ratio !== "number" || isNaN(ratio))
      return 0;
    return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
  }
  _accumulate(traceId) {
    let accumulation = 0;
    for (let i = 0; i < traceId.length / 8; i++) {
      const pos = i * 8;
      const part = parseInt(traceId.slice(pos, pos + 8), 16);
      accumulation = (accumulation ^ part) >>> 0;
    }
    return accumulation;
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js
var TracesSamplerValues;
(function(TracesSamplerValues2) {
  TracesSamplerValues2["AlwaysOff"] = "always_off";
  TracesSamplerValues2["AlwaysOn"] = "always_on";
  TracesSamplerValues2["ParentBasedAlwaysOff"] = "parentbased_always_off";
  TracesSamplerValues2["ParentBasedAlwaysOn"] = "parentbased_always_on";
  TracesSamplerValues2["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
  TracesSamplerValues2["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));
var DEFAULT_RATIO = 1;
function loadDefaultConfig() {
  return {
    sampler: buildSamplerFromEnv(),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? Infinity,
      attributeCountLimit: getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128
    },
    spanLimits: {
      attributeValueLengthLimit: getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? Infinity,
      attributeCountLimit: getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? 128,
      linkCountLimit: getNumberFromEnv("OTEL_SPAN_LINK_COUNT_LIMIT") ?? 128,
      eventCountLimit: getNumberFromEnv("OTEL_SPAN_EVENT_COUNT_LIMIT") ?? 128,
      attributePerEventCountLimit: getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT") ?? 128,
      attributePerLinkCountLimit: getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT") ?? 128
    }
  };
}
function buildSamplerFromEnv() {
  const sampler = getStringFromEnv("OTEL_TRACES_SAMPLER") ?? TracesSamplerValues.ParentBasedAlwaysOn;
  switch (sampler) {
    case TracesSamplerValues.AlwaysOn:
      return new AlwaysOnSampler();
    case TracesSamplerValues.AlwaysOff:
      return new AlwaysOffSampler();
    case TracesSamplerValues.ParentBasedAlwaysOn:
      return new ParentBasedSampler({
        root: new AlwaysOnSampler()
      });
    case TracesSamplerValues.ParentBasedAlwaysOff:
      return new ParentBasedSampler({
        root: new AlwaysOffSampler()
      });
    case TracesSamplerValues.TraceIdRatio:
      return new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv());
    case TracesSamplerValues.ParentBasedTraceIdRatio:
      return new ParentBasedSampler({
        root: new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv())
      });
    default:
      diag.error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${TracesSamplerValues.ParentBasedAlwaysOn}".`);
      return new ParentBasedSampler({
        root: new AlwaysOnSampler()
      });
  }
}
function getSamplerProbabilityFromEnv() {
  const probability = getNumberFromEnv("OTEL_TRACES_SAMPLER_ARG");
  if (probability == null) {
    diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
    return DEFAULT_RATIO;
  }
  if (probability < 0 || probability > 1) {
    diag.error(`OTEL_TRACES_SAMPLER_ARG=${probability} was given, but it is out of range ([0..1]), defaulting to ${DEFAULT_RATIO}.`);
    return DEFAULT_RATIO;
  }
  return probability;
}

// node_modules/@opentelemetry/sdk-trace-base/build/esm/utility.js
var DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
var DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
function mergeConfig(userConfig) {
  const perInstanceDefaults = {
    sampler: buildSamplerFromEnv()
  };
  const DEFAULT_CONFIG = loadDefaultConfig();
  const target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
  target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
  target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
  return target;
}
function reconfigureLimits(userConfig) {
  const spanLimits = Object.assign({}, userConfig.spanLimits);
  spanLimits.attributeCountLimit = userConfig.spanLimits?.attributeCountLimit ?? userConfig.generalLimits?.attributeCountLimit ?? getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT") ?? getNumberFromEnv("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? DEFAULT_ATTRIBUTE_COUNT_LIMIT;
  spanLimits.attributeValueLengthLimit = userConfig.spanLimits?.attributeValueLengthLimit ?? userConfig.generalLimits?.attributeValueLengthLimit ?? getNumberFromEnv("OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? getNumberFromEnv("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT;
  return Object.assign({}, userConfig, { spanLimits });
}

// node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js
var BatchSpanProcessorBase = class {
  _maxExportBatchSize;
  _maxQueueSize;
  _scheduledDelayMillis;
  _exportTimeoutMillis;
  _exporter;
  _isExporting = false;
  _finishedSpans = [];
  _timer;
  _shutdownOnce;
  _droppedSpansCount = 0;
  constructor(exporter, config) {
    this._exporter = exporter;
    this._maxExportBatchSize = typeof config?.maxExportBatchSize === "number" ? config.maxExportBatchSize : getNumberFromEnv("OTEL_BSP_MAX_EXPORT_BATCH_SIZE") ?? 512;
    this._maxQueueSize = typeof config?.maxQueueSize === "number" ? config.maxQueueSize : getNumberFromEnv("OTEL_BSP_MAX_QUEUE_SIZE") ?? 2048;
    this._scheduledDelayMillis = typeof config?.scheduledDelayMillis === "number" ? config.scheduledDelayMillis : getNumberFromEnv("OTEL_BSP_SCHEDULE_DELAY") ?? 5e3;
    this._exportTimeoutMillis = typeof config?.exportTimeoutMillis === "number" ? config.exportTimeoutMillis : getNumberFromEnv("OTEL_BSP_EXPORT_TIMEOUT") ?? 3e4;
    this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
    if (this._maxExportBatchSize > this._maxQueueSize) {
      diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
      this._maxExportBatchSize = this._maxQueueSize;
    }
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) {
      return this._shutdownOnce.promise;
    }
    return this._flushAll();
  }
  // does nothing.
  onStart(_span, _parentContext) {
  }
  onEnd(span) {
    if (this._shutdownOnce.isCalled) {
      return;
    }
    if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) {
      return;
    }
    this._addToBuffer(span);
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return Promise.resolve().then(() => {
      return this.onShutdown();
    }).then(() => {
      return this._flushAll();
    }).then(() => {
      return this._exporter.shutdown();
    });
  }
  /** Add a span in the buffer. */
  _addToBuffer(span) {
    if (this._finishedSpans.length >= this._maxQueueSize) {
      if (this._droppedSpansCount === 0) {
        diag.debug("maxQueueSize reached, dropping spans");
      }
      this._droppedSpansCount++;
      return;
    }
    if (this._droppedSpansCount > 0) {
      diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`);
      this._droppedSpansCount = 0;
    }
    this._finishedSpans.push(span);
    this._maybeStartTimer();
  }
  /**
   * Send all spans to the exporter respecting the batch size limit
   * This function is used only on forceFlush or shutdown,
   * for all other cases _flush should be used
   * */
  _flushAll() {
    return new Promise((resolve, reject) => {
      const promises = [];
      const count = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
      for (let i = 0, j = count; i < j; i++) {
        promises.push(this._flushOneBatch());
      }
      Promise.all(promises).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  _flushOneBatch() {
    this._clearTimer();
    if (this._finishedSpans.length === 0) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("Timeout"));
      }, this._exportTimeoutMillis);
      context.with(suppressTracing(context.active()), () => {
        let spans;
        if (this._finishedSpans.length <= this._maxExportBatchSize) {
          spans = this._finishedSpans;
          this._finishedSpans = [];
        } else {
          spans = this._finishedSpans.splice(0, this._maxExportBatchSize);
        }
        const doExport = () => this._exporter.export(spans, (result) => {
          clearTimeout(timer);
          if (result.code === ExportResultCode.SUCCESS) {
            resolve();
          } else {
            reject(result.error ?? new Error("BatchSpanProcessor: span export failed"));
          }
        });
        let pendingResources = null;
        for (let i = 0, len = spans.length; i < len; i++) {
          const span = spans[i];
          if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
            pendingResources ??= [];
            pendingResources.push(span.resource.waitForAsyncAttributes());
          }
        }
        if (pendingResources === null) {
          doExport();
        } else {
          Promise.all(pendingResources).then(doExport, (err) => {
            globalErrorHandler(err);
            reject(err);
          });
        }
      });
    });
  }
  _maybeStartTimer() {
    if (this._isExporting)
      return;
    const flush = () => {
      this._isExporting = true;
      this._flushOneBatch().finally(() => {
        this._isExporting = false;
        if (this._finishedSpans.length > 0) {
          this._clearTimer();
          this._maybeStartTimer();
        }
      }).catch((e) => {
        this._isExporting = false;
        globalErrorHandler(e);
      });
    };
    if (this._finishedSpans.length >= this._maxExportBatchSize) {
      return flush();
    }
    if (this._timer !== void 0)
      return;
    this._timer = setTimeout(() => flush(), this._scheduledDelayMillis);
    if (typeof this._timer !== "number") {
      this._timer.unref();
    }
  }
  _clearTimer() {
    if (this._timer !== void 0) {
      clearTimeout(this._timer);
      this._timer = void 0;
    }
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/export/BatchSpanProcessor.js
var BatchSpanProcessor = class extends BatchSpanProcessorBase {
  onShutdown() {
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/node/RandomIdGenerator.js
var SPAN_ID_BYTES = 8;
var TRACE_ID_BYTES = 16;
var RandomIdGenerator = class {
  /**
   * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
   * characters corresponding to 128 bits.
   */
  generateTraceId = getIdGenerator(TRACE_ID_BYTES);
  /**
   * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
   * characters corresponding to 64 bits.
   */
  generateSpanId = getIdGenerator(SPAN_ID_BYTES);
};
var SHARED_BUFFER = Buffer.allocUnsafe(TRACE_ID_BYTES);
function getIdGenerator(bytes) {
  return function generateId() {
    for (let i = 0; i < bytes / 4; i++) {
      SHARED_BUFFER.writeUInt32BE(Math.random() * 2 ** 32 >>> 0, i * 4);
    }
    for (let i = 0; i < bytes; i++) {
      if (SHARED_BUFFER[i] > 0) {
        break;
      } else if (i === bytes - 1) {
        SHARED_BUFFER[bytes - 1] = 1;
      }
    }
    return SHARED_BUFFER.toString("hex", 0, bytes);
  };
}

// node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js
var Tracer = class {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  /**
   * Constructs a new Tracer instance.
   */
  constructor(instrumentationScope, config, resource, spanProcessor) {
    const localConfig = mergeConfig(config);
    this._sampler = localConfig.sampler;
    this._generalLimits = localConfig.generalLimits;
    this._spanLimits = localConfig.spanLimits;
    this._idGenerator = config.idGenerator || new RandomIdGenerator();
    this._resource = resource;
    this._spanProcessor = spanProcessor;
    this.instrumentationScope = instrumentationScope;
  }
  /**
   * Starts a new Span or returns the default NoopSpan based on the sampling
   * decision.
   */
  startSpan(name, options = {}, context2 = context.active()) {
    if (options.root) {
      context2 = trace.deleteSpan(context2);
    }
    const parentSpan = trace.getSpan(context2);
    if (isTracingSuppressed(context2)) {
      diag.debug("Instrumentation suppressed, returning Noop Span");
      const nonRecordingSpan = trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
      return nonRecordingSpan;
    }
    const parentSpanContext = parentSpan?.spanContext();
    const spanId = this._idGenerator.generateSpanId();
    let validParentSpanContext;
    let traceId;
    let traceState;
    if (!parentSpanContext || !trace.isSpanContextValid(parentSpanContext)) {
      traceId = this._idGenerator.generateTraceId();
    } else {
      traceId = parentSpanContext.traceId;
      traceState = parentSpanContext.traceState;
      validParentSpanContext = parentSpanContext;
    }
    const spanKind = options.kind ?? SpanKind.INTERNAL;
    const links = (options.links ?? []).map((link) => {
      return {
        context: link.context,
        attributes: sanitizeAttributes(link.attributes)
      };
    });
    const attributes = sanitizeAttributes(options.attributes);
    const samplingResult = this._sampler.shouldSample(context2, traceId, name, spanKind, attributes, links);
    traceState = samplingResult.traceState ?? traceState;
    const traceFlags = samplingResult.decision === SamplingDecision.RECORD_AND_SAMPLED ? TraceFlags.SAMPLED : TraceFlags.NONE;
    const spanContext = { traceId, spanId, traceFlags, traceState };
    if (samplingResult.decision === SamplingDecision.NOT_RECORD) {
      diag.debug("Recording is off, propagating context in a non-recording span");
      const nonRecordingSpan = trace.wrapSpanContext(spanContext);
      return nonRecordingSpan;
    }
    const initAttributes = sanitizeAttributes(Object.assign(attributes, samplingResult.attributes));
    const span = new SpanImpl({
      resource: this._resource,
      scope: this.instrumentationScope,
      context: context2,
      spanContext,
      name,
      kind: spanKind,
      links,
      parentSpanContext: validParentSpanContext,
      attributes: initAttributes,
      startTime: options.startTime,
      spanProcessor: this._spanProcessor,
      spanLimits: this._spanLimits
    });
    return span;
  }
  startActiveSpan(name, arg2, arg3, arg4) {
    let opts;
    let ctx;
    let fn;
    if (arguments.length < 2) {
      return;
    } else if (arguments.length === 2) {
      fn = arg2;
    } else if (arguments.length === 3) {
      opts = arg2;
      fn = arg3;
    } else {
      opts = arg2;
      ctx = arg3;
      fn = arg4;
    }
    const parentContext = ctx ?? context.active();
    const span = this.startSpan(name, opts, parentContext);
    const contextWithSpanSet = trace.setSpan(parentContext, span);
    return context.with(contextWithSpanSet, fn, void 0, span);
  }
  /** Returns the active {@link GeneralLimits}. */
  getGeneralLimits() {
    return this._generalLimits;
  }
  /** Returns the active {@link SpanLimits}. */
  getSpanLimits() {
    return this._spanLimits;
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js
var MultiSpanProcessor = class {
  _spanProcessors;
  constructor(spanProcessors) {
    this._spanProcessors = spanProcessors;
  }
  forceFlush() {
    const promises = [];
    for (const spanProcessor of this._spanProcessors) {
      promises.push(spanProcessor.forceFlush());
    }
    return new Promise((resolve) => {
      Promise.all(promises).then(() => {
        resolve();
      }).catch((error) => {
        globalErrorHandler(error || new Error("MultiSpanProcessor: forceFlush failed"));
        resolve();
      });
    });
  }
  onStart(span, context2) {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.onStart(span, context2);
    }
  }
  onEnding(span) {
    for (const spanProcessor of this._spanProcessors) {
      if (spanProcessor.onEnding) {
        spanProcessor.onEnding(span);
      }
    }
  }
  onEnd(span) {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.onEnd(span);
    }
  }
  shutdown() {
    const promises = [];
    for (const spanProcessor of this._spanProcessors) {
      promises.push(spanProcessor.shutdown());
    }
    return new Promise((resolve, reject) => {
      Promise.all(promises).then(() => {
        resolve();
      }, reject);
    });
  }
};

// node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js
var ForceFlushState;
(function(ForceFlushState2) {
  ForceFlushState2[ForceFlushState2["resolved"] = 0] = "resolved";
  ForceFlushState2[ForceFlushState2["timeout"] = 1] = "timeout";
  ForceFlushState2[ForceFlushState2["error"] = 2] = "error";
  ForceFlushState2[ForceFlushState2["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
var BasicTracerProvider = class {
  _config;
  _tracers = /* @__PURE__ */ new Map();
  _resource;
  _activeSpanProcessor;
  constructor(config = {}) {
    const mergedConfig = merge({}, loadDefaultConfig(), reconfigureLimits(config));
    this._resource = mergedConfig.resource ?? defaultResource2();
    this._config = Object.assign({}, mergedConfig, {
      resource: this._resource
    });
    const spanProcessors = [];
    if (config.spanProcessors?.length) {
      spanProcessors.push(...config.spanProcessors);
    }
    this._activeSpanProcessor = new MultiSpanProcessor(spanProcessors);
  }
  getTracer(name, version, options) {
    const key = `${name}@${version || ""}:${options?.schemaUrl || ""}`;
    if (!this._tracers.has(key)) {
      this._tracers.set(key, new Tracer({ name, version, schemaUrl: options?.schemaUrl }, this._config, this._resource, this._activeSpanProcessor));
    }
    return this._tracers.get(key);
  }
  forceFlush() {
    const timeout = this._config.forceFlushTimeoutMillis;
    const promises = this._activeSpanProcessor["_spanProcessors"].map((spanProcessor) => {
      return new Promise((resolve) => {
        let state;
        const timeoutInterval = setTimeout(() => {
          resolve(new Error(`Span processor did not completed within timeout period of ${timeout} ms`));
          state = ForceFlushState.timeout;
        }, timeout);
        spanProcessor.forceFlush().then(() => {
          clearTimeout(timeoutInterval);
          if (state !== ForceFlushState.timeout) {
            state = ForceFlushState.resolved;
            resolve(state);
          }
        }).catch((error) => {
          clearTimeout(timeoutInterval);
          state = ForceFlushState.error;
          resolve(error);
        });
      });
    });
    return new Promise((resolve, reject) => {
      Promise.all(promises).then((results) => {
        const errors = results.filter((result) => result !== ForceFlushState.resolved);
        if (errors.length > 0) {
          reject(errors);
        } else {
          resolve();
        }
      }).catch((error) => reject([error]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
};

// node_modules/@opentelemetry/sdk-trace-web/build/esm/StackContextManager.js
var StackContextManager = class {
  /**
   * whether the context manager is enabled or not
   */
  _enabled = false;
  /**
   * Keeps the reference to current context
   */
  _currentContext = ROOT_CONTEXT;
  /**
   *
   * @param context
   * @param target Function to be executed within the context
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  _bindFunction(context2 = ROOT_CONTEXT, target) {
    const manager = this;
    const contextWrapper = function(...args) {
      return manager.with(context2, () => target.apply(this, args));
    };
    Object.defineProperty(contextWrapper, "length", {
      enumerable: false,
      configurable: true,
      writable: false,
      value: target.length
    });
    return contextWrapper;
  }
  /**
   * Returns the active context
   */
  active() {
    return this._currentContext;
  }
  /**
   * Binds a the certain context or the active one to the target function and then returns the target
   * @param context A context (span) to be bind to target
   * @param target a function or event emitter. When target or one of its callbacks is called,
   *  the provided context will be used as the active context for the duration of the call.
   */
  bind(context2, target) {
    if (context2 === void 0) {
      context2 = this.active();
    }
    if (typeof target === "function") {
      return this._bindFunction(context2, target);
    }
    return target;
  }
  /**
   * Disable the context manager (clears the current context)
   */
  disable() {
    this._currentContext = ROOT_CONTEXT;
    this._enabled = false;
    return this;
  }
  /**
   * Enables the context manager and creates a default(root) context
   */
  enable() {
    if (this._enabled) {
      return this;
    }
    this._enabled = true;
    this._currentContext = ROOT_CONTEXT;
    return this;
  }
  /**
   * Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
   * The context will be set as active
   * @param context
   * @param fn Callback function
   * @param thisArg optional receiver to be used for calling fn
   * @param args optional arguments forwarded to fn
   */
  with(context2, fn, thisArg, ...args) {
    const previousContext = this._currentContext;
    this._currentContext = context2 || ROOT_CONTEXT;
    try {
      return fn.call(thisArg, ...args);
    } finally {
      this._currentContext = previousContext;
    }
  }
};

// node_modules/@opentelemetry/sdk-trace-web/build/esm/WebTracerProvider.js
function setupContextManager(contextManager) {
  if (contextManager === null) {
    return;
  }
  if (contextManager === void 0) {
    const defaultContextManager = new StackContextManager();
    defaultContextManager.enable();
    context.setGlobalContextManager(defaultContextManager);
    return;
  }
  contextManager.enable();
  context.setGlobalContextManager(contextManager);
}
function setupPropagator(propagator) {
  if (propagator === null) {
    return;
  }
  if (propagator === void 0) {
    propagation.setGlobalPropagator(new CompositePropagator({
      propagators: [
        new W3CTraceContextPropagator(),
        new W3CBaggagePropagator()
      ]
    }));
    return;
  }
  propagation.setGlobalPropagator(propagator);
}
var WebTracerProvider = class extends BasicTracerProvider {
  /**
   * Constructs a new Tracer instance.
   * @param config Web Tracer config
   */
  constructor(config = {}) {
    super(config);
  }
  /**
   * Register this TracerProvider for use with the OpenTelemetry API.
   * Undefined values may be replaced with defaults, and
   * null values will be skipped.
   *
   * @param config Configuration object for SDK registration
   */
  register(config = {}) {
    trace.setGlobalTracerProvider(this);
    setupPropagator(config.propagator);
    setupContextManager(config.contextManager);
  }
};

// node_modules/@opentelemetry/sdk-trace-web/build/esm/enums/PerformanceTimingNames.js
var PerformanceTimingNames;
(function(PerformanceTimingNames2) {
  PerformanceTimingNames2["CONNECT_END"] = "connectEnd";
  PerformanceTimingNames2["CONNECT_START"] = "connectStart";
  PerformanceTimingNames2["DECODED_BODY_SIZE"] = "decodedBodySize";
  PerformanceTimingNames2["DOM_COMPLETE"] = "domComplete";
  PerformanceTimingNames2["DOM_CONTENT_LOADED_EVENT_END"] = "domContentLoadedEventEnd";
  PerformanceTimingNames2["DOM_CONTENT_LOADED_EVENT_START"] = "domContentLoadedEventStart";
  PerformanceTimingNames2["DOM_INTERACTIVE"] = "domInteractive";
  PerformanceTimingNames2["DOMAIN_LOOKUP_END"] = "domainLookupEnd";
  PerformanceTimingNames2["DOMAIN_LOOKUP_START"] = "domainLookupStart";
  PerformanceTimingNames2["ENCODED_BODY_SIZE"] = "encodedBodySize";
  PerformanceTimingNames2["FETCH_START"] = "fetchStart";
  PerformanceTimingNames2["LOAD_EVENT_END"] = "loadEventEnd";
  PerformanceTimingNames2["LOAD_EVENT_START"] = "loadEventStart";
  PerformanceTimingNames2["NAVIGATION_START"] = "navigationStart";
  PerformanceTimingNames2["REDIRECT_END"] = "redirectEnd";
  PerformanceTimingNames2["REDIRECT_START"] = "redirectStart";
  PerformanceTimingNames2["REQUEST_START"] = "requestStart";
  PerformanceTimingNames2["RESPONSE_END"] = "responseEnd";
  PerformanceTimingNames2["RESPONSE_START"] = "responseStart";
  PerformanceTimingNames2["SECURE_CONNECTION_START"] = "secureConnectionStart";
  PerformanceTimingNames2["START_TIME"] = "startTime";
  PerformanceTimingNames2["UNLOAD_EVENT_END"] = "unloadEventEnd";
  PerformanceTimingNames2["UNLOAD_EVENT_START"] = "unloadEventStart";
})(PerformanceTimingNames || (PerformanceTimingNames = {}));

// node_modules/@eac-arch/infrastructure-telemetry/fesm2022/eac-arch-infrastructure-telemetry.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var appTracer = trace.getTracer("eac-arch-ng-client");
var CurrentSpanService = class _CurrentSpanService {
  spansByKey = /* @__PURE__ */ new Map();
  set(key, span) {
    this.spansByKey.set(key, span);
  }
  clear(key) {
    this.spansByKey.delete(key);
  }
  get(key) {
    return this.spansByKey.get(key);
  }
  peek() {
    const values = Array.from(this.spansByKey.values());
    return values.at(-1);
  }
  peekEntry() {
    let last;
    for (const [key, span] of this.spansByKey) {
      last = {
        key,
        span
      };
    }
    return last;
  }
  static ɵfac = function CurrentSpanService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrentSpanService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _CurrentSpanService,
    factory: _CurrentSpanService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentSpanService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterTracingService = class _RouterTracingService {
  router;
  currentSpanService;
  spansByNavigationId = /* @__PURE__ */ new Map();
  bootstrapNavigationKey = null;
  currentPageKey = null;
  isMethodsPatched = false;
  pendingInvocationSource = null;
  pendingInvocationSpan = null;
  isStarted = false;
  // Buffers the first NavigationStart that fires before start() is called.
  // provideRouter's APP_INITIALIZER calls router.initialNavigation() and that
  // can dispatch NavigationStart (synchronously or in a microtask) before
  // provideTelemetry's APP_INITIALIZER has a chance to call start().
  bufferedNavStart = null;
  constructor(router, currentSpanService) {
    this.router = router;
    this.currentSpanService = currentSpanService;
    this.router.events.subscribe((event) => {
      if (!this.isStarted) {
        if (event instanceof NavigationStart && !this.bufferedNavStart) {
          this.bufferedNavStart = event;
        }
        return;
      }
      this.handleRouterEvent(event);
    });
  }
  start() {
    if (this.isStarted) return;
    this.isStarted = true;
    this.patchRouterMethods();
    if (this.router.navigated) {
      this.createMissedInitialPageSpan();
    } else if (this.bufferedNavStart) {
      this.handleNavigationStart(this.bufferedNavStart);
    } else {
      const inFlight = this.router.getCurrentNavigation();
      if (inFlight) {
        this.createInFlightNavSpan(inFlight);
      } else {
        this.startBootstrapSpan();
      }
    }
    this.bufferedNavStart = null;
  }
  handleRouterEvent(event) {
    if (event instanceof NavigationStart) {
      this.handleNavigationStart(event);
      return;
    }
    if (event instanceof NavigationEnd) {
      this.markNavigationComplete(event.id, SpanStatusCode.OK, event.urlAfterRedirects);
      this.completeBootstrapSpan(SpanStatusCode.OK, event.urlAfterRedirects);
      return;
    }
    if (event instanceof NavigationCancel || event instanceof NavigationError) {
      const errorMessage = event instanceof NavigationError ? event.error?.message ?? "navigation error" : event.reason;
      this.completeNavigation(event.id, SpanStatusCode.ERROR, errorMessage);
      this.completeBootstrapSpan(SpanStatusCode.ERROR, this.router.url, errorMessage);
      return;
    }
    if (event instanceof NavigationSkipped) {
      this.completeNavigation(event.id, SpanStatusCode.OK, event.reason);
      this.completeBootstrapSpan(SpanStatusCode.OK, this.router.url, event.reason);
      return;
    }
    if (event instanceof RouteConfigLoadStart) {
      this.addNavigationEvent("ui.route.config.load.start", {
        route: event.route.path ?? "(lazy-route)"
      });
      return;
    }
    if (event instanceof RouteConfigLoadEnd) {
      this.addNavigationEvent("ui.route.config.load.end", {
        route: event.route.path ?? "(lazy-route)"
      });
      return;
    }
    if (event instanceof GuardsCheckStart) {
      this.addNavigationEvent("ui.route.guards.start", {
        url: event.url
      });
      return;
    }
    if (event instanceof GuardsCheckEnd) {
      this.addNavigationEvent("ui.route.guards.end", {
        shouldActivate: String(event.shouldActivate)
      });
      return;
    }
    if (event instanceof ResolveStart) {
      this.addNavigationEvent("ui.route.resolve.start", {
        url: event.url
      });
      return;
    }
    if (event instanceof ResolveEnd) {
      this.addNavigationEvent("ui.route.resolve.end", {
        url: event.urlAfterRedirects
      });
    }
  }
  handleNavigationStart(event) {
    if (this.currentPageKey) {
      const prevSpan = this.currentSpanService.get(this.currentPageKey);
      if (prevSpan) {
        prevSpan.addEvent("page.superseded");
        prevSpan.end();
      }
      this.currentSpanService.clear(this.currentPageKey);
      this.currentPageKey = null;
    }
    const parentCtx = this.pendingInvocationSpan ? trace.setSpan(context.active(), this.pendingInvocationSpan) : context.active();
    const span = appTracer.startSpan(`router.navigate ${event.url}`, {
      attributes: {
        "component.layer": "presentation.router",
        "ui.route.target": event.url,
        "ui.navigation.id": event.id,
        "ui.navigation.trigger": event.navigationTrigger,
        "ui.navigation.source": this.pendingInvocationSource ?? event.navigationTrigger,
        "ui.navigation.restored": event.restoredState ? "true" : "false"
      }
    }, parentCtx);
    const key = this.navigationKey(event.id);
    this.currentSpanService.set(key, span);
    this.spansByNavigationId.set(event.id, key);
    if (this.pendingInvocationSpan) {
      this.pendingInvocationSpan.updateName(`router.invoke ${this.pendingInvocationSource ?? "navigate"} ${event.url}`);
    }
    this.pendingInvocationSource = null;
    this.pendingInvocationSpan = null;
  }
  patchRouterMethods() {
    if (this.isMethodsPatched) return;
    this.isMethodsPatched = true;
    const originalNavigate = this.router.navigate.bind(this.router);
    const originalNavigateByUrl = this.router.navigateByUrl.bind(this.router);
    this.router.navigate = (commands, extras) => {
      this.pendingInvocationSource = "navigate";
      return this.traceInvocation("router.invoke navigate", () => originalNavigate(commands, extras));
    };
    this.router.navigateByUrl = (url, extras) => {
      if (this.pendingInvocationSpan) {
        return originalNavigateByUrl(url, extras);
      }
      this.pendingInvocationSource = "navigateByUrl";
      return this.traceInvocation("router.invoke navigateByUrl", () => originalNavigateByUrl(url, extras));
    };
  }
  traceInvocation(name, action) {
    const activeEntry = this.currentSpanService.peekEntry();
    const parentCtx = activeEntry?.key.startsWith("interaction:") ? trace.setSpan(context.active(), activeEntry.span) : context.active();
    const span = appTracer.startSpan(name, {
      attributes: {
        "component.layer": "presentation.router"
      }
    }, parentCtx);
    this.pendingInvocationSpan = span;
    return action().then((result) => {
      span.setAttribute("ui.navigation.invocation.result", String(result));
      span.setStatus({
        code: SpanStatusCode.OK
      });
      return result;
    }).catch((error) => {
      const message = error instanceof Error ? error.message : "navigation invocation failed";
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message
      });
      throw error;
    }).finally(() => {
      span.end();
    });
  }
  createMissedInitialPageSpan() {
    const url = this.router.url || "/";
    const key = "router:initial-page";
    const span = appTracer.startSpan(`router.navigate ${url}`, {
      attributes: {
        "component.layer": "presentation.router",
        "ui.route.target": url,
        "ui.route.final": url,
        "ui.navigation.source": "bootstrap",
        "ui.navigation.trigger": "imperative",
        "ui.navigation.note": "synthetic-missed-initial"
      }
    });
    span.setStatus({
      code: SpanStatusCode.OK
    });
    span.addEvent("navigation.complete");
    this.currentSpanService.set(key, span);
    this.currentPageKey = key;
  }
  createInFlightNavSpan(nav) {
    const url = nav.initialUrl.toString();
    const key = this.navigationKey(nav.id);
    const span = appTracer.startSpan(`router.navigate ${url}`, {
      attributes: {
        "component.layer": "presentation.router",
        "ui.route.target": url,
        "ui.navigation.id": nav.id,
        "ui.navigation.trigger": nav.trigger,
        "ui.navigation.source": nav.trigger,
        "ui.navigation.note": "retroactive-bootstrap"
      }
    });
    this.currentSpanService.set(key, span);
    this.spansByNavigationId.set(nav.id, key);
  }
  startBootstrapSpan() {
    if (this.bootstrapNavigationKey) return;
    const key = "router:bootstrap";
    const span = appTracer.startSpan(`router.bootstrap ${this.router.url || "/"}`, {
      attributes: {
        "component.layer": "presentation.router",
        "ui.navigation.source": "bootstrap",
        "ui.route.target": this.router.url || "/"
      }
    });
    this.currentSpanService.set(key, span);
    this.bootstrapNavigationKey = key;
  }
  completeBootstrapSpan(code, finalUrl, message) {
    if (!this.bootstrapNavigationKey) return;
    const span = this.currentSpanService.get(this.bootstrapNavigationKey);
    if (!span) {
      this.bootstrapNavigationKey = null;
      return;
    }
    span.setAttribute("ui.route.final", finalUrl);
    span.setStatus({
      code,
      message
    });
    span.end();
    this.currentSpanService.clear(this.bootstrapNavigationKey);
    this.bootstrapNavigationKey = null;
  }
  markNavigationComplete(id, code, finalUrl) {
    const key = this.spansByNavigationId.get(id);
    if (!key) return;
    const span = this.currentSpanService.get(key);
    if (span) {
      span.setAttribute("ui.route.final", finalUrl);
      span.setStatus({
        code
      });
      span.addEvent("navigation.complete");
    }
    this.currentPageKey = key;
    this.spansByNavigationId.delete(id);
  }
  completeNavigation(id, code, message, finalUrl) {
    const key = this.spansByNavigationId.get(id);
    if (!key) return;
    const span = this.currentSpanService.get(key);
    if (span) {
      if (finalUrl) {
        span.setAttribute("ui.route.final", finalUrl);
      }
      span.setStatus({
        code,
        message
      });
      span.end();
    }
    this.currentSpanService.clear(key);
    this.spansByNavigationId.delete(id);
    if (this.currentPageKey === key) {
      this.currentPageKey = null;
    }
  }
  addNavigationEvent(name, attributes) {
    const activeSpan = this.currentSpanService.peek();
    if (!activeSpan) return;
    activeSpan.addEvent(name, attributes);
  }
  navigationKey(id) {
    return `router:${id}`;
  }
  static ɵfac = function RouterTracingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterTracingService)(ɵɵinject(Router), ɵɵinject(CurrentSpanService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RouterTracingService,
    factory: _RouterTracingService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterTracingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: CurrentSpanService
  }], null);
})();
var SPAN_FALLBACK_TTL_MS = 5e3;
var POINTER_EVENTS = ["click", "submit"];
var FIELD_TAGS = /* @__PURE__ */ new Set(["INPUT", "TEXTAREA"]);
var SELECT_OPEN_TAGS = /* @__PURE__ */ new Set(["MAT-SELECT"]);
var PASSIVE_TAGS = /* @__PURE__ */ new Set(["LABEL", "SPAN", "DIV", "LI", "UL", "NAV"]);
var FRAMEWORK_PREFIXES = ["mat-", "mdc-", "cdk-", "ng-"];
var ICON_TAGS = /* @__PURE__ */ new Set(["MAT-ICON", "SVG", "IMG", "I"]);
var KEYBOARD_SELECT_KEYS = /* @__PURE__ */ new Set(["Enter", " "]);
var counter = 0;
var UserInteractionTracingService = class _UserInteractionTracingService {
  svc = inject(CurrentSpanService);
  doc = inject(DOCUMENT);
  router = inject(Router);
  // Active span waiting for NavigationEnd to close.
  pendingSpan = null;
  // Dirty-field snapshot keyed by component host tag name.
  // Consumed by the next pointer action or field-driven navigate.
  // Always cleared on NavigationEnd so stale state never leaks across pages.
  dirtyFields = /* @__PURE__ */ new Map();
  // Elements that received a 'change' event (value was actually modified).
  // Used to distinguish a blur on a truly-edited field (which may trigger async
  // validators → HTTP) from a blur on a field the user only focused and left.
  changedEls = /* @__PURE__ */ new WeakSet();
  // Last interactive element that received focus — used only for the
  // `ui.element.tag` attribute in field-driven navigate spans.
  lastFocusedEl = null;
  offListeners = [];
  navSub = null;
  // ── Lifecycle ────────────────────────────────────────────────────────────────
  start() {
    this.listenPointerEvents();
    this.listenChangeEvents();
    this.listenBlurEvents();
    this.listenKeyboardEvents();
    this.listenFocusIn();
    this.listenNavigation();
    this.hookNavigate();
  }
  ngOnDestroy() {
    this.offListeners.forEach((off) => off());
    this.navSub?.unsubscribe();
    this.closePending();
    this.dirtyFields.clear();
  }
  // ── Event listeners ──────────────────────────────────────────────────────────
  listenPointerEvents() {
    for (const name of POINTER_EVENTS) {
      const handler = (e) => this.onPointer(e, name);
      this.doc.addEventListener(name, handler, {
        capture: true
      });
      this.offListeners.push(() => this.doc.removeEventListener(name, handler, {
        capture: true
      }));
    }
  }
  // 'change' fires when the value actually changes — marks the element as edited.
  listenChangeEvents() {
    const handler = (e) => {
      const el = e.target;
      if (el && FIELD_TAGS.has(el.tagName)) this.changedEls.add(el);
    };
    this.doc.addEventListener("change", handler, {
      capture: true
    });
    this.offListeners.push(() => this.doc.removeEventListener("change", handler, {
      capture: true
    }));
  }
  // 'blur' fires when leaving a field. Opens a span only when the field was
  // actually modified (present in changedEls) so that async validators triggered
  // at blur time (e.g. uniqueAuthorNameValidator) have a parent span in Jaeger.
  // blur does not bubble — capture phase is mandatory.
  listenBlurEvents() {
    const handler = (e) => this.onFieldBlur(e);
    this.doc.addEventListener("blur", handler, {
      capture: true
    });
    this.offListeners.push(() => this.doc.removeEventListener("blur", handler, {
      capture: true
    }));
  }
  listenKeyboardEvents() {
    const handler = (e) => {
      if (KEYBOARD_SELECT_KEYS.has(e.key)) this.onKeyboardSelect(e);
    };
    this.doc.addEventListener("keydown", handler, {
      capture: true
    });
    this.offListeners.push(() => this.doc.removeEventListener("keydown", handler, {
      capture: true
    }));
  }
  listenFocusIn() {
    const handler = (e) => {
      const el = e.target;
      if (el && isInteractiveTag(el.tagName)) this.lastFocusedEl = el;
    };
    this.doc.addEventListener("focusin", handler, {
      capture: true
    });
    this.offListeners.push(() => this.doc.removeEventListener("focusin", handler, {
      capture: true
    }));
  }
  listenNavigation() {
    this.navSub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (this.pendingSpan && this.pendingSpan.awaitingNavId === null) {
          this.pendingSpan.awaitingNavId = e.id;
        }
        return;
      }
      if (e instanceof NavigationEnd) {
        if (this.pendingSpan?.awaitingNavId === e.id) {
          this.closePending();
        }
        this.dirtyFields.clear();
      }
    });
  }
  // ── Interaction handlers ─────────────────────────────────────────────────────
  /**
   * Keyboard selection for Angular Material CDK-listbox controls.
   *
   * mat-select keeps focus on its host element and tracks the highlighted option
   * via `aria-activedescendant` — pressing Enter/Space does NOT fire a click event.
   * This handler covers that gap.
   *
   * Excluded automatically:
   *  - BUTTON / A: browsers synthesise a click on Enter/Space → already traced.
   *  - Panel CLOSED + Enter/Space: opens the panel, not a selection (aria-expanded absent).
   *  - Panel open but no active-descendant: user hasn't navigated to any option yet.
   */
  onKeyboardSelect(_event) {
    const openSelect = this.doc.querySelector('mat-select[aria-expanded="true"]');
    if (!openSelect) return;
    const activeDescId = openSelect.getAttribute("aria-activedescendant");
    if (!activeDescId) return;
    const optionEl = this.doc.getElementById(activeDescId);
    const labelTarget = optionEl ?? openSelect;
    const host = resolveComponentHost(openSelect);
    const action = resolveActionLabel(labelTarget, "select", this.doc);
    const name = host ? `ui.interaction ${host}.${action} [keyboard]` : `ui.interaction ${action} [keyboard]`;
    const hostKey = host ?? "";
    const priorFields = this.dirtyFields.get(hostKey);
    this.dirtyFields.delete(hostKey);
    this.closePending();
    this.openSpan(name, __spreadValues(__spreadValues({
      "ui.event.type": "keyboard",
      "ui.element.tag": "mat-select",
      "ui.action": action
    }, host ? {
      "ui.component": host
    } : {}), priorFields?.length ? {
      "ui.fields_changed": priorFields.map((f) => f.label).join(", ")
    } : {}), host);
  }
  /**
   * Pointer event: click or submit.
   * Opens a new root interaction span. Field edits made before this click
   * (on the same component) are attached as `ui.fields_changed`.
   */
  onPointer(event, eventName) {
    const raw = event.target;
    if (!raw) return;
    const target = resolveInteractiveTarget(raw);
    if (!target) return;
    const host = resolveComponentHost(target);
    const action = resolveActionLabel(target, eventName, this.doc);
    const name = host ? `ui.interaction ${host}.${action} [${eventName}]` : `ui.interaction ${action} [${eventName}]`;
    const hostKey = host ?? "";
    const priorFields = this.dirtyFields.get(hostKey);
    this.dirtyFields.delete(hostKey);
    this.closePending();
    this.openSpan(name, __spreadValues(__spreadValues({
      "ui.event.type": eventName,
      "ui.element.tag": target.tagName.toLowerCase(),
      "ui.action": action
    }, host ? {
      "ui.component": host
    } : {}), priorFields?.length ? {
      "ui.fields_changed": priorFields.map((f) => f.label).join(", ")
    } : {}), host);
  }
  /**
   * Blur on a field that was actually modified (change fired before this blur).
   *
   * Opens an interaction span immediately so that async validators triggered at
   * blur time (e.g. uniqueAuthorNameValidator → HTTP) become children of this
   * span and appear grouped in Jaeger.
   *
   * The span is named after the COMPONENT + "edit", not the individual field.
   * Reason: if the user edits several fields before the span is consumed, the
   * span for the FIRST blurred field would incorrectly become the parent of
   * validators triggered by LATER fields. Using a generic component-level name
   * keeps the span correct regardless of which field's validator fires HTTP.
   * The specific fields are recorded in `ui.fields_changed` via setAttribute
   * so they accumulate as each additional field blurs.
   *
   * Also records the field in dirtyFields so the NEXT pointer action (Save)
   * can attach it as `ui.fields_changed`.
   */
  onFieldBlur(event) {
    const el = event.target;
    if (!el || !FIELD_TAGS.has(el.tagName)) return;
    if (!this.changedEls.has(el)) return;
    const host = resolveComponentHost(el) ?? "";
    const label = resolveActionLabel(el, "change", this.doc);
    const componentKey = host || null;
    this.recordDirtyField(host, label, el.tagName.toLowerCase());
    if (this.pendingSpan?.componentHost === componentKey) {
      const all2 = this.dirtyFields.get(host) ?? [];
      this.pendingSpan.span.setAttribute("ui.fields_changed", all2.map((f) => f.label).join(", "));
      return;
    }
    this.closePending();
    const name = host ? `ui.interaction ${host}.edit [blur]` : `ui.interaction edit [blur]`;
    const all = this.dirtyFields.get(host) ?? [];
    this.openSpan(name, __spreadProps(__spreadValues({
      "ui.event.type": "blur",
      "ui.element.tag": el.tagName.toLowerCase(),
      "ui.action": host ? `${host}.edit` : "edit"
    }, host ? {
      "ui.component": host
    } : {}), {
      "ui.fields_changed": all.map((f) => f.label).join(", ")
    }), componentKey);
  }
  recordDirtyField(host, label, tag) {
    const entry = {
      label,
      tag
    };
    const existing = this.dirtyFields.get(host);
    if (!existing) {
      this.dirtyFields.set(host, [entry]);
      return;
    }
    const idx = existing.findIndex((f) => f.label === label);
    if (idx >= 0) existing[idx] = entry;
    else existing.push(entry);
  }
  // ── Field-driven navigate ────────────────────────────────────────────────────
  /**
   * Wraps router.navigate so dirty-field snapshots are promoted to a real
   * interaction span SYNCHRONOUSLY before RouterTracingService.traceInvocation()
   * calls CurrentSpanService.peekEntry().
   *
   * Registration order (otel.provider.ts):
   *   1. RouterTracingService.start() patches router.navigate (inner layer)
   *   2. UserInteractionTracingService.start() patches the patched navigate (outer layer)
   * When a component calls router.navigate:
   *   outer (UIT) runs first → may create interaction span
   *   inner (RST) runs next → finds interaction:* in CurrentSpanService → child span ✓
   */
  hookNavigate() {
    const original = this.router.navigate.bind(this.router);
    this.router.navigate = (commands, extras) => {
      if (!this.pendingSpan) {
        this.promoteFieldsToPendingSpan();
      }
      return original(commands, extras);
    };
  }
  /**
   * Promotes the dirty-field snapshot to a pending interaction span.
   * Returns immediately (no-op) when no fields are dirty — guards, timers
   * and programmatic redirects produce no dirty fields, so RouterTracingService's
   * bootstrap/navigate span correctly remains the trace root.
   */
  promoteFieldsToPendingSpan() {
    let bestHost = null;
    let bestFields = [];
    for (const [host, fields] of this.dirtyFields) {
      if (fields.length > bestFields.length) {
        bestHost = host || null;
        bestFields = fields;
      }
    }
    if (!bestFields.length) return;
    const fieldsList = bestFields.map((f) => f.label).join(", ");
    const name = bestHost ? `ui.interaction ${bestHost}.edit [change]` : `ui.interaction edit [change]`;
    this.dirtyFields.delete(bestHost ?? "");
    this.openSpan(name, __spreadProps(__spreadValues({
      "ui.event.type": "change",
      "ui.element.tag": this.lastFocusedEl?.tagName.toLowerCase() ?? "unknown",
      "ui.action": bestHost ? `${bestHost}.edit` : "edit"
    }, bestHost ? {
      "ui.component": bestHost
    } : {}), {
      "ui.fields_changed": fieldsList,
      "ui.trigger": "field-navigation"
    }), bestHost);
  }
  // ── Span helpers ─────────────────────────────────────────────────────────────
  openSpan(name, attrs, componentHost) {
    const pageSpan = this.svc.peek();
    const pageTraceId = pageSpan?.spanContext().traceId;
    const span = appTracer.startSpan(
      name,
      {
        attributes: __spreadValues(__spreadValues({
          "component.layer": "presentation.interaction",
          "ui.page.url": this.router.url
        }, pageTraceId ? {
          "ui.page.trace_id": pageTraceId
        } : {}), attrs)
      },
      // ROOT_CONTEXT: interaction spans are always trace roots —
      // they are the entry point visible as the Jaeger trace title.
      ROOT_CONTEXT
    );
    const key = `interaction:${attrs["ui.action"]}:${++counter}`;
    this.svc.set(key, span);
    const timer = setTimeout(() => this.closePending(), SPAN_FALLBACK_TTL_MS);
    this.pendingSpan = {
      span,
      key,
      timer,
      componentHost,
      awaitingNavId: null
    };
  }
  closePending() {
    if (!this.pendingSpan) return;
    const {
      span,
      key,
      timer
    } = this.pendingSpan;
    clearTimeout(timer);
    this.pendingSpan = null;
    span.setStatus({
      code: SpanStatusCode.OK
    });
    span.end();
    this.svc.clear(key);
  }
  static ɵfac = function UserInteractionTracingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserInteractionTracingService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UserInteractionTracingService,
    factory: _UserInteractionTracingService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserInteractionTracingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function resolveInteractiveTarget(el) {
  if (!el) return null;
  let node = el;
  while (node) {
    const tag = node.tagName;
    if (tag === "MAT-OPTION") {
      let parent = node.parentElement;
      while (parent) {
        if (parent.tagName === "MAT-SELECT") return parent;
        parent = parent.parentElement;
      }
      const expanded = el.ownerDocument?.querySelector('mat-select[aria-expanded="true"]');
      if (expanded) return expanded;
      const panelId = node.closest("[id]")?.id ?? "";
      if (panelId) {
        const byOwns = el.ownerDocument?.querySelector(`mat-select[aria-owns~="${panelId}"], mat-select[aria-controls~="${panelId}"]`);
        if (byOwns) return byOwns;
      }
      return node;
    }
    if (tag === "BUTTON" || tag === "INPUT" || tag === "SELECT" || tag === "FORM") {
      const toggle = node.closest("mat-datepicker-toggle");
      if (toggle) return toggle;
      if (node.closest("mat-calendar")) {
        const openToggle = el.ownerDocument?.querySelector('mat-datepicker-toggle button[aria-expanded="true"]')?.closest("mat-datepicker-toggle");
        return openToggle ?? null;
      }
      return node;
    }
    if (tag === "A") return node;
    if (tag === "MAT-DATEPICKER-TOGGLE") return node;
    if (SELECT_OPEN_TAGS.has(tag)) return null;
    node = node.parentElement;
  }
  if (PASSIVE_TAGS.has(el.tagName)) return null;
  return null;
}
function resolveActionLabel(el, eventName, doc) {
  const explicit = el.getAttribute("data-action");
  if (explicit) return explicit;
  const aria = el.getAttribute("aria-label");
  if (aria) return sanitize(aria);
  const labelledById = el.getAttribute("aria-labelledby");
  if (labelledById) {
    const text2 = doc.getElementById(labelledById)?.textContent?.trim();
    if (text2) return sanitize(text2);
  }
  const id = el.getAttribute("id");
  if (id) {
    const text2 = doc.querySelector(`label[for="${id}"]`)?.textContent?.trim();
    if (text2) return sanitize(text2);
  }
  let ancestor = el.parentElement;
  while (ancestor) {
    if (ancestor.tagName === "MAT-FORM-FIELD") {
      const text2 = ancestor.querySelector("mat-label")?.textContent?.trim();
      if (text2) return sanitize(text2);
      break;
    }
    ancestor = ancestor.parentElement;
  }
  const placeholder = el.getAttribute("placeholder");
  if (placeholder) return sanitize(placeholder);
  const name = el.getAttribute("name");
  if (name) return sanitize(name);
  const text = extractVisibleText(el);
  if (text && text.length <= 40) return sanitize(text);
  return `${el.tagName.toLowerCase()}.${eventName}`;
}
function resolveComponentHost(el) {
  let node = el;
  while (node) {
    if (isAppComponentHost(node)) return node.tagName.toLowerCase();
    node = node.parentElement;
  }
  node = el.parentElement;
  while (node) {
    const tag = node.tagName.toLowerCase();
    if (tag.includes("-") && !FRAMEWORK_PREFIXES.some((p) => tag.startsWith(p))) return tag;
    node = node.parentElement;
  }
  return null;
}
function isAppComponentHost(el) {
  const tag = el.tagName.toLowerCase();
  if (!tag.includes("-") || FRAMEWORK_PREFIXES.some((p) => tag.startsWith(p))) return false;
  const attrs = el.attributes;
  for (let i = 0; i < attrs.length; i++) {
    if (attrs[i].name.startsWith("_nghost-")) return true;
  }
  return false;
}
function isInteractiveTag(tag) {
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON" || tag === "A" || tag === "MAT-SELECT" || tag === "MAT-OPTION" || tag === "MAT-DATEPICKER-TOGGLE";
}
function extractVisibleText(el) {
  const parts = [];
  for (const node of Array.from(el.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = node.textContent?.trim();
      if (t) parts.push(t);
    } else if (node.nodeType === Node.ELEMENT_NODE && !ICON_TAGS.has(node.tagName)) {
      const t = extractVisibleText(node);
      if (t) parts.push(t);
    }
  }
  return parts.join(" ").trim();
}
function sanitize(label) {
  return label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9.\-_]/g, "");
}
function setupOpenTelemetry(endpoint, serviceName2) {
  const provider = new WebTracerProvider({
    resource: resourceFromAttributes2({
      "service.name": serviceName2,
      "deployment.environment": "client"
    }),
    spanProcessors: [new BatchSpanProcessor(new OTLPTraceExporter({
      url: endpoint
    }))]
  });
  provider.register();
  propagation.setGlobalPropagator(new W3CTraceContextPropagator());
}
function normaliseEndpoint(url) {
  if (!url) return "";
  const clean = url.replace(/\/+$/, "");
  return /\/v1\/traces$/.test(clean) ? clean : `${clean}/v1/traces`;
}
function provideTelemetry() {
  return makeEnvironmentProviders([{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [PLATFORM_ID, ConfigService],
    useFactory: (platformId, config) => () => {
      if (!isPlatformBrowser(platformId)) return;
      const telemetryWindow = window;
      if (telemetryWindow.__eacTelemetryInitialized) return;
      const rawEndpoint = config.get("OTEL_COLLECTOR_ENDPOINT") ?? "";
      const endpoint = normaliseEndpoint(rawEndpoint);
      const serviceName2 = config.get("OTEL_SERVICE_NAME") ?? "ng-library-client";
      if (!endpoint) {
        telemetryWindow.__eacTelemetryInitialized = true;
        return;
      }
      try {
        setupOpenTelemetry(endpoint, serviceName2);
      } finally {
        telemetryWindow.__eacTelemetryInitialized = true;
      }
    }
  }, {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [RouterTracingService],
    useFactory: (routerTracingService) => () => {
      routerTracingService.start();
    }
  }, {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [UserInteractionTracingService],
    useFactory: (interactionTracing) => () => {
      interactionTracing.start();
    }
  }]);
}
var DEFAULT_MAX_TRACE_VALUE_LENGTH$1 = 4e3;
var SENSITIVE_FIELD_REGEX = /authorization|cookie|set-cookie|token|secret|password|api[-_]?key/i;
var telemetryHttpInterceptor = (req, next) => {
  const currentSpanService = inject(CurrentSpanService);
  const config = inject(ConfigService);
  const activeContext = context.active();
  const activeSpan = trace.getSpan(activeContext);
  const cachedParentSpan = currentSpanService.peek();
  const parentContext = activeSpan ? activeContext : cachedParentSpan ? trace.setSpan(activeContext, cachedParentSpan) : activeContext;
  const span = appTracer.startSpan(`http.client ${req.method}`, {
    attributes: {
      "span.kind": "client",
      "component.layer": "infrastructure.http",
      "http.request.method": req.method,
      "url.full": req.urlWithParams
    }
  }, parentContext);
  const contextWithSpan = trace.setSpan(parentContext, span);
  const injectTraceHeaders = shouldInjectTraceHeaders(req.url, config);
  const captureDetails = (config.get("TELEMETRY.HTTP_CAPTURE_DETAILS") ?? true) === true;
  const maxTraceValueLength = config.get("TELEMETRY.HTTP_MAX_ATTRIBUTE_LENGTH") ?? DEFAULT_MAX_TRACE_VALUE_LENGTH$1;
  const maxResponseBodyLength = config.get("TELEMETRY.HTTP_RESPONSE_BODY_MAX_LENGTH") ?? maxTraceValueLength;
  const tracedRequest = injectTraceHeaders ? req.clone({
    setHeaders: buildTraceHeaders(contextWithSpan)
  }) : req;
  const httpSpanKey = `http:${req.method}:${req.urlWithParams}:${Date.now()}`;
  currentSpanService.set(httpSpanKey, span);
  span.setAttribute("trace.headers.injected", injectTraceHeaders);
  if (captureDetails) {
    setRequestTraceData(span, tracedRequest, maxTraceValueLength);
  }
  return context.with(contextWithSpan, () => next(tracedRequest).pipe((0, import_rxjs.tap)({
    next: (event) => {
      if (event instanceof HttpResponse) {
        span.setAttribute("http.response.status_code", event.status);
        span.setAttribute("http.response.status_text", event.statusText || "");
        if (captureDetails) {
          setResponseTraceData(span, event, maxTraceValueLength, maxResponseBodyLength);
        }
        span.setStatus({
          code: event.status >= 400 ? SpanStatusCode.ERROR : SpanStatusCode.OK
        });
        span.end();
        currentSpanService.clear(httpSpanKey);
      }
    },
    error: (error) => {
      setHttpErrorTraceData(span, error, tracedRequest.urlWithParams, captureDetails, maxTraceValueLength, maxResponseBodyLength);
      const message = error instanceof HttpErrorResponse ? error.message : error instanceof Error ? error.message : String(error);
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message
      });
      span.end();
      currentSpanService.clear(httpSpanKey);
    }
  })));
};
function setRequestTraceData(span, request, maxLength) {
  span.setAttribute("http.request.headers", toTraceValue$1(headersToObject(request.headers), maxLength));
  span.setAttribute("http.request.query", toTraceValue$1(parseQueryParams(request.urlWithParams), maxLength));
  span.setAttribute("http.request.body", toTraceValue$1(request.body, maxLength));
}
function setResponseTraceData(span, response, maxLength, maxResponseBodyLength) {
  span.setAttribute("http.response.headers", toTraceValue$1(headersToObject(response.headers), maxLength));
  span.setAttribute("http.response.body", toTraceValue$1(response.body, maxResponseBodyLength));
}
function buildTraceHeaders(activeContext) {
  const carrier = {};
  propagation.inject(activeContext, carrier);
  return carrier;
}
function shouldInjectTraceHeaders(url, config) {
  const idpIssuer = config.get("IDP.ISSUER") ?? "";
  if (idpIssuer && url.startsWith(idpIssuer)) {
    return false;
  }
  return true;
}
function headersToObject(headers) {
  return headers.keys().reduce((accumulator, key) => {
    const raw = headers.getAll(key)?.join(", ") ?? "";
    accumulator[key] = isSensitiveKey(key) ? "[REDACTED]" : raw;
    return accumulator;
  }, {});
}
function parseQueryParams(urlWithParams) {
  try {
    const parsedUrl = new URL(urlWithParams, "http://localhost");
    const entries = Array.from(parsedUrl.searchParams.entries());
    return entries.reduce((accumulator, [key, value]) => {
      accumulator[key] = isSensitiveKey(key) ? "[REDACTED]" : value;
      return accumulator;
    }, {});
  } catch {
    return {};
  }
}
function toTraceValue$1(value, maxLength) {
  const serialized = safeStringify$1(redactSensitiveData(value));
  return truncate$1(serialized, maxLength);
}
function redactSensitiveData(value) {
  if (Array.isArray(value)) {
    return value.map((item) => redactSensitiveData(item));
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (value instanceof FormData) {
    const mapped = {};
    value.forEach((entryValue, key) => {
      mapped[key] = isSensitiveKey(key) ? "[REDACTED]" : String(entryValue);
    });
    return mapped;
  }
  const record = value;
  return Object.keys(record).reduce((accumulator, key) => {
    accumulator[key] = isSensitiveKey(key) ? "[REDACTED]" : redactSensitiveData(record[key]);
    return accumulator;
  }, {});
}
function safeStringify$1(value) {
  if (typeof value === "string") {
    return value;
  }
  try {
    const seen = /* @__PURE__ */ new WeakSet();
    return JSON.stringify(value, (_, currentValue) => {
      if (currentValue && typeof currentValue === "object") {
        if (seen.has(currentValue)) {
          return "[Circular]";
        }
        seen.add(currentValue);
      }
      return currentValue;
    });
  } catch {
    return String(value);
  }
}
function truncate$1(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength)}...[truncated]`;
}
function isSensitiveKey(key) {
  return SENSITIVE_FIELD_REGEX.test(key);
}
function setHttpErrorTraceData(span, error, requestUrl, captureDetails, maxLength, maxResponseBodyLength) {
  const httpError = error instanceof HttpErrorResponse ? error : null;
  if (error instanceof Error) {
    span.recordException(error);
  } else {
    span.recordException({
      name: "NonErrorThrow",
      message: String(error)
    });
  }
  span.setAttribute("http.error.kind", httpError ? "http" : "unknown");
  span.setAttribute("http.response.status_code", httpError?.status ?? 0);
  span.setAttribute("http.response.status_text", httpError?.statusText ?? "");
  span.setAttribute("http.request.url", requestUrl);
  if (httpError?.url) {
    span.setAttribute("http.response.url", httpError.url);
  }
  const networkOnline = getNetworkOnline();
  if (networkOnline !== null) {
    span.setAttribute("network.online", networkOnline);
  }
  const isConnectivityError = (httpError?.status ?? 0) === 0;
  span.setAttribute("http.error.connectivity", isConnectivityError);
  const errorName = httpError?.name ?? (error instanceof Error ? error.name : typeof error);
  const errorMessage = httpError?.message ?? (error instanceof Error ? error.message : String(error));
  span.setAttribute("exception.type", truncate$1(errorName, maxLength));
  span.setAttribute("exception.message", truncate$1(errorMessage, maxLength));
  if (error instanceof Error && error.stack) {
    span.setAttribute("exception.stacktrace", truncate$1(error.stack, maxLength));
  }
  if (captureDetails) {
    const responsePayload = httpError ? httpError.error : error;
    span.setAttribute("http.response.error", toTraceValue$1(responsePayload, maxResponseBodyLength));
  }
}
function getNetworkOnline() {
  return typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : null;
}
var DEFAULT_MAX_TRACE_VALUE_LENGTH = 4e3;
function createDiTraceProxy(instance, scope, currentSpanService) {
  const wrappedMethods = /* @__PURE__ */ new Map();
  return new Proxy(instance, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (typeof value !== "function") {
        return value;
      }
      const cached = wrappedMethods.get(property);
      if (cached) {
        return cached;
      }
      const wrapped = (...args) => {
        const activeContext = context.active();
        const activeSpan = trace.getSpan(activeContext);
        const cachedParentSpan = currentSpanService?.peek();
        const parentContext = activeSpan ? activeContext : cachedParentSpan ? trace.setSpan(activeContext, cachedParentSpan) : activeContext;
        const span = appTracer.startSpan(`${scope}.${String(property)}`, {
          attributes: {
            "component.layer": scope,
            "di.proxy.method": String(property),
            "di.proxy.args": toTraceValue(args)
          }
        }, parentContext);
        const spanKey = `${scope}:${String(property)}:${Date.now()}:${Math.random().toString(36).slice(2)}`;
        currentSpanService?.set(spanKey, span);
        const contextWithSpan = trace.setSpan(parentContext, span);
        try {
          const result = context.with(contextWithSpan, () => Reflect.apply(value, target, args));
          if (isPromise(result)) {
            return result.then((resolvedValue) => context.with(contextWithSpan, () => {
              span.setAttribute("di.proxy.result_type", getValueType(resolvedValue));
              span.setStatus({
                code: SpanStatusCode.OK
              });
              return resolvedValue;
            })).catch((error) => context.with(contextWithSpan, () => {
              const message = toStatusMessage(error);
              setDiErrorTraceData(span, error);
              span.setStatus({
                code: SpanStatusCode.ERROR,
                message
              });
              throw error;
            })).finally(() => {
              span.end();
              currentSpanService?.clear(spanKey);
            });
          }
          span.setStatus({
            code: SpanStatusCode.OK
          });
          span.end();
          currentSpanService?.clear(spanKey);
          return result;
        } catch (error) {
          const message = toStatusMessage(error);
          setDiErrorTraceData(span, error);
          span.setStatus({
            code: SpanStatusCode.ERROR,
            message
          });
          span.end();
          currentSpanService?.clear(spanKey);
          throw error;
        }
      };
      wrappedMethods.set(property, wrapped);
      return wrapped;
    }
  });
}
function isPromise(value) {
  return !!value && typeof value.then === "function";
}
function setDiErrorTraceData(span, error) {
  if (error instanceof Error) {
    span.recordException(error);
    span.setAttribute("exception.type", truncate(error.name));
    span.setAttribute("exception.message", truncate(error.message));
    if (error.stack) {
      span.setAttribute("exception.stacktrace", truncate(error.stack));
    }
    const errorWithCause = error;
    if (errorWithCause.cause !== void 0) {
      span.setAttribute("exception.cause", toTraceValue(errorWithCause.cause));
    }
    return;
  }
  const serializedMessage = toStatusMessage(error);
  span.recordException({
    name: "NonErrorThrow",
    message: serializedMessage
  });
  span.setAttribute("exception.type", "NonErrorThrow");
  span.setAttribute("exception.message", serializedMessage);
  span.setAttribute("exception.raw", toTraceValue(error));
}
function getValueType(value) {
  if (value === null) return "null";
  if (value === void 0) return "undefined";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
function toTraceValue(value) {
  return truncate(safeStringify(value));
}
function safeStringify(value) {
  if (typeof value === "string") {
    return value;
  }
  try {
    const seen = /* @__PURE__ */ new WeakSet();
    return JSON.stringify(value, (_, currentValue) => {
      if (currentValue && typeof currentValue === "object") {
        if (seen.has(currentValue)) {
          return "[Circular]";
        }
        seen.add(currentValue);
      }
      return currentValue;
    });
  } catch {
    return String(value);
  }
}
function truncate(value, maxLength = DEFAULT_MAX_TRACE_VALUE_LENGTH) {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength)}...[truncated]`;
}
function toStatusMessage(error) {
  if (error instanceof Error) {
    return truncate(error.message || error.name || "Error");
  }
  if (typeof error === "string") {
    return truncate(error);
  }
  if (error && typeof error === "object") {
    const record = error;
    const candidates = [record["message"], record["error_description"], record["detail"], record["title"], record["error"]];
    for (const candidate of candidates) {
      if (typeof candidate === "string" && candidate.trim().length > 0) {
        return truncate(candidate);
      }
    }
    return truncate(safeStringify(error));
  }
  return truncate(String(error));
}
function provideTracedClass(type, scope) {
  const rawToken = new InjectionToken(`${type.name}.raw`);
  return [{
    provide: rawToken,
    useClass: type
  }, {
    provide: type,
    useFactory: (instance, currentSpanService) => createDiTraceProxy(instance, scope, currentSpanService),
    deps: [rawToken, CurrentSpanService]
  }];
}
export {
  CurrentSpanService,
  UserInteractionTracingService,
  createDiTraceProxy,
  provideTelemetry,
  provideTracedClass,
  telemetryHttpInterceptor
};
//# sourceMappingURL=@eac-arch_infrastructure-telemetry.js.map
