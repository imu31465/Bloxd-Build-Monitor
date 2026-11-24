export const id = 149;
export const ids = [149];
export const modules = {
  8066: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => Nd,
      g: () => hz
    });
    var QB = {};
    zB.r(QB), zB.d(QB, {
      d: () => QQ,
      j: () => IQ,
      h: () => dQ,
      m: () => cz,
      q: () => Cz,
      t: () => oQ,
      x: () => Rz,
      A: () => FQ,
      C: () => SQ,
      G: () => DQ,
      K: () => bz,
      O: () => EQ,
      S: () => fQ,
      T: () => HQ,
      W: () => vz,
      U: () => jQ,
      Y: () => qQ,
      $: () => iQ
    });
    var nB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function dB(BB) {
      return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
    }
    var IB = {
      exports: {}
    };
    ! function(BB) {
      var jB = Object.prototype.hasOwnProperty,
        zB = "~";

      function QB() {}

      function nB(BB, jB, zB) {
        this.kJ = BB, this.context = jB, this.once = zB || !1
      }

      function dB(BB, jB, QB, dB, IB) {
        if ("function" !== typeof QB) throw new TypeError("The listener must be a function");
        var NB = new nB(QB, dB || BB, IB),
          uB = zB ? zB + jB : jB;
        return BB._events[uB] ? BB._events[uB].kJ ? BB._events[uB] = [BB._events[uB], NB] : BB._events[uB].push(NB) : (BB._events[uB] = NB, BB._eventsCount++), BB
      }

      function IB(BB, jB) {
        0 === --BB._eventsCount ? BB._events = new QB : delete BB._events[jB]
      }

      function NB() {
        this._events = new QB, this._eventsCount = 0
      }
      Object.create && (QB.prototype = Object.create(null), (new QB).__proto__ || (zB = !1)), NB.prototype.eventNames = function() {
        var BB, QB, nB = [];
        if (0 === this._eventsCount) return nB;
        for (QB in BB = this._events) jB.call(BB, QB) && nB.push(zB ? QB.slice(1) : QB);
        return Object.getOwnPropertySymbols ? nB.concat(Object.getOwnPropertySymbols(BB)) : nB
      }, NB.prototype.listeners = function(BB) {
        var jB = zB ? zB + BB : BB,
          QB = this._events[jB];
        if (!QB) return [];
        if (QB.kJ) return [QB.kJ];
        for (var nB = 0, dB = QB.length, IB = new Array(dB); nB < dB; nB++) IB[nB] = QB[nB].kJ;
        return IB
      }, NB.prototype.listenerCount = function(BB) {
        var jB = zB ? zB + BB : BB,
          QB = this._events[jB];
        return QB ? QB.kJ ? 1 : QB.length : 0
      }, NB.prototype.emit = function(BB, jB, QB, nB, dB, IB) {
        var NB = zB ? zB + BB : BB;
        if (!this._events[NB]) return !1;
        var uB, UB, aB = this._events[NB],
          pB = arguments.length;
        if (aB.kJ) {
          switch (aB.once && this.removeListener(BB, aB.kJ, void 0, !0), pB) {
            case 1:
              return aB.kJ.call(aB.context), !0;
            case 2:
              return aB.kJ.call(aB.context, jB), !0;
            case 3:
              return aB.kJ.call(aB.context, jB, QB), !0;
            case 4:
              return aB.kJ.call(aB.context, jB, QB, nB), !0;
            case 5:
              return aB.kJ.call(aB.context, jB, QB, nB, dB), !0;
            case 6:
              return aB.kJ.call(aB.context, jB, QB, nB, dB, IB), !0
          }
          for (UB = 1, uB = new Array(pB - 1); UB < pB; UB++) uB[UB - 1] = arguments[UB];
          aB.kJ.apply(aB.context, uB)
        } else {
          var rB, sB = aB.length;
          for (UB = 0; UB < sB; UB++) switch (aB[UB].once && this.removeListener(BB, aB[UB].kJ, void 0, !0), pB) {
            case 1:
              aB[UB].kJ.call(aB[UB].context);
              break;
            case 2:
              aB[UB].kJ.call(aB[UB].context, jB);
              break;
            case 3:
              aB[UB].kJ.call(aB[UB].context, jB, QB);
              break;
            case 4:
              aB[UB].kJ.call(aB[UB].context, jB, QB, nB);
              break;
            default:
              if (!uB)
                for (rB = 1, uB = new Array(pB - 1); rB < pB; rB++) uB[rB - 1] = arguments[rB];
              aB[UB].kJ.apply(aB[UB].context, uB)
          }
        }
        return !0
      }, NB.prototype.on = function(BB, jB, zB) {
        return dB(this, BB, jB, zB, !1)
      }, NB.prototype.once = function(BB, jB, zB) {
        return dB(this, BB, jB, zB, !0)
      }, NB.prototype.removeListener = function(BB, jB, QB, nB) {
        var dB = zB ? zB + BB : BB;
        if (!this._events[dB]) return this;
        if (!jB) return IB(this, dB), this;
        var NB = this._events[dB];
        if (NB.kJ) NB.kJ !== jB || nB && !NB.once || QB && NB.context !== QB || IB(this, dB);
        else {
          for (var uB = 0, UB = [], aB = NB.length; uB < aB; uB++)(NB[uB].kJ !== jB || nB && !NB[uB].once || QB && NB[uB].context !== QB) && UB.push(NB[uB]);
          UB.length ? this._events[dB] = 1 === UB.length ? UB[0] : UB : IB(this, dB)
        }
        return this
      }, NB.prototype.Wk = function(BB) {
        var jB;
        return BB ? (jB = zB ? zB + BB : BB, this._events[jB] && IB(this, jB)) : (this._events = new QB, this._eventsCount = 0), this
      }, NB.prototype.off = NB.prototype.removeListener, NB.prototype.addListener = NB.prototype.on, NB.prefixed = zB, NB.EventEmitter = NB, BB.exports = NB
    }(IB);
    var NB, uB, UB = dB(IB.exports);
    ! function(BB) {
      BB.assertEqual = BB => BB, BB.assertIs = function(BB) {}, BB.assertNever = function(BB) {
        throw new Error
      }, BB.arrayToEnum = BB => {
        const jB = {};
        for (const zB of BB) jB[zB] = zB;
        return jB
      }, BB.getValidEnumValues = jB => {
        const zB = BB.objectKeys(jB).filter((BB => "number" !== typeof jB[jB[BB]])),
          QB = {};
        for (const BB of zB) QB[BB] = jB[BB];
        return BB.objectValues(QB)
      }, BB.objectValues = jB => BB.objectKeys(jB).map((function(BB) {
        return jB[BB]
      })), BB.objectKeys = "function" === typeof Object.keys ? BB => Object.keys(BB) : BB => {
        const jB = [];
        for (const zB in BB) Object.prototype.hasOwnProperty.call(BB, zB) && jB.push(zB);
        return jB
      }, BB.find = (BB, jB) => {
        for (const zB of BB)
          if (jB(zB)) return zB
      }, BB.isInteger = "function" === typeof Number.isInteger ? BB => Number.isInteger(BB) : BB => "number" === typeof BB && isFinite(BB) && Math.floor(BB) === BB, BB.joinValues = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return BB.map((BB => "string" === typeof BB ? `'${BB}'` : BB)).join(jB)
      }, BB.jsonStringifyReplacer = (BB, jB) => "bigint" === typeof jB ? jB.toString() : jB
    }(NB || (NB = {})),
    function(BB) {
      BB.mergeShapes = (BB, jB) => ({
        ...BB,
        ...jB
      })
    }(uB || (uB = {}));
    const aB = NB.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      pB = BB => {
        switch (typeof BB) {
          case "undefined":
            return aB.undefined;
          case "string":
            return aB.string;
          case "number":
            return isNaN(BB) ? aB.nan : aB.number;
          case "boolean":
            return aB.boolean;
          case "function":
            return aB.function;
          case "bigint":
            return aB.bigint;
          case "symbol":
            return aB.symbol;
          case "object":
            return Array.isArray(BB) ? aB.array : null === BB ? aB.null : BB.then && "function" === typeof BB.then && BB.catch && "function" === typeof BB.catch ? aB.promise : "undefined" !== typeof Map && BB instanceof Map ? aB.map : "undefined" !== typeof Set && BB instanceof Set ? aB.set : "undefined" !== typeof Date && BB instanceof Date ? aB.date : aB.object;
          default:
            return aB.unknown
        }
      },
      rB = NB.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class sB extends Error {
      constructor(BB) {
        var jB;
        super(), jB = this, this.issues = [], this.addIssue = BB => {
          this.issues = [...this.issues, BB]
        }, this.addIssues = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          jB.issues = [...jB.issues, ...BB]
        };
        const zB = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, zB) : this.__proto__ = zB, this.name = "ZodError", this.issues = BB
      }
      get errors() {
        return this.issues
      }
      format(BB) {
        const jB = BB || function(BB) {
            return BB.message
          },
          zB = {
            _errors: []
          },
          QB = BB => {
            for (const nB of BB.issues)
              if ("invalid_union" === nB.code) nB.unionErrors.map(QB);
              else if ("invalid_return_type" === nB.code) QB(nB.returnTypeError);
            else if ("invalid_arguments" === nB.code) QB(nB.argumentsError);
            else if (0 === nB.path.length) zB._errors.push(jB(nB));
            else {
              let BB = zB,
                QB = 0;
              for (; QB < nB.path.length;) {
                const zB = nB.path[QB];
                QB === nB.path.length - 1 ? (BB[zB] = BB[zB] || {
                  _errors: []
                }, BB[zB]._errors.push(jB(nB))) : BB[zB] = BB[zB] || {
                  _errors: []
                }, BB = BB[zB], QB++
              }
            }
          };
        return QB(this), zB
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, NB.jsonStringifyReplacer, 2)
      }
      get tJ() {
        return 0 === this.issues.length
      }
      flatten() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BB => BB.message;
        const jB = {},
          zB = [];
        for (const QB of this.issues) QB.path.length > 0 ? (jB[QB.path[0]] = jB[QB.path[0]] || [], jB[QB.path[0]].push(BB(QB))) : zB.push(BB(QB));
        return {
          formErrors: zB,
          fieldErrors: jB
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    sB.create = BB => new sB(BB);
    const JB = (BB, jB) => {
      let zB;
      switch (BB.code) {
        case rB.invalid_type:
          zB = BB.received === aB.undefined ? "Required" : `Expected ${BB.expected}, received ${BB.received}`;
          break;
        case rB.invalid_literal:
          zB = `Invalid literal value, expected ${JSON.stringify(BB.expected,NB.jsonStringifyReplacer)}`;
          break;
        case rB.unrecognized_keys:
          zB = `Unrecognized key(s) in object: ${NB.joinValues(BB.keys,", ")}`;
          break;
        case rB.invalid_union:
          zB = "Invalid input";
          break;
        case rB.invalid_union_discriminator:
          zB = `Invalid discriminator value. Expected ${NB.joinValues(BB.options)}`;
          break;
        case rB.invalid_enum_value:
          zB = `Invalid enum value. Expected ${NB.joinValues(BB.options)}, received '${BB.received}'`;
          break;
        case rB.invalid_arguments:
          zB = "Invalid function arguments";
          break;
        case rB.invalid_return_type:
          zB = "Invalid function return type";
          break;
        case rB.invalid_date:
          zB = "Invalid date";
          break;
        case rB.invalid_string:
          "object" === typeof BB.validation ? "includes" in BB.validation ? (zB = `Invalid input: must include "${BB.validation.includes}"`, "number" === typeof BB.validation.position && (zB = `${zB} at one or more positions greater than or equal to ${BB.validation.position}`)) : "startsWith" in BB.validation ? zB = `Invalid input: must start with "${BB.validation.startsWith}"` : "endsWith" in BB.validation ? zB = `Invalid input: must end with "${BB.validation.endsWith}"` : NB.assertNever(BB.validation) : zB = "regex" !== BB.validation ? `Invalid ${BB.validation}` : "Invalid";
          break;
        case rB.too_small:
          zB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at least":"more than"} ${BB.minimum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at least":"over"} ${BB.minimum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${BB.minimum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(BB.minimum))}` : "Invalid input";
          break;
        case rB.too_big:
          zB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at most":"less than"} ${BB.maximum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at most":"under"} ${BB.maximum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "bigint" === BB.type ? `BigInt must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly":BB.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(BB.maximum))}` : "Invalid input";
          break;
        case rB.custom:
          zB = "Invalid input";
          break;
        case rB.invalid_intersection_types:
          zB = "Intersection results could not be merged";
          break;
        case rB.not_multiple_of:
          zB = `Number must be a multiple of ${BB.multipleOf}`;
          break;
        case rB.not_finite:
          zB = "Number must be finite";
          break;
        default:
          zB = jB.defaultError, NB.assertNever(BB)
      }
      return {
        message: zB
      }
    };
    let mB = JB;

    function yB() {
      return mB
    }
    const kB = BB => {
      const {
        data: jB,
        path: zB,
        errorMaps: QB,
        issueData: nB
      } = BB, dB = [...zB, ...nB.path || []], IB = {
        ...nB,
        path: dB
      };
      let NB = "";
      const uB = QB.filter((BB => !!BB)).slice().reverse();
      for (const UB of uB) NB = UB(IB, {
        data: jB,
        defaultError: NB
      }).message;
      return {
        ...nB,
        path: dB,
        message: nB.message || NB
      }
    };

    function GB(BB, jB) {
      const zB = kB({
        issueData: jB,
        data: BB.data,
        path: BB.path,
        errorMaps: [BB.common.contextualErrorMap, BB.schemaErrorMap, yB(), JB].filter((BB => !!BB))
      });
      BB.common.issues.push(zB)
    }
    class LB {
      constructor() {
        this.value = "valid"
      }
      RJ() {
        "valid" === this.value && (this.value = "RJ")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(BB, jB) {
        const zB = [];
        for (const QB of jB) {
          if ("aborted" === QB.status) return gB;
          "RJ" === QB.status && BB.RJ(), zB.push(QB.value)
        }
        return {
          status: BB.value,
          value: zB
        }
      }
      static async mergeObjectAsync(BB, jB) {
        const zB = [];
        for (const QB of jB) zB.push({
          key: await QB.key,
          value: await QB.value
        });
        return LB.mergeObjectSync(BB, zB)
      }
      static mergeObjectSync(BB, jB) {
        const zB = {};
        for (const QB of jB) {
          const {
            key: jB,
            value: nB
          } = QB;
          if ("aborted" === jB.status) return gB;
          if ("aborted" === nB.status) return gB;
          "RJ" === jB.status && BB.RJ(), "RJ" === nB.status && BB.RJ(), "__proto__" === jB.value || "undefined" === typeof nB.value && !QB.alwaysSet || (zB[jB.value] = nB.value)
        }
        return {
          status: BB.value,
          value: zB
        }
      }
    }
    const gB = Object.freeze({
        status: "aborted"
      }),
      tB = BB => ({
        status: "RJ",
        value: BB
      }),
      SB = BB => ({
        status: "valid",
        value: BB
      }),
      MB = BB => "aborted" === BB.status,
      EB = BB => "RJ" === BB.status,
      iB = BB => "valid" === BB.status,
      qB = BB => "undefined" !== typeof Promise && BB instanceof Promise;
    var fB;
    ! function(BB) {
      BB.errToObj = BB => "string" === typeof BB ? {
        message: BB
      } : BB || {}, BB.toString = BB => "string" === typeof BB ? BB : null === BB || void 0 === BB ? void 0 : BB.message
    }(fB || (fB = {}));
    class oB {
      constructor(BB, jB, zB, QB) {
        this._cachedPath = [], this.parent = BB, this.data = jB, this._path = zB, this._key = QB
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const HB = (BB, jB) => {
      if (iB(jB)) return {
        success: !0,
        data: jB.value
      };
      if (!BB.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const jB = new sB(BB.common.issues);
          return this._error = jB, this._error
        }
      }
    };

    function DB(BB) {
      if (!BB) return {};
      const {
        errorMap: jB,
        invalid_type_error: zB,
        required_error: QB,
        description: nB
      } = BB;
      if (jB && (zB || QB)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (jB) return {
        errorMap: jB,
        description: nB
      };
      return {
        errorMap: (BB, jB) => "invalid_type" !== BB.code ? {
          message: jB.defaultError
        } : "undefined" === typeof jB.data ? {
          message: null !== QB && void 0 !== QB ? QB : jB.defaultError
        } : {
          message: null !== zB && void 0 !== zB ? zB : jB.defaultError
        },
        description: nB
      }
    }
    class FB {
      constructor(BB) {
        this.spa = this.safeParseAsync, this._def = BB, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(BB) {
        return pB(BB.data)
      }
      _getOrReturnCtx(BB, jB) {
        return jB || {
          common: BB.parent.common,
          data: BB.data,
          parsedType: pB(BB.data),
          schemaErrorMap: this._def.errorMap,
          path: BB.path,
          parent: BB.parent
        }
      }
      _processInputParams(BB) {
        return {
          status: new LB,
          ctx: {
            common: BB.parent.common,
            data: BB.data,
            parsedType: pB(BB.data),
            schemaErrorMap: this._def.errorMap,
            path: BB.path,
            parent: BB.parent
          }
        }
      }
      _parseSync(BB) {
        const jB = this._parse(BB);
        if (qB(jB)) throw new Error("Synchronous parse encountered promise.");
        return jB
      }
      _parseAsync(BB) {
        const jB = this._parse(BB);
        return Promise.resolve(jB)
      }
      parse(BB, jB) {
        const zB = this.safeParse(BB, jB);
        if (zB.success) return zB.data;
        throw zB.error
      }
      safeParse(BB, jB) {
        var zB;
        const QB = {
            common: {
              issues: [],
              async: null !== (zB = null === jB || void 0 === jB ? void 0 : jB.async) && void 0 !== zB && zB,
              contextualErrorMap: null === jB || void 0 === jB ? void 0 : jB.errorMap
            },
            path: (null === jB || void 0 === jB ? void 0 : jB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: pB(BB)
          },
          nB = this._parseSync({
            data: BB,
            path: QB.path,
            parent: QB
          });
        return HB(QB, nB)
      }
      async parseAsync(BB, jB) {
        const zB = await this.safeParseAsync(BB, jB);
        if (zB.success) return zB.data;
        throw zB.error
      }
      async safeParseAsync(BB, jB) {
        const zB = {
            common: {
              issues: [],
              contextualErrorMap: null === jB || void 0 === jB ? void 0 : jB.errorMap,
              async: !0
            },
            path: (null === jB || void 0 === jB ? void 0 : jB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: pB(BB)
          },
          QB = this._parse({
            data: BB,
            path: zB.path,
            parent: zB
          }),
          nB = await (qB(QB) ? QB : Promise.resolve(QB));
        return HB(zB, nB)
      }
      refine(BB, jB) {
        const zB = BB => "string" === typeof jB || "undefined" === typeof jB ? {
          message: jB
        } : "function" === typeof jB ? jB(BB) : jB;
        return this._refinement(((jB, QB) => {
          const nB = BB(jB),
            dB = () => QB.addIssue({
              code: rB.custom,
              ...zB(jB)
            });
          return "undefined" !== typeof Promise && nB instanceof Promise ? nB.then((BB => !!BB || (dB(), !1))) : !!nB || (dB(), !1)
        }))
      }
      refinement(BB, jB) {
        return this._refinement(((zB, QB) => !!BB(zB) || (QB.addIssue("function" === typeof jB ? jB(zB, QB) : jB), !1)))
      }
      _refinement(BB) {
        return new gj({
          schema: this,
          typeName: Yj.ZodEffects,
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
        return tj.create(this, this._def)
      }
      nullable() {
        return Sj.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return jj.create(this, this._def)
      }
      promise() {
        return Lj.create(this, this._def)
      }
      or(BB) {
        return nj.create([this, BB], this._def)
      }
      and(BB) {
        return uj.create(this, BB, this._def)
      }
      transform(BB) {
        return new gj({
          ...DB(this._def),
          schema: this,
          typeName: Yj.ZodEffects,
          effect: {
            type: "transform",
            transform: BB
          }
        })
      }
      default (BB) {
        const jB = "function" === typeof BB ? BB : () => BB;
        return new Mj({
          ...DB(this._def),
          innerType: this,
          defaultValue: jB,
          typeName: Yj.ZodDefault
        })
      }
      brand() {
        return new fj({
          typeName: Yj.ZodBranded,
          type: this,
          ...DB(this._def)
        })
      } catch (BB) {
        const jB = "function" === typeof BB ? BB : () => BB;
        return new Ej({
          ...DB(this._def),
          innerType: this,
          catchValue: jB,
          typeName: Yj.ZodCatch
        })
      }
      describe(BB) {
        return new(0, this.constructor)({
          ...this._def,
          description: BB
        })
      }
      pipe(BB) {
        return oj.create(this, BB)
      }
      readonly() {
        return Hj.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const YB = /^c[^\s-]{8,}$/i,
      VB = /^[a-z][a-z0-9]*$/,
      hB = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      XB = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      ZB = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let AB;
    const TB = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      PB = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class WB extends FB {
      _parse(BB) {
        this._def.coerce && (BB.data = String(BB.data));
        if (this._getType(BB) !== aB.string) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.string,
            received: jB.parsedType
          }), gB
        }
        const jB = new LB;
        let zB;
        for (const uB of this._def.checks)
          if ("min" === uB.kind) BB.data.length < uB.value && (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
            code: rB.too_small,
            minimum: uB.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: uB.message
          }), jB.RJ());
          else if ("max" === uB.kind) BB.data.length > uB.value && (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          code: rB.too_big,
          maximum: uB.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: uB.message
        }), jB.RJ());
        else if ("length" === uB.kind) {
          const QB = BB.data.length > uB.value,
            nB = BB.data.length < uB.value;
          (QB || nB) && (zB = this._getOrReturnCtx(BB, zB), QB ? GB(zB, {
            code: rB.too_big,
            maximum: uB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: uB.message
          }) : nB && GB(zB, {
            code: rB.too_small,
            minimum: uB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: uB.message
          }), jB.RJ())
        } else if ("email" === uB.kind) ZB.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "email",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ());
        else if ("emoji" === uB.kind) AB || (AB = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), AB.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "emoji",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ());
        else if ("uuid" === uB.kind) XB.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "uuid",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ());
        else if ("cuid" === uB.kind) YB.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "cuid",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ());
        else if ("cuid2" === uB.kind) VB.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "cuid2",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ());
        else if ("ulid" === uB.kind) hB.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "ulid",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ());
        else if ("url" === uB.kind) try {
          new URL(BB.data)
        } catch (IB) {
          zB = this._getOrReturnCtx(BB, zB), GB(zB, {
            validation: "url",
            code: rB.invalid_string,
            message: uB.message
          }), jB.RJ()
        } else if ("regex" === uB.kind) {
          uB.regex.lastIndex = 0;
          uB.regex.test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
            validation: "regex",
            code: rB.invalid_string,
            message: uB.message
          }), jB.RJ())
        } else if ("trim" === uB.kind) BB.data = BB.data.trim();
        else if ("includes" === uB.kind) BB.data.includes(uB.value, uB.position) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          code: rB.invalid_string,
          validation: {
            includes: uB.value,
            position: uB.position
          },
          message: uB.message
        }), jB.RJ());
        else if ("toLowerCase" === uB.kind) BB.data = BB.data.toLowerCase();
        else if ("toUpperCase" === uB.kind) BB.data = BB.data.toUpperCase();
        else if ("startsWith" === uB.kind) BB.data.startsWith(uB.value) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          code: rB.invalid_string,
          validation: {
            startsWith: uB.value
          },
          message: uB.message
        }), jB.RJ());
        else if ("endsWith" === uB.kind) BB.data.endsWith(uB.value) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          code: rB.invalid_string,
          validation: {
            endsWith: uB.value
          },
          message: uB.message
        }), jB.RJ());
        else if ("datetime" === uB.kind) {
          ((dB = uB).precision ? dB.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${dB.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${dB.precision}}Z$`) : 0 === dB.precision ? dB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : dB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(BB.data) || (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
            code: rB.invalid_string,
            validation: "datetime",
            message: uB.message
          }), jB.RJ())
        } else "ip" === uB.kind ? (QB = BB.data, ("v4" !== (nB = uB.version) && nB || !TB.test(QB)) && ("v6" !== nB && nB || !PB.test(QB)) && (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          validation: "ip",
          code: rB.invalid_string,
          message: uB.message
        }), jB.RJ())) : NB.assertNever(uB);
        var QB, nB, dB;
        return {
          status: jB.value,
          value: BB.data
        }
      }
      _regex(BB, jB, zB) {
        return this.refinement((jB => BB.test(jB)), {
          validation: jB,
          code: rB.invalid_string,
          ...fB.errToObj(zB)
        })
      }
      _addCheck(BB) {
        return new WB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      email(BB) {
        return this._addCheck({
          kind: "email",
          ...fB.errToObj(BB)
        })
      }
      url(BB) {
        return this._addCheck({
          kind: "url",
          ...fB.errToObj(BB)
        })
      }
      emoji(BB) {
        return this._addCheck({
          kind: "emoji",
          ...fB.errToObj(BB)
        })
      }
      uuid(BB) {
        return this._addCheck({
          kind: "uuid",
          ...fB.errToObj(BB)
        })
      }
      cuid(BB) {
        return this._addCheck({
          kind: "cuid",
          ...fB.errToObj(BB)
        })
      }
      cuid2(BB) {
        return this._addCheck({
          kind: "cuid2",
          ...fB.errToObj(BB)
        })
      }
      ulid(BB) {
        return this._addCheck({
          kind: "ulid",
          ...fB.errToObj(BB)
        })
      }
      ip(BB) {
        return this._addCheck({
          kind: "ip",
          ...fB.errToObj(BB)
        })
      }
      datetime(BB) {
        var jB;
        return "string" === typeof BB ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: BB
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === BB || void 0 === BB ? void 0 : BB.precision) ? null : null === BB || void 0 === BB ? void 0 : BB.precision,
          offset: null !== (jB = null === BB || void 0 === BB ? void 0 : BB.offset) && void 0 !== jB && jB,
          ...fB.errToObj(null === BB || void 0 === BB ? void 0 : BB.message)
        })
      }
      regex(BB, jB) {
        return this._addCheck({
          kind: "regex",
          regex: BB,
          ...fB.errToObj(jB)
        })
      }
      includes(BB, jB) {
        return this._addCheck({
          kind: "includes",
          value: BB,
          position: null === jB || void 0 === jB ? void 0 : jB.position,
          ...fB.errToObj(null === jB || void 0 === jB ? void 0 : jB.message)
        })
      }
      startsWith(BB, jB) {
        return this._addCheck({
          kind: "startsWith",
          value: BB,
          ...fB.errToObj(jB)
        })
      }
      endsWith(BB, jB) {
        return this._addCheck({
          kind: "endsWith",
          value: BB,
          ...fB.errToObj(jB)
        })
      }
      min(BB, jB) {
        return this._addCheck({
          kind: "min",
          value: BB,
          ...fB.errToObj(jB)
        })
      }
      max(BB, jB) {
        return this._addCheck({
          kind: "max",
          value: BB,
          ...fB.errToObj(jB)
        })
      }
      length(BB, jB) {
        return this._addCheck({
          kind: "length",
          value: BB,
          ...fB.errToObj(jB)
        })
      }
      nonempty(BB) {
        return this.min(1, fB.errToObj(BB))
      }
      trim() {
        return new WB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new WB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new WB({
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
        for (const jB of this._def.checks) "min" === jB.kind && (null === BB || jB.value > BB) && (BB = jB.value);
        return BB
      }
      get maxLength() {
        let BB = null;
        for (const jB of this._def.checks) "max" === jB.kind && (null === BB || jB.value < BB) && (BB = jB.value);
        return BB
      }
    }

    function eB(BB, jB) {
      const zB = (BB.toString().split(".")[1] || "").length,
        QB = (jB.toString().split(".")[1] || "").length,
        nB = zB > QB ? zB : QB;
      return parseInt(BB.toFixed(nB).replace(".", "")) % parseInt(jB.toFixed(nB).replace(".", "")) / Math.pow(10, nB)
    }
    WB.create = BB => {
      var jB;
      return new WB({
        checks: [],
        typeName: Yj.ZodString,
        coerce: null !== (jB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== jB && jB,
        ...DB(BB)
      })
    };
    class lB extends FB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(BB) {
        this._def.coerce && (BB.data = Number(BB.data));
        if (this._getType(BB) !== aB.number) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.number,
            received: jB.parsedType
          }), gB
        }
        let jB;
        const zB = new LB;
        for (const QB of this._def.checks)
          if ("int" === QB.kind) NB.isInteger(BB.data) || (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
            code: rB.invalid_type,
            expected: "integer",
            received: "float",
            message: QB.message
          }), zB.RJ());
          else if ("min" === QB.kind) {
          (QB.inclusive ? BB.data < QB.value : BB.data <= QB.value) && (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
            code: rB.too_small,
            minimum: QB.value,
            type: "number",
            inclusive: QB.inclusive,
            exact: !1,
            message: QB.message
          }), zB.RJ())
        } else if ("max" === QB.kind) {
          (QB.inclusive ? BB.data > QB.value : BB.data >= QB.value) && (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
            code: rB.too_big,
            maximum: QB.value,
            type: "number",
            inclusive: QB.inclusive,
            exact: !1,
            message: QB.message
          }), zB.RJ())
        } else "multipleOf" === QB.kind ? 0 !== eB(BB.data, QB.value) && (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
          code: rB.not_multiple_of,
          multipleOf: QB.value,
          message: QB.message
        }), zB.RJ()) : "finite" === QB.kind ? Number.isFinite(BB.data) || (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
          code: rB.not_finite,
          message: QB.message
        }), zB.RJ()) : NB.assertNever(QB);
        return {
          status: zB.value,
          value: BB.data
        }
      }
      gte(BB, jB) {
        return this.setLimit("min", BB, !0, fB.toString(jB))
      }
      gt(BB, jB) {
        return this.setLimit("min", BB, !1, fB.toString(jB))
      }
      lte(BB, jB) {
        return this.setLimit("max", BB, !0, fB.toString(jB))
      }
      lt(BB, jB) {
        return this.setLimit("max", BB, !1, fB.toString(jB))
      }
      setLimit(BB, jB, zB, QB) {
        return new lB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: jB,
            inclusive: zB,
            message: fB.toString(QB)
          }]
        })
      }
      _addCheck(BB) {
        return new lB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      int(BB) {
        return this._addCheck({
          kind: "int",
          message: fB.toString(BB)
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: fB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: fB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: fB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: fB.toString(BB)
        })
      }
      multipleOf(BB, jB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: fB.toString(jB)
        })
      }
      finite(BB) {
        return this._addCheck({
          kind: "finite",
          message: fB.toString(BB)
        })
      }
      safe(BB) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: fB.toString(BB)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: fB.toString(BB)
        })
      }
      get minValue() {
        let BB = null;
        for (const jB of this._def.checks) "min" === jB.kind && (null === BB || jB.value > BB) && (BB = jB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const jB of this._def.checks) "max" === jB.kind && (null === BB || jB.value < BB) && (BB = jB.value);
        return BB
      }
      get isInt() {
        return !!this._def.checks.find((BB => "int" === BB.kind || "multipleOf" === BB.kind && NB.isInteger(BB.value)))
      }
      get isFinite() {
        let BB = null,
          jB = null;
        for (const zB of this._def.checks) {
          if ("finite" === zB.kind || "int" === zB.kind || "multipleOf" === zB.kind) return !0;
          "min" === zB.kind ? (null === jB || zB.value > jB) && (jB = zB.value) : "max" === zB.kind && (null === BB || zB.value < BB) && (BB = zB.value)
        }
        return Number.isFinite(jB) && Number.isFinite(BB)
      }
    }
    lB.create = BB => new lB({
      checks: [],
      typeName: Yj.ZodNumber,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...DB(BB)
    });
    class wB extends FB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(BB) {
        this._def.coerce && (BB.data = BigInt(BB.data));
        if (this._getType(BB) !== aB.bigint) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.bigint,
            received: jB.parsedType
          }), gB
        }
        let jB;
        const zB = new LB;
        for (const QB of this._def.checks)
          if ("min" === QB.kind) {
            (QB.inclusive ? BB.data < QB.value : BB.data <= QB.value) && (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
              code: rB.too_small,
              type: "bigint",
              minimum: QB.value,
              inclusive: QB.inclusive,
              message: QB.message
            }), zB.RJ())
          } else if ("max" === QB.kind) {
          (QB.inclusive ? BB.data > QB.value : BB.data >= QB.value) && (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
            code: rB.too_big,
            type: "bigint",
            maximum: QB.value,
            inclusive: QB.inclusive,
            message: QB.message
          }), zB.RJ())
        } else "multipleOf" === QB.kind ? BB.data % QB.value !== BigInt(0) && (jB = this._getOrReturnCtx(BB, jB), GB(jB, {
          code: rB.not_multiple_of,
          multipleOf: QB.value,
          message: QB.message
        }), zB.RJ()) : NB.assertNever(QB);
        return {
          status: zB.value,
          value: BB.data
        }
      }
      gte(BB, jB) {
        return this.setLimit("min", BB, !0, fB.toString(jB))
      }
      gt(BB, jB) {
        return this.setLimit("min", BB, !1, fB.toString(jB))
      }
      lte(BB, jB) {
        return this.setLimit("max", BB, !0, fB.toString(jB))
      }
      lt(BB, jB) {
        return this.setLimit("max", BB, !1, fB.toString(jB))
      }
      setLimit(BB, jB, zB, QB) {
        return new wB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: jB,
            inclusive: zB,
            message: fB.toString(QB)
          }]
        })
      }
      _addCheck(BB) {
        return new wB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: fB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: fB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: fB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: fB.toString(BB)
        })
      }
      multipleOf(BB, jB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: fB.toString(jB)
        })
      }
      get minValue() {
        let BB = null;
        for (const jB of this._def.checks) "min" === jB.kind && (null === BB || jB.value > BB) && (BB = jB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const jB of this._def.checks) "max" === jB.kind && (null === BB || jB.value < BB) && (BB = jB.value);
        return BB
      }
    }
    wB.create = BB => {
      var jB;
      return new wB({
        checks: [],
        typeName: Yj.ZodBigInt,
        coerce: null !== (jB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== jB && jB,
        ...DB(BB)
      })
    };
    class xB extends FB {
      _parse(BB) {
        this._def.coerce && (BB.data = Boolean(BB.data));
        if (this._getType(BB) !== aB.boolean) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.boolean,
            received: jB.parsedType
          }), gB
        }
        return SB(BB.data)
      }
    }
    xB.create = BB => new xB({
      typeName: Yj.ZodBoolean,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...DB(BB)
    });
    class KB extends FB {
      _parse(BB) {
        this._def.coerce && (BB.data = new Date(BB.data));
        if (this._getType(BB) !== aB.date) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.date,
            received: jB.parsedType
          }), gB
        }
        if (isNaN(BB.data.getTime())) {
          return GB(this._getOrReturnCtx(BB), {
            code: rB.invalid_date
          }), gB
        }
        const jB = new LB;
        let zB;
        for (const QB of this._def.checks) "min" === QB.kind ? BB.data.getTime() < QB.value && (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          code: rB.too_small,
          message: QB.message,
          inclusive: !0,
          exact: !1,
          minimum: QB.value,
          type: "date"
        }), jB.RJ()) : "max" === QB.kind ? BB.data.getTime() > QB.value && (zB = this._getOrReturnCtx(BB, zB), GB(zB, {
          code: rB.too_big,
          message: QB.message,
          inclusive: !0,
          exact: !1,
          maximum: QB.value,
          type: "date"
        }), jB.RJ()) : NB.assertNever(QB);
        return {
          status: jB.value,
          value: new Date(BB.data.getTime())
        }
      }
      _addCheck(BB) {
        return new KB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      min(BB, jB) {
        return this._addCheck({
          kind: "min",
          value: BB.getTime(),
          message: fB.toString(jB)
        })
      }
      max(BB, jB) {
        return this._addCheck({
          kind: "max",
          value: BB.getTime(),
          message: fB.toString(jB)
        })
      }
      get minDate() {
        let BB = null;
        for (const jB of this._def.checks) "min" === jB.kind && (null === BB || jB.value > BB) && (BB = jB.value);
        return null != BB ? new Date(BB) : null
      }
      get maxDate() {
        let BB = null;
        for (const jB of this._def.checks) "max" === jB.kind && (null === BB || jB.value < BB) && (BB = jB.value);
        return null != BB ? new Date(BB) : null
      }
    }
    KB.create = BB => new KB({
      checks: [],
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      typeName: Yj.ZodDate,
      ...DB(BB)
    });
    class CB extends FB {
      _parse(BB) {
        if (this._getType(BB) !== aB.symbol) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.symbol,
            received: jB.parsedType
          }), gB
        }
        return SB(BB.data)
      }
    }
    CB.create = BB => new CB({
      typeName: Yj.ZodSymbol,
      ...DB(BB)
    });
    class cB extends FB {
      _parse(BB) {
        if (this._getType(BB) !== aB.undefined) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.undefined,
            received: jB.parsedType
          }), gB
        }
        return SB(BB.data)
      }
    }
    cB.create = BB => new cB({
      typeName: Yj.ZodUndefined,
      ...DB(BB)
    });
    class bB extends FB {
      _parse(BB) {
        if (this._getType(BB) !== aB.null) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.null,
            received: jB.parsedType
          }), gB
        }
        return SB(BB.data)
      }
    }
    bB.create = BB => new bB({
      typeName: Yj.ZodNull,
      ...DB(BB)
    });
    class vB extends FB {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(BB) {
        return SB(BB.data)
      }
    }
    vB.create = BB => new vB({
      typeName: Yj.ZodAny,
      ...DB(BB)
    });
    class RB extends FB {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(BB) {
        return SB(BB.data)
      }
    }
    RB.create = BB => new RB({
      typeName: Yj.ZodUnknown,
      ...DB(BB)
    });
    class OB extends FB {
      _parse(BB) {
        const jB = this._getOrReturnCtx(BB);
        return GB(jB, {
          code: rB.invalid_type,
          expected: aB.never,
          received: jB.parsedType
        }), gB
      }
    }
    OB.create = BB => new OB({
      typeName: Yj.ZodNever,
      ...DB(BB)
    });
    class Bj extends FB {
      _parse(BB) {
        if (this._getType(BB) !== aB.undefined) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.void,
            received: jB.parsedType
          }), gB
        }
        return SB(BB.data)
      }
    }
    Bj.create = BB => new Bj({
      typeName: Yj.ZodVoid,
      ...DB(BB)
    });
    class jj extends FB {
      _parse(BB) {
        const {
          ctx: jB,
          status: zB
        } = this._processInputParams(BB), QB = this._def;
        if (jB.parsedType !== aB.array) return GB(jB, {
          code: rB.invalid_type,
          expected: aB.array,
          received: jB.parsedType
        }), gB;
        if (null !== QB.exactLength) {
          const BB = jB.data.length > QB.exactLength.value,
            nB = jB.data.length < QB.exactLength.value;
          (BB || nB) && (GB(jB, {
            code: BB ? rB.too_big : rB.too_small,
            minimum: nB ? QB.exactLength.value : void 0,
            maximum: BB ? QB.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: QB.exactLength.message
          }), zB.RJ())
        }
        if (null !== QB.minLength && jB.data.length < QB.minLength.value && (GB(jB, {
            code: rB.too_small,
            minimum: QB.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: QB.minLength.message
          }), zB.RJ()), null !== QB.maxLength && jB.data.length > QB.maxLength.value && (GB(jB, {
            code: rB.too_big,
            maximum: QB.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: QB.maxLength.message
          }), zB.RJ()), jB.common.async) return Promise.all([...jB.data].map(((BB, zB) => QB.type._parseAsync(new oB(jB, BB, jB.path, zB))))).then((BB => LB.mergeArray(zB, BB)));
        const nB = [...jB.data].map(((BB, zB) => QB.type._parseSync(new oB(jB, BB, jB.path, zB))));
        return LB.mergeArray(zB, nB)
      }
      get element() {
        return this._def.type
      }
      min(BB, jB) {
        return new jj({
          ...this._def,
          minLength: {
            value: BB,
            message: fB.toString(jB)
          }
        })
      }
      max(BB, jB) {
        return new jj({
          ...this._def,
          maxLength: {
            value: BB,
            message: fB.toString(jB)
          }
        })
      }
      length(BB, jB) {
        return new jj({
          ...this._def,
          exactLength: {
            value: BB,
            message: fB.toString(jB)
          }
        })
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }

    function zj(BB) {
      if (BB instanceof Qj) {
        const jB = {};
        for (const zB in BB.shape) {
          const QB = BB.shape[zB];
          jB[zB] = tj.create(zj(QB))
        }
        return new Qj({
          ...BB._def,
          shape: () => jB
        })
      }
      return BB instanceof jj ? new jj({
        ...BB._def,
        type: zj(BB.element)
      }) : BB instanceof tj ? tj.create(zj(BB.unwrap())) : BB instanceof Sj ? Sj.create(zj(BB.unwrap())) : BB instanceof Uj ? Uj.create(BB.items.map((BB => zj(BB)))) : BB
    }
    jj.create = (BB, jB) => new jj({
      type: BB,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Yj.ZodArray,
      ...DB(jB)
    });
    class Qj extends FB {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const BB = this._def.shape(),
          jB = NB.objectKeys(BB);
        return this._cached = {
          shape: BB,
          keys: jB
        }
      }
      _parse(BB) {
        if (this._getType(BB) !== aB.object) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.object,
            received: jB.parsedType
          }), gB
        }
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB), {
          shape: QB,
          keys: nB
        } = this._getCached(), dB = [];
        if (!(this._def.catchall instanceof OB && "strip" === this._def.unknownKeys))
          for (const NB in zB.data) nB.includes(NB) || dB.push(NB);
        const IB = [];
        for (const NB of nB) {
          const BB = QB[NB],
            jB = zB.data[NB];
          IB.push({
            key: {
              status: "valid",
              value: NB
            },
            value: BB._parse(new oB(zB, jB, zB.path, NB)),
            alwaysSet: NB in zB.data
          })
        }
        if (this._def.catchall instanceof OB) {
          const BB = this._def.unknownKeys;
          if ("passthrough" === BB)
            for (const jB of dB) IB.push({
              key: {
                status: "valid",
                value: jB
              },
              value: {
                status: "valid",
                value: zB.data[jB]
              }
            });
          else if ("strict" === BB) dB.length > 0 && (GB(zB, {
            code: rB.unrecognized_keys,
            keys: dB
          }), jB.RJ());
          else if ("strip" !== BB) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const BB = this._def.catchall;
          for (const jB of dB) {
            const QB = zB.data[jB];
            IB.push({
              key: {
                status: "valid",
                value: jB
              },
              value: BB._parse(new oB(zB, QB, zB.path, jB)),
              alwaysSet: jB in zB.data
            })
          }
        }
        return zB.common.async ? Promise.resolve().then((async () => {
          const BB = [];
          for (const jB of IB) {
            const zB = await jB.key;
            BB.push({
              key: zB,
              value: await jB.value,
              alwaysSet: jB.alwaysSet
            })
          }
          return BB
        })).then((BB => LB.mergeObjectSync(jB, BB))) : LB.mergeObjectSync(jB, IB)
      }
      get shape() {
        return this._def.shape()
      }
      strict(BB) {
        return fB.errToObj, new Qj({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== BB ? {
            errorMap: (jB, zB) => {
              var QB, nB, dB, IB;
              const NB = null !== (dB = null === (nB = (QB = this._def).errorMap) || void 0 === nB ? void 0 : nB.call(QB, jB, zB).message) && void 0 !== dB ? dB : zB.defaultError;
              return "unrecognized_keys" === jB.code ? {
                message: null !== (IB = fB.errToObj(BB).message) && void 0 !== IB ? IB : NB
              } : {
                message: NB
              }
            }
          } : {}
        })
      }
      strip() {
        return new Qj({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Qj({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(BB) {
        return new Qj({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...BB
          })
        })
      }
      merge(BB) {
        return new Qj({
          unknownKeys: BB._def.unknownKeys,
          catchall: BB._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...BB._def.shape()
          }),
          typeName: Yj.ZodObject
        })
      }
      setKey(BB, jB) {
        return this.augment({
          [BB]: jB
        })
      }
      catchall(BB) {
        return new Qj({
          ...this._def,
          catchall: BB
        })
      }
      zs(BB) {
        const jB = {};
        return NB.objectKeys(BB).forEach((zB => {
          BB[zB] && this.shape[zB] && (jB[zB] = this.shape[zB])
        })), new Qj({
          ...this._def,
          shape: () => jB
        })
      }
      omit(BB) {
        const jB = {};
        return NB.objectKeys(this.shape).forEach((zB => {
          BB[zB] || (jB[zB] = this.shape[zB])
        })), new Qj({
          ...this._def,
          shape: () => jB
        })
      }
      deepPartial() {
        return zj(this)
      }
      partial(BB) {
        const jB = {};
        return NB.objectKeys(this.shape).forEach((zB => {
          const QB = this.shape[zB];
          BB && !BB[zB] ? jB[zB] = QB : jB[zB] = QB.optional()
        })), new Qj({
          ...this._def,
          shape: () => jB
        })
      }
      required(BB) {
        const jB = {};
        return NB.objectKeys(this.shape).forEach((zB => {
          if (BB && !BB[zB]) jB[zB] = this.shape[zB];
          else {
            let BB = this.shape[zB];
            for (; BB instanceof tj;) BB = BB._def.innerType;
            jB[zB] = BB
          }
        })), new Qj({
          ...this._def,
          shape: () => jB
        })
      }
      keyof() {
        return yj(NB.objectKeys(this.shape))
      }
    }
    Qj.create = (BB, jB) => new Qj({
      shape: () => BB,
      unknownKeys: "strip",
      catchall: OB.create(),
      typeName: Yj.ZodObject,
      ...DB(jB)
    }), Qj.strictCreate = (BB, jB) => new Qj({
      shape: () => BB,
      unknownKeys: "strict",
      catchall: OB.create(),
      typeName: Yj.ZodObject,
      ...DB(jB)
    }), Qj.lazycreate = (BB, jB) => new Qj({
      shape: BB,
      unknownKeys: "strip",
      catchall: OB.create(),
      typeName: Yj.ZodObject,
      ...DB(jB)
    });
    class nj extends FB {
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB), zB = this._def.options;
        if (jB.common.async) return Promise.all(zB.map((async BB => {
          const zB = {
            ...jB,
            common: {
              ...jB.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await BB._parseAsync({
              data: jB.data,
              path: jB.path,
              parent: zB
            }),
            ctx: zB
          }
        }))).then((function(BB) {
          for (const jB of BB)
            if ("valid" === jB.result.status) return jB.result;
          for (const QB of BB)
            if ("RJ" === QB.result.status) return jB.common.issues.push(...QB.ctx.common.issues), QB.result;
          const zB = BB.map((BB => new sB(BB.ctx.common.issues)));
          return GB(jB, {
            code: rB.invalid_union,
            unionErrors: zB
          }), gB
        }));
        {
          let BB;
          const QB = [];
          for (const dB of zB) {
            const zB = {
                ...jB,
                common: {
                  ...jB.common,
                  issues: []
                },
                parent: null
              },
              nB = dB._parseSync({
                data: jB.data,
                path: jB.path,
                parent: zB
              });
            if ("valid" === nB.status) return nB;
            "RJ" !== nB.status || BB || (BB = {
              result: nB,
              ctx: zB
            }), zB.common.issues.length && QB.push(zB.common.issues)
          }
          if (BB) return jB.common.issues.push(...BB.ctx.common.issues), BB.result;
          const nB = QB.map((BB => new sB(BB)));
          return GB(jB, {
            code: rB.invalid_union,
            unionErrors: nB
          }), gB
        }
      }
      get options() {
        return this._def.options
      }
    }
    nj.create = (BB, jB) => new nj({
      options: BB,
      typeName: Yj.ZodUnion,
      ...DB(jB)
    });
    const dj = BB => BB instanceof Jj ? dj(BB.schema) : BB instanceof gj ? dj(BB.innerType()) : BB instanceof mj ? [BB.value] : BB instanceof kj ? BB.options : BB instanceof Gj ? Object.keys(BB.enum) : BB instanceof Mj ? dj(BB._def.innerType) : BB instanceof cB ? [void 0] : BB instanceof bB ? [null] : null;
    class Ij extends FB {
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB);
        if (jB.parsedType !== aB.object) return GB(jB, {
          code: rB.invalid_type,
          expected: aB.object,
          received: jB.parsedType
        }), gB;
        const zB = this.discriminator,
          QB = jB.data[zB],
          nB = this.optionsMap.get(QB);
        return nB ? jB.common.async ? nB._parseAsync({
          data: jB.data,
          path: jB.path,
          parent: jB
        }) : nB._parseSync({
          data: jB.data,
          path: jB.path,
          parent: jB
        }) : (GB(jB, {
          code: rB.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [zB]
        }), gB)
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
      static create(BB, jB, zB) {
        const QB = new Map;
        for (const nB of jB) {
          const jB = dj(nB.shape[BB]);
          if (!jB) throw new Error(`A discriminator value for key \`${BB}\` could not be extracted from all schema options`);
          for (const zB of jB) {
            if (QB.has(zB)) throw new Error(`Discriminator property ${String(BB)} has duplicate value ${String(zB)}`);
            QB.set(zB, nB)
          }
        }
        return new Ij({
          typeName: Yj.ZodDiscriminatedUnion,
          discriminator: BB,
          options: jB,
          optionsMap: QB,
          ...DB(zB)
        })
      }
    }

    function Nj(BB, jB) {
      const zB = pB(BB),
        QB = pB(jB);
      if (BB === jB) return {
        valid: !0,
        data: BB
      };
      if (zB === aB.object && QB === aB.object) {
        const zB = NB.objectKeys(jB),
          QB = NB.objectKeys(BB).filter((BB => -1 !== zB.indexOf(BB))),
          nB = {
            ...BB,
            ...jB
          };
        for (const dB of QB) {
          const zB = Nj(BB[dB], jB[dB]);
          if (!zB.valid) return {
            valid: !1
          };
          nB[dB] = zB.data
        }
        return {
          valid: !0,
          data: nB
        }
      }
      if (zB === aB.array && QB === aB.array) {
        if (BB.length !== jB.length) return {
          valid: !1
        };
        const zB = [];
        for (let QB = 0; QB < BB.length; QB++) {
          const nB = Nj(BB[QB], jB[QB]);
          if (!nB.valid) return {
            valid: !1
          };
          zB.push(nB.data)
        }
        return {
          valid: !0,
          data: zB
        }
      }
      return zB === aB.date && QB === aB.date && +BB === +jB ? {
        valid: !0,
        data: BB
      } : {
        valid: !1
      }
    }
    class uj extends FB {
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB), QB = (BB, QB) => {
          if (MB(BB) || MB(QB)) return gB;
          const nB = Nj(BB.value, QB.value);
          return nB.valid ? ((EB(BB) || EB(QB)) && jB.RJ(), {
            status: jB.value,
            value: nB.data
          }) : (GB(zB, {
            code: rB.invalid_intersection_types
          }), gB)
        };
        return zB.common.async ? Promise.all([this._def.left._parseAsync({
          data: zB.data,
          path: zB.path,
          parent: zB
        }), this._def.right._parseAsync({
          data: zB.data,
          path: zB.path,
          parent: zB
        })]).then((BB => {
          let [jB, zB] = BB;
          return QB(jB, zB)
        })) : QB(this._def.left._parseSync({
          data: zB.data,
          path: zB.path,
          parent: zB
        }), this._def.right._parseSync({
          data: zB.data,
          path: zB.path,
          parent: zB
        }))
      }
    }
    uj.create = (BB, jB, zB) => new uj({
      left: BB,
      right: jB,
      typeName: Yj.ZodIntersection,
      ...DB(zB)
    });
    class Uj extends FB {
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB);
        if (zB.parsedType !== aB.array) return GB(zB, {
          code: rB.invalid_type,
          expected: aB.array,
          received: zB.parsedType
        }), gB;
        if (zB.data.length < this._def.items.length) return GB(zB, {
          code: rB.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), gB;
        !this._def.rest && zB.data.length > this._def.items.length && (GB(zB, {
          code: rB.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), jB.RJ());
        const QB = [...zB.data].map(((BB, jB) => {
          const QB = this._def.items[jB] || this._def.rest;
          return QB ? QB._parse(new oB(zB, BB, zB.path, jB)) : null
        })).filter((BB => !!BB));
        return zB.common.async ? Promise.all(QB).then((BB => LB.mergeArray(jB, BB))) : LB.mergeArray(jB, QB)
      }
      get items() {
        return this._def.items
      }
      rest(BB) {
        return new Uj({
          ...this._def,
          rest: BB
        })
      }
    }
    Uj.create = (BB, jB) => {
      if (!Array.isArray(BB)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Uj({
        items: BB,
        typeName: Yj.ZodTuple,
        rest: null,
        ...DB(jB)
      })
    };
    class aj extends FB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB);
        if (zB.parsedType !== aB.object) return GB(zB, {
          code: rB.invalid_type,
          expected: aB.object,
          received: zB.parsedType
        }), gB;
        const QB = [],
          nB = this._def.keyType,
          dB = this._def.valueType;
        for (const IB in zB.data) QB.push({
          key: nB._parse(new oB(zB, IB, zB.path, IB)),
          value: dB._parse(new oB(zB, zB.data[IB], zB.path, IB))
        });
        return zB.common.async ? LB.mergeObjectAsync(jB, QB) : LB.mergeObjectSync(jB, QB)
      }
      get element() {
        return this._def.valueType
      }
      static create(BB, jB, zB) {
        return new aj(jB instanceof FB ? {
          keyType: BB,
          valueType: jB,
          typeName: Yj.ZodRecord,
          ...DB(zB)
        } : {
          keyType: WB.create(),
          valueType: BB,
          typeName: Yj.ZodRecord,
          ...DB(jB)
        })
      }
    }
    class pj extends FB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB);
        if (zB.parsedType !== aB.map) return GB(zB, {
          code: rB.invalid_type,
          expected: aB.map,
          received: zB.parsedType
        }), gB;
        const QB = this._def.keyType,
          nB = this._def.valueType,
          dB = [...zB.data.entries()].map(((BB, jB) => {
            let [dB, IB] = BB;
            return {
              key: QB._parse(new oB(zB, dB, zB.path, [jB, "key"])),
              value: nB._parse(new oB(zB, IB, zB.path, [jB, "value"]))
            }
          }));
        if (zB.common.async) {
          const BB = new Map;
          return Promise.resolve().then((async () => {
            for (const zB of dB) {
              const QB = await zB.key,
                nB = await zB.value;
              if ("aborted" === QB.status || "aborted" === nB.status) return gB;
              "RJ" !== QB.status && "RJ" !== nB.status || jB.RJ(), BB.set(QB.value, nB.value)
            }
            return {
              status: jB.value,
              value: BB
            }
          }))
        } {
          const BB = new Map;
          for (const zB of dB) {
            const QB = zB.key,
              nB = zB.value;
            if ("aborted" === QB.status || "aborted" === nB.status) return gB;
            "RJ" !== QB.status && "RJ" !== nB.status || jB.RJ(), BB.set(QB.value, nB.value)
          }
          return {
            status: jB.value,
            value: BB
          }
        }
      }
    }
    pj.create = (BB, jB, zB) => new pj({
      valueType: jB,
      keyType: BB,
      typeName: Yj.ZodMap,
      ...DB(zB)
    });
    class rj extends FB {
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB);
        if (zB.parsedType !== aB.set) return GB(zB, {
          code: rB.invalid_type,
          expected: aB.set,
          received: zB.parsedType
        }), gB;
        const QB = this._def;
        null !== QB.minSize && zB.data.size < QB.minSize.value && (GB(zB, {
          code: rB.too_small,
          minimum: QB.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: QB.minSize.message
        }), jB.RJ()), null !== QB.maxSize && zB.data.size > QB.maxSize.value && (GB(zB, {
          code: rB.too_big,
          maximum: QB.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: QB.maxSize.message
        }), jB.RJ());
        const nB = this._def.valueType;

        function dB(BB) {
          const zB = new Set;
          for (const QB of BB) {
            if ("aborted" === QB.status) return gB;
            "RJ" === QB.status && jB.RJ(), zB.add(QB.value)
          }
          return {
            status: jB.value,
            value: zB
          }
        }
        const IB = [...zB.data.values()].map(((BB, jB) => nB._parse(new oB(zB, BB, zB.path, jB))));
        return zB.common.async ? Promise.all(IB).then((BB => dB(BB))) : dB(IB)
      }
      min(BB, jB) {
        return new rj({
          ...this._def,
          minSize: {
            value: BB,
            message: fB.toString(jB)
          }
        })
      }
      max(BB, jB) {
        return new rj({
          ...this._def,
          maxSize: {
            value: BB,
            message: fB.toString(jB)
          }
        })
      }
      size(BB, jB) {
        return this.min(BB, jB).max(BB, jB)
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }
    rj.create = (BB, jB) => new rj({
      valueType: BB,
      minSize: null,
      maxSize: null,
      typeName: Yj.ZodSet,
      ...DB(jB)
    });
    class sj extends FB {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB);
        if (jB.parsedType !== aB.function) return GB(jB, {
          code: rB.invalid_type,
          expected: aB.function,
          received: jB.parsedType
        }), gB;

        function zB(BB, zB) {
          return kB({
            data: BB,
            path: jB.path,
            errorMaps: [jB.common.contextualErrorMap, jB.schemaErrorMap, yB(), JB].filter((BB => !!BB)),
            issueData: {
              code: rB.invalid_arguments,
              argumentsError: zB
            }
          })
        }

        function QB(BB, zB) {
          return kB({
            data: BB,
            path: jB.path,
            errorMaps: [jB.common.contextualErrorMap, jB.schemaErrorMap, yB(), JB].filter((BB => !!BB)),
            issueData: {
              code: rB.invalid_return_type,
              returnTypeError: zB
            }
          })
        }
        const nB = {
            errorMap: jB.common.contextualErrorMap
          },
          dB = jB.data;
        if (this._def.returns instanceof Lj) {
          const BB = this;
          return SB((async function() {
            for (var jB = arguments.length, IB = new Array(jB), NB = 0; NB < jB; NB++) IB[NB] = arguments[NB];
            const uB = new sB([]),
              UB = await BB._def.args.parseAsync(IB, nB).catch((BB => {
                throw uB.addIssue(zB(IB, BB)), uB
              })),
              aB = await Reflect.apply(dB, this, UB);
            return await BB._def.returns._def.type.parseAsync(aB, nB).catch((BB => {
              throw uB.addIssue(QB(aB, BB)), uB
            }))
          }))
        } {
          const BB = this;
          return SB((function() {
            for (var jB = arguments.length, IB = new Array(jB), NB = 0; NB < jB; NB++) IB[NB] = arguments[NB];
            const uB = BB._def.args.safeParse(IB, nB);
            if (!uB.success) throw new sB([zB(IB, uB.error)]);
            const UB = Reflect.apply(dB, this, uB.data),
              aB = BB._def.returns.safeParse(UB, nB);
            if (!aB.success) throw new sB([QB(UB, aB.error)]);
            return aB.data
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
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return new sj({
          ...this._def,
          args: Uj.create(jB).rest(RB.create())
        })
      }
      returns(BB) {
        return new sj({
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
      static create(BB, jB, zB) {
        return new sj({
          args: BB || Uj.create([]).rest(RB.create()),
          returns: jB || RB.create(),
          typeName: Yj.ZodFunction,
          ...DB(zB)
        })
      }
    }
    class Jj extends FB {
      get schema() {
        return this._def.getter()
      }
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB);
        return this._def.getter()._parse({
          data: jB.data,
          path: jB.path,
          parent: jB
        })
      }
    }
    Jj.create = (BB, jB) => new Jj({
      getter: BB,
      typeName: Yj.ZodLazy,
      ...DB(jB)
    });
    class mj extends FB {
      _parse(BB) {
        if (BB.data !== this._def.value) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            received: jB.data,
            code: rB.invalid_literal,
            expected: this._def.value
          }), gB
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

    function yj(BB, jB) {
      return new kj({
        values: BB,
        typeName: Yj.ZodEnum,
        ...DB(jB)
      })
    }
    mj.create = (BB, jB) => new mj({
      value: BB,
      typeName: Yj.ZodLiteral,
      ...DB(jB)
    });
    class kj extends FB {
      _parse(BB) {
        if ("string" !== typeof BB.data) {
          const jB = this._getOrReturnCtx(BB),
            zB = this._def.values;
          return GB(jB, {
            expected: NB.joinValues(zB),
            received: jB.parsedType,
            code: rB.invalid_type
          }), gB
        }
        if (-1 === this._def.values.indexOf(BB.data)) {
          const jB = this._getOrReturnCtx(BB),
            zB = this._def.values;
          return GB(jB, {
            received: jB.data,
            code: rB.invalid_enum_value,
            options: zB
          }), gB
        }
        return SB(BB.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const BB = {};
        for (const jB of this._def.values) BB[jB] = jB;
        return BB
      }
      get Values() {
        const BB = {};
        for (const jB of this._def.values) BB[jB] = jB;
        return BB
      }
      get Enum() {
        const BB = {};
        for (const jB of this._def.values) BB[jB] = jB;
        return BB
      }
      extract(BB) {
        return kj.create(BB)
      }
      exclude(BB) {
        return kj.create(this.options.filter((jB => !BB.includes(jB))))
      }
    }
    kj.create = yj;
    class Gj extends FB {
      _parse(BB) {
        const jB = NB.getValidEnumValues(this._def.values),
          zB = this._getOrReturnCtx(BB);
        if (zB.parsedType !== aB.string && zB.parsedType !== aB.number) {
          const BB = NB.objectValues(jB);
          return GB(zB, {
            expected: NB.joinValues(BB),
            received: zB.parsedType,
            code: rB.invalid_type
          }), gB
        }
        if (-1 === jB.indexOf(BB.data)) {
          const BB = NB.objectValues(jB);
          return GB(zB, {
            received: zB.data,
            code: rB.invalid_enum_value,
            options: BB
          }), gB
        }
        return SB(BB.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Gj.create = (BB, jB) => new Gj({
      values: BB,
      typeName: Yj.ZodNativeEnum,
      ...DB(jB)
    });
    class Lj extends FB {
      unwrap() {
        return this._def.type
      }
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB);
        if (jB.parsedType !== aB.promise && !1 === jB.common.async) return GB(jB, {
          code: rB.invalid_type,
          expected: aB.promise,
          received: jB.parsedType
        }), gB;
        const zB = jB.parsedType === aB.promise ? jB.data : Promise.resolve(jB.data);
        return SB(zB.then((BB => this._def.type.parseAsync(BB, {
          path: jB.path,
          errorMap: jB.common.contextualErrorMap
        }))))
      }
    }
    Lj.create = (BB, jB) => new Lj({
      type: BB,
      typeName: Yj.ZodPromise,
      ...DB(jB)
    });
    class gj extends FB {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Yj.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB), QB = this._def.effect || null, nB = {
          addIssue: BB => {
            GB(zB, BB), BB.fatal ? jB.abort() : jB.RJ()
          },
          get path() {
            return zB.path
          }
        };
        if (nB.addIssue = nB.addIssue.bind(nB), "preprocess" === QB.type) {
          const BB = QB.transform(zB.data, nB);
          return zB.common.issues.length ? {
            status: "RJ",
            value: zB.data
          } : zB.common.async ? Promise.resolve(BB).then((BB => this._def.schema._parseAsync({
            data: BB,
            path: zB.path,
            parent: zB
          }))) : this._def.schema._parseSync({
            data: BB,
            path: zB.path,
            parent: zB
          })
        }
        if ("refinement" === QB.type) {
          const BB = BB => {
            const jB = QB.refinement(BB, nB);
            if (zB.common.async) return Promise.resolve(jB);
            if (jB instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return BB
          };
          if (!1 === zB.common.async) {
            const QB = this._def.schema._parseSync({
              data: zB.data,
              path: zB.path,
              parent: zB
            });
            return "aborted" === QB.status ? gB : ("RJ" === QB.status && jB.RJ(), BB(QB.value), {
              status: jB.value,
              value: QB.value
            })
          }
          return this._def.schema._parseAsync({
            data: zB.data,
            path: zB.path,
            parent: zB
          }).then((zB => "aborted" === zB.status ? gB : ("RJ" === zB.status && jB.RJ(), BB(zB.value).then((() => ({
            status: jB.value,
            value: zB.value
          }))))))
        }
        if ("transform" === QB.type) {
          if (!1 === zB.common.async) {
            const BB = this._def.schema._parseSync({
              data: zB.data,
              path: zB.path,
              parent: zB
            });
            if (!iB(BB)) return BB;
            const dB = QB.transform(BB.value, nB);
            if (dB instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: jB.value,
              value: dB
            }
          }
          return this._def.schema._parseAsync({
            data: zB.data,
            path: zB.path,
            parent: zB
          }).then((BB => iB(BB) ? Promise.resolve(QB.transform(BB.value, nB)).then((BB => ({
            status: jB.value,
            value: BB
          }))) : BB))
        }
        NB.assertNever(QB)
      }
    }
    gj.create = (BB, jB, zB) => new gj({
      schema: BB,
      typeName: Yj.ZodEffects,
      effect: jB,
      ...DB(zB)
    }), gj.createWithPreprocess = (BB, jB, zB) => new gj({
      schema: jB,
      effect: {
        type: "preprocess",
        transform: BB
      },
      typeName: Yj.ZodEffects,
      ...DB(zB)
    });
    class tj extends FB {
      _parse(BB) {
        return this._getType(BB) === aB.undefined ? SB(void 0) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    tj.create = (BB, jB) => new tj({
      innerType: BB,
      typeName: Yj.ZodOptional,
      ...DB(jB)
    });
    class Sj extends FB {
      _parse(BB) {
        return this._getType(BB) === aB.null ? SB(null) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Sj.create = (BB, jB) => new Sj({
      innerType: BB,
      typeName: Yj.ZodNullable,
      ...DB(jB)
    });
    class Mj extends FB {
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB);
        let zB = jB.data;
        return jB.parsedType === aB.undefined && (zB = this._def.defaultValue()), this._def.innerType._parse({
          data: zB,
          path: jB.path,
          parent: jB
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Mj.create = (BB, jB) => new Mj({
      innerType: BB,
      typeName: Yj.ZodDefault,
      defaultValue: "function" === typeof jB.default ? jB.default : () => jB.default,
      ...DB(jB)
    });
    class Ej extends FB {
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB), zB = {
          ...jB,
          common: {
            ...jB.common,
            issues: []
          }
        }, QB = this._def.innerType._parse({
          data: zB.data,
          path: zB.path,
          parent: {
            ...zB
          }
        });
        return qB(QB) ? QB.then((BB => ({
          status: "valid",
          value: "valid" === BB.status ? BB.value : this._def.catchValue({
            get error() {
              return new sB(zB.common.issues)
            },
            input: zB.data
          })
        }))) : {
          status: "valid",
          value: "valid" === QB.status ? QB.value : this._def.catchValue({
            get error() {
              return new sB(zB.common.issues)
            },
            input: zB.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Ej.create = (BB, jB) => new Ej({
      innerType: BB,
      typeName: Yj.ZodCatch,
      catchValue: "function" === typeof jB.catch ? jB.catch : () => jB.catch,
      ...DB(jB)
    });
    class ij extends FB {
      _parse(BB) {
        if (this._getType(BB) !== aB.nan) {
          const jB = this._getOrReturnCtx(BB);
          return GB(jB, {
            code: rB.invalid_type,
            expected: aB.nan,
            received: jB.parsedType
          }), gB
        }
        return {
          status: "valid",
          value: BB.data
        }
      }
    }
    ij.create = BB => new ij({
      typeName: Yj.ZodNaN,
      ...DB(BB)
    });
    const qj = Symbol("zod_brand");
    class fj extends FB {
      _parse(BB) {
        const {
          ctx: jB
        } = this._processInputParams(BB), zB = jB.data;
        return this._def.type._parse({
          data: zB,
          path: jB.path,
          parent: jB
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class oj extends FB {
      _parse(BB) {
        const {
          status: jB,
          ctx: zB
        } = this._processInputParams(BB);
        if (zB.common.async) {
          return (async () => {
            const BB = await this._def.in._parseAsync({
              data: zB.data,
              path: zB.path,
              parent: zB
            });
            return "aborted" === BB.status ? gB : "RJ" === BB.status ? (jB.RJ(), tB(BB.value)) : this._def.out._parseAsync({
              data: BB.value,
              path: zB.path,
              parent: zB
            })
          })()
        } {
          const BB = this._def.in._parseSync({
            data: zB.data,
            path: zB.path,
            parent: zB
          });
          return "aborted" === BB.status ? gB : "RJ" === BB.status ? (jB.RJ(), {
            status: "RJ",
            value: BB.value
          }) : this._def.out._parseSync({
            data: BB.value,
            path: zB.path,
            parent: zB
          })
        }
      }
      static create(BB, jB) {
        return new oj({
          in: BB,
          out: jB,
          typeName: Yj.ZodPipeline
        })
      }
    }
    class Hj extends FB {
      _parse(BB) {
        const jB = this._def.innerType._parse(BB);
        return iB(jB) && (jB.value = Object.freeze(jB.value)), jB
      }
    }
    Hj.create = (BB, jB) => new Hj({
      innerType: BB,
      typeName: Yj.ZodReadonly,
      ...DB(jB)
    });
    const Dj = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zB = arguments.length > 2 ? arguments[2] : void 0;
        return BB ? vB.create().superRefine(((QB, nB) => {
          var dB, IB;
          if (!BB(QB)) {
            const BB = "function" === typeof jB ? jB(QB) : "string" === typeof jB ? {
                message: jB
              } : jB,
              NB = null === (IB = null !== (dB = BB.fatal) && void 0 !== dB ? dB : zB) || void 0 === IB || IB,
              uB = "string" === typeof BB ? {
                message: BB
              } : BB;
            nB.addIssue({
              code: "custom",
              ...uB,
              fatal: NB
            })
          }
        })) : vB.create()
      },
      Fj = {
        object: Qj.lazycreate
      };
    var Yj;
    ! function(BB) {
      BB.ZodString = "ZodString", BB.ZodNumber = "ZodNumber", BB.ZodNaN = "ZodNaN", BB.ZodBigInt = "ZodBigInt", BB.ZodBoolean = "ZodBoolean", BB.ZodDate = "ZodDate", BB.ZodSymbol = "ZodSymbol", BB.ZodUndefined = "ZodUndefined", BB.ZodNull = "ZodNull", BB.ZodAny = "ZodAny", BB.ZodUnknown = "ZodUnknown", BB.ZodNever = "ZodNever", BB.ZodVoid = "ZodVoid", BB.ZodArray = "ZodArray", BB.ZodObject = "ZodObject", BB.ZodUnion = "ZodUnion", BB.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", BB.ZodIntersection = "ZodIntersection", BB.ZodTuple = "ZodTuple", BB.ZodRecord = "ZodRecord", BB.ZodMap = "ZodMap", BB.ZodSet = "ZodSet", BB.ZodFunction = "ZodFunction", BB.ZodLazy = "ZodLazy", BB.ZodLiteral = "ZodLiteral", BB.ZodEnum = "ZodEnum", BB.ZodEffects = "ZodEffects", BB.ZodNativeEnum = "ZodNativeEnum", BB.ZodOptional = "ZodOptional", BB.ZodNullable = "ZodNullable", BB.ZodDefault = "ZodDefault", BB.ZodCatch = "ZodCatch", BB.ZodPromise = "ZodPromise", BB.ZodBranded = "ZodBranded", BB.ZodPipeline = "ZodPipeline", BB.ZodReadonly = "ZodReadonly"
    }(Yj || (Yj = {}));
    const Vj = WB.create,
      hj = lB.create,
      Xj = ij.create,
      Zj = wB.create,
      Aj = xB.create,
      Tj = KB.create,
      Pj = CB.create,
      Wj = cB.create,
      ej = bB.create,
      lj = vB.create,
      wj = RB.create,
      xj = OB.create,
      Kj = Bj.create,
      Cj = jj.create,
      cj = Qj.create,
      bj = Qj.strictCreate,
      vj = nj.create,
      Rj = Ij.create,
      Oj = uj.create,
      Bz = Uj.create,
      jz = aj.create,
      zz = pj.create,
      Qz = rj.create,
      nz = sj.create,
      dz = Jj.create,
      Iz = mj.create,
      Nz = kj.create,
      uz = Gj.create,
      Uz = Lj.create,
      az = gj.create,
      pz = tj.create,
      rz = Sj.create,
      sz = gj.createWithPreprocess,
      Jz = oj.create,
      mz = {
        string: BB => WB.create({
          ...BB,
          coerce: !0
        }),
        number: BB => lB.create({
          ...BB,
          coerce: !0
        }),
        boolean: BB => xB.create({
          ...BB,
          coerce: !0
        }),
        bigint: BB => wB.create({
          ...BB,
          coerce: !0
        }),
        date: BB => KB.create({
          ...BB,
          coerce: !0
        })
      },
      yz = gB;
    var kz = Object.freeze({
        __proto__: null,
        defaultErrorMap: JB,
        setErrorMap: function(BB) {
          mB = BB
        },
        getErrorMap: yB,
        makeIssue: kB,
        EMPTY_PATH: [],
        addIssueToContext: GB,
        ParseStatus: LB,
        INVALID: gB,
        DIRTY: tB,
        OK: SB,
        isAborted: MB,
        isDirty: EB,
        isValid: iB,
        isAsync: qB,
        get util() {
          return NB
        },
        get objectUtil() {
          return uB
        },
        ZodParsedType: aB,
        getParsedType: pB,
        ZodType: FB,
        ZodString: WB,
        ZodNumber: lB,
        ZodBigInt: wB,
        ZodBoolean: xB,
        ZodDate: KB,
        ZodSymbol: CB,
        ZodUndefined: cB,
        ZodNull: bB,
        ZodAny: vB,
        ZodUnknown: RB,
        ZodNever: OB,
        ZodVoid: Bj,
        ZodArray: jj,
        ZodObject: Qj,
        ZodUnion: nj,
        ZodDiscriminatedUnion: Ij,
        ZodIntersection: uj,
        ZodTuple: Uj,
        ZodRecord: aj,
        ZodMap: pj,
        ZodSet: rj,
        ZodFunction: sj,
        ZodLazy: Jj,
        ZodLiteral: mj,
        ZodEnum: kj,
        ZodNativeEnum: Gj,
        ZodPromise: Lj,
        ZodEffects: gj,
        ZodTransformer: gj,
        ZodOptional: tj,
        ZodNullable: Sj,
        ZodDefault: Mj,
        ZodCatch: Ej,
        ZodNaN: ij,
        BRAND: qj,
        ZodBranded: fj,
        ZodPipeline: oj,
        ZodReadonly: Hj,
        custom: Dj,
        Schema: FB,
        ZodSchema: FB,
        late: Fj,
        get ZodFirstPartyTypeKind() {
          return Yj
        },
        coerce: mz,
        any: lj,
        array: Cj,
        bigint: Zj,
        boolean: Aj,
        date: Tj,
        discriminatedUnion: Rj,
        effect: az,
        enum: Nz,
        function: nz,
        instanceof: function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${BB.name}`
          };
          return Dj((jB => jB instanceof BB), jB)
        },
        intersection: Oj,
        lazy: dz,
        literal: Iz,
        map: zz,
        nan: Xj,
        nativeEnum: uz,
        never: xj,
        null: ej,
        nullable: rz,
        number: hj,
        object: cj,
        oboolean: () => Aj().optional(),
        onumber: () => hj().optional(),
        optional: pz,
        ostring: () => Vj().optional(),
        pipeline: Jz,
        preprocess: sz,
        promise: Uz,
        record: jz,
        set: Qz,
        strictObject: bj,
        string: Vj,
        symbol: Pj,
        transformer: az,
        tuple: Bz,
        undefined: Wj,
        union: vj,
        unknown: wj,
        void: Kj,
        NEVER: yz,
        ZodIssueCode: rB,
        quotelessJson: BB => JSON.stringify(BB, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: sB
      }),
      Gz = {
        exports: {}
      };
    ! function(BB) {
      var jB = function(BB) {
        var zB = 1e7,
          QB = 9007199254740992,
          nB = rB(QB),
          dB = "0123456789abcdefghijklmnopqrstuvwxyz",
          IB = "function" === typeof BigInt;

        function NB(BB, jB, zB, QB) {
          return "undefined" === typeof BB ? NB[0] : "undefined" !== typeof jB && (10 !== +jB || zB) ? xB(BB, jB, zB, QB) : vB(BB)
        }

        function uB(BB, jB) {
          this.value = BB, this.sign = jB, this.isSmall = !1
        }

        function UB(BB) {
          this.value = BB, this.sign = BB < 0, this.isSmall = !0
        }

        function aB(BB) {
          this.value = BB
        }

        function pB(BB) {
          return -QB < BB && BB < QB
        }

        function rB(BB) {
          return BB < 1e7 ? [BB] : BB < 1e14 ? [BB % 1e7, Math.floor(BB / 1e7)] : [BB % 1e7, Math.floor(BB / 1e7) % 1e7, Math.floor(BB / 1e14)]
        }

        function sB(BB) {
          JB(BB);
          var jB = BB.length;
          if (jB < 4 && DB(BB, nB) < 0) switch (jB) {
            case 0:
              return 0;
            case 1:
              return BB[0];
            case 2:
              return BB[0] + BB[1] * zB;
            default:
              return BB[0] + (BB[1] + BB[2] * zB) * zB
          }
          return BB
        }

        function JB(BB) {
          for (var jB = BB.length; 0 === BB[--jB];);
          BB.length = jB + 1
        }

        function mB(BB) {
          for (var jB = new Array(BB), zB = -1; ++zB < BB;) jB[zB] = 0;
          return jB
        }

        function yB(BB) {
          return BB > 0 ? Math.floor(BB) : Math.ceil(BB)
        }

        function kB(BB, jB) {
          var QB, nB, dB = BB.length,
            IB = jB.length,
            NB = new Array(dB),
            uB = 0,
            UB = zB;
          for (nB = 0; nB < IB; nB++) uB = (QB = BB[nB] + jB[nB] + uB) >= UB ? 1 : 0, NB[nB] = QB - uB * UB;
          for (; nB < dB;) uB = (QB = BB[nB] + uB) === UB ? 1 : 0, NB[nB++] = QB - uB * UB;
          return uB > 0 && NB.push(uB), NB
        }

        function GB(BB, jB) {
          return BB.length >= jB.length ? kB(BB, jB) : kB(jB, BB)
        }

        function LB(BB, jB) {
          var QB, nB, dB = BB.length,
            IB = new Array(dB),
            NB = zB;
          for (nB = 0; nB < dB; nB++) QB = BB[nB] - NB + jB, jB = Math.floor(QB / NB), IB[nB] = QB - jB * NB, jB += 1;
          for (; jB > 0;) IB[nB++] = jB % NB, jB = Math.floor(jB / NB);
          return IB
        }

        function gB(BB, jB) {
          var QB, nB, dB = BB.length,
            IB = jB.length,
            NB = new Array(dB),
            uB = 0,
            UB = zB;
          for (QB = 0; QB < IB; QB++)(nB = BB[QB] - uB - jB[QB]) < 0 ? (nB += UB, uB = 1) : uB = 0, NB[QB] = nB;
          for (QB = IB; QB < dB; QB++) {
            if (!((nB = BB[QB] - uB) < 0)) {
              NB[QB++] = nB;
              break
            }
            nB += UB, NB[QB] = nB
          }
          for (; QB < dB; QB++) NB[QB] = BB[QB];
          return JB(NB), NB
        }

        function tB(BB, jB, QB) {
          var nB, dB, IB = BB.length,
            NB = new Array(IB),
            aB = -jB,
            pB = zB;
          for (nB = 0; nB < IB; nB++) dB = BB[nB] + aB, aB = Math.floor(dB / pB), dB %= pB, NB[nB] = dB < 0 ? dB + pB : dB;
          return "number" === typeof(NB = sB(NB)) ? (QB && (NB = -NB), new UB(NB)) : new uB(NB, QB)
        }

        function SB(BB, jB) {
          var QB, nB, dB, IB, NB = BB.length,
            uB = jB.length,
            UB = mB(NB + uB),
            aB = zB;
          for (dB = 0; dB < NB; ++dB) {
            IB = BB[dB];
            for (var pB = 0; pB < uB; ++pB) QB = IB * jB[pB] + UB[dB + pB], nB = Math.floor(QB / aB), UB[dB + pB] = QB - nB * aB, UB[dB + pB + 1] += nB
          }
          return JB(UB), UB
        }

        function MB(BB, jB) {
          var QB, nB, dB = BB.length,
            IB = new Array(dB),
            NB = zB,
            uB = 0;
          for (nB = 0; nB < dB; nB++) QB = BB[nB] * jB + uB, uB = Math.floor(QB / NB), IB[nB] = QB - uB * NB;
          for (; uB > 0;) IB[nB++] = uB % NB, uB = Math.floor(uB / NB);
          return IB
        }

        function EB(BB, jB) {
          for (var zB = []; jB-- > 0;) zB.push(0);
          return zB.concat(BB)
        }

        function iB(BB, jB) {
          var zB = Math.max(BB.length, jB.length);
          if (zB <= 30) return SB(BB, jB);
          zB = Math.ceil(zB / 2);
          var QB = BB.slice(zB),
            nB = BB.slice(0, zB),
            dB = jB.slice(zB),
            IB = jB.slice(0, zB),
            NB = iB(nB, IB),
            uB = iB(QB, dB),
            UB = iB(GB(nB, QB), GB(IB, dB)),
            aB = GB(GB(NB, EB(gB(gB(UB, NB), uB), zB)), EB(uB, 2 * zB));
          return JB(aB), aB
        }

        function qB(BB, jB, QB) {
          return new uB(BB < zB ? MB(jB, BB) : SB(jB, rB(BB)), QB)
        }

        function fB(BB) {
          var jB, QB, nB, dB, IB = BB.length,
            NB = mB(IB + IB),
            uB = zB;
          for (nB = 0; nB < IB; nB++) {
            QB = 0 - (dB = BB[nB]) * dB;
            for (var UB = nB; UB < IB; UB++) jB = dB * BB[UB] * 2 + NB[nB + UB] + QB, QB = Math.floor(jB / uB), NB[nB + UB] = jB - QB * uB;
            NB[nB + IB] = QB
          }
          return JB(NB), NB
        }

        function oB(BB, jB) {
          var QB, nB, dB, IB, NB = BB.length,
            uB = mB(NB),
            UB = zB;
          for (dB = 0, QB = NB - 1; QB >= 0; --QB) dB = (IB = dB * UB + BB[QB]) - (nB = yB(IB / jB)) * jB, uB[QB] = 0 | nB;
          return [uB, 0 | dB]
        }

        function HB(BB, jB) {
          var QB, nB = vB(jB);
          if (IB) return [new aB(BB.value / nB.value), new aB(BB.value % nB.value)];
          var dB, pB = BB.value,
            kB = nB.value;
          if (0 === kB) throw new Error("Cannot divide by zero");
          if (BB.isSmall) return nB.isSmall ? [new UB(yB(pB / kB)), new UB(pB % kB)] : [NB[0], BB];
          if (nB.isSmall) {
            if (1 === kB) return [BB, NB[0]];
            if (-1 == kB) return [BB.bu(), NB[0]];
            var GB = Math.abs(kB);
            if (GB < zB) {
              dB = sB((QB = oB(pB, GB))[0]);
              var LB = QB[1];
              return BB.sign && (LB = -LB), "number" === typeof dB ? (BB.sign !== nB.sign && (dB = -dB), [new UB(dB), new UB(LB)]) : [new uB(dB, BB.sign !== nB.sign), new UB(LB)]
            }
            kB = rB(GB)
          }
          var tB = DB(pB, kB);
          if (-1 === tB) return [NB[0], BB];
          if (0 === tB) return [NB[BB.sign === nB.sign ? 1 : -1], NB[0]];
          QB = pB.length + kB.length <= 200 ? function(BB, jB) {
            var QB, nB, dB, IB, NB, uB, UB, aB = BB.length,
              pB = jB.length,
              rB = zB,
              JB = mB(jB.length),
              yB = jB[pB - 1],
              kB = Math.ceil(rB / (2 * yB)),
              GB = MB(BB, kB),
              LB = MB(jB, kB);
            for (GB.length <= aB && GB.push(0), LB.push(0), yB = LB[pB - 1], nB = aB - pB; nB >= 0; nB--) {
              for (QB = rB - 1, GB[nB + pB] !== yB && (QB = Math.floor((GB[nB + pB] * rB + GB[nB + pB - 1]) / yB)), dB = 0, IB = 0, uB = LB.length, NB = 0; NB < uB; NB++) dB += QB * LB[NB], UB = Math.floor(dB / rB), IB += GB[nB + NB] - (dB - UB * rB), dB = UB, IB < 0 ? (GB[nB + NB] = IB + rB, IB = -1) : (GB[nB + NB] = IB, IB = 0);
              for (; 0 !== IB;) {
                for (QB -= 1, dB = 0, NB = 0; NB < uB; NB++)(dB += GB[nB + NB] - rB + LB[NB]) < 0 ? (GB[nB + NB] = dB + rB, dB = 0) : (GB[nB + NB] = dB, dB = 1);
                IB += dB
              }
              JB[nB] = QB
            }
            return GB = oB(GB, kB)[0], [sB(JB), sB(GB)]
          }(pB, kB) : function(BB, jB) {
            for (var QB, nB, dB, IB, NB, uB = BB.length, UB = jB.length, aB = [], pB = [], rB = zB; uB;)
              if (pB.unshift(BB[--uB]), JB(pB), DB(pB, jB) < 0) aB.push(0);
              else {
                dB = pB[(nB = pB.length) - 1] * rB + pB[nB - 2], IB = jB[UB - 1] * rB + jB[UB - 2], nB > UB && (dB = (dB + 1) * rB), QB = Math.ceil(dB / IB);
                do {
                  if (DB(NB = MB(jB, QB), pB) <= 0) break;
                  QB--
                } while (QB);
                aB.push(QB), pB = gB(pB, NB)
              } return aB.reverse(), [sB(aB), sB(pB)]
          }(pB, kB), dB = QB[0];
          var SB = BB.sign !== nB.sign,
            EB = QB[1],
            iB = BB.sign;
          return "number" === typeof dB ? (SB && (dB = -dB), dB = new UB(dB)) : dB = new uB(dB, SB), "number" === typeof EB ? (iB && (EB = -EB), EB = new UB(EB)) : EB = new uB(EB, iB), [dB, EB]
        }

        function DB(BB, jB) {
          if (BB.length !== jB.length) return BB.length > jB.length ? 1 : -1;
          for (var zB = BB.length - 1; zB >= 0; zB--)
            if (BB[zB] !== jB[zB]) return BB[zB] > jB[zB] ? 1 : -1;
          return 0
        }

        function FB(BB) {
          var jB = BB.abs();
          return !jB.isUnit() && (!!(jB.equals(2) || jB.equals(3) || jB.equals(5)) || !(jB.isEven() || jB.isDivisibleBy(3) || jB.isDivisibleBy(5)) && (!!jB.lesser(49) || void 0))
        }

        function YB(BB, zB) {
          for (var QB, nB, dB, IB = BB.prev(), NB = IB, uB = 0; NB.isEven();) NB = NB.divide(2), uB++;
          BB: for (nB = 0; nB < zB.length; nB++)
            if (!BB.lesser(zB[nB]) && !(dB = jB(zB[nB]).modPow(NB, BB)).isUnit() && !dB.equals(IB)) {
              for (QB = uB - 1; 0 != QB; QB--) {
                if ((dB = dB.square().mod(BB)).isUnit()) return !1;
                if (dB.equals(IB)) continue BB
              }
              return !1
            }
          return !0
        }
        uB.prototype = Object.create(NB.prototype), UB.prototype = Object.create(NB.prototype), aB.prototype = Object.create(NB.prototype), uB.prototype.add = function(BB) {
          var jB = vB(BB);
          if (this.sign !== jB.sign) return this.subtract(jB.bu());
          var zB = this.value,
            QB = jB.value;
          return jB.isSmall ? new uB(LB(zB, Math.abs(QB)), this.sign) : new uB(GB(zB, QB), this.sign)
        }, uB.prototype.plus = uB.prototype.add, UB.prototype.add = function(BB) {
          var jB = vB(BB),
            zB = this.value;
          if (zB < 0 !== jB.sign) return this.subtract(jB.bu());
          var QB = jB.value;
          if (jB.isSmall) {
            if (pB(zB + QB)) return new UB(zB + QB);
            QB = rB(Math.abs(QB))
          }
          return new uB(LB(QB, Math.abs(zB)), zB < 0)
        }, UB.prototype.plus = UB.prototype.add, aB.prototype.add = function(BB) {
          return new aB(this.value + vB(BB).value)
        }, aB.prototype.plus = aB.prototype.add, uB.prototype.subtract = function(BB) {
          var jB = vB(BB);
          if (this.sign !== jB.sign) return this.add(jB.bu());
          var zB = this.value,
            QB = jB.value;
          return jB.isSmall ? tB(zB, Math.abs(QB), this.sign) : function(BB, jB, zB) {
            var QB;
            return DB(BB, jB) >= 0 ? QB = gB(BB, jB) : (QB = gB(jB, BB), zB = !zB), "number" === typeof(QB = sB(QB)) ? (zB && (QB = -QB), new UB(QB)) : new uB(QB, zB)
          }(zB, QB, this.sign)
        }, uB.prototype.minus = uB.prototype.subtract, UB.prototype.subtract = function(BB) {
          var jB = vB(BB),
            zB = this.value;
          if (zB < 0 !== jB.sign) return this.add(jB.bu());
          var QB = jB.value;
          return jB.isSmall ? new UB(zB - QB) : tB(QB, Math.abs(zB), zB >= 0)
        }, UB.prototype.minus = UB.prototype.subtract, aB.prototype.subtract = function(BB) {
          return new aB(this.value - vB(BB).value)
        }, aB.prototype.minus = aB.prototype.subtract, uB.prototype.bu = function() {
          return new uB(this.value, !this.sign)
        }, UB.prototype.bu = function() {
          var BB = this.sign,
            jB = new UB(-this.value);
          return jB.sign = !BB, jB
        }, aB.prototype.bu = function() {
          return new aB(-this.value)
        }, uB.prototype.abs = function() {
          return new uB(this.value, !1)
        }, UB.prototype.abs = function() {
          return new UB(Math.abs(this.value))
        }, aB.prototype.abs = function() {
          return new aB(this.value >= 0 ? this.value : -this.value)
        }, uB.prototype.multiply = function(BB) {
          var jB, QB, nB, dB = vB(BB),
            IB = this.value,
            UB = dB.value,
            aB = this.sign !== dB.sign;
          if (dB.isSmall) {
            if (0 === UB) return NB[0];
            if (1 === UB) return this;
            if (-1 === UB) return this.bu();
            if ((jB = Math.abs(UB)) < zB) return new uB(MB(IB, jB), aB);
            UB = rB(jB)
          }
          return QB = IB.length, nB = UB.length, new uB(-.012 * QB - .012 * nB + 15e-6 * QB * nB > 0 ? iB(IB, UB) : SB(IB, UB), aB)
        }, uB.prototype.times = uB.prototype.multiply, UB.prototype._multiplyBySmall = function(BB) {
          return pB(BB.value * this.value) ? new UB(BB.value * this.value) : qB(Math.abs(BB.value), rB(Math.abs(this.value)), this.sign !== BB.sign)
        }, uB.prototype._multiplyBySmall = function(BB) {
          return 0 === BB.value ? NB[0] : 1 === BB.value ? this : -1 === BB.value ? this.bu() : qB(Math.abs(BB.value), this.value, this.sign !== BB.sign)
        }, UB.prototype.multiply = function(BB) {
          return vB(BB)._multiplyBySmall(this)
        }, UB.prototype.times = UB.prototype.multiply, aB.prototype.multiply = function(BB) {
          return new aB(this.value * vB(BB).value)
        }, aB.prototype.times = aB.prototype.multiply, uB.prototype.square = function() {
          return new uB(fB(this.value), !1)
        }, UB.prototype.square = function() {
          var BB = this.value * this.value;
          return pB(BB) ? new UB(BB) : new uB(fB(rB(Math.abs(this.value))), !1)
        }, aB.prototype.square = function(BB) {
          return new aB(this.value * this.value)
        }, uB.prototype.divmod = function(BB) {
          var jB = HB(this, BB);
          return {
            quotient: jB[0],
            remainder: jB[1]
          }
        }, aB.prototype.divmod = UB.prototype.divmod = uB.prototype.divmod, uB.prototype.divide = function(BB) {
          return HB(this, BB)[0]
        }, aB.prototype.over = aB.prototype.divide = function(BB) {
          return new aB(this.value / vB(BB).value)
        }, UB.prototype.over = UB.prototype.divide = uB.prototype.over = uB.prototype.divide, uB.prototype.mod = function(BB) {
          return HB(this, BB)[1]
        }, aB.prototype.mod = aB.prototype.remainder = function(BB) {
          return new aB(this.value % vB(BB).value)
        }, UB.prototype.remainder = UB.prototype.mod = uB.prototype.remainder = uB.prototype.mod, uB.prototype.pow = function(BB) {
          var jB, zB, QB, nB = vB(BB),
            dB = this.value,
            IB = nB.value;
          if (0 === IB) return NB[1];
          if (0 === dB) return NB[0];
          if (1 === dB) return NB[1];
          if (-1 === dB) return nB.isEven() ? NB[1] : NB[-1];
          if (nB.sign) return NB[0];
          if (!nB.isSmall) throw new Error("The exponent " + nB.toString() + " is too large.");
          if (this.isSmall && pB(jB = Math.pow(dB, IB))) return new UB(yB(jB));
          for (zB = this, QB = NB[1]; !0 & IB && (QB = QB.times(zB), --IB), 0 !== IB;) IB /= 2, zB = zB.square();
          return QB
        }, UB.prototype.pow = uB.prototype.pow, aB.prototype.pow = function(BB) {
          var jB = vB(BB),
            zB = this.value,
            QB = jB.value,
            nB = BigInt(0),
            dB = BigInt(1),
            IB = BigInt(2);
          if (QB === nB) return NB[1];
          if (zB === nB) return NB[0];
          if (zB === dB) return NB[1];
          if (zB === BigInt(-1)) return jB.isEven() ? NB[1] : NB[-1];
          if (jB.isNegative()) return new aB(nB);
          for (var uB = this, UB = NB[1];
            (QB & dB) === dB && (UB = UB.times(uB), --QB), QB !== nB;) QB /= IB, uB = uB.square();
          return UB
        }, uB.prototype.modPow = function(BB, jB) {
          if (BB = vB(BB), (jB = vB(jB)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var zB = NB[1],
            QB = this.mod(jB);
          for (BB.isNegative() && (BB = BB.multiply(NB[-1]), QB = QB.modInv(jB)); BB.isPositive();) {
            if (QB.isZero()) return NB[0];
            BB.isOdd() && (zB = zB.multiply(QB).mod(jB)), BB = BB.divide(2), QB = QB.square().mod(jB)
          }
          return zB
        }, aB.prototype.modPow = UB.prototype.modPow = uB.prototype.modPow, uB.prototype.compareAbs = function(BB) {
          var jB = vB(BB),
            zB = this.value,
            QB = jB.value;
          return jB.isSmall ? 1 : DB(zB, QB)
        }, UB.prototype.compareAbs = function(BB) {
          var jB = vB(BB),
            zB = Math.abs(this.value),
            QB = jB.value;
          return jB.isSmall ? zB === (QB = Math.abs(QB)) ? 0 : zB > QB ? 1 : -1 : -1
        }, aB.prototype.compareAbs = function(BB) {
          var jB = this.value,
            zB = vB(BB).value;
          return (jB = jB >= 0 ? jB : -jB) === (zB = zB >= 0 ? zB : -zB) ? 0 : jB > zB ? 1 : -1
        }, uB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var jB = vB(BB),
            zB = this.value,
            QB = jB.value;
          return this.sign !== jB.sign ? jB.sign ? 1 : -1 : jB.isSmall ? this.sign ? -1 : 1 : DB(zB, QB) * (this.sign ? -1 : 1)
        }, uB.prototype.compareTo = uB.prototype.compare, UB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var jB = vB(BB),
            zB = this.value,
            QB = jB.value;
          return jB.isSmall ? zB == QB ? 0 : zB > QB ? 1 : -1 : zB < 0 !== jB.sign ? zB < 0 ? -1 : 1 : zB < 0 ? 1 : -1
        }, UB.prototype.compareTo = UB.prototype.compare, aB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var jB = this.value,
            zB = vB(BB).value;
          return jB === zB ? 0 : jB > zB ? 1 : -1
        }, aB.prototype.compareTo = aB.prototype.compare, uB.prototype.equals = function(BB) {
          return 0 === this.compare(BB)
        }, aB.prototype.eq = aB.prototype.equals = UB.prototype.eq = UB.prototype.equals = uB.prototype.eq = uB.prototype.equals, uB.prototype.notEquals = function(BB) {
          return 0 !== this.compare(BB)
        }, aB.prototype.neq = aB.prototype.notEquals = UB.prototype.neq = UB.prototype.notEquals = uB.prototype.neq = uB.prototype.notEquals, uB.prototype.greater = function(BB) {
          return this.compare(BB) > 0
        }, aB.prototype.gt = aB.prototype.greater = UB.prototype.gt = UB.prototype.greater = uB.prototype.gt = uB.prototype.greater, uB.prototype.lesser = function(BB) {
          return this.compare(BB) < 0
        }, aB.prototype.lt = aB.prototype.lesser = UB.prototype.lt = UB.prototype.lesser = uB.prototype.lt = uB.prototype.lesser, uB.prototype.greaterOrEquals = function(BB) {
          return this.compare(BB) >= 0
        }, aB.prototype.geq = aB.prototype.greaterOrEquals = UB.prototype.geq = UB.prototype.greaterOrEquals = uB.prototype.geq = uB.prototype.greaterOrEquals, uB.prototype.lesserOrEquals = function(BB) {
          return this.compare(BB) <= 0
        }, aB.prototype.leq = aB.prototype.lesserOrEquals = UB.prototype.leq = UB.prototype.lesserOrEquals = uB.prototype.leq = uB.prototype.lesserOrEquals, uB.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, UB.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, aB.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, uB.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, UB.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, aB.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, uB.prototype.isPositive = function() {
          return !this.sign
        }, UB.prototype.isPositive = function() {
          return this.value > 0
        }, aB.prototype.isPositive = UB.prototype.isPositive, uB.prototype.isNegative = function() {
          return this.sign
        }, UB.prototype.isNegative = function() {
          return this.value < 0
        }, aB.prototype.isNegative = UB.prototype.isNegative, uB.prototype.isUnit = function() {
          return !1
        }, UB.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, aB.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, uB.prototype.isZero = function() {
          return !1
        }, UB.prototype.isZero = function() {
          return 0 === this.value
        }, aB.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, uB.prototype.isDivisibleBy = function(BB) {
          var jB = vB(BB);
          return !jB.isZero() && (!!jB.isUnit() || (0 === jB.compareAbs(2) ? this.isEven() : this.mod(jB).isZero()))
        }, aB.prototype.isDivisibleBy = UB.prototype.isDivisibleBy = uB.prototype.isDivisibleBy, uB.prototype.isPrime = function(zB) {
          var QB = FB(this);
          if (QB !== BB) return QB;
          var nB = this.abs(),
            dB = nB.bitLength();
          if (dB <= 64) return YB(nB, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var IB = Math.log(2) * dB.toJSNumber(), NB = Math.ceil(!0 === zB ? 2 * Math.pow(IB, 2) : IB), uB = [], UB = 0; UB < NB; UB++) uB.push(jB(UB + 2));
          return YB(nB, uB)
        }, aB.prototype.isPrime = UB.prototype.isPrime = uB.prototype.isPrime, uB.prototype.isProbablePrime = function(zB, QB) {
          var nB = FB(this);
          if (nB !== BB) return nB;
          for (var dB = this.abs(), IB = zB === BB ? 5 : zB, NB = [], uB = 0; uB < IB; uB++) NB.push(jB.randBetween(2, dB.minus(2), QB));
          return YB(dB, NB)
        }, aB.prototype.isProbablePrime = UB.prototype.isProbablePrime = uB.prototype.isProbablePrime, uB.prototype.modInv = function(BB) {
          for (var zB, QB, nB, dB = jB.zero, IB = jB.one, NB = vB(BB), uB = this.abs(); !uB.isZero();) zB = NB.divide(uB), QB = dB, nB = NB, dB = IB, NB = uB, IB = QB.subtract(zB.multiply(IB)), uB = nB.subtract(zB.multiply(uB));
          if (!NB.isUnit()) throw new Error(this.toString() + " and " + BB.toString() + " are not co-prime");
          return -1 === dB.compare(0) && (dB = dB.add(BB)), this.isNegative() ? dB.bu() : dB
        }, aB.prototype.modInv = UB.prototype.modInv = uB.prototype.modInv, uB.prototype.next = function() {
          var BB = this.value;
          return this.sign ? tB(BB, 1, this.sign) : new uB(LB(BB, 1), this.sign)
        }, UB.prototype.next = function() {
          var BB = this.value;
          return BB + 1 < QB ? new UB(BB + 1) : new uB(nB, !1)
        }, aB.prototype.next = function() {
          return new aB(this.value + BigInt(1))
        }, uB.prototype.prev = function() {
          var BB = this.value;
          return this.sign ? new uB(LB(BB, 1), !0) : tB(BB, 1, this.sign)
        }, UB.prototype.prev = function() {
          var BB = this.value;
          return BB - 1 > -QB ? new UB(BB - 1) : new uB(nB, !0)
        }, aB.prototype.prev = function() {
          return new aB(this.value - BigInt(1))
        };
        for (var VB = [1]; 2 * VB[VB.length - 1] <= zB;) VB.push(2 * VB[VB.length - 1]);
        var hB = VB.length,
          XB = VB[hB - 1];

        function ZB(BB) {
          return Math.abs(BB) <= zB
        }

        function AB(BB, zB, QB) {
          zB = vB(zB);
          for (var nB = BB.isNegative(), dB = zB.isNegative(), IB = nB ? BB.not() : BB, NB = dB ? zB.not() : zB, uB = 0, UB = 0, aB = null, pB = null, rB = []; !IB.isZero() || !NB.isZero();) uB = (aB = HB(IB, XB))[1].toJSNumber(), nB && (uB = XB - 1 - uB), UB = (pB = HB(NB, XB))[1].toJSNumber(), dB && (UB = XB - 1 - UB), IB = aB[0], NB = pB[0], rB.push(QB(uB, UB));
          for (var sB = 0 !== QB(nB ? 1 : 0, dB ? 1 : 0) ? jB(-1) : jB(0), JB = rB.length - 1; JB >= 0; JB -= 1) sB = sB.multiply(XB).add(jB(rB[JB]));
          return sB
        }
        uB.prototype.shiftLeft = function(BB) {
          var jB = vB(BB).toJSNumber();
          if (!ZB(jB)) throw new Error(String(jB) + " is too large for shifting.");
          if (jB < 0) return this.shiftRight(-jB);
          var zB = this;
          if (zB.isZero()) return zB;
          for (; jB >= hB;) zB = zB.multiply(XB), jB -= hB - 1;
          return zB.multiply(VB[jB])
        }, aB.prototype.shiftLeft = UB.prototype.shiftLeft = uB.prototype.shiftLeft, uB.prototype.shiftRight = function(BB) {
          var jB, zB = vB(BB).toJSNumber();
          if (!ZB(zB)) throw new Error(String(zB) + " is too large for shifting.");
          if (zB < 0) return this.shiftLeft(-zB);
          for (var QB = this; zB >= hB;) {
            if (QB.isZero() || QB.isNegative() && QB.isUnit()) return QB;
            QB = (jB = HB(QB, XB))[1].isNegative() ? jB[0].prev() : jB[0], zB -= hB - 1
          }
          return (jB = HB(QB, VB[zB]))[1].isNegative() ? jB[0].prev() : jB[0]
        }, aB.prototype.shiftRight = UB.prototype.shiftRight = uB.prototype.shiftRight, uB.prototype.not = function() {
          return this.bu().prev()
        }, aB.prototype.not = UB.prototype.not = uB.prototype.not, uB.prototype.and = function(BB) {
          return AB(this, BB, (function(BB, jB) {
            return BB & jB
          }))
        }, aB.prototype.and = UB.prototype.and = uB.prototype.and, uB.prototype.or = function(BB) {
          return AB(this, BB, (function(BB, jB) {
            return BB | jB
          }))
        }, aB.prototype.or = UB.prototype.or = uB.prototype.or, uB.prototype.xor = function(BB) {
          return AB(this, BB, (function(BB, jB) {
            return BB ^ jB
          }))
        }, aB.prototype.xor = UB.prototype.xor = uB.prototype.xor;
        var TB = 1 << 30;

        function PB(BB) {
          var jB = BB.value,
            QB = "number" === typeof jB ? jB | TB : "bigint" === typeof jB ? jB | BigInt(TB) : jB[0] + jB[1] * zB | 1073758208;
          return QB & -QB
        }

        function WB(BB, zB) {
          if (zB.compareTo(BB) <= 0) {
            var QB = WB(BB, zB.square(zB)),
              nB = QB.p,
              dB = QB.e,
              IB = nB.multiply(zB);
            return IB.compareTo(BB) <= 0 ? {
              p: IB,
              e: 2 * dB + 1
            } : {
              p: nB,
              e: 2 * dB
            }
          }
          return {
            p: jB(1),
            e: 0
          }
        }

        function eB(BB, jB) {
          return BB = vB(BB), jB = vB(jB), BB.greater(jB) ? BB : jB
        }

        function lB(BB, jB) {
          return BB = vB(BB), jB = vB(jB), BB.lesser(jB) ? BB : jB
        }

        function wB(BB, jB) {
          if (BB = vB(BB).abs(), jB = vB(jB).abs(), BB.equals(jB)) return BB;
          if (BB.isZero()) return jB;
          if (jB.isZero()) return BB;
          for (var zB, QB, nB = NB[1]; BB.isEven() && jB.isEven();) zB = lB(PB(BB), PB(jB)), BB = BB.divide(zB), jB = jB.divide(zB), nB = nB.multiply(zB);
          for (; BB.isEven();) BB = BB.divide(PB(BB));
          do {
            for (; jB.isEven();) jB = jB.divide(PB(jB));
            BB.greater(jB) && (QB = jB, jB = BB, BB = QB), jB = jB.subtract(BB)
          } while (!jB.isZero());
          return nB.isUnit() ? BB : BB.multiply(nB)
        }
        uB.prototype.bitLength = function() {
          var BB = this;
          return BB.compareTo(jB(0)) < 0 && (BB = BB.bu().subtract(jB(1))), 0 === BB.compareTo(jB(0)) ? jB(0) : jB(WB(BB, jB(2)).e).add(jB(1))
        }, aB.prototype.bitLength = UB.prototype.bitLength = uB.prototype.bitLength;
        var xB = function(BB, jB, zB, QB) {
          zB = zB || dB, BB = String(BB), QB || (BB = BB.toLowerCase(), zB = zB.toLowerCase());
          var nB, IB = BB.length,
            NB = Math.abs(jB),
            uB = {};
          for (nB = 0; nB < zB.length; nB++) uB[zB[nB]] = nB;
          for (nB = 0; nB < IB; nB++) {
            if ("-" !== (pB = BB[nB]) && (pB in uB && uB[pB] >= NB)) {
              if ("1" === pB && 1 === NB) continue;
              throw new Error(pB + " is not a valid digit in base " + jB + ".")
            }
          }
          jB = vB(jB);
          var UB = [],
            aB = "-" === BB[0];
          for (nB = aB ? 1 : 0; nB < BB.length; nB++) {
            var pB;
            if ((pB = BB[nB]) in uB) UB.push(vB(uB[pB]));
            else {
              if ("<" !== pB) throw new Error(pB + " is not a valid character");
              var rB = nB;
              do {
                nB++
              } while (">" !== BB[nB] && nB < BB.length);
              UB.push(vB(BB.slice(rB + 1, nB)))
            }
          }
          return KB(UB, jB, aB)
        };

        function KB(BB, jB, zB) {
          var QB, nB = NB[0],
            dB = NB[1];
          for (QB = BB.length - 1; QB >= 0; QB--) nB = nB.add(BB[QB].times(dB)), dB = dB.times(jB);
          return zB ? nB.bu() : nB
        }

        function CB(BB, zB) {
          if ((zB = jB(zB)).isZero()) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (zB.equals(-1)) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (BB.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-BB.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var QB = Array.apply(null, Array(BB.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return QB.unshift([1]), {
              value: [].concat.apply([], QB),
              isNegative: !1
            }
          }
          var nB = !1;
          if (BB.isNegative() && zB.isPositive() && (nB = !0, BB = BB.abs()), zB.isUnit()) return BB.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(BB.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: nB
          };
          for (var dB, IB = [], NB = BB; NB.isNegative() || NB.compareAbs(zB) >= 0;) {
            dB = NB.divmod(zB), NB = dB.quotient;
            var uB = dB.remainder;
            uB.isNegative() && (uB = zB.minus(uB).abs(), NB = NB.next()), IB.push(uB.toJSNumber())
          }
          return IB.push(NB.toJSNumber()), {
            value: IB.reverse(),
            isNegative: nB
          }
        }

        function cB(BB, jB, zB) {
          var QB = CB(BB, jB);
          return (QB.isNegative ? "-" : "") + QB.value.map((function(BB) {
            return function(BB, jB) {
              return BB < (jB = jB || dB).length ? jB[BB] : "<" + BB + ">"
            }(BB, zB)
          })).join("")
        }

        function bB(BB) {
          if (pB(+BB)) {
            var jB = +BB;
            if (jB === yB(jB)) return IB ? new aB(BigInt(jB)) : new UB(jB);
            throw new Error("Invalid integer: " + BB)
          }
          var zB = "-" === BB[0];
          zB && (BB = BB.slice(1));
          var QB = BB.split(/e/i);
          if (QB.length > 2) throw new Error("Invalid integer: " + QB.join("e"));
          if (2 === QB.length) {
            var nB = QB[1];
            if ("+" === nB[0] && (nB = nB.slice(1)), (nB = +nB) !== yB(nB) || !pB(nB)) throw new Error("Invalid integer: " + nB + " is not a valid exponent.");
            var dB = QB[0],
              NB = dB.indexOf(".");
            if (NB >= 0 && (nB -= dB.length - NB - 1, dB = dB.slice(0, NB) + dB.slice(NB + 1)), nB < 0) throw new Error("Cannot include negative exponent part for integers");
            BB = dB += new Array(nB + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(BB)) throw new Error("Invalid integer: " + BB);
          if (IB) return new aB(BigInt(zB ? "-" + BB : BB));
          for (var rB = [], sB = BB.length, mB = sB - 7; sB > 0;) rB.push(+BB.slice(mB, sB)), (mB -= 7) < 0 && (mB = 0), sB -= 7;
          return JB(rB), new uB(rB, zB)
        }

        function vB(BB) {
          return "number" === typeof BB ? function(BB) {
            if (IB) return new aB(BigInt(BB));
            if (pB(BB)) {
              if (BB !== yB(BB)) throw new Error(BB + " is not an integer.");
              return new UB(BB)
            }
            return bB(BB.toString())
          }(BB) : "string" === typeof BB ? bB(BB) : "bigint" === typeof BB ? new aB(BB) : BB
        }
        uB.prototype.toArray = function(BB) {
          return CB(this, BB)
        }, UB.prototype.toArray = function(BB) {
          return CB(this, BB)
        }, aB.prototype.toArray = function(BB) {
          return CB(this, BB)
        }, uB.prototype.toString = function(jB, zB) {
          if (jB === BB && (jB = 10), 10 !== jB) return cB(this, jB, zB);
          for (var QB, nB = this.value, dB = nB.length, IB = String(nB[--dB]); --dB >= 0;) QB = String(nB[dB]), IB += "0000000".slice(QB.length) + QB;
          return (this.sign ? "-" : "") + IB
        }, UB.prototype.toString = function(jB, zB) {
          return jB === BB && (jB = 10), 10 != jB ? cB(this, jB, zB) : String(this.value)
        }, aB.prototype.toString = UB.prototype.toString, aB.prototype.toJSON = uB.prototype.toJSON = UB.prototype.toJSON = function() {
          return this.toString()
        }, uB.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, uB.prototype.toJSNumber = uB.prototype.valueOf, UB.prototype.valueOf = function() {
          return this.value
        }, UB.prototype.toJSNumber = UB.prototype.valueOf, aB.prototype.valueOf = aB.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var RB = 0; RB < 1e3; RB++) NB[RB] = vB(RB), RB > 0 && (NB[-RB] = vB(-RB));
        return NB.one = NB[1], NB.zero = NB[0], NB.minusOne = NB[-1], NB.max = eB, NB.min = lB, NB.gcd = wB, NB.lcm = function(BB, jB) {
          return BB = vB(BB).abs(), jB = vB(jB).abs(), BB.divide(wB(BB, jB)).multiply(jB)
        }, NB.isInstance = function(BB) {
          return BB instanceof uB || BB instanceof UB || BB instanceof aB
        }, NB.randBetween = function(BB, jB, QB) {
          BB = vB(BB), jB = vB(jB);
          var nB = QB || Math.random,
            dB = lB(BB, jB),
            IB = eB(BB, jB).subtract(dB).add(1);
          if (IB.isSmall) return dB.add(Math.floor(nB() * IB));
          for (var uB = CB(IB, zB).value, UB = [], aB = !0, pB = 0; pB < uB.length; pB++) {
            var rB = aB ? uB[pB] : zB,
              sB = yB(nB() * rB);
            UB.push(sB), sB < rB && (aB = !1)
          }
          return dB.add(NB.ljB(UB, zB, !1))
        }, NB.ljB = function(BB, jB, zB) {
          return KB(BB.map(vB), vB(jB || 10), zB)
        }, NB
      }();
      BB.hasOwnProperty("exports") && (BB.exports = jB)
    }(Gz);
    var Lz = dB(Gz.exports);

    function gz(BB, jB, zB) {
      let QB = 0;
      for (let nB = 0; nB < zB; nB++) {
        const zB = BB[jB + nB];
        if (void 0 === zB) break;
        QB += zB * 16 ** nB
      }
      return QB
    }

    function tz(BB) {
      const jB = [];
      for (let zB = 0; zB < BB.length; zB++) {
        let QB = Number(BB[zB]);
        for (let BB = 0; QB || BB < jB.length; BB++) QB += 10 * (jB[BB] || 0), jB[BB] = QB % 16, QB = (QB - jB[BB]) / 16
      }
      return jB
    }
    class Sz {
      static fromString(BB) {
        return new Sz(function(BB) {
          const jB = tz(BB),
            zB = Array(4);
          for (let QB = 0; QB < 4; QB++) zB[3 - QB] = gz(jB, 4 * QB, 4);
          return zB
        }(BB), BB)
      }
      static fromBit(BB) {
        const jB = Array(4),
          zB = Math.floor(BB / 16);
        for (let QB = 0; QB < 4; QB++) jB[3 - QB] = QB === zB ? 1 << BB - 16 * zB : 0;
        return new Sz(jB)
      }
      constructor(BB, jB) {
        this.parts = BB, this.str = jB
      }
      and(BB) {
        let {
          parts: jB
        } = BB;
        return new Sz(this.parts.map(((BB, zB) => BB & jB[zB])))
      }
      or(BB) {
        let {
          parts: jB
        } = BB;
        return new Sz(this.parts.map(((BB, zB) => BB | jB[zB])))
      }
      xor(BB) {
        let {
          parts: jB
        } = BB;
        return new Sz(this.parts.map(((BB, zB) => BB ^ jB[zB])))
      }
      not() {
        return new Sz(this.parts.map((BB => ~BB)))
      }
      equals(BB) {
        let {
          parts: jB
        } = BB;
        return this.parts.every(((BB, zB) => BB === jB[zB]))
      }
      toString() {
        if (null != this.str) return this.str;
        const BB = new Array(16);
        return this.parts.forEach(((jB, zB) => {
          const QB = tz(jB.toString());
          for (let nB = 0; nB < 4; nB++) BB[nB + 4 * zB] = QB[3 - nB] || 0
        })), this.str = Lz.ljB(BB, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Mz = function() {
      try {
        return BigInt, !0
      } catch (BB) {
        return !1
      }
    }();
    Mz && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Ez = {},
      iz = Mz ? function(BB) {
        return BigInt(BB)
      } : function(BB) {
        return BB instanceof Sz ? BB : ("number" === typeof BB && (BB = BB.toString()), null != Ez[BB] || (Ez[BB] = Sz.fromString(BB)), Ez[BB])
      },
      qz = iz(0),
      fz = Mz ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz).and(BB)
      },
      oz = Mz ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz).or(BB)
      },
      Hz = Mz ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qz;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz).xor(BB)
      },
      Dz = Mz ? function(BB, jB) {
        return BB === jB
      } : function(BB, jB) {
        return null == BB || null == jB ? BB == jB : BB.equals(jB)
      };
    var Fz, Yz, Vz, hz, Xz = {
      combine: function() {
        let BB = arguments.length <= 0 ? void 0 : arguments[0];
        for (let jB = 1; jB < arguments.length; jB++) BB = oz(BB, jB < 0 || arguments.length <= jB ? void 0 : arguments[jB]);
        return BB
      },
      add: function(BB, jB) {
        return jB === qz ? BB : oz(BB, jB)
      },
      remove: function(BB, jB) {
        return jB === qz ? BB : Hz(BB, fz(BB, jB))
      },
      filter: fz,
      invert: Mz ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qz).not()
      },
      has: function(BB, jB) {
        return Dz(fz(BB, jB), jB)
      },
      hasAny: function(BB, jB) {
        return !Dz(fz(BB, jB), qz)
      },
      equals: Dz,
      deserialize: iz,
      getFlag: Mz ? function(BB) {
        return BigInt(1) << BigInt(BB)
      } : function(BB) {
        return Sz.fromBit(BB)
      }
    };
    ! function(BB) {
      BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Fz || (Fz = {})),
    function(BB) {
      BB[BB.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", BB[BB.INVALID_COMMAND = 4002] = "INVALID_COMMAND", BB[BB.INVALID_EVENT = 4004] = "INVALID_EVENT", BB[BB.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Yz || (Yz = {})),
    function(BB) {
      BB.LANDSCAPE = "landscape", BB.PORTRAIT = "portrait"
    }(Vz || (Vz = {})),
    function(BB) {
      BB.MOBILE = "mobile", BB.DESKTOP = "desktop"
    }(hz || (hz = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Xz.getFlag(0),
      ADMINISTRATOR: Xz.getFlag(3)
    });

    function Zz(BB) {
      return sz((jB => {
        var zB;
        const [QB] = null !== (zB = Object.entries(BB).find((BB => {
          let [, zB] = BB;
          return zB === jB
        }))) && void 0 !== zB ? zB : [];
        return null != jB && void 0 === QB ? BB.UNHANDLED : jB
      }), Vj().or(hj()))
    }
    const Az = kz.object({
        image_url: kz.string()
      }),
      Tz = kz.object({
        mediaUrl: kz.string().max(1024)
      }),
      Pz = kz.object({
        access_token: kz.union([kz.string(), kz.null()]).optional()
      }),
      Wz = kz.object({
        access_token: kz.string(),
        user: kz.object({
          username: kz.string(),
          discriminator: kz.string(),
          id: kz.string(),
          avatar: kz.union([kz.string(), kz.null()]).optional(),
          public_flags: kz.number(),
          global_name: kz.union([kz.string(), kz.null()]).optional()
        }),
        scopes: kz.array(function(BB) {
          const jB = Dj().transform((jB => {
            const zB = BB.safeParse(jB);
            return zB.success ? zB.data : BB._def.defaultValue()
          }));
          return jB.overlayType = BB, jB
        }(kz.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(kz.literal(-1)).default(-1))),
        expires: kz.string(),
        application: kz.object({
          description: kz.string(),
          icon: kz.union([kz.string(), kz.null()]).optional(),
          id: kz.string(),
          rpc_origins: kz.array(kz.string()).optional(),
          name: kz.string()
        })
      }),
      ez = kz.object({
        participants: kz.array(kz.object({
          id: kz.string(),
          username: kz.string(),
          global_name: kz.union([kz.string(), kz.null()]).optional(),
          discriminator: kz.string(),
          avatar: kz.union([kz.string(), kz.null()]).optional(),
          flags: kz.number(),
          bot: kz.boolean(),
          avatar_decoration_data: kz.union([kz.object({
            asset: kz.string(),
            skuId: kz.string().optional()
          }), kz.null()]).optional(),
          premium_type: kz.union([kz.number(), kz.null()]).optional(),
          nickname: kz.string().optional()
        }))
      });
    var lz;
    ! function(BB) {
      BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(lz || (lz = {}));
    const wz = kz.object({}).optional().nullable(),
      xz = kz.void(),
      Kz = {
        [lz.INITIATE_IMAGE_UPLOAD]: {
          request: xz,
          response: Az
        },
        [lz.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Tz,
          response: wz
        },
        [lz.AUTHENTICATE]: {
          request: Pz,
          response: Wz
        },
        [lz.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: xz,
          response: ez
        }
      },
      Cz = "DISPATCH";
    var cz;
    ! function(BB) {
      BB.AUTHORIZE = "AUTHORIZE", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_GUILDS = "GET_GUILDS", BB.GET_GUILD = "GET_GUILD", BB.GET_CHANNEL = "GET_CHANNEL", BB.GET_CHANNELS = "GET_CHANNELS", BB.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", BB.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", BB.SUBSCRIBE = "SUBSCRIBE", BB.UNSUBSCRIBE = "UNSUBSCRIBE", BB.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", BB.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", BB.SET_ACTIVITY = "SET_ACTIVITY", BB.GET_SKUS = "GET_SKUS", BB.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", BB.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", BB.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", BB.START_PURCHASE = "START_PURCHASE", BB.SET_CONFIG = "SET_CONFIG", BB.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", BB.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", BB.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", BB.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", BB.CAPTURE_LOG = "CAPTURE_LOG", BB.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", BB.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", BB.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", BB.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(cz || (cz = {}));
    const bz = cj({
        cmd: Vj(),
        data: wj(),
        evt: ej(),
        nonce: Vj()
      }).passthrough(),
      vz = (Zz(Object.assign(Object.assign({}, Wz.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), cj({
        id: Vj(),
        username: Vj(),
        discriminator: Vj(),
        global_name: Vj().optional().nullable(),
        avatar: Vj().optional().nullable(),
        avatar_decoration_data: cj({
          asset: Vj(),
          sku_id: Vj().optional()
        }).nullable(),
        bot: Aj(),
        flags: hj().optional().nullable(),
        premium_type: hj().optional().nullable()
      })),
      Rz = cj({
        user: vz,
        nick: Vj().optional().nullable(),
        roles: Cj(Vj()),
        joined_at: Vj(),
        deaf: Aj(),
        mute: Aj()
      }),
      Oz = cj({
        id: Vj(),
        name: Vj().optional().nullable(),
        roles: Cj(Vj()).optional().nullable(),
        user: vz.optional().nullable(),
        require_colons: Aj().optional().nullable(),
        managed: Aj().optional().nullable(),
        animated: Aj().optional().nullable(),
        available: Aj().optional().nullable()
      }),
      BQ = cj({
        mute: Aj(),
        deaf: Aj(),
        self_mute: Aj(),
        self_deaf: Aj(),
        suppress: Aj()
      }),
      jQ = cj({
        mute: Aj(),
        nick: Vj(),
        user: vz,
        voice_state: BQ,
        volume: hj()
      }),
      zQ = Zz({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      QQ = cj({
        name: Vj(),
        type: hj(),
        url: Vj().optional().nullable(),
        created_at: hj().optional().nullable(),
        timestamps: cj({
          start: hj(),
          end: hj()
        }).partial().optional().nullable(),
        application_id: Vj().optional().nullable(),
        details: Vj().optional().nullable(),
        state: Vj().optional().nullable(),
        emoji: Oz.optional().nullable(),
        party: cj({
          id: Vj().optional().nullable(),
          size: Cj(hj()).optional().nullable()
        }).optional().nullable(),
        assets: cj({
          large_image: Vj().nullable(),
          large_text: Vj().nullable(),
          small_image: Vj().nullable(),
          small_text: Vj().nullable()
        }).partial().optional().nullable(),
        secrets: cj({
          join: Vj(),
          match: Vj()
        }).partial().optional().nullable(),
        instance: Aj().optional().nullable(),
        flags: hj().optional().nullable()
      }),
      nQ = cj({
        id: Vj(),
        type: Zz({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Vj(),
        deny: Vj()
      }),
      dQ = {
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
      IQ = cj({
        id: Vj(),
        type: Zz(dQ),
        guild_id: Vj().optional().nullable(),
        position: hj().optional().nullable(),
        permission_overwrites: Cj(nQ).optional().nullable(),
        name: Vj().optional().nullable(),
        topic: Vj().optional().nullable(),
        nsfw: Aj().optional().nullable(),
        last_message_id: Vj().optional().nullable(),
        bitrate: hj().optional().nullable(),
        user_limit: hj().optional().nullable(),
        rate_limit_per_user: hj().optional().nullable(),
        recipients: Cj(vz).optional().nullable(),
        icon: Vj().optional().nullable(),
        owner_id: Vj().optional().nullable(),
        application_id: Vj().optional().nullable(),
        parent_id: Vj().optional().nullable(),
        last_pin_timestamp: Vj().optional().nullable()
      }),
      NQ = cj({
        user: vz,
        guild_id: Vj(),
        status: zQ,
        activities: Cj(QQ),
        client_status: cj({
          desktop: zQ,
          mobile: zQ,
          web: zQ
        }).partial()
      }),
      uQ = cj({
        id: Vj(),
        name: Vj(),
        color: hj(),
        hoist: Aj(),
        position: hj(),
        permissions: Vj(),
        managed: Aj(),
        mentionable: Aj()
      }),
      UQ = (cj({
        id: Vj(),
        name: Vj(),
        owner_id: Vj(),
        icon: Vj().nullable(),
        icon_hash: Vj().optional().nullable(),
        splash: Vj().nullable(),
        discovery_splash: Vj().nullable(),
        owner: Aj().optional().nullable(),
        permissions: Vj().optional().nullable(),
        region: Vj(),
        afk_channel_id: Vj().nullable(),
        afk_timeout: hj(),
        widget_enabled: Aj().optional().nullable(),
        widget_channel_id: Vj().optional().nullable(),
        verification_level: hj(),
        default_message_notifications: hj(),
        explicit_content_filter: hj(),
        roles: Cj(uQ),
        emojis: Cj(Oz),
        features: Cj(Vj()),
        mfa_level: hj(),
        application_id: Vj().nullable(),
        system_channel_id: Vj().nullable(),
        system_channel_flags: hj(),
        rules_channel_id: Vj().nullable(),
        joined_at: Vj().optional().nullable(),
        large: Aj().optional().nullable(),
        unavailable: Aj().optional().nullable(),
        member_count: hj().optional().nullable(),
        voice_states: Cj(BQ).optional().nullable(),
        members: Cj(Rz).optional().nullable(),
        channels: Cj(IQ).optional().nullable(),
        presences: Cj(NQ).optional().nullable(),
        max_presences: hj().optional().nullable(),
        max_members: hj().optional().nullable(),
        vanity_url_code: Vj().nullable(),
        description: Vj().nullable(),
        banner: Vj().nullable(),
        premium_tier: hj(),
        premium_subscription_count: hj().optional().nullable(),
        preferred_locale: Vj(),
        public_updates_channel_id: Vj().nullable(),
        max_video_channel_users: hj().optional().nullable(),
        approximate_member_count: hj().optional().nullable(),
        approximate_presence_count: hj().optional().nullable()
      }), cj({
        id: Vj(),
        guild_id: Vj(),
        type: hj(),
        name: Vj()
      })),
      aQ = cj({
        id: Vj(),
        filename: Vj(),
        size: hj(),
        url: Vj(),
        proxy_url: Vj(),
        height: hj().optional().nullable(),
        width: hj().optional().nullable()
      }),
      pQ = cj({
        text: Vj(),
        icon_url: Vj().optional().nullable(),
        proxy_icon_url: Vj().optional().nullable()
      }),
      rQ = cj({
        url: Vj().optional().nullable(),
        proxy_url: Vj().optional().nullable(),
        height: hj().optional().nullable(),
        width: hj().optional().nullable()
      }),
      sQ = rQ.omit({
        proxy_url: !0
      }),
      JQ = cj({
        name: Vj().optional().nullable(),
        url: Vj().optional().nullable()
      }),
      mQ = cj({
        name: Vj().optional().nullable(),
        url: Vj().optional().nullable(),
        icon_url: Vj().optional().nullable(),
        proxy_icon_url: Vj().optional().nullable()
      }),
      yQ = cj({
        name: Vj(),
        value: Vj(),
        inline: Aj()
      }),
      kQ = cj({
        title: Vj().optional().nullable(),
        type: Vj().optional().nullable(),
        description: Vj().optional().nullable(),
        url: Vj().optional().nullable(),
        timestamp: Vj().optional().nullable(),
        color: hj().optional().nullable(),
        footer: pQ.optional().nullable(),
        image: rQ.optional().nullable(),
        thumbnail: rQ.optional().nullable(),
        video: sQ.optional().nullable(),
        provider: JQ.optional().nullable(),
        author: mQ.optional().nullable(),
        fields: Cj(yQ).optional().nullable()
      }),
      GQ = cj({
        count: hj(),
        me: Aj(),
        emoji: Oz
      }),
      LQ = cj({
        type: hj(),
        party_id: Vj().optional().nullable()
      }),
      gQ = cj({
        id: Vj(),
        cover_image: Vj().optional().nullable(),
        description: Vj(),
        icon: Vj().optional().nullable(),
        name: Vj()
      }),
      tQ = cj({
        message_id: Vj().optional().nullable(),
        channel_id: Vj().optional().nullable(),
        guild_id: Vj().optional().nullable()
      }),
      SQ = cj({
        id: Vj(),
        channel_id: Vj(),
        guild_id: Vj().optional().nullable(),
        author: vz.optional().nullable(),
        member: Rz.optional().nullable(),
        content: Vj(),
        timestamp: Vj(),
        edited_timestamp: Vj().optional().nullable(),
        tts: Aj(),
        mention_everyone: Aj(),
        mentions: Cj(vz),
        mention_roles: Cj(Vj()),
        mention_channels: Cj(UQ),
        attachments: Cj(aQ),
        embeds: Cj(kQ),
        reactions: Cj(GQ).optional().nullable(),
        nonce: vj([Vj(), hj()]).optional().nullable(),
        pinned: Aj(),
        webhook_id: Vj().optional().nullable(),
        type: hj(),
        activity: LQ.optional().nullable(),
        application: gQ.optional().nullable(),
        message_reference: tQ.optional().nullable(),
        flags: hj().optional().nullable(),
        stickers: Cj(wj()).optional().nullable(),
        referenced_message: wj().optional().nullable()
      }),
      MQ = cj({
        id: Vj(),
        name: Vj()
      }),
      EQ = cj({
        type: Zz({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: hj(),
        name: Vj()
      }),
      iQ = cj({
        type: Zz({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Aj(),
        threshold: hj(),
        shortcut: Cj(EQ),
        delay: hj()
      }),
      qQ = cj({
        device_id: Vj(),
        volume: hj(),
        available_devices: Cj(MQ)
      }),
      fQ = (cj({
        type: Zz({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Vj(),
        vendor: cj({
          name: Vj(),
          url: Vj()
        }),
        model: cj({
          name: Vj(),
          url: Vj()
        }),
        related: Cj(Vj()),
        echo_cancellation: Aj().optional().nullable(),
        noise_suppression: Aj().optional().nullable(),
        automatic_gain_control: Aj().optional().nullable(),
        hardware_mute: Aj().optional().nullable()
      }), cj({
        id: Vj(),
        name: Vj(),
        type: Zz({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: cj({
          amount: hj(),
          currency: Vj()
        }),
        application_id: Vj(),
        flags: hj(),
        release_date: Vj().nullable()
      })),
      oQ = cj({
        id: Vj(),
        sku_id: Vj(),
        application_id: Vj(),
        user_id: Vj(),
        gift_code_flags: hj(),
        type: Zz({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Vj().optional().nullable(),
        branches: Cj(Vj()).optional().nullable(),
        starts_at: Vj().optional().nullable(),
        ends_at: Vj().optional().nullable(),
        parent_id: Vj().optional().nullable(),
        consumed: Aj().optional().nullable(),
        deleted: Aj().optional().nullable(),
        gift_code_batch_id: Vj().optional().nullable()
      }),
      HQ = (Zz({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Zz({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      DQ = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      FQ = (Zz(DQ), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      YQ = (Zz(FQ), "ERROR");
    var VQ;
    ! function(BB) {
      BB.READY = "READY", BB.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", BB.SPEAKING_START = "SPEAKING_START", BB.SPEAKING_STOP = "SPEAKING_STOP", BB.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", BB.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", BB.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", BB.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", BB.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", BB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(VQ || (VQ = {}));
    const hQ = bz.extend({
        evt: uz(VQ),
        nonce: Vj().nullable(),
        cmd: Iz(Cz),
        data: cj({}).passthrough()
      }),
      XQ = bz.extend({
        evt: Iz(YQ),
        data: cj({
          code: hj(),
          message: Vj().optional()
        }).passthrough(),
        cmd: uz(cz),
        nonce: Vj().nullable()
      }),
      ZQ = hQ.extend({
        evt: Vj()
      }),
      AQ = vj([hQ, ZQ, XQ]);
    const TQ = {
      [VQ.READY]: {
        payload: hQ.extend({
          evt: Iz(VQ.READY),
          data: cj({
            v: hj(),
            config: cj({
              cdn_host: Vj().optional(),
              api_endpoint: Vj(),
              environment: Vj()
            }),
            user: cj({
              id: Vj(),
              username: Vj(),
              discriminator: Vj(),
              avatar: Vj().optional()
            }).optional()
          })
        })
      },
      [VQ.VOICE_STATE_UPDATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.VOICE_STATE_UPDATE),
          data: jQ
        }),
        subscribeArgs: cj({
          channel_id: Vj()
        })
      },
      [VQ.SPEAKING_START]: {
        payload: hQ.extend({
          evt: Iz(VQ.SPEAKING_START),
          data: cj({
            lobby_id: Vj().optional(),
            channel_id: Vj().optional(),
            user_id: Vj()
          })
        }),
        subscribeArgs: cj({
          lobby_id: Vj().nullable().optional(),
          channel_id: Vj().nullable().optional()
        })
      },
      [VQ.SPEAKING_STOP]: {
        payload: hQ.extend({
          evt: Iz(VQ.SPEAKING_STOP),
          data: cj({
            lobby_id: Vj().optional(),
            channel_id: Vj().optional(),
            user_id: Vj()
          })
        }),
        subscribeArgs: cj({
          lobby_id: Vj().nullable().optional(),
          channel_id: Vj().nullable().optional()
        })
      },
      [VQ.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: cj({
            layout_mode: Zz(FQ)
          })
        })
      },
      [VQ.ORIENTATION_UPDATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.ORIENTATION_UPDATE),
          data: cj({
            screen_orientation: Zz(DQ),
            orientation: uz(Vz)
          })
        })
      },
      [VQ.CURRENT_USER_UPDATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.CURRENT_USER_UPDATE),
          data: vz
        })
      },
      [VQ.ENTITLEMENT_CREATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.ENTITLEMENT_CREATE),
          data: cj({
            entitlement: oQ
          })
        })
      },
      [VQ.THERMAL_STATE_UPDATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.THERMAL_STATE_UPDATE),
          data: cj({
            thermal_state: HQ
          })
        })
      },
      [VQ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: hQ.extend({
          evt: Iz(VQ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: cj({
            participants: ez.shape.participants
          })
        })
      }
    };
    const PQ = cj({}).nullable(),
      WQ = cj({
        code: Vj()
      }),
      eQ = cj({
        guilds: Cj(cj({
          id: Vj(),
          name: Vj()
        }))
      }),
      lQ = cj({
        id: Vj(),
        name: Vj(),
        icon_url: Vj().optional(),
        members: Cj(Rz)
      }),
      wQ = cj({
        id: Vj(),
        type: Zz(dQ),
        guild_id: Vj().optional().nullable(),
        name: Vj().optional().nullable(),
        topic: Vj().optional().nullable(),
        bitrate: hj().optional().nullable(),
        user_limit: hj().optional().nullable(),
        position: hj().optional().nullable(),
        voice_states: Cj(jQ),
        messages: Cj(SQ)
      }),
      xQ = cj({
        channels: Cj(IQ)
      }),
      KQ = (wQ.nullable(), wQ.nullable()),
      CQ = wQ.nullable(),
      cQ = (cj({
        input: qQ,
        output: qQ,
        mode: iQ,
        automatic_gain_control: Aj(),
        echo_cancellation: Aj(),
        noise_suppression: Aj(),
        qos: Aj(),
        silence_warning: Aj(),
        deaf: Aj(),
        mute: Aj()
      }), cj({
        evt: Vj()
      })),
      bQ = cj({
        shortcut: EQ
      }),
      vQ = QQ,
      RQ = cj({
        skus: Cj(fQ)
      }),
      OQ = cj({
        entitlements: Cj(oQ)
      }),
      Bn = Cj(oQ).nullable(),
      jn = cj({
        use_interactive_pip: Aj()
      }),
      zn = cj({
        locale: Vj()
      }),
      Qn = cj({
        enabled: Aj()
      }),
      nn = cj({
        permissions: Zj().or(Vj())
      }),
      dn = cj({
        iosKeyboardResizesView: pz(Aj())
      }),
      In = bz.extend({
        cmd: uz(cz),
        evt: ej()
      });

    function Nn(BB) {
      let {
        cmd: jB,
        data: zB
      } = BB;
      switch (jB) {
        case cz.AUTHORIZE:
          return WQ.parse(zB);
        case cz.CAPTURE_SHORTCUT:
          return bQ.parse(zB);
        case cz.ENCOURAGE_HW_ACCELERATION:
          return Qn.parse(zB);
        case cz.GET_CHANNEL:
          return wQ.parse(zB);
        case cz.GET_CHANNELS:
          return xQ.parse(zB);
        case cz.GET_CHANNEL_PERMISSIONS:
          return nn.parse(zB);
        case cz.GET_GUILD:
          return lQ.parse(zB);
        case cz.GET_GUILDS:
          return eQ.parse(zB);
        case cz.GET_PLATFORM_BEHAVIORS:
          return dn.parse(zB);
        case cz.GET_CHANNEL:
          return wQ.parse(zB);
        case cz.SELECT_TEXT_CHANNEL:
          return CQ.parse(zB);
        case cz.SELECT_VOICE_CHANNEL:
          return KQ.parse(zB);
        case cz.SET_ACTIVITY:
          return vQ.parse(zB);
        case cz.GET_SKUS_EMBEDDED:
          return RQ.parse(zB);
        case cz.GET_ENTITLEMENTS_EMBEDDED:
          return OQ.parse(zB);
        case cz.SET_CONFIG:
          return jn.parse(zB);
        case cz.START_PURCHASE:
          return Bn.parse(zB);
        case cz.SUBSCRIBE:
        case cz.UNSUBSCRIBE:
          return cQ.parse(zB);
        case cz.USER_SETTINGS_GET_LOCALE:
          return zn.parse(zB);
        case cz.OPEN_EXTERNAL_LINK:
        case cz.SET_ORIENTATION_LOCK_STATE:
        case cz.SET_CERTIFIED_DEVICES:
        case cz.SEND_ANALYTICS_EVENT:
        case cz.OPEN_INVITE_DIALOG:
        case cz.CAPTURE_LOG:
        case cz.GET_SKUS:
        case cz.GET_ENTITLEMENTS:
          return PQ.parse(zB);
        case cz.AUTHENTICATE:
        case cz.INITIATE_IMAGE_UPLOAD:
        case cz.OPEN_SHARE_MOMENT_DIALOG:
        case cz.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: BB
          } = Kz[jB];
          return BB.parse(zB);
        default:
          ! function(BB, jB) {
            throw jB
          }(0, new Error(`Unrecognized command ${jB}`))
      }
    }
    cj({
      frame_id: Vj(),
      platform: uz(hz).optional().nullable()
    }), cj({
      v: Iz(1),
      encoding: Iz("json").optional(),
      client_id: Vj(),
      frame_id: Vj()
    });
    const un = cj({
        code: hj(),
        message: Vj().optional()
      }),
      Un = cj({
        evt: Vj().nullable(),
        nonce: Vj().nullable(),
        data: wj().nullable(),
        cmd: Vj()
      }).passthrough();

    function an(BB) {
      const jB = Un.parse(BB);
      return null != jB.evt ? jB.evt === YQ ? XQ.parse(jB) : function(BB) {
        const jB = BB.evt;
        if (!(jB in VQ)) throw new Error(`Unrecognized event type ${BB.evt}`);
        return TQ[jB].payload.parse(BB)
      }(AQ.parse(jB)) : function(BB) {
        return Object.assign(Object.assign({}, BB), {
          data: Nn(BB)
        })
      }(In.passthrough().parse(jB))
    }

    function pn(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const nB = bz.extend({
        cmd: Iz(jB),
        data: zB
      });
      return async zB => {
        const dB = await BB({
          cmd: jB,
          args: zB,
          transfer: QB(zB)
        });
        return nB.parse(dB).data
      }
    }

    function rn(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const zB = Kz[BB].response,
        QB = bz.extend({
          cmd: Iz(BB),
          data: zB
        });
      return zB => async nB => {
        const dB = await zB({
          cmd: BB,
          args: nB,
          transfer: jB(nB)
        });
        return QB.parse(dB).data
      }
    }
    const sn = rn(lz.AUTHENTICATE),
      Jn = BB => pn(BB, cz.AUTHORIZE, WQ),
      mn = BB => pn(BB, cz.CAPTURE_LOG, PQ),
      yn = BB => pn(BB, cz.ENCOURAGE_HW_ACCELERATION, Qn),
      kn = BB => pn(BB, cz.GET_ENTITLEMENTS_EMBEDDED, OQ),
      Gn = BB => pn(BB, cz.GET_SKUS_EMBEDDED, RQ),
      Ln = BB => pn(BB, cz.GET_CHANNEL_PERMISSIONS, nn),
      gn = BB => pn(BB, cz.GET_PLATFORM_BEHAVIORS, dn),
      tn = BB => pn(BB, cz.OPEN_EXTERNAL_LINK, PQ),
      Sn = BB => pn(BB, cz.OPEN_INVITE_DIALOG, PQ),
      Mn = rn(lz.OPEN_SHARE_MOMENT_DIALOG);
    QQ.zs({
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
      type: QQ.shape.type.optional(),
      instance: QQ.shape.instance.optional()
    }).nullable();
    const En = BB => pn(BB, cz.SET_ACTIVITY, vQ),
      qn = BB => pn(BB, cz.SET_CONFIG, jn);
    const fn = BB => ({
        lock_state: BB.lock_state,
        picture_in_picture_lock_state: BB.picture_in_picture_lock_state
      }),
      Hn = BB => function(BB) {
        let {
          sendCommand: jB,
          cmd: zB,
          response: QB,
          fallbackTransform: nB,
          transferTransform: dB = () => {}
        } = BB;
        const IB = bz.extend({
          cmd: Iz(zB),
          data: QB
        });
        return async BB => {
          try {
            const QB = await jB({
              cmd: zB,
              args: BB,
              transfer: dB(BB)
            });
            return IB.parse(QB).data
          } catch (QB) {
            if (QB.code === Yz.INVALID_PAYLOAD) {
              const QB = nB(BB),
                NB = await jB({
                  cmd: zB,
                  args: QB,
                  transfer: dB(QB)
                });
              return IB.parse(NB).data
            }
            throw QB
          }
        }
      }({
        sendCommand: BB,
        cmd: cz.SET_ORIENTATION_LOCK_STATE,
        response: PQ,
        fallbackTransform: fn
      }),
      Dn = BB => pn(BB, cz.START_PURCHASE, Bn),
      Fn = BB => pn(BB, cz.USER_SETTINGS_GET_LOCALE, zn),
      Yn = rn(lz.INITIATE_IMAGE_UPLOAD),
      Vn = BB => pn(BB, cz.GET_CHANNEL, wQ),
      hn = rn(lz.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Xn = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Zn(BB) {
      return "string" === typeof BB && Xn.test(BB)
    }
    for (var An = [], Tn = 0; Tn < 256; ++Tn) An.push((Tn + 256).toString(16).substr(1));

    function Pn(BB) {
      var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = (An[BB[jB + 0]] + An[BB[jB + 1]] + An[BB[jB + 2]] + An[BB[jB + 3]] + "-" + An[BB[jB + 4]] + An[BB[jB + 5]] + "-" + An[BB[jB + 6]] + An[BB[jB + 7]] + "-" + An[BB[jB + 8]] + An[BB[jB + 9]] + "-" + An[BB[jB + 10]] + An[BB[jB + 11]] + An[BB[jB + 12]] + An[BB[jB + 13]] + An[BB[jB + 14]] + An[BB[jB + 15]]).toLowerCase();
      if (!Zn(zB)) throw TypeError("Stringified UUID is invalid");
      return zB
    }
    var Wn;

    function en(BB, jB, zB) {
      function QB(BB, QB, nB, dB) {
        if ("string" === typeof BB && (BB = function(BB) {
            BB = unescape(encodeURIComponent(BB));
            for (var jB = [], zB = 0; zB < BB.length; ++zB) jB.push(BB.charCodeAt(zB));
            return jB
          }(BB)), "string" === typeof QB && (QB = function(BB) {
            if (!Zn(BB)) throw TypeError("Invalid UUID");
            var jB, zB = new Uint8Array(16);
            return zB[0] = (jB = parseInt(BB.slice(0, 8), 16)) >>> 24, zB[1] = jB >>> 16 & 255, zB[2] = jB >>> 8 & 255, zB[3] = 255 & jB, zB[4] = (jB = parseInt(BB.slice(9, 13), 16)) >>> 8, zB[5] = 255 & jB, zB[6] = (jB = parseInt(BB.slice(14, 18), 16)) >>> 8, zB[7] = 255 & jB, zB[8] = (jB = parseInt(BB.slice(19, 23), 16)) >>> 8, zB[9] = 255 & jB, zB[10] = (jB = parseInt(BB.slice(24, 36), 16)) / 1099511627776 & 255, zB[11] = jB / 4294967296 & 255, zB[12] = jB >>> 24 & 255, zB[13] = jB >>> 16 & 255, zB[14] = jB >>> 8 & 255, zB[15] = 255 & jB, zB
          }(QB)), 16 !== QB.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var IB = new Uint8Array(16 + BB.length);
        if (IB.set(QB), IB.set(BB, QB.length), (IB = zB(IB))[6] = 15 & IB[6] | jB, IB[8] = 63 & IB[8] | 128, nB) {
          dB = dB || 0;
          for (var NB = 0; NB < 16; ++NB) nB[dB + NB] = IB[NB];
          return nB
        }
        return Pn(IB)
      }
      try {
        QB.name = BB
      } catch (nB) {}
      return QB.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", QB.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", QB
    }

    function wn(BB) {
      return 14 + (BB + 64 >>> 9 << 4) + 1
    }

    function xn(BB, jB) {
      var zB = (65535 & BB) + (65535 & jB);
      return (BB >> 16) + (jB >> 16) + (zB >> 16) << 16 | 65535 & zB
    }

    function Kn(BB, jB, zB, QB, nB, dB) {
      return xn((IB = xn(xn(jB, BB), xn(QB, dB))) << (NB = nB) | IB >>> 32 - NB, zB);
      var IB, NB
    }

    function Cn(BB, jB, zB, QB, nB, dB, IB) {
      return Kn(jB & zB | ~jB & QB, BB, jB, nB, dB, IB)
    }

    function cn(BB, jB, zB, QB, nB, dB, IB) {
      return Kn(jB & QB | zB & ~QB, BB, jB, nB, dB, IB)
    }

    function bn(BB, jB, zB, QB, nB, dB, IB) {
      return Kn(jB ^ zB ^ QB, BB, jB, nB, dB, IB)
    }

    function vn(BB, jB, zB, QB, nB, dB, IB) {
      return Kn(zB ^ (jB | ~QB), BB, jB, nB, dB, IB)
    }
    en("v3", 48, (function(BB) {
      if ("string" === typeof BB) {
        var jB = unescape(encodeURIComponent(BB));
        BB = new Uint8Array(jB.length);
        for (var zB = 0; zB < jB.length; ++zB) BB[zB] = jB.charCodeAt(zB)
      }
      return function(BB) {
        for (var jB = [], zB = 32 * BB.length, QB = "0123456789abcdef", nB = 0; nB < zB; nB += 8) {
          var dB = BB[nB >> 5] >>> nB % 32 & 255,
            IB = parseInt(QB.charAt(dB >>> 4 & 15) + QB.charAt(15 & dB), 16);
          jB.push(IB)
        }
        return jB
      }(function(BB, jB) {
        BB[jB >> 5] |= 128 << jB % 32, BB[wn(jB) - 1] = jB;
        for (var zB = 1732584193, QB = -271733879, nB = -1732584194, dB = 271733878, IB = 0; IB < BB.length; IB += 16) {
          var NB = zB,
            uB = QB,
            UB = nB,
            aB = dB;
          zB = Cn(zB, QB, nB, dB, BB[IB], 7, -680876936), dB = Cn(dB, zB, QB, nB, BB[IB + 1], 12, -389564586), nB = Cn(nB, dB, zB, QB, BB[IB + 2], 17, 606105819), QB = Cn(QB, nB, dB, zB, BB[IB + 3], 22, -1044525330), zB = Cn(zB, QB, nB, dB, BB[IB + 4], 7, -176418897), dB = Cn(dB, zB, QB, nB, BB[IB + 5], 12, 1200080426), nB = Cn(nB, dB, zB, QB, BB[IB + 6], 17, -1473231341), QB = Cn(QB, nB, dB, zB, BB[IB + 7], 22, -45705983), zB = Cn(zB, QB, nB, dB, BB[IB + 8], 7, 1770035416), dB = Cn(dB, zB, QB, nB, BB[IB + 9], 12, -1958414417), nB = Cn(nB, dB, zB, QB, BB[IB + 10], 17, -42063), QB = Cn(QB, nB, dB, zB, BB[IB + 11], 22, -1990404162), zB = Cn(zB, QB, nB, dB, BB[IB + 12], 7, 1804603682), dB = Cn(dB, zB, QB, nB, BB[IB + 13], 12, -40341101), nB = Cn(nB, dB, zB, QB, BB[IB + 14], 17, -1502002290), zB = cn(zB, QB = Cn(QB, nB, dB, zB, BB[IB + 15], 22, 1236535329), nB, dB, BB[IB + 1], 5, -165796510), dB = cn(dB, zB, QB, nB, BB[IB + 6], 9, -1069501632), nB = cn(nB, dB, zB, QB, BB[IB + 11], 14, 643717713), QB = cn(QB, nB, dB, zB, BB[IB], 20, -373897302), zB = cn(zB, QB, nB, dB, BB[IB + 5], 5, -701558691), dB = cn(dB, zB, QB, nB, BB[IB + 10], 9, 38016083), nB = cn(nB, dB, zB, QB, BB[IB + 15], 14, -660478335), QB = cn(QB, nB, dB, zB, BB[IB + 4], 20, -405537848), zB = cn(zB, QB, nB, dB, BB[IB + 9], 5, 568446438), dB = cn(dB, zB, QB, nB, BB[IB + 14], 9, -1019803690), nB = cn(nB, dB, zB, QB, BB[IB + 3], 14, -187363961), QB = cn(QB, nB, dB, zB, BB[IB + 8], 20, 1163531501), zB = cn(zB, QB, nB, dB, BB[IB + 13], 5, -1444681467), dB = cn(dB, zB, QB, nB, BB[IB + 2], 9, -51403784), nB = cn(nB, dB, zB, QB, BB[IB + 7], 14, 1735328473), zB = bn(zB, QB = cn(QB, nB, dB, zB, BB[IB + 12], 20, -1926607734), nB, dB, BB[IB + 5], 4, -378558), dB = bn(dB, zB, QB, nB, BB[IB + 8], 11, -2022574463), nB = bn(nB, dB, zB, QB, BB[IB + 11], 16, 1839030562), QB = bn(QB, nB, dB, zB, BB[IB + 14], 23, -35309556), zB = bn(zB, QB, nB, dB, BB[IB + 1], 4, -1530992060), dB = bn(dB, zB, QB, nB, BB[IB + 4], 11, 1272893353), nB = bn(nB, dB, zB, QB, BB[IB + 7], 16, -155497632), QB = bn(QB, nB, dB, zB, BB[IB + 10], 23, -1094730640), zB = bn(zB, QB, nB, dB, BB[IB + 13], 4, 681279174), dB = bn(dB, zB, QB, nB, BB[IB], 11, -358537222), nB = bn(nB, dB, zB, QB, BB[IB + 3], 16, -722521979), QB = bn(QB, nB, dB, zB, BB[IB + 6], 23, 76029189), zB = bn(zB, QB, nB, dB, BB[IB + 9], 4, -640364487), dB = bn(dB, zB, QB, nB, BB[IB + 12], 11, -421815835), nB = bn(nB, dB, zB, QB, BB[IB + 15], 16, 530742520), zB = vn(zB, QB = bn(QB, nB, dB, zB, BB[IB + 2], 23, -995338651), nB, dB, BB[IB], 6, -198630844), dB = vn(dB, zB, QB, nB, BB[IB + 7], 10, 1126891415), nB = vn(nB, dB, zB, QB, BB[IB + 14], 15, -1416354905), QB = vn(QB, nB, dB, zB, BB[IB + 5], 21, -57434055), zB = vn(zB, QB, nB, dB, BB[IB + 12], 6, 1700485571), dB = vn(dB, zB, QB, nB, BB[IB + 3], 10, -1894986606), nB = vn(nB, dB, zB, QB, BB[IB + 10], 15, -1051523), QB = vn(QB, nB, dB, zB, BB[IB + 1], 21, -2054922799), zB = vn(zB, QB, nB, dB, BB[IB + 8], 6, 1873313359), dB = vn(dB, zB, QB, nB, BB[IB + 15], 10, -30611744), nB = vn(nB, dB, zB, QB, BB[IB + 6], 15, -1560198380), QB = vn(QB, nB, dB, zB, BB[IB + 13], 21, 1309151649), zB = vn(zB, QB, nB, dB, BB[IB + 4], 6, -145523070), dB = vn(dB, zB, QB, nB, BB[IB + 11], 10, -1120210379), nB = vn(nB, dB, zB, QB, BB[IB + 2], 15, 718787259), QB = vn(QB, nB, dB, zB, BB[IB + 9], 21, -343485551), zB = xn(zB, NB), QB = xn(QB, uB), nB = xn(nB, UB), dB = xn(dB, aB)
        }
        return [zB, QB, nB, dB]
      }(function(BB) {
        if (0 === BB.length) return [];
        for (var jB = 8 * BB.length, zB = new Uint32Array(wn(jB)), QB = 0; QB < jB; QB += 8) zB[QB >> 5] |= (255 & BB[QB / 8]) << QB % 32;
        return zB
      }(BB), 8 * BB.length))
    }));
    var Rn = new Uint8Array(16);

    function On() {
      if (!Wn && !(Wn = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Wn(Rn)
    }

    function Bd(BB, jB, zB) {
      var QB = (BB = BB || {}).random || (BB.rng || On)();
      if (QB[6] = 15 & QB[6] | 64, QB[8] = 63 & QB[8] | 128, jB) {
        zB = zB || 0;
        for (var nB = 0; nB < 16; ++nB) jB[zB + nB] = QB[nB];
        return jB
      }
      return Pn(QB)
    }

    function jd(BB, jB, zB, QB) {
      switch (BB) {
        case 0:
          return jB & zB ^ ~jB & QB;
        case 1:
        case 3:
          return jB ^ zB ^ QB;
        case 2:
          return jB & zB ^ jB & QB ^ zB & QB
      }
    }

    function zd(BB, jB) {
      return BB << jB | BB >>> 32 - jB
    }
    en("v5", 80, (function(BB) {
      var jB = [1518500249, 1859775393, 2400959708, 3395469782],
        zB = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof BB) {
        var QB = unescape(encodeURIComponent(BB));
        BB = [];
        for (var nB = 0; nB < QB.length; ++nB) BB.push(QB.charCodeAt(nB))
      } else Array.isArray(BB) || (BB = Array.prototype.slice.call(BB));
      BB.push(128);
      for (var dB = BB.length / 4 + 2, IB = Math.ceil(dB / 16), NB = new Array(IB), uB = 0; uB < IB; ++uB) {
        for (var UB = new Uint32Array(16), aB = 0; aB < 16; ++aB) UB[aB] = BB[64 * uB + 4 * aB] << 24 | BB[64 * uB + 4 * aB + 1] << 16 | BB[64 * uB + 4 * aB + 2] << 8 | BB[64 * uB + 4 * aB + 3];
        NB[uB] = UB
      }
      NB[IB - 1][14] = 8 * (BB.length - 1) / Math.pow(2, 32), NB[IB - 1][14] = Math.floor(NB[IB - 1][14]), NB[IB - 1][15] = 8 * (BB.length - 1) & 4294967295;
      for (var pB = 0; pB < IB; ++pB) {
        for (var rB = new Uint32Array(80), sB = 0; sB < 16; ++sB) rB[sB] = NB[pB][sB];
        for (var JB = 16; JB < 80; ++JB) rB[JB] = zd(rB[JB - 3] ^ rB[JB - 8] ^ rB[JB - 14] ^ rB[JB - 16], 1);
        for (var mB = zB[0], yB = zB[1], kB = zB[2], GB = zB[3], LB = zB[4], gB = 0; gB < 80; ++gB) {
          var tB = Math.floor(gB / 20),
            SB = zd(mB, 5) + jd(tB, yB, kB, GB) + LB + jB[tB] + rB[gB] >>> 0;
          LB = GB, GB = kB, kB = zd(yB, 30) >>> 0, yB = mB, mB = SB
        }
        zB[0] = zB[0] + mB >>> 0, zB[1] = zB[1] + yB >>> 0, zB[2] = zB[2] + kB >>> 0, zB[3] = zB[3] + GB >>> 0, zB[4] = zB[4] + LB >>> 0
      }
      return [zB[0] >> 24 & 255, zB[0] >> 16 & 255, zB[0] >> 8 & 255, 255 & zB[0], zB[1] >> 24 & 255, zB[1] >> 16 & 255, zB[1] >> 8 & 255, 255 & zB[1], zB[2] >> 24 & 255, zB[2] >> 16 & 255, zB[2] >> 8 & 255, 255 & zB[2], zB[3] >> 24 & 255, zB[3] >> 16 & 255, zB[3] >> 8 & 255, 255 & zB[3], zB[4] >> 24 & 255, zB[4] >> 16 & 255, zB[4] >> 8 & 255, 255 & zB[4]]
    }));
    class Qd extends Error {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(jB), this.code = BB, this.message = jB, this.name = "Discord SDK Error"
      }
    }
    const nd = ["log", "warn", "debug", "info", "error"];
    var dd;
    ! function(BB) {
      BB[BB.HANDSHAKE = 0] = "HANDSHAKE", BB[BB.FRAME = 1] = "FRAME", BB[BB.CLOSE = 2] = "CLOSE", BB[BB.HELLO = 3] = "HELLO"
    }(dd || (dd = {}));
    const Id = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Nd {
      getTransfer(BB) {
        var jB;
        switch (BB.cmd) {
          case cz.SUBSCRIBE:
          case cz.UNSUBSCRIBE:
            return;
          default:
            return null !== (jB = BB.transfer) && void 0 !== jB ? jB : void 0
        }
      }
      constructor(BB, jB) {
        var zB;
        if (this.eventBus = new UB, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = BB => {
            var jB;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const zB = Bd();
            null === (jB = this.source) || void 0 === jB || jB.postMessage([dd.FRAME, Object.assign(Object.assign({}, BB), {
              nonce: zB
            })], this.sourceOrigin, this.getTransfer(BB));
            return new Promise(((BB, jB) => {
              this.pendingCommands.set(zB, {
                resolve: BB,
                reject: jB
              })
            }))
          }, this.commands = (zB = this.sendCommand, {
            authenticate: sn(zB),
            authorize: Jn(zB),
            captureLog: mn(zB),
            encourageHardwareAcceleration: yn(zB),
            getChannel: Vn(zB),
            getChannelPermissions: Ln(zB),
            getEntitlements: kn(zB),
            getPlatformBehaviors: gn(zB),
            getSkus: Gn(zB),
            openExternalLink: tn(zB),
            openInviteDialog: Sn(zB),
            openShareMomentDialog: Mn(zB),
            setActivity: En(zB),
            setConfig: qn(zB),
            setOrientationLockState: Hn(zB),
            startPurchase: Dn(zB),
            userSettingsGetLocale: Fn(zB),
            initiateImageUpload: Yn(zB),
            getInstanceConnectedParticipants: hn(zB)
          }), this.handleMessage = BB => {
            if (!Id.has(BB.origin)) return;
            const jB = BB.data;
            if (!Array.isArray(jB)) return;
            const [zB, QB] = jB;
            switch (zB) {
              case dd.HELLO:
                return;
              case dd.CLOSE:
                return this.handleClose(QB);
              case dd.HANDSHAKE:
                return this.handleHandshake();
              case dd.FRAME:
                return this.handleFrame(QB);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = BB, this.configuration = null !== jB && void 0 !== jB ? jB : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = hz.DESKTOP, this.guildId = null, void(this.channelId = null);
        const QB = new URLSearchParams(this._getSearch()),
          nB = QB.get("frame_id");
        if (!nB) throw new Error("frame_id query param is not defined");
        this.frameId = nB;
        const dB = QB.get("instance_id");
        if (!dB) throw new Error("instance_id query param is not defined");
        this.instanceId = dB;
        const IB = QB.get("platform");
        if (!IB) throw new Error("platform query param is not defined");
        if (IB !== hz.DESKTOP && IB !== hz.MOBILE) throw new Error(`Invalid query param "platform" of "${IB}". Valid values are "${hz.DESKTOP}" or "${hz.MOBILE}"`);
        this.platform = IB, this.guildId = QB.get("guild_id"), this.channelId = QB.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var BB;
          return [null !== (BB = window.parent.opener) && void 0 !== BB ? BB : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(BB, jB) {
        var zB;
        window.removeEventListener("message", this.handleMessage);
        const QB = Bd();
        null === (zB = this.source) || void 0 === zB || zB.postMessage([dd.CLOSE, {
          code: BB,
          message: jB,
          nonce: QB
        }], this.sourceOrigin)
      }
      async subscribe(BB, jB) {
        for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
        const [dB] = QB, IB = this.eventBus.listenerCount(BB), NB = this.eventBus.on(BB, jB);
        return Object.values(VQ).includes(BB) && BB !== VQ.READY && 0 === IB && await this.sendCommand({
          cmd: cz.SUBSCRIBE,
          args: dB,
          evt: BB
        }), NB
      }
      async unsubscribe(BB, jB) {
        for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
        const [dB] = QB;
        return BB !== VQ.READY && 1 === this.eventBus.listenerCount(BB) && await this.sendCommand({
          cmd: cz.UNSUBSCRIBE,
          evt: BB,
          args: dB
        }), this.eventBus.off(BB, jB)
      }
      async ready() {
        this.isReady || await new Promise((BB => {
          this.eventBus.once(VQ.READY, BB)
        }))
      }
      handshake() {
        var BB;
        null === (BB = this.source) || void 0 === BB || BB.postMessage([dd.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(VQ.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const BB = (BB, jB) => {
          this.commands.captureLog({
            level: BB,
            message: jB
          })
        };
        nd.forEach((jB => {
          ! function(BB, jB, zB) {
            const QB = BB[jB],
              nB = BB;
            QB && (BB[jB] = function() {
              const BB = [].slice.call(arguments),
                dB = "" + BB.join(" ");
              zB(jB, dB), QB.apply(nB, BB)
            })
          }(console, jB, BB)
        }))
      }
      handleClose(BB) {
        un.parse(BB)
      }
      handleHandshake() {}
      handleFrame(BB) {
        var jB, zB;
        let QB;
        try {
          QB = an(BB)
        } catch (nB) {
          return console.error("Failed to parse", BB), void console.error(nB)
        }
        if ("DISPATCH" === QB.cmd) this.eventBus.emit(QB.evt, QB.data);
        else {
          if (QB.evt === YQ) {
            if (null != QB.nonce) return null === (jB = this.pendingCommands.get(QB.nonce)) || void 0 === jB || jB.reject(QB.data), void this.pendingCommands.delete(QB.nonce);
            this.eventBus.emit("error", new Qd(QB.data.code, QB.data.message))
          }
          if (null == QB.nonce) return void console.error("Missing nonce", BB);
          null === (zB = this.pendingCommands.get(QB.nonce)) || void 0 === zB || zB.resolve(QB), this.pendingCommands.delete(QB.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var ud, Ud = 1e9,
      pd = !0,
      rd = "[DecimalError] ",
      sd = rd + "Invalid argument: ",
      Jd = rd + "Exponent out of range: ",
      md = Math.floor,
      yd = Math.pow,
      kd = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Gd = 1e7,
      Ld = 9007199254740991,
      gd = md(1286742750677284.5),
      td = {};

    function Sd(BB, jB) {
      var zB, QB, nB, dB, IB, NB, uB, UB, aB = BB.constructor,
        pB = aB.precision;
      if (!BB.s || !jB.s) return jB.s || (jB = new aB(BB)), pd ? Vd(jB, pB) : jB;
      if (uB = BB.d, UB = jB.d, IB = BB.e, nB = jB.e, uB = uB.slice(), dB = IB - nB) {
        for (dB < 0 ? (QB = uB, dB = -dB, NB = UB.length) : (QB = UB, nB = IB, NB = uB.length), dB > (NB = (IB = Math.ceil(pB / 7)) > NB ? IB + 1 : NB + 1) && (dB = NB, QB.length = 1), QB.reverse(); dB--;) QB.push(0);
        QB.reverse()
      }
      for ((NB = uB.length) - (dB = UB.length) < 0 && (dB = NB, QB = UB, UB = uB, uB = QB), zB = 0; dB;) zB = (uB[--dB] = uB[dB] + UB[dB] + zB) / Gd | 0, uB[dB] %= Gd;
      for (zB && (uB.unshift(zB), ++nB), NB = uB.length; 0 == uB[--NB];) uB.pop();
      return jB.d = uB, jB.e = nB, pd ? Vd(jB, pB) : jB
    }

    function Md(BB, jB, zB) {
      if (BB !== ~~BB || BB < jB || BB > zB) throw Error(sd + BB)
    }

    function Ed(BB) {
      var jB, zB, QB, nB = BB.length - 1,
        dB = "",
        IB = BB[0];
      if (nB > 0) {
        for (dB += IB, jB = 1; jB < nB; jB++)(zB = 7 - (QB = BB[jB] + "").length) && (dB += Dd(zB)), dB += QB;
        (zB = 7 - (QB = (IB = BB[jB]) + "").length) && (dB += Dd(zB))
      } else if (0 === IB) return "0";
      for (; IB % 10 === 0;) IB /= 10;
      return dB + IB
    }
    td.absoluteValue = td.abs = function() {
      var BB = new this.constructor(this);
      return BB.s && (BB.s = 1), BB
    }, td.comparedTo = td.cmp = function(BB) {
      var jB, zB, QB, nB, dB = this;
      if (BB = new dB.constructor(BB), dB.s !== BB.s) return dB.s || -BB.s;
      if (dB.e !== BB.e) return dB.e > BB.e ^ dB.s < 0 ? 1 : -1;
      for (jB = 0, zB = (QB = dB.d.length) < (nB = BB.d.length) ? QB : nB; jB < zB; ++jB)
        if (dB.d[jB] !== BB.d[jB]) return dB.d[jB] > BB.d[jB] ^ dB.s < 0 ? 1 : -1;
      return QB === nB ? 0 : QB > nB ^ dB.s < 0 ? 1 : -1
    }, td.decimalPlaces = td.dp = function() {
      var BB = this,
        jB = BB.d.length - 1,
        zB = 7 * (jB - BB.e);
      if (jB = BB.d[jB])
        for (; jB % 10 == 0; jB /= 10) zB--;
      return zB < 0 ? 0 : zB
    }, td.dividedBy = td.div = function(BB) {
      return qd(this, new this.constructor(BB))
    }, td.dividedToIntegerBy = td.idiv = function(BB) {
      var jB = this.constructor;
      return Vd(qd(this, new jB(BB), 0, 1), jB.precision)
    }, td.equals = td.eq = function(BB) {
      return !this.cmp(BB)
    }, td.exponent = function() {
      return od(this)
    }, td.greaterThan = td.gt = function(BB) {
      return this.cmp(BB) > 0
    }, td.greaterThanOrEqualTo = td.gte = function(BB) {
      return this.cmp(BB) >= 0
    }, td.isInteger = td.isint = function() {
      return this.e > this.d.length - 2
    }, td.isNegative = td.isneg = function() {
      return this.s < 0
    }, td.isPositive = td.ispos = function() {
      return this.s > 0
    }, td.isZero = function() {
      return 0 === this.s
    }, td.lessThan = td.lt = function(BB) {
      return this.cmp(BB) < 0
    }, td.lessThanOrEqualTo = td.lte = function(BB) {
      return this.cmp(BB) < 1
    }, td.logarithm = td.log = function(BB) {
      var jB, zB = this,
        QB = zB.constructor,
        nB = QB.precision,
        dB = nB + 5;
      if (void 0 === BB) BB = new QB(10);
      else if ((BB = new QB(BB)).s < 1 || BB.eq(ud)) throw Error(rd + "NaN");
      if (zB.s < 1) throw Error(rd + (zB.s ? "NaN" : "-Infinity"));
      return zB.eq(ud) ? new QB(0) : (pd = !1, jB = qd(Fd(zB, dB), Fd(BB, dB), dB), pd = !0, Vd(jB, nB))
    }, td.minus = td.sub = function(BB) {
      var jB = this;
      return BB = new jB.constructor(BB), jB.s == BB.s ? hd(jB, BB) : Sd(jB, (BB.s = -BB.s, BB))
    }, td.modulo = td.mod = function(BB) {
      var jB, zB = this,
        QB = zB.constructor,
        nB = QB.precision;
      if (!(BB = new QB(BB)).s) throw Error(rd + "NaN");
      return zB.s ? (pd = !1, jB = qd(zB, BB, 0, 1).times(BB), pd = !0, zB.minus(jB)) : Vd(new QB(zB), nB)
    }, td.naturalExponential = td.exp = function() {
      return fd(this)
    }, td.naturalLogarithm = td.ln = function() {
      return Fd(this)
    }, td.negated = td.neg = function() {
      var BB = new this.constructor(this);
      return BB.s = -BB.s || 0, BB
    }, td.plus = td.add = function(BB) {
      var jB = this;
      return BB = new jB.constructor(BB), jB.s == BB.s ? Sd(jB, BB) : hd(jB, (BB.s = -BB.s, BB))
    }, td.precision = td.sd = function(BB) {
      var jB, zB, QB, nB = this;
      if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(sd + BB);
      if (jB = od(nB) + 1, zB = 7 * (QB = nB.d.length - 1) + 1, QB = nB.d[QB]) {
        for (; QB % 10 == 0; QB /= 10) zB--;
        for (QB = nB.d[0]; QB >= 10; QB /= 10) zB++
      }
      return BB && jB > zB ? jB : zB
    }, td.squareRoot = td.sqrt = function() {
      var BB, jB, zB, QB, nB, dB, IB, NB = this,
        uB = NB.constructor;
      if (NB.s < 1) {
        if (!NB.s) return new uB(0);
        throw Error(rd + "NaN")
      }
      for (BB = od(NB), pd = !1, 0 == (nB = Math.sqrt(+NB)) || nB == 1 / 0 ? (((jB = Ed(NB.d)).length + BB) % 2 == 0 && (jB += "0"), nB = Math.sqrt(jB), BB = md((BB + 1) / 2) - (BB < 0 || BB % 2), QB = new uB(jB = nB == 1 / 0 ? "1e" + BB : (jB = nB.toExponential()).slice(0, jB.indexOf("e") + 1) + BB)) : QB = new uB(nB.toString()), nB = IB = (zB = uB.precision) + 3;;)
        if (QB = (dB = QB).plus(qd(NB, dB, IB + 2)).times(.5), Ed(dB.d).slice(0, IB) === (jB = Ed(QB.d)).slice(0, IB)) {
          if (jB = jB.slice(IB - 3, IB + 1), nB == IB && "4999" == jB) {
            if (Vd(dB, zB + 1, 0), dB.times(dB).eq(NB)) {
              QB = dB;
              break
            }
          } else if ("9999" != jB) break;
          IB += 4
        } return pd = !0, Vd(QB, zB)
    }, td.times = td.mul = function(BB) {
      var jB, zB, QB, nB, dB, IB, NB, uB, UB, aB = this,
        pB = aB.constructor,
        rB = aB.d,
        sB = (BB = new pB(BB)).d;
      if (!aB.s || !BB.s) return new pB(0);
      for (BB.s *= aB.s, zB = aB.e + BB.e, (uB = rB.length) < (UB = sB.length) && (dB = rB, rB = sB, sB = dB, IB = uB, uB = UB, UB = IB), dB = [], QB = IB = uB + UB; QB--;) dB.push(0);
      for (QB = UB; --QB >= 0;) {
        for (jB = 0, nB = uB + QB; nB > QB;) NB = dB[nB] + sB[QB] * rB[nB - QB - 1] + jB, dB[nB--] = NB % Gd | 0, jB = NB / Gd | 0;
        dB[nB] = (dB[nB] + jB) % Gd | 0
      }
      for (; !dB[--IB];) dB.pop();
      return jB ? ++zB : dB.shift(), BB.d = dB, BB.e = zB, pd ? Vd(BB, pB.precision) : BB
    }, td.toDecimalPlaces = td.todp = function(BB, jB) {
      var zB = this,
        QB = zB.constructor;
      return zB = new QB(zB), void 0 === BB ? zB : (Md(BB, 0, Ud), void 0 === jB ? jB = QB.rounding : Md(jB, 0, 8), Vd(zB, BB + od(zB) + 1, jB))
    }, td.toExponential = function(BB, jB) {
      var zB, QB = this,
        nB = QB.constructor;
      return void 0 === BB ? zB = Xd(QB, !0) : (Md(BB, 0, Ud), void 0 === jB ? jB = nB.rounding : Md(jB, 0, 8), zB = Xd(QB = Vd(new nB(QB), BB + 1, jB), !0, BB + 1)), zB
    }, td.toFixed = function(BB, jB) {
      var zB, QB, nB = this,
        dB = nB.constructor;
      return void 0 === BB ? Xd(nB) : (Md(BB, 0, Ud), void 0 === jB ? jB = dB.rounding : Md(jB, 0, 8), zB = Xd((QB = Vd(new dB(nB), BB + od(nB) + 1, jB)).abs(), !1, BB + od(QB) + 1), nB.isneg() && !nB.isZero() ? "-" + zB : zB)
    }, td.toInteger = td.toint = function() {
      var BB = this,
        jB = BB.constructor;
      return Vd(new jB(BB), od(BB) + 1, jB.rounding)
    }, td.toNumber = function() {
      return +this
    }, td.toPower = td.pow = function(BB) {
      var jB, zB, QB, nB, dB, IB, NB = this,
        uB = NB.constructor,
        UB = +(BB = new uB(BB));
      if (!BB.s) return new uB(ud);
      if (!(NB = new uB(NB)).s) {
        if (BB.s < 1) throw Error(rd + "Infinity");
        return NB
      }
      if (NB.eq(ud)) return NB;
      if (QB = uB.precision, BB.eq(ud)) return Vd(NB, QB);
      if (IB = (jB = BB.e) >= (zB = BB.d.length - 1), dB = NB.s, IB) {
        if ((zB = UB < 0 ? -UB : UB) <= Ld) {
          for (nB = new uB(ud), jB = Math.ceil(QB / 7 + 4), pd = !1; zB % 2 && Zd((nB = nB.times(NB)).d, jB), 0 !== (zB = md(zB / 2));) Zd((NB = NB.times(NB)).d, jB);
          return pd = !0, BB.s < 0 ? new uB(ud).div(nB) : Vd(nB, QB)
        }
      } else if (dB < 0) throw Error(rd + "NaN");
      return dB = dB < 0 && 1 & BB.d[Math.max(jB, zB)] ? -1 : 1, NB.s = 1, pd = !1, nB = BB.times(Fd(NB, QB + 12)), pd = !0, (nB = fd(nB)).s = dB, nB
    }, td.toPrecision = function(BB, jB) {
      var zB, QB, nB = this,
        dB = nB.constructor;
      return void 0 === BB ? QB = Xd(nB, (zB = od(nB)) <= dB.toExpNeg || zB >= dB.toExpPos) : (Md(BB, 1, Ud), void 0 === jB ? jB = dB.rounding : Md(jB, 0, 8), QB = Xd(nB = Vd(new dB(nB), BB, jB), BB <= (zB = od(nB)) || zB <= dB.toExpNeg, BB)), QB
    }, td.toSignificantDigits = td.tosd = function(BB, jB) {
      var zB = this.constructor;
      return void 0 === BB ? (BB = zB.precision, jB = zB.rounding) : (Md(BB, 1, Ud), void 0 === jB ? jB = zB.rounding : Md(jB, 0, 8)), Vd(new zB(this), BB, jB)
    }, td.toString = td.valueOf = td.val = td.toJSON = td[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var BB = this,
        jB = od(BB),
        zB = BB.constructor;
      return Xd(BB, jB <= zB.toExpNeg || jB >= zB.toExpPos)
    };
    var qd = function() {
      function BB(BB, jB) {
        var zB, QB = 0,
          nB = BB.length;
        for (BB = BB.slice(); nB--;) zB = BB[nB] * jB + QB, BB[nB] = zB % Gd | 0, QB = zB / Gd | 0;
        return QB && BB.unshift(QB), BB
      }

      function jB(BB, jB, zB, QB) {
        var nB, dB;
        if (zB != QB) dB = zB > QB ? 1 : -1;
        else
          for (nB = dB = 0; nB < zB; nB++)
            if (BB[nB] != jB[nB]) {
              dB = BB[nB] > jB[nB] ? 1 : -1;
              break
            } return dB
      }

      function zB(BB, jB, zB) {
        for (var QB = 0; zB--;) BB[zB] -= QB, QB = BB[zB] < jB[zB] ? 1 : 0, BB[zB] = QB * Gd + BB[zB] - jB[zB];
        for (; !BB[0] && BB.length > 1;) BB.shift()
      }
      return function(QB, nB, dB, IB) {
        var NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB = QB.constructor,
          qB = QB.s == nB.s ? 1 : -1,
          fB = QB.d,
          oB = nB.d;
        if (!QB.s) return new iB(QB);
        if (!nB.s) throw Error(rd + "Division by zero");
        for (uB = QB.e - nB.e, MB = oB.length, tB = fB.length, JB = (sB = new iB(qB)).d = [], UB = 0; oB[UB] == (fB[UB] || 0);) ++UB;
        if (oB[UB] > (fB[UB] || 0) && --uB, (GB = null == dB ? dB = iB.precision : IB ? dB + (od(QB) - od(nB)) + 1 : dB) < 0) return new iB(0);
        if (GB = GB / 7 + 2 | 0, UB = 0, 1 == MB)
          for (aB = 0, oB = oB[0], GB++;
            (UB < tB || aB) && GB--; UB++) LB = aB * Gd + (fB[UB] || 0), JB[UB] = LB / oB | 0, aB = LB % oB | 0;
        else {
          for ((aB = Gd / (oB[0] + 1) | 0) > 1 && (oB = BB(oB, aB), fB = BB(fB, aB), MB = oB.length, tB = fB.length), gB = MB, yB = (mB = fB.slice(0, MB)).length; yB < MB;) mB[yB++] = 0;
          (EB = oB.slice()).unshift(0), SB = oB[0], oB[1] >= Gd / 2 && ++SB;
          do {
            aB = 0, (NB = jB(oB, mB, MB, yB)) < 0 ? (kB = mB[0], MB != yB && (kB = kB * Gd + (mB[1] || 0)), (aB = kB / SB | 0) > 1 ? (aB >= Gd && (aB = Gd - 1), 1 == (NB = jB(pB = BB(oB, aB), mB, rB = pB.length, yB = mB.length)) && (aB--, zB(pB, MB < rB ? EB : oB, rB))) : (0 == aB && (NB = aB = 1), pB = oB.slice()), (rB = pB.length) < yB && pB.unshift(0), zB(mB, pB, yB), -1 == NB && (NB = jB(oB, mB, MB, yB = mB.length)) < 1 && (aB++, zB(mB, MB < yB ? EB : oB, yB)), yB = mB.length) : 0 === NB && (aB++, mB = [0]), JB[UB++] = aB, NB && mB[0] ? mB[yB++] = fB[gB] || 0 : (mB = [fB[gB]], yB = 1)
          } while ((gB++ < tB || void 0 !== mB[0]) && GB--)
        }
        return JB[0] || JB.shift(), sB.e = uB, Vd(sB, IB ? dB + od(sB) + 1 : dB)
      }
    }();

    function fd(BB, jB) {
      var zB, QB, nB, dB, IB, NB = 0,
        uB = 0,
        UB = BB.constructor,
        aB = UB.precision;
      if (od(BB) > 16) throw Error(Jd + od(BB));
      if (!BB.s) return new UB(ud);
      for (null == jB ? (pd = !1, IB = aB) : IB = jB, dB = new UB(.03125); BB.abs().gte(.1);) BB = BB.times(dB), uB += 5;
      for (IB += Math.log(yd(2, uB)) / Math.LN10 * 2 + 5 | 0, zB = QB = nB = new UB(ud), UB.precision = IB;;) {
        if (QB = Vd(QB.times(BB), IB), zB = zB.times(++NB), Ed((dB = nB.plus(qd(QB, zB, IB))).d).slice(0, IB) === Ed(nB.d).slice(0, IB)) {
          for (; uB--;) nB = Vd(nB.times(nB), IB);
          return UB.precision = aB, null == jB ? (pd = !0, Vd(nB, aB)) : nB
        }
        nB = dB
      }
    }

    function od(BB) {
      for (var jB = 7 * BB.e, zB = BB.d[0]; zB >= 10; zB /= 10) jB++;
      return jB
    }

    function Hd(BB, jB, zB) {
      if (jB > BB.LN10.sd()) throw pd = !0, zB && (BB.precision = zB), Error(rd + "LN10 precision limit exceeded");
      return Vd(new BB(BB.LN10), jB)
    }

    function Dd(BB) {
      for (var jB = ""; BB--;) jB += "0";
      return jB
    }

    function Fd(BB, jB) {
      var zB, QB, nB, dB, IB, NB, uB, UB, aB, pB = 1,
        rB = BB,
        sB = rB.d,
        JB = rB.constructor,
        mB = JB.precision;
      if (rB.s < 1) throw Error(rd + (rB.s ? "NaN" : "-Infinity"));
      if (rB.eq(ud)) return new JB(0);
      if (null == jB ? (pd = !1, UB = mB) : UB = jB, rB.eq(10)) return null == jB && (pd = !0), Hd(JB, UB);
      if (UB += 10, JB.precision = UB, QB = (zB = Ed(sB)).charAt(0), dB = od(rB), !(Math.abs(dB) < 15e14)) return uB = Hd(JB, UB + 2, mB).times(dB + ""), rB = Fd(new JB(QB + "." + zB.slice(1)), UB - 10).plus(uB), JB.precision = mB, null == jB ? (pd = !0, Vd(rB, mB)) : rB;
      for (; QB < 7 && 1 != QB || 1 == QB && zB.charAt(1) > 3;) QB = (zB = Ed((rB = rB.times(BB)).d)).charAt(0), pB++;
      for (dB = od(rB), QB > 1 ? (rB = new JB("0." + zB), dB++) : rB = new JB(QB + "." + zB.slice(1)), NB = IB = rB = qd(rB.minus(ud), rB.plus(ud), UB), aB = Vd(rB.times(rB), UB), nB = 3;;) {
        if (IB = Vd(IB.times(aB), UB), Ed((uB = NB.plus(qd(IB, new JB(nB), UB))).d).slice(0, UB) === Ed(NB.d).slice(0, UB)) return NB = NB.times(2), 0 !== dB && (NB = NB.plus(Hd(JB, UB + 2, mB).times(dB + ""))), NB = qd(NB, new JB(pB), UB), JB.precision = mB, null == jB ? (pd = !0, Vd(NB, mB)) : NB;
        NB = uB, nB += 2
      }
    }

    function Yd(BB, jB) {
      var zB, QB, nB;
      for ((zB = jB.indexOf(".")) > -1 && (jB = jB.replace(".", "")), (QB = jB.search(/e/i)) > 0 ? (zB < 0 && (zB = QB), zB += +jB.slice(QB + 1), jB = jB.substring(0, QB)) : zB < 0 && (zB = jB.length), QB = 0; 48 === jB.charCodeAt(QB);) ++QB;
      for (nB = jB.length; 48 === jB.charCodeAt(nB - 1);) --nB;
      if (jB = jB.slice(QB, nB)) {
        if (nB -= QB, zB = zB - QB - 1, BB.e = md(zB / 7), BB.d = [], QB = (zB + 1) % 7, zB < 0 && (QB += 7), QB < nB) {
          for (QB && BB.d.push(+jB.slice(0, QB)), nB -= 7; QB < nB;) BB.d.push(+jB.slice(QB, QB += 7));
          QB = 7 - (jB = jB.slice(QB)).length
        } else QB -= nB;
        for (; QB--;) jB += "0";
        if (BB.d.push(+jB), pd && (BB.e > gd || BB.e < -gd)) throw Error(Jd + zB)
      } else BB.s = 0, BB.e = 0, BB.d = [0];
      return BB
    }

    function Vd(BB, jB, zB) {
      var QB, nB, dB, IB, NB, uB, UB, aB, pB = BB.d;
      for (IB = 1, dB = pB[0]; dB >= 10; dB /= 10) IB++;
      if ((QB = jB - IB) < 0) QB += 7, nB = jB, UB = pB[aB = 0];
      else {
        if ((aB = Math.ceil((QB + 1) / 7)) >= (dB = pB.length)) return BB;
        for (UB = dB = pB[aB], IB = 1; dB >= 10; dB /= 10) IB++;
        nB = (QB %= 7) - 7 + IB
      }
      if (void 0 !== zB && (NB = UB / (dB = yd(10, IB - nB - 1)) % 10 | 0, uB = jB < 0 || void 0 !== pB[aB + 1] || UB % dB, uB = zB < 4 ? (NB || uB) && (0 == zB || zB == (BB.s < 0 ? 3 : 2)) : NB > 5 || 5 == NB && (4 == zB || uB || 6 == zB && (QB > 0 ? nB > 0 ? UB / yd(10, IB - nB) : 0 : pB[aB - 1]) % 10 & 1 || zB == (BB.s < 0 ? 8 : 7))), jB < 1 || !pB[0]) return uB ? (dB = od(BB), pB.length = 1, jB = jB - dB - 1, pB[0] = yd(10, (7 - jB % 7) % 7), BB.e = md(-jB / 7) || 0) : (pB.length = 1, pB[0] = BB.e = BB.s = 0), BB;
      if (0 == QB ? (pB.length = aB, dB = 1, aB--) : (pB.length = aB + 1, dB = yd(10, 7 - QB), pB[aB] = nB > 0 ? (UB / yd(10, IB - nB) % yd(10, nB) | 0) * dB : 0), uB)
        for (;;) {
          if (0 == aB) {
            (pB[0] += dB) == Gd && (pB[0] = 1, ++BB.e);
            break
          }
          if (pB[aB] += dB, pB[aB] != Gd) break;
          pB[aB--] = 0, dB = 1
        }
      for (QB = pB.length; 0 === pB[--QB];) pB.pop();
      if (pd && (BB.e > gd || BB.e < -gd)) throw Error(Jd + od(BB));
      return BB
    }

    function hd(BB, jB) {
      var zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB = BB.constructor,
        sB = rB.precision;
      if (!BB.s || !jB.s) return jB.s ? jB.s = -jB.s : jB = new rB(BB), pd ? Vd(jB, sB) : jB;
      if (uB = BB.d, pB = jB.d, QB = jB.e, UB = BB.e, uB = uB.slice(), IB = UB - QB) {
        for ((aB = IB < 0) ? (zB = uB, IB = -IB, NB = pB.length) : (zB = pB, QB = UB, NB = uB.length), IB > (nB = Math.max(Math.ceil(sB / 7), NB) + 2) && (IB = nB, zB.length = 1), zB.reverse(), nB = IB; nB--;) zB.push(0);
        zB.reverse()
      } else {
        for ((aB = (nB = uB.length) < (NB = pB.length)) && (NB = nB), nB = 0; nB < NB; nB++)
          if (uB[nB] != pB[nB]) {
            aB = uB[nB] < pB[nB];
            break
          } IB = 0
      }
      for (aB && (zB = uB, uB = pB, pB = zB, jB.s = -jB.s), NB = uB.length, nB = pB.length - NB; nB > 0; --nB) uB[NB++] = 0;
      for (nB = pB.length; nB > IB;) {
        if (uB[--nB] < pB[nB]) {
          for (dB = nB; dB && 0 === uB[--dB];) uB[dB] = Gd - 1;
          --uB[dB], uB[nB] += Gd
        }
        uB[nB] -= pB[nB]
      }
      for (; 0 === uB[--NB];) uB.pop();
      for (; 0 === uB[0]; uB.shift()) --QB;
      return uB[0] ? (jB.d = uB, jB.e = QB, pd ? Vd(jB, sB) : jB) : new rB(0)
    }

    function Xd(BB, jB, zB) {
      var QB, nB = od(BB),
        dB = Ed(BB.d),
        IB = dB.length;
      return jB ? (zB && (QB = zB - IB) > 0 ? dB = dB.charAt(0) + "." + dB.slice(1) + Dd(QB) : IB > 1 && (dB = dB.charAt(0) + "." + dB.slice(1)), dB = dB + (nB < 0 ? "e" : "e+") + nB) : nB < 0 ? (dB = "0." + Dd(-nB - 1) + dB, zB && (QB = zB - IB) > 0 && (dB += Dd(QB))) : nB >= IB ? (dB += Dd(nB + 1 - IB), zB && (QB = zB - nB - 1) > 0 && (dB = dB + "." + Dd(QB))) : ((QB = nB + 1) < IB && (dB = dB.slice(0, QB) + "." + dB.slice(QB)), zB && (QB = zB - IB) > 0 && (nB + 1 === IB && (dB += "."), dB += Dd(QB))), BB.s < 0 ? "-" + dB : dB
    }

    function Zd(BB, jB) {
      if (BB.length > jB) return BB.length = jB, !0
    }

    function Ad(BB) {
      if (!BB || "object" !== typeof BB) throw Error(rd + "Object expected");
      var jB, zB, QB, nB = ["precision", 1, Ud, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (jB = 0; jB < nB.length; jB += 3)
        if (void 0 !== (QB = BB[zB = nB[jB]])) {
          if (!(md(QB) === QB && QB >= nB[jB + 1] && QB <= nB[jB + 2])) throw Error(sd + zB + ": " + QB);
          this[zB] = QB
        } if (void 0 !== (QB = BB[zB = "LN10"])) {
        if (QB != Math.LN10) throw Error(sd + zB + ": " + QB);
        this[zB] = new this(QB)
      }
      return this
    }
    var Td = function BB(jB) {
      var zB, QB, nB;

      function dB(BB) {
        var jB = this;
        if (!(jB instanceof dB)) return new dB(BB);
        if (jB.constructor = dB, BB instanceof dB) return jB.s = BB.s, jB.e = BB.e, void(jB.d = (BB = BB.d) ? BB.slice() : BB);
        if ("number" === typeof BB) {
          if (0 * BB !== 0) throw Error(sd + BB);
          if (BB > 0) jB.s = 1;
          else {
            if (!(BB < 0)) return jB.s = 0, jB.e = 0, void(jB.d = [0]);
            BB = -BB, jB.s = -1
          }
          return BB === ~~BB && BB < 1e7 ? (jB.e = 0, void(jB.d = [BB])) : Yd(jB, BB.toString())
        }
        if ("string" !== typeof BB) throw Error(sd + BB);
        if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), jB.s = -1) : jB.s = 1, !kd.test(BB)) throw Error(sd + BB);
        Yd(jB, BB)
      }
      if (dB.prototype = td, dB.ROUND_UP = 0, dB.ROUND_DOWN = 1, dB.ROUND_CEIL = 2, dB.ROUND_FLOOR = 3, dB.ROUND_HALF_UP = 4, dB.ROUND_HALF_DOWN = 5, dB.ROUND_HALF_EVEN = 6, dB.ROUND_HALF_CEIL = 7, dB.ROUND_HALF_FLOOR = 8, dB.clone = BB, dB.config = dB.set = Ad, void 0 === jB && (jB = {}), jB)
        for (nB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], zB = 0; zB < nB.length;) jB.hasOwnProperty(QB = nB[zB++]) || (jB[QB] = this[QB]);
      return dB.config(jB), dB
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    ud = new Td(1);
    var Pd;
    ! function(BB) {
      BB.AED = "aed", BB.AFN = "afn", BB.ALL = "all", BB.AMD = "amd", BB.ANG = "ang", BB.AOA = "aoa", BB.ARS = "ars", BB.AUD = "aud", BB.AWG = "awg", BB.AZN = "azn", BB.BAM = "bam", BB.BBD = "bbd", BB.BDT = "bdt", BB.BGN = "bgn", BB.BHD = "bhd", BB.BIF = "bif", BB.BMD = "bmd", BB.BND = "bnd", BB.BOB = "bob", BB.BOV = "bov", BB.BRL = "brl", BB.BSD = "bsd", BB.BTN = "btn", BB.BWP = "bwp", BB.BYN = "byn", BB.BYR = "byr", BB.BZD = "bzd", BB.CAD = "cad", BB.CDF = "cdf", BB.CHE = "che", BB.CHF = "chf", BB.CHW = "chw", BB.CLF = "clf", BB.CLP = "clp", BB.CNY = "cny", BB.COP = "cop", BB.COU = "cou", BB.CRC = "crc", BB.CUC = "cuc", BB.CUP = "cup", BB.CVE = "cve", BB.CZK = "czk", BB.DJF = "djf", BB.DKK = "dkk", BB.DOP = "dop", BB.DZD = "dzd", BB.EGP = "egp", BB.ERN = "ern", BB.ETB = "etb", BB.EUR = "eur", BB.FJD = "fjd", BB.FKP = "fkp", BB.GBP = "gbp", BB.GEL = "gel", BB.GHS = "ghs", BB.GIP = "gip", BB.GMD = "gmd", BB.GNF = "gnf", BB.GTQ = "gtq", BB.GYD = "gyd", BB.HKD = "hkd", BB.HNL = "hnl", BB.HRK = "hrk", BB.HTG = "htg", BB.HUF = "huf", BB.IDR = "idr", BB.ILS = "ils", BB.INR = "inr", BB.IQD = "iqd", BB.IRR = "irr", BB.ISK = "isk", BB.JMD = "jmd", BB.JOD = "jod", BB.JPY = "jpy", BB.KES = "kes", BB.KGS = "kgs", BB.KHR = "khr", BB.KMF = "kmf", BB.KPW = "kpw", BB.KRW = "krw", BB.KWD = "kwd", BB.KYD = "kyd", BB.KZT = "kzt", BB.LAK = "lak", BB.LBP = "lbp", BB.LKR = "lkr", BB.LRD = "lrd", BB.LSL = "lsl", BB.LTL = "ltl", BB.LVL = "lvl", BB.LYD = "lyd", BB.MAD = "mad", BB.MDL = "mdl", BB.MGA = "mga", BB.MKD = "mkd", BB.MMK = "mmk", BB.MNT = "mnt", BB.MOP = "mop", BB.MRO = "mro", BB.MUR = "mur", BB.MVR = "mvr", BB.MWK = "mwk", BB.MXN = "mxn", BB.MXV = "mxv", BB.MYR = "myr", BB.MZN = "mzn", BB.NAD = "nad", BB.NGN = "ngn", BB.NIO = "nio", BB.NOK = "nok", BB.NPR = "npr", BB.NZD = "nzd", BB.OMR = "omr", BB.PAB = "pab", BB.PEN = "pen", BB.PGK = "pgk", BB.PHP = "php", BB.PKR = "pkr", BB.PLN = "pln", BB.PYG = "pyg", BB.QAR = "qar", BB.RON = "ron", BB.RSD = "rsd", BB.RUB = "rub", BB.RWF = "rwf", BB.SAR = "sar", BB.SBD = "sbd", BB.SCR = "scr", BB.SDG = "sdg", BB.SEK = "sek", BB.SGD = "sgd", BB.SHP = "shp", BB.SLL = "sll", BB.SOS = "sos", BB.SRD = "srd", BB.SSP = "ssp", BB.STD = "std", BB.SVC = "svc", BB.SYP = "syp", BB.SZL = "szl", BB.THB = "thb", BB.TJS = "tjs", BB.TMT = "tmt", BB.TND = "tnd", BB.TOP = "top", BB.TRY = "try", BB.TTD = "ttd", BB.TWD = "twd", BB.TZS = "tzs", BB.UAH = "uah", BB.UGX = "ugx", BB.USD = "usd", BB.USN = "usn", BB.USS = "uss", BB.UYI = "uyi", BB.UYU = "uyu", BB.UZS = "uzs", BB.VEF = "vef", BB.VND = "vnd", BB.VUV = "vuv", BB.WST = "wst", BB.XAF = "xaf", BB.XAG = "xag", BB.XAU = "xau", BB.XBA = "xba", BB.XBB = "xbb", BB.XBC = "xbc", BB.XBD = "xbd", BB.XCD = "xcd", BB.XDR = "xdr", BB.XFU = "xfu", BB.XOF = "xof", BB.XPD = "xpd", BB.XPF = "xpf", BB.XPT = "xpt", BB.XSU = "xsu", BB.XTS = "xts", BB.XUA = "xua", BB.YER = "yer", BB.ZAR = "zar", BB.ZMW = "zmw", BB.ZWL = "zwl"
    }(Pd || (Pd = {}));
    Pd.AED, Pd.AFN, Pd.ALL, Pd.AMD, Pd.ANG, Pd.AOA, Pd.ARS, Pd.AUD, Pd.AWG, Pd.AZN, Pd.BAM, Pd.BBD, Pd.BDT, Pd.BGN, Pd.BHD, Pd.BIF, Pd.BMD, Pd.BND, Pd.BOB, Pd.BOV, Pd.BRL, Pd.BSD, Pd.BTN, Pd.BWP, Pd.BYR, Pd.BYN, Pd.BZD, Pd.CAD, Pd.CDF, Pd.CHE, Pd.CHF, Pd.CHW, Pd.CLF, Pd.CLP, Pd.CNY, Pd.COP, Pd.COU, Pd.CRC, Pd.CUC, Pd.CUP, Pd.CVE, Pd.CZK, Pd.DJF, Pd.DKK, Pd.DOP, Pd.DZD, Pd.EGP, Pd.ERN, Pd.ETB, Pd.EUR, Pd.FJD, Pd.FKP, Pd.GBP, Pd.GEL, Pd.GHS, Pd.GIP, Pd.GMD, Pd.GNF, Pd.GTQ, Pd.GYD, Pd.HKD, Pd.HNL, Pd.HRK, Pd.HTG, Pd.HUF, Pd.IDR, Pd.ILS, Pd.INR, Pd.IQD, Pd.IRR, Pd.ISK, Pd.JMD, Pd.JOD, Pd.JPY, Pd.KES, Pd.KGS, Pd.KHR, Pd.KMF, Pd.KPW, Pd.KRW, Pd.KWD, Pd.KYD, Pd.KZT, Pd.LAK, Pd.LBP, Pd.LKR, Pd.LRD, Pd.LSL, Pd.LTL, Pd.LVL, Pd.LYD, Pd.MAD, Pd.MDL, Pd.MGA, Pd.MKD, Pd.MMK, Pd.MNT, Pd.MOP, Pd.MRO, Pd.MUR, Pd.MVR, Pd.MWK, Pd.MXN, Pd.MXV, Pd.MYR, Pd.MZN, Pd.NAD, Pd.NGN, Pd.NIO, Pd.NOK, Pd.NPR, Pd.NZD, Pd.OMR, Pd.PAB, Pd.PEN, Pd.PGK, Pd.PHP, Pd.PKR, Pd.PLN, Pd.PYG, Pd.QAR, Pd.RON, Pd.RSD, Pd.RUB, Pd.RWF, Pd.SAR, Pd.SBD, Pd.SCR, Pd.SDG, Pd.SEK, Pd.SGD, Pd.SHP, Pd.SLL, Pd.SOS, Pd.SRD, Pd.SSP, Pd.STD, Pd.SVC, Pd.SYP, Pd.SZL, Pd.THB, Pd.TJS, Pd.TMT, Pd.TND, Pd.TOP, Pd.TRY, Pd.TTD, Pd.TWD, Pd.TZS, Pd.UAH, Pd.UGX, Pd.USD, Pd.USN, Pd.USS, Pd.UYI, Pd.UYU, Pd.UZS, Pd.VEF, Pd.VND, Pd.VUV, Pd.WST, Pd.XAF, Pd.XAG, Pd.XAU, Pd.XBA, Pd.XBB, Pd.XBC, Pd.XBD, Pd.XCD, Pd.XDR, Pd.XFU, Pd.XOF, Pd.XPD, Pd.XPF, Pd.XPT, Pd.XSU, Pd.XTS, Pd.XUA, Pd.YER, Pd.ZAR, Pd.ZMW, Pd.ZWL;
    var Wd = {
      exports: {}
    };
    ! function(BB, jB) {
      var zB = "__lodash_hash_undefined__",
        QB = 9007199254740991,
        dB = "[object Arguments]",
        IB = "[object Array]",
        NB = "[object Boolean]",
        uB = "[object Date]",
        UB = "[object Error]",
        aB = "[object Function]",
        pB = "[object Map]",
        rB = "[object Number]",
        sB = "[object Object]",
        JB = "[object Promise]",
        mB = "[object RegExp]",
        yB = "[object Set]",
        kB = "[object String]",
        GB = "[object Symbol]",
        LB = "[object WeakMap]",
        gB = "[object ArrayBuffer]",
        tB = "[object DataView]",
        SB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        MB = /^\w*$/,
        EB = /^\./,
        iB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        qB = /\\(\\)?/g,
        fB = /^\[object .+?Constructor\]$/,
        oB = /^(?:0|[1-9]\d*)$/,
        HB = {};
      HB["[object Float32Array]"] = HB["[object Float64Array]"] = HB["[object Int8Array]"] = HB["[object Int16Array]"] = HB["[object Int32Array]"] = HB["[object Uint8Array]"] = HB["[object Uint8ClampedArray]"] = HB["[object Uint16Array]"] = HB["[object Uint32Array]"] = !0, HB[dB] = HB[IB] = HB[gB] = HB[NB] = HB[tB] = HB[uB] = HB[UB] = HB[aB] = HB[pB] = HB[rB] = HB[sB] = HB[mB] = HB[yB] = HB[kB] = HB[LB] = !1;
      var DB = "object" == typeof nB && nB && nB.Object === Object && nB,
        FB = "object" == typeof self && self && self.Object === Object && self,
        YB = DB || FB || Function("return this")(),
        VB = jB && !jB.nodeType && jB,
        hB = VB && BB && !BB.nodeType && BB,
        XB = hB && hB.exports === VB && DB.process,
        ZB = function() {
          try {
            return XB && XB.binding("util")
          } catch (BB) {}
        }(),
        AB = ZB && ZB.isTypedArray;

      function TB(BB, jB) {
        for (var zB = -1, QB = BB ? BB.length : 0; ++zB < QB && !1 !== jB(BB[zB], zB, BB););
        return BB
      }

      function PB(BB, jB) {
        for (var zB = -1, QB = BB ? BB.length : 0; ++zB < QB;)
          if (jB(BB[zB], zB, BB)) return !0;
        return !1
      }

      function WB(BB) {
        var jB = !1;
        if (null != BB && "function" != typeof BB.toString) try {
          jB = !!(BB + "")
        } catch (zB) {}
        return jB
      }

      function eB(BB) {
        var jB = -1,
          zB = Array(BB.size);
        return BB.forEach((function(BB, QB) {
          zB[++jB] = [QB, BB]
        })), zB
      }

      function lB(BB, jB) {
        return function(zB) {
          return BB(jB(zB))
        }
      }

      function wB(BB) {
        var jB = -1,
          zB = Array(BB.size);
        return BB.forEach((function(BB) {
          zB[++jB] = BB
        })), zB
      }
      var xB = Array.prototype,
        KB = Function.prototype,
        CB = Object.prototype,
        cB = YB["__core-js_shared__"],
        bB = function() {
          var BB = /[^.]+$/.exec(cB && cB.keys && cB.keys.IE_PROTO || "");
          return BB ? "Symbol(src)_1." + BB : ""
        }(),
        vB = KB.toString,
        RB = CB.hasOwnProperty,
        OB = CB.toString,
        Bj = RegExp("^" + vB.call(RB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        jj = YB.Symbol,
        zj = YB.Uint8Array,
        Qj = lB(Object.getPrototypeOf, Object),
        nj = Object.create,
        dj = CB.propertyIsEnumerable,
        Ij = xB.splice,
        Nj = lB(Object.keys, Object),
        uj = ej(YB, "DataView"),
        Uj = ej(YB, "Map"),
        aj = ej(YB, "Promise"),
        pj = ej(YB, "Set"),
        rj = ej(YB, "WeakMap"),
        sj = ej(Object, "create"),
        Jj = vj(uj),
        mj = vj(Uj),
        yj = vj(aj),
        kj = vj(pj),
        Gj = vj(rj),
        Lj = jj ? jj.prototype : void 0,
        gj = Lj ? Lj.valueOf : void 0,
        tj = Lj ? Lj.toString : void 0;

      function Sj(BB) {
        var jB = -1,
          zB = BB ? BB.length : 0;
        for (this.clear(); ++jB < zB;) {
          var QB = BB[jB];
          this.set(QB[0], QB[1])
        }
      }

      function Mj(BB) {
        var jB = -1,
          zB = BB ? BB.length : 0;
        for (this.clear(); ++jB < zB;) {
          var QB = BB[jB];
          this.set(QB[0], QB[1])
        }
      }

      function Ej(BB) {
        var jB = -1,
          zB = BB ? BB.length : 0;
        for (this.clear(); ++jB < zB;) {
          var QB = BB[jB];
          this.set(QB[0], QB[1])
        }
      }

      function ij(BB) {
        var jB = -1,
          zB = BB ? BB.length : 0;
        for (this.__data__ = new Ej; ++jB < zB;) this.add(BB[jB])
      }

      function qj(BB) {
        this.__data__ = new Mj(BB)
      }

      function fj(BB, jB) {
        var zB = jz(BB) || Bz(BB) ? function(BB, jB) {
            for (var zB = -1, QB = Array(BB); ++zB < BB;) QB[zB] = jB(zB);
            return QB
          }(BB.length, String) : [],
          QB = zB.length,
          nB = !!QB;
        for (var dB in BB) !jB && !RB.call(BB, dB) || nB && ("length" == dB || wj(dB, QB)) || zB.push(dB);
        return zB
      }

      function oj(BB, jB) {
        for (var zB = BB.length; zB--;)
          if (Oj(BB[zB][0], jB)) return zB;
        return -1
      }
      Sj.prototype.clear = function() {
        this.__data__ = sj ? sj(null) : {}
      }, Sj.prototype.delete = function(BB) {
        return this.has(BB) && delete this.__data__[BB]
      }, Sj.prototype.get = function(BB) {
        var jB = this.__data__;
        if (sj) {
          var QB = jB[BB];
          return QB === zB ? void 0 : QB
        }
        return RB.call(jB, BB) ? jB[BB] : void 0
      }, Sj.prototype.has = function(BB) {
        var jB = this.__data__;
        return sj ? void 0 !== jB[BB] : RB.call(jB, BB)
      }, Sj.prototype.set = function(BB, jB) {
        return this.__data__[BB] = sj && void 0 === jB ? zB : jB, this
      }, Mj.prototype.clear = function() {
        this.__data__ = []
      }, Mj.prototype.delete = function(BB) {
        var jB = this.__data__,
          zB = oj(jB, BB);
        return !(zB < 0) && (zB == jB.length - 1 ? jB.pop() : Ij.call(jB, zB, 1), !0)
      }, Mj.prototype.get = function(BB) {
        var jB = this.__data__,
          zB = oj(jB, BB);
        return zB < 0 ? void 0 : jB[zB][1]
      }, Mj.prototype.has = function(BB) {
        return oj(this.__data__, BB) > -1
      }, Mj.prototype.set = function(BB, jB) {
        var zB = this.__data__,
          QB = oj(zB, BB);
        return QB < 0 ? zB.push([BB, jB]) : zB[QB][1] = jB, this
      }, Ej.prototype.clear = function() {
        this.__data__ = {
          hash: new Sj,
          map: new(Uj || Mj),
          string: new Sj
        }
      }, Ej.prototype.delete = function(BB) {
        return Wj(this, BB).delete(BB)
      }, Ej.prototype.get = function(BB) {
        return Wj(this, BB).get(BB)
      }, Ej.prototype.has = function(BB) {
        return Wj(this, BB).has(BB)
      }, Ej.prototype.set = function(BB, jB) {
        return Wj(this, BB).set(BB, jB), this
      }, ij.prototype.add = ij.prototype.push = function(BB) {
        return this.__data__.set(BB, zB), this
      }, ij.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, qj.prototype.clear = function() {
        this.__data__ = new Mj
      }, qj.prototype.delete = function(BB) {
        return this.__data__.delete(BB)
      }, qj.prototype.get = function(BB) {
        return this.__data__.get(BB)
      }, qj.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, qj.prototype.set = function(BB, jB) {
        var zB = this.__data__;
        if (zB instanceof Mj) {
          var QB = zB.__data__;
          if (!Uj || QB.length < 199) return QB.push([BB, jB]), this;
          zB = this.__data__ = new Ej(QB)
        }
        return zB.set(BB, jB), this
      };
      var Hj, Dj = function(BB, jB, zB) {
        for (var QB = -1, nB = Object(BB), dB = zB(BB), IB = dB.length; IB--;) {
          var NB = dB[Hj ? IB : ++QB];
          if (!1 === jB(nB[NB], NB, nB)) break
        }
        return BB
      };

      function Fj(BB, jB) {
        return BB && Dj(BB, jB, az)
      }

      function Yj(BB, jB) {
        for (var zB = 0, QB = (jB = xj(jB, BB) ? [jB] : Tj(jB)).length; null != BB && zB < QB;) BB = BB[bj(jB[zB++])];
        return zB && zB == QB ? BB : void 0
      }

      function Vj(BB, jB) {
        return null != BB && jB in Object(BB)
      }

      function hj(BB, jB, zB, QB, nB) {
        return BB === jB || (null == BB || null == jB || !dz(BB) && !Iz(jB) ? BB !== BB && jB !== jB : function(BB, jB, zB, QB, nB, aB) {
          var JB = jz(BB),
            LB = jz(jB),
            SB = IB,
            MB = IB;
          JB || (SB = (SB = lj(BB)) == dB ? sB : SB);
          LB || (MB = (MB = lj(jB)) == dB ? sB : MB);
          var EB = SB == sB && !WB(BB),
            iB = MB == sB && !WB(jB),
            qB = SB == MB;
          if (qB && !EB) return aB || (aB = new qj), JB || Uz(BB) ? Pj(BB, jB, zB, QB, nB, aB) : function(BB, jB, zB, QB, nB, dB, IB) {
            switch (zB) {
              case tB:
                if (BB.byteLength != jB.byteLength || BB.byteOffset != jB.byteOffset) return !1;
                BB = BB.buffer, jB = jB.buffer;
              case gB:
                return !(BB.byteLength != jB.byteLength || !QB(new zj(BB), new zj(jB)));
              case NB:
              case uB:
              case rB:
                return Oj(+BB, +jB);
              case UB:
                return BB.name == jB.name && BB.message == jB.message;
              case mB:
              case kB:
                return BB == jB + "";
              case pB:
                var aB = eB;
              case yB:
                var sB = 2 & dB;
                if (aB || (aB = wB), BB.size != jB.size && !sB) return !1;
                var JB = IB.get(BB);
                if (JB) return JB == jB;
                dB |= 1, IB.set(BB, jB);
                var LB = Pj(aB(BB), aB(jB), QB, nB, dB, IB);
                return IB.delete(BB), LB;
              case GB:
                if (gj) return gj.call(BB) == gj.call(jB)
            }
            return !1
          }(BB, jB, SB, zB, QB, nB, aB);
          if (!(2 & nB)) {
            var fB = EB && RB.call(BB, "__wrapped__"),
              oB = iB && RB.call(jB, "__wrapped__");
            if (fB || oB) {
              var HB = fB ? BB.value() : BB,
                DB = oB ? jB.value() : jB;
              return aB || (aB = new qj), zB(HB, DB, QB, nB, aB)
            }
          }
          if (!qB) return !1;
          return aB || (aB = new qj),
            function(BB, jB, zB, QB, nB, dB) {
              var IB = 2 & nB,
                NB = az(BB),
                uB = NB.length,
                UB = az(jB),
                aB = UB.length;
              if (uB != aB && !IB) return !1;
              var pB = uB;
              for (; pB--;) {
                var rB = NB[pB];
                if (!(IB ? rB in jB : RB.call(jB, rB))) return !1
              }
              var sB = dB.get(BB);
              if (sB && dB.get(jB)) return sB == jB;
              var JB = !0;
              dB.set(BB, jB), dB.set(jB, BB);
              var mB = IB;
              for (; ++pB < uB;) {
                var yB = BB[rB = NB[pB]],
                  kB = jB[rB];
                if (QB) var GB = IB ? QB(kB, yB, rB, jB, BB, dB) : QB(yB, kB, rB, BB, jB, dB);
                if (!(void 0 === GB ? yB === kB || zB(yB, kB, QB, nB, dB) : GB)) {
                  JB = !1;
                  break
                }
                mB || (mB = "constructor" == rB)
              }
              if (JB && !mB) {
                var LB = BB.constructor,
                  gB = jB.constructor;
                LB == gB || !("constructor" in BB) || !("constructor" in jB) || "function" == typeof LB && LB instanceof LB && "function" == typeof gB && gB instanceof gB || (JB = !1)
              }
              return dB.delete(BB), dB.delete(jB), JB
            }(BB, jB, zB, QB, nB, aB)
        }(BB, jB, hj, zB, QB, nB))
      }

      function Xj(BB) {
        return !(!dz(BB) || (jB = BB, bB && bB in jB)) && (Qz(BB) || WB(BB) ? Bj : fB).test(vj(BB));
        var jB
      }

      function Zj(BB) {
        return "function" == typeof BB ? BB : null == BB ? pz : "object" == typeof BB ? jz(BB) ? function(BB, jB) {
          if (xj(BB) && Kj(jB)) return Cj(bj(BB), jB);
          return function(zB) {
            var QB = function(BB, jB, zB) {
              var QB = null == BB ? void 0 : Yj(BB, jB);
              return void 0 === QB ? zB : QB
            }(zB, BB);
            return void 0 === QB && QB === jB ? function(BB, jB) {
              return null != BB && function(BB, jB, zB) {
                jB = xj(jB, BB) ? [jB] : Tj(jB);
                var QB, nB = -1,
                  dB = jB.length;
                for (; ++nB < dB;) {
                  var IB = bj(jB[nB]);
                  if (!(QB = null != BB && zB(BB, IB))) break;
                  BB = BB[IB]
                }
                if (QB) return QB;
                dB = BB ? BB.length : 0;
                return !!dB && nz(dB) && wj(IB, dB) && (jz(BB) || Bz(BB))
              }(BB, jB, Vj)
            }(zB, BB) : hj(jB, QB, void 0, 3)
          }
        }(BB[0], BB[1]) : function(BB) {
          var jB = function(BB) {
            var jB = az(BB),
              zB = jB.length;
            for (; zB--;) {
              var QB = jB[zB],
                nB = BB[QB];
              jB[zB] = [QB, nB, Kj(nB)]
            }
            return jB
          }(BB);
          if (1 == jB.length && jB[0][2]) return Cj(jB[0][0], jB[0][1]);
          return function(zB) {
            return zB === BB || function(BB, jB, zB, QB) {
              var nB = zB.length,
                dB = nB,
                IB = !QB;
              if (null == BB) return !dB;
              for (BB = Object(BB); nB--;) {
                var NB = zB[nB];
                if (IB && NB[2] ? NB[1] !== BB[NB[0]] : !(NB[0] in BB)) return !1
              }
              for (; ++nB < dB;) {
                var uB = (NB = zB[nB])[0],
                  UB = BB[uB],
                  aB = NB[1];
                if (IB && NB[2]) {
                  if (void 0 === UB && !(uB in BB)) return !1
                } else {
                  var pB = new qj;
                  if (QB) var rB = QB(UB, aB, uB, BB, jB, pB);
                  if (!(void 0 === rB ? hj(aB, UB, QB, 3, pB) : rB)) return !1
                }
              }
              return !0
            }(zB, BB, jB)
          }
        }(BB) : function(BB) {
          return xj(BB) ? (jB = bj(BB), function(BB) {
            return null == BB ? void 0 : BB[jB]
          }) : function(BB) {
            return function(jB) {
              return Yj(jB, BB)
            }
          }(BB);
          var jB
        }(BB)
      }

      function Aj(BB) {
        if (! function(BB) {
            var jB = BB && BB.constructor,
              zB = "function" == typeof jB && jB.prototype || CB;
            return BB === zB
          }(BB)) return Nj(BB);
        var jB = [];
        for (var zB in Object(BB)) RB.call(BB, zB) && "constructor" != zB && jB.push(zB);
        return jB
      }

      function Tj(BB) {
        return jz(BB) ? BB : cj(BB)
      }

      function Pj(BB, jB, zB, QB, nB, dB) {
        var IB = 2 & nB,
          NB = BB.length,
          uB = jB.length;
        if (NB != uB && !(IB && uB > NB)) return !1;
        var UB = dB.get(BB);
        if (UB && dB.get(jB)) return UB == jB;
        var aB = -1,
          pB = !0,
          rB = 1 & nB ? new ij : void 0;
        for (dB.set(BB, jB), dB.set(jB, BB); ++aB < NB;) {
          var sB = BB[aB],
            JB = jB[aB];
          if (QB) var mB = IB ? QB(JB, sB, aB, jB, BB, dB) : QB(sB, JB, aB, BB, jB, dB);
          if (void 0 !== mB) {
            if (mB) continue;
            pB = !1;
            break
          }
          if (rB) {
            if (!PB(jB, (function(BB, jB) {
                if (!rB.has(jB) && (sB === BB || zB(sB, BB, QB, nB, dB))) return rB.add(jB)
              }))) {
              pB = !1;
              break
            }
          } else if (sB !== JB && !zB(sB, JB, QB, nB, dB)) {
            pB = !1;
            break
          }
        }
        return dB.delete(BB), dB.delete(jB), pB
      }

      function Wj(BB, jB) {
        var zB = BB.__data__;
        return function(BB) {
          var jB = typeof BB;
          return "string" == jB || "number" == jB || "symbol" == jB || "boolean" == jB ? "__proto__" !== BB : null === BB
        }(jB) ? zB["string" == typeof jB ? "string" : "hash"] : zB.map
      }

      function ej(BB, jB) {
        var zB = function(BB, jB) {
          return null == BB ? void 0 : BB[jB]
        }(BB, jB);
        return Xj(zB) ? zB : void 0
      }
      var lj = function(BB) {
        return OB.call(BB)
      };

      function wj(BB, jB) {
        return !!(jB = null == jB ? QB : jB) && ("number" == typeof BB || oB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < jB
      }

      function xj(BB, jB) {
        if (jz(BB)) return !1;
        var zB = typeof BB;
        return !("number" != zB && "symbol" != zB && "boolean" != zB && null != BB && !Nz(BB)) || (MB.test(BB) || !SB.test(BB) || null != jB && BB in Object(jB))
      }

      function Kj(BB) {
        return BB === BB && !dz(BB)
      }

      function Cj(BB, jB) {
        return function(zB) {
          return null != zB && (zB[BB] === jB && (void 0 !== jB || BB in Object(zB)))
        }
      }(uj && lj(new uj(new ArrayBuffer(1))) != tB || Uj && lj(new Uj) != pB || aj && lj(aj.resolve()) != JB || pj && lj(new pj) != yB || rj && lj(new rj) != LB) && (lj = function(BB) {
        var jB = OB.call(BB),
          zB = jB == sB ? BB.constructor : void 0,
          QB = zB ? vj(zB) : void 0;
        if (QB) switch (QB) {
          case Jj:
            return tB;
          case mj:
            return pB;
          case yj:
            return JB;
          case kj:
            return yB;
          case Gj:
            return LB
        }
        return jB
      });
      var cj = Rj((function(BB) {
        var jB;
        BB = null == (jB = BB) ? "" : function(BB) {
          if ("string" == typeof BB) return BB;
          if (Nz(BB)) return tj ? tj.call(BB) : "";
          var jB = BB + "";
          return "0" == jB && 1 / BB == -1 / 0 ? "-0" : jB
        }(jB);
        var zB = [];
        return EB.test(BB) && zB.push(""), BB.replace(iB, (function(BB, jB, QB, nB) {
          zB.push(QB ? nB.replace(qB, "$1") : jB || BB)
        })), zB
      }));

      function bj(BB) {
        if ("string" == typeof BB || Nz(BB)) return BB;
        var jB = BB + "";
        return "0" == jB && 1 / BB == -1 / 0 ? "-0" : jB
      }

      function vj(BB) {
        if (null != BB) {
          try {
            return vB.call(BB)
          } catch (jB) {}
          try {
            return BB + ""
          } catch (jB) {}
        }
        return ""
      }

      function Rj(BB, jB) {
        if ("function" != typeof BB || jB && "function" != typeof jB) throw new TypeError("Expected a function");
        var zB = function() {
          var QB = arguments,
            nB = jB ? jB.apply(this, QB) : QB[0],
            dB = zB.cache;
          if (dB.has(nB)) return dB.get(nB);
          var IB = BB.apply(this, QB);
          return zB.cache = dB.set(nB, IB), IB
        };
        return zB.cache = new(Rj.Cache || Ej), zB
      }

      function Oj(BB, jB) {
        return BB === jB || BB !== BB && jB !== jB
      }

      function Bz(BB) {
        return function(BB) {
          return Iz(BB) && zz(BB)
        }(BB) && RB.call(BB, "callee") && (!dj.call(BB, "callee") || OB.call(BB) == dB)
      }
      Rj.Cache = Ej;
      var jz = Array.isArray;

      function zz(BB) {
        return null != BB && nz(BB.length) && !Qz(BB)
      }

      function Qz(BB) {
        var jB = dz(BB) ? OB.call(BB) : "";
        return jB == aB || "[object GeneratorFunction]" == jB
      }

      function nz(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= QB
      }

      function dz(BB) {
        var jB = typeof BB;
        return !!BB && ("object" == jB || "function" == jB)
      }

      function Iz(BB) {
        return !!BB && "object" == typeof BB
      }

      function Nz(BB) {
        return "symbol" == typeof BB || Iz(BB) && OB.call(BB) == GB
      }
      var uz, Uz = AB ? (uz = AB, function(BB) {
        return uz(BB)
      }) : function(BB) {
        return Iz(BB) && nz(BB.length) && !!HB[OB.call(BB)]
      };

      function az(BB) {
        return zz(BB) ? fj(BB) : Aj(BB)
      }

      function pz(BB) {
        return BB
      }
      BB.exports = function(BB, jB, zB) {
        var QB, nB = jz(BB) || Uz(BB);
        if (jB = Zj(jB), null == zB)
          if (nB || dz(BB)) {
            var dB = BB.constructor;
            zB = nB ? jz(BB) ? new dB : [] : Qz(dB) ? dz(QB = Qj(BB)) ? nj(QB) : {} : {}
          } else zB = {};
        return (nB ? TB : Fj)(BB, (function(BB, QB, nB) {
          return jB(zB, BB, QB, nB)
        })), zB
      }
    }(Wd, Wd.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      m: ed
    } = QB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);