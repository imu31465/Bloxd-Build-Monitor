export const id = 149;
export const ids = [149];
export const modules = {
  8142: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LL,
      e: () => jZ
    });
    var wG = {};
    ZG.r(wG), ZG.d(wG, {
      c: () => ww,
      h: () => yw,
      g: () => Lw,
      j: () => DZ,
      m: () => tZ,
      p: () => Iw,
      r: () => xZ,
      u: () => aw,
      y: () => Xw,
      z: () => vw,
      C: () => NZ,
      D: () => iw,
      G: () => mw,
      J: () => Fw,
      P: () => OZ,
      M: () => bw,
      R: () => Ww,
      V: () => Cw
    });
    var SG = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function LG(GG) {
      return GG && GG.__esModule && Object.prototype.hasOwnProperty.call(GG, "default") ? GG.default : GG
    }
    var yG = {
      exports: {}
    };
    ! function(GG) {
      var bG = Object.prototype.hasOwnProperty,
        ZG = "~";

      function wG() {}

      function SG(GG, bG, ZG) {
        this.BQ = GG, this.context = bG, this.once = ZG || !1
      }

      function LG(GG, bG, wG, LG, yG) {
        if ("function" !== typeof wG) throw new TypeError("The listener must be a function");
        var kG = new SG(wG, LG || GG, yG),
          UG = ZG ? ZG + bG : bG;
        return GG._events[UG] ? GG._events[UG].BQ ? GG._events[UG] = [GG._events[UG], kG] : GG._events[UG].push(kG) : (GG._events[UG] = kG, GG._eventsCount++), GG
      }

      function yG(GG, bG) {
        0 === --GG._eventsCount ? GG._events = new wG : delete GG._events[bG]
      }

      function kG() {
        this._events = new wG, this._eventsCount = 0
      }
      Object.create && (wG.prototype = Object.create(null), (new wG).__proto__ || (ZG = !1)), kG.prototype.eventNames = function() {
        var GG, wG, SG = [];
        if (0 === this._eventsCount) return SG;
        for (wG in GG = this._events) bG.call(GG, wG) && SG.push(ZG ? wG.slice(1) : wG);
        return Object.getOwnPropertySymbols ? SG.concat(Object.getOwnPropertySymbols(GG)) : SG
      }, kG.prototype.listeners = function(GG) {
        var bG = ZG ? ZG + GG : GG,
          wG = this._events[bG];
        if (!wG) return [];
        if (wG.BQ) return [wG.BQ];
        for (var SG = 0, LG = wG.length, yG = new Array(LG); SG < LG; SG++) yG[SG] = wG[SG].BQ;
        return yG
      }, kG.prototype.listenerCount = function(GG) {
        var bG = ZG ? ZG + GG : GG,
          wG = this._events[bG];
        return wG ? wG.BQ ? 1 : wG.length : 0
      }, kG.prototype.emit = function(GG, bG, wG, SG, LG, yG) {
        var kG = ZG ? ZG + GG : GG;
        if (!this._events[kG]) return !1;
        var UG, YG, VG = this._events[kG],
          pG = arguments.length;
        if (VG.BQ) {
          switch (VG.once && this.removeListener(GG, VG.BQ, void 0, !0), pG) {
            case 1:
              return VG.BQ.call(VG.context), !0;
            case 2:
              return VG.BQ.call(VG.context, bG), !0;
            case 3:
              return VG.BQ.call(VG.context, bG, wG), !0;
            case 4:
              return VG.BQ.call(VG.context, bG, wG, SG), !0;
            case 5:
              return VG.BQ.call(VG.context, bG, wG, SG, LG), !0;
            case 6:
              return VG.BQ.call(VG.context, bG, wG, SG, LG, yG), !0
          }
          for (YG = 1, UG = new Array(pG - 1); YG < pG; YG++) UG[YG - 1] = arguments[YG];
          VG.BQ.apply(VG.context, UG)
        } else {
          var fG, QG = VG.length;
          for (YG = 0; YG < QG; YG++) switch (VG[YG].once && this.removeListener(GG, VG[YG].BQ, void 0, !0), pG) {
            case 1:
              VG[YG].BQ.call(VG[YG].context);
              break;
            case 2:
              VG[YG].BQ.call(VG[YG].context, bG);
              break;
            case 3:
              VG[YG].BQ.call(VG[YG].context, bG, wG);
              break;
            case 4:
              VG[YG].BQ.call(VG[YG].context, bG, wG, SG);
              break;
            default:
              if (!UG)
                for (fG = 1, UG = new Array(pG - 1); fG < pG; fG++) UG[fG - 1] = arguments[fG];
              VG[YG].BQ.apply(VG[YG].context, UG)
          }
        }
        return !0
      }, kG.prototype.on = function(GG, bG, ZG) {
        return LG(this, GG, bG, ZG, !1)
      }, kG.prototype.once = function(GG, bG, ZG) {
        return LG(this, GG, bG, ZG, !0)
      }, kG.prototype.removeListener = function(GG, bG, wG, SG) {
        var LG = ZG ? ZG + GG : GG;
        if (!this._events[LG]) return this;
        if (!bG) return yG(this, LG), this;
        var kG = this._events[LG];
        if (kG.BQ) kG.BQ !== bG || SG && !kG.once || wG && kG.context !== wG || yG(this, LG);
        else {
          for (var UG = 0, YG = [], VG = kG.length; UG < VG; UG++)(kG[UG].BQ !== bG || SG && !kG[UG].once || wG && kG[UG].context !== wG) && YG.push(kG[UG]);
          YG.length ? this._events[LG] = 1 === YG.length ? YG[0] : YG : yG(this, LG)
        }
        return this
      }, kG.prototype.KJ = function(GG) {
        var bG;
        return GG ? (bG = ZG ? ZG + GG : GG, this._events[bG] && yG(this, bG)) : (this._events = new wG, this._eventsCount = 0), this
      }, kG.prototype.off = kG.prototype.removeListener, kG.prototype.addListener = kG.prototype.on, kG.prefixed = ZG, kG.EventEmitter = kG, GG.exports = kG
    }(yG);
    var kG, UG, YG = LG(yG.exports);
    ! function(GG) {
      GG.assertEqual = GG => GG, GG.assertIs = function(GG) {}, GG.assertNever = function(GG) {
        throw new Error
      }, GG.arrayToEnum = GG => {
        const bG = {};
        for (const ZG of GG) bG[ZG] = ZG;
        return bG
      }, GG.getValidEnumValues = bG => {
        const ZG = GG.objectKeys(bG).filter((GG => "number" !== typeof bG[bG[GG]])),
          wG = {};
        for (const GG of ZG) wG[GG] = bG[GG];
        return GG.objectValues(wG)
      }, GG.objectValues = bG => GG.objectKeys(bG).map((function(GG) {
        return bG[GG]
      })), GG.objectKeys = "function" === typeof Object.keys ? GG => Object.keys(GG) : GG => {
        const bG = [];
        for (const ZG in GG) Object.prototype.hasOwnProperty.call(GG, ZG) && bG.push(ZG);
        return bG
      }, GG.find = (GG, bG) => {
        for (const ZG of GG)
          if (bG(ZG)) return ZG
      }, GG.isInteger = "function" === typeof Number.isInteger ? GG => Number.isInteger(GG) : GG => "number" === typeof GG && isFinite(GG) && Math.floor(GG) === GG, GG.joinValues = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return GG.map((GG => "string" === typeof GG ? `'${GG}'` : GG)).join(bG)
      }, GG.jsonStringifyReplacer = (GG, bG) => "bigint" === typeof bG ? bG.toString() : bG
    }(kG || (kG = {})),
    function(GG) {
      GG.mergeShapes = (GG, bG) => ({
        ...GG,
        ...bG
      })
    }(UG || (UG = {}));
    const VG = kG.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      pG = GG => {
        switch (typeof GG) {
          case "undefined":
            return VG.undefined;
          case "string":
            return VG.string;
          case "number":
            return isNaN(GG) ? VG.nan : VG.number;
          case "boolean":
            return VG.boolean;
          case "function":
            return VG.function;
          case "bigint":
            return VG.bigint;
          case "symbol":
            return VG.symbol;
          case "object":
            return Array.isArray(GG) ? VG.array : null === GG ? VG.null : GG.then && "function" === typeof GG.then && GG.catch && "function" === typeof GG.catch ? VG.promise : "undefined" !== typeof Map && GG instanceof Map ? VG.map : "undefined" !== typeof Set && GG instanceof Set ? VG.set : "undefined" !== typeof Date && GG instanceof Date ? VG.date : VG.object;
          default:
            return VG.unknown
        }
      },
      fG = kG.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class QG extends Error {
      constructor(GG) {
        var bG;
        super(), bG = this, this.issues = [], this.addIssue = GG => {
          this.issues = [...this.issues, GG]
        }, this.addIssues = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          bG.issues = [...bG.issues, ...GG]
        };
        const ZG = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, ZG) : this.__proto__ = ZG, this.name = "ZodError", this.issues = GG
      }
      get errors() {
        return this.issues
      }
      format(GG) {
        const bG = GG || function(GG) {
            return GG.message
          },
          ZG = {
            _errors: []
          },
          wG = GG => {
            for (const SG of GG.issues)
              if ("invalid_union" === SG.code) SG.unionErrors.map(wG);
              else if ("invalid_return_type" === SG.code) wG(SG.returnTypeError);
            else if ("invalid_arguments" === SG.code) wG(SG.argumentsError);
            else if (0 === SG.path.length) ZG._errors.push(bG(SG));
            else {
              let GG = ZG,
                wG = 0;
              for (; wG < SG.path.length;) {
                const ZG = SG.path[wG];
                wG === SG.path.length - 1 ? (GG[ZG] = GG[ZG] || {
                  _errors: []
                }, GG[ZG]._errors.push(bG(SG))) : GG[ZG] = GG[ZG] || {
                  _errors: []
                }, GG = GG[ZG], wG++
              }
            }
          };
        return wG(this), ZG
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, kG.jsonStringifyReplacer, 2)
      }
      get wK() {
        return 0 === this.issues.length
      }
      flatten() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GG => GG.message;
        const bG = {},
          ZG = [];
        for (const wG of this.issues) wG.path.length > 0 ? (bG[wG.path[0]] = bG[wG.path[0]] || [], bG[wG.path[0]].push(GG(wG))) : ZG.push(GG(wG));
        return {
          formErrors: ZG,
          fieldErrors: bG
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    QG.create = GG => new QG(GG);
    const KG = (GG, bG) => {
      let ZG;
      switch (GG.code) {
        case fG.invalid_type:
          ZG = GG.received === VG.undefined ? "Required" : `Expected ${GG.expected}, received ${GG.received}`;
          break;
        case fG.invalid_literal:
          ZG = `Invalid literal value, expected ${JSON.stringify(GG.expected,kG.jsonStringifyReplacer)}`;
          break;
        case fG.unrecognized_keys:
          ZG = `Unrecognized key(s) in object: ${kG.joinValues(GG.keys,", ")}`;
          break;
        case fG.invalid_union:
          ZG = "Invalid input";
          break;
        case fG.invalid_union_discriminator:
          ZG = `Invalid discriminator value. Expected ${kG.joinValues(GG.options)}`;
          break;
        case fG.invalid_enum_value:
          ZG = `Invalid enum value. Expected ${kG.joinValues(GG.options)}, received '${GG.received}'`;
          break;
        case fG.invalid_arguments:
          ZG = "Invalid function arguments";
          break;
        case fG.invalid_return_type:
          ZG = "Invalid function return type";
          break;
        case fG.invalid_date:
          ZG = "Invalid date";
          break;
        case fG.invalid_string:
          "object" === typeof GG.validation ? "includes" in GG.validation ? (ZG = `Invalid input: must include "${GG.validation.includes}"`, "number" === typeof GG.validation.position && (ZG = `${ZG} at one or more positions greater than or equal to ${GG.validation.position}`)) : "startsWith" in GG.validation ? ZG = `Invalid input: must start with "${GG.validation.startsWith}"` : "endsWith" in GG.validation ? ZG = `Invalid input: must end with "${GG.validation.endsWith}"` : kG.assertNever(GG.validation) : ZG = "regex" !== GG.validation ? `Invalid ${GG.validation}` : "Invalid";
          break;
        case fG.too_small:
          ZG = "array" === GG.type ? `Array must contain ${GG.exact?"exactly":GG.inclusive?"at least":"more than"} ${GG.minimum} element(s)` : "string" === GG.type ? `String must contain ${GG.exact?"exactly":GG.inclusive?"at least":"over"} ${GG.minimum} character(s)` : "number" === GG.type ? `Number must be ${GG.exact?"exactly equal to ":GG.inclusive?"greater than or equal to ":"greater than "}${GG.minimum}` : "date" === GG.type ? `Date must be ${GG.exact?"exactly equal to ":GG.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(GG.minimum))}` : "Invalid input";
          break;
        case fG.too_big:
          ZG = "array" === GG.type ? `Array must contain ${GG.exact?"exactly":GG.inclusive?"at most":"less than"} ${GG.maximum} element(s)` : "string" === GG.type ? `String must contain ${GG.exact?"exactly":GG.inclusive?"at most":"under"} ${GG.maximum} character(s)` : "number" === GG.type ? `Number must be ${GG.exact?"exactly":GG.inclusive?"less than or equal to":"less than"} ${GG.maximum}` : "bigint" === GG.type ? `BigInt must be ${GG.exact?"exactly":GG.inclusive?"less than or equal to":"less than"} ${GG.maximum}` : "date" === GG.type ? `Date must be ${GG.exact?"exactly":GG.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(GG.maximum))}` : "Invalid input";
          break;
        case fG.custom:
          ZG = "Invalid input";
          break;
        case fG.invalid_intersection_types:
          ZG = "Intersection results could not be merged";
          break;
        case fG.not_multiple_of:
          ZG = `Number must be a multiple of ${GG.multipleOf}`;
          break;
        case fG.not_finite:
          ZG = "Number must be finite";
          break;
        default:
          ZG = bG.defaultError, kG.assertNever(GG)
      }
      return {
        message: ZG
      }
    };
    let hG = KG;

    function dG() {
      return hG
    }
    const JG = GG => {
      const {
        data: bG,
        path: ZG,
        errorMaps: wG,
        issueData: SG
      } = GG, LG = [...ZG, ...SG.path || []], yG = {
        ...SG,
        path: LG
      };
      let kG = "";
      const UG = wG.filter((GG => !!GG)).slice().reverse();
      for (const YG of UG) kG = YG(yG, {
        data: bG,
        defaultError: kG
      }).message;
      return {
        ...SG,
        path: LG,
        message: SG.message || kG
      }
    };

    function rG(GG, bG) {
      const ZG = JG({
        issueData: bG,
        data: GG.data,
        path: GG.path,
        errorMaps: [GG.common.contextualErrorMap, GG.schemaErrorMap, dG(), KG].filter((GG => !!GG))
      });
      GG.common.issues.push(ZG)
    }
    class zG {
      constructor() {
        this.value = "valid"
      }
      cK() {
        "valid" === this.value && (this.value = "cK")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(GG, bG) {
        const ZG = [];
        for (const wG of bG) {
          if ("aborted" === wG.status) return EG;
          "cK" === wG.status && GG.cK(), ZG.push(wG.value)
        }
        return {
          status: GG.value,
          value: ZG
        }
      }
      static async mergeObjectAsync(GG, bG) {
        const ZG = [];
        for (const wG of bG) ZG.push({
          key: await wG.key,
          value: await wG.value
        });
        return zG.mergeObjectSync(GG, ZG)
      }
      static mergeObjectSync(GG, bG) {
        const ZG = {};
        for (const wG of bG) {
          const {
            key: bG,
            value: SG
          } = wG;
          if ("aborted" === bG.status) return EG;
          if ("aborted" === SG.status) return EG;
          "cK" === bG.status && GG.cK(), "cK" === SG.status && GG.cK(), "__proto__" === bG.value || "undefined" === typeof SG.value && !wG.alwaysSet || (ZG[bG.value] = SG.value)
        }
        return {
          status: GG.value,
          value: ZG
        }
      }
    }
    const EG = Object.freeze({
        status: "aborted"
      }),
      oG = GG => ({
        status: "cK",
        value: GG
      }),
      XG = GG => ({
        status: "valid",
        value: GG
      }),
      uG = GG => "aborted" === GG.status,
      iG = GG => "cK" === GG.status,
      CG = GG => "valid" === GG.status,
      WG = GG => "undefined" !== typeof Promise && GG instanceof Promise;
    var mG;
    ! function(GG) {
      GG.errToObj = GG => "string" === typeof GG ? {
        message: GG
      } : GG || {}, GG.toString = GG => "string" === typeof GG ? GG : null === GG || void 0 === GG ? void 0 : GG.message
    }(mG || (mG = {}));
    class IG {
      constructor(GG, bG, ZG, wG) {
        this._cachedPath = [], this.parent = GG, this.data = bG, this._path = ZG, this._key = wG
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const FG = (GG, bG) => {
      if (CG(bG)) return {
        success: !0,
        data: bG.value
      };
      if (!GG.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const bG = new QG(GG.common.issues);
          return this._error = bG, this._error
        }
      }
    };

    function vG(GG) {
      if (!GG) return {};
      const {
        errorMap: bG,
        invalid_type_error: ZG,
        required_error: wG,
        description: SG
      } = GG;
      if (bG && (ZG || wG)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (bG) return {
        errorMap: bG,
        description: SG
      };
      return {
        errorMap: (GG, bG) => "invalid_type" !== GG.code ? {
          message: bG.defaultError
        } : "undefined" === typeof bG.data ? {
          message: null !== wG && void 0 !== wG ? wG : bG.defaultError
        } : {
          message: null !== ZG && void 0 !== ZG ? ZG : bG.defaultError
        },
        description: SG
      }
    }
    class aG {
      constructor(GG) {
        this.spa = this.safeParseAsync, this._def = GG, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(GG) {
        return pG(GG.data)
      }
      _getOrReturnCtx(GG, bG) {
        return bG || {
          common: GG.parent.common,
          data: GG.data,
          parsedType: pG(GG.data),
          schemaErrorMap: this._def.errorMap,
          path: GG.path,
          parent: GG.parent
        }
      }
      _processInputParams(GG) {
        return {
          status: new zG,
          ctx: {
            common: GG.parent.common,
            data: GG.data,
            parsedType: pG(GG.data),
            schemaErrorMap: this._def.errorMap,
            path: GG.path,
            parent: GG.parent
          }
        }
      }
      _parseSync(GG) {
        const bG = this._parse(GG);
        if (WG(bG)) throw new Error("Synchronous parse encountered promise.");
        return bG
      }
      _parseAsync(GG) {
        const bG = this._parse(GG);
        return Promise.resolve(bG)
      }
      parse(GG, bG) {
        const ZG = this.safeParse(GG, bG);
        if (ZG.success) return ZG.data;
        throw ZG.error
      }
      safeParse(GG, bG) {
        var ZG;
        const wG = {
            common: {
              issues: [],
              async: null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.async) && void 0 !== ZG && ZG,
              contextualErrorMap: null === bG || void 0 === bG ? void 0 : bG.errorMap
            },
            path: (null === bG || void 0 === bG ? void 0 : bG.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: GG,
            parsedType: pG(GG)
          },
          SG = this._parseSync({
            data: GG,
            path: wG.path,
            parent: wG
          });
        return FG(wG, SG)
      }
      async parseAsync(GG, bG) {
        const ZG = await this.safeParseAsync(GG, bG);
        if (ZG.success) return ZG.data;
        throw ZG.error
      }
      async safeParseAsync(GG, bG) {
        const ZG = {
            common: {
              issues: [],
              contextualErrorMap: null === bG || void 0 === bG ? void 0 : bG.errorMap,
              async: !0
            },
            path: (null === bG || void 0 === bG ? void 0 : bG.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: GG,
            parsedType: pG(GG)
          },
          wG = this._parse({
            data: GG,
            path: ZG.path,
            parent: ZG
          }),
          SG = await (WG(wG) ? wG : Promise.resolve(wG));
        return FG(ZG, SG)
      }
      refine(GG, bG) {
        const ZG = GG => "string" === typeof bG || "undefined" === typeof bG ? {
          message: bG
        } : "function" === typeof bG ? bG(GG) : bG;
        return this._refinement(((bG, wG) => {
          const SG = GG(bG),
            LG = () => wG.addIssue({
              code: fG.custom,
              ...ZG(bG)
            });
          return "undefined" !== typeof Promise && SG instanceof Promise ? SG.then((GG => !!GG || (LG(), !1))) : !!SG || (LG(), !1)
        }))
      }
      refinement(GG, bG) {
        return this._refinement(((ZG, wG) => !!GG(ZG) || (wG.addIssue("function" === typeof bG ? bG(ZG, wG) : bG), !1)))
      }
      _refinement(GG) {
        return new Eb({
          schema: this,
          typeName: cb.ZodEffects,
          effect: {
            type: "refinement",
            refinement: GG
          }
        })
      }
      superRefine(GG) {
        return this._refinement(GG)
      }
      optional() {
        return ob.create(this, this._def)
      }
      nullable() {
        return Xb.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return bb.create(this, this._def)
      }
      promise() {
        return zb.create(this, this._def)
      }
      or(GG) {
        return Sb.create([this, GG], this._def)
      }
      and(GG) {
        return Ub.create(this, GG, this._def)
      }
      transform(GG) {
        return new Eb({
          ...vG(this._def),
          schema: this,
          typeName: cb.ZodEffects,
          effect: {
            type: "transform",
            transform: GG
          }
        })
      }
      default (GG) {
        const bG = "function" === typeof GG ? GG : () => GG;
        return new ub({
          ...vG(this._def),
          innerType: this,
          defaultValue: bG,
          typeName: cb.ZodDefault
        })
      }
      brand() {
        return new mb({
          typeName: cb.ZodBranded,
          type: this,
          ...vG(this._def)
        })
      } catch (GG) {
        const bG = "function" === typeof GG ? GG : () => GG;
        return new ib({
          ...vG(this._def),
          innerType: this,
          catchValue: bG,
          typeName: cb.ZodCatch
        })
      }
      describe(GG) {
        return new(0, this.constructor)({
          ...this._def,
          description: GG
        })
      }
      pipe(GG) {
        return Ib.create(this, GG)
      }
      readonly() {
        return Fb.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const cG = /^c[^\s-]{8,}$/i,
      lG = /^[a-z][a-z0-9]*$/,
      jG = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      PG = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      MG = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let AG;
    const sG = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      qG = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class nG extends aG {
      _parse(GG) {
        this._def.coerce && (GG.data = String(GG.data));
        if (this._getType(GG) !== VG.string) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.string,
            received: bG.parsedType
          }), EG
        }
        const bG = new zG;
        let ZG;
        for (const UG of this._def.checks)
          if ("min" === UG.kind) GG.data.length < UG.value && (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
            code: fG.too_small,
            minimum: UG.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: UG.message
          }), bG.cK());
          else if ("max" === UG.kind) GG.data.length > UG.value && (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          code: fG.too_big,
          maximum: UG.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: UG.message
        }), bG.cK());
        else if ("length" === UG.kind) {
          const wG = GG.data.length > UG.value,
            SG = GG.data.length < UG.value;
          (wG || SG) && (ZG = this._getOrReturnCtx(GG, ZG), wG ? rG(ZG, {
            code: fG.too_big,
            maximum: UG.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: UG.message
          }) : SG && rG(ZG, {
            code: fG.too_small,
            minimum: UG.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: UG.message
          }), bG.cK())
        } else if ("email" === UG.kind) MG.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "email",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK());
        else if ("emoji" === UG.kind) AG || (AG = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), AG.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "emoji",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK());
        else if ("uuid" === UG.kind) PG.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "uuid",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK());
        else if ("cuid" === UG.kind) cG.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "cuid",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK());
        else if ("cuid2" === UG.kind) lG.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "cuid2",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK());
        else if ("ulid" === UG.kind) jG.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "ulid",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK());
        else if ("url" === UG.kind) try {
          new URL(GG.data)
        } catch (yG) {
          ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
            validation: "url",
            code: fG.invalid_string,
            message: UG.message
          }), bG.cK()
        } else if ("regex" === UG.kind) {
          UG.regex.lastIndex = 0;
          UG.regex.test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
            validation: "regex",
            code: fG.invalid_string,
            message: UG.message
          }), bG.cK())
        } else if ("trim" === UG.kind) GG.data = GG.data.trim();
        else if ("includes" === UG.kind) GG.data.includes(UG.value, UG.position) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          code: fG.invalid_string,
          validation: {
            includes: UG.value,
            position: UG.position
          },
          message: UG.message
        }), bG.cK());
        else if ("toLowerCase" === UG.kind) GG.data = GG.data.toLowerCase();
        else if ("toUpperCase" === UG.kind) GG.data = GG.data.toUpperCase();
        else if ("startsWith" === UG.kind) GG.data.startsWith(UG.value) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          code: fG.invalid_string,
          validation: {
            startsWith: UG.value
          },
          message: UG.message
        }), bG.cK());
        else if ("endsWith" === UG.kind) GG.data.endsWith(UG.value) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          code: fG.invalid_string,
          validation: {
            endsWith: UG.value
          },
          message: UG.message
        }), bG.cK());
        else if ("datetime" === UG.kind) {
          ((LG = UG).precision ? LG.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${LG.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${LG.precision}}Z$`) : 0 === LG.precision ? LG.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : LG.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(GG.data) || (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
            code: fG.invalid_string,
            validation: "datetime",
            message: UG.message
          }), bG.cK())
        } else "ip" === UG.kind ? (wG = GG.data, ("v4" !== (SG = UG.version) && SG || !sG.test(wG)) && ("v6" !== SG && SG || !qG.test(wG)) && (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          validation: "ip",
          code: fG.invalid_string,
          message: UG.message
        }), bG.cK())) : kG.assertNever(UG);
        var wG, SG, LG;
        return {
          status: bG.value,
          value: GG.data
        }
      }
      _regex(GG, bG, ZG) {
        return this.refinement((bG => GG.test(bG)), {
          validation: bG,
          code: fG.invalid_string,
          ...mG.errToObj(ZG)
        })
      }
      _addCheck(GG) {
        return new nG({
          ...this._def,
          checks: [...this._def.checks, GG]
        })
      }
      email(GG) {
        return this._addCheck({
          kind: "email",
          ...mG.errToObj(GG)
        })
      }
      url(GG) {
        return this._addCheck({
          kind: "url",
          ...mG.errToObj(GG)
        })
      }
      emoji(GG) {
        return this._addCheck({
          kind: "emoji",
          ...mG.errToObj(GG)
        })
      }
      uuid(GG) {
        return this._addCheck({
          kind: "uuid",
          ...mG.errToObj(GG)
        })
      }
      cuid(GG) {
        return this._addCheck({
          kind: "cuid",
          ...mG.errToObj(GG)
        })
      }
      cuid2(GG) {
        return this._addCheck({
          kind: "cuid2",
          ...mG.errToObj(GG)
        })
      }
      ulid(GG) {
        return this._addCheck({
          kind: "ulid",
          ...mG.errToObj(GG)
        })
      }
      ip(GG) {
        return this._addCheck({
          kind: "ip",
          ...mG.errToObj(GG)
        })
      }
      datetime(GG) {
        var bG;
        return "string" === typeof GG ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: GG
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === GG || void 0 === GG ? void 0 : GG.precision) ? null : null === GG || void 0 === GG ? void 0 : GG.precision,
          offset: null !== (bG = null === GG || void 0 === GG ? void 0 : GG.offset) && void 0 !== bG && bG,
          ...mG.errToObj(null === GG || void 0 === GG ? void 0 : GG.message)
        })
      }
      regex(GG, bG) {
        return this._addCheck({
          kind: "regex",
          regex: GG,
          ...mG.errToObj(bG)
        })
      }
      includes(GG, bG) {
        return this._addCheck({
          kind: "includes",
          value: GG,
          position: null === bG || void 0 === bG ? void 0 : bG.position,
          ...mG.errToObj(null === bG || void 0 === bG ? void 0 : bG.message)
        })
      }
      startsWith(GG, bG) {
        return this._addCheck({
          kind: "startsWith",
          value: GG,
          ...mG.errToObj(bG)
        })
      }
      endsWith(GG, bG) {
        return this._addCheck({
          kind: "endsWith",
          value: GG,
          ...mG.errToObj(bG)
        })
      }
      min(GG, bG) {
        return this._addCheck({
          kind: "min",
          value: GG,
          ...mG.errToObj(bG)
        })
      }
      max(GG, bG) {
        return this._addCheck({
          kind: "max",
          value: GG,
          ...mG.errToObj(bG)
        })
      }
      length(GG, bG) {
        return this._addCheck({
          kind: "length",
          value: GG,
          ...mG.errToObj(bG)
        })
      }
      nonempty(GG) {
        return this.min(1, mG.errToObj(GG))
      }
      trim() {
        return new nG({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new nG({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new nG({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((GG => "datetime" === GG.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((GG => "email" === GG.kind))
      }
      get isURL() {
        return !!this._def.checks.find((GG => "url" === GG.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((GG => "emoji" === GG.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((GG => "uuid" === GG.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((GG => "cuid" === GG.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((GG => "cuid2" === GG.kind))
      }
      get isULID() {
        return !!this._def.checks.find((GG => "ulid" === GG.kind))
      }
      get isIP() {
        return !!this._def.checks.find((GG => "ip" === GG.kind))
      }
      get minLength() {
        let GG = null;
        for (const bG of this._def.checks) "min" === bG.kind && (null === GG || bG.value > GG) && (GG = bG.value);
        return GG
      }
      get maxLength() {
        let GG = null;
        for (const bG of this._def.checks) "max" === bG.kind && (null === GG || bG.value < GG) && (GG = bG.value);
        return GG
      }
    }

    function gG(GG, bG) {
      const ZG = (GG.toString().split(".")[1] || "").length,
        wG = (bG.toString().split(".")[1] || "").length,
        SG = ZG > wG ? ZG : wG;
      return parseInt(GG.toFixed(SG).replace(".", "")) % parseInt(bG.toFixed(SG).replace(".", "")) / Math.pow(10, SG)
    }
    nG.create = GG => {
      var bG;
      return new nG({
        checks: [],
        typeName: cb.ZodString,
        coerce: null !== (bG = null === GG || void 0 === GG ? void 0 : GG.coerce) && void 0 !== bG && bG,
        ...vG(GG)
      })
    };
    class eG extends aG {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(GG) {
        this._def.coerce && (GG.data = Number(GG.data));
        if (this._getType(GG) !== VG.number) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.number,
            received: bG.parsedType
          }), EG
        }
        let bG;
        const ZG = new zG;
        for (const wG of this._def.checks)
          if ("int" === wG.kind) kG.isInteger(GG.data) || (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
            code: fG.invalid_type,
            expected: "integer",
            received: "float",
            message: wG.message
          }), ZG.cK());
          else if ("min" === wG.kind) {
          (wG.inclusive ? GG.data < wG.value : GG.data <= wG.value) && (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
            code: fG.too_small,
            minimum: wG.value,
            type: "number",
            inclusive: wG.inclusive,
            exact: !1,
            message: wG.message
          }), ZG.cK())
        } else if ("max" === wG.kind) {
          (wG.inclusive ? GG.data > wG.value : GG.data >= wG.value) && (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
            code: fG.too_big,
            maximum: wG.value,
            type: "number",
            inclusive: wG.inclusive,
            exact: !1,
            message: wG.message
          }), ZG.cK())
        } else "multipleOf" === wG.kind ? 0 !== gG(GG.data, wG.value) && (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
          code: fG.not_multiple_of,
          multipleOf: wG.value,
          message: wG.message
        }), ZG.cK()) : "finite" === wG.kind ? Number.isFinite(GG.data) || (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
          code: fG.not_finite,
          message: wG.message
        }), ZG.cK()) : kG.assertNever(wG);
        return {
          status: ZG.value,
          value: GG.data
        }
      }
      gte(GG, bG) {
        return this.setLimit("min", GG, !0, mG.toString(bG))
      }
      gt(GG, bG) {
        return this.setLimit("min", GG, !1, mG.toString(bG))
      }
      lte(GG, bG) {
        return this.setLimit("max", GG, !0, mG.toString(bG))
      }
      lt(GG, bG) {
        return this.setLimit("max", GG, !1, mG.toString(bG))
      }
      setLimit(GG, bG, ZG, wG) {
        return new eG({
          ...this._def,
          checks: [...this._def.checks, {
            kind: GG,
            value: bG,
            inclusive: ZG,
            message: mG.toString(wG)
          }]
        })
      }
      _addCheck(GG) {
        return new eG({
          ...this._def,
          checks: [...this._def.checks, GG]
        })
      }
      int(GG) {
        return this._addCheck({
          kind: "int",
          message: mG.toString(GG)
        })
      }
      positive(GG) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: mG.toString(GG)
        })
      }
      negative(GG) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: mG.toString(GG)
        })
      }
      nonpositive(GG) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: mG.toString(GG)
        })
      }
      nonnegative(GG) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: mG.toString(GG)
        })
      }
      multipleOf(GG, bG) {
        return this._addCheck({
          kind: "multipleOf",
          value: GG,
          message: mG.toString(bG)
        })
      }
      finite(GG) {
        return this._addCheck({
          kind: "finite",
          message: mG.toString(GG)
        })
      }
      safe(GG) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: mG.toString(GG)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: mG.toString(GG)
        })
      }
      get minValue() {
        let GG = null;
        for (const bG of this._def.checks) "min" === bG.kind && (null === GG || bG.value > GG) && (GG = bG.value);
        return GG
      }
      get maxValue() {
        let GG = null;
        for (const bG of this._def.checks) "max" === bG.kind && (null === GG || bG.value < GG) && (GG = bG.value);
        return GG
      }
      get isInt() {
        return !!this._def.checks.find((GG => "int" === GG.kind || "multipleOf" === GG.kind && kG.isInteger(GG.value)))
      }
      get isFinite() {
        let GG = null,
          bG = null;
        for (const ZG of this._def.checks) {
          if ("finite" === ZG.kind || "int" === ZG.kind || "multipleOf" === ZG.kind) return !0;
          "min" === ZG.kind ? (null === bG || ZG.value > bG) && (bG = ZG.value) : "max" === ZG.kind && (null === GG || ZG.value < GG) && (GG = ZG.value)
        }
        return Number.isFinite(bG) && Number.isFinite(GG)
      }
    }
    eG.create = GG => new eG({
      checks: [],
      typeName: cb.ZodNumber,
      coerce: (null === GG || void 0 === GG ? void 0 : GG.coerce) || !1,
      ...vG(GG)
    });
    class RG extends aG {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(GG) {
        this._def.coerce && (GG.data = BigInt(GG.data));
        if (this._getType(GG) !== VG.bigint) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.bigint,
            received: bG.parsedType
          }), EG
        }
        let bG;
        const ZG = new zG;
        for (const wG of this._def.checks)
          if ("min" === wG.kind) {
            (wG.inclusive ? GG.data < wG.value : GG.data <= wG.value) && (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
              code: fG.too_small,
              type: "bigint",
              minimum: wG.value,
              inclusive: wG.inclusive,
              message: wG.message
            }), ZG.cK())
          } else if ("max" === wG.kind) {
          (wG.inclusive ? GG.data > wG.value : GG.data >= wG.value) && (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
            code: fG.too_big,
            type: "bigint",
            maximum: wG.value,
            inclusive: wG.inclusive,
            message: wG.message
          }), ZG.cK())
        } else "multipleOf" === wG.kind ? GG.data % wG.value !== BigInt(0) && (bG = this._getOrReturnCtx(GG, bG), rG(bG, {
          code: fG.not_multiple_of,
          multipleOf: wG.value,
          message: wG.message
        }), ZG.cK()) : kG.assertNever(wG);
        return {
          status: ZG.value,
          value: GG.data
        }
      }
      gte(GG, bG) {
        return this.setLimit("min", GG, !0, mG.toString(bG))
      }
      gt(GG, bG) {
        return this.setLimit("min", GG, !1, mG.toString(bG))
      }
      lte(GG, bG) {
        return this.setLimit("max", GG, !0, mG.toString(bG))
      }
      lt(GG, bG) {
        return this.setLimit("max", GG, !1, mG.toString(bG))
      }
      setLimit(GG, bG, ZG, wG) {
        return new RG({
          ...this._def,
          checks: [...this._def.checks, {
            kind: GG,
            value: bG,
            inclusive: ZG,
            message: mG.toString(wG)
          }]
        })
      }
      _addCheck(GG) {
        return new RG({
          ...this._def,
          checks: [...this._def.checks, GG]
        })
      }
      positive(GG) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: mG.toString(GG)
        })
      }
      negative(GG) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: mG.toString(GG)
        })
      }
      nonpositive(GG) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: mG.toString(GG)
        })
      }
      nonnegative(GG) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: mG.toString(GG)
        })
      }
      multipleOf(GG, bG) {
        return this._addCheck({
          kind: "multipleOf",
          value: GG,
          message: mG.toString(bG)
        })
      }
      get minValue() {
        let GG = null;
        for (const bG of this._def.checks) "min" === bG.kind && (null === GG || bG.value > GG) && (GG = bG.value);
        return GG
      }
      get maxValue() {
        let GG = null;
        for (const bG of this._def.checks) "max" === bG.kind && (null === GG || bG.value < GG) && (GG = bG.value);
        return GG
      }
    }
    RG.create = GG => {
      var bG;
      return new RG({
        checks: [],
        typeName: cb.ZodBigInt,
        coerce: null !== (bG = null === GG || void 0 === GG ? void 0 : GG.coerce) && void 0 !== bG && bG,
        ...vG(GG)
      })
    };
    class TG extends aG {
      _parse(GG) {
        this._def.coerce && (GG.data = Boolean(GG.data));
        if (this._getType(GG) !== VG.boolean) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.boolean,
            received: bG.parsedType
          }), EG
        }
        return XG(GG.data)
      }
    }
    TG.create = GG => new TG({
      typeName: cb.ZodBoolean,
      coerce: (null === GG || void 0 === GG ? void 0 : GG.coerce) || !1,
      ...vG(GG)
    });
    class HG extends aG {
      _parse(GG) {
        this._def.coerce && (GG.data = new Date(GG.data));
        if (this._getType(GG) !== VG.date) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.date,
            received: bG.parsedType
          }), EG
        }
        if (isNaN(GG.data.getTime())) {
          return rG(this._getOrReturnCtx(GG), {
            code: fG.invalid_date
          }), EG
        }
        const bG = new zG;
        let ZG;
        for (const wG of this._def.checks) "min" === wG.kind ? GG.data.getTime() < wG.value && (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          code: fG.too_small,
          message: wG.message,
          inclusive: !0,
          exact: !1,
          minimum: wG.value,
          type: "date"
        }), bG.cK()) : "max" === wG.kind ? GG.data.getTime() > wG.value && (ZG = this._getOrReturnCtx(GG, ZG), rG(ZG, {
          code: fG.too_big,
          message: wG.message,
          inclusive: !0,
          exact: !1,
          maximum: wG.value,
          type: "date"
        }), bG.cK()) : kG.assertNever(wG);
        return {
          status: bG.value,
          value: new Date(GG.data.getTime())
        }
      }
      _addCheck(GG) {
        return new HG({
          ...this._def,
          checks: [...this._def.checks, GG]
        })
      }
      min(GG, bG) {
        return this._addCheck({
          kind: "min",
          value: GG.getTime(),
          message: mG.toString(bG)
        })
      }
      max(GG, bG) {
        return this._addCheck({
          kind: "max",
          value: GG.getTime(),
          message: mG.toString(bG)
        })
      }
      get minDate() {
        let GG = null;
        for (const bG of this._def.checks) "min" === bG.kind && (null === GG || bG.value > GG) && (GG = bG.value);
        return null != GG ? new Date(GG) : null
      }
      get maxDate() {
        let GG = null;
        for (const bG of this._def.checks) "max" === bG.kind && (null === GG || bG.value < GG) && (GG = bG.value);
        return null != GG ? new Date(GG) : null
      }
    }
    HG.create = GG => new HG({
      checks: [],
      coerce: (null === GG || void 0 === GG ? void 0 : GG.coerce) || !1,
      typeName: cb.ZodDate,
      ...vG(GG)
    });
    class tG extends aG {
      _parse(GG) {
        if (this._getType(GG) !== VG.symbol) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.symbol,
            received: bG.parsedType
          }), EG
        }
        return XG(GG.data)
      }
    }
    tG.create = GG => new tG({
      typeName: cb.ZodSymbol,
      ...vG(GG)
    });
    class DG extends aG {
      _parse(GG) {
        if (this._getType(GG) !== VG.undefined) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.undefined,
            received: bG.parsedType
          }), EG
        }
        return XG(GG.data)
      }
    }
    DG.create = GG => new DG({
      typeName: cb.ZodUndefined,
      ...vG(GG)
    });
    class NG extends aG {
      _parse(GG) {
        if (this._getType(GG) !== VG.null) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.null,
            received: bG.parsedType
          }), EG
        }
        return XG(GG.data)
      }
    }
    NG.create = GG => new NG({
      typeName: cb.ZodNull,
      ...vG(GG)
    });
    class OG extends aG {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(GG) {
        return XG(GG.data)
      }
    }
    OG.create = GG => new OG({
      typeName: cb.ZodAny,
      ...vG(GG)
    });
    class xG extends aG {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(GG) {
        return XG(GG.data)
      }
    }
    xG.create = GG => new xG({
      typeName: cb.ZodUnknown,
      ...vG(GG)
    });
    class BG extends aG {
      _parse(GG) {
        const bG = this._getOrReturnCtx(GG);
        return rG(bG, {
          code: fG.invalid_type,
          expected: VG.never,
          received: bG.parsedType
        }), EG
      }
    }
    BG.create = GG => new BG({
      typeName: cb.ZodNever,
      ...vG(GG)
    });
    class Gb extends aG {
      _parse(GG) {
        if (this._getType(GG) !== VG.undefined) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.void,
            received: bG.parsedType
          }), EG
        }
        return XG(GG.data)
      }
    }
    Gb.create = GG => new Gb({
      typeName: cb.ZodVoid,
      ...vG(GG)
    });
    class bb extends aG {
      _parse(GG) {
        const {
          ctx: bG,
          status: ZG
        } = this._processInputParams(GG), wG = this._def;
        if (bG.parsedType !== VG.array) return rG(bG, {
          code: fG.invalid_type,
          expected: VG.array,
          received: bG.parsedType
        }), EG;
        if (null !== wG.exactLength) {
          const GG = bG.data.length > wG.exactLength.value,
            SG = bG.data.length < wG.exactLength.value;
          (GG || SG) && (rG(bG, {
            code: GG ? fG.too_big : fG.too_small,
            minimum: SG ? wG.exactLength.value : void 0,
            maximum: GG ? wG.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: wG.exactLength.message
          }), ZG.cK())
        }
        if (null !== wG.minLength && bG.data.length < wG.minLength.value && (rG(bG, {
            code: fG.too_small,
            minimum: wG.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: wG.minLength.message
          }), ZG.cK()), null !== wG.maxLength && bG.data.length > wG.maxLength.value && (rG(bG, {
            code: fG.too_big,
            maximum: wG.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: wG.maxLength.message
          }), ZG.cK()), bG.common.async) return Promise.all([...bG.data].map(((GG, ZG) => wG.type._parseAsync(new IG(bG, GG, bG.path, ZG))))).then((GG => zG.mergeArray(ZG, GG)));
        const SG = [...bG.data].map(((GG, ZG) => wG.type._parseSync(new IG(bG, GG, bG.path, ZG))));
        return zG.mergeArray(ZG, SG)
      }
      get element() {
        return this._def.type
      }
      min(GG, bG) {
        return new bb({
          ...this._def,
          minLength: {
            value: GG,
            message: mG.toString(bG)
          }
        })
      }
      max(GG, bG) {
        return new bb({
          ...this._def,
          maxLength: {
            value: GG,
            message: mG.toString(bG)
          }
        })
      }
      length(GG, bG) {
        return new bb({
          ...this._def,
          exactLength: {
            value: GG,
            message: mG.toString(bG)
          }
        })
      }
      nonempty(GG) {
        return this.min(1, GG)
      }
    }

    function Zb(GG) {
      if (GG instanceof wb) {
        const bG = {};
        for (const ZG in GG.shape) {
          const wG = GG.shape[ZG];
          bG[ZG] = ob.create(Zb(wG))
        }
        return new wb({
          ...GG._def,
          shape: () => bG
        })
      }
      return GG instanceof bb ? new bb({
        ...GG._def,
        type: Zb(GG.element)
      }) : GG instanceof ob ? ob.create(Zb(GG.unwrap())) : GG instanceof Xb ? Xb.create(Zb(GG.unwrap())) : GG instanceof Yb ? Yb.create(GG.items.map((GG => Zb(GG)))) : GG
    }
    bb.create = (GG, bG) => new bb({
      type: GG,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: cb.ZodArray,
      ...vG(bG)
    });
    class wb extends aG {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const GG = this._def.shape(),
          bG = kG.objectKeys(GG);
        return this._cached = {
          shape: GG,
          keys: bG
        }
      }
      _parse(GG) {
        if (this._getType(GG) !== VG.object) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.object,
            received: bG.parsedType
          }), EG
        }
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG), {
          shape: wG,
          keys: SG
        } = this._getCached(), LG = [];
        if (!(this._def.catchall instanceof BG && "strip" === this._def.unknownKeys))
          for (const kG in ZG.data) SG.includes(kG) || LG.push(kG);
        const yG = [];
        for (const kG of SG) {
          const GG = wG[kG],
            bG = ZG.data[kG];
          yG.push({
            key: {
              status: "valid",
              value: kG
            },
            value: GG._parse(new IG(ZG, bG, ZG.path, kG)),
            alwaysSet: kG in ZG.data
          })
        }
        if (this._def.catchall instanceof BG) {
          const GG = this._def.unknownKeys;
          if ("passthrough" === GG)
            for (const bG of LG) yG.push({
              key: {
                status: "valid",
                value: bG
              },
              value: {
                status: "valid",
                value: ZG.data[bG]
              }
            });
          else if ("strict" === GG) LG.length > 0 && (rG(ZG, {
            code: fG.unrecognized_keys,
            keys: LG
          }), bG.cK());
          else if ("strip" !== GG) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const GG = this._def.catchall;
          for (const bG of LG) {
            const wG = ZG.data[bG];
            yG.push({
              key: {
                status: "valid",
                value: bG
              },
              value: GG._parse(new IG(ZG, wG, ZG.path, bG)),
              alwaysSet: bG in ZG.data
            })
          }
        }
        return ZG.common.async ? Promise.resolve().then((async () => {
          const GG = [];
          for (const bG of yG) {
            const ZG = await bG.key;
            GG.push({
              key: ZG,
              value: await bG.value,
              alwaysSet: bG.alwaysSet
            })
          }
          return GG
        })).then((GG => zG.mergeObjectSync(bG, GG))) : zG.mergeObjectSync(bG, yG)
      }
      get shape() {
        return this._def.shape()
      }
      strict(GG) {
        return mG.errToObj, new wb({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== GG ? {
            errorMap: (bG, ZG) => {
              var wG, SG, LG, yG;
              const kG = null !== (LG = null === (SG = (wG = this._def).errorMap) || void 0 === SG ? void 0 : SG.call(wG, bG, ZG).message) && void 0 !== LG ? LG : ZG.defaultError;
              return "unrecognized_keys" === bG.code ? {
                message: null !== (yG = mG.errToObj(GG).message) && void 0 !== yG ? yG : kG
              } : {
                message: kG
              }
            }
          } : {}
        })
      }
      strip() {
        return new wb({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new wb({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(GG) {
        return new wb({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...GG
          })
        })
      }
      merge(GG) {
        return new wb({
          unknownKeys: GG._def.unknownKeys,
          catchall: GG._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...GG._def.shape()
          }),
          typeName: cb.ZodObject
        })
      }
      setKey(GG, bG) {
        return this.augment({
          [GG]: bG
        })
      }
      catchall(GG) {
        return new wb({
          ...this._def,
          catchall: GG
        })
      }
      Df(GG) {
        const bG = {};
        return kG.objectKeys(GG).forEach((ZG => {
          GG[ZG] && this.shape[ZG] && (bG[ZG] = this.shape[ZG])
        })), new wb({
          ...this._def,
          shape: () => bG
        })
      }
      omit(GG) {
        const bG = {};
        return kG.objectKeys(this.shape).forEach((ZG => {
          GG[ZG] || (bG[ZG] = this.shape[ZG])
        })), new wb({
          ...this._def,
          shape: () => bG
        })
      }
      deepPartial() {
        return Zb(this)
      }
      partial(GG) {
        const bG = {};
        return kG.objectKeys(this.shape).forEach((ZG => {
          const wG = this.shape[ZG];
          GG && !GG[ZG] ? bG[ZG] = wG : bG[ZG] = wG.optional()
        })), new wb({
          ...this._def,
          shape: () => bG
        })
      }
      required(GG) {
        const bG = {};
        return kG.objectKeys(this.shape).forEach((ZG => {
          if (GG && !GG[ZG]) bG[ZG] = this.shape[ZG];
          else {
            let GG = this.shape[ZG];
            for (; GG instanceof ob;) GG = GG._def.innerType;
            bG[ZG] = GG
          }
        })), new wb({
          ...this._def,
          shape: () => bG
        })
      }
      keyof() {
        return db(kG.objectKeys(this.shape))
      }
    }
    wb.create = (GG, bG) => new wb({
      shape: () => GG,
      unknownKeys: "strip",
      catchall: BG.create(),
      typeName: cb.ZodObject,
      ...vG(bG)
    }), wb.strictCreate = (GG, bG) => new wb({
      shape: () => GG,
      unknownKeys: "strict",
      catchall: BG.create(),
      typeName: cb.ZodObject,
      ...vG(bG)
    }), wb.lazycreate = (GG, bG) => new wb({
      shape: GG,
      unknownKeys: "strip",
      catchall: BG.create(),
      typeName: cb.ZodObject,
      ...vG(bG)
    });
    class Sb extends aG {
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG), ZG = this._def.options;
        if (bG.common.async) return Promise.all(ZG.map((async GG => {
          const ZG = {
            ...bG,
            common: {
              ...bG.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await GG._parseAsync({
              data: bG.data,
              path: bG.path,
              parent: ZG
            }),
            ctx: ZG
          }
        }))).then((function(GG) {
          for (const bG of GG)
            if ("valid" === bG.result.status) return bG.result;
          for (const wG of GG)
            if ("cK" === wG.result.status) return bG.common.issues.push(...wG.ctx.common.issues), wG.result;
          const ZG = GG.map((GG => new QG(GG.ctx.common.issues)));
          return rG(bG, {
            code: fG.invalid_union,
            unionErrors: ZG
          }), EG
        }));
        {
          let GG;
          const wG = [];
          for (const LG of ZG) {
            const ZG = {
                ...bG,
                common: {
                  ...bG.common,
                  issues: []
                },
                parent: null
              },
              SG = LG._parseSync({
                data: bG.data,
                path: bG.path,
                parent: ZG
              });
            if ("valid" === SG.status) return SG;
            "cK" !== SG.status || GG || (GG = {
              result: SG,
              ctx: ZG
            }), ZG.common.issues.length && wG.push(ZG.common.issues)
          }
          if (GG) return bG.common.issues.push(...GG.ctx.common.issues), GG.result;
          const SG = wG.map((GG => new QG(GG)));
          return rG(bG, {
            code: fG.invalid_union,
            unionErrors: SG
          }), EG
        }
      }
      get options() {
        return this._def.options
      }
    }
    Sb.create = (GG, bG) => new Sb({
      options: GG,
      typeName: cb.ZodUnion,
      ...vG(bG)
    });
    const Lb = GG => GG instanceof Kb ? Lb(GG.schema) : GG instanceof Eb ? Lb(GG.innerType()) : GG instanceof hb ? [GG.value] : GG instanceof Jb ? GG.options : GG instanceof rb ? Object.keys(GG.enum) : GG instanceof ub ? Lb(GG._def.innerType) : GG instanceof DG ? [void 0] : GG instanceof NG ? [null] : null;
    class yb extends aG {
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG);
        if (bG.parsedType !== VG.object) return rG(bG, {
          code: fG.invalid_type,
          expected: VG.object,
          received: bG.parsedType
        }), EG;
        const ZG = this.discriminator,
          wG = bG.data[ZG],
          SG = this.optionsMap.get(wG);
        return SG ? bG.common.async ? SG._parseAsync({
          data: bG.data,
          path: bG.path,
          parent: bG
        }) : SG._parseSync({
          data: bG.data,
          path: bG.path,
          parent: bG
        }) : (rG(bG, {
          code: fG.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [ZG]
        }), EG)
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
      static create(GG, bG, ZG) {
        const wG = new Map;
        for (const SG of bG) {
          const bG = Lb(SG.shape[GG]);
          if (!bG) throw new Error(`A discriminator value for key \`${GG}\` could not be extracted from all schema options`);
          for (const ZG of bG) {
            if (wG.has(ZG)) throw new Error(`Discriminator property ${String(GG)} has duplicate value ${String(ZG)}`);
            wG.set(ZG, SG)
          }
        }
        return new yb({
          typeName: cb.ZodDiscriminatedUnion,
          discriminator: GG,
          options: bG,
          optionsMap: wG,
          ...vG(ZG)
        })
      }
    }

    function kb(GG, bG) {
      const ZG = pG(GG),
        wG = pG(bG);
      if (GG === bG) return {
        valid: !0,
        data: GG
      };
      if (ZG === VG.object && wG === VG.object) {
        const ZG = kG.objectKeys(bG),
          wG = kG.objectKeys(GG).filter((GG => -1 !== ZG.indexOf(GG))),
          SG = {
            ...GG,
            ...bG
          };
        for (const LG of wG) {
          const ZG = kb(GG[LG], bG[LG]);
          if (!ZG.valid) return {
            valid: !1
          };
          SG[LG] = ZG.data
        }
        return {
          valid: !0,
          data: SG
        }
      }
      if (ZG === VG.array && wG === VG.array) {
        if (GG.length !== bG.length) return {
          valid: !1
        };
        const ZG = [];
        for (let wG = 0; wG < GG.length; wG++) {
          const SG = kb(GG[wG], bG[wG]);
          if (!SG.valid) return {
            valid: !1
          };
          ZG.push(SG.data)
        }
        return {
          valid: !0,
          data: ZG
        }
      }
      return ZG === VG.date && wG === VG.date && +GG === +bG ? {
        valid: !0,
        data: GG
      } : {
        valid: !1
      }
    }
    class Ub extends aG {
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG), wG = (GG, wG) => {
          if (uG(GG) || uG(wG)) return EG;
          const SG = kb(GG.value, wG.value);
          return SG.valid ? ((iG(GG) || iG(wG)) && bG.cK(), {
            status: bG.value,
            value: SG.data
          }) : (rG(ZG, {
            code: fG.invalid_intersection_types
          }), EG)
        };
        return ZG.common.async ? Promise.all([this._def.left._parseAsync({
          data: ZG.data,
          path: ZG.path,
          parent: ZG
        }), this._def.right._parseAsync({
          data: ZG.data,
          path: ZG.path,
          parent: ZG
        })]).then((GG => {
          let [bG, ZG] = GG;
          return wG(bG, ZG)
        })) : wG(this._def.left._parseSync({
          data: ZG.data,
          path: ZG.path,
          parent: ZG
        }), this._def.right._parseSync({
          data: ZG.data,
          path: ZG.path,
          parent: ZG
        }))
      }
    }
    Ub.create = (GG, bG, ZG) => new Ub({
      left: GG,
      right: bG,
      typeName: cb.ZodIntersection,
      ...vG(ZG)
    });
    class Yb extends aG {
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG);
        if (ZG.parsedType !== VG.array) return rG(ZG, {
          code: fG.invalid_type,
          expected: VG.array,
          received: ZG.parsedType
        }), EG;
        if (ZG.data.length < this._def.items.length) return rG(ZG, {
          code: fG.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), EG;
        !this._def.rest && ZG.data.length > this._def.items.length && (rG(ZG, {
          code: fG.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), bG.cK());
        const wG = [...ZG.data].map(((GG, bG) => {
          const wG = this._def.items[bG] || this._def.rest;
          return wG ? wG._parse(new IG(ZG, GG, ZG.path, bG)) : null
        })).filter((GG => !!GG));
        return ZG.common.async ? Promise.all(wG).then((GG => zG.mergeArray(bG, GG))) : zG.mergeArray(bG, wG)
      }
      get items() {
        return this._def.items
      }
      rest(GG) {
        return new Yb({
          ...this._def,
          rest: GG
        })
      }
    }
    Yb.create = (GG, bG) => {
      if (!Array.isArray(GG)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Yb({
        items: GG,
        typeName: cb.ZodTuple,
        rest: null,
        ...vG(bG)
      })
    };
    class Vb extends aG {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG);
        if (ZG.parsedType !== VG.object) return rG(ZG, {
          code: fG.invalid_type,
          expected: VG.object,
          received: ZG.parsedType
        }), EG;
        const wG = [],
          SG = this._def.keyType,
          LG = this._def.valueType;
        for (const yG in ZG.data) wG.push({
          key: SG._parse(new IG(ZG, yG, ZG.path, yG)),
          value: LG._parse(new IG(ZG, ZG.data[yG], ZG.path, yG))
        });
        return ZG.common.async ? zG.mergeObjectAsync(bG, wG) : zG.mergeObjectSync(bG, wG)
      }
      get element() {
        return this._def.valueType
      }
      static create(GG, bG, ZG) {
        return new Vb(bG instanceof aG ? {
          keyType: GG,
          valueType: bG,
          typeName: cb.ZodRecord,
          ...vG(ZG)
        } : {
          keyType: nG.create(),
          valueType: GG,
          typeName: cb.ZodRecord,
          ...vG(bG)
        })
      }
    }
    class pb extends aG {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG);
        if (ZG.parsedType !== VG.map) return rG(ZG, {
          code: fG.invalid_type,
          expected: VG.map,
          received: ZG.parsedType
        }), EG;
        const wG = this._def.keyType,
          SG = this._def.valueType,
          LG = [...ZG.data.entries()].map(((GG, bG) => {
            let [LG, yG] = GG;
            return {
              key: wG._parse(new IG(ZG, LG, ZG.path, [bG, "key"])),
              value: SG._parse(new IG(ZG, yG, ZG.path, [bG, "value"]))
            }
          }));
        if (ZG.common.async) {
          const GG = new Map;
          return Promise.resolve().then((async () => {
            for (const ZG of LG) {
              const wG = await ZG.key,
                SG = await ZG.value;
              if ("aborted" === wG.status || "aborted" === SG.status) return EG;
              "cK" !== wG.status && "cK" !== SG.status || bG.cK(), GG.set(wG.value, SG.value)
            }
            return {
              status: bG.value,
              value: GG
            }
          }))
        } {
          const GG = new Map;
          for (const ZG of LG) {
            const wG = ZG.key,
              SG = ZG.value;
            if ("aborted" === wG.status || "aborted" === SG.status) return EG;
            "cK" !== wG.status && "cK" !== SG.status || bG.cK(), GG.set(wG.value, SG.value)
          }
          return {
            status: bG.value,
            value: GG
          }
        }
      }
    }
    pb.create = (GG, bG, ZG) => new pb({
      valueType: bG,
      keyType: GG,
      typeName: cb.ZodMap,
      ...vG(ZG)
    });
    class fb extends aG {
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG);
        if (ZG.parsedType !== VG.set) return rG(ZG, {
          code: fG.invalid_type,
          expected: VG.set,
          received: ZG.parsedType
        }), EG;
        const wG = this._def;
        null !== wG.minSize && ZG.data.size < wG.minSize.value && (rG(ZG, {
          code: fG.too_small,
          minimum: wG.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: wG.minSize.message
        }), bG.cK()), null !== wG.maxSize && ZG.data.size > wG.maxSize.value && (rG(ZG, {
          code: fG.too_big,
          maximum: wG.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: wG.maxSize.message
        }), bG.cK());
        const SG = this._def.valueType;

        function LG(GG) {
          const ZG = new Set;
          for (const wG of GG) {
            if ("aborted" === wG.status) return EG;
            "cK" === wG.status && bG.cK(), ZG.add(wG.value)
          }
          return {
            status: bG.value,
            value: ZG
          }
        }
        const yG = [...ZG.data.values()].map(((GG, bG) => SG._parse(new IG(ZG, GG, ZG.path, bG))));
        return ZG.common.async ? Promise.all(yG).then((GG => LG(GG))) : LG(yG)
      }
      min(GG, bG) {
        return new fb({
          ...this._def,
          minSize: {
            value: GG,
            message: mG.toString(bG)
          }
        })
      }
      max(GG, bG) {
        return new fb({
          ...this._def,
          maxSize: {
            value: GG,
            message: mG.toString(bG)
          }
        })
      }
      size(GG, bG) {
        return this.min(GG, bG).max(GG, bG)
      }
      nonempty(GG) {
        return this.min(1, GG)
      }
    }
    fb.create = (GG, bG) => new fb({
      valueType: GG,
      minSize: null,
      maxSize: null,
      typeName: cb.ZodSet,
      ...vG(bG)
    });
    class Qb extends aG {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG);
        if (bG.parsedType !== VG.function) return rG(bG, {
          code: fG.invalid_type,
          expected: VG.function,
          received: bG.parsedType
        }), EG;

        function ZG(GG, ZG) {
          return JG({
            data: GG,
            path: bG.path,
            errorMaps: [bG.common.contextualErrorMap, bG.schemaErrorMap, dG(), KG].filter((GG => !!GG)),
            issueData: {
              code: fG.invalid_arguments,
              argumentsError: ZG
            }
          })
        }

        function wG(GG, ZG) {
          return JG({
            data: GG,
            path: bG.path,
            errorMaps: [bG.common.contextualErrorMap, bG.schemaErrorMap, dG(), KG].filter((GG => !!GG)),
            issueData: {
              code: fG.invalid_return_type,
              returnTypeError: ZG
            }
          })
        }
        const SG = {
            errorMap: bG.common.contextualErrorMap
          },
          LG = bG.data;
        if (this._def.returns instanceof zb) {
          const GG = this;
          return XG((async function() {
            for (var bG = arguments.length, yG = new Array(bG), kG = 0; kG < bG; kG++) yG[kG] = arguments[kG];
            const UG = new QG([]),
              YG = await GG._def.args.parseAsync(yG, SG).catch((GG => {
                throw UG.addIssue(ZG(yG, GG)), UG
              })),
              VG = await Reflect.apply(LG, this, YG);
            return await GG._def.returns._def.type.parseAsync(VG, SG).catch((GG => {
              throw UG.addIssue(wG(VG, GG)), UG
            }))
          }))
        } {
          const GG = this;
          return XG((function() {
            for (var bG = arguments.length, yG = new Array(bG), kG = 0; kG < bG; kG++) yG[kG] = arguments[kG];
            const UG = GG._def.args.safeParse(yG, SG);
            if (!UG.success) throw new QG([ZG(yG, UG.error)]);
            const YG = Reflect.apply(LG, this, UG.data),
              VG = GG._def.returns.safeParse(YG, SG);
            if (!VG.success) throw new QG([wG(YG, VG.error)]);
            return VG.data
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
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return new Qb({
          ...this._def,
          args: Yb.create(bG).rest(xG.create())
        })
      }
      returns(GG) {
        return new Qb({
          ...this._def,
          returns: GG
        })
      }
      implement(GG) {
        return this.parse(GG)
      }
      strictImplement(GG) {
        return this.parse(GG)
      }
      static create(GG, bG, ZG) {
        return new Qb({
          args: GG || Yb.create([]).rest(xG.create()),
          returns: bG || xG.create(),
          typeName: cb.ZodFunction,
          ...vG(ZG)
        })
      }
    }
    class Kb extends aG {
      get schema() {
        return this._def.getter()
      }
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG);
        return this._def.getter()._parse({
          data: bG.data,
          path: bG.path,
          parent: bG
        })
      }
    }
    Kb.create = (GG, bG) => new Kb({
      getter: GG,
      typeName: cb.ZodLazy,
      ...vG(bG)
    });
    class hb extends aG {
      _parse(GG) {
        if (GG.data !== this._def.value) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            received: bG.data,
            code: fG.invalid_literal,
            expected: this._def.value
          }), EG
        }
        return {
          status: "valid",
          value: GG.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function db(GG, bG) {
      return new Jb({
        values: GG,
        typeName: cb.ZodEnum,
        ...vG(bG)
      })
    }
    hb.create = (GG, bG) => new hb({
      value: GG,
      typeName: cb.ZodLiteral,
      ...vG(bG)
    });
    class Jb extends aG {
      _parse(GG) {
        if ("string" !== typeof GG.data) {
          const bG = this._getOrReturnCtx(GG),
            ZG = this._def.values;
          return rG(bG, {
            expected: kG.joinValues(ZG),
            received: bG.parsedType,
            code: fG.invalid_type
          }), EG
        }
        if (-1 === this._def.values.indexOf(GG.data)) {
          const bG = this._getOrReturnCtx(GG),
            ZG = this._def.values;
          return rG(bG, {
            received: bG.data,
            code: fG.invalid_enum_value,
            options: ZG
          }), EG
        }
        return XG(GG.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const GG = {};
        for (const bG of this._def.values) GG[bG] = bG;
        return GG
      }
      get Values() {
        const GG = {};
        for (const bG of this._def.values) GG[bG] = bG;
        return GG
      }
      get Enum() {
        const GG = {};
        for (const bG of this._def.values) GG[bG] = bG;
        return GG
      }
      extract(GG) {
        return Jb.create(GG)
      }
      exclude(GG) {
        return Jb.create(this.options.filter((bG => !GG.includes(bG))))
      }
    }
    Jb.create = db;
    class rb extends aG {
      _parse(GG) {
        const bG = kG.getValidEnumValues(this._def.values),
          ZG = this._getOrReturnCtx(GG);
        if (ZG.parsedType !== VG.string && ZG.parsedType !== VG.number) {
          const GG = kG.objectValues(bG);
          return rG(ZG, {
            expected: kG.joinValues(GG),
            received: ZG.parsedType,
            code: fG.invalid_type
          }), EG
        }
        if (-1 === bG.indexOf(GG.data)) {
          const GG = kG.objectValues(bG);
          return rG(ZG, {
            received: ZG.data,
            code: fG.invalid_enum_value,
            options: GG
          }), EG
        }
        return XG(GG.data)
      }
      get enum() {
        return this._def.values
      }
    }
    rb.create = (GG, bG) => new rb({
      values: GG,
      typeName: cb.ZodNativeEnum,
      ...vG(bG)
    });
    class zb extends aG {
      unwrap() {
        return this._def.type
      }
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG);
        if (bG.parsedType !== VG.promise && !1 === bG.common.async) return rG(bG, {
          code: fG.invalid_type,
          expected: VG.promise,
          received: bG.parsedType
        }), EG;
        const ZG = bG.parsedType === VG.promise ? bG.data : Promise.resolve(bG.data);
        return XG(ZG.then((GG => this._def.type.parseAsync(GG, {
          path: bG.path,
          errorMap: bG.common.contextualErrorMap
        }))))
      }
    }
    zb.create = (GG, bG) => new zb({
      type: GG,
      typeName: cb.ZodPromise,
      ...vG(bG)
    });
    class Eb extends aG {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === cb.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG), wG = this._def.effect || null, SG = {
          addIssue: GG => {
            rG(ZG, GG), GG.fatal ? bG.abort() : bG.cK()
          },
          get path() {
            return ZG.path
          }
        };
        if (SG.addIssue = SG.addIssue.bind(SG), "preprocess" === wG.type) {
          const GG = wG.transform(ZG.data, SG);
          return ZG.common.issues.length ? {
            status: "cK",
            value: ZG.data
          } : ZG.common.async ? Promise.resolve(GG).then((GG => this._def.schema._parseAsync({
            data: GG,
            path: ZG.path,
            parent: ZG
          }))) : this._def.schema._parseSync({
            data: GG,
            path: ZG.path,
            parent: ZG
          })
        }
        if ("refinement" === wG.type) {
          const GG = GG => {
            const bG = wG.refinement(GG, SG);
            if (ZG.common.async) return Promise.resolve(bG);
            if (bG instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return GG
          };
          if (!1 === ZG.common.async) {
            const wG = this._def.schema._parseSync({
              data: ZG.data,
              path: ZG.path,
              parent: ZG
            });
            return "aborted" === wG.status ? EG : ("cK" === wG.status && bG.cK(), GG(wG.value), {
              status: bG.value,
              value: wG.value
            })
          }
          return this._def.schema._parseAsync({
            data: ZG.data,
            path: ZG.path,
            parent: ZG
          }).then((ZG => "aborted" === ZG.status ? EG : ("cK" === ZG.status && bG.cK(), GG(ZG.value).then((() => ({
            status: bG.value,
            value: ZG.value
          }))))))
        }
        if ("transform" === wG.type) {
          if (!1 === ZG.common.async) {
            const GG = this._def.schema._parseSync({
              data: ZG.data,
              path: ZG.path,
              parent: ZG
            });
            if (!CG(GG)) return GG;
            const LG = wG.transform(GG.value, SG);
            if (LG instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: bG.value,
              value: LG
            }
          }
          return this._def.schema._parseAsync({
            data: ZG.data,
            path: ZG.path,
            parent: ZG
          }).then((GG => CG(GG) ? Promise.resolve(wG.transform(GG.value, SG)).then((GG => ({
            status: bG.value,
            value: GG
          }))) : GG))
        }
        kG.assertNever(wG)
      }
    }
    Eb.create = (GG, bG, ZG) => new Eb({
      schema: GG,
      typeName: cb.ZodEffects,
      effect: bG,
      ...vG(ZG)
    }), Eb.createWithPreprocess = (GG, bG, ZG) => new Eb({
      schema: bG,
      effect: {
        type: "preprocess",
        transform: GG
      },
      typeName: cb.ZodEffects,
      ...vG(ZG)
    });
    class ob extends aG {
      _parse(GG) {
        return this._getType(GG) === VG.undefined ? XG(void 0) : this._def.innerType._parse(GG)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    ob.create = (GG, bG) => new ob({
      innerType: GG,
      typeName: cb.ZodOptional,
      ...vG(bG)
    });
    class Xb extends aG {
      _parse(GG) {
        return this._getType(GG) === VG.null ? XG(null) : this._def.innerType._parse(GG)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Xb.create = (GG, bG) => new Xb({
      innerType: GG,
      typeName: cb.ZodNullable,
      ...vG(bG)
    });
    class ub extends aG {
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG);
        let ZG = bG.data;
        return bG.parsedType === VG.undefined && (ZG = this._def.defaultValue()), this._def.innerType._parse({
          data: ZG,
          path: bG.path,
          parent: bG
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    ub.create = (GG, bG) => new ub({
      innerType: GG,
      typeName: cb.ZodDefault,
      defaultValue: "function" === typeof bG.default ? bG.default : () => bG.default,
      ...vG(bG)
    });
    class ib extends aG {
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG), ZG = {
          ...bG,
          common: {
            ...bG.common,
            issues: []
          }
        }, wG = this._def.innerType._parse({
          data: ZG.data,
          path: ZG.path,
          parent: {
            ...ZG
          }
        });
        return WG(wG) ? wG.then((GG => ({
          status: "valid",
          value: "valid" === GG.status ? GG.value : this._def.catchValue({
            get error() {
              return new QG(ZG.common.issues)
            },
            input: ZG.data
          })
        }))) : {
          status: "valid",
          value: "valid" === wG.status ? wG.value : this._def.catchValue({
            get error() {
              return new QG(ZG.common.issues)
            },
            input: ZG.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    ib.create = (GG, bG) => new ib({
      innerType: GG,
      typeName: cb.ZodCatch,
      catchValue: "function" === typeof bG.catch ? bG.catch : () => bG.catch,
      ...vG(bG)
    });
    class Cb extends aG {
      _parse(GG) {
        if (this._getType(GG) !== VG.nan) {
          const bG = this._getOrReturnCtx(GG);
          return rG(bG, {
            code: fG.invalid_type,
            expected: VG.nan,
            received: bG.parsedType
          }), EG
        }
        return {
          status: "valid",
          value: GG.data
        }
      }
    }
    Cb.create = GG => new Cb({
      typeName: cb.ZodNaN,
      ...vG(GG)
    });
    const Wb = Symbol("zod_brand");
    class mb extends aG {
      _parse(GG) {
        const {
          ctx: bG
        } = this._processInputParams(GG), ZG = bG.data;
        return this._def.type._parse({
          data: ZG,
          path: bG.path,
          parent: bG
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Ib extends aG {
      _parse(GG) {
        const {
          status: bG,
          ctx: ZG
        } = this._processInputParams(GG);
        if (ZG.common.async) {
          return (async () => {
            const GG = await this._def.in._parseAsync({
              data: ZG.data,
              path: ZG.path,
              parent: ZG
            });
            return "aborted" === GG.status ? EG : "cK" === GG.status ? (bG.cK(), oG(GG.value)) : this._def.out._parseAsync({
              data: GG.value,
              path: ZG.path,
              parent: ZG
            })
          })()
        } {
          const GG = this._def.in._parseSync({
            data: ZG.data,
            path: ZG.path,
            parent: ZG
          });
          return "aborted" === GG.status ? EG : "cK" === GG.status ? (bG.cK(), {
            status: "cK",
            value: GG.value
          }) : this._def.out._parseSync({
            data: GG.value,
            path: ZG.path,
            parent: ZG
          })
        }
      }
      static create(GG, bG) {
        return new Ib({
          in: GG,
          out: bG,
          typeName: cb.ZodPipeline
        })
      }
    }
    class Fb extends aG {
      _parse(GG) {
        const bG = this._def.innerType._parse(GG);
        return CG(bG) && (bG.value = Object.freeze(bG.value)), bG
      }
    }
    Fb.create = (GG, bG) => new Fb({
      innerType: GG,
      typeName: cb.ZodReadonly,
      ...vG(bG)
    });
    const vb = function(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        return GG ? OG.create().superRefine(((wG, SG) => {
          var LG, yG;
          if (!GG(wG)) {
            const GG = "function" === typeof bG ? bG(wG) : "string" === typeof bG ? {
                message: bG
              } : bG,
              kG = null === (yG = null !== (LG = GG.fatal) && void 0 !== LG ? LG : ZG) || void 0 === yG || yG,
              UG = "string" === typeof GG ? {
                message: GG
              } : GG;
            SG.addIssue({
              code: "custom",
              ...UG,
              fatal: kG
            })
          }
        })) : OG.create()
      },
      ab = {
        object: wb.lazycreate
      };
    var cb;
    ! function(GG) {
      GG.ZodString = "ZodString", GG.ZodNumber = "ZodNumber", GG.ZodNaN = "ZodNaN", GG.ZodBigInt = "ZodBigInt", GG.ZodBoolean = "ZodBoolean", GG.ZodDate = "ZodDate", GG.ZodSymbol = "ZodSymbol", GG.ZodUndefined = "ZodUndefined", GG.ZodNull = "ZodNull", GG.ZodAny = "ZodAny", GG.ZodUnknown = "ZodUnknown", GG.ZodNever = "ZodNever", GG.ZodVoid = "ZodVoid", GG.ZodArray = "ZodArray", GG.ZodObject = "ZodObject", GG.ZodUnion = "ZodUnion", GG.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", GG.ZodIntersection = "ZodIntersection", GG.ZodTuple = "ZodTuple", GG.ZodRecord = "ZodRecord", GG.ZodMap = "ZodMap", GG.ZodSet = "ZodSet", GG.ZodFunction = "ZodFunction", GG.ZodLazy = "ZodLazy", GG.ZodLiteral = "ZodLiteral", GG.ZodEnum = "ZodEnum", GG.ZodEffects = "ZodEffects", GG.ZodNativeEnum = "ZodNativeEnum", GG.ZodOptional = "ZodOptional", GG.ZodNullable = "ZodNullable", GG.ZodDefault = "ZodDefault", GG.ZodCatch = "ZodCatch", GG.ZodPromise = "ZodPromise", GG.ZodBranded = "ZodBranded", GG.ZodPipeline = "ZodPipeline", GG.ZodReadonly = "ZodReadonly"
    }(cb || (cb = {}));
    const lb = nG.create,
      jb = eG.create,
      Pb = Cb.create,
      Mb = RG.create,
      Ab = TG.create,
      sb = HG.create,
      qb = tG.create,
      nb = DG.create,
      gb = NG.create,
      eb = OG.create,
      Rb = xG.create,
      Tb = BG.create,
      Hb = Gb.create,
      tb = bb.create,
      Db = wb.create,
      Nb = wb.strictCreate,
      Ob = Sb.create,
      xb = yb.create,
      Bb = Ub.create,
      GZ = Yb.create,
      bZ = Vb.create,
      ZZ = pb.create,
      wZ = fb.create,
      SZ = Qb.create,
      LZ = Kb.create,
      yZ = hb.create,
      kZ = Jb.create,
      UZ = rb.create,
      YZ = zb.create,
      VZ = Eb.create,
      pZ = ob.create,
      fZ = Xb.create,
      QZ = Eb.createWithPreprocess,
      KZ = Ib.create,
      hZ = {
        string: GG => nG.create({
          ...GG,
          coerce: !0
        }),
        number: GG => eG.create({
          ...GG,
          coerce: !0
        }),
        boolean: GG => TG.create({
          ...GG,
          coerce: !0
        }),
        bigint: GG => RG.create({
          ...GG,
          coerce: !0
        }),
        date: GG => HG.create({
          ...GG,
          coerce: !0
        })
      },
      dZ = EG;
    var JZ = Object.freeze({
        __proto__: null,
        defaultErrorMap: KG,
        setErrorMap: function(GG) {
          hG = GG
        },
        getErrorMap: dG,
        makeIssue: JG,
        EMPTY_PATH: [],
        addIssueToContext: rG,
        ParseStatus: zG,
        INVALID: EG,
        DIRTY: oG,
        OK: XG,
        isAborted: uG,
        isDirty: iG,
        isValid: CG,
        isAsync: WG,
        get util() {
          return kG
        },
        get objectUtil() {
          return UG
        },
        ZodParsedType: VG,
        getParsedType: pG,
        ZodType: aG,
        ZodString: nG,
        ZodNumber: eG,
        ZodBigInt: RG,
        ZodBoolean: TG,
        ZodDate: HG,
        ZodSymbol: tG,
        ZodUndefined: DG,
        ZodNull: NG,
        ZodAny: OG,
        ZodUnknown: xG,
        ZodNever: BG,
        ZodVoid: Gb,
        ZodArray: bb,
        ZodObject: wb,
        ZodUnion: Sb,
        ZodDiscriminatedUnion: yb,
        ZodIntersection: Ub,
        ZodTuple: Yb,
        ZodRecord: Vb,
        ZodMap: pb,
        ZodSet: fb,
        ZodFunction: Qb,
        ZodLazy: Kb,
        ZodLiteral: hb,
        ZodEnum: Jb,
        ZodNativeEnum: rb,
        ZodPromise: zb,
        ZodEffects: Eb,
        ZodTransformer: Eb,
        ZodOptional: ob,
        ZodNullable: Xb,
        ZodDefault: ub,
        ZodCatch: ib,
        ZodNaN: Cb,
        BRAND: Wb,
        ZodBranded: mb,
        ZodPipeline: Ib,
        ZodReadonly: Fb,
        custom: vb,
        Schema: aG,
        ZodSchema: aG,
        late: ab,
        get ZodFirstPartyTypeKind() {
          return cb
        },
        coerce: hZ,
        any: eb,
        array: tb,
        bigint: Mb,
        boolean: Ab,
        date: sb,
        discriminatedUnion: xb,
        effect: VZ,
        enum: kZ,
        function: SZ,
        instanceof: function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${GG.name}`
          };
          return vb((bG => bG instanceof GG), bG)
        },
        intersection: Bb,
        lazy: LZ,
        literal: yZ,
        map: ZZ,
        nan: Pb,
        nativeEnum: UZ,
        never: Tb,
        null: gb,
        nullable: fZ,
        number: jb,
        object: Db,
        oboolean: () => Ab().optional(),
        onumber: () => jb().optional(),
        optional: pZ,
        ostring: () => lb().optional(),
        pipeline: KZ,
        preprocess: QZ,
        promise: YZ,
        record: bZ,
        set: wZ,
        strictObject: Nb,
        string: lb,
        symbol: qb,
        transformer: VZ,
        tuple: GZ,
        undefined: nb,
        union: Ob,
        unknown: Rb,
        void: Hb,
        NEVER: dZ,
        ZodIssueCode: fG,
        quotelessJson: GG => JSON.stringify(GG, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: QG
      }),
      rZ = {
        exports: {}
      };
    ! function(GG) {
      var bG = function(GG) {
        var ZG = 1e7,
          wG = 9007199254740992,
          SG = fG(wG),
          LG = "0123456789abcdefghijklmnopqrstuvwxyz",
          yG = "function" === typeof BigInt;

        function kG(GG, bG, ZG, wG) {
          return "undefined" === typeof GG ? kG[0] : "undefined" !== typeof bG && (10 !== +bG || ZG) ? TG(GG, bG, ZG, wG) : OG(GG)
        }

        function UG(GG, bG) {
          this.value = GG, this.sign = bG, this.isSmall = !1
        }

        function YG(GG) {
          this.value = GG, this.sign = GG < 0, this.isSmall = !0
        }

        function VG(GG) {
          this.value = GG
        }

        function pG(GG) {
          return -wG < GG && GG < wG
        }

        function fG(GG) {
          return GG < 1e7 ? [GG] : GG < 1e14 ? [GG % 1e7, Math.floor(GG / 1e7)] : [GG % 1e7, Math.floor(GG / 1e7) % 1e7, Math.floor(GG / 1e14)]
        }

        function QG(GG) {
          KG(GG);
          var bG = GG.length;
          if (bG < 4 && vG(GG, SG) < 0) switch (bG) {
            case 0:
              return 0;
            case 1:
              return GG[0];
            case 2:
              return GG[0] + GG[1] * ZG;
            default:
              return GG[0] + (GG[1] + GG[2] * ZG) * ZG
          }
          return GG
        }

        function KG(GG) {
          for (var bG = GG.length; 0 === GG[--bG];);
          GG.length = bG + 1
        }

        function hG(GG) {
          for (var bG = new Array(GG), ZG = -1; ++ZG < GG;) bG[ZG] = 0;
          return bG
        }

        function dG(GG) {
          return GG > 0 ? Math.floor(GG) : Math.ceil(GG)
        }

        function JG(GG, bG) {
          var wG, SG, LG = GG.length,
            yG = bG.length,
            kG = new Array(LG),
            UG = 0,
            YG = ZG;
          for (SG = 0; SG < yG; SG++) UG = (wG = GG[SG] + bG[SG] + UG) >= YG ? 1 : 0, kG[SG] = wG - UG * YG;
          for (; SG < LG;) UG = (wG = GG[SG] + UG) === YG ? 1 : 0, kG[SG++] = wG - UG * YG;
          return UG > 0 && kG.push(UG), kG
        }

        function rG(GG, bG) {
          return GG.length >= bG.length ? JG(GG, bG) : JG(bG, GG)
        }

        function zG(GG, bG) {
          var wG, SG, LG = GG.length,
            yG = new Array(LG),
            kG = ZG;
          for (SG = 0; SG < LG; SG++) wG = GG[SG] - kG + bG, bG = Math.floor(wG / kG), yG[SG] = wG - bG * kG, bG += 1;
          for (; bG > 0;) yG[SG++] = bG % kG, bG = Math.floor(bG / kG);
          return yG
        }

        function EG(GG, bG) {
          var wG, SG, LG = GG.length,
            yG = bG.length,
            kG = new Array(LG),
            UG = 0,
            YG = ZG;
          for (wG = 0; wG < yG; wG++)(SG = GG[wG] - UG - bG[wG]) < 0 ? (SG += YG, UG = 1) : UG = 0, kG[wG] = SG;
          for (wG = yG; wG < LG; wG++) {
            if (!((SG = GG[wG] - UG) < 0)) {
              kG[wG++] = SG;
              break
            }
            SG += YG, kG[wG] = SG
          }
          for (; wG < LG; wG++) kG[wG] = GG[wG];
          return KG(kG), kG
        }

        function oG(GG, bG, wG) {
          var SG, LG, yG = GG.length,
            kG = new Array(yG),
            VG = -bG,
            pG = ZG;
          for (SG = 0; SG < yG; SG++) LG = GG[SG] + VG, VG = Math.floor(LG / pG), LG %= pG, kG[SG] = LG < 0 ? LG + pG : LG;
          return "number" === typeof(kG = QG(kG)) ? (wG && (kG = -kG), new YG(kG)) : new UG(kG, wG)
        }

        function XG(GG, bG) {
          var wG, SG, LG, yG, kG = GG.length,
            UG = bG.length,
            YG = hG(kG + UG),
            VG = ZG;
          for (LG = 0; LG < kG; ++LG) {
            yG = GG[LG];
            for (var pG = 0; pG < UG; ++pG) wG = yG * bG[pG] + YG[LG + pG], SG = Math.floor(wG / VG), YG[LG + pG] = wG - SG * VG, YG[LG + pG + 1] += SG
          }
          return KG(YG), YG
        }

        function uG(GG, bG) {
          var wG, SG, LG = GG.length,
            yG = new Array(LG),
            kG = ZG,
            UG = 0;
          for (SG = 0; SG < LG; SG++) wG = GG[SG] * bG + UG, UG = Math.floor(wG / kG), yG[SG] = wG - UG * kG;
          for (; UG > 0;) yG[SG++] = UG % kG, UG = Math.floor(UG / kG);
          return yG
        }

        function iG(GG, bG) {
          for (var ZG = []; bG-- > 0;) ZG.push(0);
          return ZG.concat(GG)
        }

        function CG(GG, bG) {
          var ZG = Math.max(GG.length, bG.length);
          if (ZG <= 30) return XG(GG, bG);
          ZG = Math.ceil(ZG / 2);
          var wG = GG.slice(ZG),
            SG = GG.slice(0, ZG),
            LG = bG.slice(ZG),
            yG = bG.slice(0, ZG),
            kG = CG(SG, yG),
            UG = CG(wG, LG),
            YG = CG(rG(SG, wG), rG(yG, LG)),
            VG = rG(rG(kG, iG(EG(EG(YG, kG), UG), ZG)), iG(UG, 2 * ZG));
          return KG(VG), VG
        }

        function WG(GG, bG, wG) {
          return new UG(GG < ZG ? uG(bG, GG) : XG(bG, fG(GG)), wG)
        }

        function mG(GG) {
          var bG, wG, SG, LG, yG = GG.length,
            kG = hG(yG + yG),
            UG = ZG;
          for (SG = 0; SG < yG; SG++) {
            wG = 0 - (LG = GG[SG]) * LG;
            for (var YG = SG; YG < yG; YG++) bG = LG * GG[YG] * 2 + kG[SG + YG] + wG, wG = Math.floor(bG / UG), kG[SG + YG] = bG - wG * UG;
            kG[SG + yG] = wG
          }
          return KG(kG), kG
        }

        function IG(GG, bG) {
          var wG, SG, LG, yG, kG = GG.length,
            UG = hG(kG),
            YG = ZG;
          for (LG = 0, wG = kG - 1; wG >= 0; --wG) LG = (yG = LG * YG + GG[wG]) - (SG = dG(yG / bG)) * bG, UG[wG] = 0 | SG;
          return [UG, 0 | LG]
        }

        function FG(GG, bG) {
          var wG, SG = OG(bG);
          if (yG) return [new VG(GG.value / SG.value), new VG(GG.value % SG.value)];
          var LG, pG = GG.value,
            JG = SG.value;
          if (0 === JG) throw new Error("Cannot divide by zero");
          if (GG.isSmall) return SG.isSmall ? [new YG(dG(pG / JG)), new YG(pG % JG)] : [kG[0], GG];
          if (SG.isSmall) {
            if (1 === JG) return [GG, kG[0]];
            if (-1 == JG) return [GG.By(), kG[0]];
            var rG = Math.abs(JG);
            if (rG < ZG) {
              LG = QG((wG = IG(pG, rG))[0]);
              var zG = wG[1];
              return GG.sign && (zG = -zG), "number" === typeof LG ? (GG.sign !== SG.sign && (LG = -LG), [new YG(LG), new YG(zG)]) : [new UG(LG, GG.sign !== SG.sign), new YG(zG)]
            }
            JG = fG(rG)
          }
          var oG = vG(pG, JG);
          if (-1 === oG) return [kG[0], GG];
          if (0 === oG) return [kG[GG.sign === SG.sign ? 1 : -1], kG[0]];
          wG = pG.length + JG.length <= 200 ? function(GG, bG) {
            var wG, SG, LG, yG, kG, UG, YG, VG = GG.length,
              pG = bG.length,
              fG = ZG,
              KG = hG(bG.length),
              dG = bG[pG - 1],
              JG = Math.ceil(fG / (2 * dG)),
              rG = uG(GG, JG),
              zG = uG(bG, JG);
            for (rG.length <= VG && rG.push(0), zG.push(0), dG = zG[pG - 1], SG = VG - pG; SG >= 0; SG--) {
              for (wG = fG - 1, rG[SG + pG] !== dG && (wG = Math.floor((rG[SG + pG] * fG + rG[SG + pG - 1]) / dG)), LG = 0, yG = 0, UG = zG.length, kG = 0; kG < UG; kG++) LG += wG * zG[kG], YG = Math.floor(LG / fG), yG += rG[SG + kG] - (LG - YG * fG), LG = YG, yG < 0 ? (rG[SG + kG] = yG + fG, yG = -1) : (rG[SG + kG] = yG, yG = 0);
              for (; 0 !== yG;) {
                for (wG -= 1, LG = 0, kG = 0; kG < UG; kG++)(LG += rG[SG + kG] - fG + zG[kG]) < 0 ? (rG[SG + kG] = LG + fG, LG = 0) : (rG[SG + kG] = LG, LG = 1);
                yG += LG
              }
              KG[SG] = wG
            }
            return rG = IG(rG, JG)[0], [QG(KG), QG(rG)]
          }(pG, JG) : function(GG, bG) {
            for (var wG, SG, LG, yG, kG, UG = GG.length, YG = bG.length, VG = [], pG = [], fG = ZG; UG;)
              if (pG.unshift(GG[--UG]), KG(pG), vG(pG, bG) < 0) VG.push(0);
              else {
                LG = pG[(SG = pG.length) - 1] * fG + pG[SG - 2], yG = bG[YG - 1] * fG + bG[YG - 2], SG > YG && (LG = (LG + 1) * fG), wG = Math.ceil(LG / yG);
                do {
                  if (vG(kG = uG(bG, wG), pG) <= 0) break;
                  wG--
                } while (wG);
                VG.push(wG), pG = EG(pG, kG)
              } return VG.reverse(), [QG(VG), QG(pG)]
          }(pG, JG), LG = wG[0];
          var XG = GG.sign !== SG.sign,
            iG = wG[1],
            CG = GG.sign;
          return "number" === typeof LG ? (XG && (LG = -LG), LG = new YG(LG)) : LG = new UG(LG, XG), "number" === typeof iG ? (CG && (iG = -iG), iG = new YG(iG)) : iG = new UG(iG, CG), [LG, iG]
        }

        function vG(GG, bG) {
          if (GG.length !== bG.length) return GG.length > bG.length ? 1 : -1;
          for (var ZG = GG.length - 1; ZG >= 0; ZG--)
            if (GG[ZG] !== bG[ZG]) return GG[ZG] > bG[ZG] ? 1 : -1;
          return 0
        }

        function aG(GG) {
          var bG = GG.abs();
          return !bG.isUnit() && (!!(bG.equals(2) || bG.equals(3) || bG.equals(5)) || !(bG.isEven() || bG.isDivisibleBy(3) || bG.isDivisibleBy(5)) && (!!bG.lesser(49) || void 0))
        }

        function cG(GG, ZG) {
          for (var wG, SG, LG, yG = GG.prev(), kG = yG, UG = 0; kG.isEven();) kG = kG.divide(2), UG++;
          GG: for (SG = 0; SG < ZG.length; SG++)
            if (!GG.lesser(ZG[SG]) && !(LG = bG(ZG[SG]).modPow(kG, GG)).isUnit() && !LG.equals(yG)) {
              for (wG = UG - 1; 0 != wG; wG--) {
                if ((LG = LG.square().mod(GG)).isUnit()) return !1;
                if (LG.equals(yG)) continue GG
              }
              return !1
            }
          return !0
        }
        UG.prototype = Object.create(kG.prototype), YG.prototype = Object.create(kG.prototype), VG.prototype = Object.create(kG.prototype), UG.prototype.add = function(GG) {
          var bG = OG(GG);
          if (this.sign !== bG.sign) return this.subtract(bG.By());
          var ZG = this.value,
            wG = bG.value;
          return bG.isSmall ? new UG(zG(ZG, Math.abs(wG)), this.sign) : new UG(rG(ZG, wG), this.sign)
        }, UG.prototype.plus = UG.prototype.add, YG.prototype.add = function(GG) {
          var bG = OG(GG),
            ZG = this.value;
          if (ZG < 0 !== bG.sign) return this.subtract(bG.By());
          var wG = bG.value;
          if (bG.isSmall) {
            if (pG(ZG + wG)) return new YG(ZG + wG);
            wG = fG(Math.abs(wG))
          }
          return new UG(zG(wG, Math.abs(ZG)), ZG < 0)
        }, YG.prototype.plus = YG.prototype.add, VG.prototype.add = function(GG) {
          return new VG(this.value + OG(GG).value)
        }, VG.prototype.plus = VG.prototype.add, UG.prototype.subtract = function(GG) {
          var bG = OG(GG);
          if (this.sign !== bG.sign) return this.add(bG.By());
          var ZG = this.value,
            wG = bG.value;
          return bG.isSmall ? oG(ZG, Math.abs(wG), this.sign) : function(GG, bG, ZG) {
            var wG;
            return vG(GG, bG) >= 0 ? wG = EG(GG, bG) : (wG = EG(bG, GG), ZG = !ZG), "number" === typeof(wG = QG(wG)) ? (ZG && (wG = -wG), new YG(wG)) : new UG(wG, ZG)
          }(ZG, wG, this.sign)
        }, UG.prototype.minus = UG.prototype.subtract, YG.prototype.subtract = function(GG) {
          var bG = OG(GG),
            ZG = this.value;
          if (ZG < 0 !== bG.sign) return this.add(bG.By());
          var wG = bG.value;
          return bG.isSmall ? new YG(ZG - wG) : oG(wG, Math.abs(ZG), ZG >= 0)
        }, YG.prototype.minus = YG.prototype.subtract, VG.prototype.subtract = function(GG) {
          return new VG(this.value - OG(GG).value)
        }, VG.prototype.minus = VG.prototype.subtract, UG.prototype.By = function() {
          return new UG(this.value, !this.sign)
        }, YG.prototype.By = function() {
          var GG = this.sign,
            bG = new YG(-this.value);
          return bG.sign = !GG, bG
        }, VG.prototype.By = function() {
          return new VG(-this.value)
        }, UG.prototype.abs = function() {
          return new UG(this.value, !1)
        }, YG.prototype.abs = function() {
          return new YG(Math.abs(this.value))
        }, VG.prototype.abs = function() {
          return new VG(this.value >= 0 ? this.value : -this.value)
        }, UG.prototype.multiply = function(GG) {
          var bG, wG, SG, LG = OG(GG),
            yG = this.value,
            YG = LG.value,
            VG = this.sign !== LG.sign;
          if (LG.isSmall) {
            if (0 === YG) return kG[0];
            if (1 === YG) return this;
            if (-1 === YG) return this.By();
            if ((bG = Math.abs(YG)) < ZG) return new UG(uG(yG, bG), VG);
            YG = fG(bG)
          }
          return wG = yG.length, SG = YG.length, new UG(-.012 * wG - .012 * SG + 15e-6 * wG * SG > 0 ? CG(yG, YG) : XG(yG, YG), VG)
        }, UG.prototype.times = UG.prototype.multiply, YG.prototype._multiplyBySmall = function(GG) {
          return pG(GG.value * this.value) ? new YG(GG.value * this.value) : WG(Math.abs(GG.value), fG(Math.abs(this.value)), this.sign !== GG.sign)
        }, UG.prototype._multiplyBySmall = function(GG) {
          return 0 === GG.value ? kG[0] : 1 === GG.value ? this : -1 === GG.value ? this.By() : WG(Math.abs(GG.value), this.value, this.sign !== GG.sign)
        }, YG.prototype.multiply = function(GG) {
          return OG(GG)._multiplyBySmall(this)
        }, YG.prototype.times = YG.prototype.multiply, VG.prototype.multiply = function(GG) {
          return new VG(this.value * OG(GG).value)
        }, VG.prototype.times = VG.prototype.multiply, UG.prototype.square = function() {
          return new UG(mG(this.value), !1)
        }, YG.prototype.square = function() {
          var GG = this.value * this.value;
          return pG(GG) ? new YG(GG) : new UG(mG(fG(Math.abs(this.value))), !1)
        }, VG.prototype.square = function(GG) {
          return new VG(this.value * this.value)
        }, UG.prototype.divmod = function(GG) {
          var bG = FG(this, GG);
          return {
            quotient: bG[0],
            remainder: bG[1]
          }
        }, VG.prototype.divmod = YG.prototype.divmod = UG.prototype.divmod, UG.prototype.divide = function(GG) {
          return FG(this, GG)[0]
        }, VG.prototype.over = VG.prototype.divide = function(GG) {
          return new VG(this.value / OG(GG).value)
        }, YG.prototype.over = YG.prototype.divide = UG.prototype.over = UG.prototype.divide, UG.prototype.mod = function(GG) {
          return FG(this, GG)[1]
        }, VG.prototype.mod = VG.prototype.remainder = function(GG) {
          return new VG(this.value % OG(GG).value)
        }, YG.prototype.remainder = YG.prototype.mod = UG.prototype.remainder = UG.prototype.mod, UG.prototype.pow = function(GG) {
          var bG, ZG, wG, SG = OG(GG),
            LG = this.value,
            yG = SG.value;
          if (0 === yG) return kG[1];
          if (0 === LG) return kG[0];
          if (1 === LG) return kG[1];
          if (-1 === LG) return SG.isEven() ? kG[1] : kG[-1];
          if (SG.sign) return kG[0];
          if (!SG.isSmall) throw new Error("The exponent " + SG.toString() + " is too large.");
          if (this.isSmall && pG(bG = Math.pow(LG, yG))) return new YG(dG(bG));
          for (ZG = this, wG = kG[1]; !0 & yG && (wG = wG.times(ZG), --yG), 0 !== yG;) yG /= 2, ZG = ZG.square();
          return wG
        }, YG.prototype.pow = UG.prototype.pow, VG.prototype.pow = function(GG) {
          var bG = OG(GG),
            ZG = this.value,
            wG = bG.value,
            SG = BigInt(0),
            LG = BigInt(1),
            yG = BigInt(2);
          if (wG === SG) return kG[1];
          if (ZG === SG) return kG[0];
          if (ZG === LG) return kG[1];
          if (ZG === BigInt(-1)) return bG.isEven() ? kG[1] : kG[-1];
          if (bG.isNegative()) return new VG(SG);
          for (var UG = this, YG = kG[1];
            (wG & LG) === LG && (YG = YG.times(UG), --wG), wG !== SG;) wG /= yG, UG = UG.square();
          return YG
        }, UG.prototype.modPow = function(GG, bG) {
          if (GG = OG(GG), (bG = OG(bG)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var ZG = kG[1],
            wG = this.mod(bG);
          for (GG.isNegative() && (GG = GG.multiply(kG[-1]), wG = wG.modInv(bG)); GG.isPositive();) {
            if (wG.isZero()) return kG[0];
            GG.isOdd() && (ZG = ZG.multiply(wG).mod(bG)), GG = GG.divide(2), wG = wG.square().mod(bG)
          }
          return ZG
        }, VG.prototype.modPow = YG.prototype.modPow = UG.prototype.modPow, UG.prototype.compareAbs = function(GG) {
          var bG = OG(GG),
            ZG = this.value,
            wG = bG.value;
          return bG.isSmall ? 1 : vG(ZG, wG)
        }, YG.prototype.compareAbs = function(GG) {
          var bG = OG(GG),
            ZG = Math.abs(this.value),
            wG = bG.value;
          return bG.isSmall ? ZG === (wG = Math.abs(wG)) ? 0 : ZG > wG ? 1 : -1 : -1
        }, VG.prototype.compareAbs = function(GG) {
          var bG = this.value,
            ZG = OG(GG).value;
          return (bG = bG >= 0 ? bG : -bG) === (ZG = ZG >= 0 ? ZG : -ZG) ? 0 : bG > ZG ? 1 : -1
        }, UG.prototype.compare = function(GG) {
          if (GG === 1 / 0) return -1;
          if (GG === -1 / 0) return 1;
          var bG = OG(GG),
            ZG = this.value,
            wG = bG.value;
          return this.sign !== bG.sign ? bG.sign ? 1 : -1 : bG.isSmall ? this.sign ? -1 : 1 : vG(ZG, wG) * (this.sign ? -1 : 1)
        }, UG.prototype.compareTo = UG.prototype.compare, YG.prototype.compare = function(GG) {
          if (GG === 1 / 0) return -1;
          if (GG === -1 / 0) return 1;
          var bG = OG(GG),
            ZG = this.value,
            wG = bG.value;
          return bG.isSmall ? ZG == wG ? 0 : ZG > wG ? 1 : -1 : ZG < 0 !== bG.sign ? ZG < 0 ? -1 : 1 : ZG < 0 ? 1 : -1
        }, YG.prototype.compareTo = YG.prototype.compare, VG.prototype.compare = function(GG) {
          if (GG === 1 / 0) return -1;
          if (GG === -1 / 0) return 1;
          var bG = this.value,
            ZG = OG(GG).value;
          return bG === ZG ? 0 : bG > ZG ? 1 : -1
        }, VG.prototype.compareTo = VG.prototype.compare, UG.prototype.equals = function(GG) {
          return 0 === this.compare(GG)
        }, VG.prototype.eq = VG.prototype.equals = YG.prototype.eq = YG.prototype.equals = UG.prototype.eq = UG.prototype.equals, UG.prototype.notEquals = function(GG) {
          return 0 !== this.compare(GG)
        }, VG.prototype.neq = VG.prototype.notEquals = YG.prototype.neq = YG.prototype.notEquals = UG.prototype.neq = UG.prototype.notEquals, UG.prototype.greater = function(GG) {
          return this.compare(GG) > 0
        }, VG.prototype.gt = VG.prototype.greater = YG.prototype.gt = YG.prototype.greater = UG.prototype.gt = UG.prototype.greater, UG.prototype.lesser = function(GG) {
          return this.compare(GG) < 0
        }, VG.prototype.lt = VG.prototype.lesser = YG.prototype.lt = YG.prototype.lesser = UG.prototype.lt = UG.prototype.lesser, UG.prototype.greaterOrEquals = function(GG) {
          return this.compare(GG) >= 0
        }, VG.prototype.geq = VG.prototype.greaterOrEquals = YG.prototype.geq = YG.prototype.greaterOrEquals = UG.prototype.geq = UG.prototype.greaterOrEquals, UG.prototype.lesserOrEquals = function(GG) {
          return this.compare(GG) <= 0
        }, VG.prototype.leq = VG.prototype.lesserOrEquals = YG.prototype.leq = YG.prototype.lesserOrEquals = UG.prototype.leq = UG.prototype.lesserOrEquals, UG.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, YG.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, VG.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, UG.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, YG.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, VG.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, UG.prototype.isPositive = function() {
          return !this.sign
        }, YG.prototype.isPositive = function() {
          return this.value > 0
        }, VG.prototype.isPositive = YG.prototype.isPositive, UG.prototype.isNegative = function() {
          return this.sign
        }, YG.prototype.isNegative = function() {
          return this.value < 0
        }, VG.prototype.isNegative = YG.prototype.isNegative, UG.prototype.isUnit = function() {
          return !1
        }, YG.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, VG.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, UG.prototype.isZero = function() {
          return !1
        }, YG.prototype.isZero = function() {
          return 0 === this.value
        }, VG.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, UG.prototype.isDivisibleBy = function(GG) {
          var bG = OG(GG);
          return !bG.isZero() && (!!bG.isUnit() || (0 === bG.compareAbs(2) ? this.isEven() : this.mod(bG).isZero()))
        }, VG.prototype.isDivisibleBy = YG.prototype.isDivisibleBy = UG.prototype.isDivisibleBy, UG.prototype.isPrime = function(ZG) {
          var wG = aG(this);
          if (wG !== GG) return wG;
          var SG = this.abs(),
            LG = SG.bitLength();
          if (LG <= 64) return cG(SG, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var yG = Math.log(2) * LG.toJSNumber(), kG = Math.ceil(!0 === ZG ? 2 * Math.pow(yG, 2) : yG), UG = [], YG = 0; YG < kG; YG++) UG.push(bG(YG + 2));
          return cG(SG, UG)
        }, VG.prototype.isPrime = YG.prototype.isPrime = UG.prototype.isPrime, UG.prototype.isProbablePrime = function(ZG, wG) {
          var SG = aG(this);
          if (SG !== GG) return SG;
          for (var LG = this.abs(), yG = ZG === GG ? 5 : ZG, kG = [], UG = 0; UG < yG; UG++) kG.push(bG.randBetween(2, LG.minus(2), wG));
          return cG(LG, kG)
        }, VG.prototype.isProbablePrime = YG.prototype.isProbablePrime = UG.prototype.isProbablePrime, UG.prototype.modInv = function(GG) {
          for (var ZG, wG, SG, LG = bG.zero, yG = bG.one, kG = OG(GG), UG = this.abs(); !UG.isZero();) ZG = kG.divide(UG), wG = LG, SG = kG, LG = yG, kG = UG, yG = wG.subtract(ZG.multiply(yG)), UG = SG.subtract(ZG.multiply(UG));
          if (!kG.isUnit()) throw new Error(this.toString() + " and " + GG.toString() + " are not co-prime");
          return -1 === LG.compare(0) && (LG = LG.add(GG)), this.isNegative() ? LG.By() : LG
        }, VG.prototype.modInv = YG.prototype.modInv = UG.prototype.modInv, UG.prototype.next = function() {
          var GG = this.value;
          return this.sign ? oG(GG, 1, this.sign) : new UG(zG(GG, 1), this.sign)
        }, YG.prototype.next = function() {
          var GG = this.value;
          return GG + 1 < wG ? new YG(GG + 1) : new UG(SG, !1)
        }, VG.prototype.next = function() {
          return new VG(this.value + BigInt(1))
        }, UG.prototype.prev = function() {
          var GG = this.value;
          return this.sign ? new UG(zG(GG, 1), !0) : oG(GG, 1, this.sign)
        }, YG.prototype.prev = function() {
          var GG = this.value;
          return GG - 1 > -wG ? new YG(GG - 1) : new UG(SG, !0)
        }, VG.prototype.prev = function() {
          return new VG(this.value - BigInt(1))
        };
        for (var lG = [1]; 2 * lG[lG.length - 1] <= ZG;) lG.push(2 * lG[lG.length - 1]);
        var jG = lG.length,
          PG = lG[jG - 1];

        function MG(GG) {
          return Math.abs(GG) <= ZG
        }

        function AG(GG, ZG, wG) {
          ZG = OG(ZG);
          for (var SG = GG.isNegative(), LG = ZG.isNegative(), yG = SG ? GG.not() : GG, kG = LG ? ZG.not() : ZG, UG = 0, YG = 0, VG = null, pG = null, fG = []; !yG.isZero() || !kG.isZero();) UG = (VG = FG(yG, PG))[1].toJSNumber(), SG && (UG = PG - 1 - UG), YG = (pG = FG(kG, PG))[1].toJSNumber(), LG && (YG = PG - 1 - YG), yG = VG[0], kG = pG[0], fG.push(wG(UG, YG));
          for (var QG = 0 !== wG(SG ? 1 : 0, LG ? 1 : 0) ? bG(-1) : bG(0), KG = fG.length - 1; KG >= 0; KG -= 1) QG = QG.multiply(PG).add(bG(fG[KG]));
          return QG
        }
        UG.prototype.shiftLeft = function(GG) {
          var bG = OG(GG).toJSNumber();
          if (!MG(bG)) throw new Error(String(bG) + " is too large for shifting.");
          if (bG < 0) return this.shiftRight(-bG);
          var ZG = this;
          if (ZG.isZero()) return ZG;
          for (; bG >= jG;) ZG = ZG.multiply(PG), bG -= jG - 1;
          return ZG.multiply(lG[bG])
        }, VG.prototype.shiftLeft = YG.prototype.shiftLeft = UG.prototype.shiftLeft, UG.prototype.shiftRight = function(GG) {
          var bG, ZG = OG(GG).toJSNumber();
          if (!MG(ZG)) throw new Error(String(ZG) + " is too large for shifting.");
          if (ZG < 0) return this.shiftLeft(-ZG);
          for (var wG = this; ZG >= jG;) {
            if (wG.isZero() || wG.isNegative() && wG.isUnit()) return wG;
            wG = (bG = FG(wG, PG))[1].isNegative() ? bG[0].prev() : bG[0], ZG -= jG - 1
          }
          return (bG = FG(wG, lG[ZG]))[1].isNegative() ? bG[0].prev() : bG[0]
        }, VG.prototype.shiftRight = YG.prototype.shiftRight = UG.prototype.shiftRight, UG.prototype.not = function() {
          return this.By().prev()
        }, VG.prototype.not = YG.prototype.not = UG.prototype.not, UG.prototype.and = function(GG) {
          return AG(this, GG, (function(GG, bG) {
            return GG & bG
          }))
        }, VG.prototype.and = YG.prototype.and = UG.prototype.and, UG.prototype.or = function(GG) {
          return AG(this, GG, (function(GG, bG) {
            return GG | bG
          }))
        }, VG.prototype.or = YG.prototype.or = UG.prototype.or, UG.prototype.xor = function(GG) {
          return AG(this, GG, (function(GG, bG) {
            return GG ^ bG
          }))
        }, VG.prototype.xor = YG.prototype.xor = UG.prototype.xor;
        var sG = 1 << 30;

        function qG(GG) {
          var bG = GG.value,
            wG = "number" === typeof bG ? bG | sG : "bigint" === typeof bG ? bG | BigInt(sG) : bG[0] + bG[1] * ZG | 1073758208;
          return wG & -wG
        }

        function nG(GG, ZG) {
          if (ZG.compareTo(GG) <= 0) {
            var wG = nG(GG, ZG.square(ZG)),
              SG = wG.p,
              LG = wG.e,
              yG = SG.multiply(ZG);
            return yG.compareTo(GG) <= 0 ? {
              p: yG,
              e: 2 * LG + 1
            } : {
              p: SG,
              e: 2 * LG
            }
          }
          return {
            p: bG(1),
            e: 0
          }
        }

        function gG(GG, bG) {
          return GG = OG(GG), bG = OG(bG), GG.greater(bG) ? GG : bG
        }

        function eG(GG, bG) {
          return GG = OG(GG), bG = OG(bG), GG.lesser(bG) ? GG : bG
        }

        function RG(GG, bG) {
          if (GG = OG(GG).abs(), bG = OG(bG).abs(), GG.equals(bG)) return GG;
          if (GG.isZero()) return bG;
          if (bG.isZero()) return GG;
          for (var ZG, wG, SG = kG[1]; GG.isEven() && bG.isEven();) ZG = eG(qG(GG), qG(bG)), GG = GG.divide(ZG), bG = bG.divide(ZG), SG = SG.multiply(ZG);
          for (; GG.isEven();) GG = GG.divide(qG(GG));
          do {
            for (; bG.isEven();) bG = bG.divide(qG(bG));
            GG.greater(bG) && (wG = bG, bG = GG, GG = wG), bG = bG.subtract(GG)
          } while (!bG.isZero());
          return SG.isUnit() ? GG : GG.multiply(SG)
        }
        UG.prototype.bitLength = function() {
          var GG = this;
          return GG.compareTo(bG(0)) < 0 && (GG = GG.By().subtract(bG(1))), 0 === GG.compareTo(bG(0)) ? bG(0) : bG(nG(GG, bG(2)).e).add(bG(1))
        }, VG.prototype.bitLength = YG.prototype.bitLength = UG.prototype.bitLength;
        var TG = function(GG, bG, ZG, wG) {
          ZG = ZG || LG, GG = String(GG), wG || (GG = GG.toLowerCase(), ZG = ZG.toLowerCase());
          var SG, yG = GG.length,
            kG = Math.abs(bG),
            UG = {};
          for (SG = 0; SG < ZG.length; SG++) UG[ZG[SG]] = SG;
          for (SG = 0; SG < yG; SG++) {
            if ("-" !== (pG = GG[SG]) && (pG in UG && UG[pG] >= kG)) {
              if ("1" === pG && 1 === kG) continue;
              throw new Error(pG + " is not a valid digit in base " + bG + ".")
            }
          }
          bG = OG(bG);
          var YG = [],
            VG = "-" === GG[0];
          for (SG = VG ? 1 : 0; SG < GG.length; SG++) {
            var pG;
            if ((pG = GG[SG]) in UG) YG.push(OG(UG[pG]));
            else {
              if ("<" !== pG) throw new Error(pG + " is not a valid character");
              var fG = SG;
              do {
                SG++
              } while (">" !== GG[SG] && SG < GG.length);
              YG.push(OG(GG.slice(fG + 1, SG)))
            }
          }
          return HG(YG, bG, VG)
        };

        function HG(GG, bG, ZG) {
          var wG, SG = kG[0],
            LG = kG[1];
          for (wG = GG.length - 1; wG >= 0; wG--) SG = SG.add(GG[wG].times(LG)), LG = LG.times(bG);
          return ZG ? SG.By() : SG
        }

        function tG(GG, ZG) {
          if ((ZG = bG(ZG)).isZero()) {
            if (GG.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (ZG.equals(-1)) {
            if (GG.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (GG.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-GG.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var wG = Array.apply(null, Array(GG.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return wG.unshift([1]), {
              value: [].concat.apply([], wG),
              isNegative: !1
            }
          }
          var SG = !1;
          if (GG.isNegative() && ZG.isPositive() && (SG = !0, GG = GG.abs()), ZG.isUnit()) return GG.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(GG.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: SG
          };
          for (var LG, yG = [], kG = GG; kG.isNegative() || kG.compareAbs(ZG) >= 0;) {
            LG = kG.divmod(ZG), kG = LG.quotient;
            var UG = LG.remainder;
            UG.isNegative() && (UG = ZG.minus(UG).abs(), kG = kG.next()), yG.push(UG.toJSNumber())
          }
          return yG.push(kG.toJSNumber()), {
            value: yG.reverse(),
            isNegative: SG
          }
        }

        function DG(GG, bG, ZG) {
          var wG = tG(GG, bG);
          return (wG.isNegative ? "-" : "") + wG.value.map((function(GG) {
            return function(GG, bG) {
              return GG < (bG = bG || LG).length ? bG[GG] : "<" + GG + ">"
            }(GG, ZG)
          })).join("")
        }

        function NG(GG) {
          if (pG(+GG)) {
            var bG = +GG;
            if (bG === dG(bG)) return yG ? new VG(BigInt(bG)) : new YG(bG);
            throw new Error("Invalid integer: " + GG)
          }
          var ZG = "-" === GG[0];
          ZG && (GG = GG.slice(1));
          var wG = GG.split(/e/i);
          if (wG.length > 2) throw new Error("Invalid integer: " + wG.join("e"));
          if (2 === wG.length) {
            var SG = wG[1];
            if ("+" === SG[0] && (SG = SG.slice(1)), (SG = +SG) !== dG(SG) || !pG(SG)) throw new Error("Invalid integer: " + SG + " is not a valid exponent.");
            var LG = wG[0],
              kG = LG.indexOf(".");
            if (kG >= 0 && (SG -= LG.length - kG - 1, LG = LG.slice(0, kG) + LG.slice(kG + 1)), SG < 0) throw new Error("Cannot include negative exponent part for integers");
            GG = LG += new Array(SG + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(GG)) throw new Error("Invalid integer: " + GG);
          if (yG) return new VG(BigInt(ZG ? "-" + GG : GG));
          for (var fG = [], QG = GG.length, hG = QG - 7; QG > 0;) fG.push(+GG.slice(hG, QG)), (hG -= 7) < 0 && (hG = 0), QG -= 7;
          return KG(fG), new UG(fG, ZG)
        }

        function OG(GG) {
          return "number" === typeof GG ? function(GG) {
            if (yG) return new VG(BigInt(GG));
            if (pG(GG)) {
              if (GG !== dG(GG)) throw new Error(GG + " is not an integer.");
              return new YG(GG)
            }
            return NG(GG.toString())
          }(GG) : "string" === typeof GG ? NG(GG) : "bigint" === typeof GG ? new VG(GG) : GG
        }
        UG.prototype.toArray = function(GG) {
          return tG(this, GG)
        }, YG.prototype.toArray = function(GG) {
          return tG(this, GG)
        }, VG.prototype.toArray = function(GG) {
          return tG(this, GG)
        }, UG.prototype.toString = function(bG, ZG) {
          if (bG === GG && (bG = 10), 10 !== bG) return DG(this, bG, ZG);
          for (var wG, SG = this.value, LG = SG.length, yG = String(SG[--LG]); --LG >= 0;) wG = String(SG[LG]), yG += "0000000".slice(wG.length) + wG;
          return (this.sign ? "-" : "") + yG
        }, YG.prototype.toString = function(bG, ZG) {
          return bG === GG && (bG = 10), 10 != bG ? DG(this, bG, ZG) : String(this.value)
        }, VG.prototype.toString = YG.prototype.toString, VG.prototype.toJSON = UG.prototype.toJSON = YG.prototype.toJSON = function() {
          return this.toString()
        }, UG.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, UG.prototype.toJSNumber = UG.prototype.valueOf, YG.prototype.valueOf = function() {
          return this.value
        }, YG.prototype.toJSNumber = YG.prototype.valueOf, VG.prototype.valueOf = VG.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var xG = 0; xG < 1e3; xG++) kG[xG] = OG(xG), xG > 0 && (kG[-xG] = OG(-xG));
        return kG.one = kG[1], kG.zero = kG[0], kG.minusOne = kG[-1], kG.max = gG, kG.min = eG, kG.gcd = RG, kG.lcm = function(GG, bG) {
          return GG = OG(GG).abs(), bG = OG(bG).abs(), GG.divide(RG(GG, bG)).multiply(bG)
        }, kG.isInstance = function(GG) {
          return GG instanceof UG || GG instanceof YG || GG instanceof VG
        }, kG.randBetween = function(GG, bG, wG) {
          GG = OG(GG), bG = OG(bG);
          var SG = wG || Math.random,
            LG = eG(GG, bG),
            yG = gG(GG, bG).subtract(LG).add(1);
          if (yG.isSmall) return LG.add(Math.floor(SG() * yG));
          for (var UG = tG(yG, ZG).value, YG = [], VG = !0, pG = 0; pG < UG.length; pG++) {
            var fG = VG ? UG[pG] : ZG,
              QG = dG(SG() * fG);
            YG.push(QG), QG < fG && (VG = !1)
          }
          return LG.add(kG.hZG(YG, ZG, !1))
        }, kG.hZG = function(GG, bG, ZG) {
          return HG(GG.map(OG), OG(bG || 10), ZG)
        }, kG
      }();
      GG.hasOwnProperty("exports") && (GG.exports = bG)
    }(rZ);
    var zZ = LG(rZ.exports);

    function EZ(GG, bG, ZG) {
      let wG = 0;
      for (let SG = 0; SG < ZG; SG++) {
        const ZG = GG[bG + SG];
        if (void 0 === ZG) break;
        wG += ZG * 16 ** SG
      }
      return wG
    }

    function oZ(GG) {
      const bG = [];
      for (let ZG = 0; ZG < GG.length; ZG++) {
        let wG = Number(GG[ZG]);
        for (let GG = 0; wG || GG < bG.length; GG++) wG += 10 * (bG[GG] || 0), bG[GG] = wG % 16, wG = (wG - bG[GG]) / 16
      }
      return bG
    }
    class XZ {
      static fromString(GG) {
        return new XZ(function(GG) {
          const bG = oZ(GG),
            ZG = Array(4);
          for (let wG = 0; wG < 4; wG++) ZG[3 - wG] = EZ(bG, 4 * wG, 4);
          return ZG
        }(GG), GG)
      }
      static fromBit(GG) {
        const bG = Array(4),
          ZG = Math.floor(GG / 16);
        for (let wG = 0; wG < 4; wG++) bG[3 - wG] = wG === ZG ? 1 << GG - 16 * ZG : 0;
        return new XZ(bG)
      }
      constructor(GG, bG) {
        this.parts = GG, this.str = bG
      }
      and(GG) {
        let {
          parts: bG
        } = GG;
        return new XZ(this.parts.map(((GG, ZG) => GG & bG[ZG])))
      }
      or(GG) {
        let {
          parts: bG
        } = GG;
        return new XZ(this.parts.map(((GG, ZG) => GG | bG[ZG])))
      }
      xor(GG) {
        let {
          parts: bG
        } = GG;
        return new XZ(this.parts.map(((GG, ZG) => GG ^ bG[ZG])))
      }
      not() {
        return new XZ(this.parts.map((GG => ~GG)))
      }
      equals(GG) {
        let {
          parts: bG
        } = GG;
        return this.parts.every(((GG, ZG) => GG === bG[ZG]))
      }
      toString() {
        if (null != this.str) return this.str;
        const GG = new Array(16);
        return this.parts.forEach(((bG, ZG) => {
          const wG = oZ(bG.toString());
          for (let SG = 0; SG < 4; SG++) GG[SG + 4 * ZG] = wG[3 - SG] || 0
        })), this.str = zZ.hZG(GG, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const uZ = function() {
      try {
        return BigInt, !0
      } catch (GG) {
        return !1
      }
    }();
    uZ && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const iZ = {},
      CZ = uZ ? function(GG) {
        return BigInt(GG)
      } : function(GG) {
        return GG instanceof XZ ? GG : ("number" === typeof GG && (GG = GG.toString()), null != iZ[GG] || (iZ[GG] = XZ.fromString(GG)), iZ[GG])
      },
      WZ = CZ(0),
      mZ = uZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WZ)
      } : function() {
        let GG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ).and(GG)
      },
      IZ = uZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WZ)
      } : function() {
        let GG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ).or(GG)
      },
      FZ = uZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WZ)
      } : function() {
        let GG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ).xor(GG)
      },
      vZ = uZ ? function(GG, bG) {
        return GG === bG
      } : function(GG, bG) {
        return null == GG || null == bG ? GG == bG : GG.equals(bG)
      };
    var aZ, cZ, lZ, jZ, PZ = {
      combine: function() {
        let GG = arguments.length <= 0 ? void 0 : arguments[0];
        for (let bG = 1; bG < arguments.length; bG++) GG = IZ(GG, bG < 0 || arguments.length <= bG ? void 0 : arguments[bG]);
        return GG
      },
      add: function(GG, bG) {
        return bG === WZ ? GG : IZ(GG, bG)
      },
      remove: function(GG, bG) {
        return bG === WZ ? GG : FZ(GG, mZ(GG, bG))
      },
      filter: mZ,
      invert: uZ ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WZ).not()
      },
      has: function(GG, bG) {
        return vZ(mZ(GG, bG), bG)
      },
      hasAny: function(GG, bG) {
        return !vZ(mZ(GG, bG), WZ)
      },
      equals: vZ,
      deserialize: CZ,
      getFlag: uZ ? function(GG) {
        return BigInt(1) << BigInt(GG)
      } : function(GG) {
        return XZ.fromBit(GG)
      }
    };
    ! function(GG) {
      GG[GG.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", GG[GG.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", GG[GG.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", GG[GG.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", GG[GG.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", GG[GG.RATELIMITED = 4002] = "RATELIMITED", GG[GG.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", GG[GG.INVALID_VERSION = 4004] = "INVALID_VERSION", GG[GG.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(aZ || (aZ = {})),
    function(GG) {
      GG[GG.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", GG[GG.INVALID_COMMAND = 4002] = "INVALID_COMMAND", GG[GG.INVALID_EVENT = 4004] = "INVALID_EVENT", GG[GG.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(cZ || (cZ = {})),
    function(GG) {
      GG.LANDSCAPE = "landscape", GG.PORTRAIT = "portrait"
    }(lZ || (lZ = {})),
    function(GG) {
      GG.MOBILE = "mobile", GG.DESKTOP = "desktop"
    }(jZ || (jZ = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: PZ.getFlag(0),
      ADMINISTRATOR: PZ.getFlag(3)
    });

    function MZ(GG) {
      return QZ((bG => {
        var ZG;
        const [wG] = null !== (ZG = Object.entries(GG).find((GG => {
          let [, ZG] = GG;
          return ZG === bG
        }))) && void 0 !== ZG ? ZG : [];
        return null != bG && void 0 === wG ? GG.UNHANDLED : bG
      }), lb().or(jb()))
    }
    const AZ = JZ.object({
        image_url: JZ.string()
      }),
      sZ = JZ.object({
        mediaUrl: JZ.string().max(1024)
      }),
      qZ = JZ.object({
        access_token: JZ.union([JZ.string(), JZ.null()]).optional()
      }),
      nZ = JZ.object({
        access_token: JZ.string(),
        user: JZ.object({
          username: JZ.string(),
          discriminator: JZ.string(),
          id: JZ.string(),
          avatar: JZ.union([JZ.string(), JZ.null()]).optional(),
          public_flags: JZ.number(),
          global_name: JZ.union([JZ.string(), JZ.null()]).optional()
        }),
        scopes: JZ.array(function(GG) {
          const bG = vb().transform((bG => {
            const ZG = GG.safeParse(bG);
            return ZG.success ? ZG.data : GG._def.defaultValue()
          }));
          return bG.overlayType = GG, bG
        }(JZ.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(JZ.literal(-1)).default(-1))),
        expires: JZ.string(),
        application: JZ.object({
          description: JZ.string(),
          icon: JZ.union([JZ.string(), JZ.null()]).optional(),
          id: JZ.string(),
          rpc_origins: JZ.array(JZ.string()).optional(),
          name: JZ.string()
        })
      }),
      gZ = JZ.object({
        participants: JZ.array(JZ.object({
          id: JZ.string(),
          username: JZ.string(),
          global_name: JZ.union([JZ.string(), JZ.null()]).optional(),
          discriminator: JZ.string(),
          avatar: JZ.union([JZ.string(), JZ.null()]).optional(),
          flags: JZ.number(),
          bot: JZ.boolean(),
          avatar_decoration_data: JZ.union([JZ.object({
            asset: JZ.string(),
            skuId: JZ.string().optional()
          }), JZ.null()]).optional(),
          premium_type: JZ.union([JZ.number(), JZ.null()]).optional(),
          nickname: JZ.string().optional()
        }))
      });
    var eZ;
    ! function(GG) {
      GG.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", GG.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", GG.AUTHENTICATE = "AUTHENTICATE", GG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(eZ || (eZ = {}));
    const RZ = JZ.object({}).optional().nullable(),
      TZ = JZ.void(),
      HZ = {
        [eZ.INITIATE_IMAGE_UPLOAD]: {
          request: TZ,
          response: AZ
        },
        [eZ.OPEN_SHARE_MOMENT_DIALOG]: {
          request: sZ,
          response: RZ
        },
        [eZ.AUTHENTICATE]: {
          request: qZ,
          response: nZ
        },
        [eZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: TZ,
          response: gZ
        }
      },
      tZ = "DISPATCH";
    var DZ;
    ! function(GG) {
      GG.AUTHORIZE = "AUTHORIZE", GG.AUTHENTICATE = "AUTHENTICATE", GG.GET_GUILDS = "GET_GUILDS", GG.GET_GUILD = "GET_GUILD", GG.GET_CHANNEL = "GET_CHANNEL", GG.GET_CHANNELS = "GET_CHANNELS", GG.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", GG.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", GG.SUBSCRIBE = "SUBSCRIBE", GG.UNSUBSCRIBE = "UNSUBSCRIBE", GG.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", GG.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", GG.SET_ACTIVITY = "SET_ACTIVITY", GG.GET_SKUS = "GET_SKUS", GG.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", GG.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", GG.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", GG.START_PURCHASE = "START_PURCHASE", GG.SET_CONFIG = "SET_CONFIG", GG.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", GG.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", GG.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", GG.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", GG.CAPTURE_LOG = "CAPTURE_LOG", GG.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", GG.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", GG.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", GG.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", GG.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", GG.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", GG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(DZ || (DZ = {}));
    const NZ = Db({
        cmd: lb(),
        data: Rb(),
        evt: gb(),
        nonce: lb()
      }).passthrough(),
      OZ = (MZ(Object.assign(Object.assign({}, nZ.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), Db({
        id: lb(),
        username: lb(),
        discriminator: lb(),
        global_name: lb().optional().nullable(),
        avatar: lb().optional().nullable(),
        avatar_decoration_data: Db({
          asset: lb(),
          sku_id: lb().optional()
        }).nullable(),
        bot: Ab(),
        flags: jb().optional().nullable(),
        premium_type: jb().optional().nullable()
      })),
      xZ = Db({
        user: OZ,
        nick: lb().optional().nullable(),
        roles: tb(lb()),
        joined_at: lb(),
        deaf: Ab(),
        mute: Ab()
      }),
      BZ = Db({
        id: lb(),
        name: lb().optional().nullable(),
        roles: tb(lb()).optional().nullable(),
        user: OZ.optional().nullable(),
        require_colons: Ab().optional().nullable(),
        managed: Ab().optional().nullable(),
        animated: Ab().optional().nullable(),
        available: Ab().optional().nullable()
      }),
      Gw = Db({
        mute: Ab(),
        deaf: Ab(),
        self_mute: Ab(),
        self_deaf: Ab(),
        suppress: Ab()
      }),
      bw = Db({
        mute: Ab(),
        nick: lb(),
        user: OZ,
        voice_state: Gw,
        volume: jb()
      }),
      Zw = MZ({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      ww = Db({
        name: lb(),
        type: jb(),
        url: lb().optional().nullable(),
        created_at: jb().optional().nullable(),
        timestamps: Db({
          start: jb(),
          end: jb()
        }).partial().optional().nullable(),
        application_id: lb().optional().nullable(),
        details: lb().optional().nullable(),
        state: lb().optional().nullable(),
        emoji: BZ.optional().nullable(),
        party: Db({
          id: lb().optional().nullable(),
          size: tb(jb()).optional().nullable()
        }).optional().nullable(),
        assets: Db({
          large_image: lb().nullable(),
          large_text: lb().nullable(),
          small_image: lb().nullable(),
          small_text: lb().nullable()
        }).partial().optional().nullable(),
        secrets: Db({
          join: lb(),
          match: lb()
        }).partial().optional().nullable(),
        instance: Ab().optional().nullable(),
        flags: jb().optional().nullable()
      }),
      Sw = Db({
        id: lb(),
        type: MZ({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: lb(),
        deny: lb()
      }),
      Lw = {
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
      yw = Db({
        id: lb(),
        type: MZ(Lw),
        guild_id: lb().optional().nullable(),
        position: jb().optional().nullable(),
        permission_overwrites: tb(Sw).optional().nullable(),
        name: lb().optional().nullable(),
        topic: lb().optional().nullable(),
        nsfw: Ab().optional().nullable(),
        last_message_id: lb().optional().nullable(),
        bitrate: jb().optional().nullable(),
        user_limit: jb().optional().nullable(),
        rate_limit_per_user: jb().optional().nullable(),
        recipients: tb(OZ).optional().nullable(),
        icon: lb().optional().nullable(),
        owner_id: lb().optional().nullable(),
        application_id: lb().optional().nullable(),
        parent_id: lb().optional().nullable(),
        last_pin_timestamp: lb().optional().nullable()
      }),
      kw = Db({
        user: OZ,
        guild_id: lb(),
        status: Zw,
        activities: tb(ww),
        client_status: Db({
          desktop: Zw,
          mobile: Zw,
          web: Zw
        }).partial()
      }),
      Uw = Db({
        id: lb(),
        name: lb(),
        color: jb(),
        hoist: Ab(),
        position: jb(),
        permissions: lb(),
        managed: Ab(),
        mentionable: Ab()
      }),
      Yw = (Db({
        id: lb(),
        name: lb(),
        owner_id: lb(),
        icon: lb().nullable(),
        icon_hash: lb().optional().nullable(),
        splash: lb().nullable(),
        discovery_splash: lb().nullable(),
        owner: Ab().optional().nullable(),
        permissions: lb().optional().nullable(),
        region: lb(),
        afk_channel_id: lb().nullable(),
        afk_timeout: jb(),
        widget_enabled: Ab().optional().nullable(),
        widget_channel_id: lb().optional().nullable(),
        verification_level: jb(),
        default_message_notifications: jb(),
        explicit_content_filter: jb(),
        roles: tb(Uw),
        emojis: tb(BZ),
        features: tb(lb()),
        mfa_level: jb(),
        application_id: lb().nullable(),
        system_channel_id: lb().nullable(),
        system_channel_flags: jb(),
        rules_channel_id: lb().nullable(),
        joined_at: lb().optional().nullable(),
        large: Ab().optional().nullable(),
        unavailable: Ab().optional().nullable(),
        member_count: jb().optional().nullable(),
        voice_states: tb(Gw).optional().nullable(),
        members: tb(xZ).optional().nullable(),
        channels: tb(yw).optional().nullable(),
        presences: tb(kw).optional().nullable(),
        max_presences: jb().optional().nullable(),
        max_members: jb().optional().nullable(),
        vanity_url_code: lb().nullable(),
        description: lb().nullable(),
        banner: lb().nullable(),
        premium_tier: jb(),
        premium_subscription_count: jb().optional().nullable(),
        preferred_locale: lb(),
        public_updates_channel_id: lb().nullable(),
        max_video_channel_users: jb().optional().nullable(),
        approximate_member_count: jb().optional().nullable(),
        approximate_presence_count: jb().optional().nullable()
      }), Db({
        id: lb(),
        guild_id: lb(),
        type: jb(),
        name: lb()
      })),
      Vw = Db({
        id: lb(),
        filename: lb(),
        size: jb(),
        url: lb(),
        proxy_url: lb(),
        height: jb().optional().nullable(),
        width: jb().optional().nullable()
      }),
      pw = Db({
        text: lb(),
        icon_url: lb().optional().nullable(),
        proxy_icon_url: lb().optional().nullable()
      }),
      fw = Db({
        url: lb().optional().nullable(),
        proxy_url: lb().optional().nullable(),
        height: jb().optional().nullable(),
        width: jb().optional().nullable()
      }),
      Qw = fw.omit({
        proxy_url: !0
      }),
      Kw = Db({
        name: lb().optional().nullable(),
        url: lb().optional().nullable()
      }),
      hw = Db({
        name: lb().optional().nullable(),
        url: lb().optional().nullable(),
        icon_url: lb().optional().nullable(),
        proxy_icon_url: lb().optional().nullable()
      }),
      dw = Db({
        name: lb(),
        value: lb(),
        inline: Ab()
      }),
      Jw = Db({
        title: lb().optional().nullable(),
        type: lb().optional().nullable(),
        description: lb().optional().nullable(),
        url: lb().optional().nullable(),
        timestamp: lb().optional().nullable(),
        color: jb().optional().nullable(),
        footer: pw.optional().nullable(),
        image: fw.optional().nullable(),
        thumbnail: fw.optional().nullable(),
        video: Qw.optional().nullable(),
        provider: Kw.optional().nullable(),
        author: hw.optional().nullable(),
        fields: tb(dw).optional().nullable()
      }),
      rw = Db({
        count: jb(),
        me: Ab(),
        emoji: BZ
      }),
      zw = Db({
        type: jb(),
        party_id: lb().optional().nullable()
      }),
      Ew = Db({
        id: lb(),
        cover_image: lb().optional().nullable(),
        description: lb(),
        icon: lb().optional().nullable(),
        name: lb()
      }),
      ow = Db({
        message_id: lb().optional().nullable(),
        channel_id: lb().optional().nullable(),
        guild_id: lb().optional().nullable()
      }),
      Xw = Db({
        id: lb(),
        channel_id: lb(),
        guild_id: lb().optional().nullable(),
        author: OZ.optional().nullable(),
        member: xZ.optional().nullable(),
        content: lb(),
        timestamp: lb(),
        edited_timestamp: lb().optional().nullable(),
        tts: Ab(),
        mention_everyone: Ab(),
        mentions: tb(OZ),
        mention_roles: tb(lb()),
        mention_channels: tb(Yw),
        attachments: tb(Vw),
        embeds: tb(Jw),
        reactions: tb(rw).optional().nullable(),
        nonce: Ob([lb(), jb()]).optional().nullable(),
        pinned: Ab(),
        webhook_id: lb().optional().nullable(),
        type: jb(),
        activity: zw.optional().nullable(),
        application: Ew.optional().nullable(),
        message_reference: ow.optional().nullable(),
        flags: jb().optional().nullable(),
        stickers: tb(Rb()).optional().nullable(),
        referenced_message: Rb().optional().nullable()
      }),
      uw = Db({
        id: lb(),
        name: lb()
      }),
      iw = Db({
        type: MZ({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: jb(),
        name: lb()
      }),
      Cw = Db({
        type: MZ({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Ab(),
        threshold: jb(),
        shortcut: tb(iw),
        delay: jb()
      }),
      Ww = Db({
        device_id: lb(),
        volume: jb(),
        available_devices: tb(uw)
      }),
      mw = (Db({
        type: MZ({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: lb(),
        vendor: Db({
          name: lb(),
          url: lb()
        }),
        model: Db({
          name: lb(),
          url: lb()
        }),
        related: tb(lb()),
        echo_cancellation: Ab().optional().nullable(),
        noise_suppression: Ab().optional().nullable(),
        automatic_gain_control: Ab().optional().nullable(),
        hardware_mute: Ab().optional().nullable()
      }), Db({
        id: lb(),
        name: lb(),
        type: MZ({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: Db({
          amount: jb(),
          currency: lb()
        }),
        application_id: lb(),
        flags: jb(),
        release_date: lb().nullable()
      })),
      Iw = Db({
        id: lb(),
        sku_id: lb(),
        application_id: lb(),
        user_id: lb(),
        gift_code_flags: jb(),
        type: MZ({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: lb().optional().nullable(),
        branches: tb(lb()).optional().nullable(),
        starts_at: lb().optional().nullable(),
        ends_at: lb().optional().nullable(),
        parent_id: lb().optional().nullable(),
        consumed: Ab().optional().nullable(),
        deleted: Ab().optional().nullable(),
        gift_code_batch_id: lb().optional().nullable()
      }),
      Fw = (MZ({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), MZ({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      vw = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      aw = (MZ(vw), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      lw = (MZ(aw), "ERROR");
    var jw;
    ! function(GG) {
      GG.READY = "READY", GG.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", GG.SPEAKING_START = "SPEAKING_START", GG.SPEAKING_STOP = "SPEAKING_STOP", GG.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", GG.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", GG.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", GG.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", GG.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", GG.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(jw || (jw = {}));
    const Pw = NZ.extend({
        evt: UZ(jw),
        nonce: lb().nullable(),
        cmd: yZ(tZ),
        data: Db({}).passthrough()
      }),
      Mw = NZ.extend({
        evt: yZ(lw),
        data: Db({
          code: jb(),
          message: lb().optional()
        }).passthrough(),
        cmd: UZ(DZ),
        nonce: lb().nullable()
      }),
      Aw = Pw.extend({
        evt: lb()
      }),
      sw = Ob([Pw, Aw, Mw]);
    const qw = {
      [jw.READY]: {
        payload: Pw.extend({
          evt: yZ(jw.READY),
          data: Db({
            v: jb(),
            config: Db({
              cdn_host: lb().optional(),
              api_endpoint: lb(),
              environment: lb()
            }),
            user: Db({
              id: lb(),
              username: lb(),
              discriminator: lb(),
              avatar: lb().optional()
            }).optional()
          })
        })
      },
      [jw.VOICE_STATE_UPDATE]: {
        payload: Pw.extend({
          evt: yZ(jw.VOICE_STATE_UPDATE),
          data: bw
        }),
        subscribeArgs: Db({
          channel_id: lb()
        })
      },
      [jw.SPEAKING_START]: {
        payload: Pw.extend({
          evt: yZ(jw.SPEAKING_START),
          data: Db({
            lobby_id: lb().optional(),
            channel_id: lb().optional(),
            user_id: lb()
          })
        }),
        subscribeArgs: Db({
          lobby_id: lb().nullable().optional(),
          channel_id: lb().nullable().optional()
        })
      },
      [jw.SPEAKING_STOP]: {
        payload: Pw.extend({
          evt: yZ(jw.SPEAKING_STOP),
          data: Db({
            lobby_id: lb().optional(),
            channel_id: lb().optional(),
            user_id: lb()
          })
        }),
        subscribeArgs: Db({
          lobby_id: lb().nullable().optional(),
          channel_id: lb().nullable().optional()
        })
      },
      [jw.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Pw.extend({
          evt: yZ(jw.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: Db({
            layout_mode: MZ(aw)
          })
        })
      },
      [jw.ORIENTATION_UPDATE]: {
        payload: Pw.extend({
          evt: yZ(jw.ORIENTATION_UPDATE),
          data: Db({
            screen_orientation: MZ(vw),
            orientation: UZ(lZ)
          })
        })
      },
      [jw.CURRENT_USER_UPDATE]: {
        payload: Pw.extend({
          evt: yZ(jw.CURRENT_USER_UPDATE),
          data: OZ
        })
      },
      [jw.ENTITLEMENT_CREATE]: {
        payload: Pw.extend({
          evt: yZ(jw.ENTITLEMENT_CREATE),
          data: Db({
            entitlement: Iw
          })
        })
      },
      [jw.THERMAL_STATE_UPDATE]: {
        payload: Pw.extend({
          evt: yZ(jw.THERMAL_STATE_UPDATE),
          data: Db({
            thermal_state: Fw
          })
        })
      },
      [jw.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Pw.extend({
          evt: yZ(jw.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: Db({
            participants: gZ.shape.participants
          })
        })
      }
    };
    const nw = Db({}).nullable(),
      gw = Db({
        code: lb()
      }),
      ew = Db({
        guilds: tb(Db({
          id: lb(),
          name: lb()
        }))
      }),
      Rw = Db({
        id: lb(),
        name: lb(),
        icon_url: lb().optional(),
        members: tb(xZ)
      }),
      Tw = Db({
        id: lb(),
        type: MZ(Lw),
        guild_id: lb().optional().nullable(),
        name: lb().optional().nullable(),
        topic: lb().optional().nullable(),
        bitrate: jb().optional().nullable(),
        user_limit: jb().optional().nullable(),
        position: jb().optional().nullable(),
        voice_states: tb(bw),
        messages: tb(Xw)
      }),
      Hw = Db({
        channels: tb(yw)
      }),
      tw = (Tw.nullable(), Tw.nullable()),
      Dw = Tw.nullable(),
      Nw = (Db({
        input: Ww,
        output: Ww,
        mode: Cw,
        automatic_gain_control: Ab(),
        echo_cancellation: Ab(),
        noise_suppression: Ab(),
        qos: Ab(),
        silence_warning: Ab(),
        deaf: Ab(),
        mute: Ab()
      }), Db({
        evt: lb()
      })),
      Ow = Db({
        shortcut: iw
      }),
      xw = ww,
      Bw = Db({
        skus: tb(mw)
      }),
      GS = Db({
        entitlements: tb(Iw)
      }),
      bS = tb(Iw).nullable(),
      ZS = Db({
        use_interactive_pip: Ab()
      }),
      wS = Db({
        locale: lb()
      }),
      SS = Db({
        enabled: Ab()
      }),
      LS = Db({
        permissions: Mb().or(lb())
      }),
      yS = Db({
        iosKeyboardResizesView: pZ(Ab())
      }),
      kS = NZ.extend({
        cmd: UZ(DZ),
        evt: gb()
      });

    function US(GG) {
      let {
        cmd: bG,
        data: ZG
      } = GG;
      switch (bG) {
        case DZ.AUTHORIZE:
          return gw.parse(ZG);
        case DZ.CAPTURE_SHORTCUT:
          return Ow.parse(ZG);
        case DZ.ENCOURAGE_HW_ACCELERATION:
          return SS.parse(ZG);
        case DZ.GET_CHANNEL:
          return Tw.parse(ZG);
        case DZ.GET_CHANNELS:
          return Hw.parse(ZG);
        case DZ.GET_CHANNEL_PERMISSIONS:
          return LS.parse(ZG);
        case DZ.GET_GUILD:
          return Rw.parse(ZG);
        case DZ.GET_GUILDS:
          return ew.parse(ZG);
        case DZ.GET_PLATFORM_BEHAVIORS:
          return yS.parse(ZG);
        case DZ.GET_CHANNEL:
          return Tw.parse(ZG);
        case DZ.SELECT_TEXT_CHANNEL:
          return Dw.parse(ZG);
        case DZ.SELECT_VOICE_CHANNEL:
          return tw.parse(ZG);
        case DZ.SET_ACTIVITY:
          return xw.parse(ZG);
        case DZ.GET_SKUS_EMBEDDED:
          return Bw.parse(ZG);
        case DZ.GET_ENTITLEMENTS_EMBEDDED:
          return GS.parse(ZG);
        case DZ.SET_CONFIG:
          return ZS.parse(ZG);
        case DZ.START_PURCHASE:
          return bS.parse(ZG);
        case DZ.SUBSCRIBE:
        case DZ.UNSUBSCRIBE:
          return Nw.parse(ZG);
        case DZ.USER_SETTINGS_GET_LOCALE:
          return wS.parse(ZG);
        case DZ.OPEN_EXTERNAL_LINK:
        case DZ.SET_ORIENTATION_LOCK_STATE:
        case DZ.SET_CERTIFIED_DEVICES:
        case DZ.SEND_ANALYTICS_EVENT:
        case DZ.OPEN_INVITE_DIALOG:
        case DZ.CAPTURE_LOG:
        case DZ.GET_SKUS:
        case DZ.GET_ENTITLEMENTS:
          return nw.parse(ZG);
        case DZ.AUTHENTICATE:
        case DZ.INITIATE_IMAGE_UPLOAD:
        case DZ.OPEN_SHARE_MOMENT_DIALOG:
        case DZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: GG
          } = HZ[bG];
          return GG.parse(ZG);
        default:
          ! function(GG, bG) {
            throw bG
          }(0, new Error(`Unrecognized command ${bG}`))
      }
    }
    Db({
      frame_id: lb(),
      platform: UZ(jZ).optional().nullable()
    }), Db({
      v: yZ(1),
      encoding: yZ("json").optional(),
      client_id: lb(),
      frame_id: lb()
    });
    const YS = Db({
        code: jb(),
        message: lb().optional()
      }),
      VS = Db({
        evt: lb().nullable(),
        nonce: lb().nullable(),
        data: Rb().nullable(),
        cmd: lb()
      }).passthrough();

    function pS(GG) {
      const bG = VS.parse(GG);
      return null != bG.evt ? bG.evt === lw ? Mw.parse(bG) : function(GG) {
        const bG = GG.evt;
        if (!(bG in jw)) throw new Error(`Unrecognized event type ${GG.evt}`);
        return qw[bG].payload.parse(GG)
      }(sw.parse(bG)) : function(GG) {
        return Object.assign(Object.assign({}, GG), {
          data: US(GG)
        })
      }(kS.passthrough().parse(bG))
    }

    function fS(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const SG = NZ.extend({
        cmd: yZ(bG),
        data: ZG
      });
      return async ZG => {
        const LG = await GG({
          cmd: bG,
          args: ZG,
          transfer: wG(ZG)
        });
        return SG.parse(LG).data
      }
    }

    function QS(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const ZG = HZ[GG].response,
        wG = NZ.extend({
          cmd: yZ(GG),
          data: ZG
        });
      return ZG => async SG => {
        const LG = await ZG({
          cmd: GG,
          args: SG,
          transfer: bG(SG)
        });
        return wG.parse(LG).data
      }
    }
    const KS = QS(eZ.AUTHENTICATE),
      hS = GG => fS(GG, DZ.AUTHORIZE, gw),
      dS = GG => fS(GG, DZ.CAPTURE_LOG, nw),
      JS = GG => fS(GG, DZ.ENCOURAGE_HW_ACCELERATION, SS),
      rS = GG => fS(GG, DZ.GET_ENTITLEMENTS_EMBEDDED, GS),
      zS = GG => fS(GG, DZ.GET_SKUS_EMBEDDED, Bw),
      ES = GG => fS(GG, DZ.GET_CHANNEL_PERMISSIONS, LS),
      oS = GG => fS(GG, DZ.GET_PLATFORM_BEHAVIORS, yS),
      XS = GG => fS(GG, DZ.OPEN_EXTERNAL_LINK, nw),
      uS = GG => fS(GG, DZ.OPEN_INVITE_DIALOG, nw),
      iS = QS(eZ.OPEN_SHARE_MOMENT_DIALOG);
    ww.Df({
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
    const CS = GG => fS(GG, DZ.SET_ACTIVITY, xw),
      WS = GG => fS(GG, DZ.SET_CONFIG, ZS);
    const mS = GG => ({
        lock_state: GG.lock_state,
        picture_in_picture_lock_state: GG.picture_in_picture_lock_state
      }),
      IS = GG => function(GG) {
        let {
          sendCommand: bG,
          cmd: ZG,
          response: wG,
          fallbackTransform: SG,
          transferTransform: LG = () => {}
        } = GG;
        const yG = NZ.extend({
          cmd: yZ(ZG),
          data: wG
        });
        return async GG => {
          try {
            const wG = await bG({
              cmd: ZG,
              args: GG,
              transfer: LG(GG)
            });
            return yG.parse(wG).data
          } catch (wG) {
            if (wG.code === cZ.INVALID_PAYLOAD) {
              const wG = SG(GG),
                kG = await bG({
                  cmd: ZG,
                  args: wG,
                  transfer: LG(wG)
                });
              return yG.parse(kG).data
            }
            throw wG
          }
        }
      }({
        sendCommand: GG,
        cmd: DZ.SET_ORIENTATION_LOCK_STATE,
        response: nw,
        fallbackTransform: mS
      }),
      FS = GG => fS(GG, DZ.START_PURCHASE, bS),
      vS = GG => fS(GG, DZ.USER_SETTINGS_GET_LOCALE, wS),
      aS = QS(eZ.INITIATE_IMAGE_UPLOAD),
      cS = GG => fS(GG, DZ.GET_CHANNEL, Tw),
      lS = QS(eZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var jS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function PS(GG) {
      return "string" === typeof GG && jS.test(GG)
    }
    for (var MS = [], AS = 0; AS < 256; ++AS) MS.push((AS + 256).toString(16).substr(1));

    function sS(GG) {
      var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZG = (MS[GG[bG + 0]] + MS[GG[bG + 1]] + MS[GG[bG + 2]] + MS[GG[bG + 3]] + "-" + MS[GG[bG + 4]] + MS[GG[bG + 5]] + "-" + MS[GG[bG + 6]] + MS[GG[bG + 7]] + "-" + MS[GG[bG + 8]] + MS[GG[bG + 9]] + "-" + MS[GG[bG + 10]] + MS[GG[bG + 11]] + MS[GG[bG + 12]] + MS[GG[bG + 13]] + MS[GG[bG + 14]] + MS[GG[bG + 15]]).toLowerCase();
      if (!PS(ZG)) throw TypeError("Stringified UUID is invalid");
      return ZG
    }
    var qS;

    function nS(GG, bG, ZG) {
      function wG(GG, wG, SG, LG) {
        if ("string" === typeof GG && (GG = function(GG) {
            GG = unescape(encodeURIComponent(GG));
            for (var bG = [], ZG = 0; ZG < GG.length; ++ZG) bG.push(GG.charCodeAt(ZG));
            return bG
          }(GG)), "string" === typeof wG && (wG = function(GG) {
            if (!PS(GG)) throw TypeError("Invalid UUID");
            var bG, ZG = new Uint8Array(16);
            return ZG[0] = (bG = parseInt(GG.slice(0, 8), 16)) >>> 24, ZG[1] = bG >>> 16 & 255, ZG[2] = bG >>> 8 & 255, ZG[3] = 255 & bG, ZG[4] = (bG = parseInt(GG.slice(9, 13), 16)) >>> 8, ZG[5] = 255 & bG, ZG[6] = (bG = parseInt(GG.slice(14, 18), 16)) >>> 8, ZG[7] = 255 & bG, ZG[8] = (bG = parseInt(GG.slice(19, 23), 16)) >>> 8, ZG[9] = 255 & bG, ZG[10] = (bG = parseInt(GG.slice(24, 36), 16)) / 1099511627776 & 255, ZG[11] = bG / 4294967296 & 255, ZG[12] = bG >>> 24 & 255, ZG[13] = bG >>> 16 & 255, ZG[14] = bG >>> 8 & 255, ZG[15] = 255 & bG, ZG
          }(wG)), 16 !== wG.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var yG = new Uint8Array(16 + GG.length);
        if (yG.set(wG), yG.set(GG, wG.length), (yG = ZG(yG))[6] = 15 & yG[6] | bG, yG[8] = 63 & yG[8] | 128, SG) {
          LG = LG || 0;
          for (var kG = 0; kG < 16; ++kG) SG[LG + kG] = yG[kG];
          return SG
        }
        return sS(yG)
      }
      try {
        wG.name = GG
      } catch (SG) {}
      return wG.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", wG.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", wG
    }

    function gS(GG) {
      return 14 + (GG + 64 >>> 9 << 4) + 1
    }

    function eS(GG, bG) {
      var ZG = (65535 & GG) + (65535 & bG);
      return (GG >> 16) + (bG >> 16) + (ZG >> 16) << 16 | 65535 & ZG
    }

    function RS(GG, bG, ZG, wG, SG, LG) {
      return eS((yG = eS(eS(bG, GG), eS(wG, LG))) << (kG = SG) | yG >>> 32 - kG, ZG);
      var yG, kG
    }

    function TS(GG, bG, ZG, wG, SG, LG, yG) {
      return RS(bG & ZG | ~bG & wG, GG, bG, SG, LG, yG)
    }

    function HS(GG, bG, ZG, wG, SG, LG, yG) {
      return RS(bG & wG | ZG & ~wG, GG, bG, SG, LG, yG)
    }

    function tS(GG, bG, ZG, wG, SG, LG, yG) {
      return RS(bG ^ ZG ^ wG, GG, bG, SG, LG, yG)
    }

    function DS(GG, bG, ZG, wG, SG, LG, yG) {
      return RS(ZG ^ (bG | ~wG), GG, bG, SG, LG, yG)
    }
    nS("v3", 48, (function(GG) {
      if ("string" === typeof GG) {
        var bG = unescape(encodeURIComponent(GG));
        GG = new Uint8Array(bG.length);
        for (var ZG = 0; ZG < bG.length; ++ZG) GG[ZG] = bG.charCodeAt(ZG)
      }
      return function(GG) {
        for (var bG = [], ZG = 32 * GG.length, wG = "0123456789abcdef", SG = 0; SG < ZG; SG += 8) {
          var LG = GG[SG >> 5] >>> SG % 32 & 255,
            yG = parseInt(wG.charAt(LG >>> 4 & 15) + wG.charAt(15 & LG), 16);
          bG.push(yG)
        }
        return bG
      }(function(GG, bG) {
        GG[bG >> 5] |= 128 << bG % 32, GG[gS(bG) - 1] = bG;
        for (var ZG = 1732584193, wG = -271733879, SG = -1732584194, LG = 271733878, yG = 0; yG < GG.length; yG += 16) {
          var kG = ZG,
            UG = wG,
            YG = SG,
            VG = LG;
          ZG = TS(ZG, wG, SG, LG, GG[yG], 7, -680876936), LG = TS(LG, ZG, wG, SG, GG[yG + 1], 12, -389564586), SG = TS(SG, LG, ZG, wG, GG[yG + 2], 17, 606105819), wG = TS(wG, SG, LG, ZG, GG[yG + 3], 22, -1044525330), ZG = TS(ZG, wG, SG, LG, GG[yG + 4], 7, -176418897), LG = TS(LG, ZG, wG, SG, GG[yG + 5], 12, 1200080426), SG = TS(SG, LG, ZG, wG, GG[yG + 6], 17, -1473231341), wG = TS(wG, SG, LG, ZG, GG[yG + 7], 22, -45705983), ZG = TS(ZG, wG, SG, LG, GG[yG + 8], 7, 1770035416), LG = TS(LG, ZG, wG, SG, GG[yG + 9], 12, -1958414417), SG = TS(SG, LG, ZG, wG, GG[yG + 10], 17, -42063), wG = TS(wG, SG, LG, ZG, GG[yG + 11], 22, -1990404162), ZG = TS(ZG, wG, SG, LG, GG[yG + 12], 7, 1804603682), LG = TS(LG, ZG, wG, SG, GG[yG + 13], 12, -40341101), SG = TS(SG, LG, ZG, wG, GG[yG + 14], 17, -1502002290), ZG = HS(ZG, wG = TS(wG, SG, LG, ZG, GG[yG + 15], 22, 1236535329), SG, LG, GG[yG + 1], 5, -165796510), LG = HS(LG, ZG, wG, SG, GG[yG + 6], 9, -1069501632), SG = HS(SG, LG, ZG, wG, GG[yG + 11], 14, 643717713), wG = HS(wG, SG, LG, ZG, GG[yG], 20, -373897302), ZG = HS(ZG, wG, SG, LG, GG[yG + 5], 5, -701558691), LG = HS(LG, ZG, wG, SG, GG[yG + 10], 9, 38016083), SG = HS(SG, LG, ZG, wG, GG[yG + 15], 14, -660478335), wG = HS(wG, SG, LG, ZG, GG[yG + 4], 20, -405537848), ZG = HS(ZG, wG, SG, LG, GG[yG + 9], 5, 568446438), LG = HS(LG, ZG, wG, SG, GG[yG + 14], 9, -1019803690), SG = HS(SG, LG, ZG, wG, GG[yG + 3], 14, -187363961), wG = HS(wG, SG, LG, ZG, GG[yG + 8], 20, 1163531501), ZG = HS(ZG, wG, SG, LG, GG[yG + 13], 5, -1444681467), LG = HS(LG, ZG, wG, SG, GG[yG + 2], 9, -51403784), SG = HS(SG, LG, ZG, wG, GG[yG + 7], 14, 1735328473), ZG = tS(ZG, wG = HS(wG, SG, LG, ZG, GG[yG + 12], 20, -1926607734), SG, LG, GG[yG + 5], 4, -378558), LG = tS(LG, ZG, wG, SG, GG[yG + 8], 11, -2022574463), SG = tS(SG, LG, ZG, wG, GG[yG + 11], 16, 1839030562), wG = tS(wG, SG, LG, ZG, GG[yG + 14], 23, -35309556), ZG = tS(ZG, wG, SG, LG, GG[yG + 1], 4, -1530992060), LG = tS(LG, ZG, wG, SG, GG[yG + 4], 11, 1272893353), SG = tS(SG, LG, ZG, wG, GG[yG + 7], 16, -155497632), wG = tS(wG, SG, LG, ZG, GG[yG + 10], 23, -1094730640), ZG = tS(ZG, wG, SG, LG, GG[yG + 13], 4, 681279174), LG = tS(LG, ZG, wG, SG, GG[yG], 11, -358537222), SG = tS(SG, LG, ZG, wG, GG[yG + 3], 16, -722521979), wG = tS(wG, SG, LG, ZG, GG[yG + 6], 23, 76029189), ZG = tS(ZG, wG, SG, LG, GG[yG + 9], 4, -640364487), LG = tS(LG, ZG, wG, SG, GG[yG + 12], 11, -421815835), SG = tS(SG, LG, ZG, wG, GG[yG + 15], 16, 530742520), ZG = DS(ZG, wG = tS(wG, SG, LG, ZG, GG[yG + 2], 23, -995338651), SG, LG, GG[yG], 6, -198630844), LG = DS(LG, ZG, wG, SG, GG[yG + 7], 10, 1126891415), SG = DS(SG, LG, ZG, wG, GG[yG + 14], 15, -1416354905), wG = DS(wG, SG, LG, ZG, GG[yG + 5], 21, -57434055), ZG = DS(ZG, wG, SG, LG, GG[yG + 12], 6, 1700485571), LG = DS(LG, ZG, wG, SG, GG[yG + 3], 10, -1894986606), SG = DS(SG, LG, ZG, wG, GG[yG + 10], 15, -1051523), wG = DS(wG, SG, LG, ZG, GG[yG + 1], 21, -2054922799), ZG = DS(ZG, wG, SG, LG, GG[yG + 8], 6, 1873313359), LG = DS(LG, ZG, wG, SG, GG[yG + 15], 10, -30611744), SG = DS(SG, LG, ZG, wG, GG[yG + 6], 15, -1560198380), wG = DS(wG, SG, LG, ZG, GG[yG + 13], 21, 1309151649), ZG = DS(ZG, wG, SG, LG, GG[yG + 4], 6, -145523070), LG = DS(LG, ZG, wG, SG, GG[yG + 11], 10, -1120210379), SG = DS(SG, LG, ZG, wG, GG[yG + 2], 15, 718787259), wG = DS(wG, SG, LG, ZG, GG[yG + 9], 21, -343485551), ZG = eS(ZG, kG), wG = eS(wG, UG), SG = eS(SG, YG), LG = eS(LG, VG)
        }
        return [ZG, wG, SG, LG]
      }(function(GG) {
        if (0 === GG.length) return [];
        for (var bG = 8 * GG.length, ZG = new Uint32Array(gS(bG)), wG = 0; wG < bG; wG += 8) ZG[wG >> 5] |= (255 & GG[wG / 8]) << wG % 32;
        return ZG
      }(GG), 8 * GG.length))
    }));
    var NS = new Uint8Array(16);

    function OS() {
      if (!qS && !(qS = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return qS(NS)
    }

    function xS(GG, bG, ZG) {
      var wG = (GG = GG || {}).random || (GG.rng || OS)();
      if (wG[6] = 15 & wG[6] | 64, wG[8] = 63 & wG[8] | 128, bG) {
        ZG = ZG || 0;
        for (var SG = 0; SG < 16; ++SG) bG[ZG + SG] = wG[SG];
        return bG
      }
      return sS(wG)
    }

    function BS(GG, bG, ZG, wG) {
      switch (GG) {
        case 0:
          return bG & ZG ^ ~bG & wG;
        case 1:
        case 3:
          return bG ^ ZG ^ wG;
        case 2:
          return bG & ZG ^ bG & wG ^ ZG & wG
      }
    }

    function GL(GG, bG) {
      return GG << bG | GG >>> 32 - bG
    }
    nS("v5", 80, (function(GG) {
      var bG = [1518500249, 1859775393, 2400959708, 3395469782],
        ZG = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof GG) {
        var wG = unescape(encodeURIComponent(GG));
        GG = [];
        for (var SG = 0; SG < wG.length; ++SG) GG.push(wG.charCodeAt(SG))
      } else Array.isArray(GG) || (GG = Array.prototype.slice.call(GG));
      GG.push(128);
      for (var LG = GG.length / 4 + 2, yG = Math.ceil(LG / 16), kG = new Array(yG), UG = 0; UG < yG; ++UG) {
        for (var YG = new Uint32Array(16), VG = 0; VG < 16; ++VG) YG[VG] = GG[64 * UG + 4 * VG] << 24 | GG[64 * UG + 4 * VG + 1] << 16 | GG[64 * UG + 4 * VG + 2] << 8 | GG[64 * UG + 4 * VG + 3];
        kG[UG] = YG
      }
      kG[yG - 1][14] = 8 * (GG.length - 1) / Math.pow(2, 32), kG[yG - 1][14] = Math.floor(kG[yG - 1][14]), kG[yG - 1][15] = 8 * (GG.length - 1) & 4294967295;
      for (var pG = 0; pG < yG; ++pG) {
        for (var fG = new Uint32Array(80), QG = 0; QG < 16; ++QG) fG[QG] = kG[pG][QG];
        for (var KG = 16; KG < 80; ++KG) fG[KG] = GL(fG[KG - 3] ^ fG[KG - 8] ^ fG[KG - 14] ^ fG[KG - 16], 1);
        for (var hG = ZG[0], dG = ZG[1], JG = ZG[2], rG = ZG[3], zG = ZG[4], EG = 0; EG < 80; ++EG) {
          var oG = Math.floor(EG / 20),
            XG = GL(hG, 5) + BS(oG, dG, JG, rG) + zG + bG[oG] + fG[EG] >>> 0;
          zG = rG, rG = JG, JG = GL(dG, 30) >>> 0, dG = hG, hG = XG
        }
        ZG[0] = ZG[0] + hG >>> 0, ZG[1] = ZG[1] + dG >>> 0, ZG[2] = ZG[2] + JG >>> 0, ZG[3] = ZG[3] + rG >>> 0, ZG[4] = ZG[4] + zG >>> 0
      }
      return [ZG[0] >> 24 & 255, ZG[0] >> 16 & 255, ZG[0] >> 8 & 255, 255 & ZG[0], ZG[1] >> 24 & 255, ZG[1] >> 16 & 255, ZG[1] >> 8 & 255, 255 & ZG[1], ZG[2] >> 24 & 255, ZG[2] >> 16 & 255, ZG[2] >> 8 & 255, 255 & ZG[2], ZG[3] >> 24 & 255, ZG[3] >> 16 & 255, ZG[3] >> 8 & 255, 255 & ZG[3], ZG[4] >> 24 & 255, ZG[4] >> 16 & 255, ZG[4] >> 8 & 255, 255 & ZG[4]]
    }));
    class bL extends Error {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(bG), this.code = GG, this.message = bG, this.name = "Discord SDK Error"
      }
    }
    const ZL = ["log", "warn", "debug", "info", "error"];
    var wL;
    ! function(GG) {
      GG[GG.HANDSHAKE = 0] = "HANDSHAKE", GG[GG.FRAME = 1] = "FRAME", GG[GG.CLOSE = 2] = "CLOSE", GG[GG.HELLO = 3] = "HELLO"
    }(wL || (wL = {}));
    const SL = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class LL {
      getTransfer(GG) {
        var bG;
        switch (GG.cmd) {
          case DZ.SUBSCRIBE:
          case DZ.UNSUBSCRIBE:
            return;
          default:
            return null !== (bG = GG.transfer) && void 0 !== bG ? bG : void 0
        }
      }
      constructor(GG, bG) {
        var ZG;
        if (this.eventBus = new YG, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = GG => {
            var bG;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const ZG = xS();
            null === (bG = this.source) || void 0 === bG || bG.postMessage([wL.FRAME, Object.assign(Object.assign({}, GG), {
              nonce: ZG
            })], this.sourceOrigin, this.getTransfer(GG));
            return new Promise(((GG, bG) => {
              this.pendingCommands.set(ZG, {
                resolve: GG,
                reject: bG
              })
            }))
          }, this.commands = (ZG = this.sendCommand, {
            authenticate: KS(ZG),
            authorize: hS(ZG),
            captureLog: dS(ZG),
            encourageHardwareAcceleration: JS(ZG),
            getChannel: cS(ZG),
            getChannelPermissions: ES(ZG),
            getEntitlements: rS(ZG),
            getPlatformBehaviors: oS(ZG),
            getSkus: zS(ZG),
            openExternalLink: XS(ZG),
            openInviteDialog: uS(ZG),
            openShareMomentDialog: iS(ZG),
            setActivity: CS(ZG),
            setConfig: WS(ZG),
            setOrientationLockState: IS(ZG),
            startPurchase: FS(ZG),
            userSettingsGetLocale: vS(ZG),
            initiateImageUpload: aS(ZG),
            getInstanceConnectedParticipants: lS(ZG)
          }), this.handleMessage = GG => {
            if (!SL.has(GG.origin)) return;
            const bG = GG.data;
            if (!Array.isArray(bG)) return;
            const [ZG, wG] = bG;
            switch (ZG) {
              case wL.HELLO:
                return;
              case wL.CLOSE:
                return this.handleClose(wG);
              case wL.HANDSHAKE:
                return this.handleHandshake();
              case wL.FRAME:
                return this.handleFrame(wG);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = GG, this.configuration = null !== bG && void 0 !== bG ? bG : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = jZ.DESKTOP, this.guildId = null, void(this.channelId = null);
        const wG = new URLSearchParams(this._getSearch()),
          SG = wG.get("frame_id");
        if (!SG) throw new Error("frame_id query param is not defined");
        this.frameId = SG;
        const LG = wG.get("instance_id");
        if (!LG) throw new Error("instance_id query param is not defined");
        this.instanceId = LG;
        const yG = wG.get("platform");
        if (!yG) throw new Error("platform query param is not defined");
        if (yG !== jZ.DESKTOP && yG !== jZ.MOBILE) throw new Error(`Invalid query param "platform" of "${yG}". Valid values are "${jZ.DESKTOP}" or "${jZ.MOBILE}"`);
        this.platform = yG, this.guildId = wG.get("guild_id"), this.channelId = wG.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var GG;
          return [null !== (GG = window.parent.opener) && void 0 !== GG ? GG : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(GG, bG) {
        var ZG;
        window.removeEventListener("message", this.handleMessage);
        const wG = xS();
        null === (ZG = this.source) || void 0 === ZG || ZG.postMessage([wL.CLOSE, {
          code: GG,
          message: bG,
          nonce: wG
        }], this.sourceOrigin)
      }
      async subscribe(GG, bG) {
        for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
        const [LG] = wG, yG = this.eventBus.listenerCount(GG), kG = this.eventBus.on(GG, bG);
        return Object.values(jw).includes(GG) && GG !== jw.READY && 0 === yG && await this.sendCommand({
          cmd: DZ.SUBSCRIBE,
          args: LG,
          evt: GG
        }), kG
      }
      async unsubscribe(GG, bG) {
        for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
        const [LG] = wG;
        return GG !== jw.READY && 1 === this.eventBus.listenerCount(GG) && await this.sendCommand({
          cmd: DZ.UNSUBSCRIBE,
          evt: GG,
          args: LG
        }), this.eventBus.off(GG, bG)
      }
      async ready() {
        this.isReady || await new Promise((GG => {
          this.eventBus.once(jw.READY, GG)
        }))
      }
      handshake() {
        var GG;
        null === (GG = this.source) || void 0 === GG || GG.postMessage([wL.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(jw.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const GG = (GG, bG) => {
          this.commands.captureLog({
            level: GG,
            message: bG
          })
        };
        ZL.forEach((bG => {
          ! function(GG, bG, ZG) {
            const wG = GG[bG],
              SG = GG;
            wG && (GG[bG] = function() {
              const GG = [].slice.call(arguments),
                LG = "" + GG.join(" ");
              ZG(bG, LG), wG.apply(SG, GG)
            })
          }(console, bG, GG)
        }))
      }
      handleClose(GG) {
        YS.parse(GG)
      }
      handleHandshake() {}
      handleFrame(GG) {
        var bG, ZG;
        let wG;
        try {
          wG = pS(GG)
        } catch (SG) {
          return console.error("Failed to parse", GG), void console.error(SG)
        }
        if ("DISPATCH" === wG.cmd) this.eventBus.emit(wG.evt, wG.data);
        else {
          if (wG.evt === lw) {
            if (null != wG.nonce) return null === (bG = this.pendingCommands.get(wG.nonce)) || void 0 === bG || bG.reject(wG.data), void this.pendingCommands.delete(wG.nonce);
            this.eventBus.emit("error", new bL(wG.data.code, wG.data.message))
          }
          if (null == wG.nonce) return void console.error("Missing nonce", GG);
          null === (ZG = this.pendingCommands.get(wG.nonce)) || void 0 === ZG || ZG.resolve(wG), this.pendingCommands.delete(wG.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var yL, kL = 1e9,
      UL = !0,
      YL = "[DecimalError] ",
      VL = YL + "Invalid argument: ",
      pL = YL + "Exponent out of range: ",
      fL = Math.floor,
      QL = Math.pow,
      KL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      hL = 1e7,
      dL = 9007199254740991,
      JL = fL(1286742750677284.5),
      rL = {};

    function zL(GG, bG) {
      var ZG, wG, SG, LG, yG, kG, UG, YG, VG = GG.constructor,
        pG = VG.precision;
      if (!GG.s || !bG.s) return bG.s || (bG = new VG(GG)), UL ? FL(bG, pG) : bG;
      if (UG = GG.d, YG = bG.d, yG = GG.e, SG = bG.e, UG = UG.slice(), LG = yG - SG) {
        for (LG < 0 ? (wG = UG, LG = -LG, kG = YG.length) : (wG = YG, SG = yG, kG = UG.length), LG > (kG = (yG = Math.ceil(pG / 7)) > kG ? yG + 1 : kG + 1) && (LG = kG, wG.length = 1), wG.reverse(); LG--;) wG.push(0);
        wG.reverse()
      }
      for ((kG = UG.length) - (LG = YG.length) < 0 && (LG = kG, wG = YG, YG = UG, UG = wG), ZG = 0; LG;) ZG = (UG[--LG] = UG[LG] + YG[LG] + ZG) / hL | 0, UG[LG] %= hL;
      for (ZG && (UG.unshift(ZG), ++SG), kG = UG.length; 0 == UG[--kG];) UG.pop();
      return bG.d = UG, bG.e = SG, UL ? FL(bG, pG) : bG
    }

    function EL(GG, bG, ZG) {
      if (GG !== ~~GG || GG < bG || GG > ZG) throw Error(VL + GG)
    }

    function oL(GG) {
      var bG, ZG, wG, SG = GG.length - 1,
        LG = "",
        yG = GG[0];
      if (SG > 0) {
        for (LG += yG, bG = 1; bG < SG; bG++)(ZG = 7 - (wG = GG[bG] + "").length) && (LG += WL(ZG)), LG += wG;
        (ZG = 7 - (wG = (yG = GG[bG]) + "").length) && (LG += WL(ZG))
      } else if (0 === yG) return "0";
      for (; yG % 10 === 0;) yG /= 10;
      return LG + yG
    }
    rL.absoluteValue = rL.abs = function() {
      var GG = new this.constructor(this);
      return GG.s && (GG.s = 1), GG
    }, rL.comparedTo = rL.cmp = function(GG) {
      var bG, ZG, wG, SG, LG = this;
      if (GG = new LG.constructor(GG), LG.s !== GG.s) return LG.s || -GG.s;
      if (LG.e !== GG.e) return LG.e > GG.e ^ LG.s < 0 ? 1 : -1;
      for (bG = 0, ZG = (wG = LG.d.length) < (SG = GG.d.length) ? wG : SG; bG < ZG; ++bG)
        if (LG.d[bG] !== GG.d[bG]) return LG.d[bG] > GG.d[bG] ^ LG.s < 0 ? 1 : -1;
      return wG === SG ? 0 : wG > SG ^ LG.s < 0 ? 1 : -1
    }, rL.decimalPlaces = rL.dp = function() {
      var GG = this,
        bG = GG.d.length - 1,
        ZG = 7 * (bG - GG.e);
      if (bG = GG.d[bG])
        for (; bG % 10 == 0; bG /= 10) ZG--;
      return ZG < 0 ? 0 : ZG
    }, rL.dividedBy = rL.div = function(GG) {
      return XL(this, new this.constructor(GG))
    }, rL.dividedToIntegerBy = rL.idiv = function(GG) {
      var bG = this.constructor;
      return FL(XL(this, new bG(GG), 0, 1), bG.precision)
    }, rL.equals = rL.eq = function(GG) {
      return !this.cmp(GG)
    }, rL.exponent = function() {
      return iL(this)
    }, rL.greaterThan = rL.gt = function(GG) {
      return this.cmp(GG) > 0
    }, rL.greaterThanOrEqualTo = rL.gte = function(GG) {
      return this.cmp(GG) >= 0
    }, rL.isInteger = rL.isint = function() {
      return this.e > this.d.length - 2
    }, rL.isNegative = rL.isneg = function() {
      return this.s < 0
    }, rL.isPositive = rL.ispos = function() {
      return this.s > 0
    }, rL.isZero = function() {
      return 0 === this.s
    }, rL.lessThan = rL.lt = function(GG) {
      return this.cmp(GG) < 0
    }, rL.lessThanOrEqualTo = rL.lte = function(GG) {
      return this.cmp(GG) < 1
    }, rL.logarithm = rL.log = function(GG) {
      var bG, ZG = this,
        wG = ZG.constructor,
        SG = wG.precision,
        LG = SG + 5;
      if (void 0 === GG) GG = new wG(10);
      else if ((GG = new wG(GG)).s < 1 || GG.eq(yL)) throw Error(YL + "NaN");
      if (ZG.s < 1) throw Error(YL + (ZG.s ? "NaN" : "-Infinity"));
      return ZG.eq(yL) ? new wG(0) : (UL = !1, bG = XL(mL(ZG, LG), mL(GG, LG), LG), UL = !0, FL(bG, SG))
    }, rL.minus = rL.sub = function(GG) {
      var bG = this;
      return GG = new bG.constructor(GG), bG.s == GG.s ? vL(bG, GG) : zL(bG, (GG.s = -GG.s, GG))
    }, rL.modulo = rL.mod = function(GG) {
      var bG, ZG = this,
        wG = ZG.constructor,
        SG = wG.precision;
      if (!(GG = new wG(GG)).s) throw Error(YL + "NaN");
      return ZG.s ? (UL = !1, bG = XL(ZG, GG, 0, 1).times(GG), UL = !0, ZG.minus(bG)) : FL(new wG(ZG), SG)
    }, rL.naturalExponential = rL.exp = function() {
      return uL(this)
    }, rL.naturalLogarithm = rL.ln = function() {
      return mL(this)
    }, rL.negated = rL.neg = function() {
      var GG = new this.constructor(this);
      return GG.s = -GG.s || 0, GG
    }, rL.plus = rL.add = function(GG) {
      var bG = this;
      return GG = new bG.constructor(GG), bG.s == GG.s ? zL(bG, GG) : vL(bG, (GG.s = -GG.s, GG))
    }, rL.precision = rL.sd = function(GG) {
      var bG, ZG, wG, SG = this;
      if (void 0 !== GG && GG !== !!GG && 1 !== GG && 0 !== GG) throw Error(VL + GG);
      if (bG = iL(SG) + 1, ZG = 7 * (wG = SG.d.length - 1) + 1, wG = SG.d[wG]) {
        for (; wG % 10 == 0; wG /= 10) ZG--;
        for (wG = SG.d[0]; wG >= 10; wG /= 10) ZG++
      }
      return GG && bG > ZG ? bG : ZG
    }, rL.squareRoot = rL.sqrt = function() {
      var GG, bG, ZG, wG, SG, LG, yG, kG = this,
        UG = kG.constructor;
      if (kG.s < 1) {
        if (!kG.s) return new UG(0);
        throw Error(YL + "NaN")
      }
      for (GG = iL(kG), UL = !1, 0 == (SG = Math.sqrt(+kG)) || SG == 1 / 0 ? (((bG = oL(kG.d)).length + GG) % 2 == 0 && (bG += "0"), SG = Math.sqrt(bG), GG = fL((GG + 1) / 2) - (GG < 0 || GG % 2), wG = new UG(bG = SG == 1 / 0 ? "1e" + GG : (bG = SG.toExponential()).slice(0, bG.indexOf("e") + 1) + GG)) : wG = new UG(SG.toString()), SG = yG = (ZG = UG.precision) + 3;;)
        if (wG = (LG = wG).plus(XL(kG, LG, yG + 2)).times(.5), oL(LG.d).slice(0, yG) === (bG = oL(wG.d)).slice(0, yG)) {
          if (bG = bG.slice(yG - 3, yG + 1), SG == yG && "4999" == bG) {
            if (FL(LG, ZG + 1, 0), LG.times(LG).eq(kG)) {
              wG = LG;
              break
            }
          } else if ("9999" != bG) break;
          yG += 4
        } return UL = !0, FL(wG, ZG)
    }, rL.times = rL.mul = function(GG) {
      var bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG = this,
        pG = VG.constructor,
        fG = VG.d,
        QG = (GG = new pG(GG)).d;
      if (!VG.s || !GG.s) return new pG(0);
      for (GG.s *= VG.s, ZG = VG.e + GG.e, (UG = fG.length) < (YG = QG.length) && (LG = fG, fG = QG, QG = LG, yG = UG, UG = YG, YG = yG), LG = [], wG = yG = UG + YG; wG--;) LG.push(0);
      for (wG = YG; --wG >= 0;) {
        for (bG = 0, SG = UG + wG; SG > wG;) kG = LG[SG] + QG[wG] * fG[SG - wG - 1] + bG, LG[SG--] = kG % hL | 0, bG = kG / hL | 0;
        LG[SG] = (LG[SG] + bG) % hL | 0
      }
      for (; !LG[--yG];) LG.pop();
      return bG ? ++ZG : LG.shift(), GG.d = LG, GG.e = ZG, UL ? FL(GG, pG.precision) : GG
    }, rL.toDecimalPlaces = rL.todp = function(GG, bG) {
      var ZG = this,
        wG = ZG.constructor;
      return ZG = new wG(ZG), void 0 === GG ? ZG : (EL(GG, 0, kL), void 0 === bG ? bG = wG.rounding : EL(bG, 0, 8), FL(ZG, GG + iL(ZG) + 1, bG))
    }, rL.toExponential = function(GG, bG) {
      var ZG, wG = this,
        SG = wG.constructor;
      return void 0 === GG ? ZG = aL(wG, !0) : (EL(GG, 0, kL), void 0 === bG ? bG = SG.rounding : EL(bG, 0, 8), ZG = aL(wG = FL(new SG(wG), GG + 1, bG), !0, GG + 1)), ZG
    }, rL.toFixed = function(GG, bG) {
      var ZG, wG, SG = this,
        LG = SG.constructor;
      return void 0 === GG ? aL(SG) : (EL(GG, 0, kL), void 0 === bG ? bG = LG.rounding : EL(bG, 0, 8), ZG = aL((wG = FL(new LG(SG), GG + iL(SG) + 1, bG)).abs(), !1, GG + iL(wG) + 1), SG.isneg() && !SG.isZero() ? "-" + ZG : ZG)
    }, rL.toInteger = rL.toint = function() {
      var GG = this,
        bG = GG.constructor;
      return FL(new bG(GG), iL(GG) + 1, bG.rounding)
    }, rL.toNumber = function() {
      return +this
    }, rL.toPower = rL.pow = function(GG) {
      var bG, ZG, wG, SG, LG, yG, kG = this,
        UG = kG.constructor,
        YG = +(GG = new UG(GG));
      if (!GG.s) return new UG(yL);
      if (!(kG = new UG(kG)).s) {
        if (GG.s < 1) throw Error(YL + "Infinity");
        return kG
      }
      if (kG.eq(yL)) return kG;
      if (wG = UG.precision, GG.eq(yL)) return FL(kG, wG);
      if (yG = (bG = GG.e) >= (ZG = GG.d.length - 1), LG = kG.s, yG) {
        if ((ZG = YG < 0 ? -YG : YG) <= dL) {
          for (SG = new UG(yL), bG = Math.ceil(wG / 7 + 4), UL = !1; ZG % 2 && cL((SG = SG.times(kG)).d, bG), 0 !== (ZG = fL(ZG / 2));) cL((kG = kG.times(kG)).d, bG);
          return UL = !0, GG.s < 0 ? new UG(yL).div(SG) : FL(SG, wG)
        }
      } else if (LG < 0) throw Error(YL + "NaN");
      return LG = LG < 0 && 1 & GG.d[Math.max(bG, ZG)] ? -1 : 1, kG.s = 1, UL = !1, SG = GG.times(mL(kG, wG + 12)), UL = !0, (SG = uL(SG)).s = LG, SG
    }, rL.toPrecision = function(GG, bG) {
      var ZG, wG, SG = this,
        LG = SG.constructor;
      return void 0 === GG ? wG = aL(SG, (ZG = iL(SG)) <= LG.toExpNeg || ZG >= LG.toExpPos) : (EL(GG, 1, kL), void 0 === bG ? bG = LG.rounding : EL(bG, 0, 8), wG = aL(SG = FL(new LG(SG), GG, bG), GG <= (ZG = iL(SG)) || ZG <= LG.toExpNeg, GG)), wG
    }, rL.toSignificantDigits = rL.tosd = function(GG, bG) {
      var ZG = this.constructor;
      return void 0 === GG ? (GG = ZG.precision, bG = ZG.rounding) : (EL(GG, 1, kL), void 0 === bG ? bG = ZG.rounding : EL(bG, 0, 8)), FL(new ZG(this), GG, bG)
    }, rL.toString = rL.valueOf = rL.val = rL.toJSON = rL[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var GG = this,
        bG = iL(GG),
        ZG = GG.constructor;
      return aL(GG, bG <= ZG.toExpNeg || bG >= ZG.toExpPos)
    };
    var XL = function() {
      function GG(GG, bG) {
        var ZG, wG = 0,
          SG = GG.length;
        for (GG = GG.slice(); SG--;) ZG = GG[SG] * bG + wG, GG[SG] = ZG % hL | 0, wG = ZG / hL | 0;
        return wG && GG.unshift(wG), GG
      }

      function bG(GG, bG, ZG, wG) {
        var SG, LG;
        if (ZG != wG) LG = ZG > wG ? 1 : -1;
        else
          for (SG = LG = 0; SG < ZG; SG++)
            if (GG[SG] != bG[SG]) {
              LG = GG[SG] > bG[SG] ? 1 : -1;
              break
            } return LG
      }

      function ZG(GG, bG, ZG) {
        for (var wG = 0; ZG--;) GG[ZG] -= wG, wG = GG[ZG] < bG[ZG] ? 1 : 0, GG[ZG] = wG * hL + GG[ZG] - bG[ZG];
        for (; !GG[0] && GG.length > 1;) GG.shift()
      }
      return function(wG, SG, LG, yG) {
        var kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, CG = wG.constructor,
          WG = wG.s == SG.s ? 1 : -1,
          mG = wG.d,
          IG = SG.d;
        if (!wG.s) return new CG(wG);
        if (!SG.s) throw Error(YL + "Division by zero");
        for (UG = wG.e - SG.e, uG = IG.length, oG = mG.length, KG = (QG = new CG(WG)).d = [], YG = 0; IG[YG] == (mG[YG] || 0);) ++YG;
        if (IG[YG] > (mG[YG] || 0) && --UG, (rG = null == LG ? LG = CG.precision : yG ? LG + (iL(wG) - iL(SG)) + 1 : LG) < 0) return new CG(0);
        if (rG = rG / 7 + 2 | 0, YG = 0, 1 == uG)
          for (VG = 0, IG = IG[0], rG++;
            (YG < oG || VG) && rG--; YG++) zG = VG * hL + (mG[YG] || 0), KG[YG] = zG / IG | 0, VG = zG % IG | 0;
        else {
          for ((VG = hL / (IG[0] + 1) | 0) > 1 && (IG = GG(IG, VG), mG = GG(mG, VG), uG = IG.length, oG = mG.length), EG = uG, dG = (hG = mG.slice(0, uG)).length; dG < uG;) hG[dG++] = 0;
          (iG = IG.slice()).unshift(0), XG = IG[0], IG[1] >= hL / 2 && ++XG;
          do {
            VG = 0, (kG = bG(IG, hG, uG, dG)) < 0 ? (JG = hG[0], uG != dG && (JG = JG * hL + (hG[1] || 0)), (VG = JG / XG | 0) > 1 ? (VG >= hL && (VG = hL - 1), 1 == (kG = bG(pG = GG(IG, VG), hG, fG = pG.length, dG = hG.length)) && (VG--, ZG(pG, uG < fG ? iG : IG, fG))) : (0 == VG && (kG = VG = 1), pG = IG.slice()), (fG = pG.length) < dG && pG.unshift(0), ZG(hG, pG, dG), -1 == kG && (kG = bG(IG, hG, uG, dG = hG.length)) < 1 && (VG++, ZG(hG, uG < dG ? iG : IG, dG)), dG = hG.length) : 0 === kG && (VG++, hG = [0]), KG[YG++] = VG, kG && hG[0] ? hG[dG++] = mG[EG] || 0 : (hG = [mG[EG]], dG = 1)
          } while ((EG++ < oG || void 0 !== hG[0]) && rG--)
        }
        return KG[0] || KG.shift(), QG.e = UG, FL(QG, yG ? LG + iL(QG) + 1 : LG)
      }
    }();

    function uL(GG, bG) {
      var ZG, wG, SG, LG, yG, kG = 0,
        UG = 0,
        YG = GG.constructor,
        VG = YG.precision;
      if (iL(GG) > 16) throw Error(pL + iL(GG));
      if (!GG.s) return new YG(yL);
      for (null == bG ? (UL = !1, yG = VG) : yG = bG, LG = new YG(.03125); GG.abs().gte(.1);) GG = GG.times(LG), UG += 5;
      for (yG += Math.log(QL(2, UG)) / Math.LN10 * 2 + 5 | 0, ZG = wG = SG = new YG(yL), YG.precision = yG;;) {
        if (wG = FL(wG.times(GG), yG), ZG = ZG.times(++kG), oL((LG = SG.plus(XL(wG, ZG, yG))).d).slice(0, yG) === oL(SG.d).slice(0, yG)) {
          for (; UG--;) SG = FL(SG.times(SG), yG);
          return YG.precision = VG, null == bG ? (UL = !0, FL(SG, VG)) : SG
        }
        SG = LG
      }
    }

    function iL(GG) {
      for (var bG = 7 * GG.e, ZG = GG.d[0]; ZG >= 10; ZG /= 10) bG++;
      return bG
    }

    function CL(GG, bG, ZG) {
      if (bG > GG.LN10.sd()) throw UL = !0, ZG && (GG.precision = ZG), Error(YL + "LN10 precision limit exceeded");
      return FL(new GG(GG.LN10), bG)
    }

    function WL(GG) {
      for (var bG = ""; GG--;) bG += "0";
      return bG
    }

    function mL(GG, bG) {
      var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG = 1,
        fG = GG,
        QG = fG.d,
        KG = fG.constructor,
        hG = KG.precision;
      if (fG.s < 1) throw Error(YL + (fG.s ? "NaN" : "-Infinity"));
      if (fG.eq(yL)) return new KG(0);
      if (null == bG ? (UL = !1, YG = hG) : YG = bG, fG.eq(10)) return null == bG && (UL = !0), CL(KG, YG);
      if (YG += 10, KG.precision = YG, wG = (ZG = oL(QG)).charAt(0), LG = iL(fG), !(Math.abs(LG) < 15e14)) return UG = CL(KG, YG + 2, hG).times(LG + ""), fG = mL(new KG(wG + "." + ZG.slice(1)), YG - 10).plus(UG), KG.precision = hG, null == bG ? (UL = !0, FL(fG, hG)) : fG;
      for (; wG < 7 && 1 != wG || 1 == wG && ZG.charAt(1) > 3;) wG = (ZG = oL((fG = fG.times(GG)).d)).charAt(0), pG++;
      for (LG = iL(fG), wG > 1 ? (fG = new KG("0." + ZG), LG++) : fG = new KG(wG + "." + ZG.slice(1)), kG = yG = fG = XL(fG.minus(yL), fG.plus(yL), YG), VG = FL(fG.times(fG), YG), SG = 3;;) {
        if (yG = FL(yG.times(VG), YG), oL((UG = kG.plus(XL(yG, new KG(SG), YG))).d).slice(0, YG) === oL(kG.d).slice(0, YG)) return kG = kG.times(2), 0 !== LG && (kG = kG.plus(CL(KG, YG + 2, hG).times(LG + ""))), kG = XL(kG, new KG(pG), YG), KG.precision = hG, null == bG ? (UL = !0, FL(kG, hG)) : kG;
        kG = UG, SG += 2
      }
    }

    function IL(GG, bG) {
      var ZG, wG, SG;
      for ((ZG = bG.indexOf(".")) > -1 && (bG = bG.replace(".", "")), (wG = bG.search(/e/i)) > 0 ? (ZG < 0 && (ZG = wG), ZG += +bG.slice(wG + 1), bG = bG.substring(0, wG)) : ZG < 0 && (ZG = bG.length), wG = 0; 48 === bG.charCodeAt(wG);) ++wG;
      for (SG = bG.length; 48 === bG.charCodeAt(SG - 1);) --SG;
      if (bG = bG.slice(wG, SG)) {
        if (SG -= wG, ZG = ZG - wG - 1, GG.e = fL(ZG / 7), GG.d = [], wG = (ZG + 1) % 7, ZG < 0 && (wG += 7), wG < SG) {
          for (wG && GG.d.push(+bG.slice(0, wG)), SG -= 7; wG < SG;) GG.d.push(+bG.slice(wG, wG += 7));
          wG = 7 - (bG = bG.slice(wG)).length
        } else wG -= SG;
        for (; wG--;) bG += "0";
        if (GG.d.push(+bG), UL && (GG.e > JL || GG.e < -JL)) throw Error(pL + ZG)
      } else GG.s = 0, GG.e = 0, GG.d = [0];
      return GG
    }

    function FL(GG, bG, ZG) {
      var wG, SG, LG, yG, kG, UG, YG, VG, pG = GG.d;
      for (yG = 1, LG = pG[0]; LG >= 10; LG /= 10) yG++;
      if ((wG = bG - yG) < 0) wG += 7, SG = bG, YG = pG[VG = 0];
      else {
        if ((VG = Math.ceil((wG + 1) / 7)) >= (LG = pG.length)) return GG;
        for (YG = LG = pG[VG], yG = 1; LG >= 10; LG /= 10) yG++;
        SG = (wG %= 7) - 7 + yG
      }
      if (void 0 !== ZG && (kG = YG / (LG = QL(10, yG - SG - 1)) % 10 | 0, UG = bG < 0 || void 0 !== pG[VG + 1] || YG % LG, UG = ZG < 4 ? (kG || UG) && (0 == ZG || ZG == (GG.s < 0 ? 3 : 2)) : kG > 5 || 5 == kG && (4 == ZG || UG || 6 == ZG && (wG > 0 ? SG > 0 ? YG / QL(10, yG - SG) : 0 : pG[VG - 1]) % 10 & 1 || ZG == (GG.s < 0 ? 8 : 7))), bG < 1 || !pG[0]) return UG ? (LG = iL(GG), pG.length = 1, bG = bG - LG - 1, pG[0] = QL(10, (7 - bG % 7) % 7), GG.e = fL(-bG / 7) || 0) : (pG.length = 1, pG[0] = GG.e = GG.s = 0), GG;
      if (0 == wG ? (pG.length = VG, LG = 1, VG--) : (pG.length = VG + 1, LG = QL(10, 7 - wG), pG[VG] = SG > 0 ? (YG / QL(10, yG - SG) % QL(10, SG) | 0) * LG : 0), UG)
        for (;;) {
          if (0 == VG) {
            (pG[0] += LG) == hL && (pG[0] = 1, ++GG.e);
            break
          }
          if (pG[VG] += LG, pG[VG] != hL) break;
          pG[VG--] = 0, LG = 1
        }
      for (wG = pG.length; 0 === pG[--wG];) pG.pop();
      if (UL && (GG.e > JL || GG.e < -JL)) throw Error(pL + iL(GG));
      return GG
    }

    function vL(GG, bG) {
      var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG = GG.constructor,
        QG = fG.precision;
      if (!GG.s || !bG.s) return bG.s ? bG.s = -bG.s : bG = new fG(GG), UL ? FL(bG, QG) : bG;
      if (UG = GG.d, pG = bG.d, wG = bG.e, YG = GG.e, UG = UG.slice(), yG = YG - wG) {
        for ((VG = yG < 0) ? (ZG = UG, yG = -yG, kG = pG.length) : (ZG = pG, wG = YG, kG = UG.length), yG > (SG = Math.max(Math.ceil(QG / 7), kG) + 2) && (yG = SG, ZG.length = 1), ZG.reverse(), SG = yG; SG--;) ZG.push(0);
        ZG.reverse()
      } else {
        for ((VG = (SG = UG.length) < (kG = pG.length)) && (kG = SG), SG = 0; SG < kG; SG++)
          if (UG[SG] != pG[SG]) {
            VG = UG[SG] < pG[SG];
            break
          } yG = 0
      }
      for (VG && (ZG = UG, UG = pG, pG = ZG, bG.s = -bG.s), kG = UG.length, SG = pG.length - kG; SG > 0; --SG) UG[kG++] = 0;
      for (SG = pG.length; SG > yG;) {
        if (UG[--SG] < pG[SG]) {
          for (LG = SG; LG && 0 === UG[--LG];) UG[LG] = hL - 1;
          --UG[LG], UG[SG] += hL
        }
        UG[SG] -= pG[SG]
      }
      for (; 0 === UG[--kG];) UG.pop();
      for (; 0 === UG[0]; UG.shift()) --wG;
      return UG[0] ? (bG.d = UG, bG.e = wG, UL ? FL(bG, QG) : bG) : new fG(0)
    }

    function aL(GG, bG, ZG) {
      var wG, SG = iL(GG),
        LG = oL(GG.d),
        yG = LG.length;
      return bG ? (ZG && (wG = ZG - yG) > 0 ? LG = LG.charAt(0) + "." + LG.slice(1) + WL(wG) : yG > 1 && (LG = LG.charAt(0) + "." + LG.slice(1)), LG = LG + (SG < 0 ? "e" : "e+") + SG) : SG < 0 ? (LG = "0." + WL(-SG - 1) + LG, ZG && (wG = ZG - yG) > 0 && (LG += WL(wG))) : SG >= yG ? (LG += WL(SG + 1 - yG), ZG && (wG = ZG - SG - 1) > 0 && (LG = LG + "." + WL(wG))) : ((wG = SG + 1) < yG && (LG = LG.slice(0, wG) + "." + LG.slice(wG)), ZG && (wG = ZG - yG) > 0 && (SG + 1 === yG && (LG += "."), LG += WL(wG))), GG.s < 0 ? "-" + LG : LG
    }

    function cL(GG, bG) {
      if (GG.length > bG) return GG.length = bG, !0
    }

    function lL(GG) {
      if (!GG || "object" !== typeof GG) throw Error(YL + "Object expected");
      var bG, ZG, wG, SG = ["precision", 1, kL, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (bG = 0; bG < SG.length; bG += 3)
        if (void 0 !== (wG = GG[ZG = SG[bG]])) {
          if (!(fL(wG) === wG && wG >= SG[bG + 1] && wG <= SG[bG + 2])) throw Error(VL + ZG + ": " + wG);
          this[ZG] = wG
        } if (void 0 !== (wG = GG[ZG = "LN10"])) {
        if (wG != Math.LN10) throw Error(VL + ZG + ": " + wG);
        this[ZG] = new this(wG)
      }
      return this
    }
    var jL = function GG(bG) {
      var ZG, wG, SG;

      function LG(GG) {
        var bG = this;
        if (!(bG instanceof LG)) return new LG(GG);
        if (bG.constructor = LG, GG instanceof LG) return bG.s = GG.s, bG.e = GG.e, void(bG.d = (GG = GG.d) ? GG.slice() : GG);
        if ("number" === typeof GG) {
          if (0 * GG !== 0) throw Error(VL + GG);
          if (GG > 0) bG.s = 1;
          else {
            if (!(GG < 0)) return bG.s = 0, bG.e = 0, void(bG.d = [0]);
            GG = -GG, bG.s = -1
          }
          return GG === ~~GG && GG < 1e7 ? (bG.e = 0, void(bG.d = [GG])) : IL(bG, GG.toString())
        }
        if ("string" !== typeof GG) throw Error(VL + GG);
        if (45 === GG.charCodeAt(0) ? (GG = GG.slice(1), bG.s = -1) : bG.s = 1, !KL.test(GG)) throw Error(VL + GG);
        IL(bG, GG)
      }
      if (LG.prototype = rL, LG.ROUND_UP = 0, LG.ROUND_DOWN = 1, LG.ROUND_CEIL = 2, LG.ROUND_FLOOR = 3, LG.ROUND_HALF_UP = 4, LG.ROUND_HALF_DOWN = 5, LG.ROUND_HALF_EVEN = 6, LG.ROUND_HALF_CEIL = 7, LG.ROUND_HALF_FLOOR = 8, LG.clone = GG, LG.config = LG.set = lL, void 0 === bG && (bG = {}), bG)
        for (SG = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ZG = 0; ZG < SG.length;) bG.hasOwnProperty(wG = SG[ZG++]) || (bG[wG] = this[wG]);
      return LG.config(bG), LG
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    yL = new jL(1);
    var PL;
    ! function(GG) {
      GG.AED = "aed", GG.AFN = "afn", GG.ALL = "all", GG.AMD = "amd", GG.ANG = "ang", GG.AOA = "aoa", GG.ARS = "ars", GG.AUD = "aud", GG.AWG = "awg", GG.AZN = "azn", GG.BAM = "bam", GG.BBD = "bbd", GG.BDT = "bdt", GG.BGN = "bgn", GG.BHD = "bhd", GG.BIF = "bif", GG.BMD = "bmd", GG.BND = "bnd", GG.BOB = "bob", GG.BOV = "bov", GG.BRL = "brl", GG.BSD = "bsd", GG.BTN = "btn", GG.BWP = "bwp", GG.BYN = "byn", GG.BYR = "byr", GG.BZD = "bzd", GG.CAD = "cad", GG.CDF = "cdf", GG.CHE = "che", GG.CHF = "chf", GG.CHW = "chw", GG.CLF = "clf", GG.CLP = "clp", GG.CNY = "cny", GG.COP = "cop", GG.COU = "cou", GG.CRC = "crc", GG.CUC = "cuc", GG.CUP = "cup", GG.CVE = "cve", GG.CZK = "czk", GG.DJF = "djf", GG.DKK = "dkk", GG.DOP = "dop", GG.DZD = "dzd", GG.EGP = "egp", GG.ERN = "ern", GG.ETB = "etb", GG.EUR = "eur", GG.FJD = "fjd", GG.FKP = "fkp", GG.GBP = "gbp", GG.GEL = "gel", GG.GHS = "ghs", GG.GIP = "gip", GG.GMD = "gmd", GG.GNF = "gnf", GG.GTQ = "gtq", GG.GYD = "gyd", GG.HKD = "hkd", GG.HNL = "hnl", GG.HRK = "hrk", GG.HTG = "htg", GG.HUF = "huf", GG.IDR = "idr", GG.ILS = "ils", GG.INR = "inr", GG.IQD = "iqd", GG.IRR = "irr", GG.ISK = "isk", GG.JMD = "jmd", GG.JOD = "jod", GG.JPY = "jpy", GG.KES = "kes", GG.KGS = "kgs", GG.KHR = "khr", GG.KMF = "kmf", GG.KPW = "kpw", GG.KRW = "krw", GG.KWD = "kwd", GG.KYD = "kyd", GG.KZT = "kzt", GG.LAK = "lak", GG.LBP = "lbp", GG.LKR = "lkr", GG.LRD = "lrd", GG.LSL = "lsl", GG.LTL = "ltl", GG.LVL = "lvl", GG.LYD = "lyd", GG.MAD = "mad", GG.MDL = "mdl", GG.MGA = "mga", GG.MKD = "mkd", GG.MMK = "mmk", GG.MNT = "mnt", GG.MOP = "mop", GG.MRO = "mro", GG.MUR = "mur", GG.MVR = "mvr", GG.MWK = "mwk", GG.MXN = "mxn", GG.MXV = "mxv", GG.MYR = "myr", GG.MZN = "mzn", GG.NAD = "nad", GG.NGN = "ngn", GG.NIO = "nio", GG.NOK = "nok", GG.NPR = "npr", GG.NZD = "nzd", GG.OMR = "omr", GG.PAB = "pab", GG.PEN = "pen", GG.PGK = "pgk", GG.PHP = "php", GG.PKR = "pkr", GG.PLN = "pln", GG.PYG = "pyg", GG.QAR = "qar", GG.RON = "ron", GG.RSD = "rsd", GG.RUB = "rub", GG.RWF = "rwf", GG.SAR = "sar", GG.SBD = "sbd", GG.SCR = "scr", GG.SDG = "sdg", GG.SEK = "sek", GG.SGD = "sgd", GG.SHP = "shp", GG.SLL = "sll", GG.SOS = "sos", GG.SRD = "srd", GG.SSP = "ssp", GG.STD = "std", GG.SVC = "svc", GG.SYP = "syp", GG.SZL = "szl", GG.THB = "thb", GG.TJS = "tjs", GG.TMT = "tmt", GG.TND = "tnd", GG.TOP = "top", GG.TRY = "try", GG.TTD = "ttd", GG.TWD = "twd", GG.TZS = "tzs", GG.UAH = "uah", GG.UGX = "ugx", GG.USD = "usd", GG.USN = "usn", GG.USS = "uss", GG.UYI = "uyi", GG.UYU = "uyu", GG.UZS = "uzs", GG.VEF = "vef", GG.VND = "vnd", GG.VUV = "vuv", GG.WST = "wst", GG.XAF = "xaf", GG.XAG = "xag", GG.XAU = "xau", GG.XBA = "xba", GG.XBB = "xbb", GG.XBC = "xbc", GG.XBD = "xbd", GG.XCD = "xcd", GG.XDR = "xdr", GG.XFU = "xfu", GG.XOF = "xof", GG.XPD = "xpd", GG.XPF = "xpf", GG.XPT = "xpt", GG.XSU = "xsu", GG.XTS = "xts", GG.XUA = "xua", GG.YER = "yer", GG.ZAR = "zar", GG.ZMW = "zmw", GG.ZWL = "zwl"
    }(PL || (PL = {}));
    PL.AED, PL.AFN, PL.ALL, PL.AMD, PL.ANG, PL.AOA, PL.ARS, PL.AUD, PL.AWG, PL.AZN, PL.BAM, PL.BBD, PL.BDT, PL.BGN, PL.BHD, PL.BIF, PL.BMD, PL.BND, PL.BOB, PL.BOV, PL.BRL, PL.BSD, PL.BTN, PL.BWP, PL.BYR, PL.BYN, PL.BZD, PL.CAD, PL.CDF, PL.CHE, PL.CHF, PL.CHW, PL.CLF, PL.CLP, PL.CNY, PL.COP, PL.COU, PL.CRC, PL.CUC, PL.CUP, PL.CVE, PL.CZK, PL.DJF, PL.DKK, PL.DOP, PL.DZD, PL.EGP, PL.ERN, PL.ETB, PL.EUR, PL.FJD, PL.FKP, PL.GBP, PL.GEL, PL.GHS, PL.GIP, PL.GMD, PL.GNF, PL.GTQ, PL.GYD, PL.HKD, PL.HNL, PL.HRK, PL.HTG, PL.HUF, PL.IDR, PL.ILS, PL.INR, PL.IQD, PL.IRR, PL.ISK, PL.JMD, PL.JOD, PL.JPY, PL.KES, PL.KGS, PL.KHR, PL.KMF, PL.KPW, PL.KRW, PL.KWD, PL.KYD, PL.KZT, PL.LAK, PL.LBP, PL.LKR, PL.LRD, PL.LSL, PL.LTL, PL.LVL, PL.LYD, PL.MAD, PL.MDL, PL.MGA, PL.MKD, PL.MMK, PL.MNT, PL.MOP, PL.MRO, PL.MUR, PL.MVR, PL.MWK, PL.MXN, PL.MXV, PL.MYR, PL.MZN, PL.NAD, PL.NGN, PL.NIO, PL.NOK, PL.NPR, PL.NZD, PL.OMR, PL.PAB, PL.PEN, PL.PGK, PL.PHP, PL.PKR, PL.PLN, PL.PYG, PL.QAR, PL.RON, PL.RSD, PL.RUB, PL.RWF, PL.SAR, PL.SBD, PL.SCR, PL.SDG, PL.SEK, PL.SGD, PL.SHP, PL.SLL, PL.SOS, PL.SRD, PL.SSP, PL.STD, PL.SVC, PL.SYP, PL.SZL, PL.THB, PL.TJS, PL.TMT, PL.TND, PL.TOP, PL.TRY, PL.TTD, PL.TWD, PL.TZS, PL.UAH, PL.UGX, PL.USD, PL.USN, PL.USS, PL.UYI, PL.UYU, PL.UZS, PL.VEF, PL.VND, PL.VUV, PL.WST, PL.XAF, PL.XAG, PL.XAU, PL.XBA, PL.XBB, PL.XBC, PL.XBD, PL.XCD, PL.XDR, PL.XFU, PL.XOF, PL.XPD, PL.XPF, PL.XPT, PL.XSU, PL.XTS, PL.XUA, PL.YER, PL.ZAR, PL.ZMW, PL.ZWL;
    var ML = {
      exports: {}
    };
    ! function(GG, bG) {
      var ZG = "__lodash_hash_undefined__",
        wG = 9007199254740991,
        LG = "[object Arguments]",
        yG = "[object Array]",
        kG = "[object Boolean]",
        UG = "[object Date]",
        YG = "[object Error]",
        VG = "[object Function]",
        pG = "[object Map]",
        fG = "[object Number]",
        QG = "[object Object]",
        KG = "[object Promise]",
        hG = "[object RegExp]",
        dG = "[object Set]",
        JG = "[object String]",
        rG = "[object Symbol]",
        zG = "[object WeakMap]",
        EG = "[object ArrayBuffer]",
        oG = "[object DataView]",
        XG = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        uG = /^\w*$/,
        iG = /^\./,
        CG = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        WG = /\\(\\)?/g,
        mG = /^\[object .+?Constructor\]$/,
        IG = /^(?:0|[1-9]\d*)$/,
        FG = {};
      FG["[object Float32Array]"] = FG["[object Float64Array]"] = FG["[object Int8Array]"] = FG["[object Int16Array]"] = FG["[object Int32Array]"] = FG["[object Uint8Array]"] = FG["[object Uint8ClampedArray]"] = FG["[object Uint16Array]"] = FG["[object Uint32Array]"] = !0, FG[LG] = FG[yG] = FG[EG] = FG[kG] = FG[oG] = FG[UG] = FG[YG] = FG[VG] = FG[pG] = FG[fG] = FG[QG] = FG[hG] = FG[dG] = FG[JG] = FG[zG] = !1;
      var vG = "object" == typeof SG && SG && SG.Object === Object && SG,
        aG = "object" == typeof self && self && self.Object === Object && self,
        cG = vG || aG || Function("return this")(),
        lG = bG && !bG.nodeType && bG,
        jG = lG && GG && !GG.nodeType && GG,
        PG = jG && jG.exports === lG && vG.process,
        MG = function() {
          try {
            return PG && PG.binding("util")
          } catch (GG) {}
        }(),
        AG = MG && MG.isTypedArray;

      function sG(GG, bG) {
        for (var ZG = -1, wG = GG ? GG.length : 0; ++ZG < wG && !1 !== bG(GG[ZG], ZG, GG););
        return GG
      }

      function qG(GG, bG) {
        for (var ZG = -1, wG = GG ? GG.length : 0; ++ZG < wG;)
          if (bG(GG[ZG], ZG, GG)) return !0;
        return !1
      }

      function nG(GG) {
        var bG = !1;
        if (null != GG && "function" != typeof GG.toString) try {
          bG = !!(GG + "")
        } catch (ZG) {}
        return bG
      }

      function gG(GG) {
        var bG = -1,
          ZG = Array(GG.size);
        return GG.forEach((function(GG, wG) {
          ZG[++bG] = [wG, GG]
        })), ZG
      }

      function eG(GG, bG) {
        return function(ZG) {
          return GG(bG(ZG))
        }
      }

      function RG(GG) {
        var bG = -1,
          ZG = Array(GG.size);
        return GG.forEach((function(GG) {
          ZG[++bG] = GG
        })), ZG
      }
      var TG = Array.prototype,
        HG = Function.prototype,
        tG = Object.prototype,
        DG = cG["__core-js_shared__"],
        NG = function() {
          var GG = /[^.]+$/.exec(DG && DG.keys && DG.keys.IE_PROTO || "");
          return GG ? "Symbol(src)_1." + GG : ""
        }(),
        OG = HG.toString,
        xG = tG.hasOwnProperty,
        BG = tG.toString,
        Gb = RegExp("^" + OG.call(xG).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        bb = cG.Symbol,
        Zb = cG.Uint8Array,
        wb = eG(Object.getPrototypeOf, Object),
        Sb = Object.create,
        Lb = tG.propertyIsEnumerable,
        yb = TG.splice,
        kb = eG(Object.keys, Object),
        Ub = gb(cG, "DataView"),
        Yb = gb(cG, "Map"),
        Vb = gb(cG, "Promise"),
        pb = gb(cG, "Set"),
        fb = gb(cG, "WeakMap"),
        Qb = gb(Object, "create"),
        Kb = Ob(Ub),
        hb = Ob(Yb),
        db = Ob(Vb),
        Jb = Ob(pb),
        rb = Ob(fb),
        zb = bb ? bb.prototype : void 0,
        Eb = zb ? zb.valueOf : void 0,
        ob = zb ? zb.toString : void 0;

      function Xb(GG) {
        var bG = -1,
          ZG = GG ? GG.length : 0;
        for (this.clear(); ++bG < ZG;) {
          var wG = GG[bG];
          this.set(wG[0], wG[1])
        }
      }

      function ub(GG) {
        var bG = -1,
          ZG = GG ? GG.length : 0;
        for (this.clear(); ++bG < ZG;) {
          var wG = GG[bG];
          this.set(wG[0], wG[1])
        }
      }

      function ib(GG) {
        var bG = -1,
          ZG = GG ? GG.length : 0;
        for (this.clear(); ++bG < ZG;) {
          var wG = GG[bG];
          this.set(wG[0], wG[1])
        }
      }

      function Cb(GG) {
        var bG = -1,
          ZG = GG ? GG.length : 0;
        for (this.__data__ = new ib; ++bG < ZG;) this.add(GG[bG])
      }

      function Wb(GG) {
        this.__data__ = new ub(GG)
      }

      function mb(GG, bG) {
        var ZG = bZ(GG) || GZ(GG) ? function(GG, bG) {
            for (var ZG = -1, wG = Array(GG); ++ZG < GG;) wG[ZG] = bG(ZG);
            return wG
          }(GG.length, String) : [],
          wG = ZG.length,
          SG = !!wG;
        for (var LG in GG) !bG && !xG.call(GG, LG) || SG && ("length" == LG || Rb(LG, wG)) || ZG.push(LG);
        return ZG
      }

      function Ib(GG, bG) {
        for (var ZG = GG.length; ZG--;)
          if (Bb(GG[ZG][0], bG)) return ZG;
        return -1
      }
      Xb.prototype.clear = function() {
        this.__data__ = Qb ? Qb(null) : {}
      }, Xb.prototype.delete = function(GG) {
        return this.has(GG) && delete this.__data__[GG]
      }, Xb.prototype.get = function(GG) {
        var bG = this.__data__;
        if (Qb) {
          var wG = bG[GG];
          return wG === ZG ? void 0 : wG
        }
        return xG.call(bG, GG) ? bG[GG] : void 0
      }, Xb.prototype.has = function(GG) {
        var bG = this.__data__;
        return Qb ? void 0 !== bG[GG] : xG.call(bG, GG)
      }, Xb.prototype.set = function(GG, bG) {
        return this.__data__[GG] = Qb && void 0 === bG ? ZG : bG, this
      }, ub.prototype.clear = function() {
        this.__data__ = []
      }, ub.prototype.delete = function(GG) {
        var bG = this.__data__,
          ZG = Ib(bG, GG);
        return !(ZG < 0) && (ZG == bG.length - 1 ? bG.pop() : yb.call(bG, ZG, 1), !0)
      }, ub.prototype.get = function(GG) {
        var bG = this.__data__,
          ZG = Ib(bG, GG);
        return ZG < 0 ? void 0 : bG[ZG][1]
      }, ub.prototype.has = function(GG) {
        return Ib(this.__data__, GG) > -1
      }, ub.prototype.set = function(GG, bG) {
        var ZG = this.__data__,
          wG = Ib(ZG, GG);
        return wG < 0 ? ZG.push([GG, bG]) : ZG[wG][1] = bG, this
      }, ib.prototype.clear = function() {
        this.__data__ = {
          hash: new Xb,
          map: new(Yb || ub),
          string: new Xb
        }
      }, ib.prototype.delete = function(GG) {
        return nb(this, GG).delete(GG)
      }, ib.prototype.get = function(GG) {
        return nb(this, GG).get(GG)
      }, ib.prototype.has = function(GG) {
        return nb(this, GG).has(GG)
      }, ib.prototype.set = function(GG, bG) {
        return nb(this, GG).set(GG, bG), this
      }, Cb.prototype.add = Cb.prototype.push = function(GG) {
        return this.__data__.set(GG, ZG), this
      }, Cb.prototype.has = function(GG) {
        return this.__data__.has(GG)
      }, Wb.prototype.clear = function() {
        this.__data__ = new ub
      }, Wb.prototype.delete = function(GG) {
        return this.__data__.delete(GG)
      }, Wb.prototype.get = function(GG) {
        return this.__data__.get(GG)
      }, Wb.prototype.has = function(GG) {
        return this.__data__.has(GG)
      }, Wb.prototype.set = function(GG, bG) {
        var ZG = this.__data__;
        if (ZG instanceof ub) {
          var wG = ZG.__data__;
          if (!Yb || wG.length < 199) return wG.push([GG, bG]), this;
          ZG = this.__data__ = new ib(wG)
        }
        return ZG.set(GG, bG), this
      };
      var Fb, vb = function(GG, bG, ZG) {
        for (var wG = -1, SG = Object(GG), LG = ZG(GG), yG = LG.length; yG--;) {
          var kG = LG[Fb ? yG : ++wG];
          if (!1 === bG(SG[kG], kG, SG)) break
        }
        return GG
      };

      function ab(GG, bG) {
        return GG && vb(GG, bG, VZ)
      }

      function cb(GG, bG) {
        for (var ZG = 0, wG = (bG = Tb(bG, GG) ? [bG] : sb(bG)).length; null != GG && ZG < wG;) GG = GG[Nb(bG[ZG++])];
        return ZG && ZG == wG ? GG : void 0
      }

      function lb(GG, bG) {
        return null != GG && bG in Object(GG)
      }

      function jb(GG, bG, ZG, wG, SG) {
        return GG === bG || (null == GG || null == bG || !LZ(GG) && !yZ(bG) ? GG !== GG && bG !== bG : function(GG, bG, ZG, wG, SG, VG) {
          var KG = bZ(GG),
            zG = bZ(bG),
            XG = yG,
            uG = yG;
          KG || (XG = (XG = eb(GG)) == LG ? QG : XG);
          zG || (uG = (uG = eb(bG)) == LG ? QG : uG);
          var iG = XG == QG && !nG(GG),
            CG = uG == QG && !nG(bG),
            WG = XG == uG;
          if (WG && !iG) return VG || (VG = new Wb), KG || YZ(GG) ? qb(GG, bG, ZG, wG, SG, VG) : function(GG, bG, ZG, wG, SG, LG, yG) {
            switch (ZG) {
              case oG:
                if (GG.byteLength != bG.byteLength || GG.byteOffset != bG.byteOffset) return !1;
                GG = GG.buffer, bG = bG.buffer;
              case EG:
                return !(GG.byteLength != bG.byteLength || !wG(new Zb(GG), new Zb(bG)));
              case kG:
              case UG:
              case fG:
                return Bb(+GG, +bG);
              case YG:
                return GG.name == bG.name && GG.message == bG.message;
              case hG:
              case JG:
                return GG == bG + "";
              case pG:
                var VG = gG;
              case dG:
                var QG = 2 & LG;
                if (VG || (VG = RG), GG.size != bG.size && !QG) return !1;
                var KG = yG.get(GG);
                if (KG) return KG == bG;
                LG |= 1, yG.set(GG, bG);
                var zG = qb(VG(GG), VG(bG), wG, SG, LG, yG);
                return yG.delete(GG), zG;
              case rG:
                if (Eb) return Eb.call(GG) == Eb.call(bG)
            }
            return !1
          }(GG, bG, XG, ZG, wG, SG, VG);
          if (!(2 & SG)) {
            var mG = iG && xG.call(GG, "__wrapped__"),
              IG = CG && xG.call(bG, "__wrapped__");
            if (mG || IG) {
              var FG = mG ? GG.value() : GG,
                vG = IG ? bG.value() : bG;
              return VG || (VG = new Wb), ZG(FG, vG, wG, SG, VG)
            }
          }
          if (!WG) return !1;
          return VG || (VG = new Wb),
            function(GG, bG, ZG, wG, SG, LG) {
              var yG = 2 & SG,
                kG = VZ(GG),
                UG = kG.length,
                YG = VZ(bG),
                VG = YG.length;
              if (UG != VG && !yG) return !1;
              var pG = UG;
              for (; pG--;) {
                var fG = kG[pG];
                if (!(yG ? fG in bG : xG.call(bG, fG))) return !1
              }
              var QG = LG.get(GG);
              if (QG && LG.get(bG)) return QG == bG;
              var KG = !0;
              LG.set(GG, bG), LG.set(bG, GG);
              var hG = yG;
              for (; ++pG < UG;) {
                var dG = GG[fG = kG[pG]],
                  JG = bG[fG];
                if (wG) var rG = yG ? wG(JG, dG, fG, bG, GG, LG) : wG(dG, JG, fG, GG, bG, LG);
                if (!(void 0 === rG ? dG === JG || ZG(dG, JG, wG, SG, LG) : rG)) {
                  KG = !1;
                  break
                }
                hG || (hG = "constructor" == fG)
              }
              if (KG && !hG) {
                var zG = GG.constructor,
                  EG = bG.constructor;
                zG == EG || !("constructor" in GG) || !("constructor" in bG) || "function" == typeof zG && zG instanceof zG && "function" == typeof EG && EG instanceof EG || (KG = !1)
              }
              return LG.delete(GG), LG.delete(bG), KG
            }(GG, bG, ZG, wG, SG, VG)
        }(GG, bG, jb, ZG, wG, SG))
      }

      function Pb(GG) {
        return !(!LZ(GG) || (bG = GG, NG && NG in bG)) && (wZ(GG) || nG(GG) ? Gb : mG).test(Ob(GG));
        var bG
      }

      function Mb(GG) {
        return "function" == typeof GG ? GG : null == GG ? pZ : "object" == typeof GG ? bZ(GG) ? function(GG, bG) {
          if (Tb(GG) && Hb(bG)) return tb(Nb(GG), bG);
          return function(ZG) {
            var wG = function(GG, bG, ZG) {
              var wG = null == GG ? void 0 : cb(GG, bG);
              return void 0 === wG ? ZG : wG
            }(ZG, GG);
            return void 0 === wG && wG === bG ? function(GG, bG) {
              return null != GG && function(GG, bG, ZG) {
                bG = Tb(bG, GG) ? [bG] : sb(bG);
                var wG, SG = -1,
                  LG = bG.length;
                for (; ++SG < LG;) {
                  var yG = Nb(bG[SG]);
                  if (!(wG = null != GG && ZG(GG, yG))) break;
                  GG = GG[yG]
                }
                if (wG) return wG;
                LG = GG ? GG.length : 0;
                return !!LG && SZ(LG) && Rb(yG, LG) && (bZ(GG) || GZ(GG))
              }(GG, bG, lb)
            }(ZG, GG) : jb(bG, wG, void 0, 3)
          }
        }(GG[0], GG[1]) : function(GG) {
          var bG = function(GG) {
            var bG = VZ(GG),
              ZG = bG.length;
            for (; ZG--;) {
              var wG = bG[ZG],
                SG = GG[wG];
              bG[ZG] = [wG, SG, Hb(SG)]
            }
            return bG
          }(GG);
          if (1 == bG.length && bG[0][2]) return tb(bG[0][0], bG[0][1]);
          return function(ZG) {
            return ZG === GG || function(GG, bG, ZG, wG) {
              var SG = ZG.length,
                LG = SG,
                yG = !wG;
              if (null == GG) return !LG;
              for (GG = Object(GG); SG--;) {
                var kG = ZG[SG];
                if (yG && kG[2] ? kG[1] !== GG[kG[0]] : !(kG[0] in GG)) return !1
              }
              for (; ++SG < LG;) {
                var UG = (kG = ZG[SG])[0],
                  YG = GG[UG],
                  VG = kG[1];
                if (yG && kG[2]) {
                  if (void 0 === YG && !(UG in GG)) return !1
                } else {
                  var pG = new Wb;
                  if (wG) var fG = wG(YG, VG, UG, GG, bG, pG);
                  if (!(void 0 === fG ? jb(VG, YG, wG, 3, pG) : fG)) return !1
                }
              }
              return !0
            }(ZG, GG, bG)
          }
        }(GG) : function(GG) {
          return Tb(GG) ? (bG = Nb(GG), function(GG) {
            return null == GG ? void 0 : GG[bG]
          }) : function(GG) {
            return function(bG) {
              return cb(bG, GG)
            }
          }(GG);
          var bG
        }(GG)
      }

      function Ab(GG) {
        if (! function(GG) {
            var bG = GG && GG.constructor,
              ZG = "function" == typeof bG && bG.prototype || tG;
            return GG === ZG
          }(GG)) return kb(GG);
        var bG = [];
        for (var ZG in Object(GG)) xG.call(GG, ZG) && "constructor" != ZG && bG.push(ZG);
        return bG
      }

      function sb(GG) {
        return bZ(GG) ? GG : Db(GG)
      }

      function qb(GG, bG, ZG, wG, SG, LG) {
        var yG = 2 & SG,
          kG = GG.length,
          UG = bG.length;
        if (kG != UG && !(yG && UG > kG)) return !1;
        var YG = LG.get(GG);
        if (YG && LG.get(bG)) return YG == bG;
        var VG = -1,
          pG = !0,
          fG = 1 & SG ? new Cb : void 0;
        for (LG.set(GG, bG), LG.set(bG, GG); ++VG < kG;) {
          var QG = GG[VG],
            KG = bG[VG];
          if (wG) var hG = yG ? wG(KG, QG, VG, bG, GG, LG) : wG(QG, KG, VG, GG, bG, LG);
          if (void 0 !== hG) {
            if (hG) continue;
            pG = !1;
            break
          }
          if (fG) {
            if (!qG(bG, (function(GG, bG) {
                if (!fG.has(bG) && (QG === GG || ZG(QG, GG, wG, SG, LG))) return fG.add(bG)
              }))) {
              pG = !1;
              break
            }
          } else if (QG !== KG && !ZG(QG, KG, wG, SG, LG)) {
            pG = !1;
            break
          }
        }
        return LG.delete(GG), LG.delete(bG), pG
      }

      function nb(GG, bG) {
        var ZG = GG.__data__;
        return function(GG) {
          var bG = typeof GG;
          return "string" == bG || "number" == bG || "symbol" == bG || "boolean" == bG ? "__proto__" !== GG : null === GG
        }(bG) ? ZG["string" == typeof bG ? "string" : "hash"] : ZG.map
      }

      function gb(GG, bG) {
        var ZG = function(GG, bG) {
          return null == GG ? void 0 : GG[bG]
        }(GG, bG);
        return Pb(ZG) ? ZG : void 0
      }
      var eb = function(GG) {
        return BG.call(GG)
      };

      function Rb(GG, bG) {
        return !!(bG = null == bG ? wG : bG) && ("number" == typeof GG || IG.test(GG)) && GG > -1 && GG % 1 == 0 && GG < bG
      }

      function Tb(GG, bG) {
        if (bZ(GG)) return !1;
        var ZG = typeof GG;
        return !("number" != ZG && "symbol" != ZG && "boolean" != ZG && null != GG && !kZ(GG)) || (uG.test(GG) || !XG.test(GG) || null != bG && GG in Object(bG))
      }

      function Hb(GG) {
        return GG === GG && !LZ(GG)
      }

      function tb(GG, bG) {
        return function(ZG) {
          return null != ZG && (ZG[GG] === bG && (void 0 !== bG || GG in Object(ZG)))
        }
      }(Ub && eb(new Ub(new ArrayBuffer(1))) != oG || Yb && eb(new Yb) != pG || Vb && eb(Vb.resolve()) != KG || pb && eb(new pb) != dG || fb && eb(new fb) != zG) && (eb = function(GG) {
        var bG = BG.call(GG),
          ZG = bG == QG ? GG.constructor : void 0,
          wG = ZG ? Ob(ZG) : void 0;
        if (wG) switch (wG) {
          case Kb:
            return oG;
          case hb:
            return pG;
          case db:
            return KG;
          case Jb:
            return dG;
          case rb:
            return zG
        }
        return bG
      });
      var Db = xb((function(GG) {
        var bG;
        GG = null == (bG = GG) ? "" : function(GG) {
          if ("string" == typeof GG) return GG;
          if (kZ(GG)) return ob ? ob.call(GG) : "";
          var bG = GG + "";
          return "0" == bG && 1 / GG == -1 / 0 ? "-0" : bG
        }(bG);
        var ZG = [];
        return iG.test(GG) && ZG.push(""), GG.replace(CG, (function(GG, bG, wG, SG) {
          ZG.push(wG ? SG.replace(WG, "$1") : bG || GG)
        })), ZG
      }));

      function Nb(GG) {
        if ("string" == typeof GG || kZ(GG)) return GG;
        var bG = GG + "";
        return "0" == bG && 1 / GG == -1 / 0 ? "-0" : bG
      }

      function Ob(GG) {
        if (null != GG) {
          try {
            return OG.call(GG)
          } catch (bG) {}
          try {
            return GG + ""
          } catch (bG) {}
        }
        return ""
      }

      function xb(GG, bG) {
        if ("function" != typeof GG || bG && "function" != typeof bG) throw new TypeError("Expected a function");
        var ZG = function() {
          var wG = arguments,
            SG = bG ? bG.apply(this, wG) : wG[0],
            LG = ZG.cache;
          if (LG.has(SG)) return LG.get(SG);
          var yG = GG.apply(this, wG);
          return ZG.cache = LG.set(SG, yG), yG
        };
        return ZG.cache = new(xb.Cache || ib), ZG
      }

      function Bb(GG, bG) {
        return GG === bG || GG !== GG && bG !== bG
      }

      function GZ(GG) {
        return function(GG) {
          return yZ(GG) && ZZ(GG)
        }(GG) && xG.call(GG, "callee") && (!Lb.call(GG, "callee") || BG.call(GG) == LG)
      }
      xb.Cache = ib;
      var bZ = Array.isArray;

      function ZZ(GG) {
        return null != GG && SZ(GG.length) && !wZ(GG)
      }

      function wZ(GG) {
        var bG = LZ(GG) ? BG.call(GG) : "";
        return bG == VG || "[object GeneratorFunction]" == bG
      }

      function SZ(GG) {
        return "number" == typeof GG && GG > -1 && GG % 1 == 0 && GG <= wG
      }

      function LZ(GG) {
        var bG = typeof GG;
        return !!GG && ("object" == bG || "function" == bG)
      }

      function yZ(GG) {
        return !!GG && "object" == typeof GG
      }

      function kZ(GG) {
        return "symbol" == typeof GG || yZ(GG) && BG.call(GG) == rG
      }
      var UZ, YZ = AG ? (UZ = AG, function(GG) {
        return UZ(GG)
      }) : function(GG) {
        return yZ(GG) && SZ(GG.length) && !!FG[BG.call(GG)]
      };

      function VZ(GG) {
        return ZZ(GG) ? mb(GG) : Ab(GG)
      }

      function pZ(GG) {
        return GG
      }
      GG.exports = function(GG, bG, ZG) {
        var wG, SG = bZ(GG) || YZ(GG);
        if (bG = Mb(bG), null == ZG)
          if (SG || LZ(GG)) {
            var LG = GG.constructor;
            ZG = SG ? bZ(GG) ? new LG : [] : wZ(LG) ? LZ(wG = wb(GG)) ? Sb(wG) : {} : {}
          } else ZG = {};
        return (SG ? sG : ab)(GG, (function(GG, wG, SG) {
          return bG(ZG, GG, wG, SG)
        })), ZG
      }
    }(ML, ML.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      j: AL
    } = wG
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);