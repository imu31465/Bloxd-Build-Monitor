export const id = 141;
export const ids = [141];
export const modules = {
  8129: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KK,
      f: () => Ec
    });
    var lT = {};
    cT.r(lT), cT.d(lT, {
      d: () => Ml,
      h: () => yl,
      e: () => Ol,
      i: () => pc,
      j: () => nc,
      k: () => Jl,
      m: () => sc,
      o: () => el,
      q: () => rl,
      s: () => Hl,
      u: () => ic,
      w: () => wl,
      y: () => zl,
      B: () => ol,
      D: () => qc,
      C: () => cl,
      G: () => bl,
      I: () => ml
    });
    var MT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function KT(TT) {
      return TT && TT.__esModule && Object.prototype.hasOwnProperty.call(TT, "default") ? TT.default : TT
    }
    var OT = {
      exports: {}
    };
    ! function(TT) {
      var kT = Object.prototype.hasOwnProperty,
        cT = "~";

      function lT() {}

      function MT(TT, kT, cT) {
        this.nj = TT, this.context = kT, this.once = cT || !1
      }

      function KT(TT, kT, lT, KT, OT) {
        if ("function" !== typeof lT) throw new TypeError("The listener must be a function");
        var yT = new MT(lT, KT || TT, OT),
          fT = cT ? cT + kT : kT;
        return TT._events[fT] ? TT._events[fT].nj ? TT._events[fT] = [TT._events[fT], yT] : TT._events[fT].push(yT) : (TT._events[fT] = yT, TT._eventsCount++), TT
      }

      function OT(TT, kT) {
        0 === --TT._eventsCount ? TT._events = new lT : delete TT._events[kT]
      }

      function yT() {
        this._events = new lT, this._eventsCount = 0
      }
      Object.create && (lT.prototype = Object.create(null), (new lT).__proto__ || (cT = !1)), yT.prototype.eventNames = function() {
        var TT, lT, MT = [];
        if (0 === this._eventsCount) return MT;
        for (lT in TT = this._events) kT.call(TT, lT) && MT.push(cT ? lT.slice(1) : lT);
        return Object.getOwnPropertySymbols ? MT.concat(Object.getOwnPropertySymbols(TT)) : MT
      }, yT.prototype.listeners = function(TT) {
        var kT = cT ? cT + TT : TT,
          lT = this._events[kT];
        if (!lT) return [];
        if (lT.nj) return [lT.nj];
        for (var MT = 0, KT = lT.length, OT = new Array(KT); MT < KT; MT++) OT[MT] = lT[MT].nj;
        return OT
      }, yT.prototype.listenerCount = function(TT) {
        var kT = cT ? cT + TT : TT,
          lT = this._events[kT];
        return lT ? lT.nj ? 1 : lT.length : 0
      }, yT.prototype.emit = function(TT, kT, lT, MT, KT, OT) {
        var yT = cT ? cT + TT : TT;
        if (!this._events[yT]) return !1;
        var fT, xT, IT = this._events[yT],
          AT = arguments.length;
        if (IT.nj) {
          switch (IT.once && this.removeListener(TT, IT.nj, void 0, !0), AT) {
            case 1:
              return IT.nj.call(IT.context), !0;
            case 2:
              return IT.nj.call(IT.context, kT), !0;
            case 3:
              return IT.nj.call(IT.context, kT, lT), !0;
            case 4:
              return IT.nj.call(IT.context, kT, lT, MT), !0;
            case 5:
              return IT.nj.call(IT.context, kT, lT, MT, KT), !0;
            case 6:
              return IT.nj.call(IT.context, kT, lT, MT, KT, OT), !0
          }
          for (xT = 1, fT = new Array(AT - 1); xT < AT; xT++) fT[xT - 1] = arguments[xT];
          IT.nj.apply(IT.context, fT)
        } else {
          var CT, jT = IT.length;
          for (xT = 0; xT < jT; xT++) switch (IT[xT].once && this.removeListener(TT, IT[xT].nj, void 0, !0), AT) {
            case 1:
              IT[xT].nj.call(IT[xT].context);
              break;
            case 2:
              IT[xT].nj.call(IT[xT].context, kT);
              break;
            case 3:
              IT[xT].nj.call(IT[xT].context, kT, lT);
              break;
            case 4:
              IT[xT].nj.call(IT[xT].context, kT, lT, MT);
              break;
            default:
              if (!fT)
                for (CT = 1, fT = new Array(AT - 1); CT < AT; CT++) fT[CT - 1] = arguments[CT];
              IT[xT].nj.apply(IT[xT].context, fT)
          }
        }
        return !0
      }, yT.prototype.on = function(TT, kT, cT) {
        return KT(this, TT, kT, cT, !1)
      }, yT.prototype.once = function(TT, kT, cT) {
        return KT(this, TT, kT, cT, !0)
      }, yT.prototype.removeListener = function(TT, kT, lT, MT) {
        var KT = cT ? cT + TT : TT;
        if (!this._events[KT]) return this;
        if (!kT) return OT(this, KT), this;
        var yT = this._events[KT];
        if (yT.nj) yT.nj !== kT || MT && !yT.once || lT && yT.context !== lT || OT(this, KT);
        else {
          for (var fT = 0, xT = [], IT = yT.length; fT < IT; fT++)(yT[fT].nj !== kT || MT && !yT[fT].once || lT && yT[fT].context !== lT) && xT.push(yT[fT]);
          xT.length ? this._events[KT] = 1 === xT.length ? xT[0] : xT : OT(this, KT)
        }
        return this
      }, yT.prototype.hN = function(TT) {
        var kT;
        return TT ? (kT = cT ? cT + TT : TT, this._events[kT] && OT(this, kT)) : (this._events = new lT, this._eventsCount = 0), this
      }, yT.prototype.off = yT.prototype.removeListener, yT.prototype.addListener = yT.prototype.on, yT.prefixed = cT, yT.EventEmitter = yT, TT.exports = yT
    }(OT);
    var yT, fT, xT = KT(OT.exports);
    ! function(TT) {
      TT.assertEqual = TT => TT, TT.assertIs = function(TT) {}, TT.assertNever = function(TT) {
        throw new Error
      }, TT.arrayToEnum = TT => {
        const kT = {};
        for (const cT of TT) kT[cT] = cT;
        return kT
      }, TT.getValidEnumValues = kT => {
        const cT = TT.objectKeys(kT).filter((TT => "number" !== typeof kT[kT[TT]])),
          lT = {};
        for (const TT of cT) lT[TT] = kT[TT];
        return TT.objectValues(lT)
      }, TT.objectValues = kT => TT.objectKeys(kT).map((function(TT) {
        return kT[TT]
      })), TT.objectKeys = "function" === typeof Object.keys ? TT => Object.keys(TT) : TT => {
        const kT = [];
        for (const cT in TT) Object.prototype.hasOwnProperty.call(TT, cT) && kT.push(cT);
        return kT
      }, TT.find = (TT, kT) => {
        for (const cT of TT)
          if (kT(cT)) return cT
      }, TT.isInteger = "function" === typeof Number.isInteger ? TT => Number.isInteger(TT) : TT => "number" === typeof TT && isFinite(TT) && Math.floor(TT) === TT, TT.joinValues = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return TT.map((TT => "string" === typeof TT ? `'${TT}'` : TT)).join(kT)
      }, TT.jsonStringifyReplacer = (TT, kT) => "bigint" === typeof kT ? kT.toString() : kT
    }(yT || (yT = {})),
    function(TT) {
      TT.mergeShapes = (TT, kT) => ({
        ...TT,
        ...kT
      })
    }(fT || (fT = {}));
    const IT = yT.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      AT = TT => {
        switch (typeof TT) {
          case "undefined":
            return IT.undefined;
          case "string":
            return IT.string;
          case "number":
            return isNaN(TT) ? IT.nan : IT.number;
          case "boolean":
            return IT.boolean;
          case "function":
            return IT.function;
          case "bigint":
            return IT.bigint;
          case "symbol":
            return IT.symbol;
          case "object":
            return Array.isArray(TT) ? IT.array : null === TT ? IT.null : TT.then && "function" === typeof TT.then && TT.catch && "function" === typeof TT.catch ? IT.promise : "undefined" !== typeof Map && TT instanceof Map ? IT.map : "undefined" !== typeof Set && TT instanceof Set ? IT.set : "undefined" !== typeof Date && TT instanceof Date ? IT.date : IT.object;
          default:
            return IT.unknown
        }
      },
      CT = yT.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class jT extends Error {
      constructor(TT) {
        var kT;
        super(), kT = this, this.issues = [], this.addIssue = TT => {
          this.issues = [...this.issues, TT]
        }, this.addIssues = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          kT.issues = [...kT.issues, ...TT]
        };
        const cT = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, cT) : this.__proto__ = cT, this.name = "ZodError", this.issues = TT
      }
      get errors() {
        return this.issues
      }
      format(TT) {
        const kT = TT || function(TT) {
            return TT.message
          },
          cT = {
            _errors: []
          },
          lT = TT => {
            for (const MT of TT.issues)
              if ("invalid_union" === MT.code) MT.unionErrors.map(lT);
              else if ("invalid_return_type" === MT.code) lT(MT.returnTypeError);
            else if ("invalid_arguments" === MT.code) lT(MT.argumentsError);
            else if (0 === MT.path.length) cT._errors.push(kT(MT));
            else {
              let TT = cT,
                lT = 0;
              for (; lT < MT.path.length;) {
                const cT = MT.path[lT];
                lT === MT.path.length - 1 ? (TT[cT] = TT[cT] || {
                  _errors: []
                }, TT[cT]._errors.push(kT(MT))) : TT[cT] = TT[cT] || {
                  _errors: []
                }, TT = TT[cT], lT++
              }
            }
          };
        return lT(this), cT
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, yT.jsonStringifyReplacer, 2)
      }
      get sj() {
        return 0 === this.issues.length
      }
      flatten() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TT => TT.message;
        const kT = {},
          cT = [];
        for (const lT of this.issues) lT.path.length > 0 ? (kT[lT.path[0]] = kT[lT.path[0]] || [], kT[lT.path[0]].push(TT(lT))) : cT.push(TT(lT));
        return {
          formErrors: cT,
          fieldErrors: kT
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    jT.create = TT => new jT(TT);
    const vT = (TT, kT) => {
      let cT;
      switch (TT.code) {
        case CT.invalid_type:
          cT = TT.received === IT.undefined ? "Required" : `Expected ${TT.expected}, received ${TT.received}`;
          break;
        case CT.invalid_literal:
          cT = `Invalid literal value, expected ${JSON.stringify(TT.expected,yT.jsonStringifyReplacer)}`;
          break;
        case CT.unrecognized_keys:
          cT = `Unrecognized key(s) in object: ${yT.joinValues(TT.keys,", ")}`;
          break;
        case CT.invalid_union:
          cT = "Invalid input";
          break;
        case CT.invalid_union_discriminator:
          cT = `Invalid discriminator value. Expected ${yT.joinValues(TT.options)}`;
          break;
        case CT.invalid_enum_value:
          cT = `Invalid enum value. Expected ${yT.joinValues(TT.options)}, received '${TT.received}'`;
          break;
        case CT.invalid_arguments:
          cT = "Invalid function arguments";
          break;
        case CT.invalid_return_type:
          cT = "Invalid function return type";
          break;
        case CT.invalid_date:
          cT = "Invalid date";
          break;
        case CT.invalid_string:
          "object" === typeof TT.validation ? "includes" in TT.validation ? (cT = `Invalid input: must include "${TT.validation.includes}"`, "number" === typeof TT.validation.position && (cT = `${cT} at one or more positions greater than or equal to ${TT.validation.position}`)) : "startsWith" in TT.validation ? cT = `Invalid input: must start with "${TT.validation.startsWith}"` : "endsWith" in TT.validation ? cT = `Invalid input: must end with "${TT.validation.endsWith}"` : yT.assertNever(TT.validation) : cT = "regex" !== TT.validation ? `Invalid ${TT.validation}` : "Invalid";
          break;
        case CT.too_small:
          cT = "array" === TT.type ? `Array must contain ${TT.exact?"exactly":TT.inclusive?"at least":"more than"} ${TT.minimum} element(s)` : "string" === TT.type ? `String must contain ${TT.exact?"exactly":TT.inclusive?"at least":"over"} ${TT.minimum} character(s)` : "number" === TT.type ? `Number must be ${TT.exact?"exactly equal to ":TT.inclusive?"greater than or equal to ":"greater than "}${TT.minimum}` : "date" === TT.type ? `Date must be ${TT.exact?"exactly equal to ":TT.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(TT.minimum))}` : "Invalid input";
          break;
        case CT.too_big:
          cT = "array" === TT.type ? `Array must contain ${TT.exact?"exactly":TT.inclusive?"at most":"less than"} ${TT.maximum} element(s)` : "string" === TT.type ? `String must contain ${TT.exact?"exactly":TT.inclusive?"at most":"under"} ${TT.maximum} character(s)` : "number" === TT.type ? `Number must be ${TT.exact?"exactly":TT.inclusive?"less than or equal to":"less than"} ${TT.maximum}` : "bigint" === TT.type ? `BigInt must be ${TT.exact?"exactly":TT.inclusive?"less than or equal to":"less than"} ${TT.maximum}` : "date" === TT.type ? `Date must be ${TT.exact?"exactly":TT.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(TT.maximum))}` : "Invalid input";
          break;
        case CT.custom:
          cT = "Invalid input";
          break;
        case CT.invalid_intersection_types:
          cT = "Intersection results could not be merged";
          break;
        case CT.not_multiple_of:
          cT = `Number must be a multiple of ${TT.multipleOf}`;
          break;
        case CT.not_finite:
          cT = "Number must be finite";
          break;
        default:
          cT = kT.defaultError, yT.assertNever(TT)
      }
      return {
        message: cT
      }
    };
    let tT = vT;

    function hT() {
      return tT
    }
    const NT = TT => {
      const {
        data: kT,
        path: cT,
        errorMaps: lT,
        issueData: MT
      } = TT, KT = [...cT, ...MT.path || []], OT = {
        ...MT,
        path: KT
      };
      let yT = "";
      const fT = lT.filter((TT => !!TT)).slice().reverse();
      for (const xT of fT) yT = xT(OT, {
        data: kT,
        defaultError: yT
      }).message;
      return {
        ...MT,
        path: KT,
        message: MT.message || yT
      }
    };

    function QT(TT, kT) {
      const cT = NT({
        issueData: kT,
        data: TT.data,
        path: TT.path,
        errorMaps: [TT.common.contextualErrorMap, TT.schemaErrorMap, hT(), vT].filter((TT => !!TT))
      });
      TT.common.issues.push(cT)
    }
    class ST {
      constructor() {
        this.value = "valid"
      }
      bv() {
        "valid" === this.value && (this.value = "bv")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(TT, kT) {
        const cT = [];
        for (const lT of kT) {
          if ("aborted" === lT.status) return DT;
          "bv" === lT.status && TT.bv(), cT.push(lT.value)
        }
        return {
          status: TT.value,
          value: cT
        }
      }
      static async mergeObjectAsync(TT, kT) {
        const cT = [];
        for (const lT of kT) cT.push({
          key: await lT.key,
          value: await lT.value
        });
        return ST.mergeObjectSync(TT, cT)
      }
      static mergeObjectSync(TT, kT) {
        const cT = {};
        for (const lT of kT) {
          const {
            key: kT,
            value: MT
          } = lT;
          if ("aborted" === kT.status) return DT;
          if ("aborted" === MT.status) return DT;
          "bv" === kT.status && TT.bv(), "bv" === MT.status && TT.bv(), "__proto__" === kT.value || "undefined" === typeof MT.value && !lT.alwaysSet || (cT[kT.value] = MT.value)
        }
        return {
          status: TT.value,
          value: cT
        }
      }
    }
    const DT = Object.freeze({
        status: "aborted"
      }),
      aT = TT => ({
        status: "bv",
        value: TT
      }),
      FT = TT => ({
        status: "valid",
        value: TT
      }),
      rT = TT => "aborted" === TT.status,
      PT = TT => "bv" === TT.status,
      wT = TT => "valid" === TT.status,
      mT = TT => "undefined" !== typeof Promise && TT instanceof Promise;
    var bT;
    ! function(TT) {
      TT.errToObj = TT => "string" === typeof TT ? {
        message: TT
      } : TT || {}, TT.toString = TT => "string" === typeof TT ? TT : null === TT || void 0 === TT ? void 0 : TT.message
    }(bT || (bT = {}));
    class zT {
      constructor(TT, kT, cT, lT) {
        this._cachedPath = [], this.parent = TT, this.data = kT, this._path = cT, this._key = lT
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const JT = (TT, kT) => {
      if (wT(kT)) return {
        success: !0,
        data: kT.value
      };
      if (!TT.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const kT = new jT(TT.common.issues);
          return this._error = kT, this._error
        }
      }
    };

    function oT(TT) {
      if (!TT) return {};
      const {
        errorMap: kT,
        invalid_type_error: cT,
        required_error: lT,
        description: MT
      } = TT;
      if (kT && (cT || lT)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (kT) return {
        errorMap: kT,
        description: MT
      };
      return {
        errorMap: (TT, kT) => "invalid_type" !== TT.code ? {
          message: kT.defaultError
        } : "undefined" === typeof kT.data ? {
          message: null !== lT && void 0 !== lT ? lT : kT.defaultError
        } : {
          message: null !== cT && void 0 !== cT ? cT : kT.defaultError
        },
        description: MT
      }
    }
    class HT {
      constructor(TT) {
        this.spa = this.safeParseAsync, this._def = TT, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(TT) {
        return AT(TT.data)
      }
      _getOrReturnCtx(TT, kT) {
        return kT || {
          common: TT.parent.common,
          data: TT.data,
          parsedType: AT(TT.data),
          schemaErrorMap: this._def.errorMap,
          path: TT.path,
          parent: TT.parent
        }
      }
      _processInputParams(TT) {
        return {
          status: new ST,
          ctx: {
            common: TT.parent.common,
            data: TT.data,
            parsedType: AT(TT.data),
            schemaErrorMap: this._def.errorMap,
            path: TT.path,
            parent: TT.parent
          }
        }
      }
      _parseSync(TT) {
        const kT = this._parse(TT);
        if (mT(kT)) throw new Error("Synchronous parse encountered promise.");
        return kT
      }
      _parseAsync(TT) {
        const kT = this._parse(TT);
        return Promise.resolve(kT)
      }
      parse(TT, kT) {
        const cT = this.safeParse(TT, kT);
        if (cT.success) return cT.data;
        throw cT.error
      }
      safeParse(TT, kT) {
        var cT;
        const lT = {
            common: {
              issues: [],
              async: null !== (cT = null === kT || void 0 === kT ? void 0 : kT.async) && void 0 !== cT && cT,
              contextualErrorMap: null === kT || void 0 === kT ? void 0 : kT.errorMap
            },
            path: (null === kT || void 0 === kT ? void 0 : kT.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: TT,
            parsedType: AT(TT)
          },
          MT = this._parseSync({
            data: TT,
            path: lT.path,
            parent: lT
          });
        return JT(lT, MT)
      }
      async parseAsync(TT, kT) {
        const cT = await this.safeParseAsync(TT, kT);
        if (cT.success) return cT.data;
        throw cT.error
      }
      async safeParseAsync(TT, kT) {
        const cT = {
            common: {
              issues: [],
              contextualErrorMap: null === kT || void 0 === kT ? void 0 : kT.errorMap,
              async: !0
            },
            path: (null === kT || void 0 === kT ? void 0 : kT.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: TT,
            parsedType: AT(TT)
          },
          lT = this._parse({
            data: TT,
            path: cT.path,
            parent: cT
          }),
          MT = await (mT(lT) ? lT : Promise.resolve(lT));
        return JT(cT, MT)
      }
      refine(TT, kT) {
        const cT = TT => "string" === typeof kT || "undefined" === typeof kT ? {
          message: kT
        } : "function" === typeof kT ? kT(TT) : kT;
        return this._refinement(((kT, lT) => {
          const MT = TT(kT),
            KT = () => lT.addIssue({
              code: CT.custom,
              ...cT(kT)
            });
          return "undefined" !== typeof Promise && MT instanceof Promise ? MT.then((TT => !!TT || (KT(), !1))) : !!MT || (KT(), !1)
        }))
      }
      refinement(TT, kT) {
        return this._refinement(((cT, lT) => !!TT(cT) || (lT.addIssue("function" === typeof kT ? kT(cT, lT) : kT), !1)))
      }
      _refinement(TT) {
        return new Dk({
          schema: this,
          typeName: Gk.ZodEffects,
          effect: {
            type: "refinement",
            refinement: TT
          }
        })
      }
      superRefine(TT) {
        return this._refinement(TT)
      }
      optional() {
        return ak.create(this, this._def)
      }
      nullable() {
        return Fk.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return kk.create(this, this._def)
      }
      promise() {
        return Sk.create(this, this._def)
      }
      or(TT) {
        return Mk.create([this, TT], this._def)
      }
      and(TT) {
        return fk.create(this, TT, this._def)
      }
      transform(TT) {
        return new Dk({
          ...oT(this._def),
          schema: this,
          typeName: Gk.ZodEffects,
          effect: {
            type: "transform",
            transform: TT
          }
        })
      }
      default (TT) {
        const kT = "function" === typeof TT ? TT : () => TT;
        return new rk({
          ...oT(this._def),
          innerType: this,
          defaultValue: kT,
          typeName: Gk.ZodDefault
        })
      }
      brand() {
        return new bk({
          typeName: Gk.ZodBranded,
          type: this,
          ...oT(this._def)
        })
      } catch (TT) {
        const kT = "function" === typeof TT ? TT : () => TT;
        return new Pk({
          ...oT(this._def),
          innerType: this,
          catchValue: kT,
          typeName: Gk.ZodCatch
        })
      }
      describe(TT) {
        return new(0, this.constructor)({
          ...this._def,
          description: TT
        })
      }
      pipe(TT) {
        return zk.create(this, TT)
      }
      readonly() {
        return Jk.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const eT = /^c[^\s-]{8,}$/i,
      GT = /^[a-z][a-z0-9]*$/,
      VT = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      ET = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      ZT = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let uT;
    const XT = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      dT = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class LT extends HT {
      _parse(TT) {
        this._def.coerce && (TT.data = String(TT.data));
        if (this._getType(TT) !== IT.string) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.string,
            received: kT.parsedType
          }), DT
        }
        const kT = new ST;
        let cT;
        for (const fT of this._def.checks)
          if ("min" === fT.kind) TT.data.length < fT.value && (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
            code: CT.too_small,
            minimum: fT.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: fT.message
          }), kT.bv());
          else if ("max" === fT.kind) TT.data.length > fT.value && (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          code: CT.too_big,
          maximum: fT.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: fT.message
        }), kT.bv());
        else if ("length" === fT.kind) {
          const lT = TT.data.length > fT.value,
            MT = TT.data.length < fT.value;
          (lT || MT) && (cT = this._getOrReturnCtx(TT, cT), lT ? QT(cT, {
            code: CT.too_big,
            maximum: fT.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: fT.message
          }) : MT && QT(cT, {
            code: CT.too_small,
            minimum: fT.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: fT.message
          }), kT.bv())
        } else if ("email" === fT.kind) ZT.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "email",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv());
        else if ("emoji" === fT.kind) uT || (uT = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), uT.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "emoji",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv());
        else if ("uuid" === fT.kind) ET.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "uuid",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv());
        else if ("cuid" === fT.kind) eT.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "cuid",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv());
        else if ("cuid2" === fT.kind) GT.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "cuid2",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv());
        else if ("ulid" === fT.kind) VT.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "ulid",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv());
        else if ("url" === fT.kind) try {
          new URL(TT.data)
        } catch (OT) {
          cT = this._getOrReturnCtx(TT, cT), QT(cT, {
            validation: "url",
            code: CT.invalid_string,
            message: fT.message
          }), kT.bv()
        } else if ("regex" === fT.kind) {
          fT.regex.lastIndex = 0;
          fT.regex.test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
            validation: "regex",
            code: CT.invalid_string,
            message: fT.message
          }), kT.bv())
        } else if ("trim" === fT.kind) TT.data = TT.data.trim();
        else if ("includes" === fT.kind) TT.data.includes(fT.value, fT.position) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          code: CT.invalid_string,
          validation: {
            includes: fT.value,
            position: fT.position
          },
          message: fT.message
        }), kT.bv());
        else if ("toLowerCase" === fT.kind) TT.data = TT.data.toLowerCase();
        else if ("toUpperCase" === fT.kind) TT.data = TT.data.toUpperCase();
        else if ("startsWith" === fT.kind) TT.data.startsWith(fT.value) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          code: CT.invalid_string,
          validation: {
            startsWith: fT.value
          },
          message: fT.message
        }), kT.bv());
        else if ("endsWith" === fT.kind) TT.data.endsWith(fT.value) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          code: CT.invalid_string,
          validation: {
            endsWith: fT.value
          },
          message: fT.message
        }), kT.bv());
        else if ("datetime" === fT.kind) {
          ((KT = fT).precision ? KT.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${KT.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${KT.precision}}Z$`) : 0 === KT.precision ? KT.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : KT.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(TT.data) || (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
            code: CT.invalid_string,
            validation: "datetime",
            message: fT.message
          }), kT.bv())
        } else "ip" === fT.kind ? (lT = TT.data, ("v4" !== (MT = fT.version) && MT || !XT.test(lT)) && ("v6" !== MT && MT || !dT.test(lT)) && (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          validation: "ip",
          code: CT.invalid_string,
          message: fT.message
        }), kT.bv())) : yT.assertNever(fT);
        var lT, MT, KT;
        return {
          status: kT.value,
          value: TT.data
        }
      }
      _regex(TT, kT, cT) {
        return this.refinement((kT => TT.test(kT)), {
          validation: kT,
          code: CT.invalid_string,
          ...bT.errToObj(cT)
        })
      }
      _addCheck(TT) {
        return new LT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      email(TT) {
        return this._addCheck({
          kind: "email",
          ...bT.errToObj(TT)
        })
      }
      url(TT) {
        return this._addCheck({
          kind: "url",
          ...bT.errToObj(TT)
        })
      }
      emoji(TT) {
        return this._addCheck({
          kind: "emoji",
          ...bT.errToObj(TT)
        })
      }
      uuid(TT) {
        return this._addCheck({
          kind: "uuid",
          ...bT.errToObj(TT)
        })
      }
      cuid(TT) {
        return this._addCheck({
          kind: "cuid",
          ...bT.errToObj(TT)
        })
      }
      cuid2(TT) {
        return this._addCheck({
          kind: "cuid2",
          ...bT.errToObj(TT)
        })
      }
      ulid(TT) {
        return this._addCheck({
          kind: "ulid",
          ...bT.errToObj(TT)
        })
      }
      ip(TT) {
        return this._addCheck({
          kind: "ip",
          ...bT.errToObj(TT)
        })
      }
      datetime(TT) {
        var kT;
        return "string" === typeof TT ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: TT
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === TT || void 0 === TT ? void 0 : TT.precision) ? null : null === TT || void 0 === TT ? void 0 : TT.precision,
          offset: null !== (kT = null === TT || void 0 === TT ? void 0 : TT.offset) && void 0 !== kT && kT,
          ...bT.errToObj(null === TT || void 0 === TT ? void 0 : TT.message)
        })
      }
      regex(TT, kT) {
        return this._addCheck({
          kind: "regex",
          regex: TT,
          ...bT.errToObj(kT)
        })
      }
      includes(TT, kT) {
        return this._addCheck({
          kind: "includes",
          value: TT,
          position: null === kT || void 0 === kT ? void 0 : kT.position,
          ...bT.errToObj(null === kT || void 0 === kT ? void 0 : kT.message)
        })
      }
      startsWith(TT, kT) {
        return this._addCheck({
          kind: "startsWith",
          value: TT,
          ...bT.errToObj(kT)
        })
      }
      endsWith(TT, kT) {
        return this._addCheck({
          kind: "endsWith",
          value: TT,
          ...bT.errToObj(kT)
        })
      }
      min(TT, kT) {
        return this._addCheck({
          kind: "min",
          value: TT,
          ...bT.errToObj(kT)
        })
      }
      max(TT, kT) {
        return this._addCheck({
          kind: "max",
          value: TT,
          ...bT.errToObj(kT)
        })
      }
      length(TT, kT) {
        return this._addCheck({
          kind: "length",
          value: TT,
          ...bT.errToObj(kT)
        })
      }
      nonempty(TT) {
        return this.min(1, bT.errToObj(TT))
      }
      trim() {
        return new LT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new LT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new LT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((TT => "datetime" === TT.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((TT => "email" === TT.kind))
      }
      get isURL() {
        return !!this._def.checks.find((TT => "url" === TT.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((TT => "emoji" === TT.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((TT => "uuid" === TT.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((TT => "cuid" === TT.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((TT => "cuid2" === TT.kind))
      }
      get isULID() {
        return !!this._def.checks.find((TT => "ulid" === TT.kind))
      }
      get isIP() {
        return !!this._def.checks.find((TT => "ip" === TT.kind))
      }
      get minLength() {
        let TT = null;
        for (const kT of this._def.checks) "min" === kT.kind && (null === TT || kT.value > TT) && (TT = kT.value);
        return TT
      }
      get maxLength() {
        let TT = null;
        for (const kT of this._def.checks) "max" === kT.kind && (null === TT || kT.value < TT) && (TT = kT.value);
        return TT
      }
    }

    function RT(TT, kT) {
      const cT = (TT.toString().split(".")[1] || "").length,
        lT = (kT.toString().split(".")[1] || "").length,
        MT = cT > lT ? cT : lT;
      return parseInt(TT.toFixed(MT).replace(".", "")) % parseInt(kT.toFixed(MT).replace(".", "")) / Math.pow(10, MT)
    }
    LT.create = TT => {
      var kT;
      return new LT({
        checks: [],
        typeName: Gk.ZodString,
        coerce: null !== (kT = null === TT || void 0 === TT ? void 0 : TT.coerce) && void 0 !== kT && kT,
        ...oT(TT)
      })
    };
    class gT extends HT {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(TT) {
        this._def.coerce && (TT.data = Number(TT.data));
        if (this._getType(TT) !== IT.number) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.number,
            received: kT.parsedType
          }), DT
        }
        let kT;
        const cT = new ST;
        for (const lT of this._def.checks)
          if ("int" === lT.kind) yT.isInteger(TT.data) || (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
            code: CT.invalid_type,
            expected: "integer",
            received: "float",
            message: lT.message
          }), cT.bv());
          else if ("min" === lT.kind) {
          (lT.inclusive ? TT.data < lT.value : TT.data <= lT.value) && (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
            code: CT.too_small,
            minimum: lT.value,
            type: "number",
            inclusive: lT.inclusive,
            exact: !1,
            message: lT.message
          }), cT.bv())
        } else if ("max" === lT.kind) {
          (lT.inclusive ? TT.data > lT.value : TT.data >= lT.value) && (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
            code: CT.too_big,
            maximum: lT.value,
            type: "number",
            inclusive: lT.inclusive,
            exact: !1,
            message: lT.message
          }), cT.bv())
        } else "multipleOf" === lT.kind ? 0 !== RT(TT.data, lT.value) && (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
          code: CT.not_multiple_of,
          multipleOf: lT.value,
          message: lT.message
        }), cT.bv()) : "finite" === lT.kind ? Number.isFinite(TT.data) || (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
          code: CT.not_finite,
          message: lT.message
        }), cT.bv()) : yT.assertNever(lT);
        return {
          status: cT.value,
          value: TT.data
        }
      }
      gte(TT, kT) {
        return this.setLimit("min", TT, !0, bT.toString(kT))
      }
      gt(TT, kT) {
        return this.setLimit("min", TT, !1, bT.toString(kT))
      }
      lte(TT, kT) {
        return this.setLimit("max", TT, !0, bT.toString(kT))
      }
      lt(TT, kT) {
        return this.setLimit("max", TT, !1, bT.toString(kT))
      }
      setLimit(TT, kT, cT, lT) {
        return new gT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: TT,
            value: kT,
            inclusive: cT,
            message: bT.toString(lT)
          }]
        })
      }
      _addCheck(TT) {
        return new gT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      int(TT) {
        return this._addCheck({
          kind: "int",
          message: bT.toString(TT)
        })
      }
      positive(TT) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: bT.toString(TT)
        })
      }
      negative(TT) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: bT.toString(TT)
        })
      }
      nonpositive(TT) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: bT.toString(TT)
        })
      }
      nonnegative(TT) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: bT.toString(TT)
        })
      }
      multipleOf(TT, kT) {
        return this._addCheck({
          kind: "multipleOf",
          value: TT,
          message: bT.toString(kT)
        })
      }
      finite(TT) {
        return this._addCheck({
          kind: "finite",
          message: bT.toString(TT)
        })
      }
      safe(TT) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: bT.toString(TT)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: bT.toString(TT)
        })
      }
      get minValue() {
        let TT = null;
        for (const kT of this._def.checks) "min" === kT.kind && (null === TT || kT.value > TT) && (TT = kT.value);
        return TT
      }
      get maxValue() {
        let TT = null;
        for (const kT of this._def.checks) "max" === kT.kind && (null === TT || kT.value < TT) && (TT = kT.value);
        return TT
      }
      get isInt() {
        return !!this._def.checks.find((TT => "int" === TT.kind || "multipleOf" === TT.kind && yT.isInteger(TT.value)))
      }
      get isFinite() {
        let TT = null,
          kT = null;
        for (const cT of this._def.checks) {
          if ("finite" === cT.kind || "int" === cT.kind || "multipleOf" === cT.kind) return !0;
          "min" === cT.kind ? (null === kT || cT.value > kT) && (kT = cT.value) : "max" === cT.kind && (null === TT || cT.value < TT) && (TT = cT.value)
        }
        return Number.isFinite(kT) && Number.isFinite(TT)
      }
    }
    gT.create = TT => new gT({
      checks: [],
      typeName: Gk.ZodNumber,
      coerce: (null === TT || void 0 === TT ? void 0 : TT.coerce) || !1,
      ...oT(TT)
    });
    class UT extends HT {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(TT) {
        this._def.coerce && (TT.data = BigInt(TT.data));
        if (this._getType(TT) !== IT.bigint) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.bigint,
            received: kT.parsedType
          }), DT
        }
        let kT;
        const cT = new ST;
        for (const lT of this._def.checks)
          if ("min" === lT.kind) {
            (lT.inclusive ? TT.data < lT.value : TT.data <= lT.value) && (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
              code: CT.too_small,
              type: "bigint",
              minimum: lT.value,
              inclusive: lT.inclusive,
              message: lT.message
            }), cT.bv())
          } else if ("max" === lT.kind) {
          (lT.inclusive ? TT.data > lT.value : TT.data >= lT.value) && (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
            code: CT.too_big,
            type: "bigint",
            maximum: lT.value,
            inclusive: lT.inclusive,
            message: lT.message
          }), cT.bv())
        } else "multipleOf" === lT.kind ? TT.data % lT.value !== BigInt(0) && (kT = this._getOrReturnCtx(TT, kT), QT(kT, {
          code: CT.not_multiple_of,
          multipleOf: lT.value,
          message: lT.message
        }), cT.bv()) : yT.assertNever(lT);
        return {
          status: cT.value,
          value: TT.data
        }
      }
      gte(TT, kT) {
        return this.setLimit("min", TT, !0, bT.toString(kT))
      }
      gt(TT, kT) {
        return this.setLimit("min", TT, !1, bT.toString(kT))
      }
      lte(TT, kT) {
        return this.setLimit("max", TT, !0, bT.toString(kT))
      }
      lt(TT, kT) {
        return this.setLimit("max", TT, !1, bT.toString(kT))
      }
      setLimit(TT, kT, cT, lT) {
        return new UT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: TT,
            value: kT,
            inclusive: cT,
            message: bT.toString(lT)
          }]
        })
      }
      _addCheck(TT) {
        return new UT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      positive(TT) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: bT.toString(TT)
        })
      }
      negative(TT) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: bT.toString(TT)
        })
      }
      nonpositive(TT) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: bT.toString(TT)
        })
      }
      nonnegative(TT) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: bT.toString(TT)
        })
      }
      multipleOf(TT, kT) {
        return this._addCheck({
          kind: "multipleOf",
          value: TT,
          message: bT.toString(kT)
        })
      }
      get minValue() {
        let TT = null;
        for (const kT of this._def.checks) "min" === kT.kind && (null === TT || kT.value > TT) && (TT = kT.value);
        return TT
      }
      get maxValue() {
        let TT = null;
        for (const kT of this._def.checks) "max" === kT.kind && (null === TT || kT.value < TT) && (TT = kT.value);
        return TT
      }
    }
    UT.create = TT => {
      var kT;
      return new UT({
        checks: [],
        typeName: Gk.ZodBigInt,
        coerce: null !== (kT = null === TT || void 0 === TT ? void 0 : TT.coerce) && void 0 !== kT && kT,
        ...oT(TT)
      })
    };
    class YT extends HT {
      _parse(TT) {
        this._def.coerce && (TT.data = Boolean(TT.data));
        if (this._getType(TT) !== IT.boolean) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.boolean,
            received: kT.parsedType
          }), DT
        }
        return FT(TT.data)
      }
    }
    YT.create = TT => new YT({
      typeName: Gk.ZodBoolean,
      coerce: (null === TT || void 0 === TT ? void 0 : TT.coerce) || !1,
      ...oT(TT)
    });
    class BT extends HT {
      _parse(TT) {
        this._def.coerce && (TT.data = new Date(TT.data));
        if (this._getType(TT) !== IT.date) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.date,
            received: kT.parsedType
          }), DT
        }
        if (isNaN(TT.data.getTime())) {
          return QT(this._getOrReturnCtx(TT), {
            code: CT.invalid_date
          }), DT
        }
        const kT = new ST;
        let cT;
        for (const lT of this._def.checks) "min" === lT.kind ? TT.data.getTime() < lT.value && (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          code: CT.too_small,
          message: lT.message,
          inclusive: !0,
          exact: !1,
          minimum: lT.value,
          type: "date"
        }), kT.bv()) : "max" === lT.kind ? TT.data.getTime() > lT.value && (cT = this._getOrReturnCtx(TT, cT), QT(cT, {
          code: CT.too_big,
          message: lT.message,
          inclusive: !0,
          exact: !1,
          maximum: lT.value,
          type: "date"
        }), kT.bv()) : yT.assertNever(lT);
        return {
          status: kT.value,
          value: new Date(TT.data.getTime())
        }
      }
      _addCheck(TT) {
        return new BT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      min(TT, kT) {
        return this._addCheck({
          kind: "min",
          value: TT.getTime(),
          message: bT.toString(kT)
        })
      }
      max(TT, kT) {
        return this._addCheck({
          kind: "max",
          value: TT.getTime(),
          message: bT.toString(kT)
        })
      }
      get minDate() {
        let TT = null;
        for (const kT of this._def.checks) "min" === kT.kind && (null === TT || kT.value > TT) && (TT = kT.value);
        return null != TT ? new Date(TT) : null
      }
      get maxDate() {
        let TT = null;
        for (const kT of this._def.checks) "max" === kT.kind && (null === TT || kT.value < TT) && (TT = kT.value);
        return null != TT ? new Date(TT) : null
      }
    }
    BT.create = TT => new BT({
      checks: [],
      coerce: (null === TT || void 0 === TT ? void 0 : TT.coerce) || !1,
      typeName: Gk.ZodDate,
      ...oT(TT)
    });
    class WT extends HT {
      _parse(TT) {
        if (this._getType(TT) !== IT.symbol) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.symbol,
            received: kT.parsedType
          }), DT
        }
        return FT(TT.data)
      }
    }
    WT.create = TT => new WT({
      typeName: Gk.ZodSymbol,
      ...oT(TT)
    });
    class nT extends HT {
      _parse(TT) {
        if (this._getType(TT) !== IT.undefined) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.undefined,
            received: kT.parsedType
          }), DT
        }
        return FT(TT.data)
      }
    }
    nT.create = TT => new nT({
      typeName: Gk.ZodUndefined,
      ...oT(TT)
    });
    class pT extends HT {
      _parse(TT) {
        if (this._getType(TT) !== IT.null) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.null,
            received: kT.parsedType
          }), DT
        }
        return FT(TT.data)
      }
    }
    pT.create = TT => new pT({
      typeName: Gk.ZodNull,
      ...oT(TT)
    });
    class iT extends HT {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(TT) {
        return FT(TT.data)
      }
    }
    iT.create = TT => new iT({
      typeName: Gk.ZodAny,
      ...oT(TT)
    });
    class qT extends HT {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(TT) {
        return FT(TT.data)
      }
    }
    qT.create = TT => new qT({
      typeName: Gk.ZodUnknown,
      ...oT(TT)
    });
    class sT extends HT {
      _parse(TT) {
        const kT = this._getOrReturnCtx(TT);
        return QT(kT, {
          code: CT.invalid_type,
          expected: IT.never,
          received: kT.parsedType
        }), DT
      }
    }
    sT.create = TT => new sT({
      typeName: Gk.ZodNever,
      ...oT(TT)
    });
    class Tk extends HT {
      _parse(TT) {
        if (this._getType(TT) !== IT.undefined) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.void,
            received: kT.parsedType
          }), DT
        }
        return FT(TT.data)
      }
    }
    Tk.create = TT => new Tk({
      typeName: Gk.ZodVoid,
      ...oT(TT)
    });
    class kk extends HT {
      _parse(TT) {
        const {
          ctx: kT,
          status: cT
        } = this._processInputParams(TT), lT = this._def;
        if (kT.parsedType !== IT.array) return QT(kT, {
          code: CT.invalid_type,
          expected: IT.array,
          received: kT.parsedType
        }), DT;
        if (null !== lT.exactLength) {
          const TT = kT.data.length > lT.exactLength.value,
            MT = kT.data.length < lT.exactLength.value;
          (TT || MT) && (QT(kT, {
            code: TT ? CT.too_big : CT.too_small,
            minimum: MT ? lT.exactLength.value : void 0,
            maximum: TT ? lT.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: lT.exactLength.message
          }), cT.bv())
        }
        if (null !== lT.minLength && kT.data.length < lT.minLength.value && (QT(kT, {
            code: CT.too_small,
            minimum: lT.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: lT.minLength.message
          }), cT.bv()), null !== lT.maxLength && kT.data.length > lT.maxLength.value && (QT(kT, {
            code: CT.too_big,
            maximum: lT.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: lT.maxLength.message
          }), cT.bv()), kT.common.async) return Promise.all([...kT.data].map(((TT, cT) => lT.type._parseAsync(new zT(kT, TT, kT.path, cT))))).then((TT => ST.mergeArray(cT, TT)));
        const MT = [...kT.data].map(((TT, cT) => lT.type._parseSync(new zT(kT, TT, kT.path, cT))));
        return ST.mergeArray(cT, MT)
      }
      get element() {
        return this._def.type
      }
      min(TT, kT) {
        return new kk({
          ...this._def,
          minLength: {
            value: TT,
            message: bT.toString(kT)
          }
        })
      }
      max(TT, kT) {
        return new kk({
          ...this._def,
          maxLength: {
            value: TT,
            message: bT.toString(kT)
          }
        })
      }
      length(TT, kT) {
        return new kk({
          ...this._def,
          exactLength: {
            value: TT,
            message: bT.toString(kT)
          }
        })
      }
      nonempty(TT) {
        return this.min(1, TT)
      }
    }

    function ck(TT) {
      if (TT instanceof lk) {
        const kT = {};
        for (const cT in TT.shape) {
          const lT = TT.shape[cT];
          kT[cT] = ak.create(ck(lT))
        }
        return new lk({
          ...TT._def,
          shape: () => kT
        })
      }
      return TT instanceof kk ? new kk({
        ...TT._def,
        type: ck(TT.element)
      }) : TT instanceof ak ? ak.create(ck(TT.unwrap())) : TT instanceof Fk ? Fk.create(ck(TT.unwrap())) : TT instanceof xk ? xk.create(TT.items.map((TT => ck(TT)))) : TT
    }
    kk.create = (TT, kT) => new kk({
      type: TT,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Gk.ZodArray,
      ...oT(kT)
    });
    class lk extends HT {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const TT = this._def.shape(),
          kT = yT.objectKeys(TT);
        return this._cached = {
          shape: TT,
          keys: kT
        }
      }
      _parse(TT) {
        if (this._getType(TT) !== IT.object) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.object,
            received: kT.parsedType
          }), DT
        }
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT), {
          shape: lT,
          keys: MT
        } = this._getCached(), KT = [];
        if (!(this._def.catchall instanceof sT && "strip" === this._def.unknownKeys))
          for (const yT in cT.data) MT.includes(yT) || KT.push(yT);
        const OT = [];
        for (const yT of MT) {
          const TT = lT[yT],
            kT = cT.data[yT];
          OT.push({
            key: {
              status: "valid",
              value: yT
            },
            value: TT._parse(new zT(cT, kT, cT.path, yT)),
            alwaysSet: yT in cT.data
          })
        }
        if (this._def.catchall instanceof sT) {
          const TT = this._def.unknownKeys;
          if ("passthrough" === TT)
            for (const kT of KT) OT.push({
              key: {
                status: "valid",
                value: kT
              },
              value: {
                status: "valid",
                value: cT.data[kT]
              }
            });
          else if ("strict" === TT) KT.length > 0 && (QT(cT, {
            code: CT.unrecognized_keys,
            keys: KT
          }), kT.bv());
          else if ("strip" !== TT) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const TT = this._def.catchall;
          for (const kT of KT) {
            const lT = cT.data[kT];
            OT.push({
              key: {
                status: "valid",
                value: kT
              },
              value: TT._parse(new zT(cT, lT, cT.path, kT)),
              alwaysSet: kT in cT.data
            })
          }
        }
        return cT.common.async ? Promise.resolve().then((async () => {
          const TT = [];
          for (const kT of OT) {
            const cT = await kT.key;
            TT.push({
              key: cT,
              value: await kT.value,
              alwaysSet: kT.alwaysSet
            })
          }
          return TT
        })).then((TT => ST.mergeObjectSync(kT, TT))) : ST.mergeObjectSync(kT, OT)
      }
      get shape() {
        return this._def.shape()
      }
      strict(TT) {
        return bT.errToObj, new lk({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== TT ? {
            errorMap: (kT, cT) => {
              var lT, MT, KT, OT;
              const yT = null !== (KT = null === (MT = (lT = this._def).errorMap) || void 0 === MT ? void 0 : MT.call(lT, kT, cT).message) && void 0 !== KT ? KT : cT.defaultError;
              return "unrecognized_keys" === kT.code ? {
                message: null !== (OT = bT.errToObj(TT).message) && void 0 !== OT ? OT : yT
              } : {
                message: yT
              }
            }
          } : {}
        })
      }
      strip() {
        return new lk({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new lk({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(TT) {
        return new lk({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...TT
          })
        })
      }
      merge(TT) {
        return new lk({
          unknownKeys: TT._def.unknownKeys,
          catchall: TT._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...TT._def.shape()
          }),
          typeName: Gk.ZodObject
        })
      }
      setKey(TT, kT) {
        return this.augment({
          [TT]: kT
        })
      }
      catchall(TT) {
        return new lk({
          ...this._def,
          catchall: TT
        })
      }
      gC(TT) {
        const kT = {};
        return yT.objectKeys(TT).forEach((cT => {
          TT[cT] && this.shape[cT] && (kT[cT] = this.shape[cT])
        })), new lk({
          ...this._def,
          shape: () => kT
        })
      }
      omit(TT) {
        const kT = {};
        return yT.objectKeys(this.shape).forEach((cT => {
          TT[cT] || (kT[cT] = this.shape[cT])
        })), new lk({
          ...this._def,
          shape: () => kT
        })
      }
      deepPartial() {
        return ck(this)
      }
      partial(TT) {
        const kT = {};
        return yT.objectKeys(this.shape).forEach((cT => {
          const lT = this.shape[cT];
          TT && !TT[cT] ? kT[cT] = lT : kT[cT] = lT.optional()
        })), new lk({
          ...this._def,
          shape: () => kT
        })
      }
      required(TT) {
        const kT = {};
        return yT.objectKeys(this.shape).forEach((cT => {
          if (TT && !TT[cT]) kT[cT] = this.shape[cT];
          else {
            let TT = this.shape[cT];
            for (; TT instanceof ak;) TT = TT._def.innerType;
            kT[cT] = TT
          }
        })), new lk({
          ...this._def,
          shape: () => kT
        })
      }
      keyof() {
        return hk(yT.objectKeys(this.shape))
      }
    }
    lk.create = (TT, kT) => new lk({
      shape: () => TT,
      unknownKeys: "strip",
      catchall: sT.create(),
      typeName: Gk.ZodObject,
      ...oT(kT)
    }), lk.strictCreate = (TT, kT) => new lk({
      shape: () => TT,
      unknownKeys: "strict",
      catchall: sT.create(),
      typeName: Gk.ZodObject,
      ...oT(kT)
    }), lk.lazycreate = (TT, kT) => new lk({
      shape: TT,
      unknownKeys: "strip",
      catchall: sT.create(),
      typeName: Gk.ZodObject,
      ...oT(kT)
    });
    class Mk extends HT {
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT), cT = this._def.options;
        if (kT.common.async) return Promise.all(cT.map((async TT => {
          const cT = {
            ...kT,
            common: {
              ...kT.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await TT._parseAsync({
              data: kT.data,
              path: kT.path,
              parent: cT
            }),
            ctx: cT
          }
        }))).then((function(TT) {
          for (const kT of TT)
            if ("valid" === kT.result.status) return kT.result;
          for (const lT of TT)
            if ("bv" === lT.result.status) return kT.common.issues.push(...lT.ctx.common.issues), lT.result;
          const cT = TT.map((TT => new jT(TT.ctx.common.issues)));
          return QT(kT, {
            code: CT.invalid_union,
            unionErrors: cT
          }), DT
        }));
        {
          let TT;
          const lT = [];
          for (const KT of cT) {
            const cT = {
                ...kT,
                common: {
                  ...kT.common,
                  issues: []
                },
                parent: null
              },
              MT = KT._parseSync({
                data: kT.data,
                path: kT.path,
                parent: cT
              });
            if ("valid" === MT.status) return MT;
            "bv" !== MT.status || TT || (TT = {
              result: MT,
              ctx: cT
            }), cT.common.issues.length && lT.push(cT.common.issues)
          }
          if (TT) return kT.common.issues.push(...TT.ctx.common.issues), TT.result;
          const MT = lT.map((TT => new jT(TT)));
          return QT(kT, {
            code: CT.invalid_union,
            unionErrors: MT
          }), DT
        }
      }
      get options() {
        return this._def.options
      }
    }
    Mk.create = (TT, kT) => new Mk({
      options: TT,
      typeName: Gk.ZodUnion,
      ...oT(kT)
    });
    const Kk = TT => TT instanceof vk ? Kk(TT.schema) : TT instanceof Dk ? Kk(TT.innerType()) : TT instanceof tk ? [TT.value] : TT instanceof Nk ? TT.options : TT instanceof Qk ? Object.keys(TT.enum) : TT instanceof rk ? Kk(TT._def.innerType) : TT instanceof nT ? [void 0] : TT instanceof pT ? [null] : null;
    class Ok extends HT {
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT);
        if (kT.parsedType !== IT.object) return QT(kT, {
          code: CT.invalid_type,
          expected: IT.object,
          received: kT.parsedType
        }), DT;
        const cT = this.discriminator,
          lT = kT.data[cT],
          MT = this.optionsMap.get(lT);
        return MT ? kT.common.async ? MT._parseAsync({
          data: kT.data,
          path: kT.path,
          parent: kT
        }) : MT._parseSync({
          data: kT.data,
          path: kT.path,
          parent: kT
        }) : (QT(kT, {
          code: CT.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [cT]
        }), DT)
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
      static create(TT, kT, cT) {
        const lT = new Map;
        for (const MT of kT) {
          const kT = Kk(MT.shape[TT]);
          if (!kT) throw new Error(`A discriminator value for key \`${TT}\` could not be extracted from all schema options`);
          for (const cT of kT) {
            if (lT.has(cT)) throw new Error(`Discriminator property ${String(TT)} has duplicate value ${String(cT)}`);
            lT.set(cT, MT)
          }
        }
        return new Ok({
          typeName: Gk.ZodDiscriminatedUnion,
          discriminator: TT,
          options: kT,
          optionsMap: lT,
          ...oT(cT)
        })
      }
    }

    function yk(TT, kT) {
      const cT = AT(TT),
        lT = AT(kT);
      if (TT === kT) return {
        valid: !0,
        data: TT
      };
      if (cT === IT.object && lT === IT.object) {
        const cT = yT.objectKeys(kT),
          lT = yT.objectKeys(TT).filter((TT => -1 !== cT.indexOf(TT))),
          MT = {
            ...TT,
            ...kT
          };
        for (const KT of lT) {
          const cT = yk(TT[KT], kT[KT]);
          if (!cT.valid) return {
            valid: !1
          };
          MT[KT] = cT.data
        }
        return {
          valid: !0,
          data: MT
        }
      }
      if (cT === IT.array && lT === IT.array) {
        if (TT.length !== kT.length) return {
          valid: !1
        };
        const cT = [];
        for (let lT = 0; lT < TT.length; lT++) {
          const MT = yk(TT[lT], kT[lT]);
          if (!MT.valid) return {
            valid: !1
          };
          cT.push(MT.data)
        }
        return {
          valid: !0,
          data: cT
        }
      }
      return cT === IT.date && lT === IT.date && +TT === +kT ? {
        valid: !0,
        data: TT
      } : {
        valid: !1
      }
    }
    class fk extends HT {
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT), lT = (TT, lT) => {
          if (rT(TT) || rT(lT)) return DT;
          const MT = yk(TT.value, lT.value);
          return MT.valid ? ((PT(TT) || PT(lT)) && kT.bv(), {
            status: kT.value,
            value: MT.data
          }) : (QT(cT, {
            code: CT.invalid_intersection_types
          }), DT)
        };
        return cT.common.async ? Promise.all([this._def.left._parseAsync({
          data: cT.data,
          path: cT.path,
          parent: cT
        }), this._def.right._parseAsync({
          data: cT.data,
          path: cT.path,
          parent: cT
        })]).then((TT => {
          let [kT, cT] = TT;
          return lT(kT, cT)
        })) : lT(this._def.left._parseSync({
          data: cT.data,
          path: cT.path,
          parent: cT
        }), this._def.right._parseSync({
          data: cT.data,
          path: cT.path,
          parent: cT
        }))
      }
    }
    fk.create = (TT, kT, cT) => new fk({
      left: TT,
      right: kT,
      typeName: Gk.ZodIntersection,
      ...oT(cT)
    });
    class xk extends HT {
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT);
        if (cT.parsedType !== IT.array) return QT(cT, {
          code: CT.invalid_type,
          expected: IT.array,
          received: cT.parsedType
        }), DT;
        if (cT.data.length < this._def.items.length) return QT(cT, {
          code: CT.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), DT;
        !this._def.rest && cT.data.length > this._def.items.length && (QT(cT, {
          code: CT.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), kT.bv());
        const lT = [...cT.data].map(((TT, kT) => {
          const lT = this._def.items[kT] || this._def.rest;
          return lT ? lT._parse(new zT(cT, TT, cT.path, kT)) : null
        })).filter((TT => !!TT));
        return cT.common.async ? Promise.all(lT).then((TT => ST.mergeArray(kT, TT))) : ST.mergeArray(kT, lT)
      }
      get items() {
        return this._def.items
      }
      rest(TT) {
        return new xk({
          ...this._def,
          rest: TT
        })
      }
    }
    xk.create = (TT, kT) => {
      if (!Array.isArray(TT)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new xk({
        items: TT,
        typeName: Gk.ZodTuple,
        rest: null,
        ...oT(kT)
      })
    };
    class Ik extends HT {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT);
        if (cT.parsedType !== IT.object) return QT(cT, {
          code: CT.invalid_type,
          expected: IT.object,
          received: cT.parsedType
        }), DT;
        const lT = [],
          MT = this._def.keyType,
          KT = this._def.valueType;
        for (const OT in cT.data) lT.push({
          key: MT._parse(new zT(cT, OT, cT.path, OT)),
          value: KT._parse(new zT(cT, cT.data[OT], cT.path, OT))
        });
        return cT.common.async ? ST.mergeObjectAsync(kT, lT) : ST.mergeObjectSync(kT, lT)
      }
      get element() {
        return this._def.valueType
      }
      static create(TT, kT, cT) {
        return new Ik(kT instanceof HT ? {
          keyType: TT,
          valueType: kT,
          typeName: Gk.ZodRecord,
          ...oT(cT)
        } : {
          keyType: LT.create(),
          valueType: TT,
          typeName: Gk.ZodRecord,
          ...oT(kT)
        })
      }
    }
    class Ak extends HT {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT);
        if (cT.parsedType !== IT.map) return QT(cT, {
          code: CT.invalid_type,
          expected: IT.map,
          received: cT.parsedType
        }), DT;
        const lT = this._def.keyType,
          MT = this._def.valueType,
          KT = [...cT.data.entries()].map(((TT, kT) => {
            let [KT, OT] = TT;
            return {
              key: lT._parse(new zT(cT, KT, cT.path, [kT, "key"])),
              value: MT._parse(new zT(cT, OT, cT.path, [kT, "value"]))
            }
          }));
        if (cT.common.async) {
          const TT = new Map;
          return Promise.resolve().then((async () => {
            for (const cT of KT) {
              const lT = await cT.key,
                MT = await cT.value;
              if ("aborted" === lT.status || "aborted" === MT.status) return DT;
              "bv" !== lT.status && "bv" !== MT.status || kT.bv(), TT.set(lT.value, MT.value)
            }
            return {
              status: kT.value,
              value: TT
            }
          }))
        } {
          const TT = new Map;
          for (const cT of KT) {
            const lT = cT.key,
              MT = cT.value;
            if ("aborted" === lT.status || "aborted" === MT.status) return DT;
            "bv" !== lT.status && "bv" !== MT.status || kT.bv(), TT.set(lT.value, MT.value)
          }
          return {
            status: kT.value,
            value: TT
          }
        }
      }
    }
    Ak.create = (TT, kT, cT) => new Ak({
      valueType: kT,
      keyType: TT,
      typeName: Gk.ZodMap,
      ...oT(cT)
    });
    class Ck extends HT {
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT);
        if (cT.parsedType !== IT.set) return QT(cT, {
          code: CT.invalid_type,
          expected: IT.set,
          received: cT.parsedType
        }), DT;
        const lT = this._def;
        null !== lT.minSize && cT.data.size < lT.minSize.value && (QT(cT, {
          code: CT.too_small,
          minimum: lT.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: lT.minSize.message
        }), kT.bv()), null !== lT.maxSize && cT.data.size > lT.maxSize.value && (QT(cT, {
          code: CT.too_big,
          maximum: lT.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: lT.maxSize.message
        }), kT.bv());
        const MT = this._def.valueType;

        function KT(TT) {
          const cT = new Set;
          for (const lT of TT) {
            if ("aborted" === lT.status) return DT;
            "bv" === lT.status && kT.bv(), cT.add(lT.value)
          }
          return {
            status: kT.value,
            value: cT
          }
        }
        const OT = [...cT.data.values()].map(((TT, kT) => MT._parse(new zT(cT, TT, cT.path, kT))));
        return cT.common.async ? Promise.all(OT).then((TT => KT(TT))) : KT(OT)
      }
      min(TT, kT) {
        return new Ck({
          ...this._def,
          minSize: {
            value: TT,
            message: bT.toString(kT)
          }
        })
      }
      max(TT, kT) {
        return new Ck({
          ...this._def,
          maxSize: {
            value: TT,
            message: bT.toString(kT)
          }
        })
      }
      size(TT, kT) {
        return this.min(TT, kT).max(TT, kT)
      }
      nonempty(TT) {
        return this.min(1, TT)
      }
    }
    Ck.create = (TT, kT) => new Ck({
      valueType: TT,
      minSize: null,
      maxSize: null,
      typeName: Gk.ZodSet,
      ...oT(kT)
    });
    class jk extends HT {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT);
        if (kT.parsedType !== IT.function) return QT(kT, {
          code: CT.invalid_type,
          expected: IT.function,
          received: kT.parsedType
        }), DT;

        function cT(TT, cT) {
          return NT({
            data: TT,
            path: kT.path,
            errorMaps: [kT.common.contextualErrorMap, kT.schemaErrorMap, hT(), vT].filter((TT => !!TT)),
            issueData: {
              code: CT.invalid_arguments,
              argumentsError: cT
            }
          })
        }

        function lT(TT, cT) {
          return NT({
            data: TT,
            path: kT.path,
            errorMaps: [kT.common.contextualErrorMap, kT.schemaErrorMap, hT(), vT].filter((TT => !!TT)),
            issueData: {
              code: CT.invalid_return_type,
              returnTypeError: cT
            }
          })
        }
        const MT = {
            errorMap: kT.common.contextualErrorMap
          },
          KT = kT.data;
        if (this._def.returns instanceof Sk) {
          const TT = this;
          return FT((async function() {
            for (var kT = arguments.length, OT = new Array(kT), yT = 0; yT < kT; yT++) OT[yT] = arguments[yT];
            const fT = new jT([]),
              xT = await TT._def.args.parseAsync(OT, MT).catch((TT => {
                throw fT.addIssue(cT(OT, TT)), fT
              })),
              IT = await Reflect.apply(KT, this, xT);
            return await TT._def.returns._def.type.parseAsync(IT, MT).catch((TT => {
              throw fT.addIssue(lT(IT, TT)), fT
            }))
          }))
        } {
          const TT = this;
          return FT((function() {
            for (var kT = arguments.length, OT = new Array(kT), yT = 0; yT < kT; yT++) OT[yT] = arguments[yT];
            const fT = TT._def.args.safeParse(OT, MT);
            if (!fT.success) throw new jT([cT(OT, fT.error)]);
            const xT = Reflect.apply(KT, this, fT.data),
              IT = TT._def.returns.safeParse(xT, MT);
            if (!IT.success) throw new jT([lT(xT, IT.error)]);
            return IT.data
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
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return new jk({
          ...this._def,
          args: xk.create(kT).rest(qT.create())
        })
      }
      returns(TT) {
        return new jk({
          ...this._def,
          returns: TT
        })
      }
      implement(TT) {
        return this.parse(TT)
      }
      strictImplement(TT) {
        return this.parse(TT)
      }
      static create(TT, kT, cT) {
        return new jk({
          args: TT || xk.create([]).rest(qT.create()),
          returns: kT || qT.create(),
          typeName: Gk.ZodFunction,
          ...oT(cT)
        })
      }
    }
    class vk extends HT {
      get schema() {
        return this._def.getter()
      }
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT);
        return this._def.getter()._parse({
          data: kT.data,
          path: kT.path,
          parent: kT
        })
      }
    }
    vk.create = (TT, kT) => new vk({
      getter: TT,
      typeName: Gk.ZodLazy,
      ...oT(kT)
    });
    class tk extends HT {
      _parse(TT) {
        if (TT.data !== this._def.value) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            received: kT.data,
            code: CT.invalid_literal,
            expected: this._def.value
          }), DT
        }
        return {
          status: "valid",
          value: TT.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function hk(TT, kT) {
      return new Nk({
        values: TT,
        typeName: Gk.ZodEnum,
        ...oT(kT)
      })
    }
    tk.create = (TT, kT) => new tk({
      value: TT,
      typeName: Gk.ZodLiteral,
      ...oT(kT)
    });
    class Nk extends HT {
      _parse(TT) {
        if ("string" !== typeof TT.data) {
          const kT = this._getOrReturnCtx(TT),
            cT = this._def.values;
          return QT(kT, {
            expected: yT.joinValues(cT),
            received: kT.parsedType,
            code: CT.invalid_type
          }), DT
        }
        if (-1 === this._def.values.indexOf(TT.data)) {
          const kT = this._getOrReturnCtx(TT),
            cT = this._def.values;
          return QT(kT, {
            received: kT.data,
            code: CT.invalid_enum_value,
            options: cT
          }), DT
        }
        return FT(TT.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const TT = {};
        for (const kT of this._def.values) TT[kT] = kT;
        return TT
      }
      get Values() {
        const TT = {};
        for (const kT of this._def.values) TT[kT] = kT;
        return TT
      }
      get Enum() {
        const TT = {};
        for (const kT of this._def.values) TT[kT] = kT;
        return TT
      }
      extract(TT) {
        return Nk.create(TT)
      }
      exclude(TT) {
        return Nk.create(this.options.filter((kT => !TT.includes(kT))))
      }
    }
    Nk.create = hk;
    class Qk extends HT {
      _parse(TT) {
        const kT = yT.getValidEnumValues(this._def.values),
          cT = this._getOrReturnCtx(TT);
        if (cT.parsedType !== IT.string && cT.parsedType !== IT.number) {
          const TT = yT.objectValues(kT);
          return QT(cT, {
            expected: yT.joinValues(TT),
            received: cT.parsedType,
            code: CT.invalid_type
          }), DT
        }
        if (-1 === kT.indexOf(TT.data)) {
          const TT = yT.objectValues(kT);
          return QT(cT, {
            received: cT.data,
            code: CT.invalid_enum_value,
            options: TT
          }), DT
        }
        return FT(TT.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Qk.create = (TT, kT) => new Qk({
      values: TT,
      typeName: Gk.ZodNativeEnum,
      ...oT(kT)
    });
    class Sk extends HT {
      unwrap() {
        return this._def.type
      }
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT);
        if (kT.parsedType !== IT.promise && !1 === kT.common.async) return QT(kT, {
          code: CT.invalid_type,
          expected: IT.promise,
          received: kT.parsedType
        }), DT;
        const cT = kT.parsedType === IT.promise ? kT.data : Promise.resolve(kT.data);
        return FT(cT.then((TT => this._def.type.parseAsync(TT, {
          path: kT.path,
          errorMap: kT.common.contextualErrorMap
        }))))
      }
    }
    Sk.create = (TT, kT) => new Sk({
      type: TT,
      typeName: Gk.ZodPromise,
      ...oT(kT)
    });
    class Dk extends HT {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Gk.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT), lT = this._def.effect || null, MT = {
          addIssue: TT => {
            QT(cT, TT), TT.fatal ? kT.abort() : kT.bv()
          },
          get path() {
            return cT.path
          }
        };
        if (MT.addIssue = MT.addIssue.bind(MT), "preprocess" === lT.type) {
          const TT = lT.transform(cT.data, MT);
          return cT.common.issues.length ? {
            status: "bv",
            value: cT.data
          } : cT.common.async ? Promise.resolve(TT).then((TT => this._def.schema._parseAsync({
            data: TT,
            path: cT.path,
            parent: cT
          }))) : this._def.schema._parseSync({
            data: TT,
            path: cT.path,
            parent: cT
          })
        }
        if ("refinement" === lT.type) {
          const TT = TT => {
            const kT = lT.refinement(TT, MT);
            if (cT.common.async) return Promise.resolve(kT);
            if (kT instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return TT
          };
          if (!1 === cT.common.async) {
            const lT = this._def.schema._parseSync({
              data: cT.data,
              path: cT.path,
              parent: cT
            });
            return "aborted" === lT.status ? DT : ("bv" === lT.status && kT.bv(), TT(lT.value), {
              status: kT.value,
              value: lT.value
            })
          }
          return this._def.schema._parseAsync({
            data: cT.data,
            path: cT.path,
            parent: cT
          }).then((cT => "aborted" === cT.status ? DT : ("bv" === cT.status && kT.bv(), TT(cT.value).then((() => ({
            status: kT.value,
            value: cT.value
          }))))))
        }
        if ("transform" === lT.type) {
          if (!1 === cT.common.async) {
            const TT = this._def.schema._parseSync({
              data: cT.data,
              path: cT.path,
              parent: cT
            });
            if (!wT(TT)) return TT;
            const KT = lT.transform(TT.value, MT);
            if (KT instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: kT.value,
              value: KT
            }
          }
          return this._def.schema._parseAsync({
            data: cT.data,
            path: cT.path,
            parent: cT
          }).then((TT => wT(TT) ? Promise.resolve(lT.transform(TT.value, MT)).then((TT => ({
            status: kT.value,
            value: TT
          }))) : TT))
        }
        yT.assertNever(lT)
      }
    }
    Dk.create = (TT, kT, cT) => new Dk({
      schema: TT,
      typeName: Gk.ZodEffects,
      effect: kT,
      ...oT(cT)
    }), Dk.createWithPreprocess = (TT, kT, cT) => new Dk({
      schema: kT,
      effect: {
        type: "preprocess",
        transform: TT
      },
      typeName: Gk.ZodEffects,
      ...oT(cT)
    });
    class ak extends HT {
      _parse(TT) {
        return this._getType(TT) === IT.undefined ? FT(void 0) : this._def.innerType._parse(TT)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    ak.create = (TT, kT) => new ak({
      innerType: TT,
      typeName: Gk.ZodOptional,
      ...oT(kT)
    });
    class Fk extends HT {
      _parse(TT) {
        return this._getType(TT) === IT.null ? FT(null) : this._def.innerType._parse(TT)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Fk.create = (TT, kT) => new Fk({
      innerType: TT,
      typeName: Gk.ZodNullable,
      ...oT(kT)
    });
    class rk extends HT {
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT);
        let cT = kT.data;
        return kT.parsedType === IT.undefined && (cT = this._def.defaultValue()), this._def.innerType._parse({
          data: cT,
          path: kT.path,
          parent: kT
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    rk.create = (TT, kT) => new rk({
      innerType: TT,
      typeName: Gk.ZodDefault,
      defaultValue: "function" === typeof kT.default ? kT.default : () => kT.default,
      ...oT(kT)
    });
    class Pk extends HT {
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT), cT = {
          ...kT,
          common: {
            ...kT.common,
            issues: []
          }
        }, lT = this._def.innerType._parse({
          data: cT.data,
          path: cT.path,
          parent: {
            ...cT
          }
        });
        return mT(lT) ? lT.then((TT => ({
          status: "valid",
          value: "valid" === TT.status ? TT.value : this._def.catchValue({
            get error() {
              return new jT(cT.common.issues)
            },
            input: cT.data
          })
        }))) : {
          status: "valid",
          value: "valid" === lT.status ? lT.value : this._def.catchValue({
            get error() {
              return new jT(cT.common.issues)
            },
            input: cT.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Pk.create = (TT, kT) => new Pk({
      innerType: TT,
      typeName: Gk.ZodCatch,
      catchValue: "function" === typeof kT.catch ? kT.catch : () => kT.catch,
      ...oT(kT)
    });
    class wk extends HT {
      _parse(TT) {
        if (this._getType(TT) !== IT.nan) {
          const kT = this._getOrReturnCtx(TT);
          return QT(kT, {
            code: CT.invalid_type,
            expected: IT.nan,
            received: kT.parsedType
          }), DT
        }
        return {
          status: "valid",
          value: TT.data
        }
      }
    }
    wk.create = TT => new wk({
      typeName: Gk.ZodNaN,
      ...oT(TT)
    });
    const mk = Symbol("zod_brand");
    class bk extends HT {
      _parse(TT) {
        const {
          ctx: kT
        } = this._processInputParams(TT), cT = kT.data;
        return this._def.type._parse({
          data: cT,
          path: kT.path,
          parent: kT
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class zk extends HT {
      _parse(TT) {
        const {
          status: kT,
          ctx: cT
        } = this._processInputParams(TT);
        if (cT.common.async) {
          return (async () => {
            const TT = await this._def.in._parseAsync({
              data: cT.data,
              path: cT.path,
              parent: cT
            });
            return "aborted" === TT.status ? DT : "bv" === TT.status ? (kT.bv(), aT(TT.value)) : this._def.out._parseAsync({
              data: TT.value,
              path: cT.path,
              parent: cT
            })
          })()
        } {
          const TT = this._def.in._parseSync({
            data: cT.data,
            path: cT.path,
            parent: cT
          });
          return "aborted" === TT.status ? DT : "bv" === TT.status ? (kT.bv(), {
            status: "bv",
            value: TT.value
          }) : this._def.out._parseSync({
            data: TT.value,
            path: cT.path,
            parent: cT
          })
        }
      }
      static create(TT, kT) {
        return new zk({
          in: TT,
          out: kT,
          typeName: Gk.ZodPipeline
        })
      }
    }
    class Jk extends HT {
      _parse(TT) {
        const kT = this._def.innerType._parse(TT);
        return wT(kT) && (kT.value = Object.freeze(kT.value)), kT
      }
    }
    Jk.create = (TT, kT) => new Jk({
      innerType: TT,
      typeName: Gk.ZodReadonly,
      ...oT(kT)
    });
    const Hk = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cT = arguments.length > 2 ? arguments[2] : void 0;
        return TT ? iT.create().superRefine(((lT, MT) => {
          var KT, OT;
          if (!TT(lT)) {
            const TT = "function" === typeof kT ? kT(lT) : "string" === typeof kT ? {
                message: kT
              } : kT,
              yT = null === (OT = null !== (KT = TT.fatal) && void 0 !== KT ? KT : cT) || void 0 === OT || OT,
              fT = "string" === typeof TT ? {
                message: TT
              } : TT;
            MT.addIssue({
              code: "custom",
              ...fT,
              fatal: yT
            })
          }
        })) : iT.create()
      },
      ek = {
        object: lk.lazycreate
      };
    var Gk;
    ! function(TT) {
      TT.ZodString = "ZodString", TT.ZodNumber = "ZodNumber", TT.ZodNaN = "ZodNaN", TT.ZodBigInt = "ZodBigInt", TT.ZodBoolean = "ZodBoolean", TT.ZodDate = "ZodDate", TT.ZodSymbol = "ZodSymbol", TT.ZodUndefined = "ZodUndefined", TT.ZodNull = "ZodNull", TT.ZodAny = "ZodAny", TT.ZodUnknown = "ZodUnknown", TT.ZodNever = "ZodNever", TT.ZodVoid = "ZodVoid", TT.ZodArray = "ZodArray", TT.ZodObject = "ZodObject", TT.ZodUnion = "ZodUnion", TT.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", TT.ZodIntersection = "ZodIntersection", TT.ZodTuple = "ZodTuple", TT.ZodRecord = "ZodRecord", TT.ZodMap = "ZodMap", TT.ZodSet = "ZodSet", TT.ZodFunction = "ZodFunction", TT.ZodLazy = "ZodLazy", TT.ZodLiteral = "ZodLiteral", TT.ZodEnum = "ZodEnum", TT.ZodEffects = "ZodEffects", TT.ZodNativeEnum = "ZodNativeEnum", TT.ZodOptional = "ZodOptional", TT.ZodNullable = "ZodNullable", TT.ZodDefault = "ZodDefault", TT.ZodCatch = "ZodCatch", TT.ZodPromise = "ZodPromise", TT.ZodBranded = "ZodBranded", TT.ZodPipeline = "ZodPipeline", TT.ZodReadonly = "ZodReadonly"
    }(Gk || (Gk = {}));
    const Vk = LT.create,
      Ek = gT.create,
      Zk = wk.create,
      uk = UT.create,
      Xk = YT.create,
      dk = BT.create,
      Lk = WT.create,
      Rk = nT.create,
      gk = pT.create,
      Uk = iT.create,
      Yk = qT.create,
      Bk = sT.create,
      Wk = Tk.create,
      nk = kk.create,
      pk = lk.create,
      ik = lk.strictCreate,
      qk = Mk.create,
      sk = Ok.create,
      Tc = fk.create,
      kc = xk.create,
      cc = Ik.create,
      lc = Ak.create,
      Mc = Ck.create,
      Kc = jk.create,
      Oc = vk.create,
      yc = tk.create,
      fc = Nk.create,
      xc = Qk.create,
      Ic = Sk.create,
      Ac = Dk.create,
      Cc = ak.create,
      jc = Fk.create,
      vc = Dk.createWithPreprocess,
      tc = zk.create,
      hc = {
        string: TT => LT.create({
          ...TT,
          coerce: !0
        }),
        number: TT => gT.create({
          ...TT,
          coerce: !0
        }),
        boolean: TT => YT.create({
          ...TT,
          coerce: !0
        }),
        bigint: TT => UT.create({
          ...TT,
          coerce: !0
        }),
        date: TT => BT.create({
          ...TT,
          coerce: !0
        })
      },
      Nc = DT;
    var Qc = Object.freeze({
        __proto__: null,
        defaultErrorMap: vT,
        setErrorMap: function(TT) {
          tT = TT
        },
        getErrorMap: hT,
        makeIssue: NT,
        EMPTY_PATH: [],
        addIssueToContext: QT,
        ParseStatus: ST,
        INVALID: DT,
        DIRTY: aT,
        OK: FT,
        isAborted: rT,
        isDirty: PT,
        isValid: wT,
        isAsync: mT,
        get util() {
          return yT
        },
        get objectUtil() {
          return fT
        },
        ZodParsedType: IT,
        getParsedType: AT,
        ZodType: HT,
        ZodString: LT,
        ZodNumber: gT,
        ZodBigInt: UT,
        ZodBoolean: YT,
        ZodDate: BT,
        ZodSymbol: WT,
        ZodUndefined: nT,
        ZodNull: pT,
        ZodAny: iT,
        ZodUnknown: qT,
        ZodNever: sT,
        ZodVoid: Tk,
        ZodArray: kk,
        ZodObject: lk,
        ZodUnion: Mk,
        ZodDiscriminatedUnion: Ok,
        ZodIntersection: fk,
        ZodTuple: xk,
        ZodRecord: Ik,
        ZodMap: Ak,
        ZodSet: Ck,
        ZodFunction: jk,
        ZodLazy: vk,
        ZodLiteral: tk,
        ZodEnum: Nk,
        ZodNativeEnum: Qk,
        ZodPromise: Sk,
        ZodEffects: Dk,
        ZodTransformer: Dk,
        ZodOptional: ak,
        ZodNullable: Fk,
        ZodDefault: rk,
        ZodCatch: Pk,
        ZodNaN: wk,
        BRAND: mk,
        ZodBranded: bk,
        ZodPipeline: zk,
        ZodReadonly: Jk,
        custom: Hk,
        Schema: HT,
        ZodSchema: HT,
        late: ek,
        get ZodFirstPartyTypeKind() {
          return Gk
        },
        coerce: hc,
        any: Uk,
        array: nk,
        bigint: uk,
        boolean: Xk,
        date: dk,
        discriminatedUnion: sk,
        effect: Ac,
        enum: fc,
        function: Kc,
        instanceof: function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${TT.name}`
          };
          return Hk((kT => kT instanceof TT), kT)
        },
        intersection: Tc,
        lazy: Oc,
        literal: yc,
        map: lc,
        nan: Zk,
        nativeEnum: xc,
        never: Bk,
        null: gk,
        nullable: jc,
        number: Ek,
        object: pk,
        oboolean: () => Xk().optional(),
        onumber: () => Ek().optional(),
        optional: Cc,
        ostring: () => Vk().optional(),
        pipeline: tc,
        preprocess: vc,
        promise: Ic,
        record: cc,
        set: Mc,
        strictObject: ik,
        string: Vk,
        symbol: Lk,
        transformer: Ac,
        tuple: kc,
        undefined: Rk,
        union: qk,
        unknown: Yk,
        void: Wk,
        NEVER: Nc,
        ZodIssueCode: CT,
        quotelessJson: TT => JSON.stringify(TT, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: jT
      }),
      Sc = {
        exports: {}
      };
    ! function(TT) {
      var kT = function(TT) {
        var cT = 1e7,
          lT = 9007199254740992,
          MT = CT(lT),
          KT = "0123456789abcdefghijklmnopqrstuvwxyz",
          OT = "function" === typeof BigInt;

        function yT(TT, kT, cT, lT) {
          return "undefined" === typeof TT ? yT[0] : "undefined" !== typeof kT && (10 !== +kT || cT) ? YT(TT, kT, cT, lT) : iT(TT)
        }

        function fT(TT, kT) {
          this.value = TT, this.sign = kT, this.isSmall = !1
        }

        function xT(TT) {
          this.value = TT, this.sign = TT < 0, this.isSmall = !0
        }

        function IT(TT) {
          this.value = TT
        }

        function AT(TT) {
          return -lT < TT && TT < lT
        }

        function CT(TT) {
          return TT < 1e7 ? [TT] : TT < 1e14 ? [TT % 1e7, Math.floor(TT / 1e7)] : [TT % 1e7, Math.floor(TT / 1e7) % 1e7, Math.floor(TT / 1e14)]
        }

        function jT(TT) {
          vT(TT);
          var kT = TT.length;
          if (kT < 4 && oT(TT, MT) < 0) switch (kT) {
            case 0:
              return 0;
            case 1:
              return TT[0];
            case 2:
              return TT[0] + TT[1] * cT;
            default:
              return TT[0] + (TT[1] + TT[2] * cT) * cT
          }
          return TT
        }

        function vT(TT) {
          for (var kT = TT.length; 0 === TT[--kT];);
          TT.length = kT + 1
        }

        function tT(TT) {
          for (var kT = new Array(TT), cT = -1; ++cT < TT;) kT[cT] = 0;
          return kT
        }

        function hT(TT) {
          return TT > 0 ? Math.floor(TT) : Math.ceil(TT)
        }

        function NT(TT, kT) {
          var lT, MT, KT = TT.length,
            OT = kT.length,
            yT = new Array(KT),
            fT = 0,
            xT = cT;
          for (MT = 0; MT < OT; MT++) fT = (lT = TT[MT] + kT[MT] + fT) >= xT ? 1 : 0, yT[MT] = lT - fT * xT;
          for (; MT < KT;) fT = (lT = TT[MT] + fT) === xT ? 1 : 0, yT[MT++] = lT - fT * xT;
          return fT > 0 && yT.push(fT), yT
        }

        function QT(TT, kT) {
          return TT.length >= kT.length ? NT(TT, kT) : NT(kT, TT)
        }

        function ST(TT, kT) {
          var lT, MT, KT = TT.length,
            OT = new Array(KT),
            yT = cT;
          for (MT = 0; MT < KT; MT++) lT = TT[MT] - yT + kT, kT = Math.floor(lT / yT), OT[MT] = lT - kT * yT, kT += 1;
          for (; kT > 0;) OT[MT++] = kT % yT, kT = Math.floor(kT / yT);
          return OT
        }

        function DT(TT, kT) {
          var lT, MT, KT = TT.length,
            OT = kT.length,
            yT = new Array(KT),
            fT = 0,
            xT = cT;
          for (lT = 0; lT < OT; lT++)(MT = TT[lT] - fT - kT[lT]) < 0 ? (MT += xT, fT = 1) : fT = 0, yT[lT] = MT;
          for (lT = OT; lT < KT; lT++) {
            if (!((MT = TT[lT] - fT) < 0)) {
              yT[lT++] = MT;
              break
            }
            MT += xT, yT[lT] = MT
          }
          for (; lT < KT; lT++) yT[lT] = TT[lT];
          return vT(yT), yT
        }

        function aT(TT, kT, lT) {
          var MT, KT, OT = TT.length,
            yT = new Array(OT),
            IT = -kT,
            AT = cT;
          for (MT = 0; MT < OT; MT++) KT = TT[MT] + IT, IT = Math.floor(KT / AT), KT %= AT, yT[MT] = KT < 0 ? KT + AT : KT;
          return "number" === typeof(yT = jT(yT)) ? (lT && (yT = -yT), new xT(yT)) : new fT(yT, lT)
        }

        function FT(TT, kT) {
          var lT, MT, KT, OT, yT = TT.length,
            fT = kT.length,
            xT = tT(yT + fT),
            IT = cT;
          for (KT = 0; KT < yT; ++KT) {
            OT = TT[KT];
            for (var AT = 0; AT < fT; ++AT) lT = OT * kT[AT] + xT[KT + AT], MT = Math.floor(lT / IT), xT[KT + AT] = lT - MT * IT, xT[KT + AT + 1] += MT
          }
          return vT(xT), xT
        }

        function rT(TT, kT) {
          var lT, MT, KT = TT.length,
            OT = new Array(KT),
            yT = cT,
            fT = 0;
          for (MT = 0; MT < KT; MT++) lT = TT[MT] * kT + fT, fT = Math.floor(lT / yT), OT[MT] = lT - fT * yT;
          for (; fT > 0;) OT[MT++] = fT % yT, fT = Math.floor(fT / yT);
          return OT
        }

        function PT(TT, kT) {
          for (var cT = []; kT-- > 0;) cT.push(0);
          return cT.concat(TT)
        }

        function wT(TT, kT) {
          var cT = Math.max(TT.length, kT.length);
          if (cT <= 30) return FT(TT, kT);
          cT = Math.ceil(cT / 2);
          var lT = TT.slice(cT),
            MT = TT.slice(0, cT),
            KT = kT.slice(cT),
            OT = kT.slice(0, cT),
            yT = wT(MT, OT),
            fT = wT(lT, KT),
            xT = wT(QT(MT, lT), QT(OT, KT)),
            IT = QT(QT(yT, PT(DT(DT(xT, yT), fT), cT)), PT(fT, 2 * cT));
          return vT(IT), IT
        }

        function mT(TT, kT, lT) {
          return new fT(TT < cT ? rT(kT, TT) : FT(kT, CT(TT)), lT)
        }

        function bT(TT) {
          var kT, lT, MT, KT, OT = TT.length,
            yT = tT(OT + OT),
            fT = cT;
          for (MT = 0; MT < OT; MT++) {
            lT = 0 - (KT = TT[MT]) * KT;
            for (var xT = MT; xT < OT; xT++) kT = KT * TT[xT] * 2 + yT[MT + xT] + lT, lT = Math.floor(kT / fT), yT[MT + xT] = kT - lT * fT;
            yT[MT + OT] = lT
          }
          return vT(yT), yT
        }

        function zT(TT, kT) {
          var lT, MT, KT, OT, yT = TT.length,
            fT = tT(yT),
            xT = cT;
          for (KT = 0, lT = yT - 1; lT >= 0; --lT) KT = (OT = KT * xT + TT[lT]) - (MT = hT(OT / kT)) * kT, fT[lT] = 0 | MT;
          return [fT, 0 | KT]
        }

        function JT(TT, kT) {
          var lT, MT = iT(kT);
          if (OT) return [new IT(TT.value / MT.value), new IT(TT.value % MT.value)];
          var KT, AT = TT.value,
            NT = MT.value;
          if (0 === NT) throw new Error("Cannot divide by zero");
          if (TT.isSmall) return MT.isSmall ? [new xT(hT(AT / NT)), new xT(AT % NT)] : [yT[0], TT];
          if (MT.isSmall) {
            if (1 === NT) return [TT, yT[0]];
            if (-1 == NT) return [TT.rc(), yT[0]];
            var QT = Math.abs(NT);
            if (QT < cT) {
              KT = jT((lT = zT(AT, QT))[0]);
              var ST = lT[1];
              return TT.sign && (ST = -ST), "number" === typeof KT ? (TT.sign !== MT.sign && (KT = -KT), [new xT(KT), new xT(ST)]) : [new fT(KT, TT.sign !== MT.sign), new xT(ST)]
            }
            NT = CT(QT)
          }
          var aT = oT(AT, NT);
          if (-1 === aT) return [yT[0], TT];
          if (0 === aT) return [yT[TT.sign === MT.sign ? 1 : -1], yT[0]];
          lT = AT.length + NT.length <= 200 ? function(TT, kT) {
            var lT, MT, KT, OT, yT, fT, xT, IT = TT.length,
              AT = kT.length,
              CT = cT,
              vT = tT(kT.length),
              hT = kT[AT - 1],
              NT = Math.ceil(CT / (2 * hT)),
              QT = rT(TT, NT),
              ST = rT(kT, NT);
            for (QT.length <= IT && QT.push(0), ST.push(0), hT = ST[AT - 1], MT = IT - AT; MT >= 0; MT--) {
              for (lT = CT - 1, QT[MT + AT] !== hT && (lT = Math.floor((QT[MT + AT] * CT + QT[MT + AT - 1]) / hT)), KT = 0, OT = 0, fT = ST.length, yT = 0; yT < fT; yT++) KT += lT * ST[yT], xT = Math.floor(KT / CT), OT += QT[MT + yT] - (KT - xT * CT), KT = xT, OT < 0 ? (QT[MT + yT] = OT + CT, OT = -1) : (QT[MT + yT] = OT, OT = 0);
              for (; 0 !== OT;) {
                for (lT -= 1, KT = 0, yT = 0; yT < fT; yT++)(KT += QT[MT + yT] - CT + ST[yT]) < 0 ? (QT[MT + yT] = KT + CT, KT = 0) : (QT[MT + yT] = KT, KT = 1);
                OT += KT
              }
              vT[MT] = lT
            }
            return QT = zT(QT, NT)[0], [jT(vT), jT(QT)]
          }(AT, NT) : function(TT, kT) {
            for (var lT, MT, KT, OT, yT, fT = TT.length, xT = kT.length, IT = [], AT = [], CT = cT; fT;)
              if (AT.unshift(TT[--fT]), vT(AT), oT(AT, kT) < 0) IT.push(0);
              else {
                KT = AT[(MT = AT.length) - 1] * CT + AT[MT - 2], OT = kT[xT - 1] * CT + kT[xT - 2], MT > xT && (KT = (KT + 1) * CT), lT = Math.ceil(KT / OT);
                do {
                  if (oT(yT = rT(kT, lT), AT) <= 0) break;
                  lT--
                } while (lT);
                IT.push(lT), AT = DT(AT, yT)
              } return IT.reverse(), [jT(IT), jT(AT)]
          }(AT, NT), KT = lT[0];
          var FT = TT.sign !== MT.sign,
            PT = lT[1],
            wT = TT.sign;
          return "number" === typeof KT ? (FT && (KT = -KT), KT = new xT(KT)) : KT = new fT(KT, FT), "number" === typeof PT ? (wT && (PT = -PT), PT = new xT(PT)) : PT = new fT(PT, wT), [KT, PT]
        }

        function oT(TT, kT) {
          if (TT.length !== kT.length) return TT.length > kT.length ? 1 : -1;
          for (var cT = TT.length - 1; cT >= 0; cT--)
            if (TT[cT] !== kT[cT]) return TT[cT] > kT[cT] ? 1 : -1;
          return 0
        }

        function HT(TT) {
          var kT = TT.abs();
          return !kT.isUnit() && (!!(kT.equals(2) || kT.equals(3) || kT.equals(5)) || !(kT.isEven() || kT.isDivisibleBy(3) || kT.isDivisibleBy(5)) && (!!kT.lesser(49) || void 0))
        }

        function eT(TT, cT) {
          for (var lT, MT, KT, OT = TT.prev(), yT = OT, fT = 0; yT.isEven();) yT = yT.divide(2), fT++;
          TT: for (MT = 0; MT < cT.length; MT++)
            if (!TT.lesser(cT[MT]) && !(KT = kT(cT[MT]).modPow(yT, TT)).isUnit() && !KT.equals(OT)) {
              for (lT = fT - 1; 0 != lT; lT--) {
                if ((KT = KT.square().mod(TT)).isUnit()) return !1;
                if (KT.equals(OT)) continue TT
              }
              return !1
            }
          return !0
        }
        fT.prototype = Object.create(yT.prototype), xT.prototype = Object.create(yT.prototype), IT.prototype = Object.create(yT.prototype), fT.prototype.add = function(TT) {
          var kT = iT(TT);
          if (this.sign !== kT.sign) return this.subtract(kT.rc());
          var cT = this.value,
            lT = kT.value;
          return kT.isSmall ? new fT(ST(cT, Math.abs(lT)), this.sign) : new fT(QT(cT, lT), this.sign)
        }, fT.prototype.plus = fT.prototype.add, xT.prototype.add = function(TT) {
          var kT = iT(TT),
            cT = this.value;
          if (cT < 0 !== kT.sign) return this.subtract(kT.rc());
          var lT = kT.value;
          if (kT.isSmall) {
            if (AT(cT + lT)) return new xT(cT + lT);
            lT = CT(Math.abs(lT))
          }
          return new fT(ST(lT, Math.abs(cT)), cT < 0)
        }, xT.prototype.plus = xT.prototype.add, IT.prototype.add = function(TT) {
          return new IT(this.value + iT(TT).value)
        }, IT.prototype.plus = IT.prototype.add, fT.prototype.subtract = function(TT) {
          var kT = iT(TT);
          if (this.sign !== kT.sign) return this.add(kT.rc());
          var cT = this.value,
            lT = kT.value;
          return kT.isSmall ? aT(cT, Math.abs(lT), this.sign) : function(TT, kT, cT) {
            var lT;
            return oT(TT, kT) >= 0 ? lT = DT(TT, kT) : (lT = DT(kT, TT), cT = !cT), "number" === typeof(lT = jT(lT)) ? (cT && (lT = -lT), new xT(lT)) : new fT(lT, cT)
          }(cT, lT, this.sign)
        }, fT.prototype.minus = fT.prototype.subtract, xT.prototype.subtract = function(TT) {
          var kT = iT(TT),
            cT = this.value;
          if (cT < 0 !== kT.sign) return this.add(kT.rc());
          var lT = kT.value;
          return kT.isSmall ? new xT(cT - lT) : aT(lT, Math.abs(cT), cT >= 0)
        }, xT.prototype.minus = xT.prototype.subtract, IT.prototype.subtract = function(TT) {
          return new IT(this.value - iT(TT).value)
        }, IT.prototype.minus = IT.prototype.subtract, fT.prototype.rc = function() {
          return new fT(this.value, !this.sign)
        }, xT.prototype.rc = function() {
          var TT = this.sign,
            kT = new xT(-this.value);
          return kT.sign = !TT, kT
        }, IT.prototype.rc = function() {
          return new IT(-this.value)
        }, fT.prototype.abs = function() {
          return new fT(this.value, !1)
        }, xT.prototype.abs = function() {
          return new xT(Math.abs(this.value))
        }, IT.prototype.abs = function() {
          return new IT(this.value >= 0 ? this.value : -this.value)
        }, fT.prototype.multiply = function(TT) {
          var kT, lT, MT, KT = iT(TT),
            OT = this.value,
            xT = KT.value,
            IT = this.sign !== KT.sign;
          if (KT.isSmall) {
            if (0 === xT) return yT[0];
            if (1 === xT) return this;
            if (-1 === xT) return this.rc();
            if ((kT = Math.abs(xT)) < cT) return new fT(rT(OT, kT), IT);
            xT = CT(kT)
          }
          return lT = OT.length, MT = xT.length, new fT(-.012 * lT - .012 * MT + 15e-6 * lT * MT > 0 ? wT(OT, xT) : FT(OT, xT), IT)
        }, fT.prototype.times = fT.prototype.multiply, xT.prototype._multiplyBySmall = function(TT) {
          return AT(TT.value * this.value) ? new xT(TT.value * this.value) : mT(Math.abs(TT.value), CT(Math.abs(this.value)), this.sign !== TT.sign)
        }, fT.prototype._multiplyBySmall = function(TT) {
          return 0 === TT.value ? yT[0] : 1 === TT.value ? this : -1 === TT.value ? this.rc() : mT(Math.abs(TT.value), this.value, this.sign !== TT.sign)
        }, xT.prototype.multiply = function(TT) {
          return iT(TT)._multiplyBySmall(this)
        }, xT.prototype.times = xT.prototype.multiply, IT.prototype.multiply = function(TT) {
          return new IT(this.value * iT(TT).value)
        }, IT.prototype.times = IT.prototype.multiply, fT.prototype.square = function() {
          return new fT(bT(this.value), !1)
        }, xT.prototype.square = function() {
          var TT = this.value * this.value;
          return AT(TT) ? new xT(TT) : new fT(bT(CT(Math.abs(this.value))), !1)
        }, IT.prototype.square = function(TT) {
          return new IT(this.value * this.value)
        }, fT.prototype.divmod = function(TT) {
          var kT = JT(this, TT);
          return {
            quotient: kT[0],
            remainder: kT[1]
          }
        }, IT.prototype.divmod = xT.prototype.divmod = fT.prototype.divmod, fT.prototype.divide = function(TT) {
          return JT(this, TT)[0]
        }, IT.prototype.over = IT.prototype.divide = function(TT) {
          return new IT(this.value / iT(TT).value)
        }, xT.prototype.over = xT.prototype.divide = fT.prototype.over = fT.prototype.divide, fT.prototype.mod = function(TT) {
          return JT(this, TT)[1]
        }, IT.prototype.mod = IT.prototype.remainder = function(TT) {
          return new IT(this.value % iT(TT).value)
        }, xT.prototype.remainder = xT.prototype.mod = fT.prototype.remainder = fT.prototype.mod, fT.prototype.pow = function(TT) {
          var kT, cT, lT, MT = iT(TT),
            KT = this.value,
            OT = MT.value;
          if (0 === OT) return yT[1];
          if (0 === KT) return yT[0];
          if (1 === KT) return yT[1];
          if (-1 === KT) return MT.isEven() ? yT[1] : yT[-1];
          if (MT.sign) return yT[0];
          if (!MT.isSmall) throw new Error("The exponent " + MT.toString() + " is too large.");
          if (this.isSmall && AT(kT = Math.pow(KT, OT))) return new xT(hT(kT));
          for (cT = this, lT = yT[1]; !0 & OT && (lT = lT.times(cT), --OT), 0 !== OT;) OT /= 2, cT = cT.square();
          return lT
        }, xT.prototype.pow = fT.prototype.pow, IT.prototype.pow = function(TT) {
          var kT = iT(TT),
            cT = this.value,
            lT = kT.value,
            MT = BigInt(0),
            KT = BigInt(1),
            OT = BigInt(2);
          if (lT === MT) return yT[1];
          if (cT === MT) return yT[0];
          if (cT === KT) return yT[1];
          if (cT === BigInt(-1)) return kT.isEven() ? yT[1] : yT[-1];
          if (kT.isNegative()) return new IT(MT);
          for (var fT = this, xT = yT[1];
            (lT & KT) === KT && (xT = xT.times(fT), --lT), lT !== MT;) lT /= OT, fT = fT.square();
          return xT
        }, fT.prototype.modPow = function(TT, kT) {
          if (TT = iT(TT), (kT = iT(kT)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var cT = yT[1],
            lT = this.mod(kT);
          for (TT.isNegative() && (TT = TT.multiply(yT[-1]), lT = lT.modInv(kT)); TT.isPositive();) {
            if (lT.isZero()) return yT[0];
            TT.isOdd() && (cT = cT.multiply(lT).mod(kT)), TT = TT.divide(2), lT = lT.square().mod(kT)
          }
          return cT
        }, IT.prototype.modPow = xT.prototype.modPow = fT.prototype.modPow, fT.prototype.compareAbs = function(TT) {
          var kT = iT(TT),
            cT = this.value,
            lT = kT.value;
          return kT.isSmall ? 1 : oT(cT, lT)
        }, xT.prototype.compareAbs = function(TT) {
          var kT = iT(TT),
            cT = Math.abs(this.value),
            lT = kT.value;
          return kT.isSmall ? cT === (lT = Math.abs(lT)) ? 0 : cT > lT ? 1 : -1 : -1
        }, IT.prototype.compareAbs = function(TT) {
          var kT = this.value,
            cT = iT(TT).value;
          return (kT = kT >= 0 ? kT : -kT) === (cT = cT >= 0 ? cT : -cT) ? 0 : kT > cT ? 1 : -1
        }, fT.prototype.compare = function(TT) {
          if (TT === 1 / 0) return -1;
          if (TT === -1 / 0) return 1;
          var kT = iT(TT),
            cT = this.value,
            lT = kT.value;
          return this.sign !== kT.sign ? kT.sign ? 1 : -1 : kT.isSmall ? this.sign ? -1 : 1 : oT(cT, lT) * (this.sign ? -1 : 1)
        }, fT.prototype.compareTo = fT.prototype.compare, xT.prototype.compare = function(TT) {
          if (TT === 1 / 0) return -1;
          if (TT === -1 / 0) return 1;
          var kT = iT(TT),
            cT = this.value,
            lT = kT.value;
          return kT.isSmall ? cT == lT ? 0 : cT > lT ? 1 : -1 : cT < 0 !== kT.sign ? cT < 0 ? -1 : 1 : cT < 0 ? 1 : -1
        }, xT.prototype.compareTo = xT.prototype.compare, IT.prototype.compare = function(TT) {
          if (TT === 1 / 0) return -1;
          if (TT === -1 / 0) return 1;
          var kT = this.value,
            cT = iT(TT).value;
          return kT === cT ? 0 : kT > cT ? 1 : -1
        }, IT.prototype.compareTo = IT.prototype.compare, fT.prototype.equals = function(TT) {
          return 0 === this.compare(TT)
        }, IT.prototype.eq = IT.prototype.equals = xT.prototype.eq = xT.prototype.equals = fT.prototype.eq = fT.prototype.equals, fT.prototype.notEquals = function(TT) {
          return 0 !== this.compare(TT)
        }, IT.prototype.neq = IT.prototype.notEquals = xT.prototype.neq = xT.prototype.notEquals = fT.prototype.neq = fT.prototype.notEquals, fT.prototype.greater = function(TT) {
          return this.compare(TT) > 0
        }, IT.prototype.gt = IT.prototype.greater = xT.prototype.gt = xT.prototype.greater = fT.prototype.gt = fT.prototype.greater, fT.prototype.lesser = function(TT) {
          return this.compare(TT) < 0
        }, IT.prototype.lt = IT.prototype.lesser = xT.prototype.lt = xT.prototype.lesser = fT.prototype.lt = fT.prototype.lesser, fT.prototype.greaterOrEquals = function(TT) {
          return this.compare(TT) >= 0
        }, IT.prototype.geq = IT.prototype.greaterOrEquals = xT.prototype.geq = xT.prototype.greaterOrEquals = fT.prototype.geq = fT.prototype.greaterOrEquals, fT.prototype.lesserOrEquals = function(TT) {
          return this.compare(TT) <= 0
        }, IT.prototype.leq = IT.prototype.lesserOrEquals = xT.prototype.leq = xT.prototype.lesserOrEquals = fT.prototype.leq = fT.prototype.lesserOrEquals, fT.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, xT.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, IT.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, fT.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, xT.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, IT.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, fT.prototype.isPositive = function() {
          return !this.sign
        }, xT.prototype.isPositive = function() {
          return this.value > 0
        }, IT.prototype.isPositive = xT.prototype.isPositive, fT.prototype.isNegative = function() {
          return this.sign
        }, xT.prototype.isNegative = function() {
          return this.value < 0
        }, IT.prototype.isNegative = xT.prototype.isNegative, fT.prototype.isUnit = function() {
          return !1
        }, xT.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, IT.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, fT.prototype.isZero = function() {
          return !1
        }, xT.prototype.isZero = function() {
          return 0 === this.value
        }, IT.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, fT.prototype.isDivisibleBy = function(TT) {
          var kT = iT(TT);
          return !kT.isZero() && (!!kT.isUnit() || (0 === kT.compareAbs(2) ? this.isEven() : this.mod(kT).isZero()))
        }, IT.prototype.isDivisibleBy = xT.prototype.isDivisibleBy = fT.prototype.isDivisibleBy, fT.prototype.isPrime = function(cT) {
          var lT = HT(this);
          if (lT !== TT) return lT;
          var MT = this.abs(),
            KT = MT.bitLength();
          if (KT <= 64) return eT(MT, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var OT = Math.log(2) * KT.toJSNumber(), yT = Math.ceil(!0 === cT ? 2 * Math.pow(OT, 2) : OT), fT = [], xT = 0; xT < yT; xT++) fT.push(kT(xT + 2));
          return eT(MT, fT)
        }, IT.prototype.isPrime = xT.prototype.isPrime = fT.prototype.isPrime, fT.prototype.isProbablePrime = function(cT, lT) {
          var MT = HT(this);
          if (MT !== TT) return MT;
          for (var KT = this.abs(), OT = cT === TT ? 5 : cT, yT = [], fT = 0; fT < OT; fT++) yT.push(kT.randBetween(2, KT.minus(2), lT));
          return eT(KT, yT)
        }, IT.prototype.isProbablePrime = xT.prototype.isProbablePrime = fT.prototype.isProbablePrime, fT.prototype.modInv = function(TT) {
          for (var cT, lT, MT, KT = kT.zero, OT = kT.one, yT = iT(TT), fT = this.abs(); !fT.isZero();) cT = yT.divide(fT), lT = KT, MT = yT, KT = OT, yT = fT, OT = lT.subtract(cT.multiply(OT)), fT = MT.subtract(cT.multiply(fT));
          if (!yT.isUnit()) throw new Error(this.toString() + " and " + TT.toString() + " are not co-prime");
          return -1 === KT.compare(0) && (KT = KT.add(TT)), this.isNegative() ? KT.rc() : KT
        }, IT.prototype.modInv = xT.prototype.modInv = fT.prototype.modInv, fT.prototype.next = function() {
          var TT = this.value;
          return this.sign ? aT(TT, 1, this.sign) : new fT(ST(TT, 1), this.sign)
        }, xT.prototype.next = function() {
          var TT = this.value;
          return TT + 1 < lT ? new xT(TT + 1) : new fT(MT, !1)
        }, IT.prototype.next = function() {
          return new IT(this.value + BigInt(1))
        }, fT.prototype.prev = function() {
          var TT = this.value;
          return this.sign ? new fT(ST(TT, 1), !0) : aT(TT, 1, this.sign)
        }, xT.prototype.prev = function() {
          var TT = this.value;
          return TT - 1 > -lT ? new xT(TT - 1) : new fT(MT, !0)
        }, IT.prototype.prev = function() {
          return new IT(this.value - BigInt(1))
        };
        for (var GT = [1]; 2 * GT[GT.length - 1] <= cT;) GT.push(2 * GT[GT.length - 1]);
        var VT = GT.length,
          ET = GT[VT - 1];

        function ZT(TT) {
          return Math.abs(TT) <= cT
        }

        function uT(TT, cT, lT) {
          cT = iT(cT);
          for (var MT = TT.isNegative(), KT = cT.isNegative(), OT = MT ? TT.not() : TT, yT = KT ? cT.not() : cT, fT = 0, xT = 0, IT = null, AT = null, CT = []; !OT.isZero() || !yT.isZero();) fT = (IT = JT(OT, ET))[1].toJSNumber(), MT && (fT = ET - 1 - fT), xT = (AT = JT(yT, ET))[1].toJSNumber(), KT && (xT = ET - 1 - xT), OT = IT[0], yT = AT[0], CT.push(lT(fT, xT));
          for (var jT = 0 !== lT(MT ? 1 : 0, KT ? 1 : 0) ? kT(-1) : kT(0), vT = CT.length - 1; vT >= 0; vT -= 1) jT = jT.multiply(ET).add(kT(CT[vT]));
          return jT
        }
        fT.prototype.shiftLeft = function(TT) {
          var kT = iT(TT).toJSNumber();
          if (!ZT(kT)) throw new Error(String(kT) + " is too large for shifting.");
          if (kT < 0) return this.shiftRight(-kT);
          var cT = this;
          if (cT.isZero()) return cT;
          for (; kT >= VT;) cT = cT.multiply(ET), kT -= VT - 1;
          return cT.multiply(GT[kT])
        }, IT.prototype.shiftLeft = xT.prototype.shiftLeft = fT.prototype.shiftLeft, fT.prototype.shiftRight = function(TT) {
          var kT, cT = iT(TT).toJSNumber();
          if (!ZT(cT)) throw new Error(String(cT) + " is too large for shifting.");
          if (cT < 0) return this.shiftLeft(-cT);
          for (var lT = this; cT >= VT;) {
            if (lT.isZero() || lT.isNegative() && lT.isUnit()) return lT;
            lT = (kT = JT(lT, ET))[1].isNegative() ? kT[0].prev() : kT[0], cT -= VT - 1
          }
          return (kT = JT(lT, GT[cT]))[1].isNegative() ? kT[0].prev() : kT[0]
        }, IT.prototype.shiftRight = xT.prototype.shiftRight = fT.prototype.shiftRight, fT.prototype.not = function() {
          return this.rc().prev()
        }, IT.prototype.not = xT.prototype.not = fT.prototype.not, fT.prototype.and = function(TT) {
          return uT(this, TT, (function(TT, kT) {
            return TT & kT
          }))
        }, IT.prototype.and = xT.prototype.and = fT.prototype.and, fT.prototype.or = function(TT) {
          return uT(this, TT, (function(TT, kT) {
            return TT | kT
          }))
        }, IT.prototype.or = xT.prototype.or = fT.prototype.or, fT.prototype.xor = function(TT) {
          return uT(this, TT, (function(TT, kT) {
            return TT ^ kT
          }))
        }, IT.prototype.xor = xT.prototype.xor = fT.prototype.xor;
        var XT = 1 << 30;

        function dT(TT) {
          var kT = TT.value,
            lT = "number" === typeof kT ? kT | XT : "bigint" === typeof kT ? kT | BigInt(XT) : kT[0] + kT[1] * cT | 1073758208;
          return lT & -lT
        }

        function LT(TT, cT) {
          if (cT.compareTo(TT) <= 0) {
            var lT = LT(TT, cT.square(cT)),
              MT = lT.p,
              KT = lT.e,
              OT = MT.multiply(cT);
            return OT.compareTo(TT) <= 0 ? {
              p: OT,
              e: 2 * KT + 1
            } : {
              p: MT,
              e: 2 * KT
            }
          }
          return {
            p: kT(1),
            e: 0
          }
        }

        function RT(TT, kT) {
          return TT = iT(TT), kT = iT(kT), TT.greater(kT) ? TT : kT
        }

        function gT(TT, kT) {
          return TT = iT(TT), kT = iT(kT), TT.lesser(kT) ? TT : kT
        }

        function UT(TT, kT) {
          if (TT = iT(TT).abs(), kT = iT(kT).abs(), TT.equals(kT)) return TT;
          if (TT.isZero()) return kT;
          if (kT.isZero()) return TT;
          for (var cT, lT, MT = yT[1]; TT.isEven() && kT.isEven();) cT = gT(dT(TT), dT(kT)), TT = TT.divide(cT), kT = kT.divide(cT), MT = MT.multiply(cT);
          for (; TT.isEven();) TT = TT.divide(dT(TT));
          do {
            for (; kT.isEven();) kT = kT.divide(dT(kT));
            TT.greater(kT) && (lT = kT, kT = TT, TT = lT), kT = kT.subtract(TT)
          } while (!kT.isZero());
          return MT.isUnit() ? TT : TT.multiply(MT)
        }
        fT.prototype.bitLength = function() {
          var TT = this;
          return TT.compareTo(kT(0)) < 0 && (TT = TT.rc().subtract(kT(1))), 0 === TT.compareTo(kT(0)) ? kT(0) : kT(LT(TT, kT(2)).e).add(kT(1))
        }, IT.prototype.bitLength = xT.prototype.bitLength = fT.prototype.bitLength;
        var YT = function(TT, kT, cT, lT) {
          cT = cT || KT, TT = String(TT), lT || (TT = TT.toLowerCase(), cT = cT.toLowerCase());
          var MT, OT = TT.length,
            yT = Math.abs(kT),
            fT = {};
          for (MT = 0; MT < cT.length; MT++) fT[cT[MT]] = MT;
          for (MT = 0; MT < OT; MT++) {
            if ("-" !== (AT = TT[MT]) && (AT in fT && fT[AT] >= yT)) {
              if ("1" === AT && 1 === yT) continue;
              throw new Error(AT + " is not a valid digit in base " + kT + ".")
            }
          }
          kT = iT(kT);
          var xT = [],
            IT = "-" === TT[0];
          for (MT = IT ? 1 : 0; MT < TT.length; MT++) {
            var AT;
            if ((AT = TT[MT]) in fT) xT.push(iT(fT[AT]));
            else {
              if ("<" !== AT) throw new Error(AT + " is not a valid character");
              var CT = MT;
              do {
                MT++
              } while (">" !== TT[MT] && MT < TT.length);
              xT.push(iT(TT.slice(CT + 1, MT)))
            }
          }
          return BT(xT, kT, IT)
        };

        function BT(TT, kT, cT) {
          var lT, MT = yT[0],
            KT = yT[1];
          for (lT = TT.length - 1; lT >= 0; lT--) MT = MT.add(TT[lT].times(KT)), KT = KT.times(kT);
          return cT ? MT.rc() : MT
        }

        function WT(TT, cT) {
          if ((cT = kT(cT)).isZero()) {
            if (TT.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (cT.equals(-1)) {
            if (TT.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (TT.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-TT.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var lT = Array.apply(null, Array(TT.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return lT.unshift([1]), {
              value: [].concat.apply([], lT),
              isNegative: !1
            }
          }
          var MT = !1;
          if (TT.isNegative() && cT.isPositive() && (MT = !0, TT = TT.abs()), cT.isUnit()) return TT.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(TT.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: MT
          };
          for (var KT, OT = [], yT = TT; yT.isNegative() || yT.compareAbs(cT) >= 0;) {
            KT = yT.divmod(cT), yT = KT.quotient;
            var fT = KT.remainder;
            fT.isNegative() && (fT = cT.minus(fT).abs(), yT = yT.next()), OT.push(fT.toJSNumber())
          }
          return OT.push(yT.toJSNumber()), {
            value: OT.reverse(),
            isNegative: MT
          }
        }

        function nT(TT, kT, cT) {
          var lT = WT(TT, kT);
          return (lT.isNegative ? "-" : "") + lT.value.map((function(TT) {
            return function(TT, kT) {
              return TT < (kT = kT || KT).length ? kT[TT] : "<" + TT + ">"
            }(TT, cT)
          })).join("")
        }

        function pT(TT) {
          if (AT(+TT)) {
            var kT = +TT;
            if (kT === hT(kT)) return OT ? new IT(BigInt(kT)) : new xT(kT);
            throw new Error("Invalid integer: " + TT)
          }
          var cT = "-" === TT[0];
          cT && (TT = TT.slice(1));
          var lT = TT.split(/e/i);
          if (lT.length > 2) throw new Error("Invalid integer: " + lT.join("e"));
          if (2 === lT.length) {
            var MT = lT[1];
            if ("+" === MT[0] && (MT = MT.slice(1)), (MT = +MT) !== hT(MT) || !AT(MT)) throw new Error("Invalid integer: " + MT + " is not a valid exponent.");
            var KT = lT[0],
              yT = KT.indexOf(".");
            if (yT >= 0 && (MT -= KT.length - yT - 1, KT = KT.slice(0, yT) + KT.slice(yT + 1)), MT < 0) throw new Error("Cannot include negative exponent part for integers");
            TT = KT += new Array(MT + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(TT)) throw new Error("Invalid integer: " + TT);
          if (OT) return new IT(BigInt(cT ? "-" + TT : TT));
          for (var CT = [], jT = TT.length, tT = jT - 7; jT > 0;) CT.push(+TT.slice(tT, jT)), (tT -= 7) < 0 && (tT = 0), jT -= 7;
          return vT(CT), new fT(CT, cT)
        }

        function iT(TT) {
          return "number" === typeof TT ? function(TT) {
            if (OT) return new IT(BigInt(TT));
            if (AT(TT)) {
              if (TT !== hT(TT)) throw new Error(TT + " is not an integer.");
              return new xT(TT)
            }
            return pT(TT.toString())
          }(TT) : "string" === typeof TT ? pT(TT) : "bigint" === typeof TT ? new IT(TT) : TT
        }
        fT.prototype.toArray = function(TT) {
          return WT(this, TT)
        }, xT.prototype.toArray = function(TT) {
          return WT(this, TT)
        }, IT.prototype.toArray = function(TT) {
          return WT(this, TT)
        }, fT.prototype.toString = function(kT, cT) {
          if (kT === TT && (kT = 10), 10 !== kT) return nT(this, kT, cT);
          for (var lT, MT = this.value, KT = MT.length, OT = String(MT[--KT]); --KT >= 0;) lT = String(MT[KT]), OT += "0000000".slice(lT.length) + lT;
          return (this.sign ? "-" : "") + OT
        }, xT.prototype.toString = function(kT, cT) {
          return kT === TT && (kT = 10), 10 != kT ? nT(this, kT, cT) : String(this.value)
        }, IT.prototype.toString = xT.prototype.toString, IT.prototype.toJSON = fT.prototype.toJSON = xT.prototype.toJSON = function() {
          return this.toString()
        }, fT.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, fT.prototype.toJSNumber = fT.prototype.valueOf, xT.prototype.valueOf = function() {
          return this.value
        }, xT.prototype.toJSNumber = xT.prototype.valueOf, IT.prototype.valueOf = IT.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var qT = 0; qT < 1e3; qT++) yT[qT] = iT(qT), qT > 0 && (yT[-qT] = iT(-qT));
        return yT.one = yT[1], yT.zero = yT[0], yT.minusOne = yT[-1], yT.max = RT, yT.min = gT, yT.gcd = UT, yT.lcm = function(TT, kT) {
          return TT = iT(TT).abs(), kT = iT(kT).abs(), TT.divide(UT(TT, kT)).multiply(kT)
        }, yT.isInstance = function(TT) {
          return TT instanceof fT || TT instanceof xT || TT instanceof IT
        }, yT.randBetween = function(TT, kT, lT) {
          TT = iT(TT), kT = iT(kT);
          var MT = lT || Math.random,
            KT = gT(TT, kT),
            OT = RT(TT, kT).subtract(KT).add(1);
          if (OT.isSmall) return KT.add(Math.floor(MT() * OT));
          for (var fT = WT(OT, cT).value, xT = [], IT = !0, AT = 0; AT < fT.length; AT++) {
            var CT = IT ? fT[AT] : cT,
              jT = hT(MT() * CT);
            xT.push(jT), jT < CT && (IT = !1)
          }
          return KT.add(yT.xkT(xT, cT, !1))
        }, yT.xkT = function(TT, kT, cT) {
          return BT(TT.map(iT), iT(kT || 10), cT)
        }, yT
      }();
      TT.hasOwnProperty("exports") && (TT.exports = kT)
    }(Sc);
    var Dc = KT(Sc.exports);

    function ac(TT, kT, cT) {
      let lT = 0;
      for (let MT = 0; MT < cT; MT++) {
        const cT = TT[kT + MT];
        if (void 0 === cT) break;
        lT += cT * 16 ** MT
      }
      return lT
    }

    function Fc(TT) {
      const kT = [];
      for (let cT = 0; cT < TT.length; cT++) {
        let lT = Number(TT[cT]);
        for (let TT = 0; lT || TT < kT.length; TT++) lT += 10 * (kT[TT] || 0), kT[TT] = lT % 16, lT = (lT - kT[TT]) / 16
      }
      return kT
    }
    class rc {
      static fromString(TT) {
        return new rc(function(TT) {
          const kT = Fc(TT),
            cT = Array(4);
          for (let lT = 0; lT < 4; lT++) cT[3 - lT] = ac(kT, 4 * lT, 4);
          return cT
        }(TT), TT)
      }
      static fromBit(TT) {
        const kT = Array(4),
          cT = Math.floor(TT / 16);
        for (let lT = 0; lT < 4; lT++) kT[3 - lT] = lT === cT ? 1 << TT - 16 * cT : 0;
        return new rc(kT)
      }
      constructor(TT, kT) {
        this.parts = TT, this.str = kT
      }
      and(TT) {
        let {
          parts: kT
        } = TT;
        return new rc(this.parts.map(((TT, cT) => TT & kT[cT])))
      }
      or(TT) {
        let {
          parts: kT
        } = TT;
        return new rc(this.parts.map(((TT, cT) => TT | kT[cT])))
      }
      xor(TT) {
        let {
          parts: kT
        } = TT;
        return new rc(this.parts.map(((TT, cT) => TT ^ kT[cT])))
      }
      not() {
        return new rc(this.parts.map((TT => ~TT)))
      }
      equals(TT) {
        let {
          parts: kT
        } = TT;
        return this.parts.every(((TT, cT) => TT === kT[cT]))
      }
      toString() {
        if (null != this.str) return this.str;
        const TT = new Array(16);
        return this.parts.forEach(((kT, cT) => {
          const lT = Fc(kT.toString());
          for (let MT = 0; MT < 4; MT++) TT[MT + 4 * cT] = lT[3 - MT] || 0
        })), this.str = Dc.xkT(TT, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Pc = function() {
      try {
        return BigInt, !0
      } catch (TT) {
        return !1
      }
    }();
    Pc && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const wc = {},
      mc = Pc ? function(TT) {
        return BigInt(TT)
      } : function(TT) {
        return TT instanceof rc ? TT : ("number" === typeof TT && (TT = TT.toString()), null != wc[TT] || (wc[TT] = rc.fromString(TT)), wc[TT])
      },
      bc = mc(0),
      zc = Pc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc)
      } : function() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc).and(TT)
      },
      Jc = Pc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc)
      } : function() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc).or(TT)
      },
      oc = Pc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc)
      } : function() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc).xor(TT)
      },
      Hc = Pc ? function(TT, kT) {
        return TT === kT
      } : function(TT, kT) {
        return null == TT || null == kT ? TT == kT : TT.equals(kT)
      };
    var ec, Gc, Vc, Ec, Zc = {
      combine: function() {
        let TT = arguments.length <= 0 ? void 0 : arguments[0];
        for (let kT = 1; kT < arguments.length; kT++) TT = Jc(TT, kT < 0 || arguments.length <= kT ? void 0 : arguments[kT]);
        return TT
      },
      add: function(TT, kT) {
        return kT === bc ? TT : Jc(TT, kT)
      },
      remove: function(TT, kT) {
        return kT === bc ? TT : oc(TT, zc(TT, kT))
      },
      filter: zc,
      invert: Pc ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bc).not()
      },
      has: function(TT, kT) {
        return Hc(zc(TT, kT), kT)
      },
      hasAny: function(TT, kT) {
        return !Hc(zc(TT, kT), bc)
      },
      equals: Hc,
      deserialize: mc,
      getFlag: Pc ? function(TT) {
        return BigInt(1) << BigInt(TT)
      } : function(TT) {
        return rc.fromBit(TT)
      }
    };
    ! function(TT) {
      TT[TT.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", TT[TT.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", TT[TT.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", TT[TT.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", TT[TT.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", TT[TT.RATELIMITED = 4002] = "RATELIMITED", TT[TT.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", TT[TT.INVALID_VERSION = 4004] = "INVALID_VERSION", TT[TT.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(ec || (ec = {})),
    function(TT) {
      TT[TT.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", TT[TT.INVALID_COMMAND = 4002] = "INVALID_COMMAND", TT[TT.INVALID_EVENT = 4004] = "INVALID_EVENT", TT[TT.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Gc || (Gc = {})),
    function(TT) {
      TT.LANDSCAPE = "landscape", TT.PORTRAIT = "portrait"
    }(Vc || (Vc = {})),
    function(TT) {
      TT.MOBILE = "mobile", TT.DESKTOP = "desktop"
    }(Ec || (Ec = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Zc.getFlag(0),
      ADMINISTRATOR: Zc.getFlag(3)
    });

    function uc(TT) {
      return vc((kT => {
        var cT;
        const [lT] = null !== (cT = Object.entries(TT).find((TT => {
          let [, cT] = TT;
          return cT === kT
        }))) && void 0 !== cT ? cT : [];
        return null != kT && void 0 === lT ? TT.UNHANDLED : kT
      }), Vk().or(Ek()))
    }
    const Xc = Qc.object({
        image_url: Qc.string()
      }),
      dc = Qc.object({
        mediaUrl: Qc.string().max(1024)
      }),
      Lc = Qc.object({
        access_token: Qc.union([Qc.string(), Qc.null()]).optional()
      }),
      Rc = Qc.object({
        access_token: Qc.string(),
        user: Qc.object({
          username: Qc.string(),
          discriminator: Qc.string(),
          id: Qc.string(),
          avatar: Qc.union([Qc.string(), Qc.null()]).optional(),
          public_flags: Qc.number(),
          global_name: Qc.union([Qc.string(), Qc.null()]).optional()
        }),
        scopes: Qc.array(function(TT) {
          const kT = Hk().transform((kT => {
            const cT = TT.safeParse(kT);
            return cT.success ? cT.data : TT._def.defaultValue()
          }));
          return kT.overlayType = TT, kT
        }(Qc.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Qc.literal(-1)).default(-1))),
        expires: Qc.string(),
        application: Qc.object({
          description: Qc.string(),
          icon: Qc.union([Qc.string(), Qc.null()]).optional(),
          id: Qc.string(),
          rpc_origins: Qc.array(Qc.string()).optional(),
          name: Qc.string()
        })
      }),
      gc = Qc.object({
        participants: Qc.array(Qc.object({
          id: Qc.string(),
          username: Qc.string(),
          global_name: Qc.union([Qc.string(), Qc.null()]).optional(),
          discriminator: Qc.string(),
          avatar: Qc.union([Qc.string(), Qc.null()]).optional(),
          flags: Qc.number(),
          bot: Qc.boolean(),
          avatar_decoration_data: Qc.union([Qc.object({
            asset: Qc.string(),
            skuId: Qc.string().optional()
          }), Qc.null()]).optional(),
          premium_type: Qc.union([Qc.number(), Qc.null()]).optional(),
          nickname: Qc.string().optional()
        }))
      });
    var Uc;
    ! function(TT) {
      TT.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", TT.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", TT.AUTHENTICATE = "AUTHENTICATE", TT.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Uc || (Uc = {}));
    const Yc = Qc.object({}).optional().nullable(),
      Bc = Qc.void(),
      Wc = {
        [Uc.INITIATE_IMAGE_UPLOAD]: {
          request: Bc,
          response: Xc
        },
        [Uc.OPEN_SHARE_MOMENT_DIALOG]: {
          request: dc,
          response: Yc
        },
        [Uc.AUTHENTICATE]: {
          request: Lc,
          response: Rc
        },
        [Uc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Bc,
          response: gc
        }
      },
      nc = "DISPATCH";
    var pc;
    ! function(TT) {
      TT.AUTHORIZE = "AUTHORIZE", TT.AUTHENTICATE = "AUTHENTICATE", TT.GET_GUILDS = "GET_GUILDS", TT.GET_GUILD = "GET_GUILD", TT.GET_CHANNEL = "GET_CHANNEL", TT.GET_CHANNELS = "GET_CHANNELS", TT.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", TT.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", TT.SUBSCRIBE = "SUBSCRIBE", TT.UNSUBSCRIBE = "UNSUBSCRIBE", TT.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", TT.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", TT.SET_ACTIVITY = "SET_ACTIVITY", TT.GET_SKUS = "GET_SKUS", TT.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", TT.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", TT.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", TT.START_PURCHASE = "START_PURCHASE", TT.SET_CONFIG = "SET_CONFIG", TT.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", TT.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", TT.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", TT.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", TT.CAPTURE_LOG = "CAPTURE_LOG", TT.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", TT.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", TT.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", TT.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", TT.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", TT.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", TT.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(pc || (pc = {}));
    const ic = pk({
        cmd: Vk(),
        data: Yk(),
        evt: gk(),
        nonce: Vk()
      }).passthrough(),
      qc = (uc(Object.assign(Object.assign({}, Rc.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), pk({
        id: Vk(),
        username: Vk(),
        discriminator: Vk(),
        global_name: Vk().optional().nullable(),
        avatar: Vk().optional().nullable(),
        avatar_decoration_data: pk({
          asset: Vk(),
          sku_id: Vk().optional()
        }).nullable(),
        bot: Xk(),
        flags: Ek().optional().nullable(),
        premium_type: Ek().optional().nullable()
      })),
      sc = pk({
        user: qc,
        nick: Vk().optional().nullable(),
        roles: nk(Vk()),
        joined_at: Vk(),
        deaf: Xk(),
        mute: Xk()
      }),
      Tl = pk({
        id: Vk(),
        name: Vk().optional().nullable(),
        roles: nk(Vk()).optional().nullable(),
        user: qc.optional().nullable(),
        require_colons: Xk().optional().nullable(),
        managed: Xk().optional().nullable(),
        animated: Xk().optional().nullable(),
        available: Xk().optional().nullable()
      }),
      kl = pk({
        mute: Xk(),
        deaf: Xk(),
        self_mute: Xk(),
        self_deaf: Xk(),
        suppress: Xk()
      }),
      cl = pk({
        mute: Xk(),
        nick: Vk(),
        user: qc,
        voice_state: kl,
        volume: Ek()
      }),
      ll = uc({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      Ml = pk({
        name: Vk(),
        type: Ek(),
        url: Vk().optional().nullable(),
        created_at: Ek().optional().nullable(),
        timestamps: pk({
          start: Ek(),
          end: Ek()
        }).partial().optional().nullable(),
        application_id: Vk().optional().nullable(),
        details: Vk().optional().nullable(),
        state: Vk().optional().nullable(),
        emoji: Tl.optional().nullable(),
        party: pk({
          id: Vk().optional().nullable(),
          size: nk(Ek()).optional().nullable()
        }).optional().nullable(),
        assets: pk({
          large_image: Vk().nullable(),
          large_text: Vk().nullable(),
          small_image: Vk().nullable(),
          small_text: Vk().nullable()
        }).partial().optional().nullable(),
        secrets: pk({
          join: Vk(),
          match: Vk()
        }).partial().optional().nullable(),
        instance: Xk().optional().nullable(),
        flags: Ek().optional().nullable()
      }),
      Kl = pk({
        id: Vk(),
        type: uc({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Vk(),
        deny: Vk()
      }),
      Ol = {
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
      yl = pk({
        id: Vk(),
        type: uc(Ol),
        guild_id: Vk().optional().nullable(),
        position: Ek().optional().nullable(),
        permission_overwrites: nk(Kl).optional().nullable(),
        name: Vk().optional().nullable(),
        topic: Vk().optional().nullable(),
        nsfw: Xk().optional().nullable(),
        last_message_id: Vk().optional().nullable(),
        bitrate: Ek().optional().nullable(),
        user_limit: Ek().optional().nullable(),
        rate_limit_per_user: Ek().optional().nullable(),
        recipients: nk(qc).optional().nullable(),
        icon: Vk().optional().nullable(),
        owner_id: Vk().optional().nullable(),
        application_id: Vk().optional().nullable(),
        parent_id: Vk().optional().nullable(),
        last_pin_timestamp: Vk().optional().nullable()
      }),
      fl = pk({
        user: qc,
        guild_id: Vk(),
        status: ll,
        activities: nk(Ml),
        client_status: pk({
          desktop: ll,
          mobile: ll,
          web: ll
        }).partial()
      }),
      xl = pk({
        id: Vk(),
        name: Vk(),
        color: Ek(),
        hoist: Xk(),
        position: Ek(),
        permissions: Vk(),
        managed: Xk(),
        mentionable: Xk()
      }),
      Il = (pk({
        id: Vk(),
        name: Vk(),
        owner_id: Vk(),
        icon: Vk().nullable(),
        icon_hash: Vk().optional().nullable(),
        splash: Vk().nullable(),
        discovery_splash: Vk().nullable(),
        owner: Xk().optional().nullable(),
        permissions: Vk().optional().nullable(),
        region: Vk(),
        afk_channel_id: Vk().nullable(),
        afk_timeout: Ek(),
        widget_enabled: Xk().optional().nullable(),
        widget_channel_id: Vk().optional().nullable(),
        verification_level: Ek(),
        default_message_notifications: Ek(),
        explicit_content_filter: Ek(),
        roles: nk(xl),
        emojis: nk(Tl),
        features: nk(Vk()),
        mfa_level: Ek(),
        application_id: Vk().nullable(),
        system_channel_id: Vk().nullable(),
        system_channel_flags: Ek(),
        rules_channel_id: Vk().nullable(),
        joined_at: Vk().optional().nullable(),
        large: Xk().optional().nullable(),
        unavailable: Xk().optional().nullable(),
        member_count: Ek().optional().nullable(),
        voice_states: nk(kl).optional().nullable(),
        members: nk(sc).optional().nullable(),
        channels: nk(yl).optional().nullable(),
        presences: nk(fl).optional().nullable(),
        max_presences: Ek().optional().nullable(),
        max_members: Ek().optional().nullable(),
        vanity_url_code: Vk().nullable(),
        description: Vk().nullable(),
        banner: Vk().nullable(),
        premium_tier: Ek(),
        premium_subscription_count: Ek().optional().nullable(),
        preferred_locale: Vk(),
        public_updates_channel_id: Vk().nullable(),
        max_video_channel_users: Ek().optional().nullable(),
        approximate_member_count: Ek().optional().nullable(),
        approximate_presence_count: Ek().optional().nullable()
      }), pk({
        id: Vk(),
        guild_id: Vk(),
        type: Ek(),
        name: Vk()
      })),
      Al = pk({
        id: Vk(),
        filename: Vk(),
        size: Ek(),
        url: Vk(),
        proxy_url: Vk(),
        height: Ek().optional().nullable(),
        width: Ek().optional().nullable()
      }),
      Cl = pk({
        text: Vk(),
        icon_url: Vk().optional().nullable(),
        proxy_icon_url: Vk().optional().nullable()
      }),
      jl = pk({
        url: Vk().optional().nullable(),
        proxy_url: Vk().optional().nullable(),
        height: Ek().optional().nullable(),
        width: Ek().optional().nullable()
      }),
      vl = jl.omit({
        proxy_url: !0
      }),
      tl = pk({
        name: Vk().optional().nullable(),
        url: Vk().optional().nullable()
      }),
      hl = pk({
        name: Vk().optional().nullable(),
        url: Vk().optional().nullable(),
        icon_url: Vk().optional().nullable(),
        proxy_icon_url: Vk().optional().nullable()
      }),
      Nl = pk({
        name: Vk(),
        value: Vk(),
        inline: Xk()
      }),
      Ql = pk({
        title: Vk().optional().nullable(),
        type: Vk().optional().nullable(),
        description: Vk().optional().nullable(),
        url: Vk().optional().nullable(),
        timestamp: Vk().optional().nullable(),
        color: Ek().optional().nullable(),
        footer: Cl.optional().nullable(),
        image: jl.optional().nullable(),
        thumbnail: jl.optional().nullable(),
        video: vl.optional().nullable(),
        provider: tl.optional().nullable(),
        author: hl.optional().nullable(),
        fields: nk(Nl).optional().nullable()
      }),
      Sl = pk({
        count: Ek(),
        me: Xk(),
        emoji: Tl
      }),
      Dl = pk({
        type: Ek(),
        party_id: Vk().optional().nullable()
      }),
      al = pk({
        id: Vk(),
        cover_image: Vk().optional().nullable(),
        description: Vk(),
        icon: Vk().optional().nullable(),
        name: Vk()
      }),
      Fl = pk({
        message_id: Vk().optional().nullable(),
        channel_id: Vk().optional().nullable(),
        guild_id: Vk().optional().nullable()
      }),
      rl = pk({
        id: Vk(),
        channel_id: Vk(),
        guild_id: Vk().optional().nullable(),
        author: qc.optional().nullable(),
        member: sc.optional().nullable(),
        content: Vk(),
        timestamp: Vk(),
        edited_timestamp: Vk().optional().nullable(),
        tts: Xk(),
        mention_everyone: Xk(),
        mentions: nk(qc),
        mention_roles: nk(Vk()),
        mention_channels: nk(Il),
        attachments: nk(Al),
        embeds: nk(Ql),
        reactions: nk(Sl).optional().nullable(),
        nonce: qk([Vk(), Ek()]).optional().nullable(),
        pinned: Xk(),
        webhook_id: Vk().optional().nullable(),
        type: Ek(),
        activity: Dl.optional().nullable(),
        application: al.optional().nullable(),
        message_reference: Fl.optional().nullable(),
        flags: Ek().optional().nullable(),
        stickers: nk(Yk()).optional().nullable(),
        referenced_message: Yk().optional().nullable()
      }),
      Pl = pk({
        id: Vk(),
        name: Vk()
      }),
      wl = pk({
        type: uc({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Ek(),
        name: Vk()
      }),
      ml = pk({
        type: uc({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Xk(),
        threshold: Ek(),
        shortcut: nk(wl),
        delay: Ek()
      }),
      bl = pk({
        device_id: Vk(),
        volume: Ek(),
        available_devices: nk(Pl)
      }),
      zl = (pk({
        type: uc({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Vk(),
        vendor: pk({
          name: Vk(),
          url: Vk()
        }),
        model: pk({
          name: Vk(),
          url: Vk()
        }),
        related: nk(Vk()),
        echo_cancellation: Xk().optional().nullable(),
        noise_suppression: Xk().optional().nullable(),
        automatic_gain_control: Xk().optional().nullable(),
        hardware_mute: Xk().optional().nullable()
      }), pk({
        id: Vk(),
        name: Vk(),
        type: uc({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: pk({
          amount: Ek(),
          currency: Vk()
        }),
        application_id: Vk(),
        flags: Ek(),
        release_date: Vk().nullable()
      })),
      Jl = pk({
        id: Vk(),
        sku_id: Vk(),
        application_id: Vk(),
        user_id: Vk(),
        gift_code_flags: Ek(),
        type: uc({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Vk().optional().nullable(),
        branches: nk(Vk()).optional().nullable(),
        starts_at: Vk().optional().nullable(),
        ends_at: Vk().optional().nullable(),
        parent_id: Vk().optional().nullable(),
        consumed: Xk().optional().nullable(),
        deleted: Xk().optional().nullable(),
        gift_code_batch_id: Vk().optional().nullable()
      }),
      ol = (uc({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), uc({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Hl = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      el = (uc(Hl), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Gl = (uc(el), "ERROR");
    var Vl;
    ! function(TT) {
      TT.READY = "READY", TT.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", TT.SPEAKING_START = "SPEAKING_START", TT.SPEAKING_STOP = "SPEAKING_STOP", TT.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", TT.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", TT.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", TT.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", TT.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", TT.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Vl || (Vl = {}));
    const El = ic.extend({
        evt: xc(Vl),
        nonce: Vk().nullable(),
        cmd: yc(nc),
        data: pk({}).passthrough()
      }),
      Zl = ic.extend({
        evt: yc(Gl),
        data: pk({
          code: Ek(),
          message: Vk().optional()
        }).passthrough(),
        cmd: xc(pc),
        nonce: Vk().nullable()
      }),
      ul = El.extend({
        evt: Vk()
      }),
      Xl = qk([El, ul, Zl]);
    const dl = {
      [Vl.READY]: {
        payload: El.extend({
          evt: yc(Vl.READY),
          data: pk({
            v: Ek(),
            config: pk({
              cdn_host: Vk().optional(),
              api_endpoint: Vk(),
              environment: Vk()
            }),
            user: pk({
              id: Vk(),
              username: Vk(),
              discriminator: Vk(),
              avatar: Vk().optional()
            }).optional()
          })
        })
      },
      [Vl.VOICE_STATE_UPDATE]: {
        payload: El.extend({
          evt: yc(Vl.VOICE_STATE_UPDATE),
          data: cl
        }),
        subscribeArgs: pk({
          channel_id: Vk()
        })
      },
      [Vl.SPEAKING_START]: {
        payload: El.extend({
          evt: yc(Vl.SPEAKING_START),
          data: pk({
            lobby_id: Vk().optional(),
            channel_id: Vk().optional(),
            user_id: Vk()
          })
        }),
        subscribeArgs: pk({
          lobby_id: Vk().nullable().optional(),
          channel_id: Vk().nullable().optional()
        })
      },
      [Vl.SPEAKING_STOP]: {
        payload: El.extend({
          evt: yc(Vl.SPEAKING_STOP),
          data: pk({
            lobby_id: Vk().optional(),
            channel_id: Vk().optional(),
            user_id: Vk()
          })
        }),
        subscribeArgs: pk({
          lobby_id: Vk().nullable().optional(),
          channel_id: Vk().nullable().optional()
        })
      },
      [Vl.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: El.extend({
          evt: yc(Vl.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: pk({
            layout_mode: uc(el)
          })
        })
      },
      [Vl.ORIENTATION_UPDATE]: {
        payload: El.extend({
          evt: yc(Vl.ORIENTATION_UPDATE),
          data: pk({
            screen_orientation: uc(Hl),
            orientation: xc(Vc)
          })
        })
      },
      [Vl.CURRENT_USER_UPDATE]: {
        payload: El.extend({
          evt: yc(Vl.CURRENT_USER_UPDATE),
          data: qc
        })
      },
      [Vl.ENTITLEMENT_CREATE]: {
        payload: El.extend({
          evt: yc(Vl.ENTITLEMENT_CREATE),
          data: pk({
            entitlement: Jl
          })
        })
      },
      [Vl.THERMAL_STATE_UPDATE]: {
        payload: El.extend({
          evt: yc(Vl.THERMAL_STATE_UPDATE),
          data: pk({
            thermal_state: ol
          })
        })
      },
      [Vl.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: El.extend({
          evt: yc(Vl.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: pk({
            participants: gc.shape.participants
          })
        })
      }
    };
    const Ll = pk({}).nullable(),
      Rl = pk({
        code: Vk()
      }),
      gl = pk({
        guilds: nk(pk({
          id: Vk(),
          name: Vk()
        }))
      }),
      Ul = pk({
        id: Vk(),
        name: Vk(),
        icon_url: Vk().optional(),
        members: nk(sc)
      }),
      Yl = pk({
        id: Vk(),
        type: uc(Ol),
        guild_id: Vk().optional().nullable(),
        name: Vk().optional().nullable(),
        topic: Vk().optional().nullable(),
        bitrate: Ek().optional().nullable(),
        user_limit: Ek().optional().nullable(),
        position: Ek().optional().nullable(),
        voice_states: nk(cl),
        messages: nk(rl)
      }),
      Bl = pk({
        channels: nk(yl)
      }),
      Wl = (Yl.nullable(), Yl.nullable()),
      nl = Yl.nullable(),
      pl = (pk({
        input: bl,
        output: bl,
        mode: ml,
        automatic_gain_control: Xk(),
        echo_cancellation: Xk(),
        noise_suppression: Xk(),
        qos: Xk(),
        silence_warning: Xk(),
        deaf: Xk(),
        mute: Xk()
      }), pk({
        evt: Vk()
      })),
      il = pk({
        shortcut: wl
      }),
      ql = Ml,
      sl = pk({
        skus: nk(zl)
      }),
      TM = pk({
        entitlements: nk(Jl)
      }),
      kM = nk(Jl).nullable(),
      cM = pk({
        use_interactive_pip: Xk()
      }),
      lM = pk({
        locale: Vk()
      }),
      MM = pk({
        enabled: Xk()
      }),
      KM = pk({
        permissions: uk().or(Vk())
      }),
      OM = pk({
        iosKeyboardResizesView: Cc(Xk())
      }),
      yM = ic.extend({
        cmd: xc(pc),
        evt: gk()
      });

    function fM(TT) {
      let {
        cmd: kT,
        data: cT
      } = TT;
      switch (kT) {
        case pc.AUTHORIZE:
          return Rl.parse(cT);
        case pc.CAPTURE_SHORTCUT:
          return il.parse(cT);
        case pc.ENCOURAGE_HW_ACCELERATION:
          return MM.parse(cT);
        case pc.GET_CHANNEL:
          return Yl.parse(cT);
        case pc.GET_CHANNELS:
          return Bl.parse(cT);
        case pc.GET_CHANNEL_PERMISSIONS:
          return KM.parse(cT);
        case pc.GET_GUILD:
          return Ul.parse(cT);
        case pc.GET_GUILDS:
          return gl.parse(cT);
        case pc.GET_PLATFORM_BEHAVIORS:
          return OM.parse(cT);
        case pc.GET_CHANNEL:
          return Yl.parse(cT);
        case pc.SELECT_TEXT_CHANNEL:
          return nl.parse(cT);
        case pc.SELECT_VOICE_CHANNEL:
          return Wl.parse(cT);
        case pc.SET_ACTIVITY:
          return ql.parse(cT);
        case pc.GET_SKUS_EMBEDDED:
          return sl.parse(cT);
        case pc.GET_ENTITLEMENTS_EMBEDDED:
          return TM.parse(cT);
        case pc.SET_CONFIG:
          return cM.parse(cT);
        case pc.START_PURCHASE:
          return kM.parse(cT);
        case pc.SUBSCRIBE:
        case pc.UNSUBSCRIBE:
          return pl.parse(cT);
        case pc.USER_SETTINGS_GET_LOCALE:
          return lM.parse(cT);
        case pc.OPEN_EXTERNAL_LINK:
        case pc.SET_ORIENTATION_LOCK_STATE:
        case pc.SET_CERTIFIED_DEVICES:
        case pc.SEND_ANALYTICS_EVENT:
        case pc.OPEN_INVITE_DIALOG:
        case pc.CAPTURE_LOG:
        case pc.GET_SKUS:
        case pc.GET_ENTITLEMENTS:
          return Ll.parse(cT);
        case pc.AUTHENTICATE:
        case pc.INITIATE_IMAGE_UPLOAD:
        case pc.OPEN_SHARE_MOMENT_DIALOG:
        case pc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: TT
          } = Wc[kT];
          return TT.parse(cT);
        default:
          ! function(TT, kT) {
            throw kT
          }(0, new Error(`Unrecognized command ${kT}`))
      }
    }
    pk({
      frame_id: Vk(),
      platform: xc(Ec).optional().nullable()
    }), pk({
      v: yc(1),
      encoding: yc("json").optional(),
      client_id: Vk(),
      frame_id: Vk()
    });
    const xM = pk({
        code: Ek(),
        message: Vk().optional()
      }),
      IM = pk({
        evt: Vk().nullable(),
        nonce: Vk().nullable(),
        data: Yk().nullable(),
        cmd: Vk()
      }).passthrough();

    function AM(TT) {
      const kT = IM.parse(TT);
      return null != kT.evt ? kT.evt === Gl ? Zl.parse(kT) : function(TT) {
        const kT = TT.evt;
        if (!(kT in Vl)) throw new Error(`Unrecognized event type ${TT.evt}`);
        return dl[kT].payload.parse(TT)
      }(Xl.parse(kT)) : function(TT) {
        return Object.assign(Object.assign({}, TT), {
          data: fM(TT)
        })
      }(yM.passthrough().parse(kT))
    }

    function CM(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const MT = ic.extend({
        cmd: yc(kT),
        data: cT
      });
      return async cT => {
        const KT = await TT({
          cmd: kT,
          args: cT,
          transfer: lT(cT)
        });
        return MT.parse(KT).data
      }
    }

    function jM(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const cT = Wc[TT].response,
        lT = ic.extend({
          cmd: yc(TT),
          data: cT
        });
      return cT => async MT => {
        const KT = await cT({
          cmd: TT,
          args: MT,
          transfer: kT(MT)
        });
        return lT.parse(KT).data
      }
    }
    const vM = jM(Uc.AUTHENTICATE),
      tM = TT => CM(TT, pc.AUTHORIZE, Rl),
      hM = TT => CM(TT, pc.CAPTURE_LOG, Ll),
      NM = TT => CM(TT, pc.ENCOURAGE_HW_ACCELERATION, MM),
      QM = TT => CM(TT, pc.GET_ENTITLEMENTS_EMBEDDED, TM),
      SM = TT => CM(TT, pc.GET_SKUS_EMBEDDED, sl),
      DM = TT => CM(TT, pc.GET_CHANNEL_PERMISSIONS, KM),
      aM = TT => CM(TT, pc.GET_PLATFORM_BEHAVIORS, OM),
      FM = TT => CM(TT, pc.OPEN_EXTERNAL_LINK, Ll),
      rM = TT => CM(TT, pc.OPEN_INVITE_DIALOG, Ll),
      PM = jM(Uc.OPEN_SHARE_MOMENT_DIALOG);
    Ml.gC({
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
      type: Ml.shape.type.optional(),
      instance: Ml.shape.instance.optional()
    }).nullable();
    const wM = TT => CM(TT, pc.SET_ACTIVITY, ql),
      mM = TT => CM(TT, pc.SET_CONFIG, cM);
    const bM = TT => ({
        lock_state: TT.lock_state,
        picture_in_picture_lock_state: TT.picture_in_picture_lock_state
      }),
      zM = TT => function(TT) {
        let {
          sendCommand: kT,
          cmd: cT,
          response: lT,
          fallbackTransform: MT,
          transferTransform: KT = () => {}
        } = TT;
        const OT = ic.extend({
          cmd: yc(cT),
          data: lT
        });
        return async TT => {
          try {
            const lT = await kT({
              cmd: cT,
              args: TT,
              transfer: KT(TT)
            });
            return OT.parse(lT).data
          } catch (lT) {
            if (lT.code === Gc.INVALID_PAYLOAD) {
              const lT = MT(TT),
                yT = await kT({
                  cmd: cT,
                  args: lT,
                  transfer: KT(lT)
                });
              return OT.parse(yT).data
            }
            throw lT
          }
        }
      }({
        sendCommand: TT,
        cmd: pc.SET_ORIENTATION_LOCK_STATE,
        response: Ll,
        fallbackTransform: bM
      }),
      JM = TT => CM(TT, pc.START_PURCHASE, kM),
      oM = TT => CM(TT, pc.USER_SETTINGS_GET_LOCALE, lM),
      HM = jM(Uc.INITIATE_IMAGE_UPLOAD),
      eM = TT => CM(TT, pc.GET_CHANNEL, Yl),
      GM = jM(Uc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var VM = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function EM(TT) {
      return "string" === typeof TT && VM.test(TT)
    }
    for (var ZM = [], uM = 0; uM < 256; ++uM) ZM.push((uM + 256).toString(16).substr(1));

    function XM(TT) {
      var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cT = (ZM[TT[kT + 0]] + ZM[TT[kT + 1]] + ZM[TT[kT + 2]] + ZM[TT[kT + 3]] + "-" + ZM[TT[kT + 4]] + ZM[TT[kT + 5]] + "-" + ZM[TT[kT + 6]] + ZM[TT[kT + 7]] + "-" + ZM[TT[kT + 8]] + ZM[TT[kT + 9]] + "-" + ZM[TT[kT + 10]] + ZM[TT[kT + 11]] + ZM[TT[kT + 12]] + ZM[TT[kT + 13]] + ZM[TT[kT + 14]] + ZM[TT[kT + 15]]).toLowerCase();
      if (!EM(cT)) throw TypeError("Stringified UUID is invalid");
      return cT
    }
    var dM;

    function LM(TT, kT, cT) {
      function lT(TT, lT, MT, KT) {
        if ("string" === typeof TT && (TT = function(TT) {
            TT = unescape(encodeURIComponent(TT));
            for (var kT = [], cT = 0; cT < TT.length; ++cT) kT.push(TT.charCodeAt(cT));
            return kT
          }(TT)), "string" === typeof lT && (lT = function(TT) {
            if (!EM(TT)) throw TypeError("Invalid UUID");
            var kT, cT = new Uint8Array(16);
            return cT[0] = (kT = parseInt(TT.slice(0, 8), 16)) >>> 24, cT[1] = kT >>> 16 & 255, cT[2] = kT >>> 8 & 255, cT[3] = 255 & kT, cT[4] = (kT = parseInt(TT.slice(9, 13), 16)) >>> 8, cT[5] = 255 & kT, cT[6] = (kT = parseInt(TT.slice(14, 18), 16)) >>> 8, cT[7] = 255 & kT, cT[8] = (kT = parseInt(TT.slice(19, 23), 16)) >>> 8, cT[9] = 255 & kT, cT[10] = (kT = parseInt(TT.slice(24, 36), 16)) / 1099511627776 & 255, cT[11] = kT / 4294967296 & 255, cT[12] = kT >>> 24 & 255, cT[13] = kT >>> 16 & 255, cT[14] = kT >>> 8 & 255, cT[15] = 255 & kT, cT
          }(lT)), 16 !== lT.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var OT = new Uint8Array(16 + TT.length);
        if (OT.set(lT), OT.set(TT, lT.length), (OT = cT(OT))[6] = 15 & OT[6] | kT, OT[8] = 63 & OT[8] | 128, MT) {
          KT = KT || 0;
          for (var yT = 0; yT < 16; ++yT) MT[KT + yT] = OT[yT];
          return MT
        }
        return XM(OT)
      }
      try {
        lT.name = TT
      } catch (MT) {}
      return lT.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", lT.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", lT
    }

    function RM(TT) {
      return 14 + (TT + 64 >>> 9 << 4) + 1
    }

    function gM(TT, kT) {
      var cT = (65535 & TT) + (65535 & kT);
      return (TT >> 16) + (kT >> 16) + (cT >> 16) << 16 | 65535 & cT
    }

    function UM(TT, kT, cT, lT, MT, KT) {
      return gM((OT = gM(gM(kT, TT), gM(lT, KT))) << (yT = MT) | OT >>> 32 - yT, cT);
      var OT, yT
    }

    function YM(TT, kT, cT, lT, MT, KT, OT) {
      return UM(kT & cT | ~kT & lT, TT, kT, MT, KT, OT)
    }

    function BM(TT, kT, cT, lT, MT, KT, OT) {
      return UM(kT & lT | cT & ~lT, TT, kT, MT, KT, OT)
    }

    function WM(TT, kT, cT, lT, MT, KT, OT) {
      return UM(kT ^ cT ^ lT, TT, kT, MT, KT, OT)
    }

    function nM(TT, kT, cT, lT, MT, KT, OT) {
      return UM(cT ^ (kT | ~lT), TT, kT, MT, KT, OT)
    }
    LM("v3", 48, (function(TT) {
      if ("string" === typeof TT) {
        var kT = unescape(encodeURIComponent(TT));
        TT = new Uint8Array(kT.length);
        for (var cT = 0; cT < kT.length; ++cT) TT[cT] = kT.charCodeAt(cT)
      }
      return function(TT) {
        for (var kT = [], cT = 32 * TT.length, lT = "0123456789abcdef", MT = 0; MT < cT; MT += 8) {
          var KT = TT[MT >> 5] >>> MT % 32 & 255,
            OT = parseInt(lT.charAt(KT >>> 4 & 15) + lT.charAt(15 & KT), 16);
          kT.push(OT)
        }
        return kT
      }(function(TT, kT) {
        TT[kT >> 5] |= 128 << kT % 32, TT[RM(kT) - 1] = kT;
        for (var cT = 1732584193, lT = -271733879, MT = -1732584194, KT = 271733878, OT = 0; OT < TT.length; OT += 16) {
          var yT = cT,
            fT = lT,
            xT = MT,
            IT = KT;
          cT = YM(cT, lT, MT, KT, TT[OT], 7, -680876936), KT = YM(KT, cT, lT, MT, TT[OT + 1], 12, -389564586), MT = YM(MT, KT, cT, lT, TT[OT + 2], 17, 606105819), lT = YM(lT, MT, KT, cT, TT[OT + 3], 22, -1044525330), cT = YM(cT, lT, MT, KT, TT[OT + 4], 7, -176418897), KT = YM(KT, cT, lT, MT, TT[OT + 5], 12, 1200080426), MT = YM(MT, KT, cT, lT, TT[OT + 6], 17, -1473231341), lT = YM(lT, MT, KT, cT, TT[OT + 7], 22, -45705983), cT = YM(cT, lT, MT, KT, TT[OT + 8], 7, 1770035416), KT = YM(KT, cT, lT, MT, TT[OT + 9], 12, -1958414417), MT = YM(MT, KT, cT, lT, TT[OT + 10], 17, -42063), lT = YM(lT, MT, KT, cT, TT[OT + 11], 22, -1990404162), cT = YM(cT, lT, MT, KT, TT[OT + 12], 7, 1804603682), KT = YM(KT, cT, lT, MT, TT[OT + 13], 12, -40341101), MT = YM(MT, KT, cT, lT, TT[OT + 14], 17, -1502002290), cT = BM(cT, lT = YM(lT, MT, KT, cT, TT[OT + 15], 22, 1236535329), MT, KT, TT[OT + 1], 5, -165796510), KT = BM(KT, cT, lT, MT, TT[OT + 6], 9, -1069501632), MT = BM(MT, KT, cT, lT, TT[OT + 11], 14, 643717713), lT = BM(lT, MT, KT, cT, TT[OT], 20, -373897302), cT = BM(cT, lT, MT, KT, TT[OT + 5], 5, -701558691), KT = BM(KT, cT, lT, MT, TT[OT + 10], 9, 38016083), MT = BM(MT, KT, cT, lT, TT[OT + 15], 14, -660478335), lT = BM(lT, MT, KT, cT, TT[OT + 4], 20, -405537848), cT = BM(cT, lT, MT, KT, TT[OT + 9], 5, 568446438), KT = BM(KT, cT, lT, MT, TT[OT + 14], 9, -1019803690), MT = BM(MT, KT, cT, lT, TT[OT + 3], 14, -187363961), lT = BM(lT, MT, KT, cT, TT[OT + 8], 20, 1163531501), cT = BM(cT, lT, MT, KT, TT[OT + 13], 5, -1444681467), KT = BM(KT, cT, lT, MT, TT[OT + 2], 9, -51403784), MT = BM(MT, KT, cT, lT, TT[OT + 7], 14, 1735328473), cT = WM(cT, lT = BM(lT, MT, KT, cT, TT[OT + 12], 20, -1926607734), MT, KT, TT[OT + 5], 4, -378558), KT = WM(KT, cT, lT, MT, TT[OT + 8], 11, -2022574463), MT = WM(MT, KT, cT, lT, TT[OT + 11], 16, 1839030562), lT = WM(lT, MT, KT, cT, TT[OT + 14], 23, -35309556), cT = WM(cT, lT, MT, KT, TT[OT + 1], 4, -1530992060), KT = WM(KT, cT, lT, MT, TT[OT + 4], 11, 1272893353), MT = WM(MT, KT, cT, lT, TT[OT + 7], 16, -155497632), lT = WM(lT, MT, KT, cT, TT[OT + 10], 23, -1094730640), cT = WM(cT, lT, MT, KT, TT[OT + 13], 4, 681279174), KT = WM(KT, cT, lT, MT, TT[OT], 11, -358537222), MT = WM(MT, KT, cT, lT, TT[OT + 3], 16, -722521979), lT = WM(lT, MT, KT, cT, TT[OT + 6], 23, 76029189), cT = WM(cT, lT, MT, KT, TT[OT + 9], 4, -640364487), KT = WM(KT, cT, lT, MT, TT[OT + 12], 11, -421815835), MT = WM(MT, KT, cT, lT, TT[OT + 15], 16, 530742520), cT = nM(cT, lT = WM(lT, MT, KT, cT, TT[OT + 2], 23, -995338651), MT, KT, TT[OT], 6, -198630844), KT = nM(KT, cT, lT, MT, TT[OT + 7], 10, 1126891415), MT = nM(MT, KT, cT, lT, TT[OT + 14], 15, -1416354905), lT = nM(lT, MT, KT, cT, TT[OT + 5], 21, -57434055), cT = nM(cT, lT, MT, KT, TT[OT + 12], 6, 1700485571), KT = nM(KT, cT, lT, MT, TT[OT + 3], 10, -1894986606), MT = nM(MT, KT, cT, lT, TT[OT + 10], 15, -1051523), lT = nM(lT, MT, KT, cT, TT[OT + 1], 21, -2054922799), cT = nM(cT, lT, MT, KT, TT[OT + 8], 6, 1873313359), KT = nM(KT, cT, lT, MT, TT[OT + 15], 10, -30611744), MT = nM(MT, KT, cT, lT, TT[OT + 6], 15, -1560198380), lT = nM(lT, MT, KT, cT, TT[OT + 13], 21, 1309151649), cT = nM(cT, lT, MT, KT, TT[OT + 4], 6, -145523070), KT = nM(KT, cT, lT, MT, TT[OT + 11], 10, -1120210379), MT = nM(MT, KT, cT, lT, TT[OT + 2], 15, 718787259), lT = nM(lT, MT, KT, cT, TT[OT + 9], 21, -343485551), cT = gM(cT, yT), lT = gM(lT, fT), MT = gM(MT, xT), KT = gM(KT, IT)
        }
        return [cT, lT, MT, KT]
      }(function(TT) {
        if (0 === TT.length) return [];
        for (var kT = 8 * TT.length, cT = new Uint32Array(RM(kT)), lT = 0; lT < kT; lT += 8) cT[lT >> 5] |= (255 & TT[lT / 8]) << lT % 32;
        return cT
      }(TT), 8 * TT.length))
    }));
    var pM = new Uint8Array(16);

    function iM() {
      if (!dM && !(dM = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return dM(pM)
    }

    function qM(TT, kT, cT) {
      var lT = (TT = TT || {}).random || (TT.rng || iM)();
      if (lT[6] = 15 & lT[6] | 64, lT[8] = 63 & lT[8] | 128, kT) {
        cT = cT || 0;
        for (var MT = 0; MT < 16; ++MT) kT[cT + MT] = lT[MT];
        return kT
      }
      return XM(lT)
    }

    function sM(TT, kT, cT, lT) {
      switch (TT) {
        case 0:
          return kT & cT ^ ~kT & lT;
        case 1:
        case 3:
          return kT ^ cT ^ lT;
        case 2:
          return kT & cT ^ kT & lT ^ cT & lT
      }
    }

    function TK(TT, kT) {
      return TT << kT | TT >>> 32 - kT
    }
    LM("v5", 80, (function(TT) {
      var kT = [1518500249, 1859775393, 2400959708, 3395469782],
        cT = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof TT) {
        var lT = unescape(encodeURIComponent(TT));
        TT = [];
        for (var MT = 0; MT < lT.length; ++MT) TT.push(lT.charCodeAt(MT))
      } else Array.isArray(TT) || (TT = Array.prototype.slice.call(TT));
      TT.push(128);
      for (var KT = TT.length / 4 + 2, OT = Math.ceil(KT / 16), yT = new Array(OT), fT = 0; fT < OT; ++fT) {
        for (var xT = new Uint32Array(16), IT = 0; IT < 16; ++IT) xT[IT] = TT[64 * fT + 4 * IT] << 24 | TT[64 * fT + 4 * IT + 1] << 16 | TT[64 * fT + 4 * IT + 2] << 8 | TT[64 * fT + 4 * IT + 3];
        yT[fT] = xT
      }
      yT[OT - 1][14] = 8 * (TT.length - 1) / Math.pow(2, 32), yT[OT - 1][14] = Math.floor(yT[OT - 1][14]), yT[OT - 1][15] = 8 * (TT.length - 1) & 4294967295;
      for (var AT = 0; AT < OT; ++AT) {
        for (var CT = new Uint32Array(80), jT = 0; jT < 16; ++jT) CT[jT] = yT[AT][jT];
        for (var vT = 16; vT < 80; ++vT) CT[vT] = TK(CT[vT - 3] ^ CT[vT - 8] ^ CT[vT - 14] ^ CT[vT - 16], 1);
        for (var tT = cT[0], hT = cT[1], NT = cT[2], QT = cT[3], ST = cT[4], DT = 0; DT < 80; ++DT) {
          var aT = Math.floor(DT / 20),
            FT = TK(tT, 5) + sM(aT, hT, NT, QT) + ST + kT[aT] + CT[DT] >>> 0;
          ST = QT, QT = NT, NT = TK(hT, 30) >>> 0, hT = tT, tT = FT
        }
        cT[0] = cT[0] + tT >>> 0, cT[1] = cT[1] + hT >>> 0, cT[2] = cT[2] + NT >>> 0, cT[3] = cT[3] + QT >>> 0, cT[4] = cT[4] + ST >>> 0
      }
      return [cT[0] >> 24 & 255, cT[0] >> 16 & 255, cT[0] >> 8 & 255, 255 & cT[0], cT[1] >> 24 & 255, cT[1] >> 16 & 255, cT[1] >> 8 & 255, 255 & cT[1], cT[2] >> 24 & 255, cT[2] >> 16 & 255, cT[2] >> 8 & 255, 255 & cT[2], cT[3] >> 24 & 255, cT[3] >> 16 & 255, cT[3] >> 8 & 255, 255 & cT[3], cT[4] >> 24 & 255, cT[4] >> 16 & 255, cT[4] >> 8 & 255, 255 & cT[4]]
    }));
    class kK extends Error {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(kT), this.code = TT, this.message = kT, this.name = "Discord SDK Error"
      }
    }
    const cK = ["log", "warn", "debug", "info", "error"];
    var lK;
    ! function(TT) {
      TT[TT.HANDSHAKE = 0] = "HANDSHAKE", TT[TT.FRAME = 1] = "FRAME", TT[TT.CLOSE = 2] = "CLOSE", TT[TT.HELLO = 3] = "HELLO"
    }(lK || (lK = {}));
    const MK = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class KK {
      getTransfer(TT) {
        var kT;
        switch (TT.cmd) {
          case pc.SUBSCRIBE:
          case pc.UNSUBSCRIBE:
            return;
          default:
            return null !== (kT = TT.transfer) && void 0 !== kT ? kT : void 0
        }
      }
      constructor(TT, kT) {
        var cT;
        if (this.eventBus = new xT, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = TT => {
            var kT;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const cT = qM();
            null === (kT = this.source) || void 0 === kT || kT.postMessage([lK.FRAME, Object.assign(Object.assign({}, TT), {
              nonce: cT
            })], this.sourceOrigin, this.getTransfer(TT));
            return new Promise(((TT, kT) => {
              this.pendingCommands.set(cT, {
                resolve: TT,
                reject: kT
              })
            }))
          }, this.commands = (cT = this.sendCommand, {
            authenticate: vM(cT),
            authorize: tM(cT),
            captureLog: hM(cT),
            encourageHardwareAcceleration: NM(cT),
            getChannel: eM(cT),
            getChannelPermissions: DM(cT),
            getEntitlements: QM(cT),
            getPlatformBehaviors: aM(cT),
            getSkus: SM(cT),
            openExternalLink: FM(cT),
            openInviteDialog: rM(cT),
            openShareMomentDialog: PM(cT),
            setActivity: wM(cT),
            setConfig: mM(cT),
            setOrientationLockState: zM(cT),
            startPurchase: JM(cT),
            userSettingsGetLocale: oM(cT),
            initiateImageUpload: HM(cT),
            getInstanceConnectedParticipants: GM(cT)
          }), this.handleMessage = TT => {
            if (!MK.has(TT.origin)) return;
            const kT = TT.data;
            if (!Array.isArray(kT)) return;
            const [cT, lT] = kT;
            switch (cT) {
              case lK.HELLO:
                return;
              case lK.CLOSE:
                return this.handleClose(lT);
              case lK.HANDSHAKE:
                return this.handleHandshake();
              case lK.FRAME:
                return this.handleFrame(lT);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = TT, this.configuration = null !== kT && void 0 !== kT ? kT : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = Ec.DESKTOP, this.guildId = null, void(this.channelId = null);
        const lT = new URLSearchParams(this._getSearch()),
          MT = lT.get("frame_id");
        if (!MT) throw new Error("frame_id query param is not defined");
        this.frameId = MT;
        const KT = lT.get("instance_id");
        if (!KT) throw new Error("instance_id query param is not defined");
        this.instanceId = KT;
        const OT = lT.get("platform");
        if (!OT) throw new Error("platform query param is not defined");
        if (OT !== Ec.DESKTOP && OT !== Ec.MOBILE) throw new Error(`Invalid query param "platform" of "${OT}". Valid values are "${Ec.DESKTOP}" or "${Ec.MOBILE}"`);
        this.platform = OT, this.guildId = lT.get("guild_id"), this.channelId = lT.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var TT;
          return [null !== (TT = window.parent.opener) && void 0 !== TT ? TT : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(TT, kT) {
        var cT;
        window.removeEventListener("message", this.handleMessage);
        const lT = qM();
        null === (cT = this.source) || void 0 === cT || cT.postMessage([lK.CLOSE, {
          code: TT,
          message: kT,
          nonce: lT
        }], this.sourceOrigin)
      }
      async subscribe(TT, kT) {
        for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
        const [KT] = lT, OT = this.eventBus.listenerCount(TT), yT = this.eventBus.on(TT, kT);
        return Object.values(Vl).includes(TT) && TT !== Vl.READY && 0 === OT && await this.sendCommand({
          cmd: pc.SUBSCRIBE,
          args: KT,
          evt: TT
        }), yT
      }
      async unsubscribe(TT, kT) {
        for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
        const [KT] = lT;
        return TT !== Vl.READY && 1 === this.eventBus.listenerCount(TT) && await this.sendCommand({
          cmd: pc.UNSUBSCRIBE,
          evt: TT,
          args: KT
        }), this.eventBus.off(TT, kT)
      }
      async ready() {
        this.isReady || await new Promise((TT => {
          this.eventBus.once(Vl.READY, TT)
        }))
      }
      handshake() {
        var TT;
        null === (TT = this.source) || void 0 === TT || TT.postMessage([lK.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Vl.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const TT = (TT, kT) => {
          this.commands.captureLog({
            level: TT,
            message: kT
          })
        };
        cK.forEach((kT => {
          ! function(TT, kT, cT) {
            const lT = TT[kT],
              MT = TT;
            lT && (TT[kT] = function() {
              const TT = [].slice.call(arguments),
                KT = "" + TT.join(" ");
              cT(kT, KT), lT.apply(MT, TT)
            })
          }(console, kT, TT)
        }))
      }
      handleClose(TT) {
        xM.parse(TT)
      }
      handleHandshake() {}
      handleFrame(TT) {
        var kT, cT;
        let lT;
        try {
          lT = AM(TT)
        } catch (MT) {
          return console.error("Failed to parse", TT), void console.error(MT)
        }
        if ("DISPATCH" === lT.cmd) this.eventBus.emit(lT.evt, lT.data);
        else {
          if (lT.evt === Gl) {
            if (null != lT.nonce) return null === (kT = this.pendingCommands.get(lT.nonce)) || void 0 === kT || kT.reject(lT.data), void this.pendingCommands.delete(lT.nonce);
            this.eventBus.emit("error", new kK(lT.data.code, lT.data.message))
          }
          if (null == lT.nonce) return void console.error("Missing nonce", TT);
          null === (cT = this.pendingCommands.get(lT.nonce)) || void 0 === cT || cT.resolve(lT), this.pendingCommands.delete(lT.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var OK, yK = 1e9,
      fK = !0,
      xK = "[DecimalError] ",
      IK = xK + "Invalid argument: ",
      AK = xK + "Exponent out of range: ",
      CK = Math.floor,
      jK = Math.pow,
      vK = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      tK = 1e7,
      hK = 9007199254740991,
      NK = CK(1286742750677284.5),
      QK = {};

    function SK(TT, kT) {
      var cT, lT, MT, KT, OT, yT, fT, xT, IT = TT.constructor,
        AT = IT.precision;
      if (!TT.s || !kT.s) return kT.s || (kT = new IT(TT)), fK ? JK(kT, AT) : kT;
      if (fT = TT.d, xT = kT.d, OT = TT.e, MT = kT.e, fT = fT.slice(), KT = OT - MT) {
        for (KT < 0 ? (lT = fT, KT = -KT, yT = xT.length) : (lT = xT, MT = OT, yT = fT.length), KT > (yT = (OT = Math.ceil(AT / 7)) > yT ? OT + 1 : yT + 1) && (KT = yT, lT.length = 1), lT.reverse(); KT--;) lT.push(0);
        lT.reverse()
      }
      for ((yT = fT.length) - (KT = xT.length) < 0 && (KT = yT, lT = xT, xT = fT, fT = lT), cT = 0; KT;) cT = (fT[--KT] = fT[KT] + xT[KT] + cT) / tK | 0, fT[KT] %= tK;
      for (cT && (fT.unshift(cT), ++MT), yT = fT.length; 0 == fT[--yT];) fT.pop();
      return kT.d = fT, kT.e = MT, fK ? JK(kT, AT) : kT
    }

    function DK(TT, kT, cT) {
      if (TT !== ~~TT || TT < kT || TT > cT) throw Error(IK + TT)
    }

    function aK(TT) {
      var kT, cT, lT, MT = TT.length - 1,
        KT = "",
        OT = TT[0];
      if (MT > 0) {
        for (KT += OT, kT = 1; kT < MT; kT++)(cT = 7 - (lT = TT[kT] + "").length) && (KT += mK(cT)), KT += lT;
        (cT = 7 - (lT = (OT = TT[kT]) + "").length) && (KT += mK(cT))
      } else if (0 === OT) return "0";
      for (; OT % 10 === 0;) OT /= 10;
      return KT + OT
    }
    QK.absoluteValue = QK.abs = function() {
      var TT = new this.constructor(this);
      return TT.s && (TT.s = 1), TT
    }, QK.comparedTo = QK.cmp = function(TT) {
      var kT, cT, lT, MT, KT = this;
      if (TT = new KT.constructor(TT), KT.s !== TT.s) return KT.s || -TT.s;
      if (KT.e !== TT.e) return KT.e > TT.e ^ KT.s < 0 ? 1 : -1;
      for (kT = 0, cT = (lT = KT.d.length) < (MT = TT.d.length) ? lT : MT; kT < cT; ++kT)
        if (KT.d[kT] !== TT.d[kT]) return KT.d[kT] > TT.d[kT] ^ KT.s < 0 ? 1 : -1;
      return lT === MT ? 0 : lT > MT ^ KT.s < 0 ? 1 : -1
    }, QK.decimalPlaces = QK.dp = function() {
      var TT = this,
        kT = TT.d.length - 1,
        cT = 7 * (kT - TT.e);
      if (kT = TT.d[kT])
        for (; kT % 10 == 0; kT /= 10) cT--;
      return cT < 0 ? 0 : cT
    }, QK.dividedBy = QK.div = function(TT) {
      return FK(this, new this.constructor(TT))
    }, QK.dividedToIntegerBy = QK.idiv = function(TT) {
      var kT = this.constructor;
      return JK(FK(this, new kT(TT), 0, 1), kT.precision)
    }, QK.equals = QK.eq = function(TT) {
      return !this.cmp(TT)
    }, QK.exponent = function() {
      return PK(this)
    }, QK.greaterThan = QK.gt = function(TT) {
      return this.cmp(TT) > 0
    }, QK.greaterThanOrEqualTo = QK.gte = function(TT) {
      return this.cmp(TT) >= 0
    }, QK.isInteger = QK.isint = function() {
      return this.e > this.d.length - 2
    }, QK.isNegative = QK.isneg = function() {
      return this.s < 0
    }, QK.isPositive = QK.ispos = function() {
      return this.s > 0
    }, QK.isZero = function() {
      return 0 === this.s
    }, QK.lessThan = QK.lt = function(TT) {
      return this.cmp(TT) < 0
    }, QK.lessThanOrEqualTo = QK.lte = function(TT) {
      return this.cmp(TT) < 1
    }, QK.logarithm = QK.log = function(TT) {
      var kT, cT = this,
        lT = cT.constructor,
        MT = lT.precision,
        KT = MT + 5;
      if (void 0 === TT) TT = new lT(10);
      else if ((TT = new lT(TT)).s < 1 || TT.eq(OK)) throw Error(xK + "NaN");
      if (cT.s < 1) throw Error(xK + (cT.s ? "NaN" : "-Infinity"));
      return cT.eq(OK) ? new lT(0) : (fK = !1, kT = FK(bK(cT, KT), bK(TT, KT), KT), fK = !0, JK(kT, MT))
    }, QK.minus = QK.sub = function(TT) {
      var kT = this;
      return TT = new kT.constructor(TT), kT.s == TT.s ? oK(kT, TT) : SK(kT, (TT.s = -TT.s, TT))
    }, QK.modulo = QK.mod = function(TT) {
      var kT, cT = this,
        lT = cT.constructor,
        MT = lT.precision;
      if (!(TT = new lT(TT)).s) throw Error(xK + "NaN");
      return cT.s ? (fK = !1, kT = FK(cT, TT, 0, 1).times(TT), fK = !0, cT.minus(kT)) : JK(new lT(cT), MT)
    }, QK.naturalExponential = QK.exp = function() {
      return rK(this)
    }, QK.naturalLogarithm = QK.ln = function() {
      return bK(this)
    }, QK.negated = QK.neg = function() {
      var TT = new this.constructor(this);
      return TT.s = -TT.s || 0, TT
    }, QK.plus = QK.add = function(TT) {
      var kT = this;
      return TT = new kT.constructor(TT), kT.s == TT.s ? SK(kT, TT) : oK(kT, (TT.s = -TT.s, TT))
    }, QK.precision = QK.sd = function(TT) {
      var kT, cT, lT, MT = this;
      if (void 0 !== TT && TT !== !!TT && 1 !== TT && 0 !== TT) throw Error(IK + TT);
      if (kT = PK(MT) + 1, cT = 7 * (lT = MT.d.length - 1) + 1, lT = MT.d[lT]) {
        for (; lT % 10 == 0; lT /= 10) cT--;
        for (lT = MT.d[0]; lT >= 10; lT /= 10) cT++
      }
      return TT && kT > cT ? kT : cT
    }, QK.squareRoot = QK.sqrt = function() {
      var TT, kT, cT, lT, MT, KT, OT, yT = this,
        fT = yT.constructor;
      if (yT.s < 1) {
        if (!yT.s) return new fT(0);
        throw Error(xK + "NaN")
      }
      for (TT = PK(yT), fK = !1, 0 == (MT = Math.sqrt(+yT)) || MT == 1 / 0 ? (((kT = aK(yT.d)).length + TT) % 2 == 0 && (kT += "0"), MT = Math.sqrt(kT), TT = CK((TT + 1) / 2) - (TT < 0 || TT % 2), lT = new fT(kT = MT == 1 / 0 ? "1e" + TT : (kT = MT.toExponential()).slice(0, kT.indexOf("e") + 1) + TT)) : lT = new fT(MT.toString()), MT = OT = (cT = fT.precision) + 3;;)
        if (lT = (KT = lT).plus(FK(yT, KT, OT + 2)).times(.5), aK(KT.d).slice(0, OT) === (kT = aK(lT.d)).slice(0, OT)) {
          if (kT = kT.slice(OT - 3, OT + 1), MT == OT && "4999" == kT) {
            if (JK(KT, cT + 1, 0), KT.times(KT).eq(yT)) {
              lT = KT;
              break
            }
          } else if ("9999" != kT) break;
          OT += 4
        } return fK = !0, JK(lT, cT)
    }, QK.times = QK.mul = function(TT) {
      var kT, cT, lT, MT, KT, OT, yT, fT, xT, IT = this,
        AT = IT.constructor,
        CT = IT.d,
        jT = (TT = new AT(TT)).d;
      if (!IT.s || !TT.s) return new AT(0);
      for (TT.s *= IT.s, cT = IT.e + TT.e, (fT = CT.length) < (xT = jT.length) && (KT = CT, CT = jT, jT = KT, OT = fT, fT = xT, xT = OT), KT = [], lT = OT = fT + xT; lT--;) KT.push(0);
      for (lT = xT; --lT >= 0;) {
        for (kT = 0, MT = fT + lT; MT > lT;) yT = KT[MT] + jT[lT] * CT[MT - lT - 1] + kT, KT[MT--] = yT % tK | 0, kT = yT / tK | 0;
        KT[MT] = (KT[MT] + kT) % tK | 0
      }
      for (; !KT[--OT];) KT.pop();
      return kT ? ++cT : KT.shift(), TT.d = KT, TT.e = cT, fK ? JK(TT, AT.precision) : TT
    }, QK.toDecimalPlaces = QK.todp = function(TT, kT) {
      var cT = this,
        lT = cT.constructor;
      return cT = new lT(cT), void 0 === TT ? cT : (DK(TT, 0, yK), void 0 === kT ? kT = lT.rounding : DK(kT, 0, 8), JK(cT, TT + PK(cT) + 1, kT))
    }, QK.toExponential = function(TT, kT) {
      var cT, lT = this,
        MT = lT.constructor;
      return void 0 === TT ? cT = HK(lT, !0) : (DK(TT, 0, yK), void 0 === kT ? kT = MT.rounding : DK(kT, 0, 8), cT = HK(lT = JK(new MT(lT), TT + 1, kT), !0, TT + 1)), cT
    }, QK.toFixed = function(TT, kT) {
      var cT, lT, MT = this,
        KT = MT.constructor;
      return void 0 === TT ? HK(MT) : (DK(TT, 0, yK), void 0 === kT ? kT = KT.rounding : DK(kT, 0, 8), cT = HK((lT = JK(new KT(MT), TT + PK(MT) + 1, kT)).abs(), !1, TT + PK(lT) + 1), MT.isneg() && !MT.isZero() ? "-" + cT : cT)
    }, QK.toInteger = QK.toint = function() {
      var TT = this,
        kT = TT.constructor;
      return JK(new kT(TT), PK(TT) + 1, kT.rounding)
    }, QK.toNumber = function() {
      return +this
    }, QK.toPower = QK.pow = function(TT) {
      var kT, cT, lT, MT, KT, OT, yT = this,
        fT = yT.constructor,
        xT = +(TT = new fT(TT));
      if (!TT.s) return new fT(OK);
      if (!(yT = new fT(yT)).s) {
        if (TT.s < 1) throw Error(xK + "Infinity");
        return yT
      }
      if (yT.eq(OK)) return yT;
      if (lT = fT.precision, TT.eq(OK)) return JK(yT, lT);
      if (OT = (kT = TT.e) >= (cT = TT.d.length - 1), KT = yT.s, OT) {
        if ((cT = xT < 0 ? -xT : xT) <= hK) {
          for (MT = new fT(OK), kT = Math.ceil(lT / 7 + 4), fK = !1; cT % 2 && eK((MT = MT.times(yT)).d, kT), 0 !== (cT = CK(cT / 2));) eK((yT = yT.times(yT)).d, kT);
          return fK = !0, TT.s < 0 ? new fT(OK).div(MT) : JK(MT, lT)
        }
      } else if (KT < 0) throw Error(xK + "NaN");
      return KT = KT < 0 && 1 & TT.d[Math.max(kT, cT)] ? -1 : 1, yT.s = 1, fK = !1, MT = TT.times(bK(yT, lT + 12)), fK = !0, (MT = rK(MT)).s = KT, MT
    }, QK.toPrecision = function(TT, kT) {
      var cT, lT, MT = this,
        KT = MT.constructor;
      return void 0 === TT ? lT = HK(MT, (cT = PK(MT)) <= KT.toExpNeg || cT >= KT.toExpPos) : (DK(TT, 1, yK), void 0 === kT ? kT = KT.rounding : DK(kT, 0, 8), lT = HK(MT = JK(new KT(MT), TT, kT), TT <= (cT = PK(MT)) || cT <= KT.toExpNeg, TT)), lT
    }, QK.toSignificantDigits = QK.tosd = function(TT, kT) {
      var cT = this.constructor;
      return void 0 === TT ? (TT = cT.precision, kT = cT.rounding) : (DK(TT, 1, yK), void 0 === kT ? kT = cT.rounding : DK(kT, 0, 8)), JK(new cT(this), TT, kT)
    }, QK.toString = QK.valueOf = QK.val = QK.toJSON = QK[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var TT = this,
        kT = PK(TT),
        cT = TT.constructor;
      return HK(TT, kT <= cT.toExpNeg || kT >= cT.toExpPos)
    };
    var FK = function() {
      function TT(TT, kT) {
        var cT, lT = 0,
          MT = TT.length;
        for (TT = TT.slice(); MT--;) cT = TT[MT] * kT + lT, TT[MT] = cT % tK | 0, lT = cT / tK | 0;
        return lT && TT.unshift(lT), TT
      }

      function kT(TT, kT, cT, lT) {
        var MT, KT;
        if (cT != lT) KT = cT > lT ? 1 : -1;
        else
          for (MT = KT = 0; MT < cT; MT++)
            if (TT[MT] != kT[MT]) {
              KT = TT[MT] > kT[MT] ? 1 : -1;
              break
            } return KT
      }

      function cT(TT, kT, cT) {
        for (var lT = 0; cT--;) TT[cT] -= lT, lT = TT[cT] < kT[cT] ? 1 : 0, TT[cT] = lT * tK + TT[cT] - kT[cT];
        for (; !TT[0] && TT.length > 1;) TT.shift()
      }
      return function(lT, MT, KT, OT) {
        var yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, wT = lT.constructor,
          mT = lT.s == MT.s ? 1 : -1,
          bT = lT.d,
          zT = MT.d;
        if (!lT.s) return new wT(lT);
        if (!MT.s) throw Error(xK + "Division by zero");
        for (fT = lT.e - MT.e, rT = zT.length, aT = bT.length, vT = (jT = new wT(mT)).d = [], xT = 0; zT[xT] == (bT[xT] || 0);) ++xT;
        if (zT[xT] > (bT[xT] || 0) && --fT, (QT = null == KT ? KT = wT.precision : OT ? KT + (PK(lT) - PK(MT)) + 1 : KT) < 0) return new wT(0);
        if (QT = QT / 7 + 2 | 0, xT = 0, 1 == rT)
          for (IT = 0, zT = zT[0], QT++;
            (xT < aT || IT) && QT--; xT++) ST = IT * tK + (bT[xT] || 0), vT[xT] = ST / zT | 0, IT = ST % zT | 0;
        else {
          for ((IT = tK / (zT[0] + 1) | 0) > 1 && (zT = TT(zT, IT), bT = TT(bT, IT), rT = zT.length, aT = bT.length), DT = rT, hT = (tT = bT.slice(0, rT)).length; hT < rT;) tT[hT++] = 0;
          (PT = zT.slice()).unshift(0), FT = zT[0], zT[1] >= tK / 2 && ++FT;
          do {
            IT = 0, (yT = kT(zT, tT, rT, hT)) < 0 ? (NT = tT[0], rT != hT && (NT = NT * tK + (tT[1] || 0)), (IT = NT / FT | 0) > 1 ? (IT >= tK && (IT = tK - 1), 1 == (yT = kT(AT = TT(zT, IT), tT, CT = AT.length, hT = tT.length)) && (IT--, cT(AT, rT < CT ? PT : zT, CT))) : (0 == IT && (yT = IT = 1), AT = zT.slice()), (CT = AT.length) < hT && AT.unshift(0), cT(tT, AT, hT), -1 == yT && (yT = kT(zT, tT, rT, hT = tT.length)) < 1 && (IT++, cT(tT, rT < hT ? PT : zT, hT)), hT = tT.length) : 0 === yT && (IT++, tT = [0]), vT[xT++] = IT, yT && tT[0] ? tT[hT++] = bT[DT] || 0 : (tT = [bT[DT]], hT = 1)
          } while ((DT++ < aT || void 0 !== tT[0]) && QT--)
        }
        return vT[0] || vT.shift(), jT.e = fT, JK(jT, OT ? KT + PK(jT) + 1 : KT)
      }
    }();

    function rK(TT, kT) {
      var cT, lT, MT, KT, OT, yT = 0,
        fT = 0,
        xT = TT.constructor,
        IT = xT.precision;
      if (PK(TT) > 16) throw Error(AK + PK(TT));
      if (!TT.s) return new xT(OK);
      for (null == kT ? (fK = !1, OT = IT) : OT = kT, KT = new xT(.03125); TT.abs().gte(.1);) TT = TT.times(KT), fT += 5;
      for (OT += Math.log(jK(2, fT)) / Math.LN10 * 2 + 5 | 0, cT = lT = MT = new xT(OK), xT.precision = OT;;) {
        if (lT = JK(lT.times(TT), OT), cT = cT.times(++yT), aK((KT = MT.plus(FK(lT, cT, OT))).d).slice(0, OT) === aK(MT.d).slice(0, OT)) {
          for (; fT--;) MT = JK(MT.times(MT), OT);
          return xT.precision = IT, null == kT ? (fK = !0, JK(MT, IT)) : MT
        }
        MT = KT
      }
    }

    function PK(TT) {
      for (var kT = 7 * TT.e, cT = TT.d[0]; cT >= 10; cT /= 10) kT++;
      return kT
    }

    function wK(TT, kT, cT) {
      if (kT > TT.LN10.sd()) throw fK = !0, cT && (TT.precision = cT), Error(xK + "LN10 precision limit exceeded");
      return JK(new TT(TT.LN10), kT)
    }

    function mK(TT) {
      for (var kT = ""; TT--;) kT += "0";
      return kT
    }

    function bK(TT, kT) {
      var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT = 1,
        CT = TT,
        jT = CT.d,
        vT = CT.constructor,
        tT = vT.precision;
      if (CT.s < 1) throw Error(xK + (CT.s ? "NaN" : "-Infinity"));
      if (CT.eq(OK)) return new vT(0);
      if (null == kT ? (fK = !1, xT = tT) : xT = kT, CT.eq(10)) return null == kT && (fK = !0), wK(vT, xT);
      if (xT += 10, vT.precision = xT, lT = (cT = aK(jT)).charAt(0), KT = PK(CT), !(Math.abs(KT) < 15e14)) return fT = wK(vT, xT + 2, tT).times(KT + ""), CT = bK(new vT(lT + "." + cT.slice(1)), xT - 10).plus(fT), vT.precision = tT, null == kT ? (fK = !0, JK(CT, tT)) : CT;
      for (; lT < 7 && 1 != lT || 1 == lT && cT.charAt(1) > 3;) lT = (cT = aK((CT = CT.times(TT)).d)).charAt(0), AT++;
      for (KT = PK(CT), lT > 1 ? (CT = new vT("0." + cT), KT++) : CT = new vT(lT + "." + cT.slice(1)), yT = OT = CT = FK(CT.minus(OK), CT.plus(OK), xT), IT = JK(CT.times(CT), xT), MT = 3;;) {
        if (OT = JK(OT.times(IT), xT), aK((fT = yT.plus(FK(OT, new vT(MT), xT))).d).slice(0, xT) === aK(yT.d).slice(0, xT)) return yT = yT.times(2), 0 !== KT && (yT = yT.plus(wK(vT, xT + 2, tT).times(KT + ""))), yT = FK(yT, new vT(AT), xT), vT.precision = tT, null == kT ? (fK = !0, JK(yT, tT)) : yT;
        yT = fT, MT += 2
      }
    }

    function zK(TT, kT) {
      var cT, lT, MT;
      for ((cT = kT.indexOf(".")) > -1 && (kT = kT.replace(".", "")), (lT = kT.search(/e/i)) > 0 ? (cT < 0 && (cT = lT), cT += +kT.slice(lT + 1), kT = kT.substring(0, lT)) : cT < 0 && (cT = kT.length), lT = 0; 48 === kT.charCodeAt(lT);) ++lT;
      for (MT = kT.length; 48 === kT.charCodeAt(MT - 1);) --MT;
      if (kT = kT.slice(lT, MT)) {
        if (MT -= lT, cT = cT - lT - 1, TT.e = CK(cT / 7), TT.d = [], lT = (cT + 1) % 7, cT < 0 && (lT += 7), lT < MT) {
          for (lT && TT.d.push(+kT.slice(0, lT)), MT -= 7; lT < MT;) TT.d.push(+kT.slice(lT, lT += 7));
          lT = 7 - (kT = kT.slice(lT)).length
        } else lT -= MT;
        for (; lT--;) kT += "0";
        if (TT.d.push(+kT), fK && (TT.e > NK || TT.e < -NK)) throw Error(AK + cT)
      } else TT.s = 0, TT.e = 0, TT.d = [0];
      return TT
    }

    function JK(TT, kT, cT) {
      var lT, MT, KT, OT, yT, fT, xT, IT, AT = TT.d;
      for (OT = 1, KT = AT[0]; KT >= 10; KT /= 10) OT++;
      if ((lT = kT - OT) < 0) lT += 7, MT = kT, xT = AT[IT = 0];
      else {
        if ((IT = Math.ceil((lT + 1) / 7)) >= (KT = AT.length)) return TT;
        for (xT = KT = AT[IT], OT = 1; KT >= 10; KT /= 10) OT++;
        MT = (lT %= 7) - 7 + OT
      }
      if (void 0 !== cT && (yT = xT / (KT = jK(10, OT - MT - 1)) % 10 | 0, fT = kT < 0 || void 0 !== AT[IT + 1] || xT % KT, fT = cT < 4 ? (yT || fT) && (0 == cT || cT == (TT.s < 0 ? 3 : 2)) : yT > 5 || 5 == yT && (4 == cT || fT || 6 == cT && (lT > 0 ? MT > 0 ? xT / jK(10, OT - MT) : 0 : AT[IT - 1]) % 10 & 1 || cT == (TT.s < 0 ? 8 : 7))), kT < 1 || !AT[0]) return fT ? (KT = PK(TT), AT.length = 1, kT = kT - KT - 1, AT[0] = jK(10, (7 - kT % 7) % 7), TT.e = CK(-kT / 7) || 0) : (AT.length = 1, AT[0] = TT.e = TT.s = 0), TT;
      if (0 == lT ? (AT.length = IT, KT = 1, IT--) : (AT.length = IT + 1, KT = jK(10, 7 - lT), AT[IT] = MT > 0 ? (xT / jK(10, OT - MT) % jK(10, MT) | 0) * KT : 0), fT)
        for (;;) {
          if (0 == IT) {
            (AT[0] += KT) == tK && (AT[0] = 1, ++TT.e);
            break
          }
          if (AT[IT] += KT, AT[IT] != tK) break;
          AT[IT--] = 0, KT = 1
        }
      for (lT = AT.length; 0 === AT[--lT];) AT.pop();
      if (fK && (TT.e > NK || TT.e < -NK)) throw Error(AK + PK(TT));
      return TT
    }

    function oK(TT, kT) {
      var cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT = TT.constructor,
        jT = CT.precision;
      if (!TT.s || !kT.s) return kT.s ? kT.s = -kT.s : kT = new CT(TT), fK ? JK(kT, jT) : kT;
      if (fT = TT.d, AT = kT.d, lT = kT.e, xT = TT.e, fT = fT.slice(), OT = xT - lT) {
        for ((IT = OT < 0) ? (cT = fT, OT = -OT, yT = AT.length) : (cT = AT, lT = xT, yT = fT.length), OT > (MT = Math.max(Math.ceil(jT / 7), yT) + 2) && (OT = MT, cT.length = 1), cT.reverse(), MT = OT; MT--;) cT.push(0);
        cT.reverse()
      } else {
        for ((IT = (MT = fT.length) < (yT = AT.length)) && (yT = MT), MT = 0; MT < yT; MT++)
          if (fT[MT] != AT[MT]) {
            IT = fT[MT] < AT[MT];
            break
          } OT = 0
      }
      for (IT && (cT = fT, fT = AT, AT = cT, kT.s = -kT.s), yT = fT.length, MT = AT.length - yT; MT > 0; --MT) fT[yT++] = 0;
      for (MT = AT.length; MT > OT;) {
        if (fT[--MT] < AT[MT]) {
          for (KT = MT; KT && 0 === fT[--KT];) fT[KT] = tK - 1;
          --fT[KT], fT[MT] += tK
        }
        fT[MT] -= AT[MT]
      }
      for (; 0 === fT[--yT];) fT.pop();
      for (; 0 === fT[0]; fT.shift()) --lT;
      return fT[0] ? (kT.d = fT, kT.e = lT, fK ? JK(kT, jT) : kT) : new CT(0)
    }

    function HK(TT, kT, cT) {
      var lT, MT = PK(TT),
        KT = aK(TT.d),
        OT = KT.length;
      return kT ? (cT && (lT = cT - OT) > 0 ? KT = KT.charAt(0) + "." + KT.slice(1) + mK(lT) : OT > 1 && (KT = KT.charAt(0) + "." + KT.slice(1)), KT = KT + (MT < 0 ? "e" : "e+") + MT) : MT < 0 ? (KT = "0." + mK(-MT - 1) + KT, cT && (lT = cT - OT) > 0 && (KT += mK(lT))) : MT >= OT ? (KT += mK(MT + 1 - OT), cT && (lT = cT - MT - 1) > 0 && (KT = KT + "." + mK(lT))) : ((lT = MT + 1) < OT && (KT = KT.slice(0, lT) + "." + KT.slice(lT)), cT && (lT = cT - OT) > 0 && (MT + 1 === OT && (KT += "."), KT += mK(lT))), TT.s < 0 ? "-" + KT : KT
    }

    function eK(TT, kT) {
      if (TT.length > kT) return TT.length = kT, !0
    }

    function GK(TT) {
      if (!TT || "object" !== typeof TT) throw Error(xK + "Object expected");
      var kT, cT, lT, MT = ["precision", 1, yK, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (kT = 0; kT < MT.length; kT += 3)
        if (void 0 !== (lT = TT[cT = MT[kT]])) {
          if (!(CK(lT) === lT && lT >= MT[kT + 1] && lT <= MT[kT + 2])) throw Error(IK + cT + ": " + lT);
          this[cT] = lT
        } if (void 0 !== (lT = TT[cT = "LN10"])) {
        if (lT != Math.LN10) throw Error(IK + cT + ": " + lT);
        this[cT] = new this(lT)
      }
      return this
    }
    var VK = function TT(kT) {
      var cT, lT, MT;

      function KT(TT) {
        var kT = this;
        if (!(kT instanceof KT)) return new KT(TT);
        if (kT.constructor = KT, TT instanceof KT) return kT.s = TT.s, kT.e = TT.e, void(kT.d = (TT = TT.d) ? TT.slice() : TT);
        if ("number" === typeof TT) {
          if (0 * TT !== 0) throw Error(IK + TT);
          if (TT > 0) kT.s = 1;
          else {
            if (!(TT < 0)) return kT.s = 0, kT.e = 0, void(kT.d = [0]);
            TT = -TT, kT.s = -1
          }
          return TT === ~~TT && TT < 1e7 ? (kT.e = 0, void(kT.d = [TT])) : zK(kT, TT.toString())
        }
        if ("string" !== typeof TT) throw Error(IK + TT);
        if (45 === TT.charCodeAt(0) ? (TT = TT.slice(1), kT.s = -1) : kT.s = 1, !vK.test(TT)) throw Error(IK + TT);
        zK(kT, TT)
      }
      if (KT.prototype = QK, KT.ROUND_UP = 0, KT.ROUND_DOWN = 1, KT.ROUND_CEIL = 2, KT.ROUND_FLOOR = 3, KT.ROUND_HALF_UP = 4, KT.ROUND_HALF_DOWN = 5, KT.ROUND_HALF_EVEN = 6, KT.ROUND_HALF_CEIL = 7, KT.ROUND_HALF_FLOOR = 8, KT.clone = TT, KT.config = KT.set = GK, void 0 === kT && (kT = {}), kT)
        for (MT = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], cT = 0; cT < MT.length;) kT.hasOwnProperty(lT = MT[cT++]) || (kT[lT] = this[lT]);
      return KT.config(kT), KT
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    OK = new VK(1);
    var EK;
    ! function(TT) {
      TT.AED = "aed", TT.AFN = "afn", TT.ALL = "all", TT.AMD = "amd", TT.ANG = "ang", TT.AOA = "aoa", TT.ARS = "ars", TT.AUD = "aud", TT.AWG = "awg", TT.AZN = "azn", TT.BAM = "bam", TT.BBD = "bbd", TT.BDT = "bdt", TT.BGN = "bgn", TT.BHD = "bhd", TT.BIF = "bif", TT.BMD = "bmd", TT.BND = "bnd", TT.BOB = "bob", TT.BOV = "bov", TT.BRL = "brl", TT.BSD = "bsd", TT.BTN = "btn", TT.BWP = "bwp", TT.BYN = "byn", TT.BYR = "byr", TT.BZD = "bzd", TT.CAD = "cad", TT.CDF = "cdf", TT.CHE = "che", TT.CHF = "chf", TT.CHW = "chw", TT.CLF = "clf", TT.CLP = "clp", TT.CNY = "cny", TT.COP = "cop", TT.COU = "cou", TT.CRC = "crc", TT.CUC = "cuc", TT.CUP = "cup", TT.CVE = "cve", TT.CZK = "czk", TT.DJF = "djf", TT.DKK = "dkk", TT.DOP = "dop", TT.DZD = "dzd", TT.EGP = "egp", TT.ERN = "ern", TT.ETB = "etb", TT.EUR = "eur", TT.FJD = "fjd", TT.FKP = "fkp", TT.GBP = "gbp", TT.GEL = "gel", TT.GHS = "ghs", TT.GIP = "gip", TT.GMD = "gmd", TT.GNF = "gnf", TT.GTQ = "gtq", TT.GYD = "gyd", TT.HKD = "hkd", TT.HNL = "hnl", TT.HRK = "hrk", TT.HTG = "htg", TT.HUF = "huf", TT.IDR = "idr", TT.ILS = "ils", TT.INR = "inr", TT.IQD = "iqd", TT.IRR = "irr", TT.ISK = "isk", TT.JMD = "jmd", TT.JOD = "jod", TT.JPY = "jpy", TT.KES = "kes", TT.KGS = "kgs", TT.KHR = "khr", TT.KMF = "kmf", TT.KPW = "kpw", TT.KRW = "krw", TT.KWD = "kwd", TT.KYD = "kyd", TT.KZT = "kzt", TT.LAK = "lak", TT.LBP = "lbp", TT.LKR = "lkr", TT.LRD = "lrd", TT.LSL = "lsl", TT.LTL = "ltl", TT.LVL = "lvl", TT.LYD = "lyd", TT.MAD = "mad", TT.MDL = "mdl", TT.MGA = "mga", TT.MKD = "mkd", TT.MMK = "mmk", TT.MNT = "mnt", TT.MOP = "mop", TT.MRO = "mro", TT.MUR = "mur", TT.MVR = "mvr", TT.MWK = "mwk", TT.MXN = "mxn", TT.MXV = "mxv", TT.MYR = "myr", TT.MZN = "mzn", TT.NAD = "nad", TT.NGN = "ngn", TT.NIO = "nio", TT.NOK = "nok", TT.NPR = "npr", TT.NZD = "nzd", TT.OMR = "omr", TT.PAB = "pab", TT.PEN = "pen", TT.PGK = "pgk", TT.PHP = "php", TT.PKR = "pkr", TT.PLN = "pln", TT.PYG = "pyg", TT.QAR = "qar", TT.RON = "ron", TT.RSD = "rsd", TT.RUB = "rub", TT.RWF = "rwf", TT.SAR = "sar", TT.SBD = "sbd", TT.SCR = "scr", TT.SDG = "sdg", TT.SEK = "sek", TT.SGD = "sgd", TT.SHP = "shp", TT.SLL = "sll", TT.SOS = "sos", TT.SRD = "srd", TT.SSP = "ssp", TT.STD = "std", TT.SVC = "svc", TT.SYP = "syp", TT.SZL = "szl", TT.THB = "thb", TT.TJS = "tjs", TT.TMT = "tmt", TT.TND = "tnd", TT.TOP = "top", TT.TRY = "try", TT.TTD = "ttd", TT.TWD = "twd", TT.TZS = "tzs", TT.UAH = "uah", TT.UGX = "ugx", TT.USD = "usd", TT.USN = "usn", TT.USS = "uss", TT.UYI = "uyi", TT.UYU = "uyu", TT.UZS = "uzs", TT.VEF = "vef", TT.VND = "vnd", TT.VUV = "vuv", TT.WST = "wst", TT.XAF = "xaf", TT.XAG = "xag", TT.XAU = "xau", TT.XBA = "xba", TT.XBB = "xbb", TT.XBC = "xbc", TT.XBD = "xbd", TT.XCD = "xcd", TT.XDR = "xdr", TT.XFU = "xfu", TT.XOF = "xof", TT.XPD = "xpd", TT.XPF = "xpf", TT.XPT = "xpt", TT.XSU = "xsu", TT.XTS = "xts", TT.XUA = "xua", TT.YER = "yer", TT.ZAR = "zar", TT.ZMW = "zmw", TT.ZWL = "zwl"
    }(EK || (EK = {}));
    EK.AED, EK.AFN, EK.ALL, EK.AMD, EK.ANG, EK.AOA, EK.ARS, EK.AUD, EK.AWG, EK.AZN, EK.BAM, EK.BBD, EK.BDT, EK.BGN, EK.BHD, EK.BIF, EK.BMD, EK.BND, EK.BOB, EK.BOV, EK.BRL, EK.BSD, EK.BTN, EK.BWP, EK.BYR, EK.BYN, EK.BZD, EK.CAD, EK.CDF, EK.CHE, EK.CHF, EK.CHW, EK.CLF, EK.CLP, EK.CNY, EK.COP, EK.COU, EK.CRC, EK.CUC, EK.CUP, EK.CVE, EK.CZK, EK.DJF, EK.DKK, EK.DOP, EK.DZD, EK.EGP, EK.ERN, EK.ETB, EK.EUR, EK.FJD, EK.FKP, EK.GBP, EK.GEL, EK.GHS, EK.GIP, EK.GMD, EK.GNF, EK.GTQ, EK.GYD, EK.HKD, EK.HNL, EK.HRK, EK.HTG, EK.HUF, EK.IDR, EK.ILS, EK.INR, EK.IQD, EK.IRR, EK.ISK, EK.JMD, EK.JOD, EK.JPY, EK.KES, EK.KGS, EK.KHR, EK.KMF, EK.KPW, EK.KRW, EK.KWD, EK.KYD, EK.KZT, EK.LAK, EK.LBP, EK.LKR, EK.LRD, EK.LSL, EK.LTL, EK.LVL, EK.LYD, EK.MAD, EK.MDL, EK.MGA, EK.MKD, EK.MMK, EK.MNT, EK.MOP, EK.MRO, EK.MUR, EK.MVR, EK.MWK, EK.MXN, EK.MXV, EK.MYR, EK.MZN, EK.NAD, EK.NGN, EK.NIO, EK.NOK, EK.NPR, EK.NZD, EK.OMR, EK.PAB, EK.PEN, EK.PGK, EK.PHP, EK.PKR, EK.PLN, EK.PYG, EK.QAR, EK.RON, EK.RSD, EK.RUB, EK.RWF, EK.SAR, EK.SBD, EK.SCR, EK.SDG, EK.SEK, EK.SGD, EK.SHP, EK.SLL, EK.SOS, EK.SRD, EK.SSP, EK.STD, EK.SVC, EK.SYP, EK.SZL, EK.THB, EK.TJS, EK.TMT, EK.TND, EK.TOP, EK.TRY, EK.TTD, EK.TWD, EK.TZS, EK.UAH, EK.UGX, EK.USD, EK.USN, EK.USS, EK.UYI, EK.UYU, EK.UZS, EK.VEF, EK.VND, EK.VUV, EK.WST, EK.XAF, EK.XAG, EK.XAU, EK.XBA, EK.XBB, EK.XBC, EK.XBD, EK.XCD, EK.XDR, EK.XFU, EK.XOF, EK.XPD, EK.XPF, EK.XPT, EK.XSU, EK.XTS, EK.XUA, EK.YER, EK.ZAR, EK.ZMW, EK.ZWL;
    var ZK = {
      exports: {}
    };
    ! function(TT, kT) {
      var cT = "__lodash_hash_undefined__",
        lT = 9007199254740991,
        KT = "[object Arguments]",
        OT = "[object Array]",
        yT = "[object Boolean]",
        fT = "[object Date]",
        xT = "[object Error]",
        IT = "[object Function]",
        AT = "[object Map]",
        CT = "[object Number]",
        jT = "[object Object]",
        vT = "[object Promise]",
        tT = "[object RegExp]",
        hT = "[object Set]",
        NT = "[object String]",
        QT = "[object Symbol]",
        ST = "[object WeakMap]",
        DT = "[object ArrayBuffer]",
        aT = "[object DataView]",
        FT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        rT = /^\w*$/,
        PT = /^\./,
        wT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        mT = /\\(\\)?/g,
        bT = /^\[object .+?Constructor\]$/,
        zT = /^(?:0|[1-9]\d*)$/,
        JT = {};
      JT["[object Float32Array]"] = JT["[object Float64Array]"] = JT["[object Int8Array]"] = JT["[object Int16Array]"] = JT["[object Int32Array]"] = JT["[object Uint8Array]"] = JT["[object Uint8ClampedArray]"] = JT["[object Uint16Array]"] = JT["[object Uint32Array]"] = !0, JT[KT] = JT[OT] = JT[DT] = JT[yT] = JT[aT] = JT[fT] = JT[xT] = JT[IT] = JT[AT] = JT[CT] = JT[jT] = JT[tT] = JT[hT] = JT[NT] = JT[ST] = !1;
      var oT = "object" == typeof MT && MT && MT.Object === Object && MT,
        HT = "object" == typeof self && self && self.Object === Object && self,
        eT = oT || HT || Function("return this")(),
        GT = kT && !kT.nodeType && kT,
        VT = GT && TT && !TT.nodeType && TT,
        ET = VT && VT.exports === GT && oT.process,
        ZT = function() {
          try {
            return ET && ET.binding("util")
          } catch (TT) {}
        }(),
        uT = ZT && ZT.isTypedArray;

      function XT(TT, kT) {
        for (var cT = -1, lT = TT ? TT.length : 0; ++cT < lT && !1 !== kT(TT[cT], cT, TT););
        return TT
      }

      function dT(TT, kT) {
        for (var cT = -1, lT = TT ? TT.length : 0; ++cT < lT;)
          if (kT(TT[cT], cT, TT)) return !0;
        return !1
      }

      function LT(TT) {
        var kT = !1;
        if (null != TT && "function" != typeof TT.toString) try {
          kT = !!(TT + "")
        } catch (cT) {}
        return kT
      }

      function RT(TT) {
        var kT = -1,
          cT = Array(TT.size);
        return TT.forEach((function(TT, lT) {
          cT[++kT] = [lT, TT]
        })), cT
      }

      function gT(TT, kT) {
        return function(cT) {
          return TT(kT(cT))
        }
      }

      function UT(TT) {
        var kT = -1,
          cT = Array(TT.size);
        return TT.forEach((function(TT) {
          cT[++kT] = TT
        })), cT
      }
      var YT = Array.prototype,
        BT = Function.prototype,
        WT = Object.prototype,
        nT = eT["__core-js_shared__"],
        pT = function() {
          var TT = /[^.]+$/.exec(nT && nT.keys && nT.keys.IE_PROTO || "");
          return TT ? "Symbol(src)_1." + TT : ""
        }(),
        iT = BT.toString,
        qT = WT.hasOwnProperty,
        sT = WT.toString,
        Tk = RegExp("^" + iT.call(qT).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        kk = eT.Symbol,
        ck = eT.Uint8Array,
        lk = gT(Object.getPrototypeOf, Object),
        Mk = Object.create,
        Kk = WT.propertyIsEnumerable,
        Ok = YT.splice,
        yk = gT(Object.keys, Object),
        fk = gk(eT, "DataView"),
        xk = gk(eT, "Map"),
        Ik = gk(eT, "Promise"),
        Ak = gk(eT, "Set"),
        Ck = gk(eT, "WeakMap"),
        jk = gk(Object, "create"),
        vk = qk(fk),
        tk = qk(xk),
        hk = qk(Ik),
        Nk = qk(Ak),
        Qk = qk(Ck),
        Sk = kk ? kk.prototype : void 0,
        Dk = Sk ? Sk.valueOf : void 0,
        ak = Sk ? Sk.toString : void 0;

      function Fk(TT) {
        var kT = -1,
          cT = TT ? TT.length : 0;
        for (this.clear(); ++kT < cT;) {
          var lT = TT[kT];
          this.set(lT[0], lT[1])
        }
      }

      function rk(TT) {
        var kT = -1,
          cT = TT ? TT.length : 0;
        for (this.clear(); ++kT < cT;) {
          var lT = TT[kT];
          this.set(lT[0], lT[1])
        }
      }

      function Pk(TT) {
        var kT = -1,
          cT = TT ? TT.length : 0;
        for (this.clear(); ++kT < cT;) {
          var lT = TT[kT];
          this.set(lT[0], lT[1])
        }
      }

      function wk(TT) {
        var kT = -1,
          cT = TT ? TT.length : 0;
        for (this.__data__ = new Pk; ++kT < cT;) this.add(TT[kT])
      }

      function mk(TT) {
        this.__data__ = new rk(TT)
      }

      function bk(TT, kT) {
        var cT = cc(TT) || kc(TT) ? function(TT, kT) {
            for (var cT = -1, lT = Array(TT); ++cT < TT;) lT[cT] = kT(cT);
            return lT
          }(TT.length, String) : [],
          lT = cT.length,
          MT = !!lT;
        for (var KT in TT) !kT && !qT.call(TT, KT) || MT && ("length" == KT || Yk(KT, lT)) || cT.push(KT);
        return cT
      }

      function zk(TT, kT) {
        for (var cT = TT.length; cT--;)
          if (Tc(TT[cT][0], kT)) return cT;
        return -1
      }
      Fk.prototype.clear = function() {
        this.__data__ = jk ? jk(null) : {}
      }, Fk.prototype.delete = function(TT) {
        return this.has(TT) && delete this.__data__[TT]
      }, Fk.prototype.get = function(TT) {
        var kT = this.__data__;
        if (jk) {
          var lT = kT[TT];
          return lT === cT ? void 0 : lT
        }
        return qT.call(kT, TT) ? kT[TT] : void 0
      }, Fk.prototype.has = function(TT) {
        var kT = this.__data__;
        return jk ? void 0 !== kT[TT] : qT.call(kT, TT)
      }, Fk.prototype.set = function(TT, kT) {
        return this.__data__[TT] = jk && void 0 === kT ? cT : kT, this
      }, rk.prototype.clear = function() {
        this.__data__ = []
      }, rk.prototype.delete = function(TT) {
        var kT = this.__data__,
          cT = zk(kT, TT);
        return !(cT < 0) && (cT == kT.length - 1 ? kT.pop() : Ok.call(kT, cT, 1), !0)
      }, rk.prototype.get = function(TT) {
        var kT = this.__data__,
          cT = zk(kT, TT);
        return cT < 0 ? void 0 : kT[cT][1]
      }, rk.prototype.has = function(TT) {
        return zk(this.__data__, TT) > -1
      }, rk.prototype.set = function(TT, kT) {
        var cT = this.__data__,
          lT = zk(cT, TT);
        return lT < 0 ? cT.push([TT, kT]) : cT[lT][1] = kT, this
      }, Pk.prototype.clear = function() {
        this.__data__ = {
          hash: new Fk,
          map: new(xk || rk),
          string: new Fk
        }
      }, Pk.prototype.delete = function(TT) {
        return Rk(this, TT).delete(TT)
      }, Pk.prototype.get = function(TT) {
        return Rk(this, TT).get(TT)
      }, Pk.prototype.has = function(TT) {
        return Rk(this, TT).has(TT)
      }, Pk.prototype.set = function(TT, kT) {
        return Rk(this, TT).set(TT, kT), this
      }, wk.prototype.add = wk.prototype.push = function(TT) {
        return this.__data__.set(TT, cT), this
      }, wk.prototype.has = function(TT) {
        return this.__data__.has(TT)
      }, mk.prototype.clear = function() {
        this.__data__ = new rk
      }, mk.prototype.delete = function(TT) {
        return this.__data__.delete(TT)
      }, mk.prototype.get = function(TT) {
        return this.__data__.get(TT)
      }, mk.prototype.has = function(TT) {
        return this.__data__.has(TT)
      }, mk.prototype.set = function(TT, kT) {
        var cT = this.__data__;
        if (cT instanceof rk) {
          var lT = cT.__data__;
          if (!xk || lT.length < 199) return lT.push([TT, kT]), this;
          cT = this.__data__ = new Pk(lT)
        }
        return cT.set(TT, kT), this
      };
      var Jk, Hk = function(TT, kT, cT) {
        for (var lT = -1, MT = Object(TT), KT = cT(TT), OT = KT.length; OT--;) {
          var yT = KT[Jk ? OT : ++lT];
          if (!1 === kT(MT[yT], yT, MT)) break
        }
        return TT
      };

      function ek(TT, kT) {
        return TT && Hk(TT, kT, Ac)
      }

      function Gk(TT, kT) {
        for (var cT = 0, lT = (kT = Bk(kT, TT) ? [kT] : dk(kT)).length; null != TT && cT < lT;) TT = TT[ik(kT[cT++])];
        return cT && cT == lT ? TT : void 0
      }

      function Vk(TT, kT) {
        return null != TT && kT in Object(TT)
      }

      function Ek(TT, kT, cT, lT, MT) {
        return TT === kT || (null == TT || null == kT || !Oc(TT) && !yc(kT) ? TT !== TT && kT !== kT : function(TT, kT, cT, lT, MT, IT) {
          var vT = cc(TT),
            ST = cc(kT),
            FT = OT,
            rT = OT;
          vT || (FT = (FT = Uk(TT)) == KT ? jT : FT);
          ST || (rT = (rT = Uk(kT)) == KT ? jT : rT);
          var PT = FT == jT && !LT(TT),
            wT = rT == jT && !LT(kT),
            mT = FT == rT;
          if (mT && !PT) return IT || (IT = new mk), vT || Ic(TT) ? Lk(TT, kT, cT, lT, MT, IT) : function(TT, kT, cT, lT, MT, KT, OT) {
            switch (cT) {
              case aT:
                if (TT.byteLength != kT.byteLength || TT.byteOffset != kT.byteOffset) return !1;
                TT = TT.buffer, kT = kT.buffer;
              case DT:
                return !(TT.byteLength != kT.byteLength || !lT(new ck(TT), new ck(kT)));
              case yT:
              case fT:
              case CT:
                return Tc(+TT, +kT);
              case xT:
                return TT.name == kT.name && TT.message == kT.message;
              case tT:
              case NT:
                return TT == kT + "";
              case AT:
                var IT = RT;
              case hT:
                var jT = 2 & KT;
                if (IT || (IT = UT), TT.size != kT.size && !jT) return !1;
                var vT = OT.get(TT);
                if (vT) return vT == kT;
                KT |= 1, OT.set(TT, kT);
                var ST = Lk(IT(TT), IT(kT), lT, MT, KT, OT);
                return OT.delete(TT), ST;
              case QT:
                if (Dk) return Dk.call(TT) == Dk.call(kT)
            }
            return !1
          }(TT, kT, FT, cT, lT, MT, IT);
          if (!(2 & MT)) {
            var bT = PT && qT.call(TT, "__wrapped__"),
              zT = wT && qT.call(kT, "__wrapped__");
            if (bT || zT) {
              var JT = bT ? TT.value() : TT,
                oT = zT ? kT.value() : kT;
              return IT || (IT = new mk), cT(JT, oT, lT, MT, IT)
            }
          }
          if (!mT) return !1;
          return IT || (IT = new mk),
            function(TT, kT, cT, lT, MT, KT) {
              var OT = 2 & MT,
                yT = Ac(TT),
                fT = yT.length,
                xT = Ac(kT),
                IT = xT.length;
              if (fT != IT && !OT) return !1;
              var AT = fT;
              for (; AT--;) {
                var CT = yT[AT];
                if (!(OT ? CT in kT : qT.call(kT, CT))) return !1
              }
              var jT = KT.get(TT);
              if (jT && KT.get(kT)) return jT == kT;
              var vT = !0;
              KT.set(TT, kT), KT.set(kT, TT);
              var tT = OT;
              for (; ++AT < fT;) {
                var hT = TT[CT = yT[AT]],
                  NT = kT[CT];
                if (lT) var QT = OT ? lT(NT, hT, CT, kT, TT, KT) : lT(hT, NT, CT, TT, kT, KT);
                if (!(void 0 === QT ? hT === NT || cT(hT, NT, lT, MT, KT) : QT)) {
                  vT = !1;
                  break
                }
                tT || (tT = "constructor" == CT)
              }
              if (vT && !tT) {
                var ST = TT.constructor,
                  DT = kT.constructor;
                ST == DT || !("constructor" in TT) || !("constructor" in kT) || "function" == typeof ST && ST instanceof ST && "function" == typeof DT && DT instanceof DT || (vT = !1)
              }
              return KT.delete(TT), KT.delete(kT), vT
            }(TT, kT, cT, lT, MT, IT)
        }(TT, kT, Ek, cT, lT, MT))
      }

      function Zk(TT) {
        return !(!Oc(TT) || (kT = TT, pT && pT in kT)) && (Mc(TT) || LT(TT) ? Tk : bT).test(qk(TT));
        var kT
      }

      function uk(TT) {
        return "function" == typeof TT ? TT : null == TT ? Cc : "object" == typeof TT ? cc(TT) ? function(TT, kT) {
          if (Bk(TT) && Wk(kT)) return nk(ik(TT), kT);
          return function(cT) {
            var lT = function(TT, kT, cT) {
              var lT = null == TT ? void 0 : Gk(TT, kT);
              return void 0 === lT ? cT : lT
            }(cT, TT);
            return void 0 === lT && lT === kT ? function(TT, kT) {
              return null != TT && function(TT, kT, cT) {
                kT = Bk(kT, TT) ? [kT] : dk(kT);
                var lT, MT = -1,
                  KT = kT.length;
                for (; ++MT < KT;) {
                  var OT = ik(kT[MT]);
                  if (!(lT = null != TT && cT(TT, OT))) break;
                  TT = TT[OT]
                }
                if (lT) return lT;
                KT = TT ? TT.length : 0;
                return !!KT && Kc(KT) && Yk(OT, KT) && (cc(TT) || kc(TT))
              }(TT, kT, Vk)
            }(cT, TT) : Ek(kT, lT, void 0, 3)
          }
        }(TT[0], TT[1]) : function(TT) {
          var kT = function(TT) {
            var kT = Ac(TT),
              cT = kT.length;
            for (; cT--;) {
              var lT = kT[cT],
                MT = TT[lT];
              kT[cT] = [lT, MT, Wk(MT)]
            }
            return kT
          }(TT);
          if (1 == kT.length && kT[0][2]) return nk(kT[0][0], kT[0][1]);
          return function(cT) {
            return cT === TT || function(TT, kT, cT, lT) {
              var MT = cT.length,
                KT = MT,
                OT = !lT;
              if (null == TT) return !KT;
              for (TT = Object(TT); MT--;) {
                var yT = cT[MT];
                if (OT && yT[2] ? yT[1] !== TT[yT[0]] : !(yT[0] in TT)) return !1
              }
              for (; ++MT < KT;) {
                var fT = (yT = cT[MT])[0],
                  xT = TT[fT],
                  IT = yT[1];
                if (OT && yT[2]) {
                  if (void 0 === xT && !(fT in TT)) return !1
                } else {
                  var AT = new mk;
                  if (lT) var CT = lT(xT, IT, fT, TT, kT, AT);
                  if (!(void 0 === CT ? Ek(IT, xT, lT, 3, AT) : CT)) return !1
                }
              }
              return !0
            }(cT, TT, kT)
          }
        }(TT) : function(TT) {
          return Bk(TT) ? (kT = ik(TT), function(TT) {
            return null == TT ? void 0 : TT[kT]
          }) : function(TT) {
            return function(kT) {
              return Gk(kT, TT)
            }
          }(TT);
          var kT
        }(TT)
      }

      function Xk(TT) {
        if (! function(TT) {
            var kT = TT && TT.constructor,
              cT = "function" == typeof kT && kT.prototype || WT;
            return TT === cT
          }(TT)) return yk(TT);
        var kT = [];
        for (var cT in Object(TT)) qT.call(TT, cT) && "constructor" != cT && kT.push(cT);
        return kT
      }

      function dk(TT) {
        return cc(TT) ? TT : pk(TT)
      }

      function Lk(TT, kT, cT, lT, MT, KT) {
        var OT = 2 & MT,
          yT = TT.length,
          fT = kT.length;
        if (yT != fT && !(OT && fT > yT)) return !1;
        var xT = KT.get(TT);
        if (xT && KT.get(kT)) return xT == kT;
        var IT = -1,
          AT = !0,
          CT = 1 & MT ? new wk : void 0;
        for (KT.set(TT, kT), KT.set(kT, TT); ++IT < yT;) {
          var jT = TT[IT],
            vT = kT[IT];
          if (lT) var tT = OT ? lT(vT, jT, IT, kT, TT, KT) : lT(jT, vT, IT, TT, kT, KT);
          if (void 0 !== tT) {
            if (tT) continue;
            AT = !1;
            break
          }
          if (CT) {
            if (!dT(kT, (function(TT, kT) {
                if (!CT.has(kT) && (jT === TT || cT(jT, TT, lT, MT, KT))) return CT.add(kT)
              }))) {
              AT = !1;
              break
            }
          } else if (jT !== vT && !cT(jT, vT, lT, MT, KT)) {
            AT = !1;
            break
          }
        }
        return KT.delete(TT), KT.delete(kT), AT
      }

      function Rk(TT, kT) {
        var cT = TT.__data__;
        return function(TT) {
          var kT = typeof TT;
          return "string" == kT || "number" == kT || "symbol" == kT || "boolean" == kT ? "__proto__" !== TT : null === TT
        }(kT) ? cT["string" == typeof kT ? "string" : "hash"] : cT.map
      }

      function gk(TT, kT) {
        var cT = function(TT, kT) {
          return null == TT ? void 0 : TT[kT]
        }(TT, kT);
        return Zk(cT) ? cT : void 0
      }
      var Uk = function(TT) {
        return sT.call(TT)
      };

      function Yk(TT, kT) {
        return !!(kT = null == kT ? lT : kT) && ("number" == typeof TT || zT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < kT
      }

      function Bk(TT, kT) {
        if (cc(TT)) return !1;
        var cT = typeof TT;
        return !("number" != cT && "symbol" != cT && "boolean" != cT && null != TT && !fc(TT)) || (rT.test(TT) || !FT.test(TT) || null != kT && TT in Object(kT))
      }

      function Wk(TT) {
        return TT === TT && !Oc(TT)
      }

      function nk(TT, kT) {
        return function(cT) {
          return null != cT && (cT[TT] === kT && (void 0 !== kT || TT in Object(cT)))
        }
      }(fk && Uk(new fk(new ArrayBuffer(1))) != aT || xk && Uk(new xk) != AT || Ik && Uk(Ik.resolve()) != vT || Ak && Uk(new Ak) != hT || Ck && Uk(new Ck) != ST) && (Uk = function(TT) {
        var kT = sT.call(TT),
          cT = kT == jT ? TT.constructor : void 0,
          lT = cT ? qk(cT) : void 0;
        if (lT) switch (lT) {
          case vk:
            return aT;
          case tk:
            return AT;
          case hk:
            return vT;
          case Nk:
            return hT;
          case Qk:
            return ST
        }
        return kT
      });
      var pk = sk((function(TT) {
        var kT;
        TT = null == (kT = TT) ? "" : function(TT) {
          if ("string" == typeof TT) return TT;
          if (fc(TT)) return ak ? ak.call(TT) : "";
          var kT = TT + "";
          return "0" == kT && 1 / TT == -1 / 0 ? "-0" : kT
        }(kT);
        var cT = [];
        return PT.test(TT) && cT.push(""), TT.replace(wT, (function(TT, kT, lT, MT) {
          cT.push(lT ? MT.replace(mT, "$1") : kT || TT)
        })), cT
      }));

      function ik(TT) {
        if ("string" == typeof TT || fc(TT)) return TT;
        var kT = TT + "";
        return "0" == kT && 1 / TT == -1 / 0 ? "-0" : kT
      }

      function qk(TT) {
        if (null != TT) {
          try {
            return iT.call(TT)
          } catch (kT) {}
          try {
            return TT + ""
          } catch (kT) {}
        }
        return ""
      }

      function sk(TT, kT) {
        if ("function" != typeof TT || kT && "function" != typeof kT) throw new TypeError("Expected a function");
        var cT = function() {
          var lT = arguments,
            MT = kT ? kT.apply(this, lT) : lT[0],
            KT = cT.cache;
          if (KT.has(MT)) return KT.get(MT);
          var OT = TT.apply(this, lT);
          return cT.cache = KT.set(MT, OT), OT
        };
        return cT.cache = new(sk.Cache || Pk), cT
      }

      function Tc(TT, kT) {
        return TT === kT || TT !== TT && kT !== kT
      }

      function kc(TT) {
        return function(TT) {
          return yc(TT) && lc(TT)
        }(TT) && qT.call(TT, "callee") && (!Kk.call(TT, "callee") || sT.call(TT) == KT)
      }
      sk.Cache = Pk;
      var cc = Array.isArray;

      function lc(TT) {
        return null != TT && Kc(TT.length) && !Mc(TT)
      }

      function Mc(TT) {
        var kT = Oc(TT) ? sT.call(TT) : "";
        return kT == IT || "[object GeneratorFunction]" == kT
      }

      function Kc(TT) {
        return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= lT
      }

      function Oc(TT) {
        var kT = typeof TT;
        return !!TT && ("object" == kT || "function" == kT)
      }

      function yc(TT) {
        return !!TT && "object" == typeof TT
      }

      function fc(TT) {
        return "symbol" == typeof TT || yc(TT) && sT.call(TT) == QT
      }
      var xc, Ic = uT ? (xc = uT, function(TT) {
        return xc(TT)
      }) : function(TT) {
        return yc(TT) && Kc(TT.length) && !!JT[sT.call(TT)]
      };

      function Ac(TT) {
        return lc(TT) ? bk(TT) : Xk(TT)
      }

      function Cc(TT) {
        return TT
      }
      TT.exports = function(TT, kT, cT) {
        var lT, MT = cc(TT) || Ic(TT);
        if (kT = uk(kT), null == cT)
          if (MT || Oc(TT)) {
            var KT = TT.constructor;
            cT = MT ? cc(TT) ? new KT : [] : Mc(KT) ? Oc(lT = lk(TT)) ? Mk(lT) : {} : {}
          } else cT = {};
        return (MT ? XT : ek)(TT, (function(TT, lT, MT) {
          return kT(cT, TT, lT, MT)
        })), cT
      }
    }(ZK, ZK.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: uK
    } = lT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);