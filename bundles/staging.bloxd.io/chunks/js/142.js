export const id = 142;
export const ids = [142];
export const modules = {
  7955: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ZW,
      e: () => nk
    });
    var pd = {};
    kd.r(pd), kd.d(pd, {
      e: () => Wp,
      j: () => gp,
      h: () => Zp,
      m: () => Hk,
      n: () => zk,
      p: () => mp,
      q: () => dp,
      u: () => jp,
      w: () => sp,
      y: () => Sp,
      B: () => wk,
      E: () => ap,
      G: () => Yp,
      H: () => bp,
      O: () => Ak,
      L: () => pp,
      Q: () => Fp,
      S: () => Mp
    });
    var Nd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Wd(dd) {
      return dd && dd.__esModule && Object.prototype.hasOwnProperty.call(dd, "default") ? dd.default : dd
    }
    var Pd = {
      exports: {}
    };
    ! function(dd) {
      var Jd = Object.prototype.hasOwnProperty,
        kd = "~";

      function pd() {}

      function Nd(dd, Jd, kd) {
        this.hQ = dd, this.context = Jd, this.once = kd || !1
      }

      function Wd(dd, Jd, pd, Wd, Pd) {
        if ("function" !== typeof pd) throw new TypeError("The listener must be a function");
        var Zd = new Nd(pd, Wd || dd, Pd),
          gd = kd ? kd + Jd : Jd;
        return dd._events[gd] ? dd._events[gd].hQ ? dd._events[gd] = [dd._events[gd], Zd] : dd._events[gd].push(Zd) : (dd._events[gd] = Zd, dd._eventsCount++), dd
      }

      function Pd(dd, Jd) {
        0 === --dd._eventsCount ? dd._events = new pd : delete dd._events[Jd]
      }

      function Zd() {
        this._events = new pd, this._eventsCount = 0
      }
      Object.create && (pd.prototype = Object.create(null), (new pd).__proto__ || (kd = !1)), Zd.prototype.eventNames = function() {
        var dd, pd, Nd = [];
        if (0 === this._eventsCount) return Nd;
        for (pd in dd = this._events) Jd.call(dd, pd) && Nd.push(kd ? pd.slice(1) : pd);
        return Object.getOwnPropertySymbols ? Nd.concat(Object.getOwnPropertySymbols(dd)) : Nd
      }, Zd.prototype.listeners = function(dd) {
        var Jd = kd ? kd + dd : dd,
          pd = this._events[Jd];
        if (!pd) return [];
        if (pd.hQ) return [pd.hQ];
        for (var Nd = 0, Wd = pd.length, Pd = new Array(Wd); Nd < Wd; Nd++) Pd[Nd] = pd[Nd].hQ;
        return Pd
      }, Zd.prototype.listenerCount = function(dd) {
        var Jd = kd ? kd + dd : dd,
          pd = this._events[Jd];
        return pd ? pd.hQ ? 1 : pd.length : 0
      }, Zd.prototype.emit = function(dd, Jd, pd, Nd, Wd, Pd) {
        var Zd = kd ? kd + dd : dd;
        if (!this._events[Zd]) return !1;
        var gd, Cd, Kd = this._events[Zd],
          od = arguments.length;
        if (Kd.hQ) {
          switch (Kd.once && this.removeListener(dd, Kd.hQ, void 0, !0), od) {
            case 1:
              return Kd.hQ.call(Kd.context), !0;
            case 2:
              return Kd.hQ.call(Kd.context, Jd), !0;
            case 3:
              return Kd.hQ.call(Kd.context, Jd, pd), !0;
            case 4:
              return Kd.hQ.call(Kd.context, Jd, pd, Nd), !0;
            case 5:
              return Kd.hQ.call(Kd.context, Jd, pd, Nd, Wd), !0;
            case 6:
              return Kd.hQ.call(Kd.context, Jd, pd, Nd, Wd, Pd), !0
          }
          for (Cd = 1, gd = new Array(od - 1); Cd < od; Cd++) gd[Cd - 1] = arguments[Cd];
          Kd.hQ.apply(Kd.context, gd)
        } else {
          var ld, Qd = Kd.length;
          for (Cd = 0; Cd < Qd; Cd++) switch (Kd[Cd].once && this.removeListener(dd, Kd[Cd].hQ, void 0, !0), od) {
            case 1:
              Kd[Cd].hQ.call(Kd[Cd].context);
              break;
            case 2:
              Kd[Cd].hQ.call(Kd[Cd].context, Jd);
              break;
            case 3:
              Kd[Cd].hQ.call(Kd[Cd].context, Jd, pd);
              break;
            case 4:
              Kd[Cd].hQ.call(Kd[Cd].context, Jd, pd, Nd);
              break;
            default:
              if (!gd)
                for (ld = 1, gd = new Array(od - 1); ld < od; ld++) gd[ld - 1] = arguments[ld];
              Kd[Cd].hQ.apply(Kd[Cd].context, gd)
          }
        }
        return !0
      }, Zd.prototype.on = function(dd, Jd, kd) {
        return Wd(this, dd, Jd, kd, !1)
      }, Zd.prototype.once = function(dd, Jd, kd) {
        return Wd(this, dd, Jd, kd, !0)
      }, Zd.prototype.removeListener = function(dd, Jd, pd, Nd) {
        var Wd = kd ? kd + dd : dd;
        if (!this._events[Wd]) return this;
        if (!Jd) return Pd(this, Wd), this;
        var Zd = this._events[Wd];
        if (Zd.hQ) Zd.hQ !== Jd || Nd && !Zd.once || pd && Zd.context !== pd || Pd(this, Wd);
        else {
          for (var gd = 0, Cd = [], Kd = Zd.length; gd < Kd; gd++)(Zd[gd].hQ !== Jd || Nd && !Zd[gd].once || pd && Zd[gd].context !== pd) && Cd.push(Zd[gd]);
          Cd.length ? this._events[Wd] = 1 === Cd.length ? Cd[0] : Cd : Pd(this, Wd)
        }
        return this
      }, Zd.prototype.xR = function(dd) {
        var Jd;
        return dd ? (Jd = kd ? kd + dd : dd, this._events[Jd] && Pd(this, Jd)) : (this._events = new pd, this._eventsCount = 0), this
      }, Zd.prototype.off = Zd.prototype.removeListener, Zd.prototype.addListener = Zd.prototype.on, Zd.prefixed = kd, Zd.EventEmitter = Zd, dd.exports = Zd
    }(Pd);
    var Zd, gd, Cd = Wd(Pd.exports);
    ! function(dd) {
      dd.assertEqual = dd => dd, dd.assertIs = function(dd) {}, dd.assertNever = function(dd) {
        throw new Error
      }, dd.arrayToEnum = dd => {
        const Jd = {};
        for (const kd of dd) Jd[kd] = kd;
        return Jd
      }, dd.getValidEnumValues = Jd => {
        const kd = dd.objectKeys(Jd).filter((dd => "number" !== typeof Jd[Jd[dd]])),
          pd = {};
        for (const dd of kd) pd[dd] = Jd[dd];
        return dd.objectValues(pd)
      }, dd.objectValues = Jd => dd.objectKeys(Jd).map((function(dd) {
        return Jd[dd]
      })), dd.objectKeys = "function" === typeof Object.keys ? dd => Object.keys(dd) : dd => {
        const Jd = [];
        for (const kd in dd) Object.prototype.hasOwnProperty.call(dd, kd) && Jd.push(kd);
        return Jd
      }, dd.find = (dd, Jd) => {
        for (const kd of dd)
          if (Jd(kd)) return kd
      }, dd.isInteger = "function" === typeof Number.isInteger ? dd => Number.isInteger(dd) : dd => "number" === typeof dd && isFinite(dd) && Math.floor(dd) === dd, dd.joinValues = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return dd.map((dd => "string" === typeof dd ? `'${dd}'` : dd)).join(Jd)
      }, dd.jsonStringifyReplacer = (dd, Jd) => "bigint" === typeof Jd ? Jd.toString() : Jd
    }(Zd || (Zd = {})),
    function(dd) {
      dd.mergeShapes = (dd, Jd) => ({
        ...dd,
        ...Jd
      })
    }(gd || (gd = {}));
    const Kd = Zd.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      od = dd => {
        switch (typeof dd) {
          case "undefined":
            return Kd.undefined;
          case "string":
            return Kd.string;
          case "number":
            return isNaN(dd) ? Kd.nan : Kd.number;
          case "boolean":
            return Kd.boolean;
          case "function":
            return Kd.function;
          case "bigint":
            return Kd.bigint;
          case "symbol":
            return Kd.symbol;
          case "object":
            return Array.isArray(dd) ? Kd.array : null === dd ? Kd.null : dd.then && "function" === typeof dd.then && dd.catch && "function" === typeof dd.catch ? Kd.promise : "undefined" !== typeof Map && dd instanceof Map ? Kd.map : "undefined" !== typeof Set && dd instanceof Set ? Kd.set : "undefined" !== typeof Date && dd instanceof Date ? Kd.date : Kd.object;
          default:
            return Kd.unknown
        }
      },
      ld = Zd.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Qd extends Error {
      constructor(dd) {
        var Jd;
        super(), Jd = this, this.issues = [], this.addIssue = dd => {
          this.issues = [...this.issues, dd]
        }, this.addIssues = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Jd.issues = [...Jd.issues, ...dd]
        };
        const kd = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, kd) : this.__proto__ = kd, this.name = "ZodError", this.issues = dd
      }
      get errors() {
        return this.issues
      }
      format(dd) {
        const Jd = dd || function(dd) {
            return dd.message
          },
          kd = {
            _errors: []
          },
          pd = dd => {
            for (const Nd of dd.issues)
              if ("invalid_union" === Nd.code) Nd.unionErrors.map(pd);
              else if ("invalid_return_type" === Nd.code) pd(Nd.returnTypeError);
            else if ("invalid_arguments" === Nd.code) pd(Nd.argumentsError);
            else if (0 === Nd.path.length) kd._errors.push(Jd(Nd));
            else {
              let dd = kd,
                pd = 0;
              for (; pd < Nd.path.length;) {
                const kd = Nd.path[pd];
                pd === Nd.path.length - 1 ? (dd[kd] = dd[kd] || {
                  _errors: []
                }, dd[kd]._errors.push(Jd(Nd))) : dd[kd] = dd[kd] || {
                  _errors: []
                }, dd = dd[kd], pd++
              }
            }
          };
        return pd(this), kd
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, Zd.jsonStringifyReplacer, 2)
      }
      get VQ() {
        return 0 === this.issues.length
      }
      flatten() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dd => dd.message;
        const Jd = {},
          kd = [];
        for (const pd of this.issues) pd.path.length > 0 ? (Jd[pd.path[0]] = Jd[pd.path[0]] || [], Jd[pd.path[0]].push(dd(pd))) : kd.push(dd(pd));
        return {
          formErrors: kd,
          fieldErrors: Jd
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Qd.create = dd => new Qd(dd);
    const Ld = (dd, Jd) => {
      let kd;
      switch (dd.code) {
        case ld.invalid_type:
          kd = dd.received === Kd.undefined ? "Required" : `Expected ${dd.expected}, received ${dd.received}`;
          break;
        case ld.invalid_literal:
          kd = `Invalid literal value, expected ${JSON.stringify(dd.expected,Zd.jsonStringifyReplacer)}`;
          break;
        case ld.unrecognized_keys:
          kd = `Unrecognized key(s) in object: ${Zd.joinValues(dd.keys,", ")}`;
          break;
        case ld.invalid_union:
          kd = "Invalid input";
          break;
        case ld.invalid_union_discriminator:
          kd = `Invalid discriminator value. Expected ${Zd.joinValues(dd.options)}`;
          break;
        case ld.invalid_enum_value:
          kd = `Invalid enum value. Expected ${Zd.joinValues(dd.options)}, received '${dd.received}'`;
          break;
        case ld.invalid_arguments:
          kd = "Invalid function arguments";
          break;
        case ld.invalid_return_type:
          kd = "Invalid function return type";
          break;
        case ld.invalid_date:
          kd = "Invalid date";
          break;
        case ld.invalid_string:
          "object" === typeof dd.validation ? "includes" in dd.validation ? (kd = `Invalid input: must include "${dd.validation.includes}"`, "number" === typeof dd.validation.position && (kd = `${kd} at one or more positions greater than or equal to ${dd.validation.position}`)) : "startsWith" in dd.validation ? kd = `Invalid input: must start with "${dd.validation.startsWith}"` : "endsWith" in dd.validation ? kd = `Invalid input: must end with "${dd.validation.endsWith}"` : Zd.assertNever(dd.validation) : kd = "regex" !== dd.validation ? `Invalid ${dd.validation}` : "Invalid";
          break;
        case ld.too_small:
          kd = "array" === dd.type ? `Array must contain ${dd.exact?"exactly":dd.inclusive?"at least":"more than"} ${dd.minimum} element(s)` : "string" === dd.type ? `String must contain ${dd.exact?"exactly":dd.inclusive?"at least":"over"} ${dd.minimum} character(s)` : "number" === dd.type ? `Number must be ${dd.exact?"exactly equal to ":dd.inclusive?"greater than or equal to ":"greater than "}${dd.minimum}` : "date" === dd.type ? `Date must be ${dd.exact?"exactly equal to ":dd.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(dd.minimum))}` : "Invalid input";
          break;
        case ld.too_big:
          kd = "array" === dd.type ? `Array must contain ${dd.exact?"exactly":dd.inclusive?"at most":"less than"} ${dd.maximum} element(s)` : "string" === dd.type ? `String must contain ${dd.exact?"exactly":dd.inclusive?"at most":"under"} ${dd.maximum} character(s)` : "number" === dd.type ? `Number must be ${dd.exact?"exactly":dd.inclusive?"less than or equal to":"less than"} ${dd.maximum}` : "bigint" === dd.type ? `BigInt must be ${dd.exact?"exactly":dd.inclusive?"less than or equal to":"less than"} ${dd.maximum}` : "date" === dd.type ? `Date must be ${dd.exact?"exactly":dd.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(dd.maximum))}` : "Invalid input";
          break;
        case ld.custom:
          kd = "Invalid input";
          break;
        case ld.invalid_intersection_types:
          kd = "Intersection results could not be merged";
          break;
        case ld.not_multiple_of:
          kd = `Number must be a multiple of ${dd.multipleOf}`;
          break;
        case ld.not_finite:
          kd = "Number must be finite";
          break;
        default:
          kd = Jd.defaultError, Zd.assertNever(dd)
      }
      return {
        message: kd
      }
    };
    let Od = Ld;

    function ed() {
      return Od
    }
    const Rd = dd => {
      const {
        data: Jd,
        path: kd,
        errorMaps: pd,
        issueData: Nd
      } = dd, Wd = [...kd, ...Nd.path || []], Pd = {
        ...Nd,
        path: Wd
      };
      let Zd = "";
      const gd = pd.filter((dd => !!dd)).slice().reverse();
      for (const Cd of gd) Zd = Cd(Pd, {
        data: Jd,
        defaultError: Zd
      }).message;
      return {
        ...Nd,
        path: Wd,
        message: Nd.message || Zd
      }
    };

    function Id(dd, Jd) {
      const kd = Rd({
        issueData: Jd,
        data: dd.data,
        path: dd.path,
        errorMaps: [dd.common.contextualErrorMap, dd.schemaErrorMap, ed(), Ld].filter((dd => !!dd))
      });
      dd.common.issues.push(kd)
    }
    class Gd {
      constructor() {
        this.value = "valid"
      }
      sL() {
        "valid" === this.value && (this.value = "sL")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(dd, Jd) {
        const kd = [];
        for (const pd of Jd) {
          if ("aborted" === pd.status) return vd;
          "sL" === pd.status && dd.sL(), kd.push(pd.value)
        }
        return {
          status: dd.value,
          value: kd
        }
      }
      static async mergeObjectAsync(dd, Jd) {
        const kd = [];
        for (const pd of Jd) kd.push({
          key: await pd.key,
          value: await pd.value
        });
        return Gd.mergeObjectSync(dd, kd)
      }
      static mergeObjectSync(dd, Jd) {
        const kd = {};
        for (const pd of Jd) {
          const {
            key: Jd,
            value: Nd
          } = pd;
          if ("aborted" === Jd.status) return vd;
          if ("aborted" === Nd.status) return vd;
          "sL" === Jd.status && dd.sL(), "sL" === Nd.status && dd.sL(), "__proto__" === Jd.value || "undefined" === typeof Nd.value && !pd.alwaysSet || (kd[Jd.value] = Nd.value)
        }
        return {
          status: dd.value,
          value: kd
        }
      }
    }
    const vd = Object.freeze({
        status: "aborted"
      }),
      xd = dd => ({
        status: "sL",
        value: dd
      }),
      qd = dd => ({
        status: "valid",
        value: dd
      }),
      Bd = dd => "aborted" === dd.status,
      sd = dd => "sL" === dd.status,
      ad = dd => "valid" === dd.status,
      Md = dd => "undefined" !== typeof Promise && dd instanceof Promise;
    var Fd;
    ! function(dd) {
      dd.errToObj = dd => "string" === typeof dd ? {
        message: dd
      } : dd || {}, dd.toString = dd => "string" === typeof dd ? dd : null === dd || void 0 === dd ? void 0 : dd.message
    }(Fd || (Fd = {}));
    class Yd {
      constructor(dd, Jd, kd, pd) {
        this._cachedPath = [], this.parent = dd, this.data = Jd, this._path = kd, this._key = pd
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const md = (dd, Jd) => {
      if (ad(Jd)) return {
        success: !0,
        data: Jd.value
      };
      if (!dd.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Jd = new Qd(dd.common.issues);
          return this._error = Jd, this._error
        }
      }
    };

    function bd(dd) {
      if (!dd) return {};
      const {
        errorMap: Jd,
        invalid_type_error: kd,
        required_error: pd,
        description: Nd
      } = dd;
      if (Jd && (kd || pd)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Jd) return {
        errorMap: Jd,
        description: Nd
      };
      return {
        errorMap: (dd, Jd) => "invalid_type" !== dd.code ? {
          message: Jd.defaultError
        } : "undefined" === typeof Jd.data ? {
          message: null !== pd && void 0 !== pd ? pd : Jd.defaultError
        } : {
          message: null !== kd && void 0 !== kd ? kd : Jd.defaultError
        },
        description: Nd
      }
    }
    class Sd {
      constructor(dd) {
        this.spa = this.safeParseAsync, this._def = dd, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(dd) {
        return od(dd.data)
      }
      _getOrReturnCtx(dd, Jd) {
        return Jd || {
          common: dd.parent.common,
          data: dd.data,
          parsedType: od(dd.data),
          schemaErrorMap: this._def.errorMap,
          path: dd.path,
          parent: dd.parent
        }
      }
      _processInputParams(dd) {
        return {
          status: new Gd,
          ctx: {
            common: dd.parent.common,
            data: dd.data,
            parsedType: od(dd.data),
            schemaErrorMap: this._def.errorMap,
            path: dd.path,
            parent: dd.parent
          }
        }
      }
      _parseSync(dd) {
        const Jd = this._parse(dd);
        if (Md(Jd)) throw new Error("Synchronous parse encountered promise.");
        return Jd
      }
      _parseAsync(dd) {
        const Jd = this._parse(dd);
        return Promise.resolve(Jd)
      }
      parse(dd, Jd) {
        const kd = this.safeParse(dd, Jd);
        if (kd.success) return kd.data;
        throw kd.error
      }
      safeParse(dd, Jd) {
        var kd;
        const pd = {
            common: {
              issues: [],
              async: null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.async) && void 0 !== kd && kd,
              contextualErrorMap: null === Jd || void 0 === Jd ? void 0 : Jd.errorMap
            },
            path: (null === Jd || void 0 === Jd ? void 0 : Jd.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: dd,
            parsedType: od(dd)
          },
          Nd = this._parseSync({
            data: dd,
            path: pd.path,
            parent: pd
          });
        return md(pd, Nd)
      }
      async parseAsync(dd, Jd) {
        const kd = await this.safeParseAsync(dd, Jd);
        if (kd.success) return kd.data;
        throw kd.error
      }
      async safeParseAsync(dd, Jd) {
        const kd = {
            common: {
              issues: [],
              contextualErrorMap: null === Jd || void 0 === Jd ? void 0 : Jd.errorMap,
              async: !0
            },
            path: (null === Jd || void 0 === Jd ? void 0 : Jd.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: dd,
            parsedType: od(dd)
          },
          pd = this._parse({
            data: dd,
            path: kd.path,
            parent: kd
          }),
          Nd = await (Md(pd) ? pd : Promise.resolve(pd));
        return md(kd, Nd)
      }
      refine(dd, Jd) {
        const kd = dd => "string" === typeof Jd || "undefined" === typeof Jd ? {
          message: Jd
        } : "function" === typeof Jd ? Jd(dd) : Jd;
        return this._refinement(((Jd, pd) => {
          const Nd = dd(Jd),
            Wd = () => pd.addIssue({
              code: ld.custom,
              ...kd(Jd)
            });
          return "undefined" !== typeof Promise && Nd instanceof Promise ? Nd.then((dd => !!dd || (Wd(), !1))) : !!Nd || (Wd(), !1)
        }))
      }
      refinement(dd, Jd) {
        return this._refinement(((kd, pd) => !!dd(kd) || (pd.addIssue("function" === typeof Jd ? Jd(kd, pd) : Jd), !1)))
      }
      _refinement(dd) {
        return new xJ({
          schema: this,
          typeName: jJ.ZodEffects,
          effect: {
            type: "refinement",
            refinement: dd
          }
        })
      }
      superRefine(dd) {
        return this._refinement(dd)
      }
      optional() {
        return qJ.create(this, this._def)
      }
      nullable() {
        return BJ.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return kJ.create(this, this._def)
      }
      promise() {
        return vJ.create(this, this._def)
      }
      or(dd) {
        return WJ.create([this, dd], this._def)
      }
      and(dd) {
        return CJ.create(this, dd, this._def)
      }
      transform(dd) {
        return new xJ({
          ...bd(this._def),
          schema: this,
          typeName: jJ.ZodEffects,
          effect: {
            type: "transform",
            transform: dd
          }
        })
      }
      default (dd) {
        const Jd = "function" === typeof dd ? dd : () => dd;
        return new sJ({
          ...bd(this._def),
          innerType: this,
          defaultValue: Jd,
          typeName: jJ.ZodDefault
        })
      }
      brand() {
        return new FJ({
          typeName: jJ.ZodBranded,
          type: this,
          ...bd(this._def)
        })
      } catch (dd) {
        const Jd = "function" === typeof dd ? dd : () => dd;
        return new iJ({
          ...bd(this._def),
          innerType: this,
          catchValue: Jd,
          typeName: jJ.ZodCatch
        })
      }
      describe(dd) {
        return new(0, this.constructor)({
          ...this._def,
          description: dd
        })
      }
      pipe(dd) {
        return YJ.create(this, dd)
      }
      readonly() {
        return mJ.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const jd = /^c[^\s-]{8,}$/i,
      Xd = /^[a-z][a-z0-9]*$/,
      fd = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      nd = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Ud = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let yd;
    const Dd = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Td = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Ed extends Sd {
      _parse(dd) {
        this._def.coerce && (dd.data = String(dd.data));
        if (this._getType(dd) !== Kd.string) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.string,
            received: Jd.parsedType
          }), vd
        }
        const Jd = new Gd;
        let kd;
        for (const gd of this._def.checks)
          if ("min" === gd.kind) dd.data.length < gd.value && (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
            code: ld.too_small,
            minimum: gd.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: gd.message
          }), Jd.sL());
          else if ("max" === gd.kind) dd.data.length > gd.value && (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          code: ld.too_big,
          maximum: gd.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: gd.message
        }), Jd.sL());
        else if ("length" === gd.kind) {
          const pd = dd.data.length > gd.value,
            Nd = dd.data.length < gd.value;
          (pd || Nd) && (kd = this._getOrReturnCtx(dd, kd), pd ? Id(kd, {
            code: ld.too_big,
            maximum: gd.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: gd.message
          }) : Nd && Id(kd, {
            code: ld.too_small,
            minimum: gd.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: gd.message
          }), Jd.sL())
        } else if ("email" === gd.kind) Ud.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "email",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL());
        else if ("emoji" === gd.kind) yd || (yd = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), yd.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "emoji",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL());
        else if ("uuid" === gd.kind) nd.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "uuid",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL());
        else if ("cuid" === gd.kind) jd.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "cuid",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL());
        else if ("cuid2" === gd.kind) Xd.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "cuid2",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL());
        else if ("ulid" === gd.kind) fd.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "ulid",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL());
        else if ("url" === gd.kind) try {
          new URL(dd.data)
        } catch (Pd) {
          kd = this._getOrReturnCtx(dd, kd), Id(kd, {
            validation: "url",
            code: ld.invalid_string,
            message: gd.message
          }), Jd.sL()
        } else if ("regex" === gd.kind) {
          gd.regex.lastIndex = 0;
          gd.regex.test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
            validation: "regex",
            code: ld.invalid_string,
            message: gd.message
          }), Jd.sL())
        } else if ("trim" === gd.kind) dd.data = dd.data.trim();
        else if ("includes" === gd.kind) dd.data.includes(gd.value, gd.position) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          code: ld.invalid_string,
          validation: {
            includes: gd.value,
            position: gd.position
          },
          message: gd.message
        }), Jd.sL());
        else if ("toLowerCase" === gd.kind) dd.data = dd.data.toLowerCase();
        else if ("toUpperCase" === gd.kind) dd.data = dd.data.toUpperCase();
        else if ("startsWith" === gd.kind) dd.data.startsWith(gd.value) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          code: ld.invalid_string,
          validation: {
            startsWith: gd.value
          },
          message: gd.message
        }), Jd.sL());
        else if ("endsWith" === gd.kind) dd.data.endsWith(gd.value) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          code: ld.invalid_string,
          validation: {
            endsWith: gd.value
          },
          message: gd.message
        }), Jd.sL());
        else if ("datetime" === gd.kind) {
          ((Wd = gd).precision ? Wd.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Wd.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Wd.precision}}Z$`) : 0 === Wd.precision ? Wd.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Wd.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(dd.data) || (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
            code: ld.invalid_string,
            validation: "datetime",
            message: gd.message
          }), Jd.sL())
        } else "ip" === gd.kind ? (pd = dd.data, ("v4" !== (Nd = gd.version) && Nd || !Dd.test(pd)) && ("v6" !== Nd && Nd || !Td.test(pd)) && (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          validation: "ip",
          code: ld.invalid_string,
          message: gd.message
        }), Jd.sL())) : Zd.assertNever(gd);
        var pd, Nd, Wd;
        return {
          status: Jd.value,
          value: dd.data
        }
      }
      _regex(dd, Jd, kd) {
        return this.refinement((Jd => dd.test(Jd)), {
          validation: Jd,
          code: ld.invalid_string,
          ...Fd.errToObj(kd)
        })
      }
      _addCheck(dd) {
        return new Ed({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      email(dd) {
        return this._addCheck({
          kind: "email",
          ...Fd.errToObj(dd)
        })
      }
      url(dd) {
        return this._addCheck({
          kind: "url",
          ...Fd.errToObj(dd)
        })
      }
      emoji(dd) {
        return this._addCheck({
          kind: "emoji",
          ...Fd.errToObj(dd)
        })
      }
      uuid(dd) {
        return this._addCheck({
          kind: "uuid",
          ...Fd.errToObj(dd)
        })
      }
      cuid(dd) {
        return this._addCheck({
          kind: "cuid",
          ...Fd.errToObj(dd)
        })
      }
      cuid2(dd) {
        return this._addCheck({
          kind: "cuid2",
          ...Fd.errToObj(dd)
        })
      }
      ulid(dd) {
        return this._addCheck({
          kind: "ulid",
          ...Fd.errToObj(dd)
        })
      }
      ip(dd) {
        return this._addCheck({
          kind: "ip",
          ...Fd.errToObj(dd)
        })
      }
      datetime(dd) {
        var Jd;
        return "string" === typeof dd ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: dd
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === dd || void 0 === dd ? void 0 : dd.precision) ? null : null === dd || void 0 === dd ? void 0 : dd.precision,
          offset: null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.offset) && void 0 !== Jd && Jd,
          ...Fd.errToObj(null === dd || void 0 === dd ? void 0 : dd.message)
        })
      }
      regex(dd, Jd) {
        return this._addCheck({
          kind: "regex",
          regex: dd,
          ...Fd.errToObj(Jd)
        })
      }
      includes(dd, Jd) {
        return this._addCheck({
          kind: "includes",
          value: dd,
          position: null === Jd || void 0 === Jd ? void 0 : Jd.position,
          ...Fd.errToObj(null === Jd || void 0 === Jd ? void 0 : Jd.message)
        })
      }
      startsWith(dd, Jd) {
        return this._addCheck({
          kind: "startsWith",
          value: dd,
          ...Fd.errToObj(Jd)
        })
      }
      endsWith(dd, Jd) {
        return this._addCheck({
          kind: "endsWith",
          value: dd,
          ...Fd.errToObj(Jd)
        })
      }
      min(dd, Jd) {
        return this._addCheck({
          kind: "min",
          value: dd,
          ...Fd.errToObj(Jd)
        })
      }
      max(dd, Jd) {
        return this._addCheck({
          kind: "max",
          value: dd,
          ...Fd.errToObj(Jd)
        })
      }
      length(dd, Jd) {
        return this._addCheck({
          kind: "length",
          value: dd,
          ...Fd.errToObj(Jd)
        })
      }
      nonempty(dd) {
        return this.min(1, Fd.errToObj(dd))
      }
      trim() {
        return new Ed({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Ed({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Ed({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((dd => "datetime" === dd.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((dd => "email" === dd.kind))
      }
      get isURL() {
        return !!this._def.checks.find((dd => "url" === dd.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((dd => "emoji" === dd.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((dd => "uuid" === dd.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((dd => "cuid" === dd.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((dd => "cuid2" === dd.kind))
      }
      get isULID() {
        return !!this._def.checks.find((dd => "ulid" === dd.kind))
      }
      get isIP() {
        return !!this._def.checks.find((dd => "ip" === dd.kind))
      }
      get minLength() {
        let dd = null;
        for (const Jd of this._def.checks) "min" === Jd.kind && (null === dd || Jd.value > dd) && (dd = Jd.value);
        return dd
      }
      get maxLength() {
        let dd = null;
        for (const Jd of this._def.checks) "max" === Jd.kind && (null === dd || Jd.value < dd) && (dd = Jd.value);
        return dd
      }
    }

    function cd(dd, Jd) {
      const kd = (dd.toString().split(".")[1] || "").length,
        pd = (Jd.toString().split(".")[1] || "").length,
        Nd = kd > pd ? kd : pd;
      return parseInt(dd.toFixed(Nd).replace(".", "")) % parseInt(Jd.toFixed(Nd).replace(".", "")) / Math.pow(10, Nd)
    }
    Ed.create = dd => {
      var Jd;
      return new Ed({
        checks: [],
        typeName: jJ.ZodString,
        coerce: null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.coerce) && void 0 !== Jd && Jd,
        ...bd(dd)
      })
    };
    class hd extends Sd {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(dd) {
        this._def.coerce && (dd.data = Number(dd.data));
        if (this._getType(dd) !== Kd.number) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.number,
            received: Jd.parsedType
          }), vd
        }
        let Jd;
        const kd = new Gd;
        for (const pd of this._def.checks)
          if ("int" === pd.kind) Zd.isInteger(dd.data) || (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
            code: ld.invalid_type,
            expected: "integer",
            received: "float",
            message: pd.message
          }), kd.sL());
          else if ("min" === pd.kind) {
          (pd.inclusive ? dd.data < pd.value : dd.data <= pd.value) && (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
            code: ld.too_small,
            minimum: pd.value,
            type: "number",
            inclusive: pd.inclusive,
            exact: !1,
            message: pd.message
          }), kd.sL())
        } else if ("max" === pd.kind) {
          (pd.inclusive ? dd.data > pd.value : dd.data >= pd.value) && (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
            code: ld.too_big,
            maximum: pd.value,
            type: "number",
            inclusive: pd.inclusive,
            exact: !1,
            message: pd.message
          }), kd.sL())
        } else "multipleOf" === pd.kind ? 0 !== cd(dd.data, pd.value) && (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
          code: ld.not_multiple_of,
          multipleOf: pd.value,
          message: pd.message
        }), kd.sL()) : "finite" === pd.kind ? Number.isFinite(dd.data) || (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
          code: ld.not_finite,
          message: pd.message
        }), kd.sL()) : Zd.assertNever(pd);
        return {
          status: kd.value,
          value: dd.data
        }
      }
      gte(dd, Jd) {
        return this.setLimit("min", dd, !0, Fd.toString(Jd))
      }
      gt(dd, Jd) {
        return this.setLimit("min", dd, !1, Fd.toString(Jd))
      }
      lte(dd, Jd) {
        return this.setLimit("max", dd, !0, Fd.toString(Jd))
      }
      lt(dd, Jd) {
        return this.setLimit("max", dd, !1, Fd.toString(Jd))
      }
      setLimit(dd, Jd, kd, pd) {
        return new hd({
          ...this._def,
          checks: [...this._def.checks, {
            kind: dd,
            value: Jd,
            inclusive: kd,
            message: Fd.toString(pd)
          }]
        })
      }
      _addCheck(dd) {
        return new hd({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      int(dd) {
        return this._addCheck({
          kind: "int",
          message: Fd.toString(dd)
        })
      }
      positive(dd) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Fd.toString(dd)
        })
      }
      negative(dd) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Fd.toString(dd)
        })
      }
      nonpositive(dd) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Fd.toString(dd)
        })
      }
      nonnegative(dd) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Fd.toString(dd)
        })
      }
      multipleOf(dd, Jd) {
        return this._addCheck({
          kind: "multipleOf",
          value: dd,
          message: Fd.toString(Jd)
        })
      }
      finite(dd) {
        return this._addCheck({
          kind: "finite",
          message: Fd.toString(dd)
        })
      }
      safe(dd) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Fd.toString(dd)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Fd.toString(dd)
        })
      }
      get minValue() {
        let dd = null;
        for (const Jd of this._def.checks) "min" === Jd.kind && (null === dd || Jd.value > dd) && (dd = Jd.value);
        return dd
      }
      get maxValue() {
        let dd = null;
        for (const Jd of this._def.checks) "max" === Jd.kind && (null === dd || Jd.value < dd) && (dd = Jd.value);
        return dd
      }
      get isInt() {
        return !!this._def.checks.find((dd => "int" === dd.kind || "multipleOf" === dd.kind && Zd.isInteger(dd.value)))
      }
      get isFinite() {
        let dd = null,
          Jd = null;
        for (const kd of this._def.checks) {
          if ("finite" === kd.kind || "int" === kd.kind || "multipleOf" === kd.kind) return !0;
          "min" === kd.kind ? (null === Jd || kd.value > Jd) && (Jd = kd.value) : "max" === kd.kind && (null === dd || kd.value < dd) && (dd = kd.value)
        }
        return Number.isFinite(Jd) && Number.isFinite(dd)
      }
    }
    hd.create = dd => new hd({
      checks: [],
      typeName: jJ.ZodNumber,
      coerce: (null === dd || void 0 === dd ? void 0 : dd.coerce) || !1,
      ...bd(dd)
    });
    class rd extends Sd {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(dd) {
        this._def.coerce && (dd.data = BigInt(dd.data));
        if (this._getType(dd) !== Kd.bigint) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.bigint,
            received: Jd.parsedType
          }), vd
        }
        let Jd;
        const kd = new Gd;
        for (const pd of this._def.checks)
          if ("min" === pd.kind) {
            (pd.inclusive ? dd.data < pd.value : dd.data <= pd.value) && (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
              code: ld.too_small,
              type: "bigint",
              minimum: pd.value,
              inclusive: pd.inclusive,
              message: pd.message
            }), kd.sL())
          } else if ("max" === pd.kind) {
          (pd.inclusive ? dd.data > pd.value : dd.data >= pd.value) && (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
            code: ld.too_big,
            type: "bigint",
            maximum: pd.value,
            inclusive: pd.inclusive,
            message: pd.message
          }), kd.sL())
        } else "multipleOf" === pd.kind ? dd.data % pd.value !== BigInt(0) && (Jd = this._getOrReturnCtx(dd, Jd), Id(Jd, {
          code: ld.not_multiple_of,
          multipleOf: pd.value,
          message: pd.message
        }), kd.sL()) : Zd.assertNever(pd);
        return {
          status: kd.value,
          value: dd.data
        }
      }
      gte(dd, Jd) {
        return this.setLimit("min", dd, !0, Fd.toString(Jd))
      }
      gt(dd, Jd) {
        return this.setLimit("min", dd, !1, Fd.toString(Jd))
      }
      lte(dd, Jd) {
        return this.setLimit("max", dd, !0, Fd.toString(Jd))
      }
      lt(dd, Jd) {
        return this.setLimit("max", dd, !1, Fd.toString(Jd))
      }
      setLimit(dd, Jd, kd, pd) {
        return new rd({
          ...this._def,
          checks: [...this._def.checks, {
            kind: dd,
            value: Jd,
            inclusive: kd,
            message: Fd.toString(pd)
          }]
        })
      }
      _addCheck(dd) {
        return new rd({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      positive(dd) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Fd.toString(dd)
        })
      }
      negative(dd) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Fd.toString(dd)
        })
      }
      nonpositive(dd) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Fd.toString(dd)
        })
      }
      nonnegative(dd) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Fd.toString(dd)
        })
      }
      multipleOf(dd, Jd) {
        return this._addCheck({
          kind: "multipleOf",
          value: dd,
          message: Fd.toString(Jd)
        })
      }
      get minValue() {
        let dd = null;
        for (const Jd of this._def.checks) "min" === Jd.kind && (null === dd || Jd.value > dd) && (dd = Jd.value);
        return dd
      }
      get maxValue() {
        let dd = null;
        for (const Jd of this._def.checks) "max" === Jd.kind && (null === dd || Jd.value < dd) && (dd = Jd.value);
        return dd
      }
    }
    rd.create = dd => {
      var Jd;
      return new rd({
        checks: [],
        typeName: jJ.ZodBigInt,
        coerce: null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.coerce) && void 0 !== Jd && Jd,
        ...bd(dd)
      })
    };
    class ud extends Sd {
      _parse(dd) {
        this._def.coerce && (dd.data = Boolean(dd.data));
        if (this._getType(dd) !== Kd.boolean) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.boolean,
            received: Jd.parsedType
          }), vd
        }
        return qd(dd.data)
      }
    }
    ud.create = dd => new ud({
      typeName: jJ.ZodBoolean,
      coerce: (null === dd || void 0 === dd ? void 0 : dd.coerce) || !1,
      ...bd(dd)
    });
    class td extends Sd {
      _parse(dd) {
        this._def.coerce && (dd.data = new Date(dd.data));
        if (this._getType(dd) !== Kd.date) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.date,
            received: Jd.parsedType
          }), vd
        }
        if (isNaN(dd.data.getTime())) {
          return Id(this._getOrReturnCtx(dd), {
            code: ld.invalid_date
          }), vd
        }
        const Jd = new Gd;
        let kd;
        for (const pd of this._def.checks) "min" === pd.kind ? dd.data.getTime() < pd.value && (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          code: ld.too_small,
          message: pd.message,
          inclusive: !0,
          exact: !1,
          minimum: pd.value,
          type: "date"
        }), Jd.sL()) : "max" === pd.kind ? dd.data.getTime() > pd.value && (kd = this._getOrReturnCtx(dd, kd), Id(kd, {
          code: ld.too_big,
          message: pd.message,
          inclusive: !0,
          exact: !1,
          maximum: pd.value,
          type: "date"
        }), Jd.sL()) : Zd.assertNever(pd);
        return {
          status: Jd.value,
          value: new Date(dd.data.getTime())
        }
      }
      _addCheck(dd) {
        return new td({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      min(dd, Jd) {
        return this._addCheck({
          kind: "min",
          value: dd.getTime(),
          message: Fd.toString(Jd)
        })
      }
      max(dd, Jd) {
        return this._addCheck({
          kind: "max",
          value: dd.getTime(),
          message: Fd.toString(Jd)
        })
      }
      get minDate() {
        let dd = null;
        for (const Jd of this._def.checks) "min" === Jd.kind && (null === dd || Jd.value > dd) && (dd = Jd.value);
        return null != dd ? new Date(dd) : null
      }
      get maxDate() {
        let dd = null;
        for (const Jd of this._def.checks) "max" === Jd.kind && (null === dd || Jd.value < dd) && (dd = Jd.value);
        return null != dd ? new Date(dd) : null
      }
    }
    td.create = dd => new td({
      checks: [],
      coerce: (null === dd || void 0 === dd ? void 0 : dd.coerce) || !1,
      typeName: jJ.ZodDate,
      ...bd(dd)
    });
    class Vd extends Sd {
      _parse(dd) {
        if (this._getType(dd) !== Kd.symbol) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.symbol,
            received: Jd.parsedType
          }), vd
        }
        return qd(dd.data)
      }
    }
    Vd.create = dd => new Vd({
      typeName: jJ.ZodSymbol,
      ...bd(dd)
    });
    class zd extends Sd {
      _parse(dd) {
        if (this._getType(dd) !== Kd.undefined) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.undefined,
            received: Jd.parsedType
          }), vd
        }
        return qd(dd.data)
      }
    }
    zd.create = dd => new zd({
      typeName: jJ.ZodUndefined,
      ...bd(dd)
    });
    class Hd extends Sd {
      _parse(dd) {
        if (this._getType(dd) !== Kd.null) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.null,
            received: Jd.parsedType
          }), vd
        }
        return qd(dd.data)
      }
    }
    Hd.create = dd => new Hd({
      typeName: jJ.ZodNull,
      ...bd(dd)
    });
    class wd extends Sd {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(dd) {
        return qd(dd.data)
      }
    }
    wd.create = dd => new wd({
      typeName: jJ.ZodAny,
      ...bd(dd)
    });
    class Ad extends Sd {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(dd) {
        return qd(dd.data)
      }
    }
    Ad.create = dd => new Ad({
      typeName: jJ.ZodUnknown,
      ...bd(dd)
    });
    class dJ extends Sd {
      _parse(dd) {
        const Jd = this._getOrReturnCtx(dd);
        return Id(Jd, {
          code: ld.invalid_type,
          expected: Kd.never,
          received: Jd.parsedType
        }), vd
      }
    }
    dJ.create = dd => new dJ({
      typeName: jJ.ZodNever,
      ...bd(dd)
    });
    class JJ extends Sd {
      _parse(dd) {
        if (this._getType(dd) !== Kd.undefined) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.void,
            received: Jd.parsedType
          }), vd
        }
        return qd(dd.data)
      }
    }
    JJ.create = dd => new JJ({
      typeName: jJ.ZodVoid,
      ...bd(dd)
    });
    class kJ extends Sd {
      _parse(dd) {
        const {
          ctx: Jd,
          status: kd
        } = this._processInputParams(dd), pd = this._def;
        if (Jd.parsedType !== Kd.array) return Id(Jd, {
          code: ld.invalid_type,
          expected: Kd.array,
          received: Jd.parsedType
        }), vd;
        if (null !== pd.exactLength) {
          const dd = Jd.data.length > pd.exactLength.value,
            Nd = Jd.data.length < pd.exactLength.value;
          (dd || Nd) && (Id(Jd, {
            code: dd ? ld.too_big : ld.too_small,
            minimum: Nd ? pd.exactLength.value : void 0,
            maximum: dd ? pd.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: pd.exactLength.message
          }), kd.sL())
        }
        if (null !== pd.minLength && Jd.data.length < pd.minLength.value && (Id(Jd, {
            code: ld.too_small,
            minimum: pd.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: pd.minLength.message
          }), kd.sL()), null !== pd.maxLength && Jd.data.length > pd.maxLength.value && (Id(Jd, {
            code: ld.too_big,
            maximum: pd.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: pd.maxLength.message
          }), kd.sL()), Jd.common.async) return Promise.all([...Jd.data].map(((dd, kd) => pd.type._parseAsync(new Yd(Jd, dd, Jd.path, kd))))).then((dd => Gd.mergeArray(kd, dd)));
        const Nd = [...Jd.data].map(((dd, kd) => pd.type._parseSync(new Yd(Jd, dd, Jd.path, kd))));
        return Gd.mergeArray(kd, Nd)
      }
      get element() {
        return this._def.type
      }
      min(dd, Jd) {
        return new kJ({
          ...this._def,
          minLength: {
            value: dd,
            message: Fd.toString(Jd)
          }
        })
      }
      max(dd, Jd) {
        return new kJ({
          ...this._def,
          maxLength: {
            value: dd,
            message: Fd.toString(Jd)
          }
        })
      }
      length(dd, Jd) {
        return new kJ({
          ...this._def,
          exactLength: {
            value: dd,
            message: Fd.toString(Jd)
          }
        })
      }
      nonempty(dd) {
        return this.min(1, dd)
      }
    }

    function pJ(dd) {
      if (dd instanceof NJ) {
        const Jd = {};
        for (const kd in dd.shape) {
          const pd = dd.shape[kd];
          Jd[kd] = qJ.create(pJ(pd))
        }
        return new NJ({
          ...dd._def,
          shape: () => Jd
        })
      }
      return dd instanceof kJ ? new kJ({
        ...dd._def,
        type: pJ(dd.element)
      }) : dd instanceof qJ ? qJ.create(pJ(dd.unwrap())) : dd instanceof BJ ? BJ.create(pJ(dd.unwrap())) : dd instanceof KJ ? KJ.create(dd.items.map((dd => pJ(dd)))) : dd
    }
    kJ.create = (dd, Jd) => new kJ({
      type: dd,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: jJ.ZodArray,
      ...bd(Jd)
    });
    class NJ extends Sd {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const dd = this._def.shape(),
          Jd = Zd.objectKeys(dd);
        return this._cached = {
          shape: dd,
          keys: Jd
        }
      }
      _parse(dd) {
        if (this._getType(dd) !== Kd.object) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.object,
            received: Jd.parsedType
          }), vd
        }
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd), {
          shape: pd,
          keys: Nd
        } = this._getCached(), Wd = [];
        if (!(this._def.catchall instanceof dJ && "strip" === this._def.unknownKeys))
          for (const Zd in kd.data) Nd.includes(Zd) || Wd.push(Zd);
        const Pd = [];
        for (const Zd of Nd) {
          const dd = pd[Zd],
            Jd = kd.data[Zd];
          Pd.push({
            key: {
              status: "valid",
              value: Zd
            },
            value: dd._parse(new Yd(kd, Jd, kd.path, Zd)),
            alwaysSet: Zd in kd.data
          })
        }
        if (this._def.catchall instanceof dJ) {
          const dd = this._def.unknownKeys;
          if ("passthrough" === dd)
            for (const Jd of Wd) Pd.push({
              key: {
                status: "valid",
                value: Jd
              },
              value: {
                status: "valid",
                value: kd.data[Jd]
              }
            });
          else if ("strict" === dd) Wd.length > 0 && (Id(kd, {
            code: ld.unrecognized_keys,
            keys: Wd
          }), Jd.sL());
          else if ("strip" !== dd) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const dd = this._def.catchall;
          for (const Jd of Wd) {
            const pd = kd.data[Jd];
            Pd.push({
              key: {
                status: "valid",
                value: Jd
              },
              value: dd._parse(new Yd(kd, pd, kd.path, Jd)),
              alwaysSet: Jd in kd.data
            })
          }
        }
        return kd.common.async ? Promise.resolve().then((async () => {
          const dd = [];
          for (const Jd of Pd) {
            const kd = await Jd.key;
            dd.push({
              key: kd,
              value: await Jd.value,
              alwaysSet: Jd.alwaysSet
            })
          }
          return dd
        })).then((dd => Gd.mergeObjectSync(Jd, dd))) : Gd.mergeObjectSync(Jd, Pd)
      }
      get shape() {
        return this._def.shape()
      }
      strict(dd) {
        return Fd.errToObj, new NJ({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== dd ? {
            errorMap: (Jd, kd) => {
              var pd, Nd, Wd, Pd;
              const Zd = null !== (Wd = null === (Nd = (pd = this._def).errorMap) || void 0 === Nd ? void 0 : Nd.call(pd, Jd, kd).message) && void 0 !== Wd ? Wd : kd.defaultError;
              return "unrecognized_keys" === Jd.code ? {
                message: null !== (Pd = Fd.errToObj(dd).message) && void 0 !== Pd ? Pd : Zd
              } : {
                message: Zd
              }
            }
          } : {}
        })
      }
      strip() {
        return new NJ({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new NJ({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(dd) {
        return new NJ({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...dd
          })
        })
      }
      merge(dd) {
        return new NJ({
          unknownKeys: dd._def.unknownKeys,
          catchall: dd._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...dd._def.shape()
          }),
          typeName: jJ.ZodObject
        })
      }
      setKey(dd, Jd) {
        return this.augment({
          [dd]: Jd
        })
      }
      catchall(dd) {
        return new NJ({
          ...this._def,
          catchall: dd
        })
      }
      Tl(dd) {
        const Jd = {};
        return Zd.objectKeys(dd).forEach((kd => {
          dd[kd] && this.shape[kd] && (Jd[kd] = this.shape[kd])
        })), new NJ({
          ...this._def,
          shape: () => Jd
        })
      }
      omit(dd) {
        const Jd = {};
        return Zd.objectKeys(this.shape).forEach((kd => {
          dd[kd] || (Jd[kd] = this.shape[kd])
        })), new NJ({
          ...this._def,
          shape: () => Jd
        })
      }
      deepPartial() {
        return pJ(this)
      }
      partial(dd) {
        const Jd = {};
        return Zd.objectKeys(this.shape).forEach((kd => {
          const pd = this.shape[kd];
          dd && !dd[kd] ? Jd[kd] = pd : Jd[kd] = pd.optional()
        })), new NJ({
          ...this._def,
          shape: () => Jd
        })
      }
      required(dd) {
        const Jd = {};
        return Zd.objectKeys(this.shape).forEach((kd => {
          if (dd && !dd[kd]) Jd[kd] = this.shape[kd];
          else {
            let dd = this.shape[kd];
            for (; dd instanceof qJ;) dd = dd._def.innerType;
            Jd[kd] = dd
          }
        })), new NJ({
          ...this._def,
          shape: () => Jd
        })
      }
      keyof() {
        return RJ(Zd.objectKeys(this.shape))
      }
    }
    NJ.create = (dd, Jd) => new NJ({
      shape: () => dd,
      unknownKeys: "strip",
      catchall: dJ.create(),
      typeName: jJ.ZodObject,
      ...bd(Jd)
    }), NJ.strictCreate = (dd, Jd) => new NJ({
      shape: () => dd,
      unknownKeys: "strict",
      catchall: dJ.create(),
      typeName: jJ.ZodObject,
      ...bd(Jd)
    }), NJ.lazycreate = (dd, Jd) => new NJ({
      shape: dd,
      unknownKeys: "strip",
      catchall: dJ.create(),
      typeName: jJ.ZodObject,
      ...bd(Jd)
    });
    class WJ extends Sd {
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd), kd = this._def.options;
        if (Jd.common.async) return Promise.all(kd.map((async dd => {
          const kd = {
            ...Jd,
            common: {
              ...Jd.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await dd._parseAsync({
              data: Jd.data,
              path: Jd.path,
              parent: kd
            }),
            ctx: kd
          }
        }))).then((function(dd) {
          for (const Jd of dd)
            if ("valid" === Jd.result.status) return Jd.result;
          for (const pd of dd)
            if ("sL" === pd.result.status) return Jd.common.issues.push(...pd.ctx.common.issues), pd.result;
          const kd = dd.map((dd => new Qd(dd.ctx.common.issues)));
          return Id(Jd, {
            code: ld.invalid_union,
            unionErrors: kd
          }), vd
        }));
        {
          let dd;
          const pd = [];
          for (const Wd of kd) {
            const kd = {
                ...Jd,
                common: {
                  ...Jd.common,
                  issues: []
                },
                parent: null
              },
              Nd = Wd._parseSync({
                data: Jd.data,
                path: Jd.path,
                parent: kd
              });
            if ("valid" === Nd.status) return Nd;
            "sL" !== Nd.status || dd || (dd = {
              result: Nd,
              ctx: kd
            }), kd.common.issues.length && pd.push(kd.common.issues)
          }
          if (dd) return Jd.common.issues.push(...dd.ctx.common.issues), dd.result;
          const Nd = pd.map((dd => new Qd(dd)));
          return Id(Jd, {
            code: ld.invalid_union,
            unionErrors: Nd
          }), vd
        }
      }
      get options() {
        return this._def.options
      }
    }
    WJ.create = (dd, Jd) => new WJ({
      options: dd,
      typeName: jJ.ZodUnion,
      ...bd(Jd)
    });
    const PJ = dd => dd instanceof OJ ? PJ(dd.schema) : dd instanceof xJ ? PJ(dd.innerType()) : dd instanceof eJ ? [dd.value] : dd instanceof IJ ? dd.options : dd instanceof GJ ? Object.keys(dd.enum) : dd instanceof sJ ? PJ(dd._def.innerType) : dd instanceof zd ? [void 0] : dd instanceof Hd ? [null] : null;
    class ZJ extends Sd {
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd);
        if (Jd.parsedType !== Kd.object) return Id(Jd, {
          code: ld.invalid_type,
          expected: Kd.object,
          received: Jd.parsedType
        }), vd;
        const kd = this.discriminator,
          pd = Jd.data[kd],
          Nd = this.optionsMap.get(pd);
        return Nd ? Jd.common.async ? Nd._parseAsync({
          data: Jd.data,
          path: Jd.path,
          parent: Jd
        }) : Nd._parseSync({
          data: Jd.data,
          path: Jd.path,
          parent: Jd
        }) : (Id(Jd, {
          code: ld.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [kd]
        }), vd)
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
      static create(dd, Jd, kd) {
        const pd = new Map;
        for (const Nd of Jd) {
          const Jd = PJ(Nd.shape[dd]);
          if (!Jd) throw new Error(`A discriminator value for key \`${dd}\` could not be extracted from all schema options`);
          for (const kd of Jd) {
            if (pd.has(kd)) throw new Error(`Discriminator property ${String(dd)} has duplicate value ${String(kd)}`);
            pd.set(kd, Nd)
          }
        }
        return new ZJ({
          typeName: jJ.ZodDiscriminatedUnion,
          discriminator: dd,
          options: Jd,
          optionsMap: pd,
          ...bd(kd)
        })
      }
    }

    function gJ(dd, Jd) {
      const kd = od(dd),
        pd = od(Jd);
      if (dd === Jd) return {
        valid: !0,
        data: dd
      };
      if (kd === Kd.object && pd === Kd.object) {
        const kd = Zd.objectKeys(Jd),
          pd = Zd.objectKeys(dd).filter((dd => -1 !== kd.indexOf(dd))),
          Nd = {
            ...dd,
            ...Jd
          };
        for (const Wd of pd) {
          const kd = gJ(dd[Wd], Jd[Wd]);
          if (!kd.valid) return {
            valid: !1
          };
          Nd[Wd] = kd.data
        }
        return {
          valid: !0,
          data: Nd
        }
      }
      if (kd === Kd.array && pd === Kd.array) {
        if (dd.length !== Jd.length) return {
          valid: !1
        };
        const kd = [];
        for (let pd = 0; pd < dd.length; pd++) {
          const Nd = gJ(dd[pd], Jd[pd]);
          if (!Nd.valid) return {
            valid: !1
          };
          kd.push(Nd.data)
        }
        return {
          valid: !0,
          data: kd
        }
      }
      return kd === Kd.date && pd === Kd.date && +dd === +Jd ? {
        valid: !0,
        data: dd
      } : {
        valid: !1
      }
    }
    class CJ extends Sd {
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd), pd = (dd, pd) => {
          if (Bd(dd) || Bd(pd)) return vd;
          const Nd = gJ(dd.value, pd.value);
          return Nd.valid ? ((sd(dd) || sd(pd)) && Jd.sL(), {
            status: Jd.value,
            value: Nd.data
          }) : (Id(kd, {
            code: ld.invalid_intersection_types
          }), vd)
        };
        return kd.common.async ? Promise.all([this._def.left._parseAsync({
          data: kd.data,
          path: kd.path,
          parent: kd
        }), this._def.right._parseAsync({
          data: kd.data,
          path: kd.path,
          parent: kd
        })]).then((dd => {
          let [Jd, kd] = dd;
          return pd(Jd, kd)
        })) : pd(this._def.left._parseSync({
          data: kd.data,
          path: kd.path,
          parent: kd
        }), this._def.right._parseSync({
          data: kd.data,
          path: kd.path,
          parent: kd
        }))
      }
    }
    CJ.create = (dd, Jd, kd) => new CJ({
      left: dd,
      right: Jd,
      typeName: jJ.ZodIntersection,
      ...bd(kd)
    });
    class KJ extends Sd {
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd);
        if (kd.parsedType !== Kd.array) return Id(kd, {
          code: ld.invalid_type,
          expected: Kd.array,
          received: kd.parsedType
        }), vd;
        if (kd.data.length < this._def.items.length) return Id(kd, {
          code: ld.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), vd;
        !this._def.rest && kd.data.length > this._def.items.length && (Id(kd, {
          code: ld.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Jd.sL());
        const pd = [...kd.data].map(((dd, Jd) => {
          const pd = this._def.items[Jd] || this._def.rest;
          return pd ? pd._parse(new Yd(kd, dd, kd.path, Jd)) : null
        })).filter((dd => !!dd));
        return kd.common.async ? Promise.all(pd).then((dd => Gd.mergeArray(Jd, dd))) : Gd.mergeArray(Jd, pd)
      }
      get items() {
        return this._def.items
      }
      rest(dd) {
        return new KJ({
          ...this._def,
          rest: dd
        })
      }
    }
    KJ.create = (dd, Jd) => {
      if (!Array.isArray(dd)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new KJ({
        items: dd,
        typeName: jJ.ZodTuple,
        rest: null,
        ...bd(Jd)
      })
    };
    class oJ extends Sd {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd);
        if (kd.parsedType !== Kd.object) return Id(kd, {
          code: ld.invalid_type,
          expected: Kd.object,
          received: kd.parsedType
        }), vd;
        const pd = [],
          Nd = this._def.keyType,
          Wd = this._def.valueType;
        for (const Pd in kd.data) pd.push({
          key: Nd._parse(new Yd(kd, Pd, kd.path, Pd)),
          value: Wd._parse(new Yd(kd, kd.data[Pd], kd.path, Pd))
        });
        return kd.common.async ? Gd.mergeObjectAsync(Jd, pd) : Gd.mergeObjectSync(Jd, pd)
      }
      get element() {
        return this._def.valueType
      }
      static create(dd, Jd, kd) {
        return new oJ(Jd instanceof Sd ? {
          keyType: dd,
          valueType: Jd,
          typeName: jJ.ZodRecord,
          ...bd(kd)
        } : {
          keyType: Ed.create(),
          valueType: dd,
          typeName: jJ.ZodRecord,
          ...bd(Jd)
        })
      }
    }
    class lJ extends Sd {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd);
        if (kd.parsedType !== Kd.map) return Id(kd, {
          code: ld.invalid_type,
          expected: Kd.map,
          received: kd.parsedType
        }), vd;
        const pd = this._def.keyType,
          Nd = this._def.valueType,
          Wd = [...kd.data.entries()].map(((dd, Jd) => {
            let [Wd, Pd] = dd;
            return {
              key: pd._parse(new Yd(kd, Wd, kd.path, [Jd, "key"])),
              value: Nd._parse(new Yd(kd, Pd, kd.path, [Jd, "value"]))
            }
          }));
        if (kd.common.async) {
          const dd = new Map;
          return Promise.resolve().then((async () => {
            for (const kd of Wd) {
              const pd = await kd.key,
                Nd = await kd.value;
              if ("aborted" === pd.status || "aborted" === Nd.status) return vd;
              "sL" !== pd.status && "sL" !== Nd.status || Jd.sL(), dd.set(pd.value, Nd.value)
            }
            return {
              status: Jd.value,
              value: dd
            }
          }))
        } {
          const dd = new Map;
          for (const kd of Wd) {
            const pd = kd.key,
              Nd = kd.value;
            if ("aborted" === pd.status || "aborted" === Nd.status) return vd;
            "sL" !== pd.status && "sL" !== Nd.status || Jd.sL(), dd.set(pd.value, Nd.value)
          }
          return {
            status: Jd.value,
            value: dd
          }
        }
      }
    }
    lJ.create = (dd, Jd, kd) => new lJ({
      valueType: Jd,
      keyType: dd,
      typeName: jJ.ZodMap,
      ...bd(kd)
    });
    class QJ extends Sd {
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd);
        if (kd.parsedType !== Kd.set) return Id(kd, {
          code: ld.invalid_type,
          expected: Kd.set,
          received: kd.parsedType
        }), vd;
        const pd = this._def;
        null !== pd.minSize && kd.data.size < pd.minSize.value && (Id(kd, {
          code: ld.too_small,
          minimum: pd.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: pd.minSize.message
        }), Jd.sL()), null !== pd.maxSize && kd.data.size > pd.maxSize.value && (Id(kd, {
          code: ld.too_big,
          maximum: pd.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: pd.maxSize.message
        }), Jd.sL());
        const Nd = this._def.valueType;

        function Wd(dd) {
          const kd = new Set;
          for (const pd of dd) {
            if ("aborted" === pd.status) return vd;
            "sL" === pd.status && Jd.sL(), kd.add(pd.value)
          }
          return {
            status: Jd.value,
            value: kd
          }
        }
        const Pd = [...kd.data.values()].map(((dd, Jd) => Nd._parse(new Yd(kd, dd, kd.path, Jd))));
        return kd.common.async ? Promise.all(Pd).then((dd => Wd(dd))) : Wd(Pd)
      }
      min(dd, Jd) {
        return new QJ({
          ...this._def,
          minSize: {
            value: dd,
            message: Fd.toString(Jd)
          }
        })
      }
      max(dd, Jd) {
        return new QJ({
          ...this._def,
          maxSize: {
            value: dd,
            message: Fd.toString(Jd)
          }
        })
      }
      size(dd, Jd) {
        return this.min(dd, Jd).max(dd, Jd)
      }
      nonempty(dd) {
        return this.min(1, dd)
      }
    }
    QJ.create = (dd, Jd) => new QJ({
      valueType: dd,
      minSize: null,
      maxSize: null,
      typeName: jJ.ZodSet,
      ...bd(Jd)
    });
    class LJ extends Sd {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd);
        if (Jd.parsedType !== Kd.function) return Id(Jd, {
          code: ld.invalid_type,
          expected: Kd.function,
          received: Jd.parsedType
        }), vd;

        function kd(dd, kd) {
          return Rd({
            data: dd,
            path: Jd.path,
            errorMaps: [Jd.common.contextualErrorMap, Jd.schemaErrorMap, ed(), Ld].filter((dd => !!dd)),
            issueData: {
              code: ld.invalid_arguments,
              argumentsError: kd
            }
          })
        }

        function pd(dd, kd) {
          return Rd({
            data: dd,
            path: Jd.path,
            errorMaps: [Jd.common.contextualErrorMap, Jd.schemaErrorMap, ed(), Ld].filter((dd => !!dd)),
            issueData: {
              code: ld.invalid_return_type,
              returnTypeError: kd
            }
          })
        }
        const Nd = {
            errorMap: Jd.common.contextualErrorMap
          },
          Wd = Jd.data;
        if (this._def.returns instanceof vJ) {
          const dd = this;
          return qd((async function() {
            for (var Jd = arguments.length, Pd = new Array(Jd), Zd = 0; Zd < Jd; Zd++) Pd[Zd] = arguments[Zd];
            const gd = new Qd([]),
              Cd = await dd._def.args.parseAsync(Pd, Nd).catch((dd => {
                throw gd.addIssue(kd(Pd, dd)), gd
              })),
              Kd = await Reflect.apply(Wd, this, Cd);
            return await dd._def.returns._def.type.parseAsync(Kd, Nd).catch((dd => {
              throw gd.addIssue(pd(Kd, dd)), gd
            }))
          }))
        } {
          const dd = this;
          return qd((function() {
            for (var Jd = arguments.length, Pd = new Array(Jd), Zd = 0; Zd < Jd; Zd++) Pd[Zd] = arguments[Zd];
            const gd = dd._def.args.safeParse(Pd, Nd);
            if (!gd.success) throw new Qd([kd(Pd, gd.error)]);
            const Cd = Reflect.apply(Wd, this, gd.data),
              Kd = dd._def.returns.safeParse(Cd, Nd);
            if (!Kd.success) throw new Qd([pd(Cd, Kd.error)]);
            return Kd.data
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
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        return new LJ({
          ...this._def,
          args: KJ.create(Jd).rest(Ad.create())
        })
      }
      returns(dd) {
        return new LJ({
          ...this._def,
          returns: dd
        })
      }
      implement(dd) {
        return this.parse(dd)
      }
      strictImplement(dd) {
        return this.parse(dd)
      }
      static create(dd, Jd, kd) {
        return new LJ({
          args: dd || KJ.create([]).rest(Ad.create()),
          returns: Jd || Ad.create(),
          typeName: jJ.ZodFunction,
          ...bd(kd)
        })
      }
    }
    class OJ extends Sd {
      get schema() {
        return this._def.getter()
      }
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd);
        return this._def.getter()._parse({
          data: Jd.data,
          path: Jd.path,
          parent: Jd
        })
      }
    }
    OJ.create = (dd, Jd) => new OJ({
      getter: dd,
      typeName: jJ.ZodLazy,
      ...bd(Jd)
    });
    class eJ extends Sd {
      _parse(dd) {
        if (dd.data !== this._def.value) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            received: Jd.data,
            code: ld.invalid_literal,
            expected: this._def.value
          }), vd
        }
        return {
          status: "valid",
          value: dd.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function RJ(dd, Jd) {
      return new IJ({
        values: dd,
        typeName: jJ.ZodEnum,
        ...bd(Jd)
      })
    }
    eJ.create = (dd, Jd) => new eJ({
      value: dd,
      typeName: jJ.ZodLiteral,
      ...bd(Jd)
    });
    class IJ extends Sd {
      _parse(dd) {
        if ("string" !== typeof dd.data) {
          const Jd = this._getOrReturnCtx(dd),
            kd = this._def.values;
          return Id(Jd, {
            expected: Zd.joinValues(kd),
            received: Jd.parsedType,
            code: ld.invalid_type
          }), vd
        }
        if (-1 === this._def.values.indexOf(dd.data)) {
          const Jd = this._getOrReturnCtx(dd),
            kd = this._def.values;
          return Id(Jd, {
            received: Jd.data,
            code: ld.invalid_enum_value,
            options: kd
          }), vd
        }
        return qd(dd.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const dd = {};
        for (const Jd of this._def.values) dd[Jd] = Jd;
        return dd
      }
      get Values() {
        const dd = {};
        for (const Jd of this._def.values) dd[Jd] = Jd;
        return dd
      }
      get Enum() {
        const dd = {};
        for (const Jd of this._def.values) dd[Jd] = Jd;
        return dd
      }
      extract(dd) {
        return IJ.create(dd)
      }
      exclude(dd) {
        return IJ.create(this.options.filter((Jd => !dd.includes(Jd))))
      }
    }
    IJ.create = RJ;
    class GJ extends Sd {
      _parse(dd) {
        const Jd = Zd.getValidEnumValues(this._def.values),
          kd = this._getOrReturnCtx(dd);
        if (kd.parsedType !== Kd.string && kd.parsedType !== Kd.number) {
          const dd = Zd.objectValues(Jd);
          return Id(kd, {
            expected: Zd.joinValues(dd),
            received: kd.parsedType,
            code: ld.invalid_type
          }), vd
        }
        if (-1 === Jd.indexOf(dd.data)) {
          const dd = Zd.objectValues(Jd);
          return Id(kd, {
            received: kd.data,
            code: ld.invalid_enum_value,
            options: dd
          }), vd
        }
        return qd(dd.data)
      }
      get enum() {
        return this._def.values
      }
    }
    GJ.create = (dd, Jd) => new GJ({
      values: dd,
      typeName: jJ.ZodNativeEnum,
      ...bd(Jd)
    });
    class vJ extends Sd {
      unwrap() {
        return this._def.type
      }
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd);
        if (Jd.parsedType !== Kd.promise && !1 === Jd.common.async) return Id(Jd, {
          code: ld.invalid_type,
          expected: Kd.promise,
          received: Jd.parsedType
        }), vd;
        const kd = Jd.parsedType === Kd.promise ? Jd.data : Promise.resolve(Jd.data);
        return qd(kd.then((dd => this._def.type.parseAsync(dd, {
          path: Jd.path,
          errorMap: Jd.common.contextualErrorMap
        }))))
      }
    }
    vJ.create = (dd, Jd) => new vJ({
      type: dd,
      typeName: jJ.ZodPromise,
      ...bd(Jd)
    });
    class xJ extends Sd {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === jJ.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd), pd = this._def.effect || null, Nd = {
          addIssue: dd => {
            Id(kd, dd), dd.fatal ? Jd.abort() : Jd.sL()
          },
          get path() {
            return kd.path
          }
        };
        if (Nd.addIssue = Nd.addIssue.bind(Nd), "preprocess" === pd.type) {
          const dd = pd.transform(kd.data, Nd);
          return kd.common.issues.length ? {
            status: "sL",
            value: kd.data
          } : kd.common.async ? Promise.resolve(dd).then((dd => this._def.schema._parseAsync({
            data: dd,
            path: kd.path,
            parent: kd
          }))) : this._def.schema._parseSync({
            data: dd,
            path: kd.path,
            parent: kd
          })
        }
        if ("refinement" === pd.type) {
          const dd = dd => {
            const Jd = pd.refinement(dd, Nd);
            if (kd.common.async) return Promise.resolve(Jd);
            if (Jd instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return dd
          };
          if (!1 === kd.common.async) {
            const pd = this._def.schema._parseSync({
              data: kd.data,
              path: kd.path,
              parent: kd
            });
            return "aborted" === pd.status ? vd : ("sL" === pd.status && Jd.sL(), dd(pd.value), {
              status: Jd.value,
              value: pd.value
            })
          }
          return this._def.schema._parseAsync({
            data: kd.data,
            path: kd.path,
            parent: kd
          }).then((kd => "aborted" === kd.status ? vd : ("sL" === kd.status && Jd.sL(), dd(kd.value).then((() => ({
            status: Jd.value,
            value: kd.value
          }))))))
        }
        if ("transform" === pd.type) {
          if (!1 === kd.common.async) {
            const dd = this._def.schema._parseSync({
              data: kd.data,
              path: kd.path,
              parent: kd
            });
            if (!ad(dd)) return dd;
            const Wd = pd.transform(dd.value, Nd);
            if (Wd instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Jd.value,
              value: Wd
            }
          }
          return this._def.schema._parseAsync({
            data: kd.data,
            path: kd.path,
            parent: kd
          }).then((dd => ad(dd) ? Promise.resolve(pd.transform(dd.value, Nd)).then((dd => ({
            status: Jd.value,
            value: dd
          }))) : dd))
        }
        Zd.assertNever(pd)
      }
    }
    xJ.create = (dd, Jd, kd) => new xJ({
      schema: dd,
      typeName: jJ.ZodEffects,
      effect: Jd,
      ...bd(kd)
    }), xJ.createWithPreprocess = (dd, Jd, kd) => new xJ({
      schema: Jd,
      effect: {
        type: "preprocess",
        transform: dd
      },
      typeName: jJ.ZodEffects,
      ...bd(kd)
    });
    class qJ extends Sd {
      _parse(dd) {
        return this._getType(dd) === Kd.undefined ? qd(void 0) : this._def.innerType._parse(dd)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    qJ.create = (dd, Jd) => new qJ({
      innerType: dd,
      typeName: jJ.ZodOptional,
      ...bd(Jd)
    });
    class BJ extends Sd {
      _parse(dd) {
        return this._getType(dd) === Kd.null ? qd(null) : this._def.innerType._parse(dd)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    BJ.create = (dd, Jd) => new BJ({
      innerType: dd,
      typeName: jJ.ZodNullable,
      ...bd(Jd)
    });
    class sJ extends Sd {
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd);
        let kd = Jd.data;
        return Jd.parsedType === Kd.undefined && (kd = this._def.defaultValue()), this._def.innerType._parse({
          data: kd,
          path: Jd.path,
          parent: Jd
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    sJ.create = (dd, Jd) => new sJ({
      innerType: dd,
      typeName: jJ.ZodDefault,
      defaultValue: "function" === typeof Jd.default ? Jd.default : () => Jd.default,
      ...bd(Jd)
    });
    class iJ extends Sd {
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd), kd = {
          ...Jd,
          common: {
            ...Jd.common,
            issues: []
          }
        }, pd = this._def.innerType._parse({
          data: kd.data,
          path: kd.path,
          parent: {
            ...kd
          }
        });
        return Md(pd) ? pd.then((dd => ({
          status: "valid",
          value: "valid" === dd.status ? dd.value : this._def.catchValue({
            get error() {
              return new Qd(kd.common.issues)
            },
            input: kd.data
          })
        }))) : {
          status: "valid",
          value: "valid" === pd.status ? pd.value : this._def.catchValue({
            get error() {
              return new Qd(kd.common.issues)
            },
            input: kd.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    iJ.create = (dd, Jd) => new iJ({
      innerType: dd,
      typeName: jJ.ZodCatch,
      catchValue: "function" === typeof Jd.catch ? Jd.catch : () => Jd.catch,
      ...bd(Jd)
    });
    class aJ extends Sd {
      _parse(dd) {
        if (this._getType(dd) !== Kd.nan) {
          const Jd = this._getOrReturnCtx(dd);
          return Id(Jd, {
            code: ld.invalid_type,
            expected: Kd.nan,
            received: Jd.parsedType
          }), vd
        }
        return {
          status: "valid",
          value: dd.data
        }
      }
    }
    aJ.create = dd => new aJ({
      typeName: jJ.ZodNaN,
      ...bd(dd)
    });
    const MJ = Symbol("zod_brand");
    class FJ extends Sd {
      _parse(dd) {
        const {
          ctx: Jd
        } = this._processInputParams(dd), kd = Jd.data;
        return this._def.type._parse({
          data: kd,
          path: Jd.path,
          parent: Jd
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class YJ extends Sd {
      _parse(dd) {
        const {
          status: Jd,
          ctx: kd
        } = this._processInputParams(dd);
        if (kd.common.async) {
          return (async () => {
            const dd = await this._def.in._parseAsync({
              data: kd.data,
              path: kd.path,
              parent: kd
            });
            return "aborted" === dd.status ? vd : "sL" === dd.status ? (Jd.sL(), xd(dd.value)) : this._def.out._parseAsync({
              data: dd.value,
              path: kd.path,
              parent: kd
            })
          })()
        } {
          const dd = this._def.in._parseSync({
            data: kd.data,
            path: kd.path,
            parent: kd
          });
          return "aborted" === dd.status ? vd : "sL" === dd.status ? (Jd.sL(), {
            status: "sL",
            value: dd.value
          }) : this._def.out._parseSync({
            data: dd.value,
            path: kd.path,
            parent: kd
          })
        }
      }
      static create(dd, Jd) {
        return new YJ({
          in: dd,
          out: Jd,
          typeName: jJ.ZodPipeline
        })
      }
    }
    class mJ extends Sd {
      _parse(dd) {
        const Jd = this._def.innerType._parse(dd);
        return ad(Jd) && (Jd.value = Object.freeze(Jd.value)), Jd
      }
    }
    mJ.create = (dd, Jd) => new mJ({
      innerType: dd,
      typeName: jJ.ZodReadonly,
      ...bd(Jd)
    });
    const bJ = function(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = arguments.length > 2 ? arguments[2] : void 0;
        return dd ? wd.create().superRefine(((pd, Nd) => {
          var Wd, Pd;
          if (!dd(pd)) {
            const dd = "function" === typeof Jd ? Jd(pd) : "string" === typeof Jd ? {
                message: Jd
              } : Jd,
              Zd = null === (Pd = null !== (Wd = dd.fatal) && void 0 !== Wd ? Wd : kd) || void 0 === Pd || Pd,
              gd = "string" === typeof dd ? {
                message: dd
              } : dd;
            Nd.addIssue({
              code: "custom",
              ...gd,
              fatal: Zd
            })
          }
        })) : wd.create()
      },
      SJ = {
        object: NJ.lazycreate
      };
    var jJ;
    ! function(dd) {
      dd.ZodString = "ZodString", dd.ZodNumber = "ZodNumber", dd.ZodNaN = "ZodNaN", dd.ZodBigInt = "ZodBigInt", dd.ZodBoolean = "ZodBoolean", dd.ZodDate = "ZodDate", dd.ZodSymbol = "ZodSymbol", dd.ZodUndefined = "ZodUndefined", dd.ZodNull = "ZodNull", dd.ZodAny = "ZodAny", dd.ZodUnknown = "ZodUnknown", dd.ZodNever = "ZodNever", dd.ZodVoid = "ZodVoid", dd.ZodArray = "ZodArray", dd.ZodObject = "ZodObject", dd.ZodUnion = "ZodUnion", dd.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", dd.ZodIntersection = "ZodIntersection", dd.ZodTuple = "ZodTuple", dd.ZodRecord = "ZodRecord", dd.ZodMap = "ZodMap", dd.ZodSet = "ZodSet", dd.ZodFunction = "ZodFunction", dd.ZodLazy = "ZodLazy", dd.ZodLiteral = "ZodLiteral", dd.ZodEnum = "ZodEnum", dd.ZodEffects = "ZodEffects", dd.ZodNativeEnum = "ZodNativeEnum", dd.ZodOptional = "ZodOptional", dd.ZodNullable = "ZodNullable", dd.ZodDefault = "ZodDefault", dd.ZodCatch = "ZodCatch", dd.ZodPromise = "ZodPromise", dd.ZodBranded = "ZodBranded", dd.ZodPipeline = "ZodPipeline", dd.ZodReadonly = "ZodReadonly"
    }(jJ || (jJ = {}));
    const XJ = Ed.create,
      fJ = hd.create,
      nJ = aJ.create,
      UJ = rd.create,
      yJ = ud.create,
      DJ = td.create,
      TJ = Vd.create,
      EJ = zd.create,
      cJ = Hd.create,
      hJ = wd.create,
      rJ = Ad.create,
      uJ = dJ.create,
      tJ = JJ.create,
      VJ = kJ.create,
      zJ = NJ.create,
      HJ = NJ.strictCreate,
      wJ = WJ.create,
      AJ = ZJ.create,
      dk = CJ.create,
      Jk = KJ.create,
      kk = oJ.create,
      pk = lJ.create,
      Nk = QJ.create,
      Wk = LJ.create,
      Pk = OJ.create,
      Zk = eJ.create,
      gk = IJ.create,
      Ck = GJ.create,
      Kk = vJ.create,
      lk = xJ.create,
      Qk = qJ.create,
      Lk = BJ.create,
      Ok = xJ.createWithPreprocess,
      ek = YJ.create,
      Rk = {
        string: dd => Ed.create({
          ...dd,
          coerce: !0
        }),
        number: dd => hd.create({
          ...dd,
          coerce: !0
        }),
        boolean: dd => ud.create({
          ...dd,
          coerce: !0
        }),
        bigint: dd => rd.create({
          ...dd,
          coerce: !0
        }),
        date: dd => td.create({
          ...dd,
          coerce: !0
        })
      },
      Ik = vd;
    var Gk = Object.freeze({
        __proto__: null,
        defaultErrorMap: Ld,
        setErrorMap: function(dd) {
          Od = dd
        },
        getErrorMap: ed,
        makeIssue: Rd,
        EMPTY_PATH: [],
        addIssueToContext: Id,
        ParseStatus: Gd,
        INVALID: vd,
        DIRTY: xd,
        OK: qd,
        isAborted: Bd,
        isDirty: sd,
        isValid: ad,
        isAsync: Md,
        get util() {
          return Zd
        },
        get objectUtil() {
          return gd
        },
        ZodParsedType: Kd,
        getParsedType: od,
        ZodType: Sd,
        ZodString: Ed,
        ZodNumber: hd,
        ZodBigInt: rd,
        ZodBoolean: ud,
        ZodDate: td,
        ZodSymbol: Vd,
        ZodUndefined: zd,
        ZodNull: Hd,
        ZodAny: wd,
        ZodUnknown: Ad,
        ZodNever: dJ,
        ZodVoid: JJ,
        ZodArray: kJ,
        ZodObject: NJ,
        ZodUnion: WJ,
        ZodDiscriminatedUnion: ZJ,
        ZodIntersection: CJ,
        ZodTuple: KJ,
        ZodRecord: oJ,
        ZodMap: lJ,
        ZodSet: QJ,
        ZodFunction: LJ,
        ZodLazy: OJ,
        ZodLiteral: eJ,
        ZodEnum: IJ,
        ZodNativeEnum: GJ,
        ZodPromise: vJ,
        ZodEffects: xJ,
        ZodTransformer: xJ,
        ZodOptional: qJ,
        ZodNullable: BJ,
        ZodDefault: sJ,
        ZodCatch: iJ,
        ZodNaN: aJ,
        BRAND: MJ,
        ZodBranded: FJ,
        ZodPipeline: YJ,
        ZodReadonly: mJ,
        custom: bJ,
        Schema: Sd,
        ZodSchema: Sd,
        late: SJ,
        get ZodFirstPartyTypeKind() {
          return jJ
        },
        coerce: Rk,
        any: hJ,
        array: VJ,
        bigint: UJ,
        boolean: yJ,
        date: DJ,
        discriminatedUnion: AJ,
        effect: lk,
        enum: gk,
        function: Wk,
        instanceof: function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${dd.name}`
          };
          return bJ((Jd => Jd instanceof dd), Jd)
        },
        intersection: dk,
        lazy: Pk,
        literal: Zk,
        map: pk,
        nan: nJ,
        nativeEnum: Ck,
        never: uJ,
        null: cJ,
        nullable: Lk,
        number: fJ,
        object: zJ,
        oboolean: () => yJ().optional(),
        onumber: () => fJ().optional(),
        optional: Qk,
        ostring: () => XJ().optional(),
        pipeline: ek,
        preprocess: Ok,
        promise: Kk,
        record: kk,
        set: Nk,
        strictObject: HJ,
        string: XJ,
        symbol: TJ,
        transformer: lk,
        tuple: Jk,
        undefined: EJ,
        union: wJ,
        unknown: rJ,
        void: tJ,
        NEVER: Ik,
        ZodIssueCode: ld,
        quotelessJson: dd => JSON.stringify(dd, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Qd
      }),
      vk = {
        exports: {}
      };
    ! function(dd) {
      var Jd = function(dd) {
        var kd = 1e7,
          pd = 9007199254740992,
          Nd = ld(pd),
          Wd = "0123456789abcdefghijklmnopqrstuvwxyz",
          Pd = "function" === typeof BigInt;

        function Zd(dd, Jd, kd, pd) {
          return "undefined" === typeof dd ? Zd[0] : "undefined" !== typeof Jd && (10 !== +Jd || kd) ? ud(dd, Jd, kd, pd) : wd(dd)
        }

        function gd(dd, Jd) {
          this.value = dd, this.sign = Jd, this.isSmall = !1
        }

        function Cd(dd) {
          this.value = dd, this.sign = dd < 0, this.isSmall = !0
        }

        function Kd(dd) {
          this.value = dd
        }

        function od(dd) {
          return -pd < dd && dd < pd
        }

        function ld(dd) {
          return dd < 1e7 ? [dd] : dd < 1e14 ? [dd % 1e7, Math.floor(dd / 1e7)] : [dd % 1e7, Math.floor(dd / 1e7) % 1e7, Math.floor(dd / 1e14)]
        }

        function Qd(dd) {
          Ld(dd);
          var Jd = dd.length;
          if (Jd < 4 && bd(dd, Nd) < 0) switch (Jd) {
            case 0:
              return 0;
            case 1:
              return dd[0];
            case 2:
              return dd[0] + dd[1] * kd;
            default:
              return dd[0] + (dd[1] + dd[2] * kd) * kd
          }
          return dd
        }

        function Ld(dd) {
          for (var Jd = dd.length; 0 === dd[--Jd];);
          dd.length = Jd + 1
        }

        function Od(dd) {
          for (var Jd = new Array(dd), kd = -1; ++kd < dd;) Jd[kd] = 0;
          return Jd
        }

        function ed(dd) {
          return dd > 0 ? Math.floor(dd) : Math.ceil(dd)
        }

        function Rd(dd, Jd) {
          var pd, Nd, Wd = dd.length,
            Pd = Jd.length,
            Zd = new Array(Wd),
            gd = 0,
            Cd = kd;
          for (Nd = 0; Nd < Pd; Nd++) gd = (pd = dd[Nd] + Jd[Nd] + gd) >= Cd ? 1 : 0, Zd[Nd] = pd - gd * Cd;
          for (; Nd < Wd;) gd = (pd = dd[Nd] + gd) === Cd ? 1 : 0, Zd[Nd++] = pd - gd * Cd;
          return gd > 0 && Zd.push(gd), Zd
        }

        function Id(dd, Jd) {
          return dd.length >= Jd.length ? Rd(dd, Jd) : Rd(Jd, dd)
        }

        function Gd(dd, Jd) {
          var pd, Nd, Wd = dd.length,
            Pd = new Array(Wd),
            Zd = kd;
          for (Nd = 0; Nd < Wd; Nd++) pd = dd[Nd] - Zd + Jd, Jd = Math.floor(pd / Zd), Pd[Nd] = pd - Jd * Zd, Jd += 1;
          for (; Jd > 0;) Pd[Nd++] = Jd % Zd, Jd = Math.floor(Jd / Zd);
          return Pd
        }

        function vd(dd, Jd) {
          var pd, Nd, Wd = dd.length,
            Pd = Jd.length,
            Zd = new Array(Wd),
            gd = 0,
            Cd = kd;
          for (pd = 0; pd < Pd; pd++)(Nd = dd[pd] - gd - Jd[pd]) < 0 ? (Nd += Cd, gd = 1) : gd = 0, Zd[pd] = Nd;
          for (pd = Pd; pd < Wd; pd++) {
            if (!((Nd = dd[pd] - gd) < 0)) {
              Zd[pd++] = Nd;
              break
            }
            Nd += Cd, Zd[pd] = Nd
          }
          for (; pd < Wd; pd++) Zd[pd] = dd[pd];
          return Ld(Zd), Zd
        }

        function xd(dd, Jd, pd) {
          var Nd, Wd, Pd = dd.length,
            Zd = new Array(Pd),
            Kd = -Jd,
            od = kd;
          for (Nd = 0; Nd < Pd; Nd++) Wd = dd[Nd] + Kd, Kd = Math.floor(Wd / od), Wd %= od, Zd[Nd] = Wd < 0 ? Wd + od : Wd;
          return "number" === typeof(Zd = Qd(Zd)) ? (pd && (Zd = -Zd), new Cd(Zd)) : new gd(Zd, pd)
        }

        function qd(dd, Jd) {
          var pd, Nd, Wd, Pd, Zd = dd.length,
            gd = Jd.length,
            Cd = Od(Zd + gd),
            Kd = kd;
          for (Wd = 0; Wd < Zd; ++Wd) {
            Pd = dd[Wd];
            for (var od = 0; od < gd; ++od) pd = Pd * Jd[od] + Cd[Wd + od], Nd = Math.floor(pd / Kd), Cd[Wd + od] = pd - Nd * Kd, Cd[Wd + od + 1] += Nd
          }
          return Ld(Cd), Cd
        }

        function Bd(dd, Jd) {
          var pd, Nd, Wd = dd.length,
            Pd = new Array(Wd),
            Zd = kd,
            gd = 0;
          for (Nd = 0; Nd < Wd; Nd++) pd = dd[Nd] * Jd + gd, gd = Math.floor(pd / Zd), Pd[Nd] = pd - gd * Zd;
          for (; gd > 0;) Pd[Nd++] = gd % Zd, gd = Math.floor(gd / Zd);
          return Pd
        }

        function sd(dd, Jd) {
          for (var kd = []; Jd-- > 0;) kd.push(0);
          return kd.concat(dd)
        }

        function ad(dd, Jd) {
          var kd = Math.max(dd.length, Jd.length);
          if (kd <= 30) return qd(dd, Jd);
          kd = Math.ceil(kd / 2);
          var pd = dd.slice(kd),
            Nd = dd.slice(0, kd),
            Wd = Jd.slice(kd),
            Pd = Jd.slice(0, kd),
            Zd = ad(Nd, Pd),
            gd = ad(pd, Wd),
            Cd = ad(Id(Nd, pd), Id(Pd, Wd)),
            Kd = Id(Id(Zd, sd(vd(vd(Cd, Zd), gd), kd)), sd(gd, 2 * kd));
          return Ld(Kd), Kd
        }

        function Md(dd, Jd, pd) {
          return new gd(dd < kd ? Bd(Jd, dd) : qd(Jd, ld(dd)), pd)
        }

        function Fd(dd) {
          var Jd, pd, Nd, Wd, Pd = dd.length,
            Zd = Od(Pd + Pd),
            gd = kd;
          for (Nd = 0; Nd < Pd; Nd++) {
            pd = 0 - (Wd = dd[Nd]) * Wd;
            for (var Cd = Nd; Cd < Pd; Cd++) Jd = Wd * dd[Cd] * 2 + Zd[Nd + Cd] + pd, pd = Math.floor(Jd / gd), Zd[Nd + Cd] = Jd - pd * gd;
            Zd[Nd + Pd] = pd
          }
          return Ld(Zd), Zd
        }

        function Yd(dd, Jd) {
          var pd, Nd, Wd, Pd, Zd = dd.length,
            gd = Od(Zd),
            Cd = kd;
          for (Wd = 0, pd = Zd - 1; pd >= 0; --pd) Wd = (Pd = Wd * Cd + dd[pd]) - (Nd = ed(Pd / Jd)) * Jd, gd[pd] = 0 | Nd;
          return [gd, 0 | Wd]
        }

        function md(dd, Jd) {
          var pd, Nd = wd(Jd);
          if (Pd) return [new Kd(dd.value / Nd.value), new Kd(dd.value % Nd.value)];
          var Wd, od = dd.value,
            Rd = Nd.value;
          if (0 === Rd) throw new Error("Cannot divide by zero");
          if (dd.isSmall) return Nd.isSmall ? [new Cd(ed(od / Rd)), new Cd(od % Rd)] : [Zd[0], dd];
          if (Nd.isSmall) {
            if (1 === Rd) return [dd, Zd[0]];
            if (-1 == Rd) return [dd.ck(), Zd[0]];
            var Id = Math.abs(Rd);
            if (Id < kd) {
              Wd = Qd((pd = Yd(od, Id))[0]);
              var Gd = pd[1];
              return dd.sign && (Gd = -Gd), "number" === typeof Wd ? (dd.sign !== Nd.sign && (Wd = -Wd), [new Cd(Wd), new Cd(Gd)]) : [new gd(Wd, dd.sign !== Nd.sign), new Cd(Gd)]
            }
            Rd = ld(Id)
          }
          var xd = bd(od, Rd);
          if (-1 === xd) return [Zd[0], dd];
          if (0 === xd) return [Zd[dd.sign === Nd.sign ? 1 : -1], Zd[0]];
          pd = od.length + Rd.length <= 200 ? function(dd, Jd) {
            var pd, Nd, Wd, Pd, Zd, gd, Cd, Kd = dd.length,
              od = Jd.length,
              ld = kd,
              Ld = Od(Jd.length),
              ed = Jd[od - 1],
              Rd = Math.ceil(ld / (2 * ed)),
              Id = Bd(dd, Rd),
              Gd = Bd(Jd, Rd);
            for (Id.length <= Kd && Id.push(0), Gd.push(0), ed = Gd[od - 1], Nd = Kd - od; Nd >= 0; Nd--) {
              for (pd = ld - 1, Id[Nd + od] !== ed && (pd = Math.floor((Id[Nd + od] * ld + Id[Nd + od - 1]) / ed)), Wd = 0, Pd = 0, gd = Gd.length, Zd = 0; Zd < gd; Zd++) Wd += pd * Gd[Zd], Cd = Math.floor(Wd / ld), Pd += Id[Nd + Zd] - (Wd - Cd * ld), Wd = Cd, Pd < 0 ? (Id[Nd + Zd] = Pd + ld, Pd = -1) : (Id[Nd + Zd] = Pd, Pd = 0);
              for (; 0 !== Pd;) {
                for (pd -= 1, Wd = 0, Zd = 0; Zd < gd; Zd++)(Wd += Id[Nd + Zd] - ld + Gd[Zd]) < 0 ? (Id[Nd + Zd] = Wd + ld, Wd = 0) : (Id[Nd + Zd] = Wd, Wd = 1);
                Pd += Wd
              }
              Ld[Nd] = pd
            }
            return Id = Yd(Id, Rd)[0], [Qd(Ld), Qd(Id)]
          }(od, Rd) : function(dd, Jd) {
            for (var pd, Nd, Wd, Pd, Zd, gd = dd.length, Cd = Jd.length, Kd = [], od = [], ld = kd; gd;)
              if (od.unshift(dd[--gd]), Ld(od), bd(od, Jd) < 0) Kd.push(0);
              else {
                Wd = od[(Nd = od.length) - 1] * ld + od[Nd - 2], Pd = Jd[Cd - 1] * ld + Jd[Cd - 2], Nd > Cd && (Wd = (Wd + 1) * ld), pd = Math.ceil(Wd / Pd);
                do {
                  if (bd(Zd = Bd(Jd, pd), od) <= 0) break;
                  pd--
                } while (pd);
                Kd.push(pd), od = vd(od, Zd)
              } return Kd.reverse(), [Qd(Kd), Qd(od)]
          }(od, Rd), Wd = pd[0];
          var qd = dd.sign !== Nd.sign,
            sd = pd[1],
            ad = dd.sign;
          return "number" === typeof Wd ? (qd && (Wd = -Wd), Wd = new Cd(Wd)) : Wd = new gd(Wd, qd), "number" === typeof sd ? (ad && (sd = -sd), sd = new Cd(sd)) : sd = new gd(sd, ad), [Wd, sd]
        }

        function bd(dd, Jd) {
          if (dd.length !== Jd.length) return dd.length > Jd.length ? 1 : -1;
          for (var kd = dd.length - 1; kd >= 0; kd--)
            if (dd[kd] !== Jd[kd]) return dd[kd] > Jd[kd] ? 1 : -1;
          return 0
        }

        function Sd(dd) {
          var Jd = dd.abs();
          return !Jd.isUnit() && (!!(Jd.equals(2) || Jd.equals(3) || Jd.equals(5)) || !(Jd.isEven() || Jd.isDivisibleBy(3) || Jd.isDivisibleBy(5)) && (!!Jd.lesser(49) || void 0))
        }

        function jd(dd, kd) {
          for (var pd, Nd, Wd, Pd = dd.prev(), Zd = Pd, gd = 0; Zd.isEven();) Zd = Zd.divide(2), gd++;
          dd: for (Nd = 0; Nd < kd.length; Nd++)
            if (!dd.lesser(kd[Nd]) && !(Wd = Jd(kd[Nd]).modPow(Zd, dd)).isUnit() && !Wd.equals(Pd)) {
              for (pd = gd - 1; 0 != pd; pd--) {
                if ((Wd = Wd.square().mod(dd)).isUnit()) return !1;
                if (Wd.equals(Pd)) continue dd
              }
              return !1
            }
          return !0
        }
        gd.prototype = Object.create(Zd.prototype), Cd.prototype = Object.create(Zd.prototype), Kd.prototype = Object.create(Zd.prototype), gd.prototype.add = function(dd) {
          var Jd = wd(dd);
          if (this.sign !== Jd.sign) return this.subtract(Jd.ck());
          var kd = this.value,
            pd = Jd.value;
          return Jd.isSmall ? new gd(Gd(kd, Math.abs(pd)), this.sign) : new gd(Id(kd, pd), this.sign)
        }, gd.prototype.plus = gd.prototype.add, Cd.prototype.add = function(dd) {
          var Jd = wd(dd),
            kd = this.value;
          if (kd < 0 !== Jd.sign) return this.subtract(Jd.ck());
          var pd = Jd.value;
          if (Jd.isSmall) {
            if (od(kd + pd)) return new Cd(kd + pd);
            pd = ld(Math.abs(pd))
          }
          return new gd(Gd(pd, Math.abs(kd)), kd < 0)
        }, Cd.prototype.plus = Cd.prototype.add, Kd.prototype.add = function(dd) {
          return new Kd(this.value + wd(dd).value)
        }, Kd.prototype.plus = Kd.prototype.add, gd.prototype.subtract = function(dd) {
          var Jd = wd(dd);
          if (this.sign !== Jd.sign) return this.add(Jd.ck());
          var kd = this.value,
            pd = Jd.value;
          return Jd.isSmall ? xd(kd, Math.abs(pd), this.sign) : function(dd, Jd, kd) {
            var pd;
            return bd(dd, Jd) >= 0 ? pd = vd(dd, Jd) : (pd = vd(Jd, dd), kd = !kd), "number" === typeof(pd = Qd(pd)) ? (kd && (pd = -pd), new Cd(pd)) : new gd(pd, kd)
          }(kd, pd, this.sign)
        }, gd.prototype.minus = gd.prototype.subtract, Cd.prototype.subtract = function(dd) {
          var Jd = wd(dd),
            kd = this.value;
          if (kd < 0 !== Jd.sign) return this.add(Jd.ck());
          var pd = Jd.value;
          return Jd.isSmall ? new Cd(kd - pd) : xd(pd, Math.abs(kd), kd >= 0)
        }, Cd.prototype.minus = Cd.prototype.subtract, Kd.prototype.subtract = function(dd) {
          return new Kd(this.value - wd(dd).value)
        }, Kd.prototype.minus = Kd.prototype.subtract, gd.prototype.ck = function() {
          return new gd(this.value, !this.sign)
        }, Cd.prototype.ck = function() {
          var dd = this.sign,
            Jd = new Cd(-this.value);
          return Jd.sign = !dd, Jd
        }, Kd.prototype.ck = function() {
          return new Kd(-this.value)
        }, gd.prototype.abs = function() {
          return new gd(this.value, !1)
        }, Cd.prototype.abs = function() {
          return new Cd(Math.abs(this.value))
        }, Kd.prototype.abs = function() {
          return new Kd(this.value >= 0 ? this.value : -this.value)
        }, gd.prototype.multiply = function(dd) {
          var Jd, pd, Nd, Wd = wd(dd),
            Pd = this.value,
            Cd = Wd.value,
            Kd = this.sign !== Wd.sign;
          if (Wd.isSmall) {
            if (0 === Cd) return Zd[0];
            if (1 === Cd) return this;
            if (-1 === Cd) return this.ck();
            if ((Jd = Math.abs(Cd)) < kd) return new gd(Bd(Pd, Jd), Kd);
            Cd = ld(Jd)
          }
          return pd = Pd.length, Nd = Cd.length, new gd(-.012 * pd - .012 * Nd + 15e-6 * pd * Nd > 0 ? ad(Pd, Cd) : qd(Pd, Cd), Kd)
        }, gd.prototype.times = gd.prototype.multiply, Cd.prototype._multiplyBySmall = function(dd) {
          return od(dd.value * this.value) ? new Cd(dd.value * this.value) : Md(Math.abs(dd.value), ld(Math.abs(this.value)), this.sign !== dd.sign)
        }, gd.prototype._multiplyBySmall = function(dd) {
          return 0 === dd.value ? Zd[0] : 1 === dd.value ? this : -1 === dd.value ? this.ck() : Md(Math.abs(dd.value), this.value, this.sign !== dd.sign)
        }, Cd.prototype.multiply = function(dd) {
          return wd(dd)._multiplyBySmall(this)
        }, Cd.prototype.times = Cd.prototype.multiply, Kd.prototype.multiply = function(dd) {
          return new Kd(this.value * wd(dd).value)
        }, Kd.prototype.times = Kd.prototype.multiply, gd.prototype.square = function() {
          return new gd(Fd(this.value), !1)
        }, Cd.prototype.square = function() {
          var dd = this.value * this.value;
          return od(dd) ? new Cd(dd) : new gd(Fd(ld(Math.abs(this.value))), !1)
        }, Kd.prototype.square = function(dd) {
          return new Kd(this.value * this.value)
        }, gd.prototype.divmod = function(dd) {
          var Jd = md(this, dd);
          return {
            quotient: Jd[0],
            remainder: Jd[1]
          }
        }, Kd.prototype.divmod = Cd.prototype.divmod = gd.prototype.divmod, gd.prototype.divide = function(dd) {
          return md(this, dd)[0]
        }, Kd.prototype.over = Kd.prototype.divide = function(dd) {
          return new Kd(this.value / wd(dd).value)
        }, Cd.prototype.over = Cd.prototype.divide = gd.prototype.over = gd.prototype.divide, gd.prototype.mod = function(dd) {
          return md(this, dd)[1]
        }, Kd.prototype.mod = Kd.prototype.remainder = function(dd) {
          return new Kd(this.value % wd(dd).value)
        }, Cd.prototype.remainder = Cd.prototype.mod = gd.prototype.remainder = gd.prototype.mod, gd.prototype.pow = function(dd) {
          var Jd, kd, pd, Nd = wd(dd),
            Wd = this.value,
            Pd = Nd.value;
          if (0 === Pd) return Zd[1];
          if (0 === Wd) return Zd[0];
          if (1 === Wd) return Zd[1];
          if (-1 === Wd) return Nd.isEven() ? Zd[1] : Zd[-1];
          if (Nd.sign) return Zd[0];
          if (!Nd.isSmall) throw new Error("The exponent " + Nd.toString() + " is too large.");
          if (this.isSmall && od(Jd = Math.pow(Wd, Pd))) return new Cd(ed(Jd));
          for (kd = this, pd = Zd[1]; !0 & Pd && (pd = pd.times(kd), --Pd), 0 !== Pd;) Pd /= 2, kd = kd.square();
          return pd
        }, Cd.prototype.pow = gd.prototype.pow, Kd.prototype.pow = function(dd) {
          var Jd = wd(dd),
            kd = this.value,
            pd = Jd.value,
            Nd = BigInt(0),
            Wd = BigInt(1),
            Pd = BigInt(2);
          if (pd === Nd) return Zd[1];
          if (kd === Nd) return Zd[0];
          if (kd === Wd) return Zd[1];
          if (kd === BigInt(-1)) return Jd.isEven() ? Zd[1] : Zd[-1];
          if (Jd.isNegative()) return new Kd(Nd);
          for (var gd = this, Cd = Zd[1];
            (pd & Wd) === Wd && (Cd = Cd.times(gd), --pd), pd !== Nd;) pd /= Pd, gd = gd.square();
          return Cd
        }, gd.prototype.modPow = function(dd, Jd) {
          if (dd = wd(dd), (Jd = wd(Jd)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var kd = Zd[1],
            pd = this.mod(Jd);
          for (dd.isNegative() && (dd = dd.multiply(Zd[-1]), pd = pd.modInv(Jd)); dd.isPositive();) {
            if (pd.isZero()) return Zd[0];
            dd.isOdd() && (kd = kd.multiply(pd).mod(Jd)), dd = dd.divide(2), pd = pd.square().mod(Jd)
          }
          return kd
        }, Kd.prototype.modPow = Cd.prototype.modPow = gd.prototype.modPow, gd.prototype.compareAbs = function(dd) {
          var Jd = wd(dd),
            kd = this.value,
            pd = Jd.value;
          return Jd.isSmall ? 1 : bd(kd, pd)
        }, Cd.prototype.compareAbs = function(dd) {
          var Jd = wd(dd),
            kd = Math.abs(this.value),
            pd = Jd.value;
          return Jd.isSmall ? kd === (pd = Math.abs(pd)) ? 0 : kd > pd ? 1 : -1 : -1
        }, Kd.prototype.compareAbs = function(dd) {
          var Jd = this.value,
            kd = wd(dd).value;
          return (Jd = Jd >= 0 ? Jd : -Jd) === (kd = kd >= 0 ? kd : -kd) ? 0 : Jd > kd ? 1 : -1
        }, gd.prototype.compare = function(dd) {
          if (dd === 1 / 0) return -1;
          if (dd === -1 / 0) return 1;
          var Jd = wd(dd),
            kd = this.value,
            pd = Jd.value;
          return this.sign !== Jd.sign ? Jd.sign ? 1 : -1 : Jd.isSmall ? this.sign ? -1 : 1 : bd(kd, pd) * (this.sign ? -1 : 1)
        }, gd.prototype.compareTo = gd.prototype.compare, Cd.prototype.compare = function(dd) {
          if (dd === 1 / 0) return -1;
          if (dd === -1 / 0) return 1;
          var Jd = wd(dd),
            kd = this.value,
            pd = Jd.value;
          return Jd.isSmall ? kd == pd ? 0 : kd > pd ? 1 : -1 : kd < 0 !== Jd.sign ? kd < 0 ? -1 : 1 : kd < 0 ? 1 : -1
        }, Cd.prototype.compareTo = Cd.prototype.compare, Kd.prototype.compare = function(dd) {
          if (dd === 1 / 0) return -1;
          if (dd === -1 / 0) return 1;
          var Jd = this.value,
            kd = wd(dd).value;
          return Jd === kd ? 0 : Jd > kd ? 1 : -1
        }, Kd.prototype.compareTo = Kd.prototype.compare, gd.prototype.equals = function(dd) {
          return 0 === this.compare(dd)
        }, Kd.prototype.eq = Kd.prototype.equals = Cd.prototype.eq = Cd.prototype.equals = gd.prototype.eq = gd.prototype.equals, gd.prototype.notEquals = function(dd) {
          return 0 !== this.compare(dd)
        }, Kd.prototype.neq = Kd.prototype.notEquals = Cd.prototype.neq = Cd.prototype.notEquals = gd.prototype.neq = gd.prototype.notEquals, gd.prototype.greater = function(dd) {
          return this.compare(dd) > 0
        }, Kd.prototype.gt = Kd.prototype.greater = Cd.prototype.gt = Cd.prototype.greater = gd.prototype.gt = gd.prototype.greater, gd.prototype.lesser = function(dd) {
          return this.compare(dd) < 0
        }, Kd.prototype.lt = Kd.prototype.lesser = Cd.prototype.lt = Cd.prototype.lesser = gd.prototype.lt = gd.prototype.lesser, gd.prototype.greaterOrEquals = function(dd) {
          return this.compare(dd) >= 0
        }, Kd.prototype.geq = Kd.prototype.greaterOrEquals = Cd.prototype.geq = Cd.prototype.greaterOrEquals = gd.prototype.geq = gd.prototype.greaterOrEquals, gd.prototype.lesserOrEquals = function(dd) {
          return this.compare(dd) <= 0
        }, Kd.prototype.leq = Kd.prototype.lesserOrEquals = Cd.prototype.leq = Cd.prototype.lesserOrEquals = gd.prototype.leq = gd.prototype.lesserOrEquals, gd.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Cd.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Kd.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, gd.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Cd.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Kd.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, gd.prototype.isPositive = function() {
          return !this.sign
        }, Cd.prototype.isPositive = function() {
          return this.value > 0
        }, Kd.prototype.isPositive = Cd.prototype.isPositive, gd.prototype.isNegative = function() {
          return this.sign
        }, Cd.prototype.isNegative = function() {
          return this.value < 0
        }, Kd.prototype.isNegative = Cd.prototype.isNegative, gd.prototype.isUnit = function() {
          return !1
        }, Cd.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Kd.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, gd.prototype.isZero = function() {
          return !1
        }, Cd.prototype.isZero = function() {
          return 0 === this.value
        }, Kd.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, gd.prototype.isDivisibleBy = function(dd) {
          var Jd = wd(dd);
          return !Jd.isZero() && (!!Jd.isUnit() || (0 === Jd.compareAbs(2) ? this.isEven() : this.mod(Jd).isZero()))
        }, Kd.prototype.isDivisibleBy = Cd.prototype.isDivisibleBy = gd.prototype.isDivisibleBy, gd.prototype.isPrime = function(kd) {
          var pd = Sd(this);
          if (pd !== dd) return pd;
          var Nd = this.abs(),
            Wd = Nd.bitLength();
          if (Wd <= 64) return jd(Nd, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Pd = Math.log(2) * Wd.toJSNumber(), Zd = Math.ceil(!0 === kd ? 2 * Math.pow(Pd, 2) : Pd), gd = [], Cd = 0; Cd < Zd; Cd++) gd.push(Jd(Cd + 2));
          return jd(Nd, gd)
        }, Kd.prototype.isPrime = Cd.prototype.isPrime = gd.prototype.isPrime, gd.prototype.isProbablePrime = function(kd, pd) {
          var Nd = Sd(this);
          if (Nd !== dd) return Nd;
          for (var Wd = this.abs(), Pd = kd === dd ? 5 : kd, Zd = [], gd = 0; gd < Pd; gd++) Zd.push(Jd.randBetween(2, Wd.minus(2), pd));
          return jd(Wd, Zd)
        }, Kd.prototype.isProbablePrime = Cd.prototype.isProbablePrime = gd.prototype.isProbablePrime, gd.prototype.modInv = function(dd) {
          for (var kd, pd, Nd, Wd = Jd.zero, Pd = Jd.one, Zd = wd(dd), gd = this.abs(); !gd.isZero();) kd = Zd.divide(gd), pd = Wd, Nd = Zd, Wd = Pd, Zd = gd, Pd = pd.subtract(kd.multiply(Pd)), gd = Nd.subtract(kd.multiply(gd));
          if (!Zd.isUnit()) throw new Error(this.toString() + " and " + dd.toString() + " are not co-prime");
          return -1 === Wd.compare(0) && (Wd = Wd.add(dd)), this.isNegative() ? Wd.ck() : Wd
        }, Kd.prototype.modInv = Cd.prototype.modInv = gd.prototype.modInv, gd.prototype.next = function() {
          var dd = this.value;
          return this.sign ? xd(dd, 1, this.sign) : new gd(Gd(dd, 1), this.sign)
        }, Cd.prototype.next = function() {
          var dd = this.value;
          return dd + 1 < pd ? new Cd(dd + 1) : new gd(Nd, !1)
        }, Kd.prototype.next = function() {
          return new Kd(this.value + BigInt(1))
        }, gd.prototype.prev = function() {
          var dd = this.value;
          return this.sign ? new gd(Gd(dd, 1), !0) : xd(dd, 1, this.sign)
        }, Cd.prototype.prev = function() {
          var dd = this.value;
          return dd - 1 > -pd ? new Cd(dd - 1) : new gd(Nd, !0)
        }, Kd.prototype.prev = function() {
          return new Kd(this.value - BigInt(1))
        };
        for (var Xd = [1]; 2 * Xd[Xd.length - 1] <= kd;) Xd.push(2 * Xd[Xd.length - 1]);
        var fd = Xd.length,
          nd = Xd[fd - 1];

        function Ud(dd) {
          return Math.abs(dd) <= kd
        }

        function yd(dd, kd, pd) {
          kd = wd(kd);
          for (var Nd = dd.isNegative(), Wd = kd.isNegative(), Pd = Nd ? dd.not() : dd, Zd = Wd ? kd.not() : kd, gd = 0, Cd = 0, Kd = null, od = null, ld = []; !Pd.isZero() || !Zd.isZero();) gd = (Kd = md(Pd, nd))[1].toJSNumber(), Nd && (gd = nd - 1 - gd), Cd = (od = md(Zd, nd))[1].toJSNumber(), Wd && (Cd = nd - 1 - Cd), Pd = Kd[0], Zd = od[0], ld.push(pd(gd, Cd));
          for (var Qd = 0 !== pd(Nd ? 1 : 0, Wd ? 1 : 0) ? Jd(-1) : Jd(0), Ld = ld.length - 1; Ld >= 0; Ld -= 1) Qd = Qd.multiply(nd).add(Jd(ld[Ld]));
          return Qd
        }
        gd.prototype.shiftLeft = function(dd) {
          var Jd = wd(dd).toJSNumber();
          if (!Ud(Jd)) throw new Error(String(Jd) + " is too large for shifting.");
          if (Jd < 0) return this.shiftRight(-Jd);
          var kd = this;
          if (kd.isZero()) return kd;
          for (; Jd >= fd;) kd = kd.multiply(nd), Jd -= fd - 1;
          return kd.multiply(Xd[Jd])
        }, Kd.prototype.shiftLeft = Cd.prototype.shiftLeft = gd.prototype.shiftLeft, gd.prototype.shiftRight = function(dd) {
          var Jd, kd = wd(dd).toJSNumber();
          if (!Ud(kd)) throw new Error(String(kd) + " is too large for shifting.");
          if (kd < 0) return this.shiftLeft(-kd);
          for (var pd = this; kd >= fd;) {
            if (pd.isZero() || pd.isNegative() && pd.isUnit()) return pd;
            pd = (Jd = md(pd, nd))[1].isNegative() ? Jd[0].prev() : Jd[0], kd -= fd - 1
          }
          return (Jd = md(pd, Xd[kd]))[1].isNegative() ? Jd[0].prev() : Jd[0]
        }, Kd.prototype.shiftRight = Cd.prototype.shiftRight = gd.prototype.shiftRight, gd.prototype.not = function() {
          return this.ck().prev()
        }, Kd.prototype.not = Cd.prototype.not = gd.prototype.not, gd.prototype.and = function(dd) {
          return yd(this, dd, (function(dd, Jd) {
            return dd & Jd
          }))
        }, Kd.prototype.and = Cd.prototype.and = gd.prototype.and, gd.prototype.or = function(dd) {
          return yd(this, dd, (function(dd, Jd) {
            return dd | Jd
          }))
        }, Kd.prototype.or = Cd.prototype.or = gd.prototype.or, gd.prototype.xor = function(dd) {
          return yd(this, dd, (function(dd, Jd) {
            return dd ^ Jd
          }))
        }, Kd.prototype.xor = Cd.prototype.xor = gd.prototype.xor;
        var Dd = 1 << 30;

        function Td(dd) {
          var Jd = dd.value,
            pd = "number" === typeof Jd ? Jd | Dd : "bigint" === typeof Jd ? Jd | BigInt(Dd) : Jd[0] + Jd[1] * kd | 1073758208;
          return pd & -pd
        }

        function Ed(dd, kd) {
          if (kd.compareTo(dd) <= 0) {
            var pd = Ed(dd, kd.square(kd)),
              Nd = pd.p,
              Wd = pd.e,
              Pd = Nd.multiply(kd);
            return Pd.compareTo(dd) <= 0 ? {
              p: Pd,
              e: 2 * Wd + 1
            } : {
              p: Nd,
              e: 2 * Wd
            }
          }
          return {
            p: Jd(1),
            e: 0
          }
        }

        function cd(dd, Jd) {
          return dd = wd(dd), Jd = wd(Jd), dd.greater(Jd) ? dd : Jd
        }

        function hd(dd, Jd) {
          return dd = wd(dd), Jd = wd(Jd), dd.lesser(Jd) ? dd : Jd
        }

        function rd(dd, Jd) {
          if (dd = wd(dd).abs(), Jd = wd(Jd).abs(), dd.equals(Jd)) return dd;
          if (dd.isZero()) return Jd;
          if (Jd.isZero()) return dd;
          for (var kd, pd, Nd = Zd[1]; dd.isEven() && Jd.isEven();) kd = hd(Td(dd), Td(Jd)), dd = dd.divide(kd), Jd = Jd.divide(kd), Nd = Nd.multiply(kd);
          for (; dd.isEven();) dd = dd.divide(Td(dd));
          do {
            for (; Jd.isEven();) Jd = Jd.divide(Td(Jd));
            dd.greater(Jd) && (pd = Jd, Jd = dd, dd = pd), Jd = Jd.subtract(dd)
          } while (!Jd.isZero());
          return Nd.isUnit() ? dd : dd.multiply(Nd)
        }
        gd.prototype.bitLength = function() {
          var dd = this;
          return dd.compareTo(Jd(0)) < 0 && (dd = dd.ck().subtract(Jd(1))), 0 === dd.compareTo(Jd(0)) ? Jd(0) : Jd(Ed(dd, Jd(2)).e).add(Jd(1))
        }, Kd.prototype.bitLength = Cd.prototype.bitLength = gd.prototype.bitLength;
        var ud = function(dd, Jd, kd, pd) {
          kd = kd || Wd, dd = String(dd), pd || (dd = dd.toLowerCase(), kd = kd.toLowerCase());
          var Nd, Pd = dd.length,
            Zd = Math.abs(Jd),
            gd = {};
          for (Nd = 0; Nd < kd.length; Nd++) gd[kd[Nd]] = Nd;
          for (Nd = 0; Nd < Pd; Nd++) {
            if ("-" !== (od = dd[Nd]) && (od in gd && gd[od] >= Zd)) {
              if ("1" === od && 1 === Zd) continue;
              throw new Error(od + " is not a valid digit in base " + Jd + ".")
            }
          }
          Jd = wd(Jd);
          var Cd = [],
            Kd = "-" === dd[0];
          for (Nd = Kd ? 1 : 0; Nd < dd.length; Nd++) {
            var od;
            if ((od = dd[Nd]) in gd) Cd.push(wd(gd[od]));
            else {
              if ("<" !== od) throw new Error(od + " is not a valid character");
              var ld = Nd;
              do {
                Nd++
              } while (">" !== dd[Nd] && Nd < dd.length);
              Cd.push(wd(dd.slice(ld + 1, Nd)))
            }
          }
          return td(Cd, Jd, Kd)
        };

        function td(dd, Jd, kd) {
          var pd, Nd = Zd[0],
            Wd = Zd[1];
          for (pd = dd.length - 1; pd >= 0; pd--) Nd = Nd.add(dd[pd].times(Wd)), Wd = Wd.times(Jd);
          return kd ? Nd.ck() : Nd
        }

        function Vd(dd, kd) {
          if ((kd = Jd(kd)).isZero()) {
            if (dd.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (kd.equals(-1)) {
            if (dd.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (dd.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-dd.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var pd = Array.apply(null, Array(dd.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return pd.unshift([1]), {
              value: [].concat.apply([], pd),
              isNegative: !1
            }
          }
          var Nd = !1;
          if (dd.isNegative() && kd.isPositive() && (Nd = !0, dd = dd.abs()), kd.isUnit()) return dd.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(dd.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Nd
          };
          for (var Wd, Pd = [], Zd = dd; Zd.isNegative() || Zd.compareAbs(kd) >= 0;) {
            Wd = Zd.divmod(kd), Zd = Wd.quotient;
            var gd = Wd.remainder;
            gd.isNegative() && (gd = kd.minus(gd).abs(), Zd = Zd.next()), Pd.push(gd.toJSNumber())
          }
          return Pd.push(Zd.toJSNumber()), {
            value: Pd.reverse(),
            isNegative: Nd
          }
        }

        function zd(dd, Jd, kd) {
          var pd = Vd(dd, Jd);
          return (pd.isNegative ? "-" : "") + pd.value.map((function(dd) {
            return function(dd, Jd) {
              return dd < (Jd = Jd || Wd).length ? Jd[dd] : "<" + dd + ">"
            }(dd, kd)
          })).join("")
        }

        function Hd(dd) {
          if (od(+dd)) {
            var Jd = +dd;
            if (Jd === ed(Jd)) return Pd ? new Kd(BigInt(Jd)) : new Cd(Jd);
            throw new Error("Invalid integer: " + dd)
          }
          var kd = "-" === dd[0];
          kd && (dd = dd.slice(1));
          var pd = dd.split(/e/i);
          if (pd.length > 2) throw new Error("Invalid integer: " + pd.join("e"));
          if (2 === pd.length) {
            var Nd = pd[1];
            if ("+" === Nd[0] && (Nd = Nd.slice(1)), (Nd = +Nd) !== ed(Nd) || !od(Nd)) throw new Error("Invalid integer: " + Nd + " is not a valid exponent.");
            var Wd = pd[0],
              Zd = Wd.indexOf(".");
            if (Zd >= 0 && (Nd -= Wd.length - Zd - 1, Wd = Wd.slice(0, Zd) + Wd.slice(Zd + 1)), Nd < 0) throw new Error("Cannot include negative exponent part for integers");
            dd = Wd += new Array(Nd + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(dd)) throw new Error("Invalid integer: " + dd);
          if (Pd) return new Kd(BigInt(kd ? "-" + dd : dd));
          for (var ld = [], Qd = dd.length, Od = Qd - 7; Qd > 0;) ld.push(+dd.slice(Od, Qd)), (Od -= 7) < 0 && (Od = 0), Qd -= 7;
          return Ld(ld), new gd(ld, kd)
        }

        function wd(dd) {
          return "number" === typeof dd ? function(dd) {
            if (Pd) return new Kd(BigInt(dd));
            if (od(dd)) {
              if (dd !== ed(dd)) throw new Error(dd + " is not an integer.");
              return new Cd(dd)
            }
            return Hd(dd.toString())
          }(dd) : "string" === typeof dd ? Hd(dd) : "bigint" === typeof dd ? new Kd(dd) : dd
        }
        gd.prototype.toArray = function(dd) {
          return Vd(this, dd)
        }, Cd.prototype.toArray = function(dd) {
          return Vd(this, dd)
        }, Kd.prototype.toArray = function(dd) {
          return Vd(this, dd)
        }, gd.prototype.toString = function(Jd, kd) {
          if (Jd === dd && (Jd = 10), 10 !== Jd) return zd(this, Jd, kd);
          for (var pd, Nd = this.value, Wd = Nd.length, Pd = String(Nd[--Wd]); --Wd >= 0;) pd = String(Nd[Wd]), Pd += "0000000".slice(pd.length) + pd;
          return (this.sign ? "-" : "") + Pd
        }, Cd.prototype.toString = function(Jd, kd) {
          return Jd === dd && (Jd = 10), 10 != Jd ? zd(this, Jd, kd) : String(this.value)
        }, Kd.prototype.toString = Cd.prototype.toString, Kd.prototype.toJSON = gd.prototype.toJSON = Cd.prototype.toJSON = function() {
          return this.toString()
        }, gd.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, gd.prototype.toJSNumber = gd.prototype.valueOf, Cd.prototype.valueOf = function() {
          return this.value
        }, Cd.prototype.toJSNumber = Cd.prototype.valueOf, Kd.prototype.valueOf = Kd.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Ad = 0; Ad < 1e3; Ad++) Zd[Ad] = wd(Ad), Ad > 0 && (Zd[-Ad] = wd(-Ad));
        return Zd.one = Zd[1], Zd.zero = Zd[0], Zd.minusOne = Zd[-1], Zd.max = cd, Zd.min = hd, Zd.gcd = rd, Zd.lcm = function(dd, Jd) {
          return dd = wd(dd).abs(), Jd = wd(Jd).abs(), dd.divide(rd(dd, Jd)).multiply(Jd)
        }, Zd.isInstance = function(dd) {
          return dd instanceof gd || dd instanceof Cd || dd instanceof Kd
        }, Zd.randBetween = function(dd, Jd, pd) {
          dd = wd(dd), Jd = wd(Jd);
          var Nd = pd || Math.random,
            Wd = hd(dd, Jd),
            Pd = cd(dd, Jd).subtract(Wd).add(1);
          if (Pd.isSmall) return Wd.add(Math.floor(Nd() * Pd));
          for (var gd = Vd(Pd, kd).value, Cd = [], Kd = !0, od = 0; od < gd.length; od++) {
            var ld = Kd ? gd[od] : kd,
              Qd = ed(Nd() * ld);
            Cd.push(Qd), Qd < ld && (Kd = !1)
          }
          return Wd.add(Zd.lkd(Cd, kd, !1))
        }, Zd.lkd = function(dd, Jd, kd) {
          return td(dd.map(wd), wd(Jd || 10), kd)
        }, Zd
      }();
      dd.hasOwnProperty("exports") && (dd.exports = Jd)
    }(vk);
    var xk = Wd(vk.exports);

    function qk(dd, Jd, kd) {
      let pd = 0;
      for (let Nd = 0; Nd < kd; Nd++) {
        const kd = dd[Jd + Nd];
        if (void 0 === kd) break;
        pd += kd * 16 ** Nd
      }
      return pd
    }

    function Bk(dd) {
      const Jd = [];
      for (let kd = 0; kd < dd.length; kd++) {
        let pd = Number(dd[kd]);
        for (let dd = 0; pd || dd < Jd.length; dd++) pd += 10 * (Jd[dd] || 0), Jd[dd] = pd % 16, pd = (pd - Jd[dd]) / 16
      }
      return Jd
    }
    class sk {
      static fromString(dd) {
        return new sk(function(dd) {
          const Jd = Bk(dd),
            kd = Array(4);
          for (let pd = 0; pd < 4; pd++) kd[3 - pd] = qk(Jd, 4 * pd, 4);
          return kd
        }(dd), dd)
      }
      static fromBit(dd) {
        const Jd = Array(4),
          kd = Math.floor(dd / 16);
        for (let pd = 0; pd < 4; pd++) Jd[3 - pd] = pd === kd ? 1 << dd - 16 * kd : 0;
        return new sk(Jd)
      }
      constructor(dd, Jd) {
        this.parts = dd, this.str = Jd
      }
      and(dd) {
        let {
          parts: Jd
        } = dd;
        return new sk(this.parts.map(((dd, kd) => dd & Jd[kd])))
      }
      or(dd) {
        let {
          parts: Jd
        } = dd;
        return new sk(this.parts.map(((dd, kd) => dd | Jd[kd])))
      }
      xor(dd) {
        let {
          parts: Jd
        } = dd;
        return new sk(this.parts.map(((dd, kd) => dd ^ Jd[kd])))
      }
      not() {
        return new sk(this.parts.map((dd => ~dd)))
      }
      equals(dd) {
        let {
          parts: Jd
        } = dd;
        return this.parts.every(((dd, kd) => dd === Jd[kd]))
      }
      toString() {
        if (null != this.str) return this.str;
        const dd = new Array(16);
        return this.parts.forEach(((Jd, kd) => {
          const pd = Bk(Jd.toString());
          for (let Nd = 0; Nd < 4; Nd++) dd[Nd + 4 * kd] = pd[3 - Nd] || 0
        })), this.str = xk.lkd(dd, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const ik = function() {
      try {
        return BigInt, !0
      } catch (dd) {
        return !1
      }
    }();
    ik && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const ak = {},
      Mk = ik ? function(dd) {
        return BigInt(dd)
      } : function(dd) {
        return dd instanceof sk ? dd : ("number" === typeof dd && (dd = dd.toString()), null != ak[dd] || (ak[dd] = sk.fromString(dd)), ak[dd])
      },
      Fk = Mk(0),
      Yk = ik ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fk)
      } : function() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fk;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk).and(dd)
      },
      mk = ik ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fk)
      } : function() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fk;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk).or(dd)
      },
      bk = ik ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fk)
      } : function() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fk;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk).xor(dd)
      },
      Sk = ik ? function(dd, Jd) {
        return dd === Jd
      } : function(dd, Jd) {
        return null == dd || null == Jd ? dd == Jd : dd.equals(Jd)
      };
    var jk, Xk, fk, nk, Uk = {
      combine: function() {
        let dd = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Jd = 1; Jd < arguments.length; Jd++) dd = mk(dd, Jd < 0 || arguments.length <= Jd ? void 0 : arguments[Jd]);
        return dd
      },
      add: function(dd, Jd) {
        return Jd === Fk ? dd : mk(dd, Jd)
      },
      remove: function(dd, Jd) {
        return Jd === Fk ? dd : bk(dd, Yk(dd, Jd))
      },
      filter: Yk,
      invert: ik ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fk).not()
      },
      has: function(dd, Jd) {
        return Sk(Yk(dd, Jd), Jd)
      },
      hasAny: function(dd, Jd) {
        return !Sk(Yk(dd, Jd), Fk)
      },
      equals: Sk,
      deserialize: Mk,
      getFlag: ik ? function(dd) {
        return BigInt(1) << BigInt(dd)
      } : function(dd) {
        return sk.fromBit(dd)
      }
    };
    ! function(dd) {
      dd[dd.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", dd[dd.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", dd[dd.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", dd[dd.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", dd[dd.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", dd[dd.RATELIMITED = 4002] = "RATELIMITED", dd[dd.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", dd[dd.INVALID_VERSION = 4004] = "INVALID_VERSION", dd[dd.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(jk || (jk = {})),
    function(dd) {
      dd[dd.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", dd[dd.INVALID_COMMAND = 4002] = "INVALID_COMMAND", dd[dd.INVALID_EVENT = 4004] = "INVALID_EVENT", dd[dd.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Xk || (Xk = {})),
    function(dd) {
      dd.LANDSCAPE = "landscape", dd.PORTRAIT = "portrait"
    }(fk || (fk = {})),
    function(dd) {
      dd.MOBILE = "mobile", dd.DESKTOP = "desktop"
    }(nk || (nk = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Uk.getFlag(0),
      ADMINISTRATOR: Uk.getFlag(3)
    });

    function yk(dd) {
      return Ok((Jd => {
        var kd;
        const [pd] = null !== (kd = Object.entries(dd).find((dd => {
          let [, kd] = dd;
          return kd === Jd
        }))) && void 0 !== kd ? kd : [];
        return null != Jd && void 0 === pd ? dd.UNHANDLED : Jd
      }), XJ().or(fJ()))
    }
    const Dk = Gk.object({
        image_url: Gk.string()
      }),
      Tk = Gk.object({
        mediaUrl: Gk.string().max(1024)
      }),
      Ek = Gk.object({
        access_token: Gk.union([Gk.string(), Gk.null()]).optional()
      }),
      ck = Gk.object({
        access_token: Gk.string(),
        user: Gk.object({
          username: Gk.string(),
          discriminator: Gk.string(),
          id: Gk.string(),
          avatar: Gk.union([Gk.string(), Gk.null()]).optional(),
          public_flags: Gk.number(),
          global_name: Gk.union([Gk.string(), Gk.null()]).optional()
        }),
        scopes: Gk.array(function(dd) {
          const Jd = bJ().transform((Jd => {
            const kd = dd.safeParse(Jd);
            return kd.success ? kd.data : dd._def.defaultValue()
          }));
          return Jd.overlayType = dd, Jd
        }(Gk.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Gk.literal(-1)).default(-1))),
        expires: Gk.string(),
        application: Gk.object({
          description: Gk.string(),
          icon: Gk.union([Gk.string(), Gk.null()]).optional(),
          id: Gk.string(),
          rpc_origins: Gk.array(Gk.string()).optional(),
          name: Gk.string()
        })
      }),
      hk = Gk.object({
        participants: Gk.array(Gk.object({
          id: Gk.string(),
          username: Gk.string(),
          global_name: Gk.union([Gk.string(), Gk.null()]).optional(),
          discriminator: Gk.string(),
          avatar: Gk.union([Gk.string(), Gk.null()]).optional(),
          flags: Gk.number(),
          bot: Gk.boolean(),
          avatar_decoration_data: Gk.union([Gk.object({
            asset: Gk.string(),
            skuId: Gk.string().optional()
          }), Gk.null()]).optional(),
          premium_type: Gk.union([Gk.number(), Gk.null()]).optional(),
          nickname: Gk.string().optional()
        }))
      });
    var rk;
    ! function(dd) {
      dd.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", dd.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", dd.AUTHENTICATE = "AUTHENTICATE", dd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(rk || (rk = {}));
    const uk = Gk.object({}).optional().nullable(),
      tk = Gk.void(),
      Vk = {
        [rk.INITIATE_IMAGE_UPLOAD]: {
          request: tk,
          response: Dk
        },
        [rk.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Tk,
          response: uk
        },
        [rk.AUTHENTICATE]: {
          request: Ek,
          response: ck
        },
        [rk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: tk,
          response: hk
        }
      },
      zk = "DISPATCH";
    var Hk;
    ! function(dd) {
      dd.AUTHORIZE = "AUTHORIZE", dd.AUTHENTICATE = "AUTHENTICATE", dd.GET_GUILDS = "GET_GUILDS", dd.GET_GUILD = "GET_GUILD", dd.GET_CHANNEL = "GET_CHANNEL", dd.GET_CHANNELS = "GET_CHANNELS", dd.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", dd.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", dd.SUBSCRIBE = "SUBSCRIBE", dd.UNSUBSCRIBE = "UNSUBSCRIBE", dd.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", dd.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", dd.SET_ACTIVITY = "SET_ACTIVITY", dd.GET_SKUS = "GET_SKUS", dd.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", dd.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", dd.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", dd.START_PURCHASE = "START_PURCHASE", dd.SET_CONFIG = "SET_CONFIG", dd.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", dd.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", dd.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", dd.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", dd.CAPTURE_LOG = "CAPTURE_LOG", dd.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", dd.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", dd.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", dd.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", dd.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", dd.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", dd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Hk || (Hk = {}));
    const wk = zJ({
        cmd: XJ(),
        data: rJ(),
        evt: cJ(),
        nonce: XJ()
      }).passthrough(),
      Ak = (yk(Object.assign(Object.assign({}, ck.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), zJ({
        id: XJ(),
        username: XJ(),
        discriminator: XJ(),
        global_name: XJ().optional().nullable(),
        avatar: XJ().optional().nullable(),
        avatar_decoration_data: zJ({
          asset: XJ(),
          sku_id: XJ().optional()
        }).nullable(),
        bot: yJ(),
        flags: fJ().optional().nullable(),
        premium_type: fJ().optional().nullable()
      })),
      dp = zJ({
        user: Ak,
        nick: XJ().optional().nullable(),
        roles: VJ(XJ()),
        joined_at: XJ(),
        deaf: yJ(),
        mute: yJ()
      }),
      Jp = zJ({
        id: XJ(),
        name: XJ().optional().nullable(),
        roles: VJ(XJ()).optional().nullable(),
        user: Ak.optional().nullable(),
        require_colons: yJ().optional().nullable(),
        managed: yJ().optional().nullable(),
        animated: yJ().optional().nullable(),
        available: yJ().optional().nullable()
      }),
      kp = zJ({
        mute: yJ(),
        deaf: yJ(),
        self_mute: yJ(),
        self_deaf: yJ(),
        suppress: yJ()
      }),
      pp = zJ({
        mute: yJ(),
        nick: XJ(),
        user: Ak,
        voice_state: kp,
        volume: fJ()
      }),
      Np = yk({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      Wp = zJ({
        name: XJ(),
        type: fJ(),
        url: XJ().optional().nullable(),
        created_at: fJ().optional().nullable(),
        timestamps: zJ({
          start: fJ(),
          end: fJ()
        }).partial().optional().nullable(),
        application_id: XJ().optional().nullable(),
        details: XJ().optional().nullable(),
        state: XJ().optional().nullable(),
        emoji: Jp.optional().nullable(),
        party: zJ({
          id: XJ().optional().nullable(),
          size: VJ(fJ()).optional().nullable()
        }).optional().nullable(),
        assets: zJ({
          large_image: XJ().nullable(),
          large_text: XJ().nullable(),
          small_image: XJ().nullable(),
          small_text: XJ().nullable()
        }).partial().optional().nullable(),
        secrets: zJ({
          join: XJ(),
          match: XJ()
        }).partial().optional().nullable(),
        instance: yJ().optional().nullable(),
        flags: fJ().optional().nullable()
      }),
      Pp = zJ({
        id: XJ(),
        type: yk({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: XJ(),
        deny: XJ()
      }),
      Zp = {
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
      gp = zJ({
        id: XJ(),
        type: yk(Zp),
        guild_id: XJ().optional().nullable(),
        position: fJ().optional().nullable(),
        permission_overwrites: VJ(Pp).optional().nullable(),
        name: XJ().optional().nullable(),
        topic: XJ().optional().nullable(),
        nsfw: yJ().optional().nullable(),
        last_message_id: XJ().optional().nullable(),
        bitrate: fJ().optional().nullable(),
        user_limit: fJ().optional().nullable(),
        rate_limit_per_user: fJ().optional().nullable(),
        recipients: VJ(Ak).optional().nullable(),
        icon: XJ().optional().nullable(),
        owner_id: XJ().optional().nullable(),
        application_id: XJ().optional().nullable(),
        parent_id: XJ().optional().nullable(),
        last_pin_timestamp: XJ().optional().nullable()
      }),
      Cp = zJ({
        user: Ak,
        guild_id: XJ(),
        status: Np,
        activities: VJ(Wp),
        client_status: zJ({
          desktop: Np,
          mobile: Np,
          web: Np
        }).partial()
      }),
      Kp = zJ({
        id: XJ(),
        name: XJ(),
        color: fJ(),
        hoist: yJ(),
        position: fJ(),
        permissions: XJ(),
        managed: yJ(),
        mentionable: yJ()
      }),
      op = (zJ({
        id: XJ(),
        name: XJ(),
        owner_id: XJ(),
        icon: XJ().nullable(),
        icon_hash: XJ().optional().nullable(),
        splash: XJ().nullable(),
        discovery_splash: XJ().nullable(),
        owner: yJ().optional().nullable(),
        permissions: XJ().optional().nullable(),
        region: XJ(),
        afk_channel_id: XJ().nullable(),
        afk_timeout: fJ(),
        widget_enabled: yJ().optional().nullable(),
        widget_channel_id: XJ().optional().nullable(),
        verification_level: fJ(),
        default_message_notifications: fJ(),
        explicit_content_filter: fJ(),
        roles: VJ(Kp),
        emojis: VJ(Jp),
        features: VJ(XJ()),
        mfa_level: fJ(),
        application_id: XJ().nullable(),
        system_channel_id: XJ().nullable(),
        system_channel_flags: fJ(),
        rules_channel_id: XJ().nullable(),
        joined_at: XJ().optional().nullable(),
        large: yJ().optional().nullable(),
        unavailable: yJ().optional().nullable(),
        member_count: fJ().optional().nullable(),
        voice_states: VJ(kp).optional().nullable(),
        members: VJ(dp).optional().nullable(),
        channels: VJ(gp).optional().nullable(),
        presences: VJ(Cp).optional().nullable(),
        max_presences: fJ().optional().nullable(),
        max_members: fJ().optional().nullable(),
        vanity_url_code: XJ().nullable(),
        description: XJ().nullable(),
        banner: XJ().nullable(),
        premium_tier: fJ(),
        premium_subscription_count: fJ().optional().nullable(),
        preferred_locale: XJ(),
        public_updates_channel_id: XJ().nullable(),
        max_video_channel_users: fJ().optional().nullable(),
        approximate_member_count: fJ().optional().nullable(),
        approximate_presence_count: fJ().optional().nullable()
      }), zJ({
        id: XJ(),
        guild_id: XJ(),
        type: fJ(),
        name: XJ()
      })),
      lp = zJ({
        id: XJ(),
        filename: XJ(),
        size: fJ(),
        url: XJ(),
        proxy_url: XJ(),
        height: fJ().optional().nullable(),
        width: fJ().optional().nullable()
      }),
      Qp = zJ({
        text: XJ(),
        icon_url: XJ().optional().nullable(),
        proxy_icon_url: XJ().optional().nullable()
      }),
      Lp = zJ({
        url: XJ().optional().nullable(),
        proxy_url: XJ().optional().nullable(),
        height: fJ().optional().nullable(),
        width: fJ().optional().nullable()
      }),
      Op = Lp.omit({
        proxy_url: !0
      }),
      ep = zJ({
        name: XJ().optional().nullable(),
        url: XJ().optional().nullable()
      }),
      Rp = zJ({
        name: XJ().optional().nullable(),
        url: XJ().optional().nullable(),
        icon_url: XJ().optional().nullable(),
        proxy_icon_url: XJ().optional().nullable()
      }),
      Ip = zJ({
        name: XJ(),
        value: XJ(),
        inline: yJ()
      }),
      Gp = zJ({
        title: XJ().optional().nullable(),
        type: XJ().optional().nullable(),
        description: XJ().optional().nullable(),
        url: XJ().optional().nullable(),
        timestamp: XJ().optional().nullable(),
        color: fJ().optional().nullable(),
        footer: Qp.optional().nullable(),
        image: Lp.optional().nullable(),
        thumbnail: Lp.optional().nullable(),
        video: Op.optional().nullable(),
        provider: ep.optional().nullable(),
        author: Rp.optional().nullable(),
        fields: VJ(Ip).optional().nullable()
      }),
      vp = zJ({
        count: fJ(),
        me: yJ(),
        emoji: Jp
      }),
      xp = zJ({
        type: fJ(),
        party_id: XJ().optional().nullable()
      }),
      qp = zJ({
        id: XJ(),
        cover_image: XJ().optional().nullable(),
        description: XJ(),
        icon: XJ().optional().nullable(),
        name: XJ()
      }),
      Bp = zJ({
        message_id: XJ().optional().nullable(),
        channel_id: XJ().optional().nullable(),
        guild_id: XJ().optional().nullable()
      }),
      sp = zJ({
        id: XJ(),
        channel_id: XJ(),
        guild_id: XJ().optional().nullable(),
        author: Ak.optional().nullable(),
        member: dp.optional().nullable(),
        content: XJ(),
        timestamp: XJ(),
        edited_timestamp: XJ().optional().nullable(),
        tts: yJ(),
        mention_everyone: yJ(),
        mentions: VJ(Ak),
        mention_roles: VJ(XJ()),
        mention_channels: VJ(op),
        attachments: VJ(lp),
        embeds: VJ(Gp),
        reactions: VJ(vp).optional().nullable(),
        nonce: wJ([XJ(), fJ()]).optional().nullable(),
        pinned: yJ(),
        webhook_id: XJ().optional().nullable(),
        type: fJ(),
        activity: xp.optional().nullable(),
        application: qp.optional().nullable(),
        message_reference: Bp.optional().nullable(),
        flags: fJ().optional().nullable(),
        stickers: VJ(rJ()).optional().nullable(),
        referenced_message: rJ().optional().nullable()
      }),
      ip = zJ({
        id: XJ(),
        name: XJ()
      }),
      ap = zJ({
        type: yk({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: fJ(),
        name: XJ()
      }),
      Mp = zJ({
        type: yk({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: yJ(),
        threshold: fJ(),
        shortcut: VJ(ap),
        delay: fJ()
      }),
      Fp = zJ({
        device_id: XJ(),
        volume: fJ(),
        available_devices: VJ(ip)
      }),
      Yp = (zJ({
        type: yk({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: XJ(),
        vendor: zJ({
          name: XJ(),
          url: XJ()
        }),
        model: zJ({
          name: XJ(),
          url: XJ()
        }),
        related: VJ(XJ()),
        echo_cancellation: yJ().optional().nullable(),
        noise_suppression: yJ().optional().nullable(),
        automatic_gain_control: yJ().optional().nullable(),
        hardware_mute: yJ().optional().nullable()
      }), zJ({
        id: XJ(),
        name: XJ(),
        type: yk({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: zJ({
          amount: fJ(),
          currency: XJ()
        }),
        application_id: XJ(),
        flags: fJ(),
        release_date: XJ().nullable()
      })),
      mp = zJ({
        id: XJ(),
        sku_id: XJ(),
        application_id: XJ(),
        user_id: XJ(),
        gift_code_flags: fJ(),
        type: yk({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: XJ().optional().nullable(),
        branches: VJ(XJ()).optional().nullable(),
        starts_at: XJ().optional().nullable(),
        ends_at: XJ().optional().nullable(),
        parent_id: XJ().optional().nullable(),
        consumed: yJ().optional().nullable(),
        deleted: yJ().optional().nullable(),
        gift_code_batch_id: XJ().optional().nullable()
      }),
      bp = (yk({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), yk({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Sp = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      jp = (yk(Sp), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Xp = (yk(jp), "ERROR");
    var fp;
    ! function(dd) {
      dd.READY = "READY", dd.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", dd.SPEAKING_START = "SPEAKING_START", dd.SPEAKING_STOP = "SPEAKING_STOP", dd.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", dd.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", dd.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", dd.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", dd.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", dd.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(fp || (fp = {}));
    const np = wk.extend({
        evt: Ck(fp),
        nonce: XJ().nullable(),
        cmd: Zk(zk),
        data: zJ({}).passthrough()
      }),
      Up = wk.extend({
        evt: Zk(Xp),
        data: zJ({
          code: fJ(),
          message: XJ().optional()
        }).passthrough(),
        cmd: Ck(Hk),
        nonce: XJ().nullable()
      }),
      yp = np.extend({
        evt: XJ()
      }),
      Dp = wJ([np, yp, Up]);
    const Tp = {
      [fp.READY]: {
        payload: np.extend({
          evt: Zk(fp.READY),
          data: zJ({
            v: fJ(),
            config: zJ({
              cdn_host: XJ().optional(),
              api_endpoint: XJ(),
              environment: XJ()
            }),
            user: zJ({
              id: XJ(),
              username: XJ(),
              discriminator: XJ(),
              avatar: XJ().optional()
            }).optional()
          })
        })
      },
      [fp.VOICE_STATE_UPDATE]: {
        payload: np.extend({
          evt: Zk(fp.VOICE_STATE_UPDATE),
          data: pp
        }),
        subscribeArgs: zJ({
          channel_id: XJ()
        })
      },
      [fp.SPEAKING_START]: {
        payload: np.extend({
          evt: Zk(fp.SPEAKING_START),
          data: zJ({
            lobby_id: XJ().optional(),
            channel_id: XJ().optional(),
            user_id: XJ()
          })
        }),
        subscribeArgs: zJ({
          lobby_id: XJ().nullable().optional(),
          channel_id: XJ().nullable().optional()
        })
      },
      [fp.SPEAKING_STOP]: {
        payload: np.extend({
          evt: Zk(fp.SPEAKING_STOP),
          data: zJ({
            lobby_id: XJ().optional(),
            channel_id: XJ().optional(),
            user_id: XJ()
          })
        }),
        subscribeArgs: zJ({
          lobby_id: XJ().nullable().optional(),
          channel_id: XJ().nullable().optional()
        })
      },
      [fp.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: np.extend({
          evt: Zk(fp.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: zJ({
            layout_mode: yk(jp)
          })
        })
      },
      [fp.ORIENTATION_UPDATE]: {
        payload: np.extend({
          evt: Zk(fp.ORIENTATION_UPDATE),
          data: zJ({
            screen_orientation: yk(Sp),
            orientation: Ck(fk)
          })
        })
      },
      [fp.CURRENT_USER_UPDATE]: {
        payload: np.extend({
          evt: Zk(fp.CURRENT_USER_UPDATE),
          data: Ak
        })
      },
      [fp.ENTITLEMENT_CREATE]: {
        payload: np.extend({
          evt: Zk(fp.ENTITLEMENT_CREATE),
          data: zJ({
            entitlement: mp
          })
        })
      },
      [fp.THERMAL_STATE_UPDATE]: {
        payload: np.extend({
          evt: Zk(fp.THERMAL_STATE_UPDATE),
          data: zJ({
            thermal_state: bp
          })
        })
      },
      [fp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: np.extend({
          evt: Zk(fp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: zJ({
            participants: hk.shape.participants
          })
        })
      }
    };
    const Ep = zJ({}).nullable(),
      cp = zJ({
        code: XJ()
      }),
      hp = zJ({
        guilds: VJ(zJ({
          id: XJ(),
          name: XJ()
        }))
      }),
      rp = zJ({
        id: XJ(),
        name: XJ(),
        icon_url: XJ().optional(),
        members: VJ(dp)
      }),
      tp = zJ({
        id: XJ(),
        type: yk(Zp),
        guild_id: XJ().optional().nullable(),
        name: XJ().optional().nullable(),
        topic: XJ().optional().nullable(),
        bitrate: fJ().optional().nullable(),
        user_limit: fJ().optional().nullable(),
        position: fJ().optional().nullable(),
        voice_states: VJ(pp),
        messages: VJ(sp)
      }),
      Vp = zJ({
        channels: VJ(gp)
      }),
      zp = (tp.nullable(), tp.nullable()),
      Hp = tp.nullable(),
      wp = (zJ({
        input: Fp,
        output: Fp,
        mode: Mp,
        automatic_gain_control: yJ(),
        echo_cancellation: yJ(),
        noise_suppression: yJ(),
        qos: yJ(),
        silence_warning: yJ(),
        deaf: yJ(),
        mute: yJ()
      }), zJ({
        evt: XJ()
      })),
      Ap = zJ({
        shortcut: ap
      }),
      dN = Wp,
      JN = zJ({
        skus: VJ(Yp)
      }),
      kN = zJ({
        entitlements: VJ(mp)
      }),
      pN = VJ(mp).nullable(),
      NN = zJ({
        use_interactive_pip: yJ()
      }),
      WN = zJ({
        locale: XJ()
      }),
      PN = zJ({
        enabled: yJ()
      }),
      ZN = zJ({
        permissions: UJ().or(XJ())
      }),
      gN = zJ({
        iosKeyboardResizesView: Qk(yJ())
      }),
      CN = wk.extend({
        cmd: Ck(Hk),
        evt: cJ()
      });

    function KN(dd) {
      let {
        cmd: Jd,
        data: kd
      } = dd;
      switch (Jd) {
        case Hk.AUTHORIZE:
          return cp.parse(kd);
        case Hk.CAPTURE_SHORTCUT:
          return Ap.parse(kd);
        case Hk.ENCOURAGE_HW_ACCELERATION:
          return PN.parse(kd);
        case Hk.GET_CHANNEL:
          return tp.parse(kd);
        case Hk.GET_CHANNELS:
          return Vp.parse(kd);
        case Hk.GET_CHANNEL_PERMISSIONS:
          return ZN.parse(kd);
        case Hk.GET_GUILD:
          return rp.parse(kd);
        case Hk.GET_GUILDS:
          return hp.parse(kd);
        case Hk.GET_PLATFORM_BEHAVIORS:
          return gN.parse(kd);
        case Hk.GET_CHANNEL:
          return tp.parse(kd);
        case Hk.SELECT_TEXT_CHANNEL:
          return Hp.parse(kd);
        case Hk.SELECT_VOICE_CHANNEL:
          return zp.parse(kd);
        case Hk.SET_ACTIVITY:
          return dN.parse(kd);
        case Hk.GET_SKUS_EMBEDDED:
          return JN.parse(kd);
        case Hk.GET_ENTITLEMENTS_EMBEDDED:
          return kN.parse(kd);
        case Hk.SET_CONFIG:
          return NN.parse(kd);
        case Hk.START_PURCHASE:
          return pN.parse(kd);
        case Hk.SUBSCRIBE:
        case Hk.UNSUBSCRIBE:
          return wp.parse(kd);
        case Hk.USER_SETTINGS_GET_LOCALE:
          return WN.parse(kd);
        case Hk.OPEN_EXTERNAL_LINK:
        case Hk.SET_ORIENTATION_LOCK_STATE:
        case Hk.SET_CERTIFIED_DEVICES:
        case Hk.SEND_ANALYTICS_EVENT:
        case Hk.OPEN_INVITE_DIALOG:
        case Hk.CAPTURE_LOG:
        case Hk.GET_SKUS:
        case Hk.GET_ENTITLEMENTS:
          return Ep.parse(kd);
        case Hk.AUTHENTICATE:
        case Hk.INITIATE_IMAGE_UPLOAD:
        case Hk.OPEN_SHARE_MOMENT_DIALOG:
        case Hk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: dd
          } = Vk[Jd];
          return dd.parse(kd);
        default:
          ! function(dd, Jd) {
            throw Jd
          }(0, new Error(`Unrecognized command ${Jd}`))
      }
    }
    zJ({
      frame_id: XJ(),
      platform: Ck(nk).optional().nullable()
    }), zJ({
      v: Zk(1),
      encoding: Zk("json").optional(),
      client_id: XJ(),
      frame_id: XJ()
    });
    const oN = zJ({
        code: fJ(),
        message: XJ().optional()
      }),
      lN = zJ({
        evt: XJ().nullable(),
        nonce: XJ().nullable(),
        data: rJ().nullable(),
        cmd: XJ()
      }).passthrough();

    function QN(dd) {
      const Jd = lN.parse(dd);
      return null != Jd.evt ? Jd.evt === Xp ? Up.parse(Jd) : function(dd) {
        const Jd = dd.evt;
        if (!(Jd in fp)) throw new Error(`Unrecognized event type ${dd.evt}`);
        return Tp[Jd].payload.parse(dd)
      }(Dp.parse(Jd)) : function(dd) {
        return Object.assign(Object.assign({}, dd), {
          data: KN(dd)
        })
      }(CN.passthrough().parse(Jd))
    }

    function LN(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Nd = wk.extend({
        cmd: Zk(Jd),
        data: kd
      });
      return async kd => {
        const Wd = await dd({
          cmd: Jd,
          args: kd,
          transfer: pd(kd)
        });
        return Nd.parse(Wd).data
      }
    }

    function ON(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const kd = Vk[dd].response,
        pd = wk.extend({
          cmd: Zk(dd),
          data: kd
        });
      return kd => async Nd => {
        const Wd = await kd({
          cmd: dd,
          args: Nd,
          transfer: Jd(Nd)
        });
        return pd.parse(Wd).data
      }
    }
    const eN = ON(rk.AUTHENTICATE),
      RN = dd => LN(dd, Hk.AUTHORIZE, cp),
      IN = dd => LN(dd, Hk.CAPTURE_LOG, Ep),
      GN = dd => LN(dd, Hk.ENCOURAGE_HW_ACCELERATION, PN),
      vN = dd => LN(dd, Hk.GET_ENTITLEMENTS_EMBEDDED, kN),
      xN = dd => LN(dd, Hk.GET_SKUS_EMBEDDED, JN),
      qN = dd => LN(dd, Hk.GET_CHANNEL_PERMISSIONS, ZN),
      BN = dd => LN(dd, Hk.GET_PLATFORM_BEHAVIORS, gN),
      sN = dd => LN(dd, Hk.OPEN_EXTERNAL_LINK, Ep),
      iN = dd => LN(dd, Hk.OPEN_INVITE_DIALOG, Ep),
      aN = ON(rk.OPEN_SHARE_MOMENT_DIALOG);
    Wp.Tl({
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
      type: Wp.shape.type.optional(),
      instance: Wp.shape.instance.optional()
    }).nullable();
    const MN = dd => LN(dd, Hk.SET_ACTIVITY, dN),
      FN = dd => LN(dd, Hk.SET_CONFIG, NN);
    const YN = dd => ({
        lock_state: dd.lock_state,
        picture_in_picture_lock_state: dd.picture_in_picture_lock_state
      }),
      mN = dd => function(dd) {
        let {
          sendCommand: Jd,
          cmd: kd,
          response: pd,
          fallbackTransform: Nd,
          transferTransform: Wd = () => {}
        } = dd;
        const Pd = wk.extend({
          cmd: Zk(kd),
          data: pd
        });
        return async dd => {
          try {
            const pd = await Jd({
              cmd: kd,
              args: dd,
              transfer: Wd(dd)
            });
            return Pd.parse(pd).data
          } catch (pd) {
            if (pd.code === Xk.INVALID_PAYLOAD) {
              const pd = Nd(dd),
                Zd = await Jd({
                  cmd: kd,
                  args: pd,
                  transfer: Wd(pd)
                });
              return Pd.parse(Zd).data
            }
            throw pd
          }
        }
      }({
        sendCommand: dd,
        cmd: Hk.SET_ORIENTATION_LOCK_STATE,
        response: Ep,
        fallbackTransform: YN
      }),
      bN = dd => LN(dd, Hk.START_PURCHASE, pN),
      SN = dd => LN(dd, Hk.USER_SETTINGS_GET_LOCALE, WN),
      jN = ON(rk.INITIATE_IMAGE_UPLOAD),
      XN = dd => LN(dd, Hk.GET_CHANNEL, tp),
      fN = ON(rk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var nN = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function UN(dd) {
      return "string" === typeof dd && nN.test(dd)
    }
    for (var yN = [], DN = 0; DN < 256; ++DN) yN.push((DN + 256).toString(16).substr(1));

    function TN(dd) {
      var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = (yN[dd[Jd + 0]] + yN[dd[Jd + 1]] + yN[dd[Jd + 2]] + yN[dd[Jd + 3]] + "-" + yN[dd[Jd + 4]] + yN[dd[Jd + 5]] + "-" + yN[dd[Jd + 6]] + yN[dd[Jd + 7]] + "-" + yN[dd[Jd + 8]] + yN[dd[Jd + 9]] + "-" + yN[dd[Jd + 10]] + yN[dd[Jd + 11]] + yN[dd[Jd + 12]] + yN[dd[Jd + 13]] + yN[dd[Jd + 14]] + yN[dd[Jd + 15]]).toLowerCase();
      if (!UN(kd)) throw TypeError("Stringified UUID is invalid");
      return kd
    }
    var EN;

    function cN(dd, Jd, kd) {
      function pd(dd, pd, Nd, Wd) {
        if ("string" === typeof dd && (dd = function(dd) {
            dd = unescape(encodeURIComponent(dd));
            for (var Jd = [], kd = 0; kd < dd.length; ++kd) Jd.push(dd.charCodeAt(kd));
            return Jd
          }(dd)), "string" === typeof pd && (pd = function(dd) {
            if (!UN(dd)) throw TypeError("Invalid UUID");
            var Jd, kd = new Uint8Array(16);
            return kd[0] = (Jd = parseInt(dd.slice(0, 8), 16)) >>> 24, kd[1] = Jd >>> 16 & 255, kd[2] = Jd >>> 8 & 255, kd[3] = 255 & Jd, kd[4] = (Jd = parseInt(dd.slice(9, 13), 16)) >>> 8, kd[5] = 255 & Jd, kd[6] = (Jd = parseInt(dd.slice(14, 18), 16)) >>> 8, kd[7] = 255 & Jd, kd[8] = (Jd = parseInt(dd.slice(19, 23), 16)) >>> 8, kd[9] = 255 & Jd, kd[10] = (Jd = parseInt(dd.slice(24, 36), 16)) / 1099511627776 & 255, kd[11] = Jd / 4294967296 & 255, kd[12] = Jd >>> 24 & 255, kd[13] = Jd >>> 16 & 255, kd[14] = Jd >>> 8 & 255, kd[15] = 255 & Jd, kd
          }(pd)), 16 !== pd.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Pd = new Uint8Array(16 + dd.length);
        if (Pd.set(pd), Pd.set(dd, pd.length), (Pd = kd(Pd))[6] = 15 & Pd[6] | Jd, Pd[8] = 63 & Pd[8] | 128, Nd) {
          Wd = Wd || 0;
          for (var Zd = 0; Zd < 16; ++Zd) Nd[Wd + Zd] = Pd[Zd];
          return Nd
        }
        return TN(Pd)
      }
      try {
        pd.name = dd
      } catch (Nd) {}
      return pd.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", pd.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", pd
    }

    function hN(dd) {
      return 14 + (dd + 64 >>> 9 << 4) + 1
    }

    function rN(dd, Jd) {
      var kd = (65535 & dd) + (65535 & Jd);
      return (dd >> 16) + (Jd >> 16) + (kd >> 16) << 16 | 65535 & kd
    }

    function uN(dd, Jd, kd, pd, Nd, Wd) {
      return rN((Pd = rN(rN(Jd, dd), rN(pd, Wd))) << (Zd = Nd) | Pd >>> 32 - Zd, kd);
      var Pd, Zd
    }

    function tN(dd, Jd, kd, pd, Nd, Wd, Pd) {
      return uN(Jd & kd | ~Jd & pd, dd, Jd, Nd, Wd, Pd)
    }

    function VN(dd, Jd, kd, pd, Nd, Wd, Pd) {
      return uN(Jd & pd | kd & ~pd, dd, Jd, Nd, Wd, Pd)
    }

    function zN(dd, Jd, kd, pd, Nd, Wd, Pd) {
      return uN(Jd ^ kd ^ pd, dd, Jd, Nd, Wd, Pd)
    }

    function HN(dd, Jd, kd, pd, Nd, Wd, Pd) {
      return uN(kd ^ (Jd | ~pd), dd, Jd, Nd, Wd, Pd)
    }
    cN("v3", 48, (function(dd) {
      if ("string" === typeof dd) {
        var Jd = unescape(encodeURIComponent(dd));
        dd = new Uint8Array(Jd.length);
        for (var kd = 0; kd < Jd.length; ++kd) dd[kd] = Jd.charCodeAt(kd)
      }
      return function(dd) {
        for (var Jd = [], kd = 32 * dd.length, pd = "0123456789abcdef", Nd = 0; Nd < kd; Nd += 8) {
          var Wd = dd[Nd >> 5] >>> Nd % 32 & 255,
            Pd = parseInt(pd.charAt(Wd >>> 4 & 15) + pd.charAt(15 & Wd), 16);
          Jd.push(Pd)
        }
        return Jd
      }(function(dd, Jd) {
        dd[Jd >> 5] |= 128 << Jd % 32, dd[hN(Jd) - 1] = Jd;
        for (var kd = 1732584193, pd = -271733879, Nd = -1732584194, Wd = 271733878, Pd = 0; Pd < dd.length; Pd += 16) {
          var Zd = kd,
            gd = pd,
            Cd = Nd,
            Kd = Wd;
          kd = tN(kd, pd, Nd, Wd, dd[Pd], 7, -680876936), Wd = tN(Wd, kd, pd, Nd, dd[Pd + 1], 12, -389564586), Nd = tN(Nd, Wd, kd, pd, dd[Pd + 2], 17, 606105819), pd = tN(pd, Nd, Wd, kd, dd[Pd + 3], 22, -1044525330), kd = tN(kd, pd, Nd, Wd, dd[Pd + 4], 7, -176418897), Wd = tN(Wd, kd, pd, Nd, dd[Pd + 5], 12, 1200080426), Nd = tN(Nd, Wd, kd, pd, dd[Pd + 6], 17, -1473231341), pd = tN(pd, Nd, Wd, kd, dd[Pd + 7], 22, -45705983), kd = tN(kd, pd, Nd, Wd, dd[Pd + 8], 7, 1770035416), Wd = tN(Wd, kd, pd, Nd, dd[Pd + 9], 12, -1958414417), Nd = tN(Nd, Wd, kd, pd, dd[Pd + 10], 17, -42063), pd = tN(pd, Nd, Wd, kd, dd[Pd + 11], 22, -1990404162), kd = tN(kd, pd, Nd, Wd, dd[Pd + 12], 7, 1804603682), Wd = tN(Wd, kd, pd, Nd, dd[Pd + 13], 12, -40341101), Nd = tN(Nd, Wd, kd, pd, dd[Pd + 14], 17, -1502002290), kd = VN(kd, pd = tN(pd, Nd, Wd, kd, dd[Pd + 15], 22, 1236535329), Nd, Wd, dd[Pd + 1], 5, -165796510), Wd = VN(Wd, kd, pd, Nd, dd[Pd + 6], 9, -1069501632), Nd = VN(Nd, Wd, kd, pd, dd[Pd + 11], 14, 643717713), pd = VN(pd, Nd, Wd, kd, dd[Pd], 20, -373897302), kd = VN(kd, pd, Nd, Wd, dd[Pd + 5], 5, -701558691), Wd = VN(Wd, kd, pd, Nd, dd[Pd + 10], 9, 38016083), Nd = VN(Nd, Wd, kd, pd, dd[Pd + 15], 14, -660478335), pd = VN(pd, Nd, Wd, kd, dd[Pd + 4], 20, -405537848), kd = VN(kd, pd, Nd, Wd, dd[Pd + 9], 5, 568446438), Wd = VN(Wd, kd, pd, Nd, dd[Pd + 14], 9, -1019803690), Nd = VN(Nd, Wd, kd, pd, dd[Pd + 3], 14, -187363961), pd = VN(pd, Nd, Wd, kd, dd[Pd + 8], 20, 1163531501), kd = VN(kd, pd, Nd, Wd, dd[Pd + 13], 5, -1444681467), Wd = VN(Wd, kd, pd, Nd, dd[Pd + 2], 9, -51403784), Nd = VN(Nd, Wd, kd, pd, dd[Pd + 7], 14, 1735328473), kd = zN(kd, pd = VN(pd, Nd, Wd, kd, dd[Pd + 12], 20, -1926607734), Nd, Wd, dd[Pd + 5], 4, -378558), Wd = zN(Wd, kd, pd, Nd, dd[Pd + 8], 11, -2022574463), Nd = zN(Nd, Wd, kd, pd, dd[Pd + 11], 16, 1839030562), pd = zN(pd, Nd, Wd, kd, dd[Pd + 14], 23, -35309556), kd = zN(kd, pd, Nd, Wd, dd[Pd + 1], 4, -1530992060), Wd = zN(Wd, kd, pd, Nd, dd[Pd + 4], 11, 1272893353), Nd = zN(Nd, Wd, kd, pd, dd[Pd + 7], 16, -155497632), pd = zN(pd, Nd, Wd, kd, dd[Pd + 10], 23, -1094730640), kd = zN(kd, pd, Nd, Wd, dd[Pd + 13], 4, 681279174), Wd = zN(Wd, kd, pd, Nd, dd[Pd], 11, -358537222), Nd = zN(Nd, Wd, kd, pd, dd[Pd + 3], 16, -722521979), pd = zN(pd, Nd, Wd, kd, dd[Pd + 6], 23, 76029189), kd = zN(kd, pd, Nd, Wd, dd[Pd + 9], 4, -640364487), Wd = zN(Wd, kd, pd, Nd, dd[Pd + 12], 11, -421815835), Nd = zN(Nd, Wd, kd, pd, dd[Pd + 15], 16, 530742520), kd = HN(kd, pd = zN(pd, Nd, Wd, kd, dd[Pd + 2], 23, -995338651), Nd, Wd, dd[Pd], 6, -198630844), Wd = HN(Wd, kd, pd, Nd, dd[Pd + 7], 10, 1126891415), Nd = HN(Nd, Wd, kd, pd, dd[Pd + 14], 15, -1416354905), pd = HN(pd, Nd, Wd, kd, dd[Pd + 5], 21, -57434055), kd = HN(kd, pd, Nd, Wd, dd[Pd + 12], 6, 1700485571), Wd = HN(Wd, kd, pd, Nd, dd[Pd + 3], 10, -1894986606), Nd = HN(Nd, Wd, kd, pd, dd[Pd + 10], 15, -1051523), pd = HN(pd, Nd, Wd, kd, dd[Pd + 1], 21, -2054922799), kd = HN(kd, pd, Nd, Wd, dd[Pd + 8], 6, 1873313359), Wd = HN(Wd, kd, pd, Nd, dd[Pd + 15], 10, -30611744), Nd = HN(Nd, Wd, kd, pd, dd[Pd + 6], 15, -1560198380), pd = HN(pd, Nd, Wd, kd, dd[Pd + 13], 21, 1309151649), kd = HN(kd, pd, Nd, Wd, dd[Pd + 4], 6, -145523070), Wd = HN(Wd, kd, pd, Nd, dd[Pd + 11], 10, -1120210379), Nd = HN(Nd, Wd, kd, pd, dd[Pd + 2], 15, 718787259), pd = HN(pd, Nd, Wd, kd, dd[Pd + 9], 21, -343485551), kd = rN(kd, Zd), pd = rN(pd, gd), Nd = rN(Nd, Cd), Wd = rN(Wd, Kd)
        }
        return [kd, pd, Nd, Wd]
      }(function(dd) {
        if (0 === dd.length) return [];
        for (var Jd = 8 * dd.length, kd = new Uint32Array(hN(Jd)), pd = 0; pd < Jd; pd += 8) kd[pd >> 5] |= (255 & dd[pd / 8]) << pd % 32;
        return kd
      }(dd), 8 * dd.length))
    }));
    var wN = new Uint8Array(16);

    function AN() {
      if (!EN && !(EN = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return EN(wN)
    }

    function dW(dd, Jd, kd) {
      var pd = (dd = dd || {}).random || (dd.rng || AN)();
      if (pd[6] = 15 & pd[6] | 64, pd[8] = 63 & pd[8] | 128, Jd) {
        kd = kd || 0;
        for (var Nd = 0; Nd < 16; ++Nd) Jd[kd + Nd] = pd[Nd];
        return Jd
      }
      return TN(pd)
    }

    function JW(dd, Jd, kd, pd) {
      switch (dd) {
        case 0:
          return Jd & kd ^ ~Jd & pd;
        case 1:
        case 3:
          return Jd ^ kd ^ pd;
        case 2:
          return Jd & kd ^ Jd & pd ^ kd & pd
      }
    }

    function kW(dd, Jd) {
      return dd << Jd | dd >>> 32 - Jd
    }
    cN("v5", 80, (function(dd) {
      var Jd = [1518500249, 1859775393, 2400959708, 3395469782],
        kd = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof dd) {
        var pd = unescape(encodeURIComponent(dd));
        dd = [];
        for (var Nd = 0; Nd < pd.length; ++Nd) dd.push(pd.charCodeAt(Nd))
      } else Array.isArray(dd) || (dd = Array.prototype.slice.call(dd));
      dd.push(128);
      for (var Wd = dd.length / 4 + 2, Pd = Math.ceil(Wd / 16), Zd = new Array(Pd), gd = 0; gd < Pd; ++gd) {
        for (var Cd = new Uint32Array(16), Kd = 0; Kd < 16; ++Kd) Cd[Kd] = dd[64 * gd + 4 * Kd] << 24 | dd[64 * gd + 4 * Kd + 1] << 16 | dd[64 * gd + 4 * Kd + 2] << 8 | dd[64 * gd + 4 * Kd + 3];
        Zd[gd] = Cd
      }
      Zd[Pd - 1][14] = 8 * (dd.length - 1) / Math.pow(2, 32), Zd[Pd - 1][14] = Math.floor(Zd[Pd - 1][14]), Zd[Pd - 1][15] = 8 * (dd.length - 1) & 4294967295;
      for (var od = 0; od < Pd; ++od) {
        for (var ld = new Uint32Array(80), Qd = 0; Qd < 16; ++Qd) ld[Qd] = Zd[od][Qd];
        for (var Ld = 16; Ld < 80; ++Ld) ld[Ld] = kW(ld[Ld - 3] ^ ld[Ld - 8] ^ ld[Ld - 14] ^ ld[Ld - 16], 1);
        for (var Od = kd[0], ed = kd[1], Rd = kd[2], Id = kd[3], Gd = kd[4], vd = 0; vd < 80; ++vd) {
          var xd = Math.floor(vd / 20),
            qd = kW(Od, 5) + JW(xd, ed, Rd, Id) + Gd + Jd[xd] + ld[vd] >>> 0;
          Gd = Id, Id = Rd, Rd = kW(ed, 30) >>> 0, ed = Od, Od = qd
        }
        kd[0] = kd[0] + Od >>> 0, kd[1] = kd[1] + ed >>> 0, kd[2] = kd[2] + Rd >>> 0, kd[3] = kd[3] + Id >>> 0, kd[4] = kd[4] + Gd >>> 0
      }
      return [kd[0] >> 24 & 255, kd[0] >> 16 & 255, kd[0] >> 8 & 255, 255 & kd[0], kd[1] >> 24 & 255, kd[1] >> 16 & 255, kd[1] >> 8 & 255, 255 & kd[1], kd[2] >> 24 & 255, kd[2] >> 16 & 255, kd[2] >> 8 & 255, 255 & kd[2], kd[3] >> 24 & 255, kd[3] >> 16 & 255, kd[3] >> 8 & 255, 255 & kd[3], kd[4] >> 24 & 255, kd[4] >> 16 & 255, kd[4] >> 8 & 255, 255 & kd[4]]
    }));
    class pW extends Error {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Jd), this.code = dd, this.message = Jd, this.name = "Discord SDK Error"
      }
    }
    const NW = ["log", "warn", "debug", "info", "error"];
    var WW;
    ! function(dd) {
      dd[dd.HANDSHAKE = 0] = "HANDSHAKE", dd[dd.FRAME = 1] = "FRAME", dd[dd.CLOSE = 2] = "CLOSE", dd[dd.HELLO = 3] = "HELLO"
    }(WW || (WW = {}));
    const PW = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class ZW {
      getTransfer(dd) {
        var Jd;
        switch (dd.cmd) {
          case Hk.SUBSCRIBE:
          case Hk.UNSUBSCRIBE:
            return;
          default:
            return null !== (Jd = dd.transfer) && void 0 !== Jd ? Jd : void 0
        }
      }
      constructor(dd, Jd) {
        var kd;
        if (this.eventBus = new Cd, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = dd => {
            var Jd;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const kd = dW();
            null === (Jd = this.source) || void 0 === Jd || Jd.postMessage([WW.FRAME, Object.assign(Object.assign({}, dd), {
              nonce: kd
            })], this.sourceOrigin, this.getTransfer(dd));
            return new Promise(((dd, Jd) => {
              this.pendingCommands.set(kd, {
                resolve: dd,
                reject: Jd
              })
            }))
          }, this.commands = (kd = this.sendCommand, {
            authenticate: eN(kd),
            authorize: RN(kd),
            captureLog: IN(kd),
            encourageHardwareAcceleration: GN(kd),
            getChannel: XN(kd),
            getChannelPermissions: qN(kd),
            getEntitlements: vN(kd),
            getPlatformBehaviors: BN(kd),
            getSkus: xN(kd),
            openExternalLink: sN(kd),
            openInviteDialog: iN(kd),
            openShareMomentDialog: aN(kd),
            setActivity: MN(kd),
            setConfig: FN(kd),
            setOrientationLockState: mN(kd),
            startPurchase: bN(kd),
            userSettingsGetLocale: SN(kd),
            initiateImageUpload: jN(kd),
            getInstanceConnectedParticipants: fN(kd)
          }), this.handleMessage = dd => {
            if (!PW.has(dd.origin)) return;
            const Jd = dd.data;
            if (!Array.isArray(Jd)) return;
            const [kd, pd] = Jd;
            switch (kd) {
              case WW.HELLO:
                return;
              case WW.CLOSE:
                return this.handleClose(pd);
              case WW.HANDSHAKE:
                return this.handleHandshake();
              case WW.FRAME:
                return this.handleFrame(pd);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = dd, this.configuration = null !== Jd && void 0 !== Jd ? Jd : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = nk.DESKTOP, this.guildId = null, void(this.channelId = null);
        const pd = new URLSearchParams(this._getSearch()),
          Nd = pd.get("frame_id");
        if (!Nd) throw new Error("frame_id query param is not defined");
        this.frameId = Nd;
        const Wd = pd.get("instance_id");
        if (!Wd) throw new Error("instance_id query param is not defined");
        this.instanceId = Wd;
        const Pd = pd.get("platform");
        if (!Pd) throw new Error("platform query param is not defined");
        if (Pd !== nk.DESKTOP && Pd !== nk.MOBILE) throw new Error(`Invalid query param "platform" of "${Pd}". Valid values are "${nk.DESKTOP}" or "${nk.MOBILE}"`);
        this.platform = Pd, this.guildId = pd.get("guild_id"), this.channelId = pd.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var dd;
          return [null !== (dd = window.parent.opener) && void 0 !== dd ? dd : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(dd, Jd) {
        var kd;
        window.removeEventListener("message", this.handleMessage);
        const pd = dW();
        null === (kd = this.source) || void 0 === kd || kd.postMessage([WW.CLOSE, {
          code: dd,
          message: Jd,
          nonce: pd
        }], this.sourceOrigin)
      }
      async subscribe(dd, Jd) {
        for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
        const [Wd] = pd, Pd = this.eventBus.listenerCount(dd), Zd = this.eventBus.on(dd, Jd);
        return Object.values(fp).includes(dd) && dd !== fp.READY && 0 === Pd && await this.sendCommand({
          cmd: Hk.SUBSCRIBE,
          args: Wd,
          evt: dd
        }), Zd
      }
      async unsubscribe(dd, Jd) {
        for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
        const [Wd] = pd;
        return dd !== fp.READY && 1 === this.eventBus.listenerCount(dd) && await this.sendCommand({
          cmd: Hk.UNSUBSCRIBE,
          evt: dd,
          args: Wd
        }), this.eventBus.off(dd, Jd)
      }
      async ready() {
        this.isReady || await new Promise((dd => {
          this.eventBus.once(fp.READY, dd)
        }))
      }
      handshake() {
        var dd;
        null === (dd = this.source) || void 0 === dd || dd.postMessage([WW.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(fp.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const dd = (dd, Jd) => {
          this.commands.captureLog({
            level: dd,
            message: Jd
          })
        };
        NW.forEach((Jd => {
          ! function(dd, Jd, kd) {
            const pd = dd[Jd],
              Nd = dd;
            pd && (dd[Jd] = function() {
              const dd = [].slice.call(arguments),
                Wd = "" + dd.join(" ");
              kd(Jd, Wd), pd.apply(Nd, dd)
            })
          }(console, Jd, dd)
        }))
      }
      handleClose(dd) {
        oN.parse(dd)
      }
      handleHandshake() {}
      handleFrame(dd) {
        var Jd, kd;
        let pd;
        try {
          pd = QN(dd)
        } catch (Nd) {
          return console.error("Failed to parse", dd), void console.error(Nd)
        }
        if ("DISPATCH" === pd.cmd) this.eventBus.emit(pd.evt, pd.data);
        else {
          if (pd.evt === Xp) {
            if (null != pd.nonce) return null === (Jd = this.pendingCommands.get(pd.nonce)) || void 0 === Jd || Jd.reject(pd.data), void this.pendingCommands.delete(pd.nonce);
            this.eventBus.emit("error", new pW(pd.data.code, pd.data.message))
          }
          if (null == pd.nonce) return void console.error("Missing nonce", dd);
          null === (kd = this.pendingCommands.get(pd.nonce)) || void 0 === kd || kd.resolve(pd), this.pendingCommands.delete(pd.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var gW, CW = 1e9,
      KW = !0,
      oW = "[DecimalError] ",
      lW = oW + "Invalid argument: ",
      QW = oW + "Exponent out of range: ",
      LW = Math.floor,
      OW = Math.pow,
      eW = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      RW = 1e7,
      IW = 9007199254740991,
      GW = LW(1286742750677284.5),
      vW = {};

    function xW(dd, Jd) {
      var kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd = dd.constructor,
        od = Kd.precision;
      if (!dd.s || !Jd.s) return Jd.s || (Jd = new Kd(dd)), KW ? bW(Jd, od) : Jd;
      if (gd = dd.d, Cd = Jd.d, Pd = dd.e, Nd = Jd.e, gd = gd.slice(), Wd = Pd - Nd) {
        for (Wd < 0 ? (pd = gd, Wd = -Wd, Zd = Cd.length) : (pd = Cd, Nd = Pd, Zd = gd.length), Wd > (Zd = (Pd = Math.ceil(od / 7)) > Zd ? Pd + 1 : Zd + 1) && (Wd = Zd, pd.length = 1), pd.reverse(); Wd--;) pd.push(0);
        pd.reverse()
      }
      for ((Zd = gd.length) - (Wd = Cd.length) < 0 && (Wd = Zd, pd = Cd, Cd = gd, gd = pd), kd = 0; Wd;) kd = (gd[--Wd] = gd[Wd] + Cd[Wd] + kd) / RW | 0, gd[Wd] %= RW;
      for (kd && (gd.unshift(kd), ++Nd), Zd = gd.length; 0 == gd[--Zd];) gd.pop();
      return Jd.d = gd, Jd.e = Nd, KW ? bW(Jd, od) : Jd
    }

    function qW(dd, Jd, kd) {
      if (dd !== ~~dd || dd < Jd || dd > kd) throw Error(lW + dd)
    }

    function BW(dd) {
      var Jd, kd, pd, Nd = dd.length - 1,
        Wd = "",
        Pd = dd[0];
      if (Nd > 0) {
        for (Wd += Pd, Jd = 1; Jd < Nd; Jd++)(kd = 7 - (pd = dd[Jd] + "").length) && (Wd += FW(kd)), Wd += pd;
        (kd = 7 - (pd = (Pd = dd[Jd]) + "").length) && (Wd += FW(kd))
      } else if (0 === Pd) return "0";
      for (; Pd % 10 === 0;) Pd /= 10;
      return Wd + Pd
    }
    vW.absoluteValue = vW.abs = function() {
      var dd = new this.constructor(this);
      return dd.s && (dd.s = 1), dd
    }, vW.comparedTo = vW.cmp = function(dd) {
      var Jd, kd, pd, Nd, Wd = this;
      if (dd = new Wd.constructor(dd), Wd.s !== dd.s) return Wd.s || -dd.s;
      if (Wd.e !== dd.e) return Wd.e > dd.e ^ Wd.s < 0 ? 1 : -1;
      for (Jd = 0, kd = (pd = Wd.d.length) < (Nd = dd.d.length) ? pd : Nd; Jd < kd; ++Jd)
        if (Wd.d[Jd] !== dd.d[Jd]) return Wd.d[Jd] > dd.d[Jd] ^ Wd.s < 0 ? 1 : -1;
      return pd === Nd ? 0 : pd > Nd ^ Wd.s < 0 ? 1 : -1
    }, vW.decimalPlaces = vW.dp = function() {
      var dd = this,
        Jd = dd.d.length - 1,
        kd = 7 * (Jd - dd.e);
      if (Jd = dd.d[Jd])
        for (; Jd % 10 == 0; Jd /= 10) kd--;
      return kd < 0 ? 0 : kd
    }, vW.dividedBy = vW.div = function(dd) {
      return sW(this, new this.constructor(dd))
    }, vW.dividedToIntegerBy = vW.idiv = function(dd) {
      var Jd = this.constructor;
      return bW(sW(this, new Jd(dd), 0, 1), Jd.precision)
    }, vW.equals = vW.eq = function(dd) {
      return !this.cmp(dd)
    }, vW.exponent = function() {
      return aW(this)
    }, vW.greaterThan = vW.gt = function(dd) {
      return this.cmp(dd) > 0
    }, vW.greaterThanOrEqualTo = vW.gte = function(dd) {
      return this.cmp(dd) >= 0
    }, vW.isInteger = vW.isint = function() {
      return this.e > this.d.length - 2
    }, vW.isNegative = vW.isneg = function() {
      return this.s < 0
    }, vW.isPositive = vW.ispos = function() {
      return this.s > 0
    }, vW.isZero = function() {
      return 0 === this.s
    }, vW.lessThan = vW.lt = function(dd) {
      return this.cmp(dd) < 0
    }, vW.lessThanOrEqualTo = vW.lte = function(dd) {
      return this.cmp(dd) < 1
    }, vW.logarithm = vW.log = function(dd) {
      var Jd, kd = this,
        pd = kd.constructor,
        Nd = pd.precision,
        Wd = Nd + 5;
      if (void 0 === dd) dd = new pd(10);
      else if ((dd = new pd(dd)).s < 1 || dd.eq(gW)) throw Error(oW + "NaN");
      if (kd.s < 1) throw Error(oW + (kd.s ? "NaN" : "-Infinity"));
      return kd.eq(gW) ? new pd(0) : (KW = !1, Jd = sW(YW(kd, Wd), YW(dd, Wd), Wd), KW = !0, bW(Jd, Nd))
    }, vW.minus = vW.sub = function(dd) {
      var Jd = this;
      return dd = new Jd.constructor(dd), Jd.s == dd.s ? SW(Jd, dd) : xW(Jd, (dd.s = -dd.s, dd))
    }, vW.modulo = vW.mod = function(dd) {
      var Jd, kd = this,
        pd = kd.constructor,
        Nd = pd.precision;
      if (!(dd = new pd(dd)).s) throw Error(oW + "NaN");
      return kd.s ? (KW = !1, Jd = sW(kd, dd, 0, 1).times(dd), KW = !0, kd.minus(Jd)) : bW(new pd(kd), Nd)
    }, vW.naturalExponential = vW.exp = function() {
      return iW(this)
    }, vW.naturalLogarithm = vW.ln = function() {
      return YW(this)
    }, vW.negated = vW.neg = function() {
      var dd = new this.constructor(this);
      return dd.s = -dd.s || 0, dd
    }, vW.plus = vW.add = function(dd) {
      var Jd = this;
      return dd = new Jd.constructor(dd), Jd.s == dd.s ? xW(Jd, dd) : SW(Jd, (dd.s = -dd.s, dd))
    }, vW.precision = vW.sd = function(dd) {
      var Jd, kd, pd, Nd = this;
      if (void 0 !== dd && dd !== !!dd && 1 !== dd && 0 !== dd) throw Error(lW + dd);
      if (Jd = aW(Nd) + 1, kd = 7 * (pd = Nd.d.length - 1) + 1, pd = Nd.d[pd]) {
        for (; pd % 10 == 0; pd /= 10) kd--;
        for (pd = Nd.d[0]; pd >= 10; pd /= 10) kd++
      }
      return dd && Jd > kd ? Jd : kd
    }, vW.squareRoot = vW.sqrt = function() {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd = this,
        gd = Zd.constructor;
      if (Zd.s < 1) {
        if (!Zd.s) return new gd(0);
        throw Error(oW + "NaN")
      }
      for (dd = aW(Zd), KW = !1, 0 == (Nd = Math.sqrt(+Zd)) || Nd == 1 / 0 ? (((Jd = BW(Zd.d)).length + dd) % 2 == 0 && (Jd += "0"), Nd = Math.sqrt(Jd), dd = LW((dd + 1) / 2) - (dd < 0 || dd % 2), pd = new gd(Jd = Nd == 1 / 0 ? "1e" + dd : (Jd = Nd.toExponential()).slice(0, Jd.indexOf("e") + 1) + dd)) : pd = new gd(Nd.toString()), Nd = Pd = (kd = gd.precision) + 3;;)
        if (pd = (Wd = pd).plus(sW(Zd, Wd, Pd + 2)).times(.5), BW(Wd.d).slice(0, Pd) === (Jd = BW(pd.d)).slice(0, Pd)) {
          if (Jd = Jd.slice(Pd - 3, Pd + 1), Nd == Pd && "4999" == Jd) {
            if (bW(Wd, kd + 1, 0), Wd.times(Wd).eq(Zd)) {
              pd = Wd;
              break
            }
          } else if ("9999" != Jd) break;
          Pd += 4
        } return KW = !0, bW(pd, kd)
    }, vW.times = vW.mul = function(dd) {
      var Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd = this,
        od = Kd.constructor,
        ld = Kd.d,
        Qd = (dd = new od(dd)).d;
      if (!Kd.s || !dd.s) return new od(0);
      for (dd.s *= Kd.s, kd = Kd.e + dd.e, (gd = ld.length) < (Cd = Qd.length) && (Wd = ld, ld = Qd, Qd = Wd, Pd = gd, gd = Cd, Cd = Pd), Wd = [], pd = Pd = gd + Cd; pd--;) Wd.push(0);
      for (pd = Cd; --pd >= 0;) {
        for (Jd = 0, Nd = gd + pd; Nd > pd;) Zd = Wd[Nd] + Qd[pd] * ld[Nd - pd - 1] + Jd, Wd[Nd--] = Zd % RW | 0, Jd = Zd / RW | 0;
        Wd[Nd] = (Wd[Nd] + Jd) % RW | 0
      }
      for (; !Wd[--Pd];) Wd.pop();
      return Jd ? ++kd : Wd.shift(), dd.d = Wd, dd.e = kd, KW ? bW(dd, od.precision) : dd
    }, vW.toDecimalPlaces = vW.todp = function(dd, Jd) {
      var kd = this,
        pd = kd.constructor;
      return kd = new pd(kd), void 0 === dd ? kd : (qW(dd, 0, CW), void 0 === Jd ? Jd = pd.rounding : qW(Jd, 0, 8), bW(kd, dd + aW(kd) + 1, Jd))
    }, vW.toExponential = function(dd, Jd) {
      var kd, pd = this,
        Nd = pd.constructor;
      return void 0 === dd ? kd = jW(pd, !0) : (qW(dd, 0, CW), void 0 === Jd ? Jd = Nd.rounding : qW(Jd, 0, 8), kd = jW(pd = bW(new Nd(pd), dd + 1, Jd), !0, dd + 1)), kd
    }, vW.toFixed = function(dd, Jd) {
      var kd, pd, Nd = this,
        Wd = Nd.constructor;
      return void 0 === dd ? jW(Nd) : (qW(dd, 0, CW), void 0 === Jd ? Jd = Wd.rounding : qW(Jd, 0, 8), kd = jW((pd = bW(new Wd(Nd), dd + aW(Nd) + 1, Jd)).abs(), !1, dd + aW(pd) + 1), Nd.isneg() && !Nd.isZero() ? "-" + kd : kd)
    }, vW.toInteger = vW.toint = function() {
      var dd = this,
        Jd = dd.constructor;
      return bW(new Jd(dd), aW(dd) + 1, Jd.rounding)
    }, vW.toNumber = function() {
      return +this
    }, vW.toPower = vW.pow = function(dd) {
      var Jd, kd, pd, Nd, Wd, Pd, Zd = this,
        gd = Zd.constructor,
        Cd = +(dd = new gd(dd));
      if (!dd.s) return new gd(gW);
      if (!(Zd = new gd(Zd)).s) {
        if (dd.s < 1) throw Error(oW + "Infinity");
        return Zd
      }
      if (Zd.eq(gW)) return Zd;
      if (pd = gd.precision, dd.eq(gW)) return bW(Zd, pd);
      if (Pd = (Jd = dd.e) >= (kd = dd.d.length - 1), Wd = Zd.s, Pd) {
        if ((kd = Cd < 0 ? -Cd : Cd) <= IW) {
          for (Nd = new gd(gW), Jd = Math.ceil(pd / 7 + 4), KW = !1; kd % 2 && XW((Nd = Nd.times(Zd)).d, Jd), 0 !== (kd = LW(kd / 2));) XW((Zd = Zd.times(Zd)).d, Jd);
          return KW = !0, dd.s < 0 ? new gd(gW).div(Nd) : bW(Nd, pd)
        }
      } else if (Wd < 0) throw Error(oW + "NaN");
      return Wd = Wd < 0 && 1 & dd.d[Math.max(Jd, kd)] ? -1 : 1, Zd.s = 1, KW = !1, Nd = dd.times(YW(Zd, pd + 12)), KW = !0, (Nd = iW(Nd)).s = Wd, Nd
    }, vW.toPrecision = function(dd, Jd) {
      var kd, pd, Nd = this,
        Wd = Nd.constructor;
      return void 0 === dd ? pd = jW(Nd, (kd = aW(Nd)) <= Wd.toExpNeg || kd >= Wd.toExpPos) : (qW(dd, 1, CW), void 0 === Jd ? Jd = Wd.rounding : qW(Jd, 0, 8), pd = jW(Nd = bW(new Wd(Nd), dd, Jd), dd <= (kd = aW(Nd)) || kd <= Wd.toExpNeg, dd)), pd
    }, vW.toSignificantDigits = vW.tosd = function(dd, Jd) {
      var kd = this.constructor;
      return void 0 === dd ? (dd = kd.precision, Jd = kd.rounding) : (qW(dd, 1, CW), void 0 === Jd ? Jd = kd.rounding : qW(Jd, 0, 8)), bW(new kd(this), dd, Jd)
    }, vW.toString = vW.valueOf = vW.val = vW.toJSON = vW[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var dd = this,
        Jd = aW(dd),
        kd = dd.constructor;
      return jW(dd, Jd <= kd.toExpNeg || Jd >= kd.toExpPos)
    };
    var sW = function() {
      function dd(dd, Jd) {
        var kd, pd = 0,
          Nd = dd.length;
        for (dd = dd.slice(); Nd--;) kd = dd[Nd] * Jd + pd, dd[Nd] = kd % RW | 0, pd = kd / RW | 0;
        return pd && dd.unshift(pd), dd
      }

      function Jd(dd, Jd, kd, pd) {
        var Nd, Wd;
        if (kd != pd) Wd = kd > pd ? 1 : -1;
        else
          for (Nd = Wd = 0; Nd < kd; Nd++)
            if (dd[Nd] != Jd[Nd]) {
              Wd = dd[Nd] > Jd[Nd] ? 1 : -1;
              break
            } return Wd
      }

      function kd(dd, Jd, kd) {
        for (var pd = 0; kd--;) dd[kd] -= pd, pd = dd[kd] < Jd[kd] ? 1 : 0, dd[kd] = pd * RW + dd[kd] - Jd[kd];
        for (; !dd[0] && dd.length > 1;) dd.shift()
      }
      return function(pd, Nd, Wd, Pd) {
        var Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, ad = pd.constructor,
          Md = pd.s == Nd.s ? 1 : -1,
          Fd = pd.d,
          Yd = Nd.d;
        if (!pd.s) return new ad(pd);
        if (!Nd.s) throw Error(oW + "Division by zero");
        for (gd = pd.e - Nd.e, Bd = Yd.length, xd = Fd.length, Ld = (Qd = new ad(Md)).d = [], Cd = 0; Yd[Cd] == (Fd[Cd] || 0);) ++Cd;
        if (Yd[Cd] > (Fd[Cd] || 0) && --gd, (Id = null == Wd ? Wd = ad.precision : Pd ? Wd + (aW(pd) - aW(Nd)) + 1 : Wd) < 0) return new ad(0);
        if (Id = Id / 7 + 2 | 0, Cd = 0, 1 == Bd)
          for (Kd = 0, Yd = Yd[0], Id++;
            (Cd < xd || Kd) && Id--; Cd++) Gd = Kd * RW + (Fd[Cd] || 0), Ld[Cd] = Gd / Yd | 0, Kd = Gd % Yd | 0;
        else {
          for ((Kd = RW / (Yd[0] + 1) | 0) > 1 && (Yd = dd(Yd, Kd), Fd = dd(Fd, Kd), Bd = Yd.length, xd = Fd.length), vd = Bd, ed = (Od = Fd.slice(0, Bd)).length; ed < Bd;) Od[ed++] = 0;
          (sd = Yd.slice()).unshift(0), qd = Yd[0], Yd[1] >= RW / 2 && ++qd;
          do {
            Kd = 0, (Zd = Jd(Yd, Od, Bd, ed)) < 0 ? (Rd = Od[0], Bd != ed && (Rd = Rd * RW + (Od[1] || 0)), (Kd = Rd / qd | 0) > 1 ? (Kd >= RW && (Kd = RW - 1), 1 == (Zd = Jd(od = dd(Yd, Kd), Od, ld = od.length, ed = Od.length)) && (Kd--, kd(od, Bd < ld ? sd : Yd, ld))) : (0 == Kd && (Zd = Kd = 1), od = Yd.slice()), (ld = od.length) < ed && od.unshift(0), kd(Od, od, ed), -1 == Zd && (Zd = Jd(Yd, Od, Bd, ed = Od.length)) < 1 && (Kd++, kd(Od, Bd < ed ? sd : Yd, ed)), ed = Od.length) : 0 === Zd && (Kd++, Od = [0]), Ld[Cd++] = Kd, Zd && Od[0] ? Od[ed++] = Fd[vd] || 0 : (Od = [Fd[vd]], ed = 1)
          } while ((vd++ < xd || void 0 !== Od[0]) && Id--)
        }
        return Ld[0] || Ld.shift(), Qd.e = gd, bW(Qd, Pd ? Wd + aW(Qd) + 1 : Wd)
      }
    }();

    function iW(dd, Jd) {
      var kd, pd, Nd, Wd, Pd, Zd = 0,
        gd = 0,
        Cd = dd.constructor,
        Kd = Cd.precision;
      if (aW(dd) > 16) throw Error(QW + aW(dd));
      if (!dd.s) return new Cd(gW);
      for (null == Jd ? (KW = !1, Pd = Kd) : Pd = Jd, Wd = new Cd(.03125); dd.abs().gte(.1);) dd = dd.times(Wd), gd += 5;
      for (Pd += Math.log(OW(2, gd)) / Math.LN10 * 2 + 5 | 0, kd = pd = Nd = new Cd(gW), Cd.precision = Pd;;) {
        if (pd = bW(pd.times(dd), Pd), kd = kd.times(++Zd), BW((Wd = Nd.plus(sW(pd, kd, Pd))).d).slice(0, Pd) === BW(Nd.d).slice(0, Pd)) {
          for (; gd--;) Nd = bW(Nd.times(Nd), Pd);
          return Cd.precision = Kd, null == Jd ? (KW = !0, bW(Nd, Kd)) : Nd
        }
        Nd = Wd
      }
    }

    function aW(dd) {
      for (var Jd = 7 * dd.e, kd = dd.d[0]; kd >= 10; kd /= 10) Jd++;
      return Jd
    }

    function MW(dd, Jd, kd) {
      if (Jd > dd.LN10.sd()) throw KW = !0, kd && (dd.precision = kd), Error(oW + "LN10 precision limit exceeded");
      return bW(new dd(dd.LN10), Jd)
    }

    function FW(dd) {
      for (var Jd = ""; dd--;) Jd += "0";
      return Jd
    }

    function YW(dd, Jd) {
      var kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od = 1,
        ld = dd,
        Qd = ld.d,
        Ld = ld.constructor,
        Od = Ld.precision;
      if (ld.s < 1) throw Error(oW + (ld.s ? "NaN" : "-Infinity"));
      if (ld.eq(gW)) return new Ld(0);
      if (null == Jd ? (KW = !1, Cd = Od) : Cd = Jd, ld.eq(10)) return null == Jd && (KW = !0), MW(Ld, Cd);
      if (Cd += 10, Ld.precision = Cd, pd = (kd = BW(Qd)).charAt(0), Wd = aW(ld), !(Math.abs(Wd) < 15e14)) return gd = MW(Ld, Cd + 2, Od).times(Wd + ""), ld = YW(new Ld(pd + "." + kd.slice(1)), Cd - 10).plus(gd), Ld.precision = Od, null == Jd ? (KW = !0, bW(ld, Od)) : ld;
      for (; pd < 7 && 1 != pd || 1 == pd && kd.charAt(1) > 3;) pd = (kd = BW((ld = ld.times(dd)).d)).charAt(0), od++;
      for (Wd = aW(ld), pd > 1 ? (ld = new Ld("0." + kd), Wd++) : ld = new Ld(pd + "." + kd.slice(1)), Zd = Pd = ld = sW(ld.minus(gW), ld.plus(gW), Cd), Kd = bW(ld.times(ld), Cd), Nd = 3;;) {
        if (Pd = bW(Pd.times(Kd), Cd), BW((gd = Zd.plus(sW(Pd, new Ld(Nd), Cd))).d).slice(0, Cd) === BW(Zd.d).slice(0, Cd)) return Zd = Zd.times(2), 0 !== Wd && (Zd = Zd.plus(MW(Ld, Cd + 2, Od).times(Wd + ""))), Zd = sW(Zd, new Ld(od), Cd), Ld.precision = Od, null == Jd ? (KW = !0, bW(Zd, Od)) : Zd;
        Zd = gd, Nd += 2
      }
    }

    function mW(dd, Jd) {
      var kd, pd, Nd;
      for ((kd = Jd.indexOf(".")) > -1 && (Jd = Jd.replace(".", "")), (pd = Jd.search(/e/i)) > 0 ? (kd < 0 && (kd = pd), kd += +Jd.slice(pd + 1), Jd = Jd.substring(0, pd)) : kd < 0 && (kd = Jd.length), pd = 0; 48 === Jd.charCodeAt(pd);) ++pd;
      for (Nd = Jd.length; 48 === Jd.charCodeAt(Nd - 1);) --Nd;
      if (Jd = Jd.slice(pd, Nd)) {
        if (Nd -= pd, kd = kd - pd - 1, dd.e = LW(kd / 7), dd.d = [], pd = (kd + 1) % 7, kd < 0 && (pd += 7), pd < Nd) {
          for (pd && dd.d.push(+Jd.slice(0, pd)), Nd -= 7; pd < Nd;) dd.d.push(+Jd.slice(pd, pd += 7));
          pd = 7 - (Jd = Jd.slice(pd)).length
        } else pd -= Nd;
        for (; pd--;) Jd += "0";
        if (dd.d.push(+Jd), KW && (dd.e > GW || dd.e < -GW)) throw Error(QW + kd)
      } else dd.s = 0, dd.e = 0, dd.d = [0];
      return dd
    }

    function bW(dd, Jd, kd) {
      var pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od = dd.d;
      for (Pd = 1, Wd = od[0]; Wd >= 10; Wd /= 10) Pd++;
      if ((pd = Jd - Pd) < 0) pd += 7, Nd = Jd, Cd = od[Kd = 0];
      else {
        if ((Kd = Math.ceil((pd + 1) / 7)) >= (Wd = od.length)) return dd;
        for (Cd = Wd = od[Kd], Pd = 1; Wd >= 10; Wd /= 10) Pd++;
        Nd = (pd %= 7) - 7 + Pd
      }
      if (void 0 !== kd && (Zd = Cd / (Wd = OW(10, Pd - Nd - 1)) % 10 | 0, gd = Jd < 0 || void 0 !== od[Kd + 1] || Cd % Wd, gd = kd < 4 ? (Zd || gd) && (0 == kd || kd == (dd.s < 0 ? 3 : 2)) : Zd > 5 || 5 == Zd && (4 == kd || gd || 6 == kd && (pd > 0 ? Nd > 0 ? Cd / OW(10, Pd - Nd) : 0 : od[Kd - 1]) % 10 & 1 || kd == (dd.s < 0 ? 8 : 7))), Jd < 1 || !od[0]) return gd ? (Wd = aW(dd), od.length = 1, Jd = Jd - Wd - 1, od[0] = OW(10, (7 - Jd % 7) % 7), dd.e = LW(-Jd / 7) || 0) : (od.length = 1, od[0] = dd.e = dd.s = 0), dd;
      if (0 == pd ? (od.length = Kd, Wd = 1, Kd--) : (od.length = Kd + 1, Wd = OW(10, 7 - pd), od[Kd] = Nd > 0 ? (Cd / OW(10, Pd - Nd) % OW(10, Nd) | 0) * Wd : 0), gd)
        for (;;) {
          if (0 == Kd) {
            (od[0] += Wd) == RW && (od[0] = 1, ++dd.e);
            break
          }
          if (od[Kd] += Wd, od[Kd] != RW) break;
          od[Kd--] = 0, Wd = 1
        }
      for (pd = od.length; 0 === od[--pd];) od.pop();
      if (KW && (dd.e > GW || dd.e < -GW)) throw Error(QW + aW(dd));
      return dd
    }

    function SW(dd, Jd) {
      var kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld = dd.constructor,
        Qd = ld.precision;
      if (!dd.s || !Jd.s) return Jd.s ? Jd.s = -Jd.s : Jd = new ld(dd), KW ? bW(Jd, Qd) : Jd;
      if (gd = dd.d, od = Jd.d, pd = Jd.e, Cd = dd.e, gd = gd.slice(), Pd = Cd - pd) {
        for ((Kd = Pd < 0) ? (kd = gd, Pd = -Pd, Zd = od.length) : (kd = od, pd = Cd, Zd = gd.length), Pd > (Nd = Math.max(Math.ceil(Qd / 7), Zd) + 2) && (Pd = Nd, kd.length = 1), kd.reverse(), Nd = Pd; Nd--;) kd.push(0);
        kd.reverse()
      } else {
        for ((Kd = (Nd = gd.length) < (Zd = od.length)) && (Zd = Nd), Nd = 0; Nd < Zd; Nd++)
          if (gd[Nd] != od[Nd]) {
            Kd = gd[Nd] < od[Nd];
            break
          } Pd = 0
      }
      for (Kd && (kd = gd, gd = od, od = kd, Jd.s = -Jd.s), Zd = gd.length, Nd = od.length - Zd; Nd > 0; --Nd) gd[Zd++] = 0;
      for (Nd = od.length; Nd > Pd;) {
        if (gd[--Nd] < od[Nd]) {
          for (Wd = Nd; Wd && 0 === gd[--Wd];) gd[Wd] = RW - 1;
          --gd[Wd], gd[Nd] += RW
        }
        gd[Nd] -= od[Nd]
      }
      for (; 0 === gd[--Zd];) gd.pop();
      for (; 0 === gd[0]; gd.shift()) --pd;
      return gd[0] ? (Jd.d = gd, Jd.e = pd, KW ? bW(Jd, Qd) : Jd) : new ld(0)
    }

    function jW(dd, Jd, kd) {
      var pd, Nd = aW(dd),
        Wd = BW(dd.d),
        Pd = Wd.length;
      return Jd ? (kd && (pd = kd - Pd) > 0 ? Wd = Wd.charAt(0) + "." + Wd.slice(1) + FW(pd) : Pd > 1 && (Wd = Wd.charAt(0) + "." + Wd.slice(1)), Wd = Wd + (Nd < 0 ? "e" : "e+") + Nd) : Nd < 0 ? (Wd = "0." + FW(-Nd - 1) + Wd, kd && (pd = kd - Pd) > 0 && (Wd += FW(pd))) : Nd >= Pd ? (Wd += FW(Nd + 1 - Pd), kd && (pd = kd - Nd - 1) > 0 && (Wd = Wd + "." + FW(pd))) : ((pd = Nd + 1) < Pd && (Wd = Wd.slice(0, pd) + "." + Wd.slice(pd)), kd && (pd = kd - Pd) > 0 && (Nd + 1 === Pd && (Wd += "."), Wd += FW(pd))), dd.s < 0 ? "-" + Wd : Wd
    }

    function XW(dd, Jd) {
      if (dd.length > Jd) return dd.length = Jd, !0
    }

    function fW(dd) {
      if (!dd || "object" !== typeof dd) throw Error(oW + "Object expected");
      var Jd, kd, pd, Nd = ["precision", 1, CW, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Jd = 0; Jd < Nd.length; Jd += 3)
        if (void 0 !== (pd = dd[kd = Nd[Jd]])) {
          if (!(LW(pd) === pd && pd >= Nd[Jd + 1] && pd <= Nd[Jd + 2])) throw Error(lW + kd + ": " + pd);
          this[kd] = pd
        } if (void 0 !== (pd = dd[kd = "LN10"])) {
        if (pd != Math.LN10) throw Error(lW + kd + ": " + pd);
        this[kd] = new this(pd)
      }
      return this
    }
    var nW = function dd(Jd) {
      var kd, pd, Nd;

      function Wd(dd) {
        var Jd = this;
        if (!(Jd instanceof Wd)) return new Wd(dd);
        if (Jd.constructor = Wd, dd instanceof Wd) return Jd.s = dd.s, Jd.e = dd.e, void(Jd.d = (dd = dd.d) ? dd.slice() : dd);
        if ("number" === typeof dd) {
          if (0 * dd !== 0) throw Error(lW + dd);
          if (dd > 0) Jd.s = 1;
          else {
            if (!(dd < 0)) return Jd.s = 0, Jd.e = 0, void(Jd.d = [0]);
            dd = -dd, Jd.s = -1
          }
          return dd === ~~dd && dd < 1e7 ? (Jd.e = 0, void(Jd.d = [dd])) : mW(Jd, dd.toString())
        }
        if ("string" !== typeof dd) throw Error(lW + dd);
        if (45 === dd.charCodeAt(0) ? (dd = dd.slice(1), Jd.s = -1) : Jd.s = 1, !eW.test(dd)) throw Error(lW + dd);
        mW(Jd, dd)
      }
      if (Wd.prototype = vW, Wd.ROUND_UP = 0, Wd.ROUND_DOWN = 1, Wd.ROUND_CEIL = 2, Wd.ROUND_FLOOR = 3, Wd.ROUND_HALF_UP = 4, Wd.ROUND_HALF_DOWN = 5, Wd.ROUND_HALF_EVEN = 6, Wd.ROUND_HALF_CEIL = 7, Wd.ROUND_HALF_FLOOR = 8, Wd.clone = dd, Wd.config = Wd.set = fW, void 0 === Jd && (Jd = {}), Jd)
        for (Nd = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], kd = 0; kd < Nd.length;) Jd.hasOwnProperty(pd = Nd[kd++]) || (Jd[pd] = this[pd]);
      return Wd.config(Jd), Wd
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    gW = new nW(1);
    var UW;
    ! function(dd) {
      dd.AED = "aed", dd.AFN = "afn", dd.ALL = "all", dd.AMD = "amd", dd.ANG = "ang", dd.AOA = "aoa", dd.ARS = "ars", dd.AUD = "aud", dd.AWG = "awg", dd.AZN = "azn", dd.BAM = "bam", dd.BBD = "bbd", dd.BDT = "bdt", dd.BGN = "bgn", dd.BHD = "bhd", dd.BIF = "bif", dd.BMD = "bmd", dd.BND = "bnd", dd.BOB = "bob", dd.BOV = "bov", dd.BRL = "brl", dd.BSD = "bsd", dd.BTN = "btn", dd.BWP = "bwp", dd.BYN = "byn", dd.BYR = "byr", dd.BZD = "bzd", dd.CAD = "cad", dd.CDF = "cdf", dd.CHE = "che", dd.CHF = "chf", dd.CHW = "chw", dd.CLF = "clf", dd.CLP = "clp", dd.CNY = "cny", dd.COP = "cop", dd.COU = "cou", dd.CRC = "crc", dd.CUC = "cuc", dd.CUP = "cup", dd.CVE = "cve", dd.CZK = "czk", dd.DJF = "djf", dd.DKK = "dkk", dd.DOP = "dop", dd.DZD = "dzd", dd.EGP = "egp", dd.ERN = "ern", dd.ETB = "etb", dd.EUR = "eur", dd.FJD = "fjd", dd.FKP = "fkp", dd.GBP = "gbp", dd.GEL = "gel", dd.GHS = "ghs", dd.GIP = "gip", dd.GMD = "gmd", dd.GNF = "gnf", dd.GTQ = "gtq", dd.GYD = "gyd", dd.HKD = "hkd", dd.HNL = "hnl", dd.HRK = "hrk", dd.HTG = "htg", dd.HUF = "huf", dd.IDR = "idr", dd.ILS = "ils", dd.INR = "inr", dd.IQD = "iqd", dd.IRR = "irr", dd.ISK = "isk", dd.JMD = "jmd", dd.JOD = "jod", dd.JPY = "jpy", dd.KES = "kes", dd.KGS = "kgs", dd.KHR = "khr", dd.KMF = "kmf", dd.KPW = "kpw", dd.KRW = "krw", dd.KWD = "kwd", dd.KYD = "kyd", dd.KZT = "kzt", dd.LAK = "lak", dd.LBP = "lbp", dd.LKR = "lkr", dd.LRD = "lrd", dd.LSL = "lsl", dd.LTL = "ltl", dd.LVL = "lvl", dd.LYD = "lyd", dd.MAD = "mad", dd.MDL = "mdl", dd.MGA = "mga", dd.MKD = "mkd", dd.MMK = "mmk", dd.MNT = "mnt", dd.MOP = "mop", dd.MRO = "mro", dd.MUR = "mur", dd.MVR = "mvr", dd.MWK = "mwk", dd.MXN = "mxn", dd.MXV = "mxv", dd.MYR = "myr", dd.MZN = "mzn", dd.NAD = "nad", dd.NGN = "ngn", dd.NIO = "nio", dd.NOK = "nok", dd.NPR = "npr", dd.NZD = "nzd", dd.OMR = "omr", dd.PAB = "pab", dd.PEN = "pen", dd.PGK = "pgk", dd.PHP = "php", dd.PKR = "pkr", dd.PLN = "pln", dd.PYG = "pyg", dd.QAR = "qar", dd.RON = "ron", dd.RSD = "rsd", dd.RUB = "rub", dd.RWF = "rwf", dd.SAR = "sar", dd.SBD = "sbd", dd.SCR = "scr", dd.SDG = "sdg", dd.SEK = "sek", dd.SGD = "sgd", dd.SHP = "shp", dd.SLL = "sll", dd.SOS = "sos", dd.SRD = "srd", dd.SSP = "ssp", dd.STD = "std", dd.SVC = "svc", dd.SYP = "syp", dd.SZL = "szl", dd.THB = "thb", dd.TJS = "tjs", dd.TMT = "tmt", dd.TND = "tnd", dd.TOP = "top", dd.TRY = "try", dd.TTD = "ttd", dd.TWD = "twd", dd.TZS = "tzs", dd.UAH = "uah", dd.UGX = "ugx", dd.USD = "usd", dd.USN = "usn", dd.USS = "uss", dd.UYI = "uyi", dd.UYU = "uyu", dd.UZS = "uzs", dd.VEF = "vef", dd.VND = "vnd", dd.VUV = "vuv", dd.WST = "wst", dd.XAF = "xaf", dd.XAG = "xag", dd.XAU = "xau", dd.XBA = "xba", dd.XBB = "xbb", dd.XBC = "xbc", dd.XBD = "xbd", dd.XCD = "xcd", dd.XDR = "xdr", dd.XFU = "xfu", dd.XOF = "xof", dd.XPD = "xpd", dd.XPF = "xpf", dd.XPT = "xpt", dd.XSU = "xsu", dd.XTS = "xts", dd.XUA = "xua", dd.YER = "yer", dd.ZAR = "zar", dd.ZMW = "zmw", dd.ZWL = "zwl"
    }(UW || (UW = {}));
    UW.AED, UW.AFN, UW.ALL, UW.AMD, UW.ANG, UW.AOA, UW.ARS, UW.AUD, UW.AWG, UW.AZN, UW.BAM, UW.BBD, UW.BDT, UW.BGN, UW.BHD, UW.BIF, UW.BMD, UW.BND, UW.BOB, UW.BOV, UW.BRL, UW.BSD, UW.BTN, UW.BWP, UW.BYR, UW.BYN, UW.BZD, UW.CAD, UW.CDF, UW.CHE, UW.CHF, UW.CHW, UW.CLF, UW.CLP, UW.CNY, UW.COP, UW.COU, UW.CRC, UW.CUC, UW.CUP, UW.CVE, UW.CZK, UW.DJF, UW.DKK, UW.DOP, UW.DZD, UW.EGP, UW.ERN, UW.ETB, UW.EUR, UW.FJD, UW.FKP, UW.GBP, UW.GEL, UW.GHS, UW.GIP, UW.GMD, UW.GNF, UW.GTQ, UW.GYD, UW.HKD, UW.HNL, UW.HRK, UW.HTG, UW.HUF, UW.IDR, UW.ILS, UW.INR, UW.IQD, UW.IRR, UW.ISK, UW.JMD, UW.JOD, UW.JPY, UW.KES, UW.KGS, UW.KHR, UW.KMF, UW.KPW, UW.KRW, UW.KWD, UW.KYD, UW.KZT, UW.LAK, UW.LBP, UW.LKR, UW.LRD, UW.LSL, UW.LTL, UW.LVL, UW.LYD, UW.MAD, UW.MDL, UW.MGA, UW.MKD, UW.MMK, UW.MNT, UW.MOP, UW.MRO, UW.MUR, UW.MVR, UW.MWK, UW.MXN, UW.MXV, UW.MYR, UW.MZN, UW.NAD, UW.NGN, UW.NIO, UW.NOK, UW.NPR, UW.NZD, UW.OMR, UW.PAB, UW.PEN, UW.PGK, UW.PHP, UW.PKR, UW.PLN, UW.PYG, UW.QAR, UW.RON, UW.RSD, UW.RUB, UW.RWF, UW.SAR, UW.SBD, UW.SCR, UW.SDG, UW.SEK, UW.SGD, UW.SHP, UW.SLL, UW.SOS, UW.SRD, UW.SSP, UW.STD, UW.SVC, UW.SYP, UW.SZL, UW.THB, UW.TJS, UW.TMT, UW.TND, UW.TOP, UW.TRY, UW.TTD, UW.TWD, UW.TZS, UW.UAH, UW.UGX, UW.USD, UW.USN, UW.USS, UW.UYI, UW.UYU, UW.UZS, UW.VEF, UW.VND, UW.VUV, UW.WST, UW.XAF, UW.XAG, UW.XAU, UW.XBA, UW.XBB, UW.XBC, UW.XBD, UW.XCD, UW.XDR, UW.XFU, UW.XOF, UW.XPD, UW.XPF, UW.XPT, UW.XSU, UW.XTS, UW.XUA, UW.YER, UW.ZAR, UW.ZMW, UW.ZWL;
    var yW = {
      exports: {}
    };
    ! function(dd, Jd) {
      var kd = "__lodash_hash_undefined__",
        pd = 9007199254740991,
        Wd = "[object Arguments]",
        Pd = "[object Array]",
        Zd = "[object Boolean]",
        gd = "[object Date]",
        Cd = "[object Error]",
        Kd = "[object Function]",
        od = "[object Map]",
        ld = "[object Number]",
        Qd = "[object Object]",
        Ld = "[object Promise]",
        Od = "[object RegExp]",
        ed = "[object Set]",
        Rd = "[object String]",
        Id = "[object Symbol]",
        Gd = "[object WeakMap]",
        vd = "[object ArrayBuffer]",
        xd = "[object DataView]",
        qd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Bd = /^\w*$/,
        sd = /^\./,
        ad = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Md = /\\(\\)?/g,
        Fd = /^\[object .+?Constructor\]$/,
        Yd = /^(?:0|[1-9]\d*)$/,
        md = {};
      md["[object Float32Array]"] = md["[object Float64Array]"] = md["[object Int8Array]"] = md["[object Int16Array]"] = md["[object Int32Array]"] = md["[object Uint8Array]"] = md["[object Uint8ClampedArray]"] = md["[object Uint16Array]"] = md["[object Uint32Array]"] = !0, md[Wd] = md[Pd] = md[vd] = md[Zd] = md[xd] = md[gd] = md[Cd] = md[Kd] = md[od] = md[ld] = md[Qd] = md[Od] = md[ed] = md[Rd] = md[Gd] = !1;
      var bd = "object" == typeof Nd && Nd && Nd.Object === Object && Nd,
        Sd = "object" == typeof self && self && self.Object === Object && self,
        jd = bd || Sd || Function("return this")(),
        Xd = Jd && !Jd.nodeType && Jd,
        fd = Xd && dd && !dd.nodeType && dd,
        nd = fd && fd.exports === Xd && bd.process,
        Ud = function() {
          try {
            return nd && nd.binding("util")
          } catch (dd) {}
        }(),
        yd = Ud && Ud.isTypedArray;

      function Dd(dd, Jd) {
        for (var kd = -1, pd = dd ? dd.length : 0; ++kd < pd && !1 !== Jd(dd[kd], kd, dd););
        return dd
      }

      function Td(dd, Jd) {
        for (var kd = -1, pd = dd ? dd.length : 0; ++kd < pd;)
          if (Jd(dd[kd], kd, dd)) return !0;
        return !1
      }

      function Ed(dd) {
        var Jd = !1;
        if (null != dd && "function" != typeof dd.toString) try {
          Jd = !!(dd + "")
        } catch (kd) {}
        return Jd
      }

      function cd(dd) {
        var Jd = -1,
          kd = Array(dd.size);
        return dd.forEach((function(dd, pd) {
          kd[++Jd] = [pd, dd]
        })), kd
      }

      function hd(dd, Jd) {
        return function(kd) {
          return dd(Jd(kd))
        }
      }

      function rd(dd) {
        var Jd = -1,
          kd = Array(dd.size);
        return dd.forEach((function(dd) {
          kd[++Jd] = dd
        })), kd
      }
      var ud = Array.prototype,
        td = Function.prototype,
        Vd = Object.prototype,
        zd = jd["__core-js_shared__"],
        Hd = function() {
          var dd = /[^.]+$/.exec(zd && zd.keys && zd.keys.IE_PROTO || "");
          return dd ? "Symbol(src)_1." + dd : ""
        }(),
        wd = td.toString,
        Ad = Vd.hasOwnProperty,
        dJ = Vd.toString,
        JJ = RegExp("^" + wd.call(Ad).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        kJ = jd.Symbol,
        pJ = jd.Uint8Array,
        NJ = hd(Object.getPrototypeOf, Object),
        WJ = Object.create,
        PJ = Vd.propertyIsEnumerable,
        ZJ = ud.splice,
        gJ = hd(Object.keys, Object),
        CJ = cJ(jd, "DataView"),
        KJ = cJ(jd, "Map"),
        oJ = cJ(jd, "Promise"),
        lJ = cJ(jd, "Set"),
        QJ = cJ(jd, "WeakMap"),
        LJ = cJ(Object, "create"),
        OJ = wJ(CJ),
        eJ = wJ(KJ),
        RJ = wJ(oJ),
        IJ = wJ(lJ),
        GJ = wJ(QJ),
        vJ = kJ ? kJ.prototype : void 0,
        xJ = vJ ? vJ.valueOf : void 0,
        qJ = vJ ? vJ.toString : void 0;

      function BJ(dd) {
        var Jd = -1,
          kd = dd ? dd.length : 0;
        for (this.clear(); ++Jd < kd;) {
          var pd = dd[Jd];
          this.set(pd[0], pd[1])
        }
      }

      function sJ(dd) {
        var Jd = -1,
          kd = dd ? dd.length : 0;
        for (this.clear(); ++Jd < kd;) {
          var pd = dd[Jd];
          this.set(pd[0], pd[1])
        }
      }

      function iJ(dd) {
        var Jd = -1,
          kd = dd ? dd.length : 0;
        for (this.clear(); ++Jd < kd;) {
          var pd = dd[Jd];
          this.set(pd[0], pd[1])
        }
      }

      function aJ(dd) {
        var Jd = -1,
          kd = dd ? dd.length : 0;
        for (this.__data__ = new iJ; ++Jd < kd;) this.add(dd[Jd])
      }

      function MJ(dd) {
        this.__data__ = new sJ(dd)
      }

      function FJ(dd, Jd) {
        var kd = kk(dd) || Jk(dd) ? function(dd, Jd) {
            for (var kd = -1, pd = Array(dd); ++kd < dd;) pd[kd] = Jd(kd);
            return pd
          }(dd.length, String) : [],
          pd = kd.length,
          Nd = !!pd;
        for (var Wd in dd) !Jd && !Ad.call(dd, Wd) || Nd && ("length" == Wd || rJ(Wd, pd)) || kd.push(Wd);
        return kd
      }

      function YJ(dd, Jd) {
        for (var kd = dd.length; kd--;)
          if (dk(dd[kd][0], Jd)) return kd;
        return -1
      }
      BJ.prototype.clear = function() {
        this.__data__ = LJ ? LJ(null) : {}
      }, BJ.prototype.delete = function(dd) {
        return this.has(dd) && delete this.__data__[dd]
      }, BJ.prototype.get = function(dd) {
        var Jd = this.__data__;
        if (LJ) {
          var pd = Jd[dd];
          return pd === kd ? void 0 : pd
        }
        return Ad.call(Jd, dd) ? Jd[dd] : void 0
      }, BJ.prototype.has = function(dd) {
        var Jd = this.__data__;
        return LJ ? void 0 !== Jd[dd] : Ad.call(Jd, dd)
      }, BJ.prototype.set = function(dd, Jd) {
        return this.__data__[dd] = LJ && void 0 === Jd ? kd : Jd, this
      }, sJ.prototype.clear = function() {
        this.__data__ = []
      }, sJ.prototype.delete = function(dd) {
        var Jd = this.__data__,
          kd = YJ(Jd, dd);
        return !(kd < 0) && (kd == Jd.length - 1 ? Jd.pop() : ZJ.call(Jd, kd, 1), !0)
      }, sJ.prototype.get = function(dd) {
        var Jd = this.__data__,
          kd = YJ(Jd, dd);
        return kd < 0 ? void 0 : Jd[kd][1]
      }, sJ.prototype.has = function(dd) {
        return YJ(this.__data__, dd) > -1
      }, sJ.prototype.set = function(dd, Jd) {
        var kd = this.__data__,
          pd = YJ(kd, dd);
        return pd < 0 ? kd.push([dd, Jd]) : kd[pd][1] = Jd, this
      }, iJ.prototype.clear = function() {
        this.__data__ = {
          hash: new BJ,
          map: new(KJ || sJ),
          string: new BJ
        }
      }, iJ.prototype.delete = function(dd) {
        return EJ(this, dd).delete(dd)
      }, iJ.prototype.get = function(dd) {
        return EJ(this, dd).get(dd)
      }, iJ.prototype.has = function(dd) {
        return EJ(this, dd).has(dd)
      }, iJ.prototype.set = function(dd, Jd) {
        return EJ(this, dd).set(dd, Jd), this
      }, aJ.prototype.add = aJ.prototype.push = function(dd) {
        return this.__data__.set(dd, kd), this
      }, aJ.prototype.has = function(dd) {
        return this.__data__.has(dd)
      }, MJ.prototype.clear = function() {
        this.__data__ = new sJ
      }, MJ.prototype.delete = function(dd) {
        return this.__data__.delete(dd)
      }, MJ.prototype.get = function(dd) {
        return this.__data__.get(dd)
      }, MJ.prototype.has = function(dd) {
        return this.__data__.has(dd)
      }, MJ.prototype.set = function(dd, Jd) {
        var kd = this.__data__;
        if (kd instanceof sJ) {
          var pd = kd.__data__;
          if (!KJ || pd.length < 199) return pd.push([dd, Jd]), this;
          kd = this.__data__ = new iJ(pd)
        }
        return kd.set(dd, Jd), this
      };
      var mJ, bJ = function(dd, Jd, kd) {
        for (var pd = -1, Nd = Object(dd), Wd = kd(dd), Pd = Wd.length; Pd--;) {
          var Zd = Wd[mJ ? Pd : ++pd];
          if (!1 === Jd(Nd[Zd], Zd, Nd)) break
        }
        return dd
      };

      function SJ(dd, Jd) {
        return dd && bJ(dd, Jd, lk)
      }

      function jJ(dd, Jd) {
        for (var kd = 0, pd = (Jd = uJ(Jd, dd) ? [Jd] : DJ(Jd)).length; null != dd && kd < pd;) dd = dd[HJ(Jd[kd++])];
        return kd && kd == pd ? dd : void 0
      }

      function XJ(dd, Jd) {
        return null != dd && Jd in Object(dd)
      }

      function fJ(dd, Jd, kd, pd, Nd) {
        return dd === Jd || (null == dd || null == Jd || !Pk(dd) && !Zk(Jd) ? dd !== dd && Jd !== Jd : function(dd, Jd, kd, pd, Nd, Kd) {
          var Ld = kk(dd),
            Gd = kk(Jd),
            qd = Pd,
            Bd = Pd;
          Ld || (qd = (qd = hJ(dd)) == Wd ? Qd : qd);
          Gd || (Bd = (Bd = hJ(Jd)) == Wd ? Qd : Bd);
          var sd = qd == Qd && !Ed(dd),
            ad = Bd == Qd && !Ed(Jd),
            Md = qd == Bd;
          if (Md && !sd) return Kd || (Kd = new MJ), Ld || Kk(dd) ? TJ(dd, Jd, kd, pd, Nd, Kd) : function(dd, Jd, kd, pd, Nd, Wd, Pd) {
            switch (kd) {
              case xd:
                if (dd.byteLength != Jd.byteLength || dd.byteOffset != Jd.byteOffset) return !1;
                dd = dd.buffer, Jd = Jd.buffer;
              case vd:
                return !(dd.byteLength != Jd.byteLength || !pd(new pJ(dd), new pJ(Jd)));
              case Zd:
              case gd:
              case ld:
                return dk(+dd, +Jd);
              case Cd:
                return dd.name == Jd.name && dd.message == Jd.message;
              case Od:
              case Rd:
                return dd == Jd + "";
              case od:
                var Kd = cd;
              case ed:
                var Qd = 2 & Wd;
                if (Kd || (Kd = rd), dd.size != Jd.size && !Qd) return !1;
                var Ld = Pd.get(dd);
                if (Ld) return Ld == Jd;
                Wd |= 1, Pd.set(dd, Jd);
                var Gd = TJ(Kd(dd), Kd(Jd), pd, Nd, Wd, Pd);
                return Pd.delete(dd), Gd;
              case Id:
                if (xJ) return xJ.call(dd) == xJ.call(Jd)
            }
            return !1
          }(dd, Jd, qd, kd, pd, Nd, Kd);
          if (!(2 & Nd)) {
            var Fd = sd && Ad.call(dd, "__wrapped__"),
              Yd = ad && Ad.call(Jd, "__wrapped__");
            if (Fd || Yd) {
              var md = Fd ? dd.value() : dd,
                bd = Yd ? Jd.value() : Jd;
              return Kd || (Kd = new MJ), kd(md, bd, pd, Nd, Kd)
            }
          }
          if (!Md) return !1;
          return Kd || (Kd = new MJ),
            function(dd, Jd, kd, pd, Nd, Wd) {
              var Pd = 2 & Nd,
                Zd = lk(dd),
                gd = Zd.length,
                Cd = lk(Jd),
                Kd = Cd.length;
              if (gd != Kd && !Pd) return !1;
              var od = gd;
              for (; od--;) {
                var ld = Zd[od];
                if (!(Pd ? ld in Jd : Ad.call(Jd, ld))) return !1
              }
              var Qd = Wd.get(dd);
              if (Qd && Wd.get(Jd)) return Qd == Jd;
              var Ld = !0;
              Wd.set(dd, Jd), Wd.set(Jd, dd);
              var Od = Pd;
              for (; ++od < gd;) {
                var ed = dd[ld = Zd[od]],
                  Rd = Jd[ld];
                if (pd) var Id = Pd ? pd(Rd, ed, ld, Jd, dd, Wd) : pd(ed, Rd, ld, dd, Jd, Wd);
                if (!(void 0 === Id ? ed === Rd || kd(ed, Rd, pd, Nd, Wd) : Id)) {
                  Ld = !1;
                  break
                }
                Od || (Od = "constructor" == ld)
              }
              if (Ld && !Od) {
                var Gd = dd.constructor,
                  vd = Jd.constructor;
                Gd == vd || !("constructor" in dd) || !("constructor" in Jd) || "function" == typeof Gd && Gd instanceof Gd && "function" == typeof vd && vd instanceof vd || (Ld = !1)
              }
              return Wd.delete(dd), Wd.delete(Jd), Ld
            }(dd, Jd, kd, pd, Nd, Kd)
        }(dd, Jd, fJ, kd, pd, Nd))
      }

      function nJ(dd) {
        return !(!Pk(dd) || (Jd = dd, Hd && Hd in Jd)) && (Nk(dd) || Ed(dd) ? JJ : Fd).test(wJ(dd));
        var Jd
      }

      function UJ(dd) {
        return "function" == typeof dd ? dd : null == dd ? Qk : "object" == typeof dd ? kk(dd) ? function(dd, Jd) {
          if (uJ(dd) && tJ(Jd)) return VJ(HJ(dd), Jd);
          return function(kd) {
            var pd = function(dd, Jd, kd) {
              var pd = null == dd ? void 0 : jJ(dd, Jd);
              return void 0 === pd ? kd : pd
            }(kd, dd);
            return void 0 === pd && pd === Jd ? function(dd, Jd) {
              return null != dd && function(dd, Jd, kd) {
                Jd = uJ(Jd, dd) ? [Jd] : DJ(Jd);
                var pd, Nd = -1,
                  Wd = Jd.length;
                for (; ++Nd < Wd;) {
                  var Pd = HJ(Jd[Nd]);
                  if (!(pd = null != dd && kd(dd, Pd))) break;
                  dd = dd[Pd]
                }
                if (pd) return pd;
                Wd = dd ? dd.length : 0;
                return !!Wd && Wk(Wd) && rJ(Pd, Wd) && (kk(dd) || Jk(dd))
              }(dd, Jd, XJ)
            }(kd, dd) : fJ(Jd, pd, void 0, 3)
          }
        }(dd[0], dd[1]) : function(dd) {
          var Jd = function(dd) {
            var Jd = lk(dd),
              kd = Jd.length;
            for (; kd--;) {
              var pd = Jd[kd],
                Nd = dd[pd];
              Jd[kd] = [pd, Nd, tJ(Nd)]
            }
            return Jd
          }(dd);
          if (1 == Jd.length && Jd[0][2]) return VJ(Jd[0][0], Jd[0][1]);
          return function(kd) {
            return kd === dd || function(dd, Jd, kd, pd) {
              var Nd = kd.length,
                Wd = Nd,
                Pd = !pd;
              if (null == dd) return !Wd;
              for (dd = Object(dd); Nd--;) {
                var Zd = kd[Nd];
                if (Pd && Zd[2] ? Zd[1] !== dd[Zd[0]] : !(Zd[0] in dd)) return !1
              }
              for (; ++Nd < Wd;) {
                var gd = (Zd = kd[Nd])[0],
                  Cd = dd[gd],
                  Kd = Zd[1];
                if (Pd && Zd[2]) {
                  if (void 0 === Cd && !(gd in dd)) return !1
                } else {
                  var od = new MJ;
                  if (pd) var ld = pd(Cd, Kd, gd, dd, Jd, od);
                  if (!(void 0 === ld ? fJ(Kd, Cd, pd, 3, od) : ld)) return !1
                }
              }
              return !0
            }(kd, dd, Jd)
          }
        }(dd) : function(dd) {
          return uJ(dd) ? (Jd = HJ(dd), function(dd) {
            return null == dd ? void 0 : dd[Jd]
          }) : function(dd) {
            return function(Jd) {
              return jJ(Jd, dd)
            }
          }(dd);
          var Jd
        }(dd)
      }

      function yJ(dd) {
        if (! function(dd) {
            var Jd = dd && dd.constructor,
              kd = "function" == typeof Jd && Jd.prototype || Vd;
            return dd === kd
          }(dd)) return gJ(dd);
        var Jd = [];
        for (var kd in Object(dd)) Ad.call(dd, kd) && "constructor" != kd && Jd.push(kd);
        return Jd
      }

      function DJ(dd) {
        return kk(dd) ? dd : zJ(dd)
      }

      function TJ(dd, Jd, kd, pd, Nd, Wd) {
        var Pd = 2 & Nd,
          Zd = dd.length,
          gd = Jd.length;
        if (Zd != gd && !(Pd && gd > Zd)) return !1;
        var Cd = Wd.get(dd);
        if (Cd && Wd.get(Jd)) return Cd == Jd;
        var Kd = -1,
          od = !0,
          ld = 1 & Nd ? new aJ : void 0;
        for (Wd.set(dd, Jd), Wd.set(Jd, dd); ++Kd < Zd;) {
          var Qd = dd[Kd],
            Ld = Jd[Kd];
          if (pd) var Od = Pd ? pd(Ld, Qd, Kd, Jd, dd, Wd) : pd(Qd, Ld, Kd, dd, Jd, Wd);
          if (void 0 !== Od) {
            if (Od) continue;
            od = !1;
            break
          }
          if (ld) {
            if (!Td(Jd, (function(dd, Jd) {
                if (!ld.has(Jd) && (Qd === dd || kd(Qd, dd, pd, Nd, Wd))) return ld.add(Jd)
              }))) {
              od = !1;
              break
            }
          } else if (Qd !== Ld && !kd(Qd, Ld, pd, Nd, Wd)) {
            od = !1;
            break
          }
        }
        return Wd.delete(dd), Wd.delete(Jd), od
      }

      function EJ(dd, Jd) {
        var kd = dd.__data__;
        return function(dd) {
          var Jd = typeof dd;
          return "string" == Jd || "number" == Jd || "symbol" == Jd || "boolean" == Jd ? "__proto__" !== dd : null === dd
        }(Jd) ? kd["string" == typeof Jd ? "string" : "hash"] : kd.map
      }

      function cJ(dd, Jd) {
        var kd = function(dd, Jd) {
          return null == dd ? void 0 : dd[Jd]
        }(dd, Jd);
        return nJ(kd) ? kd : void 0
      }
      var hJ = function(dd) {
        return dJ.call(dd)
      };

      function rJ(dd, Jd) {
        return !!(Jd = null == Jd ? pd : Jd) && ("number" == typeof dd || Yd.test(dd)) && dd > -1 && dd % 1 == 0 && dd < Jd
      }

      function uJ(dd, Jd) {
        if (kk(dd)) return !1;
        var kd = typeof dd;
        return !("number" != kd && "symbol" != kd && "boolean" != kd && null != dd && !gk(dd)) || (Bd.test(dd) || !qd.test(dd) || null != Jd && dd in Object(Jd))
      }

      function tJ(dd) {
        return dd === dd && !Pk(dd)
      }

      function VJ(dd, Jd) {
        return function(kd) {
          return null != kd && (kd[dd] === Jd && (void 0 !== Jd || dd in Object(kd)))
        }
      }(CJ && hJ(new CJ(new ArrayBuffer(1))) != xd || KJ && hJ(new KJ) != od || oJ && hJ(oJ.resolve()) != Ld || lJ && hJ(new lJ) != ed || QJ && hJ(new QJ) != Gd) && (hJ = function(dd) {
        var Jd = dJ.call(dd),
          kd = Jd == Qd ? dd.constructor : void 0,
          pd = kd ? wJ(kd) : void 0;
        if (pd) switch (pd) {
          case OJ:
            return xd;
          case eJ:
            return od;
          case RJ:
            return Ld;
          case IJ:
            return ed;
          case GJ:
            return Gd
        }
        return Jd
      });
      var zJ = AJ((function(dd) {
        var Jd;
        dd = null == (Jd = dd) ? "" : function(dd) {
          if ("string" == typeof dd) return dd;
          if (gk(dd)) return qJ ? qJ.call(dd) : "";
          var Jd = dd + "";
          return "0" == Jd && 1 / dd == -1 / 0 ? "-0" : Jd
        }(Jd);
        var kd = [];
        return sd.test(dd) && kd.push(""), dd.replace(ad, (function(dd, Jd, pd, Nd) {
          kd.push(pd ? Nd.replace(Md, "$1") : Jd || dd)
        })), kd
      }));

      function HJ(dd) {
        if ("string" == typeof dd || gk(dd)) return dd;
        var Jd = dd + "";
        return "0" == Jd && 1 / dd == -1 / 0 ? "-0" : Jd
      }

      function wJ(dd) {
        if (null != dd) {
          try {
            return wd.call(dd)
          } catch (Jd) {}
          try {
            return dd + ""
          } catch (Jd) {}
        }
        return ""
      }

      function AJ(dd, Jd) {
        if ("function" != typeof dd || Jd && "function" != typeof Jd) throw new TypeError("Expected a function");
        var kd = function() {
          var pd = arguments,
            Nd = Jd ? Jd.apply(this, pd) : pd[0],
            Wd = kd.cache;
          if (Wd.has(Nd)) return Wd.get(Nd);
          var Pd = dd.apply(this, pd);
          return kd.cache = Wd.set(Nd, Pd), Pd
        };
        return kd.cache = new(AJ.Cache || iJ), kd
      }

      function dk(dd, Jd) {
        return dd === Jd || dd !== dd && Jd !== Jd
      }

      function Jk(dd) {
        return function(dd) {
          return Zk(dd) && pk(dd)
        }(dd) && Ad.call(dd, "callee") && (!PJ.call(dd, "callee") || dJ.call(dd) == Wd)
      }
      AJ.Cache = iJ;
      var kk = Array.isArray;

      function pk(dd) {
        return null != dd && Wk(dd.length) && !Nk(dd)
      }

      function Nk(dd) {
        var Jd = Pk(dd) ? dJ.call(dd) : "";
        return Jd == Kd || "[object GeneratorFunction]" == Jd
      }

      function Wk(dd) {
        return "number" == typeof dd && dd > -1 && dd % 1 == 0 && dd <= pd
      }

      function Pk(dd) {
        var Jd = typeof dd;
        return !!dd && ("object" == Jd || "function" == Jd)
      }

      function Zk(dd) {
        return !!dd && "object" == typeof dd
      }

      function gk(dd) {
        return "symbol" == typeof dd || Zk(dd) && dJ.call(dd) == Id
      }
      var Ck, Kk = yd ? (Ck = yd, function(dd) {
        return Ck(dd)
      }) : function(dd) {
        return Zk(dd) && Wk(dd.length) && !!md[dJ.call(dd)]
      };

      function lk(dd) {
        return pk(dd) ? FJ(dd) : yJ(dd)
      }

      function Qk(dd) {
        return dd
      }
      dd.exports = function(dd, Jd, kd) {
        var pd, Nd = kk(dd) || Kk(dd);
        if (Jd = UJ(Jd), null == kd)
          if (Nd || Pk(dd)) {
            var Wd = dd.constructor;
            kd = Nd ? kk(dd) ? new Wd : [] : Nk(Wd) ? Pk(pd = NJ(dd)) ? WJ(pd) : {} : {}
          } else kd = {};
        return (Nd ? Dd : SJ)(dd, (function(dd, pd, Nd) {
          return Jd(kd, dd, pd, Nd)
        })), kd
      }
    }(yW, yW.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      m: DW
    } = pd
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);