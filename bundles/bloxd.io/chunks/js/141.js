export const id = 141;
export const ids = [141];
export const modules = {
  7795: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Se,
      f: () => qP
    });
    var hv = {};
    Pv.r(hv), Pv.d(hv, {
      d: () => hh,
      h: () => gh,
      g: () => eh,
      i: () => bP,
      l: () => oP,
      o: () => Kh,
      s: () => XP,
      t: () => Rh,
      u: () => fh,
      y: () => Uh,
      B: () => rP,
      E: () => Yh,
      H: () => Dh,
      L: () => Vh,
      N: () => kP,
      M: () => zh,
      P: () => Oh,
      S: () => nh
    });
    var Sv = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function ev(vv) {
      return vv && vv.__esModule && Object.prototype.hasOwnProperty.call(vv, "default") ? vv.default : vv
    }
    var gv = {
      exports: {}
    };
    ! function(vv) {
      var zv = Object.prototype.hasOwnProperty,
        Pv = "~";

      function hv() {}

      function Sv(vv, zv, Pv) {
        this.Ew = vv, this.context = zv, this.once = Pv || !1
      }

      function ev(vv, zv, hv, ev, gv) {
        if ("function" !== typeof hv) throw new TypeError("The listener must be a function");
        var pv = new Sv(hv, ev || vv, gv),
          dv = Pv ? Pv + zv : zv;
        return vv._events[dv] ? vv._events[dv].Ew ? vv._events[dv] = [vv._events[dv], pv] : vv._events[dv].push(pv) : (vv._events[dv] = pv, vv._eventsCount++), vv
      }

      function gv(vv, zv) {
        0 === --vv._eventsCount ? vv._events = new hv : delete vv._events[zv]
      }

      function pv() {
        this._events = new hv, this._eventsCount = 0
      }
      Object.create && (hv.prototype = Object.create(null), (new hv).__proto__ || (Pv = !1)), pv.prototype.eventNames = function() {
        var vv, hv, Sv = [];
        if (0 === this._eventsCount) return Sv;
        for (hv in vv = this._events) zv.call(vv, hv) && Sv.push(Pv ? hv.slice(1) : hv);
        return Object.getOwnPropertySymbols ? Sv.concat(Object.getOwnPropertySymbols(vv)) : Sv
      }, pv.prototype.listeners = function(vv) {
        var zv = Pv ? Pv + vv : vv,
          hv = this._events[zv];
        if (!hv) return [];
        if (hv.Ew) return [hv.Ew];
        for (var Sv = 0, ev = hv.length, gv = new Array(ev); Sv < ev; Sv++) gv[Sv] = hv[Sv].Ew;
        return gv
      }, pv.prototype.listenerCount = function(vv) {
        var zv = Pv ? Pv + vv : vv,
          hv = this._events[zv];
        return hv ? hv.Ew ? 1 : hv.length : 0
      }, pv.prototype.emit = function(vv, zv, hv, Sv, ev, gv) {
        var pv = Pv ? Pv + vv : vv;
        if (!this._events[pv]) return !1;
        var dv, Nv, lv = this._events[pv],
          Tv = arguments.length;
        if (lv.Ew) {
          switch (lv.once && this.removeListener(vv, lv.Ew, void 0, !0), Tv) {
            case 1:
              return lv.Ew.call(lv.context), !0;
            case 2:
              return lv.Ew.call(lv.context, zv), !0;
            case 3:
              return lv.Ew.call(lv.context, zv, hv), !0;
            case 4:
              return lv.Ew.call(lv.context, zv, hv, Sv), !0;
            case 5:
              return lv.Ew.call(lv.context, zv, hv, Sv, ev), !0;
            case 6:
              return lv.Ew.call(lv.context, zv, hv, Sv, ev, gv), !0
          }
          for (Nv = 1, dv = new Array(Tv - 1); Nv < Tv; Nv++) dv[Nv - 1] = arguments[Nv];
          lv.Ew.apply(lv.context, dv)
        } else {
          var Wv, wv = lv.length;
          for (Nv = 0; Nv < wv; Nv++) switch (lv[Nv].once && this.removeListener(vv, lv[Nv].Ew, void 0, !0), Tv) {
            case 1:
              lv[Nv].Ew.call(lv[Nv].context);
              break;
            case 2:
              lv[Nv].Ew.call(lv[Nv].context, zv);
              break;
            case 3:
              lv[Nv].Ew.call(lv[Nv].context, zv, hv);
              break;
            case 4:
              lv[Nv].Ew.call(lv[Nv].context, zv, hv, Sv);
              break;
            default:
              if (!dv)
                for (Wv = 1, dv = new Array(Tv - 1); Wv < Tv; Wv++) dv[Wv - 1] = arguments[Wv];
              lv[Nv].Ew.apply(lv[Nv].context, dv)
          }
        }
        return !0
      }, pv.prototype.on = function(vv, zv, Pv) {
        return ev(this, vv, zv, Pv, !1)
      }, pv.prototype.once = function(vv, zv, Pv) {
        return ev(this, vv, zv, Pv, !0)
      }, pv.prototype.removeListener = function(vv, zv, hv, Sv) {
        var ev = Pv ? Pv + vv : vv;
        if (!this._events[ev]) return this;
        if (!zv) return gv(this, ev), this;
        var pv = this._events[ev];
        if (pv.Ew) pv.Ew !== zv || Sv && !pv.once || hv && pv.context !== hv || gv(this, ev);
        else {
          for (var dv = 0, Nv = [], lv = pv.length; dv < lv; dv++)(pv[dv].Ew !== zv || Sv && !pv[dv].once || hv && pv[dv].context !== hv) && Nv.push(pv[dv]);
          Nv.length ? this._events[ev] = 1 === Nv.length ? Nv[0] : Nv : gv(this, ev)
        }
        return this
      }, pv.prototype.rC = function(vv) {
        var zv;
        return vv ? (zv = Pv ? Pv + vv : vv, this._events[zv] && gv(this, zv)) : (this._events = new hv, this._eventsCount = 0), this
      }, pv.prototype.off = pv.prototype.removeListener, pv.prototype.addListener = pv.prototype.on, pv.prefixed = Pv, pv.EventEmitter = pv, vv.exports = pv
    }(gv);
    var pv, dv, Nv = ev(gv.exports);
    ! function(vv) {
      vv.assertEqual = vv => vv, vv.assertIs = function(vv) {}, vv.assertNever = function(vv) {
        throw new Error
      }, vv.arrayToEnum = vv => {
        const zv = {};
        for (const Pv of vv) zv[Pv] = Pv;
        return zv
      }, vv.getValidEnumValues = zv => {
        const Pv = vv.objectKeys(zv).filter((vv => "number" !== typeof zv[zv[vv]])),
          hv = {};
        for (const vv of Pv) hv[vv] = zv[vv];
        return vv.objectValues(hv)
      }, vv.objectValues = zv => vv.objectKeys(zv).map((function(vv) {
        return zv[vv]
      })), vv.objectKeys = "function" === typeof Object.keys ? vv => Object.keys(vv) : vv => {
        const zv = [];
        for (const Pv in vv) Object.prototype.hasOwnProperty.call(vv, Pv) && zv.push(Pv);
        return zv
      }, vv.find = (vv, zv) => {
        for (const Pv of vv)
          if (zv(Pv)) return Pv
      }, vv.isInteger = "function" === typeof Number.isInteger ? vv => Number.isInteger(vv) : vv => "number" === typeof vv && isFinite(vv) && Math.floor(vv) === vv, vv.joinValues = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return vv.map((vv => "string" === typeof vv ? `'${vv}'` : vv)).join(zv)
      }, vv.jsonStringifyReplacer = (vv, zv) => "bigint" === typeof zv ? zv.toString() : zv
    }(pv || (pv = {})),
    function(vv) {
      vv.mergeShapes = (vv, zv) => ({
        ...vv,
        ...zv
      })
    }(dv || (dv = {}));
    const lv = pv.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Tv = vv => {
        switch (typeof vv) {
          case "undefined":
            return lv.undefined;
          case "string":
            return lv.string;
          case "number":
            return isNaN(vv) ? lv.nan : lv.number;
          case "boolean":
            return lv.boolean;
          case "function":
            return lv.function;
          case "bigint":
            return lv.bigint;
          case "symbol":
            return lv.symbol;
          case "object":
            return Array.isArray(vv) ? lv.array : null === vv ? lv.null : vv.then && "function" === typeof vv.then && vv.catch && "function" === typeof vv.catch ? lv.promise : "undefined" !== typeof Map && vv instanceof Map ? lv.map : "undefined" !== typeof Set && vv instanceof Set ? lv.set : "undefined" !== typeof Date && vv instanceof Date ? lv.date : lv.object;
          default:
            return lv.unknown
        }
      },
      Wv = pv.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class wv extends Error {
      constructor(vv) {
        var zv;
        super(), zv = this, this.issues = [], this.addIssue = vv => {
          this.issues = [...this.issues, vv]
        }, this.addIssues = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          zv.issues = [...zv.issues, ...vv]
        };
        const Pv = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Pv) : this.__proto__ = Pv, this.name = "ZodError", this.issues = vv
      }
      get errors() {
        return this.issues
      }
      format(vv) {
        const zv = vv || function(vv) {
            return vv.message
          },
          Pv = {
            _errors: []
          },
          hv = vv => {
            for (const Sv of vv.issues)
              if ("invalid_union" === Sv.code) Sv.unionErrors.map(hv);
              else if ("invalid_return_type" === Sv.code) hv(Sv.returnTypeError);
            else if ("invalid_arguments" === Sv.code) hv(Sv.argumentsError);
            else if (0 === Sv.path.length) Pv._errors.push(zv(Sv));
            else {
              let vv = Pv,
                hv = 0;
              for (; hv < Sv.path.length;) {
                const Pv = Sv.path[hv];
                hv === Sv.path.length - 1 ? (vv[Pv] = vv[Pv] || {
                  _errors: []
                }, vv[Pv]._errors.push(zv(Sv))) : vv[Pv] = vv[Pv] || {
                  _errors: []
                }, vv = vv[Pv], hv++
              }
            }
          };
        return hv(this), Pv
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, pv.jsonStringifyReplacer, 2)
      }
      get kw() {
        return 0 === this.issues.length
      }
      flatten() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vv => vv.message;
        const zv = {},
          Pv = [];
        for (const hv of this.issues) hv.path.length > 0 ? (zv[hv.path[0]] = zv[hv.path[0]] || [], zv[hv.path[0]].push(vv(hv))) : Pv.push(vv(hv));
        return {
          formErrors: Pv,
          fieldErrors: zv
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    wv.create = vv => new wv(vv);
    const av = (vv, zv) => {
      let Pv;
      switch (vv.code) {
        case Wv.invalid_type:
          Pv = vv.received === lv.undefined ? "Required" : `Expected ${vv.expected}, received ${vv.received}`;
          break;
        case Wv.invalid_literal:
          Pv = `Invalid literal value, expected ${JSON.stringify(vv.expected,pv.jsonStringifyReplacer)}`;
          break;
        case Wv.unrecognized_keys:
          Pv = `Unrecognized key(s) in object: ${pv.joinValues(vv.keys,", ")}`;
          break;
        case Wv.invalid_union:
          Pv = "Invalid input";
          break;
        case Wv.invalid_union_discriminator:
          Pv = `Invalid discriminator value. Expected ${pv.joinValues(vv.options)}`;
          break;
        case Wv.invalid_enum_value:
          Pv = `Invalid enum value. Expected ${pv.joinValues(vv.options)}, received '${vv.received}'`;
          break;
        case Wv.invalid_arguments:
          Pv = "Invalid function arguments";
          break;
        case Wv.invalid_return_type:
          Pv = "Invalid function return type";
          break;
        case Wv.invalid_date:
          Pv = "Invalid date";
          break;
        case Wv.invalid_string:
          "object" === typeof vv.validation ? "includes" in vv.validation ? (Pv = `Invalid input: must include "${vv.validation.includes}"`, "number" === typeof vv.validation.position && (Pv = `${Pv} at one or more positions greater than or equal to ${vv.validation.position}`)) : "startsWith" in vv.validation ? Pv = `Invalid input: must start with "${vv.validation.startsWith}"` : "endsWith" in vv.validation ? Pv = `Invalid input: must end with "${vv.validation.endsWith}"` : pv.assertNever(vv.validation) : Pv = "regex" !== vv.validation ? `Invalid ${vv.validation}` : "Invalid";
          break;
        case Wv.too_small:
          Pv = "array" === vv.type ? `Array must contain ${vv.exact?"exactly":vv.inclusive?"at least":"more than"} ${vv.minimum} element(s)` : "string" === vv.type ? `String must contain ${vv.exact?"exactly":vv.inclusive?"at least":"over"} ${vv.minimum} character(s)` : "number" === vv.type ? `Number must be ${vv.exact?"exactly equal to ":vv.inclusive?"greater than or equal to ":"greater than "}${vv.minimum}` : "date" === vv.type ? `Date must be ${vv.exact?"exactly equal to ":vv.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(vv.minimum))}` : "Invalid input";
          break;
        case Wv.too_big:
          Pv = "array" === vv.type ? `Array must contain ${vv.exact?"exactly":vv.inclusive?"at most":"less than"} ${vv.maximum} element(s)` : "string" === vv.type ? `String must contain ${vv.exact?"exactly":vv.inclusive?"at most":"under"} ${vv.maximum} character(s)` : "number" === vv.type ? `Number must be ${vv.exact?"exactly":vv.inclusive?"less than or equal to":"less than"} ${vv.maximum}` : "bigint" === vv.type ? `BigInt must be ${vv.exact?"exactly":vv.inclusive?"less than or equal to":"less than"} ${vv.maximum}` : "date" === vv.type ? `Date must be ${vv.exact?"exactly":vv.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(vv.maximum))}` : "Invalid input";
          break;
        case Wv.custom:
          Pv = "Invalid input";
          break;
        case Wv.invalid_intersection_types:
          Pv = "Intersection results could not be merged";
          break;
        case Wv.not_multiple_of:
          Pv = `Number must be a multiple of ${vv.multipleOf}`;
          break;
        case Wv.not_finite:
          Pv = "Number must be finite";
          break;
        default:
          Pv = zv.defaultError, pv.assertNever(vv)
      }
      return {
        message: Pv
      }
    };
    let sv = av;

    function Cv() {
      return sv
    }
    const iv = vv => {
      const {
        data: zv,
        path: Pv,
        errorMaps: hv,
        issueData: Sv
      } = vv, ev = [...Pv, ...Sv.path || []], gv = {
        ...Sv,
        path: ev
      };
      let pv = "";
      const dv = hv.filter((vv => !!vv)).slice().reverse();
      for (const Nv of dv) pv = Nv(gv, {
        data: zv,
        defaultError: pv
      }).message;
      return {
        ...Sv,
        path: ev,
        message: Sv.message || pv
      }
    };

    function cv(vv, zv) {
      const Pv = iv({
        issueData: zv,
        data: vv.data,
        path: vv.path,
        errorMaps: [vv.common.contextualErrorMap, vv.schemaErrorMap, Cv(), av].filter((vv => !!vv))
      });
      vv.common.issues.push(Pv)
    }
    class Gv {
      constructor() {
        this.value = "valid"
      }
      Da() {
        "valid" === this.value && (this.value = "Da")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(vv, zv) {
        const Pv = [];
        for (const hv of zv) {
          if ("aborted" === hv.status) return mv;
          "Da" === hv.status && vv.Da(), Pv.push(hv.value)
        }
        return {
          status: vv.value,
          value: Pv
        }
      }
      static async mergeObjectAsync(vv, zv) {
        const Pv = [];
        for (const hv of zv) Pv.push({
          key: await hv.key,
          value: await hv.value
        });
        return Gv.mergeObjectSync(vv, Pv)
      }
      static mergeObjectSync(vv, zv) {
        const Pv = {};
        for (const hv of zv) {
          const {
            key: zv,
            value: Sv
          } = hv;
          if ("aborted" === zv.status) return mv;
          if ("aborted" === Sv.status) return mv;
          "Da" === zv.status && vv.Da(), "Da" === Sv.status && vv.Da(), "__proto__" === zv.value || "undefined" === typeof Sv.value && !hv.alwaysSet || (Pv[zv.value] = Sv.value)
        }
        return {
          status: vv.value,
          value: Pv
        }
      }
    }
    const mv = Object.freeze({
        status: "aborted"
      }),
      jv = vv => ({
        status: "Da",
        value: vv
      }),
      fv = vv => ({
        status: "valid",
        value: vv
      }),
      Fv = vv => "aborted" === vv.status,
      Yv = vv => "Da" === vv.status,
      nv = vv => "valid" === vv.status,
      Ov = vv => "undefined" !== typeof Promise && vv instanceof Promise;
    var Dv;
    ! function(vv) {
      vv.errToObj = vv => "string" === typeof vv ? {
        message: vv
      } : vv || {}, vv.toString = vv => "string" === typeof vv ? vv : null === vv || void 0 === vv ? void 0 : vv.message
    }(Dv || (Dv = {}));
    class Kv {
      constructor(vv, zv, Pv, hv) {
        this._cachedPath = [], this.parent = vv, this.data = zv, this._path = Pv, this._key = hv
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Vv = (vv, zv) => {
      if (nv(zv)) return {
        success: !0,
        data: zv.value
      };
      if (!vv.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const zv = new wv(vv.common.issues);
          return this._error = zv, this._error
        }
      }
    };

    function Uv(vv) {
      if (!vv) return {};
      const {
        errorMap: zv,
        invalid_type_error: Pv,
        required_error: hv,
        description: Sv
      } = vv;
      if (zv && (Pv || hv)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (zv) return {
        errorMap: zv,
        description: Sv
      };
      return {
        errorMap: (vv, zv) => "invalid_type" !== vv.code ? {
          message: zv.defaultError
        } : "undefined" === typeof zv.data ? {
          message: null !== hv && void 0 !== hv ? hv : zv.defaultError
        } : {
          message: null !== Pv && void 0 !== Pv ? Pv : zv.defaultError
        },
        description: Sv
      }
    }
    class Rv {
      constructor(vv) {
        this.spa = this.safeParseAsync, this._def = vv, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(vv) {
        return Tv(vv.data)
      }
      _getOrReturnCtx(vv, zv) {
        return zv || {
          common: vv.parent.common,
          data: vv.data,
          parsedType: Tv(vv.data),
          schemaErrorMap: this._def.errorMap,
          path: vv.path,
          parent: vv.parent
        }
      }
      _processInputParams(vv) {
        return {
          status: new Gv,
          ctx: {
            common: vv.parent.common,
            data: vv.data,
            parsedType: Tv(vv.data),
            schemaErrorMap: this._def.errorMap,
            path: vv.path,
            parent: vv.parent
          }
        }
      }
      _parseSync(vv) {
        const zv = this._parse(vv);
        if (Ov(zv)) throw new Error("Synchronous parse encountered promise.");
        return zv
      }
      _parseAsync(vv) {
        const zv = this._parse(vv);
        return Promise.resolve(zv)
      }
      parse(vv, zv) {
        const Pv = this.safeParse(vv, zv);
        if (Pv.success) return Pv.data;
        throw Pv.error
      }
      safeParse(vv, zv) {
        var Pv;
        const hv = {
            common: {
              issues: [],
              async: null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.async) && void 0 !== Pv && Pv,
              contextualErrorMap: null === zv || void 0 === zv ? void 0 : zv.errorMap
            },
            path: (null === zv || void 0 === zv ? void 0 : zv.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: vv,
            parsedType: Tv(vv)
          },
          Sv = this._parseSync({
            data: vv,
            path: hv.path,
            parent: hv
          });
        return Vv(hv, Sv)
      }
      async parseAsync(vv, zv) {
        const Pv = await this.safeParseAsync(vv, zv);
        if (Pv.success) return Pv.data;
        throw Pv.error
      }
      async safeParseAsync(vv, zv) {
        const Pv = {
            common: {
              issues: [],
              contextualErrorMap: null === zv || void 0 === zv ? void 0 : zv.errorMap,
              async: !0
            },
            path: (null === zv || void 0 === zv ? void 0 : zv.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: vv,
            parsedType: Tv(vv)
          },
          hv = this._parse({
            data: vv,
            path: Pv.path,
            parent: Pv
          }),
          Sv = await (Ov(hv) ? hv : Promise.resolve(hv));
        return Vv(Pv, Sv)
      }
      refine(vv, zv) {
        const Pv = vv => "string" === typeof zv || "undefined" === typeof zv ? {
          message: zv
        } : "function" === typeof zv ? zv(vv) : zv;
        return this._refinement(((zv, hv) => {
          const Sv = vv(zv),
            ev = () => hv.addIssue({
              code: Wv.custom,
              ...Pv(zv)
            });
          return "undefined" !== typeof Promise && Sv instanceof Promise ? Sv.then((vv => !!vv || (ev(), !1))) : !!Sv || (ev(), !1)
        }))
      }
      refinement(vv, zv) {
        return this._refinement(((Pv, hv) => !!vv(Pv) || (hv.addIssue("function" === typeof zv ? zv(Pv, hv) : zv), !1)))
      }
      _refinement(vv) {
        return new mz({
          schema: this,
          typeName: xz.ZodEffects,
          effect: {
            type: "refinement",
            refinement: vv
          }
        })
      }
      superRefine(vv) {
        return this._refinement(vv)
      }
      optional() {
        return jz.create(this, this._def)
      }
      nullable() {
        return fz.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return zz.create(this, this._def)
      }
      promise() {
        return Gz.create(this, this._def)
      }
      or(vv) {
        return Sz.create([this, vv], this._def)
      }
      and(vv) {
        return dz.create(this, vv, this._def)
      }
      transform(vv) {
        return new mz({
          ...Uv(this._def),
          schema: this,
          typeName: xz.ZodEffects,
          effect: {
            type: "transform",
            transform: vv
          }
        })
      }
      default (vv) {
        const zv = "function" === typeof vv ? vv : () => vv;
        return new Fz({
          ...Uv(this._def),
          innerType: this,
          defaultValue: zv,
          typeName: xz.ZodDefault
        })
      }
      brand() {
        return new Dz({
          typeName: xz.ZodBranded,
          type: this,
          ...Uv(this._def)
        })
      } catch (vv) {
        const zv = "function" === typeof vv ? vv : () => vv;
        return new Yz({
          ...Uv(this._def),
          innerType: this,
          catchValue: zv,
          typeName: xz.ZodCatch
        })
      }
      describe(vv) {
        return new(0, this.constructor)({
          ...this._def,
          description: vv
        })
      }
      pipe(vv) {
        return Kz.create(this, vv)
      }
      readonly() {
        return Vz.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const xv = /^c[^\s-]{8,}$/i,
      tv = /^[a-z][a-z0-9]*$/,
      qv = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Iv = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Qv = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Zv;
    const Av = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Lv = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Hv extends Rv {
      _parse(vv) {
        this._def.coerce && (vv.data = String(vv.data));
        if (this._getType(vv) !== lv.string) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.string,
            received: zv.parsedType
          }), mv
        }
        const zv = new Gv;
        let Pv;
        for (const dv of this._def.checks)
          if ("min" === dv.kind) vv.data.length < dv.value && (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
            code: Wv.too_small,
            minimum: dv.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: dv.message
          }), zv.Da());
          else if ("max" === dv.kind) vv.data.length > dv.value && (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          code: Wv.too_big,
          maximum: dv.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: dv.message
        }), zv.Da());
        else if ("length" === dv.kind) {
          const hv = vv.data.length > dv.value,
            Sv = vv.data.length < dv.value;
          (hv || Sv) && (Pv = this._getOrReturnCtx(vv, Pv), hv ? cv(Pv, {
            code: Wv.too_big,
            maximum: dv.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: dv.message
          }) : Sv && cv(Pv, {
            code: Wv.too_small,
            minimum: dv.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: dv.message
          }), zv.Da())
        } else if ("email" === dv.kind) Qv.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "email",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da());
        else if ("emoji" === dv.kind) Zv || (Zv = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Zv.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "emoji",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da());
        else if ("uuid" === dv.kind) Iv.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "uuid",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da());
        else if ("cuid" === dv.kind) xv.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "cuid",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da());
        else if ("cuid2" === dv.kind) tv.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "cuid2",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da());
        else if ("ulid" === dv.kind) qv.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "ulid",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da());
        else if ("url" === dv.kind) try {
          new URL(vv.data)
        } catch (gv) {
          Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
            validation: "url",
            code: Wv.invalid_string,
            message: dv.message
          }), zv.Da()
        } else if ("regex" === dv.kind) {
          dv.regex.lastIndex = 0;
          dv.regex.test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
            validation: "regex",
            code: Wv.invalid_string,
            message: dv.message
          }), zv.Da())
        } else if ("trim" === dv.kind) vv.data = vv.data.trim();
        else if ("includes" === dv.kind) vv.data.includes(dv.value, dv.position) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          code: Wv.invalid_string,
          validation: {
            includes: dv.value,
            position: dv.position
          },
          message: dv.message
        }), zv.Da());
        else if ("toLowerCase" === dv.kind) vv.data = vv.data.toLowerCase();
        else if ("toUpperCase" === dv.kind) vv.data = vv.data.toUpperCase();
        else if ("startsWith" === dv.kind) vv.data.startsWith(dv.value) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          code: Wv.invalid_string,
          validation: {
            startsWith: dv.value
          },
          message: dv.message
        }), zv.Da());
        else if ("endsWith" === dv.kind) vv.data.endsWith(dv.value) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          code: Wv.invalid_string,
          validation: {
            endsWith: dv.value
          },
          message: dv.message
        }), zv.Da());
        else if ("datetime" === dv.kind) {
          ((ev = dv).precision ? ev.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ev.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ev.precision}}Z$`) : 0 === ev.precision ? ev.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ev.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(vv.data) || (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
            code: Wv.invalid_string,
            validation: "datetime",
            message: dv.message
          }), zv.Da())
        } else "ip" === dv.kind ? (hv = vv.data, ("v4" !== (Sv = dv.version) && Sv || !Av.test(hv)) && ("v6" !== Sv && Sv || !Lv.test(hv)) && (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          validation: "ip",
          code: Wv.invalid_string,
          message: dv.message
        }), zv.Da())) : pv.assertNever(dv);
        var hv, Sv, ev;
        return {
          status: zv.value,
          value: vv.data
        }
      }
      _regex(vv, zv, Pv) {
        return this.refinement((zv => vv.test(zv)), {
          validation: zv,
          code: Wv.invalid_string,
          ...Dv.errToObj(Pv)
        })
      }
      _addCheck(vv) {
        return new Hv({
          ...this._def,
          checks: [...this._def.checks, vv]
        })
      }
      email(vv) {
        return this._addCheck({
          kind: "email",
          ...Dv.errToObj(vv)
        })
      }
      url(vv) {
        return this._addCheck({
          kind: "url",
          ...Dv.errToObj(vv)
        })
      }
      emoji(vv) {
        return this._addCheck({
          kind: "emoji",
          ...Dv.errToObj(vv)
        })
      }
      uuid(vv) {
        return this._addCheck({
          kind: "uuid",
          ...Dv.errToObj(vv)
        })
      }
      cuid(vv) {
        return this._addCheck({
          kind: "cuid",
          ...Dv.errToObj(vv)
        })
      }
      cuid2(vv) {
        return this._addCheck({
          kind: "cuid2",
          ...Dv.errToObj(vv)
        })
      }
      ulid(vv) {
        return this._addCheck({
          kind: "ulid",
          ...Dv.errToObj(vv)
        })
      }
      ip(vv) {
        return this._addCheck({
          kind: "ip",
          ...Dv.errToObj(vv)
        })
      }
      datetime(vv) {
        var zv;
        return "string" === typeof vv ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: vv
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === vv || void 0 === vv ? void 0 : vv.precision) ? null : null === vv || void 0 === vv ? void 0 : vv.precision,
          offset: null !== (zv = null === vv || void 0 === vv ? void 0 : vv.offset) && void 0 !== zv && zv,
          ...Dv.errToObj(null === vv || void 0 === vv ? void 0 : vv.message)
        })
      }
      regex(vv, zv) {
        return this._addCheck({
          kind: "regex",
          regex: vv,
          ...Dv.errToObj(zv)
        })
      }
      includes(vv, zv) {
        return this._addCheck({
          kind: "includes",
          value: vv,
          position: null === zv || void 0 === zv ? void 0 : zv.position,
          ...Dv.errToObj(null === zv || void 0 === zv ? void 0 : zv.message)
        })
      }
      startsWith(vv, zv) {
        return this._addCheck({
          kind: "startsWith",
          value: vv,
          ...Dv.errToObj(zv)
        })
      }
      endsWith(vv, zv) {
        return this._addCheck({
          kind: "endsWith",
          value: vv,
          ...Dv.errToObj(zv)
        })
      }
      min(vv, zv) {
        return this._addCheck({
          kind: "min",
          value: vv,
          ...Dv.errToObj(zv)
        })
      }
      max(vv, zv) {
        return this._addCheck({
          kind: "max",
          value: vv,
          ...Dv.errToObj(zv)
        })
      }
      length(vv, zv) {
        return this._addCheck({
          kind: "length",
          value: vv,
          ...Dv.errToObj(zv)
        })
      }
      nonempty(vv) {
        return this.min(1, Dv.errToObj(vv))
      }
      trim() {
        return new Hv({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Hv({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Hv({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((vv => "datetime" === vv.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((vv => "email" === vv.kind))
      }
      get isURL() {
        return !!this._def.checks.find((vv => "url" === vv.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((vv => "emoji" === vv.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((vv => "uuid" === vv.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((vv => "cuid" === vv.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((vv => "cuid2" === vv.kind))
      }
      get isULID() {
        return !!this._def.checks.find((vv => "ulid" === vv.kind))
      }
      get isIP() {
        return !!this._def.checks.find((vv => "ip" === vv.kind))
      }
      get minLength() {
        let vv = null;
        for (const zv of this._def.checks) "min" === zv.kind && (null === vv || zv.value > vv) && (vv = zv.value);
        return vv
      }
      get maxLength() {
        let vv = null;
        for (const zv of this._def.checks) "max" === zv.kind && (null === vv || zv.value < vv) && (vv = zv.value);
        return vv
      }
    }

    function Mv(vv, zv) {
      const Pv = (vv.toString().split(".")[1] || "").length,
        hv = (zv.toString().split(".")[1] || "").length,
        Sv = Pv > hv ? Pv : hv;
      return parseInt(vv.toFixed(Sv).replace(".", "")) % parseInt(zv.toFixed(Sv).replace(".", "")) / Math.pow(10, Sv)
    }
    Hv.create = vv => {
      var zv;
      return new Hv({
        checks: [],
        typeName: xz.ZodString,
        coerce: null !== (zv = null === vv || void 0 === vv ? void 0 : vv.coerce) && void 0 !== zv && zv,
        ...Uv(vv)
      })
    };
    class yv extends Rv {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(vv) {
        this._def.coerce && (vv.data = Number(vv.data));
        if (this._getType(vv) !== lv.number) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.number,
            received: zv.parsedType
          }), mv
        }
        let zv;
        const Pv = new Gv;
        for (const hv of this._def.checks)
          if ("int" === hv.kind) pv.isInteger(vv.data) || (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
            code: Wv.invalid_type,
            expected: "integer",
            received: "float",
            message: hv.message
          }), Pv.Da());
          else if ("min" === hv.kind) {
          (hv.inclusive ? vv.data < hv.value : vv.data <= hv.value) && (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
            code: Wv.too_small,
            minimum: hv.value,
            type: "number",
            inclusive: hv.inclusive,
            exact: !1,
            message: hv.message
          }), Pv.Da())
        } else if ("max" === hv.kind) {
          (hv.inclusive ? vv.data > hv.value : vv.data >= hv.value) && (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
            code: Wv.too_big,
            maximum: hv.value,
            type: "number",
            inclusive: hv.inclusive,
            exact: !1,
            message: hv.message
          }), Pv.Da())
        } else "multipleOf" === hv.kind ? 0 !== Mv(vv.data, hv.value) && (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
          code: Wv.not_multiple_of,
          multipleOf: hv.value,
          message: hv.message
        }), Pv.Da()) : "finite" === hv.kind ? Number.isFinite(vv.data) || (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
          code: Wv.not_finite,
          message: hv.message
        }), Pv.Da()) : pv.assertNever(hv);
        return {
          status: Pv.value,
          value: vv.data
        }
      }
      gte(vv, zv) {
        return this.setLimit("min", vv, !0, Dv.toString(zv))
      }
      gt(vv, zv) {
        return this.setLimit("min", vv, !1, Dv.toString(zv))
      }
      lte(vv, zv) {
        return this.setLimit("max", vv, !0, Dv.toString(zv))
      }
      lt(vv, zv) {
        return this.setLimit("max", vv, !1, Dv.toString(zv))
      }
      setLimit(vv, zv, Pv, hv) {
        return new yv({
          ...this._def,
          checks: [...this._def.checks, {
            kind: vv,
            value: zv,
            inclusive: Pv,
            message: Dv.toString(hv)
          }]
        })
      }
      _addCheck(vv) {
        return new yv({
          ...this._def,
          checks: [...this._def.checks, vv]
        })
      }
      int(vv) {
        return this._addCheck({
          kind: "int",
          message: Dv.toString(vv)
        })
      }
      positive(vv) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Dv.toString(vv)
        })
      }
      negative(vv) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Dv.toString(vv)
        })
      }
      nonpositive(vv) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Dv.toString(vv)
        })
      }
      nonnegative(vv) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Dv.toString(vv)
        })
      }
      multipleOf(vv, zv) {
        return this._addCheck({
          kind: "multipleOf",
          value: vv,
          message: Dv.toString(zv)
        })
      }
      finite(vv) {
        return this._addCheck({
          kind: "finite",
          message: Dv.toString(vv)
        })
      }
      safe(vv) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Dv.toString(vv)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Dv.toString(vv)
        })
      }
      get minValue() {
        let vv = null;
        for (const zv of this._def.checks) "min" === zv.kind && (null === vv || zv.value > vv) && (vv = zv.value);
        return vv
      }
      get maxValue() {
        let vv = null;
        for (const zv of this._def.checks) "max" === zv.kind && (null === vv || zv.value < vv) && (vv = zv.value);
        return vv
      }
      get isInt() {
        return !!this._def.checks.find((vv => "int" === vv.kind || "multipleOf" === vv.kind && pv.isInteger(vv.value)))
      }
      get isFinite() {
        let vv = null,
          zv = null;
        for (const Pv of this._def.checks) {
          if ("finite" === Pv.kind || "int" === Pv.kind || "multipleOf" === Pv.kind) return !0;
          "min" === Pv.kind ? (null === zv || Pv.value > zv) && (zv = Pv.value) : "max" === Pv.kind && (null === vv || Pv.value < vv) && (vv = Pv.value)
        }
        return Number.isFinite(zv) && Number.isFinite(vv)
      }
    }
    yv.create = vv => new yv({
      checks: [],
      typeName: xz.ZodNumber,
      coerce: (null === vv || void 0 === vv ? void 0 : vv.coerce) || !1,
      ...Uv(vv)
    });
    class Bv extends Rv {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(vv) {
        this._def.coerce && (vv.data = BigInt(vv.data));
        if (this._getType(vv) !== lv.bigint) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.bigint,
            received: zv.parsedType
          }), mv
        }
        let zv;
        const Pv = new Gv;
        for (const hv of this._def.checks)
          if ("min" === hv.kind) {
            (hv.inclusive ? vv.data < hv.value : vv.data <= hv.value) && (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
              code: Wv.too_small,
              type: "bigint",
              minimum: hv.value,
              inclusive: hv.inclusive,
              message: hv.message
            }), Pv.Da())
          } else if ("max" === hv.kind) {
          (hv.inclusive ? vv.data > hv.value : vv.data >= hv.value) && (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
            code: Wv.too_big,
            type: "bigint",
            maximum: hv.value,
            inclusive: hv.inclusive,
            message: hv.message
          }), Pv.Da())
        } else "multipleOf" === hv.kind ? vv.data % hv.value !== BigInt(0) && (zv = this._getOrReturnCtx(vv, zv), cv(zv, {
          code: Wv.not_multiple_of,
          multipleOf: hv.value,
          message: hv.message
        }), Pv.Da()) : pv.assertNever(hv);
        return {
          status: Pv.value,
          value: vv.data
        }
      }
      gte(vv, zv) {
        return this.setLimit("min", vv, !0, Dv.toString(zv))
      }
      gt(vv, zv) {
        return this.setLimit("min", vv, !1, Dv.toString(zv))
      }
      lte(vv, zv) {
        return this.setLimit("max", vv, !0, Dv.toString(zv))
      }
      lt(vv, zv) {
        return this.setLimit("max", vv, !1, Dv.toString(zv))
      }
      setLimit(vv, zv, Pv, hv) {
        return new Bv({
          ...this._def,
          checks: [...this._def.checks, {
            kind: vv,
            value: zv,
            inclusive: Pv,
            message: Dv.toString(hv)
          }]
        })
      }
      _addCheck(vv) {
        return new Bv({
          ...this._def,
          checks: [...this._def.checks, vv]
        })
      }
      positive(vv) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Dv.toString(vv)
        })
      }
      negative(vv) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Dv.toString(vv)
        })
      }
      nonpositive(vv) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Dv.toString(vv)
        })
      }
      nonnegative(vv) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Dv.toString(vv)
        })
      }
      multipleOf(vv, zv) {
        return this._addCheck({
          kind: "multipleOf",
          value: vv,
          message: Dv.toString(zv)
        })
      }
      get minValue() {
        let vv = null;
        for (const zv of this._def.checks) "min" === zv.kind && (null === vv || zv.value > vv) && (vv = zv.value);
        return vv
      }
      get maxValue() {
        let vv = null;
        for (const zv of this._def.checks) "max" === zv.kind && (null === vv || zv.value < vv) && (vv = zv.value);
        return vv
      }
    }
    Bv.create = vv => {
      var zv;
      return new Bv({
        checks: [],
        typeName: xz.ZodBigInt,
        coerce: null !== (zv = null === vv || void 0 === vv ? void 0 : vv.coerce) && void 0 !== zv && zv,
        ...Uv(vv)
      })
    };
    class Jv extends Rv {
      _parse(vv) {
        this._def.coerce && (vv.data = Boolean(vv.data));
        if (this._getType(vv) !== lv.boolean) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.boolean,
            received: zv.parsedType
          }), mv
        }
        return fv(vv.data)
      }
    }
    Jv.create = vv => new Jv({
      typeName: xz.ZodBoolean,
      coerce: (null === vv || void 0 === vv ? void 0 : vv.coerce) || !1,
      ...Uv(vv)
    });
    class Ev extends Rv {
      _parse(vv) {
        this._def.coerce && (vv.data = new Date(vv.data));
        if (this._getType(vv) !== lv.date) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.date,
            received: zv.parsedType
          }), mv
        }
        if (isNaN(vv.data.getTime())) {
          return cv(this._getOrReturnCtx(vv), {
            code: Wv.invalid_date
          }), mv
        }
        const zv = new Gv;
        let Pv;
        for (const hv of this._def.checks) "min" === hv.kind ? vv.data.getTime() < hv.value && (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          code: Wv.too_small,
          message: hv.message,
          inclusive: !0,
          exact: !1,
          minimum: hv.value,
          type: "date"
        }), zv.Da()) : "max" === hv.kind ? vv.data.getTime() > hv.value && (Pv = this._getOrReturnCtx(vv, Pv), cv(Pv, {
          code: Wv.too_big,
          message: hv.message,
          inclusive: !0,
          exact: !1,
          maximum: hv.value,
          type: "date"
        }), zv.Da()) : pv.assertNever(hv);
        return {
          status: zv.value,
          value: new Date(vv.data.getTime())
        }
      }
      _addCheck(vv) {
        return new Ev({
          ...this._def,
          checks: [...this._def.checks, vv]
        })
      }
      min(vv, zv) {
        return this._addCheck({
          kind: "min",
          value: vv.getTime(),
          message: Dv.toString(zv)
        })
      }
      max(vv, zv) {
        return this._addCheck({
          kind: "max",
          value: vv.getTime(),
          message: Dv.toString(zv)
        })
      }
      get minDate() {
        let vv = null;
        for (const zv of this._def.checks) "min" === zv.kind && (null === vv || zv.value > vv) && (vv = zv.value);
        return null != vv ? new Date(vv) : null
      }
      get maxDate() {
        let vv = null;
        for (const zv of this._def.checks) "max" === zv.kind && (null === vv || zv.value < vv) && (vv = zv.value);
        return null != vv ? new Date(vv) : null
      }
    }
    Ev.create = vv => new Ev({
      checks: [],
      coerce: (null === vv || void 0 === vv ? void 0 : vv.coerce) || !1,
      typeName: xz.ZodDate,
      ...Uv(vv)
    });
    class ov extends Rv {
      _parse(vv) {
        if (this._getType(vv) !== lv.symbol) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.symbol,
            received: zv.parsedType
          }), mv
        }
        return fv(vv.data)
      }
    }
    ov.create = vv => new ov({
      typeName: xz.ZodSymbol,
      ...Uv(vv)
    });
    class bv extends Rv {
      _parse(vv) {
        if (this._getType(vv) !== lv.undefined) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.undefined,
            received: zv.parsedType
          }), mv
        }
        return fv(vv.data)
      }
    }
    bv.create = vv => new bv({
      typeName: xz.ZodUndefined,
      ...Uv(vv)
    });
    class rv extends Rv {
      _parse(vv) {
        if (this._getType(vv) !== lv.null) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.null,
            received: zv.parsedType
          }), mv
        }
        return fv(vv.data)
      }
    }
    rv.create = vv => new rv({
      typeName: xz.ZodNull,
      ...Uv(vv)
    });
    class kv extends Rv {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(vv) {
        return fv(vv.data)
      }
    }
    kv.create = vv => new kv({
      typeName: xz.ZodAny,
      ...Uv(vv)
    });
    class Xv extends Rv {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(vv) {
        return fv(vv.data)
      }
    }
    Xv.create = vv => new Xv({
      typeName: xz.ZodUnknown,
      ...Uv(vv)
    });
    class uv extends Rv {
      _parse(vv) {
        const zv = this._getOrReturnCtx(vv);
        return cv(zv, {
          code: Wv.invalid_type,
          expected: lv.never,
          received: zv.parsedType
        }), mv
      }
    }
    uv.create = vv => new uv({
      typeName: xz.ZodNever,
      ...Uv(vv)
    });
    class vz extends Rv {
      _parse(vv) {
        if (this._getType(vv) !== lv.undefined) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.void,
            received: zv.parsedType
          }), mv
        }
        return fv(vv.data)
      }
    }
    vz.create = vv => new vz({
      typeName: xz.ZodVoid,
      ...Uv(vv)
    });
    class zz extends Rv {
      _parse(vv) {
        const {
          ctx: zv,
          status: Pv
        } = this._processInputParams(vv), hv = this._def;
        if (zv.parsedType !== lv.array) return cv(zv, {
          code: Wv.invalid_type,
          expected: lv.array,
          received: zv.parsedType
        }), mv;
        if (null !== hv.exactLength) {
          const vv = zv.data.length > hv.exactLength.value,
            Sv = zv.data.length < hv.exactLength.value;
          (vv || Sv) && (cv(zv, {
            code: vv ? Wv.too_big : Wv.too_small,
            minimum: Sv ? hv.exactLength.value : void 0,
            maximum: vv ? hv.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: hv.exactLength.message
          }), Pv.Da())
        }
        if (null !== hv.minLength && zv.data.length < hv.minLength.value && (cv(zv, {
            code: Wv.too_small,
            minimum: hv.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: hv.minLength.message
          }), Pv.Da()), null !== hv.maxLength && zv.data.length > hv.maxLength.value && (cv(zv, {
            code: Wv.too_big,
            maximum: hv.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: hv.maxLength.message
          }), Pv.Da()), zv.common.async) return Promise.all([...zv.data].map(((vv, Pv) => hv.type._parseAsync(new Kv(zv, vv, zv.path, Pv))))).then((vv => Gv.mergeArray(Pv, vv)));
        const Sv = [...zv.data].map(((vv, Pv) => hv.type._parseSync(new Kv(zv, vv, zv.path, Pv))));
        return Gv.mergeArray(Pv, Sv)
      }
      get element() {
        return this._def.type
      }
      min(vv, zv) {
        return new zz({
          ...this._def,
          minLength: {
            value: vv,
            message: Dv.toString(zv)
          }
        })
      }
      max(vv, zv) {
        return new zz({
          ...this._def,
          maxLength: {
            value: vv,
            message: Dv.toString(zv)
          }
        })
      }
      length(vv, zv) {
        return new zz({
          ...this._def,
          exactLength: {
            value: vv,
            message: Dv.toString(zv)
          }
        })
      }
      nonempty(vv) {
        return this.min(1, vv)
      }
    }

    function Pz(vv) {
      if (vv instanceof hz) {
        const zv = {};
        for (const Pv in vv.shape) {
          const hv = vv.shape[Pv];
          zv[Pv] = jz.create(Pz(hv))
        }
        return new hz({
          ...vv._def,
          shape: () => zv
        })
      }
      return vv instanceof zz ? new zz({
        ...vv._def,
        type: Pz(vv.element)
      }) : vv instanceof jz ? jz.create(Pz(vv.unwrap())) : vv instanceof fz ? fz.create(Pz(vv.unwrap())) : vv instanceof Nz ? Nz.create(vv.items.map((vv => Pz(vv)))) : vv
    }
    zz.create = (vv, zv) => new zz({
      type: vv,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: xz.ZodArray,
      ...Uv(zv)
    });
    class hz extends Rv {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const vv = this._def.shape(),
          zv = pv.objectKeys(vv);
        return this._cached = {
          shape: vv,
          keys: zv
        }
      }
      _parse(vv) {
        if (this._getType(vv) !== lv.object) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.object,
            received: zv.parsedType
          }), mv
        }
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv), {
          shape: hv,
          keys: Sv
        } = this._getCached(), ev = [];
        if (!(this._def.catchall instanceof uv && "strip" === this._def.unknownKeys))
          for (const pv in Pv.data) Sv.includes(pv) || ev.push(pv);
        const gv = [];
        for (const pv of Sv) {
          const vv = hv[pv],
            zv = Pv.data[pv];
          gv.push({
            key: {
              status: "valid",
              value: pv
            },
            value: vv._parse(new Kv(Pv, zv, Pv.path, pv)),
            alwaysSet: pv in Pv.data
          })
        }
        if (this._def.catchall instanceof uv) {
          const vv = this._def.unknownKeys;
          if ("passthrough" === vv)
            for (const zv of ev) gv.push({
              key: {
                status: "valid",
                value: zv
              },
              value: {
                status: "valid",
                value: Pv.data[zv]
              }
            });
          else if ("strict" === vv) ev.length > 0 && (cv(Pv, {
            code: Wv.unrecognized_keys,
            keys: ev
          }), zv.Da());
          else if ("strip" !== vv) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const vv = this._def.catchall;
          for (const zv of ev) {
            const hv = Pv.data[zv];
            gv.push({
              key: {
                status: "valid",
                value: zv
              },
              value: vv._parse(new Kv(Pv, hv, Pv.path, zv)),
              alwaysSet: zv in Pv.data
            })
          }
        }
        return Pv.common.async ? Promise.resolve().then((async () => {
          const vv = [];
          for (const zv of gv) {
            const Pv = await zv.key;
            vv.push({
              key: Pv,
              value: await zv.value,
              alwaysSet: zv.alwaysSet
            })
          }
          return vv
        })).then((vv => Gv.mergeObjectSync(zv, vv))) : Gv.mergeObjectSync(zv, gv)
      }
      get shape() {
        return this._def.shape()
      }
      strict(vv) {
        return Dv.errToObj, new hz({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== vv ? {
            errorMap: (zv, Pv) => {
              var hv, Sv, ev, gv;
              const pv = null !== (ev = null === (Sv = (hv = this._def).errorMap) || void 0 === Sv ? void 0 : Sv.call(hv, zv, Pv).message) && void 0 !== ev ? ev : Pv.defaultError;
              return "unrecognized_keys" === zv.code ? {
                message: null !== (gv = Dv.errToObj(vv).message) && void 0 !== gv ? gv : pv
              } : {
                message: pv
              }
            }
          } : {}
        })
      }
      strip() {
        return new hz({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new hz({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(vv) {
        return new hz({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...vv
          })
        })
      }
      merge(vv) {
        return new hz({
          unknownKeys: vv._def.unknownKeys,
          catchall: vv._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...vv._def.shape()
          }),
          typeName: xz.ZodObject
        })
      }
      setKey(vv, zv) {
        return this.augment({
          [vv]: zv
        })
      }
      catchall(vv) {
        return new hz({
          ...this._def,
          catchall: vv
        })
      }
      HW(vv) {
        const zv = {};
        return pv.objectKeys(vv).forEach((Pv => {
          vv[Pv] && this.shape[Pv] && (zv[Pv] = this.shape[Pv])
        })), new hz({
          ...this._def,
          shape: () => zv
        })
      }
      omit(vv) {
        const zv = {};
        return pv.objectKeys(this.shape).forEach((Pv => {
          vv[Pv] || (zv[Pv] = this.shape[Pv])
        })), new hz({
          ...this._def,
          shape: () => zv
        })
      }
      deepPartial() {
        return Pz(this)
      }
      partial(vv) {
        const zv = {};
        return pv.objectKeys(this.shape).forEach((Pv => {
          const hv = this.shape[Pv];
          vv && !vv[Pv] ? zv[Pv] = hv : zv[Pv] = hv.optional()
        })), new hz({
          ...this._def,
          shape: () => zv
        })
      }
      required(vv) {
        const zv = {};
        return pv.objectKeys(this.shape).forEach((Pv => {
          if (vv && !vv[Pv]) zv[Pv] = this.shape[Pv];
          else {
            let vv = this.shape[Pv];
            for (; vv instanceof jz;) vv = vv._def.innerType;
            zv[Pv] = vv
          }
        })), new hz({
          ...this._def,
          shape: () => zv
        })
      }
      keyof() {
        return Cz(pv.objectKeys(this.shape))
      }
    }
    hz.create = (vv, zv) => new hz({
      shape: () => vv,
      unknownKeys: "strip",
      catchall: uv.create(),
      typeName: xz.ZodObject,
      ...Uv(zv)
    }), hz.strictCreate = (vv, zv) => new hz({
      shape: () => vv,
      unknownKeys: "strict",
      catchall: uv.create(),
      typeName: xz.ZodObject,
      ...Uv(zv)
    }), hz.lazycreate = (vv, zv) => new hz({
      shape: vv,
      unknownKeys: "strip",
      catchall: uv.create(),
      typeName: xz.ZodObject,
      ...Uv(zv)
    });
    class Sz extends Rv {
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv), Pv = this._def.options;
        if (zv.common.async) return Promise.all(Pv.map((async vv => {
          const Pv = {
            ...zv,
            common: {
              ...zv.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await vv._parseAsync({
              data: zv.data,
              path: zv.path,
              parent: Pv
            }),
            ctx: Pv
          }
        }))).then((function(vv) {
          for (const zv of vv)
            if ("valid" === zv.result.status) return zv.result;
          for (const hv of vv)
            if ("Da" === hv.result.status) return zv.common.issues.push(...hv.ctx.common.issues), hv.result;
          const Pv = vv.map((vv => new wv(vv.ctx.common.issues)));
          return cv(zv, {
            code: Wv.invalid_union,
            unionErrors: Pv
          }), mv
        }));
        {
          let vv;
          const hv = [];
          for (const ev of Pv) {
            const Pv = {
                ...zv,
                common: {
                  ...zv.common,
                  issues: []
                },
                parent: null
              },
              Sv = ev._parseSync({
                data: zv.data,
                path: zv.path,
                parent: Pv
              });
            if ("valid" === Sv.status) return Sv;
            "Da" !== Sv.status || vv || (vv = {
              result: Sv,
              ctx: Pv
            }), Pv.common.issues.length && hv.push(Pv.common.issues)
          }
          if (vv) return zv.common.issues.push(...vv.ctx.common.issues), vv.result;
          const Sv = hv.map((vv => new wv(vv)));
          return cv(zv, {
            code: Wv.invalid_union,
            unionErrors: Sv
          }), mv
        }
      }
      get options() {
        return this._def.options
      }
    }
    Sz.create = (vv, zv) => new Sz({
      options: vv,
      typeName: xz.ZodUnion,
      ...Uv(zv)
    });
    const ez = vv => vv instanceof az ? ez(vv.schema) : vv instanceof mz ? ez(vv.innerType()) : vv instanceof sz ? [vv.value] : vv instanceof iz ? vv.options : vv instanceof cz ? Object.keys(vv.enum) : vv instanceof Fz ? ez(vv._def.innerType) : vv instanceof bv ? [void 0] : vv instanceof rv ? [null] : null;
    class gz extends Rv {
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv);
        if (zv.parsedType !== lv.object) return cv(zv, {
          code: Wv.invalid_type,
          expected: lv.object,
          received: zv.parsedType
        }), mv;
        const Pv = this.discriminator,
          hv = zv.data[Pv],
          Sv = this.optionsMap.get(hv);
        return Sv ? zv.common.async ? Sv._parseAsync({
          data: zv.data,
          path: zv.path,
          parent: zv
        }) : Sv._parseSync({
          data: zv.data,
          path: zv.path,
          parent: zv
        }) : (cv(zv, {
          code: Wv.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Pv]
        }), mv)
      }
      get discriminator() {
        return this._def.discriminator
      }
      get options() {
        return this._def.options
      }
      get optionsMap() {
        return this._def.optionsMap
      }
      static create(vv, zv, Pv) {
        const hv = new Map;
        for (const Sv of zv) {
          const zv = ez(Sv.shape[vv]);
          if (!zv) throw new Error(`A discriminator value for key \`${vv}\` could not be extracted from all schema options`);
          for (const Pv of zv) {
            if (hv.has(Pv)) throw new Error(`Discriminator property ${String(vv)} has duplicate value ${String(Pv)}`);
            hv.set(Pv, Sv)
          }
        }
        return new gz({
          typeName: xz.ZodDiscriminatedUnion,
          discriminator: vv,
          options: zv,
          optionsMap: hv,
          ...Uv(Pv)
        })
      }
    }

    function pz(vv, zv) {
      const Pv = Tv(vv),
        hv = Tv(zv);
      if (vv === zv) return {
        valid: !0,
        data: vv
      };
      if (Pv === lv.object && hv === lv.object) {
        const Pv = pv.objectKeys(zv),
          hv = pv.objectKeys(vv).filter((vv => -1 !== Pv.indexOf(vv))),
          Sv = {
            ...vv,
            ...zv
          };
        for (const ev of hv) {
          const Pv = pz(vv[ev], zv[ev]);
          if (!Pv.valid) return {
            valid: !1
          };
          Sv[ev] = Pv.data
        }
        return {
          valid: !0,
          data: Sv
        }
      }
      if (Pv === lv.array && hv === lv.array) {
        if (vv.length !== zv.length) return {
          valid: !1
        };
        const Pv = [];
        for (let hv = 0; hv < vv.length; hv++) {
          const Sv = pz(vv[hv], zv[hv]);
          if (!Sv.valid) return {
            valid: !1
          };
          Pv.push(Sv.data)
        }
        return {
          valid: !0,
          data: Pv
        }
      }
      return Pv === lv.date && hv === lv.date && +vv === +zv ? {
        valid: !0,
        data: vv
      } : {
        valid: !1
      }
    }
    class dz extends Rv {
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv), hv = (vv, hv) => {
          if (Fv(vv) || Fv(hv)) return mv;
          const Sv = pz(vv.value, hv.value);
          return Sv.valid ? ((Yv(vv) || Yv(hv)) && zv.Da(), {
            status: zv.value,
            value: Sv.data
          }) : (cv(Pv, {
            code: Wv.invalid_intersection_types
          }), mv)
        };
        return Pv.common.async ? Promise.all([this._def.left._parseAsync({
          data: Pv.data,
          path: Pv.path,
          parent: Pv
        }), this._def.right._parseAsync({
          data: Pv.data,
          path: Pv.path,
          parent: Pv
        })]).then((vv => {
          let [zv, Pv] = vv;
          return hv(zv, Pv)
        })) : hv(this._def.left._parseSync({
          data: Pv.data,
          path: Pv.path,
          parent: Pv
        }), this._def.right._parseSync({
          data: Pv.data,
          path: Pv.path,
          parent: Pv
        }))
      }
    }
    dz.create = (vv, zv, Pv) => new dz({
      left: vv,
      right: zv,
      typeName: xz.ZodIntersection,
      ...Uv(Pv)
    });
    class Nz extends Rv {
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv);
        if (Pv.parsedType !== lv.array) return cv(Pv, {
          code: Wv.invalid_type,
          expected: lv.array,
          received: Pv.parsedType
        }), mv;
        if (Pv.data.length < this._def.items.length) return cv(Pv, {
          code: Wv.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), mv;
        !this._def.rest && Pv.data.length > this._def.items.length && (cv(Pv, {
          code: Wv.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), zv.Da());
        const hv = [...Pv.data].map(((vv, zv) => {
          const hv = this._def.items[zv] || this._def.rest;
          return hv ? hv._parse(new Kv(Pv, vv, Pv.path, zv)) : null
        })).filter((vv => !!vv));
        return Pv.common.async ? Promise.all(hv).then((vv => Gv.mergeArray(zv, vv))) : Gv.mergeArray(zv, hv)
      }
      get items() {
        return this._def.items
      }
      rest(vv) {
        return new Nz({
          ...this._def,
          rest: vv
        })
      }
    }
    Nz.create = (vv, zv) => {
      if (!Array.isArray(vv)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Nz({
        items: vv,
        typeName: xz.ZodTuple,
        rest: null,
        ...Uv(zv)
      })
    };
    class lz extends Rv {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv);
        if (Pv.parsedType !== lv.object) return cv(Pv, {
          code: Wv.invalid_type,
          expected: lv.object,
          received: Pv.parsedType
        }), mv;
        const hv = [],
          Sv = this._def.keyType,
          ev = this._def.valueType;
        for (const gv in Pv.data) hv.push({
          key: Sv._parse(new Kv(Pv, gv, Pv.path, gv)),
          value: ev._parse(new Kv(Pv, Pv.data[gv], Pv.path, gv))
        });
        return Pv.common.async ? Gv.mergeObjectAsync(zv, hv) : Gv.mergeObjectSync(zv, hv)
      }
      get element() {
        return this._def.valueType
      }
      static create(vv, zv, Pv) {
        return new lz(zv instanceof Rv ? {
          keyType: vv,
          valueType: zv,
          typeName: xz.ZodRecord,
          ...Uv(Pv)
        } : {
          keyType: Hv.create(),
          valueType: vv,
          typeName: xz.ZodRecord,
          ...Uv(zv)
        })
      }
    }
    class Tz extends Rv {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv);
        if (Pv.parsedType !== lv.map) return cv(Pv, {
          code: Wv.invalid_type,
          expected: lv.map,
          received: Pv.parsedType
        }), mv;
        const hv = this._def.keyType,
          Sv = this._def.valueType,
          ev = [...Pv.data.entries()].map(((vv, zv) => {
            let [ev, gv] = vv;
            return {
              key: hv._parse(new Kv(Pv, ev, Pv.path, [zv, "key"])),
              value: Sv._parse(new Kv(Pv, gv, Pv.path, [zv, "value"]))
            }
          }));
        if (Pv.common.async) {
          const vv = new Map;
          return Promise.resolve().then((async () => {
            for (const Pv of ev) {
              const hv = await Pv.key,
                Sv = await Pv.value;
              if ("aborted" === hv.status || "aborted" === Sv.status) return mv;
              "Da" !== hv.status && "Da" !== Sv.status || zv.Da(), vv.set(hv.value, Sv.value)
            }
            return {
              status: zv.value,
              value: vv
            }
          }))
        } {
          const vv = new Map;
          for (const Pv of ev) {
            const hv = Pv.key,
              Sv = Pv.value;
            if ("aborted" === hv.status || "aborted" === Sv.status) return mv;
            "Da" !== hv.status && "Da" !== Sv.status || zv.Da(), vv.set(hv.value, Sv.value)
          }
          return {
            status: zv.value,
            value: vv
          }
        }
      }
    }
    Tz.create = (vv, zv, Pv) => new Tz({
      valueType: zv,
      keyType: vv,
      typeName: xz.ZodMap,
      ...Uv(Pv)
    });
    class Wz extends Rv {
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv);
        if (Pv.parsedType !== lv.set) return cv(Pv, {
          code: Wv.invalid_type,
          expected: lv.set,
          received: Pv.parsedType
        }), mv;
        const hv = this._def;
        null !== hv.minSize && Pv.data.size < hv.minSize.value && (cv(Pv, {
          code: Wv.too_small,
          minimum: hv.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: hv.minSize.message
        }), zv.Da()), null !== hv.maxSize && Pv.data.size > hv.maxSize.value && (cv(Pv, {
          code: Wv.too_big,
          maximum: hv.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: hv.maxSize.message
        }), zv.Da());
        const Sv = this._def.valueType;

        function ev(vv) {
          const Pv = new Set;
          for (const hv of vv) {
            if ("aborted" === hv.status) return mv;
            "Da" === hv.status && zv.Da(), Pv.add(hv.value)
          }
          return {
            status: zv.value,
            value: Pv
          }
        }
        const gv = [...Pv.data.values()].map(((vv, zv) => Sv._parse(new Kv(Pv, vv, Pv.path, zv))));
        return Pv.common.async ? Promise.all(gv).then((vv => ev(vv))) : ev(gv)
      }
      min(vv, zv) {
        return new Wz({
          ...this._def,
          minSize: {
            value: vv,
            message: Dv.toString(zv)
          }
        })
      }
      max(vv, zv) {
        return new Wz({
          ...this._def,
          maxSize: {
            value: vv,
            message: Dv.toString(zv)
          }
        })
      }
      size(vv, zv) {
        return this.min(vv, zv).max(vv, zv)
      }
      nonempty(vv) {
        return this.min(1, vv)
      }
    }
    Wz.create = (vv, zv) => new Wz({
      valueType: vv,
      minSize: null,
      maxSize: null,
      typeName: xz.ZodSet,
      ...Uv(zv)
    });
    class wz extends Rv {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv);
        if (zv.parsedType !== lv.function) return cv(zv, {
          code: Wv.invalid_type,
          expected: lv.function,
          received: zv.parsedType
        }), mv;

        function Pv(vv, Pv) {
          return iv({
            data: vv,
            path: zv.path,
            errorMaps: [zv.common.contextualErrorMap, zv.schemaErrorMap, Cv(), av].filter((vv => !!vv)),
            issueData: {
              code: Wv.invalid_arguments,
              argumentsError: Pv
            }
          })
        }

        function hv(vv, Pv) {
          return iv({
            data: vv,
            path: zv.path,
            errorMaps: [zv.common.contextualErrorMap, zv.schemaErrorMap, Cv(), av].filter((vv => !!vv)),
            issueData: {
              code: Wv.invalid_return_type,
              returnTypeError: Pv
            }
          })
        }
        const Sv = {
            errorMap: zv.common.contextualErrorMap
          },
          ev = zv.data;
        if (this._def.returns instanceof Gz) {
          const vv = this;
          return fv((async function() {
            for (var zv = arguments.length, gv = new Array(zv), pv = 0; pv < zv; pv++) gv[pv] = arguments[pv];
            const dv = new wv([]),
              Nv = await vv._def.args.parseAsync(gv, Sv).catch((vv => {
                throw dv.addIssue(Pv(gv, vv)), dv
              })),
              lv = await Reflect.apply(ev, this, Nv);
            return await vv._def.returns._def.type.parseAsync(lv, Sv).catch((vv => {
              throw dv.addIssue(hv(lv, vv)), dv
            }))
          }))
        } {
          const vv = this;
          return fv((function() {
            for (var zv = arguments.length, gv = new Array(zv), pv = 0; pv < zv; pv++) gv[pv] = arguments[pv];
            const dv = vv._def.args.safeParse(gv, Sv);
            if (!dv.success) throw new wv([Pv(gv, dv.error)]);
            const Nv = Reflect.apply(ev, this, dv.data),
              lv = vv._def.returns.safeParse(Nv, Sv);
            if (!lv.success) throw new wv([hv(Nv, lv.error)]);
            return lv.data
          }))
        }
      }
      parameters() {
        return this._def.args
      }
      returnType() {
        return this._def.returns
      }
      args() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        return new wz({
          ...this._def,
          args: Nz.create(zv).rest(Xv.create())
        })
      }
      returns(vv) {
        return new wz({
          ...this._def,
          returns: vv
        })
      }
      implement(vv) {
        return this.parse(vv)
      }
      strictImplement(vv) {
        return this.parse(vv)
      }
      static create(vv, zv, Pv) {
        return new wz({
          args: vv || Nz.create([]).rest(Xv.create()),
          returns: zv || Xv.create(),
          typeName: xz.ZodFunction,
          ...Uv(Pv)
        })
      }
    }
    class az extends Rv {
      get schema() {
        return this._def.getter()
      }
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv);
        return this._def.getter()._parse({
          data: zv.data,
          path: zv.path,
          parent: zv
        })
      }
    }
    az.create = (vv, zv) => new az({
      getter: vv,
      typeName: xz.ZodLazy,
      ...Uv(zv)
    });
    class sz extends Rv {
      _parse(vv) {
        if (vv.data !== this._def.value) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            received: zv.data,
            code: Wv.invalid_literal,
            expected: this._def.value
          }), mv
        }
        return {
          status: "valid",
          value: vv.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function Cz(vv, zv) {
      return new iz({
        values: vv,
        typeName: xz.ZodEnum,
        ...Uv(zv)
      })
    }
    sz.create = (vv, zv) => new sz({
      value: vv,
      typeName: xz.ZodLiteral,
      ...Uv(zv)
    });
    class iz extends Rv {
      _parse(vv) {
        if ("string" !== typeof vv.data) {
          const zv = this._getOrReturnCtx(vv),
            Pv = this._def.values;
          return cv(zv, {
            expected: pv.joinValues(Pv),
            received: zv.parsedType,
            code: Wv.invalid_type
          }), mv
        }
        if (-1 === this._def.values.indexOf(vv.data)) {
          const zv = this._getOrReturnCtx(vv),
            Pv = this._def.values;
          return cv(zv, {
            received: zv.data,
            code: Wv.invalid_enum_value,
            options: Pv
          }), mv
        }
        return fv(vv.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const vv = {};
        for (const zv of this._def.values) vv[zv] = zv;
        return vv
      }
      get Values() {
        const vv = {};
        for (const zv of this._def.values) vv[zv] = zv;
        return vv
      }
      get Enum() {
        const vv = {};
        for (const zv of this._def.values) vv[zv] = zv;
        return vv
      }
      extract(vv) {
        return iz.create(vv)
      }
      exclude(vv) {
        return iz.create(this.options.filter((zv => !vv.includes(zv))))
      }
    }
    iz.create = Cz;
    class cz extends Rv {
      _parse(vv) {
        const zv = pv.getValidEnumValues(this._def.values),
          Pv = this._getOrReturnCtx(vv);
        if (Pv.parsedType !== lv.string && Pv.parsedType !== lv.number) {
          const vv = pv.objectValues(zv);
          return cv(Pv, {
            expected: pv.joinValues(vv),
            received: Pv.parsedType,
            code: Wv.invalid_type
          }), mv
        }
        if (-1 === zv.indexOf(vv.data)) {
          const vv = pv.objectValues(zv);
          return cv(Pv, {
            received: Pv.data,
            code: Wv.invalid_enum_value,
            options: vv
          }), mv
        }
        return fv(vv.data)
      }
      get enum() {
        return this._def.values
      }
    }
    cz.create = (vv, zv) => new cz({
      values: vv,
      typeName: xz.ZodNativeEnum,
      ...Uv(zv)
    });
    class Gz extends Rv {
      unwrap() {
        return this._def.type
      }
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv);
        if (zv.parsedType !== lv.promise && !1 === zv.common.async) return cv(zv, {
          code: Wv.invalid_type,
          expected: lv.promise,
          received: zv.parsedType
        }), mv;
        const Pv = zv.parsedType === lv.promise ? zv.data : Promise.resolve(zv.data);
        return fv(Pv.then((vv => this._def.type.parseAsync(vv, {
          path: zv.path,
          errorMap: zv.common.contextualErrorMap
        }))))
      }
    }
    Gz.create = (vv, zv) => new Gz({
      type: vv,
      typeName: xz.ZodPromise,
      ...Uv(zv)
    });
    class mz extends Rv {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === xz.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv), hv = this._def.effect || null, Sv = {
          addIssue: vv => {
            cv(Pv, vv), vv.fatal ? zv.abort() : zv.Da()
          },
          get path() {
            return Pv.path
          }
        };
        if (Sv.addIssue = Sv.addIssue.bind(Sv), "preprocess" === hv.type) {
          const vv = hv.transform(Pv.data, Sv);
          return Pv.common.issues.length ? {
            status: "Da",
            value: Pv.data
          } : Pv.common.async ? Promise.resolve(vv).then((vv => this._def.schema._parseAsync({
            data: vv,
            path: Pv.path,
            parent: Pv
          }))) : this._def.schema._parseSync({
            data: vv,
            path: Pv.path,
            parent: Pv
          })
        }
        if ("refinement" === hv.type) {
          const vv = vv => {
            const zv = hv.refinement(vv, Sv);
            if (Pv.common.async) return Promise.resolve(zv);
            if (zv instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return vv
          };
          if (!1 === Pv.common.async) {
            const hv = this._def.schema._parseSync({
              data: Pv.data,
              path: Pv.path,
              parent: Pv
            });
            return "aborted" === hv.status ? mv : ("Da" === hv.status && zv.Da(), vv(hv.value), {
              status: zv.value,
              value: hv.value
            })
          }
          return this._def.schema._parseAsync({
            data: Pv.data,
            path: Pv.path,
            parent: Pv
          }).then((Pv => "aborted" === Pv.status ? mv : ("Da" === Pv.status && zv.Da(), vv(Pv.value).then((() => ({
            status: zv.value,
            value: Pv.value
          }))))))
        }
        if ("transform" === hv.type) {
          if (!1 === Pv.common.async) {
            const vv = this._def.schema._parseSync({
              data: Pv.data,
              path: Pv.path,
              parent: Pv
            });
            if (!nv(vv)) return vv;
            const ev = hv.transform(vv.value, Sv);
            if (ev instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: zv.value,
              value: ev
            }
          }
          return this._def.schema._parseAsync({
            data: Pv.data,
            path: Pv.path,
            parent: Pv
          }).then((vv => nv(vv) ? Promise.resolve(hv.transform(vv.value, Sv)).then((vv => ({
            status: zv.value,
            value: vv
          }))) : vv))
        }
        pv.assertNever(hv)
      }
    }
    mz.create = (vv, zv, Pv) => new mz({
      schema: vv,
      typeName: xz.ZodEffects,
      effect: zv,
      ...Uv(Pv)
    }), mz.createWithPreprocess = (vv, zv, Pv) => new mz({
      schema: zv,
      effect: {
        type: "preprocess",
        transform: vv
      },
      typeName: xz.ZodEffects,
      ...Uv(Pv)
    });
    class jz extends Rv {
      _parse(vv) {
        return this._getType(vv) === lv.undefined ? fv(void 0) : this._def.innerType._parse(vv)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    jz.create = (vv, zv) => new jz({
      innerType: vv,
      typeName: xz.ZodOptional,
      ...Uv(zv)
    });
    class fz extends Rv {
      _parse(vv) {
        return this._getType(vv) === lv.null ? fv(null) : this._def.innerType._parse(vv)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    fz.create = (vv, zv) => new fz({
      innerType: vv,
      typeName: xz.ZodNullable,
      ...Uv(zv)
    });
    class Fz extends Rv {
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv);
        let Pv = zv.data;
        return zv.parsedType === lv.undefined && (Pv = this._def.defaultValue()), this._def.innerType._parse({
          data: Pv,
          path: zv.path,
          parent: zv
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Fz.create = (vv, zv) => new Fz({
      innerType: vv,
      typeName: xz.ZodDefault,
      defaultValue: "function" === typeof zv.default ? zv.default : () => zv.default,
      ...Uv(zv)
    });
    class Yz extends Rv {
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv), Pv = {
          ...zv,
          common: {
            ...zv.common,
            issues: []
          }
        }, hv = this._def.innerType._parse({
          data: Pv.data,
          path: Pv.path,
          parent: {
            ...Pv
          }
        });
        return Ov(hv) ? hv.then((vv => ({
          status: "valid",
          value: "valid" === vv.status ? vv.value : this._def.catchValue({
            get error() {
              return new wv(Pv.common.issues)
            },
            input: Pv.data
          })
        }))) : {
          status: "valid",
          value: "valid" === hv.status ? hv.value : this._def.catchValue({
            get error() {
              return new wv(Pv.common.issues)
            },
            input: Pv.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Yz.create = (vv, zv) => new Yz({
      innerType: vv,
      typeName: xz.ZodCatch,
      catchValue: "function" === typeof zv.catch ? zv.catch : () => zv.catch,
      ...Uv(zv)
    });
    class nz extends Rv {
      _parse(vv) {
        if (this._getType(vv) !== lv.nan) {
          const zv = this._getOrReturnCtx(vv);
          return cv(zv, {
            code: Wv.invalid_type,
            expected: lv.nan,
            received: zv.parsedType
          }), mv
        }
        return {
          status: "valid",
          value: vv.data
        }
      }
    }
    nz.create = vv => new nz({
      typeName: xz.ZodNaN,
      ...Uv(vv)
    });
    const Oz = Symbol("zod_brand");
    class Dz extends Rv {
      _parse(vv) {
        const {
          ctx: zv
        } = this._processInputParams(vv), Pv = zv.data;
        return this._def.type._parse({
          data: Pv,
          path: zv.path,
          parent: zv
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Kz extends Rv {
      _parse(vv) {
        const {
          status: zv,
          ctx: Pv
        } = this._processInputParams(vv);
        if (Pv.common.async) {
          return (async () => {
            const vv = await this._def.in._parseAsync({
              data: Pv.data,
              path: Pv.path,
              parent: Pv
            });
            return "aborted" === vv.status ? mv : "Da" === vv.status ? (zv.Da(), jv(vv.value)) : this._def.out._parseAsync({
              data: vv.value,
              path: Pv.path,
              parent: Pv
            })
          })()
        } {
          const vv = this._def.in._parseSync({
            data: Pv.data,
            path: Pv.path,
            parent: Pv
          });
          return "aborted" === vv.status ? mv : "Da" === vv.status ? (zv.Da(), {
            status: "Da",
            value: vv.value
          }) : this._def.out._parseSync({
            data: vv.value,
            path: Pv.path,
            parent: Pv
          })
        }
      }
      static create(vv, zv) {
        return new Kz({
          in: vv,
          out: zv,
          typeName: xz.ZodPipeline
        })
      }
    }
    class Vz extends Rv {
      _parse(vv) {
        const zv = this._def.innerType._parse(vv);
        return nv(zv) && (zv.value = Object.freeze(zv.value)), zv
      }
    }
    Vz.create = (vv, zv) => new Vz({
      innerType: vv,
      typeName: xz.ZodReadonly,
      ...Uv(zv)
    });
    const Uz = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        return vv ? kv.create().superRefine(((hv, Sv) => {
          var ev, gv;
          if (!vv(hv)) {
            const vv = "function" === typeof zv ? zv(hv) : "string" === typeof zv ? {
                message: zv
              } : zv,
              pv = null === (gv = null !== (ev = vv.fatal) && void 0 !== ev ? ev : Pv) || void 0 === gv || gv,
              dv = "string" === typeof vv ? {
                message: vv
              } : vv;
            Sv.addIssue({
              code: "custom",
              ...dv,
              fatal: pv
            })
          }
        })) : kv.create()
      },
      Rz = {
        object: hz.lazycreate
      };
    var xz;
    ! function(vv) {
      vv.ZodString = "ZodString", vv.ZodNumber = "ZodNumber", vv.ZodNaN = "ZodNaN", vv.ZodBigInt = "ZodBigInt", vv.ZodBoolean = "ZodBoolean", vv.ZodDate = "ZodDate", vv.ZodSymbol = "ZodSymbol", vv.ZodUndefined = "ZodUndefined", vv.ZodNull = "ZodNull", vv.ZodAny = "ZodAny", vv.ZodUnknown = "ZodUnknown", vv.ZodNever = "ZodNever", vv.ZodVoid = "ZodVoid", vv.ZodArray = "ZodArray", vv.ZodObject = "ZodObject", vv.ZodUnion = "ZodUnion", vv.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", vv.ZodIntersection = "ZodIntersection", vv.ZodTuple = "ZodTuple", vv.ZodRecord = "ZodRecord", vv.ZodMap = "ZodMap", vv.ZodSet = "ZodSet", vv.ZodFunction = "ZodFunction", vv.ZodLazy = "ZodLazy", vv.ZodLiteral = "ZodLiteral", vv.ZodEnum = "ZodEnum", vv.ZodEffects = "ZodEffects", vv.ZodNativeEnum = "ZodNativeEnum", vv.ZodOptional = "ZodOptional", vv.ZodNullable = "ZodNullable", vv.ZodDefault = "ZodDefault", vv.ZodCatch = "ZodCatch", vv.ZodPromise = "ZodPromise", vv.ZodBranded = "ZodBranded", vv.ZodPipeline = "ZodPipeline", vv.ZodReadonly = "ZodReadonly"
    }(xz || (xz = {}));
    const tz = Hv.create,
      qz = yv.create,
      Iz = nz.create,
      Qz = Bv.create,
      Zz = Jv.create,
      Az = Ev.create,
      Lz = ov.create,
      Hz = bv.create,
      Mz = rv.create,
      yz = kv.create,
      Bz = Xv.create,
      Jz = uv.create,
      Ez = vz.create,
      oz = zz.create,
      bz = hz.create,
      rz = hz.strictCreate,
      kz = Sz.create,
      Xz = gz.create,
      uz = dz.create,
      vP = Nz.create,
      zP = lz.create,
      PP = Tz.create,
      hP = Wz.create,
      SP = wz.create,
      eP = az.create,
      gP = sz.create,
      pP = iz.create,
      dP = cz.create,
      NP = Gz.create,
      lP = mz.create,
      TP = jz.create,
      WP = fz.create,
      wP = mz.createWithPreprocess,
      aP = Kz.create,
      sP = {
        string: vv => Hv.create({
          ...vv,
          coerce: !0
        }),
        number: vv => yv.create({
          ...vv,
          coerce: !0
        }),
        boolean: vv => Jv.create({
          ...vv,
          coerce: !0
        }),
        bigint: vv => Bv.create({
          ...vv,
          coerce: !0
        }),
        date: vv => Ev.create({
          ...vv,
          coerce: !0
        })
      },
      CP = mv;
    var iP = Object.freeze({
        __proto__: null,
        defaultErrorMap: av,
        setErrorMap: function(vv) {
          sv = vv
        },
        getErrorMap: Cv,
        makeIssue: iv,
        EMPTY_PATH: [],
        addIssueToContext: cv,
        ParseStatus: Gv,
        INVALID: mv,
        DIRTY: jv,
        OK: fv,
        isAborted: Fv,
        isDirty: Yv,
        isValid: nv,
        isAsync: Ov,
        get util() {
          return pv
        },
        get objectUtil() {
          return dv
        },
        ZodParsedType: lv,
        getParsedType: Tv,
        ZodType: Rv,
        ZodString: Hv,
        ZodNumber: yv,
        ZodBigInt: Bv,
        ZodBoolean: Jv,
        ZodDate: Ev,
        ZodSymbol: ov,
        ZodUndefined: bv,
        ZodNull: rv,
        ZodAny: kv,
        ZodUnknown: Xv,
        ZodNever: uv,
        ZodVoid: vz,
        ZodArray: zz,
        ZodObject: hz,
        ZodUnion: Sz,
        ZodDiscriminatedUnion: gz,
        ZodIntersection: dz,
        ZodTuple: Nz,
        ZodRecord: lz,
        ZodMap: Tz,
        ZodSet: Wz,
        ZodFunction: wz,
        ZodLazy: az,
        ZodLiteral: sz,
        ZodEnum: iz,
        ZodNativeEnum: cz,
        ZodPromise: Gz,
        ZodEffects: mz,
        ZodTransformer: mz,
        ZodOptional: jz,
        ZodNullable: fz,
        ZodDefault: Fz,
        ZodCatch: Yz,
        ZodNaN: nz,
        BRAND: Oz,
        ZodBranded: Dz,
        ZodPipeline: Kz,
        ZodReadonly: Vz,
        custom: Uz,
        Schema: Rv,
        ZodSchema: Rv,
        late: Rz,
        get ZodFirstPartyTypeKind() {
          return xz
        },
        coerce: sP,
        any: yz,
        array: oz,
        bigint: Qz,
        boolean: Zz,
        date: Az,
        discriminatedUnion: Xz,
        effect: lP,
        enum: pP,
        function: SP,
        instanceof: function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${vv.name}`
          };
          return Uz((zv => zv instanceof vv), zv)
        },
        intersection: uz,
        lazy: eP,
        literal: gP,
        map: PP,
        nan: Iz,
        nativeEnum: dP,
        never: Jz,
        null: Mz,
        nullable: WP,
        number: qz,
        object: bz,
        oboolean: () => Zz().optional(),
        onumber: () => qz().optional(),
        optional: TP,
        ostring: () => tz().optional(),
        pipeline: aP,
        preprocess: wP,
        promise: NP,
        record: zP,
        set: hP,
        strictObject: rz,
        string: tz,
        symbol: Lz,
        transformer: lP,
        tuple: vP,
        undefined: Hz,
        union: kz,
        unknown: Bz,
        void: Ez,
        NEVER: CP,
        ZodIssueCode: Wv,
        quotelessJson: vv => JSON.stringify(vv, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: wv
      }),
      cP = {
        exports: {}
      };
    ! function(vv) {
      var zv = function(vv) {
        var Pv = 1e7,
          hv = 9007199254740992,
          Sv = Wv(hv),
          ev = "0123456789abcdefghijklmnopqrstuvwxyz",
          gv = "function" === typeof BigInt;

        function pv(vv, zv, Pv, hv) {
          return "undefined" === typeof vv ? pv[0] : "undefined" !== typeof zv && (10 !== +zv || Pv) ? Jv(vv, zv, Pv, hv) : kv(vv)
        }

        function dv(vv, zv) {
          this.value = vv, this.sign = zv, this.isSmall = !1
        }

        function Nv(vv) {
          this.value = vv, this.sign = vv < 0, this.isSmall = !0
        }

        function lv(vv) {
          this.value = vv
        }

        function Tv(vv) {
          return -hv < vv && vv < hv
        }

        function Wv(vv) {
          return vv < 1e7 ? [vv] : vv < 1e14 ? [vv % 1e7, Math.floor(vv / 1e7)] : [vv % 1e7, Math.floor(vv / 1e7) % 1e7, Math.floor(vv / 1e14)]
        }

        function wv(vv) {
          av(vv);
          var zv = vv.length;
          if (zv < 4 && Uv(vv, Sv) < 0) switch (zv) {
            case 0:
              return 0;
            case 1:
              return vv[0];
            case 2:
              return vv[0] + vv[1] * Pv;
            default:
              return vv[0] + (vv[1] + vv[2] * Pv) * Pv
          }
          return vv
        }

        function av(vv) {
          for (var zv = vv.length; 0 === vv[--zv];);
          vv.length = zv + 1
        }

        function sv(vv) {
          for (var zv = new Array(vv), Pv = -1; ++Pv < vv;) zv[Pv] = 0;
          return zv
        }

        function Cv(vv) {
          return vv > 0 ? Math.floor(vv) : Math.ceil(vv)
        }

        function iv(vv, zv) {
          var hv, Sv, ev = vv.length,
            gv = zv.length,
            pv = new Array(ev),
            dv = 0,
            Nv = Pv;
          for (Sv = 0; Sv < gv; Sv++) dv = (hv = vv[Sv] + zv[Sv] + dv) >= Nv ? 1 : 0, pv[Sv] = hv - dv * Nv;
          for (; Sv < ev;) dv = (hv = vv[Sv] + dv) === Nv ? 1 : 0, pv[Sv++] = hv - dv * Nv;
          return dv > 0 && pv.push(dv), pv
        }

        function cv(vv, zv) {
          return vv.length >= zv.length ? iv(vv, zv) : iv(zv, vv)
        }

        function Gv(vv, zv) {
          var hv, Sv, ev = vv.length,
            gv = new Array(ev),
            pv = Pv;
          for (Sv = 0; Sv < ev; Sv++) hv = vv[Sv] - pv + zv, zv = Math.floor(hv / pv), gv[Sv] = hv - zv * pv, zv += 1;
          for (; zv > 0;) gv[Sv++] = zv % pv, zv = Math.floor(zv / pv);
          return gv
        }

        function mv(vv, zv) {
          var hv, Sv, ev = vv.length,
            gv = zv.length,
            pv = new Array(ev),
            dv = 0,
            Nv = Pv;
          for (hv = 0; hv < gv; hv++)(Sv = vv[hv] - dv - zv[hv]) < 0 ? (Sv += Nv, dv = 1) : dv = 0, pv[hv] = Sv;
          for (hv = gv; hv < ev; hv++) {
            if (!((Sv = vv[hv] - dv) < 0)) {
              pv[hv++] = Sv;
              break
            }
            Sv += Nv, pv[hv] = Sv
          }
          for (; hv < ev; hv++) pv[hv] = vv[hv];
          return av(pv), pv
        }

        function jv(vv, zv, hv) {
          var Sv, ev, gv = vv.length,
            pv = new Array(gv),
            lv = -zv,
            Tv = Pv;
          for (Sv = 0; Sv < gv; Sv++) ev = vv[Sv] + lv, lv = Math.floor(ev / Tv), ev %= Tv, pv[Sv] = ev < 0 ? ev + Tv : ev;
          return "number" === typeof(pv = wv(pv)) ? (hv && (pv = -pv), new Nv(pv)) : new dv(pv, hv)
        }

        function fv(vv, zv) {
          var hv, Sv, ev, gv, pv = vv.length,
            dv = zv.length,
            Nv = sv(pv + dv),
            lv = Pv;
          for (ev = 0; ev < pv; ++ev) {
            gv = vv[ev];
            for (var Tv = 0; Tv < dv; ++Tv) hv = gv * zv[Tv] + Nv[ev + Tv], Sv = Math.floor(hv / lv), Nv[ev + Tv] = hv - Sv * lv, Nv[ev + Tv + 1] += Sv
          }
          return av(Nv), Nv
        }

        function Fv(vv, zv) {
          var hv, Sv, ev = vv.length,
            gv = new Array(ev),
            pv = Pv,
            dv = 0;
          for (Sv = 0; Sv < ev; Sv++) hv = vv[Sv] * zv + dv, dv = Math.floor(hv / pv), gv[Sv] = hv - dv * pv;
          for (; dv > 0;) gv[Sv++] = dv % pv, dv = Math.floor(dv / pv);
          return gv
        }

        function Yv(vv, zv) {
          for (var Pv = []; zv-- > 0;) Pv.push(0);
          return Pv.concat(vv)
        }

        function nv(vv, zv) {
          var Pv = Math.max(vv.length, zv.length);
          if (Pv <= 30) return fv(vv, zv);
          Pv = Math.ceil(Pv / 2);
          var hv = vv.slice(Pv),
            Sv = vv.slice(0, Pv),
            ev = zv.slice(Pv),
            gv = zv.slice(0, Pv),
            pv = nv(Sv, gv),
            dv = nv(hv, ev),
            Nv = nv(cv(Sv, hv), cv(gv, ev)),
            lv = cv(cv(pv, Yv(mv(mv(Nv, pv), dv), Pv)), Yv(dv, 2 * Pv));
          return av(lv), lv
        }

        function Ov(vv, zv, hv) {
          return new dv(vv < Pv ? Fv(zv, vv) : fv(zv, Wv(vv)), hv)
        }

        function Dv(vv) {
          var zv, hv, Sv, ev, gv = vv.length,
            pv = sv(gv + gv),
            dv = Pv;
          for (Sv = 0; Sv < gv; Sv++) {
            hv = 0 - (ev = vv[Sv]) * ev;
            for (var Nv = Sv; Nv < gv; Nv++) zv = ev * vv[Nv] * 2 + pv[Sv + Nv] + hv, hv = Math.floor(zv / dv), pv[Sv + Nv] = zv - hv * dv;
            pv[Sv + gv] = hv
          }
          return av(pv), pv
        }

        function Kv(vv, zv) {
          var hv, Sv, ev, gv, pv = vv.length,
            dv = sv(pv),
            Nv = Pv;
          for (ev = 0, hv = pv - 1; hv >= 0; --hv) ev = (gv = ev * Nv + vv[hv]) - (Sv = Cv(gv / zv)) * zv, dv[hv] = 0 | Sv;
          return [dv, 0 | ev]
        }

        function Vv(vv, zv) {
          var hv, Sv = kv(zv);
          if (gv) return [new lv(vv.value / Sv.value), new lv(vv.value % Sv.value)];
          var ev, Tv = vv.value,
            iv = Sv.value;
          if (0 === iv) throw new Error("Cannot divide by zero");
          if (vv.isSmall) return Sv.isSmall ? [new Nv(Cv(Tv / iv)), new Nv(Tv % iv)] : [pv[0], vv];
          if (Sv.isSmall) {
            if (1 === iv) return [vv, pv[0]];
            if (-1 == iv) return [vv.Re(), pv[0]];
            var cv = Math.abs(iv);
            if (cv < Pv) {
              ev = wv((hv = Kv(Tv, cv))[0]);
              var Gv = hv[1];
              return vv.sign && (Gv = -Gv), "number" === typeof ev ? (vv.sign !== Sv.sign && (ev = -ev), [new Nv(ev), new Nv(Gv)]) : [new dv(ev, vv.sign !== Sv.sign), new Nv(Gv)]
            }
            iv = Wv(cv)
          }
          var jv = Uv(Tv, iv);
          if (-1 === jv) return [pv[0], vv];
          if (0 === jv) return [pv[vv.sign === Sv.sign ? 1 : -1], pv[0]];
          hv = Tv.length + iv.length <= 200 ? function(vv, zv) {
            var hv, Sv, ev, gv, pv, dv, Nv, lv = vv.length,
              Tv = zv.length,
              Wv = Pv,
              av = sv(zv.length),
              Cv = zv[Tv - 1],
              iv = Math.ceil(Wv / (2 * Cv)),
              cv = Fv(vv, iv),
              Gv = Fv(zv, iv);
            for (cv.length <= lv && cv.push(0), Gv.push(0), Cv = Gv[Tv - 1], Sv = lv - Tv; Sv >= 0; Sv--) {
              for (hv = Wv - 1, cv[Sv + Tv] !== Cv && (hv = Math.floor((cv[Sv + Tv] * Wv + cv[Sv + Tv - 1]) / Cv)), ev = 0, gv = 0, dv = Gv.length, pv = 0; pv < dv; pv++) ev += hv * Gv[pv], Nv = Math.floor(ev / Wv), gv += cv[Sv + pv] - (ev - Nv * Wv), ev = Nv, gv < 0 ? (cv[Sv + pv] = gv + Wv, gv = -1) : (cv[Sv + pv] = gv, gv = 0);
              for (; 0 !== gv;) {
                for (hv -= 1, ev = 0, pv = 0; pv < dv; pv++)(ev += cv[Sv + pv] - Wv + Gv[pv]) < 0 ? (cv[Sv + pv] = ev + Wv, ev = 0) : (cv[Sv + pv] = ev, ev = 1);
                gv += ev
              }
              av[Sv] = hv
            }
            return cv = Kv(cv, iv)[0], [wv(av), wv(cv)]
          }(Tv, iv) : function(vv, zv) {
            for (var hv, Sv, ev, gv, pv, dv = vv.length, Nv = zv.length, lv = [], Tv = [], Wv = Pv; dv;)
              if (Tv.unshift(vv[--dv]), av(Tv), Uv(Tv, zv) < 0) lv.push(0);
              else {
                ev = Tv[(Sv = Tv.length) - 1] * Wv + Tv[Sv - 2], gv = zv[Nv - 1] * Wv + zv[Nv - 2], Sv > Nv && (ev = (ev + 1) * Wv), hv = Math.ceil(ev / gv);
                do {
                  if (Uv(pv = Fv(zv, hv), Tv) <= 0) break;
                  hv--
                } while (hv);
                lv.push(hv), Tv = mv(Tv, pv)
              } return lv.reverse(), [wv(lv), wv(Tv)]
          }(Tv, iv), ev = hv[0];
          var fv = vv.sign !== Sv.sign,
            Yv = hv[1],
            nv = vv.sign;
          return "number" === typeof ev ? (fv && (ev = -ev), ev = new Nv(ev)) : ev = new dv(ev, fv), "number" === typeof Yv ? (nv && (Yv = -Yv), Yv = new Nv(Yv)) : Yv = new dv(Yv, nv), [ev, Yv]
        }

        function Uv(vv, zv) {
          if (vv.length !== zv.length) return vv.length > zv.length ? 1 : -1;
          for (var Pv = vv.length - 1; Pv >= 0; Pv--)
            if (vv[Pv] !== zv[Pv]) return vv[Pv] > zv[Pv] ? 1 : -1;
          return 0
        }

        function Rv(vv) {
          var zv = vv.abs();
          return !zv.isUnit() && (!!(zv.equals(2) || zv.equals(3) || zv.equals(5)) || !(zv.isEven() || zv.isDivisibleBy(3) || zv.isDivisibleBy(5)) && (!!zv.lesser(49) || void 0))
        }

        function xv(vv, Pv) {
          for (var hv, Sv, ev, gv = vv.prev(), pv = gv, dv = 0; pv.isEven();) pv = pv.divide(2), dv++;
          vv: for (Sv = 0; Sv < Pv.length; Sv++)
            if (!vv.lesser(Pv[Sv]) && !(ev = zv(Pv[Sv]).modPow(pv, vv)).isUnit() && !ev.equals(gv)) {
              for (hv = dv - 1; 0 != hv; hv--) {
                if ((ev = ev.square().mod(vv)).isUnit()) return !1;
                if (ev.equals(gv)) continue vv
              }
              return !1
            }
          return !0
        }
        dv.prototype = Object.create(pv.prototype), Nv.prototype = Object.create(pv.prototype), lv.prototype = Object.create(pv.prototype), dv.prototype.add = function(vv) {
          var zv = kv(vv);
          if (this.sign !== zv.sign) return this.subtract(zv.Re());
          var Pv = this.value,
            hv = zv.value;
          return zv.isSmall ? new dv(Gv(Pv, Math.abs(hv)), this.sign) : new dv(cv(Pv, hv), this.sign)
        }, dv.prototype.plus = dv.prototype.add, Nv.prototype.add = function(vv) {
          var zv = kv(vv),
            Pv = this.value;
          if (Pv < 0 !== zv.sign) return this.subtract(zv.Re());
          var hv = zv.value;
          if (zv.isSmall) {
            if (Tv(Pv + hv)) return new Nv(Pv + hv);
            hv = Wv(Math.abs(hv))
          }
          return new dv(Gv(hv, Math.abs(Pv)), Pv < 0)
        }, Nv.prototype.plus = Nv.prototype.add, lv.prototype.add = function(vv) {
          return new lv(this.value + kv(vv).value)
        }, lv.prototype.plus = lv.prototype.add, dv.prototype.subtract = function(vv) {
          var zv = kv(vv);
          if (this.sign !== zv.sign) return this.add(zv.Re());
          var Pv = this.value,
            hv = zv.value;
          return zv.isSmall ? jv(Pv, Math.abs(hv), this.sign) : function(vv, zv, Pv) {
            var hv;
            return Uv(vv, zv) >= 0 ? hv = mv(vv, zv) : (hv = mv(zv, vv), Pv = !Pv), "number" === typeof(hv = wv(hv)) ? (Pv && (hv = -hv), new Nv(hv)) : new dv(hv, Pv)
          }(Pv, hv, this.sign)
        }, dv.prototype.minus = dv.prototype.subtract, Nv.prototype.subtract = function(vv) {
          var zv = kv(vv),
            Pv = this.value;
          if (Pv < 0 !== zv.sign) return this.add(zv.Re());
          var hv = zv.value;
          return zv.isSmall ? new Nv(Pv - hv) : jv(hv, Math.abs(Pv), Pv >= 0)
        }, Nv.prototype.minus = Nv.prototype.subtract, lv.prototype.subtract = function(vv) {
          return new lv(this.value - kv(vv).value)
        }, lv.prototype.minus = lv.prototype.subtract, dv.prototype.Re = function() {
          return new dv(this.value, !this.sign)
        }, Nv.prototype.Re = function() {
          var vv = this.sign,
            zv = new Nv(-this.value);
          return zv.sign = !vv, zv
        }, lv.prototype.Re = function() {
          return new lv(-this.value)
        }, dv.prototype.abs = function() {
          return new dv(this.value, !1)
        }, Nv.prototype.abs = function() {
          return new Nv(Math.abs(this.value))
        }, lv.prototype.abs = function() {
          return new lv(this.value >= 0 ? this.value : -this.value)
        }, dv.prototype.multiply = function(vv) {
          var zv, hv, Sv, ev = kv(vv),
            gv = this.value,
            Nv = ev.value,
            lv = this.sign !== ev.sign;
          if (ev.isSmall) {
            if (0 === Nv) return pv[0];
            if (1 === Nv) return this;
            if (-1 === Nv) return this.Re();
            if ((zv = Math.abs(Nv)) < Pv) return new dv(Fv(gv, zv), lv);
            Nv = Wv(zv)
          }
          return hv = gv.length, Sv = Nv.length, new dv(-.012 * hv - .012 * Sv + 15e-6 * hv * Sv > 0 ? nv(gv, Nv) : fv(gv, Nv), lv)
        }, dv.prototype.times = dv.prototype.multiply, Nv.prototype._multiplyBySmall = function(vv) {
          return Tv(vv.value * this.value) ? new Nv(vv.value * this.value) : Ov(Math.abs(vv.value), Wv(Math.abs(this.value)), this.sign !== vv.sign)
        }, dv.prototype._multiplyBySmall = function(vv) {
          return 0 === vv.value ? pv[0] : 1 === vv.value ? this : -1 === vv.value ? this.Re() : Ov(Math.abs(vv.value), this.value, this.sign !== vv.sign)
        }, Nv.prototype.multiply = function(vv) {
          return kv(vv)._multiplyBySmall(this)
        }, Nv.prototype.times = Nv.prototype.multiply, lv.prototype.multiply = function(vv) {
          return new lv(this.value * kv(vv).value)
        }, lv.prototype.times = lv.prototype.multiply, dv.prototype.square = function() {
          return new dv(Dv(this.value), !1)
        }, Nv.prototype.square = function() {
          var vv = this.value * this.value;
          return Tv(vv) ? new Nv(vv) : new dv(Dv(Wv(Math.abs(this.value))), !1)
        }, lv.prototype.square = function(vv) {
          return new lv(this.value * this.value)
        }, dv.prototype.divmod = function(vv) {
          var zv = Vv(this, vv);
          return {
            quotient: zv[0],
            remainder: zv[1]
          }
        }, lv.prototype.divmod = Nv.prototype.divmod = dv.prototype.divmod, dv.prototype.divide = function(vv) {
          return Vv(this, vv)[0]
        }, lv.prototype.over = lv.prototype.divide = function(vv) {
          return new lv(this.value / kv(vv).value)
        }, Nv.prototype.over = Nv.prototype.divide = dv.prototype.over = dv.prototype.divide, dv.prototype.mod = function(vv) {
          return Vv(this, vv)[1]
        }, lv.prototype.mod = lv.prototype.remainder = function(vv) {
          return new lv(this.value % kv(vv).value)
        }, Nv.prototype.remainder = Nv.prototype.mod = dv.prototype.remainder = dv.prototype.mod, dv.prototype.pow = function(vv) {
          var zv, Pv, hv, Sv = kv(vv),
            ev = this.value,
            gv = Sv.value;
          if (0 === gv) return pv[1];
          if (0 === ev) return pv[0];
          if (1 === ev) return pv[1];
          if (-1 === ev) return Sv.isEven() ? pv[1] : pv[-1];
          if (Sv.sign) return pv[0];
          if (!Sv.isSmall) throw new Error("The exponent " + Sv.toString() + " is too large.");
          if (this.isSmall && Tv(zv = Math.pow(ev, gv))) return new Nv(Cv(zv));
          for (Pv = this, hv = pv[1]; !0 & gv && (hv = hv.times(Pv), --gv), 0 !== gv;) gv /= 2, Pv = Pv.square();
          return hv
        }, Nv.prototype.pow = dv.prototype.pow, lv.prototype.pow = function(vv) {
          var zv = kv(vv),
            Pv = this.value,
            hv = zv.value,
            Sv = BigInt(0),
            ev = BigInt(1),
            gv = BigInt(2);
          if (hv === Sv) return pv[1];
          if (Pv === Sv) return pv[0];
          if (Pv === ev) return pv[1];
          if (Pv === BigInt(-1)) return zv.isEven() ? pv[1] : pv[-1];
          if (zv.isNegative()) return new lv(Sv);
          for (var dv = this, Nv = pv[1];
            (hv & ev) === ev && (Nv = Nv.times(dv), --hv), hv !== Sv;) hv /= gv, dv = dv.square();
          return Nv
        }, dv.prototype.modPow = function(vv, zv) {
          if (vv = kv(vv), (zv = kv(zv)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Pv = pv[1],
            hv = this.mod(zv);
          for (vv.isNegative() && (vv = vv.multiply(pv[-1]), hv = hv.modInv(zv)); vv.isPositive();) {
            if (hv.isZero()) return pv[0];
            vv.isOdd() && (Pv = Pv.multiply(hv).mod(zv)), vv = vv.divide(2), hv = hv.square().mod(zv)
          }
          return Pv
        }, lv.prototype.modPow = Nv.prototype.modPow = dv.prototype.modPow, dv.prototype.compareAbs = function(vv) {
          var zv = kv(vv),
            Pv = this.value,
            hv = zv.value;
          return zv.isSmall ? 1 : Uv(Pv, hv)
        }, Nv.prototype.compareAbs = function(vv) {
          var zv = kv(vv),
            Pv = Math.abs(this.value),
            hv = zv.value;
          return zv.isSmall ? Pv === (hv = Math.abs(hv)) ? 0 : Pv > hv ? 1 : -1 : -1
        }, lv.prototype.compareAbs = function(vv) {
          var zv = this.value,
            Pv = kv(vv).value;
          return (zv = zv >= 0 ? zv : -zv) === (Pv = Pv >= 0 ? Pv : -Pv) ? 0 : zv > Pv ? 1 : -1
        }, dv.prototype.compare = function(vv) {
          if (vv === 1 / 0) return -1;
          if (vv === -1 / 0) return 1;
          var zv = kv(vv),
            Pv = this.value,
            hv = zv.value;
          return this.sign !== zv.sign ? zv.sign ? 1 : -1 : zv.isSmall ? this.sign ? -1 : 1 : Uv(Pv, hv) * (this.sign ? -1 : 1)
        }, dv.prototype.compareTo = dv.prototype.compare, Nv.prototype.compare = function(vv) {
          if (vv === 1 / 0) return -1;
          if (vv === -1 / 0) return 1;
          var zv = kv(vv),
            Pv = this.value,
            hv = zv.value;
          return zv.isSmall ? Pv == hv ? 0 : Pv > hv ? 1 : -1 : Pv < 0 !== zv.sign ? Pv < 0 ? -1 : 1 : Pv < 0 ? 1 : -1
        }, Nv.prototype.compareTo = Nv.prototype.compare, lv.prototype.compare = function(vv) {
          if (vv === 1 / 0) return -1;
          if (vv === -1 / 0) return 1;
          var zv = this.value,
            Pv = kv(vv).value;
          return zv === Pv ? 0 : zv > Pv ? 1 : -1
        }, lv.prototype.compareTo = lv.prototype.compare, dv.prototype.equals = function(vv) {
          return 0 === this.compare(vv)
        }, lv.prototype.eq = lv.prototype.equals = Nv.prototype.eq = Nv.prototype.equals = dv.prototype.eq = dv.prototype.equals, dv.prototype.notEquals = function(vv) {
          return 0 !== this.compare(vv)
        }, lv.prototype.neq = lv.prototype.notEquals = Nv.prototype.neq = Nv.prototype.notEquals = dv.prototype.neq = dv.prototype.notEquals, dv.prototype.greater = function(vv) {
          return this.compare(vv) > 0
        }, lv.prototype.gt = lv.prototype.greater = Nv.prototype.gt = Nv.prototype.greater = dv.prototype.gt = dv.prototype.greater, dv.prototype.lesser = function(vv) {
          return this.compare(vv) < 0
        }, lv.prototype.lt = lv.prototype.lesser = Nv.prototype.lt = Nv.prototype.lesser = dv.prototype.lt = dv.prototype.lesser, dv.prototype.greaterOrEquals = function(vv) {
          return this.compare(vv) >= 0
        }, lv.prototype.geq = lv.prototype.greaterOrEquals = Nv.prototype.geq = Nv.prototype.greaterOrEquals = dv.prototype.geq = dv.prototype.greaterOrEquals, dv.prototype.lesserOrEquals = function(vv) {
          return this.compare(vv) <= 0
        }, lv.prototype.leq = lv.prototype.lesserOrEquals = Nv.prototype.leq = Nv.prototype.lesserOrEquals = dv.prototype.leq = dv.prototype.lesserOrEquals, dv.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Nv.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, lv.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, dv.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Nv.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, lv.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, dv.prototype.isPositive = function() {
          return !this.sign
        }, Nv.prototype.isPositive = function() {
          return this.value > 0
        }, lv.prototype.isPositive = Nv.prototype.isPositive, dv.prototype.isNegative = function() {
          return this.sign
        }, Nv.prototype.isNegative = function() {
          return this.value < 0
        }, lv.prototype.isNegative = Nv.prototype.isNegative, dv.prototype.isUnit = function() {
          return !1
        }, Nv.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, lv.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, dv.prototype.isZero = function() {
          return !1
        }, Nv.prototype.isZero = function() {
          return 0 === this.value
        }, lv.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, dv.prototype.isDivisibleBy = function(vv) {
          var zv = kv(vv);
          return !zv.isZero() && (!!zv.isUnit() || (0 === zv.compareAbs(2) ? this.isEven() : this.mod(zv).isZero()))
        }, lv.prototype.isDivisibleBy = Nv.prototype.isDivisibleBy = dv.prototype.isDivisibleBy, dv.prototype.isPrime = function(Pv) {
          var hv = Rv(this);
          if (hv !== vv) return hv;
          var Sv = this.abs(),
            ev = Sv.bitLength();
          if (ev <= 64) return xv(Sv, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var gv = Math.log(2) * ev.toJSNumber(), pv = Math.ceil(!0 === Pv ? 2 * Math.pow(gv, 2) : gv), dv = [], Nv = 0; Nv < pv; Nv++) dv.push(zv(Nv + 2));
          return xv(Sv, dv)
        }, lv.prototype.isPrime = Nv.prototype.isPrime = dv.prototype.isPrime, dv.prototype.isProbablePrime = function(Pv, hv) {
          var Sv = Rv(this);
          if (Sv !== vv) return Sv;
          for (var ev = this.abs(), gv = Pv === vv ? 5 : Pv, pv = [], dv = 0; dv < gv; dv++) pv.push(zv.randBetween(2, ev.minus(2), hv));
          return xv(ev, pv)
        }, lv.prototype.isProbablePrime = Nv.prototype.isProbablePrime = dv.prototype.isProbablePrime, dv.prototype.modInv = function(vv) {
          for (var Pv, hv, Sv, ev = zv.zero, gv = zv.one, pv = kv(vv), dv = this.abs(); !dv.isZero();) Pv = pv.divide(dv), hv = ev, Sv = pv, ev = gv, pv = dv, gv = hv.subtract(Pv.multiply(gv)), dv = Sv.subtract(Pv.multiply(dv));
          if (!pv.isUnit()) throw new Error(this.toString() + " and " + vv.toString() + " are not co-prime");
          return -1 === ev.compare(0) && (ev = ev.add(vv)), this.isNegative() ? ev.Re() : ev
        }, lv.prototype.modInv = Nv.prototype.modInv = dv.prototype.modInv, dv.prototype.next = function() {
          var vv = this.value;
          return this.sign ? jv(vv, 1, this.sign) : new dv(Gv(vv, 1), this.sign)
        }, Nv.prototype.next = function() {
          var vv = this.value;
          return vv + 1 < hv ? new Nv(vv + 1) : new dv(Sv, !1)
        }, lv.prototype.next = function() {
          return new lv(this.value + BigInt(1))
        }, dv.prototype.prev = function() {
          var vv = this.value;
          return this.sign ? new dv(Gv(vv, 1), !0) : jv(vv, 1, this.sign)
        }, Nv.prototype.prev = function() {
          var vv = this.value;
          return vv - 1 > -hv ? new Nv(vv - 1) : new dv(Sv, !0)
        }, lv.prototype.prev = function() {
          return new lv(this.value - BigInt(1))
        };
        for (var tv = [1]; 2 * tv[tv.length - 1] <= Pv;) tv.push(2 * tv[tv.length - 1]);
        var qv = tv.length,
          Iv = tv[qv - 1];

        function Qv(vv) {
          return Math.abs(vv) <= Pv
        }

        function Zv(vv, Pv, hv) {
          Pv = kv(Pv);
          for (var Sv = vv.isNegative(), ev = Pv.isNegative(), gv = Sv ? vv.not() : vv, pv = ev ? Pv.not() : Pv, dv = 0, Nv = 0, lv = null, Tv = null, Wv = []; !gv.isZero() || !pv.isZero();) dv = (lv = Vv(gv, Iv))[1].toJSNumber(), Sv && (dv = Iv - 1 - dv), Nv = (Tv = Vv(pv, Iv))[1].toJSNumber(), ev && (Nv = Iv - 1 - Nv), gv = lv[0], pv = Tv[0], Wv.push(hv(dv, Nv));
          for (var wv = 0 !== hv(Sv ? 1 : 0, ev ? 1 : 0) ? zv(-1) : zv(0), av = Wv.length - 1; av >= 0; av -= 1) wv = wv.multiply(Iv).add(zv(Wv[av]));
          return wv
        }
        dv.prototype.shiftLeft = function(vv) {
          var zv = kv(vv).toJSNumber();
          if (!Qv(zv)) throw new Error(String(zv) + " is too large for shifting.");
          if (zv < 0) return this.shiftRight(-zv);
          var Pv = this;
          if (Pv.isZero()) return Pv;
          for (; zv >= qv;) Pv = Pv.multiply(Iv), zv -= qv - 1;
          return Pv.multiply(tv[zv])
        }, lv.prototype.shiftLeft = Nv.prototype.shiftLeft = dv.prototype.shiftLeft, dv.prototype.shiftRight = function(vv) {
          var zv, Pv = kv(vv).toJSNumber();
          if (!Qv(Pv)) throw new Error(String(Pv) + " is too large for shifting.");
          if (Pv < 0) return this.shiftLeft(-Pv);
          for (var hv = this; Pv >= qv;) {
            if (hv.isZero() || hv.isNegative() && hv.isUnit()) return hv;
            hv = (zv = Vv(hv, Iv))[1].isNegative() ? zv[0].prev() : zv[0], Pv -= qv - 1
          }
          return (zv = Vv(hv, tv[Pv]))[1].isNegative() ? zv[0].prev() : zv[0]
        }, lv.prototype.shiftRight = Nv.prototype.shiftRight = dv.prototype.shiftRight, dv.prototype.not = function() {
          return this.Re().prev()
        }, lv.prototype.not = Nv.prototype.not = dv.prototype.not, dv.prototype.and = function(vv) {
          return Zv(this, vv, (function(vv, zv) {
            return vv & zv
          }))
        }, lv.prototype.and = Nv.prototype.and = dv.prototype.and, dv.prototype.or = function(vv) {
          return Zv(this, vv, (function(vv, zv) {
            return vv | zv
          }))
        }, lv.prototype.or = Nv.prototype.or = dv.prototype.or, dv.prototype.xor = function(vv) {
          return Zv(this, vv, (function(vv, zv) {
            return vv ^ zv
          }))
        }, lv.prototype.xor = Nv.prototype.xor = dv.prototype.xor;
        var Av = 1 << 30;

        function Lv(vv) {
          var zv = vv.value,
            hv = "number" === typeof zv ? zv | Av : "bigint" === typeof zv ? zv | BigInt(Av) : zv[0] + zv[1] * Pv | 1073758208;
          return hv & -hv
        }

        function Hv(vv, Pv) {
          if (Pv.compareTo(vv) <= 0) {
            var hv = Hv(vv, Pv.square(Pv)),
              Sv = hv.p,
              ev = hv.e,
              gv = Sv.multiply(Pv);
            return gv.compareTo(vv) <= 0 ? {
              p: gv,
              e: 2 * ev + 1
            } : {
              p: Sv,
              e: 2 * ev
            }
          }
          return {
            p: zv(1),
            e: 0
          }
        }

        function Mv(vv, zv) {
          return vv = kv(vv), zv = kv(zv), vv.greater(zv) ? vv : zv
        }

        function yv(vv, zv) {
          return vv = kv(vv), zv = kv(zv), vv.lesser(zv) ? vv : zv
        }

        function Bv(vv, zv) {
          if (vv = kv(vv).abs(), zv = kv(zv).abs(), vv.equals(zv)) return vv;
          if (vv.isZero()) return zv;
          if (zv.isZero()) return vv;
          for (var Pv, hv, Sv = pv[1]; vv.isEven() && zv.isEven();) Pv = yv(Lv(vv), Lv(zv)), vv = vv.divide(Pv), zv = zv.divide(Pv), Sv = Sv.multiply(Pv);
          for (; vv.isEven();) vv = vv.divide(Lv(vv));
          do {
            for (; zv.isEven();) zv = zv.divide(Lv(zv));
            vv.greater(zv) && (hv = zv, zv = vv, vv = hv), zv = zv.subtract(vv)
          } while (!zv.isZero());
          return Sv.isUnit() ? vv : vv.multiply(Sv)
        }
        dv.prototype.bitLength = function() {
          var vv = this;
          return vv.compareTo(zv(0)) < 0 && (vv = vv.Re().subtract(zv(1))), 0 === vv.compareTo(zv(0)) ? zv(0) : zv(Hv(vv, zv(2)).e).add(zv(1))
        }, lv.prototype.bitLength = Nv.prototype.bitLength = dv.prototype.bitLength;
        var Jv = function(vv, zv, Pv, hv) {
          Pv = Pv || ev, vv = String(vv), hv || (vv = vv.toLowerCase(), Pv = Pv.toLowerCase());
          var Sv, gv = vv.length,
            pv = Math.abs(zv),
            dv = {};
          for (Sv = 0; Sv < Pv.length; Sv++) dv[Pv[Sv]] = Sv;
          for (Sv = 0; Sv < gv; Sv++) {
            if ("-" !== (Tv = vv[Sv]) && (Tv in dv && dv[Tv] >= pv)) {
              if ("1" === Tv && 1 === pv) continue;
              throw new Error(Tv + " is not a valid digit in base " + zv + ".")
            }
          }
          zv = kv(zv);
          var Nv = [],
            lv = "-" === vv[0];
          for (Sv = lv ? 1 : 0; Sv < vv.length; Sv++) {
            var Tv;
            if ((Tv = vv[Sv]) in dv) Nv.push(kv(dv[Tv]));
            else {
              if ("<" !== Tv) throw new Error(Tv + " is not a valid character");
              var Wv = Sv;
              do {
                Sv++
              } while (">" !== vv[Sv] && Sv < vv.length);
              Nv.push(kv(vv.slice(Wv + 1, Sv)))
            }
          }
          return Ev(Nv, zv, lv)
        };

        function Ev(vv, zv, Pv) {
          var hv, Sv = pv[0],
            ev = pv[1];
          for (hv = vv.length - 1; hv >= 0; hv--) Sv = Sv.add(vv[hv].times(ev)), ev = ev.times(zv);
          return Pv ? Sv.Re() : Sv
        }

        function ov(vv, Pv) {
          if ((Pv = zv(Pv)).isZero()) {
            if (vv.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Pv.equals(-1)) {
            if (vv.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (vv.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-vv.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var hv = Array.apply(null, Array(vv.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return hv.unshift([1]), {
              value: [].concat.apply([], hv),
              isNegative: !1
            }
          }
          var Sv = !1;
          if (vv.isNegative() && Pv.isPositive() && (Sv = !0, vv = vv.abs()), Pv.isUnit()) return vv.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(vv.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Sv
          };
          for (var ev, gv = [], pv = vv; pv.isNegative() || pv.compareAbs(Pv) >= 0;) {
            ev = pv.divmod(Pv), pv = ev.quotient;
            var dv = ev.remainder;
            dv.isNegative() && (dv = Pv.minus(dv).abs(), pv = pv.next()), gv.push(dv.toJSNumber())
          }
          return gv.push(pv.toJSNumber()), {
            value: gv.reverse(),
            isNegative: Sv
          }
        }

        function bv(vv, zv, Pv) {
          var hv = ov(vv, zv);
          return (hv.isNegative ? "-" : "") + hv.value.map((function(vv) {
            return function(vv, zv) {
              return vv < (zv = zv || ev).length ? zv[vv] : "<" + vv + ">"
            }(vv, Pv)
          })).join("")
        }

        function rv(vv) {
          if (Tv(+vv)) {
            var zv = +vv;
            if (zv === Cv(zv)) return gv ? new lv(BigInt(zv)) : new Nv(zv);
            throw new Error("Invalid integer: " + vv)
          }
          var Pv = "-" === vv[0];
          Pv && (vv = vv.slice(1));
          var hv = vv.split(/e/i);
          if (hv.length > 2) throw new Error("Invalid integer: " + hv.join("e"));
          if (2 === hv.length) {
            var Sv = hv[1];
            if ("+" === Sv[0] && (Sv = Sv.slice(1)), (Sv = +Sv) !== Cv(Sv) || !Tv(Sv)) throw new Error("Invalid integer: " + Sv + " is not a valid exponent.");
            var ev = hv[0],
              pv = ev.indexOf(".");
            if (pv >= 0 && (Sv -= ev.length - pv - 1, ev = ev.slice(0, pv) + ev.slice(pv + 1)), Sv < 0) throw new Error("Cannot include negative exponent part for integers");
            vv = ev += new Array(Sv + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(vv)) throw new Error("Invalid integer: " + vv);
          if (gv) return new lv(BigInt(Pv ? "-" + vv : vv));
          for (var Wv = [], wv = vv.length, sv = wv - 7; wv > 0;) Wv.push(+vv.slice(sv, wv)), (sv -= 7) < 0 && (sv = 0), wv -= 7;
          return av(Wv), new dv(Wv, Pv)
        }

        function kv(vv) {
          return "number" === typeof vv ? function(vv) {
            if (gv) return new lv(BigInt(vv));
            if (Tv(vv)) {
              if (vv !== Cv(vv)) throw new Error(vv + " is not an integer.");
              return new Nv(vv)
            }
            return rv(vv.toString())
          }(vv) : "string" === typeof vv ? rv(vv) : "bigint" === typeof vv ? new lv(vv) : vv
        }
        dv.prototype.toArray = function(vv) {
          return ov(this, vv)
        }, Nv.prototype.toArray = function(vv) {
          return ov(this, vv)
        }, lv.prototype.toArray = function(vv) {
          return ov(this, vv)
        }, dv.prototype.toString = function(zv, Pv) {
          if (zv === vv && (zv = 10), 10 !== zv) return bv(this, zv, Pv);
          for (var hv, Sv = this.value, ev = Sv.length, gv = String(Sv[--ev]); --ev >= 0;) hv = String(Sv[ev]), gv += "0000000".slice(hv.length) + hv;
          return (this.sign ? "-" : "") + gv
        }, Nv.prototype.toString = function(zv, Pv) {
          return zv === vv && (zv = 10), 10 != zv ? bv(this, zv, Pv) : String(this.value)
        }, lv.prototype.toString = Nv.prototype.toString, lv.prototype.toJSON = dv.prototype.toJSON = Nv.prototype.toJSON = function() {
          return this.toString()
        }, dv.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, dv.prototype.toJSNumber = dv.prototype.valueOf, Nv.prototype.valueOf = function() {
          return this.value
        }, Nv.prototype.toJSNumber = Nv.prototype.valueOf, lv.prototype.valueOf = lv.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Xv = 0; Xv < 1e3; Xv++) pv[Xv] = kv(Xv), Xv > 0 && (pv[-Xv] = kv(-Xv));
        return pv.one = pv[1], pv.zero = pv[0], pv.minusOne = pv[-1], pv.max = Mv, pv.min = yv, pv.gcd = Bv, pv.lcm = function(vv, zv) {
          return vv = kv(vv).abs(), zv = kv(zv).abs(), vv.divide(Bv(vv, zv)).multiply(zv)
        }, pv.isInstance = function(vv) {
          return vv instanceof dv || vv instanceof Nv || vv instanceof lv
        }, pv.randBetween = function(vv, zv, hv) {
          vv = kv(vv), zv = kv(zv);
          var Sv = hv || Math.random,
            ev = yv(vv, zv),
            gv = Mv(vv, zv).subtract(ev).add(1);
          if (gv.isSmall) return ev.add(Math.floor(Sv() * gv));
          for (var dv = ov(gv, Pv).value, Nv = [], lv = !0, Tv = 0; Tv < dv.length; Tv++) {
            var Wv = lv ? dv[Tv] : Pv,
              wv = Cv(Sv() * Wv);
            Nv.push(wv), wv < Wv && (lv = !1)
          }
          return ev.add(pv.Evv(Nv, Pv, !1))
        }, pv.Evv = function(vv, zv, Pv) {
          return Ev(vv.map(kv), kv(zv || 10), Pv)
        }, pv
      }();
      vv.hasOwnProperty("exports") && (vv.exports = zv)
    }(cP);
    var GP = ev(cP.exports);

    function mP(vv, zv, Pv) {
      let hv = 0;
      for (let Sv = 0; Sv < Pv; Sv++) {
        const Pv = vv[zv + Sv];
        if (void 0 === Pv) break;
        hv += Pv * 16 ** Sv
      }
      return hv
    }

    function jP(vv) {
      const zv = [];
      for (let Pv = 0; Pv < vv.length; Pv++) {
        let hv = Number(vv[Pv]);
        for (let vv = 0; hv || vv < zv.length; vv++) hv += 10 * (zv[vv] || 0), zv[vv] = hv % 16, hv = (hv - zv[vv]) / 16
      }
      return zv
    }
    class fP {
      static fromString(vv) {
        return new fP(function(vv) {
          const zv = jP(vv),
            Pv = Array(4);
          for (let hv = 0; hv < 4; hv++) Pv[3 - hv] = mP(zv, 4 * hv, 4);
          return Pv
        }(vv), vv)
      }
      static fromBit(vv) {
        const zv = Array(4),
          Pv = Math.floor(vv / 16);
        for (let hv = 0; hv < 4; hv++) zv[3 - hv] = hv === Pv ? 1 << vv - 16 * Pv : 0;
        return new fP(zv)
      }
      constructor(vv, zv) {
        this.parts = vv, this.str = zv
      }
      and(vv) {
        let {
          parts: zv
        } = vv;
        return new fP(this.parts.map(((vv, Pv) => vv & zv[Pv])))
      }
      or(vv) {
        let {
          parts: zv
        } = vv;
        return new fP(this.parts.map(((vv, Pv) => vv | zv[Pv])))
      }
      xor(vv) {
        let {
          parts: zv
        } = vv;
        return new fP(this.parts.map(((vv, Pv) => vv ^ zv[Pv])))
      }
      not() {
        return new fP(this.parts.map((vv => ~vv)))
      }
      equals(vv) {
        let {
          parts: zv
        } = vv;
        return this.parts.every(((vv, Pv) => vv === zv[Pv]))
      }
      toString() {
        if (null != this.str) return this.str;
        const vv = new Array(16);
        return this.parts.forEach(((zv, Pv) => {
          const hv = jP(zv.toString());
          for (let Sv = 0; Sv < 4; Sv++) vv[Sv + 4 * Pv] = hv[3 - Sv] || 0
        })), this.str = GP.Evv(vv, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const FP = function() {
      try {
        return BigInt, !0
      } catch (vv) {
        return !1
      }
    }();
    FP && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const YP = {},
      nP = FP ? function(vv) {
        return BigInt(vv)
      } : function(vv) {
        return vv instanceof fP ? vv : ("number" === typeof vv && (vv = vv.toString()), null != YP[vv] || (YP[vv] = fP.fromString(vv)), YP[vv])
      },
      OP = nP(0),
      DP = FP ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OP)
      } : function() {
        let vv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OP;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP).and(vv)
      },
      KP = FP ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OP)
      } : function() {
        let vv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OP;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP).or(vv)
      },
      VP = FP ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OP)
      } : function() {
        let vv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OP;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP).xor(vv)
      },
      UP = FP ? function(vv, zv) {
        return vv === zv
      } : function(vv, zv) {
        return null == vv || null == zv ? vv == zv : vv.equals(zv)
      };
    var RP, xP, tP, qP, IP = {
      combine: function() {
        let vv = arguments.length <= 0 ? void 0 : arguments[0];
        for (let zv = 1; zv < arguments.length; zv++) vv = KP(vv, zv < 0 || arguments.length <= zv ? void 0 : arguments[zv]);
        return vv
      },
      add: function(vv, zv) {
        return zv === OP ? vv : KP(vv, zv)
      },
      remove: function(vv, zv) {
        return zv === OP ? vv : VP(vv, DP(vv, zv))
      },
      filter: DP,
      invert: FP ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OP).not()
      },
      has: function(vv, zv) {
        return UP(DP(vv, zv), zv)
      },
      hasAny: function(vv, zv) {
        return !UP(DP(vv, zv), OP)
      },
      equals: UP,
      deserialize: nP,
      getFlag: FP ? function(vv) {
        return BigInt(1) << BigInt(vv)
      } : function(vv) {
        return fP.fromBit(vv)
      }
    };
    ! function(vv) {
      vv[vv.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", vv[vv.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", vv[vv.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", vv[vv.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", vv[vv.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", vv[vv.RATELIMITED = 4002] = "RATELIMITED", vv[vv.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", vv[vv.INVALID_VERSION = 4004] = "INVALID_VERSION", vv[vv.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(RP || (RP = {})),
    function(vv) {
      vv[vv.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", vv[vv.INVALID_COMMAND = 4002] = "INVALID_COMMAND", vv[vv.INVALID_EVENT = 4004] = "INVALID_EVENT", vv[vv.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(xP || (xP = {})),
    function(vv) {
      vv.LANDSCAPE = "landscape", vv.PORTRAIT = "portrait"
    }(tP || (tP = {})),
    function(vv) {
      vv.MOBILE = "mobile", vv.DESKTOP = "desktop"
    }(qP || (qP = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: IP.getFlag(0),
      ADMINISTRATOR: IP.getFlag(3)
    });

    function QP(vv) {
      return wP((zv => {
        var Pv;
        const [hv] = null !== (Pv = Object.entries(vv).find((vv => {
          let [, Pv] = vv;
          return Pv === zv
        }))) && void 0 !== Pv ? Pv : [];
        return null != zv && void 0 === hv ? vv.UNHANDLED : zv
      }), tz().or(qz()))
    }
    const ZP = iP.object({
        image_url: iP.string()
      }),
      AP = iP.object({
        mediaUrl: iP.string().max(1024)
      }),
      LP = iP.object({
        access_token: iP.union([iP.string(), iP.null()]).optional()
      }),
      HP = iP.object({
        access_token: iP.string(),
        user: iP.object({
          username: iP.string(),
          discriminator: iP.string(),
          id: iP.string(),
          avatar: iP.union([iP.string(), iP.null()]).optional(),
          public_flags: iP.number(),
          global_name: iP.union([iP.string(), iP.null()]).optional()
        }),
        scopes: iP.array(function(vv) {
          const zv = Uz().transform((zv => {
            const Pv = vv.safeParse(zv);
            return Pv.success ? Pv.data : vv._def.defaultValue()
          }));
          return zv.overlayType = vv, zv
        }(iP.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(iP.literal(-1)).default(-1))),
        expires: iP.string(),
        application: iP.object({
          description: iP.string(),
          icon: iP.union([iP.string(), iP.null()]).optional(),
          id: iP.string(),
          rpc_origins: iP.array(iP.string()).optional(),
          name: iP.string()
        })
      }),
      MP = iP.object({
        participants: iP.array(iP.object({
          id: iP.string(),
          username: iP.string(),
          global_name: iP.union([iP.string(), iP.null()]).optional(),
          discriminator: iP.string(),
          avatar: iP.union([iP.string(), iP.null()]).optional(),
          flags: iP.number(),
          bot: iP.boolean(),
          avatar_decoration_data: iP.union([iP.object({
            asset: iP.string(),
            skuId: iP.string().optional()
          }), iP.null()]).optional(),
          premium_type: iP.union([iP.number(), iP.null()]).optional(),
          nickname: iP.string().optional()
        }))
      });
    var yP;
    ! function(vv) {
      vv.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", vv.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", vv.AUTHENTICATE = "AUTHENTICATE", vv.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(yP || (yP = {}));
    const BP = iP.object({}).optional().nullable(),
      JP = iP.void(),
      EP = {
        [yP.INITIATE_IMAGE_UPLOAD]: {
          request: JP,
          response: ZP
        },
        [yP.OPEN_SHARE_MOMENT_DIALOG]: {
          request: AP,
          response: BP
        },
        [yP.AUTHENTICATE]: {
          request: LP,
          response: HP
        },
        [yP.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: JP,
          response: MP
        }
      },
      oP = "DISPATCH";
    var bP;
    ! function(vv) {
      vv.AUTHORIZE = "AUTHORIZE", vv.AUTHENTICATE = "AUTHENTICATE", vv.GET_GUILDS = "GET_GUILDS", vv.GET_GUILD = "GET_GUILD", vv.GET_CHANNEL = "GET_CHANNEL", vv.GET_CHANNELS = "GET_CHANNELS", vv.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", vv.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", vv.SUBSCRIBE = "SUBSCRIBE", vv.UNSUBSCRIBE = "UNSUBSCRIBE", vv.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", vv.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", vv.SET_ACTIVITY = "SET_ACTIVITY", vv.GET_SKUS = "GET_SKUS", vv.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", vv.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", vv.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", vv.START_PURCHASE = "START_PURCHASE", vv.SET_CONFIG = "SET_CONFIG", vv.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", vv.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", vv.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", vv.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", vv.CAPTURE_LOG = "CAPTURE_LOG", vv.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", vv.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", vv.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", vv.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", vv.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", vv.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", vv.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(bP || (bP = {}));
    const rP = bz({
        cmd: tz(),
        data: Bz(),
        evt: Mz(),
        nonce: tz()
      }).passthrough(),
      kP = (QP(Object.assign(Object.assign({}, HP.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), bz({
        id: tz(),
        username: tz(),
        discriminator: tz(),
        global_name: tz().optional().nullable(),
        avatar: tz().optional().nullable(),
        avatar_decoration_data: bz({
          asset: tz(),
          sku_id: tz().optional()
        }).nullable(),
        bot: Zz(),
        flags: qz().optional().nullable(),
        premium_type: qz().optional().nullable()
      })),
      XP = bz({
        user: kP,
        nick: tz().optional().nullable(),
        roles: oz(tz()),
        joined_at: tz(),
        deaf: Zz(),
        mute: Zz()
      }),
      uP = bz({
        id: tz(),
        name: tz().optional().nullable(),
        roles: oz(tz()).optional().nullable(),
        user: kP.optional().nullable(),
        require_colons: Zz().optional().nullable(),
        managed: Zz().optional().nullable(),
        animated: Zz().optional().nullable(),
        available: Zz().optional().nullable()
      }),
      vh = bz({
        mute: Zz(),
        deaf: Zz(),
        self_mute: Zz(),
        self_deaf: Zz(),
        suppress: Zz()
      }),
      zh = bz({
        mute: Zz(),
        nick: tz(),
        user: kP,
        voice_state: vh,
        volume: qz()
      }),
      Ph = QP({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      hh = bz({
        name: tz(),
        type: qz(),
        url: tz().optional().nullable(),
        created_at: qz().optional().nullable(),
        timestamps: bz({
          start: qz(),
          end: qz()
        }).partial().optional().nullable(),
        application_id: tz().optional().nullable(),
        details: tz().optional().nullable(),
        state: tz().optional().nullable(),
        emoji: uP.optional().nullable(),
        party: bz({
          id: tz().optional().nullable(),
          size: oz(qz()).optional().nullable()
        }).optional().nullable(),
        assets: bz({
          large_image: tz().nullable(),
          large_text: tz().nullable(),
          small_image: tz().nullable(),
          small_text: tz().nullable()
        }).partial().optional().nullable(),
        secrets: bz({
          join: tz(),
          match: tz()
        }).partial().optional().nullable(),
        instance: Zz().optional().nullable(),
        flags: qz().optional().nullable()
      }),
      Sh = bz({
        id: tz(),
        type: QP({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: tz(),
        deny: tz()
      }),
      eh = {
        UNHANDLED: -1,
        DM: 1,
        GROUP_DM: 3,
        GUILD_TEXT: 0,
        GUILD_VOICE: 2,
        GUILD_CATEGORY: 4,
        GUILD_ANNOUNCEMENT: 5,
        GUILD_STORE: 6,
        ANNOUNCEMENT_THREAD: 10,
        PUBLIC_THREAD: 11,
        PRIVATE_THREAD: 12,
        GUILD_STAGE_VOICE: 13,
        GUILD_DIRECTORY: 14,
        GUILD_FORUM: 15
      },
      gh = bz({
        id: tz(),
        type: QP(eh),
        guild_id: tz().optional().nullable(),
        position: qz().optional().nullable(),
        permission_overwrites: oz(Sh).optional().nullable(),
        name: tz().optional().nullable(),
        topic: tz().optional().nullable(),
        nsfw: Zz().optional().nullable(),
        last_message_id: tz().optional().nullable(),
        bitrate: qz().optional().nullable(),
        user_limit: qz().optional().nullable(),
        rate_limit_per_user: qz().optional().nullable(),
        recipients: oz(kP).optional().nullable(),
        icon: tz().optional().nullable(),
        owner_id: tz().optional().nullable(),
        application_id: tz().optional().nullable(),
        parent_id: tz().optional().nullable(),
        last_pin_timestamp: tz().optional().nullable()
      }),
      ph = bz({
        user: kP,
        guild_id: tz(),
        status: Ph,
        activities: oz(hh),
        client_status: bz({
          desktop: Ph,
          mobile: Ph,
          web: Ph
        }).partial()
      }),
      dh = bz({
        id: tz(),
        name: tz(),
        color: qz(),
        hoist: Zz(),
        position: qz(),
        permissions: tz(),
        managed: Zz(),
        mentionable: Zz()
      }),
      Nh = (bz({
        id: tz(),
        name: tz(),
        owner_id: tz(),
        icon: tz().nullable(),
        icon_hash: tz().optional().nullable(),
        splash: tz().nullable(),
        discovery_splash: tz().nullable(),
        owner: Zz().optional().nullable(),
        permissions: tz().optional().nullable(),
        region: tz(),
        afk_channel_id: tz().nullable(),
        afk_timeout: qz(),
        widget_enabled: Zz().optional().nullable(),
        widget_channel_id: tz().optional().nullable(),
        verification_level: qz(),
        default_message_notifications: qz(),
        explicit_content_filter: qz(),
        roles: oz(dh),
        emojis: oz(uP),
        features: oz(tz()),
        mfa_level: qz(),
        application_id: tz().nullable(),
        system_channel_id: tz().nullable(),
        system_channel_flags: qz(),
        rules_channel_id: tz().nullable(),
        joined_at: tz().optional().nullable(),
        large: Zz().optional().nullable(),
        unavailable: Zz().optional().nullable(),
        member_count: qz().optional().nullable(),
        voice_states: oz(vh).optional().nullable(),
        members: oz(XP).optional().nullable(),
        channels: oz(gh).optional().nullable(),
        presences: oz(ph).optional().nullable(),
        max_presences: qz().optional().nullable(),
        max_members: qz().optional().nullable(),
        vanity_url_code: tz().nullable(),
        description: tz().nullable(),
        banner: tz().nullable(),
        premium_tier: qz(),
        premium_subscription_count: qz().optional().nullable(),
        preferred_locale: tz(),
        public_updates_channel_id: tz().nullable(),
        max_video_channel_users: qz().optional().nullable(),
        approximate_member_count: qz().optional().nullable(),
        approximate_presence_count: qz().optional().nullable()
      }), bz({
        id: tz(),
        guild_id: tz(),
        type: qz(),
        name: tz()
      })),
      lh = bz({
        id: tz(),
        filename: tz(),
        size: qz(),
        url: tz(),
        proxy_url: tz(),
        height: qz().optional().nullable(),
        width: qz().optional().nullable()
      }),
      Th = bz({
        text: tz(),
        icon_url: tz().optional().nullable(),
        proxy_icon_url: tz().optional().nullable()
      }),
      Wh = bz({
        url: tz().optional().nullable(),
        proxy_url: tz().optional().nullable(),
        height: qz().optional().nullable(),
        width: qz().optional().nullable()
      }),
      wh = Wh.omit({
        proxy_url: !0
      }),
      ah = bz({
        name: tz().optional().nullable(),
        url: tz().optional().nullable()
      }),
      sh = bz({
        name: tz().optional().nullable(),
        url: tz().optional().nullable(),
        icon_url: tz().optional().nullable(),
        proxy_icon_url: tz().optional().nullable()
      }),
      Ch = bz({
        name: tz(),
        value: tz(),
        inline: Zz()
      }),
      ih = bz({
        title: tz().optional().nullable(),
        type: tz().optional().nullable(),
        description: tz().optional().nullable(),
        url: tz().optional().nullable(),
        timestamp: tz().optional().nullable(),
        color: qz().optional().nullable(),
        footer: Th.optional().nullable(),
        image: Wh.optional().nullable(),
        thumbnail: Wh.optional().nullable(),
        video: wh.optional().nullable(),
        provider: ah.optional().nullable(),
        author: sh.optional().nullable(),
        fields: oz(Ch).optional().nullable()
      }),
      ch = bz({
        count: qz(),
        me: Zz(),
        emoji: uP
      }),
      Gh = bz({
        type: qz(),
        party_id: tz().optional().nullable()
      }),
      mh = bz({
        id: tz(),
        cover_image: tz().optional().nullable(),
        description: tz(),
        icon: tz().optional().nullable(),
        name: tz()
      }),
      jh = bz({
        message_id: tz().optional().nullable(),
        channel_id: tz().optional().nullable(),
        guild_id: tz().optional().nullable()
      }),
      fh = bz({
        id: tz(),
        channel_id: tz(),
        guild_id: tz().optional().nullable(),
        author: kP.optional().nullable(),
        member: XP.optional().nullable(),
        content: tz(),
        timestamp: tz(),
        edited_timestamp: tz().optional().nullable(),
        tts: Zz(),
        mention_everyone: Zz(),
        mentions: oz(kP),
        mention_roles: oz(tz()),
        mention_channels: oz(Nh),
        attachments: oz(lh),
        embeds: oz(ih),
        reactions: oz(ch).optional().nullable(),
        nonce: kz([tz(), qz()]).optional().nullable(),
        pinned: Zz(),
        webhook_id: tz().optional().nullable(),
        type: qz(),
        activity: Gh.optional().nullable(),
        application: mh.optional().nullable(),
        message_reference: jh.optional().nullable(),
        flags: qz().optional().nullable(),
        stickers: oz(Bz()).optional().nullable(),
        referenced_message: Bz().optional().nullable()
      }),
      Fh = bz({
        id: tz(),
        name: tz()
      }),
      Yh = bz({
        type: QP({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: qz(),
        name: tz()
      }),
      nh = bz({
        type: QP({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Zz(),
        threshold: qz(),
        shortcut: oz(Yh),
        delay: qz()
      }),
      Oh = bz({
        device_id: tz(),
        volume: qz(),
        available_devices: oz(Fh)
      }),
      Dh = (bz({
        type: QP({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: tz(),
        vendor: bz({
          name: tz(),
          url: tz()
        }),
        model: bz({
          name: tz(),
          url: tz()
        }),
        related: oz(tz()),
        echo_cancellation: Zz().optional().nullable(),
        noise_suppression: Zz().optional().nullable(),
        automatic_gain_control: Zz().optional().nullable(),
        hardware_mute: Zz().optional().nullable()
      }), bz({
        id: tz(),
        name: tz(),
        type: QP({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: bz({
          amount: qz(),
          currency: tz()
        }),
        application_id: tz(),
        flags: qz(),
        release_date: tz().nullable()
      })),
      Kh = bz({
        id: tz(),
        sku_id: tz(),
        application_id: tz(),
        user_id: tz(),
        gift_code_flags: qz(),
        type: QP({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: tz().optional().nullable(),
        branches: oz(tz()).optional().nullable(),
        starts_at: tz().optional().nullable(),
        ends_at: tz().optional().nullable(),
        parent_id: tz().optional().nullable(),
        consumed: Zz().optional().nullable(),
        deleted: Zz().optional().nullable(),
        gift_code_batch_id: tz().optional().nullable()
      }),
      Vh = (QP({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), QP({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Uh = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      Rh = (QP(Uh), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      xh = (QP(Rh), "ERROR");
    var th;
    ! function(vv) {
      vv.READY = "READY", vv.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", vv.SPEAKING_START = "SPEAKING_START", vv.SPEAKING_STOP = "SPEAKING_STOP", vv.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", vv.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", vv.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", vv.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", vv.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", vv.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(th || (th = {}));
    const qh = rP.extend({
        evt: dP(th),
        nonce: tz().nullable(),
        cmd: gP(oP),
        data: bz({}).passthrough()
      }),
      Ih = rP.extend({
        evt: gP(xh),
        data: bz({
          code: qz(),
          message: tz().optional()
        }).passthrough(),
        cmd: dP(bP),
        nonce: tz().nullable()
      }),
      Qh = qh.extend({
        evt: tz()
      }),
      Zh = kz([qh, Qh, Ih]);
    const Ah = {
      [th.READY]: {
        payload: qh.extend({
          evt: gP(th.READY),
          data: bz({
            v: qz(),
            config: bz({
              cdn_host: tz().optional(),
              api_endpoint: tz(),
              environment: tz()
            }),
            user: bz({
              id: tz(),
              username: tz(),
              discriminator: tz(),
              avatar: tz().optional()
            }).optional()
          })
        })
      },
      [th.VOICE_STATE_UPDATE]: {
        payload: qh.extend({
          evt: gP(th.VOICE_STATE_UPDATE),
          data: zh
        }),
        subscribeArgs: bz({
          channel_id: tz()
        })
      },
      [th.SPEAKING_START]: {
        payload: qh.extend({
          evt: gP(th.SPEAKING_START),
          data: bz({
            lobby_id: tz().optional(),
            channel_id: tz().optional(),
            user_id: tz()
          })
        }),
        subscribeArgs: bz({
          lobby_id: tz().nullable().optional(),
          channel_id: tz().nullable().optional()
        })
      },
      [th.SPEAKING_STOP]: {
        payload: qh.extend({
          evt: gP(th.SPEAKING_STOP),
          data: bz({
            lobby_id: tz().optional(),
            channel_id: tz().optional(),
            user_id: tz()
          })
        }),
        subscribeArgs: bz({
          lobby_id: tz().nullable().optional(),
          channel_id: tz().nullable().optional()
        })
      },
      [th.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: qh.extend({
          evt: gP(th.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: bz({
            layout_mode: QP(Rh)
          })
        })
      },
      [th.ORIENTATION_UPDATE]: {
        payload: qh.extend({
          evt: gP(th.ORIENTATION_UPDATE),
          data: bz({
            screen_orientation: QP(Uh),
            orientation: dP(tP)
          })
        })
      },
      [th.CURRENT_USER_UPDATE]: {
        payload: qh.extend({
          evt: gP(th.CURRENT_USER_UPDATE),
          data: kP
        })
      },
      [th.ENTITLEMENT_CREATE]: {
        payload: qh.extend({
          evt: gP(th.ENTITLEMENT_CREATE),
          data: bz({
            entitlement: Kh
          })
        })
      },
      [th.THERMAL_STATE_UPDATE]: {
        payload: qh.extend({
          evt: gP(th.THERMAL_STATE_UPDATE),
          data: bz({
            thermal_state: Vh
          })
        })
      },
      [th.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: qh.extend({
          evt: gP(th.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: bz({
            participants: MP.shape.participants
          })
        })
      }
    };
    const Lh = bz({}).nullable(),
      Hh = bz({
        code: tz()
      }),
      Mh = bz({
        guilds: oz(bz({
          id: tz(),
          name: tz()
        }))
      }),
      yh = bz({
        id: tz(),
        name: tz(),
        icon_url: tz().optional(),
        members: oz(XP)
      }),
      Bh = bz({
        id: tz(),
        type: QP(eh),
        guild_id: tz().optional().nullable(),
        name: tz().optional().nullable(),
        topic: tz().optional().nullable(),
        bitrate: qz().optional().nullable(),
        user_limit: qz().optional().nullable(),
        position: qz().optional().nullable(),
        voice_states: oz(zh),
        messages: oz(fh)
      }),
      Jh = bz({
        channels: oz(gh)
      }),
      Eh = (Bh.nullable(), Bh.nullable()),
      oh = Bh.nullable(),
      bh = (bz({
        input: Oh,
        output: Oh,
        mode: nh,
        automatic_gain_control: Zz(),
        echo_cancellation: Zz(),
        noise_suppression: Zz(),
        qos: Zz(),
        silence_warning: Zz(),
        deaf: Zz(),
        mute: Zz()
      }), bz({
        evt: tz()
      })),
      rh = bz({
        shortcut: Yh
      }),
      kh = hh,
      Xh = bz({
        skus: oz(Dh)
      }),
      uh = bz({
        entitlements: oz(Kh)
      }),
      vS = oz(Kh).nullable(),
      zS = bz({
        use_interactive_pip: Zz()
      }),
      PS = bz({
        locale: tz()
      }),
      hS = bz({
        enabled: Zz()
      }),
      SS = bz({
        permissions: Qz().or(tz())
      }),
      eS = bz({
        iosKeyboardResizesView: TP(Zz())
      }),
      gS = rP.extend({
        cmd: dP(bP),
        evt: Mz()
      });

    function pS(vv) {
      let {
        cmd: zv,
        data: Pv
      } = vv;
      switch (zv) {
        case bP.AUTHORIZE:
          return Hh.parse(Pv);
        case bP.CAPTURE_SHORTCUT:
          return rh.parse(Pv);
        case bP.ENCOURAGE_HW_ACCELERATION:
          return hS.parse(Pv);
        case bP.GET_CHANNEL:
          return Bh.parse(Pv);
        case bP.GET_CHANNELS:
          return Jh.parse(Pv);
        case bP.GET_CHANNEL_PERMISSIONS:
          return SS.parse(Pv);
        case bP.GET_GUILD:
          return yh.parse(Pv);
        case bP.GET_GUILDS:
          return Mh.parse(Pv);
        case bP.GET_PLATFORM_BEHAVIORS:
          return eS.parse(Pv);
        case bP.GET_CHANNEL:
          return Bh.parse(Pv);
        case bP.SELECT_TEXT_CHANNEL:
          return oh.parse(Pv);
        case bP.SELECT_VOICE_CHANNEL:
          return Eh.parse(Pv);
        case bP.SET_ACTIVITY:
          return kh.parse(Pv);
        case bP.GET_SKUS_EMBEDDED:
          return Xh.parse(Pv);
        case bP.GET_ENTITLEMENTS_EMBEDDED:
          return uh.parse(Pv);
        case bP.SET_CONFIG:
          return zS.parse(Pv);
        case bP.START_PURCHASE:
          return vS.parse(Pv);
        case bP.SUBSCRIBE:
        case bP.UNSUBSCRIBE:
          return bh.parse(Pv);
        case bP.USER_SETTINGS_GET_LOCALE:
          return PS.parse(Pv);
        case bP.OPEN_EXTERNAL_LINK:
        case bP.SET_ORIENTATION_LOCK_STATE:
        case bP.SET_CERTIFIED_DEVICES:
        case bP.SEND_ANALYTICS_EVENT:
        case bP.OPEN_INVITE_DIALOG:
        case bP.CAPTURE_LOG:
        case bP.GET_SKUS:
        case bP.GET_ENTITLEMENTS:
          return Lh.parse(Pv);
        case bP.AUTHENTICATE:
        case bP.INITIATE_IMAGE_UPLOAD:
        case bP.OPEN_SHARE_MOMENT_DIALOG:
        case bP.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: vv
          } = EP[zv];
          return vv.parse(Pv);
        default:
          ! function(vv, zv) {
            throw zv
          }(0, new Error(`Unrecognized command ${zv}`))
      }
    }
    bz({
      frame_id: tz(),
      platform: dP(qP).optional().nullable()
    }), bz({
      v: gP(1),
      encoding: gP("json").optional(),
      client_id: tz(),
      frame_id: tz()
    });
    const dS = bz({
        code: qz(),
        message: tz().optional()
      }),
      NS = bz({
        evt: tz().nullable(),
        nonce: tz().nullable(),
        data: Bz().nullable(),
        cmd: tz()
      }).passthrough();

    function lS(vv) {
      const zv = NS.parse(vv);
      return null != zv.evt ? zv.evt === xh ? Ih.parse(zv) : function(vv) {
        const zv = vv.evt;
        if (!(zv in th)) throw new Error(`Unrecognized event type ${vv.evt}`);
        return Ah[zv].payload.parse(vv)
      }(Zh.parse(zv)) : function(vv) {
        return Object.assign(Object.assign({}, vv), {
          data: pS(vv)
        })
      }(gS.passthrough().parse(zv))
    }

    function TS(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Sv = rP.extend({
        cmd: gP(zv),
        data: Pv
      });
      return async Pv => {
        const ev = await vv({
          cmd: zv,
          args: Pv,
          transfer: hv(Pv)
        });
        return Sv.parse(ev).data
      }
    }

    function WS(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Pv = EP[vv].response,
        hv = rP.extend({
          cmd: gP(vv),
          data: Pv
        });
      return Pv => async Sv => {
        const ev = await Pv({
          cmd: vv,
          args: Sv,
          transfer: zv(Sv)
        });
        return hv.parse(ev).data
      }
    }
    const wS = WS(yP.AUTHENTICATE),
      aS = vv => TS(vv, bP.AUTHORIZE, Hh),
      sS = vv => TS(vv, bP.CAPTURE_LOG, Lh),
      CS = vv => TS(vv, bP.ENCOURAGE_HW_ACCELERATION, hS),
      iS = vv => TS(vv, bP.GET_ENTITLEMENTS_EMBEDDED, uh),
      cS = vv => TS(vv, bP.GET_SKUS_EMBEDDED, Xh),
      GS = vv => TS(vv, bP.GET_CHANNEL_PERMISSIONS, SS),
      mS = vv => TS(vv, bP.GET_PLATFORM_BEHAVIORS, eS),
      jS = vv => TS(vv, bP.OPEN_EXTERNAL_LINK, Lh),
      fS = vv => TS(vv, bP.OPEN_INVITE_DIALOG, Lh),
      FS = WS(yP.OPEN_SHARE_MOMENT_DIALOG);
    hh.HW({
      state: !0,
      details: !0,
      timestamps: !0,
      assets: !0,
      party: !0,
      secrets: !0,
      buttons: !0,
      instance: !0,
      supported_platforms: !0,
      type: !0
    }).extend({
      type: hh.shape.type.optional(),
      instance: hh.shape.instance.optional()
    }).nullable();
    const YS = vv => TS(vv, bP.SET_ACTIVITY, kh),
      nS = vv => TS(vv, bP.SET_CONFIG, zS);
    const OS = vv => ({
        lock_state: vv.lock_state,
        picture_in_picture_lock_state: vv.picture_in_picture_lock_state
      }),
      DS = vv => function(vv) {
        let {
          sendCommand: zv,
          cmd: Pv,
          response: hv,
          fallbackTransform: Sv,
          transferTransform: ev = () => {}
        } = vv;
        const gv = rP.extend({
          cmd: gP(Pv),
          data: hv
        });
        return async vv => {
          try {
            const hv = await zv({
              cmd: Pv,
              args: vv,
              transfer: ev(vv)
            });
            return gv.parse(hv).data
          } catch (hv) {
            if (hv.code === xP.INVALID_PAYLOAD) {
              const hv = Sv(vv),
                pv = await zv({
                  cmd: Pv,
                  args: hv,
                  transfer: ev(hv)
                });
              return gv.parse(pv).data
            }
            throw hv
          }
        }
      }({
        sendCommand: vv,
        cmd: bP.SET_ORIENTATION_LOCK_STATE,
        response: Lh,
        fallbackTransform: OS
      }),
      KS = vv => TS(vv, bP.START_PURCHASE, vS),
      VS = vv => TS(vv, bP.USER_SETTINGS_GET_LOCALE, PS),
      US = WS(yP.INITIATE_IMAGE_UPLOAD),
      RS = vv => TS(vv, bP.GET_CHANNEL, Bh),
      xS = WS(yP.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var tS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function qS(vv) {
      return "string" === typeof vv && tS.test(vv)
    }
    for (var IS = [], QS = 0; QS < 256; ++QS) IS.push((QS + 256).toString(16).substr(1));

    function ZS(vv) {
      var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = (IS[vv[zv + 0]] + IS[vv[zv + 1]] + IS[vv[zv + 2]] + IS[vv[zv + 3]] + "-" + IS[vv[zv + 4]] + IS[vv[zv + 5]] + "-" + IS[vv[zv + 6]] + IS[vv[zv + 7]] + "-" + IS[vv[zv + 8]] + IS[vv[zv + 9]] + "-" + IS[vv[zv + 10]] + IS[vv[zv + 11]] + IS[vv[zv + 12]] + IS[vv[zv + 13]] + IS[vv[zv + 14]] + IS[vv[zv + 15]]).toLowerCase();
      if (!qS(Pv)) throw TypeError("Stringified UUID is invalid");
      return Pv
    }
    var AS;

    function LS(vv, zv, Pv) {
      function hv(vv, hv, Sv, ev) {
        if ("string" === typeof vv && (vv = function(vv) {
            vv = unescape(encodeURIComponent(vv));
            for (var zv = [], Pv = 0; Pv < vv.length; ++Pv) zv.push(vv.charCodeAt(Pv));
            return zv
          }(vv)), "string" === typeof hv && (hv = function(vv) {
            if (!qS(vv)) throw TypeError("Invalid UUID");
            var zv, Pv = new Uint8Array(16);
            return Pv[0] = (zv = parseInt(vv.slice(0, 8), 16)) >>> 24, Pv[1] = zv >>> 16 & 255, Pv[2] = zv >>> 8 & 255, Pv[3] = 255 & zv, Pv[4] = (zv = parseInt(vv.slice(9, 13), 16)) >>> 8, Pv[5] = 255 & zv, Pv[6] = (zv = parseInt(vv.slice(14, 18), 16)) >>> 8, Pv[7] = 255 & zv, Pv[8] = (zv = parseInt(vv.slice(19, 23), 16)) >>> 8, Pv[9] = 255 & zv, Pv[10] = (zv = parseInt(vv.slice(24, 36), 16)) / 1099511627776 & 255, Pv[11] = zv / 4294967296 & 255, Pv[12] = zv >>> 24 & 255, Pv[13] = zv >>> 16 & 255, Pv[14] = zv >>> 8 & 255, Pv[15] = 255 & zv, Pv
          }(hv)), 16 !== hv.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var gv = new Uint8Array(16 + vv.length);
        if (gv.set(hv), gv.set(vv, hv.length), (gv = Pv(gv))[6] = 15 & gv[6] | zv, gv[8] = 63 & gv[8] | 128, Sv) {
          ev = ev || 0;
          for (var pv = 0; pv < 16; ++pv) Sv[ev + pv] = gv[pv];
          return Sv
        }
        return ZS(gv)
      }
      try {
        hv.name = vv
      } catch (Sv) {}
      return hv.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", hv.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", hv
    }

    function HS(vv) {
      return 14 + (vv + 64 >>> 9 << 4) + 1
    }

    function MS(vv, zv) {
      var Pv = (65535 & vv) + (65535 & zv);
      return (vv >> 16) + (zv >> 16) + (Pv >> 16) << 16 | 65535 & Pv
    }

    function yS(vv, zv, Pv, hv, Sv, ev) {
      return MS((gv = MS(MS(zv, vv), MS(hv, ev))) << (pv = Sv) | gv >>> 32 - pv, Pv);
      var gv, pv
    }

    function BS(vv, zv, Pv, hv, Sv, ev, gv) {
      return yS(zv & Pv | ~zv & hv, vv, zv, Sv, ev, gv)
    }

    function JS(vv, zv, Pv, hv, Sv, ev, gv) {
      return yS(zv & hv | Pv & ~hv, vv, zv, Sv, ev, gv)
    }

    function ES(vv, zv, Pv, hv, Sv, ev, gv) {
      return yS(zv ^ Pv ^ hv, vv, zv, Sv, ev, gv)
    }

    function oS(vv, zv, Pv, hv, Sv, ev, gv) {
      return yS(Pv ^ (zv | ~hv), vv, zv, Sv, ev, gv)
    }
    LS("v3", 48, (function(vv) {
      if ("string" === typeof vv) {
        var zv = unescape(encodeURIComponent(vv));
        vv = new Uint8Array(zv.length);
        for (var Pv = 0; Pv < zv.length; ++Pv) vv[Pv] = zv.charCodeAt(Pv)
      }
      return function(vv) {
        for (var zv = [], Pv = 32 * vv.length, hv = "0123456789abcdef", Sv = 0; Sv < Pv; Sv += 8) {
          var ev = vv[Sv >> 5] >>> Sv % 32 & 255,
            gv = parseInt(hv.charAt(ev >>> 4 & 15) + hv.charAt(15 & ev), 16);
          zv.push(gv)
        }
        return zv
      }(function(vv, zv) {
        vv[zv >> 5] |= 128 << zv % 32, vv[HS(zv) - 1] = zv;
        for (var Pv = 1732584193, hv = -271733879, Sv = -1732584194, ev = 271733878, gv = 0; gv < vv.length; gv += 16) {
          var pv = Pv,
            dv = hv,
            Nv = Sv,
            lv = ev;
          Pv = BS(Pv, hv, Sv, ev, vv[gv], 7, -680876936), ev = BS(ev, Pv, hv, Sv, vv[gv + 1], 12, -389564586), Sv = BS(Sv, ev, Pv, hv, vv[gv + 2], 17, 606105819), hv = BS(hv, Sv, ev, Pv, vv[gv + 3], 22, -1044525330), Pv = BS(Pv, hv, Sv, ev, vv[gv + 4], 7, -176418897), ev = BS(ev, Pv, hv, Sv, vv[gv + 5], 12, 1200080426), Sv = BS(Sv, ev, Pv, hv, vv[gv + 6], 17, -1473231341), hv = BS(hv, Sv, ev, Pv, vv[gv + 7], 22, -45705983), Pv = BS(Pv, hv, Sv, ev, vv[gv + 8], 7, 1770035416), ev = BS(ev, Pv, hv, Sv, vv[gv + 9], 12, -1958414417), Sv = BS(Sv, ev, Pv, hv, vv[gv + 10], 17, -42063), hv = BS(hv, Sv, ev, Pv, vv[gv + 11], 22, -1990404162), Pv = BS(Pv, hv, Sv, ev, vv[gv + 12], 7, 1804603682), ev = BS(ev, Pv, hv, Sv, vv[gv + 13], 12, -40341101), Sv = BS(Sv, ev, Pv, hv, vv[gv + 14], 17, -1502002290), Pv = JS(Pv, hv = BS(hv, Sv, ev, Pv, vv[gv + 15], 22, 1236535329), Sv, ev, vv[gv + 1], 5, -165796510), ev = JS(ev, Pv, hv, Sv, vv[gv + 6], 9, -1069501632), Sv = JS(Sv, ev, Pv, hv, vv[gv + 11], 14, 643717713), hv = JS(hv, Sv, ev, Pv, vv[gv], 20, -373897302), Pv = JS(Pv, hv, Sv, ev, vv[gv + 5], 5, -701558691), ev = JS(ev, Pv, hv, Sv, vv[gv + 10], 9, 38016083), Sv = JS(Sv, ev, Pv, hv, vv[gv + 15], 14, -660478335), hv = JS(hv, Sv, ev, Pv, vv[gv + 4], 20, -405537848), Pv = JS(Pv, hv, Sv, ev, vv[gv + 9], 5, 568446438), ev = JS(ev, Pv, hv, Sv, vv[gv + 14], 9, -1019803690), Sv = JS(Sv, ev, Pv, hv, vv[gv + 3], 14, -187363961), hv = JS(hv, Sv, ev, Pv, vv[gv + 8], 20, 1163531501), Pv = JS(Pv, hv, Sv, ev, vv[gv + 13], 5, -1444681467), ev = JS(ev, Pv, hv, Sv, vv[gv + 2], 9, -51403784), Sv = JS(Sv, ev, Pv, hv, vv[gv + 7], 14, 1735328473), Pv = ES(Pv, hv = JS(hv, Sv, ev, Pv, vv[gv + 12], 20, -1926607734), Sv, ev, vv[gv + 5], 4, -378558), ev = ES(ev, Pv, hv, Sv, vv[gv + 8], 11, -2022574463), Sv = ES(Sv, ev, Pv, hv, vv[gv + 11], 16, 1839030562), hv = ES(hv, Sv, ev, Pv, vv[gv + 14], 23, -35309556), Pv = ES(Pv, hv, Sv, ev, vv[gv + 1], 4, -1530992060), ev = ES(ev, Pv, hv, Sv, vv[gv + 4], 11, 1272893353), Sv = ES(Sv, ev, Pv, hv, vv[gv + 7], 16, -155497632), hv = ES(hv, Sv, ev, Pv, vv[gv + 10], 23, -1094730640), Pv = ES(Pv, hv, Sv, ev, vv[gv + 13], 4, 681279174), ev = ES(ev, Pv, hv, Sv, vv[gv], 11, -358537222), Sv = ES(Sv, ev, Pv, hv, vv[gv + 3], 16, -722521979), hv = ES(hv, Sv, ev, Pv, vv[gv + 6], 23, 76029189), Pv = ES(Pv, hv, Sv, ev, vv[gv + 9], 4, -640364487), ev = ES(ev, Pv, hv, Sv, vv[gv + 12], 11, -421815835), Sv = ES(Sv, ev, Pv, hv, vv[gv + 15], 16, 530742520), Pv = oS(Pv, hv = ES(hv, Sv, ev, Pv, vv[gv + 2], 23, -995338651), Sv, ev, vv[gv], 6, -198630844), ev = oS(ev, Pv, hv, Sv, vv[gv + 7], 10, 1126891415), Sv = oS(Sv, ev, Pv, hv, vv[gv + 14], 15, -1416354905), hv = oS(hv, Sv, ev, Pv, vv[gv + 5], 21, -57434055), Pv = oS(Pv, hv, Sv, ev, vv[gv + 12], 6, 1700485571), ev = oS(ev, Pv, hv, Sv, vv[gv + 3], 10, -1894986606), Sv = oS(Sv, ev, Pv, hv, vv[gv + 10], 15, -1051523), hv = oS(hv, Sv, ev, Pv, vv[gv + 1], 21, -2054922799), Pv = oS(Pv, hv, Sv, ev, vv[gv + 8], 6, 1873313359), ev = oS(ev, Pv, hv, Sv, vv[gv + 15], 10, -30611744), Sv = oS(Sv, ev, Pv, hv, vv[gv + 6], 15, -1560198380), hv = oS(hv, Sv, ev, Pv, vv[gv + 13], 21, 1309151649), Pv = oS(Pv, hv, Sv, ev, vv[gv + 4], 6, -145523070), ev = oS(ev, Pv, hv, Sv, vv[gv + 11], 10, -1120210379), Sv = oS(Sv, ev, Pv, hv, vv[gv + 2], 15, 718787259), hv = oS(hv, Sv, ev, Pv, vv[gv + 9], 21, -343485551), Pv = MS(Pv, pv), hv = MS(hv, dv), Sv = MS(Sv, Nv), ev = MS(ev, lv)
        }
        return [Pv, hv, Sv, ev]
      }(function(vv) {
        if (0 === vv.length) return [];
        for (var zv = 8 * vv.length, Pv = new Uint32Array(HS(zv)), hv = 0; hv < zv; hv += 8) Pv[hv >> 5] |= (255 & vv[hv / 8]) << hv % 32;
        return Pv
      }(vv), 8 * vv.length))
    }));
    var bS = new Uint8Array(16);

    function rS() {
      if (!AS && !(AS = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return AS(bS)
    }

    function kS(vv, zv, Pv) {
      var hv = (vv = vv || {}).random || (vv.rng || rS)();
      if (hv[6] = 15 & hv[6] | 64, hv[8] = 63 & hv[8] | 128, zv) {
        Pv = Pv || 0;
        for (var Sv = 0; Sv < 16; ++Sv) zv[Pv + Sv] = hv[Sv];
        return zv
      }
      return ZS(hv)
    }

    function XS(vv, zv, Pv, hv) {
      switch (vv) {
        case 0:
          return zv & Pv ^ ~zv & hv;
        case 1:
        case 3:
          return zv ^ Pv ^ hv;
        case 2:
          return zv & Pv ^ zv & hv ^ Pv & hv
      }
    }

    function uS(vv, zv) {
      return vv << zv | vv >>> 32 - zv
    }
    LS("v5", 80, (function(vv) {
      var zv = [1518500249, 1859775393, 2400959708, 3395469782],
        Pv = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof vv) {
        var hv = unescape(encodeURIComponent(vv));
        vv = [];
        for (var Sv = 0; Sv < hv.length; ++Sv) vv.push(hv.charCodeAt(Sv))
      } else Array.isArray(vv) || (vv = Array.prototype.slice.call(vv));
      vv.push(128);
      for (var ev = vv.length / 4 + 2, gv = Math.ceil(ev / 16), pv = new Array(gv), dv = 0; dv < gv; ++dv) {
        for (var Nv = new Uint32Array(16), lv = 0; lv < 16; ++lv) Nv[lv] = vv[64 * dv + 4 * lv] << 24 | vv[64 * dv + 4 * lv + 1] << 16 | vv[64 * dv + 4 * lv + 2] << 8 | vv[64 * dv + 4 * lv + 3];
        pv[dv] = Nv
      }
      pv[gv - 1][14] = 8 * (vv.length - 1) / Math.pow(2, 32), pv[gv - 1][14] = Math.floor(pv[gv - 1][14]), pv[gv - 1][15] = 8 * (vv.length - 1) & 4294967295;
      for (var Tv = 0; Tv < gv; ++Tv) {
        for (var Wv = new Uint32Array(80), wv = 0; wv < 16; ++wv) Wv[wv] = pv[Tv][wv];
        for (var av = 16; av < 80; ++av) Wv[av] = uS(Wv[av - 3] ^ Wv[av - 8] ^ Wv[av - 14] ^ Wv[av - 16], 1);
        for (var sv = Pv[0], Cv = Pv[1], iv = Pv[2], cv = Pv[3], Gv = Pv[4], mv = 0; mv < 80; ++mv) {
          var jv = Math.floor(mv / 20),
            fv = uS(sv, 5) + XS(jv, Cv, iv, cv) + Gv + zv[jv] + Wv[mv] >>> 0;
          Gv = cv, cv = iv, iv = uS(Cv, 30) >>> 0, Cv = sv, sv = fv
        }
        Pv[0] = Pv[0] + sv >>> 0, Pv[1] = Pv[1] + Cv >>> 0, Pv[2] = Pv[2] + iv >>> 0, Pv[3] = Pv[3] + cv >>> 0, Pv[4] = Pv[4] + Gv >>> 0
      }
      return [Pv[0] >> 24 & 255, Pv[0] >> 16 & 255, Pv[0] >> 8 & 255, 255 & Pv[0], Pv[1] >> 24 & 255, Pv[1] >> 16 & 255, Pv[1] >> 8 & 255, 255 & Pv[1], Pv[2] >> 24 & 255, Pv[2] >> 16 & 255, Pv[2] >> 8 & 255, 255 & Pv[2], Pv[3] >> 24 & 255, Pv[3] >> 16 & 255, Pv[3] >> 8 & 255, 255 & Pv[3], Pv[4] >> 24 & 255, Pv[4] >> 16 & 255, Pv[4] >> 8 & 255, 255 & Pv[4]]
    }));
    class ve extends Error {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(zv), this.code = vv, this.message = zv, this.name = "Discord SDK Error"
      }
    }
    const ze = ["log", "warn", "debug", "info", "error"];
    var Pe;
    ! function(vv) {
      vv[vv.HANDSHAKE = 0] = "HANDSHAKE", vv[vv.FRAME = 1] = "FRAME", vv[vv.CLOSE = 2] = "CLOSE", vv[vv.HELLO = 3] = "HELLO"
    }(Pe || (Pe = {}));
    const he = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Se {
      getTransfer(vv) {
        var zv;
        switch (vv.cmd) {
          case bP.SUBSCRIBE:
          case bP.UNSUBSCRIBE:
            return;
          default:
            return null !== (zv = vv.transfer) && void 0 !== zv ? zv : void 0
        }
      }
      constructor(vv, zv) {
        var Pv;
        if (this.eventBus = new Nv, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = vv => {
            var zv;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Pv = kS();
            null === (zv = this.source) || void 0 === zv || zv.postMessage([Pe.FRAME, Object.assign(Object.assign({}, vv), {
              nonce: Pv
            })], this.sourceOrigin, this.getTransfer(vv));
            return new Promise(((vv, zv) => {
              this.pendingCommands.set(Pv, {
                resolve: vv,
                reject: zv
              })
            }))
          }, this.commands = (Pv = this.sendCommand, {
            authenticate: wS(Pv),
            authorize: aS(Pv),
            captureLog: sS(Pv),
            encourageHardwareAcceleration: CS(Pv),
            getChannel: RS(Pv),
            getChannelPermissions: GS(Pv),
            getEntitlements: iS(Pv),
            getPlatformBehaviors: mS(Pv),
            getSkus: cS(Pv),
            openExternalLink: jS(Pv),
            openInviteDialog: fS(Pv),
            openShareMomentDialog: FS(Pv),
            setActivity: YS(Pv),
            setConfig: nS(Pv),
            setOrientationLockState: DS(Pv),
            startPurchase: KS(Pv),
            userSettingsGetLocale: VS(Pv),
            initiateImageUpload: US(Pv),
            getInstanceConnectedParticipants: xS(Pv)
          }), this.handleMessage = vv => {
            if (!he.has(vv.origin)) return;
            const zv = vv.data;
            if (!Array.isArray(zv)) return;
            const [Pv, hv] = zv;
            switch (Pv) {
              case Pe.HELLO:
                return;
              case Pe.CLOSE:
                return this.handleClose(hv);
              case Pe.HANDSHAKE:
                return this.handleHandshake();
              case Pe.FRAME:
                return this.handleFrame(hv);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = vv, this.configuration = null !== zv && void 0 !== zv ? zv : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = qP.DESKTOP, this.guildId = null, void(this.channelId = null);
        const hv = new URLSearchParams(this._getSearch()),
          Sv = hv.get("frame_id");
        if (!Sv) throw new Error("frame_id query param is not defined");
        this.frameId = Sv;
        const ev = hv.get("instance_id");
        if (!ev) throw new Error("instance_id query param is not defined");
        this.instanceId = ev;
        const gv = hv.get("platform");
        if (!gv) throw new Error("platform query param is not defined");
        if (gv !== qP.DESKTOP && gv !== qP.MOBILE) throw new Error(`Invalid query param "platform" of "${gv}". Valid values are "${qP.DESKTOP}" or "${qP.MOBILE}"`);
        this.platform = gv, this.guildId = hv.get("guild_id"), this.channelId = hv.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var vv;
          return [null !== (vv = window.parent.opener) && void 0 !== vv ? vv : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(vv, zv) {
        var Pv;
        window.removeEventListener("message", this.handleMessage);
        const hv = kS();
        null === (Pv = this.source) || void 0 === Pv || Pv.postMessage([Pe.CLOSE, {
          code: vv,
          message: zv,
          nonce: hv
        }], this.sourceOrigin)
      }
      async subscribe(vv, zv) {
        for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
        const [ev] = hv, gv = this.eventBus.listenerCount(vv), pv = this.eventBus.on(vv, zv);
        return Object.values(th).includes(vv) && vv !== th.READY && 0 === gv && await this.sendCommand({
          cmd: bP.SUBSCRIBE,
          args: ev,
          evt: vv
        }), pv
      }
      async unsubscribe(vv, zv) {
        for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
        const [ev] = hv;
        return vv !== th.READY && 1 === this.eventBus.listenerCount(vv) && await this.sendCommand({
          cmd: bP.UNSUBSCRIBE,
          evt: vv,
          args: ev
        }), this.eventBus.off(vv, zv)
      }
      async ready() {
        this.isReady || await new Promise((vv => {
          this.eventBus.once(th.READY, vv)
        }))
      }
      handshake() {
        var vv;
        null === (vv = this.source) || void 0 === vv || vv.postMessage([Pe.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(th.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const vv = (vv, zv) => {
          this.commands.captureLog({
            level: vv,
            message: zv
          })
        };
        ze.forEach((zv => {
          ! function(vv, zv, Pv) {
            const hv = vv[zv],
              Sv = vv;
            hv && (vv[zv] = function() {
              const vv = [].slice.call(arguments),
                ev = "" + vv.join(" ");
              Pv(zv, ev), hv.apply(Sv, vv)
            })
          }(console, zv, vv)
        }))
      }
      handleClose(vv) {
        dS.parse(vv)
      }
      handleHandshake() {}
      handleFrame(vv) {
        var zv, Pv;
        let hv;
        try {
          hv = lS(vv)
        } catch (Sv) {
          return console.error("Failed to parse", vv), void console.error(Sv)
        }
        if ("DISPATCH" === hv.cmd) this.eventBus.emit(hv.evt, hv.data);
        else {
          if (hv.evt === xh) {
            if (null != hv.nonce) return null === (zv = this.pendingCommands.get(hv.nonce)) || void 0 === zv || zv.reject(hv.data), void this.pendingCommands.delete(hv.nonce);
            this.eventBus.emit("error", new ve(hv.data.code, hv.data.message))
          }
          if (null == hv.nonce) return void console.error("Missing nonce", vv);
          null === (Pv = this.pendingCommands.get(hv.nonce)) || void 0 === Pv || Pv.resolve(hv), this.pendingCommands.delete(hv.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var ee, ge = 1e9,
      pe = !0,
      de = "[DecimalError] ",
      Ne = de + "Invalid argument: ",
      le = de + "Exponent out of range: ",
      Te = Math.floor,
      We = Math.pow,
      we = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      ae = 1e7,
      se = 9007199254740991,
      Ce = Te(1286742750677284.5),
      ie = {};

    function ce(vv, zv) {
      var Pv, hv, Sv, ev, gv, pv, dv, Nv, lv = vv.constructor,
        Tv = lv.precision;
      if (!vv.s || !zv.s) return zv.s || (zv = new lv(vv)), pe ? Ke(zv, Tv) : zv;
      if (dv = vv.d, Nv = zv.d, gv = vv.e, Sv = zv.e, dv = dv.slice(), ev = gv - Sv) {
        for (ev < 0 ? (hv = dv, ev = -ev, pv = Nv.length) : (hv = Nv, Sv = gv, pv = dv.length), ev > (pv = (gv = Math.ceil(Tv / 7)) > pv ? gv + 1 : pv + 1) && (ev = pv, hv.length = 1), hv.reverse(); ev--;) hv.push(0);
        hv.reverse()
      }
      for ((pv = dv.length) - (ev = Nv.length) < 0 && (ev = pv, hv = Nv, Nv = dv, dv = hv), Pv = 0; ev;) Pv = (dv[--ev] = dv[ev] + Nv[ev] + Pv) / ae | 0, dv[ev] %= ae;
      for (Pv && (dv.unshift(Pv), ++Sv), pv = dv.length; 0 == dv[--pv];) dv.pop();
      return zv.d = dv, zv.e = Sv, pe ? Ke(zv, Tv) : zv
    }

    function Ge(vv, zv, Pv) {
      if (vv !== ~~vv || vv < zv || vv > Pv) throw Error(Ne + vv)
    }

    function me(vv) {
      var zv, Pv, hv, Sv = vv.length - 1,
        ev = "",
        gv = vv[0];
      if (Sv > 0) {
        for (ev += gv, zv = 1; zv < Sv; zv++)(Pv = 7 - (hv = vv[zv] + "").length) && (ev += ne(Pv)), ev += hv;
        (Pv = 7 - (hv = (gv = vv[zv]) + "").length) && (ev += ne(Pv))
      } else if (0 === gv) return "0";
      for (; gv % 10 === 0;) gv /= 10;
      return ev + gv
    }
    ie.absoluteValue = ie.abs = function() {
      var vv = new this.constructor(this);
      return vv.s && (vv.s = 1), vv
    }, ie.comparedTo = ie.cmp = function(vv) {
      var zv, Pv, hv, Sv, ev = this;
      if (vv = new ev.constructor(vv), ev.s !== vv.s) return ev.s || -vv.s;
      if (ev.e !== vv.e) return ev.e > vv.e ^ ev.s < 0 ? 1 : -1;
      for (zv = 0, Pv = (hv = ev.d.length) < (Sv = vv.d.length) ? hv : Sv; zv < Pv; ++zv)
        if (ev.d[zv] !== vv.d[zv]) return ev.d[zv] > vv.d[zv] ^ ev.s < 0 ? 1 : -1;
      return hv === Sv ? 0 : hv > Sv ^ ev.s < 0 ? 1 : -1
    }, ie.decimalPlaces = ie.dp = function() {
      var vv = this,
        zv = vv.d.length - 1,
        Pv = 7 * (zv - vv.e);
      if (zv = vv.d[zv])
        for (; zv % 10 == 0; zv /= 10) Pv--;
      return Pv < 0 ? 0 : Pv
    }, ie.dividedBy = ie.div = function(vv) {
      return je(this, new this.constructor(vv))
    }, ie.dividedToIntegerBy = ie.idiv = function(vv) {
      var zv = this.constructor;
      return Ke(je(this, new zv(vv), 0, 1), zv.precision)
    }, ie.equals = ie.eq = function(vv) {
      return !this.cmp(vv)
    }, ie.exponent = function() {
      return Fe(this)
    }, ie.greaterThan = ie.gt = function(vv) {
      return this.cmp(vv) > 0
    }, ie.greaterThanOrEqualTo = ie.gte = function(vv) {
      return this.cmp(vv) >= 0
    }, ie.isInteger = ie.isint = function() {
      return this.e > this.d.length - 2
    }, ie.isNegative = ie.isneg = function() {
      return this.s < 0
    }, ie.isPositive = ie.ispos = function() {
      return this.s > 0
    }, ie.isZero = function() {
      return 0 === this.s
    }, ie.lessThan = ie.lt = function(vv) {
      return this.cmp(vv) < 0
    }, ie.lessThanOrEqualTo = ie.lte = function(vv) {
      return this.cmp(vv) < 1
    }, ie.logarithm = ie.log = function(vv) {
      var zv, Pv = this,
        hv = Pv.constructor,
        Sv = hv.precision,
        ev = Sv + 5;
      if (void 0 === vv) vv = new hv(10);
      else if ((vv = new hv(vv)).s < 1 || vv.eq(ee)) throw Error(de + "NaN");
      if (Pv.s < 1) throw Error(de + (Pv.s ? "NaN" : "-Infinity"));
      return Pv.eq(ee) ? new hv(0) : (pe = !1, zv = je(Oe(Pv, ev), Oe(vv, ev), ev), pe = !0, Ke(zv, Sv))
    }, ie.minus = ie.sub = function(vv) {
      var zv = this;
      return vv = new zv.constructor(vv), zv.s == vv.s ? Ve(zv, vv) : ce(zv, (vv.s = -vv.s, vv))
    }, ie.modulo = ie.mod = function(vv) {
      var zv, Pv = this,
        hv = Pv.constructor,
        Sv = hv.precision;
      if (!(vv = new hv(vv)).s) throw Error(de + "NaN");
      return Pv.s ? (pe = !1, zv = je(Pv, vv, 0, 1).times(vv), pe = !0, Pv.minus(zv)) : Ke(new hv(Pv), Sv)
    }, ie.naturalExponential = ie.exp = function() {
      return fe(this)
    }, ie.naturalLogarithm = ie.ln = function() {
      return Oe(this)
    }, ie.negated = ie.neg = function() {
      var vv = new this.constructor(this);
      return vv.s = -vv.s || 0, vv
    }, ie.plus = ie.add = function(vv) {
      var zv = this;
      return vv = new zv.constructor(vv), zv.s == vv.s ? ce(zv, vv) : Ve(zv, (vv.s = -vv.s, vv))
    }, ie.precision = ie.sd = function(vv) {
      var zv, Pv, hv, Sv = this;
      if (void 0 !== vv && vv !== !!vv && 1 !== vv && 0 !== vv) throw Error(Ne + vv);
      if (zv = Fe(Sv) + 1, Pv = 7 * (hv = Sv.d.length - 1) + 1, hv = Sv.d[hv]) {
        for (; hv % 10 == 0; hv /= 10) Pv--;
        for (hv = Sv.d[0]; hv >= 10; hv /= 10) Pv++
      }
      return vv && zv > Pv ? zv : Pv
    }, ie.squareRoot = ie.sqrt = function() {
      var vv, zv, Pv, hv, Sv, ev, gv, pv = this,
        dv = pv.constructor;
      if (pv.s < 1) {
        if (!pv.s) return new dv(0);
        throw Error(de + "NaN")
      }
      for (vv = Fe(pv), pe = !1, 0 == (Sv = Math.sqrt(+pv)) || Sv == 1 / 0 ? (((zv = me(pv.d)).length + vv) % 2 == 0 && (zv += "0"), Sv = Math.sqrt(zv), vv = Te((vv + 1) / 2) - (vv < 0 || vv % 2), hv = new dv(zv = Sv == 1 / 0 ? "1e" + vv : (zv = Sv.toExponential()).slice(0, zv.indexOf("e") + 1) + vv)) : hv = new dv(Sv.toString()), Sv = gv = (Pv = dv.precision) + 3;;)
        if (hv = (ev = hv).plus(je(pv, ev, gv + 2)).times(.5), me(ev.d).slice(0, gv) === (zv = me(hv.d)).slice(0, gv)) {
          if (zv = zv.slice(gv - 3, gv + 1), Sv == gv && "4999" == zv) {
            if (Ke(ev, Pv + 1, 0), ev.times(ev).eq(pv)) {
              hv = ev;
              break
            }
          } else if ("9999" != zv) break;
          gv += 4
        } return pe = !0, Ke(hv, Pv)
    }, ie.times = ie.mul = function(vv) {
      var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv = this,
        Tv = lv.constructor,
        Wv = lv.d,
        wv = (vv = new Tv(vv)).d;
      if (!lv.s || !vv.s) return new Tv(0);
      for (vv.s *= lv.s, Pv = lv.e + vv.e, (dv = Wv.length) < (Nv = wv.length) && (ev = Wv, Wv = wv, wv = ev, gv = dv, dv = Nv, Nv = gv), ev = [], hv = gv = dv + Nv; hv--;) ev.push(0);
      for (hv = Nv; --hv >= 0;) {
        for (zv = 0, Sv = dv + hv; Sv > hv;) pv = ev[Sv] + wv[hv] * Wv[Sv - hv - 1] + zv, ev[Sv--] = pv % ae | 0, zv = pv / ae | 0;
        ev[Sv] = (ev[Sv] + zv) % ae | 0
      }
      for (; !ev[--gv];) ev.pop();
      return zv ? ++Pv : ev.shift(), vv.d = ev, vv.e = Pv, pe ? Ke(vv, Tv.precision) : vv
    }, ie.toDecimalPlaces = ie.todp = function(vv, zv) {
      var Pv = this,
        hv = Pv.constructor;
      return Pv = new hv(Pv), void 0 === vv ? Pv : (Ge(vv, 0, ge), void 0 === zv ? zv = hv.rounding : Ge(zv, 0, 8), Ke(Pv, vv + Fe(Pv) + 1, zv))
    }, ie.toExponential = function(vv, zv) {
      var Pv, hv = this,
        Sv = hv.constructor;
      return void 0 === vv ? Pv = Ue(hv, !0) : (Ge(vv, 0, ge), void 0 === zv ? zv = Sv.rounding : Ge(zv, 0, 8), Pv = Ue(hv = Ke(new Sv(hv), vv + 1, zv), !0, vv + 1)), Pv
    }, ie.toFixed = function(vv, zv) {
      var Pv, hv, Sv = this,
        ev = Sv.constructor;
      return void 0 === vv ? Ue(Sv) : (Ge(vv, 0, ge), void 0 === zv ? zv = ev.rounding : Ge(zv, 0, 8), Pv = Ue((hv = Ke(new ev(Sv), vv + Fe(Sv) + 1, zv)).abs(), !1, vv + Fe(hv) + 1), Sv.isneg() && !Sv.isZero() ? "-" + Pv : Pv)
    }, ie.toInteger = ie.toint = function() {
      var vv = this,
        zv = vv.constructor;
      return Ke(new zv(vv), Fe(vv) + 1, zv.rounding)
    }, ie.toNumber = function() {
      return +this
    }, ie.toPower = ie.pow = function(vv) {
      var zv, Pv, hv, Sv, ev, gv, pv = this,
        dv = pv.constructor,
        Nv = +(vv = new dv(vv));
      if (!vv.s) return new dv(ee);
      if (!(pv = new dv(pv)).s) {
        if (vv.s < 1) throw Error(de + "Infinity");
        return pv
      }
      if (pv.eq(ee)) return pv;
      if (hv = dv.precision, vv.eq(ee)) return Ke(pv, hv);
      if (gv = (zv = vv.e) >= (Pv = vv.d.length - 1), ev = pv.s, gv) {
        if ((Pv = Nv < 0 ? -Nv : Nv) <= se) {
          for (Sv = new dv(ee), zv = Math.ceil(hv / 7 + 4), pe = !1; Pv % 2 && Re((Sv = Sv.times(pv)).d, zv), 0 !== (Pv = Te(Pv / 2));) Re((pv = pv.times(pv)).d, zv);
          return pe = !0, vv.s < 0 ? new dv(ee).div(Sv) : Ke(Sv, hv)
        }
      } else if (ev < 0) throw Error(de + "NaN");
      return ev = ev < 0 && 1 & vv.d[Math.max(zv, Pv)] ? -1 : 1, pv.s = 1, pe = !1, Sv = vv.times(Oe(pv, hv + 12)), pe = !0, (Sv = fe(Sv)).s = ev, Sv
    }, ie.toPrecision = function(vv, zv) {
      var Pv, hv, Sv = this,
        ev = Sv.constructor;
      return void 0 === vv ? hv = Ue(Sv, (Pv = Fe(Sv)) <= ev.toExpNeg || Pv >= ev.toExpPos) : (Ge(vv, 1, ge), void 0 === zv ? zv = ev.rounding : Ge(zv, 0, 8), hv = Ue(Sv = Ke(new ev(Sv), vv, zv), vv <= (Pv = Fe(Sv)) || Pv <= ev.toExpNeg, vv)), hv
    }, ie.toSignificantDigits = ie.tosd = function(vv, zv) {
      var Pv = this.constructor;
      return void 0 === vv ? (vv = Pv.precision, zv = Pv.rounding) : (Ge(vv, 1, ge), void 0 === zv ? zv = Pv.rounding : Ge(zv, 0, 8)), Ke(new Pv(this), vv, zv)
    }, ie.toString = ie.valueOf = ie.val = ie.toJSON = ie[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var vv = this,
        zv = Fe(vv),
        Pv = vv.constructor;
      return Ue(vv, zv <= Pv.toExpNeg || zv >= Pv.toExpPos)
    };
    var je = function() {
      function vv(vv, zv) {
        var Pv, hv = 0,
          Sv = vv.length;
        for (vv = vv.slice(); Sv--;) Pv = vv[Sv] * zv + hv, vv[Sv] = Pv % ae | 0, hv = Pv / ae | 0;
        return hv && vv.unshift(hv), vv
      }

      function zv(vv, zv, Pv, hv) {
        var Sv, ev;
        if (Pv != hv) ev = Pv > hv ? 1 : -1;
        else
          for (Sv = ev = 0; Sv < Pv; Sv++)
            if (vv[Sv] != zv[Sv]) {
              ev = vv[Sv] > zv[Sv] ? 1 : -1;
              break
            } return ev
      }

      function Pv(vv, zv, Pv) {
        for (var hv = 0; Pv--;) vv[Pv] -= hv, hv = vv[Pv] < zv[Pv] ? 1 : 0, vv[Pv] = hv * ae + vv[Pv] - zv[Pv];
        for (; !vv[0] && vv.length > 1;) vv.shift()
      }
      return function(hv, Sv, ev, gv) {
        var pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv = hv.constructor,
          Ov = hv.s == Sv.s ? 1 : -1,
          Dv = hv.d,
          Kv = Sv.d;
        if (!hv.s) return new nv(hv);
        if (!Sv.s) throw Error(de + "Division by zero");
        for (dv = hv.e - Sv.e, Fv = Kv.length, jv = Dv.length, av = (wv = new nv(Ov)).d = [], Nv = 0; Kv[Nv] == (Dv[Nv] || 0);) ++Nv;
        if (Kv[Nv] > (Dv[Nv] || 0) && --dv, (cv = null == ev ? ev = nv.precision : gv ? ev + (Fe(hv) - Fe(Sv)) + 1 : ev) < 0) return new nv(0);
        if (cv = cv / 7 + 2 | 0, Nv = 0, 1 == Fv)
          for (lv = 0, Kv = Kv[0], cv++;
            (Nv < jv || lv) && cv--; Nv++) Gv = lv * ae + (Dv[Nv] || 0), av[Nv] = Gv / Kv | 0, lv = Gv % Kv | 0;
        else {
          for ((lv = ae / (Kv[0] + 1) | 0) > 1 && (Kv = vv(Kv, lv), Dv = vv(Dv, lv), Fv = Kv.length, jv = Dv.length), mv = Fv, Cv = (sv = Dv.slice(0, Fv)).length; Cv < Fv;) sv[Cv++] = 0;
          (Yv = Kv.slice()).unshift(0), fv = Kv[0], Kv[1] >= ae / 2 && ++fv;
          do {
            lv = 0, (pv = zv(Kv, sv, Fv, Cv)) < 0 ? (iv = sv[0], Fv != Cv && (iv = iv * ae + (sv[1] || 0)), (lv = iv / fv | 0) > 1 ? (lv >= ae && (lv = ae - 1), 1 == (pv = zv(Tv = vv(Kv, lv), sv, Wv = Tv.length, Cv = sv.length)) && (lv--, Pv(Tv, Fv < Wv ? Yv : Kv, Wv))) : (0 == lv && (pv = lv = 1), Tv = Kv.slice()), (Wv = Tv.length) < Cv && Tv.unshift(0), Pv(sv, Tv, Cv), -1 == pv && (pv = zv(Kv, sv, Fv, Cv = sv.length)) < 1 && (lv++, Pv(sv, Fv < Cv ? Yv : Kv, Cv)), Cv = sv.length) : 0 === pv && (lv++, sv = [0]), av[Nv++] = lv, pv && sv[0] ? sv[Cv++] = Dv[mv] || 0 : (sv = [Dv[mv]], Cv = 1)
          } while ((mv++ < jv || void 0 !== sv[0]) && cv--)
        }
        return av[0] || av.shift(), wv.e = dv, Ke(wv, gv ? ev + Fe(wv) + 1 : ev)
      }
    }();

    function fe(vv, zv) {
      var Pv, hv, Sv, ev, gv, pv = 0,
        dv = 0,
        Nv = vv.constructor,
        lv = Nv.precision;
      if (Fe(vv) > 16) throw Error(le + Fe(vv));
      if (!vv.s) return new Nv(ee);
      for (null == zv ? (pe = !1, gv = lv) : gv = zv, ev = new Nv(.03125); vv.abs().gte(.1);) vv = vv.times(ev), dv += 5;
      for (gv += Math.log(We(2, dv)) / Math.LN10 * 2 + 5 | 0, Pv = hv = Sv = new Nv(ee), Nv.precision = gv;;) {
        if (hv = Ke(hv.times(vv), gv), Pv = Pv.times(++pv), me((ev = Sv.plus(je(hv, Pv, gv))).d).slice(0, gv) === me(Sv.d).slice(0, gv)) {
          for (; dv--;) Sv = Ke(Sv.times(Sv), gv);
          return Nv.precision = lv, null == zv ? (pe = !0, Ke(Sv, lv)) : Sv
        }
        Sv = ev
      }
    }

    function Fe(vv) {
      for (var zv = 7 * vv.e, Pv = vv.d[0]; Pv >= 10; Pv /= 10) zv++;
      return zv
    }

    function Ye(vv, zv, Pv) {
      if (zv > vv.LN10.sd()) throw pe = !0, Pv && (vv.precision = Pv), Error(de + "LN10 precision limit exceeded");
      return Ke(new vv(vv.LN10), zv)
    }

    function ne(vv) {
      for (var zv = ""; vv--;) zv += "0";
      return zv
    }

    function Oe(vv, zv) {
      var Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv = 1,
        Wv = vv,
        wv = Wv.d,
        av = Wv.constructor,
        sv = av.precision;
      if (Wv.s < 1) throw Error(de + (Wv.s ? "NaN" : "-Infinity"));
      if (Wv.eq(ee)) return new av(0);
      if (null == zv ? (pe = !1, Nv = sv) : Nv = zv, Wv.eq(10)) return null == zv && (pe = !0), Ye(av, Nv);
      if (Nv += 10, av.precision = Nv, hv = (Pv = me(wv)).charAt(0), ev = Fe(Wv), !(Math.abs(ev) < 15e14)) return dv = Ye(av, Nv + 2, sv).times(ev + ""), Wv = Oe(new av(hv + "." + Pv.slice(1)), Nv - 10).plus(dv), av.precision = sv, null == zv ? (pe = !0, Ke(Wv, sv)) : Wv;
      for (; hv < 7 && 1 != hv || 1 == hv && Pv.charAt(1) > 3;) hv = (Pv = me((Wv = Wv.times(vv)).d)).charAt(0), Tv++;
      for (ev = Fe(Wv), hv > 1 ? (Wv = new av("0." + Pv), ev++) : Wv = new av(hv + "." + Pv.slice(1)), pv = gv = Wv = je(Wv.minus(ee), Wv.plus(ee), Nv), lv = Ke(Wv.times(Wv), Nv), Sv = 3;;) {
        if (gv = Ke(gv.times(lv), Nv), me((dv = pv.plus(je(gv, new av(Sv), Nv))).d).slice(0, Nv) === me(pv.d).slice(0, Nv)) return pv = pv.times(2), 0 !== ev && (pv = pv.plus(Ye(av, Nv + 2, sv).times(ev + ""))), pv = je(pv, new av(Tv), Nv), av.precision = sv, null == zv ? (pe = !0, Ke(pv, sv)) : pv;
        pv = dv, Sv += 2
      }
    }

    function De(vv, zv) {
      var Pv, hv, Sv;
      for ((Pv = zv.indexOf(".")) > -1 && (zv = zv.replace(".", "")), (hv = zv.search(/e/i)) > 0 ? (Pv < 0 && (Pv = hv), Pv += +zv.slice(hv + 1), zv = zv.substring(0, hv)) : Pv < 0 && (Pv = zv.length), hv = 0; 48 === zv.charCodeAt(hv);) ++hv;
      for (Sv = zv.length; 48 === zv.charCodeAt(Sv - 1);) --Sv;
      if (zv = zv.slice(hv, Sv)) {
        if (Sv -= hv, Pv = Pv - hv - 1, vv.e = Te(Pv / 7), vv.d = [], hv = (Pv + 1) % 7, Pv < 0 && (hv += 7), hv < Sv) {
          for (hv && vv.d.push(+zv.slice(0, hv)), Sv -= 7; hv < Sv;) vv.d.push(+zv.slice(hv, hv += 7));
          hv = 7 - (zv = zv.slice(hv)).length
        } else hv -= Sv;
        for (; hv--;) zv += "0";
        if (vv.d.push(+zv), pe && (vv.e > Ce || vv.e < -Ce)) throw Error(le + Pv)
      } else vv.s = 0, vv.e = 0, vv.d = [0];
      return vv
    }

    function Ke(vv, zv, Pv) {
      var hv, Sv, ev, gv, pv, dv, Nv, lv, Tv = vv.d;
      for (gv = 1, ev = Tv[0]; ev >= 10; ev /= 10) gv++;
      if ((hv = zv - gv) < 0) hv += 7, Sv = zv, Nv = Tv[lv = 0];
      else {
        if ((lv = Math.ceil((hv + 1) / 7)) >= (ev = Tv.length)) return vv;
        for (Nv = ev = Tv[lv], gv = 1; ev >= 10; ev /= 10) gv++;
        Sv = (hv %= 7) - 7 + gv
      }
      if (void 0 !== Pv && (pv = Nv / (ev = We(10, gv - Sv - 1)) % 10 | 0, dv = zv < 0 || void 0 !== Tv[lv + 1] || Nv % ev, dv = Pv < 4 ? (pv || dv) && (0 == Pv || Pv == (vv.s < 0 ? 3 : 2)) : pv > 5 || 5 == pv && (4 == Pv || dv || 6 == Pv && (hv > 0 ? Sv > 0 ? Nv / We(10, gv - Sv) : 0 : Tv[lv - 1]) % 10 & 1 || Pv == (vv.s < 0 ? 8 : 7))), zv < 1 || !Tv[0]) return dv ? (ev = Fe(vv), Tv.length = 1, zv = zv - ev - 1, Tv[0] = We(10, (7 - zv % 7) % 7), vv.e = Te(-zv / 7) || 0) : (Tv.length = 1, Tv[0] = vv.e = vv.s = 0), vv;
      if (0 == hv ? (Tv.length = lv, ev = 1, lv--) : (Tv.length = lv + 1, ev = We(10, 7 - hv), Tv[lv] = Sv > 0 ? (Nv / We(10, gv - Sv) % We(10, Sv) | 0) * ev : 0), dv)
        for (;;) {
          if (0 == lv) {
            (Tv[0] += ev) == ae && (Tv[0] = 1, ++vv.e);
            break
          }
          if (Tv[lv] += ev, Tv[lv] != ae) break;
          Tv[lv--] = 0, ev = 1
        }
      for (hv = Tv.length; 0 === Tv[--hv];) Tv.pop();
      if (pe && (vv.e > Ce || vv.e < -Ce)) throw Error(le + Fe(vv));
      return vv
    }

    function Ve(vv, zv) {
      var Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv = vv.constructor,
        wv = Wv.precision;
      if (!vv.s || !zv.s) return zv.s ? zv.s = -zv.s : zv = new Wv(vv), pe ? Ke(zv, wv) : zv;
      if (dv = vv.d, Tv = zv.d, hv = zv.e, Nv = vv.e, dv = dv.slice(), gv = Nv - hv) {
        for ((lv = gv < 0) ? (Pv = dv, gv = -gv, pv = Tv.length) : (Pv = Tv, hv = Nv, pv = dv.length), gv > (Sv = Math.max(Math.ceil(wv / 7), pv) + 2) && (gv = Sv, Pv.length = 1), Pv.reverse(), Sv = gv; Sv--;) Pv.push(0);
        Pv.reverse()
      } else {
        for ((lv = (Sv = dv.length) < (pv = Tv.length)) && (pv = Sv), Sv = 0; Sv < pv; Sv++)
          if (dv[Sv] != Tv[Sv]) {
            lv = dv[Sv] < Tv[Sv];
            break
          } gv = 0
      }
      for (lv && (Pv = dv, dv = Tv, Tv = Pv, zv.s = -zv.s), pv = dv.length, Sv = Tv.length - pv; Sv > 0; --Sv) dv[pv++] = 0;
      for (Sv = Tv.length; Sv > gv;) {
        if (dv[--Sv] < Tv[Sv]) {
          for (ev = Sv; ev && 0 === dv[--ev];) dv[ev] = ae - 1;
          --dv[ev], dv[Sv] += ae
        }
        dv[Sv] -= Tv[Sv]
      }
      for (; 0 === dv[--pv];) dv.pop();
      for (; 0 === dv[0]; dv.shift()) --hv;
      return dv[0] ? (zv.d = dv, zv.e = hv, pe ? Ke(zv, wv) : zv) : new Wv(0)
    }

    function Ue(vv, zv, Pv) {
      var hv, Sv = Fe(vv),
        ev = me(vv.d),
        gv = ev.length;
      return zv ? (Pv && (hv = Pv - gv) > 0 ? ev = ev.charAt(0) + "." + ev.slice(1) + ne(hv) : gv > 1 && (ev = ev.charAt(0) + "." + ev.slice(1)), ev = ev + (Sv < 0 ? "e" : "e+") + Sv) : Sv < 0 ? (ev = "0." + ne(-Sv - 1) + ev, Pv && (hv = Pv - gv) > 0 && (ev += ne(hv))) : Sv >= gv ? (ev += ne(Sv + 1 - gv), Pv && (hv = Pv - Sv - 1) > 0 && (ev = ev + "." + ne(hv))) : ((hv = Sv + 1) < gv && (ev = ev.slice(0, hv) + "." + ev.slice(hv)), Pv && (hv = Pv - gv) > 0 && (Sv + 1 === gv && (ev += "."), ev += ne(hv))), vv.s < 0 ? "-" + ev : ev
    }

    function Re(vv, zv) {
      if (vv.length > zv) return vv.length = zv, !0
    }

    function xe(vv) {
      if (!vv || "object" !== typeof vv) throw Error(de + "Object expected");
      var zv, Pv, hv, Sv = ["precision", 1, ge, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (zv = 0; zv < Sv.length; zv += 3)
        if (void 0 !== (hv = vv[Pv = Sv[zv]])) {
          if (!(Te(hv) === hv && hv >= Sv[zv + 1] && hv <= Sv[zv + 2])) throw Error(Ne + Pv + ": " + hv);
          this[Pv] = hv
        } if (void 0 !== (hv = vv[Pv = "LN10"])) {
        if (hv != Math.LN10) throw Error(Ne + Pv + ": " + hv);
        this[Pv] = new this(hv)
      }
      return this
    }
    var te = function vv(zv) {
      var Pv, hv, Sv;

      function ev(vv) {
        var zv = this;
        if (!(zv instanceof ev)) return new ev(vv);
        if (zv.constructor = ev, vv instanceof ev) return zv.s = vv.s, zv.e = vv.e, void(zv.d = (vv = vv.d) ? vv.slice() : vv);
        if ("number" === typeof vv) {
          if (0 * vv !== 0) throw Error(Ne + vv);
          if (vv > 0) zv.s = 1;
          else {
            if (!(vv < 0)) return zv.s = 0, zv.e = 0, void(zv.d = [0]);
            vv = -vv, zv.s = -1
          }
          return vv === ~~vv && vv < 1e7 ? (zv.e = 0, void(zv.d = [vv])) : De(zv, vv.toString())
        }
        if ("string" !== typeof vv) throw Error(Ne + vv);
        if (45 === vv.charCodeAt(0) ? (vv = vv.slice(1), zv.s = -1) : zv.s = 1, !we.test(vv)) throw Error(Ne + vv);
        De(zv, vv)
      }
      if (ev.prototype = ie, ev.ROUND_UP = 0, ev.ROUND_DOWN = 1, ev.ROUND_CEIL = 2, ev.ROUND_FLOOR = 3, ev.ROUND_HALF_UP = 4, ev.ROUND_HALF_DOWN = 5, ev.ROUND_HALF_EVEN = 6, ev.ROUND_HALF_CEIL = 7, ev.ROUND_HALF_FLOOR = 8, ev.clone = vv, ev.config = ev.set = xe, void 0 === zv && (zv = {}), zv)
        for (Sv = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Pv = 0; Pv < Sv.length;) zv.hasOwnProperty(hv = Sv[Pv++]) || (zv[hv] = this[hv]);
      return ev.config(zv), ev
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    ee = new te(1);
    var qe;
    ! function(vv) {
      vv.AED = "aed", vv.AFN = "afn", vv.ALL = "all", vv.AMD = "amd", vv.ANG = "ang", vv.AOA = "aoa", vv.ARS = "ars", vv.AUD = "aud", vv.AWG = "awg", vv.AZN = "azn", vv.BAM = "bam", vv.BBD = "bbd", vv.BDT = "bdt", vv.BGN = "bgn", vv.BHD = "bhd", vv.BIF = "bif", vv.BMD = "bmd", vv.BND = "bnd", vv.BOB = "bob", vv.BOV = "bov", vv.BRL = "brl", vv.BSD = "bsd", vv.BTN = "btn", vv.BWP = "bwp", vv.BYN = "byn", vv.BYR = "byr", vv.BZD = "bzd", vv.CAD = "cad", vv.CDF = "cdf", vv.CHE = "che", vv.CHF = "chf", vv.CHW = "chw", vv.CLF = "clf", vv.CLP = "clp", vv.CNY = "cny", vv.COP = "cop", vv.COU = "cou", vv.CRC = "crc", vv.CUC = "cuc", vv.CUP = "cup", vv.CVE = "cve", vv.CZK = "czk", vv.DJF = "djf", vv.DKK = "dkk", vv.DOP = "dop", vv.DZD = "dzd", vv.EGP = "egp", vv.ERN = "ern", vv.ETB = "etb", vv.EUR = "eur", vv.FJD = "fjd", vv.FKP = "fkp", vv.GBP = "gbp", vv.GEL = "gel", vv.GHS = "ghs", vv.GIP = "gip", vv.GMD = "gmd", vv.GNF = "gnf", vv.GTQ = "gtq", vv.GYD = "gyd", vv.HKD = "hkd", vv.HNL = "hnl", vv.HRK = "hrk", vv.HTG = "htg", vv.HUF = "huf", vv.IDR = "idr", vv.ILS = "ils", vv.INR = "inr", vv.IQD = "iqd", vv.IRR = "irr", vv.ISK = "isk", vv.JMD = "jmd", vv.JOD = "jod", vv.JPY = "jpy", vv.KES = "kes", vv.KGS = "kgs", vv.KHR = "khr", vv.KMF = "kmf", vv.KPW = "kpw", vv.KRW = "krw", vv.KWD = "kwd", vv.KYD = "kyd", vv.KZT = "kzt", vv.LAK = "lak", vv.LBP = "lbp", vv.LKR = "lkr", vv.LRD = "lrd", vv.LSL = "lsl", vv.LTL = "ltl", vv.LVL = "lvl", vv.LYD = "lyd", vv.MAD = "mad", vv.MDL = "mdl", vv.MGA = "mga", vv.MKD = "mkd", vv.MMK = "mmk", vv.MNT = "mnt", vv.MOP = "mop", vv.MRO = "mro", vv.MUR = "mur", vv.MVR = "mvr", vv.MWK = "mwk", vv.MXN = "mxn", vv.MXV = "mxv", vv.MYR = "myr", vv.MZN = "mzn", vv.NAD = "nad", vv.NGN = "ngn", vv.NIO = "nio", vv.NOK = "nok", vv.NPR = "npr", vv.NZD = "nzd", vv.OMR = "omr", vv.PAB = "pab", vv.PEN = "pen", vv.PGK = "pgk", vv.PHP = "php", vv.PKR = "pkr", vv.PLN = "pln", vv.PYG = "pyg", vv.QAR = "qar", vv.RON = "ron", vv.RSD = "rsd", vv.RUB = "rub", vv.RWF = "rwf", vv.SAR = "sar", vv.SBD = "sbd", vv.SCR = "scr", vv.SDG = "sdg", vv.SEK = "sek", vv.SGD = "sgd", vv.SHP = "shp", vv.SLL = "sll", vv.SOS = "sos", vv.SRD = "srd", vv.SSP = "ssp", vv.STD = "std", vv.SVC = "svc", vv.SYP = "syp", vv.SZL = "szl", vv.THB = "thb", vv.TJS = "tjs", vv.TMT = "tmt", vv.TND = "tnd", vv.TOP = "top", vv.TRY = "try", vv.TTD = "ttd", vv.TWD = "twd", vv.TZS = "tzs", vv.UAH = "uah", vv.UGX = "ugx", vv.USD = "usd", vv.USN = "usn", vv.USS = "uss", vv.UYI = "uyi", vv.UYU = "uyu", vv.UZS = "uzs", vv.VEF = "vef", vv.VND = "vnd", vv.VUV = "vuv", vv.WST = "wst", vv.XAF = "xaf", vv.XAG = "xag", vv.XAU = "xau", vv.XBA = "xba", vv.XBB = "xbb", vv.XBC = "xbc", vv.XBD = "xbd", vv.XCD = "xcd", vv.XDR = "xdr", vv.XFU = "xfu", vv.XOF = "xof", vv.XPD = "xpd", vv.XPF = "xpf", vv.XPT = "xpt", vv.XSU = "xsu", vv.XTS = "xts", vv.XUA = "xua", vv.YER = "yer", vv.ZAR = "zar", vv.ZMW = "zmw", vv.ZWL = "zwl"
    }(qe || (qe = {}));
    qe.AED, qe.AFN, qe.ALL, qe.AMD, qe.ANG, qe.AOA, qe.ARS, qe.AUD, qe.AWG, qe.AZN, qe.BAM, qe.BBD, qe.BDT, qe.BGN, qe.BHD, qe.BIF, qe.BMD, qe.BND, qe.BOB, qe.BOV, qe.BRL, qe.BSD, qe.BTN, qe.BWP, qe.BYR, qe.BYN, qe.BZD, qe.CAD, qe.CDF, qe.CHE, qe.CHF, qe.CHW, qe.CLF, qe.CLP, qe.CNY, qe.COP, qe.COU, qe.CRC, qe.CUC, qe.CUP, qe.CVE, qe.CZK, qe.DJF, qe.DKK, qe.DOP, qe.DZD, qe.EGP, qe.ERN, qe.ETB, qe.EUR, qe.FJD, qe.FKP, qe.GBP, qe.GEL, qe.GHS, qe.GIP, qe.GMD, qe.GNF, qe.GTQ, qe.GYD, qe.HKD, qe.HNL, qe.HRK, qe.HTG, qe.HUF, qe.IDR, qe.ILS, qe.INR, qe.IQD, qe.IRR, qe.ISK, qe.JMD, qe.JOD, qe.JPY, qe.KES, qe.KGS, qe.KHR, qe.KMF, qe.KPW, qe.KRW, qe.KWD, qe.KYD, qe.KZT, qe.LAK, qe.LBP, qe.LKR, qe.LRD, qe.LSL, qe.LTL, qe.LVL, qe.LYD, qe.MAD, qe.MDL, qe.MGA, qe.MKD, qe.MMK, qe.MNT, qe.MOP, qe.MRO, qe.MUR, qe.MVR, qe.MWK, qe.MXN, qe.MXV, qe.MYR, qe.MZN, qe.NAD, qe.NGN, qe.NIO, qe.NOK, qe.NPR, qe.NZD, qe.OMR, qe.PAB, qe.PEN, qe.PGK, qe.PHP, qe.PKR, qe.PLN, qe.PYG, qe.QAR, qe.RON, qe.RSD, qe.RUB, qe.RWF, qe.SAR, qe.SBD, qe.SCR, qe.SDG, qe.SEK, qe.SGD, qe.SHP, qe.SLL, qe.SOS, qe.SRD, qe.SSP, qe.STD, qe.SVC, qe.SYP, qe.SZL, qe.THB, qe.TJS, qe.TMT, qe.TND, qe.TOP, qe.TRY, qe.TTD, qe.TWD, qe.TZS, qe.UAH, qe.UGX, qe.USD, qe.USN, qe.USS, qe.UYI, qe.UYU, qe.UZS, qe.VEF, qe.VND, qe.VUV, qe.WST, qe.XAF, qe.XAG, qe.XAU, qe.XBA, qe.XBB, qe.XBC, qe.XBD, qe.XCD, qe.XDR, qe.XFU, qe.XOF, qe.XPD, qe.XPF, qe.XPT, qe.XSU, qe.XTS, qe.XUA, qe.YER, qe.ZAR, qe.ZMW, qe.ZWL;
    var Ie = {
      exports: {}
    };
    ! function(vv, zv) {
      var Pv = "__lodash_hash_undefined__",
        hv = 9007199254740991,
        ev = "[object Arguments]",
        gv = "[object Array]",
        pv = "[object Boolean]",
        dv = "[object Date]",
        Nv = "[object Error]",
        lv = "[object Function]",
        Tv = "[object Map]",
        Wv = "[object Number]",
        wv = "[object Object]",
        av = "[object Promise]",
        sv = "[object RegExp]",
        Cv = "[object Set]",
        iv = "[object String]",
        cv = "[object Symbol]",
        Gv = "[object WeakMap]",
        mv = "[object ArrayBuffer]",
        jv = "[object DataView]",
        fv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Fv = /^\w*$/,
        Yv = /^\./,
        nv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ov = /\\(\\)?/g,
        Dv = /^\[object .+?Constructor\]$/,
        Kv = /^(?:0|[1-9]\d*)$/,
        Vv = {};
      Vv["[object Float32Array]"] = Vv["[object Float64Array]"] = Vv["[object Int8Array]"] = Vv["[object Int16Array]"] = Vv["[object Int32Array]"] = Vv["[object Uint8Array]"] = Vv["[object Uint8ClampedArray]"] = Vv["[object Uint16Array]"] = Vv["[object Uint32Array]"] = !0, Vv[ev] = Vv[gv] = Vv[mv] = Vv[pv] = Vv[jv] = Vv[dv] = Vv[Nv] = Vv[lv] = Vv[Tv] = Vv[Wv] = Vv[wv] = Vv[sv] = Vv[Cv] = Vv[iv] = Vv[Gv] = !1;
      var Uv = "object" == typeof Sv && Sv && Sv.Object === Object && Sv,
        Rv = "object" == typeof self && self && self.Object === Object && self,
        xv = Uv || Rv || Function("return this")(),
        tv = zv && !zv.nodeType && zv,
        qv = tv && vv && !vv.nodeType && vv,
        Iv = qv && qv.exports === tv && Uv.process,
        Qv = function() {
          try {
            return Iv && Iv.binding("util")
          } catch (vv) {}
        }(),
        Zv = Qv && Qv.isTypedArray;

      function Av(vv, zv) {
        for (var Pv = -1, hv = vv ? vv.length : 0; ++Pv < hv && !1 !== zv(vv[Pv], Pv, vv););
        return vv
      }

      function Lv(vv, zv) {
        for (var Pv = -1, hv = vv ? vv.length : 0; ++Pv < hv;)
          if (zv(vv[Pv], Pv, vv)) return !0;
        return !1
      }

      function Hv(vv) {
        var zv = !1;
        if (null != vv && "function" != typeof vv.toString) try {
          zv = !!(vv + "")
        } catch (Pv) {}
        return zv
      }

      function Mv(vv) {
        var zv = -1,
          Pv = Array(vv.size);
        return vv.forEach((function(vv, hv) {
          Pv[++zv] = [hv, vv]
        })), Pv
      }

      function yv(vv, zv) {
        return function(Pv) {
          return vv(zv(Pv))
        }
      }

      function Bv(vv) {
        var zv = -1,
          Pv = Array(vv.size);
        return vv.forEach((function(vv) {
          Pv[++zv] = vv
        })), Pv
      }
      var Jv = Array.prototype,
        Ev = Function.prototype,
        ov = Object.prototype,
        bv = xv["__core-js_shared__"],
        rv = function() {
          var vv = /[^.]+$/.exec(bv && bv.keys && bv.keys.IE_PROTO || "");
          return vv ? "Symbol(src)_1." + vv : ""
        }(),
        kv = Ev.toString,
        Xv = ov.hasOwnProperty,
        uv = ov.toString,
        vz = RegExp("^" + kv.call(Xv).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        zz = xv.Symbol,
        Pz = xv.Uint8Array,
        hz = yv(Object.getPrototypeOf, Object),
        Sz = Object.create,
        ez = ov.propertyIsEnumerable,
        gz = Jv.splice,
        pz = yv(Object.keys, Object),
        dz = Mz(xv, "DataView"),
        Nz = Mz(xv, "Map"),
        lz = Mz(xv, "Promise"),
        Tz = Mz(xv, "Set"),
        Wz = Mz(xv, "WeakMap"),
        wz = Mz(Object, "create"),
        az = kz(dz),
        sz = kz(Nz),
        Cz = kz(lz),
        iz = kz(Tz),
        cz = kz(Wz),
        Gz = zz ? zz.prototype : void 0,
        mz = Gz ? Gz.valueOf : void 0,
        jz = Gz ? Gz.toString : void 0;

      function fz(vv) {
        var zv = -1,
          Pv = vv ? vv.length : 0;
        for (this.clear(); ++zv < Pv;) {
          var hv = vv[zv];
          this.set(hv[0], hv[1])
        }
      }

      function Fz(vv) {
        var zv = -1,
          Pv = vv ? vv.length : 0;
        for (this.clear(); ++zv < Pv;) {
          var hv = vv[zv];
          this.set(hv[0], hv[1])
        }
      }

      function Yz(vv) {
        var zv = -1,
          Pv = vv ? vv.length : 0;
        for (this.clear(); ++zv < Pv;) {
          var hv = vv[zv];
          this.set(hv[0], hv[1])
        }
      }

      function nz(vv) {
        var zv = -1,
          Pv = vv ? vv.length : 0;
        for (this.__data__ = new Yz; ++zv < Pv;) this.add(vv[zv])
      }

      function Oz(vv) {
        this.__data__ = new Fz(vv)
      }

      function Dz(vv, zv) {
        var Pv = zP(vv) || vP(vv) ? function(vv, zv) {
            for (var Pv = -1, hv = Array(vv); ++Pv < vv;) hv[Pv] = zv(Pv);
            return hv
          }(vv.length, String) : [],
          hv = Pv.length,
          Sv = !!hv;
        for (var ev in vv) !zv && !Xv.call(vv, ev) || Sv && ("length" == ev || Bz(ev, hv)) || Pv.push(ev);
        return Pv
      }

      function Kz(vv, zv) {
        for (var Pv = vv.length; Pv--;)
          if (uz(vv[Pv][0], zv)) return Pv;
        return -1
      }
      fz.prototype.clear = function() {
        this.__data__ = wz ? wz(null) : {}
      }, fz.prototype.delete = function(vv) {
        return this.has(vv) && delete this.__data__[vv]
      }, fz.prototype.get = function(vv) {
        var zv = this.__data__;
        if (wz) {
          var hv = zv[vv];
          return hv === Pv ? void 0 : hv
        }
        return Xv.call(zv, vv) ? zv[vv] : void 0
      }, fz.prototype.has = function(vv) {
        var zv = this.__data__;
        return wz ? void 0 !== zv[vv] : Xv.call(zv, vv)
      }, fz.prototype.set = function(vv, zv) {
        return this.__data__[vv] = wz && void 0 === zv ? Pv : zv, this
      }, Fz.prototype.clear = function() {
        this.__data__ = []
      }, Fz.prototype.delete = function(vv) {
        var zv = this.__data__,
          Pv = Kz(zv, vv);
        return !(Pv < 0) && (Pv == zv.length - 1 ? zv.pop() : gz.call(zv, Pv, 1), !0)
      }, Fz.prototype.get = function(vv) {
        var zv = this.__data__,
          Pv = Kz(zv, vv);
        return Pv < 0 ? void 0 : zv[Pv][1]
      }, Fz.prototype.has = function(vv) {
        return Kz(this.__data__, vv) > -1
      }, Fz.prototype.set = function(vv, zv) {
        var Pv = this.__data__,
          hv = Kz(Pv, vv);
        return hv < 0 ? Pv.push([vv, zv]) : Pv[hv][1] = zv, this
      }, Yz.prototype.clear = function() {
        this.__data__ = {
          hash: new fz,
          map: new(Nz || Fz),
          string: new fz
        }
      }, Yz.prototype.delete = function(vv) {
        return Hz(this, vv).delete(vv)
      }, Yz.prototype.get = function(vv) {
        return Hz(this, vv).get(vv)
      }, Yz.prototype.has = function(vv) {
        return Hz(this, vv).has(vv)
      }, Yz.prototype.set = function(vv, zv) {
        return Hz(this, vv).set(vv, zv), this
      }, nz.prototype.add = nz.prototype.push = function(vv) {
        return this.__data__.set(vv, Pv), this
      }, nz.prototype.has = function(vv) {
        return this.__data__.has(vv)
      }, Oz.prototype.clear = function() {
        this.__data__ = new Fz
      }, Oz.prototype.delete = function(vv) {
        return this.__data__.delete(vv)
      }, Oz.prototype.get = function(vv) {
        return this.__data__.get(vv)
      }, Oz.prototype.has = function(vv) {
        return this.__data__.has(vv)
      }, Oz.prototype.set = function(vv, zv) {
        var Pv = this.__data__;
        if (Pv instanceof Fz) {
          var hv = Pv.__data__;
          if (!Nz || hv.length < 199) return hv.push([vv, zv]), this;
          Pv = this.__data__ = new Yz(hv)
        }
        return Pv.set(vv, zv), this
      };
      var Vz, Uz = function(vv, zv, Pv) {
        for (var hv = -1, Sv = Object(vv), ev = Pv(vv), gv = ev.length; gv--;) {
          var pv = ev[Vz ? gv : ++hv];
          if (!1 === zv(Sv[pv], pv, Sv)) break
        }
        return vv
      };

      function Rz(vv, zv) {
        return vv && Uz(vv, zv, lP)
      }

      function xz(vv, zv) {
        for (var Pv = 0, hv = (zv = Jz(zv, vv) ? [zv] : Az(zv)).length; null != vv && Pv < hv;) vv = vv[rz(zv[Pv++])];
        return Pv && Pv == hv ? vv : void 0
      }

      function tz(vv, zv) {
        return null != vv && zv in Object(vv)
      }

      function qz(vv, zv, Pv, hv, Sv) {
        return vv === zv || (null == vv || null == zv || !eP(vv) && !gP(zv) ? vv !== vv && zv !== zv : function(vv, zv, Pv, hv, Sv, lv) {
          var av = zP(vv),
            Gv = zP(zv),
            fv = gv,
            Fv = gv;
          av || (fv = (fv = yz(vv)) == ev ? wv : fv);
          Gv || (Fv = (Fv = yz(zv)) == ev ? wv : Fv);
          var Yv = fv == wv && !Hv(vv),
            nv = Fv == wv && !Hv(zv),
            Ov = fv == Fv;
          if (Ov && !Yv) return lv || (lv = new Oz), av || NP(vv) ? Lz(vv, zv, Pv, hv, Sv, lv) : function(vv, zv, Pv, hv, Sv, ev, gv) {
            switch (Pv) {
              case jv:
                if (vv.byteLength != zv.byteLength || vv.byteOffset != zv.byteOffset) return !1;
                vv = vv.buffer, zv = zv.buffer;
              case mv:
                return !(vv.byteLength != zv.byteLength || !hv(new Pz(vv), new Pz(zv)));
              case pv:
              case dv:
              case Wv:
                return uz(+vv, +zv);
              case Nv:
                return vv.name == zv.name && vv.message == zv.message;
              case sv:
              case iv:
                return vv == zv + "";
              case Tv:
                var lv = Mv;
              case Cv:
                var wv = 2 & ev;
                if (lv || (lv = Bv), vv.size != zv.size && !wv) return !1;
                var av = gv.get(vv);
                if (av) return av == zv;
                ev |= 1, gv.set(vv, zv);
                var Gv = Lz(lv(vv), lv(zv), hv, Sv, ev, gv);
                return gv.delete(vv), Gv;
              case cv:
                if (mz) return mz.call(vv) == mz.call(zv)
            }
            return !1
          }(vv, zv, fv, Pv, hv, Sv, lv);
          if (!(2 & Sv)) {
            var Dv = Yv && Xv.call(vv, "__wrapped__"),
              Kv = nv && Xv.call(zv, "__wrapped__");
            if (Dv || Kv) {
              var Vv = Dv ? vv.value() : vv,
                Uv = Kv ? zv.value() : zv;
              return lv || (lv = new Oz), Pv(Vv, Uv, hv, Sv, lv)
            }
          }
          if (!Ov) return !1;
          return lv || (lv = new Oz),
            function(vv, zv, Pv, hv, Sv, ev) {
              var gv = 2 & Sv,
                pv = lP(vv),
                dv = pv.length,
                Nv = lP(zv),
                lv = Nv.length;
              if (dv != lv && !gv) return !1;
              var Tv = dv;
              for (; Tv--;) {
                var Wv = pv[Tv];
                if (!(gv ? Wv in zv : Xv.call(zv, Wv))) return !1
              }
              var wv = ev.get(vv);
              if (wv && ev.get(zv)) return wv == zv;
              var av = !0;
              ev.set(vv, zv), ev.set(zv, vv);
              var sv = gv;
              for (; ++Tv < dv;) {
                var Cv = vv[Wv = pv[Tv]],
                  iv = zv[Wv];
                if (hv) var cv = gv ? hv(iv, Cv, Wv, zv, vv, ev) : hv(Cv, iv, Wv, vv, zv, ev);
                if (!(void 0 === cv ? Cv === iv || Pv(Cv, iv, hv, Sv, ev) : cv)) {
                  av = !1;
                  break
                }
                sv || (sv = "constructor" == Wv)
              }
              if (av && !sv) {
                var Gv = vv.constructor,
                  mv = zv.constructor;
                Gv == mv || !("constructor" in vv) || !("constructor" in zv) || "function" == typeof Gv && Gv instanceof Gv && "function" == typeof mv && mv instanceof mv || (av = !1)
              }
              return ev.delete(vv), ev.delete(zv), av
            }(vv, zv, Pv, hv, Sv, lv)
        }(vv, zv, qz, Pv, hv, Sv))
      }

      function Iz(vv) {
        return !(!eP(vv) || (zv = vv, rv && rv in zv)) && (hP(vv) || Hv(vv) ? vz : Dv).test(kz(vv));
        var zv
      }

      function Qz(vv) {
        return "function" == typeof vv ? vv : null == vv ? TP : "object" == typeof vv ? zP(vv) ? function(vv, zv) {
          if (Jz(vv) && Ez(zv)) return oz(rz(vv), zv);
          return function(Pv) {
            var hv = function(vv, zv, Pv) {
              var hv = null == vv ? void 0 : xz(vv, zv);
              return void 0 === hv ? Pv : hv
            }(Pv, vv);
            return void 0 === hv && hv === zv ? function(vv, zv) {
              return null != vv && function(vv, zv, Pv) {
                zv = Jz(zv, vv) ? [zv] : Az(zv);
                var hv, Sv = -1,
                  ev = zv.length;
                for (; ++Sv < ev;) {
                  var gv = rz(zv[Sv]);
                  if (!(hv = null != vv && Pv(vv, gv))) break;
                  vv = vv[gv]
                }
                if (hv) return hv;
                ev = vv ? vv.length : 0;
                return !!ev && SP(ev) && Bz(gv, ev) && (zP(vv) || vP(vv))
              }(vv, zv, tz)
            }(Pv, vv) : qz(zv, hv, void 0, 3)
          }
        }(vv[0], vv[1]) : function(vv) {
          var zv = function(vv) {
            var zv = lP(vv),
              Pv = zv.length;
            for (; Pv--;) {
              var hv = zv[Pv],
                Sv = vv[hv];
              zv[Pv] = [hv, Sv, Ez(Sv)]
            }
            return zv
          }(vv);
          if (1 == zv.length && zv[0][2]) return oz(zv[0][0], zv[0][1]);
          return function(Pv) {
            return Pv === vv || function(vv, zv, Pv, hv) {
              var Sv = Pv.length,
                ev = Sv,
                gv = !hv;
              if (null == vv) return !ev;
              for (vv = Object(vv); Sv--;) {
                var pv = Pv[Sv];
                if (gv && pv[2] ? pv[1] !== vv[pv[0]] : !(pv[0] in vv)) return !1
              }
              for (; ++Sv < ev;) {
                var dv = (pv = Pv[Sv])[0],
                  Nv = vv[dv],
                  lv = pv[1];
                if (gv && pv[2]) {
                  if (void 0 === Nv && !(dv in vv)) return !1
                } else {
                  var Tv = new Oz;
                  if (hv) var Wv = hv(Nv, lv, dv, vv, zv, Tv);
                  if (!(void 0 === Wv ? qz(lv, Nv, hv, 3, Tv) : Wv)) return !1
                }
              }
              return !0
            }(Pv, vv, zv)
          }
        }(vv) : function(vv) {
          return Jz(vv) ? (zv = rz(vv), function(vv) {
            return null == vv ? void 0 : vv[zv]
          }) : function(vv) {
            return function(zv) {
              return xz(zv, vv)
            }
          }(vv);
          var zv
        }(vv)
      }

      function Zz(vv) {
        if (! function(vv) {
            var zv = vv && vv.constructor,
              Pv = "function" == typeof zv && zv.prototype || ov;
            return vv === Pv
          }(vv)) return pz(vv);
        var zv = [];
        for (var Pv in Object(vv)) Xv.call(vv, Pv) && "constructor" != Pv && zv.push(Pv);
        return zv
      }

      function Az(vv) {
        return zP(vv) ? vv : bz(vv)
      }

      function Lz(vv, zv, Pv, hv, Sv, ev) {
        var gv = 2 & Sv,
          pv = vv.length,
          dv = zv.length;
        if (pv != dv && !(gv && dv > pv)) return !1;
        var Nv = ev.get(vv);
        if (Nv && ev.get(zv)) return Nv == zv;
        var lv = -1,
          Tv = !0,
          Wv = 1 & Sv ? new nz : void 0;
        for (ev.set(vv, zv), ev.set(zv, vv); ++lv < pv;) {
          var wv = vv[lv],
            av = zv[lv];
          if (hv) var sv = gv ? hv(av, wv, lv, zv, vv, ev) : hv(wv, av, lv, vv, zv, ev);
          if (void 0 !== sv) {
            if (sv) continue;
            Tv = !1;
            break
          }
          if (Wv) {
            if (!Lv(zv, (function(vv, zv) {
                if (!Wv.has(zv) && (wv === vv || Pv(wv, vv, hv, Sv, ev))) return Wv.add(zv)
              }))) {
              Tv = !1;
              break
            }
          } else if (wv !== av && !Pv(wv, av, hv, Sv, ev)) {
            Tv = !1;
            break
          }
        }
        return ev.delete(vv), ev.delete(zv), Tv
      }

      function Hz(vv, zv) {
        var Pv = vv.__data__;
        return function(vv) {
          var zv = typeof vv;
          return "string" == zv || "number" == zv || "symbol" == zv || "boolean" == zv ? "__proto__" !== vv : null === vv
        }(zv) ? Pv["string" == typeof zv ? "string" : "hash"] : Pv.map
      }

      function Mz(vv, zv) {
        var Pv = function(vv, zv) {
          return null == vv ? void 0 : vv[zv]
        }(vv, zv);
        return Iz(Pv) ? Pv : void 0
      }
      var yz = function(vv) {
        return uv.call(vv)
      };

      function Bz(vv, zv) {
        return !!(zv = null == zv ? hv : zv) && ("number" == typeof vv || Kv.test(vv)) && vv > -1 && vv % 1 == 0 && vv < zv
      }

      function Jz(vv, zv) {
        if (zP(vv)) return !1;
        var Pv = typeof vv;
        return !("number" != Pv && "symbol" != Pv && "boolean" != Pv && null != vv && !pP(vv)) || (Fv.test(vv) || !fv.test(vv) || null != zv && vv in Object(zv))
      }

      function Ez(vv) {
        return vv === vv && !eP(vv)
      }

      function oz(vv, zv) {
        return function(Pv) {
          return null != Pv && (Pv[vv] === zv && (void 0 !== zv || vv in Object(Pv)))
        }
      }(dz && yz(new dz(new ArrayBuffer(1))) != jv || Nz && yz(new Nz) != Tv || lz && yz(lz.resolve()) != av || Tz && yz(new Tz) != Cv || Wz && yz(new Wz) != Gv) && (yz = function(vv) {
        var zv = uv.call(vv),
          Pv = zv == wv ? vv.constructor : void 0,
          hv = Pv ? kz(Pv) : void 0;
        if (hv) switch (hv) {
          case az:
            return jv;
          case sz:
            return Tv;
          case Cz:
            return av;
          case iz:
            return Cv;
          case cz:
            return Gv
        }
        return zv
      });
      var bz = Xz((function(vv) {
        var zv;
        vv = null == (zv = vv) ? "" : function(vv) {
          if ("string" == typeof vv) return vv;
          if (pP(vv)) return jz ? jz.call(vv) : "";
          var zv = vv + "";
          return "0" == zv && 1 / vv == -1 / 0 ? "-0" : zv
        }(zv);
        var Pv = [];
        return Yv.test(vv) && Pv.push(""), vv.replace(nv, (function(vv, zv, hv, Sv) {
          Pv.push(hv ? Sv.replace(Ov, "$1") : zv || vv)
        })), Pv
      }));

      function rz(vv) {
        if ("string" == typeof vv || pP(vv)) return vv;
        var zv = vv + "";
        return "0" == zv && 1 / vv == -1 / 0 ? "-0" : zv
      }

      function kz(vv) {
        if (null != vv) {
          try {
            return kv.call(vv)
          } catch (zv) {}
          try {
            return vv + ""
          } catch (zv) {}
        }
        return ""
      }

      function Xz(vv, zv) {
        if ("function" != typeof vv || zv && "function" != typeof zv) throw new TypeError("Expected a function");
        var Pv = function() {
          var hv = arguments,
            Sv = zv ? zv.apply(this, hv) : hv[0],
            ev = Pv.cache;
          if (ev.has(Sv)) return ev.get(Sv);
          var gv = vv.apply(this, hv);
          return Pv.cache = ev.set(Sv, gv), gv
        };
        return Pv.cache = new(Xz.Cache || Yz), Pv
      }

      function uz(vv, zv) {
        return vv === zv || vv !== vv && zv !== zv
      }

      function vP(vv) {
        return function(vv) {
          return gP(vv) && PP(vv)
        }(vv) && Xv.call(vv, "callee") && (!ez.call(vv, "callee") || uv.call(vv) == ev)
      }
      Xz.Cache = Yz;
      var zP = Array.isArray;

      function PP(vv) {
        return null != vv && SP(vv.length) && !hP(vv)
      }

      function hP(vv) {
        var zv = eP(vv) ? uv.call(vv) : "";
        return zv == lv || "[object GeneratorFunction]" == zv
      }

      function SP(vv) {
        return "number" == typeof vv && vv > -1 && vv % 1 == 0 && vv <= hv
      }

      function eP(vv) {
        var zv = typeof vv;
        return !!vv && ("object" == zv || "function" == zv)
      }

      function gP(vv) {
        return !!vv && "object" == typeof vv
      }

      function pP(vv) {
        return "symbol" == typeof vv || gP(vv) && uv.call(vv) == cv
      }
      var dP, NP = Zv ? (dP = Zv, function(vv) {
        return dP(vv)
      }) : function(vv) {
        return gP(vv) && SP(vv.length) && !!Vv[uv.call(vv)]
      };

      function lP(vv) {
        return PP(vv) ? Dz(vv) : Zz(vv)
      }

      function TP(vv) {
        return vv
      }
      vv.exports = function(vv, zv, Pv) {
        var hv, Sv = zP(vv) || NP(vv);
        if (zv = Qz(zv), null == Pv)
          if (Sv || eP(vv)) {
            var ev = vv.constructor;
            Pv = Sv ? zP(vv) ? new ev : [] : hP(ev) ? eP(hv = hz(vv)) ? Sz(hv) : {} : {}
          } else Pv = {};
        return (Sv ? Av : Rz)(vv, (function(vv, hv, Sv) {
          return zv(Pv, vv, hv, Sv)
        })), Pv
      }
    }(Ie, Ie.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: Qe
    } = hv
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);