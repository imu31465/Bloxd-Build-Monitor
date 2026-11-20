export const id = 141;
export const ids = [141];
export const modules = {
  7745: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PE,
      g: () => Xg
    });
    var tU = {};
    gU.r(tU), gU.d(tU, {
      b: () => tt,
      g: () => Pt,
      c: () => Et,
      i: () => Dg,
      k: () => Mg,
      o: () => Zt,
      q: () => lg,
      u: () => Vt,
      v: () => It,
      y: () => Bt,
      z: () => Lg,
      D: () => wt,
      H: () => ot,
      K: () => Yt,
      O: () => Ng,
      M: () => Rt,
      Q: () => bt,
      R: () => nt
    });
    var pU = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function EU(UU) {
      return UU && UU.__esModule && Object.prototype.hasOwnProperty.call(UU, "default") ? UU.default : UU
    }
    var PU = {
      exports: {}
    };
    ! function(UU) {
      var RU = Object.prototype.hasOwnProperty,
        gU = "~";

      function tU() {}

      function pU(UU, RU, gU) {
        this.Au = UU, this.context = RU, this.once = gU || !1
      }

      function EU(UU, RU, tU, EU, PU) {
        if ("function" !== typeof tU) throw new TypeError("The listener must be a function");
        var TU = new pU(tU, EU || UU, PU),
          qU = gU ? gU + RU : RU;
        return UU._events[qU] ? UU._events[qU].Au ? UU._events[qU] = [UU._events[qU], TU] : UU._events[qU].push(TU) : (UU._events[qU] = TU, UU._eventsCount++), UU
      }

      function PU(UU, RU) {
        0 === --UU._eventsCount ? UU._events = new tU : delete UU._events[RU]
      }

      function TU() {
        this._events = new tU, this._eventsCount = 0
      }
      Object.create && (tU.prototype = Object.create(null), (new tU).__proto__ || (gU = !1)), TU.prototype.eventNames = function() {
        var UU, tU, pU = [];
        if (0 === this._eventsCount) return pU;
        for (tU in UU = this._events) RU.call(UU, tU) && pU.push(gU ? tU.slice(1) : tU);
        return Object.getOwnPropertySymbols ? pU.concat(Object.getOwnPropertySymbols(UU)) : pU
      }, TU.prototype.listeners = function(UU) {
        var RU = gU ? gU + UU : UU,
          tU = this._events[RU];
        if (!tU) return [];
        if (tU.Au) return [tU.Au];
        for (var pU = 0, EU = tU.length, PU = new Array(EU); pU < EU; pU++) PU[pU] = tU[pU].Au;
        return PU
      }, TU.prototype.listenerCount = function(UU) {
        var RU = gU ? gU + UU : UU,
          tU = this._events[RU];
        return tU ? tU.Au ? 1 : tU.length : 0
      }, TU.prototype.emit = function(UU, RU, tU, pU, EU, PU) {
        var TU = gU ? gU + UU : UU;
        if (!this._events[TU]) return !1;
        var qU, KU, cU = this._events[TU],
          GU = arguments.length;
        if (cU.Au) {
          switch (cU.once && this.removeListener(UU, cU.Au, void 0, !0), GU) {
            case 1:
              return cU.Au.call(cU.context), !0;
            case 2:
              return cU.Au.call(cU.context, RU), !0;
            case 3:
              return cU.Au.call(cU.context, RU, tU), !0;
            case 4:
              return cU.Au.call(cU.context, RU, tU, pU), !0;
            case 5:
              return cU.Au.call(cU.context, RU, tU, pU, EU), !0;
            case 6:
              return cU.Au.call(cU.context, RU, tU, pU, EU, PU), !0
          }
          for (KU = 1, qU = new Array(GU - 1); KU < GU; KU++) qU[KU - 1] = arguments[KU];
          cU.Au.apply(cU.context, qU)
        } else {
          var jU, uU = cU.length;
          for (KU = 0; KU < uU; KU++) switch (cU[KU].once && this.removeListener(UU, cU[KU].Au, void 0, !0), GU) {
            case 1:
              cU[KU].Au.call(cU[KU].context);
              break;
            case 2:
              cU[KU].Au.call(cU[KU].context, RU);
              break;
            case 3:
              cU[KU].Au.call(cU[KU].context, RU, tU);
              break;
            case 4:
              cU[KU].Au.call(cU[KU].context, RU, tU, pU);
              break;
            default:
              if (!qU)
                for (jU = 1, qU = new Array(GU - 1); jU < GU; jU++) qU[jU - 1] = arguments[jU];
              cU[KU].Au.apply(cU[KU].context, qU)
          }
        }
        return !0
      }, TU.prototype.on = function(UU, RU, gU) {
        return EU(this, UU, RU, gU, !1)
      }, TU.prototype.once = function(UU, RU, gU) {
        return EU(this, UU, RU, gU, !0)
      }, TU.prototype.removeListener = function(UU, RU, tU, pU) {
        var EU = gU ? gU + UU : UU;
        if (!this._events[EU]) return this;
        if (!RU) return PU(this, EU), this;
        var TU = this._events[EU];
        if (TU.Au) TU.Au !== RU || pU && !TU.once || tU && TU.context !== tU || PU(this, EU);
        else {
          for (var qU = 0, KU = [], cU = TU.length; qU < cU; qU++)(TU[qU].Au !== RU || pU && !TU[qU].once || tU && TU[qU].context !== tU) && KU.push(TU[qU]);
          KU.length ? this._events[EU] = 1 === KU.length ? KU[0] : KU : PU(this, EU)
        }
        return this
      }, TU.prototype.fW = function(UU) {
        var RU;
        return UU ? (RU = gU ? gU + UU : UU, this._events[RU] && PU(this, RU)) : (this._events = new tU, this._eventsCount = 0), this
      }, TU.prototype.off = TU.prototype.removeListener, TU.prototype.addListener = TU.prototype.on, TU.prefixed = gU, TU.EventEmitter = TU, UU.exports = TU
    }(PU);
    var TU, qU, KU = EU(PU.exports);
    ! function(UU) {
      UU.assertEqual = UU => UU, UU.assertIs = function(UU) {}, UU.assertNever = function(UU) {
        throw new Error
      }, UU.arrayToEnum = UU => {
        const RU = {};
        for (const gU of UU) RU[gU] = gU;
        return RU
      }, UU.getValidEnumValues = RU => {
        const gU = UU.objectKeys(RU).filter((UU => "number" !== typeof RU[RU[UU]])),
          tU = {};
        for (const UU of gU) tU[UU] = RU[UU];
        return UU.objectValues(tU)
      }, UU.objectValues = RU => UU.objectKeys(RU).map((function(UU) {
        return RU[UU]
      })), UU.objectKeys = "function" === typeof Object.keys ? UU => Object.keys(UU) : UU => {
        const RU = [];
        for (const gU in UU) Object.prototype.hasOwnProperty.call(UU, gU) && RU.push(gU);
        return RU
      }, UU.find = (UU, RU) => {
        for (const gU of UU)
          if (RU(gU)) return gU
      }, UU.isInteger = "function" === typeof Number.isInteger ? UU => Number.isInteger(UU) : UU => "number" === typeof UU && isFinite(UU) && Math.floor(UU) === UU, UU.joinValues = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return UU.map((UU => "string" === typeof UU ? `'${UU}'` : UU)).join(RU)
      }, UU.jsonStringifyReplacer = (UU, RU) => "bigint" === typeof RU ? RU.toString() : RU
    }(TU || (TU = {})),
    function(UU) {
      UU.mergeShapes = (UU, RU) => ({
        ...UU,
        ...RU
      })
    }(qU || (qU = {}));
    const cU = TU.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      GU = UU => {
        switch (typeof UU) {
          case "undefined":
            return cU.undefined;
          case "string":
            return cU.string;
          case "number":
            return isNaN(UU) ? cU.nan : cU.number;
          case "boolean":
            return cU.boolean;
          case "function":
            return cU.function;
          case "bigint":
            return cU.bigint;
          case "symbol":
            return cU.symbol;
          case "object":
            return Array.isArray(UU) ? cU.array : null === UU ? cU.null : UU.then && "function" === typeof UU.then && UU.catch && "function" === typeof UU.catch ? cU.promise : "undefined" !== typeof Map && UU instanceof Map ? cU.map : "undefined" !== typeof Set && UU instanceof Set ? cU.set : "undefined" !== typeof Date && UU instanceof Date ? cU.date : cU.object;
          default:
            return cU.unknown
        }
      },
      jU = TU.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class uU extends Error {
      constructor(UU) {
        var RU;
        super(), RU = this, this.issues = [], this.addIssue = UU => {
          this.issues = [...this.issues, UU]
        }, this.addIssues = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          RU.issues = [...RU.issues, ...UU]
        };
        const gU = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, gU) : this.__proto__ = gU, this.name = "ZodError", this.issues = UU
      }
      get errors() {
        return this.issues
      }
      format(UU) {
        const RU = UU || function(UU) {
            return UU.message
          },
          gU = {
            _errors: []
          },
          tU = UU => {
            for (const pU of UU.issues)
              if ("invalid_union" === pU.code) pU.unionErrors.map(tU);
              else if ("invalid_return_type" === pU.code) tU(pU.returnTypeError);
            else if ("invalid_arguments" === pU.code) tU(pU.argumentsError);
            else if (0 === pU.path.length) gU._errors.push(RU(pU));
            else {
              let UU = gU,
                tU = 0;
              for (; tU < pU.path.length;) {
                const gU = pU.path[tU];
                tU === pU.path.length - 1 ? (UU[gU] = UU[gU] || {
                  _errors: []
                }, UU[gU]._errors.push(RU(pU))) : UU[gU] = UU[gU] || {
                  _errors: []
                }, UU = UU[gU], tU++
              }
            }
          };
        return tU(this), gU
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, TU.jsonStringifyReplacer, 2)
      }
      get Lu() {
        return 0 === this.issues.length
      }
      flatten() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UU => UU.message;
        const RU = {},
          gU = [];
        for (const tU of this.issues) tU.path.length > 0 ? (RU[tU.path[0]] = RU[tU.path[0]] || [], RU[tU.path[0]].push(UU(tU))) : gU.push(UU(tU));
        return {
          formErrors: gU,
          fieldErrors: RU
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    uU.create = UU => new uU(UU);
    const CU = (UU, RU) => {
      let gU;
      switch (UU.code) {
        case jU.invalid_type:
          gU = UU.received === cU.undefined ? "Required" : `Expected ${UU.expected}, received ${UU.received}`;
          break;
        case jU.invalid_literal:
          gU = `Invalid literal value, expected ${JSON.stringify(UU.expected,TU.jsonStringifyReplacer)}`;
          break;
        case jU.unrecognized_keys:
          gU = `Unrecognized key(s) in object: ${TU.joinValues(UU.keys,", ")}`;
          break;
        case jU.invalid_union:
          gU = "Invalid input";
          break;
        case jU.invalid_union_discriminator:
          gU = `Invalid discriminator value. Expected ${TU.joinValues(UU.options)}`;
          break;
        case jU.invalid_enum_value:
          gU = `Invalid enum value. Expected ${TU.joinValues(UU.options)}, received '${UU.received}'`;
          break;
        case jU.invalid_arguments:
          gU = "Invalid function arguments";
          break;
        case jU.invalid_return_type:
          gU = "Invalid function return type";
          break;
        case jU.invalid_date:
          gU = "Invalid date";
          break;
        case jU.invalid_string:
          "object" === typeof UU.validation ? "includes" in UU.validation ? (gU = `Invalid input: must include "${UU.validation.includes}"`, "number" === typeof UU.validation.position && (gU = `${gU} at one or more positions greater than or equal to ${UU.validation.position}`)) : "startsWith" in UU.validation ? gU = `Invalid input: must start with "${UU.validation.startsWith}"` : "endsWith" in UU.validation ? gU = `Invalid input: must end with "${UU.validation.endsWith}"` : TU.assertNever(UU.validation) : gU = "regex" !== UU.validation ? `Invalid ${UU.validation}` : "Invalid";
          break;
        case jU.too_small:
          gU = "array" === UU.type ? `Array must contain ${UU.exact?"exactly":UU.inclusive?"at least":"more than"} ${UU.minimum} element(s)` : "string" === UU.type ? `String must contain ${UU.exact?"exactly":UU.inclusive?"at least":"over"} ${UU.minimum} character(s)` : "number" === UU.type ? `Number must be ${UU.exact?"exactly equal to ":UU.inclusive?"greater than or equal to ":"greater than "}${UU.minimum}` : "date" === UU.type ? `Date must be ${UU.exact?"exactly equal to ":UU.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(UU.minimum))}` : "Invalid input";
          break;
        case jU.too_big:
          gU = "array" === UU.type ? `Array must contain ${UU.exact?"exactly":UU.inclusive?"at most":"less than"} ${UU.maximum} element(s)` : "string" === UU.type ? `String must contain ${UU.exact?"exactly":UU.inclusive?"at most":"under"} ${UU.maximum} character(s)` : "number" === UU.type ? `Number must be ${UU.exact?"exactly":UU.inclusive?"less than or equal to":"less than"} ${UU.maximum}` : "bigint" === UU.type ? `BigInt must be ${UU.exact?"exactly":UU.inclusive?"less than or equal to":"less than"} ${UU.maximum}` : "date" === UU.type ? `Date must be ${UU.exact?"exactly":UU.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(UU.maximum))}` : "Invalid input";
          break;
        case jU.custom:
          gU = "Invalid input";
          break;
        case jU.invalid_intersection_types:
          gU = "Intersection results could not be merged";
          break;
        case jU.not_multiple_of:
          gU = `Number must be a multiple of ${UU.multipleOf}`;
          break;
        case jU.not_finite:
          gU = "Number must be finite";
          break;
        default:
          gU = RU.defaultError, TU.assertNever(UU)
      }
      return {
        message: gU
      }
    };
    let hU = CU;

    function QU() {
      return hU
    }
    const eU = UU => {
      const {
        data: RU,
        path: gU,
        errorMaps: tU,
        issueData: pU
      } = UU, EU = [...gU, ...pU.path || []], PU = {
        ...pU,
        path: EU
      };
      let TU = "";
      const qU = tU.filter((UU => !!UU)).slice().reverse();
      for (const KU of qU) TU = KU(PU, {
        data: RU,
        defaultError: TU
      }).message;
      return {
        ...pU,
        path: EU,
        message: pU.message || TU
      }
    };

    function WU(UU, RU) {
      const gU = eU({
        issueData: RU,
        data: UU.data,
        path: UU.path,
        errorMaps: [UU.common.contextualErrorMap, UU.schemaErrorMap, QU(), CU].filter((UU => !!UU))
      });
      UU.common.issues.push(gU)
    }
    class fU {
      constructor() {
        this.value = "valid"
      }
      nC() {
        "valid" === this.value && (this.value = "nC")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(UU, RU) {
        const gU = [];
        for (const tU of RU) {
          if ("aborted" === tU.status) return xU;
          "nC" === tU.status && UU.nC(), gU.push(tU.value)
        }
        return {
          status: UU.value,
          value: gU
        }
      }
      static async mergeObjectAsync(UU, RU) {
        const gU = [];
        for (const tU of RU) gU.push({
          key: await tU.key,
          value: await tU.value
        });
        return fU.mergeObjectSync(UU, gU)
      }
      static mergeObjectSync(UU, RU) {
        const gU = {};
        for (const tU of RU) {
          const {
            key: RU,
            value: pU
          } = tU;
          if ("aborted" === RU.status) return xU;
          if ("aborted" === pU.status) return xU;
          "nC" === RU.status && UU.nC(), "nC" === pU.status && UU.nC(), "__proto__" === RU.value || "undefined" === typeof pU.value && !tU.alwaysSet || (gU[RU.value] = pU.value)
        }
        return {
          status: UU.value,
          value: gU
        }
      }
    }
    const xU = Object.freeze({
        status: "aborted"
      }),
      mU = UU => ({
        status: "nC",
        value: UU
      }),
      IU = UU => ({
        status: "valid",
        value: UU
      }),
      JU = UU => "aborted" === UU.status,
      wU = UU => "nC" === UU.status,
      nU = UU => "valid" === UU.status,
      bU = UU => "undefined" !== typeof Promise && UU instanceof Promise;
    var oU;
    ! function(UU) {
      UU.errToObj = UU => "string" === typeof UU ? {
        message: UU
      } : UU || {}, UU.toString = UU => "string" === typeof UU ? UU : null === UU || void 0 === UU ? void 0 : UU.message
    }(oU || (oU = {}));
    class ZU {
      constructor(UU, RU, gU, tU) {
        this._cachedPath = [], this.parent = UU, this.data = RU, this._path = gU, this._key = tU
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const aU = (UU, RU) => {
      if (nU(RU)) return {
        success: !0,
        data: RU.value
      };
      if (!UU.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const RU = new uU(UU.common.issues);
          return this._error = RU, this._error
        }
      }
    };

    function YU(UU) {
      if (!UU) return {};
      const {
        errorMap: RU,
        invalid_type_error: gU,
        required_error: tU,
        description: pU
      } = UU;
      if (RU && (gU || tU)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (RU) return {
        errorMap: RU,
        description: pU
      };
      return {
        errorMap: (UU, RU) => "invalid_type" !== UU.code ? {
          message: RU.defaultError
        } : "undefined" === typeof RU.data ? {
          message: null !== tU && void 0 !== tU ? tU : RU.defaultError
        } : {
          message: null !== gU && void 0 !== gU ? gU : RU.defaultError
        },
        description: pU
      }
    }
    class BU {
      constructor(UU) {
        this.spa = this.safeParseAsync, this._def = UU, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(UU) {
        return GU(UU.data)
      }
      _getOrReturnCtx(UU, RU) {
        return RU || {
          common: UU.parent.common,
          data: UU.data,
          parsedType: GU(UU.data),
          schemaErrorMap: this._def.errorMap,
          path: UU.path,
          parent: UU.parent
        }
      }
      _processInputParams(UU) {
        return {
          status: new fU,
          ctx: {
            common: UU.parent.common,
            data: UU.data,
            parsedType: GU(UU.data),
            schemaErrorMap: this._def.errorMap,
            path: UU.path,
            parent: UU.parent
          }
        }
      }
      _parseSync(UU) {
        const RU = this._parse(UU);
        if (bU(RU)) throw new Error("Synchronous parse encountered promise.");
        return RU
      }
      _parseAsync(UU) {
        const RU = this._parse(UU);
        return Promise.resolve(RU)
      }
      parse(UU, RU) {
        const gU = this.safeParse(UU, RU);
        if (gU.success) return gU.data;
        throw gU.error
      }
      safeParse(UU, RU) {
        var gU;
        const tU = {
            common: {
              issues: [],
              async: null !== (gU = null === RU || void 0 === RU ? void 0 : RU.async) && void 0 !== gU && gU,
              contextualErrorMap: null === RU || void 0 === RU ? void 0 : RU.errorMap
            },
            path: (null === RU || void 0 === RU ? void 0 : RU.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: UU,
            parsedType: GU(UU)
          },
          pU = this._parseSync({
            data: UU,
            path: tU.path,
            parent: tU
          });
        return aU(tU, pU)
      }
      async parseAsync(UU, RU) {
        const gU = await this.safeParseAsync(UU, RU);
        if (gU.success) return gU.data;
        throw gU.error
      }
      async safeParseAsync(UU, RU) {
        const gU = {
            common: {
              issues: [],
              contextualErrorMap: null === RU || void 0 === RU ? void 0 : RU.errorMap,
              async: !0
            },
            path: (null === RU || void 0 === RU ? void 0 : RU.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: UU,
            parsedType: GU(UU)
          },
          tU = this._parse({
            data: UU,
            path: gU.path,
            parent: gU
          }),
          pU = await (bU(tU) ? tU : Promise.resolve(tU));
        return aU(gU, pU)
      }
      refine(UU, RU) {
        const gU = UU => "string" === typeof RU || "undefined" === typeof RU ? {
          message: RU
        } : "function" === typeof RU ? RU(UU) : RU;
        return this._refinement(((RU, tU) => {
          const pU = UU(RU),
            EU = () => tU.addIssue({
              code: jU.custom,
              ...gU(RU)
            });
          return "undefined" !== typeof Promise && pU instanceof Promise ? pU.then((UU => !!UU || (EU(), !1))) : !!pU || (EU(), !1)
        }))
      }
      refinement(UU, RU) {
        return this._refinement(((gU, tU) => !!UU(gU) || (tU.addIssue("function" === typeof RU ? RU(gU, tU) : RU), !1)))
      }
      _refinement(UU) {
        return new xR({
          schema: this,
          typeName: VR.ZodEffects,
          effect: {
            type: "refinement",
            refinement: UU
          }
        })
      }
      superRefine(UU) {
        return this._refinement(UU)
      }
      optional() {
        return mR.create(this, this._def)
      }
      nullable() {
        return IR.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return RR.create(this, this._def)
      }
      promise() {
        return fR.create(this, this._def)
      }
      or(UU) {
        return pR.create([this, UU], this._def)
      }
      and(UU) {
        return qR.create(this, UU, this._def)
      }
      transform(UU) {
        return new xR({
          ...YU(this._def),
          schema: this,
          typeName: VR.ZodEffects,
          effect: {
            type: "transform",
            transform: UU
          }
        })
      }
      default (UU) {
        const RU = "function" === typeof UU ? UU : () => UU;
        return new JR({
          ...YU(this._def),
          innerType: this,
          defaultValue: RU,
          typeName: VR.ZodDefault
        })
      }
      brand() {
        return new oR({
          typeName: VR.ZodBranded,
          type: this,
          ...YU(this._def)
        })
      } catch (UU) {
        const RU = "function" === typeof UU ? UU : () => UU;
        return new wR({
          ...YU(this._def),
          innerType: this,
          catchValue: RU,
          typeName: VR.ZodCatch
        })
      }
      describe(UU) {
        return new(0, this.constructor)({
          ...this._def,
          description: UU
        })
      }
      pipe(UU) {
        return ZR.create(this, UU)
      }
      readonly() {
        return aR.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const VU = /^c[^\s-]{8,}$/i,
      rU = /^[a-z][a-z0-9]*$/,
      XU = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      vU = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      dU = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let HU;
    const SU = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      sU = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class yU extends BU {
      _parse(UU) {
        this._def.coerce && (UU.data = String(UU.data));
        if (this._getType(UU) !== cU.string) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.string,
            received: RU.parsedType
          }), xU
        }
        const RU = new fU;
        let gU;
        for (const qU of this._def.checks)
          if ("min" === qU.kind) UU.data.length < qU.value && (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
            code: jU.too_small,
            minimum: qU.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: qU.message
          }), RU.nC());
          else if ("max" === qU.kind) UU.data.length > qU.value && (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          code: jU.too_big,
          maximum: qU.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: qU.message
        }), RU.nC());
        else if ("length" === qU.kind) {
          const tU = UU.data.length > qU.value,
            pU = UU.data.length < qU.value;
          (tU || pU) && (gU = this._getOrReturnCtx(UU, gU), tU ? WU(gU, {
            code: jU.too_big,
            maximum: qU.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: qU.message
          }) : pU && WU(gU, {
            code: jU.too_small,
            minimum: qU.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: qU.message
          }), RU.nC())
        } else if ("email" === qU.kind) dU.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "email",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC());
        else if ("emoji" === qU.kind) HU || (HU = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), HU.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "emoji",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC());
        else if ("uuid" === qU.kind) vU.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "uuid",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC());
        else if ("cuid" === qU.kind) VU.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "cuid",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC());
        else if ("cuid2" === qU.kind) rU.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "cuid2",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC());
        else if ("ulid" === qU.kind) XU.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "ulid",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC());
        else if ("url" === qU.kind) try {
          new URL(UU.data)
        } catch (PU) {
          gU = this._getOrReturnCtx(UU, gU), WU(gU, {
            validation: "url",
            code: jU.invalid_string,
            message: qU.message
          }), RU.nC()
        } else if ("regex" === qU.kind) {
          qU.regex.lastIndex = 0;
          qU.regex.test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
            validation: "regex",
            code: jU.invalid_string,
            message: qU.message
          }), RU.nC())
        } else if ("trim" === qU.kind) UU.data = UU.data.trim();
        else if ("includes" === qU.kind) UU.data.includes(qU.value, qU.position) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          code: jU.invalid_string,
          validation: {
            includes: qU.value,
            position: qU.position
          },
          message: qU.message
        }), RU.nC());
        else if ("toLowerCase" === qU.kind) UU.data = UU.data.toLowerCase();
        else if ("toUpperCase" === qU.kind) UU.data = UU.data.toUpperCase();
        else if ("startsWith" === qU.kind) UU.data.startsWith(qU.value) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          code: jU.invalid_string,
          validation: {
            startsWith: qU.value
          },
          message: qU.message
        }), RU.nC());
        else if ("endsWith" === qU.kind) UU.data.endsWith(qU.value) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          code: jU.invalid_string,
          validation: {
            endsWith: qU.value
          },
          message: qU.message
        }), RU.nC());
        else if ("datetime" === qU.kind) {
          ((EU = qU).precision ? EU.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${EU.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${EU.precision}}Z$`) : 0 === EU.precision ? EU.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : EU.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(UU.data) || (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
            code: jU.invalid_string,
            validation: "datetime",
            message: qU.message
          }), RU.nC())
        } else "ip" === qU.kind ? (tU = UU.data, ("v4" !== (pU = qU.version) && pU || !SU.test(tU)) && ("v6" !== pU && pU || !sU.test(tU)) && (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          validation: "ip",
          code: jU.invalid_string,
          message: qU.message
        }), RU.nC())) : TU.assertNever(qU);
        var tU, pU, EU;
        return {
          status: RU.value,
          value: UU.data
        }
      }
      _regex(UU, RU, gU) {
        return this.refinement((RU => UU.test(RU)), {
          validation: RU,
          code: jU.invalid_string,
          ...oU.errToObj(gU)
        })
      }
      _addCheck(UU) {
        return new yU({
          ...this._def,
          checks: [...this._def.checks, UU]
        })
      }
      email(UU) {
        return this._addCheck({
          kind: "email",
          ...oU.errToObj(UU)
        })
      }
      url(UU) {
        return this._addCheck({
          kind: "url",
          ...oU.errToObj(UU)
        })
      }
      emoji(UU) {
        return this._addCheck({
          kind: "emoji",
          ...oU.errToObj(UU)
        })
      }
      uuid(UU) {
        return this._addCheck({
          kind: "uuid",
          ...oU.errToObj(UU)
        })
      }
      cuid(UU) {
        return this._addCheck({
          kind: "cuid",
          ...oU.errToObj(UU)
        })
      }
      cuid2(UU) {
        return this._addCheck({
          kind: "cuid2",
          ...oU.errToObj(UU)
        })
      }
      ulid(UU) {
        return this._addCheck({
          kind: "ulid",
          ...oU.errToObj(UU)
        })
      }
      ip(UU) {
        return this._addCheck({
          kind: "ip",
          ...oU.errToObj(UU)
        })
      }
      datetime(UU) {
        var RU;
        return "string" === typeof UU ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: UU
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === UU || void 0 === UU ? void 0 : UU.precision) ? null : null === UU || void 0 === UU ? void 0 : UU.precision,
          offset: null !== (RU = null === UU || void 0 === UU ? void 0 : UU.offset) && void 0 !== RU && RU,
          ...oU.errToObj(null === UU || void 0 === UU ? void 0 : UU.message)
        })
      }
      regex(UU, RU) {
        return this._addCheck({
          kind: "regex",
          regex: UU,
          ...oU.errToObj(RU)
        })
      }
      includes(UU, RU) {
        return this._addCheck({
          kind: "includes",
          value: UU,
          position: null === RU || void 0 === RU ? void 0 : RU.position,
          ...oU.errToObj(null === RU || void 0 === RU ? void 0 : RU.message)
        })
      }
      startsWith(UU, RU) {
        return this._addCheck({
          kind: "startsWith",
          value: UU,
          ...oU.errToObj(RU)
        })
      }
      endsWith(UU, RU) {
        return this._addCheck({
          kind: "endsWith",
          value: UU,
          ...oU.errToObj(RU)
        })
      }
      min(UU, RU) {
        return this._addCheck({
          kind: "min",
          value: UU,
          ...oU.errToObj(RU)
        })
      }
      max(UU, RU) {
        return this._addCheck({
          kind: "max",
          value: UU,
          ...oU.errToObj(RU)
        })
      }
      length(UU, RU) {
        return this._addCheck({
          kind: "length",
          value: UU,
          ...oU.errToObj(RU)
        })
      }
      nonempty(UU) {
        return this.min(1, oU.errToObj(UU))
      }
      trim() {
        return new yU({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new yU({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new yU({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((UU => "datetime" === UU.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((UU => "email" === UU.kind))
      }
      get isURL() {
        return !!this._def.checks.find((UU => "url" === UU.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((UU => "emoji" === UU.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((UU => "uuid" === UU.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((UU => "cuid" === UU.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((UU => "cuid2" === UU.kind))
      }
      get isULID() {
        return !!this._def.checks.find((UU => "ulid" === UU.kind))
      }
      get isIP() {
        return !!this._def.checks.find((UU => "ip" === UU.kind))
      }
      get minLength() {
        let UU = null;
        for (const RU of this._def.checks) "min" === RU.kind && (null === UU || RU.value > UU) && (UU = RU.value);
        return UU
      }
      get maxLength() {
        let UU = null;
        for (const RU of this._def.checks) "max" === RU.kind && (null === UU || RU.value < UU) && (UU = RU.value);
        return UU
      }
    }

    function kU(UU, RU) {
      const gU = (UU.toString().split(".")[1] || "").length,
        tU = (RU.toString().split(".")[1] || "").length,
        pU = gU > tU ? gU : tU;
      return parseInt(UU.toFixed(pU).replace(".", "")) % parseInt(RU.toFixed(pU).replace(".", "")) / Math.pow(10, pU)
    }
    yU.create = UU => {
      var RU;
      return new yU({
        checks: [],
        typeName: VR.ZodString,
        coerce: null !== (RU = null === UU || void 0 === UU ? void 0 : UU.coerce) && void 0 !== RU && RU,
        ...YU(UU)
      })
    };
    class FU extends BU {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(UU) {
        this._def.coerce && (UU.data = Number(UU.data));
        if (this._getType(UU) !== cU.number) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.number,
            received: RU.parsedType
          }), xU
        }
        let RU;
        const gU = new fU;
        for (const tU of this._def.checks)
          if ("int" === tU.kind) TU.isInteger(UU.data) || (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
            code: jU.invalid_type,
            expected: "integer",
            received: "float",
            message: tU.message
          }), gU.nC());
          else if ("min" === tU.kind) {
          (tU.inclusive ? UU.data < tU.value : UU.data <= tU.value) && (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
            code: jU.too_small,
            minimum: tU.value,
            type: "number",
            inclusive: tU.inclusive,
            exact: !1,
            message: tU.message
          }), gU.nC())
        } else if ("max" === tU.kind) {
          (tU.inclusive ? UU.data > tU.value : UU.data >= tU.value) && (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
            code: jU.too_big,
            maximum: tU.value,
            type: "number",
            inclusive: tU.inclusive,
            exact: !1,
            message: tU.message
          }), gU.nC())
        } else "multipleOf" === tU.kind ? 0 !== kU(UU.data, tU.value) && (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
          code: jU.not_multiple_of,
          multipleOf: tU.value,
          message: tU.message
        }), gU.nC()) : "finite" === tU.kind ? Number.isFinite(UU.data) || (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
          code: jU.not_finite,
          message: tU.message
        }), gU.nC()) : TU.assertNever(tU);
        return {
          status: gU.value,
          value: UU.data
        }
      }
      gte(UU, RU) {
        return this.setLimit("min", UU, !0, oU.toString(RU))
      }
      gt(UU, RU) {
        return this.setLimit("min", UU, !1, oU.toString(RU))
      }
      lte(UU, RU) {
        return this.setLimit("max", UU, !0, oU.toString(RU))
      }
      lt(UU, RU) {
        return this.setLimit("max", UU, !1, oU.toString(RU))
      }
      setLimit(UU, RU, gU, tU) {
        return new FU({
          ...this._def,
          checks: [...this._def.checks, {
            kind: UU,
            value: RU,
            inclusive: gU,
            message: oU.toString(tU)
          }]
        })
      }
      _addCheck(UU) {
        return new FU({
          ...this._def,
          checks: [...this._def.checks, UU]
        })
      }
      int(UU) {
        return this._addCheck({
          kind: "int",
          message: oU.toString(UU)
        })
      }
      positive(UU) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: oU.toString(UU)
        })
      }
      negative(UU) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: oU.toString(UU)
        })
      }
      nonpositive(UU) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: oU.toString(UU)
        })
      }
      nonnegative(UU) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: oU.toString(UU)
        })
      }
      multipleOf(UU, RU) {
        return this._addCheck({
          kind: "multipleOf",
          value: UU,
          message: oU.toString(RU)
        })
      }
      finite(UU) {
        return this._addCheck({
          kind: "finite",
          message: oU.toString(UU)
        })
      }
      safe(UU) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: oU.toString(UU)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: oU.toString(UU)
        })
      }
      get minValue() {
        let UU = null;
        for (const RU of this._def.checks) "min" === RU.kind && (null === UU || RU.value > UU) && (UU = RU.value);
        return UU
      }
      get maxValue() {
        let UU = null;
        for (const RU of this._def.checks) "max" === RU.kind && (null === UU || RU.value < UU) && (UU = RU.value);
        return UU
      }
      get isInt() {
        return !!this._def.checks.find((UU => "int" === UU.kind || "multipleOf" === UU.kind && TU.isInteger(UU.value)))
      }
      get isFinite() {
        let UU = null,
          RU = null;
        for (const gU of this._def.checks) {
          if ("finite" === gU.kind || "int" === gU.kind || "multipleOf" === gU.kind) return !0;
          "min" === gU.kind ? (null === RU || gU.value > RU) && (RU = gU.value) : "max" === gU.kind && (null === UU || gU.value < UU) && (UU = gU.value)
        }
        return Number.isFinite(RU) && Number.isFinite(UU)
      }
    }
    FU.create = UU => new FU({
      checks: [],
      typeName: VR.ZodNumber,
      coerce: (null === UU || void 0 === UU ? void 0 : UU.coerce) || !1,
      ...YU(UU)
    });
    class iU extends BU {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(UU) {
        this._def.coerce && (UU.data = BigInt(UU.data));
        if (this._getType(UU) !== cU.bigint) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.bigint,
            received: RU.parsedType
          }), xU
        }
        let RU;
        const gU = new fU;
        for (const tU of this._def.checks)
          if ("min" === tU.kind) {
            (tU.inclusive ? UU.data < tU.value : UU.data <= tU.value) && (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
              code: jU.too_small,
              type: "bigint",
              minimum: tU.value,
              inclusive: tU.inclusive,
              message: tU.message
            }), gU.nC())
          } else if ("max" === tU.kind) {
          (tU.inclusive ? UU.data > tU.value : UU.data >= tU.value) && (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
            code: jU.too_big,
            type: "bigint",
            maximum: tU.value,
            inclusive: tU.inclusive,
            message: tU.message
          }), gU.nC())
        } else "multipleOf" === tU.kind ? UU.data % tU.value !== BigInt(0) && (RU = this._getOrReturnCtx(UU, RU), WU(RU, {
          code: jU.not_multiple_of,
          multipleOf: tU.value,
          message: tU.message
        }), gU.nC()) : TU.assertNever(tU);
        return {
          status: gU.value,
          value: UU.data
        }
      }
      gte(UU, RU) {
        return this.setLimit("min", UU, !0, oU.toString(RU))
      }
      gt(UU, RU) {
        return this.setLimit("min", UU, !1, oU.toString(RU))
      }
      lte(UU, RU) {
        return this.setLimit("max", UU, !0, oU.toString(RU))
      }
      lt(UU, RU) {
        return this.setLimit("max", UU, !1, oU.toString(RU))
      }
      setLimit(UU, RU, gU, tU) {
        return new iU({
          ...this._def,
          checks: [...this._def.checks, {
            kind: UU,
            value: RU,
            inclusive: gU,
            message: oU.toString(tU)
          }]
        })
      }
      _addCheck(UU) {
        return new iU({
          ...this._def,
          checks: [...this._def.checks, UU]
        })
      }
      positive(UU) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: oU.toString(UU)
        })
      }
      negative(UU) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: oU.toString(UU)
        })
      }
      nonpositive(UU) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: oU.toString(UU)
        })
      }
      nonnegative(UU) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: oU.toString(UU)
        })
      }
      multipleOf(UU, RU) {
        return this._addCheck({
          kind: "multipleOf",
          value: UU,
          message: oU.toString(RU)
        })
      }
      get minValue() {
        let UU = null;
        for (const RU of this._def.checks) "min" === RU.kind && (null === UU || RU.value > UU) && (UU = RU.value);
        return UU
      }
      get maxValue() {
        let UU = null;
        for (const RU of this._def.checks) "max" === RU.kind && (null === UU || RU.value < UU) && (UU = RU.value);
        return UU
      }
    }
    iU.create = UU => {
      var RU;
      return new iU({
        checks: [],
        typeName: VR.ZodBigInt,
        coerce: null !== (RU = null === UU || void 0 === UU ? void 0 : UU.coerce) && void 0 !== RU && RU,
        ...YU(UU)
      })
    };
    class AU extends BU {
      _parse(UU) {
        this._def.coerce && (UU.data = Boolean(UU.data));
        if (this._getType(UU) !== cU.boolean) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.boolean,
            received: RU.parsedType
          }), xU
        }
        return IU(UU.data)
      }
    }
    AU.create = UU => new AU({
      typeName: VR.ZodBoolean,
      coerce: (null === UU || void 0 === UU ? void 0 : UU.coerce) || !1,
      ...YU(UU)
    });
    class zU extends BU {
      _parse(UU) {
        this._def.coerce && (UU.data = new Date(UU.data));
        if (this._getType(UU) !== cU.date) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.date,
            received: RU.parsedType
          }), xU
        }
        if (isNaN(UU.data.getTime())) {
          return WU(this._getOrReturnCtx(UU), {
            code: jU.invalid_date
          }), xU
        }
        const RU = new fU;
        let gU;
        for (const tU of this._def.checks) "min" === tU.kind ? UU.data.getTime() < tU.value && (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          code: jU.too_small,
          message: tU.message,
          inclusive: !0,
          exact: !1,
          minimum: tU.value,
          type: "date"
        }), RU.nC()) : "max" === tU.kind ? UU.data.getTime() > tU.value && (gU = this._getOrReturnCtx(UU, gU), WU(gU, {
          code: jU.too_big,
          message: tU.message,
          inclusive: !0,
          exact: !1,
          maximum: tU.value,
          type: "date"
        }), RU.nC()) : TU.assertNever(tU);
        return {
          status: RU.value,
          value: new Date(UU.data.getTime())
        }
      }
      _addCheck(UU) {
        return new zU({
          ...this._def,
          checks: [...this._def.checks, UU]
        })
      }
      min(UU, RU) {
        return this._addCheck({
          kind: "min",
          value: UU.getTime(),
          message: oU.toString(RU)
        })
      }
      max(UU, RU) {
        return this._addCheck({
          kind: "max",
          value: UU.getTime(),
          message: oU.toString(RU)
        })
      }
      get minDate() {
        let UU = null;
        for (const RU of this._def.checks) "min" === RU.kind && (null === UU || RU.value > UU) && (UU = RU.value);
        return null != UU ? new Date(UU) : null
      }
      get maxDate() {
        let UU = null;
        for (const RU of this._def.checks) "max" === RU.kind && (null === UU || RU.value < UU) && (UU = RU.value);
        return null != UU ? new Date(UU) : null
      }
    }
    zU.create = UU => new zU({
      checks: [],
      coerce: (null === UU || void 0 === UU ? void 0 : UU.coerce) || !1,
      typeName: VR.ZodDate,
      ...YU(UU)
    });
    class MU extends BU {
      _parse(UU) {
        if (this._getType(UU) !== cU.symbol) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.symbol,
            received: RU.parsedType
          }), xU
        }
        return IU(UU.data)
      }
    }
    MU.create = UU => new MU({
      typeName: VR.ZodSymbol,
      ...YU(UU)
    });
    class DU extends BU {
      _parse(UU) {
        if (this._getType(UU) !== cU.undefined) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.undefined,
            received: RU.parsedType
          }), xU
        }
        return IU(UU.data)
      }
    }
    DU.create = UU => new DU({
      typeName: VR.ZodUndefined,
      ...YU(UU)
    });
    class LU extends BU {
      _parse(UU) {
        if (this._getType(UU) !== cU.null) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.null,
            received: RU.parsedType
          }), xU
        }
        return IU(UU.data)
      }
    }
    LU.create = UU => new LU({
      typeName: VR.ZodNull,
      ...YU(UU)
    });
    class NU extends BU {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(UU) {
        return IU(UU.data)
      }
    }
    NU.create = UU => new NU({
      typeName: VR.ZodAny,
      ...YU(UU)
    });
    class lU extends BU {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(UU) {
        return IU(UU.data)
      }
    }
    lU.create = UU => new lU({
      typeName: VR.ZodUnknown,
      ...YU(UU)
    });
    class OU extends BU {
      _parse(UU) {
        const RU = this._getOrReturnCtx(UU);
        return WU(RU, {
          code: jU.invalid_type,
          expected: cU.never,
          received: RU.parsedType
        }), xU
      }
    }
    OU.create = UU => new OU({
      typeName: VR.ZodNever,
      ...YU(UU)
    });
    class UR extends BU {
      _parse(UU) {
        if (this._getType(UU) !== cU.undefined) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.void,
            received: RU.parsedType
          }), xU
        }
        return IU(UU.data)
      }
    }
    UR.create = UU => new UR({
      typeName: VR.ZodVoid,
      ...YU(UU)
    });
    class RR extends BU {
      _parse(UU) {
        const {
          ctx: RU,
          status: gU
        } = this._processInputParams(UU), tU = this._def;
        if (RU.parsedType !== cU.array) return WU(RU, {
          code: jU.invalid_type,
          expected: cU.array,
          received: RU.parsedType
        }), xU;
        if (null !== tU.exactLength) {
          const UU = RU.data.length > tU.exactLength.value,
            pU = RU.data.length < tU.exactLength.value;
          (UU || pU) && (WU(RU, {
            code: UU ? jU.too_big : jU.too_small,
            minimum: pU ? tU.exactLength.value : void 0,
            maximum: UU ? tU.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: tU.exactLength.message
          }), gU.nC())
        }
        if (null !== tU.minLength && RU.data.length < tU.minLength.value && (WU(RU, {
            code: jU.too_small,
            minimum: tU.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: tU.minLength.message
          }), gU.nC()), null !== tU.maxLength && RU.data.length > tU.maxLength.value && (WU(RU, {
            code: jU.too_big,
            maximum: tU.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: tU.maxLength.message
          }), gU.nC()), RU.common.async) return Promise.all([...RU.data].map(((UU, gU) => tU.type._parseAsync(new ZU(RU, UU, RU.path, gU))))).then((UU => fU.mergeArray(gU, UU)));
        const pU = [...RU.data].map(((UU, gU) => tU.type._parseSync(new ZU(RU, UU, RU.path, gU))));
        return fU.mergeArray(gU, pU)
      }
      get element() {
        return this._def.type
      }
      min(UU, RU) {
        return new RR({
          ...this._def,
          minLength: {
            value: UU,
            message: oU.toString(RU)
          }
        })
      }
      max(UU, RU) {
        return new RR({
          ...this._def,
          maxLength: {
            value: UU,
            message: oU.toString(RU)
          }
        })
      }
      length(UU, RU) {
        return new RR({
          ...this._def,
          exactLength: {
            value: UU,
            message: oU.toString(RU)
          }
        })
      }
      nonempty(UU) {
        return this.min(1, UU)
      }
    }

    function gR(UU) {
      if (UU instanceof tR) {
        const RU = {};
        for (const gU in UU.shape) {
          const tU = UU.shape[gU];
          RU[gU] = mR.create(gR(tU))
        }
        return new tR({
          ...UU._def,
          shape: () => RU
        })
      }
      return UU instanceof RR ? new RR({
        ...UU._def,
        type: gR(UU.element)
      }) : UU instanceof mR ? mR.create(gR(UU.unwrap())) : UU instanceof IR ? IR.create(gR(UU.unwrap())) : UU instanceof KR ? KR.create(UU.items.map((UU => gR(UU)))) : UU
    }
    RR.create = (UU, RU) => new RR({
      type: UU,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: VR.ZodArray,
      ...YU(RU)
    });
    class tR extends BU {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const UU = this._def.shape(),
          RU = TU.objectKeys(UU);
        return this._cached = {
          shape: UU,
          keys: RU
        }
      }
      _parse(UU) {
        if (this._getType(UU) !== cU.object) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.object,
            received: RU.parsedType
          }), xU
        }
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU), {
          shape: tU,
          keys: pU
        } = this._getCached(), EU = [];
        if (!(this._def.catchall instanceof OU && "strip" === this._def.unknownKeys))
          for (const TU in gU.data) pU.includes(TU) || EU.push(TU);
        const PU = [];
        for (const TU of pU) {
          const UU = tU[TU],
            RU = gU.data[TU];
          PU.push({
            key: {
              status: "valid",
              value: TU
            },
            value: UU._parse(new ZU(gU, RU, gU.path, TU)),
            alwaysSet: TU in gU.data
          })
        }
        if (this._def.catchall instanceof OU) {
          const UU = this._def.unknownKeys;
          if ("passthrough" === UU)
            for (const RU of EU) PU.push({
              key: {
                status: "valid",
                value: RU
              },
              value: {
                status: "valid",
                value: gU.data[RU]
              }
            });
          else if ("strict" === UU) EU.length > 0 && (WU(gU, {
            code: jU.unrecognized_keys,
            keys: EU
          }), RU.nC());
          else if ("strip" !== UU) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const UU = this._def.catchall;
          for (const RU of EU) {
            const tU = gU.data[RU];
            PU.push({
              key: {
                status: "valid",
                value: RU
              },
              value: UU._parse(new ZU(gU, tU, gU.path, RU)),
              alwaysSet: RU in gU.data
            })
          }
        }
        return gU.common.async ? Promise.resolve().then((async () => {
          const UU = [];
          for (const RU of PU) {
            const gU = await RU.key;
            UU.push({
              key: gU,
              value: await RU.value,
              alwaysSet: RU.alwaysSet
            })
          }
          return UU
        })).then((UU => fU.mergeObjectSync(RU, UU))) : fU.mergeObjectSync(RU, PU)
      }
      get shape() {
        return this._def.shape()
      }
      strict(UU) {
        return oU.errToObj, new tR({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== UU ? {
            errorMap: (RU, gU) => {
              var tU, pU, EU, PU;
              const TU = null !== (EU = null === (pU = (tU = this._def).errorMap) || void 0 === pU ? void 0 : pU.call(tU, RU, gU).message) && void 0 !== EU ? EU : gU.defaultError;
              return "unrecognized_keys" === RU.code ? {
                message: null !== (PU = oU.errToObj(UU).message) && void 0 !== PU ? PU : TU
              } : {
                message: TU
              }
            }
          } : {}
        })
      }
      strip() {
        return new tR({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new tR({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(UU) {
        return new tR({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...UU
          })
        })
      }
      merge(UU) {
        return new tR({
          unknownKeys: UU._def.unknownKeys,
          catchall: UU._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...UU._def.shape()
          }),
          typeName: VR.ZodObject
        })
      }
      setKey(UU, RU) {
        return this.augment({
          [UU]: RU
        })
      }
      catchall(UU) {
        return new tR({
          ...this._def,
          catchall: UU
        })
      }
      Hj(UU) {
        const RU = {};
        return TU.objectKeys(UU).forEach((gU => {
          UU[gU] && this.shape[gU] && (RU[gU] = this.shape[gU])
        })), new tR({
          ...this._def,
          shape: () => RU
        })
      }
      omit(UU) {
        const RU = {};
        return TU.objectKeys(this.shape).forEach((gU => {
          UU[gU] || (RU[gU] = this.shape[gU])
        })), new tR({
          ...this._def,
          shape: () => RU
        })
      }
      deepPartial() {
        return gR(this)
      }
      partial(UU) {
        const RU = {};
        return TU.objectKeys(this.shape).forEach((gU => {
          const tU = this.shape[gU];
          UU && !UU[gU] ? RU[gU] = tU : RU[gU] = tU.optional()
        })), new tR({
          ...this._def,
          shape: () => RU
        })
      }
      required(UU) {
        const RU = {};
        return TU.objectKeys(this.shape).forEach((gU => {
          if (UU && !UU[gU]) RU[gU] = this.shape[gU];
          else {
            let UU = this.shape[gU];
            for (; UU instanceof mR;) UU = UU._def.innerType;
            RU[gU] = UU
          }
        })), new tR({
          ...this._def,
          shape: () => RU
        })
      }
      keyof() {
        return QR(TU.objectKeys(this.shape))
      }
    }
    tR.create = (UU, RU) => new tR({
      shape: () => UU,
      unknownKeys: "strip",
      catchall: OU.create(),
      typeName: VR.ZodObject,
      ...YU(RU)
    }), tR.strictCreate = (UU, RU) => new tR({
      shape: () => UU,
      unknownKeys: "strict",
      catchall: OU.create(),
      typeName: VR.ZodObject,
      ...YU(RU)
    }), tR.lazycreate = (UU, RU) => new tR({
      shape: UU,
      unknownKeys: "strip",
      catchall: OU.create(),
      typeName: VR.ZodObject,
      ...YU(RU)
    });
    class pR extends BU {
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU), gU = this._def.options;
        if (RU.common.async) return Promise.all(gU.map((async UU => {
          const gU = {
            ...RU,
            common: {
              ...RU.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await UU._parseAsync({
              data: RU.data,
              path: RU.path,
              parent: gU
            }),
            ctx: gU
          }
        }))).then((function(UU) {
          for (const RU of UU)
            if ("valid" === RU.result.status) return RU.result;
          for (const tU of UU)
            if ("nC" === tU.result.status) return RU.common.issues.push(...tU.ctx.common.issues), tU.result;
          const gU = UU.map((UU => new uU(UU.ctx.common.issues)));
          return WU(RU, {
            code: jU.invalid_union,
            unionErrors: gU
          }), xU
        }));
        {
          let UU;
          const tU = [];
          for (const EU of gU) {
            const gU = {
                ...RU,
                common: {
                  ...RU.common,
                  issues: []
                },
                parent: null
              },
              pU = EU._parseSync({
                data: RU.data,
                path: RU.path,
                parent: gU
              });
            if ("valid" === pU.status) return pU;
            "nC" !== pU.status || UU || (UU = {
              result: pU,
              ctx: gU
            }), gU.common.issues.length && tU.push(gU.common.issues)
          }
          if (UU) return RU.common.issues.push(...UU.ctx.common.issues), UU.result;
          const pU = tU.map((UU => new uU(UU)));
          return WU(RU, {
            code: jU.invalid_union,
            unionErrors: pU
          }), xU
        }
      }
      get options() {
        return this._def.options
      }
    }
    pR.create = (UU, RU) => new pR({
      options: UU,
      typeName: VR.ZodUnion,
      ...YU(RU)
    });
    const ER = UU => UU instanceof CR ? ER(UU.schema) : UU instanceof xR ? ER(UU.innerType()) : UU instanceof hR ? [UU.value] : UU instanceof eR ? UU.options : UU instanceof WR ? Object.keys(UU.enum) : UU instanceof JR ? ER(UU._def.innerType) : UU instanceof DU ? [void 0] : UU instanceof LU ? [null] : null;
    class PR extends BU {
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU);
        if (RU.parsedType !== cU.object) return WU(RU, {
          code: jU.invalid_type,
          expected: cU.object,
          received: RU.parsedType
        }), xU;
        const gU = this.discriminator,
          tU = RU.data[gU],
          pU = this.optionsMap.get(tU);
        return pU ? RU.common.async ? pU._parseAsync({
          data: RU.data,
          path: RU.path,
          parent: RU
        }) : pU._parseSync({
          data: RU.data,
          path: RU.path,
          parent: RU
        }) : (WU(RU, {
          code: jU.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [gU]
        }), xU)
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
      static create(UU, RU, gU) {
        const tU = new Map;
        for (const pU of RU) {
          const RU = ER(pU.shape[UU]);
          if (!RU) throw new Error(`A discriminator value for key \`${UU}\` could not be extracted from all schema options`);
          for (const gU of RU) {
            if (tU.has(gU)) throw new Error(`Discriminator property ${String(UU)} has duplicate value ${String(gU)}`);
            tU.set(gU, pU)
          }
        }
        return new PR({
          typeName: VR.ZodDiscriminatedUnion,
          discriminator: UU,
          options: RU,
          optionsMap: tU,
          ...YU(gU)
        })
      }
    }

    function TR(UU, RU) {
      const gU = GU(UU),
        tU = GU(RU);
      if (UU === RU) return {
        valid: !0,
        data: UU
      };
      if (gU === cU.object && tU === cU.object) {
        const gU = TU.objectKeys(RU),
          tU = TU.objectKeys(UU).filter((UU => -1 !== gU.indexOf(UU))),
          pU = {
            ...UU,
            ...RU
          };
        for (const EU of tU) {
          const gU = TR(UU[EU], RU[EU]);
          if (!gU.valid) return {
            valid: !1
          };
          pU[EU] = gU.data
        }
        return {
          valid: !0,
          data: pU
        }
      }
      if (gU === cU.array && tU === cU.array) {
        if (UU.length !== RU.length) return {
          valid: !1
        };
        const gU = [];
        for (let tU = 0; tU < UU.length; tU++) {
          const pU = TR(UU[tU], RU[tU]);
          if (!pU.valid) return {
            valid: !1
          };
          gU.push(pU.data)
        }
        return {
          valid: !0,
          data: gU
        }
      }
      return gU === cU.date && tU === cU.date && +UU === +RU ? {
        valid: !0,
        data: UU
      } : {
        valid: !1
      }
    }
    class qR extends BU {
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU), tU = (UU, tU) => {
          if (JU(UU) || JU(tU)) return xU;
          const pU = TR(UU.value, tU.value);
          return pU.valid ? ((wU(UU) || wU(tU)) && RU.nC(), {
            status: RU.value,
            value: pU.data
          }) : (WU(gU, {
            code: jU.invalid_intersection_types
          }), xU)
        };
        return gU.common.async ? Promise.all([this._def.left._parseAsync({
          data: gU.data,
          path: gU.path,
          parent: gU
        }), this._def.right._parseAsync({
          data: gU.data,
          path: gU.path,
          parent: gU
        })]).then((UU => {
          let [RU, gU] = UU;
          return tU(RU, gU)
        })) : tU(this._def.left._parseSync({
          data: gU.data,
          path: gU.path,
          parent: gU
        }), this._def.right._parseSync({
          data: gU.data,
          path: gU.path,
          parent: gU
        }))
      }
    }
    qR.create = (UU, RU, gU) => new qR({
      left: UU,
      right: RU,
      typeName: VR.ZodIntersection,
      ...YU(gU)
    });
    class KR extends BU {
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU);
        if (gU.parsedType !== cU.array) return WU(gU, {
          code: jU.invalid_type,
          expected: cU.array,
          received: gU.parsedType
        }), xU;
        if (gU.data.length < this._def.items.length) return WU(gU, {
          code: jU.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), xU;
        !this._def.rest && gU.data.length > this._def.items.length && (WU(gU, {
          code: jU.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), RU.nC());
        const tU = [...gU.data].map(((UU, RU) => {
          const tU = this._def.items[RU] || this._def.rest;
          return tU ? tU._parse(new ZU(gU, UU, gU.path, RU)) : null
        })).filter((UU => !!UU));
        return gU.common.async ? Promise.all(tU).then((UU => fU.mergeArray(RU, UU))) : fU.mergeArray(RU, tU)
      }
      get items() {
        return this._def.items
      }
      rest(UU) {
        return new KR({
          ...this._def,
          rest: UU
        })
      }
    }
    KR.create = (UU, RU) => {
      if (!Array.isArray(UU)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new KR({
        items: UU,
        typeName: VR.ZodTuple,
        rest: null,
        ...YU(RU)
      })
    };
    class cR extends BU {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU);
        if (gU.parsedType !== cU.object) return WU(gU, {
          code: jU.invalid_type,
          expected: cU.object,
          received: gU.parsedType
        }), xU;
        const tU = [],
          pU = this._def.keyType,
          EU = this._def.valueType;
        for (const PU in gU.data) tU.push({
          key: pU._parse(new ZU(gU, PU, gU.path, PU)),
          value: EU._parse(new ZU(gU, gU.data[PU], gU.path, PU))
        });
        return gU.common.async ? fU.mergeObjectAsync(RU, tU) : fU.mergeObjectSync(RU, tU)
      }
      get element() {
        return this._def.valueType
      }
      static create(UU, RU, gU) {
        return new cR(RU instanceof BU ? {
          keyType: UU,
          valueType: RU,
          typeName: VR.ZodRecord,
          ...YU(gU)
        } : {
          keyType: yU.create(),
          valueType: UU,
          typeName: VR.ZodRecord,
          ...YU(RU)
        })
      }
    }
    class GR extends BU {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU);
        if (gU.parsedType !== cU.map) return WU(gU, {
          code: jU.invalid_type,
          expected: cU.map,
          received: gU.parsedType
        }), xU;
        const tU = this._def.keyType,
          pU = this._def.valueType,
          EU = [...gU.data.entries()].map(((UU, RU) => {
            let [EU, PU] = UU;
            return {
              key: tU._parse(new ZU(gU, EU, gU.path, [RU, "key"])),
              value: pU._parse(new ZU(gU, PU, gU.path, [RU, "value"]))
            }
          }));
        if (gU.common.async) {
          const UU = new Map;
          return Promise.resolve().then((async () => {
            for (const gU of EU) {
              const tU = await gU.key,
                pU = await gU.value;
              if ("aborted" === tU.status || "aborted" === pU.status) return xU;
              "nC" !== tU.status && "nC" !== pU.status || RU.nC(), UU.set(tU.value, pU.value)
            }
            return {
              status: RU.value,
              value: UU
            }
          }))
        } {
          const UU = new Map;
          for (const gU of EU) {
            const tU = gU.key,
              pU = gU.value;
            if ("aborted" === tU.status || "aborted" === pU.status) return xU;
            "nC" !== tU.status && "nC" !== pU.status || RU.nC(), UU.set(tU.value, pU.value)
          }
          return {
            status: RU.value,
            value: UU
          }
        }
      }
    }
    GR.create = (UU, RU, gU) => new GR({
      valueType: RU,
      keyType: UU,
      typeName: VR.ZodMap,
      ...YU(gU)
    });
    class jR extends BU {
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU);
        if (gU.parsedType !== cU.set) return WU(gU, {
          code: jU.invalid_type,
          expected: cU.set,
          received: gU.parsedType
        }), xU;
        const tU = this._def;
        null !== tU.minSize && gU.data.size < tU.minSize.value && (WU(gU, {
          code: jU.too_small,
          minimum: tU.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: tU.minSize.message
        }), RU.nC()), null !== tU.maxSize && gU.data.size > tU.maxSize.value && (WU(gU, {
          code: jU.too_big,
          maximum: tU.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: tU.maxSize.message
        }), RU.nC());
        const pU = this._def.valueType;

        function EU(UU) {
          const gU = new Set;
          for (const tU of UU) {
            if ("aborted" === tU.status) return xU;
            "nC" === tU.status && RU.nC(), gU.add(tU.value)
          }
          return {
            status: RU.value,
            value: gU
          }
        }
        const PU = [...gU.data.values()].map(((UU, RU) => pU._parse(new ZU(gU, UU, gU.path, RU))));
        return gU.common.async ? Promise.all(PU).then((UU => EU(UU))) : EU(PU)
      }
      min(UU, RU) {
        return new jR({
          ...this._def,
          minSize: {
            value: UU,
            message: oU.toString(RU)
          }
        })
      }
      max(UU, RU) {
        return new jR({
          ...this._def,
          maxSize: {
            value: UU,
            message: oU.toString(RU)
          }
        })
      }
      size(UU, RU) {
        return this.min(UU, RU).max(UU, RU)
      }
      nonempty(UU) {
        return this.min(1, UU)
      }
    }
    jR.create = (UU, RU) => new jR({
      valueType: UU,
      minSize: null,
      maxSize: null,
      typeName: VR.ZodSet,
      ...YU(RU)
    });
    class uR extends BU {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU);
        if (RU.parsedType !== cU.function) return WU(RU, {
          code: jU.invalid_type,
          expected: cU.function,
          received: RU.parsedType
        }), xU;

        function gU(UU, gU) {
          return eU({
            data: UU,
            path: RU.path,
            errorMaps: [RU.common.contextualErrorMap, RU.schemaErrorMap, QU(), CU].filter((UU => !!UU)),
            issueData: {
              code: jU.invalid_arguments,
              argumentsError: gU
            }
          })
        }

        function tU(UU, gU) {
          return eU({
            data: UU,
            path: RU.path,
            errorMaps: [RU.common.contextualErrorMap, RU.schemaErrorMap, QU(), CU].filter((UU => !!UU)),
            issueData: {
              code: jU.invalid_return_type,
              returnTypeError: gU
            }
          })
        }
        const pU = {
            errorMap: RU.common.contextualErrorMap
          },
          EU = RU.data;
        if (this._def.returns instanceof fR) {
          const UU = this;
          return IU((async function() {
            for (var RU = arguments.length, PU = new Array(RU), TU = 0; TU < RU; TU++) PU[TU] = arguments[TU];
            const qU = new uU([]),
              KU = await UU._def.args.parseAsync(PU, pU).catch((UU => {
                throw qU.addIssue(gU(PU, UU)), qU
              })),
              cU = await Reflect.apply(EU, this, KU);
            return await UU._def.returns._def.type.parseAsync(cU, pU).catch((UU => {
              throw qU.addIssue(tU(cU, UU)), qU
            }))
          }))
        } {
          const UU = this;
          return IU((function() {
            for (var RU = arguments.length, PU = new Array(RU), TU = 0; TU < RU; TU++) PU[TU] = arguments[TU];
            const qU = UU._def.args.safeParse(PU, pU);
            if (!qU.success) throw new uU([gU(PU, qU.error)]);
            const KU = Reflect.apply(EU, this, qU.data),
              cU = UU._def.returns.safeParse(KU, pU);
            if (!cU.success) throw new uU([tU(KU, cU.error)]);
            return cU.data
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
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return new uR({
          ...this._def,
          args: KR.create(RU).rest(lU.create())
        })
      }
      returns(UU) {
        return new uR({
          ...this._def,
          returns: UU
        })
      }
      implement(UU) {
        return this.parse(UU)
      }
      strictImplement(UU) {
        return this.parse(UU)
      }
      static create(UU, RU, gU) {
        return new uR({
          args: UU || KR.create([]).rest(lU.create()),
          returns: RU || lU.create(),
          typeName: VR.ZodFunction,
          ...YU(gU)
        })
      }
    }
    class CR extends BU {
      get schema() {
        return this._def.getter()
      }
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU);
        return this._def.getter()._parse({
          data: RU.data,
          path: RU.path,
          parent: RU
        })
      }
    }
    CR.create = (UU, RU) => new CR({
      getter: UU,
      typeName: VR.ZodLazy,
      ...YU(RU)
    });
    class hR extends BU {
      _parse(UU) {
        if (UU.data !== this._def.value) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            received: RU.data,
            code: jU.invalid_literal,
            expected: this._def.value
          }), xU
        }
        return {
          status: "valid",
          value: UU.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function QR(UU, RU) {
      return new eR({
        values: UU,
        typeName: VR.ZodEnum,
        ...YU(RU)
      })
    }
    hR.create = (UU, RU) => new hR({
      value: UU,
      typeName: VR.ZodLiteral,
      ...YU(RU)
    });
    class eR extends BU {
      _parse(UU) {
        if ("string" !== typeof UU.data) {
          const RU = this._getOrReturnCtx(UU),
            gU = this._def.values;
          return WU(RU, {
            expected: TU.joinValues(gU),
            received: RU.parsedType,
            code: jU.invalid_type
          }), xU
        }
        if (-1 === this._def.values.indexOf(UU.data)) {
          const RU = this._getOrReturnCtx(UU),
            gU = this._def.values;
          return WU(RU, {
            received: RU.data,
            code: jU.invalid_enum_value,
            options: gU
          }), xU
        }
        return IU(UU.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const UU = {};
        for (const RU of this._def.values) UU[RU] = RU;
        return UU
      }
      get Values() {
        const UU = {};
        for (const RU of this._def.values) UU[RU] = RU;
        return UU
      }
      get Enum() {
        const UU = {};
        for (const RU of this._def.values) UU[RU] = RU;
        return UU
      }
      extract(UU) {
        return eR.create(UU)
      }
      exclude(UU) {
        return eR.create(this.options.filter((RU => !UU.includes(RU))))
      }
    }
    eR.create = QR;
    class WR extends BU {
      _parse(UU) {
        const RU = TU.getValidEnumValues(this._def.values),
          gU = this._getOrReturnCtx(UU);
        if (gU.parsedType !== cU.string && gU.parsedType !== cU.number) {
          const UU = TU.objectValues(RU);
          return WU(gU, {
            expected: TU.joinValues(UU),
            received: gU.parsedType,
            code: jU.invalid_type
          }), xU
        }
        if (-1 === RU.indexOf(UU.data)) {
          const UU = TU.objectValues(RU);
          return WU(gU, {
            received: gU.data,
            code: jU.invalid_enum_value,
            options: UU
          }), xU
        }
        return IU(UU.data)
      }
      get enum() {
        return this._def.values
      }
    }
    WR.create = (UU, RU) => new WR({
      values: UU,
      typeName: VR.ZodNativeEnum,
      ...YU(RU)
    });
    class fR extends BU {
      unwrap() {
        return this._def.type
      }
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU);
        if (RU.parsedType !== cU.promise && !1 === RU.common.async) return WU(RU, {
          code: jU.invalid_type,
          expected: cU.promise,
          received: RU.parsedType
        }), xU;
        const gU = RU.parsedType === cU.promise ? RU.data : Promise.resolve(RU.data);
        return IU(gU.then((UU => this._def.type.parseAsync(UU, {
          path: RU.path,
          errorMap: RU.common.contextualErrorMap
        }))))
      }
    }
    fR.create = (UU, RU) => new fR({
      type: UU,
      typeName: VR.ZodPromise,
      ...YU(RU)
    });
    class xR extends BU {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === VR.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU), tU = this._def.effect || null, pU = {
          addIssue: UU => {
            WU(gU, UU), UU.fatal ? RU.abort() : RU.nC()
          },
          get path() {
            return gU.path
          }
        };
        if (pU.addIssue = pU.addIssue.bind(pU), "preprocess" === tU.type) {
          const UU = tU.transform(gU.data, pU);
          return gU.common.issues.length ? {
            status: "nC",
            value: gU.data
          } : gU.common.async ? Promise.resolve(UU).then((UU => this._def.schema._parseAsync({
            data: UU,
            path: gU.path,
            parent: gU
          }))) : this._def.schema._parseSync({
            data: UU,
            path: gU.path,
            parent: gU
          })
        }
        if ("refinement" === tU.type) {
          const UU = UU => {
            const RU = tU.refinement(UU, pU);
            if (gU.common.async) return Promise.resolve(RU);
            if (RU instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return UU
          };
          if (!1 === gU.common.async) {
            const tU = this._def.schema._parseSync({
              data: gU.data,
              path: gU.path,
              parent: gU
            });
            return "aborted" === tU.status ? xU : ("nC" === tU.status && RU.nC(), UU(tU.value), {
              status: RU.value,
              value: tU.value
            })
          }
          return this._def.schema._parseAsync({
            data: gU.data,
            path: gU.path,
            parent: gU
          }).then((gU => "aborted" === gU.status ? xU : ("nC" === gU.status && RU.nC(), UU(gU.value).then((() => ({
            status: RU.value,
            value: gU.value
          }))))))
        }
        if ("transform" === tU.type) {
          if (!1 === gU.common.async) {
            const UU = this._def.schema._parseSync({
              data: gU.data,
              path: gU.path,
              parent: gU
            });
            if (!nU(UU)) return UU;
            const EU = tU.transform(UU.value, pU);
            if (EU instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: RU.value,
              value: EU
            }
          }
          return this._def.schema._parseAsync({
            data: gU.data,
            path: gU.path,
            parent: gU
          }).then((UU => nU(UU) ? Promise.resolve(tU.transform(UU.value, pU)).then((UU => ({
            status: RU.value,
            value: UU
          }))) : UU))
        }
        TU.assertNever(tU)
      }
    }
    xR.create = (UU, RU, gU) => new xR({
      schema: UU,
      typeName: VR.ZodEffects,
      effect: RU,
      ...YU(gU)
    }), xR.createWithPreprocess = (UU, RU, gU) => new xR({
      schema: RU,
      effect: {
        type: "preprocess",
        transform: UU
      },
      typeName: VR.ZodEffects,
      ...YU(gU)
    });
    class mR extends BU {
      _parse(UU) {
        return this._getType(UU) === cU.undefined ? IU(void 0) : this._def.innerType._parse(UU)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    mR.create = (UU, RU) => new mR({
      innerType: UU,
      typeName: VR.ZodOptional,
      ...YU(RU)
    });
    class IR extends BU {
      _parse(UU) {
        return this._getType(UU) === cU.null ? IU(null) : this._def.innerType._parse(UU)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    IR.create = (UU, RU) => new IR({
      innerType: UU,
      typeName: VR.ZodNullable,
      ...YU(RU)
    });
    class JR extends BU {
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU);
        let gU = RU.data;
        return RU.parsedType === cU.undefined && (gU = this._def.defaultValue()), this._def.innerType._parse({
          data: gU,
          path: RU.path,
          parent: RU
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    JR.create = (UU, RU) => new JR({
      innerType: UU,
      typeName: VR.ZodDefault,
      defaultValue: "function" === typeof RU.default ? RU.default : () => RU.default,
      ...YU(RU)
    });
    class wR extends BU {
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU), gU = {
          ...RU,
          common: {
            ...RU.common,
            issues: []
          }
        }, tU = this._def.innerType._parse({
          data: gU.data,
          path: gU.path,
          parent: {
            ...gU
          }
        });
        return bU(tU) ? tU.then((UU => ({
          status: "valid",
          value: "valid" === UU.status ? UU.value : this._def.catchValue({
            get error() {
              return new uU(gU.common.issues)
            },
            input: gU.data
          })
        }))) : {
          status: "valid",
          value: "valid" === tU.status ? tU.value : this._def.catchValue({
            get error() {
              return new uU(gU.common.issues)
            },
            input: gU.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    wR.create = (UU, RU) => new wR({
      innerType: UU,
      typeName: VR.ZodCatch,
      catchValue: "function" === typeof RU.catch ? RU.catch : () => RU.catch,
      ...YU(RU)
    });
    class nR extends BU {
      _parse(UU) {
        if (this._getType(UU) !== cU.nan) {
          const RU = this._getOrReturnCtx(UU);
          return WU(RU, {
            code: jU.invalid_type,
            expected: cU.nan,
            received: RU.parsedType
          }), xU
        }
        return {
          status: "valid",
          value: UU.data
        }
      }
    }
    nR.create = UU => new nR({
      typeName: VR.ZodNaN,
      ...YU(UU)
    });
    const bR = Symbol("zod_brand");
    class oR extends BU {
      _parse(UU) {
        const {
          ctx: RU
        } = this._processInputParams(UU), gU = RU.data;
        return this._def.type._parse({
          data: gU,
          path: RU.path,
          parent: RU
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ZR extends BU {
      _parse(UU) {
        const {
          status: RU,
          ctx: gU
        } = this._processInputParams(UU);
        if (gU.common.async) {
          return (async () => {
            const UU = await this._def.in._parseAsync({
              data: gU.data,
              path: gU.path,
              parent: gU
            });
            return "aborted" === UU.status ? xU : "nC" === UU.status ? (RU.nC(), mU(UU.value)) : this._def.out._parseAsync({
              data: UU.value,
              path: gU.path,
              parent: gU
            })
          })()
        } {
          const UU = this._def.in._parseSync({
            data: gU.data,
            path: gU.path,
            parent: gU
          });
          return "aborted" === UU.status ? xU : "nC" === UU.status ? (RU.nC(), {
            status: "nC",
            value: UU.value
          }) : this._def.out._parseSync({
            data: UU.value,
            path: gU.path,
            parent: gU
          })
        }
      }
      static create(UU, RU) {
        return new ZR({
          in: UU,
          out: RU,
          typeName: VR.ZodPipeline
        })
      }
    }
    class aR extends BU {
      _parse(UU) {
        const RU = this._def.innerType._parse(UU);
        return nU(RU) && (RU.value = Object.freeze(RU.value)), RU
      }
    }
    aR.create = (UU, RU) => new aR({
      innerType: UU,
      typeName: VR.ZodReadonly,
      ...YU(RU)
    });
    const YR = function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = arguments.length > 2 ? arguments[2] : void 0;
        return UU ? NU.create().superRefine(((tU, pU) => {
          var EU, PU;
          if (!UU(tU)) {
            const UU = "function" === typeof RU ? RU(tU) : "string" === typeof RU ? {
                message: RU
              } : RU,
              TU = null === (PU = null !== (EU = UU.fatal) && void 0 !== EU ? EU : gU) || void 0 === PU || PU,
              qU = "string" === typeof UU ? {
                message: UU
              } : UU;
            pU.addIssue({
              code: "custom",
              ...qU,
              fatal: TU
            })
          }
        })) : NU.create()
      },
      BR = {
        object: tR.lazycreate
      };
    var VR;
    ! function(UU) {
      UU.ZodString = "ZodString", UU.ZodNumber = "ZodNumber", UU.ZodNaN = "ZodNaN", UU.ZodBigInt = "ZodBigInt", UU.ZodBoolean = "ZodBoolean", UU.ZodDate = "ZodDate", UU.ZodSymbol = "ZodSymbol", UU.ZodUndefined = "ZodUndefined", UU.ZodNull = "ZodNull", UU.ZodAny = "ZodAny", UU.ZodUnknown = "ZodUnknown", UU.ZodNever = "ZodNever", UU.ZodVoid = "ZodVoid", UU.ZodArray = "ZodArray", UU.ZodObject = "ZodObject", UU.ZodUnion = "ZodUnion", UU.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", UU.ZodIntersection = "ZodIntersection", UU.ZodTuple = "ZodTuple", UU.ZodRecord = "ZodRecord", UU.ZodMap = "ZodMap", UU.ZodSet = "ZodSet", UU.ZodFunction = "ZodFunction", UU.ZodLazy = "ZodLazy", UU.ZodLiteral = "ZodLiteral", UU.ZodEnum = "ZodEnum", UU.ZodEffects = "ZodEffects", UU.ZodNativeEnum = "ZodNativeEnum", UU.ZodOptional = "ZodOptional", UU.ZodNullable = "ZodNullable", UU.ZodDefault = "ZodDefault", UU.ZodCatch = "ZodCatch", UU.ZodPromise = "ZodPromise", UU.ZodBranded = "ZodBranded", UU.ZodPipeline = "ZodPipeline", UU.ZodReadonly = "ZodReadonly"
    }(VR || (VR = {}));
    const rR = yU.create,
      XR = FU.create,
      vR = nR.create,
      dR = iU.create,
      HR = AU.create,
      SR = zU.create,
      sR = MU.create,
      yR = DU.create,
      kR = LU.create,
      FR = NU.create,
      iR = lU.create,
      AR = OU.create,
      zR = UR.create,
      MR = RR.create,
      DR = tR.create,
      LR = tR.strictCreate,
      NR = pR.create,
      lR = PR.create,
      OR = qR.create,
      Ug = KR.create,
      Rg = cR.create,
      gg = GR.create,
      tg = jR.create,
      pg = uR.create,
      Eg = CR.create,
      Pg = hR.create,
      Tg = eR.create,
      qg = WR.create,
      Kg = fR.create,
      cg = xR.create,
      Gg = mR.create,
      jg = IR.create,
      ug = xR.createWithPreprocess,
      Cg = ZR.create,
      hg = {
        string: UU => yU.create({
          ...UU,
          coerce: !0
        }),
        number: UU => FU.create({
          ...UU,
          coerce: !0
        }),
        boolean: UU => AU.create({
          ...UU,
          coerce: !0
        }),
        bigint: UU => iU.create({
          ...UU,
          coerce: !0
        }),
        date: UU => zU.create({
          ...UU,
          coerce: !0
        })
      },
      Qg = xU;
    var eg = Object.freeze({
        __proto__: null,
        defaultErrorMap: CU,
        setErrorMap: function(UU) {
          hU = UU
        },
        getErrorMap: QU,
        makeIssue: eU,
        EMPTY_PATH: [],
        addIssueToContext: WU,
        ParseStatus: fU,
        INVALID: xU,
        DIRTY: mU,
        OK: IU,
        isAborted: JU,
        isDirty: wU,
        isValid: nU,
        isAsync: bU,
        get util() {
          return TU
        },
        get objectUtil() {
          return qU
        },
        ZodParsedType: cU,
        getParsedType: GU,
        ZodType: BU,
        ZodString: yU,
        ZodNumber: FU,
        ZodBigInt: iU,
        ZodBoolean: AU,
        ZodDate: zU,
        ZodSymbol: MU,
        ZodUndefined: DU,
        ZodNull: LU,
        ZodAny: NU,
        ZodUnknown: lU,
        ZodNever: OU,
        ZodVoid: UR,
        ZodArray: RR,
        ZodObject: tR,
        ZodUnion: pR,
        ZodDiscriminatedUnion: PR,
        ZodIntersection: qR,
        ZodTuple: KR,
        ZodRecord: cR,
        ZodMap: GR,
        ZodSet: jR,
        ZodFunction: uR,
        ZodLazy: CR,
        ZodLiteral: hR,
        ZodEnum: eR,
        ZodNativeEnum: WR,
        ZodPromise: fR,
        ZodEffects: xR,
        ZodTransformer: xR,
        ZodOptional: mR,
        ZodNullable: IR,
        ZodDefault: JR,
        ZodCatch: wR,
        ZodNaN: nR,
        BRAND: bR,
        ZodBranded: oR,
        ZodPipeline: ZR,
        ZodReadonly: aR,
        custom: YR,
        Schema: BU,
        ZodSchema: BU,
        late: BR,
        get ZodFirstPartyTypeKind() {
          return VR
        },
        coerce: hg,
        any: FR,
        array: MR,
        bigint: dR,
        boolean: HR,
        date: SR,
        discriminatedUnion: lR,
        effect: cg,
        enum: Tg,
        function: pg,
        instanceof: function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${UU.name}`
          };
          return YR((RU => RU instanceof UU), RU)
        },
        intersection: OR,
        lazy: Eg,
        literal: Pg,
        map: gg,
        nan: vR,
        nativeEnum: qg,
        never: AR,
        null: kR,
        nullable: jg,
        number: XR,
        object: DR,
        oboolean: () => HR().optional(),
        onumber: () => XR().optional(),
        optional: Gg,
        ostring: () => rR().optional(),
        pipeline: Cg,
        preprocess: ug,
        promise: Kg,
        record: Rg,
        set: tg,
        strictObject: LR,
        string: rR,
        symbol: sR,
        transformer: cg,
        tuple: Ug,
        undefined: yR,
        union: NR,
        unknown: iR,
        void: zR,
        NEVER: Qg,
        ZodIssueCode: jU,
        quotelessJson: UU => JSON.stringify(UU, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: uU
      }),
      Wg = {
        exports: {}
      };
    ! function(UU) {
      var RU = function(UU) {
        var gU = 1e7,
          tU = 9007199254740992,
          pU = jU(tU),
          EU = "0123456789abcdefghijklmnopqrstuvwxyz",
          PU = "function" === typeof BigInt;

        function TU(UU, RU, gU, tU) {
          return "undefined" === typeof UU ? TU[0] : "undefined" !== typeof RU && (10 !== +RU || gU) ? AU(UU, RU, gU, tU) : NU(UU)
        }

        function qU(UU, RU) {
          this.value = UU, this.sign = RU, this.isSmall = !1
        }

        function KU(UU) {
          this.value = UU, this.sign = UU < 0, this.isSmall = !0
        }

        function cU(UU) {
          this.value = UU
        }

        function GU(UU) {
          return -tU < UU && UU < tU
        }

        function jU(UU) {
          return UU < 1e7 ? [UU] : UU < 1e14 ? [UU % 1e7, Math.floor(UU / 1e7)] : [UU % 1e7, Math.floor(UU / 1e7) % 1e7, Math.floor(UU / 1e14)]
        }

        function uU(UU) {
          CU(UU);
          var RU = UU.length;
          if (RU < 4 && YU(UU, pU) < 0) switch (RU) {
            case 0:
              return 0;
            case 1:
              return UU[0];
            case 2:
              return UU[0] + UU[1] * gU;
            default:
              return UU[0] + (UU[1] + UU[2] * gU) * gU
          }
          return UU
        }

        function CU(UU) {
          for (var RU = UU.length; 0 === UU[--RU];);
          UU.length = RU + 1
        }

        function hU(UU) {
          for (var RU = new Array(UU), gU = -1; ++gU < UU;) RU[gU] = 0;
          return RU
        }

        function QU(UU) {
          return UU > 0 ? Math.floor(UU) : Math.ceil(UU)
        }

        function eU(UU, RU) {
          var tU, pU, EU = UU.length,
            PU = RU.length,
            TU = new Array(EU),
            qU = 0,
            KU = gU;
          for (pU = 0; pU < PU; pU++) qU = (tU = UU[pU] + RU[pU] + qU) >= KU ? 1 : 0, TU[pU] = tU - qU * KU;
          for (; pU < EU;) qU = (tU = UU[pU] + qU) === KU ? 1 : 0, TU[pU++] = tU - qU * KU;
          return qU > 0 && TU.push(qU), TU
        }

        function WU(UU, RU) {
          return UU.length >= RU.length ? eU(UU, RU) : eU(RU, UU)
        }

        function fU(UU, RU) {
          var tU, pU, EU = UU.length,
            PU = new Array(EU),
            TU = gU;
          for (pU = 0; pU < EU; pU++) tU = UU[pU] - TU + RU, RU = Math.floor(tU / TU), PU[pU] = tU - RU * TU, RU += 1;
          for (; RU > 0;) PU[pU++] = RU % TU, RU = Math.floor(RU / TU);
          return PU
        }

        function xU(UU, RU) {
          var tU, pU, EU = UU.length,
            PU = RU.length,
            TU = new Array(EU),
            qU = 0,
            KU = gU;
          for (tU = 0; tU < PU; tU++)(pU = UU[tU] - qU - RU[tU]) < 0 ? (pU += KU, qU = 1) : qU = 0, TU[tU] = pU;
          for (tU = PU; tU < EU; tU++) {
            if (!((pU = UU[tU] - qU) < 0)) {
              TU[tU++] = pU;
              break
            }
            pU += KU, TU[tU] = pU
          }
          for (; tU < EU; tU++) TU[tU] = UU[tU];
          return CU(TU), TU
        }

        function mU(UU, RU, tU) {
          var pU, EU, PU = UU.length,
            TU = new Array(PU),
            cU = -RU,
            GU = gU;
          for (pU = 0; pU < PU; pU++) EU = UU[pU] + cU, cU = Math.floor(EU / GU), EU %= GU, TU[pU] = EU < 0 ? EU + GU : EU;
          return "number" === typeof(TU = uU(TU)) ? (tU && (TU = -TU), new KU(TU)) : new qU(TU, tU)
        }

        function IU(UU, RU) {
          var tU, pU, EU, PU, TU = UU.length,
            qU = RU.length,
            KU = hU(TU + qU),
            cU = gU;
          for (EU = 0; EU < TU; ++EU) {
            PU = UU[EU];
            for (var GU = 0; GU < qU; ++GU) tU = PU * RU[GU] + KU[EU + GU], pU = Math.floor(tU / cU), KU[EU + GU] = tU - pU * cU, KU[EU + GU + 1] += pU
          }
          return CU(KU), KU
        }

        function JU(UU, RU) {
          var tU, pU, EU = UU.length,
            PU = new Array(EU),
            TU = gU,
            qU = 0;
          for (pU = 0; pU < EU; pU++) tU = UU[pU] * RU + qU, qU = Math.floor(tU / TU), PU[pU] = tU - qU * TU;
          for (; qU > 0;) PU[pU++] = qU % TU, qU = Math.floor(qU / TU);
          return PU
        }

        function wU(UU, RU) {
          for (var gU = []; RU-- > 0;) gU.push(0);
          return gU.concat(UU)
        }

        function nU(UU, RU) {
          var gU = Math.max(UU.length, RU.length);
          if (gU <= 30) return IU(UU, RU);
          gU = Math.ceil(gU / 2);
          var tU = UU.slice(gU),
            pU = UU.slice(0, gU),
            EU = RU.slice(gU),
            PU = RU.slice(0, gU),
            TU = nU(pU, PU),
            qU = nU(tU, EU),
            KU = nU(WU(pU, tU), WU(PU, EU)),
            cU = WU(WU(TU, wU(xU(xU(KU, TU), qU), gU)), wU(qU, 2 * gU));
          return CU(cU), cU
        }

        function bU(UU, RU, tU) {
          return new qU(UU < gU ? JU(RU, UU) : IU(RU, jU(UU)), tU)
        }

        function oU(UU) {
          var RU, tU, pU, EU, PU = UU.length,
            TU = hU(PU + PU),
            qU = gU;
          for (pU = 0; pU < PU; pU++) {
            tU = 0 - (EU = UU[pU]) * EU;
            for (var KU = pU; KU < PU; KU++) RU = EU * UU[KU] * 2 + TU[pU + KU] + tU, tU = Math.floor(RU / qU), TU[pU + KU] = RU - tU * qU;
            TU[pU + PU] = tU
          }
          return CU(TU), TU
        }

        function ZU(UU, RU) {
          var tU, pU, EU, PU, TU = UU.length,
            qU = hU(TU),
            KU = gU;
          for (EU = 0, tU = TU - 1; tU >= 0; --tU) EU = (PU = EU * KU + UU[tU]) - (pU = QU(PU / RU)) * RU, qU[tU] = 0 | pU;
          return [qU, 0 | EU]
        }

        function aU(UU, RU) {
          var tU, pU = NU(RU);
          if (PU) return [new cU(UU.value / pU.value), new cU(UU.value % pU.value)];
          var EU, GU = UU.value,
            eU = pU.value;
          if (0 === eU) throw new Error("Cannot divide by zero");
          if (UU.isSmall) return pU.isSmall ? [new KU(QU(GU / eU)), new KU(GU % eU)] : [TU[0], UU];
          if (pU.isSmall) {
            if (1 === eU) return [UU, TU[0]];
            if (-1 == eU) return [UU.nt(), TU[0]];
            var WU = Math.abs(eU);
            if (WU < gU) {
              EU = uU((tU = ZU(GU, WU))[0]);
              var fU = tU[1];
              return UU.sign && (fU = -fU), "number" === typeof EU ? (UU.sign !== pU.sign && (EU = -EU), [new KU(EU), new KU(fU)]) : [new qU(EU, UU.sign !== pU.sign), new KU(fU)]
            }
            eU = jU(WU)
          }
          var mU = YU(GU, eU);
          if (-1 === mU) return [TU[0], UU];
          if (0 === mU) return [TU[UU.sign === pU.sign ? 1 : -1], TU[0]];
          tU = GU.length + eU.length <= 200 ? function(UU, RU) {
            var tU, pU, EU, PU, TU, qU, KU, cU = UU.length,
              GU = RU.length,
              jU = gU,
              CU = hU(RU.length),
              QU = RU[GU - 1],
              eU = Math.ceil(jU / (2 * QU)),
              WU = JU(UU, eU),
              fU = JU(RU, eU);
            for (WU.length <= cU && WU.push(0), fU.push(0), QU = fU[GU - 1], pU = cU - GU; pU >= 0; pU--) {
              for (tU = jU - 1, WU[pU + GU] !== QU && (tU = Math.floor((WU[pU + GU] * jU + WU[pU + GU - 1]) / QU)), EU = 0, PU = 0, qU = fU.length, TU = 0; TU < qU; TU++) EU += tU * fU[TU], KU = Math.floor(EU / jU), PU += WU[pU + TU] - (EU - KU * jU), EU = KU, PU < 0 ? (WU[pU + TU] = PU + jU, PU = -1) : (WU[pU + TU] = PU, PU = 0);
              for (; 0 !== PU;) {
                for (tU -= 1, EU = 0, TU = 0; TU < qU; TU++)(EU += WU[pU + TU] - jU + fU[TU]) < 0 ? (WU[pU + TU] = EU + jU, EU = 0) : (WU[pU + TU] = EU, EU = 1);
                PU += EU
              }
              CU[pU] = tU
            }
            return WU = ZU(WU, eU)[0], [uU(CU), uU(WU)]
          }(GU, eU) : function(UU, RU) {
            for (var tU, pU, EU, PU, TU, qU = UU.length, KU = RU.length, cU = [], GU = [], jU = gU; qU;)
              if (GU.unshift(UU[--qU]), CU(GU), YU(GU, RU) < 0) cU.push(0);
              else {
                EU = GU[(pU = GU.length) - 1] * jU + GU[pU - 2], PU = RU[KU - 1] * jU + RU[KU - 2], pU > KU && (EU = (EU + 1) * jU), tU = Math.ceil(EU / PU);
                do {
                  if (YU(TU = JU(RU, tU), GU) <= 0) break;
                  tU--
                } while (tU);
                cU.push(tU), GU = xU(GU, TU)
              } return cU.reverse(), [uU(cU), uU(GU)]
          }(GU, eU), EU = tU[0];
          var IU = UU.sign !== pU.sign,
            wU = tU[1],
            nU = UU.sign;
          return "number" === typeof EU ? (IU && (EU = -EU), EU = new KU(EU)) : EU = new qU(EU, IU), "number" === typeof wU ? (nU && (wU = -wU), wU = new KU(wU)) : wU = new qU(wU, nU), [EU, wU]
        }

        function YU(UU, RU) {
          if (UU.length !== RU.length) return UU.length > RU.length ? 1 : -1;
          for (var gU = UU.length - 1; gU >= 0; gU--)
            if (UU[gU] !== RU[gU]) return UU[gU] > RU[gU] ? 1 : -1;
          return 0
        }

        function BU(UU) {
          var RU = UU.abs();
          return !RU.isUnit() && (!!(RU.equals(2) || RU.equals(3) || RU.equals(5)) || !(RU.isEven() || RU.isDivisibleBy(3) || RU.isDivisibleBy(5)) && (!!RU.lesser(49) || void 0))
        }

        function VU(UU, gU) {
          for (var tU, pU, EU, PU = UU.prev(), TU = PU, qU = 0; TU.isEven();) TU = TU.divide(2), qU++;
          UU: for (pU = 0; pU < gU.length; pU++)
            if (!UU.lesser(gU[pU]) && !(EU = RU(gU[pU]).modPow(TU, UU)).isUnit() && !EU.equals(PU)) {
              for (tU = qU - 1; 0 != tU; tU--) {
                if ((EU = EU.square().mod(UU)).isUnit()) return !1;
                if (EU.equals(PU)) continue UU
              }
              return !1
            }
          return !0
        }
        qU.prototype = Object.create(TU.prototype), KU.prototype = Object.create(TU.prototype), cU.prototype = Object.create(TU.prototype), qU.prototype.add = function(UU) {
          var RU = NU(UU);
          if (this.sign !== RU.sign) return this.subtract(RU.nt());
          var gU = this.value,
            tU = RU.value;
          return RU.isSmall ? new qU(fU(gU, Math.abs(tU)), this.sign) : new qU(WU(gU, tU), this.sign)
        }, qU.prototype.plus = qU.prototype.add, KU.prototype.add = function(UU) {
          var RU = NU(UU),
            gU = this.value;
          if (gU < 0 !== RU.sign) return this.subtract(RU.nt());
          var tU = RU.value;
          if (RU.isSmall) {
            if (GU(gU + tU)) return new KU(gU + tU);
            tU = jU(Math.abs(tU))
          }
          return new qU(fU(tU, Math.abs(gU)), gU < 0)
        }, KU.prototype.plus = KU.prototype.add, cU.prototype.add = function(UU) {
          return new cU(this.value + NU(UU).value)
        }, cU.prototype.plus = cU.prototype.add, qU.prototype.subtract = function(UU) {
          var RU = NU(UU);
          if (this.sign !== RU.sign) return this.add(RU.nt());
          var gU = this.value,
            tU = RU.value;
          return RU.isSmall ? mU(gU, Math.abs(tU), this.sign) : function(UU, RU, gU) {
            var tU;
            return YU(UU, RU) >= 0 ? tU = xU(UU, RU) : (tU = xU(RU, UU), gU = !gU), "number" === typeof(tU = uU(tU)) ? (gU && (tU = -tU), new KU(tU)) : new qU(tU, gU)
          }(gU, tU, this.sign)
        }, qU.prototype.minus = qU.prototype.subtract, KU.prototype.subtract = function(UU) {
          var RU = NU(UU),
            gU = this.value;
          if (gU < 0 !== RU.sign) return this.add(RU.nt());
          var tU = RU.value;
          return RU.isSmall ? new KU(gU - tU) : mU(tU, Math.abs(gU), gU >= 0)
        }, KU.prototype.minus = KU.prototype.subtract, cU.prototype.subtract = function(UU) {
          return new cU(this.value - NU(UU).value)
        }, cU.prototype.minus = cU.prototype.subtract, qU.prototype.nt = function() {
          return new qU(this.value, !this.sign)
        }, KU.prototype.nt = function() {
          var UU = this.sign,
            RU = new KU(-this.value);
          return RU.sign = !UU, RU
        }, cU.prototype.nt = function() {
          return new cU(-this.value)
        }, qU.prototype.abs = function() {
          return new qU(this.value, !1)
        }, KU.prototype.abs = function() {
          return new KU(Math.abs(this.value))
        }, cU.prototype.abs = function() {
          return new cU(this.value >= 0 ? this.value : -this.value)
        }, qU.prototype.multiply = function(UU) {
          var RU, tU, pU, EU = NU(UU),
            PU = this.value,
            KU = EU.value,
            cU = this.sign !== EU.sign;
          if (EU.isSmall) {
            if (0 === KU) return TU[0];
            if (1 === KU) return this;
            if (-1 === KU) return this.nt();
            if ((RU = Math.abs(KU)) < gU) return new qU(JU(PU, RU), cU);
            KU = jU(RU)
          }
          return tU = PU.length, pU = KU.length, new qU(-.012 * tU - .012 * pU + 15e-6 * tU * pU > 0 ? nU(PU, KU) : IU(PU, KU), cU)
        }, qU.prototype.times = qU.prototype.multiply, KU.prototype._multiplyBySmall = function(UU) {
          return GU(UU.value * this.value) ? new KU(UU.value * this.value) : bU(Math.abs(UU.value), jU(Math.abs(this.value)), this.sign !== UU.sign)
        }, qU.prototype._multiplyBySmall = function(UU) {
          return 0 === UU.value ? TU[0] : 1 === UU.value ? this : -1 === UU.value ? this.nt() : bU(Math.abs(UU.value), this.value, this.sign !== UU.sign)
        }, KU.prototype.multiply = function(UU) {
          return NU(UU)._multiplyBySmall(this)
        }, KU.prototype.times = KU.prototype.multiply, cU.prototype.multiply = function(UU) {
          return new cU(this.value * NU(UU).value)
        }, cU.prototype.times = cU.prototype.multiply, qU.prototype.square = function() {
          return new qU(oU(this.value), !1)
        }, KU.prototype.square = function() {
          var UU = this.value * this.value;
          return GU(UU) ? new KU(UU) : new qU(oU(jU(Math.abs(this.value))), !1)
        }, cU.prototype.square = function(UU) {
          return new cU(this.value * this.value)
        }, qU.prototype.divmod = function(UU) {
          var RU = aU(this, UU);
          return {
            quotient: RU[0],
            remainder: RU[1]
          }
        }, cU.prototype.divmod = KU.prototype.divmod = qU.prototype.divmod, qU.prototype.divide = function(UU) {
          return aU(this, UU)[0]
        }, cU.prototype.over = cU.prototype.divide = function(UU) {
          return new cU(this.value / NU(UU).value)
        }, KU.prototype.over = KU.prototype.divide = qU.prototype.over = qU.prototype.divide, qU.prototype.mod = function(UU) {
          return aU(this, UU)[1]
        }, cU.prototype.mod = cU.prototype.remainder = function(UU) {
          return new cU(this.value % NU(UU).value)
        }, KU.prototype.remainder = KU.prototype.mod = qU.prototype.remainder = qU.prototype.mod, qU.prototype.pow = function(UU) {
          var RU, gU, tU, pU = NU(UU),
            EU = this.value,
            PU = pU.value;
          if (0 === PU) return TU[1];
          if (0 === EU) return TU[0];
          if (1 === EU) return TU[1];
          if (-1 === EU) return pU.isEven() ? TU[1] : TU[-1];
          if (pU.sign) return TU[0];
          if (!pU.isSmall) throw new Error("The exponent " + pU.toString() + " is too large.");
          if (this.isSmall && GU(RU = Math.pow(EU, PU))) return new KU(QU(RU));
          for (gU = this, tU = TU[1]; !0 & PU && (tU = tU.times(gU), --PU), 0 !== PU;) PU /= 2, gU = gU.square();
          return tU
        }, KU.prototype.pow = qU.prototype.pow, cU.prototype.pow = function(UU) {
          var RU = NU(UU),
            gU = this.value,
            tU = RU.value,
            pU = BigInt(0),
            EU = BigInt(1),
            PU = BigInt(2);
          if (tU === pU) return TU[1];
          if (gU === pU) return TU[0];
          if (gU === EU) return TU[1];
          if (gU === BigInt(-1)) return RU.isEven() ? TU[1] : TU[-1];
          if (RU.isNegative()) return new cU(pU);
          for (var qU = this, KU = TU[1];
            (tU & EU) === EU && (KU = KU.times(qU), --tU), tU !== pU;) tU /= PU, qU = qU.square();
          return KU
        }, qU.prototype.modPow = function(UU, RU) {
          if (UU = NU(UU), (RU = NU(RU)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var gU = TU[1],
            tU = this.mod(RU);
          for (UU.isNegative() && (UU = UU.multiply(TU[-1]), tU = tU.modInv(RU)); UU.isPositive();) {
            if (tU.isZero()) return TU[0];
            UU.isOdd() && (gU = gU.multiply(tU).mod(RU)), UU = UU.divide(2), tU = tU.square().mod(RU)
          }
          return gU
        }, cU.prototype.modPow = KU.prototype.modPow = qU.prototype.modPow, qU.prototype.compareAbs = function(UU) {
          var RU = NU(UU),
            gU = this.value,
            tU = RU.value;
          return RU.isSmall ? 1 : YU(gU, tU)
        }, KU.prototype.compareAbs = function(UU) {
          var RU = NU(UU),
            gU = Math.abs(this.value),
            tU = RU.value;
          return RU.isSmall ? gU === (tU = Math.abs(tU)) ? 0 : gU > tU ? 1 : -1 : -1
        }, cU.prototype.compareAbs = function(UU) {
          var RU = this.value,
            gU = NU(UU).value;
          return (RU = RU >= 0 ? RU : -RU) === (gU = gU >= 0 ? gU : -gU) ? 0 : RU > gU ? 1 : -1
        }, qU.prototype.compare = function(UU) {
          if (UU === 1 / 0) return -1;
          if (UU === -1 / 0) return 1;
          var RU = NU(UU),
            gU = this.value,
            tU = RU.value;
          return this.sign !== RU.sign ? RU.sign ? 1 : -1 : RU.isSmall ? this.sign ? -1 : 1 : YU(gU, tU) * (this.sign ? -1 : 1)
        }, qU.prototype.compareTo = qU.prototype.compare, KU.prototype.compare = function(UU) {
          if (UU === 1 / 0) return -1;
          if (UU === -1 / 0) return 1;
          var RU = NU(UU),
            gU = this.value,
            tU = RU.value;
          return RU.isSmall ? gU == tU ? 0 : gU > tU ? 1 : -1 : gU < 0 !== RU.sign ? gU < 0 ? -1 : 1 : gU < 0 ? 1 : -1
        }, KU.prototype.compareTo = KU.prototype.compare, cU.prototype.compare = function(UU) {
          if (UU === 1 / 0) return -1;
          if (UU === -1 / 0) return 1;
          var RU = this.value,
            gU = NU(UU).value;
          return RU === gU ? 0 : RU > gU ? 1 : -1
        }, cU.prototype.compareTo = cU.prototype.compare, qU.prototype.equals = function(UU) {
          return 0 === this.compare(UU)
        }, cU.prototype.eq = cU.prototype.equals = KU.prototype.eq = KU.prototype.equals = qU.prototype.eq = qU.prototype.equals, qU.prototype.notEquals = function(UU) {
          return 0 !== this.compare(UU)
        }, cU.prototype.neq = cU.prototype.notEquals = KU.prototype.neq = KU.prototype.notEquals = qU.prototype.neq = qU.prototype.notEquals, qU.prototype.greater = function(UU) {
          return this.compare(UU) > 0
        }, cU.prototype.gt = cU.prototype.greater = KU.prototype.gt = KU.prototype.greater = qU.prototype.gt = qU.prototype.greater, qU.prototype.lesser = function(UU) {
          return this.compare(UU) < 0
        }, cU.prototype.lt = cU.prototype.lesser = KU.prototype.lt = KU.prototype.lesser = qU.prototype.lt = qU.prototype.lesser, qU.prototype.greaterOrEquals = function(UU) {
          return this.compare(UU) >= 0
        }, cU.prototype.geq = cU.prototype.greaterOrEquals = KU.prototype.geq = KU.prototype.greaterOrEquals = qU.prototype.geq = qU.prototype.greaterOrEquals, qU.prototype.lesserOrEquals = function(UU) {
          return this.compare(UU) <= 0
        }, cU.prototype.leq = cU.prototype.lesserOrEquals = KU.prototype.leq = KU.prototype.lesserOrEquals = qU.prototype.leq = qU.prototype.lesserOrEquals, qU.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, KU.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, cU.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, qU.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, KU.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, cU.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, qU.prototype.isPositive = function() {
          return !this.sign
        }, KU.prototype.isPositive = function() {
          return this.value > 0
        }, cU.prototype.isPositive = KU.prototype.isPositive, qU.prototype.isNegative = function() {
          return this.sign
        }, KU.prototype.isNegative = function() {
          return this.value < 0
        }, cU.prototype.isNegative = KU.prototype.isNegative, qU.prototype.isUnit = function() {
          return !1
        }, KU.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, cU.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, qU.prototype.isZero = function() {
          return !1
        }, KU.prototype.isZero = function() {
          return 0 === this.value
        }, cU.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, qU.prototype.isDivisibleBy = function(UU) {
          var RU = NU(UU);
          return !RU.isZero() && (!!RU.isUnit() || (0 === RU.compareAbs(2) ? this.isEven() : this.mod(RU).isZero()))
        }, cU.prototype.isDivisibleBy = KU.prototype.isDivisibleBy = qU.prototype.isDivisibleBy, qU.prototype.isPrime = function(gU) {
          var tU = BU(this);
          if (tU !== UU) return tU;
          var pU = this.abs(),
            EU = pU.bitLength();
          if (EU <= 64) return VU(pU, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var PU = Math.log(2) * EU.toJSNumber(), TU = Math.ceil(!0 === gU ? 2 * Math.pow(PU, 2) : PU), qU = [], KU = 0; KU < TU; KU++) qU.push(RU(KU + 2));
          return VU(pU, qU)
        }, cU.prototype.isPrime = KU.prototype.isPrime = qU.prototype.isPrime, qU.prototype.isProbablePrime = function(gU, tU) {
          var pU = BU(this);
          if (pU !== UU) return pU;
          for (var EU = this.abs(), PU = gU === UU ? 5 : gU, TU = [], qU = 0; qU < PU; qU++) TU.push(RU.randBetween(2, EU.minus(2), tU));
          return VU(EU, TU)
        }, cU.prototype.isProbablePrime = KU.prototype.isProbablePrime = qU.prototype.isProbablePrime, qU.prototype.modInv = function(UU) {
          for (var gU, tU, pU, EU = RU.zero, PU = RU.one, TU = NU(UU), qU = this.abs(); !qU.isZero();) gU = TU.divide(qU), tU = EU, pU = TU, EU = PU, TU = qU, PU = tU.subtract(gU.multiply(PU)), qU = pU.subtract(gU.multiply(qU));
          if (!TU.isUnit()) throw new Error(this.toString() + " and " + UU.toString() + " are not co-prime");
          return -1 === EU.compare(0) && (EU = EU.add(UU)), this.isNegative() ? EU.nt() : EU
        }, cU.prototype.modInv = KU.prototype.modInv = qU.prototype.modInv, qU.prototype.next = function() {
          var UU = this.value;
          return this.sign ? mU(UU, 1, this.sign) : new qU(fU(UU, 1), this.sign)
        }, KU.prototype.next = function() {
          var UU = this.value;
          return UU + 1 < tU ? new KU(UU + 1) : new qU(pU, !1)
        }, cU.prototype.next = function() {
          return new cU(this.value + BigInt(1))
        }, qU.prototype.prev = function() {
          var UU = this.value;
          return this.sign ? new qU(fU(UU, 1), !0) : mU(UU, 1, this.sign)
        }, KU.prototype.prev = function() {
          var UU = this.value;
          return UU - 1 > -tU ? new KU(UU - 1) : new qU(pU, !0)
        }, cU.prototype.prev = function() {
          return new cU(this.value - BigInt(1))
        };
        for (var rU = [1]; 2 * rU[rU.length - 1] <= gU;) rU.push(2 * rU[rU.length - 1]);
        var XU = rU.length,
          vU = rU[XU - 1];

        function dU(UU) {
          return Math.abs(UU) <= gU
        }

        function HU(UU, gU, tU) {
          gU = NU(gU);
          for (var pU = UU.isNegative(), EU = gU.isNegative(), PU = pU ? UU.not() : UU, TU = EU ? gU.not() : gU, qU = 0, KU = 0, cU = null, GU = null, jU = []; !PU.isZero() || !TU.isZero();) qU = (cU = aU(PU, vU))[1].toJSNumber(), pU && (qU = vU - 1 - qU), KU = (GU = aU(TU, vU))[1].toJSNumber(), EU && (KU = vU - 1 - KU), PU = cU[0], TU = GU[0], jU.push(tU(qU, KU));
          for (var uU = 0 !== tU(pU ? 1 : 0, EU ? 1 : 0) ? RU(-1) : RU(0), CU = jU.length - 1; CU >= 0; CU -= 1) uU = uU.multiply(vU).add(RU(jU[CU]));
          return uU
        }
        qU.prototype.shiftLeft = function(UU) {
          var RU = NU(UU).toJSNumber();
          if (!dU(RU)) throw new Error(String(RU) + " is too large for shifting.");
          if (RU < 0) return this.shiftRight(-RU);
          var gU = this;
          if (gU.isZero()) return gU;
          for (; RU >= XU;) gU = gU.multiply(vU), RU -= XU - 1;
          return gU.multiply(rU[RU])
        }, cU.prototype.shiftLeft = KU.prototype.shiftLeft = qU.prototype.shiftLeft, qU.prototype.shiftRight = function(UU) {
          var RU, gU = NU(UU).toJSNumber();
          if (!dU(gU)) throw new Error(String(gU) + " is too large for shifting.");
          if (gU < 0) return this.shiftLeft(-gU);
          for (var tU = this; gU >= XU;) {
            if (tU.isZero() || tU.isNegative() && tU.isUnit()) return tU;
            tU = (RU = aU(tU, vU))[1].isNegative() ? RU[0].prev() : RU[0], gU -= XU - 1
          }
          return (RU = aU(tU, rU[gU]))[1].isNegative() ? RU[0].prev() : RU[0]
        }, cU.prototype.shiftRight = KU.prototype.shiftRight = qU.prototype.shiftRight, qU.prototype.not = function() {
          return this.nt().prev()
        }, cU.prototype.not = KU.prototype.not = qU.prototype.not, qU.prototype.and = function(UU) {
          return HU(this, UU, (function(UU, RU) {
            return UU & RU
          }))
        }, cU.prototype.and = KU.prototype.and = qU.prototype.and, qU.prototype.or = function(UU) {
          return HU(this, UU, (function(UU, RU) {
            return UU | RU
          }))
        }, cU.prototype.or = KU.prototype.or = qU.prototype.or, qU.prototype.xor = function(UU) {
          return HU(this, UU, (function(UU, RU) {
            return UU ^ RU
          }))
        }, cU.prototype.xor = KU.prototype.xor = qU.prototype.xor;
        var SU = 1 << 30;

        function sU(UU) {
          var RU = UU.value,
            tU = "number" === typeof RU ? RU | SU : "bigint" === typeof RU ? RU | BigInt(SU) : RU[0] + RU[1] * gU | 1073758208;
          return tU & -tU
        }

        function yU(UU, gU) {
          if (gU.compareTo(UU) <= 0) {
            var tU = yU(UU, gU.square(gU)),
              pU = tU.p,
              EU = tU.e,
              PU = pU.multiply(gU);
            return PU.compareTo(UU) <= 0 ? {
              p: PU,
              e: 2 * EU + 1
            } : {
              p: pU,
              e: 2 * EU
            }
          }
          return {
            p: RU(1),
            e: 0
          }
        }

        function kU(UU, RU) {
          return UU = NU(UU), RU = NU(RU), UU.greater(RU) ? UU : RU
        }

        function FU(UU, RU) {
          return UU = NU(UU), RU = NU(RU), UU.lesser(RU) ? UU : RU
        }

        function iU(UU, RU) {
          if (UU = NU(UU).abs(), RU = NU(RU).abs(), UU.equals(RU)) return UU;
          if (UU.isZero()) return RU;
          if (RU.isZero()) return UU;
          for (var gU, tU, pU = TU[1]; UU.isEven() && RU.isEven();) gU = FU(sU(UU), sU(RU)), UU = UU.divide(gU), RU = RU.divide(gU), pU = pU.multiply(gU);
          for (; UU.isEven();) UU = UU.divide(sU(UU));
          do {
            for (; RU.isEven();) RU = RU.divide(sU(RU));
            UU.greater(RU) && (tU = RU, RU = UU, UU = tU), RU = RU.subtract(UU)
          } while (!RU.isZero());
          return pU.isUnit() ? UU : UU.multiply(pU)
        }
        qU.prototype.bitLength = function() {
          var UU = this;
          return UU.compareTo(RU(0)) < 0 && (UU = UU.nt().subtract(RU(1))), 0 === UU.compareTo(RU(0)) ? RU(0) : RU(yU(UU, RU(2)).e).add(RU(1))
        }, cU.prototype.bitLength = KU.prototype.bitLength = qU.prototype.bitLength;
        var AU = function(UU, RU, gU, tU) {
          gU = gU || EU, UU = String(UU), tU || (UU = UU.toLowerCase(), gU = gU.toLowerCase());
          var pU, PU = UU.length,
            TU = Math.abs(RU),
            qU = {};
          for (pU = 0; pU < gU.length; pU++) qU[gU[pU]] = pU;
          for (pU = 0; pU < PU; pU++) {
            if ("-" !== (GU = UU[pU]) && (GU in qU && qU[GU] >= TU)) {
              if ("1" === GU && 1 === TU) continue;
              throw new Error(GU + " is not a valid digit in base " + RU + ".")
            }
          }
          RU = NU(RU);
          var KU = [],
            cU = "-" === UU[0];
          for (pU = cU ? 1 : 0; pU < UU.length; pU++) {
            var GU;
            if ((GU = UU[pU]) in qU) KU.push(NU(qU[GU]));
            else {
              if ("<" !== GU) throw new Error(GU + " is not a valid character");
              var jU = pU;
              do {
                pU++
              } while (">" !== UU[pU] && pU < UU.length);
              KU.push(NU(UU.slice(jU + 1, pU)))
            }
          }
          return zU(KU, RU, cU)
        };

        function zU(UU, RU, gU) {
          var tU, pU = TU[0],
            EU = TU[1];
          for (tU = UU.length - 1; tU >= 0; tU--) pU = pU.add(UU[tU].times(EU)), EU = EU.times(RU);
          return gU ? pU.nt() : pU
        }

        function MU(UU, gU) {
          if ((gU = RU(gU)).isZero()) {
            if (UU.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (gU.equals(-1)) {
            if (UU.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (UU.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-UU.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var tU = Array.apply(null, Array(UU.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return tU.unshift([1]), {
              value: [].concat.apply([], tU),
              isNegative: !1
            }
          }
          var pU = !1;
          if (UU.isNegative() && gU.isPositive() && (pU = !0, UU = UU.abs()), gU.isUnit()) return UU.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(UU.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: pU
          };
          for (var EU, PU = [], TU = UU; TU.isNegative() || TU.compareAbs(gU) >= 0;) {
            EU = TU.divmod(gU), TU = EU.quotient;
            var qU = EU.remainder;
            qU.isNegative() && (qU = gU.minus(qU).abs(), TU = TU.next()), PU.push(qU.toJSNumber())
          }
          return PU.push(TU.toJSNumber()), {
            value: PU.reverse(),
            isNegative: pU
          }
        }

        function DU(UU, RU, gU) {
          var tU = MU(UU, RU);
          return (tU.isNegative ? "-" : "") + tU.value.map((function(UU) {
            return function(UU, RU) {
              return UU < (RU = RU || EU).length ? RU[UU] : "<" + UU + ">"
            }(UU, gU)
          })).join("")
        }

        function LU(UU) {
          if (GU(+UU)) {
            var RU = +UU;
            if (RU === QU(RU)) return PU ? new cU(BigInt(RU)) : new KU(RU);
            throw new Error("Invalid integer: " + UU)
          }
          var gU = "-" === UU[0];
          gU && (UU = UU.slice(1));
          var tU = UU.split(/e/i);
          if (tU.length > 2) throw new Error("Invalid integer: " + tU.join("e"));
          if (2 === tU.length) {
            var pU = tU[1];
            if ("+" === pU[0] && (pU = pU.slice(1)), (pU = +pU) !== QU(pU) || !GU(pU)) throw new Error("Invalid integer: " + pU + " is not a valid exponent.");
            var EU = tU[0],
              TU = EU.indexOf(".");
            if (TU >= 0 && (pU -= EU.length - TU - 1, EU = EU.slice(0, TU) + EU.slice(TU + 1)), pU < 0) throw new Error("Cannot include negative exponent part for integers");
            UU = EU += new Array(pU + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(UU)) throw new Error("Invalid integer: " + UU);
          if (PU) return new cU(BigInt(gU ? "-" + UU : UU));
          for (var jU = [], uU = UU.length, hU = uU - 7; uU > 0;) jU.push(+UU.slice(hU, uU)), (hU -= 7) < 0 && (hU = 0), uU -= 7;
          return CU(jU), new qU(jU, gU)
        }

        function NU(UU) {
          return "number" === typeof UU ? function(UU) {
            if (PU) return new cU(BigInt(UU));
            if (GU(UU)) {
              if (UU !== QU(UU)) throw new Error(UU + " is not an integer.");
              return new KU(UU)
            }
            return LU(UU.toString())
          }(UU) : "string" === typeof UU ? LU(UU) : "bigint" === typeof UU ? new cU(UU) : UU
        }
        qU.prototype.toArray = function(UU) {
          return MU(this, UU)
        }, KU.prototype.toArray = function(UU) {
          return MU(this, UU)
        }, cU.prototype.toArray = function(UU) {
          return MU(this, UU)
        }, qU.prototype.toString = function(RU, gU) {
          if (RU === UU && (RU = 10), 10 !== RU) return DU(this, RU, gU);
          for (var tU, pU = this.value, EU = pU.length, PU = String(pU[--EU]); --EU >= 0;) tU = String(pU[EU]), PU += "0000000".slice(tU.length) + tU;
          return (this.sign ? "-" : "") + PU
        }, KU.prototype.toString = function(RU, gU) {
          return RU === UU && (RU = 10), 10 != RU ? DU(this, RU, gU) : String(this.value)
        }, cU.prototype.toString = KU.prototype.toString, cU.prototype.toJSON = qU.prototype.toJSON = KU.prototype.toJSON = function() {
          return this.toString()
        }, qU.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, qU.prototype.toJSNumber = qU.prototype.valueOf, KU.prototype.valueOf = function() {
          return this.value
        }, KU.prototype.toJSNumber = KU.prototype.valueOf, cU.prototype.valueOf = cU.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var lU = 0; lU < 1e3; lU++) TU[lU] = NU(lU), lU > 0 && (TU[-lU] = NU(-lU));
        return TU.one = TU[1], TU.zero = TU[0], TU.minusOne = TU[-1], TU.max = kU, TU.min = FU, TU.gcd = iU, TU.lcm = function(UU, RU) {
          return UU = NU(UU).abs(), RU = NU(RU).abs(), UU.divide(iU(UU, RU)).multiply(RU)
        }, TU.isInstance = function(UU) {
          return UU instanceof qU || UU instanceof KU || UU instanceof cU
        }, TU.randBetween = function(UU, RU, tU) {
          UU = NU(UU), RU = NU(RU);
          var pU = tU || Math.random,
            EU = FU(UU, RU),
            PU = kU(UU, RU).subtract(EU).add(1);
          if (PU.isSmall) return EU.add(Math.floor(pU() * PU));
          for (var qU = MU(PU, gU).value, KU = [], cU = !0, GU = 0; GU < qU.length; GU++) {
            var jU = cU ? qU[GU] : gU,
              uU = QU(pU() * jU);
            KU.push(uU), uU < jU && (cU = !1)
          }
          return EU.add(TU.bRU(KU, gU, !1))
        }, TU.bRU = function(UU, RU, gU) {
          return zU(UU.map(NU), NU(RU || 10), gU)
        }, TU
      }();
      UU.hasOwnProperty("exports") && (UU.exports = RU)
    }(Wg);
    var fg = EU(Wg.exports);

    function xg(UU, RU, gU) {
      let tU = 0;
      for (let pU = 0; pU < gU; pU++) {
        const gU = UU[RU + pU];
        if (void 0 === gU) break;
        tU += gU * 16 ** pU
      }
      return tU
    }

    function mg(UU) {
      const RU = [];
      for (let gU = 0; gU < UU.length; gU++) {
        let tU = Number(UU[gU]);
        for (let UU = 0; tU || UU < RU.length; UU++) tU += 10 * (RU[UU] || 0), RU[UU] = tU % 16, tU = (tU - RU[UU]) / 16
      }
      return RU
    }
    class Ig {
      static fromString(UU) {
        return new Ig(function(UU) {
          const RU = mg(UU),
            gU = Array(4);
          for (let tU = 0; tU < 4; tU++) gU[3 - tU] = xg(RU, 4 * tU, 4);
          return gU
        }(UU), UU)
      }
      static fromBit(UU) {
        const RU = Array(4),
          gU = Math.floor(UU / 16);
        for (let tU = 0; tU < 4; tU++) RU[3 - tU] = tU === gU ? 1 << UU - 16 * gU : 0;
        return new Ig(RU)
      }
      constructor(UU, RU) {
        this.parts = UU, this.str = RU
      }
      and(UU) {
        let {
          parts: RU
        } = UU;
        return new Ig(this.parts.map(((UU, gU) => UU & RU[gU])))
      }
      or(UU) {
        let {
          parts: RU
        } = UU;
        return new Ig(this.parts.map(((UU, gU) => UU | RU[gU])))
      }
      xor(UU) {
        let {
          parts: RU
        } = UU;
        return new Ig(this.parts.map(((UU, gU) => UU ^ RU[gU])))
      }
      not() {
        return new Ig(this.parts.map((UU => ~UU)))
      }
      equals(UU) {
        let {
          parts: RU
        } = UU;
        return this.parts.every(((UU, gU) => UU === RU[gU]))
      }
      toString() {
        if (null != this.str) return this.str;
        const UU = new Array(16);
        return this.parts.forEach(((RU, gU) => {
          const tU = mg(RU.toString());
          for (let pU = 0; pU < 4; pU++) UU[pU + 4 * gU] = tU[3 - pU] || 0
        })), this.str = fg.bRU(UU, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Jg = function() {
      try {
        return BigInt, !0
      } catch (UU) {
        return !1
      }
    }();
    Jg && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const wg = {},
      ng = Jg ? function(UU) {
        return BigInt(UU)
      } : function(UU) {
        return UU instanceof Ig ? UU : ("number" === typeof UU && (UU = UU.toString()), null != wg[UU] || (wg[UU] = Ig.fromString(UU)), wg[UU])
      },
      bg = ng(0),
      og = Jg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bg)
      } : function() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bg;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg).and(UU)
      },
      Zg = Jg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bg)
      } : function() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bg;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg).or(UU)
      },
      ag = Jg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bg)
      } : function() {
        let UU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bg;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg).xor(UU)
      },
      Yg = Jg ? function(UU, RU) {
        return UU === RU
      } : function(UU, RU) {
        return null == UU || null == RU ? UU == RU : UU.equals(RU)
      };
    var Bg, Vg, rg, Xg, vg = {
      combine: function() {
        let UU = arguments.length <= 0 ? void 0 : arguments[0];
        for (let RU = 1; RU < arguments.length; RU++) UU = Zg(UU, RU < 0 || arguments.length <= RU ? void 0 : arguments[RU]);
        return UU
      },
      add: function(UU, RU) {
        return RU === bg ? UU : Zg(UU, RU)
      },
      remove: function(UU, RU) {
        return RU === bg ? UU : ag(UU, og(UU, RU))
      },
      filter: og,
      invert: Jg ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bg).not()
      },
      has: function(UU, RU) {
        return Yg(og(UU, RU), RU)
      },
      hasAny: function(UU, RU) {
        return !Yg(og(UU, RU), bg)
      },
      equals: Yg,
      deserialize: ng,
      getFlag: Jg ? function(UU) {
        return BigInt(1) << BigInt(UU)
      } : function(UU) {
        return Ig.fromBit(UU)
      }
    };
    ! function(UU) {
      UU[UU.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", UU[UU.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", UU[UU.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", UU[UU.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", UU[UU.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", UU[UU.RATELIMITED = 4002] = "RATELIMITED", UU[UU.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", UU[UU.INVALID_VERSION = 4004] = "INVALID_VERSION", UU[UU.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Bg || (Bg = {})),
    function(UU) {
      UU[UU.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", UU[UU.INVALID_COMMAND = 4002] = "INVALID_COMMAND", UU[UU.INVALID_EVENT = 4004] = "INVALID_EVENT", UU[UU.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Vg || (Vg = {})),
    function(UU) {
      UU.LANDSCAPE = "landscape", UU.PORTRAIT = "portrait"
    }(rg || (rg = {})),
    function(UU) {
      UU.MOBILE = "mobile", UU.DESKTOP = "desktop"
    }(Xg || (Xg = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: vg.getFlag(0),
      ADMINISTRATOR: vg.getFlag(3)
    });

    function dg(UU) {
      return ug((RU => {
        var gU;
        const [tU] = null !== (gU = Object.entries(UU).find((UU => {
          let [, gU] = UU;
          return gU === RU
        }))) && void 0 !== gU ? gU : [];
        return null != RU && void 0 === tU ? UU.UNHANDLED : RU
      }), rR().or(XR()))
    }
    const Hg = eg.object({
        image_url: eg.string()
      }),
      Sg = eg.object({
        mediaUrl: eg.string().max(1024)
      }),
      sg = eg.object({
        access_token: eg.union([eg.string(), eg.null()]).optional()
      }),
      yg = eg.object({
        access_token: eg.string(),
        user: eg.object({
          username: eg.string(),
          discriminator: eg.string(),
          id: eg.string(),
          avatar: eg.union([eg.string(), eg.null()]).optional(),
          public_flags: eg.number(),
          global_name: eg.union([eg.string(), eg.null()]).optional()
        }),
        scopes: eg.array(function(UU) {
          const RU = YR().transform((RU => {
            const gU = UU.safeParse(RU);
            return gU.success ? gU.data : UU._def.defaultValue()
          }));
          return RU.overlayType = UU, RU
        }(eg.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(eg.literal(-1)).default(-1))),
        expires: eg.string(),
        application: eg.object({
          description: eg.string(),
          icon: eg.union([eg.string(), eg.null()]).optional(),
          id: eg.string(),
          rpc_origins: eg.array(eg.string()).optional(),
          name: eg.string()
        })
      }),
      kg = eg.object({
        participants: eg.array(eg.object({
          id: eg.string(),
          username: eg.string(),
          global_name: eg.union([eg.string(), eg.null()]).optional(),
          discriminator: eg.string(),
          avatar: eg.union([eg.string(), eg.null()]).optional(),
          flags: eg.number(),
          bot: eg.boolean(),
          avatar_decoration_data: eg.union([eg.object({
            asset: eg.string(),
            skuId: eg.string().optional()
          }), eg.null()]).optional(),
          premium_type: eg.union([eg.number(), eg.null()]).optional(),
          nickname: eg.string().optional()
        }))
      });
    var Fg;
    ! function(UU) {
      UU.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", UU.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", UU.AUTHENTICATE = "AUTHENTICATE", UU.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Fg || (Fg = {}));
    const ig = eg.object({}).optional().nullable(),
      Ag = eg.void(),
      zg = {
        [Fg.INITIATE_IMAGE_UPLOAD]: {
          request: Ag,
          response: Hg
        },
        [Fg.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Sg,
          response: ig
        },
        [Fg.AUTHENTICATE]: {
          request: sg,
          response: yg
        },
        [Fg.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Ag,
          response: kg
        }
      },
      Mg = "DISPATCH";
    var Dg;
    ! function(UU) {
      UU.AUTHORIZE = "AUTHORIZE", UU.AUTHENTICATE = "AUTHENTICATE", UU.GET_GUILDS = "GET_GUILDS", UU.GET_GUILD = "GET_GUILD", UU.GET_CHANNEL = "GET_CHANNEL", UU.GET_CHANNELS = "GET_CHANNELS", UU.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", UU.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", UU.SUBSCRIBE = "SUBSCRIBE", UU.UNSUBSCRIBE = "UNSUBSCRIBE", UU.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", UU.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", UU.SET_ACTIVITY = "SET_ACTIVITY", UU.GET_SKUS = "GET_SKUS", UU.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", UU.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", UU.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", UU.START_PURCHASE = "START_PURCHASE", UU.SET_CONFIG = "SET_CONFIG", UU.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", UU.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", UU.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", UU.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", UU.CAPTURE_LOG = "CAPTURE_LOG", UU.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", UU.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", UU.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", UU.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", UU.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", UU.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", UU.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Dg || (Dg = {}));
    const Lg = DR({
        cmd: rR(),
        data: iR(),
        evt: kR(),
        nonce: rR()
      }).passthrough(),
      Ng = (dg(Object.assign(Object.assign({}, yg.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), DR({
        id: rR(),
        username: rR(),
        discriminator: rR(),
        global_name: rR().optional().nullable(),
        avatar: rR().optional().nullable(),
        avatar_decoration_data: DR({
          asset: rR(),
          sku_id: rR().optional()
        }).nullable(),
        bot: HR(),
        flags: XR().optional().nullable(),
        premium_type: XR().optional().nullable()
      })),
      lg = DR({
        user: Ng,
        nick: rR().optional().nullable(),
        roles: MR(rR()),
        joined_at: rR(),
        deaf: HR(),
        mute: HR()
      }),
      Og = DR({
        id: rR(),
        name: rR().optional().nullable(),
        roles: MR(rR()).optional().nullable(),
        user: Ng.optional().nullable(),
        require_colons: HR().optional().nullable(),
        managed: HR().optional().nullable(),
        animated: HR().optional().nullable(),
        available: HR().optional().nullable()
      }),
      Ut = DR({
        mute: HR(),
        deaf: HR(),
        self_mute: HR(),
        self_deaf: HR(),
        suppress: HR()
      }),
      Rt = DR({
        mute: HR(),
        nick: rR(),
        user: Ng,
        voice_state: Ut,
        volume: XR()
      }),
      gt = dg({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      tt = DR({
        name: rR(),
        type: XR(),
        url: rR().optional().nullable(),
        created_at: XR().optional().nullable(),
        timestamps: DR({
          start: XR(),
          end: XR()
        }).partial().optional().nullable(),
        application_id: rR().optional().nullable(),
        details: rR().optional().nullable(),
        state: rR().optional().nullable(),
        emoji: Og.optional().nullable(),
        party: DR({
          id: rR().optional().nullable(),
          size: MR(XR()).optional().nullable()
        }).optional().nullable(),
        assets: DR({
          large_image: rR().nullable(),
          large_text: rR().nullable(),
          small_image: rR().nullable(),
          small_text: rR().nullable()
        }).partial().optional().nullable(),
        secrets: DR({
          join: rR(),
          match: rR()
        }).partial().optional().nullable(),
        instance: HR().optional().nullable(),
        flags: XR().optional().nullable()
      }),
      pt = DR({
        id: rR(),
        type: dg({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: rR(),
        deny: rR()
      }),
      Et = {
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
      Pt = DR({
        id: rR(),
        type: dg(Et),
        guild_id: rR().optional().nullable(),
        position: XR().optional().nullable(),
        permission_overwrites: MR(pt).optional().nullable(),
        name: rR().optional().nullable(),
        topic: rR().optional().nullable(),
        nsfw: HR().optional().nullable(),
        last_message_id: rR().optional().nullable(),
        bitrate: XR().optional().nullable(),
        user_limit: XR().optional().nullable(),
        rate_limit_per_user: XR().optional().nullable(),
        recipients: MR(Ng).optional().nullable(),
        icon: rR().optional().nullable(),
        owner_id: rR().optional().nullable(),
        application_id: rR().optional().nullable(),
        parent_id: rR().optional().nullable(),
        last_pin_timestamp: rR().optional().nullable()
      }),
      Tt = DR({
        user: Ng,
        guild_id: rR(),
        status: gt,
        activities: MR(tt),
        client_status: DR({
          desktop: gt,
          mobile: gt,
          web: gt
        }).partial()
      }),
      qt = DR({
        id: rR(),
        name: rR(),
        color: XR(),
        hoist: HR(),
        position: XR(),
        permissions: rR(),
        managed: HR(),
        mentionable: HR()
      }),
      Kt = (DR({
        id: rR(),
        name: rR(),
        owner_id: rR(),
        icon: rR().nullable(),
        icon_hash: rR().optional().nullable(),
        splash: rR().nullable(),
        discovery_splash: rR().nullable(),
        owner: HR().optional().nullable(),
        permissions: rR().optional().nullable(),
        region: rR(),
        afk_channel_id: rR().nullable(),
        afk_timeout: XR(),
        widget_enabled: HR().optional().nullable(),
        widget_channel_id: rR().optional().nullable(),
        verification_level: XR(),
        default_message_notifications: XR(),
        explicit_content_filter: XR(),
        roles: MR(qt),
        emojis: MR(Og),
        features: MR(rR()),
        mfa_level: XR(),
        application_id: rR().nullable(),
        system_channel_id: rR().nullable(),
        system_channel_flags: XR(),
        rules_channel_id: rR().nullable(),
        joined_at: rR().optional().nullable(),
        large: HR().optional().nullable(),
        unavailable: HR().optional().nullable(),
        member_count: XR().optional().nullable(),
        voice_states: MR(Ut).optional().nullable(),
        members: MR(lg).optional().nullable(),
        channels: MR(Pt).optional().nullable(),
        presences: MR(Tt).optional().nullable(),
        max_presences: XR().optional().nullable(),
        max_members: XR().optional().nullable(),
        vanity_url_code: rR().nullable(),
        description: rR().nullable(),
        banner: rR().nullable(),
        premium_tier: XR(),
        premium_subscription_count: XR().optional().nullable(),
        preferred_locale: rR(),
        public_updates_channel_id: rR().nullable(),
        max_video_channel_users: XR().optional().nullable(),
        approximate_member_count: XR().optional().nullable(),
        approximate_presence_count: XR().optional().nullable()
      }), DR({
        id: rR(),
        guild_id: rR(),
        type: XR(),
        name: rR()
      })),
      ct = DR({
        id: rR(),
        filename: rR(),
        size: XR(),
        url: rR(),
        proxy_url: rR(),
        height: XR().optional().nullable(),
        width: XR().optional().nullable()
      }),
      Gt = DR({
        text: rR(),
        icon_url: rR().optional().nullable(),
        proxy_icon_url: rR().optional().nullable()
      }),
      jt = DR({
        url: rR().optional().nullable(),
        proxy_url: rR().optional().nullable(),
        height: XR().optional().nullable(),
        width: XR().optional().nullable()
      }),
      ut = jt.omit({
        proxy_url: !0
      }),
      Ct = DR({
        name: rR().optional().nullable(),
        url: rR().optional().nullable()
      }),
      ht = DR({
        name: rR().optional().nullable(),
        url: rR().optional().nullable(),
        icon_url: rR().optional().nullable(),
        proxy_icon_url: rR().optional().nullable()
      }),
      Qt = DR({
        name: rR(),
        value: rR(),
        inline: HR()
      }),
      et = DR({
        title: rR().optional().nullable(),
        type: rR().optional().nullable(),
        description: rR().optional().nullable(),
        url: rR().optional().nullable(),
        timestamp: rR().optional().nullable(),
        color: XR().optional().nullable(),
        footer: Gt.optional().nullable(),
        image: jt.optional().nullable(),
        thumbnail: jt.optional().nullable(),
        video: ut.optional().nullable(),
        provider: Ct.optional().nullable(),
        author: ht.optional().nullable(),
        fields: MR(Qt).optional().nullable()
      }),
      Wt = DR({
        count: XR(),
        me: HR(),
        emoji: Og
      }),
      ft = DR({
        type: XR(),
        party_id: rR().optional().nullable()
      }),
      xt = DR({
        id: rR(),
        cover_image: rR().optional().nullable(),
        description: rR(),
        icon: rR().optional().nullable(),
        name: rR()
      }),
      mt = DR({
        message_id: rR().optional().nullable(),
        channel_id: rR().optional().nullable(),
        guild_id: rR().optional().nullable()
      }),
      It = DR({
        id: rR(),
        channel_id: rR(),
        guild_id: rR().optional().nullable(),
        author: Ng.optional().nullable(),
        member: lg.optional().nullable(),
        content: rR(),
        timestamp: rR(),
        edited_timestamp: rR().optional().nullable(),
        tts: HR(),
        mention_everyone: HR(),
        mentions: MR(Ng),
        mention_roles: MR(rR()),
        mention_channels: MR(Kt),
        attachments: MR(ct),
        embeds: MR(et),
        reactions: MR(Wt).optional().nullable(),
        nonce: NR([rR(), XR()]).optional().nullable(),
        pinned: HR(),
        webhook_id: rR().optional().nullable(),
        type: XR(),
        activity: ft.optional().nullable(),
        application: xt.optional().nullable(),
        message_reference: mt.optional().nullable(),
        flags: XR().optional().nullable(),
        stickers: MR(iR()).optional().nullable(),
        referenced_message: iR().optional().nullable()
      }),
      Jt = DR({
        id: rR(),
        name: rR()
      }),
      wt = DR({
        type: dg({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: XR(),
        name: rR()
      }),
      nt = DR({
        type: dg({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: HR(),
        threshold: XR(),
        shortcut: MR(wt),
        delay: XR()
      }),
      bt = DR({
        device_id: rR(),
        volume: XR(),
        available_devices: MR(Jt)
      }),
      ot = (DR({
        type: dg({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: rR(),
        vendor: DR({
          name: rR(),
          url: rR()
        }),
        model: DR({
          name: rR(),
          url: rR()
        }),
        related: MR(rR()),
        echo_cancellation: HR().optional().nullable(),
        noise_suppression: HR().optional().nullable(),
        automatic_gain_control: HR().optional().nullable(),
        hardware_mute: HR().optional().nullable()
      }), DR({
        id: rR(),
        name: rR(),
        type: dg({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: DR({
          amount: XR(),
          currency: rR()
        }),
        application_id: rR(),
        flags: XR(),
        release_date: rR().nullable()
      })),
      Zt = DR({
        id: rR(),
        sku_id: rR(),
        application_id: rR(),
        user_id: rR(),
        gift_code_flags: XR(),
        type: dg({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: rR().optional().nullable(),
        branches: MR(rR()).optional().nullable(),
        starts_at: rR().optional().nullable(),
        ends_at: rR().optional().nullable(),
        parent_id: rR().optional().nullable(),
        consumed: HR().optional().nullable(),
        deleted: HR().optional().nullable(),
        gift_code_batch_id: rR().optional().nullable()
      }),
      Yt = (dg({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), dg({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Bt = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      Vt = (dg(Bt), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      rt = (dg(Vt), "ERROR");
    var Xt;
    ! function(UU) {
      UU.READY = "READY", UU.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", UU.SPEAKING_START = "SPEAKING_START", UU.SPEAKING_STOP = "SPEAKING_STOP", UU.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", UU.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", UU.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", UU.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", UU.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", UU.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Xt || (Xt = {}));
    const vt = Lg.extend({
        evt: qg(Xt),
        nonce: rR().nullable(),
        cmd: Pg(Mg),
        data: DR({}).passthrough()
      }),
      dt = Lg.extend({
        evt: Pg(rt),
        data: DR({
          code: XR(),
          message: rR().optional()
        }).passthrough(),
        cmd: qg(Dg),
        nonce: rR().nullable()
      }),
      Ht = vt.extend({
        evt: rR()
      }),
      St = NR([vt, Ht, dt]);
    const st = {
      [Xt.READY]: {
        payload: vt.extend({
          evt: Pg(Xt.READY),
          data: DR({
            v: XR(),
            config: DR({
              cdn_host: rR().optional(),
              api_endpoint: rR(),
              environment: rR()
            }),
            user: DR({
              id: rR(),
              username: rR(),
              discriminator: rR(),
              avatar: rR().optional()
            }).optional()
          })
        })
      },
      [Xt.VOICE_STATE_UPDATE]: {
        payload: vt.extend({
          evt: Pg(Xt.VOICE_STATE_UPDATE),
          data: Rt
        }),
        subscribeArgs: DR({
          channel_id: rR()
        })
      },
      [Xt.SPEAKING_START]: {
        payload: vt.extend({
          evt: Pg(Xt.SPEAKING_START),
          data: DR({
            lobby_id: rR().optional(),
            channel_id: rR().optional(),
            user_id: rR()
          })
        }),
        subscribeArgs: DR({
          lobby_id: rR().nullable().optional(),
          channel_id: rR().nullable().optional()
        })
      },
      [Xt.SPEAKING_STOP]: {
        payload: vt.extend({
          evt: Pg(Xt.SPEAKING_STOP),
          data: DR({
            lobby_id: rR().optional(),
            channel_id: rR().optional(),
            user_id: rR()
          })
        }),
        subscribeArgs: DR({
          lobby_id: rR().nullable().optional(),
          channel_id: rR().nullable().optional()
        })
      },
      [Xt.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: vt.extend({
          evt: Pg(Xt.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: DR({
            layout_mode: dg(Vt)
          })
        })
      },
      [Xt.ORIENTATION_UPDATE]: {
        payload: vt.extend({
          evt: Pg(Xt.ORIENTATION_UPDATE),
          data: DR({
            screen_orientation: dg(Bt),
            orientation: qg(rg)
          })
        })
      },
      [Xt.CURRENT_USER_UPDATE]: {
        payload: vt.extend({
          evt: Pg(Xt.CURRENT_USER_UPDATE),
          data: Ng
        })
      },
      [Xt.ENTITLEMENT_CREATE]: {
        payload: vt.extend({
          evt: Pg(Xt.ENTITLEMENT_CREATE),
          data: DR({
            entitlement: Zt
          })
        })
      },
      [Xt.THERMAL_STATE_UPDATE]: {
        payload: vt.extend({
          evt: Pg(Xt.THERMAL_STATE_UPDATE),
          data: DR({
            thermal_state: Yt
          })
        })
      },
      [Xt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: vt.extend({
          evt: Pg(Xt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: DR({
            participants: kg.shape.participants
          })
        })
      }
    };
    const yt = DR({}).nullable(),
      kt = DR({
        code: rR()
      }),
      Ft = DR({
        guilds: MR(DR({
          id: rR(),
          name: rR()
        }))
      }),
      it = DR({
        id: rR(),
        name: rR(),
        icon_url: rR().optional(),
        members: MR(lg)
      }),
      At = DR({
        id: rR(),
        type: dg(Et),
        guild_id: rR().optional().nullable(),
        name: rR().optional().nullable(),
        topic: rR().optional().nullable(),
        bitrate: XR().optional().nullable(),
        user_limit: XR().optional().nullable(),
        position: XR().optional().nullable(),
        voice_states: MR(Rt),
        messages: MR(It)
      }),
      zt = DR({
        channels: MR(Pt)
      }),
      Mt = (At.nullable(), At.nullable()),
      Dt = At.nullable(),
      Lt = (DR({
        input: bt,
        output: bt,
        mode: nt,
        automatic_gain_control: HR(),
        echo_cancellation: HR(),
        noise_suppression: HR(),
        qos: HR(),
        silence_warning: HR(),
        deaf: HR(),
        mute: HR()
      }), DR({
        evt: rR()
      })),
      Nt = DR({
        shortcut: wt
      }),
      lt = tt,
      Ot = DR({
        skus: MR(ot)
      }),
      Up = DR({
        entitlements: MR(Zt)
      }),
      Rp = MR(Zt).nullable(),
      gp = DR({
        use_interactive_pip: HR()
      }),
      tp = DR({
        locale: rR()
      }),
      pp = DR({
        enabled: HR()
      }),
      Ep = DR({
        permissions: dR().or(rR())
      }),
      Pp = DR({
        iosKeyboardResizesView: Gg(HR())
      }),
      Tp = Lg.extend({
        cmd: qg(Dg),
        evt: kR()
      });

    function qp(UU) {
      let {
        cmd: RU,
        data: gU
      } = UU;
      switch (RU) {
        case Dg.AUTHORIZE:
          return kt.parse(gU);
        case Dg.CAPTURE_SHORTCUT:
          return Nt.parse(gU);
        case Dg.ENCOURAGE_HW_ACCELERATION:
          return pp.parse(gU);
        case Dg.GET_CHANNEL:
          return At.parse(gU);
        case Dg.GET_CHANNELS:
          return zt.parse(gU);
        case Dg.GET_CHANNEL_PERMISSIONS:
          return Ep.parse(gU);
        case Dg.GET_GUILD:
          return it.parse(gU);
        case Dg.GET_GUILDS:
          return Ft.parse(gU);
        case Dg.GET_PLATFORM_BEHAVIORS:
          return Pp.parse(gU);
        case Dg.GET_CHANNEL:
          return At.parse(gU);
        case Dg.SELECT_TEXT_CHANNEL:
          return Dt.parse(gU);
        case Dg.SELECT_VOICE_CHANNEL:
          return Mt.parse(gU);
        case Dg.SET_ACTIVITY:
          return lt.parse(gU);
        case Dg.GET_SKUS_EMBEDDED:
          return Ot.parse(gU);
        case Dg.GET_ENTITLEMENTS_EMBEDDED:
          return Up.parse(gU);
        case Dg.SET_CONFIG:
          return gp.parse(gU);
        case Dg.START_PURCHASE:
          return Rp.parse(gU);
        case Dg.SUBSCRIBE:
        case Dg.UNSUBSCRIBE:
          return Lt.parse(gU);
        case Dg.USER_SETTINGS_GET_LOCALE:
          return tp.parse(gU);
        case Dg.OPEN_EXTERNAL_LINK:
        case Dg.SET_ORIENTATION_LOCK_STATE:
        case Dg.SET_CERTIFIED_DEVICES:
        case Dg.SEND_ANALYTICS_EVENT:
        case Dg.OPEN_INVITE_DIALOG:
        case Dg.CAPTURE_LOG:
        case Dg.GET_SKUS:
        case Dg.GET_ENTITLEMENTS:
          return yt.parse(gU);
        case Dg.AUTHENTICATE:
        case Dg.INITIATE_IMAGE_UPLOAD:
        case Dg.OPEN_SHARE_MOMENT_DIALOG:
        case Dg.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: UU
          } = zg[RU];
          return UU.parse(gU);
        default:
          ! function(UU, RU) {
            throw RU
          }(0, new Error(`Unrecognized command ${RU}`))
      }
    }
    DR({
      frame_id: rR(),
      platform: qg(Xg).optional().nullable()
    }), DR({
      v: Pg(1),
      encoding: Pg("json").optional(),
      client_id: rR(),
      frame_id: rR()
    });
    const Kp = DR({
        code: XR(),
        message: rR().optional()
      }),
      cp = DR({
        evt: rR().nullable(),
        nonce: rR().nullable(),
        data: iR().nullable(),
        cmd: rR()
      }).passthrough();

    function Gp(UU) {
      const RU = cp.parse(UU);
      return null != RU.evt ? RU.evt === rt ? dt.parse(RU) : function(UU) {
        const RU = UU.evt;
        if (!(RU in Xt)) throw new Error(`Unrecognized event type ${UU.evt}`);
        return st[RU].payload.parse(UU)
      }(St.parse(RU)) : function(UU) {
        return Object.assign(Object.assign({}, UU), {
          data: qp(UU)
        })
      }(Tp.passthrough().parse(RU))
    }

    function jp(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const pU = Lg.extend({
        cmd: Pg(RU),
        data: gU
      });
      return async gU => {
        const EU = await UU({
          cmd: RU,
          args: gU,
          transfer: tU(gU)
        });
        return pU.parse(EU).data
      }
    }

    function Cp(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const gU = zg[UU].response,
        tU = Lg.extend({
          cmd: Pg(UU),
          data: gU
        });
      return gU => async pU => {
        const EU = await gU({
          cmd: UU,
          args: pU,
          transfer: RU(pU)
        });
        return tU.parse(EU).data
      }
    }
    const hp = Cp(Fg.AUTHENTICATE),
      Qp = UU => jp(UU, Dg.AUTHORIZE, kt),
      ep = UU => jp(UU, Dg.CAPTURE_LOG, yt),
      Wp = UU => jp(UU, Dg.ENCOURAGE_HW_ACCELERATION, pp),
      fp = UU => jp(UU, Dg.GET_ENTITLEMENTS_EMBEDDED, Up),
      xp = UU => jp(UU, Dg.GET_SKUS_EMBEDDED, Ot),
      mp = UU => jp(UU, Dg.GET_CHANNEL_PERMISSIONS, Ep),
      Ip = UU => jp(UU, Dg.GET_PLATFORM_BEHAVIORS, Pp),
      Jp = UU => jp(UU, Dg.OPEN_EXTERNAL_LINK, yt),
      wp = UU => jp(UU, Dg.OPEN_INVITE_DIALOG, yt),
      np = Cp(Fg.OPEN_SHARE_MOMENT_DIALOG);
    tt.Hj({
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
      type: tt.shape.type.optional(),
      instance: tt.shape.instance.optional()
    }).nullable();
    const bp = UU => jp(UU, Dg.SET_ACTIVITY, lt),
      op = UU => jp(UU, Dg.SET_CONFIG, gp);
    const Zp = UU => ({
        lock_state: UU.lock_state,
        picture_in_picture_lock_state: UU.picture_in_picture_lock_state
      }),
      ap = UU => function(UU) {
        let {
          sendCommand: RU,
          cmd: gU,
          response: tU,
          fallbackTransform: pU,
          transferTransform: EU = () => {}
        } = UU;
        const PU = Lg.extend({
          cmd: Pg(gU),
          data: tU
        });
        return async UU => {
          try {
            const tU = await RU({
              cmd: gU,
              args: UU,
              transfer: EU(UU)
            });
            return PU.parse(tU).data
          } catch (tU) {
            if (tU.code === Vg.INVALID_PAYLOAD) {
              const tU = pU(UU),
                TU = await RU({
                  cmd: gU,
                  args: tU,
                  transfer: EU(tU)
                });
              return PU.parse(TU).data
            }
            throw tU
          }
        }
      }({
        sendCommand: UU,
        cmd: Dg.SET_ORIENTATION_LOCK_STATE,
        response: yt,
        fallbackTransform: Zp
      }),
      Yp = UU => jp(UU, Dg.START_PURCHASE, Rp),
      Bp = UU => jp(UU, Dg.USER_SETTINGS_GET_LOCALE, tp),
      Vp = Cp(Fg.INITIATE_IMAGE_UPLOAD),
      rp = UU => jp(UU, Dg.GET_CHANNEL, At),
      Xp = Cp(Fg.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var vp = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function dp(UU) {
      return "string" === typeof UU && vp.test(UU)
    }
    for (var Hp = [], Sp = 0; Sp < 256; ++Sp) Hp.push((Sp + 256).toString(16).substr(1));

    function sp(UU) {
      var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = (Hp[UU[RU + 0]] + Hp[UU[RU + 1]] + Hp[UU[RU + 2]] + Hp[UU[RU + 3]] + "-" + Hp[UU[RU + 4]] + Hp[UU[RU + 5]] + "-" + Hp[UU[RU + 6]] + Hp[UU[RU + 7]] + "-" + Hp[UU[RU + 8]] + Hp[UU[RU + 9]] + "-" + Hp[UU[RU + 10]] + Hp[UU[RU + 11]] + Hp[UU[RU + 12]] + Hp[UU[RU + 13]] + Hp[UU[RU + 14]] + Hp[UU[RU + 15]]).toLowerCase();
      if (!dp(gU)) throw TypeError("Stringified UUID is invalid");
      return gU
    }
    var yp;

    function kp(UU, RU, gU) {
      function tU(UU, tU, pU, EU) {
        if ("string" === typeof UU && (UU = function(UU) {
            UU = unescape(encodeURIComponent(UU));
            for (var RU = [], gU = 0; gU < UU.length; ++gU) RU.push(UU.charCodeAt(gU));
            return RU
          }(UU)), "string" === typeof tU && (tU = function(UU) {
            if (!dp(UU)) throw TypeError("Invalid UUID");
            var RU, gU = new Uint8Array(16);
            return gU[0] = (RU = parseInt(UU.slice(0, 8), 16)) >>> 24, gU[1] = RU >>> 16 & 255, gU[2] = RU >>> 8 & 255, gU[3] = 255 & RU, gU[4] = (RU = parseInt(UU.slice(9, 13), 16)) >>> 8, gU[5] = 255 & RU, gU[6] = (RU = parseInt(UU.slice(14, 18), 16)) >>> 8, gU[7] = 255 & RU, gU[8] = (RU = parseInt(UU.slice(19, 23), 16)) >>> 8, gU[9] = 255 & RU, gU[10] = (RU = parseInt(UU.slice(24, 36), 16)) / 1099511627776 & 255, gU[11] = RU / 4294967296 & 255, gU[12] = RU >>> 24 & 255, gU[13] = RU >>> 16 & 255, gU[14] = RU >>> 8 & 255, gU[15] = 255 & RU, gU
          }(tU)), 16 !== tU.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var PU = new Uint8Array(16 + UU.length);
        if (PU.set(tU), PU.set(UU, tU.length), (PU = gU(PU))[6] = 15 & PU[6] | RU, PU[8] = 63 & PU[8] | 128, pU) {
          EU = EU || 0;
          for (var TU = 0; TU < 16; ++TU) pU[EU + TU] = PU[TU];
          return pU
        }
        return sp(PU)
      }
      try {
        tU.name = UU
      } catch (pU) {}
      return tU.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", tU.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", tU
    }

    function Fp(UU) {
      return 14 + (UU + 64 >>> 9 << 4) + 1
    }

    function ip(UU, RU) {
      var gU = (65535 & UU) + (65535 & RU);
      return (UU >> 16) + (RU >> 16) + (gU >> 16) << 16 | 65535 & gU
    }

    function Ap(UU, RU, gU, tU, pU, EU) {
      return ip((PU = ip(ip(RU, UU), ip(tU, EU))) << (TU = pU) | PU >>> 32 - TU, gU);
      var PU, TU
    }

    function zp(UU, RU, gU, tU, pU, EU, PU) {
      return Ap(RU & gU | ~RU & tU, UU, RU, pU, EU, PU)
    }

    function Mp(UU, RU, gU, tU, pU, EU, PU) {
      return Ap(RU & tU | gU & ~tU, UU, RU, pU, EU, PU)
    }

    function Dp(UU, RU, gU, tU, pU, EU, PU) {
      return Ap(RU ^ gU ^ tU, UU, RU, pU, EU, PU)
    }

    function Lp(UU, RU, gU, tU, pU, EU, PU) {
      return Ap(gU ^ (RU | ~tU), UU, RU, pU, EU, PU)
    }
    kp("v3", 48, (function(UU) {
      if ("string" === typeof UU) {
        var RU = unescape(encodeURIComponent(UU));
        UU = new Uint8Array(RU.length);
        for (var gU = 0; gU < RU.length; ++gU) UU[gU] = RU.charCodeAt(gU)
      }
      return function(UU) {
        for (var RU = [], gU = 32 * UU.length, tU = "0123456789abcdef", pU = 0; pU < gU; pU += 8) {
          var EU = UU[pU >> 5] >>> pU % 32 & 255,
            PU = parseInt(tU.charAt(EU >>> 4 & 15) + tU.charAt(15 & EU), 16);
          RU.push(PU)
        }
        return RU
      }(function(UU, RU) {
        UU[RU >> 5] |= 128 << RU % 32, UU[Fp(RU) - 1] = RU;
        for (var gU = 1732584193, tU = -271733879, pU = -1732584194, EU = 271733878, PU = 0; PU < UU.length; PU += 16) {
          var TU = gU,
            qU = tU,
            KU = pU,
            cU = EU;
          gU = zp(gU, tU, pU, EU, UU[PU], 7, -680876936), EU = zp(EU, gU, tU, pU, UU[PU + 1], 12, -389564586), pU = zp(pU, EU, gU, tU, UU[PU + 2], 17, 606105819), tU = zp(tU, pU, EU, gU, UU[PU + 3], 22, -1044525330), gU = zp(gU, tU, pU, EU, UU[PU + 4], 7, -176418897), EU = zp(EU, gU, tU, pU, UU[PU + 5], 12, 1200080426), pU = zp(pU, EU, gU, tU, UU[PU + 6], 17, -1473231341), tU = zp(tU, pU, EU, gU, UU[PU + 7], 22, -45705983), gU = zp(gU, tU, pU, EU, UU[PU + 8], 7, 1770035416), EU = zp(EU, gU, tU, pU, UU[PU + 9], 12, -1958414417), pU = zp(pU, EU, gU, tU, UU[PU + 10], 17, -42063), tU = zp(tU, pU, EU, gU, UU[PU + 11], 22, -1990404162), gU = zp(gU, tU, pU, EU, UU[PU + 12], 7, 1804603682), EU = zp(EU, gU, tU, pU, UU[PU + 13], 12, -40341101), pU = zp(pU, EU, gU, tU, UU[PU + 14], 17, -1502002290), gU = Mp(gU, tU = zp(tU, pU, EU, gU, UU[PU + 15], 22, 1236535329), pU, EU, UU[PU + 1], 5, -165796510), EU = Mp(EU, gU, tU, pU, UU[PU + 6], 9, -1069501632), pU = Mp(pU, EU, gU, tU, UU[PU + 11], 14, 643717713), tU = Mp(tU, pU, EU, gU, UU[PU], 20, -373897302), gU = Mp(gU, tU, pU, EU, UU[PU + 5], 5, -701558691), EU = Mp(EU, gU, tU, pU, UU[PU + 10], 9, 38016083), pU = Mp(pU, EU, gU, tU, UU[PU + 15], 14, -660478335), tU = Mp(tU, pU, EU, gU, UU[PU + 4], 20, -405537848), gU = Mp(gU, tU, pU, EU, UU[PU + 9], 5, 568446438), EU = Mp(EU, gU, tU, pU, UU[PU + 14], 9, -1019803690), pU = Mp(pU, EU, gU, tU, UU[PU + 3], 14, -187363961), tU = Mp(tU, pU, EU, gU, UU[PU + 8], 20, 1163531501), gU = Mp(gU, tU, pU, EU, UU[PU + 13], 5, -1444681467), EU = Mp(EU, gU, tU, pU, UU[PU + 2], 9, -51403784), pU = Mp(pU, EU, gU, tU, UU[PU + 7], 14, 1735328473), gU = Dp(gU, tU = Mp(tU, pU, EU, gU, UU[PU + 12], 20, -1926607734), pU, EU, UU[PU + 5], 4, -378558), EU = Dp(EU, gU, tU, pU, UU[PU + 8], 11, -2022574463), pU = Dp(pU, EU, gU, tU, UU[PU + 11], 16, 1839030562), tU = Dp(tU, pU, EU, gU, UU[PU + 14], 23, -35309556), gU = Dp(gU, tU, pU, EU, UU[PU + 1], 4, -1530992060), EU = Dp(EU, gU, tU, pU, UU[PU + 4], 11, 1272893353), pU = Dp(pU, EU, gU, tU, UU[PU + 7], 16, -155497632), tU = Dp(tU, pU, EU, gU, UU[PU + 10], 23, -1094730640), gU = Dp(gU, tU, pU, EU, UU[PU + 13], 4, 681279174), EU = Dp(EU, gU, tU, pU, UU[PU], 11, -358537222), pU = Dp(pU, EU, gU, tU, UU[PU + 3], 16, -722521979), tU = Dp(tU, pU, EU, gU, UU[PU + 6], 23, 76029189), gU = Dp(gU, tU, pU, EU, UU[PU + 9], 4, -640364487), EU = Dp(EU, gU, tU, pU, UU[PU + 12], 11, -421815835), pU = Dp(pU, EU, gU, tU, UU[PU + 15], 16, 530742520), gU = Lp(gU, tU = Dp(tU, pU, EU, gU, UU[PU + 2], 23, -995338651), pU, EU, UU[PU], 6, -198630844), EU = Lp(EU, gU, tU, pU, UU[PU + 7], 10, 1126891415), pU = Lp(pU, EU, gU, tU, UU[PU + 14], 15, -1416354905), tU = Lp(tU, pU, EU, gU, UU[PU + 5], 21, -57434055), gU = Lp(gU, tU, pU, EU, UU[PU + 12], 6, 1700485571), EU = Lp(EU, gU, tU, pU, UU[PU + 3], 10, -1894986606), pU = Lp(pU, EU, gU, tU, UU[PU + 10], 15, -1051523), tU = Lp(tU, pU, EU, gU, UU[PU + 1], 21, -2054922799), gU = Lp(gU, tU, pU, EU, UU[PU + 8], 6, 1873313359), EU = Lp(EU, gU, tU, pU, UU[PU + 15], 10, -30611744), pU = Lp(pU, EU, gU, tU, UU[PU + 6], 15, -1560198380), tU = Lp(tU, pU, EU, gU, UU[PU + 13], 21, 1309151649), gU = Lp(gU, tU, pU, EU, UU[PU + 4], 6, -145523070), EU = Lp(EU, gU, tU, pU, UU[PU + 11], 10, -1120210379), pU = Lp(pU, EU, gU, tU, UU[PU + 2], 15, 718787259), tU = Lp(tU, pU, EU, gU, UU[PU + 9], 21, -343485551), gU = ip(gU, TU), tU = ip(tU, qU), pU = ip(pU, KU), EU = ip(EU, cU)
        }
        return [gU, tU, pU, EU]
      }(function(UU) {
        if (0 === UU.length) return [];
        for (var RU = 8 * UU.length, gU = new Uint32Array(Fp(RU)), tU = 0; tU < RU; tU += 8) gU[tU >> 5] |= (255 & UU[tU / 8]) << tU % 32;
        return gU
      }(UU), 8 * UU.length))
    }));
    var Np = new Uint8Array(16);

    function lp() {
      if (!yp && !(yp = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return yp(Np)
    }

    function Op(UU, RU, gU) {
      var tU = (UU = UU || {}).random || (UU.rng || lp)();
      if (tU[6] = 15 & tU[6] | 64, tU[8] = 63 & tU[8] | 128, RU) {
        gU = gU || 0;
        for (var pU = 0; pU < 16; ++pU) RU[gU + pU] = tU[pU];
        return RU
      }
      return sp(tU)
    }

    function UE(UU, RU, gU, tU) {
      switch (UU) {
        case 0:
          return RU & gU ^ ~RU & tU;
        case 1:
        case 3:
          return RU ^ gU ^ tU;
        case 2:
          return RU & gU ^ RU & tU ^ gU & tU
      }
    }

    function RE(UU, RU) {
      return UU << RU | UU >>> 32 - RU
    }
    kp("v5", 80, (function(UU) {
      var RU = [1518500249, 1859775393, 2400959708, 3395469782],
        gU = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof UU) {
        var tU = unescape(encodeURIComponent(UU));
        UU = [];
        for (var pU = 0; pU < tU.length; ++pU) UU.push(tU.charCodeAt(pU))
      } else Array.isArray(UU) || (UU = Array.prototype.slice.call(UU));
      UU.push(128);
      for (var EU = UU.length / 4 + 2, PU = Math.ceil(EU / 16), TU = new Array(PU), qU = 0; qU < PU; ++qU) {
        for (var KU = new Uint32Array(16), cU = 0; cU < 16; ++cU) KU[cU] = UU[64 * qU + 4 * cU] << 24 | UU[64 * qU + 4 * cU + 1] << 16 | UU[64 * qU + 4 * cU + 2] << 8 | UU[64 * qU + 4 * cU + 3];
        TU[qU] = KU
      }
      TU[PU - 1][14] = 8 * (UU.length - 1) / Math.pow(2, 32), TU[PU - 1][14] = Math.floor(TU[PU - 1][14]), TU[PU - 1][15] = 8 * (UU.length - 1) & 4294967295;
      for (var GU = 0; GU < PU; ++GU) {
        for (var jU = new Uint32Array(80), uU = 0; uU < 16; ++uU) jU[uU] = TU[GU][uU];
        for (var CU = 16; CU < 80; ++CU) jU[CU] = RE(jU[CU - 3] ^ jU[CU - 8] ^ jU[CU - 14] ^ jU[CU - 16], 1);
        for (var hU = gU[0], QU = gU[1], eU = gU[2], WU = gU[3], fU = gU[4], xU = 0; xU < 80; ++xU) {
          var mU = Math.floor(xU / 20),
            IU = RE(hU, 5) + UE(mU, QU, eU, WU) + fU + RU[mU] + jU[xU] >>> 0;
          fU = WU, WU = eU, eU = RE(QU, 30) >>> 0, QU = hU, hU = IU
        }
        gU[0] = gU[0] + hU >>> 0, gU[1] = gU[1] + QU >>> 0, gU[2] = gU[2] + eU >>> 0, gU[3] = gU[3] + WU >>> 0, gU[4] = gU[4] + fU >>> 0
      }
      return [gU[0] >> 24 & 255, gU[0] >> 16 & 255, gU[0] >> 8 & 255, 255 & gU[0], gU[1] >> 24 & 255, gU[1] >> 16 & 255, gU[1] >> 8 & 255, 255 & gU[1], gU[2] >> 24 & 255, gU[2] >> 16 & 255, gU[2] >> 8 & 255, 255 & gU[2], gU[3] >> 24 & 255, gU[3] >> 16 & 255, gU[3] >> 8 & 255, 255 & gU[3], gU[4] >> 24 & 255, gU[4] >> 16 & 255, gU[4] >> 8 & 255, 255 & gU[4]]
    }));
    class gE extends Error {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(RU), this.code = UU, this.message = RU, this.name = "Discord SDK Error"
      }
    }
    const tE = ["log", "warn", "debug", "info", "error"];
    var pE;
    ! function(UU) {
      UU[UU.HANDSHAKE = 0] = "HANDSHAKE", UU[UU.FRAME = 1] = "FRAME", UU[UU.CLOSE = 2] = "CLOSE", UU[UU.HELLO = 3] = "HELLO"
    }(pE || (pE = {}));
    const EE = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class PE {
      getTransfer(UU) {
        var RU;
        switch (UU.cmd) {
          case Dg.SUBSCRIBE:
          case Dg.UNSUBSCRIBE:
            return;
          default:
            return null !== (RU = UU.transfer) && void 0 !== RU ? RU : void 0
        }
      }
      constructor(UU, RU) {
        var gU;
        if (this.eventBus = new KU, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = UU => {
            var RU;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const gU = Op();
            null === (RU = this.source) || void 0 === RU || RU.postMessage([pE.FRAME, Object.assign(Object.assign({}, UU), {
              nonce: gU
            })], this.sourceOrigin, this.getTransfer(UU));
            return new Promise(((UU, RU) => {
              this.pendingCommands.set(gU, {
                resolve: UU,
                reject: RU
              })
            }))
          }, this.commands = (gU = this.sendCommand, {
            authenticate: hp(gU),
            authorize: Qp(gU),
            captureLog: ep(gU),
            encourageHardwareAcceleration: Wp(gU),
            getChannel: rp(gU),
            getChannelPermissions: mp(gU),
            getEntitlements: fp(gU),
            getPlatformBehaviors: Ip(gU),
            getSkus: xp(gU),
            openExternalLink: Jp(gU),
            openInviteDialog: wp(gU),
            openShareMomentDialog: np(gU),
            setActivity: bp(gU),
            setConfig: op(gU),
            setOrientationLockState: ap(gU),
            startPurchase: Yp(gU),
            userSettingsGetLocale: Bp(gU),
            initiateImageUpload: Vp(gU),
            getInstanceConnectedParticipants: Xp(gU)
          }), this.handleMessage = UU => {
            if (!EE.has(UU.origin)) return;
            const RU = UU.data;
            if (!Array.isArray(RU)) return;
            const [gU, tU] = RU;
            switch (gU) {
              case pE.HELLO:
                return;
              case pE.CLOSE:
                return this.handleClose(tU);
              case pE.HANDSHAKE:
                return this.handleHandshake();
              case pE.FRAME:
                return this.handleFrame(tU);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = UU, this.configuration = null !== RU && void 0 !== RU ? RU : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = Xg.DESKTOP, this.guildId = null, void(this.channelId = null);
        const tU = new URLSearchParams(this._getSearch()),
          pU = tU.get("frame_id");
        if (!pU) throw new Error("frame_id query param is not defined");
        this.frameId = pU;
        const EU = tU.get("instance_id");
        if (!EU) throw new Error("instance_id query param is not defined");
        this.instanceId = EU;
        const PU = tU.get("platform");
        if (!PU) throw new Error("platform query param is not defined");
        if (PU !== Xg.DESKTOP && PU !== Xg.MOBILE) throw new Error(`Invalid query param "platform" of "${PU}". Valid values are "${Xg.DESKTOP}" or "${Xg.MOBILE}"`);
        this.platform = PU, this.guildId = tU.get("guild_id"), this.channelId = tU.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var UU;
          return [null !== (UU = window.parent.opener) && void 0 !== UU ? UU : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(UU, RU) {
        var gU;
        window.removeEventListener("message", this.handleMessage);
        const tU = Op();
        null === (gU = this.source) || void 0 === gU || gU.postMessage([pE.CLOSE, {
          code: UU,
          message: RU,
          nonce: tU
        }], this.sourceOrigin)
      }
      async subscribe(UU, RU) {
        for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
        const [EU] = tU, PU = this.eventBus.listenerCount(UU), TU = this.eventBus.on(UU, RU);
        return Object.values(Xt).includes(UU) && UU !== Xt.READY && 0 === PU && await this.sendCommand({
          cmd: Dg.SUBSCRIBE,
          args: EU,
          evt: UU
        }), TU
      }
      async unsubscribe(UU, RU) {
        for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
        const [EU] = tU;
        return UU !== Xt.READY && 1 === this.eventBus.listenerCount(UU) && await this.sendCommand({
          cmd: Dg.UNSUBSCRIBE,
          evt: UU,
          args: EU
        }), this.eventBus.off(UU, RU)
      }
      async ready() {
        this.isReady || await new Promise((UU => {
          this.eventBus.once(Xt.READY, UU)
        }))
      }
      handshake() {
        var UU;
        null === (UU = this.source) || void 0 === UU || UU.postMessage([pE.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Xt.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const UU = (UU, RU) => {
          this.commands.captureLog({
            level: UU,
            message: RU
          })
        };
        tE.forEach((RU => {
          ! function(UU, RU, gU) {
            const tU = UU[RU],
              pU = UU;
            tU && (UU[RU] = function() {
              const UU = [].slice.call(arguments),
                EU = "" + UU.join(" ");
              gU(RU, EU), tU.apply(pU, UU)
            })
          }(console, RU, UU)
        }))
      }
      handleClose(UU) {
        Kp.parse(UU)
      }
      handleHandshake() {}
      handleFrame(UU) {
        var RU, gU;
        let tU;
        try {
          tU = Gp(UU)
        } catch (pU) {
          return console.error("Failed to parse", UU), void console.error(pU)
        }
        if ("DISPATCH" === tU.cmd) this.eventBus.emit(tU.evt, tU.data);
        else {
          if (tU.evt === rt) {
            if (null != tU.nonce) return null === (RU = this.pendingCommands.get(tU.nonce)) || void 0 === RU || RU.reject(tU.data), void this.pendingCommands.delete(tU.nonce);
            this.eventBus.emit("error", new gE(tU.data.code, tU.data.message))
          }
          if (null == tU.nonce) return void console.error("Missing nonce", UU);
          null === (gU = this.pendingCommands.get(tU.nonce)) || void 0 === gU || gU.resolve(tU), this.pendingCommands.delete(tU.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var TE, qE = 1e9,
      KE = !0,
      cE = "[DecimalError] ",
      GE = cE + "Invalid argument: ",
      jE = cE + "Exponent out of range: ",
      uE = Math.floor,
      CE = Math.pow,
      hE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      QE = 1e7,
      eE = 9007199254740991,
      WE = uE(1286742750677284.5),
      fE = {};

    function xE(UU, RU) {
      var gU, tU, pU, EU, PU, TU, qU, KU, cU = UU.constructor,
        GU = cU.precision;
      if (!UU.s || !RU.s) return RU.s || (RU = new cU(UU)), KE ? YE(RU, GU) : RU;
      if (qU = UU.d, KU = RU.d, PU = UU.e, pU = RU.e, qU = qU.slice(), EU = PU - pU) {
        for (EU < 0 ? (tU = qU, EU = -EU, TU = KU.length) : (tU = KU, pU = PU, TU = qU.length), EU > (TU = (PU = Math.ceil(GU / 7)) > TU ? PU + 1 : TU + 1) && (EU = TU, tU.length = 1), tU.reverse(); EU--;) tU.push(0);
        tU.reverse()
      }
      for ((TU = qU.length) - (EU = KU.length) < 0 && (EU = TU, tU = KU, KU = qU, qU = tU), gU = 0; EU;) gU = (qU[--EU] = qU[EU] + KU[EU] + gU) / QE | 0, qU[EU] %= QE;
      for (gU && (qU.unshift(gU), ++pU), TU = qU.length; 0 == qU[--TU];) qU.pop();
      return RU.d = qU, RU.e = pU, KE ? YE(RU, GU) : RU
    }

    function mE(UU, RU, gU) {
      if (UU !== ~~UU || UU < RU || UU > gU) throw Error(GE + UU)
    }

    function IE(UU) {
      var RU, gU, tU, pU = UU.length - 1,
        EU = "",
        PU = UU[0];
      if (pU > 0) {
        for (EU += PU, RU = 1; RU < pU; RU++)(gU = 7 - (tU = UU[RU] + "").length) && (EU += oE(gU)), EU += tU;
        (gU = 7 - (tU = (PU = UU[RU]) + "").length) && (EU += oE(gU))
      } else if (0 === PU) return "0";
      for (; PU % 10 === 0;) PU /= 10;
      return EU + PU
    }
    fE.absoluteValue = fE.abs = function() {
      var UU = new this.constructor(this);
      return UU.s && (UU.s = 1), UU
    }, fE.comparedTo = fE.cmp = function(UU) {
      var RU, gU, tU, pU, EU = this;
      if (UU = new EU.constructor(UU), EU.s !== UU.s) return EU.s || -UU.s;
      if (EU.e !== UU.e) return EU.e > UU.e ^ EU.s < 0 ? 1 : -1;
      for (RU = 0, gU = (tU = EU.d.length) < (pU = UU.d.length) ? tU : pU; RU < gU; ++RU)
        if (EU.d[RU] !== UU.d[RU]) return EU.d[RU] > UU.d[RU] ^ EU.s < 0 ? 1 : -1;
      return tU === pU ? 0 : tU > pU ^ EU.s < 0 ? 1 : -1
    }, fE.decimalPlaces = fE.dp = function() {
      var UU = this,
        RU = UU.d.length - 1,
        gU = 7 * (RU - UU.e);
      if (RU = UU.d[RU])
        for (; RU % 10 == 0; RU /= 10) gU--;
      return gU < 0 ? 0 : gU
    }, fE.dividedBy = fE.div = function(UU) {
      return JE(this, new this.constructor(UU))
    }, fE.dividedToIntegerBy = fE.idiv = function(UU) {
      var RU = this.constructor;
      return YE(JE(this, new RU(UU), 0, 1), RU.precision)
    }, fE.equals = fE.eq = function(UU) {
      return !this.cmp(UU)
    }, fE.exponent = function() {
      return nE(this)
    }, fE.greaterThan = fE.gt = function(UU) {
      return this.cmp(UU) > 0
    }, fE.greaterThanOrEqualTo = fE.gte = function(UU) {
      return this.cmp(UU) >= 0
    }, fE.isInteger = fE.isint = function() {
      return this.e > this.d.length - 2
    }, fE.isNegative = fE.isneg = function() {
      return this.s < 0
    }, fE.isPositive = fE.ispos = function() {
      return this.s > 0
    }, fE.isZero = function() {
      return 0 === this.s
    }, fE.lessThan = fE.lt = function(UU) {
      return this.cmp(UU) < 0
    }, fE.lessThanOrEqualTo = fE.lte = function(UU) {
      return this.cmp(UU) < 1
    }, fE.logarithm = fE.log = function(UU) {
      var RU, gU = this,
        tU = gU.constructor,
        pU = tU.precision,
        EU = pU + 5;
      if (void 0 === UU) UU = new tU(10);
      else if ((UU = new tU(UU)).s < 1 || UU.eq(TE)) throw Error(cE + "NaN");
      if (gU.s < 1) throw Error(cE + (gU.s ? "NaN" : "-Infinity"));
      return gU.eq(TE) ? new tU(0) : (KE = !1, RU = JE(ZE(gU, EU), ZE(UU, EU), EU), KE = !0, YE(RU, pU))
    }, fE.minus = fE.sub = function(UU) {
      var RU = this;
      return UU = new RU.constructor(UU), RU.s == UU.s ? BE(RU, UU) : xE(RU, (UU.s = -UU.s, UU))
    }, fE.modulo = fE.mod = function(UU) {
      var RU, gU = this,
        tU = gU.constructor,
        pU = tU.precision;
      if (!(UU = new tU(UU)).s) throw Error(cE + "NaN");
      return gU.s ? (KE = !1, RU = JE(gU, UU, 0, 1).times(UU), KE = !0, gU.minus(RU)) : YE(new tU(gU), pU)
    }, fE.naturalExponential = fE.exp = function() {
      return wE(this)
    }, fE.naturalLogarithm = fE.ln = function() {
      return ZE(this)
    }, fE.negated = fE.neg = function() {
      var UU = new this.constructor(this);
      return UU.s = -UU.s || 0, UU
    }, fE.plus = fE.add = function(UU) {
      var RU = this;
      return UU = new RU.constructor(UU), RU.s == UU.s ? xE(RU, UU) : BE(RU, (UU.s = -UU.s, UU))
    }, fE.precision = fE.sd = function(UU) {
      var RU, gU, tU, pU = this;
      if (void 0 !== UU && UU !== !!UU && 1 !== UU && 0 !== UU) throw Error(GE + UU);
      if (RU = nE(pU) + 1, gU = 7 * (tU = pU.d.length - 1) + 1, tU = pU.d[tU]) {
        for (; tU % 10 == 0; tU /= 10) gU--;
        for (tU = pU.d[0]; tU >= 10; tU /= 10) gU++
      }
      return UU && RU > gU ? RU : gU
    }, fE.squareRoot = fE.sqrt = function() {
      var UU, RU, gU, tU, pU, EU, PU, TU = this,
        qU = TU.constructor;
      if (TU.s < 1) {
        if (!TU.s) return new qU(0);
        throw Error(cE + "NaN")
      }
      for (UU = nE(TU), KE = !1, 0 == (pU = Math.sqrt(+TU)) || pU == 1 / 0 ? (((RU = IE(TU.d)).length + UU) % 2 == 0 && (RU += "0"), pU = Math.sqrt(RU), UU = uE((UU + 1) / 2) - (UU < 0 || UU % 2), tU = new qU(RU = pU == 1 / 0 ? "1e" + UU : (RU = pU.toExponential()).slice(0, RU.indexOf("e") + 1) + UU)) : tU = new qU(pU.toString()), pU = PU = (gU = qU.precision) + 3;;)
        if (tU = (EU = tU).plus(JE(TU, EU, PU + 2)).times(.5), IE(EU.d).slice(0, PU) === (RU = IE(tU.d)).slice(0, PU)) {
          if (RU = RU.slice(PU - 3, PU + 1), pU == PU && "4999" == RU) {
            if (YE(EU, gU + 1, 0), EU.times(EU).eq(TU)) {
              tU = EU;
              break
            }
          } else if ("9999" != RU) break;
          PU += 4
        } return KE = !0, YE(tU, gU)
    }, fE.times = fE.mul = function(UU) {
      var RU, gU, tU, pU, EU, PU, TU, qU, KU, cU = this,
        GU = cU.constructor,
        jU = cU.d,
        uU = (UU = new GU(UU)).d;
      if (!cU.s || !UU.s) return new GU(0);
      for (UU.s *= cU.s, gU = cU.e + UU.e, (qU = jU.length) < (KU = uU.length) && (EU = jU, jU = uU, uU = EU, PU = qU, qU = KU, KU = PU), EU = [], tU = PU = qU + KU; tU--;) EU.push(0);
      for (tU = KU; --tU >= 0;) {
        for (RU = 0, pU = qU + tU; pU > tU;) TU = EU[pU] + uU[tU] * jU[pU - tU - 1] + RU, EU[pU--] = TU % QE | 0, RU = TU / QE | 0;
        EU[pU] = (EU[pU] + RU) % QE | 0
      }
      for (; !EU[--PU];) EU.pop();
      return RU ? ++gU : EU.shift(), UU.d = EU, UU.e = gU, KE ? YE(UU, GU.precision) : UU
    }, fE.toDecimalPlaces = fE.todp = function(UU, RU) {
      var gU = this,
        tU = gU.constructor;
      return gU = new tU(gU), void 0 === UU ? gU : (mE(UU, 0, qE), void 0 === RU ? RU = tU.rounding : mE(RU, 0, 8), YE(gU, UU + nE(gU) + 1, RU))
    }, fE.toExponential = function(UU, RU) {
      var gU, tU = this,
        pU = tU.constructor;
      return void 0 === UU ? gU = VE(tU, !0) : (mE(UU, 0, qE), void 0 === RU ? RU = pU.rounding : mE(RU, 0, 8), gU = VE(tU = YE(new pU(tU), UU + 1, RU), !0, UU + 1)), gU
    }, fE.toFixed = function(UU, RU) {
      var gU, tU, pU = this,
        EU = pU.constructor;
      return void 0 === UU ? VE(pU) : (mE(UU, 0, qE), void 0 === RU ? RU = EU.rounding : mE(RU, 0, 8), gU = VE((tU = YE(new EU(pU), UU + nE(pU) + 1, RU)).abs(), !1, UU + nE(tU) + 1), pU.isneg() && !pU.isZero() ? "-" + gU : gU)
    }, fE.toInteger = fE.toint = function() {
      var UU = this,
        RU = UU.constructor;
      return YE(new RU(UU), nE(UU) + 1, RU.rounding)
    }, fE.toNumber = function() {
      return +this
    }, fE.toPower = fE.pow = function(UU) {
      var RU, gU, tU, pU, EU, PU, TU = this,
        qU = TU.constructor,
        KU = +(UU = new qU(UU));
      if (!UU.s) return new qU(TE);
      if (!(TU = new qU(TU)).s) {
        if (UU.s < 1) throw Error(cE + "Infinity");
        return TU
      }
      if (TU.eq(TE)) return TU;
      if (tU = qU.precision, UU.eq(TE)) return YE(TU, tU);
      if (PU = (RU = UU.e) >= (gU = UU.d.length - 1), EU = TU.s, PU) {
        if ((gU = KU < 0 ? -KU : KU) <= eE) {
          for (pU = new qU(TE), RU = Math.ceil(tU / 7 + 4), KE = !1; gU % 2 && rE((pU = pU.times(TU)).d, RU), 0 !== (gU = uE(gU / 2));) rE((TU = TU.times(TU)).d, RU);
          return KE = !0, UU.s < 0 ? new qU(TE).div(pU) : YE(pU, tU)
        }
      } else if (EU < 0) throw Error(cE + "NaN");
      return EU = EU < 0 && 1 & UU.d[Math.max(RU, gU)] ? -1 : 1, TU.s = 1, KE = !1, pU = UU.times(ZE(TU, tU + 12)), KE = !0, (pU = wE(pU)).s = EU, pU
    }, fE.toPrecision = function(UU, RU) {
      var gU, tU, pU = this,
        EU = pU.constructor;
      return void 0 === UU ? tU = VE(pU, (gU = nE(pU)) <= EU.toExpNeg || gU >= EU.toExpPos) : (mE(UU, 1, qE), void 0 === RU ? RU = EU.rounding : mE(RU, 0, 8), tU = VE(pU = YE(new EU(pU), UU, RU), UU <= (gU = nE(pU)) || gU <= EU.toExpNeg, UU)), tU
    }, fE.toSignificantDigits = fE.tosd = function(UU, RU) {
      var gU = this.constructor;
      return void 0 === UU ? (UU = gU.precision, RU = gU.rounding) : (mE(UU, 1, qE), void 0 === RU ? RU = gU.rounding : mE(RU, 0, 8)), YE(new gU(this), UU, RU)
    }, fE.toString = fE.valueOf = fE.val = fE.toJSON = fE[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var UU = this,
        RU = nE(UU),
        gU = UU.constructor;
      return VE(UU, RU <= gU.toExpNeg || RU >= gU.toExpPos)
    };
    var JE = function() {
      function UU(UU, RU) {
        var gU, tU = 0,
          pU = UU.length;
        for (UU = UU.slice(); pU--;) gU = UU[pU] * RU + tU, UU[pU] = gU % QE | 0, tU = gU / QE | 0;
        return tU && UU.unshift(tU), UU
      }

      function RU(UU, RU, gU, tU) {
        var pU, EU;
        if (gU != tU) EU = gU > tU ? 1 : -1;
        else
          for (pU = EU = 0; pU < gU; pU++)
            if (UU[pU] != RU[pU]) {
              EU = UU[pU] > RU[pU] ? 1 : -1;
              break
            } return EU
      }

      function gU(UU, RU, gU) {
        for (var tU = 0; gU--;) UU[gU] -= tU, tU = UU[gU] < RU[gU] ? 1 : 0, UU[gU] = tU * QE + UU[gU] - RU[gU];
        for (; !UU[0] && UU.length > 1;) UU.shift()
      }
      return function(tU, pU, EU, PU) {
        var TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU, nU = tU.constructor,
          bU = tU.s == pU.s ? 1 : -1,
          oU = tU.d,
          ZU = pU.d;
        if (!tU.s) return new nU(tU);
        if (!pU.s) throw Error(cE + "Division by zero");
        for (qU = tU.e - pU.e, JU = ZU.length, mU = oU.length, CU = (uU = new nU(bU)).d = [], KU = 0; ZU[KU] == (oU[KU] || 0);) ++KU;
        if (ZU[KU] > (oU[KU] || 0) && --qU, (WU = null == EU ? EU = nU.precision : PU ? EU + (nE(tU) - nE(pU)) + 1 : EU) < 0) return new nU(0);
        if (WU = WU / 7 + 2 | 0, KU = 0, 1 == JU)
          for (cU = 0, ZU = ZU[0], WU++;
            (KU < mU || cU) && WU--; KU++) fU = cU * QE + (oU[KU] || 0), CU[KU] = fU / ZU | 0, cU = fU % ZU | 0;
        else {
          for ((cU = QE / (ZU[0] + 1) | 0) > 1 && (ZU = UU(ZU, cU), oU = UU(oU, cU), JU = ZU.length, mU = oU.length), xU = JU, QU = (hU = oU.slice(0, JU)).length; QU < JU;) hU[QU++] = 0;
          (wU = ZU.slice()).unshift(0), IU = ZU[0], ZU[1] >= QE / 2 && ++IU;
          do {
            cU = 0, (TU = RU(ZU, hU, JU, QU)) < 0 ? (eU = hU[0], JU != QU && (eU = eU * QE + (hU[1] || 0)), (cU = eU / IU | 0) > 1 ? (cU >= QE && (cU = QE - 1), 1 == (TU = RU(GU = UU(ZU, cU), hU, jU = GU.length, QU = hU.length)) && (cU--, gU(GU, JU < jU ? wU : ZU, jU))) : (0 == cU && (TU = cU = 1), GU = ZU.slice()), (jU = GU.length) < QU && GU.unshift(0), gU(hU, GU, QU), -1 == TU && (TU = RU(ZU, hU, JU, QU = hU.length)) < 1 && (cU++, gU(hU, JU < QU ? wU : ZU, QU)), QU = hU.length) : 0 === TU && (cU++, hU = [0]), CU[KU++] = cU, TU && hU[0] ? hU[QU++] = oU[xU] || 0 : (hU = [oU[xU]], QU = 1)
          } while ((xU++ < mU || void 0 !== hU[0]) && WU--)
        }
        return CU[0] || CU.shift(), uU.e = qU, YE(uU, PU ? EU + nE(uU) + 1 : EU)
      }
    }();

    function wE(UU, RU) {
      var gU, tU, pU, EU, PU, TU = 0,
        qU = 0,
        KU = UU.constructor,
        cU = KU.precision;
      if (nE(UU) > 16) throw Error(jE + nE(UU));
      if (!UU.s) return new KU(TE);
      for (null == RU ? (KE = !1, PU = cU) : PU = RU, EU = new KU(.03125); UU.abs().gte(.1);) UU = UU.times(EU), qU += 5;
      for (PU += Math.log(CE(2, qU)) / Math.LN10 * 2 + 5 | 0, gU = tU = pU = new KU(TE), KU.precision = PU;;) {
        if (tU = YE(tU.times(UU), PU), gU = gU.times(++TU), IE((EU = pU.plus(JE(tU, gU, PU))).d).slice(0, PU) === IE(pU.d).slice(0, PU)) {
          for (; qU--;) pU = YE(pU.times(pU), PU);
          return KU.precision = cU, null == RU ? (KE = !0, YE(pU, cU)) : pU
        }
        pU = EU
      }
    }

    function nE(UU) {
      for (var RU = 7 * UU.e, gU = UU.d[0]; gU >= 10; gU /= 10) RU++;
      return RU
    }

    function bE(UU, RU, gU) {
      if (RU > UU.LN10.sd()) throw KE = !0, gU && (UU.precision = gU), Error(cE + "LN10 precision limit exceeded");
      return YE(new UU(UU.LN10), RU)
    }

    function oE(UU) {
      for (var RU = ""; UU--;) RU += "0";
      return RU
    }

    function ZE(UU, RU) {
      var gU, tU, pU, EU, PU, TU, qU, KU, cU, GU = 1,
        jU = UU,
        uU = jU.d,
        CU = jU.constructor,
        hU = CU.precision;
      if (jU.s < 1) throw Error(cE + (jU.s ? "NaN" : "-Infinity"));
      if (jU.eq(TE)) return new CU(0);
      if (null == RU ? (KE = !1, KU = hU) : KU = RU, jU.eq(10)) return null == RU && (KE = !0), bE(CU, KU);
      if (KU += 10, CU.precision = KU, tU = (gU = IE(uU)).charAt(0), EU = nE(jU), !(Math.abs(EU) < 15e14)) return qU = bE(CU, KU + 2, hU).times(EU + ""), jU = ZE(new CU(tU + "." + gU.slice(1)), KU - 10).plus(qU), CU.precision = hU, null == RU ? (KE = !0, YE(jU, hU)) : jU;
      for (; tU < 7 && 1 != tU || 1 == tU && gU.charAt(1) > 3;) tU = (gU = IE((jU = jU.times(UU)).d)).charAt(0), GU++;
      for (EU = nE(jU), tU > 1 ? (jU = new CU("0." + gU), EU++) : jU = new CU(tU + "." + gU.slice(1)), TU = PU = jU = JE(jU.minus(TE), jU.plus(TE), KU), cU = YE(jU.times(jU), KU), pU = 3;;) {
        if (PU = YE(PU.times(cU), KU), IE((qU = TU.plus(JE(PU, new CU(pU), KU))).d).slice(0, KU) === IE(TU.d).slice(0, KU)) return TU = TU.times(2), 0 !== EU && (TU = TU.plus(bE(CU, KU + 2, hU).times(EU + ""))), TU = JE(TU, new CU(GU), KU), CU.precision = hU, null == RU ? (KE = !0, YE(TU, hU)) : TU;
        TU = qU, pU += 2
      }
    }

    function aE(UU, RU) {
      var gU, tU, pU;
      for ((gU = RU.indexOf(".")) > -1 && (RU = RU.replace(".", "")), (tU = RU.search(/e/i)) > 0 ? (gU < 0 && (gU = tU), gU += +RU.slice(tU + 1), RU = RU.substring(0, tU)) : gU < 0 && (gU = RU.length), tU = 0; 48 === RU.charCodeAt(tU);) ++tU;
      for (pU = RU.length; 48 === RU.charCodeAt(pU - 1);) --pU;
      if (RU = RU.slice(tU, pU)) {
        if (pU -= tU, gU = gU - tU - 1, UU.e = uE(gU / 7), UU.d = [], tU = (gU + 1) % 7, gU < 0 && (tU += 7), tU < pU) {
          for (tU && UU.d.push(+RU.slice(0, tU)), pU -= 7; tU < pU;) UU.d.push(+RU.slice(tU, tU += 7));
          tU = 7 - (RU = RU.slice(tU)).length
        } else tU -= pU;
        for (; tU--;) RU += "0";
        if (UU.d.push(+RU), KE && (UU.e > WE || UU.e < -WE)) throw Error(jE + gU)
      } else UU.s = 0, UU.e = 0, UU.d = [0];
      return UU
    }

    function YE(UU, RU, gU) {
      var tU, pU, EU, PU, TU, qU, KU, cU, GU = UU.d;
      for (PU = 1, EU = GU[0]; EU >= 10; EU /= 10) PU++;
      if ((tU = RU - PU) < 0) tU += 7, pU = RU, KU = GU[cU = 0];
      else {
        if ((cU = Math.ceil((tU + 1) / 7)) >= (EU = GU.length)) return UU;
        for (KU = EU = GU[cU], PU = 1; EU >= 10; EU /= 10) PU++;
        pU = (tU %= 7) - 7 + PU
      }
      if (void 0 !== gU && (TU = KU / (EU = CE(10, PU - pU - 1)) % 10 | 0, qU = RU < 0 || void 0 !== GU[cU + 1] || KU % EU, qU = gU < 4 ? (TU || qU) && (0 == gU || gU == (UU.s < 0 ? 3 : 2)) : TU > 5 || 5 == TU && (4 == gU || qU || 6 == gU && (tU > 0 ? pU > 0 ? KU / CE(10, PU - pU) : 0 : GU[cU - 1]) % 10 & 1 || gU == (UU.s < 0 ? 8 : 7))), RU < 1 || !GU[0]) return qU ? (EU = nE(UU), GU.length = 1, RU = RU - EU - 1, GU[0] = CE(10, (7 - RU % 7) % 7), UU.e = uE(-RU / 7) || 0) : (GU.length = 1, GU[0] = UU.e = UU.s = 0), UU;
      if (0 == tU ? (GU.length = cU, EU = 1, cU--) : (GU.length = cU + 1, EU = CE(10, 7 - tU), GU[cU] = pU > 0 ? (KU / CE(10, PU - pU) % CE(10, pU) | 0) * EU : 0), qU)
        for (;;) {
          if (0 == cU) {
            (GU[0] += EU) == QE && (GU[0] = 1, ++UU.e);
            break
          }
          if (GU[cU] += EU, GU[cU] != QE) break;
          GU[cU--] = 0, EU = 1
        }
      for (tU = GU.length; 0 === GU[--tU];) GU.pop();
      if (KE && (UU.e > WE || UU.e < -WE)) throw Error(jE + nE(UU));
      return UU
    }

    function BE(UU, RU) {
      var gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU = UU.constructor,
        uU = jU.precision;
      if (!UU.s || !RU.s) return RU.s ? RU.s = -RU.s : RU = new jU(UU), KE ? YE(RU, uU) : RU;
      if (qU = UU.d, GU = RU.d, tU = RU.e, KU = UU.e, qU = qU.slice(), PU = KU - tU) {
        for ((cU = PU < 0) ? (gU = qU, PU = -PU, TU = GU.length) : (gU = GU, tU = KU, TU = qU.length), PU > (pU = Math.max(Math.ceil(uU / 7), TU) + 2) && (PU = pU, gU.length = 1), gU.reverse(), pU = PU; pU--;) gU.push(0);
        gU.reverse()
      } else {
        for ((cU = (pU = qU.length) < (TU = GU.length)) && (TU = pU), pU = 0; pU < TU; pU++)
          if (qU[pU] != GU[pU]) {
            cU = qU[pU] < GU[pU];
            break
          } PU = 0
      }
      for (cU && (gU = qU, qU = GU, GU = gU, RU.s = -RU.s), TU = qU.length, pU = GU.length - TU; pU > 0; --pU) qU[TU++] = 0;
      for (pU = GU.length; pU > PU;) {
        if (qU[--pU] < GU[pU]) {
          for (EU = pU; EU && 0 === qU[--EU];) qU[EU] = QE - 1;
          --qU[EU], qU[pU] += QE
        }
        qU[pU] -= GU[pU]
      }
      for (; 0 === qU[--TU];) qU.pop();
      for (; 0 === qU[0]; qU.shift()) --tU;
      return qU[0] ? (RU.d = qU, RU.e = tU, KE ? YE(RU, uU) : RU) : new jU(0)
    }

    function VE(UU, RU, gU) {
      var tU, pU = nE(UU),
        EU = IE(UU.d),
        PU = EU.length;
      return RU ? (gU && (tU = gU - PU) > 0 ? EU = EU.charAt(0) + "." + EU.slice(1) + oE(tU) : PU > 1 && (EU = EU.charAt(0) + "." + EU.slice(1)), EU = EU + (pU < 0 ? "e" : "e+") + pU) : pU < 0 ? (EU = "0." + oE(-pU - 1) + EU, gU && (tU = gU - PU) > 0 && (EU += oE(tU))) : pU >= PU ? (EU += oE(pU + 1 - PU), gU && (tU = gU - pU - 1) > 0 && (EU = EU + "." + oE(tU))) : ((tU = pU + 1) < PU && (EU = EU.slice(0, tU) + "." + EU.slice(tU)), gU && (tU = gU - PU) > 0 && (pU + 1 === PU && (EU += "."), EU += oE(tU))), UU.s < 0 ? "-" + EU : EU
    }

    function rE(UU, RU) {
      if (UU.length > RU) return UU.length = RU, !0
    }

    function XE(UU) {
      if (!UU || "object" !== typeof UU) throw Error(cE + "Object expected");
      var RU, gU, tU, pU = ["precision", 1, qE, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (RU = 0; RU < pU.length; RU += 3)
        if (void 0 !== (tU = UU[gU = pU[RU]])) {
          if (!(uE(tU) === tU && tU >= pU[RU + 1] && tU <= pU[RU + 2])) throw Error(GE + gU + ": " + tU);
          this[gU] = tU
        } if (void 0 !== (tU = UU[gU = "LN10"])) {
        if (tU != Math.LN10) throw Error(GE + gU + ": " + tU);
        this[gU] = new this(tU)
      }
      return this
    }
    var vE = function UU(RU) {
      var gU, tU, pU;

      function EU(UU) {
        var RU = this;
        if (!(RU instanceof EU)) return new EU(UU);
        if (RU.constructor = EU, UU instanceof EU) return RU.s = UU.s, RU.e = UU.e, void(RU.d = (UU = UU.d) ? UU.slice() : UU);
        if ("number" === typeof UU) {
          if (0 * UU !== 0) throw Error(GE + UU);
          if (UU > 0) RU.s = 1;
          else {
            if (!(UU < 0)) return RU.s = 0, RU.e = 0, void(RU.d = [0]);
            UU = -UU, RU.s = -1
          }
          return UU === ~~UU && UU < 1e7 ? (RU.e = 0, void(RU.d = [UU])) : aE(RU, UU.toString())
        }
        if ("string" !== typeof UU) throw Error(GE + UU);
        if (45 === UU.charCodeAt(0) ? (UU = UU.slice(1), RU.s = -1) : RU.s = 1, !hE.test(UU)) throw Error(GE + UU);
        aE(RU, UU)
      }
      if (EU.prototype = fE, EU.ROUND_UP = 0, EU.ROUND_DOWN = 1, EU.ROUND_CEIL = 2, EU.ROUND_FLOOR = 3, EU.ROUND_HALF_UP = 4, EU.ROUND_HALF_DOWN = 5, EU.ROUND_HALF_EVEN = 6, EU.ROUND_HALF_CEIL = 7, EU.ROUND_HALF_FLOOR = 8, EU.clone = UU, EU.config = EU.set = XE, void 0 === RU && (RU = {}), RU)
        for (pU = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], gU = 0; gU < pU.length;) RU.hasOwnProperty(tU = pU[gU++]) || (RU[tU] = this[tU]);
      return EU.config(RU), EU
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    TE = new vE(1);
    var dE;
    ! function(UU) {
      UU.AED = "aed", UU.AFN = "afn", UU.ALL = "all", UU.AMD = "amd", UU.ANG = "ang", UU.AOA = "aoa", UU.ARS = "ars", UU.AUD = "aud", UU.AWG = "awg", UU.AZN = "azn", UU.BAM = "bam", UU.BBD = "bbd", UU.BDT = "bdt", UU.BGN = "bgn", UU.BHD = "bhd", UU.BIF = "bif", UU.BMD = "bmd", UU.BND = "bnd", UU.BOB = "bob", UU.BOV = "bov", UU.BRL = "brl", UU.BSD = "bsd", UU.BTN = "btn", UU.BWP = "bwp", UU.BYN = "byn", UU.BYR = "byr", UU.BZD = "bzd", UU.CAD = "cad", UU.CDF = "cdf", UU.CHE = "che", UU.CHF = "chf", UU.CHW = "chw", UU.CLF = "clf", UU.CLP = "clp", UU.CNY = "cny", UU.COP = "cop", UU.COU = "cou", UU.CRC = "crc", UU.CUC = "cuc", UU.CUP = "cup", UU.CVE = "cve", UU.CZK = "czk", UU.DJF = "djf", UU.DKK = "dkk", UU.DOP = "dop", UU.DZD = "dzd", UU.EGP = "egp", UU.ERN = "ern", UU.ETB = "etb", UU.EUR = "eur", UU.FJD = "fjd", UU.FKP = "fkp", UU.GBP = "gbp", UU.GEL = "gel", UU.GHS = "ghs", UU.GIP = "gip", UU.GMD = "gmd", UU.GNF = "gnf", UU.GTQ = "gtq", UU.GYD = "gyd", UU.HKD = "hkd", UU.HNL = "hnl", UU.HRK = "hrk", UU.HTG = "htg", UU.HUF = "huf", UU.IDR = "idr", UU.ILS = "ils", UU.INR = "inr", UU.IQD = "iqd", UU.IRR = "irr", UU.ISK = "isk", UU.JMD = "jmd", UU.JOD = "jod", UU.JPY = "jpy", UU.KES = "kes", UU.KGS = "kgs", UU.KHR = "khr", UU.KMF = "kmf", UU.KPW = "kpw", UU.KRW = "krw", UU.KWD = "kwd", UU.KYD = "kyd", UU.KZT = "kzt", UU.LAK = "lak", UU.LBP = "lbp", UU.LKR = "lkr", UU.LRD = "lrd", UU.LSL = "lsl", UU.LTL = "ltl", UU.LVL = "lvl", UU.LYD = "lyd", UU.MAD = "mad", UU.MDL = "mdl", UU.MGA = "mga", UU.MKD = "mkd", UU.MMK = "mmk", UU.MNT = "mnt", UU.MOP = "mop", UU.MRO = "mro", UU.MUR = "mur", UU.MVR = "mvr", UU.MWK = "mwk", UU.MXN = "mxn", UU.MXV = "mxv", UU.MYR = "myr", UU.MZN = "mzn", UU.NAD = "nad", UU.NGN = "ngn", UU.NIO = "nio", UU.NOK = "nok", UU.NPR = "npr", UU.NZD = "nzd", UU.OMR = "omr", UU.PAB = "pab", UU.PEN = "pen", UU.PGK = "pgk", UU.PHP = "php", UU.PKR = "pkr", UU.PLN = "pln", UU.PYG = "pyg", UU.QAR = "qar", UU.RON = "ron", UU.RSD = "rsd", UU.RUB = "rub", UU.RWF = "rwf", UU.SAR = "sar", UU.SBD = "sbd", UU.SCR = "scr", UU.SDG = "sdg", UU.SEK = "sek", UU.SGD = "sgd", UU.SHP = "shp", UU.SLL = "sll", UU.SOS = "sos", UU.SRD = "srd", UU.SSP = "ssp", UU.STD = "std", UU.SVC = "svc", UU.SYP = "syp", UU.SZL = "szl", UU.THB = "thb", UU.TJS = "tjs", UU.TMT = "tmt", UU.TND = "tnd", UU.TOP = "top", UU.TRY = "try", UU.TTD = "ttd", UU.TWD = "twd", UU.TZS = "tzs", UU.UAH = "uah", UU.UGX = "ugx", UU.USD = "usd", UU.USN = "usn", UU.USS = "uss", UU.UYI = "uyi", UU.UYU = "uyu", UU.UZS = "uzs", UU.VEF = "vef", UU.VND = "vnd", UU.VUV = "vuv", UU.WST = "wst", UU.XAF = "xaf", UU.XAG = "xag", UU.XAU = "xau", UU.XBA = "xba", UU.XBB = "xbb", UU.XBC = "xbc", UU.XBD = "xbd", UU.XCD = "xcd", UU.XDR = "xdr", UU.XFU = "xfu", UU.XOF = "xof", UU.XPD = "xpd", UU.XPF = "xpf", UU.XPT = "xpt", UU.XSU = "xsu", UU.XTS = "xts", UU.XUA = "xua", UU.YER = "yer", UU.ZAR = "zar", UU.ZMW = "zmw", UU.ZWL = "zwl"
    }(dE || (dE = {}));
    dE.AED, dE.AFN, dE.ALL, dE.AMD, dE.ANG, dE.AOA, dE.ARS, dE.AUD, dE.AWG, dE.AZN, dE.BAM, dE.BBD, dE.BDT, dE.BGN, dE.BHD, dE.BIF, dE.BMD, dE.BND, dE.BOB, dE.BOV, dE.BRL, dE.BSD, dE.BTN, dE.BWP, dE.BYR, dE.BYN, dE.BZD, dE.CAD, dE.CDF, dE.CHE, dE.CHF, dE.CHW, dE.CLF, dE.CLP, dE.CNY, dE.COP, dE.COU, dE.CRC, dE.CUC, dE.CUP, dE.CVE, dE.CZK, dE.DJF, dE.DKK, dE.DOP, dE.DZD, dE.EGP, dE.ERN, dE.ETB, dE.EUR, dE.FJD, dE.FKP, dE.GBP, dE.GEL, dE.GHS, dE.GIP, dE.GMD, dE.GNF, dE.GTQ, dE.GYD, dE.HKD, dE.HNL, dE.HRK, dE.HTG, dE.HUF, dE.IDR, dE.ILS, dE.INR, dE.IQD, dE.IRR, dE.ISK, dE.JMD, dE.JOD, dE.JPY, dE.KES, dE.KGS, dE.KHR, dE.KMF, dE.KPW, dE.KRW, dE.KWD, dE.KYD, dE.KZT, dE.LAK, dE.LBP, dE.LKR, dE.LRD, dE.LSL, dE.LTL, dE.LVL, dE.LYD, dE.MAD, dE.MDL, dE.MGA, dE.MKD, dE.MMK, dE.MNT, dE.MOP, dE.MRO, dE.MUR, dE.MVR, dE.MWK, dE.MXN, dE.MXV, dE.MYR, dE.MZN, dE.NAD, dE.NGN, dE.NIO, dE.NOK, dE.NPR, dE.NZD, dE.OMR, dE.PAB, dE.PEN, dE.PGK, dE.PHP, dE.PKR, dE.PLN, dE.PYG, dE.QAR, dE.RON, dE.RSD, dE.RUB, dE.RWF, dE.SAR, dE.SBD, dE.SCR, dE.SDG, dE.SEK, dE.SGD, dE.SHP, dE.SLL, dE.SOS, dE.SRD, dE.SSP, dE.STD, dE.SVC, dE.SYP, dE.SZL, dE.THB, dE.TJS, dE.TMT, dE.TND, dE.TOP, dE.TRY, dE.TTD, dE.TWD, dE.TZS, dE.UAH, dE.UGX, dE.USD, dE.USN, dE.USS, dE.UYI, dE.UYU, dE.UZS, dE.VEF, dE.VND, dE.VUV, dE.WST, dE.XAF, dE.XAG, dE.XAU, dE.XBA, dE.XBB, dE.XBC, dE.XBD, dE.XCD, dE.XDR, dE.XFU, dE.XOF, dE.XPD, dE.XPF, dE.XPT, dE.XSU, dE.XTS, dE.XUA, dE.YER, dE.ZAR, dE.ZMW, dE.ZWL;
    var HE = {
      exports: {}
    };
    ! function(UU, RU) {
      var gU = "__lodash_hash_undefined__",
        tU = 9007199254740991,
        EU = "[object Arguments]",
        PU = "[object Array]",
        TU = "[object Boolean]",
        qU = "[object Date]",
        KU = "[object Error]",
        cU = "[object Function]",
        GU = "[object Map]",
        jU = "[object Number]",
        uU = "[object Object]",
        CU = "[object Promise]",
        hU = "[object RegExp]",
        QU = "[object Set]",
        eU = "[object String]",
        WU = "[object Symbol]",
        fU = "[object WeakMap]",
        xU = "[object ArrayBuffer]",
        mU = "[object DataView]",
        IU = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        JU = /^\w*$/,
        wU = /^\./,
        nU = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        bU = /\\(\\)?/g,
        oU = /^\[object .+?Constructor\]$/,
        ZU = /^(?:0|[1-9]\d*)$/,
        aU = {};
      aU["[object Float32Array]"] = aU["[object Float64Array]"] = aU["[object Int8Array]"] = aU["[object Int16Array]"] = aU["[object Int32Array]"] = aU["[object Uint8Array]"] = aU["[object Uint8ClampedArray]"] = aU["[object Uint16Array]"] = aU["[object Uint32Array]"] = !0, aU[EU] = aU[PU] = aU[xU] = aU[TU] = aU[mU] = aU[qU] = aU[KU] = aU[cU] = aU[GU] = aU[jU] = aU[uU] = aU[hU] = aU[QU] = aU[eU] = aU[fU] = !1;
      var YU = "object" == typeof pU && pU && pU.Object === Object && pU,
        BU = "object" == typeof self && self && self.Object === Object && self,
        VU = YU || BU || Function("return this")(),
        rU = RU && !RU.nodeType && RU,
        XU = rU && UU && !UU.nodeType && UU,
        vU = XU && XU.exports === rU && YU.process,
        dU = function() {
          try {
            return vU && vU.binding("util")
          } catch (UU) {}
        }(),
        HU = dU && dU.isTypedArray;

      function SU(UU, RU) {
        for (var gU = -1, tU = UU ? UU.length : 0; ++gU < tU && !1 !== RU(UU[gU], gU, UU););
        return UU
      }

      function sU(UU, RU) {
        for (var gU = -1, tU = UU ? UU.length : 0; ++gU < tU;)
          if (RU(UU[gU], gU, UU)) return !0;
        return !1
      }

      function yU(UU) {
        var RU = !1;
        if (null != UU && "function" != typeof UU.toString) try {
          RU = !!(UU + "")
        } catch (gU) {}
        return RU
      }

      function kU(UU) {
        var RU = -1,
          gU = Array(UU.size);
        return UU.forEach((function(UU, tU) {
          gU[++RU] = [tU, UU]
        })), gU
      }

      function FU(UU, RU) {
        return function(gU) {
          return UU(RU(gU))
        }
      }

      function iU(UU) {
        var RU = -1,
          gU = Array(UU.size);
        return UU.forEach((function(UU) {
          gU[++RU] = UU
        })), gU
      }
      var AU = Array.prototype,
        zU = Function.prototype,
        MU = Object.prototype,
        DU = VU["__core-js_shared__"],
        LU = function() {
          var UU = /[^.]+$/.exec(DU && DU.keys && DU.keys.IE_PROTO || "");
          return UU ? "Symbol(src)_1." + UU : ""
        }(),
        NU = zU.toString,
        lU = MU.hasOwnProperty,
        OU = MU.toString,
        UR = RegExp("^" + NU.call(lU).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        RR = VU.Symbol,
        gR = VU.Uint8Array,
        tR = FU(Object.getPrototypeOf, Object),
        pR = Object.create,
        ER = MU.propertyIsEnumerable,
        PR = AU.splice,
        TR = FU(Object.keys, Object),
        qR = kR(VU, "DataView"),
        KR = kR(VU, "Map"),
        cR = kR(VU, "Promise"),
        GR = kR(VU, "Set"),
        jR = kR(VU, "WeakMap"),
        uR = kR(Object, "create"),
        CR = NR(qR),
        hR = NR(KR),
        QR = NR(cR),
        eR = NR(GR),
        WR = NR(jR),
        fR = RR ? RR.prototype : void 0,
        xR = fR ? fR.valueOf : void 0,
        mR = fR ? fR.toString : void 0;

      function IR(UU) {
        var RU = -1,
          gU = UU ? UU.length : 0;
        for (this.clear(); ++RU < gU;) {
          var tU = UU[RU];
          this.set(tU[0], tU[1])
        }
      }

      function JR(UU) {
        var RU = -1,
          gU = UU ? UU.length : 0;
        for (this.clear(); ++RU < gU;) {
          var tU = UU[RU];
          this.set(tU[0], tU[1])
        }
      }

      function wR(UU) {
        var RU = -1,
          gU = UU ? UU.length : 0;
        for (this.clear(); ++RU < gU;) {
          var tU = UU[RU];
          this.set(tU[0], tU[1])
        }
      }

      function nR(UU) {
        var RU = -1,
          gU = UU ? UU.length : 0;
        for (this.__data__ = new wR; ++RU < gU;) this.add(UU[RU])
      }

      function bR(UU) {
        this.__data__ = new JR(UU)
      }

      function oR(UU, RU) {
        var gU = Rg(UU) || Ug(UU) ? function(UU, RU) {
            for (var gU = -1, tU = Array(UU); ++gU < UU;) tU[gU] = RU(gU);
            return tU
          }(UU.length, String) : [],
          tU = gU.length,
          pU = !!tU;
        for (var EU in UU) !RU && !lU.call(UU, EU) || pU && ("length" == EU || iR(EU, tU)) || gU.push(EU);
        return gU
      }

      function ZR(UU, RU) {
        for (var gU = UU.length; gU--;)
          if (OR(UU[gU][0], RU)) return gU;
        return -1
      }
      IR.prototype.clear = function() {
        this.__data__ = uR ? uR(null) : {}
      }, IR.prototype.delete = function(UU) {
        return this.has(UU) && delete this.__data__[UU]
      }, IR.prototype.get = function(UU) {
        var RU = this.__data__;
        if (uR) {
          var tU = RU[UU];
          return tU === gU ? void 0 : tU
        }
        return lU.call(RU, UU) ? RU[UU] : void 0
      }, IR.prototype.has = function(UU) {
        var RU = this.__data__;
        return uR ? void 0 !== RU[UU] : lU.call(RU, UU)
      }, IR.prototype.set = function(UU, RU) {
        return this.__data__[UU] = uR && void 0 === RU ? gU : RU, this
      }, JR.prototype.clear = function() {
        this.__data__ = []
      }, JR.prototype.delete = function(UU) {
        var RU = this.__data__,
          gU = ZR(RU, UU);
        return !(gU < 0) && (gU == RU.length - 1 ? RU.pop() : PR.call(RU, gU, 1), !0)
      }, JR.prototype.get = function(UU) {
        var RU = this.__data__,
          gU = ZR(RU, UU);
        return gU < 0 ? void 0 : RU[gU][1]
      }, JR.prototype.has = function(UU) {
        return ZR(this.__data__, UU) > -1
      }, JR.prototype.set = function(UU, RU) {
        var gU = this.__data__,
          tU = ZR(gU, UU);
        return tU < 0 ? gU.push([UU, RU]) : gU[tU][1] = RU, this
      }, wR.prototype.clear = function() {
        this.__data__ = {
          hash: new IR,
          map: new(KR || JR),
          string: new IR
        }
      }, wR.prototype.delete = function(UU) {
        return yR(this, UU).delete(UU)
      }, wR.prototype.get = function(UU) {
        return yR(this, UU).get(UU)
      }, wR.prototype.has = function(UU) {
        return yR(this, UU).has(UU)
      }, wR.prototype.set = function(UU, RU) {
        return yR(this, UU).set(UU, RU), this
      }, nR.prototype.add = nR.prototype.push = function(UU) {
        return this.__data__.set(UU, gU), this
      }, nR.prototype.has = function(UU) {
        return this.__data__.has(UU)
      }, bR.prototype.clear = function() {
        this.__data__ = new JR
      }, bR.prototype.delete = function(UU) {
        return this.__data__.delete(UU)
      }, bR.prototype.get = function(UU) {
        return this.__data__.get(UU)
      }, bR.prototype.has = function(UU) {
        return this.__data__.has(UU)
      }, bR.prototype.set = function(UU, RU) {
        var gU = this.__data__;
        if (gU instanceof JR) {
          var tU = gU.__data__;
          if (!KR || tU.length < 199) return tU.push([UU, RU]), this;
          gU = this.__data__ = new wR(tU)
        }
        return gU.set(UU, RU), this
      };
      var aR, YR = function(UU, RU, gU) {
        for (var tU = -1, pU = Object(UU), EU = gU(UU), PU = EU.length; PU--;) {
          var TU = EU[aR ? PU : ++tU];
          if (!1 === RU(pU[TU], TU, pU)) break
        }
        return UU
      };

      function BR(UU, RU) {
        return UU && YR(UU, RU, cg)
      }

      function VR(UU, RU) {
        for (var gU = 0, tU = (RU = AR(RU, UU) ? [RU] : SR(RU)).length; null != UU && gU < tU;) UU = UU[LR(RU[gU++])];
        return gU && gU == tU ? UU : void 0
      }

      function rR(UU, RU) {
        return null != UU && RU in Object(UU)
      }

      function XR(UU, RU, gU, tU, pU) {
        return UU === RU || (null == UU || null == RU || !Eg(UU) && !Pg(RU) ? UU !== UU && RU !== RU : function(UU, RU, gU, tU, pU, cU) {
          var CU = Rg(UU),
            fU = Rg(RU),
            IU = PU,
            JU = PU;
          CU || (IU = (IU = FR(UU)) == EU ? uU : IU);
          fU || (JU = (JU = FR(RU)) == EU ? uU : JU);
          var wU = IU == uU && !yU(UU),
            nU = JU == uU && !yU(RU),
            bU = IU == JU;
          if (bU && !wU) return cU || (cU = new bR), CU || Kg(UU) ? sR(UU, RU, gU, tU, pU, cU) : function(UU, RU, gU, tU, pU, EU, PU) {
            switch (gU) {
              case mU:
                if (UU.byteLength != RU.byteLength || UU.byteOffset != RU.byteOffset) return !1;
                UU = UU.buffer, RU = RU.buffer;
              case xU:
                return !(UU.byteLength != RU.byteLength || !tU(new gR(UU), new gR(RU)));
              case TU:
              case qU:
              case jU:
                return OR(+UU, +RU);
              case KU:
                return UU.name == RU.name && UU.message == RU.message;
              case hU:
              case eU:
                return UU == RU + "";
              case GU:
                var cU = kU;
              case QU:
                var uU = 2 & EU;
                if (cU || (cU = iU), UU.size != RU.size && !uU) return !1;
                var CU = PU.get(UU);
                if (CU) return CU == RU;
                EU |= 1, PU.set(UU, RU);
                var fU = sR(cU(UU), cU(RU), tU, pU, EU, PU);
                return PU.delete(UU), fU;
              case WU:
                if (xR) return xR.call(UU) == xR.call(RU)
            }
            return !1
          }(UU, RU, IU, gU, tU, pU, cU);
          if (!(2 & pU)) {
            var oU = wU && lU.call(UU, "__wrapped__"),
              ZU = nU && lU.call(RU, "__wrapped__");
            if (oU || ZU) {
              var aU = oU ? UU.value() : UU,
                YU = ZU ? RU.value() : RU;
              return cU || (cU = new bR), gU(aU, YU, tU, pU, cU)
            }
          }
          if (!bU) return !1;
          return cU || (cU = new bR),
            function(UU, RU, gU, tU, pU, EU) {
              var PU = 2 & pU,
                TU = cg(UU),
                qU = TU.length,
                KU = cg(RU),
                cU = KU.length;
              if (qU != cU && !PU) return !1;
              var GU = qU;
              for (; GU--;) {
                var jU = TU[GU];
                if (!(PU ? jU in RU : lU.call(RU, jU))) return !1
              }
              var uU = EU.get(UU);
              if (uU && EU.get(RU)) return uU == RU;
              var CU = !0;
              EU.set(UU, RU), EU.set(RU, UU);
              var hU = PU;
              for (; ++GU < qU;) {
                var QU = UU[jU = TU[GU]],
                  eU = RU[jU];
                if (tU) var WU = PU ? tU(eU, QU, jU, RU, UU, EU) : tU(QU, eU, jU, UU, RU, EU);
                if (!(void 0 === WU ? QU === eU || gU(QU, eU, tU, pU, EU) : WU)) {
                  CU = !1;
                  break
                }
                hU || (hU = "constructor" == jU)
              }
              if (CU && !hU) {
                var fU = UU.constructor,
                  xU = RU.constructor;
                fU == xU || !("constructor" in UU) || !("constructor" in RU) || "function" == typeof fU && fU instanceof fU && "function" == typeof xU && xU instanceof xU || (CU = !1)
              }
              return EU.delete(UU), EU.delete(RU), CU
            }(UU, RU, gU, tU, pU, cU)
        }(UU, RU, XR, gU, tU, pU))
      }

      function vR(UU) {
        return !(!Eg(UU) || (RU = UU, LU && LU in RU)) && (tg(UU) || yU(UU) ? UR : oU).test(NR(UU));
        var RU
      }

      function dR(UU) {
        return "function" == typeof UU ? UU : null == UU ? Gg : "object" == typeof UU ? Rg(UU) ? function(UU, RU) {
          if (AR(UU) && zR(RU)) return MR(LR(UU), RU);
          return function(gU) {
            var tU = function(UU, RU, gU) {
              var tU = null == UU ? void 0 : VR(UU, RU);
              return void 0 === tU ? gU : tU
            }(gU, UU);
            return void 0 === tU && tU === RU ? function(UU, RU) {
              return null != UU && function(UU, RU, gU) {
                RU = AR(RU, UU) ? [RU] : SR(RU);
                var tU, pU = -1,
                  EU = RU.length;
                for (; ++pU < EU;) {
                  var PU = LR(RU[pU]);
                  if (!(tU = null != UU && gU(UU, PU))) break;
                  UU = UU[PU]
                }
                if (tU) return tU;
                EU = UU ? UU.length : 0;
                return !!EU && pg(EU) && iR(PU, EU) && (Rg(UU) || Ug(UU))
              }(UU, RU, rR)
            }(gU, UU) : XR(RU, tU, void 0, 3)
          }
        }(UU[0], UU[1]) : function(UU) {
          var RU = function(UU) {
            var RU = cg(UU),
              gU = RU.length;
            for (; gU--;) {
              var tU = RU[gU],
                pU = UU[tU];
              RU[gU] = [tU, pU, zR(pU)]
            }
            return RU
          }(UU);
          if (1 == RU.length && RU[0][2]) return MR(RU[0][0], RU[0][1]);
          return function(gU) {
            return gU === UU || function(UU, RU, gU, tU) {
              var pU = gU.length,
                EU = pU,
                PU = !tU;
              if (null == UU) return !EU;
              for (UU = Object(UU); pU--;) {
                var TU = gU[pU];
                if (PU && TU[2] ? TU[1] !== UU[TU[0]] : !(TU[0] in UU)) return !1
              }
              for (; ++pU < EU;) {
                var qU = (TU = gU[pU])[0],
                  KU = UU[qU],
                  cU = TU[1];
                if (PU && TU[2]) {
                  if (void 0 === KU && !(qU in UU)) return !1
                } else {
                  var GU = new bR;
                  if (tU) var jU = tU(KU, cU, qU, UU, RU, GU);
                  if (!(void 0 === jU ? XR(cU, KU, tU, 3, GU) : jU)) return !1
                }
              }
              return !0
            }(gU, UU, RU)
          }
        }(UU) : function(UU) {
          return AR(UU) ? (RU = LR(UU), function(UU) {
            return null == UU ? void 0 : UU[RU]
          }) : function(UU) {
            return function(RU) {
              return VR(RU, UU)
            }
          }(UU);
          var RU
        }(UU)
      }

      function HR(UU) {
        if (! function(UU) {
            var RU = UU && UU.constructor,
              gU = "function" == typeof RU && RU.prototype || MU;
            return UU === gU
          }(UU)) return TR(UU);
        var RU = [];
        for (var gU in Object(UU)) lU.call(UU, gU) && "constructor" != gU && RU.push(gU);
        return RU
      }

      function SR(UU) {
        return Rg(UU) ? UU : DR(UU)
      }

      function sR(UU, RU, gU, tU, pU, EU) {
        var PU = 2 & pU,
          TU = UU.length,
          qU = RU.length;
        if (TU != qU && !(PU && qU > TU)) return !1;
        var KU = EU.get(UU);
        if (KU && EU.get(RU)) return KU == RU;
        var cU = -1,
          GU = !0,
          jU = 1 & pU ? new nR : void 0;
        for (EU.set(UU, RU), EU.set(RU, UU); ++cU < TU;) {
          var uU = UU[cU],
            CU = RU[cU];
          if (tU) var hU = PU ? tU(CU, uU, cU, RU, UU, EU) : tU(uU, CU, cU, UU, RU, EU);
          if (void 0 !== hU) {
            if (hU) continue;
            GU = !1;
            break
          }
          if (jU) {
            if (!sU(RU, (function(UU, RU) {
                if (!jU.has(RU) && (uU === UU || gU(uU, UU, tU, pU, EU))) return jU.add(RU)
              }))) {
              GU = !1;
              break
            }
          } else if (uU !== CU && !gU(uU, CU, tU, pU, EU)) {
            GU = !1;
            break
          }
        }
        return EU.delete(UU), EU.delete(RU), GU
      }

      function yR(UU, RU) {
        var gU = UU.__data__;
        return function(UU) {
          var RU = typeof UU;
          return "string" == RU || "number" == RU || "symbol" == RU || "boolean" == RU ? "__proto__" !== UU : null === UU
        }(RU) ? gU["string" == typeof RU ? "string" : "hash"] : gU.map
      }

      function kR(UU, RU) {
        var gU = function(UU, RU) {
          return null == UU ? void 0 : UU[RU]
        }(UU, RU);
        return vR(gU) ? gU : void 0
      }
      var FR = function(UU) {
        return OU.call(UU)
      };

      function iR(UU, RU) {
        return !!(RU = null == RU ? tU : RU) && ("number" == typeof UU || ZU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < RU
      }

      function AR(UU, RU) {
        if (Rg(UU)) return !1;
        var gU = typeof UU;
        return !("number" != gU && "symbol" != gU && "boolean" != gU && null != UU && !Tg(UU)) || (JU.test(UU) || !IU.test(UU) || null != RU && UU in Object(RU))
      }

      function zR(UU) {
        return UU === UU && !Eg(UU)
      }

      function MR(UU, RU) {
        return function(gU) {
          return null != gU && (gU[UU] === RU && (void 0 !== RU || UU in Object(gU)))
        }
      }(qR && FR(new qR(new ArrayBuffer(1))) != mU || KR && FR(new KR) != GU || cR && FR(cR.resolve()) != CU || GR && FR(new GR) != QU || jR && FR(new jR) != fU) && (FR = function(UU) {
        var RU = OU.call(UU),
          gU = RU == uU ? UU.constructor : void 0,
          tU = gU ? NR(gU) : void 0;
        if (tU) switch (tU) {
          case CR:
            return mU;
          case hR:
            return GU;
          case QR:
            return CU;
          case eR:
            return QU;
          case WR:
            return fU
        }
        return RU
      });
      var DR = lR((function(UU) {
        var RU;
        UU = null == (RU = UU) ? "" : function(UU) {
          if ("string" == typeof UU) return UU;
          if (Tg(UU)) return mR ? mR.call(UU) : "";
          var RU = UU + "";
          return "0" == RU && 1 / UU == -1 / 0 ? "-0" : RU
        }(RU);
        var gU = [];
        return wU.test(UU) && gU.push(""), UU.replace(nU, (function(UU, RU, tU, pU) {
          gU.push(tU ? pU.replace(bU, "$1") : RU || UU)
        })), gU
      }));

      function LR(UU) {
        if ("string" == typeof UU || Tg(UU)) return UU;
        var RU = UU + "";
        return "0" == RU && 1 / UU == -1 / 0 ? "-0" : RU
      }

      function NR(UU) {
        if (null != UU) {
          try {
            return NU.call(UU)
          } catch (RU) {}
          try {
            return UU + ""
          } catch (RU) {}
        }
        return ""
      }

      function lR(UU, RU) {
        if ("function" != typeof UU || RU && "function" != typeof RU) throw new TypeError("Expected a function");
        var gU = function() {
          var tU = arguments,
            pU = RU ? RU.apply(this, tU) : tU[0],
            EU = gU.cache;
          if (EU.has(pU)) return EU.get(pU);
          var PU = UU.apply(this, tU);
          return gU.cache = EU.set(pU, PU), PU
        };
        return gU.cache = new(lR.Cache || wR), gU
      }

      function OR(UU, RU) {
        return UU === RU || UU !== UU && RU !== RU
      }

      function Ug(UU) {
        return function(UU) {
          return Pg(UU) && gg(UU)
        }(UU) && lU.call(UU, "callee") && (!ER.call(UU, "callee") || OU.call(UU) == EU)
      }
      lR.Cache = wR;
      var Rg = Array.isArray;

      function gg(UU) {
        return null != UU && pg(UU.length) && !tg(UU)
      }

      function tg(UU) {
        var RU = Eg(UU) ? OU.call(UU) : "";
        return RU == cU || "[object GeneratorFunction]" == RU
      }

      function pg(UU) {
        return "number" == typeof UU && UU > -1 && UU % 1 == 0 && UU <= tU
      }

      function Eg(UU) {
        var RU = typeof UU;
        return !!UU && ("object" == RU || "function" == RU)
      }

      function Pg(UU) {
        return !!UU && "object" == typeof UU
      }

      function Tg(UU) {
        return "symbol" == typeof UU || Pg(UU) && OU.call(UU) == WU
      }
      var qg, Kg = HU ? (qg = HU, function(UU) {
        return qg(UU)
      }) : function(UU) {
        return Pg(UU) && pg(UU.length) && !!aU[OU.call(UU)]
      };

      function cg(UU) {
        return gg(UU) ? oR(UU) : HR(UU)
      }

      function Gg(UU) {
        return UU
      }
      UU.exports = function(UU, RU, gU) {
        var tU, pU = Rg(UU) || Kg(UU);
        if (RU = dR(RU), null == gU)
          if (pU || Eg(UU)) {
            var EU = UU.constructor;
            gU = pU ? Rg(UU) ? new EU : [] : tg(EU) ? Eg(tU = tR(UU)) ? pR(tU) : {} : {}
          } else gU = {};
        return (pU ? SU : BR)(UU, (function(UU, tU, pU) {
          return RU(gU, UU, tU, pU)
        })), gU
      }
    }(HE, HE.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: SE
    } = tU
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);