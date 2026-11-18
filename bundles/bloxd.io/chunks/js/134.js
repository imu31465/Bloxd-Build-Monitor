export const id = 134;
export const ids = [134];
export const modules = {
  7424: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => Ue,
      e: () => PZ
    });
    var FJ = {};
    ZJ.r(FJ), ZJ.d(FJ, {
      e: () => FF,
      j: () => XF,
      i: () => eF,
      n: () => aZ,
      r: () => LZ,
      s: () => MF,
      u: () => oZ,
      v: () => WF,
      x: () => EF,
      A: () => wF,
      C: () => BZ,
      F: () => KF,
      H: () => IF,
      I: () => bF,
      L: () => tZ,
      K: () => cF,
      P: () => SF,
      R: () => yF
    });
    var UJ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function eJ(JJ) {
      return JJ && JJ.__esModule && Object.prototype.hasOwnProperty.call(JJ, "default") ? JJ.default : JJ
    }
    var XJ = {
      exports: {}
    };
    ! function(JJ) {
      var cJ = Object.prototype.hasOwnProperty,
        ZJ = "~";

      function FJ() {}

      function UJ(JJ, cJ, ZJ) {
        this.Un = JJ, this.context = cJ, this.once = ZJ || !1
      }

      function eJ(JJ, cJ, FJ, eJ, XJ) {
        if ("function" !== typeof FJ) throw new TypeError("The listener must be a function");
        var AJ = new UJ(FJ, eJ || JJ, XJ),
          qJ = ZJ ? ZJ + cJ : cJ;
        return JJ._events[qJ] ? JJ._events[qJ].Un ? JJ._events[qJ] = [JJ._events[qJ], AJ] : JJ._events[qJ].push(AJ) : (JJ._events[qJ] = AJ, JJ._eventsCount++), JJ
      }

      function XJ(JJ, cJ) {
        0 === --JJ._eventsCount ? JJ._events = new FJ : delete JJ._events[cJ]
      }

      function AJ() {
        this._events = new FJ, this._eventsCount = 0
      }
      Object.create && (FJ.prototype = Object.create(null), (new FJ).__proto__ || (ZJ = !1)), AJ.prototype.eventNames = function() {
        var JJ, FJ, UJ = [];
        if (0 === this._eventsCount) return UJ;
        for (FJ in JJ = this._events) cJ.call(JJ, FJ) && UJ.push(ZJ ? FJ.slice(1) : FJ);
        return Object.getOwnPropertySymbols ? UJ.concat(Object.getOwnPropertySymbols(JJ)) : UJ
      }, AJ.prototype.listeners = function(JJ) {
        var cJ = ZJ ? ZJ + JJ : JJ,
          FJ = this._events[cJ];
        if (!FJ) return [];
        if (FJ.Un) return [FJ.Un];
        for (var UJ = 0, eJ = FJ.length, XJ = new Array(eJ); UJ < eJ; UJ++) XJ[UJ] = FJ[UJ].Un;
        return XJ
      }, AJ.prototype.listenerCount = function(JJ) {
        var cJ = ZJ ? ZJ + JJ : JJ,
          FJ = this._events[cJ];
        return FJ ? FJ.Un ? 1 : FJ.length : 0
      }, AJ.prototype.emit = function(JJ, cJ, FJ, UJ, eJ, XJ) {
        var AJ = ZJ ? ZJ + JJ : JJ;
        if (!this._events[AJ]) return !1;
        var qJ, jJ, YJ = this._events[AJ],
          hJ = arguments.length;
        if (YJ.Un) {
          switch (YJ.once && this.removeListener(JJ, YJ.Un, void 0, !0), hJ) {
            case 1:
              return YJ.Un.call(YJ.context), !0;
            case 2:
              return YJ.Un.call(YJ.context, cJ), !0;
            case 3:
              return YJ.Un.call(YJ.context, cJ, FJ), !0;
            case 4:
              return YJ.Un.call(YJ.context, cJ, FJ, UJ), !0;
            case 5:
              return YJ.Un.call(YJ.context, cJ, FJ, UJ, eJ), !0;
            case 6:
              return YJ.Un.call(YJ.context, cJ, FJ, UJ, eJ, XJ), !0
          }
          for (jJ = 1, qJ = new Array(hJ - 1); jJ < hJ; jJ++) qJ[jJ - 1] = arguments[jJ];
          YJ.Un.apply(YJ.context, qJ)
        } else {
          var DJ, sJ = YJ.length;
          for (jJ = 0; jJ < sJ; jJ++) switch (YJ[jJ].once && this.removeListener(JJ, YJ[jJ].Un, void 0, !0), hJ) {
            case 1:
              YJ[jJ].Un.call(YJ[jJ].context);
              break;
            case 2:
              YJ[jJ].Un.call(YJ[jJ].context, cJ);
              break;
            case 3:
              YJ[jJ].Un.call(YJ[jJ].context, cJ, FJ);
              break;
            case 4:
              YJ[jJ].Un.call(YJ[jJ].context, cJ, FJ, UJ);
              break;
            default:
              if (!qJ)
                for (DJ = 1, qJ = new Array(hJ - 1); DJ < hJ; DJ++) qJ[DJ - 1] = arguments[DJ];
              YJ[jJ].Un.apply(YJ[jJ].context, qJ)
          }
        }
        return !0
      }, AJ.prototype.on = function(JJ, cJ, ZJ) {
        return eJ(this, JJ, cJ, ZJ, !1)
      }, AJ.prototype.once = function(JJ, cJ, ZJ) {
        return eJ(this, JJ, cJ, ZJ, !0)
      }, AJ.prototype.removeListener = function(JJ, cJ, FJ, UJ) {
        var eJ = ZJ ? ZJ + JJ : JJ;
        if (!this._events[eJ]) return this;
        if (!cJ) return XJ(this, eJ), this;
        var AJ = this._events[eJ];
        if (AJ.Un) AJ.Un !== cJ || UJ && !AJ.once || FJ && AJ.context !== FJ || XJ(this, eJ);
        else {
          for (var qJ = 0, jJ = [], YJ = AJ.length; qJ < YJ; qJ++)(AJ[qJ].Un !== cJ || UJ && !AJ[qJ].once || FJ && AJ[qJ].context !== FJ) && jJ.push(AJ[qJ]);
          jJ.length ? this._events[eJ] = 1 === jJ.length ? jJ[0] : jJ : XJ(this, eJ)
        }
        return this
      }, AJ.prototype.Qr = function(JJ) {
        var cJ;
        return JJ ? (cJ = ZJ ? ZJ + JJ : JJ, this._events[cJ] && XJ(this, cJ)) : (this._events = new FJ, this._eventsCount = 0), this
      }, AJ.prototype.off = AJ.prototype.removeListener, AJ.prototype.addListener = AJ.prototype.on, AJ.prefixed = ZJ, AJ.EventEmitter = AJ, JJ.exports = AJ
    }(XJ);
    var AJ, qJ, jJ = eJ(XJ.exports);
    ! function(JJ) {
      JJ.assertEqual = JJ => JJ, JJ.assertIs = function(JJ) {}, JJ.assertNever = function(JJ) {
        throw new Error
      }, JJ.arrayToEnum = JJ => {
        const cJ = {};
        for (const ZJ of JJ) cJ[ZJ] = ZJ;
        return cJ
      }, JJ.getValidEnumValues = cJ => {
        const ZJ = JJ.objectKeys(cJ).filter((JJ => "number" !== typeof cJ[cJ[JJ]])),
          FJ = {};
        for (const JJ of ZJ) FJ[JJ] = cJ[JJ];
        return JJ.objectValues(FJ)
      }, JJ.objectValues = cJ => JJ.objectKeys(cJ).map((function(JJ) {
        return cJ[JJ]
      })), JJ.objectKeys = "function" === typeof Object.keys ? JJ => Object.keys(JJ) : JJ => {
        const cJ = [];
        for (const ZJ in JJ) Object.prototype.hasOwnProperty.call(JJ, ZJ) && cJ.push(ZJ);
        return cJ
      }, JJ.find = (JJ, cJ) => {
        for (const ZJ of JJ)
          if (cJ(ZJ)) return ZJ
      }, JJ.isInteger = "function" === typeof Number.isInteger ? JJ => Number.isInteger(JJ) : JJ => "number" === typeof JJ && isFinite(JJ) && Math.floor(JJ) === JJ, JJ.joinValues = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return JJ.map((JJ => "string" === typeof JJ ? `'${JJ}'` : JJ)).join(cJ)
      }, JJ.jsonStringifyReplacer = (JJ, cJ) => "bigint" === typeof cJ ? cJ.toString() : cJ
    }(AJ || (AJ = {})),
    function(JJ) {
      JJ.mergeShapes = (JJ, cJ) => ({
        ...JJ,
        ...cJ
      })
    }(qJ || (qJ = {}));
    const YJ = AJ.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      hJ = JJ => {
        switch (typeof JJ) {
          case "undefined":
            return YJ.undefined;
          case "string":
            return YJ.string;
          case "number":
            return isNaN(JJ) ? YJ.nan : YJ.number;
          case "boolean":
            return YJ.boolean;
          case "function":
            return YJ.function;
          case "bigint":
            return YJ.bigint;
          case "symbol":
            return YJ.symbol;
          case "object":
            return Array.isArray(JJ) ? YJ.array : null === JJ ? YJ.null : JJ.then && "function" === typeof JJ.then && JJ.catch && "function" === typeof JJ.catch ? YJ.promise : "undefined" !== typeof Map && JJ instanceof Map ? YJ.map : "undefined" !== typeof Set && JJ instanceof Set ? YJ.set : "undefined" !== typeof Date && JJ instanceof Date ? YJ.date : YJ.object;
          default:
            return YJ.unknown
        }
      },
      DJ = AJ.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class sJ extends Error {
      constructor(JJ) {
        var cJ;
        super(), cJ = this, this.issues = [], this.addIssue = JJ => {
          this.issues = [...this.issues, JJ]
        }, this.addIssues = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          cJ.issues = [...cJ.issues, ...JJ]
        };
        const ZJ = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, ZJ) : this.__proto__ = ZJ, this.name = "ZodError", this.issues = JJ
      }
      get errors() {
        return this.issues
      }
      format(JJ) {
        const cJ = JJ || function(JJ) {
            return JJ.message
          },
          ZJ = {
            _errors: []
          },
          FJ = JJ => {
            for (const UJ of JJ.issues)
              if ("invalid_union" === UJ.code) UJ.unionErrors.map(FJ);
              else if ("invalid_return_type" === UJ.code) FJ(UJ.returnTypeError);
            else if ("invalid_arguments" === UJ.code) FJ(UJ.argumentsError);
            else if (0 === UJ.path.length) ZJ._errors.push(cJ(UJ));
            else {
              let JJ = ZJ,
                FJ = 0;
              for (; FJ < UJ.path.length;) {
                const ZJ = UJ.path[FJ];
                FJ === UJ.path.length - 1 ? (JJ[ZJ] = JJ[ZJ] || {
                  _errors: []
                }, JJ[ZJ]._errors.push(cJ(UJ))) : JJ[ZJ] = JJ[ZJ] || {
                  _errors: []
                }, JJ = JJ[ZJ], FJ++
              }
            }
          };
        return FJ(this), ZJ
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, AJ.jsonStringifyReplacer, 2)
      }
      get jn() {
        return 0 === this.issues.length
      }
      flatten() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JJ => JJ.message;
        const cJ = {},
          ZJ = [];
        for (const FJ of this.issues) FJ.path.length > 0 ? (cJ[FJ.path[0]] = cJ[FJ.path[0]] || [], cJ[FJ.path[0]].push(JJ(FJ))) : ZJ.push(JJ(FJ));
        return {
          formErrors: ZJ,
          fieldErrors: cJ
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    sJ.create = JJ => new sJ(JJ);
    const nJ = (JJ, cJ) => {
      let ZJ;
      switch (JJ.code) {
        case DJ.invalid_type:
          ZJ = JJ.received === YJ.undefined ? "Required" : `Expected ${JJ.expected}, received ${JJ.received}`;
          break;
        case DJ.invalid_literal:
          ZJ = `Invalid literal value, expected ${JSON.stringify(JJ.expected,AJ.jsonStringifyReplacer)}`;
          break;
        case DJ.unrecognized_keys:
          ZJ = `Unrecognized key(s) in object: ${AJ.joinValues(JJ.keys,", ")}`;
          break;
        case DJ.invalid_union:
          ZJ = "Invalid input";
          break;
        case DJ.invalid_union_discriminator:
          ZJ = `Invalid discriminator value. Expected ${AJ.joinValues(JJ.options)}`;
          break;
        case DJ.invalid_enum_value:
          ZJ = `Invalid enum value. Expected ${AJ.joinValues(JJ.options)}, received '${JJ.received}'`;
          break;
        case DJ.invalid_arguments:
          ZJ = "Invalid function arguments";
          break;
        case DJ.invalid_return_type:
          ZJ = "Invalid function return type";
          break;
        case DJ.invalid_date:
          ZJ = "Invalid date";
          break;
        case DJ.invalid_string:
          "object" === typeof JJ.validation ? "includes" in JJ.validation ? (ZJ = `Invalid input: must include "${JJ.validation.includes}"`, "number" === typeof JJ.validation.position && (ZJ = `${ZJ} at one or more positions greater than or equal to ${JJ.validation.position}`)) : "startsWith" in JJ.validation ? ZJ = `Invalid input: must start with "${JJ.validation.startsWith}"` : "endsWith" in JJ.validation ? ZJ = `Invalid input: must end with "${JJ.validation.endsWith}"` : AJ.assertNever(JJ.validation) : ZJ = "regex" !== JJ.validation ? `Invalid ${JJ.validation}` : "Invalid";
          break;
        case DJ.too_small:
          ZJ = "array" === JJ.type ? `Array must contain ${JJ.exact?"exactly":JJ.inclusive?"at least":"more than"} ${JJ.minimum} element(s)` : "string" === JJ.type ? `String must contain ${JJ.exact?"exactly":JJ.inclusive?"at least":"over"} ${JJ.minimum} character(s)` : "number" === JJ.type ? `Number must be ${JJ.exact?"exactly equal to ":JJ.inclusive?"greater than or equal to ":"greater than "}${JJ.minimum}` : "date" === JJ.type ? `Date must be ${JJ.exact?"exactly equal to ":JJ.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(JJ.minimum))}` : "Invalid input";
          break;
        case DJ.too_big:
          ZJ = "array" === JJ.type ? `Array must contain ${JJ.exact?"exactly":JJ.inclusive?"at most":"less than"} ${JJ.maximum} element(s)` : "string" === JJ.type ? `String must contain ${JJ.exact?"exactly":JJ.inclusive?"at most":"under"} ${JJ.maximum} character(s)` : "number" === JJ.type ? `Number must be ${JJ.exact?"exactly":JJ.inclusive?"less than or equal to":"less than"} ${JJ.maximum}` : "bigint" === JJ.type ? `BigInt must be ${JJ.exact?"exactly":JJ.inclusive?"less than or equal to":"less than"} ${JJ.maximum}` : "date" === JJ.type ? `Date must be ${JJ.exact?"exactly":JJ.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(JJ.maximum))}` : "Invalid input";
          break;
        case DJ.custom:
          ZJ = "Invalid input";
          break;
        case DJ.invalid_intersection_types:
          ZJ = "Intersection results could not be merged";
          break;
        case DJ.not_multiple_of:
          ZJ = `Number must be a multiple of ${JJ.multipleOf}`;
          break;
        case DJ.not_finite:
          ZJ = "Number must be finite";
          break;
        default:
          ZJ = cJ.defaultError, AJ.assertNever(JJ)
      }
      return {
        message: ZJ
      }
    };
    let GJ = nJ;

    function fJ() {
      return GJ
    }
    const xJ = JJ => {
      const {
        data: cJ,
        path: ZJ,
        errorMaps: FJ,
        issueData: UJ
      } = JJ, eJ = [...ZJ, ...UJ.path || []], XJ = {
        ...UJ,
        path: eJ
      };
      let AJ = "";
      const qJ = FJ.filter((JJ => !!JJ)).slice().reverse();
      for (const jJ of qJ) AJ = jJ(XJ, {
        data: cJ,
        defaultError: AJ
      }).message;
      return {
        ...UJ,
        path: eJ,
        message: UJ.message || AJ
      }
    };

    function rJ(JJ, cJ) {
      const ZJ = xJ({
        issueData: cJ,
        data: JJ.data,
        path: JJ.path,
        errorMaps: [JJ.common.contextualErrorMap, JJ.schemaErrorMap, fJ(), nJ].filter((JJ => !!JJ))
      });
      JJ.common.issues.push(ZJ)
    }
    class vJ {
      constructor() {
        this.value = "valid"
      }
      Nn() {
        "valid" === this.value && (this.value = "Nn")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(JJ, cJ) {
        const ZJ = [];
        for (const FJ of cJ) {
          if ("aborted" === FJ.status) return mJ;
          "Nn" === FJ.status && JJ.Nn(), ZJ.push(FJ.value)
        }
        return {
          status: JJ.value,
          value: ZJ
        }
      }
      static async mergeObjectAsync(JJ, cJ) {
        const ZJ = [];
        for (const FJ of cJ) ZJ.push({
          key: await FJ.key,
          value: await FJ.value
        });
        return vJ.mergeObjectSync(JJ, ZJ)
      }
      static mergeObjectSync(JJ, cJ) {
        const ZJ = {};
        for (const FJ of cJ) {
          const {
            key: cJ,
            value: UJ
          } = FJ;
          if ("aborted" === cJ.status) return mJ;
          if ("aborted" === UJ.status) return mJ;
          "Nn" === cJ.status && JJ.Nn(), "Nn" === UJ.status && JJ.Nn(), "__proto__" === cJ.value || "undefined" === typeof UJ.value && !FJ.alwaysSet || (ZJ[cJ.value] = UJ.value)
        }
        return {
          status: JJ.value,
          value: ZJ
        }
      }
    }
    const mJ = Object.freeze({
        status: "aborted"
      }),
      QJ = JJ => ({
        status: "Nn",
        value: JJ
      }),
      EJ = JJ => ({
        status: "valid",
        value: JJ
      }),
      VJ = JJ => "aborted" === JJ.status,
      KJ = JJ => "Nn" === JJ.status,
      yJ = JJ => "valid" === JJ.status,
      SJ = JJ => "undefined" !== typeof Promise && JJ instanceof Promise;
    var IJ;
    ! function(JJ) {
      JJ.errToObj = JJ => "string" === typeof JJ ? {
        message: JJ
      } : JJ || {}, JJ.toString = JJ => "string" === typeof JJ ? JJ : null === JJ || void 0 === JJ ? void 0 : JJ.message
    }(IJ || (IJ = {}));
    class MJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this._cachedPath = [], this.parent = JJ, this.data = cJ, this._path = ZJ, this._key = FJ
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const bJ = (JJ, cJ) => {
      if (yJ(cJ)) return {
        success: !0,
        data: cJ.value
      };
      if (!JJ.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const cJ = new sJ(JJ.common.issues);
          return this._error = cJ, this._error
        }
      }
    };

    function wJ(JJ) {
      if (!JJ) return {};
      const {
        errorMap: cJ,
        invalid_type_error: ZJ,
        required_error: FJ,
        description: UJ
      } = JJ;
      if (cJ && (ZJ || FJ)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (cJ) return {
        errorMap: cJ,
        description: UJ
      };
      return {
        errorMap: (JJ, cJ) => "invalid_type" !== JJ.code ? {
          message: cJ.defaultError
        } : "undefined" === typeof cJ.data ? {
          message: null !== FJ && void 0 !== FJ ? FJ : cJ.defaultError
        } : {
          message: null !== ZJ && void 0 !== ZJ ? ZJ : cJ.defaultError
        },
        description: UJ
      }
    }
    class WJ {
      constructor(JJ) {
        this.spa = this.safeParseAsync, this._def = JJ, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(JJ) {
        return hJ(JJ.data)
      }
      _getOrReturnCtx(JJ, cJ) {
        return cJ || {
          common: JJ.parent.common,
          data: JJ.data,
          parsedType: hJ(JJ.data),
          schemaErrorMap: this._def.errorMap,
          path: JJ.path,
          parent: JJ.parent
        }
      }
      _processInputParams(JJ) {
        return {
          status: new vJ,
          ctx: {
            common: JJ.parent.common,
            data: JJ.data,
            parsedType: hJ(JJ.data),
            schemaErrorMap: this._def.errorMap,
            path: JJ.path,
            parent: JJ.parent
          }
        }
      }
      _parseSync(JJ) {
        const cJ = this._parse(JJ);
        if (SJ(cJ)) throw new Error("Synchronous parse encountered promise.");
        return cJ
      }
      _parseAsync(JJ) {
        const cJ = this._parse(JJ);
        return Promise.resolve(cJ)
      }
      parse(JJ, cJ) {
        const ZJ = this.safeParse(JJ, cJ);
        if (ZJ.success) return ZJ.data;
        throw ZJ.error
      }
      safeParse(JJ, cJ) {
        var ZJ;
        const FJ = {
            common: {
              issues: [],
              async: null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.async) && void 0 !== ZJ && ZJ,
              contextualErrorMap: null === cJ || void 0 === cJ ? void 0 : cJ.errorMap
            },
            path: (null === cJ || void 0 === cJ ? void 0 : cJ.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: JJ,
            parsedType: hJ(JJ)
          },
          UJ = this._parseSync({
            data: JJ,
            path: FJ.path,
            parent: FJ
          });
        return bJ(FJ, UJ)
      }
      async parseAsync(JJ, cJ) {
        const ZJ = await this.safeParseAsync(JJ, cJ);
        if (ZJ.success) return ZJ.data;
        throw ZJ.error
      }
      async safeParseAsync(JJ, cJ) {
        const ZJ = {
            common: {
              issues: [],
              contextualErrorMap: null === cJ || void 0 === cJ ? void 0 : cJ.errorMap,
              async: !0
            },
            path: (null === cJ || void 0 === cJ ? void 0 : cJ.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: JJ,
            parsedType: hJ(JJ)
          },
          FJ = this._parse({
            data: JJ,
            path: ZJ.path,
            parent: ZJ
          }),
          UJ = await (SJ(FJ) ? FJ : Promise.resolve(FJ));
        return bJ(ZJ, UJ)
      }
      refine(JJ, cJ) {
        const ZJ = JJ => "string" === typeof cJ || "undefined" === typeof cJ ? {
          message: cJ
        } : "function" === typeof cJ ? cJ(JJ) : cJ;
        return this._refinement(((cJ, FJ) => {
          const UJ = JJ(cJ),
            eJ = () => FJ.addIssue({
              code: DJ.custom,
              ...ZJ(cJ)
            });
          return "undefined" !== typeof Promise && UJ instanceof Promise ? UJ.then((JJ => !!JJ || (eJ(), !1))) : !!UJ || (eJ(), !1)
        }))
      }
      refinement(JJ, cJ) {
        return this._refinement(((ZJ, FJ) => !!JJ(ZJ) || (FJ.addIssue("function" === typeof cJ ? cJ(ZJ, FJ) : cJ), !1)))
      }
      _refinement(JJ) {
        return new mc({
          schema: this,
          typeName: gc.ZodEffects,
          effect: {
            type: "refinement",
            refinement: JJ
          }
        })
      }
      superRefine(JJ) {
        return this._refinement(JJ)
      }
      optional() {
        return Qc.create(this, this._def)
      }
      nullable() {
        return Ec.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return cc.create(this, this._def)
      }
      promise() {
        return vc.create(this, this._def)
      }
      or(JJ) {
        return Uc.create([this, JJ], this._def)
      }
      and(JJ) {
        return qc.create(this, JJ, this._def)
      }
      transform(JJ) {
        return new mc({
          ...wJ(this._def),
          schema: this,
          typeName: gc.ZodEffects,
          effect: {
            type: "transform",
            transform: JJ
          }
        })
      }
      default (JJ) {
        const cJ = "function" === typeof JJ ? JJ : () => JJ;
        return new Vc({
          ...wJ(this._def),
          innerType: this,
          defaultValue: cJ,
          typeName: gc.ZodDefault
        })
      }
      brand() {
        return new Ic({
          typeName: gc.ZodBranded,
          type: this,
          ...wJ(this._def)
        })
      } catch (JJ) {
        const cJ = "function" === typeof JJ ? JJ : () => JJ;
        return new Kc({
          ...wJ(this._def),
          innerType: this,
          catchValue: cJ,
          typeName: gc.ZodCatch
        })
      }
      describe(JJ) {
        return new(0, this.constructor)({
          ...this._def,
          description: JJ
        })
      }
      pipe(JJ) {
        return Mc.create(this, JJ)
      }
      readonly() {
        return bc.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const gJ = /^c[^\s-]{8,}$/i,
      HJ = /^[a-z][a-z0-9]*$/,
      PJ = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      kJ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      pJ = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let dJ;
    const zJ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      NJ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class OJ extends WJ {
      _parse(JJ) {
        this._def.coerce && (JJ.data = String(JJ.data));
        if (this._getType(JJ) !== YJ.string) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.string,
            received: cJ.parsedType
          }), mJ
        }
        const cJ = new vJ;
        let ZJ;
        for (const qJ of this._def.checks)
          if ("min" === qJ.kind) JJ.data.length < qJ.value && (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
            code: DJ.too_small,
            minimum: qJ.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: qJ.message
          }), cJ.Nn());
          else if ("max" === qJ.kind) JJ.data.length > qJ.value && (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          code: DJ.too_big,
          maximum: qJ.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: qJ.message
        }), cJ.Nn());
        else if ("length" === qJ.kind) {
          const FJ = JJ.data.length > qJ.value,
            UJ = JJ.data.length < qJ.value;
          (FJ || UJ) && (ZJ = this._getOrReturnCtx(JJ, ZJ), FJ ? rJ(ZJ, {
            code: DJ.too_big,
            maximum: qJ.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: qJ.message
          }) : UJ && rJ(ZJ, {
            code: DJ.too_small,
            minimum: qJ.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: qJ.message
          }), cJ.Nn())
        } else if ("email" === qJ.kind) pJ.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "email",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn());
        else if ("emoji" === qJ.kind) dJ || (dJ = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), dJ.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "emoji",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn());
        else if ("uuid" === qJ.kind) kJ.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "uuid",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn());
        else if ("cuid" === qJ.kind) gJ.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "cuid",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn());
        else if ("cuid2" === qJ.kind) HJ.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "cuid2",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn());
        else if ("ulid" === qJ.kind) PJ.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "ulid",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn());
        else if ("url" === qJ.kind) try {
          new URL(JJ.data)
        } catch (XJ) {
          ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
            validation: "url",
            code: DJ.invalid_string,
            message: qJ.message
          }), cJ.Nn()
        } else if ("regex" === qJ.kind) {
          qJ.regex.lastIndex = 0;
          qJ.regex.test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
            validation: "regex",
            code: DJ.invalid_string,
            message: qJ.message
          }), cJ.Nn())
        } else if ("trim" === qJ.kind) JJ.data = JJ.data.trim();
        else if ("includes" === qJ.kind) JJ.data.includes(qJ.value, qJ.position) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          code: DJ.invalid_string,
          validation: {
            includes: qJ.value,
            position: qJ.position
          },
          message: qJ.message
        }), cJ.Nn());
        else if ("toLowerCase" === qJ.kind) JJ.data = JJ.data.toLowerCase();
        else if ("toUpperCase" === qJ.kind) JJ.data = JJ.data.toUpperCase();
        else if ("startsWith" === qJ.kind) JJ.data.startsWith(qJ.value) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          code: DJ.invalid_string,
          validation: {
            startsWith: qJ.value
          },
          message: qJ.message
        }), cJ.Nn());
        else if ("endsWith" === qJ.kind) JJ.data.endsWith(qJ.value) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          code: DJ.invalid_string,
          validation: {
            endsWith: qJ.value
          },
          message: qJ.message
        }), cJ.Nn());
        else if ("datetime" === qJ.kind) {
          ((eJ = qJ).precision ? eJ.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${eJ.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${eJ.precision}}Z$`) : 0 === eJ.precision ? eJ.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : eJ.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(JJ.data) || (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
            code: DJ.invalid_string,
            validation: "datetime",
            message: qJ.message
          }), cJ.Nn())
        } else "ip" === qJ.kind ? (FJ = JJ.data, ("v4" !== (UJ = qJ.version) && UJ || !zJ.test(FJ)) && ("v6" !== UJ && UJ || !NJ.test(FJ)) && (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          validation: "ip",
          code: DJ.invalid_string,
          message: qJ.message
        }), cJ.Nn())) : AJ.assertNever(qJ);
        var FJ, UJ, eJ;
        return {
          status: cJ.value,
          value: JJ.data
        }
      }
      _regex(JJ, cJ, ZJ) {
        return this.refinement((cJ => JJ.test(cJ)), {
          validation: cJ,
          code: DJ.invalid_string,
          ...IJ.errToObj(ZJ)
        })
      }
      _addCheck(JJ) {
        return new OJ({
          ...this._def,
          checks: [...this._def.checks, JJ]
        })
      }
      email(JJ) {
        return this._addCheck({
          kind: "email",
          ...IJ.errToObj(JJ)
        })
      }
      url(JJ) {
        return this._addCheck({
          kind: "url",
          ...IJ.errToObj(JJ)
        })
      }
      emoji(JJ) {
        return this._addCheck({
          kind: "emoji",
          ...IJ.errToObj(JJ)
        })
      }
      uuid(JJ) {
        return this._addCheck({
          kind: "uuid",
          ...IJ.errToObj(JJ)
        })
      }
      cuid(JJ) {
        return this._addCheck({
          kind: "cuid",
          ...IJ.errToObj(JJ)
        })
      }
      cuid2(JJ) {
        return this._addCheck({
          kind: "cuid2",
          ...IJ.errToObj(JJ)
        })
      }
      ulid(JJ) {
        return this._addCheck({
          kind: "ulid",
          ...IJ.errToObj(JJ)
        })
      }
      ip(JJ) {
        return this._addCheck({
          kind: "ip",
          ...IJ.errToObj(JJ)
        })
      }
      datetime(JJ) {
        var cJ;
        return "string" === typeof JJ ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: JJ
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === JJ || void 0 === JJ ? void 0 : JJ.precision) ? null : null === JJ || void 0 === JJ ? void 0 : JJ.precision,
          offset: null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.offset) && void 0 !== cJ && cJ,
          ...IJ.errToObj(null === JJ || void 0 === JJ ? void 0 : JJ.message)
        })
      }
      regex(JJ, cJ) {
        return this._addCheck({
          kind: "regex",
          regex: JJ,
          ...IJ.errToObj(cJ)
        })
      }
      includes(JJ, cJ) {
        return this._addCheck({
          kind: "includes",
          value: JJ,
          position: null === cJ || void 0 === cJ ? void 0 : cJ.position,
          ...IJ.errToObj(null === cJ || void 0 === cJ ? void 0 : cJ.message)
        })
      }
      startsWith(JJ, cJ) {
        return this._addCheck({
          kind: "startsWith",
          value: JJ,
          ...IJ.errToObj(cJ)
        })
      }
      endsWith(JJ, cJ) {
        return this._addCheck({
          kind: "endsWith",
          value: JJ,
          ...IJ.errToObj(cJ)
        })
      }
      min(JJ, cJ) {
        return this._addCheck({
          kind: "min",
          value: JJ,
          ...IJ.errToObj(cJ)
        })
      }
      max(JJ, cJ) {
        return this._addCheck({
          kind: "max",
          value: JJ,
          ...IJ.errToObj(cJ)
        })
      }
      length(JJ, cJ) {
        return this._addCheck({
          kind: "length",
          value: JJ,
          ...IJ.errToObj(cJ)
        })
      }
      nonempty(JJ) {
        return this.min(1, IJ.errToObj(JJ))
      }
      trim() {
        return new OJ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new OJ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new OJ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((JJ => "datetime" === JJ.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((JJ => "email" === JJ.kind))
      }
      get isURL() {
        return !!this._def.checks.find((JJ => "url" === JJ.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((JJ => "emoji" === JJ.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((JJ => "uuid" === JJ.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((JJ => "cuid" === JJ.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((JJ => "cuid2" === JJ.kind))
      }
      get isULID() {
        return !!this._def.checks.find((JJ => "ulid" === JJ.kind))
      }
      get isIP() {
        return !!this._def.checks.find((JJ => "ip" === JJ.kind))
      }
      get minLength() {
        let JJ = null;
        for (const cJ of this._def.checks) "min" === cJ.kind && (null === JJ || cJ.value > JJ) && (JJ = cJ.value);
        return JJ
      }
      get maxLength() {
        let JJ = null;
        for (const cJ of this._def.checks) "max" === cJ.kind && (null === JJ || cJ.value < JJ) && (JJ = cJ.value);
        return JJ
      }
    }

    function TJ(JJ, cJ) {
      const ZJ = (JJ.toString().split(".")[1] || "").length,
        FJ = (cJ.toString().split(".")[1] || "").length,
        UJ = ZJ > FJ ? ZJ : FJ;
      return parseInt(JJ.toFixed(UJ).replace(".", "")) % parseInt(cJ.toFixed(UJ).replace(".", "")) / Math.pow(10, UJ)
    }
    OJ.create = JJ => {
      var cJ;
      return new OJ({
        checks: [],
        typeName: gc.ZodString,
        coerce: null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.coerce) && void 0 !== cJ && cJ,
        ...wJ(JJ)
      })
    };
    class CJ extends WJ {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(JJ) {
        this._def.coerce && (JJ.data = Number(JJ.data));
        if (this._getType(JJ) !== YJ.number) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.number,
            received: cJ.parsedType
          }), mJ
        }
        let cJ;
        const ZJ = new vJ;
        for (const FJ of this._def.checks)
          if ("int" === FJ.kind) AJ.isInteger(JJ.data) || (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
            code: DJ.invalid_type,
            expected: "integer",
            received: "float",
            message: FJ.message
          }), ZJ.Nn());
          else if ("min" === FJ.kind) {
          (FJ.inclusive ? JJ.data < FJ.value : JJ.data <= FJ.value) && (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
            code: DJ.too_small,
            minimum: FJ.value,
            type: "number",
            inclusive: FJ.inclusive,
            exact: !1,
            message: FJ.message
          }), ZJ.Nn())
        } else if ("max" === FJ.kind) {
          (FJ.inclusive ? JJ.data > FJ.value : JJ.data >= FJ.value) && (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
            code: DJ.too_big,
            maximum: FJ.value,
            type: "number",
            inclusive: FJ.inclusive,
            exact: !1,
            message: FJ.message
          }), ZJ.Nn())
        } else "multipleOf" === FJ.kind ? 0 !== TJ(JJ.data, FJ.value) && (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
          code: DJ.not_multiple_of,
          multipleOf: FJ.value,
          message: FJ.message
        }), ZJ.Nn()) : "finite" === FJ.kind ? Number.isFinite(JJ.data) || (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
          code: DJ.not_finite,
          message: FJ.message
        }), ZJ.Nn()) : AJ.assertNever(FJ);
        return {
          status: ZJ.value,
          value: JJ.data
        }
      }
      gte(JJ, cJ) {
        return this.setLimit("min", JJ, !0, IJ.toString(cJ))
      }
      gt(JJ, cJ) {
        return this.setLimit("min", JJ, !1, IJ.toString(cJ))
      }
      lte(JJ, cJ) {
        return this.setLimit("max", JJ, !0, IJ.toString(cJ))
      }
      lt(JJ, cJ) {
        return this.setLimit("max", JJ, !1, IJ.toString(cJ))
      }
      setLimit(JJ, cJ, ZJ, FJ) {
        return new CJ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: JJ,
            value: cJ,
            inclusive: ZJ,
            message: IJ.toString(FJ)
          }]
        })
      }
      _addCheck(JJ) {
        return new CJ({
          ...this._def,
          checks: [...this._def.checks, JJ]
        })
      }
      int(JJ) {
        return this._addCheck({
          kind: "int",
          message: IJ.toString(JJ)
        })
      }
      positive(JJ) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: IJ.toString(JJ)
        })
      }
      negative(JJ) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: IJ.toString(JJ)
        })
      }
      nonpositive(JJ) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: IJ.toString(JJ)
        })
      }
      nonnegative(JJ) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: IJ.toString(JJ)
        })
      }
      multipleOf(JJ, cJ) {
        return this._addCheck({
          kind: "multipleOf",
          value: JJ,
          message: IJ.toString(cJ)
        })
      }
      finite(JJ) {
        return this._addCheck({
          kind: "finite",
          message: IJ.toString(JJ)
        })
      }
      safe(JJ) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: IJ.toString(JJ)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: IJ.toString(JJ)
        })
      }
      get minValue() {
        let JJ = null;
        for (const cJ of this._def.checks) "min" === cJ.kind && (null === JJ || cJ.value > JJ) && (JJ = cJ.value);
        return JJ
      }
      get maxValue() {
        let JJ = null;
        for (const cJ of this._def.checks) "max" === cJ.kind && (null === JJ || cJ.value < JJ) && (JJ = cJ.value);
        return JJ
      }
      get isInt() {
        return !!this._def.checks.find((JJ => "int" === JJ.kind || "multipleOf" === JJ.kind && AJ.isInteger(JJ.value)))
      }
      get isFinite() {
        let JJ = null,
          cJ = null;
        for (const ZJ of this._def.checks) {
          if ("finite" === ZJ.kind || "int" === ZJ.kind || "multipleOf" === ZJ.kind) return !0;
          "min" === ZJ.kind ? (null === cJ || ZJ.value > cJ) && (cJ = ZJ.value) : "max" === ZJ.kind && (null === JJ || ZJ.value < JJ) && (JJ = ZJ.value)
        }
        return Number.isFinite(cJ) && Number.isFinite(JJ)
      }
    }
    CJ.create = JJ => new CJ({
      checks: [],
      typeName: gc.ZodNumber,
      coerce: (null === JJ || void 0 === JJ ? void 0 : JJ.coerce) || !1,
      ...wJ(JJ)
    });
    class uJ extends WJ {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(JJ) {
        this._def.coerce && (JJ.data = BigInt(JJ.data));
        if (this._getType(JJ) !== YJ.bigint) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.bigint,
            received: cJ.parsedType
          }), mJ
        }
        let cJ;
        const ZJ = new vJ;
        for (const FJ of this._def.checks)
          if ("min" === FJ.kind) {
            (FJ.inclusive ? JJ.data < FJ.value : JJ.data <= FJ.value) && (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
              code: DJ.too_small,
              type: "bigint",
              minimum: FJ.value,
              inclusive: FJ.inclusive,
              message: FJ.message
            }), ZJ.Nn())
          } else if ("max" === FJ.kind) {
          (FJ.inclusive ? JJ.data > FJ.value : JJ.data >= FJ.value) && (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
            code: DJ.too_big,
            type: "bigint",
            maximum: FJ.value,
            inclusive: FJ.inclusive,
            message: FJ.message
          }), ZJ.Nn())
        } else "multipleOf" === FJ.kind ? JJ.data % FJ.value !== BigInt(0) && (cJ = this._getOrReturnCtx(JJ, cJ), rJ(cJ, {
          code: DJ.not_multiple_of,
          multipleOf: FJ.value,
          message: FJ.message
        }), ZJ.Nn()) : AJ.assertNever(FJ);
        return {
          status: ZJ.value,
          value: JJ.data
        }
      }
      gte(JJ, cJ) {
        return this.setLimit("min", JJ, !0, IJ.toString(cJ))
      }
      gt(JJ, cJ) {
        return this.setLimit("min", JJ, !1, IJ.toString(cJ))
      }
      lte(JJ, cJ) {
        return this.setLimit("max", JJ, !0, IJ.toString(cJ))
      }
      lt(JJ, cJ) {
        return this.setLimit("max", JJ, !1, IJ.toString(cJ))
      }
      setLimit(JJ, cJ, ZJ, FJ) {
        return new uJ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: JJ,
            value: cJ,
            inclusive: ZJ,
            message: IJ.toString(FJ)
          }]
        })
      }
      _addCheck(JJ) {
        return new uJ({
          ...this._def,
          checks: [...this._def.checks, JJ]
        })
      }
      positive(JJ) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: IJ.toString(JJ)
        })
      }
      negative(JJ) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: IJ.toString(JJ)
        })
      }
      nonpositive(JJ) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: IJ.toString(JJ)
        })
      }
      nonnegative(JJ) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: IJ.toString(JJ)
        })
      }
      multipleOf(JJ, cJ) {
        return this._addCheck({
          kind: "multipleOf",
          value: JJ,
          message: IJ.toString(cJ)
        })
      }
      get minValue() {
        let JJ = null;
        for (const cJ of this._def.checks) "min" === cJ.kind && (null === JJ || cJ.value > JJ) && (JJ = cJ.value);
        return JJ
      }
      get maxValue() {
        let JJ = null;
        for (const cJ of this._def.checks) "max" === cJ.kind && (null === JJ || cJ.value < JJ) && (JJ = cJ.value);
        return JJ
      }
    }
    uJ.create = JJ => {
      var cJ;
      return new uJ({
        checks: [],
        typeName: gc.ZodBigInt,
        coerce: null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.coerce) && void 0 !== cJ && cJ,
        ...wJ(JJ)
      })
    };
    class iJ extends WJ {
      _parse(JJ) {
        this._def.coerce && (JJ.data = Boolean(JJ.data));
        if (this._getType(JJ) !== YJ.boolean) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.boolean,
            received: cJ.parsedType
          }), mJ
        }
        return EJ(JJ.data)
      }
    }
    iJ.create = JJ => new iJ({
      typeName: gc.ZodBoolean,
      coerce: (null === JJ || void 0 === JJ ? void 0 : JJ.coerce) || !1,
      ...wJ(JJ)
    });
    class RJ extends WJ {
      _parse(JJ) {
        this._def.coerce && (JJ.data = new Date(JJ.data));
        if (this._getType(JJ) !== YJ.date) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.date,
            received: cJ.parsedType
          }), mJ
        }
        if (isNaN(JJ.data.getTime())) {
          return rJ(this._getOrReturnCtx(JJ), {
            code: DJ.invalid_date
          }), mJ
        }
        const cJ = new vJ;
        let ZJ;
        for (const FJ of this._def.checks) "min" === FJ.kind ? JJ.data.getTime() < FJ.value && (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          code: DJ.too_small,
          message: FJ.message,
          inclusive: !0,
          exact: !1,
          minimum: FJ.value,
          type: "date"
        }), cJ.Nn()) : "max" === FJ.kind ? JJ.data.getTime() > FJ.value && (ZJ = this._getOrReturnCtx(JJ, ZJ), rJ(ZJ, {
          code: DJ.too_big,
          message: FJ.message,
          inclusive: !0,
          exact: !1,
          maximum: FJ.value,
          type: "date"
        }), cJ.Nn()) : AJ.assertNever(FJ);
        return {
          status: cJ.value,
          value: new Date(JJ.data.getTime())
        }
      }
      _addCheck(JJ) {
        return new RJ({
          ...this._def,
          checks: [...this._def.checks, JJ]
        })
      }
      min(JJ, cJ) {
        return this._addCheck({
          kind: "min",
          value: JJ.getTime(),
          message: IJ.toString(cJ)
        })
      }
      max(JJ, cJ) {
        return this._addCheck({
          kind: "max",
          value: JJ.getTime(),
          message: IJ.toString(cJ)
        })
      }
      get minDate() {
        let JJ = null;
        for (const cJ of this._def.checks) "min" === cJ.kind && (null === JJ || cJ.value > JJ) && (JJ = cJ.value);
        return null != JJ ? new Date(JJ) : null
      }
      get maxDate() {
        let JJ = null;
        for (const cJ of this._def.checks) "max" === cJ.kind && (null === JJ || cJ.value < JJ) && (JJ = cJ.value);
        return null != JJ ? new Date(JJ) : null
      }
    }
    RJ.create = JJ => new RJ({
      checks: [],
      coerce: (null === JJ || void 0 === JJ ? void 0 : JJ.coerce) || !1,
      typeName: gc.ZodDate,
      ...wJ(JJ)
    });
    class LJ extends WJ {
      _parse(JJ) {
        if (this._getType(JJ) !== YJ.symbol) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.symbol,
            received: cJ.parsedType
          }), mJ
        }
        return EJ(JJ.data)
      }
    }
    LJ.create = JJ => new LJ({
      typeName: gc.ZodSymbol,
      ...wJ(JJ)
    });
    class aJ extends WJ {
      _parse(JJ) {
        if (this._getType(JJ) !== YJ.undefined) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.undefined,
            received: cJ.parsedType
          }), mJ
        }
        return EJ(JJ.data)
      }
    }
    aJ.create = JJ => new aJ({
      typeName: gc.ZodUndefined,
      ...wJ(JJ)
    });
    class BJ extends WJ {
      _parse(JJ) {
        if (this._getType(JJ) !== YJ.null) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.null,
            received: cJ.parsedType
          }), mJ
        }
        return EJ(JJ.data)
      }
    }
    BJ.create = JJ => new BJ({
      typeName: gc.ZodNull,
      ...wJ(JJ)
    });
    class tJ extends WJ {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(JJ) {
        return EJ(JJ.data)
      }
    }
    tJ.create = JJ => new tJ({
      typeName: gc.ZodAny,
      ...wJ(JJ)
    });
    class oJ extends WJ {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(JJ) {
        return EJ(JJ.data)
      }
    }
    oJ.create = JJ => new oJ({
      typeName: gc.ZodUnknown,
      ...wJ(JJ)
    });
    class lJ extends WJ {
      _parse(JJ) {
        const cJ = this._getOrReturnCtx(JJ);
        return rJ(cJ, {
          code: DJ.invalid_type,
          expected: YJ.never,
          received: cJ.parsedType
        }), mJ
      }
    }
    lJ.create = JJ => new lJ({
      typeName: gc.ZodNever,
      ...wJ(JJ)
    });
    class Jc extends WJ {
      _parse(JJ) {
        if (this._getType(JJ) !== YJ.undefined) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.void,
            received: cJ.parsedType
          }), mJ
        }
        return EJ(JJ.data)
      }
    }
    Jc.create = JJ => new Jc({
      typeName: gc.ZodVoid,
      ...wJ(JJ)
    });
    class cc extends WJ {
      _parse(JJ) {
        const {
          ctx: cJ,
          status: ZJ
        } = this._processInputParams(JJ), FJ = this._def;
        if (cJ.parsedType !== YJ.array) return rJ(cJ, {
          code: DJ.invalid_type,
          expected: YJ.array,
          received: cJ.parsedType
        }), mJ;
        if (null !== FJ.exactLength) {
          const JJ = cJ.data.length > FJ.exactLength.value,
            UJ = cJ.data.length < FJ.exactLength.value;
          (JJ || UJ) && (rJ(cJ, {
            code: JJ ? DJ.too_big : DJ.too_small,
            minimum: UJ ? FJ.exactLength.value : void 0,
            maximum: JJ ? FJ.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: FJ.exactLength.message
          }), ZJ.Nn())
        }
        if (null !== FJ.minLength && cJ.data.length < FJ.minLength.value && (rJ(cJ, {
            code: DJ.too_small,
            minimum: FJ.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: FJ.minLength.message
          }), ZJ.Nn()), null !== FJ.maxLength && cJ.data.length > FJ.maxLength.value && (rJ(cJ, {
            code: DJ.too_big,
            maximum: FJ.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: FJ.maxLength.message
          }), ZJ.Nn()), cJ.common.async) return Promise.all([...cJ.data].map(((JJ, ZJ) => FJ.type._parseAsync(new MJ(cJ, JJ, cJ.path, ZJ))))).then((JJ => vJ.mergeArray(ZJ, JJ)));
        const UJ = [...cJ.data].map(((JJ, ZJ) => FJ.type._parseSync(new MJ(cJ, JJ, cJ.path, ZJ))));
        return vJ.mergeArray(ZJ, UJ)
      }
      get element() {
        return this._def.type
      }
      min(JJ, cJ) {
        return new cc({
          ...this._def,
          minLength: {
            value: JJ,
            message: IJ.toString(cJ)
          }
        })
      }
      max(JJ, cJ) {
        return new cc({
          ...this._def,
          maxLength: {
            value: JJ,
            message: IJ.toString(cJ)
          }
        })
      }
      length(JJ, cJ) {
        return new cc({
          ...this._def,
          exactLength: {
            value: JJ,
            message: IJ.toString(cJ)
          }
        })
      }
      nonempty(JJ) {
        return this.min(1, JJ)
      }
    }

    function Zc(JJ) {
      if (JJ instanceof Fc) {
        const cJ = {};
        for (const ZJ in JJ.shape) {
          const FJ = JJ.shape[ZJ];
          cJ[ZJ] = Qc.create(Zc(FJ))
        }
        return new Fc({
          ...JJ._def,
          shape: () => cJ
        })
      }
      return JJ instanceof cc ? new cc({
        ...JJ._def,
        type: Zc(JJ.element)
      }) : JJ instanceof Qc ? Qc.create(Zc(JJ.unwrap())) : JJ instanceof Ec ? Ec.create(Zc(JJ.unwrap())) : JJ instanceof jc ? jc.create(JJ.items.map((JJ => Zc(JJ)))) : JJ
    }
    cc.create = (JJ, cJ) => new cc({
      type: JJ,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: gc.ZodArray,
      ...wJ(cJ)
    });
    class Fc extends WJ {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const JJ = this._def.shape(),
          cJ = AJ.objectKeys(JJ);
        return this._cached = {
          shape: JJ,
          keys: cJ
        }
      }
      _parse(JJ) {
        if (this._getType(JJ) !== YJ.object) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.object,
            received: cJ.parsedType
          }), mJ
        }
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ), {
          shape: FJ,
          keys: UJ
        } = this._getCached(), eJ = [];
        if (!(this._def.catchall instanceof lJ && "strip" === this._def.unknownKeys))
          for (const AJ in ZJ.data) UJ.includes(AJ) || eJ.push(AJ);
        const XJ = [];
        for (const AJ of UJ) {
          const JJ = FJ[AJ],
            cJ = ZJ.data[AJ];
          XJ.push({
            key: {
              status: "valid",
              value: AJ
            },
            value: JJ._parse(new MJ(ZJ, cJ, ZJ.path, AJ)),
            alwaysSet: AJ in ZJ.data
          })
        }
        if (this._def.catchall instanceof lJ) {
          const JJ = this._def.unknownKeys;
          if ("passthrough" === JJ)
            for (const cJ of eJ) XJ.push({
              key: {
                status: "valid",
                value: cJ
              },
              value: {
                status: "valid",
                value: ZJ.data[cJ]
              }
            });
          else if ("strict" === JJ) eJ.length > 0 && (rJ(ZJ, {
            code: DJ.unrecognized_keys,
            keys: eJ
          }), cJ.Nn());
          else if ("strip" !== JJ) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const JJ = this._def.catchall;
          for (const cJ of eJ) {
            const FJ = ZJ.data[cJ];
            XJ.push({
              key: {
                status: "valid",
                value: cJ
              },
              value: JJ._parse(new MJ(ZJ, FJ, ZJ.path, cJ)),
              alwaysSet: cJ in ZJ.data
            })
          }
        }
        return ZJ.common.async ? Promise.resolve().then((async () => {
          const JJ = [];
          for (const cJ of XJ) {
            const ZJ = await cJ.key;
            JJ.push({
              key: ZJ,
              value: await cJ.value,
              alwaysSet: cJ.alwaysSet
            })
          }
          return JJ
        })).then((JJ => vJ.mergeObjectSync(cJ, JJ))) : vJ.mergeObjectSync(cJ, XJ)
      }
      get shape() {
        return this._def.shape()
      }
      strict(JJ) {
        return IJ.errToObj, new Fc({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== JJ ? {
            errorMap: (cJ, ZJ) => {
              var FJ, UJ, eJ, XJ;
              const AJ = null !== (eJ = null === (UJ = (FJ = this._def).errorMap) || void 0 === UJ ? void 0 : UJ.call(FJ, cJ, ZJ).message) && void 0 !== eJ ? eJ : ZJ.defaultError;
              return "unrecognized_keys" === cJ.code ? {
                message: null !== (XJ = IJ.errToObj(JJ).message) && void 0 !== XJ ? XJ : AJ
              } : {
                message: AJ
              }
            }
          } : {}
        })
      }
      strip() {
        return new Fc({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Fc({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(JJ) {
        return new Fc({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...JJ
          })
        })
      }
      merge(JJ) {
        return new Fc({
          unknownKeys: JJ._def.unknownKeys,
          catchall: JJ._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...JJ._def.shape()
          }),
          typeName: gc.ZodObject
        })
      }
      setKey(JJ, cJ) {
        return this.augment({
          [JJ]: cJ
        })
      }
      catchall(JJ) {
        return new Fc({
          ...this._def,
          catchall: JJ
        })
      }
      PD(JJ) {
        const cJ = {};
        return AJ.objectKeys(JJ).forEach((ZJ => {
          JJ[ZJ] && this.shape[ZJ] && (cJ[ZJ] = this.shape[ZJ])
        })), new Fc({
          ...this._def,
          shape: () => cJ
        })
      }
      omit(JJ) {
        const cJ = {};
        return AJ.objectKeys(this.shape).forEach((ZJ => {
          JJ[ZJ] || (cJ[ZJ] = this.shape[ZJ])
        })), new Fc({
          ...this._def,
          shape: () => cJ
        })
      }
      deepPartial() {
        return Zc(this)
      }
      partial(JJ) {
        const cJ = {};
        return AJ.objectKeys(this.shape).forEach((ZJ => {
          const FJ = this.shape[ZJ];
          JJ && !JJ[ZJ] ? cJ[ZJ] = FJ : cJ[ZJ] = FJ.optional()
        })), new Fc({
          ...this._def,
          shape: () => cJ
        })
      }
      required(JJ) {
        const cJ = {};
        return AJ.objectKeys(this.shape).forEach((ZJ => {
          if (JJ && !JJ[ZJ]) cJ[ZJ] = this.shape[ZJ];
          else {
            let JJ = this.shape[ZJ];
            for (; JJ instanceof Qc;) JJ = JJ._def.innerType;
            cJ[ZJ] = JJ
          }
        })), new Fc({
          ...this._def,
          shape: () => cJ
        })
      }
      keyof() {
        return fc(AJ.objectKeys(this.shape))
      }
    }
    Fc.create = (JJ, cJ) => new Fc({
      shape: () => JJ,
      unknownKeys: "strip",
      catchall: lJ.create(),
      typeName: gc.ZodObject,
      ...wJ(cJ)
    }), Fc.strictCreate = (JJ, cJ) => new Fc({
      shape: () => JJ,
      unknownKeys: "strict",
      catchall: lJ.create(),
      typeName: gc.ZodObject,
      ...wJ(cJ)
    }), Fc.lazycreate = (JJ, cJ) => new Fc({
      shape: JJ,
      unknownKeys: "strip",
      catchall: lJ.create(),
      typeName: gc.ZodObject,
      ...wJ(cJ)
    });
    class Uc extends WJ {
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ), ZJ = this._def.options;
        if (cJ.common.async) return Promise.all(ZJ.map((async JJ => {
          const ZJ = {
            ...cJ,
            common: {
              ...cJ.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await JJ._parseAsync({
              data: cJ.data,
              path: cJ.path,
              parent: ZJ
            }),
            ctx: ZJ
          }
        }))).then((function(JJ) {
          for (const cJ of JJ)
            if ("valid" === cJ.result.status) return cJ.result;
          for (const FJ of JJ)
            if ("Nn" === FJ.result.status) return cJ.common.issues.push(...FJ.ctx.common.issues), FJ.result;
          const ZJ = JJ.map((JJ => new sJ(JJ.ctx.common.issues)));
          return rJ(cJ, {
            code: DJ.invalid_union,
            unionErrors: ZJ
          }), mJ
        }));
        {
          let JJ;
          const FJ = [];
          for (const eJ of ZJ) {
            const ZJ = {
                ...cJ,
                common: {
                  ...cJ.common,
                  issues: []
                },
                parent: null
              },
              UJ = eJ._parseSync({
                data: cJ.data,
                path: cJ.path,
                parent: ZJ
              });
            if ("valid" === UJ.status) return UJ;
            "Nn" !== UJ.status || JJ || (JJ = {
              result: UJ,
              ctx: ZJ
            }), ZJ.common.issues.length && FJ.push(ZJ.common.issues)
          }
          if (JJ) return cJ.common.issues.push(...JJ.ctx.common.issues), JJ.result;
          const UJ = FJ.map((JJ => new sJ(JJ)));
          return rJ(cJ, {
            code: DJ.invalid_union,
            unionErrors: UJ
          }), mJ
        }
      }
      get options() {
        return this._def.options
      }
    }
    Uc.create = (JJ, cJ) => new Uc({
      options: JJ,
      typeName: gc.ZodUnion,
      ...wJ(cJ)
    });
    const ec = JJ => JJ instanceof nc ? ec(JJ.schema) : JJ instanceof mc ? ec(JJ.innerType()) : JJ instanceof Gc ? [JJ.value] : JJ instanceof xc ? JJ.options : JJ instanceof rc ? Object.keys(JJ.enum) : JJ instanceof Vc ? ec(JJ._def.innerType) : JJ instanceof aJ ? [void 0] : JJ instanceof BJ ? [null] : null;
    class Xc extends WJ {
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ);
        if (cJ.parsedType !== YJ.object) return rJ(cJ, {
          code: DJ.invalid_type,
          expected: YJ.object,
          received: cJ.parsedType
        }), mJ;
        const ZJ = this.discriminator,
          FJ = cJ.data[ZJ],
          UJ = this.optionsMap.get(FJ);
        return UJ ? cJ.common.async ? UJ._parseAsync({
          data: cJ.data,
          path: cJ.path,
          parent: cJ
        }) : UJ._parseSync({
          data: cJ.data,
          path: cJ.path,
          parent: cJ
        }) : (rJ(cJ, {
          code: DJ.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [ZJ]
        }), mJ)
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
      static create(JJ, cJ, ZJ) {
        const FJ = new Map;
        for (const UJ of cJ) {
          const cJ = ec(UJ.shape[JJ]);
          if (!cJ) throw new Error(`A discriminator value for key \`${JJ}\` could not be extracted from all schema options`);
          for (const ZJ of cJ) {
            if (FJ.has(ZJ)) throw new Error(`Discriminator property ${String(JJ)} has duplicate value ${String(ZJ)}`);
            FJ.set(ZJ, UJ)
          }
        }
        return new Xc({
          typeName: gc.ZodDiscriminatedUnion,
          discriminator: JJ,
          options: cJ,
          optionsMap: FJ,
          ...wJ(ZJ)
        })
      }
    }

    function Ac(JJ, cJ) {
      const ZJ = hJ(JJ),
        FJ = hJ(cJ);
      if (JJ === cJ) return {
        valid: !0,
        data: JJ
      };
      if (ZJ === YJ.object && FJ === YJ.object) {
        const ZJ = AJ.objectKeys(cJ),
          FJ = AJ.objectKeys(JJ).filter((JJ => -1 !== ZJ.indexOf(JJ))),
          UJ = {
            ...JJ,
            ...cJ
          };
        for (const eJ of FJ) {
          const ZJ = Ac(JJ[eJ], cJ[eJ]);
          if (!ZJ.valid) return {
            valid: !1
          };
          UJ[eJ] = ZJ.data
        }
        return {
          valid: !0,
          data: UJ
        }
      }
      if (ZJ === YJ.array && FJ === YJ.array) {
        if (JJ.length !== cJ.length) return {
          valid: !1
        };
        const ZJ = [];
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          const UJ = Ac(JJ[FJ], cJ[FJ]);
          if (!UJ.valid) return {
            valid: !1
          };
          ZJ.push(UJ.data)
        }
        return {
          valid: !0,
          data: ZJ
        }
      }
      return ZJ === YJ.date && FJ === YJ.date && +JJ === +cJ ? {
        valid: !0,
        data: JJ
      } : {
        valid: !1
      }
    }
    class qc extends WJ {
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ), FJ = (JJ, FJ) => {
          if (VJ(JJ) || VJ(FJ)) return mJ;
          const UJ = Ac(JJ.value, FJ.value);
          return UJ.valid ? ((KJ(JJ) || KJ(FJ)) && cJ.Nn(), {
            status: cJ.value,
            value: UJ.data
          }) : (rJ(ZJ, {
            code: DJ.invalid_intersection_types
          }), mJ)
        };
        return ZJ.common.async ? Promise.all([this._def.left._parseAsync({
          data: ZJ.data,
          path: ZJ.path,
          parent: ZJ
        }), this._def.right._parseAsync({
          data: ZJ.data,
          path: ZJ.path,
          parent: ZJ
        })]).then((JJ => {
          let [cJ, ZJ] = JJ;
          return FJ(cJ, ZJ)
        })) : FJ(this._def.left._parseSync({
          data: ZJ.data,
          path: ZJ.path,
          parent: ZJ
        }), this._def.right._parseSync({
          data: ZJ.data,
          path: ZJ.path,
          parent: ZJ
        }))
      }
    }
    qc.create = (JJ, cJ, ZJ) => new qc({
      left: JJ,
      right: cJ,
      typeName: gc.ZodIntersection,
      ...wJ(ZJ)
    });
    class jc extends WJ {
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ);
        if (ZJ.parsedType !== YJ.array) return rJ(ZJ, {
          code: DJ.invalid_type,
          expected: YJ.array,
          received: ZJ.parsedType
        }), mJ;
        if (ZJ.data.length < this._def.items.length) return rJ(ZJ, {
          code: DJ.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), mJ;
        !this._def.rest && ZJ.data.length > this._def.items.length && (rJ(ZJ, {
          code: DJ.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), cJ.Nn());
        const FJ = [...ZJ.data].map(((JJ, cJ) => {
          const FJ = this._def.items[cJ] || this._def.rest;
          return FJ ? FJ._parse(new MJ(ZJ, JJ, ZJ.path, cJ)) : null
        })).filter((JJ => !!JJ));
        return ZJ.common.async ? Promise.all(FJ).then((JJ => vJ.mergeArray(cJ, JJ))) : vJ.mergeArray(cJ, FJ)
      }
      get items() {
        return this._def.items
      }
      rest(JJ) {
        return new jc({
          ...this._def,
          rest: JJ
        })
      }
    }
    jc.create = (JJ, cJ) => {
      if (!Array.isArray(JJ)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new jc({
        items: JJ,
        typeName: gc.ZodTuple,
        rest: null,
        ...wJ(cJ)
      })
    };
    class Yc extends WJ {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ);
        if (ZJ.parsedType !== YJ.object) return rJ(ZJ, {
          code: DJ.invalid_type,
          expected: YJ.object,
          received: ZJ.parsedType
        }), mJ;
        const FJ = [],
          UJ = this._def.keyType,
          eJ = this._def.valueType;
        for (const XJ in ZJ.data) FJ.push({
          key: UJ._parse(new MJ(ZJ, XJ, ZJ.path, XJ)),
          value: eJ._parse(new MJ(ZJ, ZJ.data[XJ], ZJ.path, XJ))
        });
        return ZJ.common.async ? vJ.mergeObjectAsync(cJ, FJ) : vJ.mergeObjectSync(cJ, FJ)
      }
      get element() {
        return this._def.valueType
      }
      static create(JJ, cJ, ZJ) {
        return new Yc(cJ instanceof WJ ? {
          keyType: JJ,
          valueType: cJ,
          typeName: gc.ZodRecord,
          ...wJ(ZJ)
        } : {
          keyType: OJ.create(),
          valueType: JJ,
          typeName: gc.ZodRecord,
          ...wJ(cJ)
        })
      }
    }
    class hc extends WJ {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ);
        if (ZJ.parsedType !== YJ.map) return rJ(ZJ, {
          code: DJ.invalid_type,
          expected: YJ.map,
          received: ZJ.parsedType
        }), mJ;
        const FJ = this._def.keyType,
          UJ = this._def.valueType,
          eJ = [...ZJ.data.entries()].map(((JJ, cJ) => {
            let [eJ, XJ] = JJ;
            return {
              key: FJ._parse(new MJ(ZJ, eJ, ZJ.path, [cJ, "key"])),
              value: UJ._parse(new MJ(ZJ, XJ, ZJ.path, [cJ, "value"]))
            }
          }));
        if (ZJ.common.async) {
          const JJ = new Map;
          return Promise.resolve().then((async () => {
            for (const ZJ of eJ) {
              const FJ = await ZJ.key,
                UJ = await ZJ.value;
              if ("aborted" === FJ.status || "aborted" === UJ.status) return mJ;
              "Nn" !== FJ.status && "Nn" !== UJ.status || cJ.Nn(), JJ.set(FJ.value, UJ.value)
            }
            return {
              status: cJ.value,
              value: JJ
            }
          }))
        } {
          const JJ = new Map;
          for (const ZJ of eJ) {
            const FJ = ZJ.key,
              UJ = ZJ.value;
            if ("aborted" === FJ.status || "aborted" === UJ.status) return mJ;
            "Nn" !== FJ.status && "Nn" !== UJ.status || cJ.Nn(), JJ.set(FJ.value, UJ.value)
          }
          return {
            status: cJ.value,
            value: JJ
          }
        }
      }
    }
    hc.create = (JJ, cJ, ZJ) => new hc({
      valueType: cJ,
      keyType: JJ,
      typeName: gc.ZodMap,
      ...wJ(ZJ)
    });
    class Dc extends WJ {
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ);
        if (ZJ.parsedType !== YJ.set) return rJ(ZJ, {
          code: DJ.invalid_type,
          expected: YJ.set,
          received: ZJ.parsedType
        }), mJ;
        const FJ = this._def;
        null !== FJ.minSize && ZJ.data.size < FJ.minSize.value && (rJ(ZJ, {
          code: DJ.too_small,
          minimum: FJ.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: FJ.minSize.message
        }), cJ.Nn()), null !== FJ.maxSize && ZJ.data.size > FJ.maxSize.value && (rJ(ZJ, {
          code: DJ.too_big,
          maximum: FJ.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: FJ.maxSize.message
        }), cJ.Nn());
        const UJ = this._def.valueType;

        function eJ(JJ) {
          const ZJ = new Set;
          for (const FJ of JJ) {
            if ("aborted" === FJ.status) return mJ;
            "Nn" === FJ.status && cJ.Nn(), ZJ.add(FJ.value)
          }
          return {
            status: cJ.value,
            value: ZJ
          }
        }
        const XJ = [...ZJ.data.values()].map(((JJ, cJ) => UJ._parse(new MJ(ZJ, JJ, ZJ.path, cJ))));
        return ZJ.common.async ? Promise.all(XJ).then((JJ => eJ(JJ))) : eJ(XJ)
      }
      min(JJ, cJ) {
        return new Dc({
          ...this._def,
          minSize: {
            value: JJ,
            message: IJ.toString(cJ)
          }
        })
      }
      max(JJ, cJ) {
        return new Dc({
          ...this._def,
          maxSize: {
            value: JJ,
            message: IJ.toString(cJ)
          }
        })
      }
      size(JJ, cJ) {
        return this.min(JJ, cJ).max(JJ, cJ)
      }
      nonempty(JJ) {
        return this.min(1, JJ)
      }
    }
    Dc.create = (JJ, cJ) => new Dc({
      valueType: JJ,
      minSize: null,
      maxSize: null,
      typeName: gc.ZodSet,
      ...wJ(cJ)
    });
    class sc extends WJ {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ);
        if (cJ.parsedType !== YJ.function) return rJ(cJ, {
          code: DJ.invalid_type,
          expected: YJ.function,
          received: cJ.parsedType
        }), mJ;

        function ZJ(JJ, ZJ) {
          return xJ({
            data: JJ,
            path: cJ.path,
            errorMaps: [cJ.common.contextualErrorMap, cJ.schemaErrorMap, fJ(), nJ].filter((JJ => !!JJ)),
            issueData: {
              code: DJ.invalid_arguments,
              argumentsError: ZJ
            }
          })
        }

        function FJ(JJ, ZJ) {
          return xJ({
            data: JJ,
            path: cJ.path,
            errorMaps: [cJ.common.contextualErrorMap, cJ.schemaErrorMap, fJ(), nJ].filter((JJ => !!JJ)),
            issueData: {
              code: DJ.invalid_return_type,
              returnTypeError: ZJ
            }
          })
        }
        const UJ = {
            errorMap: cJ.common.contextualErrorMap
          },
          eJ = cJ.data;
        if (this._def.returns instanceof vc) {
          const JJ = this;
          return EJ((async function() {
            for (var cJ = arguments.length, XJ = new Array(cJ), AJ = 0; AJ < cJ; AJ++) XJ[AJ] = arguments[AJ];
            const qJ = new sJ([]),
              jJ = await JJ._def.args.parseAsync(XJ, UJ).catch((JJ => {
                throw qJ.addIssue(ZJ(XJ, JJ)), qJ
              })),
              YJ = await Reflect.apply(eJ, this, jJ);
            return await JJ._def.returns._def.type.parseAsync(YJ, UJ).catch((JJ => {
              throw qJ.addIssue(FJ(YJ, JJ)), qJ
            }))
          }))
        } {
          const JJ = this;
          return EJ((function() {
            for (var cJ = arguments.length, XJ = new Array(cJ), AJ = 0; AJ < cJ; AJ++) XJ[AJ] = arguments[AJ];
            const qJ = JJ._def.args.safeParse(XJ, UJ);
            if (!qJ.success) throw new sJ([ZJ(XJ, qJ.error)]);
            const jJ = Reflect.apply(eJ, this, qJ.data),
              YJ = JJ._def.returns.safeParse(jJ, UJ);
            if (!YJ.success) throw new sJ([FJ(jJ, YJ.error)]);
            return YJ.data
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
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return new sc({
          ...this._def,
          args: jc.create(cJ).rest(oJ.create())
        })
      }
      returns(JJ) {
        return new sc({
          ...this._def,
          returns: JJ
        })
      }
      implement(JJ) {
        return this.parse(JJ)
      }
      strictImplement(JJ) {
        return this.parse(JJ)
      }
      static create(JJ, cJ, ZJ) {
        return new sc({
          args: JJ || jc.create([]).rest(oJ.create()),
          returns: cJ || oJ.create(),
          typeName: gc.ZodFunction,
          ...wJ(ZJ)
        })
      }
    }
    class nc extends WJ {
      get schema() {
        return this._def.getter()
      }
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ);
        return this._def.getter()._parse({
          data: cJ.data,
          path: cJ.path,
          parent: cJ
        })
      }
    }
    nc.create = (JJ, cJ) => new nc({
      getter: JJ,
      typeName: gc.ZodLazy,
      ...wJ(cJ)
    });
    class Gc extends WJ {
      _parse(JJ) {
        if (JJ.data !== this._def.value) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            received: cJ.data,
            code: DJ.invalid_literal,
            expected: this._def.value
          }), mJ
        }
        return {
          status: "valid",
          value: JJ.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function fc(JJ, cJ) {
      return new xc({
        values: JJ,
        typeName: gc.ZodEnum,
        ...wJ(cJ)
      })
    }
    Gc.create = (JJ, cJ) => new Gc({
      value: JJ,
      typeName: gc.ZodLiteral,
      ...wJ(cJ)
    });
    class xc extends WJ {
      _parse(JJ) {
        if ("string" !== typeof JJ.data) {
          const cJ = this._getOrReturnCtx(JJ),
            ZJ = this._def.values;
          return rJ(cJ, {
            expected: AJ.joinValues(ZJ),
            received: cJ.parsedType,
            code: DJ.invalid_type
          }), mJ
        }
        if (-1 === this._def.values.indexOf(JJ.data)) {
          const cJ = this._getOrReturnCtx(JJ),
            ZJ = this._def.values;
          return rJ(cJ, {
            received: cJ.data,
            code: DJ.invalid_enum_value,
            options: ZJ
          }), mJ
        }
        return EJ(JJ.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const JJ = {};
        for (const cJ of this._def.values) JJ[cJ] = cJ;
        return JJ
      }
      get Values() {
        const JJ = {};
        for (const cJ of this._def.values) JJ[cJ] = cJ;
        return JJ
      }
      get Enum() {
        const JJ = {};
        for (const cJ of this._def.values) JJ[cJ] = cJ;
        return JJ
      }
      extract(JJ) {
        return xc.create(JJ)
      }
      exclude(JJ) {
        return xc.create(this.options.filter((cJ => !JJ.includes(cJ))))
      }
    }
    xc.create = fc;
    class rc extends WJ {
      _parse(JJ) {
        const cJ = AJ.getValidEnumValues(this._def.values),
          ZJ = this._getOrReturnCtx(JJ);
        if (ZJ.parsedType !== YJ.string && ZJ.parsedType !== YJ.number) {
          const JJ = AJ.objectValues(cJ);
          return rJ(ZJ, {
            expected: AJ.joinValues(JJ),
            received: ZJ.parsedType,
            code: DJ.invalid_type
          }), mJ
        }
        if (-1 === cJ.indexOf(JJ.data)) {
          const JJ = AJ.objectValues(cJ);
          return rJ(ZJ, {
            received: ZJ.data,
            code: DJ.invalid_enum_value,
            options: JJ
          }), mJ
        }
        return EJ(JJ.data)
      }
      get enum() {
        return this._def.values
      }
    }
    rc.create = (JJ, cJ) => new rc({
      values: JJ,
      typeName: gc.ZodNativeEnum,
      ...wJ(cJ)
    });
    class vc extends WJ {
      unwrap() {
        return this._def.type
      }
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ);
        if (cJ.parsedType !== YJ.promise && !1 === cJ.common.async) return rJ(cJ, {
          code: DJ.invalid_type,
          expected: YJ.promise,
          received: cJ.parsedType
        }), mJ;
        const ZJ = cJ.parsedType === YJ.promise ? cJ.data : Promise.resolve(cJ.data);
        return EJ(ZJ.then((JJ => this._def.type.parseAsync(JJ, {
          path: cJ.path,
          errorMap: cJ.common.contextualErrorMap
        }))))
      }
    }
    vc.create = (JJ, cJ) => new vc({
      type: JJ,
      typeName: gc.ZodPromise,
      ...wJ(cJ)
    });
    class mc extends WJ {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === gc.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ), FJ = this._def.effect || null, UJ = {
          addIssue: JJ => {
            rJ(ZJ, JJ), JJ.fatal ? cJ.abort() : cJ.Nn()
          },
          get path() {
            return ZJ.path
          }
        };
        if (UJ.addIssue = UJ.addIssue.bind(UJ), "preprocess" === FJ.type) {
          const JJ = FJ.transform(ZJ.data, UJ);
          return ZJ.common.issues.length ? {
            status: "Nn",
            value: ZJ.data
          } : ZJ.common.async ? Promise.resolve(JJ).then((JJ => this._def.schema._parseAsync({
            data: JJ,
            path: ZJ.path,
            parent: ZJ
          }))) : this._def.schema._parseSync({
            data: JJ,
            path: ZJ.path,
            parent: ZJ
          })
        }
        if ("refinement" === FJ.type) {
          const JJ = JJ => {
            const cJ = FJ.refinement(JJ, UJ);
            if (ZJ.common.async) return Promise.resolve(cJ);
            if (cJ instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return JJ
          };
          if (!1 === ZJ.common.async) {
            const FJ = this._def.schema._parseSync({
              data: ZJ.data,
              path: ZJ.path,
              parent: ZJ
            });
            return "aborted" === FJ.status ? mJ : ("Nn" === FJ.status && cJ.Nn(), JJ(FJ.value), {
              status: cJ.value,
              value: FJ.value
            })
          }
          return this._def.schema._parseAsync({
            data: ZJ.data,
            path: ZJ.path,
            parent: ZJ
          }).then((ZJ => "aborted" === ZJ.status ? mJ : ("Nn" === ZJ.status && cJ.Nn(), JJ(ZJ.value).then((() => ({
            status: cJ.value,
            value: ZJ.value
          }))))))
        }
        if ("transform" === FJ.type) {
          if (!1 === ZJ.common.async) {
            const JJ = this._def.schema._parseSync({
              data: ZJ.data,
              path: ZJ.path,
              parent: ZJ
            });
            if (!yJ(JJ)) return JJ;
            const eJ = FJ.transform(JJ.value, UJ);
            if (eJ instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: cJ.value,
              value: eJ
            }
          }
          return this._def.schema._parseAsync({
            data: ZJ.data,
            path: ZJ.path,
            parent: ZJ
          }).then((JJ => yJ(JJ) ? Promise.resolve(FJ.transform(JJ.value, UJ)).then((JJ => ({
            status: cJ.value,
            value: JJ
          }))) : JJ))
        }
        AJ.assertNever(FJ)
      }
    }
    mc.create = (JJ, cJ, ZJ) => new mc({
      schema: JJ,
      typeName: gc.ZodEffects,
      effect: cJ,
      ...wJ(ZJ)
    }), mc.createWithPreprocess = (JJ, cJ, ZJ) => new mc({
      schema: cJ,
      effect: {
        type: "preprocess",
        transform: JJ
      },
      typeName: gc.ZodEffects,
      ...wJ(ZJ)
    });
    class Qc extends WJ {
      _parse(JJ) {
        return this._getType(JJ) === YJ.undefined ? EJ(void 0) : this._def.innerType._parse(JJ)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Qc.create = (JJ, cJ) => new Qc({
      innerType: JJ,
      typeName: gc.ZodOptional,
      ...wJ(cJ)
    });
    class Ec extends WJ {
      _parse(JJ) {
        return this._getType(JJ) === YJ.null ? EJ(null) : this._def.innerType._parse(JJ)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Ec.create = (JJ, cJ) => new Ec({
      innerType: JJ,
      typeName: gc.ZodNullable,
      ...wJ(cJ)
    });
    class Vc extends WJ {
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ);
        let ZJ = cJ.data;
        return cJ.parsedType === YJ.undefined && (ZJ = this._def.defaultValue()), this._def.innerType._parse({
          data: ZJ,
          path: cJ.path,
          parent: cJ
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Vc.create = (JJ, cJ) => new Vc({
      innerType: JJ,
      typeName: gc.ZodDefault,
      defaultValue: "function" === typeof cJ.default ? cJ.default : () => cJ.default,
      ...wJ(cJ)
    });
    class Kc extends WJ {
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ), ZJ = {
          ...cJ,
          common: {
            ...cJ.common,
            issues: []
          }
        }, FJ = this._def.innerType._parse({
          data: ZJ.data,
          path: ZJ.path,
          parent: {
            ...ZJ
          }
        });
        return SJ(FJ) ? FJ.then((JJ => ({
          status: "valid",
          value: "valid" === JJ.status ? JJ.value : this._def.catchValue({
            get error() {
              return new sJ(ZJ.common.issues)
            },
            input: ZJ.data
          })
        }))) : {
          status: "valid",
          value: "valid" === FJ.status ? FJ.value : this._def.catchValue({
            get error() {
              return new sJ(ZJ.common.issues)
            },
            input: ZJ.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Kc.create = (JJ, cJ) => new Kc({
      innerType: JJ,
      typeName: gc.ZodCatch,
      catchValue: "function" === typeof cJ.catch ? cJ.catch : () => cJ.catch,
      ...wJ(cJ)
    });
    class yc extends WJ {
      _parse(JJ) {
        if (this._getType(JJ) !== YJ.nan) {
          const cJ = this._getOrReturnCtx(JJ);
          return rJ(cJ, {
            code: DJ.invalid_type,
            expected: YJ.nan,
            received: cJ.parsedType
          }), mJ
        }
        return {
          status: "valid",
          value: JJ.data
        }
      }
    }
    yc.create = JJ => new yc({
      typeName: gc.ZodNaN,
      ...wJ(JJ)
    });
    const Sc = Symbol("zod_brand");
    class Ic extends WJ {
      _parse(JJ) {
        const {
          ctx: cJ
        } = this._processInputParams(JJ), ZJ = cJ.data;
        return this._def.type._parse({
          data: ZJ,
          path: cJ.path,
          parent: cJ
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Mc extends WJ {
      _parse(JJ) {
        const {
          status: cJ,
          ctx: ZJ
        } = this._processInputParams(JJ);
        if (ZJ.common.async) {
          return (async () => {
            const JJ = await this._def.in._parseAsync({
              data: ZJ.data,
              path: ZJ.path,
              parent: ZJ
            });
            return "aborted" === JJ.status ? mJ : "Nn" === JJ.status ? (cJ.Nn(), QJ(JJ.value)) : this._def.out._parseAsync({
              data: JJ.value,
              path: ZJ.path,
              parent: ZJ
            })
          })()
        } {
          const JJ = this._def.in._parseSync({
            data: ZJ.data,
            path: ZJ.path,
            parent: ZJ
          });
          return "aborted" === JJ.status ? mJ : "Nn" === JJ.status ? (cJ.Nn(), {
            status: "Nn",
            value: JJ.value
          }) : this._def.out._parseSync({
            data: JJ.value,
            path: ZJ.path,
            parent: ZJ
          })
        }
      }
      static create(JJ, cJ) {
        return new Mc({
          in: JJ,
          out: cJ,
          typeName: gc.ZodPipeline
        })
      }
    }
    class bc extends WJ {
      _parse(JJ) {
        const cJ = this._def.innerType._parse(JJ);
        return yJ(cJ) && (cJ.value = Object.freeze(cJ.value)), cJ
      }
    }
    bc.create = (JJ, cJ) => new bc({
      innerType: JJ,
      typeName: gc.ZodReadonly,
      ...wJ(cJ)
    });
    const wc = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        return JJ ? tJ.create().superRefine(((FJ, UJ) => {
          var eJ, XJ;
          if (!JJ(FJ)) {
            const JJ = "function" === typeof cJ ? cJ(FJ) : "string" === typeof cJ ? {
                message: cJ
              } : cJ,
              AJ = null === (XJ = null !== (eJ = JJ.fatal) && void 0 !== eJ ? eJ : ZJ) || void 0 === XJ || XJ,
              qJ = "string" === typeof JJ ? {
                message: JJ
              } : JJ;
            UJ.addIssue({
              code: "custom",
              ...qJ,
              fatal: AJ
            })
          }
        })) : tJ.create()
      },
      Wc = {
        object: Fc.lazycreate
      };
    var gc;
    ! function(JJ) {
      JJ.ZodString = "ZodString", JJ.ZodNumber = "ZodNumber", JJ.ZodNaN = "ZodNaN", JJ.ZodBigInt = "ZodBigInt", JJ.ZodBoolean = "ZodBoolean", JJ.ZodDate = "ZodDate", JJ.ZodSymbol = "ZodSymbol", JJ.ZodUndefined = "ZodUndefined", JJ.ZodNull = "ZodNull", JJ.ZodAny = "ZodAny", JJ.ZodUnknown = "ZodUnknown", JJ.ZodNever = "ZodNever", JJ.ZodVoid = "ZodVoid", JJ.ZodArray = "ZodArray", JJ.ZodObject = "ZodObject", JJ.ZodUnion = "ZodUnion", JJ.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", JJ.ZodIntersection = "ZodIntersection", JJ.ZodTuple = "ZodTuple", JJ.ZodRecord = "ZodRecord", JJ.ZodMap = "ZodMap", JJ.ZodSet = "ZodSet", JJ.ZodFunction = "ZodFunction", JJ.ZodLazy = "ZodLazy", JJ.ZodLiteral = "ZodLiteral", JJ.ZodEnum = "ZodEnum", JJ.ZodEffects = "ZodEffects", JJ.ZodNativeEnum = "ZodNativeEnum", JJ.ZodOptional = "ZodOptional", JJ.ZodNullable = "ZodNullable", JJ.ZodDefault = "ZodDefault", JJ.ZodCatch = "ZodCatch", JJ.ZodPromise = "ZodPromise", JJ.ZodBranded = "ZodBranded", JJ.ZodPipeline = "ZodPipeline", JJ.ZodReadonly = "ZodReadonly"
    }(gc || (gc = {}));
    const Hc = OJ.create,
      Pc = CJ.create,
      kc = yc.create,
      pc = uJ.create,
      dc = iJ.create,
      zc = RJ.create,
      Nc = LJ.create,
      Oc = aJ.create,
      Tc = BJ.create,
      Cc = tJ.create,
      uc = oJ.create,
      ic = lJ.create,
      Rc = Jc.create,
      Lc = cc.create,
      ac = Fc.create,
      Bc = Fc.strictCreate,
      tc = Uc.create,
      oc = Xc.create,
      lc = qc.create,
      JZ = jc.create,
      cZ = Yc.create,
      ZZ = hc.create,
      FZ = Dc.create,
      UZ = sc.create,
      eZ = nc.create,
      XZ = Gc.create,
      AZ = xc.create,
      qZ = rc.create,
      jZ = vc.create,
      YZ = mc.create,
      hZ = Qc.create,
      DZ = Ec.create,
      sZ = mc.createWithPreprocess,
      nZ = Mc.create,
      GZ = {
        string: JJ => OJ.create({
          ...JJ,
          coerce: !0
        }),
        number: JJ => CJ.create({
          ...JJ,
          coerce: !0
        }),
        boolean: JJ => iJ.create({
          ...JJ,
          coerce: !0
        }),
        bigint: JJ => uJ.create({
          ...JJ,
          coerce: !0
        }),
        date: JJ => RJ.create({
          ...JJ,
          coerce: !0
        })
      },
      fZ = mJ;
    var xZ = Object.freeze({
        __proto__: null,
        defaultErrorMap: nJ,
        setErrorMap: function(JJ) {
          GJ = JJ
        },
        getErrorMap: fJ,
        makeIssue: xJ,
        EMPTY_PATH: [],
        addIssueToContext: rJ,
        ParseStatus: vJ,
        INVALID: mJ,
        DIRTY: QJ,
        OK: EJ,
        isAborted: VJ,
        isDirty: KJ,
        isValid: yJ,
        isAsync: SJ,
        get util() {
          return AJ
        },
        get objectUtil() {
          return qJ
        },
        ZodParsedType: YJ,
        getParsedType: hJ,
        ZodType: WJ,
        ZodString: OJ,
        ZodNumber: CJ,
        ZodBigInt: uJ,
        ZodBoolean: iJ,
        ZodDate: RJ,
        ZodSymbol: LJ,
        ZodUndefined: aJ,
        ZodNull: BJ,
        ZodAny: tJ,
        ZodUnknown: oJ,
        ZodNever: lJ,
        ZodVoid: Jc,
        ZodArray: cc,
        ZodObject: Fc,
        ZodUnion: Uc,
        ZodDiscriminatedUnion: Xc,
        ZodIntersection: qc,
        ZodTuple: jc,
        ZodRecord: Yc,
        ZodMap: hc,
        ZodSet: Dc,
        ZodFunction: sc,
        ZodLazy: nc,
        ZodLiteral: Gc,
        ZodEnum: xc,
        ZodNativeEnum: rc,
        ZodPromise: vc,
        ZodEffects: mc,
        ZodTransformer: mc,
        ZodOptional: Qc,
        ZodNullable: Ec,
        ZodDefault: Vc,
        ZodCatch: Kc,
        ZodNaN: yc,
        BRAND: Sc,
        ZodBranded: Ic,
        ZodPipeline: Mc,
        ZodReadonly: bc,
        custom: wc,
        Schema: WJ,
        ZodSchema: WJ,
        late: Wc,
        get ZodFirstPartyTypeKind() {
          return gc
        },
        coerce: GZ,
        any: Cc,
        array: Lc,
        bigint: pc,
        boolean: dc,
        date: zc,
        discriminatedUnion: oc,
        effect: YZ,
        enum: AZ,
        function: UZ,
        instanceof: function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${JJ.name}`
          };
          return wc((cJ => cJ instanceof JJ), cJ)
        },
        intersection: lc,
        lazy: eZ,
        literal: XZ,
        map: ZZ,
        nan: kc,
        nativeEnum: qZ,
        never: ic,
        null: Tc,
        nullable: DZ,
        number: Pc,
        object: ac,
        oboolean: () => dc().optional(),
        onumber: () => Pc().optional(),
        optional: hZ,
        ostring: () => Hc().optional(),
        pipeline: nZ,
        preprocess: sZ,
        promise: jZ,
        record: cZ,
        set: FZ,
        strictObject: Bc,
        string: Hc,
        symbol: Nc,
        transformer: YZ,
        tuple: JZ,
        undefined: Oc,
        union: tc,
        unknown: uc,
        void: Rc,
        NEVER: fZ,
        ZodIssueCode: DJ,
        quotelessJson: JJ => JSON.stringify(JJ, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: sJ
      }),
      rZ = {
        exports: {}
      };
    ! function(JJ) {
      var cJ = function(JJ) {
        var ZJ = 1e7,
          FJ = 9007199254740992,
          UJ = DJ(FJ),
          eJ = "0123456789abcdefghijklmnopqrstuvwxyz",
          XJ = "function" === typeof BigInt;

        function AJ(JJ, cJ, ZJ, FJ) {
          return "undefined" === typeof JJ ? AJ[0] : "undefined" !== typeof cJ && (10 !== +cJ || ZJ) ? iJ(JJ, cJ, ZJ, FJ) : tJ(JJ)
        }

        function qJ(JJ, cJ) {
          this.value = JJ, this.sign = cJ, this.isSmall = !1
        }

        function jJ(JJ) {
          this.value = JJ, this.sign = JJ < 0, this.isSmall = !0
        }

        function YJ(JJ) {
          this.value = JJ
        }

        function hJ(JJ) {
          return -FJ < JJ && JJ < FJ
        }

        function DJ(JJ) {
          return JJ < 1e7 ? [JJ] : JJ < 1e14 ? [JJ % 1e7, Math.floor(JJ / 1e7)] : [JJ % 1e7, Math.floor(JJ / 1e7) % 1e7, Math.floor(JJ / 1e14)]
        }

        function sJ(JJ) {
          nJ(JJ);
          var cJ = JJ.length;
          if (cJ < 4 && wJ(JJ, UJ) < 0) switch (cJ) {
            case 0:
              return 0;
            case 1:
              return JJ[0];
            case 2:
              return JJ[0] + JJ[1] * ZJ;
            default:
              return JJ[0] + (JJ[1] + JJ[2] * ZJ) * ZJ
          }
          return JJ
        }

        function nJ(JJ) {
          for (var cJ = JJ.length; 0 === JJ[--cJ];);
          JJ.length = cJ + 1
        }

        function GJ(JJ) {
          for (var cJ = new Array(JJ), ZJ = -1; ++ZJ < JJ;) cJ[ZJ] = 0;
          return cJ
        }

        function fJ(JJ) {
          return JJ > 0 ? Math.floor(JJ) : Math.ceil(JJ)
        }

        function xJ(JJ, cJ) {
          var FJ, UJ, eJ = JJ.length,
            XJ = cJ.length,
            AJ = new Array(eJ),
            qJ = 0,
            jJ = ZJ;
          for (UJ = 0; UJ < XJ; UJ++) qJ = (FJ = JJ[UJ] + cJ[UJ] + qJ) >= jJ ? 1 : 0, AJ[UJ] = FJ - qJ * jJ;
          for (; UJ < eJ;) qJ = (FJ = JJ[UJ] + qJ) === jJ ? 1 : 0, AJ[UJ++] = FJ - qJ * jJ;
          return qJ > 0 && AJ.push(qJ), AJ
        }

        function rJ(JJ, cJ) {
          return JJ.length >= cJ.length ? xJ(JJ, cJ) : xJ(cJ, JJ)
        }

        function vJ(JJ, cJ) {
          var FJ, UJ, eJ = JJ.length,
            XJ = new Array(eJ),
            AJ = ZJ;
          for (UJ = 0; UJ < eJ; UJ++) FJ = JJ[UJ] - AJ + cJ, cJ = Math.floor(FJ / AJ), XJ[UJ] = FJ - cJ * AJ, cJ += 1;
          for (; cJ > 0;) XJ[UJ++] = cJ % AJ, cJ = Math.floor(cJ / AJ);
          return XJ
        }

        function mJ(JJ, cJ) {
          var FJ, UJ, eJ = JJ.length,
            XJ = cJ.length,
            AJ = new Array(eJ),
            qJ = 0,
            jJ = ZJ;
          for (FJ = 0; FJ < XJ; FJ++)(UJ = JJ[FJ] - qJ - cJ[FJ]) < 0 ? (UJ += jJ, qJ = 1) : qJ = 0, AJ[FJ] = UJ;
          for (FJ = XJ; FJ < eJ; FJ++) {
            if (!((UJ = JJ[FJ] - qJ) < 0)) {
              AJ[FJ++] = UJ;
              break
            }
            UJ += jJ, AJ[FJ] = UJ
          }
          for (; FJ < eJ; FJ++) AJ[FJ] = JJ[FJ];
          return nJ(AJ), AJ
        }

        function QJ(JJ, cJ, FJ) {
          var UJ, eJ, XJ = JJ.length,
            AJ = new Array(XJ),
            YJ = -cJ,
            hJ = ZJ;
          for (UJ = 0; UJ < XJ; UJ++) eJ = JJ[UJ] + YJ, YJ = Math.floor(eJ / hJ), eJ %= hJ, AJ[UJ] = eJ < 0 ? eJ + hJ : eJ;
          return "number" === typeof(AJ = sJ(AJ)) ? (FJ && (AJ = -AJ), new jJ(AJ)) : new qJ(AJ, FJ)
        }

        function EJ(JJ, cJ) {
          var FJ, UJ, eJ, XJ, AJ = JJ.length,
            qJ = cJ.length,
            jJ = GJ(AJ + qJ),
            YJ = ZJ;
          for (eJ = 0; eJ < AJ; ++eJ) {
            XJ = JJ[eJ];
            for (var hJ = 0; hJ < qJ; ++hJ) FJ = XJ * cJ[hJ] + jJ[eJ + hJ], UJ = Math.floor(FJ / YJ), jJ[eJ + hJ] = FJ - UJ * YJ, jJ[eJ + hJ + 1] += UJ
          }
          return nJ(jJ), jJ
        }

        function VJ(JJ, cJ) {
          var FJ, UJ, eJ = JJ.length,
            XJ = new Array(eJ),
            AJ = ZJ,
            qJ = 0;
          for (UJ = 0; UJ < eJ; UJ++) FJ = JJ[UJ] * cJ + qJ, qJ = Math.floor(FJ / AJ), XJ[UJ] = FJ - qJ * AJ;
          for (; qJ > 0;) XJ[UJ++] = qJ % AJ, qJ = Math.floor(qJ / AJ);
          return XJ
        }

        function KJ(JJ, cJ) {
          for (var ZJ = []; cJ-- > 0;) ZJ.push(0);
          return ZJ.concat(JJ)
        }

        function yJ(JJ, cJ) {
          var ZJ = Math.max(JJ.length, cJ.length);
          if (ZJ <= 30) return EJ(JJ, cJ);
          ZJ = Math.ceil(ZJ / 2);
          var FJ = JJ.slice(ZJ),
            UJ = JJ.slice(0, ZJ),
            eJ = cJ.slice(ZJ),
            XJ = cJ.slice(0, ZJ),
            AJ = yJ(UJ, XJ),
            qJ = yJ(FJ, eJ),
            jJ = yJ(rJ(UJ, FJ), rJ(XJ, eJ)),
            YJ = rJ(rJ(AJ, KJ(mJ(mJ(jJ, AJ), qJ), ZJ)), KJ(qJ, 2 * ZJ));
          return nJ(YJ), YJ
        }

        function SJ(JJ, cJ, FJ) {
          return new qJ(JJ < ZJ ? VJ(cJ, JJ) : EJ(cJ, DJ(JJ)), FJ)
        }

        function IJ(JJ) {
          var cJ, FJ, UJ, eJ, XJ = JJ.length,
            AJ = GJ(XJ + XJ),
            qJ = ZJ;
          for (UJ = 0; UJ < XJ; UJ++) {
            FJ = 0 - (eJ = JJ[UJ]) * eJ;
            for (var jJ = UJ; jJ < XJ; jJ++) cJ = eJ * JJ[jJ] * 2 + AJ[UJ + jJ] + FJ, FJ = Math.floor(cJ / qJ), AJ[UJ + jJ] = cJ - FJ * qJ;
            AJ[UJ + XJ] = FJ
          }
          return nJ(AJ), AJ
        }

        function MJ(JJ, cJ) {
          var FJ, UJ, eJ, XJ, AJ = JJ.length,
            qJ = GJ(AJ),
            jJ = ZJ;
          for (eJ = 0, FJ = AJ - 1; FJ >= 0; --FJ) eJ = (XJ = eJ * jJ + JJ[FJ]) - (UJ = fJ(XJ / cJ)) * cJ, qJ[FJ] = 0 | UJ;
          return [qJ, 0 | eJ]
        }

        function bJ(JJ, cJ) {
          var FJ, UJ = tJ(cJ);
          if (XJ) return [new YJ(JJ.value / UJ.value), new YJ(JJ.value % UJ.value)];
          var eJ, hJ = JJ.value,
            xJ = UJ.value;
          if (0 === xJ) throw new Error("Cannot divide by zero");
          if (JJ.isSmall) return UJ.isSmall ? [new jJ(fJ(hJ / xJ)), new jJ(hJ % xJ)] : [AJ[0], JJ];
          if (UJ.isSmall) {
            if (1 === xJ) return [JJ, AJ[0]];
            if (-1 == xJ) return [JJ.nZ(), AJ[0]];
            var rJ = Math.abs(xJ);
            if (rJ < ZJ) {
              eJ = sJ((FJ = MJ(hJ, rJ))[0]);
              var vJ = FJ[1];
              return JJ.sign && (vJ = -vJ), "number" === typeof eJ ? (JJ.sign !== UJ.sign && (eJ = -eJ), [new jJ(eJ), new jJ(vJ)]) : [new qJ(eJ, JJ.sign !== UJ.sign), new jJ(vJ)]
            }
            xJ = DJ(rJ)
          }
          var QJ = wJ(hJ, xJ);
          if (-1 === QJ) return [AJ[0], JJ];
          if (0 === QJ) return [AJ[JJ.sign === UJ.sign ? 1 : -1], AJ[0]];
          FJ = hJ.length + xJ.length <= 200 ? function(JJ, cJ) {
            var FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ = JJ.length,
              hJ = cJ.length,
              DJ = ZJ,
              nJ = GJ(cJ.length),
              fJ = cJ[hJ - 1],
              xJ = Math.ceil(DJ / (2 * fJ)),
              rJ = VJ(JJ, xJ),
              vJ = VJ(cJ, xJ);
            for (rJ.length <= YJ && rJ.push(0), vJ.push(0), fJ = vJ[hJ - 1], UJ = YJ - hJ; UJ >= 0; UJ--) {
              for (FJ = DJ - 1, rJ[UJ + hJ] !== fJ && (FJ = Math.floor((rJ[UJ + hJ] * DJ + rJ[UJ + hJ - 1]) / fJ)), eJ = 0, XJ = 0, qJ = vJ.length, AJ = 0; AJ < qJ; AJ++) eJ += FJ * vJ[AJ], jJ = Math.floor(eJ / DJ), XJ += rJ[UJ + AJ] - (eJ - jJ * DJ), eJ = jJ, XJ < 0 ? (rJ[UJ + AJ] = XJ + DJ, XJ = -1) : (rJ[UJ + AJ] = XJ, XJ = 0);
              for (; 0 !== XJ;) {
                for (FJ -= 1, eJ = 0, AJ = 0; AJ < qJ; AJ++)(eJ += rJ[UJ + AJ] - DJ + vJ[AJ]) < 0 ? (rJ[UJ + AJ] = eJ + DJ, eJ = 0) : (rJ[UJ + AJ] = eJ, eJ = 1);
                XJ += eJ
              }
              nJ[UJ] = FJ
            }
            return rJ = MJ(rJ, xJ)[0], [sJ(nJ), sJ(rJ)]
          }(hJ, xJ) : function(JJ, cJ) {
            for (var FJ, UJ, eJ, XJ, AJ, qJ = JJ.length, jJ = cJ.length, YJ = [], hJ = [], DJ = ZJ; qJ;)
              if (hJ.unshift(JJ[--qJ]), nJ(hJ), wJ(hJ, cJ) < 0) YJ.push(0);
              else {
                eJ = hJ[(UJ = hJ.length) - 1] * DJ + hJ[UJ - 2], XJ = cJ[jJ - 1] * DJ + cJ[jJ - 2], UJ > jJ && (eJ = (eJ + 1) * DJ), FJ = Math.ceil(eJ / XJ);
                do {
                  if (wJ(AJ = VJ(cJ, FJ), hJ) <= 0) break;
                  FJ--
                } while (FJ);
                YJ.push(FJ), hJ = mJ(hJ, AJ)
              } return YJ.reverse(), [sJ(YJ), sJ(hJ)]
          }(hJ, xJ), eJ = FJ[0];
          var EJ = JJ.sign !== UJ.sign,
            KJ = FJ[1],
            yJ = JJ.sign;
          return "number" === typeof eJ ? (EJ && (eJ = -eJ), eJ = new jJ(eJ)) : eJ = new qJ(eJ, EJ), "number" === typeof KJ ? (yJ && (KJ = -KJ), KJ = new jJ(KJ)) : KJ = new qJ(KJ, yJ), [eJ, KJ]
        }

        function wJ(JJ, cJ) {
          if (JJ.length !== cJ.length) return JJ.length > cJ.length ? 1 : -1;
          for (var ZJ = JJ.length - 1; ZJ >= 0; ZJ--)
            if (JJ[ZJ] !== cJ[ZJ]) return JJ[ZJ] > cJ[ZJ] ? 1 : -1;
          return 0
        }

        function WJ(JJ) {
          var cJ = JJ.abs();
          return !cJ.isUnit() && (!!(cJ.equals(2) || cJ.equals(3) || cJ.equals(5)) || !(cJ.isEven() || cJ.isDivisibleBy(3) || cJ.isDivisibleBy(5)) && (!!cJ.lesser(49) || void 0))
        }

        function gJ(JJ, ZJ) {
          for (var FJ, UJ, eJ, XJ = JJ.prev(), AJ = XJ, qJ = 0; AJ.isEven();) AJ = AJ.divide(2), qJ++;
          JJ: for (UJ = 0; UJ < ZJ.length; UJ++)
            if (!JJ.lesser(ZJ[UJ]) && !(eJ = cJ(ZJ[UJ]).modPow(AJ, JJ)).isUnit() && !eJ.equals(XJ)) {
              for (FJ = qJ - 1; 0 != FJ; FJ--) {
                if ((eJ = eJ.square().mod(JJ)).isUnit()) return !1;
                if (eJ.equals(XJ)) continue JJ
              }
              return !1
            }
          return !0
        }
        qJ.prototype = Object.create(AJ.prototype), jJ.prototype = Object.create(AJ.prototype), YJ.prototype = Object.create(AJ.prototype), qJ.prototype.add = function(JJ) {
          var cJ = tJ(JJ);
          if (this.sign !== cJ.sign) return this.subtract(cJ.nZ());
          var ZJ = this.value,
            FJ = cJ.value;
          return cJ.isSmall ? new qJ(vJ(ZJ, Math.abs(FJ)), this.sign) : new qJ(rJ(ZJ, FJ), this.sign)
        }, qJ.prototype.plus = qJ.prototype.add, jJ.prototype.add = function(JJ) {
          var cJ = tJ(JJ),
            ZJ = this.value;
          if (ZJ < 0 !== cJ.sign) return this.subtract(cJ.nZ());
          var FJ = cJ.value;
          if (cJ.isSmall) {
            if (hJ(ZJ + FJ)) return new jJ(ZJ + FJ);
            FJ = DJ(Math.abs(FJ))
          }
          return new qJ(vJ(FJ, Math.abs(ZJ)), ZJ < 0)
        }, jJ.prototype.plus = jJ.prototype.add, YJ.prototype.add = function(JJ) {
          return new YJ(this.value + tJ(JJ).value)
        }, YJ.prototype.plus = YJ.prototype.add, qJ.prototype.subtract = function(JJ) {
          var cJ = tJ(JJ);
          if (this.sign !== cJ.sign) return this.add(cJ.nZ());
          var ZJ = this.value,
            FJ = cJ.value;
          return cJ.isSmall ? QJ(ZJ, Math.abs(FJ), this.sign) : function(JJ, cJ, ZJ) {
            var FJ;
            return wJ(JJ, cJ) >= 0 ? FJ = mJ(JJ, cJ) : (FJ = mJ(cJ, JJ), ZJ = !ZJ), "number" === typeof(FJ = sJ(FJ)) ? (ZJ && (FJ = -FJ), new jJ(FJ)) : new qJ(FJ, ZJ)
          }(ZJ, FJ, this.sign)
        }, qJ.prototype.minus = qJ.prototype.subtract, jJ.prototype.subtract = function(JJ) {
          var cJ = tJ(JJ),
            ZJ = this.value;
          if (ZJ < 0 !== cJ.sign) return this.add(cJ.nZ());
          var FJ = cJ.value;
          return cJ.isSmall ? new jJ(ZJ - FJ) : QJ(FJ, Math.abs(ZJ), ZJ >= 0)
        }, jJ.prototype.minus = jJ.prototype.subtract, YJ.prototype.subtract = function(JJ) {
          return new YJ(this.value - tJ(JJ).value)
        }, YJ.prototype.minus = YJ.prototype.subtract, qJ.prototype.nZ = function() {
          return new qJ(this.value, !this.sign)
        }, jJ.prototype.nZ = function() {
          var JJ = this.sign,
            cJ = new jJ(-this.value);
          return cJ.sign = !JJ, cJ
        }, YJ.prototype.nZ = function() {
          return new YJ(-this.value)
        }, qJ.prototype.abs = function() {
          return new qJ(this.value, !1)
        }, jJ.prototype.abs = function() {
          return new jJ(Math.abs(this.value))
        }, YJ.prototype.abs = function() {
          return new YJ(this.value >= 0 ? this.value : -this.value)
        }, qJ.prototype.multiply = function(JJ) {
          var cJ, FJ, UJ, eJ = tJ(JJ),
            XJ = this.value,
            jJ = eJ.value,
            YJ = this.sign !== eJ.sign;
          if (eJ.isSmall) {
            if (0 === jJ) return AJ[0];
            if (1 === jJ) return this;
            if (-1 === jJ) return this.nZ();
            if ((cJ = Math.abs(jJ)) < ZJ) return new qJ(VJ(XJ, cJ), YJ);
            jJ = DJ(cJ)
          }
          return FJ = XJ.length, UJ = jJ.length, new qJ(-.012 * FJ - .012 * UJ + 15e-6 * FJ * UJ > 0 ? yJ(XJ, jJ) : EJ(XJ, jJ), YJ)
        }, qJ.prototype.times = qJ.prototype.multiply, jJ.prototype._multiplyBySmall = function(JJ) {
          return hJ(JJ.value * this.value) ? new jJ(JJ.value * this.value) : SJ(Math.abs(JJ.value), DJ(Math.abs(this.value)), this.sign !== JJ.sign)
        }, qJ.prototype._multiplyBySmall = function(JJ) {
          return 0 === JJ.value ? AJ[0] : 1 === JJ.value ? this : -1 === JJ.value ? this.nZ() : SJ(Math.abs(JJ.value), this.value, this.sign !== JJ.sign)
        }, jJ.prototype.multiply = function(JJ) {
          return tJ(JJ)._multiplyBySmall(this)
        }, jJ.prototype.times = jJ.prototype.multiply, YJ.prototype.multiply = function(JJ) {
          return new YJ(this.value * tJ(JJ).value)
        }, YJ.prototype.times = YJ.prototype.multiply, qJ.prototype.square = function() {
          return new qJ(IJ(this.value), !1)
        }, jJ.prototype.square = function() {
          var JJ = this.value * this.value;
          return hJ(JJ) ? new jJ(JJ) : new qJ(IJ(DJ(Math.abs(this.value))), !1)
        }, YJ.prototype.square = function(JJ) {
          return new YJ(this.value * this.value)
        }, qJ.prototype.divmod = function(JJ) {
          var cJ = bJ(this, JJ);
          return {
            quotient: cJ[0],
            remainder: cJ[1]
          }
        }, YJ.prototype.divmod = jJ.prototype.divmod = qJ.prototype.divmod, qJ.prototype.divide = function(JJ) {
          return bJ(this, JJ)[0]
        }, YJ.prototype.over = YJ.prototype.divide = function(JJ) {
          return new YJ(this.value / tJ(JJ).value)
        }, jJ.prototype.over = jJ.prototype.divide = qJ.prototype.over = qJ.prototype.divide, qJ.prototype.mod = function(JJ) {
          return bJ(this, JJ)[1]
        }, YJ.prototype.mod = YJ.prototype.remainder = function(JJ) {
          return new YJ(this.value % tJ(JJ).value)
        }, jJ.prototype.remainder = jJ.prototype.mod = qJ.prototype.remainder = qJ.prototype.mod, qJ.prototype.pow = function(JJ) {
          var cJ, ZJ, FJ, UJ = tJ(JJ),
            eJ = this.value,
            XJ = UJ.value;
          if (0 === XJ) return AJ[1];
          if (0 === eJ) return AJ[0];
          if (1 === eJ) return AJ[1];
          if (-1 === eJ) return UJ.isEven() ? AJ[1] : AJ[-1];
          if (UJ.sign) return AJ[0];
          if (!UJ.isSmall) throw new Error("The exponent " + UJ.toString() + " is too large.");
          if (this.isSmall && hJ(cJ = Math.pow(eJ, XJ))) return new jJ(fJ(cJ));
          for (ZJ = this, FJ = AJ[1]; !0 & XJ && (FJ = FJ.times(ZJ), --XJ), 0 !== XJ;) XJ /= 2, ZJ = ZJ.square();
          return FJ
        }, jJ.prototype.pow = qJ.prototype.pow, YJ.prototype.pow = function(JJ) {
          var cJ = tJ(JJ),
            ZJ = this.value,
            FJ = cJ.value,
            UJ = BigInt(0),
            eJ = BigInt(1),
            XJ = BigInt(2);
          if (FJ === UJ) return AJ[1];
          if (ZJ === UJ) return AJ[0];
          if (ZJ === eJ) return AJ[1];
          if (ZJ === BigInt(-1)) return cJ.isEven() ? AJ[1] : AJ[-1];
          if (cJ.isNegative()) return new YJ(UJ);
          for (var qJ = this, jJ = AJ[1];
            (FJ & eJ) === eJ && (jJ = jJ.times(qJ), --FJ), FJ !== UJ;) FJ /= XJ, qJ = qJ.square();
          return jJ
        }, qJ.prototype.modPow = function(JJ, cJ) {
          if (JJ = tJ(JJ), (cJ = tJ(cJ)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var ZJ = AJ[1],
            FJ = this.mod(cJ);
          for (JJ.isNegative() && (JJ = JJ.multiply(AJ[-1]), FJ = FJ.modInv(cJ)); JJ.isPositive();) {
            if (FJ.isZero()) return AJ[0];
            JJ.isOdd() && (ZJ = ZJ.multiply(FJ).mod(cJ)), JJ = JJ.divide(2), FJ = FJ.square().mod(cJ)
          }
          return ZJ
        }, YJ.prototype.modPow = jJ.prototype.modPow = qJ.prototype.modPow, qJ.prototype.compareAbs = function(JJ) {
          var cJ = tJ(JJ),
            ZJ = this.value,
            FJ = cJ.value;
          return cJ.isSmall ? 1 : wJ(ZJ, FJ)
        }, jJ.prototype.compareAbs = function(JJ) {
          var cJ = tJ(JJ),
            ZJ = Math.abs(this.value),
            FJ = cJ.value;
          return cJ.isSmall ? ZJ === (FJ = Math.abs(FJ)) ? 0 : ZJ > FJ ? 1 : -1 : -1
        }, YJ.prototype.compareAbs = function(JJ) {
          var cJ = this.value,
            ZJ = tJ(JJ).value;
          return (cJ = cJ >= 0 ? cJ : -cJ) === (ZJ = ZJ >= 0 ? ZJ : -ZJ) ? 0 : cJ > ZJ ? 1 : -1
        }, qJ.prototype.compare = function(JJ) {
          if (JJ === 1 / 0) return -1;
          if (JJ === -1 / 0) return 1;
          var cJ = tJ(JJ),
            ZJ = this.value,
            FJ = cJ.value;
          return this.sign !== cJ.sign ? cJ.sign ? 1 : -1 : cJ.isSmall ? this.sign ? -1 : 1 : wJ(ZJ, FJ) * (this.sign ? -1 : 1)
        }, qJ.prototype.compareTo = qJ.prototype.compare, jJ.prototype.compare = function(JJ) {
          if (JJ === 1 / 0) return -1;
          if (JJ === -1 / 0) return 1;
          var cJ = tJ(JJ),
            ZJ = this.value,
            FJ = cJ.value;
          return cJ.isSmall ? ZJ == FJ ? 0 : ZJ > FJ ? 1 : -1 : ZJ < 0 !== cJ.sign ? ZJ < 0 ? -1 : 1 : ZJ < 0 ? 1 : -1
        }, jJ.prototype.compareTo = jJ.prototype.compare, YJ.prototype.compare = function(JJ) {
          if (JJ === 1 / 0) return -1;
          if (JJ === -1 / 0) return 1;
          var cJ = this.value,
            ZJ = tJ(JJ).value;
          return cJ === ZJ ? 0 : cJ > ZJ ? 1 : -1
        }, YJ.prototype.compareTo = YJ.prototype.compare, qJ.prototype.equals = function(JJ) {
          return 0 === this.compare(JJ)
        }, YJ.prototype.eq = YJ.prototype.equals = jJ.prototype.eq = jJ.prototype.equals = qJ.prototype.eq = qJ.prototype.equals, qJ.prototype.notEquals = function(JJ) {
          return 0 !== this.compare(JJ)
        }, YJ.prototype.neq = YJ.prototype.notEquals = jJ.prototype.neq = jJ.prototype.notEquals = qJ.prototype.neq = qJ.prototype.notEquals, qJ.prototype.greater = function(JJ) {
          return this.compare(JJ) > 0
        }, YJ.prototype.gt = YJ.prototype.greater = jJ.prototype.gt = jJ.prototype.greater = qJ.prototype.gt = qJ.prototype.greater, qJ.prototype.lesser = function(JJ) {
          return this.compare(JJ) < 0
        }, YJ.prototype.lt = YJ.prototype.lesser = jJ.prototype.lt = jJ.prototype.lesser = qJ.prototype.lt = qJ.prototype.lesser, qJ.prototype.greaterOrEquals = function(JJ) {
          return this.compare(JJ) >= 0
        }, YJ.prototype.geq = YJ.prototype.greaterOrEquals = jJ.prototype.geq = jJ.prototype.greaterOrEquals = qJ.prototype.geq = qJ.prototype.greaterOrEquals, qJ.prototype.lesserOrEquals = function(JJ) {
          return this.compare(JJ) <= 0
        }, YJ.prototype.leq = YJ.prototype.lesserOrEquals = jJ.prototype.leq = jJ.prototype.lesserOrEquals = qJ.prototype.leq = qJ.prototype.lesserOrEquals, qJ.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, jJ.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, YJ.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, qJ.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, jJ.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, YJ.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, qJ.prototype.isPositive = function() {
          return !this.sign
        }, jJ.prototype.isPositive = function() {
          return this.value > 0
        }, YJ.prototype.isPositive = jJ.prototype.isPositive, qJ.prototype.isNegative = function() {
          return this.sign
        }, jJ.prototype.isNegative = function() {
          return this.value < 0
        }, YJ.prototype.isNegative = jJ.prototype.isNegative, qJ.prototype.isUnit = function() {
          return !1
        }, jJ.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, YJ.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, qJ.prototype.isZero = function() {
          return !1
        }, jJ.prototype.isZero = function() {
          return 0 === this.value
        }, YJ.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, qJ.prototype.isDivisibleBy = function(JJ) {
          var cJ = tJ(JJ);
          return !cJ.isZero() && (!!cJ.isUnit() || (0 === cJ.compareAbs(2) ? this.isEven() : this.mod(cJ).isZero()))
        }, YJ.prototype.isDivisibleBy = jJ.prototype.isDivisibleBy = qJ.prototype.isDivisibleBy, qJ.prototype.isPrime = function(ZJ) {
          var FJ = WJ(this);
          if (FJ !== JJ) return FJ;
          var UJ = this.abs(),
            eJ = UJ.bitLength();
          if (eJ <= 64) return gJ(UJ, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var XJ = Math.log(2) * eJ.toJSNumber(), AJ = Math.ceil(!0 === ZJ ? 2 * Math.pow(XJ, 2) : XJ), qJ = [], jJ = 0; jJ < AJ; jJ++) qJ.push(cJ(jJ + 2));
          return gJ(UJ, qJ)
        }, YJ.prototype.isPrime = jJ.prototype.isPrime = qJ.prototype.isPrime, qJ.prototype.isProbablePrime = function(ZJ, FJ) {
          var UJ = WJ(this);
          if (UJ !== JJ) return UJ;
          for (var eJ = this.abs(), XJ = ZJ === JJ ? 5 : ZJ, AJ = [], qJ = 0; qJ < XJ; qJ++) AJ.push(cJ.randBetween(2, eJ.minus(2), FJ));
          return gJ(eJ, AJ)
        }, YJ.prototype.isProbablePrime = jJ.prototype.isProbablePrime = qJ.prototype.isProbablePrime, qJ.prototype.modInv = function(JJ) {
          for (var ZJ, FJ, UJ, eJ = cJ.zero, XJ = cJ.one, AJ = tJ(JJ), qJ = this.abs(); !qJ.isZero();) ZJ = AJ.divide(qJ), FJ = eJ, UJ = AJ, eJ = XJ, AJ = qJ, XJ = FJ.subtract(ZJ.multiply(XJ)), qJ = UJ.subtract(ZJ.multiply(qJ));
          if (!AJ.isUnit()) throw new Error(this.toString() + " and " + JJ.toString() + " are not co-prime");
          return -1 === eJ.compare(0) && (eJ = eJ.add(JJ)), this.isNegative() ? eJ.nZ() : eJ
        }, YJ.prototype.modInv = jJ.prototype.modInv = qJ.prototype.modInv, qJ.prototype.next = function() {
          var JJ = this.value;
          return this.sign ? QJ(JJ, 1, this.sign) : new qJ(vJ(JJ, 1), this.sign)
        }, jJ.prototype.next = function() {
          var JJ = this.value;
          return JJ + 1 < FJ ? new jJ(JJ + 1) : new qJ(UJ, !1)
        }, YJ.prototype.next = function() {
          return new YJ(this.value + BigInt(1))
        }, qJ.prototype.prev = function() {
          var JJ = this.value;
          return this.sign ? new qJ(vJ(JJ, 1), !0) : QJ(JJ, 1, this.sign)
        }, jJ.prototype.prev = function() {
          var JJ = this.value;
          return JJ - 1 > -FJ ? new jJ(JJ - 1) : new qJ(UJ, !0)
        }, YJ.prototype.prev = function() {
          return new YJ(this.value - BigInt(1))
        };
        for (var HJ = [1]; 2 * HJ[HJ.length - 1] <= ZJ;) HJ.push(2 * HJ[HJ.length - 1]);
        var PJ = HJ.length,
          kJ = HJ[PJ - 1];

        function pJ(JJ) {
          return Math.abs(JJ) <= ZJ
        }

        function dJ(JJ, ZJ, FJ) {
          ZJ = tJ(ZJ);
          for (var UJ = JJ.isNegative(), eJ = ZJ.isNegative(), XJ = UJ ? JJ.not() : JJ, AJ = eJ ? ZJ.not() : ZJ, qJ = 0, jJ = 0, YJ = null, hJ = null, DJ = []; !XJ.isZero() || !AJ.isZero();) qJ = (YJ = bJ(XJ, kJ))[1].toJSNumber(), UJ && (qJ = kJ - 1 - qJ), jJ = (hJ = bJ(AJ, kJ))[1].toJSNumber(), eJ && (jJ = kJ - 1 - jJ), XJ = YJ[0], AJ = hJ[0], DJ.push(FJ(qJ, jJ));
          for (var sJ = 0 !== FJ(UJ ? 1 : 0, eJ ? 1 : 0) ? cJ(-1) : cJ(0), nJ = DJ.length - 1; nJ >= 0; nJ -= 1) sJ = sJ.multiply(kJ).add(cJ(DJ[nJ]));
          return sJ
        }
        qJ.prototype.shiftLeft = function(JJ) {
          var cJ = tJ(JJ).toJSNumber();
          if (!pJ(cJ)) throw new Error(String(cJ) + " is too large for shifting.");
          if (cJ < 0) return this.shiftRight(-cJ);
          var ZJ = this;
          if (ZJ.isZero()) return ZJ;
          for (; cJ >= PJ;) ZJ = ZJ.multiply(kJ), cJ -= PJ - 1;
          return ZJ.multiply(HJ[cJ])
        }, YJ.prototype.shiftLeft = jJ.prototype.shiftLeft = qJ.prototype.shiftLeft, qJ.prototype.shiftRight = function(JJ) {
          var cJ, ZJ = tJ(JJ).toJSNumber();
          if (!pJ(ZJ)) throw new Error(String(ZJ) + " is too large for shifting.");
          if (ZJ < 0) return this.shiftLeft(-ZJ);
          for (var FJ = this; ZJ >= PJ;) {
            if (FJ.isZero() || FJ.isNegative() && FJ.isUnit()) return FJ;
            FJ = (cJ = bJ(FJ, kJ))[1].isNegative() ? cJ[0].prev() : cJ[0], ZJ -= PJ - 1
          }
          return (cJ = bJ(FJ, HJ[ZJ]))[1].isNegative() ? cJ[0].prev() : cJ[0]
        }, YJ.prototype.shiftRight = jJ.prototype.shiftRight = qJ.prototype.shiftRight, qJ.prototype.not = function() {
          return this.nZ().prev()
        }, YJ.prototype.not = jJ.prototype.not = qJ.prototype.not, qJ.prototype.and = function(JJ) {
          return dJ(this, JJ, (function(JJ, cJ) {
            return JJ & cJ
          }))
        }, YJ.prototype.and = jJ.prototype.and = qJ.prototype.and, qJ.prototype.or = function(JJ) {
          return dJ(this, JJ, (function(JJ, cJ) {
            return JJ | cJ
          }))
        }, YJ.prototype.or = jJ.prototype.or = qJ.prototype.or, qJ.prototype.xor = function(JJ) {
          return dJ(this, JJ, (function(JJ, cJ) {
            return JJ ^ cJ
          }))
        }, YJ.prototype.xor = jJ.prototype.xor = qJ.prototype.xor;
        var zJ = 1 << 30;

        function NJ(JJ) {
          var cJ = JJ.value,
            FJ = "number" === typeof cJ ? cJ | zJ : "bigint" === typeof cJ ? cJ | BigInt(zJ) : cJ[0] + cJ[1] * ZJ | 1073758208;
          return FJ & -FJ
        }

        function OJ(JJ, ZJ) {
          if (ZJ.compareTo(JJ) <= 0) {
            var FJ = OJ(JJ, ZJ.square(ZJ)),
              UJ = FJ.p,
              eJ = FJ.e,
              XJ = UJ.multiply(ZJ);
            return XJ.compareTo(JJ) <= 0 ? {
              p: XJ,
              e: 2 * eJ + 1
            } : {
              p: UJ,
              e: 2 * eJ
            }
          }
          return {
            p: cJ(1),
            e: 0
          }
        }

        function TJ(JJ, cJ) {
          return JJ = tJ(JJ), cJ = tJ(cJ), JJ.greater(cJ) ? JJ : cJ
        }

        function CJ(JJ, cJ) {
          return JJ = tJ(JJ), cJ = tJ(cJ), JJ.lesser(cJ) ? JJ : cJ
        }

        function uJ(JJ, cJ) {
          if (JJ = tJ(JJ).abs(), cJ = tJ(cJ).abs(), JJ.equals(cJ)) return JJ;
          if (JJ.isZero()) return cJ;
          if (cJ.isZero()) return JJ;
          for (var ZJ, FJ, UJ = AJ[1]; JJ.isEven() && cJ.isEven();) ZJ = CJ(NJ(JJ), NJ(cJ)), JJ = JJ.divide(ZJ), cJ = cJ.divide(ZJ), UJ = UJ.multiply(ZJ);
          for (; JJ.isEven();) JJ = JJ.divide(NJ(JJ));
          do {
            for (; cJ.isEven();) cJ = cJ.divide(NJ(cJ));
            JJ.greater(cJ) && (FJ = cJ, cJ = JJ, JJ = FJ), cJ = cJ.subtract(JJ)
          } while (!cJ.isZero());
          return UJ.isUnit() ? JJ : JJ.multiply(UJ)
        }
        qJ.prototype.bitLength = function() {
          var JJ = this;
          return JJ.compareTo(cJ(0)) < 0 && (JJ = JJ.nZ().subtract(cJ(1))), 0 === JJ.compareTo(cJ(0)) ? cJ(0) : cJ(OJ(JJ, cJ(2)).e).add(cJ(1))
        }, YJ.prototype.bitLength = jJ.prototype.bitLength = qJ.prototype.bitLength;
        var iJ = function(JJ, cJ, ZJ, FJ) {
          ZJ = ZJ || eJ, JJ = String(JJ), FJ || (JJ = JJ.toLowerCase(), ZJ = ZJ.toLowerCase());
          var UJ, XJ = JJ.length,
            AJ = Math.abs(cJ),
            qJ = {};
          for (UJ = 0; UJ < ZJ.length; UJ++) qJ[ZJ[UJ]] = UJ;
          for (UJ = 0; UJ < XJ; UJ++) {
            if ("-" !== (hJ = JJ[UJ]) && (hJ in qJ && qJ[hJ] >= AJ)) {
              if ("1" === hJ && 1 === AJ) continue;
              throw new Error(hJ + " is not a valid digit in base " + cJ + ".")
            }
          }
          cJ = tJ(cJ);
          var jJ = [],
            YJ = "-" === JJ[0];
          for (UJ = YJ ? 1 : 0; UJ < JJ.length; UJ++) {
            var hJ;
            if ((hJ = JJ[UJ]) in qJ) jJ.push(tJ(qJ[hJ]));
            else {
              if ("<" !== hJ) throw new Error(hJ + " is not a valid character");
              var DJ = UJ;
              do {
                UJ++
              } while (">" !== JJ[UJ] && UJ < JJ.length);
              jJ.push(tJ(JJ.slice(DJ + 1, UJ)))
            }
          }
          return RJ(jJ, cJ, YJ)
        };

        function RJ(JJ, cJ, ZJ) {
          var FJ, UJ = AJ[0],
            eJ = AJ[1];
          for (FJ = JJ.length - 1; FJ >= 0; FJ--) UJ = UJ.add(JJ[FJ].times(eJ)), eJ = eJ.times(cJ);
          return ZJ ? UJ.nZ() : UJ
        }

        function LJ(JJ, ZJ) {
          if ((ZJ = cJ(ZJ)).isZero()) {
            if (JJ.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (ZJ.equals(-1)) {
            if (JJ.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (JJ.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-JJ.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var FJ = Array.apply(null, Array(JJ.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return FJ.unshift([1]), {
              value: [].concat.apply([], FJ),
              isNegative: !1
            }
          }
          var UJ = !1;
          if (JJ.isNegative() && ZJ.isPositive() && (UJ = !0, JJ = JJ.abs()), ZJ.isUnit()) return JJ.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(JJ.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: UJ
          };
          for (var eJ, XJ = [], AJ = JJ; AJ.isNegative() || AJ.compareAbs(ZJ) >= 0;) {
            eJ = AJ.divmod(ZJ), AJ = eJ.quotient;
            var qJ = eJ.remainder;
            qJ.isNegative() && (qJ = ZJ.minus(qJ).abs(), AJ = AJ.next()), XJ.push(qJ.toJSNumber())
          }
          return XJ.push(AJ.toJSNumber()), {
            value: XJ.reverse(),
            isNegative: UJ
          }
        }

        function aJ(JJ, cJ, ZJ) {
          var FJ = LJ(JJ, cJ);
          return (FJ.isNegative ? "-" : "") + FJ.value.map((function(JJ) {
            return function(JJ, cJ) {
              return JJ < (cJ = cJ || eJ).length ? cJ[JJ] : "<" + JJ + ">"
            }(JJ, ZJ)
          })).join("")
        }

        function BJ(JJ) {
          if (hJ(+JJ)) {
            var cJ = +JJ;
            if (cJ === fJ(cJ)) return XJ ? new YJ(BigInt(cJ)) : new jJ(cJ);
            throw new Error("Invalid integer: " + JJ)
          }
          var ZJ = "-" === JJ[0];
          ZJ && (JJ = JJ.slice(1));
          var FJ = JJ.split(/e/i);
          if (FJ.length > 2) throw new Error("Invalid integer: " + FJ.join("e"));
          if (2 === FJ.length) {
            var UJ = FJ[1];
            if ("+" === UJ[0] && (UJ = UJ.slice(1)), (UJ = +UJ) !== fJ(UJ) || !hJ(UJ)) throw new Error("Invalid integer: " + UJ + " is not a valid exponent.");
            var eJ = FJ[0],
              AJ = eJ.indexOf(".");
            if (AJ >= 0 && (UJ -= eJ.length - AJ - 1, eJ = eJ.slice(0, AJ) + eJ.slice(AJ + 1)), UJ < 0) throw new Error("Cannot include negative exponent part for integers");
            JJ = eJ += new Array(UJ + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(JJ)) throw new Error("Invalid integer: " + JJ);
          if (XJ) return new YJ(BigInt(ZJ ? "-" + JJ : JJ));
          for (var DJ = [], sJ = JJ.length, GJ = sJ - 7; sJ > 0;) DJ.push(+JJ.slice(GJ, sJ)), (GJ -= 7) < 0 && (GJ = 0), sJ -= 7;
          return nJ(DJ), new qJ(DJ, ZJ)
        }

        function tJ(JJ) {
          return "number" === typeof JJ ? function(JJ) {
            if (XJ) return new YJ(BigInt(JJ));
            if (hJ(JJ)) {
              if (JJ !== fJ(JJ)) throw new Error(JJ + " is not an integer.");
              return new jJ(JJ)
            }
            return BJ(JJ.toString())
          }(JJ) : "string" === typeof JJ ? BJ(JJ) : "bigint" === typeof JJ ? new YJ(JJ) : JJ
        }
        qJ.prototype.toArray = function(JJ) {
          return LJ(this, JJ)
        }, jJ.prototype.toArray = function(JJ) {
          return LJ(this, JJ)
        }, YJ.prototype.toArray = function(JJ) {
          return LJ(this, JJ)
        }, qJ.prototype.toString = function(cJ, ZJ) {
          if (cJ === JJ && (cJ = 10), 10 !== cJ) return aJ(this, cJ, ZJ);
          for (var FJ, UJ = this.value, eJ = UJ.length, XJ = String(UJ[--eJ]); --eJ >= 0;) FJ = String(UJ[eJ]), XJ += "0000000".slice(FJ.length) + FJ;
          return (this.sign ? "-" : "") + XJ
        }, jJ.prototype.toString = function(cJ, ZJ) {
          return cJ === JJ && (cJ = 10), 10 != cJ ? aJ(this, cJ, ZJ) : String(this.value)
        }, YJ.prototype.toString = jJ.prototype.toString, YJ.prototype.toJSON = qJ.prototype.toJSON = jJ.prototype.toJSON = function() {
          return this.toString()
        }, qJ.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, qJ.prototype.toJSNumber = qJ.prototype.valueOf, jJ.prototype.valueOf = function() {
          return this.value
        }, jJ.prototype.toJSNumber = jJ.prototype.valueOf, YJ.prototype.valueOf = YJ.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var oJ = 0; oJ < 1e3; oJ++) AJ[oJ] = tJ(oJ), oJ > 0 && (AJ[-oJ] = tJ(-oJ));
        return AJ.one = AJ[1], AJ.zero = AJ[0], AJ.minusOne = AJ[-1], AJ.max = TJ, AJ.min = CJ, AJ.gcd = uJ, AJ.lcm = function(JJ, cJ) {
          return JJ = tJ(JJ).abs(), cJ = tJ(cJ).abs(), JJ.divide(uJ(JJ, cJ)).multiply(cJ)
        }, AJ.isInstance = function(JJ) {
          return JJ instanceof qJ || JJ instanceof jJ || JJ instanceof YJ
        }, AJ.randBetween = function(JJ, cJ, FJ) {
          JJ = tJ(JJ), cJ = tJ(cJ);
          var UJ = FJ || Math.random,
            eJ = CJ(JJ, cJ),
            XJ = TJ(JJ, cJ).subtract(eJ).add(1);
          if (XJ.isSmall) return eJ.add(Math.floor(UJ() * XJ));
          for (var qJ = LJ(XJ, ZJ).value, jJ = [], YJ = !0, hJ = 0; hJ < qJ.length; hJ++) {
            var DJ = YJ ? qJ[hJ] : ZJ,
              sJ = fJ(UJ() * DJ);
            jJ.push(sJ), sJ < DJ && (YJ = !1)
          }
          return eJ.add(AJ.zcJ(jJ, ZJ, !1))
        }, AJ.zcJ = function(JJ, cJ, ZJ) {
          return RJ(JJ.map(tJ), tJ(cJ || 10), ZJ)
        }, AJ
      }();
      JJ.hasOwnProperty("exports") && (JJ.exports = cJ)
    }(rZ);
    var vZ = eJ(rZ.exports);

    function mZ(JJ, cJ, ZJ) {
      let FJ = 0;
      for (let UJ = 0; UJ < ZJ; UJ++) {
        const ZJ = JJ[cJ + UJ];
        if (void 0 === ZJ) break;
        FJ += ZJ * 16 ** UJ
      }
      return FJ
    }

    function QZ(JJ) {
      const cJ = [];
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
        let FJ = Number(JJ[ZJ]);
        for (let JJ = 0; FJ || JJ < cJ.length; JJ++) FJ += 10 * (cJ[JJ] || 0), cJ[JJ] = FJ % 16, FJ = (FJ - cJ[JJ]) / 16
      }
      return cJ
    }
    class EZ {
      static fromString(JJ) {
        return new EZ(function(JJ) {
          const cJ = QZ(JJ),
            ZJ = Array(4);
          for (let FJ = 0; FJ < 4; FJ++) ZJ[3 - FJ] = mZ(cJ, 4 * FJ, 4);
          return ZJ
        }(JJ), JJ)
      }
      static fromBit(JJ) {
        const cJ = Array(4),
          ZJ = Math.floor(JJ / 16);
        for (let FJ = 0; FJ < 4; FJ++) cJ[3 - FJ] = FJ === ZJ ? 1 << JJ - 16 * ZJ : 0;
        return new EZ(cJ)
      }
      constructor(JJ, cJ) {
        this.parts = JJ, this.str = cJ
      }
      and(JJ) {
        let {
          parts: cJ
        } = JJ;
        return new EZ(this.parts.map(((JJ, ZJ) => JJ & cJ[ZJ])))
      }
      or(JJ) {
        let {
          parts: cJ
        } = JJ;
        return new EZ(this.parts.map(((JJ, ZJ) => JJ | cJ[ZJ])))
      }
      xor(JJ) {
        let {
          parts: cJ
        } = JJ;
        return new EZ(this.parts.map(((JJ, ZJ) => JJ ^ cJ[ZJ])))
      }
      not() {
        return new EZ(this.parts.map((JJ => ~JJ)))
      }
      equals(JJ) {
        let {
          parts: cJ
        } = JJ;
        return this.parts.every(((JJ, ZJ) => JJ === cJ[ZJ]))
      }
      toString() {
        if (null != this.str) return this.str;
        const JJ = new Array(16);
        return this.parts.forEach(((cJ, ZJ) => {
          const FJ = QZ(cJ.toString());
          for (let UJ = 0; UJ < 4; UJ++) JJ[UJ + 4 * ZJ] = FJ[3 - UJ] || 0
        })), this.str = vZ.zcJ(JJ, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const VZ = function() {
      try {
        return BigInt, !0
      } catch (JJ) {
        return !1
      }
    }();
    VZ && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const KZ = {},
      yZ = VZ ? function(JJ) {
        return BigInt(JJ)
      } : function(JJ) {
        return JJ instanceof EZ ? JJ : ("number" === typeof JJ && (JJ = JJ.toString()), null != KZ[JJ] || (KZ[JJ] = EZ.fromString(JJ)), KZ[JJ])
      },
      SZ = yZ(0),
      IZ = VZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SZ)
      } : function() {
        let JJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ).and(JJ)
      },
      MZ = VZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SZ)
      } : function() {
        let JJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ).or(JJ)
      },
      bZ = VZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SZ)
      } : function() {
        let JJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ).xor(JJ)
      },
      wZ = VZ ? function(JJ, cJ) {
        return JJ === cJ
      } : function(JJ, cJ) {
        return null == JJ || null == cJ ? JJ == cJ : JJ.equals(cJ)
      };
    var WZ, gZ, HZ, PZ, kZ = {
      combine: function() {
        let JJ = arguments.length <= 0 ? void 0 : arguments[0];
        for (let cJ = 1; cJ < arguments.length; cJ++) JJ = MZ(JJ, cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ]);
        return JJ
      },
      add: function(JJ, cJ) {
        return cJ === SZ ? JJ : MZ(JJ, cJ)
      },
      remove: function(JJ, cJ) {
        return cJ === SZ ? JJ : bZ(JJ, IZ(JJ, cJ))
      },
      filter: IZ,
      invert: VZ ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SZ).not()
      },
      has: function(JJ, cJ) {
        return wZ(IZ(JJ, cJ), cJ)
      },
      hasAny: function(JJ, cJ) {
        return !wZ(IZ(JJ, cJ), SZ)
      },
      equals: wZ,
      deserialize: yZ,
      getFlag: VZ ? function(JJ) {
        return BigInt(1) << BigInt(JJ)
      } : function(JJ) {
        return EZ.fromBit(JJ)
      }
    };
    ! function(JJ) {
      JJ[JJ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", JJ[JJ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", JJ[JJ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", JJ[JJ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", JJ[JJ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", JJ[JJ.RATELIMITED = 4002] = "RATELIMITED", JJ[JJ.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", JJ[JJ.INVALID_VERSION = 4004] = "INVALID_VERSION", JJ[JJ.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(WZ || (WZ = {})),
    function(JJ) {
      JJ[JJ.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", JJ[JJ.INVALID_COMMAND = 4002] = "INVALID_COMMAND", JJ[JJ.INVALID_EVENT = 4004] = "INVALID_EVENT", JJ[JJ.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(gZ || (gZ = {})),
    function(JJ) {
      JJ.LANDSCAPE = "landscape", JJ.PORTRAIT = "portrait"
    }(HZ || (HZ = {})),
    function(JJ) {
      JJ.MOBILE = "mobile", JJ.DESKTOP = "desktop"
    }(PZ || (PZ = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: kZ.getFlag(0),
      ADMINISTRATOR: kZ.getFlag(3)
    });

    function pZ(JJ) {
      return sZ((cJ => {
        var ZJ;
        const [FJ] = null !== (ZJ = Object.entries(JJ).find((JJ => {
          let [, ZJ] = JJ;
          return ZJ === cJ
        }))) && void 0 !== ZJ ? ZJ : [];
        return null != cJ && void 0 === FJ ? JJ.UNHANDLED : cJ
      }), Hc().or(Pc()))
    }
    const dZ = xZ.object({
        image_url: xZ.string()
      }),
      zZ = xZ.object({
        mediaUrl: xZ.string().max(1024)
      }),
      NZ = xZ.object({
        access_token: xZ.union([xZ.string(), xZ.null()]).optional()
      }),
      OZ = xZ.object({
        access_token: xZ.string(),
        user: xZ.object({
          username: xZ.string(),
          discriminator: xZ.string(),
          id: xZ.string(),
          avatar: xZ.union([xZ.string(), xZ.null()]).optional(),
          public_flags: xZ.number(),
          global_name: xZ.union([xZ.string(), xZ.null()]).optional()
        }),
        scopes: xZ.array(function(JJ) {
          const cJ = wc().transform((cJ => {
            const ZJ = JJ.safeParse(cJ);
            return ZJ.success ? ZJ.data : JJ._def.defaultValue()
          }));
          return cJ.overlayType = JJ, cJ
        }(xZ.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(xZ.literal(-1)).default(-1))),
        expires: xZ.string(),
        application: xZ.object({
          description: xZ.string(),
          icon: xZ.union([xZ.string(), xZ.null()]).optional(),
          id: xZ.string(),
          rpc_origins: xZ.array(xZ.string()).optional(),
          name: xZ.string()
        })
      }),
      TZ = xZ.object({
        participants: xZ.array(xZ.object({
          id: xZ.string(),
          username: xZ.string(),
          global_name: xZ.union([xZ.string(), xZ.null()]).optional(),
          discriminator: xZ.string(),
          avatar: xZ.union([xZ.string(), xZ.null()]).optional(),
          flags: xZ.number(),
          bot: xZ.boolean(),
          avatar_decoration_data: xZ.union([xZ.object({
            asset: xZ.string(),
            skuId: xZ.string().optional()
          }), xZ.null()]).optional(),
          premium_type: xZ.union([xZ.number(), xZ.null()]).optional(),
          nickname: xZ.string().optional()
        }))
      });
    var CZ;
    ! function(JJ) {
      JJ.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", JJ.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", JJ.AUTHENTICATE = "AUTHENTICATE", JJ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(CZ || (CZ = {}));
    const uZ = xZ.object({}).optional().nullable(),
      iZ = xZ.void(),
      RZ = {
        [CZ.INITIATE_IMAGE_UPLOAD]: {
          request: iZ,
          response: dZ
        },
        [CZ.OPEN_SHARE_MOMENT_DIALOG]: {
          request: zZ,
          response: uZ
        },
        [CZ.AUTHENTICATE]: {
          request: NZ,
          response: OZ
        },
        [CZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: iZ,
          response: TZ
        }
      },
      LZ = "DISPATCH";
    var aZ;
    ! function(JJ) {
      JJ.AUTHORIZE = "AUTHORIZE", JJ.AUTHENTICATE = "AUTHENTICATE", JJ.GET_GUILDS = "GET_GUILDS", JJ.GET_GUILD = "GET_GUILD", JJ.GET_CHANNEL = "GET_CHANNEL", JJ.GET_CHANNELS = "GET_CHANNELS", JJ.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", JJ.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", JJ.SUBSCRIBE = "SUBSCRIBE", JJ.UNSUBSCRIBE = "UNSUBSCRIBE", JJ.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", JJ.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", JJ.SET_ACTIVITY = "SET_ACTIVITY", JJ.GET_SKUS = "GET_SKUS", JJ.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", JJ.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", JJ.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", JJ.START_PURCHASE = "START_PURCHASE", JJ.SET_CONFIG = "SET_CONFIG", JJ.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", JJ.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", JJ.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", JJ.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", JJ.CAPTURE_LOG = "CAPTURE_LOG", JJ.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", JJ.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", JJ.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", JJ.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", JJ.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", JJ.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", JJ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(aZ || (aZ = {}));
    const BZ = ac({
        cmd: Hc(),
        data: uc(),
        evt: Tc(),
        nonce: Hc()
      }).passthrough(),
      tZ = (pZ(Object.assign(Object.assign({}, OZ.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), ac({
        id: Hc(),
        username: Hc(),
        discriminator: Hc(),
        global_name: Hc().optional().nullable(),
        avatar: Hc().optional().nullable(),
        avatar_decoration_data: ac({
          asset: Hc(),
          sku_id: Hc().optional()
        }).nullable(),
        bot: dc(),
        flags: Pc().optional().nullable(),
        premium_type: Pc().optional().nullable()
      })),
      oZ = ac({
        user: tZ,
        nick: Hc().optional().nullable(),
        roles: Lc(Hc()),
        joined_at: Hc(),
        deaf: dc(),
        mute: dc()
      }),
      lZ = ac({
        id: Hc(),
        name: Hc().optional().nullable(),
        roles: Lc(Hc()).optional().nullable(),
        user: tZ.optional().nullable(),
        require_colons: dc().optional().nullable(),
        managed: dc().optional().nullable(),
        animated: dc().optional().nullable(),
        available: dc().optional().nullable()
      }),
      JF = ac({
        mute: dc(),
        deaf: dc(),
        self_mute: dc(),
        self_deaf: dc(),
        suppress: dc()
      }),
      cF = ac({
        mute: dc(),
        nick: Hc(),
        user: tZ,
        voice_state: JF,
        volume: Pc()
      }),
      ZF = pZ({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      FF = ac({
        name: Hc(),
        type: Pc(),
        url: Hc().optional().nullable(),
        created_at: Pc().optional().nullable(),
        timestamps: ac({
          start: Pc(),
          end: Pc()
        }).partial().optional().nullable(),
        application_id: Hc().optional().nullable(),
        details: Hc().optional().nullable(),
        state: Hc().optional().nullable(),
        emoji: lZ.optional().nullable(),
        party: ac({
          id: Hc().optional().nullable(),
          size: Lc(Pc()).optional().nullable()
        }).optional().nullable(),
        assets: ac({
          large_image: Hc().nullable(),
          large_text: Hc().nullable(),
          small_image: Hc().nullable(),
          small_text: Hc().nullable()
        }).partial().optional().nullable(),
        secrets: ac({
          join: Hc(),
          match: Hc()
        }).partial().optional().nullable(),
        instance: dc().optional().nullable(),
        flags: Pc().optional().nullable()
      }),
      UF = ac({
        id: Hc(),
        type: pZ({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Hc(),
        deny: Hc()
      }),
      eF = {
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
      XF = ac({
        id: Hc(),
        type: pZ(eF),
        guild_id: Hc().optional().nullable(),
        position: Pc().optional().nullable(),
        permission_overwrites: Lc(UF).optional().nullable(),
        name: Hc().optional().nullable(),
        topic: Hc().optional().nullable(),
        nsfw: dc().optional().nullable(),
        last_message_id: Hc().optional().nullable(),
        bitrate: Pc().optional().nullable(),
        user_limit: Pc().optional().nullable(),
        rate_limit_per_user: Pc().optional().nullable(),
        recipients: Lc(tZ).optional().nullable(),
        icon: Hc().optional().nullable(),
        owner_id: Hc().optional().nullable(),
        application_id: Hc().optional().nullable(),
        parent_id: Hc().optional().nullable(),
        last_pin_timestamp: Hc().optional().nullable()
      }),
      AF = ac({
        user: tZ,
        guild_id: Hc(),
        status: ZF,
        activities: Lc(FF),
        client_status: ac({
          desktop: ZF,
          mobile: ZF,
          web: ZF
        }).partial()
      }),
      qF = ac({
        id: Hc(),
        name: Hc(),
        color: Pc(),
        hoist: dc(),
        position: Pc(),
        permissions: Hc(),
        managed: dc(),
        mentionable: dc()
      }),
      jF = (ac({
        id: Hc(),
        name: Hc(),
        owner_id: Hc(),
        icon: Hc().nullable(),
        icon_hash: Hc().optional().nullable(),
        splash: Hc().nullable(),
        discovery_splash: Hc().nullable(),
        owner: dc().optional().nullable(),
        permissions: Hc().optional().nullable(),
        region: Hc(),
        afk_channel_id: Hc().nullable(),
        afk_timeout: Pc(),
        widget_enabled: dc().optional().nullable(),
        widget_channel_id: Hc().optional().nullable(),
        verification_level: Pc(),
        default_message_notifications: Pc(),
        explicit_content_filter: Pc(),
        roles: Lc(qF),
        emojis: Lc(lZ),
        features: Lc(Hc()),
        mfa_level: Pc(),
        application_id: Hc().nullable(),
        system_channel_id: Hc().nullable(),
        system_channel_flags: Pc(),
        rules_channel_id: Hc().nullable(),
        joined_at: Hc().optional().nullable(),
        large: dc().optional().nullable(),
        unavailable: dc().optional().nullable(),
        member_count: Pc().optional().nullable(),
        voice_states: Lc(JF).optional().nullable(),
        members: Lc(oZ).optional().nullable(),
        channels: Lc(XF).optional().nullable(),
        presences: Lc(AF).optional().nullable(),
        max_presences: Pc().optional().nullable(),
        max_members: Pc().optional().nullable(),
        vanity_url_code: Hc().nullable(),
        description: Hc().nullable(),
        banner: Hc().nullable(),
        premium_tier: Pc(),
        premium_subscription_count: Pc().optional().nullable(),
        preferred_locale: Hc(),
        public_updates_channel_id: Hc().nullable(),
        max_video_channel_users: Pc().optional().nullable(),
        approximate_member_count: Pc().optional().nullable(),
        approximate_presence_count: Pc().optional().nullable()
      }), ac({
        id: Hc(),
        guild_id: Hc(),
        type: Pc(),
        name: Hc()
      })),
      YF = ac({
        id: Hc(),
        filename: Hc(),
        size: Pc(),
        url: Hc(),
        proxy_url: Hc(),
        height: Pc().optional().nullable(),
        width: Pc().optional().nullable()
      }),
      hF = ac({
        text: Hc(),
        icon_url: Hc().optional().nullable(),
        proxy_icon_url: Hc().optional().nullable()
      }),
      DF = ac({
        url: Hc().optional().nullable(),
        proxy_url: Hc().optional().nullable(),
        height: Pc().optional().nullable(),
        width: Pc().optional().nullable()
      }),
      sF = DF.omit({
        proxy_url: !0
      }),
      nF = ac({
        name: Hc().optional().nullable(),
        url: Hc().optional().nullable()
      }),
      GF = ac({
        name: Hc().optional().nullable(),
        url: Hc().optional().nullable(),
        icon_url: Hc().optional().nullable(),
        proxy_icon_url: Hc().optional().nullable()
      }),
      fF = ac({
        name: Hc(),
        value: Hc(),
        inline: dc()
      }),
      xF = ac({
        title: Hc().optional().nullable(),
        type: Hc().optional().nullable(),
        description: Hc().optional().nullable(),
        url: Hc().optional().nullable(),
        timestamp: Hc().optional().nullable(),
        color: Pc().optional().nullable(),
        footer: hF.optional().nullable(),
        image: DF.optional().nullable(),
        thumbnail: DF.optional().nullable(),
        video: sF.optional().nullable(),
        provider: nF.optional().nullable(),
        author: GF.optional().nullable(),
        fields: Lc(fF).optional().nullable()
      }),
      rF = ac({
        count: Pc(),
        me: dc(),
        emoji: lZ
      }),
      vF = ac({
        type: Pc(),
        party_id: Hc().optional().nullable()
      }),
      mF = ac({
        id: Hc(),
        cover_image: Hc().optional().nullable(),
        description: Hc(),
        icon: Hc().optional().nullable(),
        name: Hc()
      }),
      QF = ac({
        message_id: Hc().optional().nullable(),
        channel_id: Hc().optional().nullable(),
        guild_id: Hc().optional().nullable()
      }),
      EF = ac({
        id: Hc(),
        channel_id: Hc(),
        guild_id: Hc().optional().nullable(),
        author: tZ.optional().nullable(),
        member: oZ.optional().nullable(),
        content: Hc(),
        timestamp: Hc(),
        edited_timestamp: Hc().optional().nullable(),
        tts: dc(),
        mention_everyone: dc(),
        mentions: Lc(tZ),
        mention_roles: Lc(Hc()),
        mention_channels: Lc(jF),
        attachments: Lc(YF),
        embeds: Lc(xF),
        reactions: Lc(rF).optional().nullable(),
        nonce: tc([Hc(), Pc()]).optional().nullable(),
        pinned: dc(),
        webhook_id: Hc().optional().nullable(),
        type: Pc(),
        activity: vF.optional().nullable(),
        application: mF.optional().nullable(),
        message_reference: QF.optional().nullable(),
        flags: Pc().optional().nullable(),
        stickers: Lc(uc()).optional().nullable(),
        referenced_message: uc().optional().nullable()
      }),
      VF = ac({
        id: Hc(),
        name: Hc()
      }),
      KF = ac({
        type: pZ({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Pc(),
        name: Hc()
      }),
      yF = ac({
        type: pZ({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: dc(),
        threshold: Pc(),
        shortcut: Lc(KF),
        delay: Pc()
      }),
      SF = ac({
        device_id: Hc(),
        volume: Pc(),
        available_devices: Lc(VF)
      }),
      IF = (ac({
        type: pZ({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Hc(),
        vendor: ac({
          name: Hc(),
          url: Hc()
        }),
        model: ac({
          name: Hc(),
          url: Hc()
        }),
        related: Lc(Hc()),
        echo_cancellation: dc().optional().nullable(),
        noise_suppression: dc().optional().nullable(),
        automatic_gain_control: dc().optional().nullable(),
        hardware_mute: dc().optional().nullable()
      }), ac({
        id: Hc(),
        name: Hc(),
        type: pZ({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: ac({
          amount: Pc(),
          currency: Hc()
        }),
        application_id: Hc(),
        flags: Pc(),
        release_date: Hc().nullable()
      })),
      MF = ac({
        id: Hc(),
        sku_id: Hc(),
        application_id: Hc(),
        user_id: Hc(),
        gift_code_flags: Pc(),
        type: pZ({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Hc().optional().nullable(),
        branches: Lc(Hc()).optional().nullable(),
        starts_at: Hc().optional().nullable(),
        ends_at: Hc().optional().nullable(),
        parent_id: Hc().optional().nullable(),
        consumed: dc().optional().nullable(),
        deleted: dc().optional().nullable(),
        gift_code_batch_id: Hc().optional().nullable()
      }),
      bF = (pZ({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), pZ({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      wF = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      WF = (pZ(wF), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      gF = (pZ(WF), "ERROR");
    var HF;
    ! function(JJ) {
      JJ.READY = "READY", JJ.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", JJ.SPEAKING_START = "SPEAKING_START", JJ.SPEAKING_STOP = "SPEAKING_STOP", JJ.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", JJ.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", JJ.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", JJ.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", JJ.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", JJ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(HF || (HF = {}));
    const PF = BZ.extend({
        evt: qZ(HF),
        nonce: Hc().nullable(),
        cmd: XZ(LZ),
        data: ac({}).passthrough()
      }),
      kF = BZ.extend({
        evt: XZ(gF),
        data: ac({
          code: Pc(),
          message: Hc().optional()
        }).passthrough(),
        cmd: qZ(aZ),
        nonce: Hc().nullable()
      }),
      pF = PF.extend({
        evt: Hc()
      }),
      dF = tc([PF, pF, kF]);
    const zF = {
      [HF.READY]: {
        payload: PF.extend({
          evt: XZ(HF.READY),
          data: ac({
            v: Pc(),
            config: ac({
              cdn_host: Hc().optional(),
              api_endpoint: Hc(),
              environment: Hc()
            }),
            user: ac({
              id: Hc(),
              username: Hc(),
              discriminator: Hc(),
              avatar: Hc().optional()
            }).optional()
          })
        })
      },
      [HF.VOICE_STATE_UPDATE]: {
        payload: PF.extend({
          evt: XZ(HF.VOICE_STATE_UPDATE),
          data: cF
        }),
        subscribeArgs: ac({
          channel_id: Hc()
        })
      },
      [HF.SPEAKING_START]: {
        payload: PF.extend({
          evt: XZ(HF.SPEAKING_START),
          data: ac({
            lobby_id: Hc().optional(),
            channel_id: Hc().optional(),
            user_id: Hc()
          })
        }),
        subscribeArgs: ac({
          lobby_id: Hc().nullable().optional(),
          channel_id: Hc().nullable().optional()
        })
      },
      [HF.SPEAKING_STOP]: {
        payload: PF.extend({
          evt: XZ(HF.SPEAKING_STOP),
          data: ac({
            lobby_id: Hc().optional(),
            channel_id: Hc().optional(),
            user_id: Hc()
          })
        }),
        subscribeArgs: ac({
          lobby_id: Hc().nullable().optional(),
          channel_id: Hc().nullable().optional()
        })
      },
      [HF.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: PF.extend({
          evt: XZ(HF.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: ac({
            layout_mode: pZ(WF)
          })
        })
      },
      [HF.ORIENTATION_UPDATE]: {
        payload: PF.extend({
          evt: XZ(HF.ORIENTATION_UPDATE),
          data: ac({
            screen_orientation: pZ(wF),
            orientation: qZ(HZ)
          })
        })
      },
      [HF.CURRENT_USER_UPDATE]: {
        payload: PF.extend({
          evt: XZ(HF.CURRENT_USER_UPDATE),
          data: tZ
        })
      },
      [HF.ENTITLEMENT_CREATE]: {
        payload: PF.extend({
          evt: XZ(HF.ENTITLEMENT_CREATE),
          data: ac({
            entitlement: MF
          })
        })
      },
      [HF.THERMAL_STATE_UPDATE]: {
        payload: PF.extend({
          evt: XZ(HF.THERMAL_STATE_UPDATE),
          data: ac({
            thermal_state: bF
          })
        })
      },
      [HF.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: PF.extend({
          evt: XZ(HF.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: ac({
            participants: TZ.shape.participants
          })
        })
      }
    };
    const NF = ac({}).nullable(),
      OF = ac({
        code: Hc()
      }),
      TF = ac({
        guilds: Lc(ac({
          id: Hc(),
          name: Hc()
        }))
      }),
      CF = ac({
        id: Hc(),
        name: Hc(),
        icon_url: Hc().optional(),
        members: Lc(oZ)
      }),
      uF = ac({
        id: Hc(),
        type: pZ(eF),
        guild_id: Hc().optional().nullable(),
        name: Hc().optional().nullable(),
        topic: Hc().optional().nullable(),
        bitrate: Pc().optional().nullable(),
        user_limit: Pc().optional().nullable(),
        position: Pc().optional().nullable(),
        voice_states: Lc(cF),
        messages: Lc(EF)
      }),
      iF = ac({
        channels: Lc(XF)
      }),
      RF = (uF.nullable(), uF.nullable()),
      LF = uF.nullable(),
      aF = (ac({
        input: SF,
        output: SF,
        mode: yF,
        automatic_gain_control: dc(),
        echo_cancellation: dc(),
        noise_suppression: dc(),
        qos: dc(),
        silence_warning: dc(),
        deaf: dc(),
        mute: dc()
      }), ac({
        evt: Hc()
      })),
      BF = ac({
        shortcut: KF
      }),
      tF = FF,
      oF = ac({
        skus: Lc(IF)
      }),
      lF = ac({
        entitlements: Lc(MF)
      }),
      JU = Lc(MF).nullable(),
      cU = ac({
        use_interactive_pip: dc()
      }),
      ZU = ac({
        locale: Hc()
      }),
      FU = ac({
        enabled: dc()
      }),
      UU = ac({
        permissions: pc().or(Hc())
      }),
      eU = ac({
        iosKeyboardResizesView: hZ(dc())
      }),
      XU = BZ.extend({
        cmd: qZ(aZ),
        evt: Tc()
      });

    function AU(JJ) {
      let {
        cmd: cJ,
        data: ZJ
      } = JJ;
      switch (cJ) {
        case aZ.AUTHORIZE:
          return OF.parse(ZJ);
        case aZ.CAPTURE_SHORTCUT:
          return BF.parse(ZJ);
        case aZ.ENCOURAGE_HW_ACCELERATION:
          return FU.parse(ZJ);
        case aZ.GET_CHANNEL:
          return uF.parse(ZJ);
        case aZ.GET_CHANNELS:
          return iF.parse(ZJ);
        case aZ.GET_CHANNEL_PERMISSIONS:
          return UU.parse(ZJ);
        case aZ.GET_GUILD:
          return CF.parse(ZJ);
        case aZ.GET_GUILDS:
          return TF.parse(ZJ);
        case aZ.GET_PLATFORM_BEHAVIORS:
          return eU.parse(ZJ);
        case aZ.GET_CHANNEL:
          return uF.parse(ZJ);
        case aZ.SELECT_TEXT_CHANNEL:
          return LF.parse(ZJ);
        case aZ.SELECT_VOICE_CHANNEL:
          return RF.parse(ZJ);
        case aZ.SET_ACTIVITY:
          return tF.parse(ZJ);
        case aZ.GET_SKUS_EMBEDDED:
          return oF.parse(ZJ);
        case aZ.GET_ENTITLEMENTS_EMBEDDED:
          return lF.parse(ZJ);
        case aZ.SET_CONFIG:
          return cU.parse(ZJ);
        case aZ.START_PURCHASE:
          return JU.parse(ZJ);
        case aZ.SUBSCRIBE:
        case aZ.UNSUBSCRIBE:
          return aF.parse(ZJ);
        case aZ.USER_SETTINGS_GET_LOCALE:
          return ZU.parse(ZJ);
        case aZ.OPEN_EXTERNAL_LINK:
        case aZ.SET_ORIENTATION_LOCK_STATE:
        case aZ.SET_CERTIFIED_DEVICES:
        case aZ.SEND_ANALYTICS_EVENT:
        case aZ.OPEN_INVITE_DIALOG:
        case aZ.CAPTURE_LOG:
        case aZ.GET_SKUS:
        case aZ.GET_ENTITLEMENTS:
          return NF.parse(ZJ);
        case aZ.AUTHENTICATE:
        case aZ.INITIATE_IMAGE_UPLOAD:
        case aZ.OPEN_SHARE_MOMENT_DIALOG:
        case aZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: JJ
          } = RZ[cJ];
          return JJ.parse(ZJ);
        default:
          ! function(JJ, cJ) {
            throw cJ
          }(0, new Error(`Unrecognized command ${cJ}`))
      }
    }
    ac({
      frame_id: Hc(),
      platform: qZ(PZ).optional().nullable()
    }), ac({
      v: XZ(1),
      encoding: XZ("json").optional(),
      client_id: Hc(),
      frame_id: Hc()
    });
    const qU = ac({
        code: Pc(),
        message: Hc().optional()
      }),
      jU = ac({
        evt: Hc().nullable(),
        nonce: Hc().nullable(),
        data: uc().nullable(),
        cmd: Hc()
      }).passthrough();

    function YU(JJ) {
      const cJ = jU.parse(JJ);
      return null != cJ.evt ? cJ.evt === gF ? kF.parse(cJ) : function(JJ) {
        const cJ = JJ.evt;
        if (!(cJ in HF)) throw new Error(`Unrecognized event type ${JJ.evt}`);
        return zF[cJ].payload.parse(JJ)
      }(dF.parse(cJ)) : function(JJ) {
        return Object.assign(Object.assign({}, JJ), {
          data: AU(JJ)
        })
      }(XU.passthrough().parse(cJ))
    }

    function hU(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const UJ = BZ.extend({
        cmd: XZ(cJ),
        data: ZJ
      });
      return async ZJ => {
        const eJ = await JJ({
          cmd: cJ,
          args: ZJ,
          transfer: FJ(ZJ)
        });
        return UJ.parse(eJ).data
      }
    }

    function DU(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const ZJ = RZ[JJ].response,
        FJ = BZ.extend({
          cmd: XZ(JJ),
          data: ZJ
        });
      return ZJ => async UJ => {
        const eJ = await ZJ({
          cmd: JJ,
          args: UJ,
          transfer: cJ(UJ)
        });
        return FJ.parse(eJ).data
      }
    }
    const sU = DU(CZ.AUTHENTICATE),
      nU = JJ => hU(JJ, aZ.AUTHORIZE, OF),
      GU = JJ => hU(JJ, aZ.CAPTURE_LOG, NF),
      fU = JJ => hU(JJ, aZ.ENCOURAGE_HW_ACCELERATION, FU),
      xU = JJ => hU(JJ, aZ.GET_ENTITLEMENTS_EMBEDDED, lF),
      rU = JJ => hU(JJ, aZ.GET_SKUS_EMBEDDED, oF),
      vU = JJ => hU(JJ, aZ.GET_CHANNEL_PERMISSIONS, UU),
      mU = JJ => hU(JJ, aZ.GET_PLATFORM_BEHAVIORS, eU),
      QU = JJ => hU(JJ, aZ.OPEN_EXTERNAL_LINK, NF),
      EU = JJ => hU(JJ, aZ.OPEN_INVITE_DIALOG, NF),
      VU = DU(CZ.OPEN_SHARE_MOMENT_DIALOG);
    FF.PD({
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
      type: FF.shape.type.optional(),
      instance: FF.shape.instance.optional()
    }).nullable();
    const KU = JJ => hU(JJ, aZ.SET_ACTIVITY, tF),
      yU = JJ => hU(JJ, aZ.SET_CONFIG, cU);
    const SU = JJ => ({
        lock_state: JJ.lock_state,
        picture_in_picture_lock_state: JJ.picture_in_picture_lock_state
      }),
      IU = JJ => function(JJ) {
        let {
          sendCommand: cJ,
          cmd: ZJ,
          response: FJ,
          fallbackTransform: UJ,
          transferTransform: eJ = () => {}
        } = JJ;
        const XJ = BZ.extend({
          cmd: XZ(ZJ),
          data: FJ
        });
        return async JJ => {
          try {
            const FJ = await cJ({
              cmd: ZJ,
              args: JJ,
              transfer: eJ(JJ)
            });
            return XJ.parse(FJ).data
          } catch (FJ) {
            if (FJ.code === gZ.INVALID_PAYLOAD) {
              const FJ = UJ(JJ),
                AJ = await cJ({
                  cmd: ZJ,
                  args: FJ,
                  transfer: eJ(FJ)
                });
              return XJ.parse(AJ).data
            }
            throw FJ
          }
        }
      }({
        sendCommand: JJ,
        cmd: aZ.SET_ORIENTATION_LOCK_STATE,
        response: NF,
        fallbackTransform: SU
      }),
      MU = JJ => hU(JJ, aZ.START_PURCHASE, JU),
      bU = JJ => hU(JJ, aZ.USER_SETTINGS_GET_LOCALE, ZU),
      wU = DU(CZ.INITIATE_IMAGE_UPLOAD),
      WU = JJ => hU(JJ, aZ.GET_CHANNEL, uF),
      gU = DU(CZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var HU = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function PU(JJ) {
      return "string" === typeof JJ && HU.test(JJ)
    }
    for (var kU = [], pU = 0; pU < 256; ++pU) kU.push((pU + 256).toString(16).substr(1));

    function dU(JJ) {
      var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = (kU[JJ[cJ + 0]] + kU[JJ[cJ + 1]] + kU[JJ[cJ + 2]] + kU[JJ[cJ + 3]] + "-" + kU[JJ[cJ + 4]] + kU[JJ[cJ + 5]] + "-" + kU[JJ[cJ + 6]] + kU[JJ[cJ + 7]] + "-" + kU[JJ[cJ + 8]] + kU[JJ[cJ + 9]] + "-" + kU[JJ[cJ + 10]] + kU[JJ[cJ + 11]] + kU[JJ[cJ + 12]] + kU[JJ[cJ + 13]] + kU[JJ[cJ + 14]] + kU[JJ[cJ + 15]]).toLowerCase();
      if (!PU(ZJ)) throw TypeError("Stringified UUID is invalid");
      return ZJ
    }
    var zU;

    function NU(JJ, cJ, ZJ) {
      function FJ(JJ, FJ, UJ, eJ) {
        if ("string" === typeof JJ && (JJ = function(JJ) {
            JJ = unescape(encodeURIComponent(JJ));
            for (var cJ = [], ZJ = 0; ZJ < JJ.length; ++ZJ) cJ.push(JJ.charCodeAt(ZJ));
            return cJ
          }(JJ)), "string" === typeof FJ && (FJ = function(JJ) {
            if (!PU(JJ)) throw TypeError("Invalid UUID");
            var cJ, ZJ = new Uint8Array(16);
            return ZJ[0] = (cJ = parseInt(JJ.slice(0, 8), 16)) >>> 24, ZJ[1] = cJ >>> 16 & 255, ZJ[2] = cJ >>> 8 & 255, ZJ[3] = 255 & cJ, ZJ[4] = (cJ = parseInt(JJ.slice(9, 13), 16)) >>> 8, ZJ[5] = 255 & cJ, ZJ[6] = (cJ = parseInt(JJ.slice(14, 18), 16)) >>> 8, ZJ[7] = 255 & cJ, ZJ[8] = (cJ = parseInt(JJ.slice(19, 23), 16)) >>> 8, ZJ[9] = 255 & cJ, ZJ[10] = (cJ = parseInt(JJ.slice(24, 36), 16)) / 1099511627776 & 255, ZJ[11] = cJ / 4294967296 & 255, ZJ[12] = cJ >>> 24 & 255, ZJ[13] = cJ >>> 16 & 255, ZJ[14] = cJ >>> 8 & 255, ZJ[15] = 255 & cJ, ZJ
          }(FJ)), 16 !== FJ.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var XJ = new Uint8Array(16 + JJ.length);
        if (XJ.set(FJ), XJ.set(JJ, FJ.length), (XJ = ZJ(XJ))[6] = 15 & XJ[6] | cJ, XJ[8] = 63 & XJ[8] | 128, UJ) {
          eJ = eJ || 0;
          for (var AJ = 0; AJ < 16; ++AJ) UJ[eJ + AJ] = XJ[AJ];
          return UJ
        }
        return dU(XJ)
      }
      try {
        FJ.name = JJ
      } catch (UJ) {}
      return FJ.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", FJ.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", FJ
    }

    function OU(JJ) {
      return 14 + (JJ + 64 >>> 9 << 4) + 1
    }

    function TU(JJ, cJ) {
      var ZJ = (65535 & JJ) + (65535 & cJ);
      return (JJ >> 16) + (cJ >> 16) + (ZJ >> 16) << 16 | 65535 & ZJ
    }

    function CU(JJ, cJ, ZJ, FJ, UJ, eJ) {
      return TU((XJ = TU(TU(cJ, JJ), TU(FJ, eJ))) << (AJ = UJ) | XJ >>> 32 - AJ, ZJ);
      var XJ, AJ
    }

    function uU(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      return CU(cJ & ZJ | ~cJ & FJ, JJ, cJ, UJ, eJ, XJ)
    }

    function iU(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      return CU(cJ & FJ | ZJ & ~FJ, JJ, cJ, UJ, eJ, XJ)
    }

    function RU(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      return CU(cJ ^ ZJ ^ FJ, JJ, cJ, UJ, eJ, XJ)
    }

    function LU(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      return CU(ZJ ^ (cJ | ~FJ), JJ, cJ, UJ, eJ, XJ)
    }
    NU("v3", 48, (function(JJ) {
      if ("string" === typeof JJ) {
        var cJ = unescape(encodeURIComponent(JJ));
        JJ = new Uint8Array(cJ.length);
        for (var ZJ = 0; ZJ < cJ.length; ++ZJ) JJ[ZJ] = cJ.charCodeAt(ZJ)
      }
      return function(JJ) {
        for (var cJ = [], ZJ = 32 * JJ.length, FJ = "0123456789abcdef", UJ = 0; UJ < ZJ; UJ += 8) {
          var eJ = JJ[UJ >> 5] >>> UJ % 32 & 255,
            XJ = parseInt(FJ.charAt(eJ >>> 4 & 15) + FJ.charAt(15 & eJ), 16);
          cJ.push(XJ)
        }
        return cJ
      }(function(JJ, cJ) {
        JJ[cJ >> 5] |= 128 << cJ % 32, JJ[OU(cJ) - 1] = cJ;
        for (var ZJ = 1732584193, FJ = -271733879, UJ = -1732584194, eJ = 271733878, XJ = 0; XJ < JJ.length; XJ += 16) {
          var AJ = ZJ,
            qJ = FJ,
            jJ = UJ,
            YJ = eJ;
          ZJ = uU(ZJ, FJ, UJ, eJ, JJ[XJ], 7, -680876936), eJ = uU(eJ, ZJ, FJ, UJ, JJ[XJ + 1], 12, -389564586), UJ = uU(UJ, eJ, ZJ, FJ, JJ[XJ + 2], 17, 606105819), FJ = uU(FJ, UJ, eJ, ZJ, JJ[XJ + 3], 22, -1044525330), ZJ = uU(ZJ, FJ, UJ, eJ, JJ[XJ + 4], 7, -176418897), eJ = uU(eJ, ZJ, FJ, UJ, JJ[XJ + 5], 12, 1200080426), UJ = uU(UJ, eJ, ZJ, FJ, JJ[XJ + 6], 17, -1473231341), FJ = uU(FJ, UJ, eJ, ZJ, JJ[XJ + 7], 22, -45705983), ZJ = uU(ZJ, FJ, UJ, eJ, JJ[XJ + 8], 7, 1770035416), eJ = uU(eJ, ZJ, FJ, UJ, JJ[XJ + 9], 12, -1958414417), UJ = uU(UJ, eJ, ZJ, FJ, JJ[XJ + 10], 17, -42063), FJ = uU(FJ, UJ, eJ, ZJ, JJ[XJ + 11], 22, -1990404162), ZJ = uU(ZJ, FJ, UJ, eJ, JJ[XJ + 12], 7, 1804603682), eJ = uU(eJ, ZJ, FJ, UJ, JJ[XJ + 13], 12, -40341101), UJ = uU(UJ, eJ, ZJ, FJ, JJ[XJ + 14], 17, -1502002290), ZJ = iU(ZJ, FJ = uU(FJ, UJ, eJ, ZJ, JJ[XJ + 15], 22, 1236535329), UJ, eJ, JJ[XJ + 1], 5, -165796510), eJ = iU(eJ, ZJ, FJ, UJ, JJ[XJ + 6], 9, -1069501632), UJ = iU(UJ, eJ, ZJ, FJ, JJ[XJ + 11], 14, 643717713), FJ = iU(FJ, UJ, eJ, ZJ, JJ[XJ], 20, -373897302), ZJ = iU(ZJ, FJ, UJ, eJ, JJ[XJ + 5], 5, -701558691), eJ = iU(eJ, ZJ, FJ, UJ, JJ[XJ + 10], 9, 38016083), UJ = iU(UJ, eJ, ZJ, FJ, JJ[XJ + 15], 14, -660478335), FJ = iU(FJ, UJ, eJ, ZJ, JJ[XJ + 4], 20, -405537848), ZJ = iU(ZJ, FJ, UJ, eJ, JJ[XJ + 9], 5, 568446438), eJ = iU(eJ, ZJ, FJ, UJ, JJ[XJ + 14], 9, -1019803690), UJ = iU(UJ, eJ, ZJ, FJ, JJ[XJ + 3], 14, -187363961), FJ = iU(FJ, UJ, eJ, ZJ, JJ[XJ + 8], 20, 1163531501), ZJ = iU(ZJ, FJ, UJ, eJ, JJ[XJ + 13], 5, -1444681467), eJ = iU(eJ, ZJ, FJ, UJ, JJ[XJ + 2], 9, -51403784), UJ = iU(UJ, eJ, ZJ, FJ, JJ[XJ + 7], 14, 1735328473), ZJ = RU(ZJ, FJ = iU(FJ, UJ, eJ, ZJ, JJ[XJ + 12], 20, -1926607734), UJ, eJ, JJ[XJ + 5], 4, -378558), eJ = RU(eJ, ZJ, FJ, UJ, JJ[XJ + 8], 11, -2022574463), UJ = RU(UJ, eJ, ZJ, FJ, JJ[XJ + 11], 16, 1839030562), FJ = RU(FJ, UJ, eJ, ZJ, JJ[XJ + 14], 23, -35309556), ZJ = RU(ZJ, FJ, UJ, eJ, JJ[XJ + 1], 4, -1530992060), eJ = RU(eJ, ZJ, FJ, UJ, JJ[XJ + 4], 11, 1272893353), UJ = RU(UJ, eJ, ZJ, FJ, JJ[XJ + 7], 16, -155497632), FJ = RU(FJ, UJ, eJ, ZJ, JJ[XJ + 10], 23, -1094730640), ZJ = RU(ZJ, FJ, UJ, eJ, JJ[XJ + 13], 4, 681279174), eJ = RU(eJ, ZJ, FJ, UJ, JJ[XJ], 11, -358537222), UJ = RU(UJ, eJ, ZJ, FJ, JJ[XJ + 3], 16, -722521979), FJ = RU(FJ, UJ, eJ, ZJ, JJ[XJ + 6], 23, 76029189), ZJ = RU(ZJ, FJ, UJ, eJ, JJ[XJ + 9], 4, -640364487), eJ = RU(eJ, ZJ, FJ, UJ, JJ[XJ + 12], 11, -421815835), UJ = RU(UJ, eJ, ZJ, FJ, JJ[XJ + 15], 16, 530742520), ZJ = LU(ZJ, FJ = RU(FJ, UJ, eJ, ZJ, JJ[XJ + 2], 23, -995338651), UJ, eJ, JJ[XJ], 6, -198630844), eJ = LU(eJ, ZJ, FJ, UJ, JJ[XJ + 7], 10, 1126891415), UJ = LU(UJ, eJ, ZJ, FJ, JJ[XJ + 14], 15, -1416354905), FJ = LU(FJ, UJ, eJ, ZJ, JJ[XJ + 5], 21, -57434055), ZJ = LU(ZJ, FJ, UJ, eJ, JJ[XJ + 12], 6, 1700485571), eJ = LU(eJ, ZJ, FJ, UJ, JJ[XJ + 3], 10, -1894986606), UJ = LU(UJ, eJ, ZJ, FJ, JJ[XJ + 10], 15, -1051523), FJ = LU(FJ, UJ, eJ, ZJ, JJ[XJ + 1], 21, -2054922799), ZJ = LU(ZJ, FJ, UJ, eJ, JJ[XJ + 8], 6, 1873313359), eJ = LU(eJ, ZJ, FJ, UJ, JJ[XJ + 15], 10, -30611744), UJ = LU(UJ, eJ, ZJ, FJ, JJ[XJ + 6], 15, -1560198380), FJ = LU(FJ, UJ, eJ, ZJ, JJ[XJ + 13], 21, 1309151649), ZJ = LU(ZJ, FJ, UJ, eJ, JJ[XJ + 4], 6, -145523070), eJ = LU(eJ, ZJ, FJ, UJ, JJ[XJ + 11], 10, -1120210379), UJ = LU(UJ, eJ, ZJ, FJ, JJ[XJ + 2], 15, 718787259), FJ = LU(FJ, UJ, eJ, ZJ, JJ[XJ + 9], 21, -343485551), ZJ = TU(ZJ, AJ), FJ = TU(FJ, qJ), UJ = TU(UJ, jJ), eJ = TU(eJ, YJ)
        }
        return [ZJ, FJ, UJ, eJ]
      }(function(JJ) {
        if (0 === JJ.length) return [];
        for (var cJ = 8 * JJ.length, ZJ = new Uint32Array(OU(cJ)), FJ = 0; FJ < cJ; FJ += 8) ZJ[FJ >> 5] |= (255 & JJ[FJ / 8]) << FJ % 32;
        return ZJ
      }(JJ), 8 * JJ.length))
    }));
    var aU = new Uint8Array(16);

    function BU() {
      if (!zU && !(zU = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return zU(aU)
    }

    function tU(JJ, cJ, ZJ) {
      var FJ = (JJ = JJ || {}).random || (JJ.rng || BU)();
      if (FJ[6] = 15 & FJ[6] | 64, FJ[8] = 63 & FJ[8] | 128, cJ) {
        ZJ = ZJ || 0;
        for (var UJ = 0; UJ < 16; ++UJ) cJ[ZJ + UJ] = FJ[UJ];
        return cJ
      }
      return dU(FJ)
    }

    function oU(JJ, cJ, ZJ, FJ) {
      switch (JJ) {
        case 0:
          return cJ & ZJ ^ ~cJ & FJ;
        case 1:
        case 3:
          return cJ ^ ZJ ^ FJ;
        case 2:
          return cJ & ZJ ^ cJ & FJ ^ ZJ & FJ
      }
    }

    function lU(JJ, cJ) {
      return JJ << cJ | JJ >>> 32 - cJ
    }
    NU("v5", 80, (function(JJ) {
      var cJ = [1518500249, 1859775393, 2400959708, 3395469782],
        ZJ = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof JJ) {
        var FJ = unescape(encodeURIComponent(JJ));
        JJ = [];
        for (var UJ = 0; UJ < FJ.length; ++UJ) JJ.push(FJ.charCodeAt(UJ))
      } else Array.isArray(JJ) || (JJ = Array.prototype.slice.call(JJ));
      JJ.push(128);
      for (var eJ = JJ.length / 4 + 2, XJ = Math.ceil(eJ / 16), AJ = new Array(XJ), qJ = 0; qJ < XJ; ++qJ) {
        for (var jJ = new Uint32Array(16), YJ = 0; YJ < 16; ++YJ) jJ[YJ] = JJ[64 * qJ + 4 * YJ] << 24 | JJ[64 * qJ + 4 * YJ + 1] << 16 | JJ[64 * qJ + 4 * YJ + 2] << 8 | JJ[64 * qJ + 4 * YJ + 3];
        AJ[qJ] = jJ
      }
      AJ[XJ - 1][14] = 8 * (JJ.length - 1) / Math.pow(2, 32), AJ[XJ - 1][14] = Math.floor(AJ[XJ - 1][14]), AJ[XJ - 1][15] = 8 * (JJ.length - 1) & 4294967295;
      for (var hJ = 0; hJ < XJ; ++hJ) {
        for (var DJ = new Uint32Array(80), sJ = 0; sJ < 16; ++sJ) DJ[sJ] = AJ[hJ][sJ];
        for (var nJ = 16; nJ < 80; ++nJ) DJ[nJ] = lU(DJ[nJ - 3] ^ DJ[nJ - 8] ^ DJ[nJ - 14] ^ DJ[nJ - 16], 1);
        for (var GJ = ZJ[0], fJ = ZJ[1], xJ = ZJ[2], rJ = ZJ[3], vJ = ZJ[4], mJ = 0; mJ < 80; ++mJ) {
          var QJ = Math.floor(mJ / 20),
            EJ = lU(GJ, 5) + oU(QJ, fJ, xJ, rJ) + vJ + cJ[QJ] + DJ[mJ] >>> 0;
          vJ = rJ, rJ = xJ, xJ = lU(fJ, 30) >>> 0, fJ = GJ, GJ = EJ
        }
        ZJ[0] = ZJ[0] + GJ >>> 0, ZJ[1] = ZJ[1] + fJ >>> 0, ZJ[2] = ZJ[2] + xJ >>> 0, ZJ[3] = ZJ[3] + rJ >>> 0, ZJ[4] = ZJ[4] + vJ >>> 0
      }
      return [ZJ[0] >> 24 & 255, ZJ[0] >> 16 & 255, ZJ[0] >> 8 & 255, 255 & ZJ[0], ZJ[1] >> 24 & 255, ZJ[1] >> 16 & 255, ZJ[1] >> 8 & 255, 255 & ZJ[1], ZJ[2] >> 24 & 255, ZJ[2] >> 16 & 255, ZJ[2] >> 8 & 255, 255 & ZJ[2], ZJ[3] >> 24 & 255, ZJ[3] >> 16 & 255, ZJ[3] >> 8 & 255, 255 & ZJ[3], ZJ[4] >> 24 & 255, ZJ[4] >> 16 & 255, ZJ[4] >> 8 & 255, 255 & ZJ[4]]
    }));
    class Je extends Error {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(cJ), this.code = JJ, this.message = cJ, this.name = "Discord SDK Error"
      }
    }
    const ce = ["log", "warn", "debug", "info", "error"];
    var Ze;
    ! function(JJ) {
      JJ[JJ.HANDSHAKE = 0] = "HANDSHAKE", JJ[JJ.FRAME = 1] = "FRAME", JJ[JJ.CLOSE = 2] = "CLOSE", JJ[JJ.HELLO = 3] = "HELLO"
    }(Ze || (Ze = {}));
    const Fe = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Ue {
      getTransfer(JJ) {
        var cJ;
        switch (JJ.cmd) {
          case aZ.SUBSCRIBE:
          case aZ.UNSUBSCRIBE:
            return;
          default:
            return null !== (cJ = JJ.transfer) && void 0 !== cJ ? cJ : void 0
        }
      }
      constructor(JJ, cJ) {
        var ZJ;
        if (this.eventBus = new jJ, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = JJ => {
            var cJ;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const ZJ = tU();
            null === (cJ = this.source) || void 0 === cJ || cJ.postMessage([Ze.FRAME, Object.assign(Object.assign({}, JJ), {
              nonce: ZJ
            })], this.sourceOrigin, this.getTransfer(JJ));
            return new Promise(((JJ, cJ) => {
              this.pendingCommands.set(ZJ, {
                resolve: JJ,
                reject: cJ
              })
            }))
          }, this.commands = (ZJ = this.sendCommand, {
            authenticate: sU(ZJ),
            authorize: nU(ZJ),
            captureLog: GU(ZJ),
            encourageHardwareAcceleration: fU(ZJ),
            getChannel: WU(ZJ),
            getChannelPermissions: vU(ZJ),
            getEntitlements: xU(ZJ),
            getPlatformBehaviors: mU(ZJ),
            getSkus: rU(ZJ),
            openExternalLink: QU(ZJ),
            openInviteDialog: EU(ZJ),
            openShareMomentDialog: VU(ZJ),
            setActivity: KU(ZJ),
            setConfig: yU(ZJ),
            setOrientationLockState: IU(ZJ),
            startPurchase: MU(ZJ),
            userSettingsGetLocale: bU(ZJ),
            initiateImageUpload: wU(ZJ),
            getInstanceConnectedParticipants: gU(ZJ)
          }), this.handleMessage = JJ => {
            if (!Fe.has(JJ.origin)) return;
            const cJ = JJ.data;
            if (!Array.isArray(cJ)) return;
            const [ZJ, FJ] = cJ;
            switch (ZJ) {
              case Ze.HELLO:
                return;
              case Ze.CLOSE:
                return this.handleClose(FJ);
              case Ze.HANDSHAKE:
                return this.handleHandshake();
              case Ze.FRAME:
                return this.handleFrame(FJ);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = JJ, this.configuration = null !== cJ && void 0 !== cJ ? cJ : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = PZ.DESKTOP, this.guildId = null, void(this.channelId = null);
        const FJ = new URLSearchParams(this._getSearch()),
          UJ = FJ.get("frame_id");
        if (!UJ) throw new Error("frame_id query param is not defined");
        this.frameId = UJ;
        const eJ = FJ.get("instance_id");
        if (!eJ) throw new Error("instance_id query param is not defined");
        this.instanceId = eJ;
        const XJ = FJ.get("platform");
        if (!XJ) throw new Error("platform query param is not defined");
        if (XJ !== PZ.DESKTOP && XJ !== PZ.MOBILE) throw new Error(`Invalid query param "platform" of "${XJ}". Valid values are "${PZ.DESKTOP}" or "${PZ.MOBILE}"`);
        this.platform = XJ, this.guildId = FJ.get("guild_id"), this.channelId = FJ.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var JJ;
          return [null !== (JJ = window.parent.opener) && void 0 !== JJ ? JJ : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(JJ, cJ) {
        var ZJ;
        window.removeEventListener("message", this.handleMessage);
        const FJ = tU();
        null === (ZJ = this.source) || void 0 === ZJ || ZJ.postMessage([Ze.CLOSE, {
          code: JJ,
          message: cJ,
          nonce: FJ
        }], this.sourceOrigin)
      }
      async subscribe(JJ, cJ) {
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
        const [eJ] = FJ, XJ = this.eventBus.listenerCount(JJ), AJ = this.eventBus.on(JJ, cJ);
        return Object.values(HF).includes(JJ) && JJ !== HF.READY && 0 === XJ && await this.sendCommand({
          cmd: aZ.SUBSCRIBE,
          args: eJ,
          evt: JJ
        }), AJ
      }
      async unsubscribe(JJ, cJ) {
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
        const [eJ] = FJ;
        return JJ !== HF.READY && 1 === this.eventBus.listenerCount(JJ) && await this.sendCommand({
          cmd: aZ.UNSUBSCRIBE,
          evt: JJ,
          args: eJ
        }), this.eventBus.off(JJ, cJ)
      }
      async ready() {
        this.isReady || await new Promise((JJ => {
          this.eventBus.once(HF.READY, JJ)
        }))
      }
      handshake() {
        var JJ;
        null === (JJ = this.source) || void 0 === JJ || JJ.postMessage([Ze.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(HF.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const JJ = (JJ, cJ) => {
          this.commands.captureLog({
            level: JJ,
            message: cJ
          })
        };
        ce.forEach((cJ => {
          ! function(JJ, cJ, ZJ) {
            const FJ = JJ[cJ],
              UJ = JJ;
            FJ && (JJ[cJ] = function() {
              const JJ = [].slice.call(arguments),
                eJ = "" + JJ.join(" ");
              ZJ(cJ, eJ), FJ.apply(UJ, JJ)
            })
          }(console, cJ, JJ)
        }))
      }
      handleClose(JJ) {
        qU.parse(JJ)
      }
      handleHandshake() {}
      handleFrame(JJ) {
        var cJ, ZJ;
        let FJ;
        try {
          FJ = YU(JJ)
        } catch (UJ) {
          return console.error("Failed to parse", JJ), void console.error(UJ)
        }
        if ("DISPATCH" === FJ.cmd) this.eventBus.emit(FJ.evt, FJ.data);
        else {
          if (FJ.evt === gF) {
            if (null != FJ.nonce) return null === (cJ = this.pendingCommands.get(FJ.nonce)) || void 0 === cJ || cJ.reject(FJ.data), void this.pendingCommands.delete(FJ.nonce);
            this.eventBus.emit("error", new Je(FJ.data.code, FJ.data.message))
          }
          if (null == FJ.nonce) return void console.error("Missing nonce", JJ);
          null === (ZJ = this.pendingCommands.get(FJ.nonce)) || void 0 === ZJ || ZJ.resolve(FJ), this.pendingCommands.delete(FJ.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var ee, Xe = 1e9,
      Ae = !0,
      qe = "[DecimalError] ",
      je = qe + "Invalid argument: ",
      Ye = qe + "Exponent out of range: ",
      he = Math.floor,
      De = Math.pow,
      se = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      ne = 1e7,
      Ge = 9007199254740991,
      fe = he(1286742750677284.5),
      xe = {};

    function re(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ = JJ.constructor,
        hJ = YJ.precision;
      if (!JJ.s || !cJ.s) return cJ.s || (cJ = new YJ(JJ)), Ae ? Me(cJ, hJ) : cJ;
      if (qJ = JJ.d, jJ = cJ.d, XJ = JJ.e, UJ = cJ.e, qJ = qJ.slice(), eJ = XJ - UJ) {
        for (eJ < 0 ? (FJ = qJ, eJ = -eJ, AJ = jJ.length) : (FJ = jJ, UJ = XJ, AJ = qJ.length), eJ > (AJ = (XJ = Math.ceil(hJ / 7)) > AJ ? XJ + 1 : AJ + 1) && (eJ = AJ, FJ.length = 1), FJ.reverse(); eJ--;) FJ.push(0);
        FJ.reverse()
      }
      for ((AJ = qJ.length) - (eJ = jJ.length) < 0 && (eJ = AJ, FJ = jJ, jJ = qJ, qJ = FJ), ZJ = 0; eJ;) ZJ = (qJ[--eJ] = qJ[eJ] + jJ[eJ] + ZJ) / ne | 0, qJ[eJ] %= ne;
      for (ZJ && (qJ.unshift(ZJ), ++UJ), AJ = qJ.length; 0 == qJ[--AJ];) qJ.pop();
      return cJ.d = qJ, cJ.e = UJ, Ae ? Me(cJ, hJ) : cJ
    }

    function ve(JJ, cJ, ZJ) {
      if (JJ !== ~~JJ || JJ < cJ || JJ > ZJ) throw Error(je + JJ)
    }

    function me(JJ) {
      var cJ, ZJ, FJ, UJ = JJ.length - 1,
        eJ = "",
        XJ = JJ[0];
      if (UJ > 0) {
        for (eJ += XJ, cJ = 1; cJ < UJ; cJ++)(ZJ = 7 - (FJ = JJ[cJ] + "").length) && (eJ += ye(ZJ)), eJ += FJ;
        (ZJ = 7 - (FJ = (XJ = JJ[cJ]) + "").length) && (eJ += ye(ZJ))
      } else if (0 === XJ) return "0";
      for (; XJ % 10 === 0;) XJ /= 10;
      return eJ + XJ
    }
    xe.absoluteValue = xe.abs = function() {
      var JJ = new this.constructor(this);
      return JJ.s && (JJ.s = 1), JJ
    }, xe.comparedTo = xe.cmp = function(JJ) {
      var cJ, ZJ, FJ, UJ, eJ = this;
      if (JJ = new eJ.constructor(JJ), eJ.s !== JJ.s) return eJ.s || -JJ.s;
      if (eJ.e !== JJ.e) return eJ.e > JJ.e ^ eJ.s < 0 ? 1 : -1;
      for (cJ = 0, ZJ = (FJ = eJ.d.length) < (UJ = JJ.d.length) ? FJ : UJ; cJ < ZJ; ++cJ)
        if (eJ.d[cJ] !== JJ.d[cJ]) return eJ.d[cJ] > JJ.d[cJ] ^ eJ.s < 0 ? 1 : -1;
      return FJ === UJ ? 0 : FJ > UJ ^ eJ.s < 0 ? 1 : -1
    }, xe.decimalPlaces = xe.dp = function() {
      var JJ = this,
        cJ = JJ.d.length - 1,
        ZJ = 7 * (cJ - JJ.e);
      if (cJ = JJ.d[cJ])
        for (; cJ % 10 == 0; cJ /= 10) ZJ--;
      return ZJ < 0 ? 0 : ZJ
    }, xe.dividedBy = xe.div = function(JJ) {
      return Qe(this, new this.constructor(JJ))
    }, xe.dividedToIntegerBy = xe.idiv = function(JJ) {
      var cJ = this.constructor;
      return Me(Qe(this, new cJ(JJ), 0, 1), cJ.precision)
    }, xe.equals = xe.eq = function(JJ) {
      return !this.cmp(JJ)
    }, xe.exponent = function() {
      return Ve(this)
    }, xe.greaterThan = xe.gt = function(JJ) {
      return this.cmp(JJ) > 0
    }, xe.greaterThanOrEqualTo = xe.gte = function(JJ) {
      return this.cmp(JJ) >= 0
    }, xe.isInteger = xe.isint = function() {
      return this.e > this.d.length - 2
    }, xe.isNegative = xe.isneg = function() {
      return this.s < 0
    }, xe.isPositive = xe.ispos = function() {
      return this.s > 0
    }, xe.isZero = function() {
      return 0 === this.s
    }, xe.lessThan = xe.lt = function(JJ) {
      return this.cmp(JJ) < 0
    }, xe.lessThanOrEqualTo = xe.lte = function(JJ) {
      return this.cmp(JJ) < 1
    }, xe.logarithm = xe.log = function(JJ) {
      var cJ, ZJ = this,
        FJ = ZJ.constructor,
        UJ = FJ.precision,
        eJ = UJ + 5;
      if (void 0 === JJ) JJ = new FJ(10);
      else if ((JJ = new FJ(JJ)).s < 1 || JJ.eq(ee)) throw Error(qe + "NaN");
      if (ZJ.s < 1) throw Error(qe + (ZJ.s ? "NaN" : "-Infinity"));
      return ZJ.eq(ee) ? new FJ(0) : (Ae = !1, cJ = Qe(Se(ZJ, eJ), Se(JJ, eJ), eJ), Ae = !0, Me(cJ, UJ))
    }, xe.minus = xe.sub = function(JJ) {
      var cJ = this;
      return JJ = new cJ.constructor(JJ), cJ.s == JJ.s ? be(cJ, JJ) : re(cJ, (JJ.s = -JJ.s, JJ))
    }, xe.modulo = xe.mod = function(JJ) {
      var cJ, ZJ = this,
        FJ = ZJ.constructor,
        UJ = FJ.precision;
      if (!(JJ = new FJ(JJ)).s) throw Error(qe + "NaN");
      return ZJ.s ? (Ae = !1, cJ = Qe(ZJ, JJ, 0, 1).times(JJ), Ae = !0, ZJ.minus(cJ)) : Me(new FJ(ZJ), UJ)
    }, xe.naturalExponential = xe.exp = function() {
      return Ee(this)
    }, xe.naturalLogarithm = xe.ln = function() {
      return Se(this)
    }, xe.negated = xe.neg = function() {
      var JJ = new this.constructor(this);
      return JJ.s = -JJ.s || 0, JJ
    }, xe.plus = xe.add = function(JJ) {
      var cJ = this;
      return JJ = new cJ.constructor(JJ), cJ.s == JJ.s ? re(cJ, JJ) : be(cJ, (JJ.s = -JJ.s, JJ))
    }, xe.precision = xe.sd = function(JJ) {
      var cJ, ZJ, FJ, UJ = this;
      if (void 0 !== JJ && JJ !== !!JJ && 1 !== JJ && 0 !== JJ) throw Error(je + JJ);
      if (cJ = Ve(UJ) + 1, ZJ = 7 * (FJ = UJ.d.length - 1) + 1, FJ = UJ.d[FJ]) {
        for (; FJ % 10 == 0; FJ /= 10) ZJ--;
        for (FJ = UJ.d[0]; FJ >= 10; FJ /= 10) ZJ++
      }
      return JJ && cJ > ZJ ? cJ : ZJ
    }, xe.squareRoot = xe.sqrt = function() {
      var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ = this,
        qJ = AJ.constructor;
      if (AJ.s < 1) {
        if (!AJ.s) return new qJ(0);
        throw Error(qe + "NaN")
      }
      for (JJ = Ve(AJ), Ae = !1, 0 == (UJ = Math.sqrt(+AJ)) || UJ == 1 / 0 ? (((cJ = me(AJ.d)).length + JJ) % 2 == 0 && (cJ += "0"), UJ = Math.sqrt(cJ), JJ = he((JJ + 1) / 2) - (JJ < 0 || JJ % 2), FJ = new qJ(cJ = UJ == 1 / 0 ? "1e" + JJ : (cJ = UJ.toExponential()).slice(0, cJ.indexOf("e") + 1) + JJ)) : FJ = new qJ(UJ.toString()), UJ = XJ = (ZJ = qJ.precision) + 3;;)
        if (FJ = (eJ = FJ).plus(Qe(AJ, eJ, XJ + 2)).times(.5), me(eJ.d).slice(0, XJ) === (cJ = me(FJ.d)).slice(0, XJ)) {
          if (cJ = cJ.slice(XJ - 3, XJ + 1), UJ == XJ && "4999" == cJ) {
            if (Me(eJ, ZJ + 1, 0), eJ.times(eJ).eq(AJ)) {
              FJ = eJ;
              break
            }
          } else if ("9999" != cJ) break;
          XJ += 4
        } return Ae = !0, Me(FJ, ZJ)
    }, xe.times = xe.mul = function(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ = this,
        hJ = YJ.constructor,
        DJ = YJ.d,
        sJ = (JJ = new hJ(JJ)).d;
      if (!YJ.s || !JJ.s) return new hJ(0);
      for (JJ.s *= YJ.s, ZJ = YJ.e + JJ.e, (qJ = DJ.length) < (jJ = sJ.length) && (eJ = DJ, DJ = sJ, sJ = eJ, XJ = qJ, qJ = jJ, jJ = XJ), eJ = [], FJ = XJ = qJ + jJ; FJ--;) eJ.push(0);
      for (FJ = jJ; --FJ >= 0;) {
        for (cJ = 0, UJ = qJ + FJ; UJ > FJ;) AJ = eJ[UJ] + sJ[FJ] * DJ[UJ - FJ - 1] + cJ, eJ[UJ--] = AJ % ne | 0, cJ = AJ / ne | 0;
        eJ[UJ] = (eJ[UJ] + cJ) % ne | 0
      }
      for (; !eJ[--XJ];) eJ.pop();
      return cJ ? ++ZJ : eJ.shift(), JJ.d = eJ, JJ.e = ZJ, Ae ? Me(JJ, hJ.precision) : JJ
    }, xe.toDecimalPlaces = xe.todp = function(JJ, cJ) {
      var ZJ = this,
        FJ = ZJ.constructor;
      return ZJ = new FJ(ZJ), void 0 === JJ ? ZJ : (ve(JJ, 0, Xe), void 0 === cJ ? cJ = FJ.rounding : ve(cJ, 0, 8), Me(ZJ, JJ + Ve(ZJ) + 1, cJ))
    }, xe.toExponential = function(JJ, cJ) {
      var ZJ, FJ = this,
        UJ = FJ.constructor;
      return void 0 === JJ ? ZJ = we(FJ, !0) : (ve(JJ, 0, Xe), void 0 === cJ ? cJ = UJ.rounding : ve(cJ, 0, 8), ZJ = we(FJ = Me(new UJ(FJ), JJ + 1, cJ), !0, JJ + 1)), ZJ
    }, xe.toFixed = function(JJ, cJ) {
      var ZJ, FJ, UJ = this,
        eJ = UJ.constructor;
      return void 0 === JJ ? we(UJ) : (ve(JJ, 0, Xe), void 0 === cJ ? cJ = eJ.rounding : ve(cJ, 0, 8), ZJ = we((FJ = Me(new eJ(UJ), JJ + Ve(UJ) + 1, cJ)).abs(), !1, JJ + Ve(FJ) + 1), UJ.isneg() && !UJ.isZero() ? "-" + ZJ : ZJ)
    }, xe.toInteger = xe.toint = function() {
      var JJ = this,
        cJ = JJ.constructor;
      return Me(new cJ(JJ), Ve(JJ) + 1, cJ.rounding)
    }, xe.toNumber = function() {
      return +this
    }, xe.toPower = xe.pow = function(JJ) {
      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ = this,
        qJ = AJ.constructor,
        jJ = +(JJ = new qJ(JJ));
      if (!JJ.s) return new qJ(ee);
      if (!(AJ = new qJ(AJ)).s) {
        if (JJ.s < 1) throw Error(qe + "Infinity");
        return AJ
      }
      if (AJ.eq(ee)) return AJ;
      if (FJ = qJ.precision, JJ.eq(ee)) return Me(AJ, FJ);
      if (XJ = (cJ = JJ.e) >= (ZJ = JJ.d.length - 1), eJ = AJ.s, XJ) {
        if ((ZJ = jJ < 0 ? -jJ : jJ) <= Ge) {
          for (UJ = new qJ(ee), cJ = Math.ceil(FJ / 7 + 4), Ae = !1; ZJ % 2 && We((UJ = UJ.times(AJ)).d, cJ), 0 !== (ZJ = he(ZJ / 2));) We((AJ = AJ.times(AJ)).d, cJ);
          return Ae = !0, JJ.s < 0 ? new qJ(ee).div(UJ) : Me(UJ, FJ)
        }
      } else if (eJ < 0) throw Error(qe + "NaN");
      return eJ = eJ < 0 && 1 & JJ.d[Math.max(cJ, ZJ)] ? -1 : 1, AJ.s = 1, Ae = !1, UJ = JJ.times(Se(AJ, FJ + 12)), Ae = !0, (UJ = Ee(UJ)).s = eJ, UJ
    }, xe.toPrecision = function(JJ, cJ) {
      var ZJ, FJ, UJ = this,
        eJ = UJ.constructor;
      return void 0 === JJ ? FJ = we(UJ, (ZJ = Ve(UJ)) <= eJ.toExpNeg || ZJ >= eJ.toExpPos) : (ve(JJ, 1, Xe), void 0 === cJ ? cJ = eJ.rounding : ve(cJ, 0, 8), FJ = we(UJ = Me(new eJ(UJ), JJ, cJ), JJ <= (ZJ = Ve(UJ)) || ZJ <= eJ.toExpNeg, JJ)), FJ
    }, xe.toSignificantDigits = xe.tosd = function(JJ, cJ) {
      var ZJ = this.constructor;
      return void 0 === JJ ? (JJ = ZJ.precision, cJ = ZJ.rounding) : (ve(JJ, 1, Xe), void 0 === cJ ? cJ = ZJ.rounding : ve(cJ, 0, 8)), Me(new ZJ(this), JJ, cJ)
    }, xe.toString = xe.valueOf = xe.val = xe.toJSON = xe[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var JJ = this,
        cJ = Ve(JJ),
        ZJ = JJ.constructor;
      return we(JJ, cJ <= ZJ.toExpNeg || cJ >= ZJ.toExpPos)
    };
    var Qe = function() {
      function JJ(JJ, cJ) {
        var ZJ, FJ = 0,
          UJ = JJ.length;
        for (JJ = JJ.slice(); UJ--;) ZJ = JJ[UJ] * cJ + FJ, JJ[UJ] = ZJ % ne | 0, FJ = ZJ / ne | 0;
        return FJ && JJ.unshift(FJ), JJ
      }

      function cJ(JJ, cJ, ZJ, FJ) {
        var UJ, eJ;
        if (ZJ != FJ) eJ = ZJ > FJ ? 1 : -1;
        else
          for (UJ = eJ = 0; UJ < ZJ; UJ++)
            if (JJ[UJ] != cJ[UJ]) {
              eJ = JJ[UJ] > cJ[UJ] ? 1 : -1;
              break
            } return eJ
      }

      function ZJ(JJ, cJ, ZJ) {
        for (var FJ = 0; ZJ--;) JJ[ZJ] -= FJ, FJ = JJ[ZJ] < cJ[ZJ] ? 1 : 0, JJ[ZJ] = FJ * ne + JJ[ZJ] - cJ[ZJ];
        for (; !JJ[0] && JJ.length > 1;) JJ.shift()
      }
      return function(FJ, UJ, eJ, XJ) {
        var AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ = FJ.constructor,
          SJ = FJ.s == UJ.s ? 1 : -1,
          IJ = FJ.d,
          MJ = UJ.d;
        if (!FJ.s) return new yJ(FJ);
        if (!UJ.s) throw Error(qe + "Division by zero");
        for (qJ = FJ.e - UJ.e, VJ = MJ.length, QJ = IJ.length, nJ = (sJ = new yJ(SJ)).d = [], jJ = 0; MJ[jJ] == (IJ[jJ] || 0);) ++jJ;
        if (MJ[jJ] > (IJ[jJ] || 0) && --qJ, (rJ = null == eJ ? eJ = yJ.precision : XJ ? eJ + (Ve(FJ) - Ve(UJ)) + 1 : eJ) < 0) return new yJ(0);
        if (rJ = rJ / 7 + 2 | 0, jJ = 0, 1 == VJ)
          for (YJ = 0, MJ = MJ[0], rJ++;
            (jJ < QJ || YJ) && rJ--; jJ++) vJ = YJ * ne + (IJ[jJ] || 0), nJ[jJ] = vJ / MJ | 0, YJ = vJ % MJ | 0;
        else {
          for ((YJ = ne / (MJ[0] + 1) | 0) > 1 && (MJ = JJ(MJ, YJ), IJ = JJ(IJ, YJ), VJ = MJ.length, QJ = IJ.length), mJ = VJ, fJ = (GJ = IJ.slice(0, VJ)).length; fJ < VJ;) GJ[fJ++] = 0;
          (KJ = MJ.slice()).unshift(0), EJ = MJ[0], MJ[1] >= ne / 2 && ++EJ;
          do {
            YJ = 0, (AJ = cJ(MJ, GJ, VJ, fJ)) < 0 ? (xJ = GJ[0], VJ != fJ && (xJ = xJ * ne + (GJ[1] || 0)), (YJ = xJ / EJ | 0) > 1 ? (YJ >= ne && (YJ = ne - 1), 1 == (AJ = cJ(hJ = JJ(MJ, YJ), GJ, DJ = hJ.length, fJ = GJ.length)) && (YJ--, ZJ(hJ, VJ < DJ ? KJ : MJ, DJ))) : (0 == YJ && (AJ = YJ = 1), hJ = MJ.slice()), (DJ = hJ.length) < fJ && hJ.unshift(0), ZJ(GJ, hJ, fJ), -1 == AJ && (AJ = cJ(MJ, GJ, VJ, fJ = GJ.length)) < 1 && (YJ++, ZJ(GJ, VJ < fJ ? KJ : MJ, fJ)), fJ = GJ.length) : 0 === AJ && (YJ++, GJ = [0]), nJ[jJ++] = YJ, AJ && GJ[0] ? GJ[fJ++] = IJ[mJ] || 0 : (GJ = [IJ[mJ]], fJ = 1)
          } while ((mJ++ < QJ || void 0 !== GJ[0]) && rJ--)
        }
        return nJ[0] || nJ.shift(), sJ.e = qJ, Me(sJ, XJ ? eJ + Ve(sJ) + 1 : eJ)
      }
    }();

    function Ee(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ, AJ = 0,
        qJ = 0,
        jJ = JJ.constructor,
        YJ = jJ.precision;
      if (Ve(JJ) > 16) throw Error(Ye + Ve(JJ));
      if (!JJ.s) return new jJ(ee);
      for (null == cJ ? (Ae = !1, XJ = YJ) : XJ = cJ, eJ = new jJ(.03125); JJ.abs().gte(.1);) JJ = JJ.times(eJ), qJ += 5;
      for (XJ += Math.log(De(2, qJ)) / Math.LN10 * 2 + 5 | 0, ZJ = FJ = UJ = new jJ(ee), jJ.precision = XJ;;) {
        if (FJ = Me(FJ.times(JJ), XJ), ZJ = ZJ.times(++AJ), me((eJ = UJ.plus(Qe(FJ, ZJ, XJ))).d).slice(0, XJ) === me(UJ.d).slice(0, XJ)) {
          for (; qJ--;) UJ = Me(UJ.times(UJ), XJ);
          return jJ.precision = YJ, null == cJ ? (Ae = !0, Me(UJ, YJ)) : UJ
        }
        UJ = eJ
      }
    }

    function Ve(JJ) {
      for (var cJ = 7 * JJ.e, ZJ = JJ.d[0]; ZJ >= 10; ZJ /= 10) cJ++;
      return cJ
    }

    function Ke(JJ, cJ, ZJ) {
      if (cJ > JJ.LN10.sd()) throw Ae = !0, ZJ && (JJ.precision = ZJ), Error(qe + "LN10 precision limit exceeded");
      return Me(new JJ(JJ.LN10), cJ)
    }

    function ye(JJ) {
      for (var cJ = ""; JJ--;) cJ += "0";
      return cJ
    }

    function Se(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ = 1,
        DJ = JJ,
        sJ = DJ.d,
        nJ = DJ.constructor,
        GJ = nJ.precision;
      if (DJ.s < 1) throw Error(qe + (DJ.s ? "NaN" : "-Infinity"));
      if (DJ.eq(ee)) return new nJ(0);
      if (null == cJ ? (Ae = !1, jJ = GJ) : jJ = cJ, DJ.eq(10)) return null == cJ && (Ae = !0), Ke(nJ, jJ);
      if (jJ += 10, nJ.precision = jJ, FJ = (ZJ = me(sJ)).charAt(0), eJ = Ve(DJ), !(Math.abs(eJ) < 15e14)) return qJ = Ke(nJ, jJ + 2, GJ).times(eJ + ""), DJ = Se(new nJ(FJ + "." + ZJ.slice(1)), jJ - 10).plus(qJ), nJ.precision = GJ, null == cJ ? (Ae = !0, Me(DJ, GJ)) : DJ;
      for (; FJ < 7 && 1 != FJ || 1 == FJ && ZJ.charAt(1) > 3;) FJ = (ZJ = me((DJ = DJ.times(JJ)).d)).charAt(0), hJ++;
      for (eJ = Ve(DJ), FJ > 1 ? (DJ = new nJ("0." + ZJ), eJ++) : DJ = new nJ(FJ + "." + ZJ.slice(1)), AJ = XJ = DJ = Qe(DJ.minus(ee), DJ.plus(ee), jJ), YJ = Me(DJ.times(DJ), jJ), UJ = 3;;) {
        if (XJ = Me(XJ.times(YJ), jJ), me((qJ = AJ.plus(Qe(XJ, new nJ(UJ), jJ))).d).slice(0, jJ) === me(AJ.d).slice(0, jJ)) return AJ = AJ.times(2), 0 !== eJ && (AJ = AJ.plus(Ke(nJ, jJ + 2, GJ).times(eJ + ""))), AJ = Qe(AJ, new nJ(hJ), jJ), nJ.precision = GJ, null == cJ ? (Ae = !0, Me(AJ, GJ)) : AJ;
        AJ = qJ, UJ += 2
      }
    }

    function Ie(JJ, cJ) {
      var ZJ, FJ, UJ;
      for ((ZJ = cJ.indexOf(".")) > -1 && (cJ = cJ.replace(".", "")), (FJ = cJ.search(/e/i)) > 0 ? (ZJ < 0 && (ZJ = FJ), ZJ += +cJ.slice(FJ + 1), cJ = cJ.substring(0, FJ)) : ZJ < 0 && (ZJ = cJ.length), FJ = 0; 48 === cJ.charCodeAt(FJ);) ++FJ;
      for (UJ = cJ.length; 48 === cJ.charCodeAt(UJ - 1);) --UJ;
      if (cJ = cJ.slice(FJ, UJ)) {
        if (UJ -= FJ, ZJ = ZJ - FJ - 1, JJ.e = he(ZJ / 7), JJ.d = [], FJ = (ZJ + 1) % 7, ZJ < 0 && (FJ += 7), FJ < UJ) {
          for (FJ && JJ.d.push(+cJ.slice(0, FJ)), UJ -= 7; FJ < UJ;) JJ.d.push(+cJ.slice(FJ, FJ += 7));
          FJ = 7 - (cJ = cJ.slice(FJ)).length
        } else FJ -= UJ;
        for (; FJ--;) cJ += "0";
        if (JJ.d.push(+cJ), Ae && (JJ.e > fe || JJ.e < -fe)) throw Error(Ye + ZJ)
      } else JJ.s = 0, JJ.e = 0, JJ.d = [0];
      return JJ
    }

    function Me(JJ, cJ, ZJ) {
      var FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ = JJ.d;
      for (XJ = 1, eJ = hJ[0]; eJ >= 10; eJ /= 10) XJ++;
      if ((FJ = cJ - XJ) < 0) FJ += 7, UJ = cJ, jJ = hJ[YJ = 0];
      else {
        if ((YJ = Math.ceil((FJ + 1) / 7)) >= (eJ = hJ.length)) return JJ;
        for (jJ = eJ = hJ[YJ], XJ = 1; eJ >= 10; eJ /= 10) XJ++;
        UJ = (FJ %= 7) - 7 + XJ
      }
      if (void 0 !== ZJ && (AJ = jJ / (eJ = De(10, XJ - UJ - 1)) % 10 | 0, qJ = cJ < 0 || void 0 !== hJ[YJ + 1] || jJ % eJ, qJ = ZJ < 4 ? (AJ || qJ) && (0 == ZJ || ZJ == (JJ.s < 0 ? 3 : 2)) : AJ > 5 || 5 == AJ && (4 == ZJ || qJ || 6 == ZJ && (FJ > 0 ? UJ > 0 ? jJ / De(10, XJ - UJ) : 0 : hJ[YJ - 1]) % 10 & 1 || ZJ == (JJ.s < 0 ? 8 : 7))), cJ < 1 || !hJ[0]) return qJ ? (eJ = Ve(JJ), hJ.length = 1, cJ = cJ - eJ - 1, hJ[0] = De(10, (7 - cJ % 7) % 7), JJ.e = he(-cJ / 7) || 0) : (hJ.length = 1, hJ[0] = JJ.e = JJ.s = 0), JJ;
      if (0 == FJ ? (hJ.length = YJ, eJ = 1, YJ--) : (hJ.length = YJ + 1, eJ = De(10, 7 - FJ), hJ[YJ] = UJ > 0 ? (jJ / De(10, XJ - UJ) % De(10, UJ) | 0) * eJ : 0), qJ)
        for (;;) {
          if (0 == YJ) {
            (hJ[0] += eJ) == ne && (hJ[0] = 1, ++JJ.e);
            break
          }
          if (hJ[YJ] += eJ, hJ[YJ] != ne) break;
          hJ[YJ--] = 0, eJ = 1
        }
      for (FJ = hJ.length; 0 === hJ[--FJ];) hJ.pop();
      if (Ae && (JJ.e > fe || JJ.e < -fe)) throw Error(Ye + Ve(JJ));
      return JJ
    }

    function be(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ = JJ.constructor,
        sJ = DJ.precision;
      if (!JJ.s || !cJ.s) return cJ.s ? cJ.s = -cJ.s : cJ = new DJ(JJ), Ae ? Me(cJ, sJ) : cJ;
      if (qJ = JJ.d, hJ = cJ.d, FJ = cJ.e, jJ = JJ.e, qJ = qJ.slice(), XJ = jJ - FJ) {
        for ((YJ = XJ < 0) ? (ZJ = qJ, XJ = -XJ, AJ = hJ.length) : (ZJ = hJ, FJ = jJ, AJ = qJ.length), XJ > (UJ = Math.max(Math.ceil(sJ / 7), AJ) + 2) && (XJ = UJ, ZJ.length = 1), ZJ.reverse(), UJ = XJ; UJ--;) ZJ.push(0);
        ZJ.reverse()
      } else {
        for ((YJ = (UJ = qJ.length) < (AJ = hJ.length)) && (AJ = UJ), UJ = 0; UJ < AJ; UJ++)
          if (qJ[UJ] != hJ[UJ]) {
            YJ = qJ[UJ] < hJ[UJ];
            break
          } XJ = 0
      }
      for (YJ && (ZJ = qJ, qJ = hJ, hJ = ZJ, cJ.s = -cJ.s), AJ = qJ.length, UJ = hJ.length - AJ; UJ > 0; --UJ) qJ[AJ++] = 0;
      for (UJ = hJ.length; UJ > XJ;) {
        if (qJ[--UJ] < hJ[UJ]) {
          for (eJ = UJ; eJ && 0 === qJ[--eJ];) qJ[eJ] = ne - 1;
          --qJ[eJ], qJ[UJ] += ne
        }
        qJ[UJ] -= hJ[UJ]
      }
      for (; 0 === qJ[--AJ];) qJ.pop();
      for (; 0 === qJ[0]; qJ.shift()) --FJ;
      return qJ[0] ? (cJ.d = qJ, cJ.e = FJ, Ae ? Me(cJ, sJ) : cJ) : new DJ(0)
    }

    function we(JJ, cJ, ZJ) {
      var FJ, UJ = Ve(JJ),
        eJ = me(JJ.d),
        XJ = eJ.length;
      return cJ ? (ZJ && (FJ = ZJ - XJ) > 0 ? eJ = eJ.charAt(0) + "." + eJ.slice(1) + ye(FJ) : XJ > 1 && (eJ = eJ.charAt(0) + "." + eJ.slice(1)), eJ = eJ + (UJ < 0 ? "e" : "e+") + UJ) : UJ < 0 ? (eJ = "0." + ye(-UJ - 1) + eJ, ZJ && (FJ = ZJ - XJ) > 0 && (eJ += ye(FJ))) : UJ >= XJ ? (eJ += ye(UJ + 1 - XJ), ZJ && (FJ = ZJ - UJ - 1) > 0 && (eJ = eJ + "." + ye(FJ))) : ((FJ = UJ + 1) < XJ && (eJ = eJ.slice(0, FJ) + "." + eJ.slice(FJ)), ZJ && (FJ = ZJ - XJ) > 0 && (UJ + 1 === XJ && (eJ += "."), eJ += ye(FJ))), JJ.s < 0 ? "-" + eJ : eJ
    }

    function We(JJ, cJ) {
      if (JJ.length > cJ) return JJ.length = cJ, !0
    }

    function ge(JJ) {
      if (!JJ || "object" !== typeof JJ) throw Error(qe + "Object expected");
      var cJ, ZJ, FJ, UJ = ["precision", 1, Xe, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (cJ = 0; cJ < UJ.length; cJ += 3)
        if (void 0 !== (FJ = JJ[ZJ = UJ[cJ]])) {
          if (!(he(FJ) === FJ && FJ >= UJ[cJ + 1] && FJ <= UJ[cJ + 2])) throw Error(je + ZJ + ": " + FJ);
          this[ZJ] = FJ
        } if (void 0 !== (FJ = JJ[ZJ = "LN10"])) {
        if (FJ != Math.LN10) throw Error(je + ZJ + ": " + FJ);
        this[ZJ] = new this(FJ)
      }
      return this
    }
    var He = function JJ(cJ) {
      var ZJ, FJ, UJ;

      function eJ(JJ) {
        var cJ = this;
        if (!(cJ instanceof eJ)) return new eJ(JJ);
        if (cJ.constructor = eJ, JJ instanceof eJ) return cJ.s = JJ.s, cJ.e = JJ.e, void(cJ.d = (JJ = JJ.d) ? JJ.slice() : JJ);
        if ("number" === typeof JJ) {
          if (0 * JJ !== 0) throw Error(je + JJ);
          if (JJ > 0) cJ.s = 1;
          else {
            if (!(JJ < 0)) return cJ.s = 0, cJ.e = 0, void(cJ.d = [0]);
            JJ = -JJ, cJ.s = -1
          }
          return JJ === ~~JJ && JJ < 1e7 ? (cJ.e = 0, void(cJ.d = [JJ])) : Ie(cJ, JJ.toString())
        }
        if ("string" !== typeof JJ) throw Error(je + JJ);
        if (45 === JJ.charCodeAt(0) ? (JJ = JJ.slice(1), cJ.s = -1) : cJ.s = 1, !se.test(JJ)) throw Error(je + JJ);
        Ie(cJ, JJ)
      }
      if (eJ.prototype = xe, eJ.ROUND_UP = 0, eJ.ROUND_DOWN = 1, eJ.ROUND_CEIL = 2, eJ.ROUND_FLOOR = 3, eJ.ROUND_HALF_UP = 4, eJ.ROUND_HALF_DOWN = 5, eJ.ROUND_HALF_EVEN = 6, eJ.ROUND_HALF_CEIL = 7, eJ.ROUND_HALF_FLOOR = 8, eJ.clone = JJ, eJ.config = eJ.set = ge, void 0 === cJ && (cJ = {}), cJ)
        for (UJ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ZJ = 0; ZJ < UJ.length;) cJ.hasOwnProperty(FJ = UJ[ZJ++]) || (cJ[FJ] = this[FJ]);
      return eJ.config(cJ), eJ
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    ee = new He(1);
    var Pe;
    ! function(JJ) {
      JJ.AED = "aed", JJ.AFN = "afn", JJ.ALL = "all", JJ.AMD = "amd", JJ.ANG = "ang", JJ.AOA = "aoa", JJ.ARS = "ars", JJ.AUD = "aud", JJ.AWG = "awg", JJ.AZN = "azn", JJ.BAM = "bam", JJ.BBD = "bbd", JJ.BDT = "bdt", JJ.BGN = "bgn", JJ.BHD = "bhd", JJ.BIF = "bif", JJ.BMD = "bmd", JJ.BND = "bnd", JJ.BOB = "bob", JJ.BOV = "bov", JJ.BRL = "brl", JJ.BSD = "bsd", JJ.BTN = "btn", JJ.BWP = "bwp", JJ.BYN = "byn", JJ.BYR = "byr", JJ.BZD = "bzd", JJ.CAD = "cad", JJ.CDF = "cdf", JJ.CHE = "che", JJ.CHF = "chf", JJ.CHW = "chw", JJ.CLF = "clf", JJ.CLP = "clp", JJ.CNY = "cny", JJ.COP = "cop", JJ.COU = "cou", JJ.CRC = "crc", JJ.CUC = "cuc", JJ.CUP = "cup", JJ.CVE = "cve", JJ.CZK = "czk", JJ.DJF = "djf", JJ.DKK = "dkk", JJ.DOP = "dop", JJ.DZD = "dzd", JJ.EGP = "egp", JJ.ERN = "ern", JJ.ETB = "etb", JJ.EUR = "eur", JJ.FJD = "fjd", JJ.FKP = "fkp", JJ.GBP = "gbp", JJ.GEL = "gel", JJ.GHS = "ghs", JJ.GIP = "gip", JJ.GMD = "gmd", JJ.GNF = "gnf", JJ.GTQ = "gtq", JJ.GYD = "gyd", JJ.HKD = "hkd", JJ.HNL = "hnl", JJ.HRK = "hrk", JJ.HTG = "htg", JJ.HUF = "huf", JJ.IDR = "idr", JJ.ILS = "ils", JJ.INR = "inr", JJ.IQD = "iqd", JJ.IRR = "irr", JJ.ISK = "isk", JJ.JMD = "jmd", JJ.JOD = "jod", JJ.JPY = "jpy", JJ.KES = "kes", JJ.KGS = "kgs", JJ.KHR = "khr", JJ.KMF = "kmf", JJ.KPW = "kpw", JJ.KRW = "krw", JJ.KWD = "kwd", JJ.KYD = "kyd", JJ.KZT = "kzt", JJ.LAK = "lak", JJ.LBP = "lbp", JJ.LKR = "lkr", JJ.LRD = "lrd", JJ.LSL = "lsl", JJ.LTL = "ltl", JJ.LVL = "lvl", JJ.LYD = "lyd", JJ.MAD = "mad", JJ.MDL = "mdl", JJ.MGA = "mga", JJ.MKD = "mkd", JJ.MMK = "mmk", JJ.MNT = "mnt", JJ.MOP = "mop", JJ.MRO = "mro", JJ.MUR = "mur", JJ.MVR = "mvr", JJ.MWK = "mwk", JJ.MXN = "mxn", JJ.MXV = "mxv", JJ.MYR = "myr", JJ.MZN = "mzn", JJ.NAD = "nad", JJ.NGN = "ngn", JJ.NIO = "nio", JJ.NOK = "nok", JJ.NPR = "npr", JJ.NZD = "nzd", JJ.OMR = "omr", JJ.PAB = "pab", JJ.PEN = "pen", JJ.PGK = "pgk", JJ.PHP = "php", JJ.PKR = "pkr", JJ.PLN = "pln", JJ.PYG = "pyg", JJ.QAR = "qar", JJ.RON = "ron", JJ.RSD = "rsd", JJ.RUB = "rub", JJ.RWF = "rwf", JJ.SAR = "sar", JJ.SBD = "sbd", JJ.SCR = "scr", JJ.SDG = "sdg", JJ.SEK = "sek", JJ.SGD = "sgd", JJ.SHP = "shp", JJ.SLL = "sll", JJ.SOS = "sos", JJ.SRD = "srd", JJ.SSP = "ssp", JJ.STD = "std", JJ.SVC = "svc", JJ.SYP = "syp", JJ.SZL = "szl", JJ.THB = "thb", JJ.TJS = "tjs", JJ.TMT = "tmt", JJ.TND = "tnd", JJ.TOP = "top", JJ.TRY = "try", JJ.TTD = "ttd", JJ.TWD = "twd", JJ.TZS = "tzs", JJ.UAH = "uah", JJ.UGX = "ugx", JJ.USD = "usd", JJ.USN = "usn", JJ.USS = "uss", JJ.UYI = "uyi", JJ.UYU = "uyu", JJ.UZS = "uzs", JJ.VEF = "vef", JJ.VND = "vnd", JJ.VUV = "vuv", JJ.WST = "wst", JJ.XAF = "xaf", JJ.XAG = "xag", JJ.XAU = "xau", JJ.XBA = "xba", JJ.XBB = "xbb", JJ.XBC = "xbc", JJ.XBD = "xbd", JJ.XCD = "xcd", JJ.XDR = "xdr", JJ.XFU = "xfu", JJ.XOF = "xof", JJ.XPD = "xpd", JJ.XPF = "xpf", JJ.XPT = "xpt", JJ.XSU = "xsu", JJ.XTS = "xts", JJ.XUA = "xua", JJ.YER = "yer", JJ.ZAR = "zar", JJ.ZMW = "zmw", JJ.ZWL = "zwl"
    }(Pe || (Pe = {}));
    Pe.AED, Pe.AFN, Pe.ALL, Pe.AMD, Pe.ANG, Pe.AOA, Pe.ARS, Pe.AUD, Pe.AWG, Pe.AZN, Pe.BAM, Pe.BBD, Pe.BDT, Pe.BGN, Pe.BHD, Pe.BIF, Pe.BMD, Pe.BND, Pe.BOB, Pe.BOV, Pe.BRL, Pe.BSD, Pe.BTN, Pe.BWP, Pe.BYR, Pe.BYN, Pe.BZD, Pe.CAD, Pe.CDF, Pe.CHE, Pe.CHF, Pe.CHW, Pe.CLF, Pe.CLP, Pe.CNY, Pe.COP, Pe.COU, Pe.CRC, Pe.CUC, Pe.CUP, Pe.CVE, Pe.CZK, Pe.DJF, Pe.DKK, Pe.DOP, Pe.DZD, Pe.EGP, Pe.ERN, Pe.ETB, Pe.EUR, Pe.FJD, Pe.FKP, Pe.GBP, Pe.GEL, Pe.GHS, Pe.GIP, Pe.GMD, Pe.GNF, Pe.GTQ, Pe.GYD, Pe.HKD, Pe.HNL, Pe.HRK, Pe.HTG, Pe.HUF, Pe.IDR, Pe.ILS, Pe.INR, Pe.IQD, Pe.IRR, Pe.ISK, Pe.JMD, Pe.JOD, Pe.JPY, Pe.KES, Pe.KGS, Pe.KHR, Pe.KMF, Pe.KPW, Pe.KRW, Pe.KWD, Pe.KYD, Pe.KZT, Pe.LAK, Pe.LBP, Pe.LKR, Pe.LRD, Pe.LSL, Pe.LTL, Pe.LVL, Pe.LYD, Pe.MAD, Pe.MDL, Pe.MGA, Pe.MKD, Pe.MMK, Pe.MNT, Pe.MOP, Pe.MRO, Pe.MUR, Pe.MVR, Pe.MWK, Pe.MXN, Pe.MXV, Pe.MYR, Pe.MZN, Pe.NAD, Pe.NGN, Pe.NIO, Pe.NOK, Pe.NPR, Pe.NZD, Pe.OMR, Pe.PAB, Pe.PEN, Pe.PGK, Pe.PHP, Pe.PKR, Pe.PLN, Pe.PYG, Pe.QAR, Pe.RON, Pe.RSD, Pe.RUB, Pe.RWF, Pe.SAR, Pe.SBD, Pe.SCR, Pe.SDG, Pe.SEK, Pe.SGD, Pe.SHP, Pe.SLL, Pe.SOS, Pe.SRD, Pe.SSP, Pe.STD, Pe.SVC, Pe.SYP, Pe.SZL, Pe.THB, Pe.TJS, Pe.TMT, Pe.TND, Pe.TOP, Pe.TRY, Pe.TTD, Pe.TWD, Pe.TZS, Pe.UAH, Pe.UGX, Pe.USD, Pe.USN, Pe.USS, Pe.UYI, Pe.UYU, Pe.UZS, Pe.VEF, Pe.VND, Pe.VUV, Pe.WST, Pe.XAF, Pe.XAG, Pe.XAU, Pe.XBA, Pe.XBB, Pe.XBC, Pe.XBD, Pe.XCD, Pe.XDR, Pe.XFU, Pe.XOF, Pe.XPD, Pe.XPF, Pe.XPT, Pe.XSU, Pe.XTS, Pe.XUA, Pe.YER, Pe.ZAR, Pe.ZMW, Pe.ZWL;
    var ke = {
      exports: {}
    };
    ! function(JJ, cJ) {
      var ZJ = "__lodash_hash_undefined__",
        FJ = 9007199254740991,
        eJ = "[object Arguments]",
        XJ = "[object Array]",
        AJ = "[object Boolean]",
        qJ = "[object Date]",
        jJ = "[object Error]",
        YJ = "[object Function]",
        hJ = "[object Map]",
        DJ = "[object Number]",
        sJ = "[object Object]",
        nJ = "[object Promise]",
        GJ = "[object RegExp]",
        fJ = "[object Set]",
        xJ = "[object String]",
        rJ = "[object Symbol]",
        vJ = "[object WeakMap]",
        mJ = "[object ArrayBuffer]",
        QJ = "[object DataView]",
        EJ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        VJ = /^\w*$/,
        KJ = /^\./,
        yJ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        SJ = /\\(\\)?/g,
        IJ = /^\[object .+?Constructor\]$/,
        MJ = /^(?:0|[1-9]\d*)$/,
        bJ = {};
      bJ["[object Float32Array]"] = bJ["[object Float64Array]"] = bJ["[object Int8Array]"] = bJ["[object Int16Array]"] = bJ["[object Int32Array]"] = bJ["[object Uint8Array]"] = bJ["[object Uint8ClampedArray]"] = bJ["[object Uint16Array]"] = bJ["[object Uint32Array]"] = !0, bJ[eJ] = bJ[XJ] = bJ[mJ] = bJ[AJ] = bJ[QJ] = bJ[qJ] = bJ[jJ] = bJ[YJ] = bJ[hJ] = bJ[DJ] = bJ[sJ] = bJ[GJ] = bJ[fJ] = bJ[xJ] = bJ[vJ] = !1;
      var wJ = "object" == typeof UJ && UJ && UJ.Object === Object && UJ,
        WJ = "object" == typeof self && self && self.Object === Object && self,
        gJ = wJ || WJ || Function("return this")(),
        HJ = cJ && !cJ.nodeType && cJ,
        PJ = HJ && JJ && !JJ.nodeType && JJ,
        kJ = PJ && PJ.exports === HJ && wJ.process,
        pJ = function() {
          try {
            return kJ && kJ.binding("util")
          } catch (JJ) {}
        }(),
        dJ = pJ && pJ.isTypedArray;

      function zJ(JJ, cJ) {
        for (var ZJ = -1, FJ = JJ ? JJ.length : 0; ++ZJ < FJ && !1 !== cJ(JJ[ZJ], ZJ, JJ););
        return JJ
      }

      function NJ(JJ, cJ) {
        for (var ZJ = -1, FJ = JJ ? JJ.length : 0; ++ZJ < FJ;)
          if (cJ(JJ[ZJ], ZJ, JJ)) return !0;
        return !1
      }

      function OJ(JJ) {
        var cJ = !1;
        if (null != JJ && "function" != typeof JJ.toString) try {
          cJ = !!(JJ + "")
        } catch (ZJ) {}
        return cJ
      }

      function TJ(JJ) {
        var cJ = -1,
          ZJ = Array(JJ.size);
        return JJ.forEach((function(JJ, FJ) {
          ZJ[++cJ] = [FJ, JJ]
        })), ZJ
      }

      function CJ(JJ, cJ) {
        return function(ZJ) {
          return JJ(cJ(ZJ))
        }
      }

      function uJ(JJ) {
        var cJ = -1,
          ZJ = Array(JJ.size);
        return JJ.forEach((function(JJ) {
          ZJ[++cJ] = JJ
        })), ZJ
      }
      var iJ = Array.prototype,
        RJ = Function.prototype,
        LJ = Object.prototype,
        aJ = gJ["__core-js_shared__"],
        BJ = function() {
          var JJ = /[^.]+$/.exec(aJ && aJ.keys && aJ.keys.IE_PROTO || "");
          return JJ ? "Symbol(src)_1." + JJ : ""
        }(),
        tJ = RJ.toString,
        oJ = LJ.hasOwnProperty,
        lJ = LJ.toString,
        Jc = RegExp("^" + tJ.call(oJ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        cc = gJ.Symbol,
        Zc = gJ.Uint8Array,
        Fc = CJ(Object.getPrototypeOf, Object),
        Uc = Object.create,
        ec = LJ.propertyIsEnumerable,
        Xc = iJ.splice,
        Ac = CJ(Object.keys, Object),
        qc = Tc(gJ, "DataView"),
        jc = Tc(gJ, "Map"),
        Yc = Tc(gJ, "Promise"),
        hc = Tc(gJ, "Set"),
        Dc = Tc(gJ, "WeakMap"),
        sc = Tc(Object, "create"),
        nc = tc(qc),
        Gc = tc(jc),
        fc = tc(Yc),
        xc = tc(hc),
        rc = tc(Dc),
        vc = cc ? cc.prototype : void 0,
        mc = vc ? vc.valueOf : void 0,
        Qc = vc ? vc.toString : void 0;

      function Ec(JJ) {
        var cJ = -1,
          ZJ = JJ ? JJ.length : 0;
        for (this.clear(); ++cJ < ZJ;) {
          var FJ = JJ[cJ];
          this.set(FJ[0], FJ[1])
        }
      }

      function Vc(JJ) {
        var cJ = -1,
          ZJ = JJ ? JJ.length : 0;
        for (this.clear(); ++cJ < ZJ;) {
          var FJ = JJ[cJ];
          this.set(FJ[0], FJ[1])
        }
      }

      function Kc(JJ) {
        var cJ = -1,
          ZJ = JJ ? JJ.length : 0;
        for (this.clear(); ++cJ < ZJ;) {
          var FJ = JJ[cJ];
          this.set(FJ[0], FJ[1])
        }
      }

      function yc(JJ) {
        var cJ = -1,
          ZJ = JJ ? JJ.length : 0;
        for (this.__data__ = new Kc; ++cJ < ZJ;) this.add(JJ[cJ])
      }

      function Sc(JJ) {
        this.__data__ = new Vc(JJ)
      }

      function Ic(JJ, cJ) {
        var ZJ = cZ(JJ) || JZ(JJ) ? function(JJ, cJ) {
            for (var ZJ = -1, FJ = Array(JJ); ++ZJ < JJ;) FJ[ZJ] = cJ(ZJ);
            return FJ
          }(JJ.length, String) : [],
          FJ = ZJ.length,
          UJ = !!FJ;
        for (var eJ in JJ) !cJ && !oJ.call(JJ, eJ) || UJ && ("length" == eJ || uc(eJ, FJ)) || ZJ.push(eJ);
        return ZJ
      }

      function Mc(JJ, cJ) {
        for (var ZJ = JJ.length; ZJ--;)
          if (lc(JJ[ZJ][0], cJ)) return ZJ;
        return -1
      }
      Ec.prototype.clear = function() {
        this.__data__ = sc ? sc(null) : {}
      }, Ec.prototype.delete = function(JJ) {
        return this.has(JJ) && delete this.__data__[JJ]
      }, Ec.prototype.get = function(JJ) {
        var cJ = this.__data__;
        if (sc) {
          var FJ = cJ[JJ];
          return FJ === ZJ ? void 0 : FJ
        }
        return oJ.call(cJ, JJ) ? cJ[JJ] : void 0
      }, Ec.prototype.has = function(JJ) {
        var cJ = this.__data__;
        return sc ? void 0 !== cJ[JJ] : oJ.call(cJ, JJ)
      }, Ec.prototype.set = function(JJ, cJ) {
        return this.__data__[JJ] = sc && void 0 === cJ ? ZJ : cJ, this
      }, Vc.prototype.clear = function() {
        this.__data__ = []
      }, Vc.prototype.delete = function(JJ) {
        var cJ = this.__data__,
          ZJ = Mc(cJ, JJ);
        return !(ZJ < 0) && (ZJ == cJ.length - 1 ? cJ.pop() : Xc.call(cJ, ZJ, 1), !0)
      }, Vc.prototype.get = function(JJ) {
        var cJ = this.__data__,
          ZJ = Mc(cJ, JJ);
        return ZJ < 0 ? void 0 : cJ[ZJ][1]
      }, Vc.prototype.has = function(JJ) {
        return Mc(this.__data__, JJ) > -1
      }, Vc.prototype.set = function(JJ, cJ) {
        var ZJ = this.__data__,
          FJ = Mc(ZJ, JJ);
        return FJ < 0 ? ZJ.push([JJ, cJ]) : ZJ[FJ][1] = cJ, this
      }, Kc.prototype.clear = function() {
        this.__data__ = {
          hash: new Ec,
          map: new(jc || Vc),
          string: new Ec
        }
      }, Kc.prototype.delete = function(JJ) {
        return Oc(this, JJ).delete(JJ)
      }, Kc.prototype.get = function(JJ) {
        return Oc(this, JJ).get(JJ)
      }, Kc.prototype.has = function(JJ) {
        return Oc(this, JJ).has(JJ)
      }, Kc.prototype.set = function(JJ, cJ) {
        return Oc(this, JJ).set(JJ, cJ), this
      }, yc.prototype.add = yc.prototype.push = function(JJ) {
        return this.__data__.set(JJ, ZJ), this
      }, yc.prototype.has = function(JJ) {
        return this.__data__.has(JJ)
      }, Sc.prototype.clear = function() {
        this.__data__ = new Vc
      }, Sc.prototype.delete = function(JJ) {
        return this.__data__.delete(JJ)
      }, Sc.prototype.get = function(JJ) {
        return this.__data__.get(JJ)
      }, Sc.prototype.has = function(JJ) {
        return this.__data__.has(JJ)
      }, Sc.prototype.set = function(JJ, cJ) {
        var ZJ = this.__data__;
        if (ZJ instanceof Vc) {
          var FJ = ZJ.__data__;
          if (!jc || FJ.length < 199) return FJ.push([JJ, cJ]), this;
          ZJ = this.__data__ = new Kc(FJ)
        }
        return ZJ.set(JJ, cJ), this
      };
      var bc, wc = function(JJ, cJ, ZJ) {
        for (var FJ = -1, UJ = Object(JJ), eJ = ZJ(JJ), XJ = eJ.length; XJ--;) {
          var AJ = eJ[bc ? XJ : ++FJ];
          if (!1 === cJ(UJ[AJ], AJ, UJ)) break
        }
        return JJ
      };

      function Wc(JJ, cJ) {
        return JJ && wc(JJ, cJ, YZ)
      }

      function gc(JJ, cJ) {
        for (var ZJ = 0, FJ = (cJ = ic(cJ, JJ) ? [cJ] : zc(cJ)).length; null != JJ && ZJ < FJ;) JJ = JJ[Bc(cJ[ZJ++])];
        return ZJ && ZJ == FJ ? JJ : void 0
      }

      function Hc(JJ, cJ) {
        return null != JJ && cJ in Object(JJ)
      }

      function Pc(JJ, cJ, ZJ, FJ, UJ) {
        return JJ === cJ || (null == JJ || null == cJ || !eZ(JJ) && !XZ(cJ) ? JJ !== JJ && cJ !== cJ : function(JJ, cJ, ZJ, FJ, UJ, YJ) {
          var nJ = cZ(JJ),
            vJ = cZ(cJ),
            EJ = XJ,
            VJ = XJ;
          nJ || (EJ = (EJ = Cc(JJ)) == eJ ? sJ : EJ);
          vJ || (VJ = (VJ = Cc(cJ)) == eJ ? sJ : VJ);
          var KJ = EJ == sJ && !OJ(JJ),
            yJ = VJ == sJ && !OJ(cJ),
            SJ = EJ == VJ;
          if (SJ && !KJ) return YJ || (YJ = new Sc), nJ || jZ(JJ) ? Nc(JJ, cJ, ZJ, FJ, UJ, YJ) : function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
            switch (ZJ) {
              case QJ:
                if (JJ.byteLength != cJ.byteLength || JJ.byteOffset != cJ.byteOffset) return !1;
                JJ = JJ.buffer, cJ = cJ.buffer;
              case mJ:
                return !(JJ.byteLength != cJ.byteLength || !FJ(new Zc(JJ), new Zc(cJ)));
              case AJ:
              case qJ:
              case DJ:
                return lc(+JJ, +cJ);
              case jJ:
                return JJ.name == cJ.name && JJ.message == cJ.message;
              case GJ:
              case xJ:
                return JJ == cJ + "";
              case hJ:
                var YJ = TJ;
              case fJ:
                var sJ = 2 & eJ;
                if (YJ || (YJ = uJ), JJ.size != cJ.size && !sJ) return !1;
                var nJ = XJ.get(JJ);
                if (nJ) return nJ == cJ;
                eJ |= 1, XJ.set(JJ, cJ);
                var vJ = Nc(YJ(JJ), YJ(cJ), FJ, UJ, eJ, XJ);
                return XJ.delete(JJ), vJ;
              case rJ:
                if (mc) return mc.call(JJ) == mc.call(cJ)
            }
            return !1
          }(JJ, cJ, EJ, ZJ, FJ, UJ, YJ);
          if (!(2 & UJ)) {
            var IJ = KJ && oJ.call(JJ, "__wrapped__"),
              MJ = yJ && oJ.call(cJ, "__wrapped__");
            if (IJ || MJ) {
              var bJ = IJ ? JJ.value() : JJ,
                wJ = MJ ? cJ.value() : cJ;
              return YJ || (YJ = new Sc), ZJ(bJ, wJ, FJ, UJ, YJ)
            }
          }
          if (!SJ) return !1;
          return YJ || (YJ = new Sc),
            function(JJ, cJ, ZJ, FJ, UJ, eJ) {
              var XJ = 2 & UJ,
                AJ = YZ(JJ),
                qJ = AJ.length,
                jJ = YZ(cJ),
                YJ = jJ.length;
              if (qJ != YJ && !XJ) return !1;
              var hJ = qJ;
              for (; hJ--;) {
                var DJ = AJ[hJ];
                if (!(XJ ? DJ in cJ : oJ.call(cJ, DJ))) return !1
              }
              var sJ = eJ.get(JJ);
              if (sJ && eJ.get(cJ)) return sJ == cJ;
              var nJ = !0;
              eJ.set(JJ, cJ), eJ.set(cJ, JJ);
              var GJ = XJ;
              for (; ++hJ < qJ;) {
                var fJ = JJ[DJ = AJ[hJ]],
                  xJ = cJ[DJ];
                if (FJ) var rJ = XJ ? FJ(xJ, fJ, DJ, cJ, JJ, eJ) : FJ(fJ, xJ, DJ, JJ, cJ, eJ);
                if (!(void 0 === rJ ? fJ === xJ || ZJ(fJ, xJ, FJ, UJ, eJ) : rJ)) {
                  nJ = !1;
                  break
                }
                GJ || (GJ = "constructor" == DJ)
              }
              if (nJ && !GJ) {
                var vJ = JJ.constructor,
                  mJ = cJ.constructor;
                vJ == mJ || !("constructor" in JJ) || !("constructor" in cJ) || "function" == typeof vJ && vJ instanceof vJ && "function" == typeof mJ && mJ instanceof mJ || (nJ = !1)
              }
              return eJ.delete(JJ), eJ.delete(cJ), nJ
            }(JJ, cJ, ZJ, FJ, UJ, YJ)
        }(JJ, cJ, Pc, ZJ, FJ, UJ))
      }

      function kc(JJ) {
        return !(!eZ(JJ) || (cJ = JJ, BJ && BJ in cJ)) && (FZ(JJ) || OJ(JJ) ? Jc : IJ).test(tc(JJ));
        var cJ
      }

      function pc(JJ) {
        return "function" == typeof JJ ? JJ : null == JJ ? hZ : "object" == typeof JJ ? cZ(JJ) ? function(JJ, cJ) {
          if (ic(JJ) && Rc(cJ)) return Lc(Bc(JJ), cJ);
          return function(ZJ) {
            var FJ = function(JJ, cJ, ZJ) {
              var FJ = null == JJ ? void 0 : gc(JJ, cJ);
              return void 0 === FJ ? ZJ : FJ
            }(ZJ, JJ);
            return void 0 === FJ && FJ === cJ ? function(JJ, cJ) {
              return null != JJ && function(JJ, cJ, ZJ) {
                cJ = ic(cJ, JJ) ? [cJ] : zc(cJ);
                var FJ, UJ = -1,
                  eJ = cJ.length;
                for (; ++UJ < eJ;) {
                  var XJ = Bc(cJ[UJ]);
                  if (!(FJ = null != JJ && ZJ(JJ, XJ))) break;
                  JJ = JJ[XJ]
                }
                if (FJ) return FJ;
                eJ = JJ ? JJ.length : 0;
                return !!eJ && UZ(eJ) && uc(XJ, eJ) && (cZ(JJ) || JZ(JJ))
              }(JJ, cJ, Hc)
            }(ZJ, JJ) : Pc(cJ, FJ, void 0, 3)
          }
        }(JJ[0], JJ[1]) : function(JJ) {
          var cJ = function(JJ) {
            var cJ = YZ(JJ),
              ZJ = cJ.length;
            for (; ZJ--;) {
              var FJ = cJ[ZJ],
                UJ = JJ[FJ];
              cJ[ZJ] = [FJ, UJ, Rc(UJ)]
            }
            return cJ
          }(JJ);
          if (1 == cJ.length && cJ[0][2]) return Lc(cJ[0][0], cJ[0][1]);
          return function(ZJ) {
            return ZJ === JJ || function(JJ, cJ, ZJ, FJ) {
              var UJ = ZJ.length,
                eJ = UJ,
                XJ = !FJ;
              if (null == JJ) return !eJ;
              for (JJ = Object(JJ); UJ--;) {
                var AJ = ZJ[UJ];
                if (XJ && AJ[2] ? AJ[1] !== JJ[AJ[0]] : !(AJ[0] in JJ)) return !1
              }
              for (; ++UJ < eJ;) {
                var qJ = (AJ = ZJ[UJ])[0],
                  jJ = JJ[qJ],
                  YJ = AJ[1];
                if (XJ && AJ[2]) {
                  if (void 0 === jJ && !(qJ in JJ)) return !1
                } else {
                  var hJ = new Sc;
                  if (FJ) var DJ = FJ(jJ, YJ, qJ, JJ, cJ, hJ);
                  if (!(void 0 === DJ ? Pc(YJ, jJ, FJ, 3, hJ) : DJ)) return !1
                }
              }
              return !0
            }(ZJ, JJ, cJ)
          }
        }(JJ) : function(JJ) {
          return ic(JJ) ? (cJ = Bc(JJ), function(JJ) {
            return null == JJ ? void 0 : JJ[cJ]
          }) : function(JJ) {
            return function(cJ) {
              return gc(cJ, JJ)
            }
          }(JJ);
          var cJ
        }(JJ)
      }

      function dc(JJ) {
        if (! function(JJ) {
            var cJ = JJ && JJ.constructor,
              ZJ = "function" == typeof cJ && cJ.prototype || LJ;
            return JJ === ZJ
          }(JJ)) return Ac(JJ);
        var cJ = [];
        for (var ZJ in Object(JJ)) oJ.call(JJ, ZJ) && "constructor" != ZJ && cJ.push(ZJ);
        return cJ
      }

      function zc(JJ) {
        return cZ(JJ) ? JJ : ac(JJ)
      }

      function Nc(JJ, cJ, ZJ, FJ, UJ, eJ) {
        var XJ = 2 & UJ,
          AJ = JJ.length,
          qJ = cJ.length;
        if (AJ != qJ && !(XJ && qJ > AJ)) return !1;
        var jJ = eJ.get(JJ);
        if (jJ && eJ.get(cJ)) return jJ == cJ;
        var YJ = -1,
          hJ = !0,
          DJ = 1 & UJ ? new yc : void 0;
        for (eJ.set(JJ, cJ), eJ.set(cJ, JJ); ++YJ < AJ;) {
          var sJ = JJ[YJ],
            nJ = cJ[YJ];
          if (FJ) var GJ = XJ ? FJ(nJ, sJ, YJ, cJ, JJ, eJ) : FJ(sJ, nJ, YJ, JJ, cJ, eJ);
          if (void 0 !== GJ) {
            if (GJ) continue;
            hJ = !1;
            break
          }
          if (DJ) {
            if (!NJ(cJ, (function(JJ, cJ) {
                if (!DJ.has(cJ) && (sJ === JJ || ZJ(sJ, JJ, FJ, UJ, eJ))) return DJ.add(cJ)
              }))) {
              hJ = !1;
              break
            }
          } else if (sJ !== nJ && !ZJ(sJ, nJ, FJ, UJ, eJ)) {
            hJ = !1;
            break
          }
        }
        return eJ.delete(JJ), eJ.delete(cJ), hJ
      }

      function Oc(JJ, cJ) {
        var ZJ = JJ.__data__;
        return function(JJ) {
          var cJ = typeof JJ;
          return "string" == cJ || "number" == cJ || "symbol" == cJ || "boolean" == cJ ? "__proto__" !== JJ : null === JJ
        }(cJ) ? ZJ["string" == typeof cJ ? "string" : "hash"] : ZJ.map
      }

      function Tc(JJ, cJ) {
        var ZJ = function(JJ, cJ) {
          return null == JJ ? void 0 : JJ[cJ]
        }(JJ, cJ);
        return kc(ZJ) ? ZJ : void 0
      }
      var Cc = function(JJ) {
        return lJ.call(JJ)
      };

      function uc(JJ, cJ) {
        return !!(cJ = null == cJ ? FJ : cJ) && ("number" == typeof JJ || MJ.test(JJ)) && JJ > -1 && JJ % 1 == 0 && JJ < cJ
      }

      function ic(JJ, cJ) {
        if (cZ(JJ)) return !1;
        var ZJ = typeof JJ;
        return !("number" != ZJ && "symbol" != ZJ && "boolean" != ZJ && null != JJ && !AZ(JJ)) || (VJ.test(JJ) || !EJ.test(JJ) || null != cJ && JJ in Object(cJ))
      }

      function Rc(JJ) {
        return JJ === JJ && !eZ(JJ)
      }

      function Lc(JJ, cJ) {
        return function(ZJ) {
          return null != ZJ && (ZJ[JJ] === cJ && (void 0 !== cJ || JJ in Object(ZJ)))
        }
      }(qc && Cc(new qc(new ArrayBuffer(1))) != QJ || jc && Cc(new jc) != hJ || Yc && Cc(Yc.resolve()) != nJ || hc && Cc(new hc) != fJ || Dc && Cc(new Dc) != vJ) && (Cc = function(JJ) {
        var cJ = lJ.call(JJ),
          ZJ = cJ == sJ ? JJ.constructor : void 0,
          FJ = ZJ ? tc(ZJ) : void 0;
        if (FJ) switch (FJ) {
          case nc:
            return QJ;
          case Gc:
            return hJ;
          case fc:
            return nJ;
          case xc:
            return fJ;
          case rc:
            return vJ
        }
        return cJ
      });
      var ac = oc((function(JJ) {
        var cJ;
        JJ = null == (cJ = JJ) ? "" : function(JJ) {
          if ("string" == typeof JJ) return JJ;
          if (AZ(JJ)) return Qc ? Qc.call(JJ) : "";
          var cJ = JJ + "";
          return "0" == cJ && 1 / JJ == -1 / 0 ? "-0" : cJ
        }(cJ);
        var ZJ = [];
        return KJ.test(JJ) && ZJ.push(""), JJ.replace(yJ, (function(JJ, cJ, FJ, UJ) {
          ZJ.push(FJ ? UJ.replace(SJ, "$1") : cJ || JJ)
        })), ZJ
      }));

      function Bc(JJ) {
        if ("string" == typeof JJ || AZ(JJ)) return JJ;
        var cJ = JJ + "";
        return "0" == cJ && 1 / JJ == -1 / 0 ? "-0" : cJ
      }

      function tc(JJ) {
        if (null != JJ) {
          try {
            return tJ.call(JJ)
          } catch (cJ) {}
          try {
            return JJ + ""
          } catch (cJ) {}
        }
        return ""
      }

      function oc(JJ, cJ) {
        if ("function" != typeof JJ || cJ && "function" != typeof cJ) throw new TypeError("Expected a function");
        var ZJ = function() {
          var FJ = arguments,
            UJ = cJ ? cJ.apply(this, FJ) : FJ[0],
            eJ = ZJ.cache;
          if (eJ.has(UJ)) return eJ.get(UJ);
          var XJ = JJ.apply(this, FJ);
          return ZJ.cache = eJ.set(UJ, XJ), XJ
        };
        return ZJ.cache = new(oc.Cache || Kc), ZJ
      }

      function lc(JJ, cJ) {
        return JJ === cJ || JJ !== JJ && cJ !== cJ
      }

      function JZ(JJ) {
        return function(JJ) {
          return XZ(JJ) && ZZ(JJ)
        }(JJ) && oJ.call(JJ, "callee") && (!ec.call(JJ, "callee") || lJ.call(JJ) == eJ)
      }
      oc.Cache = Kc;
      var cZ = Array.isArray;

      function ZZ(JJ) {
        return null != JJ && UZ(JJ.length) && !FZ(JJ)
      }

      function FZ(JJ) {
        var cJ = eZ(JJ) ? lJ.call(JJ) : "";
        return cJ == YJ || "[object GeneratorFunction]" == cJ
      }

      function UZ(JJ) {
        return "number" == typeof JJ && JJ > -1 && JJ % 1 == 0 && JJ <= FJ
      }

      function eZ(JJ) {
        var cJ = typeof JJ;
        return !!JJ && ("object" == cJ || "function" == cJ)
      }

      function XZ(JJ) {
        return !!JJ && "object" == typeof JJ
      }

      function AZ(JJ) {
        return "symbol" == typeof JJ || XZ(JJ) && lJ.call(JJ) == rJ
      }
      var qZ, jZ = dJ ? (qZ = dJ, function(JJ) {
        return qZ(JJ)
      }) : function(JJ) {
        return XZ(JJ) && UZ(JJ.length) && !!bJ[lJ.call(JJ)]
      };

      function YZ(JJ) {
        return ZZ(JJ) ? Ic(JJ) : dc(JJ)
      }

      function hZ(JJ) {
        return JJ
      }
      JJ.exports = function(JJ, cJ, ZJ) {
        var FJ, UJ = cZ(JJ) || jZ(JJ);
        if (cJ = pc(cJ), null == ZJ)
          if (UJ || eZ(JJ)) {
            var eJ = JJ.constructor;
            ZJ = UJ ? cZ(JJ) ? new eJ : [] : FZ(eJ) ? eZ(FJ = Fc(JJ)) ? Uc(FJ) : {} : {}
          } else ZJ = {};
        return (UJ ? zJ : Wc)(JJ, (function(JJ, FJ, UJ) {
          return cJ(ZJ, JJ, FJ, UJ)
        })), ZJ
      }
    }(ke, ke.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      n: pe
    } = FJ
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);