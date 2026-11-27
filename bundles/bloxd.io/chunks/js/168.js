export const id = 168;
export const ids = [168];
export const modules = {
  7720: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LN,
      i: () => DO
    });
    var mW = {};
    OW.r(mW), OW.d(mW, {
      c: () => Nm,
      h: () => cm,
      g: () => Lm,
      l: () => zO,
      n: () => rO,
      o: () => um,
      p: () => Wm,
      r: () => em,
      u: () => ym,
      v: () => dm,
      y: () => FO,
      z: () => Jm,
      D: () => nm,
      E: () => om,
      K: () => QO,
      I: () => mm,
      M: () => Hm,
      O: () => hm
    });
    var EW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function NW(WW) {
      return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
    }
    var PW = {
      exports: {}
    };
    ! function(WW) {
      var iW = Object.prototype.hasOwnProperty,
        OW = "~";

      function mW() {}

      function EW(WW, iW, OW) {
        this.cZ = WW, this.context = iW, this.once = OW || !1
      }

      function NW(WW, iW, mW, NW, PW) {
        if ("function" !== typeof mW) throw new TypeError("The listener must be a function");
        var LW = new EW(mW, NW || WW, PW),
          cW = OW ? OW + iW : iW;
        return WW._events[cW] ? WW._events[cW].cZ ? WW._events[cW] = [WW._events[cW], LW] : WW._events[cW].push(LW) : (WW._events[cW] = LW, WW._eventsCount++), WW
      }

      function PW(WW, iW) {
        0 === --WW._eventsCount ? WW._events = new mW : delete WW._events[iW]
      }

      function LW() {
        this._events = new mW, this._eventsCount = 0
      }
      Object.create && (mW.prototype = Object.create(null), (new mW).__proto__ || (OW = !1)), LW.prototype.eventNames = function() {
        var WW, mW, EW = [];
        if (0 === this._eventsCount) return EW;
        for (mW in WW = this._events) iW.call(WW, mW) && EW.push(OW ? mW.slice(1) : mW);
        return Object.getOwnPropertySymbols ? EW.concat(Object.getOwnPropertySymbols(WW)) : EW
      }, LW.prototype.listeners = function(WW) {
        var iW = OW ? OW + WW : WW,
          mW = this._events[iW];
        if (!mW) return [];
        if (mW.cZ) return [mW.cZ];
        for (var EW = 0, NW = mW.length, PW = new Array(NW); EW < NW; EW++) PW[EW] = mW[EW].cZ;
        return PW
      }, LW.prototype.listenerCount = function(WW) {
        var iW = OW ? OW + WW : WW,
          mW = this._events[iW];
        return mW ? mW.cZ ? 1 : mW.length : 0
      }, LW.prototype.emit = function(WW, iW, mW, EW, NW, PW) {
        var LW = OW ? OW + WW : WW;
        if (!this._events[LW]) return !1;
        var cW, wW, tW = this._events[LW],
          ZW = arguments.length;
        if (tW.cZ) {
          switch (tW.once && this.removeListener(WW, tW.cZ, void 0, !0), ZW) {
            case 1:
              return tW.cZ.call(tW.context), !0;
            case 2:
              return tW.cZ.call(tW.context, iW), !0;
            case 3:
              return tW.cZ.call(tW.context, iW, mW), !0;
            case 4:
              return tW.cZ.call(tW.context, iW, mW, EW), !0;
            case 5:
              return tW.cZ.call(tW.context, iW, mW, EW, NW), !0;
            case 6:
              return tW.cZ.call(tW.context, iW, mW, EW, NW, PW), !0
          }
          for (wW = 1, cW = new Array(ZW - 1); wW < ZW; wW++) cW[wW - 1] = arguments[wW];
          tW.cZ.apply(tW.context, cW)
        } else {
          var xW, lW = tW.length;
          for (wW = 0; wW < lW; wW++) switch (tW[wW].once && this.removeListener(WW, tW[wW].cZ, void 0, !0), ZW) {
            case 1:
              tW[wW].cZ.call(tW[wW].context);
              break;
            case 2:
              tW[wW].cZ.call(tW[wW].context, iW);
              break;
            case 3:
              tW[wW].cZ.call(tW[wW].context, iW, mW);
              break;
            case 4:
              tW[wW].cZ.call(tW[wW].context, iW, mW, EW);
              break;
            default:
              if (!cW)
                for (xW = 1, cW = new Array(ZW - 1); xW < ZW; xW++) cW[xW - 1] = arguments[xW];
              tW[wW].cZ.apply(tW[wW].context, cW)
          }
        }
        return !0
      }, LW.prototype.on = function(WW, iW, OW) {
        return NW(this, WW, iW, OW, !1)
      }, LW.prototype.once = function(WW, iW, OW) {
        return NW(this, WW, iW, OW, !0)
      }, LW.prototype.removeListener = function(WW, iW, mW, EW) {
        var NW = OW ? OW + WW : WW;
        if (!this._events[NW]) return this;
        if (!iW) return PW(this, NW), this;
        var LW = this._events[NW];
        if (LW.cZ) LW.cZ !== iW || EW && !LW.once || mW && LW.context !== mW || PW(this, NW);
        else {
          for (var cW = 0, wW = [], tW = LW.length; cW < tW; cW++)(LW[cW].cZ !== iW || EW && !LW[cW].once || mW && LW[cW].context !== mW) && wW.push(LW[cW]);
          wW.length ? this._events[NW] = 1 === wW.length ? wW[0] : wW : PW(this, NW)
        }
        return this
      }, LW.prototype.IU = function(WW) {
        var iW;
        return WW ? (iW = OW ? OW + WW : WW, this._events[iW] && PW(this, iW)) : (this._events = new mW, this._eventsCount = 0), this
      }, LW.prototype.off = LW.prototype.removeListener, LW.prototype.addListener = LW.prototype.on, LW.prefixed = OW, LW.EventEmitter = LW, WW.exports = LW
    }(PW);
    var LW, cW, wW = NW(PW.exports);
    ! function(WW) {
      WW.assertEqual = WW => WW, WW.assertIs = function(WW) {}, WW.assertNever = function(WW) {
        throw new Error
      }, WW.arrayToEnum = WW => {
        const iW = {};
        for (const OW of WW) iW[OW] = OW;
        return iW
      }, WW.getValidEnumValues = iW => {
        const OW = WW.objectKeys(iW).filter((WW => "number" !== typeof iW[iW[WW]])),
          mW = {};
        for (const WW of OW) mW[WW] = iW[WW];
        return WW.objectValues(mW)
      }, WW.objectValues = iW => WW.objectKeys(iW).map((function(WW) {
        return iW[WW]
      })), WW.objectKeys = "function" === typeof Object.keys ? WW => Object.keys(WW) : WW => {
        const iW = [];
        for (const OW in WW) Object.prototype.hasOwnProperty.call(WW, OW) && iW.push(OW);
        return iW
      }, WW.find = (WW, iW) => {
        for (const OW of WW)
          if (iW(OW)) return OW
      }, WW.isInteger = "function" === typeof Number.isInteger ? WW => Number.isInteger(WW) : WW => "number" === typeof WW && isFinite(WW) && Math.floor(WW) === WW, WW.joinValues = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return WW.map((WW => "string" === typeof WW ? `'${WW}'` : WW)).join(iW)
      }, WW.jsonStringifyReplacer = (WW, iW) => "bigint" === typeof iW ? iW.toString() : iW
    }(LW || (LW = {})),
    function(WW) {
      WW.mergeShapes = (WW, iW) => ({
        ...WW,
        ...iW
      })
    }(cW || (cW = {}));
    const tW = LW.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      ZW = WW => {
        switch (typeof WW) {
          case "undefined":
            return tW.undefined;
          case "string":
            return tW.string;
          case "number":
            return isNaN(WW) ? tW.nan : tW.number;
          case "boolean":
            return tW.boolean;
          case "function":
            return tW.function;
          case "bigint":
            return tW.bigint;
          case "symbol":
            return tW.symbol;
          case "object":
            return Array.isArray(WW) ? tW.array : null === WW ? tW.null : WW.then && "function" === typeof WW.then && WW.catch && "function" === typeof WW.catch ? tW.promise : "undefined" !== typeof Map && WW instanceof Map ? tW.map : "undefined" !== typeof Set && WW instanceof Set ? tW.set : "undefined" !== typeof Date && WW instanceof Date ? tW.date : tW.object;
          default:
            return tW.unknown
        }
      },
      xW = LW.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class lW extends Error {
      constructor(WW) {
        var iW;
        super(), iW = this, this.issues = [], this.addIssue = WW => {
          this.issues = [...this.issues, WW]
        }, this.addIssues = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          iW.issues = [...iW.issues, ...WW]
        };
        const OW = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, OW) : this.__proto__ = OW, this.name = "ZodError", this.issues = WW
      }
      get errors() {
        return this.issues
      }
      format(WW) {
        const iW = WW || function(WW) {
            return WW.message
          },
          OW = {
            _errors: []
          },
          mW = WW => {
            for (const EW of WW.issues)
              if ("invalid_union" === EW.code) EW.unionErrors.map(mW);
              else if ("invalid_return_type" === EW.code) mW(EW.returnTypeError);
            else if ("invalid_arguments" === EW.code) mW(EW.argumentsError);
            else if (0 === EW.path.length) OW._errors.push(iW(EW));
            else {
              let WW = OW,
                mW = 0;
              for (; mW < EW.path.length;) {
                const OW = EW.path[mW];
                mW === EW.path.length - 1 ? (WW[OW] = WW[OW] || {
                  _errors: []
                }, WW[OW]._errors.push(iW(EW))) : WW[OW] = WW[OW] || {
                  _errors: []
                }, WW = WW[OW], mW++
              }
            }
          };
        return mW(this), OW
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, LW.jsonStringifyReplacer, 2)
      }
      get sZ() {
        return 0 === this.issues.length
      }
      flatten() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WW => WW.message;
        const iW = {},
          OW = [];
        for (const mW of this.issues) mW.path.length > 0 ? (iW[mW.path[0]] = iW[mW.path[0]] || [], iW[mW.path[0]].push(WW(mW))) : OW.push(WW(mW));
        return {
          formErrors: OW,
          fieldErrors: iW
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    lW.create = WW => new lW(WW);
    const AW = (WW, iW) => {
      let OW;
      switch (WW.code) {
        case xW.invalid_type:
          OW = WW.received === tW.undefined ? "Required" : `Expected ${WW.expected}, received ${WW.received}`;
          break;
        case xW.invalid_literal:
          OW = `Invalid literal value, expected ${JSON.stringify(WW.expected,LW.jsonStringifyReplacer)}`;
          break;
        case xW.unrecognized_keys:
          OW = `Unrecognized key(s) in object: ${LW.joinValues(WW.keys,", ")}`;
          break;
        case xW.invalid_union:
          OW = "Invalid input";
          break;
        case xW.invalid_union_discriminator:
          OW = `Invalid discriminator value. Expected ${LW.joinValues(WW.options)}`;
          break;
        case xW.invalid_enum_value:
          OW = `Invalid enum value. Expected ${LW.joinValues(WW.options)}, received '${WW.received}'`;
          break;
        case xW.invalid_arguments:
          OW = "Invalid function arguments";
          break;
        case xW.invalid_return_type:
          OW = "Invalid function return type";
          break;
        case xW.invalid_date:
          OW = "Invalid date";
          break;
        case xW.invalid_string:
          "object" === typeof WW.validation ? "includes" in WW.validation ? (OW = `Invalid input: must include "${WW.validation.includes}"`, "number" === typeof WW.validation.position && (OW = `${OW} at one or more positions greater than or equal to ${WW.validation.position}`)) : "startsWith" in WW.validation ? OW = `Invalid input: must start with "${WW.validation.startsWith}"` : "endsWith" in WW.validation ? OW = `Invalid input: must end with "${WW.validation.endsWith}"` : LW.assertNever(WW.validation) : OW = "regex" !== WW.validation ? `Invalid ${WW.validation}` : "Invalid";
          break;
        case xW.too_small:
          OW = "array" === WW.type ? `Array must contain ${WW.exact?"exactly":WW.inclusive?"at least":"more than"} ${WW.minimum} element(s)` : "string" === WW.type ? `String must contain ${WW.exact?"exactly":WW.inclusive?"at least":"over"} ${WW.minimum} character(s)` : "number" === WW.type ? `Number must be ${WW.exact?"exactly equal to ":WW.inclusive?"greater than or equal to ":"greater than "}${WW.minimum}` : "date" === WW.type ? `Date must be ${WW.exact?"exactly equal to ":WW.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(WW.minimum))}` : "Invalid input";
          break;
        case xW.too_big:
          OW = "array" === WW.type ? `Array must contain ${WW.exact?"exactly":WW.inclusive?"at most":"less than"} ${WW.maximum} element(s)` : "string" === WW.type ? `String must contain ${WW.exact?"exactly":WW.inclusive?"at most":"under"} ${WW.maximum} character(s)` : "number" === WW.type ? `Number must be ${WW.exact?"exactly":WW.inclusive?"less than or equal to":"less than"} ${WW.maximum}` : "bigint" === WW.type ? `BigInt must be ${WW.exact?"exactly":WW.inclusive?"less than or equal to":"less than"} ${WW.maximum}` : "date" === WW.type ? `Date must be ${WW.exact?"exactly":WW.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(WW.maximum))}` : "Invalid input";
          break;
        case xW.custom:
          OW = "Invalid input";
          break;
        case xW.invalid_intersection_types:
          OW = "Intersection results could not be merged";
          break;
        case xW.not_multiple_of:
          OW = `Number must be a multiple of ${WW.multipleOf}`;
          break;
        case xW.not_finite:
          OW = "Number must be finite";
          break;
        default:
          OW = iW.defaultError, LW.assertNever(WW)
      }
      return {
        message: OW
      }
    };
    let bW = AW;

    function jW() {
      return bW
    }
    const UW = WW => {
      const {
        data: iW,
        path: OW,
        errorMaps: mW,
        issueData: EW
      } = WW, NW = [...OW, ...EW.path || []], PW = {
        ...EW,
        path: NW
      };
      let LW = "";
      const cW = mW.filter((WW => !!WW)).slice().reverse();
      for (const wW of cW) LW = wW(PW, {
        data: iW,
        defaultError: LW
      }).message;
      return {
        ...EW,
        path: NW,
        message: EW.message || LW
      }
    };

    function kW(WW, iW) {
      const OW = UW({
        issueData: iW,
        data: WW.data,
        path: WW.path,
        errorMaps: [WW.common.contextualErrorMap, WW.schemaErrorMap, jW(), AW].filter((WW => !!WW))
      });
      WW.common.issues.push(OW)
    }
    class sW {
      constructor() {
        this.value = "valid"
      }
      RA() {
        "valid" === this.value && (this.value = "RA")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(WW, iW) {
        const OW = [];
        for (const mW of iW) {
          if ("aborted" === mW.status) return MW;
          "RA" === mW.status && WW.RA(), OW.push(mW.value)
        }
        return {
          status: WW.value,
          value: OW
        }
      }
      static async mergeObjectAsync(WW, iW) {
        const OW = [];
        for (const mW of iW) OW.push({
          key: await mW.key,
          value: await mW.value
        });
        return sW.mergeObjectSync(WW, OW)
      }
      static mergeObjectSync(WW, iW) {
        const OW = {};
        for (const mW of iW) {
          const {
            key: iW,
            value: EW
          } = mW;
          if ("aborted" === iW.status) return MW;
          if ("aborted" === EW.status) return MW;
          "RA" === iW.status && WW.RA(), "RA" === EW.status && WW.RA(), "__proto__" === iW.value || "undefined" === typeof EW.value && !mW.alwaysSet || (OW[iW.value] = EW.value)
        }
        return {
          status: WW.value,
          value: OW
        }
      }
    }
    const MW = Object.freeze({
        status: "aborted"
      }),
      KW = WW => ({
        status: "RA",
        value: WW
      }),
      SW = WW => ({
        status: "valid",
        value: WW
      }),
      YW = WW => "aborted" === WW.status,
      yW = WW => "RA" === WW.status,
      TW = WW => "valid" === WW.status,
      JW = WW => "undefined" !== typeof Promise && WW instanceof Promise;
    var hW;
    ! function(WW) {
      WW.errToObj = WW => "string" === typeof WW ? {
        message: WW
      } : WW || {}, WW.toString = WW => "string" === typeof WW ? WW : null === WW || void 0 === WW ? void 0 : WW.message
    }(hW || (hW = {}));
    class HW {
      constructor(WW, iW, OW, mW) {
        this._cachedPath = [], this.parent = WW, this.data = iW, this._path = OW, this._key = mW
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const nW = (WW, iW) => {
      if (TW(iW)) return {
        success: !0,
        data: iW.value
      };
      if (!WW.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const iW = new lW(WW.common.issues);
          return this._error = iW, this._error
        }
      }
    };

    function uW(WW) {
      if (!WW) return {};
      const {
        errorMap: iW,
        invalid_type_error: OW,
        required_error: mW,
        description: EW
      } = WW;
      if (iW && (OW || mW)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (iW) return {
        errorMap: iW,
        description: EW
      };
      return {
        errorMap: (WW, iW) => "invalid_type" !== WW.code ? {
          message: iW.defaultError
        } : "undefined" === typeof iW.data ? {
          message: null !== mW && void 0 !== mW ? mW : iW.defaultError
        } : {
          message: null !== OW && void 0 !== OW ? OW : iW.defaultError
        },
        description: EW
      }
    }
    class oW {
      constructor(WW) {
        this.spa = this.safeParseAsync, this._def = WW, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(WW) {
        return ZW(WW.data)
      }
      _getOrReturnCtx(WW, iW) {
        return iW || {
          common: WW.parent.common,
          data: WW.data,
          parsedType: ZW(WW.data),
          schemaErrorMap: this._def.errorMap,
          path: WW.path,
          parent: WW.parent
        }
      }
      _processInputParams(WW) {
        return {
          status: new sW,
          ctx: {
            common: WW.parent.common,
            data: WW.data,
            parsedType: ZW(WW.data),
            schemaErrorMap: this._def.errorMap,
            path: WW.path,
            parent: WW.parent
          }
        }
      }
      _parseSync(WW) {
        const iW = this._parse(WW);
        if (JW(iW)) throw new Error("Synchronous parse encountered promise.");
        return iW
      }
      _parseAsync(WW) {
        const iW = this._parse(WW);
        return Promise.resolve(iW)
      }
      parse(WW, iW) {
        const OW = this.safeParse(WW, iW);
        if (OW.success) return OW.data;
        throw OW.error
      }
      safeParse(WW, iW) {
        var OW;
        const mW = {
            common: {
              issues: [],
              async: null !== (OW = null === iW || void 0 === iW ? void 0 : iW.async) && void 0 !== OW && OW,
              contextualErrorMap: null === iW || void 0 === iW ? void 0 : iW.errorMap
            },
            path: (null === iW || void 0 === iW ? void 0 : iW.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: WW,
            parsedType: ZW(WW)
          },
          EW = this._parseSync({
            data: WW,
            path: mW.path,
            parent: mW
          });
        return nW(mW, EW)
      }
      async parseAsync(WW, iW) {
        const OW = await this.safeParseAsync(WW, iW);
        if (OW.success) return OW.data;
        throw OW.error
      }
      async safeParseAsync(WW, iW) {
        const OW = {
            common: {
              issues: [],
              contextualErrorMap: null === iW || void 0 === iW ? void 0 : iW.errorMap,
              async: !0
            },
            path: (null === iW || void 0 === iW ? void 0 : iW.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: WW,
            parsedType: ZW(WW)
          },
          mW = this._parse({
            data: WW,
            path: OW.path,
            parent: OW
          }),
          EW = await (JW(mW) ? mW : Promise.resolve(mW));
        return nW(OW, EW)
      }
      refine(WW, iW) {
        const OW = WW => "string" === typeof iW || "undefined" === typeof iW ? {
          message: iW
        } : "function" === typeof iW ? iW(WW) : iW;
        return this._refinement(((iW, mW) => {
          const EW = WW(iW),
            NW = () => mW.addIssue({
              code: xW.custom,
              ...OW(iW)
            });
          return "undefined" !== typeof Promise && EW instanceof Promise ? EW.then((WW => !!WW || (NW(), !1))) : !!EW || (NW(), !1)
        }))
      }
      refinement(WW, iW) {
        return this._refinement(((OW, mW) => !!WW(OW) || (mW.addIssue("function" === typeof iW ? iW(OW, mW) : iW), !1)))
      }
      _refinement(WW) {
        return new Mi({
          schema: this,
          typeName: ei.ZodEffects,
          effect: {
            type: "refinement",
            refinement: WW
          }
        })
      }
      superRefine(WW) {
        return this._refinement(WW)
      }
      optional() {
        return Ki.create(this, this._def)
      }
      nullable() {
        return Si.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return ii.create(this, this._def)
      }
      promise() {
        return si.create(this, this._def)
      }
      or(WW) {
        return Ei.create([this, WW], this._def)
      }
      and(WW) {
        return ci.create(this, WW, this._def)
      }
      transform(WW) {
        return new Mi({
          ...uW(this._def),
          schema: this,
          typeName: ei.ZodEffects,
          effect: {
            type: "transform",
            transform: WW
          }
        })
      }
      default (WW) {
        const iW = "function" === typeof WW ? WW : () => WW;
        return new Yi({
          ...uW(this._def),
          innerType: this,
          defaultValue: iW,
          typeName: ei.ZodDefault
        })
      }
      brand() {
        return new Hi({
          typeName: ei.ZodBranded,
          type: this,
          ...uW(this._def)
        })
      } catch (WW) {
        const iW = "function" === typeof WW ? WW : () => WW;
        return new yi({
          ...uW(this._def),
          innerType: this,
          catchValue: iW,
          typeName: ei.ZodCatch
        })
      }
      describe(WW) {
        return new(0, this.constructor)({
          ...this._def,
          description: WW
        })
      }
      pipe(WW) {
        return ni.create(this, WW)
      }
      readonly() {
        return ui.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const dW = /^c[^\s-]{8,}$/i,
      eW = /^[a-z][a-z0-9]*$/,
      vW = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      gW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      DW = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let VW;
    const pW = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      fW = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class CW extends oW {
      _parse(WW) {
        this._def.coerce && (WW.data = String(WW.data));
        if (this._getType(WW) !== tW.string) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.string,
            received: iW.parsedType
          }), MW
        }
        const iW = new sW;
        let OW;
        for (const cW of this._def.checks)
          if ("min" === cW.kind) WW.data.length < cW.value && (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
            code: xW.too_small,
            minimum: cW.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: cW.message
          }), iW.RA());
          else if ("max" === cW.kind) WW.data.length > cW.value && (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          code: xW.too_big,
          maximum: cW.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: cW.message
        }), iW.RA());
        else if ("length" === cW.kind) {
          const mW = WW.data.length > cW.value,
            EW = WW.data.length < cW.value;
          (mW || EW) && (OW = this._getOrReturnCtx(WW, OW), mW ? kW(OW, {
            code: xW.too_big,
            maximum: cW.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: cW.message
          }) : EW && kW(OW, {
            code: xW.too_small,
            minimum: cW.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: cW.message
          }), iW.RA())
        } else if ("email" === cW.kind) DW.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "email",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA());
        else if ("emoji" === cW.kind) VW || (VW = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), VW.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "emoji",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA());
        else if ("uuid" === cW.kind) gW.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "uuid",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA());
        else if ("cuid" === cW.kind) dW.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "cuid",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA());
        else if ("cuid2" === cW.kind) eW.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "cuid2",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA());
        else if ("ulid" === cW.kind) vW.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "ulid",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA());
        else if ("url" === cW.kind) try {
          new URL(WW.data)
        } catch (PW) {
          OW = this._getOrReturnCtx(WW, OW), kW(OW, {
            validation: "url",
            code: xW.invalid_string,
            message: cW.message
          }), iW.RA()
        } else if ("regex" === cW.kind) {
          cW.regex.lastIndex = 0;
          cW.regex.test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
            validation: "regex",
            code: xW.invalid_string,
            message: cW.message
          }), iW.RA())
        } else if ("trim" === cW.kind) WW.data = WW.data.trim();
        else if ("includes" === cW.kind) WW.data.includes(cW.value, cW.position) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          code: xW.invalid_string,
          validation: {
            includes: cW.value,
            position: cW.position
          },
          message: cW.message
        }), iW.RA());
        else if ("toLowerCase" === cW.kind) WW.data = WW.data.toLowerCase();
        else if ("toUpperCase" === cW.kind) WW.data = WW.data.toUpperCase();
        else if ("startsWith" === cW.kind) WW.data.startsWith(cW.value) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          code: xW.invalid_string,
          validation: {
            startsWith: cW.value
          },
          message: cW.message
        }), iW.RA());
        else if ("endsWith" === cW.kind) WW.data.endsWith(cW.value) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          code: xW.invalid_string,
          validation: {
            endsWith: cW.value
          },
          message: cW.message
        }), iW.RA());
        else if ("datetime" === cW.kind) {
          ((NW = cW).precision ? NW.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${NW.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${NW.precision}}Z$`) : 0 === NW.precision ? NW.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : NW.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(WW.data) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
            code: xW.invalid_string,
            validation: "datetime",
            message: cW.message
          }), iW.RA())
        } else "ip" === cW.kind ? (mW = WW.data, ("v4" !== (EW = cW.version) && EW || !pW.test(mW)) && ("v6" !== EW && EW || !fW.test(mW)) && (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          validation: "ip",
          code: xW.invalid_string,
          message: cW.message
        }), iW.RA())) : LW.assertNever(cW);
        var mW, EW, NW;
        return {
          status: iW.value,
          value: WW.data
        }
      }
      _regex(WW, iW, OW) {
        return this.refinement((iW => WW.test(iW)), {
          validation: iW,
          code: xW.invalid_string,
          ...hW.errToObj(OW)
        })
      }
      _addCheck(WW) {
        return new CW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      email(WW) {
        return this._addCheck({
          kind: "email",
          ...hW.errToObj(WW)
        })
      }
      url(WW) {
        return this._addCheck({
          kind: "url",
          ...hW.errToObj(WW)
        })
      }
      emoji(WW) {
        return this._addCheck({
          kind: "emoji",
          ...hW.errToObj(WW)
        })
      }
      uuid(WW) {
        return this._addCheck({
          kind: "uuid",
          ...hW.errToObj(WW)
        })
      }
      cuid(WW) {
        return this._addCheck({
          kind: "cuid",
          ...hW.errToObj(WW)
        })
      }
      cuid2(WW) {
        return this._addCheck({
          kind: "cuid2",
          ...hW.errToObj(WW)
        })
      }
      ulid(WW) {
        return this._addCheck({
          kind: "ulid",
          ...hW.errToObj(WW)
        })
      }
      ip(WW) {
        return this._addCheck({
          kind: "ip",
          ...hW.errToObj(WW)
        })
      }
      datetime(WW) {
        var iW;
        return "string" === typeof WW ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: WW
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === WW || void 0 === WW ? void 0 : WW.precision) ? null : null === WW || void 0 === WW ? void 0 : WW.precision,
          offset: null !== (iW = null === WW || void 0 === WW ? void 0 : WW.offset) && void 0 !== iW && iW,
          ...hW.errToObj(null === WW || void 0 === WW ? void 0 : WW.message)
        })
      }
      regex(WW, iW) {
        return this._addCheck({
          kind: "regex",
          regex: WW,
          ...hW.errToObj(iW)
        })
      }
      includes(WW, iW) {
        return this._addCheck({
          kind: "includes",
          value: WW,
          position: null === iW || void 0 === iW ? void 0 : iW.position,
          ...hW.errToObj(null === iW || void 0 === iW ? void 0 : iW.message)
        })
      }
      startsWith(WW, iW) {
        return this._addCheck({
          kind: "startsWith",
          value: WW,
          ...hW.errToObj(iW)
        })
      }
      endsWith(WW, iW) {
        return this._addCheck({
          kind: "endsWith",
          value: WW,
          ...hW.errToObj(iW)
        })
      }
      min(WW, iW) {
        return this._addCheck({
          kind: "min",
          value: WW,
          ...hW.errToObj(iW)
        })
      }
      max(WW, iW) {
        return this._addCheck({
          kind: "max",
          value: WW,
          ...hW.errToObj(iW)
        })
      }
      length(WW, iW) {
        return this._addCheck({
          kind: "length",
          value: WW,
          ...hW.errToObj(iW)
        })
      }
      nonempty(WW) {
        return this.min(1, hW.errToObj(WW))
      }
      trim() {
        return new CW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new CW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new CW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((WW => "datetime" === WW.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((WW => "email" === WW.kind))
      }
      get isURL() {
        return !!this._def.checks.find((WW => "url" === WW.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((WW => "emoji" === WW.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((WW => "uuid" === WW.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((WW => "cuid" === WW.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((WW => "cuid2" === WW.kind))
      }
      get isULID() {
        return !!this._def.checks.find((WW => "ulid" === WW.kind))
      }
      get isIP() {
        return !!this._def.checks.find((WW => "ip" === WW.kind))
      }
      get minLength() {
        let WW = null;
        for (const iW of this._def.checks) "min" === iW.kind && (null === WW || iW.value > WW) && (WW = iW.value);
        return WW
      }
      get maxLength() {
        let WW = null;
        for (const iW of this._def.checks) "max" === iW.kind && (null === WW || iW.value < WW) && (WW = iW.value);
        return WW
      }
    }

    function XW(WW, iW) {
      const OW = (WW.toString().split(".")[1] || "").length,
        mW = (iW.toString().split(".")[1] || "").length,
        EW = OW > mW ? OW : mW;
      return parseInt(WW.toFixed(EW).replace(".", "")) % parseInt(iW.toFixed(EW).replace(".", "")) / Math.pow(10, EW)
    }
    CW.create = WW => {
      var iW;
      return new CW({
        checks: [],
        typeName: ei.ZodString,
        coerce: null !== (iW = null === WW || void 0 === WW ? void 0 : WW.coerce) && void 0 !== iW && iW,
        ...uW(WW)
      })
    };
    class BW extends oW {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(WW) {
        this._def.coerce && (WW.data = Number(WW.data));
        if (this._getType(WW) !== tW.number) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.number,
            received: iW.parsedType
          }), MW
        }
        let iW;
        const OW = new sW;
        for (const mW of this._def.checks)
          if ("int" === mW.kind) LW.isInteger(WW.data) || (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
            code: xW.invalid_type,
            expected: "integer",
            received: "float",
            message: mW.message
          }), OW.RA());
          else if ("min" === mW.kind) {
          (mW.inclusive ? WW.data < mW.value : WW.data <= mW.value) && (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
            code: xW.too_small,
            minimum: mW.value,
            type: "number",
            inclusive: mW.inclusive,
            exact: !1,
            message: mW.message
          }), OW.RA())
        } else if ("max" === mW.kind) {
          (mW.inclusive ? WW.data > mW.value : WW.data >= mW.value) && (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
            code: xW.too_big,
            maximum: mW.value,
            type: "number",
            inclusive: mW.inclusive,
            exact: !1,
            message: mW.message
          }), OW.RA())
        } else "multipleOf" === mW.kind ? 0 !== XW(WW.data, mW.value) && (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
          code: xW.not_multiple_of,
          multipleOf: mW.value,
          message: mW.message
        }), OW.RA()) : "finite" === mW.kind ? Number.isFinite(WW.data) || (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
          code: xW.not_finite,
          message: mW.message
        }), OW.RA()) : LW.assertNever(mW);
        return {
          status: OW.value,
          value: WW.data
        }
      }
      gte(WW, iW) {
        return this.setLimit("min", WW, !0, hW.toString(iW))
      }
      gt(WW, iW) {
        return this.setLimit("min", WW, !1, hW.toString(iW))
      }
      lte(WW, iW) {
        return this.setLimit("max", WW, !0, hW.toString(iW))
      }
      lt(WW, iW) {
        return this.setLimit("max", WW, !1, hW.toString(iW))
      }
      setLimit(WW, iW, OW, mW) {
        return new BW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: WW,
            value: iW,
            inclusive: OW,
            message: hW.toString(mW)
          }]
        })
      }
      _addCheck(WW) {
        return new BW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      int(WW) {
        return this._addCheck({
          kind: "int",
          message: hW.toString(WW)
        })
      }
      positive(WW) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: hW.toString(WW)
        })
      }
      negative(WW) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: hW.toString(WW)
        })
      }
      nonpositive(WW) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: hW.toString(WW)
        })
      }
      nonnegative(WW) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: hW.toString(WW)
        })
      }
      multipleOf(WW, iW) {
        return this._addCheck({
          kind: "multipleOf",
          value: WW,
          message: hW.toString(iW)
        })
      }
      finite(WW) {
        return this._addCheck({
          kind: "finite",
          message: hW.toString(WW)
        })
      }
      safe(WW) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: hW.toString(WW)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: hW.toString(WW)
        })
      }
      get minValue() {
        let WW = null;
        for (const iW of this._def.checks) "min" === iW.kind && (null === WW || iW.value > WW) && (WW = iW.value);
        return WW
      }
      get maxValue() {
        let WW = null;
        for (const iW of this._def.checks) "max" === iW.kind && (null === WW || iW.value < WW) && (WW = iW.value);
        return WW
      }
      get isInt() {
        return !!this._def.checks.find((WW => "int" === WW.kind || "multipleOf" === WW.kind && LW.isInteger(WW.value)))
      }
      get isFinite() {
        let WW = null,
          iW = null;
        for (const OW of this._def.checks) {
          if ("finite" === OW.kind || "int" === OW.kind || "multipleOf" === OW.kind) return !0;
          "min" === OW.kind ? (null === iW || OW.value > iW) && (iW = OW.value) : "max" === OW.kind && (null === WW || OW.value < WW) && (WW = OW.value)
        }
        return Number.isFinite(iW) && Number.isFinite(WW)
      }
    }
    BW.create = WW => new BW({
      checks: [],
      typeName: ei.ZodNumber,
      coerce: (null === WW || void 0 === WW ? void 0 : WW.coerce) || !1,
      ...uW(WW)
    });
    class qW extends oW {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(WW) {
        this._def.coerce && (WW.data = BigInt(WW.data));
        if (this._getType(WW) !== tW.bigint) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.bigint,
            received: iW.parsedType
          }), MW
        }
        let iW;
        const OW = new sW;
        for (const mW of this._def.checks)
          if ("min" === mW.kind) {
            (mW.inclusive ? WW.data < mW.value : WW.data <= mW.value) && (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
              code: xW.too_small,
              type: "bigint",
              minimum: mW.value,
              inclusive: mW.inclusive,
              message: mW.message
            }), OW.RA())
          } else if ("max" === mW.kind) {
          (mW.inclusive ? WW.data > mW.value : WW.data >= mW.value) && (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
            code: xW.too_big,
            type: "bigint",
            maximum: mW.value,
            inclusive: mW.inclusive,
            message: mW.message
          }), OW.RA())
        } else "multipleOf" === mW.kind ? WW.data % mW.value !== BigInt(0) && (iW = this._getOrReturnCtx(WW, iW), kW(iW, {
          code: xW.not_multiple_of,
          multipleOf: mW.value,
          message: mW.message
        }), OW.RA()) : LW.assertNever(mW);
        return {
          status: OW.value,
          value: WW.data
        }
      }
      gte(WW, iW) {
        return this.setLimit("min", WW, !0, hW.toString(iW))
      }
      gt(WW, iW) {
        return this.setLimit("min", WW, !1, hW.toString(iW))
      }
      lte(WW, iW) {
        return this.setLimit("max", WW, !0, hW.toString(iW))
      }
      lt(WW, iW) {
        return this.setLimit("max", WW, !1, hW.toString(iW))
      }
      setLimit(WW, iW, OW, mW) {
        return new qW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: WW,
            value: iW,
            inclusive: OW,
            message: hW.toString(mW)
          }]
        })
      }
      _addCheck(WW) {
        return new qW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      positive(WW) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: hW.toString(WW)
        })
      }
      negative(WW) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: hW.toString(WW)
        })
      }
      nonpositive(WW) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: hW.toString(WW)
        })
      }
      nonnegative(WW) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: hW.toString(WW)
        })
      }
      multipleOf(WW, iW) {
        return this._addCheck({
          kind: "multipleOf",
          value: WW,
          message: hW.toString(iW)
        })
      }
      get minValue() {
        let WW = null;
        for (const iW of this._def.checks) "min" === iW.kind && (null === WW || iW.value > WW) && (WW = iW.value);
        return WW
      }
      get maxValue() {
        let WW = null;
        for (const iW of this._def.checks) "max" === iW.kind && (null === WW || iW.value < WW) && (WW = iW.value);
        return WW
      }
    }
    qW.create = WW => {
      var iW;
      return new qW({
        checks: [],
        typeName: ei.ZodBigInt,
        coerce: null !== (iW = null === WW || void 0 === WW ? void 0 : WW.coerce) && void 0 !== iW && iW,
        ...uW(WW)
      })
    };
    class RW extends oW {
      _parse(WW) {
        this._def.coerce && (WW.data = Boolean(WW.data));
        if (this._getType(WW) !== tW.boolean) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.boolean,
            received: iW.parsedType
          }), MW
        }
        return SW(WW.data)
      }
    }
    RW.create = WW => new RW({
      typeName: ei.ZodBoolean,
      coerce: (null === WW || void 0 === WW ? void 0 : WW.coerce) || !1,
      ...uW(WW)
    });
    class GW extends oW {
      _parse(WW) {
        this._def.coerce && (WW.data = new Date(WW.data));
        if (this._getType(WW) !== tW.date) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.date,
            received: iW.parsedType
          }), MW
        }
        if (isNaN(WW.data.getTime())) {
          return kW(this._getOrReturnCtx(WW), {
            code: xW.invalid_date
          }), MW
        }
        const iW = new sW;
        let OW;
        for (const mW of this._def.checks) "min" === mW.kind ? WW.data.getTime() < mW.value && (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          code: xW.too_small,
          message: mW.message,
          inclusive: !0,
          exact: !1,
          minimum: mW.value,
          type: "date"
        }), iW.RA()) : "max" === mW.kind ? WW.data.getTime() > mW.value && (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
          code: xW.too_big,
          message: mW.message,
          inclusive: !0,
          exact: !1,
          maximum: mW.value,
          type: "date"
        }), iW.RA()) : LW.assertNever(mW);
        return {
          status: iW.value,
          value: new Date(WW.data.getTime())
        }
      }
      _addCheck(WW) {
        return new GW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      min(WW, iW) {
        return this._addCheck({
          kind: "min",
          value: WW.getTime(),
          message: hW.toString(iW)
        })
      }
      max(WW, iW) {
        return this._addCheck({
          kind: "max",
          value: WW.getTime(),
          message: hW.toString(iW)
        })
      }
      get minDate() {
        let WW = null;
        for (const iW of this._def.checks) "min" === iW.kind && (null === WW || iW.value > WW) && (WW = iW.value);
        return null != WW ? new Date(WW) : null
      }
      get maxDate() {
        let WW = null;
        for (const iW of this._def.checks) "max" === iW.kind && (null === WW || iW.value < WW) && (WW = iW.value);
        return null != WW ? new Date(WW) : null
      }
    }
    GW.create = WW => new GW({
      checks: [],
      coerce: (null === WW || void 0 === WW ? void 0 : WW.coerce) || !1,
      typeName: ei.ZodDate,
      ...uW(WW)
    });
    class IW extends oW {
      _parse(WW) {
        if (this._getType(WW) !== tW.symbol) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.symbol,
            received: iW.parsedType
          }), MW
        }
        return SW(WW.data)
      }
    }
    IW.create = WW => new IW({
      typeName: ei.ZodSymbol,
      ...uW(WW)
    });
    class aW extends oW {
      _parse(WW) {
        if (this._getType(WW) !== tW.undefined) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.undefined,
            received: iW.parsedType
          }), MW
        }
        return SW(WW.data)
      }
    }
    aW.create = WW => new aW({
      typeName: ei.ZodUndefined,
      ...uW(WW)
    });
    class rW extends oW {
      _parse(WW) {
        if (this._getType(WW) !== tW.null) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.null,
            received: iW.parsedType
          }), MW
        }
        return SW(WW.data)
      }
    }
    rW.create = WW => new rW({
      typeName: ei.ZodNull,
      ...uW(WW)
    });
    class zW extends oW {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(WW) {
        return SW(WW.data)
      }
    }
    zW.create = WW => new zW({
      typeName: ei.ZodAny,
      ...uW(WW)
    });
    class FW extends oW {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(WW) {
        return SW(WW.data)
      }
    }
    FW.create = WW => new FW({
      typeName: ei.ZodUnknown,
      ...uW(WW)
    });
    class QW extends oW {
      _parse(WW) {
        const iW = this._getOrReturnCtx(WW);
        return kW(iW, {
          code: xW.invalid_type,
          expected: tW.never,
          received: iW.parsedType
        }), MW
      }
    }
    QW.create = WW => new QW({
      typeName: ei.ZodNever,
      ...uW(WW)
    });
    class Wi extends oW {
      _parse(WW) {
        if (this._getType(WW) !== tW.undefined) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.void,
            received: iW.parsedType
          }), MW
        }
        return SW(WW.data)
      }
    }
    Wi.create = WW => new Wi({
      typeName: ei.ZodVoid,
      ...uW(WW)
    });
    class ii extends oW {
      _parse(WW) {
        const {
          ctx: iW,
          status: OW
        } = this._processInputParams(WW), mW = this._def;
        if (iW.parsedType !== tW.array) return kW(iW, {
          code: xW.invalid_type,
          expected: tW.array,
          received: iW.parsedType
        }), MW;
        if (null !== mW.exactLength) {
          const WW = iW.data.length > mW.exactLength.value,
            EW = iW.data.length < mW.exactLength.value;
          (WW || EW) && (kW(iW, {
            code: WW ? xW.too_big : xW.too_small,
            minimum: EW ? mW.exactLength.value : void 0,
            maximum: WW ? mW.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: mW.exactLength.message
          }), OW.RA())
        }
        if (null !== mW.minLength && iW.data.length < mW.minLength.value && (kW(iW, {
            code: xW.too_small,
            minimum: mW.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: mW.minLength.message
          }), OW.RA()), null !== mW.maxLength && iW.data.length > mW.maxLength.value && (kW(iW, {
            code: xW.too_big,
            maximum: mW.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: mW.maxLength.message
          }), OW.RA()), iW.common.async) return Promise.all([...iW.data].map(((WW, OW) => mW.type._parseAsync(new HW(iW, WW, iW.path, OW))))).then((WW => sW.mergeArray(OW, WW)));
        const EW = [...iW.data].map(((WW, OW) => mW.type._parseSync(new HW(iW, WW, iW.path, OW))));
        return sW.mergeArray(OW, EW)
      }
      get element() {
        return this._def.type
      }
      min(WW, iW) {
        return new ii({
          ...this._def,
          minLength: {
            value: WW,
            message: hW.toString(iW)
          }
        })
      }
      max(WW, iW) {
        return new ii({
          ...this._def,
          maxLength: {
            value: WW,
            message: hW.toString(iW)
          }
        })
      }
      length(WW, iW) {
        return new ii({
          ...this._def,
          exactLength: {
            value: WW,
            message: hW.toString(iW)
          }
        })
      }
      nonempty(WW) {
        return this.min(1, WW)
      }
    }

    function Oi(WW) {
      if (WW instanceof mi) {
        const iW = {};
        for (const OW in WW.shape) {
          const mW = WW.shape[OW];
          iW[OW] = Ki.create(Oi(mW))
        }
        return new mi({
          ...WW._def,
          shape: () => iW
        })
      }
      return WW instanceof ii ? new ii({
        ...WW._def,
        type: Oi(WW.element)
      }) : WW instanceof Ki ? Ki.create(Oi(WW.unwrap())) : WW instanceof Si ? Si.create(Oi(WW.unwrap())) : WW instanceof wi ? wi.create(WW.items.map((WW => Oi(WW)))) : WW
    }
    ii.create = (WW, iW) => new ii({
      type: WW,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ei.ZodArray,
      ...uW(iW)
    });
    class mi extends oW {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const WW = this._def.shape(),
          iW = LW.objectKeys(WW);
        return this._cached = {
          shape: WW,
          keys: iW
        }
      }
      _parse(WW) {
        if (this._getType(WW) !== tW.object) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.object,
            received: iW.parsedType
          }), MW
        }
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW), {
          shape: mW,
          keys: EW
        } = this._getCached(), NW = [];
        if (!(this._def.catchall instanceof QW && "strip" === this._def.unknownKeys))
          for (const LW in OW.data) EW.includes(LW) || NW.push(LW);
        const PW = [];
        for (const LW of EW) {
          const WW = mW[LW],
            iW = OW.data[LW];
          PW.push({
            key: {
              status: "valid",
              value: LW
            },
            value: WW._parse(new HW(OW, iW, OW.path, LW)),
            alwaysSet: LW in OW.data
          })
        }
        if (this._def.catchall instanceof QW) {
          const WW = this._def.unknownKeys;
          if ("passthrough" === WW)
            for (const iW of NW) PW.push({
              key: {
                status: "valid",
                value: iW
              },
              value: {
                status: "valid",
                value: OW.data[iW]
              }
            });
          else if ("strict" === WW) NW.length > 0 && (kW(OW, {
            code: xW.unrecognized_keys,
            keys: NW
          }), iW.RA());
          else if ("strip" !== WW) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const WW = this._def.catchall;
          for (const iW of NW) {
            const mW = OW.data[iW];
            PW.push({
              key: {
                status: "valid",
                value: iW
              },
              value: WW._parse(new HW(OW, mW, OW.path, iW)),
              alwaysSet: iW in OW.data
            })
          }
        }
        return OW.common.async ? Promise.resolve().then((async () => {
          const WW = [];
          for (const iW of PW) {
            const OW = await iW.key;
            WW.push({
              key: OW,
              value: await iW.value,
              alwaysSet: iW.alwaysSet
            })
          }
          return WW
        })).then((WW => sW.mergeObjectSync(iW, WW))) : sW.mergeObjectSync(iW, PW)
      }
      get shape() {
        return this._def.shape()
      }
      strict(WW) {
        return hW.errToObj, new mi({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== WW ? {
            errorMap: (iW, OW) => {
              var mW, EW, NW, PW;
              const LW = null !== (NW = null === (EW = (mW = this._def).errorMap) || void 0 === EW ? void 0 : EW.call(mW, iW, OW).message) && void 0 !== NW ? NW : OW.defaultError;
              return "unrecognized_keys" === iW.code ? {
                message: null !== (PW = hW.errToObj(WW).message) && void 0 !== PW ? PW : LW
              } : {
                message: LW
              }
            }
          } : {}
        })
      }
      strip() {
        return new mi({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new mi({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(WW) {
        return new mi({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...WW
          })
        })
      }
      merge(WW) {
        return new mi({
          unknownKeys: WW._def.unknownKeys,
          catchall: WW._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...WW._def.shape()
          }),
          typeName: ei.ZodObject
        })
      }
      setKey(WW, iW) {
        return this.augment({
          [WW]: iW
        })
      }
      catchall(WW) {
        return new mi({
          ...this._def,
          catchall: WW
        })
      }
      Kl(WW) {
        const iW = {};
        return LW.objectKeys(WW).forEach((OW => {
          WW[OW] && this.shape[OW] && (iW[OW] = this.shape[OW])
        })), new mi({
          ...this._def,
          shape: () => iW
        })
      }
      omit(WW) {
        const iW = {};
        return LW.objectKeys(this.shape).forEach((OW => {
          WW[OW] || (iW[OW] = this.shape[OW])
        })), new mi({
          ...this._def,
          shape: () => iW
        })
      }
      deepPartial() {
        return Oi(this)
      }
      partial(WW) {
        const iW = {};
        return LW.objectKeys(this.shape).forEach((OW => {
          const mW = this.shape[OW];
          WW && !WW[OW] ? iW[OW] = mW : iW[OW] = mW.optional()
        })), new mi({
          ...this._def,
          shape: () => iW
        })
      }
      required(WW) {
        const iW = {};
        return LW.objectKeys(this.shape).forEach((OW => {
          if (WW && !WW[OW]) iW[OW] = this.shape[OW];
          else {
            let WW = this.shape[OW];
            for (; WW instanceof Ki;) WW = WW._def.innerType;
            iW[OW] = WW
          }
        })), new mi({
          ...this._def,
          shape: () => iW
        })
      }
      keyof() {
        return ji(LW.objectKeys(this.shape))
      }
    }
    mi.create = (WW, iW) => new mi({
      shape: () => WW,
      unknownKeys: "strip",
      catchall: QW.create(),
      typeName: ei.ZodObject,
      ...uW(iW)
    }), mi.strictCreate = (WW, iW) => new mi({
      shape: () => WW,
      unknownKeys: "strict",
      catchall: QW.create(),
      typeName: ei.ZodObject,
      ...uW(iW)
    }), mi.lazycreate = (WW, iW) => new mi({
      shape: WW,
      unknownKeys: "strip",
      catchall: QW.create(),
      typeName: ei.ZodObject,
      ...uW(iW)
    });
    class Ei extends oW {
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW), OW = this._def.options;
        if (iW.common.async) return Promise.all(OW.map((async WW => {
          const OW = {
            ...iW,
            common: {
              ...iW.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await WW._parseAsync({
              data: iW.data,
              path: iW.path,
              parent: OW
            }),
            ctx: OW
          }
        }))).then((function(WW) {
          for (const iW of WW)
            if ("valid" === iW.result.status) return iW.result;
          for (const mW of WW)
            if ("RA" === mW.result.status) return iW.common.issues.push(...mW.ctx.common.issues), mW.result;
          const OW = WW.map((WW => new lW(WW.ctx.common.issues)));
          return kW(iW, {
            code: xW.invalid_union,
            unionErrors: OW
          }), MW
        }));
        {
          let WW;
          const mW = [];
          for (const NW of OW) {
            const OW = {
                ...iW,
                common: {
                  ...iW.common,
                  issues: []
                },
                parent: null
              },
              EW = NW._parseSync({
                data: iW.data,
                path: iW.path,
                parent: OW
              });
            if ("valid" === EW.status) return EW;
            "RA" !== EW.status || WW || (WW = {
              result: EW,
              ctx: OW
            }), OW.common.issues.length && mW.push(OW.common.issues)
          }
          if (WW) return iW.common.issues.push(...WW.ctx.common.issues), WW.result;
          const EW = mW.map((WW => new lW(WW)));
          return kW(iW, {
            code: xW.invalid_union,
            unionErrors: EW
          }), MW
        }
      }
      get options() {
        return this._def.options
      }
    }
    Ei.create = (WW, iW) => new Ei({
      options: WW,
      typeName: ei.ZodUnion,
      ...uW(iW)
    });
    const Ni = WW => WW instanceof Ai ? Ni(WW.schema) : WW instanceof Mi ? Ni(WW.innerType()) : WW instanceof bi ? [WW.value] : WW instanceof Ui ? WW.options : WW instanceof ki ? Object.keys(WW.enum) : WW instanceof Yi ? Ni(WW._def.innerType) : WW instanceof aW ? [void 0] : WW instanceof rW ? [null] : null;
    class Pi extends oW {
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW);
        if (iW.parsedType !== tW.object) return kW(iW, {
          code: xW.invalid_type,
          expected: tW.object,
          received: iW.parsedType
        }), MW;
        const OW = this.discriminator,
          mW = iW.data[OW],
          EW = this.optionsMap.get(mW);
        return EW ? iW.common.async ? EW._parseAsync({
          data: iW.data,
          path: iW.path,
          parent: iW
        }) : EW._parseSync({
          data: iW.data,
          path: iW.path,
          parent: iW
        }) : (kW(iW, {
          code: xW.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [OW]
        }), MW)
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
      static create(WW, iW, OW) {
        const mW = new Map;
        for (const EW of iW) {
          const iW = Ni(EW.shape[WW]);
          if (!iW) throw new Error(`A discriminator value for key \`${WW}\` could not be extracted from all schema options`);
          for (const OW of iW) {
            if (mW.has(OW)) throw new Error(`Discriminator property ${String(WW)} has duplicate value ${String(OW)}`);
            mW.set(OW, EW)
          }
        }
        return new Pi({
          typeName: ei.ZodDiscriminatedUnion,
          discriminator: WW,
          options: iW,
          optionsMap: mW,
          ...uW(OW)
        })
      }
    }

    function Li(WW, iW) {
      const OW = ZW(WW),
        mW = ZW(iW);
      if (WW === iW) return {
        valid: !0,
        data: WW
      };
      if (OW === tW.object && mW === tW.object) {
        const OW = LW.objectKeys(iW),
          mW = LW.objectKeys(WW).filter((WW => -1 !== OW.indexOf(WW))),
          EW = {
            ...WW,
            ...iW
          };
        for (const NW of mW) {
          const OW = Li(WW[NW], iW[NW]);
          if (!OW.valid) return {
            valid: !1
          };
          EW[NW] = OW.data
        }
        return {
          valid: !0,
          data: EW
        }
      }
      if (OW === tW.array && mW === tW.array) {
        if (WW.length !== iW.length) return {
          valid: !1
        };
        const OW = [];
        for (let mW = 0; mW < WW.length; mW++) {
          const EW = Li(WW[mW], iW[mW]);
          if (!EW.valid) return {
            valid: !1
          };
          OW.push(EW.data)
        }
        return {
          valid: !0,
          data: OW
        }
      }
      return OW === tW.date && mW === tW.date && +WW === +iW ? {
        valid: !0,
        data: WW
      } : {
        valid: !1
      }
    }
    class ci extends oW {
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW), mW = (WW, mW) => {
          if (YW(WW) || YW(mW)) return MW;
          const EW = Li(WW.value, mW.value);
          return EW.valid ? ((yW(WW) || yW(mW)) && iW.RA(), {
            status: iW.value,
            value: EW.data
          }) : (kW(OW, {
            code: xW.invalid_intersection_types
          }), MW)
        };
        return OW.common.async ? Promise.all([this._def.left._parseAsync({
          data: OW.data,
          path: OW.path,
          parent: OW
        }), this._def.right._parseAsync({
          data: OW.data,
          path: OW.path,
          parent: OW
        })]).then((WW => {
          let [iW, OW] = WW;
          return mW(iW, OW)
        })) : mW(this._def.left._parseSync({
          data: OW.data,
          path: OW.path,
          parent: OW
        }), this._def.right._parseSync({
          data: OW.data,
          path: OW.path,
          parent: OW
        }))
      }
    }
    ci.create = (WW, iW, OW) => new ci({
      left: WW,
      right: iW,
      typeName: ei.ZodIntersection,
      ...uW(OW)
    });
    class wi extends oW {
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW);
        if (OW.parsedType !== tW.array) return kW(OW, {
          code: xW.invalid_type,
          expected: tW.array,
          received: OW.parsedType
        }), MW;
        if (OW.data.length < this._def.items.length) return kW(OW, {
          code: xW.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), MW;
        !this._def.rest && OW.data.length > this._def.items.length && (kW(OW, {
          code: xW.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), iW.RA());
        const mW = [...OW.data].map(((WW, iW) => {
          const mW = this._def.items[iW] || this._def.rest;
          return mW ? mW._parse(new HW(OW, WW, OW.path, iW)) : null
        })).filter((WW => !!WW));
        return OW.common.async ? Promise.all(mW).then((WW => sW.mergeArray(iW, WW))) : sW.mergeArray(iW, mW)
      }
      get items() {
        return this._def.items
      }
      rest(WW) {
        return new wi({
          ...this._def,
          rest: WW
        })
      }
    }
    wi.create = (WW, iW) => {
      if (!Array.isArray(WW)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new wi({
        items: WW,
        typeName: ei.ZodTuple,
        rest: null,
        ...uW(iW)
      })
    };
    class ti extends oW {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW);
        if (OW.parsedType !== tW.object) return kW(OW, {
          code: xW.invalid_type,
          expected: tW.object,
          received: OW.parsedType
        }), MW;
        const mW = [],
          EW = this._def.keyType,
          NW = this._def.valueType;
        for (const PW in OW.data) mW.push({
          key: EW._parse(new HW(OW, PW, OW.path, PW)),
          value: NW._parse(new HW(OW, OW.data[PW], OW.path, PW))
        });
        return OW.common.async ? sW.mergeObjectAsync(iW, mW) : sW.mergeObjectSync(iW, mW)
      }
      get element() {
        return this._def.valueType
      }
      static create(WW, iW, OW) {
        return new ti(iW instanceof oW ? {
          keyType: WW,
          valueType: iW,
          typeName: ei.ZodRecord,
          ...uW(OW)
        } : {
          keyType: CW.create(),
          valueType: WW,
          typeName: ei.ZodRecord,
          ...uW(iW)
        })
      }
    }
    class Zi extends oW {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW);
        if (OW.parsedType !== tW.map) return kW(OW, {
          code: xW.invalid_type,
          expected: tW.map,
          received: OW.parsedType
        }), MW;
        const mW = this._def.keyType,
          EW = this._def.valueType,
          NW = [...OW.data.entries()].map(((WW, iW) => {
            let [NW, PW] = WW;
            return {
              key: mW._parse(new HW(OW, NW, OW.path, [iW, "key"])),
              value: EW._parse(new HW(OW, PW, OW.path, [iW, "value"]))
            }
          }));
        if (OW.common.async) {
          const WW = new Map;
          return Promise.resolve().then((async () => {
            for (const OW of NW) {
              const mW = await OW.key,
                EW = await OW.value;
              if ("aborted" === mW.status || "aborted" === EW.status) return MW;
              "RA" !== mW.status && "RA" !== EW.status || iW.RA(), WW.set(mW.value, EW.value)
            }
            return {
              status: iW.value,
              value: WW
            }
          }))
        } {
          const WW = new Map;
          for (const OW of NW) {
            const mW = OW.key,
              EW = OW.value;
            if ("aborted" === mW.status || "aborted" === EW.status) return MW;
            "RA" !== mW.status && "RA" !== EW.status || iW.RA(), WW.set(mW.value, EW.value)
          }
          return {
            status: iW.value,
            value: WW
          }
        }
      }
    }
    Zi.create = (WW, iW, OW) => new Zi({
      valueType: iW,
      keyType: WW,
      typeName: ei.ZodMap,
      ...uW(OW)
    });
    class xi extends oW {
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW);
        if (OW.parsedType !== tW.set) return kW(OW, {
          code: xW.invalid_type,
          expected: tW.set,
          received: OW.parsedType
        }), MW;
        const mW = this._def;
        null !== mW.minSize && OW.data.size < mW.minSize.value && (kW(OW, {
          code: xW.too_small,
          minimum: mW.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: mW.minSize.message
        }), iW.RA()), null !== mW.maxSize && OW.data.size > mW.maxSize.value && (kW(OW, {
          code: xW.too_big,
          maximum: mW.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: mW.maxSize.message
        }), iW.RA());
        const EW = this._def.valueType;

        function NW(WW) {
          const OW = new Set;
          for (const mW of WW) {
            if ("aborted" === mW.status) return MW;
            "RA" === mW.status && iW.RA(), OW.add(mW.value)
          }
          return {
            status: iW.value,
            value: OW
          }
        }
        const PW = [...OW.data.values()].map(((WW, iW) => EW._parse(new HW(OW, WW, OW.path, iW))));
        return OW.common.async ? Promise.all(PW).then((WW => NW(WW))) : NW(PW)
      }
      min(WW, iW) {
        return new xi({
          ...this._def,
          minSize: {
            value: WW,
            message: hW.toString(iW)
          }
        })
      }
      max(WW, iW) {
        return new xi({
          ...this._def,
          maxSize: {
            value: WW,
            message: hW.toString(iW)
          }
        })
      }
      size(WW, iW) {
        return this.min(WW, iW).max(WW, iW)
      }
      nonempty(WW) {
        return this.min(1, WW)
      }
    }
    xi.create = (WW, iW) => new xi({
      valueType: WW,
      minSize: null,
      maxSize: null,
      typeName: ei.ZodSet,
      ...uW(iW)
    });
    class li extends oW {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW);
        if (iW.parsedType !== tW.function) return kW(iW, {
          code: xW.invalid_type,
          expected: tW.function,
          received: iW.parsedType
        }), MW;

        function OW(WW, OW) {
          return UW({
            data: WW,
            path: iW.path,
            errorMaps: [iW.common.contextualErrorMap, iW.schemaErrorMap, jW(), AW].filter((WW => !!WW)),
            issueData: {
              code: xW.invalid_arguments,
              argumentsError: OW
            }
          })
        }

        function mW(WW, OW) {
          return UW({
            data: WW,
            path: iW.path,
            errorMaps: [iW.common.contextualErrorMap, iW.schemaErrorMap, jW(), AW].filter((WW => !!WW)),
            issueData: {
              code: xW.invalid_return_type,
              returnTypeError: OW
            }
          })
        }
        const EW = {
            errorMap: iW.common.contextualErrorMap
          },
          NW = iW.data;
        if (this._def.returns instanceof si) {
          const WW = this;
          return SW((async function() {
            for (var iW = arguments.length, PW = new Array(iW), LW = 0; LW < iW; LW++) PW[LW] = arguments[LW];
            const cW = new lW([]),
              wW = await WW._def.args.parseAsync(PW, EW).catch((WW => {
                throw cW.addIssue(OW(PW, WW)), cW
              })),
              tW = await Reflect.apply(NW, this, wW);
            return await WW._def.returns._def.type.parseAsync(tW, EW).catch((WW => {
              throw cW.addIssue(mW(tW, WW)), cW
            }))
          }))
        } {
          const WW = this;
          return SW((function() {
            for (var iW = arguments.length, PW = new Array(iW), LW = 0; LW < iW; LW++) PW[LW] = arguments[LW];
            const cW = WW._def.args.safeParse(PW, EW);
            if (!cW.success) throw new lW([OW(PW, cW.error)]);
            const wW = Reflect.apply(NW, this, cW.data),
              tW = WW._def.returns.safeParse(wW, EW);
            if (!tW.success) throw new lW([mW(wW, tW.error)]);
            return tW.data
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
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return new li({
          ...this._def,
          args: wi.create(iW).rest(FW.create())
        })
      }
      returns(WW) {
        return new li({
          ...this._def,
          returns: WW
        })
      }
      implement(WW) {
        return this.parse(WW)
      }
      strictImplement(WW) {
        return this.parse(WW)
      }
      static create(WW, iW, OW) {
        return new li({
          args: WW || wi.create([]).rest(FW.create()),
          returns: iW || FW.create(),
          typeName: ei.ZodFunction,
          ...uW(OW)
        })
      }
    }
    class Ai extends oW {
      get schema() {
        return this._def.getter()
      }
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW);
        return this._def.getter()._parse({
          data: iW.data,
          path: iW.path,
          parent: iW
        })
      }
    }
    Ai.create = (WW, iW) => new Ai({
      getter: WW,
      typeName: ei.ZodLazy,
      ...uW(iW)
    });
    class bi extends oW {
      _parse(WW) {
        if (WW.data !== this._def.value) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            received: iW.data,
            code: xW.invalid_literal,
            expected: this._def.value
          }), MW
        }
        return {
          status: "valid",
          value: WW.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function ji(WW, iW) {
      return new Ui({
        values: WW,
        typeName: ei.ZodEnum,
        ...uW(iW)
      })
    }
    bi.create = (WW, iW) => new bi({
      value: WW,
      typeName: ei.ZodLiteral,
      ...uW(iW)
    });
    class Ui extends oW {
      _parse(WW) {
        if ("string" !== typeof WW.data) {
          const iW = this._getOrReturnCtx(WW),
            OW = this._def.values;
          return kW(iW, {
            expected: LW.joinValues(OW),
            received: iW.parsedType,
            code: xW.invalid_type
          }), MW
        }
        if (-1 === this._def.values.indexOf(WW.data)) {
          const iW = this._getOrReturnCtx(WW),
            OW = this._def.values;
          return kW(iW, {
            received: iW.data,
            code: xW.invalid_enum_value,
            options: OW
          }), MW
        }
        return SW(WW.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const WW = {};
        for (const iW of this._def.values) WW[iW] = iW;
        return WW
      }
      get Values() {
        const WW = {};
        for (const iW of this._def.values) WW[iW] = iW;
        return WW
      }
      get Enum() {
        const WW = {};
        for (const iW of this._def.values) WW[iW] = iW;
        return WW
      }
      extract(WW) {
        return Ui.create(WW)
      }
      exclude(WW) {
        return Ui.create(this.options.filter((iW => !WW.includes(iW))))
      }
    }
    Ui.create = ji;
    class ki extends oW {
      _parse(WW) {
        const iW = LW.getValidEnumValues(this._def.values),
          OW = this._getOrReturnCtx(WW);
        if (OW.parsedType !== tW.string && OW.parsedType !== tW.number) {
          const WW = LW.objectValues(iW);
          return kW(OW, {
            expected: LW.joinValues(WW),
            received: OW.parsedType,
            code: xW.invalid_type
          }), MW
        }
        if (-1 === iW.indexOf(WW.data)) {
          const WW = LW.objectValues(iW);
          return kW(OW, {
            received: OW.data,
            code: xW.invalid_enum_value,
            options: WW
          }), MW
        }
        return SW(WW.data)
      }
      get enum() {
        return this._def.values
      }
    }
    ki.create = (WW, iW) => new ki({
      values: WW,
      typeName: ei.ZodNativeEnum,
      ...uW(iW)
    });
    class si extends oW {
      unwrap() {
        return this._def.type
      }
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW);
        if (iW.parsedType !== tW.promise && !1 === iW.common.async) return kW(iW, {
          code: xW.invalid_type,
          expected: tW.promise,
          received: iW.parsedType
        }), MW;
        const OW = iW.parsedType === tW.promise ? iW.data : Promise.resolve(iW.data);
        return SW(OW.then((WW => this._def.type.parseAsync(WW, {
          path: iW.path,
          errorMap: iW.common.contextualErrorMap
        }))))
      }
    }
    si.create = (WW, iW) => new si({
      type: WW,
      typeName: ei.ZodPromise,
      ...uW(iW)
    });
    class Mi extends oW {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === ei.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW), mW = this._def.effect || null, EW = {
          addIssue: WW => {
            kW(OW, WW), WW.fatal ? iW.abort() : iW.RA()
          },
          get path() {
            return OW.path
          }
        };
        if (EW.addIssue = EW.addIssue.bind(EW), "preprocess" === mW.type) {
          const WW = mW.transform(OW.data, EW);
          return OW.common.issues.length ? {
            status: "RA",
            value: OW.data
          } : OW.common.async ? Promise.resolve(WW).then((WW => this._def.schema._parseAsync({
            data: WW,
            path: OW.path,
            parent: OW
          }))) : this._def.schema._parseSync({
            data: WW,
            path: OW.path,
            parent: OW
          })
        }
        if ("refinement" === mW.type) {
          const WW = WW => {
            const iW = mW.refinement(WW, EW);
            if (OW.common.async) return Promise.resolve(iW);
            if (iW instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return WW
          };
          if (!1 === OW.common.async) {
            const mW = this._def.schema._parseSync({
              data: OW.data,
              path: OW.path,
              parent: OW
            });
            return "aborted" === mW.status ? MW : ("RA" === mW.status && iW.RA(), WW(mW.value), {
              status: iW.value,
              value: mW.value
            })
          }
          return this._def.schema._parseAsync({
            data: OW.data,
            path: OW.path,
            parent: OW
          }).then((OW => "aborted" === OW.status ? MW : ("RA" === OW.status && iW.RA(), WW(OW.value).then((() => ({
            status: iW.value,
            value: OW.value
          }))))))
        }
        if ("transform" === mW.type) {
          if (!1 === OW.common.async) {
            const WW = this._def.schema._parseSync({
              data: OW.data,
              path: OW.path,
              parent: OW
            });
            if (!TW(WW)) return WW;
            const NW = mW.transform(WW.value, EW);
            if (NW instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: iW.value,
              value: NW
            }
          }
          return this._def.schema._parseAsync({
            data: OW.data,
            path: OW.path,
            parent: OW
          }).then((WW => TW(WW) ? Promise.resolve(mW.transform(WW.value, EW)).then((WW => ({
            status: iW.value,
            value: WW
          }))) : WW))
        }
        LW.assertNever(mW)
      }
    }
    Mi.create = (WW, iW, OW) => new Mi({
      schema: WW,
      typeName: ei.ZodEffects,
      effect: iW,
      ...uW(OW)
    }), Mi.createWithPreprocess = (WW, iW, OW) => new Mi({
      schema: iW,
      effect: {
        type: "preprocess",
        transform: WW
      },
      typeName: ei.ZodEffects,
      ...uW(OW)
    });
    class Ki extends oW {
      _parse(WW) {
        return this._getType(WW) === tW.undefined ? SW(void 0) : this._def.innerType._parse(WW)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Ki.create = (WW, iW) => new Ki({
      innerType: WW,
      typeName: ei.ZodOptional,
      ...uW(iW)
    });
    class Si extends oW {
      _parse(WW) {
        return this._getType(WW) === tW.null ? SW(null) : this._def.innerType._parse(WW)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Si.create = (WW, iW) => new Si({
      innerType: WW,
      typeName: ei.ZodNullable,
      ...uW(iW)
    });
    class Yi extends oW {
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW);
        let OW = iW.data;
        return iW.parsedType === tW.undefined && (OW = this._def.defaultValue()), this._def.innerType._parse({
          data: OW,
          path: iW.path,
          parent: iW
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Yi.create = (WW, iW) => new Yi({
      innerType: WW,
      typeName: ei.ZodDefault,
      defaultValue: "function" === typeof iW.default ? iW.default : () => iW.default,
      ...uW(iW)
    });
    class yi extends oW {
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW), OW = {
          ...iW,
          common: {
            ...iW.common,
            issues: []
          }
        }, mW = this._def.innerType._parse({
          data: OW.data,
          path: OW.path,
          parent: {
            ...OW
          }
        });
        return JW(mW) ? mW.then((WW => ({
          status: "valid",
          value: "valid" === WW.status ? WW.value : this._def.catchValue({
            get error() {
              return new lW(OW.common.issues)
            },
            input: OW.data
          })
        }))) : {
          status: "valid",
          value: "valid" === mW.status ? mW.value : this._def.catchValue({
            get error() {
              return new lW(OW.common.issues)
            },
            input: OW.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    yi.create = (WW, iW) => new yi({
      innerType: WW,
      typeName: ei.ZodCatch,
      catchValue: "function" === typeof iW.catch ? iW.catch : () => iW.catch,
      ...uW(iW)
    });
    class Ti extends oW {
      _parse(WW) {
        if (this._getType(WW) !== tW.nan) {
          const iW = this._getOrReturnCtx(WW);
          return kW(iW, {
            code: xW.invalid_type,
            expected: tW.nan,
            received: iW.parsedType
          }), MW
        }
        return {
          status: "valid",
          value: WW.data
        }
      }
    }
    Ti.create = WW => new Ti({
      typeName: ei.ZodNaN,
      ...uW(WW)
    });
    const Ji = Symbol("zod_brand");
    class Hi extends oW {
      _parse(WW) {
        const {
          ctx: iW
        } = this._processInputParams(WW), OW = iW.data;
        return this._def.type._parse({
          data: OW,
          path: iW.path,
          parent: iW
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ni extends oW {
      _parse(WW) {
        const {
          status: iW,
          ctx: OW
        } = this._processInputParams(WW);
        if (OW.common.async) {
          return (async () => {
            const WW = await this._def.in._parseAsync({
              data: OW.data,
              path: OW.path,
              parent: OW
            });
            return "aborted" === WW.status ? MW : "RA" === WW.status ? (iW.RA(), KW(WW.value)) : this._def.out._parseAsync({
              data: WW.value,
              path: OW.path,
              parent: OW
            })
          })()
        } {
          const WW = this._def.in._parseSync({
            data: OW.data,
            path: OW.path,
            parent: OW
          });
          return "aborted" === WW.status ? MW : "RA" === WW.status ? (iW.RA(), {
            status: "RA",
            value: WW.value
          }) : this._def.out._parseSync({
            data: WW.value,
            path: OW.path,
            parent: OW
          })
        }
      }
      static create(WW, iW) {
        return new ni({
          in: WW,
          out: iW,
          typeName: ei.ZodPipeline
        })
      }
    }
    class ui extends oW {
      _parse(WW) {
        const iW = this._def.innerType._parse(WW);
        return TW(iW) && (iW.value = Object.freeze(iW.value)), iW
      }
    }
    ui.create = (WW, iW) => new ui({
      innerType: WW,
      typeName: ei.ZodReadonly,
      ...uW(iW)
    });
    const oi = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = arguments.length > 2 ? arguments[2] : void 0;
        return WW ? zW.create().superRefine(((mW, EW) => {
          var NW, PW;
          if (!WW(mW)) {
            const WW = "function" === typeof iW ? iW(mW) : "string" === typeof iW ? {
                message: iW
              } : iW,
              LW = null === (PW = null !== (NW = WW.fatal) && void 0 !== NW ? NW : OW) || void 0 === PW || PW,
              cW = "string" === typeof WW ? {
                message: WW
              } : WW;
            EW.addIssue({
              code: "custom",
              ...cW,
              fatal: LW
            })
          }
        })) : zW.create()
      },
      di = {
        object: mi.lazycreate
      };
    var ei;
    ! function(WW) {
      WW.ZodString = "ZodString", WW.ZodNumber = "ZodNumber", WW.ZodNaN = "ZodNaN", WW.ZodBigInt = "ZodBigInt", WW.ZodBoolean = "ZodBoolean", WW.ZodDate = "ZodDate", WW.ZodSymbol = "ZodSymbol", WW.ZodUndefined = "ZodUndefined", WW.ZodNull = "ZodNull", WW.ZodAny = "ZodAny", WW.ZodUnknown = "ZodUnknown", WW.ZodNever = "ZodNever", WW.ZodVoid = "ZodVoid", WW.ZodArray = "ZodArray", WW.ZodObject = "ZodObject", WW.ZodUnion = "ZodUnion", WW.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", WW.ZodIntersection = "ZodIntersection", WW.ZodTuple = "ZodTuple", WW.ZodRecord = "ZodRecord", WW.ZodMap = "ZodMap", WW.ZodSet = "ZodSet", WW.ZodFunction = "ZodFunction", WW.ZodLazy = "ZodLazy", WW.ZodLiteral = "ZodLiteral", WW.ZodEnum = "ZodEnum", WW.ZodEffects = "ZodEffects", WW.ZodNativeEnum = "ZodNativeEnum", WW.ZodOptional = "ZodOptional", WW.ZodNullable = "ZodNullable", WW.ZodDefault = "ZodDefault", WW.ZodCatch = "ZodCatch", WW.ZodPromise = "ZodPromise", WW.ZodBranded = "ZodBranded", WW.ZodPipeline = "ZodPipeline", WW.ZodReadonly = "ZodReadonly"
    }(ei || (ei = {}));
    const vi = CW.create,
      gi = BW.create,
      Di = Ti.create,
      Vi = qW.create,
      fi = RW.create,
      Ci = GW.create,
      Xi = IW.create,
      Bi = aW.create,
      qi = rW.create,
      Ri = zW.create,
      Gi = FW.create,
      Ii = QW.create,
      ai = Wi.create,
      ri = ii.create,
      zi = mi.create,
      Fi = mi.strictCreate,
      Qi = Ei.create,
      WO = Pi.create,
      iO = ci.create,
      OO = wi.create,
      mO = ti.create,
      EO = Zi.create,
      NO = xi.create,
      PO = li.create,
      LO = Ai.create,
      cO = bi.create,
      wO = Ui.create,
      tO = ki.create,
      ZO = si.create,
      xO = Mi.create,
      lO = Ki.create,
      AO = Si.create,
      bO = Mi.createWithPreprocess,
      jO = ni.create,
      UO = {
        string: WW => CW.create({
          ...WW,
          coerce: !0
        }),
        number: WW => BW.create({
          ...WW,
          coerce: !0
        }),
        boolean: WW => RW.create({
          ...WW,
          coerce: !0
        }),
        bigint: WW => qW.create({
          ...WW,
          coerce: !0
        }),
        date: WW => GW.create({
          ...WW,
          coerce: !0
        })
      },
      kO = MW;
    var sO = Object.freeze({
        __proto__: null,
        defaultErrorMap: AW,
        setErrorMap: function(WW) {
          bW = WW
        },
        getErrorMap: jW,
        makeIssue: UW,
        EMPTY_PATH: [],
        addIssueToContext: kW,
        ParseStatus: sW,
        INVALID: MW,
        DIRTY: KW,
        OK: SW,
        isAborted: YW,
        isDirty: yW,
        isValid: TW,
        isAsync: JW,
        get util() {
          return LW
        },
        get objectUtil() {
          return cW
        },
        ZodParsedType: tW,
        getParsedType: ZW,
        ZodType: oW,
        ZodString: CW,
        ZodNumber: BW,
        ZodBigInt: qW,
        ZodBoolean: RW,
        ZodDate: GW,
        ZodSymbol: IW,
        ZodUndefined: aW,
        ZodNull: rW,
        ZodAny: zW,
        ZodUnknown: FW,
        ZodNever: QW,
        ZodVoid: Wi,
        ZodArray: ii,
        ZodObject: mi,
        ZodUnion: Ei,
        ZodDiscriminatedUnion: Pi,
        ZodIntersection: ci,
        ZodTuple: wi,
        ZodRecord: ti,
        ZodMap: Zi,
        ZodSet: xi,
        ZodFunction: li,
        ZodLazy: Ai,
        ZodLiteral: bi,
        ZodEnum: Ui,
        ZodNativeEnum: ki,
        ZodPromise: si,
        ZodEffects: Mi,
        ZodTransformer: Mi,
        ZodOptional: Ki,
        ZodNullable: Si,
        ZodDefault: Yi,
        ZodCatch: yi,
        ZodNaN: Ti,
        BRAND: Ji,
        ZodBranded: Hi,
        ZodPipeline: ni,
        ZodReadonly: ui,
        custom: oi,
        Schema: oW,
        ZodSchema: oW,
        late: di,
        get ZodFirstPartyTypeKind() {
          return ei
        },
        coerce: UO,
        any: Ri,
        array: ri,
        bigint: Vi,
        boolean: fi,
        date: Ci,
        discriminatedUnion: WO,
        effect: xO,
        enum: wO,
        function: PO,
        instanceof: function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${WW.name}`
          };
          return oi((iW => iW instanceof WW), iW)
        },
        intersection: iO,
        lazy: LO,
        literal: cO,
        map: EO,
        nan: Di,
        nativeEnum: tO,
        never: Ii,
        null: qi,
        nullable: AO,
        number: gi,
        object: zi,
        oboolean: () => fi().optional(),
        onumber: () => gi().optional(),
        optional: lO,
        ostring: () => vi().optional(),
        pipeline: jO,
        preprocess: bO,
        promise: ZO,
        record: mO,
        set: NO,
        strictObject: Fi,
        string: vi,
        symbol: Xi,
        transformer: xO,
        tuple: OO,
        undefined: Bi,
        union: Qi,
        unknown: Gi,
        void: ai,
        NEVER: kO,
        ZodIssueCode: xW,
        quotelessJson: WW => JSON.stringify(WW, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: lW
      }),
      MO = {
        exports: {}
      };
    ! function(WW) {
      var iW = function(WW) {
        var OW = 1e7,
          mW = 9007199254740992,
          EW = xW(mW),
          NW = "0123456789abcdefghijklmnopqrstuvwxyz",
          PW = "function" === typeof BigInt;

        function LW(WW, iW, OW, mW) {
          return "undefined" === typeof WW ? LW[0] : "undefined" !== typeof iW && (10 !== +iW || OW) ? RW(WW, iW, OW, mW) : zW(WW)
        }

        function cW(WW, iW) {
          this.value = WW, this.sign = iW, this.isSmall = !1
        }

        function wW(WW) {
          this.value = WW, this.sign = WW < 0, this.isSmall = !0
        }

        function tW(WW) {
          this.value = WW
        }

        function ZW(WW) {
          return -mW < WW && WW < mW
        }

        function xW(WW) {
          return WW < 1e7 ? [WW] : WW < 1e14 ? [WW % 1e7, Math.floor(WW / 1e7)] : [WW % 1e7, Math.floor(WW / 1e7) % 1e7, Math.floor(WW / 1e14)]
        }

        function lW(WW) {
          AW(WW);
          var iW = WW.length;
          if (iW < 4 && uW(WW, EW) < 0) switch (iW) {
            case 0:
              return 0;
            case 1:
              return WW[0];
            case 2:
              return WW[0] + WW[1] * OW;
            default:
              return WW[0] + (WW[1] + WW[2] * OW) * OW
          }
          return WW
        }

        function AW(WW) {
          for (var iW = WW.length; 0 === WW[--iW];);
          WW.length = iW + 1
        }

        function bW(WW) {
          for (var iW = new Array(WW), OW = -1; ++OW < WW;) iW[OW] = 0;
          return iW
        }

        function jW(WW) {
          return WW > 0 ? Math.floor(WW) : Math.ceil(WW)
        }

        function UW(WW, iW) {
          var mW, EW, NW = WW.length,
            PW = iW.length,
            LW = new Array(NW),
            cW = 0,
            wW = OW;
          for (EW = 0; EW < PW; EW++) cW = (mW = WW[EW] + iW[EW] + cW) >= wW ? 1 : 0, LW[EW] = mW - cW * wW;
          for (; EW < NW;) cW = (mW = WW[EW] + cW) === wW ? 1 : 0, LW[EW++] = mW - cW * wW;
          return cW > 0 && LW.push(cW), LW
        }

        function kW(WW, iW) {
          return WW.length >= iW.length ? UW(WW, iW) : UW(iW, WW)
        }

        function sW(WW, iW) {
          var mW, EW, NW = WW.length,
            PW = new Array(NW),
            LW = OW;
          for (EW = 0; EW < NW; EW++) mW = WW[EW] - LW + iW, iW = Math.floor(mW / LW), PW[EW] = mW - iW * LW, iW += 1;
          for (; iW > 0;) PW[EW++] = iW % LW, iW = Math.floor(iW / LW);
          return PW
        }

        function MW(WW, iW) {
          var mW, EW, NW = WW.length,
            PW = iW.length,
            LW = new Array(NW),
            cW = 0,
            wW = OW;
          for (mW = 0; mW < PW; mW++)(EW = WW[mW] - cW - iW[mW]) < 0 ? (EW += wW, cW = 1) : cW = 0, LW[mW] = EW;
          for (mW = PW; mW < NW; mW++) {
            if (!((EW = WW[mW] - cW) < 0)) {
              LW[mW++] = EW;
              break
            }
            EW += wW, LW[mW] = EW
          }
          for (; mW < NW; mW++) LW[mW] = WW[mW];
          return AW(LW), LW
        }

        function KW(WW, iW, mW) {
          var EW, NW, PW = WW.length,
            LW = new Array(PW),
            tW = -iW,
            ZW = OW;
          for (EW = 0; EW < PW; EW++) NW = WW[EW] + tW, tW = Math.floor(NW / ZW), NW %= ZW, LW[EW] = NW < 0 ? NW + ZW : NW;
          return "number" === typeof(LW = lW(LW)) ? (mW && (LW = -LW), new wW(LW)) : new cW(LW, mW)
        }

        function SW(WW, iW) {
          var mW, EW, NW, PW, LW = WW.length,
            cW = iW.length,
            wW = bW(LW + cW),
            tW = OW;
          for (NW = 0; NW < LW; ++NW) {
            PW = WW[NW];
            for (var ZW = 0; ZW < cW; ++ZW) mW = PW * iW[ZW] + wW[NW + ZW], EW = Math.floor(mW / tW), wW[NW + ZW] = mW - EW * tW, wW[NW + ZW + 1] += EW
          }
          return AW(wW), wW
        }

        function YW(WW, iW) {
          var mW, EW, NW = WW.length,
            PW = new Array(NW),
            LW = OW,
            cW = 0;
          for (EW = 0; EW < NW; EW++) mW = WW[EW] * iW + cW, cW = Math.floor(mW / LW), PW[EW] = mW - cW * LW;
          for (; cW > 0;) PW[EW++] = cW % LW, cW = Math.floor(cW / LW);
          return PW
        }

        function yW(WW, iW) {
          for (var OW = []; iW-- > 0;) OW.push(0);
          return OW.concat(WW)
        }

        function TW(WW, iW) {
          var OW = Math.max(WW.length, iW.length);
          if (OW <= 30) return SW(WW, iW);
          OW = Math.ceil(OW / 2);
          var mW = WW.slice(OW),
            EW = WW.slice(0, OW),
            NW = iW.slice(OW),
            PW = iW.slice(0, OW),
            LW = TW(EW, PW),
            cW = TW(mW, NW),
            wW = TW(kW(EW, mW), kW(PW, NW)),
            tW = kW(kW(LW, yW(MW(MW(wW, LW), cW), OW)), yW(cW, 2 * OW));
          return AW(tW), tW
        }

        function JW(WW, iW, mW) {
          return new cW(WW < OW ? YW(iW, WW) : SW(iW, xW(WW)), mW)
        }

        function hW(WW) {
          var iW, mW, EW, NW, PW = WW.length,
            LW = bW(PW + PW),
            cW = OW;
          for (EW = 0; EW < PW; EW++) {
            mW = 0 - (NW = WW[EW]) * NW;
            for (var wW = EW; wW < PW; wW++) iW = NW * WW[wW] * 2 + LW[EW + wW] + mW, mW = Math.floor(iW / cW), LW[EW + wW] = iW - mW * cW;
            LW[EW + PW] = mW
          }
          return AW(LW), LW
        }

        function HW(WW, iW) {
          var mW, EW, NW, PW, LW = WW.length,
            cW = bW(LW),
            wW = OW;
          for (NW = 0, mW = LW - 1; mW >= 0; --mW) NW = (PW = NW * wW + WW[mW]) - (EW = jW(PW / iW)) * iW, cW[mW] = 0 | EW;
          return [cW, 0 | NW]
        }

        function nW(WW, iW) {
          var mW, EW = zW(iW);
          if (PW) return [new tW(WW.value / EW.value), new tW(WW.value % EW.value)];
          var NW, ZW = WW.value,
            UW = EW.value;
          if (0 === UW) throw new Error("Cannot divide by zero");
          if (WW.isSmall) return EW.isSmall ? [new wW(jW(ZW / UW)), new wW(ZW % UW)] : [LW[0], WW];
          if (EW.isSmall) {
            if (1 === UW) return [WW, LW[0]];
            if (-1 == UW) return [WW.Lj(), LW[0]];
            var kW = Math.abs(UW);
            if (kW < OW) {
              NW = lW((mW = HW(ZW, kW))[0]);
              var sW = mW[1];
              return WW.sign && (sW = -sW), "number" === typeof NW ? (WW.sign !== EW.sign && (NW = -NW), [new wW(NW), new wW(sW)]) : [new cW(NW, WW.sign !== EW.sign), new wW(sW)]
            }
            UW = xW(kW)
          }
          var KW = uW(ZW, UW);
          if (-1 === KW) return [LW[0], WW];
          if (0 === KW) return [LW[WW.sign === EW.sign ? 1 : -1], LW[0]];
          mW = ZW.length + UW.length <= 200 ? function(WW, iW) {
            var mW, EW, NW, PW, LW, cW, wW, tW = WW.length,
              ZW = iW.length,
              xW = OW,
              AW = bW(iW.length),
              jW = iW[ZW - 1],
              UW = Math.ceil(xW / (2 * jW)),
              kW = YW(WW, UW),
              sW = YW(iW, UW);
            for (kW.length <= tW && kW.push(0), sW.push(0), jW = sW[ZW - 1], EW = tW - ZW; EW >= 0; EW--) {
              for (mW = xW - 1, kW[EW + ZW] !== jW && (mW = Math.floor((kW[EW + ZW] * xW + kW[EW + ZW - 1]) / jW)), NW = 0, PW = 0, cW = sW.length, LW = 0; LW < cW; LW++) NW += mW * sW[LW], wW = Math.floor(NW / xW), PW += kW[EW + LW] - (NW - wW * xW), NW = wW, PW < 0 ? (kW[EW + LW] = PW + xW, PW = -1) : (kW[EW + LW] = PW, PW = 0);
              for (; 0 !== PW;) {
                for (mW -= 1, NW = 0, LW = 0; LW < cW; LW++)(NW += kW[EW + LW] - xW + sW[LW]) < 0 ? (kW[EW + LW] = NW + xW, NW = 0) : (kW[EW + LW] = NW, NW = 1);
                PW += NW
              }
              AW[EW] = mW
            }
            return kW = HW(kW, UW)[0], [lW(AW), lW(kW)]
          }(ZW, UW) : function(WW, iW) {
            for (var mW, EW, NW, PW, LW, cW = WW.length, wW = iW.length, tW = [], ZW = [], xW = OW; cW;)
              if (ZW.unshift(WW[--cW]), AW(ZW), uW(ZW, iW) < 0) tW.push(0);
              else {
                NW = ZW[(EW = ZW.length) - 1] * xW + ZW[EW - 2], PW = iW[wW - 1] * xW + iW[wW - 2], EW > wW && (NW = (NW + 1) * xW), mW = Math.ceil(NW / PW);
                do {
                  if (uW(LW = YW(iW, mW), ZW) <= 0) break;
                  mW--
                } while (mW);
                tW.push(mW), ZW = MW(ZW, LW)
              } return tW.reverse(), [lW(tW), lW(ZW)]
          }(ZW, UW), NW = mW[0];
          var SW = WW.sign !== EW.sign,
            yW = mW[1],
            TW = WW.sign;
          return "number" === typeof NW ? (SW && (NW = -NW), NW = new wW(NW)) : NW = new cW(NW, SW), "number" === typeof yW ? (TW && (yW = -yW), yW = new wW(yW)) : yW = new cW(yW, TW), [NW, yW]
        }

        function uW(WW, iW) {
          if (WW.length !== iW.length) return WW.length > iW.length ? 1 : -1;
          for (var OW = WW.length - 1; OW >= 0; OW--)
            if (WW[OW] !== iW[OW]) return WW[OW] > iW[OW] ? 1 : -1;
          return 0
        }

        function oW(WW) {
          var iW = WW.abs();
          return !iW.isUnit() && (!!(iW.equals(2) || iW.equals(3) || iW.equals(5)) || !(iW.isEven() || iW.isDivisibleBy(3) || iW.isDivisibleBy(5)) && (!!iW.lesser(49) || void 0))
        }

        function dW(WW, OW) {
          for (var mW, EW, NW, PW = WW.prev(), LW = PW, cW = 0; LW.isEven();) LW = LW.divide(2), cW++;
          WW: for (EW = 0; EW < OW.length; EW++)
            if (!WW.lesser(OW[EW]) && !(NW = iW(OW[EW]).modPow(LW, WW)).isUnit() && !NW.equals(PW)) {
              for (mW = cW - 1; 0 != mW; mW--) {
                if ((NW = NW.square().mod(WW)).isUnit()) return !1;
                if (NW.equals(PW)) continue WW
              }
              return !1
            }
          return !0
        }
        cW.prototype = Object.create(LW.prototype), wW.prototype = Object.create(LW.prototype), tW.prototype = Object.create(LW.prototype), cW.prototype.add = function(WW) {
          var iW = zW(WW);
          if (this.sign !== iW.sign) return this.subtract(iW.Lj());
          var OW = this.value,
            mW = iW.value;
          return iW.isSmall ? new cW(sW(OW, Math.abs(mW)), this.sign) : new cW(kW(OW, mW), this.sign)
        }, cW.prototype.plus = cW.prototype.add, wW.prototype.add = function(WW) {
          var iW = zW(WW),
            OW = this.value;
          if (OW < 0 !== iW.sign) return this.subtract(iW.Lj());
          var mW = iW.value;
          if (iW.isSmall) {
            if (ZW(OW + mW)) return new wW(OW + mW);
            mW = xW(Math.abs(mW))
          }
          return new cW(sW(mW, Math.abs(OW)), OW < 0)
        }, wW.prototype.plus = wW.prototype.add, tW.prototype.add = function(WW) {
          return new tW(this.value + zW(WW).value)
        }, tW.prototype.plus = tW.prototype.add, cW.prototype.subtract = function(WW) {
          var iW = zW(WW);
          if (this.sign !== iW.sign) return this.add(iW.Lj());
          var OW = this.value,
            mW = iW.value;
          return iW.isSmall ? KW(OW, Math.abs(mW), this.sign) : function(WW, iW, OW) {
            var mW;
            return uW(WW, iW) >= 0 ? mW = MW(WW, iW) : (mW = MW(iW, WW), OW = !OW), "number" === typeof(mW = lW(mW)) ? (OW && (mW = -mW), new wW(mW)) : new cW(mW, OW)
          }(OW, mW, this.sign)
        }, cW.prototype.minus = cW.prototype.subtract, wW.prototype.subtract = function(WW) {
          var iW = zW(WW),
            OW = this.value;
          if (OW < 0 !== iW.sign) return this.add(iW.Lj());
          var mW = iW.value;
          return iW.isSmall ? new wW(OW - mW) : KW(mW, Math.abs(OW), OW >= 0)
        }, wW.prototype.minus = wW.prototype.subtract, tW.prototype.subtract = function(WW) {
          return new tW(this.value - zW(WW).value)
        }, tW.prototype.minus = tW.prototype.subtract, cW.prototype.Lj = function() {
          return new cW(this.value, !this.sign)
        }, wW.prototype.Lj = function() {
          var WW = this.sign,
            iW = new wW(-this.value);
          return iW.sign = !WW, iW
        }, tW.prototype.Lj = function() {
          return new tW(-this.value)
        }, cW.prototype.abs = function() {
          return new cW(this.value, !1)
        }, wW.prototype.abs = function() {
          return new wW(Math.abs(this.value))
        }, tW.prototype.abs = function() {
          return new tW(this.value >= 0 ? this.value : -this.value)
        }, cW.prototype.multiply = function(WW) {
          var iW, mW, EW, NW = zW(WW),
            PW = this.value,
            wW = NW.value,
            tW = this.sign !== NW.sign;
          if (NW.isSmall) {
            if (0 === wW) return LW[0];
            if (1 === wW) return this;
            if (-1 === wW) return this.Lj();
            if ((iW = Math.abs(wW)) < OW) return new cW(YW(PW, iW), tW);
            wW = xW(iW)
          }
          return mW = PW.length, EW = wW.length, new cW(-.012 * mW - .012 * EW + 15e-6 * mW * EW > 0 ? TW(PW, wW) : SW(PW, wW), tW)
        }, cW.prototype.times = cW.prototype.multiply, wW.prototype._multiplyBySmall = function(WW) {
          return ZW(WW.value * this.value) ? new wW(WW.value * this.value) : JW(Math.abs(WW.value), xW(Math.abs(this.value)), this.sign !== WW.sign)
        }, cW.prototype._multiplyBySmall = function(WW) {
          return 0 === WW.value ? LW[0] : 1 === WW.value ? this : -1 === WW.value ? this.Lj() : JW(Math.abs(WW.value), this.value, this.sign !== WW.sign)
        }, wW.prototype.multiply = function(WW) {
          return zW(WW)._multiplyBySmall(this)
        }, wW.prototype.times = wW.prototype.multiply, tW.prototype.multiply = function(WW) {
          return new tW(this.value * zW(WW).value)
        }, tW.prototype.times = tW.prototype.multiply, cW.prototype.square = function() {
          return new cW(hW(this.value), !1)
        }, wW.prototype.square = function() {
          var WW = this.value * this.value;
          return ZW(WW) ? new wW(WW) : new cW(hW(xW(Math.abs(this.value))), !1)
        }, tW.prototype.square = function(WW) {
          return new tW(this.value * this.value)
        }, cW.prototype.divmod = function(WW) {
          var iW = nW(this, WW);
          return {
            quotient: iW[0],
            remainder: iW[1]
          }
        }, tW.prototype.divmod = wW.prototype.divmod = cW.prototype.divmod, cW.prototype.divide = function(WW) {
          return nW(this, WW)[0]
        }, tW.prototype.over = tW.prototype.divide = function(WW) {
          return new tW(this.value / zW(WW).value)
        }, wW.prototype.over = wW.prototype.divide = cW.prototype.over = cW.prototype.divide, cW.prototype.mod = function(WW) {
          return nW(this, WW)[1]
        }, tW.prototype.mod = tW.prototype.remainder = function(WW) {
          return new tW(this.value % zW(WW).value)
        }, wW.prototype.remainder = wW.prototype.mod = cW.prototype.remainder = cW.prototype.mod, cW.prototype.pow = function(WW) {
          var iW, OW, mW, EW = zW(WW),
            NW = this.value,
            PW = EW.value;
          if (0 === PW) return LW[1];
          if (0 === NW) return LW[0];
          if (1 === NW) return LW[1];
          if (-1 === NW) return EW.isEven() ? LW[1] : LW[-1];
          if (EW.sign) return LW[0];
          if (!EW.isSmall) throw new Error("The exponent " + EW.toString() + " is too large.");
          if (this.isSmall && ZW(iW = Math.pow(NW, PW))) return new wW(jW(iW));
          for (OW = this, mW = LW[1]; !0 & PW && (mW = mW.times(OW), --PW), 0 !== PW;) PW /= 2, OW = OW.square();
          return mW
        }, wW.prototype.pow = cW.prototype.pow, tW.prototype.pow = function(WW) {
          var iW = zW(WW),
            OW = this.value,
            mW = iW.value,
            EW = BigInt(0),
            NW = BigInt(1),
            PW = BigInt(2);
          if (mW === EW) return LW[1];
          if (OW === EW) return LW[0];
          if (OW === NW) return LW[1];
          if (OW === BigInt(-1)) return iW.isEven() ? LW[1] : LW[-1];
          if (iW.isNegative()) return new tW(EW);
          for (var cW = this, wW = LW[1];
            (mW & NW) === NW && (wW = wW.times(cW), --mW), mW !== EW;) mW /= PW, cW = cW.square();
          return wW
        }, cW.prototype.modPow = function(WW, iW) {
          if (WW = zW(WW), (iW = zW(iW)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var OW = LW[1],
            mW = this.mod(iW);
          for (WW.isNegative() && (WW = WW.multiply(LW[-1]), mW = mW.modInv(iW)); WW.isPositive();) {
            if (mW.isZero()) return LW[0];
            WW.isOdd() && (OW = OW.multiply(mW).mod(iW)), WW = WW.divide(2), mW = mW.square().mod(iW)
          }
          return OW
        }, tW.prototype.modPow = wW.prototype.modPow = cW.prototype.modPow, cW.prototype.compareAbs = function(WW) {
          var iW = zW(WW),
            OW = this.value,
            mW = iW.value;
          return iW.isSmall ? 1 : uW(OW, mW)
        }, wW.prototype.compareAbs = function(WW) {
          var iW = zW(WW),
            OW = Math.abs(this.value),
            mW = iW.value;
          return iW.isSmall ? OW === (mW = Math.abs(mW)) ? 0 : OW > mW ? 1 : -1 : -1
        }, tW.prototype.compareAbs = function(WW) {
          var iW = this.value,
            OW = zW(WW).value;
          return (iW = iW >= 0 ? iW : -iW) === (OW = OW >= 0 ? OW : -OW) ? 0 : iW > OW ? 1 : -1
        }, cW.prototype.compare = function(WW) {
          if (WW === 1 / 0) return -1;
          if (WW === -1 / 0) return 1;
          var iW = zW(WW),
            OW = this.value,
            mW = iW.value;
          return this.sign !== iW.sign ? iW.sign ? 1 : -1 : iW.isSmall ? this.sign ? -1 : 1 : uW(OW, mW) * (this.sign ? -1 : 1)
        }, cW.prototype.compareTo = cW.prototype.compare, wW.prototype.compare = function(WW) {
          if (WW === 1 / 0) return -1;
          if (WW === -1 / 0) return 1;
          var iW = zW(WW),
            OW = this.value,
            mW = iW.value;
          return iW.isSmall ? OW == mW ? 0 : OW > mW ? 1 : -1 : OW < 0 !== iW.sign ? OW < 0 ? -1 : 1 : OW < 0 ? 1 : -1
        }, wW.prototype.compareTo = wW.prototype.compare, tW.prototype.compare = function(WW) {
          if (WW === 1 / 0) return -1;
          if (WW === -1 / 0) return 1;
          var iW = this.value,
            OW = zW(WW).value;
          return iW === OW ? 0 : iW > OW ? 1 : -1
        }, tW.prototype.compareTo = tW.prototype.compare, cW.prototype.equals = function(WW) {
          return 0 === this.compare(WW)
        }, tW.prototype.eq = tW.prototype.equals = wW.prototype.eq = wW.prototype.equals = cW.prototype.eq = cW.prototype.equals, cW.prototype.notEquals = function(WW) {
          return 0 !== this.compare(WW)
        }, tW.prototype.neq = tW.prototype.notEquals = wW.prototype.neq = wW.prototype.notEquals = cW.prototype.neq = cW.prototype.notEquals, cW.prototype.greater = function(WW) {
          return this.compare(WW) > 0
        }, tW.prototype.gt = tW.prototype.greater = wW.prototype.gt = wW.prototype.greater = cW.prototype.gt = cW.prototype.greater, cW.prototype.lesser = function(WW) {
          return this.compare(WW) < 0
        }, tW.prototype.lt = tW.prototype.lesser = wW.prototype.lt = wW.prototype.lesser = cW.prototype.lt = cW.prototype.lesser, cW.prototype.greaterOrEquals = function(WW) {
          return this.compare(WW) >= 0
        }, tW.prototype.geq = tW.prototype.greaterOrEquals = wW.prototype.geq = wW.prototype.greaterOrEquals = cW.prototype.geq = cW.prototype.greaterOrEquals, cW.prototype.lesserOrEquals = function(WW) {
          return this.compare(WW) <= 0
        }, tW.prototype.leq = tW.prototype.lesserOrEquals = wW.prototype.leq = wW.prototype.lesserOrEquals = cW.prototype.leq = cW.prototype.lesserOrEquals, cW.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, wW.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, tW.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, cW.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, wW.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, tW.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, cW.prototype.isPositive = function() {
          return !this.sign
        }, wW.prototype.isPositive = function() {
          return this.value > 0
        }, tW.prototype.isPositive = wW.prototype.isPositive, cW.prototype.isNegative = function() {
          return this.sign
        }, wW.prototype.isNegative = function() {
          return this.value < 0
        }, tW.prototype.isNegative = wW.prototype.isNegative, cW.prototype.isUnit = function() {
          return !1
        }, wW.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, tW.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, cW.prototype.isZero = function() {
          return !1
        }, wW.prototype.isZero = function() {
          return 0 === this.value
        }, tW.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, cW.prototype.isDivisibleBy = function(WW) {
          var iW = zW(WW);
          return !iW.isZero() && (!!iW.isUnit() || (0 === iW.compareAbs(2) ? this.isEven() : this.mod(iW).isZero()))
        }, tW.prototype.isDivisibleBy = wW.prototype.isDivisibleBy = cW.prototype.isDivisibleBy, cW.prototype.isPrime = function(OW) {
          var mW = oW(this);
          if (mW !== WW) return mW;
          var EW = this.abs(),
            NW = EW.bitLength();
          if (NW <= 64) return dW(EW, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var PW = Math.log(2) * NW.toJSNumber(), LW = Math.ceil(!0 === OW ? 2 * Math.pow(PW, 2) : PW), cW = [], wW = 0; wW < LW; wW++) cW.push(iW(wW + 2));
          return dW(EW, cW)
        }, tW.prototype.isPrime = wW.prototype.isPrime = cW.prototype.isPrime, cW.prototype.isProbablePrime = function(OW, mW) {
          var EW = oW(this);
          if (EW !== WW) return EW;
          for (var NW = this.abs(), PW = OW === WW ? 5 : OW, LW = [], cW = 0; cW < PW; cW++) LW.push(iW.randBetween(2, NW.minus(2), mW));
          return dW(NW, LW)
        }, tW.prototype.isProbablePrime = wW.prototype.isProbablePrime = cW.prototype.isProbablePrime, cW.prototype.modInv = function(WW) {
          for (var OW, mW, EW, NW = iW.zero, PW = iW.one, LW = zW(WW), cW = this.abs(); !cW.isZero();) OW = LW.divide(cW), mW = NW, EW = LW, NW = PW, LW = cW, PW = mW.subtract(OW.multiply(PW)), cW = EW.subtract(OW.multiply(cW));
          if (!LW.isUnit()) throw new Error(this.toString() + " and " + WW.toString() + " are not co-prime");
          return -1 === NW.compare(0) && (NW = NW.add(WW)), this.isNegative() ? NW.Lj() : NW
        }, tW.prototype.modInv = wW.prototype.modInv = cW.prototype.modInv, cW.prototype.next = function() {
          var WW = this.value;
          return this.sign ? KW(WW, 1, this.sign) : new cW(sW(WW, 1), this.sign)
        }, wW.prototype.next = function() {
          var WW = this.value;
          return WW + 1 < mW ? new wW(WW + 1) : new cW(EW, !1)
        }, tW.prototype.next = function() {
          return new tW(this.value + BigInt(1))
        }, cW.prototype.prev = function() {
          var WW = this.value;
          return this.sign ? new cW(sW(WW, 1), !0) : KW(WW, 1, this.sign)
        }, wW.prototype.prev = function() {
          var WW = this.value;
          return WW - 1 > -mW ? new wW(WW - 1) : new cW(EW, !0)
        }, tW.prototype.prev = function() {
          return new tW(this.value - BigInt(1))
        };
        for (var eW = [1]; 2 * eW[eW.length - 1] <= OW;) eW.push(2 * eW[eW.length - 1]);
        var vW = eW.length,
          gW = eW[vW - 1];

        function DW(WW) {
          return Math.abs(WW) <= OW
        }

        function VW(WW, OW, mW) {
          OW = zW(OW);
          for (var EW = WW.isNegative(), NW = OW.isNegative(), PW = EW ? WW.not() : WW, LW = NW ? OW.not() : OW, cW = 0, wW = 0, tW = null, ZW = null, xW = []; !PW.isZero() || !LW.isZero();) cW = (tW = nW(PW, gW))[1].toJSNumber(), EW && (cW = gW - 1 - cW), wW = (ZW = nW(LW, gW))[1].toJSNumber(), NW && (wW = gW - 1 - wW), PW = tW[0], LW = ZW[0], xW.push(mW(cW, wW));
          for (var lW = 0 !== mW(EW ? 1 : 0, NW ? 1 : 0) ? iW(-1) : iW(0), AW = xW.length - 1; AW >= 0; AW -= 1) lW = lW.multiply(gW).add(iW(xW[AW]));
          return lW
        }
        cW.prototype.shiftLeft = function(WW) {
          var iW = zW(WW).toJSNumber();
          if (!DW(iW)) throw new Error(String(iW) + " is too large for shifting.");
          if (iW < 0) return this.shiftRight(-iW);
          var OW = this;
          if (OW.isZero()) return OW;
          for (; iW >= vW;) OW = OW.multiply(gW), iW -= vW - 1;
          return OW.multiply(eW[iW])
        }, tW.prototype.shiftLeft = wW.prototype.shiftLeft = cW.prototype.shiftLeft, cW.prototype.shiftRight = function(WW) {
          var iW, OW = zW(WW).toJSNumber();
          if (!DW(OW)) throw new Error(String(OW) + " is too large for shifting.");
          if (OW < 0) return this.shiftLeft(-OW);
          for (var mW = this; OW >= vW;) {
            if (mW.isZero() || mW.isNegative() && mW.isUnit()) return mW;
            mW = (iW = nW(mW, gW))[1].isNegative() ? iW[0].prev() : iW[0], OW -= vW - 1
          }
          return (iW = nW(mW, eW[OW]))[1].isNegative() ? iW[0].prev() : iW[0]
        }, tW.prototype.shiftRight = wW.prototype.shiftRight = cW.prototype.shiftRight, cW.prototype.not = function() {
          return this.Lj().prev()
        }, tW.prototype.not = wW.prototype.not = cW.prototype.not, cW.prototype.and = function(WW) {
          return VW(this, WW, (function(WW, iW) {
            return WW & iW
          }))
        }, tW.prototype.and = wW.prototype.and = cW.prototype.and, cW.prototype.or = function(WW) {
          return VW(this, WW, (function(WW, iW) {
            return WW | iW
          }))
        }, tW.prototype.or = wW.prototype.or = cW.prototype.or, cW.prototype.xor = function(WW) {
          return VW(this, WW, (function(WW, iW) {
            return WW ^ iW
          }))
        }, tW.prototype.xor = wW.prototype.xor = cW.prototype.xor;
        var pW = 1 << 30;

        function fW(WW) {
          var iW = WW.value,
            mW = "number" === typeof iW ? iW | pW : "bigint" === typeof iW ? iW | BigInt(pW) : iW[0] + iW[1] * OW | 1073758208;
          return mW & -mW
        }

        function CW(WW, OW) {
          if (OW.compareTo(WW) <= 0) {
            var mW = CW(WW, OW.square(OW)),
              EW = mW.p,
              NW = mW.e,
              PW = EW.multiply(OW);
            return PW.compareTo(WW) <= 0 ? {
              p: PW,
              e: 2 * NW + 1
            } : {
              p: EW,
              e: 2 * NW
            }
          }
          return {
            p: iW(1),
            e: 0
          }
        }

        function XW(WW, iW) {
          return WW = zW(WW), iW = zW(iW), WW.greater(iW) ? WW : iW
        }

        function BW(WW, iW) {
          return WW = zW(WW), iW = zW(iW), WW.lesser(iW) ? WW : iW
        }

        function qW(WW, iW) {
          if (WW = zW(WW).abs(), iW = zW(iW).abs(), WW.equals(iW)) return WW;
          if (WW.isZero()) return iW;
          if (iW.isZero()) return WW;
          for (var OW, mW, EW = LW[1]; WW.isEven() && iW.isEven();) OW = BW(fW(WW), fW(iW)), WW = WW.divide(OW), iW = iW.divide(OW), EW = EW.multiply(OW);
          for (; WW.isEven();) WW = WW.divide(fW(WW));
          do {
            for (; iW.isEven();) iW = iW.divide(fW(iW));
            WW.greater(iW) && (mW = iW, iW = WW, WW = mW), iW = iW.subtract(WW)
          } while (!iW.isZero());
          return EW.isUnit() ? WW : WW.multiply(EW)
        }
        cW.prototype.bitLength = function() {
          var WW = this;
          return WW.compareTo(iW(0)) < 0 && (WW = WW.Lj().subtract(iW(1))), 0 === WW.compareTo(iW(0)) ? iW(0) : iW(CW(WW, iW(2)).e).add(iW(1))
        }, tW.prototype.bitLength = wW.prototype.bitLength = cW.prototype.bitLength;
        var RW = function(WW, iW, OW, mW) {
          OW = OW || NW, WW = String(WW), mW || (WW = WW.toLowerCase(), OW = OW.toLowerCase());
          var EW, PW = WW.length,
            LW = Math.abs(iW),
            cW = {};
          for (EW = 0; EW < OW.length; EW++) cW[OW[EW]] = EW;
          for (EW = 0; EW < PW; EW++) {
            if ("-" !== (ZW = WW[EW]) && (ZW in cW && cW[ZW] >= LW)) {
              if ("1" === ZW && 1 === LW) continue;
              throw new Error(ZW + " is not a valid digit in base " + iW + ".")
            }
          }
          iW = zW(iW);
          var wW = [],
            tW = "-" === WW[0];
          for (EW = tW ? 1 : 0; EW < WW.length; EW++) {
            var ZW;
            if ((ZW = WW[EW]) in cW) wW.push(zW(cW[ZW]));
            else {
              if ("<" !== ZW) throw new Error(ZW + " is not a valid character");
              var xW = EW;
              do {
                EW++
              } while (">" !== WW[EW] && EW < WW.length);
              wW.push(zW(WW.slice(xW + 1, EW)))
            }
          }
          return GW(wW, iW, tW)
        };

        function GW(WW, iW, OW) {
          var mW, EW = LW[0],
            NW = LW[1];
          for (mW = WW.length - 1; mW >= 0; mW--) EW = EW.add(WW[mW].times(NW)), NW = NW.times(iW);
          return OW ? EW.Lj() : EW
        }

        function IW(WW, OW) {
          if ((OW = iW(OW)).isZero()) {
            if (WW.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (OW.equals(-1)) {
            if (WW.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (WW.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-WW.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var mW = Array.apply(null, Array(WW.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return mW.unshift([1]), {
              value: [].concat.apply([], mW),
              isNegative: !1
            }
          }
          var EW = !1;
          if (WW.isNegative() && OW.isPositive() && (EW = !0, WW = WW.abs()), OW.isUnit()) return WW.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(WW.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: EW
          };
          for (var NW, PW = [], LW = WW; LW.isNegative() || LW.compareAbs(OW) >= 0;) {
            NW = LW.divmod(OW), LW = NW.quotient;
            var cW = NW.remainder;
            cW.isNegative() && (cW = OW.minus(cW).abs(), LW = LW.next()), PW.push(cW.toJSNumber())
          }
          return PW.push(LW.toJSNumber()), {
            value: PW.reverse(),
            isNegative: EW
          }
        }

        function aW(WW, iW, OW) {
          var mW = IW(WW, iW);
          return (mW.isNegative ? "-" : "") + mW.value.map((function(WW) {
            return function(WW, iW) {
              return WW < (iW = iW || NW).length ? iW[WW] : "<" + WW + ">"
            }(WW, OW)
          })).join("")
        }

        function rW(WW) {
          if (ZW(+WW)) {
            var iW = +WW;
            if (iW === jW(iW)) return PW ? new tW(BigInt(iW)) : new wW(iW);
            throw new Error("Invalid integer: " + WW)
          }
          var OW = "-" === WW[0];
          OW && (WW = WW.slice(1));
          var mW = WW.split(/e/i);
          if (mW.length > 2) throw new Error("Invalid integer: " + mW.join("e"));
          if (2 === mW.length) {
            var EW = mW[1];
            if ("+" === EW[0] && (EW = EW.slice(1)), (EW = +EW) !== jW(EW) || !ZW(EW)) throw new Error("Invalid integer: " + EW + " is not a valid exponent.");
            var NW = mW[0],
              LW = NW.indexOf(".");
            if (LW >= 0 && (EW -= NW.length - LW - 1, NW = NW.slice(0, LW) + NW.slice(LW + 1)), EW < 0) throw new Error("Cannot include negative exponent part for integers");
            WW = NW += new Array(EW + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(WW)) throw new Error("Invalid integer: " + WW);
          if (PW) return new tW(BigInt(OW ? "-" + WW : WW));
          for (var xW = [], lW = WW.length, bW = lW - 7; lW > 0;) xW.push(+WW.slice(bW, lW)), (bW -= 7) < 0 && (bW = 0), lW -= 7;
          return AW(xW), new cW(xW, OW)
        }

        function zW(WW) {
          return "number" === typeof WW ? function(WW) {
            if (PW) return new tW(BigInt(WW));
            if (ZW(WW)) {
              if (WW !== jW(WW)) throw new Error(WW + " is not an integer.");
              return new wW(WW)
            }
            return rW(WW.toString())
          }(WW) : "string" === typeof WW ? rW(WW) : "bigint" === typeof WW ? new tW(WW) : WW
        }
        cW.prototype.toArray = function(WW) {
          return IW(this, WW)
        }, wW.prototype.toArray = function(WW) {
          return IW(this, WW)
        }, tW.prototype.toArray = function(WW) {
          return IW(this, WW)
        }, cW.prototype.toString = function(iW, OW) {
          if (iW === WW && (iW = 10), 10 !== iW) return aW(this, iW, OW);
          for (var mW, EW = this.value, NW = EW.length, PW = String(EW[--NW]); --NW >= 0;) mW = String(EW[NW]), PW += "0000000".slice(mW.length) + mW;
          return (this.sign ? "-" : "") + PW
        }, wW.prototype.toString = function(iW, OW) {
          return iW === WW && (iW = 10), 10 != iW ? aW(this, iW, OW) : String(this.value)
        }, tW.prototype.toString = wW.prototype.toString, tW.prototype.toJSON = cW.prototype.toJSON = wW.prototype.toJSON = function() {
          return this.toString()
        }, cW.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, cW.prototype.toJSNumber = cW.prototype.valueOf, wW.prototype.valueOf = function() {
          return this.value
        }, wW.prototype.toJSNumber = wW.prototype.valueOf, tW.prototype.valueOf = tW.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var FW = 0; FW < 1e3; FW++) LW[FW] = zW(FW), FW > 0 && (LW[-FW] = zW(-FW));
        return LW.one = LW[1], LW.zero = LW[0], LW.minusOne = LW[-1], LW.max = XW, LW.min = BW, LW.gcd = qW, LW.lcm = function(WW, iW) {
          return WW = zW(WW).abs(), iW = zW(iW).abs(), WW.divide(qW(WW, iW)).multiply(iW)
        }, LW.isInstance = function(WW) {
          return WW instanceof cW || WW instanceof wW || WW instanceof tW
        }, LW.randBetween = function(WW, iW, mW) {
          WW = zW(WW), iW = zW(iW);
          var EW = mW || Math.random,
            NW = BW(WW, iW),
            PW = XW(WW, iW).subtract(NW).add(1);
          if (PW.isSmall) return NW.add(Math.floor(EW() * PW));
          for (var cW = IW(PW, OW).value, wW = [], tW = !0, ZW = 0; ZW < cW.length; ZW++) {
            var xW = tW ? cW[ZW] : OW,
              lW = jW(EW() * xW);
            wW.push(lW), lW < xW && (tW = !1)
          }
          return NW.add(LW.mZ(wW, OW, !1))
        }, LW.mZ = function(WW, iW, OW) {
          return GW(WW.map(zW), zW(iW || 10), OW)
        }, LW
      }();
      WW.hasOwnProperty("exports") && (WW.exports = iW)
    }(MO);
    var KO = NW(MO.exports);

    function SO(WW, iW, OW) {
      let mW = 0;
      for (let EW = 0; EW < OW; EW++) {
        const OW = WW[iW + EW];
        if (void 0 === OW) break;
        mW += OW * 16 ** EW
      }
      return mW
    }

    function YO(WW) {
      const iW = [];
      for (let OW = 0; OW < WW.length; OW++) {
        let mW = Number(WW[OW]);
        for (let WW = 0; mW || WW < iW.length; WW++) mW += 10 * (iW[WW] || 0), iW[WW] = mW % 16, mW = (mW - iW[WW]) / 16
      }
      return iW
    }
    class yO {
      static fromString(WW) {
        return new yO(function(WW) {
          const iW = YO(WW),
            OW = Array(4);
          for (let mW = 0; mW < 4; mW++) OW[3 - mW] = SO(iW, 4 * mW, 4);
          return OW
        }(WW), WW)
      }
      static fromBit(WW) {
        const iW = Array(4),
          OW = Math.floor(WW / 16);
        for (let mW = 0; mW < 4; mW++) iW[3 - mW] = mW === OW ? 1 << WW - 16 * OW : 0;
        return new yO(iW)
      }
      constructor(WW, iW) {
        this.parts = WW, this.str = iW
      }
      and(WW) {
        let {
          parts: iW
        } = WW;
        return new yO(this.parts.map(((WW, OW) => WW & iW[OW])))
      }
      or(WW) {
        let {
          parts: iW
        } = WW;
        return new yO(this.parts.map(((WW, OW) => WW | iW[OW])))
      }
      xor(WW) {
        let {
          parts: iW
        } = WW;
        return new yO(this.parts.map(((WW, OW) => WW ^ iW[OW])))
      }
      not() {
        return new yO(this.parts.map((WW => ~WW)))
      }
      equals(WW) {
        let {
          parts: iW
        } = WW;
        return this.parts.every(((WW, OW) => WW === iW[OW]))
      }
      toString() {
        if (null != this.str) return this.str;
        const WW = new Array(16);
        return this.parts.forEach(((iW, OW) => {
          const mW = YO(iW.toString());
          for (let EW = 0; EW < 4; EW++) WW[EW + 4 * OW] = mW[3 - EW] || 0
        })), this.str = KO.mZ(WW, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const TO = function() {
      try {
        return BigInt, !0
      } catch (WW) {
        return !1
      }
    }();
    TO && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const JO = {},
      hO = TO ? function(WW) {
        return BigInt(WW)
      } : function(WW) {
        return WW instanceof yO ? WW : ("number" === typeof WW && (WW = WW.toString()), null != JO[WW] || (JO[WW] = yO.fromString(WW)), JO[WW])
      },
      HO = hO(0),
      nO = TO ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HO)
      } : function() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HO;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO).and(WW)
      },
      uO = TO ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HO)
      } : function() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HO;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO).or(WW)
      },
      oO = TO ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HO)
      } : function() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HO;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO).xor(WW)
      },
      dO = TO ? function(WW, iW) {
        return WW === iW
      } : function(WW, iW) {
        return null == WW || null == iW ? WW == iW : WW.equals(iW)
      };
    var eO, vO, gO, DO, VO = {
      combine: function() {
        let WW = arguments.length <= 0 ? void 0 : arguments[0];
        for (let iW = 1; iW < arguments.length; iW++) WW = uO(WW, iW < 0 || arguments.length <= iW ? void 0 : arguments[iW]);
        return WW
      },
      add: function(WW, iW) {
        return iW === HO ? WW : uO(WW, iW)
      },
      remove: function(WW, iW) {
        return iW === HO ? WW : oO(WW, nO(WW, iW))
      },
      filter: nO,
      invert: TO ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HO).not()
      },
      has: function(WW, iW) {
        return dO(nO(WW, iW), iW)
      },
      hasAny: function(WW, iW) {
        return !dO(nO(WW, iW), HO)
      },
      equals: dO,
      deserialize: hO,
      getFlag: TO ? function(WW) {
        return BigInt(1) << BigInt(WW)
      } : function(WW) {
        return yO.fromBit(WW)
      }
    };
    ! function(WW) {
      WW[WW.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", WW[WW.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", WW[WW.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", WW[WW.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", WW[WW.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", WW[WW.RATELIMITED = 4002] = "RATELIMITED", WW[WW.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", WW[WW.INVALID_VERSION = 4004] = "INVALID_VERSION", WW[WW.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(eO || (eO = {})),
    function(WW) {
      WW[WW.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", WW[WW.INVALID_COMMAND = 4002] = "INVALID_COMMAND", WW[WW.INVALID_EVENT = 4004] = "INVALID_EVENT", WW[WW.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(vO || (vO = {})),
    function(WW) {
      WW.LANDSCAPE = "landscape", WW.PORTRAIT = "portrait"
    }(gO || (gO = {})),
    function(WW) {
      WW.MOBILE = "mobile", WW.DESKTOP = "desktop"
    }(DO || (DO = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: VO.getFlag(0),
      ADMINISTRATOR: VO.getFlag(3)
    });

    function pO(WW) {
      return bO((iW => {
        var OW;
        const [mW] = null !== (OW = Object.entries(WW).find((WW => {
          let [, OW] = WW;
          return OW === iW
        }))) && void 0 !== OW ? OW : [];
        return null != iW && void 0 === mW ? WW.UNHANDLED : iW
      }), vi().or(gi()))
    }
    const fO = sO.object({
        image_url: sO.string()
      }),
      CO = sO.object({
        mediaUrl: sO.string().max(1024)
      }),
      XO = sO.object({
        access_token: sO.union([sO.string(), sO.null()]).optional()
      }),
      BO = sO.object({
        access_token: sO.string(),
        user: sO.object({
          username: sO.string(),
          discriminator: sO.string(),
          id: sO.string(),
          avatar: sO.union([sO.string(), sO.null()]).optional(),
          public_flags: sO.number(),
          global_name: sO.union([sO.string(), sO.null()]).optional()
        }),
        scopes: sO.array(function(WW) {
          const iW = oi().transform((iW => {
            const OW = WW.safeParse(iW);
            return OW.success ? OW.data : WW._def.defaultValue()
          }));
          return iW.overlayType = WW, iW
        }(sO.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(sO.literal(-1)).default(-1))),
        expires: sO.string(),
        application: sO.object({
          description: sO.string(),
          icon: sO.union([sO.string(), sO.null()]).optional(),
          id: sO.string(),
          rpc_origins: sO.array(sO.string()).optional(),
          name: sO.string()
        })
      }),
      qO = sO.object({
        participants: sO.array(sO.object({
          id: sO.string(),
          username: sO.string(),
          global_name: sO.union([sO.string(), sO.null()]).optional(),
          discriminator: sO.string(),
          avatar: sO.union([sO.string(), sO.null()]).optional(),
          flags: sO.number(),
          bot: sO.boolean(),
          avatar_decoration_data: sO.union([sO.object({
            asset: sO.string(),
            skuId: sO.string().optional()
          }), sO.null()]).optional(),
          premium_type: sO.union([sO.number(), sO.null()]).optional(),
          nickname: sO.string().optional()
        }))
      });
    var RO;
    ! function(WW) {
      WW.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", WW.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", WW.AUTHENTICATE = "AUTHENTICATE", WW.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(RO || (RO = {}));
    const GO = sO.object({}).optional().nullable(),
      IO = sO.void(),
      aO = {
        [RO.INITIATE_IMAGE_UPLOAD]: {
          request: IO,
          response: fO
        },
        [RO.OPEN_SHARE_MOMENT_DIALOG]: {
          request: CO,
          response: GO
        },
        [RO.AUTHENTICATE]: {
          request: XO,
          response: BO
        },
        [RO.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: IO,
          response: qO
        }
      },
      rO = "DISPATCH";
    var zO;
    ! function(WW) {
      WW.AUTHORIZE = "AUTHORIZE", WW.AUTHENTICATE = "AUTHENTICATE", WW.GET_GUILDS = "GET_GUILDS", WW.GET_GUILD = "GET_GUILD", WW.GET_CHANNEL = "GET_CHANNEL", WW.GET_CHANNELS = "GET_CHANNELS", WW.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", WW.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", WW.SUBSCRIBE = "SUBSCRIBE", WW.UNSUBSCRIBE = "UNSUBSCRIBE", WW.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", WW.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", WW.SET_ACTIVITY = "SET_ACTIVITY", WW.GET_SKUS = "GET_SKUS", WW.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", WW.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", WW.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", WW.START_PURCHASE = "START_PURCHASE", WW.SET_CONFIG = "SET_CONFIG", WW.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", WW.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", WW.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", WW.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", WW.CAPTURE_LOG = "CAPTURE_LOG", WW.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", WW.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", WW.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", WW.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", WW.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", WW.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", WW.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(zO || (zO = {}));
    const FO = zi({
        cmd: vi(),
        data: Gi(),
        evt: qi(),
        nonce: vi()
      }).passthrough(),
      QO = (pO(Object.assign(Object.assign({}, BO.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), zi({
        id: vi(),
        username: vi(),
        discriminator: vi(),
        global_name: vi().optional().nullable(),
        avatar: vi().optional().nullable(),
        avatar_decoration_data: zi({
          asset: vi(),
          sku_id: vi().optional()
        }).nullable(),
        bot: fi(),
        flags: gi().optional().nullable(),
        premium_type: gi().optional().nullable()
      })),
      Wm = zi({
        user: QO,
        nick: vi().optional().nullable(),
        roles: ri(vi()),
        joined_at: vi(),
        deaf: fi(),
        mute: fi()
      }),
      im = zi({
        id: vi(),
        name: vi().optional().nullable(),
        roles: ri(vi()).optional().nullable(),
        user: QO.optional().nullable(),
        require_colons: fi().optional().nullable(),
        managed: fi().optional().nullable(),
        animated: fi().optional().nullable(),
        available: fi().optional().nullable()
      }),
      Om = zi({
        mute: fi(),
        deaf: fi(),
        self_mute: fi(),
        self_deaf: fi(),
        suppress: fi()
      }),
      mm = zi({
        mute: fi(),
        nick: vi(),
        user: QO,
        voice_state: Om,
        volume: gi()
      }),
      Em = pO({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      Nm = zi({
        name: vi(),
        type: gi(),
        url: vi().optional().nullable(),
        created_at: gi().optional().nullable(),
        timestamps: zi({
          start: gi(),
          end: gi()
        }).partial().optional().nullable(),
        application_id: vi().optional().nullable(),
        details: vi().optional().nullable(),
        state: vi().optional().nullable(),
        emoji: im.optional().nullable(),
        party: zi({
          id: vi().optional().nullable(),
          size: ri(gi()).optional().nullable()
        }).optional().nullable(),
        assets: zi({
          large_image: vi().nullable(),
          large_text: vi().nullable(),
          small_image: vi().nullable(),
          small_text: vi().nullable()
        }).partial().optional().nullable(),
        secrets: zi({
          join: vi(),
          match: vi()
        }).partial().optional().nullable(),
        instance: fi().optional().nullable(),
        flags: gi().optional().nullable()
      }),
      Pm = zi({
        id: vi(),
        type: pO({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: vi(),
        deny: vi()
      }),
      Lm = {
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
      cm = zi({
        id: vi(),
        type: pO(Lm),
        guild_id: vi().optional().nullable(),
        position: gi().optional().nullable(),
        permission_overwrites: ri(Pm).optional().nullable(),
        name: vi().optional().nullable(),
        topic: vi().optional().nullable(),
        nsfw: fi().optional().nullable(),
        last_message_id: vi().optional().nullable(),
        bitrate: gi().optional().nullable(),
        user_limit: gi().optional().nullable(),
        rate_limit_per_user: gi().optional().nullable(),
        recipients: ri(QO).optional().nullable(),
        icon: vi().optional().nullable(),
        owner_id: vi().optional().nullable(),
        application_id: vi().optional().nullable(),
        parent_id: vi().optional().nullable(),
        last_pin_timestamp: vi().optional().nullable()
      }),
      wm = zi({
        user: QO,
        guild_id: vi(),
        status: Em,
        activities: ri(Nm),
        client_status: zi({
          desktop: Em,
          mobile: Em,
          web: Em
        }).partial()
      }),
      tm = zi({
        id: vi(),
        name: vi(),
        color: gi(),
        hoist: fi(),
        position: gi(),
        permissions: vi(),
        managed: fi(),
        mentionable: fi()
      }),
      Zm = (zi({
        id: vi(),
        name: vi(),
        owner_id: vi(),
        icon: vi().nullable(),
        icon_hash: vi().optional().nullable(),
        splash: vi().nullable(),
        discovery_splash: vi().nullable(),
        owner: fi().optional().nullable(),
        permissions: vi().optional().nullable(),
        region: vi(),
        afk_channel_id: vi().nullable(),
        afk_timeout: gi(),
        widget_enabled: fi().optional().nullable(),
        widget_channel_id: vi().optional().nullable(),
        verification_level: gi(),
        default_message_notifications: gi(),
        explicit_content_filter: gi(),
        roles: ri(tm),
        emojis: ri(im),
        features: ri(vi()),
        mfa_level: gi(),
        application_id: vi().nullable(),
        system_channel_id: vi().nullable(),
        system_channel_flags: gi(),
        rules_channel_id: vi().nullable(),
        joined_at: vi().optional().nullable(),
        large: fi().optional().nullable(),
        unavailable: fi().optional().nullable(),
        member_count: gi().optional().nullable(),
        voice_states: ri(Om).optional().nullable(),
        members: ri(Wm).optional().nullable(),
        channels: ri(cm).optional().nullable(),
        presences: ri(wm).optional().nullable(),
        max_presences: gi().optional().nullable(),
        max_members: gi().optional().nullable(),
        vanity_url_code: vi().nullable(),
        description: vi().nullable(),
        banner: vi().nullable(),
        premium_tier: gi(),
        premium_subscription_count: gi().optional().nullable(),
        preferred_locale: vi(),
        public_updates_channel_id: vi().nullable(),
        max_video_channel_users: gi().optional().nullable(),
        approximate_member_count: gi().optional().nullable(),
        approximate_presence_count: gi().optional().nullable()
      }), zi({
        id: vi(),
        guild_id: vi(),
        type: gi(),
        name: vi()
      })),
      xm = zi({
        id: vi(),
        filename: vi(),
        size: gi(),
        url: vi(),
        proxy_url: vi(),
        height: gi().optional().nullable(),
        width: gi().optional().nullable()
      }),
      lm = zi({
        text: vi(),
        icon_url: vi().optional().nullable(),
        proxy_icon_url: vi().optional().nullable()
      }),
      Am = zi({
        url: vi().optional().nullable(),
        proxy_url: vi().optional().nullable(),
        height: gi().optional().nullable(),
        width: gi().optional().nullable()
      }),
      bm = Am.omit({
        proxy_url: !0
      }),
      jm = zi({
        name: vi().optional().nullable(),
        url: vi().optional().nullable()
      }),
      Um = zi({
        name: vi().optional().nullable(),
        url: vi().optional().nullable(),
        icon_url: vi().optional().nullable(),
        proxy_icon_url: vi().optional().nullable()
      }),
      km = zi({
        name: vi(),
        value: vi(),
        inline: fi()
      }),
      sm = zi({
        title: vi().optional().nullable(),
        type: vi().optional().nullable(),
        description: vi().optional().nullable(),
        url: vi().optional().nullable(),
        timestamp: vi().optional().nullable(),
        color: gi().optional().nullable(),
        footer: lm.optional().nullable(),
        image: Am.optional().nullable(),
        thumbnail: Am.optional().nullable(),
        video: bm.optional().nullable(),
        provider: jm.optional().nullable(),
        author: Um.optional().nullable(),
        fields: ri(km).optional().nullable()
      }),
      Mm = zi({
        count: gi(),
        me: fi(),
        emoji: im
      }),
      Km = zi({
        type: gi(),
        party_id: vi().optional().nullable()
      }),
      Sm = zi({
        id: vi(),
        cover_image: vi().optional().nullable(),
        description: vi(),
        icon: vi().optional().nullable(),
        name: vi()
      }),
      Ym = zi({
        message_id: vi().optional().nullable(),
        channel_id: vi().optional().nullable(),
        guild_id: vi().optional().nullable()
      }),
      ym = zi({
        id: vi(),
        channel_id: vi(),
        guild_id: vi().optional().nullable(),
        author: QO.optional().nullable(),
        member: Wm.optional().nullable(),
        content: vi(),
        timestamp: vi(),
        edited_timestamp: vi().optional().nullable(),
        tts: fi(),
        mention_everyone: fi(),
        mentions: ri(QO),
        mention_roles: ri(vi()),
        mention_channels: ri(Zm),
        attachments: ri(xm),
        embeds: ri(sm),
        reactions: ri(Mm).optional().nullable(),
        nonce: Qi([vi(), gi()]).optional().nullable(),
        pinned: fi(),
        webhook_id: vi().optional().nullable(),
        type: gi(),
        activity: Km.optional().nullable(),
        application: Sm.optional().nullable(),
        message_reference: Ym.optional().nullable(),
        flags: gi().optional().nullable(),
        stickers: ri(Gi()).optional().nullable(),
        referenced_message: Gi().optional().nullable()
      }),
      Tm = zi({
        id: vi(),
        name: vi()
      }),
      Jm = zi({
        type: pO({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: gi(),
        name: vi()
      }),
      hm = zi({
        type: pO({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: fi(),
        threshold: gi(),
        shortcut: ri(Jm),
        delay: gi()
      }),
      Hm = zi({
        device_id: vi(),
        volume: gi(),
        available_devices: ri(Tm)
      }),
      nm = (zi({
        type: pO({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: vi(),
        vendor: zi({
          name: vi(),
          url: vi()
        }),
        model: zi({
          name: vi(),
          url: vi()
        }),
        related: ri(vi()),
        echo_cancellation: fi().optional().nullable(),
        noise_suppression: fi().optional().nullable(),
        automatic_gain_control: fi().optional().nullable(),
        hardware_mute: fi().optional().nullable()
      }), zi({
        id: vi(),
        name: vi(),
        type: pO({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: zi({
          amount: gi(),
          currency: vi()
        }),
        application_id: vi(),
        flags: gi(),
        release_date: vi().nullable()
      })),
      um = zi({
        id: vi(),
        sku_id: vi(),
        application_id: vi(),
        user_id: vi(),
        gift_code_flags: gi(),
        type: pO({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: vi().optional().nullable(),
        branches: ri(vi()).optional().nullable(),
        starts_at: vi().optional().nullable(),
        ends_at: vi().optional().nullable(),
        parent_id: vi().optional().nullable(),
        consumed: fi().optional().nullable(),
        deleted: fi().optional().nullable(),
        gift_code_batch_id: vi().optional().nullable()
      }),
      om = (pO({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), pO({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      dm = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      em = (pO(dm), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      gm = (pO(em), "ERROR");
    var Dm;
    ! function(WW) {
      WW.READY = "READY", WW.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", WW.SPEAKING_START = "SPEAKING_START", WW.SPEAKING_STOP = "SPEAKING_STOP", WW.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", WW.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", WW.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", WW.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", WW.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", WW.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Dm || (Dm = {}));
    const Vm = FO.extend({
        evt: tO(Dm),
        nonce: vi().nullable(),
        cmd: cO(rO),
        data: zi({}).passthrough()
      }),
      pm = FO.extend({
        evt: cO(gm),
        data: zi({
          code: gi(),
          message: vi().optional()
        }).passthrough(),
        cmd: tO(zO),
        nonce: vi().nullable()
      }),
      fm = Vm.extend({
        evt: vi()
      }),
      Cm = Qi([Vm, fm, pm]);
    const Xm = {
      [Dm.READY]: {
        payload: Vm.extend({
          evt: cO(Dm.READY),
          data: zi({
            v: gi(),
            config: zi({
              cdn_host: vi().optional(),
              api_endpoint: vi(),
              environment: vi()
            }),
            user: zi({
              id: vi(),
              username: vi(),
              discriminator: vi(),
              avatar: vi().optional()
            }).optional()
          })
        })
      },
      [Dm.VOICE_STATE_UPDATE]: {
        payload: Vm.extend({
          evt: cO(Dm.VOICE_STATE_UPDATE),
          data: mm
        }),
        subscribeArgs: zi({
          channel_id: vi()
        })
      },
      [Dm.SPEAKING_START]: {
        payload: Vm.extend({
          evt: cO(Dm.SPEAKING_START),
          data: zi({
            lobby_id: vi().optional(),
            channel_id: vi().optional(),
            user_id: vi()
          })
        }),
        subscribeArgs: zi({
          lobby_id: vi().nullable().optional(),
          channel_id: vi().nullable().optional()
        })
      },
      [Dm.SPEAKING_STOP]: {
        payload: Vm.extend({
          evt: cO(Dm.SPEAKING_STOP),
          data: zi({
            lobby_id: vi().optional(),
            channel_id: vi().optional(),
            user_id: vi()
          })
        }),
        subscribeArgs: zi({
          lobby_id: vi().nullable().optional(),
          channel_id: vi().nullable().optional()
        })
      },
      [Dm.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Vm.extend({
          evt: cO(Dm.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: zi({
            layout_mode: pO(em)
          })
        })
      },
      [Dm.ORIENTATION_UPDATE]: {
        payload: Vm.extend({
          evt: cO(Dm.ORIENTATION_UPDATE),
          data: zi({
            screen_orientation: pO(dm),
            orientation: tO(gO)
          })
        })
      },
      [Dm.CURRENT_USER_UPDATE]: {
        payload: Vm.extend({
          evt: cO(Dm.CURRENT_USER_UPDATE),
          data: QO
        })
      },
      [Dm.ENTITLEMENT_CREATE]: {
        payload: Vm.extend({
          evt: cO(Dm.ENTITLEMENT_CREATE),
          data: zi({
            entitlement: um
          })
        })
      },
      [Dm.THERMAL_STATE_UPDATE]: {
        payload: Vm.extend({
          evt: cO(Dm.THERMAL_STATE_UPDATE),
          data: zi({
            thermal_state: om
          })
        })
      },
      [Dm.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Vm.extend({
          evt: cO(Dm.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: zi({
            participants: qO.shape.participants
          })
        })
      }
    };
    const Bm = zi({}).nullable(),
      qm = zi({
        code: vi()
      }),
      Rm = zi({
        guilds: ri(zi({
          id: vi(),
          name: vi()
        }))
      }),
      Gm = zi({
        id: vi(),
        name: vi(),
        icon_url: vi().optional(),
        members: ri(Wm)
      }),
      Im = zi({
        id: vi(),
        type: pO(Lm),
        guild_id: vi().optional().nullable(),
        name: vi().optional().nullable(),
        topic: vi().optional().nullable(),
        bitrate: gi().optional().nullable(),
        user_limit: gi().optional().nullable(),
        position: gi().optional().nullable(),
        voice_states: ri(mm),
        messages: ri(ym)
      }),
      am = zi({
        channels: ri(cm)
      }),
      rm = (Im.nullable(), Im.nullable()),
      zm = Im.nullable(),
      Fm = (zi({
        input: Hm,
        output: Hm,
        mode: hm,
        automatic_gain_control: fi(),
        echo_cancellation: fi(),
        noise_suppression: fi(),
        qos: fi(),
        silence_warning: fi(),
        deaf: fi(),
        mute: fi()
      }), zi({
        evt: vi()
      })),
      Qm = zi({
        shortcut: Jm
      }),
      WE = Nm,
      iE = zi({
        skus: ri(nm)
      }),
      OE = zi({
        entitlements: ri(um)
      }),
      mE = ri(um).nullable(),
      EE = zi({
        use_interactive_pip: fi()
      }),
      NE = zi({
        locale: vi()
      }),
      PE = zi({
        enabled: fi()
      }),
      LE = zi({
        permissions: Vi().or(vi())
      }),
      cE = zi({
        iosKeyboardResizesView: lO(fi())
      }),
      wE = FO.extend({
        cmd: tO(zO),
        evt: qi()
      });

    function tE(WW) {
      let {
        cmd: iW,
        data: OW
      } = WW;
      switch (iW) {
        case zO.AUTHORIZE:
          return qm.parse(OW);
        case zO.CAPTURE_SHORTCUT:
          return Qm.parse(OW);
        case zO.ENCOURAGE_HW_ACCELERATION:
          return PE.parse(OW);
        case zO.GET_CHANNEL:
          return Im.parse(OW);
        case zO.GET_CHANNELS:
          return am.parse(OW);
        case zO.GET_CHANNEL_PERMISSIONS:
          return LE.parse(OW);
        case zO.GET_GUILD:
          return Gm.parse(OW);
        case zO.GET_GUILDS:
          return Rm.parse(OW);
        case zO.GET_PLATFORM_BEHAVIORS:
          return cE.parse(OW);
        case zO.GET_CHANNEL:
          return Im.parse(OW);
        case zO.SELECT_TEXT_CHANNEL:
          return zm.parse(OW);
        case zO.SELECT_VOICE_CHANNEL:
          return rm.parse(OW);
        case zO.SET_ACTIVITY:
          return WE.parse(OW);
        case zO.GET_SKUS_EMBEDDED:
          return iE.parse(OW);
        case zO.GET_ENTITLEMENTS_EMBEDDED:
          return OE.parse(OW);
        case zO.SET_CONFIG:
          return EE.parse(OW);
        case zO.START_PURCHASE:
          return mE.parse(OW);
        case zO.SUBSCRIBE:
        case zO.UNSUBSCRIBE:
          return Fm.parse(OW);
        case zO.USER_SETTINGS_GET_LOCALE:
          return NE.parse(OW);
        case zO.OPEN_EXTERNAL_LINK:
        case zO.SET_ORIENTATION_LOCK_STATE:
        case zO.SET_CERTIFIED_DEVICES:
        case zO.SEND_ANALYTICS_EVENT:
        case zO.OPEN_INVITE_DIALOG:
        case zO.CAPTURE_LOG:
        case zO.GET_SKUS:
        case zO.GET_ENTITLEMENTS:
          return Bm.parse(OW);
        case zO.AUTHENTICATE:
        case zO.INITIATE_IMAGE_UPLOAD:
        case zO.OPEN_SHARE_MOMENT_DIALOG:
        case zO.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: WW
          } = aO[iW];
          return WW.parse(OW);
        default:
          ! function(WW, iW) {
            throw iW
          }(0, new Error(`Unrecognized command ${iW}`))
      }
    }
    zi({
      frame_id: vi(),
      platform: tO(DO).optional().nullable()
    }), zi({
      v: cO(1),
      encoding: cO("json").optional(),
      client_id: vi(),
      frame_id: vi()
    });
    const ZE = zi({
        code: gi(),
        message: vi().optional()
      }),
      xE = zi({
        evt: vi().nullable(),
        nonce: vi().nullable(),
        data: Gi().nullable(),
        cmd: vi()
      }).passthrough();

    function lE(WW) {
      const iW = xE.parse(WW);
      return null != iW.evt ? iW.evt === gm ? pm.parse(iW) : function(WW) {
        const iW = WW.evt;
        if (!(iW in Dm)) throw new Error(`Unrecognized event type ${WW.evt}`);
        return Xm[iW].payload.parse(WW)
      }(Cm.parse(iW)) : function(WW) {
        return Object.assign(Object.assign({}, WW), {
          data: tE(WW)
        })
      }(wE.passthrough().parse(iW))
    }

    function AE(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const EW = FO.extend({
        cmd: cO(iW),
        data: OW
      });
      return async OW => {
        const NW = await WW({
          cmd: iW,
          args: OW,
          transfer: mW(OW)
        });
        return EW.parse(NW).data
      }
    }

    function bE(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const OW = aO[WW].response,
        mW = FO.extend({
          cmd: cO(WW),
          data: OW
        });
      return OW => async EW => {
        const NW = await OW({
          cmd: WW,
          args: EW,
          transfer: iW(EW)
        });
        return mW.parse(NW).data
      }
    }
    const jE = bE(RO.AUTHENTICATE),
      UE = WW => AE(WW, zO.AUTHORIZE, qm),
      kE = WW => AE(WW, zO.CAPTURE_LOG, Bm),
      sE = WW => AE(WW, zO.ENCOURAGE_HW_ACCELERATION, PE),
      ME = WW => AE(WW, zO.GET_ENTITLEMENTS_EMBEDDED, OE),
      KE = WW => AE(WW, zO.GET_SKUS_EMBEDDED, iE),
      SE = WW => AE(WW, zO.GET_CHANNEL_PERMISSIONS, LE),
      YE = WW => AE(WW, zO.GET_PLATFORM_BEHAVIORS, cE),
      yE = WW => AE(WW, zO.OPEN_EXTERNAL_LINK, Bm),
      TE = WW => AE(WW, zO.OPEN_INVITE_DIALOG, Bm),
      JE = bE(RO.OPEN_SHARE_MOMENT_DIALOG);
    Nm.Kl({
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
      type: Nm.shape.type.optional(),
      instance: Nm.shape.instance.optional()
    }).nullable();
    const hE = WW => AE(WW, zO.SET_ACTIVITY, WE),
      HE = WW => AE(WW, zO.SET_CONFIG, EE);
    const nE = WW => ({
        lock_state: WW.lock_state,
        picture_in_picture_lock_state: WW.picture_in_picture_lock_state
      }),
      uE = WW => function(WW) {
        let {
          sendCommand: iW,
          cmd: OW,
          response: mW,
          fallbackTransform: EW,
          transferTransform: NW = () => {}
        } = WW;
        const PW = FO.extend({
          cmd: cO(OW),
          data: mW
        });
        return async WW => {
          try {
            const mW = await iW({
              cmd: OW,
              args: WW,
              transfer: NW(WW)
            });
            return PW.parse(mW).data
          } catch (mW) {
            if (mW.code === vO.INVALID_PAYLOAD) {
              const mW = EW(WW),
                LW = await iW({
                  cmd: OW,
                  args: mW,
                  transfer: NW(mW)
                });
              return PW.parse(LW).data
            }
            throw mW
          }
        }
      }({
        sendCommand: WW,
        cmd: zO.SET_ORIENTATION_LOCK_STATE,
        response: Bm,
        fallbackTransform: nE
      }),
      oE = WW => AE(WW, zO.START_PURCHASE, mE),
      dE = WW => AE(WW, zO.USER_SETTINGS_GET_LOCALE, NE),
      eE = bE(RO.INITIATE_IMAGE_UPLOAD),
      vE = WW => AE(WW, zO.GET_CHANNEL, Im),
      gE = bE(RO.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var DE = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function VE(WW) {
      return "string" === typeof WW && DE.test(WW)
    }
    for (var pE = [], fE = 0; fE < 256; ++fE) pE.push((fE + 256).toString(16).substr(1));

    function CE(WW) {
      var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = (pE[WW[iW + 0]] + pE[WW[iW + 1]] + pE[WW[iW + 2]] + pE[WW[iW + 3]] + "-" + pE[WW[iW + 4]] + pE[WW[iW + 5]] + "-" + pE[WW[iW + 6]] + pE[WW[iW + 7]] + "-" + pE[WW[iW + 8]] + pE[WW[iW + 9]] + "-" + pE[WW[iW + 10]] + pE[WW[iW + 11]] + pE[WW[iW + 12]] + pE[WW[iW + 13]] + pE[WW[iW + 14]] + pE[WW[iW + 15]]).toLowerCase();
      if (!VE(OW)) throw TypeError("Stringified UUID is invalid");
      return OW
    }
    var XE;

    function BE(WW, iW, OW) {
      function mW(WW, mW, EW, NW) {
        if ("string" === typeof WW && (WW = function(WW) {
            WW = unescape(encodeURIComponent(WW));
            for (var iW = [], OW = 0; OW < WW.length; ++OW) iW.push(WW.charCodeAt(OW));
            return iW
          }(WW)), "string" === typeof mW && (mW = function(WW) {
            if (!VE(WW)) throw TypeError("Invalid UUID");
            var iW, OW = new Uint8Array(16);
            return OW[0] = (iW = parseInt(WW.slice(0, 8), 16)) >>> 24, OW[1] = iW >>> 16 & 255, OW[2] = iW >>> 8 & 255, OW[3] = 255 & iW, OW[4] = (iW = parseInt(WW.slice(9, 13), 16)) >>> 8, OW[5] = 255 & iW, OW[6] = (iW = parseInt(WW.slice(14, 18), 16)) >>> 8, OW[7] = 255 & iW, OW[8] = (iW = parseInt(WW.slice(19, 23), 16)) >>> 8, OW[9] = 255 & iW, OW[10] = (iW = parseInt(WW.slice(24, 36), 16)) / 1099511627776 & 255, OW[11] = iW / 4294967296 & 255, OW[12] = iW >>> 24 & 255, OW[13] = iW >>> 16 & 255, OW[14] = iW >>> 8 & 255, OW[15] = 255 & iW, OW
          }(mW)), 16 !== mW.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var PW = new Uint8Array(16 + WW.length);
        if (PW.set(mW), PW.set(WW, mW.length), (PW = OW(PW))[6] = 15 & PW[6] | iW, PW[8] = 63 & PW[8] | 128, EW) {
          NW = NW || 0;
          for (var LW = 0; LW < 16; ++LW) EW[NW + LW] = PW[LW];
          return EW
        }
        return CE(PW)
      }
      try {
        mW.name = WW
      } catch (EW) {}
      return mW.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", mW.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", mW
    }

    function qE(WW) {
      return 14 + (WW + 64 >>> 9 << 4) + 1
    }

    function RE(WW, iW) {
      var OW = (65535 & WW) + (65535 & iW);
      return (WW >> 16) + (iW >> 16) + (OW >> 16) << 16 | 65535 & OW
    }

    function GE(WW, iW, OW, mW, EW, NW) {
      return RE((PW = RE(RE(iW, WW), RE(mW, NW))) << (LW = EW) | PW >>> 32 - LW, OW);
      var PW, LW
    }

    function IE(WW, iW, OW, mW, EW, NW, PW) {
      return GE(iW & OW | ~iW & mW, WW, iW, EW, NW, PW)
    }

    function aE(WW, iW, OW, mW, EW, NW, PW) {
      return GE(iW & mW | OW & ~mW, WW, iW, EW, NW, PW)
    }

    function rE(WW, iW, OW, mW, EW, NW, PW) {
      return GE(iW ^ OW ^ mW, WW, iW, EW, NW, PW)
    }

    function zE(WW, iW, OW, mW, EW, NW, PW) {
      return GE(OW ^ (iW | ~mW), WW, iW, EW, NW, PW)
    }
    BE("v3", 48, (function(WW) {
      if ("string" === typeof WW) {
        var iW = unescape(encodeURIComponent(WW));
        WW = new Uint8Array(iW.length);
        for (var OW = 0; OW < iW.length; ++OW) WW[OW] = iW.charCodeAt(OW)
      }
      return function(WW) {
        for (var iW = [], OW = 32 * WW.length, mW = "0123456789abcdef", EW = 0; EW < OW; EW += 8) {
          var NW = WW[EW >> 5] >>> EW % 32 & 255,
            PW = parseInt(mW.charAt(NW >>> 4 & 15) + mW.charAt(15 & NW), 16);
          iW.push(PW)
        }
        return iW
      }(function(WW, iW) {
        WW[iW >> 5] |= 128 << iW % 32, WW[qE(iW) - 1] = iW;
        for (var OW = 1732584193, mW = -271733879, EW = -1732584194, NW = 271733878, PW = 0; PW < WW.length; PW += 16) {
          var LW = OW,
            cW = mW,
            wW = EW,
            tW = NW;
          OW = IE(OW, mW, EW, NW, WW[PW], 7, -680876936), NW = IE(NW, OW, mW, EW, WW[PW + 1], 12, -389564586), EW = IE(EW, NW, OW, mW, WW[PW + 2], 17, 606105819), mW = IE(mW, EW, NW, OW, WW[PW + 3], 22, -1044525330), OW = IE(OW, mW, EW, NW, WW[PW + 4], 7, -176418897), NW = IE(NW, OW, mW, EW, WW[PW + 5], 12, 1200080426), EW = IE(EW, NW, OW, mW, WW[PW + 6], 17, -1473231341), mW = IE(mW, EW, NW, OW, WW[PW + 7], 22, -45705983), OW = IE(OW, mW, EW, NW, WW[PW + 8], 7, 1770035416), NW = IE(NW, OW, mW, EW, WW[PW + 9], 12, -1958414417), EW = IE(EW, NW, OW, mW, WW[PW + 10], 17, -42063), mW = IE(mW, EW, NW, OW, WW[PW + 11], 22, -1990404162), OW = IE(OW, mW, EW, NW, WW[PW + 12], 7, 1804603682), NW = IE(NW, OW, mW, EW, WW[PW + 13], 12, -40341101), EW = IE(EW, NW, OW, mW, WW[PW + 14], 17, -1502002290), OW = aE(OW, mW = IE(mW, EW, NW, OW, WW[PW + 15], 22, 1236535329), EW, NW, WW[PW + 1], 5, -165796510), NW = aE(NW, OW, mW, EW, WW[PW + 6], 9, -1069501632), EW = aE(EW, NW, OW, mW, WW[PW + 11], 14, 643717713), mW = aE(mW, EW, NW, OW, WW[PW], 20, -373897302), OW = aE(OW, mW, EW, NW, WW[PW + 5], 5, -701558691), NW = aE(NW, OW, mW, EW, WW[PW + 10], 9, 38016083), EW = aE(EW, NW, OW, mW, WW[PW + 15], 14, -660478335), mW = aE(mW, EW, NW, OW, WW[PW + 4], 20, -405537848), OW = aE(OW, mW, EW, NW, WW[PW + 9], 5, 568446438), NW = aE(NW, OW, mW, EW, WW[PW + 14], 9, -1019803690), EW = aE(EW, NW, OW, mW, WW[PW + 3], 14, -187363961), mW = aE(mW, EW, NW, OW, WW[PW + 8], 20, 1163531501), OW = aE(OW, mW, EW, NW, WW[PW + 13], 5, -1444681467), NW = aE(NW, OW, mW, EW, WW[PW + 2], 9, -51403784), EW = aE(EW, NW, OW, mW, WW[PW + 7], 14, 1735328473), OW = rE(OW, mW = aE(mW, EW, NW, OW, WW[PW + 12], 20, -1926607734), EW, NW, WW[PW + 5], 4, -378558), NW = rE(NW, OW, mW, EW, WW[PW + 8], 11, -2022574463), EW = rE(EW, NW, OW, mW, WW[PW + 11], 16, 1839030562), mW = rE(mW, EW, NW, OW, WW[PW + 14], 23, -35309556), OW = rE(OW, mW, EW, NW, WW[PW + 1], 4, -1530992060), NW = rE(NW, OW, mW, EW, WW[PW + 4], 11, 1272893353), EW = rE(EW, NW, OW, mW, WW[PW + 7], 16, -155497632), mW = rE(mW, EW, NW, OW, WW[PW + 10], 23, -1094730640), OW = rE(OW, mW, EW, NW, WW[PW + 13], 4, 681279174), NW = rE(NW, OW, mW, EW, WW[PW], 11, -358537222), EW = rE(EW, NW, OW, mW, WW[PW + 3], 16, -722521979), mW = rE(mW, EW, NW, OW, WW[PW + 6], 23, 76029189), OW = rE(OW, mW, EW, NW, WW[PW + 9], 4, -640364487), NW = rE(NW, OW, mW, EW, WW[PW + 12], 11, -421815835), EW = rE(EW, NW, OW, mW, WW[PW + 15], 16, 530742520), OW = zE(OW, mW = rE(mW, EW, NW, OW, WW[PW + 2], 23, -995338651), EW, NW, WW[PW], 6, -198630844), NW = zE(NW, OW, mW, EW, WW[PW + 7], 10, 1126891415), EW = zE(EW, NW, OW, mW, WW[PW + 14], 15, -1416354905), mW = zE(mW, EW, NW, OW, WW[PW + 5], 21, -57434055), OW = zE(OW, mW, EW, NW, WW[PW + 12], 6, 1700485571), NW = zE(NW, OW, mW, EW, WW[PW + 3], 10, -1894986606), EW = zE(EW, NW, OW, mW, WW[PW + 10], 15, -1051523), mW = zE(mW, EW, NW, OW, WW[PW + 1], 21, -2054922799), OW = zE(OW, mW, EW, NW, WW[PW + 8], 6, 1873313359), NW = zE(NW, OW, mW, EW, WW[PW + 15], 10, -30611744), EW = zE(EW, NW, OW, mW, WW[PW + 6], 15, -1560198380), mW = zE(mW, EW, NW, OW, WW[PW + 13], 21, 1309151649), OW = zE(OW, mW, EW, NW, WW[PW + 4], 6, -145523070), NW = zE(NW, OW, mW, EW, WW[PW + 11], 10, -1120210379), EW = zE(EW, NW, OW, mW, WW[PW + 2], 15, 718787259), mW = zE(mW, EW, NW, OW, WW[PW + 9], 21, -343485551), OW = RE(OW, LW), mW = RE(mW, cW), EW = RE(EW, wW), NW = RE(NW, tW)
        }
        return [OW, mW, EW, NW]
      }(function(WW) {
        if (0 === WW.length) return [];
        for (var iW = 8 * WW.length, OW = new Uint32Array(qE(iW)), mW = 0; mW < iW; mW += 8) OW[mW >> 5] |= (255 & WW[mW / 8]) << mW % 32;
        return OW
      }(WW), 8 * WW.length))
    }));
    var FE = new Uint8Array(16);

    function QE() {
      if (!XE && !(XE = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return XE(FE)
    }

    function WN(WW, iW, OW) {
      var mW = (WW = WW || {}).random || (WW.rng || QE)();
      if (mW[6] = 15 & mW[6] | 64, mW[8] = 63 & mW[8] | 128, iW) {
        OW = OW || 0;
        for (var EW = 0; EW < 16; ++EW) iW[OW + EW] = mW[EW];
        return iW
      }
      return CE(mW)
    }

    function iN(WW, iW, OW, mW) {
      switch (WW) {
        case 0:
          return iW & OW ^ ~iW & mW;
        case 1:
        case 3:
          return iW ^ OW ^ mW;
        case 2:
          return iW & OW ^ iW & mW ^ OW & mW
      }
    }

    function ON(WW, iW) {
      return WW << iW | WW >>> 32 - iW
    }
    BE("v5", 80, (function(WW) {
      var iW = [1518500249, 1859775393, 2400959708, 3395469782],
        OW = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof WW) {
        var mW = unescape(encodeURIComponent(WW));
        WW = [];
        for (var EW = 0; EW < mW.length; ++EW) WW.push(mW.charCodeAt(EW))
      } else Array.isArray(WW) || (WW = Array.prototype.slice.call(WW));
      WW.push(128);
      for (var NW = WW.length / 4 + 2, PW = Math.ceil(NW / 16), LW = new Array(PW), cW = 0; cW < PW; ++cW) {
        for (var wW = new Uint32Array(16), tW = 0; tW < 16; ++tW) wW[tW] = WW[64 * cW + 4 * tW] << 24 | WW[64 * cW + 4 * tW + 1] << 16 | WW[64 * cW + 4 * tW + 2] << 8 | WW[64 * cW + 4 * tW + 3];
        LW[cW] = wW
      }
      LW[PW - 1][14] = 8 * (WW.length - 1) / Math.pow(2, 32), LW[PW - 1][14] = Math.floor(LW[PW - 1][14]), LW[PW - 1][15] = 8 * (WW.length - 1) & 4294967295;
      for (var ZW = 0; ZW < PW; ++ZW) {
        for (var xW = new Uint32Array(80), lW = 0; lW < 16; ++lW) xW[lW] = LW[ZW][lW];
        for (var AW = 16; AW < 80; ++AW) xW[AW] = ON(xW[AW - 3] ^ xW[AW - 8] ^ xW[AW - 14] ^ xW[AW - 16], 1);
        for (var bW = OW[0], jW = OW[1], UW = OW[2], kW = OW[3], sW = OW[4], MW = 0; MW < 80; ++MW) {
          var KW = Math.floor(MW / 20),
            SW = ON(bW, 5) + iN(KW, jW, UW, kW) + sW + iW[KW] + xW[MW] >>> 0;
          sW = kW, kW = UW, UW = ON(jW, 30) >>> 0, jW = bW, bW = SW
        }
        OW[0] = OW[0] + bW >>> 0, OW[1] = OW[1] + jW >>> 0, OW[2] = OW[2] + UW >>> 0, OW[3] = OW[3] + kW >>> 0, OW[4] = OW[4] + sW >>> 0
      }
      return [OW[0] >> 24 & 255, OW[0] >> 16 & 255, OW[0] >> 8 & 255, 255 & OW[0], OW[1] >> 24 & 255, OW[1] >> 16 & 255, OW[1] >> 8 & 255, 255 & OW[1], OW[2] >> 24 & 255, OW[2] >> 16 & 255, OW[2] >> 8 & 255, 255 & OW[2], OW[3] >> 24 & 255, OW[3] >> 16 & 255, OW[3] >> 8 & 255, 255 & OW[3], OW[4] >> 24 & 255, OW[4] >> 16 & 255, OW[4] >> 8 & 255, 255 & OW[4]]
    }));
    class mN extends Error {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(iW), this.code = WW, this.message = iW, this.name = "Discord SDK Error"
      }
    }
    const EN = ["log", "warn", "debug", "info", "error"];
    var NN;
    ! function(WW) {
      WW[WW.HANDSHAKE = 0] = "HANDSHAKE", WW[WW.FRAME = 1] = "FRAME", WW[WW.CLOSE = 2] = "CLOSE", WW[WW.HELLO = 3] = "HELLO"
    }(NN || (NN = {}));
    const PN = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class LN {
      getTransfer(WW) {
        var iW;
        switch (WW.cmd) {
          case zO.SUBSCRIBE:
          case zO.UNSUBSCRIBE:
            return;
          default:
            return null !== (iW = WW.transfer) && void 0 !== iW ? iW : void 0
        }
      }
      constructor(WW, iW) {
        var OW;
        if (this.eventBus = new wW, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = WW => {
            var iW;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const OW = WN();
            null === (iW = this.source) || void 0 === iW || iW.postMessage([NN.FRAME, Object.assign(Object.assign({}, WW), {
              nonce: OW
            })], this.sourceOrigin, this.getTransfer(WW));
            return new Promise(((WW, iW) => {
              this.pendingCommands.set(OW, {
                resolve: WW,
                reject: iW
              })
            }))
          }, this.commands = (OW = this.sendCommand, {
            authenticate: jE(OW),
            authorize: UE(OW),
            captureLog: kE(OW),
            encourageHardwareAcceleration: sE(OW),
            getChannel: vE(OW),
            getChannelPermissions: SE(OW),
            getEntitlements: ME(OW),
            getPlatformBehaviors: YE(OW),
            getSkus: KE(OW),
            openExternalLink: yE(OW),
            openInviteDialog: TE(OW),
            openShareMomentDialog: JE(OW),
            setActivity: hE(OW),
            setConfig: HE(OW),
            setOrientationLockState: uE(OW),
            startPurchase: oE(OW),
            userSettingsGetLocale: dE(OW),
            initiateImageUpload: eE(OW),
            getInstanceConnectedParticipants: gE(OW)
          }), this.handleMessage = WW => {
            if (!PN.has(WW.origin)) return;
            const iW = WW.data;
            if (!Array.isArray(iW)) return;
            const [OW, mW] = iW;
            switch (OW) {
              case NN.HELLO:
                return;
              case NN.CLOSE:
                return this.handleClose(mW);
              case NN.HANDSHAKE:
                return this.handleHandshake();
              case NN.FRAME:
                return this.handleFrame(mW);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = WW, this.configuration = null !== iW && void 0 !== iW ? iW : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = DO.DESKTOP, this.guildId = null, void(this.channelId = null);
        const mW = new URLSearchParams(this._getSearch()),
          EW = mW.get("frame_id");
        if (!EW) throw new Error("frame_id query param is not defined");
        this.frameId = EW;
        const NW = mW.get("instance_id");
        if (!NW) throw new Error("instance_id query param is not defined");
        this.instanceId = NW;
        const PW = mW.get("platform");
        if (!PW) throw new Error("platform query param is not defined");
        if (PW !== DO.DESKTOP && PW !== DO.MOBILE) throw new Error(`Invalid query param "platform" of "${PW}". Valid values are "${DO.DESKTOP}" or "${DO.MOBILE}"`);
        this.platform = PW, this.guildId = mW.get("guild_id"), this.channelId = mW.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var WW;
          return [null !== (WW = window.parent.opener) && void 0 !== WW ? WW : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(WW, iW) {
        var OW;
        window.removeEventListener("message", this.handleMessage);
        const mW = WN();
        null === (OW = this.source) || void 0 === OW || OW.postMessage([NN.CLOSE, {
          code: WW,
          message: iW,
          nonce: mW
        }], this.sourceOrigin)
      }
      async subscribe(WW, iW) {
        for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
        const [NW] = mW, PW = this.eventBus.listenerCount(WW), LW = this.eventBus.on(WW, iW);
        return Object.values(Dm).includes(WW) && WW !== Dm.READY && 0 === PW && await this.sendCommand({
          cmd: zO.SUBSCRIBE,
          args: NW,
          evt: WW
        }), LW
      }
      async unsubscribe(WW, iW) {
        for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
        const [NW] = mW;
        return WW !== Dm.READY && 1 === this.eventBus.listenerCount(WW) && await this.sendCommand({
          cmd: zO.UNSUBSCRIBE,
          evt: WW,
          args: NW
        }), this.eventBus.off(WW, iW)
      }
      async ready() {
        this.isReady || await new Promise((WW => {
          this.eventBus.once(Dm.READY, WW)
        }))
      }
      handshake() {
        var WW;
        null === (WW = this.source) || void 0 === WW || WW.postMessage([NN.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Dm.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const WW = (WW, iW) => {
          this.commands.captureLog({
            level: WW,
            message: iW
          })
        };
        EN.forEach((iW => {
          ! function(WW, iW, OW) {
            const mW = WW[iW],
              EW = WW;
            mW && (WW[iW] = function() {
              const WW = [].slice.call(arguments),
                NW = "" + WW.join(" ");
              OW(iW, NW), mW.apply(EW, WW)
            })
          }(console, iW, WW)
        }))
      }
      handleClose(WW) {
        ZE.parse(WW)
      }
      handleHandshake() {}
      handleFrame(WW) {
        var iW, OW;
        let mW;
        try {
          mW = lE(WW)
        } catch (EW) {
          return console.error("Failed to parse", WW), void console.error(EW)
        }
        if ("DISPATCH" === mW.cmd) this.eventBus.emit(mW.evt, mW.data);
        else {
          if (mW.evt === gm) {
            if (null != mW.nonce) return null === (iW = this.pendingCommands.get(mW.nonce)) || void 0 === iW || iW.reject(mW.data), void this.pendingCommands.delete(mW.nonce);
            this.eventBus.emit("error", new mN(mW.data.code, mW.data.message))
          }
          if (null == mW.nonce) return void console.error("Missing nonce", WW);
          null === (OW = this.pendingCommands.get(mW.nonce)) || void 0 === OW || OW.resolve(mW), this.pendingCommands.delete(mW.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var cN, wN = 1e9,
      tN = !0,
      ZN = "[DecimalError] ",
      xN = ZN + "Invalid argument: ",
      lN = ZN + "Exponent out of range: ",
      AN = Math.floor,
      bN = Math.pow,
      jN = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      UN = 1e7,
      kN = 9007199254740991,
      sN = AN(1286742750677284.5),
      MN = {};

    function KN(WW, iW) {
      var OW, mW, EW, NW, PW, LW, cW, wW, tW = WW.constructor,
        ZW = tW.precision;
      if (!WW.s || !iW.s) return iW.s || (iW = new tW(WW)), tN ? oN(iW, ZW) : iW;
      if (cW = WW.d, wW = iW.d, PW = WW.e, EW = iW.e, cW = cW.slice(), NW = PW - EW) {
        for (NW < 0 ? (mW = cW, NW = -NW, LW = wW.length) : (mW = wW, EW = PW, LW = cW.length), NW > (LW = (PW = Math.ceil(ZW / 7)) > LW ? PW + 1 : LW + 1) && (NW = LW, mW.length = 1), mW.reverse(); NW--;) mW.push(0);
        mW.reverse()
      }
      for ((LW = cW.length) - (NW = wW.length) < 0 && (NW = LW, mW = wW, wW = cW, cW = mW), OW = 0; NW;) OW = (cW[--NW] = cW[NW] + wW[NW] + OW) / UN | 0, cW[NW] %= UN;
      for (OW && (cW.unshift(OW), ++EW), LW = cW.length; 0 == cW[--LW];) cW.pop();
      return iW.d = cW, iW.e = EW, tN ? oN(iW, ZW) : iW
    }

    function SN(WW, iW, OW) {
      if (WW !== ~~WW || WW < iW || WW > OW) throw Error(xN + WW)
    }

    function YN(WW) {
      var iW, OW, mW, EW = WW.length - 1,
        NW = "",
        PW = WW[0];
      if (EW > 0) {
        for (NW += PW, iW = 1; iW < EW; iW++)(OW = 7 - (mW = WW[iW] + "").length) && (NW += HN(OW)), NW += mW;
        (OW = 7 - (mW = (PW = WW[iW]) + "").length) && (NW += HN(OW))
      } else if (0 === PW) return "0";
      for (; PW % 10 === 0;) PW /= 10;
      return NW + PW
    }
    MN.absoluteValue = MN.abs = function() {
      var WW = new this.constructor(this);
      return WW.s && (WW.s = 1), WW
    }, MN.comparedTo = MN.cmp = function(WW) {
      var iW, OW, mW, EW, NW = this;
      if (WW = new NW.constructor(WW), NW.s !== WW.s) return NW.s || -WW.s;
      if (NW.e !== WW.e) return NW.e > WW.e ^ NW.s < 0 ? 1 : -1;
      for (iW = 0, OW = (mW = NW.d.length) < (EW = WW.d.length) ? mW : EW; iW < OW; ++iW)
        if (NW.d[iW] !== WW.d[iW]) return NW.d[iW] > WW.d[iW] ^ NW.s < 0 ? 1 : -1;
      return mW === EW ? 0 : mW > EW ^ NW.s < 0 ? 1 : -1
    }, MN.decimalPlaces = MN.dp = function() {
      var WW = this,
        iW = WW.d.length - 1,
        OW = 7 * (iW - WW.e);
      if (iW = WW.d[iW])
        for (; iW % 10 == 0; iW /= 10) OW--;
      return OW < 0 ? 0 : OW
    }, MN.dividedBy = MN.div = function(WW) {
      return yN(this, new this.constructor(WW))
    }, MN.dividedToIntegerBy = MN.idiv = function(WW) {
      var iW = this.constructor;
      return oN(yN(this, new iW(WW), 0, 1), iW.precision)
    }, MN.equals = MN.eq = function(WW) {
      return !this.cmp(WW)
    }, MN.exponent = function() {
      return JN(this)
    }, MN.greaterThan = MN.gt = function(WW) {
      return this.cmp(WW) > 0
    }, MN.greaterThanOrEqualTo = MN.gte = function(WW) {
      return this.cmp(WW) >= 0
    }, MN.isInteger = MN.isint = function() {
      return this.e > this.d.length - 2
    }, MN.isNegative = MN.isneg = function() {
      return this.s < 0
    }, MN.isPositive = MN.ispos = function() {
      return this.s > 0
    }, MN.isZero = function() {
      return 0 === this.s
    }, MN.lessThan = MN.lt = function(WW) {
      return this.cmp(WW) < 0
    }, MN.lessThanOrEqualTo = MN.lte = function(WW) {
      return this.cmp(WW) < 1
    }, MN.logarithm = MN.log = function(WW) {
      var iW, OW = this,
        mW = OW.constructor,
        EW = mW.precision,
        NW = EW + 5;
      if (void 0 === WW) WW = new mW(10);
      else if ((WW = new mW(WW)).s < 1 || WW.eq(cN)) throw Error(ZN + "NaN");
      if (OW.s < 1) throw Error(ZN + (OW.s ? "NaN" : "-Infinity"));
      return OW.eq(cN) ? new mW(0) : (tN = !1, iW = yN(nN(OW, NW), nN(WW, NW), NW), tN = !0, oN(iW, EW))
    }, MN.minus = MN.sub = function(WW) {
      var iW = this;
      return WW = new iW.constructor(WW), iW.s == WW.s ? dN(iW, WW) : KN(iW, (WW.s = -WW.s, WW))
    }, MN.modulo = MN.mod = function(WW) {
      var iW, OW = this,
        mW = OW.constructor,
        EW = mW.precision;
      if (!(WW = new mW(WW)).s) throw Error(ZN + "NaN");
      return OW.s ? (tN = !1, iW = yN(OW, WW, 0, 1).times(WW), tN = !0, OW.minus(iW)) : oN(new mW(OW), EW)
    }, MN.naturalExponential = MN.exp = function() {
      return TN(this)
    }, MN.naturalLogarithm = MN.ln = function() {
      return nN(this)
    }, MN.negated = MN.neg = function() {
      var WW = new this.constructor(this);
      return WW.s = -WW.s || 0, WW
    }, MN.plus = MN.add = function(WW) {
      var iW = this;
      return WW = new iW.constructor(WW), iW.s == WW.s ? KN(iW, WW) : dN(iW, (WW.s = -WW.s, WW))
    }, MN.precision = MN.sd = function(WW) {
      var iW, OW, mW, EW = this;
      if (void 0 !== WW && WW !== !!WW && 1 !== WW && 0 !== WW) throw Error(xN + WW);
      if (iW = JN(EW) + 1, OW = 7 * (mW = EW.d.length - 1) + 1, mW = EW.d[mW]) {
        for (; mW % 10 == 0; mW /= 10) OW--;
        for (mW = EW.d[0]; mW >= 10; mW /= 10) OW++
      }
      return WW && iW > OW ? iW : OW
    }, MN.squareRoot = MN.sqrt = function() {
      var WW, iW, OW, mW, EW, NW, PW, LW = this,
        cW = LW.constructor;
      if (LW.s < 1) {
        if (!LW.s) return new cW(0);
        throw Error(ZN + "NaN")
      }
      for (WW = JN(LW), tN = !1, 0 == (EW = Math.sqrt(+LW)) || EW == 1 / 0 ? (((iW = YN(LW.d)).length + WW) % 2 == 0 && (iW += "0"), EW = Math.sqrt(iW), WW = AN((WW + 1) / 2) - (WW < 0 || WW % 2), mW = new cW(iW = EW == 1 / 0 ? "1e" + WW : (iW = EW.toExponential()).slice(0, iW.indexOf("e") + 1) + WW)) : mW = new cW(EW.toString()), EW = PW = (OW = cW.precision) + 3;;)
        if (mW = (NW = mW).plus(yN(LW, NW, PW + 2)).times(.5), YN(NW.d).slice(0, PW) === (iW = YN(mW.d)).slice(0, PW)) {
          if (iW = iW.slice(PW - 3, PW + 1), EW == PW && "4999" == iW) {
            if (oN(NW, OW + 1, 0), NW.times(NW).eq(LW)) {
              mW = NW;
              break
            }
          } else if ("9999" != iW) break;
          PW += 4
        } return tN = !0, oN(mW, OW)
    }, MN.times = MN.mul = function(WW) {
      var iW, OW, mW, EW, NW, PW, LW, cW, wW, tW = this,
        ZW = tW.constructor,
        xW = tW.d,
        lW = (WW = new ZW(WW)).d;
      if (!tW.s || !WW.s) return new ZW(0);
      for (WW.s *= tW.s, OW = tW.e + WW.e, (cW = xW.length) < (wW = lW.length) && (NW = xW, xW = lW, lW = NW, PW = cW, cW = wW, wW = PW), NW = [], mW = PW = cW + wW; mW--;) NW.push(0);
      for (mW = wW; --mW >= 0;) {
        for (iW = 0, EW = cW + mW; EW > mW;) LW = NW[EW] + lW[mW] * xW[EW - mW - 1] + iW, NW[EW--] = LW % UN | 0, iW = LW / UN | 0;
        NW[EW] = (NW[EW] + iW) % UN | 0
      }
      for (; !NW[--PW];) NW.pop();
      return iW ? ++OW : NW.shift(), WW.d = NW, WW.e = OW, tN ? oN(WW, ZW.precision) : WW
    }, MN.toDecimalPlaces = MN.todp = function(WW, iW) {
      var OW = this,
        mW = OW.constructor;
      return OW = new mW(OW), void 0 === WW ? OW : (SN(WW, 0, wN), void 0 === iW ? iW = mW.rounding : SN(iW, 0, 8), oN(OW, WW + JN(OW) + 1, iW))
    }, MN.toExponential = function(WW, iW) {
      var OW, mW = this,
        EW = mW.constructor;
      return void 0 === WW ? OW = eN(mW, !0) : (SN(WW, 0, wN), void 0 === iW ? iW = EW.rounding : SN(iW, 0, 8), OW = eN(mW = oN(new EW(mW), WW + 1, iW), !0, WW + 1)), OW
    }, MN.toFixed = function(WW, iW) {
      var OW, mW, EW = this,
        NW = EW.constructor;
      return void 0 === WW ? eN(EW) : (SN(WW, 0, wN), void 0 === iW ? iW = NW.rounding : SN(iW, 0, 8), OW = eN((mW = oN(new NW(EW), WW + JN(EW) + 1, iW)).abs(), !1, WW + JN(mW) + 1), EW.isneg() && !EW.isZero() ? "-" + OW : OW)
    }, MN.toInteger = MN.toint = function() {
      var WW = this,
        iW = WW.constructor;
      return oN(new iW(WW), JN(WW) + 1, iW.rounding)
    }, MN.toNumber = function() {
      return +this
    }, MN.toPower = MN.pow = function(WW) {
      var iW, OW, mW, EW, NW, PW, LW = this,
        cW = LW.constructor,
        wW = +(WW = new cW(WW));
      if (!WW.s) return new cW(cN);
      if (!(LW = new cW(LW)).s) {
        if (WW.s < 1) throw Error(ZN + "Infinity");
        return LW
      }
      if (LW.eq(cN)) return LW;
      if (mW = cW.precision, WW.eq(cN)) return oN(LW, mW);
      if (PW = (iW = WW.e) >= (OW = WW.d.length - 1), NW = LW.s, PW) {
        if ((OW = wW < 0 ? -wW : wW) <= kN) {
          for (EW = new cW(cN), iW = Math.ceil(mW / 7 + 4), tN = !1; OW % 2 && vN((EW = EW.times(LW)).d, iW), 0 !== (OW = AN(OW / 2));) vN((LW = LW.times(LW)).d, iW);
          return tN = !0, WW.s < 0 ? new cW(cN).div(EW) : oN(EW, mW)
        }
      } else if (NW < 0) throw Error(ZN + "NaN");
      return NW = NW < 0 && 1 & WW.d[Math.max(iW, OW)] ? -1 : 1, LW.s = 1, tN = !1, EW = WW.times(nN(LW, mW + 12)), tN = !0, (EW = TN(EW)).s = NW, EW
    }, MN.toPrecision = function(WW, iW) {
      var OW, mW, EW = this,
        NW = EW.constructor;
      return void 0 === WW ? mW = eN(EW, (OW = JN(EW)) <= NW.toExpNeg || OW >= NW.toExpPos) : (SN(WW, 1, wN), void 0 === iW ? iW = NW.rounding : SN(iW, 0, 8), mW = eN(EW = oN(new NW(EW), WW, iW), WW <= (OW = JN(EW)) || OW <= NW.toExpNeg, WW)), mW
    }, MN.toSignificantDigits = MN.tosd = function(WW, iW) {
      var OW = this.constructor;
      return void 0 === WW ? (WW = OW.precision, iW = OW.rounding) : (SN(WW, 1, wN), void 0 === iW ? iW = OW.rounding : SN(iW, 0, 8)), oN(new OW(this), WW, iW)
    }, MN.toString = MN.valueOf = MN.val = MN.toJSON = MN[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var WW = this,
        iW = JN(WW),
        OW = WW.constructor;
      return eN(WW, iW <= OW.toExpNeg || iW >= OW.toExpPos)
    };
    var yN = function() {
      function WW(WW, iW) {
        var OW, mW = 0,
          EW = WW.length;
        for (WW = WW.slice(); EW--;) OW = WW[EW] * iW + mW, WW[EW] = OW % UN | 0, mW = OW / UN | 0;
        return mW && WW.unshift(mW), WW
      }

      function iW(WW, iW, OW, mW) {
        var EW, NW;
        if (OW != mW) NW = OW > mW ? 1 : -1;
        else
          for (EW = NW = 0; EW < OW; EW++)
            if (WW[EW] != iW[EW]) {
              NW = WW[EW] > iW[EW] ? 1 : -1;
              break
            } return NW
      }

      function OW(WW, iW, OW) {
        for (var mW = 0; OW--;) WW[OW] -= mW, mW = WW[OW] < iW[OW] ? 1 : 0, WW[OW] = mW * UN + WW[OW] - iW[OW];
        for (; !WW[0] && WW.length > 1;) WW.shift()
      }
      return function(mW, EW, NW, PW) {
        var LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, TW = mW.constructor,
          JW = mW.s == EW.s ? 1 : -1,
          hW = mW.d,
          HW = EW.d;
        if (!mW.s) return new TW(mW);
        if (!EW.s) throw Error(ZN + "Division by zero");
        for (cW = mW.e - EW.e, YW = HW.length, KW = hW.length, AW = (lW = new TW(JW)).d = [], wW = 0; HW[wW] == (hW[wW] || 0);) ++wW;
        if (HW[wW] > (hW[wW] || 0) && --cW, (kW = null == NW ? NW = TW.precision : PW ? NW + (JN(mW) - JN(EW)) + 1 : NW) < 0) return new TW(0);
        if (kW = kW / 7 + 2 | 0, wW = 0, 1 == YW)
          for (tW = 0, HW = HW[0], kW++;
            (wW < KW || tW) && kW--; wW++) sW = tW * UN + (hW[wW] || 0), AW[wW] = sW / HW | 0, tW = sW % HW | 0;
        else {
          for ((tW = UN / (HW[0] + 1) | 0) > 1 && (HW = WW(HW, tW), hW = WW(hW, tW), YW = HW.length, KW = hW.length), MW = YW, jW = (bW = hW.slice(0, YW)).length; jW < YW;) bW[jW++] = 0;
          (yW = HW.slice()).unshift(0), SW = HW[0], HW[1] >= UN / 2 && ++SW;
          do {
            tW = 0, (LW = iW(HW, bW, YW, jW)) < 0 ? (UW = bW[0], YW != jW && (UW = UW * UN + (bW[1] || 0)), (tW = UW / SW | 0) > 1 ? (tW >= UN && (tW = UN - 1), 1 == (LW = iW(ZW = WW(HW, tW), bW, xW = ZW.length, jW = bW.length)) && (tW--, OW(ZW, YW < xW ? yW : HW, xW))) : (0 == tW && (LW = tW = 1), ZW = HW.slice()), (xW = ZW.length) < jW && ZW.unshift(0), OW(bW, ZW, jW), -1 == LW && (LW = iW(HW, bW, YW, jW = bW.length)) < 1 && (tW++, OW(bW, YW < jW ? yW : HW, jW)), jW = bW.length) : 0 === LW && (tW++, bW = [0]), AW[wW++] = tW, LW && bW[0] ? bW[jW++] = hW[MW] || 0 : (bW = [hW[MW]], jW = 1)
          } while ((MW++ < KW || void 0 !== bW[0]) && kW--)
        }
        return AW[0] || AW.shift(), lW.e = cW, oN(lW, PW ? NW + JN(lW) + 1 : NW)
      }
    }();

    function TN(WW, iW) {
      var OW, mW, EW, NW, PW, LW = 0,
        cW = 0,
        wW = WW.constructor,
        tW = wW.precision;
      if (JN(WW) > 16) throw Error(lN + JN(WW));
      if (!WW.s) return new wW(cN);
      for (null == iW ? (tN = !1, PW = tW) : PW = iW, NW = new wW(.03125); WW.abs().gte(.1);) WW = WW.times(NW), cW += 5;
      for (PW += Math.log(bN(2, cW)) / Math.LN10 * 2 + 5 | 0, OW = mW = EW = new wW(cN), wW.precision = PW;;) {
        if (mW = oN(mW.times(WW), PW), OW = OW.times(++LW), YN((NW = EW.plus(yN(mW, OW, PW))).d).slice(0, PW) === YN(EW.d).slice(0, PW)) {
          for (; cW--;) EW = oN(EW.times(EW), PW);
          return wW.precision = tW, null == iW ? (tN = !0, oN(EW, tW)) : EW
        }
        EW = NW
      }
    }

    function JN(WW) {
      for (var iW = 7 * WW.e, OW = WW.d[0]; OW >= 10; OW /= 10) iW++;
      return iW
    }

    function hN(WW, iW, OW) {
      if (iW > WW.LN10.sd()) throw tN = !0, OW && (WW.precision = OW), Error(ZN + "LN10 precision limit exceeded");
      return oN(new WW(WW.LN10), iW)
    }

    function HN(WW) {
      for (var iW = ""; WW--;) iW += "0";
      return iW
    }

    function nN(WW, iW) {
      var OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW = 1,
        xW = WW,
        lW = xW.d,
        AW = xW.constructor,
        bW = AW.precision;
      if (xW.s < 1) throw Error(ZN + (xW.s ? "NaN" : "-Infinity"));
      if (xW.eq(cN)) return new AW(0);
      if (null == iW ? (tN = !1, wW = bW) : wW = iW, xW.eq(10)) return null == iW && (tN = !0), hN(AW, wW);
      if (wW += 10, AW.precision = wW, mW = (OW = YN(lW)).charAt(0), NW = JN(xW), !(Math.abs(NW) < 15e14)) return cW = hN(AW, wW + 2, bW).times(NW + ""), xW = nN(new AW(mW + "." + OW.slice(1)), wW - 10).plus(cW), AW.precision = bW, null == iW ? (tN = !0, oN(xW, bW)) : xW;
      for (; mW < 7 && 1 != mW || 1 == mW && OW.charAt(1) > 3;) mW = (OW = YN((xW = xW.times(WW)).d)).charAt(0), ZW++;
      for (NW = JN(xW), mW > 1 ? (xW = new AW("0." + OW), NW++) : xW = new AW(mW + "." + OW.slice(1)), LW = PW = xW = yN(xW.minus(cN), xW.plus(cN), wW), tW = oN(xW.times(xW), wW), EW = 3;;) {
        if (PW = oN(PW.times(tW), wW), YN((cW = LW.plus(yN(PW, new AW(EW), wW))).d).slice(0, wW) === YN(LW.d).slice(0, wW)) return LW = LW.times(2), 0 !== NW && (LW = LW.plus(hN(AW, wW + 2, bW).times(NW + ""))), LW = yN(LW, new AW(ZW), wW), AW.precision = bW, null == iW ? (tN = !0, oN(LW, bW)) : LW;
        LW = cW, EW += 2
      }
    }

    function uN(WW, iW) {
      var OW, mW, EW;
      for ((OW = iW.indexOf(".")) > -1 && (iW = iW.replace(".", "")), (mW = iW.search(/e/i)) > 0 ? (OW < 0 && (OW = mW), OW += +iW.slice(mW + 1), iW = iW.substring(0, mW)) : OW < 0 && (OW = iW.length), mW = 0; 48 === iW.charCodeAt(mW);) ++mW;
      for (EW = iW.length; 48 === iW.charCodeAt(EW - 1);) --EW;
      if (iW = iW.slice(mW, EW)) {
        if (EW -= mW, OW = OW - mW - 1, WW.e = AN(OW / 7), WW.d = [], mW = (OW + 1) % 7, OW < 0 && (mW += 7), mW < EW) {
          for (mW && WW.d.push(+iW.slice(0, mW)), EW -= 7; mW < EW;) WW.d.push(+iW.slice(mW, mW += 7));
          mW = 7 - (iW = iW.slice(mW)).length
        } else mW -= EW;
        for (; mW--;) iW += "0";
        if (WW.d.push(+iW), tN && (WW.e > sN || WW.e < -sN)) throw Error(lN + OW)
      } else WW.s = 0, WW.e = 0, WW.d = [0];
      return WW
    }

    function oN(WW, iW, OW) {
      var mW, EW, NW, PW, LW, cW, wW, tW, ZW = WW.d;
      for (PW = 1, NW = ZW[0]; NW >= 10; NW /= 10) PW++;
      if ((mW = iW - PW) < 0) mW += 7, EW = iW, wW = ZW[tW = 0];
      else {
        if ((tW = Math.ceil((mW + 1) / 7)) >= (NW = ZW.length)) return WW;
        for (wW = NW = ZW[tW], PW = 1; NW >= 10; NW /= 10) PW++;
        EW = (mW %= 7) - 7 + PW
      }
      if (void 0 !== OW && (LW = wW / (NW = bN(10, PW - EW - 1)) % 10 | 0, cW = iW < 0 || void 0 !== ZW[tW + 1] || wW % NW, cW = OW < 4 ? (LW || cW) && (0 == OW || OW == (WW.s < 0 ? 3 : 2)) : LW > 5 || 5 == LW && (4 == OW || cW || 6 == OW && (mW > 0 ? EW > 0 ? wW / bN(10, PW - EW) : 0 : ZW[tW - 1]) % 10 & 1 || OW == (WW.s < 0 ? 8 : 7))), iW < 1 || !ZW[0]) return cW ? (NW = JN(WW), ZW.length = 1, iW = iW - NW - 1, ZW[0] = bN(10, (7 - iW % 7) % 7), WW.e = AN(-iW / 7) || 0) : (ZW.length = 1, ZW[0] = WW.e = WW.s = 0), WW;
      if (0 == mW ? (ZW.length = tW, NW = 1, tW--) : (ZW.length = tW + 1, NW = bN(10, 7 - mW), ZW[tW] = EW > 0 ? (wW / bN(10, PW - EW) % bN(10, EW) | 0) * NW : 0), cW)
        for (;;) {
          if (0 == tW) {
            (ZW[0] += NW) == UN && (ZW[0] = 1, ++WW.e);
            break
          }
          if (ZW[tW] += NW, ZW[tW] != UN) break;
          ZW[tW--] = 0, NW = 1
        }
      for (mW = ZW.length; 0 === ZW[--mW];) ZW.pop();
      if (tN && (WW.e > sN || WW.e < -sN)) throw Error(lN + JN(WW));
      return WW
    }

    function dN(WW, iW) {
      var OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW = WW.constructor,
        lW = xW.precision;
      if (!WW.s || !iW.s) return iW.s ? iW.s = -iW.s : iW = new xW(WW), tN ? oN(iW, lW) : iW;
      if (cW = WW.d, ZW = iW.d, mW = iW.e, wW = WW.e, cW = cW.slice(), PW = wW - mW) {
        for ((tW = PW < 0) ? (OW = cW, PW = -PW, LW = ZW.length) : (OW = ZW, mW = wW, LW = cW.length), PW > (EW = Math.max(Math.ceil(lW / 7), LW) + 2) && (PW = EW, OW.length = 1), OW.reverse(), EW = PW; EW--;) OW.push(0);
        OW.reverse()
      } else {
        for ((tW = (EW = cW.length) < (LW = ZW.length)) && (LW = EW), EW = 0; EW < LW; EW++)
          if (cW[EW] != ZW[EW]) {
            tW = cW[EW] < ZW[EW];
            break
          } PW = 0
      }
      for (tW && (OW = cW, cW = ZW, ZW = OW, iW.s = -iW.s), LW = cW.length, EW = ZW.length - LW; EW > 0; --EW) cW[LW++] = 0;
      for (EW = ZW.length; EW > PW;) {
        if (cW[--EW] < ZW[EW]) {
          for (NW = EW; NW && 0 === cW[--NW];) cW[NW] = UN - 1;
          --cW[NW], cW[EW] += UN
        }
        cW[EW] -= ZW[EW]
      }
      for (; 0 === cW[--LW];) cW.pop();
      for (; 0 === cW[0]; cW.shift()) --mW;
      return cW[0] ? (iW.d = cW, iW.e = mW, tN ? oN(iW, lW) : iW) : new xW(0)
    }

    function eN(WW, iW, OW) {
      var mW, EW = JN(WW),
        NW = YN(WW.d),
        PW = NW.length;
      return iW ? (OW && (mW = OW - PW) > 0 ? NW = NW.charAt(0) + "." + NW.slice(1) + HN(mW) : PW > 1 && (NW = NW.charAt(0) + "." + NW.slice(1)), NW = NW + (EW < 0 ? "e" : "e+") + EW) : EW < 0 ? (NW = "0." + HN(-EW - 1) + NW, OW && (mW = OW - PW) > 0 && (NW += HN(mW))) : EW >= PW ? (NW += HN(EW + 1 - PW), OW && (mW = OW - EW - 1) > 0 && (NW = NW + "." + HN(mW))) : ((mW = EW + 1) < PW && (NW = NW.slice(0, mW) + "." + NW.slice(mW)), OW && (mW = OW - PW) > 0 && (EW + 1 === PW && (NW += "."), NW += HN(mW))), WW.s < 0 ? "-" + NW : NW
    }

    function vN(WW, iW) {
      if (WW.length > iW) return WW.length = iW, !0
    }

    function gN(WW) {
      if (!WW || "object" !== typeof WW) throw Error(ZN + "Object expected");
      var iW, OW, mW, EW = ["precision", 1, wN, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (iW = 0; iW < EW.length; iW += 3)
        if (void 0 !== (mW = WW[OW = EW[iW]])) {
          if (!(AN(mW) === mW && mW >= EW[iW + 1] && mW <= EW[iW + 2])) throw Error(xN + OW + ": " + mW);
          this[OW] = mW
        } if (void 0 !== (mW = WW[OW = "LN10"])) {
        if (mW != Math.LN10) throw Error(xN + OW + ": " + mW);
        this[OW] = new this(mW)
      }
      return this
    }
    var DN = function WW(iW) {
      var OW, mW, EW;

      function NW(WW) {
        var iW = this;
        if (!(iW instanceof NW)) return new NW(WW);
        if (iW.constructor = NW, WW instanceof NW) return iW.s = WW.s, iW.e = WW.e, void(iW.d = (WW = WW.d) ? WW.slice() : WW);
        if ("number" === typeof WW) {
          if (0 * WW !== 0) throw Error(xN + WW);
          if (WW > 0) iW.s = 1;
          else {
            if (!(WW < 0)) return iW.s = 0, iW.e = 0, void(iW.d = [0]);
            WW = -WW, iW.s = -1
          }
          return WW === ~~WW && WW < 1e7 ? (iW.e = 0, void(iW.d = [WW])) : uN(iW, WW.toString())
        }
        if ("string" !== typeof WW) throw Error(xN + WW);
        if (45 === WW.charCodeAt(0) ? (WW = WW.slice(1), iW.s = -1) : iW.s = 1, !jN.test(WW)) throw Error(xN + WW);
        uN(iW, WW)
      }
      if (NW.prototype = MN, NW.ROUND_UP = 0, NW.ROUND_DOWN = 1, NW.ROUND_CEIL = 2, NW.ROUND_FLOOR = 3, NW.ROUND_HALF_UP = 4, NW.ROUND_HALF_DOWN = 5, NW.ROUND_HALF_EVEN = 6, NW.ROUND_HALF_CEIL = 7, NW.ROUND_HALF_FLOOR = 8, NW.clone = WW, NW.config = NW.set = gN, void 0 === iW && (iW = {}), iW)
        for (EW = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], OW = 0; OW < EW.length;) iW.hasOwnProperty(mW = EW[OW++]) || (iW[mW] = this[mW]);
      return NW.config(iW), NW
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    cN = new DN(1);
    var VN;
    ! function(WW) {
      WW.AED = "aed", WW.AFN = "afn", WW.ALL = "all", WW.AMD = "amd", WW.ANG = "ang", WW.AOA = "aoa", WW.ARS = "ars", WW.AUD = "aud", WW.AWG = "awg", WW.AZN = "azn", WW.BAM = "bam", WW.BBD = "bbd", WW.BDT = "bdt", WW.BGN = "bgn", WW.BHD = "bhd", WW.BIF = "bif", WW.BMD = "bmd", WW.BND = "bnd", WW.BOB = "bob", WW.BOV = "bov", WW.BRL = "brl", WW.BSD = "bsd", WW.BTN = "btn", WW.BWP = "bwp", WW.BYN = "byn", WW.BYR = "byr", WW.BZD = "bzd", WW.CAD = "cad", WW.CDF = "cdf", WW.CHE = "che", WW.CHF = "chf", WW.CHW = "chw", WW.CLF = "clf", WW.CLP = "clp", WW.CNY = "cny", WW.COP = "cop", WW.COU = "cou", WW.CRC = "crc", WW.CUC = "cuc", WW.CUP = "cup", WW.CVE = "cve", WW.CZK = "czk", WW.DJF = "djf", WW.DKK = "dkk", WW.DOP = "dop", WW.DZD = "dzd", WW.EGP = "egp", WW.ERN = "ern", WW.ETB = "etb", WW.EUR = "eur", WW.FJD = "fjd", WW.FKP = "fkp", WW.GBP = "gbp", WW.GEL = "gel", WW.GHS = "ghs", WW.GIP = "gip", WW.GMD = "gmd", WW.GNF = "gnf", WW.GTQ = "gtq", WW.GYD = "gyd", WW.HKD = "hkd", WW.HNL = "hnl", WW.HRK = "hrk", WW.HTG = "htg", WW.HUF = "huf", WW.IDR = "idr", WW.ILS = "ils", WW.INR = "inr", WW.IQD = "iqd", WW.IRR = "irr", WW.ISK = "isk", WW.JMD = "jmd", WW.JOD = "jod", WW.JPY = "jpy", WW.KES = "kes", WW.KGS = "kgs", WW.KHR = "khr", WW.KMF = "kmf", WW.KPW = "kpw", WW.KRW = "krw", WW.KWD = "kwd", WW.KYD = "kyd", WW.KZT = "kzt", WW.LAK = "lak", WW.LBP = "lbp", WW.LKR = "lkr", WW.LRD = "lrd", WW.LSL = "lsl", WW.LTL = "ltl", WW.LVL = "lvl", WW.LYD = "lyd", WW.MAD = "mad", WW.MDL = "mdl", WW.MGA = "mga", WW.MKD = "mkd", WW.MMK = "mmk", WW.MNT = "mnt", WW.MOP = "mop", WW.MRO = "mro", WW.MUR = "mur", WW.MVR = "mvr", WW.MWK = "mwk", WW.MXN = "mxn", WW.MXV = "mxv", WW.MYR = "myr", WW.MZN = "mzn", WW.NAD = "nad", WW.NGN = "ngn", WW.NIO = "nio", WW.NOK = "nok", WW.NPR = "npr", WW.NZD = "nzd", WW.OMR = "omr", WW.PAB = "pab", WW.PEN = "pen", WW.PGK = "pgk", WW.PHP = "php", WW.PKR = "pkr", WW.PLN = "pln", WW.PYG = "pyg", WW.QAR = "qar", WW.RON = "ron", WW.RSD = "rsd", WW.RUB = "rub", WW.RWF = "rwf", WW.SAR = "sar", WW.SBD = "sbd", WW.SCR = "scr", WW.SDG = "sdg", WW.SEK = "sek", WW.SGD = "sgd", WW.SHP = "shp", WW.SLL = "sll", WW.SOS = "sos", WW.SRD = "srd", WW.SSP = "ssp", WW.STD = "std", WW.SVC = "svc", WW.SYP = "syp", WW.SZL = "szl", WW.THB = "thb", WW.TJS = "tjs", WW.TMT = "tmt", WW.TND = "tnd", WW.TOP = "top", WW.TRY = "try", WW.TTD = "ttd", WW.TWD = "twd", WW.TZS = "tzs", WW.UAH = "uah", WW.UGX = "ugx", WW.USD = "usd", WW.USN = "usn", WW.USS = "uss", WW.UYI = "uyi", WW.UYU = "uyu", WW.UZS = "uzs", WW.VEF = "vef", WW.VND = "vnd", WW.VUV = "vuv", WW.WST = "wst", WW.XAF = "xaf", WW.XAG = "xag", WW.XAU = "xau", WW.XBA = "xba", WW.XBB = "xbb", WW.XBC = "xbc", WW.XBD = "xbd", WW.XCD = "xcd", WW.XDR = "xdr", WW.XFU = "xfu", WW.XOF = "xof", WW.XPD = "xpd", WW.XPF = "xpf", WW.XPT = "xpt", WW.XSU = "xsu", WW.XTS = "xts", WW.XUA = "xua", WW.YER = "yer", WW.ZAR = "zar", WW.ZMW = "zmw", WW.ZWL = "zwl"
    }(VN || (VN = {}));
    VN.AED, VN.AFN, VN.ALL, VN.AMD, VN.ANG, VN.AOA, VN.ARS, VN.AUD, VN.AWG, VN.AZN, VN.BAM, VN.BBD, VN.BDT, VN.BGN, VN.BHD, VN.BIF, VN.BMD, VN.BND, VN.BOB, VN.BOV, VN.BRL, VN.BSD, VN.BTN, VN.BWP, VN.BYR, VN.BYN, VN.BZD, VN.CAD, VN.CDF, VN.CHE, VN.CHF, VN.CHW, VN.CLF, VN.CLP, VN.CNY, VN.COP, VN.COU, VN.CRC, VN.CUC, VN.CUP, VN.CVE, VN.CZK, VN.DJF, VN.DKK, VN.DOP, VN.DZD, VN.EGP, VN.ERN, VN.ETB, VN.EUR, VN.FJD, VN.FKP, VN.GBP, VN.GEL, VN.GHS, VN.GIP, VN.GMD, VN.GNF, VN.GTQ, VN.GYD, VN.HKD, VN.HNL, VN.HRK, VN.HTG, VN.HUF, VN.IDR, VN.ILS, VN.INR, VN.IQD, VN.IRR, VN.ISK, VN.JMD, VN.JOD, VN.JPY, VN.KES, VN.KGS, VN.KHR, VN.KMF, VN.KPW, VN.KRW, VN.KWD, VN.KYD, VN.KZT, VN.LAK, VN.LBP, VN.LKR, VN.LRD, VN.LSL, VN.LTL, VN.LVL, VN.LYD, VN.MAD, VN.MDL, VN.MGA, VN.MKD, VN.MMK, VN.MNT, VN.MOP, VN.MRO, VN.MUR, VN.MVR, VN.MWK, VN.MXN, VN.MXV, VN.MYR, VN.MZN, VN.NAD, VN.NGN, VN.NIO, VN.NOK, VN.NPR, VN.NZD, VN.OMR, VN.PAB, VN.PEN, VN.PGK, VN.PHP, VN.PKR, VN.PLN, VN.PYG, VN.QAR, VN.RON, VN.RSD, VN.RUB, VN.RWF, VN.SAR, VN.SBD, VN.SCR, VN.SDG, VN.SEK, VN.SGD, VN.SHP, VN.SLL, VN.SOS, VN.SRD, VN.SSP, VN.STD, VN.SVC, VN.SYP, VN.SZL, VN.THB, VN.TJS, VN.TMT, VN.TND, VN.TOP, VN.TRY, VN.TTD, VN.TWD, VN.TZS, VN.UAH, VN.UGX, VN.USD, VN.USN, VN.USS, VN.UYI, VN.UYU, VN.UZS, VN.VEF, VN.VND, VN.VUV, VN.WST, VN.XAF, VN.XAG, VN.XAU, VN.XBA, VN.XBB, VN.XBC, VN.XBD, VN.XCD, VN.XDR, VN.XFU, VN.XOF, VN.XPD, VN.XPF, VN.XPT, VN.XSU, VN.XTS, VN.XUA, VN.YER, VN.ZAR, VN.ZMW, VN.ZWL;
    var pN = {
      exports: {}
    };
    ! function(WW, iW) {
      var OW = "__lodash_hash_undefined__",
        mW = 9007199254740991,
        NW = "[object Arguments]",
        PW = "[object Array]",
        LW = "[object Boolean]",
        cW = "[object Date]",
        wW = "[object Error]",
        tW = "[object Function]",
        ZW = "[object Map]",
        xW = "[object Number]",
        lW = "[object Object]",
        AW = "[object Promise]",
        bW = "[object RegExp]",
        jW = "[object Set]",
        UW = "[object String]",
        kW = "[object Symbol]",
        sW = "[object WeakMap]",
        MW = "[object ArrayBuffer]",
        KW = "[object DataView]",
        SW = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        YW = /^\w*$/,
        yW = /^\./,
        TW = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        JW = /\\(\\)?/g,
        hW = /^\[object .+?Constructor\]$/,
        HW = /^(?:0|[1-9]\d*)$/,
        nW = {};
      nW["[object Float32Array]"] = nW["[object Float64Array]"] = nW["[object Int8Array]"] = nW["[object Int16Array]"] = nW["[object Int32Array]"] = nW["[object Uint8Array]"] = nW["[object Uint8ClampedArray]"] = nW["[object Uint16Array]"] = nW["[object Uint32Array]"] = !0, nW[NW] = nW[PW] = nW[MW] = nW[LW] = nW[KW] = nW[cW] = nW[wW] = nW[tW] = nW[ZW] = nW[xW] = nW[lW] = nW[bW] = nW[jW] = nW[UW] = nW[sW] = !1;
      var uW = "object" == typeof EW && EW && EW.Object === Object && EW,
        oW = "object" == typeof self && self && self.Object === Object && self,
        dW = uW || oW || Function("return this")(),
        eW = iW && !iW.nodeType && iW,
        vW = eW && WW && !WW.nodeType && WW,
        gW = vW && vW.exports === eW && uW.process,
        DW = function() {
          try {
            return gW && gW.binding("util")
          } catch (WW) {}
        }(),
        VW = DW && DW.isTypedArray;

      function pW(WW, iW) {
        for (var OW = -1, mW = WW ? WW.length : 0; ++OW < mW && !1 !== iW(WW[OW], OW, WW););
        return WW
      }

      function fW(WW, iW) {
        for (var OW = -1, mW = WW ? WW.length : 0; ++OW < mW;)
          if (iW(WW[OW], OW, WW)) return !0;
        return !1
      }

      function CW(WW) {
        var iW = !1;
        if (null != WW && "function" != typeof WW.toString) try {
          iW = !!(WW + "")
        } catch (OW) {}
        return iW
      }

      function XW(WW) {
        var iW = -1,
          OW = Array(WW.size);
        return WW.forEach((function(WW, mW) {
          OW[++iW] = [mW, WW]
        })), OW
      }

      function BW(WW, iW) {
        return function(OW) {
          return WW(iW(OW))
        }
      }

      function qW(WW) {
        var iW = -1,
          OW = Array(WW.size);
        return WW.forEach((function(WW) {
          OW[++iW] = WW
        })), OW
      }
      var RW = Array.prototype,
        GW = Function.prototype,
        IW = Object.prototype,
        aW = dW["__core-js_shared__"],
        rW = function() {
          var WW = /[^.]+$/.exec(aW && aW.keys && aW.keys.IE_PROTO || "");
          return WW ? "Symbol(src)_1." + WW : ""
        }(),
        zW = GW.toString,
        FW = IW.hasOwnProperty,
        QW = IW.toString,
        Wi = RegExp("^" + zW.call(FW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        ii = dW.Symbol,
        Oi = dW.Uint8Array,
        mi = BW(Object.getPrototypeOf, Object),
        Ei = Object.create,
        Ni = IW.propertyIsEnumerable,
        Pi = RW.splice,
        Li = BW(Object.keys, Object),
        ci = qi(dW, "DataView"),
        wi = qi(dW, "Map"),
        ti = qi(dW, "Promise"),
        Zi = qi(dW, "Set"),
        xi = qi(dW, "WeakMap"),
        li = qi(Object, "create"),
        Ai = Qi(ci),
        bi = Qi(wi),
        ji = Qi(ti),
        Ui = Qi(Zi),
        ki = Qi(xi),
        si = ii ? ii.prototype : void 0,
        Mi = si ? si.valueOf : void 0,
        Ki = si ? si.toString : void 0;

      function Si(WW) {
        var iW = -1,
          OW = WW ? WW.length : 0;
        for (this.clear(); ++iW < OW;) {
          var mW = WW[iW];
          this.set(mW[0], mW[1])
        }
      }

      function Yi(WW) {
        var iW = -1,
          OW = WW ? WW.length : 0;
        for (this.clear(); ++iW < OW;) {
          var mW = WW[iW];
          this.set(mW[0], mW[1])
        }
      }

      function yi(WW) {
        var iW = -1,
          OW = WW ? WW.length : 0;
        for (this.clear(); ++iW < OW;) {
          var mW = WW[iW];
          this.set(mW[0], mW[1])
        }
      }

      function Ti(WW) {
        var iW = -1,
          OW = WW ? WW.length : 0;
        for (this.__data__ = new yi; ++iW < OW;) this.add(WW[iW])
      }

      function Ji(WW) {
        this.__data__ = new Yi(WW)
      }

      function Hi(WW, iW) {
        var OW = mO(WW) || OO(WW) ? function(WW, iW) {
            for (var OW = -1, mW = Array(WW); ++OW < WW;) mW[OW] = iW(OW);
            return mW
          }(WW.length, String) : [],
          mW = OW.length,
          EW = !!mW;
        for (var NW in WW) !iW && !FW.call(WW, NW) || EW && ("length" == NW || Gi(NW, mW)) || OW.push(NW);
        return OW
      }

      function ni(WW, iW) {
        for (var OW = WW.length; OW--;)
          if (iO(WW[OW][0], iW)) return OW;
        return -1
      }
      Si.prototype.clear = function() {
        this.__data__ = li ? li(null) : {}
      }, Si.prototype.delete = function(WW) {
        return this.has(WW) && delete this.__data__[WW]
      }, Si.prototype.get = function(WW) {
        var iW = this.__data__;
        if (li) {
          var mW = iW[WW];
          return mW === OW ? void 0 : mW
        }
        return FW.call(iW, WW) ? iW[WW] : void 0
      }, Si.prototype.has = function(WW) {
        var iW = this.__data__;
        return li ? void 0 !== iW[WW] : FW.call(iW, WW)
      }, Si.prototype.set = function(WW, iW) {
        return this.__data__[WW] = li && void 0 === iW ? OW : iW, this
      }, Yi.prototype.clear = function() {
        this.__data__ = []
      }, Yi.prototype.delete = function(WW) {
        var iW = this.__data__,
          OW = ni(iW, WW);
        return !(OW < 0) && (OW == iW.length - 1 ? iW.pop() : Pi.call(iW, OW, 1), !0)
      }, Yi.prototype.get = function(WW) {
        var iW = this.__data__,
          OW = ni(iW, WW);
        return OW < 0 ? void 0 : iW[OW][1]
      }, Yi.prototype.has = function(WW) {
        return ni(this.__data__, WW) > -1
      }, Yi.prototype.set = function(WW, iW) {
        var OW = this.__data__,
          mW = ni(OW, WW);
        return mW < 0 ? OW.push([WW, iW]) : OW[mW][1] = iW, this
      }, yi.prototype.clear = function() {
        this.__data__ = {
          hash: new Si,
          map: new(wi || Yi),
          string: new Si
        }
      }, yi.prototype.delete = function(WW) {
        return Bi(this, WW).delete(WW)
      }, yi.prototype.get = function(WW) {
        return Bi(this, WW).get(WW)
      }, yi.prototype.has = function(WW) {
        return Bi(this, WW).has(WW)
      }, yi.prototype.set = function(WW, iW) {
        return Bi(this, WW).set(WW, iW), this
      }, Ti.prototype.add = Ti.prototype.push = function(WW) {
        return this.__data__.set(WW, OW), this
      }, Ti.prototype.has = function(WW) {
        return this.__data__.has(WW)
      }, Ji.prototype.clear = function() {
        this.__data__ = new Yi
      }, Ji.prototype.delete = function(WW) {
        return this.__data__.delete(WW)
      }, Ji.prototype.get = function(WW) {
        return this.__data__.get(WW)
      }, Ji.prototype.has = function(WW) {
        return this.__data__.has(WW)
      }, Ji.prototype.set = function(WW, iW) {
        var OW = this.__data__;
        if (OW instanceof Yi) {
          var mW = OW.__data__;
          if (!wi || mW.length < 199) return mW.push([WW, iW]), this;
          OW = this.__data__ = new yi(mW)
        }
        return OW.set(WW, iW), this
      };
      var ui, oi = function(WW, iW, OW) {
        for (var mW = -1, EW = Object(WW), NW = OW(WW), PW = NW.length; PW--;) {
          var LW = NW[ui ? PW : ++mW];
          if (!1 === iW(EW[LW], LW, EW)) break
        }
        return WW
      };

      function di(WW, iW) {
        return WW && oi(WW, iW, xO)
      }

      function ei(WW, iW) {
        for (var OW = 0, mW = (iW = Ii(iW, WW) ? [iW] : Ci(iW)).length; null != WW && OW < mW;) WW = WW[Fi(iW[OW++])];
        return OW && OW == mW ? WW : void 0
      }

      function vi(WW, iW) {
        return null != WW && iW in Object(WW)
      }

      function gi(WW, iW, OW, mW, EW) {
        return WW === iW || (null == WW || null == iW || !LO(WW) && !cO(iW) ? WW !== WW && iW !== iW : function(WW, iW, OW, mW, EW, tW) {
          var AW = mO(WW),
            sW = mO(iW),
            SW = PW,
            YW = PW;
          AW || (SW = (SW = Ri(WW)) == NW ? lW : SW);
          sW || (YW = (YW = Ri(iW)) == NW ? lW : YW);
          var yW = SW == lW && !CW(WW),
            TW = YW == lW && !CW(iW),
            JW = SW == YW;
          if (JW && !yW) return tW || (tW = new Ji), AW || ZO(WW) ? Xi(WW, iW, OW, mW, EW, tW) : function(WW, iW, OW, mW, EW, NW, PW) {
            switch (OW) {
              case KW:
                if (WW.byteLength != iW.byteLength || WW.byteOffset != iW.byteOffset) return !1;
                WW = WW.buffer, iW = iW.buffer;
              case MW:
                return !(WW.byteLength != iW.byteLength || !mW(new Oi(WW), new Oi(iW)));
              case LW:
              case cW:
              case xW:
                return iO(+WW, +iW);
              case wW:
                return WW.name == iW.name && WW.message == iW.message;
              case bW:
              case UW:
                return WW == iW + "";
              case ZW:
                var tW = XW;
              case jW:
                var lW = 2 & NW;
                if (tW || (tW = qW), WW.size != iW.size && !lW) return !1;
                var AW = PW.get(WW);
                if (AW) return AW == iW;
                NW |= 1, PW.set(WW, iW);
                var sW = Xi(tW(WW), tW(iW), mW, EW, NW, PW);
                return PW.delete(WW), sW;
              case kW:
                if (Mi) return Mi.call(WW) == Mi.call(iW)
            }
            return !1
          }(WW, iW, SW, OW, mW, EW, tW);
          if (!(2 & EW)) {
            var hW = yW && FW.call(WW, "__wrapped__"),
              HW = TW && FW.call(iW, "__wrapped__");
            if (hW || HW) {
              var nW = hW ? WW.value() : WW,
                uW = HW ? iW.value() : iW;
              return tW || (tW = new Ji), OW(nW, uW, mW, EW, tW)
            }
          }
          if (!JW) return !1;
          return tW || (tW = new Ji),
            function(WW, iW, OW, mW, EW, NW) {
              var PW = 2 & EW,
                LW = xO(WW),
                cW = LW.length,
                wW = xO(iW),
                tW = wW.length;
              if (cW != tW && !PW) return !1;
              var ZW = cW;
              for (; ZW--;) {
                var xW = LW[ZW];
                if (!(PW ? xW in iW : FW.call(iW, xW))) return !1
              }
              var lW = NW.get(WW);
              if (lW && NW.get(iW)) return lW == iW;
              var AW = !0;
              NW.set(WW, iW), NW.set(iW, WW);
              var bW = PW;
              for (; ++ZW < cW;) {
                var jW = WW[xW = LW[ZW]],
                  UW = iW[xW];
                if (mW) var kW = PW ? mW(UW, jW, xW, iW, WW, NW) : mW(jW, UW, xW, WW, iW, NW);
                if (!(void 0 === kW ? jW === UW || OW(jW, UW, mW, EW, NW) : kW)) {
                  AW = !1;
                  break
                }
                bW || (bW = "constructor" == xW)
              }
              if (AW && !bW) {
                var sW = WW.constructor,
                  MW = iW.constructor;
                sW == MW || !("constructor" in WW) || !("constructor" in iW) || "function" == typeof sW && sW instanceof sW && "function" == typeof MW && MW instanceof MW || (AW = !1)
              }
              return NW.delete(WW), NW.delete(iW), AW
            }(WW, iW, OW, mW, EW, tW)
        }(WW, iW, gi, OW, mW, EW))
      }

      function Di(WW) {
        return !(!LO(WW) || (iW = WW, rW && rW in iW)) && (NO(WW) || CW(WW) ? Wi : hW).test(Qi(WW));
        var iW
      }

      function Vi(WW) {
        return "function" == typeof WW ? WW : null == WW ? lO : "object" == typeof WW ? mO(WW) ? function(WW, iW) {
          if (Ii(WW) && ai(iW)) return ri(Fi(WW), iW);
          return function(OW) {
            var mW = function(WW, iW, OW) {
              var mW = null == WW ? void 0 : ei(WW, iW);
              return void 0 === mW ? OW : mW
            }(OW, WW);
            return void 0 === mW && mW === iW ? function(WW, iW) {
              return null != WW && function(WW, iW, OW) {
                iW = Ii(iW, WW) ? [iW] : Ci(iW);
                var mW, EW = -1,
                  NW = iW.length;
                for (; ++EW < NW;) {
                  var PW = Fi(iW[EW]);
                  if (!(mW = null != WW && OW(WW, PW))) break;
                  WW = WW[PW]
                }
                if (mW) return mW;
                NW = WW ? WW.length : 0;
                return !!NW && PO(NW) && Gi(PW, NW) && (mO(WW) || OO(WW))
              }(WW, iW, vi)
            }(OW, WW) : gi(iW, mW, void 0, 3)
          }
        }(WW[0], WW[1]) : function(WW) {
          var iW = function(WW) {
            var iW = xO(WW),
              OW = iW.length;
            for (; OW--;) {
              var mW = iW[OW],
                EW = WW[mW];
              iW[OW] = [mW, EW, ai(EW)]
            }
            return iW
          }(WW);
          if (1 == iW.length && iW[0][2]) return ri(iW[0][0], iW[0][1]);
          return function(OW) {
            return OW === WW || function(WW, iW, OW, mW) {
              var EW = OW.length,
                NW = EW,
                PW = !mW;
              if (null == WW) return !NW;
              for (WW = Object(WW); EW--;) {
                var LW = OW[EW];
                if (PW && LW[2] ? LW[1] !== WW[LW[0]] : !(LW[0] in WW)) return !1
              }
              for (; ++EW < NW;) {
                var cW = (LW = OW[EW])[0],
                  wW = WW[cW],
                  tW = LW[1];
                if (PW && LW[2]) {
                  if (void 0 === wW && !(cW in WW)) return !1
                } else {
                  var ZW = new Ji;
                  if (mW) var xW = mW(wW, tW, cW, WW, iW, ZW);
                  if (!(void 0 === xW ? gi(tW, wW, mW, 3, ZW) : xW)) return !1
                }
              }
              return !0
            }(OW, WW, iW)
          }
        }(WW) : function(WW) {
          return Ii(WW) ? (iW = Fi(WW), function(WW) {
            return null == WW ? void 0 : WW[iW]
          }) : function(WW) {
            return function(iW) {
              return ei(iW, WW)
            }
          }(WW);
          var iW
        }(WW)
      }

      function fi(WW) {
        if (! function(WW) {
            var iW = WW && WW.constructor,
              OW = "function" == typeof iW && iW.prototype || IW;
            return WW === OW
          }(WW)) return Li(WW);
        var iW = [];
        for (var OW in Object(WW)) FW.call(WW, OW) && "constructor" != OW && iW.push(OW);
        return iW
      }

      function Ci(WW) {
        return mO(WW) ? WW : zi(WW)
      }

      function Xi(WW, iW, OW, mW, EW, NW) {
        var PW = 2 & EW,
          LW = WW.length,
          cW = iW.length;
        if (LW != cW && !(PW && cW > LW)) return !1;
        var wW = NW.get(WW);
        if (wW && NW.get(iW)) return wW == iW;
        var tW = -1,
          ZW = !0,
          xW = 1 & EW ? new Ti : void 0;
        for (NW.set(WW, iW), NW.set(iW, WW); ++tW < LW;) {
          var lW = WW[tW],
            AW = iW[tW];
          if (mW) var bW = PW ? mW(AW, lW, tW, iW, WW, NW) : mW(lW, AW, tW, WW, iW, NW);
          if (void 0 !== bW) {
            if (bW) continue;
            ZW = !1;
            break
          }
          if (xW) {
            if (!fW(iW, (function(WW, iW) {
                if (!xW.has(iW) && (lW === WW || OW(lW, WW, mW, EW, NW))) return xW.add(iW)
              }))) {
              ZW = !1;
              break
            }
          } else if (lW !== AW && !OW(lW, AW, mW, EW, NW)) {
            ZW = !1;
            break
          }
        }
        return NW.delete(WW), NW.delete(iW), ZW
      }

      function Bi(WW, iW) {
        var OW = WW.__data__;
        return function(WW) {
          var iW = typeof WW;
          return "string" == iW || "number" == iW || "symbol" == iW || "boolean" == iW ? "__proto__" !== WW : null === WW
        }(iW) ? OW["string" == typeof iW ? "string" : "hash"] : OW.map
      }

      function qi(WW, iW) {
        var OW = function(WW, iW) {
          return null == WW ? void 0 : WW[iW]
        }(WW, iW);
        return Di(OW) ? OW : void 0
      }
      var Ri = function(WW) {
        return QW.call(WW)
      };

      function Gi(WW, iW) {
        return !!(iW = null == iW ? mW : iW) && ("number" == typeof WW || HW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < iW
      }

      function Ii(WW, iW) {
        if (mO(WW)) return !1;
        var OW = typeof WW;
        return !("number" != OW && "symbol" != OW && "boolean" != OW && null != WW && !wO(WW)) || (YW.test(WW) || !SW.test(WW) || null != iW && WW in Object(iW))
      }

      function ai(WW) {
        return WW === WW && !LO(WW)
      }

      function ri(WW, iW) {
        return function(OW) {
          return null != OW && (OW[WW] === iW && (void 0 !== iW || WW in Object(OW)))
        }
      }(ci && Ri(new ci(new ArrayBuffer(1))) != KW || wi && Ri(new wi) != ZW || ti && Ri(ti.resolve()) != AW || Zi && Ri(new Zi) != jW || xi && Ri(new xi) != sW) && (Ri = function(WW) {
        var iW = QW.call(WW),
          OW = iW == lW ? WW.constructor : void 0,
          mW = OW ? Qi(OW) : void 0;
        if (mW) switch (mW) {
          case Ai:
            return KW;
          case bi:
            return ZW;
          case ji:
            return AW;
          case Ui:
            return jW;
          case ki:
            return sW
        }
        return iW
      });
      var zi = WO((function(WW) {
        var iW;
        WW = null == (iW = WW) ? "" : function(WW) {
          if ("string" == typeof WW) return WW;
          if (wO(WW)) return Ki ? Ki.call(WW) : "";
          var iW = WW + "";
          return "0" == iW && 1 / WW == -1 / 0 ? "-0" : iW
        }(iW);
        var OW = [];
        return yW.test(WW) && OW.push(""), WW.replace(TW, (function(WW, iW, mW, EW) {
          OW.push(mW ? EW.replace(JW, "$1") : iW || WW)
        })), OW
      }));

      function Fi(WW) {
        if ("string" == typeof WW || wO(WW)) return WW;
        var iW = WW + "";
        return "0" == iW && 1 / WW == -1 / 0 ? "-0" : iW
      }

      function Qi(WW) {
        if (null != WW) {
          try {
            return zW.call(WW)
          } catch (iW) {}
          try {
            return WW + ""
          } catch (iW) {}
        }
        return ""
      }

      function WO(WW, iW) {
        if ("function" != typeof WW || iW && "function" != typeof iW) throw new TypeError("Expected a function");
        var OW = function() {
          var mW = arguments,
            EW = iW ? iW.apply(this, mW) : mW[0],
            NW = OW.cache;
          if (NW.has(EW)) return NW.get(EW);
          var PW = WW.apply(this, mW);
          return OW.cache = NW.set(EW, PW), PW
        };
        return OW.cache = new(WO.Cache || yi), OW
      }

      function iO(WW, iW) {
        return WW === iW || WW !== WW && iW !== iW
      }

      function OO(WW) {
        return function(WW) {
          return cO(WW) && EO(WW)
        }(WW) && FW.call(WW, "callee") && (!Ni.call(WW, "callee") || QW.call(WW) == NW)
      }
      WO.Cache = yi;
      var mO = Array.isArray;

      function EO(WW) {
        return null != WW && PO(WW.length) && !NO(WW)
      }

      function NO(WW) {
        var iW = LO(WW) ? QW.call(WW) : "";
        return iW == tW || "[object GeneratorFunction]" == iW
      }

      function PO(WW) {
        return "number" == typeof WW && WW > -1 && WW % 1 == 0 && WW <= mW
      }

      function LO(WW) {
        var iW = typeof WW;
        return !!WW && ("object" == iW || "function" == iW)
      }

      function cO(WW) {
        return !!WW && "object" == typeof WW
      }

      function wO(WW) {
        return "symbol" == typeof WW || cO(WW) && QW.call(WW) == kW
      }
      var tO, ZO = VW ? (tO = VW, function(WW) {
        return tO(WW)
      }) : function(WW) {
        return cO(WW) && PO(WW.length) && !!nW[QW.call(WW)]
      };

      function xO(WW) {
        return EO(WW) ? Hi(WW) : fi(WW)
      }

      function lO(WW) {
        return WW
      }
      WW.exports = function(WW, iW, OW) {
        var mW, EW = mO(WW) || ZO(WW);
        if (iW = Vi(iW), null == OW)
          if (EW || LO(WW)) {
            var NW = WW.constructor;
            OW = EW ? mO(WW) ? new NW : [] : NO(NW) ? LO(mW = mi(WW)) ? Ei(mW) : {} : {}
          } else OW = {};
        return (EW ? pW : di)(WW, (function(WW, mW, EW) {
          return iW(OW, WW, mW, EW)
        })), OW
      }
    }(pN, pN.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      l: fN
    } = mW
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);