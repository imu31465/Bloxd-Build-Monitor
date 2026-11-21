export const id = 142;
export const ids = [142];
export const modules = {
  7896: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oo,
      g: () => zw
    });
    var LQ = {};
    wQ.r(LQ), wQ.d(LQ, {
      c: () => qL,
      g: () => kL,
      f: () => DL,
      i: () => Zw,
      j: () => Pw,
      n: () => rL,
      o: () => dw,
      s: () => NL,
      t: () => SL,
      v: () => UL,
      z: () => yw,
      D: () => WL,
      G: () => sL,
      I: () => IL,
      N: () => Bw,
      J: () => wL,
      P: () => OL,
      Q: () => RL
    });
    var qQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function oQ(QQ) {
      return QQ && QQ.__esModule && Object.prototype.hasOwnProperty.call(QQ, "default") ? QQ.default : QQ
    }
    var DQ = {
      exports: {}
    };
    ! function(QQ) {
      var FQ = Object.prototype.hasOwnProperty,
        wQ = "~";

      function LQ() {}

      function qQ(QQ, FQ, wQ) {
        this.gY = QQ, this.context = FQ, this.once = wQ || !1
      }

      function oQ(QQ, FQ, LQ, oQ, DQ) {
        if ("function" !== typeof LQ) throw new TypeError("The listener must be a function");
        var kQ = new qQ(LQ, oQ || QQ, DQ),
          vQ = wQ ? wQ + FQ : FQ;
        return QQ._events[vQ] ? QQ._events[vQ].gY ? QQ._events[vQ] = [QQ._events[vQ], kQ] : QQ._events[vQ].push(kQ) : (QQ._events[vQ] = kQ, QQ._eventsCount++), QQ
      }

      function DQ(QQ, FQ) {
        0 === --QQ._eventsCount ? QQ._events = new LQ : delete QQ._events[FQ]
      }

      function kQ() {
        this._events = new LQ, this._eventsCount = 0
      }
      Object.create && (LQ.prototype = Object.create(null), (new LQ).__proto__ || (wQ = !1)), kQ.prototype.eventNames = function() {
        var QQ, LQ, qQ = [];
        if (0 === this._eventsCount) return qQ;
        for (LQ in QQ = this._events) FQ.call(QQ, LQ) && qQ.push(wQ ? LQ.slice(1) : LQ);
        return Object.getOwnPropertySymbols ? qQ.concat(Object.getOwnPropertySymbols(QQ)) : qQ
      }, kQ.prototype.listeners = function(QQ) {
        var FQ = wQ ? wQ + QQ : QQ,
          LQ = this._events[FQ];
        if (!LQ) return [];
        if (LQ.gY) return [LQ.gY];
        for (var qQ = 0, oQ = LQ.length, DQ = new Array(oQ); qQ < oQ; qQ++) DQ[qQ] = LQ[qQ].gY;
        return DQ
      }, kQ.prototype.listenerCount = function(QQ) {
        var FQ = wQ ? wQ + QQ : QQ,
          LQ = this._events[FQ];
        return LQ ? LQ.gY ? 1 : LQ.length : 0
      }, kQ.prototype.emit = function(QQ, FQ, LQ, qQ, oQ, DQ) {
        var kQ = wQ ? wQ + QQ : QQ;
        if (!this._events[kQ]) return !1;
        var vQ, mQ, uQ = this._events[kQ],
          HQ = arguments.length;
        if (uQ.gY) {
          switch (uQ.once && this.removeListener(QQ, uQ.gY, void 0, !0), HQ) {
            case 1:
              return uQ.gY.call(uQ.context), !0;
            case 2:
              return uQ.gY.call(uQ.context, FQ), !0;
            case 3:
              return uQ.gY.call(uQ.context, FQ, LQ), !0;
            case 4:
              return uQ.gY.call(uQ.context, FQ, LQ, qQ), !0;
            case 5:
              return uQ.gY.call(uQ.context, FQ, LQ, qQ, oQ), !0;
            case 6:
              return uQ.gY.call(uQ.context, FQ, LQ, qQ, oQ, DQ), !0
          }
          for (mQ = 1, vQ = new Array(HQ - 1); mQ < HQ; mQ++) vQ[mQ - 1] = arguments[mQ];
          uQ.gY.apply(uQ.context, vQ)
        } else {
          var bQ, YQ = uQ.length;
          for (mQ = 0; mQ < YQ; mQ++) switch (uQ[mQ].once && this.removeListener(QQ, uQ[mQ].gY, void 0, !0), HQ) {
            case 1:
              uQ[mQ].gY.call(uQ[mQ].context);
              break;
            case 2:
              uQ[mQ].gY.call(uQ[mQ].context, FQ);
              break;
            case 3:
              uQ[mQ].gY.call(uQ[mQ].context, FQ, LQ);
              break;
            case 4:
              uQ[mQ].gY.call(uQ[mQ].context, FQ, LQ, qQ);
              break;
            default:
              if (!vQ)
                for (bQ = 1, vQ = new Array(HQ - 1); bQ < HQ; bQ++) vQ[bQ - 1] = arguments[bQ];
              uQ[mQ].gY.apply(uQ[mQ].context, vQ)
          }
        }
        return !0
      }, kQ.prototype.on = function(QQ, FQ, wQ) {
        return oQ(this, QQ, FQ, wQ, !1)
      }, kQ.prototype.once = function(QQ, FQ, wQ) {
        return oQ(this, QQ, FQ, wQ, !0)
      }, kQ.prototype.removeListener = function(QQ, FQ, LQ, qQ) {
        var oQ = wQ ? wQ + QQ : QQ;
        if (!this._events[oQ]) return this;
        if (!FQ) return DQ(this, oQ), this;
        var kQ = this._events[oQ];
        if (kQ.gY) kQ.gY !== FQ || qQ && !kQ.once || LQ && kQ.context !== LQ || DQ(this, oQ);
        else {
          for (var vQ = 0, mQ = [], uQ = kQ.length; vQ < uQ; vQ++)(kQ[vQ].gY !== FQ || qQ && !kQ[vQ].once || LQ && kQ[vQ].context !== LQ) && mQ.push(kQ[vQ]);
          mQ.length ? this._events[oQ] = 1 === mQ.length ? mQ[0] : mQ : DQ(this, oQ)
        }
        return this
      }, kQ.prototype.vG = function(QQ) {
        var FQ;
        return QQ ? (FQ = wQ ? wQ + QQ : QQ, this._events[FQ] && DQ(this, FQ)) : (this._events = new LQ, this._eventsCount = 0), this
      }, kQ.prototype.off = kQ.prototype.removeListener, kQ.prototype.addListener = kQ.prototype.on, kQ.prefixed = wQ, kQ.EventEmitter = kQ, QQ.exports = kQ
    }(DQ);
    var kQ, vQ, mQ = oQ(DQ.exports);
    ! function(QQ) {
      QQ.assertEqual = QQ => QQ, QQ.assertIs = function(QQ) {}, QQ.assertNever = function(QQ) {
        throw new Error
      }, QQ.arrayToEnum = QQ => {
        const FQ = {};
        for (const wQ of QQ) FQ[wQ] = wQ;
        return FQ
      }, QQ.getValidEnumValues = FQ => {
        const wQ = QQ.objectKeys(FQ).filter((QQ => "number" !== typeof FQ[FQ[QQ]])),
          LQ = {};
        for (const QQ of wQ) LQ[QQ] = FQ[QQ];
        return QQ.objectValues(LQ)
      }, QQ.objectValues = FQ => QQ.objectKeys(FQ).map((function(QQ) {
        return FQ[QQ]
      })), QQ.objectKeys = "function" === typeof Object.keys ? QQ => Object.keys(QQ) : QQ => {
        const FQ = [];
        for (const wQ in QQ) Object.prototype.hasOwnProperty.call(QQ, wQ) && FQ.push(wQ);
        return FQ
      }, QQ.find = (QQ, FQ) => {
        for (const wQ of QQ)
          if (FQ(wQ)) return wQ
      }, QQ.isInteger = "function" === typeof Number.isInteger ? QQ => Number.isInteger(QQ) : QQ => "number" === typeof QQ && isFinite(QQ) && Math.floor(QQ) === QQ, QQ.joinValues = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return QQ.map((QQ => "string" === typeof QQ ? `'${QQ}'` : QQ)).join(FQ)
      }, QQ.jsonStringifyReplacer = (QQ, FQ) => "bigint" === typeof FQ ? FQ.toString() : FQ
    }(kQ || (kQ = {})),
    function(QQ) {
      QQ.mergeShapes = (QQ, FQ) => ({
        ...QQ,
        ...FQ
      })
    }(vQ || (vQ = {}));
    const uQ = kQ.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      HQ = QQ => {
        switch (typeof QQ) {
          case "undefined":
            return uQ.undefined;
          case "string":
            return uQ.string;
          case "number":
            return isNaN(QQ) ? uQ.nan : uQ.number;
          case "boolean":
            return uQ.boolean;
          case "function":
            return uQ.function;
          case "bigint":
            return uQ.bigint;
          case "symbol":
            return uQ.symbol;
          case "object":
            return Array.isArray(QQ) ? uQ.array : null === QQ ? uQ.null : QQ.then && "function" === typeof QQ.then && QQ.catch && "function" === typeof QQ.catch ? uQ.promise : "undefined" !== typeof Map && QQ instanceof Map ? uQ.map : "undefined" !== typeof Set && QQ instanceof Set ? uQ.set : "undefined" !== typeof Date && QQ instanceof Date ? uQ.date : uQ.object;
          default:
            return uQ.unknown
        }
      },
      bQ = kQ.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class YQ extends Error {
      constructor(QQ) {
        var FQ;
        super(), FQ = this, this.issues = [], this.addIssue = QQ => {
          this.issues = [...this.issues, QQ]
        }, this.addIssues = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          FQ.issues = [...FQ.issues, ...QQ]
        };
        const wQ = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, wQ) : this.__proto__ = wQ, this.name = "ZodError", this.issues = QQ
      }
      get errors() {
        return this.issues
      }
      format(QQ) {
        const FQ = QQ || function(QQ) {
            return QQ.message
          },
          wQ = {
            _errors: []
          },
          LQ = QQ => {
            for (const qQ of QQ.issues)
              if ("invalid_union" === qQ.code) qQ.unionErrors.map(LQ);
              else if ("invalid_return_type" === qQ.code) LQ(qQ.returnTypeError);
            else if ("invalid_arguments" === qQ.code) LQ(qQ.argumentsError);
            else if (0 === qQ.path.length) wQ._errors.push(FQ(qQ));
            else {
              let QQ = wQ,
                LQ = 0;
              for (; LQ < qQ.path.length;) {
                const wQ = qQ.path[LQ];
                LQ === qQ.path.length - 1 ? (QQ[wQ] = QQ[wQ] || {
                  _errors: []
                }, QQ[wQ]._errors.push(FQ(qQ))) : QQ[wQ] = QQ[wQ] || {
                  _errors: []
                }, QQ = QQ[wQ], LQ++
              }
            }
          };
        return LQ(this), wQ
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, kQ.jsonStringifyReplacer, 2)
      }
      get BY() {
        return 0 === this.issues.length
      }
      flatten() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QQ => QQ.message;
        const FQ = {},
          wQ = [];
        for (const LQ of this.issues) LQ.path.length > 0 ? (FQ[LQ.path[0]] = FQ[LQ.path[0]] || [], FQ[LQ.path[0]].push(QQ(LQ))) : wQ.push(QQ(LQ));
        return {
          formErrors: wQ,
          fieldErrors: FQ
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    YQ.create = QQ => new YQ(QQ);
    const xQ = (QQ, FQ) => {
      let wQ;
      switch (QQ.code) {
        case bQ.invalid_type:
          wQ = QQ.received === uQ.undefined ? "Required" : `Expected ${QQ.expected}, received ${QQ.received}`;
          break;
        case bQ.invalid_literal:
          wQ = `Invalid literal value, expected ${JSON.stringify(QQ.expected,kQ.jsonStringifyReplacer)}`;
          break;
        case bQ.unrecognized_keys:
          wQ = `Unrecognized key(s) in object: ${kQ.joinValues(QQ.keys,", ")}`;
          break;
        case bQ.invalid_union:
          wQ = "Invalid input";
          break;
        case bQ.invalid_union_discriminator:
          wQ = `Invalid discriminator value. Expected ${kQ.joinValues(QQ.options)}`;
          break;
        case bQ.invalid_enum_value:
          wQ = `Invalid enum value. Expected ${kQ.joinValues(QQ.options)}, received '${QQ.received}'`;
          break;
        case bQ.invalid_arguments:
          wQ = "Invalid function arguments";
          break;
        case bQ.invalid_return_type:
          wQ = "Invalid function return type";
          break;
        case bQ.invalid_date:
          wQ = "Invalid date";
          break;
        case bQ.invalid_string:
          "object" === typeof QQ.validation ? "includes" in QQ.validation ? (wQ = `Invalid input: must include "${QQ.validation.includes}"`, "number" === typeof QQ.validation.position && (wQ = `${wQ} at one or more positions greater than or equal to ${QQ.validation.position}`)) : "startsWith" in QQ.validation ? wQ = `Invalid input: must start with "${QQ.validation.startsWith}"` : "endsWith" in QQ.validation ? wQ = `Invalid input: must end with "${QQ.validation.endsWith}"` : kQ.assertNever(QQ.validation) : wQ = "regex" !== QQ.validation ? `Invalid ${QQ.validation}` : "Invalid";
          break;
        case bQ.too_small:
          wQ = "array" === QQ.type ? `Array must contain ${QQ.exact?"exactly":QQ.inclusive?"at least":"more than"} ${QQ.minimum} element(s)` : "string" === QQ.type ? `String must contain ${QQ.exact?"exactly":QQ.inclusive?"at least":"over"} ${QQ.minimum} character(s)` : "number" === QQ.type ? `Number must be ${QQ.exact?"exactly equal to ":QQ.inclusive?"greater than or equal to ":"greater than "}${QQ.minimum}` : "date" === QQ.type ? `Date must be ${QQ.exact?"exactly equal to ":QQ.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(QQ.minimum))}` : "Invalid input";
          break;
        case bQ.too_big:
          wQ = "array" === QQ.type ? `Array must contain ${QQ.exact?"exactly":QQ.inclusive?"at most":"less than"} ${QQ.maximum} element(s)` : "string" === QQ.type ? `String must contain ${QQ.exact?"exactly":QQ.inclusive?"at most":"under"} ${QQ.maximum} character(s)` : "number" === QQ.type ? `Number must be ${QQ.exact?"exactly":QQ.inclusive?"less than or equal to":"less than"} ${QQ.maximum}` : "bigint" === QQ.type ? `BigInt must be ${QQ.exact?"exactly":QQ.inclusive?"less than or equal to":"less than"} ${QQ.maximum}` : "date" === QQ.type ? `Date must be ${QQ.exact?"exactly":QQ.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(QQ.maximum))}` : "Invalid input";
          break;
        case bQ.custom:
          wQ = "Invalid input";
          break;
        case bQ.invalid_intersection_types:
          wQ = "Intersection results could not be merged";
          break;
        case bQ.not_multiple_of:
          wQ = `Number must be a multiple of ${QQ.multipleOf}`;
          break;
        case bQ.not_finite:
          wQ = "Number must be finite";
          break;
        default:
          wQ = FQ.defaultError, kQ.assertNever(QQ)
      }
      return {
        message: wQ
      }
    };
    let AQ = xQ;

    function tQ() {
      return AQ
    }
    const eQ = QQ => {
      const {
        data: FQ,
        path: wQ,
        errorMaps: LQ,
        issueData: qQ
      } = QQ, oQ = [...wQ, ...qQ.path || []], DQ = {
        ...qQ,
        path: oQ
      };
      let kQ = "";
      const vQ = LQ.filter((QQ => !!QQ)).slice().reverse();
      for (const mQ of vQ) kQ = mQ(DQ, {
        data: FQ,
        defaultError: kQ
      }).message;
      return {
        ...qQ,
        path: oQ,
        message: qQ.message || kQ
      }
    };

    function MQ(QQ, FQ) {
      const wQ = eQ({
        issueData: FQ,
        data: QQ.data,
        path: QQ.path,
        errorMaps: [QQ.common.contextualErrorMap, QQ.schemaErrorMap, tQ(), xQ].filter((QQ => !!QQ))
      });
      QQ.common.issues.push(wQ)
    }
    class GQ {
      constructor() {
        this.value = "valid"
      }
      Tx() {
        "valid" === this.value && (this.value = "Tx")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(QQ, FQ) {
        const wQ = [];
        for (const LQ of FQ) {
          if ("aborted" === LQ.status) return pQ;
          "Tx" === LQ.status && QQ.Tx(), wQ.push(LQ.value)
        }
        return {
          status: QQ.value,
          value: wQ
        }
      }
      static async mergeObjectAsync(QQ, FQ) {
        const wQ = [];
        for (const LQ of FQ) wQ.push({
          key: await LQ.key,
          value: await LQ.value
        });
        return GQ.mergeObjectSync(QQ, wQ)
      }
      static mergeObjectSync(QQ, FQ) {
        const wQ = {};
        for (const LQ of FQ) {
          const {
            key: FQ,
            value: qQ
          } = LQ;
          if ("aborted" === FQ.status) return pQ;
          if ("aborted" === qQ.status) return pQ;
          "Tx" === FQ.status && QQ.Tx(), "Tx" === qQ.status && QQ.Tx(), "__proto__" === FQ.value || "undefined" === typeof qQ.value && !LQ.alwaysSet || (wQ[FQ.value] = qQ.value)
        }
        return {
          status: QQ.value,
          value: wQ
        }
      }
    }
    const pQ = Object.freeze({
        status: "aborted"
      }),
      cQ = QQ => ({
        status: "Tx",
        value: QQ
      }),
      CQ = QQ => ({
        status: "valid",
        value: QQ
      }),
      SQ = QQ => "aborted" === QQ.status,
      iQ = QQ => "Tx" === QQ.status,
      WQ = QQ => "valid" === QQ.status,
      RQ = QQ => "undefined" !== typeof Promise && QQ instanceof Promise;
    var OQ;
    ! function(QQ) {
      QQ.errToObj = QQ => "string" === typeof QQ ? {
        message: QQ
      } : QQ || {}, QQ.toString = QQ => "string" === typeof QQ ? QQ : null === QQ || void 0 === QQ ? void 0 : QQ.message
    }(OQ || (OQ = {}));
    class sQ {
      constructor(QQ, FQ, wQ, LQ) {
        this._cachedPath = [], this.parent = QQ, this.data = FQ, this._path = wQ, this._key = LQ
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const rQ = (QQ, FQ) => {
      if (WQ(FQ)) return {
        success: !0,
        data: FQ.value
      };
      if (!QQ.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const FQ = new YQ(QQ.common.issues);
          return this._error = FQ, this._error
        }
      }
    };

    function IQ(QQ) {
      if (!QQ) return {};
      const {
        errorMap: FQ,
        invalid_type_error: wQ,
        required_error: LQ,
        description: qQ
      } = QQ;
      if (FQ && (wQ || LQ)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (FQ) return {
        errorMap: FQ,
        description: qQ
      };
      return {
        errorMap: (QQ, FQ) => "invalid_type" !== QQ.code ? {
          message: FQ.defaultError
        } : "undefined" === typeof FQ.data ? {
          message: null !== LQ && void 0 !== LQ ? LQ : FQ.defaultError
        } : {
          message: null !== wQ && void 0 !== wQ ? wQ : FQ.defaultError
        },
        description: qQ
      }
    }
    class UQ {
      constructor(QQ) {
        this.spa = this.safeParseAsync, this._def = QQ, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(QQ) {
        return HQ(QQ.data)
      }
      _getOrReturnCtx(QQ, FQ) {
        return FQ || {
          common: QQ.parent.common,
          data: QQ.data,
          parsedType: HQ(QQ.data),
          schemaErrorMap: this._def.errorMap,
          path: QQ.path,
          parent: QQ.parent
        }
      }
      _processInputParams(QQ) {
        return {
          status: new GQ,
          ctx: {
            common: QQ.parent.common,
            data: QQ.data,
            parsedType: HQ(QQ.data),
            schemaErrorMap: this._def.errorMap,
            path: QQ.path,
            parent: QQ.parent
          }
        }
      }
      _parseSync(QQ) {
        const FQ = this._parse(QQ);
        if (RQ(FQ)) throw new Error("Synchronous parse encountered promise.");
        return FQ
      }
      _parseAsync(QQ) {
        const FQ = this._parse(QQ);
        return Promise.resolve(FQ)
      }
      parse(QQ, FQ) {
        const wQ = this.safeParse(QQ, FQ);
        if (wQ.success) return wQ.data;
        throw wQ.error
      }
      safeParse(QQ, FQ) {
        var wQ;
        const LQ = {
            common: {
              issues: [],
              async: null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.async) && void 0 !== wQ && wQ,
              contextualErrorMap: null === FQ || void 0 === FQ ? void 0 : FQ.errorMap
            },
            path: (null === FQ || void 0 === FQ ? void 0 : FQ.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: QQ,
            parsedType: HQ(QQ)
          },
          qQ = this._parseSync({
            data: QQ,
            path: LQ.path,
            parent: LQ
          });
        return rQ(LQ, qQ)
      }
      async parseAsync(QQ, FQ) {
        const wQ = await this.safeParseAsync(QQ, FQ);
        if (wQ.success) return wQ.data;
        throw wQ.error
      }
      async safeParseAsync(QQ, FQ) {
        const wQ = {
            common: {
              issues: [],
              contextualErrorMap: null === FQ || void 0 === FQ ? void 0 : FQ.errorMap,
              async: !0
            },
            path: (null === FQ || void 0 === FQ ? void 0 : FQ.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: QQ,
            parsedType: HQ(QQ)
          },
          LQ = this._parse({
            data: QQ,
            path: wQ.path,
            parent: wQ
          }),
          qQ = await (RQ(LQ) ? LQ : Promise.resolve(LQ));
        return rQ(wQ, qQ)
      }
      refine(QQ, FQ) {
        const wQ = QQ => "string" === typeof FQ || "undefined" === typeof FQ ? {
          message: FQ
        } : "function" === typeof FQ ? FQ(QQ) : FQ;
        return this._refinement(((FQ, LQ) => {
          const qQ = QQ(FQ),
            oQ = () => LQ.addIssue({
              code: bQ.custom,
              ...wQ(FQ)
            });
          return "undefined" !== typeof Promise && qQ instanceof Promise ? qQ.then((QQ => !!QQ || (oQ(), !1))) : !!qQ || (oQ(), !1)
        }))
      }
      refinement(QQ, FQ) {
        return this._refinement(((wQ, LQ) => !!QQ(wQ) || (LQ.addIssue("function" === typeof FQ ? FQ(wQ, LQ) : FQ), !1)))
      }
      _refinement(QQ) {
        return new pF({
          schema: this,
          typeName: NF.ZodEffects,
          effect: {
            type: "refinement",
            refinement: QQ
          }
        })
      }
      superRefine(QQ) {
        return this._refinement(QQ)
      }
      optional() {
        return cF.create(this, this._def)
      }
      nullable() {
        return CF.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return FF.create(this, this._def)
      }
      promise() {
        return GF.create(this, this._def)
      }
      or(QQ) {
        return qF.create([this, QQ], this._def)
      }
      and(QQ) {
        return vF.create(this, QQ, this._def)
      }
      transform(QQ) {
        return new pF({
          ...IQ(this._def),
          schema: this,
          typeName: NF.ZodEffects,
          effect: {
            type: "transform",
            transform: QQ
          }
        })
      }
      default (QQ) {
        const FQ = "function" === typeof QQ ? QQ : () => QQ;
        return new SF({
          ...IQ(this._def),
          innerType: this,
          defaultValue: FQ,
          typeName: NF.ZodDefault
        })
      }
      brand() {
        return new OF({
          typeName: NF.ZodBranded,
          type: this,
          ...IQ(this._def)
        })
      } catch (QQ) {
        const FQ = "function" === typeof QQ ? QQ : () => QQ;
        return new iF({
          ...IQ(this._def),
          innerType: this,
          catchValue: FQ,
          typeName: NF.ZodCatch
        })
      }
      describe(QQ) {
        return new(0, this.constructor)({
          ...this._def,
          description: QQ
        })
      }
      pipe(QQ) {
        return sF.create(this, QQ)
      }
      readonly() {
        return rF.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const NQ = /^c[^\s-]{8,}$/i,
      TQ = /^[a-z][a-z0-9]*$/,
      KQ = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      zQ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      lQ = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let jQ;
    const aQ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      XQ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class fQ extends UQ {
      _parse(QQ) {
        this._def.coerce && (QQ.data = String(QQ.data));
        if (this._getType(QQ) !== uQ.string) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.string,
            received: FQ.parsedType
          }), pQ
        }
        const FQ = new GQ;
        let wQ;
        for (const vQ of this._def.checks)
          if ("min" === vQ.kind) QQ.data.length < vQ.value && (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
            code: bQ.too_small,
            minimum: vQ.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: vQ.message
          }), FQ.Tx());
          else if ("max" === vQ.kind) QQ.data.length > vQ.value && (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          code: bQ.too_big,
          maximum: vQ.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: vQ.message
        }), FQ.Tx());
        else if ("length" === vQ.kind) {
          const LQ = QQ.data.length > vQ.value,
            qQ = QQ.data.length < vQ.value;
          (LQ || qQ) && (wQ = this._getOrReturnCtx(QQ, wQ), LQ ? MQ(wQ, {
            code: bQ.too_big,
            maximum: vQ.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: vQ.message
          }) : qQ && MQ(wQ, {
            code: bQ.too_small,
            minimum: vQ.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: vQ.message
          }), FQ.Tx())
        } else if ("email" === vQ.kind) lQ.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "email",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx());
        else if ("emoji" === vQ.kind) jQ || (jQ = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), jQ.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "emoji",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx());
        else if ("uuid" === vQ.kind) zQ.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "uuid",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx());
        else if ("cuid" === vQ.kind) NQ.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "cuid",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx());
        else if ("cuid2" === vQ.kind) TQ.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "cuid2",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx());
        else if ("ulid" === vQ.kind) KQ.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "ulid",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx());
        else if ("url" === vQ.kind) try {
          new URL(QQ.data)
        } catch (DQ) {
          wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
            validation: "url",
            code: bQ.invalid_string,
            message: vQ.message
          }), FQ.Tx()
        } else if ("regex" === vQ.kind) {
          vQ.regex.lastIndex = 0;
          vQ.regex.test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
            validation: "regex",
            code: bQ.invalid_string,
            message: vQ.message
          }), FQ.Tx())
        } else if ("trim" === vQ.kind) QQ.data = QQ.data.trim();
        else if ("includes" === vQ.kind) QQ.data.includes(vQ.value, vQ.position) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          code: bQ.invalid_string,
          validation: {
            includes: vQ.value,
            position: vQ.position
          },
          message: vQ.message
        }), FQ.Tx());
        else if ("toLowerCase" === vQ.kind) QQ.data = QQ.data.toLowerCase();
        else if ("toUpperCase" === vQ.kind) QQ.data = QQ.data.toUpperCase();
        else if ("startsWith" === vQ.kind) QQ.data.startsWith(vQ.value) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          code: bQ.invalid_string,
          validation: {
            startsWith: vQ.value
          },
          message: vQ.message
        }), FQ.Tx());
        else if ("endsWith" === vQ.kind) QQ.data.endsWith(vQ.value) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          code: bQ.invalid_string,
          validation: {
            endsWith: vQ.value
          },
          message: vQ.message
        }), FQ.Tx());
        else if ("datetime" === vQ.kind) {
          ((oQ = vQ).precision ? oQ.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${oQ.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${oQ.precision}}Z$`) : 0 === oQ.precision ? oQ.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : oQ.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(QQ.data) || (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
            code: bQ.invalid_string,
            validation: "datetime",
            message: vQ.message
          }), FQ.Tx())
        } else "ip" === vQ.kind ? (LQ = QQ.data, ("v4" !== (qQ = vQ.version) && qQ || !aQ.test(LQ)) && ("v6" !== qQ && qQ || !XQ.test(LQ)) && (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          validation: "ip",
          code: bQ.invalid_string,
          message: vQ.message
        }), FQ.Tx())) : kQ.assertNever(vQ);
        var LQ, qQ, oQ;
        return {
          status: FQ.value,
          value: QQ.data
        }
      }
      _regex(QQ, FQ, wQ) {
        return this.refinement((FQ => QQ.test(FQ)), {
          validation: FQ,
          code: bQ.invalid_string,
          ...OQ.errToObj(wQ)
        })
      }
      _addCheck(QQ) {
        return new fQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      email(QQ) {
        return this._addCheck({
          kind: "email",
          ...OQ.errToObj(QQ)
        })
      }
      url(QQ) {
        return this._addCheck({
          kind: "url",
          ...OQ.errToObj(QQ)
        })
      }
      emoji(QQ) {
        return this._addCheck({
          kind: "emoji",
          ...OQ.errToObj(QQ)
        })
      }
      uuid(QQ) {
        return this._addCheck({
          kind: "uuid",
          ...OQ.errToObj(QQ)
        })
      }
      cuid(QQ) {
        return this._addCheck({
          kind: "cuid",
          ...OQ.errToObj(QQ)
        })
      }
      cuid2(QQ) {
        return this._addCheck({
          kind: "cuid2",
          ...OQ.errToObj(QQ)
        })
      }
      ulid(QQ) {
        return this._addCheck({
          kind: "ulid",
          ...OQ.errToObj(QQ)
        })
      }
      ip(QQ) {
        return this._addCheck({
          kind: "ip",
          ...OQ.errToObj(QQ)
        })
      }
      datetime(QQ) {
        var FQ;
        return "string" === typeof QQ ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: QQ
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.precision) ? null : null === QQ || void 0 === QQ ? void 0 : QQ.precision,
          offset: null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.offset) && void 0 !== FQ && FQ,
          ...OQ.errToObj(null === QQ || void 0 === QQ ? void 0 : QQ.message)
        })
      }
      regex(QQ, FQ) {
        return this._addCheck({
          kind: "regex",
          regex: QQ,
          ...OQ.errToObj(FQ)
        })
      }
      includes(QQ, FQ) {
        return this._addCheck({
          kind: "includes",
          value: QQ,
          position: null === FQ || void 0 === FQ ? void 0 : FQ.position,
          ...OQ.errToObj(null === FQ || void 0 === FQ ? void 0 : FQ.message)
        })
      }
      startsWith(QQ, FQ) {
        return this._addCheck({
          kind: "startsWith",
          value: QQ,
          ...OQ.errToObj(FQ)
        })
      }
      endsWith(QQ, FQ) {
        return this._addCheck({
          kind: "endsWith",
          value: QQ,
          ...OQ.errToObj(FQ)
        })
      }
      min(QQ, FQ) {
        return this._addCheck({
          kind: "min",
          value: QQ,
          ...OQ.errToObj(FQ)
        })
      }
      max(QQ, FQ) {
        return this._addCheck({
          kind: "max",
          value: QQ,
          ...OQ.errToObj(FQ)
        })
      }
      length(QQ, FQ) {
        return this._addCheck({
          kind: "length",
          value: QQ,
          ...OQ.errToObj(FQ)
        })
      }
      nonempty(QQ) {
        return this.min(1, OQ.errToObj(QQ))
      }
      trim() {
        return new fQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new fQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new fQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((QQ => "datetime" === QQ.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((QQ => "email" === QQ.kind))
      }
      get isURL() {
        return !!this._def.checks.find((QQ => "url" === QQ.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((QQ => "emoji" === QQ.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((QQ => "uuid" === QQ.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((QQ => "cuid" === QQ.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((QQ => "cuid2" === QQ.kind))
      }
      get isULID() {
        return !!this._def.checks.find((QQ => "ulid" === QQ.kind))
      }
      get isIP() {
        return !!this._def.checks.find((QQ => "ip" === QQ.kind))
      }
      get minLength() {
        let QQ = null;
        for (const FQ of this._def.checks) "min" === FQ.kind && (null === QQ || FQ.value > QQ) && (QQ = FQ.value);
        return QQ
      }
      get maxLength() {
        let QQ = null;
        for (const FQ of this._def.checks) "max" === FQ.kind && (null === QQ || FQ.value < QQ) && (QQ = FQ.value);
        return QQ
      }
    }

    function VQ(QQ, FQ) {
      const wQ = (QQ.toString().split(".")[1] || "").length,
        LQ = (FQ.toString().split(".")[1] || "").length,
        qQ = wQ > LQ ? wQ : LQ;
      return parseInt(QQ.toFixed(qQ).replace(".", "")) % parseInt(FQ.toFixed(qQ).replace(".", "")) / Math.pow(10, qQ)
    }
    fQ.create = QQ => {
      var FQ;
      return new fQ({
        checks: [],
        typeName: NF.ZodString,
        coerce: null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.coerce) && void 0 !== FQ && FQ,
        ...IQ(QQ)
      })
    };
    class hQ extends UQ {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(QQ) {
        this._def.coerce && (QQ.data = Number(QQ.data));
        if (this._getType(QQ) !== uQ.number) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.number,
            received: FQ.parsedType
          }), pQ
        }
        let FQ;
        const wQ = new GQ;
        for (const LQ of this._def.checks)
          if ("int" === LQ.kind) kQ.isInteger(QQ.data) || (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
            code: bQ.invalid_type,
            expected: "integer",
            received: "float",
            message: LQ.message
          }), wQ.Tx());
          else if ("min" === LQ.kind) {
          (LQ.inclusive ? QQ.data < LQ.value : QQ.data <= LQ.value) && (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
            code: bQ.too_small,
            minimum: LQ.value,
            type: "number",
            inclusive: LQ.inclusive,
            exact: !1,
            message: LQ.message
          }), wQ.Tx())
        } else if ("max" === LQ.kind) {
          (LQ.inclusive ? QQ.data > LQ.value : QQ.data >= LQ.value) && (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
            code: bQ.too_big,
            maximum: LQ.value,
            type: "number",
            inclusive: LQ.inclusive,
            exact: !1,
            message: LQ.message
          }), wQ.Tx())
        } else "multipleOf" === LQ.kind ? 0 !== VQ(QQ.data, LQ.value) && (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
          code: bQ.not_multiple_of,
          multipleOf: LQ.value,
          message: LQ.message
        }), wQ.Tx()) : "finite" === LQ.kind ? Number.isFinite(QQ.data) || (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
          code: bQ.not_finite,
          message: LQ.message
        }), wQ.Tx()) : kQ.assertNever(LQ);
        return {
          status: wQ.value,
          value: QQ.data
        }
      }
      gte(QQ, FQ) {
        return this.setLimit("min", QQ, !0, OQ.toString(FQ))
      }
      gt(QQ, FQ) {
        return this.setLimit("min", QQ, !1, OQ.toString(FQ))
      }
      lte(QQ, FQ) {
        return this.setLimit("max", QQ, !0, OQ.toString(FQ))
      }
      lt(QQ, FQ) {
        return this.setLimit("max", QQ, !1, OQ.toString(FQ))
      }
      setLimit(QQ, FQ, wQ, LQ) {
        return new hQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: QQ,
            value: FQ,
            inclusive: wQ,
            message: OQ.toString(LQ)
          }]
        })
      }
      _addCheck(QQ) {
        return new hQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      int(QQ) {
        return this._addCheck({
          kind: "int",
          message: OQ.toString(QQ)
        })
      }
      positive(QQ) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: OQ.toString(QQ)
        })
      }
      negative(QQ) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: OQ.toString(QQ)
        })
      }
      nonpositive(QQ) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: OQ.toString(QQ)
        })
      }
      nonnegative(QQ) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: OQ.toString(QQ)
        })
      }
      multipleOf(QQ, FQ) {
        return this._addCheck({
          kind: "multipleOf",
          value: QQ,
          message: OQ.toString(FQ)
        })
      }
      finite(QQ) {
        return this._addCheck({
          kind: "finite",
          message: OQ.toString(QQ)
        })
      }
      safe(QQ) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: OQ.toString(QQ)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: OQ.toString(QQ)
        })
      }
      get minValue() {
        let QQ = null;
        for (const FQ of this._def.checks) "min" === FQ.kind && (null === QQ || FQ.value > QQ) && (QQ = FQ.value);
        return QQ
      }
      get maxValue() {
        let QQ = null;
        for (const FQ of this._def.checks) "max" === FQ.kind && (null === QQ || FQ.value < QQ) && (QQ = FQ.value);
        return QQ
      }
      get isInt() {
        return !!this._def.checks.find((QQ => "int" === QQ.kind || "multipleOf" === QQ.kind && kQ.isInteger(QQ.value)))
      }
      get isFinite() {
        let QQ = null,
          FQ = null;
        for (const wQ of this._def.checks) {
          if ("finite" === wQ.kind || "int" === wQ.kind || "multipleOf" === wQ.kind) return !0;
          "min" === wQ.kind ? (null === FQ || wQ.value > FQ) && (FQ = wQ.value) : "max" === wQ.kind && (null === QQ || wQ.value < QQ) && (QQ = wQ.value)
        }
        return Number.isFinite(FQ) && Number.isFinite(QQ)
      }
    }
    hQ.create = QQ => new hQ({
      checks: [],
      typeName: NF.ZodNumber,
      coerce: (null === QQ || void 0 === QQ ? void 0 : QQ.coerce) || !1,
      ...IQ(QQ)
    });
    class JQ extends UQ {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(QQ) {
        this._def.coerce && (QQ.data = BigInt(QQ.data));
        if (this._getType(QQ) !== uQ.bigint) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.bigint,
            received: FQ.parsedType
          }), pQ
        }
        let FQ;
        const wQ = new GQ;
        for (const LQ of this._def.checks)
          if ("min" === LQ.kind) {
            (LQ.inclusive ? QQ.data < LQ.value : QQ.data <= LQ.value) && (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
              code: bQ.too_small,
              type: "bigint",
              minimum: LQ.value,
              inclusive: LQ.inclusive,
              message: LQ.message
            }), wQ.Tx())
          } else if ("max" === LQ.kind) {
          (LQ.inclusive ? QQ.data > LQ.value : QQ.data >= LQ.value) && (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
            code: bQ.too_big,
            type: "bigint",
            maximum: LQ.value,
            inclusive: LQ.inclusive,
            message: LQ.message
          }), wQ.Tx())
        } else "multipleOf" === LQ.kind ? QQ.data % LQ.value !== BigInt(0) && (FQ = this._getOrReturnCtx(QQ, FQ), MQ(FQ, {
          code: bQ.not_multiple_of,
          multipleOf: LQ.value,
          message: LQ.message
        }), wQ.Tx()) : kQ.assertNever(LQ);
        return {
          status: wQ.value,
          value: QQ.data
        }
      }
      gte(QQ, FQ) {
        return this.setLimit("min", QQ, !0, OQ.toString(FQ))
      }
      gt(QQ, FQ) {
        return this.setLimit("min", QQ, !1, OQ.toString(FQ))
      }
      lte(QQ, FQ) {
        return this.setLimit("max", QQ, !0, OQ.toString(FQ))
      }
      lt(QQ, FQ) {
        return this.setLimit("max", QQ, !1, OQ.toString(FQ))
      }
      setLimit(QQ, FQ, wQ, LQ) {
        return new JQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: QQ,
            value: FQ,
            inclusive: wQ,
            message: OQ.toString(LQ)
          }]
        })
      }
      _addCheck(QQ) {
        return new JQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      positive(QQ) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: OQ.toString(QQ)
        })
      }
      negative(QQ) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: OQ.toString(QQ)
        })
      }
      nonpositive(QQ) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: OQ.toString(QQ)
        })
      }
      nonnegative(QQ) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: OQ.toString(QQ)
        })
      }
      multipleOf(QQ, FQ) {
        return this._addCheck({
          kind: "multipleOf",
          value: QQ,
          message: OQ.toString(FQ)
        })
      }
      get minValue() {
        let QQ = null;
        for (const FQ of this._def.checks) "min" === FQ.kind && (null === QQ || FQ.value > QQ) && (QQ = FQ.value);
        return QQ
      }
      get maxValue() {
        let QQ = null;
        for (const FQ of this._def.checks) "max" === FQ.kind && (null === QQ || FQ.value < QQ) && (QQ = FQ.value);
        return QQ
      }
    }
    JQ.create = QQ => {
      var FQ;
      return new JQ({
        checks: [],
        typeName: NF.ZodBigInt,
        coerce: null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.coerce) && void 0 !== FQ && FQ,
        ...IQ(QQ)
      })
    };
    class EQ extends UQ {
      _parse(QQ) {
        this._def.coerce && (QQ.data = Boolean(QQ.data));
        if (this._getType(QQ) !== uQ.boolean) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.boolean,
            received: FQ.parsedType
          }), pQ
        }
        return CQ(QQ.data)
      }
    }
    EQ.create = QQ => new EQ({
      typeName: NF.ZodBoolean,
      coerce: (null === QQ || void 0 === QQ ? void 0 : QQ.coerce) || !1,
      ...IQ(QQ)
    });
    class nQ extends UQ {
      _parse(QQ) {
        this._def.coerce && (QQ.data = new Date(QQ.data));
        if (this._getType(QQ) !== uQ.date) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.date,
            received: FQ.parsedType
          }), pQ
        }
        if (isNaN(QQ.data.getTime())) {
          return MQ(this._getOrReturnCtx(QQ), {
            code: bQ.invalid_date
          }), pQ
        }
        const FQ = new GQ;
        let wQ;
        for (const LQ of this._def.checks) "min" === LQ.kind ? QQ.data.getTime() < LQ.value && (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          code: bQ.too_small,
          message: LQ.message,
          inclusive: !0,
          exact: !1,
          minimum: LQ.value,
          type: "date"
        }), FQ.Tx()) : "max" === LQ.kind ? QQ.data.getTime() > LQ.value && (wQ = this._getOrReturnCtx(QQ, wQ), MQ(wQ, {
          code: bQ.too_big,
          message: LQ.message,
          inclusive: !0,
          exact: !1,
          maximum: LQ.value,
          type: "date"
        }), FQ.Tx()) : kQ.assertNever(LQ);
        return {
          status: FQ.value,
          value: new Date(QQ.data.getTime())
        }
      }
      _addCheck(QQ) {
        return new nQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      min(QQ, FQ) {
        return this._addCheck({
          kind: "min",
          value: QQ.getTime(),
          message: OQ.toString(FQ)
        })
      }
      max(QQ, FQ) {
        return this._addCheck({
          kind: "max",
          value: QQ.getTime(),
          message: OQ.toString(FQ)
        })
      }
      get minDate() {
        let QQ = null;
        for (const FQ of this._def.checks) "min" === FQ.kind && (null === QQ || FQ.value > QQ) && (QQ = FQ.value);
        return null != QQ ? new Date(QQ) : null
      }
      get maxDate() {
        let QQ = null;
        for (const FQ of this._def.checks) "max" === FQ.kind && (null === QQ || FQ.value < QQ) && (QQ = FQ.value);
        return null != QQ ? new Date(QQ) : null
      }
    }
    nQ.create = QQ => new nQ({
      checks: [],
      coerce: (null === QQ || void 0 === QQ ? void 0 : QQ.coerce) || !1,
      typeName: NF.ZodDate,
      ...IQ(QQ)
    });
    class gQ extends UQ {
      _parse(QQ) {
        if (this._getType(QQ) !== uQ.symbol) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.symbol,
            received: FQ.parsedType
          }), pQ
        }
        return CQ(QQ.data)
      }
    }
    gQ.create = QQ => new gQ({
      typeName: NF.ZodSymbol,
      ...IQ(QQ)
    });
    class PQ extends UQ {
      _parse(QQ) {
        if (this._getType(QQ) !== uQ.undefined) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.undefined,
            received: FQ.parsedType
          }), pQ
        }
        return CQ(QQ.data)
      }
    }
    PQ.create = QQ => new PQ({
      typeName: NF.ZodUndefined,
      ...IQ(QQ)
    });
    class ZQ extends UQ {
      _parse(QQ) {
        if (this._getType(QQ) !== uQ.null) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.null,
            received: FQ.parsedType
          }), pQ
        }
        return CQ(QQ.data)
      }
    }
    ZQ.create = QQ => new ZQ({
      typeName: NF.ZodNull,
      ...IQ(QQ)
    });
    class yQ extends UQ {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(QQ) {
        return CQ(QQ.data)
      }
    }
    yQ.create = QQ => new yQ({
      typeName: NF.ZodAny,
      ...IQ(QQ)
    });
    class BQ extends UQ {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(QQ) {
        return CQ(QQ.data)
      }
    }
    BQ.create = QQ => new BQ({
      typeName: NF.ZodUnknown,
      ...IQ(QQ)
    });
    class dQ extends UQ {
      _parse(QQ) {
        const FQ = this._getOrReturnCtx(QQ);
        return MQ(FQ, {
          code: bQ.invalid_type,
          expected: uQ.never,
          received: FQ.parsedType
        }), pQ
      }
    }
    dQ.create = QQ => new dQ({
      typeName: NF.ZodNever,
      ...IQ(QQ)
    });
    class QF extends UQ {
      _parse(QQ) {
        if (this._getType(QQ) !== uQ.undefined) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.void,
            received: FQ.parsedType
          }), pQ
        }
        return CQ(QQ.data)
      }
    }
    QF.create = QQ => new QF({
      typeName: NF.ZodVoid,
      ...IQ(QQ)
    });
    class FF extends UQ {
      _parse(QQ) {
        const {
          ctx: FQ,
          status: wQ
        } = this._processInputParams(QQ), LQ = this._def;
        if (FQ.parsedType !== uQ.array) return MQ(FQ, {
          code: bQ.invalid_type,
          expected: uQ.array,
          received: FQ.parsedType
        }), pQ;
        if (null !== LQ.exactLength) {
          const QQ = FQ.data.length > LQ.exactLength.value,
            qQ = FQ.data.length < LQ.exactLength.value;
          (QQ || qQ) && (MQ(FQ, {
            code: QQ ? bQ.too_big : bQ.too_small,
            minimum: qQ ? LQ.exactLength.value : void 0,
            maximum: QQ ? LQ.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: LQ.exactLength.message
          }), wQ.Tx())
        }
        if (null !== LQ.minLength && FQ.data.length < LQ.minLength.value && (MQ(FQ, {
            code: bQ.too_small,
            minimum: LQ.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: LQ.minLength.message
          }), wQ.Tx()), null !== LQ.maxLength && FQ.data.length > LQ.maxLength.value && (MQ(FQ, {
            code: bQ.too_big,
            maximum: LQ.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: LQ.maxLength.message
          }), wQ.Tx()), FQ.common.async) return Promise.all([...FQ.data].map(((QQ, wQ) => LQ.type._parseAsync(new sQ(FQ, QQ, FQ.path, wQ))))).then((QQ => GQ.mergeArray(wQ, QQ)));
        const qQ = [...FQ.data].map(((QQ, wQ) => LQ.type._parseSync(new sQ(FQ, QQ, FQ.path, wQ))));
        return GQ.mergeArray(wQ, qQ)
      }
      get element() {
        return this._def.type
      }
      min(QQ, FQ) {
        return new FF({
          ...this._def,
          minLength: {
            value: QQ,
            message: OQ.toString(FQ)
          }
        })
      }
      max(QQ, FQ) {
        return new FF({
          ...this._def,
          maxLength: {
            value: QQ,
            message: OQ.toString(FQ)
          }
        })
      }
      length(QQ, FQ) {
        return new FF({
          ...this._def,
          exactLength: {
            value: QQ,
            message: OQ.toString(FQ)
          }
        })
      }
      nonempty(QQ) {
        return this.min(1, QQ)
      }
    }

    function wF(QQ) {
      if (QQ instanceof LF) {
        const FQ = {};
        for (const wQ in QQ.shape) {
          const LQ = QQ.shape[wQ];
          FQ[wQ] = cF.create(wF(LQ))
        }
        return new LF({
          ...QQ._def,
          shape: () => FQ
        })
      }
      return QQ instanceof FF ? new FF({
        ...QQ._def,
        type: wF(QQ.element)
      }) : QQ instanceof cF ? cF.create(wF(QQ.unwrap())) : QQ instanceof CF ? CF.create(wF(QQ.unwrap())) : QQ instanceof mF ? mF.create(QQ.items.map((QQ => wF(QQ)))) : QQ
    }
    FF.create = (QQ, FQ) => new FF({
      type: QQ,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: NF.ZodArray,
      ...IQ(FQ)
    });
    class LF extends UQ {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const QQ = this._def.shape(),
          FQ = kQ.objectKeys(QQ);
        return this._cached = {
          shape: QQ,
          keys: FQ
        }
      }
      _parse(QQ) {
        if (this._getType(QQ) !== uQ.object) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.object,
            received: FQ.parsedType
          }), pQ
        }
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ), {
          shape: LQ,
          keys: qQ
        } = this._getCached(), oQ = [];
        if (!(this._def.catchall instanceof dQ && "strip" === this._def.unknownKeys))
          for (const kQ in wQ.data) qQ.includes(kQ) || oQ.push(kQ);
        const DQ = [];
        for (const kQ of qQ) {
          const QQ = LQ[kQ],
            FQ = wQ.data[kQ];
          DQ.push({
            key: {
              status: "valid",
              value: kQ
            },
            value: QQ._parse(new sQ(wQ, FQ, wQ.path, kQ)),
            alwaysSet: kQ in wQ.data
          })
        }
        if (this._def.catchall instanceof dQ) {
          const QQ = this._def.unknownKeys;
          if ("passthrough" === QQ)
            for (const FQ of oQ) DQ.push({
              key: {
                status: "valid",
                value: FQ
              },
              value: {
                status: "valid",
                value: wQ.data[FQ]
              }
            });
          else if ("strict" === QQ) oQ.length > 0 && (MQ(wQ, {
            code: bQ.unrecognized_keys,
            keys: oQ
          }), FQ.Tx());
          else if ("strip" !== QQ) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const QQ = this._def.catchall;
          for (const FQ of oQ) {
            const LQ = wQ.data[FQ];
            DQ.push({
              key: {
                status: "valid",
                value: FQ
              },
              value: QQ._parse(new sQ(wQ, LQ, wQ.path, FQ)),
              alwaysSet: FQ in wQ.data
            })
          }
        }
        return wQ.common.async ? Promise.resolve().then((async () => {
          const QQ = [];
          for (const FQ of DQ) {
            const wQ = await FQ.key;
            QQ.push({
              key: wQ,
              value: await FQ.value,
              alwaysSet: FQ.alwaysSet
            })
          }
          return QQ
        })).then((QQ => GQ.mergeObjectSync(FQ, QQ))) : GQ.mergeObjectSync(FQ, DQ)
      }
      get shape() {
        return this._def.shape()
      }
      strict(QQ) {
        return OQ.errToObj, new LF({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== QQ ? {
            errorMap: (FQ, wQ) => {
              var LQ, qQ, oQ, DQ;
              const kQ = null !== (oQ = null === (qQ = (LQ = this._def).errorMap) || void 0 === qQ ? void 0 : qQ.call(LQ, FQ, wQ).message) && void 0 !== oQ ? oQ : wQ.defaultError;
              return "unrecognized_keys" === FQ.code ? {
                message: null !== (DQ = OQ.errToObj(QQ).message) && void 0 !== DQ ? DQ : kQ
              } : {
                message: kQ
              }
            }
          } : {}
        })
      }
      strip() {
        return new LF({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new LF({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(QQ) {
        return new LF({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...QQ
          })
        })
      }
      merge(QQ) {
        return new LF({
          unknownKeys: QQ._def.unknownKeys,
          catchall: QQ._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...QQ._def.shape()
          }),
          typeName: NF.ZodObject
        })
      }
      setKey(QQ, FQ) {
        return this.augment({
          [QQ]: FQ
        })
      }
      catchall(QQ) {
        return new LF({
          ...this._def,
          catchall: QQ
        })
      }
      Vb(QQ) {
        const FQ = {};
        return kQ.objectKeys(QQ).forEach((wQ => {
          QQ[wQ] && this.shape[wQ] && (FQ[wQ] = this.shape[wQ])
        })), new LF({
          ...this._def,
          shape: () => FQ
        })
      }
      omit(QQ) {
        const FQ = {};
        return kQ.objectKeys(this.shape).forEach((wQ => {
          QQ[wQ] || (FQ[wQ] = this.shape[wQ])
        })), new LF({
          ...this._def,
          shape: () => FQ
        })
      }
      deepPartial() {
        return wF(this)
      }
      partial(QQ) {
        const FQ = {};
        return kQ.objectKeys(this.shape).forEach((wQ => {
          const LQ = this.shape[wQ];
          QQ && !QQ[wQ] ? FQ[wQ] = LQ : FQ[wQ] = LQ.optional()
        })), new LF({
          ...this._def,
          shape: () => FQ
        })
      }
      required(QQ) {
        const FQ = {};
        return kQ.objectKeys(this.shape).forEach((wQ => {
          if (QQ && !QQ[wQ]) FQ[wQ] = this.shape[wQ];
          else {
            let QQ = this.shape[wQ];
            for (; QQ instanceof cF;) QQ = QQ._def.innerType;
            FQ[wQ] = QQ
          }
        })), new LF({
          ...this._def,
          shape: () => FQ
        })
      }
      keyof() {
        return tF(kQ.objectKeys(this.shape))
      }
    }
    LF.create = (QQ, FQ) => new LF({
      shape: () => QQ,
      unknownKeys: "strip",
      catchall: dQ.create(),
      typeName: NF.ZodObject,
      ...IQ(FQ)
    }), LF.strictCreate = (QQ, FQ) => new LF({
      shape: () => QQ,
      unknownKeys: "strict",
      catchall: dQ.create(),
      typeName: NF.ZodObject,
      ...IQ(FQ)
    }), LF.lazycreate = (QQ, FQ) => new LF({
      shape: QQ,
      unknownKeys: "strip",
      catchall: dQ.create(),
      typeName: NF.ZodObject,
      ...IQ(FQ)
    });
    class qF extends UQ {
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ), wQ = this._def.options;
        if (FQ.common.async) return Promise.all(wQ.map((async QQ => {
          const wQ = {
            ...FQ,
            common: {
              ...FQ.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await QQ._parseAsync({
              data: FQ.data,
              path: FQ.path,
              parent: wQ
            }),
            ctx: wQ
          }
        }))).then((function(QQ) {
          for (const FQ of QQ)
            if ("valid" === FQ.result.status) return FQ.result;
          for (const LQ of QQ)
            if ("Tx" === LQ.result.status) return FQ.common.issues.push(...LQ.ctx.common.issues), LQ.result;
          const wQ = QQ.map((QQ => new YQ(QQ.ctx.common.issues)));
          return MQ(FQ, {
            code: bQ.invalid_union,
            unionErrors: wQ
          }), pQ
        }));
        {
          let QQ;
          const LQ = [];
          for (const oQ of wQ) {
            const wQ = {
                ...FQ,
                common: {
                  ...FQ.common,
                  issues: []
                },
                parent: null
              },
              qQ = oQ._parseSync({
                data: FQ.data,
                path: FQ.path,
                parent: wQ
              });
            if ("valid" === qQ.status) return qQ;
            "Tx" !== qQ.status || QQ || (QQ = {
              result: qQ,
              ctx: wQ
            }), wQ.common.issues.length && LQ.push(wQ.common.issues)
          }
          if (QQ) return FQ.common.issues.push(...QQ.ctx.common.issues), QQ.result;
          const qQ = LQ.map((QQ => new YQ(QQ)));
          return MQ(FQ, {
            code: bQ.invalid_union,
            unionErrors: qQ
          }), pQ
        }
      }
      get options() {
        return this._def.options
      }
    }
    qF.create = (QQ, FQ) => new qF({
      options: QQ,
      typeName: NF.ZodUnion,
      ...IQ(FQ)
    });
    const oF = QQ => QQ instanceof xF ? oF(QQ.schema) : QQ instanceof pF ? oF(QQ.innerType()) : QQ instanceof AF ? [QQ.value] : QQ instanceof eF ? QQ.options : QQ instanceof MF ? Object.keys(QQ.enum) : QQ instanceof SF ? oF(QQ._def.innerType) : QQ instanceof PQ ? [void 0] : QQ instanceof ZQ ? [null] : null;
    class DF extends UQ {
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ);
        if (FQ.parsedType !== uQ.object) return MQ(FQ, {
          code: bQ.invalid_type,
          expected: uQ.object,
          received: FQ.parsedType
        }), pQ;
        const wQ = this.discriminator,
          LQ = FQ.data[wQ],
          qQ = this.optionsMap.get(LQ);
        return qQ ? FQ.common.async ? qQ._parseAsync({
          data: FQ.data,
          path: FQ.path,
          parent: FQ
        }) : qQ._parseSync({
          data: FQ.data,
          path: FQ.path,
          parent: FQ
        }) : (MQ(FQ, {
          code: bQ.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [wQ]
        }), pQ)
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
      static create(QQ, FQ, wQ) {
        const LQ = new Map;
        for (const qQ of FQ) {
          const FQ = oF(qQ.shape[QQ]);
          if (!FQ) throw new Error(`A discriminator value for key \`${QQ}\` could not be extracted from all schema options`);
          for (const wQ of FQ) {
            if (LQ.has(wQ)) throw new Error(`Discriminator property ${String(QQ)} has duplicate value ${String(wQ)}`);
            LQ.set(wQ, qQ)
          }
        }
        return new DF({
          typeName: NF.ZodDiscriminatedUnion,
          discriminator: QQ,
          options: FQ,
          optionsMap: LQ,
          ...IQ(wQ)
        })
      }
    }

    function kF(QQ, FQ) {
      const wQ = HQ(QQ),
        LQ = HQ(FQ);
      if (QQ === FQ) return {
        valid: !0,
        data: QQ
      };
      if (wQ === uQ.object && LQ === uQ.object) {
        const wQ = kQ.objectKeys(FQ),
          LQ = kQ.objectKeys(QQ).filter((QQ => -1 !== wQ.indexOf(QQ))),
          qQ = {
            ...QQ,
            ...FQ
          };
        for (const oQ of LQ) {
          const wQ = kF(QQ[oQ], FQ[oQ]);
          if (!wQ.valid) return {
            valid: !1
          };
          qQ[oQ] = wQ.data
        }
        return {
          valid: !0,
          data: qQ
        }
      }
      if (wQ === uQ.array && LQ === uQ.array) {
        if (QQ.length !== FQ.length) return {
          valid: !1
        };
        const wQ = [];
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          const qQ = kF(QQ[LQ], FQ[LQ]);
          if (!qQ.valid) return {
            valid: !1
          };
          wQ.push(qQ.data)
        }
        return {
          valid: !0,
          data: wQ
        }
      }
      return wQ === uQ.date && LQ === uQ.date && +QQ === +FQ ? {
        valid: !0,
        data: QQ
      } : {
        valid: !1
      }
    }
    class vF extends UQ {
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ), LQ = (QQ, LQ) => {
          if (SQ(QQ) || SQ(LQ)) return pQ;
          const qQ = kF(QQ.value, LQ.value);
          return qQ.valid ? ((iQ(QQ) || iQ(LQ)) && FQ.Tx(), {
            status: FQ.value,
            value: qQ.data
          }) : (MQ(wQ, {
            code: bQ.invalid_intersection_types
          }), pQ)
        };
        return wQ.common.async ? Promise.all([this._def.left._parseAsync({
          data: wQ.data,
          path: wQ.path,
          parent: wQ
        }), this._def.right._parseAsync({
          data: wQ.data,
          path: wQ.path,
          parent: wQ
        })]).then((QQ => {
          let [FQ, wQ] = QQ;
          return LQ(FQ, wQ)
        })) : LQ(this._def.left._parseSync({
          data: wQ.data,
          path: wQ.path,
          parent: wQ
        }), this._def.right._parseSync({
          data: wQ.data,
          path: wQ.path,
          parent: wQ
        }))
      }
    }
    vF.create = (QQ, FQ, wQ) => new vF({
      left: QQ,
      right: FQ,
      typeName: NF.ZodIntersection,
      ...IQ(wQ)
    });
    class mF extends UQ {
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ);
        if (wQ.parsedType !== uQ.array) return MQ(wQ, {
          code: bQ.invalid_type,
          expected: uQ.array,
          received: wQ.parsedType
        }), pQ;
        if (wQ.data.length < this._def.items.length) return MQ(wQ, {
          code: bQ.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), pQ;
        !this._def.rest && wQ.data.length > this._def.items.length && (MQ(wQ, {
          code: bQ.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), FQ.Tx());
        const LQ = [...wQ.data].map(((QQ, FQ) => {
          const LQ = this._def.items[FQ] || this._def.rest;
          return LQ ? LQ._parse(new sQ(wQ, QQ, wQ.path, FQ)) : null
        })).filter((QQ => !!QQ));
        return wQ.common.async ? Promise.all(LQ).then((QQ => GQ.mergeArray(FQ, QQ))) : GQ.mergeArray(FQ, LQ)
      }
      get items() {
        return this._def.items
      }
      rest(QQ) {
        return new mF({
          ...this._def,
          rest: QQ
        })
      }
    }
    mF.create = (QQ, FQ) => {
      if (!Array.isArray(QQ)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new mF({
        items: QQ,
        typeName: NF.ZodTuple,
        rest: null,
        ...IQ(FQ)
      })
    };
    class uF extends UQ {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ);
        if (wQ.parsedType !== uQ.object) return MQ(wQ, {
          code: bQ.invalid_type,
          expected: uQ.object,
          received: wQ.parsedType
        }), pQ;
        const LQ = [],
          qQ = this._def.keyType,
          oQ = this._def.valueType;
        for (const DQ in wQ.data) LQ.push({
          key: qQ._parse(new sQ(wQ, DQ, wQ.path, DQ)),
          value: oQ._parse(new sQ(wQ, wQ.data[DQ], wQ.path, DQ))
        });
        return wQ.common.async ? GQ.mergeObjectAsync(FQ, LQ) : GQ.mergeObjectSync(FQ, LQ)
      }
      get element() {
        return this._def.valueType
      }
      static create(QQ, FQ, wQ) {
        return new uF(FQ instanceof UQ ? {
          keyType: QQ,
          valueType: FQ,
          typeName: NF.ZodRecord,
          ...IQ(wQ)
        } : {
          keyType: fQ.create(),
          valueType: QQ,
          typeName: NF.ZodRecord,
          ...IQ(FQ)
        })
      }
    }
    class HF extends UQ {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ);
        if (wQ.parsedType !== uQ.map) return MQ(wQ, {
          code: bQ.invalid_type,
          expected: uQ.map,
          received: wQ.parsedType
        }), pQ;
        const LQ = this._def.keyType,
          qQ = this._def.valueType,
          oQ = [...wQ.data.entries()].map(((QQ, FQ) => {
            let [oQ, DQ] = QQ;
            return {
              key: LQ._parse(new sQ(wQ, oQ, wQ.path, [FQ, "key"])),
              value: qQ._parse(new sQ(wQ, DQ, wQ.path, [FQ, "value"]))
            }
          }));
        if (wQ.common.async) {
          const QQ = new Map;
          return Promise.resolve().then((async () => {
            for (const wQ of oQ) {
              const LQ = await wQ.key,
                qQ = await wQ.value;
              if ("aborted" === LQ.status || "aborted" === qQ.status) return pQ;
              "Tx" !== LQ.status && "Tx" !== qQ.status || FQ.Tx(), QQ.set(LQ.value, qQ.value)
            }
            return {
              status: FQ.value,
              value: QQ
            }
          }))
        } {
          const QQ = new Map;
          for (const wQ of oQ) {
            const LQ = wQ.key,
              qQ = wQ.value;
            if ("aborted" === LQ.status || "aborted" === qQ.status) return pQ;
            "Tx" !== LQ.status && "Tx" !== qQ.status || FQ.Tx(), QQ.set(LQ.value, qQ.value)
          }
          return {
            status: FQ.value,
            value: QQ
          }
        }
      }
    }
    HF.create = (QQ, FQ, wQ) => new HF({
      valueType: FQ,
      keyType: QQ,
      typeName: NF.ZodMap,
      ...IQ(wQ)
    });
    class bF extends UQ {
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ);
        if (wQ.parsedType !== uQ.set) return MQ(wQ, {
          code: bQ.invalid_type,
          expected: uQ.set,
          received: wQ.parsedType
        }), pQ;
        const LQ = this._def;
        null !== LQ.minSize && wQ.data.size < LQ.minSize.value && (MQ(wQ, {
          code: bQ.too_small,
          minimum: LQ.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: LQ.minSize.message
        }), FQ.Tx()), null !== LQ.maxSize && wQ.data.size > LQ.maxSize.value && (MQ(wQ, {
          code: bQ.too_big,
          maximum: LQ.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: LQ.maxSize.message
        }), FQ.Tx());
        const qQ = this._def.valueType;

        function oQ(QQ) {
          const wQ = new Set;
          for (const LQ of QQ) {
            if ("aborted" === LQ.status) return pQ;
            "Tx" === LQ.status && FQ.Tx(), wQ.add(LQ.value)
          }
          return {
            status: FQ.value,
            value: wQ
          }
        }
        const DQ = [...wQ.data.values()].map(((QQ, FQ) => qQ._parse(new sQ(wQ, QQ, wQ.path, FQ))));
        return wQ.common.async ? Promise.all(DQ).then((QQ => oQ(QQ))) : oQ(DQ)
      }
      min(QQ, FQ) {
        return new bF({
          ...this._def,
          minSize: {
            value: QQ,
            message: OQ.toString(FQ)
          }
        })
      }
      max(QQ, FQ) {
        return new bF({
          ...this._def,
          maxSize: {
            value: QQ,
            message: OQ.toString(FQ)
          }
        })
      }
      size(QQ, FQ) {
        return this.min(QQ, FQ).max(QQ, FQ)
      }
      nonempty(QQ) {
        return this.min(1, QQ)
      }
    }
    bF.create = (QQ, FQ) => new bF({
      valueType: QQ,
      minSize: null,
      maxSize: null,
      typeName: NF.ZodSet,
      ...IQ(FQ)
    });
    class YF extends UQ {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ);
        if (FQ.parsedType !== uQ.function) return MQ(FQ, {
          code: bQ.invalid_type,
          expected: uQ.function,
          received: FQ.parsedType
        }), pQ;

        function wQ(QQ, wQ) {
          return eQ({
            data: QQ,
            path: FQ.path,
            errorMaps: [FQ.common.contextualErrorMap, FQ.schemaErrorMap, tQ(), xQ].filter((QQ => !!QQ)),
            issueData: {
              code: bQ.invalid_arguments,
              argumentsError: wQ
            }
          })
        }

        function LQ(QQ, wQ) {
          return eQ({
            data: QQ,
            path: FQ.path,
            errorMaps: [FQ.common.contextualErrorMap, FQ.schemaErrorMap, tQ(), xQ].filter((QQ => !!QQ)),
            issueData: {
              code: bQ.invalid_return_type,
              returnTypeError: wQ
            }
          })
        }
        const qQ = {
            errorMap: FQ.common.contextualErrorMap
          },
          oQ = FQ.data;
        if (this._def.returns instanceof GF) {
          const QQ = this;
          return CQ((async function() {
            for (var FQ = arguments.length, DQ = new Array(FQ), kQ = 0; kQ < FQ; kQ++) DQ[kQ] = arguments[kQ];
            const vQ = new YQ([]),
              mQ = await QQ._def.args.parseAsync(DQ, qQ).catch((QQ => {
                throw vQ.addIssue(wQ(DQ, QQ)), vQ
              })),
              uQ = await Reflect.apply(oQ, this, mQ);
            return await QQ._def.returns._def.type.parseAsync(uQ, qQ).catch((QQ => {
              throw vQ.addIssue(LQ(uQ, QQ)), vQ
            }))
          }))
        } {
          const QQ = this;
          return CQ((function() {
            for (var FQ = arguments.length, DQ = new Array(FQ), kQ = 0; kQ < FQ; kQ++) DQ[kQ] = arguments[kQ];
            const vQ = QQ._def.args.safeParse(DQ, qQ);
            if (!vQ.success) throw new YQ([wQ(DQ, vQ.error)]);
            const mQ = Reflect.apply(oQ, this, vQ.data),
              uQ = QQ._def.returns.safeParse(mQ, qQ);
            if (!uQ.success) throw new YQ([LQ(mQ, uQ.error)]);
            return uQ.data
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
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return new YF({
          ...this._def,
          args: mF.create(FQ).rest(BQ.create())
        })
      }
      returns(QQ) {
        return new YF({
          ...this._def,
          returns: QQ
        })
      }
      implement(QQ) {
        return this.parse(QQ)
      }
      strictImplement(QQ) {
        return this.parse(QQ)
      }
      static create(QQ, FQ, wQ) {
        return new YF({
          args: QQ || mF.create([]).rest(BQ.create()),
          returns: FQ || BQ.create(),
          typeName: NF.ZodFunction,
          ...IQ(wQ)
        })
      }
    }
    class xF extends UQ {
      get schema() {
        return this._def.getter()
      }
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ);
        return this._def.getter()._parse({
          data: FQ.data,
          path: FQ.path,
          parent: FQ
        })
      }
    }
    xF.create = (QQ, FQ) => new xF({
      getter: QQ,
      typeName: NF.ZodLazy,
      ...IQ(FQ)
    });
    class AF extends UQ {
      _parse(QQ) {
        if (QQ.data !== this._def.value) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            received: FQ.data,
            code: bQ.invalid_literal,
            expected: this._def.value
          }), pQ
        }
        return {
          status: "valid",
          value: QQ.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function tF(QQ, FQ) {
      return new eF({
        values: QQ,
        typeName: NF.ZodEnum,
        ...IQ(FQ)
      })
    }
    AF.create = (QQ, FQ) => new AF({
      value: QQ,
      typeName: NF.ZodLiteral,
      ...IQ(FQ)
    });
    class eF extends UQ {
      _parse(QQ) {
        if ("string" !== typeof QQ.data) {
          const FQ = this._getOrReturnCtx(QQ),
            wQ = this._def.values;
          return MQ(FQ, {
            expected: kQ.joinValues(wQ),
            received: FQ.parsedType,
            code: bQ.invalid_type
          }), pQ
        }
        if (-1 === this._def.values.indexOf(QQ.data)) {
          const FQ = this._getOrReturnCtx(QQ),
            wQ = this._def.values;
          return MQ(FQ, {
            received: FQ.data,
            code: bQ.invalid_enum_value,
            options: wQ
          }), pQ
        }
        return CQ(QQ.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const QQ = {};
        for (const FQ of this._def.values) QQ[FQ] = FQ;
        return QQ
      }
      get Values() {
        const QQ = {};
        for (const FQ of this._def.values) QQ[FQ] = FQ;
        return QQ
      }
      get Enum() {
        const QQ = {};
        for (const FQ of this._def.values) QQ[FQ] = FQ;
        return QQ
      }
      extract(QQ) {
        return eF.create(QQ)
      }
      exclude(QQ) {
        return eF.create(this.options.filter((FQ => !QQ.includes(FQ))))
      }
    }
    eF.create = tF;
    class MF extends UQ {
      _parse(QQ) {
        const FQ = kQ.getValidEnumValues(this._def.values),
          wQ = this._getOrReturnCtx(QQ);
        if (wQ.parsedType !== uQ.string && wQ.parsedType !== uQ.number) {
          const QQ = kQ.objectValues(FQ);
          return MQ(wQ, {
            expected: kQ.joinValues(QQ),
            received: wQ.parsedType,
            code: bQ.invalid_type
          }), pQ
        }
        if (-1 === FQ.indexOf(QQ.data)) {
          const QQ = kQ.objectValues(FQ);
          return MQ(wQ, {
            received: wQ.data,
            code: bQ.invalid_enum_value,
            options: QQ
          }), pQ
        }
        return CQ(QQ.data)
      }
      get enum() {
        return this._def.values
      }
    }
    MF.create = (QQ, FQ) => new MF({
      values: QQ,
      typeName: NF.ZodNativeEnum,
      ...IQ(FQ)
    });
    class GF extends UQ {
      unwrap() {
        return this._def.type
      }
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ);
        if (FQ.parsedType !== uQ.promise && !1 === FQ.common.async) return MQ(FQ, {
          code: bQ.invalid_type,
          expected: uQ.promise,
          received: FQ.parsedType
        }), pQ;
        const wQ = FQ.parsedType === uQ.promise ? FQ.data : Promise.resolve(FQ.data);
        return CQ(wQ.then((QQ => this._def.type.parseAsync(QQ, {
          path: FQ.path,
          errorMap: FQ.common.contextualErrorMap
        }))))
      }
    }
    GF.create = (QQ, FQ) => new GF({
      type: QQ,
      typeName: NF.ZodPromise,
      ...IQ(FQ)
    });
    class pF extends UQ {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === NF.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ), LQ = this._def.effect || null, qQ = {
          addIssue: QQ => {
            MQ(wQ, QQ), QQ.fatal ? FQ.abort() : FQ.Tx()
          },
          get path() {
            return wQ.path
          }
        };
        if (qQ.addIssue = qQ.addIssue.bind(qQ), "preprocess" === LQ.type) {
          const QQ = LQ.transform(wQ.data, qQ);
          return wQ.common.issues.length ? {
            status: "Tx",
            value: wQ.data
          } : wQ.common.async ? Promise.resolve(QQ).then((QQ => this._def.schema._parseAsync({
            data: QQ,
            path: wQ.path,
            parent: wQ
          }))) : this._def.schema._parseSync({
            data: QQ,
            path: wQ.path,
            parent: wQ
          })
        }
        if ("refinement" === LQ.type) {
          const QQ = QQ => {
            const FQ = LQ.refinement(QQ, qQ);
            if (wQ.common.async) return Promise.resolve(FQ);
            if (FQ instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return QQ
          };
          if (!1 === wQ.common.async) {
            const LQ = this._def.schema._parseSync({
              data: wQ.data,
              path: wQ.path,
              parent: wQ
            });
            return "aborted" === LQ.status ? pQ : ("Tx" === LQ.status && FQ.Tx(), QQ(LQ.value), {
              status: FQ.value,
              value: LQ.value
            })
          }
          return this._def.schema._parseAsync({
            data: wQ.data,
            path: wQ.path,
            parent: wQ
          }).then((wQ => "aborted" === wQ.status ? pQ : ("Tx" === wQ.status && FQ.Tx(), QQ(wQ.value).then((() => ({
            status: FQ.value,
            value: wQ.value
          }))))))
        }
        if ("transform" === LQ.type) {
          if (!1 === wQ.common.async) {
            const QQ = this._def.schema._parseSync({
              data: wQ.data,
              path: wQ.path,
              parent: wQ
            });
            if (!WQ(QQ)) return QQ;
            const oQ = LQ.transform(QQ.value, qQ);
            if (oQ instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: FQ.value,
              value: oQ
            }
          }
          return this._def.schema._parseAsync({
            data: wQ.data,
            path: wQ.path,
            parent: wQ
          }).then((QQ => WQ(QQ) ? Promise.resolve(LQ.transform(QQ.value, qQ)).then((QQ => ({
            status: FQ.value,
            value: QQ
          }))) : QQ))
        }
        kQ.assertNever(LQ)
      }
    }
    pF.create = (QQ, FQ, wQ) => new pF({
      schema: QQ,
      typeName: NF.ZodEffects,
      effect: FQ,
      ...IQ(wQ)
    }), pF.createWithPreprocess = (QQ, FQ, wQ) => new pF({
      schema: FQ,
      effect: {
        type: "preprocess",
        transform: QQ
      },
      typeName: NF.ZodEffects,
      ...IQ(wQ)
    });
    class cF extends UQ {
      _parse(QQ) {
        return this._getType(QQ) === uQ.undefined ? CQ(void 0) : this._def.innerType._parse(QQ)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    cF.create = (QQ, FQ) => new cF({
      innerType: QQ,
      typeName: NF.ZodOptional,
      ...IQ(FQ)
    });
    class CF extends UQ {
      _parse(QQ) {
        return this._getType(QQ) === uQ.null ? CQ(null) : this._def.innerType._parse(QQ)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    CF.create = (QQ, FQ) => new CF({
      innerType: QQ,
      typeName: NF.ZodNullable,
      ...IQ(FQ)
    });
    class SF extends UQ {
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ);
        let wQ = FQ.data;
        return FQ.parsedType === uQ.undefined && (wQ = this._def.defaultValue()), this._def.innerType._parse({
          data: wQ,
          path: FQ.path,
          parent: FQ
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    SF.create = (QQ, FQ) => new SF({
      innerType: QQ,
      typeName: NF.ZodDefault,
      defaultValue: "function" === typeof FQ.default ? FQ.default : () => FQ.default,
      ...IQ(FQ)
    });
    class iF extends UQ {
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ), wQ = {
          ...FQ,
          common: {
            ...FQ.common,
            issues: []
          }
        }, LQ = this._def.innerType._parse({
          data: wQ.data,
          path: wQ.path,
          parent: {
            ...wQ
          }
        });
        return RQ(LQ) ? LQ.then((QQ => ({
          status: "valid",
          value: "valid" === QQ.status ? QQ.value : this._def.catchValue({
            get error() {
              return new YQ(wQ.common.issues)
            },
            input: wQ.data
          })
        }))) : {
          status: "valid",
          value: "valid" === LQ.status ? LQ.value : this._def.catchValue({
            get error() {
              return new YQ(wQ.common.issues)
            },
            input: wQ.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    iF.create = (QQ, FQ) => new iF({
      innerType: QQ,
      typeName: NF.ZodCatch,
      catchValue: "function" === typeof FQ.catch ? FQ.catch : () => FQ.catch,
      ...IQ(FQ)
    });
    class WF extends UQ {
      _parse(QQ) {
        if (this._getType(QQ) !== uQ.nan) {
          const FQ = this._getOrReturnCtx(QQ);
          return MQ(FQ, {
            code: bQ.invalid_type,
            expected: uQ.nan,
            received: FQ.parsedType
          }), pQ
        }
        return {
          status: "valid",
          value: QQ.data
        }
      }
    }
    WF.create = QQ => new WF({
      typeName: NF.ZodNaN,
      ...IQ(QQ)
    });
    const RF = Symbol("zod_brand");
    class OF extends UQ {
      _parse(QQ) {
        const {
          ctx: FQ
        } = this._processInputParams(QQ), wQ = FQ.data;
        return this._def.type._parse({
          data: wQ,
          path: FQ.path,
          parent: FQ
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class sF extends UQ {
      _parse(QQ) {
        const {
          status: FQ,
          ctx: wQ
        } = this._processInputParams(QQ);
        if (wQ.common.async) {
          return (async () => {
            const QQ = await this._def.in._parseAsync({
              data: wQ.data,
              path: wQ.path,
              parent: wQ
            });
            return "aborted" === QQ.status ? pQ : "Tx" === QQ.status ? (FQ.Tx(), cQ(QQ.value)) : this._def.out._parseAsync({
              data: QQ.value,
              path: wQ.path,
              parent: wQ
            })
          })()
        } {
          const QQ = this._def.in._parseSync({
            data: wQ.data,
            path: wQ.path,
            parent: wQ
          });
          return "aborted" === QQ.status ? pQ : "Tx" === QQ.status ? (FQ.Tx(), {
            status: "Tx",
            value: QQ.value
          }) : this._def.out._parseSync({
            data: QQ.value,
            path: wQ.path,
            parent: wQ
          })
        }
      }
      static create(QQ, FQ) {
        return new sF({
          in: QQ,
          out: FQ,
          typeName: NF.ZodPipeline
        })
      }
    }
    class rF extends UQ {
      _parse(QQ) {
        const FQ = this._def.innerType._parse(QQ);
        return WQ(FQ) && (FQ.value = Object.freeze(FQ.value)), FQ
      }
    }
    rF.create = (QQ, FQ) => new rF({
      innerType: QQ,
      typeName: NF.ZodReadonly,
      ...IQ(FQ)
    });
    const IF = function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        return QQ ? yQ.create().superRefine(((LQ, qQ) => {
          var oQ, DQ;
          if (!QQ(LQ)) {
            const QQ = "function" === typeof FQ ? FQ(LQ) : "string" === typeof FQ ? {
                message: FQ
              } : FQ,
              kQ = null === (DQ = null !== (oQ = QQ.fatal) && void 0 !== oQ ? oQ : wQ) || void 0 === DQ || DQ,
              vQ = "string" === typeof QQ ? {
                message: QQ
              } : QQ;
            qQ.addIssue({
              code: "custom",
              ...vQ,
              fatal: kQ
            })
          }
        })) : yQ.create()
      },
      UF = {
        object: LF.lazycreate
      };
    var NF;
    ! function(QQ) {
      QQ.ZodString = "ZodString", QQ.ZodNumber = "ZodNumber", QQ.ZodNaN = "ZodNaN", QQ.ZodBigInt = "ZodBigInt", QQ.ZodBoolean = "ZodBoolean", QQ.ZodDate = "ZodDate", QQ.ZodSymbol = "ZodSymbol", QQ.ZodUndefined = "ZodUndefined", QQ.ZodNull = "ZodNull", QQ.ZodAny = "ZodAny", QQ.ZodUnknown = "ZodUnknown", QQ.ZodNever = "ZodNever", QQ.ZodVoid = "ZodVoid", QQ.ZodArray = "ZodArray", QQ.ZodObject = "ZodObject", QQ.ZodUnion = "ZodUnion", QQ.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", QQ.ZodIntersection = "ZodIntersection", QQ.ZodTuple = "ZodTuple", QQ.ZodRecord = "ZodRecord", QQ.ZodMap = "ZodMap", QQ.ZodSet = "ZodSet", QQ.ZodFunction = "ZodFunction", QQ.ZodLazy = "ZodLazy", QQ.ZodLiteral = "ZodLiteral", QQ.ZodEnum = "ZodEnum", QQ.ZodEffects = "ZodEffects", QQ.ZodNativeEnum = "ZodNativeEnum", QQ.ZodOptional = "ZodOptional", QQ.ZodNullable = "ZodNullable", QQ.ZodDefault = "ZodDefault", QQ.ZodCatch = "ZodCatch", QQ.ZodPromise = "ZodPromise", QQ.ZodBranded = "ZodBranded", QQ.ZodPipeline = "ZodPipeline", QQ.ZodReadonly = "ZodReadonly"
    }(NF || (NF = {}));
    const TF = fQ.create,
      KF = hQ.create,
      zF = WF.create,
      lF = JQ.create,
      jF = EQ.create,
      aF = nQ.create,
      XF = gQ.create,
      fF = PQ.create,
      VF = ZQ.create,
      hF = yQ.create,
      JF = BQ.create,
      EF = dQ.create,
      nF = QF.create,
      gF = FF.create,
      PF = LF.create,
      ZF = LF.strictCreate,
      yF = qF.create,
      BF = DF.create,
      dF = vF.create,
      Qw = mF.create,
      Fw = uF.create,
      ww = HF.create,
      Lw = bF.create,
      qw = YF.create,
      ow = xF.create,
      Dw = AF.create,
      kw = eF.create,
      vw = MF.create,
      mw = GF.create,
      uw = pF.create,
      Hw = cF.create,
      bw = CF.create,
      Yw = pF.createWithPreprocess,
      xw = sF.create,
      Aw = {
        string: QQ => fQ.create({
          ...QQ,
          coerce: !0
        }),
        number: QQ => hQ.create({
          ...QQ,
          coerce: !0
        }),
        boolean: QQ => EQ.create({
          ...QQ,
          coerce: !0
        }),
        bigint: QQ => JQ.create({
          ...QQ,
          coerce: !0
        }),
        date: QQ => nQ.create({
          ...QQ,
          coerce: !0
        })
      },
      tw = pQ;
    var ew = Object.freeze({
        __proto__: null,
        defaultErrorMap: xQ,
        setErrorMap: function(QQ) {
          AQ = QQ
        },
        getErrorMap: tQ,
        makeIssue: eQ,
        EMPTY_PATH: [],
        addIssueToContext: MQ,
        ParseStatus: GQ,
        INVALID: pQ,
        DIRTY: cQ,
        OK: CQ,
        isAborted: SQ,
        isDirty: iQ,
        isValid: WQ,
        isAsync: RQ,
        get util() {
          return kQ
        },
        get objectUtil() {
          return vQ
        },
        ZodParsedType: uQ,
        getParsedType: HQ,
        ZodType: UQ,
        ZodString: fQ,
        ZodNumber: hQ,
        ZodBigInt: JQ,
        ZodBoolean: EQ,
        ZodDate: nQ,
        ZodSymbol: gQ,
        ZodUndefined: PQ,
        ZodNull: ZQ,
        ZodAny: yQ,
        ZodUnknown: BQ,
        ZodNever: dQ,
        ZodVoid: QF,
        ZodArray: FF,
        ZodObject: LF,
        ZodUnion: qF,
        ZodDiscriminatedUnion: DF,
        ZodIntersection: vF,
        ZodTuple: mF,
        ZodRecord: uF,
        ZodMap: HF,
        ZodSet: bF,
        ZodFunction: YF,
        ZodLazy: xF,
        ZodLiteral: AF,
        ZodEnum: eF,
        ZodNativeEnum: MF,
        ZodPromise: GF,
        ZodEffects: pF,
        ZodTransformer: pF,
        ZodOptional: cF,
        ZodNullable: CF,
        ZodDefault: SF,
        ZodCatch: iF,
        ZodNaN: WF,
        BRAND: RF,
        ZodBranded: OF,
        ZodPipeline: sF,
        ZodReadonly: rF,
        custom: IF,
        Schema: UQ,
        ZodSchema: UQ,
        late: UF,
        get ZodFirstPartyTypeKind() {
          return NF
        },
        coerce: Aw,
        any: hF,
        array: gF,
        bigint: lF,
        boolean: jF,
        date: aF,
        discriminatedUnion: BF,
        effect: uw,
        enum: kw,
        function: qw,
        instanceof: function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${QQ.name}`
          };
          return IF((FQ => FQ instanceof QQ), FQ)
        },
        intersection: dF,
        lazy: ow,
        literal: Dw,
        map: ww,
        nan: zF,
        nativeEnum: vw,
        never: EF,
        null: VF,
        nullable: bw,
        number: KF,
        object: PF,
        oboolean: () => jF().optional(),
        onumber: () => KF().optional(),
        optional: Hw,
        ostring: () => TF().optional(),
        pipeline: xw,
        preprocess: Yw,
        promise: mw,
        record: Fw,
        set: Lw,
        strictObject: ZF,
        string: TF,
        symbol: XF,
        transformer: uw,
        tuple: Qw,
        undefined: fF,
        union: yF,
        unknown: JF,
        void: nF,
        NEVER: tw,
        ZodIssueCode: bQ,
        quotelessJson: QQ => JSON.stringify(QQ, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: YQ
      }),
      Mw = {
        exports: {}
      };
    ! function(QQ) {
      var FQ = function(QQ) {
        var wQ = 1e7,
          LQ = 9007199254740992,
          qQ = bQ(LQ),
          oQ = "0123456789abcdefghijklmnopqrstuvwxyz",
          DQ = "function" === typeof BigInt;

        function kQ(QQ, FQ, wQ, LQ) {
          return "undefined" === typeof QQ ? kQ[0] : "undefined" !== typeof FQ && (10 !== +FQ || wQ) ? EQ(QQ, FQ, wQ, LQ) : yQ(QQ)
        }

        function vQ(QQ, FQ) {
          this.value = QQ, this.sign = FQ, this.isSmall = !1
        }

        function mQ(QQ) {
          this.value = QQ, this.sign = QQ < 0, this.isSmall = !0
        }

        function uQ(QQ) {
          this.value = QQ
        }

        function HQ(QQ) {
          return -LQ < QQ && QQ < LQ
        }

        function bQ(QQ) {
          return QQ < 1e7 ? [QQ] : QQ < 1e14 ? [QQ % 1e7, Math.floor(QQ / 1e7)] : [QQ % 1e7, Math.floor(QQ / 1e7) % 1e7, Math.floor(QQ / 1e14)]
        }

        function YQ(QQ) {
          xQ(QQ);
          var FQ = QQ.length;
          if (FQ < 4 && IQ(QQ, qQ) < 0) switch (FQ) {
            case 0:
              return 0;
            case 1:
              return QQ[0];
            case 2:
              return QQ[0] + QQ[1] * wQ;
            default:
              return QQ[0] + (QQ[1] + QQ[2] * wQ) * wQ
          }
          return QQ
        }

        function xQ(QQ) {
          for (var FQ = QQ.length; 0 === QQ[--FQ];);
          QQ.length = FQ + 1
        }

        function AQ(QQ) {
          for (var FQ = new Array(QQ), wQ = -1; ++wQ < QQ;) FQ[wQ] = 0;
          return FQ
        }

        function tQ(QQ) {
          return QQ > 0 ? Math.floor(QQ) : Math.ceil(QQ)
        }

        function eQ(QQ, FQ) {
          var LQ, qQ, oQ = QQ.length,
            DQ = FQ.length,
            kQ = new Array(oQ),
            vQ = 0,
            mQ = wQ;
          for (qQ = 0; qQ < DQ; qQ++) vQ = (LQ = QQ[qQ] + FQ[qQ] + vQ) >= mQ ? 1 : 0, kQ[qQ] = LQ - vQ * mQ;
          for (; qQ < oQ;) vQ = (LQ = QQ[qQ] + vQ) === mQ ? 1 : 0, kQ[qQ++] = LQ - vQ * mQ;
          return vQ > 0 && kQ.push(vQ), kQ
        }

        function MQ(QQ, FQ) {
          return QQ.length >= FQ.length ? eQ(QQ, FQ) : eQ(FQ, QQ)
        }

        function GQ(QQ, FQ) {
          var LQ, qQ, oQ = QQ.length,
            DQ = new Array(oQ),
            kQ = wQ;
          for (qQ = 0; qQ < oQ; qQ++) LQ = QQ[qQ] - kQ + FQ, FQ = Math.floor(LQ / kQ), DQ[qQ] = LQ - FQ * kQ, FQ += 1;
          for (; FQ > 0;) DQ[qQ++] = FQ % kQ, FQ = Math.floor(FQ / kQ);
          return DQ
        }

        function pQ(QQ, FQ) {
          var LQ, qQ, oQ = QQ.length,
            DQ = FQ.length,
            kQ = new Array(oQ),
            vQ = 0,
            mQ = wQ;
          for (LQ = 0; LQ < DQ; LQ++)(qQ = QQ[LQ] - vQ - FQ[LQ]) < 0 ? (qQ += mQ, vQ = 1) : vQ = 0, kQ[LQ] = qQ;
          for (LQ = DQ; LQ < oQ; LQ++) {
            if (!((qQ = QQ[LQ] - vQ) < 0)) {
              kQ[LQ++] = qQ;
              break
            }
            qQ += mQ, kQ[LQ] = qQ
          }
          for (; LQ < oQ; LQ++) kQ[LQ] = QQ[LQ];
          return xQ(kQ), kQ
        }

        function cQ(QQ, FQ, LQ) {
          var qQ, oQ, DQ = QQ.length,
            kQ = new Array(DQ),
            uQ = -FQ,
            HQ = wQ;
          for (qQ = 0; qQ < DQ; qQ++) oQ = QQ[qQ] + uQ, uQ = Math.floor(oQ / HQ), oQ %= HQ, kQ[qQ] = oQ < 0 ? oQ + HQ : oQ;
          return "number" === typeof(kQ = YQ(kQ)) ? (LQ && (kQ = -kQ), new mQ(kQ)) : new vQ(kQ, LQ)
        }

        function CQ(QQ, FQ) {
          var LQ, qQ, oQ, DQ, kQ = QQ.length,
            vQ = FQ.length,
            mQ = AQ(kQ + vQ),
            uQ = wQ;
          for (oQ = 0; oQ < kQ; ++oQ) {
            DQ = QQ[oQ];
            for (var HQ = 0; HQ < vQ; ++HQ) LQ = DQ * FQ[HQ] + mQ[oQ + HQ], qQ = Math.floor(LQ / uQ), mQ[oQ + HQ] = LQ - qQ * uQ, mQ[oQ + HQ + 1] += qQ
          }
          return xQ(mQ), mQ
        }

        function SQ(QQ, FQ) {
          var LQ, qQ, oQ = QQ.length,
            DQ = new Array(oQ),
            kQ = wQ,
            vQ = 0;
          for (qQ = 0; qQ < oQ; qQ++) LQ = QQ[qQ] * FQ + vQ, vQ = Math.floor(LQ / kQ), DQ[qQ] = LQ - vQ * kQ;
          for (; vQ > 0;) DQ[qQ++] = vQ % kQ, vQ = Math.floor(vQ / kQ);
          return DQ
        }

        function iQ(QQ, FQ) {
          for (var wQ = []; FQ-- > 0;) wQ.push(0);
          return wQ.concat(QQ)
        }

        function WQ(QQ, FQ) {
          var wQ = Math.max(QQ.length, FQ.length);
          if (wQ <= 30) return CQ(QQ, FQ);
          wQ = Math.ceil(wQ / 2);
          var LQ = QQ.slice(wQ),
            qQ = QQ.slice(0, wQ),
            oQ = FQ.slice(wQ),
            DQ = FQ.slice(0, wQ),
            kQ = WQ(qQ, DQ),
            vQ = WQ(LQ, oQ),
            mQ = WQ(MQ(qQ, LQ), MQ(DQ, oQ)),
            uQ = MQ(MQ(kQ, iQ(pQ(pQ(mQ, kQ), vQ), wQ)), iQ(vQ, 2 * wQ));
          return xQ(uQ), uQ
        }

        function RQ(QQ, FQ, LQ) {
          return new vQ(QQ < wQ ? SQ(FQ, QQ) : CQ(FQ, bQ(QQ)), LQ)
        }

        function OQ(QQ) {
          var FQ, LQ, qQ, oQ, DQ = QQ.length,
            kQ = AQ(DQ + DQ),
            vQ = wQ;
          for (qQ = 0; qQ < DQ; qQ++) {
            LQ = 0 - (oQ = QQ[qQ]) * oQ;
            for (var mQ = qQ; mQ < DQ; mQ++) FQ = oQ * QQ[mQ] * 2 + kQ[qQ + mQ] + LQ, LQ = Math.floor(FQ / vQ), kQ[qQ + mQ] = FQ - LQ * vQ;
            kQ[qQ + DQ] = LQ
          }
          return xQ(kQ), kQ
        }

        function sQ(QQ, FQ) {
          var LQ, qQ, oQ, DQ, kQ = QQ.length,
            vQ = AQ(kQ),
            mQ = wQ;
          for (oQ = 0, LQ = kQ - 1; LQ >= 0; --LQ) oQ = (DQ = oQ * mQ + QQ[LQ]) - (qQ = tQ(DQ / FQ)) * FQ, vQ[LQ] = 0 | qQ;
          return [vQ, 0 | oQ]
        }

        function rQ(QQ, FQ) {
          var LQ, qQ = yQ(FQ);
          if (DQ) return [new uQ(QQ.value / qQ.value), new uQ(QQ.value % qQ.value)];
          var oQ, HQ = QQ.value,
            eQ = qQ.value;
          if (0 === eQ) throw new Error("Cannot divide by zero");
          if (QQ.isSmall) return qQ.isSmall ? [new mQ(tQ(HQ / eQ)), new mQ(HQ % eQ)] : [kQ[0], QQ];
          if (qQ.isSmall) {
            if (1 === eQ) return [QQ, kQ[0]];
            if (-1 == eQ) return [QQ.mo(), kQ[0]];
            var MQ = Math.abs(eQ);
            if (MQ < wQ) {
              oQ = YQ((LQ = sQ(HQ, MQ))[0]);
              var GQ = LQ[1];
              return QQ.sign && (GQ = -GQ), "number" === typeof oQ ? (QQ.sign !== qQ.sign && (oQ = -oQ), [new mQ(oQ), new mQ(GQ)]) : [new vQ(oQ, QQ.sign !== qQ.sign), new mQ(GQ)]
            }
            eQ = bQ(MQ)
          }
          var cQ = IQ(HQ, eQ);
          if (-1 === cQ) return [kQ[0], QQ];
          if (0 === cQ) return [kQ[QQ.sign === qQ.sign ? 1 : -1], kQ[0]];
          LQ = HQ.length + eQ.length <= 200 ? function(QQ, FQ) {
            var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ = QQ.length,
              HQ = FQ.length,
              bQ = wQ,
              xQ = AQ(FQ.length),
              tQ = FQ[HQ - 1],
              eQ = Math.ceil(bQ / (2 * tQ)),
              MQ = SQ(QQ, eQ),
              GQ = SQ(FQ, eQ);
            for (MQ.length <= uQ && MQ.push(0), GQ.push(0), tQ = GQ[HQ - 1], qQ = uQ - HQ; qQ >= 0; qQ--) {
              for (LQ = bQ - 1, MQ[qQ + HQ] !== tQ && (LQ = Math.floor((MQ[qQ + HQ] * bQ + MQ[qQ + HQ - 1]) / tQ)), oQ = 0, DQ = 0, vQ = GQ.length, kQ = 0; kQ < vQ; kQ++) oQ += LQ * GQ[kQ], mQ = Math.floor(oQ / bQ), DQ += MQ[qQ + kQ] - (oQ - mQ * bQ), oQ = mQ, DQ < 0 ? (MQ[qQ + kQ] = DQ + bQ, DQ = -1) : (MQ[qQ + kQ] = DQ, DQ = 0);
              for (; 0 !== DQ;) {
                for (LQ -= 1, oQ = 0, kQ = 0; kQ < vQ; kQ++)(oQ += MQ[qQ + kQ] - bQ + GQ[kQ]) < 0 ? (MQ[qQ + kQ] = oQ + bQ, oQ = 0) : (MQ[qQ + kQ] = oQ, oQ = 1);
                DQ += oQ
              }
              xQ[qQ] = LQ
            }
            return MQ = sQ(MQ, eQ)[0], [YQ(xQ), YQ(MQ)]
          }(HQ, eQ) : function(QQ, FQ) {
            for (var LQ, qQ, oQ, DQ, kQ, vQ = QQ.length, mQ = FQ.length, uQ = [], HQ = [], bQ = wQ; vQ;)
              if (HQ.unshift(QQ[--vQ]), xQ(HQ), IQ(HQ, FQ) < 0) uQ.push(0);
              else {
                oQ = HQ[(qQ = HQ.length) - 1] * bQ + HQ[qQ - 2], DQ = FQ[mQ - 1] * bQ + FQ[mQ - 2], qQ > mQ && (oQ = (oQ + 1) * bQ), LQ = Math.ceil(oQ / DQ);
                do {
                  if (IQ(kQ = SQ(FQ, LQ), HQ) <= 0) break;
                  LQ--
                } while (LQ);
                uQ.push(LQ), HQ = pQ(HQ, kQ)
              } return uQ.reverse(), [YQ(uQ), YQ(HQ)]
          }(HQ, eQ), oQ = LQ[0];
          var CQ = QQ.sign !== qQ.sign,
            iQ = LQ[1],
            WQ = QQ.sign;
          return "number" === typeof oQ ? (CQ && (oQ = -oQ), oQ = new mQ(oQ)) : oQ = new vQ(oQ, CQ), "number" === typeof iQ ? (WQ && (iQ = -iQ), iQ = new mQ(iQ)) : iQ = new vQ(iQ, WQ), [oQ, iQ]
        }

        function IQ(QQ, FQ) {
          if (QQ.length !== FQ.length) return QQ.length > FQ.length ? 1 : -1;
          for (var wQ = QQ.length - 1; wQ >= 0; wQ--)
            if (QQ[wQ] !== FQ[wQ]) return QQ[wQ] > FQ[wQ] ? 1 : -1;
          return 0
        }

        function UQ(QQ) {
          var FQ = QQ.abs();
          return !FQ.isUnit() && (!!(FQ.equals(2) || FQ.equals(3) || FQ.equals(5)) || !(FQ.isEven() || FQ.isDivisibleBy(3) || FQ.isDivisibleBy(5)) && (!!FQ.lesser(49) || void 0))
        }

        function NQ(QQ, wQ) {
          for (var LQ, qQ, oQ, DQ = QQ.prev(), kQ = DQ, vQ = 0; kQ.isEven();) kQ = kQ.divide(2), vQ++;
          QQ: for (qQ = 0; qQ < wQ.length; qQ++)
            if (!QQ.lesser(wQ[qQ]) && !(oQ = FQ(wQ[qQ]).modPow(kQ, QQ)).isUnit() && !oQ.equals(DQ)) {
              for (LQ = vQ - 1; 0 != LQ; LQ--) {
                if ((oQ = oQ.square().mod(QQ)).isUnit()) return !1;
                if (oQ.equals(DQ)) continue QQ
              }
              return !1
            }
          return !0
        }
        vQ.prototype = Object.create(kQ.prototype), mQ.prototype = Object.create(kQ.prototype), uQ.prototype = Object.create(kQ.prototype), vQ.prototype.add = function(QQ) {
          var FQ = yQ(QQ);
          if (this.sign !== FQ.sign) return this.subtract(FQ.mo());
          var wQ = this.value,
            LQ = FQ.value;
          return FQ.isSmall ? new vQ(GQ(wQ, Math.abs(LQ)), this.sign) : new vQ(MQ(wQ, LQ), this.sign)
        }, vQ.prototype.plus = vQ.prototype.add, mQ.prototype.add = function(QQ) {
          var FQ = yQ(QQ),
            wQ = this.value;
          if (wQ < 0 !== FQ.sign) return this.subtract(FQ.mo());
          var LQ = FQ.value;
          if (FQ.isSmall) {
            if (HQ(wQ + LQ)) return new mQ(wQ + LQ);
            LQ = bQ(Math.abs(LQ))
          }
          return new vQ(GQ(LQ, Math.abs(wQ)), wQ < 0)
        }, mQ.prototype.plus = mQ.prototype.add, uQ.prototype.add = function(QQ) {
          return new uQ(this.value + yQ(QQ).value)
        }, uQ.prototype.plus = uQ.prototype.add, vQ.prototype.subtract = function(QQ) {
          var FQ = yQ(QQ);
          if (this.sign !== FQ.sign) return this.add(FQ.mo());
          var wQ = this.value,
            LQ = FQ.value;
          return FQ.isSmall ? cQ(wQ, Math.abs(LQ), this.sign) : function(QQ, FQ, wQ) {
            var LQ;
            return IQ(QQ, FQ) >= 0 ? LQ = pQ(QQ, FQ) : (LQ = pQ(FQ, QQ), wQ = !wQ), "number" === typeof(LQ = YQ(LQ)) ? (wQ && (LQ = -LQ), new mQ(LQ)) : new vQ(LQ, wQ)
          }(wQ, LQ, this.sign)
        }, vQ.prototype.minus = vQ.prototype.subtract, mQ.prototype.subtract = function(QQ) {
          var FQ = yQ(QQ),
            wQ = this.value;
          if (wQ < 0 !== FQ.sign) return this.add(FQ.mo());
          var LQ = FQ.value;
          return FQ.isSmall ? new mQ(wQ - LQ) : cQ(LQ, Math.abs(wQ), wQ >= 0)
        }, mQ.prototype.minus = mQ.prototype.subtract, uQ.prototype.subtract = function(QQ) {
          return new uQ(this.value - yQ(QQ).value)
        }, uQ.prototype.minus = uQ.prototype.subtract, vQ.prototype.mo = function() {
          return new vQ(this.value, !this.sign)
        }, mQ.prototype.mo = function() {
          var QQ = this.sign,
            FQ = new mQ(-this.value);
          return FQ.sign = !QQ, FQ
        }, uQ.prototype.mo = function() {
          return new uQ(-this.value)
        }, vQ.prototype.abs = function() {
          return new vQ(this.value, !1)
        }, mQ.prototype.abs = function() {
          return new mQ(Math.abs(this.value))
        }, uQ.prototype.abs = function() {
          return new uQ(this.value >= 0 ? this.value : -this.value)
        }, vQ.prototype.multiply = function(QQ) {
          var FQ, LQ, qQ, oQ = yQ(QQ),
            DQ = this.value,
            mQ = oQ.value,
            uQ = this.sign !== oQ.sign;
          if (oQ.isSmall) {
            if (0 === mQ) return kQ[0];
            if (1 === mQ) return this;
            if (-1 === mQ) return this.mo();
            if ((FQ = Math.abs(mQ)) < wQ) return new vQ(SQ(DQ, FQ), uQ);
            mQ = bQ(FQ)
          }
          return LQ = DQ.length, qQ = mQ.length, new vQ(-.012 * LQ - .012 * qQ + 15e-6 * LQ * qQ > 0 ? WQ(DQ, mQ) : CQ(DQ, mQ), uQ)
        }, vQ.prototype.times = vQ.prototype.multiply, mQ.prototype._multiplyBySmall = function(QQ) {
          return HQ(QQ.value * this.value) ? new mQ(QQ.value * this.value) : RQ(Math.abs(QQ.value), bQ(Math.abs(this.value)), this.sign !== QQ.sign)
        }, vQ.prototype._multiplyBySmall = function(QQ) {
          return 0 === QQ.value ? kQ[0] : 1 === QQ.value ? this : -1 === QQ.value ? this.mo() : RQ(Math.abs(QQ.value), this.value, this.sign !== QQ.sign)
        }, mQ.prototype.multiply = function(QQ) {
          return yQ(QQ)._multiplyBySmall(this)
        }, mQ.prototype.times = mQ.prototype.multiply, uQ.prototype.multiply = function(QQ) {
          return new uQ(this.value * yQ(QQ).value)
        }, uQ.prototype.times = uQ.prototype.multiply, vQ.prototype.square = function() {
          return new vQ(OQ(this.value), !1)
        }, mQ.prototype.square = function() {
          var QQ = this.value * this.value;
          return HQ(QQ) ? new mQ(QQ) : new vQ(OQ(bQ(Math.abs(this.value))), !1)
        }, uQ.prototype.square = function(QQ) {
          return new uQ(this.value * this.value)
        }, vQ.prototype.divmod = function(QQ) {
          var FQ = rQ(this, QQ);
          return {
            quotient: FQ[0],
            remainder: FQ[1]
          }
        }, uQ.prototype.divmod = mQ.prototype.divmod = vQ.prototype.divmod, vQ.prototype.divide = function(QQ) {
          return rQ(this, QQ)[0]
        }, uQ.prototype.over = uQ.prototype.divide = function(QQ) {
          return new uQ(this.value / yQ(QQ).value)
        }, mQ.prototype.over = mQ.prototype.divide = vQ.prototype.over = vQ.prototype.divide, vQ.prototype.mod = function(QQ) {
          return rQ(this, QQ)[1]
        }, uQ.prototype.mod = uQ.prototype.remainder = function(QQ) {
          return new uQ(this.value % yQ(QQ).value)
        }, mQ.prototype.remainder = mQ.prototype.mod = vQ.prototype.remainder = vQ.prototype.mod, vQ.prototype.pow = function(QQ) {
          var FQ, wQ, LQ, qQ = yQ(QQ),
            oQ = this.value,
            DQ = qQ.value;
          if (0 === DQ) return kQ[1];
          if (0 === oQ) return kQ[0];
          if (1 === oQ) return kQ[1];
          if (-1 === oQ) return qQ.isEven() ? kQ[1] : kQ[-1];
          if (qQ.sign) return kQ[0];
          if (!qQ.isSmall) throw new Error("The exponent " + qQ.toString() + " is too large.");
          if (this.isSmall && HQ(FQ = Math.pow(oQ, DQ))) return new mQ(tQ(FQ));
          for (wQ = this, LQ = kQ[1]; !0 & DQ && (LQ = LQ.times(wQ), --DQ), 0 !== DQ;) DQ /= 2, wQ = wQ.square();
          return LQ
        }, mQ.prototype.pow = vQ.prototype.pow, uQ.prototype.pow = function(QQ) {
          var FQ = yQ(QQ),
            wQ = this.value,
            LQ = FQ.value,
            qQ = BigInt(0),
            oQ = BigInt(1),
            DQ = BigInt(2);
          if (LQ === qQ) return kQ[1];
          if (wQ === qQ) return kQ[0];
          if (wQ === oQ) return kQ[1];
          if (wQ === BigInt(-1)) return FQ.isEven() ? kQ[1] : kQ[-1];
          if (FQ.isNegative()) return new uQ(qQ);
          for (var vQ = this, mQ = kQ[1];
            (LQ & oQ) === oQ && (mQ = mQ.times(vQ), --LQ), LQ !== qQ;) LQ /= DQ, vQ = vQ.square();
          return mQ
        }, vQ.prototype.modPow = function(QQ, FQ) {
          if (QQ = yQ(QQ), (FQ = yQ(FQ)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var wQ = kQ[1],
            LQ = this.mod(FQ);
          for (QQ.isNegative() && (QQ = QQ.multiply(kQ[-1]), LQ = LQ.modInv(FQ)); QQ.isPositive();) {
            if (LQ.isZero()) return kQ[0];
            QQ.isOdd() && (wQ = wQ.multiply(LQ).mod(FQ)), QQ = QQ.divide(2), LQ = LQ.square().mod(FQ)
          }
          return wQ
        }, uQ.prototype.modPow = mQ.prototype.modPow = vQ.prototype.modPow, vQ.prototype.compareAbs = function(QQ) {
          var FQ = yQ(QQ),
            wQ = this.value,
            LQ = FQ.value;
          return FQ.isSmall ? 1 : IQ(wQ, LQ)
        }, mQ.prototype.compareAbs = function(QQ) {
          var FQ = yQ(QQ),
            wQ = Math.abs(this.value),
            LQ = FQ.value;
          return FQ.isSmall ? wQ === (LQ = Math.abs(LQ)) ? 0 : wQ > LQ ? 1 : -1 : -1
        }, uQ.prototype.compareAbs = function(QQ) {
          var FQ = this.value,
            wQ = yQ(QQ).value;
          return (FQ = FQ >= 0 ? FQ : -FQ) === (wQ = wQ >= 0 ? wQ : -wQ) ? 0 : FQ > wQ ? 1 : -1
        }, vQ.prototype.compare = function(QQ) {
          if (QQ === 1 / 0) return -1;
          if (QQ === -1 / 0) return 1;
          var FQ = yQ(QQ),
            wQ = this.value,
            LQ = FQ.value;
          return this.sign !== FQ.sign ? FQ.sign ? 1 : -1 : FQ.isSmall ? this.sign ? -1 : 1 : IQ(wQ, LQ) * (this.sign ? -1 : 1)
        }, vQ.prototype.compareTo = vQ.prototype.compare, mQ.prototype.compare = function(QQ) {
          if (QQ === 1 / 0) return -1;
          if (QQ === -1 / 0) return 1;
          var FQ = yQ(QQ),
            wQ = this.value,
            LQ = FQ.value;
          return FQ.isSmall ? wQ == LQ ? 0 : wQ > LQ ? 1 : -1 : wQ < 0 !== FQ.sign ? wQ < 0 ? -1 : 1 : wQ < 0 ? 1 : -1
        }, mQ.prototype.compareTo = mQ.prototype.compare, uQ.prototype.compare = function(QQ) {
          if (QQ === 1 / 0) return -1;
          if (QQ === -1 / 0) return 1;
          var FQ = this.value,
            wQ = yQ(QQ).value;
          return FQ === wQ ? 0 : FQ > wQ ? 1 : -1
        }, uQ.prototype.compareTo = uQ.prototype.compare, vQ.prototype.equals = function(QQ) {
          return 0 === this.compare(QQ)
        }, uQ.prototype.eq = uQ.prototype.equals = mQ.prototype.eq = mQ.prototype.equals = vQ.prototype.eq = vQ.prototype.equals, vQ.prototype.notEquals = function(QQ) {
          return 0 !== this.compare(QQ)
        }, uQ.prototype.neq = uQ.prototype.notEquals = mQ.prototype.neq = mQ.prototype.notEquals = vQ.prototype.neq = vQ.prototype.notEquals, vQ.prototype.greater = function(QQ) {
          return this.compare(QQ) > 0
        }, uQ.prototype.gt = uQ.prototype.greater = mQ.prototype.gt = mQ.prototype.greater = vQ.prototype.gt = vQ.prototype.greater, vQ.prototype.lesser = function(QQ) {
          return this.compare(QQ) < 0
        }, uQ.prototype.lt = uQ.prototype.lesser = mQ.prototype.lt = mQ.prototype.lesser = vQ.prototype.lt = vQ.prototype.lesser, vQ.prototype.greaterOrEquals = function(QQ) {
          return this.compare(QQ) >= 0
        }, uQ.prototype.geq = uQ.prototype.greaterOrEquals = mQ.prototype.geq = mQ.prototype.greaterOrEquals = vQ.prototype.geq = vQ.prototype.greaterOrEquals, vQ.prototype.lesserOrEquals = function(QQ) {
          return this.compare(QQ) <= 0
        }, uQ.prototype.leq = uQ.prototype.lesserOrEquals = mQ.prototype.leq = mQ.prototype.lesserOrEquals = vQ.prototype.leq = vQ.prototype.lesserOrEquals, vQ.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, mQ.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, uQ.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, vQ.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, mQ.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, uQ.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, vQ.prototype.isPositive = function() {
          return !this.sign
        }, mQ.prototype.isPositive = function() {
          return this.value > 0
        }, uQ.prototype.isPositive = mQ.prototype.isPositive, vQ.prototype.isNegative = function() {
          return this.sign
        }, mQ.prototype.isNegative = function() {
          return this.value < 0
        }, uQ.prototype.isNegative = mQ.prototype.isNegative, vQ.prototype.isUnit = function() {
          return !1
        }, mQ.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, uQ.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, vQ.prototype.isZero = function() {
          return !1
        }, mQ.prototype.isZero = function() {
          return 0 === this.value
        }, uQ.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, vQ.prototype.isDivisibleBy = function(QQ) {
          var FQ = yQ(QQ);
          return !FQ.isZero() && (!!FQ.isUnit() || (0 === FQ.compareAbs(2) ? this.isEven() : this.mod(FQ).isZero()))
        }, uQ.prototype.isDivisibleBy = mQ.prototype.isDivisibleBy = vQ.prototype.isDivisibleBy, vQ.prototype.isPrime = function(wQ) {
          var LQ = UQ(this);
          if (LQ !== QQ) return LQ;
          var qQ = this.abs(),
            oQ = qQ.bitLength();
          if (oQ <= 64) return NQ(qQ, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var DQ = Math.log(2) * oQ.toJSNumber(), kQ = Math.ceil(!0 === wQ ? 2 * Math.pow(DQ, 2) : DQ), vQ = [], mQ = 0; mQ < kQ; mQ++) vQ.push(FQ(mQ + 2));
          return NQ(qQ, vQ)
        }, uQ.prototype.isPrime = mQ.prototype.isPrime = vQ.prototype.isPrime, vQ.prototype.isProbablePrime = function(wQ, LQ) {
          var qQ = UQ(this);
          if (qQ !== QQ) return qQ;
          for (var oQ = this.abs(), DQ = wQ === QQ ? 5 : wQ, kQ = [], vQ = 0; vQ < DQ; vQ++) kQ.push(FQ.randBetween(2, oQ.minus(2), LQ));
          return NQ(oQ, kQ)
        }, uQ.prototype.isProbablePrime = mQ.prototype.isProbablePrime = vQ.prototype.isProbablePrime, vQ.prototype.modInv = function(QQ) {
          for (var wQ, LQ, qQ, oQ = FQ.zero, DQ = FQ.one, kQ = yQ(QQ), vQ = this.abs(); !vQ.isZero();) wQ = kQ.divide(vQ), LQ = oQ, qQ = kQ, oQ = DQ, kQ = vQ, DQ = LQ.subtract(wQ.multiply(DQ)), vQ = qQ.subtract(wQ.multiply(vQ));
          if (!kQ.isUnit()) throw new Error(this.toString() + " and " + QQ.toString() + " are not co-prime");
          return -1 === oQ.compare(0) && (oQ = oQ.add(QQ)), this.isNegative() ? oQ.mo() : oQ
        }, uQ.prototype.modInv = mQ.prototype.modInv = vQ.prototype.modInv, vQ.prototype.next = function() {
          var QQ = this.value;
          return this.sign ? cQ(QQ, 1, this.sign) : new vQ(GQ(QQ, 1), this.sign)
        }, mQ.prototype.next = function() {
          var QQ = this.value;
          return QQ + 1 < LQ ? new mQ(QQ + 1) : new vQ(qQ, !1)
        }, uQ.prototype.next = function() {
          return new uQ(this.value + BigInt(1))
        }, vQ.prototype.prev = function() {
          var QQ = this.value;
          return this.sign ? new vQ(GQ(QQ, 1), !0) : cQ(QQ, 1, this.sign)
        }, mQ.prototype.prev = function() {
          var QQ = this.value;
          return QQ - 1 > -LQ ? new mQ(QQ - 1) : new vQ(qQ, !0)
        }, uQ.prototype.prev = function() {
          return new uQ(this.value - BigInt(1))
        };
        for (var TQ = [1]; 2 * TQ[TQ.length - 1] <= wQ;) TQ.push(2 * TQ[TQ.length - 1]);
        var KQ = TQ.length,
          zQ = TQ[KQ - 1];

        function lQ(QQ) {
          return Math.abs(QQ) <= wQ
        }

        function jQ(QQ, wQ, LQ) {
          wQ = yQ(wQ);
          for (var qQ = QQ.isNegative(), oQ = wQ.isNegative(), DQ = qQ ? QQ.not() : QQ, kQ = oQ ? wQ.not() : wQ, vQ = 0, mQ = 0, uQ = null, HQ = null, bQ = []; !DQ.isZero() || !kQ.isZero();) vQ = (uQ = rQ(DQ, zQ))[1].toJSNumber(), qQ && (vQ = zQ - 1 - vQ), mQ = (HQ = rQ(kQ, zQ))[1].toJSNumber(), oQ && (mQ = zQ - 1 - mQ), DQ = uQ[0], kQ = HQ[0], bQ.push(LQ(vQ, mQ));
          for (var YQ = 0 !== LQ(qQ ? 1 : 0, oQ ? 1 : 0) ? FQ(-1) : FQ(0), xQ = bQ.length - 1; xQ >= 0; xQ -= 1) YQ = YQ.multiply(zQ).add(FQ(bQ[xQ]));
          return YQ
        }
        vQ.prototype.shiftLeft = function(QQ) {
          var FQ = yQ(QQ).toJSNumber();
          if (!lQ(FQ)) throw new Error(String(FQ) + " is too large for shifting.");
          if (FQ < 0) return this.shiftRight(-FQ);
          var wQ = this;
          if (wQ.isZero()) return wQ;
          for (; FQ >= KQ;) wQ = wQ.multiply(zQ), FQ -= KQ - 1;
          return wQ.multiply(TQ[FQ])
        }, uQ.prototype.shiftLeft = mQ.prototype.shiftLeft = vQ.prototype.shiftLeft, vQ.prototype.shiftRight = function(QQ) {
          var FQ, wQ = yQ(QQ).toJSNumber();
          if (!lQ(wQ)) throw new Error(String(wQ) + " is too large for shifting.");
          if (wQ < 0) return this.shiftLeft(-wQ);
          for (var LQ = this; wQ >= KQ;) {
            if (LQ.isZero() || LQ.isNegative() && LQ.isUnit()) return LQ;
            LQ = (FQ = rQ(LQ, zQ))[1].isNegative() ? FQ[0].prev() : FQ[0], wQ -= KQ - 1
          }
          return (FQ = rQ(LQ, TQ[wQ]))[1].isNegative() ? FQ[0].prev() : FQ[0]
        }, uQ.prototype.shiftRight = mQ.prototype.shiftRight = vQ.prototype.shiftRight, vQ.prototype.not = function() {
          return this.mo().prev()
        }, uQ.prototype.not = mQ.prototype.not = vQ.prototype.not, vQ.prototype.and = function(QQ) {
          return jQ(this, QQ, (function(QQ, FQ) {
            return QQ & FQ
          }))
        }, uQ.prototype.and = mQ.prototype.and = vQ.prototype.and, vQ.prototype.or = function(QQ) {
          return jQ(this, QQ, (function(QQ, FQ) {
            return QQ | FQ
          }))
        }, uQ.prototype.or = mQ.prototype.or = vQ.prototype.or, vQ.prototype.xor = function(QQ) {
          return jQ(this, QQ, (function(QQ, FQ) {
            return QQ ^ FQ
          }))
        }, uQ.prototype.xor = mQ.prototype.xor = vQ.prototype.xor;
        var aQ = 1 << 30;

        function XQ(QQ) {
          var FQ = QQ.value,
            LQ = "number" === typeof FQ ? FQ | aQ : "bigint" === typeof FQ ? FQ | BigInt(aQ) : FQ[0] + FQ[1] * wQ | 1073758208;
          return LQ & -LQ
        }

        function fQ(QQ, wQ) {
          if (wQ.compareTo(QQ) <= 0) {
            var LQ = fQ(QQ, wQ.square(wQ)),
              qQ = LQ.p,
              oQ = LQ.e,
              DQ = qQ.multiply(wQ);
            return DQ.compareTo(QQ) <= 0 ? {
              p: DQ,
              e: 2 * oQ + 1
            } : {
              p: qQ,
              e: 2 * oQ
            }
          }
          return {
            p: FQ(1),
            e: 0
          }
        }

        function VQ(QQ, FQ) {
          return QQ = yQ(QQ), FQ = yQ(FQ), QQ.greater(FQ) ? QQ : FQ
        }

        function hQ(QQ, FQ) {
          return QQ = yQ(QQ), FQ = yQ(FQ), QQ.lesser(FQ) ? QQ : FQ
        }

        function JQ(QQ, FQ) {
          if (QQ = yQ(QQ).abs(), FQ = yQ(FQ).abs(), QQ.equals(FQ)) return QQ;
          if (QQ.isZero()) return FQ;
          if (FQ.isZero()) return QQ;
          for (var wQ, LQ, qQ = kQ[1]; QQ.isEven() && FQ.isEven();) wQ = hQ(XQ(QQ), XQ(FQ)), QQ = QQ.divide(wQ), FQ = FQ.divide(wQ), qQ = qQ.multiply(wQ);
          for (; QQ.isEven();) QQ = QQ.divide(XQ(QQ));
          do {
            for (; FQ.isEven();) FQ = FQ.divide(XQ(FQ));
            QQ.greater(FQ) && (LQ = FQ, FQ = QQ, QQ = LQ), FQ = FQ.subtract(QQ)
          } while (!FQ.isZero());
          return qQ.isUnit() ? QQ : QQ.multiply(qQ)
        }
        vQ.prototype.bitLength = function() {
          var QQ = this;
          return QQ.compareTo(FQ(0)) < 0 && (QQ = QQ.mo().subtract(FQ(1))), 0 === QQ.compareTo(FQ(0)) ? FQ(0) : FQ(fQ(QQ, FQ(2)).e).add(FQ(1))
        }, uQ.prototype.bitLength = mQ.prototype.bitLength = vQ.prototype.bitLength;
        var EQ = function(QQ, FQ, wQ, LQ) {
          wQ = wQ || oQ, QQ = String(QQ), LQ || (QQ = QQ.toLowerCase(), wQ = wQ.toLowerCase());
          var qQ, DQ = QQ.length,
            kQ = Math.abs(FQ),
            vQ = {};
          for (qQ = 0; qQ < wQ.length; qQ++) vQ[wQ[qQ]] = qQ;
          for (qQ = 0; qQ < DQ; qQ++) {
            if ("-" !== (HQ = QQ[qQ]) && (HQ in vQ && vQ[HQ] >= kQ)) {
              if ("1" === HQ && 1 === kQ) continue;
              throw new Error(HQ + " is not a valid digit in base " + FQ + ".")
            }
          }
          FQ = yQ(FQ);
          var mQ = [],
            uQ = "-" === QQ[0];
          for (qQ = uQ ? 1 : 0; qQ < QQ.length; qQ++) {
            var HQ;
            if ((HQ = QQ[qQ]) in vQ) mQ.push(yQ(vQ[HQ]));
            else {
              if ("<" !== HQ) throw new Error(HQ + " is not a valid character");
              var bQ = qQ;
              do {
                qQ++
              } while (">" !== QQ[qQ] && qQ < QQ.length);
              mQ.push(yQ(QQ.slice(bQ + 1, qQ)))
            }
          }
          return nQ(mQ, FQ, uQ)
        };

        function nQ(QQ, FQ, wQ) {
          var LQ, qQ = kQ[0],
            oQ = kQ[1];
          for (LQ = QQ.length - 1; LQ >= 0; LQ--) qQ = qQ.add(QQ[LQ].times(oQ)), oQ = oQ.times(FQ);
          return wQ ? qQ.mo() : qQ
        }

        function gQ(QQ, wQ) {
          if ((wQ = FQ(wQ)).isZero()) {
            if (QQ.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (wQ.equals(-1)) {
            if (QQ.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (QQ.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-QQ.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var LQ = Array.apply(null, Array(QQ.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return LQ.unshift([1]), {
              value: [].concat.apply([], LQ),
              isNegative: !1
            }
          }
          var qQ = !1;
          if (QQ.isNegative() && wQ.isPositive() && (qQ = !0, QQ = QQ.abs()), wQ.isUnit()) return QQ.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(QQ.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: qQ
          };
          for (var oQ, DQ = [], kQ = QQ; kQ.isNegative() || kQ.compareAbs(wQ) >= 0;) {
            oQ = kQ.divmod(wQ), kQ = oQ.quotient;
            var vQ = oQ.remainder;
            vQ.isNegative() && (vQ = wQ.minus(vQ).abs(), kQ = kQ.next()), DQ.push(vQ.toJSNumber())
          }
          return DQ.push(kQ.toJSNumber()), {
            value: DQ.reverse(),
            isNegative: qQ
          }
        }

        function PQ(QQ, FQ, wQ) {
          var LQ = gQ(QQ, FQ);
          return (LQ.isNegative ? "-" : "") + LQ.value.map((function(QQ) {
            return function(QQ, FQ) {
              return QQ < (FQ = FQ || oQ).length ? FQ[QQ] : "<" + QQ + ">"
            }(QQ, wQ)
          })).join("")
        }

        function ZQ(QQ) {
          if (HQ(+QQ)) {
            var FQ = +QQ;
            if (FQ === tQ(FQ)) return DQ ? new uQ(BigInt(FQ)) : new mQ(FQ);
            throw new Error("Invalid integer: " + QQ)
          }
          var wQ = "-" === QQ[0];
          wQ && (QQ = QQ.slice(1));
          var LQ = QQ.split(/e/i);
          if (LQ.length > 2) throw new Error("Invalid integer: " + LQ.join("e"));
          if (2 === LQ.length) {
            var qQ = LQ[1];
            if ("+" === qQ[0] && (qQ = qQ.slice(1)), (qQ = +qQ) !== tQ(qQ) || !HQ(qQ)) throw new Error("Invalid integer: " + qQ + " is not a valid exponent.");
            var oQ = LQ[0],
              kQ = oQ.indexOf(".");
            if (kQ >= 0 && (qQ -= oQ.length - kQ - 1, oQ = oQ.slice(0, kQ) + oQ.slice(kQ + 1)), qQ < 0) throw new Error("Cannot include negative exponent part for integers");
            QQ = oQ += new Array(qQ + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(QQ)) throw new Error("Invalid integer: " + QQ);
          if (DQ) return new uQ(BigInt(wQ ? "-" + QQ : QQ));
          for (var bQ = [], YQ = QQ.length, AQ = YQ - 7; YQ > 0;) bQ.push(+QQ.slice(AQ, YQ)), (AQ -= 7) < 0 && (AQ = 0), YQ -= 7;
          return xQ(bQ), new vQ(bQ, wQ)
        }

        function yQ(QQ) {
          return "number" === typeof QQ ? function(QQ) {
            if (DQ) return new uQ(BigInt(QQ));
            if (HQ(QQ)) {
              if (QQ !== tQ(QQ)) throw new Error(QQ + " is not an integer.");
              return new mQ(QQ)
            }
            return ZQ(QQ.toString())
          }(QQ) : "string" === typeof QQ ? ZQ(QQ) : "bigint" === typeof QQ ? new uQ(QQ) : QQ
        }
        vQ.prototype.toArray = function(QQ) {
          return gQ(this, QQ)
        }, mQ.prototype.toArray = function(QQ) {
          return gQ(this, QQ)
        }, uQ.prototype.toArray = function(QQ) {
          return gQ(this, QQ)
        }, vQ.prototype.toString = function(FQ, wQ) {
          if (FQ === QQ && (FQ = 10), 10 !== FQ) return PQ(this, FQ, wQ);
          for (var LQ, qQ = this.value, oQ = qQ.length, DQ = String(qQ[--oQ]); --oQ >= 0;) LQ = String(qQ[oQ]), DQ += "0000000".slice(LQ.length) + LQ;
          return (this.sign ? "-" : "") + DQ
        }, mQ.prototype.toString = function(FQ, wQ) {
          return FQ === QQ && (FQ = 10), 10 != FQ ? PQ(this, FQ, wQ) : String(this.value)
        }, uQ.prototype.toString = mQ.prototype.toString, uQ.prototype.toJSON = vQ.prototype.toJSON = mQ.prototype.toJSON = function() {
          return this.toString()
        }, vQ.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, vQ.prototype.toJSNumber = vQ.prototype.valueOf, mQ.prototype.valueOf = function() {
          return this.value
        }, mQ.prototype.toJSNumber = mQ.prototype.valueOf, uQ.prototype.valueOf = uQ.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var BQ = 0; BQ < 1e3; BQ++) kQ[BQ] = yQ(BQ), BQ > 0 && (kQ[-BQ] = yQ(-BQ));
        return kQ.one = kQ[1], kQ.zero = kQ[0], kQ.minusOne = kQ[-1], kQ.max = VQ, kQ.min = hQ, kQ.gcd = JQ, kQ.lcm = function(QQ, FQ) {
          return QQ = yQ(QQ).abs(), FQ = yQ(FQ).abs(), QQ.divide(JQ(QQ, FQ)).multiply(FQ)
        }, kQ.isInstance = function(QQ) {
          return QQ instanceof vQ || QQ instanceof mQ || QQ instanceof uQ
        }, kQ.randBetween = function(QQ, FQ, LQ) {
          QQ = yQ(QQ), FQ = yQ(FQ);
          var qQ = LQ || Math.random,
            oQ = hQ(QQ, FQ),
            DQ = VQ(QQ, FQ).subtract(oQ).add(1);
          if (DQ.isSmall) return oQ.add(Math.floor(qQ() * DQ));
          for (var vQ = gQ(DQ, wQ).value, mQ = [], uQ = !0, HQ = 0; HQ < vQ.length; HQ++) {
            var bQ = uQ ? vQ[HQ] : wQ,
              YQ = tQ(qQ() * bQ);
            mQ.push(YQ), YQ < bQ && (uQ = !1)
          }
          return oQ.add(kQ.bwQ(mQ, wQ, !1))
        }, kQ.bwQ = function(QQ, FQ, wQ) {
          return nQ(QQ.map(yQ), yQ(FQ || 10), wQ)
        }, kQ
      }();
      QQ.hasOwnProperty("exports") && (QQ.exports = FQ)
    }(Mw);
    var Gw = oQ(Mw.exports);

    function pw(QQ, FQ, wQ) {
      let LQ = 0;
      for (let qQ = 0; qQ < wQ; qQ++) {
        const wQ = QQ[FQ + qQ];
        if (void 0 === wQ) break;
        LQ += wQ * 16 ** qQ
      }
      return LQ
    }

    function Cw(QQ) {
      const FQ = [];
      for (let wQ = 0; wQ < QQ.length; wQ++) {
        let LQ = Number(QQ[wQ]);
        for (let QQ = 0; LQ || QQ < FQ.length; QQ++) LQ += 10 * (FQ[QQ] || 0), FQ[QQ] = LQ % 16, LQ = (LQ - FQ[QQ]) / 16
      }
      return FQ
    }
    class Sw {
      static fromString(QQ) {
        return new Sw(function(QQ) {
          const FQ = Cw(QQ),
            wQ = Array(4);
          for (let LQ = 0; LQ < 4; LQ++) wQ[3 - LQ] = pw(FQ, 4 * LQ, 4);
          return wQ
        }(QQ), QQ)
      }
      static fromBit(QQ) {
        const FQ = Array(4),
          wQ = Math.floor(QQ / 16);
        for (let LQ = 0; LQ < 4; LQ++) FQ[3 - LQ] = LQ === wQ ? 1 << QQ - 16 * wQ : 0;
        return new Sw(FQ)
      }
      constructor(QQ, FQ) {
        this.parts = QQ, this.str = FQ
      }
      and(QQ) {
        let {
          parts: FQ
        } = QQ;
        return new Sw(this.parts.map(((QQ, wQ) => QQ & FQ[wQ])))
      }
      or(QQ) {
        let {
          parts: FQ
        } = QQ;
        return new Sw(this.parts.map(((QQ, wQ) => QQ | FQ[wQ])))
      }
      xor(QQ) {
        let {
          parts: FQ
        } = QQ;
        return new Sw(this.parts.map(((QQ, wQ) => QQ ^ FQ[wQ])))
      }
      not() {
        return new Sw(this.parts.map((QQ => ~QQ)))
      }
      equals(QQ) {
        let {
          parts: FQ
        } = QQ;
        return this.parts.every(((QQ, wQ) => QQ === FQ[wQ]))
      }
      toString() {
        if (null != this.str) return this.str;
        const QQ = new Array(16);
        return this.parts.forEach(((FQ, wQ) => {
          const LQ = Cw(FQ.toString());
          for (let qQ = 0; qQ < 4; qQ++) QQ[qQ + 4 * wQ] = LQ[3 - qQ] || 0
        })), this.str = Gw.bwQ(QQ, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const iw = function() {
      try {
        return BigInt, !0
      } catch (QQ) {
        return !1
      }
    }();
    iw && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Ww = {},
      Rw = iw ? function(QQ) {
        return BigInt(QQ)
      } : function(QQ) {
        return QQ instanceof Sw ? QQ : ("number" === typeof QQ && (QQ = QQ.toString()), null != Ww[QQ] || (Ww[QQ] = Sw.fromString(QQ)), Ww[QQ])
      },
      Ow = Rw(0),
      sw = iw ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ow)
      } : function() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ow;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow).and(QQ)
      },
      rw = iw ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ow)
      } : function() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ow;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow).or(QQ)
      },
      Iw = iw ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ow)
      } : function() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ow;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow).xor(QQ)
      },
      Uw = iw ? function(QQ, FQ) {
        return QQ === FQ
      } : function(QQ, FQ) {
        return null == QQ || null == FQ ? QQ == FQ : QQ.equals(FQ)
      };
    var Nw, Tw, Kw, zw, lw = {
      combine: function() {
        let QQ = arguments.length <= 0 ? void 0 : arguments[0];
        for (let FQ = 1; FQ < arguments.length; FQ++) QQ = rw(QQ, FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ]);
        return QQ
      },
      add: function(QQ, FQ) {
        return FQ === Ow ? QQ : rw(QQ, FQ)
      },
      remove: function(QQ, FQ) {
        return FQ === Ow ? QQ : Iw(QQ, sw(QQ, FQ))
      },
      filter: sw,
      invert: iw ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ow).not()
      },
      has: function(QQ, FQ) {
        return Uw(sw(QQ, FQ), FQ)
      },
      hasAny: function(QQ, FQ) {
        return !Uw(sw(QQ, FQ), Ow)
      },
      equals: Uw,
      deserialize: Rw,
      getFlag: iw ? function(QQ) {
        return BigInt(1) << BigInt(QQ)
      } : function(QQ) {
        return Sw.fromBit(QQ)
      }
    };
    ! function(QQ) {
      QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITED = 4002] = "RATELIMITED", QQ[QQ.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", QQ[QQ.INVALID_VERSION = 4004] = "INVALID_VERSION", QQ[QQ.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Nw || (Nw = {})),
    function(QQ) {
      QQ[QQ.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", QQ[QQ.INVALID_COMMAND = 4002] = "INVALID_COMMAND", QQ[QQ.INVALID_EVENT = 4004] = "INVALID_EVENT", QQ[QQ.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Tw || (Tw = {})),
    function(QQ) {
      QQ.LANDSCAPE = "landscape", QQ.PORTRAIT = "portrait"
    }(Kw || (Kw = {})),
    function(QQ) {
      QQ.MOBILE = "mobile", QQ.DESKTOP = "desktop"
    }(zw || (zw = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: lw.getFlag(0),
      ADMINISTRATOR: lw.getFlag(3)
    });

    function jw(QQ) {
      return Yw((FQ => {
        var wQ;
        const [LQ] = null !== (wQ = Object.entries(QQ).find((QQ => {
          let [, wQ] = QQ;
          return wQ === FQ
        }))) && void 0 !== wQ ? wQ : [];
        return null != FQ && void 0 === LQ ? QQ.UNHANDLED : FQ
      }), TF().or(KF()))
    }
    const aw = ew.object({
        image_url: ew.string()
      }),
      Xw = ew.object({
        mediaUrl: ew.string().max(1024)
      }),
      fw = ew.object({
        access_token: ew.union([ew.string(), ew.null()]).optional()
      }),
      Vw = ew.object({
        access_token: ew.string(),
        user: ew.object({
          username: ew.string(),
          discriminator: ew.string(),
          id: ew.string(),
          avatar: ew.union([ew.string(), ew.null()]).optional(),
          public_flags: ew.number(),
          global_name: ew.union([ew.string(), ew.null()]).optional()
        }),
        scopes: ew.array(function(QQ) {
          const FQ = IF().transform((FQ => {
            const wQ = QQ.safeParse(FQ);
            return wQ.success ? wQ.data : QQ._def.defaultValue()
          }));
          return FQ.overlayType = QQ, FQ
        }(ew.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(ew.literal(-1)).default(-1))),
        expires: ew.string(),
        application: ew.object({
          description: ew.string(),
          icon: ew.union([ew.string(), ew.null()]).optional(),
          id: ew.string(),
          rpc_origins: ew.array(ew.string()).optional(),
          name: ew.string()
        })
      }),
      hw = ew.object({
        participants: ew.array(ew.object({
          id: ew.string(),
          username: ew.string(),
          global_name: ew.union([ew.string(), ew.null()]).optional(),
          discriminator: ew.string(),
          avatar: ew.union([ew.string(), ew.null()]).optional(),
          flags: ew.number(),
          bot: ew.boolean(),
          avatar_decoration_data: ew.union([ew.object({
            asset: ew.string(),
            skuId: ew.string().optional()
          }), ew.null()]).optional(),
          premium_type: ew.union([ew.number(), ew.null()]).optional(),
          nickname: ew.string().optional()
        }))
      });
    var Jw;
    ! function(QQ) {
      QQ.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", QQ.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", QQ.AUTHENTICATE = "AUTHENTICATE", QQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Jw || (Jw = {}));
    const Ew = ew.object({}).optional().nullable(),
      nw = ew.void(),
      gw = {
        [Jw.INITIATE_IMAGE_UPLOAD]: {
          request: nw,
          response: aw
        },
        [Jw.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Xw,
          response: Ew
        },
        [Jw.AUTHENTICATE]: {
          request: fw,
          response: Vw
        },
        [Jw.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: nw,
          response: hw
        }
      },
      Pw = "DISPATCH";
    var Zw;
    ! function(QQ) {
      QQ.AUTHORIZE = "AUTHORIZE", QQ.AUTHENTICATE = "AUTHENTICATE", QQ.GET_GUILDS = "GET_GUILDS", QQ.GET_GUILD = "GET_GUILD", QQ.GET_CHANNEL = "GET_CHANNEL", QQ.GET_CHANNELS = "GET_CHANNELS", QQ.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", QQ.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", QQ.SUBSCRIBE = "SUBSCRIBE", QQ.UNSUBSCRIBE = "UNSUBSCRIBE", QQ.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", QQ.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", QQ.SET_ACTIVITY = "SET_ACTIVITY", QQ.GET_SKUS = "GET_SKUS", QQ.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", QQ.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", QQ.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", QQ.START_PURCHASE = "START_PURCHASE", QQ.SET_CONFIG = "SET_CONFIG", QQ.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", QQ.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", QQ.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", QQ.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", QQ.CAPTURE_LOG = "CAPTURE_LOG", QQ.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", QQ.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", QQ.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", QQ.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", QQ.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", QQ.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", QQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Zw || (Zw = {}));
    const yw = PF({
        cmd: TF(),
        data: JF(),
        evt: VF(),
        nonce: TF()
      }).passthrough(),
      Bw = (jw(Object.assign(Object.assign({}, Vw.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), PF({
        id: TF(),
        username: TF(),
        discriminator: TF(),
        global_name: TF().optional().nullable(),
        avatar: TF().optional().nullable(),
        avatar_decoration_data: PF({
          asset: TF(),
          sku_id: TF().optional()
        }).nullable(),
        bot: jF(),
        flags: KF().optional().nullable(),
        premium_type: KF().optional().nullable()
      })),
      dw = PF({
        user: Bw,
        nick: TF().optional().nullable(),
        roles: gF(TF()),
        joined_at: TF(),
        deaf: jF(),
        mute: jF()
      }),
      QL = PF({
        id: TF(),
        name: TF().optional().nullable(),
        roles: gF(TF()).optional().nullable(),
        user: Bw.optional().nullable(),
        require_colons: jF().optional().nullable(),
        managed: jF().optional().nullable(),
        animated: jF().optional().nullable(),
        available: jF().optional().nullable()
      }),
      FL = PF({
        mute: jF(),
        deaf: jF(),
        self_mute: jF(),
        self_deaf: jF(),
        suppress: jF()
      }),
      wL = PF({
        mute: jF(),
        nick: TF(),
        user: Bw,
        voice_state: FL,
        volume: KF()
      }),
      LL = jw({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      qL = PF({
        name: TF(),
        type: KF(),
        url: TF().optional().nullable(),
        created_at: KF().optional().nullable(),
        timestamps: PF({
          start: KF(),
          end: KF()
        }).partial().optional().nullable(),
        application_id: TF().optional().nullable(),
        details: TF().optional().nullable(),
        state: TF().optional().nullable(),
        emoji: QL.optional().nullable(),
        party: PF({
          id: TF().optional().nullable(),
          size: gF(KF()).optional().nullable()
        }).optional().nullable(),
        assets: PF({
          large_image: TF().nullable(),
          large_text: TF().nullable(),
          small_image: TF().nullable(),
          small_text: TF().nullable()
        }).partial().optional().nullable(),
        secrets: PF({
          join: TF(),
          match: TF()
        }).partial().optional().nullable(),
        instance: jF().optional().nullable(),
        flags: KF().optional().nullable()
      }),
      oL = PF({
        id: TF(),
        type: jw({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: TF(),
        deny: TF()
      }),
      DL = {
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
      kL = PF({
        id: TF(),
        type: jw(DL),
        guild_id: TF().optional().nullable(),
        position: KF().optional().nullable(),
        permission_overwrites: gF(oL).optional().nullable(),
        name: TF().optional().nullable(),
        topic: TF().optional().nullable(),
        nsfw: jF().optional().nullable(),
        last_message_id: TF().optional().nullable(),
        bitrate: KF().optional().nullable(),
        user_limit: KF().optional().nullable(),
        rate_limit_per_user: KF().optional().nullable(),
        recipients: gF(Bw).optional().nullable(),
        icon: TF().optional().nullable(),
        owner_id: TF().optional().nullable(),
        application_id: TF().optional().nullable(),
        parent_id: TF().optional().nullable(),
        last_pin_timestamp: TF().optional().nullable()
      }),
      vL = PF({
        user: Bw,
        guild_id: TF(),
        status: LL,
        activities: gF(qL),
        client_status: PF({
          desktop: LL,
          mobile: LL,
          web: LL
        }).partial()
      }),
      mL = PF({
        id: TF(),
        name: TF(),
        color: KF(),
        hoist: jF(),
        position: KF(),
        permissions: TF(),
        managed: jF(),
        mentionable: jF()
      }),
      uL = (PF({
        id: TF(),
        name: TF(),
        owner_id: TF(),
        icon: TF().nullable(),
        icon_hash: TF().optional().nullable(),
        splash: TF().nullable(),
        discovery_splash: TF().nullable(),
        owner: jF().optional().nullable(),
        permissions: TF().optional().nullable(),
        region: TF(),
        afk_channel_id: TF().nullable(),
        afk_timeout: KF(),
        widget_enabled: jF().optional().nullable(),
        widget_channel_id: TF().optional().nullable(),
        verification_level: KF(),
        default_message_notifications: KF(),
        explicit_content_filter: KF(),
        roles: gF(mL),
        emojis: gF(QL),
        features: gF(TF()),
        mfa_level: KF(),
        application_id: TF().nullable(),
        system_channel_id: TF().nullable(),
        system_channel_flags: KF(),
        rules_channel_id: TF().nullable(),
        joined_at: TF().optional().nullable(),
        large: jF().optional().nullable(),
        unavailable: jF().optional().nullable(),
        member_count: KF().optional().nullable(),
        voice_states: gF(FL).optional().nullable(),
        members: gF(dw).optional().nullable(),
        channels: gF(kL).optional().nullable(),
        presences: gF(vL).optional().nullable(),
        max_presences: KF().optional().nullable(),
        max_members: KF().optional().nullable(),
        vanity_url_code: TF().nullable(),
        description: TF().nullable(),
        banner: TF().nullable(),
        premium_tier: KF(),
        premium_subscription_count: KF().optional().nullable(),
        preferred_locale: TF(),
        public_updates_channel_id: TF().nullable(),
        max_video_channel_users: KF().optional().nullable(),
        approximate_member_count: KF().optional().nullable(),
        approximate_presence_count: KF().optional().nullable()
      }), PF({
        id: TF(),
        guild_id: TF(),
        type: KF(),
        name: TF()
      })),
      HL = PF({
        id: TF(),
        filename: TF(),
        size: KF(),
        url: TF(),
        proxy_url: TF(),
        height: KF().optional().nullable(),
        width: KF().optional().nullable()
      }),
      bL = PF({
        text: TF(),
        icon_url: TF().optional().nullable(),
        proxy_icon_url: TF().optional().nullable()
      }),
      YL = PF({
        url: TF().optional().nullable(),
        proxy_url: TF().optional().nullable(),
        height: KF().optional().nullable(),
        width: KF().optional().nullable()
      }),
      xL = YL.omit({
        proxy_url: !0
      }),
      AL = PF({
        name: TF().optional().nullable(),
        url: TF().optional().nullable()
      }),
      tL = PF({
        name: TF().optional().nullable(),
        url: TF().optional().nullable(),
        icon_url: TF().optional().nullable(),
        proxy_icon_url: TF().optional().nullable()
      }),
      eL = PF({
        name: TF(),
        value: TF(),
        inline: jF()
      }),
      ML = PF({
        title: TF().optional().nullable(),
        type: TF().optional().nullable(),
        description: TF().optional().nullable(),
        url: TF().optional().nullable(),
        timestamp: TF().optional().nullable(),
        color: KF().optional().nullable(),
        footer: bL.optional().nullable(),
        image: YL.optional().nullable(),
        thumbnail: YL.optional().nullable(),
        video: xL.optional().nullable(),
        provider: AL.optional().nullable(),
        author: tL.optional().nullable(),
        fields: gF(eL).optional().nullable()
      }),
      GL = PF({
        count: KF(),
        me: jF(),
        emoji: QL
      }),
      pL = PF({
        type: KF(),
        party_id: TF().optional().nullable()
      }),
      cL = PF({
        id: TF(),
        cover_image: TF().optional().nullable(),
        description: TF(),
        icon: TF().optional().nullable(),
        name: TF()
      }),
      CL = PF({
        message_id: TF().optional().nullable(),
        channel_id: TF().optional().nullable(),
        guild_id: TF().optional().nullable()
      }),
      SL = PF({
        id: TF(),
        channel_id: TF(),
        guild_id: TF().optional().nullable(),
        author: Bw.optional().nullable(),
        member: dw.optional().nullable(),
        content: TF(),
        timestamp: TF(),
        edited_timestamp: TF().optional().nullable(),
        tts: jF(),
        mention_everyone: jF(),
        mentions: gF(Bw),
        mention_roles: gF(TF()),
        mention_channels: gF(uL),
        attachments: gF(HL),
        embeds: gF(ML),
        reactions: gF(GL).optional().nullable(),
        nonce: yF([TF(), KF()]).optional().nullable(),
        pinned: jF(),
        webhook_id: TF().optional().nullable(),
        type: KF(),
        activity: pL.optional().nullable(),
        application: cL.optional().nullable(),
        message_reference: CL.optional().nullable(),
        flags: KF().optional().nullable(),
        stickers: gF(JF()).optional().nullable(),
        referenced_message: JF().optional().nullable()
      }),
      iL = PF({
        id: TF(),
        name: TF()
      }),
      WL = PF({
        type: jw({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: KF(),
        name: TF()
      }),
      RL = PF({
        type: jw({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: jF(),
        threshold: KF(),
        shortcut: gF(WL),
        delay: KF()
      }),
      OL = PF({
        device_id: TF(),
        volume: KF(),
        available_devices: gF(iL)
      }),
      sL = (PF({
        type: jw({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: TF(),
        vendor: PF({
          name: TF(),
          url: TF()
        }),
        model: PF({
          name: TF(),
          url: TF()
        }),
        related: gF(TF()),
        echo_cancellation: jF().optional().nullable(),
        noise_suppression: jF().optional().nullable(),
        automatic_gain_control: jF().optional().nullable(),
        hardware_mute: jF().optional().nullable()
      }), PF({
        id: TF(),
        name: TF(),
        type: jw({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: PF({
          amount: KF(),
          currency: TF()
        }),
        application_id: TF(),
        flags: KF(),
        release_date: TF().nullable()
      })),
      rL = PF({
        id: TF(),
        sku_id: TF(),
        application_id: TF(),
        user_id: TF(),
        gift_code_flags: KF(),
        type: jw({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: TF().optional().nullable(),
        branches: gF(TF()).optional().nullable(),
        starts_at: TF().optional().nullable(),
        ends_at: TF().optional().nullable(),
        parent_id: TF().optional().nullable(),
        consumed: jF().optional().nullable(),
        deleted: jF().optional().nullable(),
        gift_code_batch_id: TF().optional().nullable()
      }),
      IL = (jw({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), jw({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      UL = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      NL = (jw(UL), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      TL = (jw(NL), "ERROR");
    var KL;
    ! function(QQ) {
      QQ.READY = "READY", QQ.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", QQ.SPEAKING_START = "SPEAKING_START", QQ.SPEAKING_STOP = "SPEAKING_STOP", QQ.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", QQ.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", QQ.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", QQ.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", QQ.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", QQ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(KL || (KL = {}));
    const zL = yw.extend({
        evt: vw(KL),
        nonce: TF().nullable(),
        cmd: Dw(Pw),
        data: PF({}).passthrough()
      }),
      lL = yw.extend({
        evt: Dw(TL),
        data: PF({
          code: KF(),
          message: TF().optional()
        }).passthrough(),
        cmd: vw(Zw),
        nonce: TF().nullable()
      }),
      jL = zL.extend({
        evt: TF()
      }),
      aL = yF([zL, jL, lL]);
    const XL = {
      [KL.READY]: {
        payload: zL.extend({
          evt: Dw(KL.READY),
          data: PF({
            v: KF(),
            config: PF({
              cdn_host: TF().optional(),
              api_endpoint: TF(),
              environment: TF()
            }),
            user: PF({
              id: TF(),
              username: TF(),
              discriminator: TF(),
              avatar: TF().optional()
            }).optional()
          })
        })
      },
      [KL.VOICE_STATE_UPDATE]: {
        payload: zL.extend({
          evt: Dw(KL.VOICE_STATE_UPDATE),
          data: wL
        }),
        subscribeArgs: PF({
          channel_id: TF()
        })
      },
      [KL.SPEAKING_START]: {
        payload: zL.extend({
          evt: Dw(KL.SPEAKING_START),
          data: PF({
            lobby_id: TF().optional(),
            channel_id: TF().optional(),
            user_id: TF()
          })
        }),
        subscribeArgs: PF({
          lobby_id: TF().nullable().optional(),
          channel_id: TF().nullable().optional()
        })
      },
      [KL.SPEAKING_STOP]: {
        payload: zL.extend({
          evt: Dw(KL.SPEAKING_STOP),
          data: PF({
            lobby_id: TF().optional(),
            channel_id: TF().optional(),
            user_id: TF()
          })
        }),
        subscribeArgs: PF({
          lobby_id: TF().nullable().optional(),
          channel_id: TF().nullable().optional()
        })
      },
      [KL.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: zL.extend({
          evt: Dw(KL.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: PF({
            layout_mode: jw(NL)
          })
        })
      },
      [KL.ORIENTATION_UPDATE]: {
        payload: zL.extend({
          evt: Dw(KL.ORIENTATION_UPDATE),
          data: PF({
            screen_orientation: jw(UL),
            orientation: vw(Kw)
          })
        })
      },
      [KL.CURRENT_USER_UPDATE]: {
        payload: zL.extend({
          evt: Dw(KL.CURRENT_USER_UPDATE),
          data: Bw
        })
      },
      [KL.ENTITLEMENT_CREATE]: {
        payload: zL.extend({
          evt: Dw(KL.ENTITLEMENT_CREATE),
          data: PF({
            entitlement: rL
          })
        })
      },
      [KL.THERMAL_STATE_UPDATE]: {
        payload: zL.extend({
          evt: Dw(KL.THERMAL_STATE_UPDATE),
          data: PF({
            thermal_state: IL
          })
        })
      },
      [KL.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: zL.extend({
          evt: Dw(KL.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: PF({
            participants: hw.shape.participants
          })
        })
      }
    };
    const fL = PF({}).nullable(),
      VL = PF({
        code: TF()
      }),
      hL = PF({
        guilds: gF(PF({
          id: TF(),
          name: TF()
        }))
      }),
      JL = PF({
        id: TF(),
        name: TF(),
        icon_url: TF().optional(),
        members: gF(dw)
      }),
      EL = PF({
        id: TF(),
        type: jw(DL),
        guild_id: TF().optional().nullable(),
        name: TF().optional().nullable(),
        topic: TF().optional().nullable(),
        bitrate: KF().optional().nullable(),
        user_limit: KF().optional().nullable(),
        position: KF().optional().nullable(),
        voice_states: gF(wL),
        messages: gF(SL)
      }),
      nL = PF({
        channels: gF(kL)
      }),
      gL = (EL.nullable(), EL.nullable()),
      PL = EL.nullable(),
      ZL = (PF({
        input: OL,
        output: OL,
        mode: RL,
        automatic_gain_control: jF(),
        echo_cancellation: jF(),
        noise_suppression: jF(),
        qos: jF(),
        silence_warning: jF(),
        deaf: jF(),
        mute: jF()
      }), PF({
        evt: TF()
      })),
      yL = PF({
        shortcut: WL
      }),
      BL = qL,
      dL = PF({
        skus: gF(sL)
      }),
      Qq = PF({
        entitlements: gF(rL)
      }),
      Fq = gF(rL).nullable(),
      wq = PF({
        use_interactive_pip: jF()
      }),
      Lq = PF({
        locale: TF()
      }),
      qq = PF({
        enabled: jF()
      }),
      oq = PF({
        permissions: lF().or(TF())
      }),
      Dq = PF({
        iosKeyboardResizesView: Hw(jF())
      }),
      kq = yw.extend({
        cmd: vw(Zw),
        evt: VF()
      });

    function vq(QQ) {
      let {
        cmd: FQ,
        data: wQ
      } = QQ;
      switch (FQ) {
        case Zw.AUTHORIZE:
          return VL.parse(wQ);
        case Zw.CAPTURE_SHORTCUT:
          return yL.parse(wQ);
        case Zw.ENCOURAGE_HW_ACCELERATION:
          return qq.parse(wQ);
        case Zw.GET_CHANNEL:
          return EL.parse(wQ);
        case Zw.GET_CHANNELS:
          return nL.parse(wQ);
        case Zw.GET_CHANNEL_PERMISSIONS:
          return oq.parse(wQ);
        case Zw.GET_GUILD:
          return JL.parse(wQ);
        case Zw.GET_GUILDS:
          return hL.parse(wQ);
        case Zw.GET_PLATFORM_BEHAVIORS:
          return Dq.parse(wQ);
        case Zw.GET_CHANNEL:
          return EL.parse(wQ);
        case Zw.SELECT_TEXT_CHANNEL:
          return PL.parse(wQ);
        case Zw.SELECT_VOICE_CHANNEL:
          return gL.parse(wQ);
        case Zw.SET_ACTIVITY:
          return BL.parse(wQ);
        case Zw.GET_SKUS_EMBEDDED:
          return dL.parse(wQ);
        case Zw.GET_ENTITLEMENTS_EMBEDDED:
          return Qq.parse(wQ);
        case Zw.SET_CONFIG:
          return wq.parse(wQ);
        case Zw.START_PURCHASE:
          return Fq.parse(wQ);
        case Zw.SUBSCRIBE:
        case Zw.UNSUBSCRIBE:
          return ZL.parse(wQ);
        case Zw.USER_SETTINGS_GET_LOCALE:
          return Lq.parse(wQ);
        case Zw.OPEN_EXTERNAL_LINK:
        case Zw.SET_ORIENTATION_LOCK_STATE:
        case Zw.SET_CERTIFIED_DEVICES:
        case Zw.SEND_ANALYTICS_EVENT:
        case Zw.OPEN_INVITE_DIALOG:
        case Zw.CAPTURE_LOG:
        case Zw.GET_SKUS:
        case Zw.GET_ENTITLEMENTS:
          return fL.parse(wQ);
        case Zw.AUTHENTICATE:
        case Zw.INITIATE_IMAGE_UPLOAD:
        case Zw.OPEN_SHARE_MOMENT_DIALOG:
        case Zw.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: QQ
          } = gw[FQ];
          return QQ.parse(wQ);
        default:
          ! function(QQ, FQ) {
            throw FQ
          }(0, new Error(`Unrecognized command ${FQ}`))
      }
    }
    PF({
      frame_id: TF(),
      platform: vw(zw).optional().nullable()
    }), PF({
      v: Dw(1),
      encoding: Dw("json").optional(),
      client_id: TF(),
      frame_id: TF()
    });
    const mq = PF({
        code: KF(),
        message: TF().optional()
      }),
      uq = PF({
        evt: TF().nullable(),
        nonce: TF().nullable(),
        data: JF().nullable(),
        cmd: TF()
      }).passthrough();

    function Hq(QQ) {
      const FQ = uq.parse(QQ);
      return null != FQ.evt ? FQ.evt === TL ? lL.parse(FQ) : function(QQ) {
        const FQ = QQ.evt;
        if (!(FQ in KL)) throw new Error(`Unrecognized event type ${QQ.evt}`);
        return XL[FQ].payload.parse(QQ)
      }(aL.parse(FQ)) : function(QQ) {
        return Object.assign(Object.assign({}, QQ), {
          data: vq(QQ)
        })
      }(kq.passthrough().parse(FQ))
    }

    function bq(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const qQ = yw.extend({
        cmd: Dw(FQ),
        data: wQ
      });
      return async wQ => {
        const oQ = await QQ({
          cmd: FQ,
          args: wQ,
          transfer: LQ(wQ)
        });
        return qQ.parse(oQ).data
      }
    }

    function Yq(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const wQ = gw[QQ].response,
        LQ = yw.extend({
          cmd: Dw(QQ),
          data: wQ
        });
      return wQ => async qQ => {
        const oQ = await wQ({
          cmd: QQ,
          args: qQ,
          transfer: FQ(qQ)
        });
        return LQ.parse(oQ).data
      }
    }
    const xq = Yq(Jw.AUTHENTICATE),
      Aq = QQ => bq(QQ, Zw.AUTHORIZE, VL),
      tq = QQ => bq(QQ, Zw.CAPTURE_LOG, fL),
      eq = QQ => bq(QQ, Zw.ENCOURAGE_HW_ACCELERATION, qq),
      Mq = QQ => bq(QQ, Zw.GET_ENTITLEMENTS_EMBEDDED, Qq),
      Gq = QQ => bq(QQ, Zw.GET_SKUS_EMBEDDED, dL),
      pq = QQ => bq(QQ, Zw.GET_CHANNEL_PERMISSIONS, oq),
      cq = QQ => bq(QQ, Zw.GET_PLATFORM_BEHAVIORS, Dq),
      Cq = QQ => bq(QQ, Zw.OPEN_EXTERNAL_LINK, fL),
      Sq = QQ => bq(QQ, Zw.OPEN_INVITE_DIALOG, fL),
      iq = Yq(Jw.OPEN_SHARE_MOMENT_DIALOG);
    qL.Vb({
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
      type: qL.shape.type.optional(),
      instance: qL.shape.instance.optional()
    }).nullable();
    const Wq = QQ => bq(QQ, Zw.SET_ACTIVITY, BL),
      Rq = QQ => bq(QQ, Zw.SET_CONFIG, wq);
    const Oq = QQ => ({
        lock_state: QQ.lock_state,
        picture_in_picture_lock_state: QQ.picture_in_picture_lock_state
      }),
      sq = QQ => function(QQ) {
        let {
          sendCommand: FQ,
          cmd: wQ,
          response: LQ,
          fallbackTransform: qQ,
          transferTransform: oQ = () => {}
        } = QQ;
        const DQ = yw.extend({
          cmd: Dw(wQ),
          data: LQ
        });
        return async QQ => {
          try {
            const LQ = await FQ({
              cmd: wQ,
              args: QQ,
              transfer: oQ(QQ)
            });
            return DQ.parse(LQ).data
          } catch (LQ) {
            if (LQ.code === Tw.INVALID_PAYLOAD) {
              const LQ = qQ(QQ),
                kQ = await FQ({
                  cmd: wQ,
                  args: LQ,
                  transfer: oQ(LQ)
                });
              return DQ.parse(kQ).data
            }
            throw LQ
          }
        }
      }({
        sendCommand: QQ,
        cmd: Zw.SET_ORIENTATION_LOCK_STATE,
        response: fL,
        fallbackTransform: Oq
      }),
      rq = QQ => bq(QQ, Zw.START_PURCHASE, Fq),
      Iq = QQ => bq(QQ, Zw.USER_SETTINGS_GET_LOCALE, Lq),
      Uq = Yq(Jw.INITIATE_IMAGE_UPLOAD),
      Nq = QQ => bq(QQ, Zw.GET_CHANNEL, EL),
      Tq = Yq(Jw.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Kq = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function zq(QQ) {
      return "string" === typeof QQ && Kq.test(QQ)
    }
    for (var lq = [], jq = 0; jq < 256; ++jq) lq.push((jq + 256).toString(16).substr(1));

    function aq(QQ) {
      var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = (lq[QQ[FQ + 0]] + lq[QQ[FQ + 1]] + lq[QQ[FQ + 2]] + lq[QQ[FQ + 3]] + "-" + lq[QQ[FQ + 4]] + lq[QQ[FQ + 5]] + "-" + lq[QQ[FQ + 6]] + lq[QQ[FQ + 7]] + "-" + lq[QQ[FQ + 8]] + lq[QQ[FQ + 9]] + "-" + lq[QQ[FQ + 10]] + lq[QQ[FQ + 11]] + lq[QQ[FQ + 12]] + lq[QQ[FQ + 13]] + lq[QQ[FQ + 14]] + lq[QQ[FQ + 15]]).toLowerCase();
      if (!zq(wQ)) throw TypeError("Stringified UUID is invalid");
      return wQ
    }
    var Xq;

    function fq(QQ, FQ, wQ) {
      function LQ(QQ, LQ, qQ, oQ) {
        if ("string" === typeof QQ && (QQ = function(QQ) {
            QQ = unescape(encodeURIComponent(QQ));
            for (var FQ = [], wQ = 0; wQ < QQ.length; ++wQ) FQ.push(QQ.charCodeAt(wQ));
            return FQ
          }(QQ)), "string" === typeof LQ && (LQ = function(QQ) {
            if (!zq(QQ)) throw TypeError("Invalid UUID");
            var FQ, wQ = new Uint8Array(16);
            return wQ[0] = (FQ = parseInt(QQ.slice(0, 8), 16)) >>> 24, wQ[1] = FQ >>> 16 & 255, wQ[2] = FQ >>> 8 & 255, wQ[3] = 255 & FQ, wQ[4] = (FQ = parseInt(QQ.slice(9, 13), 16)) >>> 8, wQ[5] = 255 & FQ, wQ[6] = (FQ = parseInt(QQ.slice(14, 18), 16)) >>> 8, wQ[7] = 255 & FQ, wQ[8] = (FQ = parseInt(QQ.slice(19, 23), 16)) >>> 8, wQ[9] = 255 & FQ, wQ[10] = (FQ = parseInt(QQ.slice(24, 36), 16)) / 1099511627776 & 255, wQ[11] = FQ / 4294967296 & 255, wQ[12] = FQ >>> 24 & 255, wQ[13] = FQ >>> 16 & 255, wQ[14] = FQ >>> 8 & 255, wQ[15] = 255 & FQ, wQ
          }(LQ)), 16 !== LQ.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var DQ = new Uint8Array(16 + QQ.length);
        if (DQ.set(LQ), DQ.set(QQ, LQ.length), (DQ = wQ(DQ))[6] = 15 & DQ[6] | FQ, DQ[8] = 63 & DQ[8] | 128, qQ) {
          oQ = oQ || 0;
          for (var kQ = 0; kQ < 16; ++kQ) qQ[oQ + kQ] = DQ[kQ];
          return qQ
        }
        return aq(DQ)
      }
      try {
        LQ.name = QQ
      } catch (qQ) {}
      return LQ.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", LQ.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", LQ
    }

    function Vq(QQ) {
      return 14 + (QQ + 64 >>> 9 << 4) + 1
    }

    function hq(QQ, FQ) {
      var wQ = (65535 & QQ) + (65535 & FQ);
      return (QQ >> 16) + (FQ >> 16) + (wQ >> 16) << 16 | 65535 & wQ
    }

    function Jq(QQ, FQ, wQ, LQ, qQ, oQ) {
      return hq((DQ = hq(hq(FQ, QQ), hq(LQ, oQ))) << (kQ = qQ) | DQ >>> 32 - kQ, wQ);
      var DQ, kQ
    }

    function Eq(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      return Jq(FQ & wQ | ~FQ & LQ, QQ, FQ, qQ, oQ, DQ)
    }

    function nq(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      return Jq(FQ & LQ | wQ & ~LQ, QQ, FQ, qQ, oQ, DQ)
    }

    function gq(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      return Jq(FQ ^ wQ ^ LQ, QQ, FQ, qQ, oQ, DQ)
    }

    function Pq(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      return Jq(wQ ^ (FQ | ~LQ), QQ, FQ, qQ, oQ, DQ)
    }
    fq("v3", 48, (function(QQ) {
      if ("string" === typeof QQ) {
        var FQ = unescape(encodeURIComponent(QQ));
        QQ = new Uint8Array(FQ.length);
        for (var wQ = 0; wQ < FQ.length; ++wQ) QQ[wQ] = FQ.charCodeAt(wQ)
      }
      return function(QQ) {
        for (var FQ = [], wQ = 32 * QQ.length, LQ = "0123456789abcdef", qQ = 0; qQ < wQ; qQ += 8) {
          var oQ = QQ[qQ >> 5] >>> qQ % 32 & 255,
            DQ = parseInt(LQ.charAt(oQ >>> 4 & 15) + LQ.charAt(15 & oQ), 16);
          FQ.push(DQ)
        }
        return FQ
      }(function(QQ, FQ) {
        QQ[FQ >> 5] |= 128 << FQ % 32, QQ[Vq(FQ) - 1] = FQ;
        for (var wQ = 1732584193, LQ = -271733879, qQ = -1732584194, oQ = 271733878, DQ = 0; DQ < QQ.length; DQ += 16) {
          var kQ = wQ,
            vQ = LQ,
            mQ = qQ,
            uQ = oQ;
          wQ = Eq(wQ, LQ, qQ, oQ, QQ[DQ], 7, -680876936), oQ = Eq(oQ, wQ, LQ, qQ, QQ[DQ + 1], 12, -389564586), qQ = Eq(qQ, oQ, wQ, LQ, QQ[DQ + 2], 17, 606105819), LQ = Eq(LQ, qQ, oQ, wQ, QQ[DQ + 3], 22, -1044525330), wQ = Eq(wQ, LQ, qQ, oQ, QQ[DQ + 4], 7, -176418897), oQ = Eq(oQ, wQ, LQ, qQ, QQ[DQ + 5], 12, 1200080426), qQ = Eq(qQ, oQ, wQ, LQ, QQ[DQ + 6], 17, -1473231341), LQ = Eq(LQ, qQ, oQ, wQ, QQ[DQ + 7], 22, -45705983), wQ = Eq(wQ, LQ, qQ, oQ, QQ[DQ + 8], 7, 1770035416), oQ = Eq(oQ, wQ, LQ, qQ, QQ[DQ + 9], 12, -1958414417), qQ = Eq(qQ, oQ, wQ, LQ, QQ[DQ + 10], 17, -42063), LQ = Eq(LQ, qQ, oQ, wQ, QQ[DQ + 11], 22, -1990404162), wQ = Eq(wQ, LQ, qQ, oQ, QQ[DQ + 12], 7, 1804603682), oQ = Eq(oQ, wQ, LQ, qQ, QQ[DQ + 13], 12, -40341101), qQ = Eq(qQ, oQ, wQ, LQ, QQ[DQ + 14], 17, -1502002290), wQ = nq(wQ, LQ = Eq(LQ, qQ, oQ, wQ, QQ[DQ + 15], 22, 1236535329), qQ, oQ, QQ[DQ + 1], 5, -165796510), oQ = nq(oQ, wQ, LQ, qQ, QQ[DQ + 6], 9, -1069501632), qQ = nq(qQ, oQ, wQ, LQ, QQ[DQ + 11], 14, 643717713), LQ = nq(LQ, qQ, oQ, wQ, QQ[DQ], 20, -373897302), wQ = nq(wQ, LQ, qQ, oQ, QQ[DQ + 5], 5, -701558691), oQ = nq(oQ, wQ, LQ, qQ, QQ[DQ + 10], 9, 38016083), qQ = nq(qQ, oQ, wQ, LQ, QQ[DQ + 15], 14, -660478335), LQ = nq(LQ, qQ, oQ, wQ, QQ[DQ + 4], 20, -405537848), wQ = nq(wQ, LQ, qQ, oQ, QQ[DQ + 9], 5, 568446438), oQ = nq(oQ, wQ, LQ, qQ, QQ[DQ + 14], 9, -1019803690), qQ = nq(qQ, oQ, wQ, LQ, QQ[DQ + 3], 14, -187363961), LQ = nq(LQ, qQ, oQ, wQ, QQ[DQ + 8], 20, 1163531501), wQ = nq(wQ, LQ, qQ, oQ, QQ[DQ + 13], 5, -1444681467), oQ = nq(oQ, wQ, LQ, qQ, QQ[DQ + 2], 9, -51403784), qQ = nq(qQ, oQ, wQ, LQ, QQ[DQ + 7], 14, 1735328473), wQ = gq(wQ, LQ = nq(LQ, qQ, oQ, wQ, QQ[DQ + 12], 20, -1926607734), qQ, oQ, QQ[DQ + 5], 4, -378558), oQ = gq(oQ, wQ, LQ, qQ, QQ[DQ + 8], 11, -2022574463), qQ = gq(qQ, oQ, wQ, LQ, QQ[DQ + 11], 16, 1839030562), LQ = gq(LQ, qQ, oQ, wQ, QQ[DQ + 14], 23, -35309556), wQ = gq(wQ, LQ, qQ, oQ, QQ[DQ + 1], 4, -1530992060), oQ = gq(oQ, wQ, LQ, qQ, QQ[DQ + 4], 11, 1272893353), qQ = gq(qQ, oQ, wQ, LQ, QQ[DQ + 7], 16, -155497632), LQ = gq(LQ, qQ, oQ, wQ, QQ[DQ + 10], 23, -1094730640), wQ = gq(wQ, LQ, qQ, oQ, QQ[DQ + 13], 4, 681279174), oQ = gq(oQ, wQ, LQ, qQ, QQ[DQ], 11, -358537222), qQ = gq(qQ, oQ, wQ, LQ, QQ[DQ + 3], 16, -722521979), LQ = gq(LQ, qQ, oQ, wQ, QQ[DQ + 6], 23, 76029189), wQ = gq(wQ, LQ, qQ, oQ, QQ[DQ + 9], 4, -640364487), oQ = gq(oQ, wQ, LQ, qQ, QQ[DQ + 12], 11, -421815835), qQ = gq(qQ, oQ, wQ, LQ, QQ[DQ + 15], 16, 530742520), wQ = Pq(wQ, LQ = gq(LQ, qQ, oQ, wQ, QQ[DQ + 2], 23, -995338651), qQ, oQ, QQ[DQ], 6, -198630844), oQ = Pq(oQ, wQ, LQ, qQ, QQ[DQ + 7], 10, 1126891415), qQ = Pq(qQ, oQ, wQ, LQ, QQ[DQ + 14], 15, -1416354905), LQ = Pq(LQ, qQ, oQ, wQ, QQ[DQ + 5], 21, -57434055), wQ = Pq(wQ, LQ, qQ, oQ, QQ[DQ + 12], 6, 1700485571), oQ = Pq(oQ, wQ, LQ, qQ, QQ[DQ + 3], 10, -1894986606), qQ = Pq(qQ, oQ, wQ, LQ, QQ[DQ + 10], 15, -1051523), LQ = Pq(LQ, qQ, oQ, wQ, QQ[DQ + 1], 21, -2054922799), wQ = Pq(wQ, LQ, qQ, oQ, QQ[DQ + 8], 6, 1873313359), oQ = Pq(oQ, wQ, LQ, qQ, QQ[DQ + 15], 10, -30611744), qQ = Pq(qQ, oQ, wQ, LQ, QQ[DQ + 6], 15, -1560198380), LQ = Pq(LQ, qQ, oQ, wQ, QQ[DQ + 13], 21, 1309151649), wQ = Pq(wQ, LQ, qQ, oQ, QQ[DQ + 4], 6, -145523070), oQ = Pq(oQ, wQ, LQ, qQ, QQ[DQ + 11], 10, -1120210379), qQ = Pq(qQ, oQ, wQ, LQ, QQ[DQ + 2], 15, 718787259), LQ = Pq(LQ, qQ, oQ, wQ, QQ[DQ + 9], 21, -343485551), wQ = hq(wQ, kQ), LQ = hq(LQ, vQ), qQ = hq(qQ, mQ), oQ = hq(oQ, uQ)
        }
        return [wQ, LQ, qQ, oQ]
      }(function(QQ) {
        if (0 === QQ.length) return [];
        for (var FQ = 8 * QQ.length, wQ = new Uint32Array(Vq(FQ)), LQ = 0; LQ < FQ; LQ += 8) wQ[LQ >> 5] |= (255 & QQ[LQ / 8]) << LQ % 32;
        return wQ
      }(QQ), 8 * QQ.length))
    }));
    var Zq = new Uint8Array(16);

    function yq() {
      if (!Xq && !(Xq = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Xq(Zq)
    }

    function Bq(QQ, FQ, wQ) {
      var LQ = (QQ = QQ || {}).random || (QQ.rng || yq)();
      if (LQ[6] = 15 & LQ[6] | 64, LQ[8] = 63 & LQ[8] | 128, FQ) {
        wQ = wQ || 0;
        for (var qQ = 0; qQ < 16; ++qQ) FQ[wQ + qQ] = LQ[qQ];
        return FQ
      }
      return aq(LQ)
    }

    function dq(QQ, FQ, wQ, LQ) {
      switch (QQ) {
        case 0:
          return FQ & wQ ^ ~FQ & LQ;
        case 1:
        case 3:
          return FQ ^ wQ ^ LQ;
        case 2:
          return FQ & wQ ^ FQ & LQ ^ wQ & LQ
      }
    }

    function Qo(QQ, FQ) {
      return QQ << FQ | QQ >>> 32 - FQ
    }
    fq("v5", 80, (function(QQ) {
      var FQ = [1518500249, 1859775393, 2400959708, 3395469782],
        wQ = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof QQ) {
        var LQ = unescape(encodeURIComponent(QQ));
        QQ = [];
        for (var qQ = 0; qQ < LQ.length; ++qQ) QQ.push(LQ.charCodeAt(qQ))
      } else Array.isArray(QQ) || (QQ = Array.prototype.slice.call(QQ));
      QQ.push(128);
      for (var oQ = QQ.length / 4 + 2, DQ = Math.ceil(oQ / 16), kQ = new Array(DQ), vQ = 0; vQ < DQ; ++vQ) {
        for (var mQ = new Uint32Array(16), uQ = 0; uQ < 16; ++uQ) mQ[uQ] = QQ[64 * vQ + 4 * uQ] << 24 | QQ[64 * vQ + 4 * uQ + 1] << 16 | QQ[64 * vQ + 4 * uQ + 2] << 8 | QQ[64 * vQ + 4 * uQ + 3];
        kQ[vQ] = mQ
      }
      kQ[DQ - 1][14] = 8 * (QQ.length - 1) / Math.pow(2, 32), kQ[DQ - 1][14] = Math.floor(kQ[DQ - 1][14]), kQ[DQ - 1][15] = 8 * (QQ.length - 1) & 4294967295;
      for (var HQ = 0; HQ < DQ; ++HQ) {
        for (var bQ = new Uint32Array(80), YQ = 0; YQ < 16; ++YQ) bQ[YQ] = kQ[HQ][YQ];
        for (var xQ = 16; xQ < 80; ++xQ) bQ[xQ] = Qo(bQ[xQ - 3] ^ bQ[xQ - 8] ^ bQ[xQ - 14] ^ bQ[xQ - 16], 1);
        for (var AQ = wQ[0], tQ = wQ[1], eQ = wQ[2], MQ = wQ[3], GQ = wQ[4], pQ = 0; pQ < 80; ++pQ) {
          var cQ = Math.floor(pQ / 20),
            CQ = Qo(AQ, 5) + dq(cQ, tQ, eQ, MQ) + GQ + FQ[cQ] + bQ[pQ] >>> 0;
          GQ = MQ, MQ = eQ, eQ = Qo(tQ, 30) >>> 0, tQ = AQ, AQ = CQ
        }
        wQ[0] = wQ[0] + AQ >>> 0, wQ[1] = wQ[1] + tQ >>> 0, wQ[2] = wQ[2] + eQ >>> 0, wQ[3] = wQ[3] + MQ >>> 0, wQ[4] = wQ[4] + GQ >>> 0
      }
      return [wQ[0] >> 24 & 255, wQ[0] >> 16 & 255, wQ[0] >> 8 & 255, 255 & wQ[0], wQ[1] >> 24 & 255, wQ[1] >> 16 & 255, wQ[1] >> 8 & 255, 255 & wQ[1], wQ[2] >> 24 & 255, wQ[2] >> 16 & 255, wQ[2] >> 8 & 255, 255 & wQ[2], wQ[3] >> 24 & 255, wQ[3] >> 16 & 255, wQ[3] >> 8 & 255, 255 & wQ[3], wQ[4] >> 24 & 255, wQ[4] >> 16 & 255, wQ[4] >> 8 & 255, 255 & wQ[4]]
    }));
    class Fo extends Error {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(FQ), this.code = QQ, this.message = FQ, this.name = "Discord SDK Error"
      }
    }
    const wo = ["log", "warn", "debug", "info", "error"];
    var Lo;
    ! function(QQ) {
      QQ[QQ.HANDSHAKE = 0] = "HANDSHAKE", QQ[QQ.FRAME = 1] = "FRAME", QQ[QQ.CLOSE = 2] = "CLOSE", QQ[QQ.HELLO = 3] = "HELLO"
    }(Lo || (Lo = {}));
    const qo = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class oo {
      getTransfer(QQ) {
        var FQ;
        switch (QQ.cmd) {
          case Zw.SUBSCRIBE:
          case Zw.UNSUBSCRIBE:
            return;
          default:
            return null !== (FQ = QQ.transfer) && void 0 !== FQ ? FQ : void 0
        }
      }
      constructor(QQ, FQ) {
        var wQ;
        if (this.eventBus = new mQ, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = QQ => {
            var FQ;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const wQ = Bq();
            null === (FQ = this.source) || void 0 === FQ || FQ.postMessage([Lo.FRAME, Object.assign(Object.assign({}, QQ), {
              nonce: wQ
            })], this.sourceOrigin, this.getTransfer(QQ));
            return new Promise(((QQ, FQ) => {
              this.pendingCommands.set(wQ, {
                resolve: QQ,
                reject: FQ
              })
            }))
          }, this.commands = (wQ = this.sendCommand, {
            authenticate: xq(wQ),
            authorize: Aq(wQ),
            captureLog: tq(wQ),
            encourageHardwareAcceleration: eq(wQ),
            getChannel: Nq(wQ),
            getChannelPermissions: pq(wQ),
            getEntitlements: Mq(wQ),
            getPlatformBehaviors: cq(wQ),
            getSkus: Gq(wQ),
            openExternalLink: Cq(wQ),
            openInviteDialog: Sq(wQ),
            openShareMomentDialog: iq(wQ),
            setActivity: Wq(wQ),
            setConfig: Rq(wQ),
            setOrientationLockState: sq(wQ),
            startPurchase: rq(wQ),
            userSettingsGetLocale: Iq(wQ),
            initiateImageUpload: Uq(wQ),
            getInstanceConnectedParticipants: Tq(wQ)
          }), this.handleMessage = QQ => {
            if (!qo.has(QQ.origin)) return;
            const FQ = QQ.data;
            if (!Array.isArray(FQ)) return;
            const [wQ, LQ] = FQ;
            switch (wQ) {
              case Lo.HELLO:
                return;
              case Lo.CLOSE:
                return this.handleClose(LQ);
              case Lo.HANDSHAKE:
                return this.handleHandshake();
              case Lo.FRAME:
                return this.handleFrame(LQ);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = QQ, this.configuration = null !== FQ && void 0 !== FQ ? FQ : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = zw.DESKTOP, this.guildId = null, void(this.channelId = null);
        const LQ = new URLSearchParams(this._getSearch()),
          qQ = LQ.get("frame_id");
        if (!qQ) throw new Error("frame_id query param is not defined");
        this.frameId = qQ;
        const oQ = LQ.get("instance_id");
        if (!oQ) throw new Error("instance_id query param is not defined");
        this.instanceId = oQ;
        const DQ = LQ.get("platform");
        if (!DQ) throw new Error("platform query param is not defined");
        if (DQ !== zw.DESKTOP && DQ !== zw.MOBILE) throw new Error(`Invalid query param "platform" of "${DQ}". Valid values are "${zw.DESKTOP}" or "${zw.MOBILE}"`);
        this.platform = DQ, this.guildId = LQ.get("guild_id"), this.channelId = LQ.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var QQ;
          return [null !== (QQ = window.parent.opener) && void 0 !== QQ ? QQ : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(QQ, FQ) {
        var wQ;
        window.removeEventListener("message", this.handleMessage);
        const LQ = Bq();
        null === (wQ = this.source) || void 0 === wQ || wQ.postMessage([Lo.CLOSE, {
          code: QQ,
          message: FQ,
          nonce: LQ
        }], this.sourceOrigin)
      }
      async subscribe(QQ, FQ) {
        for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
        const [oQ] = LQ, DQ = this.eventBus.listenerCount(QQ), kQ = this.eventBus.on(QQ, FQ);
        return Object.values(KL).includes(QQ) && QQ !== KL.READY && 0 === DQ && await this.sendCommand({
          cmd: Zw.SUBSCRIBE,
          args: oQ,
          evt: QQ
        }), kQ
      }
      async unsubscribe(QQ, FQ) {
        for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
        const [oQ] = LQ;
        return QQ !== KL.READY && 1 === this.eventBus.listenerCount(QQ) && await this.sendCommand({
          cmd: Zw.UNSUBSCRIBE,
          evt: QQ,
          args: oQ
        }), this.eventBus.off(QQ, FQ)
      }
      async ready() {
        this.isReady || await new Promise((QQ => {
          this.eventBus.once(KL.READY, QQ)
        }))
      }
      handshake() {
        var QQ;
        null === (QQ = this.source) || void 0 === QQ || QQ.postMessage([Lo.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(KL.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const QQ = (QQ, FQ) => {
          this.commands.captureLog({
            level: QQ,
            message: FQ
          })
        };
        wo.forEach((FQ => {
          ! function(QQ, FQ, wQ) {
            const LQ = QQ[FQ],
              qQ = QQ;
            LQ && (QQ[FQ] = function() {
              const QQ = [].slice.call(arguments),
                oQ = "" + QQ.join(" ");
              wQ(FQ, oQ), LQ.apply(qQ, QQ)
            })
          }(console, FQ, QQ)
        }))
      }
      handleClose(QQ) {
        mq.parse(QQ)
      }
      handleHandshake() {}
      handleFrame(QQ) {
        var FQ, wQ;
        let LQ;
        try {
          LQ = Hq(QQ)
        } catch (qQ) {
          return console.error("Failed to parse", QQ), void console.error(qQ)
        }
        if ("DISPATCH" === LQ.cmd) this.eventBus.emit(LQ.evt, LQ.data);
        else {
          if (LQ.evt === TL) {
            if (null != LQ.nonce) return null === (FQ = this.pendingCommands.get(LQ.nonce)) || void 0 === FQ || FQ.reject(LQ.data), void this.pendingCommands.delete(LQ.nonce);
            this.eventBus.emit("error", new Fo(LQ.data.code, LQ.data.message))
          }
          if (null == LQ.nonce) return void console.error("Missing nonce", QQ);
          null === (wQ = this.pendingCommands.get(LQ.nonce)) || void 0 === wQ || wQ.resolve(LQ), this.pendingCommands.delete(LQ.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Do, ko = 1e9,
      vo = !0,
      mo = "[DecimalError] ",
      uo = mo + "Invalid argument: ",
      Ho = mo + "Exponent out of range: ",
      bo = Math.floor,
      Yo = Math.pow,
      xo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Ao = 1e7,
      to = 9007199254740991,
      eo = bo(1286742750677284.5),
      Mo = {};

    function Go(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ = QQ.constructor,
        HQ = uQ.precision;
      if (!QQ.s || !FQ.s) return FQ.s || (FQ = new uQ(QQ)), vo ? ro(FQ, HQ) : FQ;
      if (vQ = QQ.d, mQ = FQ.d, DQ = QQ.e, qQ = FQ.e, vQ = vQ.slice(), oQ = DQ - qQ) {
        for (oQ < 0 ? (LQ = vQ, oQ = -oQ, kQ = mQ.length) : (LQ = mQ, qQ = DQ, kQ = vQ.length), oQ > (kQ = (DQ = Math.ceil(HQ / 7)) > kQ ? DQ + 1 : kQ + 1) && (oQ = kQ, LQ.length = 1), LQ.reverse(); oQ--;) LQ.push(0);
        LQ.reverse()
      }
      for ((kQ = vQ.length) - (oQ = mQ.length) < 0 && (oQ = kQ, LQ = mQ, mQ = vQ, vQ = LQ), wQ = 0; oQ;) wQ = (vQ[--oQ] = vQ[oQ] + mQ[oQ] + wQ) / Ao | 0, vQ[oQ] %= Ao;
      for (wQ && (vQ.unshift(wQ), ++qQ), kQ = vQ.length; 0 == vQ[--kQ];) vQ.pop();
      return FQ.d = vQ, FQ.e = qQ, vo ? ro(FQ, HQ) : FQ
    }

    function po(QQ, FQ, wQ) {
      if (QQ !== ~~QQ || QQ < FQ || QQ > wQ) throw Error(uo + QQ)
    }

    function co(QQ) {
      var FQ, wQ, LQ, qQ = QQ.length - 1,
        oQ = "",
        DQ = QQ[0];
      if (qQ > 0) {
        for (oQ += DQ, FQ = 1; FQ < qQ; FQ++)(wQ = 7 - (LQ = QQ[FQ] + "").length) && (oQ += Ro(wQ)), oQ += LQ;
        (wQ = 7 - (LQ = (DQ = QQ[FQ]) + "").length) && (oQ += Ro(wQ))
      } else if (0 === DQ) return "0";
      for (; DQ % 10 === 0;) DQ /= 10;
      return oQ + DQ
    }
    Mo.absoluteValue = Mo.abs = function() {
      var QQ = new this.constructor(this);
      return QQ.s && (QQ.s = 1), QQ
    }, Mo.comparedTo = Mo.cmp = function(QQ) {
      var FQ, wQ, LQ, qQ, oQ = this;
      if (QQ = new oQ.constructor(QQ), oQ.s !== QQ.s) return oQ.s || -QQ.s;
      if (oQ.e !== QQ.e) return oQ.e > QQ.e ^ oQ.s < 0 ? 1 : -1;
      for (FQ = 0, wQ = (LQ = oQ.d.length) < (qQ = QQ.d.length) ? LQ : qQ; FQ < wQ; ++FQ)
        if (oQ.d[FQ] !== QQ.d[FQ]) return oQ.d[FQ] > QQ.d[FQ] ^ oQ.s < 0 ? 1 : -1;
      return LQ === qQ ? 0 : LQ > qQ ^ oQ.s < 0 ? 1 : -1
    }, Mo.decimalPlaces = Mo.dp = function() {
      var QQ = this,
        FQ = QQ.d.length - 1,
        wQ = 7 * (FQ - QQ.e);
      if (FQ = QQ.d[FQ])
        for (; FQ % 10 == 0; FQ /= 10) wQ--;
      return wQ < 0 ? 0 : wQ
    }, Mo.dividedBy = Mo.div = function(QQ) {
      return Co(this, new this.constructor(QQ))
    }, Mo.dividedToIntegerBy = Mo.idiv = function(QQ) {
      var FQ = this.constructor;
      return ro(Co(this, new FQ(QQ), 0, 1), FQ.precision)
    }, Mo.equals = Mo.eq = function(QQ) {
      return !this.cmp(QQ)
    }, Mo.exponent = function() {
      return io(this)
    }, Mo.greaterThan = Mo.gt = function(QQ) {
      return this.cmp(QQ) > 0
    }, Mo.greaterThanOrEqualTo = Mo.gte = function(QQ) {
      return this.cmp(QQ) >= 0
    }, Mo.isInteger = Mo.isint = function() {
      return this.e > this.d.length - 2
    }, Mo.isNegative = Mo.isneg = function() {
      return this.s < 0
    }, Mo.isPositive = Mo.ispos = function() {
      return this.s > 0
    }, Mo.isZero = function() {
      return 0 === this.s
    }, Mo.lessThan = Mo.lt = function(QQ) {
      return this.cmp(QQ) < 0
    }, Mo.lessThanOrEqualTo = Mo.lte = function(QQ) {
      return this.cmp(QQ) < 1
    }, Mo.logarithm = Mo.log = function(QQ) {
      var FQ, wQ = this,
        LQ = wQ.constructor,
        qQ = LQ.precision,
        oQ = qQ + 5;
      if (void 0 === QQ) QQ = new LQ(10);
      else if ((QQ = new LQ(QQ)).s < 1 || QQ.eq(Do)) throw Error(mo + "NaN");
      if (wQ.s < 1) throw Error(mo + (wQ.s ? "NaN" : "-Infinity"));
      return wQ.eq(Do) ? new LQ(0) : (vo = !1, FQ = Co(Oo(wQ, oQ), Oo(QQ, oQ), oQ), vo = !0, ro(FQ, qQ))
    }, Mo.minus = Mo.sub = function(QQ) {
      var FQ = this;
      return QQ = new FQ.constructor(QQ), FQ.s == QQ.s ? Io(FQ, QQ) : Go(FQ, (QQ.s = -QQ.s, QQ))
    }, Mo.modulo = Mo.mod = function(QQ) {
      var FQ, wQ = this,
        LQ = wQ.constructor,
        qQ = LQ.precision;
      if (!(QQ = new LQ(QQ)).s) throw Error(mo + "NaN");
      return wQ.s ? (vo = !1, FQ = Co(wQ, QQ, 0, 1).times(QQ), vo = !0, wQ.minus(FQ)) : ro(new LQ(wQ), qQ)
    }, Mo.naturalExponential = Mo.exp = function() {
      return So(this)
    }, Mo.naturalLogarithm = Mo.ln = function() {
      return Oo(this)
    }, Mo.negated = Mo.neg = function() {
      var QQ = new this.constructor(this);
      return QQ.s = -QQ.s || 0, QQ
    }, Mo.plus = Mo.add = function(QQ) {
      var FQ = this;
      return QQ = new FQ.constructor(QQ), FQ.s == QQ.s ? Go(FQ, QQ) : Io(FQ, (QQ.s = -QQ.s, QQ))
    }, Mo.precision = Mo.sd = function(QQ) {
      var FQ, wQ, LQ, qQ = this;
      if (void 0 !== QQ && QQ !== !!QQ && 1 !== QQ && 0 !== QQ) throw Error(uo + QQ);
      if (FQ = io(qQ) + 1, wQ = 7 * (LQ = qQ.d.length - 1) + 1, LQ = qQ.d[LQ]) {
        for (; LQ % 10 == 0; LQ /= 10) wQ--;
        for (LQ = qQ.d[0]; LQ >= 10; LQ /= 10) wQ++
      }
      return QQ && FQ > wQ ? FQ : wQ
    }, Mo.squareRoot = Mo.sqrt = function() {
      var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ = this,
        vQ = kQ.constructor;
      if (kQ.s < 1) {
        if (!kQ.s) return new vQ(0);
        throw Error(mo + "NaN")
      }
      for (QQ = io(kQ), vo = !1, 0 == (qQ = Math.sqrt(+kQ)) || qQ == 1 / 0 ? (((FQ = co(kQ.d)).length + QQ) % 2 == 0 && (FQ += "0"), qQ = Math.sqrt(FQ), QQ = bo((QQ + 1) / 2) - (QQ < 0 || QQ % 2), LQ = new vQ(FQ = qQ == 1 / 0 ? "1e" + QQ : (FQ = qQ.toExponential()).slice(0, FQ.indexOf("e") + 1) + QQ)) : LQ = new vQ(qQ.toString()), qQ = DQ = (wQ = vQ.precision) + 3;;)
        if (LQ = (oQ = LQ).plus(Co(kQ, oQ, DQ + 2)).times(.5), co(oQ.d).slice(0, DQ) === (FQ = co(LQ.d)).slice(0, DQ)) {
          if (FQ = FQ.slice(DQ - 3, DQ + 1), qQ == DQ && "4999" == FQ) {
            if (ro(oQ, wQ + 1, 0), oQ.times(oQ).eq(kQ)) {
              LQ = oQ;
              break
            }
          } else if ("9999" != FQ) break;
          DQ += 4
        } return vo = !0, ro(LQ, wQ)
    }, Mo.times = Mo.mul = function(QQ) {
      var FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ = this,
        HQ = uQ.constructor,
        bQ = uQ.d,
        YQ = (QQ = new HQ(QQ)).d;
      if (!uQ.s || !QQ.s) return new HQ(0);
      for (QQ.s *= uQ.s, wQ = uQ.e + QQ.e, (vQ = bQ.length) < (mQ = YQ.length) && (oQ = bQ, bQ = YQ, YQ = oQ, DQ = vQ, vQ = mQ, mQ = DQ), oQ = [], LQ = DQ = vQ + mQ; LQ--;) oQ.push(0);
      for (LQ = mQ; --LQ >= 0;) {
        for (FQ = 0, qQ = vQ + LQ; qQ > LQ;) kQ = oQ[qQ] + YQ[LQ] * bQ[qQ - LQ - 1] + FQ, oQ[qQ--] = kQ % Ao | 0, FQ = kQ / Ao | 0;
        oQ[qQ] = (oQ[qQ] + FQ) % Ao | 0
      }
      for (; !oQ[--DQ];) oQ.pop();
      return FQ ? ++wQ : oQ.shift(), QQ.d = oQ, QQ.e = wQ, vo ? ro(QQ, HQ.precision) : QQ
    }, Mo.toDecimalPlaces = Mo.todp = function(QQ, FQ) {
      var wQ = this,
        LQ = wQ.constructor;
      return wQ = new LQ(wQ), void 0 === QQ ? wQ : (po(QQ, 0, ko), void 0 === FQ ? FQ = LQ.rounding : po(FQ, 0, 8), ro(wQ, QQ + io(wQ) + 1, FQ))
    }, Mo.toExponential = function(QQ, FQ) {
      var wQ, LQ = this,
        qQ = LQ.constructor;
      return void 0 === QQ ? wQ = Uo(LQ, !0) : (po(QQ, 0, ko), void 0 === FQ ? FQ = qQ.rounding : po(FQ, 0, 8), wQ = Uo(LQ = ro(new qQ(LQ), QQ + 1, FQ), !0, QQ + 1)), wQ
    }, Mo.toFixed = function(QQ, FQ) {
      var wQ, LQ, qQ = this,
        oQ = qQ.constructor;
      return void 0 === QQ ? Uo(qQ) : (po(QQ, 0, ko), void 0 === FQ ? FQ = oQ.rounding : po(FQ, 0, 8), wQ = Uo((LQ = ro(new oQ(qQ), QQ + io(qQ) + 1, FQ)).abs(), !1, QQ + io(LQ) + 1), qQ.isneg() && !qQ.isZero() ? "-" + wQ : wQ)
    }, Mo.toInteger = Mo.toint = function() {
      var QQ = this,
        FQ = QQ.constructor;
      return ro(new FQ(QQ), io(QQ) + 1, FQ.rounding)
    }, Mo.toNumber = function() {
      return +this
    }, Mo.toPower = Mo.pow = function(QQ) {
      var FQ, wQ, LQ, qQ, oQ, DQ, kQ = this,
        vQ = kQ.constructor,
        mQ = +(QQ = new vQ(QQ));
      if (!QQ.s) return new vQ(Do);
      if (!(kQ = new vQ(kQ)).s) {
        if (QQ.s < 1) throw Error(mo + "Infinity");
        return kQ
      }
      if (kQ.eq(Do)) return kQ;
      if (LQ = vQ.precision, QQ.eq(Do)) return ro(kQ, LQ);
      if (DQ = (FQ = QQ.e) >= (wQ = QQ.d.length - 1), oQ = kQ.s, DQ) {
        if ((wQ = mQ < 0 ? -mQ : mQ) <= to) {
          for (qQ = new vQ(Do), FQ = Math.ceil(LQ / 7 + 4), vo = !1; wQ % 2 && No((qQ = qQ.times(kQ)).d, FQ), 0 !== (wQ = bo(wQ / 2));) No((kQ = kQ.times(kQ)).d, FQ);
          return vo = !0, QQ.s < 0 ? new vQ(Do).div(qQ) : ro(qQ, LQ)
        }
      } else if (oQ < 0) throw Error(mo + "NaN");
      return oQ = oQ < 0 && 1 & QQ.d[Math.max(FQ, wQ)] ? -1 : 1, kQ.s = 1, vo = !1, qQ = QQ.times(Oo(kQ, LQ + 12)), vo = !0, (qQ = So(qQ)).s = oQ, qQ
    }, Mo.toPrecision = function(QQ, FQ) {
      var wQ, LQ, qQ = this,
        oQ = qQ.constructor;
      return void 0 === QQ ? LQ = Uo(qQ, (wQ = io(qQ)) <= oQ.toExpNeg || wQ >= oQ.toExpPos) : (po(QQ, 1, ko), void 0 === FQ ? FQ = oQ.rounding : po(FQ, 0, 8), LQ = Uo(qQ = ro(new oQ(qQ), QQ, FQ), QQ <= (wQ = io(qQ)) || wQ <= oQ.toExpNeg, QQ)), LQ
    }, Mo.toSignificantDigits = Mo.tosd = function(QQ, FQ) {
      var wQ = this.constructor;
      return void 0 === QQ ? (QQ = wQ.precision, FQ = wQ.rounding) : (po(QQ, 1, ko), void 0 === FQ ? FQ = wQ.rounding : po(FQ, 0, 8)), ro(new wQ(this), QQ, FQ)
    }, Mo.toString = Mo.valueOf = Mo.val = Mo.toJSON = Mo[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var QQ = this,
        FQ = io(QQ),
        wQ = QQ.constructor;
      return Uo(QQ, FQ <= wQ.toExpNeg || FQ >= wQ.toExpPos)
    };
    var Co = function() {
      function QQ(QQ, FQ) {
        var wQ, LQ = 0,
          qQ = QQ.length;
        for (QQ = QQ.slice(); qQ--;) wQ = QQ[qQ] * FQ + LQ, QQ[qQ] = wQ % Ao | 0, LQ = wQ / Ao | 0;
        return LQ && QQ.unshift(LQ), QQ
      }

      function FQ(QQ, FQ, wQ, LQ) {
        var qQ, oQ;
        if (wQ != LQ) oQ = wQ > LQ ? 1 : -1;
        else
          for (qQ = oQ = 0; qQ < wQ; qQ++)
            if (QQ[qQ] != FQ[qQ]) {
              oQ = QQ[qQ] > FQ[qQ] ? 1 : -1;
              break
            } return oQ
      }

      function wQ(QQ, FQ, wQ) {
        for (var LQ = 0; wQ--;) QQ[wQ] -= LQ, LQ = QQ[wQ] < FQ[wQ] ? 1 : 0, QQ[wQ] = LQ * Ao + QQ[wQ] - FQ[wQ];
        for (; !QQ[0] && QQ.length > 1;) QQ.shift()
      }
      return function(LQ, qQ, oQ, DQ) {
        var kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ = LQ.constructor,
          RQ = LQ.s == qQ.s ? 1 : -1,
          OQ = LQ.d,
          sQ = qQ.d;
        if (!LQ.s) return new WQ(LQ);
        if (!qQ.s) throw Error(mo + "Division by zero");
        for (vQ = LQ.e - qQ.e, SQ = sQ.length, cQ = OQ.length, xQ = (YQ = new WQ(RQ)).d = [], mQ = 0; sQ[mQ] == (OQ[mQ] || 0);) ++mQ;
        if (sQ[mQ] > (OQ[mQ] || 0) && --vQ, (MQ = null == oQ ? oQ = WQ.precision : DQ ? oQ + (io(LQ) - io(qQ)) + 1 : oQ) < 0) return new WQ(0);
        if (MQ = MQ / 7 + 2 | 0, mQ = 0, 1 == SQ)
          for (uQ = 0, sQ = sQ[0], MQ++;
            (mQ < cQ || uQ) && MQ--; mQ++) GQ = uQ * Ao + (OQ[mQ] || 0), xQ[mQ] = GQ / sQ | 0, uQ = GQ % sQ | 0;
        else {
          for ((uQ = Ao / (sQ[0] + 1) | 0) > 1 && (sQ = QQ(sQ, uQ), OQ = QQ(OQ, uQ), SQ = sQ.length, cQ = OQ.length), pQ = SQ, tQ = (AQ = OQ.slice(0, SQ)).length; tQ < SQ;) AQ[tQ++] = 0;
          (iQ = sQ.slice()).unshift(0), CQ = sQ[0], sQ[1] >= Ao / 2 && ++CQ;
          do {
            uQ = 0, (kQ = FQ(sQ, AQ, SQ, tQ)) < 0 ? (eQ = AQ[0], SQ != tQ && (eQ = eQ * Ao + (AQ[1] || 0)), (uQ = eQ / CQ | 0) > 1 ? (uQ >= Ao && (uQ = Ao - 1), 1 == (kQ = FQ(HQ = QQ(sQ, uQ), AQ, bQ = HQ.length, tQ = AQ.length)) && (uQ--, wQ(HQ, SQ < bQ ? iQ : sQ, bQ))) : (0 == uQ && (kQ = uQ = 1), HQ = sQ.slice()), (bQ = HQ.length) < tQ && HQ.unshift(0), wQ(AQ, HQ, tQ), -1 == kQ && (kQ = FQ(sQ, AQ, SQ, tQ = AQ.length)) < 1 && (uQ++, wQ(AQ, SQ < tQ ? iQ : sQ, tQ)), tQ = AQ.length) : 0 === kQ && (uQ++, AQ = [0]), xQ[mQ++] = uQ, kQ && AQ[0] ? AQ[tQ++] = OQ[pQ] || 0 : (AQ = [OQ[pQ]], tQ = 1)
          } while ((pQ++ < cQ || void 0 !== AQ[0]) && MQ--)
        }
        return xQ[0] || xQ.shift(), YQ.e = vQ, ro(YQ, DQ ? oQ + io(YQ) + 1 : oQ)
      }
    }();

    function So(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ, kQ = 0,
        vQ = 0,
        mQ = QQ.constructor,
        uQ = mQ.precision;
      if (io(QQ) > 16) throw Error(Ho + io(QQ));
      if (!QQ.s) return new mQ(Do);
      for (null == FQ ? (vo = !1, DQ = uQ) : DQ = FQ, oQ = new mQ(.03125); QQ.abs().gte(.1);) QQ = QQ.times(oQ), vQ += 5;
      for (DQ += Math.log(Yo(2, vQ)) / Math.LN10 * 2 + 5 | 0, wQ = LQ = qQ = new mQ(Do), mQ.precision = DQ;;) {
        if (LQ = ro(LQ.times(QQ), DQ), wQ = wQ.times(++kQ), co((oQ = qQ.plus(Co(LQ, wQ, DQ))).d).slice(0, DQ) === co(qQ.d).slice(0, DQ)) {
          for (; vQ--;) qQ = ro(qQ.times(qQ), DQ);
          return mQ.precision = uQ, null == FQ ? (vo = !0, ro(qQ, uQ)) : qQ
        }
        qQ = oQ
      }
    }

    function io(QQ) {
      for (var FQ = 7 * QQ.e, wQ = QQ.d[0]; wQ >= 10; wQ /= 10) FQ++;
      return FQ
    }

    function Wo(QQ, FQ, wQ) {
      if (FQ > QQ.LN10.sd()) throw vo = !0, wQ && (QQ.precision = wQ), Error(mo + "LN10 precision limit exceeded");
      return ro(new QQ(QQ.LN10), FQ)
    }

    function Ro(QQ) {
      for (var FQ = ""; QQ--;) FQ += "0";
      return FQ
    }

    function Oo(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ = 1,
        bQ = QQ,
        YQ = bQ.d,
        xQ = bQ.constructor,
        AQ = xQ.precision;
      if (bQ.s < 1) throw Error(mo + (bQ.s ? "NaN" : "-Infinity"));
      if (bQ.eq(Do)) return new xQ(0);
      if (null == FQ ? (vo = !1, mQ = AQ) : mQ = FQ, bQ.eq(10)) return null == FQ && (vo = !0), Wo(xQ, mQ);
      if (mQ += 10, xQ.precision = mQ, LQ = (wQ = co(YQ)).charAt(0), oQ = io(bQ), !(Math.abs(oQ) < 15e14)) return vQ = Wo(xQ, mQ + 2, AQ).times(oQ + ""), bQ = Oo(new xQ(LQ + "." + wQ.slice(1)), mQ - 10).plus(vQ), xQ.precision = AQ, null == FQ ? (vo = !0, ro(bQ, AQ)) : bQ;
      for (; LQ < 7 && 1 != LQ || 1 == LQ && wQ.charAt(1) > 3;) LQ = (wQ = co((bQ = bQ.times(QQ)).d)).charAt(0), HQ++;
      for (oQ = io(bQ), LQ > 1 ? (bQ = new xQ("0." + wQ), oQ++) : bQ = new xQ(LQ + "." + wQ.slice(1)), kQ = DQ = bQ = Co(bQ.minus(Do), bQ.plus(Do), mQ), uQ = ro(bQ.times(bQ), mQ), qQ = 3;;) {
        if (DQ = ro(DQ.times(uQ), mQ), co((vQ = kQ.plus(Co(DQ, new xQ(qQ), mQ))).d).slice(0, mQ) === co(kQ.d).slice(0, mQ)) return kQ = kQ.times(2), 0 !== oQ && (kQ = kQ.plus(Wo(xQ, mQ + 2, AQ).times(oQ + ""))), kQ = Co(kQ, new xQ(HQ), mQ), xQ.precision = AQ, null == FQ ? (vo = !0, ro(kQ, AQ)) : kQ;
        kQ = vQ, qQ += 2
      }
    }

    function so(QQ, FQ) {
      var wQ, LQ, qQ;
      for ((wQ = FQ.indexOf(".")) > -1 && (FQ = FQ.replace(".", "")), (LQ = FQ.search(/e/i)) > 0 ? (wQ < 0 && (wQ = LQ), wQ += +FQ.slice(LQ + 1), FQ = FQ.substring(0, LQ)) : wQ < 0 && (wQ = FQ.length), LQ = 0; 48 === FQ.charCodeAt(LQ);) ++LQ;
      for (qQ = FQ.length; 48 === FQ.charCodeAt(qQ - 1);) --qQ;
      if (FQ = FQ.slice(LQ, qQ)) {
        if (qQ -= LQ, wQ = wQ - LQ - 1, QQ.e = bo(wQ / 7), QQ.d = [], LQ = (wQ + 1) % 7, wQ < 0 && (LQ += 7), LQ < qQ) {
          for (LQ && QQ.d.push(+FQ.slice(0, LQ)), qQ -= 7; LQ < qQ;) QQ.d.push(+FQ.slice(LQ, LQ += 7));
          LQ = 7 - (FQ = FQ.slice(LQ)).length
        } else LQ -= qQ;
        for (; LQ--;) FQ += "0";
        if (QQ.d.push(+FQ), vo && (QQ.e > eo || QQ.e < -eo)) throw Error(Ho + wQ)
      } else QQ.s = 0, QQ.e = 0, QQ.d = [0];
      return QQ
    }

    function ro(QQ, FQ, wQ) {
      var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ = QQ.d;
      for (DQ = 1, oQ = HQ[0]; oQ >= 10; oQ /= 10) DQ++;
      if ((LQ = FQ - DQ) < 0) LQ += 7, qQ = FQ, mQ = HQ[uQ = 0];
      else {
        if ((uQ = Math.ceil((LQ + 1) / 7)) >= (oQ = HQ.length)) return QQ;
        for (mQ = oQ = HQ[uQ], DQ = 1; oQ >= 10; oQ /= 10) DQ++;
        qQ = (LQ %= 7) - 7 + DQ
      }
      if (void 0 !== wQ && (kQ = mQ / (oQ = Yo(10, DQ - qQ - 1)) % 10 | 0, vQ = FQ < 0 || void 0 !== HQ[uQ + 1] || mQ % oQ, vQ = wQ < 4 ? (kQ || vQ) && (0 == wQ || wQ == (QQ.s < 0 ? 3 : 2)) : kQ > 5 || 5 == kQ && (4 == wQ || vQ || 6 == wQ && (LQ > 0 ? qQ > 0 ? mQ / Yo(10, DQ - qQ) : 0 : HQ[uQ - 1]) % 10 & 1 || wQ == (QQ.s < 0 ? 8 : 7))), FQ < 1 || !HQ[0]) return vQ ? (oQ = io(QQ), HQ.length = 1, FQ = FQ - oQ - 1, HQ[0] = Yo(10, (7 - FQ % 7) % 7), QQ.e = bo(-FQ / 7) || 0) : (HQ.length = 1, HQ[0] = QQ.e = QQ.s = 0), QQ;
      if (0 == LQ ? (HQ.length = uQ, oQ = 1, uQ--) : (HQ.length = uQ + 1, oQ = Yo(10, 7 - LQ), HQ[uQ] = qQ > 0 ? (mQ / Yo(10, DQ - qQ) % Yo(10, qQ) | 0) * oQ : 0), vQ)
        for (;;) {
          if (0 == uQ) {
            (HQ[0] += oQ) == Ao && (HQ[0] = 1, ++QQ.e);
            break
          }
          if (HQ[uQ] += oQ, HQ[uQ] != Ao) break;
          HQ[uQ--] = 0, oQ = 1
        }
      for (LQ = HQ.length; 0 === HQ[--LQ];) HQ.pop();
      if (vo && (QQ.e > eo || QQ.e < -eo)) throw Error(Ho + io(QQ));
      return QQ
    }

    function Io(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ = QQ.constructor,
        YQ = bQ.precision;
      if (!QQ.s || !FQ.s) return FQ.s ? FQ.s = -FQ.s : FQ = new bQ(QQ), vo ? ro(FQ, YQ) : FQ;
      if (vQ = QQ.d, HQ = FQ.d, LQ = FQ.e, mQ = QQ.e, vQ = vQ.slice(), DQ = mQ - LQ) {
        for ((uQ = DQ < 0) ? (wQ = vQ, DQ = -DQ, kQ = HQ.length) : (wQ = HQ, LQ = mQ, kQ = vQ.length), DQ > (qQ = Math.max(Math.ceil(YQ / 7), kQ) + 2) && (DQ = qQ, wQ.length = 1), wQ.reverse(), qQ = DQ; qQ--;) wQ.push(0);
        wQ.reverse()
      } else {
        for ((uQ = (qQ = vQ.length) < (kQ = HQ.length)) && (kQ = qQ), qQ = 0; qQ < kQ; qQ++)
          if (vQ[qQ] != HQ[qQ]) {
            uQ = vQ[qQ] < HQ[qQ];
            break
          } DQ = 0
      }
      for (uQ && (wQ = vQ, vQ = HQ, HQ = wQ, FQ.s = -FQ.s), kQ = vQ.length, qQ = HQ.length - kQ; qQ > 0; --qQ) vQ[kQ++] = 0;
      for (qQ = HQ.length; qQ > DQ;) {
        if (vQ[--qQ] < HQ[qQ]) {
          for (oQ = qQ; oQ && 0 === vQ[--oQ];) vQ[oQ] = Ao - 1;
          --vQ[oQ], vQ[qQ] += Ao
        }
        vQ[qQ] -= HQ[qQ]
      }
      for (; 0 === vQ[--kQ];) vQ.pop();
      for (; 0 === vQ[0]; vQ.shift()) --LQ;
      return vQ[0] ? (FQ.d = vQ, FQ.e = LQ, vo ? ro(FQ, YQ) : FQ) : new bQ(0)
    }

    function Uo(QQ, FQ, wQ) {
      var LQ, qQ = io(QQ),
        oQ = co(QQ.d),
        DQ = oQ.length;
      return FQ ? (wQ && (LQ = wQ - DQ) > 0 ? oQ = oQ.charAt(0) + "." + oQ.slice(1) + Ro(LQ) : DQ > 1 && (oQ = oQ.charAt(0) + "." + oQ.slice(1)), oQ = oQ + (qQ < 0 ? "e" : "e+") + qQ) : qQ < 0 ? (oQ = "0." + Ro(-qQ - 1) + oQ, wQ && (LQ = wQ - DQ) > 0 && (oQ += Ro(LQ))) : qQ >= DQ ? (oQ += Ro(qQ + 1 - DQ), wQ && (LQ = wQ - qQ - 1) > 0 && (oQ = oQ + "." + Ro(LQ))) : ((LQ = qQ + 1) < DQ && (oQ = oQ.slice(0, LQ) + "." + oQ.slice(LQ)), wQ && (LQ = wQ - DQ) > 0 && (qQ + 1 === DQ && (oQ += "."), oQ += Ro(LQ))), QQ.s < 0 ? "-" + oQ : oQ
    }

    function No(QQ, FQ) {
      if (QQ.length > FQ) return QQ.length = FQ, !0
    }

    function To(QQ) {
      if (!QQ || "object" !== typeof QQ) throw Error(mo + "Object expected");
      var FQ, wQ, LQ, qQ = ["precision", 1, ko, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (FQ = 0; FQ < qQ.length; FQ += 3)
        if (void 0 !== (LQ = QQ[wQ = qQ[FQ]])) {
          if (!(bo(LQ) === LQ && LQ >= qQ[FQ + 1] && LQ <= qQ[FQ + 2])) throw Error(uo + wQ + ": " + LQ);
          this[wQ] = LQ
        } if (void 0 !== (LQ = QQ[wQ = "LN10"])) {
        if (LQ != Math.LN10) throw Error(uo + wQ + ": " + LQ);
        this[wQ] = new this(LQ)
      }
      return this
    }
    var Ko = function QQ(FQ) {
      var wQ, LQ, qQ;

      function oQ(QQ) {
        var FQ = this;
        if (!(FQ instanceof oQ)) return new oQ(QQ);
        if (FQ.constructor = oQ, QQ instanceof oQ) return FQ.s = QQ.s, FQ.e = QQ.e, void(FQ.d = (QQ = QQ.d) ? QQ.slice() : QQ);
        if ("number" === typeof QQ) {
          if (0 * QQ !== 0) throw Error(uo + QQ);
          if (QQ > 0) FQ.s = 1;
          else {
            if (!(QQ < 0)) return FQ.s = 0, FQ.e = 0, void(FQ.d = [0]);
            QQ = -QQ, FQ.s = -1
          }
          return QQ === ~~QQ && QQ < 1e7 ? (FQ.e = 0, void(FQ.d = [QQ])) : so(FQ, QQ.toString())
        }
        if ("string" !== typeof QQ) throw Error(uo + QQ);
        if (45 === QQ.charCodeAt(0) ? (QQ = QQ.slice(1), FQ.s = -1) : FQ.s = 1, !xo.test(QQ)) throw Error(uo + QQ);
        so(FQ, QQ)
      }
      if (oQ.prototype = Mo, oQ.ROUND_UP = 0, oQ.ROUND_DOWN = 1, oQ.ROUND_CEIL = 2, oQ.ROUND_FLOOR = 3, oQ.ROUND_HALF_UP = 4, oQ.ROUND_HALF_DOWN = 5, oQ.ROUND_HALF_EVEN = 6, oQ.ROUND_HALF_CEIL = 7, oQ.ROUND_HALF_FLOOR = 8, oQ.clone = QQ, oQ.config = oQ.set = To, void 0 === FQ && (FQ = {}), FQ)
        for (qQ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], wQ = 0; wQ < qQ.length;) FQ.hasOwnProperty(LQ = qQ[wQ++]) || (FQ[LQ] = this[LQ]);
      return oQ.config(FQ), oQ
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Do = new Ko(1);
    var zo;
    ! function(QQ) {
      QQ.AED = "aed", QQ.AFN = "afn", QQ.ALL = "all", QQ.AMD = "amd", QQ.ANG = "ang", QQ.AOA = "aoa", QQ.ARS = "ars", QQ.AUD = "aud", QQ.AWG = "awg", QQ.AZN = "azn", QQ.BAM = "bam", QQ.BBD = "bbd", QQ.BDT = "bdt", QQ.BGN = "bgn", QQ.BHD = "bhd", QQ.BIF = "bif", QQ.BMD = "bmd", QQ.BND = "bnd", QQ.BOB = "bob", QQ.BOV = "bov", QQ.BRL = "brl", QQ.BSD = "bsd", QQ.BTN = "btn", QQ.BWP = "bwp", QQ.BYN = "byn", QQ.BYR = "byr", QQ.BZD = "bzd", QQ.CAD = "cad", QQ.CDF = "cdf", QQ.CHE = "che", QQ.CHF = "chf", QQ.CHW = "chw", QQ.CLF = "clf", QQ.CLP = "clp", QQ.CNY = "cny", QQ.COP = "cop", QQ.COU = "cou", QQ.CRC = "crc", QQ.CUC = "cuc", QQ.CUP = "cup", QQ.CVE = "cve", QQ.CZK = "czk", QQ.DJF = "djf", QQ.DKK = "dkk", QQ.DOP = "dop", QQ.DZD = "dzd", QQ.EGP = "egp", QQ.ERN = "ern", QQ.ETB = "etb", QQ.EUR = "eur", QQ.FJD = "fjd", QQ.FKP = "fkp", QQ.GBP = "gbp", QQ.GEL = "gel", QQ.GHS = "ghs", QQ.GIP = "gip", QQ.GMD = "gmd", QQ.GNF = "gnf", QQ.GTQ = "gtq", QQ.GYD = "gyd", QQ.HKD = "hkd", QQ.HNL = "hnl", QQ.HRK = "hrk", QQ.HTG = "htg", QQ.HUF = "huf", QQ.IDR = "idr", QQ.ILS = "ils", QQ.INR = "inr", QQ.IQD = "iqd", QQ.IRR = "irr", QQ.ISK = "isk", QQ.JMD = "jmd", QQ.JOD = "jod", QQ.JPY = "jpy", QQ.KES = "kes", QQ.KGS = "kgs", QQ.KHR = "khr", QQ.KMF = "kmf", QQ.KPW = "kpw", QQ.KRW = "krw", QQ.KWD = "kwd", QQ.KYD = "kyd", QQ.KZT = "kzt", QQ.LAK = "lak", QQ.LBP = "lbp", QQ.LKR = "lkr", QQ.LRD = "lrd", QQ.LSL = "lsl", QQ.LTL = "ltl", QQ.LVL = "lvl", QQ.LYD = "lyd", QQ.MAD = "mad", QQ.MDL = "mdl", QQ.MGA = "mga", QQ.MKD = "mkd", QQ.MMK = "mmk", QQ.MNT = "mnt", QQ.MOP = "mop", QQ.MRO = "mro", QQ.MUR = "mur", QQ.MVR = "mvr", QQ.MWK = "mwk", QQ.MXN = "mxn", QQ.MXV = "mxv", QQ.MYR = "myr", QQ.MZN = "mzn", QQ.NAD = "nad", QQ.NGN = "ngn", QQ.NIO = "nio", QQ.NOK = "nok", QQ.NPR = "npr", QQ.NZD = "nzd", QQ.OMR = "omr", QQ.PAB = "pab", QQ.PEN = "pen", QQ.PGK = "pgk", QQ.PHP = "php", QQ.PKR = "pkr", QQ.PLN = "pln", QQ.PYG = "pyg", QQ.QAR = "qar", QQ.RON = "ron", QQ.RSD = "rsd", QQ.RUB = "rub", QQ.RWF = "rwf", QQ.SAR = "sar", QQ.SBD = "sbd", QQ.SCR = "scr", QQ.SDG = "sdg", QQ.SEK = "sek", QQ.SGD = "sgd", QQ.SHP = "shp", QQ.SLL = "sll", QQ.SOS = "sos", QQ.SRD = "srd", QQ.SSP = "ssp", QQ.STD = "std", QQ.SVC = "svc", QQ.SYP = "syp", QQ.SZL = "szl", QQ.THB = "thb", QQ.TJS = "tjs", QQ.TMT = "tmt", QQ.TND = "tnd", QQ.TOP = "top", QQ.TRY = "try", QQ.TTD = "ttd", QQ.TWD = "twd", QQ.TZS = "tzs", QQ.UAH = "uah", QQ.UGX = "ugx", QQ.USD = "usd", QQ.USN = "usn", QQ.USS = "uss", QQ.UYI = "uyi", QQ.UYU = "uyu", QQ.UZS = "uzs", QQ.VEF = "vef", QQ.VND = "vnd", QQ.VUV = "vuv", QQ.WST = "wst", QQ.XAF = "xaf", QQ.XAG = "xag", QQ.XAU = "xau", QQ.XBA = "xba", QQ.XBB = "xbb", QQ.XBC = "xbc", QQ.XBD = "xbd", QQ.XCD = "xcd", QQ.XDR = "xdr", QQ.XFU = "xfu", QQ.XOF = "xof", QQ.XPD = "xpd", QQ.XPF = "xpf", QQ.XPT = "xpt", QQ.XSU = "xsu", QQ.XTS = "xts", QQ.XUA = "xua", QQ.YER = "yer", QQ.ZAR = "zar", QQ.ZMW = "zmw", QQ.ZWL = "zwl"
    }(zo || (zo = {}));
    zo.AED, zo.AFN, zo.ALL, zo.AMD, zo.ANG, zo.AOA, zo.ARS, zo.AUD, zo.AWG, zo.AZN, zo.BAM, zo.BBD, zo.BDT, zo.BGN, zo.BHD, zo.BIF, zo.BMD, zo.BND, zo.BOB, zo.BOV, zo.BRL, zo.BSD, zo.BTN, zo.BWP, zo.BYR, zo.BYN, zo.BZD, zo.CAD, zo.CDF, zo.CHE, zo.CHF, zo.CHW, zo.CLF, zo.CLP, zo.CNY, zo.COP, zo.COU, zo.CRC, zo.CUC, zo.CUP, zo.CVE, zo.CZK, zo.DJF, zo.DKK, zo.DOP, zo.DZD, zo.EGP, zo.ERN, zo.ETB, zo.EUR, zo.FJD, zo.FKP, zo.GBP, zo.GEL, zo.GHS, zo.GIP, zo.GMD, zo.GNF, zo.GTQ, zo.GYD, zo.HKD, zo.HNL, zo.HRK, zo.HTG, zo.HUF, zo.IDR, zo.ILS, zo.INR, zo.IQD, zo.IRR, zo.ISK, zo.JMD, zo.JOD, zo.JPY, zo.KES, zo.KGS, zo.KHR, zo.KMF, zo.KPW, zo.KRW, zo.KWD, zo.KYD, zo.KZT, zo.LAK, zo.LBP, zo.LKR, zo.LRD, zo.LSL, zo.LTL, zo.LVL, zo.LYD, zo.MAD, zo.MDL, zo.MGA, zo.MKD, zo.MMK, zo.MNT, zo.MOP, zo.MRO, zo.MUR, zo.MVR, zo.MWK, zo.MXN, zo.MXV, zo.MYR, zo.MZN, zo.NAD, zo.NGN, zo.NIO, zo.NOK, zo.NPR, zo.NZD, zo.OMR, zo.PAB, zo.PEN, zo.PGK, zo.PHP, zo.PKR, zo.PLN, zo.PYG, zo.QAR, zo.RON, zo.RSD, zo.RUB, zo.RWF, zo.SAR, zo.SBD, zo.SCR, zo.SDG, zo.SEK, zo.SGD, zo.SHP, zo.SLL, zo.SOS, zo.SRD, zo.SSP, zo.STD, zo.SVC, zo.SYP, zo.SZL, zo.THB, zo.TJS, zo.TMT, zo.TND, zo.TOP, zo.TRY, zo.TTD, zo.TWD, zo.TZS, zo.UAH, zo.UGX, zo.USD, zo.USN, zo.USS, zo.UYI, zo.UYU, zo.UZS, zo.VEF, zo.VND, zo.VUV, zo.WST, zo.XAF, zo.XAG, zo.XAU, zo.XBA, zo.XBB, zo.XBC, zo.XBD, zo.XCD, zo.XDR, zo.XFU, zo.XOF, zo.XPD, zo.XPF, zo.XPT, zo.XSU, zo.XTS, zo.XUA, zo.YER, zo.ZAR, zo.ZMW, zo.ZWL;
    var jo = {
      exports: {}
    };
    ! function(QQ, FQ) {
      var wQ = "__lodash_hash_undefined__",
        LQ = 9007199254740991,
        oQ = "[object Arguments]",
        DQ = "[object Array]",
        kQ = "[object Boolean]",
        vQ = "[object Date]",
        mQ = "[object Error]",
        uQ = "[object Function]",
        HQ = "[object Map]",
        bQ = "[object Number]",
        YQ = "[object Object]",
        xQ = "[object Promise]",
        AQ = "[object RegExp]",
        tQ = "[object Set]",
        eQ = "[object String]",
        MQ = "[object Symbol]",
        GQ = "[object WeakMap]",
        pQ = "[object ArrayBuffer]",
        cQ = "[object DataView]",
        CQ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        SQ = /^\w*$/,
        iQ = /^\./,
        WQ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        RQ = /\\(\\)?/g,
        OQ = /^\[object .+?Constructor\]$/,
        sQ = /^(?:0|[1-9]\d*)$/,
        rQ = {};
      rQ["[object Float32Array]"] = rQ["[object Float64Array]"] = rQ["[object Int8Array]"] = rQ["[object Int16Array]"] = rQ["[object Int32Array]"] = rQ["[object Uint8Array]"] = rQ["[object Uint8ClampedArray]"] = rQ["[object Uint16Array]"] = rQ["[object Uint32Array]"] = !0, rQ[oQ] = rQ[DQ] = rQ[pQ] = rQ[kQ] = rQ[cQ] = rQ[vQ] = rQ[mQ] = rQ[uQ] = rQ[HQ] = rQ[bQ] = rQ[YQ] = rQ[AQ] = rQ[tQ] = rQ[eQ] = rQ[GQ] = !1;
      var IQ = "object" == typeof qQ && qQ && qQ.Object === Object && qQ,
        UQ = "object" == typeof self && self && self.Object === Object && self,
        NQ = IQ || UQ || Function("return this")(),
        TQ = FQ && !FQ.nodeType && FQ,
        KQ = TQ && QQ && !QQ.nodeType && QQ,
        zQ = KQ && KQ.exports === TQ && IQ.process,
        lQ = function() {
          try {
            return zQ && zQ.binding("util")
          } catch (QQ) {}
        }(),
        jQ = lQ && lQ.isTypedArray;

      function aQ(QQ, FQ) {
        for (var wQ = -1, LQ = QQ ? QQ.length : 0; ++wQ < LQ && !1 !== FQ(QQ[wQ], wQ, QQ););
        return QQ
      }

      function XQ(QQ, FQ) {
        for (var wQ = -1, LQ = QQ ? QQ.length : 0; ++wQ < LQ;)
          if (FQ(QQ[wQ], wQ, QQ)) return !0;
        return !1
      }

      function fQ(QQ) {
        var FQ = !1;
        if (null != QQ && "function" != typeof QQ.toString) try {
          FQ = !!(QQ + "")
        } catch (wQ) {}
        return FQ
      }

      function VQ(QQ) {
        var FQ = -1,
          wQ = Array(QQ.size);
        return QQ.forEach((function(QQ, LQ) {
          wQ[++FQ] = [LQ, QQ]
        })), wQ
      }

      function hQ(QQ, FQ) {
        return function(wQ) {
          return QQ(FQ(wQ))
        }
      }

      function JQ(QQ) {
        var FQ = -1,
          wQ = Array(QQ.size);
        return QQ.forEach((function(QQ) {
          wQ[++FQ] = QQ
        })), wQ
      }
      var EQ = Array.prototype,
        nQ = Function.prototype,
        gQ = Object.prototype,
        PQ = NQ["__core-js_shared__"],
        ZQ = function() {
          var QQ = /[^.]+$/.exec(PQ && PQ.keys && PQ.keys.IE_PROTO || "");
          return QQ ? "Symbol(src)_1." + QQ : ""
        }(),
        yQ = nQ.toString,
        BQ = gQ.hasOwnProperty,
        dQ = gQ.toString,
        QF = RegExp("^" + yQ.call(BQ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        FF = NQ.Symbol,
        wF = NQ.Uint8Array,
        LF = hQ(Object.getPrototypeOf, Object),
        qF = Object.create,
        oF = gQ.propertyIsEnumerable,
        DF = EQ.splice,
        kF = hQ(Object.keys, Object),
        vF = VF(NQ, "DataView"),
        mF = VF(NQ, "Map"),
        uF = VF(NQ, "Promise"),
        HF = VF(NQ, "Set"),
        bF = VF(NQ, "WeakMap"),
        YF = VF(Object, "create"),
        xF = yF(vF),
        AF = yF(mF),
        tF = yF(uF),
        eF = yF(HF),
        MF = yF(bF),
        GF = FF ? FF.prototype : void 0,
        pF = GF ? GF.valueOf : void 0,
        cF = GF ? GF.toString : void 0;

      function CF(QQ) {
        var FQ = -1,
          wQ = QQ ? QQ.length : 0;
        for (this.clear(); ++FQ < wQ;) {
          var LQ = QQ[FQ];
          this.set(LQ[0], LQ[1])
        }
      }

      function SF(QQ) {
        var FQ = -1,
          wQ = QQ ? QQ.length : 0;
        for (this.clear(); ++FQ < wQ;) {
          var LQ = QQ[FQ];
          this.set(LQ[0], LQ[1])
        }
      }

      function iF(QQ) {
        var FQ = -1,
          wQ = QQ ? QQ.length : 0;
        for (this.clear(); ++FQ < wQ;) {
          var LQ = QQ[FQ];
          this.set(LQ[0], LQ[1])
        }
      }

      function WF(QQ) {
        var FQ = -1,
          wQ = QQ ? QQ.length : 0;
        for (this.__data__ = new iF; ++FQ < wQ;) this.add(QQ[FQ])
      }

      function RF(QQ) {
        this.__data__ = new SF(QQ)
      }

      function OF(QQ, FQ) {
        var wQ = Fw(QQ) || Qw(QQ) ? function(QQ, FQ) {
            for (var wQ = -1, LQ = Array(QQ); ++wQ < QQ;) LQ[wQ] = FQ(wQ);
            return LQ
          }(QQ.length, String) : [],
          LQ = wQ.length,
          qQ = !!LQ;
        for (var oQ in QQ) !FQ && !BQ.call(QQ, oQ) || qQ && ("length" == oQ || JF(oQ, LQ)) || wQ.push(oQ);
        return wQ
      }

      function sF(QQ, FQ) {
        for (var wQ = QQ.length; wQ--;)
          if (dF(QQ[wQ][0], FQ)) return wQ;
        return -1
      }
      CF.prototype.clear = function() {
        this.__data__ = YF ? YF(null) : {}
      }, CF.prototype.delete = function(QQ) {
        return this.has(QQ) && delete this.__data__[QQ]
      }, CF.prototype.get = function(QQ) {
        var FQ = this.__data__;
        if (YF) {
          var LQ = FQ[QQ];
          return LQ === wQ ? void 0 : LQ
        }
        return BQ.call(FQ, QQ) ? FQ[QQ] : void 0
      }, CF.prototype.has = function(QQ) {
        var FQ = this.__data__;
        return YF ? void 0 !== FQ[QQ] : BQ.call(FQ, QQ)
      }, CF.prototype.set = function(QQ, FQ) {
        return this.__data__[QQ] = YF && void 0 === FQ ? wQ : FQ, this
      }, SF.prototype.clear = function() {
        this.__data__ = []
      }, SF.prototype.delete = function(QQ) {
        var FQ = this.__data__,
          wQ = sF(FQ, QQ);
        return !(wQ < 0) && (wQ == FQ.length - 1 ? FQ.pop() : DF.call(FQ, wQ, 1), !0)
      }, SF.prototype.get = function(QQ) {
        var FQ = this.__data__,
          wQ = sF(FQ, QQ);
        return wQ < 0 ? void 0 : FQ[wQ][1]
      }, SF.prototype.has = function(QQ) {
        return sF(this.__data__, QQ) > -1
      }, SF.prototype.set = function(QQ, FQ) {
        var wQ = this.__data__,
          LQ = sF(wQ, QQ);
        return LQ < 0 ? wQ.push([QQ, FQ]) : wQ[LQ][1] = FQ, this
      }, iF.prototype.clear = function() {
        this.__data__ = {
          hash: new CF,
          map: new(mF || SF),
          string: new CF
        }
      }, iF.prototype.delete = function(QQ) {
        return fF(this, QQ).delete(QQ)
      }, iF.prototype.get = function(QQ) {
        return fF(this, QQ).get(QQ)
      }, iF.prototype.has = function(QQ) {
        return fF(this, QQ).has(QQ)
      }, iF.prototype.set = function(QQ, FQ) {
        return fF(this, QQ).set(QQ, FQ), this
      }, WF.prototype.add = WF.prototype.push = function(QQ) {
        return this.__data__.set(QQ, wQ), this
      }, WF.prototype.has = function(QQ) {
        return this.__data__.has(QQ)
      }, RF.prototype.clear = function() {
        this.__data__ = new SF
      }, RF.prototype.delete = function(QQ) {
        return this.__data__.delete(QQ)
      }, RF.prototype.get = function(QQ) {
        return this.__data__.get(QQ)
      }, RF.prototype.has = function(QQ) {
        return this.__data__.has(QQ)
      }, RF.prototype.set = function(QQ, FQ) {
        var wQ = this.__data__;
        if (wQ instanceof SF) {
          var LQ = wQ.__data__;
          if (!mF || LQ.length < 199) return LQ.push([QQ, FQ]), this;
          wQ = this.__data__ = new iF(LQ)
        }
        return wQ.set(QQ, FQ), this
      };
      var rF, IF = function(QQ, FQ, wQ) {
        for (var LQ = -1, qQ = Object(QQ), oQ = wQ(QQ), DQ = oQ.length; DQ--;) {
          var kQ = oQ[rF ? DQ : ++LQ];
          if (!1 === FQ(qQ[kQ], kQ, qQ)) break
        }
        return QQ
      };

      function UF(QQ, FQ) {
        return QQ && IF(QQ, FQ, uw)
      }

      function NF(QQ, FQ) {
        for (var wQ = 0, LQ = (FQ = EF(FQ, QQ) ? [FQ] : aF(FQ)).length; null != QQ && wQ < LQ;) QQ = QQ[ZF(FQ[wQ++])];
        return wQ && wQ == LQ ? QQ : void 0
      }

      function TF(QQ, FQ) {
        return null != QQ && FQ in Object(QQ)
      }

      function KF(QQ, FQ, wQ, LQ, qQ) {
        return QQ === FQ || (null == QQ || null == FQ || !ow(QQ) && !Dw(FQ) ? QQ !== QQ && FQ !== FQ : function(QQ, FQ, wQ, LQ, qQ, uQ) {
          var xQ = Fw(QQ),
            GQ = Fw(FQ),
            CQ = DQ,
            SQ = DQ;
          xQ || (CQ = (CQ = hF(QQ)) == oQ ? YQ : CQ);
          GQ || (SQ = (SQ = hF(FQ)) == oQ ? YQ : SQ);
          var iQ = CQ == YQ && !fQ(QQ),
            WQ = SQ == YQ && !fQ(FQ),
            RQ = CQ == SQ;
          if (RQ && !iQ) return uQ || (uQ = new RF), xQ || mw(QQ) ? XF(QQ, FQ, wQ, LQ, qQ, uQ) : function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
            switch (wQ) {
              case cQ:
                if (QQ.byteLength != FQ.byteLength || QQ.byteOffset != FQ.byteOffset) return !1;
                QQ = QQ.buffer, FQ = FQ.buffer;
              case pQ:
                return !(QQ.byteLength != FQ.byteLength || !LQ(new wF(QQ), new wF(FQ)));
              case kQ:
              case vQ:
              case bQ:
                return dF(+QQ, +FQ);
              case mQ:
                return QQ.name == FQ.name && QQ.message == FQ.message;
              case AQ:
              case eQ:
                return QQ == FQ + "";
              case HQ:
                var uQ = VQ;
              case tQ:
                var YQ = 2 & oQ;
                if (uQ || (uQ = JQ), QQ.size != FQ.size && !YQ) return !1;
                var xQ = DQ.get(QQ);
                if (xQ) return xQ == FQ;
                oQ |= 1, DQ.set(QQ, FQ);
                var GQ = XF(uQ(QQ), uQ(FQ), LQ, qQ, oQ, DQ);
                return DQ.delete(QQ), GQ;
              case MQ:
                if (pF) return pF.call(QQ) == pF.call(FQ)
            }
            return !1
          }(QQ, FQ, CQ, wQ, LQ, qQ, uQ);
          if (!(2 & qQ)) {
            var OQ = iQ && BQ.call(QQ, "__wrapped__"),
              sQ = WQ && BQ.call(FQ, "__wrapped__");
            if (OQ || sQ) {
              var rQ = OQ ? QQ.value() : QQ,
                IQ = sQ ? FQ.value() : FQ;
              return uQ || (uQ = new RF), wQ(rQ, IQ, LQ, qQ, uQ)
            }
          }
          if (!RQ) return !1;
          return uQ || (uQ = new RF),
            function(QQ, FQ, wQ, LQ, qQ, oQ) {
              var DQ = 2 & qQ,
                kQ = uw(QQ),
                vQ = kQ.length,
                mQ = uw(FQ),
                uQ = mQ.length;
              if (vQ != uQ && !DQ) return !1;
              var HQ = vQ;
              for (; HQ--;) {
                var bQ = kQ[HQ];
                if (!(DQ ? bQ in FQ : BQ.call(FQ, bQ))) return !1
              }
              var YQ = oQ.get(QQ);
              if (YQ && oQ.get(FQ)) return YQ == FQ;
              var xQ = !0;
              oQ.set(QQ, FQ), oQ.set(FQ, QQ);
              var AQ = DQ;
              for (; ++HQ < vQ;) {
                var tQ = QQ[bQ = kQ[HQ]],
                  eQ = FQ[bQ];
                if (LQ) var MQ = DQ ? LQ(eQ, tQ, bQ, FQ, QQ, oQ) : LQ(tQ, eQ, bQ, QQ, FQ, oQ);
                if (!(void 0 === MQ ? tQ === eQ || wQ(tQ, eQ, LQ, qQ, oQ) : MQ)) {
                  xQ = !1;
                  break
                }
                AQ || (AQ = "constructor" == bQ)
              }
              if (xQ && !AQ) {
                var GQ = QQ.constructor,
                  pQ = FQ.constructor;
                GQ == pQ || !("constructor" in QQ) || !("constructor" in FQ) || "function" == typeof GQ && GQ instanceof GQ && "function" == typeof pQ && pQ instanceof pQ || (xQ = !1)
              }
              return oQ.delete(QQ), oQ.delete(FQ), xQ
            }(QQ, FQ, wQ, LQ, qQ, uQ)
        }(QQ, FQ, KF, wQ, LQ, qQ))
      }

      function zF(QQ) {
        return !(!ow(QQ) || (FQ = QQ, ZQ && ZQ in FQ)) && (Lw(QQ) || fQ(QQ) ? QF : OQ).test(yF(QQ));
        var FQ
      }

      function lF(QQ) {
        return "function" == typeof QQ ? QQ : null == QQ ? Hw : "object" == typeof QQ ? Fw(QQ) ? function(QQ, FQ) {
          if (EF(QQ) && nF(FQ)) return gF(ZF(QQ), FQ);
          return function(wQ) {
            var LQ = function(QQ, FQ, wQ) {
              var LQ = null == QQ ? void 0 : NF(QQ, FQ);
              return void 0 === LQ ? wQ : LQ
            }(wQ, QQ);
            return void 0 === LQ && LQ === FQ ? function(QQ, FQ) {
              return null != QQ && function(QQ, FQ, wQ) {
                FQ = EF(FQ, QQ) ? [FQ] : aF(FQ);
                var LQ, qQ = -1,
                  oQ = FQ.length;
                for (; ++qQ < oQ;) {
                  var DQ = ZF(FQ[qQ]);
                  if (!(LQ = null != QQ && wQ(QQ, DQ))) break;
                  QQ = QQ[DQ]
                }
                if (LQ) return LQ;
                oQ = QQ ? QQ.length : 0;
                return !!oQ && qw(oQ) && JF(DQ, oQ) && (Fw(QQ) || Qw(QQ))
              }(QQ, FQ, TF)
            }(wQ, QQ) : KF(FQ, LQ, void 0, 3)
          }
        }(QQ[0], QQ[1]) : function(QQ) {
          var FQ = function(QQ) {
            var FQ = uw(QQ),
              wQ = FQ.length;
            for (; wQ--;) {
              var LQ = FQ[wQ],
                qQ = QQ[LQ];
              FQ[wQ] = [LQ, qQ, nF(qQ)]
            }
            return FQ
          }(QQ);
          if (1 == FQ.length && FQ[0][2]) return gF(FQ[0][0], FQ[0][1]);
          return function(wQ) {
            return wQ === QQ || function(QQ, FQ, wQ, LQ) {
              var qQ = wQ.length,
                oQ = qQ,
                DQ = !LQ;
              if (null == QQ) return !oQ;
              for (QQ = Object(QQ); qQ--;) {
                var kQ = wQ[qQ];
                if (DQ && kQ[2] ? kQ[1] !== QQ[kQ[0]] : !(kQ[0] in QQ)) return !1
              }
              for (; ++qQ < oQ;) {
                var vQ = (kQ = wQ[qQ])[0],
                  mQ = QQ[vQ],
                  uQ = kQ[1];
                if (DQ && kQ[2]) {
                  if (void 0 === mQ && !(vQ in QQ)) return !1
                } else {
                  var HQ = new RF;
                  if (LQ) var bQ = LQ(mQ, uQ, vQ, QQ, FQ, HQ);
                  if (!(void 0 === bQ ? KF(uQ, mQ, LQ, 3, HQ) : bQ)) return !1
                }
              }
              return !0
            }(wQ, QQ, FQ)
          }
        }(QQ) : function(QQ) {
          return EF(QQ) ? (FQ = ZF(QQ), function(QQ) {
            return null == QQ ? void 0 : QQ[FQ]
          }) : function(QQ) {
            return function(FQ) {
              return NF(FQ, QQ)
            }
          }(QQ);
          var FQ
        }(QQ)
      }

      function jF(QQ) {
        if (! function(QQ) {
            var FQ = QQ && QQ.constructor,
              wQ = "function" == typeof FQ && FQ.prototype || gQ;
            return QQ === wQ
          }(QQ)) return kF(QQ);
        var FQ = [];
        for (var wQ in Object(QQ)) BQ.call(QQ, wQ) && "constructor" != wQ && FQ.push(wQ);
        return FQ
      }

      function aF(QQ) {
        return Fw(QQ) ? QQ : PF(QQ)
      }

      function XF(QQ, FQ, wQ, LQ, qQ, oQ) {
        var DQ = 2 & qQ,
          kQ = QQ.length,
          vQ = FQ.length;
        if (kQ != vQ && !(DQ && vQ > kQ)) return !1;
        var mQ = oQ.get(QQ);
        if (mQ && oQ.get(FQ)) return mQ == FQ;
        var uQ = -1,
          HQ = !0,
          bQ = 1 & qQ ? new WF : void 0;
        for (oQ.set(QQ, FQ), oQ.set(FQ, QQ); ++uQ < kQ;) {
          var YQ = QQ[uQ],
            xQ = FQ[uQ];
          if (LQ) var AQ = DQ ? LQ(xQ, YQ, uQ, FQ, QQ, oQ) : LQ(YQ, xQ, uQ, QQ, FQ, oQ);
          if (void 0 !== AQ) {
            if (AQ) continue;
            HQ = !1;
            break
          }
          if (bQ) {
            if (!XQ(FQ, (function(QQ, FQ) {
                if (!bQ.has(FQ) && (YQ === QQ || wQ(YQ, QQ, LQ, qQ, oQ))) return bQ.add(FQ)
              }))) {
              HQ = !1;
              break
            }
          } else if (YQ !== xQ && !wQ(YQ, xQ, LQ, qQ, oQ)) {
            HQ = !1;
            break
          }
        }
        return oQ.delete(QQ), oQ.delete(FQ), HQ
      }

      function fF(QQ, FQ) {
        var wQ = QQ.__data__;
        return function(QQ) {
          var FQ = typeof QQ;
          return "string" == FQ || "number" == FQ || "symbol" == FQ || "boolean" == FQ ? "__proto__" !== QQ : null === QQ
        }(FQ) ? wQ["string" == typeof FQ ? "string" : "hash"] : wQ.map
      }

      function VF(QQ, FQ) {
        var wQ = function(QQ, FQ) {
          return null == QQ ? void 0 : QQ[FQ]
        }(QQ, FQ);
        return zF(wQ) ? wQ : void 0
      }
      var hF = function(QQ) {
        return dQ.call(QQ)
      };

      function JF(QQ, FQ) {
        return !!(FQ = null == FQ ? LQ : FQ) && ("number" == typeof QQ || sQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < FQ
      }

      function EF(QQ, FQ) {
        if (Fw(QQ)) return !1;
        var wQ = typeof QQ;
        return !("number" != wQ && "symbol" != wQ && "boolean" != wQ && null != QQ && !kw(QQ)) || (SQ.test(QQ) || !CQ.test(QQ) || null != FQ && QQ in Object(FQ))
      }

      function nF(QQ) {
        return QQ === QQ && !ow(QQ)
      }

      function gF(QQ, FQ) {
        return function(wQ) {
          return null != wQ && (wQ[QQ] === FQ && (void 0 !== FQ || QQ in Object(wQ)))
        }
      }(vF && hF(new vF(new ArrayBuffer(1))) != cQ || mF && hF(new mF) != HQ || uF && hF(uF.resolve()) != xQ || HF && hF(new HF) != tQ || bF && hF(new bF) != GQ) && (hF = function(QQ) {
        var FQ = dQ.call(QQ),
          wQ = FQ == YQ ? QQ.constructor : void 0,
          LQ = wQ ? yF(wQ) : void 0;
        if (LQ) switch (LQ) {
          case xF:
            return cQ;
          case AF:
            return HQ;
          case tF:
            return xQ;
          case eF:
            return tQ;
          case MF:
            return GQ
        }
        return FQ
      });
      var PF = BF((function(QQ) {
        var FQ;
        QQ = null == (FQ = QQ) ? "" : function(QQ) {
          if ("string" == typeof QQ) return QQ;
          if (kw(QQ)) return cF ? cF.call(QQ) : "";
          var FQ = QQ + "";
          return "0" == FQ && 1 / QQ == -1 / 0 ? "-0" : FQ
        }(FQ);
        var wQ = [];
        return iQ.test(QQ) && wQ.push(""), QQ.replace(WQ, (function(QQ, FQ, LQ, qQ) {
          wQ.push(LQ ? qQ.replace(RQ, "$1") : FQ || QQ)
        })), wQ
      }));

      function ZF(QQ) {
        if ("string" == typeof QQ || kw(QQ)) return QQ;
        var FQ = QQ + "";
        return "0" == FQ && 1 / QQ == -1 / 0 ? "-0" : FQ
      }

      function yF(QQ) {
        if (null != QQ) {
          try {
            return yQ.call(QQ)
          } catch (FQ) {}
          try {
            return QQ + ""
          } catch (FQ) {}
        }
        return ""
      }

      function BF(QQ, FQ) {
        if ("function" != typeof QQ || FQ && "function" != typeof FQ) throw new TypeError("Expected a function");
        var wQ = function() {
          var LQ = arguments,
            qQ = FQ ? FQ.apply(this, LQ) : LQ[0],
            oQ = wQ.cache;
          if (oQ.has(qQ)) return oQ.get(qQ);
          var DQ = QQ.apply(this, LQ);
          return wQ.cache = oQ.set(qQ, DQ), DQ
        };
        return wQ.cache = new(BF.Cache || iF), wQ
      }

      function dF(QQ, FQ) {
        return QQ === FQ || QQ !== QQ && FQ !== FQ
      }

      function Qw(QQ) {
        return function(QQ) {
          return Dw(QQ) && ww(QQ)
        }(QQ) && BQ.call(QQ, "callee") && (!oF.call(QQ, "callee") || dQ.call(QQ) == oQ)
      }
      BF.Cache = iF;
      var Fw = Array.isArray;

      function ww(QQ) {
        return null != QQ && qw(QQ.length) && !Lw(QQ)
      }

      function Lw(QQ) {
        var FQ = ow(QQ) ? dQ.call(QQ) : "";
        return FQ == uQ || "[object GeneratorFunction]" == FQ
      }

      function qw(QQ) {
        return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= LQ
      }

      function ow(QQ) {
        var FQ = typeof QQ;
        return !!QQ && ("object" == FQ || "function" == FQ)
      }

      function Dw(QQ) {
        return !!QQ && "object" == typeof QQ
      }

      function kw(QQ) {
        return "symbol" == typeof QQ || Dw(QQ) && dQ.call(QQ) == MQ
      }
      var vw, mw = jQ ? (vw = jQ, function(QQ) {
        return vw(QQ)
      }) : function(QQ) {
        return Dw(QQ) && qw(QQ.length) && !!rQ[dQ.call(QQ)]
      };

      function uw(QQ) {
        return ww(QQ) ? OF(QQ) : jF(QQ)
      }

      function Hw(QQ) {
        return QQ
      }
      QQ.exports = function(QQ, FQ, wQ) {
        var LQ, qQ = Fw(QQ) || mw(QQ);
        if (FQ = lF(FQ), null == wQ)
          if (qQ || ow(QQ)) {
            var oQ = QQ.constructor;
            wQ = qQ ? Fw(QQ) ? new oQ : [] : Lw(oQ) ? ow(LQ = LF(QQ)) ? qF(LQ) : {} : {}
          } else wQ = {};
        return (qQ ? aQ : UF)(QQ, (function(QQ, LQ, qQ) {
          return FQ(wQ, QQ, LQ, qQ)
        })), wQ
      }
    }(jo, jo.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: ao
    } = LQ
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);