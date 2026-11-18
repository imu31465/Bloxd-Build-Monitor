export const id = 134;
export const ids = [134];
export const modules = {
  7434: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pp,
      h: () => Pd
    });
    var VB = {};
    dB.r(VB), dB.d(VB, {
      c: () => yV,
      h: () => JV,
      d: () => lV,
      l: () => Ad,
      o: () => jd,
      s: () => FV,
      u: () => ed,
      w: () => IV,
      y: () => fV,
      C: () => rV,
      E: () => bd,
      I: () => MV,
      K: () => UV,
      M: () => KV,
      P: () => nd,
      O: () => dV,
      Q: () => wV,
      R: () => zV
    });
    var yB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function pB(BB) {
      return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
    }
    var lB = {
      exports: {}
    };
    ! function(BB) {
      var TB = Object.prototype.hasOwnProperty,
        dB = "~";

      function VB() {}

      function yB(BB, TB, dB) {
        this.gD = BB, this.context = TB, this.once = dB || !1
      }

      function pB(BB, TB, VB, pB, lB) {
        if ("function" !== typeof VB) throw new TypeError("The listener must be a function");
        var JB = new yB(VB, pB || BB, lB),
          YB = dB ? dB + TB : TB;
        return BB._events[YB] ? BB._events[YB].gD ? BB._events[YB] = [BB._events[YB], JB] : BB._events[YB].push(JB) : (BB._events[YB] = JB, BB._eventsCount++), BB
      }

      function lB(BB, TB) {
        0 === --BB._eventsCount ? BB._events = new VB : delete BB._events[TB]
      }

      function JB() {
        this._events = new VB, this._eventsCount = 0
      }
      Object.create && (VB.prototype = Object.create(null), (new VB).__proto__ || (dB = !1)), JB.prototype.eventNames = function() {
        var BB, VB, yB = [];
        if (0 === this._eventsCount) return yB;
        for (VB in BB = this._events) TB.call(BB, VB) && yB.push(dB ? VB.slice(1) : VB);
        return Object.getOwnPropertySymbols ? yB.concat(Object.getOwnPropertySymbols(BB)) : yB
      }, JB.prototype.listeners = function(BB) {
        var TB = dB ? dB + BB : BB,
          VB = this._events[TB];
        if (!VB) return [];
        if (VB.gD) return [VB.gD];
        for (var yB = 0, pB = VB.length, lB = new Array(pB); yB < pB; yB++) lB[yB] = VB[yB].gD;
        return lB
      }, JB.prototype.listenerCount = function(BB) {
        var TB = dB ? dB + BB : BB,
          VB = this._events[TB];
        return VB ? VB.gD ? 1 : VB.length : 0
      }, JB.prototype.emit = function(BB, TB, VB, yB, pB, lB) {
        var JB = dB ? dB + BB : BB;
        if (!this._events[JB]) return !1;
        var YB, gB, oB = this._events[JB],
          kB = arguments.length;
        if (oB.gD) {
          switch (oB.once && this.removeListener(BB, oB.gD, void 0, !0), kB) {
            case 1:
              return oB.gD.call(oB.context), !0;
            case 2:
              return oB.gD.call(oB.context, TB), !0;
            case 3:
              return oB.gD.call(oB.context, TB, VB), !0;
            case 4:
              return oB.gD.call(oB.context, TB, VB, yB), !0;
            case 5:
              return oB.gD.call(oB.context, TB, VB, yB, pB), !0;
            case 6:
              return oB.gD.call(oB.context, TB, VB, yB, pB, lB), !0
          }
          for (gB = 1, YB = new Array(kB - 1); gB < kB; gB++) YB[gB - 1] = arguments[gB];
          oB.gD.apply(oB.context, YB)
        } else {
          var LB, OB = oB.length;
          for (gB = 0; gB < OB; gB++) switch (oB[gB].once && this.removeListener(BB, oB[gB].gD, void 0, !0), kB) {
            case 1:
              oB[gB].gD.call(oB[gB].context);
              break;
            case 2:
              oB[gB].gD.call(oB[gB].context, TB);
              break;
            case 3:
              oB[gB].gD.call(oB[gB].context, TB, VB);
              break;
            case 4:
              oB[gB].gD.call(oB[gB].context, TB, VB, yB);
              break;
            default:
              if (!YB)
                for (LB = 1, YB = new Array(kB - 1); LB < kB; LB++) YB[LB - 1] = arguments[LB];
              oB[gB].gD.apply(oB[gB].context, YB)
          }
        }
        return !0
      }, JB.prototype.on = function(BB, TB, dB) {
        return pB(this, BB, TB, dB, !1)
      }, JB.prototype.once = function(BB, TB, dB) {
        return pB(this, BB, TB, dB, !0)
      }, JB.prototype.removeListener = function(BB, TB, VB, yB) {
        var pB = dB ? dB + BB : BB;
        if (!this._events[pB]) return this;
        if (!TB) return lB(this, pB), this;
        var JB = this._events[pB];
        if (JB.gD) JB.gD !== TB || yB && !JB.once || VB && JB.context !== VB || lB(this, pB);
        else {
          for (var YB = 0, gB = [], oB = JB.length; YB < oB; YB++)(JB[YB].gD !== TB || yB && !JB[YB].once || VB && JB[YB].context !== VB) && gB.push(JB[YB]);
          gB.length ? this._events[pB] = 1 === gB.length ? gB[0] : gB : lB(this, pB)
        }
        return this
      }, JB.prototype.nH = function(BB) {
        var TB;
        return BB ? (TB = dB ? dB + BB : BB, this._events[TB] && lB(this, TB)) : (this._events = new VB, this._eventsCount = 0), this
      }, JB.prototype.off = JB.prototype.removeListener, JB.prototype.addListener = JB.prototype.on, JB.prefixed = dB, JB.EventEmitter = JB, BB.exports = JB
    }(lB);
    var JB, YB, gB = pB(lB.exports);
    ! function(BB) {
      BB.assertEqual = BB => BB, BB.assertIs = function(BB) {}, BB.assertNever = function(BB) {
        throw new Error
      }, BB.arrayToEnum = BB => {
        const TB = {};
        for (const dB of BB) TB[dB] = dB;
        return TB
      }, BB.getValidEnumValues = TB => {
        const dB = BB.objectKeys(TB).filter((BB => "number" !== typeof TB[TB[BB]])),
          VB = {};
        for (const BB of dB) VB[BB] = TB[BB];
        return BB.objectValues(VB)
      }, BB.objectValues = TB => BB.objectKeys(TB).map((function(BB) {
        return TB[BB]
      })), BB.objectKeys = "function" === typeof Object.keys ? BB => Object.keys(BB) : BB => {
        const TB = [];
        for (const dB in BB) Object.prototype.hasOwnProperty.call(BB, dB) && TB.push(dB);
        return TB
      }, BB.find = (BB, TB) => {
        for (const dB of BB)
          if (TB(dB)) return dB
      }, BB.isInteger = "function" === typeof Number.isInteger ? BB => Number.isInteger(BB) : BB => "number" === typeof BB && isFinite(BB) && Math.floor(BB) === BB, BB.joinValues = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return BB.map((BB => "string" === typeof BB ? `'${BB}'` : BB)).join(TB)
      }, BB.jsonStringifyReplacer = (BB, TB) => "bigint" === typeof TB ? TB.toString() : TB
    }(JB || (JB = {})),
    function(BB) {
      BB.mergeShapes = (BB, TB) => ({
        ...BB,
        ...TB
      })
    }(YB || (YB = {}));
    const oB = JB.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      kB = BB => {
        switch (typeof BB) {
          case "undefined":
            return oB.undefined;
          case "string":
            return oB.string;
          case "number":
            return isNaN(BB) ? oB.nan : oB.number;
          case "boolean":
            return oB.boolean;
          case "function":
            return oB.function;
          case "bigint":
            return oB.bigint;
          case "symbol":
            return oB.symbol;
          case "object":
            return Array.isArray(BB) ? oB.array : null === BB ? oB.null : BB.then && "function" === typeof BB.then && BB.catch && "function" === typeof BB.catch ? oB.promise : "undefined" !== typeof Map && BB instanceof Map ? oB.map : "undefined" !== typeof Set && BB instanceof Set ? oB.set : "undefined" !== typeof Date && BB instanceof Date ? oB.date : oB.object;
          default:
            return oB.unknown
        }
      },
      LB = JB.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class OB extends Error {
      constructor(BB) {
        var TB;
        super(), TB = this, this.issues = [], this.addIssue = BB => {
          this.issues = [...this.issues, BB]
        }, this.addIssues = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          TB.issues = [...TB.issues, ...BB]
        };
        const dB = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, dB) : this.__proto__ = dB, this.name = "ZodError", this.issues = BB
      }
      get errors() {
        return this.issues
      }
      format(BB) {
        const TB = BB || function(BB) {
            return BB.message
          },
          dB = {
            _errors: []
          },
          VB = BB => {
            for (const yB of BB.issues)
              if ("invalid_union" === yB.code) yB.unionErrors.map(VB);
              else if ("invalid_return_type" === yB.code) VB(yB.returnTypeError);
            else if ("invalid_arguments" === yB.code) VB(yB.argumentsError);
            else if (0 === yB.path.length) dB._errors.push(TB(yB));
            else {
              let BB = dB,
                VB = 0;
              for (; VB < yB.path.length;) {
                const dB = yB.path[VB];
                VB === yB.path.length - 1 ? (BB[dB] = BB[dB] || {
                  _errors: []
                }, BB[dB]._errors.push(TB(yB))) : BB[dB] = BB[dB] || {
                  _errors: []
                }, BB = BB[dB], VB++
              }
            }
          };
        return VB(this), dB
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, JB.jsonStringifyReplacer, 2)
      }
      get OD() {
        return 0 === this.issues.length
      }
      flatten() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BB => BB.message;
        const TB = {},
          dB = [];
        for (const VB of this.issues) VB.path.length > 0 ? (TB[VB.path[0]] = TB[VB.path[0]] || [], TB[VB.path[0]].push(BB(VB))) : dB.push(BB(VB));
        return {
          formErrors: dB,
          fieldErrors: TB
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    OB.create = BB => new OB(BB);
    const DB = (BB, TB) => {
      let dB;
      switch (BB.code) {
        case LB.invalid_type:
          dB = BB.received === oB.undefined ? "Required" : `Expected ${BB.expected}, received ${BB.received}`;
          break;
        case LB.invalid_literal:
          dB = `Invalid literal value, expected ${JSON.stringify(BB.expected,JB.jsonStringifyReplacer)}`;
          break;
        case LB.unrecognized_keys:
          dB = `Unrecognized key(s) in object: ${JB.joinValues(BB.keys,", ")}`;
          break;
        case LB.invalid_union:
          dB = "Invalid input";
          break;
        case LB.invalid_union_discriminator:
          dB = `Invalid discriminator value. Expected ${JB.joinValues(BB.options)}`;
          break;
        case LB.invalid_enum_value:
          dB = `Invalid enum value. Expected ${JB.joinValues(BB.options)}, received '${BB.received}'`;
          break;
        case LB.invalid_arguments:
          dB = "Invalid function arguments";
          break;
        case LB.invalid_return_type:
          dB = "Invalid function return type";
          break;
        case LB.invalid_date:
          dB = "Invalid date";
          break;
        case LB.invalid_string:
          "object" === typeof BB.validation ? "includes" in BB.validation ? (dB = `Invalid input: must include "${BB.validation.includes}"`, "number" === typeof BB.validation.position && (dB = `${dB} at one or more positions greater than or equal to ${BB.validation.position}`)) : "startsWith" in BB.validation ? dB = `Invalid input: must start with "${BB.validation.startsWith}"` : "endsWith" in BB.validation ? dB = `Invalid input: must end with "${BB.validation.endsWith}"` : JB.assertNever(BB.validation) : dB = "regex" !== BB.validation ? `Invalid ${BB.validation}` : "Invalid";
          break;
        case LB.too_small:
          dB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at least":"more than"} ${BB.minimum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at least":"over"} ${BB.minimum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${BB.minimum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(BB.minimum))}` : "Invalid input";
          break;
        case LB.too_big:
          dB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at most":"less than"} ${BB.maximum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at most":"under"} ${BB.maximum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "bigint" === BB.type ? `BigInt must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly":BB.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(BB.maximum))}` : "Invalid input";
          break;
        case LB.custom:
          dB = "Invalid input";
          break;
        case LB.invalid_intersection_types:
          dB = "Intersection results could not be merged";
          break;
        case LB.not_multiple_of:
          dB = `Number must be a multiple of ${BB.multipleOf}`;
          break;
        case LB.not_finite:
          dB = "Number must be finite";
          break;
        default:
          dB = TB.defaultError, JB.assertNever(BB)
      }
      return {
        message: dB
      }
    };
    let uB = DB;

    function HB() {
      return uB
    }
    const EB = BB => {
      const {
        data: TB,
        path: dB,
        errorMaps: VB,
        issueData: yB
      } = BB, pB = [...dB, ...yB.path || []], lB = {
        ...yB,
        path: pB
      };
      let JB = "";
      const YB = VB.filter((BB => !!BB)).slice().reverse();
      for (const gB of YB) JB = gB(lB, {
        data: TB,
        defaultError: JB
      }).message;
      return {
        ...yB,
        path: pB,
        message: yB.message || JB
      }
    };

    function vB(BB, TB) {
      const dB = EB({
        issueData: TB,
        data: BB.data,
        path: BB.path,
        errorMaps: [BB.common.contextualErrorMap, BB.schemaErrorMap, HB(), DB].filter((BB => !!BB))
      });
      BB.common.issues.push(dB)
    }
    class mB {
      constructor() {
        this.value = "valid"
      }
      hD() {
        "valid" === this.value && (this.value = "hD")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(BB, TB) {
        const dB = [];
        for (const VB of TB) {
          if ("aborted" === VB.status) return iB;
          "hD" === VB.status && BB.hD(), dB.push(VB.value)
        }
        return {
          status: BB.value,
          value: dB
        }
      }
      static async mergeObjectAsync(BB, TB) {
        const dB = [];
        for (const VB of TB) dB.push({
          key: await VB.key,
          value: await VB.value
        });
        return mB.mergeObjectSync(BB, dB)
      }
      static mergeObjectSync(BB, TB) {
        const dB = {};
        for (const VB of TB) {
          const {
            key: TB,
            value: yB
          } = VB;
          if ("aborted" === TB.status) return iB;
          if ("aborted" === yB.status) return iB;
          "hD" === TB.status && BB.hD(), "hD" === yB.status && BB.hD(), "__proto__" === TB.value || "undefined" === typeof yB.value && !VB.alwaysSet || (dB[TB.value] = yB.value)
        }
        return {
          status: BB.value,
          value: dB
        }
      }
    }
    const iB = Object.freeze({
        status: "aborted"
      }),
      NB = BB => ({
        status: "hD",
        value: BB
      }),
      tB = BB => ({
        status: "valid",
        value: BB
      }),
      fB = BB => "aborted" === BB.status,
      sB = BB => "hD" === BB.status,
      MB = BB => "valid" === BB.status,
      zB = BB => "undefined" !== typeof Promise && BB instanceof Promise;
    var wB;
    ! function(BB) {
      BB.errToObj = BB => "string" === typeof BB ? {
        message: BB
      } : BB || {}, BB.toString = BB => "string" === typeof BB ? BB : null === BB || void 0 === BB ? void 0 : BB.message
    }(wB || (wB = {}));
    class UB {
      constructor(BB, TB, dB, VB) {
        this._cachedPath = [], this.parent = BB, this.data = TB, this._path = dB, this._key = VB
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const FB = (BB, TB) => {
      if (MB(TB)) return {
        success: !0,
        data: TB.value
      };
      if (!BB.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const TB = new OB(BB.common.issues);
          return this._error = TB, this._error
        }
      }
    };

    function KB(BB) {
      if (!BB) return {};
      const {
        errorMap: TB,
        invalid_type_error: dB,
        required_error: VB,
        description: yB
      } = BB;
      if (TB && (dB || VB)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (TB) return {
        errorMap: TB,
        description: yB
      };
      return {
        errorMap: (BB, TB) => "invalid_type" !== BB.code ? {
          message: TB.defaultError
        } : "undefined" === typeof TB.data ? {
          message: null !== VB && void 0 !== VB ? VB : TB.defaultError
        } : {
          message: null !== dB && void 0 !== dB ? dB : TB.defaultError
        },
        description: yB
      }
    }
    class rB {
      constructor(BB) {
        this.spa = this.safeParseAsync, this._def = BB, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(BB) {
        return kB(BB.data)
      }
      _getOrReturnCtx(BB, TB) {
        return TB || {
          common: BB.parent.common,
          data: BB.data,
          parsedType: kB(BB.data),
          schemaErrorMap: this._def.errorMap,
          path: BB.path,
          parent: BB.parent
        }
      }
      _processInputParams(BB) {
        return {
          status: new mB,
          ctx: {
            common: BB.parent.common,
            data: BB.data,
            parsedType: kB(BB.data),
            schemaErrorMap: this._def.errorMap,
            path: BB.path,
            parent: BB.parent
          }
        }
      }
      _parseSync(BB) {
        const TB = this._parse(BB);
        if (zB(TB)) throw new Error("Synchronous parse encountered promise.");
        return TB
      }
      _parseAsync(BB) {
        const TB = this._parse(BB);
        return Promise.resolve(TB)
      }
      parse(BB, TB) {
        const dB = this.safeParse(BB, TB);
        if (dB.success) return dB.data;
        throw dB.error
      }
      safeParse(BB, TB) {
        var dB;
        const VB = {
            common: {
              issues: [],
              async: null !== (dB = null === TB || void 0 === TB ? void 0 : TB.async) && void 0 !== dB && dB,
              contextualErrorMap: null === TB || void 0 === TB ? void 0 : TB.errorMap
            },
            path: (null === TB || void 0 === TB ? void 0 : TB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: kB(BB)
          },
          yB = this._parseSync({
            data: BB,
            path: VB.path,
            parent: VB
          });
        return FB(VB, yB)
      }
      async parseAsync(BB, TB) {
        const dB = await this.safeParseAsync(BB, TB);
        if (dB.success) return dB.data;
        throw dB.error
      }
      async safeParseAsync(BB, TB) {
        const dB = {
            common: {
              issues: [],
              contextualErrorMap: null === TB || void 0 === TB ? void 0 : TB.errorMap,
              async: !0
            },
            path: (null === TB || void 0 === TB ? void 0 : TB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: kB(BB)
          },
          VB = this._parse({
            data: BB,
            path: dB.path,
            parent: dB
          }),
          yB = await (zB(VB) ? VB : Promise.resolve(VB));
        return FB(dB, yB)
      }
      refine(BB, TB) {
        const dB = BB => "string" === typeof TB || "undefined" === typeof TB ? {
          message: TB
        } : "function" === typeof TB ? TB(BB) : TB;
        return this._refinement(((TB, VB) => {
          const yB = BB(TB),
            pB = () => VB.addIssue({
              code: LB.custom,
              ...dB(TB)
            });
          return "undefined" !== typeof Promise && yB instanceof Promise ? yB.then((BB => !!BB || (pB(), !1))) : !!yB || (pB(), !1)
        }))
      }
      refinement(BB, TB) {
        return this._refinement(((dB, VB) => !!BB(dB) || (VB.addIssue("function" === typeof TB ? TB(dB, VB) : TB), !1)))
      }
      _refinement(BB) {
        return new iT({
          schema: this,
          typeName: IT.ZodEffects,
          effect: {
            type: "refinement",
            refinement: BB
          }
        })
      }
      superRefine(BB) {
        return this._refinement(BB)
      }
      optional() {
        return NT.create(this, this._def)
      }
      nullable() {
        return tT.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return TT.create(this, this._def)
      }
      promise() {
        return mT.create(this, this._def)
      }
      or(BB) {
        return yT.create([this, BB], this._def)
      }
      and(BB) {
        return YT.create(this, BB, this._def)
      }
      transform(BB) {
        return new iT({
          ...KB(this._def),
          schema: this,
          typeName: IT.ZodEffects,
          effect: {
            type: "transform",
            transform: BB
          }
        })
      }
      default (BB) {
        const TB = "function" === typeof BB ? BB : () => BB;
        return new fT({
          ...KB(this._def),
          innerType: this,
          defaultValue: TB,
          typeName: IT.ZodDefault
        })
      }
      brand() {
        return new wT({
          typeName: IT.ZodBranded,
          type: this,
          ...KB(this._def)
        })
      } catch (BB) {
        const TB = "function" === typeof BB ? BB : () => BB;
        return new sT({
          ...KB(this._def),
          innerType: this,
          catchValue: TB,
          typeName: IT.ZodCatch
        })
      }
      describe(BB) {
        return new(0, this.constructor)({
          ...this._def,
          description: BB
        })
      }
      pipe(BB) {
        return UT.create(this, BB)
      }
      readonly() {
        return FT.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const IB = /^c[^\s-]{8,}$/i,
      cB = /^[a-z][a-z0-9]*$/,
      SB = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      PB = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      QB = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let RB;
    const aB = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      ZB = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class XB extends rB {
      _parse(BB) {
        this._def.coerce && (BB.data = String(BB.data));
        if (this._getType(BB) !== oB.string) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.string,
            received: TB.parsedType
          }), iB
        }
        const TB = new mB;
        let dB;
        for (const YB of this._def.checks)
          if ("min" === YB.kind) BB.data.length < YB.value && (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
            code: LB.too_small,
            minimum: YB.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: YB.message
          }), TB.hD());
          else if ("max" === YB.kind) BB.data.length > YB.value && (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          code: LB.too_big,
          maximum: YB.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: YB.message
        }), TB.hD());
        else if ("length" === YB.kind) {
          const VB = BB.data.length > YB.value,
            yB = BB.data.length < YB.value;
          (VB || yB) && (dB = this._getOrReturnCtx(BB, dB), VB ? vB(dB, {
            code: LB.too_big,
            maximum: YB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: YB.message
          }) : yB && vB(dB, {
            code: LB.too_small,
            minimum: YB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: YB.message
          }), TB.hD())
        } else if ("email" === YB.kind) QB.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "email",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD());
        else if ("emoji" === YB.kind) RB || (RB = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), RB.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "emoji",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD());
        else if ("uuid" === YB.kind) PB.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "uuid",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD());
        else if ("cuid" === YB.kind) IB.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "cuid",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD());
        else if ("cuid2" === YB.kind) cB.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "cuid2",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD());
        else if ("ulid" === YB.kind) SB.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "ulid",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD());
        else if ("url" === YB.kind) try {
          new URL(BB.data)
        } catch (lB) {
          dB = this._getOrReturnCtx(BB, dB), vB(dB, {
            validation: "url",
            code: LB.invalid_string,
            message: YB.message
          }), TB.hD()
        } else if ("regex" === YB.kind) {
          YB.regex.lastIndex = 0;
          YB.regex.test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
            validation: "regex",
            code: LB.invalid_string,
            message: YB.message
          }), TB.hD())
        } else if ("trim" === YB.kind) BB.data = BB.data.trim();
        else if ("includes" === YB.kind) BB.data.includes(YB.value, YB.position) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          code: LB.invalid_string,
          validation: {
            includes: YB.value,
            position: YB.position
          },
          message: YB.message
        }), TB.hD());
        else if ("toLowerCase" === YB.kind) BB.data = BB.data.toLowerCase();
        else if ("toUpperCase" === YB.kind) BB.data = BB.data.toUpperCase();
        else if ("startsWith" === YB.kind) BB.data.startsWith(YB.value) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          code: LB.invalid_string,
          validation: {
            startsWith: YB.value
          },
          message: YB.message
        }), TB.hD());
        else if ("endsWith" === YB.kind) BB.data.endsWith(YB.value) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          code: LB.invalid_string,
          validation: {
            endsWith: YB.value
          },
          message: YB.message
        }), TB.hD());
        else if ("datetime" === YB.kind) {
          ((pB = YB).precision ? pB.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${pB.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${pB.precision}}Z$`) : 0 === pB.precision ? pB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : pB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(BB.data) || (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
            code: LB.invalid_string,
            validation: "datetime",
            message: YB.message
          }), TB.hD())
        } else "ip" === YB.kind ? (VB = BB.data, ("v4" !== (yB = YB.version) && yB || !aB.test(VB)) && ("v6" !== yB && yB || !ZB.test(VB)) && (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          validation: "ip",
          code: LB.invalid_string,
          message: YB.message
        }), TB.hD())) : JB.assertNever(YB);
        var VB, yB, pB;
        return {
          status: TB.value,
          value: BB.data
        }
      }
      _regex(BB, TB, dB) {
        return this.refinement((TB => BB.test(TB)), {
          validation: TB,
          code: LB.invalid_string,
          ...wB.errToObj(dB)
        })
      }
      _addCheck(BB) {
        return new XB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      email(BB) {
        return this._addCheck({
          kind: "email",
          ...wB.errToObj(BB)
        })
      }
      url(BB) {
        return this._addCheck({
          kind: "url",
          ...wB.errToObj(BB)
        })
      }
      emoji(BB) {
        return this._addCheck({
          kind: "emoji",
          ...wB.errToObj(BB)
        })
      }
      uuid(BB) {
        return this._addCheck({
          kind: "uuid",
          ...wB.errToObj(BB)
        })
      }
      cuid(BB) {
        return this._addCheck({
          kind: "cuid",
          ...wB.errToObj(BB)
        })
      }
      cuid2(BB) {
        return this._addCheck({
          kind: "cuid2",
          ...wB.errToObj(BB)
        })
      }
      ulid(BB) {
        return this._addCheck({
          kind: "ulid",
          ...wB.errToObj(BB)
        })
      }
      ip(BB) {
        return this._addCheck({
          kind: "ip",
          ...wB.errToObj(BB)
        })
      }
      datetime(BB) {
        var TB;
        return "string" === typeof BB ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: BB
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === BB || void 0 === BB ? void 0 : BB.precision) ? null : null === BB || void 0 === BB ? void 0 : BB.precision,
          offset: null !== (TB = null === BB || void 0 === BB ? void 0 : BB.offset) && void 0 !== TB && TB,
          ...wB.errToObj(null === BB || void 0 === BB ? void 0 : BB.message)
        })
      }
      regex(BB, TB) {
        return this._addCheck({
          kind: "regex",
          regex: BB,
          ...wB.errToObj(TB)
        })
      }
      includes(BB, TB) {
        return this._addCheck({
          kind: "includes",
          value: BB,
          position: null === TB || void 0 === TB ? void 0 : TB.position,
          ...wB.errToObj(null === TB || void 0 === TB ? void 0 : TB.message)
        })
      }
      startsWith(BB, TB) {
        return this._addCheck({
          kind: "startsWith",
          value: BB,
          ...wB.errToObj(TB)
        })
      }
      endsWith(BB, TB) {
        return this._addCheck({
          kind: "endsWith",
          value: BB,
          ...wB.errToObj(TB)
        })
      }
      min(BB, TB) {
        return this._addCheck({
          kind: "min",
          value: BB,
          ...wB.errToObj(TB)
        })
      }
      max(BB, TB) {
        return this._addCheck({
          kind: "max",
          value: BB,
          ...wB.errToObj(TB)
        })
      }
      length(BB, TB) {
        return this._addCheck({
          kind: "length",
          value: BB,
          ...wB.errToObj(TB)
        })
      }
      nonempty(BB) {
        return this.min(1, wB.errToObj(BB))
      }
      trim() {
        return new XB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new XB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new XB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((BB => "datetime" === BB.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((BB => "email" === BB.kind))
      }
      get isURL() {
        return !!this._def.checks.find((BB => "url" === BB.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((BB => "emoji" === BB.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((BB => "uuid" === BB.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((BB => "cuid" === BB.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((BB => "cuid2" === BB.kind))
      }
      get isULID() {
        return !!this._def.checks.find((BB => "ulid" === BB.kind))
      }
      get isIP() {
        return !!this._def.checks.find((BB => "ip" === BB.kind))
      }
      get minLength() {
        let BB = null;
        for (const TB of this._def.checks) "min" === TB.kind && (null === BB || TB.value > BB) && (BB = TB.value);
        return BB
      }
      get maxLength() {
        let BB = null;
        for (const TB of this._def.checks) "max" === TB.kind && (null === BB || TB.value < BB) && (BB = TB.value);
        return BB
      }
    }

    function WB(BB, TB) {
      const dB = (BB.toString().split(".")[1] || "").length,
        VB = (TB.toString().split(".")[1] || "").length,
        yB = dB > VB ? dB : VB;
      return parseInt(BB.toFixed(yB).replace(".", "")) % parseInt(TB.toFixed(yB).replace(".", "")) / Math.pow(10, yB)
    }
    XB.create = BB => {
      var TB;
      return new XB({
        checks: [],
        typeName: IT.ZodString,
        coerce: null !== (TB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== TB && TB,
        ...KB(BB)
      })
    };
    class hB extends rB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(BB) {
        this._def.coerce && (BB.data = Number(BB.data));
        if (this._getType(BB) !== oB.number) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.number,
            received: TB.parsedType
          }), iB
        }
        let TB;
        const dB = new mB;
        for (const VB of this._def.checks)
          if ("int" === VB.kind) JB.isInteger(BB.data) || (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
            code: LB.invalid_type,
            expected: "integer",
            received: "float",
            message: VB.message
          }), dB.hD());
          else if ("min" === VB.kind) {
          (VB.inclusive ? BB.data < VB.value : BB.data <= VB.value) && (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
            code: LB.too_small,
            minimum: VB.value,
            type: "number",
            inclusive: VB.inclusive,
            exact: !1,
            message: VB.message
          }), dB.hD())
        } else if ("max" === VB.kind) {
          (VB.inclusive ? BB.data > VB.value : BB.data >= VB.value) && (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
            code: LB.too_big,
            maximum: VB.value,
            type: "number",
            inclusive: VB.inclusive,
            exact: !1,
            message: VB.message
          }), dB.hD())
        } else "multipleOf" === VB.kind ? 0 !== WB(BB.data, VB.value) && (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
          code: LB.not_multiple_of,
          multipleOf: VB.value,
          message: VB.message
        }), dB.hD()) : "finite" === VB.kind ? Number.isFinite(BB.data) || (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
          code: LB.not_finite,
          message: VB.message
        }), dB.hD()) : JB.assertNever(VB);
        return {
          status: dB.value,
          value: BB.data
        }
      }
      gte(BB, TB) {
        return this.setLimit("min", BB, !0, wB.toString(TB))
      }
      gt(BB, TB) {
        return this.setLimit("min", BB, !1, wB.toString(TB))
      }
      lte(BB, TB) {
        return this.setLimit("max", BB, !0, wB.toString(TB))
      }
      lt(BB, TB) {
        return this.setLimit("max", BB, !1, wB.toString(TB))
      }
      setLimit(BB, TB, dB, VB) {
        return new hB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: TB,
            inclusive: dB,
            message: wB.toString(VB)
          }]
        })
      }
      _addCheck(BB) {
        return new hB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      int(BB) {
        return this._addCheck({
          kind: "int",
          message: wB.toString(BB)
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: wB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: wB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: wB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: wB.toString(BB)
        })
      }
      multipleOf(BB, TB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: wB.toString(TB)
        })
      }
      finite(BB) {
        return this._addCheck({
          kind: "finite",
          message: wB.toString(BB)
        })
      }
      safe(BB) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: wB.toString(BB)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: wB.toString(BB)
        })
      }
      get minValue() {
        let BB = null;
        for (const TB of this._def.checks) "min" === TB.kind && (null === BB || TB.value > BB) && (BB = TB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const TB of this._def.checks) "max" === TB.kind && (null === BB || TB.value < BB) && (BB = TB.value);
        return BB
      }
      get isInt() {
        return !!this._def.checks.find((BB => "int" === BB.kind || "multipleOf" === BB.kind && JB.isInteger(BB.value)))
      }
      get isFinite() {
        let BB = null,
          TB = null;
        for (const dB of this._def.checks) {
          if ("finite" === dB.kind || "int" === dB.kind || "multipleOf" === dB.kind) return !0;
          "min" === dB.kind ? (null === TB || dB.value > TB) && (TB = dB.value) : "max" === dB.kind && (null === BB || dB.value < BB) && (BB = dB.value)
        }
        return Number.isFinite(TB) && Number.isFinite(BB)
      }
    }
    hB.create = BB => new hB({
      checks: [],
      typeName: IT.ZodNumber,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...KB(BB)
    });
    class CB extends rB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(BB) {
        this._def.coerce && (BB.data = BigInt(BB.data));
        if (this._getType(BB) !== oB.bigint) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.bigint,
            received: TB.parsedType
          }), iB
        }
        let TB;
        const dB = new mB;
        for (const VB of this._def.checks)
          if ("min" === VB.kind) {
            (VB.inclusive ? BB.data < VB.value : BB.data <= VB.value) && (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
              code: LB.too_small,
              type: "bigint",
              minimum: VB.value,
              inclusive: VB.inclusive,
              message: VB.message
            }), dB.hD())
          } else if ("max" === VB.kind) {
          (VB.inclusive ? BB.data > VB.value : BB.data >= VB.value) && (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
            code: LB.too_big,
            type: "bigint",
            maximum: VB.value,
            inclusive: VB.inclusive,
            message: VB.message
          }), dB.hD())
        } else "multipleOf" === VB.kind ? BB.data % VB.value !== BigInt(0) && (TB = this._getOrReturnCtx(BB, TB), vB(TB, {
          code: LB.not_multiple_of,
          multipleOf: VB.value,
          message: VB.message
        }), dB.hD()) : JB.assertNever(VB);
        return {
          status: dB.value,
          value: BB.data
        }
      }
      gte(BB, TB) {
        return this.setLimit("min", BB, !0, wB.toString(TB))
      }
      gt(BB, TB) {
        return this.setLimit("min", BB, !1, wB.toString(TB))
      }
      lte(BB, TB) {
        return this.setLimit("max", BB, !0, wB.toString(TB))
      }
      lt(BB, TB) {
        return this.setLimit("max", BB, !1, wB.toString(TB))
      }
      setLimit(BB, TB, dB, VB) {
        return new CB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: TB,
            inclusive: dB,
            message: wB.toString(VB)
          }]
        })
      }
      _addCheck(BB) {
        return new CB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: wB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: wB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: wB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: wB.toString(BB)
        })
      }
      multipleOf(BB, TB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: wB.toString(TB)
        })
      }
      get minValue() {
        let BB = null;
        for (const TB of this._def.checks) "min" === TB.kind && (null === BB || TB.value > BB) && (BB = TB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const TB of this._def.checks) "max" === TB.kind && (null === BB || TB.value < BB) && (BB = TB.value);
        return BB
      }
    }
    CB.create = BB => {
      var TB;
      return new CB({
        checks: [],
        typeName: IT.ZodBigInt,
        coerce: null !== (TB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== TB && TB,
        ...KB(BB)
      })
    };
    class GB extends rB {
      _parse(BB) {
        this._def.coerce && (BB.data = Boolean(BB.data));
        if (this._getType(BB) !== oB.boolean) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.boolean,
            received: TB.parsedType
          }), iB
        }
        return tB(BB.data)
      }
    }
    GB.create = BB => new GB({
      typeName: IT.ZodBoolean,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...KB(BB)
    });
    class qB extends rB {
      _parse(BB) {
        this._def.coerce && (BB.data = new Date(BB.data));
        if (this._getType(BB) !== oB.date) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.date,
            received: TB.parsedType
          }), iB
        }
        if (isNaN(BB.data.getTime())) {
          return vB(this._getOrReturnCtx(BB), {
            code: LB.invalid_date
          }), iB
        }
        const TB = new mB;
        let dB;
        for (const VB of this._def.checks) "min" === VB.kind ? BB.data.getTime() < VB.value && (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          code: LB.too_small,
          message: VB.message,
          inclusive: !0,
          exact: !1,
          minimum: VB.value,
          type: "date"
        }), TB.hD()) : "max" === VB.kind ? BB.data.getTime() > VB.value && (dB = this._getOrReturnCtx(BB, dB), vB(dB, {
          code: LB.too_big,
          message: VB.message,
          inclusive: !0,
          exact: !1,
          maximum: VB.value,
          type: "date"
        }), TB.hD()) : JB.assertNever(VB);
        return {
          status: TB.value,
          value: new Date(BB.data.getTime())
        }
      }
      _addCheck(BB) {
        return new qB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      min(BB, TB) {
        return this._addCheck({
          kind: "min",
          value: BB.getTime(),
          message: wB.toString(TB)
        })
      }
      max(BB, TB) {
        return this._addCheck({
          kind: "max",
          value: BB.getTime(),
          message: wB.toString(TB)
        })
      }
      get minDate() {
        let BB = null;
        for (const TB of this._def.checks) "min" === TB.kind && (null === BB || TB.value > BB) && (BB = TB.value);
        return null != BB ? new Date(BB) : null
      }
      get maxDate() {
        let BB = null;
        for (const TB of this._def.checks) "max" === TB.kind && (null === BB || TB.value < BB) && (BB = TB.value);
        return null != BB ? new Date(BB) : null
      }
    }
    qB.create = BB => new qB({
      checks: [],
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      typeName: IT.ZodDate,
      ...KB(BB)
    });
    class xB extends rB {
      _parse(BB) {
        if (this._getType(BB) !== oB.symbol) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.symbol,
            received: TB.parsedType
          }), iB
        }
        return tB(BB.data)
      }
    }
    xB.create = BB => new xB({
      typeName: IT.ZodSymbol,
      ...KB(BB)
    });
    class jB extends rB {
      _parse(BB) {
        if (this._getType(BB) !== oB.undefined) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.undefined,
            received: TB.parsedType
          }), iB
        }
        return tB(BB.data)
      }
    }
    jB.create = BB => new jB({
      typeName: IT.ZodUndefined,
      ...KB(BB)
    });
    class AB extends rB {
      _parse(BB) {
        if (this._getType(BB) !== oB.null) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.null,
            received: TB.parsedType
          }), iB
        }
        return tB(BB.data)
      }
    }
    AB.create = BB => new AB({
      typeName: IT.ZodNull,
      ...KB(BB)
    });
    class bB extends rB {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(BB) {
        return tB(BB.data)
      }
    }
    bB.create = BB => new bB({
      typeName: IT.ZodAny,
      ...KB(BB)
    });
    class nB extends rB {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(BB) {
        return tB(BB.data)
      }
    }
    nB.create = BB => new nB({
      typeName: IT.ZodUnknown,
      ...KB(BB)
    });
    class eB extends rB {
      _parse(BB) {
        const TB = this._getOrReturnCtx(BB);
        return vB(TB, {
          code: LB.invalid_type,
          expected: oB.never,
          received: TB.parsedType
        }), iB
      }
    }
    eB.create = BB => new eB({
      typeName: IT.ZodNever,
      ...KB(BB)
    });
    class BT extends rB {
      _parse(BB) {
        if (this._getType(BB) !== oB.undefined) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.void,
            received: TB.parsedType
          }), iB
        }
        return tB(BB.data)
      }
    }
    BT.create = BB => new BT({
      typeName: IT.ZodVoid,
      ...KB(BB)
    });
    class TT extends rB {
      _parse(BB) {
        const {
          ctx: TB,
          status: dB
        } = this._processInputParams(BB), VB = this._def;
        if (TB.parsedType !== oB.array) return vB(TB, {
          code: LB.invalid_type,
          expected: oB.array,
          received: TB.parsedType
        }), iB;
        if (null !== VB.exactLength) {
          const BB = TB.data.length > VB.exactLength.value,
            yB = TB.data.length < VB.exactLength.value;
          (BB || yB) && (vB(TB, {
            code: BB ? LB.too_big : LB.too_small,
            minimum: yB ? VB.exactLength.value : void 0,
            maximum: BB ? VB.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: VB.exactLength.message
          }), dB.hD())
        }
        if (null !== VB.minLength && TB.data.length < VB.minLength.value && (vB(TB, {
            code: LB.too_small,
            minimum: VB.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: VB.minLength.message
          }), dB.hD()), null !== VB.maxLength && TB.data.length > VB.maxLength.value && (vB(TB, {
            code: LB.too_big,
            maximum: VB.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: VB.maxLength.message
          }), dB.hD()), TB.common.async) return Promise.all([...TB.data].map(((BB, dB) => VB.type._parseAsync(new UB(TB, BB, TB.path, dB))))).then((BB => mB.mergeArray(dB, BB)));
        const yB = [...TB.data].map(((BB, dB) => VB.type._parseSync(new UB(TB, BB, TB.path, dB))));
        return mB.mergeArray(dB, yB)
      }
      get element() {
        return this._def.type
      }
      min(BB, TB) {
        return new TT({
          ...this._def,
          minLength: {
            value: BB,
            message: wB.toString(TB)
          }
        })
      }
      max(BB, TB) {
        return new TT({
          ...this._def,
          maxLength: {
            value: BB,
            message: wB.toString(TB)
          }
        })
      }
      length(BB, TB) {
        return new TT({
          ...this._def,
          exactLength: {
            value: BB,
            message: wB.toString(TB)
          }
        })
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }

    function dT(BB) {
      if (BB instanceof VT) {
        const TB = {};
        for (const dB in BB.shape) {
          const VB = BB.shape[dB];
          TB[dB] = NT.create(dT(VB))
        }
        return new VT({
          ...BB._def,
          shape: () => TB
        })
      }
      return BB instanceof TT ? new TT({
        ...BB._def,
        type: dT(BB.element)
      }) : BB instanceof NT ? NT.create(dT(BB.unwrap())) : BB instanceof tT ? tT.create(dT(BB.unwrap())) : BB instanceof gT ? gT.create(BB.items.map((BB => dT(BB)))) : BB
    }
    TT.create = (BB, TB) => new TT({
      type: BB,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: IT.ZodArray,
      ...KB(TB)
    });
    class VT extends rB {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const BB = this._def.shape(),
          TB = JB.objectKeys(BB);
        return this._cached = {
          shape: BB,
          keys: TB
        }
      }
      _parse(BB) {
        if (this._getType(BB) !== oB.object) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.object,
            received: TB.parsedType
          }), iB
        }
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB), {
          shape: VB,
          keys: yB
        } = this._getCached(), pB = [];
        if (!(this._def.catchall instanceof eB && "strip" === this._def.unknownKeys))
          for (const JB in dB.data) yB.includes(JB) || pB.push(JB);
        const lB = [];
        for (const JB of yB) {
          const BB = VB[JB],
            TB = dB.data[JB];
          lB.push({
            key: {
              status: "valid",
              value: JB
            },
            value: BB._parse(new UB(dB, TB, dB.path, JB)),
            alwaysSet: JB in dB.data
          })
        }
        if (this._def.catchall instanceof eB) {
          const BB = this._def.unknownKeys;
          if ("passthrough" === BB)
            for (const TB of pB) lB.push({
              key: {
                status: "valid",
                value: TB
              },
              value: {
                status: "valid",
                value: dB.data[TB]
              }
            });
          else if ("strict" === BB) pB.length > 0 && (vB(dB, {
            code: LB.unrecognized_keys,
            keys: pB
          }), TB.hD());
          else if ("strip" !== BB) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const BB = this._def.catchall;
          for (const TB of pB) {
            const VB = dB.data[TB];
            lB.push({
              key: {
                status: "valid",
                value: TB
              },
              value: BB._parse(new UB(dB, VB, dB.path, TB)),
              alwaysSet: TB in dB.data
            })
          }
        }
        return dB.common.async ? Promise.resolve().then((async () => {
          const BB = [];
          for (const TB of lB) {
            const dB = await TB.key;
            BB.push({
              key: dB,
              value: await TB.value,
              alwaysSet: TB.alwaysSet
            })
          }
          return BB
        })).then((BB => mB.mergeObjectSync(TB, BB))) : mB.mergeObjectSync(TB, lB)
      }
      get shape() {
        return this._def.shape()
      }
      strict(BB) {
        return wB.errToObj, new VT({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== BB ? {
            errorMap: (TB, dB) => {
              var VB, yB, pB, lB;
              const JB = null !== (pB = null === (yB = (VB = this._def).errorMap) || void 0 === yB ? void 0 : yB.call(VB, TB, dB).message) && void 0 !== pB ? pB : dB.defaultError;
              return "unrecognized_keys" === TB.code ? {
                message: null !== (lB = wB.errToObj(BB).message) && void 0 !== lB ? lB : JB
              } : {
                message: JB
              }
            }
          } : {}
        })
      }
      strip() {
        return new VT({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new VT({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(BB) {
        return new VT({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...BB
          })
        })
      }
      merge(BB) {
        return new VT({
          unknownKeys: BB._def.unknownKeys,
          catchall: BB._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...BB._def.shape()
          }),
          typeName: IT.ZodObject
        })
      }
      setKey(BB, TB) {
        return this.augment({
          [BB]: TB
        })
      }
      catchall(BB) {
        return new VT({
          ...this._def,
          catchall: BB
        })
      }
      dO(BB) {
        const TB = {};
        return JB.objectKeys(BB).forEach((dB => {
          BB[dB] && this.shape[dB] && (TB[dB] = this.shape[dB])
        })), new VT({
          ...this._def,
          shape: () => TB
        })
      }
      omit(BB) {
        const TB = {};
        return JB.objectKeys(this.shape).forEach((dB => {
          BB[dB] || (TB[dB] = this.shape[dB])
        })), new VT({
          ...this._def,
          shape: () => TB
        })
      }
      deepPartial() {
        return dT(this)
      }
      partial(BB) {
        const TB = {};
        return JB.objectKeys(this.shape).forEach((dB => {
          const VB = this.shape[dB];
          BB && !BB[dB] ? TB[dB] = VB : TB[dB] = VB.optional()
        })), new VT({
          ...this._def,
          shape: () => TB
        })
      }
      required(BB) {
        const TB = {};
        return JB.objectKeys(this.shape).forEach((dB => {
          if (BB && !BB[dB]) TB[dB] = this.shape[dB];
          else {
            let BB = this.shape[dB];
            for (; BB instanceof NT;) BB = BB._def.innerType;
            TB[dB] = BB
          }
        })), new VT({
          ...this._def,
          shape: () => TB
        })
      }
      keyof() {
        return HT(JB.objectKeys(this.shape))
      }
    }
    VT.create = (BB, TB) => new VT({
      shape: () => BB,
      unknownKeys: "strip",
      catchall: eB.create(),
      typeName: IT.ZodObject,
      ...KB(TB)
    }), VT.strictCreate = (BB, TB) => new VT({
      shape: () => BB,
      unknownKeys: "strict",
      catchall: eB.create(),
      typeName: IT.ZodObject,
      ...KB(TB)
    }), VT.lazycreate = (BB, TB) => new VT({
      shape: BB,
      unknownKeys: "strip",
      catchall: eB.create(),
      typeName: IT.ZodObject,
      ...KB(TB)
    });
    class yT extends rB {
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB), dB = this._def.options;
        if (TB.common.async) return Promise.all(dB.map((async BB => {
          const dB = {
            ...TB,
            common: {
              ...TB.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await BB._parseAsync({
              data: TB.data,
              path: TB.path,
              parent: dB
            }),
            ctx: dB
          }
        }))).then((function(BB) {
          for (const TB of BB)
            if ("valid" === TB.result.status) return TB.result;
          for (const VB of BB)
            if ("hD" === VB.result.status) return TB.common.issues.push(...VB.ctx.common.issues), VB.result;
          const dB = BB.map((BB => new OB(BB.ctx.common.issues)));
          return vB(TB, {
            code: LB.invalid_union,
            unionErrors: dB
          }), iB
        }));
        {
          let BB;
          const VB = [];
          for (const pB of dB) {
            const dB = {
                ...TB,
                common: {
                  ...TB.common,
                  issues: []
                },
                parent: null
              },
              yB = pB._parseSync({
                data: TB.data,
                path: TB.path,
                parent: dB
              });
            if ("valid" === yB.status) return yB;
            "hD" !== yB.status || BB || (BB = {
              result: yB,
              ctx: dB
            }), dB.common.issues.length && VB.push(dB.common.issues)
          }
          if (BB) return TB.common.issues.push(...BB.ctx.common.issues), BB.result;
          const yB = VB.map((BB => new OB(BB)));
          return vB(TB, {
            code: LB.invalid_union,
            unionErrors: yB
          }), iB
        }
      }
      get options() {
        return this._def.options
      }
    }
    yT.create = (BB, TB) => new yT({
      options: BB,
      typeName: IT.ZodUnion,
      ...KB(TB)
    });
    const pT = BB => BB instanceof DT ? pT(BB.schema) : BB instanceof iT ? pT(BB.innerType()) : BB instanceof uT ? [BB.value] : BB instanceof ET ? BB.options : BB instanceof vT ? Object.keys(BB.enum) : BB instanceof fT ? pT(BB._def.innerType) : BB instanceof jB ? [void 0] : BB instanceof AB ? [null] : null;
    class lT extends rB {
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB);
        if (TB.parsedType !== oB.object) return vB(TB, {
          code: LB.invalid_type,
          expected: oB.object,
          received: TB.parsedType
        }), iB;
        const dB = this.discriminator,
          VB = TB.data[dB],
          yB = this.optionsMap.get(VB);
        return yB ? TB.common.async ? yB._parseAsync({
          data: TB.data,
          path: TB.path,
          parent: TB
        }) : yB._parseSync({
          data: TB.data,
          path: TB.path,
          parent: TB
        }) : (vB(TB, {
          code: LB.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [dB]
        }), iB)
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
      static create(BB, TB, dB) {
        const VB = new Map;
        for (const yB of TB) {
          const TB = pT(yB.shape[BB]);
          if (!TB) throw new Error(`A discriminator value for key \`${BB}\` could not be extracted from all schema options`);
          for (const dB of TB) {
            if (VB.has(dB)) throw new Error(`Discriminator property ${String(BB)} has duplicate value ${String(dB)}`);
            VB.set(dB, yB)
          }
        }
        return new lT({
          typeName: IT.ZodDiscriminatedUnion,
          discriminator: BB,
          options: TB,
          optionsMap: VB,
          ...KB(dB)
        })
      }
    }

    function JT(BB, TB) {
      const dB = kB(BB),
        VB = kB(TB);
      if (BB === TB) return {
        valid: !0,
        data: BB
      };
      if (dB === oB.object && VB === oB.object) {
        const dB = JB.objectKeys(TB),
          VB = JB.objectKeys(BB).filter((BB => -1 !== dB.indexOf(BB))),
          yB = {
            ...BB,
            ...TB
          };
        for (const pB of VB) {
          const dB = JT(BB[pB], TB[pB]);
          if (!dB.valid) return {
            valid: !1
          };
          yB[pB] = dB.data
        }
        return {
          valid: !0,
          data: yB
        }
      }
      if (dB === oB.array && VB === oB.array) {
        if (BB.length !== TB.length) return {
          valid: !1
        };
        const dB = [];
        for (let VB = 0; VB < BB.length; VB++) {
          const yB = JT(BB[VB], TB[VB]);
          if (!yB.valid) return {
            valid: !1
          };
          dB.push(yB.data)
        }
        return {
          valid: !0,
          data: dB
        }
      }
      return dB === oB.date && VB === oB.date && +BB === +TB ? {
        valid: !0,
        data: BB
      } : {
        valid: !1
      }
    }
    class YT extends rB {
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB), VB = (BB, VB) => {
          if (fB(BB) || fB(VB)) return iB;
          const yB = JT(BB.value, VB.value);
          return yB.valid ? ((sB(BB) || sB(VB)) && TB.hD(), {
            status: TB.value,
            value: yB.data
          }) : (vB(dB, {
            code: LB.invalid_intersection_types
          }), iB)
        };
        return dB.common.async ? Promise.all([this._def.left._parseAsync({
          data: dB.data,
          path: dB.path,
          parent: dB
        }), this._def.right._parseAsync({
          data: dB.data,
          path: dB.path,
          parent: dB
        })]).then((BB => {
          let [TB, dB] = BB;
          return VB(TB, dB)
        })) : VB(this._def.left._parseSync({
          data: dB.data,
          path: dB.path,
          parent: dB
        }), this._def.right._parseSync({
          data: dB.data,
          path: dB.path,
          parent: dB
        }))
      }
    }
    YT.create = (BB, TB, dB) => new YT({
      left: BB,
      right: TB,
      typeName: IT.ZodIntersection,
      ...KB(dB)
    });
    class gT extends rB {
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB);
        if (dB.parsedType !== oB.array) return vB(dB, {
          code: LB.invalid_type,
          expected: oB.array,
          received: dB.parsedType
        }), iB;
        if (dB.data.length < this._def.items.length) return vB(dB, {
          code: LB.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), iB;
        !this._def.rest && dB.data.length > this._def.items.length && (vB(dB, {
          code: LB.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), TB.hD());
        const VB = [...dB.data].map(((BB, TB) => {
          const VB = this._def.items[TB] || this._def.rest;
          return VB ? VB._parse(new UB(dB, BB, dB.path, TB)) : null
        })).filter((BB => !!BB));
        return dB.common.async ? Promise.all(VB).then((BB => mB.mergeArray(TB, BB))) : mB.mergeArray(TB, VB)
      }
      get items() {
        return this._def.items
      }
      rest(BB) {
        return new gT({
          ...this._def,
          rest: BB
        })
      }
    }
    gT.create = (BB, TB) => {
      if (!Array.isArray(BB)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new gT({
        items: BB,
        typeName: IT.ZodTuple,
        rest: null,
        ...KB(TB)
      })
    };
    class oT extends rB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB);
        if (dB.parsedType !== oB.object) return vB(dB, {
          code: LB.invalid_type,
          expected: oB.object,
          received: dB.parsedType
        }), iB;
        const VB = [],
          yB = this._def.keyType,
          pB = this._def.valueType;
        for (const lB in dB.data) VB.push({
          key: yB._parse(new UB(dB, lB, dB.path, lB)),
          value: pB._parse(new UB(dB, dB.data[lB], dB.path, lB))
        });
        return dB.common.async ? mB.mergeObjectAsync(TB, VB) : mB.mergeObjectSync(TB, VB)
      }
      get element() {
        return this._def.valueType
      }
      static create(BB, TB, dB) {
        return new oT(TB instanceof rB ? {
          keyType: BB,
          valueType: TB,
          typeName: IT.ZodRecord,
          ...KB(dB)
        } : {
          keyType: XB.create(),
          valueType: BB,
          typeName: IT.ZodRecord,
          ...KB(TB)
        })
      }
    }
    class kT extends rB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB);
        if (dB.parsedType !== oB.map) return vB(dB, {
          code: LB.invalid_type,
          expected: oB.map,
          received: dB.parsedType
        }), iB;
        const VB = this._def.keyType,
          yB = this._def.valueType,
          pB = [...dB.data.entries()].map(((BB, TB) => {
            let [pB, lB] = BB;
            return {
              key: VB._parse(new UB(dB, pB, dB.path, [TB, "key"])),
              value: yB._parse(new UB(dB, lB, dB.path, [TB, "value"]))
            }
          }));
        if (dB.common.async) {
          const BB = new Map;
          return Promise.resolve().then((async () => {
            for (const dB of pB) {
              const VB = await dB.key,
                yB = await dB.value;
              if ("aborted" === VB.status || "aborted" === yB.status) return iB;
              "hD" !== VB.status && "hD" !== yB.status || TB.hD(), BB.set(VB.value, yB.value)
            }
            return {
              status: TB.value,
              value: BB
            }
          }))
        } {
          const BB = new Map;
          for (const dB of pB) {
            const VB = dB.key,
              yB = dB.value;
            if ("aborted" === VB.status || "aborted" === yB.status) return iB;
            "hD" !== VB.status && "hD" !== yB.status || TB.hD(), BB.set(VB.value, yB.value)
          }
          return {
            status: TB.value,
            value: BB
          }
        }
      }
    }
    kT.create = (BB, TB, dB) => new kT({
      valueType: TB,
      keyType: BB,
      typeName: IT.ZodMap,
      ...KB(dB)
    });
    class LT extends rB {
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB);
        if (dB.parsedType !== oB.set) return vB(dB, {
          code: LB.invalid_type,
          expected: oB.set,
          received: dB.parsedType
        }), iB;
        const VB = this._def;
        null !== VB.minSize && dB.data.size < VB.minSize.value && (vB(dB, {
          code: LB.too_small,
          minimum: VB.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: VB.minSize.message
        }), TB.hD()), null !== VB.maxSize && dB.data.size > VB.maxSize.value && (vB(dB, {
          code: LB.too_big,
          maximum: VB.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: VB.maxSize.message
        }), TB.hD());
        const yB = this._def.valueType;

        function pB(BB) {
          const dB = new Set;
          for (const VB of BB) {
            if ("aborted" === VB.status) return iB;
            "hD" === VB.status && TB.hD(), dB.add(VB.value)
          }
          return {
            status: TB.value,
            value: dB
          }
        }
        const lB = [...dB.data.values()].map(((BB, TB) => yB._parse(new UB(dB, BB, dB.path, TB))));
        return dB.common.async ? Promise.all(lB).then((BB => pB(BB))) : pB(lB)
      }
      min(BB, TB) {
        return new LT({
          ...this._def,
          minSize: {
            value: BB,
            message: wB.toString(TB)
          }
        })
      }
      max(BB, TB) {
        return new LT({
          ...this._def,
          maxSize: {
            value: BB,
            message: wB.toString(TB)
          }
        })
      }
      size(BB, TB) {
        return this.min(BB, TB).max(BB, TB)
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }
    LT.create = (BB, TB) => new LT({
      valueType: BB,
      minSize: null,
      maxSize: null,
      typeName: IT.ZodSet,
      ...KB(TB)
    });
    class OT extends rB {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB);
        if (TB.parsedType !== oB.function) return vB(TB, {
          code: LB.invalid_type,
          expected: oB.function,
          received: TB.parsedType
        }), iB;

        function dB(BB, dB) {
          return EB({
            data: BB,
            path: TB.path,
            errorMaps: [TB.common.contextualErrorMap, TB.schemaErrorMap, HB(), DB].filter((BB => !!BB)),
            issueData: {
              code: LB.invalid_arguments,
              argumentsError: dB
            }
          })
        }

        function VB(BB, dB) {
          return EB({
            data: BB,
            path: TB.path,
            errorMaps: [TB.common.contextualErrorMap, TB.schemaErrorMap, HB(), DB].filter((BB => !!BB)),
            issueData: {
              code: LB.invalid_return_type,
              returnTypeError: dB
            }
          })
        }
        const yB = {
            errorMap: TB.common.contextualErrorMap
          },
          pB = TB.data;
        if (this._def.returns instanceof mT) {
          const BB = this;
          return tB((async function() {
            for (var TB = arguments.length, lB = new Array(TB), JB = 0; JB < TB; JB++) lB[JB] = arguments[JB];
            const YB = new OB([]),
              gB = await BB._def.args.parseAsync(lB, yB).catch((BB => {
                throw YB.addIssue(dB(lB, BB)), YB
              })),
              oB = await Reflect.apply(pB, this, gB);
            return await BB._def.returns._def.type.parseAsync(oB, yB).catch((BB => {
              throw YB.addIssue(VB(oB, BB)), YB
            }))
          }))
        } {
          const BB = this;
          return tB((function() {
            for (var TB = arguments.length, lB = new Array(TB), JB = 0; JB < TB; JB++) lB[JB] = arguments[JB];
            const YB = BB._def.args.safeParse(lB, yB);
            if (!YB.success) throw new OB([dB(lB, YB.error)]);
            const gB = Reflect.apply(pB, this, YB.data),
              oB = BB._def.returns.safeParse(gB, yB);
            if (!oB.success) throw new OB([VB(gB, oB.error)]);
            return oB.data
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
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return new OT({
          ...this._def,
          args: gT.create(TB).rest(nB.create())
        })
      }
      returns(BB) {
        return new OT({
          ...this._def,
          returns: BB
        })
      }
      implement(BB) {
        return this.parse(BB)
      }
      strictImplement(BB) {
        return this.parse(BB)
      }
      static create(BB, TB, dB) {
        return new OT({
          args: BB || gT.create([]).rest(nB.create()),
          returns: TB || nB.create(),
          typeName: IT.ZodFunction,
          ...KB(dB)
        })
      }
    }
    class DT extends rB {
      get schema() {
        return this._def.getter()
      }
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB);
        return this._def.getter()._parse({
          data: TB.data,
          path: TB.path,
          parent: TB
        })
      }
    }
    DT.create = (BB, TB) => new DT({
      getter: BB,
      typeName: IT.ZodLazy,
      ...KB(TB)
    });
    class uT extends rB {
      _parse(BB) {
        if (BB.data !== this._def.value) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            received: TB.data,
            code: LB.invalid_literal,
            expected: this._def.value
          }), iB
        }
        return {
          status: "valid",
          value: BB.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function HT(BB, TB) {
      return new ET({
        values: BB,
        typeName: IT.ZodEnum,
        ...KB(TB)
      })
    }
    uT.create = (BB, TB) => new uT({
      value: BB,
      typeName: IT.ZodLiteral,
      ...KB(TB)
    });
    class ET extends rB {
      _parse(BB) {
        if ("string" !== typeof BB.data) {
          const TB = this._getOrReturnCtx(BB),
            dB = this._def.values;
          return vB(TB, {
            expected: JB.joinValues(dB),
            received: TB.parsedType,
            code: LB.invalid_type
          }), iB
        }
        if (-1 === this._def.values.indexOf(BB.data)) {
          const TB = this._getOrReturnCtx(BB),
            dB = this._def.values;
          return vB(TB, {
            received: TB.data,
            code: LB.invalid_enum_value,
            options: dB
          }), iB
        }
        return tB(BB.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const BB = {};
        for (const TB of this._def.values) BB[TB] = TB;
        return BB
      }
      get Values() {
        const BB = {};
        for (const TB of this._def.values) BB[TB] = TB;
        return BB
      }
      get Enum() {
        const BB = {};
        for (const TB of this._def.values) BB[TB] = TB;
        return BB
      }
      extract(BB) {
        return ET.create(BB)
      }
      exclude(BB) {
        return ET.create(this.options.filter((TB => !BB.includes(TB))))
      }
    }
    ET.create = HT;
    class vT extends rB {
      _parse(BB) {
        const TB = JB.getValidEnumValues(this._def.values),
          dB = this._getOrReturnCtx(BB);
        if (dB.parsedType !== oB.string && dB.parsedType !== oB.number) {
          const BB = JB.objectValues(TB);
          return vB(dB, {
            expected: JB.joinValues(BB),
            received: dB.parsedType,
            code: LB.invalid_type
          }), iB
        }
        if (-1 === TB.indexOf(BB.data)) {
          const BB = JB.objectValues(TB);
          return vB(dB, {
            received: dB.data,
            code: LB.invalid_enum_value,
            options: BB
          }), iB
        }
        return tB(BB.data)
      }
      get enum() {
        return this._def.values
      }
    }
    vT.create = (BB, TB) => new vT({
      values: BB,
      typeName: IT.ZodNativeEnum,
      ...KB(TB)
    });
    class mT extends rB {
      unwrap() {
        return this._def.type
      }
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB);
        if (TB.parsedType !== oB.promise && !1 === TB.common.async) return vB(TB, {
          code: LB.invalid_type,
          expected: oB.promise,
          received: TB.parsedType
        }), iB;
        const dB = TB.parsedType === oB.promise ? TB.data : Promise.resolve(TB.data);
        return tB(dB.then((BB => this._def.type.parseAsync(BB, {
          path: TB.path,
          errorMap: TB.common.contextualErrorMap
        }))))
      }
    }
    mT.create = (BB, TB) => new mT({
      type: BB,
      typeName: IT.ZodPromise,
      ...KB(TB)
    });
    class iT extends rB {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === IT.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB), VB = this._def.effect || null, yB = {
          addIssue: BB => {
            vB(dB, BB), BB.fatal ? TB.abort() : TB.hD()
          },
          get path() {
            return dB.path
          }
        };
        if (yB.addIssue = yB.addIssue.bind(yB), "preprocess" === VB.type) {
          const BB = VB.transform(dB.data, yB);
          return dB.common.issues.length ? {
            status: "hD",
            value: dB.data
          } : dB.common.async ? Promise.resolve(BB).then((BB => this._def.schema._parseAsync({
            data: BB,
            path: dB.path,
            parent: dB
          }))) : this._def.schema._parseSync({
            data: BB,
            path: dB.path,
            parent: dB
          })
        }
        if ("refinement" === VB.type) {
          const BB = BB => {
            const TB = VB.refinement(BB, yB);
            if (dB.common.async) return Promise.resolve(TB);
            if (TB instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return BB
          };
          if (!1 === dB.common.async) {
            const VB = this._def.schema._parseSync({
              data: dB.data,
              path: dB.path,
              parent: dB
            });
            return "aborted" === VB.status ? iB : ("hD" === VB.status && TB.hD(), BB(VB.value), {
              status: TB.value,
              value: VB.value
            })
          }
          return this._def.schema._parseAsync({
            data: dB.data,
            path: dB.path,
            parent: dB
          }).then((dB => "aborted" === dB.status ? iB : ("hD" === dB.status && TB.hD(), BB(dB.value).then((() => ({
            status: TB.value,
            value: dB.value
          }))))))
        }
        if ("transform" === VB.type) {
          if (!1 === dB.common.async) {
            const BB = this._def.schema._parseSync({
              data: dB.data,
              path: dB.path,
              parent: dB
            });
            if (!MB(BB)) return BB;
            const pB = VB.transform(BB.value, yB);
            if (pB instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: TB.value,
              value: pB
            }
          }
          return this._def.schema._parseAsync({
            data: dB.data,
            path: dB.path,
            parent: dB
          }).then((BB => MB(BB) ? Promise.resolve(VB.transform(BB.value, yB)).then((BB => ({
            status: TB.value,
            value: BB
          }))) : BB))
        }
        JB.assertNever(VB)
      }
    }
    iT.create = (BB, TB, dB) => new iT({
      schema: BB,
      typeName: IT.ZodEffects,
      effect: TB,
      ...KB(dB)
    }), iT.createWithPreprocess = (BB, TB, dB) => new iT({
      schema: TB,
      effect: {
        type: "preprocess",
        transform: BB
      },
      typeName: IT.ZodEffects,
      ...KB(dB)
    });
    class NT extends rB {
      _parse(BB) {
        return this._getType(BB) === oB.undefined ? tB(void 0) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    NT.create = (BB, TB) => new NT({
      innerType: BB,
      typeName: IT.ZodOptional,
      ...KB(TB)
    });
    class tT extends rB {
      _parse(BB) {
        return this._getType(BB) === oB.null ? tB(null) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    tT.create = (BB, TB) => new tT({
      innerType: BB,
      typeName: IT.ZodNullable,
      ...KB(TB)
    });
    class fT extends rB {
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB);
        let dB = TB.data;
        return TB.parsedType === oB.undefined && (dB = this._def.defaultValue()), this._def.innerType._parse({
          data: dB,
          path: TB.path,
          parent: TB
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    fT.create = (BB, TB) => new fT({
      innerType: BB,
      typeName: IT.ZodDefault,
      defaultValue: "function" === typeof TB.default ? TB.default : () => TB.default,
      ...KB(TB)
    });
    class sT extends rB {
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB), dB = {
          ...TB,
          common: {
            ...TB.common,
            issues: []
          }
        }, VB = this._def.innerType._parse({
          data: dB.data,
          path: dB.path,
          parent: {
            ...dB
          }
        });
        return zB(VB) ? VB.then((BB => ({
          status: "valid",
          value: "valid" === BB.status ? BB.value : this._def.catchValue({
            get error() {
              return new OB(dB.common.issues)
            },
            input: dB.data
          })
        }))) : {
          status: "valid",
          value: "valid" === VB.status ? VB.value : this._def.catchValue({
            get error() {
              return new OB(dB.common.issues)
            },
            input: dB.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    sT.create = (BB, TB) => new sT({
      innerType: BB,
      typeName: IT.ZodCatch,
      catchValue: "function" === typeof TB.catch ? TB.catch : () => TB.catch,
      ...KB(TB)
    });
    class MT extends rB {
      _parse(BB) {
        if (this._getType(BB) !== oB.nan) {
          const TB = this._getOrReturnCtx(BB);
          return vB(TB, {
            code: LB.invalid_type,
            expected: oB.nan,
            received: TB.parsedType
          }), iB
        }
        return {
          status: "valid",
          value: BB.data
        }
      }
    }
    MT.create = BB => new MT({
      typeName: IT.ZodNaN,
      ...KB(BB)
    });
    const zT = Symbol("zod_brand");
    class wT extends rB {
      _parse(BB) {
        const {
          ctx: TB
        } = this._processInputParams(BB), dB = TB.data;
        return this._def.type._parse({
          data: dB,
          path: TB.path,
          parent: TB
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class UT extends rB {
      _parse(BB) {
        const {
          status: TB,
          ctx: dB
        } = this._processInputParams(BB);
        if (dB.common.async) {
          return (async () => {
            const BB = await this._def.in._parseAsync({
              data: dB.data,
              path: dB.path,
              parent: dB
            });
            return "aborted" === BB.status ? iB : "hD" === BB.status ? (TB.hD(), NB(BB.value)) : this._def.out._parseAsync({
              data: BB.value,
              path: dB.path,
              parent: dB
            })
          })()
        } {
          const BB = this._def.in._parseSync({
            data: dB.data,
            path: dB.path,
            parent: dB
          });
          return "aborted" === BB.status ? iB : "hD" === BB.status ? (TB.hD(), {
            status: "hD",
            value: BB.value
          }) : this._def.out._parseSync({
            data: BB.value,
            path: dB.path,
            parent: dB
          })
        }
      }
      static create(BB, TB) {
        return new UT({
          in: BB,
          out: TB,
          typeName: IT.ZodPipeline
        })
      }
    }
    class FT extends rB {
      _parse(BB) {
        const TB = this._def.innerType._parse(BB);
        return MB(TB) && (TB.value = Object.freeze(TB.value)), TB
      }
    }
    FT.create = (BB, TB) => new FT({
      innerType: BB,
      typeName: IT.ZodReadonly,
      ...KB(TB)
    });
    const KT = function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          dB = arguments.length > 2 ? arguments[2] : void 0;
        return BB ? bB.create().superRefine(((VB, yB) => {
          var pB, lB;
          if (!BB(VB)) {
            const BB = "function" === typeof TB ? TB(VB) : "string" === typeof TB ? {
                message: TB
              } : TB,
              JB = null === (lB = null !== (pB = BB.fatal) && void 0 !== pB ? pB : dB) || void 0 === lB || lB,
              YB = "string" === typeof BB ? {
                message: BB
              } : BB;
            yB.addIssue({
              code: "custom",
              ...YB,
              fatal: JB
            })
          }
        })) : bB.create()
      },
      rT = {
        object: VT.lazycreate
      };
    var IT;
    ! function(BB) {
      BB.ZodString = "ZodString", BB.ZodNumber = "ZodNumber", BB.ZodNaN = "ZodNaN", BB.ZodBigInt = "ZodBigInt", BB.ZodBoolean = "ZodBoolean", BB.ZodDate = "ZodDate", BB.ZodSymbol = "ZodSymbol", BB.ZodUndefined = "ZodUndefined", BB.ZodNull = "ZodNull", BB.ZodAny = "ZodAny", BB.ZodUnknown = "ZodUnknown", BB.ZodNever = "ZodNever", BB.ZodVoid = "ZodVoid", BB.ZodArray = "ZodArray", BB.ZodObject = "ZodObject", BB.ZodUnion = "ZodUnion", BB.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", BB.ZodIntersection = "ZodIntersection", BB.ZodTuple = "ZodTuple", BB.ZodRecord = "ZodRecord", BB.ZodMap = "ZodMap", BB.ZodSet = "ZodSet", BB.ZodFunction = "ZodFunction", BB.ZodLazy = "ZodLazy", BB.ZodLiteral = "ZodLiteral", BB.ZodEnum = "ZodEnum", BB.ZodEffects = "ZodEffects", BB.ZodNativeEnum = "ZodNativeEnum", BB.ZodOptional = "ZodOptional", BB.ZodNullable = "ZodNullable", BB.ZodDefault = "ZodDefault", BB.ZodCatch = "ZodCatch", BB.ZodPromise = "ZodPromise", BB.ZodBranded = "ZodBranded", BB.ZodPipeline = "ZodPipeline", BB.ZodReadonly = "ZodReadonly"
    }(IT || (IT = {}));
    const cT = XB.create,
      ST = hB.create,
      PT = MT.create,
      QT = CB.create,
      RT = GB.create,
      aT = qB.create,
      ZT = xB.create,
      XT = jB.create,
      WT = AB.create,
      hT = bB.create,
      CT = nB.create,
      GT = eB.create,
      qT = BT.create,
      xT = TT.create,
      jT = VT.create,
      AT = VT.strictCreate,
      bT = yT.create,
      nT = lT.create,
      eT = YT.create,
      Bd = gT.create,
      Td = oT.create,
      dd = kT.create,
      Vd = LT.create,
      yd = OT.create,
      pd = DT.create,
      ld = uT.create,
      Jd = ET.create,
      Yd = vT.create,
      gd = mT.create,
      od = iT.create,
      kd = NT.create,
      Ld = tT.create,
      Od = iT.createWithPreprocess,
      Dd = UT.create,
      ud = {
        string: BB => XB.create({
          ...BB,
          coerce: !0
        }),
        number: BB => hB.create({
          ...BB,
          coerce: !0
        }),
        boolean: BB => GB.create({
          ...BB,
          coerce: !0
        }),
        bigint: BB => CB.create({
          ...BB,
          coerce: !0
        }),
        date: BB => qB.create({
          ...BB,
          coerce: !0
        })
      },
      Hd = iB;
    var Ed = Object.freeze({
        __proto__: null,
        defaultErrorMap: DB,
        setErrorMap: function(BB) {
          uB = BB
        },
        getErrorMap: HB,
        makeIssue: EB,
        EMPTY_PATH: [],
        addIssueToContext: vB,
        ParseStatus: mB,
        INVALID: iB,
        DIRTY: NB,
        OK: tB,
        isAborted: fB,
        isDirty: sB,
        isValid: MB,
        isAsync: zB,
        get util() {
          return JB
        },
        get objectUtil() {
          return YB
        },
        ZodParsedType: oB,
        getParsedType: kB,
        ZodType: rB,
        ZodString: XB,
        ZodNumber: hB,
        ZodBigInt: CB,
        ZodBoolean: GB,
        ZodDate: qB,
        ZodSymbol: xB,
        ZodUndefined: jB,
        ZodNull: AB,
        ZodAny: bB,
        ZodUnknown: nB,
        ZodNever: eB,
        ZodVoid: BT,
        ZodArray: TT,
        ZodObject: VT,
        ZodUnion: yT,
        ZodDiscriminatedUnion: lT,
        ZodIntersection: YT,
        ZodTuple: gT,
        ZodRecord: oT,
        ZodMap: kT,
        ZodSet: LT,
        ZodFunction: OT,
        ZodLazy: DT,
        ZodLiteral: uT,
        ZodEnum: ET,
        ZodNativeEnum: vT,
        ZodPromise: mT,
        ZodEffects: iT,
        ZodTransformer: iT,
        ZodOptional: NT,
        ZodNullable: tT,
        ZodDefault: fT,
        ZodCatch: sT,
        ZodNaN: MT,
        BRAND: zT,
        ZodBranded: wT,
        ZodPipeline: UT,
        ZodReadonly: FT,
        custom: KT,
        Schema: rB,
        ZodSchema: rB,
        late: rT,
        get ZodFirstPartyTypeKind() {
          return IT
        },
        coerce: ud,
        any: hT,
        array: xT,
        bigint: QT,
        boolean: RT,
        date: aT,
        discriminatedUnion: nT,
        effect: od,
        enum: Jd,
        function: yd,
        instanceof: function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${BB.name}`
          };
          return KT((TB => TB instanceof BB), TB)
        },
        intersection: eT,
        lazy: pd,
        literal: ld,
        map: dd,
        nan: PT,
        nativeEnum: Yd,
        never: GT,
        null: WT,
        nullable: Ld,
        number: ST,
        object: jT,
        oboolean: () => RT().optional(),
        onumber: () => ST().optional(),
        optional: kd,
        ostring: () => cT().optional(),
        pipeline: Dd,
        preprocess: Od,
        promise: gd,
        record: Td,
        set: Vd,
        strictObject: AT,
        string: cT,
        symbol: ZT,
        transformer: od,
        tuple: Bd,
        undefined: XT,
        union: bT,
        unknown: CT,
        void: qT,
        NEVER: Hd,
        ZodIssueCode: LB,
        quotelessJson: BB => JSON.stringify(BB, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: OB
      }),
      vd = {
        exports: {}
      };
    ! function(BB) {
      var TB = function(BB) {
        var dB = 1e7,
          VB = 9007199254740992,
          yB = LB(VB),
          pB = "0123456789abcdefghijklmnopqrstuvwxyz",
          lB = "function" === typeof BigInt;

        function JB(BB, TB, dB, VB) {
          return "undefined" === typeof BB ? JB[0] : "undefined" !== typeof TB && (10 !== +TB || dB) ? GB(BB, TB, dB, VB) : bB(BB)
        }

        function YB(BB, TB) {
          this.value = BB, this.sign = TB, this.isSmall = !1
        }

        function gB(BB) {
          this.value = BB, this.sign = BB < 0, this.isSmall = !0
        }

        function oB(BB) {
          this.value = BB
        }

        function kB(BB) {
          return -VB < BB && BB < VB
        }

        function LB(BB) {
          return BB < 1e7 ? [BB] : BB < 1e14 ? [BB % 1e7, Math.floor(BB / 1e7)] : [BB % 1e7, Math.floor(BB / 1e7) % 1e7, Math.floor(BB / 1e14)]
        }

        function OB(BB) {
          DB(BB);
          var TB = BB.length;
          if (TB < 4 && KB(BB, yB) < 0) switch (TB) {
            case 0:
              return 0;
            case 1:
              return BB[0];
            case 2:
              return BB[0] + BB[1] * dB;
            default:
              return BB[0] + (BB[1] + BB[2] * dB) * dB
          }
          return BB
        }

        function DB(BB) {
          for (var TB = BB.length; 0 === BB[--TB];);
          BB.length = TB + 1
        }

        function uB(BB) {
          for (var TB = new Array(BB), dB = -1; ++dB < BB;) TB[dB] = 0;
          return TB
        }

        function HB(BB) {
          return BB > 0 ? Math.floor(BB) : Math.ceil(BB)
        }

        function EB(BB, TB) {
          var VB, yB, pB = BB.length,
            lB = TB.length,
            JB = new Array(pB),
            YB = 0,
            gB = dB;
          for (yB = 0; yB < lB; yB++) YB = (VB = BB[yB] + TB[yB] + YB) >= gB ? 1 : 0, JB[yB] = VB - YB * gB;
          for (; yB < pB;) YB = (VB = BB[yB] + YB) === gB ? 1 : 0, JB[yB++] = VB - YB * gB;
          return YB > 0 && JB.push(YB), JB
        }

        function vB(BB, TB) {
          return BB.length >= TB.length ? EB(BB, TB) : EB(TB, BB)
        }

        function mB(BB, TB) {
          var VB, yB, pB = BB.length,
            lB = new Array(pB),
            JB = dB;
          for (yB = 0; yB < pB; yB++) VB = BB[yB] - JB + TB, TB = Math.floor(VB / JB), lB[yB] = VB - TB * JB, TB += 1;
          for (; TB > 0;) lB[yB++] = TB % JB, TB = Math.floor(TB / JB);
          return lB
        }

        function iB(BB, TB) {
          var VB, yB, pB = BB.length,
            lB = TB.length,
            JB = new Array(pB),
            YB = 0,
            gB = dB;
          for (VB = 0; VB < lB; VB++)(yB = BB[VB] - YB - TB[VB]) < 0 ? (yB += gB, YB = 1) : YB = 0, JB[VB] = yB;
          for (VB = lB; VB < pB; VB++) {
            if (!((yB = BB[VB] - YB) < 0)) {
              JB[VB++] = yB;
              break
            }
            yB += gB, JB[VB] = yB
          }
          for (; VB < pB; VB++) JB[VB] = BB[VB];
          return DB(JB), JB
        }

        function NB(BB, TB, VB) {
          var yB, pB, lB = BB.length,
            JB = new Array(lB),
            oB = -TB,
            kB = dB;
          for (yB = 0; yB < lB; yB++) pB = BB[yB] + oB, oB = Math.floor(pB / kB), pB %= kB, JB[yB] = pB < 0 ? pB + kB : pB;
          return "number" === typeof(JB = OB(JB)) ? (VB && (JB = -JB), new gB(JB)) : new YB(JB, VB)
        }

        function tB(BB, TB) {
          var VB, yB, pB, lB, JB = BB.length,
            YB = TB.length,
            gB = uB(JB + YB),
            oB = dB;
          for (pB = 0; pB < JB; ++pB) {
            lB = BB[pB];
            for (var kB = 0; kB < YB; ++kB) VB = lB * TB[kB] + gB[pB + kB], yB = Math.floor(VB / oB), gB[pB + kB] = VB - yB * oB, gB[pB + kB + 1] += yB
          }
          return DB(gB), gB
        }

        function fB(BB, TB) {
          var VB, yB, pB = BB.length,
            lB = new Array(pB),
            JB = dB,
            YB = 0;
          for (yB = 0; yB < pB; yB++) VB = BB[yB] * TB + YB, YB = Math.floor(VB / JB), lB[yB] = VB - YB * JB;
          for (; YB > 0;) lB[yB++] = YB % JB, YB = Math.floor(YB / JB);
          return lB
        }

        function sB(BB, TB) {
          for (var dB = []; TB-- > 0;) dB.push(0);
          return dB.concat(BB)
        }

        function MB(BB, TB) {
          var dB = Math.max(BB.length, TB.length);
          if (dB <= 30) return tB(BB, TB);
          dB = Math.ceil(dB / 2);
          var VB = BB.slice(dB),
            yB = BB.slice(0, dB),
            pB = TB.slice(dB),
            lB = TB.slice(0, dB),
            JB = MB(yB, lB),
            YB = MB(VB, pB),
            gB = MB(vB(yB, VB), vB(lB, pB)),
            oB = vB(vB(JB, sB(iB(iB(gB, JB), YB), dB)), sB(YB, 2 * dB));
          return DB(oB), oB
        }

        function zB(BB, TB, VB) {
          return new YB(BB < dB ? fB(TB, BB) : tB(TB, LB(BB)), VB)
        }

        function wB(BB) {
          var TB, VB, yB, pB, lB = BB.length,
            JB = uB(lB + lB),
            YB = dB;
          for (yB = 0; yB < lB; yB++) {
            VB = 0 - (pB = BB[yB]) * pB;
            for (var gB = yB; gB < lB; gB++) TB = pB * BB[gB] * 2 + JB[yB + gB] + VB, VB = Math.floor(TB / YB), JB[yB + gB] = TB - VB * YB;
            JB[yB + lB] = VB
          }
          return DB(JB), JB
        }

        function UB(BB, TB) {
          var VB, yB, pB, lB, JB = BB.length,
            YB = uB(JB),
            gB = dB;
          for (pB = 0, VB = JB - 1; VB >= 0; --VB) pB = (lB = pB * gB + BB[VB]) - (yB = HB(lB / TB)) * TB, YB[VB] = 0 | yB;
          return [YB, 0 | pB]
        }

        function FB(BB, TB) {
          var VB, yB = bB(TB);
          if (lB) return [new oB(BB.value / yB.value), new oB(BB.value % yB.value)];
          var pB, kB = BB.value,
            EB = yB.value;
          if (0 === EB) throw new Error("Cannot divide by zero");
          if (BB.isSmall) return yB.isSmall ? [new gB(HB(kB / EB)), new gB(kB % EB)] : [JB[0], BB];
          if (yB.isSmall) {
            if (1 === EB) return [BB, JB[0]];
            if (-1 == EB) return [BB.fp(), JB[0]];
            var vB = Math.abs(EB);
            if (vB < dB) {
              pB = OB((VB = UB(kB, vB))[0]);
              var mB = VB[1];
              return BB.sign && (mB = -mB), "number" === typeof pB ? (BB.sign !== yB.sign && (pB = -pB), [new gB(pB), new gB(mB)]) : [new YB(pB, BB.sign !== yB.sign), new gB(mB)]
            }
            EB = LB(vB)
          }
          var NB = KB(kB, EB);
          if (-1 === NB) return [JB[0], BB];
          if (0 === NB) return [JB[BB.sign === yB.sign ? 1 : -1], JB[0]];
          VB = kB.length + EB.length <= 200 ? function(BB, TB) {
            var VB, yB, pB, lB, JB, YB, gB, oB = BB.length,
              kB = TB.length,
              LB = dB,
              DB = uB(TB.length),
              HB = TB[kB - 1],
              EB = Math.ceil(LB / (2 * HB)),
              vB = fB(BB, EB),
              mB = fB(TB, EB);
            for (vB.length <= oB && vB.push(0), mB.push(0), HB = mB[kB - 1], yB = oB - kB; yB >= 0; yB--) {
              for (VB = LB - 1, vB[yB + kB] !== HB && (VB = Math.floor((vB[yB + kB] * LB + vB[yB + kB - 1]) / HB)), pB = 0, lB = 0, YB = mB.length, JB = 0; JB < YB; JB++) pB += VB * mB[JB], gB = Math.floor(pB / LB), lB += vB[yB + JB] - (pB - gB * LB), pB = gB, lB < 0 ? (vB[yB + JB] = lB + LB, lB = -1) : (vB[yB + JB] = lB, lB = 0);
              for (; 0 !== lB;) {
                for (VB -= 1, pB = 0, JB = 0; JB < YB; JB++)(pB += vB[yB + JB] - LB + mB[JB]) < 0 ? (vB[yB + JB] = pB + LB, pB = 0) : (vB[yB + JB] = pB, pB = 1);
                lB += pB
              }
              DB[yB] = VB
            }
            return vB = UB(vB, EB)[0], [OB(DB), OB(vB)]
          }(kB, EB) : function(BB, TB) {
            for (var VB, yB, pB, lB, JB, YB = BB.length, gB = TB.length, oB = [], kB = [], LB = dB; YB;)
              if (kB.unshift(BB[--YB]), DB(kB), KB(kB, TB) < 0) oB.push(0);
              else {
                pB = kB[(yB = kB.length) - 1] * LB + kB[yB - 2], lB = TB[gB - 1] * LB + TB[gB - 2], yB > gB && (pB = (pB + 1) * LB), VB = Math.ceil(pB / lB);
                do {
                  if (KB(JB = fB(TB, VB), kB) <= 0) break;
                  VB--
                } while (VB);
                oB.push(VB), kB = iB(kB, JB)
              } return oB.reverse(), [OB(oB), OB(kB)]
          }(kB, EB), pB = VB[0];
          var tB = BB.sign !== yB.sign,
            sB = VB[1],
            MB = BB.sign;
          return "number" === typeof pB ? (tB && (pB = -pB), pB = new gB(pB)) : pB = new YB(pB, tB), "number" === typeof sB ? (MB && (sB = -sB), sB = new gB(sB)) : sB = new YB(sB, MB), [pB, sB]
        }

        function KB(BB, TB) {
          if (BB.length !== TB.length) return BB.length > TB.length ? 1 : -1;
          for (var dB = BB.length - 1; dB >= 0; dB--)
            if (BB[dB] !== TB[dB]) return BB[dB] > TB[dB] ? 1 : -1;
          return 0
        }

        function rB(BB) {
          var TB = BB.abs();
          return !TB.isUnit() && (!!(TB.equals(2) || TB.equals(3) || TB.equals(5)) || !(TB.isEven() || TB.isDivisibleBy(3) || TB.isDivisibleBy(5)) && (!!TB.lesser(49) || void 0))
        }

        function IB(BB, dB) {
          for (var VB, yB, pB, lB = BB.prev(), JB = lB, YB = 0; JB.isEven();) JB = JB.divide(2), YB++;
          BB: for (yB = 0; yB < dB.length; yB++)
            if (!BB.lesser(dB[yB]) && !(pB = TB(dB[yB]).modPow(JB, BB)).isUnit() && !pB.equals(lB)) {
              for (VB = YB - 1; 0 != VB; VB--) {
                if ((pB = pB.square().mod(BB)).isUnit()) return !1;
                if (pB.equals(lB)) continue BB
              }
              return !1
            }
          return !0
        }
        YB.prototype = Object.create(JB.prototype), gB.prototype = Object.create(JB.prototype), oB.prototype = Object.create(JB.prototype), YB.prototype.add = function(BB) {
          var TB = bB(BB);
          if (this.sign !== TB.sign) return this.subtract(TB.fp());
          var dB = this.value,
            VB = TB.value;
          return TB.isSmall ? new YB(mB(dB, Math.abs(VB)), this.sign) : new YB(vB(dB, VB), this.sign)
        }, YB.prototype.plus = YB.prototype.add, gB.prototype.add = function(BB) {
          var TB = bB(BB),
            dB = this.value;
          if (dB < 0 !== TB.sign) return this.subtract(TB.fp());
          var VB = TB.value;
          if (TB.isSmall) {
            if (kB(dB + VB)) return new gB(dB + VB);
            VB = LB(Math.abs(VB))
          }
          return new YB(mB(VB, Math.abs(dB)), dB < 0)
        }, gB.prototype.plus = gB.prototype.add, oB.prototype.add = function(BB) {
          return new oB(this.value + bB(BB).value)
        }, oB.prototype.plus = oB.prototype.add, YB.prototype.subtract = function(BB) {
          var TB = bB(BB);
          if (this.sign !== TB.sign) return this.add(TB.fp());
          var dB = this.value,
            VB = TB.value;
          return TB.isSmall ? NB(dB, Math.abs(VB), this.sign) : function(BB, TB, dB) {
            var VB;
            return KB(BB, TB) >= 0 ? VB = iB(BB, TB) : (VB = iB(TB, BB), dB = !dB), "number" === typeof(VB = OB(VB)) ? (dB && (VB = -VB), new gB(VB)) : new YB(VB, dB)
          }(dB, VB, this.sign)
        }, YB.prototype.minus = YB.prototype.subtract, gB.prototype.subtract = function(BB) {
          var TB = bB(BB),
            dB = this.value;
          if (dB < 0 !== TB.sign) return this.add(TB.fp());
          var VB = TB.value;
          return TB.isSmall ? new gB(dB - VB) : NB(VB, Math.abs(dB), dB >= 0)
        }, gB.prototype.minus = gB.prototype.subtract, oB.prototype.subtract = function(BB) {
          return new oB(this.value - bB(BB).value)
        }, oB.prototype.minus = oB.prototype.subtract, YB.prototype.fp = function() {
          return new YB(this.value, !this.sign)
        }, gB.prototype.fp = function() {
          var BB = this.sign,
            TB = new gB(-this.value);
          return TB.sign = !BB, TB
        }, oB.prototype.fp = function() {
          return new oB(-this.value)
        }, YB.prototype.abs = function() {
          return new YB(this.value, !1)
        }, gB.prototype.abs = function() {
          return new gB(Math.abs(this.value))
        }, oB.prototype.abs = function() {
          return new oB(this.value >= 0 ? this.value : -this.value)
        }, YB.prototype.multiply = function(BB) {
          var TB, VB, yB, pB = bB(BB),
            lB = this.value,
            gB = pB.value,
            oB = this.sign !== pB.sign;
          if (pB.isSmall) {
            if (0 === gB) return JB[0];
            if (1 === gB) return this;
            if (-1 === gB) return this.fp();
            if ((TB = Math.abs(gB)) < dB) return new YB(fB(lB, TB), oB);
            gB = LB(TB)
          }
          return VB = lB.length, yB = gB.length, new YB(-.012 * VB - .012 * yB + 15e-6 * VB * yB > 0 ? MB(lB, gB) : tB(lB, gB), oB)
        }, YB.prototype.times = YB.prototype.multiply, gB.prototype._multiplyBySmall = function(BB) {
          return kB(BB.value * this.value) ? new gB(BB.value * this.value) : zB(Math.abs(BB.value), LB(Math.abs(this.value)), this.sign !== BB.sign)
        }, YB.prototype._multiplyBySmall = function(BB) {
          return 0 === BB.value ? JB[0] : 1 === BB.value ? this : -1 === BB.value ? this.fp() : zB(Math.abs(BB.value), this.value, this.sign !== BB.sign)
        }, gB.prototype.multiply = function(BB) {
          return bB(BB)._multiplyBySmall(this)
        }, gB.prototype.times = gB.prototype.multiply, oB.prototype.multiply = function(BB) {
          return new oB(this.value * bB(BB).value)
        }, oB.prototype.times = oB.prototype.multiply, YB.prototype.square = function() {
          return new YB(wB(this.value), !1)
        }, gB.prototype.square = function() {
          var BB = this.value * this.value;
          return kB(BB) ? new gB(BB) : new YB(wB(LB(Math.abs(this.value))), !1)
        }, oB.prototype.square = function(BB) {
          return new oB(this.value * this.value)
        }, YB.prototype.divmod = function(BB) {
          var TB = FB(this, BB);
          return {
            quotient: TB[0],
            remainder: TB[1]
          }
        }, oB.prototype.divmod = gB.prototype.divmod = YB.prototype.divmod, YB.prototype.divide = function(BB) {
          return FB(this, BB)[0]
        }, oB.prototype.over = oB.prototype.divide = function(BB) {
          return new oB(this.value / bB(BB).value)
        }, gB.prototype.over = gB.prototype.divide = YB.prototype.over = YB.prototype.divide, YB.prototype.mod = function(BB) {
          return FB(this, BB)[1]
        }, oB.prototype.mod = oB.prototype.remainder = function(BB) {
          return new oB(this.value % bB(BB).value)
        }, gB.prototype.remainder = gB.prototype.mod = YB.prototype.remainder = YB.prototype.mod, YB.prototype.pow = function(BB) {
          var TB, dB, VB, yB = bB(BB),
            pB = this.value,
            lB = yB.value;
          if (0 === lB) return JB[1];
          if (0 === pB) return JB[0];
          if (1 === pB) return JB[1];
          if (-1 === pB) return yB.isEven() ? JB[1] : JB[-1];
          if (yB.sign) return JB[0];
          if (!yB.isSmall) throw new Error("The exponent " + yB.toString() + " is too large.");
          if (this.isSmall && kB(TB = Math.pow(pB, lB))) return new gB(HB(TB));
          for (dB = this, VB = JB[1]; !0 & lB && (VB = VB.times(dB), --lB), 0 !== lB;) lB /= 2, dB = dB.square();
          return VB
        }, gB.prototype.pow = YB.prototype.pow, oB.prototype.pow = function(BB) {
          var TB = bB(BB),
            dB = this.value,
            VB = TB.value,
            yB = BigInt(0),
            pB = BigInt(1),
            lB = BigInt(2);
          if (VB === yB) return JB[1];
          if (dB === yB) return JB[0];
          if (dB === pB) return JB[1];
          if (dB === BigInt(-1)) return TB.isEven() ? JB[1] : JB[-1];
          if (TB.isNegative()) return new oB(yB);
          for (var YB = this, gB = JB[1];
            (VB & pB) === pB && (gB = gB.times(YB), --VB), VB !== yB;) VB /= lB, YB = YB.square();
          return gB
        }, YB.prototype.modPow = function(BB, TB) {
          if (BB = bB(BB), (TB = bB(TB)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var dB = JB[1],
            VB = this.mod(TB);
          for (BB.isNegative() && (BB = BB.multiply(JB[-1]), VB = VB.modInv(TB)); BB.isPositive();) {
            if (VB.isZero()) return JB[0];
            BB.isOdd() && (dB = dB.multiply(VB).mod(TB)), BB = BB.divide(2), VB = VB.square().mod(TB)
          }
          return dB
        }, oB.prototype.modPow = gB.prototype.modPow = YB.prototype.modPow, YB.prototype.compareAbs = function(BB) {
          var TB = bB(BB),
            dB = this.value,
            VB = TB.value;
          return TB.isSmall ? 1 : KB(dB, VB)
        }, gB.prototype.compareAbs = function(BB) {
          var TB = bB(BB),
            dB = Math.abs(this.value),
            VB = TB.value;
          return TB.isSmall ? dB === (VB = Math.abs(VB)) ? 0 : dB > VB ? 1 : -1 : -1
        }, oB.prototype.compareAbs = function(BB) {
          var TB = this.value,
            dB = bB(BB).value;
          return (TB = TB >= 0 ? TB : -TB) === (dB = dB >= 0 ? dB : -dB) ? 0 : TB > dB ? 1 : -1
        }, YB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var TB = bB(BB),
            dB = this.value,
            VB = TB.value;
          return this.sign !== TB.sign ? TB.sign ? 1 : -1 : TB.isSmall ? this.sign ? -1 : 1 : KB(dB, VB) * (this.sign ? -1 : 1)
        }, YB.prototype.compareTo = YB.prototype.compare, gB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var TB = bB(BB),
            dB = this.value,
            VB = TB.value;
          return TB.isSmall ? dB == VB ? 0 : dB > VB ? 1 : -1 : dB < 0 !== TB.sign ? dB < 0 ? -1 : 1 : dB < 0 ? 1 : -1
        }, gB.prototype.compareTo = gB.prototype.compare, oB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var TB = this.value,
            dB = bB(BB).value;
          return TB === dB ? 0 : TB > dB ? 1 : -1
        }, oB.prototype.compareTo = oB.prototype.compare, YB.prototype.equals = function(BB) {
          return 0 === this.compare(BB)
        }, oB.prototype.eq = oB.prototype.equals = gB.prototype.eq = gB.prototype.equals = YB.prototype.eq = YB.prototype.equals, YB.prototype.notEquals = function(BB) {
          return 0 !== this.compare(BB)
        }, oB.prototype.neq = oB.prototype.notEquals = gB.prototype.neq = gB.prototype.notEquals = YB.prototype.neq = YB.prototype.notEquals, YB.prototype.greater = function(BB) {
          return this.compare(BB) > 0
        }, oB.prototype.gt = oB.prototype.greater = gB.prototype.gt = gB.prototype.greater = YB.prototype.gt = YB.prototype.greater, YB.prototype.lesser = function(BB) {
          return this.compare(BB) < 0
        }, oB.prototype.lt = oB.prototype.lesser = gB.prototype.lt = gB.prototype.lesser = YB.prototype.lt = YB.prototype.lesser, YB.prototype.greaterOrEquals = function(BB) {
          return this.compare(BB) >= 0
        }, oB.prototype.geq = oB.prototype.greaterOrEquals = gB.prototype.geq = gB.prototype.greaterOrEquals = YB.prototype.geq = YB.prototype.greaterOrEquals, YB.prototype.lesserOrEquals = function(BB) {
          return this.compare(BB) <= 0
        }, oB.prototype.leq = oB.prototype.lesserOrEquals = gB.prototype.leq = gB.prototype.lesserOrEquals = YB.prototype.leq = YB.prototype.lesserOrEquals, YB.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, gB.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, oB.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, YB.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, gB.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, oB.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, YB.prototype.isPositive = function() {
          return !this.sign
        }, gB.prototype.isPositive = function() {
          return this.value > 0
        }, oB.prototype.isPositive = gB.prototype.isPositive, YB.prototype.isNegative = function() {
          return this.sign
        }, gB.prototype.isNegative = function() {
          return this.value < 0
        }, oB.prototype.isNegative = gB.prototype.isNegative, YB.prototype.isUnit = function() {
          return !1
        }, gB.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, oB.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, YB.prototype.isZero = function() {
          return !1
        }, gB.prototype.isZero = function() {
          return 0 === this.value
        }, oB.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, YB.prototype.isDivisibleBy = function(BB) {
          var TB = bB(BB);
          return !TB.isZero() && (!!TB.isUnit() || (0 === TB.compareAbs(2) ? this.isEven() : this.mod(TB).isZero()))
        }, oB.prototype.isDivisibleBy = gB.prototype.isDivisibleBy = YB.prototype.isDivisibleBy, YB.prototype.isPrime = function(dB) {
          var VB = rB(this);
          if (VB !== BB) return VB;
          var yB = this.abs(),
            pB = yB.bitLength();
          if (pB <= 64) return IB(yB, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var lB = Math.log(2) * pB.toJSNumber(), JB = Math.ceil(!0 === dB ? 2 * Math.pow(lB, 2) : lB), YB = [], gB = 0; gB < JB; gB++) YB.push(TB(gB + 2));
          return IB(yB, YB)
        }, oB.prototype.isPrime = gB.prototype.isPrime = YB.prototype.isPrime, YB.prototype.isProbablePrime = function(dB, VB) {
          var yB = rB(this);
          if (yB !== BB) return yB;
          for (var pB = this.abs(), lB = dB === BB ? 5 : dB, JB = [], YB = 0; YB < lB; YB++) JB.push(TB.randBetween(2, pB.minus(2), VB));
          return IB(pB, JB)
        }, oB.prototype.isProbablePrime = gB.prototype.isProbablePrime = YB.prototype.isProbablePrime, YB.prototype.modInv = function(BB) {
          for (var dB, VB, yB, pB = TB.zero, lB = TB.one, JB = bB(BB), YB = this.abs(); !YB.isZero();) dB = JB.divide(YB), VB = pB, yB = JB, pB = lB, JB = YB, lB = VB.subtract(dB.multiply(lB)), YB = yB.subtract(dB.multiply(YB));
          if (!JB.isUnit()) throw new Error(this.toString() + " and " + BB.toString() + " are not co-prime");
          return -1 === pB.compare(0) && (pB = pB.add(BB)), this.isNegative() ? pB.fp() : pB
        }, oB.prototype.modInv = gB.prototype.modInv = YB.prototype.modInv, YB.prototype.next = function() {
          var BB = this.value;
          return this.sign ? NB(BB, 1, this.sign) : new YB(mB(BB, 1), this.sign)
        }, gB.prototype.next = function() {
          var BB = this.value;
          return BB + 1 < VB ? new gB(BB + 1) : new YB(yB, !1)
        }, oB.prototype.next = function() {
          return new oB(this.value + BigInt(1))
        }, YB.prototype.prev = function() {
          var BB = this.value;
          return this.sign ? new YB(mB(BB, 1), !0) : NB(BB, 1, this.sign)
        }, gB.prototype.prev = function() {
          var BB = this.value;
          return BB - 1 > -VB ? new gB(BB - 1) : new YB(yB, !0)
        }, oB.prototype.prev = function() {
          return new oB(this.value - BigInt(1))
        };
        for (var cB = [1]; 2 * cB[cB.length - 1] <= dB;) cB.push(2 * cB[cB.length - 1]);
        var SB = cB.length,
          PB = cB[SB - 1];

        function QB(BB) {
          return Math.abs(BB) <= dB
        }

        function RB(BB, dB, VB) {
          dB = bB(dB);
          for (var yB = BB.isNegative(), pB = dB.isNegative(), lB = yB ? BB.not() : BB, JB = pB ? dB.not() : dB, YB = 0, gB = 0, oB = null, kB = null, LB = []; !lB.isZero() || !JB.isZero();) YB = (oB = FB(lB, PB))[1].toJSNumber(), yB && (YB = PB - 1 - YB), gB = (kB = FB(JB, PB))[1].toJSNumber(), pB && (gB = PB - 1 - gB), lB = oB[0], JB = kB[0], LB.push(VB(YB, gB));
          for (var OB = 0 !== VB(yB ? 1 : 0, pB ? 1 : 0) ? TB(-1) : TB(0), DB = LB.length - 1; DB >= 0; DB -= 1) OB = OB.multiply(PB).add(TB(LB[DB]));
          return OB
        }
        YB.prototype.shiftLeft = function(BB) {
          var TB = bB(BB).toJSNumber();
          if (!QB(TB)) throw new Error(String(TB) + " is too large for shifting.");
          if (TB < 0) return this.shiftRight(-TB);
          var dB = this;
          if (dB.isZero()) return dB;
          for (; TB >= SB;) dB = dB.multiply(PB), TB -= SB - 1;
          return dB.multiply(cB[TB])
        }, oB.prototype.shiftLeft = gB.prototype.shiftLeft = YB.prototype.shiftLeft, YB.prototype.shiftRight = function(BB) {
          var TB, dB = bB(BB).toJSNumber();
          if (!QB(dB)) throw new Error(String(dB) + " is too large for shifting.");
          if (dB < 0) return this.shiftLeft(-dB);
          for (var VB = this; dB >= SB;) {
            if (VB.isZero() || VB.isNegative() && VB.isUnit()) return VB;
            VB = (TB = FB(VB, PB))[1].isNegative() ? TB[0].prev() : TB[0], dB -= SB - 1
          }
          return (TB = FB(VB, cB[dB]))[1].isNegative() ? TB[0].prev() : TB[0]
        }, oB.prototype.shiftRight = gB.prototype.shiftRight = YB.prototype.shiftRight, YB.prototype.not = function() {
          return this.fp().prev()
        }, oB.prototype.not = gB.prototype.not = YB.prototype.not, YB.prototype.and = function(BB) {
          return RB(this, BB, (function(BB, TB) {
            return BB & TB
          }))
        }, oB.prototype.and = gB.prototype.and = YB.prototype.and, YB.prototype.or = function(BB) {
          return RB(this, BB, (function(BB, TB) {
            return BB | TB
          }))
        }, oB.prototype.or = gB.prototype.or = YB.prototype.or, YB.prototype.xor = function(BB) {
          return RB(this, BB, (function(BB, TB) {
            return BB ^ TB
          }))
        }, oB.prototype.xor = gB.prototype.xor = YB.prototype.xor;
        var aB = 1 << 30;

        function ZB(BB) {
          var TB = BB.value,
            VB = "number" === typeof TB ? TB | aB : "bigint" === typeof TB ? TB | BigInt(aB) : TB[0] + TB[1] * dB | 1073758208;
          return VB & -VB
        }

        function XB(BB, dB) {
          if (dB.compareTo(BB) <= 0) {
            var VB = XB(BB, dB.square(dB)),
              yB = VB.p,
              pB = VB.e,
              lB = yB.multiply(dB);
            return lB.compareTo(BB) <= 0 ? {
              p: lB,
              e: 2 * pB + 1
            } : {
              p: yB,
              e: 2 * pB
            }
          }
          return {
            p: TB(1),
            e: 0
          }
        }

        function WB(BB, TB) {
          return BB = bB(BB), TB = bB(TB), BB.greater(TB) ? BB : TB
        }

        function hB(BB, TB) {
          return BB = bB(BB), TB = bB(TB), BB.lesser(TB) ? BB : TB
        }

        function CB(BB, TB) {
          if (BB = bB(BB).abs(), TB = bB(TB).abs(), BB.equals(TB)) return BB;
          if (BB.isZero()) return TB;
          if (TB.isZero()) return BB;
          for (var dB, VB, yB = JB[1]; BB.isEven() && TB.isEven();) dB = hB(ZB(BB), ZB(TB)), BB = BB.divide(dB), TB = TB.divide(dB), yB = yB.multiply(dB);
          for (; BB.isEven();) BB = BB.divide(ZB(BB));
          do {
            for (; TB.isEven();) TB = TB.divide(ZB(TB));
            BB.greater(TB) && (VB = TB, TB = BB, BB = VB), TB = TB.subtract(BB)
          } while (!TB.isZero());
          return yB.isUnit() ? BB : BB.multiply(yB)
        }
        YB.prototype.bitLength = function() {
          var BB = this;
          return BB.compareTo(TB(0)) < 0 && (BB = BB.fp().subtract(TB(1))), 0 === BB.compareTo(TB(0)) ? TB(0) : TB(XB(BB, TB(2)).e).add(TB(1))
        }, oB.prototype.bitLength = gB.prototype.bitLength = YB.prototype.bitLength;
        var GB = function(BB, TB, dB, VB) {
          dB = dB || pB, BB = String(BB), VB || (BB = BB.toLowerCase(), dB = dB.toLowerCase());
          var yB, lB = BB.length,
            JB = Math.abs(TB),
            YB = {};
          for (yB = 0; yB < dB.length; yB++) YB[dB[yB]] = yB;
          for (yB = 0; yB < lB; yB++) {
            if ("-" !== (kB = BB[yB]) && (kB in YB && YB[kB] >= JB)) {
              if ("1" === kB && 1 === JB) continue;
              throw new Error(kB + " is not a valid digit in base " + TB + ".")
            }
          }
          TB = bB(TB);
          var gB = [],
            oB = "-" === BB[0];
          for (yB = oB ? 1 : 0; yB < BB.length; yB++) {
            var kB;
            if ((kB = BB[yB]) in YB) gB.push(bB(YB[kB]));
            else {
              if ("<" !== kB) throw new Error(kB + " is not a valid character");
              var LB = yB;
              do {
                yB++
              } while (">" !== BB[yB] && yB < BB.length);
              gB.push(bB(BB.slice(LB + 1, yB)))
            }
          }
          return qB(gB, TB, oB)
        };

        function qB(BB, TB, dB) {
          var VB, yB = JB[0],
            pB = JB[1];
          for (VB = BB.length - 1; VB >= 0; VB--) yB = yB.add(BB[VB].times(pB)), pB = pB.times(TB);
          return dB ? yB.fp() : yB
        }

        function xB(BB, dB) {
          if ((dB = TB(dB)).isZero()) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (dB.equals(-1)) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (BB.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-BB.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var VB = Array.apply(null, Array(BB.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return VB.unshift([1]), {
              value: [].concat.apply([], VB),
              isNegative: !1
            }
          }
          var yB = !1;
          if (BB.isNegative() && dB.isPositive() && (yB = !0, BB = BB.abs()), dB.isUnit()) return BB.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(BB.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: yB
          };
          for (var pB, lB = [], JB = BB; JB.isNegative() || JB.compareAbs(dB) >= 0;) {
            pB = JB.divmod(dB), JB = pB.quotient;
            var YB = pB.remainder;
            YB.isNegative() && (YB = dB.minus(YB).abs(), JB = JB.next()), lB.push(YB.toJSNumber())
          }
          return lB.push(JB.toJSNumber()), {
            value: lB.reverse(),
            isNegative: yB
          }
        }

        function jB(BB, TB, dB) {
          var VB = xB(BB, TB);
          return (VB.isNegative ? "-" : "") + VB.value.map((function(BB) {
            return function(BB, TB) {
              return BB < (TB = TB || pB).length ? TB[BB] : "<" + BB + ">"
            }(BB, dB)
          })).join("")
        }

        function AB(BB) {
          if (kB(+BB)) {
            var TB = +BB;
            if (TB === HB(TB)) return lB ? new oB(BigInt(TB)) : new gB(TB);
            throw new Error("Invalid integer: " + BB)
          }
          var dB = "-" === BB[0];
          dB && (BB = BB.slice(1));
          var VB = BB.split(/e/i);
          if (VB.length > 2) throw new Error("Invalid integer: " + VB.join("e"));
          if (2 === VB.length) {
            var yB = VB[1];
            if ("+" === yB[0] && (yB = yB.slice(1)), (yB = +yB) !== HB(yB) || !kB(yB)) throw new Error("Invalid integer: " + yB + " is not a valid exponent.");
            var pB = VB[0],
              JB = pB.indexOf(".");
            if (JB >= 0 && (yB -= pB.length - JB - 1, pB = pB.slice(0, JB) + pB.slice(JB + 1)), yB < 0) throw new Error("Cannot include negative exponent part for integers");
            BB = pB += new Array(yB + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(BB)) throw new Error("Invalid integer: " + BB);
          if (lB) return new oB(BigInt(dB ? "-" + BB : BB));
          for (var LB = [], OB = BB.length, uB = OB - 7; OB > 0;) LB.push(+BB.slice(uB, OB)), (uB -= 7) < 0 && (uB = 0), OB -= 7;
          return DB(LB), new YB(LB, dB)
        }

        function bB(BB) {
          return "number" === typeof BB ? function(BB) {
            if (lB) return new oB(BigInt(BB));
            if (kB(BB)) {
              if (BB !== HB(BB)) throw new Error(BB + " is not an integer.");
              return new gB(BB)
            }
            return AB(BB.toString())
          }(BB) : "string" === typeof BB ? AB(BB) : "bigint" === typeof BB ? new oB(BB) : BB
        }
        YB.prototype.toArray = function(BB) {
          return xB(this, BB)
        }, gB.prototype.toArray = function(BB) {
          return xB(this, BB)
        }, oB.prototype.toArray = function(BB) {
          return xB(this, BB)
        }, YB.prototype.toString = function(TB, dB) {
          if (TB === BB && (TB = 10), 10 !== TB) return jB(this, TB, dB);
          for (var VB, yB = this.value, pB = yB.length, lB = String(yB[--pB]); --pB >= 0;) VB = String(yB[pB]), lB += "0000000".slice(VB.length) + VB;
          return (this.sign ? "-" : "") + lB
        }, gB.prototype.toString = function(TB, dB) {
          return TB === BB && (TB = 10), 10 != TB ? jB(this, TB, dB) : String(this.value)
        }, oB.prototype.toString = gB.prototype.toString, oB.prototype.toJSON = YB.prototype.toJSON = gB.prototype.toJSON = function() {
          return this.toString()
        }, YB.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, YB.prototype.toJSNumber = YB.prototype.valueOf, gB.prototype.valueOf = function() {
          return this.value
        }, gB.prototype.toJSNumber = gB.prototype.valueOf, oB.prototype.valueOf = oB.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var nB = 0; nB < 1e3; nB++) JB[nB] = bB(nB), nB > 0 && (JB[-nB] = bB(-nB));
        return JB.one = JB[1], JB.zero = JB[0], JB.minusOne = JB[-1], JB.max = WB, JB.min = hB, JB.gcd = CB, JB.lcm = function(BB, TB) {
          return BB = bB(BB).abs(), TB = bB(TB).abs(), BB.divide(CB(BB, TB)).multiply(TB)
        }, JB.isInstance = function(BB) {
          return BB instanceof YB || BB instanceof gB || BB instanceof oB
        }, JB.randBetween = function(BB, TB, VB) {
          BB = bB(BB), TB = bB(TB);
          var yB = VB || Math.random,
            pB = hB(BB, TB),
            lB = WB(BB, TB).subtract(pB).add(1);
          if (lB.isSmall) return pB.add(Math.floor(yB() * lB));
          for (var YB = xB(lB, dB).value, gB = [], oB = !0, kB = 0; kB < YB.length; kB++) {
            var LB = oB ? YB[kB] : dB,
              OB = HB(yB() * LB);
            gB.push(OB), OB < LB && (oB = !1)
          }
          return pB.add(JB.HdB(gB, dB, !1))
        }, JB.HdB = function(BB, TB, dB) {
          return qB(BB.map(bB), bB(TB || 10), dB)
        }, JB
      }();
      BB.hasOwnProperty("exports") && (BB.exports = TB)
    }(vd);
    var md = pB(vd.exports);

    function Nd(BB, TB, dB) {
      let VB = 0;
      for (let yB = 0; yB < dB; yB++) {
        const dB = BB[TB + yB];
        if (void 0 === dB) break;
        VB += dB * 16 ** yB
      }
      return VB
    }

    function td(BB) {
      const TB = [];
      for (let dB = 0; dB < BB.length; dB++) {
        let VB = Number(BB[dB]);
        for (let BB = 0; VB || BB < TB.length; BB++) VB += 10 * (TB[BB] || 0), TB[BB] = VB % 16, VB = (VB - TB[BB]) / 16
      }
      return TB
    }
    class fd {
      static fromString(BB) {
        return new fd(function(BB) {
          const TB = td(BB),
            dB = Array(4);
          for (let VB = 0; VB < 4; VB++) dB[3 - VB] = Nd(TB, 4 * VB, 4);
          return dB
        }(BB), BB)
      }
      static fromBit(BB) {
        const TB = Array(4),
          dB = Math.floor(BB / 16);
        for (let VB = 0; VB < 4; VB++) TB[3 - VB] = VB === dB ? 1 << BB - 16 * dB : 0;
        return new fd(TB)
      }
      constructor(BB, TB) {
        this.parts = BB, this.str = TB
      }
      and(BB) {
        let {
          parts: TB
        } = BB;
        return new fd(this.parts.map(((BB, dB) => BB & TB[dB])))
      }
      or(BB) {
        let {
          parts: TB
        } = BB;
        return new fd(this.parts.map(((BB, dB) => BB | TB[dB])))
      }
      xor(BB) {
        let {
          parts: TB
        } = BB;
        return new fd(this.parts.map(((BB, dB) => BB ^ TB[dB])))
      }
      not() {
        return new fd(this.parts.map((BB => ~BB)))
      }
      equals(BB) {
        let {
          parts: TB
        } = BB;
        return this.parts.every(((BB, dB) => BB === TB[dB]))
      }
      toString() {
        if (null != this.str) return this.str;
        const BB = new Array(16);
        return this.parts.forEach(((TB, dB) => {
          const VB = td(TB.toString());
          for (let yB = 0; yB < 4; yB++) BB[yB + 4 * dB] = VB[3 - yB] || 0
        })), this.str = md.HdB(BB, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const sd = function() {
      try {
        return BigInt, !0
      } catch (BB) {
        return !1
      }
    }();
    sd && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Md = {},
      zd = sd ? function(BB) {
        return BigInt(BB)
      } : function(BB) {
        return BB instanceof fd ? BB : ("number" === typeof BB && (BB = BB.toString()), null != Md[BB] || (Md[BB] = fd.fromString(BB)), Md[BB])
      },
      wd = zd(0),
      Ud = sd ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wd)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wd;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd).and(BB)
      },
      Fd = sd ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wd)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wd;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd).or(BB)
      },
      Kd = sd ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wd)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wd;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd).xor(BB)
      },
      rd = sd ? function(BB, TB) {
        return BB === TB
      } : function(BB, TB) {
        return null == BB || null == TB ? BB == TB : BB.equals(TB)
      };
    var Id, cd, Sd, Pd, Qd = {
      combine: function() {
        let BB = arguments.length <= 0 ? void 0 : arguments[0];
        for (let TB = 1; TB < arguments.length; TB++) BB = Fd(BB, TB < 0 || arguments.length <= TB ? void 0 : arguments[TB]);
        return BB
      },
      add: function(BB, TB) {
        return TB === wd ? BB : Fd(BB, TB)
      },
      remove: function(BB, TB) {
        return TB === wd ? BB : Kd(BB, Ud(BB, TB))
      },
      filter: Ud,
      invert: sd ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wd).not()
      },
      has: function(BB, TB) {
        return rd(Ud(BB, TB), TB)
      },
      hasAny: function(BB, TB) {
        return !rd(Ud(BB, TB), wd)
      },
      equals: rd,
      deserialize: zd,
      getFlag: sd ? function(BB) {
        return BigInt(1) << BigInt(BB)
      } : function(BB) {
        return fd.fromBit(BB)
      }
    };
    ! function(BB) {
      BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Id || (Id = {})),
    function(BB) {
      BB[BB.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", BB[BB.INVALID_COMMAND = 4002] = "INVALID_COMMAND", BB[BB.INVALID_EVENT = 4004] = "INVALID_EVENT", BB[BB.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(cd || (cd = {})),
    function(BB) {
      BB.LANDSCAPE = "landscape", BB.PORTRAIT = "portrait"
    }(Sd || (Sd = {})),
    function(BB) {
      BB.MOBILE = "mobile", BB.DESKTOP = "desktop"
    }(Pd || (Pd = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Qd.getFlag(0),
      ADMINISTRATOR: Qd.getFlag(3)
    });

    function Rd(BB) {
      return Od((TB => {
        var dB;
        const [VB] = null !== (dB = Object.entries(BB).find((BB => {
          let [, dB] = BB;
          return dB === TB
        }))) && void 0 !== dB ? dB : [];
        return null != TB && void 0 === VB ? BB.UNHANDLED : TB
      }), cT().or(ST()))
    }
    const ad = Ed.object({
        image_url: Ed.string()
      }),
      Zd = Ed.object({
        mediaUrl: Ed.string().max(1024)
      }),
      Xd = Ed.object({
        access_token: Ed.union([Ed.string(), Ed.null()]).optional()
      }),
      Wd = Ed.object({
        access_token: Ed.string(),
        user: Ed.object({
          username: Ed.string(),
          discriminator: Ed.string(),
          id: Ed.string(),
          avatar: Ed.union([Ed.string(), Ed.null()]).optional(),
          public_flags: Ed.number(),
          global_name: Ed.union([Ed.string(), Ed.null()]).optional()
        }),
        scopes: Ed.array(function(BB) {
          const TB = KT().transform((TB => {
            const dB = BB.safeParse(TB);
            return dB.success ? dB.data : BB._def.defaultValue()
          }));
          return TB.overlayType = BB, TB
        }(Ed.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Ed.literal(-1)).default(-1))),
        expires: Ed.string(),
        application: Ed.object({
          description: Ed.string(),
          icon: Ed.union([Ed.string(), Ed.null()]).optional(),
          id: Ed.string(),
          rpc_origins: Ed.array(Ed.string()).optional(),
          name: Ed.string()
        })
      }),
      hd = Ed.object({
        participants: Ed.array(Ed.object({
          id: Ed.string(),
          username: Ed.string(),
          global_name: Ed.union([Ed.string(), Ed.null()]).optional(),
          discriminator: Ed.string(),
          avatar: Ed.union([Ed.string(), Ed.null()]).optional(),
          flags: Ed.number(),
          bot: Ed.boolean(),
          avatar_decoration_data: Ed.union([Ed.object({
            asset: Ed.string(),
            skuId: Ed.string().optional()
          }), Ed.null()]).optional(),
          premium_type: Ed.union([Ed.number(), Ed.null()]).optional(),
          nickname: Ed.string().optional()
        }))
      });
    var Cd;
    ! function(BB) {
      BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Cd || (Cd = {}));
    const Gd = Ed.object({}).optional().nullable(),
      qd = Ed.void(),
      xd = {
        [Cd.INITIATE_IMAGE_UPLOAD]: {
          request: qd,
          response: ad
        },
        [Cd.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Zd,
          response: Gd
        },
        [Cd.AUTHENTICATE]: {
          request: Xd,
          response: Wd
        },
        [Cd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: qd,
          response: hd
        }
      },
      jd = "DISPATCH";
    var Ad;
    ! function(BB) {
      BB.AUTHORIZE = "AUTHORIZE", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_GUILDS = "GET_GUILDS", BB.GET_GUILD = "GET_GUILD", BB.GET_CHANNEL = "GET_CHANNEL", BB.GET_CHANNELS = "GET_CHANNELS", BB.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", BB.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", BB.SUBSCRIBE = "SUBSCRIBE", BB.UNSUBSCRIBE = "UNSUBSCRIBE", BB.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", BB.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", BB.SET_ACTIVITY = "SET_ACTIVITY", BB.GET_SKUS = "GET_SKUS", BB.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", BB.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", BB.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", BB.START_PURCHASE = "START_PURCHASE", BB.SET_CONFIG = "SET_CONFIG", BB.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", BB.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", BB.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", BB.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", BB.CAPTURE_LOG = "CAPTURE_LOG", BB.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", BB.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", BB.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", BB.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Ad || (Ad = {}));
    const bd = jT({
        cmd: cT(),
        data: CT(),
        evt: WT(),
        nonce: cT()
      }).passthrough(),
      nd = (Rd(Object.assign(Object.assign({}, Wd.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), jT({
        id: cT(),
        username: cT(),
        discriminator: cT(),
        global_name: cT().optional().nullable(),
        avatar: cT().optional().nullable(),
        avatar_decoration_data: jT({
          asset: cT(),
          sku_id: cT().optional()
        }).nullable(),
        bot: RT(),
        flags: ST().optional().nullable(),
        premium_type: ST().optional().nullable()
      })),
      ed = jT({
        user: nd,
        nick: cT().optional().nullable(),
        roles: xT(cT()),
        joined_at: cT(),
        deaf: RT(),
        mute: RT()
      }),
      BV = jT({
        id: cT(),
        name: cT().optional().nullable(),
        roles: xT(cT()).optional().nullable(),
        user: nd.optional().nullable(),
        require_colons: RT().optional().nullable(),
        managed: RT().optional().nullable(),
        animated: RT().optional().nullable(),
        available: RT().optional().nullable()
      }),
      TV = jT({
        mute: RT(),
        deaf: RT(),
        self_mute: RT(),
        self_deaf: RT(),
        suppress: RT()
      }),
      dV = jT({
        mute: RT(),
        nick: cT(),
        user: nd,
        voice_state: TV,
        volume: ST()
      }),
      VV = Rd({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      yV = jT({
        name: cT(),
        type: ST(),
        url: cT().optional().nullable(),
        created_at: ST().optional().nullable(),
        timestamps: jT({
          start: ST(),
          end: ST()
        }).partial().optional().nullable(),
        application_id: cT().optional().nullable(),
        details: cT().optional().nullable(),
        state: cT().optional().nullable(),
        emoji: BV.optional().nullable(),
        party: jT({
          id: cT().optional().nullable(),
          size: xT(ST()).optional().nullable()
        }).optional().nullable(),
        assets: jT({
          large_image: cT().nullable(),
          large_text: cT().nullable(),
          small_image: cT().nullable(),
          small_text: cT().nullable()
        }).partial().optional().nullable(),
        secrets: jT({
          join: cT(),
          match: cT()
        }).partial().optional().nullable(),
        instance: RT().optional().nullable(),
        flags: ST().optional().nullable()
      }),
      pV = jT({
        id: cT(),
        type: Rd({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: cT(),
        deny: cT()
      }),
      lV = {
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
      JV = jT({
        id: cT(),
        type: Rd(lV),
        guild_id: cT().optional().nullable(),
        position: ST().optional().nullable(),
        permission_overwrites: xT(pV).optional().nullable(),
        name: cT().optional().nullable(),
        topic: cT().optional().nullable(),
        nsfw: RT().optional().nullable(),
        last_message_id: cT().optional().nullable(),
        bitrate: ST().optional().nullable(),
        user_limit: ST().optional().nullable(),
        rate_limit_per_user: ST().optional().nullable(),
        recipients: xT(nd).optional().nullable(),
        icon: cT().optional().nullable(),
        owner_id: cT().optional().nullable(),
        application_id: cT().optional().nullable(),
        parent_id: cT().optional().nullable(),
        last_pin_timestamp: cT().optional().nullable()
      }),
      YV = jT({
        user: nd,
        guild_id: cT(),
        status: VV,
        activities: xT(yV),
        client_status: jT({
          desktop: VV,
          mobile: VV,
          web: VV
        }).partial()
      }),
      gV = jT({
        id: cT(),
        name: cT(),
        color: ST(),
        hoist: RT(),
        position: ST(),
        permissions: cT(),
        managed: RT(),
        mentionable: RT()
      }),
      oV = (jT({
        id: cT(),
        name: cT(),
        owner_id: cT(),
        icon: cT().nullable(),
        icon_hash: cT().optional().nullable(),
        splash: cT().nullable(),
        discovery_splash: cT().nullable(),
        owner: RT().optional().nullable(),
        permissions: cT().optional().nullable(),
        region: cT(),
        afk_channel_id: cT().nullable(),
        afk_timeout: ST(),
        widget_enabled: RT().optional().nullable(),
        widget_channel_id: cT().optional().nullable(),
        verification_level: ST(),
        default_message_notifications: ST(),
        explicit_content_filter: ST(),
        roles: xT(gV),
        emojis: xT(BV),
        features: xT(cT()),
        mfa_level: ST(),
        application_id: cT().nullable(),
        system_channel_id: cT().nullable(),
        system_channel_flags: ST(),
        rules_channel_id: cT().nullable(),
        joined_at: cT().optional().nullable(),
        large: RT().optional().nullable(),
        unavailable: RT().optional().nullable(),
        member_count: ST().optional().nullable(),
        voice_states: xT(TV).optional().nullable(),
        members: xT(ed).optional().nullable(),
        channels: xT(JV).optional().nullable(),
        presences: xT(YV).optional().nullable(),
        max_presences: ST().optional().nullable(),
        max_members: ST().optional().nullable(),
        vanity_url_code: cT().nullable(),
        description: cT().nullable(),
        banner: cT().nullable(),
        premium_tier: ST(),
        premium_subscription_count: ST().optional().nullable(),
        preferred_locale: cT(),
        public_updates_channel_id: cT().nullable(),
        max_video_channel_users: ST().optional().nullable(),
        approximate_member_count: ST().optional().nullable(),
        approximate_presence_count: ST().optional().nullable()
      }), jT({
        id: cT(),
        guild_id: cT(),
        type: ST(),
        name: cT()
      })),
      kV = jT({
        id: cT(),
        filename: cT(),
        size: ST(),
        url: cT(),
        proxy_url: cT(),
        height: ST().optional().nullable(),
        width: ST().optional().nullable()
      }),
      LV = jT({
        text: cT(),
        icon_url: cT().optional().nullable(),
        proxy_icon_url: cT().optional().nullable()
      }),
      OV = jT({
        url: cT().optional().nullable(),
        proxy_url: cT().optional().nullable(),
        height: ST().optional().nullable(),
        width: ST().optional().nullable()
      }),
      DV = OV.omit({
        proxy_url: !0
      }),
      uV = jT({
        name: cT().optional().nullable(),
        url: cT().optional().nullable()
      }),
      HV = jT({
        name: cT().optional().nullable(),
        url: cT().optional().nullable(),
        icon_url: cT().optional().nullable(),
        proxy_icon_url: cT().optional().nullable()
      }),
      EV = jT({
        name: cT(),
        value: cT(),
        inline: RT()
      }),
      vV = jT({
        title: cT().optional().nullable(),
        type: cT().optional().nullable(),
        description: cT().optional().nullable(),
        url: cT().optional().nullable(),
        timestamp: cT().optional().nullable(),
        color: ST().optional().nullable(),
        footer: LV.optional().nullable(),
        image: OV.optional().nullable(),
        thumbnail: OV.optional().nullable(),
        video: DV.optional().nullable(),
        provider: uV.optional().nullable(),
        author: HV.optional().nullable(),
        fields: xT(EV).optional().nullable()
      }),
      mV = jT({
        count: ST(),
        me: RT(),
        emoji: BV
      }),
      iV = jT({
        type: ST(),
        party_id: cT().optional().nullable()
      }),
      NV = jT({
        id: cT(),
        cover_image: cT().optional().nullable(),
        description: cT(),
        icon: cT().optional().nullable(),
        name: cT()
      }),
      tV = jT({
        message_id: cT().optional().nullable(),
        channel_id: cT().optional().nullable(),
        guild_id: cT().optional().nullable()
      }),
      fV = jT({
        id: cT(),
        channel_id: cT(),
        guild_id: cT().optional().nullable(),
        author: nd.optional().nullable(),
        member: ed.optional().nullable(),
        content: cT(),
        timestamp: cT(),
        edited_timestamp: cT().optional().nullable(),
        tts: RT(),
        mention_everyone: RT(),
        mentions: xT(nd),
        mention_roles: xT(cT()),
        mention_channels: xT(oV),
        attachments: xT(kV),
        embeds: xT(vV),
        reactions: xT(mV).optional().nullable(),
        nonce: bT([cT(), ST()]).optional().nullable(),
        pinned: RT(),
        webhook_id: cT().optional().nullable(),
        type: ST(),
        activity: iV.optional().nullable(),
        application: NV.optional().nullable(),
        message_reference: tV.optional().nullable(),
        flags: ST().optional().nullable(),
        stickers: xT(CT()).optional().nullable(),
        referenced_message: CT().optional().nullable()
      }),
      sV = jT({
        id: cT(),
        name: cT()
      }),
      MV = jT({
        type: Rd({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: ST(),
        name: cT()
      }),
      zV = jT({
        type: Rd({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: RT(),
        threshold: ST(),
        shortcut: xT(MV),
        delay: ST()
      }),
      wV = jT({
        device_id: cT(),
        volume: ST(),
        available_devices: xT(sV)
      }),
      UV = (jT({
        type: Rd({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: cT(),
        vendor: jT({
          name: cT(),
          url: cT()
        }),
        model: jT({
          name: cT(),
          url: cT()
        }),
        related: xT(cT()),
        echo_cancellation: RT().optional().nullable(),
        noise_suppression: RT().optional().nullable(),
        automatic_gain_control: RT().optional().nullable(),
        hardware_mute: RT().optional().nullable()
      }), jT({
        id: cT(),
        name: cT(),
        type: Rd({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: jT({
          amount: ST(),
          currency: cT()
        }),
        application_id: cT(),
        flags: ST(),
        release_date: cT().nullable()
      })),
      FV = jT({
        id: cT(),
        sku_id: cT(),
        application_id: cT(),
        user_id: cT(),
        gift_code_flags: ST(),
        type: Rd({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: cT().optional().nullable(),
        branches: xT(cT()).optional().nullable(),
        starts_at: cT().optional().nullable(),
        ends_at: cT().optional().nullable(),
        parent_id: cT().optional().nullable(),
        consumed: RT().optional().nullable(),
        deleted: RT().optional().nullable(),
        gift_code_batch_id: cT().optional().nullable()
      }),
      KV = (Rd({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Rd({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      rV = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      IV = (Rd(rV), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      cV = (Rd(IV), "ERROR");
    var SV;
    ! function(BB) {
      BB.READY = "READY", BB.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", BB.SPEAKING_START = "SPEAKING_START", BB.SPEAKING_STOP = "SPEAKING_STOP", BB.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", BB.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", BB.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", BB.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", BB.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", BB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(SV || (SV = {}));
    const PV = bd.extend({
        evt: Yd(SV),
        nonce: cT().nullable(),
        cmd: ld(jd),
        data: jT({}).passthrough()
      }),
      QV = bd.extend({
        evt: ld(cV),
        data: jT({
          code: ST(),
          message: cT().optional()
        }).passthrough(),
        cmd: Yd(Ad),
        nonce: cT().nullable()
      }),
      RV = PV.extend({
        evt: cT()
      }),
      aV = bT([PV, RV, QV]);
    const ZV = {
      [SV.READY]: {
        payload: PV.extend({
          evt: ld(SV.READY),
          data: jT({
            v: ST(),
            config: jT({
              cdn_host: cT().optional(),
              api_endpoint: cT(),
              environment: cT()
            }),
            user: jT({
              id: cT(),
              username: cT(),
              discriminator: cT(),
              avatar: cT().optional()
            }).optional()
          })
        })
      },
      [SV.VOICE_STATE_UPDATE]: {
        payload: PV.extend({
          evt: ld(SV.VOICE_STATE_UPDATE),
          data: dV
        }),
        subscribeArgs: jT({
          channel_id: cT()
        })
      },
      [SV.SPEAKING_START]: {
        payload: PV.extend({
          evt: ld(SV.SPEAKING_START),
          data: jT({
            lobby_id: cT().optional(),
            channel_id: cT().optional(),
            user_id: cT()
          })
        }),
        subscribeArgs: jT({
          lobby_id: cT().nullable().optional(),
          channel_id: cT().nullable().optional()
        })
      },
      [SV.SPEAKING_STOP]: {
        payload: PV.extend({
          evt: ld(SV.SPEAKING_STOP),
          data: jT({
            lobby_id: cT().optional(),
            channel_id: cT().optional(),
            user_id: cT()
          })
        }),
        subscribeArgs: jT({
          lobby_id: cT().nullable().optional(),
          channel_id: cT().nullable().optional()
        })
      },
      [SV.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: PV.extend({
          evt: ld(SV.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: jT({
            layout_mode: Rd(IV)
          })
        })
      },
      [SV.ORIENTATION_UPDATE]: {
        payload: PV.extend({
          evt: ld(SV.ORIENTATION_UPDATE),
          data: jT({
            screen_orientation: Rd(rV),
            orientation: Yd(Sd)
          })
        })
      },
      [SV.CURRENT_USER_UPDATE]: {
        payload: PV.extend({
          evt: ld(SV.CURRENT_USER_UPDATE),
          data: nd
        })
      },
      [SV.ENTITLEMENT_CREATE]: {
        payload: PV.extend({
          evt: ld(SV.ENTITLEMENT_CREATE),
          data: jT({
            entitlement: FV
          })
        })
      },
      [SV.THERMAL_STATE_UPDATE]: {
        payload: PV.extend({
          evt: ld(SV.THERMAL_STATE_UPDATE),
          data: jT({
            thermal_state: KV
          })
        })
      },
      [SV.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: PV.extend({
          evt: ld(SV.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: jT({
            participants: hd.shape.participants
          })
        })
      }
    };
    const XV = jT({}).nullable(),
      WV = jT({
        code: cT()
      }),
      hV = jT({
        guilds: xT(jT({
          id: cT(),
          name: cT()
        }))
      }),
      CV = jT({
        id: cT(),
        name: cT(),
        icon_url: cT().optional(),
        members: xT(ed)
      }),
      GV = jT({
        id: cT(),
        type: Rd(lV),
        guild_id: cT().optional().nullable(),
        name: cT().optional().nullable(),
        topic: cT().optional().nullable(),
        bitrate: ST().optional().nullable(),
        user_limit: ST().optional().nullable(),
        position: ST().optional().nullable(),
        voice_states: xT(dV),
        messages: xT(fV)
      }),
      qV = jT({
        channels: xT(JV)
      }),
      xV = (GV.nullable(), GV.nullable()),
      jV = GV.nullable(),
      AV = (jT({
        input: wV,
        output: wV,
        mode: zV,
        automatic_gain_control: RT(),
        echo_cancellation: RT(),
        noise_suppression: RT(),
        qos: RT(),
        silence_warning: RT(),
        deaf: RT(),
        mute: RT()
      }), jT({
        evt: cT()
      })),
      bV = jT({
        shortcut: MV
      }),
      nV = yV,
      eV = jT({
        skus: xT(UV)
      }),
      By = jT({
        entitlements: xT(FV)
      }),
      Ty = xT(FV).nullable(),
      dy = jT({
        use_interactive_pip: RT()
      }),
      Vy = jT({
        locale: cT()
      }),
      yy = jT({
        enabled: RT()
      }),
      py = jT({
        permissions: QT().or(cT())
      }),
      ly = jT({
        iosKeyboardResizesView: kd(RT())
      }),
      Jy = bd.extend({
        cmd: Yd(Ad),
        evt: WT()
      });

    function Yy(BB) {
      let {
        cmd: TB,
        data: dB
      } = BB;
      switch (TB) {
        case Ad.AUTHORIZE:
          return WV.parse(dB);
        case Ad.CAPTURE_SHORTCUT:
          return bV.parse(dB);
        case Ad.ENCOURAGE_HW_ACCELERATION:
          return yy.parse(dB);
        case Ad.GET_CHANNEL:
          return GV.parse(dB);
        case Ad.GET_CHANNELS:
          return qV.parse(dB);
        case Ad.GET_CHANNEL_PERMISSIONS:
          return py.parse(dB);
        case Ad.GET_GUILD:
          return CV.parse(dB);
        case Ad.GET_GUILDS:
          return hV.parse(dB);
        case Ad.GET_PLATFORM_BEHAVIORS:
          return ly.parse(dB);
        case Ad.GET_CHANNEL:
          return GV.parse(dB);
        case Ad.SELECT_TEXT_CHANNEL:
          return jV.parse(dB);
        case Ad.SELECT_VOICE_CHANNEL:
          return xV.parse(dB);
        case Ad.SET_ACTIVITY:
          return nV.parse(dB);
        case Ad.GET_SKUS_EMBEDDED:
          return eV.parse(dB);
        case Ad.GET_ENTITLEMENTS_EMBEDDED:
          return By.parse(dB);
        case Ad.SET_CONFIG:
          return dy.parse(dB);
        case Ad.START_PURCHASE:
          return Ty.parse(dB);
        case Ad.SUBSCRIBE:
        case Ad.UNSUBSCRIBE:
          return AV.parse(dB);
        case Ad.USER_SETTINGS_GET_LOCALE:
          return Vy.parse(dB);
        case Ad.OPEN_EXTERNAL_LINK:
        case Ad.SET_ORIENTATION_LOCK_STATE:
        case Ad.SET_CERTIFIED_DEVICES:
        case Ad.SEND_ANALYTICS_EVENT:
        case Ad.OPEN_INVITE_DIALOG:
        case Ad.CAPTURE_LOG:
        case Ad.GET_SKUS:
        case Ad.GET_ENTITLEMENTS:
          return XV.parse(dB);
        case Ad.AUTHENTICATE:
        case Ad.INITIATE_IMAGE_UPLOAD:
        case Ad.OPEN_SHARE_MOMENT_DIALOG:
        case Ad.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: BB
          } = xd[TB];
          return BB.parse(dB);
        default:
          ! function(BB, TB) {
            throw TB
          }(0, new Error(`Unrecognized command ${TB}`))
      }
    }
    jT({
      frame_id: cT(),
      platform: Yd(Pd).optional().nullable()
    }), jT({
      v: ld(1),
      encoding: ld("json").optional(),
      client_id: cT(),
      frame_id: cT()
    });
    const gy = jT({
        code: ST(),
        message: cT().optional()
      }),
      oy = jT({
        evt: cT().nullable(),
        nonce: cT().nullable(),
        data: CT().nullable(),
        cmd: cT()
      }).passthrough();

    function ky(BB) {
      const TB = oy.parse(BB);
      return null != TB.evt ? TB.evt === cV ? QV.parse(TB) : function(BB) {
        const TB = BB.evt;
        if (!(TB in SV)) throw new Error(`Unrecognized event type ${BB.evt}`);
        return ZV[TB].payload.parse(BB)
      }(aV.parse(TB)) : function(BB) {
        return Object.assign(Object.assign({}, BB), {
          data: Yy(BB)
        })
      }(Jy.passthrough().parse(TB))
    }

    function Ly(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const yB = bd.extend({
        cmd: ld(TB),
        data: dB
      });
      return async dB => {
        const pB = await BB({
          cmd: TB,
          args: dB,
          transfer: VB(dB)
        });
        return yB.parse(pB).data
      }
    }

    function Oy(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const dB = xd[BB].response,
        VB = bd.extend({
          cmd: ld(BB),
          data: dB
        });
      return dB => async yB => {
        const pB = await dB({
          cmd: BB,
          args: yB,
          transfer: TB(yB)
        });
        return VB.parse(pB).data
      }
    }
    const Dy = Oy(Cd.AUTHENTICATE),
      uy = BB => Ly(BB, Ad.AUTHORIZE, WV),
      Hy = BB => Ly(BB, Ad.CAPTURE_LOG, XV),
      Ey = BB => Ly(BB, Ad.ENCOURAGE_HW_ACCELERATION, yy),
      vy = BB => Ly(BB, Ad.GET_ENTITLEMENTS_EMBEDDED, By),
      my = BB => Ly(BB, Ad.GET_SKUS_EMBEDDED, eV),
      iy = BB => Ly(BB, Ad.GET_CHANNEL_PERMISSIONS, py),
      Ny = BB => Ly(BB, Ad.GET_PLATFORM_BEHAVIORS, ly),
      ty = BB => Ly(BB, Ad.OPEN_EXTERNAL_LINK, XV),
      fy = BB => Ly(BB, Ad.OPEN_INVITE_DIALOG, XV),
      sy = Oy(Cd.OPEN_SHARE_MOMENT_DIALOG);
    yV.dO({
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
      type: yV.shape.type.optional(),
      instance: yV.shape.instance.optional()
    }).nullable();
    const My = BB => Ly(BB, Ad.SET_ACTIVITY, nV),
      zy = BB => Ly(BB, Ad.SET_CONFIG, dy);
    const wy = BB => ({
        lock_state: BB.lock_state,
        picture_in_picture_lock_state: BB.picture_in_picture_lock_state
      }),
      Uy = BB => function(BB) {
        let {
          sendCommand: TB,
          cmd: dB,
          response: VB,
          fallbackTransform: yB,
          transferTransform: pB = () => {}
        } = BB;
        const lB = bd.extend({
          cmd: ld(dB),
          data: VB
        });
        return async BB => {
          try {
            const VB = await TB({
              cmd: dB,
              args: BB,
              transfer: pB(BB)
            });
            return lB.parse(VB).data
          } catch (VB) {
            if (VB.code === cd.INVALID_PAYLOAD) {
              const VB = yB(BB),
                JB = await TB({
                  cmd: dB,
                  args: VB,
                  transfer: pB(VB)
                });
              return lB.parse(JB).data
            }
            throw VB
          }
        }
      }({
        sendCommand: BB,
        cmd: Ad.SET_ORIENTATION_LOCK_STATE,
        response: XV,
        fallbackTransform: wy
      }),
      Fy = BB => Ly(BB, Ad.START_PURCHASE, Ty),
      Ky = BB => Ly(BB, Ad.USER_SETTINGS_GET_LOCALE, Vy),
      ry = Oy(Cd.INITIATE_IMAGE_UPLOAD),
      Iy = BB => Ly(BB, Ad.GET_CHANNEL, GV),
      cy = Oy(Cd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Sy = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Py(BB) {
      return "string" === typeof BB && Sy.test(BB)
    }
    for (var Qy = [], Ry = 0; Ry < 256; ++Ry) Qy.push((Ry + 256).toString(16).substr(1));

    function ay(BB) {
      var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = (Qy[BB[TB + 0]] + Qy[BB[TB + 1]] + Qy[BB[TB + 2]] + Qy[BB[TB + 3]] + "-" + Qy[BB[TB + 4]] + Qy[BB[TB + 5]] + "-" + Qy[BB[TB + 6]] + Qy[BB[TB + 7]] + "-" + Qy[BB[TB + 8]] + Qy[BB[TB + 9]] + "-" + Qy[BB[TB + 10]] + Qy[BB[TB + 11]] + Qy[BB[TB + 12]] + Qy[BB[TB + 13]] + Qy[BB[TB + 14]] + Qy[BB[TB + 15]]).toLowerCase();
      if (!Py(dB)) throw TypeError("Stringified UUID is invalid");
      return dB
    }
    var Zy;

    function Xy(BB, TB, dB) {
      function VB(BB, VB, yB, pB) {
        if ("string" === typeof BB && (BB = function(BB) {
            BB = unescape(encodeURIComponent(BB));
            for (var TB = [], dB = 0; dB < BB.length; ++dB) TB.push(BB.charCodeAt(dB));
            return TB
          }(BB)), "string" === typeof VB && (VB = function(BB) {
            if (!Py(BB)) throw TypeError("Invalid UUID");
            var TB, dB = new Uint8Array(16);
            return dB[0] = (TB = parseInt(BB.slice(0, 8), 16)) >>> 24, dB[1] = TB >>> 16 & 255, dB[2] = TB >>> 8 & 255, dB[3] = 255 & TB, dB[4] = (TB = parseInt(BB.slice(9, 13), 16)) >>> 8, dB[5] = 255 & TB, dB[6] = (TB = parseInt(BB.slice(14, 18), 16)) >>> 8, dB[7] = 255 & TB, dB[8] = (TB = parseInt(BB.slice(19, 23), 16)) >>> 8, dB[9] = 255 & TB, dB[10] = (TB = parseInt(BB.slice(24, 36), 16)) / 1099511627776 & 255, dB[11] = TB / 4294967296 & 255, dB[12] = TB >>> 24 & 255, dB[13] = TB >>> 16 & 255, dB[14] = TB >>> 8 & 255, dB[15] = 255 & TB, dB
          }(VB)), 16 !== VB.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var lB = new Uint8Array(16 + BB.length);
        if (lB.set(VB), lB.set(BB, VB.length), (lB = dB(lB))[6] = 15 & lB[6] | TB, lB[8] = 63 & lB[8] | 128, yB) {
          pB = pB || 0;
          for (var JB = 0; JB < 16; ++JB) yB[pB + JB] = lB[JB];
          return yB
        }
        return ay(lB)
      }
      try {
        VB.name = BB
      } catch (yB) {}
      return VB.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", VB.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", VB
    }

    function Wy(BB) {
      return 14 + (BB + 64 >>> 9 << 4) + 1
    }

    function hy(BB, TB) {
      var dB = (65535 & BB) + (65535 & TB);
      return (BB >> 16) + (TB >> 16) + (dB >> 16) << 16 | 65535 & dB
    }

    function Cy(BB, TB, dB, VB, yB, pB) {
      return hy((lB = hy(hy(TB, BB), hy(VB, pB))) << (JB = yB) | lB >>> 32 - JB, dB);
      var lB, JB
    }

    function Gy(BB, TB, dB, VB, yB, pB, lB) {
      return Cy(TB & dB | ~TB & VB, BB, TB, yB, pB, lB)
    }

    function qy(BB, TB, dB, VB, yB, pB, lB) {
      return Cy(TB & VB | dB & ~VB, BB, TB, yB, pB, lB)
    }

    function xy(BB, TB, dB, VB, yB, pB, lB) {
      return Cy(TB ^ dB ^ VB, BB, TB, yB, pB, lB)
    }

    function jy(BB, TB, dB, VB, yB, pB, lB) {
      return Cy(dB ^ (TB | ~VB), BB, TB, yB, pB, lB)
    }
    Xy("v3", 48, (function(BB) {
      if ("string" === typeof BB) {
        var TB = unescape(encodeURIComponent(BB));
        BB = new Uint8Array(TB.length);
        for (var dB = 0; dB < TB.length; ++dB) BB[dB] = TB.charCodeAt(dB)
      }
      return function(BB) {
        for (var TB = [], dB = 32 * BB.length, VB = "0123456789abcdef", yB = 0; yB < dB; yB += 8) {
          var pB = BB[yB >> 5] >>> yB % 32 & 255,
            lB = parseInt(VB.charAt(pB >>> 4 & 15) + VB.charAt(15 & pB), 16);
          TB.push(lB)
        }
        return TB
      }(function(BB, TB) {
        BB[TB >> 5] |= 128 << TB % 32, BB[Wy(TB) - 1] = TB;
        for (var dB = 1732584193, VB = -271733879, yB = -1732584194, pB = 271733878, lB = 0; lB < BB.length; lB += 16) {
          var JB = dB,
            YB = VB,
            gB = yB,
            oB = pB;
          dB = Gy(dB, VB, yB, pB, BB[lB], 7, -680876936), pB = Gy(pB, dB, VB, yB, BB[lB + 1], 12, -389564586), yB = Gy(yB, pB, dB, VB, BB[lB + 2], 17, 606105819), VB = Gy(VB, yB, pB, dB, BB[lB + 3], 22, -1044525330), dB = Gy(dB, VB, yB, pB, BB[lB + 4], 7, -176418897), pB = Gy(pB, dB, VB, yB, BB[lB + 5], 12, 1200080426), yB = Gy(yB, pB, dB, VB, BB[lB + 6], 17, -1473231341), VB = Gy(VB, yB, pB, dB, BB[lB + 7], 22, -45705983), dB = Gy(dB, VB, yB, pB, BB[lB + 8], 7, 1770035416), pB = Gy(pB, dB, VB, yB, BB[lB + 9], 12, -1958414417), yB = Gy(yB, pB, dB, VB, BB[lB + 10], 17, -42063), VB = Gy(VB, yB, pB, dB, BB[lB + 11], 22, -1990404162), dB = Gy(dB, VB, yB, pB, BB[lB + 12], 7, 1804603682), pB = Gy(pB, dB, VB, yB, BB[lB + 13], 12, -40341101), yB = Gy(yB, pB, dB, VB, BB[lB + 14], 17, -1502002290), dB = qy(dB, VB = Gy(VB, yB, pB, dB, BB[lB + 15], 22, 1236535329), yB, pB, BB[lB + 1], 5, -165796510), pB = qy(pB, dB, VB, yB, BB[lB + 6], 9, -1069501632), yB = qy(yB, pB, dB, VB, BB[lB + 11], 14, 643717713), VB = qy(VB, yB, pB, dB, BB[lB], 20, -373897302), dB = qy(dB, VB, yB, pB, BB[lB + 5], 5, -701558691), pB = qy(pB, dB, VB, yB, BB[lB + 10], 9, 38016083), yB = qy(yB, pB, dB, VB, BB[lB + 15], 14, -660478335), VB = qy(VB, yB, pB, dB, BB[lB + 4], 20, -405537848), dB = qy(dB, VB, yB, pB, BB[lB + 9], 5, 568446438), pB = qy(pB, dB, VB, yB, BB[lB + 14], 9, -1019803690), yB = qy(yB, pB, dB, VB, BB[lB + 3], 14, -187363961), VB = qy(VB, yB, pB, dB, BB[lB + 8], 20, 1163531501), dB = qy(dB, VB, yB, pB, BB[lB + 13], 5, -1444681467), pB = qy(pB, dB, VB, yB, BB[lB + 2], 9, -51403784), yB = qy(yB, pB, dB, VB, BB[lB + 7], 14, 1735328473), dB = xy(dB, VB = qy(VB, yB, pB, dB, BB[lB + 12], 20, -1926607734), yB, pB, BB[lB + 5], 4, -378558), pB = xy(pB, dB, VB, yB, BB[lB + 8], 11, -2022574463), yB = xy(yB, pB, dB, VB, BB[lB + 11], 16, 1839030562), VB = xy(VB, yB, pB, dB, BB[lB + 14], 23, -35309556), dB = xy(dB, VB, yB, pB, BB[lB + 1], 4, -1530992060), pB = xy(pB, dB, VB, yB, BB[lB + 4], 11, 1272893353), yB = xy(yB, pB, dB, VB, BB[lB + 7], 16, -155497632), VB = xy(VB, yB, pB, dB, BB[lB + 10], 23, -1094730640), dB = xy(dB, VB, yB, pB, BB[lB + 13], 4, 681279174), pB = xy(pB, dB, VB, yB, BB[lB], 11, -358537222), yB = xy(yB, pB, dB, VB, BB[lB + 3], 16, -722521979), VB = xy(VB, yB, pB, dB, BB[lB + 6], 23, 76029189), dB = xy(dB, VB, yB, pB, BB[lB + 9], 4, -640364487), pB = xy(pB, dB, VB, yB, BB[lB + 12], 11, -421815835), yB = xy(yB, pB, dB, VB, BB[lB + 15], 16, 530742520), dB = jy(dB, VB = xy(VB, yB, pB, dB, BB[lB + 2], 23, -995338651), yB, pB, BB[lB], 6, -198630844), pB = jy(pB, dB, VB, yB, BB[lB + 7], 10, 1126891415), yB = jy(yB, pB, dB, VB, BB[lB + 14], 15, -1416354905), VB = jy(VB, yB, pB, dB, BB[lB + 5], 21, -57434055), dB = jy(dB, VB, yB, pB, BB[lB + 12], 6, 1700485571), pB = jy(pB, dB, VB, yB, BB[lB + 3], 10, -1894986606), yB = jy(yB, pB, dB, VB, BB[lB + 10], 15, -1051523), VB = jy(VB, yB, pB, dB, BB[lB + 1], 21, -2054922799), dB = jy(dB, VB, yB, pB, BB[lB + 8], 6, 1873313359), pB = jy(pB, dB, VB, yB, BB[lB + 15], 10, -30611744), yB = jy(yB, pB, dB, VB, BB[lB + 6], 15, -1560198380), VB = jy(VB, yB, pB, dB, BB[lB + 13], 21, 1309151649), dB = jy(dB, VB, yB, pB, BB[lB + 4], 6, -145523070), pB = jy(pB, dB, VB, yB, BB[lB + 11], 10, -1120210379), yB = jy(yB, pB, dB, VB, BB[lB + 2], 15, 718787259), VB = jy(VB, yB, pB, dB, BB[lB + 9], 21, -343485551), dB = hy(dB, JB), VB = hy(VB, YB), yB = hy(yB, gB), pB = hy(pB, oB)
        }
        return [dB, VB, yB, pB]
      }(function(BB) {
        if (0 === BB.length) return [];
        for (var TB = 8 * BB.length, dB = new Uint32Array(Wy(TB)), VB = 0; VB < TB; VB += 8) dB[VB >> 5] |= (255 & BB[VB / 8]) << VB % 32;
        return dB
      }(BB), 8 * BB.length))
    }));
    var Ay = new Uint8Array(16);

    function by() {
      if (!Zy && !(Zy = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Zy(Ay)
    }

    function ny(BB, TB, dB) {
      var VB = (BB = BB || {}).random || (BB.rng || by)();
      if (VB[6] = 15 & VB[6] | 64, VB[8] = 63 & VB[8] | 128, TB) {
        dB = dB || 0;
        for (var yB = 0; yB < 16; ++yB) TB[dB + yB] = VB[yB];
        return TB
      }
      return ay(VB)
    }

    function ey(BB, TB, dB, VB) {
      switch (BB) {
        case 0:
          return TB & dB ^ ~TB & VB;
        case 1:
        case 3:
          return TB ^ dB ^ VB;
        case 2:
          return TB & dB ^ TB & VB ^ dB & VB
      }
    }

    function Bp(BB, TB) {
      return BB << TB | BB >>> 32 - TB
    }
    Xy("v5", 80, (function(BB) {
      var TB = [1518500249, 1859775393, 2400959708, 3395469782],
        dB = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof BB) {
        var VB = unescape(encodeURIComponent(BB));
        BB = [];
        for (var yB = 0; yB < VB.length; ++yB) BB.push(VB.charCodeAt(yB))
      } else Array.isArray(BB) || (BB = Array.prototype.slice.call(BB));
      BB.push(128);
      for (var pB = BB.length / 4 + 2, lB = Math.ceil(pB / 16), JB = new Array(lB), YB = 0; YB < lB; ++YB) {
        for (var gB = new Uint32Array(16), oB = 0; oB < 16; ++oB) gB[oB] = BB[64 * YB + 4 * oB] << 24 | BB[64 * YB + 4 * oB + 1] << 16 | BB[64 * YB + 4 * oB + 2] << 8 | BB[64 * YB + 4 * oB + 3];
        JB[YB] = gB
      }
      JB[lB - 1][14] = 8 * (BB.length - 1) / Math.pow(2, 32), JB[lB - 1][14] = Math.floor(JB[lB - 1][14]), JB[lB - 1][15] = 8 * (BB.length - 1) & 4294967295;
      for (var kB = 0; kB < lB; ++kB) {
        for (var LB = new Uint32Array(80), OB = 0; OB < 16; ++OB) LB[OB] = JB[kB][OB];
        for (var DB = 16; DB < 80; ++DB) LB[DB] = Bp(LB[DB - 3] ^ LB[DB - 8] ^ LB[DB - 14] ^ LB[DB - 16], 1);
        for (var uB = dB[0], HB = dB[1], EB = dB[2], vB = dB[3], mB = dB[4], iB = 0; iB < 80; ++iB) {
          var NB = Math.floor(iB / 20),
            tB = Bp(uB, 5) + ey(NB, HB, EB, vB) + mB + TB[NB] + LB[iB] >>> 0;
          mB = vB, vB = EB, EB = Bp(HB, 30) >>> 0, HB = uB, uB = tB
        }
        dB[0] = dB[0] + uB >>> 0, dB[1] = dB[1] + HB >>> 0, dB[2] = dB[2] + EB >>> 0, dB[3] = dB[3] + vB >>> 0, dB[4] = dB[4] + mB >>> 0
      }
      return [dB[0] >> 24 & 255, dB[0] >> 16 & 255, dB[0] >> 8 & 255, 255 & dB[0], dB[1] >> 24 & 255, dB[1] >> 16 & 255, dB[1] >> 8 & 255, 255 & dB[1], dB[2] >> 24 & 255, dB[2] >> 16 & 255, dB[2] >> 8 & 255, 255 & dB[2], dB[3] >> 24 & 255, dB[3] >> 16 & 255, dB[3] >> 8 & 255, 255 & dB[3], dB[4] >> 24 & 255, dB[4] >> 16 & 255, dB[4] >> 8 & 255, 255 & dB[4]]
    }));
    class Tp extends Error {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(TB), this.code = BB, this.message = TB, this.name = "Discord SDK Error"
      }
    }
    const dp = ["log", "warn", "debug", "info", "error"];
    var Vp;
    ! function(BB) {
      BB[BB.HANDSHAKE = 0] = "HANDSHAKE", BB[BB.FRAME = 1] = "FRAME", BB[BB.CLOSE = 2] = "CLOSE", BB[BB.HELLO = 3] = "HELLO"
    }(Vp || (Vp = {}));
    const yp = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class pp {
      getTransfer(BB) {
        var TB;
        switch (BB.cmd) {
          case Ad.SUBSCRIBE:
          case Ad.UNSUBSCRIBE:
            return;
          default:
            return null !== (TB = BB.transfer) && void 0 !== TB ? TB : void 0
        }
      }
      constructor(BB, TB) {
        var dB;
        if (this.eventBus = new gB, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = BB => {
            var TB;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const dB = ny();
            null === (TB = this.source) || void 0 === TB || TB.postMessage([Vp.FRAME, Object.assign(Object.assign({}, BB), {
              nonce: dB
            })], this.sourceOrigin, this.getTransfer(BB));
            return new Promise(((BB, TB) => {
              this.pendingCommands.set(dB, {
                resolve: BB,
                reject: TB
              })
            }))
          }, this.commands = (dB = this.sendCommand, {
            authenticate: Dy(dB),
            authorize: uy(dB),
            captureLog: Hy(dB),
            encourageHardwareAcceleration: Ey(dB),
            getChannel: Iy(dB),
            getChannelPermissions: iy(dB),
            getEntitlements: vy(dB),
            getPlatformBehaviors: Ny(dB),
            getSkus: my(dB),
            openExternalLink: ty(dB),
            openInviteDialog: fy(dB),
            openShareMomentDialog: sy(dB),
            setActivity: My(dB),
            setConfig: zy(dB),
            setOrientationLockState: Uy(dB),
            startPurchase: Fy(dB),
            userSettingsGetLocale: Ky(dB),
            initiateImageUpload: ry(dB),
            getInstanceConnectedParticipants: cy(dB)
          }), this.handleMessage = BB => {
            if (!yp.has(BB.origin)) return;
            const TB = BB.data;
            if (!Array.isArray(TB)) return;
            const [dB, VB] = TB;
            switch (dB) {
              case Vp.HELLO:
                return;
              case Vp.CLOSE:
                return this.handleClose(VB);
              case Vp.HANDSHAKE:
                return this.handleHandshake();
              case Vp.FRAME:
                return this.handleFrame(VB);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = BB, this.configuration = null !== TB && void 0 !== TB ? TB : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = Pd.DESKTOP, this.guildId = null, void(this.channelId = null);
        const VB = new URLSearchParams(this._getSearch()),
          yB = VB.get("frame_id");
        if (!yB) throw new Error("frame_id query param is not defined");
        this.frameId = yB;
        const pB = VB.get("instance_id");
        if (!pB) throw new Error("instance_id query param is not defined");
        this.instanceId = pB;
        const lB = VB.get("platform");
        if (!lB) throw new Error("platform query param is not defined");
        if (lB !== Pd.DESKTOP && lB !== Pd.MOBILE) throw new Error(`Invalid query param "platform" of "${lB}". Valid values are "${Pd.DESKTOP}" or "${Pd.MOBILE}"`);
        this.platform = lB, this.guildId = VB.get("guild_id"), this.channelId = VB.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var BB;
          return [null !== (BB = window.parent.opener) && void 0 !== BB ? BB : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(BB, TB) {
        var dB;
        window.removeEventListener("message", this.handleMessage);
        const VB = ny();
        null === (dB = this.source) || void 0 === dB || dB.postMessage([Vp.CLOSE, {
          code: BB,
          message: TB,
          nonce: VB
        }], this.sourceOrigin)
      }
      async subscribe(BB, TB) {
        for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
        const [pB] = VB, lB = this.eventBus.listenerCount(BB), JB = this.eventBus.on(BB, TB);
        return Object.values(SV).includes(BB) && BB !== SV.READY && 0 === lB && await this.sendCommand({
          cmd: Ad.SUBSCRIBE,
          args: pB,
          evt: BB
        }), JB
      }
      async unsubscribe(BB, TB) {
        for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
        const [pB] = VB;
        return BB !== SV.READY && 1 === this.eventBus.listenerCount(BB) && await this.sendCommand({
          cmd: Ad.UNSUBSCRIBE,
          evt: BB,
          args: pB
        }), this.eventBus.off(BB, TB)
      }
      async ready() {
        this.isReady || await new Promise((BB => {
          this.eventBus.once(SV.READY, BB)
        }))
      }
      handshake() {
        var BB;
        null === (BB = this.source) || void 0 === BB || BB.postMessage([Vp.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(SV.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const BB = (BB, TB) => {
          this.commands.captureLog({
            level: BB,
            message: TB
          })
        };
        dp.forEach((TB => {
          ! function(BB, TB, dB) {
            const VB = BB[TB],
              yB = BB;
            VB && (BB[TB] = function() {
              const BB = [].slice.call(arguments),
                pB = "" + BB.join(" ");
              dB(TB, pB), VB.apply(yB, BB)
            })
          }(console, TB, BB)
        }))
      }
      handleClose(BB) {
        gy.parse(BB)
      }
      handleHandshake() {}
      handleFrame(BB) {
        var TB, dB;
        let VB;
        try {
          VB = ky(BB)
        } catch (yB) {
          return console.error("Failed to parse", BB), void console.error(yB)
        }
        if ("DISPATCH" === VB.cmd) this.eventBus.emit(VB.evt, VB.data);
        else {
          if (VB.evt === cV) {
            if (null != VB.nonce) return null === (TB = this.pendingCommands.get(VB.nonce)) || void 0 === TB || TB.reject(VB.data), void this.pendingCommands.delete(VB.nonce);
            this.eventBus.emit("error", new Tp(VB.data.code, VB.data.message))
          }
          if (null == VB.nonce) return void console.error("Missing nonce", BB);
          null === (dB = this.pendingCommands.get(VB.nonce)) || void 0 === dB || dB.resolve(VB), this.pendingCommands.delete(VB.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var lp, Jp = 1e9,
      Yp = !0,
      gp = "[DecimalError] ",
      op = gp + "Invalid argument: ",
      kp = gp + "Exponent out of range: ",
      Lp = Math.floor,
      Op = Math.pow,
      Dp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Hp = 1e7,
      Ep = 9007199254740991,
      vp = Lp(1286742750677284.5),
      mp = {};

    function ip(BB, TB) {
      var dB, VB, yB, pB, lB, JB, YB, gB, oB = BB.constructor,
        kB = oB.precision;
      if (!BB.s || !TB.s) return TB.s || (TB = new oB(BB)), Yp ? Kp(TB, kB) : TB;
      if (YB = BB.d, gB = TB.d, lB = BB.e, yB = TB.e, YB = YB.slice(), pB = lB - yB) {
        for (pB < 0 ? (VB = YB, pB = -pB, JB = gB.length) : (VB = gB, yB = lB, JB = YB.length), pB > (JB = (lB = Math.ceil(kB / 7)) > JB ? lB + 1 : JB + 1) && (pB = JB, VB.length = 1), VB.reverse(); pB--;) VB.push(0);
        VB.reverse()
      }
      for ((JB = YB.length) - (pB = gB.length) < 0 && (pB = JB, VB = gB, gB = YB, YB = VB), dB = 0; pB;) dB = (YB[--pB] = YB[pB] + gB[pB] + dB) / Hp | 0, YB[pB] %= Hp;
      for (dB && (YB.unshift(dB), ++yB), JB = YB.length; 0 == YB[--JB];) YB.pop();
      return TB.d = YB, TB.e = yB, Yp ? Kp(TB, kB) : TB
    }

    function Np(BB, TB, dB) {
      if (BB !== ~~BB || BB < TB || BB > dB) throw Error(op + BB)
    }

    function tp(BB) {
      var TB, dB, VB, yB = BB.length - 1,
        pB = "",
        lB = BB[0];
      if (yB > 0) {
        for (pB += lB, TB = 1; TB < yB; TB++)(dB = 7 - (VB = BB[TB] + "").length) && (pB += wp(dB)), pB += VB;
        (dB = 7 - (VB = (lB = BB[TB]) + "").length) && (pB += wp(dB))
      } else if (0 === lB) return "0";
      for (; lB % 10 === 0;) lB /= 10;
      return pB + lB
    }
    mp.absoluteValue = mp.abs = function() {
      var BB = new this.constructor(this);
      return BB.s && (BB.s = 1), BB
    }, mp.comparedTo = mp.cmp = function(BB) {
      var TB, dB, VB, yB, pB = this;
      if (BB = new pB.constructor(BB), pB.s !== BB.s) return pB.s || -BB.s;
      if (pB.e !== BB.e) return pB.e > BB.e ^ pB.s < 0 ? 1 : -1;
      for (TB = 0, dB = (VB = pB.d.length) < (yB = BB.d.length) ? VB : yB; TB < dB; ++TB)
        if (pB.d[TB] !== BB.d[TB]) return pB.d[TB] > BB.d[TB] ^ pB.s < 0 ? 1 : -1;
      return VB === yB ? 0 : VB > yB ^ pB.s < 0 ? 1 : -1
    }, mp.decimalPlaces = mp.dp = function() {
      var BB = this,
        TB = BB.d.length - 1,
        dB = 7 * (TB - BB.e);
      if (TB = BB.d[TB])
        for (; TB % 10 == 0; TB /= 10) dB--;
      return dB < 0 ? 0 : dB
    }, mp.dividedBy = mp.div = function(BB) {
      return fp(this, new this.constructor(BB))
    }, mp.dividedToIntegerBy = mp.idiv = function(BB) {
      var TB = this.constructor;
      return Kp(fp(this, new TB(BB), 0, 1), TB.precision)
    }, mp.equals = mp.eq = function(BB) {
      return !this.cmp(BB)
    }, mp.exponent = function() {
      return Mp(this)
    }, mp.greaterThan = mp.gt = function(BB) {
      return this.cmp(BB) > 0
    }, mp.greaterThanOrEqualTo = mp.gte = function(BB) {
      return this.cmp(BB) >= 0
    }, mp.isInteger = mp.isint = function() {
      return this.e > this.d.length - 2
    }, mp.isNegative = mp.isneg = function() {
      return this.s < 0
    }, mp.isPositive = mp.ispos = function() {
      return this.s > 0
    }, mp.isZero = function() {
      return 0 === this.s
    }, mp.lessThan = mp.lt = function(BB) {
      return this.cmp(BB) < 0
    }, mp.lessThanOrEqualTo = mp.lte = function(BB) {
      return this.cmp(BB) < 1
    }, mp.logarithm = mp.log = function(BB) {
      var TB, dB = this,
        VB = dB.constructor,
        yB = VB.precision,
        pB = yB + 5;
      if (void 0 === BB) BB = new VB(10);
      else if ((BB = new VB(BB)).s < 1 || BB.eq(lp)) throw Error(gp + "NaN");
      if (dB.s < 1) throw Error(gp + (dB.s ? "NaN" : "-Infinity"));
      return dB.eq(lp) ? new VB(0) : (Yp = !1, TB = fp(Up(dB, pB), Up(BB, pB), pB), Yp = !0, Kp(TB, yB))
    }, mp.minus = mp.sub = function(BB) {
      var TB = this;
      return BB = new TB.constructor(BB), TB.s == BB.s ? rp(TB, BB) : ip(TB, (BB.s = -BB.s, BB))
    }, mp.modulo = mp.mod = function(BB) {
      var TB, dB = this,
        VB = dB.constructor,
        yB = VB.precision;
      if (!(BB = new VB(BB)).s) throw Error(gp + "NaN");
      return dB.s ? (Yp = !1, TB = fp(dB, BB, 0, 1).times(BB), Yp = !0, dB.minus(TB)) : Kp(new VB(dB), yB)
    }, mp.naturalExponential = mp.exp = function() {
      return sp(this)
    }, mp.naturalLogarithm = mp.ln = function() {
      return Up(this)
    }, mp.negated = mp.neg = function() {
      var BB = new this.constructor(this);
      return BB.s = -BB.s || 0, BB
    }, mp.plus = mp.add = function(BB) {
      var TB = this;
      return BB = new TB.constructor(BB), TB.s == BB.s ? ip(TB, BB) : rp(TB, (BB.s = -BB.s, BB))
    }, mp.precision = mp.sd = function(BB) {
      var TB, dB, VB, yB = this;
      if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(op + BB);
      if (TB = Mp(yB) + 1, dB = 7 * (VB = yB.d.length - 1) + 1, VB = yB.d[VB]) {
        for (; VB % 10 == 0; VB /= 10) dB--;
        for (VB = yB.d[0]; VB >= 10; VB /= 10) dB++
      }
      return BB && TB > dB ? TB : dB
    }, mp.squareRoot = mp.sqrt = function() {
      var BB, TB, dB, VB, yB, pB, lB, JB = this,
        YB = JB.constructor;
      if (JB.s < 1) {
        if (!JB.s) return new YB(0);
        throw Error(gp + "NaN")
      }
      for (BB = Mp(JB), Yp = !1, 0 == (yB = Math.sqrt(+JB)) || yB == 1 / 0 ? (((TB = tp(JB.d)).length + BB) % 2 == 0 && (TB += "0"), yB = Math.sqrt(TB), BB = Lp((BB + 1) / 2) - (BB < 0 || BB % 2), VB = new YB(TB = yB == 1 / 0 ? "1e" + BB : (TB = yB.toExponential()).slice(0, TB.indexOf("e") + 1) + BB)) : VB = new YB(yB.toString()), yB = lB = (dB = YB.precision) + 3;;)
        if (VB = (pB = VB).plus(fp(JB, pB, lB + 2)).times(.5), tp(pB.d).slice(0, lB) === (TB = tp(VB.d)).slice(0, lB)) {
          if (TB = TB.slice(lB - 3, lB + 1), yB == lB && "4999" == TB) {
            if (Kp(pB, dB + 1, 0), pB.times(pB).eq(JB)) {
              VB = pB;
              break
            }
          } else if ("9999" != TB) break;
          lB += 4
        } return Yp = !0, Kp(VB, dB)
    }, mp.times = mp.mul = function(BB) {
      var TB, dB, VB, yB, pB, lB, JB, YB, gB, oB = this,
        kB = oB.constructor,
        LB = oB.d,
        OB = (BB = new kB(BB)).d;
      if (!oB.s || !BB.s) return new kB(0);
      for (BB.s *= oB.s, dB = oB.e + BB.e, (YB = LB.length) < (gB = OB.length) && (pB = LB, LB = OB, OB = pB, lB = YB, YB = gB, gB = lB), pB = [], VB = lB = YB + gB; VB--;) pB.push(0);
      for (VB = gB; --VB >= 0;) {
        for (TB = 0, yB = YB + VB; yB > VB;) JB = pB[yB] + OB[VB] * LB[yB - VB - 1] + TB, pB[yB--] = JB % Hp | 0, TB = JB / Hp | 0;
        pB[yB] = (pB[yB] + TB) % Hp | 0
      }
      for (; !pB[--lB];) pB.pop();
      return TB ? ++dB : pB.shift(), BB.d = pB, BB.e = dB, Yp ? Kp(BB, kB.precision) : BB
    }, mp.toDecimalPlaces = mp.todp = function(BB, TB) {
      var dB = this,
        VB = dB.constructor;
      return dB = new VB(dB), void 0 === BB ? dB : (Np(BB, 0, Jp), void 0 === TB ? TB = VB.rounding : Np(TB, 0, 8), Kp(dB, BB + Mp(dB) + 1, TB))
    }, mp.toExponential = function(BB, TB) {
      var dB, VB = this,
        yB = VB.constructor;
      return void 0 === BB ? dB = Ip(VB, !0) : (Np(BB, 0, Jp), void 0 === TB ? TB = yB.rounding : Np(TB, 0, 8), dB = Ip(VB = Kp(new yB(VB), BB + 1, TB), !0, BB + 1)), dB
    }, mp.toFixed = function(BB, TB) {
      var dB, VB, yB = this,
        pB = yB.constructor;
      return void 0 === BB ? Ip(yB) : (Np(BB, 0, Jp), void 0 === TB ? TB = pB.rounding : Np(TB, 0, 8), dB = Ip((VB = Kp(new pB(yB), BB + Mp(yB) + 1, TB)).abs(), !1, BB + Mp(VB) + 1), yB.isneg() && !yB.isZero() ? "-" + dB : dB)
    }, mp.toInteger = mp.toint = function() {
      var BB = this,
        TB = BB.constructor;
      return Kp(new TB(BB), Mp(BB) + 1, TB.rounding)
    }, mp.toNumber = function() {
      return +this
    }, mp.toPower = mp.pow = function(BB) {
      var TB, dB, VB, yB, pB, lB, JB = this,
        YB = JB.constructor,
        gB = +(BB = new YB(BB));
      if (!BB.s) return new YB(lp);
      if (!(JB = new YB(JB)).s) {
        if (BB.s < 1) throw Error(gp + "Infinity");
        return JB
      }
      if (JB.eq(lp)) return JB;
      if (VB = YB.precision, BB.eq(lp)) return Kp(JB, VB);
      if (lB = (TB = BB.e) >= (dB = BB.d.length - 1), pB = JB.s, lB) {
        if ((dB = gB < 0 ? -gB : gB) <= Ep) {
          for (yB = new YB(lp), TB = Math.ceil(VB / 7 + 4), Yp = !1; dB % 2 && cp((yB = yB.times(JB)).d, TB), 0 !== (dB = Lp(dB / 2));) cp((JB = JB.times(JB)).d, TB);
          return Yp = !0, BB.s < 0 ? new YB(lp).div(yB) : Kp(yB, VB)
        }
      } else if (pB < 0) throw Error(gp + "NaN");
      return pB = pB < 0 && 1 & BB.d[Math.max(TB, dB)] ? -1 : 1, JB.s = 1, Yp = !1, yB = BB.times(Up(JB, VB + 12)), Yp = !0, (yB = sp(yB)).s = pB, yB
    }, mp.toPrecision = function(BB, TB) {
      var dB, VB, yB = this,
        pB = yB.constructor;
      return void 0 === BB ? VB = Ip(yB, (dB = Mp(yB)) <= pB.toExpNeg || dB >= pB.toExpPos) : (Np(BB, 1, Jp), void 0 === TB ? TB = pB.rounding : Np(TB, 0, 8), VB = Ip(yB = Kp(new pB(yB), BB, TB), BB <= (dB = Mp(yB)) || dB <= pB.toExpNeg, BB)), VB
    }, mp.toSignificantDigits = mp.tosd = function(BB, TB) {
      var dB = this.constructor;
      return void 0 === BB ? (BB = dB.precision, TB = dB.rounding) : (Np(BB, 1, Jp), void 0 === TB ? TB = dB.rounding : Np(TB, 0, 8)), Kp(new dB(this), BB, TB)
    }, mp.toString = mp.valueOf = mp.val = mp.toJSON = mp[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var BB = this,
        TB = Mp(BB),
        dB = BB.constructor;
      return Ip(BB, TB <= dB.toExpNeg || TB >= dB.toExpPos)
    };
    var fp = function() {
      function BB(BB, TB) {
        var dB, VB = 0,
          yB = BB.length;
        for (BB = BB.slice(); yB--;) dB = BB[yB] * TB + VB, BB[yB] = dB % Hp | 0, VB = dB / Hp | 0;
        return VB && BB.unshift(VB), BB
      }

      function TB(BB, TB, dB, VB) {
        var yB, pB;
        if (dB != VB) pB = dB > VB ? 1 : -1;
        else
          for (yB = pB = 0; yB < dB; yB++)
            if (BB[yB] != TB[yB]) {
              pB = BB[yB] > TB[yB] ? 1 : -1;
              break
            } return pB
      }

      function dB(BB, TB, dB) {
        for (var VB = 0; dB--;) BB[dB] -= VB, VB = BB[dB] < TB[dB] ? 1 : 0, BB[dB] = VB * Hp + BB[dB] - TB[dB];
        for (; !BB[0] && BB.length > 1;) BB.shift()
      }
      return function(VB, yB, pB, lB) {
        var JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, MB = VB.constructor,
          zB = VB.s == yB.s ? 1 : -1,
          wB = VB.d,
          UB = yB.d;
        if (!VB.s) return new MB(VB);
        if (!yB.s) throw Error(gp + "Division by zero");
        for (YB = VB.e - yB.e, fB = UB.length, NB = wB.length, DB = (OB = new MB(zB)).d = [], gB = 0; UB[gB] == (wB[gB] || 0);) ++gB;
        if (UB[gB] > (wB[gB] || 0) && --YB, (vB = null == pB ? pB = MB.precision : lB ? pB + (Mp(VB) - Mp(yB)) + 1 : pB) < 0) return new MB(0);
        if (vB = vB / 7 + 2 | 0, gB = 0, 1 == fB)
          for (oB = 0, UB = UB[0], vB++;
            (gB < NB || oB) && vB--; gB++) mB = oB * Hp + (wB[gB] || 0), DB[gB] = mB / UB | 0, oB = mB % UB | 0;
        else {
          for ((oB = Hp / (UB[0] + 1) | 0) > 1 && (UB = BB(UB, oB), wB = BB(wB, oB), fB = UB.length, NB = wB.length), iB = fB, HB = (uB = wB.slice(0, fB)).length; HB < fB;) uB[HB++] = 0;
          (sB = UB.slice()).unshift(0), tB = UB[0], UB[1] >= Hp / 2 && ++tB;
          do {
            oB = 0, (JB = TB(UB, uB, fB, HB)) < 0 ? (EB = uB[0], fB != HB && (EB = EB * Hp + (uB[1] || 0)), (oB = EB / tB | 0) > 1 ? (oB >= Hp && (oB = Hp - 1), 1 == (JB = TB(kB = BB(UB, oB), uB, LB = kB.length, HB = uB.length)) && (oB--, dB(kB, fB < LB ? sB : UB, LB))) : (0 == oB && (JB = oB = 1), kB = UB.slice()), (LB = kB.length) < HB && kB.unshift(0), dB(uB, kB, HB), -1 == JB && (JB = TB(UB, uB, fB, HB = uB.length)) < 1 && (oB++, dB(uB, fB < HB ? sB : UB, HB)), HB = uB.length) : 0 === JB && (oB++, uB = [0]), DB[gB++] = oB, JB && uB[0] ? uB[HB++] = wB[iB] || 0 : (uB = [wB[iB]], HB = 1)
          } while ((iB++ < NB || void 0 !== uB[0]) && vB--)
        }
        return DB[0] || DB.shift(), OB.e = YB, Kp(OB, lB ? pB + Mp(OB) + 1 : pB)
      }
    }();

    function sp(BB, TB) {
      var dB, VB, yB, pB, lB, JB = 0,
        YB = 0,
        gB = BB.constructor,
        oB = gB.precision;
      if (Mp(BB) > 16) throw Error(kp + Mp(BB));
      if (!BB.s) return new gB(lp);
      for (null == TB ? (Yp = !1, lB = oB) : lB = TB, pB = new gB(.03125); BB.abs().gte(.1);) BB = BB.times(pB), YB += 5;
      for (lB += Math.log(Op(2, YB)) / Math.LN10 * 2 + 5 | 0, dB = VB = yB = new gB(lp), gB.precision = lB;;) {
        if (VB = Kp(VB.times(BB), lB), dB = dB.times(++JB), tp((pB = yB.plus(fp(VB, dB, lB))).d).slice(0, lB) === tp(yB.d).slice(0, lB)) {
          for (; YB--;) yB = Kp(yB.times(yB), lB);
          return gB.precision = oB, null == TB ? (Yp = !0, Kp(yB, oB)) : yB
        }
        yB = pB
      }
    }

    function Mp(BB) {
      for (var TB = 7 * BB.e, dB = BB.d[0]; dB >= 10; dB /= 10) TB++;
      return TB
    }

    function zp(BB, TB, dB) {
      if (TB > BB.LN10.sd()) throw Yp = !0, dB && (BB.precision = dB), Error(gp + "LN10 precision limit exceeded");
      return Kp(new BB(BB.LN10), TB)
    }

    function wp(BB) {
      for (var TB = ""; BB--;) TB += "0";
      return TB
    }

    function Up(BB, TB) {
      var dB, VB, yB, pB, lB, JB, YB, gB, oB, kB = 1,
        LB = BB,
        OB = LB.d,
        DB = LB.constructor,
        uB = DB.precision;
      if (LB.s < 1) throw Error(gp + (LB.s ? "NaN" : "-Infinity"));
      if (LB.eq(lp)) return new DB(0);
      if (null == TB ? (Yp = !1, gB = uB) : gB = TB, LB.eq(10)) return null == TB && (Yp = !0), zp(DB, gB);
      if (gB += 10, DB.precision = gB, VB = (dB = tp(OB)).charAt(0), pB = Mp(LB), !(Math.abs(pB) < 15e14)) return YB = zp(DB, gB + 2, uB).times(pB + ""), LB = Up(new DB(VB + "." + dB.slice(1)), gB - 10).plus(YB), DB.precision = uB, null == TB ? (Yp = !0, Kp(LB, uB)) : LB;
      for (; VB < 7 && 1 != VB || 1 == VB && dB.charAt(1) > 3;) VB = (dB = tp((LB = LB.times(BB)).d)).charAt(0), kB++;
      for (pB = Mp(LB), VB > 1 ? (LB = new DB("0." + dB), pB++) : LB = new DB(VB + "." + dB.slice(1)), JB = lB = LB = fp(LB.minus(lp), LB.plus(lp), gB), oB = Kp(LB.times(LB), gB), yB = 3;;) {
        if (lB = Kp(lB.times(oB), gB), tp((YB = JB.plus(fp(lB, new DB(yB), gB))).d).slice(0, gB) === tp(JB.d).slice(0, gB)) return JB = JB.times(2), 0 !== pB && (JB = JB.plus(zp(DB, gB + 2, uB).times(pB + ""))), JB = fp(JB, new DB(kB), gB), DB.precision = uB, null == TB ? (Yp = !0, Kp(JB, uB)) : JB;
        JB = YB, yB += 2
      }
    }

    function Fp(BB, TB) {
      var dB, VB, yB;
      for ((dB = TB.indexOf(".")) > -1 && (TB = TB.replace(".", "")), (VB = TB.search(/e/i)) > 0 ? (dB < 0 && (dB = VB), dB += +TB.slice(VB + 1), TB = TB.substring(0, VB)) : dB < 0 && (dB = TB.length), VB = 0; 48 === TB.charCodeAt(VB);) ++VB;
      for (yB = TB.length; 48 === TB.charCodeAt(yB - 1);) --yB;
      if (TB = TB.slice(VB, yB)) {
        if (yB -= VB, dB = dB - VB - 1, BB.e = Lp(dB / 7), BB.d = [], VB = (dB + 1) % 7, dB < 0 && (VB += 7), VB < yB) {
          for (VB && BB.d.push(+TB.slice(0, VB)), yB -= 7; VB < yB;) BB.d.push(+TB.slice(VB, VB += 7));
          VB = 7 - (TB = TB.slice(VB)).length
        } else VB -= yB;
        for (; VB--;) TB += "0";
        if (BB.d.push(+TB), Yp && (BB.e > vp || BB.e < -vp)) throw Error(kp + dB)
      } else BB.s = 0, BB.e = 0, BB.d = [0];
      return BB
    }

    function Kp(BB, TB, dB) {
      var VB, yB, pB, lB, JB, YB, gB, oB, kB = BB.d;
      for (lB = 1, pB = kB[0]; pB >= 10; pB /= 10) lB++;
      if ((VB = TB - lB) < 0) VB += 7, yB = TB, gB = kB[oB = 0];
      else {
        if ((oB = Math.ceil((VB + 1) / 7)) >= (pB = kB.length)) return BB;
        for (gB = pB = kB[oB], lB = 1; pB >= 10; pB /= 10) lB++;
        yB = (VB %= 7) - 7 + lB
      }
      if (void 0 !== dB && (JB = gB / (pB = Op(10, lB - yB - 1)) % 10 | 0, YB = TB < 0 || void 0 !== kB[oB + 1] || gB % pB, YB = dB < 4 ? (JB || YB) && (0 == dB || dB == (BB.s < 0 ? 3 : 2)) : JB > 5 || 5 == JB && (4 == dB || YB || 6 == dB && (VB > 0 ? yB > 0 ? gB / Op(10, lB - yB) : 0 : kB[oB - 1]) % 10 & 1 || dB == (BB.s < 0 ? 8 : 7))), TB < 1 || !kB[0]) return YB ? (pB = Mp(BB), kB.length = 1, TB = TB - pB - 1, kB[0] = Op(10, (7 - TB % 7) % 7), BB.e = Lp(-TB / 7) || 0) : (kB.length = 1, kB[0] = BB.e = BB.s = 0), BB;
      if (0 == VB ? (kB.length = oB, pB = 1, oB--) : (kB.length = oB + 1, pB = Op(10, 7 - VB), kB[oB] = yB > 0 ? (gB / Op(10, lB - yB) % Op(10, yB) | 0) * pB : 0), YB)
        for (;;) {
          if (0 == oB) {
            (kB[0] += pB) == Hp && (kB[0] = 1, ++BB.e);
            break
          }
          if (kB[oB] += pB, kB[oB] != Hp) break;
          kB[oB--] = 0, pB = 1
        }
      for (VB = kB.length; 0 === kB[--VB];) kB.pop();
      if (Yp && (BB.e > vp || BB.e < -vp)) throw Error(kp + Mp(BB));
      return BB
    }

    function rp(BB, TB) {
      var dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB = BB.constructor,
        OB = LB.precision;
      if (!BB.s || !TB.s) return TB.s ? TB.s = -TB.s : TB = new LB(BB), Yp ? Kp(TB, OB) : TB;
      if (YB = BB.d, kB = TB.d, VB = TB.e, gB = BB.e, YB = YB.slice(), lB = gB - VB) {
        for ((oB = lB < 0) ? (dB = YB, lB = -lB, JB = kB.length) : (dB = kB, VB = gB, JB = YB.length), lB > (yB = Math.max(Math.ceil(OB / 7), JB) + 2) && (lB = yB, dB.length = 1), dB.reverse(), yB = lB; yB--;) dB.push(0);
        dB.reverse()
      } else {
        for ((oB = (yB = YB.length) < (JB = kB.length)) && (JB = yB), yB = 0; yB < JB; yB++)
          if (YB[yB] != kB[yB]) {
            oB = YB[yB] < kB[yB];
            break
          } lB = 0
      }
      for (oB && (dB = YB, YB = kB, kB = dB, TB.s = -TB.s), JB = YB.length, yB = kB.length - JB; yB > 0; --yB) YB[JB++] = 0;
      for (yB = kB.length; yB > lB;) {
        if (YB[--yB] < kB[yB]) {
          for (pB = yB; pB && 0 === YB[--pB];) YB[pB] = Hp - 1;
          --YB[pB], YB[yB] += Hp
        }
        YB[yB] -= kB[yB]
      }
      for (; 0 === YB[--JB];) YB.pop();
      for (; 0 === YB[0]; YB.shift()) --VB;
      return YB[0] ? (TB.d = YB, TB.e = VB, Yp ? Kp(TB, OB) : TB) : new LB(0)
    }

    function Ip(BB, TB, dB) {
      var VB, yB = Mp(BB),
        pB = tp(BB.d),
        lB = pB.length;
      return TB ? (dB && (VB = dB - lB) > 0 ? pB = pB.charAt(0) + "." + pB.slice(1) + wp(VB) : lB > 1 && (pB = pB.charAt(0) + "." + pB.slice(1)), pB = pB + (yB < 0 ? "e" : "e+") + yB) : yB < 0 ? (pB = "0." + wp(-yB - 1) + pB, dB && (VB = dB - lB) > 0 && (pB += wp(VB))) : yB >= lB ? (pB += wp(yB + 1 - lB), dB && (VB = dB - yB - 1) > 0 && (pB = pB + "." + wp(VB))) : ((VB = yB + 1) < lB && (pB = pB.slice(0, VB) + "." + pB.slice(VB)), dB && (VB = dB - lB) > 0 && (yB + 1 === lB && (pB += "."), pB += wp(VB))), BB.s < 0 ? "-" + pB : pB
    }

    function cp(BB, TB) {
      if (BB.length > TB) return BB.length = TB, !0
    }

    function Sp(BB) {
      if (!BB || "object" !== typeof BB) throw Error(gp + "Object expected");
      var TB, dB, VB, yB = ["precision", 1, Jp, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (TB = 0; TB < yB.length; TB += 3)
        if (void 0 !== (VB = BB[dB = yB[TB]])) {
          if (!(Lp(VB) === VB && VB >= yB[TB + 1] && VB <= yB[TB + 2])) throw Error(op + dB + ": " + VB);
          this[dB] = VB
        } if (void 0 !== (VB = BB[dB = "LN10"])) {
        if (VB != Math.LN10) throw Error(op + dB + ": " + VB);
        this[dB] = new this(VB)
      }
      return this
    }
    var Pp = function BB(TB) {
      var dB, VB, yB;

      function pB(BB) {
        var TB = this;
        if (!(TB instanceof pB)) return new pB(BB);
        if (TB.constructor = pB, BB instanceof pB) return TB.s = BB.s, TB.e = BB.e, void(TB.d = (BB = BB.d) ? BB.slice() : BB);
        if ("number" === typeof BB) {
          if (0 * BB !== 0) throw Error(op + BB);
          if (BB > 0) TB.s = 1;
          else {
            if (!(BB < 0)) return TB.s = 0, TB.e = 0, void(TB.d = [0]);
            BB = -BB, TB.s = -1
          }
          return BB === ~~BB && BB < 1e7 ? (TB.e = 0, void(TB.d = [BB])) : Fp(TB, BB.toString())
        }
        if ("string" !== typeof BB) throw Error(op + BB);
        if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), TB.s = -1) : TB.s = 1, !Dp.test(BB)) throw Error(op + BB);
        Fp(TB, BB)
      }
      if (pB.prototype = mp, pB.ROUND_UP = 0, pB.ROUND_DOWN = 1, pB.ROUND_CEIL = 2, pB.ROUND_FLOOR = 3, pB.ROUND_HALF_UP = 4, pB.ROUND_HALF_DOWN = 5, pB.ROUND_HALF_EVEN = 6, pB.ROUND_HALF_CEIL = 7, pB.ROUND_HALF_FLOOR = 8, pB.clone = BB, pB.config = pB.set = Sp, void 0 === TB && (TB = {}), TB)
        for (yB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], dB = 0; dB < yB.length;) TB.hasOwnProperty(VB = yB[dB++]) || (TB[VB] = this[VB]);
      return pB.config(TB), pB
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    lp = new Pp(1);
    var Qp;
    ! function(BB) {
      BB.AED = "aed", BB.AFN = "afn", BB.ALL = "all", BB.AMD = "amd", BB.ANG = "ang", BB.AOA = "aoa", BB.ARS = "ars", BB.AUD = "aud", BB.AWG = "awg", BB.AZN = "azn", BB.BAM = "bam", BB.BBD = "bbd", BB.BDT = "bdt", BB.BGN = "bgn", BB.BHD = "bhd", BB.BIF = "bif", BB.BMD = "bmd", BB.BND = "bnd", BB.BOB = "bob", BB.BOV = "bov", BB.BRL = "brl", BB.BSD = "bsd", BB.BTN = "btn", BB.BWP = "bwp", BB.BYN = "byn", BB.BYR = "byr", BB.BZD = "bzd", BB.CAD = "cad", BB.CDF = "cdf", BB.CHE = "che", BB.CHF = "chf", BB.CHW = "chw", BB.CLF = "clf", BB.CLP = "clp", BB.CNY = "cny", BB.COP = "cop", BB.COU = "cou", BB.CRC = "crc", BB.CUC = "cuc", BB.CUP = "cup", BB.CVE = "cve", BB.CZK = "czk", BB.DJF = "djf", BB.DKK = "dkk", BB.DOP = "dop", BB.DZD = "dzd", BB.EGP = "egp", BB.ERN = "ern", BB.ETB = "etb", BB.EUR = "eur", BB.FJD = "fjd", BB.FKP = "fkp", BB.GBP = "gbp", BB.GEL = "gel", BB.GHS = "ghs", BB.GIP = "gip", BB.GMD = "gmd", BB.GNF = "gnf", BB.GTQ = "gtq", BB.GYD = "gyd", BB.HKD = "hkd", BB.HNL = "hnl", BB.HRK = "hrk", BB.HTG = "htg", BB.HUF = "huf", BB.IDR = "idr", BB.ILS = "ils", BB.INR = "inr", BB.IQD = "iqd", BB.IRR = "irr", BB.ISK = "isk", BB.JMD = "jmd", BB.JOD = "jod", BB.JPY = "jpy", BB.KES = "kes", BB.KGS = "kgs", BB.KHR = "khr", BB.KMF = "kmf", BB.KPW = "kpw", BB.KRW = "krw", BB.KWD = "kwd", BB.KYD = "kyd", BB.KZT = "kzt", BB.LAK = "lak", BB.LBP = "lbp", BB.LKR = "lkr", BB.LRD = "lrd", BB.LSL = "lsl", BB.LTL = "ltl", BB.LVL = "lvl", BB.LYD = "lyd", BB.MAD = "mad", BB.MDL = "mdl", BB.MGA = "mga", BB.MKD = "mkd", BB.MMK = "mmk", BB.MNT = "mnt", BB.MOP = "mop", BB.MRO = "mro", BB.MUR = "mur", BB.MVR = "mvr", BB.MWK = "mwk", BB.MXN = "mxn", BB.MXV = "mxv", BB.MYR = "myr", BB.MZN = "mzn", BB.NAD = "nad", BB.NGN = "ngn", BB.NIO = "nio", BB.NOK = "nok", BB.NPR = "npr", BB.NZD = "nzd", BB.OMR = "omr", BB.PAB = "pab", BB.PEN = "pen", BB.PGK = "pgk", BB.PHP = "php", BB.PKR = "pkr", BB.PLN = "pln", BB.PYG = "pyg", BB.QAR = "qar", BB.RON = "ron", BB.RSD = "rsd", BB.RUB = "rub", BB.RWF = "rwf", BB.SAR = "sar", BB.SBD = "sbd", BB.SCR = "scr", BB.SDG = "sdg", BB.SEK = "sek", BB.SGD = "sgd", BB.SHP = "shp", BB.SLL = "sll", BB.SOS = "sos", BB.SRD = "srd", BB.SSP = "ssp", BB.STD = "std", BB.SVC = "svc", BB.SYP = "syp", BB.SZL = "szl", BB.THB = "thb", BB.TJS = "tjs", BB.TMT = "tmt", BB.TND = "tnd", BB.TOP = "top", BB.TRY = "try", BB.TTD = "ttd", BB.TWD = "twd", BB.TZS = "tzs", BB.UAH = "uah", BB.UGX = "ugx", BB.USD = "usd", BB.USN = "usn", BB.USS = "uss", BB.UYI = "uyi", BB.UYU = "uyu", BB.UZS = "uzs", BB.VEF = "vef", BB.VND = "vnd", BB.VUV = "vuv", BB.WST = "wst", BB.XAF = "xaf", BB.XAG = "xag", BB.XAU = "xau", BB.XBA = "xba", BB.XBB = "xbb", BB.XBC = "xbc", BB.XBD = "xbd", BB.XCD = "xcd", BB.XDR = "xdr", BB.XFU = "xfu", BB.XOF = "xof", BB.XPD = "xpd", BB.XPF = "xpf", BB.XPT = "xpt", BB.XSU = "xsu", BB.XTS = "xts", BB.XUA = "xua", BB.YER = "yer", BB.ZAR = "zar", BB.ZMW = "zmw", BB.ZWL = "zwl"
    }(Qp || (Qp = {}));
    Qp.AED, Qp.AFN, Qp.ALL, Qp.AMD, Qp.ANG, Qp.AOA, Qp.ARS, Qp.AUD, Qp.AWG, Qp.AZN, Qp.BAM, Qp.BBD, Qp.BDT, Qp.BGN, Qp.BHD, Qp.BIF, Qp.BMD, Qp.BND, Qp.BOB, Qp.BOV, Qp.BRL, Qp.BSD, Qp.BTN, Qp.BWP, Qp.BYR, Qp.BYN, Qp.BZD, Qp.CAD, Qp.CDF, Qp.CHE, Qp.CHF, Qp.CHW, Qp.CLF, Qp.CLP, Qp.CNY, Qp.COP, Qp.COU, Qp.CRC, Qp.CUC, Qp.CUP, Qp.CVE, Qp.CZK, Qp.DJF, Qp.DKK, Qp.DOP, Qp.DZD, Qp.EGP, Qp.ERN, Qp.ETB, Qp.EUR, Qp.FJD, Qp.FKP, Qp.GBP, Qp.GEL, Qp.GHS, Qp.GIP, Qp.GMD, Qp.GNF, Qp.GTQ, Qp.GYD, Qp.HKD, Qp.HNL, Qp.HRK, Qp.HTG, Qp.HUF, Qp.IDR, Qp.ILS, Qp.INR, Qp.IQD, Qp.IRR, Qp.ISK, Qp.JMD, Qp.JOD, Qp.JPY, Qp.KES, Qp.KGS, Qp.KHR, Qp.KMF, Qp.KPW, Qp.KRW, Qp.KWD, Qp.KYD, Qp.KZT, Qp.LAK, Qp.LBP, Qp.LKR, Qp.LRD, Qp.LSL, Qp.LTL, Qp.LVL, Qp.LYD, Qp.MAD, Qp.MDL, Qp.MGA, Qp.MKD, Qp.MMK, Qp.MNT, Qp.MOP, Qp.MRO, Qp.MUR, Qp.MVR, Qp.MWK, Qp.MXN, Qp.MXV, Qp.MYR, Qp.MZN, Qp.NAD, Qp.NGN, Qp.NIO, Qp.NOK, Qp.NPR, Qp.NZD, Qp.OMR, Qp.PAB, Qp.PEN, Qp.PGK, Qp.PHP, Qp.PKR, Qp.PLN, Qp.PYG, Qp.QAR, Qp.RON, Qp.RSD, Qp.RUB, Qp.RWF, Qp.SAR, Qp.SBD, Qp.SCR, Qp.SDG, Qp.SEK, Qp.SGD, Qp.SHP, Qp.SLL, Qp.SOS, Qp.SRD, Qp.SSP, Qp.STD, Qp.SVC, Qp.SYP, Qp.SZL, Qp.THB, Qp.TJS, Qp.TMT, Qp.TND, Qp.TOP, Qp.TRY, Qp.TTD, Qp.TWD, Qp.TZS, Qp.UAH, Qp.UGX, Qp.USD, Qp.USN, Qp.USS, Qp.UYI, Qp.UYU, Qp.UZS, Qp.VEF, Qp.VND, Qp.VUV, Qp.WST, Qp.XAF, Qp.XAG, Qp.XAU, Qp.XBA, Qp.XBB, Qp.XBC, Qp.XBD, Qp.XCD, Qp.XDR, Qp.XFU, Qp.XOF, Qp.XPD, Qp.XPF, Qp.XPT, Qp.XSU, Qp.XTS, Qp.XUA, Qp.YER, Qp.ZAR, Qp.ZMW, Qp.ZWL;
    var Rp = {
      exports: {}
    };
    ! function(BB, TB) {
      var dB = "__lodash_hash_undefined__",
        VB = 9007199254740991,
        pB = "[object Arguments]",
        lB = "[object Array]",
        JB = "[object Boolean]",
        YB = "[object Date]",
        gB = "[object Error]",
        oB = "[object Function]",
        kB = "[object Map]",
        LB = "[object Number]",
        OB = "[object Object]",
        DB = "[object Promise]",
        uB = "[object RegExp]",
        HB = "[object Set]",
        EB = "[object String]",
        vB = "[object Symbol]",
        mB = "[object WeakMap]",
        iB = "[object ArrayBuffer]",
        NB = "[object DataView]",
        tB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        fB = /^\w*$/,
        sB = /^\./,
        MB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        zB = /\\(\\)?/g,
        wB = /^\[object .+?Constructor\]$/,
        UB = /^(?:0|[1-9]\d*)$/,
        FB = {};
      FB["[object Float32Array]"] = FB["[object Float64Array]"] = FB["[object Int8Array]"] = FB["[object Int16Array]"] = FB["[object Int32Array]"] = FB["[object Uint8Array]"] = FB["[object Uint8ClampedArray]"] = FB["[object Uint16Array]"] = FB["[object Uint32Array]"] = !0, FB[pB] = FB[lB] = FB[iB] = FB[JB] = FB[NB] = FB[YB] = FB[gB] = FB[oB] = FB[kB] = FB[LB] = FB[OB] = FB[uB] = FB[HB] = FB[EB] = FB[mB] = !1;
      var KB = "object" == typeof yB && yB && yB.Object === Object && yB,
        rB = "object" == typeof self && self && self.Object === Object && self,
        IB = KB || rB || Function("return this")(),
        cB = TB && !TB.nodeType && TB,
        SB = cB && BB && !BB.nodeType && BB,
        PB = SB && SB.exports === cB && KB.process,
        QB = function() {
          try {
            return PB && PB.binding("util")
          } catch (BB) {}
        }(),
        RB = QB && QB.isTypedArray;

      function aB(BB, TB) {
        for (var dB = -1, VB = BB ? BB.length : 0; ++dB < VB && !1 !== TB(BB[dB], dB, BB););
        return BB
      }

      function ZB(BB, TB) {
        for (var dB = -1, VB = BB ? BB.length : 0; ++dB < VB;)
          if (TB(BB[dB], dB, BB)) return !0;
        return !1
      }

      function XB(BB) {
        var TB = !1;
        if (null != BB && "function" != typeof BB.toString) try {
          TB = !!(BB + "")
        } catch (dB) {}
        return TB
      }

      function WB(BB) {
        var TB = -1,
          dB = Array(BB.size);
        return BB.forEach((function(BB, VB) {
          dB[++TB] = [VB, BB]
        })), dB
      }

      function hB(BB, TB) {
        return function(dB) {
          return BB(TB(dB))
        }
      }

      function CB(BB) {
        var TB = -1,
          dB = Array(BB.size);
        return BB.forEach((function(BB) {
          dB[++TB] = BB
        })), dB
      }
      var GB = Array.prototype,
        qB = Function.prototype,
        xB = Object.prototype,
        jB = IB["__core-js_shared__"],
        AB = function() {
          var BB = /[^.]+$/.exec(jB && jB.keys && jB.keys.IE_PROTO || "");
          return BB ? "Symbol(src)_1." + BB : ""
        }(),
        bB = qB.toString,
        nB = xB.hasOwnProperty,
        eB = xB.toString,
        BT = RegExp("^" + bB.call(nB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        TT = IB.Symbol,
        dT = IB.Uint8Array,
        VT = hB(Object.getPrototypeOf, Object),
        yT = Object.create,
        pT = xB.propertyIsEnumerable,
        lT = GB.splice,
        JT = hB(Object.keys, Object),
        YT = WT(IB, "DataView"),
        gT = WT(IB, "Map"),
        oT = WT(IB, "Promise"),
        kT = WT(IB, "Set"),
        LT = WT(IB, "WeakMap"),
        OT = WT(Object, "create"),
        DT = bT(YT),
        uT = bT(gT),
        HT = bT(oT),
        ET = bT(kT),
        vT = bT(LT),
        mT = TT ? TT.prototype : void 0,
        iT = mT ? mT.valueOf : void 0,
        NT = mT ? mT.toString : void 0;

      function tT(BB) {
        var TB = -1,
          dB = BB ? BB.length : 0;
        for (this.clear(); ++TB < dB;) {
          var VB = BB[TB];
          this.set(VB[0], VB[1])
        }
      }

      function fT(BB) {
        var TB = -1,
          dB = BB ? BB.length : 0;
        for (this.clear(); ++TB < dB;) {
          var VB = BB[TB];
          this.set(VB[0], VB[1])
        }
      }

      function sT(BB) {
        var TB = -1,
          dB = BB ? BB.length : 0;
        for (this.clear(); ++TB < dB;) {
          var VB = BB[TB];
          this.set(VB[0], VB[1])
        }
      }

      function MT(BB) {
        var TB = -1,
          dB = BB ? BB.length : 0;
        for (this.__data__ = new sT; ++TB < dB;) this.add(BB[TB])
      }

      function zT(BB) {
        this.__data__ = new fT(BB)
      }

      function wT(BB, TB) {
        var dB = Td(BB) || Bd(BB) ? function(BB, TB) {
            for (var dB = -1, VB = Array(BB); ++dB < BB;) VB[dB] = TB(dB);
            return VB
          }(BB.length, String) : [],
          VB = dB.length,
          yB = !!VB;
        for (var pB in BB) !TB && !nB.call(BB, pB) || yB && ("length" == pB || CT(pB, VB)) || dB.push(pB);
        return dB
      }

      function UT(BB, TB) {
        for (var dB = BB.length; dB--;)
          if (eT(BB[dB][0], TB)) return dB;
        return -1
      }
      tT.prototype.clear = function() {
        this.__data__ = OT ? OT(null) : {}
      }, tT.prototype.delete = function(BB) {
        return this.has(BB) && delete this.__data__[BB]
      }, tT.prototype.get = function(BB) {
        var TB = this.__data__;
        if (OT) {
          var VB = TB[BB];
          return VB === dB ? void 0 : VB
        }
        return nB.call(TB, BB) ? TB[BB] : void 0
      }, tT.prototype.has = function(BB) {
        var TB = this.__data__;
        return OT ? void 0 !== TB[BB] : nB.call(TB, BB)
      }, tT.prototype.set = function(BB, TB) {
        return this.__data__[BB] = OT && void 0 === TB ? dB : TB, this
      }, fT.prototype.clear = function() {
        this.__data__ = []
      }, fT.prototype.delete = function(BB) {
        var TB = this.__data__,
          dB = UT(TB, BB);
        return !(dB < 0) && (dB == TB.length - 1 ? TB.pop() : lT.call(TB, dB, 1), !0)
      }, fT.prototype.get = function(BB) {
        var TB = this.__data__,
          dB = UT(TB, BB);
        return dB < 0 ? void 0 : TB[dB][1]
      }, fT.prototype.has = function(BB) {
        return UT(this.__data__, BB) > -1
      }, fT.prototype.set = function(BB, TB) {
        var dB = this.__data__,
          VB = UT(dB, BB);
        return VB < 0 ? dB.push([BB, TB]) : dB[VB][1] = TB, this
      }, sT.prototype.clear = function() {
        this.__data__ = {
          hash: new tT,
          map: new(gT || fT),
          string: new tT
        }
      }, sT.prototype.delete = function(BB) {
        return XT(this, BB).delete(BB)
      }, sT.prototype.get = function(BB) {
        return XT(this, BB).get(BB)
      }, sT.prototype.has = function(BB) {
        return XT(this, BB).has(BB)
      }, sT.prototype.set = function(BB, TB) {
        return XT(this, BB).set(BB, TB), this
      }, MT.prototype.add = MT.prototype.push = function(BB) {
        return this.__data__.set(BB, dB), this
      }, MT.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, zT.prototype.clear = function() {
        this.__data__ = new fT
      }, zT.prototype.delete = function(BB) {
        return this.__data__.delete(BB)
      }, zT.prototype.get = function(BB) {
        return this.__data__.get(BB)
      }, zT.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, zT.prototype.set = function(BB, TB) {
        var dB = this.__data__;
        if (dB instanceof fT) {
          var VB = dB.__data__;
          if (!gT || VB.length < 199) return VB.push([BB, TB]), this;
          dB = this.__data__ = new sT(VB)
        }
        return dB.set(BB, TB), this
      };
      var FT, KT = function(BB, TB, dB) {
        for (var VB = -1, yB = Object(BB), pB = dB(BB), lB = pB.length; lB--;) {
          var JB = pB[FT ? lB : ++VB];
          if (!1 === TB(yB[JB], JB, yB)) break
        }
        return BB
      };

      function rT(BB, TB) {
        return BB && KT(BB, TB, od)
      }

      function IT(BB, TB) {
        for (var dB = 0, VB = (TB = GT(TB, BB) ? [TB] : aT(TB)).length; null != BB && dB < VB;) BB = BB[AT(TB[dB++])];
        return dB && dB == VB ? BB : void 0
      }

      function cT(BB, TB) {
        return null != BB && TB in Object(BB)
      }

      function ST(BB, TB, dB, VB, yB) {
        return BB === TB || (null == BB || null == TB || !pd(BB) && !ld(TB) ? BB !== BB && TB !== TB : function(BB, TB, dB, VB, yB, oB) {
          var DB = Td(BB),
            mB = Td(TB),
            tB = lB,
            fB = lB;
          DB || (tB = (tB = hT(BB)) == pB ? OB : tB);
          mB || (fB = (fB = hT(TB)) == pB ? OB : fB);
          var sB = tB == OB && !XB(BB),
            MB = fB == OB && !XB(TB),
            zB = tB == fB;
          if (zB && !sB) return oB || (oB = new zT), DB || gd(BB) ? ZT(BB, TB, dB, VB, yB, oB) : function(BB, TB, dB, VB, yB, pB, lB) {
            switch (dB) {
              case NB:
                if (BB.byteLength != TB.byteLength || BB.byteOffset != TB.byteOffset) return !1;
                BB = BB.buffer, TB = TB.buffer;
              case iB:
                return !(BB.byteLength != TB.byteLength || !VB(new dT(BB), new dT(TB)));
              case JB:
              case YB:
              case LB:
                return eT(+BB, +TB);
              case gB:
                return BB.name == TB.name && BB.message == TB.message;
              case uB:
              case EB:
                return BB == TB + "";
              case kB:
                var oB = WB;
              case HB:
                var OB = 2 & pB;
                if (oB || (oB = CB), BB.size != TB.size && !OB) return !1;
                var DB = lB.get(BB);
                if (DB) return DB == TB;
                pB |= 1, lB.set(BB, TB);
                var mB = ZT(oB(BB), oB(TB), VB, yB, pB, lB);
                return lB.delete(BB), mB;
              case vB:
                if (iT) return iT.call(BB) == iT.call(TB)
            }
            return !1
          }(BB, TB, tB, dB, VB, yB, oB);
          if (!(2 & yB)) {
            var wB = sB && nB.call(BB, "__wrapped__"),
              UB = MB && nB.call(TB, "__wrapped__");
            if (wB || UB) {
              var FB = wB ? BB.value() : BB,
                KB = UB ? TB.value() : TB;
              return oB || (oB = new zT), dB(FB, KB, VB, yB, oB)
            }
          }
          if (!zB) return !1;
          return oB || (oB = new zT),
            function(BB, TB, dB, VB, yB, pB) {
              var lB = 2 & yB,
                JB = od(BB),
                YB = JB.length,
                gB = od(TB),
                oB = gB.length;
              if (YB != oB && !lB) return !1;
              var kB = YB;
              for (; kB--;) {
                var LB = JB[kB];
                if (!(lB ? LB in TB : nB.call(TB, LB))) return !1
              }
              var OB = pB.get(BB);
              if (OB && pB.get(TB)) return OB == TB;
              var DB = !0;
              pB.set(BB, TB), pB.set(TB, BB);
              var uB = lB;
              for (; ++kB < YB;) {
                var HB = BB[LB = JB[kB]],
                  EB = TB[LB];
                if (VB) var vB = lB ? VB(EB, HB, LB, TB, BB, pB) : VB(HB, EB, LB, BB, TB, pB);
                if (!(void 0 === vB ? HB === EB || dB(HB, EB, VB, yB, pB) : vB)) {
                  DB = !1;
                  break
                }
                uB || (uB = "constructor" == LB)
              }
              if (DB && !uB) {
                var mB = BB.constructor,
                  iB = TB.constructor;
                mB == iB || !("constructor" in BB) || !("constructor" in TB) || "function" == typeof mB && mB instanceof mB && "function" == typeof iB && iB instanceof iB || (DB = !1)
              }
              return pB.delete(BB), pB.delete(TB), DB
            }(BB, TB, dB, VB, yB, oB)
        }(BB, TB, ST, dB, VB, yB))
      }

      function PT(BB) {
        return !(!pd(BB) || (TB = BB, AB && AB in TB)) && (Vd(BB) || XB(BB) ? BT : wB).test(bT(BB));
        var TB
      }

      function QT(BB) {
        return "function" == typeof BB ? BB : null == BB ? kd : "object" == typeof BB ? Td(BB) ? function(BB, TB) {
          if (GT(BB) && qT(TB)) return xT(AT(BB), TB);
          return function(dB) {
            var VB = function(BB, TB, dB) {
              var VB = null == BB ? void 0 : IT(BB, TB);
              return void 0 === VB ? dB : VB
            }(dB, BB);
            return void 0 === VB && VB === TB ? function(BB, TB) {
              return null != BB && function(BB, TB, dB) {
                TB = GT(TB, BB) ? [TB] : aT(TB);
                var VB, yB = -1,
                  pB = TB.length;
                for (; ++yB < pB;) {
                  var lB = AT(TB[yB]);
                  if (!(VB = null != BB && dB(BB, lB))) break;
                  BB = BB[lB]
                }
                if (VB) return VB;
                pB = BB ? BB.length : 0;
                return !!pB && yd(pB) && CT(lB, pB) && (Td(BB) || Bd(BB))
              }(BB, TB, cT)
            }(dB, BB) : ST(TB, VB, void 0, 3)
          }
        }(BB[0], BB[1]) : function(BB) {
          var TB = function(BB) {
            var TB = od(BB),
              dB = TB.length;
            for (; dB--;) {
              var VB = TB[dB],
                yB = BB[VB];
              TB[dB] = [VB, yB, qT(yB)]
            }
            return TB
          }(BB);
          if (1 == TB.length && TB[0][2]) return xT(TB[0][0], TB[0][1]);
          return function(dB) {
            return dB === BB || function(BB, TB, dB, VB) {
              var yB = dB.length,
                pB = yB,
                lB = !VB;
              if (null == BB) return !pB;
              for (BB = Object(BB); yB--;) {
                var JB = dB[yB];
                if (lB && JB[2] ? JB[1] !== BB[JB[0]] : !(JB[0] in BB)) return !1
              }
              for (; ++yB < pB;) {
                var YB = (JB = dB[yB])[0],
                  gB = BB[YB],
                  oB = JB[1];
                if (lB && JB[2]) {
                  if (void 0 === gB && !(YB in BB)) return !1
                } else {
                  var kB = new zT;
                  if (VB) var LB = VB(gB, oB, YB, BB, TB, kB);
                  if (!(void 0 === LB ? ST(oB, gB, VB, 3, kB) : LB)) return !1
                }
              }
              return !0
            }(dB, BB, TB)
          }
        }(BB) : function(BB) {
          return GT(BB) ? (TB = AT(BB), function(BB) {
            return null == BB ? void 0 : BB[TB]
          }) : function(BB) {
            return function(TB) {
              return IT(TB, BB)
            }
          }(BB);
          var TB
        }(BB)
      }

      function RT(BB) {
        if (! function(BB) {
            var TB = BB && BB.constructor,
              dB = "function" == typeof TB && TB.prototype || xB;
            return BB === dB
          }(BB)) return JT(BB);
        var TB = [];
        for (var dB in Object(BB)) nB.call(BB, dB) && "constructor" != dB && TB.push(dB);
        return TB
      }

      function aT(BB) {
        return Td(BB) ? BB : jT(BB)
      }

      function ZT(BB, TB, dB, VB, yB, pB) {
        var lB = 2 & yB,
          JB = BB.length,
          YB = TB.length;
        if (JB != YB && !(lB && YB > JB)) return !1;
        var gB = pB.get(BB);
        if (gB && pB.get(TB)) return gB == TB;
        var oB = -1,
          kB = !0,
          LB = 1 & yB ? new MT : void 0;
        for (pB.set(BB, TB), pB.set(TB, BB); ++oB < JB;) {
          var OB = BB[oB],
            DB = TB[oB];
          if (VB) var uB = lB ? VB(DB, OB, oB, TB, BB, pB) : VB(OB, DB, oB, BB, TB, pB);
          if (void 0 !== uB) {
            if (uB) continue;
            kB = !1;
            break
          }
          if (LB) {
            if (!ZB(TB, (function(BB, TB) {
                if (!LB.has(TB) && (OB === BB || dB(OB, BB, VB, yB, pB))) return LB.add(TB)
              }))) {
              kB = !1;
              break
            }
          } else if (OB !== DB && !dB(OB, DB, VB, yB, pB)) {
            kB = !1;
            break
          }
        }
        return pB.delete(BB), pB.delete(TB), kB
      }

      function XT(BB, TB) {
        var dB = BB.__data__;
        return function(BB) {
          var TB = typeof BB;
          return "string" == TB || "number" == TB || "symbol" == TB || "boolean" == TB ? "__proto__" !== BB : null === BB
        }(TB) ? dB["string" == typeof TB ? "string" : "hash"] : dB.map
      }

      function WT(BB, TB) {
        var dB = function(BB, TB) {
          return null == BB ? void 0 : BB[TB]
        }(BB, TB);
        return PT(dB) ? dB : void 0
      }
      var hT = function(BB) {
        return eB.call(BB)
      };

      function CT(BB, TB) {
        return !!(TB = null == TB ? VB : TB) && ("number" == typeof BB || UB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < TB
      }

      function GT(BB, TB) {
        if (Td(BB)) return !1;
        var dB = typeof BB;
        return !("number" != dB && "symbol" != dB && "boolean" != dB && null != BB && !Jd(BB)) || (fB.test(BB) || !tB.test(BB) || null != TB && BB in Object(TB))
      }

      function qT(BB) {
        return BB === BB && !pd(BB)
      }

      function xT(BB, TB) {
        return function(dB) {
          return null != dB && (dB[BB] === TB && (void 0 !== TB || BB in Object(dB)))
        }
      }(YT && hT(new YT(new ArrayBuffer(1))) != NB || gT && hT(new gT) != kB || oT && hT(oT.resolve()) != DB || kT && hT(new kT) != HB || LT && hT(new LT) != mB) && (hT = function(BB) {
        var TB = eB.call(BB),
          dB = TB == OB ? BB.constructor : void 0,
          VB = dB ? bT(dB) : void 0;
        if (VB) switch (VB) {
          case DT:
            return NB;
          case uT:
            return kB;
          case HT:
            return DB;
          case ET:
            return HB;
          case vT:
            return mB
        }
        return TB
      });
      var jT = nT((function(BB) {
        var TB;
        BB = null == (TB = BB) ? "" : function(BB) {
          if ("string" == typeof BB) return BB;
          if (Jd(BB)) return NT ? NT.call(BB) : "";
          var TB = BB + "";
          return "0" == TB && 1 / BB == -1 / 0 ? "-0" : TB
        }(TB);
        var dB = [];
        return sB.test(BB) && dB.push(""), BB.replace(MB, (function(BB, TB, VB, yB) {
          dB.push(VB ? yB.replace(zB, "$1") : TB || BB)
        })), dB
      }));

      function AT(BB) {
        if ("string" == typeof BB || Jd(BB)) return BB;
        var TB = BB + "";
        return "0" == TB && 1 / BB == -1 / 0 ? "-0" : TB
      }

      function bT(BB) {
        if (null != BB) {
          try {
            return bB.call(BB)
          } catch (TB) {}
          try {
            return BB + ""
          } catch (TB) {}
        }
        return ""
      }

      function nT(BB, TB) {
        if ("function" != typeof BB || TB && "function" != typeof TB) throw new TypeError("Expected a function");
        var dB = function() {
          var VB = arguments,
            yB = TB ? TB.apply(this, VB) : VB[0],
            pB = dB.cache;
          if (pB.has(yB)) return pB.get(yB);
          var lB = BB.apply(this, VB);
          return dB.cache = pB.set(yB, lB), lB
        };
        return dB.cache = new(nT.Cache || sT), dB
      }

      function eT(BB, TB) {
        return BB === TB || BB !== BB && TB !== TB
      }

      function Bd(BB) {
        return function(BB) {
          return ld(BB) && dd(BB)
        }(BB) && nB.call(BB, "callee") && (!pT.call(BB, "callee") || eB.call(BB) == pB)
      }
      nT.Cache = sT;
      var Td = Array.isArray;

      function dd(BB) {
        return null != BB && yd(BB.length) && !Vd(BB)
      }

      function Vd(BB) {
        var TB = pd(BB) ? eB.call(BB) : "";
        return TB == oB || "[object GeneratorFunction]" == TB
      }

      function yd(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= VB
      }

      function pd(BB) {
        var TB = typeof BB;
        return !!BB && ("object" == TB || "function" == TB)
      }

      function ld(BB) {
        return !!BB && "object" == typeof BB
      }

      function Jd(BB) {
        return "symbol" == typeof BB || ld(BB) && eB.call(BB) == vB
      }
      var Yd, gd = RB ? (Yd = RB, function(BB) {
        return Yd(BB)
      }) : function(BB) {
        return ld(BB) && yd(BB.length) && !!FB[eB.call(BB)]
      };

      function od(BB) {
        return dd(BB) ? wT(BB) : RT(BB)
      }

      function kd(BB) {
        return BB
      }
      BB.exports = function(BB, TB, dB) {
        var VB, yB = Td(BB) || gd(BB);
        if (TB = QT(TB), null == dB)
          if (yB || pd(BB)) {
            var pB = BB.constructor;
            dB = yB ? Td(BB) ? new pB : [] : Vd(pB) ? pd(VB = VT(BB)) ? yT(VB) : {} : {}
          } else dB = {};
        return (yB ? aB : rT)(BB, (function(BB, VB, yB) {
          return TB(dB, BB, VB, yB)
        })), dB
      }
    }(Rp, Rp.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      l: ap
    } = VB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);