export const id = 130;
export const ids = [130];
export const modules = {
  7025: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => Cz,
      f: () => hM
    });
    var wW = {};
    MW.r(wW), MW.d(wW, {
      e: () => ww,
      l: () => Aw,
      h: () => zC,
      n: () => HM,
      p: () => LM,
      q: () => jC,
      t: () => ZM,
      x: () => sw,
      y: () => Fw,
      C: () => aC,
      D: () => DM,
      F: () => Qw,
      J: () => Xw,
      L: () => kC,
      N: () => qw,
      M: () => Rw,
      Q: () => cC,
      S: () => rC
    });
    var CW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function zR(WW) {
      return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
    }
    var AW = {
      exports: {}
    };
    ! function(WW) {
      var RW = Object.prototype.hasOwnProperty,
        MW = "~";

      function wW() {}

      function CW(WW, RW, MW) {
        this.bC = WW, this.context = RW, this.once = MW || !1
      }

      function zR(WW, RW, wW, zR, AW) {
        if ("function" !== typeof wW) throw new TypeError("The listener must be a function");
        var bR = new CW(wW, zR || WW, AW),
          yR = MW ? MW + RW : RW;
        return WW._events[yR] ? WW._events[yR].bC ? WW._events[yR] = [WW._events[yR], bR] : WW._events[yR].push(bR) : (WW._events[yR] = bR, WW._eventsCount++), WW
      }

      function AW(WW, RW) {
        0 === --WW._eventsCount ? WW._events = new wW : delete WW._events[RW]
      }

      function bR() {
        this._events = new wW, this._eventsCount = 0
      }
      Object.create && (wW.prototype = Object.create(null), (new wW).__proto__ || (MW = !1)), bR.prototype.eventNames = function() {
        var WW, wW, CW = [];
        if (0 === this._eventsCount) return CW;
        for (wW in WW = this._events) RW.call(WW, wW) && CW.push(MW ? wW.slice(1) : wW);
        return Object.getOwnPropertySymbols ? CW.concat(Object.getOwnPropertySymbols(WW)) : CW
      }, bR.prototype.listeners = function(WW) {
        var RW = MW ? MW + WW : WW,
          wW = this._events[RW];
        if (!wW) return [];
        if (wW.bC) return [wW.bC];
        for (var CW = 0, zR = wW.length, AW = new Array(zR); CW < zR; CW++) AW[CW] = wW[CW].bC;
        return AW
      }, bR.prototype.listenerCount = function(WW) {
        var RW = MW ? MW + WW : WW,
          wW = this._events[RW];
        return wW ? wW.bC ? 1 : wW.length : 0
      }, bR.prototype.emit = function(WW, RW, wW, CW, zR, AW) {
        var bR = MW ? MW + WW : WW;
        if (!this._events[bR]) return !1;
        var yR, NW, eW = this._events[bR],
          BW = arguments.length;
        if (eW.bC) {
          switch (eW.once && this.removeListener(WW, eW.bC, void 0, !0), BW) {
            case 1:
              return eW.bC.call(eW.context), !0;
            case 2:
              return eW.bC.call(eW.context, RW), !0;
            case 3:
              return eW.bC.call(eW.context, RW, wW), !0;
            case 4:
              return eW.bC.call(eW.context, RW, wW, CW), !0;
            case 5:
              return eW.bC.call(eW.context, RW, wW, CW, zR), !0;
            case 6:
              return eW.bC.call(eW.context, RW, wW, CW, zR, AW), !0
          }
          for (NW = 1, yR = new Array(BW - 1); NW < BW; NW++) yR[NW - 1] = arguments[NW];
          eW.bC.apply(eW.context, yR)
        } else {
          var tR, TW = eW.length;
          for (NW = 0; NW < TW; NW++) switch (eW[NW].once && this.removeListener(WW, eW[NW].bC, void 0, !0), BW) {
            case 1:
              eW[NW].bC.call(eW[NW].context);
              break;
            case 2:
              eW[NW].bC.call(eW[NW].context, RW);
              break;
            case 3:
              eW[NW].bC.call(eW[NW].context, RW, wW);
              break;
            case 4:
              eW[NW].bC.call(eW[NW].context, RW, wW, CW);
              break;
            default:
              if (!yR)
                for (tR = 1, yR = new Array(BW - 1); tR < BW; tR++) yR[tR - 1] = arguments[tR];
              eW[NW].bC.apply(eW[NW].context, yR)
          }
        }
        return !0
      }, bR.prototype.on = function(WW, RW, MW) {
        return zR(this, WW, RW, MW, !1)
      }, bR.prototype.once = function(WW, RW, MW) {
        return zR(this, WW, RW, MW, !0)
      }, bR.prototype.removeListener = function(WW, RW, wW, CW) {
        var zR = MW ? MW + WW : WW;
        if (!this._events[zR]) return this;
        if (!RW) return AW(this, zR), this;
        var bR = this._events[zR];
        if (bR.bC) bR.bC !== RW || CW && !bR.once || wW && bR.context !== wW || AW(this, zR);
        else {
          for (var yR = 0, NW = [], eW = bR.length; yR < eW; yR++)(bR[yR].bC !== RW || CW && !bR[yR].once || wW && bR[yR].context !== wW) && NW.push(bR[yR]);
          NW.length ? this._events[zR] = 1 === NW.length ? NW[0] : NW : AW(this, zR)
        }
        return this
      }, bR.prototype.aN = function(WW) {
        var RW;
        return WW ? (RW = MW ? MW + WW : WW, this._events[RW] && AW(this, RW)) : (this._events = new wW, this._eventsCount = 0), this
      }, bR.prototype.off = bR.prototype.removeListener, bR.prototype.addListener = bR.prototype.on, bR.prefixed = MW, bR.EventEmitter = bR, WW.exports = bR
    }(AW);
    var bR, yR, NW = zR(AW.exports);
    ! function(WW) {
      WW.assertEqual = WW => WW, WW.assertIs = function(WW) {}, WW.assertNever = function(WW) {
        throw new Error
      }, WW.arrayToEnum = WW => {
        const RW = {};
        for (const MW of WW) RW[MW] = MW;
        return RW
      }, WW.getValidEnumValues = RW => {
        const MW = WW.objectKeys(RW).filter((WW => "number" !== typeof RW[RW[WW]])),
          wW = {};
        for (const WW of MW) wW[WW] = RW[WW];
        return WW.objectValues(wW)
      }, WW.objectValues = RW => WW.objectKeys(RW).map((function(WW) {
        return RW[WW]
      })), WW.objectKeys = "function" === typeof Object.keys ? WW => Object.keys(WW) : WW => {
        const RW = [];
        for (const MW in WW) Object.prototype.hasOwnProperty.call(WW, MW) && RW.push(MW);
        return RW
      }, WW.find = (WW, RW) => {
        for (const MW of WW)
          if (RW(MW)) return MW
      }, WW.isInteger = "function" === typeof Number.isInteger ? WW => Number.isInteger(WW) : WW => "number" === typeof WW && isFinite(WW) && Math.floor(WW) === WW, WW.joinValues = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return WW.map((WW => "string" === typeof WW ? `'${WW}'` : WW)).join(RW)
      }, WW.jsonStringifyReplacer = (WW, RW) => "bigint" === typeof RW ? RW.toString() : RW
    }(bR || (bR = {})),
    function(WW) {
      WW.mergeShapes = (WW, RW) => ({
        ...WW,
        ...RW
      })
    }(yR || (yR = {}));
    const eW = bR.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      BW = WW => {
        switch (typeof WW) {
          case "undefined":
            return eW.undefined;
          case "string":
            return eW.string;
          case "number":
            return isNaN(WW) ? eW.nan : eW.number;
          case "boolean":
            return eW.boolean;
          case "function":
            return eW.function;
          case "bigint":
            return eW.bigint;
          case "symbol":
            return eW.symbol;
          case "object":
            return Array.isArray(WW) ? eW.array : null === WW ? eW.null : WW.then && "function" === typeof WW.then && WW.catch && "function" === typeof WW.catch ? eW.promise : "undefined" !== typeof Map && WW instanceof Map ? eW.map : "undefined" !== typeof Set && WW instanceof Set ? eW.set : "undefined" !== typeof Date && WW instanceof Date ? eW.date : eW.object;
          default:
            return eW.unknown
        }
      },
      tR = bR.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class TW extends Error {
      constructor(WW) {
        var RW;
        super(), RW = this, this.issues = [], this.addIssue = WW => {
          this.issues = [...this.issues, WW]
        }, this.addIssues = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          RW.issues = [...RW.issues, ...WW]
        };
        const MW = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, MW) : this.__proto__ = MW, this.name = "ZodError", this.issues = WW
      }
      get errors() {
        return this.issues
      }
      format(WW) {
        const RW = WW || function(WW) {
            return WW.message
          },
          MW = {
            _errors: []
          },
          wW = WW => {
            for (const CW of WW.issues)
              if ("invalid_union" === CW.code) CW.unionErrors.map(wW);
              else if ("invalid_return_type" === CW.code) wW(CW.returnTypeError);
            else if ("invalid_arguments" === CW.code) wW(CW.argumentsError);
            else if (0 === CW.path.length) MW._errors.push(RW(CW));
            else {
              let WW = MW,
                wW = 0;
              for (; wW < CW.path.length;) {
                const MW = CW.path[wW];
                wW === CW.path.length - 1 ? (WW[MW] = WW[MW] || {
                  _errors: []
                }, WW[MW]._errors.push(RW(CW))) : WW[MW] = WW[MW] || {
                  _errors: []
                }, WW = WW[MW], wW++
              }
            }
          };
        return wW(this), MW
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, bR.jsonStringifyReplacer, 2)
      }
      get gC() {
        return 0 === this.issues.length
      }
      flatten() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WW => WW.message;
        const RW = {},
          MW = [];
        for (const wW of this.issues) wW.path.length > 0 ? (RW[wW.path[0]] = RW[wW.path[0]] || [], RW[wW.path[0]].push(WW(wW))) : MW.push(WW(wW));
        return {
          formErrors: MW,
          fieldErrors: RW
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    TW.create = WW => new TW(WW);
    const gR = (WW, RW) => {
      let MW;
      switch (WW.code) {
        case tR.invalid_type:
          MW = WW.received === eW.undefined ? "Required" : `Expected ${WW.expected}, received ${WW.received}`;
          break;
        case tR.invalid_literal:
          MW = `Invalid literal value, expected ${JSON.stringify(WW.expected,bR.jsonStringifyReplacer)}`;
          break;
        case tR.unrecognized_keys:
          MW = `Unrecognized key(s) in object: ${bR.joinValues(WW.keys,", ")}`;
          break;
        case tR.invalid_union:
          MW = "Invalid input";
          break;
        case tR.invalid_union_discriminator:
          MW = `Invalid discriminator value. Expected ${bR.joinValues(WW.options)}`;
          break;
        case tR.invalid_enum_value:
          MW = `Invalid enum value. Expected ${bR.joinValues(WW.options)}, received '${WW.received}'`;
          break;
        case tR.invalid_arguments:
          MW = "Invalid function arguments";
          break;
        case tR.invalid_return_type:
          MW = "Invalid function return type";
          break;
        case tR.invalid_date:
          MW = "Invalid date";
          break;
        case tR.invalid_string:
          "object" === typeof WW.validation ? "includes" in WW.validation ? (MW = `Invalid input: must include "${WW.validation.includes}"`, "number" === typeof WW.validation.position && (MW = `${MW} at one or more positions greater than or equal to ${WW.validation.position}`)) : "startsWith" in WW.validation ? MW = `Invalid input: must start with "${WW.validation.startsWith}"` : "endsWith" in WW.validation ? MW = `Invalid input: must end with "${WW.validation.endsWith}"` : bR.assertNever(WW.validation) : MW = "regex" !== WW.validation ? `Invalid ${WW.validation}` : "Invalid";
          break;
        case tR.too_small:
          MW = "array" === WW.type ? `Array must contain ${WW.exact?"exactly":WW.inclusive?"at least":"more than"} ${WW.minimum} element(s)` : "string" === WW.type ? `String must contain ${WW.exact?"exactly":WW.inclusive?"at least":"over"} ${WW.minimum} character(s)` : "number" === WW.type ? `Number must be ${WW.exact?"exactly equal to ":WW.inclusive?"greater than or equal to ":"greater than "}${WW.minimum}` : "date" === WW.type ? `Date must be ${WW.exact?"exactly equal to ":WW.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(WW.minimum))}` : "Invalid input";
          break;
        case tR.too_big:
          MW = "array" === WW.type ? `Array must contain ${WW.exact?"exactly":WW.inclusive?"at most":"less than"} ${WW.maximum} element(s)` : "string" === WW.type ? `String must contain ${WW.exact?"exactly":WW.inclusive?"at most":"under"} ${WW.maximum} character(s)` : "number" === WW.type ? `Number must be ${WW.exact?"exactly":WW.inclusive?"less than or equal to":"less than"} ${WW.maximum}` : "bigint" === WW.type ? `BigInt must be ${WW.exact?"exactly":WW.inclusive?"less than or equal to":"less than"} ${WW.maximum}` : "date" === WW.type ? `Date must be ${WW.exact?"exactly":WW.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(WW.maximum))}` : "Invalid input";
          break;
        case tR.custom:
          MW = "Invalid input";
          break;
        case tR.invalid_intersection_types:
          MW = "Intersection results could not be merged";
          break;
        case tR.not_multiple_of:
          MW = `Number must be a multiple of ${WW.multipleOf}`;
          break;
        case tR.not_finite:
          MW = "Number must be finite";
          break;
        default:
          MW = RW.defaultError, bR.assertNever(WW)
      }
      return {
        message: MW
      }
    };
    let iR = gR;

    function YW() {
      return iR
    }
    const JW = WW => {
      const {
        data: RW,
        path: MW,
        errorMaps: wW,
        issueData: CW
      } = WW, zR = [...MW, ...CW.path || []], AW = {
        ...CW,
        path: zR
      };
      let bR = "";
      const yR = wW.filter((WW => !!WW)).slice().reverse();
      for (const NW of yR) bR = NW(AW, {
        data: RW,
        defaultError: bR
      }).message;
      return {
        ...CW,
        path: zR,
        message: CW.message || bR
      }
    };

    function PW(WW, RW) {
      const MW = JW({
        issueData: RW,
        data: WW.data,
        path: WW.path,
        errorMaps: [WW.common.contextualErrorMap, WW.schemaErrorMap, YW(), gR].filter((WW => !!WW))
      });
      WW.common.issues.push(MW)
    }
    class IW {
      constructor() {
        this.value = "valid"
      }
      Gw() {
        "valid" === this.value && (this.value = "Gw")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(WW, RW) {
        const MW = [];
        for (const wW of RW) {
          if ("aborted" === wW.status) return oW;
          "Gw" === wW.status && WW.Gw(), MW.push(wW.value)
        }
        return {
          status: WW.value,
          value: MW
        }
      }
      static async mergeObjectAsync(WW, RW) {
        const MW = [];
        for (const wW of RW) MW.push({
          key: await wW.key,
          value: await wW.value
        });
        return IW.mergeObjectSync(WW, MW)
      }
      static mergeObjectSync(WW, RW) {
        const MW = {};
        for (const wW of RW) {
          const {
            key: RW,
            value: CW
          } = wW;
          if ("aborted" === RW.status) return oW;
          if ("aborted" === CW.status) return oW;
          "Gw" === RW.status && WW.Gw(), "Gw" === CW.status && WW.Gw(), "__proto__" === RW.value || "undefined" === typeof CW.value && !wW.alwaysSet || (MW[RW.value] = CW.value)
        }
        return {
          status: WW.value,
          value: MW
        }
      }
    }
    const oW = Object.freeze({
        status: "aborted"
      }),
      lW = WW => ({
        status: "Gw",
        value: WW
      }),
      FW = WW => ({
        status: "valid",
        value: WW
      }),
      fW = WW => "aborted" === WW.status,
      QW = WW => "Gw" === WW.status,
      rR = WW => "valid" === WW.status,
      cR = WW => "undefined" !== typeof Promise && WW instanceof Promise;
    var XW;
    ! function(WW) {
      WW.errToObj = WW => "string" === typeof WW ? {
        message: WW
      } : WW || {}, WW.toString = WW => "string" === typeof WW ? WW : null === WW || void 0 === WW ? void 0 : WW.message
    }(XW || (XW = {}));
    class jR {
      constructor(WW, RW, MW, wW) {
        this._cachedPath = [], this.parent = WW, this.data = RW, this._path = MW, this._key = wW
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const kR = (WW, RW) => {
      if (rR(RW)) return {
        success: !0,
        data: RW.value
      };
      if (!WW.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const RW = new TW(WW.common.issues);
          return this._error = RW, this._error
        }
      }
    };

    function aR(WW) {
      if (!WW) return {};
      const {
        errorMap: RW,
        invalid_type_error: MW,
        required_error: wW,
        description: CW
      } = WW;
      if (RW && (MW || wW)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (RW) return {
        errorMap: RW,
        description: CW
      };
      return {
        errorMap: (WW, RW) => "invalid_type" !== WW.code ? {
          message: RW.defaultError
        } : "undefined" === typeof RW.data ? {
          message: null !== wW && void 0 !== wW ? wW : RW.defaultError
        } : {
          message: null !== MW && void 0 !== MW ? MW : RW.defaultError
        },
        description: CW
      }
    }
    class sW {
      constructor(WW) {
        this.spa = this.safeParseAsync, this._def = WW, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(WW) {
        return BW(WW.data)
      }
      _getOrReturnCtx(WW, RW) {
        return RW || {
          common: WW.parent.common,
          data: WW.data,
          parsedType: BW(WW.data),
          schemaErrorMap: this._def.errorMap,
          path: WW.path,
          parent: WW.parent
        }
      }
      _processInputParams(WW) {
        return {
          status: new IW,
          ctx: {
            common: WW.parent.common,
            data: WW.data,
            parsedType: BW(WW.data),
            schemaErrorMap: this._def.errorMap,
            path: WW.path,
            parent: WW.parent
          }
        }
      }
      _parseSync(WW) {
        const RW = this._parse(WW);
        if (cR(RW)) throw new Error("Synchronous parse encountered promise.");
        return RW
      }
      _parseAsync(WW) {
        const RW = this._parse(WW);
        return Promise.resolve(RW)
      }
      parse(WW, RW) {
        const MW = this.safeParse(WW, RW);
        if (MW.success) return MW.data;
        throw MW.error
      }
      safeParse(WW, RW) {
        var MW;
        const wW = {
            common: {
              issues: [],
              async: null !== (MW = null === RW || void 0 === RW ? void 0 : RW.async) && void 0 !== MW && MW,
              contextualErrorMap: null === RW || void 0 === RW ? void 0 : RW.errorMap
            },
            path: (null === RW || void 0 === RW ? void 0 : RW.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: WW,
            parsedType: BW(WW)
          },
          CW = this._parseSync({
            data: WW,
            path: wW.path,
            parent: wW
          });
        return kR(wW, CW)
      }
      async parseAsync(WW, RW) {
        const MW = await this.safeParseAsync(WW, RW);
        if (MW.success) return MW.data;
        throw MW.error
      }
      async safeParseAsync(WW, RW) {
        const MW = {
            common: {
              issues: [],
              contextualErrorMap: null === RW || void 0 === RW ? void 0 : RW.errorMap,
              async: !0
            },
            path: (null === RW || void 0 === RW ? void 0 : RW.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: WW,
            parsedType: BW(WW)
          },
          wW = this._parse({
            data: WW,
            path: MW.path,
            parent: MW
          }),
          CW = await (cR(wW) ? wW : Promise.resolve(wW));
        return kR(MW, CW)
      }
      refine(WW, RW) {
        const MW = WW => "string" === typeof RW || "undefined" === typeof RW ? {
          message: RW
        } : "function" === typeof RW ? RW(WW) : RW;
        return this._refinement(((RW, wW) => {
          const CW = WW(RW),
            zR = () => wW.addIssue({
              code: tR.custom,
              ...MW(RW)
            });
          return "undefined" !== typeof Promise && CW instanceof Promise ? CW.then((WW => !!WW || (zR(), !1))) : !!CW || (zR(), !1)
        }))
      }
      refinement(WW, RW) {
        return this._refinement(((MW, wW) => !!WW(MW) || (wW.addIssue("function" === typeof RW ? RW(MW, wW) : RW), !1)))
      }
      _refinement(WW) {
        return new oR({
          schema: this,
          typeName: dR.ZodEffects,
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
        return lR.create(this, this._def)
      }
      nullable() {
        return FR.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return RR.create(this, this._def)
      }
      promise() {
        return IR.create(this, this._def)
      }
      or(WW) {
        return CR.create([this, WW], this._def)
      }
      and(WW) {
        return yM.create(this, WW, this._def)
      }
      transform(WW) {
        return new oR({
          ...aR(this._def),
          schema: this,
          typeName: dR.ZodEffects,
          effect: {
            type: "transform",
            transform: WW
          }
        })
      }
      default (WW) {
        const RW = "function" === typeof WW ? WW : () => WW;
        return new fR({
          ...aR(this._def),
          innerType: this,
          defaultValue: RW,
          typeName: dR.ZodDefault
        })
      }
      brand() {
        return new XR({
          typeName: dR.ZodBranded,
          type: this,
          ...aR(this._def)
        })
      } catch (WW) {
        const RW = "function" === typeof WW ? WW : () => WW;
        return new QR({
          ...aR(this._def),
          innerType: this,
          catchValue: RW,
          typeName: dR.ZodCatch
        })
      }
      describe(WW) {
        return new(0, this.constructor)({
          ...this._def,
          description: WW
        })
      }
      pipe(WW) {
        return jM.create(this, WW)
      }
      readonly() {
        return kM.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const dW = /^c[^\s-]{8,}$/i,
      pW = /^[a-z][a-z0-9]*$/,
      hW = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      UW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      EW = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let VW;
    const mR = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      xR = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class vR extends sW {
      _parse(WW) {
        this._def.coerce && (WW.data = String(WW.data));
        if (this._getType(WW) !== eW.string) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.string,
            received: RW.parsedType
          }), oW
        }
        const RW = new IW;
        let MW;
        for (const yR of this._def.checks)
          if ("min" === yR.kind) WW.data.length < yR.value && (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
            code: tR.too_small,
            minimum: yR.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: yR.message
          }), RW.Gw());
          else if ("max" === yR.kind) WW.data.length > yR.value && (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          code: tR.too_big,
          maximum: yR.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: yR.message
        }), RW.Gw());
        else if ("length" === yR.kind) {
          const wW = WW.data.length > yR.value,
            CW = WW.data.length < yR.value;
          (wW || CW) && (MW = this._getOrReturnCtx(WW, MW), wW ? PW(MW, {
            code: tR.too_big,
            maximum: yR.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: yR.message
          }) : CW && PW(MW, {
            code: tR.too_small,
            minimum: yR.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: yR.message
          }), RW.Gw())
        } else if ("email" === yR.kind) EW.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "email",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw());
        else if ("emoji" === yR.kind) VW || (VW = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), VW.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "emoji",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw());
        else if ("uuid" === yR.kind) UW.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "uuid",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw());
        else if ("cuid" === yR.kind) dW.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "cuid",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw());
        else if ("cuid2" === yR.kind) pW.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "cuid2",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw());
        else if ("ulid" === yR.kind) hW.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "ulid",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw());
        else if ("url" === yR.kind) try {
          new URL(WW.data)
        } catch (AW) {
          MW = this._getOrReturnCtx(WW, MW), PW(MW, {
            validation: "url",
            code: tR.invalid_string,
            message: yR.message
          }), RW.Gw()
        } else if ("regex" === yR.kind) {
          yR.regex.lastIndex = 0;
          yR.regex.test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
            validation: "regex",
            code: tR.invalid_string,
            message: yR.message
          }), RW.Gw())
        } else if ("trim" === yR.kind) WW.data = WW.data.trim();
        else if ("includes" === yR.kind) WW.data.includes(yR.value, yR.position) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          code: tR.invalid_string,
          validation: {
            includes: yR.value,
            position: yR.position
          },
          message: yR.message
        }), RW.Gw());
        else if ("toLowerCase" === yR.kind) WW.data = WW.data.toLowerCase();
        else if ("toUpperCase" === yR.kind) WW.data = WW.data.toUpperCase();
        else if ("startsWith" === yR.kind) WW.data.startsWith(yR.value) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          code: tR.invalid_string,
          validation: {
            startsWith: yR.value
          },
          message: yR.message
        }), RW.Gw());
        else if ("endsWith" === yR.kind) WW.data.endsWith(yR.value) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          code: tR.invalid_string,
          validation: {
            endsWith: yR.value
          },
          message: yR.message
        }), RW.Gw());
        else if ("datetime" === yR.kind) {
          ((zR = yR).precision ? zR.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${zR.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${zR.precision}}Z$`) : 0 === zR.precision ? zR.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : zR.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(WW.data) || (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
            code: tR.invalid_string,
            validation: "datetime",
            message: yR.message
          }), RW.Gw())
        } else "ip" === yR.kind ? (wW = WW.data, ("v4" !== (CW = yR.version) && CW || !mR.test(wW)) && ("v6" !== CW && CW || !xR.test(wW)) && (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          validation: "ip",
          code: tR.invalid_string,
          message: yR.message
        }), RW.Gw())) : bR.assertNever(yR);
        var wW, CW, zR;
        return {
          status: RW.value,
          value: WW.data
        }
      }
      _regex(WW, RW, MW) {
        return this.refinement((RW => WW.test(RW)), {
          validation: RW,
          code: tR.invalid_string,
          ...XW.errToObj(MW)
        })
      }
      _addCheck(WW) {
        return new vR({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      email(WW) {
        return this._addCheck({
          kind: "email",
          ...XW.errToObj(WW)
        })
      }
      url(WW) {
        return this._addCheck({
          kind: "url",
          ...XW.errToObj(WW)
        })
      }
      emoji(WW) {
        return this._addCheck({
          kind: "emoji",
          ...XW.errToObj(WW)
        })
      }
      uuid(WW) {
        return this._addCheck({
          kind: "uuid",
          ...XW.errToObj(WW)
        })
      }
      cuid(WW) {
        return this._addCheck({
          kind: "cuid",
          ...XW.errToObj(WW)
        })
      }
      cuid2(WW) {
        return this._addCheck({
          kind: "cuid2",
          ...XW.errToObj(WW)
        })
      }
      ulid(WW) {
        return this._addCheck({
          kind: "ulid",
          ...XW.errToObj(WW)
        })
      }
      ip(WW) {
        return this._addCheck({
          kind: "ip",
          ...XW.errToObj(WW)
        })
      }
      datetime(WW) {
        var RW;
        return "string" === typeof WW ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: WW
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === WW || void 0 === WW ? void 0 : WW.precision) ? null : null === WW || void 0 === WW ? void 0 : WW.precision,
          offset: null !== (RW = null === WW || void 0 === WW ? void 0 : WW.offset) && void 0 !== RW && RW,
          ...XW.errToObj(null === WW || void 0 === WW ? void 0 : WW.message)
        })
      }
      regex(WW, RW) {
        return this._addCheck({
          kind: "regex",
          regex: WW,
          ...XW.errToObj(RW)
        })
      }
      includes(WW, RW) {
        return this._addCheck({
          kind: "includes",
          value: WW,
          position: null === RW || void 0 === RW ? void 0 : RW.position,
          ...XW.errToObj(null === RW || void 0 === RW ? void 0 : RW.message)
        })
      }
      startsWith(WW, RW) {
        return this._addCheck({
          kind: "startsWith",
          value: WW,
          ...XW.errToObj(RW)
        })
      }
      endsWith(WW, RW) {
        return this._addCheck({
          kind: "endsWith",
          value: WW,
          ...XW.errToObj(RW)
        })
      }
      min(WW, RW) {
        return this._addCheck({
          kind: "min",
          value: WW,
          ...XW.errToObj(RW)
        })
      }
      max(WW, RW) {
        return this._addCheck({
          kind: "max",
          value: WW,
          ...XW.errToObj(RW)
        })
      }
      length(WW, RW) {
        return this._addCheck({
          kind: "length",
          value: WW,
          ...XW.errToObj(RW)
        })
      }
      nonempty(WW) {
        return this.min(1, XW.errToObj(WW))
      }
      trim() {
        return new vR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new vR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new vR({
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
        for (const RW of this._def.checks) "min" === RW.kind && (null === WW || RW.value > WW) && (WW = RW.value);
        return WW
      }
      get maxLength() {
        let WW = null;
        for (const RW of this._def.checks) "max" === RW.kind && (null === WW || RW.value < WW) && (WW = RW.value);
        return WW
      }
    }

    function KW(WW, RW) {
      const MW = (WW.toString().split(".")[1] || "").length,
        wW = (RW.toString().split(".")[1] || "").length,
        CW = MW > wW ? MW : wW;
      return parseInt(WW.toFixed(CW).replace(".", "")) % parseInt(RW.toFixed(CW).replace(".", "")) / Math.pow(10, CW)
    }
    vR.create = WW => {
      var RW;
      return new vR({
        checks: [],
        typeName: dR.ZodString,
        coerce: null !== (RW = null === WW || void 0 === WW ? void 0 : WW.coerce) && void 0 !== RW && RW,
        ...aR(WW)
      })
    };
    class uW extends sW {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(WW) {
        this._def.coerce && (WW.data = Number(WW.data));
        if (this._getType(WW) !== eW.number) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.number,
            received: RW.parsedType
          }), oW
        }
        let RW;
        const MW = new IW;
        for (const wW of this._def.checks)
          if ("int" === wW.kind) bR.isInteger(WW.data) || (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
            code: tR.invalid_type,
            expected: "integer",
            received: "float",
            message: wW.message
          }), MW.Gw());
          else if ("min" === wW.kind) {
          (wW.inclusive ? WW.data < wW.value : WW.data <= wW.value) && (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
            code: tR.too_small,
            minimum: wW.value,
            type: "number",
            inclusive: wW.inclusive,
            exact: !1,
            message: wW.message
          }), MW.Gw())
        } else if ("max" === wW.kind) {
          (wW.inclusive ? WW.data > wW.value : WW.data >= wW.value) && (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
            code: tR.too_big,
            maximum: wW.value,
            type: "number",
            inclusive: wW.inclusive,
            exact: !1,
            message: wW.message
          }), MW.Gw())
        } else "multipleOf" === wW.kind ? 0 !== KW(WW.data, wW.value) && (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
          code: tR.not_multiple_of,
          multipleOf: wW.value,
          message: wW.message
        }), MW.Gw()) : "finite" === wW.kind ? Number.isFinite(WW.data) || (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
          code: tR.not_finite,
          message: wW.message
        }), MW.Gw()) : bR.assertNever(wW);
        return {
          status: MW.value,
          value: WW.data
        }
      }
      gte(WW, RW) {
        return this.setLimit("min", WW, !0, XW.toString(RW))
      }
      gt(WW, RW) {
        return this.setLimit("min", WW, !1, XW.toString(RW))
      }
      lte(WW, RW) {
        return this.setLimit("max", WW, !0, XW.toString(RW))
      }
      lt(WW, RW) {
        return this.setLimit("max", WW, !1, XW.toString(RW))
      }
      setLimit(WW, RW, MW, wW) {
        return new uW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: WW,
            value: RW,
            inclusive: MW,
            message: XW.toString(wW)
          }]
        })
      }
      _addCheck(WW) {
        return new uW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      int(WW) {
        return this._addCheck({
          kind: "int",
          message: XW.toString(WW)
        })
      }
      positive(WW) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: XW.toString(WW)
        })
      }
      negative(WW) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: XW.toString(WW)
        })
      }
      nonpositive(WW) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: XW.toString(WW)
        })
      }
      nonnegative(WW) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: XW.toString(WW)
        })
      }
      multipleOf(WW, RW) {
        return this._addCheck({
          kind: "multipleOf",
          value: WW,
          message: XW.toString(RW)
        })
      }
      finite(WW) {
        return this._addCheck({
          kind: "finite",
          message: XW.toString(WW)
        })
      }
      safe(WW) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: XW.toString(WW)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: XW.toString(WW)
        })
      }
      get minValue() {
        let WW = null;
        for (const RW of this._def.checks) "min" === RW.kind && (null === WW || RW.value > WW) && (WW = RW.value);
        return WW
      }
      get maxValue() {
        let WW = null;
        for (const RW of this._def.checks) "max" === RW.kind && (null === WW || RW.value < WW) && (WW = RW.value);
        return WW
      }
      get isInt() {
        return !!this._def.checks.find((WW => "int" === WW.kind || "multipleOf" === WW.kind && bR.isInteger(WW.value)))
      }
      get isFinite() {
        let WW = null,
          RW = null;
        for (const MW of this._def.checks) {
          if ("finite" === MW.kind || "int" === MW.kind || "multipleOf" === MW.kind) return !0;
          "min" === MW.kind ? (null === RW || MW.value > RW) && (RW = MW.value) : "max" === MW.kind && (null === WW || MW.value < WW) && (WW = MW.value)
        }
        return Number.isFinite(RW) && Number.isFinite(WW)
      }
    }
    uW.create = WW => new uW({
      checks: [],
      typeName: dR.ZodNumber,
      coerce: (null === WW || void 0 === WW ? void 0 : WW.coerce) || !1,
      ...aR(WW)
    });
    class OW extends sW {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(WW) {
        this._def.coerce && (WW.data = BigInt(WW.data));
        if (this._getType(WW) !== eW.bigint) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.bigint,
            received: RW.parsedType
          }), oW
        }
        let RW;
        const MW = new IW;
        for (const wW of this._def.checks)
          if ("min" === wW.kind) {
            (wW.inclusive ? WW.data < wW.value : WW.data <= wW.value) && (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
              code: tR.too_small,
              type: "bigint",
              minimum: wW.value,
              inclusive: wW.inclusive,
              message: wW.message
            }), MW.Gw())
          } else if ("max" === wW.kind) {
          (wW.inclusive ? WW.data > wW.value : WW.data >= wW.value) && (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
            code: tR.too_big,
            type: "bigint",
            maximum: wW.value,
            inclusive: wW.inclusive,
            message: wW.message
          }), MW.Gw())
        } else "multipleOf" === wW.kind ? WW.data % wW.value !== BigInt(0) && (RW = this._getOrReturnCtx(WW, RW), PW(RW, {
          code: tR.not_multiple_of,
          multipleOf: wW.value,
          message: wW.message
        }), MW.Gw()) : bR.assertNever(wW);
        return {
          status: MW.value,
          value: WW.data
        }
      }
      gte(WW, RW) {
        return this.setLimit("min", WW, !0, XW.toString(RW))
      }
      gt(WW, RW) {
        return this.setLimit("min", WW, !1, XW.toString(RW))
      }
      lte(WW, RW) {
        return this.setLimit("max", WW, !0, XW.toString(RW))
      }
      lt(WW, RW) {
        return this.setLimit("max", WW, !1, XW.toString(RW))
      }
      setLimit(WW, RW, MW, wW) {
        return new OW({
          ...this._def,
          checks: [...this._def.checks, {
            kind: WW,
            value: RW,
            inclusive: MW,
            message: XW.toString(wW)
          }]
        })
      }
      _addCheck(WW) {
        return new OW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      positive(WW) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: XW.toString(WW)
        })
      }
      negative(WW) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: XW.toString(WW)
        })
      }
      nonpositive(WW) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: XW.toString(WW)
        })
      }
      nonnegative(WW) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: XW.toString(WW)
        })
      }
      multipleOf(WW, RW) {
        return this._addCheck({
          kind: "multipleOf",
          value: WW,
          message: XW.toString(RW)
        })
      }
      get minValue() {
        let WW = null;
        for (const RW of this._def.checks) "min" === RW.kind && (null === WW || RW.value > WW) && (WW = RW.value);
        return WW
      }
      get maxValue() {
        let WW = null;
        for (const RW of this._def.checks) "max" === RW.kind && (null === WW || RW.value < WW) && (WW = RW.value);
        return WW
      }
    }
    OW.create = WW => {
      var RW;
      return new OW({
        checks: [],
        typeName: dR.ZodBigInt,
        coerce: null !== (RW = null === WW || void 0 === WW ? void 0 : WW.coerce) && void 0 !== RW && RW,
        ...aR(WW)
      })
    };
    class nW extends sW {
      _parse(WW) {
        this._def.coerce && (WW.data = Boolean(WW.data));
        if (this._getType(WW) !== eW.boolean) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.boolean,
            received: RW.parsedType
          }), oW
        }
        return FW(WW.data)
      }
    }
    nW.create = WW => new nW({
      typeName: dR.ZodBoolean,
      coerce: (null === WW || void 0 === WW ? void 0 : WW.coerce) || !1,
      ...aR(WW)
    });
    class GW extends sW {
      _parse(WW) {
        this._def.coerce && (WW.data = new Date(WW.data));
        if (this._getType(WW) !== eW.date) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.date,
            received: RW.parsedType
          }), oW
        }
        if (isNaN(WW.data.getTime())) {
          return PW(this._getOrReturnCtx(WW), {
            code: tR.invalid_date
          }), oW
        }
        const RW = new IW;
        let MW;
        for (const wW of this._def.checks) "min" === wW.kind ? WW.data.getTime() < wW.value && (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          code: tR.too_small,
          message: wW.message,
          inclusive: !0,
          exact: !1,
          minimum: wW.value,
          type: "date"
        }), RW.Gw()) : "max" === wW.kind ? WW.data.getTime() > wW.value && (MW = this._getOrReturnCtx(WW, MW), PW(MW, {
          code: tR.too_big,
          message: wW.message,
          inclusive: !0,
          exact: !1,
          maximum: wW.value,
          type: "date"
        }), RW.Gw()) : bR.assertNever(wW);
        return {
          status: RW.value,
          value: new Date(WW.data.getTime())
        }
      }
      _addCheck(WW) {
        return new GW({
          ...this._def,
          checks: [...this._def.checks, WW]
        })
      }
      min(WW, RW) {
        return this._addCheck({
          kind: "min",
          value: WW.getTime(),
          message: XW.toString(RW)
        })
      }
      max(WW, RW) {
        return this._addCheck({
          kind: "max",
          value: WW.getTime(),
          message: XW.toString(RW)
        })
      }
      get minDate() {
        let WW = null;
        for (const RW of this._def.checks) "min" === RW.kind && (null === WW || RW.value > WW) && (WW = RW.value);
        return null != WW ? new Date(WW) : null
      }
      get maxDate() {
        let WW = null;
        for (const RW of this._def.checks) "max" === RW.kind && (null === WW || RW.value < WW) && (WW = RW.value);
        return null != WW ? new Date(WW) : null
      }
    }
    GW.create = WW => new GW({
      checks: [],
      coerce: (null === WW || void 0 === WW ? void 0 : WW.coerce) || !1,
      typeName: dR.ZodDate,
      ...aR(WW)
    });
    class LW extends sW {
      _parse(WW) {
        if (this._getType(WW) !== eW.symbol) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.symbol,
            received: RW.parsedType
          }), oW
        }
        return FW(WW.data)
      }
    }
    LW.create = WW => new LW({
      typeName: dR.ZodSymbol,
      ...aR(WW)
    });
    class HW extends sW {
      _parse(WW) {
        if (this._getType(WW) !== eW.undefined) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.undefined,
            received: RW.parsedType
          }), oW
        }
        return FW(WW.data)
      }
    }
    HW.create = WW => new HW({
      typeName: dR.ZodUndefined,
      ...aR(WW)
    });
    class DW extends sW {
      _parse(WW) {
        if (this._getType(WW) !== eW.null) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.null,
            received: RW.parsedType
          }), oW
        }
        return FW(WW.data)
      }
    }
    DW.create = WW => new DW({
      typeName: dR.ZodNull,
      ...aR(WW)
    });
    class qR extends sW {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(WW) {
        return FW(WW.data)
      }
    }
    qR.create = WW => new qR({
      typeName: dR.ZodAny,
      ...aR(WW)
    });
    class ZW extends sW {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(WW) {
        return FW(WW.data)
      }
    }
    ZW.create = WW => new ZW({
      typeName: dR.ZodUnknown,
      ...aR(WW)
    });
    class SW extends sW {
      _parse(WW) {
        const RW = this._getOrReturnCtx(WW);
        return PW(RW, {
          code: tR.invalid_type,
          expected: eW.never,
          received: RW.parsedType
        }), oW
      }
    }
    SW.create = WW => new SW({
      typeName: dR.ZodNever,
      ...aR(WW)
    });
    class WR extends sW {
      _parse(WW) {
        if (this._getType(WW) !== eW.undefined) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.void,
            received: RW.parsedType
          }), oW
        }
        return FW(WW.data)
      }
    }
    WR.create = WW => new WR({
      typeName: dR.ZodVoid,
      ...aR(WW)
    });
    class RR extends sW {
      _parse(WW) {
        const {
          ctx: RW,
          status: MW
        } = this._processInputParams(WW), wW = this._def;
        if (RW.parsedType !== eW.array) return PW(RW, {
          code: tR.invalid_type,
          expected: eW.array,
          received: RW.parsedType
        }), oW;
        if (null !== wW.exactLength) {
          const WW = RW.data.length > wW.exactLength.value,
            CW = RW.data.length < wW.exactLength.value;
          (WW || CW) && (PW(RW, {
            code: WW ? tR.too_big : tR.too_small,
            minimum: CW ? wW.exactLength.value : void 0,
            maximum: WW ? wW.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: wW.exactLength.message
          }), MW.Gw())
        }
        if (null !== wW.minLength && RW.data.length < wW.minLength.value && (PW(RW, {
            code: tR.too_small,
            minimum: wW.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: wW.minLength.message
          }), MW.Gw()), null !== wW.maxLength && RW.data.length > wW.maxLength.value && (PW(RW, {
            code: tR.too_big,
            maximum: wW.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: wW.maxLength.message
          }), MW.Gw()), RW.common.async) return Promise.all([...RW.data].map(((WW, MW) => wW.type._parseAsync(new jR(RW, WW, RW.path, MW))))).then((WW => IW.mergeArray(MW, WW)));
        const CW = [...RW.data].map(((WW, MW) => wW.type._parseSync(new jR(RW, WW, RW.path, MW))));
        return IW.mergeArray(MW, CW)
      }
      get element() {
        return this._def.type
      }
      min(WW, RW) {
        return new RR({
          ...this._def,
          minLength: {
            value: WW,
            message: XW.toString(RW)
          }
        })
      }
      max(WW, RW) {
        return new RR({
          ...this._def,
          maxLength: {
            value: WW,
            message: XW.toString(RW)
          }
        })
      }
      length(WW, RW) {
        return new RR({
          ...this._def,
          exactLength: {
            value: WW,
            message: XW.toString(RW)
          }
        })
      }
      nonempty(WW) {
        return this.min(1, WW)
      }
    }

    function MR(WW) {
      if (WW instanceof wR) {
        const RW = {};
        for (const MW in WW.shape) {
          const wW = WW.shape[MW];
          RW[MW] = lR.create(MR(wW))
        }
        return new wR({
          ...WW._def,
          shape: () => RW
        })
      }
      return WW instanceof RR ? new RR({
        ...WW._def,
        type: MR(WW.element)
      }) : WW instanceof lR ? lR.create(MR(WW.unwrap())) : WW instanceof FR ? FR.create(MR(WW.unwrap())) : WW instanceof NR ? NR.create(WW.items.map((WW => MR(WW)))) : WW
    }
    RR.create = (WW, RW) => new RR({
      type: WW,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: dR.ZodArray,
      ...aR(RW)
    });
    class wR extends sW {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const WW = this._def.shape(),
          RW = bR.objectKeys(WW);
        return this._cached = {
          shape: WW,
          keys: RW
        }
      }
      _parse(WW) {
        if (this._getType(WW) !== eW.object) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.object,
            received: RW.parsedType
          }), oW
        }
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW), {
          shape: wW,
          keys: CW
        } = this._getCached(), zR = [];
        if (!(this._def.catchall instanceof SW && "strip" === this._def.unknownKeys))
          for (const bR in MW.data) CW.includes(bR) || zR.push(bR);
        const AW = [];
        for (const bR of CW) {
          const WW = wW[bR],
            RW = MW.data[bR];
          AW.push({
            key: {
              status: "valid",
              value: bR
            },
            value: WW._parse(new jR(MW, RW, MW.path, bR)),
            alwaysSet: bR in MW.data
          })
        }
        if (this._def.catchall instanceof SW) {
          const WW = this._def.unknownKeys;
          if ("passthrough" === WW)
            for (const RW of zR) AW.push({
              key: {
                status: "valid",
                value: RW
              },
              value: {
                status: "valid",
                value: MW.data[RW]
              }
            });
          else if ("strict" === WW) zR.length > 0 && (PW(MW, {
            code: tR.unrecognized_keys,
            keys: zR
          }), RW.Gw());
          else if ("strip" !== WW) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const WW = this._def.catchall;
          for (const RW of zR) {
            const wW = MW.data[RW];
            AW.push({
              key: {
                status: "valid",
                value: RW
              },
              value: WW._parse(new jR(MW, wW, MW.path, RW)),
              alwaysSet: RW in MW.data
            })
          }
        }
        return MW.common.async ? Promise.resolve().then((async () => {
          const WW = [];
          for (const RW of AW) {
            const MW = await RW.key;
            WW.push({
              key: MW,
              value: await RW.value,
              alwaysSet: RW.alwaysSet
            })
          }
          return WW
        })).then((WW => IW.mergeObjectSync(RW, WW))) : IW.mergeObjectSync(RW, AW)
      }
      get shape() {
        return this._def.shape()
      }
      strict(WW) {
        return XW.errToObj, new wR({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== WW ? {
            errorMap: (RW, MW) => {
              var wW, CW, zR, AW;
              const bR = null !== (zR = null === (CW = (wW = this._def).errorMap) || void 0 === CW ? void 0 : CW.call(wW, RW, MW).message) && void 0 !== zR ? zR : MW.defaultError;
              return "unrecognized_keys" === RW.code ? {
                message: null !== (AW = XW.errToObj(WW).message) && void 0 !== AW ? AW : bR
              } : {
                message: bR
              }
            }
          } : {}
        })
      }
      strip() {
        return new wR({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new wR({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(WW) {
        return new wR({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...WW
          })
        })
      }
      merge(WW) {
        return new wR({
          unknownKeys: WW._def.unknownKeys,
          catchall: WW._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...WW._def.shape()
          }),
          typeName: dR.ZodObject
        })
      }
      setKey(WW, RW) {
        return this.augment({
          [WW]: RW
        })
      }
      catchall(WW) {
        return new wR({
          ...this._def,
          catchall: WW
        })
      }
      WM(WW) {
        const RW = {};
        return bR.objectKeys(WW).forEach((MW => {
          WW[MW] && this.shape[MW] && (RW[MW] = this.shape[MW])
        })), new wR({
          ...this._def,
          shape: () => RW
        })
      }
      omit(WW) {
        const RW = {};
        return bR.objectKeys(this.shape).forEach((MW => {
          WW[MW] || (RW[MW] = this.shape[MW])
        })), new wR({
          ...this._def,
          shape: () => RW
        })
      }
      deepPartial() {
        return MR(this)
      }
      partial(WW) {
        const RW = {};
        return bR.objectKeys(this.shape).forEach((MW => {
          const wW = this.shape[MW];
          WW && !WW[MW] ? RW[MW] = wW : RW[MW] = wW.optional()
        })), new wR({
          ...this._def,
          shape: () => RW
        })
      }
      required(WW) {
        const RW = {};
        return bR.objectKeys(this.shape).forEach((MW => {
          if (WW && !WW[MW]) RW[MW] = this.shape[MW];
          else {
            let WW = this.shape[MW];
            for (; WW instanceof lR;) WW = WW._def.innerType;
            RW[MW] = WW
          }
        })), new wR({
          ...this._def,
          shape: () => RW
        })
      }
      keyof() {
        return YR(bR.objectKeys(this.shape))
      }
    }
    wR.create = (WW, RW) => new wR({
      shape: () => WW,
      unknownKeys: "strip",
      catchall: SW.create(),
      typeName: dR.ZodObject,
      ...aR(RW)
    }), wR.strictCreate = (WW, RW) => new wR({
      shape: () => WW,
      unknownKeys: "strict",
      catchall: SW.create(),
      typeName: dR.ZodObject,
      ...aR(RW)
    }), wR.lazycreate = (WW, RW) => new wR({
      shape: WW,
      unknownKeys: "strip",
      catchall: SW.create(),
      typeName: dR.ZodObject,
      ...aR(RW)
    });
    class CR extends sW {
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW), MW = this._def.options;
        if (RW.common.async) return Promise.all(MW.map((async WW => {
          const MW = {
            ...RW,
            common: {
              ...RW.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await WW._parseAsync({
              data: RW.data,
              path: RW.path,
              parent: MW
            }),
            ctx: MW
          }
        }))).then((function(WW) {
          for (const RW of WW)
            if ("valid" === RW.result.status) return RW.result;
          for (const wW of WW)
            if ("Gw" === wW.result.status) return RW.common.issues.push(...wW.ctx.common.issues), wW.result;
          const MW = WW.map((WW => new TW(WW.ctx.common.issues)));
          return PW(RW, {
            code: tR.invalid_union,
            unionErrors: MW
          }), oW
        }));
        {
          let WW;
          const wW = [];
          for (const zR of MW) {
            const MW = {
                ...RW,
                common: {
                  ...RW.common,
                  issues: []
                },
                parent: null
              },
              CW = zR._parseSync({
                data: RW.data,
                path: RW.path,
                parent: MW
              });
            if ("valid" === CW.status) return CW;
            "Gw" !== CW.status || WW || (WW = {
              result: CW,
              ctx: MW
            }), MW.common.issues.length && wW.push(MW.common.issues)
          }
          if (WW) return RW.common.issues.push(...WW.ctx.common.issues), WW.result;
          const CW = wW.map((WW => new TW(WW)));
          return PW(RW, {
            code: tR.invalid_union,
            unionErrors: CW
          }), oW
        }
      }
      get options() {
        return this._def.options
      }
    }
    CR.create = (WW, RW) => new CR({
      options: WW,
      typeName: dR.ZodUnion,
      ...aR(RW)
    });
    const zM = WW => WW instanceof gM ? zM(WW.schema) : WW instanceof oR ? zM(WW.innerType()) : WW instanceof iM ? [WW.value] : WW instanceof JR ? WW.options : WW instanceof PR ? Object.keys(WW.enum) : WW instanceof fR ? zM(WW._def.innerType) : WW instanceof HW ? [void 0] : WW instanceof DW ? [null] : null;
    class AR extends sW {
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW);
        if (RW.parsedType !== eW.object) return PW(RW, {
          code: tR.invalid_type,
          expected: eW.object,
          received: RW.parsedType
        }), oW;
        const MW = this.discriminator,
          wW = RW.data[MW],
          CW = this.optionsMap.get(wW);
        return CW ? RW.common.async ? CW._parseAsync({
          data: RW.data,
          path: RW.path,
          parent: RW
        }) : CW._parseSync({
          data: RW.data,
          path: RW.path,
          parent: RW
        }) : (PW(RW, {
          code: tR.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [MW]
        }), oW)
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
      static create(WW, RW, MW) {
        const wW = new Map;
        for (const CW of RW) {
          const RW = zM(CW.shape[WW]);
          if (!RW) throw new Error(`A discriminator value for key \`${WW}\` could not be extracted from all schema options`);
          for (const MW of RW) {
            if (wW.has(MW)) throw new Error(`Discriminator property ${String(WW)} has duplicate value ${String(MW)}`);
            wW.set(MW, CW)
          }
        }
        return new AR({
          typeName: dR.ZodDiscriminatedUnion,
          discriminator: WW,
          options: RW,
          optionsMap: wW,
          ...aR(MW)
        })
      }
    }

    function bM(WW, RW) {
      const MW = BW(WW),
        wW = BW(RW);
      if (WW === RW) return {
        valid: !0,
        data: WW
      };
      if (MW === eW.object && wW === eW.object) {
        const MW = bR.objectKeys(RW),
          wW = bR.objectKeys(WW).filter((WW => -1 !== MW.indexOf(WW))),
          CW = {
            ...WW,
            ...RW
          };
        for (const zR of wW) {
          const MW = bM(WW[zR], RW[zR]);
          if (!MW.valid) return {
            valid: !1
          };
          CW[zR] = MW.data
        }
        return {
          valid: !0,
          data: CW
        }
      }
      if (MW === eW.array && wW === eW.array) {
        if (WW.length !== RW.length) return {
          valid: !1
        };
        const MW = [];
        for (let wW = 0; wW < WW.length; wW++) {
          const CW = bM(WW[wW], RW[wW]);
          if (!CW.valid) return {
            valid: !1
          };
          MW.push(CW.data)
        }
        return {
          valid: !0,
          data: MW
        }
      }
      return MW === eW.date && wW === eW.date && +WW === +RW ? {
        valid: !0,
        data: WW
      } : {
        valid: !1
      }
    }
    class yM extends sW {
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW), wW = (WW, wW) => {
          if (fW(WW) || fW(wW)) return oW;
          const CW = bM(WW.value, wW.value);
          return CW.valid ? ((QW(WW) || QW(wW)) && RW.Gw(), {
            status: RW.value,
            value: CW.data
          }) : (PW(MW, {
            code: tR.invalid_intersection_types
          }), oW)
        };
        return MW.common.async ? Promise.all([this._def.left._parseAsync({
          data: MW.data,
          path: MW.path,
          parent: MW
        }), this._def.right._parseAsync({
          data: MW.data,
          path: MW.path,
          parent: MW
        })]).then((WW => {
          let [RW, MW] = WW;
          return wW(RW, MW)
        })) : wW(this._def.left._parseSync({
          data: MW.data,
          path: MW.path,
          parent: MW
        }), this._def.right._parseSync({
          data: MW.data,
          path: MW.path,
          parent: MW
        }))
      }
    }
    yM.create = (WW, RW, MW) => new yM({
      left: WW,
      right: RW,
      typeName: dR.ZodIntersection,
      ...aR(MW)
    });
    class NR extends sW {
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW);
        if (MW.parsedType !== eW.array) return PW(MW, {
          code: tR.invalid_type,
          expected: eW.array,
          received: MW.parsedType
        }), oW;
        if (MW.data.length < this._def.items.length) return PW(MW, {
          code: tR.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), oW;
        !this._def.rest && MW.data.length > this._def.items.length && (PW(MW, {
          code: tR.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), RW.Gw());
        const wW = [...MW.data].map(((WW, RW) => {
          const wW = this._def.items[RW] || this._def.rest;
          return wW ? wW._parse(new jR(MW, WW, MW.path, RW)) : null
        })).filter((WW => !!WW));
        return MW.common.async ? Promise.all(wW).then((WW => IW.mergeArray(RW, WW))) : IW.mergeArray(RW, wW)
      }
      get items() {
        return this._def.items
      }
      rest(WW) {
        return new NR({
          ...this._def,
          rest: WW
        })
      }
    }
    NR.create = (WW, RW) => {
      if (!Array.isArray(WW)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new NR({
        items: WW,
        typeName: dR.ZodTuple,
        rest: null,
        ...aR(RW)
      })
    };
    class eR extends sW {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW);
        if (MW.parsedType !== eW.object) return PW(MW, {
          code: tR.invalid_type,
          expected: eW.object,
          received: MW.parsedType
        }), oW;
        const wW = [],
          CW = this._def.keyType,
          zR = this._def.valueType;
        for (const AW in MW.data) wW.push({
          key: CW._parse(new jR(MW, AW, MW.path, AW)),
          value: zR._parse(new jR(MW, MW.data[AW], MW.path, AW))
        });
        return MW.common.async ? IW.mergeObjectAsync(RW, wW) : IW.mergeObjectSync(RW, wW)
      }
      get element() {
        return this._def.valueType
      }
      static create(WW, RW, MW) {
        return new eR(RW instanceof sW ? {
          keyType: WW,
          valueType: RW,
          typeName: dR.ZodRecord,
          ...aR(MW)
        } : {
          keyType: vR.create(),
          valueType: WW,
          typeName: dR.ZodRecord,
          ...aR(RW)
        })
      }
    }
    class BR extends sW {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW);
        if (MW.parsedType !== eW.map) return PW(MW, {
          code: tR.invalid_type,
          expected: eW.map,
          received: MW.parsedType
        }), oW;
        const wW = this._def.keyType,
          CW = this._def.valueType,
          zR = [...MW.data.entries()].map(((WW, RW) => {
            let [zR, AW] = WW;
            return {
              key: wW._parse(new jR(MW, zR, MW.path, [RW, "key"])),
              value: CW._parse(new jR(MW, AW, MW.path, [RW, "value"]))
            }
          }));
        if (MW.common.async) {
          const WW = new Map;
          return Promise.resolve().then((async () => {
            for (const MW of zR) {
              const wW = await MW.key,
                CW = await MW.value;
              if ("aborted" === wW.status || "aborted" === CW.status) return oW;
              "Gw" !== wW.status && "Gw" !== CW.status || RW.Gw(), WW.set(wW.value, CW.value)
            }
            return {
              status: RW.value,
              value: WW
            }
          }))
        } {
          const WW = new Map;
          for (const MW of zR) {
            const wW = MW.key,
              CW = MW.value;
            if ("aborted" === wW.status || "aborted" === CW.status) return oW;
            "Gw" !== wW.status && "Gw" !== CW.status || RW.Gw(), WW.set(wW.value, CW.value)
          }
          return {
            status: RW.value,
            value: WW
          }
        }
      }
    }
    BR.create = (WW, RW, MW) => new BR({
      valueType: RW,
      keyType: WW,
      typeName: dR.ZodMap,
      ...aR(MW)
    });
    class tM extends sW {
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW);
        if (MW.parsedType !== eW.set) return PW(MW, {
          code: tR.invalid_type,
          expected: eW.set,
          received: MW.parsedType
        }), oW;
        const wW = this._def;
        null !== wW.minSize && MW.data.size < wW.minSize.value && (PW(MW, {
          code: tR.too_small,
          minimum: wW.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: wW.minSize.message
        }), RW.Gw()), null !== wW.maxSize && MW.data.size > wW.maxSize.value && (PW(MW, {
          code: tR.too_big,
          maximum: wW.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: wW.maxSize.message
        }), RW.Gw());
        const CW = this._def.valueType;

        function zR(WW) {
          const MW = new Set;
          for (const wW of WW) {
            if ("aborted" === wW.status) return oW;
            "Gw" === wW.status && RW.Gw(), MW.add(wW.value)
          }
          return {
            status: RW.value,
            value: MW
          }
        }
        const AW = [...MW.data.values()].map(((WW, RW) => CW._parse(new jR(MW, WW, MW.path, RW))));
        return MW.common.async ? Promise.all(AW).then((WW => zR(WW))) : zR(AW)
      }
      min(WW, RW) {
        return new tM({
          ...this._def,
          minSize: {
            value: WW,
            message: XW.toString(RW)
          }
        })
      }
      max(WW, RW) {
        return new tM({
          ...this._def,
          maxSize: {
            value: WW,
            message: XW.toString(RW)
          }
        })
      }
      size(WW, RW) {
        return this.min(WW, RW).max(WW, RW)
      }
      nonempty(WW) {
        return this.min(1, WW)
      }
    }
    tM.create = (WW, RW) => new tM({
      valueType: WW,
      minSize: null,
      maxSize: null,
      typeName: dR.ZodSet,
      ...aR(RW)
    });
    class TR extends sW {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW);
        if (RW.parsedType !== eW.function) return PW(RW, {
          code: tR.invalid_type,
          expected: eW.function,
          received: RW.parsedType
        }), oW;

        function MW(WW, MW) {
          return JW({
            data: WW,
            path: RW.path,
            errorMaps: [RW.common.contextualErrorMap, RW.schemaErrorMap, YW(), gR].filter((WW => !!WW)),
            issueData: {
              code: tR.invalid_arguments,
              argumentsError: MW
            }
          })
        }

        function wW(WW, MW) {
          return JW({
            data: WW,
            path: RW.path,
            errorMaps: [RW.common.contextualErrorMap, RW.schemaErrorMap, YW(), gR].filter((WW => !!WW)),
            issueData: {
              code: tR.invalid_return_type,
              returnTypeError: MW
            }
          })
        }
        const CW = {
            errorMap: RW.common.contextualErrorMap
          },
          zR = RW.data;
        if (this._def.returns instanceof IR) {
          const WW = this;
          return FW((async function() {
            for (var RW = arguments.length, AW = new Array(RW), bR = 0; bR < RW; bR++) AW[bR] = arguments[bR];
            const yR = new TW([]),
              NW = await WW._def.args.parseAsync(AW, CW).catch((WW => {
                throw yR.addIssue(MW(AW, WW)), yR
              })),
              eW = await Reflect.apply(zR, this, NW);
            return await WW._def.returns._def.type.parseAsync(eW, CW).catch((WW => {
              throw yR.addIssue(wW(eW, WW)), yR
            }))
          }))
        } {
          const WW = this;
          return FW((function() {
            for (var RW = arguments.length, AW = new Array(RW), bR = 0; bR < RW; bR++) AW[bR] = arguments[bR];
            const yR = WW._def.args.safeParse(AW, CW);
            if (!yR.success) throw new TW([MW(AW, yR.error)]);
            const NW = Reflect.apply(zR, this, yR.data),
              eW = WW._def.returns.safeParse(NW, CW);
            if (!eW.success) throw new TW([wW(NW, eW.error)]);
            return eW.data
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
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return new TR({
          ...this._def,
          args: NR.create(RW).rest(ZW.create())
        })
      }
      returns(WW) {
        return new TR({
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
      static create(WW, RW, MW) {
        return new TR({
          args: WW || NR.create([]).rest(ZW.create()),
          returns: RW || ZW.create(),
          typeName: dR.ZodFunction,
          ...aR(MW)
        })
      }
    }
    class gM extends sW {
      get schema() {
        return this._def.getter()
      }
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW);
        return this._def.getter()._parse({
          data: RW.data,
          path: RW.path,
          parent: RW
        })
      }
    }
    gM.create = (WW, RW) => new gM({
      getter: WW,
      typeName: dR.ZodLazy,
      ...aR(RW)
    });
    class iM extends sW {
      _parse(WW) {
        if (WW.data !== this._def.value) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            received: RW.data,
            code: tR.invalid_literal,
            expected: this._def.value
          }), oW
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

    function YR(WW, RW) {
      return new JR({
        values: WW,
        typeName: dR.ZodEnum,
        ...aR(RW)
      })
    }
    iM.create = (WW, RW) => new iM({
      value: WW,
      typeName: dR.ZodLiteral,
      ...aR(RW)
    });
    class JR extends sW {
      _parse(WW) {
        if ("string" !== typeof WW.data) {
          const RW = this._getOrReturnCtx(WW),
            MW = this._def.values;
          return PW(RW, {
            expected: bR.joinValues(MW),
            received: RW.parsedType,
            code: tR.invalid_type
          }), oW
        }
        if (-1 === this._def.values.indexOf(WW.data)) {
          const RW = this._getOrReturnCtx(WW),
            MW = this._def.values;
          return PW(RW, {
            received: RW.data,
            code: tR.invalid_enum_value,
            options: MW
          }), oW
        }
        return FW(WW.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const WW = {};
        for (const RW of this._def.values) WW[RW] = RW;
        return WW
      }
      get Values() {
        const WW = {};
        for (const RW of this._def.values) WW[RW] = RW;
        return WW
      }
      get Enum() {
        const WW = {};
        for (const RW of this._def.values) WW[RW] = RW;
        return WW
      }
      extract(WW) {
        return JR.create(WW)
      }
      exclude(WW) {
        return JR.create(this.options.filter((RW => !WW.includes(RW))))
      }
    }
    JR.create = YR;
    class PR extends sW {
      _parse(WW) {
        const RW = bR.getValidEnumValues(this._def.values),
          MW = this._getOrReturnCtx(WW);
        if (MW.parsedType !== eW.string && MW.parsedType !== eW.number) {
          const WW = bR.objectValues(RW);
          return PW(MW, {
            expected: bR.joinValues(WW),
            received: MW.parsedType,
            code: tR.invalid_type
          }), oW
        }
        if (-1 === RW.indexOf(WW.data)) {
          const WW = bR.objectValues(RW);
          return PW(MW, {
            received: MW.data,
            code: tR.invalid_enum_value,
            options: WW
          }), oW
        }
        return FW(WW.data)
      }
      get enum() {
        return this._def.values
      }
    }
    PR.create = (WW, RW) => new PR({
      values: WW,
      typeName: dR.ZodNativeEnum,
      ...aR(RW)
    });
    class IR extends sW {
      unwrap() {
        return this._def.type
      }
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW);
        if (RW.parsedType !== eW.promise && !1 === RW.common.async) return PW(RW, {
          code: tR.invalid_type,
          expected: eW.promise,
          received: RW.parsedType
        }), oW;
        const MW = RW.parsedType === eW.promise ? RW.data : Promise.resolve(RW.data);
        return FW(MW.then((WW => this._def.type.parseAsync(WW, {
          path: RW.path,
          errorMap: RW.common.contextualErrorMap
        }))))
      }
    }
    IR.create = (WW, RW) => new IR({
      type: WW,
      typeName: dR.ZodPromise,
      ...aR(RW)
    });
    class oR extends sW {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === dR.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW), wW = this._def.effect || null, CW = {
          addIssue: WW => {
            PW(MW, WW), WW.fatal ? RW.abort() : RW.Gw()
          },
          get path() {
            return MW.path
          }
        };
        if (CW.addIssue = CW.addIssue.bind(CW), "preprocess" === wW.type) {
          const WW = wW.transform(MW.data, CW);
          return MW.common.issues.length ? {
            status: "Gw",
            value: MW.data
          } : MW.common.async ? Promise.resolve(WW).then((WW => this._def.schema._parseAsync({
            data: WW,
            path: MW.path,
            parent: MW
          }))) : this._def.schema._parseSync({
            data: WW,
            path: MW.path,
            parent: MW
          })
        }
        if ("refinement" === wW.type) {
          const WW = WW => {
            const RW = wW.refinement(WW, CW);
            if (MW.common.async) return Promise.resolve(RW);
            if (RW instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return WW
          };
          if (!1 === MW.common.async) {
            const wW = this._def.schema._parseSync({
              data: MW.data,
              path: MW.path,
              parent: MW
            });
            return "aborted" === wW.status ? oW : ("Gw" === wW.status && RW.Gw(), WW(wW.value), {
              status: RW.value,
              value: wW.value
            })
          }
          return this._def.schema._parseAsync({
            data: MW.data,
            path: MW.path,
            parent: MW
          }).then((MW => "aborted" === MW.status ? oW : ("Gw" === MW.status && RW.Gw(), WW(MW.value).then((() => ({
            status: RW.value,
            value: MW.value
          }))))))
        }
        if ("transform" === wW.type) {
          if (!1 === MW.common.async) {
            const WW = this._def.schema._parseSync({
              data: MW.data,
              path: MW.path,
              parent: MW
            });
            if (!rR(WW)) return WW;
            const zR = wW.transform(WW.value, CW);
            if (zR instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: RW.value,
              value: zR
            }
          }
          return this._def.schema._parseAsync({
            data: MW.data,
            path: MW.path,
            parent: MW
          }).then((WW => rR(WW) ? Promise.resolve(wW.transform(WW.value, CW)).then((WW => ({
            status: RW.value,
            value: WW
          }))) : WW))
        }
        bR.assertNever(wW)
      }
    }
    oR.create = (WW, RW, MW) => new oR({
      schema: WW,
      typeName: dR.ZodEffects,
      effect: RW,
      ...aR(MW)
    }), oR.createWithPreprocess = (WW, RW, MW) => new oR({
      schema: RW,
      effect: {
        type: "preprocess",
        transform: WW
      },
      typeName: dR.ZodEffects,
      ...aR(MW)
    });
    class lR extends sW {
      _parse(WW) {
        return this._getType(WW) === eW.undefined ? FW(void 0) : this._def.innerType._parse(WW)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    lR.create = (WW, RW) => new lR({
      innerType: WW,
      typeName: dR.ZodOptional,
      ...aR(RW)
    });
    class FR extends sW {
      _parse(WW) {
        return this._getType(WW) === eW.null ? FW(null) : this._def.innerType._parse(WW)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    FR.create = (WW, RW) => new FR({
      innerType: WW,
      typeName: dR.ZodNullable,
      ...aR(RW)
    });
    class fR extends sW {
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW);
        let MW = RW.data;
        return RW.parsedType === eW.undefined && (MW = this._def.defaultValue()), this._def.innerType._parse({
          data: MW,
          path: RW.path,
          parent: RW
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    fR.create = (WW, RW) => new fR({
      innerType: WW,
      typeName: dR.ZodDefault,
      defaultValue: "function" === typeof RW.default ? RW.default : () => RW.default,
      ...aR(RW)
    });
    class QR extends sW {
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW), MW = {
          ...RW,
          common: {
            ...RW.common,
            issues: []
          }
        }, wW = this._def.innerType._parse({
          data: MW.data,
          path: MW.path,
          parent: {
            ...MW
          }
        });
        return cR(wW) ? wW.then((WW => ({
          status: "valid",
          value: "valid" === WW.status ? WW.value : this._def.catchValue({
            get error() {
              return new TW(MW.common.issues)
            },
            input: MW.data
          })
        }))) : {
          status: "valid",
          value: "valid" === wW.status ? wW.value : this._def.catchValue({
            get error() {
              return new TW(MW.common.issues)
            },
            input: MW.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    QR.create = (WW, RW) => new QR({
      innerType: WW,
      typeName: dR.ZodCatch,
      catchValue: "function" === typeof RW.catch ? RW.catch : () => RW.catch,
      ...aR(RW)
    });
    class rM extends sW {
      _parse(WW) {
        if (this._getType(WW) !== eW.nan) {
          const RW = this._getOrReturnCtx(WW);
          return PW(RW, {
            code: tR.invalid_type,
            expected: eW.nan,
            received: RW.parsedType
          }), oW
        }
        return {
          status: "valid",
          value: WW.data
        }
      }
    }
    rM.create = WW => new rM({
      typeName: dR.ZodNaN,
      ...aR(WW)
    });
    const cM = Symbol("zod_brand");
    class XR extends sW {
      _parse(WW) {
        const {
          ctx: RW
        } = this._processInputParams(WW), MW = RW.data;
        return this._def.type._parse({
          data: MW,
          path: RW.path,
          parent: RW
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class jM extends sW {
      _parse(WW) {
        const {
          status: RW,
          ctx: MW
        } = this._processInputParams(WW);
        if (MW.common.async) {
          return (async () => {
            const WW = await this._def.in._parseAsync({
              data: MW.data,
              path: MW.path,
              parent: MW
            });
            return "aborted" === WW.status ? oW : "Gw" === WW.status ? (RW.Gw(), lW(WW.value)) : this._def.out._parseAsync({
              data: WW.value,
              path: MW.path,
              parent: MW
            })
          })()
        } {
          const WW = this._def.in._parseSync({
            data: MW.data,
            path: MW.path,
            parent: MW
          });
          return "aborted" === WW.status ? oW : "Gw" === WW.status ? (RW.Gw(), {
            status: "Gw",
            value: WW.value
          }) : this._def.out._parseSync({
            data: WW.value,
            path: MW.path,
            parent: MW
          })
        }
      }
      static create(WW, RW) {
        return new jM({
          in: WW,
          out: RW,
          typeName: dR.ZodPipeline
        })
      }
    }
    class kM extends sW {
      _parse(WW) {
        const RW = this._def.innerType._parse(WW);
        return rR(RW) && (RW.value = Object.freeze(RW.value)), RW
      }
    }
    kM.create = (WW, RW) => new kM({
      innerType: WW,
      typeName: dR.ZodReadonly,
      ...aR(RW)
    });
    const aM = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          MW = arguments.length > 2 ? arguments[2] : void 0;
        return WW ? qR.create().superRefine(((wW, CW) => {
          var zR, AW;
          if (!WW(wW)) {
            const WW = "function" === typeof RW ? RW(wW) : "string" === typeof RW ? {
                message: RW
              } : RW,
              bR = null === (AW = null !== (zR = WW.fatal) && void 0 !== zR ? zR : MW) || void 0 === AW || AW,
              yR = "string" === typeof WW ? {
                message: WW
              } : WW;
            CW.addIssue({
              code: "custom",
              ...yR,
              fatal: bR
            })
          }
        })) : qR.create()
      },
      sR = {
        object: wR.lazycreate
      };
    var dR;
    ! function(WW) {
      WW.ZodString = "ZodString", WW.ZodNumber = "ZodNumber", WW.ZodNaN = "ZodNaN", WW.ZodBigInt = "ZodBigInt", WW.ZodBoolean = "ZodBoolean", WW.ZodDate = "ZodDate", WW.ZodSymbol = "ZodSymbol", WW.ZodUndefined = "ZodUndefined", WW.ZodNull = "ZodNull", WW.ZodAny = "ZodAny", WW.ZodUnknown = "ZodUnknown", WW.ZodNever = "ZodNever", WW.ZodVoid = "ZodVoid", WW.ZodArray = "ZodArray", WW.ZodObject = "ZodObject", WW.ZodUnion = "ZodUnion", WW.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", WW.ZodIntersection = "ZodIntersection", WW.ZodTuple = "ZodTuple", WW.ZodRecord = "ZodRecord", WW.ZodMap = "ZodMap", WW.ZodSet = "ZodSet", WW.ZodFunction = "ZodFunction", WW.ZodLazy = "ZodLazy", WW.ZodLiteral = "ZodLiteral", WW.ZodEnum = "ZodEnum", WW.ZodEffects = "ZodEffects", WW.ZodNativeEnum = "ZodNativeEnum", WW.ZodOptional = "ZodOptional", WW.ZodNullable = "ZodNullable", WW.ZodDefault = "ZodDefault", WW.ZodCatch = "ZodCatch", WW.ZodPromise = "ZodPromise", WW.ZodBranded = "ZodBranded", WW.ZodPipeline = "ZodPipeline", WW.ZodReadonly = "ZodReadonly"
    }(dR || (dR = {}));
    const pR = vR.create,
      hR = uW.create,
      UR = rM.create,
      ER = OW.create,
      VR = nW.create,
      mM = GW.create,
      xM = LW.create,
      vM = HW.create,
      KR = DW.create,
      uR = qR.create,
      OR = ZW.create,
      nR = SW.create,
      GR = WR.create,
      LR = RR.create,
      HR = wR.create,
      DR = wR.strictCreate,
      qM = CR.create,
      ZR = AR.create,
      SR = yM.create,
      WM = NR.create,
      RM = eR.create,
      MM = BR.create,
      wM = tM.create,
      CM = TR.create,
      zw = gM.create,
      AM = iM.create,
      bw = JR.create,
      yw = PR.create,
      NM = IR.create,
      eM = oR.create,
      BM = lR.create,
      tw = FR.create,
      TM = oR.createWithPreprocess,
      gw = jM.create,
      iw = {
        string: WW => vR.create({
          ...WW,
          coerce: !0
        }),
        number: WW => uW.create({
          ...WW,
          coerce: !0
        }),
        boolean: WW => nW.create({
          ...WW,
          coerce: !0
        }),
        bigint: WW => OW.create({
          ...WW,
          coerce: !0
        }),
        date: WW => GW.create({
          ...WW,
          coerce: !0
        })
      },
      YM = oW;
    var JM = Object.freeze({
        __proto__: null,
        defaultErrorMap: gR,
        setErrorMap: function(WW) {
          iR = WW
        },
        getErrorMap: YW,
        makeIssue: JW,
        EMPTY_PATH: [],
        addIssueToContext: PW,
        ParseStatus: IW,
        INVALID: oW,
        DIRTY: lW,
        OK: FW,
        isAborted: fW,
        isDirty: QW,
        isValid: rR,
        isAsync: cR,
        get util() {
          return bR
        },
        get objectUtil() {
          return yR
        },
        ZodParsedType: eW,
        getParsedType: BW,
        ZodType: sW,
        ZodString: vR,
        ZodNumber: uW,
        ZodBigInt: OW,
        ZodBoolean: nW,
        ZodDate: GW,
        ZodSymbol: LW,
        ZodUndefined: HW,
        ZodNull: DW,
        ZodAny: qR,
        ZodUnknown: ZW,
        ZodNever: SW,
        ZodVoid: WR,
        ZodArray: RR,
        ZodObject: wR,
        ZodUnion: CR,
        ZodDiscriminatedUnion: AR,
        ZodIntersection: yM,
        ZodTuple: NR,
        ZodRecord: eR,
        ZodMap: BR,
        ZodSet: tM,
        ZodFunction: TR,
        ZodLazy: gM,
        ZodLiteral: iM,
        ZodEnum: JR,
        ZodNativeEnum: PR,
        ZodPromise: IR,
        ZodEffects: oR,
        ZodTransformer: oR,
        ZodOptional: lR,
        ZodNullable: FR,
        ZodDefault: fR,
        ZodCatch: QR,
        ZodNaN: rM,
        BRAND: cM,
        ZodBranded: XR,
        ZodPipeline: jM,
        ZodReadonly: kM,
        custom: aM,
        Schema: sW,
        ZodSchema: sW,
        late: sR,
        get ZodFirstPartyTypeKind() {
          return dR
        },
        coerce: iw,
        any: uR,
        array: LR,
        bigint: ER,
        boolean: VR,
        date: mM,
        discriminatedUnion: ZR,
        effect: eM,
        enum: bw,
        function: CM,
        instanceof: function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${WW.name}`
          };
          return aM((RW => RW instanceof WW), RW)
        },
        intersection: SR,
        lazy: zw,
        literal: AM,
        map: MM,
        nan: UR,
        nativeEnum: yw,
        never: nR,
        null: KR,
        nullable: tw,
        number: hR,
        object: HR,
        oboolean: () => VR().optional(),
        onumber: () => hR().optional(),
        optional: BM,
        ostring: () => pR().optional(),
        pipeline: gw,
        preprocess: TM,
        promise: NM,
        record: RM,
        set: wM,
        strictObject: DR,
        string: pR,
        symbol: xM,
        transformer: eM,
        tuple: WM,
        undefined: vM,
        union: qM,
        unknown: OR,
        void: GR,
        NEVER: YM,
        ZodIssueCode: tR,
        quotelessJson: WW => JSON.stringify(WW, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: TW
      }),
      PM = {
        exports: {}
      };
    ! function(WW) {
      var RW = function(WW) {
        var MW = 1e7,
          wW = 9007199254740992,
          CW = tR(wW),
          zR = "0123456789abcdefghijklmnopqrstuvwxyz",
          AW = "function" === typeof BigInt;

        function bR(WW, RW, MW, wW) {
          return "undefined" === typeof WW ? bR[0] : "undefined" !== typeof RW && (10 !== +RW || MW) ? nW(WW, RW, MW, wW) : qR(WW)
        }

        function yR(WW, RW) {
          this.value = WW, this.sign = RW, this.isSmall = !1
        }

        function NW(WW) {
          this.value = WW, this.sign = WW < 0, this.isSmall = !0
        }

        function eW(WW) {
          this.value = WW
        }

        function BW(WW) {
          return -wW < WW && WW < wW
        }

        function tR(WW) {
          return WW < 1e7 ? [WW] : WW < 1e14 ? [WW % 1e7, Math.floor(WW / 1e7)] : [WW % 1e7, Math.floor(WW / 1e7) % 1e7, Math.floor(WW / 1e14)]
        }

        function TW(WW) {
          gR(WW);
          var RW = WW.length;
          if (RW < 4 && aR(WW, CW) < 0) switch (RW) {
            case 0:
              return 0;
            case 1:
              return WW[0];
            case 2:
              return WW[0] + WW[1] * MW;
            default:
              return WW[0] + (WW[1] + WW[2] * MW) * MW
          }
          return WW
        }

        function gR(WW) {
          for (var RW = WW.length; 0 === WW[--RW];);
          WW.length = RW + 1
        }

        function iR(WW) {
          for (var RW = new Array(WW), MW = -1; ++MW < WW;) RW[MW] = 0;
          return RW
        }

        function YW(WW) {
          return WW > 0 ? Math.floor(WW) : Math.ceil(WW)
        }

        function JW(WW, RW) {
          var wW, CW, zR = WW.length,
            AW = RW.length,
            bR = new Array(zR),
            yR = 0,
            NW = MW;
          for (CW = 0; CW < AW; CW++) yR = (wW = WW[CW] + RW[CW] + yR) >= NW ? 1 : 0, bR[CW] = wW - yR * NW;
          for (; CW < zR;) yR = (wW = WW[CW] + yR) === NW ? 1 : 0, bR[CW++] = wW - yR * NW;
          return yR > 0 && bR.push(yR), bR
        }

        function PW(WW, RW) {
          return WW.length >= RW.length ? JW(WW, RW) : JW(RW, WW)
        }

        function IW(WW, RW) {
          var wW, CW, zR = WW.length,
            AW = new Array(zR),
            bR = MW;
          for (CW = 0; CW < zR; CW++) wW = WW[CW] - bR + RW, RW = Math.floor(wW / bR), AW[CW] = wW - RW * bR, RW += 1;
          for (; RW > 0;) AW[CW++] = RW % bR, RW = Math.floor(RW / bR);
          return AW
        }

        function oW(WW, RW) {
          var wW, CW, zR = WW.length,
            AW = RW.length,
            bR = new Array(zR),
            yR = 0,
            NW = MW;
          for (wW = 0; wW < AW; wW++)(CW = WW[wW] - yR - RW[wW]) < 0 ? (CW += NW, yR = 1) : yR = 0, bR[wW] = CW;
          for (wW = AW; wW < zR; wW++) {
            if (!((CW = WW[wW] - yR) < 0)) {
              bR[wW++] = CW;
              break
            }
            CW += NW, bR[wW] = CW
          }
          for (; wW < zR; wW++) bR[wW] = WW[wW];
          return gR(bR), bR
        }

        function lW(WW, RW, wW) {
          var CW, zR, AW = WW.length,
            bR = new Array(AW),
            eW = -RW,
            BW = MW;
          for (CW = 0; CW < AW; CW++) zR = WW[CW] + eW, eW = Math.floor(zR / BW), zR %= BW, bR[CW] = zR < 0 ? zR + BW : zR;
          return "number" === typeof(bR = TW(bR)) ? (wW && (bR = -bR), new NW(bR)) : new yR(bR, wW)
        }

        function FW(WW, RW) {
          var wW, CW, zR, AW, bR = WW.length,
            yR = RW.length,
            NW = iR(bR + yR),
            eW = MW;
          for (zR = 0; zR < bR; ++zR) {
            AW = WW[zR];
            for (var BW = 0; BW < yR; ++BW) wW = AW * RW[BW] + NW[zR + BW], CW = Math.floor(wW / eW), NW[zR + BW] = wW - CW * eW, NW[zR + BW + 1] += CW
          }
          return gR(NW), NW
        }

        function fW(WW, RW) {
          var wW, CW, zR = WW.length,
            AW = new Array(zR),
            bR = MW,
            yR = 0;
          for (CW = 0; CW < zR; CW++) wW = WW[CW] * RW + yR, yR = Math.floor(wW / bR), AW[CW] = wW - yR * bR;
          for (; yR > 0;) AW[CW++] = yR % bR, yR = Math.floor(yR / bR);
          return AW
        }

        function QW(WW, RW) {
          for (var MW = []; RW-- > 0;) MW.push(0);
          return MW.concat(WW)
        }

        function rR(WW, RW) {
          var MW = Math.max(WW.length, RW.length);
          if (MW <= 30) return FW(WW, RW);
          MW = Math.ceil(MW / 2);
          var wW = WW.slice(MW),
            CW = WW.slice(0, MW),
            zR = RW.slice(MW),
            AW = RW.slice(0, MW),
            bR = rR(CW, AW),
            yR = rR(wW, zR),
            NW = rR(PW(CW, wW), PW(AW, zR)),
            eW = PW(PW(bR, QW(oW(oW(NW, bR), yR), MW)), QW(yR, 2 * MW));
          return gR(eW), eW
        }

        function cR(WW, RW, wW) {
          return new yR(WW < MW ? fW(RW, WW) : FW(RW, tR(WW)), wW)
        }

        function XW(WW) {
          var RW, wW, CW, zR, AW = WW.length,
            bR = iR(AW + AW),
            yR = MW;
          for (CW = 0; CW < AW; CW++) {
            wW = 0 - (zR = WW[CW]) * zR;
            for (var NW = CW; NW < AW; NW++) RW = zR * WW[NW] * 2 + bR[CW + NW] + wW, wW = Math.floor(RW / yR), bR[CW + NW] = RW - wW * yR;
            bR[CW + AW] = wW
          }
          return gR(bR), bR
        }

        function jR(WW, RW) {
          var wW, CW, zR, AW, bR = WW.length,
            yR = iR(bR),
            NW = MW;
          for (zR = 0, wW = bR - 1; wW >= 0; --wW) zR = (AW = zR * NW + WW[wW]) - (CW = YW(AW / RW)) * RW, yR[wW] = 0 | CW;
          return [yR, 0 | zR]
        }

        function kR(WW, RW) {
          var wW, CW = qR(RW);
          if (AW) return [new eW(WW.value / CW.value), new eW(WW.value % CW.value)];
          var zR, BW = WW.value,
            JW = CW.value;
          if (0 === JW) throw new Error("Cannot divide by zero");
          if (WW.isSmall) return CW.isSmall ? [new NW(YW(BW / JW)), new NW(BW % JW)] : [bR[0], WW];
          if (CW.isSmall) {
            if (1 === JW) return [WW, bR[0]];
            if (-1 == JW) return [WW.zb(), bR[0]];
            var PW = Math.abs(JW);
            if (PW < MW) {
              zR = TW((wW = jR(BW, PW))[0]);
              var IW = wW[1];
              return WW.sign && (IW = -IW), "number" === typeof zR ? (WW.sign !== CW.sign && (zR = -zR), [new NW(zR), new NW(IW)]) : [new yR(zR, WW.sign !== CW.sign), new NW(IW)]
            }
            JW = tR(PW)
          }
          var lW = aR(BW, JW);
          if (-1 === lW) return [bR[0], WW];
          if (0 === lW) return [bR[WW.sign === CW.sign ? 1 : -1], bR[0]];
          wW = BW.length + JW.length <= 200 ? function(WW, RW) {
            var wW, CW, zR, AW, bR, yR, NW, eW = WW.length,
              BW = RW.length,
              tR = MW,
              gR = iR(RW.length),
              YW = RW[BW - 1],
              JW = Math.ceil(tR / (2 * YW)),
              PW = fW(WW, JW),
              IW = fW(RW, JW);
            for (PW.length <= eW && PW.push(0), IW.push(0), YW = IW[BW - 1], CW = eW - BW; CW >= 0; CW--) {
              for (wW = tR - 1, PW[CW + BW] !== YW && (wW = Math.floor((PW[CW + BW] * tR + PW[CW + BW - 1]) / YW)), zR = 0, AW = 0, yR = IW.length, bR = 0; bR < yR; bR++) zR += wW * IW[bR], NW = Math.floor(zR / tR), AW += PW[CW + bR] - (zR - NW * tR), zR = NW, AW < 0 ? (PW[CW + bR] = AW + tR, AW = -1) : (PW[CW + bR] = AW, AW = 0);
              for (; 0 !== AW;) {
                for (wW -= 1, zR = 0, bR = 0; bR < yR; bR++)(zR += PW[CW + bR] - tR + IW[bR]) < 0 ? (PW[CW + bR] = zR + tR, zR = 0) : (PW[CW + bR] = zR, zR = 1);
                AW += zR
              }
              gR[CW] = wW
            }
            return PW = jR(PW, JW)[0], [TW(gR), TW(PW)]
          }(BW, JW) : function(WW, RW) {
            for (var wW, CW, zR, AW, bR, yR = WW.length, NW = RW.length, eW = [], BW = [], tR = MW; yR;)
              if (BW.unshift(WW[--yR]), gR(BW), aR(BW, RW) < 0) eW.push(0);
              else {
                zR = BW[(CW = BW.length) - 1] * tR + BW[CW - 2], AW = RW[NW - 1] * tR + RW[NW - 2], CW > NW && (zR = (zR + 1) * tR), wW = Math.ceil(zR / AW);
                do {
                  if (aR(bR = fW(RW, wW), BW) <= 0) break;
                  wW--
                } while (wW);
                eW.push(wW), BW = oW(BW, bR)
              } return eW.reverse(), [TW(eW), TW(BW)]
          }(BW, JW), zR = wW[0];
          var FW = WW.sign !== CW.sign,
            QW = wW[1],
            rR = WW.sign;
          return "number" === typeof zR ? (FW && (zR = -zR), zR = new NW(zR)) : zR = new yR(zR, FW), "number" === typeof QW ? (rR && (QW = -QW), QW = new NW(QW)) : QW = new yR(QW, rR), [zR, QW]
        }

        function aR(WW, RW) {
          if (WW.length !== RW.length) return WW.length > RW.length ? 1 : -1;
          for (var MW = WW.length - 1; MW >= 0; MW--)
            if (WW[MW] !== RW[MW]) return WW[MW] > RW[MW] ? 1 : -1;
          return 0
        }

        function sW(WW) {
          var RW = WW.abs();
          return !RW.isUnit() && (!!(RW.equals(2) || RW.equals(3) || RW.equals(5)) || !(RW.isEven() || RW.isDivisibleBy(3) || RW.isDivisibleBy(5)) && (!!RW.lesser(49) || void 0))
        }

        function dW(WW, MW) {
          for (var wW, CW, zR, AW = WW.prev(), bR = AW, yR = 0; bR.isEven();) bR = bR.divide(2), yR++;
          WW: for (CW = 0; CW < MW.length; CW++)
            if (!WW.lesser(MW[CW]) && !(zR = RW(MW[CW]).modPow(bR, WW)).isUnit() && !zR.equals(AW)) {
              for (wW = yR - 1; 0 != wW; wW--) {
                if ((zR = zR.square().mod(WW)).isUnit()) return !1;
                if (zR.equals(AW)) continue WW
              }
              return !1
            }
          return !0
        }
        yR.prototype = Object.create(bR.prototype), NW.prototype = Object.create(bR.prototype), eW.prototype = Object.create(bR.prototype), yR.prototype.add = function(WW) {
          var RW = qR(WW);
          if (this.sign !== RW.sign) return this.subtract(RW.zb());
          var MW = this.value,
            wW = RW.value;
          return RW.isSmall ? new yR(IW(MW, Math.abs(wW)), this.sign) : new yR(PW(MW, wW), this.sign)
        }, yR.prototype.plus = yR.prototype.add, NW.prototype.add = function(WW) {
          var RW = qR(WW),
            MW = this.value;
          if (MW < 0 !== RW.sign) return this.subtract(RW.zb());
          var wW = RW.value;
          if (RW.isSmall) {
            if (BW(MW + wW)) return new NW(MW + wW);
            wW = tR(Math.abs(wW))
          }
          return new yR(IW(wW, Math.abs(MW)), MW < 0)
        }, NW.prototype.plus = NW.prototype.add, eW.prototype.add = function(WW) {
          return new eW(this.value + qR(WW).value)
        }, eW.prototype.plus = eW.prototype.add, yR.prototype.subtract = function(WW) {
          var RW = qR(WW);
          if (this.sign !== RW.sign) return this.add(RW.zb());
          var MW = this.value,
            wW = RW.value;
          return RW.isSmall ? lW(MW, Math.abs(wW), this.sign) : function(WW, RW, MW) {
            var wW;
            return aR(WW, RW) >= 0 ? wW = oW(WW, RW) : (wW = oW(RW, WW), MW = !MW), "number" === typeof(wW = TW(wW)) ? (MW && (wW = -wW), new NW(wW)) : new yR(wW, MW)
          }(MW, wW, this.sign)
        }, yR.prototype.minus = yR.prototype.subtract, NW.prototype.subtract = function(WW) {
          var RW = qR(WW),
            MW = this.value;
          if (MW < 0 !== RW.sign) return this.add(RW.zb());
          var wW = RW.value;
          return RW.isSmall ? new NW(MW - wW) : lW(wW, Math.abs(MW), MW >= 0)
        }, NW.prototype.minus = NW.prototype.subtract, eW.prototype.subtract = function(WW) {
          return new eW(this.value - qR(WW).value)
        }, eW.prototype.minus = eW.prototype.subtract, yR.prototype.zb = function() {
          return new yR(this.value, !this.sign)
        }, NW.prototype.zb = function() {
          var WW = this.sign,
            RW = new NW(-this.value);
          return RW.sign = !WW, RW
        }, eW.prototype.zb = function() {
          return new eW(-this.value)
        }, yR.prototype.abs = function() {
          return new yR(this.value, !1)
        }, NW.prototype.abs = function() {
          return new NW(Math.abs(this.value))
        }, eW.prototype.abs = function() {
          return new eW(this.value >= 0 ? this.value : -this.value)
        }, yR.prototype.multiply = function(WW) {
          var RW, wW, CW, zR = qR(WW),
            AW = this.value,
            NW = zR.value,
            eW = this.sign !== zR.sign;
          if (zR.isSmall) {
            if (0 === NW) return bR[0];
            if (1 === NW) return this;
            if (-1 === NW) return this.zb();
            if ((RW = Math.abs(NW)) < MW) return new yR(fW(AW, RW), eW);
            NW = tR(RW)
          }
          return wW = AW.length, CW = NW.length, new yR(-.012 * wW - .012 * CW + 15e-6 * wW * CW > 0 ? rR(AW, NW) : FW(AW, NW), eW)
        }, yR.prototype.times = yR.prototype.multiply, NW.prototype._multiplyBySmall = function(WW) {
          return BW(WW.value * this.value) ? new NW(WW.value * this.value) : cR(Math.abs(WW.value), tR(Math.abs(this.value)), this.sign !== WW.sign)
        }, yR.prototype._multiplyBySmall = function(WW) {
          return 0 === WW.value ? bR[0] : 1 === WW.value ? this : -1 === WW.value ? this.zb() : cR(Math.abs(WW.value), this.value, this.sign !== WW.sign)
        }, NW.prototype.multiply = function(WW) {
          return qR(WW)._multiplyBySmall(this)
        }, NW.prototype.times = NW.prototype.multiply, eW.prototype.multiply = function(WW) {
          return new eW(this.value * qR(WW).value)
        }, eW.prototype.times = eW.prototype.multiply, yR.prototype.square = function() {
          return new yR(XW(this.value), !1)
        }, NW.prototype.square = function() {
          var WW = this.value * this.value;
          return BW(WW) ? new NW(WW) : new yR(XW(tR(Math.abs(this.value))), !1)
        }, eW.prototype.square = function(WW) {
          return new eW(this.value * this.value)
        }, yR.prototype.divmod = function(WW) {
          var RW = kR(this, WW);
          return {
            quotient: RW[0],
            remainder: RW[1]
          }
        }, eW.prototype.divmod = NW.prototype.divmod = yR.prototype.divmod, yR.prototype.divide = function(WW) {
          return kR(this, WW)[0]
        }, eW.prototype.over = eW.prototype.divide = function(WW) {
          return new eW(this.value / qR(WW).value)
        }, NW.prototype.over = NW.prototype.divide = yR.prototype.over = yR.prototype.divide, yR.prototype.mod = function(WW) {
          return kR(this, WW)[1]
        }, eW.prototype.mod = eW.prototype.remainder = function(WW) {
          return new eW(this.value % qR(WW).value)
        }, NW.prototype.remainder = NW.prototype.mod = yR.prototype.remainder = yR.prototype.mod, yR.prototype.pow = function(WW) {
          var RW, MW, wW, CW = qR(WW),
            zR = this.value,
            AW = CW.value;
          if (0 === AW) return bR[1];
          if (0 === zR) return bR[0];
          if (1 === zR) return bR[1];
          if (-1 === zR) return CW.isEven() ? bR[1] : bR[-1];
          if (CW.sign) return bR[0];
          if (!CW.isSmall) throw new Error("The exponent " + CW.toString() + " is too large.");
          if (this.isSmall && BW(RW = Math.pow(zR, AW))) return new NW(YW(RW));
          for (MW = this, wW = bR[1]; !0 & AW && (wW = wW.times(MW), --AW), 0 !== AW;) AW /= 2, MW = MW.square();
          return wW
        }, NW.prototype.pow = yR.prototype.pow, eW.prototype.pow = function(WW) {
          var RW = qR(WW),
            MW = this.value,
            wW = RW.value,
            CW = BigInt(0),
            zR = BigInt(1),
            AW = BigInt(2);
          if (wW === CW) return bR[1];
          if (MW === CW) return bR[0];
          if (MW === zR) return bR[1];
          if (MW === BigInt(-1)) return RW.isEven() ? bR[1] : bR[-1];
          if (RW.isNegative()) return new eW(CW);
          for (var yR = this, NW = bR[1];
            (wW & zR) === zR && (NW = NW.times(yR), --wW), wW !== CW;) wW /= AW, yR = yR.square();
          return NW
        }, yR.prototype.modPow = function(WW, RW) {
          if (WW = qR(WW), (RW = qR(RW)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var MW = bR[1],
            wW = this.mod(RW);
          for (WW.isNegative() && (WW = WW.multiply(bR[-1]), wW = wW.modInv(RW)); WW.isPositive();) {
            if (wW.isZero()) return bR[0];
            WW.isOdd() && (MW = MW.multiply(wW).mod(RW)), WW = WW.divide(2), wW = wW.square().mod(RW)
          }
          return MW
        }, eW.prototype.modPow = NW.prototype.modPow = yR.prototype.modPow, yR.prototype.compareAbs = function(WW) {
          var RW = qR(WW),
            MW = this.value,
            wW = RW.value;
          return RW.isSmall ? 1 : aR(MW, wW)
        }, NW.prototype.compareAbs = function(WW) {
          var RW = qR(WW),
            MW = Math.abs(this.value),
            wW = RW.value;
          return RW.isSmall ? MW === (wW = Math.abs(wW)) ? 0 : MW > wW ? 1 : -1 : -1
        }, eW.prototype.compareAbs = function(WW) {
          var RW = this.value,
            MW = qR(WW).value;
          return (RW = RW >= 0 ? RW : -RW) === (MW = MW >= 0 ? MW : -MW) ? 0 : RW > MW ? 1 : -1
        }, yR.prototype.compare = function(WW) {
          if (WW === 1 / 0) return -1;
          if (WW === -1 / 0) return 1;
          var RW = qR(WW),
            MW = this.value,
            wW = RW.value;
          return this.sign !== RW.sign ? RW.sign ? 1 : -1 : RW.isSmall ? this.sign ? -1 : 1 : aR(MW, wW) * (this.sign ? -1 : 1)
        }, yR.prototype.compareTo = yR.prototype.compare, NW.prototype.compare = function(WW) {
          if (WW === 1 / 0) return -1;
          if (WW === -1 / 0) return 1;
          var RW = qR(WW),
            MW = this.value,
            wW = RW.value;
          return RW.isSmall ? MW == wW ? 0 : MW > wW ? 1 : -1 : MW < 0 !== RW.sign ? MW < 0 ? -1 : 1 : MW < 0 ? 1 : -1
        }, NW.prototype.compareTo = NW.prototype.compare, eW.prototype.compare = function(WW) {
          if (WW === 1 / 0) return -1;
          if (WW === -1 / 0) return 1;
          var RW = this.value,
            MW = qR(WW).value;
          return RW === MW ? 0 : RW > MW ? 1 : -1
        }, eW.prototype.compareTo = eW.prototype.compare, yR.prototype.equals = function(WW) {
          return 0 === this.compare(WW)
        }, eW.prototype.eq = eW.prototype.equals = NW.prototype.eq = NW.prototype.equals = yR.prototype.eq = yR.prototype.equals, yR.prototype.notEquals = function(WW) {
          return 0 !== this.compare(WW)
        }, eW.prototype.neq = eW.prototype.notEquals = NW.prototype.neq = NW.prototype.notEquals = yR.prototype.neq = yR.prototype.notEquals, yR.prototype.greater = function(WW) {
          return this.compare(WW) > 0
        }, eW.prototype.gt = eW.prototype.greater = NW.prototype.gt = NW.prototype.greater = yR.prototype.gt = yR.prototype.greater, yR.prototype.lesser = function(WW) {
          return this.compare(WW) < 0
        }, eW.prototype.lt = eW.prototype.lesser = NW.prototype.lt = NW.prototype.lesser = yR.prototype.lt = yR.prototype.lesser, yR.prototype.greaterOrEquals = function(WW) {
          return this.compare(WW) >= 0
        }, eW.prototype.geq = eW.prototype.greaterOrEquals = NW.prototype.geq = NW.prototype.greaterOrEquals = yR.prototype.geq = yR.prototype.greaterOrEquals, yR.prototype.lesserOrEquals = function(WW) {
          return this.compare(WW) <= 0
        }, eW.prototype.leq = eW.prototype.lesserOrEquals = NW.prototype.leq = NW.prototype.lesserOrEquals = yR.prototype.leq = yR.prototype.lesserOrEquals, yR.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, NW.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, eW.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, yR.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, NW.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, eW.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, yR.prototype.isPositive = function() {
          return !this.sign
        }, NW.prototype.isPositive = function() {
          return this.value > 0
        }, eW.prototype.isPositive = NW.prototype.isPositive, yR.prototype.isNegative = function() {
          return this.sign
        }, NW.prototype.isNegative = function() {
          return this.value < 0
        }, eW.prototype.isNegative = NW.prototype.isNegative, yR.prototype.isUnit = function() {
          return !1
        }, NW.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, eW.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, yR.prototype.isZero = function() {
          return !1
        }, NW.prototype.isZero = function() {
          return 0 === this.value
        }, eW.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, yR.prototype.isDivisibleBy = function(WW) {
          var RW = qR(WW);
          return !RW.isZero() && (!!RW.isUnit() || (0 === RW.compareAbs(2) ? this.isEven() : this.mod(RW).isZero()))
        }, eW.prototype.isDivisibleBy = NW.prototype.isDivisibleBy = yR.prototype.isDivisibleBy, yR.prototype.isPrime = function(MW) {
          var wW = sW(this);
          if (wW !== WW) return wW;
          var CW = this.abs(),
            zR = CW.bitLength();
          if (zR <= 64) return dW(CW, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var AW = Math.log(2) * zR.toJSNumber(), bR = Math.ceil(!0 === MW ? 2 * Math.pow(AW, 2) : AW), yR = [], NW = 0; NW < bR; NW++) yR.push(RW(NW + 2));
          return dW(CW, yR)
        }, eW.prototype.isPrime = NW.prototype.isPrime = yR.prototype.isPrime, yR.prototype.isProbablePrime = function(MW, wW) {
          var CW = sW(this);
          if (CW !== WW) return CW;
          for (var zR = this.abs(), AW = MW === WW ? 5 : MW, bR = [], yR = 0; yR < AW; yR++) bR.push(RW.randBetween(2, zR.minus(2), wW));
          return dW(zR, bR)
        }, eW.prototype.isProbablePrime = NW.prototype.isProbablePrime = yR.prototype.isProbablePrime, yR.prototype.modInv = function(WW) {
          for (var MW, wW, CW, zR = RW.zero, AW = RW.one, bR = qR(WW), yR = this.abs(); !yR.isZero();) MW = bR.divide(yR), wW = zR, CW = bR, zR = AW, bR = yR, AW = wW.subtract(MW.multiply(AW)), yR = CW.subtract(MW.multiply(yR));
          if (!bR.isUnit()) throw new Error(this.toString() + " and " + WW.toString() + " are not co-prime");
          return -1 === zR.compare(0) && (zR = zR.add(WW)), this.isNegative() ? zR.zb() : zR
        }, eW.prototype.modInv = NW.prototype.modInv = yR.prototype.modInv, yR.prototype.next = function() {
          var WW = this.value;
          return this.sign ? lW(WW, 1, this.sign) : new yR(IW(WW, 1), this.sign)
        }, NW.prototype.next = function() {
          var WW = this.value;
          return WW + 1 < wW ? new NW(WW + 1) : new yR(CW, !1)
        }, eW.prototype.next = function() {
          return new eW(this.value + BigInt(1))
        }, yR.prototype.prev = function() {
          var WW = this.value;
          return this.sign ? new yR(IW(WW, 1), !0) : lW(WW, 1, this.sign)
        }, NW.prototype.prev = function() {
          var WW = this.value;
          return WW - 1 > -wW ? new NW(WW - 1) : new yR(CW, !0)
        }, eW.prototype.prev = function() {
          return new eW(this.value - BigInt(1))
        };
        for (var pW = [1]; 2 * pW[pW.length - 1] <= MW;) pW.push(2 * pW[pW.length - 1]);
        var hW = pW.length,
          UW = pW[hW - 1];

        function EW(WW) {
          return Math.abs(WW) <= MW
        }

        function VW(WW, MW, wW) {
          MW = qR(MW);
          for (var CW = WW.isNegative(), zR = MW.isNegative(), AW = CW ? WW.not() : WW, bR = zR ? MW.not() : MW, yR = 0, NW = 0, eW = null, BW = null, tR = []; !AW.isZero() || !bR.isZero();) yR = (eW = kR(AW, UW))[1].toJSNumber(), CW && (yR = UW - 1 - yR), NW = (BW = kR(bR, UW))[1].toJSNumber(), zR && (NW = UW - 1 - NW), AW = eW[0], bR = BW[0], tR.push(wW(yR, NW));
          for (var TW = 0 !== wW(CW ? 1 : 0, zR ? 1 : 0) ? RW(-1) : RW(0), gR = tR.length - 1; gR >= 0; gR -= 1) TW = TW.multiply(UW).add(RW(tR[gR]));
          return TW
        }
        yR.prototype.shiftLeft = function(WW) {
          var RW = qR(WW).toJSNumber();
          if (!EW(RW)) throw new Error(String(RW) + " is too large for shifting.");
          if (RW < 0) return this.shiftRight(-RW);
          var MW = this;
          if (MW.isZero()) return MW;
          for (; RW >= hW;) MW = MW.multiply(UW), RW -= hW - 1;
          return MW.multiply(pW[RW])
        }, eW.prototype.shiftLeft = NW.prototype.shiftLeft = yR.prototype.shiftLeft, yR.prototype.shiftRight = function(WW) {
          var RW, MW = qR(WW).toJSNumber();
          if (!EW(MW)) throw new Error(String(MW) + " is too large for shifting.");
          if (MW < 0) return this.shiftLeft(-MW);
          for (var wW = this; MW >= hW;) {
            if (wW.isZero() || wW.isNegative() && wW.isUnit()) return wW;
            wW = (RW = kR(wW, UW))[1].isNegative() ? RW[0].prev() : RW[0], MW -= hW - 1
          }
          return (RW = kR(wW, pW[MW]))[1].isNegative() ? RW[0].prev() : RW[0]
        }, eW.prototype.shiftRight = NW.prototype.shiftRight = yR.prototype.shiftRight, yR.prototype.not = function() {
          return this.zb().prev()
        }, eW.prototype.not = NW.prototype.not = yR.prototype.not, yR.prototype.and = function(WW) {
          return VW(this, WW, (function(WW, RW) {
            return WW & RW
          }))
        }, eW.prototype.and = NW.prototype.and = yR.prototype.and, yR.prototype.or = function(WW) {
          return VW(this, WW, (function(WW, RW) {
            return WW | RW
          }))
        }, eW.prototype.or = NW.prototype.or = yR.prototype.or, yR.prototype.xor = function(WW) {
          return VW(this, WW, (function(WW, RW) {
            return WW ^ RW
          }))
        }, eW.prototype.xor = NW.prototype.xor = yR.prototype.xor;
        var mR = 1 << 30;

        function xR(WW) {
          var RW = WW.value,
            wW = "number" === typeof RW ? RW | mR : "bigint" === typeof RW ? RW | BigInt(mR) : RW[0] + RW[1] * MW | 1073758208;
          return wW & -wW
        }

        function vR(WW, MW) {
          if (MW.compareTo(WW) <= 0) {
            var wW = vR(WW, MW.square(MW)),
              CW = wW.p,
              zR = wW.e,
              AW = CW.multiply(MW);
            return AW.compareTo(WW) <= 0 ? {
              p: AW,
              e: 2 * zR + 1
            } : {
              p: CW,
              e: 2 * zR
            }
          }
          return {
            p: RW(1),
            e: 0
          }
        }

        function KW(WW, RW) {
          return WW = qR(WW), RW = qR(RW), WW.greater(RW) ? WW : RW
        }

        function uW(WW, RW) {
          return WW = qR(WW), RW = qR(RW), WW.lesser(RW) ? WW : RW
        }

        function OW(WW, RW) {
          if (WW = qR(WW).abs(), RW = qR(RW).abs(), WW.equals(RW)) return WW;
          if (WW.isZero()) return RW;
          if (RW.isZero()) return WW;
          for (var MW, wW, CW = bR[1]; WW.isEven() && RW.isEven();) MW = uW(xR(WW), xR(RW)), WW = WW.divide(MW), RW = RW.divide(MW), CW = CW.multiply(MW);
          for (; WW.isEven();) WW = WW.divide(xR(WW));
          do {
            for (; RW.isEven();) RW = RW.divide(xR(RW));
            WW.greater(RW) && (wW = RW, RW = WW, WW = wW), RW = RW.subtract(WW)
          } while (!RW.isZero());
          return CW.isUnit() ? WW : WW.multiply(CW)
        }
        yR.prototype.bitLength = function() {
          var WW = this;
          return WW.compareTo(RW(0)) < 0 && (WW = WW.zb().subtract(RW(1))), 0 === WW.compareTo(RW(0)) ? RW(0) : RW(vR(WW, RW(2)).e).add(RW(1))
        }, eW.prototype.bitLength = NW.prototype.bitLength = yR.prototype.bitLength;
        var nW = function(WW, RW, MW, wW) {
          MW = MW || zR, WW = String(WW), wW || (WW = WW.toLowerCase(), MW = MW.toLowerCase());
          var CW, AW = WW.length,
            bR = Math.abs(RW),
            yR = {};
          for (CW = 0; CW < MW.length; CW++) yR[MW[CW]] = CW;
          for (CW = 0; CW < AW; CW++) {
            if ("-" !== (BW = WW[CW]) && (BW in yR && yR[BW] >= bR)) {
              if ("1" === BW && 1 === bR) continue;
              throw new Error(BW + " is not a valid digit in base " + RW + ".")
            }
          }
          RW = qR(RW);
          var NW = [],
            eW = "-" === WW[0];
          for (CW = eW ? 1 : 0; CW < WW.length; CW++) {
            var BW;
            if ((BW = WW[CW]) in yR) NW.push(qR(yR[BW]));
            else {
              if ("<" !== BW) throw new Error(BW + " is not a valid character");
              var tR = CW;
              do {
                CW++
              } while (">" !== WW[CW] && CW < WW.length);
              NW.push(qR(WW.slice(tR + 1, CW)))
            }
          }
          return GW(NW, RW, eW)
        };

        function GW(WW, RW, MW) {
          var wW, CW = bR[0],
            zR = bR[1];
          for (wW = WW.length - 1; wW >= 0; wW--) CW = CW.add(WW[wW].times(zR)), zR = zR.times(RW);
          return MW ? CW.zb() : CW
        }

        function LW(WW, MW) {
          if ((MW = RW(MW)).isZero()) {
            if (WW.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (MW.equals(-1)) {
            if (WW.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (WW.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-WW.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var wW = Array.apply(null, Array(WW.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return wW.unshift([1]), {
              value: [].concat.apply([], wW),
              isNegative: !1
            }
          }
          var CW = !1;
          if (WW.isNegative() && MW.isPositive() && (CW = !0, WW = WW.abs()), MW.isUnit()) return WW.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(WW.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: CW
          };
          for (var zR, AW = [], bR = WW; bR.isNegative() || bR.compareAbs(MW) >= 0;) {
            zR = bR.divmod(MW), bR = zR.quotient;
            var yR = zR.remainder;
            yR.isNegative() && (yR = MW.minus(yR).abs(), bR = bR.next()), AW.push(yR.toJSNumber())
          }
          return AW.push(bR.toJSNumber()), {
            value: AW.reverse(),
            isNegative: CW
          }
        }

        function HW(WW, RW, MW) {
          var wW = LW(WW, RW);
          return (wW.isNegative ? "-" : "") + wW.value.map((function(WW) {
            return function(WW, RW) {
              return WW < (RW = RW || zR).length ? RW[WW] : "<" + WW + ">"
            }(WW, MW)
          })).join("")
        }

        function DW(WW) {
          if (BW(+WW)) {
            var RW = +WW;
            if (RW === YW(RW)) return AW ? new eW(BigInt(RW)) : new NW(RW);
            throw new Error("Invalid integer: " + WW)
          }
          var MW = "-" === WW[0];
          MW && (WW = WW.slice(1));
          var wW = WW.split(/e/i);
          if (wW.length > 2) throw new Error("Invalid integer: " + wW.join("e"));
          if (2 === wW.length) {
            var CW = wW[1];
            if ("+" === CW[0] && (CW = CW.slice(1)), (CW = +CW) !== YW(CW) || !BW(CW)) throw new Error("Invalid integer: " + CW + " is not a valid exponent.");
            var zR = wW[0],
              bR = zR.indexOf(".");
            if (bR >= 0 && (CW -= zR.length - bR - 1, zR = zR.slice(0, bR) + zR.slice(bR + 1)), CW < 0) throw new Error("Cannot include negative exponent part for integers");
            WW = zR += new Array(CW + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(WW)) throw new Error("Invalid integer: " + WW);
          if (AW) return new eW(BigInt(MW ? "-" + WW : WW));
          for (var tR = [], TW = WW.length, iR = TW - 7; TW > 0;) tR.push(+WW.slice(iR, TW)), (iR -= 7) < 0 && (iR = 0), TW -= 7;
          return gR(tR), new yR(tR, MW)
        }

        function qR(WW) {
          return "number" === typeof WW ? function(WW) {
            if (AW) return new eW(BigInt(WW));
            if (BW(WW)) {
              if (WW !== YW(WW)) throw new Error(WW + " is not an integer.");
              return new NW(WW)
            }
            return DW(WW.toString())
          }(WW) : "string" === typeof WW ? DW(WW) : "bigint" === typeof WW ? new eW(WW) : WW
        }
        yR.prototype.toArray = function(WW) {
          return LW(this, WW)
        }, NW.prototype.toArray = function(WW) {
          return LW(this, WW)
        }, eW.prototype.toArray = function(WW) {
          return LW(this, WW)
        }, yR.prototype.toString = function(RW, MW) {
          if (RW === WW && (RW = 10), 10 !== RW) return HW(this, RW, MW);
          for (var wW, CW = this.value, zR = CW.length, AW = String(CW[--zR]); --zR >= 0;) wW = String(CW[zR]), AW += "0000000".slice(wW.length) + wW;
          return (this.sign ? "-" : "") + AW
        }, NW.prototype.toString = function(RW, MW) {
          return RW === WW && (RW = 10), 10 != RW ? HW(this, RW, MW) : String(this.value)
        }, eW.prototype.toString = NW.prototype.toString, eW.prototype.toJSON = yR.prototype.toJSON = NW.prototype.toJSON = function() {
          return this.toString()
        }, yR.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, yR.prototype.toJSNumber = yR.prototype.valueOf, NW.prototype.valueOf = function() {
          return this.value
        }, NW.prototype.toJSNumber = NW.prototype.valueOf, eW.prototype.valueOf = eW.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var ZW = 0; ZW < 1e3; ZW++) bR[ZW] = qR(ZW), ZW > 0 && (bR[-ZW] = qR(-ZW));
        return bR.one = bR[1], bR.zero = bR[0], bR.minusOne = bR[-1], bR.max = KW, bR.min = uW, bR.gcd = OW, bR.lcm = function(WW, RW) {
          return WW = qR(WW).abs(), RW = qR(RW).abs(), WW.divide(OW(WW, RW)).multiply(RW)
        }, bR.isInstance = function(WW) {
          return WW instanceof yR || WW instanceof NW || WW instanceof eW
        }, bR.randBetween = function(WW, RW, wW) {
          WW = qR(WW), RW = qR(RW);
          var CW = wW || Math.random,
            zR = uW(WW, RW),
            AW = KW(WW, RW).subtract(zR).add(1);
          if (AW.isSmall) return zR.add(Math.floor(CW() * AW));
          for (var yR = LW(AW, MW).value, NW = [], eW = !0, BW = 0; BW < yR.length; BW++) {
            var tR = eW ? yR[BW] : MW,
              TW = YW(CW() * tR);
            NW.push(TW), TW < tR && (eW = !1)
          }
          return zR.add(bR.MyW(NW, MW, !1))
        }, bR.MyW = function(WW, RW, MW) {
          return GW(WW.map(qR), qR(RW || 10), MW)
        }, bR
      }();
      WW.hasOwnProperty("exports") && (WW.exports = RW)
    }(PM);
    var IM = zR(PM.exports);

    function oM(WW, RW, MW) {
      let wW = 0;
      for (let CW = 0; CW < MW; CW++) {
        const MW = WW[RW + CW];
        if (void 0 === MW) break;
        wW += MW * 16 ** CW
      }
      return wW
    }

    function lM(WW) {
      const RW = [];
      for (let MW = 0; MW < WW.length; MW++) {
        let wW = Number(WW[MW]);
        for (let WW = 0; wW || WW < RW.length; WW++) wW += 10 * (RW[WW] || 0), RW[WW] = wW % 16, wW = (wW - RW[WW]) / 16
      }
      return RW
    }
    class FM {
      static fromString(WW) {
        return new FM(function(WW) {
          const RW = lM(WW),
            MW = Array(4);
          for (let wW = 0; wW < 4; wW++) MW[3 - wW] = oM(RW, 4 * wW, 4);
          return MW
        }(WW), WW)
      }
      static fromBit(WW) {
        const RW = Array(4),
          MW = Math.floor(WW / 16);
        for (let wW = 0; wW < 4; wW++) RW[3 - wW] = wW === MW ? 1 << WW - 16 * MW : 0;
        return new FM(RW)
      }
      constructor(WW, RW) {
        this.parts = WW, this.str = RW
      }
      and(WW) {
        let {
          parts: RW
        } = WW;
        return new FM(this.parts.map(((WW, MW) => WW & RW[MW])))
      }
      or(WW) {
        let {
          parts: RW
        } = WW;
        return new FM(this.parts.map(((WW, MW) => WW | RW[MW])))
      }
      xor(WW) {
        let {
          parts: RW
        } = WW;
        return new FM(this.parts.map(((WW, MW) => WW ^ RW[MW])))
      }
      not() {
        return new FM(this.parts.map((WW => ~WW)))
      }
      equals(WW) {
        let {
          parts: RW
        } = WW;
        return this.parts.every(((WW, MW) => WW === RW[MW]))
      }
      toString() {
        if (null != this.str) return this.str;
        const WW = new Array(16);
        return this.parts.forEach(((RW, MW) => {
          const wW = lM(RW.toString());
          for (let CW = 0; CW < 4; CW++) WW[CW + 4 * MW] = wW[3 - CW] || 0
        })), this.str = IM.MyW(WW, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const fM = function() {
      try {
        return BigInt, !0
      } catch (WW) {
        return !1
      }
    }();
    fM && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const QM = {},
      rw = fM ? function(WW) {
        return BigInt(WW)
      } : function(WW) {
        return WW instanceof FM ? WW : ("number" === typeof WW && (WW = WW.toString()), null != QM[WW] || (QM[WW] = FM.fromString(WW)), QM[WW])
      },
      cwW = rw(0),
      XM = fM ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cwW)
      } : function() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cwW;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW).and(WW)
      },
      jw = fM ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cwW)
      } : function() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cwW;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW).or(WW)
      },
      kw = fM ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cwW)
      } : function() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cwW;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW).xor(WW)
      },
      aw = fM ? function(WW, RW) {
        return WW === RW
      } : function(WW, RW) {
        return null == WW || null == RW ? WW == RW : WW.equals(RW)
      };
    var sM, dM, pM, hM, UM = {
      combine: function() {
        let WW = arguments.length <= 0 ? void 0 : arguments[0];
        for (let RW = 1; RW < arguments.length; RW++) WW = jw(WW, RW < 0 || arguments.length <= RW ? void 0 : arguments[RW]);
        return WW
      },
      add: function(WW, RW) {
        return RW === cwW ? WW : jw(WW, RW)
      },
      remove: function(WW, RW) {
        return RW === cwW ? WW : kw(WW, XM(WW, RW))
      },
      filter: XM,
      invert: fM ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cwW).not()
      },
      has: function(WW, RW) {
        return aw(XM(WW, RW), RW)
      },
      hasAny: function(WW, RW) {
        return !aw(XM(WW, RW), cwW)
      },
      equals: aw,
      deserialize: rw,
      getFlag: fM ? function(WW) {
        return BigInt(1) << BigInt(WW)
      } : function(WW) {
        return FM.fromBit(WW)
      }
    };
    ! function(WW) {
      WW[WW.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", WW[WW.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", WW[WW.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", WW[WW.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", WW[WW.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", WW[WW.RATELIMITED = 4002] = "RATELIMITED", WW[WW.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", WW[WW.INVALID_VERSION = 4004] = "INVALID_VERSION", WW[WW.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(sM || (sM = {})),
    function(WW) {
      WW[WW.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", WW[WW.INVALID_COMMAND = 4002] = "INVALID_COMMAND", WW[WW.INVALID_EVENT = 4004] = "INVALID_EVENT", WW[WW.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(dM || (dM = {})),
    function(WW) {
      WW.LANDSCAPE = "landscape", WW.PORTRAIT = "portrait"
    }(pM || (pM = {})),
    function(WW) {
      WW.MOBILE = "mobile", WW.DESKTOP = "desktop"
    }(hM || (hM = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: UM.getFlag(0),
      ADMINISTRATOR: UM.getFlag(3)
    });

    function EM(WW) {
      return TM((RW => {
        var MW;
        const [wW] = null !== (MW = Object.entries(WW).find((WW => {
          let [, MW] = WW;
          return MW === RW
        }))) && void 0 !== MW ? MW : [];
        return null != RW && void 0 === wW ? WW.UNHANDLED : RW
      }), pR().or(hR()))
    }
    const VM = JM.object({
        image_url: JM.string()
      }),
      mw = JM.object({
        mediaUrl: JM.string().max(1024)
      }),
      xw = JM.object({
        access_token: JM.union([JM.string(), JM.null()]).optional()
      }),
      vw = JM.object({
        access_token: JM.string(),
        user: JM.object({
          username: JM.string(),
          discriminator: JM.string(),
          id: JM.string(),
          avatar: JM.union([JM.string(), JM.null()]).optional(),
          public_flags: JM.number(),
          global_name: JM.union([JM.string(), JM.null()]).optional()
        }),
        scopes: JM.array(function(WW) {
          const RW = aM().transform((RW => {
            const MW = WW.safeParse(RW);
            return MW.success ? MW.data : WW._def.defaultValue()
          }));
          return RW.overlayType = WW, RW
        }(JM.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(JM.literal(-1)).default(-1))),
        expires: JM.string(),
        application: JM.object({
          description: JM.string(),
          icon: JM.union([JM.string(), JM.null()]).optional(),
          id: JM.string(),
          rpc_origins: JM.array(JM.string()).optional(),
          name: JM.string()
        })
      }),
      KM = JM.object({
        participants: JM.array(JM.object({
          id: JM.string(),
          username: JM.string(),
          global_name: JM.union([JM.string(), JM.null()]).optional(),
          discriminator: JM.string(),
          avatar: JM.union([JM.string(), JM.null()]).optional(),
          flags: JM.number(),
          bot: JM.boolean(),
          avatar_decoration_data: JM.union([JM.object({
            asset: JM.string(),
            skuId: JM.string().optional()
          }), JM.null()]).optional(),
          premium_type: JM.union([JM.number(), JM.null()]).optional(),
          nickname: JM.string().optional()
        }))
      });
    var uM;
    ! function(WW) {
      WW.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", WW.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", WW.AUTHENTICATE = "AUTHENTICATE", WW.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(uM || (uM = {}));
    const OM = JM.object({}).optional().nullable(),
      nM = JM.void(),
      GM = {
        [uM.INITIATE_IMAGE_UPLOAD]: {
          request: nM,
          response: VM
        },
        [uM.OPEN_SHARE_MOMENT_DIALOG]: {
          request: mw,
          response: OM
        },
        [uM.AUTHENTICATE]: {
          request: xw,
          response: vw
        },
        [uM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: nM,
          response: KM
        }
      },
      LM = "DISPATCH";
    var HM;
    ! function(WW) {
      WW.AUTHORIZE = "AUTHORIZE", WW.AUTHENTICATE = "AUTHENTICATE", WW.GET_GUILDS = "GET_GUILDS", WW.GET_GUILD = "GET_GUILD", WW.GET_CHANNEL = "GET_CHANNEL", WW.GET_CHANNELS = "GET_CHANNELS", WW.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", WW.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", WW.SUBSCRIBE = "SUBSCRIBE", WW.UNSUBSCRIBE = "UNSUBSCRIBE", WW.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", WW.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", WW.SET_ACTIVITY = "SET_ACTIVITY", WW.GET_SKUS = "GET_SKUS", WW.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", WW.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", WW.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", WW.START_PURCHASE = "START_PURCHASE", WW.SET_CONFIG = "SET_CONFIG", WW.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", WW.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", WW.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", WW.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", WW.CAPTURE_LOG = "CAPTURE_LOG", WW.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", WW.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", WW.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", WW.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", WW.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", WW.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", WW.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(HM || (HM = {}));
    const DM = HR({
        cmd: pR(),
        data: OR(),
        evt: KR(),
        nonce: pR()
      }).passthrough(),
      qw = (EM(Object.assign(Object.assign({}, vw.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), HR({
        id: pR(),
        username: pR(),
        discriminator: pR(),
        global_name: pR().optional().nullable(),
        avatar: pR().optional().nullable(),
        avatar_decoration_data: HR({
          asset: pR(),
          sku_id: pR().optional()
        }).nullable(),
        bot: VR(),
        flags: hR().optional().nullable(),
        premium_type: hR().optional().nullable()
      })),
      ZM = HR({
        user: qw,
        nick: pR().optional().nullable(),
        roles: LR(pR()),
        joined_at: pR(),
        deaf: VR(),
        mute: VR()
      }),
      SM = HR({
        id: pR(),
        name: pR().optional().nullable(),
        roles: LR(pR()).optional().nullable(),
        user: qw.optional().nullable(),
        require_colons: VR().optional().nullable(),
        managed: VR().optional().nullable(),
        animated: VR().optional().nullable(),
        available: VR().optional().nullable()
      }),
      Ww = HR({
        mute: VR(),
        deaf: VR(),
        self_mute: VR(),
        self_deaf: VR(),
        suppress: VR()
      }),
      Rw = HR({
        mute: VR(),
        nick: pR(),
        user: qw,
        voice_state: Ww,
        volume: hR()
      }),
      Mw = EM({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      ww = HR({
        name: pR(),
        type: hR(),
        url: pR().optional().nullable(),
        created_at: hR().optional().nullable(),
        timestamps: HR({
          start: hR(),
          end: hR()
        }).partial().optional().nullable(),
        application_id: pR().optional().nullable(),
        details: pR().optional().nullable(),
        state: pR().optional().nullable(),
        emoji: SM.optional().nullable(),
        party: HR({
          id: pR().optional().nullable(),
          size: LR(hR()).optional().nullable()
        }).optional().nullable(),
        assets: HR({
          large_image: pR().nullable(),
          large_text: pR().nullable(),
          small_image: pR().nullable(),
          small_text: pR().nullable()
        }).partial().optional().nullable(),
        secrets: HR({
          join: pR(),
          match: pR()
        }).partial().optional().nullable(),
        instance: VR().optional().nullable(),
        flags: hR().optional().nullable()
      }),
      Cw = HR({
        id: pR(),
        type: EM({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: pR(),
        deny: pR()
      }),
      zC = {
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
      Aw = HR({
        id: pR(),
        type: EM(zC),
        guild_id: pR().optional().nullable(),
        position: hR().optional().nullable(),
        permission_overwrites: LR(Cw).optional().nullable(),
        name: pR().optional().nullable(),
        topic: pR().optional().nullable(),
        nsfw: VR().optional().nullable(),
        last_message_id: pR().optional().nullable(),
        bitrate: hR().optional().nullable(),
        user_limit: hR().optional().nullable(),
        rate_limit_per_user: hR().optional().nullable(),
        recipients: LR(qw).optional().nullable(),
        icon: pR().optional().nullable(),
        owner_id: pR().optional().nullable(),
        application_id: pR().optional().nullable(),
        parent_id: pR().optional().nullable(),
        last_pin_timestamp: pR().optional().nullable()
      }),
      bC = HR({
        user: qw,
        guild_id: pR(),
        status: Mw,
        activities: LR(ww),
        client_status: HR({
          desktop: Mw,
          mobile: Mw,
          web: Mw
        }).partial()
      }),
      yC = HR({
        id: pR(),
        name: pR(),
        color: hR(),
        hoist: VR(),
        position: hR(),
        permissions: pR(),
        managed: VR(),
        mentionable: VR()
      }),
      Nw = (HR({
        id: pR(),
        name: pR(),
        owner_id: pR(),
        icon: pR().nullable(),
        icon_hash: pR().optional().nullable(),
        splash: pR().nullable(),
        discovery_splash: pR().nullable(),
        owner: VR().optional().nullable(),
        permissions: pR().optional().nullable(),
        region: pR(),
        afk_channel_id: pR().nullable(),
        afk_timeout: hR(),
        widget_enabled: VR().optional().nullable(),
        widget_channel_id: pR().optional().nullable(),
        verification_level: hR(),
        default_message_notifications: hR(),
        explicit_content_filter: hR(),
        roles: LR(yC),
        emojis: LR(SM),
        features: LR(pR()),
        mfa_level: hR(),
        application_id: pR().nullable(),
        system_channel_id: pR().nullable(),
        system_channel_flags: hR(),
        rules_channel_id: pR().nullable(),
        joined_at: pR().optional().nullable(),
        large: VR().optional().nullable(),
        unavailable: VR().optional().nullable(),
        member_count: hR().optional().nullable(),
        voice_states: LR(Ww).optional().nullable(),
        members: LR(ZM).optional().nullable(),
        channels: LR(Aw).optional().nullable(),
        presences: LR(bC).optional().nullable(),
        max_presences: hR().optional().nullable(),
        max_members: hR().optional().nullable(),
        vanity_url_code: pR().nullable(),
        description: pR().nullable(),
        banner: pR().nullable(),
        premium_tier: hR(),
        premium_subscription_count: hR().optional().nullable(),
        preferred_locale: pR(),
        public_updates_channel_id: pR().nullable(),
        max_video_channel_users: hR().optional().nullable(),
        approximate_member_count: hR().optional().nullable(),
        approximate_presence_count: hR().optional().nullable()
      }), HR({
        id: pR(),
        guild_id: pR(),
        type: hR(),
        name: pR()
      })),
      ew = HR({
        id: pR(),
        filename: pR(),
        size: hR(),
        url: pR(),
        proxy_url: pR(),
        height: hR().optional().nullable(),
        width: hR().optional().nullable()
      }),
      Bw = HR({
        text: pR(),
        icon_url: pR().optional().nullable(),
        proxy_icon_url: pR().optional().nullable()
      }),
      tC = HR({
        url: pR().optional().nullable(),
        proxy_url: pR().optional().nullable(),
        height: hR().optional().nullable(),
        width: hR().optional().nullable()
      }),
      Tw = tC.omit({
        proxy_url: !0
      }),
      gC = HR({
        name: pR().optional().nullable(),
        url: pR().optional().nullable()
      }),
      iC = HR({
        name: pR().optional().nullable(),
        url: pR().optional().nullable(),
        icon_url: pR().optional().nullable(),
        proxy_icon_url: pR().optional().nullable()
      }),
      Yw = HR({
        name: pR(),
        value: pR(),
        inline: VR()
      }),
      Jw = HR({
        title: pR().optional().nullable(),
        type: pR().optional().nullable(),
        description: pR().optional().nullable(),
        url: pR().optional().nullable(),
        timestamp: pR().optional().nullable(),
        color: hR().optional().nullable(),
        footer: Bw.optional().nullable(),
        image: tC.optional().nullable(),
        thumbnail: tC.optional().nullable(),
        video: Tw.optional().nullable(),
        provider: gC.optional().nullable(),
        author: iC.optional().nullable(),
        fields: LR(Yw).optional().nullable()
      }),
      Pw = HR({
        count: hR(),
        me: VR(),
        emoji: SM
      }),
      Iw = HR({
        type: hR(),
        party_id: pR().optional().nullable()
      }),
      ow = HR({
        id: pR(),
        cover_image: pR().optional().nullable(),
        description: pR(),
        icon: pR().optional().nullable(),
        name: pR()
      }),
      lw = HR({
        message_id: pR().optional().nullable(),
        channel_id: pR().optional().nullable(),
        guild_id: pR().optional().nullable()
      }),
      Fw = HR({
        id: pR(),
        channel_id: pR(),
        guild_id: pR().optional().nullable(),
        author: qw.optional().nullable(),
        member: ZM.optional().nullable(),
        content: pR(),
        timestamp: pR(),
        edited_timestamp: pR().optional().nullable(),
        tts: VR(),
        mention_everyone: VR(),
        mentions: LR(qw),
        mention_roles: LR(pR()),
        mention_channels: LR(Nw),
        attachments: LR(ew),
        embeds: LR(Jw),
        reactions: LR(Pw).optional().nullable(),
        nonce: qM([pR(), hR()]).optional().nullable(),
        pinned: VR(),
        webhook_id: pR().optional().nullable(),
        type: hR(),
        activity: Iw.optional().nullable(),
        application: ow.optional().nullable(),
        message_reference: lw.optional().nullable(),
        flags: hR().optional().nullable(),
        stickers: LR(OR()).optional().nullable(),
        referenced_message: OR().optional().nullable()
      }),
      fw = HR({
        id: pR(),
        name: pR()
      }),
      Qw = HR({
        type: EM({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: hR(),
        name: pR()
      }),
      rC = HR({
        type: EM({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: VR(),
        threshold: hR(),
        shortcut: LR(Qw),
        delay: hR()
      }),
      cC = HR({
        device_id: pR(),
        volume: hR(),
        available_devices: LR(fw)
      }),
      Xw = (HR({
        type: EM({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: pR(),
        vendor: HR({
          name: pR(),
          url: pR()
        }),
        model: HR({
          name: pR(),
          url: pR()
        }),
        related: LR(pR()),
        echo_cancellation: VR().optional().nullable(),
        noise_suppression: VR().optional().nullable(),
        automatic_gain_control: VR().optional().nullable(),
        hardware_mute: VR().optional().nullable()
      }), HR({
        id: pR(),
        name: pR(),
        type: EM({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: HR({
          amount: hR(),
          currency: pR()
        }),
        application_id: pR(),
        flags: hR(),
        release_date: pR().nullable()
      })),
      jC = HR({
        id: pR(),
        sku_id: pR(),
        application_id: pR(),
        user_id: pR(),
        gift_code_flags: hR(),
        type: EM({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: pR().optional().nullable(),
        branches: LR(pR()).optional().nullable(),
        starts_at: pR().optional().nullable(),
        ends_at: pR().optional().nullable(),
        parent_id: pR().optional().nullable(),
        consumed: VR().optional().nullable(),
        deleted: VR().optional().nullable(),
        gift_code_batch_id: pR().optional().nullable()
      }),
      kC = (EM({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), EM({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      aC = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      sw = (EM(aC), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      dw = (EM(sw), "ERROR");
    var pw;
    ! function(WW) {
      WW.READY = "READY", WW.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", WW.SPEAKING_START = "SPEAKING_START", WW.SPEAKING_STOP = "SPEAKING_STOP", WW.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", WW.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", WW.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", WW.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", WW.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", WW.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(pw || (pw = {}));
    const hw = DM.extend({
        evt: yw(pw),
        nonce: pR().nullable(),
        cmd: AM(LM),
        data: HR({}).passthrough()
      }),
      Uw = DM.extend({
        evt: AM(dw),
        data: HR({
          code: hR(),
          message: pR().optional()
        }).passthrough(),
        cmd: yw(HM),
        nonce: pR().nullable()
      }),
      Ew = hw.extend({
        evt: pR()
      }),
      Vw = qM([hw, Ew, Uw]);
    const mC = {
      [pw.READY]: {
        payload: hw.extend({
          evt: AM(pw.READY),
          data: HR({
            v: hR(),
            config: HR({
              cdn_host: pR().optional(),
              api_endpoint: pR(),
              environment: pR()
            }),
            user: HR({
              id: pR(),
              username: pR(),
              discriminator: pR(),
              avatar: pR().optional()
            }).optional()
          })
        })
      },
      [pw.VOICE_STATE_UPDATE]: {
        payload: hw.extend({
          evt: AM(pw.VOICE_STATE_UPDATE),
          data: Rw
        }),
        subscribeArgs: HR({
          channel_id: pR()
        })
      },
      [pw.SPEAKING_START]: {
        payload: hw.extend({
          evt: AM(pw.SPEAKING_START),
          data: HR({
            lobby_id: pR().optional(),
            channel_id: pR().optional(),
            user_id: pR()
          })
        }),
        subscribeArgs: HR({
          lobby_id: pR().nullable().optional(),
          channel_id: pR().nullable().optional()
        })
      },
      [pw.SPEAKING_STOP]: {
        payload: hw.extend({
          evt: AM(pw.SPEAKING_STOP),
          data: HR({
            lobby_id: pR().optional(),
            channel_id: pR().optional(),
            user_id: pR()
          })
        }),
        subscribeArgs: HR({
          lobby_id: pR().nullable().optional(),
          channel_id: pR().nullable().optional()
        })
      },
      [pw.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: hw.extend({
          evt: AM(pw.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: HR({
            layout_mode: EM(sw)
          })
        })
      },
      [pw.ORIENTATION_UPDATE]: {
        payload: hw.extend({
          evt: AM(pw.ORIENTATION_UPDATE),
          data: HR({
            screen_orientation: EM(aC),
            orientation: yw(pM)
          })
        })
      },
      [pw.CURRENT_USER_UPDATE]: {
        payload: hw.extend({
          evt: AM(pw.CURRENT_USER_UPDATE),
          data: qw
        })
      },
      [pw.ENTITLEMENT_CREATE]: {
        payload: hw.extend({
          evt: AM(pw.ENTITLEMENT_CREATE),
          data: HR({
            entitlement: jC
          })
        })
      },
      [pw.THERMAL_STATE_UPDATE]: {
        payload: hw.extend({
          evt: AM(pw.THERMAL_STATE_UPDATE),
          data: HR({
            thermal_state: kC
          })
        })
      },
      [pw.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: hw.extend({
          evt: AM(pw.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: HR({
            participants: KM.shape.participants
          })
        })
      }
    };
    const xC = HR({}).nullable(),
      vC = HR({
        code: pR()
      }),
      Kw = HR({
        guilds: LR(HR({
          id: pR(),
          name: pR()
        }))
      }),
      uw = HR({
        id: pR(),
        name: pR(),
        icon_url: pR().optional(),
        members: LR(ZM)
      }),
      Ow = HR({
        id: pR(),
        type: EM(zC),
        guild_id: pR().optional().nullable(),
        name: pR().optional().nullable(),
        topic: pR().optional().nullable(),
        bitrate: hR().optional().nullable(),
        user_limit: hR().optional().nullable(),
        position: hR().optional().nullable(),
        voice_states: LR(Rw),
        messages: LR(Fw)
      }),
      nw = HR({
        channels: LR(Aw)
      }),
      Gw = (Ow.nullable(), Ow.nullable()),
      Lw = Ow.nullable(),
      Hw = (HR({
        input: cC,
        output: cC,
        mode: rC,
        automatic_gain_control: VR(),
        echo_cancellation: VR(),
        noise_suppression: VR(),
        qos: VR(),
        silence_warning: VR(),
        deaf: VR(),
        mute: VR()
      }), HR({
        evt: pR()
      })),
      Dw = HR({
        shortcut: Qw
      }),
      qC = ww,
      Zw = HR({
        skus: LR(Xw)
      }),
      Sw = HR({
        entitlements: LR(jC)
      }),
      WC = LR(jC).nullable(),
      RC = HR({
        use_interactive_pip: VR()
      }),
      MC = HR({
        locale: pR()
      }),
      wC = HR({
        enabled: VR()
      }),
      CC = HR({
        permissions: ER().or(pR())
      }),
      zz = HR({
        iosKeyboardResizesView: BM(VR())
      }),
      AC = DM.extend({
        cmd: yw(HM),
        evt: KR()
      });

    function bz(WW) {
      let {
        cmd: RW,
        data: MW
      } = WW;
      switch (RW) {
        case HM.AUTHORIZE:
          return vC.parse(MW);
        case HM.CAPTURE_SHORTCUT:
          return Dw.parse(MW);
        case HM.ENCOURAGE_HW_ACCELERATION:
          return wC.parse(MW);
        case HM.GET_CHANNEL:
          return Ow.parse(MW);
        case HM.GET_CHANNELS:
          return nw.parse(MW);
        case HM.GET_CHANNEL_PERMISSIONS:
          return CC.parse(MW);
        case HM.GET_GUILD:
          return uw.parse(MW);
        case HM.GET_GUILDS:
          return Kw.parse(MW);
        case HM.GET_PLATFORM_BEHAVIORS:
          return zz.parse(MW);
        case HM.GET_CHANNEL:
          return Ow.parse(MW);
        case HM.SELECT_TEXT_CHANNEL:
          return Lw.parse(MW);
        case HM.SELECT_VOICE_CHANNEL:
          return Gw.parse(MW);
        case HM.SET_ACTIVITY:
          return qC.parse(MW);
        case HM.GET_SKUS_EMBEDDED:
          return Zw.parse(MW);
        case HM.GET_ENTITLEMENTS_EMBEDDED:
          return Sw.parse(MW);
        case HM.SET_CONFIG:
          return RC.parse(MW);
        case HM.START_PURCHASE:
          return WC.parse(MW);
        case HM.SUBSCRIBE:
        case HM.UNSUBSCRIBE:
          return Hw.parse(MW);
        case HM.USER_SETTINGS_GET_LOCALE:
          return MC.parse(MW);
        case HM.OPEN_EXTERNAL_LINK:
        case HM.SET_ORIENTATION_LOCK_STATE:
        case HM.SET_CERTIFIED_DEVICES:
        case HM.SEND_ANALYTICS_EVENT:
        case HM.OPEN_INVITE_DIALOG:
        case HM.CAPTURE_LOG:
        case HM.GET_SKUS:
        case HM.GET_ENTITLEMENTS:
          return xC.parse(MW);
        case HM.AUTHENTICATE:
        case HM.INITIATE_IMAGE_UPLOAD:
        case HM.OPEN_SHARE_MOMENT_DIALOG:
        case HM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: WW
          } = GM[RW];
          return WW.parse(MW);
        default:
          ! function(WW, RW) {
            throw RW
          }(0, new Error(`Unrecognized command ${RW}`))
      }
    }
    HR({
      frame_id: pR(),
      platform: yw(hM).optional().nullable()
    }), HR({
      v: AM(1),
      encoding: AM("json").optional(),
      client_id: pR(),
      frame_id: pR()
    });
    const yz = HR({
        code: hR(),
        message: pR().optional()
      }),
      NC = HR({
        evt: pR().nullable(),
        nonce: pR().nullable(),
        data: OR().nullable(),
        cmd: pR()
      }).passthrough();

    function eC(WW) {
      const RW = NC.parse(WW);
      return null != RW.evt ? RW.evt === dw ? Uw.parse(RW) : function(WW) {
        const RW = WW.evt;
        if (!(RW in pw)) throw new Error(`Unrecognized event type ${WW.evt}`);
        return mC[RW].payload.parse(WW)
      }(Vw.parse(RW)) : function(WW) {
        return Object.assign(Object.assign({}, WW), {
          data: bz(WW)
        })
      }(AC.passthrough().parse(RW))
    }

    function BC(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const CW = DM.extend({
        cmd: AM(RW),
        data: MW
      });
      return async MW => {
        const zR = await WW({
          cmd: RW,
          args: MW,
          transfer: wW(MW)
        });
        return CW.parse(zR).data
      }
    }

    function tz(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const MW = GM[WW].response,
        wW = DM.extend({
          cmd: AM(WW),
          data: MW
        });
      return MW => async CW => {
        const zR = await MW({
          cmd: WW,
          args: CW,
          transfer: RW(CW)
        });
        return wW.parse(zR).data
      }
    }
    const TC = tz(uM.AUTHENTICATE),
      gz = WW => BC(WW, HM.AUTHORIZE, vC),
      iz = WW => BC(WW, HM.CAPTURE_LOG, xC),
      YC = WW => BC(WW, HM.ENCOURAGE_HW_ACCELERATION, wC),
      JC = WW => BC(WW, HM.GET_ENTITLEMENTS_EMBEDDED, Sw),
      PC = WW => BC(WW, HM.GET_SKUS_EMBEDDED, Zw),
      IC = WW => BC(WW, HM.GET_CHANNEL_PERMISSIONS, CC),
      oC = WW => BC(WW, HM.GET_PLATFORM_BEHAVIORS, zz),
      lC = WW => BC(WW, HM.OPEN_EXTERNAL_LINK, xC),
      FC = WW => BC(WW, HM.OPEN_INVITE_DIALOG, xC),
      fC = tz(uM.OPEN_SHARE_MOMENT_DIALOG);
    ww.WM({
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
      type: ww.shape.type.optional(),
      instance: ww.shape.instance.optional()
    }).nullable();
    const QC = WW => BC(WW, HM.SET_ACTIVITY, qC),
      rz = WW => BC(WW, HM.SET_CONFIG, RC);
    const cz = WW => ({
        lock_state: WW.lock_state,
        picture_in_picture_lock_state: WW.picture_in_picture_lock_state
      }),
      XC = WW => function(WW) {
        let {
          sendCommand: RW,
          cmd: MW,
          response: wW,
          fallbackTransform: CW,
          transferTransform: zR = () => {}
        } = WW;
        const AW = DM.extend({
          cmd: AM(MW),
          data: wW
        });
        return async WW => {
          try {
            const wW = await RW({
              cmd: MW,
              args: WW,
              transfer: zR(WW)
            });
            return AW.parse(wW).data
          } catch (wW) {
            if (wW.code === dM.INVALID_PAYLOAD) {
              const wW = CW(WW),
                bR = await RW({
                  cmd: MW,
                  args: wW,
                  transfer: zR(wW)
                });
              return AW.parse(bR).data
            }
            throw wW
          }
        }
      }({
        sendCommand: WW,
        cmd: HM.SET_ORIENTATION_LOCK_STATE,
        response: xC,
        fallbackTransform: cz
      }),
      jz = WW => BC(WW, HM.START_PURCHASE, WC),
      kz = WW => BC(WW, HM.USER_SETTINGS_GET_LOCALE, MC),
      az = tz(uM.INITIATE_IMAGE_UPLOAD),
      sC = WW => BC(WW, HM.GET_CHANNEL, Ow),
      dC = tz(uM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var pC = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function hC(WW) {
      return "string" === typeof WW && pC.test(WW)
    }
    for (var UC = [], EC = 0; EC < 256; ++EC) UC.push((EC + 256).toString(16).substr(1));

    function VC(WW) {
      var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MW = (UC[WW[RW + 0]] + UC[WW[RW + 1]] + UC[WW[RW + 2]] + UC[WW[RW + 3]] + "-" + UC[WW[RW + 4]] + UC[WW[RW + 5]] + "-" + UC[WW[RW + 6]] + UC[WW[RW + 7]] + "-" + UC[WW[RW + 8]] + UC[WW[RW + 9]] + "-" + UC[WW[RW + 10]] + UC[WW[RW + 11]] + UC[WW[RW + 12]] + UC[WW[RW + 13]] + UC[WW[RW + 14]] + UC[WW[RW + 15]]).toLowerCase();
      if (!hC(MW)) throw TypeError("Stringified UUID is invalid");
      return MW
    }
    var mz;

    function xz(WW, RW, MW) {
      function wW(WW, wW, CW, zR) {
        if ("string" === typeof WW && (WW = function(WW) {
            WW = unescape(encodeURIComponent(WW));
            for (var RW = [], MW = 0; MW < WW.length; ++MW) RW.push(WW.charCodeAt(MW));
            return RW
          }(WW)), "string" === typeof wW && (wW = function(WW) {
            if (!hC(WW)) throw TypeError("Invalid UUID");
            var RW, MW = new Uint8Array(16);
            return MW[0] = (RW = parseInt(WW.slice(0, 8), 16)) >>> 24, MW[1] = RW >>> 16 & 255, MW[2] = RW >>> 8 & 255, MW[3] = 255 & RW, MW[4] = (RW = parseInt(WW.slice(9, 13), 16)) >>> 8, MW[5] = 255 & RW, MW[6] = (RW = parseInt(WW.slice(14, 18), 16)) >>> 8, MW[7] = 255 & RW, MW[8] = (RW = parseInt(WW.slice(19, 23), 16)) >>> 8, MW[9] = 255 & RW, MW[10] = (RW = parseInt(WW.slice(24, 36), 16)) / 1099511627776 & 255, MW[11] = RW / 4294967296 & 255, MW[12] = RW >>> 24 & 255, MW[13] = RW >>> 16 & 255, MW[14] = RW >>> 8 & 255, MW[15] = 255 & RW, MW
          }(wW)), 16 !== wW.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var AW = new Uint8Array(16 + WW.length);
        if (AW.set(wW), AW.set(WW, wW.length), (AW = MW(AW))[6] = 15 & AW[6] | RW, AW[8] = 63 & AW[8] | 128, CW) {
          zR = zR || 0;
          for (var bR = 0; bR < 16; ++bR) CW[zR + bR] = AW[bR];
          return CW
        }
        return VC(AW)
      }
      try {
        wW.name = WW
      } catch (CW) {}
      return wW.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", wW.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", wW
    }

    function vz(WW) {
      return 14 + (WW + 64 >>> 9 << 4) + 1
    }

    function KC(WW, RW) {
      var MW = (65535 & WW) + (65535 & RW);
      return (WW >> 16) + (RW >> 16) + (MW >> 16) << 16 | 65535 & MW
    }

    function uC(WW, RW, MW, wW, CW, zR) {
      return KC((AW = KC(KC(RW, WW), KC(wW, zR))) << (bR = CW) | AW >>> 32 - bR, MW);
      var AW, bR
    }

    function OC(WW, RW, MW, wW, CW, zR, AW) {
      return uC(RW & MW | ~RW & wW, WW, RW, CW, zR, AW)
    }

    function nC(WW, RW, MW, wW, CW, zR, AW) {
      return uC(RW & wW | MW & ~wW, WW, RW, CW, zR, AW)
    }

    function GC(WW, RW, MW, wW, CW, zR, AW) {
      return uC(RW ^ MW ^ wW, WW, RW, CW, zR, AW)
    }

    function LC(WW, RW, MW, wW, CW, zR, AW) {
      return uC(MW ^ (RW | ~wW), WW, RW, CW, zR, AW)
    }
    xz("v3", 48, (function(WW) {
      if ("string" === typeof WW) {
        var RW = unescape(encodeURIComponent(WW));
        WW = new Uint8Array(RW.length);
        for (var MW = 0; MW < RW.length; ++MW) WW[MW] = RW.charCodeAt(MW)
      }
      return function(WW) {
        for (var RW = [], MW = 32 * WW.length, wW = "0123456789abcdef", CW = 0; CW < MW; CW += 8) {
          var zR = WW[CW >> 5] >>> CW % 32 & 255,
            AW = parseInt(wW.charAt(zR >>> 4 & 15) + wW.charAt(15 & zR), 16);
          RW.push(AW)
        }
        return RW
      }(function(WW, RW) {
        WW[RW >> 5] |= 128 << RW % 32, WW[vz(RW) - 1] = RW;
        for (var MW = 1732584193, wW = -271733879, CW = -1732584194, zR = 271733878, AW = 0; AW < WW.length; AW += 16) {
          var bR = MW,
            yR = wW,
            NW = CW,
            eW = zR;
          MW = OC(MW, wW, CW, zR, WW[AW], 7, -680876936), zR = OC(zR, MW, wW, CW, WW[AW + 1], 12, -389564586), CW = OC(CW, zR, MW, wW, WW[AW + 2], 17, 606105819), wW = OC(wW, CW, zR, MW, WW[AW + 3], 22, -1044525330), MW = OC(MW, wW, CW, zR, WW[AW + 4], 7, -176418897), zR = OC(zR, MW, wW, CW, WW[AW + 5], 12, 1200080426), CW = OC(CW, zR, MW, wW, WW[AW + 6], 17, -1473231341), wW = OC(wW, CW, zR, MW, WW[AW + 7], 22, -45705983), MW = OC(MW, wW, CW, zR, WW[AW + 8], 7, 1770035416), zR = OC(zR, MW, wW, CW, WW[AW + 9], 12, -1958414417), CW = OC(CW, zR, MW, wW, WW[AW + 10], 17, -42063), wW = OC(wW, CW, zR, MW, WW[AW + 11], 22, -1990404162), MW = OC(MW, wW, CW, zR, WW[AW + 12], 7, 1804603682), zR = OC(zR, MW, wW, CW, WW[AW + 13], 12, -40341101), CW = OC(CW, zR, MW, wW, WW[AW + 14], 17, -1502002290), MW = nC(MW, wW = OC(wW, CW, zR, MW, WW[AW + 15], 22, 1236535329), CW, zR, WW[AW + 1], 5, -165796510), zR = nC(zR, MW, wW, CW, WW[AW + 6], 9, -1069501632), CW = nC(CW, zR, MW, wW, WW[AW + 11], 14, 643717713), wW = nC(wW, CW, zR, MW, WW[AW], 20, -373897302), MW = nC(MW, wW, CW, zR, WW[AW + 5], 5, -701558691), zR = nC(zR, MW, wW, CW, WW[AW + 10], 9, 38016083), CW = nC(CW, zR, MW, wW, WW[AW + 15], 14, -660478335), wW = nC(wW, CW, zR, MW, WW[AW + 4], 20, -405537848), MW = nC(MW, wW, CW, zR, WW[AW + 9], 5, 568446438), zR = nC(zR, MW, wW, CW, WW[AW + 14], 9, -1019803690), CW = nC(CW, zR, MW, wW, WW[AW + 3], 14, -187363961), wW = nC(wW, CW, zR, MW, WW[AW + 8], 20, 1163531501), MW = nC(MW, wW, CW, zR, WW[AW + 13], 5, -1444681467), zR = nC(zR, MW, wW, CW, WW[AW + 2], 9, -51403784), CW = nC(CW, zR, MW, wW, WW[AW + 7], 14, 1735328473), MW = GC(MW, wW = nC(wW, CW, zR, MW, WW[AW + 12], 20, -1926607734), CW, zR, WW[AW + 5], 4, -378558), zR = GC(zR, MW, wW, CW, WW[AW + 8], 11, -2022574463), CW = GC(CW, zR, MW, wW, WW[AW + 11], 16, 1839030562), wW = GC(wW, CW, zR, MW, WW[AW + 14], 23, -35309556), MW = GC(MW, wW, CW, zR, WW[AW + 1], 4, -1530992060), zR = GC(zR, MW, wW, CW, WW[AW + 4], 11, 1272893353), CW = GC(CW, zR, MW, wW, WW[AW + 7], 16, -155497632), wW = GC(wW, CW, zR, MW, WW[AW + 10], 23, -1094730640), MW = GC(MW, wW, CW, zR, WW[AW + 13], 4, 681279174), zR = GC(zR, MW, wW, CW, WW[AW], 11, -358537222), CW = GC(CW, zR, MW, wW, WW[AW + 3], 16, -722521979), wW = GC(wW, CW, zR, MW, WW[AW + 6], 23, 76029189), MW = GC(MW, wW, CW, zR, WW[AW + 9], 4, -640364487), zR = GC(zR, MW, wW, CW, WW[AW + 12], 11, -421815835), CW = GC(CW, zR, MW, wW, WW[AW + 15], 16, 530742520), MW = LC(MW, wW = GC(wW, CW, zR, MW, WW[AW + 2], 23, -995338651), CW, zR, WW[AW], 6, -198630844), zR = LC(zR, MW, wW, CW, WW[AW + 7], 10, 1126891415), CW = LC(CW, zR, MW, wW, WW[AW + 14], 15, -1416354905), wW = LC(wW, CW, zR, MW, WW[AW + 5], 21, -57434055), MW = LC(MW, wW, CW, zR, WW[AW + 12], 6, 1700485571), zR = LC(zR, MW, wW, CW, WW[AW + 3], 10, -1894986606), CW = LC(CW, zR, MW, wW, WW[AW + 10], 15, -1051523), wW = LC(wW, CW, zR, MW, WW[AW + 1], 21, -2054922799), MW = LC(MW, wW, CW, zR, WW[AW + 8], 6, 1873313359), zR = LC(zR, MW, wW, CW, WW[AW + 15], 10, -30611744), CW = LC(CW, zR, MW, wW, WW[AW + 6], 15, -1560198380), wW = LC(wW, CW, zR, MW, WW[AW + 13], 21, 1309151649), MW = LC(MW, wW, CW, zR, WW[AW + 4], 6, -145523070), zR = LC(zR, MW, wW, CW, WW[AW + 11], 10, -1120210379), CW = LC(CW, zR, MW, wW, WW[AW + 2], 15, 718787259), wW = LC(wW, CW, zR, MW, WW[AW + 9], 21, -343485551), MW = KC(MW, bR), wW = KC(wW, yR), CW = KC(CW, NW), zR = KC(zR, eW)
        }
        return [MW, wW, CW, zR]
      }(function(WW) {
        if (0 === WW.length) return [];
        for (var RW = 8 * WW.length, MW = new Uint32Array(vz(RW)), wW = 0; wW < RW; wW += 8) MW[wW >> 5] |= (255 & WW[wW / 8]) << wW % 32;
        return MW
      }(WW), 8 * WW.length))
    }));
    var HC = new Uint8Array(16);

    function DC() {
      if (!mz && !(mz = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return mz(HC)
    }

    function qz(WW, RW, MW) {
      var wW = (WW = WW || {}).random || (WW.rng || DC)();
      if (wW[6] = 15 & wW[6] | 64, wW[8] = 63 & wW[8] | 128, RW) {
        MW = MW || 0;
        for (var CW = 0; CW < 16; ++CW) RW[MW + CW] = wW[CW];
        return RW
      }
      return VC(wW)
    }

    function ZC(WW, RW, MW, wW) {
      switch (WW) {
        case 0:
          return RW & MW ^ ~RW & wW;
        case 1:
        case 3:
          return RW ^ MW ^ wW;
        case 2:
          return RW & MW ^ RW & wW ^ MW & wW
      }
    }

    function SC(WW, RW) {
      return WW << RW | WW >>> 32 - RW
    }
    xz("v5", 80, (function(WW) {
      var RW = [1518500249, 1859775393, 2400959708, 3395469782],
        MW = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof WW) {
        var wW = unescape(encodeURIComponent(WW));
        WW = [];
        for (var CW = 0; CW < wW.length; ++CW) WW.push(wW.charCodeAt(CW))
      } else Array.isArray(WW) || (WW = Array.prototype.slice.call(WW));
      WW.push(128);
      for (var zR = WW.length / 4 + 2, AW = Math.ceil(zR / 16), bR = new Array(AW), yR = 0; yR < AW; ++yR) {
        for (var NW = new Uint32Array(16), eW = 0; eW < 16; ++eW) NW[eW] = WW[64 * yR + 4 * eW] << 24 | WW[64 * yR + 4 * eW + 1] << 16 | WW[64 * yR + 4 * eW + 2] << 8 | WW[64 * yR + 4 * eW + 3];
        bR[yR] = NW
      }
      bR[AW - 1][14] = 8 * (WW.length - 1) / Math.pow(2, 32), bR[AW - 1][14] = Math.floor(bR[AW - 1][14]), bR[AW - 1][15] = 8 * (WW.length - 1) & 4294967295;
      for (var BW = 0; BW < AW; ++BW) {
        for (var tR = new Uint32Array(80), TW = 0; TW < 16; ++TW) tR[TW] = bR[BW][TW];
        for (var gR = 16; gR < 80; ++gR) tR[gR] = SC(tR[gR - 3] ^ tR[gR - 8] ^ tR[gR - 14] ^ tR[gR - 16], 1);
        for (var iR = MW[0], YW = MW[1], JW = MW[2], PW = MW[3], IW = MW[4], oW = 0; oW < 80; ++oW) {
          var lW = Math.floor(oW / 20),
            FW = SC(iR, 5) + ZC(lW, YW, JW, PW) + IW + RW[lW] + tR[oW] >>> 0;
          IW = PW, PW = JW, JW = SC(YW, 30) >>> 0, YW = iR, iR = FW
        }
        MW[0] = MW[0] + iR >>> 0, MW[1] = MW[1] + YW >>> 0, MW[2] = MW[2] + JW >>> 0, MW[3] = MW[3] + PW >>> 0, MW[4] = MW[4] + IW >>> 0
      }
      return [MW[0] >> 24 & 255, MW[0] >> 16 & 255, MW[0] >> 8 & 255, 255 & MW[0], MW[1] >> 24 & 255, MW[1] >> 16 & 255, MW[1] >> 8 & 255, 255 & MW[1], MW[2] >> 24 & 255, MW[2] >> 16 & 255, MW[2] >> 8 & 255, 255 & MW[2], MW[3] >> 24 & 255, MW[3] >> 16 & 255, MW[3] >> 8 & 255, 255 & MW[3], MW[4] >> 24 & 255, MW[4] >> 16 & 255, MW[4] >> 8 & 255, 255 & MW[4]]
    }));
    class Wz extends Error {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(RW), this.code = WW, this.message = RW, this.name = "Discord SDK Error"
      }
    }
    const Rz = ["log", "warn", "debug", "info", "error"];
    var Mz;
    ! function(WW) {
      WW[WW.HANDSHAKE = 0] = "HANDSHAKE", WW[WW.FRAME = 1] = "FRAME", WW[WW.CLOSE = 2] = "CLOSE", WW[WW.HELLO = 3] = "HELLO"
    }(Mz || (Mz = {}));
    const wz = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Cz {
      getTransfer(WW) {
        var RW;
        switch (WW.cmd) {
          case HM.SUBSCRIBE:
          case HM.UNSUBSCRIBE:
            return;
          default:
            return null !== (RW = WW.transfer) && void 0 !== RW ? RW : void 0
        }
      }
      constructor(WW, RW) {
        var MW;
        if (this.eventBus = new NW, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = WW => {
            var RW;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const MW = qz();
            null === (RW = this.source) || void 0 === RW || RW.postMessage([Mz.FRAME, Object.assign(Object.assign({}, WW), {
              nonce: MW
            })], this.sourceOrigin, this.getTransfer(WW));
            return new Promise(((WW, RW) => {
              this.pendingCommands.set(MW, {
                resolve: WW,
                reject: RW
              })
            }))
          }, this.commands = (MW = this.sendCommand, {
            authenticate: TC(MW),
            authorize: gz(MW),
            captureLog: iz(MW),
            encourageHardwareAcceleration: YC(MW),
            getChannel: sC(MW),
            getChannelPermissions: IC(MW),
            getEntitlements: JC(MW),
            getPlatformBehaviors: oC(MW),
            getSkus: PC(MW),
            openExternalLink: lC(MW),
            openInviteDialog: FC(MW),
            openShareMomentDialog: fC(MW),
            setActivity: QC(MW),
            setConfig: rz(MW),
            setOrientationLockState: XC(MW),
            startPurchase: jz(MW),
            userSettingsGetLocale: kz(MW),
            initiateImageUpload: az(MW),
            getInstanceConnectedParticipants: dC(MW)
          }), this.handleMessage = WW => {
            if (!wz.has(WW.origin)) return;
            const RW = WW.data;
            if (!Array.isArray(RW)) return;
            const [MW, wW] = RW;
            switch (MW) {
              case Mz.HELLO:
                return;
              case Mz.CLOSE:
                return this.handleClose(wW);
              case Mz.HANDSHAKE:
                return this.handleHandshake();
              case Mz.FRAME:
                return this.handleFrame(wW);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = WW, this.configuration = null !== RW && void 0 !== RW ? RW : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = hM.DESKTOP, this.guildId = null, void(this.channelId = null);
        const wW = new URLSearchParams(this._getSearch()),
          CW = wW.get("frame_id");
        if (!CW) throw new Error("frame_id query param is not defined");
        this.frameId = CW;
        const zR = wW.get("instance_id");
        if (!zR) throw new Error("instance_id query param is not defined");
        this.instanceId = zR;
        const AW = wW.get("platform");
        if (!AW) throw new Error("platform query param is not defined");
        if (AW !== hM.DESKTOP && AW !== hM.MOBILE) throw new Error(`Invalid query param "platform" of "${AW}". Valid values are "${hM.DESKTOP}" or "${hM.MOBILE}"`);
        this.platform = AW, this.guildId = wW.get("guild_id"), this.channelId = wW.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var WW;
          return [null !== (WW = window.parent.opener) && void 0 !== WW ? WW : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(WW, RW) {
        var MW;
        window.removeEventListener("message", this.handleMessage);
        const wW = qz();
        null === (MW = this.source) || void 0 === MW || MW.postMessage([Mz.CLOSE, {
          code: WW,
          message: RW,
          nonce: wW
        }], this.sourceOrigin)
      }
      async subscribe(WW, RW) {
        for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
        const [zR] = wW, AW = this.eventBus.listenerCount(WW), bR = this.eventBus.on(WW, RW);
        return Object.values(pw).includes(WW) && WW !== pw.READY && 0 === AW && await this.sendCommand({
          cmd: HM.SUBSCRIBE,
          args: zR,
          evt: WW
        }), bR
      }
      async unsubscribe(WW, RW) {
        for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
        const [zR] = wW;
        return WW !== pw.READY && 1 === this.eventBus.listenerCount(WW) && await this.sendCommand({
          cmd: HM.UNSUBSCRIBE,
          evt: WW,
          args: zR
        }), this.eventBus.off(WW, RW)
      }
      async ready() {
        this.isReady || await new Promise((WW => {
          this.eventBus.once(pw.READY, WW)
        }))
      }
      handshake() {
        var WW;
        null === (WW = this.source) || void 0 === WW || WW.postMessage([Mz.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(pw.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const WW = (WW, RW) => {
          this.commands.captureLog({
            level: WW,
            message: RW
          })
        };
        Rz.forEach((RW => {
          ! function(WW, RW, MW) {
            const wW = WW[RW],
              CW = WW;
            wW && (WW[RW] = function() {
              const WW = [].slice.call(arguments),
                zR = "" + WW.join(" ");
              MW(RW, zR), wW.apply(CW, WW)
            })
          }(console, RW, WW)
        }))
      }
      handleClose(WW) {
        yz.parse(WW)
      }
      handleHandshake() {}
      handleFrame(WW) {
        var RW, MW;
        let wW;
        try {
          wW = eC(WW)
        } catch (CW) {
          return console.error("Failed to parse", WW), void console.error(CW)
        }
        if ("DISPATCH" === wW.cmd) this.eventBus.emit(wW.evt, wW.data);
        else {
          if (wW.evt === dw) {
            if (null != wW.nonce) return null === (RW = this.pendingCommands.get(wW.nonce)) || void 0 === RW || RW.reject(wW.data), void this.pendingCommands.delete(wW.nonce);
            this.eventBus.emit("error", new Wz(wW.data.code, wW.data.message))
          }
          if (null == wW.nonce) return void console.error("Missing nonce", WW);
          null === (MW = this.pendingCommands.get(wW.nonce)) || void 0 === MW || MW.resolve(wW), this.pendingCommands.delete(wW.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var zA, Az = 1e9,
      bA = !0,
      yA = "[DecimalError] ",
      Nz = yA + "Invalid argument: ",
      ez = yA + "Exponent out of range: ",
      Bz = Math.floor,
      tA = Math.pow,
      Tz = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      gA = 1e7,
      iA = 9007199254740991,
      Yz = Bz(1286742750677284.5),
      Jz = {};

    function Pz(WW, RW) {
      var MW, wW, CW, zR, AW, bR, yR, NW, eW = WW.constructor,
        BW = eW.precision;
      if (!WW.s || !RW.s) return RW.s || (RW = new eW(WW)), bA ? jA(RW, BW) : RW;
      if (yR = WW.d, NW = RW.d, AW = WW.e, CW = RW.e, yR = yR.slice(), zR = AW - CW) {
        for (zR < 0 ? (wW = yR, zR = -zR, bR = NW.length) : (wW = NW, CW = AW, bR = yR.length), zR > (bR = (AW = Math.ceil(BW / 7)) > bR ? AW + 1 : bR + 1) && (zR = bR, wW.length = 1), wW.reverse(); zR--;) wW.push(0);
        wW.reverse()
      }
      for ((bR = yR.length) - (zR = NW.length) < 0 && (zR = bR, wW = NW, NW = yR, yR = wW), MW = 0; zR;) MW = (yR[--zR] = yR[zR] + NW[zR] + MW) / gA | 0, yR[zR] %= gA;
      for (MW && (yR.unshift(MW), ++CW), bR = yR.length; 0 == yR[--bR];) yR.pop();
      return RW.d = yR, RW.e = CW, bA ? jA(RW, BW) : RW
    }

    function Iz(WW, RW, MW) {
      if (WW !== ~~WW || WW < RW || WW > MW) throw Error(Nz + WW)
    }

    function oz(WW) {
      var RW, MW, wW, CW = WW.length - 1,
        zR = "",
        AW = WW[0];
      if (CW > 0) {
        for (zR += AW, RW = 1; RW < CW; RW++)(MW = 7 - (wW = WW[RW] + "").length) && (zR += rA(MW)), zR += wW;
        (MW = 7 - (wW = (AW = WW[RW]) + "").length) && (zR += rA(MW))
      } else if (0 === AW) return "0";
      for (; AW % 10 === 0;) AW /= 10;
      return zR + AW
    }
    Jz.absoluteValue = Jz.abs = function() {
      var WW = new this.constructor(this);
      return WW.s && (WW.s = 1), WW
    }, Jz.comparedTo = Jz.cmp = function(WW) {
      var RW, MW, wW, CW, zR = this;
      if (WW = new zR.constructor(WW), zR.s !== WW.s) return zR.s || -WW.s;
      if (zR.e !== WW.e) return zR.e > WW.e ^ zR.s < 0 ? 1 : -1;
      for (RW = 0, MW = (wW = zR.d.length) < (CW = WW.d.length) ? wW : CW; RW < MW; ++RW)
        if (zR.d[RW] !== WW.d[RW]) return zR.d[RW] > WW.d[RW] ^ zR.s < 0 ? 1 : -1;
      return wW === CW ? 0 : wW > CW ^ zR.s < 0 ? 1 : -1
    }, Jz.decimalPlaces = Jz.dp = function() {
      var WW = this,
        RW = WW.d.length - 1,
        MW = 7 * (RW - WW.e);
      if (RW = WW.d[RW])
        for (; RW % 10 == 0; RW /= 10) MW--;
      return MW < 0 ? 0 : MW
    }, Jz.dividedBy = Jz.div = function(WW) {
      return lz(this, new this.constructor(WW))
    }, Jz.dividedToIntegerBy = Jz.idiv = function(WW) {
      var RW = this.constructor;
      return jA(lz(this, new RW(WW), 0, 1), RW.precision)
    }, Jz.equals = Jz.eq = function(WW) {
      return !this.cmp(WW)
    }, Jz.exponent = function() {
      return fz(this)
    }, Jz.greaterThan = Jz.gt = function(WW) {
      return this.cmp(WW) > 0
    }, Jz.greaterThanOrEqualTo = Jz.gte = function(WW) {
      return this.cmp(WW) >= 0
    }, Jz.isInteger = Jz.isint = function() {
      return this.e > this.d.length - 2
    }, Jz.isNegative = Jz.isneg = function() {
      return this.s < 0
    }, Jz.isPositive = Jz.ispos = function() {
      return this.s > 0
    }, Jz.isZero = function() {
      return 0 === this.s
    }, Jz.lessThan = Jz.lt = function(WW) {
      return this.cmp(WW) < 0
    }, Jz.lessThanOrEqualTo = Jz.lte = function(WW) {
      return this.cmp(WW) < 1
    }, Jz.logarithm = Jz.log = function(WW) {
      var RW, MW = this,
        wW = MW.constructor,
        CW = wW.precision,
        zR = CW + 5;
      if (void 0 === WW) WW = new wW(10);
      else if ((WW = new wW(WW)).s < 1 || WW.eq(zA)) throw Error(yA + "NaN");
      if (MW.s < 1) throw Error(yA + (MW.s ? "NaN" : "-Infinity"));
      return MW.eq(zA) ? new wW(0) : (bA = !1, RW = lz(cA(MW, zR), cA(WW, zR), zR), bA = !0, jA(RW, CW))
    }, Jz.minus = Jz.sub = function(WW) {
      var RW = this;
      return WW = new RW.constructor(WW), RW.s == WW.s ? kA(RW, WW) : Pz(RW, (WW.s = -WW.s, WW))
    }, Jz.modulo = Jz.mod = function(WW) {
      var RW, MW = this,
        wW = MW.constructor,
        CW = wW.precision;
      if (!(WW = new wW(WW)).s) throw Error(yA + "NaN");
      return MW.s ? (bA = !1, RW = lz(MW, WW, 0, 1).times(WW), bA = !0, MW.minus(RW)) : jA(new wW(MW), CW)
    }, Jz.naturalExponential = Jz.exp = function() {
      return Fz(this)
    }, Jz.naturalLogarithm = Jz.ln = function() {
      return cA(this)
    }, Jz.negated = Jz.neg = function() {
      var WW = new this.constructor(this);
      return WW.s = -WW.s || 0, WW
    }, Jz.plus = Jz.add = function(WW) {
      var RW = this;
      return WW = new RW.constructor(WW), RW.s == WW.s ? Pz(RW, WW) : kA(RW, (WW.s = -WW.s, WW))
    }, Jz.precision = Jz.sd = function(WW) {
      var RW, MW, wW, CW = this;
      if (void 0 !== WW && WW !== !!WW && 1 !== WW && 0 !== WW) throw Error(Nz + WW);
      if (RW = fz(CW) + 1, MW = 7 * (wW = CW.d.length - 1) + 1, wW = CW.d[wW]) {
        for (; wW % 10 == 0; wW /= 10) MW--;
        for (wW = CW.d[0]; wW >= 10; wW /= 10) MW++
      }
      return WW && RW > MW ? RW : MW
    }, Jz.squareRoot = Jz.sqrt = function() {
      var WW, RW, MW, wW, CW, zR, AW, bR = this,
        yR = bR.constructor;
      if (bR.s < 1) {
        if (!bR.s) return new yR(0);
        throw Error(yA + "NaN")
      }
      for (WW = fz(bR), bA = !1, 0 == (CW = Math.sqrt(+bR)) || CW == 1 / 0 ? (((RW = oz(bR.d)).length + WW) % 2 == 0 && (RW += "0"), CW = Math.sqrt(RW), WW = Bz((WW + 1) / 2) - (WW < 0 || WW % 2), wW = new yR(RW = CW == 1 / 0 ? "1e" + WW : (RW = CW.toExponential()).slice(0, RW.indexOf("e") + 1) + WW)) : wW = new yR(CW.toString()), CW = AW = (MW = yR.precision) + 3;;)
        if (wW = (zR = wW).plus(lz(bR, zR, AW + 2)).times(.5), oz(zR.d).slice(0, AW) === (RW = oz(wW.d)).slice(0, AW)) {
          if (RW = RW.slice(AW - 3, AW + 1), CW == AW && "4999" == RW) {
            if (jA(zR, MW + 1, 0), zR.times(zR).eq(bR)) {
              wW = zR;
              break
            }
          } else if ("9999" != RW) break;
          AW += 4
        } return bA = !0, jA(wW, MW)
    }, Jz.times = Jz.mul = function(WW) {
      var RW, MW, wW, CW, zR, AW, bR, yR, NW, eW = this,
        BW = eW.constructor,
        tR = eW.d,
        TW = (WW = new BW(WW)).d;
      if (!eW.s || !WW.s) return new BW(0);
      for (WW.s *= eW.s, MW = eW.e + WW.e, (yR = tR.length) < (NW = TW.length) && (zR = tR, tR = TW, TW = zR, AW = yR, yR = NW, NW = AW), zR = [], wW = AW = yR + NW; wW--;) zR.push(0);
      for (wW = NW; --wW >= 0;) {
        for (RW = 0, CW = yR + wW; CW > wW;) bR = zR[CW] + TW[wW] * tR[CW - wW - 1] + RW, zR[CW--] = bR % gA | 0, RW = bR / gA | 0;
        zR[CW] = (zR[CW] + RW) % gA | 0
      }
      for (; !zR[--AW];) zR.pop();
      return RW ? ++MW : zR.shift(), WW.d = zR, WW.e = MW, bA ? jA(WW, BW.precision) : WW
    }, Jz.toDecimalPlaces = Jz.todp = function(WW, RW) {
      var MW = this,
        wW = MW.constructor;
      return MW = new wW(MW), void 0 === WW ? MW : (Iz(WW, 0, Az), void 0 === RW ? RW = wW.rounding : Iz(RW, 0, 8), jA(MW, WW + fz(MW) + 1, RW))
    }, Jz.toExponential = function(WW, RW) {
      var MW, wW = this,
        CW = wW.constructor;
      return void 0 === WW ? MW = aA(wW, !0) : (Iz(WW, 0, Az), void 0 === RW ? RW = CW.rounding : Iz(RW, 0, 8), MW = aA(wW = jA(new CW(wW), WW + 1, RW), !0, WW + 1)), MW
    }, Jz.toFixed = function(WW, RW) {
      var MW, wW, CW = this,
        zR = CW.constructor;
      return void 0 === WW ? aA(CW) : (Iz(WW, 0, Az), void 0 === RW ? RW = zR.rounding : Iz(RW, 0, 8), MW = aA((wW = jA(new zR(CW), WW + fz(CW) + 1, RW)).abs(), !1, WW + fz(wW) + 1), CW.isneg() && !CW.isZero() ? "-" + MW : MW)
    }, Jz.toInteger = Jz.toint = function() {
      var WW = this,
        RW = WW.constructor;
      return jA(new RW(WW), fz(WW) + 1, RW.rounding)
    }, Jz.toNumber = function() {
      return +this
    }, Jz.toPower = Jz.pow = function(WW) {
      var RW, MW, wW, CW, zR, AW, bR = this,
        yR = bR.constructor,
        NW = +(WW = new yR(WW));
      if (!WW.s) return new yR(zA);
      if (!(bR = new yR(bR)).s) {
        if (WW.s < 1) throw Error(yA + "Infinity");
        return bR
      }
      if (bR.eq(zA)) return bR;
      if (wW = yR.precision, WW.eq(zA)) return jA(bR, wW);
      if (AW = (RW = WW.e) >= (MW = WW.d.length - 1), zR = bR.s, AW) {
        if ((MW = NW < 0 ? -NW : NW) <= iA) {
          for (CW = new yR(zA), RW = Math.ceil(wW / 7 + 4), bA = !1; MW % 2 && sz((CW = CW.times(bR)).d, RW), 0 !== (MW = Bz(MW / 2));) sz((bR = bR.times(bR)).d, RW);
          return bA = !0, WW.s < 0 ? new yR(zA).div(CW) : jA(CW, wW)
        }
      } else if (zR < 0) throw Error(yA + "NaN");
      return zR = zR < 0 && 1 & WW.d[Math.max(RW, MW)] ? -1 : 1, bR.s = 1, bA = !1, CW = WW.times(cA(bR, wW + 12)), bA = !0, (CW = Fz(CW)).s = zR, CW
    }, Jz.toPrecision = function(WW, RW) {
      var MW, wW, CW = this,
        zR = CW.constructor;
      return void 0 === WW ? wW = aA(CW, (MW = fz(CW)) <= zR.toExpNeg || MW >= zR.toExpPos) : (Iz(WW, 1, Az), void 0 === RW ? RW = zR.rounding : Iz(RW, 0, 8), wW = aA(CW = jA(new zR(CW), WW, RW), WW <= (MW = fz(CW)) || MW <= zR.toExpNeg, WW)), wW
    }, Jz.toSignificantDigits = Jz.tosd = function(WW, RW) {
      var MW = this.constructor;
      return void 0 === WW ? (WW = MW.precision, RW = MW.rounding) : (Iz(WW, 1, Az), void 0 === RW ? RW = MW.rounding : Iz(RW, 0, 8)), jA(new MW(this), WW, RW)
    }, Jz.toString = Jz.valueOf = Jz.val = Jz.toJSON = Jz[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var WW = this,
        RW = fz(WW),
        MW = WW.constructor;
      return aA(WW, RW <= MW.toExpNeg || RW >= MW.toExpPos)
    };
    var lz = function() {
      function WW(WW, RW) {
        var MW, wW = 0,
          CW = WW.length;
        for (WW = WW.slice(); CW--;) MW = WW[CW] * RW + wW, WW[CW] = MW % gA | 0, wW = MW / gA | 0;
        return wW && WW.unshift(wW), WW
      }

      function RW(WW, RW, MW, wW) {
        var CW, zR;
        if (MW != wW) zR = MW > wW ? 1 : -1;
        else
          for (CW = zR = 0; CW < MW; CW++)
            if (WW[CW] != RW[CW]) {
              zR = WW[CW] > RW[CW] ? 1 : -1;
              break
            } return zR
      }

      function MW(WW, RW, MW) {
        for (var wW = 0; MW--;) WW[MW] -= wW, wW = WW[MW] < RW[MW] ? 1 : 0, WW[MW] = wW * gA + WW[MW] - RW[MW];
        for (; !WW[0] && WW.length > 1;) WW.shift()
      }
      return function(wW, CW, zR, AW) {
        var bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW, rR = wW.constructor,
          cR = wW.s == CW.s ? 1 : -1,
          XW = wW.d,
          jR = CW.d;
        if (!wW.s) return new rR(wW);
        if (!CW.s) throw Error(yA + "Division by zero");
        for (yR = wW.e - CW.e, fW = jR.length, lW = XW.length, gR = (TW = new rR(cR)).d = [], NW = 0; jR[NW] == (XW[NW] || 0);) ++NW;
        if (jR[NW] > (XW[NW] || 0) && --yR, (PW = null == zR ? zR = rR.precision : AW ? zR + (fz(wW) - fz(CW)) + 1 : zR) < 0) return new rR(0);
        if (PW = PW / 7 + 2 | 0, NW = 0, 1 == fW)
          for (eW = 0, jR = jR[0], PW++;
            (NW < lW || eW) && PW--; NW++) IW = eW * gA + (XW[NW] || 0), gR[NW] = IW / jR | 0, eW = IW % jR | 0;
        else {
          for ((eW = gA / (jR[0] + 1) | 0) > 1 && (jR = WW(jR, eW), XW = WW(XW, eW), fW = jR.length, lW = XW.length), oW = fW, YW = (iR = XW.slice(0, fW)).length; YW < fW;) iR[YW++] = 0;
          (QW = jR.slice()).unshift(0), FW = jR[0], jR[1] >= gA / 2 && ++FW;
          do {
            eW = 0, (bR = RW(jR, iR, fW, YW)) < 0 ? (JW = iR[0], fW != YW && (JW = JW * gA + (iR[1] || 0)), (eW = JW / FW | 0) > 1 ? (eW >= gA && (eW = gA - 1), 1 == (bR = RW(BW = WW(jR, eW), iR, tR = BW.length, YW = iR.length)) && (eW--, MW(BW, fW < tR ? QW : jR, tR))) : (0 == eW && (bR = eW = 1), BW = jR.slice()), (tR = BW.length) < YW && BW.unshift(0), MW(iR, BW, YW), -1 == bR && (bR = RW(jR, iR, fW, YW = iR.length)) < 1 && (eW++, MW(iR, fW < YW ? QW : jR, YW)), YW = iR.length) : 0 === bR && (eW++, iR = [0]), gR[NW++] = eW, bR && iR[0] ? iR[YW++] = XW[oW] || 0 : (iR = [XW[oW]], YW = 1)
          } while ((oW++ < lW || void 0 !== iR[0]) && PW--)
        }
        return gR[0] || gR.shift(), TW.e = yR, jA(TW, AW ? zR + fz(TW) + 1 : zR)
      }
    }();

    function Fz(WW, RW) {
      var MW, wW, CW, zR, AW, bR = 0,
        yR = 0,
        NW = WW.constructor,
        eW = NW.precision;
      if (fz(WW) > 16) throw Error(ez + fz(WW));
      if (!WW.s) return new NW(zA);
      for (null == RW ? (bA = !1, AW = eW) : AW = RW, zR = new NW(.03125); WW.abs().gte(.1);) WW = WW.times(zR), yR += 5;
      for (AW += Math.log(tA(2, yR)) / Math.LN10 * 2 + 5 | 0, MW = wW = CW = new NW(zA), NW.precision = AW;;) {
        if (wW = jA(wW.times(WW), AW), MW = MW.times(++bR), oz((zR = CW.plus(lz(wW, MW, AW))).d).slice(0, AW) === oz(CW.d).slice(0, AW)) {
          for (; yR--;) CW = jA(CW.times(CW), AW);
          return NW.precision = eW, null == RW ? (bA = !0, jA(CW, eW)) : CW
        }
        CW = zR
      }
    }

    function fz(WW) {
      for (var RW = 7 * WW.e, MW = WW.d[0]; MW >= 10; MW /= 10) RW++;
      return RW
    }

    function Qz(WW, RW, MW) {
      if (RW > WW.LN10.sd()) throw bA = !0, MW && (WW.precision = MW), Error(yA + "LN10 precision limit exceeded");
      return jA(new WW(WW.LN10), RW)
    }

    function rA(WW) {
      for (var RW = ""; WW--;) RW += "0";
      return RW
    }

    function cA(WW, RW) {
      var MW, wW, CW, zR, AW, bR, yR, NW, eW, BW = 1,
        tR = WW,
        TW = tR.d,
        gR = tR.constructor,
        iR = gR.precision;
      if (tR.s < 1) throw Error(yA + (tR.s ? "NaN" : "-Infinity"));
      if (tR.eq(zA)) return new gR(0);
      if (null == RW ? (bA = !1, NW = iR) : NW = RW, tR.eq(10)) return null == RW && (bA = !0), Qz(gR, NW);
      if (NW += 10, gR.precision = NW, wW = (MW = oz(TW)).charAt(0), zR = fz(tR), !(Math.abs(zR) < 15e14)) return yR = Qz(gR, NW + 2, iR).times(zR + ""), tR = cA(new gR(wW + "." + MW.slice(1)), NW - 10).plus(yR), gR.precision = iR, null == RW ? (bA = !0, jA(tR, iR)) : tR;
      for (; wW < 7 && 1 != wW || 1 == wW && MW.charAt(1) > 3;) wW = (MW = oz((tR = tR.times(WW)).d)).charAt(0), BW++;
      for (zR = fz(tR), wW > 1 ? (tR = new gR("0." + MW), zR++) : tR = new gR(wW + "." + MW.slice(1)), bR = AW = tR = lz(tR.minus(zA), tR.plus(zA), NW), eW = jA(tR.times(tR), NW), CW = 3;;) {
        if (AW = jA(AW.times(eW), NW), oz((yR = bR.plus(lz(AW, new gR(CW), NW))).d).slice(0, NW) === oz(bR.d).slice(0, NW)) return bR = bR.times(2), 0 !== zR && (bR = bR.plus(Qz(gR, NW + 2, iR).times(zR + ""))), bR = lz(bR, new gR(BW), NW), gR.precision = iR, null == RW ? (bA = !0, jA(bR, iR)) : bR;
        bR = yR, CW += 2
      }
    }

    function Xz(WW, RW) {
      var MW, wW, CW;
      for ((MW = RW.indexOf(".")) > -1 && (RW = RW.replace(".", "")), (wW = RW.search(/e/i)) > 0 ? (MW < 0 && (MW = wW), MW += +RW.slice(wW + 1), RW = RW.substring(0, wW)) : MW < 0 && (MW = RW.length), wW = 0; 48 === RW.charCodeAt(wW);) ++wW;
      for (CW = RW.length; 48 === RW.charCodeAt(CW - 1);) --CW;
      if (RW = RW.slice(wW, CW)) {
        if (CW -= wW, MW = MW - wW - 1, WW.e = Bz(MW / 7), WW.d = [], wW = (MW + 1) % 7, MW < 0 && (wW += 7), wW < CW) {
          for (wW && WW.d.push(+RW.slice(0, wW)), CW -= 7; wW < CW;) WW.d.push(+RW.slice(wW, wW += 7));
          wW = 7 - (RW = RW.slice(wW)).length
        } else wW -= CW;
        for (; wW--;) RW += "0";
        if (WW.d.push(+RW), bA && (WW.e > Yz || WW.e < -Yz)) throw Error(ez + MW)
      } else WW.s = 0, WW.e = 0, WW.d = [0];
      return WW
    }

    function jA(WW, RW, MW) {
      var wW, CW, zR, AW, bR, yR, NW, eW, BW = WW.d;
      for (AW = 1, zR = BW[0]; zR >= 10; zR /= 10) AW++;
      if ((wW = RW - AW) < 0) wW += 7, CW = RW, NW = BW[eW = 0];
      else {
        if ((eW = Math.ceil((wW + 1) / 7)) >= (zR = BW.length)) return WW;
        for (NW = zR = BW[eW], AW = 1; zR >= 10; zR /= 10) AW++;
        CW = (wW %= 7) - 7 + AW
      }
      if (void 0 !== MW && (bR = NW / (zR = tA(10, AW - CW - 1)) % 10 | 0, yR = RW < 0 || void 0 !== BW[eW + 1] || NW % zR, yR = MW < 4 ? (bR || yR) && (0 == MW || MW == (WW.s < 0 ? 3 : 2)) : bR > 5 || 5 == bR && (4 == MW || yR || 6 == MW && (wW > 0 ? CW > 0 ? NW / tA(10, AW - CW) : 0 : BW[eW - 1]) % 10 & 1 || MW == (WW.s < 0 ? 8 : 7))), RW < 1 || !BW[0]) return yR ? (zR = fz(WW), BW.length = 1, RW = RW - zR - 1, BW[0] = tA(10, (7 - RW % 7) % 7), WW.e = Bz(-RW / 7) || 0) : (BW.length = 1, BW[0] = WW.e = WW.s = 0), WW;
      if (0 == wW ? (BW.length = eW, zR = 1, eW--) : (BW.length = eW + 1, zR = tA(10, 7 - wW), BW[eW] = CW > 0 ? (NW / tA(10, AW - CW) % tA(10, CW) | 0) * zR : 0), yR)
        for (;;) {
          if (0 == eW) {
            (BW[0] += zR) == gA && (BW[0] = 1, ++WW.e);
            break
          }
          if (BW[eW] += zR, BW[eW] != gA) break;
          BW[eW--] = 0, zR = 1
        }
      for (wW = BW.length; 0 === BW[--wW];) BW.pop();
      if (bA && (WW.e > Yz || WW.e < -Yz)) throw Error(ez + fz(WW));
      return WW
    }

    function kA(WW, RW) {
      var MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR = WW.constructor,
        TW = tR.precision;
      if (!WW.s || !RW.s) return RW.s ? RW.s = -RW.s : RW = new tR(WW), bA ? jA(RW, TW) : RW;
      if (yR = WW.d, BW = RW.d, wW = RW.e, NW = WW.e, yR = yR.slice(), AW = NW - wW) {
        for ((eW = AW < 0) ? (MW = yR, AW = -AW, bR = BW.length) : (MW = BW, wW = NW, bR = yR.length), AW > (CW = Math.max(Math.ceil(TW / 7), bR) + 2) && (AW = CW, MW.length = 1), MW.reverse(), CW = AW; CW--;) MW.push(0);
        MW.reverse()
      } else {
        for ((eW = (CW = yR.length) < (bR = BW.length)) && (bR = CW), CW = 0; CW < bR; CW++)
          if (yR[CW] != BW[CW]) {
            eW = yR[CW] < BW[CW];
            break
          } AW = 0
      }
      for (eW && (MW = yR, yR = BW, BW = MW, RW.s = -RW.s), bR = yR.length, CW = BW.length - bR; CW > 0; --CW) yR[bR++] = 0;
      for (CW = BW.length; CW > AW;) {
        if (yR[--CW] < BW[CW]) {
          for (zR = CW; zR && 0 === yR[--zR];) yR[zR] = gA - 1;
          --yR[zR], yR[CW] += gA
        }
        yR[CW] -= BW[CW]
      }
      for (; 0 === yR[--bR];) yR.pop();
      for (; 0 === yR[0]; yR.shift()) --wW;
      return yR[0] ? (RW.d = yR, RW.e = wW, bA ? jA(RW, TW) : RW) : new tR(0)
    }

    function aA(WW, RW, MW) {
      var wW, CW = fz(WW),
        zR = oz(WW.d),
        AW = zR.length;
      return RW ? (MW && (wW = MW - AW) > 0 ? zR = zR.charAt(0) + "." + zR.slice(1) + rA(wW) : AW > 1 && (zR = zR.charAt(0) + "." + zR.slice(1)), zR = zR + (CW < 0 ? "e" : "e+") + CW) : CW < 0 ? (zR = "0." + rA(-CW - 1) + zR, MW && (wW = MW - AW) > 0 && (zR += rA(wW))) : CW >= AW ? (zR += rA(CW + 1 - AW), MW && (wW = MW - CW - 1) > 0 && (zR = zR + "." + rA(wW))) : ((wW = CW + 1) < AW && (zR = zR.slice(0, wW) + "." + zR.slice(wW)), MW && (wW = MW - AW) > 0 && (CW + 1 === AW && (zR += "."), zR += rA(wW))), WW.s < 0 ? "-" + zR : zR
    }

    function sz(WW, RW) {
      if (WW.length > RW) return WW.length = RW, !0
    }

    function dz(WW) {
      if (!WW || "object" !== typeof WW) throw Error(yA + "Object expected");
      var RW, MW, wW, CW = ["precision", 1, Az, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (RW = 0; RW < CW.length; RW += 3)
        if (void 0 !== (wW = WW[MW = CW[RW]])) {
          if (!(Bz(wW) === wW && wW >= CW[RW + 1] && wW <= CW[RW + 2])) throw Error(Nz + MW + ": " + wW);
          this[MW] = wW
        } if (void 0 !== (wW = WW[MW = "LN10"])) {
        if (wW != Math.LN10) throw Error(Nz + MW + ": " + wW);
        this[MW] = new this(wW)
      }
      return this
    }
    var pz = function WW(RW) {
      var MW, wW, CW;

      function zR(WW) {
        var RW = this;
        if (!(RW instanceof zR)) return new zR(WW);
        if (RW.constructor = zR, WW instanceof zR) return RW.s = WW.s, RW.e = WW.e, void(RW.d = (WW = WW.d) ? WW.slice() : WW);
        if ("number" === typeof WW) {
          if (0 * WW !== 0) throw Error(Nz + WW);
          if (WW > 0) RW.s = 1;
          else {
            if (!(WW < 0)) return RW.s = 0, RW.e = 0, void(RW.d = [0]);
            WW = -WW, RW.s = -1
          }
          return WW === ~~WW && WW < 1e7 ? (RW.e = 0, void(RW.d = [WW])) : Xz(RW, WW.toString())
        }
        if ("string" !== typeof WW) throw Error(Nz + WW);
        if (45 === WW.charCodeAt(0) ? (WW = WW.slice(1), RW.s = -1) : RW.s = 1, !Tz.test(WW)) throw Error(Nz + WW);
        Xz(RW, WW)
      }
      if (zR.prototype = Jz, zR.ROUND_UP = 0, zR.ROUND_DOWN = 1, zR.ROUND_CEIL = 2, zR.ROUND_FLOOR = 3, zR.ROUND_HALF_UP = 4, zR.ROUND_HALF_DOWN = 5, zR.ROUND_HALF_EVEN = 6, zR.ROUND_HALF_CEIL = 7, zR.ROUND_HALF_FLOOR = 8, zR.clone = WW, zR.config = zR.set = dz, void 0 === RW && (RW = {}), RW)
        for (CW = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], MW = 0; MW < CW.length;) RW.hasOwnProperty(wW = CW[MW++]) || (RW[wW] = this[wW]);
      return zR.config(RW), zR
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    zA = new pz(1);
    var hz;
    ! function(WW) {
      WW.AED = "aed", WW.AFN = "afn", WW.ALL = "all", WW.AMD = "amd", WW.ANG = "ang", WW.AOA = "aoa", WW.ARS = "ars", WW.AUD = "aud", WW.AWG = "awg", WW.AZN = "azn", WW.BAM = "bam", WW.BBD = "bbd", WW.BDT = "bdt", WW.BGN = "bgn", WW.BHD = "bhd", WW.BIF = "bif", WW.BMD = "bmd", WW.BND = "bnd", WW.BOB = "bob", WW.BOV = "bov", WW.BRL = "brl", WW.BSD = "bsd", WW.BTN = "btn", WW.BWP = "bwp", WW.BYN = "byn", WW.BYR = "byr", WW.BZD = "bzd", WW.CAD = "cad", WW.CDF = "cdf", WW.CHE = "che", WW.CHF = "chf", WW.CHW = "chw", WW.CLF = "clf", WW.CLP = "clp", WW.CNY = "cny", WW.COP = "cop", WW.COU = "cou", WW.CRC = "crc", WW.CUC = "cuc", WW.CUP = "cup", WW.CVE = "cve", WW.CZK = "czk", WW.DJF = "djf", WW.DKK = "dkk", WW.DOP = "dop", WW.DZD = "dzd", WW.EGP = "egp", WW.ERN = "ern", WW.ETB = "etb", WW.EUR = "eur", WW.FJD = "fjd", WW.FKP = "fkp", WW.GBP = "gbp", WW.GEL = "gel", WW.GHS = "ghs", WW.GIP = "gip", WW.GMD = "gmd", WW.GNF = "gnf", WW.GTQ = "gtq", WW.GYD = "gyd", WW.HKD = "hkd", WW.HNL = "hnl", WW.HRK = "hrk", WW.HTG = "htg", WW.HUF = "huf", WW.IDR = "idr", WW.ILS = "ils", WW.INR = "inr", WW.IQD = "iqd", WW.IRR = "irr", WW.ISK = "isk", WW.JMD = "jmd", WW.JOD = "jod", WW.JPY = "jpy", WW.KES = "kes", WW.KGS = "kgs", WW.KHR = "khr", WW.KMF = "kmf", WW.KPW = "kpw", WW.KRW = "krw", WW.KWD = "kwd", WW.KYD = "kyd", WW.KZT = "kzt", WW.LAK = "lak", WW.LBP = "lbp", WW.LKR = "lkr", WW.LRD = "lrd", WW.LSL = "lsl", WW.LTL = "ltl", WW.LVL = "lvl", WW.LYD = "lyd", WW.MAD = "mad", WW.MDL = "mdl", WW.MGA = "mga", WW.MKD = "mkd", WW.MMK = "mmk", WW.MNT = "mnt", WW.MOP = "mop", WW.MRO = "mro", WW.MUR = "mur", WW.MVR = "mvr", WW.MWK = "mwk", WW.MXN = "mxn", WW.MXV = "mxv", WW.MYR = "myr", WW.MZN = "mzn", WW.NAD = "nad", WW.NGN = "ngn", WW.NIO = "nio", WW.NOK = "nok", WW.NPR = "npr", WW.NZD = "nzd", WW.OMR = "omr", WW.PAB = "pab", WW.PEN = "pen", WW.PGK = "pgk", WW.PHP = "php", WW.PKR = "pkr", WW.PLN = "pln", WW.PYG = "pyg", WW.QAR = "qar", WW.RON = "ron", WW.RSD = "rsd", WW.RUB = "rub", WW.RWF = "rwf", WW.SAR = "sar", WW.SBD = "sbd", WW.SCR = "scr", WW.SDG = "sdg", WW.SEK = "sek", WW.SGD = "sgd", WW.SHP = "shp", WW.SLL = "sll", WW.SOS = "sos", WW.SRD = "srd", WW.SSP = "ssp", WW.STD = "std", WW.SVC = "svc", WW.SYP = "syp", WW.SZL = "szl", WW.THB = "thb", WW.TJS = "tjs", WW.TMT = "tmt", WW.TND = "tnd", WW.TOP = "top", WW.TRY = "try", WW.TTD = "ttd", WW.TWD = "twd", WW.TZS = "tzs", WW.UAH = "uah", WW.UGX = "ugx", WW.USD = "usd", WW.USN = "usn", WW.USS = "uss", WW.UYI = "uyi", WW.UYU = "uyu", WW.UZS = "uzs", WW.VEF = "vef", WW.VND = "vnd", WW.VUV = "vuv", WW.WST = "wst", WW.XAF = "xaf", WW.XAG = "xag", WW.XAU = "xau", WW.XBA = "xba", WW.XBB = "xbb", WW.XBC = "xbc", WW.XBD = "xbd", WW.XCD = "xcd", WW.XDR = "xdr", WW.XFU = "xfu", WW.XOF = "xof", WW.XPD = "xpd", WW.XPF = "xpf", WW.XPT = "xpt", WW.XSU = "xsu", WW.XTS = "xts", WW.XUA = "xua", WW.YER = "yer", WW.ZAR = "zar", WW.ZMW = "zmw", WW.ZWL = "zwl"
    }(hz || (hz = {}));
    hz.AED, hz.AFN, hz.ALL, hz.AMD, hz.ANG, hz.AOA, hz.ARS, hz.AUD, hz.AWG, hz.AZN, hz.BAM, hz.BBD, hz.BDT, hz.BGN, hz.BHD, hz.BIF, hz.BMD, hz.BND, hz.BOB, hz.BOV, hz.BRL, hz.BSD, hz.BTN, hz.BWP, hz.BYR, hz.BYN, hz.BZD, hz.CAD, hz.CDF, hz.CHE, hz.CHF, hz.CHW, hz.CLF, hz.CLP, hz.CNY, hz.COP, hz.COU, hz.CRC, hz.CUC, hz.CUP, hz.CVE, hz.CZK, hz.DJF, hz.DKK, hz.DOP, hz.DZD, hz.EGP, hz.ERN, hz.ETB, hz.EUR, hz.FJD, hz.FKP, hz.GBP, hz.GEL, hz.GHS, hz.GIP, hz.GMD, hz.GNF, hz.GTQ, hz.GYD, hz.HKD, hz.HNL, hz.HRK, hz.HTG, hz.HUF, hz.IDR, hz.ILS, hz.INR, hz.IQD, hz.IRR, hz.ISK, hz.JMD, hz.JOD, hz.JPY, hz.KES, hz.KGS, hz.KHR, hz.KMF, hz.KPW, hz.KRW, hz.KWD, hz.KYD, hz.KZT, hz.LAK, hz.LBP, hz.LKR, hz.LRD, hz.LSL, hz.LTL, hz.LVL, hz.LYD, hz.MAD, hz.MDL, hz.MGA, hz.MKD, hz.MMK, hz.MNT, hz.MOP, hz.MRO, hz.MUR, hz.MVR, hz.MWK, hz.MXN, hz.MXV, hz.MYR, hz.MZN, hz.NAD, hz.NGN, hz.NIO, hz.NOK, hz.NPR, hz.NZD, hz.OMR, hz.PAB, hz.PEN, hz.PGK, hz.PHP, hz.PKR, hz.PLN, hz.PYG, hz.QAR, hz.RON, hz.RSD, hz.RUB, hz.RWF, hz.SAR, hz.SBD, hz.SCR, hz.SDG, hz.SEK, hz.SGD, hz.SHP, hz.SLL, hz.SOS, hz.SRD, hz.SSP, hz.STD, hz.SVC, hz.SYP, hz.SZL, hz.THB, hz.TJS, hz.TMT, hz.TND, hz.TOP, hz.TRY, hz.TTD, hz.TWD, hz.TZS, hz.UAH, hz.UGX, hz.USD, hz.USN, hz.USS, hz.UYI, hz.UYU, hz.UZS, hz.VEF, hz.VND, hz.VUV, hz.WST, hz.XAF, hz.XAG, hz.XAU, hz.XBA, hz.XBB, hz.XBC, hz.XBD, hz.XCD, hz.XDR, hz.XFU, hz.XOF, hz.XPD, hz.XPF, hz.XPT, hz.XSU, hz.XTS, hz.XUA, hz.YER, hz.ZAR, hz.ZMW, hz.ZWL;
    var Uz = {
      exports: {}
    };
    ! function(WW, RW) {
      var MW = "__lodash_hash_undefined__",
        wW = 9007199254740991,
        zR = "[object Arguments]",
        AW = "[object Array]",
        bR = "[object Boolean]",
        yR = "[object Date]",
        NW = "[object Error]",
        eW = "[object Function]",
        BW = "[object Map]",
        tR = "[object Number]",
        TW = "[object Object]",
        gR = "[object Promise]",
        iR = "[object RegExp]",
        YW = "[object Set]",
        JW = "[object String]",
        PW = "[object Symbol]",
        IW = "[object WeakMap]",
        oW = "[object ArrayBuffer]",
        lW = "[object DataView]",
        FW = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        fW = /^\w*$/,
        QW = /^\./,
        rR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        cR = /\\(\\)?/g,
        XW = /^\[object .+?Constructor\]$/,
        jR = /^(?:0|[1-9]\d*)$/,
        kR = {};
      kR["[object Float32Array]"] = kR["[object Float64Array]"] = kR["[object Int8Array]"] = kR["[object Int16Array]"] = kR["[object Int32Array]"] = kR["[object Uint8Array]"] = kR["[object Uint8ClampedArray]"] = kR["[object Uint16Array]"] = kR["[object Uint32Array]"] = !0, kR[zR] = kR[AW] = kR[oW] = kR[bR] = kR[lW] = kR[yR] = kR[NW] = kR[eW] = kR[BW] = kR[tR] = kR[TW] = kR[iR] = kR[YW] = kR[JW] = kR[IW] = !1;
      var aR = "object" == typeof CW && CW && CW.Object === Object && CW,
        sW = "object" == typeof self && self && self.Object === Object && self,
        dW = aR || sW || Function("return this")(),
        pW = RW && !RW.nodeType && RW,
        hW = pW && WW && !WW.nodeType && WW,
        UW = hW && hW.exports === pW && aR.process,
        EW = function() {
          try {
            return UW && UW.binding("util")
          } catch (WW) {}
        }(),
        VW = EW && EW.isTypedArray;

      function mR(WW, RW) {
        for (var MW = -1, wW = WW ? WW.length : 0; ++MW < wW && !1 !== RW(WW[MW], MW, WW););
        return WW
      }

      function xR(WW, RW) {
        for (var MW = -1, wW = WW ? WW.length : 0; ++MW < wW;)
          if (RW(WW[MW], MW, WW)) return !0;
        return !1
      }

      function vR(WW) {
        var RW = !1;
        if (null != WW && "function" != typeof WW.toString) try {
          RW = !!(WW + "")
        } catch (MW) {}
        return RW
      }

      function KW(WW) {
        var RW = -1,
          MW = Array(WW.size);
        return WW.forEach((function(WW, wW) {
          MW[++RW] = [wW, WW]
        })), MW
      }

      function uW(WW, RW) {
        return function(MW) {
          return WW(RW(MW))
        }
      }

      function OW(WW) {
        var RW = -1,
          MW = Array(WW.size);
        return WW.forEach((function(WW) {
          MW[++RW] = WW
        })), MW
      }
      var nW = Array.prototype,
        GW = Function.prototype,
        LW = Object.prototype,
        HW = dW["__core-js_shared__"],
        DW = function() {
          var WW = /[^.]+$/.exec(HW && HW.keys && HW.keys.IE_PROTO || "");
          return WW ? "Symbol(src)_1." + WW : ""
        }(),
        qR = GW.toString,
        ZW = LW.hasOwnProperty,
        SW = LW.toString,
        WR = RegExp("^" + qR.call(ZW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        RR = dW.Symbol,
        MR = dW.Uint8Array,
        wR = uW(Object.getPrototypeOf, Object),
        CR = Object.create,
        zM = LW.propertyIsEnumerable,
        AR = nW.splice,
        bM = uW(Object.keys, Object),
        yM = KR(dW, "DataView"),
        NR = KR(dW, "Map"),
        eR = KR(dW, "Promise"),
        BR = KR(dW, "Set"),
        tM = KR(dW, "WeakMap"),
        TR = KR(Object, "create"),
        gM = qM(yM),
        iM = qM(NR),
        YR = qM(eR),
        JR = qM(BR),
        PR = qM(tM),
        IR = RR ? RR.prototype : void 0,
        oR = IR ? IR.valueOf : void 0,
        lR = IR ? IR.toString : void 0;

      function FR(WW) {
        var RW = -1,
          MW = WW ? WW.length : 0;
        for (this.clear(); ++RW < MW;) {
          var wW = WW[RW];
          this.set(wW[0], wW[1])
        }
      }

      function fR(WW) {
        var RW = -1,
          MW = WW ? WW.length : 0;
        for (this.clear(); ++RW < MW;) {
          var wW = WW[RW];
          this.set(wW[0], wW[1])
        }
      }

      function QR(WW) {
        var RW = -1,
          MW = WW ? WW.length : 0;
        for (this.clear(); ++RW < MW;) {
          var wW = WW[RW];
          this.set(wW[0], wW[1])
        }
      }

      function rM(WW) {
        var RW = -1,
          MW = WW ? WW.length : 0;
        for (this.__data__ = new QR; ++RW < MW;) this.add(WW[RW])
      }

      function cM(WW) {
        this.__data__ = new fR(WW)
      }

      function XR(WW, RW) {
        var MW = RM(WW) || WM(WW) ? function(WW, RW) {
            for (var MW = -1, wW = Array(WW); ++MW < WW;) wW[MW] = RW(MW);
            return wW
          }(WW.length, String) : [],
          wW = MW.length,
          CW = !!wW;
        for (var zR in WW) !RW && !ZW.call(WW, zR) || CW && ("length" == zR || OR(zR, wW)) || MW.push(zR);
        return MW
      }

      function jM(WW, RW) {
        for (var MW = WW.length; MW--;)
          if (SR(WW[MW][0], RW)) return MW;
        return -1
      }
      FR.prototype.clear = function() {
        this.__data__ = TR ? TR(null) : {}
      }, FR.prototype.delete = function(WW) {
        return this.has(WW) && delete this.__data__[WW]
      }, FR.prototype.get = function(WW) {
        var RW = this.__data__;
        if (TR) {
          var wW = RW[WW];
          return wW === MW ? void 0 : wW
        }
        return ZW.call(RW, WW) ? RW[WW] : void 0
      }, FR.prototype.has = function(WW) {
        var RW = this.__data__;
        return TR ? void 0 !== RW[WW] : ZW.call(RW, WW)
      }, FR.prototype.set = function(WW, RW) {
        return this.__data__[WW] = TR && void 0 === RW ? MW : RW, this
      }, fR.prototype.clear = function() {
        this.__data__ = []
      }, fR.prototype.delete = function(WW) {
        var RW = this.__data__,
          MW = jM(RW, WW);
        return !(MW < 0) && (MW == RW.length - 1 ? RW.pop() : AR.call(RW, MW, 1), !0)
      }, fR.prototype.get = function(WW) {
        var RW = this.__data__,
          MW = jM(RW, WW);
        return MW < 0 ? void 0 : RW[MW][1]
      }, fR.prototype.has = function(WW) {
        return jM(this.__data__, WW) > -1
      }, fR.prototype.set = function(WW, RW) {
        var MW = this.__data__,
          wW = jM(MW, WW);
        return wW < 0 ? MW.push([WW, RW]) : MW[wW][1] = RW, this
      }, QR.prototype.clear = function() {
        this.__data__ = {
          hash: new FR,
          map: new(NR || fR),
          string: new FR
        }
      }, QR.prototype.delete = function(WW) {
        return vM(this, WW).delete(WW)
      }, QR.prototype.get = function(WW) {
        return vM(this, WW).get(WW)
      }, QR.prototype.has = function(WW) {
        return vM(this, WW).has(WW)
      }, QR.prototype.set = function(WW, RW) {
        return vM(this, WW).set(WW, RW), this
      }, rM.prototype.add = rM.prototype.push = function(WW) {
        return this.__data__.set(WW, MW), this
      }, rM.prototype.has = function(WW) {
        return this.__data__.has(WW)
      }, cM.prototype.clear = function() {
        this.__data__ = new fR
      }, cM.prototype.delete = function(WW) {
        return this.__data__.delete(WW)
      }, cM.prototype.get = function(WW) {
        return this.__data__.get(WW)
      }, cM.prototype.has = function(WW) {
        return this.__data__.has(WW)
      }, cM.prototype.set = function(WW, RW) {
        var MW = this.__data__;
        if (MW instanceof fR) {
          var wW = MW.__data__;
          if (!NR || wW.length < 199) return wW.push([WW, RW]), this;
          MW = this.__data__ = new QR(wW)
        }
        return MW.set(WW, RW), this
      };
      var kM, aM = function(WW, RW, MW) {
        for (var wW = -1, CW = Object(WW), zR = MW(WW), AW = zR.length; AW--;) {
          var bR = zR[kM ? AW : ++wW];
          if (!1 === RW(CW[bR], bR, CW)) break
        }
        return WW
      };

      function sR(WW, RW) {
        return WW && aM(WW, RW, eM)
      }

      function dR(WW, RW) {
        for (var MW = 0, wW = (RW = nR(RW, WW) ? [RW] : mM(RW)).length; null != WW && MW < wW;) WW = WW[DR(RW[MW++])];
        return MW && MW == wW ? WW : void 0
      }

      function pR(WW, RW) {
        return null != WW && RW in Object(WW)
      }

      function hR(WW, RW, MW, wW, CW) {
        return WW === RW || (null == WW || null == RW || !zw(WW) && !AM(RW) ? WW !== WW && RW !== RW : function(WW, RW, MW, wW, CW, eW) {
          var gR = RM(WW),
            IW = RM(RW),
            FW = AW,
            fW = AW;
          gR || (FW = (FW = uR(WW)) == zR ? TW : FW);
          IW || (fW = (fW = uR(RW)) == zR ? TW : fW);
          var QW = FW == TW && !vR(WW),
            rR = fW == TW && !vR(RW),
            cR = FW == fW;
          if (cR && !QW) return eW || (eW = new cM), gR || NM(WW) ? xM(WW, RW, MW, wW, CW, eW) : function(WW, RW, MW, wW, CW, zR, AW) {
            switch (MW) {
              case lW:
                if (WW.byteLength != RW.byteLength || WW.byteOffset != RW.byteOffset) return !1;
                WW = WW.buffer, RW = RW.buffer;
              case oW:
                return !(WW.byteLength != RW.byteLength || !wW(new MR(WW), new MR(RW)));
              case bR:
              case yR:
              case tR:
                return SR(+WW, +RW);
              case NW:
                return WW.name == RW.name && WW.message == RW.message;
              case iR:
              case JW:
                return WW == RW + "";
              case BW:
                var eW = KW;
              case YW:
                var TW = 2 & zR;
                if (eW || (eW = OW), WW.size != RW.size && !TW) return !1;
                var gR = AW.get(WW);
                if (gR) return gR == RW;
                zR |= 1, AW.set(WW, RW);
                var IW = xM(eW(WW), eW(RW), wW, CW, zR, AW);
                return AW.delete(WW), IW;
              case PW:
                if (oR) return oR.call(WW) == oR.call(RW)
            }
            return !1
          }(WW, RW, FW, MW, wW, CW, eW);
          if (!(2 & CW)) {
            var XW = QW && ZW.call(WW, "__wrapped__"),
              jR = rR && ZW.call(RW, "__wrapped__");
            if (XW || jR) {
              var kR = XW ? WW.value() : WW,
                aR = jR ? RW.value() : RW;
              return eW || (eW = new cM), MW(kR, aR, wW, CW, eW)
            }
          }
          if (!cR) return !1;
          return eW || (eW = new cM),
            function(WW, RW, MW, wW, CW, zR) {
              var AW = 2 & CW,
                bR = eM(WW),
                yR = bR.length,
                NW = eM(RW),
                eW = NW.length;
              if (yR != eW && !AW) return !1;
              var BW = yR;
              for (; BW--;) {
                var tR = bR[BW];
                if (!(AW ? tR in RW : ZW.call(RW, tR))) return !1
              }
              var TW = zR.get(WW);
              if (TW && zR.get(RW)) return TW == RW;
              var gR = !0;
              zR.set(WW, RW), zR.set(RW, WW);
              var iR = AW;
              for (; ++BW < yR;) {
                var YW = WW[tR = bR[BW]],
                  JW = RW[tR];
                if (wW) var PW = AW ? wW(JW, YW, tR, RW, WW, zR) : wW(YW, JW, tR, WW, RW, zR);
                if (!(void 0 === PW ? YW === JW || MW(YW, JW, wW, CW, zR) : PW)) {
                  gR = !1;
                  break
                }
                iR || (iR = "constructor" == tR)
              }
              if (gR && !iR) {
                var IW = WW.constructor,
                  oW = RW.constructor;
                IW == oW || !("constructor" in WW) || !("constructor" in RW) || "function" == typeof IW && IW instanceof IW && "function" == typeof oW && oW instanceof oW || (gR = !1)
              }
              return zR.delete(WW), zR.delete(RW), gR
            }(WW, RW, MW, wW, CW, eW)
        }(WW, RW, hR, MW, wW, CW))
      }

      function UR(WW) {
        return !(!zw(WW) || (RW = WW, DW && DW in RW)) && (wM(WW) || vR(WW) ? WR : XW).test(qM(WW));
        var RW
      }

      function ER(WW) {
        return "function" == typeof WW ? WW : null == WW ? BM : "object" == typeof WW ? RM(WW) ? function(WW, RW) {
          if (nR(WW) && GR(RW)) return LR(DR(WW), RW);
          return function(MW) {
            var wW = function(WW, RW, MW) {
              var wW = null == WW ? void 0 : dR(WW, RW);
              return void 0 === wW ? MW : wW
            }(MW, WW);
            return void 0 === wW && wW === RW ? function(WW, RW) {
              return null != WW && function(WW, RW, MW) {
                RW = nR(RW, WW) ? [RW] : mM(RW);
                var wW, CW = -1,
                  zR = RW.length;
                for (; ++CW < zR;) {
                  var AW = DR(RW[CW]);
                  if (!(wW = null != WW && MW(WW, AW))) break;
                  WW = WW[AW]
                }
                if (wW) return wW;
                zR = WW ? WW.length : 0;
                return !!zR && CM(zR) && OR(AW, zR) && (RM(WW) || WM(WW))
              }(WW, RW, pR)
            }(MW, WW) : hR(RW, wW, void 0, 3)
          }
        }(WW[0], WW[1]) : function(WW) {
          var RW = function(WW) {
            var RW = eM(WW),
              MW = RW.length;
            for (; MW--;) {
              var wW = RW[MW],
                CW = WW[wW];
              RW[MW] = [wW, CW, GR(CW)]
            }
            return RW
          }(WW);
          if (1 == RW.length && RW[0][2]) return LR(RW[0][0], RW[0][1]);
          return function(MW) {
            return MW === WW || function(WW, RW, MW, wW) {
              var CW = MW.length,
                zR = CW,
                AW = !wW;
              if (null == WW) return !zR;
              for (WW = Object(WW); CW--;) {
                var bR = MW[CW];
                if (AW && bR[2] ? bR[1] !== WW[bR[0]] : !(bR[0] in WW)) return !1
              }
              for (; ++CW < zR;) {
                var yR = (bR = MW[CW])[0],
                  NW = WW[yR],
                  eW = bR[1];
                if (AW && bR[2]) {
                  if (void 0 === NW && !(yR in WW)) return !1
                } else {
                  var BW = new cM;
                  if (wW) var tR = wW(NW, eW, yR, WW, RW, BW);
                  if (!(void 0 === tR ? hR(eW, NW, wW, 3, BW) : tR)) return !1
                }
              }
              return !0
            }(MW, WW, RW)
          }
        }(WW) : function(WW) {
          return nR(WW) ? (RW = DR(WW), function(WW) {
            return null == WW ? void 0 : WW[RW]
          }) : function(WW) {
            return function(RW) {
              return dR(RW, WW)
            }
          }(WW);
          var RW
        }(WW)
      }

      function VR(WW) {
        if (! function(WW) {
            var RW = WW && WW.constructor,
              MW = "function" == typeof RW && RW.prototype || LW;
            return WW === MW
          }(WW)) return bM(WW);
        var RW = [];
        for (var MW in Object(WW)) ZW.call(WW, MW) && "constructor" != MW && RW.push(MW);
        return RW
      }

      function mM(WW) {
        return RM(WW) ? WW : HR(WW)
      }

      function xM(WW, RW, MW, wW, CW, zR) {
        var AW = 2 & CW,
          bR = WW.length,
          yR = RW.length;
        if (bR != yR && !(AW && yR > bR)) return !1;
        var NW = zR.get(WW);
        if (NW && zR.get(RW)) return NW == RW;
        var eW = -1,
          BW = !0,
          tR = 1 & CW ? new rM : void 0;
        for (zR.set(WW, RW), zR.set(RW, WW); ++eW < bR;) {
          var TW = WW[eW],
            gR = RW[eW];
          if (wW) var iR = AW ? wW(gR, TW, eW, RW, WW, zR) : wW(TW, gR, eW, WW, RW, zR);
          if (void 0 !== iR) {
            if (iR) continue;
            BW = !1;
            break
          }
          if (tR) {
            if (!xR(RW, (function(WW, RW) {
                if (!tR.has(RW) && (TW === WW || MW(TW, WW, wW, CW, zR))) return tR.add(RW)
              }))) {
              BW = !1;
              break
            }
          } else if (TW !== gR && !MW(TW, gR, wW, CW, zR)) {
            BW = !1;
            break
          }
        }
        return zR.delete(WW), zR.delete(RW), BW
      }

      function vM(WW, RW) {
        var MW = WW.__data__;
        return function(WW) {
          var RW = typeof WW;
          return "string" == RW || "number" == RW || "symbol" == RW || "boolean" == RW ? "__proto__" !== WW : null === WW
        }(RW) ? MW["string" == typeof RW ? "string" : "hash"] : MW.map
      }

      function KR(WW, RW) {
        var MW = function(WW, RW) {
          return null == WW ? void 0 : WW[RW]
        }(WW, RW);
        return UR(MW) ? MW : void 0
      }
      var uR = function(WW) {
        return SW.call(WW)
      };

      function OR(WW, RW) {
        return !!(RW = null == RW ? wW : RW) && ("number" == typeof WW || jR.test(WW)) && WW > -1 && WW % 1 == 0 && WW < RW
      }

      function nR(WW, RW) {
        if (RM(WW)) return !1;
        var MW = typeof WW;
        return !("number" != MW && "symbol" != MW && "boolean" != MW && null != WW && !bw(WW)) || (fW.test(WW) || !FW.test(WW) || null != RW && WW in Object(RW))
      }

      function GR(WW) {
        return WW === WW && !zw(WW)
      }

      function LR(WW, RW) {
        return function(MW) {
          return null != MW && (MW[WW] === RW && (void 0 !== RW || WW in Object(MW)))
        }
      }(yM && uR(new yM(new ArrayBuffer(1))) != lW || NR && uR(new NR) != BW || eR && uR(eR.resolve()) != gR || BR && uR(new BR) != YW || tM && uR(new tM) != IW) && (uR = function(WW) {
        var RW = SW.call(WW),
          MW = RW == TW ? WW.constructor : void 0,
          wW = MW ? qM(MW) : void 0;
        if (wW) switch (wW) {
          case gM:
            return lW;
          case iM:
            return BW;
          case YR:
            return gR;
          case JR:
            return YW;
          case PR:
            return IW
        }
        return RW
      });
      var HR = ZR((function(WW) {
        var RW;
        WW = null == (RW = WW) ? "" : function(WW) {
          if ("string" == typeof WW) return WW;
          if (bw(WW)) return lR ? lR.call(WW) : "";
          var RW = WW + "";
          return "0" == RW && 1 / WW == -1 / 0 ? "-0" : RW
        }(RW);
        var MW = [];
        return QW.test(WW) && MW.push(""), WW.replace(rR, (function(WW, RW, wW, CW) {
          MW.push(wW ? CW.replace(cR, "$1") : RW || WW)
        })), MW
      }));

      function DR(WW) {
        if ("string" == typeof WW || bw(WW)) return WW;
        var RW = WW + "";
        return "0" == RW && 1 / WW == -1 / 0 ? "-0" : RW
      }

      function qM(WW) {
        if (null != WW) {
          try {
            return qR.call(WW)
          } catch (RW) {}
          try {
            return WW + ""
          } catch (RW) {}
        }
        return ""
      }

      function ZR(WW, RW) {
        if ("function" != typeof WW || RW && "function" != typeof RW) throw new TypeError("Expected a function");
        var MW = function() {
          var wW = arguments,
            CW = RW ? RW.apply(this, wW) : wW[0],
            zR = MW.cache;
          if (zR.has(CW)) return zR.get(CW);
          var AW = WW.apply(this, wW);
          return MW.cache = zR.set(CW, AW), AW
        };
        return MW.cache = new(ZR.Cache || QR), MW
      }

      function SR(WW, RW) {
        return WW === RW || WW !== WW && RW !== RW
      }

      function WM(WW) {
        return function(WW) {
          return AM(WW) && MM(WW)
        }(WW) && ZW.call(WW, "callee") && (!zM.call(WW, "callee") || SW.call(WW) == zR)
      }
      ZR.Cache = QR;
      var RM = Array.isArray;

      function MM(WW) {
        return null != WW && CM(WW.length) && !wM(WW)
      }

      function wM(WW) {
        var RW = zw(WW) ? SW.call(WW) : "";
        return RW == eW || "[object GeneratorFunction]" == RW
      }

      function CM(WW) {
        return "number" == typeof WW && WW > -1 && WW % 1 == 0 && WW <= wW
      }

      function zw(WW) {
        var RW = typeof WW;
        return !!WW && ("object" == RW || "function" == RW)
      }

      function AM(WW) {
        return !!WW && "object" == typeof WW
      }

      function bw(WW) {
        return "symbol" == typeof WW || AM(WW) && SW.call(WW) == PW
      }
      var yw, NM = VW ? (yw = VW, function(WW) {
        return yw(WW)
      }) : function(WW) {
        return AM(WW) && CM(WW.length) && !!kR[SW.call(WW)]
      };

      function eM(WW) {
        return MM(WW) ? XR(WW) : VR(WW)
      }

      function BM(WW) {
        return WW
      }
      WW.exports = function(WW, RW, MW) {
        var wW, CW = RM(WW) || NM(WW);
        if (RW = ER(RW), null == MW)
          if (CW || zw(WW)) {
            var zR = WW.constructor;
            MW = CW ? RM(WW) ? new zR : [] : wM(zR) ? zw(wW = wR(WW)) ? CR(wW) : {} : {}
          } else MW = {};
        return (CW ? mR : sR)(WW, (function(WW, wW, CW) {
          return RW(MW, WW, wW, CW)
        })), MW
      }
    }(Uz, Uz.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      n: Ez
    } = wW
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);