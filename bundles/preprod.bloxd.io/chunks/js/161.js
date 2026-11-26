export const id = 161;
export const ids = [161];
export const modules = {
  7258: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DQ,
      h: () => LG
    });
    var YB = {};
    GB.r(YB), GB.d(YB, {
      e: () => YY,
      h: () => oY,
      g: () => QY,
      j: () => HG,
      m: () => CG,
      n: () => KY,
      p: () => xG,
      q: () => IY,
      r: () => SY,
      u: () => mY,
      w: () => vG,
      A: () => UY,
      D: () => dY,
      F: () => uY,
      H: () => sG,
      G: () => OY,
      J: () => kY,
      M: () => fY
    });
    var DB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function QB(BB) {
      return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
    }
    var oB = {
      exports: {}
    };
    ! function(BB) {
      var OB = Object.prototype.hasOwnProperty,
        GB = "~";

      function YB() {}

      function DB(BB, OB, GB) {
        this.oP = BB, this.context = OB, this.once = GB || !1
      }

      function QB(BB, OB, YB, QB, oB) {
        if ("function" !== typeof YB) throw new TypeError("The listener must be a function");
        var jB = new DB(YB, QB || BB, oB),
          yB = GB ? GB + OB : OB;
        return BB._events[yB] ? BB._events[yB].oP ? BB._events[yB] = [BB._events[yB], jB] : BB._events[yB].push(jB) : (BB._events[yB] = jB, BB._eventsCount++), BB
      }

      function oB(BB, OB) {
        0 === --BB._eventsCount ? BB._events = new YB : delete BB._events[OB]
      }

      function jB() {
        this._events = new YB, this._eventsCount = 0
      }
      Object.create && (YB.prototype = Object.create(null), (new YB).__proto__ || (GB = !1)), jB.prototype.eventNames = function() {
        var BB, YB, DB = [];
        if (0 === this._eventsCount) return DB;
        for (YB in BB = this._events) OB.call(BB, YB) && DB.push(GB ? YB.slice(1) : YB);
        return Object.getOwnPropertySymbols ? DB.concat(Object.getOwnPropertySymbols(BB)) : DB
      }, jB.prototype.listeners = function(BB) {
        var OB = GB ? GB + BB : BB,
          YB = this._events[OB];
        if (!YB) return [];
        if (YB.oP) return [YB.oP];
        for (var DB = 0, QB = YB.length, oB = new Array(QB); DB < QB; DB++) oB[DB] = YB[DB].oP;
        return oB
      }, jB.prototype.listenerCount = function(BB) {
        var OB = GB ? GB + BB : BB,
          YB = this._events[OB];
        return YB ? YB.oP ? 1 : YB.length : 0
      }, jB.prototype.emit = function(BB, OB, YB, DB, QB, oB) {
        var jB = GB ? GB + BB : BB;
        if (!this._events[jB]) return !1;
        var yB, JB, MB = this._events[jB],
          PB = arguments.length;
        if (MB.oP) {
          switch (MB.once && this.removeListener(BB, MB.oP, void 0, !0), PB) {
            case 1:
              return MB.oP.call(MB.context), !0;
            case 2:
              return MB.oP.call(MB.context, OB), !0;
            case 3:
              return MB.oP.call(MB.context, OB, YB), !0;
            case 4:
              return MB.oP.call(MB.context, OB, YB, DB), !0;
            case 5:
              return MB.oP.call(MB.context, OB, YB, DB, QB), !0;
            case 6:
              return MB.oP.call(MB.context, OB, YB, DB, QB, oB), !0
          }
          for (JB = 1, yB = new Array(PB - 1); JB < PB; JB++) yB[JB - 1] = arguments[JB];
          MB.oP.apply(MB.context, yB)
        } else {
          var zB, lB = MB.length;
          for (JB = 0; JB < lB; JB++) switch (MB[JB].once && this.removeListener(BB, MB[JB].oP, void 0, !0), PB) {
            case 1:
              MB[JB].oP.call(MB[JB].context);
              break;
            case 2:
              MB[JB].oP.call(MB[JB].context, OB);
              break;
            case 3:
              MB[JB].oP.call(MB[JB].context, OB, YB);
              break;
            case 4:
              MB[JB].oP.call(MB[JB].context, OB, YB, DB);
              break;
            default:
              if (!yB)
                for (zB = 1, yB = new Array(PB - 1); zB < PB; zB++) yB[zB - 1] = arguments[zB];
              MB[JB].oP.apply(MB[JB].context, yB)
          }
        }
        return !0
      }, jB.prototype.on = function(BB, OB, GB) {
        return QB(this, BB, OB, GB, !1)
      }, jB.prototype.once = function(BB, OB, GB) {
        return QB(this, BB, OB, GB, !0)
      }, jB.prototype.removeListener = function(BB, OB, YB, DB) {
        var QB = GB ? GB + BB : BB;
        if (!this._events[QB]) return this;
        if (!OB) return oB(this, QB), this;
        var jB = this._events[QB];
        if (jB.oP) jB.oP !== OB || DB && !jB.once || YB && jB.context !== YB || oB(this, QB);
        else {
          for (var yB = 0, JB = [], MB = jB.length; yB < MB; yB++)(jB[yB].oP !== OB || DB && !jB[yB].once || YB && jB[yB].context !== YB) && JB.push(jB[yB]);
          JB.length ? this._events[QB] = 1 === JB.length ? JB[0] : JB : oB(this, QB)
        }
        return this
      }, jB.prototype.mN = function(BB) {
        var OB;
        return BB ? (OB = GB ? GB + BB : BB, this._events[OB] && oB(this, OB)) : (this._events = new YB, this._eventsCount = 0), this
      }, jB.prototype.off = jB.prototype.removeListener, jB.prototype.addListener = jB.prototype.on, jB.prefixed = GB, jB.EventEmitter = jB, BB.exports = jB
    }(oB);
    var jB, yB, JB = QB(oB.exports);
    ! function(BB) {
      BB.assertEqual = BB => BB, BB.assertIs = function(BB) {}, BB.assertNever = function(BB) {
        throw new Error
      }, BB.arrayToEnum = BB => {
        const OB = {};
        for (const GB of BB) OB[GB] = GB;
        return OB
      }, BB.getValidEnumValues = OB => {
        const GB = BB.objectKeys(OB).filter((BB => "number" !== typeof OB[OB[BB]])),
          YB = {};
        for (const BB of GB) YB[BB] = OB[BB];
        return BB.objectValues(YB)
      }, BB.objectValues = OB => BB.objectKeys(OB).map((function(BB) {
        return OB[BB]
      })), BB.objectKeys = "function" === typeof Object.keys ? BB => Object.keys(BB) : BB => {
        const OB = [];
        for (const GB in BB) Object.prototype.hasOwnProperty.call(BB, GB) && OB.push(GB);
        return OB
      }, BB.find = (BB, OB) => {
        for (const GB of BB)
          if (OB(GB)) return GB
      }, BB.isInteger = "function" === typeof Number.isInteger ? BB => Number.isInteger(BB) : BB => "number" === typeof BB && isFinite(BB) && Math.floor(BB) === BB, BB.joinValues = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return BB.map((BB => "string" === typeof BB ? `'${BB}'` : BB)).join(OB)
      }, BB.jsonStringifyReplacer = (BB, OB) => "bigint" === typeof OB ? OB.toString() : OB
    }(jB || (jB = {})),
    function(BB) {
      BB.mergeShapes = (BB, OB) => ({
        ...BB,
        ...OB
      })
    }(yB || (yB = {}));
    const MB = jB.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      PB = BB => {
        switch (typeof BB) {
          case "undefined":
            return MB.undefined;
          case "string":
            return MB.string;
          case "number":
            return isNaN(BB) ? MB.nan : MB.number;
          case "boolean":
            return MB.boolean;
          case "function":
            return MB.function;
          case "bigint":
            return MB.bigint;
          case "symbol":
            return MB.symbol;
          case "object":
            return Array.isArray(BB) ? MB.array : null === BB ? MB.null : BB.then && "function" === typeof BB.then && BB.catch && "function" === typeof BB.catch ? MB.promise : "undefined" !== typeof Map && BB instanceof Map ? MB.map : "undefined" !== typeof Set && BB instanceof Set ? MB.set : "undefined" !== typeof Date && BB instanceof Date ? MB.date : MB.object;
          default:
            return MB.unknown
        }
      },
      zB = jB.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class lB extends Error {
      constructor(BB) {
        var OB;
        super(), OB = this, this.issues = [], this.addIssue = BB => {
          this.issues = [...this.issues, BB]
        }, this.addIssues = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          OB.issues = [...OB.issues, ...BB]
        };
        const GB = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, GB) : this.__proto__ = GB, this.name = "ZodError", this.issues = BB
      }
      get errors() {
        return this.issues
      }
      format(BB) {
        const OB = BB || function(BB) {
            return BB.message
          },
          GB = {
            _errors: []
          },
          YB = BB => {
            for (const DB of BB.issues)
              if ("invalid_union" === DB.code) DB.unionErrors.map(YB);
              else if ("invalid_return_type" === DB.code) YB(DB.returnTypeError);
            else if ("invalid_arguments" === DB.code) YB(DB.argumentsError);
            else if (0 === DB.path.length) GB._errors.push(OB(DB));
            else {
              let BB = GB,
                YB = 0;
              for (; YB < DB.path.length;) {
                const GB = DB.path[YB];
                YB === DB.path.length - 1 ? (BB[GB] = BB[GB] || {
                  _errors: []
                }, BB[GB]._errors.push(OB(DB))) : BB[GB] = BB[GB] || {
                  _errors: []
                }, BB = BB[GB], YB++
              }
            }
          };
        return YB(this), GB
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, jB.jsonStringifyReplacer, 2)
      }
      get NP() {
        return 0 === this.issues.length
      }
      flatten() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BB => BB.message;
        const OB = {},
          GB = [];
        for (const YB of this.issues) YB.path.length > 0 ? (OB[YB.path[0]] = OB[YB.path[0]] || [], OB[YB.path[0]].push(BB(YB))) : GB.push(BB(YB));
        return {
          formErrors: GB,
          fieldErrors: OB
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    lB.create = BB => new lB(BB);
    const pB = (BB, OB) => {
      let GB;
      switch (BB.code) {
        case zB.invalid_type:
          GB = BB.received === MB.undefined ? "Required" : `Expected ${BB.expected}, received ${BB.received}`;
          break;
        case zB.invalid_literal:
          GB = `Invalid literal value, expected ${JSON.stringify(BB.expected,jB.jsonStringifyReplacer)}`;
          break;
        case zB.unrecognized_keys:
          GB = `Unrecognized key(s) in object: ${jB.joinValues(BB.keys,", ")}`;
          break;
        case zB.invalid_union:
          GB = "Invalid input";
          break;
        case zB.invalid_union_discriminator:
          GB = `Invalid discriminator value. Expected ${jB.joinValues(BB.options)}`;
          break;
        case zB.invalid_enum_value:
          GB = `Invalid enum value. Expected ${jB.joinValues(BB.options)}, received '${BB.received}'`;
          break;
        case zB.invalid_arguments:
          GB = "Invalid function arguments";
          break;
        case zB.invalid_return_type:
          GB = "Invalid function return type";
          break;
        case zB.invalid_date:
          GB = "Invalid date";
          break;
        case zB.invalid_string:
          "object" === typeof BB.validation ? "includes" in BB.validation ? (GB = `Invalid input: must include "${BB.validation.includes}"`, "number" === typeof BB.validation.position && (GB = `${GB} at one or more positions greater than or equal to ${BB.validation.position}`)) : "startsWith" in BB.validation ? GB = `Invalid input: must start with "${BB.validation.startsWith}"` : "endsWith" in BB.validation ? GB = `Invalid input: must end with "${BB.validation.endsWith}"` : jB.assertNever(BB.validation) : GB = "regex" !== BB.validation ? `Invalid ${BB.validation}` : "Invalid";
          break;
        case zB.too_small:
          GB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at least":"more than"} ${BB.minimum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at least":"over"} ${BB.minimum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${BB.minimum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(BB.minimum))}` : "Invalid input";
          break;
        case zB.too_big:
          GB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at most":"less than"} ${BB.maximum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at most":"under"} ${BB.maximum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "bigint" === BB.type ? `BigInt must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly":BB.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(BB.maximum))}` : "Invalid input";
          break;
        case zB.custom:
          GB = "Invalid input";
          break;
        case zB.invalid_intersection_types:
          GB = "Intersection results could not be merged";
          break;
        case zB.not_multiple_of:
          GB = `Number must be a multiple of ${BB.multipleOf}`;
          break;
        case zB.not_finite:
          GB = "Number must be finite";
          break;
        default:
          GB = OB.defaultError, jB.assertNever(BB)
      }
      return {
        message: GB
      }
    };
    let qB = pB;

    function ZB() {
      return qB
    }
    const NB = BB => {
      const {
        data: OB,
        path: GB,
        errorMaps: YB,
        issueData: DB
      } = BB, QB = [...GB, ...DB.path || []], oB = {
        ...DB,
        path: QB
      };
      let jB = "";
      const yB = YB.filter((BB => !!BB)).slice().reverse();
      for (const JB of yB) jB = JB(oB, {
        data: OB,
        defaultError: jB
      }).message;
      return {
        ...DB,
        path: QB,
        message: DB.message || jB
      }
    };

    function RB(BB, OB) {
      const GB = NB({
        issueData: OB,
        data: BB.data,
        path: BB.path,
        errorMaps: [BB.common.contextualErrorMap, BB.schemaErrorMap, ZB(), pB].filter((BB => !!BB))
      });
      BB.common.issues.push(GB)
    }
    class WB {
      constructor() {
        this.value = "valid"
      }
      ap() {
        "valid" === this.value && (this.value = "ap")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(BB, OB) {
        const GB = [];
        for (const YB of OB) {
          if ("aborted" === YB.status) return AB;
          "ap" === YB.status && BB.ap(), GB.push(YB.value)
        }
        return {
          status: BB.value,
          value: GB
        }
      }
      static async mergeObjectAsync(BB, OB) {
        const GB = [];
        for (const YB of OB) GB.push({
          key: await YB.key,
          value: await YB.value
        });
        return WB.mergeObjectSync(BB, GB)
      }
      static mergeObjectSync(BB, OB) {
        const GB = {};
        for (const YB of OB) {
          const {
            key: OB,
            value: DB
          } = YB;
          if ("aborted" === OB.status) return AB;
          if ("aborted" === DB.status) return AB;
          "ap" === OB.status && BB.ap(), "ap" === DB.status && BB.ap(), "__proto__" === OB.value || "undefined" === typeof DB.value && !YB.alwaysSet || (GB[OB.value] = DB.value)
        }
        return {
          status: BB.value,
          value: GB
        }
      }
    }
    const AB = Object.freeze({
        status: "aborted"
      }),
      VB = BB => ({
        status: "ap",
        value: BB
      }),
      SB = BB => ({
        status: "valid",
        value: BB
      }),
      nB = BB => "aborted" === BB.status,
      UB = BB => "ap" === BB.status,
      fB = BB => "valid" === BB.status,
      kB = BB => "undefined" !== typeof Promise && BB instanceof Promise;
    var dB;
    ! function(BB) {
      BB.errToObj = BB => "string" === typeof BB ? {
        message: BB
      } : BB || {}, BB.toString = BB => "string" === typeof BB ? BB : null === BB || void 0 === BB ? void 0 : BB.message
    }(dB || (dB = {}));
    class KB {
      constructor(BB, OB, GB, YB) {
        this._cachedPath = [], this.parent = BB, this.data = OB, this._path = GB, this._key = YB
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const uB = (BB, OB) => {
      if (fB(OB)) return {
        success: !0,
        data: OB.value
      };
      if (!BB.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const OB = new lB(BB.common.issues);
          return this._error = OB, this._error
        }
      }
    };

    function mB(BB) {
      if (!BB) return {};
      const {
        errorMap: OB,
        invalid_type_error: GB,
        required_error: YB,
        description: DB
      } = BB;
      if (OB && (GB || YB)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (OB) return {
        errorMap: OB,
        description: DB
      };
      return {
        errorMap: (BB, OB) => "invalid_type" !== BB.code ? {
          message: OB.defaultError
        } : "undefined" === typeof OB.data ? {
          message: null !== YB && void 0 !== YB ? YB : OB.defaultError
        } : {
          message: null !== GB && void 0 !== GB ? GB : OB.defaultError
        },
        description: DB
      }
    }
    class IB {
      constructor(BB) {
        this.spa = this.safeParseAsync, this._def = BB, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(BB) {
        return PB(BB.data)
      }
      _getOrReturnCtx(BB, OB) {
        return OB || {
          common: BB.parent.common,
          data: BB.data,
          parsedType: PB(BB.data),
          schemaErrorMap: this._def.errorMap,
          path: BB.path,
          parent: BB.parent
        }
      }
      _processInputParams(BB) {
        return {
          status: new WB,
          ctx: {
            common: BB.parent.common,
            data: BB.data,
            parsedType: PB(BB.data),
            schemaErrorMap: this._def.errorMap,
            path: BB.path,
            parent: BB.parent
          }
        }
      }
      _parseSync(BB) {
        const OB = this._parse(BB);
        if (kB(OB)) throw new Error("Synchronous parse encountered promise.");
        return OB
      }
      _parseAsync(BB) {
        const OB = this._parse(BB);
        return Promise.resolve(OB)
      }
      parse(BB, OB) {
        const GB = this.safeParse(BB, OB);
        if (GB.success) return GB.data;
        throw GB.error
      }
      safeParse(BB, OB) {
        var GB;
        const YB = {
            common: {
              issues: [],
              async: null !== (GB = null === OB || void 0 === OB ? void 0 : OB.async) && void 0 !== GB && GB,
              contextualErrorMap: null === OB || void 0 === OB ? void 0 : OB.errorMap
            },
            path: (null === OB || void 0 === OB ? void 0 : OB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: PB(BB)
          },
          DB = this._parseSync({
            data: BB,
            path: YB.path,
            parent: YB
          });
        return uB(YB, DB)
      }
      async parseAsync(BB, OB) {
        const GB = await this.safeParseAsync(BB, OB);
        if (GB.success) return GB.data;
        throw GB.error
      }
      async safeParseAsync(BB, OB) {
        const GB = {
            common: {
              issues: [],
              contextualErrorMap: null === OB || void 0 === OB ? void 0 : OB.errorMap,
              async: !0
            },
            path: (null === OB || void 0 === OB ? void 0 : OB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: PB(BB)
          },
          YB = this._parse({
            data: BB,
            path: GB.path,
            parent: GB
          }),
          DB = await (kB(YB) ? YB : Promise.resolve(YB));
        return uB(GB, DB)
      }
      refine(BB, OB) {
        const GB = BB => "string" === typeof OB || "undefined" === typeof OB ? {
          message: OB
        } : "function" === typeof OB ? OB(BB) : OB;
        return this._refinement(((OB, YB) => {
          const DB = BB(OB),
            QB = () => YB.addIssue({
              code: zB.custom,
              ...GB(OB)
            });
          return "undefined" !== typeof Promise && DB instanceof Promise ? DB.then((BB => !!BB || (QB(), !1))) : !!DB || (QB(), !1)
        }))
      }
      refinement(BB, OB) {
        return this._refinement(((GB, YB) => !!BB(GB) || (YB.addIssue("function" === typeof OB ? OB(GB, YB) : OB), !1)))
      }
      _refinement(BB) {
        return new AO({
          schema: this,
          typeName: FO.ZodEffects,
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
        return VO.create(this, this._def)
      }
      nullable() {
        return SO.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return OO.create(this, this._def)
      }
      promise() {
        return WO.create(this, this._def)
      }
      or(BB) {
        return DO.create([this, BB], this._def)
      }
      and(BB) {
        return yO.create(this, BB, this._def)
      }
      transform(BB) {
        return new AO({
          ...mB(this._def),
          schema: this,
          typeName: FO.ZodEffects,
          effect: {
            type: "transform",
            transform: BB
          }
        })
      }
      default (BB) {
        const OB = "function" === typeof BB ? BB : () => BB;
        return new nO({
          ...mB(this._def),
          innerType: this,
          defaultValue: OB,
          typeName: FO.ZodDefault
        })
      }
      brand() {
        return new dO({
          typeName: FO.ZodBranded,
          type: this,
          ...mB(this._def)
        })
      } catch (BB) {
        const OB = "function" === typeof BB ? BB : () => BB;
        return new UO({
          ...mB(this._def),
          innerType: this,
          catchValue: OB,
          typeName: FO.ZodCatch
        })
      }
      describe(BB) {
        return new(0, this.constructor)({
          ...this._def,
          description: BB
        })
      }
      pipe(BB) {
        return KO.create(this, BB)
      }
      readonly() {
        return uO.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const FB = /^c[^\s-]{8,}$/i,
      iB = /^[a-z][a-z0-9]*$/,
      LB = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      gB = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      rB = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let XB;
    const wB = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      EB = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class cB extends IB {
      _parse(BB) {
        this._def.coerce && (BB.data = String(BB.data));
        if (this._getType(BB) !== MB.string) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.string,
            received: OB.parsedType
          }), AB
        }
        const OB = new WB;
        let GB;
        for (const yB of this._def.checks)
          if ("min" === yB.kind) BB.data.length < yB.value && (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
            code: zB.too_small,
            minimum: yB.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: yB.message
          }), OB.ap());
          else if ("max" === yB.kind) BB.data.length > yB.value && (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          code: zB.too_big,
          maximum: yB.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: yB.message
        }), OB.ap());
        else if ("length" === yB.kind) {
          const YB = BB.data.length > yB.value,
            DB = BB.data.length < yB.value;
          (YB || DB) && (GB = this._getOrReturnCtx(BB, GB), YB ? RB(GB, {
            code: zB.too_big,
            maximum: yB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: yB.message
          }) : DB && RB(GB, {
            code: zB.too_small,
            minimum: yB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: yB.message
          }), OB.ap())
        } else if ("email" === yB.kind) rB.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "email",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap());
        else if ("emoji" === yB.kind) XB || (XB = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), XB.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "emoji",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap());
        else if ("uuid" === yB.kind) gB.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "uuid",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap());
        else if ("cuid" === yB.kind) FB.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "cuid",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap());
        else if ("cuid2" === yB.kind) iB.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "cuid2",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap());
        else if ("ulid" === yB.kind) LB.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "ulid",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap());
        else if ("url" === yB.kind) try {
          new URL(BB.data)
        } catch (oB) {
          GB = this._getOrReturnCtx(BB, GB), RB(GB, {
            validation: "url",
            code: zB.invalid_string,
            message: yB.message
          }), OB.ap()
        } else if ("regex" === yB.kind) {
          yB.regex.lastIndex = 0;
          yB.regex.test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
            validation: "regex",
            code: zB.invalid_string,
            message: yB.message
          }), OB.ap())
        } else if ("trim" === yB.kind) BB.data = BB.data.trim();
        else if ("includes" === yB.kind) BB.data.includes(yB.value, yB.position) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          code: zB.invalid_string,
          validation: {
            includes: yB.value,
            position: yB.position
          },
          message: yB.message
        }), OB.ap());
        else if ("toLowerCase" === yB.kind) BB.data = BB.data.toLowerCase();
        else if ("toUpperCase" === yB.kind) BB.data = BB.data.toUpperCase();
        else if ("startsWith" === yB.kind) BB.data.startsWith(yB.value) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          code: zB.invalid_string,
          validation: {
            startsWith: yB.value
          },
          message: yB.message
        }), OB.ap());
        else if ("endsWith" === yB.kind) BB.data.endsWith(yB.value) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          code: zB.invalid_string,
          validation: {
            endsWith: yB.value
          },
          message: yB.message
        }), OB.ap());
        else if ("datetime" === yB.kind) {
          ((QB = yB).precision ? QB.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${QB.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${QB.precision}}Z$`) : 0 === QB.precision ? QB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : QB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(BB.data) || (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
            code: zB.invalid_string,
            validation: "datetime",
            message: yB.message
          }), OB.ap())
        } else "ip" === yB.kind ? (YB = BB.data, ("v4" !== (DB = yB.version) && DB || !wB.test(YB)) && ("v6" !== DB && DB || !EB.test(YB)) && (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          validation: "ip",
          code: zB.invalid_string,
          message: yB.message
        }), OB.ap())) : jB.assertNever(yB);
        var YB, DB, QB;
        return {
          status: OB.value,
          value: BB.data
        }
      }
      _regex(BB, OB, GB) {
        return this.refinement((OB => BB.test(OB)), {
          validation: OB,
          code: zB.invalid_string,
          ...dB.errToObj(GB)
        })
      }
      _addCheck(BB) {
        return new cB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      email(BB) {
        return this._addCheck({
          kind: "email",
          ...dB.errToObj(BB)
        })
      }
      url(BB) {
        return this._addCheck({
          kind: "url",
          ...dB.errToObj(BB)
        })
      }
      emoji(BB) {
        return this._addCheck({
          kind: "emoji",
          ...dB.errToObj(BB)
        })
      }
      uuid(BB) {
        return this._addCheck({
          kind: "uuid",
          ...dB.errToObj(BB)
        })
      }
      cuid(BB) {
        return this._addCheck({
          kind: "cuid",
          ...dB.errToObj(BB)
        })
      }
      cuid2(BB) {
        return this._addCheck({
          kind: "cuid2",
          ...dB.errToObj(BB)
        })
      }
      ulid(BB) {
        return this._addCheck({
          kind: "ulid",
          ...dB.errToObj(BB)
        })
      }
      ip(BB) {
        return this._addCheck({
          kind: "ip",
          ...dB.errToObj(BB)
        })
      }
      datetime(BB) {
        var OB;
        return "string" === typeof BB ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: BB
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === BB || void 0 === BB ? void 0 : BB.precision) ? null : null === BB || void 0 === BB ? void 0 : BB.precision,
          offset: null !== (OB = null === BB || void 0 === BB ? void 0 : BB.offset) && void 0 !== OB && OB,
          ...dB.errToObj(null === BB || void 0 === BB ? void 0 : BB.message)
        })
      }
      regex(BB, OB) {
        return this._addCheck({
          kind: "regex",
          regex: BB,
          ...dB.errToObj(OB)
        })
      }
      includes(BB, OB) {
        return this._addCheck({
          kind: "includes",
          value: BB,
          position: null === OB || void 0 === OB ? void 0 : OB.position,
          ...dB.errToObj(null === OB || void 0 === OB ? void 0 : OB.message)
        })
      }
      startsWith(BB, OB) {
        return this._addCheck({
          kind: "startsWith",
          value: BB,
          ...dB.errToObj(OB)
        })
      }
      endsWith(BB, OB) {
        return this._addCheck({
          kind: "endsWith",
          value: BB,
          ...dB.errToObj(OB)
        })
      }
      min(BB, OB) {
        return this._addCheck({
          kind: "min",
          value: BB,
          ...dB.errToObj(OB)
        })
      }
      max(BB, OB) {
        return this._addCheck({
          kind: "max",
          value: BB,
          ...dB.errToObj(OB)
        })
      }
      length(BB, OB) {
        return this._addCheck({
          kind: "length",
          value: BB,
          ...dB.errToObj(OB)
        })
      }
      nonempty(BB) {
        return this.min(1, dB.errToObj(BB))
      }
      trim() {
        return new cB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new cB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new cB({
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
        for (const OB of this._def.checks) "min" === OB.kind && (null === BB || OB.value > BB) && (BB = OB.value);
        return BB
      }
      get maxLength() {
        let BB = null;
        for (const OB of this._def.checks) "max" === OB.kind && (null === BB || OB.value < BB) && (BB = OB.value);
        return BB
      }
    }

    function hB(BB, OB) {
      const GB = (BB.toString().split(".")[1] || "").length,
        YB = (OB.toString().split(".")[1] || "").length,
        DB = GB > YB ? GB : YB;
      return parseInt(BB.toFixed(DB).replace(".", "")) % parseInt(OB.toFixed(DB).replace(".", "")) / Math.pow(10, DB)
    }
    cB.create = BB => {
      var OB;
      return new cB({
        checks: [],
        typeName: FO.ZodString,
        coerce: null !== (OB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== OB && OB,
        ...mB(BB)
      })
    };
    class aB extends IB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(BB) {
        this._def.coerce && (BB.data = Number(BB.data));
        if (this._getType(BB) !== MB.number) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.number,
            received: OB.parsedType
          }), AB
        }
        let OB;
        const GB = new WB;
        for (const YB of this._def.checks)
          if ("int" === YB.kind) jB.isInteger(BB.data) || (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
            code: zB.invalid_type,
            expected: "integer",
            received: "float",
            message: YB.message
          }), GB.ap());
          else if ("min" === YB.kind) {
          (YB.inclusive ? BB.data < YB.value : BB.data <= YB.value) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
            code: zB.too_small,
            minimum: YB.value,
            type: "number",
            inclusive: YB.inclusive,
            exact: !1,
            message: YB.message
          }), GB.ap())
        } else if ("max" === YB.kind) {
          (YB.inclusive ? BB.data > YB.value : BB.data >= YB.value) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
            code: zB.too_big,
            maximum: YB.value,
            type: "number",
            inclusive: YB.inclusive,
            exact: !1,
            message: YB.message
          }), GB.ap())
        } else "multipleOf" === YB.kind ? 0 !== hB(BB.data, YB.value) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
          code: zB.not_multiple_of,
          multipleOf: YB.value,
          message: YB.message
        }), GB.ap()) : "finite" === YB.kind ? Number.isFinite(BB.data) || (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
          code: zB.not_finite,
          message: YB.message
        }), GB.ap()) : jB.assertNever(YB);
        return {
          status: GB.value,
          value: BB.data
        }
      }
      gte(BB, OB) {
        return this.setLimit("min", BB, !0, dB.toString(OB))
      }
      gt(BB, OB) {
        return this.setLimit("min", BB, !1, dB.toString(OB))
      }
      lte(BB, OB) {
        return this.setLimit("max", BB, !0, dB.toString(OB))
      }
      lt(BB, OB) {
        return this.setLimit("max", BB, !1, dB.toString(OB))
      }
      setLimit(BB, OB, GB, YB) {
        return new aB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: OB,
            inclusive: GB,
            message: dB.toString(YB)
          }]
        })
      }
      _addCheck(BB) {
        return new aB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      int(BB) {
        return this._addCheck({
          kind: "int",
          message: dB.toString(BB)
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: dB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: dB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: dB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: dB.toString(BB)
        })
      }
      multipleOf(BB, OB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: dB.toString(OB)
        })
      }
      finite(BB) {
        return this._addCheck({
          kind: "finite",
          message: dB.toString(BB)
        })
      }
      safe(BB) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: dB.toString(BB)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: dB.toString(BB)
        })
      }
      get minValue() {
        let BB = null;
        for (const OB of this._def.checks) "min" === OB.kind && (null === BB || OB.value > BB) && (BB = OB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const OB of this._def.checks) "max" === OB.kind && (null === BB || OB.value < BB) && (BB = OB.value);
        return BB
      }
      get isInt() {
        return !!this._def.checks.find((BB => "int" === BB.kind || "multipleOf" === BB.kind && jB.isInteger(BB.value)))
      }
      get isFinite() {
        let BB = null,
          OB = null;
        for (const GB of this._def.checks) {
          if ("finite" === GB.kind || "int" === GB.kind || "multipleOf" === GB.kind) return !0;
          "min" === GB.kind ? (null === OB || GB.value > OB) && (OB = GB.value) : "max" === GB.kind && (null === BB || GB.value < BB) && (BB = GB.value)
        }
        return Number.isFinite(OB) && Number.isFinite(BB)
      }
    }
    aB.create = BB => new aB({
      checks: [],
      typeName: FO.ZodNumber,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...mB(BB)
    });
    class eB extends IB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(BB) {
        this._def.coerce && (BB.data = BigInt(BB.data));
        if (this._getType(BB) !== MB.bigint) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.bigint,
            received: OB.parsedType
          }), AB
        }
        let OB;
        const GB = new WB;
        for (const YB of this._def.checks)
          if ("min" === YB.kind) {
            (YB.inclusive ? BB.data < YB.value : BB.data <= YB.value) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
              code: zB.too_small,
              type: "bigint",
              minimum: YB.value,
              inclusive: YB.inclusive,
              message: YB.message
            }), GB.ap())
          } else if ("max" === YB.kind) {
          (YB.inclusive ? BB.data > YB.value : BB.data >= YB.value) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
            code: zB.too_big,
            type: "bigint",
            maximum: YB.value,
            inclusive: YB.inclusive,
            message: YB.message
          }), GB.ap())
        } else "multipleOf" === YB.kind ? BB.data % YB.value !== BigInt(0) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
          code: zB.not_multiple_of,
          multipleOf: YB.value,
          message: YB.message
        }), GB.ap()) : jB.assertNever(YB);
        return {
          status: GB.value,
          value: BB.data
        }
      }
      gte(BB, OB) {
        return this.setLimit("min", BB, !0, dB.toString(OB))
      }
      gt(BB, OB) {
        return this.setLimit("min", BB, !1, dB.toString(OB))
      }
      lte(BB, OB) {
        return this.setLimit("max", BB, !0, dB.toString(OB))
      }
      lt(BB, OB) {
        return this.setLimit("max", BB, !1, dB.toString(OB))
      }
      setLimit(BB, OB, GB, YB) {
        return new eB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: OB,
            inclusive: GB,
            message: dB.toString(YB)
          }]
        })
      }
      _addCheck(BB) {
        return new eB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: dB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: dB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: dB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: dB.toString(BB)
        })
      }
      multipleOf(BB, OB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: dB.toString(OB)
        })
      }
      get minValue() {
        let BB = null;
        for (const OB of this._def.checks) "min" === OB.kind && (null === BB || OB.value > BB) && (BB = OB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const OB of this._def.checks) "max" === OB.kind && (null === BB || OB.value < BB) && (BB = OB.value);
        return BB
      }
    }
    eB.create = BB => {
      var OB;
      return new eB({
        checks: [],
        typeName: FO.ZodBigInt,
        coerce: null !== (OB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== OB && OB,
        ...mB(BB)
      })
    };
    class TB extends IB {
      _parse(BB) {
        this._def.coerce && (BB.data = Boolean(BB.data));
        if (this._getType(BB) !== MB.boolean) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.boolean,
            received: OB.parsedType
          }), AB
        }
        return SB(BB.data)
      }
    }
    TB.create = BB => new TB({
      typeName: FO.ZodBoolean,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...mB(BB)
    });
    class bB extends IB {
      _parse(BB) {
        this._def.coerce && (BB.data = new Date(BB.data));
        if (this._getType(BB) !== MB.date) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.date,
            received: OB.parsedType
          }), AB
        }
        if (isNaN(BB.data.getTime())) {
          return RB(this._getOrReturnCtx(BB), {
            code: zB.invalid_date
          }), AB
        }
        const OB = new WB;
        let GB;
        for (const YB of this._def.checks) "min" === YB.kind ? BB.data.getTime() < YB.value && (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          code: zB.too_small,
          message: YB.message,
          inclusive: !0,
          exact: !1,
          minimum: YB.value,
          type: "date"
        }), OB.ap()) : "max" === YB.kind ? BB.data.getTime() > YB.value && (GB = this._getOrReturnCtx(BB, GB), RB(GB, {
          code: zB.too_big,
          message: YB.message,
          inclusive: !0,
          exact: !1,
          maximum: YB.value,
          type: "date"
        }), OB.ap()) : jB.assertNever(YB);
        return {
          status: OB.value,
          value: new Date(BB.data.getTime())
        }
      }
      _addCheck(BB) {
        return new bB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      min(BB, OB) {
        return this._addCheck({
          kind: "min",
          value: BB.getTime(),
          message: dB.toString(OB)
        })
      }
      max(BB, OB) {
        return this._addCheck({
          kind: "max",
          value: BB.getTime(),
          message: dB.toString(OB)
        })
      }
      get minDate() {
        let BB = null;
        for (const OB of this._def.checks) "min" === OB.kind && (null === BB || OB.value > BB) && (BB = OB.value);
        return null != BB ? new Date(BB) : null
      }
      get maxDate() {
        let BB = null;
        for (const OB of this._def.checks) "max" === OB.kind && (null === BB || OB.value < BB) && (BB = OB.value);
        return null != BB ? new Date(BB) : null
      }
    }
    bB.create = BB => new bB({
      checks: [],
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      typeName: FO.ZodDate,
      ...mB(BB)
    });
    class CB extends IB {
      _parse(BB) {
        if (this._getType(BB) !== MB.symbol) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.symbol,
            received: OB.parsedType
          }), AB
        }
        return SB(BB.data)
      }
    }
    CB.create = BB => new CB({
      typeName: FO.ZodSymbol,
      ...mB(BB)
    });
    class HB extends IB {
      _parse(BB) {
        if (this._getType(BB) !== MB.undefined) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.undefined,
            received: OB.parsedType
          }), AB
        }
        return SB(BB.data)
      }
    }
    HB.create = BB => new HB({
      typeName: FO.ZodUndefined,
      ...mB(BB)
    });
    class vB extends IB {
      _parse(BB) {
        if (this._getType(BB) !== MB.null) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.null,
            received: OB.parsedType
          }), AB
        }
        return SB(BB.data)
      }
    }
    vB.create = BB => new vB({
      typeName: FO.ZodNull,
      ...mB(BB)
    });
    class sB extends IB {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(BB) {
        return SB(BB.data)
      }
    }
    sB.create = BB => new sB({
      typeName: FO.ZodAny,
      ...mB(BB)
    });
    class xB extends IB {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(BB) {
        return SB(BB.data)
      }
    }
    xB.create = BB => new xB({
      typeName: FO.ZodUnknown,
      ...mB(BB)
    });
    class tB extends IB {
      _parse(BB) {
        const OB = this._getOrReturnCtx(BB);
        return RB(OB, {
          code: zB.invalid_type,
          expected: MB.never,
          received: OB.parsedType
        }), AB
      }
    }
    tB.create = BB => new tB({
      typeName: FO.ZodNever,
      ...mB(BB)
    });
    class BO extends IB {
      _parse(BB) {
        if (this._getType(BB) !== MB.undefined) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.void,
            received: OB.parsedType
          }), AB
        }
        return SB(BB.data)
      }
    }
    BO.create = BB => new BO({
      typeName: FO.ZodVoid,
      ...mB(BB)
    });
    class OO extends IB {
      _parse(BB) {
        const {
          ctx: OB,
          status: GB
        } = this._processInputParams(BB), YB = this._def;
        if (OB.parsedType !== MB.array) return RB(OB, {
          code: zB.invalid_type,
          expected: MB.array,
          received: OB.parsedType
        }), AB;
        if (null !== YB.exactLength) {
          const BB = OB.data.length > YB.exactLength.value,
            DB = OB.data.length < YB.exactLength.value;
          (BB || DB) && (RB(OB, {
            code: BB ? zB.too_big : zB.too_small,
            minimum: DB ? YB.exactLength.value : void 0,
            maximum: BB ? YB.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: YB.exactLength.message
          }), GB.ap())
        }
        if (null !== YB.minLength && OB.data.length < YB.minLength.value && (RB(OB, {
            code: zB.too_small,
            minimum: YB.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: YB.minLength.message
          }), GB.ap()), null !== YB.maxLength && OB.data.length > YB.maxLength.value && (RB(OB, {
            code: zB.too_big,
            maximum: YB.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: YB.maxLength.message
          }), GB.ap()), OB.common.async) return Promise.all([...OB.data].map(((BB, GB) => YB.type._parseAsync(new KB(OB, BB, OB.path, GB))))).then((BB => WB.mergeArray(GB, BB)));
        const DB = [...OB.data].map(((BB, GB) => YB.type._parseSync(new KB(OB, BB, OB.path, GB))));
        return WB.mergeArray(GB, DB)
      }
      get element() {
        return this._def.type
      }
      min(BB, OB) {
        return new OO({
          ...this._def,
          minLength: {
            value: BB,
            message: dB.toString(OB)
          }
        })
      }
      max(BB, OB) {
        return new OO({
          ...this._def,
          maxLength: {
            value: BB,
            message: dB.toString(OB)
          }
        })
      }
      length(BB, OB) {
        return new OO({
          ...this._def,
          exactLength: {
            value: BB,
            message: dB.toString(OB)
          }
        })
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }

    function GO(BB) {
      if (BB instanceof YO) {
        const OB = {};
        for (const GB in BB.shape) {
          const YB = BB.shape[GB];
          OB[GB] = VO.create(GO(YB))
        }
        return new YO({
          ...BB._def,
          shape: () => OB
        })
      }
      return BB instanceof OO ? new OO({
        ...BB._def,
        type: GO(BB.element)
      }) : BB instanceof VO ? VO.create(GO(BB.unwrap())) : BB instanceof SO ? SO.create(GO(BB.unwrap())) : BB instanceof JO ? JO.create(BB.items.map((BB => GO(BB)))) : BB
    }
    OO.create = (BB, OB) => new OO({
      type: BB,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: FO.ZodArray,
      ...mB(OB)
    });
    class YO extends IB {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const BB = this._def.shape(),
          OB = jB.objectKeys(BB);
        return this._cached = {
          shape: BB,
          keys: OB
        }
      }
      _parse(BB) {
        if (this._getType(BB) !== MB.object) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.object,
            received: OB.parsedType
          }), AB
        }
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB), {
          shape: YB,
          keys: DB
        } = this._getCached(), QB = [];
        if (!(this._def.catchall instanceof tB && "strip" === this._def.unknownKeys))
          for (const jB in GB.data) DB.includes(jB) || QB.push(jB);
        const oB = [];
        for (const jB of DB) {
          const BB = YB[jB],
            OB = GB.data[jB];
          oB.push({
            key: {
              status: "valid",
              value: jB
            },
            value: BB._parse(new KB(GB, OB, GB.path, jB)),
            alwaysSet: jB in GB.data
          })
        }
        if (this._def.catchall instanceof tB) {
          const BB = this._def.unknownKeys;
          if ("passthrough" === BB)
            for (const OB of QB) oB.push({
              key: {
                status: "valid",
                value: OB
              },
              value: {
                status: "valid",
                value: GB.data[OB]
              }
            });
          else if ("strict" === BB) QB.length > 0 && (RB(GB, {
            code: zB.unrecognized_keys,
            keys: QB
          }), OB.ap());
          else if ("strip" !== BB) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const BB = this._def.catchall;
          for (const OB of QB) {
            const YB = GB.data[OB];
            oB.push({
              key: {
                status: "valid",
                value: OB
              },
              value: BB._parse(new KB(GB, YB, GB.path, OB)),
              alwaysSet: OB in GB.data
            })
          }
        }
        return GB.common.async ? Promise.resolve().then((async () => {
          const BB = [];
          for (const OB of oB) {
            const GB = await OB.key;
            BB.push({
              key: GB,
              value: await OB.value,
              alwaysSet: OB.alwaysSet
            })
          }
          return BB
        })).then((BB => WB.mergeObjectSync(OB, BB))) : WB.mergeObjectSync(OB, oB)
      }
      get shape() {
        return this._def.shape()
      }
      strict(BB) {
        return dB.errToObj, new YO({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== BB ? {
            errorMap: (OB, GB) => {
              var YB, DB, QB, oB;
              const jB = null !== (QB = null === (DB = (YB = this._def).errorMap) || void 0 === DB ? void 0 : DB.call(YB, OB, GB).message) && void 0 !== QB ? QB : GB.defaultError;
              return "unrecognized_keys" === OB.code ? {
                message: null !== (oB = dB.errToObj(BB).message) && void 0 !== oB ? oB : jB
              } : {
                message: jB
              }
            }
          } : {}
        })
      }
      strip() {
        return new YO({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new YO({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(BB) {
        return new YO({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...BB
          })
        })
      }
      merge(BB) {
        return new YO({
          unknownKeys: BB._def.unknownKeys,
          catchall: BB._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...BB._def.shape()
          }),
          typeName: FO.ZodObject
        })
      }
      setKey(BB, OB) {
        return this.augment({
          [BB]: OB
        })
      }
      catchall(BB) {
        return new YO({
          ...this._def,
          catchall: BB
        })
      }
      pl(BB) {
        const OB = {};
        return jB.objectKeys(BB).forEach((GB => {
          BB[GB] && this.shape[GB] && (OB[GB] = this.shape[GB])
        })), new YO({
          ...this._def,
          shape: () => OB
        })
      }
      omit(BB) {
        const OB = {};
        return jB.objectKeys(this.shape).forEach((GB => {
          BB[GB] || (OB[GB] = this.shape[GB])
        })), new YO({
          ...this._def,
          shape: () => OB
        })
      }
      deepPartial() {
        return GO(this)
      }
      partial(BB) {
        const OB = {};
        return jB.objectKeys(this.shape).forEach((GB => {
          const YB = this.shape[GB];
          BB && !BB[GB] ? OB[GB] = YB : OB[GB] = YB.optional()
        })), new YO({
          ...this._def,
          shape: () => OB
        })
      }
      required(BB) {
        const OB = {};
        return jB.objectKeys(this.shape).forEach((GB => {
          if (BB && !BB[GB]) OB[GB] = this.shape[GB];
          else {
            let BB = this.shape[GB];
            for (; BB instanceof VO;) BB = BB._def.innerType;
            OB[GB] = BB
          }
        })), new YO({
          ...this._def,
          shape: () => OB
        })
      }
      keyof() {
        return ZO(jB.objectKeys(this.shape))
      }
    }
    YO.create = (BB, OB) => new YO({
      shape: () => BB,
      unknownKeys: "strip",
      catchall: tB.create(),
      typeName: FO.ZodObject,
      ...mB(OB)
    }), YO.strictCreate = (BB, OB) => new YO({
      shape: () => BB,
      unknownKeys: "strict",
      catchall: tB.create(),
      typeName: FO.ZodObject,
      ...mB(OB)
    }), YO.lazycreate = (BB, OB) => new YO({
      shape: BB,
      unknownKeys: "strip",
      catchall: tB.create(),
      typeName: FO.ZodObject,
      ...mB(OB)
    });
    class DO extends IB {
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB), GB = this._def.options;
        if (OB.common.async) return Promise.all(GB.map((async BB => {
          const GB = {
            ...OB,
            common: {
              ...OB.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await BB._parseAsync({
              data: OB.data,
              path: OB.path,
              parent: GB
            }),
            ctx: GB
          }
        }))).then((function(BB) {
          for (const OB of BB)
            if ("valid" === OB.result.status) return OB.result;
          for (const YB of BB)
            if ("ap" === YB.result.status) return OB.common.issues.push(...YB.ctx.common.issues), YB.result;
          const GB = BB.map((BB => new lB(BB.ctx.common.issues)));
          return RB(OB, {
            code: zB.invalid_union,
            unionErrors: GB
          }), AB
        }));
        {
          let BB;
          const YB = [];
          for (const QB of GB) {
            const GB = {
                ...OB,
                common: {
                  ...OB.common,
                  issues: []
                },
                parent: null
              },
              DB = QB._parseSync({
                data: OB.data,
                path: OB.path,
                parent: GB
              });
            if ("valid" === DB.status) return DB;
            "ap" !== DB.status || BB || (BB = {
              result: DB,
              ctx: GB
            }), GB.common.issues.length && YB.push(GB.common.issues)
          }
          if (BB) return OB.common.issues.push(...BB.ctx.common.issues), BB.result;
          const DB = YB.map((BB => new lB(BB)));
          return RB(OB, {
            code: zB.invalid_union,
            unionErrors: DB
          }), AB
        }
      }
      get options() {
        return this._def.options
      }
    }
    DO.create = (BB, OB) => new DO({
      options: BB,
      typeName: FO.ZodUnion,
      ...mB(OB)
    });
    const QO = BB => BB instanceof pO ? QO(BB.schema) : BB instanceof AO ? QO(BB.innerType()) : BB instanceof qO ? [BB.value] : BB instanceof NO ? BB.options : BB instanceof RO ? Object.keys(BB.enum) : BB instanceof nO ? QO(BB._def.innerType) : BB instanceof HB ? [void 0] : BB instanceof vB ? [null] : null;
    class oO extends IB {
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB);
        if (OB.parsedType !== MB.object) return RB(OB, {
          code: zB.invalid_type,
          expected: MB.object,
          received: OB.parsedType
        }), AB;
        const GB = this.discriminator,
          YB = OB.data[GB],
          DB = this.optionsMap.get(YB);
        return DB ? OB.common.async ? DB._parseAsync({
          data: OB.data,
          path: OB.path,
          parent: OB
        }) : DB._parseSync({
          data: OB.data,
          path: OB.path,
          parent: OB
        }) : (RB(OB, {
          code: zB.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [GB]
        }), AB)
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
      static create(BB, OB, GB) {
        const YB = new Map;
        for (const DB of OB) {
          const OB = QO(DB.shape[BB]);
          if (!OB) throw new Error(`A discriminator value for key \`${BB}\` could not be extracted from all schema options`);
          for (const GB of OB) {
            if (YB.has(GB)) throw new Error(`Discriminator property ${String(BB)} has duplicate value ${String(GB)}`);
            YB.set(GB, DB)
          }
        }
        return new oO({
          typeName: FO.ZodDiscriminatedUnion,
          discriminator: BB,
          options: OB,
          optionsMap: YB,
          ...mB(GB)
        })
      }
    }

    function jO(BB, OB) {
      const GB = PB(BB),
        YB = PB(OB);
      if (BB === OB) return {
        valid: !0,
        data: BB
      };
      if (GB === MB.object && YB === MB.object) {
        const GB = jB.objectKeys(OB),
          YB = jB.objectKeys(BB).filter((BB => -1 !== GB.indexOf(BB))),
          DB = {
            ...BB,
            ...OB
          };
        for (const QB of YB) {
          const GB = jO(BB[QB], OB[QB]);
          if (!GB.valid) return {
            valid: !1
          };
          DB[QB] = GB.data
        }
        return {
          valid: !0,
          data: DB
        }
      }
      if (GB === MB.array && YB === MB.array) {
        if (BB.length !== OB.length) return {
          valid: !1
        };
        const GB = [];
        for (let YB = 0; YB < BB.length; YB++) {
          const DB = jO(BB[YB], OB[YB]);
          if (!DB.valid) return {
            valid: !1
          };
          GB.push(DB.data)
        }
        return {
          valid: !0,
          data: GB
        }
      }
      return GB === MB.date && YB === MB.date && +BB === +OB ? {
        valid: !0,
        data: BB
      } : {
        valid: !1
      }
    }
    class yO extends IB {
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB), YB = (BB, YB) => {
          if (nB(BB) || nB(YB)) return AB;
          const DB = jO(BB.value, YB.value);
          return DB.valid ? ((UB(BB) || UB(YB)) && OB.ap(), {
            status: OB.value,
            value: DB.data
          }) : (RB(GB, {
            code: zB.invalid_intersection_types
          }), AB)
        };
        return GB.common.async ? Promise.all([this._def.left._parseAsync({
          data: GB.data,
          path: GB.path,
          parent: GB
        }), this._def.right._parseAsync({
          data: GB.data,
          path: GB.path,
          parent: GB
        })]).then((BB => {
          let [OB, GB] = BB;
          return YB(OB, GB)
        })) : YB(this._def.left._parseSync({
          data: GB.data,
          path: GB.path,
          parent: GB
        }), this._def.right._parseSync({
          data: GB.data,
          path: GB.path,
          parent: GB
        }))
      }
    }
    yO.create = (BB, OB, GB) => new yO({
      left: BB,
      right: OB,
      typeName: FO.ZodIntersection,
      ...mB(GB)
    });
    class JO extends IB {
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB);
        if (GB.parsedType !== MB.array) return RB(GB, {
          code: zB.invalid_type,
          expected: MB.array,
          received: GB.parsedType
        }), AB;
        if (GB.data.length < this._def.items.length) return RB(GB, {
          code: zB.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), AB;
        !this._def.rest && GB.data.length > this._def.items.length && (RB(GB, {
          code: zB.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), OB.ap());
        const YB = [...GB.data].map(((BB, OB) => {
          const YB = this._def.items[OB] || this._def.rest;
          return YB ? YB._parse(new KB(GB, BB, GB.path, OB)) : null
        })).filter((BB => !!BB));
        return GB.common.async ? Promise.all(YB).then((BB => WB.mergeArray(OB, BB))) : WB.mergeArray(OB, YB)
      }
      get items() {
        return this._def.items
      }
      rest(BB) {
        return new JO({
          ...this._def,
          rest: BB
        })
      }
    }
    JO.create = (BB, OB) => {
      if (!Array.isArray(BB)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new JO({
        items: BB,
        typeName: FO.ZodTuple,
        rest: null,
        ...mB(OB)
      })
    };
    class MO extends IB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB);
        if (GB.parsedType !== MB.object) return RB(GB, {
          code: zB.invalid_type,
          expected: MB.object,
          received: GB.parsedType
        }), AB;
        const YB = [],
          DB = this._def.keyType,
          QB = this._def.valueType;
        for (const oB in GB.data) YB.push({
          key: DB._parse(new KB(GB, oB, GB.path, oB)),
          value: QB._parse(new KB(GB, GB.data[oB], GB.path, oB))
        });
        return GB.common.async ? WB.mergeObjectAsync(OB, YB) : WB.mergeObjectSync(OB, YB)
      }
      get element() {
        return this._def.valueType
      }
      static create(BB, OB, GB) {
        return new MO(OB instanceof IB ? {
          keyType: BB,
          valueType: OB,
          typeName: FO.ZodRecord,
          ...mB(GB)
        } : {
          keyType: cB.create(),
          valueType: BB,
          typeName: FO.ZodRecord,
          ...mB(OB)
        })
      }
    }
    class PO extends IB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB);
        if (GB.parsedType !== MB.map) return RB(GB, {
          code: zB.invalid_type,
          expected: MB.map,
          received: GB.parsedType
        }), AB;
        const YB = this._def.keyType,
          DB = this._def.valueType,
          QB = [...GB.data.entries()].map(((BB, OB) => {
            let [QB, oB] = BB;
            return {
              key: YB._parse(new KB(GB, QB, GB.path, [OB, "key"])),
              value: DB._parse(new KB(GB, oB, GB.path, [OB, "value"]))
            }
          }));
        if (GB.common.async) {
          const BB = new Map;
          return Promise.resolve().then((async () => {
            for (const GB of QB) {
              const YB = await GB.key,
                DB = await GB.value;
              if ("aborted" === YB.status || "aborted" === DB.status) return AB;
              "ap" !== YB.status && "ap" !== DB.status || OB.ap(), BB.set(YB.value, DB.value)
            }
            return {
              status: OB.value,
              value: BB
            }
          }))
        } {
          const BB = new Map;
          for (const GB of QB) {
            const YB = GB.key,
              DB = GB.value;
            if ("aborted" === YB.status || "aborted" === DB.status) return AB;
            "ap" !== YB.status && "ap" !== DB.status || OB.ap(), BB.set(YB.value, DB.value)
          }
          return {
            status: OB.value,
            value: BB
          }
        }
      }
    }
    PO.create = (BB, OB, GB) => new PO({
      valueType: OB,
      keyType: BB,
      typeName: FO.ZodMap,
      ...mB(GB)
    });
    class zO extends IB {
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB);
        if (GB.parsedType !== MB.set) return RB(GB, {
          code: zB.invalid_type,
          expected: MB.set,
          received: GB.parsedType
        }), AB;
        const YB = this._def;
        null !== YB.minSize && GB.data.size < YB.minSize.value && (RB(GB, {
          code: zB.too_small,
          minimum: YB.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: YB.minSize.message
        }), OB.ap()), null !== YB.maxSize && GB.data.size > YB.maxSize.value && (RB(GB, {
          code: zB.too_big,
          maximum: YB.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: YB.maxSize.message
        }), OB.ap());
        const DB = this._def.valueType;

        function QB(BB) {
          const GB = new Set;
          for (const YB of BB) {
            if ("aborted" === YB.status) return AB;
            "ap" === YB.status && OB.ap(), GB.add(YB.value)
          }
          return {
            status: OB.value,
            value: GB
          }
        }
        const oB = [...GB.data.values()].map(((BB, OB) => DB._parse(new KB(GB, BB, GB.path, OB))));
        return GB.common.async ? Promise.all(oB).then((BB => QB(BB))) : QB(oB)
      }
      min(BB, OB) {
        return new zO({
          ...this._def,
          minSize: {
            value: BB,
            message: dB.toString(OB)
          }
        })
      }
      max(BB, OB) {
        return new zO({
          ...this._def,
          maxSize: {
            value: BB,
            message: dB.toString(OB)
          }
        })
      }
      size(BB, OB) {
        return this.min(BB, OB).max(BB, OB)
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }
    zO.create = (BB, OB) => new zO({
      valueType: BB,
      minSize: null,
      maxSize: null,
      typeName: FO.ZodSet,
      ...mB(OB)
    });
    class lO extends IB {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB);
        if (OB.parsedType !== MB.function) return RB(OB, {
          code: zB.invalid_type,
          expected: MB.function,
          received: OB.parsedType
        }), AB;

        function GB(BB, GB) {
          return NB({
            data: BB,
            path: OB.path,
            errorMaps: [OB.common.contextualErrorMap, OB.schemaErrorMap, ZB(), pB].filter((BB => !!BB)),
            issueData: {
              code: zB.invalid_arguments,
              argumentsError: GB
            }
          })
        }

        function YB(BB, GB) {
          return NB({
            data: BB,
            path: OB.path,
            errorMaps: [OB.common.contextualErrorMap, OB.schemaErrorMap, ZB(), pB].filter((BB => !!BB)),
            issueData: {
              code: zB.invalid_return_type,
              returnTypeError: GB
            }
          })
        }
        const DB = {
            errorMap: OB.common.contextualErrorMap
          },
          QB = OB.data;
        if (this._def.returns instanceof WO) {
          const BB = this;
          return SB((async function() {
            for (var OB = arguments.length, oB = new Array(OB), jB = 0; jB < OB; jB++) oB[jB] = arguments[jB];
            const yB = new lB([]),
              JB = await BB._def.args.parseAsync(oB, DB).catch((BB => {
                throw yB.addIssue(GB(oB, BB)), yB
              })),
              MB = await Reflect.apply(QB, this, JB);
            return await BB._def.returns._def.type.parseAsync(MB, DB).catch((BB => {
              throw yB.addIssue(YB(MB, BB)), yB
            }))
          }))
        } {
          const BB = this;
          return SB((function() {
            for (var OB = arguments.length, oB = new Array(OB), jB = 0; jB < OB; jB++) oB[jB] = arguments[jB];
            const yB = BB._def.args.safeParse(oB, DB);
            if (!yB.success) throw new lB([GB(oB, yB.error)]);
            const JB = Reflect.apply(QB, this, yB.data),
              MB = BB._def.returns.safeParse(JB, DB);
            if (!MB.success) throw new lB([YB(JB, MB.error)]);
            return MB.data
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
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return new lO({
          ...this._def,
          args: JO.create(OB).rest(xB.create())
        })
      }
      returns(BB) {
        return new lO({
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
      static create(BB, OB, GB) {
        return new lO({
          args: BB || JO.create([]).rest(xB.create()),
          returns: OB || xB.create(),
          typeName: FO.ZodFunction,
          ...mB(GB)
        })
      }
    }
    class pO extends IB {
      get schema() {
        return this._def.getter()
      }
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB);
        return this._def.getter()._parse({
          data: OB.data,
          path: OB.path,
          parent: OB
        })
      }
    }
    pO.create = (BB, OB) => new pO({
      getter: BB,
      typeName: FO.ZodLazy,
      ...mB(OB)
    });
    class qO extends IB {
      _parse(BB) {
        if (BB.data !== this._def.value) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            received: OB.data,
            code: zB.invalid_literal,
            expected: this._def.value
          }), AB
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

    function ZO(BB, OB) {
      return new NO({
        values: BB,
        typeName: FO.ZodEnum,
        ...mB(OB)
      })
    }
    qO.create = (BB, OB) => new qO({
      value: BB,
      typeName: FO.ZodLiteral,
      ...mB(OB)
    });
    class NO extends IB {
      _parse(BB) {
        if ("string" !== typeof BB.data) {
          const OB = this._getOrReturnCtx(BB),
            GB = this._def.values;
          return RB(OB, {
            expected: jB.joinValues(GB),
            received: OB.parsedType,
            code: zB.invalid_type
          }), AB
        }
        if (-1 === this._def.values.indexOf(BB.data)) {
          const OB = this._getOrReturnCtx(BB),
            GB = this._def.values;
          return RB(OB, {
            received: OB.data,
            code: zB.invalid_enum_value,
            options: GB
          }), AB
        }
        return SB(BB.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const BB = {};
        for (const OB of this._def.values) BB[OB] = OB;
        return BB
      }
      get Values() {
        const BB = {};
        for (const OB of this._def.values) BB[OB] = OB;
        return BB
      }
      get Enum() {
        const BB = {};
        for (const OB of this._def.values) BB[OB] = OB;
        return BB
      }
      extract(BB) {
        return NO.create(BB)
      }
      exclude(BB) {
        return NO.create(this.options.filter((OB => !BB.includes(OB))))
      }
    }
    NO.create = ZO;
    class RO extends IB {
      _parse(BB) {
        const OB = jB.getValidEnumValues(this._def.values),
          GB = this._getOrReturnCtx(BB);
        if (GB.parsedType !== MB.string && GB.parsedType !== MB.number) {
          const BB = jB.objectValues(OB);
          return RB(GB, {
            expected: jB.joinValues(BB),
            received: GB.parsedType,
            code: zB.invalid_type
          }), AB
        }
        if (-1 === OB.indexOf(BB.data)) {
          const BB = jB.objectValues(OB);
          return RB(GB, {
            received: GB.data,
            code: zB.invalid_enum_value,
            options: BB
          }), AB
        }
        return SB(BB.data)
      }
      get enum() {
        return this._def.values
      }
    }
    RO.create = (BB, OB) => new RO({
      values: BB,
      typeName: FO.ZodNativeEnum,
      ...mB(OB)
    });
    class WO extends IB {
      unwrap() {
        return this._def.type
      }
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB);
        if (OB.parsedType !== MB.promise && !1 === OB.common.async) return RB(OB, {
          code: zB.invalid_type,
          expected: MB.promise,
          received: OB.parsedType
        }), AB;
        const GB = OB.parsedType === MB.promise ? OB.data : Promise.resolve(OB.data);
        return SB(GB.then((BB => this._def.type.parseAsync(BB, {
          path: OB.path,
          errorMap: OB.common.contextualErrorMap
        }))))
      }
    }
    WO.create = (BB, OB) => new WO({
      type: BB,
      typeName: FO.ZodPromise,
      ...mB(OB)
    });
    class AO extends IB {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === FO.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB), YB = this._def.effect || null, DB = {
          addIssue: BB => {
            RB(GB, BB), BB.fatal ? OB.abort() : OB.ap()
          },
          get path() {
            return GB.path
          }
        };
        if (DB.addIssue = DB.addIssue.bind(DB), "preprocess" === YB.type) {
          const BB = YB.transform(GB.data, DB);
          return GB.common.issues.length ? {
            status: "ap",
            value: GB.data
          } : GB.common.async ? Promise.resolve(BB).then((BB => this._def.schema._parseAsync({
            data: BB,
            path: GB.path,
            parent: GB
          }))) : this._def.schema._parseSync({
            data: BB,
            path: GB.path,
            parent: GB
          })
        }
        if ("refinement" === YB.type) {
          const BB = BB => {
            const OB = YB.refinement(BB, DB);
            if (GB.common.async) return Promise.resolve(OB);
            if (OB instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return BB
          };
          if (!1 === GB.common.async) {
            const YB = this._def.schema._parseSync({
              data: GB.data,
              path: GB.path,
              parent: GB
            });
            return "aborted" === YB.status ? AB : ("ap" === YB.status && OB.ap(), BB(YB.value), {
              status: OB.value,
              value: YB.value
            })
          }
          return this._def.schema._parseAsync({
            data: GB.data,
            path: GB.path,
            parent: GB
          }).then((GB => "aborted" === GB.status ? AB : ("ap" === GB.status && OB.ap(), BB(GB.value).then((() => ({
            status: OB.value,
            value: GB.value
          }))))))
        }
        if ("transform" === YB.type) {
          if (!1 === GB.common.async) {
            const BB = this._def.schema._parseSync({
              data: GB.data,
              path: GB.path,
              parent: GB
            });
            if (!fB(BB)) return BB;
            const QB = YB.transform(BB.value, DB);
            if (QB instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: OB.value,
              value: QB
            }
          }
          return this._def.schema._parseAsync({
            data: GB.data,
            path: GB.path,
            parent: GB
          }).then((BB => fB(BB) ? Promise.resolve(YB.transform(BB.value, DB)).then((BB => ({
            status: OB.value,
            value: BB
          }))) : BB))
        }
        jB.assertNever(YB)
      }
    }
    AO.create = (BB, OB, GB) => new AO({
      schema: BB,
      typeName: FO.ZodEffects,
      effect: OB,
      ...mB(GB)
    }), AO.createWithPreprocess = (BB, OB, GB) => new AO({
      schema: OB,
      effect: {
        type: "preprocess",
        transform: BB
      },
      typeName: FO.ZodEffects,
      ...mB(GB)
    });
    class VO extends IB {
      _parse(BB) {
        return this._getType(BB) === MB.undefined ? SB(void 0) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    VO.create = (BB, OB) => new VO({
      innerType: BB,
      typeName: FO.ZodOptional,
      ...mB(OB)
    });
    class SO extends IB {
      _parse(BB) {
        return this._getType(BB) === MB.null ? SB(null) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    SO.create = (BB, OB) => new SO({
      innerType: BB,
      typeName: FO.ZodNullable,
      ...mB(OB)
    });
    class nO extends IB {
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB);
        let GB = OB.data;
        return OB.parsedType === MB.undefined && (GB = this._def.defaultValue()), this._def.innerType._parse({
          data: GB,
          path: OB.path,
          parent: OB
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    nO.create = (BB, OB) => new nO({
      innerType: BB,
      typeName: FO.ZodDefault,
      defaultValue: "function" === typeof OB.default ? OB.default : () => OB.default,
      ...mB(OB)
    });
    class UO extends IB {
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB), GB = {
          ...OB,
          common: {
            ...OB.common,
            issues: []
          }
        }, YB = this._def.innerType._parse({
          data: GB.data,
          path: GB.path,
          parent: {
            ...GB
          }
        });
        return kB(YB) ? YB.then((BB => ({
          status: "valid",
          value: "valid" === BB.status ? BB.value : this._def.catchValue({
            get error() {
              return new lB(GB.common.issues)
            },
            input: GB.data
          })
        }))) : {
          status: "valid",
          value: "valid" === YB.status ? YB.value : this._def.catchValue({
            get error() {
              return new lB(GB.common.issues)
            },
            input: GB.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    UO.create = (BB, OB) => new UO({
      innerType: BB,
      typeName: FO.ZodCatch,
      catchValue: "function" === typeof OB.catch ? OB.catch : () => OB.catch,
      ...mB(OB)
    });
    class fO extends IB {
      _parse(BB) {
        if (this._getType(BB) !== MB.nan) {
          const OB = this._getOrReturnCtx(BB);
          return RB(OB, {
            code: zB.invalid_type,
            expected: MB.nan,
            received: OB.parsedType
          }), AB
        }
        return {
          status: "valid",
          value: BB.data
        }
      }
    }
    fO.create = BB => new fO({
      typeName: FO.ZodNaN,
      ...mB(BB)
    });
    const kO = Symbol("zod_brand");
    class dO extends IB {
      _parse(BB) {
        const {
          ctx: OB
        } = this._processInputParams(BB), GB = OB.data;
        return this._def.type._parse({
          data: GB,
          path: OB.path,
          parent: OB
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class KO extends IB {
      _parse(BB) {
        const {
          status: OB,
          ctx: GB
        } = this._processInputParams(BB);
        if (GB.common.async) {
          return (async () => {
            const BB = await this._def.in._parseAsync({
              data: GB.data,
              path: GB.path,
              parent: GB
            });
            return "aborted" === BB.status ? AB : "ap" === BB.status ? (OB.ap(), VB(BB.value)) : this._def.out._parseAsync({
              data: BB.value,
              path: GB.path,
              parent: GB
            })
          })()
        } {
          const BB = this._def.in._parseSync({
            data: GB.data,
            path: GB.path,
            parent: GB
          });
          return "aborted" === BB.status ? AB : "ap" === BB.status ? (OB.ap(), {
            status: "ap",
            value: BB.value
          }) : this._def.out._parseSync({
            data: BB.value,
            path: GB.path,
            parent: GB
          })
        }
      }
      static create(BB, OB) {
        return new KO({
          in: BB,
          out: OB,
          typeName: FO.ZodPipeline
        })
      }
    }
    class uO extends IB {
      _parse(BB) {
        const OB = this._def.innerType._parse(BB);
        return fB(OB) && (OB.value = Object.freeze(OB.value)), OB
      }
    }
    uO.create = (BB, OB) => new uO({
      innerType: BB,
      typeName: FO.ZodReadonly,
      ...mB(OB)
    });
    const mO = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = arguments.length > 2 ? arguments[2] : void 0;
        return BB ? sB.create().superRefine(((YB, DB) => {
          var QB, oB;
          if (!BB(YB)) {
            const BB = "function" === typeof OB ? OB(YB) : "string" === typeof OB ? {
                message: OB
              } : OB,
              jB = null === (oB = null !== (QB = BB.fatal) && void 0 !== QB ? QB : GB) || void 0 === oB || oB,
              yB = "string" === typeof BB ? {
                message: BB
              } : BB;
            DB.addIssue({
              code: "custom",
              ...yB,
              fatal: jB
            })
          }
        })) : sB.create()
      },
      IO = {
        object: YO.lazycreate
      };
    var FO;
    ! function(BB) {
      BB.ZodString = "ZodString", BB.ZodNumber = "ZodNumber", BB.ZodNaN = "ZodNaN", BB.ZodBigInt = "ZodBigInt", BB.ZodBoolean = "ZodBoolean", BB.ZodDate = "ZodDate", BB.ZodSymbol = "ZodSymbol", BB.ZodUndefined = "ZodUndefined", BB.ZodNull = "ZodNull", BB.ZodAny = "ZodAny", BB.ZodUnknown = "ZodUnknown", BB.ZodNever = "ZodNever", BB.ZodVoid = "ZodVoid", BB.ZodArray = "ZodArray", BB.ZodObject = "ZodObject", BB.ZodUnion = "ZodUnion", BB.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", BB.ZodIntersection = "ZodIntersection", BB.ZodTuple = "ZodTuple", BB.ZodRecord = "ZodRecord", BB.ZodMap = "ZodMap", BB.ZodSet = "ZodSet", BB.ZodFunction = "ZodFunction", BB.ZodLazy = "ZodLazy", BB.ZodLiteral = "ZodLiteral", BB.ZodEnum = "ZodEnum", BB.ZodEffects = "ZodEffects", BB.ZodNativeEnum = "ZodNativeEnum", BB.ZodOptional = "ZodOptional", BB.ZodNullable = "ZodNullable", BB.ZodDefault = "ZodDefault", BB.ZodCatch = "ZodCatch", BB.ZodPromise = "ZodPromise", BB.ZodBranded = "ZodBranded", BB.ZodPipeline = "ZodPipeline", BB.ZodReadonly = "ZodReadonly"
    }(FO || (FO = {}));
    const iO = cB.create,
      LO = aB.create,
      gO = fO.create,
      rO = eB.create,
      XO = TB.create,
      wO = bB.create,
      EO = CB.create,
      cO = HB.create,
      hO = vB.create,
      aO = sB.create,
      eO = xB.create,
      TO = tB.create,
      bO = BO.create,
      CO = OO.create,
      HO = YO.create,
      vO = YO.strictCreate,
      sO = DO.create,
      xO = oO.create,
      tO = yO.create,
      BG = JO.create,
      OG = MO.create,
      GG = PO.create,
      YG = zO.create,
      DG = lO.create,
      QG = pO.create,
      oG = qO.create,
      jG = NO.create,
      yG = RO.create,
      JG = WO.create,
      MG = AO.create,
      PG = VO.create,
      zG = SO.create,
      lG = AO.createWithPreprocess,
      pG = KO.create,
      qG = {
        string: BB => cB.create({
          ...BB,
          coerce: !0
        }),
        number: BB => aB.create({
          ...BB,
          coerce: !0
        }),
        boolean: BB => TB.create({
          ...BB,
          coerce: !0
        }),
        bigint: BB => eB.create({
          ...BB,
          coerce: !0
        }),
        date: BB => bB.create({
          ...BB,
          coerce: !0
        })
      },
      ZG = AB;
    var NG = Object.freeze({
        __proto__: null,
        defaultErrorMap: pB,
        setErrorMap: function(BB) {
          qB = BB
        },
        getErrorMap: ZB,
        makeIssue: NB,
        EMPTY_PATH: [],
        addIssueToContext: RB,
        ParseStatus: WB,
        INVALID: AB,
        DIRTY: VB,
        OK: SB,
        isAborted: nB,
        isDirty: UB,
        isValid: fB,
        isAsync: kB,
        get util() {
          return jB
        },
        get objectUtil() {
          return yB
        },
        ZodParsedType: MB,
        getParsedType: PB,
        ZodType: IB,
        ZodString: cB,
        ZodNumber: aB,
        ZodBigInt: eB,
        ZodBoolean: TB,
        ZodDate: bB,
        ZodSymbol: CB,
        ZodUndefined: HB,
        ZodNull: vB,
        ZodAny: sB,
        ZodUnknown: xB,
        ZodNever: tB,
        ZodVoid: BO,
        ZodArray: OO,
        ZodObject: YO,
        ZodUnion: DO,
        ZodDiscriminatedUnion: oO,
        ZodIntersection: yO,
        ZodTuple: JO,
        ZodRecord: MO,
        ZodMap: PO,
        ZodSet: zO,
        ZodFunction: lO,
        ZodLazy: pO,
        ZodLiteral: qO,
        ZodEnum: NO,
        ZodNativeEnum: RO,
        ZodPromise: WO,
        ZodEffects: AO,
        ZodTransformer: AO,
        ZodOptional: VO,
        ZodNullable: SO,
        ZodDefault: nO,
        ZodCatch: UO,
        ZodNaN: fO,
        BRAND: kO,
        ZodBranded: dO,
        ZodPipeline: KO,
        ZodReadonly: uO,
        custom: mO,
        Schema: IB,
        ZodSchema: IB,
        late: IO,
        get ZodFirstPartyTypeKind() {
          return FO
        },
        coerce: qG,
        any: aO,
        array: CO,
        bigint: rO,
        boolean: XO,
        date: wO,
        discriminatedUnion: xO,
        effect: MG,
        enum: jG,
        function: DG,
        instanceof: function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${BB.name}`
          };
          return mO((OB => OB instanceof BB), OB)
        },
        intersection: tO,
        lazy: QG,
        literal: oG,
        map: GG,
        nan: gO,
        nativeEnum: yG,
        never: TO,
        null: hO,
        nullable: zG,
        number: LO,
        object: HO,
        oboolean: () => XO().optional(),
        onumber: () => LO().optional(),
        optional: PG,
        ostring: () => iO().optional(),
        pipeline: pG,
        preprocess: lG,
        promise: JG,
        record: OG,
        set: YG,
        strictObject: vO,
        string: iO,
        symbol: EO,
        transformer: MG,
        tuple: BG,
        undefined: cO,
        union: sO,
        unknown: eO,
        void: bO,
        NEVER: ZG,
        ZodIssueCode: zB,
        quotelessJson: BB => JSON.stringify(BB, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: lB
      }),
      RG = {
        exports: {}
      };
    ! function(BB) {
      var OB = function(BB) {
        var GB = 1e7,
          YB = 9007199254740992,
          DB = zB(YB),
          QB = "0123456789abcdefghijklmnopqrstuvwxyz",
          oB = "function" === typeof BigInt;

        function jB(BB, OB, GB, YB) {
          return "undefined" === typeof BB ? jB[0] : "undefined" !== typeof OB && (10 !== +OB || GB) ? TB(BB, OB, GB, YB) : sB(BB)
        }

        function yB(BB, OB) {
          this.value = BB, this.sign = OB, this.isSmall = !1
        }

        function JB(BB) {
          this.value = BB, this.sign = BB < 0, this.isSmall = !0
        }

        function MB(BB) {
          this.value = BB
        }

        function PB(BB) {
          return -YB < BB && BB < YB
        }

        function zB(BB) {
          return BB < 1e7 ? [BB] : BB < 1e14 ? [BB % 1e7, Math.floor(BB / 1e7)] : [BB % 1e7, Math.floor(BB / 1e7) % 1e7, Math.floor(BB / 1e14)]
        }

        function lB(BB) {
          pB(BB);
          var OB = BB.length;
          if (OB < 4 && mB(BB, DB) < 0) switch (OB) {
            case 0:
              return 0;
            case 1:
              return BB[0];
            case 2:
              return BB[0] + BB[1] * GB;
            default:
              return BB[0] + (BB[1] + BB[2] * GB) * GB
          }
          return BB
        }

        function pB(BB) {
          for (var OB = BB.length; 0 === BB[--OB];);
          BB.length = OB + 1
        }

        function qB(BB) {
          for (var OB = new Array(BB), GB = -1; ++GB < BB;) OB[GB] = 0;
          return OB
        }

        function ZB(BB) {
          return BB > 0 ? Math.floor(BB) : Math.ceil(BB)
        }

        function NB(BB, OB) {
          var YB, DB, QB = BB.length,
            oB = OB.length,
            jB = new Array(QB),
            yB = 0,
            JB = GB;
          for (DB = 0; DB < oB; DB++) yB = (YB = BB[DB] + OB[DB] + yB) >= JB ? 1 : 0, jB[DB] = YB - yB * JB;
          for (; DB < QB;) yB = (YB = BB[DB] + yB) === JB ? 1 : 0, jB[DB++] = YB - yB * JB;
          return yB > 0 && jB.push(yB), jB
        }

        function RB(BB, OB) {
          return BB.length >= OB.length ? NB(BB, OB) : NB(OB, BB)
        }

        function WB(BB, OB) {
          var YB, DB, QB = BB.length,
            oB = new Array(QB),
            jB = GB;
          for (DB = 0; DB < QB; DB++) YB = BB[DB] - jB + OB, OB = Math.floor(YB / jB), oB[DB] = YB - OB * jB, OB += 1;
          for (; OB > 0;) oB[DB++] = OB % jB, OB = Math.floor(OB / jB);
          return oB
        }

        function AB(BB, OB) {
          var YB, DB, QB = BB.length,
            oB = OB.length,
            jB = new Array(QB),
            yB = 0,
            JB = GB;
          for (YB = 0; YB < oB; YB++)(DB = BB[YB] - yB - OB[YB]) < 0 ? (DB += JB, yB = 1) : yB = 0, jB[YB] = DB;
          for (YB = oB; YB < QB; YB++) {
            if (!((DB = BB[YB] - yB) < 0)) {
              jB[YB++] = DB;
              break
            }
            DB += JB, jB[YB] = DB
          }
          for (; YB < QB; YB++) jB[YB] = BB[YB];
          return pB(jB), jB
        }

        function VB(BB, OB, YB) {
          var DB, QB, oB = BB.length,
            jB = new Array(oB),
            MB = -OB,
            PB = GB;
          for (DB = 0; DB < oB; DB++) QB = BB[DB] + MB, MB = Math.floor(QB / PB), QB %= PB, jB[DB] = QB < 0 ? QB + PB : QB;
          return "number" === typeof(jB = lB(jB)) ? (YB && (jB = -jB), new JB(jB)) : new yB(jB, YB)
        }

        function SB(BB, OB) {
          var YB, DB, QB, oB, jB = BB.length,
            yB = OB.length,
            JB = qB(jB + yB),
            MB = GB;
          for (QB = 0; QB < jB; ++QB) {
            oB = BB[QB];
            for (var PB = 0; PB < yB; ++PB) YB = oB * OB[PB] + JB[QB + PB], DB = Math.floor(YB / MB), JB[QB + PB] = YB - DB * MB, JB[QB + PB + 1] += DB
          }
          return pB(JB), JB
        }

        function nB(BB, OB) {
          var YB, DB, QB = BB.length,
            oB = new Array(QB),
            jB = GB,
            yB = 0;
          for (DB = 0; DB < QB; DB++) YB = BB[DB] * OB + yB, yB = Math.floor(YB / jB), oB[DB] = YB - yB * jB;
          for (; yB > 0;) oB[DB++] = yB % jB, yB = Math.floor(yB / jB);
          return oB
        }

        function UB(BB, OB) {
          for (var GB = []; OB-- > 0;) GB.push(0);
          return GB.concat(BB)
        }

        function fB(BB, OB) {
          var GB = Math.max(BB.length, OB.length);
          if (GB <= 30) return SB(BB, OB);
          GB = Math.ceil(GB / 2);
          var YB = BB.slice(GB),
            DB = BB.slice(0, GB),
            QB = OB.slice(GB),
            oB = OB.slice(0, GB),
            jB = fB(DB, oB),
            yB = fB(YB, QB),
            JB = fB(RB(DB, YB), RB(oB, QB)),
            MB = RB(RB(jB, UB(AB(AB(JB, jB), yB), GB)), UB(yB, 2 * GB));
          return pB(MB), MB
        }

        function kB(BB, OB, YB) {
          return new yB(BB < GB ? nB(OB, BB) : SB(OB, zB(BB)), YB)
        }

        function dB(BB) {
          var OB, YB, DB, QB, oB = BB.length,
            jB = qB(oB + oB),
            yB = GB;
          for (DB = 0; DB < oB; DB++) {
            YB = 0 - (QB = BB[DB]) * QB;
            for (var JB = DB; JB < oB; JB++) OB = QB * BB[JB] * 2 + jB[DB + JB] + YB, YB = Math.floor(OB / yB), jB[DB + JB] = OB - YB * yB;
            jB[DB + oB] = YB
          }
          return pB(jB), jB
        }

        function KB(BB, OB) {
          var YB, DB, QB, oB, jB = BB.length,
            yB = qB(jB),
            JB = GB;
          for (QB = 0, YB = jB - 1; YB >= 0; --YB) QB = (oB = QB * JB + BB[YB]) - (DB = ZB(oB / OB)) * OB, yB[YB] = 0 | DB;
          return [yB, 0 | QB]
        }

        function uB(BB, OB) {
          var YB, DB = sB(OB);
          if (oB) return [new MB(BB.value / DB.value), new MB(BB.value % DB.value)];
          var QB, PB = BB.value,
            NB = DB.value;
          if (0 === NB) throw new Error("Cannot divide by zero");
          if (BB.isSmall) return DB.isSmall ? [new JB(ZB(PB / NB)), new JB(PB % NB)] : [jB[0], BB];
          if (DB.isSmall) {
            if (1 === NB) return [BB, jB[0]];
            if (-1 == NB) return [BB.ep(), jB[0]];
            var RB = Math.abs(NB);
            if (RB < GB) {
              QB = lB((YB = KB(PB, RB))[0]);
              var WB = YB[1];
              return BB.sign && (WB = -WB), "number" === typeof QB ? (BB.sign !== DB.sign && (QB = -QB), [new JB(QB), new JB(WB)]) : [new yB(QB, BB.sign !== DB.sign), new JB(WB)]
            }
            NB = zB(RB)
          }
          var VB = mB(PB, NB);
          if (-1 === VB) return [jB[0], BB];
          if (0 === VB) return [jB[BB.sign === DB.sign ? 1 : -1], jB[0]];
          YB = PB.length + NB.length <= 200 ? function(BB, OB) {
            var YB, DB, QB, oB, jB, yB, JB, MB = BB.length,
              PB = OB.length,
              zB = GB,
              pB = qB(OB.length),
              ZB = OB[PB - 1],
              NB = Math.ceil(zB / (2 * ZB)),
              RB = nB(BB, NB),
              WB = nB(OB, NB);
            for (RB.length <= MB && RB.push(0), WB.push(0), ZB = WB[PB - 1], DB = MB - PB; DB >= 0; DB--) {
              for (YB = zB - 1, RB[DB + PB] !== ZB && (YB = Math.floor((RB[DB + PB] * zB + RB[DB + PB - 1]) / ZB)), QB = 0, oB = 0, yB = WB.length, jB = 0; jB < yB; jB++) QB += YB * WB[jB], JB = Math.floor(QB / zB), oB += RB[DB + jB] - (QB - JB * zB), QB = JB, oB < 0 ? (RB[DB + jB] = oB + zB, oB = -1) : (RB[DB + jB] = oB, oB = 0);
              for (; 0 !== oB;) {
                for (YB -= 1, QB = 0, jB = 0; jB < yB; jB++)(QB += RB[DB + jB] - zB + WB[jB]) < 0 ? (RB[DB + jB] = QB + zB, QB = 0) : (RB[DB + jB] = QB, QB = 1);
                oB += QB
              }
              pB[DB] = YB
            }
            return RB = KB(RB, NB)[0], [lB(pB), lB(RB)]
          }(PB, NB) : function(BB, OB) {
            for (var YB, DB, QB, oB, jB, yB = BB.length, JB = OB.length, MB = [], PB = [], zB = GB; yB;)
              if (PB.unshift(BB[--yB]), pB(PB), mB(PB, OB) < 0) MB.push(0);
              else {
                QB = PB[(DB = PB.length) - 1] * zB + PB[DB - 2], oB = OB[JB - 1] * zB + OB[JB - 2], DB > JB && (QB = (QB + 1) * zB), YB = Math.ceil(QB / oB);
                do {
                  if (mB(jB = nB(OB, YB), PB) <= 0) break;
                  YB--
                } while (YB);
                MB.push(YB), PB = AB(PB, jB)
              } return MB.reverse(), [lB(MB), lB(PB)]
          }(PB, NB), QB = YB[0];
          var SB = BB.sign !== DB.sign,
            UB = YB[1],
            fB = BB.sign;
          return "number" === typeof QB ? (SB && (QB = -QB), QB = new JB(QB)) : QB = new yB(QB, SB), "number" === typeof UB ? (fB && (UB = -UB), UB = new JB(UB)) : UB = new yB(UB, fB), [QB, UB]
        }

        function mB(BB, OB) {
          if (BB.length !== OB.length) return BB.length > OB.length ? 1 : -1;
          for (var GB = BB.length - 1; GB >= 0; GB--)
            if (BB[GB] !== OB[GB]) return BB[GB] > OB[GB] ? 1 : -1;
          return 0
        }

        function IB(BB) {
          var OB = BB.abs();
          return !OB.isUnit() && (!!(OB.equals(2) || OB.equals(3) || OB.equals(5)) || !(OB.isEven() || OB.isDivisibleBy(3) || OB.isDivisibleBy(5)) && (!!OB.lesser(49) || void 0))
        }

        function FB(BB, GB) {
          for (var YB, DB, QB, oB = BB.prev(), jB = oB, yB = 0; jB.isEven();) jB = jB.divide(2), yB++;
          BB: for (DB = 0; DB < GB.length; DB++)
            if (!BB.lesser(GB[DB]) && !(QB = OB(GB[DB]).modPow(jB, BB)).isUnit() && !QB.equals(oB)) {
              for (YB = yB - 1; 0 != YB; YB--) {
                if ((QB = QB.square().mod(BB)).isUnit()) return !1;
                if (QB.equals(oB)) continue BB
              }
              return !1
            }
          return !0
        }
        yB.prototype = Object.create(jB.prototype), JB.prototype = Object.create(jB.prototype), MB.prototype = Object.create(jB.prototype), yB.prototype.add = function(BB) {
          var OB = sB(BB);
          if (this.sign !== OB.sign) return this.subtract(OB.ep());
          var GB = this.value,
            YB = OB.value;
          return OB.isSmall ? new yB(WB(GB, Math.abs(YB)), this.sign) : new yB(RB(GB, YB), this.sign)
        }, yB.prototype.plus = yB.prototype.add, JB.prototype.add = function(BB) {
          var OB = sB(BB),
            GB = this.value;
          if (GB < 0 !== OB.sign) return this.subtract(OB.ep());
          var YB = OB.value;
          if (OB.isSmall) {
            if (PB(GB + YB)) return new JB(GB + YB);
            YB = zB(Math.abs(YB))
          }
          return new yB(WB(YB, Math.abs(GB)), GB < 0)
        }, JB.prototype.plus = JB.prototype.add, MB.prototype.add = function(BB) {
          return new MB(this.value + sB(BB).value)
        }, MB.prototype.plus = MB.prototype.add, yB.prototype.subtract = function(BB) {
          var OB = sB(BB);
          if (this.sign !== OB.sign) return this.add(OB.ep());
          var GB = this.value,
            YB = OB.value;
          return OB.isSmall ? VB(GB, Math.abs(YB), this.sign) : function(BB, OB, GB) {
            var YB;
            return mB(BB, OB) >= 0 ? YB = AB(BB, OB) : (YB = AB(OB, BB), GB = !GB), "number" === typeof(YB = lB(YB)) ? (GB && (YB = -YB), new JB(YB)) : new yB(YB, GB)
          }(GB, YB, this.sign)
        }, yB.prototype.minus = yB.prototype.subtract, JB.prototype.subtract = function(BB) {
          var OB = sB(BB),
            GB = this.value;
          if (GB < 0 !== OB.sign) return this.add(OB.ep());
          var YB = OB.value;
          return OB.isSmall ? new JB(GB - YB) : VB(YB, Math.abs(GB), GB >= 0)
        }, JB.prototype.minus = JB.prototype.subtract, MB.prototype.subtract = function(BB) {
          return new MB(this.value - sB(BB).value)
        }, MB.prototype.minus = MB.prototype.subtract, yB.prototype.ep = function() {
          return new yB(this.value, !this.sign)
        }, JB.prototype.ep = function() {
          var BB = this.sign,
            OB = new JB(-this.value);
          return OB.sign = !BB, OB
        }, MB.prototype.ep = function() {
          return new MB(-this.value)
        }, yB.prototype.abs = function() {
          return new yB(this.value, !1)
        }, JB.prototype.abs = function() {
          return new JB(Math.abs(this.value))
        }, MB.prototype.abs = function() {
          return new MB(this.value >= 0 ? this.value : -this.value)
        }, yB.prototype.multiply = function(BB) {
          var OB, YB, DB, QB = sB(BB),
            oB = this.value,
            JB = QB.value,
            MB = this.sign !== QB.sign;
          if (QB.isSmall) {
            if (0 === JB) return jB[0];
            if (1 === JB) return this;
            if (-1 === JB) return this.ep();
            if ((OB = Math.abs(JB)) < GB) return new yB(nB(oB, OB), MB);
            JB = zB(OB)
          }
          return YB = oB.length, DB = JB.length, new yB(-.012 * YB - .012 * DB + 15e-6 * YB * DB > 0 ? fB(oB, JB) : SB(oB, JB), MB)
        }, yB.prototype.times = yB.prototype.multiply, JB.prototype._multiplyBySmall = function(BB) {
          return PB(BB.value * this.value) ? new JB(BB.value * this.value) : kB(Math.abs(BB.value), zB(Math.abs(this.value)), this.sign !== BB.sign)
        }, yB.prototype._multiplyBySmall = function(BB) {
          return 0 === BB.value ? jB[0] : 1 === BB.value ? this : -1 === BB.value ? this.ep() : kB(Math.abs(BB.value), this.value, this.sign !== BB.sign)
        }, JB.prototype.multiply = function(BB) {
          return sB(BB)._multiplyBySmall(this)
        }, JB.prototype.times = JB.prototype.multiply, MB.prototype.multiply = function(BB) {
          return new MB(this.value * sB(BB).value)
        }, MB.prototype.times = MB.prototype.multiply, yB.prototype.square = function() {
          return new yB(dB(this.value), !1)
        }, JB.prototype.square = function() {
          var BB = this.value * this.value;
          return PB(BB) ? new JB(BB) : new yB(dB(zB(Math.abs(this.value))), !1)
        }, MB.prototype.square = function(BB) {
          return new MB(this.value * this.value)
        }, yB.prototype.divmod = function(BB) {
          var OB = uB(this, BB);
          return {
            quotient: OB[0],
            remainder: OB[1]
          }
        }, MB.prototype.divmod = JB.prototype.divmod = yB.prototype.divmod, yB.prototype.divide = function(BB) {
          return uB(this, BB)[0]
        }, MB.prototype.over = MB.prototype.divide = function(BB) {
          return new MB(this.value / sB(BB).value)
        }, JB.prototype.over = JB.prototype.divide = yB.prototype.over = yB.prototype.divide, yB.prototype.mod = function(BB) {
          return uB(this, BB)[1]
        }, MB.prototype.mod = MB.prototype.remainder = function(BB) {
          return new MB(this.value % sB(BB).value)
        }, JB.prototype.remainder = JB.prototype.mod = yB.prototype.remainder = yB.prototype.mod, yB.prototype.pow = function(BB) {
          var OB, GB, YB, DB = sB(BB),
            QB = this.value,
            oB = DB.value;
          if (0 === oB) return jB[1];
          if (0 === QB) return jB[0];
          if (1 === QB) return jB[1];
          if (-1 === QB) return DB.isEven() ? jB[1] : jB[-1];
          if (DB.sign) return jB[0];
          if (!DB.isSmall) throw new Error("The exponent " + DB.toString() + " is too large.");
          if (this.isSmall && PB(OB = Math.pow(QB, oB))) return new JB(ZB(OB));
          for (GB = this, YB = jB[1]; !0 & oB && (YB = YB.times(GB), --oB), 0 !== oB;) oB /= 2, GB = GB.square();
          return YB
        }, JB.prototype.pow = yB.prototype.pow, MB.prototype.pow = function(BB) {
          var OB = sB(BB),
            GB = this.value,
            YB = OB.value,
            DB = BigInt(0),
            QB = BigInt(1),
            oB = BigInt(2);
          if (YB === DB) return jB[1];
          if (GB === DB) return jB[0];
          if (GB === QB) return jB[1];
          if (GB === BigInt(-1)) return OB.isEven() ? jB[1] : jB[-1];
          if (OB.isNegative()) return new MB(DB);
          for (var yB = this, JB = jB[1];
            (YB & QB) === QB && (JB = JB.times(yB), --YB), YB !== DB;) YB /= oB, yB = yB.square();
          return JB
        }, yB.prototype.modPow = function(BB, OB) {
          if (BB = sB(BB), (OB = sB(OB)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var GB = jB[1],
            YB = this.mod(OB);
          for (BB.isNegative() && (BB = BB.multiply(jB[-1]), YB = YB.modInv(OB)); BB.isPositive();) {
            if (YB.isZero()) return jB[0];
            BB.isOdd() && (GB = GB.multiply(YB).mod(OB)), BB = BB.divide(2), YB = YB.square().mod(OB)
          }
          return GB
        }, MB.prototype.modPow = JB.prototype.modPow = yB.prototype.modPow, yB.prototype.compareAbs = function(BB) {
          var OB = sB(BB),
            GB = this.value,
            YB = OB.value;
          return OB.isSmall ? 1 : mB(GB, YB)
        }, JB.prototype.compareAbs = function(BB) {
          var OB = sB(BB),
            GB = Math.abs(this.value),
            YB = OB.value;
          return OB.isSmall ? GB === (YB = Math.abs(YB)) ? 0 : GB > YB ? 1 : -1 : -1
        }, MB.prototype.compareAbs = function(BB) {
          var OB = this.value,
            GB = sB(BB).value;
          return (OB = OB >= 0 ? OB : -OB) === (GB = GB >= 0 ? GB : -GB) ? 0 : OB > GB ? 1 : -1
        }, yB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var OB = sB(BB),
            GB = this.value,
            YB = OB.value;
          return this.sign !== OB.sign ? OB.sign ? 1 : -1 : OB.isSmall ? this.sign ? -1 : 1 : mB(GB, YB) * (this.sign ? -1 : 1)
        }, yB.prototype.compareTo = yB.prototype.compare, JB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var OB = sB(BB),
            GB = this.value,
            YB = OB.value;
          return OB.isSmall ? GB == YB ? 0 : GB > YB ? 1 : -1 : GB < 0 !== OB.sign ? GB < 0 ? -1 : 1 : GB < 0 ? 1 : -1
        }, JB.prototype.compareTo = JB.prototype.compare, MB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var OB = this.value,
            GB = sB(BB).value;
          return OB === GB ? 0 : OB > GB ? 1 : -1
        }, MB.prototype.compareTo = MB.prototype.compare, yB.prototype.equals = function(BB) {
          return 0 === this.compare(BB)
        }, MB.prototype.eq = MB.prototype.equals = JB.prototype.eq = JB.prototype.equals = yB.prototype.eq = yB.prototype.equals, yB.prototype.notEquals = function(BB) {
          return 0 !== this.compare(BB)
        }, MB.prototype.neq = MB.prototype.notEquals = JB.prototype.neq = JB.prototype.notEquals = yB.prototype.neq = yB.prototype.notEquals, yB.prototype.greater = function(BB) {
          return this.compare(BB) > 0
        }, MB.prototype.gt = MB.prototype.greater = JB.prototype.gt = JB.prototype.greater = yB.prototype.gt = yB.prototype.greater, yB.prototype.lesser = function(BB) {
          return this.compare(BB) < 0
        }, MB.prototype.lt = MB.prototype.lesser = JB.prototype.lt = JB.prototype.lesser = yB.prototype.lt = yB.prototype.lesser, yB.prototype.greaterOrEquals = function(BB) {
          return this.compare(BB) >= 0
        }, MB.prototype.geq = MB.prototype.greaterOrEquals = JB.prototype.geq = JB.prototype.greaterOrEquals = yB.prototype.geq = yB.prototype.greaterOrEquals, yB.prototype.lesserOrEquals = function(BB) {
          return this.compare(BB) <= 0
        }, MB.prototype.leq = MB.prototype.lesserOrEquals = JB.prototype.leq = JB.prototype.lesserOrEquals = yB.prototype.leq = yB.prototype.lesserOrEquals, yB.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, JB.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, MB.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, yB.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, JB.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, MB.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, yB.prototype.isPositive = function() {
          return !this.sign
        }, JB.prototype.isPositive = function() {
          return this.value > 0
        }, MB.prototype.isPositive = JB.prototype.isPositive, yB.prototype.isNegative = function() {
          return this.sign
        }, JB.prototype.isNegative = function() {
          return this.value < 0
        }, MB.prototype.isNegative = JB.prototype.isNegative, yB.prototype.isUnit = function() {
          return !1
        }, JB.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, MB.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, yB.prototype.isZero = function() {
          return !1
        }, JB.prototype.isZero = function() {
          return 0 === this.value
        }, MB.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, yB.prototype.isDivisibleBy = function(BB) {
          var OB = sB(BB);
          return !OB.isZero() && (!!OB.isUnit() || (0 === OB.compareAbs(2) ? this.isEven() : this.mod(OB).isZero()))
        }, MB.prototype.isDivisibleBy = JB.prototype.isDivisibleBy = yB.prototype.isDivisibleBy, yB.prototype.isPrime = function(GB) {
          var YB = IB(this);
          if (YB !== BB) return YB;
          var DB = this.abs(),
            QB = DB.bitLength();
          if (QB <= 64) return FB(DB, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var oB = Math.log(2) * QB.toJSNumber(), jB = Math.ceil(!0 === GB ? 2 * Math.pow(oB, 2) : oB), yB = [], JB = 0; JB < jB; JB++) yB.push(OB(JB + 2));
          return FB(DB, yB)
        }, MB.prototype.isPrime = JB.prototype.isPrime = yB.prototype.isPrime, yB.prototype.isProbablePrime = function(GB, YB) {
          var DB = IB(this);
          if (DB !== BB) return DB;
          for (var QB = this.abs(), oB = GB === BB ? 5 : GB, jB = [], yB = 0; yB < oB; yB++) jB.push(OB.randBetween(2, QB.minus(2), YB));
          return FB(QB, jB)
        }, MB.prototype.isProbablePrime = JB.prototype.isProbablePrime = yB.prototype.isProbablePrime, yB.prototype.modInv = function(BB) {
          for (var GB, YB, DB, QB = OB.zero, oB = OB.one, jB = sB(BB), yB = this.abs(); !yB.isZero();) GB = jB.divide(yB), YB = QB, DB = jB, QB = oB, jB = yB, oB = YB.subtract(GB.multiply(oB)), yB = DB.subtract(GB.multiply(yB));
          if (!jB.isUnit()) throw new Error(this.toString() + " and " + BB.toString() + " are not co-prime");
          return -1 === QB.compare(0) && (QB = QB.add(BB)), this.isNegative() ? QB.ep() : QB
        }, MB.prototype.modInv = JB.prototype.modInv = yB.prototype.modInv, yB.prototype.next = function() {
          var BB = this.value;
          return this.sign ? VB(BB, 1, this.sign) : new yB(WB(BB, 1), this.sign)
        }, JB.prototype.next = function() {
          var BB = this.value;
          return BB + 1 < YB ? new JB(BB + 1) : new yB(DB, !1)
        }, MB.prototype.next = function() {
          return new MB(this.value + BigInt(1))
        }, yB.prototype.prev = function() {
          var BB = this.value;
          return this.sign ? new yB(WB(BB, 1), !0) : VB(BB, 1, this.sign)
        }, JB.prototype.prev = function() {
          var BB = this.value;
          return BB - 1 > -YB ? new JB(BB - 1) : new yB(DB, !0)
        }, MB.prototype.prev = function() {
          return new MB(this.value - BigInt(1))
        };
        for (var iB = [1]; 2 * iB[iB.length - 1] <= GB;) iB.push(2 * iB[iB.length - 1]);
        var LB = iB.length,
          gB = iB[LB - 1];

        function rB(BB) {
          return Math.abs(BB) <= GB
        }

        function XB(BB, GB, YB) {
          GB = sB(GB);
          for (var DB = BB.isNegative(), QB = GB.isNegative(), oB = DB ? BB.not() : BB, jB = QB ? GB.not() : GB, yB = 0, JB = 0, MB = null, PB = null, zB = []; !oB.isZero() || !jB.isZero();) yB = (MB = uB(oB, gB))[1].toJSNumber(), DB && (yB = gB - 1 - yB), JB = (PB = uB(jB, gB))[1].toJSNumber(), QB && (JB = gB - 1 - JB), oB = MB[0], jB = PB[0], zB.push(YB(yB, JB));
          for (var lB = 0 !== YB(DB ? 1 : 0, QB ? 1 : 0) ? OB(-1) : OB(0), pB = zB.length - 1; pB >= 0; pB -= 1) lB = lB.multiply(gB).add(OB(zB[pB]));
          return lB
        }
        yB.prototype.shiftLeft = function(BB) {
          var OB = sB(BB).toJSNumber();
          if (!rB(OB)) throw new Error(String(OB) + " is too large for shifting.");
          if (OB < 0) return this.shiftRight(-OB);
          var GB = this;
          if (GB.isZero()) return GB;
          for (; OB >= LB;) GB = GB.multiply(gB), OB -= LB - 1;
          return GB.multiply(iB[OB])
        }, MB.prototype.shiftLeft = JB.prototype.shiftLeft = yB.prototype.shiftLeft, yB.prototype.shiftRight = function(BB) {
          var OB, GB = sB(BB).toJSNumber();
          if (!rB(GB)) throw new Error(String(GB) + " is too large for shifting.");
          if (GB < 0) return this.shiftLeft(-GB);
          for (var YB = this; GB >= LB;) {
            if (YB.isZero() || YB.isNegative() && YB.isUnit()) return YB;
            YB = (OB = uB(YB, gB))[1].isNegative() ? OB[0].prev() : OB[0], GB -= LB - 1
          }
          return (OB = uB(YB, iB[GB]))[1].isNegative() ? OB[0].prev() : OB[0]
        }, MB.prototype.shiftRight = JB.prototype.shiftRight = yB.prototype.shiftRight, yB.prototype.not = function() {
          return this.ep().prev()
        }, MB.prototype.not = JB.prototype.not = yB.prototype.not, yB.prototype.and = function(BB) {
          return XB(this, BB, (function(BB, OB) {
            return BB & OB
          }))
        }, MB.prototype.and = JB.prototype.and = yB.prototype.and, yB.prototype.or = function(BB) {
          return XB(this, BB, (function(BB, OB) {
            return BB | OB
          }))
        }, MB.prototype.or = JB.prototype.or = yB.prototype.or, yB.prototype.xor = function(BB) {
          return XB(this, BB, (function(BB, OB) {
            return BB ^ OB
          }))
        }, MB.prototype.xor = JB.prototype.xor = yB.prototype.xor;
        var wB = 1 << 30;

        function EB(BB) {
          var OB = BB.value,
            YB = "number" === typeof OB ? OB | wB : "bigint" === typeof OB ? OB | BigInt(wB) : OB[0] + OB[1] * GB | 1073758208;
          return YB & -YB
        }

        function cB(BB, GB) {
          if (GB.compareTo(BB) <= 0) {
            var YB = cB(BB, GB.square(GB)),
              DB = YB.p,
              QB = YB.e,
              oB = DB.multiply(GB);
            return oB.compareTo(BB) <= 0 ? {
              p: oB,
              e: 2 * QB + 1
            } : {
              p: DB,
              e: 2 * QB
            }
          }
          return {
            p: OB(1),
            e: 0
          }
        }

        function hB(BB, OB) {
          return BB = sB(BB), OB = sB(OB), BB.greater(OB) ? BB : OB
        }

        function aB(BB, OB) {
          return BB = sB(BB), OB = sB(OB), BB.lesser(OB) ? BB : OB
        }

        function eB(BB, OB) {
          if (BB = sB(BB).abs(), OB = sB(OB).abs(), BB.equals(OB)) return BB;
          if (BB.isZero()) return OB;
          if (OB.isZero()) return BB;
          for (var GB, YB, DB = jB[1]; BB.isEven() && OB.isEven();) GB = aB(EB(BB), EB(OB)), BB = BB.divide(GB), OB = OB.divide(GB), DB = DB.multiply(GB);
          for (; BB.isEven();) BB = BB.divide(EB(BB));
          do {
            for (; OB.isEven();) OB = OB.divide(EB(OB));
            BB.greater(OB) && (YB = OB, OB = BB, BB = YB), OB = OB.subtract(BB)
          } while (!OB.isZero());
          return DB.isUnit() ? BB : BB.multiply(DB)
        }
        yB.prototype.bitLength = function() {
          var BB = this;
          return BB.compareTo(OB(0)) < 0 && (BB = BB.ep().subtract(OB(1))), 0 === BB.compareTo(OB(0)) ? OB(0) : OB(cB(BB, OB(2)).e).add(OB(1))
        }, MB.prototype.bitLength = JB.prototype.bitLength = yB.prototype.bitLength;
        var TB = function(BB, OB, GB, YB) {
          GB = GB || QB, BB = String(BB), YB || (BB = BB.toLowerCase(), GB = GB.toLowerCase());
          var DB, oB = BB.length,
            jB = Math.abs(OB),
            yB = {};
          for (DB = 0; DB < GB.length; DB++) yB[GB[DB]] = DB;
          for (DB = 0; DB < oB; DB++) {
            if ("-" !== (PB = BB[DB]) && (PB in yB && yB[PB] >= jB)) {
              if ("1" === PB && 1 === jB) continue;
              throw new Error(PB + " is not a valid digit in base " + OB + ".")
            }
          }
          OB = sB(OB);
          var JB = [],
            MB = "-" === BB[0];
          for (DB = MB ? 1 : 0; DB < BB.length; DB++) {
            var PB;
            if ((PB = BB[DB]) in yB) JB.push(sB(yB[PB]));
            else {
              if ("<" !== PB) throw new Error(PB + " is not a valid character");
              var zB = DB;
              do {
                DB++
              } while (">" !== BB[DB] && DB < BB.length);
              JB.push(sB(BB.slice(zB + 1, DB)))
            }
          }
          return bB(JB, OB, MB)
        };

        function bB(BB, OB, GB) {
          var YB, DB = jB[0],
            QB = jB[1];
          for (YB = BB.length - 1; YB >= 0; YB--) DB = DB.add(BB[YB].times(QB)), QB = QB.times(OB);
          return GB ? DB.ep() : DB
        }

        function CB(BB, GB) {
          if ((GB = OB(GB)).isZero()) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (GB.equals(-1)) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (BB.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-BB.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var YB = Array.apply(null, Array(BB.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return YB.unshift([1]), {
              value: [].concat.apply([], YB),
              isNegative: !1
            }
          }
          var DB = !1;
          if (BB.isNegative() && GB.isPositive() && (DB = !0, BB = BB.abs()), GB.isUnit()) return BB.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(BB.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: DB
          };
          for (var QB, oB = [], jB = BB; jB.isNegative() || jB.compareAbs(GB) >= 0;) {
            QB = jB.divmod(GB), jB = QB.quotient;
            var yB = QB.remainder;
            yB.isNegative() && (yB = GB.minus(yB).abs(), jB = jB.next()), oB.push(yB.toJSNumber())
          }
          return oB.push(jB.toJSNumber()), {
            value: oB.reverse(),
            isNegative: DB
          }
        }

        function HB(BB, OB, GB) {
          var YB = CB(BB, OB);
          return (YB.isNegative ? "-" : "") + YB.value.map((function(BB) {
            return function(BB, OB) {
              return BB < (OB = OB || QB).length ? OB[BB] : "<" + BB + ">"
            }(BB, GB)
          })).join("")
        }

        function vB(BB) {
          if (PB(+BB)) {
            var OB = +BB;
            if (OB === ZB(OB)) return oB ? new MB(BigInt(OB)) : new JB(OB);
            throw new Error("Invalid integer: " + BB)
          }
          var GB = "-" === BB[0];
          GB && (BB = BB.slice(1));
          var YB = BB.split(/e/i);
          if (YB.length > 2) throw new Error("Invalid integer: " + YB.join("e"));
          if (2 === YB.length) {
            var DB = YB[1];
            if ("+" === DB[0] && (DB = DB.slice(1)), (DB = +DB) !== ZB(DB) || !PB(DB)) throw new Error("Invalid integer: " + DB + " is not a valid exponent.");
            var QB = YB[0],
              jB = QB.indexOf(".");
            if (jB >= 0 && (DB -= QB.length - jB - 1, QB = QB.slice(0, jB) + QB.slice(jB + 1)), DB < 0) throw new Error("Cannot include negative exponent part for integers");
            BB = QB += new Array(DB + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(BB)) throw new Error("Invalid integer: " + BB);
          if (oB) return new MB(BigInt(GB ? "-" + BB : BB));
          for (var zB = [], lB = BB.length, qB = lB - 7; lB > 0;) zB.push(+BB.slice(qB, lB)), (qB -= 7) < 0 && (qB = 0), lB -= 7;
          return pB(zB), new yB(zB, GB)
        }

        function sB(BB) {
          return "number" === typeof BB ? function(BB) {
            if (oB) return new MB(BigInt(BB));
            if (PB(BB)) {
              if (BB !== ZB(BB)) throw new Error(BB + " is not an integer.");
              return new JB(BB)
            }
            return vB(BB.toString())
          }(BB) : "string" === typeof BB ? vB(BB) : "bigint" === typeof BB ? new MB(BB) : BB
        }
        yB.prototype.toArray = function(BB) {
          return CB(this, BB)
        }, JB.prototype.toArray = function(BB) {
          return CB(this, BB)
        }, MB.prototype.toArray = function(BB) {
          return CB(this, BB)
        }, yB.prototype.toString = function(OB, GB) {
          if (OB === BB && (OB = 10), 10 !== OB) return HB(this, OB, GB);
          for (var YB, DB = this.value, QB = DB.length, oB = String(DB[--QB]); --QB >= 0;) YB = String(DB[QB]), oB += "0000000".slice(YB.length) + YB;
          return (this.sign ? "-" : "") + oB
        }, JB.prototype.toString = function(OB, GB) {
          return OB === BB && (OB = 10), 10 != OB ? HB(this, OB, GB) : String(this.value)
        }, MB.prototype.toString = JB.prototype.toString, MB.prototype.toJSON = yB.prototype.toJSON = JB.prototype.toJSON = function() {
          return this.toString()
        }, yB.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, yB.prototype.toJSNumber = yB.prototype.valueOf, JB.prototype.valueOf = function() {
          return this.value
        }, JB.prototype.toJSNumber = JB.prototype.valueOf, MB.prototype.valueOf = MB.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var xB = 0; xB < 1e3; xB++) jB[xB] = sB(xB), xB > 0 && (jB[-xB] = sB(-xB));
        return jB.one = jB[1], jB.zero = jB[0], jB.minusOne = jB[-1], jB.max = hB, jB.min = aB, jB.gcd = eB, jB.lcm = function(BB, OB) {
          return BB = sB(BB).abs(), OB = sB(OB).abs(), BB.divide(eB(BB, OB)).multiply(OB)
        }, jB.isInstance = function(BB) {
          return BB instanceof yB || BB instanceof JB || BB instanceof MB
        }, jB.randBetween = function(BB, OB, YB) {
          BB = sB(BB), OB = sB(OB);
          var DB = YB || Math.random,
            QB = aB(BB, OB),
            oB = hB(BB, OB).subtract(QB).add(1);
          if (oB.isSmall) return QB.add(Math.floor(DB() * oB));
          for (var yB = CB(oB, GB).value, JB = [], MB = !0, PB = 0; PB < yB.length; PB++) {
            var zB = MB ? yB[PB] : GB,
              lB = ZB(DB() * zB);
            JB.push(lB), lB < zB && (MB = !1)
          }
          return QB.add(jB.OP(JB, GB, !1))
        }, jB.OP = function(BB, OB, GB) {
          return bB(BB.map(sB), sB(OB || 10), GB)
        }, jB
      }();
      BB.hasOwnProperty("exports") && (BB.exports = OB)
    }(RG);
    var WG = QB(RG.exports);

    function AG(BB, OB, GB) {
      let YB = 0;
      for (let DB = 0; DB < GB; DB++) {
        const GB = BB[OB + DB];
        if (void 0 === GB) break;
        YB += GB * 16 ** DB
      }
      return YB
    }

    function VG(BB) {
      const OB = [];
      for (let GB = 0; GB < BB.length; GB++) {
        let YB = Number(BB[GB]);
        for (let BB = 0; YB || BB < OB.length; BB++) YB += 10 * (OB[BB] || 0), OB[BB] = YB % 16, YB = (YB - OB[BB]) / 16
      }
      return OB
    }
    class SG {
      static fromString(BB) {
        return new SG(function(BB) {
          const OB = VG(BB),
            GB = Array(4);
          for (let YB = 0; YB < 4; YB++) GB[3 - YB] = AG(OB, 4 * YB, 4);
          return GB
        }(BB), BB)
      }
      static fromBit(BB) {
        const OB = Array(4),
          GB = Math.floor(BB / 16);
        for (let YB = 0; YB < 4; YB++) OB[3 - YB] = YB === GB ? 1 << BB - 16 * GB : 0;
        return new SG(OB)
      }
      constructor(BB, OB) {
        this.parts = BB, this.str = OB
      }
      and(BB) {
        let {
          parts: OB
        } = BB;
        return new SG(this.parts.map(((BB, GB) => BB & OB[GB])))
      }
      or(BB) {
        let {
          parts: OB
        } = BB;
        return new SG(this.parts.map(((BB, GB) => BB | OB[GB])))
      }
      xor(BB) {
        let {
          parts: OB
        } = BB;
        return new SG(this.parts.map(((BB, GB) => BB ^ OB[GB])))
      }
      not() {
        return new SG(this.parts.map((BB => ~BB)))
      }
      equals(BB) {
        let {
          parts: OB
        } = BB;
        return this.parts.every(((BB, GB) => BB === OB[GB]))
      }
      toString() {
        if (null != this.str) return this.str;
        const BB = new Array(16);
        return this.parts.forEach(((OB, GB) => {
          const YB = VG(OB.toString());
          for (let DB = 0; DB < 4; DB++) BB[DB + 4 * GB] = YB[3 - DB] || 0
        })), this.str = WG.OP(BB, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const nG = function() {
      try {
        return BigInt, !0
      } catch (BB) {
        return !1
      }
    }();
    nG && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const UG = {},
      fG = nG ? function(BB) {
        return BigInt(BB)
      } : function(BB) {
        return BB instanceof SG ? BB : ("number" === typeof BB && (BB = BB.toString()), null != UG[BB] || (UG[BB] = SG.fromString(BB)), UG[BB])
      },
      kG = fG(0),
      dG = nG ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG).and(BB)
      },
      KG = nG ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG).or(BB)
      },
      uG = nG ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG).xor(BB)
      },
      mG = nG ? function(BB, OB) {
        return BB === OB
      } : function(BB, OB) {
        return null == BB || null == OB ? BB == OB : BB.equals(OB)
      };
    var IG, FG, iG, LG, gG = {
      combine: function() {
        let BB = arguments.length <= 0 ? void 0 : arguments[0];
        for (let OB = 1; OB < arguments.length; OB++) BB = KG(BB, OB < 0 || arguments.length <= OB ? void 0 : arguments[OB]);
        return BB
      },
      add: function(BB, OB) {
        return OB === kG ? BB : KG(BB, OB)
      },
      remove: function(BB, OB) {
        return OB === kG ? BB : uG(BB, dG(BB, OB))
      },
      filter: dG,
      invert: nG ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG).not()
      },
      has: function(BB, OB) {
        return mG(dG(BB, OB), OB)
      },
      hasAny: function(BB, OB) {
        return !mG(dG(BB, OB), kG)
      },
      equals: mG,
      deserialize: fG,
      getFlag: nG ? function(BB) {
        return BigInt(1) << BigInt(BB)
      } : function(BB) {
        return SG.fromBit(BB)
      }
    };
    ! function(BB) {
      BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(IG || (IG = {})),
    function(BB) {
      BB[BB.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", BB[BB.INVALID_COMMAND = 4002] = "INVALID_COMMAND", BB[BB.INVALID_EVENT = 4004] = "INVALID_EVENT", BB[BB.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(FG || (FG = {})),
    function(BB) {
      BB.LANDSCAPE = "landscape", BB.PORTRAIT = "portrait"
    }(iG || (iG = {})),
    function(BB) {
      BB.MOBILE = "mobile", BB.DESKTOP = "desktop"
    }(LG || (LG = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: gG.getFlag(0),
      ADMINISTRATOR: gG.getFlag(3)
    });

    function rG(BB) {
      return lG((OB => {
        var GB;
        const [YB] = null !== (GB = Object.entries(BB).find((BB => {
          let [, GB] = BB;
          return GB === OB
        }))) && void 0 !== GB ? GB : [];
        return null != OB && void 0 === YB ? BB.UNHANDLED : OB
      }), iO().or(LO()))
    }
    const XG = NG.object({
        image_url: NG.string()
      }),
      wG = NG.object({
        mediaUrl: NG.string().max(1024)
      }),
      EG = NG.object({
        access_token: NG.union([NG.string(), NG.null()]).optional()
      }),
      cG = NG.object({
        access_token: NG.string(),
        user: NG.object({
          username: NG.string(),
          discriminator: NG.string(),
          id: NG.string(),
          avatar: NG.union([NG.string(), NG.null()]).optional(),
          public_flags: NG.number(),
          global_name: NG.union([NG.string(), NG.null()]).optional()
        }),
        scopes: NG.array(function(BB) {
          const OB = mO().transform((OB => {
            const GB = BB.safeParse(OB);
            return GB.success ? GB.data : BB._def.defaultValue()
          }));
          return OB.overlayType = BB, OB
        }(NG.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(NG.literal(-1)).default(-1))),
        expires: NG.string(),
        application: NG.object({
          description: NG.string(),
          icon: NG.union([NG.string(), NG.null()]).optional(),
          id: NG.string(),
          rpc_origins: NG.array(NG.string()).optional(),
          name: NG.string()
        })
      }),
      hG = NG.object({
        participants: NG.array(NG.object({
          id: NG.string(),
          username: NG.string(),
          global_name: NG.union([NG.string(), NG.null()]).optional(),
          discriminator: NG.string(),
          avatar: NG.union([NG.string(), NG.null()]).optional(),
          flags: NG.number(),
          bot: NG.boolean(),
          avatar_decoration_data: NG.union([NG.object({
            asset: NG.string(),
            skuId: NG.string().optional()
          }), NG.null()]).optional(),
          premium_type: NG.union([NG.number(), NG.null()]).optional(),
          nickname: NG.string().optional()
        }))
      });
    var aG;
    ! function(BB) {
      BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(aG || (aG = {}));
    const eG = NG.object({}).optional().nullable(),
      TG = NG.void(),
      bG = {
        [aG.INITIATE_IMAGE_UPLOAD]: {
          request: TG,
          response: XG
        },
        [aG.OPEN_SHARE_MOMENT_DIALOG]: {
          request: wG,
          response: eG
        },
        [aG.AUTHENTICATE]: {
          request: EG,
          response: cG
        },
        [aG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: TG,
          response: hG
        }
      },
      CG = "DISPATCH";
    var HG;
    ! function(BB) {
      BB.AUTHORIZE = "AUTHORIZE", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_GUILDS = "GET_GUILDS", BB.GET_GUILD = "GET_GUILD", BB.GET_CHANNEL = "GET_CHANNEL", BB.GET_CHANNELS = "GET_CHANNELS", BB.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", BB.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", BB.SUBSCRIBE = "SUBSCRIBE", BB.UNSUBSCRIBE = "UNSUBSCRIBE", BB.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", BB.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", BB.SET_ACTIVITY = "SET_ACTIVITY", BB.GET_SKUS = "GET_SKUS", BB.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", BB.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", BB.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", BB.START_PURCHASE = "START_PURCHASE", BB.SET_CONFIG = "SET_CONFIG", BB.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", BB.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", BB.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", BB.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", BB.CAPTURE_LOG = "CAPTURE_LOG", BB.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", BB.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", BB.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", BB.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(HG || (HG = {}));
    const vG = HO({
        cmd: iO(),
        data: eO(),
        evt: hO(),
        nonce: iO()
      }).passthrough(),
      sG = (rG(Object.assign(Object.assign({}, cG.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), HO({
        id: iO(),
        username: iO(),
        discriminator: iO(),
        global_name: iO().optional().nullable(),
        avatar: iO().optional().nullable(),
        avatar_decoration_data: HO({
          asset: iO(),
          sku_id: iO().optional()
        }).nullable(),
        bot: XO(),
        flags: LO().optional().nullable(),
        premium_type: LO().optional().nullable()
      })),
      xG = HO({
        user: sG,
        nick: iO().optional().nullable(),
        roles: CO(iO()),
        joined_at: iO(),
        deaf: XO(),
        mute: XO()
      }),
      tG = HO({
        id: iO(),
        name: iO().optional().nullable(),
        roles: CO(iO()).optional().nullable(),
        user: sG.optional().nullable(),
        require_colons: XO().optional().nullable(),
        managed: XO().optional().nullable(),
        animated: XO().optional().nullable(),
        available: XO().optional().nullable()
      }),
      BY = HO({
        mute: XO(),
        deaf: XO(),
        self_mute: XO(),
        self_deaf: XO(),
        suppress: XO()
      }),
      OY = HO({
        mute: XO(),
        nick: iO(),
        user: sG,
        voice_state: BY,
        volume: LO()
      }),
      GY = rG({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      YY = HO({
        name: iO(),
        type: LO(),
        url: iO().optional().nullable(),
        created_at: LO().optional().nullable(),
        timestamps: HO({
          start: LO(),
          end: LO()
        }).partial().optional().nullable(),
        application_id: iO().optional().nullable(),
        details: iO().optional().nullable(),
        state: iO().optional().nullable(),
        emoji: tG.optional().nullable(),
        party: HO({
          id: iO().optional().nullable(),
          size: CO(LO()).optional().nullable()
        }).optional().nullable(),
        assets: HO({
          large_image: iO().nullable(),
          large_text: iO().nullable(),
          small_image: iO().nullable(),
          small_text: iO().nullable()
        }).partial().optional().nullable(),
        secrets: HO({
          join: iO(),
          match: iO()
        }).partial().optional().nullable(),
        instance: XO().optional().nullable(),
        flags: LO().optional().nullable()
      }),
      DY = HO({
        id: iO(),
        type: rG({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: iO(),
        deny: iO()
      }),
      QY = {
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
      oY = HO({
        id: iO(),
        type: rG(QY),
        guild_id: iO().optional().nullable(),
        position: LO().optional().nullable(),
        permission_overwrites: CO(DY).optional().nullable(),
        name: iO().optional().nullable(),
        topic: iO().optional().nullable(),
        nsfw: XO().optional().nullable(),
        last_message_id: iO().optional().nullable(),
        bitrate: LO().optional().nullable(),
        user_limit: LO().optional().nullable(),
        rate_limit_per_user: LO().optional().nullable(),
        recipients: CO(sG).optional().nullable(),
        icon: iO().optional().nullable(),
        owner_id: iO().optional().nullable(),
        application_id: iO().optional().nullable(),
        parent_id: iO().optional().nullable(),
        last_pin_timestamp: iO().optional().nullable()
      }),
      jY = HO({
        user: sG,
        guild_id: iO(),
        status: GY,
        activities: CO(YY),
        client_status: HO({
          desktop: GY,
          mobile: GY,
          web: GY
        }).partial()
      }),
      yY = HO({
        id: iO(),
        name: iO(),
        color: LO(),
        hoist: XO(),
        position: LO(),
        permissions: iO(),
        managed: XO(),
        mentionable: XO()
      }),
      JY = (HO({
        id: iO(),
        name: iO(),
        owner_id: iO(),
        icon: iO().nullable(),
        icon_hash: iO().optional().nullable(),
        splash: iO().nullable(),
        discovery_splash: iO().nullable(),
        owner: XO().optional().nullable(),
        permissions: iO().optional().nullable(),
        region: iO(),
        afk_channel_id: iO().nullable(),
        afk_timeout: LO(),
        widget_enabled: XO().optional().nullable(),
        widget_channel_id: iO().optional().nullable(),
        verification_level: LO(),
        default_message_notifications: LO(),
        explicit_content_filter: LO(),
        roles: CO(yY),
        emojis: CO(tG),
        features: CO(iO()),
        mfa_level: LO(),
        application_id: iO().nullable(),
        system_channel_id: iO().nullable(),
        system_channel_flags: LO(),
        rules_channel_id: iO().nullable(),
        joined_at: iO().optional().nullable(),
        large: XO().optional().nullable(),
        unavailable: XO().optional().nullable(),
        member_count: LO().optional().nullable(),
        voice_states: CO(BY).optional().nullable(),
        members: CO(xG).optional().nullable(),
        channels: CO(oY).optional().nullable(),
        presences: CO(jY).optional().nullable(),
        max_presences: LO().optional().nullable(),
        max_members: LO().optional().nullable(),
        vanity_url_code: iO().nullable(),
        description: iO().nullable(),
        banner: iO().nullable(),
        premium_tier: LO(),
        premium_subscription_count: LO().optional().nullable(),
        preferred_locale: iO(),
        public_updates_channel_id: iO().nullable(),
        max_video_channel_users: LO().optional().nullable(),
        approximate_member_count: LO().optional().nullable(),
        approximate_presence_count: LO().optional().nullable()
      }), HO({
        id: iO(),
        guild_id: iO(),
        type: LO(),
        name: iO()
      })),
      MY = HO({
        id: iO(),
        filename: iO(),
        size: LO(),
        url: iO(),
        proxy_url: iO(),
        height: LO().optional().nullable(),
        width: LO().optional().nullable()
      }),
      PY = HO({
        text: iO(),
        icon_url: iO().optional().nullable(),
        proxy_icon_url: iO().optional().nullable()
      }),
      zY = HO({
        url: iO().optional().nullable(),
        proxy_url: iO().optional().nullable(),
        height: LO().optional().nullable(),
        width: LO().optional().nullable()
      }),
      lY = zY.omit({
        proxy_url: !0
      }),
      pY = HO({
        name: iO().optional().nullable(),
        url: iO().optional().nullable()
      }),
      qY = HO({
        name: iO().optional().nullable(),
        url: iO().optional().nullable(),
        icon_url: iO().optional().nullable(),
        proxy_icon_url: iO().optional().nullable()
      }),
      ZY = HO({
        name: iO(),
        value: iO(),
        inline: XO()
      }),
      NY = HO({
        title: iO().optional().nullable(),
        type: iO().optional().nullable(),
        description: iO().optional().nullable(),
        url: iO().optional().nullable(),
        timestamp: iO().optional().nullable(),
        color: LO().optional().nullable(),
        footer: PY.optional().nullable(),
        image: zY.optional().nullable(),
        thumbnail: zY.optional().nullable(),
        video: lY.optional().nullable(),
        provider: pY.optional().nullable(),
        author: qY.optional().nullable(),
        fields: CO(ZY).optional().nullable()
      }),
      RY = HO({
        count: LO(),
        me: XO(),
        emoji: tG
      }),
      WY = HO({
        type: LO(),
        party_id: iO().optional().nullable()
      }),
      AY = HO({
        id: iO(),
        cover_image: iO().optional().nullable(),
        description: iO(),
        icon: iO().optional().nullable(),
        name: iO()
      }),
      VY = HO({
        message_id: iO().optional().nullable(),
        channel_id: iO().optional().nullable(),
        guild_id: iO().optional().nullable()
      }),
      SY = HO({
        id: iO(),
        channel_id: iO(),
        guild_id: iO().optional().nullable(),
        author: sG.optional().nullable(),
        member: xG.optional().nullable(),
        content: iO(),
        timestamp: iO(),
        edited_timestamp: iO().optional().nullable(),
        tts: XO(),
        mention_everyone: XO(),
        mentions: CO(sG),
        mention_roles: CO(iO()),
        mention_channels: CO(JY),
        attachments: CO(MY),
        embeds: CO(NY),
        reactions: CO(RY).optional().nullable(),
        nonce: sO([iO(), LO()]).optional().nullable(),
        pinned: XO(),
        webhook_id: iO().optional().nullable(),
        type: LO(),
        activity: WY.optional().nullable(),
        application: AY.optional().nullable(),
        message_reference: VY.optional().nullable(),
        flags: LO().optional().nullable(),
        stickers: CO(eO()).optional().nullable(),
        referenced_message: eO().optional().nullable()
      }),
      nY = HO({
        id: iO(),
        name: iO()
      }),
      UY = HO({
        type: rG({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: LO(),
        name: iO()
      }),
      fY = HO({
        type: rG({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: XO(),
        threshold: LO(),
        shortcut: CO(UY),
        delay: LO()
      }),
      kY = HO({
        device_id: iO(),
        volume: LO(),
        available_devices: CO(nY)
      }),
      dY = (HO({
        type: rG({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: iO(),
        vendor: HO({
          name: iO(),
          url: iO()
        }),
        model: HO({
          name: iO(),
          url: iO()
        }),
        related: CO(iO()),
        echo_cancellation: XO().optional().nullable(),
        noise_suppression: XO().optional().nullable(),
        automatic_gain_control: XO().optional().nullable(),
        hardware_mute: XO().optional().nullable()
      }), HO({
        id: iO(),
        name: iO(),
        type: rG({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: HO({
          amount: LO(),
          currency: iO()
        }),
        application_id: iO(),
        flags: LO(),
        release_date: iO().nullable()
      })),
      KY = HO({
        id: iO(),
        sku_id: iO(),
        application_id: iO(),
        user_id: iO(),
        gift_code_flags: LO(),
        type: rG({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: iO().optional().nullable(),
        branches: CO(iO()).optional().nullable(),
        starts_at: iO().optional().nullable(),
        ends_at: iO().optional().nullable(),
        parent_id: iO().optional().nullable(),
        consumed: XO().optional().nullable(),
        deleted: XO().optional().nullable(),
        gift_code_batch_id: iO().optional().nullable()
      }),
      uY = (rG({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), rG({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      mY = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      IY = (rG(mY), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      FY = (rG(IY), "ERROR");
    var iY;
    ! function(BB) {
      BB.READY = "READY", BB.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", BB.SPEAKING_START = "SPEAKING_START", BB.SPEAKING_STOP = "SPEAKING_STOP", BB.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", BB.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", BB.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", BB.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", BB.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", BB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(iY || (iY = {}));
    const LY = vG.extend({
        evt: yG(iY),
        nonce: iO().nullable(),
        cmd: oG(CG),
        data: HO({}).passthrough()
      }),
      gY = vG.extend({
        evt: oG(FY),
        data: HO({
          code: LO(),
          message: iO().optional()
        }).passthrough(),
        cmd: yG(HG),
        nonce: iO().nullable()
      }),
      rY = LY.extend({
        evt: iO()
      }),
      XY = sO([LY, rY, gY]);
    const wY = {
      [iY.READY]: {
        payload: LY.extend({
          evt: oG(iY.READY),
          data: HO({
            v: LO(),
            config: HO({
              cdn_host: iO().optional(),
              api_endpoint: iO(),
              environment: iO()
            }),
            user: HO({
              id: iO(),
              username: iO(),
              discriminator: iO(),
              avatar: iO().optional()
            }).optional()
          })
        })
      },
      [iY.VOICE_STATE_UPDATE]: {
        payload: LY.extend({
          evt: oG(iY.VOICE_STATE_UPDATE),
          data: OY
        }),
        subscribeArgs: HO({
          channel_id: iO()
        })
      },
      [iY.SPEAKING_START]: {
        payload: LY.extend({
          evt: oG(iY.SPEAKING_START),
          data: HO({
            lobby_id: iO().optional(),
            channel_id: iO().optional(),
            user_id: iO()
          })
        }),
        subscribeArgs: HO({
          lobby_id: iO().nullable().optional(),
          channel_id: iO().nullable().optional()
        })
      },
      [iY.SPEAKING_STOP]: {
        payload: LY.extend({
          evt: oG(iY.SPEAKING_STOP),
          data: HO({
            lobby_id: iO().optional(),
            channel_id: iO().optional(),
            user_id: iO()
          })
        }),
        subscribeArgs: HO({
          lobby_id: iO().nullable().optional(),
          channel_id: iO().nullable().optional()
        })
      },
      [iY.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: LY.extend({
          evt: oG(iY.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: HO({
            layout_mode: rG(IY)
          })
        })
      },
      [iY.ORIENTATION_UPDATE]: {
        payload: LY.extend({
          evt: oG(iY.ORIENTATION_UPDATE),
          data: HO({
            screen_orientation: rG(mY),
            orientation: yG(iG)
          })
        })
      },
      [iY.CURRENT_USER_UPDATE]: {
        payload: LY.extend({
          evt: oG(iY.CURRENT_USER_UPDATE),
          data: sG
        })
      },
      [iY.ENTITLEMENT_CREATE]: {
        payload: LY.extend({
          evt: oG(iY.ENTITLEMENT_CREATE),
          data: HO({
            entitlement: KY
          })
        })
      },
      [iY.THERMAL_STATE_UPDATE]: {
        payload: LY.extend({
          evt: oG(iY.THERMAL_STATE_UPDATE),
          data: HO({
            thermal_state: uY
          })
        })
      },
      [iY.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: LY.extend({
          evt: oG(iY.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: HO({
            participants: hG.shape.participants
          })
        })
      }
    };
    const EY = HO({}).nullable(),
      cY = HO({
        code: iO()
      }),
      hY = HO({
        guilds: CO(HO({
          id: iO(),
          name: iO()
        }))
      }),
      aY = HO({
        id: iO(),
        name: iO(),
        icon_url: iO().optional(),
        members: CO(xG)
      }),
      eY = HO({
        id: iO(),
        type: rG(QY),
        guild_id: iO().optional().nullable(),
        name: iO().optional().nullable(),
        topic: iO().optional().nullable(),
        bitrate: LO().optional().nullable(),
        user_limit: LO().optional().nullable(),
        position: LO().optional().nullable(),
        voice_states: CO(OY),
        messages: CO(SY)
      }),
      TY = HO({
        channels: CO(oY)
      }),
      bY = (eY.nullable(), eY.nullable()),
      CY = eY.nullable(),
      HY = (HO({
        input: kY,
        output: kY,
        mode: fY,
        automatic_gain_control: XO(),
        echo_cancellation: XO(),
        noise_suppression: XO(),
        qos: XO(),
        silence_warning: XO(),
        deaf: XO(),
        mute: XO()
      }), HO({
        evt: iO()
      })),
      vY = HO({
        shortcut: UY
      }),
      sY = YY,
      xY = HO({
        skus: CO(dY)
      }),
      tY = HO({
        entitlements: CO(KY)
      }),
      BD = CO(KY).nullable(),
      OD = HO({
        use_interactive_pip: XO()
      }),
      GD = HO({
        locale: iO()
      }),
      YD = HO({
        enabled: XO()
      }),
      DD = HO({
        permissions: rO().or(iO())
      }),
      QD = HO({
        iosKeyboardResizesView: PG(XO())
      }),
      oD = vG.extend({
        cmd: yG(HG),
        evt: hO()
      });

    function jD(BB) {
      let {
        cmd: OB,
        data: GB
      } = BB;
      switch (OB) {
        case HG.AUTHORIZE:
          return cY.parse(GB);
        case HG.CAPTURE_SHORTCUT:
          return vY.parse(GB);
        case HG.ENCOURAGE_HW_ACCELERATION:
          return YD.parse(GB);
        case HG.GET_CHANNEL:
          return eY.parse(GB);
        case HG.GET_CHANNELS:
          return TY.parse(GB);
        case HG.GET_CHANNEL_PERMISSIONS:
          return DD.parse(GB);
        case HG.GET_GUILD:
          return aY.parse(GB);
        case HG.GET_GUILDS:
          return hY.parse(GB);
        case HG.GET_PLATFORM_BEHAVIORS:
          return QD.parse(GB);
        case HG.GET_CHANNEL:
          return eY.parse(GB);
        case HG.SELECT_TEXT_CHANNEL:
          return CY.parse(GB);
        case HG.SELECT_VOICE_CHANNEL:
          return bY.parse(GB);
        case HG.SET_ACTIVITY:
          return sY.parse(GB);
        case HG.GET_SKUS_EMBEDDED:
          return xY.parse(GB);
        case HG.GET_ENTITLEMENTS_EMBEDDED:
          return tY.parse(GB);
        case HG.SET_CONFIG:
          return OD.parse(GB);
        case HG.START_PURCHASE:
          return BD.parse(GB);
        case HG.SUBSCRIBE:
        case HG.UNSUBSCRIBE:
          return HY.parse(GB);
        case HG.USER_SETTINGS_GET_LOCALE:
          return GD.parse(GB);
        case HG.OPEN_EXTERNAL_LINK:
        case HG.SET_ORIENTATION_LOCK_STATE:
        case HG.SET_CERTIFIED_DEVICES:
        case HG.SEND_ANALYTICS_EVENT:
        case HG.OPEN_INVITE_DIALOG:
        case HG.CAPTURE_LOG:
        case HG.GET_SKUS:
        case HG.GET_ENTITLEMENTS:
          return EY.parse(GB);
        case HG.AUTHENTICATE:
        case HG.INITIATE_IMAGE_UPLOAD:
        case HG.OPEN_SHARE_MOMENT_DIALOG:
        case HG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: BB
          } = bG[OB];
          return BB.parse(GB);
        default:
          ! function(BB, OB) {
            throw OB
          }(0, new Error(`Unrecognized command ${OB}`))
      }
    }
    HO({
      frame_id: iO(),
      platform: yG(LG).optional().nullable()
    }), HO({
      v: oG(1),
      encoding: oG("json").optional(),
      client_id: iO(),
      frame_id: iO()
    });
    const yD = HO({
        code: LO(),
        message: iO().optional()
      }),
      JD = HO({
        evt: iO().nullable(),
        nonce: iO().nullable(),
        data: eO().nullable(),
        cmd: iO()
      }).passthrough();

    function MD(BB) {
      const OB = JD.parse(BB);
      return null != OB.evt ? OB.evt === FY ? gY.parse(OB) : function(BB) {
        const OB = BB.evt;
        if (!(OB in iY)) throw new Error(`Unrecognized event type ${BB.evt}`);
        return wY[OB].payload.parse(BB)
      }(XY.parse(OB)) : function(BB) {
        return Object.assign(Object.assign({}, BB), {
          data: jD(BB)
        })
      }(oD.passthrough().parse(OB))
    }

    function PD(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const DB = vG.extend({
        cmd: oG(OB),
        data: GB
      });
      return async GB => {
        const QB = await BB({
          cmd: OB,
          args: GB,
          transfer: YB(GB)
        });
        return DB.parse(QB).data
      }
    }

    function zD(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const GB = bG[BB].response,
        YB = vG.extend({
          cmd: oG(BB),
          data: GB
        });
      return GB => async DB => {
        const QB = await GB({
          cmd: BB,
          args: DB,
          transfer: OB(DB)
        });
        return YB.parse(QB).data
      }
    }
    const lD = zD(aG.AUTHENTICATE),
      pD = BB => PD(BB, HG.AUTHORIZE, cY),
      qD = BB => PD(BB, HG.CAPTURE_LOG, EY),
      ZD = BB => PD(BB, HG.ENCOURAGE_HW_ACCELERATION, YD),
      ND = BB => PD(BB, HG.GET_ENTITLEMENTS_EMBEDDED, tY),
      RD = BB => PD(BB, HG.GET_SKUS_EMBEDDED, xY),
      WD = BB => PD(BB, HG.GET_CHANNEL_PERMISSIONS, DD),
      AD = BB => PD(BB, HG.GET_PLATFORM_BEHAVIORS, QD),
      VD = BB => PD(BB, HG.OPEN_EXTERNAL_LINK, EY),
      SD = BB => PD(BB, HG.OPEN_INVITE_DIALOG, EY),
      nD = zD(aG.OPEN_SHARE_MOMENT_DIALOG);
    YY.pl({
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
      type: YY.shape.type.optional(),
      instance: YY.shape.instance.optional()
    }).nullable();
    const UD = BB => PD(BB, HG.SET_ACTIVITY, sY),
      fD = BB => PD(BB, HG.SET_CONFIG, OD);
    const kD = BB => ({
        lock_state: BB.lock_state,
        picture_in_picture_lock_state: BB.picture_in_picture_lock_state
      }),
      dD = BB => function(BB) {
        let {
          sendCommand: OB,
          cmd: GB,
          response: YB,
          fallbackTransform: DB,
          transferTransform: QB = () => {}
        } = BB;
        const oB = vG.extend({
          cmd: oG(GB),
          data: YB
        });
        return async BB => {
          try {
            const YB = await OB({
              cmd: GB,
              args: BB,
              transfer: QB(BB)
            });
            return oB.parse(YB).data
          } catch (YB) {
            if (YB.code === FG.INVALID_PAYLOAD) {
              const YB = DB(BB),
                jB = await OB({
                  cmd: GB,
                  args: YB,
                  transfer: QB(YB)
                });
              return oB.parse(jB).data
            }
            throw YB
          }
        }
      }({
        sendCommand: BB,
        cmd: HG.SET_ORIENTATION_LOCK_STATE,
        response: EY,
        fallbackTransform: kD
      }),
      KD = BB => PD(BB, HG.START_PURCHASE, BD),
      uD = BB => PD(BB, HG.USER_SETTINGS_GET_LOCALE, GD),
      mD = zD(aG.INITIATE_IMAGE_UPLOAD),
      ID = BB => PD(BB, HG.GET_CHANNEL, eY),
      FD = zD(aG.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var iD = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function LD(BB) {
      return "string" === typeof BB && iD.test(BB)
    }
    for (var gD = [], rD = 0; rD < 256; ++rD) gD.push((rD + 256).toString(16).substr(1));

    function XD(BB) {
      var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = (gD[BB[OB + 0]] + gD[BB[OB + 1]] + gD[BB[OB + 2]] + gD[BB[OB + 3]] + "-" + gD[BB[OB + 4]] + gD[BB[OB + 5]] + "-" + gD[BB[OB + 6]] + gD[BB[OB + 7]] + "-" + gD[BB[OB + 8]] + gD[BB[OB + 9]] + "-" + gD[BB[OB + 10]] + gD[BB[OB + 11]] + gD[BB[OB + 12]] + gD[BB[OB + 13]] + gD[BB[OB + 14]] + gD[BB[OB + 15]]).toLowerCase();
      if (!LD(GB)) throw TypeError("Stringified UUID is invalid");
      return GB
    }
    var wD;

    function ED(BB, OB, GB) {
      function YB(BB, YB, DB, QB) {
        if ("string" === typeof BB && (BB = function(BB) {
            BB = unescape(encodeURIComponent(BB));
            for (var OB = [], GB = 0; GB < BB.length; ++GB) OB.push(BB.charCodeAt(GB));
            return OB
          }(BB)), "string" === typeof YB && (YB = function(BB) {
            if (!LD(BB)) throw TypeError("Invalid UUID");
            var OB, GB = new Uint8Array(16);
            return GB[0] = (OB = parseInt(BB.slice(0, 8), 16)) >>> 24, GB[1] = OB >>> 16 & 255, GB[2] = OB >>> 8 & 255, GB[3] = 255 & OB, GB[4] = (OB = parseInt(BB.slice(9, 13), 16)) >>> 8, GB[5] = 255 & OB, GB[6] = (OB = parseInt(BB.slice(14, 18), 16)) >>> 8, GB[7] = 255 & OB, GB[8] = (OB = parseInt(BB.slice(19, 23), 16)) >>> 8, GB[9] = 255 & OB, GB[10] = (OB = parseInt(BB.slice(24, 36), 16)) / 1099511627776 & 255, GB[11] = OB / 4294967296 & 255, GB[12] = OB >>> 24 & 255, GB[13] = OB >>> 16 & 255, GB[14] = OB >>> 8 & 255, GB[15] = 255 & OB, GB
          }(YB)), 16 !== YB.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var oB = new Uint8Array(16 + BB.length);
        if (oB.set(YB), oB.set(BB, YB.length), (oB = GB(oB))[6] = 15 & oB[6] | OB, oB[8] = 63 & oB[8] | 128, DB) {
          QB = QB || 0;
          for (var jB = 0; jB < 16; ++jB) DB[QB + jB] = oB[jB];
          return DB
        }
        return XD(oB)
      }
      try {
        YB.name = BB
      } catch (DB) {}
      return YB.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", YB.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", YB
    }

    function cD(BB) {
      return 14 + (BB + 64 >>> 9 << 4) + 1
    }

    function hD(BB, OB) {
      var GB = (65535 & BB) + (65535 & OB);
      return (BB >> 16) + (OB >> 16) + (GB >> 16) << 16 | 65535 & GB
    }

    function aD(BB, OB, GB, YB, DB, QB) {
      return hD((oB = hD(hD(OB, BB), hD(YB, QB))) << (jB = DB) | oB >>> 32 - jB, GB);
      var oB, jB
    }

    function eD(BB, OB, GB, YB, DB, QB, oB) {
      return aD(OB & GB | ~OB & YB, BB, OB, DB, QB, oB)
    }

    function TD(BB, OB, GB, YB, DB, QB, oB) {
      return aD(OB & YB | GB & ~YB, BB, OB, DB, QB, oB)
    }

    function bD(BB, OB, GB, YB, DB, QB, oB) {
      return aD(OB ^ GB ^ YB, BB, OB, DB, QB, oB)
    }

    function CD(BB, OB, GB, YB, DB, QB, oB) {
      return aD(GB ^ (OB | ~YB), BB, OB, DB, QB, oB)
    }
    ED("v3", 48, (function(BB) {
      if ("string" === typeof BB) {
        var OB = unescape(encodeURIComponent(BB));
        BB = new Uint8Array(OB.length);
        for (var GB = 0; GB < OB.length; ++GB) BB[GB] = OB.charCodeAt(GB)
      }
      return function(BB) {
        for (var OB = [], GB = 32 * BB.length, YB = "0123456789abcdef", DB = 0; DB < GB; DB += 8) {
          var QB = BB[DB >> 5] >>> DB % 32 & 255,
            oB = parseInt(YB.charAt(QB >>> 4 & 15) + YB.charAt(15 & QB), 16);
          OB.push(oB)
        }
        return OB
      }(function(BB, OB) {
        BB[OB >> 5] |= 128 << OB % 32, BB[cD(OB) - 1] = OB;
        for (var GB = 1732584193, YB = -271733879, DB = -1732584194, QB = 271733878, oB = 0; oB < BB.length; oB += 16) {
          var jB = GB,
            yB = YB,
            JB = DB,
            MB = QB;
          GB = eD(GB, YB, DB, QB, BB[oB], 7, -680876936), QB = eD(QB, GB, YB, DB, BB[oB + 1], 12, -389564586), DB = eD(DB, QB, GB, YB, BB[oB + 2], 17, 606105819), YB = eD(YB, DB, QB, GB, BB[oB + 3], 22, -1044525330), GB = eD(GB, YB, DB, QB, BB[oB + 4], 7, -176418897), QB = eD(QB, GB, YB, DB, BB[oB + 5], 12, 1200080426), DB = eD(DB, QB, GB, YB, BB[oB + 6], 17, -1473231341), YB = eD(YB, DB, QB, GB, BB[oB + 7], 22, -45705983), GB = eD(GB, YB, DB, QB, BB[oB + 8], 7, 1770035416), QB = eD(QB, GB, YB, DB, BB[oB + 9], 12, -1958414417), DB = eD(DB, QB, GB, YB, BB[oB + 10], 17, -42063), YB = eD(YB, DB, QB, GB, BB[oB + 11], 22, -1990404162), GB = eD(GB, YB, DB, QB, BB[oB + 12], 7, 1804603682), QB = eD(QB, GB, YB, DB, BB[oB + 13], 12, -40341101), DB = eD(DB, QB, GB, YB, BB[oB + 14], 17, -1502002290), GB = TD(GB, YB = eD(YB, DB, QB, GB, BB[oB + 15], 22, 1236535329), DB, QB, BB[oB + 1], 5, -165796510), QB = TD(QB, GB, YB, DB, BB[oB + 6], 9, -1069501632), DB = TD(DB, QB, GB, YB, BB[oB + 11], 14, 643717713), YB = TD(YB, DB, QB, GB, BB[oB], 20, -373897302), GB = TD(GB, YB, DB, QB, BB[oB + 5], 5, -701558691), QB = TD(QB, GB, YB, DB, BB[oB + 10], 9, 38016083), DB = TD(DB, QB, GB, YB, BB[oB + 15], 14, -660478335), YB = TD(YB, DB, QB, GB, BB[oB + 4], 20, -405537848), GB = TD(GB, YB, DB, QB, BB[oB + 9], 5, 568446438), QB = TD(QB, GB, YB, DB, BB[oB + 14], 9, -1019803690), DB = TD(DB, QB, GB, YB, BB[oB + 3], 14, -187363961), YB = TD(YB, DB, QB, GB, BB[oB + 8], 20, 1163531501), GB = TD(GB, YB, DB, QB, BB[oB + 13], 5, -1444681467), QB = TD(QB, GB, YB, DB, BB[oB + 2], 9, -51403784), DB = TD(DB, QB, GB, YB, BB[oB + 7], 14, 1735328473), GB = bD(GB, YB = TD(YB, DB, QB, GB, BB[oB + 12], 20, -1926607734), DB, QB, BB[oB + 5], 4, -378558), QB = bD(QB, GB, YB, DB, BB[oB + 8], 11, -2022574463), DB = bD(DB, QB, GB, YB, BB[oB + 11], 16, 1839030562), YB = bD(YB, DB, QB, GB, BB[oB + 14], 23, -35309556), GB = bD(GB, YB, DB, QB, BB[oB + 1], 4, -1530992060), QB = bD(QB, GB, YB, DB, BB[oB + 4], 11, 1272893353), DB = bD(DB, QB, GB, YB, BB[oB + 7], 16, -155497632), YB = bD(YB, DB, QB, GB, BB[oB + 10], 23, -1094730640), GB = bD(GB, YB, DB, QB, BB[oB + 13], 4, 681279174), QB = bD(QB, GB, YB, DB, BB[oB], 11, -358537222), DB = bD(DB, QB, GB, YB, BB[oB + 3], 16, -722521979), YB = bD(YB, DB, QB, GB, BB[oB + 6], 23, 76029189), GB = bD(GB, YB, DB, QB, BB[oB + 9], 4, -640364487), QB = bD(QB, GB, YB, DB, BB[oB + 12], 11, -421815835), DB = bD(DB, QB, GB, YB, BB[oB + 15], 16, 530742520), GB = CD(GB, YB = bD(YB, DB, QB, GB, BB[oB + 2], 23, -995338651), DB, QB, BB[oB], 6, -198630844), QB = CD(QB, GB, YB, DB, BB[oB + 7], 10, 1126891415), DB = CD(DB, QB, GB, YB, BB[oB + 14], 15, -1416354905), YB = CD(YB, DB, QB, GB, BB[oB + 5], 21, -57434055), GB = CD(GB, YB, DB, QB, BB[oB + 12], 6, 1700485571), QB = CD(QB, GB, YB, DB, BB[oB + 3], 10, -1894986606), DB = CD(DB, QB, GB, YB, BB[oB + 10], 15, -1051523), YB = CD(YB, DB, QB, GB, BB[oB + 1], 21, -2054922799), GB = CD(GB, YB, DB, QB, BB[oB + 8], 6, 1873313359), QB = CD(QB, GB, YB, DB, BB[oB + 15], 10, -30611744), DB = CD(DB, QB, GB, YB, BB[oB + 6], 15, -1560198380), YB = CD(YB, DB, QB, GB, BB[oB + 13], 21, 1309151649), GB = CD(GB, YB, DB, QB, BB[oB + 4], 6, -145523070), QB = CD(QB, GB, YB, DB, BB[oB + 11], 10, -1120210379), DB = CD(DB, QB, GB, YB, BB[oB + 2], 15, 718787259), YB = CD(YB, DB, QB, GB, BB[oB + 9], 21, -343485551), GB = hD(GB, jB), YB = hD(YB, yB), DB = hD(DB, JB), QB = hD(QB, MB)
        }
        return [GB, YB, DB, QB]
      }(function(BB) {
        if (0 === BB.length) return [];
        for (var OB = 8 * BB.length, GB = new Uint32Array(cD(OB)), YB = 0; YB < OB; YB += 8) GB[YB >> 5] |= (255 & BB[YB / 8]) << YB % 32;
        return GB
      }(BB), 8 * BB.length))
    }));
    var HD = new Uint8Array(16);

    function vD() {
      if (!wD && !(wD = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return wD(HD)
    }

    function sD(BB, OB, GB) {
      var YB = (BB = BB || {}).random || (BB.rng || vD)();
      if (YB[6] = 15 & YB[6] | 64, YB[8] = 63 & YB[8] | 128, OB) {
        GB = GB || 0;
        for (var DB = 0; DB < 16; ++DB) OB[GB + DB] = YB[DB];
        return OB
      }
      return XD(YB)
    }

    function xD(BB, OB, GB, YB) {
      switch (BB) {
        case 0:
          return OB & GB ^ ~OB & YB;
        case 1:
        case 3:
          return OB ^ GB ^ YB;
        case 2:
          return OB & GB ^ OB & YB ^ GB & YB
      }
    }

    function tD(BB, OB) {
      return BB << OB | BB >>> 32 - OB
    }
    ED("v5", 80, (function(BB) {
      var OB = [1518500249, 1859775393, 2400959708, 3395469782],
        GB = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof BB) {
        var YB = unescape(encodeURIComponent(BB));
        BB = [];
        for (var DB = 0; DB < YB.length; ++DB) BB.push(YB.charCodeAt(DB))
      } else Array.isArray(BB) || (BB = Array.prototype.slice.call(BB));
      BB.push(128);
      for (var QB = BB.length / 4 + 2, oB = Math.ceil(QB / 16), jB = new Array(oB), yB = 0; yB < oB; ++yB) {
        for (var JB = new Uint32Array(16), MB = 0; MB < 16; ++MB) JB[MB] = BB[64 * yB + 4 * MB] << 24 | BB[64 * yB + 4 * MB + 1] << 16 | BB[64 * yB + 4 * MB + 2] << 8 | BB[64 * yB + 4 * MB + 3];
        jB[yB] = JB
      }
      jB[oB - 1][14] = 8 * (BB.length - 1) / Math.pow(2, 32), jB[oB - 1][14] = Math.floor(jB[oB - 1][14]), jB[oB - 1][15] = 8 * (BB.length - 1) & 4294967295;
      for (var PB = 0; PB < oB; ++PB) {
        for (var zB = new Uint32Array(80), lB = 0; lB < 16; ++lB) zB[lB] = jB[PB][lB];
        for (var pB = 16; pB < 80; ++pB) zB[pB] = tD(zB[pB - 3] ^ zB[pB - 8] ^ zB[pB - 14] ^ zB[pB - 16], 1);
        for (var qB = GB[0], ZB = GB[1], NB = GB[2], RB = GB[3], WB = GB[4], AB = 0; AB < 80; ++AB) {
          var VB = Math.floor(AB / 20),
            SB = tD(qB, 5) + xD(VB, ZB, NB, RB) + WB + OB[VB] + zB[AB] >>> 0;
          WB = RB, RB = NB, NB = tD(ZB, 30) >>> 0, ZB = qB, qB = SB
        }
        GB[0] = GB[0] + qB >>> 0, GB[1] = GB[1] + ZB >>> 0, GB[2] = GB[2] + NB >>> 0, GB[3] = GB[3] + RB >>> 0, GB[4] = GB[4] + WB >>> 0
      }
      return [GB[0] >> 24 & 255, GB[0] >> 16 & 255, GB[0] >> 8 & 255, 255 & GB[0], GB[1] >> 24 & 255, GB[1] >> 16 & 255, GB[1] >> 8 & 255, 255 & GB[1], GB[2] >> 24 & 255, GB[2] >> 16 & 255, GB[2] >> 8 & 255, 255 & GB[2], GB[3] >> 24 & 255, GB[3] >> 16 & 255, GB[3] >> 8 & 255, 255 & GB[3], GB[4] >> 24 & 255, GB[4] >> 16 & 255, GB[4] >> 8 & 255, 255 & GB[4]]
    }));
    class BQ extends Error {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(OB), this.code = BB, this.message = OB, this.name = "Discord SDK Error"
      }
    }
    const OQ = ["log", "warn", "debug", "info", "error"];
    var GQ;
    ! function(BB) {
      BB[BB.HANDSHAKE = 0] = "HANDSHAKE", BB[BB.FRAME = 1] = "FRAME", BB[BB.CLOSE = 2] = "CLOSE", BB[BB.HELLO = 3] = "HELLO"
    }(GQ || (GQ = {}));
    const YQ = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class DQ {
      getTransfer(BB) {
        var OB;
        switch (BB.cmd) {
          case HG.SUBSCRIBE:
          case HG.UNSUBSCRIBE:
            return;
          default:
            return null !== (OB = BB.transfer) && void 0 !== OB ? OB : void 0
        }
      }
      constructor(BB, OB) {
        var GB;
        if (this.eventBus = new JB, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = BB => {
            var OB;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const GB = sD();
            null === (OB = this.source) || void 0 === OB || OB.postMessage([GQ.FRAME, Object.assign(Object.assign({}, BB), {
              nonce: GB
            })], this.sourceOrigin, this.getTransfer(BB));
            return new Promise(((BB, OB) => {
              this.pendingCommands.set(GB, {
                resolve: BB,
                reject: OB
              })
            }))
          }, this.commands = (GB = this.sendCommand, {
            authenticate: lD(GB),
            authorize: pD(GB),
            captureLog: qD(GB),
            encourageHardwareAcceleration: ZD(GB),
            getChannel: ID(GB),
            getChannelPermissions: WD(GB),
            getEntitlements: ND(GB),
            getPlatformBehaviors: AD(GB),
            getSkus: RD(GB),
            openExternalLink: VD(GB),
            openInviteDialog: SD(GB),
            openShareMomentDialog: nD(GB),
            setActivity: UD(GB),
            setConfig: fD(GB),
            setOrientationLockState: dD(GB),
            startPurchase: KD(GB),
            userSettingsGetLocale: uD(GB),
            initiateImageUpload: mD(GB),
            getInstanceConnectedParticipants: FD(GB)
          }), this.handleMessage = BB => {
            if (!YQ.has(BB.origin)) return;
            const OB = BB.data;
            if (!Array.isArray(OB)) return;
            const [GB, YB] = OB;
            switch (GB) {
              case GQ.HELLO:
                return;
              case GQ.CLOSE:
                return this.handleClose(YB);
              case GQ.HANDSHAKE:
                return this.handleHandshake();
              case GQ.FRAME:
                return this.handleFrame(YB);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = BB, this.configuration = null !== OB && void 0 !== OB ? OB : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = LG.DESKTOP, this.guildId = null, void(this.channelId = null);
        const YB = new URLSearchParams(this._getSearch()),
          DB = YB.get("frame_id");
        if (!DB) throw new Error("frame_id query param is not defined");
        this.frameId = DB;
        const QB = YB.get("instance_id");
        if (!QB) throw new Error("instance_id query param is not defined");
        this.instanceId = QB;
        const oB = YB.get("platform");
        if (!oB) throw new Error("platform query param is not defined");
        if (oB !== LG.DESKTOP && oB !== LG.MOBILE) throw new Error(`Invalid query param "platform" of "${oB}". Valid values are "${LG.DESKTOP}" or "${LG.MOBILE}"`);
        this.platform = oB, this.guildId = YB.get("guild_id"), this.channelId = YB.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var BB;
          return [null !== (BB = window.parent.opener) && void 0 !== BB ? BB : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(BB, OB) {
        var GB;
        window.removeEventListener("message", this.handleMessage);
        const YB = sD();
        null === (GB = this.source) || void 0 === GB || GB.postMessage([GQ.CLOSE, {
          code: BB,
          message: OB,
          nonce: YB
        }], this.sourceOrigin)
      }
      async subscribe(BB, OB) {
        for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
        const [QB] = YB, oB = this.eventBus.listenerCount(BB), jB = this.eventBus.on(BB, OB);
        return Object.values(iY).includes(BB) && BB !== iY.READY && 0 === oB && await this.sendCommand({
          cmd: HG.SUBSCRIBE,
          args: QB,
          evt: BB
        }), jB
      }
      async unsubscribe(BB, OB) {
        for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
        const [QB] = YB;
        return BB !== iY.READY && 1 === this.eventBus.listenerCount(BB) && await this.sendCommand({
          cmd: HG.UNSUBSCRIBE,
          evt: BB,
          args: QB
        }), this.eventBus.off(BB, OB)
      }
      async ready() {
        this.isReady || await new Promise((BB => {
          this.eventBus.once(iY.READY, BB)
        }))
      }
      handshake() {
        var BB;
        null === (BB = this.source) || void 0 === BB || BB.postMessage([GQ.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(iY.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const BB = (BB, OB) => {
          this.commands.captureLog({
            level: BB,
            message: OB
          })
        };
        OQ.forEach((OB => {
          ! function(BB, OB, GB) {
            const YB = BB[OB],
              DB = BB;
            YB && (BB[OB] = function() {
              const BB = [].slice.call(arguments),
                QB = "" + BB.join(" ");
              GB(OB, QB), YB.apply(DB, BB)
            })
          }(console, OB, BB)
        }))
      }
      handleClose(BB) {
        yD.parse(BB)
      }
      handleHandshake() {}
      handleFrame(BB) {
        var OB, GB;
        let YB;
        try {
          YB = MD(BB)
        } catch (DB) {
          return console.error("Failed to parse", BB), void console.error(DB)
        }
        if ("DISPATCH" === YB.cmd) this.eventBus.emit(YB.evt, YB.data);
        else {
          if (YB.evt === FY) {
            if (null != YB.nonce) return null === (OB = this.pendingCommands.get(YB.nonce)) || void 0 === OB || OB.reject(YB.data), void this.pendingCommands.delete(YB.nonce);
            this.eventBus.emit("error", new BQ(YB.data.code, YB.data.message))
          }
          if (null == YB.nonce) return void console.error("Missing nonce", BB);
          null === (GB = this.pendingCommands.get(YB.nonce)) || void 0 === GB || GB.resolve(YB), this.pendingCommands.delete(YB.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var QQ, oQ = 1e9,
      jQ = !0,
      yQ = "[DecimalError] ",
      JQ = yQ + "Invalid argument: ",
      MQ = yQ + "Exponent out of range: ",
      PQ = Math.floor,
      zQ = Math.pow,
      lQ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      pQ = 1e7,
      qQ = 9007199254740991,
      ZQ = PQ(1286742750677284.5),
      NQ = {};

    function RQ(BB, OB) {
      var GB, YB, DB, QB, oB, jB, yB, JB, MB = BB.constructor,
        PB = MB.precision;
      if (!BB.s || !OB.s) return OB.s || (OB = new MB(BB)), jQ ? KQ(OB, PB) : OB;
      if (yB = BB.d, JB = OB.d, oB = BB.e, DB = OB.e, yB = yB.slice(), QB = oB - DB) {
        for (QB < 0 ? (YB = yB, QB = -QB, jB = JB.length) : (YB = JB, DB = oB, jB = yB.length), QB > (jB = (oB = Math.ceil(PB / 7)) > jB ? oB + 1 : jB + 1) && (QB = jB, YB.length = 1), YB.reverse(); QB--;) YB.push(0);
        YB.reverse()
      }
      for ((jB = yB.length) - (QB = JB.length) < 0 && (QB = jB, YB = JB, JB = yB, yB = YB), GB = 0; QB;) GB = (yB[--QB] = yB[QB] + JB[QB] + GB) / pQ | 0, yB[QB] %= pQ;
      for (GB && (yB.unshift(GB), ++DB), jB = yB.length; 0 == yB[--jB];) yB.pop();
      return OB.d = yB, OB.e = DB, jQ ? KQ(OB, PB) : OB
    }

    function WQ(BB, OB, GB) {
      if (BB !== ~~BB || BB < OB || BB > GB) throw Error(JQ + BB)
    }

    function AQ(BB) {
      var OB, GB, YB, DB = BB.length - 1,
        QB = "",
        oB = BB[0];
      if (DB > 0) {
        for (QB += oB, OB = 1; OB < DB; OB++)(GB = 7 - (YB = BB[OB] + "").length) && (QB += fQ(GB)), QB += YB;
        (GB = 7 - (YB = (oB = BB[OB]) + "").length) && (QB += fQ(GB))
      } else if (0 === oB) return "0";
      for (; oB % 10 === 0;) oB /= 10;
      return QB + oB
    }
    NQ.absoluteValue = NQ.abs = function() {
      var BB = new this.constructor(this);
      return BB.s && (BB.s = 1), BB
    }, NQ.comparedTo = NQ.cmp = function(BB) {
      var OB, GB, YB, DB, QB = this;
      if (BB = new QB.constructor(BB), QB.s !== BB.s) return QB.s || -BB.s;
      if (QB.e !== BB.e) return QB.e > BB.e ^ QB.s < 0 ? 1 : -1;
      for (OB = 0, GB = (YB = QB.d.length) < (DB = BB.d.length) ? YB : DB; OB < GB; ++OB)
        if (QB.d[OB] !== BB.d[OB]) return QB.d[OB] > BB.d[OB] ^ QB.s < 0 ? 1 : -1;
      return YB === DB ? 0 : YB > DB ^ QB.s < 0 ? 1 : -1
    }, NQ.decimalPlaces = NQ.dp = function() {
      var BB = this,
        OB = BB.d.length - 1,
        GB = 7 * (OB - BB.e);
      if (OB = BB.d[OB])
        for (; OB % 10 == 0; OB /= 10) GB--;
      return GB < 0 ? 0 : GB
    }, NQ.dividedBy = NQ.div = function(BB) {
      return VQ(this, new this.constructor(BB))
    }, NQ.dividedToIntegerBy = NQ.idiv = function(BB) {
      var OB = this.constructor;
      return KQ(VQ(this, new OB(BB), 0, 1), OB.precision)
    }, NQ.equals = NQ.eq = function(BB) {
      return !this.cmp(BB)
    }, NQ.exponent = function() {
      return nQ(this)
    }, NQ.greaterThan = NQ.gt = function(BB) {
      return this.cmp(BB) > 0
    }, NQ.greaterThanOrEqualTo = NQ.gte = function(BB) {
      return this.cmp(BB) >= 0
    }, NQ.isInteger = NQ.isint = function() {
      return this.e > this.d.length - 2
    }, NQ.isNegative = NQ.isneg = function() {
      return this.s < 0
    }, NQ.isPositive = NQ.ispos = function() {
      return this.s > 0
    }, NQ.isZero = function() {
      return 0 === this.s
    }, NQ.lessThan = NQ.lt = function(BB) {
      return this.cmp(BB) < 0
    }, NQ.lessThanOrEqualTo = NQ.lte = function(BB) {
      return this.cmp(BB) < 1
    }, NQ.logarithm = NQ.log = function(BB) {
      var OB, GB = this,
        YB = GB.constructor,
        DB = YB.precision,
        QB = DB + 5;
      if (void 0 === BB) BB = new YB(10);
      else if ((BB = new YB(BB)).s < 1 || BB.eq(QQ)) throw Error(yQ + "NaN");
      if (GB.s < 1) throw Error(yQ + (GB.s ? "NaN" : "-Infinity"));
      return GB.eq(QQ) ? new YB(0) : (jQ = !1, OB = VQ(kQ(GB, QB), kQ(BB, QB), QB), jQ = !0, KQ(OB, DB))
    }, NQ.minus = NQ.sub = function(BB) {
      var OB = this;
      return BB = new OB.constructor(BB), OB.s == BB.s ? uQ(OB, BB) : RQ(OB, (BB.s = -BB.s, BB))
    }, NQ.modulo = NQ.mod = function(BB) {
      var OB, GB = this,
        YB = GB.constructor,
        DB = YB.precision;
      if (!(BB = new YB(BB)).s) throw Error(yQ + "NaN");
      return GB.s ? (jQ = !1, OB = VQ(GB, BB, 0, 1).times(BB), jQ = !0, GB.minus(OB)) : KQ(new YB(GB), DB)
    }, NQ.naturalExponential = NQ.exp = function() {
      return SQ(this)
    }, NQ.naturalLogarithm = NQ.ln = function() {
      return kQ(this)
    }, NQ.negated = NQ.neg = function() {
      var BB = new this.constructor(this);
      return BB.s = -BB.s || 0, BB
    }, NQ.plus = NQ.add = function(BB) {
      var OB = this;
      return BB = new OB.constructor(BB), OB.s == BB.s ? RQ(OB, BB) : uQ(OB, (BB.s = -BB.s, BB))
    }, NQ.precision = NQ.sd = function(BB) {
      var OB, GB, YB, DB = this;
      if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(JQ + BB);
      if (OB = nQ(DB) + 1, GB = 7 * (YB = DB.d.length - 1) + 1, YB = DB.d[YB]) {
        for (; YB % 10 == 0; YB /= 10) GB--;
        for (YB = DB.d[0]; YB >= 10; YB /= 10) GB++
      }
      return BB && OB > GB ? OB : GB
    }, NQ.squareRoot = NQ.sqrt = function() {
      var BB, OB, GB, YB, DB, QB, oB, jB = this,
        yB = jB.constructor;
      if (jB.s < 1) {
        if (!jB.s) return new yB(0);
        throw Error(yQ + "NaN")
      }
      for (BB = nQ(jB), jQ = !1, 0 == (DB = Math.sqrt(+jB)) || DB == 1 / 0 ? (((OB = AQ(jB.d)).length + BB) % 2 == 0 && (OB += "0"), DB = Math.sqrt(OB), BB = PQ((BB + 1) / 2) - (BB < 0 || BB % 2), YB = new yB(OB = DB == 1 / 0 ? "1e" + BB : (OB = DB.toExponential()).slice(0, OB.indexOf("e") + 1) + BB)) : YB = new yB(DB.toString()), DB = oB = (GB = yB.precision) + 3;;)
        if (YB = (QB = YB).plus(VQ(jB, QB, oB + 2)).times(.5), AQ(QB.d).slice(0, oB) === (OB = AQ(YB.d)).slice(0, oB)) {
          if (OB = OB.slice(oB - 3, oB + 1), DB == oB && "4999" == OB) {
            if (KQ(QB, GB + 1, 0), QB.times(QB).eq(jB)) {
              YB = QB;
              break
            }
          } else if ("9999" != OB) break;
          oB += 4
        } return jQ = !0, KQ(YB, GB)
    }, NQ.times = NQ.mul = function(BB) {
      var OB, GB, YB, DB, QB, oB, jB, yB, JB, MB = this,
        PB = MB.constructor,
        zB = MB.d,
        lB = (BB = new PB(BB)).d;
      if (!MB.s || !BB.s) return new PB(0);
      for (BB.s *= MB.s, GB = MB.e + BB.e, (yB = zB.length) < (JB = lB.length) && (QB = zB, zB = lB, lB = QB, oB = yB, yB = JB, JB = oB), QB = [], YB = oB = yB + JB; YB--;) QB.push(0);
      for (YB = JB; --YB >= 0;) {
        for (OB = 0, DB = yB + YB; DB > YB;) jB = QB[DB] + lB[YB] * zB[DB - YB - 1] + OB, QB[DB--] = jB % pQ | 0, OB = jB / pQ | 0;
        QB[DB] = (QB[DB] + OB) % pQ | 0
      }
      for (; !QB[--oB];) QB.pop();
      return OB ? ++GB : QB.shift(), BB.d = QB, BB.e = GB, jQ ? KQ(BB, PB.precision) : BB
    }, NQ.toDecimalPlaces = NQ.todp = function(BB, OB) {
      var GB = this,
        YB = GB.constructor;
      return GB = new YB(GB), void 0 === BB ? GB : (WQ(BB, 0, oQ), void 0 === OB ? OB = YB.rounding : WQ(OB, 0, 8), KQ(GB, BB + nQ(GB) + 1, OB))
    }, NQ.toExponential = function(BB, OB) {
      var GB, YB = this,
        DB = YB.constructor;
      return void 0 === BB ? GB = mQ(YB, !0) : (WQ(BB, 0, oQ), void 0 === OB ? OB = DB.rounding : WQ(OB, 0, 8), GB = mQ(YB = KQ(new DB(YB), BB + 1, OB), !0, BB + 1)), GB
    }, NQ.toFixed = function(BB, OB) {
      var GB, YB, DB = this,
        QB = DB.constructor;
      return void 0 === BB ? mQ(DB) : (WQ(BB, 0, oQ), void 0 === OB ? OB = QB.rounding : WQ(OB, 0, 8), GB = mQ((YB = KQ(new QB(DB), BB + nQ(DB) + 1, OB)).abs(), !1, BB + nQ(YB) + 1), DB.isneg() && !DB.isZero() ? "-" + GB : GB)
    }, NQ.toInteger = NQ.toint = function() {
      var BB = this,
        OB = BB.constructor;
      return KQ(new OB(BB), nQ(BB) + 1, OB.rounding)
    }, NQ.toNumber = function() {
      return +this
    }, NQ.toPower = NQ.pow = function(BB) {
      var OB, GB, YB, DB, QB, oB, jB = this,
        yB = jB.constructor,
        JB = +(BB = new yB(BB));
      if (!BB.s) return new yB(QQ);
      if (!(jB = new yB(jB)).s) {
        if (BB.s < 1) throw Error(yQ + "Infinity");
        return jB
      }
      if (jB.eq(QQ)) return jB;
      if (YB = yB.precision, BB.eq(QQ)) return KQ(jB, YB);
      if (oB = (OB = BB.e) >= (GB = BB.d.length - 1), QB = jB.s, oB) {
        if ((GB = JB < 0 ? -JB : JB) <= qQ) {
          for (DB = new yB(QQ), OB = Math.ceil(YB / 7 + 4), jQ = !1; GB % 2 && IQ((DB = DB.times(jB)).d, OB), 0 !== (GB = PQ(GB / 2));) IQ((jB = jB.times(jB)).d, OB);
          return jQ = !0, BB.s < 0 ? new yB(QQ).div(DB) : KQ(DB, YB)
        }
      } else if (QB < 0) throw Error(yQ + "NaN");
      return QB = QB < 0 && 1 & BB.d[Math.max(OB, GB)] ? -1 : 1, jB.s = 1, jQ = !1, DB = BB.times(kQ(jB, YB + 12)), jQ = !0, (DB = SQ(DB)).s = QB, DB
    }, NQ.toPrecision = function(BB, OB) {
      var GB, YB, DB = this,
        QB = DB.constructor;
      return void 0 === BB ? YB = mQ(DB, (GB = nQ(DB)) <= QB.toExpNeg || GB >= QB.toExpPos) : (WQ(BB, 1, oQ), void 0 === OB ? OB = QB.rounding : WQ(OB, 0, 8), YB = mQ(DB = KQ(new QB(DB), BB, OB), BB <= (GB = nQ(DB)) || GB <= QB.toExpNeg, BB)), YB
    }, NQ.toSignificantDigits = NQ.tosd = function(BB, OB) {
      var GB = this.constructor;
      return void 0 === BB ? (BB = GB.precision, OB = GB.rounding) : (WQ(BB, 1, oQ), void 0 === OB ? OB = GB.rounding : WQ(OB, 0, 8)), KQ(new GB(this), BB, OB)
    }, NQ.toString = NQ.valueOf = NQ.val = NQ.toJSON = NQ[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var BB = this,
        OB = nQ(BB),
        GB = BB.constructor;
      return mQ(BB, OB <= GB.toExpNeg || OB >= GB.toExpPos)
    };
    var VQ = function() {
      function BB(BB, OB) {
        var GB, YB = 0,
          DB = BB.length;
        for (BB = BB.slice(); DB--;) GB = BB[DB] * OB + YB, BB[DB] = GB % pQ | 0, YB = GB / pQ | 0;
        return YB && BB.unshift(YB), BB
      }

      function OB(BB, OB, GB, YB) {
        var DB, QB;
        if (GB != YB) QB = GB > YB ? 1 : -1;
        else
          for (DB = QB = 0; DB < GB; DB++)
            if (BB[DB] != OB[DB]) {
              QB = BB[DB] > OB[DB] ? 1 : -1;
              break
            } return QB
      }

      function GB(BB, OB, GB) {
        for (var YB = 0; GB--;) BB[GB] -= YB, YB = BB[GB] < OB[GB] ? 1 : 0, BB[GB] = YB * pQ + BB[GB] - OB[GB];
        for (; !BB[0] && BB.length > 1;) BB.shift()
      }
      return function(YB, DB, QB, oB) {
        var jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB, VB, SB, nB, UB, fB = YB.constructor,
          kB = YB.s == DB.s ? 1 : -1,
          dB = YB.d,
          KB = DB.d;
        if (!YB.s) return new fB(YB);
        if (!DB.s) throw Error(yQ + "Division by zero");
        for (yB = YB.e - DB.e, nB = KB.length, VB = dB.length, pB = (lB = new fB(kB)).d = [], JB = 0; KB[JB] == (dB[JB] || 0);) ++JB;
        if (KB[JB] > (dB[JB] || 0) && --yB, (RB = null == QB ? QB = fB.precision : oB ? QB + (nQ(YB) - nQ(DB)) + 1 : QB) < 0) return new fB(0);
        if (RB = RB / 7 + 2 | 0, JB = 0, 1 == nB)
          for (MB = 0, KB = KB[0], RB++;
            (JB < VB || MB) && RB--; JB++) WB = MB * pQ + (dB[JB] || 0), pB[JB] = WB / KB | 0, MB = WB % KB | 0;
        else {
          for ((MB = pQ / (KB[0] + 1) | 0) > 1 && (KB = BB(KB, MB), dB = BB(dB, MB), nB = KB.length, VB = dB.length), AB = nB, ZB = (qB = dB.slice(0, nB)).length; ZB < nB;) qB[ZB++] = 0;
          (UB = KB.slice()).unshift(0), SB = KB[0], KB[1] >= pQ / 2 && ++SB;
          do {
            MB = 0, (jB = OB(KB, qB, nB, ZB)) < 0 ? (NB = qB[0], nB != ZB && (NB = NB * pQ + (qB[1] || 0)), (MB = NB / SB | 0) > 1 ? (MB >= pQ && (MB = pQ - 1), 1 == (jB = OB(PB = BB(KB, MB), qB, zB = PB.length, ZB = qB.length)) && (MB--, GB(PB, nB < zB ? UB : KB, zB))) : (0 == MB && (jB = MB = 1), PB = KB.slice()), (zB = PB.length) < ZB && PB.unshift(0), GB(qB, PB, ZB), -1 == jB && (jB = OB(KB, qB, nB, ZB = qB.length)) < 1 && (MB++, GB(qB, nB < ZB ? UB : KB, ZB)), ZB = qB.length) : 0 === jB && (MB++, qB = [0]), pB[JB++] = MB, jB && qB[0] ? qB[ZB++] = dB[AB] || 0 : (qB = [dB[AB]], ZB = 1)
          } while ((AB++ < VB || void 0 !== qB[0]) && RB--)
        }
        return pB[0] || pB.shift(), lB.e = yB, KQ(lB, oB ? QB + nQ(lB) + 1 : QB)
      }
    }();

    function SQ(BB, OB) {
      var GB, YB, DB, QB, oB, jB = 0,
        yB = 0,
        JB = BB.constructor,
        MB = JB.precision;
      if (nQ(BB) > 16) throw Error(MQ + nQ(BB));
      if (!BB.s) return new JB(QQ);
      for (null == OB ? (jQ = !1, oB = MB) : oB = OB, QB = new JB(.03125); BB.abs().gte(.1);) BB = BB.times(QB), yB += 5;
      for (oB += Math.log(zQ(2, yB)) / Math.LN10 * 2 + 5 | 0, GB = YB = DB = new JB(QQ), JB.precision = oB;;) {
        if (YB = KQ(YB.times(BB), oB), GB = GB.times(++jB), AQ((QB = DB.plus(VQ(YB, GB, oB))).d).slice(0, oB) === AQ(DB.d).slice(0, oB)) {
          for (; yB--;) DB = KQ(DB.times(DB), oB);
          return JB.precision = MB, null == OB ? (jQ = !0, KQ(DB, MB)) : DB
        }
        DB = QB
      }
    }

    function nQ(BB) {
      for (var OB = 7 * BB.e, GB = BB.d[0]; GB >= 10; GB /= 10) OB++;
      return OB
    }

    function UQ(BB, OB, GB) {
      if (OB > BB.LN10.sd()) throw jQ = !0, GB && (BB.precision = GB), Error(yQ + "LN10 precision limit exceeded");
      return KQ(new BB(BB.LN10), OB)
    }

    function fQ(BB) {
      for (var OB = ""; BB--;) OB += "0";
      return OB
    }

    function kQ(BB, OB) {
      var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB = 1,
        zB = BB,
        lB = zB.d,
        pB = zB.constructor,
        qB = pB.precision;
      if (zB.s < 1) throw Error(yQ + (zB.s ? "NaN" : "-Infinity"));
      if (zB.eq(QQ)) return new pB(0);
      if (null == OB ? (jQ = !1, JB = qB) : JB = OB, zB.eq(10)) return null == OB && (jQ = !0), UQ(pB, JB);
      if (JB += 10, pB.precision = JB, YB = (GB = AQ(lB)).charAt(0), QB = nQ(zB), !(Math.abs(QB) < 15e14)) return yB = UQ(pB, JB + 2, qB).times(QB + ""), zB = kQ(new pB(YB + "." + GB.slice(1)), JB - 10).plus(yB), pB.precision = qB, null == OB ? (jQ = !0, KQ(zB, qB)) : zB;
      for (; YB < 7 && 1 != YB || 1 == YB && GB.charAt(1) > 3;) YB = (GB = AQ((zB = zB.times(BB)).d)).charAt(0), PB++;
      for (QB = nQ(zB), YB > 1 ? (zB = new pB("0." + GB), QB++) : zB = new pB(YB + "." + GB.slice(1)), jB = oB = zB = VQ(zB.minus(QQ), zB.plus(QQ), JB), MB = KQ(zB.times(zB), JB), DB = 3;;) {
        if (oB = KQ(oB.times(MB), JB), AQ((yB = jB.plus(VQ(oB, new pB(DB), JB))).d).slice(0, JB) === AQ(jB.d).slice(0, JB)) return jB = jB.times(2), 0 !== QB && (jB = jB.plus(UQ(pB, JB + 2, qB).times(QB + ""))), jB = VQ(jB, new pB(PB), JB), pB.precision = qB, null == OB ? (jQ = !0, KQ(jB, qB)) : jB;
        jB = yB, DB += 2
      }
    }

    function dQ(BB, OB) {
      var GB, YB, DB;
      for ((GB = OB.indexOf(".")) > -1 && (OB = OB.replace(".", "")), (YB = OB.search(/e/i)) > 0 ? (GB < 0 && (GB = YB), GB += +OB.slice(YB + 1), OB = OB.substring(0, YB)) : GB < 0 && (GB = OB.length), YB = 0; 48 === OB.charCodeAt(YB);) ++YB;
      for (DB = OB.length; 48 === OB.charCodeAt(DB - 1);) --DB;
      if (OB = OB.slice(YB, DB)) {
        if (DB -= YB, GB = GB - YB - 1, BB.e = PQ(GB / 7), BB.d = [], YB = (GB + 1) % 7, GB < 0 && (YB += 7), YB < DB) {
          for (YB && BB.d.push(+OB.slice(0, YB)), DB -= 7; YB < DB;) BB.d.push(+OB.slice(YB, YB += 7));
          YB = 7 - (OB = OB.slice(YB)).length
        } else YB -= DB;
        for (; YB--;) OB += "0";
        if (BB.d.push(+OB), jQ && (BB.e > ZQ || BB.e < -ZQ)) throw Error(MQ + GB)
      } else BB.s = 0, BB.e = 0, BB.d = [0];
      return BB
    }

    function KQ(BB, OB, GB) {
      var YB, DB, QB, oB, jB, yB, JB, MB, PB = BB.d;
      for (oB = 1, QB = PB[0]; QB >= 10; QB /= 10) oB++;
      if ((YB = OB - oB) < 0) YB += 7, DB = OB, JB = PB[MB = 0];
      else {
        if ((MB = Math.ceil((YB + 1) / 7)) >= (QB = PB.length)) return BB;
        for (JB = QB = PB[MB], oB = 1; QB >= 10; QB /= 10) oB++;
        DB = (YB %= 7) - 7 + oB
      }
      if (void 0 !== GB && (jB = JB / (QB = zQ(10, oB - DB - 1)) % 10 | 0, yB = OB < 0 || void 0 !== PB[MB + 1] || JB % QB, yB = GB < 4 ? (jB || yB) && (0 == GB || GB == (BB.s < 0 ? 3 : 2)) : jB > 5 || 5 == jB && (4 == GB || yB || 6 == GB && (YB > 0 ? DB > 0 ? JB / zQ(10, oB - DB) : 0 : PB[MB - 1]) % 10 & 1 || GB == (BB.s < 0 ? 8 : 7))), OB < 1 || !PB[0]) return yB ? (QB = nQ(BB), PB.length = 1, OB = OB - QB - 1, PB[0] = zQ(10, (7 - OB % 7) % 7), BB.e = PQ(-OB / 7) || 0) : (PB.length = 1, PB[0] = BB.e = BB.s = 0), BB;
      if (0 == YB ? (PB.length = MB, QB = 1, MB--) : (PB.length = MB + 1, QB = zQ(10, 7 - YB), PB[MB] = DB > 0 ? (JB / zQ(10, oB - DB) % zQ(10, DB) | 0) * QB : 0), yB)
        for (;;) {
          if (0 == MB) {
            (PB[0] += QB) == pQ && (PB[0] = 1, ++BB.e);
            break
          }
          if (PB[MB] += QB, PB[MB] != pQ) break;
          PB[MB--] = 0, QB = 1
        }
      for (YB = PB.length; 0 === PB[--YB];) PB.pop();
      if (jQ && (BB.e > ZQ || BB.e < -ZQ)) throw Error(MQ + nQ(BB));
      return BB
    }

    function uQ(BB, OB) {
      var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB = BB.constructor,
        lB = zB.precision;
      if (!BB.s || !OB.s) return OB.s ? OB.s = -OB.s : OB = new zB(BB), jQ ? KQ(OB, lB) : OB;
      if (yB = BB.d, PB = OB.d, YB = OB.e, JB = BB.e, yB = yB.slice(), oB = JB - YB) {
        for ((MB = oB < 0) ? (GB = yB, oB = -oB, jB = PB.length) : (GB = PB, YB = JB, jB = yB.length), oB > (DB = Math.max(Math.ceil(lB / 7), jB) + 2) && (oB = DB, GB.length = 1), GB.reverse(), DB = oB; DB--;) GB.push(0);
        GB.reverse()
      } else {
        for ((MB = (DB = yB.length) < (jB = PB.length)) && (jB = DB), DB = 0; DB < jB; DB++)
          if (yB[DB] != PB[DB]) {
            MB = yB[DB] < PB[DB];
            break
          } oB = 0
      }
      for (MB && (GB = yB, yB = PB, PB = GB, OB.s = -OB.s), jB = yB.length, DB = PB.length - jB; DB > 0; --DB) yB[jB++] = 0;
      for (DB = PB.length; DB > oB;) {
        if (yB[--DB] < PB[DB]) {
          for (QB = DB; QB && 0 === yB[--QB];) yB[QB] = pQ - 1;
          --yB[QB], yB[DB] += pQ
        }
        yB[DB] -= PB[DB]
      }
      for (; 0 === yB[--jB];) yB.pop();
      for (; 0 === yB[0]; yB.shift()) --YB;
      return yB[0] ? (OB.d = yB, OB.e = YB, jQ ? KQ(OB, lB) : OB) : new zB(0)
    }

    function mQ(BB, OB, GB) {
      var YB, DB = nQ(BB),
        QB = AQ(BB.d),
        oB = QB.length;
      return OB ? (GB && (YB = GB - oB) > 0 ? QB = QB.charAt(0) + "." + QB.slice(1) + fQ(YB) : oB > 1 && (QB = QB.charAt(0) + "." + QB.slice(1)), QB = QB + (DB < 0 ? "e" : "e+") + DB) : DB < 0 ? (QB = "0." + fQ(-DB - 1) + QB, GB && (YB = GB - oB) > 0 && (QB += fQ(YB))) : DB >= oB ? (QB += fQ(DB + 1 - oB), GB && (YB = GB - DB - 1) > 0 && (QB = QB + "." + fQ(YB))) : ((YB = DB + 1) < oB && (QB = QB.slice(0, YB) + "." + QB.slice(YB)), GB && (YB = GB - oB) > 0 && (DB + 1 === oB && (QB += "."), QB += fQ(YB))), BB.s < 0 ? "-" + QB : QB
    }

    function IQ(BB, OB) {
      if (BB.length > OB) return BB.length = OB, !0
    }

    function FQ(BB) {
      if (!BB || "object" !== typeof BB) throw Error(yQ + "Object expected");
      var OB, GB, YB, DB = ["precision", 1, oQ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (OB = 0; OB < DB.length; OB += 3)
        if (void 0 !== (YB = BB[GB = DB[OB]])) {
          if (!(PQ(YB) === YB && YB >= DB[OB + 1] && YB <= DB[OB + 2])) throw Error(JQ + GB + ": " + YB);
          this[GB] = YB
        } if (void 0 !== (YB = BB[GB = "LN10"])) {
        if (YB != Math.LN10) throw Error(JQ + GB + ": " + YB);
        this[GB] = new this(YB)
      }
      return this
    }
    var iQ = function BB(OB) {
      var GB, YB, DB;

      function QB(BB) {
        var OB = this;
        if (!(OB instanceof QB)) return new QB(BB);
        if (OB.constructor = QB, BB instanceof QB) return OB.s = BB.s, OB.e = BB.e, void(OB.d = (BB = BB.d) ? BB.slice() : BB);
        if ("number" === typeof BB) {
          if (0 * BB !== 0) throw Error(JQ + BB);
          if (BB > 0) OB.s = 1;
          else {
            if (!(BB < 0)) return OB.s = 0, OB.e = 0, void(OB.d = [0]);
            BB = -BB, OB.s = -1
          }
          return BB === ~~BB && BB < 1e7 ? (OB.e = 0, void(OB.d = [BB])) : dQ(OB, BB.toString())
        }
        if ("string" !== typeof BB) throw Error(JQ + BB);
        if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), OB.s = -1) : OB.s = 1, !lQ.test(BB)) throw Error(JQ + BB);
        dQ(OB, BB)
      }
      if (QB.prototype = NQ, QB.ROUND_UP = 0, QB.ROUND_DOWN = 1, QB.ROUND_CEIL = 2, QB.ROUND_FLOOR = 3, QB.ROUND_HALF_UP = 4, QB.ROUND_HALF_DOWN = 5, QB.ROUND_HALF_EVEN = 6, QB.ROUND_HALF_CEIL = 7, QB.ROUND_HALF_FLOOR = 8, QB.clone = BB, QB.config = QB.set = FQ, void 0 === OB && (OB = {}), OB)
        for (DB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], GB = 0; GB < DB.length;) OB.hasOwnProperty(YB = DB[GB++]) || (OB[YB] = this[YB]);
      return QB.config(OB), QB
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    QQ = new iQ(1);
    var LQ;
    ! function(BB) {
      BB.AED = "aed", BB.AFN = "afn", BB.ALL = "all", BB.AMD = "amd", BB.ANG = "ang", BB.AOA = "aoa", BB.ARS = "ars", BB.AUD = "aud", BB.AWG = "awg", BB.AZN = "azn", BB.BAM = "bam", BB.BBD = "bbd", BB.BDT = "bdt", BB.BGN = "bgn", BB.BHD = "bhd", BB.BIF = "bif", BB.BMD = "bmd", BB.BND = "bnd", BB.BOB = "bob", BB.BOV = "bov", BB.BRL = "brl", BB.BSD = "bsd", BB.BTN = "btn", BB.BWP = "bwp", BB.BYN = "byn", BB.BYR = "byr", BB.BZD = "bzd", BB.CAD = "cad", BB.CDF = "cdf", BB.CHE = "che", BB.CHF = "chf", BB.CHW = "chw", BB.CLF = "clf", BB.CLP = "clp", BB.CNY = "cny", BB.COP = "cop", BB.COU = "cou", BB.CRC = "crc", BB.CUC = "cuc", BB.CUP = "cup", BB.CVE = "cve", BB.CZK = "czk", BB.DJF = "djf", BB.DKK = "dkk", BB.DOP = "dop", BB.DZD = "dzd", BB.EGP = "egp", BB.ERN = "ern", BB.ETB = "etb", BB.EUR = "eur", BB.FJD = "fjd", BB.FKP = "fkp", BB.GBP = "gbp", BB.GEL = "gel", BB.GHS = "ghs", BB.GIP = "gip", BB.GMD = "gmd", BB.GNF = "gnf", BB.GTQ = "gtq", BB.GYD = "gyd", BB.HKD = "hkd", BB.HNL = "hnl", BB.HRK = "hrk", BB.HTG = "htg", BB.HUF = "huf", BB.IDR = "idr", BB.ILS = "ils", BB.INR = "inr", BB.IQD = "iqd", BB.IRR = "irr", BB.ISK = "isk", BB.JMD = "jmd", BB.JOD = "jod", BB.JPY = "jpy", BB.KES = "kes", BB.KGS = "kgs", BB.KHR = "khr", BB.KMF = "kmf", BB.KPW = "kpw", BB.KRW = "krw", BB.KWD = "kwd", BB.KYD = "kyd", BB.KZT = "kzt", BB.LAK = "lak", BB.LBP = "lbp", BB.LKR = "lkr", BB.LRD = "lrd", BB.LSL = "lsl", BB.LTL = "ltl", BB.LVL = "lvl", BB.LYD = "lyd", BB.MAD = "mad", BB.MDL = "mdl", BB.MGA = "mga", BB.MKD = "mkd", BB.MMK = "mmk", BB.MNT = "mnt", BB.MOP = "mop", BB.MRO = "mro", BB.MUR = "mur", BB.MVR = "mvr", BB.MWK = "mwk", BB.MXN = "mxn", BB.MXV = "mxv", BB.MYR = "myr", BB.MZN = "mzn", BB.NAD = "nad", BB.NGN = "ngn", BB.NIO = "nio", BB.NOK = "nok", BB.NPR = "npr", BB.NZD = "nzd", BB.OMR = "omr", BB.PAB = "pab", BB.PEN = "pen", BB.PGK = "pgk", BB.PHP = "php", BB.PKR = "pkr", BB.PLN = "pln", BB.PYG = "pyg", BB.QAR = "qar", BB.RON = "ron", BB.RSD = "rsd", BB.RUB = "rub", BB.RWF = "rwf", BB.SAR = "sar", BB.SBD = "sbd", BB.SCR = "scr", BB.SDG = "sdg", BB.SEK = "sek", BB.SGD = "sgd", BB.SHP = "shp", BB.SLL = "sll", BB.SOS = "sos", BB.SRD = "srd", BB.SSP = "ssp", BB.STD = "std", BB.SVC = "svc", BB.SYP = "syp", BB.SZL = "szl", BB.THB = "thb", BB.TJS = "tjs", BB.TMT = "tmt", BB.TND = "tnd", BB.TOP = "top", BB.TRY = "try", BB.TTD = "ttd", BB.TWD = "twd", BB.TZS = "tzs", BB.UAH = "uah", BB.UGX = "ugx", BB.USD = "usd", BB.USN = "usn", BB.USS = "uss", BB.UYI = "uyi", BB.UYU = "uyu", BB.UZS = "uzs", BB.VEF = "vef", BB.VND = "vnd", BB.VUV = "vuv", BB.WST = "wst", BB.XAF = "xaf", BB.XAG = "xag", BB.XAU = "xau", BB.XBA = "xba", BB.XBB = "xbb", BB.XBC = "xbc", BB.XBD = "xbd", BB.XCD = "xcd", BB.XDR = "xdr", BB.XFU = "xfu", BB.XOF = "xof", BB.XPD = "xpd", BB.XPF = "xpf", BB.XPT = "xpt", BB.XSU = "xsu", BB.XTS = "xts", BB.XUA = "xua", BB.YER = "yer", BB.ZAR = "zar", BB.ZMW = "zmw", BB.ZWL = "zwl"
    }(LQ || (LQ = {}));
    LQ.AED, LQ.AFN, LQ.ALL, LQ.AMD, LQ.ANG, LQ.AOA, LQ.ARS, LQ.AUD, LQ.AWG, LQ.AZN, LQ.BAM, LQ.BBD, LQ.BDT, LQ.BGN, LQ.BHD, LQ.BIF, LQ.BMD, LQ.BND, LQ.BOB, LQ.BOV, LQ.BRL, LQ.BSD, LQ.BTN, LQ.BWP, LQ.BYR, LQ.BYN, LQ.BZD, LQ.CAD, LQ.CDF, LQ.CHE, LQ.CHF, LQ.CHW, LQ.CLF, LQ.CLP, LQ.CNY, LQ.COP, LQ.COU, LQ.CRC, LQ.CUC, LQ.CUP, LQ.CVE, LQ.CZK, LQ.DJF, LQ.DKK, LQ.DOP, LQ.DZD, LQ.EGP, LQ.ERN, LQ.ETB, LQ.EUR, LQ.FJD, LQ.FKP, LQ.GBP, LQ.GEL, LQ.GHS, LQ.GIP, LQ.GMD, LQ.GNF, LQ.GTQ, LQ.GYD, LQ.HKD, LQ.HNL, LQ.HRK, LQ.HTG, LQ.HUF, LQ.IDR, LQ.ILS, LQ.INR, LQ.IQD, LQ.IRR, LQ.ISK, LQ.JMD, LQ.JOD, LQ.JPY, LQ.KES, LQ.KGS, LQ.KHR, LQ.KMF, LQ.KPW, LQ.KRW, LQ.KWD, LQ.KYD, LQ.KZT, LQ.LAK, LQ.LBP, LQ.LKR, LQ.LRD, LQ.LSL, LQ.LTL, LQ.LVL, LQ.LYD, LQ.MAD, LQ.MDL, LQ.MGA, LQ.MKD, LQ.MMK, LQ.MNT, LQ.MOP, LQ.MRO, LQ.MUR, LQ.MVR, LQ.MWK, LQ.MXN, LQ.MXV, LQ.MYR, LQ.MZN, LQ.NAD, LQ.NGN, LQ.NIO, LQ.NOK, LQ.NPR, LQ.NZD, LQ.OMR, LQ.PAB, LQ.PEN, LQ.PGK, LQ.PHP, LQ.PKR, LQ.PLN, LQ.PYG, LQ.QAR, LQ.RON, LQ.RSD, LQ.RUB, LQ.RWF, LQ.SAR, LQ.SBD, LQ.SCR, LQ.SDG, LQ.SEK, LQ.SGD, LQ.SHP, LQ.SLL, LQ.SOS, LQ.SRD, LQ.SSP, LQ.STD, LQ.SVC, LQ.SYP, LQ.SZL, LQ.THB, LQ.TJS, LQ.TMT, LQ.TND, LQ.TOP, LQ.TRY, LQ.TTD, LQ.TWD, LQ.TZS, LQ.UAH, LQ.UGX, LQ.USD, LQ.USN, LQ.USS, LQ.UYI, LQ.UYU, LQ.UZS, LQ.VEF, LQ.VND, LQ.VUV, LQ.WST, LQ.XAF, LQ.XAG, LQ.XAU, LQ.XBA, LQ.XBB, LQ.XBC, LQ.XBD, LQ.XCD, LQ.XDR, LQ.XFU, LQ.XOF, LQ.XPD, LQ.XPF, LQ.XPT, LQ.XSU, LQ.XTS, LQ.XUA, LQ.YER, LQ.ZAR, LQ.ZMW, LQ.ZWL;
    var gQ = {
      exports: {}
    };
    ! function(BB, OB) {
      var GB = "__lodash_hash_undefined__",
        YB = 9007199254740991,
        QB = "[object Arguments]",
        oB = "[object Array]",
        jB = "[object Boolean]",
        yB = "[object Date]",
        JB = "[object Error]",
        MB = "[object Function]",
        PB = "[object Map]",
        zB = "[object Number]",
        lB = "[object Object]",
        pB = "[object Promise]",
        qB = "[object RegExp]",
        ZB = "[object Set]",
        NB = "[object String]",
        RB = "[object Symbol]",
        WB = "[object WeakMap]",
        AB = "[object ArrayBuffer]",
        VB = "[object DataView]",
        SB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        nB = /^\w*$/,
        UB = /^\./,
        fB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        kB = /\\(\\)?/g,
        dB = /^\[object .+?Constructor\]$/,
        KB = /^(?:0|[1-9]\d*)$/,
        uB = {};
      uB["[object Float32Array]"] = uB["[object Float64Array]"] = uB["[object Int8Array]"] = uB["[object Int16Array]"] = uB["[object Int32Array]"] = uB["[object Uint8Array]"] = uB["[object Uint8ClampedArray]"] = uB["[object Uint16Array]"] = uB["[object Uint32Array]"] = !0, uB[QB] = uB[oB] = uB[AB] = uB[jB] = uB[VB] = uB[yB] = uB[JB] = uB[MB] = uB[PB] = uB[zB] = uB[lB] = uB[qB] = uB[ZB] = uB[NB] = uB[WB] = !1;
      var mB = "object" == typeof DB && DB && DB.Object === Object && DB,
        IB = "object" == typeof self && self && self.Object === Object && self,
        FB = mB || IB || Function("return this")(),
        iB = OB && !OB.nodeType && OB,
        LB = iB && BB && !BB.nodeType && BB,
        gB = LB && LB.exports === iB && mB.process,
        rB = function() {
          try {
            return gB && gB.binding("util")
          } catch (BB) {}
        }(),
        XB = rB && rB.isTypedArray;

      function wB(BB, OB) {
        for (var GB = -1, YB = BB ? BB.length : 0; ++GB < YB && !1 !== OB(BB[GB], GB, BB););
        return BB
      }

      function EB(BB, OB) {
        for (var GB = -1, YB = BB ? BB.length : 0; ++GB < YB;)
          if (OB(BB[GB], GB, BB)) return !0;
        return !1
      }

      function cB(BB) {
        var OB = !1;
        if (null != BB && "function" != typeof BB.toString) try {
          OB = !!(BB + "")
        } catch (GB) {}
        return OB
      }

      function hB(BB) {
        var OB = -1,
          GB = Array(BB.size);
        return BB.forEach((function(BB, YB) {
          GB[++OB] = [YB, BB]
        })), GB
      }

      function aB(BB, OB) {
        return function(GB) {
          return BB(OB(GB))
        }
      }

      function eB(BB) {
        var OB = -1,
          GB = Array(BB.size);
        return BB.forEach((function(BB) {
          GB[++OB] = BB
        })), GB
      }
      var TB = Array.prototype,
        bB = Function.prototype,
        CB = Object.prototype,
        HB = FB["__core-js_shared__"],
        vB = function() {
          var BB = /[^.]+$/.exec(HB && HB.keys && HB.keys.IE_PROTO || "");
          return BB ? "Symbol(src)_1." + BB : ""
        }(),
        sB = bB.toString,
        xB = CB.hasOwnProperty,
        tB = CB.toString,
        BO = RegExp("^" + sB.call(xB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        OO = FB.Symbol,
        GO = FB.Uint8Array,
        YO = aB(Object.getPrototypeOf, Object),
        DO = Object.create,
        QO = CB.propertyIsEnumerable,
        oO = TB.splice,
        jO = aB(Object.keys, Object),
        yO = hO(FB, "DataView"),
        JO = hO(FB, "Map"),
        MO = hO(FB, "Promise"),
        PO = hO(FB, "Set"),
        zO = hO(FB, "WeakMap"),
        lO = hO(Object, "create"),
        pO = sO(yO),
        qO = sO(JO),
        ZO = sO(MO),
        NO = sO(PO),
        RO = sO(zO),
        WO = OO ? OO.prototype : void 0,
        AO = WO ? WO.valueOf : void 0,
        VO = WO ? WO.toString : void 0;

      function SO(BB) {
        var OB = -1,
          GB = BB ? BB.length : 0;
        for (this.clear(); ++OB < GB;) {
          var YB = BB[OB];
          this.set(YB[0], YB[1])
        }
      }

      function nO(BB) {
        var OB = -1,
          GB = BB ? BB.length : 0;
        for (this.clear(); ++OB < GB;) {
          var YB = BB[OB];
          this.set(YB[0], YB[1])
        }
      }

      function UO(BB) {
        var OB = -1,
          GB = BB ? BB.length : 0;
        for (this.clear(); ++OB < GB;) {
          var YB = BB[OB];
          this.set(YB[0], YB[1])
        }
      }

      function fO(BB) {
        var OB = -1,
          GB = BB ? BB.length : 0;
        for (this.__data__ = new UO; ++OB < GB;) this.add(BB[OB])
      }

      function kO(BB) {
        this.__data__ = new nO(BB)
      }

      function dO(BB, OB) {
        var GB = OG(BB) || BG(BB) ? function(BB, OB) {
            for (var GB = -1, YB = Array(BB); ++GB < BB;) YB[GB] = OB(GB);
            return YB
          }(BB.length, String) : [],
          YB = GB.length,
          DB = !!YB;
        for (var QB in BB) !OB && !xB.call(BB, QB) || DB && ("length" == QB || eO(QB, YB)) || GB.push(QB);
        return GB
      }

      function KO(BB, OB) {
        for (var GB = BB.length; GB--;)
          if (tO(BB[GB][0], OB)) return GB;
        return -1
      }
      SO.prototype.clear = function() {
        this.__data__ = lO ? lO(null) : {}
      }, SO.prototype.delete = function(BB) {
        return this.has(BB) && delete this.__data__[BB]
      }, SO.prototype.get = function(BB) {
        var OB = this.__data__;
        if (lO) {
          var YB = OB[BB];
          return YB === GB ? void 0 : YB
        }
        return xB.call(OB, BB) ? OB[BB] : void 0
      }, SO.prototype.has = function(BB) {
        var OB = this.__data__;
        return lO ? void 0 !== OB[BB] : xB.call(OB, BB)
      }, SO.prototype.set = function(BB, OB) {
        return this.__data__[BB] = lO && void 0 === OB ? GB : OB, this
      }, nO.prototype.clear = function() {
        this.__data__ = []
      }, nO.prototype.delete = function(BB) {
        var OB = this.__data__,
          GB = KO(OB, BB);
        return !(GB < 0) && (GB == OB.length - 1 ? OB.pop() : oO.call(OB, GB, 1), !0)
      }, nO.prototype.get = function(BB) {
        var OB = this.__data__,
          GB = KO(OB, BB);
        return GB < 0 ? void 0 : OB[GB][1]
      }, nO.prototype.has = function(BB) {
        return KO(this.__data__, BB) > -1
      }, nO.prototype.set = function(BB, OB) {
        var GB = this.__data__,
          YB = KO(GB, BB);
        return YB < 0 ? GB.push([BB, OB]) : GB[YB][1] = OB, this
      }, UO.prototype.clear = function() {
        this.__data__ = {
          hash: new SO,
          map: new(JO || nO),
          string: new SO
        }
      }, UO.prototype.delete = function(BB) {
        return cO(this, BB).delete(BB)
      }, UO.prototype.get = function(BB) {
        return cO(this, BB).get(BB)
      }, UO.prototype.has = function(BB) {
        return cO(this, BB).has(BB)
      }, UO.prototype.set = function(BB, OB) {
        return cO(this, BB).set(BB, OB), this
      }, fO.prototype.add = fO.prototype.push = function(BB) {
        return this.__data__.set(BB, GB), this
      }, fO.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, kO.prototype.clear = function() {
        this.__data__ = new nO
      }, kO.prototype.delete = function(BB) {
        return this.__data__.delete(BB)
      }, kO.prototype.get = function(BB) {
        return this.__data__.get(BB)
      }, kO.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, kO.prototype.set = function(BB, OB) {
        var GB = this.__data__;
        if (GB instanceof nO) {
          var YB = GB.__data__;
          if (!JO || YB.length < 199) return YB.push([BB, OB]), this;
          GB = this.__data__ = new UO(YB)
        }
        return GB.set(BB, OB), this
      };
      var uO, mO = function(BB, OB, GB) {
        for (var YB = -1, DB = Object(BB), QB = GB(BB), oB = QB.length; oB--;) {
          var jB = QB[uO ? oB : ++YB];
          if (!1 === OB(DB[jB], jB, DB)) break
        }
        return BB
      };

      function IO(BB, OB) {
        return BB && mO(BB, OB, MG)
      }

      function FO(BB, OB) {
        for (var GB = 0, YB = (OB = TO(OB, BB) ? [OB] : wO(OB)).length; null != BB && GB < YB;) BB = BB[vO(OB[GB++])];
        return GB && GB == YB ? BB : void 0
      }

      function iO(BB, OB) {
        return null != BB && OB in Object(BB)
      }

      function LO(BB, OB, GB, YB, DB) {
        return BB === OB || (null == BB || null == OB || !QG(BB) && !oG(OB) ? BB !== BB && OB !== OB : function(BB, OB, GB, YB, DB, MB) {
          var pB = OG(BB),
            WB = OG(OB),
            SB = oB,
            nB = oB;
          pB || (SB = (SB = aO(BB)) == QB ? lB : SB);
          WB || (nB = (nB = aO(OB)) == QB ? lB : nB);
          var UB = SB == lB && !cB(BB),
            fB = nB == lB && !cB(OB),
            kB = SB == nB;
          if (kB && !UB) return MB || (MB = new kO), pB || JG(BB) ? EO(BB, OB, GB, YB, DB, MB) : function(BB, OB, GB, YB, DB, QB, oB) {
            switch (GB) {
              case VB:
                if (BB.byteLength != OB.byteLength || BB.byteOffset != OB.byteOffset) return !1;
                BB = BB.buffer, OB = OB.buffer;
              case AB:
                return !(BB.byteLength != OB.byteLength || !YB(new GO(BB), new GO(OB)));
              case jB:
              case yB:
              case zB:
                return tO(+BB, +OB);
              case JB:
                return BB.name == OB.name && BB.message == OB.message;
              case qB:
              case NB:
                return BB == OB + "";
              case PB:
                var MB = hB;
              case ZB:
                var lB = 2 & QB;
                if (MB || (MB = eB), BB.size != OB.size && !lB) return !1;
                var pB = oB.get(BB);
                if (pB) return pB == OB;
                QB |= 1, oB.set(BB, OB);
                var WB = EO(MB(BB), MB(OB), YB, DB, QB, oB);
                return oB.delete(BB), WB;
              case RB:
                if (AO) return AO.call(BB) == AO.call(OB)
            }
            return !1
          }(BB, OB, SB, GB, YB, DB, MB);
          if (!(2 & DB)) {
            var dB = UB && xB.call(BB, "__wrapped__"),
              KB = fB && xB.call(OB, "__wrapped__");
            if (dB || KB) {
              var uB = dB ? BB.value() : BB,
                mB = KB ? OB.value() : OB;
              return MB || (MB = new kO), GB(uB, mB, YB, DB, MB)
            }
          }
          if (!kB) return !1;
          return MB || (MB = new kO),
            function(BB, OB, GB, YB, DB, QB) {
              var oB = 2 & DB,
                jB = MG(BB),
                yB = jB.length,
                JB = MG(OB),
                MB = JB.length;
              if (yB != MB && !oB) return !1;
              var PB = yB;
              for (; PB--;) {
                var zB = jB[PB];
                if (!(oB ? zB in OB : xB.call(OB, zB))) return !1
              }
              var lB = QB.get(BB);
              if (lB && QB.get(OB)) return lB == OB;
              var pB = !0;
              QB.set(BB, OB), QB.set(OB, BB);
              var qB = oB;
              for (; ++PB < yB;) {
                var ZB = BB[zB = jB[PB]],
                  NB = OB[zB];
                if (YB) var RB = oB ? YB(NB, ZB, zB, OB, BB, QB) : YB(ZB, NB, zB, BB, OB, QB);
                if (!(void 0 === RB ? ZB === NB || GB(ZB, NB, YB, DB, QB) : RB)) {
                  pB = !1;
                  break
                }
                qB || (qB = "constructor" == zB)
              }
              if (pB && !qB) {
                var WB = BB.constructor,
                  AB = OB.constructor;
                WB == AB || !("constructor" in BB) || !("constructor" in OB) || "function" == typeof WB && WB instanceof WB && "function" == typeof AB && AB instanceof AB || (pB = !1)
              }
              return QB.delete(BB), QB.delete(OB), pB
            }(BB, OB, GB, YB, DB, MB)
        }(BB, OB, LO, GB, YB, DB))
      }

      function gO(BB) {
        return !(!QG(BB) || (OB = BB, vB && vB in OB)) && (YG(BB) || cB(BB) ? BO : dB).test(sO(BB));
        var OB
      }

      function rO(BB) {
        return "function" == typeof BB ? BB : null == BB ? PG : "object" == typeof BB ? OG(BB) ? function(BB, OB) {
          if (TO(BB) && bO(OB)) return CO(vO(BB), OB);
          return function(GB) {
            var YB = function(BB, OB, GB) {
              var YB = null == BB ? void 0 : FO(BB, OB);
              return void 0 === YB ? GB : YB
            }(GB, BB);
            return void 0 === YB && YB === OB ? function(BB, OB) {
              return null != BB && function(BB, OB, GB) {
                OB = TO(OB, BB) ? [OB] : wO(OB);
                var YB, DB = -1,
                  QB = OB.length;
                for (; ++DB < QB;) {
                  var oB = vO(OB[DB]);
                  if (!(YB = null != BB && GB(BB, oB))) break;
                  BB = BB[oB]
                }
                if (YB) return YB;
                QB = BB ? BB.length : 0;
                return !!QB && DG(QB) && eO(oB, QB) && (OG(BB) || BG(BB))
              }(BB, OB, iO)
            }(GB, BB) : LO(OB, YB, void 0, 3)
          }
        }(BB[0], BB[1]) : function(BB) {
          var OB = function(BB) {
            var OB = MG(BB),
              GB = OB.length;
            for (; GB--;) {
              var YB = OB[GB],
                DB = BB[YB];
              OB[GB] = [YB, DB, bO(DB)]
            }
            return OB
          }(BB);
          if (1 == OB.length && OB[0][2]) return CO(OB[0][0], OB[0][1]);
          return function(GB) {
            return GB === BB || function(BB, OB, GB, YB) {
              var DB = GB.length,
                QB = DB,
                oB = !YB;
              if (null == BB) return !QB;
              for (BB = Object(BB); DB--;) {
                var jB = GB[DB];
                if (oB && jB[2] ? jB[1] !== BB[jB[0]] : !(jB[0] in BB)) return !1
              }
              for (; ++DB < QB;) {
                var yB = (jB = GB[DB])[0],
                  JB = BB[yB],
                  MB = jB[1];
                if (oB && jB[2]) {
                  if (void 0 === JB && !(yB in BB)) return !1
                } else {
                  var PB = new kO;
                  if (YB) var zB = YB(JB, MB, yB, BB, OB, PB);
                  if (!(void 0 === zB ? LO(MB, JB, YB, 3, PB) : zB)) return !1
                }
              }
              return !0
            }(GB, BB, OB)
          }
        }(BB) : function(BB) {
          return TO(BB) ? (OB = vO(BB), function(BB) {
            return null == BB ? void 0 : BB[OB]
          }) : function(BB) {
            return function(OB) {
              return FO(OB, BB)
            }
          }(BB);
          var OB
        }(BB)
      }

      function XO(BB) {
        if (! function(BB) {
            var OB = BB && BB.constructor,
              GB = "function" == typeof OB && OB.prototype || CB;
            return BB === GB
          }(BB)) return jO(BB);
        var OB = [];
        for (var GB in Object(BB)) xB.call(BB, GB) && "constructor" != GB && OB.push(GB);
        return OB
      }

      function wO(BB) {
        return OG(BB) ? BB : HO(BB)
      }

      function EO(BB, OB, GB, YB, DB, QB) {
        var oB = 2 & DB,
          jB = BB.length,
          yB = OB.length;
        if (jB != yB && !(oB && yB > jB)) return !1;
        var JB = QB.get(BB);
        if (JB && QB.get(OB)) return JB == OB;
        var MB = -1,
          PB = !0,
          zB = 1 & DB ? new fO : void 0;
        for (QB.set(BB, OB), QB.set(OB, BB); ++MB < jB;) {
          var lB = BB[MB],
            pB = OB[MB];
          if (YB) var qB = oB ? YB(pB, lB, MB, OB, BB, QB) : YB(lB, pB, MB, BB, OB, QB);
          if (void 0 !== qB) {
            if (qB) continue;
            PB = !1;
            break
          }
          if (zB) {
            if (!EB(OB, (function(BB, OB) {
                if (!zB.has(OB) && (lB === BB || GB(lB, BB, YB, DB, QB))) return zB.add(OB)
              }))) {
              PB = !1;
              break
            }
          } else if (lB !== pB && !GB(lB, pB, YB, DB, QB)) {
            PB = !1;
            break
          }
        }
        return QB.delete(BB), QB.delete(OB), PB
      }

      function cO(BB, OB) {
        var GB = BB.__data__;
        return function(BB) {
          var OB = typeof BB;
          return "string" == OB || "number" == OB || "symbol" == OB || "boolean" == OB ? "__proto__" !== BB : null === BB
        }(OB) ? GB["string" == typeof OB ? "string" : "hash"] : GB.map
      }

      function hO(BB, OB) {
        var GB = function(BB, OB) {
          return null == BB ? void 0 : BB[OB]
        }(BB, OB);
        return gO(GB) ? GB : void 0
      }
      var aO = function(BB) {
        return tB.call(BB)
      };

      function eO(BB, OB) {
        return !!(OB = null == OB ? YB : OB) && ("number" == typeof BB || KB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < OB
      }

      function TO(BB, OB) {
        if (OG(BB)) return !1;
        var GB = typeof BB;
        return !("number" != GB && "symbol" != GB && "boolean" != GB && null != BB && !jG(BB)) || (nB.test(BB) || !SB.test(BB) || null != OB && BB in Object(OB))
      }

      function bO(BB) {
        return BB === BB && !QG(BB)
      }

      function CO(BB, OB) {
        return function(GB) {
          return null != GB && (GB[BB] === OB && (void 0 !== OB || BB in Object(GB)))
        }
      }(yO && aO(new yO(new ArrayBuffer(1))) != VB || JO && aO(new JO) != PB || MO && aO(MO.resolve()) != pB || PO && aO(new PO) != ZB || zO && aO(new zO) != WB) && (aO = function(BB) {
        var OB = tB.call(BB),
          GB = OB == lB ? BB.constructor : void 0,
          YB = GB ? sO(GB) : void 0;
        if (YB) switch (YB) {
          case pO:
            return VB;
          case qO:
            return PB;
          case ZO:
            return pB;
          case NO:
            return ZB;
          case RO:
            return WB
        }
        return OB
      });
      var HO = xO((function(BB) {
        var OB;
        BB = null == (OB = BB) ? "" : function(BB) {
          if ("string" == typeof BB) return BB;
          if (jG(BB)) return VO ? VO.call(BB) : "";
          var OB = BB + "";
          return "0" == OB && 1 / BB == -1 / 0 ? "-0" : OB
        }(OB);
        var GB = [];
        return UB.test(BB) && GB.push(""), BB.replace(fB, (function(BB, OB, YB, DB) {
          GB.push(YB ? DB.replace(kB, "$1") : OB || BB)
        })), GB
      }));

      function vO(BB) {
        if ("string" == typeof BB || jG(BB)) return BB;
        var OB = BB + "";
        return "0" == OB && 1 / BB == -1 / 0 ? "-0" : OB
      }

      function sO(BB) {
        if (null != BB) {
          try {
            return sB.call(BB)
          } catch (OB) {}
          try {
            return BB + ""
          } catch (OB) {}
        }
        return ""
      }

      function xO(BB, OB) {
        if ("function" != typeof BB || OB && "function" != typeof OB) throw new TypeError("Expected a function");
        var GB = function() {
          var YB = arguments,
            DB = OB ? OB.apply(this, YB) : YB[0],
            QB = GB.cache;
          if (QB.has(DB)) return QB.get(DB);
          var oB = BB.apply(this, YB);
          return GB.cache = QB.set(DB, oB), oB
        };
        return GB.cache = new(xO.Cache || UO), GB
      }

      function tO(BB, OB) {
        return BB === OB || BB !== BB && OB !== OB
      }

      function BG(BB) {
        return function(BB) {
          return oG(BB) && GG(BB)
        }(BB) && xB.call(BB, "callee") && (!QO.call(BB, "callee") || tB.call(BB) == QB)
      }
      xO.Cache = UO;
      var OG = Array.isArray;

      function GG(BB) {
        return null != BB && DG(BB.length) && !YG(BB)
      }

      function YG(BB) {
        var OB = QG(BB) ? tB.call(BB) : "";
        return OB == MB || "[object GeneratorFunction]" == OB
      }

      function DG(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= YB
      }

      function QG(BB) {
        var OB = typeof BB;
        return !!BB && ("object" == OB || "function" == OB)
      }

      function oG(BB) {
        return !!BB && "object" == typeof BB
      }

      function jG(BB) {
        return "symbol" == typeof BB || oG(BB) && tB.call(BB) == RB
      }
      var yG, JG = XB ? (yG = XB, function(BB) {
        return yG(BB)
      }) : function(BB) {
        return oG(BB) && DG(BB.length) && !!uB[tB.call(BB)]
      };

      function MG(BB) {
        return GG(BB) ? dO(BB) : XO(BB)
      }

      function PG(BB) {
        return BB
      }
      BB.exports = function(BB, OB, GB) {
        var YB, DB = OG(BB) || JG(BB);
        if (OB = rO(OB), null == GB)
          if (DB || QG(BB)) {
            var QB = BB.constructor;
            GB = DB ? OG(BB) ? new QB : [] : YG(QB) ? QG(YB = YO(BB)) ? DO(YB) : {} : {}
          } else GB = {};
        return (DB ? wB : IO)(BB, (function(BB, YB, DB) {
          return OB(GB, BB, YB, DB)
        })), GB
      }
    }(gQ, gQ.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      j: rQ
    } = YB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);