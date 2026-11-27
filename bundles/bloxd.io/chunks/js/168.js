export const id = 168;
export const ids = [168];
export const modules = {
  7853: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uu,
      f: () => HG
    });
    var yR = {};
    GR.r(yR), GR.d(yR, {
      d: () => yy,
      k: () => Zy,
      h: () => uy,
      n: () => QG,
      q: () => kG,
      s: () => by,
      t: () => sG,
      u: () => xy,
      v: () => Xy,
      y: () => Oy,
      B: () => FG,
      F: () => By,
      G: () => gy,
      K: () => vy,
      P: () => TG,
      L: () => Jy,
      T: () => py,
      V: () => ly
    });
    var tR = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function uR(RR) {
      return RR && RR.__esModule && Object.prototype.hasOwnProperty.call(RR, "default") ? RR.default : RR
    }
    var ZR = {
      exports: {}
    };
    ! function(RR) {
      var JR = Object.prototype.hasOwnProperty,
        GR = "~";

      function yR() {}

      function tR(RR, JR, GR) {
        this.iK = RR, this.context = JR, this.once = GR || !1
      }

      function uR(RR, JR, yR, uR, ZR) {
        if ("function" !== typeof yR) throw new TypeError("The listener must be a function");
        var qR = new tR(yR, uR || RR, ZR),
          iR = GR ? GR + JR : JR;
        return RR._events[iR] ? RR._events[iR].iK ? RR._events[iR] = [RR._events[iR], qR] : RR._events[iR].push(qR) : (RR._events[iR] = qR, RR._eventsCount++), RR
      }

      function ZR(RR, JR) {
        0 === --RR._eventsCount ? RR._events = new yR : delete RR._events[JR]
      }

      function qR() {
        this._events = new yR, this._eventsCount = 0
      }
      Object.create && (yR.prototype = Object.create(null), (new yR).__proto__ || (GR = !1)), qR.prototype.eventNames = function() {
        var RR, yR, tR = [];
        if (0 === this._eventsCount) return tR;
        for (yR in RR = this._events) JR.call(RR, yR) && tR.push(GR ? yR.slice(1) : yR);
        return Object.getOwnPropertySymbols ? tR.concat(Object.getOwnPropertySymbols(RR)) : tR
      }, qR.prototype.listeners = function(RR) {
        var JR = GR ? GR + RR : RR,
          yR = this._events[JR];
        if (!yR) return [];
        if (yR.iK) return [yR.iK];
        for (var tR = 0, uR = yR.length, ZR = new Array(uR); tR < uR; tR++) ZR[tR] = yR[tR].iK;
        return ZR
      }, qR.prototype.listenerCount = function(RR) {
        var JR = GR ? GR + RR : RR,
          yR = this._events[JR];
        return yR ? yR.iK ? 1 : yR.length : 0
      }, qR.prototype.emit = function(RR, JR, yR, tR, uR, ZR) {
        var qR = GR ? GR + RR : RR;
        if (!this._events[qR]) return !1;
        var iR, fR, VR = this._events[qR],
          KR = arguments.length;
        if (VR.iK) {
          switch (VR.once && this.removeListener(RR, VR.iK, void 0, !0), KR) {
            case 1:
              return VR.iK.call(VR.context), !0;
            case 2:
              return VR.iK.call(VR.context, JR), !0;
            case 3:
              return VR.iK.call(VR.context, JR, yR), !0;
            case 4:
              return VR.iK.call(VR.context, JR, yR, tR), !0;
            case 5:
              return VR.iK.call(VR.context, JR, yR, tR, uR), !0;
            case 6:
              return VR.iK.call(VR.context, JR, yR, tR, uR, ZR), !0
          }
          for (fR = 1, iR = new Array(KR - 1); fR < KR; fR++) iR[fR - 1] = arguments[fR];
          VR.iK.apply(VR.context, iR)
        } else {
          var wR, rR = VR.length;
          for (fR = 0; fR < rR; fR++) switch (VR[fR].once && this.removeListener(RR, VR[fR].iK, void 0, !0), KR) {
            case 1:
              VR[fR].iK.call(VR[fR].context);
              break;
            case 2:
              VR[fR].iK.call(VR[fR].context, JR);
              break;
            case 3:
              VR[fR].iK.call(VR[fR].context, JR, yR);
              break;
            case 4:
              VR[fR].iK.call(VR[fR].context, JR, yR, tR);
              break;
            default:
              if (!iR)
                for (wR = 1, iR = new Array(KR - 1); wR < KR; wR++) iR[wR - 1] = arguments[wR];
              VR[fR].iK.apply(VR[fR].context, iR)
          }
        }
        return !0
      }, qR.prototype.on = function(RR, JR, GR) {
        return uR(this, RR, JR, GR, !1)
      }, qR.prototype.once = function(RR, JR, GR) {
        return uR(this, RR, JR, GR, !0)
      }, qR.prototype.removeListener = function(RR, JR, yR, tR) {
        var uR = GR ? GR + RR : RR;
        if (!this._events[uR]) return this;
        if (!JR) return ZR(this, uR), this;
        var qR = this._events[uR];
        if (qR.iK) qR.iK !== JR || tR && !qR.once || yR && qR.context !== yR || ZR(this, uR);
        else {
          for (var iR = 0, fR = [], VR = qR.length; iR < VR; iR++)(qR[iR].iK !== JR || tR && !qR[iR].once || yR && qR[iR].context !== yR) && fR.push(qR[iR]);
          fR.length ? this._events[uR] = 1 === fR.length ? fR[0] : fR : ZR(this, uR)
        }
        return this
      }, qR.prototype.IU = function(RR) {
        var JR;
        return RR ? (JR = GR ? GR + RR : RR, this._events[JR] && ZR(this, JR)) : (this._events = new yR, this._eventsCount = 0), this
      }, qR.prototype.off = qR.prototype.removeListener, qR.prototype.addListener = qR.prototype.on, qR.prefixed = GR, qR.EventEmitter = qR, RR.exports = qR
    }(ZR);
    var qR, iR, fR = uR(ZR.exports);
    ! function(RR) {
      RR.assertEqual = RR => RR, RR.assertIs = function(RR) {}, RR.assertNever = function(RR) {
        throw new Error
      }, RR.arrayToEnum = RR => {
        const JR = {};
        for (const GR of RR) JR[GR] = GR;
        return JR
      }, RR.getValidEnumValues = JR => {
        const GR = RR.objectKeys(JR).filter((RR => "number" !== typeof JR[JR[RR]])),
          yR = {};
        for (const RR of GR) yR[RR] = JR[RR];
        return RR.objectValues(yR)
      }, RR.objectValues = JR => RR.objectKeys(JR).map((function(RR) {
        return JR[RR]
      })), RR.objectKeys = "function" === typeof Object.keys ? RR => Object.keys(RR) : RR => {
        const JR = [];
        for (const GR in RR) Object.prototype.hasOwnProperty.call(RR, GR) && JR.push(GR);
        return JR
      }, RR.find = (RR, JR) => {
        for (const GR of RR)
          if (JR(GR)) return GR
      }, RR.isInteger = "function" === typeof Number.isInteger ? RR => Number.isInteger(RR) : RR => "number" === typeof RR && isFinite(RR) && Math.floor(RR) === RR, RR.joinValues = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return RR.map((RR => "string" === typeof RR ? `'${RR}'` : RR)).join(JR)
      }, RR.jsonStringifyReplacer = (RR, JR) => "bigint" === typeof JR ? JR.toString() : JR
    }(qR || (qR = {})),
    function(RR) {
      RR.mergeShapes = (RR, JR) => ({
        ...RR,
        ...JR
      })
    }(iR || (iR = {}));
    const VR = qR.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      KR = RR => {
        switch (typeof RR) {
          case "undefined":
            return VR.undefined;
          case "string":
            return VR.string;
          case "number":
            return isNaN(RR) ? VR.nan : VR.number;
          case "boolean":
            return VR.boolean;
          case "function":
            return VR.function;
          case "bigint":
            return VR.bigint;
          case "symbol":
            return VR.symbol;
          case "object":
            return Array.isArray(RR) ? VR.array : null === RR ? VR.null : RR.then && "function" === typeof RR.then && RR.catch && "function" === typeof RR.catch ? VR.promise : "undefined" !== typeof Map && RR instanceof Map ? VR.map : "undefined" !== typeof Set && RR instanceof Set ? VR.set : "undefined" !== typeof Date && RR instanceof Date ? VR.date : VR.object;
          default:
            return VR.unknown
        }
      },
      wR = qR.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class rR extends Error {
      constructor(RR) {
        var JR;
        super(), JR = this, this.issues = [], this.addIssue = RR => {
          this.issues = [...this.issues, RR]
        }, this.addIssues = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          JR.issues = [...JR.issues, ...RR]
        };
        const GR = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, GR) : this.__proto__ = GR, this.name = "ZodError", this.issues = RR
      }
      get errors() {
        return this.issues
      }
      format(RR) {
        const JR = RR || function(RR) {
            return RR.message
          },
          GR = {
            _errors: []
          },
          yR = RR => {
            for (const tR of RR.issues)
              if ("invalid_union" === tR.code) tR.unionErrors.map(yR);
              else if ("invalid_return_type" === tR.code) yR(tR.returnTypeError);
            else if ("invalid_arguments" === tR.code) yR(tR.argumentsError);
            else if (0 === tR.path.length) GR._errors.push(JR(tR));
            else {
              let RR = GR,
                yR = 0;
              for (; yR < tR.path.length;) {
                const GR = tR.path[yR];
                yR === tR.path.length - 1 ? (RR[GR] = RR[GR] || {
                  _errors: []
                }, RR[GR]._errors.push(JR(tR))) : RR[GR] = RR[GR] || {
                  _errors: []
                }, RR = RR[GR], yR++
              }
            }
          };
        return yR(this), GR
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, qR.jsonStringifyReplacer, 2)
      }
      get WK() {
        return 0 === this.issues.length
      }
      flatten() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RR => RR.message;
        const JR = {},
          GR = [];
        for (const yR of this.issues) yR.path.length > 0 ? (JR[yR.path[0]] = JR[yR.path[0]] || [], JR[yR.path[0]].push(RR(yR))) : GR.push(RR(yR));
        return {
          formErrors: GR,
          fieldErrors: JR
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    rR.create = RR => new rR(RR);
    const eR = (RR, JR) => {
      let GR;
      switch (RR.code) {
        case wR.invalid_type:
          GR = RR.received === VR.undefined ? "Required" : `Expected ${RR.expected}, received ${RR.received}`;
          break;
        case wR.invalid_literal:
          GR = `Invalid literal value, expected ${JSON.stringify(RR.expected,qR.jsonStringifyReplacer)}`;
          break;
        case wR.unrecognized_keys:
          GR = `Unrecognized key(s) in object: ${qR.joinValues(RR.keys,", ")}`;
          break;
        case wR.invalid_union:
          GR = "Invalid input";
          break;
        case wR.invalid_union_discriminator:
          GR = `Invalid discriminator value. Expected ${qR.joinValues(RR.options)}`;
          break;
        case wR.invalid_enum_value:
          GR = `Invalid enum value. Expected ${qR.joinValues(RR.options)}, received '${RR.received}'`;
          break;
        case wR.invalid_arguments:
          GR = "Invalid function arguments";
          break;
        case wR.invalid_return_type:
          GR = "Invalid function return type";
          break;
        case wR.invalid_date:
          GR = "Invalid date";
          break;
        case wR.invalid_string:
          "object" === typeof RR.validation ? "includes" in RR.validation ? (GR = `Invalid input: must include "${RR.validation.includes}"`, "number" === typeof RR.validation.position && (GR = `${GR} at one or more positions greater than or equal to ${RR.validation.position}`)) : "startsWith" in RR.validation ? GR = `Invalid input: must start with "${RR.validation.startsWith}"` : "endsWith" in RR.validation ? GR = `Invalid input: must end with "${RR.validation.endsWith}"` : qR.assertNever(RR.validation) : GR = "regex" !== RR.validation ? `Invalid ${RR.validation}` : "Invalid";
          break;
        case wR.too_small:
          GR = "array" === RR.type ? `Array must contain ${RR.exact?"exactly":RR.inclusive?"at least":"more than"} ${RR.minimum} element(s)` : "string" === RR.type ? `String must contain ${RR.exact?"exactly":RR.inclusive?"at least":"over"} ${RR.minimum} character(s)` : "number" === RR.type ? `Number must be ${RR.exact?"exactly equal to ":RR.inclusive?"greater than or equal to ":"greater than "}${RR.minimum}` : "date" === RR.type ? `Date must be ${RR.exact?"exactly equal to ":RR.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(RR.minimum))}` : "Invalid input";
          break;
        case wR.too_big:
          GR = "array" === RR.type ? `Array must contain ${RR.exact?"exactly":RR.inclusive?"at most":"less than"} ${RR.maximum} element(s)` : "string" === RR.type ? `String must contain ${RR.exact?"exactly":RR.inclusive?"at most":"under"} ${RR.maximum} character(s)` : "number" === RR.type ? `Number must be ${RR.exact?"exactly":RR.inclusive?"less than or equal to":"less than"} ${RR.maximum}` : "bigint" === RR.type ? `BigInt must be ${RR.exact?"exactly":RR.inclusive?"less than or equal to":"less than"} ${RR.maximum}` : "date" === RR.type ? `Date must be ${RR.exact?"exactly":RR.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(RR.maximum))}` : "Invalid input";
          break;
        case wR.custom:
          GR = "Invalid input";
          break;
        case wR.invalid_intersection_types:
          GR = "Intersection results could not be merged";
          break;
        case wR.not_multiple_of:
          GR = `Number must be a multiple of ${RR.multipleOf}`;
          break;
        case wR.not_finite:
          GR = "Number must be finite";
          break;
        default:
          GR = JR.defaultError, qR.assertNever(RR)
      }
      return {
        message: GR
      }
    };
    let aR = eR;

    function LR() {
      return aR
    }
    const nR = RR => {
      const {
        data: JR,
        path: GR,
        errorMaps: yR,
        issueData: tR
      } = RR, uR = [...GR, ...tR.path || []], ZR = {
        ...tR,
        path: uR
      };
      let qR = "";
      const iR = yR.filter((RR => !!RR)).slice().reverse();
      for (const fR of iR) qR = fR(ZR, {
        data: JR,
        defaultError: qR
      }).message;
      return {
        ...tR,
        path: uR,
        message: tR.message || qR
      }
    };

    function UR(RR, JR) {
      const GR = nR({
        issueData: JR,
        data: RR.data,
        path: RR.path,
        errorMaps: [RR.common.contextualErrorMap, RR.schemaErrorMap, LR(), eR].filter((RR => !!RR))
      });
      RR.common.issues.push(GR)
    }
    class WR {
      constructor() {
        this.value = "valid"
      }
      Ja() {
        "valid" === this.value && (this.value = "Ja")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(RR, JR) {
        const GR = [];
        for (const yR of JR) {
          if ("aborted" === yR.status) return AR;
          "Ja" === yR.status && RR.Ja(), GR.push(yR.value)
        }
        return {
          status: RR.value,
          value: GR
        }
      }
      static async mergeObjectAsync(RR, JR) {
        const GR = [];
        for (const yR of JR) GR.push({
          key: await yR.key,
          value: await yR.value
        });
        return WR.mergeObjectSync(RR, GR)
      }
      static mergeObjectSync(RR, JR) {
        const GR = {};
        for (const yR of JR) {
          const {
            key: JR,
            value: tR
          } = yR;
          if ("aborted" === JR.status) return AR;
          if ("aborted" === tR.status) return AR;
          "Ja" === JR.status && RR.Ja(), "Ja" === tR.status && RR.Ja(), "__proto__" === JR.value || "undefined" === typeof tR.value && !yR.alwaysSet || (GR[JR.value] = tR.value)
        }
        return {
          status: RR.value,
          value: GR
        }
      }
    }
    const AR = Object.freeze({
        status: "aborted"
      }),
      CR = RR => ({
        status: "Ja",
        value: RR
      }),
      XR = RR => ({
        status: "valid",
        value: RR
      }),
      MR = RR => "aborted" === RR.status,
      BR = RR => "Ja" === RR.status,
      lR = RR => "valid" === RR.status,
      pR = RR => "undefined" !== typeof Promise && RR instanceof Promise;
    var gR;
    ! function(RR) {
      RR.errToObj = RR => "string" === typeof RR ? {
        message: RR
      } : RR || {}, RR.toString = RR => "string" === typeof RR ? RR : null === RR || void 0 === RR ? void 0 : RR.message
    }(gR || (gR = {}));
    class bR {
      constructor(RR, JR, GR, yR) {
        this._cachedPath = [], this.parent = RR, this.data = JR, this._path = GR, this._key = yR
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const vR = (RR, JR) => {
      if (lR(JR)) return {
        success: !0,
        data: JR.value
      };
      if (!RR.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const JR = new rR(RR.common.issues);
          return this._error = JR, this._error
        }
      }
    };

    function OR(RR) {
      if (!RR) return {};
      const {
        errorMap: JR,
        invalid_type_error: GR,
        required_error: yR,
        description: tR
      } = RR;
      if (JR && (GR || yR)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (JR) return {
        errorMap: JR,
        description: tR
      };
      return {
        errorMap: (RR, JR) => "invalid_type" !== RR.code ? {
          message: JR.defaultError
        } : "undefined" === typeof JR.data ? {
          message: null !== yR && void 0 !== yR ? yR : JR.defaultError
        } : {
          message: null !== GR && void 0 !== GR ? GR : JR.defaultError
        },
        description: tR
      }
    }
    class xR {
      constructor(RR) {
        this.spa = this.safeParseAsync, this._def = RR, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(RR) {
        return KR(RR.data)
      }
      _getOrReturnCtx(RR, JR) {
        return JR || {
          common: RR.parent.common,
          data: RR.data,
          parsedType: KR(RR.data),
          schemaErrorMap: this._def.errorMap,
          path: RR.path,
          parent: RR.parent
        }
      }
      _processInputParams(RR) {
        return {
          status: new WR,
          ctx: {
            common: RR.parent.common,
            data: RR.data,
            parsedType: KR(RR.data),
            schemaErrorMap: this._def.errorMap,
            path: RR.path,
            parent: RR.parent
          }
        }
      }
      _parseSync(RR) {
        const JR = this._parse(RR);
        if (pR(JR)) throw new Error("Synchronous parse encountered promise.");
        return JR
      }
      _parseAsync(RR) {
        const JR = this._parse(RR);
        return Promise.resolve(JR)
      }
      parse(RR, JR) {
        const GR = this.safeParse(RR, JR);
        if (GR.success) return GR.data;
        throw GR.error
      }
      safeParse(RR, JR) {
        var GR;
        const yR = {
            common: {
              issues: [],
              async: null !== (GR = null === JR || void 0 === JR ? void 0 : JR.async) && void 0 !== GR && GR,
              contextualErrorMap: null === JR || void 0 === JR ? void 0 : JR.errorMap
            },
            path: (null === JR || void 0 === JR ? void 0 : JR.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: RR,
            parsedType: KR(RR)
          },
          tR = this._parseSync({
            data: RR,
            path: yR.path,
            parent: yR
          });
        return vR(yR, tR)
      }
      async parseAsync(RR, JR) {
        const GR = await this.safeParseAsync(RR, JR);
        if (GR.success) return GR.data;
        throw GR.error
      }
      async safeParseAsync(RR, JR) {
        const GR = {
            common: {
              issues: [],
              contextualErrorMap: null === JR || void 0 === JR ? void 0 : JR.errorMap,
              async: !0
            },
            path: (null === JR || void 0 === JR ? void 0 : JR.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: RR,
            parsedType: KR(RR)
          },
          yR = this._parse({
            data: RR,
            path: GR.path,
            parent: GR
          }),
          tR = await (pR(yR) ? yR : Promise.resolve(yR));
        return vR(GR, tR)
      }
      refine(RR, JR) {
        const GR = RR => "string" === typeof JR || "undefined" === typeof JR ? {
          message: JR
        } : "function" === typeof JR ? JR(RR) : JR;
        return this._refinement(((JR, yR) => {
          const tR = RR(JR),
            uR = () => yR.addIssue({
              code: wR.custom,
              ...GR(JR)
            });
          return "undefined" !== typeof Promise && tR instanceof Promise ? tR.then((RR => !!RR || (uR(), !1))) : !!tR || (uR(), !1)
        }))
      }
      refinement(RR, JR) {
        return this._refinement(((GR, yR) => !!RR(GR) || (yR.addIssue("function" === typeof JR ? JR(GR, yR) : JR), !1)))
      }
      _refinement(RR) {
        return new AJ({
          schema: this,
          typeName: NJ.ZodEffects,
          effect: {
            type: "refinement",
            refinement: RR
          }
        })
      }
      superRefine(RR) {
        return this._refinement(RR)
      }
      optional() {
        return CJ.create(this, this._def)
      }
      nullable() {
        return XJ.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return JJ.create(this, this._def)
      }
      promise() {
        return WJ.create(this, this._def)
      }
      or(RR) {
        return tJ.create([this, RR], this._def)
      }
      and(RR) {
        return iJ.create(this, RR, this._def)
      }
      transform(RR) {
        return new AJ({
          ...OR(this._def),
          schema: this,
          typeName: NJ.ZodEffects,
          effect: {
            type: "transform",
            transform: RR
          }
        })
      }
      default (RR) {
        const JR = "function" === typeof RR ? RR : () => RR;
        return new MJ({
          ...OR(this._def),
          innerType: this,
          defaultValue: JR,
          typeName: NJ.ZodDefault
        })
      }
      brand() {
        return new gJ({
          typeName: NJ.ZodBranded,
          type: this,
          ...OR(this._def)
        })
      } catch (RR) {
        const JR = "function" === typeof RR ? RR : () => RR;
        return new BJ({
          ...OR(this._def),
          innerType: this,
          catchValue: JR,
          typeName: NJ.ZodCatch
        })
      }
      describe(RR) {
        return new(0, this.constructor)({
          ...this._def,
          description: RR
        })
      }
      pipe(RR) {
        return bJ.create(this, RR)
      }
      readonly() {
        return vJ.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const NR = /^c[^\s-]{8,}$/i,
      DR = /^[a-z][a-z0-9]*$/,
      HR = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      oR = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      cR = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let PR;
    const IR = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      mR = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class zR extends xR {
      _parse(RR) {
        this._def.coerce && (RR.data = String(RR.data));
        if (this._getType(RR) !== VR.string) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.string,
            received: JR.parsedType
          }), AR
        }
        const JR = new WR;
        let GR;
        for (const iR of this._def.checks)
          if ("min" === iR.kind) RR.data.length < iR.value && (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
            code: wR.too_small,
            minimum: iR.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: iR.message
          }), JR.Ja());
          else if ("max" === iR.kind) RR.data.length > iR.value && (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          code: wR.too_big,
          maximum: iR.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: iR.message
        }), JR.Ja());
        else if ("length" === iR.kind) {
          const yR = RR.data.length > iR.value,
            tR = RR.data.length < iR.value;
          (yR || tR) && (GR = this._getOrReturnCtx(RR, GR), yR ? UR(GR, {
            code: wR.too_big,
            maximum: iR.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: iR.message
          }) : tR && UR(GR, {
            code: wR.too_small,
            minimum: iR.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: iR.message
          }), JR.Ja())
        } else if ("email" === iR.kind) cR.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "email",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja());
        else if ("emoji" === iR.kind) PR || (PR = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), PR.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "emoji",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja());
        else if ("uuid" === iR.kind) oR.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "uuid",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja());
        else if ("cuid" === iR.kind) NR.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "cuid",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja());
        else if ("cuid2" === iR.kind) DR.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "cuid2",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja());
        else if ("ulid" === iR.kind) HR.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "ulid",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja());
        else if ("url" === iR.kind) try {
          new URL(RR.data)
        } catch (ZR) {
          GR = this._getOrReturnCtx(RR, GR), UR(GR, {
            validation: "url",
            code: wR.invalid_string,
            message: iR.message
          }), JR.Ja()
        } else if ("regex" === iR.kind) {
          iR.regex.lastIndex = 0;
          iR.regex.test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
            validation: "regex",
            code: wR.invalid_string,
            message: iR.message
          }), JR.Ja())
        } else if ("trim" === iR.kind) RR.data = RR.data.trim();
        else if ("includes" === iR.kind) RR.data.includes(iR.value, iR.position) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          code: wR.invalid_string,
          validation: {
            includes: iR.value,
            position: iR.position
          },
          message: iR.message
        }), JR.Ja());
        else if ("toLowerCase" === iR.kind) RR.data = RR.data.toLowerCase();
        else if ("toUpperCase" === iR.kind) RR.data = RR.data.toUpperCase();
        else if ("startsWith" === iR.kind) RR.data.startsWith(iR.value) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          code: wR.invalid_string,
          validation: {
            startsWith: iR.value
          },
          message: iR.message
        }), JR.Ja());
        else if ("endsWith" === iR.kind) RR.data.endsWith(iR.value) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          code: wR.invalid_string,
          validation: {
            endsWith: iR.value
          },
          message: iR.message
        }), JR.Ja());
        else if ("datetime" === iR.kind) {
          ((uR = iR).precision ? uR.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${uR.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${uR.precision}}Z$`) : 0 === uR.precision ? uR.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : uR.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(RR.data) || (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
            code: wR.invalid_string,
            validation: "datetime",
            message: iR.message
          }), JR.Ja())
        } else "ip" === iR.kind ? (yR = RR.data, ("v4" !== (tR = iR.version) && tR || !IR.test(yR)) && ("v6" !== tR && tR || !mR.test(yR)) && (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          validation: "ip",
          code: wR.invalid_string,
          message: iR.message
        }), JR.Ja())) : qR.assertNever(iR);
        var yR, tR, uR;
        return {
          status: JR.value,
          value: RR.data
        }
      }
      _regex(RR, JR, GR) {
        return this.refinement((JR => RR.test(JR)), {
          validation: JR,
          code: wR.invalid_string,
          ...gR.errToObj(GR)
        })
      }
      _addCheck(RR) {
        return new zR({
          ...this._def,
          checks: [...this._def.checks, RR]
        })
      }
      email(RR) {
        return this._addCheck({
          kind: "email",
          ...gR.errToObj(RR)
        })
      }
      url(RR) {
        return this._addCheck({
          kind: "url",
          ...gR.errToObj(RR)
        })
      }
      emoji(RR) {
        return this._addCheck({
          kind: "emoji",
          ...gR.errToObj(RR)
        })
      }
      uuid(RR) {
        return this._addCheck({
          kind: "uuid",
          ...gR.errToObj(RR)
        })
      }
      cuid(RR) {
        return this._addCheck({
          kind: "cuid",
          ...gR.errToObj(RR)
        })
      }
      cuid2(RR) {
        return this._addCheck({
          kind: "cuid2",
          ...gR.errToObj(RR)
        })
      }
      ulid(RR) {
        return this._addCheck({
          kind: "ulid",
          ...gR.errToObj(RR)
        })
      }
      ip(RR) {
        return this._addCheck({
          kind: "ip",
          ...gR.errToObj(RR)
        })
      }
      datetime(RR) {
        var JR;
        return "string" === typeof RR ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: RR
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === RR || void 0 === RR ? void 0 : RR.precision) ? null : null === RR || void 0 === RR ? void 0 : RR.precision,
          offset: null !== (JR = null === RR || void 0 === RR ? void 0 : RR.offset) && void 0 !== JR && JR,
          ...gR.errToObj(null === RR || void 0 === RR ? void 0 : RR.message)
        })
      }
      regex(RR, JR) {
        return this._addCheck({
          kind: "regex",
          regex: RR,
          ...gR.errToObj(JR)
        })
      }
      includes(RR, JR) {
        return this._addCheck({
          kind: "includes",
          value: RR,
          position: null === JR || void 0 === JR ? void 0 : JR.position,
          ...gR.errToObj(null === JR || void 0 === JR ? void 0 : JR.message)
        })
      }
      startsWith(RR, JR) {
        return this._addCheck({
          kind: "startsWith",
          value: RR,
          ...gR.errToObj(JR)
        })
      }
      endsWith(RR, JR) {
        return this._addCheck({
          kind: "endsWith",
          value: RR,
          ...gR.errToObj(JR)
        })
      }
      min(RR, JR) {
        return this._addCheck({
          kind: "min",
          value: RR,
          ...gR.errToObj(JR)
        })
      }
      max(RR, JR) {
        return this._addCheck({
          kind: "max",
          value: RR,
          ...gR.errToObj(JR)
        })
      }
      length(RR, JR) {
        return this._addCheck({
          kind: "length",
          value: RR,
          ...gR.errToObj(JR)
        })
      }
      nonempty(RR) {
        return this.min(1, gR.errToObj(RR))
      }
      trim() {
        return new zR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new zR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new zR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((RR => "datetime" === RR.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((RR => "email" === RR.kind))
      }
      get isURL() {
        return !!this._def.checks.find((RR => "url" === RR.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((RR => "emoji" === RR.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((RR => "uuid" === RR.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((RR => "cuid" === RR.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((RR => "cuid2" === RR.kind))
      }
      get isULID() {
        return !!this._def.checks.find((RR => "ulid" === RR.kind))
      }
      get isIP() {
        return !!this._def.checks.find((RR => "ip" === RR.kind))
      }
      get minLength() {
        let RR = null;
        for (const JR of this._def.checks) "min" === JR.kind && (null === RR || JR.value > RR) && (RR = JR.value);
        return RR
      }
      get maxLength() {
        let RR = null;
        for (const JR of this._def.checks) "max" === JR.kind && (null === RR || JR.value < RR) && (RR = JR.value);
        return RR
      }
    }

    function SR(RR, JR) {
      const GR = (RR.toString().split(".")[1] || "").length,
        yR = (JR.toString().split(".")[1] || "").length,
        tR = GR > yR ? GR : yR;
      return parseInt(RR.toFixed(tR).replace(".", "")) % parseInt(JR.toFixed(tR).replace(".", "")) / Math.pow(10, tR)
    }
    zR.create = RR => {
      var JR;
      return new zR({
        checks: [],
        typeName: NJ.ZodString,
        coerce: null !== (JR = null === RR || void 0 === RR ? void 0 : RR.coerce) && void 0 !== JR && JR,
        ...OR(RR)
      })
    };
    class jR extends xR {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(RR) {
        this._def.coerce && (RR.data = Number(RR.data));
        if (this._getType(RR) !== VR.number) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.number,
            received: JR.parsedType
          }), AR
        }
        let JR;
        const GR = new WR;
        for (const yR of this._def.checks)
          if ("int" === yR.kind) qR.isInteger(RR.data) || (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
            code: wR.invalid_type,
            expected: "integer",
            received: "float",
            message: yR.message
          }), GR.Ja());
          else if ("min" === yR.kind) {
          (yR.inclusive ? RR.data < yR.value : RR.data <= yR.value) && (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
            code: wR.too_small,
            minimum: yR.value,
            type: "number",
            inclusive: yR.inclusive,
            exact: !1,
            message: yR.message
          }), GR.Ja())
        } else if ("max" === yR.kind) {
          (yR.inclusive ? RR.data > yR.value : RR.data >= yR.value) && (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
            code: wR.too_big,
            maximum: yR.value,
            type: "number",
            inclusive: yR.inclusive,
            exact: !1,
            message: yR.message
          }), GR.Ja())
        } else "multipleOf" === yR.kind ? 0 !== SR(RR.data, yR.value) && (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
          code: wR.not_multiple_of,
          multipleOf: yR.value,
          message: yR.message
        }), GR.Ja()) : "finite" === yR.kind ? Number.isFinite(RR.data) || (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
          code: wR.not_finite,
          message: yR.message
        }), GR.Ja()) : qR.assertNever(yR);
        return {
          status: GR.value,
          value: RR.data
        }
      }
      gte(RR, JR) {
        return this.setLimit("min", RR, !0, gR.toString(JR))
      }
      gt(RR, JR) {
        return this.setLimit("min", RR, !1, gR.toString(JR))
      }
      lte(RR, JR) {
        return this.setLimit("max", RR, !0, gR.toString(JR))
      }
      lt(RR, JR) {
        return this.setLimit("max", RR, !1, gR.toString(JR))
      }
      setLimit(RR, JR, GR, yR) {
        return new jR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: RR,
            value: JR,
            inclusive: GR,
            message: gR.toString(yR)
          }]
        })
      }
      _addCheck(RR) {
        return new jR({
          ...this._def,
          checks: [...this._def.checks, RR]
        })
      }
      int(RR) {
        return this._addCheck({
          kind: "int",
          message: gR.toString(RR)
        })
      }
      positive(RR) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: gR.toString(RR)
        })
      }
      negative(RR) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: gR.toString(RR)
        })
      }
      nonpositive(RR) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: gR.toString(RR)
        })
      }
      nonnegative(RR) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: gR.toString(RR)
        })
      }
      multipleOf(RR, JR) {
        return this._addCheck({
          kind: "multipleOf",
          value: RR,
          message: gR.toString(JR)
        })
      }
      finite(RR) {
        return this._addCheck({
          kind: "finite",
          message: gR.toString(RR)
        })
      }
      safe(RR) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: gR.toString(RR)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: gR.toString(RR)
        })
      }
      get minValue() {
        let RR = null;
        for (const JR of this._def.checks) "min" === JR.kind && (null === RR || JR.value > RR) && (RR = JR.value);
        return RR
      }
      get maxValue() {
        let RR = null;
        for (const JR of this._def.checks) "max" === JR.kind && (null === RR || JR.value < RR) && (RR = JR.value);
        return RR
      }
      get isInt() {
        return !!this._def.checks.find((RR => "int" === RR.kind || "multipleOf" === RR.kind && qR.isInteger(RR.value)))
      }
      get isFinite() {
        let RR = null,
          JR = null;
        for (const GR of this._def.checks) {
          if ("finite" === GR.kind || "int" === GR.kind || "multipleOf" === GR.kind) return !0;
          "min" === GR.kind ? (null === JR || GR.value > JR) && (JR = GR.value) : "max" === GR.kind && (null === RR || GR.value < RR) && (RR = GR.value)
        }
        return Number.isFinite(JR) && Number.isFinite(RR)
      }
    }
    jR.create = RR => new jR({
      checks: [],
      typeName: NJ.ZodNumber,
      coerce: (null === RR || void 0 === RR ? void 0 : RR.coerce) || !1,
      ...OR(RR)
    });
    class dR extends xR {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(RR) {
        this._def.coerce && (RR.data = BigInt(RR.data));
        if (this._getType(RR) !== VR.bigint) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.bigint,
            received: JR.parsedType
          }), AR
        }
        let JR;
        const GR = new WR;
        for (const yR of this._def.checks)
          if ("min" === yR.kind) {
            (yR.inclusive ? RR.data < yR.value : RR.data <= yR.value) && (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
              code: wR.too_small,
              type: "bigint",
              minimum: yR.value,
              inclusive: yR.inclusive,
              message: yR.message
            }), GR.Ja())
          } else if ("max" === yR.kind) {
          (yR.inclusive ? RR.data > yR.value : RR.data >= yR.value) && (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
            code: wR.too_big,
            type: "bigint",
            maximum: yR.value,
            inclusive: yR.inclusive,
            message: yR.message
          }), GR.Ja())
        } else "multipleOf" === yR.kind ? RR.data % yR.value !== BigInt(0) && (JR = this._getOrReturnCtx(RR, JR), UR(JR, {
          code: wR.not_multiple_of,
          multipleOf: yR.value,
          message: yR.message
        }), GR.Ja()) : qR.assertNever(yR);
        return {
          status: GR.value,
          value: RR.data
        }
      }
      gte(RR, JR) {
        return this.setLimit("min", RR, !0, gR.toString(JR))
      }
      gt(RR, JR) {
        return this.setLimit("min", RR, !1, gR.toString(JR))
      }
      lte(RR, JR) {
        return this.setLimit("max", RR, !0, gR.toString(JR))
      }
      lt(RR, JR) {
        return this.setLimit("max", RR, !1, gR.toString(JR))
      }
      setLimit(RR, JR, GR, yR) {
        return new dR({
          ...this._def,
          checks: [...this._def.checks, {
            kind: RR,
            value: JR,
            inclusive: GR,
            message: gR.toString(yR)
          }]
        })
      }
      _addCheck(RR) {
        return new dR({
          ...this._def,
          checks: [...this._def.checks, RR]
        })
      }
      positive(RR) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: gR.toString(RR)
        })
      }
      negative(RR) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: gR.toString(RR)
        })
      }
      nonpositive(RR) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: gR.toString(RR)
        })
      }
      nonnegative(RR) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: gR.toString(RR)
        })
      }
      multipleOf(RR, JR) {
        return this._addCheck({
          kind: "multipleOf",
          value: RR,
          message: gR.toString(JR)
        })
      }
      get minValue() {
        let RR = null;
        for (const JR of this._def.checks) "min" === JR.kind && (null === RR || JR.value > RR) && (RR = JR.value);
        return RR
      }
      get maxValue() {
        let RR = null;
        for (const JR of this._def.checks) "max" === JR.kind && (null === RR || JR.value < RR) && (RR = JR.value);
        return RR
      }
    }
    dR.create = RR => {
      var JR;
      return new dR({
        checks: [],
        typeName: NJ.ZodBigInt,
        coerce: null !== (JR = null === RR || void 0 === RR ? void 0 : RR.coerce) && void 0 !== JR && JR,
        ...OR(RR)
      })
    };
    class ER extends xR {
      _parse(RR) {
        this._def.coerce && (RR.data = Boolean(RR.data));
        if (this._getType(RR) !== VR.boolean) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.boolean,
            received: JR.parsedType
          }), AR
        }
        return XR(RR.data)
      }
    }
    ER.create = RR => new ER({
      typeName: NJ.ZodBoolean,
      coerce: (null === RR || void 0 === RR ? void 0 : RR.coerce) || !1,
      ...OR(RR)
    });
    class YR extends xR {
      _parse(RR) {
        this._def.coerce && (RR.data = new Date(RR.data));
        if (this._getType(RR) !== VR.date) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.date,
            received: JR.parsedType
          }), AR
        }
        if (isNaN(RR.data.getTime())) {
          return UR(this._getOrReturnCtx(RR), {
            code: wR.invalid_date
          }), AR
        }
        const JR = new WR;
        let GR;
        for (const yR of this._def.checks) "min" === yR.kind ? RR.data.getTime() < yR.value && (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          code: wR.too_small,
          message: yR.message,
          inclusive: !0,
          exact: !1,
          minimum: yR.value,
          type: "date"
        }), JR.Ja()) : "max" === yR.kind ? RR.data.getTime() > yR.value && (GR = this._getOrReturnCtx(RR, GR), UR(GR, {
          code: wR.too_big,
          message: yR.message,
          inclusive: !0,
          exact: !1,
          maximum: yR.value,
          type: "date"
        }), JR.Ja()) : qR.assertNever(yR);
        return {
          status: JR.value,
          value: new Date(RR.data.getTime())
        }
      }
      _addCheck(RR) {
        return new YR({
          ...this._def,
          checks: [...this._def.checks, RR]
        })
      }
      min(RR, JR) {
        return this._addCheck({
          kind: "min",
          value: RR.getTime(),
          message: gR.toString(JR)
        })
      }
      max(RR, JR) {
        return this._addCheck({
          kind: "max",
          value: RR.getTime(),
          message: gR.toString(JR)
        })
      }
      get minDate() {
        let RR = null;
        for (const JR of this._def.checks) "min" === JR.kind && (null === RR || JR.value > RR) && (RR = JR.value);
        return null != RR ? new Date(RR) : null
      }
      get maxDate() {
        let RR = null;
        for (const JR of this._def.checks) "max" === JR.kind && (null === RR || JR.value < RR) && (RR = JR.value);
        return null != RR ? new Date(RR) : null
      }
    }
    YR.create = RR => new YR({
      checks: [],
      coerce: (null === RR || void 0 === RR ? void 0 : RR.coerce) || !1,
      typeName: NJ.ZodDate,
      ...OR(RR)
    });
    class kR extends xR {
      _parse(RR) {
        if (this._getType(RR) !== VR.symbol) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.symbol,
            received: JR.parsedType
          }), AR
        }
        return XR(RR.data)
      }
    }
    kR.create = RR => new kR({
      typeName: NJ.ZodSymbol,
      ...OR(RR)
    });
    class QR extends xR {
      _parse(RR) {
        if (this._getType(RR) !== VR.undefined) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.undefined,
            received: JR.parsedType
          }), AR
        }
        return XR(RR.data)
      }
    }
    QR.create = RR => new QR({
      typeName: NJ.ZodUndefined,
      ...OR(RR)
    });
    class FR extends xR {
      _parse(RR) {
        if (this._getType(RR) !== VR.null) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.null,
            received: JR.parsedType
          }), AR
        }
        return XR(RR.data)
      }
    }
    FR.create = RR => new FR({
      typeName: NJ.ZodNull,
      ...OR(RR)
    });
    class TR extends xR {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(RR) {
        return XR(RR.data)
      }
    }
    TR.create = RR => new TR({
      typeName: NJ.ZodAny,
      ...OR(RR)
    });
    class sR extends xR {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(RR) {
        return XR(RR.data)
      }
    }
    sR.create = RR => new sR({
      typeName: NJ.ZodUnknown,
      ...OR(RR)
    });
    class hR extends xR {
      _parse(RR) {
        const JR = this._getOrReturnCtx(RR);
        return UR(JR, {
          code: wR.invalid_type,
          expected: VR.never,
          received: JR.parsedType
        }), AR
      }
    }
    hR.create = RR => new hR({
      typeName: NJ.ZodNever,
      ...OR(RR)
    });
    class RJ extends xR {
      _parse(RR) {
        if (this._getType(RR) !== VR.undefined) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.void,
            received: JR.parsedType
          }), AR
        }
        return XR(RR.data)
      }
    }
    RJ.create = RR => new RJ({
      typeName: NJ.ZodVoid,
      ...OR(RR)
    });
    class JJ extends xR {
      _parse(RR) {
        const {
          ctx: JR,
          status: GR
        } = this._processInputParams(RR), yR = this._def;
        if (JR.parsedType !== VR.array) return UR(JR, {
          code: wR.invalid_type,
          expected: VR.array,
          received: JR.parsedType
        }), AR;
        if (null !== yR.exactLength) {
          const RR = JR.data.length > yR.exactLength.value,
            tR = JR.data.length < yR.exactLength.value;
          (RR || tR) && (UR(JR, {
            code: RR ? wR.too_big : wR.too_small,
            minimum: tR ? yR.exactLength.value : void 0,
            maximum: RR ? yR.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: yR.exactLength.message
          }), GR.Ja())
        }
        if (null !== yR.minLength && JR.data.length < yR.minLength.value && (UR(JR, {
            code: wR.too_small,
            minimum: yR.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: yR.minLength.message
          }), GR.Ja()), null !== yR.maxLength && JR.data.length > yR.maxLength.value && (UR(JR, {
            code: wR.too_big,
            maximum: yR.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: yR.maxLength.message
          }), GR.Ja()), JR.common.async) return Promise.all([...JR.data].map(((RR, GR) => yR.type._parseAsync(new bR(JR, RR, JR.path, GR))))).then((RR => WR.mergeArray(GR, RR)));
        const tR = [...JR.data].map(((RR, GR) => yR.type._parseSync(new bR(JR, RR, JR.path, GR))));
        return WR.mergeArray(GR, tR)
      }
      get element() {
        return this._def.type
      }
      min(RR, JR) {
        return new JJ({
          ...this._def,
          minLength: {
            value: RR,
            message: gR.toString(JR)
          }
        })
      }
      max(RR, JR) {
        return new JJ({
          ...this._def,
          maxLength: {
            value: RR,
            message: gR.toString(JR)
          }
        })
      }
      length(RR, JR) {
        return new JJ({
          ...this._def,
          exactLength: {
            value: RR,
            message: gR.toString(JR)
          }
        })
      }
      nonempty(RR) {
        return this.min(1, RR)
      }
    }

    function GJ(RR) {
      if (RR instanceof yJ) {
        const JR = {};
        for (const GR in RR.shape) {
          const yR = RR.shape[GR];
          JR[GR] = CJ.create(GJ(yR))
        }
        return new yJ({
          ...RR._def,
          shape: () => JR
        })
      }
      return RR instanceof JJ ? new JJ({
        ...RR._def,
        type: GJ(RR.element)
      }) : RR instanceof CJ ? CJ.create(GJ(RR.unwrap())) : RR instanceof XJ ? XJ.create(GJ(RR.unwrap())) : RR instanceof fJ ? fJ.create(RR.items.map((RR => GJ(RR)))) : RR
    }
    JJ.create = (RR, JR) => new JJ({
      type: RR,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: NJ.ZodArray,
      ...OR(JR)
    });
    class yJ extends xR {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const RR = this._def.shape(),
          JR = qR.objectKeys(RR);
        return this._cached = {
          shape: RR,
          keys: JR
        }
      }
      _parse(RR) {
        if (this._getType(RR) !== VR.object) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.object,
            received: JR.parsedType
          }), AR
        }
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR), {
          shape: yR,
          keys: tR
        } = this._getCached(), uR = [];
        if (!(this._def.catchall instanceof hR && "strip" === this._def.unknownKeys))
          for (const qR in GR.data) tR.includes(qR) || uR.push(qR);
        const ZR = [];
        for (const qR of tR) {
          const RR = yR[qR],
            JR = GR.data[qR];
          ZR.push({
            key: {
              status: "valid",
              value: qR
            },
            value: RR._parse(new bR(GR, JR, GR.path, qR)),
            alwaysSet: qR in GR.data
          })
        }
        if (this._def.catchall instanceof hR) {
          const RR = this._def.unknownKeys;
          if ("passthrough" === RR)
            for (const JR of uR) ZR.push({
              key: {
                status: "valid",
                value: JR
              },
              value: {
                status: "valid",
                value: GR.data[JR]
              }
            });
          else if ("strict" === RR) uR.length > 0 && (UR(GR, {
            code: wR.unrecognized_keys,
            keys: uR
          }), JR.Ja());
          else if ("strip" !== RR) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const RR = this._def.catchall;
          for (const JR of uR) {
            const yR = GR.data[JR];
            ZR.push({
              key: {
                status: "valid",
                value: JR
              },
              value: RR._parse(new bR(GR, yR, GR.path, JR)),
              alwaysSet: JR in GR.data
            })
          }
        }
        return GR.common.async ? Promise.resolve().then((async () => {
          const RR = [];
          for (const JR of ZR) {
            const GR = await JR.key;
            RR.push({
              key: GR,
              value: await JR.value,
              alwaysSet: JR.alwaysSet
            })
          }
          return RR
        })).then((RR => WR.mergeObjectSync(JR, RR))) : WR.mergeObjectSync(JR, ZR)
      }
      get shape() {
        return this._def.shape()
      }
      strict(RR) {
        return gR.errToObj, new yJ({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== RR ? {
            errorMap: (JR, GR) => {
              var yR, tR, uR, ZR;
              const qR = null !== (uR = null === (tR = (yR = this._def).errorMap) || void 0 === tR ? void 0 : tR.call(yR, JR, GR).message) && void 0 !== uR ? uR : GR.defaultError;
              return "unrecognized_keys" === JR.code ? {
                message: null !== (ZR = gR.errToObj(RR).message) && void 0 !== ZR ? ZR : qR
              } : {
                message: qR
              }
            }
          } : {}
        })
      }
      strip() {
        return new yJ({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new yJ({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(RR) {
        return new yJ({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...RR
          })
        })
      }
      merge(RR) {
        return new yJ({
          unknownKeys: RR._def.unknownKeys,
          catchall: RR._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...RR._def.shape()
          }),
          typeName: NJ.ZodObject
        })
      }
      setKey(RR, JR) {
        return this.augment({
          [RR]: JR
        })
      }
      catchall(RR) {
        return new yJ({
          ...this._def,
          catchall: RR
        })
      }
      Ur(RR) {
        const JR = {};
        return qR.objectKeys(RR).forEach((GR => {
          RR[GR] && this.shape[GR] && (JR[GR] = this.shape[GR])
        })), new yJ({
          ...this._def,
          shape: () => JR
        })
      }
      omit(RR) {
        const JR = {};
        return qR.objectKeys(this.shape).forEach((GR => {
          RR[GR] || (JR[GR] = this.shape[GR])
        })), new yJ({
          ...this._def,
          shape: () => JR
        })
      }
      deepPartial() {
        return GJ(this)
      }
      partial(RR) {
        const JR = {};
        return qR.objectKeys(this.shape).forEach((GR => {
          const yR = this.shape[GR];
          RR && !RR[GR] ? JR[GR] = yR : JR[GR] = yR.optional()
        })), new yJ({
          ...this._def,
          shape: () => JR
        })
      }
      required(RR) {
        const JR = {};
        return qR.objectKeys(this.shape).forEach((GR => {
          if (RR && !RR[GR]) JR[GR] = this.shape[GR];
          else {
            let RR = this.shape[GR];
            for (; RR instanceof CJ;) RR = RR._def.innerType;
            JR[GR] = RR
          }
        })), new yJ({
          ...this._def,
          shape: () => JR
        })
      }
      keyof() {
        return LJ(qR.objectKeys(this.shape))
      }
    }
    yJ.create = (RR, JR) => new yJ({
      shape: () => RR,
      unknownKeys: "strip",
      catchall: hR.create(),
      typeName: NJ.ZodObject,
      ...OR(JR)
    }), yJ.strictCreate = (RR, JR) => new yJ({
      shape: () => RR,
      unknownKeys: "strict",
      catchall: hR.create(),
      typeName: NJ.ZodObject,
      ...OR(JR)
    }), yJ.lazycreate = (RR, JR) => new yJ({
      shape: RR,
      unknownKeys: "strip",
      catchall: hR.create(),
      typeName: NJ.ZodObject,
      ...OR(JR)
    });
    class tJ extends xR {
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR), GR = this._def.options;
        if (JR.common.async) return Promise.all(GR.map((async RR => {
          const GR = {
            ...JR,
            common: {
              ...JR.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await RR._parseAsync({
              data: JR.data,
              path: JR.path,
              parent: GR
            }),
            ctx: GR
          }
        }))).then((function(RR) {
          for (const JR of RR)
            if ("valid" === JR.result.status) return JR.result;
          for (const yR of RR)
            if ("Ja" === yR.result.status) return JR.common.issues.push(...yR.ctx.common.issues), yR.result;
          const GR = RR.map((RR => new rR(RR.ctx.common.issues)));
          return UR(JR, {
            code: wR.invalid_union,
            unionErrors: GR
          }), AR
        }));
        {
          let RR;
          const yR = [];
          for (const uR of GR) {
            const GR = {
                ...JR,
                common: {
                  ...JR.common,
                  issues: []
                },
                parent: null
              },
              tR = uR._parseSync({
                data: JR.data,
                path: JR.path,
                parent: GR
              });
            if ("valid" === tR.status) return tR;
            "Ja" !== tR.status || RR || (RR = {
              result: tR,
              ctx: GR
            }), GR.common.issues.length && yR.push(GR.common.issues)
          }
          if (RR) return JR.common.issues.push(...RR.ctx.common.issues), RR.result;
          const tR = yR.map((RR => new rR(RR)));
          return UR(JR, {
            code: wR.invalid_union,
            unionErrors: tR
          }), AR
        }
      }
      get options() {
        return this._def.options
      }
    }
    tJ.create = (RR, JR) => new tJ({
      options: RR,
      typeName: NJ.ZodUnion,
      ...OR(JR)
    });
    const uJ = RR => RR instanceof eJ ? uJ(RR.schema) : RR instanceof AJ ? uJ(RR.innerType()) : RR instanceof aJ ? [RR.value] : RR instanceof nJ ? RR.options : RR instanceof UJ ? Object.keys(RR.enum) : RR instanceof MJ ? uJ(RR._def.innerType) : RR instanceof QR ? [void 0] : RR instanceof FR ? [null] : null;
    class ZJ extends xR {
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR);
        if (JR.parsedType !== VR.object) return UR(JR, {
          code: wR.invalid_type,
          expected: VR.object,
          received: JR.parsedType
        }), AR;
        const GR = this.discriminator,
          yR = JR.data[GR],
          tR = this.optionsMap.get(yR);
        return tR ? JR.common.async ? tR._parseAsync({
          data: JR.data,
          path: JR.path,
          parent: JR
        }) : tR._parseSync({
          data: JR.data,
          path: JR.path,
          parent: JR
        }) : (UR(JR, {
          code: wR.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [GR]
        }), AR)
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
      static create(RR, JR, GR) {
        const yR = new Map;
        for (const tR of JR) {
          const JR = uJ(tR.shape[RR]);
          if (!JR) throw new Error(`A discriminator value for key \`${RR}\` could not be extracted from all schema options`);
          for (const GR of JR) {
            if (yR.has(GR)) throw new Error(`Discriminator property ${String(RR)} has duplicate value ${String(GR)}`);
            yR.set(GR, tR)
          }
        }
        return new ZJ({
          typeName: NJ.ZodDiscriminatedUnion,
          discriminator: RR,
          options: JR,
          optionsMap: yR,
          ...OR(GR)
        })
      }
    }

    function qJ(RR, JR) {
      const GR = KR(RR),
        yR = KR(JR);
      if (RR === JR) return {
        valid: !0,
        data: RR
      };
      if (GR === VR.object && yR === VR.object) {
        const GR = qR.objectKeys(JR),
          yR = qR.objectKeys(RR).filter((RR => -1 !== GR.indexOf(RR))),
          tR = {
            ...RR,
            ...JR
          };
        for (const uR of yR) {
          const GR = qJ(RR[uR], JR[uR]);
          if (!GR.valid) return {
            valid: !1
          };
          tR[uR] = GR.data
        }
        return {
          valid: !0,
          data: tR
        }
      }
      if (GR === VR.array && yR === VR.array) {
        if (RR.length !== JR.length) return {
          valid: !1
        };
        const GR = [];
        for (let yR = 0; yR < RR.length; yR++) {
          const tR = qJ(RR[yR], JR[yR]);
          if (!tR.valid) return {
            valid: !1
          };
          GR.push(tR.data)
        }
        return {
          valid: !0,
          data: GR
        }
      }
      return GR === VR.date && yR === VR.date && +RR === +JR ? {
        valid: !0,
        data: RR
      } : {
        valid: !1
      }
    }
    class iJ extends xR {
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR), yR = (RR, yR) => {
          if (MR(RR) || MR(yR)) return AR;
          const tR = qJ(RR.value, yR.value);
          return tR.valid ? ((BR(RR) || BR(yR)) && JR.Ja(), {
            status: JR.value,
            value: tR.data
          }) : (UR(GR, {
            code: wR.invalid_intersection_types
          }), AR)
        };
        return GR.common.async ? Promise.all([this._def.left._parseAsync({
          data: GR.data,
          path: GR.path,
          parent: GR
        }), this._def.right._parseAsync({
          data: GR.data,
          path: GR.path,
          parent: GR
        })]).then((RR => {
          let [JR, GR] = RR;
          return yR(JR, GR)
        })) : yR(this._def.left._parseSync({
          data: GR.data,
          path: GR.path,
          parent: GR
        }), this._def.right._parseSync({
          data: GR.data,
          path: GR.path,
          parent: GR
        }))
      }
    }
    iJ.create = (RR, JR, GR) => new iJ({
      left: RR,
      right: JR,
      typeName: NJ.ZodIntersection,
      ...OR(GR)
    });
    class fJ extends xR {
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR);
        if (GR.parsedType !== VR.array) return UR(GR, {
          code: wR.invalid_type,
          expected: VR.array,
          received: GR.parsedType
        }), AR;
        if (GR.data.length < this._def.items.length) return UR(GR, {
          code: wR.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), AR;
        !this._def.rest && GR.data.length > this._def.items.length && (UR(GR, {
          code: wR.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), JR.Ja());
        const yR = [...GR.data].map(((RR, JR) => {
          const yR = this._def.items[JR] || this._def.rest;
          return yR ? yR._parse(new bR(GR, RR, GR.path, JR)) : null
        })).filter((RR => !!RR));
        return GR.common.async ? Promise.all(yR).then((RR => WR.mergeArray(JR, RR))) : WR.mergeArray(JR, yR)
      }
      get items() {
        return this._def.items
      }
      rest(RR) {
        return new fJ({
          ...this._def,
          rest: RR
        })
      }
    }
    fJ.create = (RR, JR) => {
      if (!Array.isArray(RR)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new fJ({
        items: RR,
        typeName: NJ.ZodTuple,
        rest: null,
        ...OR(JR)
      })
    };
    class VJ extends xR {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR);
        if (GR.parsedType !== VR.object) return UR(GR, {
          code: wR.invalid_type,
          expected: VR.object,
          received: GR.parsedType
        }), AR;
        const yR = [],
          tR = this._def.keyType,
          uR = this._def.valueType;
        for (const ZR in GR.data) yR.push({
          key: tR._parse(new bR(GR, ZR, GR.path, ZR)),
          value: uR._parse(new bR(GR, GR.data[ZR], GR.path, ZR))
        });
        return GR.common.async ? WR.mergeObjectAsync(JR, yR) : WR.mergeObjectSync(JR, yR)
      }
      get element() {
        return this._def.valueType
      }
      static create(RR, JR, GR) {
        return new VJ(JR instanceof xR ? {
          keyType: RR,
          valueType: JR,
          typeName: NJ.ZodRecord,
          ...OR(GR)
        } : {
          keyType: zR.create(),
          valueType: RR,
          typeName: NJ.ZodRecord,
          ...OR(JR)
        })
      }
    }
    class KJ extends xR {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR);
        if (GR.parsedType !== VR.map) return UR(GR, {
          code: wR.invalid_type,
          expected: VR.map,
          received: GR.parsedType
        }), AR;
        const yR = this._def.keyType,
          tR = this._def.valueType,
          uR = [...GR.data.entries()].map(((RR, JR) => {
            let [uR, ZR] = RR;
            return {
              key: yR._parse(new bR(GR, uR, GR.path, [JR, "key"])),
              value: tR._parse(new bR(GR, ZR, GR.path, [JR, "value"]))
            }
          }));
        if (GR.common.async) {
          const RR = new Map;
          return Promise.resolve().then((async () => {
            for (const GR of uR) {
              const yR = await GR.key,
                tR = await GR.value;
              if ("aborted" === yR.status || "aborted" === tR.status) return AR;
              "Ja" !== yR.status && "Ja" !== tR.status || JR.Ja(), RR.set(yR.value, tR.value)
            }
            return {
              status: JR.value,
              value: RR
            }
          }))
        } {
          const RR = new Map;
          for (const GR of uR) {
            const yR = GR.key,
              tR = GR.value;
            if ("aborted" === yR.status || "aborted" === tR.status) return AR;
            "Ja" !== yR.status && "Ja" !== tR.status || JR.Ja(), RR.set(yR.value, tR.value)
          }
          return {
            status: JR.value,
            value: RR
          }
        }
      }
    }
    KJ.create = (RR, JR, GR) => new KJ({
      valueType: JR,
      keyType: RR,
      typeName: NJ.ZodMap,
      ...OR(GR)
    });
    class wJ extends xR {
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR);
        if (GR.parsedType !== VR.set) return UR(GR, {
          code: wR.invalid_type,
          expected: VR.set,
          received: GR.parsedType
        }), AR;
        const yR = this._def;
        null !== yR.minSize && GR.data.size < yR.minSize.value && (UR(GR, {
          code: wR.too_small,
          minimum: yR.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: yR.minSize.message
        }), JR.Ja()), null !== yR.maxSize && GR.data.size > yR.maxSize.value && (UR(GR, {
          code: wR.too_big,
          maximum: yR.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: yR.maxSize.message
        }), JR.Ja());
        const tR = this._def.valueType;

        function uR(RR) {
          const GR = new Set;
          for (const yR of RR) {
            if ("aborted" === yR.status) return AR;
            "Ja" === yR.status && JR.Ja(), GR.add(yR.value)
          }
          return {
            status: JR.value,
            value: GR
          }
        }
        const ZR = [...GR.data.values()].map(((RR, JR) => tR._parse(new bR(GR, RR, GR.path, JR))));
        return GR.common.async ? Promise.all(ZR).then((RR => uR(RR))) : uR(ZR)
      }
      min(RR, JR) {
        return new wJ({
          ...this._def,
          minSize: {
            value: RR,
            message: gR.toString(JR)
          }
        })
      }
      max(RR, JR) {
        return new wJ({
          ...this._def,
          maxSize: {
            value: RR,
            message: gR.toString(JR)
          }
        })
      }
      size(RR, JR) {
        return this.min(RR, JR).max(RR, JR)
      }
      nonempty(RR) {
        return this.min(1, RR)
      }
    }
    wJ.create = (RR, JR) => new wJ({
      valueType: RR,
      minSize: null,
      maxSize: null,
      typeName: NJ.ZodSet,
      ...OR(JR)
    });
    class rJ extends xR {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR);
        if (JR.parsedType !== VR.function) return UR(JR, {
          code: wR.invalid_type,
          expected: VR.function,
          received: JR.parsedType
        }), AR;

        function GR(RR, GR) {
          return nR({
            data: RR,
            path: JR.path,
            errorMaps: [JR.common.contextualErrorMap, JR.schemaErrorMap, LR(), eR].filter((RR => !!RR)),
            issueData: {
              code: wR.invalid_arguments,
              argumentsError: GR
            }
          })
        }

        function yR(RR, GR) {
          return nR({
            data: RR,
            path: JR.path,
            errorMaps: [JR.common.contextualErrorMap, JR.schemaErrorMap, LR(), eR].filter((RR => !!RR)),
            issueData: {
              code: wR.invalid_return_type,
              returnTypeError: GR
            }
          })
        }
        const tR = {
            errorMap: JR.common.contextualErrorMap
          },
          uR = JR.data;
        if (this._def.returns instanceof WJ) {
          const RR = this;
          return XR((async function() {
            for (var JR = arguments.length, ZR = new Array(JR), qR = 0; qR < JR; qR++) ZR[qR] = arguments[qR];
            const iR = new rR([]),
              fR = await RR._def.args.parseAsync(ZR, tR).catch((RR => {
                throw iR.addIssue(GR(ZR, RR)), iR
              })),
              VR = await Reflect.apply(uR, this, fR);
            return await RR._def.returns._def.type.parseAsync(VR, tR).catch((RR => {
              throw iR.addIssue(yR(VR, RR)), iR
            }))
          }))
        } {
          const RR = this;
          return XR((function() {
            for (var JR = arguments.length, ZR = new Array(JR), qR = 0; qR < JR; qR++) ZR[qR] = arguments[qR];
            const iR = RR._def.args.safeParse(ZR, tR);
            if (!iR.success) throw new rR([GR(ZR, iR.error)]);
            const fR = Reflect.apply(uR, this, iR.data),
              VR = RR._def.returns.safeParse(fR, tR);
            if (!VR.success) throw new rR([yR(fR, VR.error)]);
            return VR.data
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
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return new rJ({
          ...this._def,
          args: fJ.create(JR).rest(sR.create())
        })
      }
      returns(RR) {
        return new rJ({
          ...this._def,
          returns: RR
        })
      }
      implement(RR) {
        return this.parse(RR)
      }
      strictImplement(RR) {
        return this.parse(RR)
      }
      static create(RR, JR, GR) {
        return new rJ({
          args: RR || fJ.create([]).rest(sR.create()),
          returns: JR || sR.create(),
          typeName: NJ.ZodFunction,
          ...OR(GR)
        })
      }
    }
    class eJ extends xR {
      get schema() {
        return this._def.getter()
      }
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR);
        return this._def.getter()._parse({
          data: JR.data,
          path: JR.path,
          parent: JR
        })
      }
    }
    eJ.create = (RR, JR) => new eJ({
      getter: RR,
      typeName: NJ.ZodLazy,
      ...OR(JR)
    });
    class aJ extends xR {
      _parse(RR) {
        if (RR.data !== this._def.value) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            received: JR.data,
            code: wR.invalid_literal,
            expected: this._def.value
          }), AR
        }
        return {
          status: "valid",
          value: RR.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function LJ(RR, JR) {
      return new nJ({
        values: RR,
        typeName: NJ.ZodEnum,
        ...OR(JR)
      })
    }
    aJ.create = (RR, JR) => new aJ({
      value: RR,
      typeName: NJ.ZodLiteral,
      ...OR(JR)
    });
    class nJ extends xR {
      _parse(RR) {
        if ("string" !== typeof RR.data) {
          const JR = this._getOrReturnCtx(RR),
            GR = this._def.values;
          return UR(JR, {
            expected: qR.joinValues(GR),
            received: JR.parsedType,
            code: wR.invalid_type
          }), AR
        }
        if (-1 === this._def.values.indexOf(RR.data)) {
          const JR = this._getOrReturnCtx(RR),
            GR = this._def.values;
          return UR(JR, {
            received: JR.data,
            code: wR.invalid_enum_value,
            options: GR
          }), AR
        }
        return XR(RR.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const RR = {};
        for (const JR of this._def.values) RR[JR] = JR;
        return RR
      }
      get Values() {
        const RR = {};
        for (const JR of this._def.values) RR[JR] = JR;
        return RR
      }
      get Enum() {
        const RR = {};
        for (const JR of this._def.values) RR[JR] = JR;
        return RR
      }
      extract(RR) {
        return nJ.create(RR)
      }
      exclude(RR) {
        return nJ.create(this.options.filter((JR => !RR.includes(JR))))
      }
    }
    nJ.create = LJ;
    class UJ extends xR {
      _parse(RR) {
        const JR = qR.getValidEnumValues(this._def.values),
          GR = this._getOrReturnCtx(RR);
        if (GR.parsedType !== VR.string && GR.parsedType !== VR.number) {
          const RR = qR.objectValues(JR);
          return UR(GR, {
            expected: qR.joinValues(RR),
            received: GR.parsedType,
            code: wR.invalid_type
          }), AR
        }
        if (-1 === JR.indexOf(RR.data)) {
          const RR = qR.objectValues(JR);
          return UR(GR, {
            received: GR.data,
            code: wR.invalid_enum_value,
            options: RR
          }), AR
        }
        return XR(RR.data)
      }
      get enum() {
        return this._def.values
      }
    }
    UJ.create = (RR, JR) => new UJ({
      values: RR,
      typeName: NJ.ZodNativeEnum,
      ...OR(JR)
    });
    class WJ extends xR {
      unwrap() {
        return this._def.type
      }
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR);
        if (JR.parsedType !== VR.promise && !1 === JR.common.async) return UR(JR, {
          code: wR.invalid_type,
          expected: VR.promise,
          received: JR.parsedType
        }), AR;
        const GR = JR.parsedType === VR.promise ? JR.data : Promise.resolve(JR.data);
        return XR(GR.then((RR => this._def.type.parseAsync(RR, {
          path: JR.path,
          errorMap: JR.common.contextualErrorMap
        }))))
      }
    }
    WJ.create = (RR, JR) => new WJ({
      type: RR,
      typeName: NJ.ZodPromise,
      ...OR(JR)
    });
    class AJ extends xR {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === NJ.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR), yR = this._def.effect || null, tR = {
          addIssue: RR => {
            UR(GR, RR), RR.fatal ? JR.abort() : JR.Ja()
          },
          get path() {
            return GR.path
          }
        };
        if (tR.addIssue = tR.addIssue.bind(tR), "preprocess" === yR.type) {
          const RR = yR.transform(GR.data, tR);
          return GR.common.issues.length ? {
            status: "Ja",
            value: GR.data
          } : GR.common.async ? Promise.resolve(RR).then((RR => this._def.schema._parseAsync({
            data: RR,
            path: GR.path,
            parent: GR
          }))) : this._def.schema._parseSync({
            data: RR,
            path: GR.path,
            parent: GR
          })
        }
        if ("refinement" === yR.type) {
          const RR = RR => {
            const JR = yR.refinement(RR, tR);
            if (GR.common.async) return Promise.resolve(JR);
            if (JR instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return RR
          };
          if (!1 === GR.common.async) {
            const yR = this._def.schema._parseSync({
              data: GR.data,
              path: GR.path,
              parent: GR
            });
            return "aborted" === yR.status ? AR : ("Ja" === yR.status && JR.Ja(), RR(yR.value), {
              status: JR.value,
              value: yR.value
            })
          }
          return this._def.schema._parseAsync({
            data: GR.data,
            path: GR.path,
            parent: GR
          }).then((GR => "aborted" === GR.status ? AR : ("Ja" === GR.status && JR.Ja(), RR(GR.value).then((() => ({
            status: JR.value,
            value: GR.value
          }))))))
        }
        if ("transform" === yR.type) {
          if (!1 === GR.common.async) {
            const RR = this._def.schema._parseSync({
              data: GR.data,
              path: GR.path,
              parent: GR
            });
            if (!lR(RR)) return RR;
            const uR = yR.transform(RR.value, tR);
            if (uR instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: JR.value,
              value: uR
            }
          }
          return this._def.schema._parseAsync({
            data: GR.data,
            path: GR.path,
            parent: GR
          }).then((RR => lR(RR) ? Promise.resolve(yR.transform(RR.value, tR)).then((RR => ({
            status: JR.value,
            value: RR
          }))) : RR))
        }
        qR.assertNever(yR)
      }
    }
    AJ.create = (RR, JR, GR) => new AJ({
      schema: RR,
      typeName: NJ.ZodEffects,
      effect: JR,
      ...OR(GR)
    }), AJ.createWithPreprocess = (RR, JR, GR) => new AJ({
      schema: JR,
      effect: {
        type: "preprocess",
        transform: RR
      },
      typeName: NJ.ZodEffects,
      ...OR(GR)
    });
    class CJ extends xR {
      _parse(RR) {
        return this._getType(RR) === VR.undefined ? XR(void 0) : this._def.innerType._parse(RR)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    CJ.create = (RR, JR) => new CJ({
      innerType: RR,
      typeName: NJ.ZodOptional,
      ...OR(JR)
    });
    class XJ extends xR {
      _parse(RR) {
        return this._getType(RR) === VR.null ? XR(null) : this._def.innerType._parse(RR)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    XJ.create = (RR, JR) => new XJ({
      innerType: RR,
      typeName: NJ.ZodNullable,
      ...OR(JR)
    });
    class MJ extends xR {
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR);
        let GR = JR.data;
        return JR.parsedType === VR.undefined && (GR = this._def.defaultValue()), this._def.innerType._parse({
          data: GR,
          path: JR.path,
          parent: JR
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    MJ.create = (RR, JR) => new MJ({
      innerType: RR,
      typeName: NJ.ZodDefault,
      defaultValue: "function" === typeof JR.default ? JR.default : () => JR.default,
      ...OR(JR)
    });
    class BJ extends xR {
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR), GR = {
          ...JR,
          common: {
            ...JR.common,
            issues: []
          }
        }, yR = this._def.innerType._parse({
          data: GR.data,
          path: GR.path,
          parent: {
            ...GR
          }
        });
        return pR(yR) ? yR.then((RR => ({
          status: "valid",
          value: "valid" === RR.status ? RR.value : this._def.catchValue({
            get error() {
              return new rR(GR.common.issues)
            },
            input: GR.data
          })
        }))) : {
          status: "valid",
          value: "valid" === yR.status ? yR.value : this._def.catchValue({
            get error() {
              return new rR(GR.common.issues)
            },
            input: GR.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    BJ.create = (RR, JR) => new BJ({
      innerType: RR,
      typeName: NJ.ZodCatch,
      catchValue: "function" === typeof JR.catch ? JR.catch : () => JR.catch,
      ...OR(JR)
    });
    class lJ extends xR {
      _parse(RR) {
        if (this._getType(RR) !== VR.nan) {
          const JR = this._getOrReturnCtx(RR);
          return UR(JR, {
            code: wR.invalid_type,
            expected: VR.nan,
            received: JR.parsedType
          }), AR
        }
        return {
          status: "valid",
          value: RR.data
        }
      }
    }
    lJ.create = RR => new lJ({
      typeName: NJ.ZodNaN,
      ...OR(RR)
    });
    const pJ = Symbol("zod_brand");
    class gJ extends xR {
      _parse(RR) {
        const {
          ctx: JR
        } = this._processInputParams(RR), GR = JR.data;
        return this._def.type._parse({
          data: GR,
          path: JR.path,
          parent: JR
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class bJ extends xR {
      _parse(RR) {
        const {
          status: JR,
          ctx: GR
        } = this._processInputParams(RR);
        if (GR.common.async) {
          return (async () => {
            const RR = await this._def.in._parseAsync({
              data: GR.data,
              path: GR.path,
              parent: GR
            });
            return "aborted" === RR.status ? AR : "Ja" === RR.status ? (JR.Ja(), CR(RR.value)) : this._def.out._parseAsync({
              data: RR.value,
              path: GR.path,
              parent: GR
            })
          })()
        } {
          const RR = this._def.in._parseSync({
            data: GR.data,
            path: GR.path,
            parent: GR
          });
          return "aborted" === RR.status ? AR : "Ja" === RR.status ? (JR.Ja(), {
            status: "Ja",
            value: RR.value
          }) : this._def.out._parseSync({
            data: RR.value,
            path: GR.path,
            parent: GR
          })
        }
      }
      static create(RR, JR) {
        return new bJ({
          in: RR,
          out: JR,
          typeName: NJ.ZodPipeline
        })
      }
    }
    class vJ extends xR {
      _parse(RR) {
        const JR = this._def.innerType._parse(RR);
        return lR(JR) && (JR.value = Object.freeze(JR.value)), JR
      }
    }
    vJ.create = (RR, JR) => new vJ({
      innerType: RR,
      typeName: NJ.ZodReadonly,
      ...OR(JR)
    });
    const OJ = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 ? arguments[2] : void 0;
        return RR ? TR.create().superRefine(((yR, tR) => {
          var uR, ZR;
          if (!RR(yR)) {
            const RR = "function" === typeof JR ? JR(yR) : "string" === typeof JR ? {
                message: JR
              } : JR,
              qR = null === (ZR = null !== (uR = RR.fatal) && void 0 !== uR ? uR : GR) || void 0 === ZR || ZR,
              iR = "string" === typeof RR ? {
                message: RR
              } : RR;
            tR.addIssue({
              code: "custom",
              ...iR,
              fatal: qR
            })
          }
        })) : TR.create()
      },
      xJ = {
        object: yJ.lazycreate
      };
    var NJ;
    ! function(RR) {
      RR.ZodString = "ZodString", RR.ZodNumber = "ZodNumber", RR.ZodNaN = "ZodNaN", RR.ZodBigInt = "ZodBigInt", RR.ZodBoolean = "ZodBoolean", RR.ZodDate = "ZodDate", RR.ZodSymbol = "ZodSymbol", RR.ZodUndefined = "ZodUndefined", RR.ZodNull = "ZodNull", RR.ZodAny = "ZodAny", RR.ZodUnknown = "ZodUnknown", RR.ZodNever = "ZodNever", RR.ZodVoid = "ZodVoid", RR.ZodArray = "ZodArray", RR.ZodObject = "ZodObject", RR.ZodUnion = "ZodUnion", RR.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", RR.ZodIntersection = "ZodIntersection", RR.ZodTuple = "ZodTuple", RR.ZodRecord = "ZodRecord", RR.ZodMap = "ZodMap", RR.ZodSet = "ZodSet", RR.ZodFunction = "ZodFunction", RR.ZodLazy = "ZodLazy", RR.ZodLiteral = "ZodLiteral", RR.ZodEnum = "ZodEnum", RR.ZodEffects = "ZodEffects", RR.ZodNativeEnum = "ZodNativeEnum", RR.ZodOptional = "ZodOptional", RR.ZodNullable = "ZodNullable", RR.ZodDefault = "ZodDefault", RR.ZodCatch = "ZodCatch", RR.ZodPromise = "ZodPromise", RR.ZodBranded = "ZodBranded", RR.ZodPipeline = "ZodPipeline", RR.ZodReadonly = "ZodReadonly"
    }(NJ || (NJ = {}));
    const DJ = zR.create,
      HJ = jR.create,
      oJ = lJ.create,
      cJ = dR.create,
      PJ = ER.create,
      IJ = YR.create,
      mJ = kR.create,
      zJ = QR.create,
      SJ = FR.create,
      jJ = TR.create,
      dJ = sR.create,
      EJ = hR.create,
      YJ = RJ.create,
      kJ = JJ.create,
      QJ = yJ.create,
      FJ = yJ.strictCreate,
      TJ = tJ.create,
      sJ = ZJ.create,
      hJ = iJ.create,
      RG = fJ.create,
      JG = VJ.create,
      GG = KJ.create,
      yG = wJ.create,
      tG = rJ.create,
      uG = eJ.create,
      ZG = aJ.create,
      qG = nJ.create,
      iG = UJ.create,
      fG = WJ.create,
      VG = AJ.create,
      KG = CJ.create,
      wG = XJ.create,
      rG = AJ.createWithPreprocess,
      eG = bJ.create,
      aG = {
        string: RR => zR.create({
          ...RR,
          coerce: !0
        }),
        number: RR => jR.create({
          ...RR,
          coerce: !0
        }),
        boolean: RR => ER.create({
          ...RR,
          coerce: !0
        }),
        bigint: RR => dR.create({
          ...RR,
          coerce: !0
        }),
        date: RR => YR.create({
          ...RR,
          coerce: !0
        })
      },
      LG = AR;
    var nG = Object.freeze({
        __proto__: null,
        defaultErrorMap: eR,
        setErrorMap: function(RR) {
          aR = RR
        },
        getErrorMap: LR,
        makeIssue: nR,
        EMPTY_PATH: [],
        addIssueToContext: UR,
        ParseStatus: WR,
        INVALID: AR,
        DIRTY: CR,
        OK: XR,
        isAborted: MR,
        isDirty: BR,
        isValid: lR,
        isAsync: pR,
        get util() {
          return qR
        },
        get objectUtil() {
          return iR
        },
        ZodParsedType: VR,
        getParsedType: KR,
        ZodType: xR,
        ZodString: zR,
        ZodNumber: jR,
        ZodBigInt: dR,
        ZodBoolean: ER,
        ZodDate: YR,
        ZodSymbol: kR,
        ZodUndefined: QR,
        ZodNull: FR,
        ZodAny: TR,
        ZodUnknown: sR,
        ZodNever: hR,
        ZodVoid: RJ,
        ZodArray: JJ,
        ZodObject: yJ,
        ZodUnion: tJ,
        ZodDiscriminatedUnion: ZJ,
        ZodIntersection: iJ,
        ZodTuple: fJ,
        ZodRecord: VJ,
        ZodMap: KJ,
        ZodSet: wJ,
        ZodFunction: rJ,
        ZodLazy: eJ,
        ZodLiteral: aJ,
        ZodEnum: nJ,
        ZodNativeEnum: UJ,
        ZodPromise: WJ,
        ZodEffects: AJ,
        ZodTransformer: AJ,
        ZodOptional: CJ,
        ZodNullable: XJ,
        ZodDefault: MJ,
        ZodCatch: BJ,
        ZodNaN: lJ,
        BRAND: pJ,
        ZodBranded: gJ,
        ZodPipeline: bJ,
        ZodReadonly: vJ,
        custom: OJ,
        Schema: xR,
        ZodSchema: xR,
        late: xJ,
        get ZodFirstPartyTypeKind() {
          return NJ
        },
        coerce: aG,
        any: jJ,
        array: kJ,
        bigint: cJ,
        boolean: PJ,
        date: IJ,
        discriminatedUnion: sJ,
        effect: VG,
        enum: qG,
        function: tG,
        instanceof: function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${RR.name}`
          };
          return OJ((JR => JR instanceof RR), JR)
        },
        intersection: hJ,
        lazy: uG,
        literal: ZG,
        map: GG,
        nan: oJ,
        nativeEnum: iG,
        never: EJ,
        null: SJ,
        nullable: wG,
        number: HJ,
        object: QJ,
        oboolean: () => PJ().optional(),
        onumber: () => HJ().optional(),
        optional: KG,
        ostring: () => DJ().optional(),
        pipeline: eG,
        preprocess: rG,
        promise: fG,
        record: JG,
        set: yG,
        strictObject: FJ,
        string: DJ,
        symbol: mJ,
        transformer: VG,
        tuple: RG,
        undefined: zJ,
        union: TJ,
        unknown: dJ,
        void: YJ,
        NEVER: LG,
        ZodIssueCode: wR,
        quotelessJson: RR => JSON.stringify(RR, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: rR
      }),
      UG = {
        exports: {}
      };
    ! function(RR) {
      var JR = function(RR) {
        var GR = 1e7,
          yR = 9007199254740992,
          tR = wR(yR),
          uR = "0123456789abcdefghijklmnopqrstuvwxyz",
          ZR = "function" === typeof BigInt;

        function qR(RR, JR, GR, yR) {
          return "undefined" === typeof RR ? qR[0] : "undefined" !== typeof JR && (10 !== +JR || GR) ? ER(RR, JR, GR, yR) : TR(RR)
        }

        function iR(RR, JR) {
          this.value = RR, this.sign = JR, this.isSmall = !1
        }

        function fR(RR) {
          this.value = RR, this.sign = RR < 0, this.isSmall = !0
        }

        function VR(RR) {
          this.value = RR
        }

        function KR(RR) {
          return -yR < RR && RR < yR
        }

        function wR(RR) {
          return RR < 1e7 ? [RR] : RR < 1e14 ? [RR % 1e7, Math.floor(RR / 1e7)] : [RR % 1e7, Math.floor(RR / 1e7) % 1e7, Math.floor(RR / 1e14)]
        }

        function rR(RR) {
          eR(RR);
          var JR = RR.length;
          if (JR < 4 && OR(RR, tR) < 0) switch (JR) {
            case 0:
              return 0;
            case 1:
              return RR[0];
            case 2:
              return RR[0] + RR[1] * GR;
            default:
              return RR[0] + (RR[1] + RR[2] * GR) * GR
          }
          return RR
        }

        function eR(RR) {
          for (var JR = RR.length; 0 === RR[--JR];);
          RR.length = JR + 1
        }

        function aR(RR) {
          for (var JR = new Array(RR), GR = -1; ++GR < RR;) JR[GR] = 0;
          return JR
        }

        function LR(RR) {
          return RR > 0 ? Math.floor(RR) : Math.ceil(RR)
        }

        function nR(RR, JR) {
          var yR, tR, uR = RR.length,
            ZR = JR.length,
            qR = new Array(uR),
            iR = 0,
            fR = GR;
          for (tR = 0; tR < ZR; tR++) iR = (yR = RR[tR] + JR[tR] + iR) >= fR ? 1 : 0, qR[tR] = yR - iR * fR;
          for (; tR < uR;) iR = (yR = RR[tR] + iR) === fR ? 1 : 0, qR[tR++] = yR - iR * fR;
          return iR > 0 && qR.push(iR), qR
        }

        function UR(RR, JR) {
          return RR.length >= JR.length ? nR(RR, JR) : nR(JR, RR)
        }

        function WR(RR, JR) {
          var yR, tR, uR = RR.length,
            ZR = new Array(uR),
            qR = GR;
          for (tR = 0; tR < uR; tR++) yR = RR[tR] - qR + JR, JR = Math.floor(yR / qR), ZR[tR] = yR - JR * qR, JR += 1;
          for (; JR > 0;) ZR[tR++] = JR % qR, JR = Math.floor(JR / qR);
          return ZR
        }

        function AR(RR, JR) {
          var yR, tR, uR = RR.length,
            ZR = JR.length,
            qR = new Array(uR),
            iR = 0,
            fR = GR;
          for (yR = 0; yR < ZR; yR++)(tR = RR[yR] - iR - JR[yR]) < 0 ? (tR += fR, iR = 1) : iR = 0, qR[yR] = tR;
          for (yR = ZR; yR < uR; yR++) {
            if (!((tR = RR[yR] - iR) < 0)) {
              qR[yR++] = tR;
              break
            }
            tR += fR, qR[yR] = tR
          }
          for (; yR < uR; yR++) qR[yR] = RR[yR];
          return eR(qR), qR
        }

        function CR(RR, JR, yR) {
          var tR, uR, ZR = RR.length,
            qR = new Array(ZR),
            VR = -JR,
            KR = GR;
          for (tR = 0; tR < ZR; tR++) uR = RR[tR] + VR, VR = Math.floor(uR / KR), uR %= KR, qR[tR] = uR < 0 ? uR + KR : uR;
          return "number" === typeof(qR = rR(qR)) ? (yR && (qR = -qR), new fR(qR)) : new iR(qR, yR)
        }

        function XR(RR, JR) {
          var yR, tR, uR, ZR, qR = RR.length,
            iR = JR.length,
            fR = aR(qR + iR),
            VR = GR;
          for (uR = 0; uR < qR; ++uR) {
            ZR = RR[uR];
            for (var KR = 0; KR < iR; ++KR) yR = ZR * JR[KR] + fR[uR + KR], tR = Math.floor(yR / VR), fR[uR + KR] = yR - tR * VR, fR[uR + KR + 1] += tR
          }
          return eR(fR), fR
        }

        function MR(RR, JR) {
          var yR, tR, uR = RR.length,
            ZR = new Array(uR),
            qR = GR,
            iR = 0;
          for (tR = 0; tR < uR; tR++) yR = RR[tR] * JR + iR, iR = Math.floor(yR / qR), ZR[tR] = yR - iR * qR;
          for (; iR > 0;) ZR[tR++] = iR % qR, iR = Math.floor(iR / qR);
          return ZR
        }

        function BR(RR, JR) {
          for (var GR = []; JR-- > 0;) GR.push(0);
          return GR.concat(RR)
        }

        function lR(RR, JR) {
          var GR = Math.max(RR.length, JR.length);
          if (GR <= 30) return XR(RR, JR);
          GR = Math.ceil(GR / 2);
          var yR = RR.slice(GR),
            tR = RR.slice(0, GR),
            uR = JR.slice(GR),
            ZR = JR.slice(0, GR),
            qR = lR(tR, ZR),
            iR = lR(yR, uR),
            fR = lR(UR(tR, yR), UR(ZR, uR)),
            VR = UR(UR(qR, BR(AR(AR(fR, qR), iR), GR)), BR(iR, 2 * GR));
          return eR(VR), VR
        }

        function pR(RR, JR, yR) {
          return new iR(RR < GR ? MR(JR, RR) : XR(JR, wR(RR)), yR)
        }

        function gR(RR) {
          var JR, yR, tR, uR, ZR = RR.length,
            qR = aR(ZR + ZR),
            iR = GR;
          for (tR = 0; tR < ZR; tR++) {
            yR = 0 - (uR = RR[tR]) * uR;
            for (var fR = tR; fR < ZR; fR++) JR = uR * RR[fR] * 2 + qR[tR + fR] + yR, yR = Math.floor(JR / iR), qR[tR + fR] = JR - yR * iR;
            qR[tR + ZR] = yR
          }
          return eR(qR), qR
        }

        function bR(RR, JR) {
          var yR, tR, uR, ZR, qR = RR.length,
            iR = aR(qR),
            fR = GR;
          for (uR = 0, yR = qR - 1; yR >= 0; --yR) uR = (ZR = uR * fR + RR[yR]) - (tR = LR(ZR / JR)) * JR, iR[yR] = 0 | tR;
          return [iR, 0 | uR]
        }

        function vR(RR, JR) {
          var yR, tR = TR(JR);
          if (ZR) return [new VR(RR.value / tR.value), new VR(RR.value % tR.value)];
          var uR, KR = RR.value,
            nR = tR.value;
          if (0 === nR) throw new Error("Cannot divide by zero");
          if (RR.isSmall) return tR.isSmall ? [new fR(LR(KR / nR)), new fR(KR % nR)] : [qR[0], RR];
          if (tR.isSmall) {
            if (1 === nR) return [RR, qR[0]];
            if (-1 == nR) return [RR.Re(), qR[0]];
            var UR = Math.abs(nR);
            if (UR < GR) {
              uR = rR((yR = bR(KR, UR))[0]);
              var WR = yR[1];
              return RR.sign && (WR = -WR), "number" === typeof uR ? (RR.sign !== tR.sign && (uR = -uR), [new fR(uR), new fR(WR)]) : [new iR(uR, RR.sign !== tR.sign), new fR(WR)]
            }
            nR = wR(UR)
          }
          var CR = OR(KR, nR);
          if (-1 === CR) return [qR[0], RR];
          if (0 === CR) return [qR[RR.sign === tR.sign ? 1 : -1], qR[0]];
          yR = KR.length + nR.length <= 200 ? function(RR, JR) {
            var yR, tR, uR, ZR, qR, iR, fR, VR = RR.length,
              KR = JR.length,
              wR = GR,
              eR = aR(JR.length),
              LR = JR[KR - 1],
              nR = Math.ceil(wR / (2 * LR)),
              UR = MR(RR, nR),
              WR = MR(JR, nR);
            for (UR.length <= VR && UR.push(0), WR.push(0), LR = WR[KR - 1], tR = VR - KR; tR >= 0; tR--) {
              for (yR = wR - 1, UR[tR + KR] !== LR && (yR = Math.floor((UR[tR + KR] * wR + UR[tR + KR - 1]) / LR)), uR = 0, ZR = 0, iR = WR.length, qR = 0; qR < iR; qR++) uR += yR * WR[qR], fR = Math.floor(uR / wR), ZR += UR[tR + qR] - (uR - fR * wR), uR = fR, ZR < 0 ? (UR[tR + qR] = ZR + wR, ZR = -1) : (UR[tR + qR] = ZR, ZR = 0);
              for (; 0 !== ZR;) {
                for (yR -= 1, uR = 0, qR = 0; qR < iR; qR++)(uR += UR[tR + qR] - wR + WR[qR]) < 0 ? (UR[tR + qR] = uR + wR, uR = 0) : (UR[tR + qR] = uR, uR = 1);
                ZR += uR
              }
              eR[tR] = yR
            }
            return UR = bR(UR, nR)[0], [rR(eR), rR(UR)]
          }(KR, nR) : function(RR, JR) {
            for (var yR, tR, uR, ZR, qR, iR = RR.length, fR = JR.length, VR = [], KR = [], wR = GR; iR;)
              if (KR.unshift(RR[--iR]), eR(KR), OR(KR, JR) < 0) VR.push(0);
              else {
                uR = KR[(tR = KR.length) - 1] * wR + KR[tR - 2], ZR = JR[fR - 1] * wR + JR[fR - 2], tR > fR && (uR = (uR + 1) * wR), yR = Math.ceil(uR / ZR);
                do {
                  if (OR(qR = MR(JR, yR), KR) <= 0) break;
                  yR--
                } while (yR);
                VR.push(yR), KR = AR(KR, qR)
              } return VR.reverse(), [rR(VR), rR(KR)]
          }(KR, nR), uR = yR[0];
          var XR = RR.sign !== tR.sign,
            BR = yR[1],
            lR = RR.sign;
          return "number" === typeof uR ? (XR && (uR = -uR), uR = new fR(uR)) : uR = new iR(uR, XR), "number" === typeof BR ? (lR && (BR = -BR), BR = new fR(BR)) : BR = new iR(BR, lR), [uR, BR]
        }

        function OR(RR, JR) {
          if (RR.length !== JR.length) return RR.length > JR.length ? 1 : -1;
          for (var GR = RR.length - 1; GR >= 0; GR--)
            if (RR[GR] !== JR[GR]) return RR[GR] > JR[GR] ? 1 : -1;
          return 0
        }

        function xR(RR) {
          var JR = RR.abs();
          return !JR.isUnit() && (!!(JR.equals(2) || JR.equals(3) || JR.equals(5)) || !(JR.isEven() || JR.isDivisibleBy(3) || JR.isDivisibleBy(5)) && (!!JR.lesser(49) || void 0))
        }

        function NR(RR, GR) {
          for (var yR, tR, uR, ZR = RR.prev(), qR = ZR, iR = 0; qR.isEven();) qR = qR.divide(2), iR++;
          RR: for (tR = 0; tR < GR.length; tR++)
            if (!RR.lesser(GR[tR]) && !(uR = JR(GR[tR]).modPow(qR, RR)).isUnit() && !uR.equals(ZR)) {
              for (yR = iR - 1; 0 != yR; yR--) {
                if ((uR = uR.square().mod(RR)).isUnit()) return !1;
                if (uR.equals(ZR)) continue RR
              }
              return !1
            }
          return !0
        }
        iR.prototype = Object.create(qR.prototype), fR.prototype = Object.create(qR.prototype), VR.prototype = Object.create(qR.prototype), iR.prototype.add = function(RR) {
          var JR = TR(RR);
          if (this.sign !== JR.sign) return this.subtract(JR.Re());
          var GR = this.value,
            yR = JR.value;
          return JR.isSmall ? new iR(WR(GR, Math.abs(yR)), this.sign) : new iR(UR(GR, yR), this.sign)
        }, iR.prototype.plus = iR.prototype.add, fR.prototype.add = function(RR) {
          var JR = TR(RR),
            GR = this.value;
          if (GR < 0 !== JR.sign) return this.subtract(JR.Re());
          var yR = JR.value;
          if (JR.isSmall) {
            if (KR(GR + yR)) return new fR(GR + yR);
            yR = wR(Math.abs(yR))
          }
          return new iR(WR(yR, Math.abs(GR)), GR < 0)
        }, fR.prototype.plus = fR.prototype.add, VR.prototype.add = function(RR) {
          return new VR(this.value + TR(RR).value)
        }, VR.prototype.plus = VR.prototype.add, iR.prototype.subtract = function(RR) {
          var JR = TR(RR);
          if (this.sign !== JR.sign) return this.add(JR.Re());
          var GR = this.value,
            yR = JR.value;
          return JR.isSmall ? CR(GR, Math.abs(yR), this.sign) : function(RR, JR, GR) {
            var yR;
            return OR(RR, JR) >= 0 ? yR = AR(RR, JR) : (yR = AR(JR, RR), GR = !GR), "number" === typeof(yR = rR(yR)) ? (GR && (yR = -yR), new fR(yR)) : new iR(yR, GR)
          }(GR, yR, this.sign)
        }, iR.prototype.minus = iR.prototype.subtract, fR.prototype.subtract = function(RR) {
          var JR = TR(RR),
            GR = this.value;
          if (GR < 0 !== JR.sign) return this.add(JR.Re());
          var yR = JR.value;
          return JR.isSmall ? new fR(GR - yR) : CR(yR, Math.abs(GR), GR >= 0)
        }, fR.prototype.minus = fR.prototype.subtract, VR.prototype.subtract = function(RR) {
          return new VR(this.value - TR(RR).value)
        }, VR.prototype.minus = VR.prototype.subtract, iR.prototype.Re = function() {
          return new iR(this.value, !this.sign)
        }, fR.prototype.Re = function() {
          var RR = this.sign,
            JR = new fR(-this.value);
          return JR.sign = !RR, JR
        }, VR.prototype.Re = function() {
          return new VR(-this.value)
        }, iR.prototype.abs = function() {
          return new iR(this.value, !1)
        }, fR.prototype.abs = function() {
          return new fR(Math.abs(this.value))
        }, VR.prototype.abs = function() {
          return new VR(this.value >= 0 ? this.value : -this.value)
        }, iR.prototype.multiply = function(RR) {
          var JR, yR, tR, uR = TR(RR),
            ZR = this.value,
            fR = uR.value,
            VR = this.sign !== uR.sign;
          if (uR.isSmall) {
            if (0 === fR) return qR[0];
            if (1 === fR) return this;
            if (-1 === fR) return this.Re();
            if ((JR = Math.abs(fR)) < GR) return new iR(MR(ZR, JR), VR);
            fR = wR(JR)
          }
          return yR = ZR.length, tR = fR.length, new iR(-.012 * yR - .012 * tR + 15e-6 * yR * tR > 0 ? lR(ZR, fR) : XR(ZR, fR), VR)
        }, iR.prototype.times = iR.prototype.multiply, fR.prototype._multiplyBySmall = function(RR) {
          return KR(RR.value * this.value) ? new fR(RR.value * this.value) : pR(Math.abs(RR.value), wR(Math.abs(this.value)), this.sign !== RR.sign)
        }, iR.prototype._multiplyBySmall = function(RR) {
          return 0 === RR.value ? qR[0] : 1 === RR.value ? this : -1 === RR.value ? this.Re() : pR(Math.abs(RR.value), this.value, this.sign !== RR.sign)
        }, fR.prototype.multiply = function(RR) {
          return TR(RR)._multiplyBySmall(this)
        }, fR.prototype.times = fR.prototype.multiply, VR.prototype.multiply = function(RR) {
          return new VR(this.value * TR(RR).value)
        }, VR.prototype.times = VR.prototype.multiply, iR.prototype.square = function() {
          return new iR(gR(this.value), !1)
        }, fR.prototype.square = function() {
          var RR = this.value * this.value;
          return KR(RR) ? new fR(RR) : new iR(gR(wR(Math.abs(this.value))), !1)
        }, VR.prototype.square = function(RR) {
          return new VR(this.value * this.value)
        }, iR.prototype.divmod = function(RR) {
          var JR = vR(this, RR);
          return {
            quotient: JR[0],
            remainder: JR[1]
          }
        }, VR.prototype.divmod = fR.prototype.divmod = iR.prototype.divmod, iR.prototype.divide = function(RR) {
          return vR(this, RR)[0]
        }, VR.prototype.over = VR.prototype.divide = function(RR) {
          return new VR(this.value / TR(RR).value)
        }, fR.prototype.over = fR.prototype.divide = iR.prototype.over = iR.prototype.divide, iR.prototype.mod = function(RR) {
          return vR(this, RR)[1]
        }, VR.prototype.mod = VR.prototype.remainder = function(RR) {
          return new VR(this.value % TR(RR).value)
        }, fR.prototype.remainder = fR.prototype.mod = iR.prototype.remainder = iR.prototype.mod, iR.prototype.pow = function(RR) {
          var JR, GR, yR, tR = TR(RR),
            uR = this.value,
            ZR = tR.value;
          if (0 === ZR) return qR[1];
          if (0 === uR) return qR[0];
          if (1 === uR) return qR[1];
          if (-1 === uR) return tR.isEven() ? qR[1] : qR[-1];
          if (tR.sign) return qR[0];
          if (!tR.isSmall) throw new Error("The exponent " + tR.toString() + " is too large.");
          if (this.isSmall && KR(JR = Math.pow(uR, ZR))) return new fR(LR(JR));
          for (GR = this, yR = qR[1]; !0 & ZR && (yR = yR.times(GR), --ZR), 0 !== ZR;) ZR /= 2, GR = GR.square();
          return yR
        }, fR.prototype.pow = iR.prototype.pow, VR.prototype.pow = function(RR) {
          var JR = TR(RR),
            GR = this.value,
            yR = JR.value,
            tR = BigInt(0),
            uR = BigInt(1),
            ZR = BigInt(2);
          if (yR === tR) return qR[1];
          if (GR === tR) return qR[0];
          if (GR === uR) return qR[1];
          if (GR === BigInt(-1)) return JR.isEven() ? qR[1] : qR[-1];
          if (JR.isNegative()) return new VR(tR);
          for (var iR = this, fR = qR[1];
            (yR & uR) === uR && (fR = fR.times(iR), --yR), yR !== tR;) yR /= ZR, iR = iR.square();
          return fR
        }, iR.prototype.modPow = function(RR, JR) {
          if (RR = TR(RR), (JR = TR(JR)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var GR = qR[1],
            yR = this.mod(JR);
          for (RR.isNegative() && (RR = RR.multiply(qR[-1]), yR = yR.modInv(JR)); RR.isPositive();) {
            if (yR.isZero()) return qR[0];
            RR.isOdd() && (GR = GR.multiply(yR).mod(JR)), RR = RR.divide(2), yR = yR.square().mod(JR)
          }
          return GR
        }, VR.prototype.modPow = fR.prototype.modPow = iR.prototype.modPow, iR.prototype.compareAbs = function(RR) {
          var JR = TR(RR),
            GR = this.value,
            yR = JR.value;
          return JR.isSmall ? 1 : OR(GR, yR)
        }, fR.prototype.compareAbs = function(RR) {
          var JR = TR(RR),
            GR = Math.abs(this.value),
            yR = JR.value;
          return JR.isSmall ? GR === (yR = Math.abs(yR)) ? 0 : GR > yR ? 1 : -1 : -1
        }, VR.prototype.compareAbs = function(RR) {
          var JR = this.value,
            GR = TR(RR).value;
          return (JR = JR >= 0 ? JR : -JR) === (GR = GR >= 0 ? GR : -GR) ? 0 : JR > GR ? 1 : -1
        }, iR.prototype.compare = function(RR) {
          if (RR === 1 / 0) return -1;
          if (RR === -1 / 0) return 1;
          var JR = TR(RR),
            GR = this.value,
            yR = JR.value;
          return this.sign !== JR.sign ? JR.sign ? 1 : -1 : JR.isSmall ? this.sign ? -1 : 1 : OR(GR, yR) * (this.sign ? -1 : 1)
        }, iR.prototype.compareTo = iR.prototype.compare, fR.prototype.compare = function(RR) {
          if (RR === 1 / 0) return -1;
          if (RR === -1 / 0) return 1;
          var JR = TR(RR),
            GR = this.value,
            yR = JR.value;
          return JR.isSmall ? GR == yR ? 0 : GR > yR ? 1 : -1 : GR < 0 !== JR.sign ? GR < 0 ? -1 : 1 : GR < 0 ? 1 : -1
        }, fR.prototype.compareTo = fR.prototype.compare, VR.prototype.compare = function(RR) {
          if (RR === 1 / 0) return -1;
          if (RR === -1 / 0) return 1;
          var JR = this.value,
            GR = TR(RR).value;
          return JR === GR ? 0 : JR > GR ? 1 : -1
        }, VR.prototype.compareTo = VR.prototype.compare, iR.prototype.equals = function(RR) {
          return 0 === this.compare(RR)
        }, VR.prototype.eq = VR.prototype.equals = fR.prototype.eq = fR.prototype.equals = iR.prototype.eq = iR.prototype.equals, iR.prototype.notEquals = function(RR) {
          return 0 !== this.compare(RR)
        }, VR.prototype.neq = VR.prototype.notEquals = fR.prototype.neq = fR.prototype.notEquals = iR.prototype.neq = iR.prototype.notEquals, iR.prototype.greater = function(RR) {
          return this.compare(RR) > 0
        }, VR.prototype.gt = VR.prototype.greater = fR.prototype.gt = fR.prototype.greater = iR.prototype.gt = iR.prototype.greater, iR.prototype.lesser = function(RR) {
          return this.compare(RR) < 0
        }, VR.prototype.lt = VR.prototype.lesser = fR.prototype.lt = fR.prototype.lesser = iR.prototype.lt = iR.prototype.lesser, iR.prototype.greaterOrEquals = function(RR) {
          return this.compare(RR) >= 0
        }, VR.prototype.geq = VR.prototype.greaterOrEquals = fR.prototype.geq = fR.prototype.greaterOrEquals = iR.prototype.geq = iR.prototype.greaterOrEquals, iR.prototype.lesserOrEquals = function(RR) {
          return this.compare(RR) <= 0
        }, VR.prototype.leq = VR.prototype.lesserOrEquals = fR.prototype.leq = fR.prototype.lesserOrEquals = iR.prototype.leq = iR.prototype.lesserOrEquals, iR.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, fR.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, VR.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, iR.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, fR.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, VR.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, iR.prototype.isPositive = function() {
          return !this.sign
        }, fR.prototype.isPositive = function() {
          return this.value > 0
        }, VR.prototype.isPositive = fR.prototype.isPositive, iR.prototype.isNegative = function() {
          return this.sign
        }, fR.prototype.isNegative = function() {
          return this.value < 0
        }, VR.prototype.isNegative = fR.prototype.isNegative, iR.prototype.isUnit = function() {
          return !1
        }, fR.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, VR.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, iR.prototype.isZero = function() {
          return !1
        }, fR.prototype.isZero = function() {
          return 0 === this.value
        }, VR.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, iR.prototype.isDivisibleBy = function(RR) {
          var JR = TR(RR);
          return !JR.isZero() && (!!JR.isUnit() || (0 === JR.compareAbs(2) ? this.isEven() : this.mod(JR).isZero()))
        }, VR.prototype.isDivisibleBy = fR.prototype.isDivisibleBy = iR.prototype.isDivisibleBy, iR.prototype.isPrime = function(GR) {
          var yR = xR(this);
          if (yR !== RR) return yR;
          var tR = this.abs(),
            uR = tR.bitLength();
          if (uR <= 64) return NR(tR, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var ZR = Math.log(2) * uR.toJSNumber(), qR = Math.ceil(!0 === GR ? 2 * Math.pow(ZR, 2) : ZR), iR = [], fR = 0; fR < qR; fR++) iR.push(JR(fR + 2));
          return NR(tR, iR)
        }, VR.prototype.isPrime = fR.prototype.isPrime = iR.prototype.isPrime, iR.prototype.isProbablePrime = function(GR, yR) {
          var tR = xR(this);
          if (tR !== RR) return tR;
          for (var uR = this.abs(), ZR = GR === RR ? 5 : GR, qR = [], iR = 0; iR < ZR; iR++) qR.push(JR.randBetween(2, uR.minus(2), yR));
          return NR(uR, qR)
        }, VR.prototype.isProbablePrime = fR.prototype.isProbablePrime = iR.prototype.isProbablePrime, iR.prototype.modInv = function(RR) {
          for (var GR, yR, tR, uR = JR.zero, ZR = JR.one, qR = TR(RR), iR = this.abs(); !iR.isZero();) GR = qR.divide(iR), yR = uR, tR = qR, uR = ZR, qR = iR, ZR = yR.subtract(GR.multiply(ZR)), iR = tR.subtract(GR.multiply(iR));
          if (!qR.isUnit()) throw new Error(this.toString() + " and " + RR.toString() + " are not co-prime");
          return -1 === uR.compare(0) && (uR = uR.add(RR)), this.isNegative() ? uR.Re() : uR
        }, VR.prototype.modInv = fR.prototype.modInv = iR.prototype.modInv, iR.prototype.next = function() {
          var RR = this.value;
          return this.sign ? CR(RR, 1, this.sign) : new iR(WR(RR, 1), this.sign)
        }, fR.prototype.next = function() {
          var RR = this.value;
          return RR + 1 < yR ? new fR(RR + 1) : new iR(tR, !1)
        }, VR.prototype.next = function() {
          return new VR(this.value + BigInt(1))
        }, iR.prototype.prev = function() {
          var RR = this.value;
          return this.sign ? new iR(WR(RR, 1), !0) : CR(RR, 1, this.sign)
        }, fR.prototype.prev = function() {
          var RR = this.value;
          return RR - 1 > -yR ? new fR(RR - 1) : new iR(tR, !0)
        }, VR.prototype.prev = function() {
          return new VR(this.value - BigInt(1))
        };
        for (var DR = [1]; 2 * DR[DR.length - 1] <= GR;) DR.push(2 * DR[DR.length - 1]);
        var HR = DR.length,
          oR = DR[HR - 1];

        function cR(RR) {
          return Math.abs(RR) <= GR
        }

        function PR(RR, GR, yR) {
          GR = TR(GR);
          for (var tR = RR.isNegative(), uR = GR.isNegative(), ZR = tR ? RR.not() : RR, qR = uR ? GR.not() : GR, iR = 0, fR = 0, VR = null, KR = null, wR = []; !ZR.isZero() || !qR.isZero();) iR = (VR = vR(ZR, oR))[1].toJSNumber(), tR && (iR = oR - 1 - iR), fR = (KR = vR(qR, oR))[1].toJSNumber(), uR && (fR = oR - 1 - fR), ZR = VR[0], qR = KR[0], wR.push(yR(iR, fR));
          for (var rR = 0 !== yR(tR ? 1 : 0, uR ? 1 : 0) ? JR(-1) : JR(0), eR = wR.length - 1; eR >= 0; eR -= 1) rR = rR.multiply(oR).add(JR(wR[eR]));
          return rR
        }
        iR.prototype.shiftLeft = function(RR) {
          var JR = TR(RR).toJSNumber();
          if (!cR(JR)) throw new Error(String(JR) + " is too large for shifting.");
          if (JR < 0) return this.shiftRight(-JR);
          var GR = this;
          if (GR.isZero()) return GR;
          for (; JR >= HR;) GR = GR.multiply(oR), JR -= HR - 1;
          return GR.multiply(DR[JR])
        }, VR.prototype.shiftLeft = fR.prototype.shiftLeft = iR.prototype.shiftLeft, iR.prototype.shiftRight = function(RR) {
          var JR, GR = TR(RR).toJSNumber();
          if (!cR(GR)) throw new Error(String(GR) + " is too large for shifting.");
          if (GR < 0) return this.shiftLeft(-GR);
          for (var yR = this; GR >= HR;) {
            if (yR.isZero() || yR.isNegative() && yR.isUnit()) return yR;
            yR = (JR = vR(yR, oR))[1].isNegative() ? JR[0].prev() : JR[0], GR -= HR - 1
          }
          return (JR = vR(yR, DR[GR]))[1].isNegative() ? JR[0].prev() : JR[0]
        }, VR.prototype.shiftRight = fR.prototype.shiftRight = iR.prototype.shiftRight, iR.prototype.not = function() {
          return this.Re().prev()
        }, VR.prototype.not = fR.prototype.not = iR.prototype.not, iR.prototype.and = function(RR) {
          return PR(this, RR, (function(RR, JR) {
            return RR & JR
          }))
        }, VR.prototype.and = fR.prototype.and = iR.prototype.and, iR.prototype.or = function(RR) {
          return PR(this, RR, (function(RR, JR) {
            return RR | JR
          }))
        }, VR.prototype.or = fR.prototype.or = iR.prototype.or, iR.prototype.xor = function(RR) {
          return PR(this, RR, (function(RR, JR) {
            return RR ^ JR
          }))
        }, VR.prototype.xor = fR.prototype.xor = iR.prototype.xor;
        var IR = 1 << 30;

        function mR(RR) {
          var JR = RR.value,
            yR = "number" === typeof JR ? JR | IR : "bigint" === typeof JR ? JR | BigInt(IR) : JR[0] + JR[1] * GR | 1073758208;
          return yR & -yR
        }

        function zR(RR, GR) {
          if (GR.compareTo(RR) <= 0) {
            var yR = zR(RR, GR.square(GR)),
              tR = yR.p,
              uR = yR.e,
              ZR = tR.multiply(GR);
            return ZR.compareTo(RR) <= 0 ? {
              p: ZR,
              e: 2 * uR + 1
            } : {
              p: tR,
              e: 2 * uR
            }
          }
          return {
            p: JR(1),
            e: 0
          }
        }

        function SR(RR, JR) {
          return RR = TR(RR), JR = TR(JR), RR.greater(JR) ? RR : JR
        }

        function jR(RR, JR) {
          return RR = TR(RR), JR = TR(JR), RR.lesser(JR) ? RR : JR
        }

        function dR(RR, JR) {
          if (RR = TR(RR).abs(), JR = TR(JR).abs(), RR.equals(JR)) return RR;
          if (RR.isZero()) return JR;
          if (JR.isZero()) return RR;
          for (var GR, yR, tR = qR[1]; RR.isEven() && JR.isEven();) GR = jR(mR(RR), mR(JR)), RR = RR.divide(GR), JR = JR.divide(GR), tR = tR.multiply(GR);
          for (; RR.isEven();) RR = RR.divide(mR(RR));
          do {
            for (; JR.isEven();) JR = JR.divide(mR(JR));
            RR.greater(JR) && (yR = JR, JR = RR, RR = yR), JR = JR.subtract(RR)
          } while (!JR.isZero());
          return tR.isUnit() ? RR : RR.multiply(tR)
        }
        iR.prototype.bitLength = function() {
          var RR = this;
          return RR.compareTo(JR(0)) < 0 && (RR = RR.Re().subtract(JR(1))), 0 === RR.compareTo(JR(0)) ? JR(0) : JR(zR(RR, JR(2)).e).add(JR(1))
        }, VR.prototype.bitLength = fR.prototype.bitLength = iR.prototype.bitLength;
        var ER = function(RR, JR, GR, yR) {
          GR = GR || uR, RR = String(RR), yR || (RR = RR.toLowerCase(), GR = GR.toLowerCase());
          var tR, ZR = RR.length,
            qR = Math.abs(JR),
            iR = {};
          for (tR = 0; tR < GR.length; tR++) iR[GR[tR]] = tR;
          for (tR = 0; tR < ZR; tR++) {
            if ("-" !== (KR = RR[tR]) && (KR in iR && iR[KR] >= qR)) {
              if ("1" === KR && 1 === qR) continue;
              throw new Error(KR + " is not a valid digit in base " + JR + ".")
            }
          }
          JR = TR(JR);
          var fR = [],
            VR = "-" === RR[0];
          for (tR = VR ? 1 : 0; tR < RR.length; tR++) {
            var KR;
            if ((KR = RR[tR]) in iR) fR.push(TR(iR[KR]));
            else {
              if ("<" !== KR) throw new Error(KR + " is not a valid character");
              var wR = tR;
              do {
                tR++
              } while (">" !== RR[tR] && tR < RR.length);
              fR.push(TR(RR.slice(wR + 1, tR)))
            }
          }
          return YR(fR, JR, VR)
        };

        function YR(RR, JR, GR) {
          var yR, tR = qR[0],
            uR = qR[1];
          for (yR = RR.length - 1; yR >= 0; yR--) tR = tR.add(RR[yR].times(uR)), uR = uR.times(JR);
          return GR ? tR.Re() : tR
        }

        function kR(RR, GR) {
          if ((GR = JR(GR)).isZero()) {
            if (RR.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (GR.equals(-1)) {
            if (RR.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (RR.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-RR.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var yR = Array.apply(null, Array(RR.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return yR.unshift([1]), {
              value: [].concat.apply([], yR),
              isNegative: !1
            }
          }
          var tR = !1;
          if (RR.isNegative() && GR.isPositive() && (tR = !0, RR = RR.abs()), GR.isUnit()) return RR.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(RR.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: tR
          };
          for (var uR, ZR = [], qR = RR; qR.isNegative() || qR.compareAbs(GR) >= 0;) {
            uR = qR.divmod(GR), qR = uR.quotient;
            var iR = uR.remainder;
            iR.isNegative() && (iR = GR.minus(iR).abs(), qR = qR.next()), ZR.push(iR.toJSNumber())
          }
          return ZR.push(qR.toJSNumber()), {
            value: ZR.reverse(),
            isNegative: tR
          }
        }

        function QR(RR, JR, GR) {
          var yR = kR(RR, JR);
          return (yR.isNegative ? "-" : "") + yR.value.map((function(RR) {
            return function(RR, JR) {
              return RR < (JR = JR || uR).length ? JR[RR] : "<" + RR + ">"
            }(RR, GR)
          })).join("")
        }

        function FR(RR) {
          if (KR(+RR)) {
            var JR = +RR;
            if (JR === LR(JR)) return ZR ? new VR(BigInt(JR)) : new fR(JR);
            throw new Error("Invalid integer: " + RR)
          }
          var GR = "-" === RR[0];
          GR && (RR = RR.slice(1));
          var yR = RR.split(/e/i);
          if (yR.length > 2) throw new Error("Invalid integer: " + yR.join("e"));
          if (2 === yR.length) {
            var tR = yR[1];
            if ("+" === tR[0] && (tR = tR.slice(1)), (tR = +tR) !== LR(tR) || !KR(tR)) throw new Error("Invalid integer: " + tR + " is not a valid exponent.");
            var uR = yR[0],
              qR = uR.indexOf(".");
            if (qR >= 0 && (tR -= uR.length - qR - 1, uR = uR.slice(0, qR) + uR.slice(qR + 1)), tR < 0) throw new Error("Cannot include negative exponent part for integers");
            RR = uR += new Array(tR + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(RR)) throw new Error("Invalid integer: " + RR);
          if (ZR) return new VR(BigInt(GR ? "-" + RR : RR));
          for (var wR = [], rR = RR.length, aR = rR - 7; rR > 0;) wR.push(+RR.slice(aR, rR)), (aR -= 7) < 0 && (aR = 0), rR -= 7;
          return eR(wR), new iR(wR, GR)
        }

        function TR(RR) {
          return "number" === typeof RR ? function(RR) {
            if (ZR) return new VR(BigInt(RR));
            if (KR(RR)) {
              if (RR !== LR(RR)) throw new Error(RR + " is not an integer.");
              return new fR(RR)
            }
            return FR(RR.toString())
          }(RR) : "string" === typeof RR ? FR(RR) : "bigint" === typeof RR ? new VR(RR) : RR
        }
        iR.prototype.toArray = function(RR) {
          return kR(this, RR)
        }, fR.prototype.toArray = function(RR) {
          return kR(this, RR)
        }, VR.prototype.toArray = function(RR) {
          return kR(this, RR)
        }, iR.prototype.toString = function(JR, GR) {
          if (JR === RR && (JR = 10), 10 !== JR) return QR(this, JR, GR);
          for (var yR, tR = this.value, uR = tR.length, ZR = String(tR[--uR]); --uR >= 0;) yR = String(tR[uR]), ZR += "0000000".slice(yR.length) + yR;
          return (this.sign ? "-" : "") + ZR
        }, fR.prototype.toString = function(JR, GR) {
          return JR === RR && (JR = 10), 10 != JR ? QR(this, JR, GR) : String(this.value)
        }, VR.prototype.toString = fR.prototype.toString, VR.prototype.toJSON = iR.prototype.toJSON = fR.prototype.toJSON = function() {
          return this.toString()
        }, iR.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, iR.prototype.toJSNumber = iR.prototype.valueOf, fR.prototype.valueOf = function() {
          return this.value
        }, fR.prototype.toJSNumber = fR.prototype.valueOf, VR.prototype.valueOf = VR.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var sR = 0; sR < 1e3; sR++) qR[sR] = TR(sR), sR > 0 && (qR[-sR] = TR(-sR));
        return qR.one = qR[1], qR.zero = qR[0], qR.minusOne = qR[-1], qR.max = SR, qR.min = jR, qR.gcd = dR, qR.lcm = function(RR, JR) {
          return RR = TR(RR).abs(), JR = TR(JR).abs(), RR.divide(dR(RR, JR)).multiply(JR)
        }, qR.isInstance = function(RR) {
          return RR instanceof iR || RR instanceof fR || RR instanceof VR
        }, qR.randBetween = function(RR, JR, yR) {
          RR = TR(RR), JR = TR(JR);
          var tR = yR || Math.random,
            uR = jR(RR, JR),
            ZR = SR(RR, JR).subtract(uR).add(1);
          if (ZR.isSmall) return uR.add(Math.floor(tR() * ZR));
          for (var iR = kR(ZR, GR).value, fR = [], VR = !0, KR = 0; KR < iR.length; KR++) {
            var wR = VR ? iR[KR] : GR,
              rR = LR(tR() * wR);
            fR.push(rR), rR < wR && (VR = !1)
          }
          return uR.add(qR.yK(fR, GR, !1))
        }, qR.yK = function(RR, JR, GR) {
          return YR(RR.map(TR), TR(JR || 10), GR)
        }, qR
      }();
      RR.hasOwnProperty("exports") && (RR.exports = JR)
    }(UG);
    var WG = uR(UG.exports);

    function AG(RR, JR, GR) {
      let yR = 0;
      for (let tR = 0; tR < GR; tR++) {
        const GR = RR[JR + tR];
        if (void 0 === GR) break;
        yR += GR * 16 ** tR
      }
      return yR
    }

    function CG(RR) {
      const JR = [];
      for (let GR = 0; GR < RR.length; GR++) {
        let yR = Number(RR[GR]);
        for (let RR = 0; yR || RR < JR.length; RR++) yR += 10 * (JR[RR] || 0), JR[RR] = yR % 16, yR = (yR - JR[RR]) / 16
      }
      return JR
    }
    class XG {
      static fromString(RR) {
        return new XG(function(RR) {
          const JR = CG(RR),
            GR = Array(4);
          for (let yR = 0; yR < 4; yR++) GR[3 - yR] = AG(JR, 4 * yR, 4);
          return GR
        }(RR), RR)
      }
      static fromBit(RR) {
        const JR = Array(4),
          GR = Math.floor(RR / 16);
        for (let yR = 0; yR < 4; yR++) JR[3 - yR] = yR === GR ? 1 << RR - 16 * GR : 0;
        return new XG(JR)
      }
      constructor(RR, JR) {
        this.parts = RR, this.str = JR
      }
      and(RR) {
        let {
          parts: JR
        } = RR;
        return new XG(this.parts.map(((RR, GR) => RR & JR[GR])))
      }
      or(RR) {
        let {
          parts: JR
        } = RR;
        return new XG(this.parts.map(((RR, GR) => RR | JR[GR])))
      }
      xor(RR) {
        let {
          parts: JR
        } = RR;
        return new XG(this.parts.map(((RR, GR) => RR ^ JR[GR])))
      }
      not() {
        return new XG(this.parts.map((RR => ~RR)))
      }
      equals(RR) {
        let {
          parts: JR
        } = RR;
        return this.parts.every(((RR, GR) => RR === JR[GR]))
      }
      toString() {
        if (null != this.str) return this.str;
        const RR = new Array(16);
        return this.parts.forEach(((JR, GR) => {
          const yR = CG(JR.toString());
          for (let tR = 0; tR < 4; tR++) RR[tR + 4 * GR] = yR[3 - tR] || 0
        })), this.str = WG.yK(RR, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const MG = function() {
      try {
        return BigInt, !0
      } catch (RR) {
        return !1
      }
    }();
    MG && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const BG = {},
      lG = MG ? function(RR) {
        return BigInt(RR)
      } : function(RR) {
        return RR instanceof XG ? RR : ("number" === typeof RR && (RR = RR.toString()), null != BG[RR] || (BG[RR] = XG.fromString(RR)), BG[RR])
      },
      pG = lG(0),
      gG = MG ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG)
      } : function() {
        let RR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG).and(RR)
      },
      bG = MG ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG)
      } : function() {
        let RR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG).or(RR)
      },
      vG = MG ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG)
      } : function() {
        let RR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pG;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG).xor(RR)
      },
      OG = MG ? function(RR, JR) {
        return RR === JR
      } : function(RR, JR) {
        return null == RR || null == JR ? RR == JR : RR.equals(JR)
      };
    var xG, NG, DG, HG, oG = {
      combine: function() {
        let RR = arguments.length <= 0 ? void 0 : arguments[0];
        for (let JR = 1; JR < arguments.length; JR++) RR = bG(RR, JR < 0 || arguments.length <= JR ? void 0 : arguments[JR]);
        return RR
      },
      add: function(RR, JR) {
        return JR === pG ? RR : bG(RR, JR)
      },
      remove: function(RR, JR) {
        return JR === pG ? RR : vG(RR, gG(RR, JR))
      },
      filter: gG,
      invert: MG ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pG).not()
      },
      has: function(RR, JR) {
        return OG(gG(RR, JR), JR)
      },
      hasAny: function(RR, JR) {
        return !OG(gG(RR, JR), pG)
      },
      equals: OG,
      deserialize: lG,
      getFlag: MG ? function(RR) {
        return BigInt(1) << BigInt(RR)
      } : function(RR) {
        return XG.fromBit(RR)
      }
    };
    ! function(RR) {
      RR[RR.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", RR[RR.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", RR[RR.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", RR[RR.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", RR[RR.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", RR[RR.RATELIMITED = 4002] = "RATELIMITED", RR[RR.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", RR[RR.INVALID_VERSION = 4004] = "INVALID_VERSION", RR[RR.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(xG || (xG = {})),
    function(RR) {
      RR[RR.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", RR[RR.INVALID_COMMAND = 4002] = "INVALID_COMMAND", RR[RR.INVALID_EVENT = 4004] = "INVALID_EVENT", RR[RR.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(NG || (NG = {})),
    function(RR) {
      RR.LANDSCAPE = "landscape", RR.PORTRAIT = "portrait"
    }(DG || (DG = {})),
    function(RR) {
      RR.MOBILE = "mobile", RR.DESKTOP = "desktop"
    }(HG || (HG = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: oG.getFlag(0),
      ADMINISTRATOR: oG.getFlag(3)
    });

    function cG(RR) {
      return rG((JR => {
        var GR;
        const [yR] = null !== (GR = Object.entries(RR).find((RR => {
          let [, GR] = RR;
          return GR === JR
        }))) && void 0 !== GR ? GR : [];
        return null != JR && void 0 === yR ? RR.UNHANDLED : JR
      }), DJ().or(HJ()))
    }
    const PG = nG.object({
        image_url: nG.string()
      }),
      IG = nG.object({
        mediaUrl: nG.string().max(1024)
      }),
      mG = nG.object({
        access_token: nG.union([nG.string(), nG.null()]).optional()
      }),
      zG = nG.object({
        access_token: nG.string(),
        user: nG.object({
          username: nG.string(),
          discriminator: nG.string(),
          id: nG.string(),
          avatar: nG.union([nG.string(), nG.null()]).optional(),
          public_flags: nG.number(),
          global_name: nG.union([nG.string(), nG.null()]).optional()
        }),
        scopes: nG.array(function(RR) {
          const JR = OJ().transform((JR => {
            const GR = RR.safeParse(JR);
            return GR.success ? GR.data : RR._def.defaultValue()
          }));
          return JR.overlayType = RR, JR
        }(nG.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(nG.literal(-1)).default(-1))),
        expires: nG.string(),
        application: nG.object({
          description: nG.string(),
          icon: nG.union([nG.string(), nG.null()]).optional(),
          id: nG.string(),
          rpc_origins: nG.array(nG.string()).optional(),
          name: nG.string()
        })
      }),
      SG = nG.object({
        participants: nG.array(nG.object({
          id: nG.string(),
          username: nG.string(),
          global_name: nG.union([nG.string(), nG.null()]).optional(),
          discriminator: nG.string(),
          avatar: nG.union([nG.string(), nG.null()]).optional(),
          flags: nG.number(),
          bot: nG.boolean(),
          avatar_decoration_data: nG.union([nG.object({
            asset: nG.string(),
            skuId: nG.string().optional()
          }), nG.null()]).optional(),
          premium_type: nG.union([nG.number(), nG.null()]).optional(),
          nickname: nG.string().optional()
        }))
      });
    var jG;
    ! function(RR) {
      RR.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", RR.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", RR.AUTHENTICATE = "AUTHENTICATE", RR.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(jG || (jG = {}));
    const dG = nG.object({}).optional().nullable(),
      EG = nG.void(),
      YG = {
        [jG.INITIATE_IMAGE_UPLOAD]: {
          request: EG,
          response: PG
        },
        [jG.OPEN_SHARE_MOMENT_DIALOG]: {
          request: IG,
          response: dG
        },
        [jG.AUTHENTICATE]: {
          request: mG,
          response: zG
        },
        [jG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: EG,
          response: SG
        }
      },
      kG = "DISPATCH";
    var QG;
    ! function(RR) {
      RR.AUTHORIZE = "AUTHORIZE", RR.AUTHENTICATE = "AUTHENTICATE", RR.GET_GUILDS = "GET_GUILDS", RR.GET_GUILD = "GET_GUILD", RR.GET_CHANNEL = "GET_CHANNEL", RR.GET_CHANNELS = "GET_CHANNELS", RR.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", RR.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", RR.SUBSCRIBE = "SUBSCRIBE", RR.UNSUBSCRIBE = "UNSUBSCRIBE", RR.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", RR.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", RR.SET_ACTIVITY = "SET_ACTIVITY", RR.GET_SKUS = "GET_SKUS", RR.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", RR.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", RR.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", RR.START_PURCHASE = "START_PURCHASE", RR.SET_CONFIG = "SET_CONFIG", RR.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", RR.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", RR.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", RR.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", RR.CAPTURE_LOG = "CAPTURE_LOG", RR.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", RR.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", RR.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", RR.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", RR.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", RR.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", RR.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(QG || (QG = {}));
    const FG = QJ({
        cmd: DJ(),
        data: dJ(),
        evt: SJ(),
        nonce: DJ()
      }).passthrough(),
      TG = (cG(Object.assign(Object.assign({}, zG.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), QJ({
        id: DJ(),
        username: DJ(),
        discriminator: DJ(),
        global_name: DJ().optional().nullable(),
        avatar: DJ().optional().nullable(),
        avatar_decoration_data: QJ({
          asset: DJ(),
          sku_id: DJ().optional()
        }).nullable(),
        bot: PJ(),
        flags: HJ().optional().nullable(),
        premium_type: HJ().optional().nullable()
      })),
      sG = QJ({
        user: TG,
        nick: DJ().optional().nullable(),
        roles: kJ(DJ()),
        joined_at: DJ(),
        deaf: PJ(),
        mute: PJ()
      }),
      hG = QJ({
        id: DJ(),
        name: DJ().optional().nullable(),
        roles: kJ(DJ()).optional().nullable(),
        user: TG.optional().nullable(),
        require_colons: PJ().optional().nullable(),
        managed: PJ().optional().nullable(),
        animated: PJ().optional().nullable(),
        available: PJ().optional().nullable()
      }),
      Ry = QJ({
        mute: PJ(),
        deaf: PJ(),
        self_mute: PJ(),
        self_deaf: PJ(),
        suppress: PJ()
      }),
      Jy = QJ({
        mute: PJ(),
        nick: DJ(),
        user: TG,
        voice_state: Ry,
        volume: HJ()
      }),
      Gy = cG({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      yy = QJ({
        name: DJ(),
        type: HJ(),
        url: DJ().optional().nullable(),
        created_at: HJ().optional().nullable(),
        timestamps: QJ({
          start: HJ(),
          end: HJ()
        }).partial().optional().nullable(),
        application_id: DJ().optional().nullable(),
        details: DJ().optional().nullable(),
        state: DJ().optional().nullable(),
        emoji: hG.optional().nullable(),
        party: QJ({
          id: DJ().optional().nullable(),
          size: kJ(HJ()).optional().nullable()
        }).optional().nullable(),
        assets: QJ({
          large_image: DJ().nullable(),
          large_text: DJ().nullable(),
          small_image: DJ().nullable(),
          small_text: DJ().nullable()
        }).partial().optional().nullable(),
        secrets: QJ({
          join: DJ(),
          match: DJ()
        }).partial().optional().nullable(),
        instance: PJ().optional().nullable(),
        flags: HJ().optional().nullable()
      }),
      ty = QJ({
        id: DJ(),
        type: cG({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: DJ(),
        deny: DJ()
      }),
      uy = {
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
      Zy = QJ({
        id: DJ(),
        type: cG(uy),
        guild_id: DJ().optional().nullable(),
        position: HJ().optional().nullable(),
        permission_overwrites: kJ(ty).optional().nullable(),
        name: DJ().optional().nullable(),
        topic: DJ().optional().nullable(),
        nsfw: PJ().optional().nullable(),
        last_message_id: DJ().optional().nullable(),
        bitrate: HJ().optional().nullable(),
        user_limit: HJ().optional().nullable(),
        rate_limit_per_user: HJ().optional().nullable(),
        recipients: kJ(TG).optional().nullable(),
        icon: DJ().optional().nullable(),
        owner_id: DJ().optional().nullable(),
        application_id: DJ().optional().nullable(),
        parent_id: DJ().optional().nullable(),
        last_pin_timestamp: DJ().optional().nullable()
      }),
      qy = QJ({
        user: TG,
        guild_id: DJ(),
        status: Gy,
        activities: kJ(yy),
        client_status: QJ({
          desktop: Gy,
          mobile: Gy,
          web: Gy
        }).partial()
      }),
      iy = QJ({
        id: DJ(),
        name: DJ(),
        color: HJ(),
        hoist: PJ(),
        position: HJ(),
        permissions: DJ(),
        managed: PJ(),
        mentionable: PJ()
      }),
      fy = (QJ({
        id: DJ(),
        name: DJ(),
        owner_id: DJ(),
        icon: DJ().nullable(),
        icon_hash: DJ().optional().nullable(),
        splash: DJ().nullable(),
        discovery_splash: DJ().nullable(),
        owner: PJ().optional().nullable(),
        permissions: DJ().optional().nullable(),
        region: DJ(),
        afk_channel_id: DJ().nullable(),
        afk_timeout: HJ(),
        widget_enabled: PJ().optional().nullable(),
        widget_channel_id: DJ().optional().nullable(),
        verification_level: HJ(),
        default_message_notifications: HJ(),
        explicit_content_filter: HJ(),
        roles: kJ(iy),
        emojis: kJ(hG),
        features: kJ(DJ()),
        mfa_level: HJ(),
        application_id: DJ().nullable(),
        system_channel_id: DJ().nullable(),
        system_channel_flags: HJ(),
        rules_channel_id: DJ().nullable(),
        joined_at: DJ().optional().nullable(),
        large: PJ().optional().nullable(),
        unavailable: PJ().optional().nullable(),
        member_count: HJ().optional().nullable(),
        voice_states: kJ(Ry).optional().nullable(),
        members: kJ(sG).optional().nullable(),
        channels: kJ(Zy).optional().nullable(),
        presences: kJ(qy).optional().nullable(),
        max_presences: HJ().optional().nullable(),
        max_members: HJ().optional().nullable(),
        vanity_url_code: DJ().nullable(),
        description: DJ().nullable(),
        banner: DJ().nullable(),
        premium_tier: HJ(),
        premium_subscription_count: HJ().optional().nullable(),
        preferred_locale: DJ(),
        public_updates_channel_id: DJ().nullable(),
        max_video_channel_users: HJ().optional().nullable(),
        approximate_member_count: HJ().optional().nullable(),
        approximate_presence_count: HJ().optional().nullable()
      }), QJ({
        id: DJ(),
        guild_id: DJ(),
        type: HJ(),
        name: DJ()
      })),
      Vy = QJ({
        id: DJ(),
        filename: DJ(),
        size: HJ(),
        url: DJ(),
        proxy_url: DJ(),
        height: HJ().optional().nullable(),
        width: HJ().optional().nullable()
      }),
      Ky = QJ({
        text: DJ(),
        icon_url: DJ().optional().nullable(),
        proxy_icon_url: DJ().optional().nullable()
      }),
      wy = QJ({
        url: DJ().optional().nullable(),
        proxy_url: DJ().optional().nullable(),
        height: HJ().optional().nullable(),
        width: HJ().optional().nullable()
      }),
      ry = wy.omit({
        proxy_url: !0
      }),
      ey = QJ({
        name: DJ().optional().nullable(),
        url: DJ().optional().nullable()
      }),
      ay = QJ({
        name: DJ().optional().nullable(),
        url: DJ().optional().nullable(),
        icon_url: DJ().optional().nullable(),
        proxy_icon_url: DJ().optional().nullable()
      }),
      Ly = QJ({
        name: DJ(),
        value: DJ(),
        inline: PJ()
      }),
      ny = QJ({
        title: DJ().optional().nullable(),
        type: DJ().optional().nullable(),
        description: DJ().optional().nullable(),
        url: DJ().optional().nullable(),
        timestamp: DJ().optional().nullable(),
        color: HJ().optional().nullable(),
        footer: Ky.optional().nullable(),
        image: wy.optional().nullable(),
        thumbnail: wy.optional().nullable(),
        video: ry.optional().nullable(),
        provider: ey.optional().nullable(),
        author: ay.optional().nullable(),
        fields: kJ(Ly).optional().nullable()
      }),
      Uy = QJ({
        count: HJ(),
        me: PJ(),
        emoji: hG
      }),
      Wy = QJ({
        type: HJ(),
        party_id: DJ().optional().nullable()
      }),
      Ay = QJ({
        id: DJ(),
        cover_image: DJ().optional().nullable(),
        description: DJ(),
        icon: DJ().optional().nullable(),
        name: DJ()
      }),
      Cy = QJ({
        message_id: DJ().optional().nullable(),
        channel_id: DJ().optional().nullable(),
        guild_id: DJ().optional().nullable()
      }),
      Xy = QJ({
        id: DJ(),
        channel_id: DJ(),
        guild_id: DJ().optional().nullable(),
        author: TG.optional().nullable(),
        member: sG.optional().nullable(),
        content: DJ(),
        timestamp: DJ(),
        edited_timestamp: DJ().optional().nullable(),
        tts: PJ(),
        mention_everyone: PJ(),
        mentions: kJ(TG),
        mention_roles: kJ(DJ()),
        mention_channels: kJ(fy),
        attachments: kJ(Vy),
        embeds: kJ(ny),
        reactions: kJ(Uy).optional().nullable(),
        nonce: TJ([DJ(), HJ()]).optional().nullable(),
        pinned: PJ(),
        webhook_id: DJ().optional().nullable(),
        type: HJ(),
        activity: Wy.optional().nullable(),
        application: Ay.optional().nullable(),
        message_reference: Cy.optional().nullable(),
        flags: HJ().optional().nullable(),
        stickers: kJ(dJ()).optional().nullable(),
        referenced_message: dJ().optional().nullable()
      }),
      My = QJ({
        id: DJ(),
        name: DJ()
      }),
      By = QJ({
        type: cG({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: HJ(),
        name: DJ()
      }),
      ly = QJ({
        type: cG({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: PJ(),
        threshold: HJ(),
        shortcut: kJ(By),
        delay: HJ()
      }),
      py = QJ({
        device_id: DJ(),
        volume: HJ(),
        available_devices: kJ(My)
      }),
      gy = (QJ({
        type: cG({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: DJ(),
        vendor: QJ({
          name: DJ(),
          url: DJ()
        }),
        model: QJ({
          name: DJ(),
          url: DJ()
        }),
        related: kJ(DJ()),
        echo_cancellation: PJ().optional().nullable(),
        noise_suppression: PJ().optional().nullable(),
        automatic_gain_control: PJ().optional().nullable(),
        hardware_mute: PJ().optional().nullable()
      }), QJ({
        id: DJ(),
        name: DJ(),
        type: cG({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: QJ({
          amount: HJ(),
          currency: DJ()
        }),
        application_id: DJ(),
        flags: HJ(),
        release_date: DJ().nullable()
      })),
      by = QJ({
        id: DJ(),
        sku_id: DJ(),
        application_id: DJ(),
        user_id: DJ(),
        gift_code_flags: HJ(),
        type: cG({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: DJ().optional().nullable(),
        branches: kJ(DJ()).optional().nullable(),
        starts_at: DJ().optional().nullable(),
        ends_at: DJ().optional().nullable(),
        parent_id: DJ().optional().nullable(),
        consumed: PJ().optional().nullable(),
        deleted: PJ().optional().nullable(),
        gift_code_batch_id: DJ().optional().nullable()
      }),
      vy = (cG({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), cG({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Oy = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      xy = (cG(Oy), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Ny = (cG(xy), "ERROR");
    var Dy;
    ! function(RR) {
      RR.READY = "READY", RR.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", RR.SPEAKING_START = "SPEAKING_START", RR.SPEAKING_STOP = "SPEAKING_STOP", RR.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", RR.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", RR.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", RR.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", RR.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", RR.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Dy || (Dy = {}));
    const Hy = FG.extend({
        evt: iG(Dy),
        nonce: DJ().nullable(),
        cmd: ZG(kG),
        data: QJ({}).passthrough()
      }),
      oy = FG.extend({
        evt: ZG(Ny),
        data: QJ({
          code: HJ(),
          message: DJ().optional()
        }).passthrough(),
        cmd: iG(QG),
        nonce: DJ().nullable()
      }),
      cy = Hy.extend({
        evt: DJ()
      }),
      Py = TJ([Hy, cy, oy]);
    const Iy = {
      [Dy.READY]: {
        payload: Hy.extend({
          evt: ZG(Dy.READY),
          data: QJ({
            v: HJ(),
            config: QJ({
              cdn_host: DJ().optional(),
              api_endpoint: DJ(),
              environment: DJ()
            }),
            user: QJ({
              id: DJ(),
              username: DJ(),
              discriminator: DJ(),
              avatar: DJ().optional()
            }).optional()
          })
        })
      },
      [Dy.VOICE_STATE_UPDATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.VOICE_STATE_UPDATE),
          data: Jy
        }),
        subscribeArgs: QJ({
          channel_id: DJ()
        })
      },
      [Dy.SPEAKING_START]: {
        payload: Hy.extend({
          evt: ZG(Dy.SPEAKING_START),
          data: QJ({
            lobby_id: DJ().optional(),
            channel_id: DJ().optional(),
            user_id: DJ()
          })
        }),
        subscribeArgs: QJ({
          lobby_id: DJ().nullable().optional(),
          channel_id: DJ().nullable().optional()
        })
      },
      [Dy.SPEAKING_STOP]: {
        payload: Hy.extend({
          evt: ZG(Dy.SPEAKING_STOP),
          data: QJ({
            lobby_id: DJ().optional(),
            channel_id: DJ().optional(),
            user_id: DJ()
          })
        }),
        subscribeArgs: QJ({
          lobby_id: DJ().nullable().optional(),
          channel_id: DJ().nullable().optional()
        })
      },
      [Dy.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: QJ({
            layout_mode: cG(xy)
          })
        })
      },
      [Dy.ORIENTATION_UPDATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.ORIENTATION_UPDATE),
          data: QJ({
            screen_orientation: cG(Oy),
            orientation: iG(DG)
          })
        })
      },
      [Dy.CURRENT_USER_UPDATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.CURRENT_USER_UPDATE),
          data: TG
        })
      },
      [Dy.ENTITLEMENT_CREATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.ENTITLEMENT_CREATE),
          data: QJ({
            entitlement: by
          })
        })
      },
      [Dy.THERMAL_STATE_UPDATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.THERMAL_STATE_UPDATE),
          data: QJ({
            thermal_state: vy
          })
        })
      },
      [Dy.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Hy.extend({
          evt: ZG(Dy.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: QJ({
            participants: SG.shape.participants
          })
        })
      }
    };
    const my = QJ({}).nullable(),
      zy = QJ({
        code: DJ()
      }),
      Sy = QJ({
        guilds: kJ(QJ({
          id: DJ(),
          name: DJ()
        }))
      }),
      jy = QJ({
        id: DJ(),
        name: DJ(),
        icon_url: DJ().optional(),
        members: kJ(sG)
      }),
      dy = QJ({
        id: DJ(),
        type: cG(uy),
        guild_id: DJ().optional().nullable(),
        name: DJ().optional().nullable(),
        topic: DJ().optional().nullable(),
        bitrate: HJ().optional().nullable(),
        user_limit: HJ().optional().nullable(),
        position: HJ().optional().nullable(),
        voice_states: kJ(Jy),
        messages: kJ(Xy)
      }),
      Ey = QJ({
        channels: kJ(Zy)
      }),
      Yy = (dy.nullable(), dy.nullable()),
      ky = dy.nullable(),
      Qy = (QJ({
        input: py,
        output: py,
        mode: ly,
        automatic_gain_control: PJ(),
        echo_cancellation: PJ(),
        noise_suppression: PJ(),
        qos: PJ(),
        silence_warning: PJ(),
        deaf: PJ(),
        mute: PJ()
      }), QJ({
        evt: DJ()
      })),
      Fy = QJ({
        shortcut: By
      }),
      Ty = yy,
      sy = QJ({
        skus: kJ(gy)
      }),
      hy = QJ({
        entitlements: kJ(by)
      }),
      Rt = kJ(by).nullable(),
      Jt = QJ({
        use_interactive_pip: PJ()
      }),
      Gt = QJ({
        locale: DJ()
      }),
      yt = QJ({
        enabled: PJ()
      }),
      tt = QJ({
        permissions: cJ().or(DJ())
      }),
      ut = QJ({
        iosKeyboardResizesView: KG(PJ())
      }),
      Zt = FG.extend({
        cmd: iG(QG),
        evt: SJ()
      });

    function qt(RR) {
      let {
        cmd: JR,
        data: GR
      } = RR;
      switch (JR) {
        case QG.AUTHORIZE:
          return zy.parse(GR);
        case QG.CAPTURE_SHORTCUT:
          return Fy.parse(GR);
        case QG.ENCOURAGE_HW_ACCELERATION:
          return yt.parse(GR);
        case QG.GET_CHANNEL:
          return dy.parse(GR);
        case QG.GET_CHANNELS:
          return Ey.parse(GR);
        case QG.GET_CHANNEL_PERMISSIONS:
          return tt.parse(GR);
        case QG.GET_GUILD:
          return jy.parse(GR);
        case QG.GET_GUILDS:
          return Sy.parse(GR);
        case QG.GET_PLATFORM_BEHAVIORS:
          return ut.parse(GR);
        case QG.GET_CHANNEL:
          return dy.parse(GR);
        case QG.SELECT_TEXT_CHANNEL:
          return ky.parse(GR);
        case QG.SELECT_VOICE_CHANNEL:
          return Yy.parse(GR);
        case QG.SET_ACTIVITY:
          return Ty.parse(GR);
        case QG.GET_SKUS_EMBEDDED:
          return sy.parse(GR);
        case QG.GET_ENTITLEMENTS_EMBEDDED:
          return hy.parse(GR);
        case QG.SET_CONFIG:
          return Jt.parse(GR);
        case QG.START_PURCHASE:
          return Rt.parse(GR);
        case QG.SUBSCRIBE:
        case QG.UNSUBSCRIBE:
          return Qy.parse(GR);
        case QG.USER_SETTINGS_GET_LOCALE:
          return Gt.parse(GR);
        case QG.OPEN_EXTERNAL_LINK:
        case QG.SET_ORIENTATION_LOCK_STATE:
        case QG.SET_CERTIFIED_DEVICES:
        case QG.SEND_ANALYTICS_EVENT:
        case QG.OPEN_INVITE_DIALOG:
        case QG.CAPTURE_LOG:
        case QG.GET_SKUS:
        case QG.GET_ENTITLEMENTS:
          return my.parse(GR);
        case QG.AUTHENTICATE:
        case QG.INITIATE_IMAGE_UPLOAD:
        case QG.OPEN_SHARE_MOMENT_DIALOG:
        case QG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: RR
          } = YG[JR];
          return RR.parse(GR);
        default:
          ! function(RR, JR) {
            throw JR
          }(0, new Error(`Unrecognized command ${JR}`))
      }
    }
    QJ({
      frame_id: DJ(),
      platform: iG(HG).optional().nullable()
    }), QJ({
      v: ZG(1),
      encoding: ZG("json").optional(),
      client_id: DJ(),
      frame_id: DJ()
    });
    const it = QJ({
        code: HJ(),
        message: DJ().optional()
      }),
      ft = QJ({
        evt: DJ().nullable(),
        nonce: DJ().nullable(),
        data: dJ().nullable(),
        cmd: DJ()
      }).passthrough();

    function Vt(RR) {
      const JR = ft.parse(RR);
      return null != JR.evt ? JR.evt === Ny ? oy.parse(JR) : function(RR) {
        const JR = RR.evt;
        if (!(JR in Dy)) throw new Error(`Unrecognized event type ${RR.evt}`);
        return Iy[JR].payload.parse(RR)
      }(Py.parse(JR)) : function(RR) {
        return Object.assign(Object.assign({}, RR), {
          data: qt(RR)
        })
      }(Zt.passthrough().parse(JR))
    }

    function Kt(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const tR = FG.extend({
        cmd: ZG(JR),
        data: GR
      });
      return async GR => {
        const uR = await RR({
          cmd: JR,
          args: GR,
          transfer: yR(GR)
        });
        return tR.parse(uR).data
      }
    }

    function wt(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const GR = YG[RR].response,
        yR = FG.extend({
          cmd: ZG(RR),
          data: GR
        });
      return GR => async tR => {
        const uR = await GR({
          cmd: RR,
          args: tR,
          transfer: JR(tR)
        });
        return yR.parse(uR).data
      }
    }
    const rt = wt(jG.AUTHENTICATE),
      et = RR => Kt(RR, QG.AUTHORIZE, zy),
      Lt = RR => Kt(RR, QG.CAPTURE_LOG, my),
      nt = RR => Kt(RR, QG.ENCOURAGE_HW_ACCELERATION, yt),
      Ut = RR => Kt(RR, QG.GET_ENTITLEMENTS_EMBEDDED, hy),
      Wt = RR => Kt(RR, QG.GET_SKUS_EMBEDDED, sy),
      At = RR => Kt(RR, QG.GET_CHANNEL_PERMISSIONS, tt),
      Ct = RR => Kt(RR, QG.GET_PLATFORM_BEHAVIORS, ut),
      Xt = RR => Kt(RR, QG.OPEN_EXTERNAL_LINK, my),
      Mt = RR => Kt(RR, QG.OPEN_INVITE_DIALOG, my),
      Bt = wt(jG.OPEN_SHARE_MOMENT_DIALOG);
    yy.Ur({
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
      type: yy.shape.type.optional(),
      instance: yy.shape.instance.optional()
    }).nullable();
    const lt = RR => Kt(RR, QG.SET_ACTIVITY, Ty),
      pt = RR => Kt(RR, QG.SET_CONFIG, Jt);
    const gt = RR => ({
        lock_state: RR.lock_state,
        picture_in_picture_lock_state: RR.picture_in_picture_lock_state
      }),
      bt = RR => function(RR) {
        let {
          sendCommand: JR,
          cmd: GR,
          response: yR,
          fallbackTransform: tR,
          transferTransform: uR = () => {}
        } = RR;
        const ZR = FG.extend({
          cmd: ZG(GR),
          data: yR
        });
        return async RR => {
          try {
            const yR = await JR({
              cmd: GR,
              args: RR,
              transfer: uR(RR)
            });
            return ZR.parse(yR).data
          } catch (yR) {
            if (yR.code === NG.INVALID_PAYLOAD) {
              const yR = tR(RR),
                qR = await JR({
                  cmd: GR,
                  args: yR,
                  transfer: uR(yR)
                });
              return ZR.parse(qR).data
            }
            throw yR
          }
        }
      }({
        sendCommand: RR,
        cmd: QG.SET_ORIENTATION_LOCK_STATE,
        response: my,
        fallbackTransform: gt
      }),
      vt = RR => Kt(RR, QG.START_PURCHASE, Rt),
      Ot = RR => Kt(RR, QG.USER_SETTINGS_GET_LOCALE, Gt),
      xt = wt(jG.INITIATE_IMAGE_UPLOAD),
      Nt = RR => Kt(RR, QG.GET_CHANNEL, dy),
      Dt = wt(jG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Ht = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function ot(RR) {
      return "string" === typeof RR && Ht.test(RR)
    }
    for (var ct = [], Pt = 0; Pt < 256; ++Pt) ct.push((Pt + 256).toString(16).substr(1));

    function It(RR) {
      var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = (ct[RR[JR + 0]] + ct[RR[JR + 1]] + ct[RR[JR + 2]] + ct[RR[JR + 3]] + "-" + ct[RR[JR + 4]] + ct[RR[JR + 5]] + "-" + ct[RR[JR + 6]] + ct[RR[JR + 7]] + "-" + ct[RR[JR + 8]] + ct[RR[JR + 9]] + "-" + ct[RR[JR + 10]] + ct[RR[JR + 11]] + ct[RR[JR + 12]] + ct[RR[JR + 13]] + ct[RR[JR + 14]] + ct[RR[JR + 15]]).toLowerCase();
      if (!ot(GR)) throw TypeError("Stringified UUID is invalid");
      return GR
    }
    var mt;

    function zt(RR, JR, GR) {
      function yR(RR, yR, tR, uR) {
        if ("string" === typeof RR && (RR = function(RR) {
            RR = unescape(encodeURIComponent(RR));
            for (var JR = [], GR = 0; GR < RR.length; ++GR) JR.push(RR.charCodeAt(GR));
            return JR
          }(RR)), "string" === typeof yR && (yR = function(RR) {
            if (!ot(RR)) throw TypeError("Invalid UUID");
            var JR, GR = new Uint8Array(16);
            return GR[0] = (JR = parseInt(RR.slice(0, 8), 16)) >>> 24, GR[1] = JR >>> 16 & 255, GR[2] = JR >>> 8 & 255, GR[3] = 255 & JR, GR[4] = (JR = parseInt(RR.slice(9, 13), 16)) >>> 8, GR[5] = 255 & JR, GR[6] = (JR = parseInt(RR.slice(14, 18), 16)) >>> 8, GR[7] = 255 & JR, GR[8] = (JR = parseInt(RR.slice(19, 23), 16)) >>> 8, GR[9] = 255 & JR, GR[10] = (JR = parseInt(RR.slice(24, 36), 16)) / 1099511627776 & 255, GR[11] = JR / 4294967296 & 255, GR[12] = JR >>> 24 & 255, GR[13] = JR >>> 16 & 255, GR[14] = JR >>> 8 & 255, GR[15] = 255 & JR, GR
          }(yR)), 16 !== yR.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var ZR = new Uint8Array(16 + RR.length);
        if (ZR.set(yR), ZR.set(RR, yR.length), (ZR = GR(ZR))[6] = 15 & ZR[6] | JR, ZR[8] = 63 & ZR[8] | 128, tR) {
          uR = uR || 0;
          for (var qR = 0; qR < 16; ++qR) tR[uR + qR] = ZR[qR];
          return tR
        }
        return It(ZR)
      }
      try {
        yR.name = RR
      } catch (tR) {}
      return yR.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", yR.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", yR
    }

    function St(RR) {
      return 14 + (RR + 64 >>> 9 << 4) + 1
    }

    function jt(RR, JR) {
      var GR = (65535 & RR) + (65535 & JR);
      return (RR >> 16) + (JR >> 16) + (GR >> 16) << 16 | 65535 & GR
    }

    function dt(RR, JR, GR, yR, tR, uR) {
      return jt((ZR = jt(jt(JR, RR), jt(yR, uR))) << (qR = tR) | ZR >>> 32 - qR, GR);
      var ZR, qR
    }

    function Et(RR, JR, GR, yR, tR, uR, ZR) {
      return dt(JR & GR | ~JR & yR, RR, JR, tR, uR, ZR)
    }

    function Yt(RR, JR, GR, yR, tR, uR, ZR) {
      return dt(JR & yR | GR & ~yR, RR, JR, tR, uR, ZR)
    }

    function kt(RR, JR, GR, yR, tR, uR, ZR) {
      return dt(JR ^ GR ^ yR, RR, JR, tR, uR, ZR)
    }

    function Qt(RR, JR, GR, yR, tR, uR, ZR) {
      return dt(GR ^ (JR | ~yR), RR, JR, tR, uR, ZR)
    }
    zt("v3", 48, (function(RR) {
      if ("string" === typeof RR) {
        var JR = unescape(encodeURIComponent(RR));
        RR = new Uint8Array(JR.length);
        for (var GR = 0; GR < JR.length; ++GR) RR[GR] = JR.charCodeAt(GR)
      }
      return function(RR) {
        for (var JR = [], GR = 32 * RR.length, yR = "0123456789abcdef", tR = 0; tR < GR; tR += 8) {
          var uR = RR[tR >> 5] >>> tR % 32 & 255,
            ZR = parseInt(yR.charAt(uR >>> 4 & 15) + yR.charAt(15 & uR), 16);
          JR.push(ZR)
        }
        return JR
      }(function(RR, JR) {
        RR[JR >> 5] |= 128 << JR % 32, RR[St(JR) - 1] = JR;
        for (var GR = 1732584193, yR = -271733879, tR = -1732584194, uR = 271733878, ZR = 0; ZR < RR.length; ZR += 16) {
          var qR = GR,
            iR = yR,
            fR = tR,
            VR = uR;
          GR = Et(GR, yR, tR, uR, RR[ZR], 7, -680876936), uR = Et(uR, GR, yR, tR, RR[ZR + 1], 12, -389564586), tR = Et(tR, uR, GR, yR, RR[ZR + 2], 17, 606105819), yR = Et(yR, tR, uR, GR, RR[ZR + 3], 22, -1044525330), GR = Et(GR, yR, tR, uR, RR[ZR + 4], 7, -176418897), uR = Et(uR, GR, yR, tR, RR[ZR + 5], 12, 1200080426), tR = Et(tR, uR, GR, yR, RR[ZR + 6], 17, -1473231341), yR = Et(yR, tR, uR, GR, RR[ZR + 7], 22, -45705983), GR = Et(GR, yR, tR, uR, RR[ZR + 8], 7, 1770035416), uR = Et(uR, GR, yR, tR, RR[ZR + 9], 12, -1958414417), tR = Et(tR, uR, GR, yR, RR[ZR + 10], 17, -42063), yR = Et(yR, tR, uR, GR, RR[ZR + 11], 22, -1990404162), GR = Et(GR, yR, tR, uR, RR[ZR + 12], 7, 1804603682), uR = Et(uR, GR, yR, tR, RR[ZR + 13], 12, -40341101), tR = Et(tR, uR, GR, yR, RR[ZR + 14], 17, -1502002290), GR = Yt(GR, yR = Et(yR, tR, uR, GR, RR[ZR + 15], 22, 1236535329), tR, uR, RR[ZR + 1], 5, -165796510), uR = Yt(uR, GR, yR, tR, RR[ZR + 6], 9, -1069501632), tR = Yt(tR, uR, GR, yR, RR[ZR + 11], 14, 643717713), yR = Yt(yR, tR, uR, GR, RR[ZR], 20, -373897302), GR = Yt(GR, yR, tR, uR, RR[ZR + 5], 5, -701558691), uR = Yt(uR, GR, yR, tR, RR[ZR + 10], 9, 38016083), tR = Yt(tR, uR, GR, yR, RR[ZR + 15], 14, -660478335), yR = Yt(yR, tR, uR, GR, RR[ZR + 4], 20, -405537848), GR = Yt(GR, yR, tR, uR, RR[ZR + 9], 5, 568446438), uR = Yt(uR, GR, yR, tR, RR[ZR + 14], 9, -1019803690), tR = Yt(tR, uR, GR, yR, RR[ZR + 3], 14, -187363961), yR = Yt(yR, tR, uR, GR, RR[ZR + 8], 20, 1163531501), GR = Yt(GR, yR, tR, uR, RR[ZR + 13], 5, -1444681467), uR = Yt(uR, GR, yR, tR, RR[ZR + 2], 9, -51403784), tR = Yt(tR, uR, GR, yR, RR[ZR + 7], 14, 1735328473), GR = kt(GR, yR = Yt(yR, tR, uR, GR, RR[ZR + 12], 20, -1926607734), tR, uR, RR[ZR + 5], 4, -378558), uR = kt(uR, GR, yR, tR, RR[ZR + 8], 11, -2022574463), tR = kt(tR, uR, GR, yR, RR[ZR + 11], 16, 1839030562), yR = kt(yR, tR, uR, GR, RR[ZR + 14], 23, -35309556), GR = kt(GR, yR, tR, uR, RR[ZR + 1], 4, -1530992060), uR = kt(uR, GR, yR, tR, RR[ZR + 4], 11, 1272893353), tR = kt(tR, uR, GR, yR, RR[ZR + 7], 16, -155497632), yR = kt(yR, tR, uR, GR, RR[ZR + 10], 23, -1094730640), GR = kt(GR, yR, tR, uR, RR[ZR + 13], 4, 681279174), uR = kt(uR, GR, yR, tR, RR[ZR], 11, -358537222), tR = kt(tR, uR, GR, yR, RR[ZR + 3], 16, -722521979), yR = kt(yR, tR, uR, GR, RR[ZR + 6], 23, 76029189), GR = kt(GR, yR, tR, uR, RR[ZR + 9], 4, -640364487), uR = kt(uR, GR, yR, tR, RR[ZR + 12], 11, -421815835), tR = kt(tR, uR, GR, yR, RR[ZR + 15], 16, 530742520), GR = Qt(GR, yR = kt(yR, tR, uR, GR, RR[ZR + 2], 23, -995338651), tR, uR, RR[ZR], 6, -198630844), uR = Qt(uR, GR, yR, tR, RR[ZR + 7], 10, 1126891415), tR = Qt(tR, uR, GR, yR, RR[ZR + 14], 15, -1416354905), yR = Qt(yR, tR, uR, GR, RR[ZR + 5], 21, -57434055), GR = Qt(GR, yR, tR, uR, RR[ZR + 12], 6, 1700485571), uR = Qt(uR, GR, yR, tR, RR[ZR + 3], 10, -1894986606), tR = Qt(tR, uR, GR, yR, RR[ZR + 10], 15, -1051523), yR = Qt(yR, tR, uR, GR, RR[ZR + 1], 21, -2054922799), GR = Qt(GR, yR, tR, uR, RR[ZR + 8], 6, 1873313359), uR = Qt(uR, GR, yR, tR, RR[ZR + 15], 10, -30611744), tR = Qt(tR, uR, GR, yR, RR[ZR + 6], 15, -1560198380), yR = Qt(yR, tR, uR, GR, RR[ZR + 13], 21, 1309151649), GR = Qt(GR, yR, tR, uR, RR[ZR + 4], 6, -145523070), uR = Qt(uR, GR, yR, tR, RR[ZR + 11], 10, -1120210379), tR = Qt(tR, uR, GR, yR, RR[ZR + 2], 15, 718787259), yR = Qt(yR, tR, uR, GR, RR[ZR + 9], 21, -343485551), GR = jt(GR, qR), yR = jt(yR, iR), tR = jt(tR, fR), uR = jt(uR, VR)
        }
        return [GR, yR, tR, uR]
      }(function(RR) {
        if (0 === RR.length) return [];
        for (var JR = 8 * RR.length, GR = new Uint32Array(St(JR)), yR = 0; yR < JR; yR += 8) GR[yR >> 5] |= (255 & RR[yR / 8]) << yR % 32;
        return GR
      }(RR), 8 * RR.length))
    }));
    var Ft = new Uint8Array(16);

    function Tt() {
      if (!mt && !(mt = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return mt(Ft)
    }

    function st(RR, JR, GR) {
      var yR = (RR = RR || {}).random || (RR.rng || Tt)();
      if (yR[6] = 15 & yR[6] | 64, yR[8] = 63 & yR[8] | 128, JR) {
        GR = GR || 0;
        for (var tR = 0; tR < 16; ++tR) JR[GR + tR] = yR[tR];
        return JR
      }
      return It(yR)
    }

    function ht(RR, JR, GR, yR) {
      switch (RR) {
        case 0:
          return JR & GR ^ ~JR & yR;
        case 1:
        case 3:
          return JR ^ GR ^ yR;
        case 2:
          return JR & GR ^ JR & yR ^ GR & yR
      }
    }

    function Ru(RR, JR) {
      return RR << JR | RR >>> 32 - JR
    }
    zt("v5", 80, (function(RR) {
      var JR = [1518500249, 1859775393, 2400959708, 3395469782],
        GR = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof RR) {
        var yR = unescape(encodeURIComponent(RR));
        RR = [];
        for (var tR = 0; tR < yR.length; ++tR) RR.push(yR.charCodeAt(tR))
      } else Array.isArray(RR) || (RR = Array.prototype.slice.call(RR));
      RR.push(128);
      for (var uR = RR.length / 4 + 2, ZR = Math.ceil(uR / 16), qR = new Array(ZR), iR = 0; iR < ZR; ++iR) {
        for (var fR = new Uint32Array(16), VR = 0; VR < 16; ++VR) fR[VR] = RR[64 * iR + 4 * VR] << 24 | RR[64 * iR + 4 * VR + 1] << 16 | RR[64 * iR + 4 * VR + 2] << 8 | RR[64 * iR + 4 * VR + 3];
        qR[iR] = fR
      }
      qR[ZR - 1][14] = 8 * (RR.length - 1) / Math.pow(2, 32), qR[ZR - 1][14] = Math.floor(qR[ZR - 1][14]), qR[ZR - 1][15] = 8 * (RR.length - 1) & 4294967295;
      for (var KR = 0; KR < ZR; ++KR) {
        for (var wR = new Uint32Array(80), rR = 0; rR < 16; ++rR) wR[rR] = qR[KR][rR];
        for (var eR = 16; eR < 80; ++eR) wR[eR] = Ru(wR[eR - 3] ^ wR[eR - 8] ^ wR[eR - 14] ^ wR[eR - 16], 1);
        for (var aR = GR[0], LR = GR[1], nR = GR[2], UR = GR[3], WR = GR[4], AR = 0; AR < 80; ++AR) {
          var CR = Math.floor(AR / 20),
            XR = Ru(aR, 5) + ht(CR, LR, nR, UR) + WR + JR[CR] + wR[AR] >>> 0;
          WR = UR, UR = nR, nR = Ru(LR, 30) >>> 0, LR = aR, aR = XR
        }
        GR[0] = GR[0] + aR >>> 0, GR[1] = GR[1] + LR >>> 0, GR[2] = GR[2] + nR >>> 0, GR[3] = GR[3] + UR >>> 0, GR[4] = GR[4] + WR >>> 0
      }
      return [GR[0] >> 24 & 255, GR[0] >> 16 & 255, GR[0] >> 8 & 255, 255 & GR[0], GR[1] >> 24 & 255, GR[1] >> 16 & 255, GR[1] >> 8 & 255, 255 & GR[1], GR[2] >> 24 & 255, GR[2] >> 16 & 255, GR[2] >> 8 & 255, 255 & GR[2], GR[3] >> 24 & 255, GR[3] >> 16 & 255, GR[3] >> 8 & 255, 255 & GR[3], GR[4] >> 24 & 255, GR[4] >> 16 & 255, GR[4] >> 8 & 255, 255 & GR[4]]
    }));
    class Ju extends Error {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(JR), this.code = RR, this.message = JR, this.name = "Discord SDK Error"
      }
    }
    const Gu = ["log", "warn", "debug", "info", "error"];
    var yu;
    ! function(RR) {
      RR[RR.HANDSHAKE = 0] = "HANDSHAKE", RR[RR.FRAME = 1] = "FRAME", RR[RR.CLOSE = 2] = "CLOSE", RR[RR.HELLO = 3] = "HELLO"
    }(yu || (yu = {}));
    const tu = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class uu {
      getTransfer(RR) {
        var JR;
        switch (RR.cmd) {
          case QG.SUBSCRIBE:
          case QG.UNSUBSCRIBE:
            return;
          default:
            return null !== (JR = RR.transfer) && void 0 !== JR ? JR : void 0
        }
      }
      constructor(RR, JR) {
        var GR;
        if (this.eventBus = new fR, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = RR => {
            var JR;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const GR = st();
            null === (JR = this.source) || void 0 === JR || JR.postMessage([yu.FRAME, Object.assign(Object.assign({}, RR), {
              nonce: GR
            })], this.sourceOrigin, this.getTransfer(RR));
            return new Promise(((RR, JR) => {
              this.pendingCommands.set(GR, {
                resolve: RR,
                reject: JR
              })
            }))
          }, this.commands = (GR = this.sendCommand, {
            authenticate: rt(GR),
            authorize: et(GR),
            captureLog: Lt(GR),
            encourageHardwareAcceleration: nt(GR),
            getChannel: Nt(GR),
            getChannelPermissions: At(GR),
            getEntitlements: Ut(GR),
            getPlatformBehaviors: Ct(GR),
            getSkus: Wt(GR),
            openExternalLink: Xt(GR),
            openInviteDialog: Mt(GR),
            openShareMomentDialog: Bt(GR),
            setActivity: lt(GR),
            setConfig: pt(GR),
            setOrientationLockState: bt(GR),
            startPurchase: vt(GR),
            userSettingsGetLocale: Ot(GR),
            initiateImageUpload: xt(GR),
            getInstanceConnectedParticipants: Dt(GR)
          }), this.handleMessage = RR => {
            if (!tu.has(RR.origin)) return;
            const JR = RR.data;
            if (!Array.isArray(JR)) return;
            const [GR, yR] = JR;
            switch (GR) {
              case yu.HELLO:
                return;
              case yu.CLOSE:
                return this.handleClose(yR);
              case yu.HANDSHAKE:
                return this.handleHandshake();
              case yu.FRAME:
                return this.handleFrame(yR);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = RR, this.configuration = null !== JR && void 0 !== JR ? JR : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = HG.DESKTOP, this.guildId = null, void(this.channelId = null);
        const yR = new URLSearchParams(this._getSearch()),
          tR = yR.get("frame_id");
        if (!tR) throw new Error("frame_id query param is not defined");
        this.frameId = tR;
        const uR = yR.get("instance_id");
        if (!uR) throw new Error("instance_id query param is not defined");
        this.instanceId = uR;
        const ZR = yR.get("platform");
        if (!ZR) throw new Error("platform query param is not defined");
        if (ZR !== HG.DESKTOP && ZR !== HG.MOBILE) throw new Error(`Invalid query param "platform" of "${ZR}". Valid values are "${HG.DESKTOP}" or "${HG.MOBILE}"`);
        this.platform = ZR, this.guildId = yR.get("guild_id"), this.channelId = yR.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var RR;
          return [null !== (RR = window.parent.opener) && void 0 !== RR ? RR : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(RR, JR) {
        var GR;
        window.removeEventListener("message", this.handleMessage);
        const yR = st();
        null === (GR = this.source) || void 0 === GR || GR.postMessage([yu.CLOSE, {
          code: RR,
          message: JR,
          nonce: yR
        }], this.sourceOrigin)
      }
      async subscribe(RR, JR) {
        for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
        const [uR] = yR, ZR = this.eventBus.listenerCount(RR), qR = this.eventBus.on(RR, JR);
        return Object.values(Dy).includes(RR) && RR !== Dy.READY && 0 === ZR && await this.sendCommand({
          cmd: QG.SUBSCRIBE,
          args: uR,
          evt: RR
        }), qR
      }
      async unsubscribe(RR, JR) {
        for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
        const [uR] = yR;
        return RR !== Dy.READY && 1 === this.eventBus.listenerCount(RR) && await this.sendCommand({
          cmd: QG.UNSUBSCRIBE,
          evt: RR,
          args: uR
        }), this.eventBus.off(RR, JR)
      }
      async ready() {
        this.isReady || await new Promise((RR => {
          this.eventBus.once(Dy.READY, RR)
        }))
      }
      handshake() {
        var RR;
        null === (RR = this.source) || void 0 === RR || RR.postMessage([yu.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Dy.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const RR = (RR, JR) => {
          this.commands.captureLog({
            level: RR,
            message: JR
          })
        };
        Gu.forEach((JR => {
          ! function(RR, JR, GR) {
            const yR = RR[JR],
              tR = RR;
            yR && (RR[JR] = function() {
              const RR = [].slice.call(arguments),
                uR = "" + RR.join(" ");
              GR(JR, uR), yR.apply(tR, RR)
            })
          }(console, JR, RR)
        }))
      }
      handleClose(RR) {
        it.parse(RR)
      }
      handleHandshake() {}
      handleFrame(RR) {
        var JR, GR;
        let yR;
        try {
          yR = Vt(RR)
        } catch (tR) {
          return console.error("Failed to parse", RR), void console.error(tR)
        }
        if ("DISPATCH" === yR.cmd) this.eventBus.emit(yR.evt, yR.data);
        else {
          if (yR.evt === Ny) {
            if (null != yR.nonce) return null === (JR = this.pendingCommands.get(yR.nonce)) || void 0 === JR || JR.reject(yR.data), void this.pendingCommands.delete(yR.nonce);
            this.eventBus.emit("error", new Ju(yR.data.code, yR.data.message))
          }
          if (null == yR.nonce) return void console.error("Missing nonce", RR);
          null === (GR = this.pendingCommands.get(yR.nonce)) || void 0 === GR || GR.resolve(yR), this.pendingCommands.delete(yR.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Zu, qu = 1e9,
      iu = !0,
      fu = "[DecimalError] ",
      Vu = fu + "Invalid argument: ",
      Ku = fu + "Exponent out of range: ",
      wu = Math.floor,
      ru = Math.pow,
      eu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      au = 1e7,
      Lu = 9007199254740991,
      nu = wu(1286742750677284.5),
      Uu = {};

    function Wu(RR, JR) {
      var GR, yR, tR, uR, ZR, qR, iR, fR, VR = RR.constructor,
        KR = VR.precision;
      if (!RR.s || !JR.s) return JR.s || (JR = new VR(RR)), iu ? vu(JR, KR) : JR;
      if (iR = RR.d, fR = JR.d, ZR = RR.e, tR = JR.e, iR = iR.slice(), uR = ZR - tR) {
        for (uR < 0 ? (yR = iR, uR = -uR, qR = fR.length) : (yR = fR, tR = ZR, qR = iR.length), uR > (qR = (ZR = Math.ceil(KR / 7)) > qR ? ZR + 1 : qR + 1) && (uR = qR, yR.length = 1), yR.reverse(); uR--;) yR.push(0);
        yR.reverse()
      }
      for ((qR = iR.length) - (uR = fR.length) < 0 && (uR = qR, yR = fR, fR = iR, iR = yR), GR = 0; uR;) GR = (iR[--uR] = iR[uR] + fR[uR] + GR) / au | 0, iR[uR] %= au;
      for (GR && (iR.unshift(GR), ++tR), qR = iR.length; 0 == iR[--qR];) iR.pop();
      return JR.d = iR, JR.e = tR, iu ? vu(JR, KR) : JR
    }

    function Au(RR, JR, GR) {
      if (RR !== ~~RR || RR < JR || RR > GR) throw Error(Vu + RR)
    }

    function Cu(RR) {
      var JR, GR, yR, tR = RR.length - 1,
        uR = "",
        ZR = RR[0];
      if (tR > 0) {
        for (uR += ZR, JR = 1; JR < tR; JR++)(GR = 7 - (yR = RR[JR] + "").length) && (uR += pu(GR)), uR += yR;
        (GR = 7 - (yR = (ZR = RR[JR]) + "").length) && (uR += pu(GR))
      } else if (0 === ZR) return "0";
      for (; ZR % 10 === 0;) ZR /= 10;
      return uR + ZR
    }
    Uu.absoluteValue = Uu.abs = function() {
      var RR = new this.constructor(this);
      return RR.s && (RR.s = 1), RR
    }, Uu.comparedTo = Uu.cmp = function(RR) {
      var JR, GR, yR, tR, uR = this;
      if (RR = new uR.constructor(RR), uR.s !== RR.s) return uR.s || -RR.s;
      if (uR.e !== RR.e) return uR.e > RR.e ^ uR.s < 0 ? 1 : -1;
      for (JR = 0, GR = (yR = uR.d.length) < (tR = RR.d.length) ? yR : tR; JR < GR; ++JR)
        if (uR.d[JR] !== RR.d[JR]) return uR.d[JR] > RR.d[JR] ^ uR.s < 0 ? 1 : -1;
      return yR === tR ? 0 : yR > tR ^ uR.s < 0 ? 1 : -1
    }, Uu.decimalPlaces = Uu.dp = function() {
      var RR = this,
        JR = RR.d.length - 1,
        GR = 7 * (JR - RR.e);
      if (JR = RR.d[JR])
        for (; JR % 10 == 0; JR /= 10) GR--;
      return GR < 0 ? 0 : GR
    }, Uu.dividedBy = Uu.div = function(RR) {
      return Xu(this, new this.constructor(RR))
    }, Uu.dividedToIntegerBy = Uu.idiv = function(RR) {
      var JR = this.constructor;
      return vu(Xu(this, new JR(RR), 0, 1), JR.precision)
    }, Uu.equals = Uu.eq = function(RR) {
      return !this.cmp(RR)
    }, Uu.exponent = function() {
      return Bu(this)
    }, Uu.greaterThan = Uu.gt = function(RR) {
      return this.cmp(RR) > 0
    }, Uu.greaterThanOrEqualTo = Uu.gte = function(RR) {
      return this.cmp(RR) >= 0
    }, Uu.isInteger = Uu.isint = function() {
      return this.e > this.d.length - 2
    }, Uu.isNegative = Uu.isneg = function() {
      return this.s < 0
    }, Uu.isPositive = Uu.ispos = function() {
      return this.s > 0
    }, Uu.isZero = function() {
      return 0 === this.s
    }, Uu.lessThan = Uu.lt = function(RR) {
      return this.cmp(RR) < 0
    }, Uu.lessThanOrEqualTo = Uu.lte = function(RR) {
      return this.cmp(RR) < 1
    }, Uu.logarithm = Uu.log = function(RR) {
      var JR, GR = this,
        yR = GR.constructor,
        tR = yR.precision,
        uR = tR + 5;
      if (void 0 === RR) RR = new yR(10);
      else if ((RR = new yR(RR)).s < 1 || RR.eq(Zu)) throw Error(fu + "NaN");
      if (GR.s < 1) throw Error(fu + (GR.s ? "NaN" : "-Infinity"));
      return GR.eq(Zu) ? new yR(0) : (iu = !1, JR = Xu(gu(GR, uR), gu(RR, uR), uR), iu = !0, vu(JR, tR))
    }, Uu.minus = Uu.sub = function(RR) {
      var JR = this;
      return RR = new JR.constructor(RR), JR.s == RR.s ? Ou(JR, RR) : Wu(JR, (RR.s = -RR.s, RR))
    }, Uu.modulo = Uu.mod = function(RR) {
      var JR, GR = this,
        yR = GR.constructor,
        tR = yR.precision;
      if (!(RR = new yR(RR)).s) throw Error(fu + "NaN");
      return GR.s ? (iu = !1, JR = Xu(GR, RR, 0, 1).times(RR), iu = !0, GR.minus(JR)) : vu(new yR(GR), tR)
    }, Uu.naturalExponential = Uu.exp = function() {
      return Mu(this)
    }, Uu.naturalLogarithm = Uu.ln = function() {
      return gu(this)
    }, Uu.negated = Uu.neg = function() {
      var RR = new this.constructor(this);
      return RR.s = -RR.s || 0, RR
    }, Uu.plus = Uu.add = function(RR) {
      var JR = this;
      return RR = new JR.constructor(RR), JR.s == RR.s ? Wu(JR, RR) : Ou(JR, (RR.s = -RR.s, RR))
    }, Uu.precision = Uu.sd = function(RR) {
      var JR, GR, yR, tR = this;
      if (void 0 !== RR && RR !== !!RR && 1 !== RR && 0 !== RR) throw Error(Vu + RR);
      if (JR = Bu(tR) + 1, GR = 7 * (yR = tR.d.length - 1) + 1, yR = tR.d[yR]) {
        for (; yR % 10 == 0; yR /= 10) GR--;
        for (yR = tR.d[0]; yR >= 10; yR /= 10) GR++
      }
      return RR && JR > GR ? JR : GR
    }, Uu.squareRoot = Uu.sqrt = function() {
      var RR, JR, GR, yR, tR, uR, ZR, qR = this,
        iR = qR.constructor;
      if (qR.s < 1) {
        if (!qR.s) return new iR(0);
        throw Error(fu + "NaN")
      }
      for (RR = Bu(qR), iu = !1, 0 == (tR = Math.sqrt(+qR)) || tR == 1 / 0 ? (((JR = Cu(qR.d)).length + RR) % 2 == 0 && (JR += "0"), tR = Math.sqrt(JR), RR = wu((RR + 1) / 2) - (RR < 0 || RR % 2), yR = new iR(JR = tR == 1 / 0 ? "1e" + RR : (JR = tR.toExponential()).slice(0, JR.indexOf("e") + 1) + RR)) : yR = new iR(tR.toString()), tR = ZR = (GR = iR.precision) + 3;;)
        if (yR = (uR = yR).plus(Xu(qR, uR, ZR + 2)).times(.5), Cu(uR.d).slice(0, ZR) === (JR = Cu(yR.d)).slice(0, ZR)) {
          if (JR = JR.slice(ZR - 3, ZR + 1), tR == ZR && "4999" == JR) {
            if (vu(uR, GR + 1, 0), uR.times(uR).eq(qR)) {
              yR = uR;
              break
            }
          } else if ("9999" != JR) break;
          ZR += 4
        } return iu = !0, vu(yR, GR)
    }, Uu.times = Uu.mul = function(RR) {
      var JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR = this,
        KR = VR.constructor,
        wR = VR.d,
        rR = (RR = new KR(RR)).d;
      if (!VR.s || !RR.s) return new KR(0);
      for (RR.s *= VR.s, GR = VR.e + RR.e, (iR = wR.length) < (fR = rR.length) && (uR = wR, wR = rR, rR = uR, ZR = iR, iR = fR, fR = ZR), uR = [], yR = ZR = iR + fR; yR--;) uR.push(0);
      for (yR = fR; --yR >= 0;) {
        for (JR = 0, tR = iR + yR; tR > yR;) qR = uR[tR] + rR[yR] * wR[tR - yR - 1] + JR, uR[tR--] = qR % au | 0, JR = qR / au | 0;
        uR[tR] = (uR[tR] + JR) % au | 0
      }
      for (; !uR[--ZR];) uR.pop();
      return JR ? ++GR : uR.shift(), RR.d = uR, RR.e = GR, iu ? vu(RR, KR.precision) : RR
    }, Uu.toDecimalPlaces = Uu.todp = function(RR, JR) {
      var GR = this,
        yR = GR.constructor;
      return GR = new yR(GR), void 0 === RR ? GR : (Au(RR, 0, qu), void 0 === JR ? JR = yR.rounding : Au(JR, 0, 8), vu(GR, RR + Bu(GR) + 1, JR))
    }, Uu.toExponential = function(RR, JR) {
      var GR, yR = this,
        tR = yR.constructor;
      return void 0 === RR ? GR = xu(yR, !0) : (Au(RR, 0, qu), void 0 === JR ? JR = tR.rounding : Au(JR, 0, 8), GR = xu(yR = vu(new tR(yR), RR + 1, JR), !0, RR + 1)), GR
    }, Uu.toFixed = function(RR, JR) {
      var GR, yR, tR = this,
        uR = tR.constructor;
      return void 0 === RR ? xu(tR) : (Au(RR, 0, qu), void 0 === JR ? JR = uR.rounding : Au(JR, 0, 8), GR = xu((yR = vu(new uR(tR), RR + Bu(tR) + 1, JR)).abs(), !1, RR + Bu(yR) + 1), tR.isneg() && !tR.isZero() ? "-" + GR : GR)
    }, Uu.toInteger = Uu.toint = function() {
      var RR = this,
        JR = RR.constructor;
      return vu(new JR(RR), Bu(RR) + 1, JR.rounding)
    }, Uu.toNumber = function() {
      return +this
    }, Uu.toPower = Uu.pow = function(RR) {
      var JR, GR, yR, tR, uR, ZR, qR = this,
        iR = qR.constructor,
        fR = +(RR = new iR(RR));
      if (!RR.s) return new iR(Zu);
      if (!(qR = new iR(qR)).s) {
        if (RR.s < 1) throw Error(fu + "Infinity");
        return qR
      }
      if (qR.eq(Zu)) return qR;
      if (yR = iR.precision, RR.eq(Zu)) return vu(qR, yR);
      if (ZR = (JR = RR.e) >= (GR = RR.d.length - 1), uR = qR.s, ZR) {
        if ((GR = fR < 0 ? -fR : fR) <= Lu) {
          for (tR = new iR(Zu), JR = Math.ceil(yR / 7 + 4), iu = !1; GR % 2 && Nu((tR = tR.times(qR)).d, JR), 0 !== (GR = wu(GR / 2));) Nu((qR = qR.times(qR)).d, JR);
          return iu = !0, RR.s < 0 ? new iR(Zu).div(tR) : vu(tR, yR)
        }
      } else if (uR < 0) throw Error(fu + "NaN");
      return uR = uR < 0 && 1 & RR.d[Math.max(JR, GR)] ? -1 : 1, qR.s = 1, iu = !1, tR = RR.times(gu(qR, yR + 12)), iu = !0, (tR = Mu(tR)).s = uR, tR
    }, Uu.toPrecision = function(RR, JR) {
      var GR, yR, tR = this,
        uR = tR.constructor;
      return void 0 === RR ? yR = xu(tR, (GR = Bu(tR)) <= uR.toExpNeg || GR >= uR.toExpPos) : (Au(RR, 1, qu), void 0 === JR ? JR = uR.rounding : Au(JR, 0, 8), yR = xu(tR = vu(new uR(tR), RR, JR), RR <= (GR = Bu(tR)) || GR <= uR.toExpNeg, RR)), yR
    }, Uu.toSignificantDigits = Uu.tosd = function(RR, JR) {
      var GR = this.constructor;
      return void 0 === RR ? (RR = GR.precision, JR = GR.rounding) : (Au(RR, 1, qu), void 0 === JR ? JR = GR.rounding : Au(JR, 0, 8)), vu(new GR(this), RR, JR)
    }, Uu.toString = Uu.valueOf = Uu.val = Uu.toJSON = Uu[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var RR = this,
        JR = Bu(RR),
        GR = RR.constructor;
      return xu(RR, JR <= GR.toExpNeg || JR >= GR.toExpPos)
    };
    var Xu = function() {
      function RR(RR, JR) {
        var GR, yR = 0,
          tR = RR.length;
        for (RR = RR.slice(); tR--;) GR = RR[tR] * JR + yR, RR[tR] = GR % au | 0, yR = GR / au | 0;
        return yR && RR.unshift(yR), RR
      }

      function JR(RR, JR, GR, yR) {
        var tR, uR;
        if (GR != yR) uR = GR > yR ? 1 : -1;
        else
          for (tR = uR = 0; tR < GR; tR++)
            if (RR[tR] != JR[tR]) {
              uR = RR[tR] > JR[tR] ? 1 : -1;
              break
            } return uR
      }

      function GR(RR, JR, GR) {
        for (var yR = 0; GR--;) RR[GR] -= yR, yR = RR[GR] < JR[GR] ? 1 : 0, RR[GR] = yR * au + RR[GR] - JR[GR];
        for (; !RR[0] && RR.length > 1;) RR.shift()
      }
      return function(yR, tR, uR, ZR) {
        var qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR, CR, XR, MR, BR, lR = yR.constructor,
          pR = yR.s == tR.s ? 1 : -1,
          gR = yR.d,
          bR = tR.d;
        if (!yR.s) return new lR(yR);
        if (!tR.s) throw Error(fu + "Division by zero");
        for (iR = yR.e - tR.e, MR = bR.length, CR = gR.length, eR = (rR = new lR(pR)).d = [], fR = 0; bR[fR] == (gR[fR] || 0);) ++fR;
        if (bR[fR] > (gR[fR] || 0) && --iR, (UR = null == uR ? uR = lR.precision : ZR ? uR + (Bu(yR) - Bu(tR)) + 1 : uR) < 0) return new lR(0);
        if (UR = UR / 7 + 2 | 0, fR = 0, 1 == MR)
          for (VR = 0, bR = bR[0], UR++;
            (fR < CR || VR) && UR--; fR++) WR = VR * au + (gR[fR] || 0), eR[fR] = WR / bR | 0, VR = WR % bR | 0;
        else {
          for ((VR = au / (bR[0] + 1) | 0) > 1 && (bR = RR(bR, VR), gR = RR(gR, VR), MR = bR.length, CR = gR.length), AR = MR, LR = (aR = gR.slice(0, MR)).length; LR < MR;) aR[LR++] = 0;
          (BR = bR.slice()).unshift(0), XR = bR[0], bR[1] >= au / 2 && ++XR;
          do {
            VR = 0, (qR = JR(bR, aR, MR, LR)) < 0 ? (nR = aR[0], MR != LR && (nR = nR * au + (aR[1] || 0)), (VR = nR / XR | 0) > 1 ? (VR >= au && (VR = au - 1), 1 == (qR = JR(KR = RR(bR, VR), aR, wR = KR.length, LR = aR.length)) && (VR--, GR(KR, MR < wR ? BR : bR, wR))) : (0 == VR && (qR = VR = 1), KR = bR.slice()), (wR = KR.length) < LR && KR.unshift(0), GR(aR, KR, LR), -1 == qR && (qR = JR(bR, aR, MR, LR = aR.length)) < 1 && (VR++, GR(aR, MR < LR ? BR : bR, LR)), LR = aR.length) : 0 === qR && (VR++, aR = [0]), eR[fR++] = VR, qR && aR[0] ? aR[LR++] = gR[AR] || 0 : (aR = [gR[AR]], LR = 1)
          } while ((AR++ < CR || void 0 !== aR[0]) && UR--)
        }
        return eR[0] || eR.shift(), rR.e = iR, vu(rR, ZR ? uR + Bu(rR) + 1 : uR)
      }
    }();

    function Mu(RR, JR) {
      var GR, yR, tR, uR, ZR, qR = 0,
        iR = 0,
        fR = RR.constructor,
        VR = fR.precision;
      if (Bu(RR) > 16) throw Error(Ku + Bu(RR));
      if (!RR.s) return new fR(Zu);
      for (null == JR ? (iu = !1, ZR = VR) : ZR = JR, uR = new fR(.03125); RR.abs().gte(.1);) RR = RR.times(uR), iR += 5;
      for (ZR += Math.log(ru(2, iR)) / Math.LN10 * 2 + 5 | 0, GR = yR = tR = new fR(Zu), fR.precision = ZR;;) {
        if (yR = vu(yR.times(RR), ZR), GR = GR.times(++qR), Cu((uR = tR.plus(Xu(yR, GR, ZR))).d).slice(0, ZR) === Cu(tR.d).slice(0, ZR)) {
          for (; iR--;) tR = vu(tR.times(tR), ZR);
          return fR.precision = VR, null == JR ? (iu = !0, vu(tR, VR)) : tR
        }
        tR = uR
      }
    }

    function Bu(RR) {
      for (var JR = 7 * RR.e, GR = RR.d[0]; GR >= 10; GR /= 10) JR++;
      return JR
    }

    function lu(RR, JR, GR) {
      if (JR > RR.LN10.sd()) throw iu = !0, GR && (RR.precision = GR), Error(fu + "LN10 precision limit exceeded");
      return vu(new RR(RR.LN10), JR)
    }

    function pu(RR) {
      for (var JR = ""; RR--;) JR += "0";
      return JR
    }

    function gu(RR, JR) {
      var GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR = 1,
        wR = RR,
        rR = wR.d,
        eR = wR.constructor,
        aR = eR.precision;
      if (wR.s < 1) throw Error(fu + (wR.s ? "NaN" : "-Infinity"));
      if (wR.eq(Zu)) return new eR(0);
      if (null == JR ? (iu = !1, fR = aR) : fR = JR, wR.eq(10)) return null == JR && (iu = !0), lu(eR, fR);
      if (fR += 10, eR.precision = fR, yR = (GR = Cu(rR)).charAt(0), uR = Bu(wR), !(Math.abs(uR) < 15e14)) return iR = lu(eR, fR + 2, aR).times(uR + ""), wR = gu(new eR(yR + "." + GR.slice(1)), fR - 10).plus(iR), eR.precision = aR, null == JR ? (iu = !0, vu(wR, aR)) : wR;
      for (; yR < 7 && 1 != yR || 1 == yR && GR.charAt(1) > 3;) yR = (GR = Cu((wR = wR.times(RR)).d)).charAt(0), KR++;
      for (uR = Bu(wR), yR > 1 ? (wR = new eR("0." + GR), uR++) : wR = new eR(yR + "." + GR.slice(1)), qR = ZR = wR = Xu(wR.minus(Zu), wR.plus(Zu), fR), VR = vu(wR.times(wR), fR), tR = 3;;) {
        if (ZR = vu(ZR.times(VR), fR), Cu((iR = qR.plus(Xu(ZR, new eR(tR), fR))).d).slice(0, fR) === Cu(qR.d).slice(0, fR)) return qR = qR.times(2), 0 !== uR && (qR = qR.plus(lu(eR, fR + 2, aR).times(uR + ""))), qR = Xu(qR, new eR(KR), fR), eR.precision = aR, null == JR ? (iu = !0, vu(qR, aR)) : qR;
        qR = iR, tR += 2
      }
    }

    function bu(RR, JR) {
      var GR, yR, tR;
      for ((GR = JR.indexOf(".")) > -1 && (JR = JR.replace(".", "")), (yR = JR.search(/e/i)) > 0 ? (GR < 0 && (GR = yR), GR += +JR.slice(yR + 1), JR = JR.substring(0, yR)) : GR < 0 && (GR = JR.length), yR = 0; 48 === JR.charCodeAt(yR);) ++yR;
      for (tR = JR.length; 48 === JR.charCodeAt(tR - 1);) --tR;
      if (JR = JR.slice(yR, tR)) {
        if (tR -= yR, GR = GR - yR - 1, RR.e = wu(GR / 7), RR.d = [], yR = (GR + 1) % 7, GR < 0 && (yR += 7), yR < tR) {
          for (yR && RR.d.push(+JR.slice(0, yR)), tR -= 7; yR < tR;) RR.d.push(+JR.slice(yR, yR += 7));
          yR = 7 - (JR = JR.slice(yR)).length
        } else yR -= tR;
        for (; yR--;) JR += "0";
        if (RR.d.push(+JR), iu && (RR.e > nu || RR.e < -nu)) throw Error(Ku + GR)
      } else RR.s = 0, RR.e = 0, RR.d = [0];
      return RR
    }

    function vu(RR, JR, GR) {
      var yR, tR, uR, ZR, qR, iR, fR, VR, KR = RR.d;
      for (ZR = 1, uR = KR[0]; uR >= 10; uR /= 10) ZR++;
      if ((yR = JR - ZR) < 0) yR += 7, tR = JR, fR = KR[VR = 0];
      else {
        if ((VR = Math.ceil((yR + 1) / 7)) >= (uR = KR.length)) return RR;
        for (fR = uR = KR[VR], ZR = 1; uR >= 10; uR /= 10) ZR++;
        tR = (yR %= 7) - 7 + ZR
      }
      if (void 0 !== GR && (qR = fR / (uR = ru(10, ZR - tR - 1)) % 10 | 0, iR = JR < 0 || void 0 !== KR[VR + 1] || fR % uR, iR = GR < 4 ? (qR || iR) && (0 == GR || GR == (RR.s < 0 ? 3 : 2)) : qR > 5 || 5 == qR && (4 == GR || iR || 6 == GR && (yR > 0 ? tR > 0 ? fR / ru(10, ZR - tR) : 0 : KR[VR - 1]) % 10 & 1 || GR == (RR.s < 0 ? 8 : 7))), JR < 1 || !KR[0]) return iR ? (uR = Bu(RR), KR.length = 1, JR = JR - uR - 1, KR[0] = ru(10, (7 - JR % 7) % 7), RR.e = wu(-JR / 7) || 0) : (KR.length = 1, KR[0] = RR.e = RR.s = 0), RR;
      if (0 == yR ? (KR.length = VR, uR = 1, VR--) : (KR.length = VR + 1, uR = ru(10, 7 - yR), KR[VR] = tR > 0 ? (fR / ru(10, ZR - tR) % ru(10, tR) | 0) * uR : 0), iR)
        for (;;) {
          if (0 == VR) {
            (KR[0] += uR) == au && (KR[0] = 1, ++RR.e);
            break
          }
          if (KR[VR] += uR, KR[VR] != au) break;
          KR[VR--] = 0, uR = 1
        }
      for (yR = KR.length; 0 === KR[--yR];) KR.pop();
      if (iu && (RR.e > nu || RR.e < -nu)) throw Error(Ku + Bu(RR));
      return RR
    }

    function Ou(RR, JR) {
      var GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR = RR.constructor,
        rR = wR.precision;
      if (!RR.s || !JR.s) return JR.s ? JR.s = -JR.s : JR = new wR(RR), iu ? vu(JR, rR) : JR;
      if (iR = RR.d, KR = JR.d, yR = JR.e, fR = RR.e, iR = iR.slice(), ZR = fR - yR) {
        for ((VR = ZR < 0) ? (GR = iR, ZR = -ZR, qR = KR.length) : (GR = KR, yR = fR, qR = iR.length), ZR > (tR = Math.max(Math.ceil(rR / 7), qR) + 2) && (ZR = tR, GR.length = 1), GR.reverse(), tR = ZR; tR--;) GR.push(0);
        GR.reverse()
      } else {
        for ((VR = (tR = iR.length) < (qR = KR.length)) && (qR = tR), tR = 0; tR < qR; tR++)
          if (iR[tR] != KR[tR]) {
            VR = iR[tR] < KR[tR];
            break
          } ZR = 0
      }
      for (VR && (GR = iR, iR = KR, KR = GR, JR.s = -JR.s), qR = iR.length, tR = KR.length - qR; tR > 0; --tR) iR[qR++] = 0;
      for (tR = KR.length; tR > ZR;) {
        if (iR[--tR] < KR[tR]) {
          for (uR = tR; uR && 0 === iR[--uR];) iR[uR] = au - 1;
          --iR[uR], iR[tR] += au
        }
        iR[tR] -= KR[tR]
      }
      for (; 0 === iR[--qR];) iR.pop();
      for (; 0 === iR[0]; iR.shift()) --yR;
      return iR[0] ? (JR.d = iR, JR.e = yR, iu ? vu(JR, rR) : JR) : new wR(0)
    }

    function xu(RR, JR, GR) {
      var yR, tR = Bu(RR),
        uR = Cu(RR.d),
        ZR = uR.length;
      return JR ? (GR && (yR = GR - ZR) > 0 ? uR = uR.charAt(0) + "." + uR.slice(1) + pu(yR) : ZR > 1 && (uR = uR.charAt(0) + "." + uR.slice(1)), uR = uR + (tR < 0 ? "e" : "e+") + tR) : tR < 0 ? (uR = "0." + pu(-tR - 1) + uR, GR && (yR = GR - ZR) > 0 && (uR += pu(yR))) : tR >= ZR ? (uR += pu(tR + 1 - ZR), GR && (yR = GR - tR - 1) > 0 && (uR = uR + "." + pu(yR))) : ((yR = tR + 1) < ZR && (uR = uR.slice(0, yR) + "." + uR.slice(yR)), GR && (yR = GR - ZR) > 0 && (tR + 1 === ZR && (uR += "."), uR += pu(yR))), RR.s < 0 ? "-" + uR : uR
    }

    function Nu(RR, JR) {
      if (RR.length > JR) return RR.length = JR, !0
    }

    function Du(RR) {
      if (!RR || "object" !== typeof RR) throw Error(fu + "Object expected");
      var JR, GR, yR, tR = ["precision", 1, qu, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (JR = 0; JR < tR.length; JR += 3)
        if (void 0 !== (yR = RR[GR = tR[JR]])) {
          if (!(wu(yR) === yR && yR >= tR[JR + 1] && yR <= tR[JR + 2])) throw Error(Vu + GR + ": " + yR);
          this[GR] = yR
        } if (void 0 !== (yR = RR[GR = "LN10"])) {
        if (yR != Math.LN10) throw Error(Vu + GR + ": " + yR);
        this[GR] = new this(yR)
      }
      return this
    }
    var Hu = function RR(JR) {
      var GR, yR, tR;

      function uR(RR) {
        var JR = this;
        if (!(JR instanceof uR)) return new uR(RR);
        if (JR.constructor = uR, RR instanceof uR) return JR.s = RR.s, JR.e = RR.e, void(JR.d = (RR = RR.d) ? RR.slice() : RR);
        if ("number" === typeof RR) {
          if (0 * RR !== 0) throw Error(Vu + RR);
          if (RR > 0) JR.s = 1;
          else {
            if (!(RR < 0)) return JR.s = 0, JR.e = 0, void(JR.d = [0]);
            RR = -RR, JR.s = -1
          }
          return RR === ~~RR && RR < 1e7 ? (JR.e = 0, void(JR.d = [RR])) : bu(JR, RR.toString())
        }
        if ("string" !== typeof RR) throw Error(Vu + RR);
        if (45 === RR.charCodeAt(0) ? (RR = RR.slice(1), JR.s = -1) : JR.s = 1, !eu.test(RR)) throw Error(Vu + RR);
        bu(JR, RR)
      }
      if (uR.prototype = Uu, uR.ROUND_UP = 0, uR.ROUND_DOWN = 1, uR.ROUND_CEIL = 2, uR.ROUND_FLOOR = 3, uR.ROUND_HALF_UP = 4, uR.ROUND_HALF_DOWN = 5, uR.ROUND_HALF_EVEN = 6, uR.ROUND_HALF_CEIL = 7, uR.ROUND_HALF_FLOOR = 8, uR.clone = RR, uR.config = uR.set = Du, void 0 === JR && (JR = {}), JR)
        for (tR = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], GR = 0; GR < tR.length;) JR.hasOwnProperty(yR = tR[GR++]) || (JR[yR] = this[yR]);
      return uR.config(JR), uR
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Zu = new Hu(1);
    var ou;
    ! function(RR) {
      RR.AED = "aed", RR.AFN = "afn", RR.ALL = "all", RR.AMD = "amd", RR.ANG = "ang", RR.AOA = "aoa", RR.ARS = "ars", RR.AUD = "aud", RR.AWG = "awg", RR.AZN = "azn", RR.BAM = "bam", RR.BBD = "bbd", RR.BDT = "bdt", RR.BGN = "bgn", RR.BHD = "bhd", RR.BIF = "bif", RR.BMD = "bmd", RR.BND = "bnd", RR.BOB = "bob", RR.BOV = "bov", RR.BRL = "brl", RR.BSD = "bsd", RR.BTN = "btn", RR.BWP = "bwp", RR.BYN = "byn", RR.BYR = "byr", RR.BZD = "bzd", RR.CAD = "cad", RR.CDF = "cdf", RR.CHE = "che", RR.CHF = "chf", RR.CHW = "chw", RR.CLF = "clf", RR.CLP = "clp", RR.CNY = "cny", RR.COP = "cop", RR.COU = "cou", RR.CRC = "crc", RR.CUC = "cuc", RR.CUP = "cup", RR.CVE = "cve", RR.CZK = "czk", RR.DJF = "djf", RR.DKK = "dkk", RR.DOP = "dop", RR.DZD = "dzd", RR.EGP = "egp", RR.ERN = "ern", RR.ETB = "etb", RR.EUR = "eur", RR.FJD = "fjd", RR.FKP = "fkp", RR.GBP = "gbp", RR.GEL = "gel", RR.GHS = "ghs", RR.GIP = "gip", RR.GMD = "gmd", RR.GNF = "gnf", RR.GTQ = "gtq", RR.GYD = "gyd", RR.HKD = "hkd", RR.HNL = "hnl", RR.HRK = "hrk", RR.HTG = "htg", RR.HUF = "huf", RR.IDR = "idr", RR.ILS = "ils", RR.INR = "inr", RR.IQD = "iqd", RR.IRR = "irr", RR.ISK = "isk", RR.JMD = "jmd", RR.JOD = "jod", RR.JPY = "jpy", RR.KES = "kes", RR.KGS = "kgs", RR.KHR = "khr", RR.KMF = "kmf", RR.KPW = "kpw", RR.KRW = "krw", RR.KWD = "kwd", RR.KYD = "kyd", RR.KZT = "kzt", RR.LAK = "lak", RR.LBP = "lbp", RR.LKR = "lkr", RR.LRD = "lrd", RR.LSL = "lsl", RR.LTL = "ltl", RR.LVL = "lvl", RR.LYD = "lyd", RR.MAD = "mad", RR.MDL = "mdl", RR.MGA = "mga", RR.MKD = "mkd", RR.MMK = "mmk", RR.MNT = "mnt", RR.MOP = "mop", RR.MRO = "mro", RR.MUR = "mur", RR.MVR = "mvr", RR.MWK = "mwk", RR.MXN = "mxn", RR.MXV = "mxv", RR.MYR = "myr", RR.MZN = "mzn", RR.NAD = "nad", RR.NGN = "ngn", RR.NIO = "nio", RR.NOK = "nok", RR.NPR = "npr", RR.NZD = "nzd", RR.OMR = "omr", RR.PAB = "pab", RR.PEN = "pen", RR.PGK = "pgk", RR.PHP = "php", RR.PKR = "pkr", RR.PLN = "pln", RR.PYG = "pyg", RR.QAR = "qar", RR.RON = "ron", RR.RSD = "rsd", RR.RUB = "rub", RR.RWF = "rwf", RR.SAR = "sar", RR.SBD = "sbd", RR.SCR = "scr", RR.SDG = "sdg", RR.SEK = "sek", RR.SGD = "sgd", RR.SHP = "shp", RR.SLL = "sll", RR.SOS = "sos", RR.SRD = "srd", RR.SSP = "ssp", RR.STD = "std", RR.SVC = "svc", RR.SYP = "syp", RR.SZL = "szl", RR.THB = "thb", RR.TJS = "tjs", RR.TMT = "tmt", RR.TND = "tnd", RR.TOP = "top", RR.TRY = "try", RR.TTD = "ttd", RR.TWD = "twd", RR.TZS = "tzs", RR.UAH = "uah", RR.UGX = "ugx", RR.USD = "usd", RR.USN = "usn", RR.USS = "uss", RR.UYI = "uyi", RR.UYU = "uyu", RR.UZS = "uzs", RR.VEF = "vef", RR.VND = "vnd", RR.VUV = "vuv", RR.WST = "wst", RR.XAF = "xaf", RR.XAG = "xag", RR.XAU = "xau", RR.XBA = "xba", RR.XBB = "xbb", RR.XBC = "xbc", RR.XBD = "xbd", RR.XCD = "xcd", RR.XDR = "xdr", RR.XFU = "xfu", RR.XOF = "xof", RR.XPD = "xpd", RR.XPF = "xpf", RR.XPT = "xpt", RR.XSU = "xsu", RR.XTS = "xts", RR.XUA = "xua", RR.YER = "yer", RR.ZAR = "zar", RR.ZMW = "zmw", RR.ZWL = "zwl"
    }(ou || (ou = {}));
    ou.AED, ou.AFN, ou.ALL, ou.AMD, ou.ANG, ou.AOA, ou.ARS, ou.AUD, ou.AWG, ou.AZN, ou.BAM, ou.BBD, ou.BDT, ou.BGN, ou.BHD, ou.BIF, ou.BMD, ou.BND, ou.BOB, ou.BOV, ou.BRL, ou.BSD, ou.BTN, ou.BWP, ou.BYR, ou.BYN, ou.BZD, ou.CAD, ou.CDF, ou.CHE, ou.CHF, ou.CHW, ou.CLF, ou.CLP, ou.CNY, ou.COP, ou.COU, ou.CRC, ou.CUC, ou.CUP, ou.CVE, ou.CZK, ou.DJF, ou.DKK, ou.DOP, ou.DZD, ou.EGP, ou.ERN, ou.ETB, ou.EUR, ou.FJD, ou.FKP, ou.GBP, ou.GEL, ou.GHS, ou.GIP, ou.GMD, ou.GNF, ou.GTQ, ou.GYD, ou.HKD, ou.HNL, ou.HRK, ou.HTG, ou.HUF, ou.IDR, ou.ILS, ou.INR, ou.IQD, ou.IRR, ou.ISK, ou.JMD, ou.JOD, ou.JPY, ou.KES, ou.KGS, ou.KHR, ou.KMF, ou.KPW, ou.KRW, ou.KWD, ou.KYD, ou.KZT, ou.LAK, ou.LBP, ou.LKR, ou.LRD, ou.LSL, ou.LTL, ou.LVL, ou.LYD, ou.MAD, ou.MDL, ou.MGA, ou.MKD, ou.MMK, ou.MNT, ou.MOP, ou.MRO, ou.MUR, ou.MVR, ou.MWK, ou.MXN, ou.MXV, ou.MYR, ou.MZN, ou.NAD, ou.NGN, ou.NIO, ou.NOK, ou.NPR, ou.NZD, ou.OMR, ou.PAB, ou.PEN, ou.PGK, ou.PHP, ou.PKR, ou.PLN, ou.PYG, ou.QAR, ou.RON, ou.RSD, ou.RUB, ou.RWF, ou.SAR, ou.SBD, ou.SCR, ou.SDG, ou.SEK, ou.SGD, ou.SHP, ou.SLL, ou.SOS, ou.SRD, ou.SSP, ou.STD, ou.SVC, ou.SYP, ou.SZL, ou.THB, ou.TJS, ou.TMT, ou.TND, ou.TOP, ou.TRY, ou.TTD, ou.TWD, ou.TZS, ou.UAH, ou.UGX, ou.USD, ou.USN, ou.USS, ou.UYI, ou.UYU, ou.UZS, ou.VEF, ou.VND, ou.VUV, ou.WST, ou.XAF, ou.XAG, ou.XAU, ou.XBA, ou.XBB, ou.XBC, ou.XBD, ou.XCD, ou.XDR, ou.XFU, ou.XOF, ou.XPD, ou.XPF, ou.XPT, ou.XSU, ou.XTS, ou.XUA, ou.YER, ou.ZAR, ou.ZMW, ou.ZWL;
    var cu = {
      exports: {}
    };
    ! function(RR, JR) {
      var GR = "__lodash_hash_undefined__",
        yR = 9007199254740991,
        uR = "[object Arguments]",
        ZR = "[object Array]",
        qR = "[object Boolean]",
        iR = "[object Date]",
        fR = "[object Error]",
        VR = "[object Function]",
        KR = "[object Map]",
        wR = "[object Number]",
        rR = "[object Object]",
        eR = "[object Promise]",
        aR = "[object RegExp]",
        LR = "[object Set]",
        nR = "[object String]",
        UR = "[object Symbol]",
        WR = "[object WeakMap]",
        AR = "[object ArrayBuffer]",
        CR = "[object DataView]",
        XR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        MR = /^\w*$/,
        BR = /^\./,
        lR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        pR = /\\(\\)?/g,
        gR = /^\[object .+?Constructor\]$/,
        bR = /^(?:0|[1-9]\d*)$/,
        vR = {};
      vR["[object Float32Array]"] = vR["[object Float64Array]"] = vR["[object Int8Array]"] = vR["[object Int16Array]"] = vR["[object Int32Array]"] = vR["[object Uint8Array]"] = vR["[object Uint8ClampedArray]"] = vR["[object Uint16Array]"] = vR["[object Uint32Array]"] = !0, vR[uR] = vR[ZR] = vR[AR] = vR[qR] = vR[CR] = vR[iR] = vR[fR] = vR[VR] = vR[KR] = vR[wR] = vR[rR] = vR[aR] = vR[LR] = vR[nR] = vR[WR] = !1;
      var OR = "object" == typeof tR && tR && tR.Object === Object && tR,
        xR = "object" == typeof self && self && self.Object === Object && self,
        NR = OR || xR || Function("return this")(),
        DR = JR && !JR.nodeType && JR,
        HR = DR && RR && !RR.nodeType && RR,
        oR = HR && HR.exports === DR && OR.process,
        cR = function() {
          try {
            return oR && oR.binding("util")
          } catch (RR) {}
        }(),
        PR = cR && cR.isTypedArray;

      function IR(RR, JR) {
        for (var GR = -1, yR = RR ? RR.length : 0; ++GR < yR && !1 !== JR(RR[GR], GR, RR););
        return RR
      }

      function mR(RR, JR) {
        for (var GR = -1, yR = RR ? RR.length : 0; ++GR < yR;)
          if (JR(RR[GR], GR, RR)) return !0;
        return !1
      }

      function zR(RR) {
        var JR = !1;
        if (null != RR && "function" != typeof RR.toString) try {
          JR = !!(RR + "")
        } catch (GR) {}
        return JR
      }

      function SR(RR) {
        var JR = -1,
          GR = Array(RR.size);
        return RR.forEach((function(RR, yR) {
          GR[++JR] = [yR, RR]
        })), GR
      }

      function jR(RR, JR) {
        return function(GR) {
          return RR(JR(GR))
        }
      }

      function dR(RR) {
        var JR = -1,
          GR = Array(RR.size);
        return RR.forEach((function(RR) {
          GR[++JR] = RR
        })), GR
      }
      var ER = Array.prototype,
        YR = Function.prototype,
        kR = Object.prototype,
        QR = NR["__core-js_shared__"],
        FR = function() {
          var RR = /[^.]+$/.exec(QR && QR.keys && QR.keys.IE_PROTO || "");
          return RR ? "Symbol(src)_1." + RR : ""
        }(),
        TR = YR.toString,
        sR = kR.hasOwnProperty,
        hR = kR.toString,
        RJ = RegExp("^" + TR.call(sR).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        JJ = NR.Symbol,
        GJ = NR.Uint8Array,
        yJ = jR(Object.getPrototypeOf, Object),
        tJ = Object.create,
        uJ = kR.propertyIsEnumerable,
        ZJ = ER.splice,
        qJ = jR(Object.keys, Object),
        iJ = SJ(NR, "DataView"),
        fJ = SJ(NR, "Map"),
        VJ = SJ(NR, "Promise"),
        KJ = SJ(NR, "Set"),
        wJ = SJ(NR, "WeakMap"),
        rJ = SJ(Object, "create"),
        eJ = TJ(iJ),
        aJ = TJ(fJ),
        LJ = TJ(VJ),
        nJ = TJ(KJ),
        UJ = TJ(wJ),
        WJ = JJ ? JJ.prototype : void 0,
        AJ = WJ ? WJ.valueOf : void 0,
        CJ = WJ ? WJ.toString : void 0;

      function XJ(RR) {
        var JR = -1,
          GR = RR ? RR.length : 0;
        for (this.clear(); ++JR < GR;) {
          var yR = RR[JR];
          this.set(yR[0], yR[1])
        }
      }

      function MJ(RR) {
        var JR = -1,
          GR = RR ? RR.length : 0;
        for (this.clear(); ++JR < GR;) {
          var yR = RR[JR];
          this.set(yR[0], yR[1])
        }
      }

      function BJ(RR) {
        var JR = -1,
          GR = RR ? RR.length : 0;
        for (this.clear(); ++JR < GR;) {
          var yR = RR[JR];
          this.set(yR[0], yR[1])
        }
      }

      function lJ(RR) {
        var JR = -1,
          GR = RR ? RR.length : 0;
        for (this.__data__ = new BJ; ++JR < GR;) this.add(RR[JR])
      }

      function pJ(RR) {
        this.__data__ = new MJ(RR)
      }

      function gJ(RR, JR) {
        var GR = JG(RR) || RG(RR) ? function(RR, JR) {
            for (var GR = -1, yR = Array(RR); ++GR < RR;) yR[GR] = JR(GR);
            return yR
          }(RR.length, String) : [],
          yR = GR.length,
          tR = !!yR;
        for (var uR in RR) !JR && !sR.call(RR, uR) || tR && ("length" == uR || dJ(uR, yR)) || GR.push(uR);
        return GR
      }

      function bJ(RR, JR) {
        for (var GR = RR.length; GR--;)
          if (hJ(RR[GR][0], JR)) return GR;
        return -1
      }
      XJ.prototype.clear = function() {
        this.__data__ = rJ ? rJ(null) : {}
      }, XJ.prototype.delete = function(RR) {
        return this.has(RR) && delete this.__data__[RR]
      }, XJ.prototype.get = function(RR) {
        var JR = this.__data__;
        if (rJ) {
          var yR = JR[RR];
          return yR === GR ? void 0 : yR
        }
        return sR.call(JR, RR) ? JR[RR] : void 0
      }, XJ.prototype.has = function(RR) {
        var JR = this.__data__;
        return rJ ? void 0 !== JR[RR] : sR.call(JR, RR)
      }, XJ.prototype.set = function(RR, JR) {
        return this.__data__[RR] = rJ && void 0 === JR ? GR : JR, this
      }, MJ.prototype.clear = function() {
        this.__data__ = []
      }, MJ.prototype.delete = function(RR) {
        var JR = this.__data__,
          GR = bJ(JR, RR);
        return !(GR < 0) && (GR == JR.length - 1 ? JR.pop() : ZJ.call(JR, GR, 1), !0)
      }, MJ.prototype.get = function(RR) {
        var JR = this.__data__,
          GR = bJ(JR, RR);
        return GR < 0 ? void 0 : JR[GR][1]
      }, MJ.prototype.has = function(RR) {
        return bJ(this.__data__, RR) > -1
      }, MJ.prototype.set = function(RR, JR) {
        var GR = this.__data__,
          yR = bJ(GR, RR);
        return yR < 0 ? GR.push([RR, JR]) : GR[yR][1] = JR, this
      }, BJ.prototype.clear = function() {
        this.__data__ = {
          hash: new XJ,
          map: new(fJ || MJ),
          string: new XJ
        }
      }, BJ.prototype.delete = function(RR) {
        return zJ(this, RR).delete(RR)
      }, BJ.prototype.get = function(RR) {
        return zJ(this, RR).get(RR)
      }, BJ.prototype.has = function(RR) {
        return zJ(this, RR).has(RR)
      }, BJ.prototype.set = function(RR, JR) {
        return zJ(this, RR).set(RR, JR), this
      }, lJ.prototype.add = lJ.prototype.push = function(RR) {
        return this.__data__.set(RR, GR), this
      }, lJ.prototype.has = function(RR) {
        return this.__data__.has(RR)
      }, pJ.prototype.clear = function() {
        this.__data__ = new MJ
      }, pJ.prototype.delete = function(RR) {
        return this.__data__.delete(RR)
      }, pJ.prototype.get = function(RR) {
        return this.__data__.get(RR)
      }, pJ.prototype.has = function(RR) {
        return this.__data__.has(RR)
      }, pJ.prototype.set = function(RR, JR) {
        var GR = this.__data__;
        if (GR instanceof MJ) {
          var yR = GR.__data__;
          if (!fJ || yR.length < 199) return yR.push([RR, JR]), this;
          GR = this.__data__ = new BJ(yR)
        }
        return GR.set(RR, JR), this
      };
      var vJ, OJ = function(RR, JR, GR) {
        for (var yR = -1, tR = Object(RR), uR = GR(RR), ZR = uR.length; ZR--;) {
          var qR = uR[vJ ? ZR : ++yR];
          if (!1 === JR(tR[qR], qR, tR)) break
        }
        return RR
      };

      function xJ(RR, JR) {
        return RR && OJ(RR, JR, VG)
      }

      function NJ(RR, JR) {
        for (var GR = 0, yR = (JR = EJ(JR, RR) ? [JR] : IJ(JR)).length; null != RR && GR < yR;) RR = RR[FJ(JR[GR++])];
        return GR && GR == yR ? RR : void 0
      }

      function DJ(RR, JR) {
        return null != RR && JR in Object(RR)
      }

      function HJ(RR, JR, GR, yR, tR) {
        return RR === JR || (null == RR || null == JR || !uG(RR) && !ZG(JR) ? RR !== RR && JR !== JR : function(RR, JR, GR, yR, tR, VR) {
          var eR = JG(RR),
            WR = JG(JR),
            XR = ZR,
            MR = ZR;
          eR || (XR = (XR = jJ(RR)) == uR ? rR : XR);
          WR || (MR = (MR = jJ(JR)) == uR ? rR : MR);
          var BR = XR == rR && !zR(RR),
            lR = MR == rR && !zR(JR),
            pR = XR == MR;
          if (pR && !BR) return VR || (VR = new pJ), eR || fG(RR) ? mJ(RR, JR, GR, yR, tR, VR) : function(RR, JR, GR, yR, tR, uR, ZR) {
            switch (GR) {
              case CR:
                if (RR.byteLength != JR.byteLength || RR.byteOffset != JR.byteOffset) return !1;
                RR = RR.buffer, JR = JR.buffer;
              case AR:
                return !(RR.byteLength != JR.byteLength || !yR(new GJ(RR), new GJ(JR)));
              case qR:
              case iR:
              case wR:
                return hJ(+RR, +JR);
              case fR:
                return RR.name == JR.name && RR.message == JR.message;
              case aR:
              case nR:
                return RR == JR + "";
              case KR:
                var VR = SR;
              case LR:
                var rR = 2 & uR;
                if (VR || (VR = dR), RR.size != JR.size && !rR) return !1;
                var eR = ZR.get(RR);
                if (eR) return eR == JR;
                uR |= 1, ZR.set(RR, JR);
                var WR = mJ(VR(RR), VR(JR), yR, tR, uR, ZR);
                return ZR.delete(RR), WR;
              case UR:
                if (AJ) return AJ.call(RR) == AJ.call(JR)
            }
            return !1
          }(RR, JR, XR, GR, yR, tR, VR);
          if (!(2 & tR)) {
            var gR = BR && sR.call(RR, "__wrapped__"),
              bR = lR && sR.call(JR, "__wrapped__");
            if (gR || bR) {
              var vR = gR ? RR.value() : RR,
                OR = bR ? JR.value() : JR;
              return VR || (VR = new pJ), GR(vR, OR, yR, tR, VR)
            }
          }
          if (!pR) return !1;
          return VR || (VR = new pJ),
            function(RR, JR, GR, yR, tR, uR) {
              var ZR = 2 & tR,
                qR = VG(RR),
                iR = qR.length,
                fR = VG(JR),
                VR = fR.length;
              if (iR != VR && !ZR) return !1;
              var KR = iR;
              for (; KR--;) {
                var wR = qR[KR];
                if (!(ZR ? wR in JR : sR.call(JR, wR))) return !1
              }
              var rR = uR.get(RR);
              if (rR && uR.get(JR)) return rR == JR;
              var eR = !0;
              uR.set(RR, JR), uR.set(JR, RR);
              var aR = ZR;
              for (; ++KR < iR;) {
                var LR = RR[wR = qR[KR]],
                  nR = JR[wR];
                if (yR) var UR = ZR ? yR(nR, LR, wR, JR, RR, uR) : yR(LR, nR, wR, RR, JR, uR);
                if (!(void 0 === UR ? LR === nR || GR(LR, nR, yR, tR, uR) : UR)) {
                  eR = !1;
                  break
                }
                aR || (aR = "constructor" == wR)
              }
              if (eR && !aR) {
                var WR = RR.constructor,
                  AR = JR.constructor;
                WR == AR || !("constructor" in RR) || !("constructor" in JR) || "function" == typeof WR && WR instanceof WR && "function" == typeof AR && AR instanceof AR || (eR = !1)
              }
              return uR.delete(RR), uR.delete(JR), eR
            }(RR, JR, GR, yR, tR, VR)
        }(RR, JR, HJ, GR, yR, tR))
      }

      function oJ(RR) {
        return !(!uG(RR) || (JR = RR, FR && FR in JR)) && (yG(RR) || zR(RR) ? RJ : gR).test(TJ(RR));
        var JR
      }

      function cJ(RR) {
        return "function" == typeof RR ? RR : null == RR ? KG : "object" == typeof RR ? JG(RR) ? function(RR, JR) {
          if (EJ(RR) && YJ(JR)) return kJ(FJ(RR), JR);
          return function(GR) {
            var yR = function(RR, JR, GR) {
              var yR = null == RR ? void 0 : NJ(RR, JR);
              return void 0 === yR ? GR : yR
            }(GR, RR);
            return void 0 === yR && yR === JR ? function(RR, JR) {
              return null != RR && function(RR, JR, GR) {
                JR = EJ(JR, RR) ? [JR] : IJ(JR);
                var yR, tR = -1,
                  uR = JR.length;
                for (; ++tR < uR;) {
                  var ZR = FJ(JR[tR]);
                  if (!(yR = null != RR && GR(RR, ZR))) break;
                  RR = RR[ZR]
                }
                if (yR) return yR;
                uR = RR ? RR.length : 0;
                return !!uR && tG(uR) && dJ(ZR, uR) && (JG(RR) || RG(RR))
              }(RR, JR, DJ)
            }(GR, RR) : HJ(JR, yR, void 0, 3)
          }
        }(RR[0], RR[1]) : function(RR) {
          var JR = function(RR) {
            var JR = VG(RR),
              GR = JR.length;
            for (; GR--;) {
              var yR = JR[GR],
                tR = RR[yR];
              JR[GR] = [yR, tR, YJ(tR)]
            }
            return JR
          }(RR);
          if (1 == JR.length && JR[0][2]) return kJ(JR[0][0], JR[0][1]);
          return function(GR) {
            return GR === RR || function(RR, JR, GR, yR) {
              var tR = GR.length,
                uR = tR,
                ZR = !yR;
              if (null == RR) return !uR;
              for (RR = Object(RR); tR--;) {
                var qR = GR[tR];
                if (ZR && qR[2] ? qR[1] !== RR[qR[0]] : !(qR[0] in RR)) return !1
              }
              for (; ++tR < uR;) {
                var iR = (qR = GR[tR])[0],
                  fR = RR[iR],
                  VR = qR[1];
                if (ZR && qR[2]) {
                  if (void 0 === fR && !(iR in RR)) return !1
                } else {
                  var KR = new pJ;
                  if (yR) var wR = yR(fR, VR, iR, RR, JR, KR);
                  if (!(void 0 === wR ? HJ(VR, fR, yR, 3, KR) : wR)) return !1
                }
              }
              return !0
            }(GR, RR, JR)
          }
        }(RR) : function(RR) {
          return EJ(RR) ? (JR = FJ(RR), function(RR) {
            return null == RR ? void 0 : RR[JR]
          }) : function(RR) {
            return function(JR) {
              return NJ(JR, RR)
            }
          }(RR);
          var JR
        }(RR)
      }

      function PJ(RR) {
        if (! function(RR) {
            var JR = RR && RR.constructor,
              GR = "function" == typeof JR && JR.prototype || kR;
            return RR === GR
          }(RR)) return qJ(RR);
        var JR = [];
        for (var GR in Object(RR)) sR.call(RR, GR) && "constructor" != GR && JR.push(GR);
        return JR
      }

      function IJ(RR) {
        return JG(RR) ? RR : QJ(RR)
      }

      function mJ(RR, JR, GR, yR, tR, uR) {
        var ZR = 2 & tR,
          qR = RR.length,
          iR = JR.length;
        if (qR != iR && !(ZR && iR > qR)) return !1;
        var fR = uR.get(RR);
        if (fR && uR.get(JR)) return fR == JR;
        var VR = -1,
          KR = !0,
          wR = 1 & tR ? new lJ : void 0;
        for (uR.set(RR, JR), uR.set(JR, RR); ++VR < qR;) {
          var rR = RR[VR],
            eR = JR[VR];
          if (yR) var aR = ZR ? yR(eR, rR, VR, JR, RR, uR) : yR(rR, eR, VR, RR, JR, uR);
          if (void 0 !== aR) {
            if (aR) continue;
            KR = !1;
            break
          }
          if (wR) {
            if (!mR(JR, (function(RR, JR) {
                if (!wR.has(JR) && (rR === RR || GR(rR, RR, yR, tR, uR))) return wR.add(JR)
              }))) {
              KR = !1;
              break
            }
          } else if (rR !== eR && !GR(rR, eR, yR, tR, uR)) {
            KR = !1;
            break
          }
        }
        return uR.delete(RR), uR.delete(JR), KR
      }

      function zJ(RR, JR) {
        var GR = RR.__data__;
        return function(RR) {
          var JR = typeof RR;
          return "string" == JR || "number" == JR || "symbol" == JR || "boolean" == JR ? "__proto__" !== RR : null === RR
        }(JR) ? GR["string" == typeof JR ? "string" : "hash"] : GR.map
      }

      function SJ(RR, JR) {
        var GR = function(RR, JR) {
          return null == RR ? void 0 : RR[JR]
        }(RR, JR);
        return oJ(GR) ? GR : void 0
      }
      var jJ = function(RR) {
        return hR.call(RR)
      };

      function dJ(RR, JR) {
        return !!(JR = null == JR ? yR : JR) && ("number" == typeof RR || bR.test(RR)) && RR > -1 && RR % 1 == 0 && RR < JR
      }

      function EJ(RR, JR) {
        if (JG(RR)) return !1;
        var GR = typeof RR;
        return !("number" != GR && "symbol" != GR && "boolean" != GR && null != RR && !qG(RR)) || (MR.test(RR) || !XR.test(RR) || null != JR && RR in Object(JR))
      }

      function YJ(RR) {
        return RR === RR && !uG(RR)
      }

      function kJ(RR, JR) {
        return function(GR) {
          return null != GR && (GR[RR] === JR && (void 0 !== JR || RR in Object(GR)))
        }
      }(iJ && jJ(new iJ(new ArrayBuffer(1))) != CR || fJ && jJ(new fJ) != KR || VJ && jJ(VJ.resolve()) != eR || KJ && jJ(new KJ) != LR || wJ && jJ(new wJ) != WR) && (jJ = function(RR) {
        var JR = hR.call(RR),
          GR = JR == rR ? RR.constructor : void 0,
          yR = GR ? TJ(GR) : void 0;
        if (yR) switch (yR) {
          case eJ:
            return CR;
          case aJ:
            return KR;
          case LJ:
            return eR;
          case nJ:
            return LR;
          case UJ:
            return WR
        }
        return JR
      });
      var QJ = sJ((function(RR) {
        var JR;
        RR = null == (JR = RR) ? "" : function(RR) {
          if ("string" == typeof RR) return RR;
          if (qG(RR)) return CJ ? CJ.call(RR) : "";
          var JR = RR + "";
          return "0" == JR && 1 / RR == -1 / 0 ? "-0" : JR
        }(JR);
        var GR = [];
        return BR.test(RR) && GR.push(""), RR.replace(lR, (function(RR, JR, yR, tR) {
          GR.push(yR ? tR.replace(pR, "$1") : JR || RR)
        })), GR
      }));

      function FJ(RR) {
        if ("string" == typeof RR || qG(RR)) return RR;
        var JR = RR + "";
        return "0" == JR && 1 / RR == -1 / 0 ? "-0" : JR
      }

      function TJ(RR) {
        if (null != RR) {
          try {
            return TR.call(RR)
          } catch (JR) {}
          try {
            return RR + ""
          } catch (JR) {}
        }
        return ""
      }

      function sJ(RR, JR) {
        if ("function" != typeof RR || JR && "function" != typeof JR) throw new TypeError("Expected a function");
        var GR = function() {
          var yR = arguments,
            tR = JR ? JR.apply(this, yR) : yR[0],
            uR = GR.cache;
          if (uR.has(tR)) return uR.get(tR);
          var ZR = RR.apply(this, yR);
          return GR.cache = uR.set(tR, ZR), ZR
        };
        return GR.cache = new(sJ.Cache || BJ), GR
      }

      function hJ(RR, JR) {
        return RR === JR || RR !== RR && JR !== JR
      }

      function RG(RR) {
        return function(RR) {
          return ZG(RR) && GG(RR)
        }(RR) && sR.call(RR, "callee") && (!uJ.call(RR, "callee") || hR.call(RR) == uR)
      }
      sJ.Cache = BJ;
      var JG = Array.isArray;

      function GG(RR) {
        return null != RR && tG(RR.length) && !yG(RR)
      }

      function yG(RR) {
        var JR = uG(RR) ? hR.call(RR) : "";
        return JR == VR || "[object GeneratorFunction]" == JR
      }

      function tG(RR) {
        return "number" == typeof RR && RR > -1 && RR % 1 == 0 && RR <= yR
      }

      function uG(RR) {
        var JR = typeof RR;
        return !!RR && ("object" == JR || "function" == JR)
      }

      function ZG(RR) {
        return !!RR && "object" == typeof RR
      }

      function qG(RR) {
        return "symbol" == typeof RR || ZG(RR) && hR.call(RR) == UR
      }
      var iG, fG = PR ? (iG = PR, function(RR) {
        return iG(RR)
      }) : function(RR) {
        return ZG(RR) && tG(RR.length) && !!vR[hR.call(RR)]
      };

      function VG(RR) {
        return GG(RR) ? gJ(RR) : PJ(RR)
      }

      function KG(RR) {
        return RR
      }
      RR.exports = function(RR, JR, GR) {
        var yR, tR = JG(RR) || fG(RR);
        if (JR = cJ(JR), null == GR)
          if (tR || uG(RR)) {
            var uR = RR.constructor;
            GR = tR ? JG(RR) ? new uR : [] : yG(uR) ? uG(yR = yJ(RR)) ? tJ(yR) : {} : {}
          } else GR = {};
        return (tR ? IR : xJ)(RR, (function(RR, yR, tR) {
          return JR(GR, RR, yR, tR)
        })), GR
      }
    }(cu, cu.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      n: Pu
    } = yR
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);