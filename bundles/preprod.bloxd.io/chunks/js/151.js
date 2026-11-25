export const id = 151;
export const ids = [151];
export const modules = {
  8470: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TT,
      e: () => CX
    });
    var wQ = {};
    XQ.r(wQ), XQ.d(wQ, {
      c: () => ww,
      k: () => zw,
      g: () => Tw,
      l: () => ZX,
      p: () => NX,
      t: () => hw,
      x: () => mX,
      A: () => Rw,
      E: () => bw,
      G: () => Aw,
      I: () => OX,
      K: () => dw,
      M: () => lw,
      O: () => iw,
      T: () => KX,
      R: () => Ww,
      W: () => aw,
      Y: () => Hw
    });
    var qQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function TQ(QQ) {
      return QQ && QQ.__esModule && Object.prototype.hasOwnProperty.call(QQ, "default") ? QQ.default : QQ
    }
    var zQ = {
      exports: {}
    };
    ! function(QQ) {
      var WQ = Object.prototype.hasOwnProperty,
        XQ = "~";

      function wQ() {}

      function qQ(QQ, WQ, XQ) {
        this.NI = QQ, this.context = WQ, this.once = XQ || !1
      }

      function TQ(QQ, WQ, wQ, TQ, zQ) {
        if ("function" !== typeof wQ) throw new TypeError("The listener must be a function");
        var sQ = new qQ(wQ, TQ || QQ, zQ),
          FQ = XQ ? XQ + WQ : WQ;
        return QQ._events[FQ] ? QQ._events[FQ].NI ? QQ._events[FQ] = [QQ._events[FQ], sQ] : QQ._events[FQ].push(sQ) : (QQ._events[FQ] = sQ, QQ._eventsCount++), QQ
      }

      function zQ(QQ, WQ) {
        0 === --QQ._eventsCount ? QQ._events = new wQ : delete QQ._events[WQ]
      }

      function sQ() {
        this._events = new wQ, this._eventsCount = 0
      }
      Object.create && (wQ.prototype = Object.create(null), (new wQ).__proto__ || (XQ = !1)), sQ.prototype.eventNames = function() {
        var QQ, wQ, qQ = [];
        if (0 === this._eventsCount) return qQ;
        for (wQ in QQ = this._events) WQ.call(QQ, wQ) && qQ.push(XQ ? wQ.slice(1) : wQ);
        return Object.getOwnPropertySymbols ? qQ.concat(Object.getOwnPropertySymbols(QQ)) : qQ
      }, sQ.prototype.listeners = function(QQ) {
        var WQ = XQ ? XQ + QQ : QQ,
          wQ = this._events[WQ];
        if (!wQ) return [];
        if (wQ.NI) return [wQ.NI];
        for (var qQ = 0, TQ = wQ.length, zQ = new Array(TQ); qQ < TQ; qQ++) zQ[qQ] = wQ[qQ].NI;
        return zQ
      }, sQ.prototype.listenerCount = function(QQ) {
        var WQ = XQ ? XQ + QQ : QQ,
          wQ = this._events[WQ];
        return wQ ? wQ.NI ? 1 : wQ.length : 0
      }, sQ.prototype.emit = function(QQ, WQ, wQ, qQ, TQ, zQ) {
        var sQ = XQ ? XQ + QQ : QQ;
        if (!this._events[sQ]) return !1;
        var FQ, PQ, gQ = this._events[sQ],
          JQ = arguments.length;
        if (gQ.NI) {
          switch (gQ.once && this.removeListener(QQ, gQ.NI, void 0, !0), JQ) {
            case 1:
              return gQ.NI.call(gQ.context), !0;
            case 2:
              return gQ.NI.call(gQ.context, WQ), !0;
            case 3:
              return gQ.NI.call(gQ.context, WQ, wQ), !0;
            case 4:
              return gQ.NI.call(gQ.context, WQ, wQ, qQ), !0;
            case 5:
              return gQ.NI.call(gQ.context, WQ, wQ, qQ, TQ), !0;
            case 6:
              return gQ.NI.call(gQ.context, WQ, wQ, qQ, TQ, zQ), !0
          }
          for (PQ = 1, FQ = new Array(JQ - 1); PQ < JQ; PQ++) FQ[PQ - 1] = arguments[PQ];
          gQ.NI.apply(gQ.context, FQ)
        } else {
          var rQ, IQ = gQ.length;
          for (PQ = 0; PQ < IQ; PQ++) switch (gQ[PQ].once && this.removeListener(QQ, gQ[PQ].NI, void 0, !0), JQ) {
            case 1:
              gQ[PQ].NI.call(gQ[PQ].context);
              break;
            case 2:
              gQ[PQ].NI.call(gQ[PQ].context, WQ);
              break;
            case 3:
              gQ[PQ].NI.call(gQ[PQ].context, WQ, wQ);
              break;
            case 4:
              gQ[PQ].NI.call(gQ[PQ].context, WQ, wQ, qQ);
              break;
            default:
              if (!FQ)
                for (rQ = 1, FQ = new Array(JQ - 1); rQ < JQ; rQ++) FQ[rQ - 1] = arguments[rQ];
              gQ[PQ].NI.apply(gQ[PQ].context, FQ)
          }
        }
        return !0
      }, sQ.prototype.on = function(QQ, WQ, XQ) {
        return TQ(this, QQ, WQ, XQ, !1)
      }, sQ.prototype.once = function(QQ, WQ, XQ) {
        return TQ(this, QQ, WQ, XQ, !0)
      }, sQ.prototype.removeListener = function(QQ, WQ, wQ, qQ) {
        var TQ = XQ ? XQ + QQ : QQ;
        if (!this._events[TQ]) return this;
        if (!WQ) return zQ(this, TQ), this;
        var sQ = this._events[TQ];
        if (sQ.NI) sQ.NI !== WQ || qQ && !sQ.once || wQ && sQ.context !== wQ || zQ(this, TQ);
        else {
          for (var FQ = 0, PQ = [], gQ = sQ.length; FQ < gQ; FQ++)(sQ[FQ].NI !== WQ || qQ && !sQ[FQ].once || wQ && sQ[FQ].context !== wQ) && PQ.push(sQ[FQ]);
          PQ.length ? this._events[TQ] = 1 === PQ.length ? PQ[0] : PQ : zQ(this, TQ)
        }
        return this
      }, sQ.prototype.yV = function(QQ) {
        var WQ;
        return QQ ? (WQ = XQ ? XQ + QQ : QQ, this._events[WQ] && zQ(this, WQ)) : (this._events = new wQ, this._eventsCount = 0), this
      }, sQ.prototype.off = sQ.prototype.removeListener, sQ.prototype.addListener = sQ.prototype.on, sQ.prefixed = XQ, sQ.EventEmitter = sQ, QQ.exports = sQ
    }(zQ);
    var sQ, FQ, PQ = TQ(zQ.exports);
    ! function(QQ) {
      QQ.assertEqual = QQ => QQ, QQ.assertIs = function(QQ) {}, QQ.assertNever = function(QQ) {
        throw new Error
      }, QQ.arrayToEnum = QQ => {
        const WQ = {};
        for (const XQ of QQ) WQ[XQ] = XQ;
        return WQ
      }, QQ.getValidEnumValues = WQ => {
        const XQ = QQ.objectKeys(WQ).filter((QQ => "number" !== typeof WQ[WQ[QQ]])),
          wQ = {};
        for (const QQ of XQ) wQ[QQ] = WQ[QQ];
        return QQ.objectValues(wQ)
      }, QQ.objectValues = WQ => QQ.objectKeys(WQ).map((function(QQ) {
        return WQ[QQ]
      })), QQ.objectKeys = "function" === typeof Object.keys ? QQ => Object.keys(QQ) : QQ => {
        const WQ = [];
        for (const XQ in QQ) Object.prototype.hasOwnProperty.call(QQ, XQ) && WQ.push(XQ);
        return WQ
      }, QQ.find = (QQ, WQ) => {
        for (const XQ of QQ)
          if (WQ(XQ)) return XQ
      }, QQ.isInteger = "function" === typeof Number.isInteger ? QQ => Number.isInteger(QQ) : QQ => "number" === typeof QQ && isFinite(QQ) && Math.floor(QQ) === QQ, QQ.joinValues = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return QQ.map((QQ => "string" === typeof QQ ? `'${QQ}'` : QQ)).join(WQ)
      }, QQ.jsonStringifyReplacer = (QQ, WQ) => "bigint" === typeof WQ ? WQ.toString() : WQ
    }(sQ || (sQ = {})),
    function(QQ) {
      QQ.mergeShapes = (QQ, WQ) => ({
        ...QQ,
        ...WQ
      })
    }(FQ || (FQ = {}));
    const gQ = sQ.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      JQ = QQ => {
        switch (typeof QQ) {
          case "undefined":
            return gQ.undefined;
          case "string":
            return gQ.string;
          case "number":
            return isNaN(QQ) ? gQ.nan : gQ.number;
          case "boolean":
            return gQ.boolean;
          case "function":
            return gQ.function;
          case "bigint":
            return gQ.bigint;
          case "symbol":
            return gQ.symbol;
          case "object":
            return Array.isArray(QQ) ? gQ.array : null === QQ ? gQ.null : QQ.then && "function" === typeof QQ.then && QQ.catch && "function" === typeof QQ.catch ? gQ.promise : "undefined" !== typeof Map && QQ instanceof Map ? gQ.map : "undefined" !== typeof Set && QQ instanceof Set ? gQ.set : "undefined" !== typeof Date && QQ instanceof Date ? gQ.date : gQ.object;
          default:
            return gQ.unknown
        }
      },
      rQ = sQ.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class IQ extends Error {
      constructor(QQ) {
        var WQ;
        super(), WQ = this, this.issues = [], this.addIssue = QQ => {
          this.issues = [...this.issues, QQ]
        }, this.addIssues = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          WQ.issues = [...WQ.issues, ...QQ]
        };
        const XQ = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, XQ) : this.__proto__ = XQ, this.name = "ZodError", this.issues = QQ
      }
      get errors() {
        return this.issues
      }
      format(QQ) {
        const WQ = QQ || function(QQ) {
            return QQ.message
          },
          XQ = {
            _errors: []
          },
          wQ = QQ => {
            for (const qQ of QQ.issues)
              if ("invalid_union" === qQ.code) qQ.unionErrors.map(wQ);
              else if ("invalid_return_type" === qQ.code) wQ(qQ.returnTypeError);
            else if ("invalid_arguments" === qQ.code) wQ(qQ.argumentsError);
            else if (0 === qQ.path.length) XQ._errors.push(WQ(qQ));
            else {
              let QQ = XQ,
                wQ = 0;
              for (; wQ < qQ.path.length;) {
                const XQ = qQ.path[wQ];
                wQ === qQ.path.length - 1 ? (QQ[XQ] = QQ[XQ] || {
                  _errors: []
                }, QQ[XQ]._errors.push(WQ(qQ))) : QQ[XQ] = QQ[XQ] || {
                  _errors: []
                }, QQ = QQ[XQ], wQ++
              }
            }
          };
        return wQ(this), XQ
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, sQ.jsonStringifyReplacer, 2)
      }
      get mI() {
        return 0 === this.issues.length
      }
      flatten() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QQ => QQ.message;
        const WQ = {},
          XQ = [];
        for (const wQ of this.issues) wQ.path.length > 0 ? (WQ[wQ.path[0]] = WQ[wQ.path[0]] || [], WQ[wQ.path[0]].push(QQ(wQ))) : XQ.push(QQ(wQ));
        return {
          formErrors: XQ,
          fieldErrors: WQ
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    IQ.create = QQ => new IQ(QQ);
    const jQ = (QQ, WQ) => {
      let XQ;
      switch (QQ.code) {
        case rQ.invalid_type:
          XQ = QQ.received === gQ.undefined ? "Required" : `Expected ${QQ.expected}, received ${QQ.received}`;
          break;
        case rQ.invalid_literal:
          XQ = `Invalid literal value, expected ${JSON.stringify(QQ.expected,sQ.jsonStringifyReplacer)}`;
          break;
        case rQ.unrecognized_keys:
          XQ = `Unrecognized key(s) in object: ${sQ.joinValues(QQ.keys,", ")}`;
          break;
        case rQ.invalid_union:
          XQ = "Invalid input";
          break;
        case rQ.invalid_union_discriminator:
          XQ = `Invalid discriminator value. Expected ${sQ.joinValues(QQ.options)}`;
          break;
        case rQ.invalid_enum_value:
          XQ = `Invalid enum value. Expected ${sQ.joinValues(QQ.options)}, received '${QQ.received}'`;
          break;
        case rQ.invalid_arguments:
          XQ = "Invalid function arguments";
          break;
        case rQ.invalid_return_type:
          XQ = "Invalid function return type";
          break;
        case rQ.invalid_date:
          XQ = "Invalid date";
          break;
        case rQ.invalid_string:
          "object" === typeof QQ.validation ? "includes" in QQ.validation ? (XQ = `Invalid input: must include "${QQ.validation.includes}"`, "number" === typeof QQ.validation.position && (XQ = `${XQ} at one or more positions greater than or equal to ${QQ.validation.position}`)) : "startsWith" in QQ.validation ? XQ = `Invalid input: must start with "${QQ.validation.startsWith}"` : "endsWith" in QQ.validation ? XQ = `Invalid input: must end with "${QQ.validation.endsWith}"` : sQ.assertNever(QQ.validation) : XQ = "regex" !== QQ.validation ? `Invalid ${QQ.validation}` : "Invalid";
          break;
        case rQ.too_small:
          XQ = "array" === QQ.type ? `Array must contain ${QQ.exact?"exactly":QQ.inclusive?"at least":"more than"} ${QQ.minimum} element(s)` : "string" === QQ.type ? `String must contain ${QQ.exact?"exactly":QQ.inclusive?"at least":"over"} ${QQ.minimum} character(s)` : "number" === QQ.type ? `Number must be ${QQ.exact?"exactly equal to ":QQ.inclusive?"greater than or equal to ":"greater than "}${QQ.minimum}` : "date" === QQ.type ? `Date must be ${QQ.exact?"exactly equal to ":QQ.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(QQ.minimum))}` : "Invalid input";
          break;
        case rQ.too_big:
          XQ = "array" === QQ.type ? `Array must contain ${QQ.exact?"exactly":QQ.inclusive?"at most":"less than"} ${QQ.maximum} element(s)` : "string" === QQ.type ? `String must contain ${QQ.exact?"exactly":QQ.inclusive?"at most":"under"} ${QQ.maximum} character(s)` : "number" === QQ.type ? `Number must be ${QQ.exact?"exactly":QQ.inclusive?"less than or equal to":"less than"} ${QQ.maximum}` : "bigint" === QQ.type ? `BigInt must be ${QQ.exact?"exactly":QQ.inclusive?"less than or equal to":"less than"} ${QQ.maximum}` : "date" === QQ.type ? `Date must be ${QQ.exact?"exactly":QQ.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(QQ.maximum))}` : "Invalid input";
          break;
        case rQ.custom:
          XQ = "Invalid input";
          break;
        case rQ.invalid_intersection_types:
          XQ = "Intersection results could not be merged";
          break;
        case rQ.not_multiple_of:
          XQ = `Number must be a multiple of ${QQ.multipleOf}`;
          break;
        case rQ.not_finite:
          XQ = "Number must be finite";
          break;
        default:
          XQ = WQ.defaultError, sQ.assertNever(QQ)
      }
      return {
        message: XQ
      }
    };
    let BQ = jQ;

    function yQ() {
      return BQ
    }
    const VQ = QQ => {
      const {
        data: WQ,
        path: XQ,
        errorMaps: wQ,
        issueData: qQ
      } = QQ, TQ = [...XQ, ...qQ.path || []], zQ = {
        ...qQ,
        path: TQ
      };
      let sQ = "";
      const FQ = wQ.filter((QQ => !!QQ)).slice().reverse();
      for (const PQ of FQ) sQ = PQ(zQ, {
        data: WQ,
        defaultError: sQ
      }).message;
      return {
        ...qQ,
        path: TQ,
        message: qQ.message || sQ
      }
    };

    function DQ(QQ, WQ) {
      const XQ = VQ({
        issueData: WQ,
        data: QQ.data,
        path: QQ.path,
        errorMaps: [QQ.common.contextualErrorMap, QQ.schemaErrorMap, yQ(), jQ].filter((QQ => !!QQ))
      });
      QQ.common.issues.push(XQ)
    }
    class pQ {
      constructor() {
        this.value = "valid"
      }
      ij() {
        "valid" === this.value && (this.value = "ij")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(QQ, WQ) {
        const XQ = [];
        for (const wQ of WQ) {
          if ("aborted" === wQ.status) return GQ;
          "ij" === wQ.status && QQ.ij(), XQ.push(wQ.value)
        }
        return {
          status: QQ.value,
          value: XQ
        }
      }
      static async mergeObjectAsync(QQ, WQ) {
        const XQ = [];
        for (const wQ of WQ) XQ.push({
          key: await wQ.key,
          value: await wQ.value
        });
        return pQ.mergeObjectSync(QQ, XQ)
      }
      static mergeObjectSync(QQ, WQ) {
        const XQ = {};
        for (const wQ of WQ) {
          const {
            key: WQ,
            value: qQ
          } = wQ;
          if ("aborted" === WQ.status) return GQ;
          if ("aborted" === qQ.status) return GQ;
          "ij" === WQ.status && QQ.ij(), "ij" === qQ.status && QQ.ij(), "__proto__" === WQ.value || "undefined" === typeof qQ.value && !wQ.alwaysSet || (XQ[WQ.value] = qQ.value)
        }
        return {
          status: QQ.value,
          value: XQ
        }
      }
    }
    const GQ = Object.freeze({
        status: "aborted"
      }),
      UQ = QQ => ({
        status: "ij",
        value: QQ
      }),
      bQ = QQ => ({
        status: "valid",
        value: QQ
      }),
      vQ = QQ => "aborted" === QQ.status,
      dQ = QQ => "ij" === QQ.status,
      HQ = QQ => "valid" === QQ.status,
      aQ = QQ => "undefined" !== typeof Promise && QQ instanceof Promise;
    var lQ;
    ! function(QQ) {
      QQ.errToObj = QQ => "string" === typeof QQ ? {
        message: QQ
      } : QQ || {}, QQ.toString = QQ => "string" === typeof QQ ? QQ : null === QQ || void 0 === QQ ? void 0 : QQ.message
    }(lQ || (lQ = {}));
    class hQ {
      constructor(QQ, WQ, XQ, wQ) {
        this._cachedPath = [], this.parent = QQ, this.data = WQ, this._path = XQ, this._key = wQ
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const iQ = (QQ, WQ) => {
      if (HQ(WQ)) return {
        success: !0,
        data: WQ.value
      };
      if (!QQ.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const WQ = new IQ(QQ.common.issues);
          return this._error = WQ, this._error
        }
      }
    };

    function cQ(QQ) {
      if (!QQ) return {};
      const {
        errorMap: WQ,
        invalid_type_error: XQ,
        required_error: wQ,
        description: qQ
      } = QQ;
      if (WQ && (XQ || wQ)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (WQ) return {
        errorMap: WQ,
        description: qQ
      };
      return {
        errorMap: (QQ, WQ) => "invalid_type" !== QQ.code ? {
          message: WQ.defaultError
        } : "undefined" === typeof WQ.data ? {
          message: null !== wQ && void 0 !== wQ ? wQ : WQ.defaultError
        } : {
          message: null !== XQ && void 0 !== XQ ? XQ : WQ.defaultError
        },
        description: qQ
      }
    }
    class AQ {
      constructor(QQ) {
        this.spa = this.safeParseAsync, this._def = QQ, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(QQ) {
        return JQ(QQ.data)
      }
      _getOrReturnCtx(QQ, WQ) {
        return WQ || {
          common: QQ.parent.common,
          data: QQ.data,
          parsedType: JQ(QQ.data),
          schemaErrorMap: this._def.errorMap,
          path: QQ.path,
          parent: QQ.parent
        }
      }
      _processInputParams(QQ) {
        return {
          status: new pQ,
          ctx: {
            common: QQ.parent.common,
            data: QQ.data,
            parsedType: JQ(QQ.data),
            schemaErrorMap: this._def.errorMap,
            path: QQ.path,
            parent: QQ.parent
          }
        }
      }
      _parseSync(QQ) {
        const WQ = this._parse(QQ);
        if (aQ(WQ)) throw new Error("Synchronous parse encountered promise.");
        return WQ
      }
      _parseAsync(QQ) {
        const WQ = this._parse(QQ);
        return Promise.resolve(WQ)
      }
      parse(QQ, WQ) {
        const XQ = this.safeParse(QQ, WQ);
        if (XQ.success) return XQ.data;
        throw XQ.error
      }
      safeParse(QQ, WQ) {
        var XQ;
        const wQ = {
            common: {
              issues: [],
              async: null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.async) && void 0 !== XQ && XQ,
              contextualErrorMap: null === WQ || void 0 === WQ ? void 0 : WQ.errorMap
            },
            path: (null === WQ || void 0 === WQ ? void 0 : WQ.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: QQ,
            parsedType: JQ(QQ)
          },
          qQ = this._parseSync({
            data: QQ,
            path: wQ.path,
            parent: wQ
          });
        return iQ(wQ, qQ)
      }
      async parseAsync(QQ, WQ) {
        const XQ = await this.safeParseAsync(QQ, WQ);
        if (XQ.success) return XQ.data;
        throw XQ.error
      }
      async safeParseAsync(QQ, WQ) {
        const XQ = {
            common: {
              issues: [],
              contextualErrorMap: null === WQ || void 0 === WQ ? void 0 : WQ.errorMap,
              async: !0
            },
            path: (null === WQ || void 0 === WQ ? void 0 : WQ.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: QQ,
            parsedType: JQ(QQ)
          },
          wQ = this._parse({
            data: QQ,
            path: XQ.path,
            parent: XQ
          }),
          qQ = await (aQ(wQ) ? wQ : Promise.resolve(wQ));
        return iQ(XQ, qQ)
      }
      refine(QQ, WQ) {
        const XQ = QQ => "string" === typeof WQ || "undefined" === typeof WQ ? {
          message: WQ
        } : "function" === typeof WQ ? WQ(QQ) : WQ;
        return this._refinement(((WQ, wQ) => {
          const qQ = QQ(WQ),
            TQ = () => wQ.addIssue({
              code: rQ.custom,
              ...XQ(WQ)
            });
          return "undefined" !== typeof Promise && qQ instanceof Promise ? qQ.then((QQ => !!QQ || (TQ(), !1))) : !!qQ || (TQ(), !1)
        }))
      }
      refinement(QQ, WQ) {
        return this._refinement(((XQ, wQ) => !!QQ(XQ) || (wQ.addIssue("function" === typeof WQ ? WQ(XQ, wQ) : WQ), !1)))
      }
      _refinement(QQ) {
        return new GW({
          schema: this,
          typeName: RW.ZodEffects,
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
        return UW.create(this, this._def)
      }
      nullable() {
        return bW.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return WW.create(this, this._def)
      }
      promise() {
        return pW.create(this, this._def)
      }
      or(QQ) {
        return qW.create([this, QQ], this._def)
      }
      and(QQ) {
        return FW.create(this, QQ, this._def)
      }
      transform(QQ) {
        return new GW({
          ...cQ(this._def),
          schema: this,
          typeName: RW.ZodEffects,
          effect: {
            type: "transform",
            transform: QQ
          }
        })
      }
      default (QQ) {
        const WQ = "function" === typeof QQ ? QQ : () => QQ;
        return new vW({
          ...cQ(this._def),
          innerType: this,
          defaultValue: WQ,
          typeName: RW.ZodDefault
        })
      }
      brand() {
        return new lW({
          typeName: RW.ZodBranded,
          type: this,
          ...cQ(this._def)
        })
      } catch (QQ) {
        const WQ = "function" === typeof QQ ? QQ : () => QQ;
        return new dW({
          ...cQ(this._def),
          innerType: this,
          catchValue: WQ,
          typeName: RW.ZodCatch
        })
      }
      describe(QQ) {
        return new(0, this.constructor)({
          ...this._def,
          description: QQ
        })
      }
      pipe(QQ) {
        return hW.create(this, QQ)
      }
      readonly() {
        return iW.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const RQ = /^c[^\s-]{8,}$/i,
      EQ = /^[a-z][a-z0-9]*$/,
      CQ = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      uQ = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      LQ = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let kQ;
    const fQ = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      SQ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class tQ extends AQ {
      _parse(QQ) {
        this._def.coerce && (QQ.data = String(QQ.data));
        if (this._getType(QQ) !== gQ.string) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.string,
            received: WQ.parsedType
          }), GQ
        }
        const WQ = new pQ;
        let XQ;
        for (const FQ of this._def.checks)
          if ("min" === FQ.kind) QQ.data.length < FQ.value && (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
            code: rQ.too_small,
            minimum: FQ.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: FQ.message
          }), WQ.ij());
          else if ("max" === FQ.kind) QQ.data.length > FQ.value && (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          code: rQ.too_big,
          maximum: FQ.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: FQ.message
        }), WQ.ij());
        else if ("length" === FQ.kind) {
          const wQ = QQ.data.length > FQ.value,
            qQ = QQ.data.length < FQ.value;
          (wQ || qQ) && (XQ = this._getOrReturnCtx(QQ, XQ), wQ ? DQ(XQ, {
            code: rQ.too_big,
            maximum: FQ.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: FQ.message
          }) : qQ && DQ(XQ, {
            code: rQ.too_small,
            minimum: FQ.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: FQ.message
          }), WQ.ij())
        } else if ("email" === FQ.kind) LQ.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "email",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij());
        else if ("emoji" === FQ.kind) kQ || (kQ = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), kQ.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "emoji",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij());
        else if ("uuid" === FQ.kind) uQ.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "uuid",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij());
        else if ("cuid" === FQ.kind) RQ.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "cuid",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij());
        else if ("cuid2" === FQ.kind) EQ.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "cuid2",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij());
        else if ("ulid" === FQ.kind) CQ.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "ulid",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij());
        else if ("url" === FQ.kind) try {
          new URL(QQ.data)
        } catch (zQ) {
          XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
            validation: "url",
            code: rQ.invalid_string,
            message: FQ.message
          }), WQ.ij()
        } else if ("regex" === FQ.kind) {
          FQ.regex.lastIndex = 0;
          FQ.regex.test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
            validation: "regex",
            code: rQ.invalid_string,
            message: FQ.message
          }), WQ.ij())
        } else if ("trim" === FQ.kind) QQ.data = QQ.data.trim();
        else if ("includes" === FQ.kind) QQ.data.includes(FQ.value, FQ.position) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          code: rQ.invalid_string,
          validation: {
            includes: FQ.value,
            position: FQ.position
          },
          message: FQ.message
        }), WQ.ij());
        else if ("toLowerCase" === FQ.kind) QQ.data = QQ.data.toLowerCase();
        else if ("toUpperCase" === FQ.kind) QQ.data = QQ.data.toUpperCase();
        else if ("startsWith" === FQ.kind) QQ.data.startsWith(FQ.value) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          code: rQ.invalid_string,
          validation: {
            startsWith: FQ.value
          },
          message: FQ.message
        }), WQ.ij());
        else if ("endsWith" === FQ.kind) QQ.data.endsWith(FQ.value) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          code: rQ.invalid_string,
          validation: {
            endsWith: FQ.value
          },
          message: FQ.message
        }), WQ.ij());
        else if ("datetime" === FQ.kind) {
          ((TQ = FQ).precision ? TQ.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${TQ.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${TQ.precision}}Z$`) : 0 === TQ.precision ? TQ.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : TQ.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(QQ.data) || (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
            code: rQ.invalid_string,
            validation: "datetime",
            message: FQ.message
          }), WQ.ij())
        } else "ip" === FQ.kind ? (wQ = QQ.data, ("v4" !== (qQ = FQ.version) && qQ || !fQ.test(wQ)) && ("v6" !== qQ && qQ || !SQ.test(wQ)) && (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          validation: "ip",
          code: rQ.invalid_string,
          message: FQ.message
        }), WQ.ij())) : sQ.assertNever(FQ);
        var wQ, qQ, TQ;
        return {
          status: WQ.value,
          value: QQ.data
        }
      }
      _regex(QQ, WQ, XQ) {
        return this.refinement((WQ => QQ.test(WQ)), {
          validation: WQ,
          code: rQ.invalid_string,
          ...lQ.errToObj(XQ)
        })
      }
      _addCheck(QQ) {
        return new tQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      email(QQ) {
        return this._addCheck({
          kind: "email",
          ...lQ.errToObj(QQ)
        })
      }
      url(QQ) {
        return this._addCheck({
          kind: "url",
          ...lQ.errToObj(QQ)
        })
      }
      emoji(QQ) {
        return this._addCheck({
          kind: "emoji",
          ...lQ.errToObj(QQ)
        })
      }
      uuid(QQ) {
        return this._addCheck({
          kind: "uuid",
          ...lQ.errToObj(QQ)
        })
      }
      cuid(QQ) {
        return this._addCheck({
          kind: "cuid",
          ...lQ.errToObj(QQ)
        })
      }
      cuid2(QQ) {
        return this._addCheck({
          kind: "cuid2",
          ...lQ.errToObj(QQ)
        })
      }
      ulid(QQ) {
        return this._addCheck({
          kind: "ulid",
          ...lQ.errToObj(QQ)
        })
      }
      ip(QQ) {
        return this._addCheck({
          kind: "ip",
          ...lQ.errToObj(QQ)
        })
      }
      datetime(QQ) {
        var WQ;
        return "string" === typeof QQ ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: QQ
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === QQ || void 0 === QQ ? void 0 : QQ.precision) ? null : null === QQ || void 0 === QQ ? void 0 : QQ.precision,
          offset: null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.offset) && void 0 !== WQ && WQ,
          ...lQ.errToObj(null === QQ || void 0 === QQ ? void 0 : QQ.message)
        })
      }
      regex(QQ, WQ) {
        return this._addCheck({
          kind: "regex",
          regex: QQ,
          ...lQ.errToObj(WQ)
        })
      }
      includes(QQ, WQ) {
        return this._addCheck({
          kind: "includes",
          value: QQ,
          position: null === WQ || void 0 === WQ ? void 0 : WQ.position,
          ...lQ.errToObj(null === WQ || void 0 === WQ ? void 0 : WQ.message)
        })
      }
      startsWith(QQ, WQ) {
        return this._addCheck({
          kind: "startsWith",
          value: QQ,
          ...lQ.errToObj(WQ)
        })
      }
      endsWith(QQ, WQ) {
        return this._addCheck({
          kind: "endsWith",
          value: QQ,
          ...lQ.errToObj(WQ)
        })
      }
      min(QQ, WQ) {
        return this._addCheck({
          kind: "min",
          value: QQ,
          ...lQ.errToObj(WQ)
        })
      }
      max(QQ, WQ) {
        return this._addCheck({
          kind: "max",
          value: QQ,
          ...lQ.errToObj(WQ)
        })
      }
      length(QQ, WQ) {
        return this._addCheck({
          kind: "length",
          value: QQ,
          ...lQ.errToObj(WQ)
        })
      }
      nonempty(QQ) {
        return this.min(1, lQ.errToObj(QQ))
      }
      trim() {
        return new tQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new tQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new tQ({
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
        for (const WQ of this._def.checks) "min" === WQ.kind && (null === QQ || WQ.value > QQ) && (QQ = WQ.value);
        return QQ
      }
      get maxLength() {
        let QQ = null;
        for (const WQ of this._def.checks) "max" === WQ.kind && (null === QQ || WQ.value < QQ) && (QQ = WQ.value);
        return QQ
      }
    }

    function oQ(QQ, WQ) {
      const XQ = (QQ.toString().split(".")[1] || "").length,
        wQ = (WQ.toString().split(".")[1] || "").length,
        qQ = XQ > wQ ? XQ : wQ;
      return parseInt(QQ.toFixed(qQ).replace(".", "")) % parseInt(WQ.toFixed(qQ).replace(".", "")) / Math.pow(10, qQ)
    }
    tQ.create = QQ => {
      var WQ;
      return new tQ({
        checks: [],
        typeName: RW.ZodString,
        coerce: null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.coerce) && void 0 !== WQ && WQ,
        ...cQ(QQ)
      })
    };
    class eQ extends AQ {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(QQ) {
        this._def.coerce && (QQ.data = Number(QQ.data));
        if (this._getType(QQ) !== gQ.number) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.number,
            received: WQ.parsedType
          }), GQ
        }
        let WQ;
        const XQ = new pQ;
        for (const wQ of this._def.checks)
          if ("int" === wQ.kind) sQ.isInteger(QQ.data) || (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
            code: rQ.invalid_type,
            expected: "integer",
            received: "float",
            message: wQ.message
          }), XQ.ij());
          else if ("min" === wQ.kind) {
          (wQ.inclusive ? QQ.data < wQ.value : QQ.data <= wQ.value) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
            code: rQ.too_small,
            minimum: wQ.value,
            type: "number",
            inclusive: wQ.inclusive,
            exact: !1,
            message: wQ.message
          }), XQ.ij())
        } else if ("max" === wQ.kind) {
          (wQ.inclusive ? QQ.data > wQ.value : QQ.data >= wQ.value) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
            code: rQ.too_big,
            maximum: wQ.value,
            type: "number",
            inclusive: wQ.inclusive,
            exact: !1,
            message: wQ.message
          }), XQ.ij())
        } else "multipleOf" === wQ.kind ? 0 !== oQ(QQ.data, wQ.value) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
          code: rQ.not_multiple_of,
          multipleOf: wQ.value,
          message: wQ.message
        }), XQ.ij()) : "finite" === wQ.kind ? Number.isFinite(QQ.data) || (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
          code: rQ.not_finite,
          message: wQ.message
        }), XQ.ij()) : sQ.assertNever(wQ);
        return {
          status: XQ.value,
          value: QQ.data
        }
      }
      gte(QQ, WQ) {
        return this.setLimit("min", QQ, !0, lQ.toString(WQ))
      }
      gt(QQ, WQ) {
        return this.setLimit("min", QQ, !1, lQ.toString(WQ))
      }
      lte(QQ, WQ) {
        return this.setLimit("max", QQ, !0, lQ.toString(WQ))
      }
      lt(QQ, WQ) {
        return this.setLimit("max", QQ, !1, lQ.toString(WQ))
      }
      setLimit(QQ, WQ, XQ, wQ) {
        return new eQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: QQ,
            value: WQ,
            inclusive: XQ,
            message: lQ.toString(wQ)
          }]
        })
      }
      _addCheck(QQ) {
        return new eQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      int(QQ) {
        return this._addCheck({
          kind: "int",
          message: lQ.toString(QQ)
        })
      }
      positive(QQ) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: lQ.toString(QQ)
        })
      }
      negative(QQ) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: lQ.toString(QQ)
        })
      }
      nonpositive(QQ) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: lQ.toString(QQ)
        })
      }
      nonnegative(QQ) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: lQ.toString(QQ)
        })
      }
      multipleOf(QQ, WQ) {
        return this._addCheck({
          kind: "multipleOf",
          value: QQ,
          message: lQ.toString(WQ)
        })
      }
      finite(QQ) {
        return this._addCheck({
          kind: "finite",
          message: lQ.toString(QQ)
        })
      }
      safe(QQ) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: lQ.toString(QQ)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: lQ.toString(QQ)
        })
      }
      get minValue() {
        let QQ = null;
        for (const WQ of this._def.checks) "min" === WQ.kind && (null === QQ || WQ.value > QQ) && (QQ = WQ.value);
        return QQ
      }
      get maxValue() {
        let QQ = null;
        for (const WQ of this._def.checks) "max" === WQ.kind && (null === QQ || WQ.value < QQ) && (QQ = WQ.value);
        return QQ
      }
      get isInt() {
        return !!this._def.checks.find((QQ => "int" === QQ.kind || "multipleOf" === QQ.kind && sQ.isInteger(QQ.value)))
      }
      get isFinite() {
        let QQ = null,
          WQ = null;
        for (const XQ of this._def.checks) {
          if ("finite" === XQ.kind || "int" === XQ.kind || "multipleOf" === XQ.kind) return !0;
          "min" === XQ.kind ? (null === WQ || XQ.value > WQ) && (WQ = XQ.value) : "max" === XQ.kind && (null === QQ || XQ.value < QQ) && (QQ = XQ.value)
        }
        return Number.isFinite(WQ) && Number.isFinite(QQ)
      }
    }
    eQ.create = QQ => new eQ({
      checks: [],
      typeName: RW.ZodNumber,
      coerce: (null === QQ || void 0 === QQ ? void 0 : QQ.coerce) || !1,
      ...cQ(QQ)
    });
    class nQ extends AQ {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(QQ) {
        this._def.coerce && (QQ.data = BigInt(QQ.data));
        if (this._getType(QQ) !== gQ.bigint) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.bigint,
            received: WQ.parsedType
          }), GQ
        }
        let WQ;
        const XQ = new pQ;
        for (const wQ of this._def.checks)
          if ("min" === wQ.kind) {
            (wQ.inclusive ? QQ.data < wQ.value : QQ.data <= wQ.value) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
              code: rQ.too_small,
              type: "bigint",
              minimum: wQ.value,
              inclusive: wQ.inclusive,
              message: wQ.message
            }), XQ.ij())
          } else if ("max" === wQ.kind) {
          (wQ.inclusive ? QQ.data > wQ.value : QQ.data >= wQ.value) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
            code: rQ.too_big,
            type: "bigint",
            maximum: wQ.value,
            inclusive: wQ.inclusive,
            message: wQ.message
          }), XQ.ij())
        } else "multipleOf" === wQ.kind ? QQ.data % wQ.value !== BigInt(0) && (WQ = this._getOrReturnCtx(QQ, WQ), DQ(WQ, {
          code: rQ.not_multiple_of,
          multipleOf: wQ.value,
          message: wQ.message
        }), XQ.ij()) : sQ.assertNever(wQ);
        return {
          status: XQ.value,
          value: QQ.data
        }
      }
      gte(QQ, WQ) {
        return this.setLimit("min", QQ, !0, lQ.toString(WQ))
      }
      gt(QQ, WQ) {
        return this.setLimit("min", QQ, !1, lQ.toString(WQ))
      }
      lte(QQ, WQ) {
        return this.setLimit("max", QQ, !0, lQ.toString(WQ))
      }
      lt(QQ, WQ) {
        return this.setLimit("max", QQ, !1, lQ.toString(WQ))
      }
      setLimit(QQ, WQ, XQ, wQ) {
        return new nQ({
          ...this._def,
          checks: [...this._def.checks, {
            kind: QQ,
            value: WQ,
            inclusive: XQ,
            message: lQ.toString(wQ)
          }]
        })
      }
      _addCheck(QQ) {
        return new nQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      positive(QQ) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: lQ.toString(QQ)
        })
      }
      negative(QQ) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: lQ.toString(QQ)
        })
      }
      nonpositive(QQ) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: lQ.toString(QQ)
        })
      }
      nonnegative(QQ) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: lQ.toString(QQ)
        })
      }
      multipleOf(QQ, WQ) {
        return this._addCheck({
          kind: "multipleOf",
          value: QQ,
          message: lQ.toString(WQ)
        })
      }
      get minValue() {
        let QQ = null;
        for (const WQ of this._def.checks) "min" === WQ.kind && (null === QQ || WQ.value > QQ) && (QQ = WQ.value);
        return QQ
      }
      get maxValue() {
        let QQ = null;
        for (const WQ of this._def.checks) "max" === WQ.kind && (null === QQ || WQ.value < QQ) && (QQ = WQ.value);
        return QQ
      }
    }
    nQ.create = QQ => {
      var WQ;
      return new nQ({
        checks: [],
        typeName: RW.ZodBigInt,
        coerce: null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.coerce) && void 0 !== WQ && WQ,
        ...cQ(QQ)
      })
    };
    class xQ extends AQ {
      _parse(QQ) {
        this._def.coerce && (QQ.data = Boolean(QQ.data));
        if (this._getType(QQ) !== gQ.boolean) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.boolean,
            received: WQ.parsedType
          }), GQ
        }
        return bQ(QQ.data)
      }
    }
    xQ.create = QQ => new xQ({
      typeName: RW.ZodBoolean,
      coerce: (null === QQ || void 0 === QQ ? void 0 : QQ.coerce) || !1,
      ...cQ(QQ)
    });
    class YQ extends AQ {
      _parse(QQ) {
        this._def.coerce && (QQ.data = new Date(QQ.data));
        if (this._getType(QQ) !== gQ.date) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.date,
            received: WQ.parsedType
          }), GQ
        }
        if (isNaN(QQ.data.getTime())) {
          return DQ(this._getOrReturnCtx(QQ), {
            code: rQ.invalid_date
          }), GQ
        }
        const WQ = new pQ;
        let XQ;
        for (const wQ of this._def.checks) "min" === wQ.kind ? QQ.data.getTime() < wQ.value && (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          code: rQ.too_small,
          message: wQ.message,
          inclusive: !0,
          exact: !1,
          minimum: wQ.value,
          type: "date"
        }), WQ.ij()) : "max" === wQ.kind ? QQ.data.getTime() > wQ.value && (XQ = this._getOrReturnCtx(QQ, XQ), DQ(XQ, {
          code: rQ.too_big,
          message: wQ.message,
          inclusive: !0,
          exact: !1,
          maximum: wQ.value,
          type: "date"
        }), WQ.ij()) : sQ.assertNever(wQ);
        return {
          status: WQ.value,
          value: new Date(QQ.data.getTime())
        }
      }
      _addCheck(QQ) {
        return new YQ({
          ...this._def,
          checks: [...this._def.checks, QQ]
        })
      }
      min(QQ, WQ) {
        return this._addCheck({
          kind: "min",
          value: QQ.getTime(),
          message: lQ.toString(WQ)
        })
      }
      max(QQ, WQ) {
        return this._addCheck({
          kind: "max",
          value: QQ.getTime(),
          message: lQ.toString(WQ)
        })
      }
      get minDate() {
        let QQ = null;
        for (const WQ of this._def.checks) "min" === WQ.kind && (null === QQ || WQ.value > QQ) && (QQ = WQ.value);
        return null != QQ ? new Date(QQ) : null
      }
      get maxDate() {
        let QQ = null;
        for (const WQ of this._def.checks) "max" === WQ.kind && (null === QQ || WQ.value < QQ) && (QQ = WQ.value);
        return null != QQ ? new Date(QQ) : null
      }
    }
    YQ.create = QQ => new YQ({
      checks: [],
      coerce: (null === QQ || void 0 === QQ ? void 0 : QQ.coerce) || !1,
      typeName: RW.ZodDate,
      ...cQ(QQ)
    });
    class NQ extends AQ {
      _parse(QQ) {
        if (this._getType(QQ) !== gQ.symbol) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.symbol,
            received: WQ.parsedType
          }), GQ
        }
        return bQ(QQ.data)
      }
    }
    NQ.create = QQ => new NQ({
      typeName: RW.ZodSymbol,
      ...cQ(QQ)
    });
    class ZQ extends AQ {
      _parse(QQ) {
        if (this._getType(QQ) !== gQ.undefined) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.undefined,
            received: WQ.parsedType
          }), GQ
        }
        return bQ(QQ.data)
      }
    }
    ZQ.create = QQ => new ZQ({
      typeName: RW.ZodUndefined,
      ...cQ(QQ)
    });
    class OQ extends AQ {
      _parse(QQ) {
        if (this._getType(QQ) !== gQ.null) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.null,
            received: WQ.parsedType
          }), GQ
        }
        return bQ(QQ.data)
      }
    }
    OQ.create = QQ => new OQ({
      typeName: RW.ZodNull,
      ...cQ(QQ)
    });
    class KQ extends AQ {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(QQ) {
        return bQ(QQ.data)
      }
    }
    KQ.create = QQ => new KQ({
      typeName: RW.ZodAny,
      ...cQ(QQ)
    });
    class mQ extends AQ {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(QQ) {
        return bQ(QQ.data)
      }
    }
    mQ.create = QQ => new mQ({
      typeName: RW.ZodUnknown,
      ...cQ(QQ)
    });
    class MQ extends AQ {
      _parse(QQ) {
        const WQ = this._getOrReturnCtx(QQ);
        return DQ(WQ, {
          code: rQ.invalid_type,
          expected: gQ.never,
          received: WQ.parsedType
        }), GQ
      }
    }
    MQ.create = QQ => new MQ({
      typeName: RW.ZodNever,
      ...cQ(QQ)
    });
    class QW extends AQ {
      _parse(QQ) {
        if (this._getType(QQ) !== gQ.undefined) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.void,
            received: WQ.parsedType
          }), GQ
        }
        return bQ(QQ.data)
      }
    }
    QW.create = QQ => new QW({
      typeName: RW.ZodVoid,
      ...cQ(QQ)
    });
    class WW extends AQ {
      _parse(QQ) {
        const {
          ctx: WQ,
          status: XQ
        } = this._processInputParams(QQ), wQ = this._def;
        if (WQ.parsedType !== gQ.array) return DQ(WQ, {
          code: rQ.invalid_type,
          expected: gQ.array,
          received: WQ.parsedType
        }), GQ;
        if (null !== wQ.exactLength) {
          const QQ = WQ.data.length > wQ.exactLength.value,
            qQ = WQ.data.length < wQ.exactLength.value;
          (QQ || qQ) && (DQ(WQ, {
            code: QQ ? rQ.too_big : rQ.too_small,
            minimum: qQ ? wQ.exactLength.value : void 0,
            maximum: QQ ? wQ.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: wQ.exactLength.message
          }), XQ.ij())
        }
        if (null !== wQ.minLength && WQ.data.length < wQ.minLength.value && (DQ(WQ, {
            code: rQ.too_small,
            minimum: wQ.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: wQ.minLength.message
          }), XQ.ij()), null !== wQ.maxLength && WQ.data.length > wQ.maxLength.value && (DQ(WQ, {
            code: rQ.too_big,
            maximum: wQ.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: wQ.maxLength.message
          }), XQ.ij()), WQ.common.async) return Promise.all([...WQ.data].map(((QQ, XQ) => wQ.type._parseAsync(new hQ(WQ, QQ, WQ.path, XQ))))).then((QQ => pQ.mergeArray(XQ, QQ)));
        const qQ = [...WQ.data].map(((QQ, XQ) => wQ.type._parseSync(new hQ(WQ, QQ, WQ.path, XQ))));
        return pQ.mergeArray(XQ, qQ)
      }
      get element() {
        return this._def.type
      }
      min(QQ, WQ) {
        return new WW({
          ...this._def,
          minLength: {
            value: QQ,
            message: lQ.toString(WQ)
          }
        })
      }
      max(QQ, WQ) {
        return new WW({
          ...this._def,
          maxLength: {
            value: QQ,
            message: lQ.toString(WQ)
          }
        })
      }
      length(QQ, WQ) {
        return new WW({
          ...this._def,
          exactLength: {
            value: QQ,
            message: lQ.toString(WQ)
          }
        })
      }
      nonempty(QQ) {
        return this.min(1, QQ)
      }
    }

    function XW(QQ) {
      if (QQ instanceof wW) {
        const WQ = {};
        for (const XQ in QQ.shape) {
          const wQ = QQ.shape[XQ];
          WQ[XQ] = UW.create(XW(wQ))
        }
        return new wW({
          ...QQ._def,
          shape: () => WQ
        })
      }
      return QQ instanceof WW ? new WW({
        ...QQ._def,
        type: XW(QQ.element)
      }) : QQ instanceof UW ? UW.create(XW(QQ.unwrap())) : QQ instanceof bW ? bW.create(XW(QQ.unwrap())) : QQ instanceof PW ? PW.create(QQ.items.map((QQ => XW(QQ)))) : QQ
    }
    WW.create = (QQ, WQ) => new WW({
      type: QQ,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: RW.ZodArray,
      ...cQ(WQ)
    });
    class wW extends AQ {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const QQ = this._def.shape(),
          WQ = sQ.objectKeys(QQ);
        return this._cached = {
          shape: QQ,
          keys: WQ
        }
      }
      _parse(QQ) {
        if (this._getType(QQ) !== gQ.object) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.object,
            received: WQ.parsedType
          }), GQ
        }
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ), {
          shape: wQ,
          keys: qQ
        } = this._getCached(), TQ = [];
        if (!(this._def.catchall instanceof MQ && "strip" === this._def.unknownKeys))
          for (const sQ in XQ.data) qQ.includes(sQ) || TQ.push(sQ);
        const zQ = [];
        for (const sQ of qQ) {
          const QQ = wQ[sQ],
            WQ = XQ.data[sQ];
          zQ.push({
            key: {
              status: "valid",
              value: sQ
            },
            value: QQ._parse(new hQ(XQ, WQ, XQ.path, sQ)),
            alwaysSet: sQ in XQ.data
          })
        }
        if (this._def.catchall instanceof MQ) {
          const QQ = this._def.unknownKeys;
          if ("passthrough" === QQ)
            for (const WQ of TQ) zQ.push({
              key: {
                status: "valid",
                value: WQ
              },
              value: {
                status: "valid",
                value: XQ.data[WQ]
              }
            });
          else if ("strict" === QQ) TQ.length > 0 && (DQ(XQ, {
            code: rQ.unrecognized_keys,
            keys: TQ
          }), WQ.ij());
          else if ("strip" !== QQ) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const QQ = this._def.catchall;
          for (const WQ of TQ) {
            const wQ = XQ.data[WQ];
            zQ.push({
              key: {
                status: "valid",
                value: WQ
              },
              value: QQ._parse(new hQ(XQ, wQ, XQ.path, WQ)),
              alwaysSet: WQ in XQ.data
            })
          }
        }
        return XQ.common.async ? Promise.resolve().then((async () => {
          const QQ = [];
          for (const WQ of zQ) {
            const XQ = await WQ.key;
            QQ.push({
              key: XQ,
              value: await WQ.value,
              alwaysSet: WQ.alwaysSet
            })
          }
          return QQ
        })).then((QQ => pQ.mergeObjectSync(WQ, QQ))) : pQ.mergeObjectSync(WQ, zQ)
      }
      get shape() {
        return this._def.shape()
      }
      strict(QQ) {
        return lQ.errToObj, new wW({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== QQ ? {
            errorMap: (WQ, XQ) => {
              var wQ, qQ, TQ, zQ;
              const sQ = null !== (TQ = null === (qQ = (wQ = this._def).errorMap) || void 0 === qQ ? void 0 : qQ.call(wQ, WQ, XQ).message) && void 0 !== TQ ? TQ : XQ.defaultError;
              return "unrecognized_keys" === WQ.code ? {
                message: null !== (zQ = lQ.errToObj(QQ).message) && void 0 !== zQ ? zQ : sQ
              } : {
                message: sQ
              }
            }
          } : {}
        })
      }
      strip() {
        return new wW({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new wW({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(QQ) {
        return new wW({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...QQ
          })
        })
      }
      merge(QQ) {
        return new wW({
          unknownKeys: QQ._def.unknownKeys,
          catchall: QQ._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...QQ._def.shape()
          }),
          typeName: RW.ZodObject
        })
      }
      setKey(QQ, WQ) {
        return this.augment({
          [QQ]: WQ
        })
      }
      catchall(QQ) {
        return new wW({
          ...this._def,
          catchall: QQ
        })
      }
      tr(QQ) {
        const WQ = {};
        return sQ.objectKeys(QQ).forEach((XQ => {
          QQ[XQ] && this.shape[XQ] && (WQ[XQ] = this.shape[XQ])
        })), new wW({
          ...this._def,
          shape: () => WQ
        })
      }
      omit(QQ) {
        const WQ = {};
        return sQ.objectKeys(this.shape).forEach((XQ => {
          QQ[XQ] || (WQ[XQ] = this.shape[XQ])
        })), new wW({
          ...this._def,
          shape: () => WQ
        })
      }
      deepPartial() {
        return XW(this)
      }
      partial(QQ) {
        const WQ = {};
        return sQ.objectKeys(this.shape).forEach((XQ => {
          const wQ = this.shape[XQ];
          QQ && !QQ[XQ] ? WQ[XQ] = wQ : WQ[XQ] = wQ.optional()
        })), new wW({
          ...this._def,
          shape: () => WQ
        })
      }
      required(QQ) {
        const WQ = {};
        return sQ.objectKeys(this.shape).forEach((XQ => {
          if (QQ && !QQ[XQ]) WQ[XQ] = this.shape[XQ];
          else {
            let QQ = this.shape[XQ];
            for (; QQ instanceof UW;) QQ = QQ._def.innerType;
            WQ[XQ] = QQ
          }
        })), new wW({
          ...this._def,
          shape: () => WQ
        })
      }
      keyof() {
        return yW(sQ.objectKeys(this.shape))
      }
    }
    wW.create = (QQ, WQ) => new wW({
      shape: () => QQ,
      unknownKeys: "strip",
      catchall: MQ.create(),
      typeName: RW.ZodObject,
      ...cQ(WQ)
    }), wW.strictCreate = (QQ, WQ) => new wW({
      shape: () => QQ,
      unknownKeys: "strict",
      catchall: MQ.create(),
      typeName: RW.ZodObject,
      ...cQ(WQ)
    }), wW.lazycreate = (QQ, WQ) => new wW({
      shape: QQ,
      unknownKeys: "strip",
      catchall: MQ.create(),
      typeName: RW.ZodObject,
      ...cQ(WQ)
    });
    class qW extends AQ {
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ), XQ = this._def.options;
        if (WQ.common.async) return Promise.all(XQ.map((async QQ => {
          const XQ = {
            ...WQ,
            common: {
              ...WQ.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await QQ._parseAsync({
              data: WQ.data,
              path: WQ.path,
              parent: XQ
            }),
            ctx: XQ
          }
        }))).then((function(QQ) {
          for (const WQ of QQ)
            if ("valid" === WQ.result.status) return WQ.result;
          for (const wQ of QQ)
            if ("ij" === wQ.result.status) return WQ.common.issues.push(...wQ.ctx.common.issues), wQ.result;
          const XQ = QQ.map((QQ => new IQ(QQ.ctx.common.issues)));
          return DQ(WQ, {
            code: rQ.invalid_union,
            unionErrors: XQ
          }), GQ
        }));
        {
          let QQ;
          const wQ = [];
          for (const TQ of XQ) {
            const XQ = {
                ...WQ,
                common: {
                  ...WQ.common,
                  issues: []
                },
                parent: null
              },
              qQ = TQ._parseSync({
                data: WQ.data,
                path: WQ.path,
                parent: XQ
              });
            if ("valid" === qQ.status) return qQ;
            "ij" !== qQ.status || QQ || (QQ = {
              result: qQ,
              ctx: XQ
            }), XQ.common.issues.length && wQ.push(XQ.common.issues)
          }
          if (QQ) return WQ.common.issues.push(...QQ.ctx.common.issues), QQ.result;
          const qQ = wQ.map((QQ => new IQ(QQ)));
          return DQ(WQ, {
            code: rQ.invalid_union,
            unionErrors: qQ
          }), GQ
        }
      }
      get options() {
        return this._def.options
      }
    }
    qW.create = (QQ, WQ) => new qW({
      options: QQ,
      typeName: RW.ZodUnion,
      ...cQ(WQ)
    });
    const TW = QQ => QQ instanceof jW ? TW(QQ.schema) : QQ instanceof GW ? TW(QQ.innerType()) : QQ instanceof BW ? [QQ.value] : QQ instanceof VW ? QQ.options : QQ instanceof DW ? Object.keys(QQ.enum) : QQ instanceof vW ? TW(QQ._def.innerType) : QQ instanceof ZQ ? [void 0] : QQ instanceof OQ ? [null] : null;
    class zW extends AQ {
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ);
        if (WQ.parsedType !== gQ.object) return DQ(WQ, {
          code: rQ.invalid_type,
          expected: gQ.object,
          received: WQ.parsedType
        }), GQ;
        const XQ = this.discriminator,
          wQ = WQ.data[XQ],
          qQ = this.optionsMap.get(wQ);
        return qQ ? WQ.common.async ? qQ._parseAsync({
          data: WQ.data,
          path: WQ.path,
          parent: WQ
        }) : qQ._parseSync({
          data: WQ.data,
          path: WQ.path,
          parent: WQ
        }) : (DQ(WQ, {
          code: rQ.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [XQ]
        }), GQ)
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
      static create(QQ, WQ, XQ) {
        const wQ = new Map;
        for (const qQ of WQ) {
          const WQ = TW(qQ.shape[QQ]);
          if (!WQ) throw new Error(`A discriminator value for key \`${QQ}\` could not be extracted from all schema options`);
          for (const XQ of WQ) {
            if (wQ.has(XQ)) throw new Error(`Discriminator property ${String(QQ)} has duplicate value ${String(XQ)}`);
            wQ.set(XQ, qQ)
          }
        }
        return new zW({
          typeName: RW.ZodDiscriminatedUnion,
          discriminator: QQ,
          options: WQ,
          optionsMap: wQ,
          ...cQ(XQ)
        })
      }
    }

    function sW(QQ, WQ) {
      const XQ = JQ(QQ),
        wQ = JQ(WQ);
      if (QQ === WQ) return {
        valid: !0,
        data: QQ
      };
      if (XQ === gQ.object && wQ === gQ.object) {
        const XQ = sQ.objectKeys(WQ),
          wQ = sQ.objectKeys(QQ).filter((QQ => -1 !== XQ.indexOf(QQ))),
          qQ = {
            ...QQ,
            ...WQ
          };
        for (const TQ of wQ) {
          const XQ = sW(QQ[TQ], WQ[TQ]);
          if (!XQ.valid) return {
            valid: !1
          };
          qQ[TQ] = XQ.data
        }
        return {
          valid: !0,
          data: qQ
        }
      }
      if (XQ === gQ.array && wQ === gQ.array) {
        if (QQ.length !== WQ.length) return {
          valid: !1
        };
        const XQ = [];
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const qQ = sW(QQ[wQ], WQ[wQ]);
          if (!qQ.valid) return {
            valid: !1
          };
          XQ.push(qQ.data)
        }
        return {
          valid: !0,
          data: XQ
        }
      }
      return XQ === gQ.date && wQ === gQ.date && +QQ === +WQ ? {
        valid: !0,
        data: QQ
      } : {
        valid: !1
      }
    }
    class FW extends AQ {
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ), wQ = (QQ, wQ) => {
          if (vQ(QQ) || vQ(wQ)) return GQ;
          const qQ = sW(QQ.value, wQ.value);
          return qQ.valid ? ((dQ(QQ) || dQ(wQ)) && WQ.ij(), {
            status: WQ.value,
            value: qQ.data
          }) : (DQ(XQ, {
            code: rQ.invalid_intersection_types
          }), GQ)
        };
        return XQ.common.async ? Promise.all([this._def.left._parseAsync({
          data: XQ.data,
          path: XQ.path,
          parent: XQ
        }), this._def.right._parseAsync({
          data: XQ.data,
          path: XQ.path,
          parent: XQ
        })]).then((QQ => {
          let [WQ, XQ] = QQ;
          return wQ(WQ, XQ)
        })) : wQ(this._def.left._parseSync({
          data: XQ.data,
          path: XQ.path,
          parent: XQ
        }), this._def.right._parseSync({
          data: XQ.data,
          path: XQ.path,
          parent: XQ
        }))
      }
    }
    FW.create = (QQ, WQ, XQ) => new FW({
      left: QQ,
      right: WQ,
      typeName: RW.ZodIntersection,
      ...cQ(XQ)
    });
    class PW extends AQ {
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ);
        if (XQ.parsedType !== gQ.array) return DQ(XQ, {
          code: rQ.invalid_type,
          expected: gQ.array,
          received: XQ.parsedType
        }), GQ;
        if (XQ.data.length < this._def.items.length) return DQ(XQ, {
          code: rQ.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), GQ;
        !this._def.rest && XQ.data.length > this._def.items.length && (DQ(XQ, {
          code: rQ.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), WQ.ij());
        const wQ = [...XQ.data].map(((QQ, WQ) => {
          const wQ = this._def.items[WQ] || this._def.rest;
          return wQ ? wQ._parse(new hQ(XQ, QQ, XQ.path, WQ)) : null
        })).filter((QQ => !!QQ));
        return XQ.common.async ? Promise.all(wQ).then((QQ => pQ.mergeArray(WQ, QQ))) : pQ.mergeArray(WQ, wQ)
      }
      get items() {
        return this._def.items
      }
      rest(QQ) {
        return new PW({
          ...this._def,
          rest: QQ
        })
      }
    }
    PW.create = (QQ, WQ) => {
      if (!Array.isArray(QQ)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new PW({
        items: QQ,
        typeName: RW.ZodTuple,
        rest: null,
        ...cQ(WQ)
      })
    };
    class gW extends AQ {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ);
        if (XQ.parsedType !== gQ.object) return DQ(XQ, {
          code: rQ.invalid_type,
          expected: gQ.object,
          received: XQ.parsedType
        }), GQ;
        const wQ = [],
          qQ = this._def.keyType,
          TQ = this._def.valueType;
        for (const zQ in XQ.data) wQ.push({
          key: qQ._parse(new hQ(XQ, zQ, XQ.path, zQ)),
          value: TQ._parse(new hQ(XQ, XQ.data[zQ], XQ.path, zQ))
        });
        return XQ.common.async ? pQ.mergeObjectAsync(WQ, wQ) : pQ.mergeObjectSync(WQ, wQ)
      }
      get element() {
        return this._def.valueType
      }
      static create(QQ, WQ, XQ) {
        return new gW(WQ instanceof AQ ? {
          keyType: QQ,
          valueType: WQ,
          typeName: RW.ZodRecord,
          ...cQ(XQ)
        } : {
          keyType: tQ.create(),
          valueType: QQ,
          typeName: RW.ZodRecord,
          ...cQ(WQ)
        })
      }
    }
    class JW extends AQ {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ);
        if (XQ.parsedType !== gQ.map) return DQ(XQ, {
          code: rQ.invalid_type,
          expected: gQ.map,
          received: XQ.parsedType
        }), GQ;
        const wQ = this._def.keyType,
          qQ = this._def.valueType,
          TQ = [...XQ.data.entries()].map(((QQ, WQ) => {
            let [TQ, zQ] = QQ;
            return {
              key: wQ._parse(new hQ(XQ, TQ, XQ.path, [WQ, "key"])),
              value: qQ._parse(new hQ(XQ, zQ, XQ.path, [WQ, "value"]))
            }
          }));
        if (XQ.common.async) {
          const QQ = new Map;
          return Promise.resolve().then((async () => {
            for (const XQ of TQ) {
              const wQ = await XQ.key,
                qQ = await XQ.value;
              if ("aborted" === wQ.status || "aborted" === qQ.status) return GQ;
              "ij" !== wQ.status && "ij" !== qQ.status || WQ.ij(), QQ.set(wQ.value, qQ.value)
            }
            return {
              status: WQ.value,
              value: QQ
            }
          }))
        } {
          const QQ = new Map;
          for (const XQ of TQ) {
            const wQ = XQ.key,
              qQ = XQ.value;
            if ("aborted" === wQ.status || "aborted" === qQ.status) return GQ;
            "ij" !== wQ.status && "ij" !== qQ.status || WQ.ij(), QQ.set(wQ.value, qQ.value)
          }
          return {
            status: WQ.value,
            value: QQ
          }
        }
      }
    }
    JW.create = (QQ, WQ, XQ) => new JW({
      valueType: WQ,
      keyType: QQ,
      typeName: RW.ZodMap,
      ...cQ(XQ)
    });
    class rW extends AQ {
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ);
        if (XQ.parsedType !== gQ.set) return DQ(XQ, {
          code: rQ.invalid_type,
          expected: gQ.set,
          received: XQ.parsedType
        }), GQ;
        const wQ = this._def;
        null !== wQ.minSize && XQ.data.size < wQ.minSize.value && (DQ(XQ, {
          code: rQ.too_small,
          minimum: wQ.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: wQ.minSize.message
        }), WQ.ij()), null !== wQ.maxSize && XQ.data.size > wQ.maxSize.value && (DQ(XQ, {
          code: rQ.too_big,
          maximum: wQ.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: wQ.maxSize.message
        }), WQ.ij());
        const qQ = this._def.valueType;

        function TQ(QQ) {
          const XQ = new Set;
          for (const wQ of QQ) {
            if ("aborted" === wQ.status) return GQ;
            "ij" === wQ.status && WQ.ij(), XQ.add(wQ.value)
          }
          return {
            status: WQ.value,
            value: XQ
          }
        }
        const zQ = [...XQ.data.values()].map(((QQ, WQ) => qQ._parse(new hQ(XQ, QQ, XQ.path, WQ))));
        return XQ.common.async ? Promise.all(zQ).then((QQ => TQ(QQ))) : TQ(zQ)
      }
      min(QQ, WQ) {
        return new rW({
          ...this._def,
          minSize: {
            value: QQ,
            message: lQ.toString(WQ)
          }
        })
      }
      max(QQ, WQ) {
        return new rW({
          ...this._def,
          maxSize: {
            value: QQ,
            message: lQ.toString(WQ)
          }
        })
      }
      size(QQ, WQ) {
        return this.min(QQ, WQ).max(QQ, WQ)
      }
      nonempty(QQ) {
        return this.min(1, QQ)
      }
    }
    rW.create = (QQ, WQ) => new rW({
      valueType: QQ,
      minSize: null,
      maxSize: null,
      typeName: RW.ZodSet,
      ...cQ(WQ)
    });
    class IW extends AQ {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ);
        if (WQ.parsedType !== gQ.function) return DQ(WQ, {
          code: rQ.invalid_type,
          expected: gQ.function,
          received: WQ.parsedType
        }), GQ;

        function XQ(QQ, XQ) {
          return VQ({
            data: QQ,
            path: WQ.path,
            errorMaps: [WQ.common.contextualErrorMap, WQ.schemaErrorMap, yQ(), jQ].filter((QQ => !!QQ)),
            issueData: {
              code: rQ.invalid_arguments,
              argumentsError: XQ
            }
          })
        }

        function wQ(QQ, XQ) {
          return VQ({
            data: QQ,
            path: WQ.path,
            errorMaps: [WQ.common.contextualErrorMap, WQ.schemaErrorMap, yQ(), jQ].filter((QQ => !!QQ)),
            issueData: {
              code: rQ.invalid_return_type,
              returnTypeError: XQ
            }
          })
        }
        const qQ = {
            errorMap: WQ.common.contextualErrorMap
          },
          TQ = WQ.data;
        if (this._def.returns instanceof pW) {
          const QQ = this;
          return bQ((async function() {
            for (var WQ = arguments.length, zQ = new Array(WQ), sQ = 0; sQ < WQ; sQ++) zQ[sQ] = arguments[sQ];
            const FQ = new IQ([]),
              PQ = await QQ._def.args.parseAsync(zQ, qQ).catch((QQ => {
                throw FQ.addIssue(XQ(zQ, QQ)), FQ
              })),
              gQ = await Reflect.apply(TQ, this, PQ);
            return await QQ._def.returns._def.type.parseAsync(gQ, qQ).catch((QQ => {
              throw FQ.addIssue(wQ(gQ, QQ)), FQ
            }))
          }))
        } {
          const QQ = this;
          return bQ((function() {
            for (var WQ = arguments.length, zQ = new Array(WQ), sQ = 0; sQ < WQ; sQ++) zQ[sQ] = arguments[sQ];
            const FQ = QQ._def.args.safeParse(zQ, qQ);
            if (!FQ.success) throw new IQ([XQ(zQ, FQ.error)]);
            const PQ = Reflect.apply(TQ, this, FQ.data),
              gQ = QQ._def.returns.safeParse(PQ, qQ);
            if (!gQ.success) throw new IQ([wQ(PQ, gQ.error)]);
            return gQ.data
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
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return new IW({
          ...this._def,
          args: PW.create(WQ).rest(mQ.create())
        })
      }
      returns(QQ) {
        return new IW({
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
      static create(QQ, WQ, XQ) {
        return new IW({
          args: QQ || PW.create([]).rest(mQ.create()),
          returns: WQ || mQ.create(),
          typeName: RW.ZodFunction,
          ...cQ(XQ)
        })
      }
    }
    class jW extends AQ {
      get schema() {
        return this._def.getter()
      }
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ);
        return this._def.getter()._parse({
          data: WQ.data,
          path: WQ.path,
          parent: WQ
        })
      }
    }
    jW.create = (QQ, WQ) => new jW({
      getter: QQ,
      typeName: RW.ZodLazy,
      ...cQ(WQ)
    });
    class BW extends AQ {
      _parse(QQ) {
        if (QQ.data !== this._def.value) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            received: WQ.data,
            code: rQ.invalid_literal,
            expected: this._def.value
          }), GQ
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

    function yW(QQ, WQ) {
      return new VW({
        values: QQ,
        typeName: RW.ZodEnum,
        ...cQ(WQ)
      })
    }
    BW.create = (QQ, WQ) => new BW({
      value: QQ,
      typeName: RW.ZodLiteral,
      ...cQ(WQ)
    });
    class VW extends AQ {
      _parse(QQ) {
        if ("string" !== typeof QQ.data) {
          const WQ = this._getOrReturnCtx(QQ),
            XQ = this._def.values;
          return DQ(WQ, {
            expected: sQ.joinValues(XQ),
            received: WQ.parsedType,
            code: rQ.invalid_type
          }), GQ
        }
        if (-1 === this._def.values.indexOf(QQ.data)) {
          const WQ = this._getOrReturnCtx(QQ),
            XQ = this._def.values;
          return DQ(WQ, {
            received: WQ.data,
            code: rQ.invalid_enum_value,
            options: XQ
          }), GQ
        }
        return bQ(QQ.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const QQ = {};
        for (const WQ of this._def.values) QQ[WQ] = WQ;
        return QQ
      }
      get Values() {
        const QQ = {};
        for (const WQ of this._def.values) QQ[WQ] = WQ;
        return QQ
      }
      get Enum() {
        const QQ = {};
        for (const WQ of this._def.values) QQ[WQ] = WQ;
        return QQ
      }
      extract(QQ) {
        return VW.create(QQ)
      }
      exclude(QQ) {
        return VW.create(this.options.filter((WQ => !QQ.includes(WQ))))
      }
    }
    VW.create = yW;
    class DW extends AQ {
      _parse(QQ) {
        const WQ = sQ.getValidEnumValues(this._def.values),
          XQ = this._getOrReturnCtx(QQ);
        if (XQ.parsedType !== gQ.string && XQ.parsedType !== gQ.number) {
          const QQ = sQ.objectValues(WQ);
          return DQ(XQ, {
            expected: sQ.joinValues(QQ),
            received: XQ.parsedType,
            code: rQ.invalid_type
          }), GQ
        }
        if (-1 === WQ.indexOf(QQ.data)) {
          const QQ = sQ.objectValues(WQ);
          return DQ(XQ, {
            received: XQ.data,
            code: rQ.invalid_enum_value,
            options: QQ
          }), GQ
        }
        return bQ(QQ.data)
      }
      get enum() {
        return this._def.values
      }
    }
    DW.create = (QQ, WQ) => new DW({
      values: QQ,
      typeName: RW.ZodNativeEnum,
      ...cQ(WQ)
    });
    class pW extends AQ {
      unwrap() {
        return this._def.type
      }
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ);
        if (WQ.parsedType !== gQ.promise && !1 === WQ.common.async) return DQ(WQ, {
          code: rQ.invalid_type,
          expected: gQ.promise,
          received: WQ.parsedType
        }), GQ;
        const XQ = WQ.parsedType === gQ.promise ? WQ.data : Promise.resolve(WQ.data);
        return bQ(XQ.then((QQ => this._def.type.parseAsync(QQ, {
          path: WQ.path,
          errorMap: WQ.common.contextualErrorMap
        }))))
      }
    }
    pW.create = (QQ, WQ) => new pW({
      type: QQ,
      typeName: RW.ZodPromise,
      ...cQ(WQ)
    });
    class GW extends AQ {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === RW.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ), wQ = this._def.effect || null, qQ = {
          addIssue: QQ => {
            DQ(XQ, QQ), QQ.fatal ? WQ.abort() : WQ.ij()
          },
          get path() {
            return XQ.path
          }
        };
        if (qQ.addIssue = qQ.addIssue.bind(qQ), "preprocess" === wQ.type) {
          const QQ = wQ.transform(XQ.data, qQ);
          return XQ.common.issues.length ? {
            status: "ij",
            value: XQ.data
          } : XQ.common.async ? Promise.resolve(QQ).then((QQ => this._def.schema._parseAsync({
            data: QQ,
            path: XQ.path,
            parent: XQ
          }))) : this._def.schema._parseSync({
            data: QQ,
            path: XQ.path,
            parent: XQ
          })
        }
        if ("refinement" === wQ.type) {
          const QQ = QQ => {
            const WQ = wQ.refinement(QQ, qQ);
            if (XQ.common.async) return Promise.resolve(WQ);
            if (WQ instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return QQ
          };
          if (!1 === XQ.common.async) {
            const wQ = this._def.schema._parseSync({
              data: XQ.data,
              path: XQ.path,
              parent: XQ
            });
            return "aborted" === wQ.status ? GQ : ("ij" === wQ.status && WQ.ij(), QQ(wQ.value), {
              status: WQ.value,
              value: wQ.value
            })
          }
          return this._def.schema._parseAsync({
            data: XQ.data,
            path: XQ.path,
            parent: XQ
          }).then((XQ => "aborted" === XQ.status ? GQ : ("ij" === XQ.status && WQ.ij(), QQ(XQ.value).then((() => ({
            status: WQ.value,
            value: XQ.value
          }))))))
        }
        if ("transform" === wQ.type) {
          if (!1 === XQ.common.async) {
            const QQ = this._def.schema._parseSync({
              data: XQ.data,
              path: XQ.path,
              parent: XQ
            });
            if (!HQ(QQ)) return QQ;
            const TQ = wQ.transform(QQ.value, qQ);
            if (TQ instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: WQ.value,
              value: TQ
            }
          }
          return this._def.schema._parseAsync({
            data: XQ.data,
            path: XQ.path,
            parent: XQ
          }).then((QQ => HQ(QQ) ? Promise.resolve(wQ.transform(QQ.value, qQ)).then((QQ => ({
            status: WQ.value,
            value: QQ
          }))) : QQ))
        }
        sQ.assertNever(wQ)
      }
    }
    GW.create = (QQ, WQ, XQ) => new GW({
      schema: QQ,
      typeName: RW.ZodEffects,
      effect: WQ,
      ...cQ(XQ)
    }), GW.createWithPreprocess = (QQ, WQ, XQ) => new GW({
      schema: WQ,
      effect: {
        type: "preprocess",
        transform: QQ
      },
      typeName: RW.ZodEffects,
      ...cQ(XQ)
    });
    class UW extends AQ {
      _parse(QQ) {
        return this._getType(QQ) === gQ.undefined ? bQ(void 0) : this._def.innerType._parse(QQ)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    UW.create = (QQ, WQ) => new UW({
      innerType: QQ,
      typeName: RW.ZodOptional,
      ...cQ(WQ)
    });
    class bW extends AQ {
      _parse(QQ) {
        return this._getType(QQ) === gQ.null ? bQ(null) : this._def.innerType._parse(QQ)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    bW.create = (QQ, WQ) => new bW({
      innerType: QQ,
      typeName: RW.ZodNullable,
      ...cQ(WQ)
    });
    class vW extends AQ {
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ);
        let XQ = WQ.data;
        return WQ.parsedType === gQ.undefined && (XQ = this._def.defaultValue()), this._def.innerType._parse({
          data: XQ,
          path: WQ.path,
          parent: WQ
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    vW.create = (QQ, WQ) => new vW({
      innerType: QQ,
      typeName: RW.ZodDefault,
      defaultValue: "function" === typeof WQ.default ? WQ.default : () => WQ.default,
      ...cQ(WQ)
    });
    class dW extends AQ {
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ), XQ = {
          ...WQ,
          common: {
            ...WQ.common,
            issues: []
          }
        }, wQ = this._def.innerType._parse({
          data: XQ.data,
          path: XQ.path,
          parent: {
            ...XQ
          }
        });
        return aQ(wQ) ? wQ.then((QQ => ({
          status: "valid",
          value: "valid" === QQ.status ? QQ.value : this._def.catchValue({
            get error() {
              return new IQ(XQ.common.issues)
            },
            input: XQ.data
          })
        }))) : {
          status: "valid",
          value: "valid" === wQ.status ? wQ.value : this._def.catchValue({
            get error() {
              return new IQ(XQ.common.issues)
            },
            input: XQ.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    dW.create = (QQ, WQ) => new dW({
      innerType: QQ,
      typeName: RW.ZodCatch,
      catchValue: "function" === typeof WQ.catch ? WQ.catch : () => WQ.catch,
      ...cQ(WQ)
    });
    class HW extends AQ {
      _parse(QQ) {
        if (this._getType(QQ) !== gQ.nan) {
          const WQ = this._getOrReturnCtx(QQ);
          return DQ(WQ, {
            code: rQ.invalid_type,
            expected: gQ.nan,
            received: WQ.parsedType
          }), GQ
        }
        return {
          status: "valid",
          value: QQ.data
        }
      }
    }
    HW.create = QQ => new HW({
      typeName: RW.ZodNaN,
      ...cQ(QQ)
    });
    const aW = Symbol("zod_brand");
    class lW extends AQ {
      _parse(QQ) {
        const {
          ctx: WQ
        } = this._processInputParams(QQ), XQ = WQ.data;
        return this._def.type._parse({
          data: XQ,
          path: WQ.path,
          parent: WQ
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class hW extends AQ {
      _parse(QQ) {
        const {
          status: WQ,
          ctx: XQ
        } = this._processInputParams(QQ);
        if (XQ.common.async) {
          return (async () => {
            const QQ = await this._def.in._parseAsync({
              data: XQ.data,
              path: XQ.path,
              parent: XQ
            });
            return "aborted" === QQ.status ? GQ : "ij" === QQ.status ? (WQ.ij(), UQ(QQ.value)) : this._def.out._parseAsync({
              data: QQ.value,
              path: XQ.path,
              parent: XQ
            })
          })()
        } {
          const QQ = this._def.in._parseSync({
            data: XQ.data,
            path: XQ.path,
            parent: XQ
          });
          return "aborted" === QQ.status ? GQ : "ij" === QQ.status ? (WQ.ij(), {
            status: "ij",
            value: QQ.value
          }) : this._def.out._parseSync({
            data: QQ.value,
            path: XQ.path,
            parent: XQ
          })
        }
      }
      static create(QQ, WQ) {
        return new hW({
          in: QQ,
          out: WQ,
          typeName: RW.ZodPipeline
        })
      }
    }
    class iW extends AQ {
      _parse(QQ) {
        const WQ = this._def.innerType._parse(QQ);
        return HQ(WQ) && (WQ.value = Object.freeze(WQ.value)), WQ
      }
    }
    iW.create = (QQ, WQ) => new iW({
      innerType: QQ,
      typeName: RW.ZodReadonly,
      ...cQ(WQ)
    });
    const cW = function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        return QQ ? KQ.create().superRefine(((wQ, qQ) => {
          var TQ, zQ;
          if (!QQ(wQ)) {
            const QQ = "function" === typeof WQ ? WQ(wQ) : "string" === typeof WQ ? {
                message: WQ
              } : WQ,
              sQ = null === (zQ = null !== (TQ = QQ.fatal) && void 0 !== TQ ? TQ : XQ) || void 0 === zQ || zQ,
              FQ = "string" === typeof QQ ? {
                message: QQ
              } : QQ;
            qQ.addIssue({
              code: "custom",
              ...FQ,
              fatal: sQ
            })
          }
        })) : KQ.create()
      },
      AW = {
        object: wW.lazycreate
      };
    var RW;
    ! function(QQ) {
      QQ.ZodString = "ZodString", QQ.ZodNumber = "ZodNumber", QQ.ZodNaN = "ZodNaN", QQ.ZodBigInt = "ZodBigInt", QQ.ZodBoolean = "ZodBoolean", QQ.ZodDate = "ZodDate", QQ.ZodSymbol = "ZodSymbol", QQ.ZodUndefined = "ZodUndefined", QQ.ZodNull = "ZodNull", QQ.ZodAny = "ZodAny", QQ.ZodUnknown = "ZodUnknown", QQ.ZodNever = "ZodNever", QQ.ZodVoid = "ZodVoid", QQ.ZodArray = "ZodArray", QQ.ZodObject = "ZodObject", QQ.ZodUnion = "ZodUnion", QQ.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", QQ.ZodIntersection = "ZodIntersection", QQ.ZodTuple = "ZodTuple", QQ.ZodRecord = "ZodRecord", QQ.ZodMap = "ZodMap", QQ.ZodSet = "ZodSet", QQ.ZodFunction = "ZodFunction", QQ.ZodLazy = "ZodLazy", QQ.ZodLiteral = "ZodLiteral", QQ.ZodEnum = "ZodEnum", QQ.ZodEffects = "ZodEffects", QQ.ZodNativeEnum = "ZodNativeEnum", QQ.ZodOptional = "ZodOptional", QQ.ZodNullable = "ZodNullable", QQ.ZodDefault = "ZodDefault", QQ.ZodCatch = "ZodCatch", QQ.ZodPromise = "ZodPromise", QQ.ZodBranded = "ZodBranded", QQ.ZodPipeline = "ZodPipeline", QQ.ZodReadonly = "ZodReadonly"
    }(RW || (RW = {}));
    const EW = tQ.create,
      CW = eQ.create,
      uW = HW.create,
      LW = nQ.create,
      kW = xQ.create,
      fW = YQ.create,
      SW = NQ.create,
      tW = ZQ.create,
      oW = OQ.create,
      eW = KQ.create,
      nW = mQ.create,
      xW = MQ.create,
      YW = QW.create,
      NW = WW.create,
      ZW = wW.create,
      OW = wW.strictCreate,
      KW = qW.create,
      mW = zW.create,
      MW = FW.create,
      QX = PW.create,
      WX = gW.create,
      XX = JW.create,
      wX = rW.create,
      qX = IW.create,
      TX = jW.create,
      zX = BW.create,
      sX = VW.create,
      FX = DW.create,
      PX = pW.create,
      gX = GW.create,
      JX = UW.create,
      rX = bW.create,
      IX = GW.createWithPreprocess,
      jX = hW.create,
      BX = {
        string: QQ => tQ.create({
          ...QQ,
          coerce: !0
        }),
        number: QQ => eQ.create({
          ...QQ,
          coerce: !0
        }),
        boolean: QQ => xQ.create({
          ...QQ,
          coerce: !0
        }),
        bigint: QQ => nQ.create({
          ...QQ,
          coerce: !0
        }),
        date: QQ => YQ.create({
          ...QQ,
          coerce: !0
        })
      },
      yX = GQ;
    var VX = Object.freeze({
        __proto__: null,
        defaultErrorMap: jQ,
        setErrorMap: function(QQ) {
          BQ = QQ
        },
        getErrorMap: yQ,
        makeIssue: VQ,
        EMPTY_PATH: [],
        addIssueToContext: DQ,
        ParseStatus: pQ,
        INVALID: GQ,
        DIRTY: UQ,
        OK: bQ,
        isAborted: vQ,
        isDirty: dQ,
        isValid: HQ,
        isAsync: aQ,
        get util() {
          return sQ
        },
        get objectUtil() {
          return FQ
        },
        ZodParsedType: gQ,
        getParsedType: JQ,
        ZodType: AQ,
        ZodString: tQ,
        ZodNumber: eQ,
        ZodBigInt: nQ,
        ZodBoolean: xQ,
        ZodDate: YQ,
        ZodSymbol: NQ,
        ZodUndefined: ZQ,
        ZodNull: OQ,
        ZodAny: KQ,
        ZodUnknown: mQ,
        ZodNever: MQ,
        ZodVoid: QW,
        ZodArray: WW,
        ZodObject: wW,
        ZodUnion: qW,
        ZodDiscriminatedUnion: zW,
        ZodIntersection: FW,
        ZodTuple: PW,
        ZodRecord: gW,
        ZodMap: JW,
        ZodSet: rW,
        ZodFunction: IW,
        ZodLazy: jW,
        ZodLiteral: BW,
        ZodEnum: VW,
        ZodNativeEnum: DW,
        ZodPromise: pW,
        ZodEffects: GW,
        ZodTransformer: GW,
        ZodOptional: UW,
        ZodNullable: bW,
        ZodDefault: vW,
        ZodCatch: dW,
        ZodNaN: HW,
        BRAND: aW,
        ZodBranded: lW,
        ZodPipeline: hW,
        ZodReadonly: iW,
        custom: cW,
        Schema: AQ,
        ZodSchema: AQ,
        late: AW,
        get ZodFirstPartyTypeKind() {
          return RW
        },
        coerce: BX,
        any: eW,
        array: NW,
        bigint: LW,
        boolean: kW,
        date: fW,
        discriminatedUnion: mW,
        effect: gX,
        enum: sX,
        function: qX,
        instanceof: function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${QQ.name}`
          };
          return cW((WQ => WQ instanceof QQ), WQ)
        },
        intersection: MW,
        lazy: TX,
        literal: zX,
        map: XX,
        nan: uW,
        nativeEnum: FX,
        never: xW,
        null: oW,
        nullable: rX,
        number: CW,
        object: ZW,
        oboolean: () => kW().optional(),
        onumber: () => CW().optional(),
        optional: JX,
        ostring: () => EW().optional(),
        pipeline: jX,
        preprocess: IX,
        promise: PX,
        record: WX,
        set: wX,
        strictObject: OW,
        string: EW,
        symbol: SW,
        transformer: gX,
        tuple: QX,
        undefined: tW,
        union: KW,
        unknown: nW,
        void: YW,
        NEVER: yX,
        ZodIssueCode: rQ,
        quotelessJson: QQ => JSON.stringify(QQ, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: IQ
      }),
      DX = {
        exports: {}
      };
    ! function(QQ) {
      var WQ = function(QQ) {
        var XQ = 1e7,
          wQ = 9007199254740992,
          qQ = rQ(wQ),
          TQ = "0123456789abcdefghijklmnopqrstuvwxyz",
          zQ = "function" === typeof BigInt;

        function sQ(QQ, WQ, XQ, wQ) {
          return "undefined" === typeof QQ ? sQ[0] : "undefined" !== typeof WQ && (10 !== +WQ || XQ) ? xQ(QQ, WQ, XQ, wQ) : KQ(QQ)
        }

        function FQ(QQ, WQ) {
          this.value = QQ, this.sign = WQ, this.isSmall = !1
        }

        function PQ(QQ) {
          this.value = QQ, this.sign = QQ < 0, this.isSmall = !0
        }

        function gQ(QQ) {
          this.value = QQ
        }

        function JQ(QQ) {
          return -wQ < QQ && QQ < wQ
        }

        function rQ(QQ) {
          return QQ < 1e7 ? [QQ] : QQ < 1e14 ? [QQ % 1e7, Math.floor(QQ / 1e7)] : [QQ % 1e7, Math.floor(QQ / 1e7) % 1e7, Math.floor(QQ / 1e14)]
        }

        function IQ(QQ) {
          jQ(QQ);
          var WQ = QQ.length;
          if (WQ < 4 && cQ(QQ, qQ) < 0) switch (WQ) {
            case 0:
              return 0;
            case 1:
              return QQ[0];
            case 2:
              return QQ[0] + QQ[1] * XQ;
            default:
              return QQ[0] + (QQ[1] + QQ[2] * XQ) * XQ
          }
          return QQ
        }

        function jQ(QQ) {
          for (var WQ = QQ.length; 0 === QQ[--WQ];);
          QQ.length = WQ + 1
        }

        function BQ(QQ) {
          for (var WQ = new Array(QQ), XQ = -1; ++XQ < QQ;) WQ[XQ] = 0;
          return WQ
        }

        function yQ(QQ) {
          return QQ > 0 ? Math.floor(QQ) : Math.ceil(QQ)
        }

        function VQ(QQ, WQ) {
          var wQ, qQ, TQ = QQ.length,
            zQ = WQ.length,
            sQ = new Array(TQ),
            FQ = 0,
            PQ = XQ;
          for (qQ = 0; qQ < zQ; qQ++) FQ = (wQ = QQ[qQ] + WQ[qQ] + FQ) >= PQ ? 1 : 0, sQ[qQ] = wQ - FQ * PQ;
          for (; qQ < TQ;) FQ = (wQ = QQ[qQ] + FQ) === PQ ? 1 : 0, sQ[qQ++] = wQ - FQ * PQ;
          return FQ > 0 && sQ.push(FQ), sQ
        }

        function DQ(QQ, WQ) {
          return QQ.length >= WQ.length ? VQ(QQ, WQ) : VQ(WQ, QQ)
        }

        function pQ(QQ, WQ) {
          var wQ, qQ, TQ = QQ.length,
            zQ = new Array(TQ),
            sQ = XQ;
          for (qQ = 0; qQ < TQ; qQ++) wQ = QQ[qQ] - sQ + WQ, WQ = Math.floor(wQ / sQ), zQ[qQ] = wQ - WQ * sQ, WQ += 1;
          for (; WQ > 0;) zQ[qQ++] = WQ % sQ, WQ = Math.floor(WQ / sQ);
          return zQ
        }

        function GQ(QQ, WQ) {
          var wQ, qQ, TQ = QQ.length,
            zQ = WQ.length,
            sQ = new Array(TQ),
            FQ = 0,
            PQ = XQ;
          for (wQ = 0; wQ < zQ; wQ++)(qQ = QQ[wQ] - FQ - WQ[wQ]) < 0 ? (qQ += PQ, FQ = 1) : FQ = 0, sQ[wQ] = qQ;
          for (wQ = zQ; wQ < TQ; wQ++) {
            if (!((qQ = QQ[wQ] - FQ) < 0)) {
              sQ[wQ++] = qQ;
              break
            }
            qQ += PQ, sQ[wQ] = qQ
          }
          for (; wQ < TQ; wQ++) sQ[wQ] = QQ[wQ];
          return jQ(sQ), sQ
        }

        function UQ(QQ, WQ, wQ) {
          var qQ, TQ, zQ = QQ.length,
            sQ = new Array(zQ),
            gQ = -WQ,
            JQ = XQ;
          for (qQ = 0; qQ < zQ; qQ++) TQ = QQ[qQ] + gQ, gQ = Math.floor(TQ / JQ), TQ %= JQ, sQ[qQ] = TQ < 0 ? TQ + JQ : TQ;
          return "number" === typeof(sQ = IQ(sQ)) ? (wQ && (sQ = -sQ), new PQ(sQ)) : new FQ(sQ, wQ)
        }

        function bQ(QQ, WQ) {
          var wQ, qQ, TQ, zQ, sQ = QQ.length,
            FQ = WQ.length,
            PQ = BQ(sQ + FQ),
            gQ = XQ;
          for (TQ = 0; TQ < sQ; ++TQ) {
            zQ = QQ[TQ];
            for (var JQ = 0; JQ < FQ; ++JQ) wQ = zQ * WQ[JQ] + PQ[TQ + JQ], qQ = Math.floor(wQ / gQ), PQ[TQ + JQ] = wQ - qQ * gQ, PQ[TQ + JQ + 1] += qQ
          }
          return jQ(PQ), PQ
        }

        function vQ(QQ, WQ) {
          var wQ, qQ, TQ = QQ.length,
            zQ = new Array(TQ),
            sQ = XQ,
            FQ = 0;
          for (qQ = 0; qQ < TQ; qQ++) wQ = QQ[qQ] * WQ + FQ, FQ = Math.floor(wQ / sQ), zQ[qQ] = wQ - FQ * sQ;
          for (; FQ > 0;) zQ[qQ++] = FQ % sQ, FQ = Math.floor(FQ / sQ);
          return zQ
        }

        function dQ(QQ, WQ) {
          for (var XQ = []; WQ-- > 0;) XQ.push(0);
          return XQ.concat(QQ)
        }

        function HQ(QQ, WQ) {
          var XQ = Math.max(QQ.length, WQ.length);
          if (XQ <= 30) return bQ(QQ, WQ);
          XQ = Math.ceil(XQ / 2);
          var wQ = QQ.slice(XQ),
            qQ = QQ.slice(0, XQ),
            TQ = WQ.slice(XQ),
            zQ = WQ.slice(0, XQ),
            sQ = HQ(qQ, zQ),
            FQ = HQ(wQ, TQ),
            PQ = HQ(DQ(qQ, wQ), DQ(zQ, TQ)),
            gQ = DQ(DQ(sQ, dQ(GQ(GQ(PQ, sQ), FQ), XQ)), dQ(FQ, 2 * XQ));
          return jQ(gQ), gQ
        }

        function aQ(QQ, WQ, wQ) {
          return new FQ(QQ < XQ ? vQ(WQ, QQ) : bQ(WQ, rQ(QQ)), wQ)
        }

        function lQ(QQ) {
          var WQ, wQ, qQ, TQ, zQ = QQ.length,
            sQ = BQ(zQ + zQ),
            FQ = XQ;
          for (qQ = 0; qQ < zQ; qQ++) {
            wQ = 0 - (TQ = QQ[qQ]) * TQ;
            for (var PQ = qQ; PQ < zQ; PQ++) WQ = TQ * QQ[PQ] * 2 + sQ[qQ + PQ] + wQ, wQ = Math.floor(WQ / FQ), sQ[qQ + PQ] = WQ - wQ * FQ;
            sQ[qQ + zQ] = wQ
          }
          return jQ(sQ), sQ
        }

        function hQ(QQ, WQ) {
          var wQ, qQ, TQ, zQ, sQ = QQ.length,
            FQ = BQ(sQ),
            PQ = XQ;
          for (TQ = 0, wQ = sQ - 1; wQ >= 0; --wQ) TQ = (zQ = TQ * PQ + QQ[wQ]) - (qQ = yQ(zQ / WQ)) * WQ, FQ[wQ] = 0 | qQ;
          return [FQ, 0 | TQ]
        }

        function iQ(QQ, WQ) {
          var wQ, qQ = KQ(WQ);
          if (zQ) return [new gQ(QQ.value / qQ.value), new gQ(QQ.value % qQ.value)];
          var TQ, JQ = QQ.value,
            VQ = qQ.value;
          if (0 === VQ) throw new Error("Cannot divide by zero");
          if (QQ.isSmall) return qQ.isSmall ? [new PQ(yQ(JQ / VQ)), new PQ(JQ % VQ)] : [sQ[0], QQ];
          if (qQ.isSmall) {
            if (1 === VQ) return [QQ, sQ[0]];
            if (-1 == VQ) return [QQ.pg(), sQ[0]];
            var DQ = Math.abs(VQ);
            if (DQ < XQ) {
              TQ = IQ((wQ = hQ(JQ, DQ))[0]);
              var pQ = wQ[1];
              return QQ.sign && (pQ = -pQ), "number" === typeof TQ ? (QQ.sign !== qQ.sign && (TQ = -TQ), [new PQ(TQ), new PQ(pQ)]) : [new FQ(TQ, QQ.sign !== qQ.sign), new PQ(pQ)]
            }
            VQ = rQ(DQ)
          }
          var UQ = cQ(JQ, VQ);
          if (-1 === UQ) return [sQ[0], QQ];
          if (0 === UQ) return [sQ[QQ.sign === qQ.sign ? 1 : -1], sQ[0]];
          wQ = JQ.length + VQ.length <= 200 ? function(QQ, WQ) {
            var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ = QQ.length,
              JQ = WQ.length,
              rQ = XQ,
              jQ = BQ(WQ.length),
              yQ = WQ[JQ - 1],
              VQ = Math.ceil(rQ / (2 * yQ)),
              DQ = vQ(QQ, VQ),
              pQ = vQ(WQ, VQ);
            for (DQ.length <= gQ && DQ.push(0), pQ.push(0), yQ = pQ[JQ - 1], qQ = gQ - JQ; qQ >= 0; qQ--) {
              for (wQ = rQ - 1, DQ[qQ + JQ] !== yQ && (wQ = Math.floor((DQ[qQ + JQ] * rQ + DQ[qQ + JQ - 1]) / yQ)), TQ = 0, zQ = 0, FQ = pQ.length, sQ = 0; sQ < FQ; sQ++) TQ += wQ * pQ[sQ], PQ = Math.floor(TQ / rQ), zQ += DQ[qQ + sQ] - (TQ - PQ * rQ), TQ = PQ, zQ < 0 ? (DQ[qQ + sQ] = zQ + rQ, zQ = -1) : (DQ[qQ + sQ] = zQ, zQ = 0);
              for (; 0 !== zQ;) {
                for (wQ -= 1, TQ = 0, sQ = 0; sQ < FQ; sQ++)(TQ += DQ[qQ + sQ] - rQ + pQ[sQ]) < 0 ? (DQ[qQ + sQ] = TQ + rQ, TQ = 0) : (DQ[qQ + sQ] = TQ, TQ = 1);
                zQ += TQ
              }
              jQ[qQ] = wQ
            }
            return DQ = hQ(DQ, VQ)[0], [IQ(jQ), IQ(DQ)]
          }(JQ, VQ) : function(QQ, WQ) {
            for (var wQ, qQ, TQ, zQ, sQ, FQ = QQ.length, PQ = WQ.length, gQ = [], JQ = [], rQ = XQ; FQ;)
              if (JQ.unshift(QQ[--FQ]), jQ(JQ), cQ(JQ, WQ) < 0) gQ.push(0);
              else {
                TQ = JQ[(qQ = JQ.length) - 1] * rQ + JQ[qQ - 2], zQ = WQ[PQ - 1] * rQ + WQ[PQ - 2], qQ > PQ && (TQ = (TQ + 1) * rQ), wQ = Math.ceil(TQ / zQ);
                do {
                  if (cQ(sQ = vQ(WQ, wQ), JQ) <= 0) break;
                  wQ--
                } while (wQ);
                gQ.push(wQ), JQ = GQ(JQ, sQ)
              } return gQ.reverse(), [IQ(gQ), IQ(JQ)]
          }(JQ, VQ), TQ = wQ[0];
          var bQ = QQ.sign !== qQ.sign,
            dQ = wQ[1],
            HQ = QQ.sign;
          return "number" === typeof TQ ? (bQ && (TQ = -TQ), TQ = new PQ(TQ)) : TQ = new FQ(TQ, bQ), "number" === typeof dQ ? (HQ && (dQ = -dQ), dQ = new PQ(dQ)) : dQ = new FQ(dQ, HQ), [TQ, dQ]
        }

        function cQ(QQ, WQ) {
          if (QQ.length !== WQ.length) return QQ.length > WQ.length ? 1 : -1;
          for (var XQ = QQ.length - 1; XQ >= 0; XQ--)
            if (QQ[XQ] !== WQ[XQ]) return QQ[XQ] > WQ[XQ] ? 1 : -1;
          return 0
        }

        function AQ(QQ) {
          var WQ = QQ.abs();
          return !WQ.isUnit() && (!!(WQ.equals(2) || WQ.equals(3) || WQ.equals(5)) || !(WQ.isEven() || WQ.isDivisibleBy(3) || WQ.isDivisibleBy(5)) && (!!WQ.lesser(49) || void 0))
        }

        function RQ(QQ, XQ) {
          for (var wQ, qQ, TQ, zQ = QQ.prev(), sQ = zQ, FQ = 0; sQ.isEven();) sQ = sQ.divide(2), FQ++;
          QQ: for (qQ = 0; qQ < XQ.length; qQ++)
            if (!QQ.lesser(XQ[qQ]) && !(TQ = WQ(XQ[qQ]).modPow(sQ, QQ)).isUnit() && !TQ.equals(zQ)) {
              for (wQ = FQ - 1; 0 != wQ; wQ--) {
                if ((TQ = TQ.square().mod(QQ)).isUnit()) return !1;
                if (TQ.equals(zQ)) continue QQ
              }
              return !1
            }
          return !0
        }
        FQ.prototype = Object.create(sQ.prototype), PQ.prototype = Object.create(sQ.prototype), gQ.prototype = Object.create(sQ.prototype), FQ.prototype.add = function(QQ) {
          var WQ = KQ(QQ);
          if (this.sign !== WQ.sign) return this.subtract(WQ.pg());
          var XQ = this.value,
            wQ = WQ.value;
          return WQ.isSmall ? new FQ(pQ(XQ, Math.abs(wQ)), this.sign) : new FQ(DQ(XQ, wQ), this.sign)
        }, FQ.prototype.plus = FQ.prototype.add, PQ.prototype.add = function(QQ) {
          var WQ = KQ(QQ),
            XQ = this.value;
          if (XQ < 0 !== WQ.sign) return this.subtract(WQ.pg());
          var wQ = WQ.value;
          if (WQ.isSmall) {
            if (JQ(XQ + wQ)) return new PQ(XQ + wQ);
            wQ = rQ(Math.abs(wQ))
          }
          return new FQ(pQ(wQ, Math.abs(XQ)), XQ < 0)
        }, PQ.prototype.plus = PQ.prototype.add, gQ.prototype.add = function(QQ) {
          return new gQ(this.value + KQ(QQ).value)
        }, gQ.prototype.plus = gQ.prototype.add, FQ.prototype.subtract = function(QQ) {
          var WQ = KQ(QQ);
          if (this.sign !== WQ.sign) return this.add(WQ.pg());
          var XQ = this.value,
            wQ = WQ.value;
          return WQ.isSmall ? UQ(XQ, Math.abs(wQ), this.sign) : function(QQ, WQ, XQ) {
            var wQ;
            return cQ(QQ, WQ) >= 0 ? wQ = GQ(QQ, WQ) : (wQ = GQ(WQ, QQ), XQ = !XQ), "number" === typeof(wQ = IQ(wQ)) ? (XQ && (wQ = -wQ), new PQ(wQ)) : new FQ(wQ, XQ)
          }(XQ, wQ, this.sign)
        }, FQ.prototype.minus = FQ.prototype.subtract, PQ.prototype.subtract = function(QQ) {
          var WQ = KQ(QQ),
            XQ = this.value;
          if (XQ < 0 !== WQ.sign) return this.add(WQ.pg());
          var wQ = WQ.value;
          return WQ.isSmall ? new PQ(XQ - wQ) : UQ(wQ, Math.abs(XQ), XQ >= 0)
        }, PQ.prototype.minus = PQ.prototype.subtract, gQ.prototype.subtract = function(QQ) {
          return new gQ(this.value - KQ(QQ).value)
        }, gQ.prototype.minus = gQ.prototype.subtract, FQ.prototype.pg = function() {
          return new FQ(this.value, !this.sign)
        }, PQ.prototype.pg = function() {
          var QQ = this.sign,
            WQ = new PQ(-this.value);
          return WQ.sign = !QQ, WQ
        }, gQ.prototype.pg = function() {
          return new gQ(-this.value)
        }, FQ.prototype.abs = function() {
          return new FQ(this.value, !1)
        }, PQ.prototype.abs = function() {
          return new PQ(Math.abs(this.value))
        }, gQ.prototype.abs = function() {
          return new gQ(this.value >= 0 ? this.value : -this.value)
        }, FQ.prototype.multiply = function(QQ) {
          var WQ, wQ, qQ, TQ = KQ(QQ),
            zQ = this.value,
            PQ = TQ.value,
            gQ = this.sign !== TQ.sign;
          if (TQ.isSmall) {
            if (0 === PQ) return sQ[0];
            if (1 === PQ) return this;
            if (-1 === PQ) return this.pg();
            if ((WQ = Math.abs(PQ)) < XQ) return new FQ(vQ(zQ, WQ), gQ);
            PQ = rQ(WQ)
          }
          return wQ = zQ.length, qQ = PQ.length, new FQ(-.012 * wQ - .012 * qQ + 15e-6 * wQ * qQ > 0 ? HQ(zQ, PQ) : bQ(zQ, PQ), gQ)
        }, FQ.prototype.times = FQ.prototype.multiply, PQ.prototype._multiplyBySmall = function(QQ) {
          return JQ(QQ.value * this.value) ? new PQ(QQ.value * this.value) : aQ(Math.abs(QQ.value), rQ(Math.abs(this.value)), this.sign !== QQ.sign)
        }, FQ.prototype._multiplyBySmall = function(QQ) {
          return 0 === QQ.value ? sQ[0] : 1 === QQ.value ? this : -1 === QQ.value ? this.pg() : aQ(Math.abs(QQ.value), this.value, this.sign !== QQ.sign)
        }, PQ.prototype.multiply = function(QQ) {
          return KQ(QQ)._multiplyBySmall(this)
        }, PQ.prototype.times = PQ.prototype.multiply, gQ.prototype.multiply = function(QQ) {
          return new gQ(this.value * KQ(QQ).value)
        }, gQ.prototype.times = gQ.prototype.multiply, FQ.prototype.square = function() {
          return new FQ(lQ(this.value), !1)
        }, PQ.prototype.square = function() {
          var QQ = this.value * this.value;
          return JQ(QQ) ? new PQ(QQ) : new FQ(lQ(rQ(Math.abs(this.value))), !1)
        }, gQ.prototype.square = function(QQ) {
          return new gQ(this.value * this.value)
        }, FQ.prototype.divmod = function(QQ) {
          var WQ = iQ(this, QQ);
          return {
            quotient: WQ[0],
            remainder: WQ[1]
          }
        }, gQ.prototype.divmod = PQ.prototype.divmod = FQ.prototype.divmod, FQ.prototype.divide = function(QQ) {
          return iQ(this, QQ)[0]
        }, gQ.prototype.over = gQ.prototype.divide = function(QQ) {
          return new gQ(this.value / KQ(QQ).value)
        }, PQ.prototype.over = PQ.prototype.divide = FQ.prototype.over = FQ.prototype.divide, FQ.prototype.mod = function(QQ) {
          return iQ(this, QQ)[1]
        }, gQ.prototype.mod = gQ.prototype.remainder = function(QQ) {
          return new gQ(this.value % KQ(QQ).value)
        }, PQ.prototype.remainder = PQ.prototype.mod = FQ.prototype.remainder = FQ.prototype.mod, FQ.prototype.pow = function(QQ) {
          var WQ, XQ, wQ, qQ = KQ(QQ),
            TQ = this.value,
            zQ = qQ.value;
          if (0 === zQ) return sQ[1];
          if (0 === TQ) return sQ[0];
          if (1 === TQ) return sQ[1];
          if (-1 === TQ) return qQ.isEven() ? sQ[1] : sQ[-1];
          if (qQ.sign) return sQ[0];
          if (!qQ.isSmall) throw new Error("The exponent " + qQ.toString() + " is too large.");
          if (this.isSmall && JQ(WQ = Math.pow(TQ, zQ))) return new PQ(yQ(WQ));
          for (XQ = this, wQ = sQ[1]; !0 & zQ && (wQ = wQ.times(XQ), --zQ), 0 !== zQ;) zQ /= 2, XQ = XQ.square();
          return wQ
        }, PQ.prototype.pow = FQ.prototype.pow, gQ.prototype.pow = function(QQ) {
          var WQ = KQ(QQ),
            XQ = this.value,
            wQ = WQ.value,
            qQ = BigInt(0),
            TQ = BigInt(1),
            zQ = BigInt(2);
          if (wQ === qQ) return sQ[1];
          if (XQ === qQ) return sQ[0];
          if (XQ === TQ) return sQ[1];
          if (XQ === BigInt(-1)) return WQ.isEven() ? sQ[1] : sQ[-1];
          if (WQ.isNegative()) return new gQ(qQ);
          for (var FQ = this, PQ = sQ[1];
            (wQ & TQ) === TQ && (PQ = PQ.times(FQ), --wQ), wQ !== qQ;) wQ /= zQ, FQ = FQ.square();
          return PQ
        }, FQ.prototype.modPow = function(QQ, WQ) {
          if (QQ = KQ(QQ), (WQ = KQ(WQ)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var XQ = sQ[1],
            wQ = this.mod(WQ);
          for (QQ.isNegative() && (QQ = QQ.multiply(sQ[-1]), wQ = wQ.modInv(WQ)); QQ.isPositive();) {
            if (wQ.isZero()) return sQ[0];
            QQ.isOdd() && (XQ = XQ.multiply(wQ).mod(WQ)), QQ = QQ.divide(2), wQ = wQ.square().mod(WQ)
          }
          return XQ
        }, gQ.prototype.modPow = PQ.prototype.modPow = FQ.prototype.modPow, FQ.prototype.compareAbs = function(QQ) {
          var WQ = KQ(QQ),
            XQ = this.value,
            wQ = WQ.value;
          return WQ.isSmall ? 1 : cQ(XQ, wQ)
        }, PQ.prototype.compareAbs = function(QQ) {
          var WQ = KQ(QQ),
            XQ = Math.abs(this.value),
            wQ = WQ.value;
          return WQ.isSmall ? XQ === (wQ = Math.abs(wQ)) ? 0 : XQ > wQ ? 1 : -1 : -1
        }, gQ.prototype.compareAbs = function(QQ) {
          var WQ = this.value,
            XQ = KQ(QQ).value;
          return (WQ = WQ >= 0 ? WQ : -WQ) === (XQ = XQ >= 0 ? XQ : -XQ) ? 0 : WQ > XQ ? 1 : -1
        }, FQ.prototype.compare = function(QQ) {
          if (QQ === 1 / 0) return -1;
          if (QQ === -1 / 0) return 1;
          var WQ = KQ(QQ),
            XQ = this.value,
            wQ = WQ.value;
          return this.sign !== WQ.sign ? WQ.sign ? 1 : -1 : WQ.isSmall ? this.sign ? -1 : 1 : cQ(XQ, wQ) * (this.sign ? -1 : 1)
        }, FQ.prototype.compareTo = FQ.prototype.compare, PQ.prototype.compare = function(QQ) {
          if (QQ === 1 / 0) return -1;
          if (QQ === -1 / 0) return 1;
          var WQ = KQ(QQ),
            XQ = this.value,
            wQ = WQ.value;
          return WQ.isSmall ? XQ == wQ ? 0 : XQ > wQ ? 1 : -1 : XQ < 0 !== WQ.sign ? XQ < 0 ? -1 : 1 : XQ < 0 ? 1 : -1
        }, PQ.prototype.compareTo = PQ.prototype.compare, gQ.prototype.compare = function(QQ) {
          if (QQ === 1 / 0) return -1;
          if (QQ === -1 / 0) return 1;
          var WQ = this.value,
            XQ = KQ(QQ).value;
          return WQ === XQ ? 0 : WQ > XQ ? 1 : -1
        }, gQ.prototype.compareTo = gQ.prototype.compare, FQ.prototype.equals = function(QQ) {
          return 0 === this.compare(QQ)
        }, gQ.prototype.eq = gQ.prototype.equals = PQ.prototype.eq = PQ.prototype.equals = FQ.prototype.eq = FQ.prototype.equals, FQ.prototype.notEquals = function(QQ) {
          return 0 !== this.compare(QQ)
        }, gQ.prototype.neq = gQ.prototype.notEquals = PQ.prototype.neq = PQ.prototype.notEquals = FQ.prototype.neq = FQ.prototype.notEquals, FQ.prototype.greater = function(QQ) {
          return this.compare(QQ) > 0
        }, gQ.prototype.gt = gQ.prototype.greater = PQ.prototype.gt = PQ.prototype.greater = FQ.prototype.gt = FQ.prototype.greater, FQ.prototype.lesser = function(QQ) {
          return this.compare(QQ) < 0
        }, gQ.prototype.lt = gQ.prototype.lesser = PQ.prototype.lt = PQ.prototype.lesser = FQ.prototype.lt = FQ.prototype.lesser, FQ.prototype.greaterOrEquals = function(QQ) {
          return this.compare(QQ) >= 0
        }, gQ.prototype.geq = gQ.prototype.greaterOrEquals = PQ.prototype.geq = PQ.prototype.greaterOrEquals = FQ.prototype.geq = FQ.prototype.greaterOrEquals, FQ.prototype.lesserOrEquals = function(QQ) {
          return this.compare(QQ) <= 0
        }, gQ.prototype.leq = gQ.prototype.lesserOrEquals = PQ.prototype.leq = PQ.prototype.lesserOrEquals = FQ.prototype.leq = FQ.prototype.lesserOrEquals, FQ.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, PQ.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, gQ.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, FQ.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, PQ.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, gQ.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, FQ.prototype.isPositive = function() {
          return !this.sign
        }, PQ.prototype.isPositive = function() {
          return this.value > 0
        }, gQ.prototype.isPositive = PQ.prototype.isPositive, FQ.prototype.isNegative = function() {
          return this.sign
        }, PQ.prototype.isNegative = function() {
          return this.value < 0
        }, gQ.prototype.isNegative = PQ.prototype.isNegative, FQ.prototype.isUnit = function() {
          return !1
        }, PQ.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, gQ.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, FQ.prototype.isZero = function() {
          return !1
        }, PQ.prototype.isZero = function() {
          return 0 === this.value
        }, gQ.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, FQ.prototype.isDivisibleBy = function(QQ) {
          var WQ = KQ(QQ);
          return !WQ.isZero() && (!!WQ.isUnit() || (0 === WQ.compareAbs(2) ? this.isEven() : this.mod(WQ).isZero()))
        }, gQ.prototype.isDivisibleBy = PQ.prototype.isDivisibleBy = FQ.prototype.isDivisibleBy, FQ.prototype.isPrime = function(XQ) {
          var wQ = AQ(this);
          if (wQ !== QQ) return wQ;
          var qQ = this.abs(),
            TQ = qQ.bitLength();
          if (TQ <= 64) return RQ(qQ, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var zQ = Math.log(2) * TQ.toJSNumber(), sQ = Math.ceil(!0 === XQ ? 2 * Math.pow(zQ, 2) : zQ), FQ = [], PQ = 0; PQ < sQ; PQ++) FQ.push(WQ(PQ + 2));
          return RQ(qQ, FQ)
        }, gQ.prototype.isPrime = PQ.prototype.isPrime = FQ.prototype.isPrime, FQ.prototype.isProbablePrime = function(XQ, wQ) {
          var qQ = AQ(this);
          if (qQ !== QQ) return qQ;
          for (var TQ = this.abs(), zQ = XQ === QQ ? 5 : XQ, sQ = [], FQ = 0; FQ < zQ; FQ++) sQ.push(WQ.randBetween(2, TQ.minus(2), wQ));
          return RQ(TQ, sQ)
        }, gQ.prototype.isProbablePrime = PQ.prototype.isProbablePrime = FQ.prototype.isProbablePrime, FQ.prototype.modInv = function(QQ) {
          for (var XQ, wQ, qQ, TQ = WQ.zero, zQ = WQ.one, sQ = KQ(QQ), FQ = this.abs(); !FQ.isZero();) XQ = sQ.divide(FQ), wQ = TQ, qQ = sQ, TQ = zQ, sQ = FQ, zQ = wQ.subtract(XQ.multiply(zQ)), FQ = qQ.subtract(XQ.multiply(FQ));
          if (!sQ.isUnit()) throw new Error(this.toString() + " and " + QQ.toString() + " are not co-prime");
          return -1 === TQ.compare(0) && (TQ = TQ.add(QQ)), this.isNegative() ? TQ.pg() : TQ
        }, gQ.prototype.modInv = PQ.prototype.modInv = FQ.prototype.modInv, FQ.prototype.next = function() {
          var QQ = this.value;
          return this.sign ? UQ(QQ, 1, this.sign) : new FQ(pQ(QQ, 1), this.sign)
        }, PQ.prototype.next = function() {
          var QQ = this.value;
          return QQ + 1 < wQ ? new PQ(QQ + 1) : new FQ(qQ, !1)
        }, gQ.prototype.next = function() {
          return new gQ(this.value + BigInt(1))
        }, FQ.prototype.prev = function() {
          var QQ = this.value;
          return this.sign ? new FQ(pQ(QQ, 1), !0) : UQ(QQ, 1, this.sign)
        }, PQ.prototype.prev = function() {
          var QQ = this.value;
          return QQ - 1 > -wQ ? new PQ(QQ - 1) : new FQ(qQ, !0)
        }, gQ.prototype.prev = function() {
          return new gQ(this.value - BigInt(1))
        };
        for (var EQ = [1]; 2 * EQ[EQ.length - 1] <= XQ;) EQ.push(2 * EQ[EQ.length - 1]);
        var CQ = EQ.length,
          uQ = EQ[CQ - 1];

        function LQ(QQ) {
          return Math.abs(QQ) <= XQ
        }

        function kQ(QQ, XQ, wQ) {
          XQ = KQ(XQ);
          for (var qQ = QQ.isNegative(), TQ = XQ.isNegative(), zQ = qQ ? QQ.not() : QQ, sQ = TQ ? XQ.not() : XQ, FQ = 0, PQ = 0, gQ = null, JQ = null, rQ = []; !zQ.isZero() || !sQ.isZero();) FQ = (gQ = iQ(zQ, uQ))[1].toJSNumber(), qQ && (FQ = uQ - 1 - FQ), PQ = (JQ = iQ(sQ, uQ))[1].toJSNumber(), TQ && (PQ = uQ - 1 - PQ), zQ = gQ[0], sQ = JQ[0], rQ.push(wQ(FQ, PQ));
          for (var IQ = 0 !== wQ(qQ ? 1 : 0, TQ ? 1 : 0) ? WQ(-1) : WQ(0), jQ = rQ.length - 1; jQ >= 0; jQ -= 1) IQ = IQ.multiply(uQ).add(WQ(rQ[jQ]));
          return IQ
        }
        FQ.prototype.shiftLeft = function(QQ) {
          var WQ = KQ(QQ).toJSNumber();
          if (!LQ(WQ)) throw new Error(String(WQ) + " is too large for shifting.");
          if (WQ < 0) return this.shiftRight(-WQ);
          var XQ = this;
          if (XQ.isZero()) return XQ;
          for (; WQ >= CQ;) XQ = XQ.multiply(uQ), WQ -= CQ - 1;
          return XQ.multiply(EQ[WQ])
        }, gQ.prototype.shiftLeft = PQ.prototype.shiftLeft = FQ.prototype.shiftLeft, FQ.prototype.shiftRight = function(QQ) {
          var WQ, XQ = KQ(QQ).toJSNumber();
          if (!LQ(XQ)) throw new Error(String(XQ) + " is too large for shifting.");
          if (XQ < 0) return this.shiftLeft(-XQ);
          for (var wQ = this; XQ >= CQ;) {
            if (wQ.isZero() || wQ.isNegative() && wQ.isUnit()) return wQ;
            wQ = (WQ = iQ(wQ, uQ))[1].isNegative() ? WQ[0].prev() : WQ[0], XQ -= CQ - 1
          }
          return (WQ = iQ(wQ, EQ[XQ]))[1].isNegative() ? WQ[0].prev() : WQ[0]
        }, gQ.prototype.shiftRight = PQ.prototype.shiftRight = FQ.prototype.shiftRight, FQ.prototype.not = function() {
          return this.pg().prev()
        }, gQ.prototype.not = PQ.prototype.not = FQ.prototype.not, FQ.prototype.and = function(QQ) {
          return kQ(this, QQ, (function(QQ, WQ) {
            return QQ & WQ
          }))
        }, gQ.prototype.and = PQ.prototype.and = FQ.prototype.and, FQ.prototype.or = function(QQ) {
          return kQ(this, QQ, (function(QQ, WQ) {
            return QQ | WQ
          }))
        }, gQ.prototype.or = PQ.prototype.or = FQ.prototype.or, FQ.prototype.xor = function(QQ) {
          return kQ(this, QQ, (function(QQ, WQ) {
            return QQ ^ WQ
          }))
        }, gQ.prototype.xor = PQ.prototype.xor = FQ.prototype.xor;
        var fQ = 1 << 30;

        function SQ(QQ) {
          var WQ = QQ.value,
            wQ = "number" === typeof WQ ? WQ | fQ : "bigint" === typeof WQ ? WQ | BigInt(fQ) : WQ[0] + WQ[1] * XQ | 1073758208;
          return wQ & -wQ
        }

        function tQ(QQ, XQ) {
          if (XQ.compareTo(QQ) <= 0) {
            var wQ = tQ(QQ, XQ.square(XQ)),
              qQ = wQ.p,
              TQ = wQ.e,
              zQ = qQ.multiply(XQ);
            return zQ.compareTo(QQ) <= 0 ? {
              p: zQ,
              e: 2 * TQ + 1
            } : {
              p: qQ,
              e: 2 * TQ
            }
          }
          return {
            p: WQ(1),
            e: 0
          }
        }

        function oQ(QQ, WQ) {
          return QQ = KQ(QQ), WQ = KQ(WQ), QQ.greater(WQ) ? QQ : WQ
        }

        function eQ(QQ, WQ) {
          return QQ = KQ(QQ), WQ = KQ(WQ), QQ.lesser(WQ) ? QQ : WQ
        }

        function nQ(QQ, WQ) {
          if (QQ = KQ(QQ).abs(), WQ = KQ(WQ).abs(), QQ.equals(WQ)) return QQ;
          if (QQ.isZero()) return WQ;
          if (WQ.isZero()) return QQ;
          for (var XQ, wQ, qQ = sQ[1]; QQ.isEven() && WQ.isEven();) XQ = eQ(SQ(QQ), SQ(WQ)), QQ = QQ.divide(XQ), WQ = WQ.divide(XQ), qQ = qQ.multiply(XQ);
          for (; QQ.isEven();) QQ = QQ.divide(SQ(QQ));
          do {
            for (; WQ.isEven();) WQ = WQ.divide(SQ(WQ));
            QQ.greater(WQ) && (wQ = WQ, WQ = QQ, QQ = wQ), WQ = WQ.subtract(QQ)
          } while (!WQ.isZero());
          return qQ.isUnit() ? QQ : QQ.multiply(qQ)
        }
        FQ.prototype.bitLength = function() {
          var QQ = this;
          return QQ.compareTo(WQ(0)) < 0 && (QQ = QQ.pg().subtract(WQ(1))), 0 === QQ.compareTo(WQ(0)) ? WQ(0) : WQ(tQ(QQ, WQ(2)).e).add(WQ(1))
        }, gQ.prototype.bitLength = PQ.prototype.bitLength = FQ.prototype.bitLength;
        var xQ = function(QQ, WQ, XQ, wQ) {
          XQ = XQ || TQ, QQ = String(QQ), wQ || (QQ = QQ.toLowerCase(), XQ = XQ.toLowerCase());
          var qQ, zQ = QQ.length,
            sQ = Math.abs(WQ),
            FQ = {};
          for (qQ = 0; qQ < XQ.length; qQ++) FQ[XQ[qQ]] = qQ;
          for (qQ = 0; qQ < zQ; qQ++) {
            if ("-" !== (JQ = QQ[qQ]) && (JQ in FQ && FQ[JQ] >= sQ)) {
              if ("1" === JQ && 1 === sQ) continue;
              throw new Error(JQ + " is not a valid digit in base " + WQ + ".")
            }
          }
          WQ = KQ(WQ);
          var PQ = [],
            gQ = "-" === QQ[0];
          for (qQ = gQ ? 1 : 0; qQ < QQ.length; qQ++) {
            var JQ;
            if ((JQ = QQ[qQ]) in FQ) PQ.push(KQ(FQ[JQ]));
            else {
              if ("<" !== JQ) throw new Error(JQ + " is not a valid character");
              var rQ = qQ;
              do {
                qQ++
              } while (">" !== QQ[qQ] && qQ < QQ.length);
              PQ.push(KQ(QQ.slice(rQ + 1, qQ)))
            }
          }
          return YQ(PQ, WQ, gQ)
        };

        function YQ(QQ, WQ, XQ) {
          var wQ, qQ = sQ[0],
            TQ = sQ[1];
          for (wQ = QQ.length - 1; wQ >= 0; wQ--) qQ = qQ.add(QQ[wQ].times(TQ)), TQ = TQ.times(WQ);
          return XQ ? qQ.pg() : qQ
        }

        function NQ(QQ, XQ) {
          if ((XQ = WQ(XQ)).isZero()) {
            if (QQ.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (XQ.equals(-1)) {
            if (QQ.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (QQ.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-QQ.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var wQ = Array.apply(null, Array(QQ.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return wQ.unshift([1]), {
              value: [].concat.apply([], wQ),
              isNegative: !1
            }
          }
          var qQ = !1;
          if (QQ.isNegative() && XQ.isPositive() && (qQ = !0, QQ = QQ.abs()), XQ.isUnit()) return QQ.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(QQ.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: qQ
          };
          for (var TQ, zQ = [], sQ = QQ; sQ.isNegative() || sQ.compareAbs(XQ) >= 0;) {
            TQ = sQ.divmod(XQ), sQ = TQ.quotient;
            var FQ = TQ.remainder;
            FQ.isNegative() && (FQ = XQ.minus(FQ).abs(), sQ = sQ.next()), zQ.push(FQ.toJSNumber())
          }
          return zQ.push(sQ.toJSNumber()), {
            value: zQ.reverse(),
            isNegative: qQ
          }
        }

        function ZQ(QQ, WQ, XQ) {
          var wQ = NQ(QQ, WQ);
          return (wQ.isNegative ? "-" : "") + wQ.value.map((function(QQ) {
            return function(QQ, WQ) {
              return QQ < (WQ = WQ || TQ).length ? WQ[QQ] : "<" + QQ + ">"
            }(QQ, XQ)
          })).join("")
        }

        function OQ(QQ) {
          if (JQ(+QQ)) {
            var WQ = +QQ;
            if (WQ === yQ(WQ)) return zQ ? new gQ(BigInt(WQ)) : new PQ(WQ);
            throw new Error("Invalid integer: " + QQ)
          }
          var XQ = "-" === QQ[0];
          XQ && (QQ = QQ.slice(1));
          var wQ = QQ.split(/e/i);
          if (wQ.length > 2) throw new Error("Invalid integer: " + wQ.join("e"));
          if (2 === wQ.length) {
            var qQ = wQ[1];
            if ("+" === qQ[0] && (qQ = qQ.slice(1)), (qQ = +qQ) !== yQ(qQ) || !JQ(qQ)) throw new Error("Invalid integer: " + qQ + " is not a valid exponent.");
            var TQ = wQ[0],
              sQ = TQ.indexOf(".");
            if (sQ >= 0 && (qQ -= TQ.length - sQ - 1, TQ = TQ.slice(0, sQ) + TQ.slice(sQ + 1)), qQ < 0) throw new Error("Cannot include negative exponent part for integers");
            QQ = TQ += new Array(qQ + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(QQ)) throw new Error("Invalid integer: " + QQ);
          if (zQ) return new gQ(BigInt(XQ ? "-" + QQ : QQ));
          for (var rQ = [], IQ = QQ.length, BQ = IQ - 7; IQ > 0;) rQ.push(+QQ.slice(BQ, IQ)), (BQ -= 7) < 0 && (BQ = 0), IQ -= 7;
          return jQ(rQ), new FQ(rQ, XQ)
        }

        function KQ(QQ) {
          return "number" === typeof QQ ? function(QQ) {
            if (zQ) return new gQ(BigInt(QQ));
            if (JQ(QQ)) {
              if (QQ !== yQ(QQ)) throw new Error(QQ + " is not an integer.");
              return new PQ(QQ)
            }
            return OQ(QQ.toString())
          }(QQ) : "string" === typeof QQ ? OQ(QQ) : "bigint" === typeof QQ ? new gQ(QQ) : QQ
        }
        FQ.prototype.toArray = function(QQ) {
          return NQ(this, QQ)
        }, PQ.prototype.toArray = function(QQ) {
          return NQ(this, QQ)
        }, gQ.prototype.toArray = function(QQ) {
          return NQ(this, QQ)
        }, FQ.prototype.toString = function(WQ, XQ) {
          if (WQ === QQ && (WQ = 10), 10 !== WQ) return ZQ(this, WQ, XQ);
          for (var wQ, qQ = this.value, TQ = qQ.length, zQ = String(qQ[--TQ]); --TQ >= 0;) wQ = String(qQ[TQ]), zQ += "0000000".slice(wQ.length) + wQ;
          return (this.sign ? "-" : "") + zQ
        }, PQ.prototype.toString = function(WQ, XQ) {
          return WQ === QQ && (WQ = 10), 10 != WQ ? ZQ(this, WQ, XQ) : String(this.value)
        }, gQ.prototype.toString = PQ.prototype.toString, gQ.prototype.toJSON = FQ.prototype.toJSON = PQ.prototype.toJSON = function() {
          return this.toString()
        }, FQ.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, FQ.prototype.toJSNumber = FQ.prototype.valueOf, PQ.prototype.valueOf = function() {
          return this.value
        }, PQ.prototype.toJSNumber = PQ.prototype.valueOf, gQ.prototype.valueOf = gQ.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var mQ = 0; mQ < 1e3; mQ++) sQ[mQ] = KQ(mQ), mQ > 0 && (sQ[-mQ] = KQ(-mQ));
        return sQ.one = sQ[1], sQ.zero = sQ[0], sQ.minusOne = sQ[-1], sQ.max = oQ, sQ.min = eQ, sQ.gcd = nQ, sQ.lcm = function(QQ, WQ) {
          return QQ = KQ(QQ).abs(), WQ = KQ(WQ).abs(), QQ.divide(nQ(QQ, WQ)).multiply(WQ)
        }, sQ.isInstance = function(QQ) {
          return QQ instanceof FQ || QQ instanceof PQ || QQ instanceof gQ
        }, sQ.randBetween = function(QQ, WQ, wQ) {
          QQ = KQ(QQ), WQ = KQ(WQ);
          var qQ = wQ || Math.random,
            TQ = eQ(QQ, WQ),
            zQ = oQ(QQ, WQ).subtract(TQ).add(1);
          if (zQ.isSmall) return TQ.add(Math.floor(qQ() * zQ));
          for (var FQ = NQ(zQ, XQ).value, PQ = [], gQ = !0, JQ = 0; JQ < FQ.length; JQ++) {
            var rQ = gQ ? FQ[JQ] : XQ,
              IQ = yQ(qQ() * rQ);
            PQ.push(IQ), IQ < rQ && (gQ = !1)
          }
          return TQ.add(sQ.gXQ(PQ, XQ, !1))
        }, sQ.gXQ = function(QQ, WQ, XQ) {
          return YQ(QQ.map(KQ), KQ(WQ || 10), XQ)
        }, sQ
      }();
      QQ.hasOwnProperty("exports") && (QQ.exports = WQ)
    }(DX);
    var pX = TQ(DX.exports);

    function GX(QQ, WQ, XQ) {
      let wQ = 0;
      for (let qQ = 0; qQ < XQ; qQ++) {
        const XQ = QQ[WQ + qQ];
        if (void 0 === XQ) break;
        wQ += XQ * 16 ** qQ
      }
      return wQ
    }

    function UX(QQ) {
      const WQ = [];
      for (let XQ = 0; XQ < QQ.length; XQ++) {
        let wQ = Number(QQ[XQ]);
        for (let QQ = 0; wQ || QQ < WQ.length; QQ++) wQ += 10 * (WQ[QQ] || 0), WQ[QQ] = wQ % 16, wQ = (wQ - WQ[QQ]) / 16
      }
      return WQ
    }
    class bX {
      static fromString(QQ) {
        return new bX(function(QQ) {
          const WQ = UX(QQ),
            XQ = Array(4);
          for (let wQ = 0; wQ < 4; wQ++) XQ[3 - wQ] = GX(WQ, 4 * wQ, 4);
          return XQ
        }(QQ), QQ)
      }
      static fromBit(QQ) {
        const WQ = Array(4),
          XQ = Math.floor(QQ / 16);
        for (let wQ = 0; wQ < 4; wQ++) WQ[3 - wQ] = wQ === XQ ? 1 << QQ - 16 * XQ : 0;
        return new bX(WQ)
      }
      constructor(QQ, WQ) {
        this.parts = QQ, this.str = WQ
      }
      and(QQ) {
        let {
          parts: WQ
        } = QQ;
        return new bX(this.parts.map(((QQ, XQ) => QQ & WQ[XQ])))
      }
      or(QQ) {
        let {
          parts: WQ
        } = QQ;
        return new bX(this.parts.map(((QQ, XQ) => QQ | WQ[XQ])))
      }
      xor(QQ) {
        let {
          parts: WQ
        } = QQ;
        return new bX(this.parts.map(((QQ, XQ) => QQ ^ WQ[XQ])))
      }
      not() {
        return new bX(this.parts.map((QQ => ~QQ)))
      }
      equals(QQ) {
        let {
          parts: WQ
        } = QQ;
        return this.parts.every(((QQ, XQ) => QQ === WQ[XQ]))
      }
      toString() {
        if (null != this.str) return this.str;
        const QQ = new Array(16);
        return this.parts.forEach(((WQ, XQ) => {
          const wQ = UX(WQ.toString());
          for (let qQ = 0; qQ < 4; qQ++) QQ[qQ + 4 * XQ] = wQ[3 - qQ] || 0
        })), this.str = pX.gXQ(QQ, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const vX = function() {
      try {
        return BigInt, !0
      } catch (QQ) {
        return !1
      }
    }();
    vX && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const dX = {},
      HX = vX ? function(QQ) {
        return BigInt(QQ)
      } : function(QQ) {
        return QQ instanceof bX ? QQ : ("number" === typeof QQ && (QQ = QQ.toString()), null != dX[QQ] || (dX[QQ] = bX.fromString(QQ)), dX[QQ])
      },
      aX = HX(0),
      lX = vX ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aX)
      } : function() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aX;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX).and(QQ)
      },
      hX = vX ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aX)
      } : function() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aX;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX).or(QQ)
      },
      iX = vX ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aX)
      } : function() {
        let QQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aX;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX).xor(QQ)
      },
      cX = vX ? function(QQ, WQ) {
        return QQ === WQ
      } : function(QQ, WQ) {
        return null == QQ || null == WQ ? QQ == WQ : QQ.equals(WQ)
      };
    var AX, RX, EX, CX, uX = {
      combine: function() {
        let QQ = arguments.length <= 0 ? void 0 : arguments[0];
        for (let WQ = 1; WQ < arguments.length; WQ++) QQ = hX(QQ, WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ]);
        return QQ
      },
      add: function(QQ, WQ) {
        return WQ === aX ? QQ : hX(QQ, WQ)
      },
      remove: function(QQ, WQ) {
        return WQ === aX ? QQ : iX(QQ, lX(QQ, WQ))
      },
      filter: lX,
      invert: vX ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aX).not()
      },
      has: function(QQ, WQ) {
        return cX(lX(QQ, WQ), WQ)
      },
      hasAny: function(QQ, WQ) {
        return !cX(lX(QQ, WQ), aX)
      },
      equals: cX,
      deserialize: HX,
      getFlag: vX ? function(QQ) {
        return BigInt(1) << BigInt(QQ)
      } : function(QQ) {
        return bX.fromBit(QQ)
      }
    };
    ! function(QQ) {
      QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITED = 4002] = "RATELIMITED", QQ[QQ.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", QQ[QQ.INVALID_VERSION = 4004] = "INVALID_VERSION", QQ[QQ.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(AX || (AX = {})),
    function(QQ) {
      QQ[QQ.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", QQ[QQ.INVALID_COMMAND = 4002] = "INVALID_COMMAND", QQ[QQ.INVALID_EVENT = 4004] = "INVALID_EVENT", QQ[QQ.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(RX || (RX = {})),
    function(QQ) {
      QQ.LANDSCAPE = "landscape", QQ.PORTRAIT = "portrait"
    }(EX || (EX = {})),
    function(QQ) {
      QQ.MOBILE = "mobile", QQ.DESKTOP = "desktop"
    }(CX || (CX = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: uX.getFlag(0),
      ADMINISTRATOR: uX.getFlag(3)
    });

    function LX(QQ) {
      return IX((WQ => {
        var XQ;
        const [wQ] = null !== (XQ = Object.entries(QQ).find((QQ => {
          let [, XQ] = QQ;
          return XQ === WQ
        }))) && void 0 !== XQ ? XQ : [];
        return null != WQ && void 0 === wQ ? QQ.UNHANDLED : WQ
      }), EW().or(CW()))
    }
    const kX = VX.object({
        image_url: VX.string()
      }),
      fX = VX.object({
        mediaUrl: VX.string().max(1024)
      }),
      SX = VX.object({
        access_token: VX.union([VX.string(), VX.null()]).optional()
      }),
      tX = VX.object({
        access_token: VX.string(),
        user: VX.object({
          username: VX.string(),
          discriminator: VX.string(),
          id: VX.string(),
          avatar: VX.union([VX.string(), VX.null()]).optional(),
          public_flags: VX.number(),
          global_name: VX.union([VX.string(), VX.null()]).optional()
        }),
        scopes: VX.array(function(QQ) {
          const WQ = cW().transform((WQ => {
            const XQ = QQ.safeParse(WQ);
            return XQ.success ? XQ.data : QQ._def.defaultValue()
          }));
          return WQ.overlayType = QQ, WQ
        }(VX.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(VX.literal(-1)).default(-1))),
        expires: VX.string(),
        application: VX.object({
          description: VX.string(),
          icon: VX.union([VX.string(), VX.null()]).optional(),
          id: VX.string(),
          rpc_origins: VX.array(VX.string()).optional(),
          name: VX.string()
        })
      }),
      oX = VX.object({
        participants: VX.array(VX.object({
          id: VX.string(),
          username: VX.string(),
          global_name: VX.union([VX.string(), VX.null()]).optional(),
          discriminator: VX.string(),
          avatar: VX.union([VX.string(), VX.null()]).optional(),
          flags: VX.number(),
          bot: VX.boolean(),
          avatar_decoration_data: VX.union([VX.object({
            asset: VX.string(),
            skuId: VX.string().optional()
          }), VX.null()]).optional(),
          premium_type: VX.union([VX.number(), VX.null()]).optional(),
          nickname: VX.string().optional()
        }))
      });
    var eX;
    ! function(QQ) {
      QQ.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", QQ.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", QQ.AUTHENTICATE = "AUTHENTICATE", QQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(eX || (eX = {}));
    const nX = VX.object({}).optional().nullable(),
      xX = VX.void(),
      YX = {
        [eX.INITIATE_IMAGE_UPLOAD]: {
          request: xX,
          response: kX
        },
        [eX.OPEN_SHARE_MOMENT_DIALOG]: {
          request: fX,
          response: nX
        },
        [eX.AUTHENTICATE]: {
          request: SX,
          response: tX
        },
        [eX.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: xX,
          response: oX
        }
      },
      NX = "DISPATCH";
    var ZX;
    ! function(QQ) {
      QQ.AUTHORIZE = "AUTHORIZE", QQ.AUTHENTICATE = "AUTHENTICATE", QQ.GET_GUILDS = "GET_GUILDS", QQ.GET_GUILD = "GET_GUILD", QQ.GET_CHANNEL = "GET_CHANNEL", QQ.GET_CHANNELS = "GET_CHANNELS", QQ.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", QQ.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", QQ.SUBSCRIBE = "SUBSCRIBE", QQ.UNSUBSCRIBE = "UNSUBSCRIBE", QQ.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", QQ.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", QQ.SET_ACTIVITY = "SET_ACTIVITY", QQ.GET_SKUS = "GET_SKUS", QQ.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", QQ.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", QQ.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", QQ.START_PURCHASE = "START_PURCHASE", QQ.SET_CONFIG = "SET_CONFIG", QQ.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", QQ.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", QQ.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", QQ.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", QQ.CAPTURE_LOG = "CAPTURE_LOG", QQ.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", QQ.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", QQ.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", QQ.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", QQ.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", QQ.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", QQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(ZX || (ZX = {}));
    const OX = ZW({
        cmd: EW(),
        data: nW(),
        evt: oW(),
        nonce: EW()
      }).passthrough(),
      KX = (LX(Object.assign(Object.assign({}, tX.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), ZW({
        id: EW(),
        username: EW(),
        discriminator: EW(),
        global_name: EW().optional().nullable(),
        avatar: EW().optional().nullable(),
        avatar_decoration_data: ZW({
          asset: EW(),
          sku_id: EW().optional()
        }).nullable(),
        bot: kW(),
        flags: CW().optional().nullable(),
        premium_type: CW().optional().nullable()
      })),
      mX = ZW({
        user: KX,
        nick: EW().optional().nullable(),
        roles: NW(EW()),
        joined_at: EW(),
        deaf: kW(),
        mute: kW()
      }),
      MX = ZW({
        id: EW(),
        name: EW().optional().nullable(),
        roles: NW(EW()).optional().nullable(),
        user: KX.optional().nullable(),
        require_colons: kW().optional().nullable(),
        managed: kW().optional().nullable(),
        animated: kW().optional().nullable(),
        available: kW().optional().nullable()
      }),
      Qw = ZW({
        mute: kW(),
        deaf: kW(),
        self_mute: kW(),
        self_deaf: kW(),
        suppress: kW()
      }),
      Ww = ZW({
        mute: kW(),
        nick: EW(),
        user: KX,
        voice_state: Qw,
        volume: CW()
      }),
      Xw = LX({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      ww = ZW({
        name: EW(),
        type: CW(),
        url: EW().optional().nullable(),
        created_at: CW().optional().nullable(),
        timestamps: ZW({
          start: CW(),
          end: CW()
        }).partial().optional().nullable(),
        application_id: EW().optional().nullable(),
        details: EW().optional().nullable(),
        state: EW().optional().nullable(),
        emoji: MX.optional().nullable(),
        party: ZW({
          id: EW().optional().nullable(),
          size: NW(CW()).optional().nullable()
        }).optional().nullable(),
        assets: ZW({
          large_image: EW().nullable(),
          large_text: EW().nullable(),
          small_image: EW().nullable(),
          small_text: EW().nullable()
        }).partial().optional().nullable(),
        secrets: ZW({
          join: EW(),
          match: EW()
        }).partial().optional().nullable(),
        instance: kW().optional().nullable(),
        flags: CW().optional().nullable()
      }),
      qw = ZW({
        id: EW(),
        type: LX({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: EW(),
        deny: EW()
      }),
      Tw = {
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
      zw = ZW({
        id: EW(),
        type: LX(Tw),
        guild_id: EW().optional().nullable(),
        position: CW().optional().nullable(),
        permission_overwrites: NW(qw).optional().nullable(),
        name: EW().optional().nullable(),
        topic: EW().optional().nullable(),
        nsfw: kW().optional().nullable(),
        last_message_id: EW().optional().nullable(),
        bitrate: CW().optional().nullable(),
        user_limit: CW().optional().nullable(),
        rate_limit_per_user: CW().optional().nullable(),
        recipients: NW(KX).optional().nullable(),
        icon: EW().optional().nullable(),
        owner_id: EW().optional().nullable(),
        application_id: EW().optional().nullable(),
        parent_id: EW().optional().nullable(),
        last_pin_timestamp: EW().optional().nullable()
      }),
      sw = ZW({
        user: KX,
        guild_id: EW(),
        status: Xw,
        activities: NW(ww),
        client_status: ZW({
          desktop: Xw,
          mobile: Xw,
          web: Xw
        }).partial()
      }),
      Fw = ZW({
        id: EW(),
        name: EW(),
        color: CW(),
        hoist: kW(),
        position: CW(),
        permissions: EW(),
        managed: kW(),
        mentionable: kW()
      }),
      Pw = (ZW({
        id: EW(),
        name: EW(),
        owner_id: EW(),
        icon: EW().nullable(),
        icon_hash: EW().optional().nullable(),
        splash: EW().nullable(),
        discovery_splash: EW().nullable(),
        owner: kW().optional().nullable(),
        permissions: EW().optional().nullable(),
        region: EW(),
        afk_channel_id: EW().nullable(),
        afk_timeout: CW(),
        widget_enabled: kW().optional().nullable(),
        widget_channel_id: EW().optional().nullable(),
        verification_level: CW(),
        default_message_notifications: CW(),
        explicit_content_filter: CW(),
        roles: NW(Fw),
        emojis: NW(MX),
        features: NW(EW()),
        mfa_level: CW(),
        application_id: EW().nullable(),
        system_channel_id: EW().nullable(),
        system_channel_flags: CW(),
        rules_channel_id: EW().nullable(),
        joined_at: EW().optional().nullable(),
        large: kW().optional().nullable(),
        unavailable: kW().optional().nullable(),
        member_count: CW().optional().nullable(),
        voice_states: NW(Qw).optional().nullable(),
        members: NW(mX).optional().nullable(),
        channels: NW(zw).optional().nullable(),
        presences: NW(sw).optional().nullable(),
        max_presences: CW().optional().nullable(),
        max_members: CW().optional().nullable(),
        vanity_url_code: EW().nullable(),
        description: EW().nullable(),
        banner: EW().nullable(),
        premium_tier: CW(),
        premium_subscription_count: CW().optional().nullable(),
        preferred_locale: EW(),
        public_updates_channel_id: EW().nullable(),
        max_video_channel_users: CW().optional().nullable(),
        approximate_member_count: CW().optional().nullable(),
        approximate_presence_count: CW().optional().nullable()
      }), ZW({
        id: EW(),
        guild_id: EW(),
        type: CW(),
        name: EW()
      })),
      gw = ZW({
        id: EW(),
        filename: EW(),
        size: CW(),
        url: EW(),
        proxy_url: EW(),
        height: CW().optional().nullable(),
        width: CW().optional().nullable()
      }),
      Jw = ZW({
        text: EW(),
        icon_url: EW().optional().nullable(),
        proxy_icon_url: EW().optional().nullable()
      }),
      rw = ZW({
        url: EW().optional().nullable(),
        proxy_url: EW().optional().nullable(),
        height: CW().optional().nullable(),
        width: CW().optional().nullable()
      }),
      Iw = rw.omit({
        proxy_url: !0
      }),
      jw = ZW({
        name: EW().optional().nullable(),
        url: EW().optional().nullable()
      }),
      Bw = ZW({
        name: EW().optional().nullable(),
        url: EW().optional().nullable(),
        icon_url: EW().optional().nullable(),
        proxy_icon_url: EW().optional().nullable()
      }),
      yw = ZW({
        name: EW(),
        value: EW(),
        inline: kW()
      }),
      Vw = ZW({
        title: EW().optional().nullable(),
        type: EW().optional().nullable(),
        description: EW().optional().nullable(),
        url: EW().optional().nullable(),
        timestamp: EW().optional().nullable(),
        color: CW().optional().nullable(),
        footer: Jw.optional().nullable(),
        image: rw.optional().nullable(),
        thumbnail: rw.optional().nullable(),
        video: Iw.optional().nullable(),
        provider: jw.optional().nullable(),
        author: Bw.optional().nullable(),
        fields: NW(yw).optional().nullable()
      }),
      Dw = ZW({
        count: CW(),
        me: kW(),
        emoji: MX
      }),
      pw = ZW({
        type: CW(),
        party_id: EW().optional().nullable()
      }),
      Gw = ZW({
        id: EW(),
        cover_image: EW().optional().nullable(),
        description: EW(),
        icon: EW().optional().nullable(),
        name: EW()
      }),
      Uw = ZW({
        message_id: EW().optional().nullable(),
        channel_id: EW().optional().nullable(),
        guild_id: EW().optional().nullable()
      }),
      bw = ZW({
        id: EW(),
        channel_id: EW(),
        guild_id: EW().optional().nullable(),
        author: KX.optional().nullable(),
        member: mX.optional().nullable(),
        content: EW(),
        timestamp: EW(),
        edited_timestamp: EW().optional().nullable(),
        tts: kW(),
        mention_everyone: kW(),
        mentions: NW(KX),
        mention_roles: NW(EW()),
        mention_channels: NW(Pw),
        attachments: NW(gw),
        embeds: NW(Vw),
        reactions: NW(Dw).optional().nullable(),
        nonce: KW([EW(), CW()]).optional().nullable(),
        pinned: kW(),
        webhook_id: EW().optional().nullable(),
        type: CW(),
        activity: pw.optional().nullable(),
        application: Gw.optional().nullable(),
        message_reference: Uw.optional().nullable(),
        flags: CW().optional().nullable(),
        stickers: NW(nW()).optional().nullable(),
        referenced_message: nW().optional().nullable()
      }),
      vw = ZW({
        id: EW(),
        name: EW()
      }),
      dw = ZW({
        type: LX({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: CW(),
        name: EW()
      }),
      Hw = ZW({
        type: LX({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: kW(),
        threshold: CW(),
        shortcut: NW(dw),
        delay: CW()
      }),
      aw = ZW({
        device_id: EW(),
        volume: CW(),
        available_devices: NW(vw)
      }),
      lw = (ZW({
        type: LX({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: EW(),
        vendor: ZW({
          name: EW(),
          url: EW()
        }),
        model: ZW({
          name: EW(),
          url: EW()
        }),
        related: NW(EW()),
        echo_cancellation: kW().optional().nullable(),
        noise_suppression: kW().optional().nullable(),
        automatic_gain_control: kW().optional().nullable(),
        hardware_mute: kW().optional().nullable()
      }), ZW({
        id: EW(),
        name: EW(),
        type: LX({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: ZW({
          amount: CW(),
          currency: EW()
        }),
        application_id: EW(),
        flags: CW(),
        release_date: EW().nullable()
      })),
      hw = ZW({
        id: EW(),
        sku_id: EW(),
        application_id: EW(),
        user_id: EW(),
        gift_code_flags: CW(),
        type: LX({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: EW().optional().nullable(),
        branches: NW(EW()).optional().nullable(),
        starts_at: EW().optional().nullable(),
        ends_at: EW().optional().nullable(),
        parent_id: EW().optional().nullable(),
        consumed: kW().optional().nullable(),
        deleted: kW().optional().nullable(),
        gift_code_batch_id: EW().optional().nullable()
      }),
      iw = (LX({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), LX({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Aw = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      Rw = (LX(Aw), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Ew = (LX(Rw), "ERROR");
    var Cw;
    ! function(QQ) {
      QQ.READY = "READY", QQ.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", QQ.SPEAKING_START = "SPEAKING_START", QQ.SPEAKING_STOP = "SPEAKING_STOP", QQ.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", QQ.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", QQ.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", QQ.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", QQ.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", QQ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Cw || (Cw = {}));
    const uw = OX.extend({
        evt: FX(Cw),
        nonce: EW().nullable(),
        cmd: zX(NX),
        data: ZW({}).passthrough()
      }),
      Lw = OX.extend({
        evt: zX(Ew),
        data: ZW({
          code: CW(),
          message: EW().optional()
        }).passthrough(),
        cmd: FX(ZX),
        nonce: EW().nullable()
      }),
      kw = uw.extend({
        evt: EW()
      }),
      fw = KW([uw, kw, Lw]);
    const Sw = {
      [Cw.READY]: {
        payload: uw.extend({
          evt: zX(Cw.READY),
          data: ZW({
            v: CW(),
            config: ZW({
              cdn_host: EW().optional(),
              api_endpoint: EW(),
              environment: EW()
            }),
            user: ZW({
              id: EW(),
              username: EW(),
              discriminator: EW(),
              avatar: EW().optional()
            }).optional()
          })
        })
      },
      [Cw.VOICE_STATE_UPDATE]: {
        payload: uw.extend({
          evt: zX(Cw.VOICE_STATE_UPDATE),
          data: Ww
        }),
        subscribeArgs: ZW({
          channel_id: EW()
        })
      },
      [Cw.SPEAKING_START]: {
        payload: uw.extend({
          evt: zX(Cw.SPEAKING_START),
          data: ZW({
            lobby_id: EW().optional(),
            channel_id: EW().optional(),
            user_id: EW()
          })
        }),
        subscribeArgs: ZW({
          lobby_id: EW().nullable().optional(),
          channel_id: EW().nullable().optional()
        })
      },
      [Cw.SPEAKING_STOP]: {
        payload: uw.extend({
          evt: zX(Cw.SPEAKING_STOP),
          data: ZW({
            lobby_id: EW().optional(),
            channel_id: EW().optional(),
            user_id: EW()
          })
        }),
        subscribeArgs: ZW({
          lobby_id: EW().nullable().optional(),
          channel_id: EW().nullable().optional()
        })
      },
      [Cw.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: uw.extend({
          evt: zX(Cw.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: ZW({
            layout_mode: LX(Rw)
          })
        })
      },
      [Cw.ORIENTATION_UPDATE]: {
        payload: uw.extend({
          evt: zX(Cw.ORIENTATION_UPDATE),
          data: ZW({
            screen_orientation: LX(Aw),
            orientation: FX(EX)
          })
        })
      },
      [Cw.CURRENT_USER_UPDATE]: {
        payload: uw.extend({
          evt: zX(Cw.CURRENT_USER_UPDATE),
          data: KX
        })
      },
      [Cw.ENTITLEMENT_CREATE]: {
        payload: uw.extend({
          evt: zX(Cw.ENTITLEMENT_CREATE),
          data: ZW({
            entitlement: hw
          })
        })
      },
      [Cw.THERMAL_STATE_UPDATE]: {
        payload: uw.extend({
          evt: zX(Cw.THERMAL_STATE_UPDATE),
          data: ZW({
            thermal_state: iw
          })
        })
      },
      [Cw.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: uw.extend({
          evt: zX(Cw.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: ZW({
            participants: oX.shape.participants
          })
        })
      }
    };
    const tw = ZW({}).nullable(),
      ow = ZW({
        code: EW()
      }),
      ew = ZW({
        guilds: NW(ZW({
          id: EW(),
          name: EW()
        }))
      }),
      nw = ZW({
        id: EW(),
        name: EW(),
        icon_url: EW().optional(),
        members: NW(mX)
      }),
      xw = ZW({
        id: EW(),
        type: LX(Tw),
        guild_id: EW().optional().nullable(),
        name: EW().optional().nullable(),
        topic: EW().optional().nullable(),
        bitrate: CW().optional().nullable(),
        user_limit: CW().optional().nullable(),
        position: CW().optional().nullable(),
        voice_states: NW(Ww),
        messages: NW(bw)
      }),
      Yw = ZW({
        channels: NW(zw)
      }),
      Nw = (xw.nullable(), xw.nullable()),
      Zw = xw.nullable(),
      Ow = (ZW({
        input: aw,
        output: aw,
        mode: Hw,
        automatic_gain_control: kW(),
        echo_cancellation: kW(),
        noise_suppression: kW(),
        qos: kW(),
        silence_warning: kW(),
        deaf: kW(),
        mute: kW()
      }), ZW({
        evt: EW()
      })),
      Kw = ZW({
        shortcut: dw
      }),
      mw = ww,
      Mw = ZW({
        skus: NW(lw)
      }),
      Qq = ZW({
        entitlements: NW(hw)
      }),
      Wq = NW(hw).nullable(),
      Xq = ZW({
        use_interactive_pip: kW()
      }),
      wq = ZW({
        locale: EW()
      }),
      qq = ZW({
        enabled: kW()
      }),
      Tq = ZW({
        permissions: LW().or(EW())
      }),
      zq = ZW({
        iosKeyboardResizesView: JX(kW())
      }),
      sq = OX.extend({
        cmd: FX(ZX),
        evt: oW()
      });

    function Fq(QQ) {
      let {
        cmd: WQ,
        data: XQ
      } = QQ;
      switch (WQ) {
        case ZX.AUTHORIZE:
          return ow.parse(XQ);
        case ZX.CAPTURE_SHORTCUT:
          return Kw.parse(XQ);
        case ZX.ENCOURAGE_HW_ACCELERATION:
          return qq.parse(XQ);
        case ZX.GET_CHANNEL:
          return xw.parse(XQ);
        case ZX.GET_CHANNELS:
          return Yw.parse(XQ);
        case ZX.GET_CHANNEL_PERMISSIONS:
          return Tq.parse(XQ);
        case ZX.GET_GUILD:
          return nw.parse(XQ);
        case ZX.GET_GUILDS:
          return ew.parse(XQ);
        case ZX.GET_PLATFORM_BEHAVIORS:
          return zq.parse(XQ);
        case ZX.GET_CHANNEL:
          return xw.parse(XQ);
        case ZX.SELECT_TEXT_CHANNEL:
          return Zw.parse(XQ);
        case ZX.SELECT_VOICE_CHANNEL:
          return Nw.parse(XQ);
        case ZX.SET_ACTIVITY:
          return mw.parse(XQ);
        case ZX.GET_SKUS_EMBEDDED:
          return Mw.parse(XQ);
        case ZX.GET_ENTITLEMENTS_EMBEDDED:
          return Qq.parse(XQ);
        case ZX.SET_CONFIG:
          return Xq.parse(XQ);
        case ZX.START_PURCHASE:
          return Wq.parse(XQ);
        case ZX.SUBSCRIBE:
        case ZX.UNSUBSCRIBE:
          return Ow.parse(XQ);
        case ZX.USER_SETTINGS_GET_LOCALE:
          return wq.parse(XQ);
        case ZX.OPEN_EXTERNAL_LINK:
        case ZX.SET_ORIENTATION_LOCK_STATE:
        case ZX.SET_CERTIFIED_DEVICES:
        case ZX.SEND_ANALYTICS_EVENT:
        case ZX.OPEN_INVITE_DIALOG:
        case ZX.CAPTURE_LOG:
        case ZX.GET_SKUS:
        case ZX.GET_ENTITLEMENTS:
          return tw.parse(XQ);
        case ZX.AUTHENTICATE:
        case ZX.INITIATE_IMAGE_UPLOAD:
        case ZX.OPEN_SHARE_MOMENT_DIALOG:
        case ZX.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: QQ
          } = YX[WQ];
          return QQ.parse(XQ);
        default:
          ! function(QQ, WQ) {
            throw WQ
          }(0, new Error(`Unrecognized command ${WQ}`))
      }
    }
    ZW({
      frame_id: EW(),
      platform: FX(CX).optional().nullable()
    }), ZW({
      v: zX(1),
      encoding: zX("json").optional(),
      client_id: EW(),
      frame_id: EW()
    });
    const Pq = ZW({
        code: CW(),
        message: EW().optional()
      }),
      gq = ZW({
        evt: EW().nullable(),
        nonce: EW().nullable(),
        data: nW().nullable(),
        cmd: EW()
      }).passthrough();

    function Jq(QQ) {
      const WQ = gq.parse(QQ);
      return null != WQ.evt ? WQ.evt === Ew ? Lw.parse(WQ) : function(QQ) {
        const WQ = QQ.evt;
        if (!(WQ in Cw)) throw new Error(`Unrecognized event type ${QQ.evt}`);
        return Sw[WQ].payload.parse(QQ)
      }(fw.parse(WQ)) : function(QQ) {
        return Object.assign(Object.assign({}, QQ), {
          data: Fq(QQ)
        })
      }(sq.passthrough().parse(WQ))
    }

    function rq(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const qQ = OX.extend({
        cmd: zX(WQ),
        data: XQ
      });
      return async XQ => {
        const TQ = await QQ({
          cmd: WQ,
          args: XQ,
          transfer: wQ(XQ)
        });
        return qQ.parse(TQ).data
      }
    }

    function Iq(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const XQ = YX[QQ].response,
        wQ = OX.extend({
          cmd: zX(QQ),
          data: XQ
        });
      return XQ => async qQ => {
        const TQ = await XQ({
          cmd: QQ,
          args: qQ,
          transfer: WQ(qQ)
        });
        return wQ.parse(TQ).data
      }
    }
    const jq = Iq(eX.AUTHENTICATE),
      Bq = QQ => rq(QQ, ZX.AUTHORIZE, ow),
      yq = QQ => rq(QQ, ZX.CAPTURE_LOG, tw),
      Vq = QQ => rq(QQ, ZX.ENCOURAGE_HW_ACCELERATION, qq),
      Dq = QQ => rq(QQ, ZX.GET_ENTITLEMENTS_EMBEDDED, Qq),
      pq = QQ => rq(QQ, ZX.GET_SKUS_EMBEDDED, Mw),
      Gq = QQ => rq(QQ, ZX.GET_CHANNEL_PERMISSIONS, Tq),
      Uq = QQ => rq(QQ, ZX.GET_PLATFORM_BEHAVIORS, zq),
      bq = QQ => rq(QQ, ZX.OPEN_EXTERNAL_LINK, tw),
      vq = QQ => rq(QQ, ZX.OPEN_INVITE_DIALOG, tw),
      dq = Iq(eX.OPEN_SHARE_MOMENT_DIALOG);
    ww.tr({
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
    const Hq = QQ => rq(QQ, ZX.SET_ACTIVITY, mw),
      aq = QQ => rq(QQ, ZX.SET_CONFIG, Xq);
    const lq = QQ => ({
        lock_state: QQ.lock_state,
        picture_in_picture_lock_state: QQ.picture_in_picture_lock_state
      }),
      hq = QQ => function(QQ) {
        let {
          sendCommand: WQ,
          cmd: XQ,
          response: wQ,
          fallbackTransform: qQ,
          transferTransform: TQ = () => {}
        } = QQ;
        const zQ = OX.extend({
          cmd: zX(XQ),
          data: wQ
        });
        return async QQ => {
          try {
            const wQ = await WQ({
              cmd: XQ,
              args: QQ,
              transfer: TQ(QQ)
            });
            return zQ.parse(wQ).data
          } catch (wQ) {
            if (wQ.code === RX.INVALID_PAYLOAD) {
              const wQ = qQ(QQ),
                sQ = await WQ({
                  cmd: XQ,
                  args: wQ,
                  transfer: TQ(wQ)
                });
              return zQ.parse(sQ).data
            }
            throw wQ
          }
        }
      }({
        sendCommand: QQ,
        cmd: ZX.SET_ORIENTATION_LOCK_STATE,
        response: tw,
        fallbackTransform: lq
      }),
      iq = QQ => rq(QQ, ZX.START_PURCHASE, Wq),
      cq = QQ => rq(QQ, ZX.USER_SETTINGS_GET_LOCALE, wq),
      Aq = Iq(eX.INITIATE_IMAGE_UPLOAD),
      Rq = QQ => rq(QQ, ZX.GET_CHANNEL, xw),
      Eq = Iq(eX.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Cq = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function uq(QQ) {
      return "string" === typeof QQ && Cq.test(QQ)
    }
    for (var Lq = [], kq = 0; kq < 256; ++kq) Lq.push((kq + 256).toString(16).substr(1));

    function fq(QQ) {
      var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = (Lq[QQ[WQ + 0]] + Lq[QQ[WQ + 1]] + Lq[QQ[WQ + 2]] + Lq[QQ[WQ + 3]] + "-" + Lq[QQ[WQ + 4]] + Lq[QQ[WQ + 5]] + "-" + Lq[QQ[WQ + 6]] + Lq[QQ[WQ + 7]] + "-" + Lq[QQ[WQ + 8]] + Lq[QQ[WQ + 9]] + "-" + Lq[QQ[WQ + 10]] + Lq[QQ[WQ + 11]] + Lq[QQ[WQ + 12]] + Lq[QQ[WQ + 13]] + Lq[QQ[WQ + 14]] + Lq[QQ[WQ + 15]]).toLowerCase();
      if (!uq(XQ)) throw TypeError("Stringified UUID is invalid");
      return XQ
    }
    var Sq;

    function tq(QQ, WQ, XQ) {
      function wQ(QQ, wQ, qQ, TQ) {
        if ("string" === typeof QQ && (QQ = function(QQ) {
            QQ = unescape(encodeURIComponent(QQ));
            for (var WQ = [], XQ = 0; XQ < QQ.length; ++XQ) WQ.push(QQ.charCodeAt(XQ));
            return WQ
          }(QQ)), "string" === typeof wQ && (wQ = function(QQ) {
            if (!uq(QQ)) throw TypeError("Invalid UUID");
            var WQ, XQ = new Uint8Array(16);
            return XQ[0] = (WQ = parseInt(QQ.slice(0, 8), 16)) >>> 24, XQ[1] = WQ >>> 16 & 255, XQ[2] = WQ >>> 8 & 255, XQ[3] = 255 & WQ, XQ[4] = (WQ = parseInt(QQ.slice(9, 13), 16)) >>> 8, XQ[5] = 255 & WQ, XQ[6] = (WQ = parseInt(QQ.slice(14, 18), 16)) >>> 8, XQ[7] = 255 & WQ, XQ[8] = (WQ = parseInt(QQ.slice(19, 23), 16)) >>> 8, XQ[9] = 255 & WQ, XQ[10] = (WQ = parseInt(QQ.slice(24, 36), 16)) / 1099511627776 & 255, XQ[11] = WQ / 4294967296 & 255, XQ[12] = WQ >>> 24 & 255, XQ[13] = WQ >>> 16 & 255, XQ[14] = WQ >>> 8 & 255, XQ[15] = 255 & WQ, XQ
          }(wQ)), 16 !== wQ.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var zQ = new Uint8Array(16 + QQ.length);
        if (zQ.set(wQ), zQ.set(QQ, wQ.length), (zQ = XQ(zQ))[6] = 15 & zQ[6] | WQ, zQ[8] = 63 & zQ[8] | 128, qQ) {
          TQ = TQ || 0;
          for (var sQ = 0; sQ < 16; ++sQ) qQ[TQ + sQ] = zQ[sQ];
          return qQ
        }
        return fq(zQ)
      }
      try {
        wQ.name = QQ
      } catch (qQ) {}
      return wQ.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", wQ.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", wQ
    }

    function oq(QQ) {
      return 14 + (QQ + 64 >>> 9 << 4) + 1
    }

    function eq(QQ, WQ) {
      var XQ = (65535 & QQ) + (65535 & WQ);
      return (QQ >> 16) + (WQ >> 16) + (XQ >> 16) << 16 | 65535 & XQ
    }

    function nq(QQ, WQ, XQ, wQ, qQ, TQ) {
      return eq((zQ = eq(eq(WQ, QQ), eq(wQ, TQ))) << (sQ = qQ) | zQ >>> 32 - sQ, XQ);
      var zQ, sQ
    }

    function xq(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      return nq(WQ & XQ | ~WQ & wQ, QQ, WQ, qQ, TQ, zQ)
    }

    function Yq(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      return nq(WQ & wQ | XQ & ~wQ, QQ, WQ, qQ, TQ, zQ)
    }

    function Nq(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      return nq(WQ ^ XQ ^ wQ, QQ, WQ, qQ, TQ, zQ)
    }

    function Zq(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      return nq(XQ ^ (WQ | ~wQ), QQ, WQ, qQ, TQ, zQ)
    }
    tq("v3", 48, (function(QQ) {
      if ("string" === typeof QQ) {
        var WQ = unescape(encodeURIComponent(QQ));
        QQ = new Uint8Array(WQ.length);
        for (var XQ = 0; XQ < WQ.length; ++XQ) QQ[XQ] = WQ.charCodeAt(XQ)
      }
      return function(QQ) {
        for (var WQ = [], XQ = 32 * QQ.length, wQ = "0123456789abcdef", qQ = 0; qQ < XQ; qQ += 8) {
          var TQ = QQ[qQ >> 5] >>> qQ % 32 & 255,
            zQ = parseInt(wQ.charAt(TQ >>> 4 & 15) + wQ.charAt(15 & TQ), 16);
          WQ.push(zQ)
        }
        return WQ
      }(function(QQ, WQ) {
        QQ[WQ >> 5] |= 128 << WQ % 32, QQ[oq(WQ) - 1] = WQ;
        for (var XQ = 1732584193, wQ = -271733879, qQ = -1732584194, TQ = 271733878, zQ = 0; zQ < QQ.length; zQ += 16) {
          var sQ = XQ,
            FQ = wQ,
            PQ = qQ,
            gQ = TQ;
          XQ = xq(XQ, wQ, qQ, TQ, QQ[zQ], 7, -680876936), TQ = xq(TQ, XQ, wQ, qQ, QQ[zQ + 1], 12, -389564586), qQ = xq(qQ, TQ, XQ, wQ, QQ[zQ + 2], 17, 606105819), wQ = xq(wQ, qQ, TQ, XQ, QQ[zQ + 3], 22, -1044525330), XQ = xq(XQ, wQ, qQ, TQ, QQ[zQ + 4], 7, -176418897), TQ = xq(TQ, XQ, wQ, qQ, QQ[zQ + 5], 12, 1200080426), qQ = xq(qQ, TQ, XQ, wQ, QQ[zQ + 6], 17, -1473231341), wQ = xq(wQ, qQ, TQ, XQ, QQ[zQ + 7], 22, -45705983), XQ = xq(XQ, wQ, qQ, TQ, QQ[zQ + 8], 7, 1770035416), TQ = xq(TQ, XQ, wQ, qQ, QQ[zQ + 9], 12, -1958414417), qQ = xq(qQ, TQ, XQ, wQ, QQ[zQ + 10], 17, -42063), wQ = xq(wQ, qQ, TQ, XQ, QQ[zQ + 11], 22, -1990404162), XQ = xq(XQ, wQ, qQ, TQ, QQ[zQ + 12], 7, 1804603682), TQ = xq(TQ, XQ, wQ, qQ, QQ[zQ + 13], 12, -40341101), qQ = xq(qQ, TQ, XQ, wQ, QQ[zQ + 14], 17, -1502002290), XQ = Yq(XQ, wQ = xq(wQ, qQ, TQ, XQ, QQ[zQ + 15], 22, 1236535329), qQ, TQ, QQ[zQ + 1], 5, -165796510), TQ = Yq(TQ, XQ, wQ, qQ, QQ[zQ + 6], 9, -1069501632), qQ = Yq(qQ, TQ, XQ, wQ, QQ[zQ + 11], 14, 643717713), wQ = Yq(wQ, qQ, TQ, XQ, QQ[zQ], 20, -373897302), XQ = Yq(XQ, wQ, qQ, TQ, QQ[zQ + 5], 5, -701558691), TQ = Yq(TQ, XQ, wQ, qQ, QQ[zQ + 10], 9, 38016083), qQ = Yq(qQ, TQ, XQ, wQ, QQ[zQ + 15], 14, -660478335), wQ = Yq(wQ, qQ, TQ, XQ, QQ[zQ + 4], 20, -405537848), XQ = Yq(XQ, wQ, qQ, TQ, QQ[zQ + 9], 5, 568446438), TQ = Yq(TQ, XQ, wQ, qQ, QQ[zQ + 14], 9, -1019803690), qQ = Yq(qQ, TQ, XQ, wQ, QQ[zQ + 3], 14, -187363961), wQ = Yq(wQ, qQ, TQ, XQ, QQ[zQ + 8], 20, 1163531501), XQ = Yq(XQ, wQ, qQ, TQ, QQ[zQ + 13], 5, -1444681467), TQ = Yq(TQ, XQ, wQ, qQ, QQ[zQ + 2], 9, -51403784), qQ = Yq(qQ, TQ, XQ, wQ, QQ[zQ + 7], 14, 1735328473), XQ = Nq(XQ, wQ = Yq(wQ, qQ, TQ, XQ, QQ[zQ + 12], 20, -1926607734), qQ, TQ, QQ[zQ + 5], 4, -378558), TQ = Nq(TQ, XQ, wQ, qQ, QQ[zQ + 8], 11, -2022574463), qQ = Nq(qQ, TQ, XQ, wQ, QQ[zQ + 11], 16, 1839030562), wQ = Nq(wQ, qQ, TQ, XQ, QQ[zQ + 14], 23, -35309556), XQ = Nq(XQ, wQ, qQ, TQ, QQ[zQ + 1], 4, -1530992060), TQ = Nq(TQ, XQ, wQ, qQ, QQ[zQ + 4], 11, 1272893353), qQ = Nq(qQ, TQ, XQ, wQ, QQ[zQ + 7], 16, -155497632), wQ = Nq(wQ, qQ, TQ, XQ, QQ[zQ + 10], 23, -1094730640), XQ = Nq(XQ, wQ, qQ, TQ, QQ[zQ + 13], 4, 681279174), TQ = Nq(TQ, XQ, wQ, qQ, QQ[zQ], 11, -358537222), qQ = Nq(qQ, TQ, XQ, wQ, QQ[zQ + 3], 16, -722521979), wQ = Nq(wQ, qQ, TQ, XQ, QQ[zQ + 6], 23, 76029189), XQ = Nq(XQ, wQ, qQ, TQ, QQ[zQ + 9], 4, -640364487), TQ = Nq(TQ, XQ, wQ, qQ, QQ[zQ + 12], 11, -421815835), qQ = Nq(qQ, TQ, XQ, wQ, QQ[zQ + 15], 16, 530742520), XQ = Zq(XQ, wQ = Nq(wQ, qQ, TQ, XQ, QQ[zQ + 2], 23, -995338651), qQ, TQ, QQ[zQ], 6, -198630844), TQ = Zq(TQ, XQ, wQ, qQ, QQ[zQ + 7], 10, 1126891415), qQ = Zq(qQ, TQ, XQ, wQ, QQ[zQ + 14], 15, -1416354905), wQ = Zq(wQ, qQ, TQ, XQ, QQ[zQ + 5], 21, -57434055), XQ = Zq(XQ, wQ, qQ, TQ, QQ[zQ + 12], 6, 1700485571), TQ = Zq(TQ, XQ, wQ, qQ, QQ[zQ + 3], 10, -1894986606), qQ = Zq(qQ, TQ, XQ, wQ, QQ[zQ + 10], 15, -1051523), wQ = Zq(wQ, qQ, TQ, XQ, QQ[zQ + 1], 21, -2054922799), XQ = Zq(XQ, wQ, qQ, TQ, QQ[zQ + 8], 6, 1873313359), TQ = Zq(TQ, XQ, wQ, qQ, QQ[zQ + 15], 10, -30611744), qQ = Zq(qQ, TQ, XQ, wQ, QQ[zQ + 6], 15, -1560198380), wQ = Zq(wQ, qQ, TQ, XQ, QQ[zQ + 13], 21, 1309151649), XQ = Zq(XQ, wQ, qQ, TQ, QQ[zQ + 4], 6, -145523070), TQ = Zq(TQ, XQ, wQ, qQ, QQ[zQ + 11], 10, -1120210379), qQ = Zq(qQ, TQ, XQ, wQ, QQ[zQ + 2], 15, 718787259), wQ = Zq(wQ, qQ, TQ, XQ, QQ[zQ + 9], 21, -343485551), XQ = eq(XQ, sQ), wQ = eq(wQ, FQ), qQ = eq(qQ, PQ), TQ = eq(TQ, gQ)
        }
        return [XQ, wQ, qQ, TQ]
      }(function(QQ) {
        if (0 === QQ.length) return [];
        for (var WQ = 8 * QQ.length, XQ = new Uint32Array(oq(WQ)), wQ = 0; wQ < WQ; wQ += 8) XQ[wQ >> 5] |= (255 & QQ[wQ / 8]) << wQ % 32;
        return XQ
      }(QQ), 8 * QQ.length))
    }));
    var Oq = new Uint8Array(16);

    function Kq() {
      if (!Sq && !(Sq = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Sq(Oq)
    }

    function mq(QQ, WQ, XQ) {
      var wQ = (QQ = QQ || {}).random || (QQ.rng || Kq)();
      if (wQ[6] = 15 & wQ[6] | 64, wQ[8] = 63 & wQ[8] | 128, WQ) {
        XQ = XQ || 0;
        for (var qQ = 0; qQ < 16; ++qQ) WQ[XQ + qQ] = wQ[qQ];
        return WQ
      }
      return fq(wQ)
    }

    function Mq(QQ, WQ, XQ, wQ) {
      switch (QQ) {
        case 0:
          return WQ & XQ ^ ~WQ & wQ;
        case 1:
        case 3:
          return WQ ^ XQ ^ wQ;
        case 2:
          return WQ & XQ ^ WQ & wQ ^ XQ & wQ
      }
    }

    function QT(QQ, WQ) {
      return QQ << WQ | QQ >>> 32 - WQ
    }
    tq("v5", 80, (function(QQ) {
      var WQ = [1518500249, 1859775393, 2400959708, 3395469782],
        XQ = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof QQ) {
        var wQ = unescape(encodeURIComponent(QQ));
        QQ = [];
        for (var qQ = 0; qQ < wQ.length; ++qQ) QQ.push(wQ.charCodeAt(qQ))
      } else Array.isArray(QQ) || (QQ = Array.prototype.slice.call(QQ));
      QQ.push(128);
      for (var TQ = QQ.length / 4 + 2, zQ = Math.ceil(TQ / 16), sQ = new Array(zQ), FQ = 0; FQ < zQ; ++FQ) {
        for (var PQ = new Uint32Array(16), gQ = 0; gQ < 16; ++gQ) PQ[gQ] = QQ[64 * FQ + 4 * gQ] << 24 | QQ[64 * FQ + 4 * gQ + 1] << 16 | QQ[64 * FQ + 4 * gQ + 2] << 8 | QQ[64 * FQ + 4 * gQ + 3];
        sQ[FQ] = PQ
      }
      sQ[zQ - 1][14] = 8 * (QQ.length - 1) / Math.pow(2, 32), sQ[zQ - 1][14] = Math.floor(sQ[zQ - 1][14]), sQ[zQ - 1][15] = 8 * (QQ.length - 1) & 4294967295;
      for (var JQ = 0; JQ < zQ; ++JQ) {
        for (var rQ = new Uint32Array(80), IQ = 0; IQ < 16; ++IQ) rQ[IQ] = sQ[JQ][IQ];
        for (var jQ = 16; jQ < 80; ++jQ) rQ[jQ] = QT(rQ[jQ - 3] ^ rQ[jQ - 8] ^ rQ[jQ - 14] ^ rQ[jQ - 16], 1);
        for (var BQ = XQ[0], yQ = XQ[1], VQ = XQ[2], DQ = XQ[3], pQ = XQ[4], GQ = 0; GQ < 80; ++GQ) {
          var UQ = Math.floor(GQ / 20),
            bQ = QT(BQ, 5) + Mq(UQ, yQ, VQ, DQ) + pQ + WQ[UQ] + rQ[GQ] >>> 0;
          pQ = DQ, DQ = VQ, VQ = QT(yQ, 30) >>> 0, yQ = BQ, BQ = bQ
        }
        XQ[0] = XQ[0] + BQ >>> 0, XQ[1] = XQ[1] + yQ >>> 0, XQ[2] = XQ[2] + VQ >>> 0, XQ[3] = XQ[3] + DQ >>> 0, XQ[4] = XQ[4] + pQ >>> 0
      }
      return [XQ[0] >> 24 & 255, XQ[0] >> 16 & 255, XQ[0] >> 8 & 255, 255 & XQ[0], XQ[1] >> 24 & 255, XQ[1] >> 16 & 255, XQ[1] >> 8 & 255, 255 & XQ[1], XQ[2] >> 24 & 255, XQ[2] >> 16 & 255, XQ[2] >> 8 & 255, 255 & XQ[2], XQ[3] >> 24 & 255, XQ[3] >> 16 & 255, XQ[3] >> 8 & 255, 255 & XQ[3], XQ[4] >> 24 & 255, XQ[4] >> 16 & 255, XQ[4] >> 8 & 255, 255 & XQ[4]]
    }));
    class WT extends Error {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(WQ), this.code = QQ, this.message = WQ, this.name = "Discord SDK Error"
      }
    }
    const XT = ["log", "warn", "debug", "info", "error"];
    var wT;
    ! function(QQ) {
      QQ[QQ.HANDSHAKE = 0] = "HANDSHAKE", QQ[QQ.FRAME = 1] = "FRAME", QQ[QQ.CLOSE = 2] = "CLOSE", QQ[QQ.HELLO = 3] = "HELLO"
    }(wT || (wT = {}));
    const qT = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class TT {
      getTransfer(QQ) {
        var WQ;
        switch (QQ.cmd) {
          case ZX.SUBSCRIBE:
          case ZX.UNSUBSCRIBE:
            return;
          default:
            return null !== (WQ = QQ.transfer) && void 0 !== WQ ? WQ : void 0
        }
      }
      constructor(QQ, WQ) {
        var XQ;
        if (this.eventBus = new PQ, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = QQ => {
            var WQ;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const XQ = mq();
            null === (WQ = this.source) || void 0 === WQ || WQ.postMessage([wT.FRAME, Object.assign(Object.assign({}, QQ), {
              nonce: XQ
            })], this.sourceOrigin, this.getTransfer(QQ));
            return new Promise(((QQ, WQ) => {
              this.pendingCommands.set(XQ, {
                resolve: QQ,
                reject: WQ
              })
            }))
          }, this.commands = (XQ = this.sendCommand, {
            authenticate: jq(XQ),
            authorize: Bq(XQ),
            captureLog: yq(XQ),
            encourageHardwareAcceleration: Vq(XQ),
            getChannel: Rq(XQ),
            getChannelPermissions: Gq(XQ),
            getEntitlements: Dq(XQ),
            getPlatformBehaviors: Uq(XQ),
            getSkus: pq(XQ),
            openExternalLink: bq(XQ),
            openInviteDialog: vq(XQ),
            openShareMomentDialog: dq(XQ),
            setActivity: Hq(XQ),
            setConfig: aq(XQ),
            setOrientationLockState: hq(XQ),
            startPurchase: iq(XQ),
            userSettingsGetLocale: cq(XQ),
            initiateImageUpload: Aq(XQ),
            getInstanceConnectedParticipants: Eq(XQ)
          }), this.handleMessage = QQ => {
            if (!qT.has(QQ.origin)) return;
            const WQ = QQ.data;
            if (!Array.isArray(WQ)) return;
            const [XQ, wQ] = WQ;
            switch (XQ) {
              case wT.HELLO:
                return;
              case wT.CLOSE:
                return this.handleClose(wQ);
              case wT.HANDSHAKE:
                return this.handleHandshake();
              case wT.FRAME:
                return this.handleFrame(wQ);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = QQ, this.configuration = null !== WQ && void 0 !== WQ ? WQ : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = CX.DESKTOP, this.guildId = null, void(this.channelId = null);
        const wQ = new URLSearchParams(this._getSearch()),
          qQ = wQ.get("frame_id");
        if (!qQ) throw new Error("frame_id query param is not defined");
        this.frameId = qQ;
        const TQ = wQ.get("instance_id");
        if (!TQ) throw new Error("instance_id query param is not defined");
        this.instanceId = TQ;
        const zQ = wQ.get("platform");
        if (!zQ) throw new Error("platform query param is not defined");
        if (zQ !== CX.DESKTOP && zQ !== CX.MOBILE) throw new Error(`Invalid query param "platform" of "${zQ}". Valid values are "${CX.DESKTOP}" or "${CX.MOBILE}"`);
        this.platform = zQ, this.guildId = wQ.get("guild_id"), this.channelId = wQ.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var QQ;
          return [null !== (QQ = window.parent.opener) && void 0 !== QQ ? QQ : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(QQ, WQ) {
        var XQ;
        window.removeEventListener("message", this.handleMessage);
        const wQ = mq();
        null === (XQ = this.source) || void 0 === XQ || XQ.postMessage([wT.CLOSE, {
          code: QQ,
          message: WQ,
          nonce: wQ
        }], this.sourceOrigin)
      }
      async subscribe(QQ, WQ) {
        for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
        const [TQ] = wQ, zQ = this.eventBus.listenerCount(QQ), sQ = this.eventBus.on(QQ, WQ);
        return Object.values(Cw).includes(QQ) && QQ !== Cw.READY && 0 === zQ && await this.sendCommand({
          cmd: ZX.SUBSCRIBE,
          args: TQ,
          evt: QQ
        }), sQ
      }
      async unsubscribe(QQ, WQ) {
        for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
        const [TQ] = wQ;
        return QQ !== Cw.READY && 1 === this.eventBus.listenerCount(QQ) && await this.sendCommand({
          cmd: ZX.UNSUBSCRIBE,
          evt: QQ,
          args: TQ
        }), this.eventBus.off(QQ, WQ)
      }
      async ready() {
        this.isReady || await new Promise((QQ => {
          this.eventBus.once(Cw.READY, QQ)
        }))
      }
      handshake() {
        var QQ;
        null === (QQ = this.source) || void 0 === QQ || QQ.postMessage([wT.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Cw.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const QQ = (QQ, WQ) => {
          this.commands.captureLog({
            level: QQ,
            message: WQ
          })
        };
        XT.forEach((WQ => {
          ! function(QQ, WQ, XQ) {
            const wQ = QQ[WQ],
              qQ = QQ;
            wQ && (QQ[WQ] = function() {
              const QQ = [].slice.call(arguments),
                TQ = "" + QQ.join(" ");
              XQ(WQ, TQ), wQ.apply(qQ, QQ)
            })
          }(console, WQ, QQ)
        }))
      }
      handleClose(QQ) {
        Pq.parse(QQ)
      }
      handleHandshake() {}
      handleFrame(QQ) {
        var WQ, XQ;
        let wQ;
        try {
          wQ = Jq(QQ)
        } catch (qQ) {
          return console.error("Failed to parse", QQ), void console.error(qQ)
        }
        if ("DISPATCH" === wQ.cmd) this.eventBus.emit(wQ.evt, wQ.data);
        else {
          if (wQ.evt === Ew) {
            if (null != wQ.nonce) return null === (WQ = this.pendingCommands.get(wQ.nonce)) || void 0 === WQ || WQ.reject(wQ.data), void this.pendingCommands.delete(wQ.nonce);
            this.eventBus.emit("error", new WT(wQ.data.code, wQ.data.message))
          }
          if (null == wQ.nonce) return void console.error("Missing nonce", QQ);
          null === (XQ = this.pendingCommands.get(wQ.nonce)) || void 0 === XQ || XQ.resolve(wQ), this.pendingCommands.delete(wQ.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var zT, sT = 1e9,
      FT = !0,
      PT = "[DecimalError] ",
      gT = PT + "Invalid argument: ",
      JT = PT + "Exponent out of range: ",
      rT = Math.floor,
      IT = Math.pow,
      jT = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      BT = 1e7,
      yT = 9007199254740991,
      VT = rT(1286742750677284.5),
      DT = {};

    function pT(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ = QQ.constructor,
        JQ = gQ.precision;
      if (!QQ.s || !WQ.s) return WQ.s || (WQ = new gQ(QQ)), FT ? iT(WQ, JQ) : WQ;
      if (FQ = QQ.d, PQ = WQ.d, zQ = QQ.e, qQ = WQ.e, FQ = FQ.slice(), TQ = zQ - qQ) {
        for (TQ < 0 ? (wQ = FQ, TQ = -TQ, sQ = PQ.length) : (wQ = PQ, qQ = zQ, sQ = FQ.length), TQ > (sQ = (zQ = Math.ceil(JQ / 7)) > sQ ? zQ + 1 : sQ + 1) && (TQ = sQ, wQ.length = 1), wQ.reverse(); TQ--;) wQ.push(0);
        wQ.reverse()
      }
      for ((sQ = FQ.length) - (TQ = PQ.length) < 0 && (TQ = sQ, wQ = PQ, PQ = FQ, FQ = wQ), XQ = 0; TQ;) XQ = (FQ[--TQ] = FQ[TQ] + PQ[TQ] + XQ) / BT | 0, FQ[TQ] %= BT;
      for (XQ && (FQ.unshift(XQ), ++qQ), sQ = FQ.length; 0 == FQ[--sQ];) FQ.pop();
      return WQ.d = FQ, WQ.e = qQ, FT ? iT(WQ, JQ) : WQ
    }

    function GT(QQ, WQ, XQ) {
      if (QQ !== ~~QQ || QQ < WQ || QQ > XQ) throw Error(gT + QQ)
    }

    function UT(QQ) {
      var WQ, XQ, wQ, qQ = QQ.length - 1,
        TQ = "",
        zQ = QQ[0];
      if (qQ > 0) {
        for (TQ += zQ, WQ = 1; WQ < qQ; WQ++)(XQ = 7 - (wQ = QQ[WQ] + "").length) && (TQ += aT(XQ)), TQ += wQ;
        (XQ = 7 - (wQ = (zQ = QQ[WQ]) + "").length) && (TQ += aT(XQ))
      } else if (0 === zQ) return "0";
      for (; zQ % 10 === 0;) zQ /= 10;
      return TQ + zQ
    }
    DT.absoluteValue = DT.abs = function() {
      var QQ = new this.constructor(this);
      return QQ.s && (QQ.s = 1), QQ
    }, DT.comparedTo = DT.cmp = function(QQ) {
      var WQ, XQ, wQ, qQ, TQ = this;
      if (QQ = new TQ.constructor(QQ), TQ.s !== QQ.s) return TQ.s || -QQ.s;
      if (TQ.e !== QQ.e) return TQ.e > QQ.e ^ TQ.s < 0 ? 1 : -1;
      for (WQ = 0, XQ = (wQ = TQ.d.length) < (qQ = QQ.d.length) ? wQ : qQ; WQ < XQ; ++WQ)
        if (TQ.d[WQ] !== QQ.d[WQ]) return TQ.d[WQ] > QQ.d[WQ] ^ TQ.s < 0 ? 1 : -1;
      return wQ === qQ ? 0 : wQ > qQ ^ TQ.s < 0 ? 1 : -1
    }, DT.decimalPlaces = DT.dp = function() {
      var QQ = this,
        WQ = QQ.d.length - 1,
        XQ = 7 * (WQ - QQ.e);
      if (WQ = QQ.d[WQ])
        for (; WQ % 10 == 0; WQ /= 10) XQ--;
      return XQ < 0 ? 0 : XQ
    }, DT.dividedBy = DT.div = function(QQ) {
      return bT(this, new this.constructor(QQ))
    }, DT.dividedToIntegerBy = DT.idiv = function(QQ) {
      var WQ = this.constructor;
      return iT(bT(this, new WQ(QQ), 0, 1), WQ.precision)
    }, DT.equals = DT.eq = function(QQ) {
      return !this.cmp(QQ)
    }, DT.exponent = function() {
      return dT(this)
    }, DT.greaterThan = DT.gt = function(QQ) {
      return this.cmp(QQ) > 0
    }, DT.greaterThanOrEqualTo = DT.gte = function(QQ) {
      return this.cmp(QQ) >= 0
    }, DT.isInteger = DT.isint = function() {
      return this.e > this.d.length - 2
    }, DT.isNegative = DT.isneg = function() {
      return this.s < 0
    }, DT.isPositive = DT.ispos = function() {
      return this.s > 0
    }, DT.isZero = function() {
      return 0 === this.s
    }, DT.lessThan = DT.lt = function(QQ) {
      return this.cmp(QQ) < 0
    }, DT.lessThanOrEqualTo = DT.lte = function(QQ) {
      return this.cmp(QQ) < 1
    }, DT.logarithm = DT.log = function(QQ) {
      var WQ, XQ = this,
        wQ = XQ.constructor,
        qQ = wQ.precision,
        TQ = qQ + 5;
      if (void 0 === QQ) QQ = new wQ(10);
      else if ((QQ = new wQ(QQ)).s < 1 || QQ.eq(zT)) throw Error(PT + "NaN");
      if (XQ.s < 1) throw Error(PT + (XQ.s ? "NaN" : "-Infinity"));
      return XQ.eq(zT) ? new wQ(0) : (FT = !1, WQ = bT(lT(XQ, TQ), lT(QQ, TQ), TQ), FT = !0, iT(WQ, qQ))
    }, DT.minus = DT.sub = function(QQ) {
      var WQ = this;
      return QQ = new WQ.constructor(QQ), WQ.s == QQ.s ? cT(WQ, QQ) : pT(WQ, (QQ.s = -QQ.s, QQ))
    }, DT.modulo = DT.mod = function(QQ) {
      var WQ, XQ = this,
        wQ = XQ.constructor,
        qQ = wQ.precision;
      if (!(QQ = new wQ(QQ)).s) throw Error(PT + "NaN");
      return XQ.s ? (FT = !1, WQ = bT(XQ, QQ, 0, 1).times(QQ), FT = !0, XQ.minus(WQ)) : iT(new wQ(XQ), qQ)
    }, DT.naturalExponential = DT.exp = function() {
      return vT(this)
    }, DT.naturalLogarithm = DT.ln = function() {
      return lT(this)
    }, DT.negated = DT.neg = function() {
      var QQ = new this.constructor(this);
      return QQ.s = -QQ.s || 0, QQ
    }, DT.plus = DT.add = function(QQ) {
      var WQ = this;
      return QQ = new WQ.constructor(QQ), WQ.s == QQ.s ? pT(WQ, QQ) : cT(WQ, (QQ.s = -QQ.s, QQ))
    }, DT.precision = DT.sd = function(QQ) {
      var WQ, XQ, wQ, qQ = this;
      if (void 0 !== QQ && QQ !== !!QQ && 1 !== QQ && 0 !== QQ) throw Error(gT + QQ);
      if (WQ = dT(qQ) + 1, XQ = 7 * (wQ = qQ.d.length - 1) + 1, wQ = qQ.d[wQ]) {
        for (; wQ % 10 == 0; wQ /= 10) XQ--;
        for (wQ = qQ.d[0]; wQ >= 10; wQ /= 10) XQ++
      }
      return QQ && WQ > XQ ? WQ : XQ
    }, DT.squareRoot = DT.sqrt = function() {
      var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ = this,
        FQ = sQ.constructor;
      if (sQ.s < 1) {
        if (!sQ.s) return new FQ(0);
        throw Error(PT + "NaN")
      }
      for (QQ = dT(sQ), FT = !1, 0 == (qQ = Math.sqrt(+sQ)) || qQ == 1 / 0 ? (((WQ = UT(sQ.d)).length + QQ) % 2 == 0 && (WQ += "0"), qQ = Math.sqrt(WQ), QQ = rT((QQ + 1) / 2) - (QQ < 0 || QQ % 2), wQ = new FQ(WQ = qQ == 1 / 0 ? "1e" + QQ : (WQ = qQ.toExponential()).slice(0, WQ.indexOf("e") + 1) + QQ)) : wQ = new FQ(qQ.toString()), qQ = zQ = (XQ = FQ.precision) + 3;;)
        if (wQ = (TQ = wQ).plus(bT(sQ, TQ, zQ + 2)).times(.5), UT(TQ.d).slice(0, zQ) === (WQ = UT(wQ.d)).slice(0, zQ)) {
          if (WQ = WQ.slice(zQ - 3, zQ + 1), qQ == zQ && "4999" == WQ) {
            if (iT(TQ, XQ + 1, 0), TQ.times(TQ).eq(sQ)) {
              wQ = TQ;
              break
            }
          } else if ("9999" != WQ) break;
          zQ += 4
        } return FT = !0, iT(wQ, XQ)
    }, DT.times = DT.mul = function(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ = this,
        JQ = gQ.constructor,
        rQ = gQ.d,
        IQ = (QQ = new JQ(QQ)).d;
      if (!gQ.s || !QQ.s) return new JQ(0);
      for (QQ.s *= gQ.s, XQ = gQ.e + QQ.e, (FQ = rQ.length) < (PQ = IQ.length) && (TQ = rQ, rQ = IQ, IQ = TQ, zQ = FQ, FQ = PQ, PQ = zQ), TQ = [], wQ = zQ = FQ + PQ; wQ--;) TQ.push(0);
      for (wQ = PQ; --wQ >= 0;) {
        for (WQ = 0, qQ = FQ + wQ; qQ > wQ;) sQ = TQ[qQ] + IQ[wQ] * rQ[qQ - wQ - 1] + WQ, TQ[qQ--] = sQ % BT | 0, WQ = sQ / BT | 0;
        TQ[qQ] = (TQ[qQ] + WQ) % BT | 0
      }
      for (; !TQ[--zQ];) TQ.pop();
      return WQ ? ++XQ : TQ.shift(), QQ.d = TQ, QQ.e = XQ, FT ? iT(QQ, JQ.precision) : QQ
    }, DT.toDecimalPlaces = DT.todp = function(QQ, WQ) {
      var XQ = this,
        wQ = XQ.constructor;
      return XQ = new wQ(XQ), void 0 === QQ ? XQ : (GT(QQ, 0, sT), void 0 === WQ ? WQ = wQ.rounding : GT(WQ, 0, 8), iT(XQ, QQ + dT(XQ) + 1, WQ))
    }, DT.toExponential = function(QQ, WQ) {
      var XQ, wQ = this,
        qQ = wQ.constructor;
      return void 0 === QQ ? XQ = AT(wQ, !0) : (GT(QQ, 0, sT), void 0 === WQ ? WQ = qQ.rounding : GT(WQ, 0, 8), XQ = AT(wQ = iT(new qQ(wQ), QQ + 1, WQ), !0, QQ + 1)), XQ
    }, DT.toFixed = function(QQ, WQ) {
      var XQ, wQ, qQ = this,
        TQ = qQ.constructor;
      return void 0 === QQ ? AT(qQ) : (GT(QQ, 0, sT), void 0 === WQ ? WQ = TQ.rounding : GT(WQ, 0, 8), XQ = AT((wQ = iT(new TQ(qQ), QQ + dT(qQ) + 1, WQ)).abs(), !1, QQ + dT(wQ) + 1), qQ.isneg() && !qQ.isZero() ? "-" + XQ : XQ)
    }, DT.toInteger = DT.toint = function() {
      var QQ = this,
        WQ = QQ.constructor;
      return iT(new WQ(QQ), dT(QQ) + 1, WQ.rounding)
    }, DT.toNumber = function() {
      return +this
    }, DT.toPower = DT.pow = function(QQ) {
      var WQ, XQ, wQ, qQ, TQ, zQ, sQ = this,
        FQ = sQ.constructor,
        PQ = +(QQ = new FQ(QQ));
      if (!QQ.s) return new FQ(zT);
      if (!(sQ = new FQ(sQ)).s) {
        if (QQ.s < 1) throw Error(PT + "Infinity");
        return sQ
      }
      if (sQ.eq(zT)) return sQ;
      if (wQ = FQ.precision, QQ.eq(zT)) return iT(sQ, wQ);
      if (zQ = (WQ = QQ.e) >= (XQ = QQ.d.length - 1), TQ = sQ.s, zQ) {
        if ((XQ = PQ < 0 ? -PQ : PQ) <= yT) {
          for (qQ = new FQ(zT), WQ = Math.ceil(wQ / 7 + 4), FT = !1; XQ % 2 && RT((qQ = qQ.times(sQ)).d, WQ), 0 !== (XQ = rT(XQ / 2));) RT((sQ = sQ.times(sQ)).d, WQ);
          return FT = !0, QQ.s < 0 ? new FQ(zT).div(qQ) : iT(qQ, wQ)
        }
      } else if (TQ < 0) throw Error(PT + "NaN");
      return TQ = TQ < 0 && 1 & QQ.d[Math.max(WQ, XQ)] ? -1 : 1, sQ.s = 1, FT = !1, qQ = QQ.times(lT(sQ, wQ + 12)), FT = !0, (qQ = vT(qQ)).s = TQ, qQ
    }, DT.toPrecision = function(QQ, WQ) {
      var XQ, wQ, qQ = this,
        TQ = qQ.constructor;
      return void 0 === QQ ? wQ = AT(qQ, (XQ = dT(qQ)) <= TQ.toExpNeg || XQ >= TQ.toExpPos) : (GT(QQ, 1, sT), void 0 === WQ ? WQ = TQ.rounding : GT(WQ, 0, 8), wQ = AT(qQ = iT(new TQ(qQ), QQ, WQ), QQ <= (XQ = dT(qQ)) || XQ <= TQ.toExpNeg, QQ)), wQ
    }, DT.toSignificantDigits = DT.tosd = function(QQ, WQ) {
      var XQ = this.constructor;
      return void 0 === QQ ? (QQ = XQ.precision, WQ = XQ.rounding) : (GT(QQ, 1, sT), void 0 === WQ ? WQ = XQ.rounding : GT(WQ, 0, 8)), iT(new XQ(this), QQ, WQ)
    }, DT.toString = DT.valueOf = DT.val = DT.toJSON = DT[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var QQ = this,
        WQ = dT(QQ),
        XQ = QQ.constructor;
      return AT(QQ, WQ <= XQ.toExpNeg || WQ >= XQ.toExpPos)
    };
    var bT = function() {
      function QQ(QQ, WQ) {
        var XQ, wQ = 0,
          qQ = QQ.length;
        for (QQ = QQ.slice(); qQ--;) XQ = QQ[qQ] * WQ + wQ, QQ[qQ] = XQ % BT | 0, wQ = XQ / BT | 0;
        return wQ && QQ.unshift(wQ), QQ
      }

      function WQ(QQ, WQ, XQ, wQ) {
        var qQ, TQ;
        if (XQ != wQ) TQ = XQ > wQ ? 1 : -1;
        else
          for (qQ = TQ = 0; qQ < XQ; qQ++)
            if (QQ[qQ] != WQ[qQ]) {
              TQ = QQ[qQ] > WQ[qQ] ? 1 : -1;
              break
            } return TQ
      }

      function XQ(QQ, WQ, XQ) {
        for (var wQ = 0; XQ--;) QQ[XQ] -= wQ, wQ = QQ[XQ] < WQ[XQ] ? 1 : 0, QQ[XQ] = wQ * BT + QQ[XQ] - WQ[XQ];
        for (; !QQ[0] && QQ.length > 1;) QQ.shift()
      }
      return function(wQ, qQ, TQ, zQ) {
        var sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ = wQ.constructor,
          aQ = wQ.s == qQ.s ? 1 : -1,
          lQ = wQ.d,
          hQ = qQ.d;
        if (!wQ.s) return new HQ(wQ);
        if (!qQ.s) throw Error(PT + "Division by zero");
        for (FQ = wQ.e - qQ.e, vQ = hQ.length, UQ = lQ.length, jQ = (IQ = new HQ(aQ)).d = [], PQ = 0; hQ[PQ] == (lQ[PQ] || 0);) ++PQ;
        if (hQ[PQ] > (lQ[PQ] || 0) && --FQ, (DQ = null == TQ ? TQ = HQ.precision : zQ ? TQ + (dT(wQ) - dT(qQ)) + 1 : TQ) < 0) return new HQ(0);
        if (DQ = DQ / 7 + 2 | 0, PQ = 0, 1 == vQ)
          for (gQ = 0, hQ = hQ[0], DQ++;
            (PQ < UQ || gQ) && DQ--; PQ++) pQ = gQ * BT + (lQ[PQ] || 0), jQ[PQ] = pQ / hQ | 0, gQ = pQ % hQ | 0;
        else {
          for ((gQ = BT / (hQ[0] + 1) | 0) > 1 && (hQ = QQ(hQ, gQ), lQ = QQ(lQ, gQ), vQ = hQ.length, UQ = lQ.length), GQ = vQ, yQ = (BQ = lQ.slice(0, vQ)).length; yQ < vQ;) BQ[yQ++] = 0;
          (dQ = hQ.slice()).unshift(0), bQ = hQ[0], hQ[1] >= BT / 2 && ++bQ;
          do {
            gQ = 0, (sQ = WQ(hQ, BQ, vQ, yQ)) < 0 ? (VQ = BQ[0], vQ != yQ && (VQ = VQ * BT + (BQ[1] || 0)), (gQ = VQ / bQ | 0) > 1 ? (gQ >= BT && (gQ = BT - 1), 1 == (sQ = WQ(JQ = QQ(hQ, gQ), BQ, rQ = JQ.length, yQ = BQ.length)) && (gQ--, XQ(JQ, vQ < rQ ? dQ : hQ, rQ))) : (0 == gQ && (sQ = gQ = 1), JQ = hQ.slice()), (rQ = JQ.length) < yQ && JQ.unshift(0), XQ(BQ, JQ, yQ), -1 == sQ && (sQ = WQ(hQ, BQ, vQ, yQ = BQ.length)) < 1 && (gQ++, XQ(BQ, vQ < yQ ? dQ : hQ, yQ)), yQ = BQ.length) : 0 === sQ && (gQ++, BQ = [0]), jQ[PQ++] = gQ, sQ && BQ[0] ? BQ[yQ++] = lQ[GQ] || 0 : (BQ = [lQ[GQ]], yQ = 1)
          } while ((GQ++ < UQ || void 0 !== BQ[0]) && DQ--)
        }
        return jQ[0] || jQ.shift(), IQ.e = FQ, iT(IQ, zQ ? TQ + dT(IQ) + 1 : TQ)
      }
    }();

    function vT(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ, sQ = 0,
        FQ = 0,
        PQ = QQ.constructor,
        gQ = PQ.precision;
      if (dT(QQ) > 16) throw Error(JT + dT(QQ));
      if (!QQ.s) return new PQ(zT);
      for (null == WQ ? (FT = !1, zQ = gQ) : zQ = WQ, TQ = new PQ(.03125); QQ.abs().gte(.1);) QQ = QQ.times(TQ), FQ += 5;
      for (zQ += Math.log(IT(2, FQ)) / Math.LN10 * 2 + 5 | 0, XQ = wQ = qQ = new PQ(zT), PQ.precision = zQ;;) {
        if (wQ = iT(wQ.times(QQ), zQ), XQ = XQ.times(++sQ), UT((TQ = qQ.plus(bT(wQ, XQ, zQ))).d).slice(0, zQ) === UT(qQ.d).slice(0, zQ)) {
          for (; FQ--;) qQ = iT(qQ.times(qQ), zQ);
          return PQ.precision = gQ, null == WQ ? (FT = !0, iT(qQ, gQ)) : qQ
        }
        qQ = TQ
      }
    }

    function dT(QQ) {
      for (var WQ = 7 * QQ.e, XQ = QQ.d[0]; XQ >= 10; XQ /= 10) WQ++;
      return WQ
    }

    function HT(QQ, WQ, XQ) {
      if (WQ > QQ.LN10.sd()) throw FT = !0, XQ && (QQ.precision = XQ), Error(PT + "LN10 precision limit exceeded");
      return iT(new QQ(QQ.LN10), WQ)
    }

    function aT(QQ) {
      for (var WQ = ""; QQ--;) WQ += "0";
      return WQ
    }

    function lT(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ = 1,
        rQ = QQ,
        IQ = rQ.d,
        jQ = rQ.constructor,
        BQ = jQ.precision;
      if (rQ.s < 1) throw Error(PT + (rQ.s ? "NaN" : "-Infinity"));
      if (rQ.eq(zT)) return new jQ(0);
      if (null == WQ ? (FT = !1, PQ = BQ) : PQ = WQ, rQ.eq(10)) return null == WQ && (FT = !0), HT(jQ, PQ);
      if (PQ += 10, jQ.precision = PQ, wQ = (XQ = UT(IQ)).charAt(0), TQ = dT(rQ), !(Math.abs(TQ) < 15e14)) return FQ = HT(jQ, PQ + 2, BQ).times(TQ + ""), rQ = lT(new jQ(wQ + "." + XQ.slice(1)), PQ - 10).plus(FQ), jQ.precision = BQ, null == WQ ? (FT = !0, iT(rQ, BQ)) : rQ;
      for (; wQ < 7 && 1 != wQ || 1 == wQ && XQ.charAt(1) > 3;) wQ = (XQ = UT((rQ = rQ.times(QQ)).d)).charAt(0), JQ++;
      for (TQ = dT(rQ), wQ > 1 ? (rQ = new jQ("0." + XQ), TQ++) : rQ = new jQ(wQ + "." + XQ.slice(1)), sQ = zQ = rQ = bT(rQ.minus(zT), rQ.plus(zT), PQ), gQ = iT(rQ.times(rQ), PQ), qQ = 3;;) {
        if (zQ = iT(zQ.times(gQ), PQ), UT((FQ = sQ.plus(bT(zQ, new jQ(qQ), PQ))).d).slice(0, PQ) === UT(sQ.d).slice(0, PQ)) return sQ = sQ.times(2), 0 !== TQ && (sQ = sQ.plus(HT(jQ, PQ + 2, BQ).times(TQ + ""))), sQ = bT(sQ, new jQ(JQ), PQ), jQ.precision = BQ, null == WQ ? (FT = !0, iT(sQ, BQ)) : sQ;
        sQ = FQ, qQ += 2
      }
    }

    function hT(QQ, WQ) {
      var XQ, wQ, qQ;
      for ((XQ = WQ.indexOf(".")) > -1 && (WQ = WQ.replace(".", "")), (wQ = WQ.search(/e/i)) > 0 ? (XQ < 0 && (XQ = wQ), XQ += +WQ.slice(wQ + 1), WQ = WQ.substring(0, wQ)) : XQ < 0 && (XQ = WQ.length), wQ = 0; 48 === WQ.charCodeAt(wQ);) ++wQ;
      for (qQ = WQ.length; 48 === WQ.charCodeAt(qQ - 1);) --qQ;
      if (WQ = WQ.slice(wQ, qQ)) {
        if (qQ -= wQ, XQ = XQ - wQ - 1, QQ.e = rT(XQ / 7), QQ.d = [], wQ = (XQ + 1) % 7, XQ < 0 && (wQ += 7), wQ < qQ) {
          for (wQ && QQ.d.push(+WQ.slice(0, wQ)), qQ -= 7; wQ < qQ;) QQ.d.push(+WQ.slice(wQ, wQ += 7));
          wQ = 7 - (WQ = WQ.slice(wQ)).length
        } else wQ -= qQ;
        for (; wQ--;) WQ += "0";
        if (QQ.d.push(+WQ), FT && (QQ.e > VT || QQ.e < -VT)) throw Error(JT + XQ)
      } else QQ.s = 0, QQ.e = 0, QQ.d = [0];
      return QQ
    }

    function iT(QQ, WQ, XQ) {
      var wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ = QQ.d;
      for (zQ = 1, TQ = JQ[0]; TQ >= 10; TQ /= 10) zQ++;
      if ((wQ = WQ - zQ) < 0) wQ += 7, qQ = WQ, PQ = JQ[gQ = 0];
      else {
        if ((gQ = Math.ceil((wQ + 1) / 7)) >= (TQ = JQ.length)) return QQ;
        for (PQ = TQ = JQ[gQ], zQ = 1; TQ >= 10; TQ /= 10) zQ++;
        qQ = (wQ %= 7) - 7 + zQ
      }
      if (void 0 !== XQ && (sQ = PQ / (TQ = IT(10, zQ - qQ - 1)) % 10 | 0, FQ = WQ < 0 || void 0 !== JQ[gQ + 1] || PQ % TQ, FQ = XQ < 4 ? (sQ || FQ) && (0 == XQ || XQ == (QQ.s < 0 ? 3 : 2)) : sQ > 5 || 5 == sQ && (4 == XQ || FQ || 6 == XQ && (wQ > 0 ? qQ > 0 ? PQ / IT(10, zQ - qQ) : 0 : JQ[gQ - 1]) % 10 & 1 || XQ == (QQ.s < 0 ? 8 : 7))), WQ < 1 || !JQ[0]) return FQ ? (TQ = dT(QQ), JQ.length = 1, WQ = WQ - TQ - 1, JQ[0] = IT(10, (7 - WQ % 7) % 7), QQ.e = rT(-WQ / 7) || 0) : (JQ.length = 1, JQ[0] = QQ.e = QQ.s = 0), QQ;
      if (0 == wQ ? (JQ.length = gQ, TQ = 1, gQ--) : (JQ.length = gQ + 1, TQ = IT(10, 7 - wQ), JQ[gQ] = qQ > 0 ? (PQ / IT(10, zQ - qQ) % IT(10, qQ) | 0) * TQ : 0), FQ)
        for (;;) {
          if (0 == gQ) {
            (JQ[0] += TQ) == BT && (JQ[0] = 1, ++QQ.e);
            break
          }
          if (JQ[gQ] += TQ, JQ[gQ] != BT) break;
          JQ[gQ--] = 0, TQ = 1
        }
      for (wQ = JQ.length; 0 === JQ[--wQ];) JQ.pop();
      if (FT && (QQ.e > VT || QQ.e < -VT)) throw Error(JT + dT(QQ));
      return QQ
    }

    function cT(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ = QQ.constructor,
        IQ = rQ.precision;
      if (!QQ.s || !WQ.s) return WQ.s ? WQ.s = -WQ.s : WQ = new rQ(QQ), FT ? iT(WQ, IQ) : WQ;
      if (FQ = QQ.d, JQ = WQ.d, wQ = WQ.e, PQ = QQ.e, FQ = FQ.slice(), zQ = PQ - wQ) {
        for ((gQ = zQ < 0) ? (XQ = FQ, zQ = -zQ, sQ = JQ.length) : (XQ = JQ, wQ = PQ, sQ = FQ.length), zQ > (qQ = Math.max(Math.ceil(IQ / 7), sQ) + 2) && (zQ = qQ, XQ.length = 1), XQ.reverse(), qQ = zQ; qQ--;) XQ.push(0);
        XQ.reverse()
      } else {
        for ((gQ = (qQ = FQ.length) < (sQ = JQ.length)) && (sQ = qQ), qQ = 0; qQ < sQ; qQ++)
          if (FQ[qQ] != JQ[qQ]) {
            gQ = FQ[qQ] < JQ[qQ];
            break
          } zQ = 0
      }
      for (gQ && (XQ = FQ, FQ = JQ, JQ = XQ, WQ.s = -WQ.s), sQ = FQ.length, qQ = JQ.length - sQ; qQ > 0; --qQ) FQ[sQ++] = 0;
      for (qQ = JQ.length; qQ > zQ;) {
        if (FQ[--qQ] < JQ[qQ]) {
          for (TQ = qQ; TQ && 0 === FQ[--TQ];) FQ[TQ] = BT - 1;
          --FQ[TQ], FQ[qQ] += BT
        }
        FQ[qQ] -= JQ[qQ]
      }
      for (; 0 === FQ[--sQ];) FQ.pop();
      for (; 0 === FQ[0]; FQ.shift()) --wQ;
      return FQ[0] ? (WQ.d = FQ, WQ.e = wQ, FT ? iT(WQ, IQ) : WQ) : new rQ(0)
    }

    function AT(QQ, WQ, XQ) {
      var wQ, qQ = dT(QQ),
        TQ = UT(QQ.d),
        zQ = TQ.length;
      return WQ ? (XQ && (wQ = XQ - zQ) > 0 ? TQ = TQ.charAt(0) + "." + TQ.slice(1) + aT(wQ) : zQ > 1 && (TQ = TQ.charAt(0) + "." + TQ.slice(1)), TQ = TQ + (qQ < 0 ? "e" : "e+") + qQ) : qQ < 0 ? (TQ = "0." + aT(-qQ - 1) + TQ, XQ && (wQ = XQ - zQ) > 0 && (TQ += aT(wQ))) : qQ >= zQ ? (TQ += aT(qQ + 1 - zQ), XQ && (wQ = XQ - qQ - 1) > 0 && (TQ = TQ + "." + aT(wQ))) : ((wQ = qQ + 1) < zQ && (TQ = TQ.slice(0, wQ) + "." + TQ.slice(wQ)), XQ && (wQ = XQ - zQ) > 0 && (qQ + 1 === zQ && (TQ += "."), TQ += aT(wQ))), QQ.s < 0 ? "-" + TQ : TQ
    }

    function RT(QQ, WQ) {
      if (QQ.length > WQ) return QQ.length = WQ, !0
    }

    function ET(QQ) {
      if (!QQ || "object" !== typeof QQ) throw Error(PT + "Object expected");
      var WQ, XQ, wQ, qQ = ["precision", 1, sT, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (WQ = 0; WQ < qQ.length; WQ += 3)
        if (void 0 !== (wQ = QQ[XQ = qQ[WQ]])) {
          if (!(rT(wQ) === wQ && wQ >= qQ[WQ + 1] && wQ <= qQ[WQ + 2])) throw Error(gT + XQ + ": " + wQ);
          this[XQ] = wQ
        } if (void 0 !== (wQ = QQ[XQ = "LN10"])) {
        if (wQ != Math.LN10) throw Error(gT + XQ + ": " + wQ);
        this[XQ] = new this(wQ)
      }
      return this
    }
    var CT = function QQ(WQ) {
      var XQ, wQ, qQ;

      function TQ(QQ) {
        var WQ = this;
        if (!(WQ instanceof TQ)) return new TQ(QQ);
        if (WQ.constructor = TQ, QQ instanceof TQ) return WQ.s = QQ.s, WQ.e = QQ.e, void(WQ.d = (QQ = QQ.d) ? QQ.slice() : QQ);
        if ("number" === typeof QQ) {
          if (0 * QQ !== 0) throw Error(gT + QQ);
          if (QQ > 0) WQ.s = 1;
          else {
            if (!(QQ < 0)) return WQ.s = 0, WQ.e = 0, void(WQ.d = [0]);
            QQ = -QQ, WQ.s = -1
          }
          return QQ === ~~QQ && QQ < 1e7 ? (WQ.e = 0, void(WQ.d = [QQ])) : hT(WQ, QQ.toString())
        }
        if ("string" !== typeof QQ) throw Error(gT + QQ);
        if (45 === QQ.charCodeAt(0) ? (QQ = QQ.slice(1), WQ.s = -1) : WQ.s = 1, !jT.test(QQ)) throw Error(gT + QQ);
        hT(WQ, QQ)
      }
      if (TQ.prototype = DT, TQ.ROUND_UP = 0, TQ.ROUND_DOWN = 1, TQ.ROUND_CEIL = 2, TQ.ROUND_FLOOR = 3, TQ.ROUND_HALF_UP = 4, TQ.ROUND_HALF_DOWN = 5, TQ.ROUND_HALF_EVEN = 6, TQ.ROUND_HALF_CEIL = 7, TQ.ROUND_HALF_FLOOR = 8, TQ.clone = QQ, TQ.config = TQ.set = ET, void 0 === WQ && (WQ = {}), WQ)
        for (qQ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], XQ = 0; XQ < qQ.length;) WQ.hasOwnProperty(wQ = qQ[XQ++]) || (WQ[wQ] = this[wQ]);
      return TQ.config(WQ), TQ
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    zT = new CT(1);
    var uT;
    ! function(QQ) {
      QQ.AED = "aed", QQ.AFN = "afn", QQ.ALL = "all", QQ.AMD = "amd", QQ.ANG = "ang", QQ.AOA = "aoa", QQ.ARS = "ars", QQ.AUD = "aud", QQ.AWG = "awg", QQ.AZN = "azn", QQ.BAM = "bam", QQ.BBD = "bbd", QQ.BDT = "bdt", QQ.BGN = "bgn", QQ.BHD = "bhd", QQ.BIF = "bif", QQ.BMD = "bmd", QQ.BND = "bnd", QQ.BOB = "bob", QQ.BOV = "bov", QQ.BRL = "brl", QQ.BSD = "bsd", QQ.BTN = "btn", QQ.BWP = "bwp", QQ.BYN = "byn", QQ.BYR = "byr", QQ.BZD = "bzd", QQ.CAD = "cad", QQ.CDF = "cdf", QQ.CHE = "che", QQ.CHF = "chf", QQ.CHW = "chw", QQ.CLF = "clf", QQ.CLP = "clp", QQ.CNY = "cny", QQ.COP = "cop", QQ.COU = "cou", QQ.CRC = "crc", QQ.CUC = "cuc", QQ.CUP = "cup", QQ.CVE = "cve", QQ.CZK = "czk", QQ.DJF = "djf", QQ.DKK = "dkk", QQ.DOP = "dop", QQ.DZD = "dzd", QQ.EGP = "egp", QQ.ERN = "ern", QQ.ETB = "etb", QQ.EUR = "eur", QQ.FJD = "fjd", QQ.FKP = "fkp", QQ.GBP = "gbp", QQ.GEL = "gel", QQ.GHS = "ghs", QQ.GIP = "gip", QQ.GMD = "gmd", QQ.GNF = "gnf", QQ.GTQ = "gtq", QQ.GYD = "gyd", QQ.HKD = "hkd", QQ.HNL = "hnl", QQ.HRK = "hrk", QQ.HTG = "htg", QQ.HUF = "huf", QQ.IDR = "idr", QQ.ILS = "ils", QQ.INR = "inr", QQ.IQD = "iqd", QQ.IRR = "irr", QQ.ISK = "isk", QQ.JMD = "jmd", QQ.JOD = "jod", QQ.JPY = "jpy", QQ.KES = "kes", QQ.KGS = "kgs", QQ.KHR = "khr", QQ.KMF = "kmf", QQ.KPW = "kpw", QQ.KRW = "krw", QQ.KWD = "kwd", QQ.KYD = "kyd", QQ.KZT = "kzt", QQ.LAK = "lak", QQ.LBP = "lbp", QQ.LKR = "lkr", QQ.LRD = "lrd", QQ.LSL = "lsl", QQ.LTL = "ltl", QQ.LVL = "lvl", QQ.LYD = "lyd", QQ.MAD = "mad", QQ.MDL = "mdl", QQ.MGA = "mga", QQ.MKD = "mkd", QQ.MMK = "mmk", QQ.MNT = "mnt", QQ.MOP = "mop", QQ.MRO = "mro", QQ.MUR = "mur", QQ.MVR = "mvr", QQ.MWK = "mwk", QQ.MXN = "mxn", QQ.MXV = "mxv", QQ.MYR = "myr", QQ.MZN = "mzn", QQ.NAD = "nad", QQ.NGN = "ngn", QQ.NIO = "nio", QQ.NOK = "nok", QQ.NPR = "npr", QQ.NZD = "nzd", QQ.OMR = "omr", QQ.PAB = "pab", QQ.PEN = "pen", QQ.PGK = "pgk", QQ.PHP = "php", QQ.PKR = "pkr", QQ.PLN = "pln", QQ.PYG = "pyg", QQ.QAR = "qar", QQ.RON = "ron", QQ.RSD = "rsd", QQ.RUB = "rub", QQ.RWF = "rwf", QQ.SAR = "sar", QQ.SBD = "sbd", QQ.SCR = "scr", QQ.SDG = "sdg", QQ.SEK = "sek", QQ.SGD = "sgd", QQ.SHP = "shp", QQ.SLL = "sll", QQ.SOS = "sos", QQ.SRD = "srd", QQ.SSP = "ssp", QQ.STD = "std", QQ.SVC = "svc", QQ.SYP = "syp", QQ.SZL = "szl", QQ.THB = "thb", QQ.TJS = "tjs", QQ.TMT = "tmt", QQ.TND = "tnd", QQ.TOP = "top", QQ.TRY = "try", QQ.TTD = "ttd", QQ.TWD = "twd", QQ.TZS = "tzs", QQ.UAH = "uah", QQ.UGX = "ugx", QQ.USD = "usd", QQ.USN = "usn", QQ.USS = "uss", QQ.UYI = "uyi", QQ.UYU = "uyu", QQ.UZS = "uzs", QQ.VEF = "vef", QQ.VND = "vnd", QQ.VUV = "vuv", QQ.WST = "wst", QQ.XAF = "xaf", QQ.XAG = "xag", QQ.XAU = "xau", QQ.XBA = "xba", QQ.XBB = "xbb", QQ.XBC = "xbc", QQ.XBD = "xbd", QQ.XCD = "xcd", QQ.XDR = "xdr", QQ.XFU = "xfu", QQ.XOF = "xof", QQ.XPD = "xpd", QQ.XPF = "xpf", QQ.XPT = "xpt", QQ.XSU = "xsu", QQ.XTS = "xts", QQ.XUA = "xua", QQ.YER = "yer", QQ.ZAR = "zar", QQ.ZMW = "zmw", QQ.ZWL = "zwl"
    }(uT || (uT = {}));
    uT.AED, uT.AFN, uT.ALL, uT.AMD, uT.ANG, uT.AOA, uT.ARS, uT.AUD, uT.AWG, uT.AZN, uT.BAM, uT.BBD, uT.BDT, uT.BGN, uT.BHD, uT.BIF, uT.BMD, uT.BND, uT.BOB, uT.BOV, uT.BRL, uT.BSD, uT.BTN, uT.BWP, uT.BYR, uT.BYN, uT.BZD, uT.CAD, uT.CDF, uT.CHE, uT.CHF, uT.CHW, uT.CLF, uT.CLP, uT.CNY, uT.COP, uT.COU, uT.CRC, uT.CUC, uT.CUP, uT.CVE, uT.CZK, uT.DJF, uT.DKK, uT.DOP, uT.DZD, uT.EGP, uT.ERN, uT.ETB, uT.EUR, uT.FJD, uT.FKP, uT.GBP, uT.GEL, uT.GHS, uT.GIP, uT.GMD, uT.GNF, uT.GTQ, uT.GYD, uT.HKD, uT.HNL, uT.HRK, uT.HTG, uT.HUF, uT.IDR, uT.ILS, uT.INR, uT.IQD, uT.IRR, uT.ISK, uT.JMD, uT.JOD, uT.JPY, uT.KES, uT.KGS, uT.KHR, uT.KMF, uT.KPW, uT.KRW, uT.KWD, uT.KYD, uT.KZT, uT.LAK, uT.LBP, uT.LKR, uT.LRD, uT.LSL, uT.LTL, uT.LVL, uT.LYD, uT.MAD, uT.MDL, uT.MGA, uT.MKD, uT.MMK, uT.MNT, uT.MOP, uT.MRO, uT.MUR, uT.MVR, uT.MWK, uT.MXN, uT.MXV, uT.MYR, uT.MZN, uT.NAD, uT.NGN, uT.NIO, uT.NOK, uT.NPR, uT.NZD, uT.OMR, uT.PAB, uT.PEN, uT.PGK, uT.PHP, uT.PKR, uT.PLN, uT.PYG, uT.QAR, uT.RON, uT.RSD, uT.RUB, uT.RWF, uT.SAR, uT.SBD, uT.SCR, uT.SDG, uT.SEK, uT.SGD, uT.SHP, uT.SLL, uT.SOS, uT.SRD, uT.SSP, uT.STD, uT.SVC, uT.SYP, uT.SZL, uT.THB, uT.TJS, uT.TMT, uT.TND, uT.TOP, uT.TRY, uT.TTD, uT.TWD, uT.TZS, uT.UAH, uT.UGX, uT.USD, uT.USN, uT.USS, uT.UYI, uT.UYU, uT.UZS, uT.VEF, uT.VND, uT.VUV, uT.WST, uT.XAF, uT.XAG, uT.XAU, uT.XBA, uT.XBB, uT.XBC, uT.XBD, uT.XCD, uT.XDR, uT.XFU, uT.XOF, uT.XPD, uT.XPF, uT.XPT, uT.XSU, uT.XTS, uT.XUA, uT.YER, uT.ZAR, uT.ZMW, uT.ZWL;
    var LT = {
      exports: {}
    };
    ! function(QQ, WQ) {
      var XQ = "__lodash_hash_undefined__",
        wQ = 9007199254740991,
        TQ = "[object Arguments]",
        zQ = "[object Array]",
        sQ = "[object Boolean]",
        FQ = "[object Date]",
        PQ = "[object Error]",
        gQ = "[object Function]",
        JQ = "[object Map]",
        rQ = "[object Number]",
        IQ = "[object Object]",
        jQ = "[object Promise]",
        BQ = "[object RegExp]",
        yQ = "[object Set]",
        VQ = "[object String]",
        DQ = "[object Symbol]",
        pQ = "[object WeakMap]",
        GQ = "[object ArrayBuffer]",
        UQ = "[object DataView]",
        bQ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        vQ = /^\w*$/,
        dQ = /^\./,
        HQ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        aQ = /\\(\\)?/g,
        lQ = /^\[object .+?Constructor\]$/,
        hQ = /^(?:0|[1-9]\d*)$/,
        iQ = {};
      iQ["[object Float32Array]"] = iQ["[object Float64Array]"] = iQ["[object Int8Array]"] = iQ["[object Int16Array]"] = iQ["[object Int32Array]"] = iQ["[object Uint8Array]"] = iQ["[object Uint8ClampedArray]"] = iQ["[object Uint16Array]"] = iQ["[object Uint32Array]"] = !0, iQ[TQ] = iQ[zQ] = iQ[GQ] = iQ[sQ] = iQ[UQ] = iQ[FQ] = iQ[PQ] = iQ[gQ] = iQ[JQ] = iQ[rQ] = iQ[IQ] = iQ[BQ] = iQ[yQ] = iQ[VQ] = iQ[pQ] = !1;
      var cQ = "object" == typeof qQ && qQ && qQ.Object === Object && qQ,
        AQ = "object" == typeof self && self && self.Object === Object && self,
        RQ = cQ || AQ || Function("return this")(),
        EQ = WQ && !WQ.nodeType && WQ,
        CQ = EQ && QQ && !QQ.nodeType && QQ,
        uQ = CQ && CQ.exports === EQ && cQ.process,
        LQ = function() {
          try {
            return uQ && uQ.binding("util")
          } catch (QQ) {}
        }(),
        kQ = LQ && LQ.isTypedArray;

      function fQ(QQ, WQ) {
        for (var XQ = -1, wQ = QQ ? QQ.length : 0; ++XQ < wQ && !1 !== WQ(QQ[XQ], XQ, QQ););
        return QQ
      }

      function SQ(QQ, WQ) {
        for (var XQ = -1, wQ = QQ ? QQ.length : 0; ++XQ < wQ;)
          if (WQ(QQ[XQ], XQ, QQ)) return !0;
        return !1
      }

      function tQ(QQ) {
        var WQ = !1;
        if (null != QQ && "function" != typeof QQ.toString) try {
          WQ = !!(QQ + "")
        } catch (XQ) {}
        return WQ
      }

      function oQ(QQ) {
        var WQ = -1,
          XQ = Array(QQ.size);
        return QQ.forEach((function(QQ, wQ) {
          XQ[++WQ] = [wQ, QQ]
        })), XQ
      }

      function eQ(QQ, WQ) {
        return function(XQ) {
          return QQ(WQ(XQ))
        }
      }

      function nQ(QQ) {
        var WQ = -1,
          XQ = Array(QQ.size);
        return QQ.forEach((function(QQ) {
          XQ[++WQ] = QQ
        })), XQ
      }
      var xQ = Array.prototype,
        YQ = Function.prototype,
        NQ = Object.prototype,
        ZQ = RQ["__core-js_shared__"],
        OQ = function() {
          var QQ = /[^.]+$/.exec(ZQ && ZQ.keys && ZQ.keys.IE_PROTO || "");
          return QQ ? "Symbol(src)_1." + QQ : ""
        }(),
        KQ = YQ.toString,
        mQ = NQ.hasOwnProperty,
        MQ = NQ.toString,
        QW = RegExp("^" + KQ.call(mQ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        WW = RQ.Symbol,
        XW = RQ.Uint8Array,
        wW = eQ(Object.getPrototypeOf, Object),
        qW = Object.create,
        TW = NQ.propertyIsEnumerable,
        zW = xQ.splice,
        sW = eQ(Object.keys, Object),
        FW = oW(RQ, "DataView"),
        PW = oW(RQ, "Map"),
        gW = oW(RQ, "Promise"),
        JW = oW(RQ, "Set"),
        rW = oW(RQ, "WeakMap"),
        IW = oW(Object, "create"),
        jW = KW(FW),
        BW = KW(PW),
        yW = KW(gW),
        VW = KW(JW),
        DW = KW(rW),
        pW = WW ? WW.prototype : void 0,
        GW = pW ? pW.valueOf : void 0,
        UW = pW ? pW.toString : void 0;

      function bW(QQ) {
        var WQ = -1,
          XQ = QQ ? QQ.length : 0;
        for (this.clear(); ++WQ < XQ;) {
          var wQ = QQ[WQ];
          this.set(wQ[0], wQ[1])
        }
      }

      function vW(QQ) {
        var WQ = -1,
          XQ = QQ ? QQ.length : 0;
        for (this.clear(); ++WQ < XQ;) {
          var wQ = QQ[WQ];
          this.set(wQ[0], wQ[1])
        }
      }

      function dW(QQ) {
        var WQ = -1,
          XQ = QQ ? QQ.length : 0;
        for (this.clear(); ++WQ < XQ;) {
          var wQ = QQ[WQ];
          this.set(wQ[0], wQ[1])
        }
      }

      function HW(QQ) {
        var WQ = -1,
          XQ = QQ ? QQ.length : 0;
        for (this.__data__ = new dW; ++WQ < XQ;) this.add(QQ[WQ])
      }

      function aW(QQ) {
        this.__data__ = new vW(QQ)
      }

      function lW(QQ, WQ) {
        var XQ = WX(QQ) || QX(QQ) ? function(QQ, WQ) {
            for (var XQ = -1, wQ = Array(QQ); ++XQ < QQ;) wQ[XQ] = WQ(XQ);
            return wQ
          }(QQ.length, String) : [],
          wQ = XQ.length,
          qQ = !!wQ;
        for (var TQ in QQ) !WQ && !mQ.call(QQ, TQ) || qQ && ("length" == TQ || nW(TQ, wQ)) || XQ.push(TQ);
        return XQ
      }

      function hW(QQ, WQ) {
        for (var XQ = QQ.length; XQ--;)
          if (MW(QQ[XQ][0], WQ)) return XQ;
        return -1
      }
      bW.prototype.clear = function() {
        this.__data__ = IW ? IW(null) : {}
      }, bW.prototype.delete = function(QQ) {
        return this.has(QQ) && delete this.__data__[QQ]
      }, bW.prototype.get = function(QQ) {
        var WQ = this.__data__;
        if (IW) {
          var wQ = WQ[QQ];
          return wQ === XQ ? void 0 : wQ
        }
        return mQ.call(WQ, QQ) ? WQ[QQ] : void 0
      }, bW.prototype.has = function(QQ) {
        var WQ = this.__data__;
        return IW ? void 0 !== WQ[QQ] : mQ.call(WQ, QQ)
      }, bW.prototype.set = function(QQ, WQ) {
        return this.__data__[QQ] = IW && void 0 === WQ ? XQ : WQ, this
      }, vW.prototype.clear = function() {
        this.__data__ = []
      }, vW.prototype.delete = function(QQ) {
        var WQ = this.__data__,
          XQ = hW(WQ, QQ);
        return !(XQ < 0) && (XQ == WQ.length - 1 ? WQ.pop() : zW.call(WQ, XQ, 1), !0)
      }, vW.prototype.get = function(QQ) {
        var WQ = this.__data__,
          XQ = hW(WQ, QQ);
        return XQ < 0 ? void 0 : WQ[XQ][1]
      }, vW.prototype.has = function(QQ) {
        return hW(this.__data__, QQ) > -1
      }, vW.prototype.set = function(QQ, WQ) {
        var XQ = this.__data__,
          wQ = hW(XQ, QQ);
        return wQ < 0 ? XQ.push([QQ, WQ]) : XQ[wQ][1] = WQ, this
      }, dW.prototype.clear = function() {
        this.__data__ = {
          hash: new bW,
          map: new(PW || vW),
          string: new bW
        }
      }, dW.prototype.delete = function(QQ) {
        return tW(this, QQ).delete(QQ)
      }, dW.prototype.get = function(QQ) {
        return tW(this, QQ).get(QQ)
      }, dW.prototype.has = function(QQ) {
        return tW(this, QQ).has(QQ)
      }, dW.prototype.set = function(QQ, WQ) {
        return tW(this, QQ).set(QQ, WQ), this
      }, HW.prototype.add = HW.prototype.push = function(QQ) {
        return this.__data__.set(QQ, XQ), this
      }, HW.prototype.has = function(QQ) {
        return this.__data__.has(QQ)
      }, aW.prototype.clear = function() {
        this.__data__ = new vW
      }, aW.prototype.delete = function(QQ) {
        return this.__data__.delete(QQ)
      }, aW.prototype.get = function(QQ) {
        return this.__data__.get(QQ)
      }, aW.prototype.has = function(QQ) {
        return this.__data__.has(QQ)
      }, aW.prototype.set = function(QQ, WQ) {
        var XQ = this.__data__;
        if (XQ instanceof vW) {
          var wQ = XQ.__data__;
          if (!PW || wQ.length < 199) return wQ.push([QQ, WQ]), this;
          XQ = this.__data__ = new dW(wQ)
        }
        return XQ.set(QQ, WQ), this
      };
      var iW, cW = function(QQ, WQ, XQ) {
        for (var wQ = -1, qQ = Object(QQ), TQ = XQ(QQ), zQ = TQ.length; zQ--;) {
          var sQ = TQ[iW ? zQ : ++wQ];
          if (!1 === WQ(qQ[sQ], sQ, qQ)) break
        }
        return QQ
      };

      function AW(QQ, WQ) {
        return QQ && cW(QQ, WQ, gX)
      }

      function RW(QQ, WQ) {
        for (var XQ = 0, wQ = (WQ = xW(WQ, QQ) ? [WQ] : fW(WQ)).length; null != QQ && XQ < wQ;) QQ = QQ[OW(WQ[XQ++])];
        return XQ && XQ == wQ ? QQ : void 0
      }

      function EW(QQ, WQ) {
        return null != QQ && WQ in Object(QQ)
      }

      function CW(QQ, WQ, XQ, wQ, qQ) {
        return QQ === WQ || (null == QQ || null == WQ || !TX(QQ) && !zX(WQ) ? QQ !== QQ && WQ !== WQ : function(QQ, WQ, XQ, wQ, qQ, gQ) {
          var jQ = WX(QQ),
            pQ = WX(WQ),
            bQ = zQ,
            vQ = zQ;
          jQ || (bQ = (bQ = eW(QQ)) == TQ ? IQ : bQ);
          pQ || (vQ = (vQ = eW(WQ)) == TQ ? IQ : vQ);
          var dQ = bQ == IQ && !tQ(QQ),
            HQ = vQ == IQ && !tQ(WQ),
            aQ = bQ == vQ;
          if (aQ && !dQ) return gQ || (gQ = new aW), jQ || PX(QQ) ? SW(QQ, WQ, XQ, wQ, qQ, gQ) : function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
            switch (XQ) {
              case UQ:
                if (QQ.byteLength != WQ.byteLength || QQ.byteOffset != WQ.byteOffset) return !1;
                QQ = QQ.buffer, WQ = WQ.buffer;
              case GQ:
                return !(QQ.byteLength != WQ.byteLength || !wQ(new XW(QQ), new XW(WQ)));
              case sQ:
              case FQ:
              case rQ:
                return MW(+QQ, +WQ);
              case PQ:
                return QQ.name == WQ.name && QQ.message == WQ.message;
              case BQ:
              case VQ:
                return QQ == WQ + "";
              case JQ:
                var gQ = oQ;
              case yQ:
                var IQ = 2 & TQ;
                if (gQ || (gQ = nQ), QQ.size != WQ.size && !IQ) return !1;
                var jQ = zQ.get(QQ);
                if (jQ) return jQ == WQ;
                TQ |= 1, zQ.set(QQ, WQ);
                var pQ = SW(gQ(QQ), gQ(WQ), wQ, qQ, TQ, zQ);
                return zQ.delete(QQ), pQ;
              case DQ:
                if (GW) return GW.call(QQ) == GW.call(WQ)
            }
            return !1
          }(QQ, WQ, bQ, XQ, wQ, qQ, gQ);
          if (!(2 & qQ)) {
            var lQ = dQ && mQ.call(QQ, "__wrapped__"),
              hQ = HQ && mQ.call(WQ, "__wrapped__");
            if (lQ || hQ) {
              var iQ = lQ ? QQ.value() : QQ,
                cQ = hQ ? WQ.value() : WQ;
              return gQ || (gQ = new aW), XQ(iQ, cQ, wQ, qQ, gQ)
            }
          }
          if (!aQ) return !1;
          return gQ || (gQ = new aW),
            function(QQ, WQ, XQ, wQ, qQ, TQ) {
              var zQ = 2 & qQ,
                sQ = gX(QQ),
                FQ = sQ.length,
                PQ = gX(WQ),
                gQ = PQ.length;
              if (FQ != gQ && !zQ) return !1;
              var JQ = FQ;
              for (; JQ--;) {
                var rQ = sQ[JQ];
                if (!(zQ ? rQ in WQ : mQ.call(WQ, rQ))) return !1
              }
              var IQ = TQ.get(QQ);
              if (IQ && TQ.get(WQ)) return IQ == WQ;
              var jQ = !0;
              TQ.set(QQ, WQ), TQ.set(WQ, QQ);
              var BQ = zQ;
              for (; ++JQ < FQ;) {
                var yQ = QQ[rQ = sQ[JQ]],
                  VQ = WQ[rQ];
                if (wQ) var DQ = zQ ? wQ(VQ, yQ, rQ, WQ, QQ, TQ) : wQ(yQ, VQ, rQ, QQ, WQ, TQ);
                if (!(void 0 === DQ ? yQ === VQ || XQ(yQ, VQ, wQ, qQ, TQ) : DQ)) {
                  jQ = !1;
                  break
                }
                BQ || (BQ = "constructor" == rQ)
              }
              if (jQ && !BQ) {
                var pQ = QQ.constructor,
                  GQ = WQ.constructor;
                pQ == GQ || !("constructor" in QQ) || !("constructor" in WQ) || "function" == typeof pQ && pQ instanceof pQ && "function" == typeof GQ && GQ instanceof GQ || (jQ = !1)
              }
              return TQ.delete(QQ), TQ.delete(WQ), jQ
            }(QQ, WQ, XQ, wQ, qQ, gQ)
        }(QQ, WQ, CW, XQ, wQ, qQ))
      }

      function uW(QQ) {
        return !(!TX(QQ) || (WQ = QQ, OQ && OQ in WQ)) && (wX(QQ) || tQ(QQ) ? QW : lQ).test(KW(QQ));
        var WQ
      }

      function LW(QQ) {
        return "function" == typeof QQ ? QQ : null == QQ ? JX : "object" == typeof QQ ? WX(QQ) ? function(QQ, WQ) {
          if (xW(QQ) && YW(WQ)) return NW(OW(QQ), WQ);
          return function(XQ) {
            var wQ = function(QQ, WQ, XQ) {
              var wQ = null == QQ ? void 0 : RW(QQ, WQ);
              return void 0 === wQ ? XQ : wQ
            }(XQ, QQ);
            return void 0 === wQ && wQ === WQ ? function(QQ, WQ) {
              return null != QQ && function(QQ, WQ, XQ) {
                WQ = xW(WQ, QQ) ? [WQ] : fW(WQ);
                var wQ, qQ = -1,
                  TQ = WQ.length;
                for (; ++qQ < TQ;) {
                  var zQ = OW(WQ[qQ]);
                  if (!(wQ = null != QQ && XQ(QQ, zQ))) break;
                  QQ = QQ[zQ]
                }
                if (wQ) return wQ;
                TQ = QQ ? QQ.length : 0;
                return !!TQ && qX(TQ) && nW(zQ, TQ) && (WX(QQ) || QX(QQ))
              }(QQ, WQ, EW)
            }(XQ, QQ) : CW(WQ, wQ, void 0, 3)
          }
        }(QQ[0], QQ[1]) : function(QQ) {
          var WQ = function(QQ) {
            var WQ = gX(QQ),
              XQ = WQ.length;
            for (; XQ--;) {
              var wQ = WQ[XQ],
                qQ = QQ[wQ];
              WQ[XQ] = [wQ, qQ, YW(qQ)]
            }
            return WQ
          }(QQ);
          if (1 == WQ.length && WQ[0][2]) return NW(WQ[0][0], WQ[0][1]);
          return function(XQ) {
            return XQ === QQ || function(QQ, WQ, XQ, wQ) {
              var qQ = XQ.length,
                TQ = qQ,
                zQ = !wQ;
              if (null == QQ) return !TQ;
              for (QQ = Object(QQ); qQ--;) {
                var sQ = XQ[qQ];
                if (zQ && sQ[2] ? sQ[1] !== QQ[sQ[0]] : !(sQ[0] in QQ)) return !1
              }
              for (; ++qQ < TQ;) {
                var FQ = (sQ = XQ[qQ])[0],
                  PQ = QQ[FQ],
                  gQ = sQ[1];
                if (zQ && sQ[2]) {
                  if (void 0 === PQ && !(FQ in QQ)) return !1
                } else {
                  var JQ = new aW;
                  if (wQ) var rQ = wQ(PQ, gQ, FQ, QQ, WQ, JQ);
                  if (!(void 0 === rQ ? CW(gQ, PQ, wQ, 3, JQ) : rQ)) return !1
                }
              }
              return !0
            }(XQ, QQ, WQ)
          }
        }(QQ) : function(QQ) {
          return xW(QQ) ? (WQ = OW(QQ), function(QQ) {
            return null == QQ ? void 0 : QQ[WQ]
          }) : function(QQ) {
            return function(WQ) {
              return RW(WQ, QQ)
            }
          }(QQ);
          var WQ
        }(QQ)
      }

      function kW(QQ) {
        if (! function(QQ) {
            var WQ = QQ && QQ.constructor,
              XQ = "function" == typeof WQ && WQ.prototype || NQ;
            return QQ === XQ
          }(QQ)) return sW(QQ);
        var WQ = [];
        for (var XQ in Object(QQ)) mQ.call(QQ, XQ) && "constructor" != XQ && WQ.push(XQ);
        return WQ
      }

      function fW(QQ) {
        return WX(QQ) ? QQ : ZW(QQ)
      }

      function SW(QQ, WQ, XQ, wQ, qQ, TQ) {
        var zQ = 2 & qQ,
          sQ = QQ.length,
          FQ = WQ.length;
        if (sQ != FQ && !(zQ && FQ > sQ)) return !1;
        var PQ = TQ.get(QQ);
        if (PQ && TQ.get(WQ)) return PQ == WQ;
        var gQ = -1,
          JQ = !0,
          rQ = 1 & qQ ? new HW : void 0;
        for (TQ.set(QQ, WQ), TQ.set(WQ, QQ); ++gQ < sQ;) {
          var IQ = QQ[gQ],
            jQ = WQ[gQ];
          if (wQ) var BQ = zQ ? wQ(jQ, IQ, gQ, WQ, QQ, TQ) : wQ(IQ, jQ, gQ, QQ, WQ, TQ);
          if (void 0 !== BQ) {
            if (BQ) continue;
            JQ = !1;
            break
          }
          if (rQ) {
            if (!SQ(WQ, (function(QQ, WQ) {
                if (!rQ.has(WQ) && (IQ === QQ || XQ(IQ, QQ, wQ, qQ, TQ))) return rQ.add(WQ)
              }))) {
              JQ = !1;
              break
            }
          } else if (IQ !== jQ && !XQ(IQ, jQ, wQ, qQ, TQ)) {
            JQ = !1;
            break
          }
        }
        return TQ.delete(QQ), TQ.delete(WQ), JQ
      }

      function tW(QQ, WQ) {
        var XQ = QQ.__data__;
        return function(QQ) {
          var WQ = typeof QQ;
          return "string" == WQ || "number" == WQ || "symbol" == WQ || "boolean" == WQ ? "__proto__" !== QQ : null === QQ
        }(WQ) ? XQ["string" == typeof WQ ? "string" : "hash"] : XQ.map
      }

      function oW(QQ, WQ) {
        var XQ = function(QQ, WQ) {
          return null == QQ ? void 0 : QQ[WQ]
        }(QQ, WQ);
        return uW(XQ) ? XQ : void 0
      }
      var eW = function(QQ) {
        return MQ.call(QQ)
      };

      function nW(QQ, WQ) {
        return !!(WQ = null == WQ ? wQ : WQ) && ("number" == typeof QQ || hQ.test(QQ)) && QQ > -1 && QQ % 1 == 0 && QQ < WQ
      }

      function xW(QQ, WQ) {
        if (WX(QQ)) return !1;
        var XQ = typeof QQ;
        return !("number" != XQ && "symbol" != XQ && "boolean" != XQ && null != QQ && !sX(QQ)) || (vQ.test(QQ) || !bQ.test(QQ) || null != WQ && QQ in Object(WQ))
      }

      function YW(QQ) {
        return QQ === QQ && !TX(QQ)
      }

      function NW(QQ, WQ) {
        return function(XQ) {
          return null != XQ && (XQ[QQ] === WQ && (void 0 !== WQ || QQ in Object(XQ)))
        }
      }(FW && eW(new FW(new ArrayBuffer(1))) != UQ || PW && eW(new PW) != JQ || gW && eW(gW.resolve()) != jQ || JW && eW(new JW) != yQ || rW && eW(new rW) != pQ) && (eW = function(QQ) {
        var WQ = MQ.call(QQ),
          XQ = WQ == IQ ? QQ.constructor : void 0,
          wQ = XQ ? KW(XQ) : void 0;
        if (wQ) switch (wQ) {
          case jW:
            return UQ;
          case BW:
            return JQ;
          case yW:
            return jQ;
          case VW:
            return yQ;
          case DW:
            return pQ
        }
        return WQ
      });
      var ZW = mW((function(QQ) {
        var WQ;
        QQ = null == (WQ = QQ) ? "" : function(QQ) {
          if ("string" == typeof QQ) return QQ;
          if (sX(QQ)) return UW ? UW.call(QQ) : "";
          var WQ = QQ + "";
          return "0" == WQ && 1 / QQ == -1 / 0 ? "-0" : WQ
        }(WQ);
        var XQ = [];
        return dQ.test(QQ) && XQ.push(""), QQ.replace(HQ, (function(QQ, WQ, wQ, qQ) {
          XQ.push(wQ ? qQ.replace(aQ, "$1") : WQ || QQ)
        })), XQ
      }));

      function OW(QQ) {
        if ("string" == typeof QQ || sX(QQ)) return QQ;
        var WQ = QQ + "";
        return "0" == WQ && 1 / QQ == -1 / 0 ? "-0" : WQ
      }

      function KW(QQ) {
        if (null != QQ) {
          try {
            return KQ.call(QQ)
          } catch (WQ) {}
          try {
            return QQ + ""
          } catch (WQ) {}
        }
        return ""
      }

      function mW(QQ, WQ) {
        if ("function" != typeof QQ || WQ && "function" != typeof WQ) throw new TypeError("Expected a function");
        var XQ = function() {
          var wQ = arguments,
            qQ = WQ ? WQ.apply(this, wQ) : wQ[0],
            TQ = XQ.cache;
          if (TQ.has(qQ)) return TQ.get(qQ);
          var zQ = QQ.apply(this, wQ);
          return XQ.cache = TQ.set(qQ, zQ), zQ
        };
        return XQ.cache = new(mW.Cache || dW), XQ
      }

      function MW(QQ, WQ) {
        return QQ === WQ || QQ !== QQ && WQ !== WQ
      }

      function QX(QQ) {
        return function(QQ) {
          return zX(QQ) && XX(QQ)
        }(QQ) && mQ.call(QQ, "callee") && (!TW.call(QQ, "callee") || MQ.call(QQ) == TQ)
      }
      mW.Cache = dW;
      var WX = Array.isArray;

      function XX(QQ) {
        return null != QQ && qX(QQ.length) && !wX(QQ)
      }

      function wX(QQ) {
        var WQ = TX(QQ) ? MQ.call(QQ) : "";
        return WQ == gQ || "[object GeneratorFunction]" == WQ
      }

      function qX(QQ) {
        return "number" == typeof QQ && QQ > -1 && QQ % 1 == 0 && QQ <= wQ
      }

      function TX(QQ) {
        var WQ = typeof QQ;
        return !!QQ && ("object" == WQ || "function" == WQ)
      }

      function zX(QQ) {
        return !!QQ && "object" == typeof QQ
      }

      function sX(QQ) {
        return "symbol" == typeof QQ || zX(QQ) && MQ.call(QQ) == DQ
      }
      var FX, PX = kQ ? (FX = kQ, function(QQ) {
        return FX(QQ)
      }) : function(QQ) {
        return zX(QQ) && qX(QQ.length) && !!iQ[MQ.call(QQ)]
      };

      function gX(QQ) {
        return XX(QQ) ? lW(QQ) : kW(QQ)
      }

      function JX(QQ) {
        return QQ
      }
      QQ.exports = function(QQ, WQ, XQ) {
        var wQ, qQ = WX(QQ) || PX(QQ);
        if (WQ = LW(WQ), null == XQ)
          if (qQ || TX(QQ)) {
            var TQ = QQ.constructor;
            XQ = qQ ? WX(QQ) ? new TQ : [] : wX(TQ) ? TX(wQ = wW(QQ)) ? qW(wQ) : {} : {}
          } else XQ = {};
        return (qQ ? fQ : AW)(QQ, (function(QQ, wQ, qQ) {
          return WQ(XQ, QQ, wQ, qQ)
        })), XQ
      }
    }(LT, LT.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      l: kT
    } = wQ
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);