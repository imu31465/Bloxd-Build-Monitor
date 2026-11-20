export const id = 141;
export const ids = [141];
export const modules = {
  7847: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => KQ,
      f: () => ly
    });
    var Eu = {};
    yu.r(Eu), yu.d(Eu, {
      d: () => EE,
      j: () => mE,
      h: () => QE,
      k: () => qy,
      l: () => oy,
      p: () => IE,
      s: () => ay,
      u: () => nE,
      v: () => CE,
      y: () => UE,
      B: () => Oy,
      F: () => eE,
      J: () => ME,
      M: () => GE,
      Q: () => vy,
      O: () => RE,
      U: () => DE,
      Y: () => AE
    });
    var Ku = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Qu(uu) {
      return uu && uu.__esModule && Object.prototype.hasOwnProperty.call(uu, "default") ? uu.default : uu
    }
    var mu = {
      exports: {}
    };
    ! function(uu) {
      var Ru = Object.prototype.hasOwnProperty,
        yu = "~";

      function Eu() {}

      function Ku(uu, Ru, yu) {
        this.qx = uu, this.context = Ru, this.once = yu || !1
      }

      function Qu(uu, Ru, Eu, Qu, mu) {
        if ("function" !== typeof Eu) throw new TypeError("The listener must be a function");
        var Ju = new Ku(Eu, Qu || uu, mu),
          Nu = yu ? yu + Ru : Ru;
        return uu._events[Nu] ? uu._events[Nu].qx ? uu._events[Nu] = [uu._events[Nu], Ju] : uu._events[Nu].push(Ju) : (uu._events[Nu] = Ju, uu._eventsCount++), uu
      }

      function mu(uu, Ru) {
        0 === --uu._eventsCount ? uu._events = new Eu : delete uu._events[Ru]
      }

      function Ju() {
        this._events = new Eu, this._eventsCount = 0
      }
      Object.create && (Eu.prototype = Object.create(null), (new Eu).__proto__ || (yu = !1)), Ju.prototype.eventNames = function() {
        var uu, Eu, Ku = [];
        if (0 === this._eventsCount) return Ku;
        for (Eu in uu = this._events) Ru.call(uu, Eu) && Ku.push(yu ? Eu.slice(1) : Eu);
        return Object.getOwnPropertySymbols ? Ku.concat(Object.getOwnPropertySymbols(uu)) : Ku
      }, Ju.prototype.listeners = function(uu) {
        var Ru = yu ? yu + uu : uu,
          Eu = this._events[Ru];
        if (!Eu) return [];
        if (Eu.qx) return [Eu.qx];
        for (var Ku = 0, Qu = Eu.length, mu = new Array(Qu); Ku < Qu; Ku++) mu[Ku] = Eu[Ku].qx;
        return mu
      }, Ju.prototype.listenerCount = function(uu) {
        var Ru = yu ? yu + uu : uu,
          Eu = this._events[Ru];
        return Eu ? Eu.qx ? 1 : Eu.length : 0
      }, Ju.prototype.emit = function(uu, Ru, Eu, Ku, Qu, mu) {
        var Ju = yu ? yu + uu : uu;
        if (!this._events[Ju]) return !1;
        var Nu, Xu, Vu = this._events[Ju],
          ru = arguments.length;
        if (Vu.qx) {
          switch (Vu.once && this.removeListener(uu, Vu.qx, void 0, !0), ru) {
            case 1:
              return Vu.qx.call(Vu.context), !0;
            case 2:
              return Vu.qx.call(Vu.context, Ru), !0;
            case 3:
              return Vu.qx.call(Vu.context, Ru, Eu), !0;
            case 4:
              return Vu.qx.call(Vu.context, Ru, Eu, Ku), !0;
            case 5:
              return Vu.qx.call(Vu.context, Ru, Eu, Ku, Qu), !0;
            case 6:
              return Vu.qx.call(Vu.context, Ru, Eu, Ku, Qu, mu), !0
          }
          for (Xu = 1, Nu = new Array(ru - 1); Xu < ru; Xu++) Nu[Xu - 1] = arguments[Xu];
          Vu.qx.apply(Vu.context, Nu)
        } else {
          var Bu, xu = Vu.length;
          for (Xu = 0; Xu < xu; Xu++) switch (Vu[Xu].once && this.removeListener(uu, Vu[Xu].qx, void 0, !0), ru) {
            case 1:
              Vu[Xu].qx.call(Vu[Xu].context);
              break;
            case 2:
              Vu[Xu].qx.call(Vu[Xu].context, Ru);
              break;
            case 3:
              Vu[Xu].qx.call(Vu[Xu].context, Ru, Eu);
              break;
            case 4:
              Vu[Xu].qx.call(Vu[Xu].context, Ru, Eu, Ku);
              break;
            default:
              if (!Nu)
                for (Bu = 1, Nu = new Array(ru - 1); Bu < ru; Bu++) Nu[Bu - 1] = arguments[Bu];
              Vu[Xu].qx.apply(Vu[Xu].context, Nu)
          }
        }
        return !0
      }, Ju.prototype.on = function(uu, Ru, yu) {
        return Qu(this, uu, Ru, yu, !1)
      }, Ju.prototype.once = function(uu, Ru, yu) {
        return Qu(this, uu, Ru, yu, !0)
      }, Ju.prototype.removeListener = function(uu, Ru, Eu, Ku) {
        var Qu = yu ? yu + uu : uu;
        if (!this._events[Qu]) return this;
        if (!Ru) return mu(this, Qu), this;
        var Ju = this._events[Qu];
        if (Ju.qx) Ju.qx !== Ru || Ku && !Ju.once || Eu && Ju.context !== Eu || mu(this, Qu);
        else {
          for (var Nu = 0, Xu = [], Vu = Ju.length; Nu < Vu; Nu++)(Ju[Nu].qx !== Ru || Ku && !Ju[Nu].once || Eu && Ju[Nu].context !== Eu) && Xu.push(Ju[Nu]);
          Xu.length ? this._events[Qu] = 1 === Xu.length ? Xu[0] : Xu : mu(this, Qu)
        }
        return this
      }, Ju.prototype.rW = function(uu) {
        var Ru;
        return uu ? (Ru = yu ? yu + uu : uu, this._events[Ru] && mu(this, Ru)) : (this._events = new Eu, this._eventsCount = 0), this
      }, Ju.prototype.off = Ju.prototype.removeListener, Ju.prototype.addListener = Ju.prototype.on, Ju.prefixed = yu, Ju.EventEmitter = Ju, uu.exports = Ju
    }(mu);
    var Ju, Nu, Xu = Qu(mu.exports);
    ! function(uu) {
      uu.assertEqual = uu => uu, uu.assertIs = function(uu) {}, uu.assertNever = function(uu) {
        throw new Error
      }, uu.arrayToEnum = uu => {
        const Ru = {};
        for (const yu of uu) Ru[yu] = yu;
        return Ru
      }, uu.getValidEnumValues = Ru => {
        const yu = uu.objectKeys(Ru).filter((uu => "number" !== typeof Ru[Ru[uu]])),
          Eu = {};
        for (const uu of yu) Eu[uu] = Ru[uu];
        return uu.objectValues(Eu)
      }, uu.objectValues = Ru => uu.objectKeys(Ru).map((function(uu) {
        return Ru[uu]
      })), uu.objectKeys = "function" === typeof Object.keys ? uu => Object.keys(uu) : uu => {
        const Ru = [];
        for (const yu in uu) Object.prototype.hasOwnProperty.call(uu, yu) && Ru.push(yu);
        return Ru
      }, uu.find = (uu, Ru) => {
        for (const yu of uu)
          if (Ru(yu)) return yu
      }, uu.isInteger = "function" === typeof Number.isInteger ? uu => Number.isInteger(uu) : uu => "number" === typeof uu && isFinite(uu) && Math.floor(uu) === uu, uu.joinValues = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return uu.map((uu => "string" === typeof uu ? `'${uu}'` : uu)).join(Ru)
      }, uu.jsonStringifyReplacer = (uu, Ru) => "bigint" === typeof Ru ? Ru.toString() : Ru
    }(Ju || (Ju = {})),
    function(uu) {
      uu.mergeShapes = (uu, Ru) => ({
        ...uu,
        ...Ru
      })
    }(Nu || (Nu = {}));
    const Vu = Ju.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      ru = uu => {
        switch (typeof uu) {
          case "undefined":
            return Vu.undefined;
          case "string":
            return Vu.string;
          case "number":
            return isNaN(uu) ? Vu.nan : Vu.number;
          case "boolean":
            return Vu.boolean;
          case "function":
            return Vu.function;
          case "bigint":
            return Vu.bigint;
          case "symbol":
            return Vu.symbol;
          case "object":
            return Array.isArray(uu) ? Vu.array : null === uu ? Vu.null : uu.then && "function" === typeof uu.then && uu.catch && "function" === typeof uu.catch ? Vu.promise : "undefined" !== typeof Map && uu instanceof Map ? Vu.map : "undefined" !== typeof Set && uu instanceof Set ? Vu.set : "undefined" !== typeof Date && uu instanceof Date ? Vu.date : Vu.object;
          default:
            return Vu.unknown
        }
      },
      Bu = Ju.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class xu extends Error {
      constructor(uu) {
        var Ru;
        super(), Ru = this, this.issues = [], this.addIssue = uu => {
          this.issues = [...this.issues, uu]
        }, this.addIssues = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Ru.issues = [...Ru.issues, ...uu]
        };
        const yu = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, yu) : this.__proto__ = yu, this.name = "ZodError", this.issues = uu
      }
      get errors() {
        return this.issues
      }
      format(uu) {
        const Ru = uu || function(uu) {
            return uu.message
          },
          yu = {
            _errors: []
          },
          Eu = uu => {
            for (const Ku of uu.issues)
              if ("invalid_union" === Ku.code) Ku.unionErrors.map(Eu);
              else if ("invalid_return_type" === Ku.code) Eu(Ku.returnTypeError);
            else if ("invalid_arguments" === Ku.code) Eu(Ku.argumentsError);
            else if (0 === Ku.path.length) yu._errors.push(Ru(Ku));
            else {
              let uu = yu,
                Eu = 0;
              for (; Eu < Ku.path.length;) {
                const yu = Ku.path[Eu];
                Eu === Ku.path.length - 1 ? (uu[yu] = uu[yu] || {
                  _errors: []
                }, uu[yu]._errors.push(Ru(Ku))) : uu[yu] = uu[yu] || {
                  _errors: []
                }, uu = uu[yu], Eu++
              }
            }
          };
        return Eu(this), yu
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, Ju.jsonStringifyReplacer, 2)
      }
      get RS() {
        return 0 === this.issues.length
      }
      flatten() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uu => uu.message;
        const Ru = {},
          yu = [];
        for (const Eu of this.issues) Eu.path.length > 0 ? (Ru[Eu.path[0]] = Ru[Eu.path[0]] || [], Ru[Eu.path[0]].push(uu(Eu))) : yu.push(uu(Eu));
        return {
          formErrors: yu,
          fieldErrors: Ru
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    xu.create = uu => new xu(uu);
    const Su = (uu, Ru) => {
      let yu;
      switch (uu.code) {
        case Bu.invalid_type:
          yu = uu.received === Vu.undefined ? "Required" : `Expected ${uu.expected}, received ${uu.received}`;
          break;
        case Bu.invalid_literal:
          yu = `Invalid literal value, expected ${JSON.stringify(uu.expected,Ju.jsonStringifyReplacer)}`;
          break;
        case Bu.unrecognized_keys:
          yu = `Unrecognized key(s) in object: ${Ju.joinValues(uu.keys,", ")}`;
          break;
        case Bu.invalid_union:
          yu = "Invalid input";
          break;
        case Bu.invalid_union_discriminator:
          yu = `Invalid discriminator value. Expected ${Ju.joinValues(uu.options)}`;
          break;
        case Bu.invalid_enum_value:
          yu = `Invalid enum value. Expected ${Ju.joinValues(uu.options)}, received '${uu.received}'`;
          break;
        case Bu.invalid_arguments:
          yu = "Invalid function arguments";
          break;
        case Bu.invalid_return_type:
          yu = "Invalid function return type";
          break;
        case Bu.invalid_date:
          yu = "Invalid date";
          break;
        case Bu.invalid_string:
          "object" === typeof uu.validation ? "includes" in uu.validation ? (yu = `Invalid input: must include "${uu.validation.includes}"`, "number" === typeof uu.validation.position && (yu = `${yu} at one or more positions greater than or equal to ${uu.validation.position}`)) : "startsWith" in uu.validation ? yu = `Invalid input: must start with "${uu.validation.startsWith}"` : "endsWith" in uu.validation ? yu = `Invalid input: must end with "${uu.validation.endsWith}"` : Ju.assertNever(uu.validation) : yu = "regex" !== uu.validation ? `Invalid ${uu.validation}` : "Invalid";
          break;
        case Bu.too_small:
          yu = "array" === uu.type ? `Array must contain ${uu.exact?"exactly":uu.inclusive?"at least":"more than"} ${uu.minimum} element(s)` : "string" === uu.type ? `String must contain ${uu.exact?"exactly":uu.inclusive?"at least":"over"} ${uu.minimum} character(s)` : "number" === uu.type ? `Number must be ${uu.exact?"exactly equal to ":uu.inclusive?"greater than or equal to ":"greater than "}${uu.minimum}` : "date" === uu.type ? `Date must be ${uu.exact?"exactly equal to ":uu.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(uu.minimum))}` : "Invalid input";
          break;
        case Bu.too_big:
          yu = "array" === uu.type ? `Array must contain ${uu.exact?"exactly":uu.inclusive?"at most":"less than"} ${uu.maximum} element(s)` : "string" === uu.type ? `String must contain ${uu.exact?"exactly":uu.inclusive?"at most":"under"} ${uu.maximum} character(s)` : "number" === uu.type ? `Number must be ${uu.exact?"exactly":uu.inclusive?"less than or equal to":"less than"} ${uu.maximum}` : "bigint" === uu.type ? `BigInt must be ${uu.exact?"exactly":uu.inclusive?"less than or equal to":"less than"} ${uu.maximum}` : "date" === uu.type ? `Date must be ${uu.exact?"exactly":uu.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(uu.maximum))}` : "Invalid input";
          break;
        case Bu.custom:
          yu = "Invalid input";
          break;
        case Bu.invalid_intersection_types:
          yu = "Intersection results could not be merged";
          break;
        case Bu.not_multiple_of:
          yu = `Number must be a multiple of ${uu.multipleOf}`;
          break;
        case Bu.not_finite:
          yu = "Number must be finite";
          break;
        default:
          yu = Ru.defaultError, Ju.assertNever(uu)
      }
      return {
        message: yu
      }
    };
    let pu = Su;

    function Tu() {
      return pu
    }
    const Wu = uu => {
      const {
        data: Ru,
        path: yu,
        errorMaps: Eu,
        issueData: Ku
      } = uu, Qu = [...yu, ...Ku.path || []], mu = {
        ...Ku,
        path: Qu
      };
      let Ju = "";
      const Nu = Eu.filter((uu => !!uu)).slice().reverse();
      for (const Xu of Nu) Ju = Xu(mu, {
        data: Ru,
        defaultError: Ju
      }).message;
      return {
        ...Ku,
        path: Qu,
        message: Ku.message || Ju
      }
    };

    function ju(uu, Ru) {
      const yu = Wu({
        issueData: Ru,
        data: uu.data,
        path: uu.path,
        errorMaps: [uu.common.contextualErrorMap, uu.schemaErrorMap, Tu(), Su].filter((uu => !!uu))
      });
      uu.common.issues.push(yu)
    }
    class Hu {
      constructor() {
        this.value = "valid"
      }
      tS() {
        "valid" === this.value && (this.value = "tS")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(uu, Ru) {
        const yu = [];
        for (const Eu of Ru) {
          if ("aborted" === Eu.status) return du;
          "tS" === Eu.status && uu.tS(), yu.push(Eu.value)
        }
        return {
          status: uu.value,
          value: yu
        }
      }
      static async mergeObjectAsync(uu, Ru) {
        const yu = [];
        for (const Eu of Ru) yu.push({
          key: await Eu.key,
          value: await Eu.value
        });
        return Hu.mergeObjectSync(uu, yu)
      }
      static mergeObjectSync(uu, Ru) {
        const yu = {};
        for (const Eu of Ru) {
          const {
            key: Ru,
            value: Ku
          } = Eu;
          if ("aborted" === Ru.status) return du;
          if ("aborted" === Ku.status) return du;
          "tS" === Ru.status && uu.tS(), "tS" === Ku.status && uu.tS(), "__proto__" === Ru.value || "undefined" === typeof Ku.value && !Eu.alwaysSet || (yu[Ru.value] = Ku.value)
        }
        return {
          status: uu.value,
          value: yu
        }
      }
    }
    const du = Object.freeze({
        status: "aborted"
      }),
      bu = uu => ({
        status: "tS",
        value: uu
      }),
      Cu = uu => ({
        status: "valid",
        value: uu
      }),
      ku = uu => "aborted" === uu.status,
      eu = uu => "tS" === uu.status,
      Au = uu => "valid" === uu.status,
      Du = uu => "undefined" !== typeof Promise && uu instanceof Promise;
    var Mu;
    ! function(uu) {
      uu.errToObj = uu => "string" === typeof uu ? {
        message: uu
      } : uu || {}, uu.toString = uu => "string" === typeof uu ? uu : null === uu || void 0 === uu ? void 0 : uu.message
    }(Mu || (Mu = {}));
    class Iu {
      constructor(uu, Ru, yu, Eu) {
        this._cachedPath = [], this.parent = uu, this.data = Ru, this._path = yu, this._key = Eu
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Gu = (uu, Ru) => {
      if (Au(Ru)) return {
        success: !0,
        data: Ru.value
      };
      if (!uu.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Ru = new xu(uu.common.issues);
          return this._error = Ru, this._error
        }
      }
    };

    function Uu(uu) {
      if (!uu) return {};
      const {
        errorMap: Ru,
        invalid_type_error: yu,
        required_error: Eu,
        description: Ku
      } = uu;
      if (Ru && (yu || Eu)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Ru) return {
        errorMap: Ru,
        description: Ku
      };
      return {
        errorMap: (uu, Ru) => "invalid_type" !== uu.code ? {
          message: Ru.defaultError
        } : "undefined" === typeof Ru.data ? {
          message: null !== Eu && void 0 !== Eu ? Eu : Ru.defaultError
        } : {
          message: null !== yu && void 0 !== yu ? yu : Ru.defaultError
        },
        description: Ku
      }
    }
    class nu {
      constructor(uu) {
        this.spa = this.safeParseAsync, this._def = uu, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(uu) {
        return ru(uu.data)
      }
      _getOrReturnCtx(uu, Ru) {
        return Ru || {
          common: uu.parent.common,
          data: uu.data,
          parsedType: ru(uu.data),
          schemaErrorMap: this._def.errorMap,
          path: uu.path,
          parent: uu.parent
        }
      }
      _processInputParams(uu) {
        return {
          status: new Hu,
          ctx: {
            common: uu.parent.common,
            data: uu.data,
            parsedType: ru(uu.data),
            schemaErrorMap: this._def.errorMap,
            path: uu.path,
            parent: uu.parent
          }
        }
      }
      _parseSync(uu) {
        const Ru = this._parse(uu);
        if (Du(Ru)) throw new Error("Synchronous parse encountered promise.");
        return Ru
      }
      _parseAsync(uu) {
        const Ru = this._parse(uu);
        return Promise.resolve(Ru)
      }
      parse(uu, Ru) {
        const yu = this.safeParse(uu, Ru);
        if (yu.success) return yu.data;
        throw yu.error
      }
      safeParse(uu, Ru) {
        var yu;
        const Eu = {
            common: {
              issues: [],
              async: null !== (yu = null === Ru || void 0 === Ru ? void 0 : Ru.async) && void 0 !== yu && yu,
              contextualErrorMap: null === Ru || void 0 === Ru ? void 0 : Ru.errorMap
            },
            path: (null === Ru || void 0 === Ru ? void 0 : Ru.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: uu,
            parsedType: ru(uu)
          },
          Ku = this._parseSync({
            data: uu,
            path: Eu.path,
            parent: Eu
          });
        return Gu(Eu, Ku)
      }
      async parseAsync(uu, Ru) {
        const yu = await this.safeParseAsync(uu, Ru);
        if (yu.success) return yu.data;
        throw yu.error
      }
      async safeParseAsync(uu, Ru) {
        const yu = {
            common: {
              issues: [],
              contextualErrorMap: null === Ru || void 0 === Ru ? void 0 : Ru.errorMap,
              async: !0
            },
            path: (null === Ru || void 0 === Ru ? void 0 : Ru.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: uu,
            parsedType: ru(uu)
          },
          Eu = this._parse({
            data: uu,
            path: yu.path,
            parent: yu
          }),
          Ku = await (Du(Eu) ? Eu : Promise.resolve(Eu));
        return Gu(yu, Ku)
      }
      refine(uu, Ru) {
        const yu = uu => "string" === typeof Ru || "undefined" === typeof Ru ? {
          message: Ru
        } : "function" === typeof Ru ? Ru(uu) : Ru;
        return this._refinement(((Ru, Eu) => {
          const Ku = uu(Ru),
            Qu = () => Eu.addIssue({
              code: Bu.custom,
              ...yu(Ru)
            });
          return "undefined" !== typeof Promise && Ku instanceof Promise ? Ku.then((uu => !!uu || (Qu(), !1))) : !!Ku || (Qu(), !1)
        }))
      }
      refinement(uu, Ru) {
        return this._refinement(((yu, Eu) => !!uu(yu) || (Eu.addIssue("function" === typeof Ru ? Ru(yu, Eu) : Ru), !1)))
      }
      _refinement(uu) {
        return new dR({
          schema: this,
          typeName: sR.ZodEffects,
          effect: {
            type: "refinement",
            refinement: uu
          }
        })
      }
      superRefine(uu) {
        return this._refinement(uu)
      }
      optional() {
        return bR.create(this, this._def)
      }
      nullable() {
        return CR.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return RR.create(this, this._def)
      }
      promise() {
        return HR.create(this, this._def)
      }
      or(uu) {
        return KR.create([this, uu], this._def)
      }
      and(uu) {
        return NR.create(this, uu, this._def)
      }
      transform(uu) {
        return new dR({
          ...Uu(this._def),
          schema: this,
          typeName: sR.ZodEffects,
          effect: {
            type: "transform",
            transform: uu
          }
        })
      }
      default (uu) {
        const Ru = "function" === typeof uu ? uu : () => uu;
        return new kR({
          ...Uu(this._def),
          innerType: this,
          defaultValue: Ru,
          typeName: sR.ZodDefault
        })
      }
      brand() {
        return new MR({
          typeName: sR.ZodBranded,
          type: this,
          ...Uu(this._def)
        })
      } catch (uu) {
        const Ru = "function" === typeof uu ? uu : () => uu;
        return new eR({
          ...Uu(this._def),
          innerType: this,
          catchValue: Ru,
          typeName: sR.ZodCatch
        })
      }
      describe(uu) {
        return new(0, this.constructor)({
          ...this._def,
          description: uu
        })
      }
      pipe(uu) {
        return IR.create(this, uu)
      }
      readonly() {
        return GR.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const su = /^c[^\s-]{8,}$/i,
      tu = /^[a-z][a-z0-9]*$/,
      lu = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      gu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      cu = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Lu;
    const zu = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Fu = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class wu extends nu {
      _parse(uu) {
        this._def.coerce && (uu.data = String(uu.data));
        if (this._getType(uu) !== Vu.string) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.string,
            received: Ru.parsedType
          }), du
        }
        const Ru = new Hu;
        let yu;
        for (const Nu of this._def.checks)
          if ("min" === Nu.kind) uu.data.length < Nu.value && (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
            code: Bu.too_small,
            minimum: Nu.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Nu.message
          }), Ru.tS());
          else if ("max" === Nu.kind) uu.data.length > Nu.value && (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          code: Bu.too_big,
          maximum: Nu.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Nu.message
        }), Ru.tS());
        else if ("length" === Nu.kind) {
          const Eu = uu.data.length > Nu.value,
            Ku = uu.data.length < Nu.value;
          (Eu || Ku) && (yu = this._getOrReturnCtx(uu, yu), Eu ? ju(yu, {
            code: Bu.too_big,
            maximum: Nu.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Nu.message
          }) : Ku && ju(yu, {
            code: Bu.too_small,
            minimum: Nu.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Nu.message
          }), Ru.tS())
        } else if ("email" === Nu.kind) cu.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "email",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS());
        else if ("emoji" === Nu.kind) Lu || (Lu = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Lu.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "emoji",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS());
        else if ("uuid" === Nu.kind) gu.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "uuid",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS());
        else if ("cuid" === Nu.kind) su.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "cuid",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS());
        else if ("cuid2" === Nu.kind) tu.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "cuid2",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS());
        else if ("ulid" === Nu.kind) lu.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "ulid",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS());
        else if ("url" === Nu.kind) try {
          new URL(uu.data)
        } catch (mu) {
          yu = this._getOrReturnCtx(uu, yu), ju(yu, {
            validation: "url",
            code: Bu.invalid_string,
            message: Nu.message
          }), Ru.tS()
        } else if ("regex" === Nu.kind) {
          Nu.regex.lastIndex = 0;
          Nu.regex.test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
            validation: "regex",
            code: Bu.invalid_string,
            message: Nu.message
          }), Ru.tS())
        } else if ("trim" === Nu.kind) uu.data = uu.data.trim();
        else if ("includes" === Nu.kind) uu.data.includes(Nu.value, Nu.position) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          code: Bu.invalid_string,
          validation: {
            includes: Nu.value,
            position: Nu.position
          },
          message: Nu.message
        }), Ru.tS());
        else if ("toLowerCase" === Nu.kind) uu.data = uu.data.toLowerCase();
        else if ("toUpperCase" === Nu.kind) uu.data = uu.data.toUpperCase();
        else if ("startsWith" === Nu.kind) uu.data.startsWith(Nu.value) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          code: Bu.invalid_string,
          validation: {
            startsWith: Nu.value
          },
          message: Nu.message
        }), Ru.tS());
        else if ("endsWith" === Nu.kind) uu.data.endsWith(Nu.value) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          code: Bu.invalid_string,
          validation: {
            endsWith: Nu.value
          },
          message: Nu.message
        }), Ru.tS());
        else if ("datetime" === Nu.kind) {
          ((Qu = Nu).precision ? Qu.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Qu.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Qu.precision}}Z$`) : 0 === Qu.precision ? Qu.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Qu.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(uu.data) || (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
            code: Bu.invalid_string,
            validation: "datetime",
            message: Nu.message
          }), Ru.tS())
        } else "ip" === Nu.kind ? (Eu = uu.data, ("v4" !== (Ku = Nu.version) && Ku || !zu.test(Eu)) && ("v6" !== Ku && Ku || !Fu.test(Eu)) && (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          validation: "ip",
          code: Bu.invalid_string,
          message: Nu.message
        }), Ru.tS())) : Ju.assertNever(Nu);
        var Eu, Ku, Qu;
        return {
          status: Ru.value,
          value: uu.data
        }
      }
      _regex(uu, Ru, yu) {
        return this.refinement((Ru => uu.test(Ru)), {
          validation: Ru,
          code: Bu.invalid_string,
          ...Mu.errToObj(yu)
        })
      }
      _addCheck(uu) {
        return new wu({
          ...this._def,
          checks: [...this._def.checks, uu]
        })
      }
      email(uu) {
        return this._addCheck({
          kind: "email",
          ...Mu.errToObj(uu)
        })
      }
      url(uu) {
        return this._addCheck({
          kind: "url",
          ...Mu.errToObj(uu)
        })
      }
      emoji(uu) {
        return this._addCheck({
          kind: "emoji",
          ...Mu.errToObj(uu)
        })
      }
      uuid(uu) {
        return this._addCheck({
          kind: "uuid",
          ...Mu.errToObj(uu)
        })
      }
      cuid(uu) {
        return this._addCheck({
          kind: "cuid",
          ...Mu.errToObj(uu)
        })
      }
      cuid2(uu) {
        return this._addCheck({
          kind: "cuid2",
          ...Mu.errToObj(uu)
        })
      }
      ulid(uu) {
        return this._addCheck({
          kind: "ulid",
          ...Mu.errToObj(uu)
        })
      }
      ip(uu) {
        return this._addCheck({
          kind: "ip",
          ...Mu.errToObj(uu)
        })
      }
      datetime(uu) {
        var Ru;
        return "string" === typeof uu ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: uu
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === uu || void 0 === uu ? void 0 : uu.precision) ? null : null === uu || void 0 === uu ? void 0 : uu.precision,
          offset: null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.offset) && void 0 !== Ru && Ru,
          ...Mu.errToObj(null === uu || void 0 === uu ? void 0 : uu.message)
        })
      }
      regex(uu, Ru) {
        return this._addCheck({
          kind: "regex",
          regex: uu,
          ...Mu.errToObj(Ru)
        })
      }
      includes(uu, Ru) {
        return this._addCheck({
          kind: "includes",
          value: uu,
          position: null === Ru || void 0 === Ru ? void 0 : Ru.position,
          ...Mu.errToObj(null === Ru || void 0 === Ru ? void 0 : Ru.message)
        })
      }
      startsWith(uu, Ru) {
        return this._addCheck({
          kind: "startsWith",
          value: uu,
          ...Mu.errToObj(Ru)
        })
      }
      endsWith(uu, Ru) {
        return this._addCheck({
          kind: "endsWith",
          value: uu,
          ...Mu.errToObj(Ru)
        })
      }
      min(uu, Ru) {
        return this._addCheck({
          kind: "min",
          value: uu,
          ...Mu.errToObj(Ru)
        })
      }
      max(uu, Ru) {
        return this._addCheck({
          kind: "max",
          value: uu,
          ...Mu.errToObj(Ru)
        })
      }
      length(uu, Ru) {
        return this._addCheck({
          kind: "length",
          value: uu,
          ...Mu.errToObj(Ru)
        })
      }
      nonempty(uu) {
        return this.min(1, Mu.errToObj(uu))
      }
      trim() {
        return new wu({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new wu({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new wu({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((uu => "datetime" === uu.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((uu => "email" === uu.kind))
      }
      get isURL() {
        return !!this._def.checks.find((uu => "url" === uu.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((uu => "emoji" === uu.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((uu => "uuid" === uu.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((uu => "cuid" === uu.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((uu => "cuid2" === uu.kind))
      }
      get isULID() {
        return !!this._def.checks.find((uu => "ulid" === uu.kind))
      }
      get isIP() {
        return !!this._def.checks.find((uu => "ip" === uu.kind))
      }
      get minLength() {
        let uu = null;
        for (const Ru of this._def.checks) "min" === Ru.kind && (null === uu || Ru.value > uu) && (uu = Ru.value);
        return uu
      }
      get maxLength() {
        let uu = null;
        for (const Ru of this._def.checks) "max" === Ru.kind && (null === uu || Ru.value < uu) && (uu = Ru.value);
        return uu
      }
    }

    function Zu(uu, Ru) {
      const yu = (uu.toString().split(".")[1] || "").length,
        Eu = (Ru.toString().split(".")[1] || "").length,
        Ku = yu > Eu ? yu : Eu;
      return parseInt(uu.toFixed(Ku).replace(".", "")) % parseInt(Ru.toFixed(Ku).replace(".", "")) / Math.pow(10, Ku)
    }
    wu.create = uu => {
      var Ru;
      return new wu({
        checks: [],
        typeName: sR.ZodString,
        coerce: null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.coerce) && void 0 !== Ru && Ru,
        ...Uu(uu)
      })
    };
    class hu extends nu {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(uu) {
        this._def.coerce && (uu.data = Number(uu.data));
        if (this._getType(uu) !== Vu.number) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.number,
            received: Ru.parsedType
          }), du
        }
        let Ru;
        const yu = new Hu;
        for (const Eu of this._def.checks)
          if ("int" === Eu.kind) Ju.isInteger(uu.data) || (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
            code: Bu.invalid_type,
            expected: "integer",
            received: "float",
            message: Eu.message
          }), yu.tS());
          else if ("min" === Eu.kind) {
          (Eu.inclusive ? uu.data < Eu.value : uu.data <= Eu.value) && (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
            code: Bu.too_small,
            minimum: Eu.value,
            type: "number",
            inclusive: Eu.inclusive,
            exact: !1,
            message: Eu.message
          }), yu.tS())
        } else if ("max" === Eu.kind) {
          (Eu.inclusive ? uu.data > Eu.value : uu.data >= Eu.value) && (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
            code: Bu.too_big,
            maximum: Eu.value,
            type: "number",
            inclusive: Eu.inclusive,
            exact: !1,
            message: Eu.message
          }), yu.tS())
        } else "multipleOf" === Eu.kind ? 0 !== Zu(uu.data, Eu.value) && (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
          code: Bu.not_multiple_of,
          multipleOf: Eu.value,
          message: Eu.message
        }), yu.tS()) : "finite" === Eu.kind ? Number.isFinite(uu.data) || (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
          code: Bu.not_finite,
          message: Eu.message
        }), yu.tS()) : Ju.assertNever(Eu);
        return {
          status: yu.value,
          value: uu.data
        }
      }
      gte(uu, Ru) {
        return this.setLimit("min", uu, !0, Mu.toString(Ru))
      }
      gt(uu, Ru) {
        return this.setLimit("min", uu, !1, Mu.toString(Ru))
      }
      lte(uu, Ru) {
        return this.setLimit("max", uu, !0, Mu.toString(Ru))
      }
      lt(uu, Ru) {
        return this.setLimit("max", uu, !1, Mu.toString(Ru))
      }
      setLimit(uu, Ru, yu, Eu) {
        return new hu({
          ...this._def,
          checks: [...this._def.checks, {
            kind: uu,
            value: Ru,
            inclusive: yu,
            message: Mu.toString(Eu)
          }]
        })
      }
      _addCheck(uu) {
        return new hu({
          ...this._def,
          checks: [...this._def.checks, uu]
        })
      }
      int(uu) {
        return this._addCheck({
          kind: "int",
          message: Mu.toString(uu)
        })
      }
      positive(uu) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Mu.toString(uu)
        })
      }
      negative(uu) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Mu.toString(uu)
        })
      }
      nonpositive(uu) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Mu.toString(uu)
        })
      }
      nonnegative(uu) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Mu.toString(uu)
        })
      }
      multipleOf(uu, Ru) {
        return this._addCheck({
          kind: "multipleOf",
          value: uu,
          message: Mu.toString(Ru)
        })
      }
      finite(uu) {
        return this._addCheck({
          kind: "finite",
          message: Mu.toString(uu)
        })
      }
      safe(uu) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Mu.toString(uu)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Mu.toString(uu)
        })
      }
      get minValue() {
        let uu = null;
        for (const Ru of this._def.checks) "min" === Ru.kind && (null === uu || Ru.value > uu) && (uu = Ru.value);
        return uu
      }
      get maxValue() {
        let uu = null;
        for (const Ru of this._def.checks) "max" === Ru.kind && (null === uu || Ru.value < uu) && (uu = Ru.value);
        return uu
      }
      get isInt() {
        return !!this._def.checks.find((uu => "int" === uu.kind || "multipleOf" === uu.kind && Ju.isInteger(uu.value)))
      }
      get isFinite() {
        let uu = null,
          Ru = null;
        for (const yu of this._def.checks) {
          if ("finite" === yu.kind || "int" === yu.kind || "multipleOf" === yu.kind) return !0;
          "min" === yu.kind ? (null === Ru || yu.value > Ru) && (Ru = yu.value) : "max" === yu.kind && (null === uu || yu.value < uu) && (uu = yu.value)
        }
        return Number.isFinite(Ru) && Number.isFinite(uu)
      }
    }
    hu.create = uu => new hu({
      checks: [],
      typeName: sR.ZodNumber,
      coerce: (null === uu || void 0 === uu ? void 0 : uu.coerce) || !1,
      ...Uu(uu)
    });
    class Pu extends nu {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(uu) {
        this._def.coerce && (uu.data = BigInt(uu.data));
        if (this._getType(uu) !== Vu.bigint) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.bigint,
            received: Ru.parsedType
          }), du
        }
        let Ru;
        const yu = new Hu;
        for (const Eu of this._def.checks)
          if ("min" === Eu.kind) {
            (Eu.inclusive ? uu.data < Eu.value : uu.data <= Eu.value) && (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
              code: Bu.too_small,
              type: "bigint",
              minimum: Eu.value,
              inclusive: Eu.inclusive,
              message: Eu.message
            }), yu.tS())
          } else if ("max" === Eu.kind) {
          (Eu.inclusive ? uu.data > Eu.value : uu.data >= Eu.value) && (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
            code: Bu.too_big,
            type: "bigint",
            maximum: Eu.value,
            inclusive: Eu.inclusive,
            message: Eu.message
          }), yu.tS())
        } else "multipleOf" === Eu.kind ? uu.data % Eu.value !== BigInt(0) && (Ru = this._getOrReturnCtx(uu, Ru), ju(Ru, {
          code: Bu.not_multiple_of,
          multipleOf: Eu.value,
          message: Eu.message
        }), yu.tS()) : Ju.assertNever(Eu);
        return {
          status: yu.value,
          value: uu.data
        }
      }
      gte(uu, Ru) {
        return this.setLimit("min", uu, !0, Mu.toString(Ru))
      }
      gt(uu, Ru) {
        return this.setLimit("min", uu, !1, Mu.toString(Ru))
      }
      lte(uu, Ru) {
        return this.setLimit("max", uu, !0, Mu.toString(Ru))
      }
      lt(uu, Ru) {
        return this.setLimit("max", uu, !1, Mu.toString(Ru))
      }
      setLimit(uu, Ru, yu, Eu) {
        return new Pu({
          ...this._def,
          checks: [...this._def.checks, {
            kind: uu,
            value: Ru,
            inclusive: yu,
            message: Mu.toString(Eu)
          }]
        })
      }
      _addCheck(uu) {
        return new Pu({
          ...this._def,
          checks: [...this._def.checks, uu]
        })
      }
      positive(uu) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Mu.toString(uu)
        })
      }
      negative(uu) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Mu.toString(uu)
        })
      }
      nonpositive(uu) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Mu.toString(uu)
        })
      }
      nonnegative(uu) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Mu.toString(uu)
        })
      }
      multipleOf(uu, Ru) {
        return this._addCheck({
          kind: "multipleOf",
          value: uu,
          message: Mu.toString(Ru)
        })
      }
      get minValue() {
        let uu = null;
        for (const Ru of this._def.checks) "min" === Ru.kind && (null === uu || Ru.value > uu) && (uu = Ru.value);
        return uu
      }
      get maxValue() {
        let uu = null;
        for (const Ru of this._def.checks) "max" === Ru.kind && (null === uu || Ru.value < uu) && (uu = Ru.value);
        return uu
      }
    }
    Pu.create = uu => {
      var Ru;
      return new Pu({
        checks: [],
        typeName: sR.ZodBigInt,
        coerce: null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.coerce) && void 0 !== Ru && Ru,
        ...Uu(uu)
      })
    };
    class iu extends nu {
      _parse(uu) {
        this._def.coerce && (uu.data = Boolean(uu.data));
        if (this._getType(uu) !== Vu.boolean) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.boolean,
            received: Ru.parsedType
          }), du
        }
        return Cu(uu.data)
      }
    }
    iu.create = uu => new iu({
      typeName: sR.ZodBoolean,
      coerce: (null === uu || void 0 === uu ? void 0 : uu.coerce) || !1,
      ...Uu(uu)
    });
    class Yu extends nu {
      _parse(uu) {
        this._def.coerce && (uu.data = new Date(uu.data));
        if (this._getType(uu) !== Vu.date) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.date,
            received: Ru.parsedType
          }), du
        }
        if (isNaN(uu.data.getTime())) {
          return ju(this._getOrReturnCtx(uu), {
            code: Bu.invalid_date
          }), du
        }
        const Ru = new Hu;
        let yu;
        for (const Eu of this._def.checks) "min" === Eu.kind ? uu.data.getTime() < Eu.value && (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          code: Bu.too_small,
          message: Eu.message,
          inclusive: !0,
          exact: !1,
          minimum: Eu.value,
          type: "date"
        }), Ru.tS()) : "max" === Eu.kind ? uu.data.getTime() > Eu.value && (yu = this._getOrReturnCtx(uu, yu), ju(yu, {
          code: Bu.too_big,
          message: Eu.message,
          inclusive: !0,
          exact: !1,
          maximum: Eu.value,
          type: "date"
        }), Ru.tS()) : Ju.assertNever(Eu);
        return {
          status: Ru.value,
          value: new Date(uu.data.getTime())
        }
      }
      _addCheck(uu) {
        return new Yu({
          ...this._def,
          checks: [...this._def.checks, uu]
        })
      }
      min(uu, Ru) {
        return this._addCheck({
          kind: "min",
          value: uu.getTime(),
          message: Mu.toString(Ru)
        })
      }
      max(uu, Ru) {
        return this._addCheck({
          kind: "max",
          value: uu.getTime(),
          message: Mu.toString(Ru)
        })
      }
      get minDate() {
        let uu = null;
        for (const Ru of this._def.checks) "min" === Ru.kind && (null === uu || Ru.value > uu) && (uu = Ru.value);
        return null != uu ? new Date(uu) : null
      }
      get maxDate() {
        let uu = null;
        for (const Ru of this._def.checks) "max" === Ru.kind && (null === uu || Ru.value < uu) && (uu = Ru.value);
        return null != uu ? new Date(uu) : null
      }
    }
    Yu.create = uu => new Yu({
      checks: [],
      coerce: (null === uu || void 0 === uu ? void 0 : uu.coerce) || !1,
      typeName: sR.ZodDate,
      ...Uu(uu)
    });
    class ou extends nu {
      _parse(uu) {
        if (this._getType(uu) !== Vu.symbol) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.symbol,
            received: Ru.parsedType
          }), du
        }
        return Cu(uu.data)
      }
    }
    ou.create = uu => new ou({
      typeName: sR.ZodSymbol,
      ...Uu(uu)
    });
    class qu extends nu {
      _parse(uu) {
        if (this._getType(uu) !== Vu.undefined) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.undefined,
            received: Ru.parsedType
          }), du
        }
        return Cu(uu.data)
      }
    }
    qu.create = uu => new qu({
      typeName: sR.ZodUndefined,
      ...Uu(uu)
    });
    class Ou extends nu {
      _parse(uu) {
        if (this._getType(uu) !== Vu.null) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.null,
            received: Ru.parsedType
          }), du
        }
        return Cu(uu.data)
      }
    }
    Ou.create = uu => new Ou({
      typeName: sR.ZodNull,
      ...Uu(uu)
    });
    class vu extends nu {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(uu) {
        return Cu(uu.data)
      }
    }
    vu.create = uu => new vu({
      typeName: sR.ZodAny,
      ...Uu(uu)
    });
    class au extends nu {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(uu) {
        return Cu(uu.data)
      }
    }
    au.create = uu => new au({
      typeName: sR.ZodUnknown,
      ...Uu(uu)
    });
    class fu extends nu {
      _parse(uu) {
        const Ru = this._getOrReturnCtx(uu);
        return ju(Ru, {
          code: Bu.invalid_type,
          expected: Vu.never,
          received: Ru.parsedType
        }), du
      }
    }
    fu.create = uu => new fu({
      typeName: sR.ZodNever,
      ...Uu(uu)
    });
    class uR extends nu {
      _parse(uu) {
        if (this._getType(uu) !== Vu.undefined) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.void,
            received: Ru.parsedType
          }), du
        }
        return Cu(uu.data)
      }
    }
    uR.create = uu => new uR({
      typeName: sR.ZodVoid,
      ...Uu(uu)
    });
    class RR extends nu {
      _parse(uu) {
        const {
          ctx: Ru,
          status: yu
        } = this._processInputParams(uu), Eu = this._def;
        if (Ru.parsedType !== Vu.array) return ju(Ru, {
          code: Bu.invalid_type,
          expected: Vu.array,
          received: Ru.parsedType
        }), du;
        if (null !== Eu.exactLength) {
          const uu = Ru.data.length > Eu.exactLength.value,
            Ku = Ru.data.length < Eu.exactLength.value;
          (uu || Ku) && (ju(Ru, {
            code: uu ? Bu.too_big : Bu.too_small,
            minimum: Ku ? Eu.exactLength.value : void 0,
            maximum: uu ? Eu.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Eu.exactLength.message
          }), yu.tS())
        }
        if (null !== Eu.minLength && Ru.data.length < Eu.minLength.value && (ju(Ru, {
            code: Bu.too_small,
            minimum: Eu.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Eu.minLength.message
          }), yu.tS()), null !== Eu.maxLength && Ru.data.length > Eu.maxLength.value && (ju(Ru, {
            code: Bu.too_big,
            maximum: Eu.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Eu.maxLength.message
          }), yu.tS()), Ru.common.async) return Promise.all([...Ru.data].map(((uu, yu) => Eu.type._parseAsync(new Iu(Ru, uu, Ru.path, yu))))).then((uu => Hu.mergeArray(yu, uu)));
        const Ku = [...Ru.data].map(((uu, yu) => Eu.type._parseSync(new Iu(Ru, uu, Ru.path, yu))));
        return Hu.mergeArray(yu, Ku)
      }
      get element() {
        return this._def.type
      }
      min(uu, Ru) {
        return new RR({
          ...this._def,
          minLength: {
            value: uu,
            message: Mu.toString(Ru)
          }
        })
      }
      max(uu, Ru) {
        return new RR({
          ...this._def,
          maxLength: {
            value: uu,
            message: Mu.toString(Ru)
          }
        })
      }
      length(uu, Ru) {
        return new RR({
          ...this._def,
          exactLength: {
            value: uu,
            message: Mu.toString(Ru)
          }
        })
      }
      nonempty(uu) {
        return this.min(1, uu)
      }
    }

    function yR(uu) {
      if (uu instanceof ER) {
        const Ru = {};
        for (const yu in uu.shape) {
          const Eu = uu.shape[yu];
          Ru[yu] = bR.create(yR(Eu))
        }
        return new ER({
          ...uu._def,
          shape: () => Ru
        })
      }
      return uu instanceof RR ? new RR({
        ...uu._def,
        type: yR(uu.element)
      }) : uu instanceof bR ? bR.create(yR(uu.unwrap())) : uu instanceof CR ? CR.create(yR(uu.unwrap())) : uu instanceof XR ? XR.create(uu.items.map((uu => yR(uu)))) : uu
    }
    RR.create = (uu, Ru) => new RR({
      type: uu,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: sR.ZodArray,
      ...Uu(Ru)
    });
    class ER extends nu {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const uu = this._def.shape(),
          Ru = Ju.objectKeys(uu);
        return this._cached = {
          shape: uu,
          keys: Ru
        }
      }
      _parse(uu) {
        if (this._getType(uu) !== Vu.object) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.object,
            received: Ru.parsedType
          }), du
        }
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu), {
          shape: Eu,
          keys: Ku
        } = this._getCached(), Qu = [];
        if (!(this._def.catchall instanceof fu && "strip" === this._def.unknownKeys))
          for (const Ju in yu.data) Ku.includes(Ju) || Qu.push(Ju);
        const mu = [];
        for (const Ju of Ku) {
          const uu = Eu[Ju],
            Ru = yu.data[Ju];
          mu.push({
            key: {
              status: "valid",
              value: Ju
            },
            value: uu._parse(new Iu(yu, Ru, yu.path, Ju)),
            alwaysSet: Ju in yu.data
          })
        }
        if (this._def.catchall instanceof fu) {
          const uu = this._def.unknownKeys;
          if ("passthrough" === uu)
            for (const Ru of Qu) mu.push({
              key: {
                status: "valid",
                value: Ru
              },
              value: {
                status: "valid",
                value: yu.data[Ru]
              }
            });
          else if ("strict" === uu) Qu.length > 0 && (ju(yu, {
            code: Bu.unrecognized_keys,
            keys: Qu
          }), Ru.tS());
          else if ("strip" !== uu) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const uu = this._def.catchall;
          for (const Ru of Qu) {
            const Eu = yu.data[Ru];
            mu.push({
              key: {
                status: "valid",
                value: Ru
              },
              value: uu._parse(new Iu(yu, Eu, yu.path, Ru)),
              alwaysSet: Ru in yu.data
            })
          }
        }
        return yu.common.async ? Promise.resolve().then((async () => {
          const uu = [];
          for (const Ru of mu) {
            const yu = await Ru.key;
            uu.push({
              key: yu,
              value: await Ru.value,
              alwaysSet: Ru.alwaysSet
            })
          }
          return uu
        })).then((uu => Hu.mergeObjectSync(Ru, uu))) : Hu.mergeObjectSync(Ru, mu)
      }
      get shape() {
        return this._def.shape()
      }
      strict(uu) {
        return Mu.errToObj, new ER({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== uu ? {
            errorMap: (Ru, yu) => {
              var Eu, Ku, Qu, mu;
              const Ju = null !== (Qu = null === (Ku = (Eu = this._def).errorMap) || void 0 === Ku ? void 0 : Ku.call(Eu, Ru, yu).message) && void 0 !== Qu ? Qu : yu.defaultError;
              return "unrecognized_keys" === Ru.code ? {
                message: null !== (mu = Mu.errToObj(uu).message) && void 0 !== mu ? mu : Ju
              } : {
                message: Ju
              }
            }
          } : {}
        })
      }
      strip() {
        return new ER({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new ER({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(uu) {
        return new ER({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...uu
          })
        })
      }
      merge(uu) {
        return new ER({
          unknownKeys: uu._def.unknownKeys,
          catchall: uu._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...uu._def.shape()
          }),
          typeName: sR.ZodObject
        })
      }
      setKey(uu, Ru) {
        return this.augment({
          [uu]: Ru
        })
      }
      catchall(uu) {
        return new ER({
          ...this._def,
          catchall: uu
        })
      }
      cB(uu) {
        const Ru = {};
        return Ju.objectKeys(uu).forEach((yu => {
          uu[yu] && this.shape[yu] && (Ru[yu] = this.shape[yu])
        })), new ER({
          ...this._def,
          shape: () => Ru
        })
      }
      omit(uu) {
        const Ru = {};
        return Ju.objectKeys(this.shape).forEach((yu => {
          uu[yu] || (Ru[yu] = this.shape[yu])
        })), new ER({
          ...this._def,
          shape: () => Ru
        })
      }
      deepPartial() {
        return yR(this)
      }
      partial(uu) {
        const Ru = {};
        return Ju.objectKeys(this.shape).forEach((yu => {
          const Eu = this.shape[yu];
          uu && !uu[yu] ? Ru[yu] = Eu : Ru[yu] = Eu.optional()
        })), new ER({
          ...this._def,
          shape: () => Ru
        })
      }
      required(uu) {
        const Ru = {};
        return Ju.objectKeys(this.shape).forEach((yu => {
          if (uu && !uu[yu]) Ru[yu] = this.shape[yu];
          else {
            let uu = this.shape[yu];
            for (; uu instanceof bR;) uu = uu._def.innerType;
            Ru[yu] = uu
          }
        })), new ER({
          ...this._def,
          shape: () => Ru
        })
      }
      keyof() {
        return TR(Ju.objectKeys(this.shape))
      }
    }
    ER.create = (uu, Ru) => new ER({
      shape: () => uu,
      unknownKeys: "strip",
      catchall: fu.create(),
      typeName: sR.ZodObject,
      ...Uu(Ru)
    }), ER.strictCreate = (uu, Ru) => new ER({
      shape: () => uu,
      unknownKeys: "strict",
      catchall: fu.create(),
      typeName: sR.ZodObject,
      ...Uu(Ru)
    }), ER.lazycreate = (uu, Ru) => new ER({
      shape: uu,
      unknownKeys: "strip",
      catchall: fu.create(),
      typeName: sR.ZodObject,
      ...Uu(Ru)
    });
    class KR extends nu {
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu), yu = this._def.options;
        if (Ru.common.async) return Promise.all(yu.map((async uu => {
          const yu = {
            ...Ru,
            common: {
              ...Ru.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await uu._parseAsync({
              data: Ru.data,
              path: Ru.path,
              parent: yu
            }),
            ctx: yu
          }
        }))).then((function(uu) {
          for (const Ru of uu)
            if ("valid" === Ru.result.status) return Ru.result;
          for (const Eu of uu)
            if ("tS" === Eu.result.status) return Ru.common.issues.push(...Eu.ctx.common.issues), Eu.result;
          const yu = uu.map((uu => new xu(uu.ctx.common.issues)));
          return ju(Ru, {
            code: Bu.invalid_union,
            unionErrors: yu
          }), du
        }));
        {
          let uu;
          const Eu = [];
          for (const Qu of yu) {
            const yu = {
                ...Ru,
                common: {
                  ...Ru.common,
                  issues: []
                },
                parent: null
              },
              Ku = Qu._parseSync({
                data: Ru.data,
                path: Ru.path,
                parent: yu
              });
            if ("valid" === Ku.status) return Ku;
            "tS" !== Ku.status || uu || (uu = {
              result: Ku,
              ctx: yu
            }), yu.common.issues.length && Eu.push(yu.common.issues)
          }
          if (uu) return Ru.common.issues.push(...uu.ctx.common.issues), uu.result;
          const Ku = Eu.map((uu => new xu(uu)));
          return ju(Ru, {
            code: Bu.invalid_union,
            unionErrors: Ku
          }), du
        }
      }
      get options() {
        return this._def.options
      }
    }
    KR.create = (uu, Ru) => new KR({
      options: uu,
      typeName: sR.ZodUnion,
      ...Uu(Ru)
    });
    const QR = uu => uu instanceof SR ? QR(uu.schema) : uu instanceof dR ? QR(uu.innerType()) : uu instanceof pR ? [uu.value] : uu instanceof WR ? uu.options : uu instanceof jR ? Object.keys(uu.enum) : uu instanceof kR ? QR(uu._def.innerType) : uu instanceof qu ? [void 0] : uu instanceof Ou ? [null] : null;
    class mR extends nu {
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu);
        if (Ru.parsedType !== Vu.object) return ju(Ru, {
          code: Bu.invalid_type,
          expected: Vu.object,
          received: Ru.parsedType
        }), du;
        const yu = this.discriminator,
          Eu = Ru.data[yu],
          Ku = this.optionsMap.get(Eu);
        return Ku ? Ru.common.async ? Ku._parseAsync({
          data: Ru.data,
          path: Ru.path,
          parent: Ru
        }) : Ku._parseSync({
          data: Ru.data,
          path: Ru.path,
          parent: Ru
        }) : (ju(Ru, {
          code: Bu.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [yu]
        }), du)
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
      static create(uu, Ru, yu) {
        const Eu = new Map;
        for (const Ku of Ru) {
          const Ru = QR(Ku.shape[uu]);
          if (!Ru) throw new Error(`A discriminator value for key \`${uu}\` could not be extracted from all schema options`);
          for (const yu of Ru) {
            if (Eu.has(yu)) throw new Error(`Discriminator property ${String(uu)} has duplicate value ${String(yu)}`);
            Eu.set(yu, Ku)
          }
        }
        return new mR({
          typeName: sR.ZodDiscriminatedUnion,
          discriminator: uu,
          options: Ru,
          optionsMap: Eu,
          ...Uu(yu)
        })
      }
    }

    function JR(uu, Ru) {
      const yu = ru(uu),
        Eu = ru(Ru);
      if (uu === Ru) return {
        valid: !0,
        data: uu
      };
      if (yu === Vu.object && Eu === Vu.object) {
        const yu = Ju.objectKeys(Ru),
          Eu = Ju.objectKeys(uu).filter((uu => -1 !== yu.indexOf(uu))),
          Ku = {
            ...uu,
            ...Ru
          };
        for (const Qu of Eu) {
          const yu = JR(uu[Qu], Ru[Qu]);
          if (!yu.valid) return {
            valid: !1
          };
          Ku[Qu] = yu.data
        }
        return {
          valid: !0,
          data: Ku
        }
      }
      if (yu === Vu.array && Eu === Vu.array) {
        if (uu.length !== Ru.length) return {
          valid: !1
        };
        const yu = [];
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const Ku = JR(uu[Eu], Ru[Eu]);
          if (!Ku.valid) return {
            valid: !1
          };
          yu.push(Ku.data)
        }
        return {
          valid: !0,
          data: yu
        }
      }
      return yu === Vu.date && Eu === Vu.date && +uu === +Ru ? {
        valid: !0,
        data: uu
      } : {
        valid: !1
      }
    }
    class NR extends nu {
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu), Eu = (uu, Eu) => {
          if (ku(uu) || ku(Eu)) return du;
          const Ku = JR(uu.value, Eu.value);
          return Ku.valid ? ((eu(uu) || eu(Eu)) && Ru.tS(), {
            status: Ru.value,
            value: Ku.data
          }) : (ju(yu, {
            code: Bu.invalid_intersection_types
          }), du)
        };
        return yu.common.async ? Promise.all([this._def.left._parseAsync({
          data: yu.data,
          path: yu.path,
          parent: yu
        }), this._def.right._parseAsync({
          data: yu.data,
          path: yu.path,
          parent: yu
        })]).then((uu => {
          let [Ru, yu] = uu;
          return Eu(Ru, yu)
        })) : Eu(this._def.left._parseSync({
          data: yu.data,
          path: yu.path,
          parent: yu
        }), this._def.right._parseSync({
          data: yu.data,
          path: yu.path,
          parent: yu
        }))
      }
    }
    NR.create = (uu, Ru, yu) => new NR({
      left: uu,
      right: Ru,
      typeName: sR.ZodIntersection,
      ...Uu(yu)
    });
    class XR extends nu {
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu);
        if (yu.parsedType !== Vu.array) return ju(yu, {
          code: Bu.invalid_type,
          expected: Vu.array,
          received: yu.parsedType
        }), du;
        if (yu.data.length < this._def.items.length) return ju(yu, {
          code: Bu.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), du;
        !this._def.rest && yu.data.length > this._def.items.length && (ju(yu, {
          code: Bu.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Ru.tS());
        const Eu = [...yu.data].map(((uu, Ru) => {
          const Eu = this._def.items[Ru] || this._def.rest;
          return Eu ? Eu._parse(new Iu(yu, uu, yu.path, Ru)) : null
        })).filter((uu => !!uu));
        return yu.common.async ? Promise.all(Eu).then((uu => Hu.mergeArray(Ru, uu))) : Hu.mergeArray(Ru, Eu)
      }
      get items() {
        return this._def.items
      }
      rest(uu) {
        return new XR({
          ...this._def,
          rest: uu
        })
      }
    }
    XR.create = (uu, Ru) => {
      if (!Array.isArray(uu)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new XR({
        items: uu,
        typeName: sR.ZodTuple,
        rest: null,
        ...Uu(Ru)
      })
    };
    class VR extends nu {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu);
        if (yu.parsedType !== Vu.object) return ju(yu, {
          code: Bu.invalid_type,
          expected: Vu.object,
          received: yu.parsedType
        }), du;
        const Eu = [],
          Ku = this._def.keyType,
          Qu = this._def.valueType;
        for (const mu in yu.data) Eu.push({
          key: Ku._parse(new Iu(yu, mu, yu.path, mu)),
          value: Qu._parse(new Iu(yu, yu.data[mu], yu.path, mu))
        });
        return yu.common.async ? Hu.mergeObjectAsync(Ru, Eu) : Hu.mergeObjectSync(Ru, Eu)
      }
      get element() {
        return this._def.valueType
      }
      static create(uu, Ru, yu) {
        return new VR(Ru instanceof nu ? {
          keyType: uu,
          valueType: Ru,
          typeName: sR.ZodRecord,
          ...Uu(yu)
        } : {
          keyType: wu.create(),
          valueType: uu,
          typeName: sR.ZodRecord,
          ...Uu(Ru)
        })
      }
    }
    class rR extends nu {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu);
        if (yu.parsedType !== Vu.map) return ju(yu, {
          code: Bu.invalid_type,
          expected: Vu.map,
          received: yu.parsedType
        }), du;
        const Eu = this._def.keyType,
          Ku = this._def.valueType,
          Qu = [...yu.data.entries()].map(((uu, Ru) => {
            let [Qu, mu] = uu;
            return {
              key: Eu._parse(new Iu(yu, Qu, yu.path, [Ru, "key"])),
              value: Ku._parse(new Iu(yu, mu, yu.path, [Ru, "value"]))
            }
          }));
        if (yu.common.async) {
          const uu = new Map;
          return Promise.resolve().then((async () => {
            for (const yu of Qu) {
              const Eu = await yu.key,
                Ku = await yu.value;
              if ("aborted" === Eu.status || "aborted" === Ku.status) return du;
              "tS" !== Eu.status && "tS" !== Ku.status || Ru.tS(), uu.set(Eu.value, Ku.value)
            }
            return {
              status: Ru.value,
              value: uu
            }
          }))
        } {
          const uu = new Map;
          for (const yu of Qu) {
            const Eu = yu.key,
              Ku = yu.value;
            if ("aborted" === Eu.status || "aborted" === Ku.status) return du;
            "tS" !== Eu.status && "tS" !== Ku.status || Ru.tS(), uu.set(Eu.value, Ku.value)
          }
          return {
            status: Ru.value,
            value: uu
          }
        }
      }
    }
    rR.create = (uu, Ru, yu) => new rR({
      valueType: Ru,
      keyType: uu,
      typeName: sR.ZodMap,
      ...Uu(yu)
    });
    class BR extends nu {
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu);
        if (yu.parsedType !== Vu.set) return ju(yu, {
          code: Bu.invalid_type,
          expected: Vu.set,
          received: yu.parsedType
        }), du;
        const Eu = this._def;
        null !== Eu.minSize && yu.data.size < Eu.minSize.value && (ju(yu, {
          code: Bu.too_small,
          minimum: Eu.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Eu.minSize.message
        }), Ru.tS()), null !== Eu.maxSize && yu.data.size > Eu.maxSize.value && (ju(yu, {
          code: Bu.too_big,
          maximum: Eu.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Eu.maxSize.message
        }), Ru.tS());
        const Ku = this._def.valueType;

        function Qu(uu) {
          const yu = new Set;
          for (const Eu of uu) {
            if ("aborted" === Eu.status) return du;
            "tS" === Eu.status && Ru.tS(), yu.add(Eu.value)
          }
          return {
            status: Ru.value,
            value: yu
          }
        }
        const mu = [...yu.data.values()].map(((uu, Ru) => Ku._parse(new Iu(yu, uu, yu.path, Ru))));
        return yu.common.async ? Promise.all(mu).then((uu => Qu(uu))) : Qu(mu)
      }
      min(uu, Ru) {
        return new BR({
          ...this._def,
          minSize: {
            value: uu,
            message: Mu.toString(Ru)
          }
        })
      }
      max(uu, Ru) {
        return new BR({
          ...this._def,
          maxSize: {
            value: uu,
            message: Mu.toString(Ru)
          }
        })
      }
      size(uu, Ru) {
        return this.min(uu, Ru).max(uu, Ru)
      }
      nonempty(uu) {
        return this.min(1, uu)
      }
    }
    BR.create = (uu, Ru) => new BR({
      valueType: uu,
      minSize: null,
      maxSize: null,
      typeName: sR.ZodSet,
      ...Uu(Ru)
    });
    class xR extends nu {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu);
        if (Ru.parsedType !== Vu.function) return ju(Ru, {
          code: Bu.invalid_type,
          expected: Vu.function,
          received: Ru.parsedType
        }), du;

        function yu(uu, yu) {
          return Wu({
            data: uu,
            path: Ru.path,
            errorMaps: [Ru.common.contextualErrorMap, Ru.schemaErrorMap, Tu(), Su].filter((uu => !!uu)),
            issueData: {
              code: Bu.invalid_arguments,
              argumentsError: yu
            }
          })
        }

        function Eu(uu, yu) {
          return Wu({
            data: uu,
            path: Ru.path,
            errorMaps: [Ru.common.contextualErrorMap, Ru.schemaErrorMap, Tu(), Su].filter((uu => !!uu)),
            issueData: {
              code: Bu.invalid_return_type,
              returnTypeError: yu
            }
          })
        }
        const Ku = {
            errorMap: Ru.common.contextualErrorMap
          },
          Qu = Ru.data;
        if (this._def.returns instanceof HR) {
          const uu = this;
          return Cu((async function() {
            for (var Ru = arguments.length, mu = new Array(Ru), Ju = 0; Ju < Ru; Ju++) mu[Ju] = arguments[Ju];
            const Nu = new xu([]),
              Xu = await uu._def.args.parseAsync(mu, Ku).catch((uu => {
                throw Nu.addIssue(yu(mu, uu)), Nu
              })),
              Vu = await Reflect.apply(Qu, this, Xu);
            return await uu._def.returns._def.type.parseAsync(Vu, Ku).catch((uu => {
              throw Nu.addIssue(Eu(Vu, uu)), Nu
            }))
          }))
        } {
          const uu = this;
          return Cu((function() {
            for (var Ru = arguments.length, mu = new Array(Ru), Ju = 0; Ju < Ru; Ju++) mu[Ju] = arguments[Ju];
            const Nu = uu._def.args.safeParse(mu, Ku);
            if (!Nu.success) throw new xu([yu(mu, Nu.error)]);
            const Xu = Reflect.apply(Qu, this, Nu.data),
              Vu = uu._def.returns.safeParse(Xu, Ku);
            if (!Vu.success) throw new xu([Eu(Xu, Vu.error)]);
            return Vu.data
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
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        return new xR({
          ...this._def,
          args: XR.create(Ru).rest(au.create())
        })
      }
      returns(uu) {
        return new xR({
          ...this._def,
          returns: uu
        })
      }
      implement(uu) {
        return this.parse(uu)
      }
      strictImplement(uu) {
        return this.parse(uu)
      }
      static create(uu, Ru, yu) {
        return new xR({
          args: uu || XR.create([]).rest(au.create()),
          returns: Ru || au.create(),
          typeName: sR.ZodFunction,
          ...Uu(yu)
        })
      }
    }
    class SR extends nu {
      get schema() {
        return this._def.getter()
      }
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu);
        return this._def.getter()._parse({
          data: Ru.data,
          path: Ru.path,
          parent: Ru
        })
      }
    }
    SR.create = (uu, Ru) => new SR({
      getter: uu,
      typeName: sR.ZodLazy,
      ...Uu(Ru)
    });
    class pR extends nu {
      _parse(uu) {
        if (uu.data !== this._def.value) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            received: Ru.data,
            code: Bu.invalid_literal,
            expected: this._def.value
          }), du
        }
        return {
          status: "valid",
          value: uu.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function TR(uu, Ru) {
      return new WR({
        values: uu,
        typeName: sR.ZodEnum,
        ...Uu(Ru)
      })
    }
    pR.create = (uu, Ru) => new pR({
      value: uu,
      typeName: sR.ZodLiteral,
      ...Uu(Ru)
    });
    class WR extends nu {
      _parse(uu) {
        if ("string" !== typeof uu.data) {
          const Ru = this._getOrReturnCtx(uu),
            yu = this._def.values;
          return ju(Ru, {
            expected: Ju.joinValues(yu),
            received: Ru.parsedType,
            code: Bu.invalid_type
          }), du
        }
        if (-1 === this._def.values.indexOf(uu.data)) {
          const Ru = this._getOrReturnCtx(uu),
            yu = this._def.values;
          return ju(Ru, {
            received: Ru.data,
            code: Bu.invalid_enum_value,
            options: yu
          }), du
        }
        return Cu(uu.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const uu = {};
        for (const Ru of this._def.values) uu[Ru] = Ru;
        return uu
      }
      get Values() {
        const uu = {};
        for (const Ru of this._def.values) uu[Ru] = Ru;
        return uu
      }
      get Enum() {
        const uu = {};
        for (const Ru of this._def.values) uu[Ru] = Ru;
        return uu
      }
      extract(uu) {
        return WR.create(uu)
      }
      exclude(uu) {
        return WR.create(this.options.filter((Ru => !uu.includes(Ru))))
      }
    }
    WR.create = TR;
    class jR extends nu {
      _parse(uu) {
        const Ru = Ju.getValidEnumValues(this._def.values),
          yu = this._getOrReturnCtx(uu);
        if (yu.parsedType !== Vu.string && yu.parsedType !== Vu.number) {
          const uu = Ju.objectValues(Ru);
          return ju(yu, {
            expected: Ju.joinValues(uu),
            received: yu.parsedType,
            code: Bu.invalid_type
          }), du
        }
        if (-1 === Ru.indexOf(uu.data)) {
          const uu = Ju.objectValues(Ru);
          return ju(yu, {
            received: yu.data,
            code: Bu.invalid_enum_value,
            options: uu
          }), du
        }
        return Cu(uu.data)
      }
      get enum() {
        return this._def.values
      }
    }
    jR.create = (uu, Ru) => new jR({
      values: uu,
      typeName: sR.ZodNativeEnum,
      ...Uu(Ru)
    });
    class HR extends nu {
      unwrap() {
        return this._def.type
      }
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu);
        if (Ru.parsedType !== Vu.promise && !1 === Ru.common.async) return ju(Ru, {
          code: Bu.invalid_type,
          expected: Vu.promise,
          received: Ru.parsedType
        }), du;
        const yu = Ru.parsedType === Vu.promise ? Ru.data : Promise.resolve(Ru.data);
        return Cu(yu.then((uu => this._def.type.parseAsync(uu, {
          path: Ru.path,
          errorMap: Ru.common.contextualErrorMap
        }))))
      }
    }
    HR.create = (uu, Ru) => new HR({
      type: uu,
      typeName: sR.ZodPromise,
      ...Uu(Ru)
    });
    class dR extends nu {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === sR.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu), Eu = this._def.effect || null, Ku = {
          addIssue: uu => {
            ju(yu, uu), uu.fatal ? Ru.abort() : Ru.tS()
          },
          get path() {
            return yu.path
          }
        };
        if (Ku.addIssue = Ku.addIssue.bind(Ku), "preprocess" === Eu.type) {
          const uu = Eu.transform(yu.data, Ku);
          return yu.common.issues.length ? {
            status: "tS",
            value: yu.data
          } : yu.common.async ? Promise.resolve(uu).then((uu => this._def.schema._parseAsync({
            data: uu,
            path: yu.path,
            parent: yu
          }))) : this._def.schema._parseSync({
            data: uu,
            path: yu.path,
            parent: yu
          })
        }
        if ("refinement" === Eu.type) {
          const uu = uu => {
            const Ru = Eu.refinement(uu, Ku);
            if (yu.common.async) return Promise.resolve(Ru);
            if (Ru instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return uu
          };
          if (!1 === yu.common.async) {
            const Eu = this._def.schema._parseSync({
              data: yu.data,
              path: yu.path,
              parent: yu
            });
            return "aborted" === Eu.status ? du : ("tS" === Eu.status && Ru.tS(), uu(Eu.value), {
              status: Ru.value,
              value: Eu.value
            })
          }
          return this._def.schema._parseAsync({
            data: yu.data,
            path: yu.path,
            parent: yu
          }).then((yu => "aborted" === yu.status ? du : ("tS" === yu.status && Ru.tS(), uu(yu.value).then((() => ({
            status: Ru.value,
            value: yu.value
          }))))))
        }
        if ("transform" === Eu.type) {
          if (!1 === yu.common.async) {
            const uu = this._def.schema._parseSync({
              data: yu.data,
              path: yu.path,
              parent: yu
            });
            if (!Au(uu)) return uu;
            const Qu = Eu.transform(uu.value, Ku);
            if (Qu instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Ru.value,
              value: Qu
            }
          }
          return this._def.schema._parseAsync({
            data: yu.data,
            path: yu.path,
            parent: yu
          }).then((uu => Au(uu) ? Promise.resolve(Eu.transform(uu.value, Ku)).then((uu => ({
            status: Ru.value,
            value: uu
          }))) : uu))
        }
        Ju.assertNever(Eu)
      }
    }
    dR.create = (uu, Ru, yu) => new dR({
      schema: uu,
      typeName: sR.ZodEffects,
      effect: Ru,
      ...Uu(yu)
    }), dR.createWithPreprocess = (uu, Ru, yu) => new dR({
      schema: Ru,
      effect: {
        type: "preprocess",
        transform: uu
      },
      typeName: sR.ZodEffects,
      ...Uu(yu)
    });
    class bR extends nu {
      _parse(uu) {
        return this._getType(uu) === Vu.undefined ? Cu(void 0) : this._def.innerType._parse(uu)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    bR.create = (uu, Ru) => new bR({
      innerType: uu,
      typeName: sR.ZodOptional,
      ...Uu(Ru)
    });
    class CR extends nu {
      _parse(uu) {
        return this._getType(uu) === Vu.null ? Cu(null) : this._def.innerType._parse(uu)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    CR.create = (uu, Ru) => new CR({
      innerType: uu,
      typeName: sR.ZodNullable,
      ...Uu(Ru)
    });
    class kR extends nu {
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu);
        let yu = Ru.data;
        return Ru.parsedType === Vu.undefined && (yu = this._def.defaultValue()), this._def.innerType._parse({
          data: yu,
          path: Ru.path,
          parent: Ru
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    kR.create = (uu, Ru) => new kR({
      innerType: uu,
      typeName: sR.ZodDefault,
      defaultValue: "function" === typeof Ru.default ? Ru.default : () => Ru.default,
      ...Uu(Ru)
    });
    class eR extends nu {
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu), yu = {
          ...Ru,
          common: {
            ...Ru.common,
            issues: []
          }
        }, Eu = this._def.innerType._parse({
          data: yu.data,
          path: yu.path,
          parent: {
            ...yu
          }
        });
        return Du(Eu) ? Eu.then((uu => ({
          status: "valid",
          value: "valid" === uu.status ? uu.value : this._def.catchValue({
            get error() {
              return new xu(yu.common.issues)
            },
            input: yu.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Eu.status ? Eu.value : this._def.catchValue({
            get error() {
              return new xu(yu.common.issues)
            },
            input: yu.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    eR.create = (uu, Ru) => new eR({
      innerType: uu,
      typeName: sR.ZodCatch,
      catchValue: "function" === typeof Ru.catch ? Ru.catch : () => Ru.catch,
      ...Uu(Ru)
    });
    class AR extends nu {
      _parse(uu) {
        if (this._getType(uu) !== Vu.nan) {
          const Ru = this._getOrReturnCtx(uu);
          return ju(Ru, {
            code: Bu.invalid_type,
            expected: Vu.nan,
            received: Ru.parsedType
          }), du
        }
        return {
          status: "valid",
          value: uu.data
        }
      }
    }
    AR.create = uu => new AR({
      typeName: sR.ZodNaN,
      ...Uu(uu)
    });
    const DR = Symbol("zod_brand");
    class MR extends nu {
      _parse(uu) {
        const {
          ctx: Ru
        } = this._processInputParams(uu), yu = Ru.data;
        return this._def.type._parse({
          data: yu,
          path: Ru.path,
          parent: Ru
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class IR extends nu {
      _parse(uu) {
        const {
          status: Ru,
          ctx: yu
        } = this._processInputParams(uu);
        if (yu.common.async) {
          return (async () => {
            const uu = await this._def.in._parseAsync({
              data: yu.data,
              path: yu.path,
              parent: yu
            });
            return "aborted" === uu.status ? du : "tS" === uu.status ? (Ru.tS(), bu(uu.value)) : this._def.out._parseAsync({
              data: uu.value,
              path: yu.path,
              parent: yu
            })
          })()
        } {
          const uu = this._def.in._parseSync({
            data: yu.data,
            path: yu.path,
            parent: yu
          });
          return "aborted" === uu.status ? du : "tS" === uu.status ? (Ru.tS(), {
            status: "tS",
            value: uu.value
          }) : this._def.out._parseSync({
            data: uu.value,
            path: yu.path,
            parent: yu
          })
        }
      }
      static create(uu, Ru) {
        return new IR({
          in: uu,
          out: Ru,
          typeName: sR.ZodPipeline
        })
      }
    }
    class GR extends nu {
      _parse(uu) {
        const Ru = this._def.innerType._parse(uu);
        return Au(Ru) && (Ru.value = Object.freeze(Ru.value)), Ru
      }
    }
    GR.create = (uu, Ru) => new GR({
      innerType: uu,
      typeName: sR.ZodReadonly,
      ...Uu(Ru)
    });
    const UR = function(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          yu = arguments.length > 2 ? arguments[2] : void 0;
        return uu ? vu.create().superRefine(((Eu, Ku) => {
          var Qu, mu;
          if (!uu(Eu)) {
            const uu = "function" === typeof Ru ? Ru(Eu) : "string" === typeof Ru ? {
                message: Ru
              } : Ru,
              Ju = null === (mu = null !== (Qu = uu.fatal) && void 0 !== Qu ? Qu : yu) || void 0 === mu || mu,
              Nu = "string" === typeof uu ? {
                message: uu
              } : uu;
            Ku.addIssue({
              code: "custom",
              ...Nu,
              fatal: Ju
            })
          }
        })) : vu.create()
      },
      nR = {
        object: ER.lazycreate
      };
    var sR;
    ! function(uu) {
      uu.ZodString = "ZodString", uu.ZodNumber = "ZodNumber", uu.ZodNaN = "ZodNaN", uu.ZodBigInt = "ZodBigInt", uu.ZodBoolean = "ZodBoolean", uu.ZodDate = "ZodDate", uu.ZodSymbol = "ZodSymbol", uu.ZodUndefined = "ZodUndefined", uu.ZodNull = "ZodNull", uu.ZodAny = "ZodAny", uu.ZodUnknown = "ZodUnknown", uu.ZodNever = "ZodNever", uu.ZodVoid = "ZodVoid", uu.ZodArray = "ZodArray", uu.ZodObject = "ZodObject", uu.ZodUnion = "ZodUnion", uu.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", uu.ZodIntersection = "ZodIntersection", uu.ZodTuple = "ZodTuple", uu.ZodRecord = "ZodRecord", uu.ZodMap = "ZodMap", uu.ZodSet = "ZodSet", uu.ZodFunction = "ZodFunction", uu.ZodLazy = "ZodLazy", uu.ZodLiteral = "ZodLiteral", uu.ZodEnum = "ZodEnum", uu.ZodEffects = "ZodEffects", uu.ZodNativeEnum = "ZodNativeEnum", uu.ZodOptional = "ZodOptional", uu.ZodNullable = "ZodNullable", uu.ZodDefault = "ZodDefault", uu.ZodCatch = "ZodCatch", uu.ZodPromise = "ZodPromise", uu.ZodBranded = "ZodBranded", uu.ZodPipeline = "ZodPipeline", uu.ZodReadonly = "ZodReadonly"
    }(sR || (sR = {}));
    const tR = wu.create,
      lR = hu.create,
      gR = AR.create,
      cR = Pu.create,
      LR = iu.create,
      zR = Yu.create,
      FR = ou.create,
      wR = qu.create,
      ZR = Ou.create,
      hR = vu.create,
      PR = au.create,
      iR = fu.create,
      YR = uR.create,
      oR = RR.create,
      qR = ER.create,
      OR = ER.strictCreate,
      vR = KR.create,
      aR = mR.create,
      fR = NR.create,
      uy = XR.create,
      Ry = VR.create,
      yy = rR.create,
      Ey = BR.create,
      Ky = xR.create,
      Qy = SR.create,
      my = pR.create,
      Jy = WR.create,
      Ny = jR.create,
      Xy = HR.create,
      Vy = dR.create,
      ry = bR.create,
      By = CR.create,
      xy = dR.createWithPreprocess,
      Sy = IR.create,
      py = {
        string: uu => wu.create({
          ...uu,
          coerce: !0
        }),
        number: uu => hu.create({
          ...uu,
          coerce: !0
        }),
        boolean: uu => iu.create({
          ...uu,
          coerce: !0
        }),
        bigint: uu => Pu.create({
          ...uu,
          coerce: !0
        }),
        date: uu => Yu.create({
          ...uu,
          coerce: !0
        })
      },
      Ty = du;
    var Wy = Object.freeze({
        __proto__: null,
        defaultErrorMap: Su,
        setErrorMap: function(uu) {
          pu = uu
        },
        getErrorMap: Tu,
        makeIssue: Wu,
        EMPTY_PATH: [],
        addIssueToContext: ju,
        ParseStatus: Hu,
        INVALID: du,
        DIRTY: bu,
        OK: Cu,
        isAborted: ku,
        isDirty: eu,
        isValid: Au,
        isAsync: Du,
        get util() {
          return Ju
        },
        get objectUtil() {
          return Nu
        },
        ZodParsedType: Vu,
        getParsedType: ru,
        ZodType: nu,
        ZodString: wu,
        ZodNumber: hu,
        ZodBigInt: Pu,
        ZodBoolean: iu,
        ZodDate: Yu,
        ZodSymbol: ou,
        ZodUndefined: qu,
        ZodNull: Ou,
        ZodAny: vu,
        ZodUnknown: au,
        ZodNever: fu,
        ZodVoid: uR,
        ZodArray: RR,
        ZodObject: ER,
        ZodUnion: KR,
        ZodDiscriminatedUnion: mR,
        ZodIntersection: NR,
        ZodTuple: XR,
        ZodRecord: VR,
        ZodMap: rR,
        ZodSet: BR,
        ZodFunction: xR,
        ZodLazy: SR,
        ZodLiteral: pR,
        ZodEnum: WR,
        ZodNativeEnum: jR,
        ZodPromise: HR,
        ZodEffects: dR,
        ZodTransformer: dR,
        ZodOptional: bR,
        ZodNullable: CR,
        ZodDefault: kR,
        ZodCatch: eR,
        ZodNaN: AR,
        BRAND: DR,
        ZodBranded: MR,
        ZodPipeline: IR,
        ZodReadonly: GR,
        custom: UR,
        Schema: nu,
        ZodSchema: nu,
        late: nR,
        get ZodFirstPartyTypeKind() {
          return sR
        },
        coerce: py,
        any: hR,
        array: oR,
        bigint: cR,
        boolean: LR,
        date: zR,
        discriminatedUnion: aR,
        effect: Vy,
        enum: Jy,
        function: Ky,
        instanceof: function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${uu.name}`
          };
          return UR((Ru => Ru instanceof uu), Ru)
        },
        intersection: fR,
        lazy: Qy,
        literal: my,
        map: yy,
        nan: gR,
        nativeEnum: Ny,
        never: iR,
        null: ZR,
        nullable: By,
        number: lR,
        object: qR,
        oboolean: () => LR().optional(),
        onumber: () => lR().optional(),
        optional: ry,
        ostring: () => tR().optional(),
        pipeline: Sy,
        preprocess: xy,
        promise: Xy,
        record: Ry,
        set: Ey,
        strictObject: OR,
        string: tR,
        symbol: FR,
        transformer: Vy,
        tuple: uy,
        undefined: wR,
        union: vR,
        unknown: PR,
        void: YR,
        NEVER: Ty,
        ZodIssueCode: Bu,
        quotelessJson: uu => JSON.stringify(uu, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: xu
      }),
      jy = {
        exports: {}
      };
    ! function(uu) {
      var Ru = function(uu) {
        var yu = 1e7,
          Eu = 9007199254740992,
          Ku = Bu(Eu),
          Qu = "0123456789abcdefghijklmnopqrstuvwxyz",
          mu = "function" === typeof BigInt;

        function Ju(uu, Ru, yu, Eu) {
          return "undefined" === typeof uu ? Ju[0] : "undefined" !== typeof Ru && (10 !== +Ru || yu) ? iu(uu, Ru, yu, Eu) : vu(uu)
        }

        function Nu(uu, Ru) {
          this.value = uu, this.sign = Ru, this.isSmall = !1
        }

        function Xu(uu) {
          this.value = uu, this.sign = uu < 0, this.isSmall = !0
        }

        function Vu(uu) {
          this.value = uu
        }

        function ru(uu) {
          return -Eu < uu && uu < Eu
        }

        function Bu(uu) {
          return uu < 1e7 ? [uu] : uu < 1e14 ? [uu % 1e7, Math.floor(uu / 1e7)] : [uu % 1e7, Math.floor(uu / 1e7) % 1e7, Math.floor(uu / 1e14)]
        }

        function xu(uu) {
          Su(uu);
          var Ru = uu.length;
          if (Ru < 4 && Uu(uu, Ku) < 0) switch (Ru) {
            case 0:
              return 0;
            case 1:
              return uu[0];
            case 2:
              return uu[0] + uu[1] * yu;
            default:
              return uu[0] + (uu[1] + uu[2] * yu) * yu
          }
          return uu
        }

        function Su(uu) {
          for (var Ru = uu.length; 0 === uu[--Ru];);
          uu.length = Ru + 1
        }

        function pu(uu) {
          for (var Ru = new Array(uu), yu = -1; ++yu < uu;) Ru[yu] = 0;
          return Ru
        }

        function Tu(uu) {
          return uu > 0 ? Math.floor(uu) : Math.ceil(uu)
        }

        function Wu(uu, Ru) {
          var Eu, Ku, Qu = uu.length,
            mu = Ru.length,
            Ju = new Array(Qu),
            Nu = 0,
            Xu = yu;
          for (Ku = 0; Ku < mu; Ku++) Nu = (Eu = uu[Ku] + Ru[Ku] + Nu) >= Xu ? 1 : 0, Ju[Ku] = Eu - Nu * Xu;
          for (; Ku < Qu;) Nu = (Eu = uu[Ku] + Nu) === Xu ? 1 : 0, Ju[Ku++] = Eu - Nu * Xu;
          return Nu > 0 && Ju.push(Nu), Ju
        }

        function ju(uu, Ru) {
          return uu.length >= Ru.length ? Wu(uu, Ru) : Wu(Ru, uu)
        }

        function Hu(uu, Ru) {
          var Eu, Ku, Qu = uu.length,
            mu = new Array(Qu),
            Ju = yu;
          for (Ku = 0; Ku < Qu; Ku++) Eu = uu[Ku] - Ju + Ru, Ru = Math.floor(Eu / Ju), mu[Ku] = Eu - Ru * Ju, Ru += 1;
          for (; Ru > 0;) mu[Ku++] = Ru % Ju, Ru = Math.floor(Ru / Ju);
          return mu
        }

        function du(uu, Ru) {
          var Eu, Ku, Qu = uu.length,
            mu = Ru.length,
            Ju = new Array(Qu),
            Nu = 0,
            Xu = yu;
          for (Eu = 0; Eu < mu; Eu++)(Ku = uu[Eu] - Nu - Ru[Eu]) < 0 ? (Ku += Xu, Nu = 1) : Nu = 0, Ju[Eu] = Ku;
          for (Eu = mu; Eu < Qu; Eu++) {
            if (!((Ku = uu[Eu] - Nu) < 0)) {
              Ju[Eu++] = Ku;
              break
            }
            Ku += Xu, Ju[Eu] = Ku
          }
          for (; Eu < Qu; Eu++) Ju[Eu] = uu[Eu];
          return Su(Ju), Ju
        }

        function bu(uu, Ru, Eu) {
          var Ku, Qu, mu = uu.length,
            Ju = new Array(mu),
            Vu = -Ru,
            ru = yu;
          for (Ku = 0; Ku < mu; Ku++) Qu = uu[Ku] + Vu, Vu = Math.floor(Qu / ru), Qu %= ru, Ju[Ku] = Qu < 0 ? Qu + ru : Qu;
          return "number" === typeof(Ju = xu(Ju)) ? (Eu && (Ju = -Ju), new Xu(Ju)) : new Nu(Ju, Eu)
        }

        function Cu(uu, Ru) {
          var Eu, Ku, Qu, mu, Ju = uu.length,
            Nu = Ru.length,
            Xu = pu(Ju + Nu),
            Vu = yu;
          for (Qu = 0; Qu < Ju; ++Qu) {
            mu = uu[Qu];
            for (var ru = 0; ru < Nu; ++ru) Eu = mu * Ru[ru] + Xu[Qu + ru], Ku = Math.floor(Eu / Vu), Xu[Qu + ru] = Eu - Ku * Vu, Xu[Qu + ru + 1] += Ku
          }
          return Su(Xu), Xu
        }

        function ku(uu, Ru) {
          var Eu, Ku, Qu = uu.length,
            mu = new Array(Qu),
            Ju = yu,
            Nu = 0;
          for (Ku = 0; Ku < Qu; Ku++) Eu = uu[Ku] * Ru + Nu, Nu = Math.floor(Eu / Ju), mu[Ku] = Eu - Nu * Ju;
          for (; Nu > 0;) mu[Ku++] = Nu % Ju, Nu = Math.floor(Nu / Ju);
          return mu
        }

        function eu(uu, Ru) {
          for (var yu = []; Ru-- > 0;) yu.push(0);
          return yu.concat(uu)
        }

        function Au(uu, Ru) {
          var yu = Math.max(uu.length, Ru.length);
          if (yu <= 30) return Cu(uu, Ru);
          yu = Math.ceil(yu / 2);
          var Eu = uu.slice(yu),
            Ku = uu.slice(0, yu),
            Qu = Ru.slice(yu),
            mu = Ru.slice(0, yu),
            Ju = Au(Ku, mu),
            Nu = Au(Eu, Qu),
            Xu = Au(ju(Ku, Eu), ju(mu, Qu)),
            Vu = ju(ju(Ju, eu(du(du(Xu, Ju), Nu), yu)), eu(Nu, 2 * yu));
          return Su(Vu), Vu
        }

        function Du(uu, Ru, Eu) {
          return new Nu(uu < yu ? ku(Ru, uu) : Cu(Ru, Bu(uu)), Eu)
        }

        function Mu(uu) {
          var Ru, Eu, Ku, Qu, mu = uu.length,
            Ju = pu(mu + mu),
            Nu = yu;
          for (Ku = 0; Ku < mu; Ku++) {
            Eu = 0 - (Qu = uu[Ku]) * Qu;
            for (var Xu = Ku; Xu < mu; Xu++) Ru = Qu * uu[Xu] * 2 + Ju[Ku + Xu] + Eu, Eu = Math.floor(Ru / Nu), Ju[Ku + Xu] = Ru - Eu * Nu;
            Ju[Ku + mu] = Eu
          }
          return Su(Ju), Ju
        }

        function Iu(uu, Ru) {
          var Eu, Ku, Qu, mu, Ju = uu.length,
            Nu = pu(Ju),
            Xu = yu;
          for (Qu = 0, Eu = Ju - 1; Eu >= 0; --Eu) Qu = (mu = Qu * Xu + uu[Eu]) - (Ku = Tu(mu / Ru)) * Ru, Nu[Eu] = 0 | Ku;
          return [Nu, 0 | Qu]
        }

        function Gu(uu, Ru) {
          var Eu, Ku = vu(Ru);
          if (mu) return [new Vu(uu.value / Ku.value), new Vu(uu.value % Ku.value)];
          var Qu, ru = uu.value,
            Wu = Ku.value;
          if (0 === Wu) throw new Error("Cannot divide by zero");
          if (uu.isSmall) return Ku.isSmall ? [new Xu(Tu(ru / Wu)), new Xu(ru % Wu)] : [Ju[0], uu];
          if (Ku.isSmall) {
            if (1 === Wu) return [uu, Ju[0]];
            if (-1 == Wu) return [uu.tm(), Ju[0]];
            var ju = Math.abs(Wu);
            if (ju < yu) {
              Qu = xu((Eu = Iu(ru, ju))[0]);
              var Hu = Eu[1];
              return uu.sign && (Hu = -Hu), "number" === typeof Qu ? (uu.sign !== Ku.sign && (Qu = -Qu), [new Xu(Qu), new Xu(Hu)]) : [new Nu(Qu, uu.sign !== Ku.sign), new Xu(Hu)]
            }
            Wu = Bu(ju)
          }
          var bu = Uu(ru, Wu);
          if (-1 === bu) return [Ju[0], uu];
          if (0 === bu) return [Ju[uu.sign === Ku.sign ? 1 : -1], Ju[0]];
          Eu = ru.length + Wu.length <= 200 ? function(uu, Ru) {
            var Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu = uu.length,
              ru = Ru.length,
              Bu = yu,
              Su = pu(Ru.length),
              Tu = Ru[ru - 1],
              Wu = Math.ceil(Bu / (2 * Tu)),
              ju = ku(uu, Wu),
              Hu = ku(Ru, Wu);
            for (ju.length <= Vu && ju.push(0), Hu.push(0), Tu = Hu[ru - 1], Ku = Vu - ru; Ku >= 0; Ku--) {
              for (Eu = Bu - 1, ju[Ku + ru] !== Tu && (Eu = Math.floor((ju[Ku + ru] * Bu + ju[Ku + ru - 1]) / Tu)), Qu = 0, mu = 0, Nu = Hu.length, Ju = 0; Ju < Nu; Ju++) Qu += Eu * Hu[Ju], Xu = Math.floor(Qu / Bu), mu += ju[Ku + Ju] - (Qu - Xu * Bu), Qu = Xu, mu < 0 ? (ju[Ku + Ju] = mu + Bu, mu = -1) : (ju[Ku + Ju] = mu, mu = 0);
              for (; 0 !== mu;) {
                for (Eu -= 1, Qu = 0, Ju = 0; Ju < Nu; Ju++)(Qu += ju[Ku + Ju] - Bu + Hu[Ju]) < 0 ? (ju[Ku + Ju] = Qu + Bu, Qu = 0) : (ju[Ku + Ju] = Qu, Qu = 1);
                mu += Qu
              }
              Su[Ku] = Eu
            }
            return ju = Iu(ju, Wu)[0], [xu(Su), xu(ju)]
          }(ru, Wu) : function(uu, Ru) {
            for (var Eu, Ku, Qu, mu, Ju, Nu = uu.length, Xu = Ru.length, Vu = [], ru = [], Bu = yu; Nu;)
              if (ru.unshift(uu[--Nu]), Su(ru), Uu(ru, Ru) < 0) Vu.push(0);
              else {
                Qu = ru[(Ku = ru.length) - 1] * Bu + ru[Ku - 2], mu = Ru[Xu - 1] * Bu + Ru[Xu - 2], Ku > Xu && (Qu = (Qu + 1) * Bu), Eu = Math.ceil(Qu / mu);
                do {
                  if (Uu(Ju = ku(Ru, Eu), ru) <= 0) break;
                  Eu--
                } while (Eu);
                Vu.push(Eu), ru = du(ru, Ju)
              } return Vu.reverse(), [xu(Vu), xu(ru)]
          }(ru, Wu), Qu = Eu[0];
          var Cu = uu.sign !== Ku.sign,
            eu = Eu[1],
            Au = uu.sign;
          return "number" === typeof Qu ? (Cu && (Qu = -Qu), Qu = new Xu(Qu)) : Qu = new Nu(Qu, Cu), "number" === typeof eu ? (Au && (eu = -eu), eu = new Xu(eu)) : eu = new Nu(eu, Au), [Qu, eu]
        }

        function Uu(uu, Ru) {
          if (uu.length !== Ru.length) return uu.length > Ru.length ? 1 : -1;
          for (var yu = uu.length - 1; yu >= 0; yu--)
            if (uu[yu] !== Ru[yu]) return uu[yu] > Ru[yu] ? 1 : -1;
          return 0
        }

        function nu(uu) {
          var Ru = uu.abs();
          return !Ru.isUnit() && (!!(Ru.equals(2) || Ru.equals(3) || Ru.equals(5)) || !(Ru.isEven() || Ru.isDivisibleBy(3) || Ru.isDivisibleBy(5)) && (!!Ru.lesser(49) || void 0))
        }

        function su(uu, yu) {
          for (var Eu, Ku, Qu, mu = uu.prev(), Ju = mu, Nu = 0; Ju.isEven();) Ju = Ju.divide(2), Nu++;
          uu: for (Ku = 0; Ku < yu.length; Ku++)
            if (!uu.lesser(yu[Ku]) && !(Qu = Ru(yu[Ku]).modPow(Ju, uu)).isUnit() && !Qu.equals(mu)) {
              for (Eu = Nu - 1; 0 != Eu; Eu--) {
                if ((Qu = Qu.square().mod(uu)).isUnit()) return !1;
                if (Qu.equals(mu)) continue uu
              }
              return !1
            }
          return !0
        }
        Nu.prototype = Object.create(Ju.prototype), Xu.prototype = Object.create(Ju.prototype), Vu.prototype = Object.create(Ju.prototype), Nu.prototype.add = function(uu) {
          var Ru = vu(uu);
          if (this.sign !== Ru.sign) return this.subtract(Ru.tm());
          var yu = this.value,
            Eu = Ru.value;
          return Ru.isSmall ? new Nu(Hu(yu, Math.abs(Eu)), this.sign) : new Nu(ju(yu, Eu), this.sign)
        }, Nu.prototype.plus = Nu.prototype.add, Xu.prototype.add = function(uu) {
          var Ru = vu(uu),
            yu = this.value;
          if (yu < 0 !== Ru.sign) return this.subtract(Ru.tm());
          var Eu = Ru.value;
          if (Ru.isSmall) {
            if (ru(yu + Eu)) return new Xu(yu + Eu);
            Eu = Bu(Math.abs(Eu))
          }
          return new Nu(Hu(Eu, Math.abs(yu)), yu < 0)
        }, Xu.prototype.plus = Xu.prototype.add, Vu.prototype.add = function(uu) {
          return new Vu(this.value + vu(uu).value)
        }, Vu.prototype.plus = Vu.prototype.add, Nu.prototype.subtract = function(uu) {
          var Ru = vu(uu);
          if (this.sign !== Ru.sign) return this.add(Ru.tm());
          var yu = this.value,
            Eu = Ru.value;
          return Ru.isSmall ? bu(yu, Math.abs(Eu), this.sign) : function(uu, Ru, yu) {
            var Eu;
            return Uu(uu, Ru) >= 0 ? Eu = du(uu, Ru) : (Eu = du(Ru, uu), yu = !yu), "number" === typeof(Eu = xu(Eu)) ? (yu && (Eu = -Eu), new Xu(Eu)) : new Nu(Eu, yu)
          }(yu, Eu, this.sign)
        }, Nu.prototype.minus = Nu.prototype.subtract, Xu.prototype.subtract = function(uu) {
          var Ru = vu(uu),
            yu = this.value;
          if (yu < 0 !== Ru.sign) return this.add(Ru.tm());
          var Eu = Ru.value;
          return Ru.isSmall ? new Xu(yu - Eu) : bu(Eu, Math.abs(yu), yu >= 0)
        }, Xu.prototype.minus = Xu.prototype.subtract, Vu.prototype.subtract = function(uu) {
          return new Vu(this.value - vu(uu).value)
        }, Vu.prototype.minus = Vu.prototype.subtract, Nu.prototype.tm = function() {
          return new Nu(this.value, !this.sign)
        }, Xu.prototype.tm = function() {
          var uu = this.sign,
            Ru = new Xu(-this.value);
          return Ru.sign = !uu, Ru
        }, Vu.prototype.tm = function() {
          return new Vu(-this.value)
        }, Nu.prototype.abs = function() {
          return new Nu(this.value, !1)
        }, Xu.prototype.abs = function() {
          return new Xu(Math.abs(this.value))
        }, Vu.prototype.abs = function() {
          return new Vu(this.value >= 0 ? this.value : -this.value)
        }, Nu.prototype.multiply = function(uu) {
          var Ru, Eu, Ku, Qu = vu(uu),
            mu = this.value,
            Xu = Qu.value,
            Vu = this.sign !== Qu.sign;
          if (Qu.isSmall) {
            if (0 === Xu) return Ju[0];
            if (1 === Xu) return this;
            if (-1 === Xu) return this.tm();
            if ((Ru = Math.abs(Xu)) < yu) return new Nu(ku(mu, Ru), Vu);
            Xu = Bu(Ru)
          }
          return Eu = mu.length, Ku = Xu.length, new Nu(-.012 * Eu - .012 * Ku + 15e-6 * Eu * Ku > 0 ? Au(mu, Xu) : Cu(mu, Xu), Vu)
        }, Nu.prototype.times = Nu.prototype.multiply, Xu.prototype._multiplyBySmall = function(uu) {
          return ru(uu.value * this.value) ? new Xu(uu.value * this.value) : Du(Math.abs(uu.value), Bu(Math.abs(this.value)), this.sign !== uu.sign)
        }, Nu.prototype._multiplyBySmall = function(uu) {
          return 0 === uu.value ? Ju[0] : 1 === uu.value ? this : -1 === uu.value ? this.tm() : Du(Math.abs(uu.value), this.value, this.sign !== uu.sign)
        }, Xu.prototype.multiply = function(uu) {
          return vu(uu)._multiplyBySmall(this)
        }, Xu.prototype.times = Xu.prototype.multiply, Vu.prototype.multiply = function(uu) {
          return new Vu(this.value * vu(uu).value)
        }, Vu.prototype.times = Vu.prototype.multiply, Nu.prototype.square = function() {
          return new Nu(Mu(this.value), !1)
        }, Xu.prototype.square = function() {
          var uu = this.value * this.value;
          return ru(uu) ? new Xu(uu) : new Nu(Mu(Bu(Math.abs(this.value))), !1)
        }, Vu.prototype.square = function(uu) {
          return new Vu(this.value * this.value)
        }, Nu.prototype.divmod = function(uu) {
          var Ru = Gu(this, uu);
          return {
            quotient: Ru[0],
            remainder: Ru[1]
          }
        }, Vu.prototype.divmod = Xu.prototype.divmod = Nu.prototype.divmod, Nu.prototype.divide = function(uu) {
          return Gu(this, uu)[0]
        }, Vu.prototype.over = Vu.prototype.divide = function(uu) {
          return new Vu(this.value / vu(uu).value)
        }, Xu.prototype.over = Xu.prototype.divide = Nu.prototype.over = Nu.prototype.divide, Nu.prototype.mod = function(uu) {
          return Gu(this, uu)[1]
        }, Vu.prototype.mod = Vu.prototype.remainder = function(uu) {
          return new Vu(this.value % vu(uu).value)
        }, Xu.prototype.remainder = Xu.prototype.mod = Nu.prototype.remainder = Nu.prototype.mod, Nu.prototype.pow = function(uu) {
          var Ru, yu, Eu, Ku = vu(uu),
            Qu = this.value,
            mu = Ku.value;
          if (0 === mu) return Ju[1];
          if (0 === Qu) return Ju[0];
          if (1 === Qu) return Ju[1];
          if (-1 === Qu) return Ku.isEven() ? Ju[1] : Ju[-1];
          if (Ku.sign) return Ju[0];
          if (!Ku.isSmall) throw new Error("The exponent " + Ku.toString() + " is too large.");
          if (this.isSmall && ru(Ru = Math.pow(Qu, mu))) return new Xu(Tu(Ru));
          for (yu = this, Eu = Ju[1]; !0 & mu && (Eu = Eu.times(yu), --mu), 0 !== mu;) mu /= 2, yu = yu.square();
          return Eu
        }, Xu.prototype.pow = Nu.prototype.pow, Vu.prototype.pow = function(uu) {
          var Ru = vu(uu),
            yu = this.value,
            Eu = Ru.value,
            Ku = BigInt(0),
            Qu = BigInt(1),
            mu = BigInt(2);
          if (Eu === Ku) return Ju[1];
          if (yu === Ku) return Ju[0];
          if (yu === Qu) return Ju[1];
          if (yu === BigInt(-1)) return Ru.isEven() ? Ju[1] : Ju[-1];
          if (Ru.isNegative()) return new Vu(Ku);
          for (var Nu = this, Xu = Ju[1];
            (Eu & Qu) === Qu && (Xu = Xu.times(Nu), --Eu), Eu !== Ku;) Eu /= mu, Nu = Nu.square();
          return Xu
        }, Nu.prototype.modPow = function(uu, Ru) {
          if (uu = vu(uu), (Ru = vu(Ru)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var yu = Ju[1],
            Eu = this.mod(Ru);
          for (uu.isNegative() && (uu = uu.multiply(Ju[-1]), Eu = Eu.modInv(Ru)); uu.isPositive();) {
            if (Eu.isZero()) return Ju[0];
            uu.isOdd() && (yu = yu.multiply(Eu).mod(Ru)), uu = uu.divide(2), Eu = Eu.square().mod(Ru)
          }
          return yu
        }, Vu.prototype.modPow = Xu.prototype.modPow = Nu.prototype.modPow, Nu.prototype.compareAbs = function(uu) {
          var Ru = vu(uu),
            yu = this.value,
            Eu = Ru.value;
          return Ru.isSmall ? 1 : Uu(yu, Eu)
        }, Xu.prototype.compareAbs = function(uu) {
          var Ru = vu(uu),
            yu = Math.abs(this.value),
            Eu = Ru.value;
          return Ru.isSmall ? yu === (Eu = Math.abs(Eu)) ? 0 : yu > Eu ? 1 : -1 : -1
        }, Vu.prototype.compareAbs = function(uu) {
          var Ru = this.value,
            yu = vu(uu).value;
          return (Ru = Ru >= 0 ? Ru : -Ru) === (yu = yu >= 0 ? yu : -yu) ? 0 : Ru > yu ? 1 : -1
        }, Nu.prototype.compare = function(uu) {
          if (uu === 1 / 0) return -1;
          if (uu === -1 / 0) return 1;
          var Ru = vu(uu),
            yu = this.value,
            Eu = Ru.value;
          return this.sign !== Ru.sign ? Ru.sign ? 1 : -1 : Ru.isSmall ? this.sign ? -1 : 1 : Uu(yu, Eu) * (this.sign ? -1 : 1)
        }, Nu.prototype.compareTo = Nu.prototype.compare, Xu.prototype.compare = function(uu) {
          if (uu === 1 / 0) return -1;
          if (uu === -1 / 0) return 1;
          var Ru = vu(uu),
            yu = this.value,
            Eu = Ru.value;
          return Ru.isSmall ? yu == Eu ? 0 : yu > Eu ? 1 : -1 : yu < 0 !== Ru.sign ? yu < 0 ? -1 : 1 : yu < 0 ? 1 : -1
        }, Xu.prototype.compareTo = Xu.prototype.compare, Vu.prototype.compare = function(uu) {
          if (uu === 1 / 0) return -1;
          if (uu === -1 / 0) return 1;
          var Ru = this.value,
            yu = vu(uu).value;
          return Ru === yu ? 0 : Ru > yu ? 1 : -1
        }, Vu.prototype.compareTo = Vu.prototype.compare, Nu.prototype.equals = function(uu) {
          return 0 === this.compare(uu)
        }, Vu.prototype.eq = Vu.prototype.equals = Xu.prototype.eq = Xu.prototype.equals = Nu.prototype.eq = Nu.prototype.equals, Nu.prototype.notEquals = function(uu) {
          return 0 !== this.compare(uu)
        }, Vu.prototype.neq = Vu.prototype.notEquals = Xu.prototype.neq = Xu.prototype.notEquals = Nu.prototype.neq = Nu.prototype.notEquals, Nu.prototype.greater = function(uu) {
          return this.compare(uu) > 0
        }, Vu.prototype.gt = Vu.prototype.greater = Xu.prototype.gt = Xu.prototype.greater = Nu.prototype.gt = Nu.prototype.greater, Nu.prototype.lesser = function(uu) {
          return this.compare(uu) < 0
        }, Vu.prototype.lt = Vu.prototype.lesser = Xu.prototype.lt = Xu.prototype.lesser = Nu.prototype.lt = Nu.prototype.lesser, Nu.prototype.greaterOrEquals = function(uu) {
          return this.compare(uu) >= 0
        }, Vu.prototype.geq = Vu.prototype.greaterOrEquals = Xu.prototype.geq = Xu.prototype.greaterOrEquals = Nu.prototype.geq = Nu.prototype.greaterOrEquals, Nu.prototype.lesserOrEquals = function(uu) {
          return this.compare(uu) <= 0
        }, Vu.prototype.leq = Vu.prototype.lesserOrEquals = Xu.prototype.leq = Xu.prototype.lesserOrEquals = Nu.prototype.leq = Nu.prototype.lesserOrEquals, Nu.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Xu.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Vu.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Nu.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Xu.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Vu.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Nu.prototype.isPositive = function() {
          return !this.sign
        }, Xu.prototype.isPositive = function() {
          return this.value > 0
        }, Vu.prototype.isPositive = Xu.prototype.isPositive, Nu.prototype.isNegative = function() {
          return this.sign
        }, Xu.prototype.isNegative = function() {
          return this.value < 0
        }, Vu.prototype.isNegative = Xu.prototype.isNegative, Nu.prototype.isUnit = function() {
          return !1
        }, Xu.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Vu.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Nu.prototype.isZero = function() {
          return !1
        }, Xu.prototype.isZero = function() {
          return 0 === this.value
        }, Vu.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Nu.prototype.isDivisibleBy = function(uu) {
          var Ru = vu(uu);
          return !Ru.isZero() && (!!Ru.isUnit() || (0 === Ru.compareAbs(2) ? this.isEven() : this.mod(Ru).isZero()))
        }, Vu.prototype.isDivisibleBy = Xu.prototype.isDivisibleBy = Nu.prototype.isDivisibleBy, Nu.prototype.isPrime = function(yu) {
          var Eu = nu(this);
          if (Eu !== uu) return Eu;
          var Ku = this.abs(),
            Qu = Ku.bitLength();
          if (Qu <= 64) return su(Ku, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var mu = Math.log(2) * Qu.toJSNumber(), Ju = Math.ceil(!0 === yu ? 2 * Math.pow(mu, 2) : mu), Nu = [], Xu = 0; Xu < Ju; Xu++) Nu.push(Ru(Xu + 2));
          return su(Ku, Nu)
        }, Vu.prototype.isPrime = Xu.prototype.isPrime = Nu.prototype.isPrime, Nu.prototype.isProbablePrime = function(yu, Eu) {
          var Ku = nu(this);
          if (Ku !== uu) return Ku;
          for (var Qu = this.abs(), mu = yu === uu ? 5 : yu, Ju = [], Nu = 0; Nu < mu; Nu++) Ju.push(Ru.randBetween(2, Qu.minus(2), Eu));
          return su(Qu, Ju)
        }, Vu.prototype.isProbablePrime = Xu.prototype.isProbablePrime = Nu.prototype.isProbablePrime, Nu.prototype.modInv = function(uu) {
          for (var yu, Eu, Ku, Qu = Ru.zero, mu = Ru.one, Ju = vu(uu), Nu = this.abs(); !Nu.isZero();) yu = Ju.divide(Nu), Eu = Qu, Ku = Ju, Qu = mu, Ju = Nu, mu = Eu.subtract(yu.multiply(mu)), Nu = Ku.subtract(yu.multiply(Nu));
          if (!Ju.isUnit()) throw new Error(this.toString() + " and " + uu.toString() + " are not co-prime");
          return -1 === Qu.compare(0) && (Qu = Qu.add(uu)), this.isNegative() ? Qu.tm() : Qu
        }, Vu.prototype.modInv = Xu.prototype.modInv = Nu.prototype.modInv, Nu.prototype.next = function() {
          var uu = this.value;
          return this.sign ? bu(uu, 1, this.sign) : new Nu(Hu(uu, 1), this.sign)
        }, Xu.prototype.next = function() {
          var uu = this.value;
          return uu + 1 < Eu ? new Xu(uu + 1) : new Nu(Ku, !1)
        }, Vu.prototype.next = function() {
          return new Vu(this.value + BigInt(1))
        }, Nu.prototype.prev = function() {
          var uu = this.value;
          return this.sign ? new Nu(Hu(uu, 1), !0) : bu(uu, 1, this.sign)
        }, Xu.prototype.prev = function() {
          var uu = this.value;
          return uu - 1 > -Eu ? new Xu(uu - 1) : new Nu(Ku, !0)
        }, Vu.prototype.prev = function() {
          return new Vu(this.value - BigInt(1))
        };
        for (var tu = [1]; 2 * tu[tu.length - 1] <= yu;) tu.push(2 * tu[tu.length - 1]);
        var lu = tu.length,
          gu = tu[lu - 1];

        function cu(uu) {
          return Math.abs(uu) <= yu
        }

        function Lu(uu, yu, Eu) {
          yu = vu(yu);
          for (var Ku = uu.isNegative(), Qu = yu.isNegative(), mu = Ku ? uu.not() : uu, Ju = Qu ? yu.not() : yu, Nu = 0, Xu = 0, Vu = null, ru = null, Bu = []; !mu.isZero() || !Ju.isZero();) Nu = (Vu = Gu(mu, gu))[1].toJSNumber(), Ku && (Nu = gu - 1 - Nu), Xu = (ru = Gu(Ju, gu))[1].toJSNumber(), Qu && (Xu = gu - 1 - Xu), mu = Vu[0], Ju = ru[0], Bu.push(Eu(Nu, Xu));
          for (var xu = 0 !== Eu(Ku ? 1 : 0, Qu ? 1 : 0) ? Ru(-1) : Ru(0), Su = Bu.length - 1; Su >= 0; Su -= 1) xu = xu.multiply(gu).add(Ru(Bu[Su]));
          return xu
        }
        Nu.prototype.shiftLeft = function(uu) {
          var Ru = vu(uu).toJSNumber();
          if (!cu(Ru)) throw new Error(String(Ru) + " is too large for shifting.");
          if (Ru < 0) return this.shiftRight(-Ru);
          var yu = this;
          if (yu.isZero()) return yu;
          for (; Ru >= lu;) yu = yu.multiply(gu), Ru -= lu - 1;
          return yu.multiply(tu[Ru])
        }, Vu.prototype.shiftLeft = Xu.prototype.shiftLeft = Nu.prototype.shiftLeft, Nu.prototype.shiftRight = function(uu) {
          var Ru, yu = vu(uu).toJSNumber();
          if (!cu(yu)) throw new Error(String(yu) + " is too large for shifting.");
          if (yu < 0) return this.shiftLeft(-yu);
          for (var Eu = this; yu >= lu;) {
            if (Eu.isZero() || Eu.isNegative() && Eu.isUnit()) return Eu;
            Eu = (Ru = Gu(Eu, gu))[1].isNegative() ? Ru[0].prev() : Ru[0], yu -= lu - 1
          }
          return (Ru = Gu(Eu, tu[yu]))[1].isNegative() ? Ru[0].prev() : Ru[0]
        }, Vu.prototype.shiftRight = Xu.prototype.shiftRight = Nu.prototype.shiftRight, Nu.prototype.not = function() {
          return this.tm().prev()
        }, Vu.prototype.not = Xu.prototype.not = Nu.prototype.not, Nu.prototype.and = function(uu) {
          return Lu(this, uu, (function(uu, Ru) {
            return uu & Ru
          }))
        }, Vu.prototype.and = Xu.prototype.and = Nu.prototype.and, Nu.prototype.or = function(uu) {
          return Lu(this, uu, (function(uu, Ru) {
            return uu | Ru
          }))
        }, Vu.prototype.or = Xu.prototype.or = Nu.prototype.or, Nu.prototype.xor = function(uu) {
          return Lu(this, uu, (function(uu, Ru) {
            return uu ^ Ru
          }))
        }, Vu.prototype.xor = Xu.prototype.xor = Nu.prototype.xor;
        var zu = 1 << 30;

        function Fu(uu) {
          var Ru = uu.value,
            Eu = "number" === typeof Ru ? Ru | zu : "bigint" === typeof Ru ? Ru | BigInt(zu) : Ru[0] + Ru[1] * yu | 1073758208;
          return Eu & -Eu
        }

        function wu(uu, yu) {
          if (yu.compareTo(uu) <= 0) {
            var Eu = wu(uu, yu.square(yu)),
              Ku = Eu.p,
              Qu = Eu.e,
              mu = Ku.multiply(yu);
            return mu.compareTo(uu) <= 0 ? {
              p: mu,
              e: 2 * Qu + 1
            } : {
              p: Ku,
              e: 2 * Qu
            }
          }
          return {
            p: Ru(1),
            e: 0
          }
        }

        function Zu(uu, Ru) {
          return uu = vu(uu), Ru = vu(Ru), uu.greater(Ru) ? uu : Ru
        }

        function hu(uu, Ru) {
          return uu = vu(uu), Ru = vu(Ru), uu.lesser(Ru) ? uu : Ru
        }

        function Pu(uu, Ru) {
          if (uu = vu(uu).abs(), Ru = vu(Ru).abs(), uu.equals(Ru)) return uu;
          if (uu.isZero()) return Ru;
          if (Ru.isZero()) return uu;
          for (var yu, Eu, Ku = Ju[1]; uu.isEven() && Ru.isEven();) yu = hu(Fu(uu), Fu(Ru)), uu = uu.divide(yu), Ru = Ru.divide(yu), Ku = Ku.multiply(yu);
          for (; uu.isEven();) uu = uu.divide(Fu(uu));
          do {
            for (; Ru.isEven();) Ru = Ru.divide(Fu(Ru));
            uu.greater(Ru) && (Eu = Ru, Ru = uu, uu = Eu), Ru = Ru.subtract(uu)
          } while (!Ru.isZero());
          return Ku.isUnit() ? uu : uu.multiply(Ku)
        }
        Nu.prototype.bitLength = function() {
          var uu = this;
          return uu.compareTo(Ru(0)) < 0 && (uu = uu.tm().subtract(Ru(1))), 0 === uu.compareTo(Ru(0)) ? Ru(0) : Ru(wu(uu, Ru(2)).e).add(Ru(1))
        }, Vu.prototype.bitLength = Xu.prototype.bitLength = Nu.prototype.bitLength;
        var iu = function(uu, Ru, yu, Eu) {
          yu = yu || Qu, uu = String(uu), Eu || (uu = uu.toLowerCase(), yu = yu.toLowerCase());
          var Ku, mu = uu.length,
            Ju = Math.abs(Ru),
            Nu = {};
          for (Ku = 0; Ku < yu.length; Ku++) Nu[yu[Ku]] = Ku;
          for (Ku = 0; Ku < mu; Ku++) {
            if ("-" !== (ru = uu[Ku]) && (ru in Nu && Nu[ru] >= Ju)) {
              if ("1" === ru && 1 === Ju) continue;
              throw new Error(ru + " is not a valid digit in base " + Ru + ".")
            }
          }
          Ru = vu(Ru);
          var Xu = [],
            Vu = "-" === uu[0];
          for (Ku = Vu ? 1 : 0; Ku < uu.length; Ku++) {
            var ru;
            if ((ru = uu[Ku]) in Nu) Xu.push(vu(Nu[ru]));
            else {
              if ("<" !== ru) throw new Error(ru + " is not a valid character");
              var Bu = Ku;
              do {
                Ku++
              } while (">" !== uu[Ku] && Ku < uu.length);
              Xu.push(vu(uu.slice(Bu + 1, Ku)))
            }
          }
          return Yu(Xu, Ru, Vu)
        };

        function Yu(uu, Ru, yu) {
          var Eu, Ku = Ju[0],
            Qu = Ju[1];
          for (Eu = uu.length - 1; Eu >= 0; Eu--) Ku = Ku.add(uu[Eu].times(Qu)), Qu = Qu.times(Ru);
          return yu ? Ku.tm() : Ku
        }

        function ou(uu, yu) {
          if ((yu = Ru(yu)).isZero()) {
            if (uu.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (yu.equals(-1)) {
            if (uu.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (uu.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-uu.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Eu = Array.apply(null, Array(uu.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Eu.unshift([1]), {
              value: [].concat.apply([], Eu),
              isNegative: !1
            }
          }
          var Ku = !1;
          if (uu.isNegative() && yu.isPositive() && (Ku = !0, uu = uu.abs()), yu.isUnit()) return uu.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(uu.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Ku
          };
          for (var Qu, mu = [], Ju = uu; Ju.isNegative() || Ju.compareAbs(yu) >= 0;) {
            Qu = Ju.divmod(yu), Ju = Qu.quotient;
            var Nu = Qu.remainder;
            Nu.isNegative() && (Nu = yu.minus(Nu).abs(), Ju = Ju.next()), mu.push(Nu.toJSNumber())
          }
          return mu.push(Ju.toJSNumber()), {
            value: mu.reverse(),
            isNegative: Ku
          }
        }

        function qu(uu, Ru, yu) {
          var Eu = ou(uu, Ru);
          return (Eu.isNegative ? "-" : "") + Eu.value.map((function(uu) {
            return function(uu, Ru) {
              return uu < (Ru = Ru || Qu).length ? Ru[uu] : "<" + uu + ">"
            }(uu, yu)
          })).join("")
        }

        function Ou(uu) {
          if (ru(+uu)) {
            var Ru = +uu;
            if (Ru === Tu(Ru)) return mu ? new Vu(BigInt(Ru)) : new Xu(Ru);
            throw new Error("Invalid integer: " + uu)
          }
          var yu = "-" === uu[0];
          yu && (uu = uu.slice(1));
          var Eu = uu.split(/e/i);
          if (Eu.length > 2) throw new Error("Invalid integer: " + Eu.join("e"));
          if (2 === Eu.length) {
            var Ku = Eu[1];
            if ("+" === Ku[0] && (Ku = Ku.slice(1)), (Ku = +Ku) !== Tu(Ku) || !ru(Ku)) throw new Error("Invalid integer: " + Ku + " is not a valid exponent.");
            var Qu = Eu[0],
              Ju = Qu.indexOf(".");
            if (Ju >= 0 && (Ku -= Qu.length - Ju - 1, Qu = Qu.slice(0, Ju) + Qu.slice(Ju + 1)), Ku < 0) throw new Error("Cannot include negative exponent part for integers");
            uu = Qu += new Array(Ku + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(uu)) throw new Error("Invalid integer: " + uu);
          if (mu) return new Vu(BigInt(yu ? "-" + uu : uu));
          for (var Bu = [], xu = uu.length, pu = xu - 7; xu > 0;) Bu.push(+uu.slice(pu, xu)), (pu -= 7) < 0 && (pu = 0), xu -= 7;
          return Su(Bu), new Nu(Bu, yu)
        }

        function vu(uu) {
          return "number" === typeof uu ? function(uu) {
            if (mu) return new Vu(BigInt(uu));
            if (ru(uu)) {
              if (uu !== Tu(uu)) throw new Error(uu + " is not an integer.");
              return new Xu(uu)
            }
            return Ou(uu.toString())
          }(uu) : "string" === typeof uu ? Ou(uu) : "bigint" === typeof uu ? new Vu(uu) : uu
        }
        Nu.prototype.toArray = function(uu) {
          return ou(this, uu)
        }, Xu.prototype.toArray = function(uu) {
          return ou(this, uu)
        }, Vu.prototype.toArray = function(uu) {
          return ou(this, uu)
        }, Nu.prototype.toString = function(Ru, yu) {
          if (Ru === uu && (Ru = 10), 10 !== Ru) return qu(this, Ru, yu);
          for (var Eu, Ku = this.value, Qu = Ku.length, mu = String(Ku[--Qu]); --Qu >= 0;) Eu = String(Ku[Qu]), mu += "0000000".slice(Eu.length) + Eu;
          return (this.sign ? "-" : "") + mu
        }, Xu.prototype.toString = function(Ru, yu) {
          return Ru === uu && (Ru = 10), 10 != Ru ? qu(this, Ru, yu) : String(this.value)
        }, Vu.prototype.toString = Xu.prototype.toString, Vu.prototype.toJSON = Nu.prototype.toJSON = Xu.prototype.toJSON = function() {
          return this.toString()
        }, Nu.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Nu.prototype.toJSNumber = Nu.prototype.valueOf, Xu.prototype.valueOf = function() {
          return this.value
        }, Xu.prototype.toJSNumber = Xu.prototype.valueOf, Vu.prototype.valueOf = Vu.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var au = 0; au < 1e3; au++) Ju[au] = vu(au), au > 0 && (Ju[-au] = vu(-au));
        return Ju.one = Ju[1], Ju.zero = Ju[0], Ju.minusOne = Ju[-1], Ju.max = Zu, Ju.min = hu, Ju.gcd = Pu, Ju.lcm = function(uu, Ru) {
          return uu = vu(uu).abs(), Ru = vu(Ru).abs(), uu.divide(Pu(uu, Ru)).multiply(Ru)
        }, Ju.isInstance = function(uu) {
          return uu instanceof Nu || uu instanceof Xu || uu instanceof Vu
        }, Ju.randBetween = function(uu, Ru, Eu) {
          uu = vu(uu), Ru = vu(Ru);
          var Ku = Eu || Math.random,
            Qu = hu(uu, Ru),
            mu = Zu(uu, Ru).subtract(Qu).add(1);
          if (mu.isSmall) return Qu.add(Math.floor(Ku() * mu));
          for (var Nu = ou(mu, yu).value, Xu = [], Vu = !0, ru = 0; ru < Nu.length; ru++) {
            var Bu = Vu ? Nu[ru] : yu,
              xu = Tu(Ku() * Bu);
            Xu.push(xu), xu < Bu && (Vu = !1)
          }
          return Qu.add(Ju.Tyu(Xu, yu, !1))
        }, Ju.Tyu = function(uu, Ru, yu) {
          return Yu(uu.map(vu), vu(Ru || 10), yu)
        }, Ju
      }();
      uu.hasOwnProperty("exports") && (uu.exports = Ru)
    }(jy);
    var Hy = Qu(jy.exports);

    function dy(uu, Ru, yu) {
      let Eu = 0;
      for (let Ku = 0; Ku < yu; Ku++) {
        const yu = uu[Ru + Ku];
        if (void 0 === yu) break;
        Eu += yu * 16 ** Ku
      }
      return Eu
    }

    function by(uu) {
      const Ru = [];
      for (let yu = 0; yu < uu.length; yu++) {
        let Eu = Number(uu[yu]);
        for (let uu = 0; Eu || uu < Ru.length; uu++) Eu += 10 * (Ru[uu] || 0), Ru[uu] = Eu % 16, Eu = (Eu - Ru[uu]) / 16
      }
      return Ru
    }
    class Cy {
      static fromString(uu) {
        return new Cy(function(uu) {
          const Ru = by(uu),
            yu = Array(4);
          for (let Eu = 0; Eu < 4; Eu++) yu[3 - Eu] = dy(Ru, 4 * Eu, 4);
          return yu
        }(uu), uu)
      }
      static fromBit(uu) {
        const Ru = Array(4),
          yu = Math.floor(uu / 16);
        for (let Eu = 0; Eu < 4; Eu++) Ru[3 - Eu] = Eu === yu ? 1 << uu - 16 * yu : 0;
        return new Cy(Ru)
      }
      constructor(uu, Ru) {
        this.parts = uu, this.str = Ru
      }
      and(uu) {
        let {
          parts: Ru
        } = uu;
        return new Cy(this.parts.map(((uu, yu) => uu & Ru[yu])))
      }
      or(uu) {
        let {
          parts: Ru
        } = uu;
        return new Cy(this.parts.map(((uu, yu) => uu | Ru[yu])))
      }
      xor(uu) {
        let {
          parts: Ru
        } = uu;
        return new Cy(this.parts.map(((uu, yu) => uu ^ Ru[yu])))
      }
      not() {
        return new Cy(this.parts.map((uu => ~uu)))
      }
      equals(uu) {
        let {
          parts: Ru
        } = uu;
        return this.parts.every(((uu, yu) => uu === Ru[yu]))
      }
      toString() {
        if (null != this.str) return this.str;
        const uu = new Array(16);
        return this.parts.forEach(((Ru, yu) => {
          const Eu = by(Ru.toString());
          for (let Ku = 0; Ku < 4; Ku++) uu[Ku + 4 * yu] = Eu[3 - Ku] || 0
        })), this.str = Hy.Tyu(uu, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const ky = function() {
      try {
        return BigInt, !0
      } catch (uu) {
        return !1
      }
    }();
    ky && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const ey = {},
      Ay = ky ? function(uu) {
        return BigInt(uu)
      } : function(uu) {
        return uu instanceof Cy ? uu : ("number" === typeof uu && (uu = uu.toString()), null != ey[uu] || (ey[uu] = Cy.fromString(uu)), ey[uu])
      },
      Dy = Ay(0),
      My = ky ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dy)
      } : function() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dy;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy).and(uu)
      },
      Iy = ky ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dy)
      } : function() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dy;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy).or(uu)
      },
      Gy = ky ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dy)
      } : function() {
        let uu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dy;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy).xor(uu)
      },
      Uy = ky ? function(uu, Ru) {
        return uu === Ru
      } : function(uu, Ru) {
        return null == uu || null == Ru ? uu == Ru : uu.equals(Ru)
      };
    var ny, sy, ty, ly, gy = {
      combine: function() {
        let uu = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Ru = 1; Ru < arguments.length; Ru++) uu = Iy(uu, Ru < 0 || arguments.length <= Ru ? void 0 : arguments[Ru]);
        return uu
      },
      add: function(uu, Ru) {
        return Ru === Dy ? uu : Iy(uu, Ru)
      },
      remove: function(uu, Ru) {
        return Ru === Dy ? uu : Gy(uu, My(uu, Ru))
      },
      filter: My,
      invert: ky ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dy).not()
      },
      has: function(uu, Ru) {
        return Uy(My(uu, Ru), Ru)
      },
      hasAny: function(uu, Ru) {
        return !Uy(My(uu, Ru), Dy)
      },
      equals: Uy,
      deserialize: Ay,
      getFlag: ky ? function(uu) {
        return BigInt(1) << BigInt(uu)
      } : function(uu) {
        return Cy.fromBit(uu)
      }
    };
    ! function(uu) {
      uu[uu.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", uu[uu.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", uu[uu.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", uu[uu.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", uu[uu.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", uu[uu.RATELIMITED = 4002] = "RATELIMITED", uu[uu.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", uu[uu.INVALID_VERSION = 4004] = "INVALID_VERSION", uu[uu.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(ny || (ny = {})),
    function(uu) {
      uu[uu.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", uu[uu.INVALID_COMMAND = 4002] = "INVALID_COMMAND", uu[uu.INVALID_EVENT = 4004] = "INVALID_EVENT", uu[uu.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(sy || (sy = {})),
    function(uu) {
      uu.LANDSCAPE = "landscape", uu.PORTRAIT = "portrait"
    }(ty || (ty = {})),
    function(uu) {
      uu.MOBILE = "mobile", uu.DESKTOP = "desktop"
    }(ly || (ly = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: gy.getFlag(0),
      ADMINISTRATOR: gy.getFlag(3)
    });

    function cy(uu) {
      return xy((Ru => {
        var yu;
        const [Eu] = null !== (yu = Object.entries(uu).find((uu => {
          let [, yu] = uu;
          return yu === Ru
        }))) && void 0 !== yu ? yu : [];
        return null != Ru && void 0 === Eu ? uu.UNHANDLED : Ru
      }), tR().or(lR()))
    }
    const Ly = Wy.object({
        image_url: Wy.string()
      }),
      zy = Wy.object({
        mediaUrl: Wy.string().max(1024)
      }),
      Fy = Wy.object({
        access_token: Wy.union([Wy.string(), Wy.null()]).optional()
      }),
      wy = Wy.object({
        access_token: Wy.string(),
        user: Wy.object({
          username: Wy.string(),
          discriminator: Wy.string(),
          id: Wy.string(),
          avatar: Wy.union([Wy.string(), Wy.null()]).optional(),
          public_flags: Wy.number(),
          global_name: Wy.union([Wy.string(), Wy.null()]).optional()
        }),
        scopes: Wy.array(function(uu) {
          const Ru = UR().transform((Ru => {
            const yu = uu.safeParse(Ru);
            return yu.success ? yu.data : uu._def.defaultValue()
          }));
          return Ru.overlayType = uu, Ru
        }(Wy.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Wy.literal(-1)).default(-1))),
        expires: Wy.string(),
        application: Wy.object({
          description: Wy.string(),
          icon: Wy.union([Wy.string(), Wy.null()]).optional(),
          id: Wy.string(),
          rpc_origins: Wy.array(Wy.string()).optional(),
          name: Wy.string()
        })
      }),
      Zy = Wy.object({
        participants: Wy.array(Wy.object({
          id: Wy.string(),
          username: Wy.string(),
          global_name: Wy.union([Wy.string(), Wy.null()]).optional(),
          discriminator: Wy.string(),
          avatar: Wy.union([Wy.string(), Wy.null()]).optional(),
          flags: Wy.number(),
          bot: Wy.boolean(),
          avatar_decoration_data: Wy.union([Wy.object({
            asset: Wy.string(),
            skuId: Wy.string().optional()
          }), Wy.null()]).optional(),
          premium_type: Wy.union([Wy.number(), Wy.null()]).optional(),
          nickname: Wy.string().optional()
        }))
      });
    var hy;
    ! function(uu) {
      uu.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", uu.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", uu.AUTHENTICATE = "AUTHENTICATE", uu.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(hy || (hy = {}));
    const Py = Wy.object({}).optional().nullable(),
      iy = Wy.void(),
      Yy = {
        [hy.INITIATE_IMAGE_UPLOAD]: {
          request: iy,
          response: Ly
        },
        [hy.OPEN_SHARE_MOMENT_DIALOG]: {
          request: zy,
          response: Py
        },
        [hy.AUTHENTICATE]: {
          request: Fy,
          response: wy
        },
        [hy.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: iy,
          response: Zy
        }
      },
      oy = "DISPATCH";
    var qy;
    ! function(uu) {
      uu.AUTHORIZE = "AUTHORIZE", uu.AUTHENTICATE = "AUTHENTICATE", uu.GET_GUILDS = "GET_GUILDS", uu.GET_GUILD = "GET_GUILD", uu.GET_CHANNEL = "GET_CHANNEL", uu.GET_CHANNELS = "GET_CHANNELS", uu.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", uu.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", uu.SUBSCRIBE = "SUBSCRIBE", uu.UNSUBSCRIBE = "UNSUBSCRIBE", uu.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", uu.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", uu.SET_ACTIVITY = "SET_ACTIVITY", uu.GET_SKUS = "GET_SKUS", uu.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", uu.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", uu.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", uu.START_PURCHASE = "START_PURCHASE", uu.SET_CONFIG = "SET_CONFIG", uu.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", uu.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", uu.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", uu.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", uu.CAPTURE_LOG = "CAPTURE_LOG", uu.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", uu.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", uu.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", uu.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", uu.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", uu.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", uu.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(qy || (qy = {}));
    const Oy = qR({
        cmd: tR(),
        data: PR(),
        evt: ZR(),
        nonce: tR()
      }).passthrough(),
      vy = (cy(Object.assign(Object.assign({}, wy.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), qR({
        id: tR(),
        username: tR(),
        discriminator: tR(),
        global_name: tR().optional().nullable(),
        avatar: tR().optional().nullable(),
        avatar_decoration_data: qR({
          asset: tR(),
          sku_id: tR().optional()
        }).nullable(),
        bot: LR(),
        flags: lR().optional().nullable(),
        premium_type: lR().optional().nullable()
      })),
      ay = qR({
        user: vy,
        nick: tR().optional().nullable(),
        roles: oR(tR()),
        joined_at: tR(),
        deaf: LR(),
        mute: LR()
      }),
      fy = qR({
        id: tR(),
        name: tR().optional().nullable(),
        roles: oR(tR()).optional().nullable(),
        user: vy.optional().nullable(),
        require_colons: LR().optional().nullable(),
        managed: LR().optional().nullable(),
        animated: LR().optional().nullable(),
        available: LR().optional().nullable()
      }),
      uE = qR({
        mute: LR(),
        deaf: LR(),
        self_mute: LR(),
        self_deaf: LR(),
        suppress: LR()
      }),
      RE = qR({
        mute: LR(),
        nick: tR(),
        user: vy,
        voice_state: uE,
        volume: lR()
      }),
      yE = cy({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      EE = qR({
        name: tR(),
        type: lR(),
        url: tR().optional().nullable(),
        created_at: lR().optional().nullable(),
        timestamps: qR({
          start: lR(),
          end: lR()
        }).partial().optional().nullable(),
        application_id: tR().optional().nullable(),
        details: tR().optional().nullable(),
        state: tR().optional().nullable(),
        emoji: fy.optional().nullable(),
        party: qR({
          id: tR().optional().nullable(),
          size: oR(lR()).optional().nullable()
        }).optional().nullable(),
        assets: qR({
          large_image: tR().nullable(),
          large_text: tR().nullable(),
          small_image: tR().nullable(),
          small_text: tR().nullable()
        }).partial().optional().nullable(),
        secrets: qR({
          join: tR(),
          match: tR()
        }).partial().optional().nullable(),
        instance: LR().optional().nullable(),
        flags: lR().optional().nullable()
      }),
      KE = qR({
        id: tR(),
        type: cy({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: tR(),
        deny: tR()
      }),
      QE = {
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
      mE = qR({
        id: tR(),
        type: cy(QE),
        guild_id: tR().optional().nullable(),
        position: lR().optional().nullable(),
        permission_overwrites: oR(KE).optional().nullable(),
        name: tR().optional().nullable(),
        topic: tR().optional().nullable(),
        nsfw: LR().optional().nullable(),
        last_message_id: tR().optional().nullable(),
        bitrate: lR().optional().nullable(),
        user_limit: lR().optional().nullable(),
        rate_limit_per_user: lR().optional().nullable(),
        recipients: oR(vy).optional().nullable(),
        icon: tR().optional().nullable(),
        owner_id: tR().optional().nullable(),
        application_id: tR().optional().nullable(),
        parent_id: tR().optional().nullable(),
        last_pin_timestamp: tR().optional().nullable()
      }),
      JE = qR({
        user: vy,
        guild_id: tR(),
        status: yE,
        activities: oR(EE),
        client_status: qR({
          desktop: yE,
          mobile: yE,
          web: yE
        }).partial()
      }),
      NE = qR({
        id: tR(),
        name: tR(),
        color: lR(),
        hoist: LR(),
        position: lR(),
        permissions: tR(),
        managed: LR(),
        mentionable: LR()
      }),
      XE = (qR({
        id: tR(),
        name: tR(),
        owner_id: tR(),
        icon: tR().nullable(),
        icon_hash: tR().optional().nullable(),
        splash: tR().nullable(),
        discovery_splash: tR().nullable(),
        owner: LR().optional().nullable(),
        permissions: tR().optional().nullable(),
        region: tR(),
        afk_channel_id: tR().nullable(),
        afk_timeout: lR(),
        widget_enabled: LR().optional().nullable(),
        widget_channel_id: tR().optional().nullable(),
        verification_level: lR(),
        default_message_notifications: lR(),
        explicit_content_filter: lR(),
        roles: oR(NE),
        emojis: oR(fy),
        features: oR(tR()),
        mfa_level: lR(),
        application_id: tR().nullable(),
        system_channel_id: tR().nullable(),
        system_channel_flags: lR(),
        rules_channel_id: tR().nullable(),
        joined_at: tR().optional().nullable(),
        large: LR().optional().nullable(),
        unavailable: LR().optional().nullable(),
        member_count: lR().optional().nullable(),
        voice_states: oR(uE).optional().nullable(),
        members: oR(ay).optional().nullable(),
        channels: oR(mE).optional().nullable(),
        presences: oR(JE).optional().nullable(),
        max_presences: lR().optional().nullable(),
        max_members: lR().optional().nullable(),
        vanity_url_code: tR().nullable(),
        description: tR().nullable(),
        banner: tR().nullable(),
        premium_tier: lR(),
        premium_subscription_count: lR().optional().nullable(),
        preferred_locale: tR(),
        public_updates_channel_id: tR().nullable(),
        max_video_channel_users: lR().optional().nullable(),
        approximate_member_count: lR().optional().nullable(),
        approximate_presence_count: lR().optional().nullable()
      }), qR({
        id: tR(),
        guild_id: tR(),
        type: lR(),
        name: tR()
      })),
      VE = qR({
        id: tR(),
        filename: tR(),
        size: lR(),
        url: tR(),
        proxy_url: tR(),
        height: lR().optional().nullable(),
        width: lR().optional().nullable()
      }),
      rE = qR({
        text: tR(),
        icon_url: tR().optional().nullable(),
        proxy_icon_url: tR().optional().nullable()
      }),
      BE = qR({
        url: tR().optional().nullable(),
        proxy_url: tR().optional().nullable(),
        height: lR().optional().nullable(),
        width: lR().optional().nullable()
      }),
      xE = BE.omit({
        proxy_url: !0
      }),
      SE = qR({
        name: tR().optional().nullable(),
        url: tR().optional().nullable()
      }),
      pE = qR({
        name: tR().optional().nullable(),
        url: tR().optional().nullable(),
        icon_url: tR().optional().nullable(),
        proxy_icon_url: tR().optional().nullable()
      }),
      TE = qR({
        name: tR(),
        value: tR(),
        inline: LR()
      }),
      WE = qR({
        title: tR().optional().nullable(),
        type: tR().optional().nullable(),
        description: tR().optional().nullable(),
        url: tR().optional().nullable(),
        timestamp: tR().optional().nullable(),
        color: lR().optional().nullable(),
        footer: rE.optional().nullable(),
        image: BE.optional().nullable(),
        thumbnail: BE.optional().nullable(),
        video: xE.optional().nullable(),
        provider: SE.optional().nullable(),
        author: pE.optional().nullable(),
        fields: oR(TE).optional().nullable()
      }),
      jE = qR({
        count: lR(),
        me: LR(),
        emoji: fy
      }),
      HE = qR({
        type: lR(),
        party_id: tR().optional().nullable()
      }),
      dE = qR({
        id: tR(),
        cover_image: tR().optional().nullable(),
        description: tR(),
        icon: tR().optional().nullable(),
        name: tR()
      }),
      bE = qR({
        message_id: tR().optional().nullable(),
        channel_id: tR().optional().nullable(),
        guild_id: tR().optional().nullable()
      }),
      CE = qR({
        id: tR(),
        channel_id: tR(),
        guild_id: tR().optional().nullable(),
        author: vy.optional().nullable(),
        member: ay.optional().nullable(),
        content: tR(),
        timestamp: tR(),
        edited_timestamp: tR().optional().nullable(),
        tts: LR(),
        mention_everyone: LR(),
        mentions: oR(vy),
        mention_roles: oR(tR()),
        mention_channels: oR(XE),
        attachments: oR(VE),
        embeds: oR(WE),
        reactions: oR(jE).optional().nullable(),
        nonce: vR([tR(), lR()]).optional().nullable(),
        pinned: LR(),
        webhook_id: tR().optional().nullable(),
        type: lR(),
        activity: HE.optional().nullable(),
        application: dE.optional().nullable(),
        message_reference: bE.optional().nullable(),
        flags: lR().optional().nullable(),
        stickers: oR(PR()).optional().nullable(),
        referenced_message: PR().optional().nullable()
      }),
      kE = qR({
        id: tR(),
        name: tR()
      }),
      eE = qR({
        type: cy({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: lR(),
        name: tR()
      }),
      AE = qR({
        type: cy({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: LR(),
        threshold: lR(),
        shortcut: oR(eE),
        delay: lR()
      }),
      DE = qR({
        device_id: tR(),
        volume: lR(),
        available_devices: oR(kE)
      }),
      ME = (qR({
        type: cy({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: tR(),
        vendor: qR({
          name: tR(),
          url: tR()
        }),
        model: qR({
          name: tR(),
          url: tR()
        }),
        related: oR(tR()),
        echo_cancellation: LR().optional().nullable(),
        noise_suppression: LR().optional().nullable(),
        automatic_gain_control: LR().optional().nullable(),
        hardware_mute: LR().optional().nullable()
      }), qR({
        id: tR(),
        name: tR(),
        type: cy({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: qR({
          amount: lR(),
          currency: tR()
        }),
        application_id: tR(),
        flags: lR(),
        release_date: tR().nullable()
      })),
      IE = qR({
        id: tR(),
        sku_id: tR(),
        application_id: tR(),
        user_id: tR(),
        gift_code_flags: lR(),
        type: cy({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: tR().optional().nullable(),
        branches: oR(tR()).optional().nullable(),
        starts_at: tR().optional().nullable(),
        ends_at: tR().optional().nullable(),
        parent_id: tR().optional().nullable(),
        consumed: LR().optional().nullable(),
        deleted: LR().optional().nullable(),
        gift_code_batch_id: tR().optional().nullable()
      }),
      GE = (cy({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), cy({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      UE = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      nE = (cy(UE), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      sE = (cy(nE), "ERROR");
    var tE;
    ! function(uu) {
      uu.READY = "READY", uu.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", uu.SPEAKING_START = "SPEAKING_START", uu.SPEAKING_STOP = "SPEAKING_STOP", uu.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", uu.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", uu.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", uu.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", uu.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", uu.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(tE || (tE = {}));
    const lE = Oy.extend({
        evt: Ny(tE),
        nonce: tR().nullable(),
        cmd: my(oy),
        data: qR({}).passthrough()
      }),
      gE = Oy.extend({
        evt: my(sE),
        data: qR({
          code: lR(),
          message: tR().optional()
        }).passthrough(),
        cmd: Ny(qy),
        nonce: tR().nullable()
      }),
      cE = lE.extend({
        evt: tR()
      }),
      LE = vR([lE, cE, gE]);
    const zE = {
      [tE.READY]: {
        payload: lE.extend({
          evt: my(tE.READY),
          data: qR({
            v: lR(),
            config: qR({
              cdn_host: tR().optional(),
              api_endpoint: tR(),
              environment: tR()
            }),
            user: qR({
              id: tR(),
              username: tR(),
              discriminator: tR(),
              avatar: tR().optional()
            }).optional()
          })
        })
      },
      [tE.VOICE_STATE_UPDATE]: {
        payload: lE.extend({
          evt: my(tE.VOICE_STATE_UPDATE),
          data: RE
        }),
        subscribeArgs: qR({
          channel_id: tR()
        })
      },
      [tE.SPEAKING_START]: {
        payload: lE.extend({
          evt: my(tE.SPEAKING_START),
          data: qR({
            lobby_id: tR().optional(),
            channel_id: tR().optional(),
            user_id: tR()
          })
        }),
        subscribeArgs: qR({
          lobby_id: tR().nullable().optional(),
          channel_id: tR().nullable().optional()
        })
      },
      [tE.SPEAKING_STOP]: {
        payload: lE.extend({
          evt: my(tE.SPEAKING_STOP),
          data: qR({
            lobby_id: tR().optional(),
            channel_id: tR().optional(),
            user_id: tR()
          })
        }),
        subscribeArgs: qR({
          lobby_id: tR().nullable().optional(),
          channel_id: tR().nullable().optional()
        })
      },
      [tE.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: lE.extend({
          evt: my(tE.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: qR({
            layout_mode: cy(nE)
          })
        })
      },
      [tE.ORIENTATION_UPDATE]: {
        payload: lE.extend({
          evt: my(tE.ORIENTATION_UPDATE),
          data: qR({
            screen_orientation: cy(UE),
            orientation: Ny(ty)
          })
        })
      },
      [tE.CURRENT_USER_UPDATE]: {
        payload: lE.extend({
          evt: my(tE.CURRENT_USER_UPDATE),
          data: vy
        })
      },
      [tE.ENTITLEMENT_CREATE]: {
        payload: lE.extend({
          evt: my(tE.ENTITLEMENT_CREATE),
          data: qR({
            entitlement: IE
          })
        })
      },
      [tE.THERMAL_STATE_UPDATE]: {
        payload: lE.extend({
          evt: my(tE.THERMAL_STATE_UPDATE),
          data: qR({
            thermal_state: GE
          })
        })
      },
      [tE.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: lE.extend({
          evt: my(tE.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: qR({
            participants: Zy.shape.participants
          })
        })
      }
    };
    const FE = qR({}).nullable(),
      wE = qR({
        code: tR()
      }),
      ZE = qR({
        guilds: oR(qR({
          id: tR(),
          name: tR()
        }))
      }),
      hE = qR({
        id: tR(),
        name: tR(),
        icon_url: tR().optional(),
        members: oR(ay)
      }),
      PE = qR({
        id: tR(),
        type: cy(QE),
        guild_id: tR().optional().nullable(),
        name: tR().optional().nullable(),
        topic: tR().optional().nullable(),
        bitrate: lR().optional().nullable(),
        user_limit: lR().optional().nullable(),
        position: lR().optional().nullable(),
        voice_states: oR(RE),
        messages: oR(CE)
      }),
      iE = qR({
        channels: oR(mE)
      }),
      YE = (PE.nullable(), PE.nullable()),
      oE = PE.nullable(),
      qE = (qR({
        input: DE,
        output: DE,
        mode: AE,
        automatic_gain_control: LR(),
        echo_cancellation: LR(),
        noise_suppression: LR(),
        qos: LR(),
        silence_warning: LR(),
        deaf: LR(),
        mute: LR()
      }), qR({
        evt: tR()
      })),
      OE = qR({
        shortcut: eE
      }),
      vE = EE,
      aE = qR({
        skus: oR(ME)
      }),
      fE = qR({
        entitlements: oR(IE)
      }),
      uK = oR(IE).nullable(),
      RK = qR({
        use_interactive_pip: LR()
      }),
      yK = qR({
        locale: tR()
      }),
      EK = qR({
        enabled: LR()
      }),
      KK = qR({
        permissions: cR().or(tR())
      }),
      QK = qR({
        iosKeyboardResizesView: ry(LR())
      }),
      mK = Oy.extend({
        cmd: Ny(qy),
        evt: ZR()
      });

    function JK(uu) {
      let {
        cmd: Ru,
        data: yu
      } = uu;
      switch (Ru) {
        case qy.AUTHORIZE:
          return wE.parse(yu);
        case qy.CAPTURE_SHORTCUT:
          return OE.parse(yu);
        case qy.ENCOURAGE_HW_ACCELERATION:
          return EK.parse(yu);
        case qy.GET_CHANNEL:
          return PE.parse(yu);
        case qy.GET_CHANNELS:
          return iE.parse(yu);
        case qy.GET_CHANNEL_PERMISSIONS:
          return KK.parse(yu);
        case qy.GET_GUILD:
          return hE.parse(yu);
        case qy.GET_GUILDS:
          return ZE.parse(yu);
        case qy.GET_PLATFORM_BEHAVIORS:
          return QK.parse(yu);
        case qy.GET_CHANNEL:
          return PE.parse(yu);
        case qy.SELECT_TEXT_CHANNEL:
          return oE.parse(yu);
        case qy.SELECT_VOICE_CHANNEL:
          return YE.parse(yu);
        case qy.SET_ACTIVITY:
          return vE.parse(yu);
        case qy.GET_SKUS_EMBEDDED:
          return aE.parse(yu);
        case qy.GET_ENTITLEMENTS_EMBEDDED:
          return fE.parse(yu);
        case qy.SET_CONFIG:
          return RK.parse(yu);
        case qy.START_PURCHASE:
          return uK.parse(yu);
        case qy.SUBSCRIBE:
        case qy.UNSUBSCRIBE:
          return qE.parse(yu);
        case qy.USER_SETTINGS_GET_LOCALE:
          return yK.parse(yu);
        case qy.OPEN_EXTERNAL_LINK:
        case qy.SET_ORIENTATION_LOCK_STATE:
        case qy.SET_CERTIFIED_DEVICES:
        case qy.SEND_ANALYTICS_EVENT:
        case qy.OPEN_INVITE_DIALOG:
        case qy.CAPTURE_LOG:
        case qy.GET_SKUS:
        case qy.GET_ENTITLEMENTS:
          return FE.parse(yu);
        case qy.AUTHENTICATE:
        case qy.INITIATE_IMAGE_UPLOAD:
        case qy.OPEN_SHARE_MOMENT_DIALOG:
        case qy.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: uu
          } = Yy[Ru];
          return uu.parse(yu);
        default:
          ! function(uu, Ru) {
            throw Ru
          }(0, new Error(`Unrecognized command ${Ru}`))
      }
    }
    qR({
      frame_id: tR(),
      platform: Ny(ly).optional().nullable()
    }), qR({
      v: my(1),
      encoding: my("json").optional(),
      client_id: tR(),
      frame_id: tR()
    });
    const NK = qR({
        code: lR(),
        message: tR().optional()
      }),
      XK = qR({
        evt: tR().nullable(),
        nonce: tR().nullable(),
        data: PR().nullable(),
        cmd: tR()
      }).passthrough();

    function VK(uu) {
      const Ru = XK.parse(uu);
      return null != Ru.evt ? Ru.evt === sE ? gE.parse(Ru) : function(uu) {
        const Ru = uu.evt;
        if (!(Ru in tE)) throw new Error(`Unrecognized event type ${uu.evt}`);
        return zE[Ru].payload.parse(uu)
      }(LE.parse(Ru)) : function(uu) {
        return Object.assign(Object.assign({}, uu), {
          data: JK(uu)
        })
      }(mK.passthrough().parse(Ru))
    }

    function rK(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Ku = Oy.extend({
        cmd: my(Ru),
        data: yu
      });
      return async yu => {
        const Qu = await uu({
          cmd: Ru,
          args: yu,
          transfer: Eu(yu)
        });
        return Ku.parse(Qu).data
      }
    }

    function BK(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const yu = Yy[uu].response,
        Eu = Oy.extend({
          cmd: my(uu),
          data: yu
        });
      return yu => async Ku => {
        const Qu = await yu({
          cmd: uu,
          args: Ku,
          transfer: Ru(Ku)
        });
        return Eu.parse(Qu).data
      }
    }
    const xK = BK(hy.AUTHENTICATE),
      SK = uu => rK(uu, qy.AUTHORIZE, wE),
      pK = uu => rK(uu, qy.CAPTURE_LOG, FE),
      TK = uu => rK(uu, qy.ENCOURAGE_HW_ACCELERATION, EK),
      WK = uu => rK(uu, qy.GET_ENTITLEMENTS_EMBEDDED, fE),
      jK = uu => rK(uu, qy.GET_SKUS_EMBEDDED, aE),
      HK = uu => rK(uu, qy.GET_CHANNEL_PERMISSIONS, KK),
      dK = uu => rK(uu, qy.GET_PLATFORM_BEHAVIORS, QK),
      bK = uu => rK(uu, qy.OPEN_EXTERNAL_LINK, FE),
      CK = uu => rK(uu, qy.OPEN_INVITE_DIALOG, FE),
      kK = BK(hy.OPEN_SHARE_MOMENT_DIALOG);
    EE.cB({
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
      type: EE.shape.type.optional(),
      instance: EE.shape.instance.optional()
    }).nullable();
    const eK = uu => rK(uu, qy.SET_ACTIVITY, vE),
      AK = uu => rK(uu, qy.SET_CONFIG, RK);
    const DK = uu => ({
        lock_state: uu.lock_state,
        picture_in_picture_lock_state: uu.picture_in_picture_lock_state
      }),
      MK = uu => function(uu) {
        let {
          sendCommand: Ru,
          cmd: yu,
          response: Eu,
          fallbackTransform: Ku,
          transferTransform: Qu = () => {}
        } = uu;
        const mu = Oy.extend({
          cmd: my(yu),
          data: Eu
        });
        return async uu => {
          try {
            const Eu = await Ru({
              cmd: yu,
              args: uu,
              transfer: Qu(uu)
            });
            return mu.parse(Eu).data
          } catch (Eu) {
            if (Eu.code === sy.INVALID_PAYLOAD) {
              const Eu = Ku(uu),
                Ju = await Ru({
                  cmd: yu,
                  args: Eu,
                  transfer: Qu(Eu)
                });
              return mu.parse(Ju).data
            }
            throw Eu
          }
        }
      }({
        sendCommand: uu,
        cmd: qy.SET_ORIENTATION_LOCK_STATE,
        response: FE,
        fallbackTransform: DK
      }),
      IK = uu => rK(uu, qy.START_PURCHASE, uK),
      GK = uu => rK(uu, qy.USER_SETTINGS_GET_LOCALE, yK),
      UK = BK(hy.INITIATE_IMAGE_UPLOAD),
      nK = uu => rK(uu, qy.GET_CHANNEL, PE),
      sK = BK(hy.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var tK = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function lK(uu) {
      return "string" === typeof uu && tK.test(uu)
    }
    for (var gK = [], cK = 0; cK < 256; ++cK) gK.push((cK + 256).toString(16).substr(1));

    function LK(uu) {
      var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yu = (gK[uu[Ru + 0]] + gK[uu[Ru + 1]] + gK[uu[Ru + 2]] + gK[uu[Ru + 3]] + "-" + gK[uu[Ru + 4]] + gK[uu[Ru + 5]] + "-" + gK[uu[Ru + 6]] + gK[uu[Ru + 7]] + "-" + gK[uu[Ru + 8]] + gK[uu[Ru + 9]] + "-" + gK[uu[Ru + 10]] + gK[uu[Ru + 11]] + gK[uu[Ru + 12]] + gK[uu[Ru + 13]] + gK[uu[Ru + 14]] + gK[uu[Ru + 15]]).toLowerCase();
      if (!lK(yu)) throw TypeError("Stringified UUID is invalid");
      return yu
    }
    var zK;

    function FK(uu, Ru, yu) {
      function Eu(uu, Eu, Ku, Qu) {
        if ("string" === typeof uu && (uu = function(uu) {
            uu = unescape(encodeURIComponent(uu));
            for (var Ru = [], yu = 0; yu < uu.length; ++yu) Ru.push(uu.charCodeAt(yu));
            return Ru
          }(uu)), "string" === typeof Eu && (Eu = function(uu) {
            if (!lK(uu)) throw TypeError("Invalid UUID");
            var Ru, yu = new Uint8Array(16);
            return yu[0] = (Ru = parseInt(uu.slice(0, 8), 16)) >>> 24, yu[1] = Ru >>> 16 & 255, yu[2] = Ru >>> 8 & 255, yu[3] = 255 & Ru, yu[4] = (Ru = parseInt(uu.slice(9, 13), 16)) >>> 8, yu[5] = 255 & Ru, yu[6] = (Ru = parseInt(uu.slice(14, 18), 16)) >>> 8, yu[7] = 255 & Ru, yu[8] = (Ru = parseInt(uu.slice(19, 23), 16)) >>> 8, yu[9] = 255 & Ru, yu[10] = (Ru = parseInt(uu.slice(24, 36), 16)) / 1099511627776 & 255, yu[11] = Ru / 4294967296 & 255, yu[12] = Ru >>> 24 & 255, yu[13] = Ru >>> 16 & 255, yu[14] = Ru >>> 8 & 255, yu[15] = 255 & Ru, yu
          }(Eu)), 16 !== Eu.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var mu = new Uint8Array(16 + uu.length);
        if (mu.set(Eu), mu.set(uu, Eu.length), (mu = yu(mu))[6] = 15 & mu[6] | Ru, mu[8] = 63 & mu[8] | 128, Ku) {
          Qu = Qu || 0;
          for (var Ju = 0; Ju < 16; ++Ju) Ku[Qu + Ju] = mu[Ju];
          return Ku
        }
        return LK(mu)
      }
      try {
        Eu.name = uu
      } catch (Ku) {}
      return Eu.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Eu.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Eu
    }

    function wK(uu) {
      return 14 + (uu + 64 >>> 9 << 4) + 1
    }

    function ZK(uu, Ru) {
      var yu = (65535 & uu) + (65535 & Ru);
      return (uu >> 16) + (Ru >> 16) + (yu >> 16) << 16 | 65535 & yu
    }

    function hK(uu, Ru, yu, Eu, Ku, Qu) {
      return ZK((mu = ZK(ZK(Ru, uu), ZK(Eu, Qu))) << (Ju = Ku) | mu >>> 32 - Ju, yu);
      var mu, Ju
    }

    function PK(uu, Ru, yu, Eu, Ku, Qu, mu) {
      return hK(Ru & yu | ~Ru & Eu, uu, Ru, Ku, Qu, mu)
    }

    function iK(uu, Ru, yu, Eu, Ku, Qu, mu) {
      return hK(Ru & Eu | yu & ~Eu, uu, Ru, Ku, Qu, mu)
    }

    function YK(uu, Ru, yu, Eu, Ku, Qu, mu) {
      return hK(Ru ^ yu ^ Eu, uu, Ru, Ku, Qu, mu)
    }

    function oK(uu, Ru, yu, Eu, Ku, Qu, mu) {
      return hK(yu ^ (Ru | ~Eu), uu, Ru, Ku, Qu, mu)
    }
    FK("v3", 48, (function(uu) {
      if ("string" === typeof uu) {
        var Ru = unescape(encodeURIComponent(uu));
        uu = new Uint8Array(Ru.length);
        for (var yu = 0; yu < Ru.length; ++yu) uu[yu] = Ru.charCodeAt(yu)
      }
      return function(uu) {
        for (var Ru = [], yu = 32 * uu.length, Eu = "0123456789abcdef", Ku = 0; Ku < yu; Ku += 8) {
          var Qu = uu[Ku >> 5] >>> Ku % 32 & 255,
            mu = parseInt(Eu.charAt(Qu >>> 4 & 15) + Eu.charAt(15 & Qu), 16);
          Ru.push(mu)
        }
        return Ru
      }(function(uu, Ru) {
        uu[Ru >> 5] |= 128 << Ru % 32, uu[wK(Ru) - 1] = Ru;
        for (var yu = 1732584193, Eu = -271733879, Ku = -1732584194, Qu = 271733878, mu = 0; mu < uu.length; mu += 16) {
          var Ju = yu,
            Nu = Eu,
            Xu = Ku,
            Vu = Qu;
          yu = PK(yu, Eu, Ku, Qu, uu[mu], 7, -680876936), Qu = PK(Qu, yu, Eu, Ku, uu[mu + 1], 12, -389564586), Ku = PK(Ku, Qu, yu, Eu, uu[mu + 2], 17, 606105819), Eu = PK(Eu, Ku, Qu, yu, uu[mu + 3], 22, -1044525330), yu = PK(yu, Eu, Ku, Qu, uu[mu + 4], 7, -176418897), Qu = PK(Qu, yu, Eu, Ku, uu[mu + 5], 12, 1200080426), Ku = PK(Ku, Qu, yu, Eu, uu[mu + 6], 17, -1473231341), Eu = PK(Eu, Ku, Qu, yu, uu[mu + 7], 22, -45705983), yu = PK(yu, Eu, Ku, Qu, uu[mu + 8], 7, 1770035416), Qu = PK(Qu, yu, Eu, Ku, uu[mu + 9], 12, -1958414417), Ku = PK(Ku, Qu, yu, Eu, uu[mu + 10], 17, -42063), Eu = PK(Eu, Ku, Qu, yu, uu[mu + 11], 22, -1990404162), yu = PK(yu, Eu, Ku, Qu, uu[mu + 12], 7, 1804603682), Qu = PK(Qu, yu, Eu, Ku, uu[mu + 13], 12, -40341101), Ku = PK(Ku, Qu, yu, Eu, uu[mu + 14], 17, -1502002290), yu = iK(yu, Eu = PK(Eu, Ku, Qu, yu, uu[mu + 15], 22, 1236535329), Ku, Qu, uu[mu + 1], 5, -165796510), Qu = iK(Qu, yu, Eu, Ku, uu[mu + 6], 9, -1069501632), Ku = iK(Ku, Qu, yu, Eu, uu[mu + 11], 14, 643717713), Eu = iK(Eu, Ku, Qu, yu, uu[mu], 20, -373897302), yu = iK(yu, Eu, Ku, Qu, uu[mu + 5], 5, -701558691), Qu = iK(Qu, yu, Eu, Ku, uu[mu + 10], 9, 38016083), Ku = iK(Ku, Qu, yu, Eu, uu[mu + 15], 14, -660478335), Eu = iK(Eu, Ku, Qu, yu, uu[mu + 4], 20, -405537848), yu = iK(yu, Eu, Ku, Qu, uu[mu + 9], 5, 568446438), Qu = iK(Qu, yu, Eu, Ku, uu[mu + 14], 9, -1019803690), Ku = iK(Ku, Qu, yu, Eu, uu[mu + 3], 14, -187363961), Eu = iK(Eu, Ku, Qu, yu, uu[mu + 8], 20, 1163531501), yu = iK(yu, Eu, Ku, Qu, uu[mu + 13], 5, -1444681467), Qu = iK(Qu, yu, Eu, Ku, uu[mu + 2], 9, -51403784), Ku = iK(Ku, Qu, yu, Eu, uu[mu + 7], 14, 1735328473), yu = YK(yu, Eu = iK(Eu, Ku, Qu, yu, uu[mu + 12], 20, -1926607734), Ku, Qu, uu[mu + 5], 4, -378558), Qu = YK(Qu, yu, Eu, Ku, uu[mu + 8], 11, -2022574463), Ku = YK(Ku, Qu, yu, Eu, uu[mu + 11], 16, 1839030562), Eu = YK(Eu, Ku, Qu, yu, uu[mu + 14], 23, -35309556), yu = YK(yu, Eu, Ku, Qu, uu[mu + 1], 4, -1530992060), Qu = YK(Qu, yu, Eu, Ku, uu[mu + 4], 11, 1272893353), Ku = YK(Ku, Qu, yu, Eu, uu[mu + 7], 16, -155497632), Eu = YK(Eu, Ku, Qu, yu, uu[mu + 10], 23, -1094730640), yu = YK(yu, Eu, Ku, Qu, uu[mu + 13], 4, 681279174), Qu = YK(Qu, yu, Eu, Ku, uu[mu], 11, -358537222), Ku = YK(Ku, Qu, yu, Eu, uu[mu + 3], 16, -722521979), Eu = YK(Eu, Ku, Qu, yu, uu[mu + 6], 23, 76029189), yu = YK(yu, Eu, Ku, Qu, uu[mu + 9], 4, -640364487), Qu = YK(Qu, yu, Eu, Ku, uu[mu + 12], 11, -421815835), Ku = YK(Ku, Qu, yu, Eu, uu[mu + 15], 16, 530742520), yu = oK(yu, Eu = YK(Eu, Ku, Qu, yu, uu[mu + 2], 23, -995338651), Ku, Qu, uu[mu], 6, -198630844), Qu = oK(Qu, yu, Eu, Ku, uu[mu + 7], 10, 1126891415), Ku = oK(Ku, Qu, yu, Eu, uu[mu + 14], 15, -1416354905), Eu = oK(Eu, Ku, Qu, yu, uu[mu + 5], 21, -57434055), yu = oK(yu, Eu, Ku, Qu, uu[mu + 12], 6, 1700485571), Qu = oK(Qu, yu, Eu, Ku, uu[mu + 3], 10, -1894986606), Ku = oK(Ku, Qu, yu, Eu, uu[mu + 10], 15, -1051523), Eu = oK(Eu, Ku, Qu, yu, uu[mu + 1], 21, -2054922799), yu = oK(yu, Eu, Ku, Qu, uu[mu + 8], 6, 1873313359), Qu = oK(Qu, yu, Eu, Ku, uu[mu + 15], 10, -30611744), Ku = oK(Ku, Qu, yu, Eu, uu[mu + 6], 15, -1560198380), Eu = oK(Eu, Ku, Qu, yu, uu[mu + 13], 21, 1309151649), yu = oK(yu, Eu, Ku, Qu, uu[mu + 4], 6, -145523070), Qu = oK(Qu, yu, Eu, Ku, uu[mu + 11], 10, -1120210379), Ku = oK(Ku, Qu, yu, Eu, uu[mu + 2], 15, 718787259), Eu = oK(Eu, Ku, Qu, yu, uu[mu + 9], 21, -343485551), yu = ZK(yu, Ju), Eu = ZK(Eu, Nu), Ku = ZK(Ku, Xu), Qu = ZK(Qu, Vu)
        }
        return [yu, Eu, Ku, Qu]
      }(function(uu) {
        if (0 === uu.length) return [];
        for (var Ru = 8 * uu.length, yu = new Uint32Array(wK(Ru)), Eu = 0; Eu < Ru; Eu += 8) yu[Eu >> 5] |= (255 & uu[Eu / 8]) << Eu % 32;
        return yu
      }(uu), 8 * uu.length))
    }));
    var qK = new Uint8Array(16);

    function OK() {
      if (!zK && !(zK = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return zK(qK)
    }

    function vK(uu, Ru, yu) {
      var Eu = (uu = uu || {}).random || (uu.rng || OK)();
      if (Eu[6] = 15 & Eu[6] | 64, Eu[8] = 63 & Eu[8] | 128, Ru) {
        yu = yu || 0;
        for (var Ku = 0; Ku < 16; ++Ku) Ru[yu + Ku] = Eu[Ku];
        return Ru
      }
      return LK(Eu)
    }

    function aK(uu, Ru, yu, Eu) {
      switch (uu) {
        case 0:
          return Ru & yu ^ ~Ru & Eu;
        case 1:
        case 3:
          return Ru ^ yu ^ Eu;
        case 2:
          return Ru & yu ^ Ru & Eu ^ yu & Eu
      }
    }

    function fK(uu, Ru) {
      return uu << Ru | uu >>> 32 - Ru
    }
    FK("v5", 80, (function(uu) {
      var Ru = [1518500249, 1859775393, 2400959708, 3395469782],
        yu = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof uu) {
        var Eu = unescape(encodeURIComponent(uu));
        uu = [];
        for (var Ku = 0; Ku < Eu.length; ++Ku) uu.push(Eu.charCodeAt(Ku))
      } else Array.isArray(uu) || (uu = Array.prototype.slice.call(uu));
      uu.push(128);
      for (var Qu = uu.length / 4 + 2, mu = Math.ceil(Qu / 16), Ju = new Array(mu), Nu = 0; Nu < mu; ++Nu) {
        for (var Xu = new Uint32Array(16), Vu = 0; Vu < 16; ++Vu) Xu[Vu] = uu[64 * Nu + 4 * Vu] << 24 | uu[64 * Nu + 4 * Vu + 1] << 16 | uu[64 * Nu + 4 * Vu + 2] << 8 | uu[64 * Nu + 4 * Vu + 3];
        Ju[Nu] = Xu
      }
      Ju[mu - 1][14] = 8 * (uu.length - 1) / Math.pow(2, 32), Ju[mu - 1][14] = Math.floor(Ju[mu - 1][14]), Ju[mu - 1][15] = 8 * (uu.length - 1) & 4294967295;
      for (var ru = 0; ru < mu; ++ru) {
        for (var Bu = new Uint32Array(80), xu = 0; xu < 16; ++xu) Bu[xu] = Ju[ru][xu];
        for (var Su = 16; Su < 80; ++Su) Bu[Su] = fK(Bu[Su - 3] ^ Bu[Su - 8] ^ Bu[Su - 14] ^ Bu[Su - 16], 1);
        for (var pu = yu[0], Tu = yu[1], Wu = yu[2], ju = yu[3], Hu = yu[4], du = 0; du < 80; ++du) {
          var bu = Math.floor(du / 20),
            Cu = fK(pu, 5) + aK(bu, Tu, Wu, ju) + Hu + Ru[bu] + Bu[du] >>> 0;
          Hu = ju, ju = Wu, Wu = fK(Tu, 30) >>> 0, Tu = pu, pu = Cu
        }
        yu[0] = yu[0] + pu >>> 0, yu[1] = yu[1] + Tu >>> 0, yu[2] = yu[2] + Wu >>> 0, yu[3] = yu[3] + ju >>> 0, yu[4] = yu[4] + Hu >>> 0
      }
      return [yu[0] >> 24 & 255, yu[0] >> 16 & 255, yu[0] >> 8 & 255, 255 & yu[0], yu[1] >> 24 & 255, yu[1] >> 16 & 255, yu[1] >> 8 & 255, 255 & yu[1], yu[2] >> 24 & 255, yu[2] >> 16 & 255, yu[2] >> 8 & 255, 255 & yu[2], yu[3] >> 24 & 255, yu[3] >> 16 & 255, yu[3] >> 8 & 255, 255 & yu[3], yu[4] >> 24 & 255, yu[4] >> 16 & 255, yu[4] >> 8 & 255, 255 & yu[4]]
    }));
    class uQ extends Error {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Ru), this.code = uu, this.message = Ru, this.name = "Discord SDK Error"
      }
    }
    const RQ = ["log", "warn", "debug", "info", "error"];
    var yQ;
    ! function(uu) {
      uu[uu.HANDSHAKE = 0] = "HANDSHAKE", uu[uu.FRAME = 1] = "FRAME", uu[uu.CLOSE = 2] = "CLOSE", uu[uu.HELLO = 3] = "HELLO"
    }(yQ || (yQ = {}));
    const EQ = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class KQ {
      getTransfer(uu) {
        var Ru;
        switch (uu.cmd) {
          case qy.SUBSCRIBE:
          case qy.UNSUBSCRIBE:
            return;
          default:
            return null !== (Ru = uu.transfer) && void 0 !== Ru ? Ru : void 0
        }
      }
      constructor(uu, Ru) {
        var yu;
        if (this.eventBus = new Xu, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = uu => {
            var Ru;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const yu = vK();
            null === (Ru = this.source) || void 0 === Ru || Ru.postMessage([yQ.FRAME, Object.assign(Object.assign({}, uu), {
              nonce: yu
            })], this.sourceOrigin, this.getTransfer(uu));
            return new Promise(((uu, Ru) => {
              this.pendingCommands.set(yu, {
                resolve: uu,
                reject: Ru
              })
            }))
          }, this.commands = (yu = this.sendCommand, {
            authenticate: xK(yu),
            authorize: SK(yu),
            captureLog: pK(yu),
            encourageHardwareAcceleration: TK(yu),
            getChannel: nK(yu),
            getChannelPermissions: HK(yu),
            getEntitlements: WK(yu),
            getPlatformBehaviors: dK(yu),
            getSkus: jK(yu),
            openExternalLink: bK(yu),
            openInviteDialog: CK(yu),
            openShareMomentDialog: kK(yu),
            setActivity: eK(yu),
            setConfig: AK(yu),
            setOrientationLockState: MK(yu),
            startPurchase: IK(yu),
            userSettingsGetLocale: GK(yu),
            initiateImageUpload: UK(yu),
            getInstanceConnectedParticipants: sK(yu)
          }), this.handleMessage = uu => {
            if (!EQ.has(uu.origin)) return;
            const Ru = uu.data;
            if (!Array.isArray(Ru)) return;
            const [yu, Eu] = Ru;
            switch (yu) {
              case yQ.HELLO:
                return;
              case yQ.CLOSE:
                return this.handleClose(Eu);
              case yQ.HANDSHAKE:
                return this.handleHandshake();
              case yQ.FRAME:
                return this.handleFrame(Eu);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = uu, this.configuration = null !== Ru && void 0 !== Ru ? Ru : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = ly.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Eu = new URLSearchParams(this._getSearch()),
          Ku = Eu.get("frame_id");
        if (!Ku) throw new Error("frame_id query param is not defined");
        this.frameId = Ku;
        const Qu = Eu.get("instance_id");
        if (!Qu) throw new Error("instance_id query param is not defined");
        this.instanceId = Qu;
        const mu = Eu.get("platform");
        if (!mu) throw new Error("platform query param is not defined");
        if (mu !== ly.DESKTOP && mu !== ly.MOBILE) throw new Error(`Invalid query param "platform" of "${mu}". Valid values are "${ly.DESKTOP}" or "${ly.MOBILE}"`);
        this.platform = mu, this.guildId = Eu.get("guild_id"), this.channelId = Eu.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var uu;
          return [null !== (uu = window.parent.opener) && void 0 !== uu ? uu : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(uu, Ru) {
        var yu;
        window.removeEventListener("message", this.handleMessage);
        const Eu = vK();
        null === (yu = this.source) || void 0 === yu || yu.postMessage([yQ.CLOSE, {
          code: uu,
          message: Ru,
          nonce: Eu
        }], this.sourceOrigin)
      }
      async subscribe(uu, Ru) {
        for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
        const [Qu] = Eu, mu = this.eventBus.listenerCount(uu), Ju = this.eventBus.on(uu, Ru);
        return Object.values(tE).includes(uu) && uu !== tE.READY && 0 === mu && await this.sendCommand({
          cmd: qy.SUBSCRIBE,
          args: Qu,
          evt: uu
        }), Ju
      }
      async unsubscribe(uu, Ru) {
        for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
        const [Qu] = Eu;
        return uu !== tE.READY && 1 === this.eventBus.listenerCount(uu) && await this.sendCommand({
          cmd: qy.UNSUBSCRIBE,
          evt: uu,
          args: Qu
        }), this.eventBus.off(uu, Ru)
      }
      async ready() {
        this.isReady || await new Promise((uu => {
          this.eventBus.once(tE.READY, uu)
        }))
      }
      handshake() {
        var uu;
        null === (uu = this.source) || void 0 === uu || uu.postMessage([yQ.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(tE.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const uu = (uu, Ru) => {
          this.commands.captureLog({
            level: uu,
            message: Ru
          })
        };
        RQ.forEach((Ru => {
          ! function(uu, Ru, yu) {
            const Eu = uu[Ru],
              Ku = uu;
            Eu && (uu[Ru] = function() {
              const uu = [].slice.call(arguments),
                Qu = "" + uu.join(" ");
              yu(Ru, Qu), Eu.apply(Ku, uu)
            })
          }(console, Ru, uu)
        }))
      }
      handleClose(uu) {
        NK.parse(uu)
      }
      handleHandshake() {}
      handleFrame(uu) {
        var Ru, yu;
        let Eu;
        try {
          Eu = VK(uu)
        } catch (Ku) {
          return console.error("Failed to parse", uu), void console.error(Ku)
        }
        if ("DISPATCH" === Eu.cmd) this.eventBus.emit(Eu.evt, Eu.data);
        else {
          if (Eu.evt === sE) {
            if (null != Eu.nonce) return null === (Ru = this.pendingCommands.get(Eu.nonce)) || void 0 === Ru || Ru.reject(Eu.data), void this.pendingCommands.delete(Eu.nonce);
            this.eventBus.emit("error", new uQ(Eu.data.code, Eu.data.message))
          }
          if (null == Eu.nonce) return void console.error("Missing nonce", uu);
          null === (yu = this.pendingCommands.get(Eu.nonce)) || void 0 === yu || yu.resolve(Eu), this.pendingCommands.delete(Eu.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var QQ, mQ = 1e9,
      JQ = !0,
      NQ = "[DecimalError] ",
      XQ = NQ + "Invalid argument: ",
      VQ = NQ + "Exponent out of range: ",
      rQ = Math.floor,
      BQ = Math.pow,
      xQ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      SQ = 1e7,
      pQ = 9007199254740991,
      TQ = rQ(1286742750677284.5),
      WQ = {};

    function jQ(uu, Ru) {
      var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu = uu.constructor,
        ru = Vu.precision;
      if (!uu.s || !Ru.s) return Ru.s || (Ru = new Vu(uu)), JQ ? IQ(Ru, ru) : Ru;
      if (Nu = uu.d, Xu = Ru.d, mu = uu.e, Ku = Ru.e, Nu = Nu.slice(), Qu = mu - Ku) {
        for (Qu < 0 ? (Eu = Nu, Qu = -Qu, Ju = Xu.length) : (Eu = Xu, Ku = mu, Ju = Nu.length), Qu > (Ju = (mu = Math.ceil(ru / 7)) > Ju ? mu + 1 : Ju + 1) && (Qu = Ju, Eu.length = 1), Eu.reverse(); Qu--;) Eu.push(0);
        Eu.reverse()
      }
      for ((Ju = Nu.length) - (Qu = Xu.length) < 0 && (Qu = Ju, Eu = Xu, Xu = Nu, Nu = Eu), yu = 0; Qu;) yu = (Nu[--Qu] = Nu[Qu] + Xu[Qu] + yu) / SQ | 0, Nu[Qu] %= SQ;
      for (yu && (Nu.unshift(yu), ++Ku), Ju = Nu.length; 0 == Nu[--Ju];) Nu.pop();
      return Ru.d = Nu, Ru.e = Ku, JQ ? IQ(Ru, ru) : Ru
    }

    function HQ(uu, Ru, yu) {
      if (uu !== ~~uu || uu < Ru || uu > yu) throw Error(XQ + uu)
    }

    function dQ(uu) {
      var Ru, yu, Eu, Ku = uu.length - 1,
        Qu = "",
        mu = uu[0];
      if (Ku > 0) {
        for (Qu += mu, Ru = 1; Ru < Ku; Ru++)(yu = 7 - (Eu = uu[Ru] + "").length) && (Qu += AQ(yu)), Qu += Eu;
        (yu = 7 - (Eu = (mu = uu[Ru]) + "").length) && (Qu += AQ(yu))
      } else if (0 === mu) return "0";
      for (; mu % 10 === 0;) mu /= 10;
      return Qu + mu
    }
    WQ.absoluteValue = WQ.abs = function() {
      var uu = new this.constructor(this);
      return uu.s && (uu.s = 1), uu
    }, WQ.comparedTo = WQ.cmp = function(uu) {
      var Ru, yu, Eu, Ku, Qu = this;
      if (uu = new Qu.constructor(uu), Qu.s !== uu.s) return Qu.s || -uu.s;
      if (Qu.e !== uu.e) return Qu.e > uu.e ^ Qu.s < 0 ? 1 : -1;
      for (Ru = 0, yu = (Eu = Qu.d.length) < (Ku = uu.d.length) ? Eu : Ku; Ru < yu; ++Ru)
        if (Qu.d[Ru] !== uu.d[Ru]) return Qu.d[Ru] > uu.d[Ru] ^ Qu.s < 0 ? 1 : -1;
      return Eu === Ku ? 0 : Eu > Ku ^ Qu.s < 0 ? 1 : -1
    }, WQ.decimalPlaces = WQ.dp = function() {
      var uu = this,
        Ru = uu.d.length - 1,
        yu = 7 * (Ru - uu.e);
      if (Ru = uu.d[Ru])
        for (; Ru % 10 == 0; Ru /= 10) yu--;
      return yu < 0 ? 0 : yu
    }, WQ.dividedBy = WQ.div = function(uu) {
      return bQ(this, new this.constructor(uu))
    }, WQ.dividedToIntegerBy = WQ.idiv = function(uu) {
      var Ru = this.constructor;
      return IQ(bQ(this, new Ru(uu), 0, 1), Ru.precision)
    }, WQ.equals = WQ.eq = function(uu) {
      return !this.cmp(uu)
    }, WQ.exponent = function() {
      return kQ(this)
    }, WQ.greaterThan = WQ.gt = function(uu) {
      return this.cmp(uu) > 0
    }, WQ.greaterThanOrEqualTo = WQ.gte = function(uu) {
      return this.cmp(uu) >= 0
    }, WQ.isInteger = WQ.isint = function() {
      return this.e > this.d.length - 2
    }, WQ.isNegative = WQ.isneg = function() {
      return this.s < 0
    }, WQ.isPositive = WQ.ispos = function() {
      return this.s > 0
    }, WQ.isZero = function() {
      return 0 === this.s
    }, WQ.lessThan = WQ.lt = function(uu) {
      return this.cmp(uu) < 0
    }, WQ.lessThanOrEqualTo = WQ.lte = function(uu) {
      return this.cmp(uu) < 1
    }, WQ.logarithm = WQ.log = function(uu) {
      var Ru, yu = this,
        Eu = yu.constructor,
        Ku = Eu.precision,
        Qu = Ku + 5;
      if (void 0 === uu) uu = new Eu(10);
      else if ((uu = new Eu(uu)).s < 1 || uu.eq(QQ)) throw Error(NQ + "NaN");
      if (yu.s < 1) throw Error(NQ + (yu.s ? "NaN" : "-Infinity"));
      return yu.eq(QQ) ? new Eu(0) : (JQ = !1, Ru = bQ(DQ(yu, Qu), DQ(uu, Qu), Qu), JQ = !0, IQ(Ru, Ku))
    }, WQ.minus = WQ.sub = function(uu) {
      var Ru = this;
      return uu = new Ru.constructor(uu), Ru.s == uu.s ? GQ(Ru, uu) : jQ(Ru, (uu.s = -uu.s, uu))
    }, WQ.modulo = WQ.mod = function(uu) {
      var Ru, yu = this,
        Eu = yu.constructor,
        Ku = Eu.precision;
      if (!(uu = new Eu(uu)).s) throw Error(NQ + "NaN");
      return yu.s ? (JQ = !1, Ru = bQ(yu, uu, 0, 1).times(uu), JQ = !0, yu.minus(Ru)) : IQ(new Eu(yu), Ku)
    }, WQ.naturalExponential = WQ.exp = function() {
      return CQ(this)
    }, WQ.naturalLogarithm = WQ.ln = function() {
      return DQ(this)
    }, WQ.negated = WQ.neg = function() {
      var uu = new this.constructor(this);
      return uu.s = -uu.s || 0, uu
    }, WQ.plus = WQ.add = function(uu) {
      var Ru = this;
      return uu = new Ru.constructor(uu), Ru.s == uu.s ? jQ(Ru, uu) : GQ(Ru, (uu.s = -uu.s, uu))
    }, WQ.precision = WQ.sd = function(uu) {
      var Ru, yu, Eu, Ku = this;
      if (void 0 !== uu && uu !== !!uu && 1 !== uu && 0 !== uu) throw Error(XQ + uu);
      if (Ru = kQ(Ku) + 1, yu = 7 * (Eu = Ku.d.length - 1) + 1, Eu = Ku.d[Eu]) {
        for (; Eu % 10 == 0; Eu /= 10) yu--;
        for (Eu = Ku.d[0]; Eu >= 10; Eu /= 10) yu++
      }
      return uu && Ru > yu ? Ru : yu
    }, WQ.squareRoot = WQ.sqrt = function() {
      var uu, Ru, yu, Eu, Ku, Qu, mu, Ju = this,
        Nu = Ju.constructor;
      if (Ju.s < 1) {
        if (!Ju.s) return new Nu(0);
        throw Error(NQ + "NaN")
      }
      for (uu = kQ(Ju), JQ = !1, 0 == (Ku = Math.sqrt(+Ju)) || Ku == 1 / 0 ? (((Ru = dQ(Ju.d)).length + uu) % 2 == 0 && (Ru += "0"), Ku = Math.sqrt(Ru), uu = rQ((uu + 1) / 2) - (uu < 0 || uu % 2), Eu = new Nu(Ru = Ku == 1 / 0 ? "1e" + uu : (Ru = Ku.toExponential()).slice(0, Ru.indexOf("e") + 1) + uu)) : Eu = new Nu(Ku.toString()), Ku = mu = (yu = Nu.precision) + 3;;)
        if (Eu = (Qu = Eu).plus(bQ(Ju, Qu, mu + 2)).times(.5), dQ(Qu.d).slice(0, mu) === (Ru = dQ(Eu.d)).slice(0, mu)) {
          if (Ru = Ru.slice(mu - 3, mu + 1), Ku == mu && "4999" == Ru) {
            if (IQ(Qu, yu + 1, 0), Qu.times(Qu).eq(Ju)) {
              Eu = Qu;
              break
            }
          } else if ("9999" != Ru) break;
          mu += 4
        } return JQ = !0, IQ(Eu, yu)
    }, WQ.times = WQ.mul = function(uu) {
      var Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu = this,
        ru = Vu.constructor,
        Bu = Vu.d,
        xu = (uu = new ru(uu)).d;
      if (!Vu.s || !uu.s) return new ru(0);
      for (uu.s *= Vu.s, yu = Vu.e + uu.e, (Nu = Bu.length) < (Xu = xu.length) && (Qu = Bu, Bu = xu, xu = Qu, mu = Nu, Nu = Xu, Xu = mu), Qu = [], Eu = mu = Nu + Xu; Eu--;) Qu.push(0);
      for (Eu = Xu; --Eu >= 0;) {
        for (Ru = 0, Ku = Nu + Eu; Ku > Eu;) Ju = Qu[Ku] + xu[Eu] * Bu[Ku - Eu - 1] + Ru, Qu[Ku--] = Ju % SQ | 0, Ru = Ju / SQ | 0;
        Qu[Ku] = (Qu[Ku] + Ru) % SQ | 0
      }
      for (; !Qu[--mu];) Qu.pop();
      return Ru ? ++yu : Qu.shift(), uu.d = Qu, uu.e = yu, JQ ? IQ(uu, ru.precision) : uu
    }, WQ.toDecimalPlaces = WQ.todp = function(uu, Ru) {
      var yu = this,
        Eu = yu.constructor;
      return yu = new Eu(yu), void 0 === uu ? yu : (HQ(uu, 0, mQ), void 0 === Ru ? Ru = Eu.rounding : HQ(Ru, 0, 8), IQ(yu, uu + kQ(yu) + 1, Ru))
    }, WQ.toExponential = function(uu, Ru) {
      var yu, Eu = this,
        Ku = Eu.constructor;
      return void 0 === uu ? yu = UQ(Eu, !0) : (HQ(uu, 0, mQ), void 0 === Ru ? Ru = Ku.rounding : HQ(Ru, 0, 8), yu = UQ(Eu = IQ(new Ku(Eu), uu + 1, Ru), !0, uu + 1)), yu
    }, WQ.toFixed = function(uu, Ru) {
      var yu, Eu, Ku = this,
        Qu = Ku.constructor;
      return void 0 === uu ? UQ(Ku) : (HQ(uu, 0, mQ), void 0 === Ru ? Ru = Qu.rounding : HQ(Ru, 0, 8), yu = UQ((Eu = IQ(new Qu(Ku), uu + kQ(Ku) + 1, Ru)).abs(), !1, uu + kQ(Eu) + 1), Ku.isneg() && !Ku.isZero() ? "-" + yu : yu)
    }, WQ.toInteger = WQ.toint = function() {
      var uu = this,
        Ru = uu.constructor;
      return IQ(new Ru(uu), kQ(uu) + 1, Ru.rounding)
    }, WQ.toNumber = function() {
      return +this
    }, WQ.toPower = WQ.pow = function(uu) {
      var Ru, yu, Eu, Ku, Qu, mu, Ju = this,
        Nu = Ju.constructor,
        Xu = +(uu = new Nu(uu));
      if (!uu.s) return new Nu(QQ);
      if (!(Ju = new Nu(Ju)).s) {
        if (uu.s < 1) throw Error(NQ + "Infinity");
        return Ju
      }
      if (Ju.eq(QQ)) return Ju;
      if (Eu = Nu.precision, uu.eq(QQ)) return IQ(Ju, Eu);
      if (mu = (Ru = uu.e) >= (yu = uu.d.length - 1), Qu = Ju.s, mu) {
        if ((yu = Xu < 0 ? -Xu : Xu) <= pQ) {
          for (Ku = new Nu(QQ), Ru = Math.ceil(Eu / 7 + 4), JQ = !1; yu % 2 && nQ((Ku = Ku.times(Ju)).d, Ru), 0 !== (yu = rQ(yu / 2));) nQ((Ju = Ju.times(Ju)).d, Ru);
          return JQ = !0, uu.s < 0 ? new Nu(QQ).div(Ku) : IQ(Ku, Eu)
        }
      } else if (Qu < 0) throw Error(NQ + "NaN");
      return Qu = Qu < 0 && 1 & uu.d[Math.max(Ru, yu)] ? -1 : 1, Ju.s = 1, JQ = !1, Ku = uu.times(DQ(Ju, Eu + 12)), JQ = !0, (Ku = CQ(Ku)).s = Qu, Ku
    }, WQ.toPrecision = function(uu, Ru) {
      var yu, Eu, Ku = this,
        Qu = Ku.constructor;
      return void 0 === uu ? Eu = UQ(Ku, (yu = kQ(Ku)) <= Qu.toExpNeg || yu >= Qu.toExpPos) : (HQ(uu, 1, mQ), void 0 === Ru ? Ru = Qu.rounding : HQ(Ru, 0, 8), Eu = UQ(Ku = IQ(new Qu(Ku), uu, Ru), uu <= (yu = kQ(Ku)) || yu <= Qu.toExpNeg, uu)), Eu
    }, WQ.toSignificantDigits = WQ.tosd = function(uu, Ru) {
      var yu = this.constructor;
      return void 0 === uu ? (uu = yu.precision, Ru = yu.rounding) : (HQ(uu, 1, mQ), void 0 === Ru ? Ru = yu.rounding : HQ(Ru, 0, 8)), IQ(new yu(this), uu, Ru)
    }, WQ.toString = WQ.valueOf = WQ.val = WQ.toJSON = WQ[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var uu = this,
        Ru = kQ(uu),
        yu = uu.constructor;
      return UQ(uu, Ru <= yu.toExpNeg || Ru >= yu.toExpPos)
    };
    var bQ = function() {
      function uu(uu, Ru) {
        var yu, Eu = 0,
          Ku = uu.length;
        for (uu = uu.slice(); Ku--;) yu = uu[Ku] * Ru + Eu, uu[Ku] = yu % SQ | 0, Eu = yu / SQ | 0;
        return Eu && uu.unshift(Eu), uu
      }

      function Ru(uu, Ru, yu, Eu) {
        var Ku, Qu;
        if (yu != Eu) Qu = yu > Eu ? 1 : -1;
        else
          for (Ku = Qu = 0; Ku < yu; Ku++)
            if (uu[Ku] != Ru[Ku]) {
              Qu = uu[Ku] > Ru[Ku] ? 1 : -1;
              break
            } return Qu
      }

      function yu(uu, Ru, yu) {
        for (var Eu = 0; yu--;) uu[yu] -= Eu, Eu = uu[yu] < Ru[yu] ? 1 : 0, uu[yu] = Eu * SQ + uu[yu] - Ru[yu];
        for (; !uu[0] && uu.length > 1;) uu.shift()
      }
      return function(Eu, Ku, Qu, mu) {
        var Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Au = Eu.constructor,
          Du = Eu.s == Ku.s ? 1 : -1,
          Mu = Eu.d,
          Iu = Ku.d;
        if (!Eu.s) return new Au(Eu);
        if (!Ku.s) throw Error(NQ + "Division by zero");
        for (Nu = Eu.e - Ku.e, ku = Iu.length, bu = Mu.length, Su = (xu = new Au(Du)).d = [], Xu = 0; Iu[Xu] == (Mu[Xu] || 0);) ++Xu;
        if (Iu[Xu] > (Mu[Xu] || 0) && --Nu, (ju = null == Qu ? Qu = Au.precision : mu ? Qu + (kQ(Eu) - kQ(Ku)) + 1 : Qu) < 0) return new Au(0);
        if (ju = ju / 7 + 2 | 0, Xu = 0, 1 == ku)
          for (Vu = 0, Iu = Iu[0], ju++;
            (Xu < bu || Vu) && ju--; Xu++) Hu = Vu * SQ + (Mu[Xu] || 0), Su[Xu] = Hu / Iu | 0, Vu = Hu % Iu | 0;
        else {
          for ((Vu = SQ / (Iu[0] + 1) | 0) > 1 && (Iu = uu(Iu, Vu), Mu = uu(Mu, Vu), ku = Iu.length, bu = Mu.length), du = ku, Tu = (pu = Mu.slice(0, ku)).length; Tu < ku;) pu[Tu++] = 0;
          (eu = Iu.slice()).unshift(0), Cu = Iu[0], Iu[1] >= SQ / 2 && ++Cu;
          do {
            Vu = 0, (Ju = Ru(Iu, pu, ku, Tu)) < 0 ? (Wu = pu[0], ku != Tu && (Wu = Wu * SQ + (pu[1] || 0)), (Vu = Wu / Cu | 0) > 1 ? (Vu >= SQ && (Vu = SQ - 1), 1 == (Ju = Ru(ru = uu(Iu, Vu), pu, Bu = ru.length, Tu = pu.length)) && (Vu--, yu(ru, ku < Bu ? eu : Iu, Bu))) : (0 == Vu && (Ju = Vu = 1), ru = Iu.slice()), (Bu = ru.length) < Tu && ru.unshift(0), yu(pu, ru, Tu), -1 == Ju && (Ju = Ru(Iu, pu, ku, Tu = pu.length)) < 1 && (Vu++, yu(pu, ku < Tu ? eu : Iu, Tu)), Tu = pu.length) : 0 === Ju && (Vu++, pu = [0]), Su[Xu++] = Vu, Ju && pu[0] ? pu[Tu++] = Mu[du] || 0 : (pu = [Mu[du]], Tu = 1)
          } while ((du++ < bu || void 0 !== pu[0]) && ju--)
        }
        return Su[0] || Su.shift(), xu.e = Nu, IQ(xu, mu ? Qu + kQ(xu) + 1 : Qu)
      }
    }();

    function CQ(uu, Ru) {
      var yu, Eu, Ku, Qu, mu, Ju = 0,
        Nu = 0,
        Xu = uu.constructor,
        Vu = Xu.precision;
      if (kQ(uu) > 16) throw Error(VQ + kQ(uu));
      if (!uu.s) return new Xu(QQ);
      for (null == Ru ? (JQ = !1, mu = Vu) : mu = Ru, Qu = new Xu(.03125); uu.abs().gte(.1);) uu = uu.times(Qu), Nu += 5;
      for (mu += Math.log(BQ(2, Nu)) / Math.LN10 * 2 + 5 | 0, yu = Eu = Ku = new Xu(QQ), Xu.precision = mu;;) {
        if (Eu = IQ(Eu.times(uu), mu), yu = yu.times(++Ju), dQ((Qu = Ku.plus(bQ(Eu, yu, mu))).d).slice(0, mu) === dQ(Ku.d).slice(0, mu)) {
          for (; Nu--;) Ku = IQ(Ku.times(Ku), mu);
          return Xu.precision = Vu, null == Ru ? (JQ = !0, IQ(Ku, Vu)) : Ku
        }
        Ku = Qu
      }
    }

    function kQ(uu) {
      for (var Ru = 7 * uu.e, yu = uu.d[0]; yu >= 10; yu /= 10) Ru++;
      return Ru
    }

    function eQ(uu, Ru, yu) {
      if (Ru > uu.LN10.sd()) throw JQ = !0, yu && (uu.precision = yu), Error(NQ + "LN10 precision limit exceeded");
      return IQ(new uu(uu.LN10), Ru)
    }

    function AQ(uu) {
      for (var Ru = ""; uu--;) Ru += "0";
      return Ru
    }

    function DQ(uu, Ru) {
      var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru = 1,
        Bu = uu,
        xu = Bu.d,
        Su = Bu.constructor,
        pu = Su.precision;
      if (Bu.s < 1) throw Error(NQ + (Bu.s ? "NaN" : "-Infinity"));
      if (Bu.eq(QQ)) return new Su(0);
      if (null == Ru ? (JQ = !1, Xu = pu) : Xu = Ru, Bu.eq(10)) return null == Ru && (JQ = !0), eQ(Su, Xu);
      if (Xu += 10, Su.precision = Xu, Eu = (yu = dQ(xu)).charAt(0), Qu = kQ(Bu), !(Math.abs(Qu) < 15e14)) return Nu = eQ(Su, Xu + 2, pu).times(Qu + ""), Bu = DQ(new Su(Eu + "." + yu.slice(1)), Xu - 10).plus(Nu), Su.precision = pu, null == Ru ? (JQ = !0, IQ(Bu, pu)) : Bu;
      for (; Eu < 7 && 1 != Eu || 1 == Eu && yu.charAt(1) > 3;) Eu = (yu = dQ((Bu = Bu.times(uu)).d)).charAt(0), ru++;
      for (Qu = kQ(Bu), Eu > 1 ? (Bu = new Su("0." + yu), Qu++) : Bu = new Su(Eu + "." + yu.slice(1)), Ju = mu = Bu = bQ(Bu.minus(QQ), Bu.plus(QQ), Xu), Vu = IQ(Bu.times(Bu), Xu), Ku = 3;;) {
        if (mu = IQ(mu.times(Vu), Xu), dQ((Nu = Ju.plus(bQ(mu, new Su(Ku), Xu))).d).slice(0, Xu) === dQ(Ju.d).slice(0, Xu)) return Ju = Ju.times(2), 0 !== Qu && (Ju = Ju.plus(eQ(Su, Xu + 2, pu).times(Qu + ""))), Ju = bQ(Ju, new Su(ru), Xu), Su.precision = pu, null == Ru ? (JQ = !0, IQ(Ju, pu)) : Ju;
        Ju = Nu, Ku += 2
      }
    }

    function MQ(uu, Ru) {
      var yu, Eu, Ku;
      for ((yu = Ru.indexOf(".")) > -1 && (Ru = Ru.replace(".", "")), (Eu = Ru.search(/e/i)) > 0 ? (yu < 0 && (yu = Eu), yu += +Ru.slice(Eu + 1), Ru = Ru.substring(0, Eu)) : yu < 0 && (yu = Ru.length), Eu = 0; 48 === Ru.charCodeAt(Eu);) ++Eu;
      for (Ku = Ru.length; 48 === Ru.charCodeAt(Ku - 1);) --Ku;
      if (Ru = Ru.slice(Eu, Ku)) {
        if (Ku -= Eu, yu = yu - Eu - 1, uu.e = rQ(yu / 7), uu.d = [], Eu = (yu + 1) % 7, yu < 0 && (Eu += 7), Eu < Ku) {
          for (Eu && uu.d.push(+Ru.slice(0, Eu)), Ku -= 7; Eu < Ku;) uu.d.push(+Ru.slice(Eu, Eu += 7));
          Eu = 7 - (Ru = Ru.slice(Eu)).length
        } else Eu -= Ku;
        for (; Eu--;) Ru += "0";
        if (uu.d.push(+Ru), JQ && (uu.e > TQ || uu.e < -TQ)) throw Error(VQ + yu)
      } else uu.s = 0, uu.e = 0, uu.d = [0];
      return uu
    }

    function IQ(uu, Ru, yu) {
      var Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru = uu.d;
      for (mu = 1, Qu = ru[0]; Qu >= 10; Qu /= 10) mu++;
      if ((Eu = Ru - mu) < 0) Eu += 7, Ku = Ru, Xu = ru[Vu = 0];
      else {
        if ((Vu = Math.ceil((Eu + 1) / 7)) >= (Qu = ru.length)) return uu;
        for (Xu = Qu = ru[Vu], mu = 1; Qu >= 10; Qu /= 10) mu++;
        Ku = (Eu %= 7) - 7 + mu
      }
      if (void 0 !== yu && (Ju = Xu / (Qu = BQ(10, mu - Ku - 1)) % 10 | 0, Nu = Ru < 0 || void 0 !== ru[Vu + 1] || Xu % Qu, Nu = yu < 4 ? (Ju || Nu) && (0 == yu || yu == (uu.s < 0 ? 3 : 2)) : Ju > 5 || 5 == Ju && (4 == yu || Nu || 6 == yu && (Eu > 0 ? Ku > 0 ? Xu / BQ(10, mu - Ku) : 0 : ru[Vu - 1]) % 10 & 1 || yu == (uu.s < 0 ? 8 : 7))), Ru < 1 || !ru[0]) return Nu ? (Qu = kQ(uu), ru.length = 1, Ru = Ru - Qu - 1, ru[0] = BQ(10, (7 - Ru % 7) % 7), uu.e = rQ(-Ru / 7) || 0) : (ru.length = 1, ru[0] = uu.e = uu.s = 0), uu;
      if (0 == Eu ? (ru.length = Vu, Qu = 1, Vu--) : (ru.length = Vu + 1, Qu = BQ(10, 7 - Eu), ru[Vu] = Ku > 0 ? (Xu / BQ(10, mu - Ku) % BQ(10, Ku) | 0) * Qu : 0), Nu)
        for (;;) {
          if (0 == Vu) {
            (ru[0] += Qu) == SQ && (ru[0] = 1, ++uu.e);
            break
          }
          if (ru[Vu] += Qu, ru[Vu] != SQ) break;
          ru[Vu--] = 0, Qu = 1
        }
      for (Eu = ru.length; 0 === ru[--Eu];) ru.pop();
      if (JQ && (uu.e > TQ || uu.e < -TQ)) throw Error(VQ + kQ(uu));
      return uu
    }

    function GQ(uu, Ru) {
      var yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu = uu.constructor,
        xu = Bu.precision;
      if (!uu.s || !Ru.s) return Ru.s ? Ru.s = -Ru.s : Ru = new Bu(uu), JQ ? IQ(Ru, xu) : Ru;
      if (Nu = uu.d, ru = Ru.d, Eu = Ru.e, Xu = uu.e, Nu = Nu.slice(), mu = Xu - Eu) {
        for ((Vu = mu < 0) ? (yu = Nu, mu = -mu, Ju = ru.length) : (yu = ru, Eu = Xu, Ju = Nu.length), mu > (Ku = Math.max(Math.ceil(xu / 7), Ju) + 2) && (mu = Ku, yu.length = 1), yu.reverse(), Ku = mu; Ku--;) yu.push(0);
        yu.reverse()
      } else {
        for ((Vu = (Ku = Nu.length) < (Ju = ru.length)) && (Ju = Ku), Ku = 0; Ku < Ju; Ku++)
          if (Nu[Ku] != ru[Ku]) {
            Vu = Nu[Ku] < ru[Ku];
            break
          } mu = 0
      }
      for (Vu && (yu = Nu, Nu = ru, ru = yu, Ru.s = -Ru.s), Ju = Nu.length, Ku = ru.length - Ju; Ku > 0; --Ku) Nu[Ju++] = 0;
      for (Ku = ru.length; Ku > mu;) {
        if (Nu[--Ku] < ru[Ku]) {
          for (Qu = Ku; Qu && 0 === Nu[--Qu];) Nu[Qu] = SQ - 1;
          --Nu[Qu], Nu[Ku] += SQ
        }
        Nu[Ku] -= ru[Ku]
      }
      for (; 0 === Nu[--Ju];) Nu.pop();
      for (; 0 === Nu[0]; Nu.shift()) --Eu;
      return Nu[0] ? (Ru.d = Nu, Ru.e = Eu, JQ ? IQ(Ru, xu) : Ru) : new Bu(0)
    }

    function UQ(uu, Ru, yu) {
      var Eu, Ku = kQ(uu),
        Qu = dQ(uu.d),
        mu = Qu.length;
      return Ru ? (yu && (Eu = yu - mu) > 0 ? Qu = Qu.charAt(0) + "." + Qu.slice(1) + AQ(Eu) : mu > 1 && (Qu = Qu.charAt(0) + "." + Qu.slice(1)), Qu = Qu + (Ku < 0 ? "e" : "e+") + Ku) : Ku < 0 ? (Qu = "0." + AQ(-Ku - 1) + Qu, yu && (Eu = yu - mu) > 0 && (Qu += AQ(Eu))) : Ku >= mu ? (Qu += AQ(Ku + 1 - mu), yu && (Eu = yu - Ku - 1) > 0 && (Qu = Qu + "." + AQ(Eu))) : ((Eu = Ku + 1) < mu && (Qu = Qu.slice(0, Eu) + "." + Qu.slice(Eu)), yu && (Eu = yu - mu) > 0 && (Ku + 1 === mu && (Qu += "."), Qu += AQ(Eu))), uu.s < 0 ? "-" + Qu : Qu
    }

    function nQ(uu, Ru) {
      if (uu.length > Ru) return uu.length = Ru, !0
    }

    function sQ(uu) {
      if (!uu || "object" !== typeof uu) throw Error(NQ + "Object expected");
      var Ru, yu, Eu, Ku = ["precision", 1, mQ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Ru = 0; Ru < Ku.length; Ru += 3)
        if (void 0 !== (Eu = uu[yu = Ku[Ru]])) {
          if (!(rQ(Eu) === Eu && Eu >= Ku[Ru + 1] && Eu <= Ku[Ru + 2])) throw Error(XQ + yu + ": " + Eu);
          this[yu] = Eu
        } if (void 0 !== (Eu = uu[yu = "LN10"])) {
        if (Eu != Math.LN10) throw Error(XQ + yu + ": " + Eu);
        this[yu] = new this(Eu)
      }
      return this
    }
    var tQ = function uu(Ru) {
      var yu, Eu, Ku;

      function Qu(uu) {
        var Ru = this;
        if (!(Ru instanceof Qu)) return new Qu(uu);
        if (Ru.constructor = Qu, uu instanceof Qu) return Ru.s = uu.s, Ru.e = uu.e, void(Ru.d = (uu = uu.d) ? uu.slice() : uu);
        if ("number" === typeof uu) {
          if (0 * uu !== 0) throw Error(XQ + uu);
          if (uu > 0) Ru.s = 1;
          else {
            if (!(uu < 0)) return Ru.s = 0, Ru.e = 0, void(Ru.d = [0]);
            uu = -uu, Ru.s = -1
          }
          return uu === ~~uu && uu < 1e7 ? (Ru.e = 0, void(Ru.d = [uu])) : MQ(Ru, uu.toString())
        }
        if ("string" !== typeof uu) throw Error(XQ + uu);
        if (45 === uu.charCodeAt(0) ? (uu = uu.slice(1), Ru.s = -1) : Ru.s = 1, !xQ.test(uu)) throw Error(XQ + uu);
        MQ(Ru, uu)
      }
      if (Qu.prototype = WQ, Qu.ROUND_UP = 0, Qu.ROUND_DOWN = 1, Qu.ROUND_CEIL = 2, Qu.ROUND_FLOOR = 3, Qu.ROUND_HALF_UP = 4, Qu.ROUND_HALF_DOWN = 5, Qu.ROUND_HALF_EVEN = 6, Qu.ROUND_HALF_CEIL = 7, Qu.ROUND_HALF_FLOOR = 8, Qu.clone = uu, Qu.config = Qu.set = sQ, void 0 === Ru && (Ru = {}), Ru)
        for (Ku = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], yu = 0; yu < Ku.length;) Ru.hasOwnProperty(Eu = Ku[yu++]) || (Ru[Eu] = this[Eu]);
      return Qu.config(Ru), Qu
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    QQ = new tQ(1);
    var lQ;
    ! function(uu) {
      uu.AED = "aed", uu.AFN = "afn", uu.ALL = "all", uu.AMD = "amd", uu.ANG = "ang", uu.AOA = "aoa", uu.ARS = "ars", uu.AUD = "aud", uu.AWG = "awg", uu.AZN = "azn", uu.BAM = "bam", uu.BBD = "bbd", uu.BDT = "bdt", uu.BGN = "bgn", uu.BHD = "bhd", uu.BIF = "bif", uu.BMD = "bmd", uu.BND = "bnd", uu.BOB = "bob", uu.BOV = "bov", uu.BRL = "brl", uu.BSD = "bsd", uu.BTN = "btn", uu.BWP = "bwp", uu.BYN = "byn", uu.BYR = "byr", uu.BZD = "bzd", uu.CAD = "cad", uu.CDF = "cdf", uu.CHE = "che", uu.CHF = "chf", uu.CHW = "chw", uu.CLF = "clf", uu.CLP = "clp", uu.CNY = "cny", uu.COP = "cop", uu.COU = "cou", uu.CRC = "crc", uu.CUC = "cuc", uu.CUP = "cup", uu.CVE = "cve", uu.CZK = "czk", uu.DJF = "djf", uu.DKK = "dkk", uu.DOP = "dop", uu.DZD = "dzd", uu.EGP = "egp", uu.ERN = "ern", uu.ETB = "etb", uu.EUR = "eur", uu.FJD = "fjd", uu.FKP = "fkp", uu.GBP = "gbp", uu.GEL = "gel", uu.GHS = "ghs", uu.GIP = "gip", uu.GMD = "gmd", uu.GNF = "gnf", uu.GTQ = "gtq", uu.GYD = "gyd", uu.HKD = "hkd", uu.HNL = "hnl", uu.HRK = "hrk", uu.HTG = "htg", uu.HUF = "huf", uu.IDR = "idr", uu.ILS = "ils", uu.INR = "inr", uu.IQD = "iqd", uu.IRR = "irr", uu.ISK = "isk", uu.JMD = "jmd", uu.JOD = "jod", uu.JPY = "jpy", uu.KES = "kes", uu.KGS = "kgs", uu.KHR = "khr", uu.KMF = "kmf", uu.KPW = "kpw", uu.KRW = "krw", uu.KWD = "kwd", uu.KYD = "kyd", uu.KZT = "kzt", uu.LAK = "lak", uu.LBP = "lbp", uu.LKR = "lkr", uu.LRD = "lrd", uu.LSL = "lsl", uu.LTL = "ltl", uu.LVL = "lvl", uu.LYD = "lyd", uu.MAD = "mad", uu.MDL = "mdl", uu.MGA = "mga", uu.MKD = "mkd", uu.MMK = "mmk", uu.MNT = "mnt", uu.MOP = "mop", uu.MRO = "mro", uu.MUR = "mur", uu.MVR = "mvr", uu.MWK = "mwk", uu.MXN = "mxn", uu.MXV = "mxv", uu.MYR = "myr", uu.MZN = "mzn", uu.NAD = "nad", uu.NGN = "ngn", uu.NIO = "nio", uu.NOK = "nok", uu.NPR = "npr", uu.NZD = "nzd", uu.OMR = "omr", uu.PAB = "pab", uu.PEN = "pen", uu.PGK = "pgk", uu.PHP = "php", uu.PKR = "pkr", uu.PLN = "pln", uu.PYG = "pyg", uu.QAR = "qar", uu.RON = "ron", uu.RSD = "rsd", uu.RUB = "rub", uu.RWF = "rwf", uu.SAR = "sar", uu.SBD = "sbd", uu.SCR = "scr", uu.SDG = "sdg", uu.SEK = "sek", uu.SGD = "sgd", uu.SHP = "shp", uu.SLL = "sll", uu.SOS = "sos", uu.SRD = "srd", uu.SSP = "ssp", uu.STD = "std", uu.SVC = "svc", uu.SYP = "syp", uu.SZL = "szl", uu.THB = "thb", uu.TJS = "tjs", uu.TMT = "tmt", uu.TND = "tnd", uu.TOP = "top", uu.TRY = "try", uu.TTD = "ttd", uu.TWD = "twd", uu.TZS = "tzs", uu.UAH = "uah", uu.UGX = "ugx", uu.USD = "usd", uu.USN = "usn", uu.USS = "uss", uu.UYI = "uyi", uu.UYU = "uyu", uu.UZS = "uzs", uu.VEF = "vef", uu.VND = "vnd", uu.VUV = "vuv", uu.WST = "wst", uu.XAF = "xaf", uu.XAG = "xag", uu.XAU = "xau", uu.XBA = "xba", uu.XBB = "xbb", uu.XBC = "xbc", uu.XBD = "xbd", uu.XCD = "xcd", uu.XDR = "xdr", uu.XFU = "xfu", uu.XOF = "xof", uu.XPD = "xpd", uu.XPF = "xpf", uu.XPT = "xpt", uu.XSU = "xsu", uu.XTS = "xts", uu.XUA = "xua", uu.YER = "yer", uu.ZAR = "zar", uu.ZMW = "zmw", uu.ZWL = "zwl"
    }(lQ || (lQ = {}));
    lQ.AED, lQ.AFN, lQ.ALL, lQ.AMD, lQ.ANG, lQ.AOA, lQ.ARS, lQ.AUD, lQ.AWG, lQ.AZN, lQ.BAM, lQ.BBD, lQ.BDT, lQ.BGN, lQ.BHD, lQ.BIF, lQ.BMD, lQ.BND, lQ.BOB, lQ.BOV, lQ.BRL, lQ.BSD, lQ.BTN, lQ.BWP, lQ.BYR, lQ.BYN, lQ.BZD, lQ.CAD, lQ.CDF, lQ.CHE, lQ.CHF, lQ.CHW, lQ.CLF, lQ.CLP, lQ.CNY, lQ.COP, lQ.COU, lQ.CRC, lQ.CUC, lQ.CUP, lQ.CVE, lQ.CZK, lQ.DJF, lQ.DKK, lQ.DOP, lQ.DZD, lQ.EGP, lQ.ERN, lQ.ETB, lQ.EUR, lQ.FJD, lQ.FKP, lQ.GBP, lQ.GEL, lQ.GHS, lQ.GIP, lQ.GMD, lQ.GNF, lQ.GTQ, lQ.GYD, lQ.HKD, lQ.HNL, lQ.HRK, lQ.HTG, lQ.HUF, lQ.IDR, lQ.ILS, lQ.INR, lQ.IQD, lQ.IRR, lQ.ISK, lQ.JMD, lQ.JOD, lQ.JPY, lQ.KES, lQ.KGS, lQ.KHR, lQ.KMF, lQ.KPW, lQ.KRW, lQ.KWD, lQ.KYD, lQ.KZT, lQ.LAK, lQ.LBP, lQ.LKR, lQ.LRD, lQ.LSL, lQ.LTL, lQ.LVL, lQ.LYD, lQ.MAD, lQ.MDL, lQ.MGA, lQ.MKD, lQ.MMK, lQ.MNT, lQ.MOP, lQ.MRO, lQ.MUR, lQ.MVR, lQ.MWK, lQ.MXN, lQ.MXV, lQ.MYR, lQ.MZN, lQ.NAD, lQ.NGN, lQ.NIO, lQ.NOK, lQ.NPR, lQ.NZD, lQ.OMR, lQ.PAB, lQ.PEN, lQ.PGK, lQ.PHP, lQ.PKR, lQ.PLN, lQ.PYG, lQ.QAR, lQ.RON, lQ.RSD, lQ.RUB, lQ.RWF, lQ.SAR, lQ.SBD, lQ.SCR, lQ.SDG, lQ.SEK, lQ.SGD, lQ.SHP, lQ.SLL, lQ.SOS, lQ.SRD, lQ.SSP, lQ.STD, lQ.SVC, lQ.SYP, lQ.SZL, lQ.THB, lQ.TJS, lQ.TMT, lQ.TND, lQ.TOP, lQ.TRY, lQ.TTD, lQ.TWD, lQ.TZS, lQ.UAH, lQ.UGX, lQ.USD, lQ.USN, lQ.USS, lQ.UYI, lQ.UYU, lQ.UZS, lQ.VEF, lQ.VND, lQ.VUV, lQ.WST, lQ.XAF, lQ.XAG, lQ.XAU, lQ.XBA, lQ.XBB, lQ.XBC, lQ.XBD, lQ.XCD, lQ.XDR, lQ.XFU, lQ.XOF, lQ.XPD, lQ.XPF, lQ.XPT, lQ.XSU, lQ.XTS, lQ.XUA, lQ.YER, lQ.ZAR, lQ.ZMW, lQ.ZWL;
    var gQ = {
      exports: {}
    };
    ! function(uu, Ru) {
      var yu = "__lodash_hash_undefined__",
        Eu = 9007199254740991,
        Qu = "[object Arguments]",
        mu = "[object Array]",
        Ju = "[object Boolean]",
        Nu = "[object Date]",
        Xu = "[object Error]",
        Vu = "[object Function]",
        ru = "[object Map]",
        Bu = "[object Number]",
        xu = "[object Object]",
        Su = "[object Promise]",
        pu = "[object RegExp]",
        Tu = "[object Set]",
        Wu = "[object String]",
        ju = "[object Symbol]",
        Hu = "[object WeakMap]",
        du = "[object ArrayBuffer]",
        bu = "[object DataView]",
        Cu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        ku = /^\w*$/,
        eu = /^\./,
        Au = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Du = /\\(\\)?/g,
        Mu = /^\[object .+?Constructor\]$/,
        Iu = /^(?:0|[1-9]\d*)$/,
        Gu = {};
      Gu["[object Float32Array]"] = Gu["[object Float64Array]"] = Gu["[object Int8Array]"] = Gu["[object Int16Array]"] = Gu["[object Int32Array]"] = Gu["[object Uint8Array]"] = Gu["[object Uint8ClampedArray]"] = Gu["[object Uint16Array]"] = Gu["[object Uint32Array]"] = !0, Gu[Qu] = Gu[mu] = Gu[du] = Gu[Ju] = Gu[bu] = Gu[Nu] = Gu[Xu] = Gu[Vu] = Gu[ru] = Gu[Bu] = Gu[xu] = Gu[pu] = Gu[Tu] = Gu[Wu] = Gu[Hu] = !1;
      var Uu = "object" == typeof Ku && Ku && Ku.Object === Object && Ku,
        nu = "object" == typeof self && self && self.Object === Object && self,
        su = Uu || nu || Function("return this")(),
        tu = Ru && !Ru.nodeType && Ru,
        lu = tu && uu && !uu.nodeType && uu,
        gu = lu && lu.exports === tu && Uu.process,
        cu = function() {
          try {
            return gu && gu.binding("util")
          } catch (uu) {}
        }(),
        Lu = cu && cu.isTypedArray;

      function zu(uu, Ru) {
        for (var yu = -1, Eu = uu ? uu.length : 0; ++yu < Eu && !1 !== Ru(uu[yu], yu, uu););
        return uu
      }

      function Fu(uu, Ru) {
        for (var yu = -1, Eu = uu ? uu.length : 0; ++yu < Eu;)
          if (Ru(uu[yu], yu, uu)) return !0;
        return !1
      }

      function wu(uu) {
        var Ru = !1;
        if (null != uu && "function" != typeof uu.toString) try {
          Ru = !!(uu + "")
        } catch (yu) {}
        return Ru
      }

      function Zu(uu) {
        var Ru = -1,
          yu = Array(uu.size);
        return uu.forEach((function(uu, Eu) {
          yu[++Ru] = [Eu, uu]
        })), yu
      }

      function hu(uu, Ru) {
        return function(yu) {
          return uu(Ru(yu))
        }
      }

      function Pu(uu) {
        var Ru = -1,
          yu = Array(uu.size);
        return uu.forEach((function(uu) {
          yu[++Ru] = uu
        })), yu
      }
      var iu = Array.prototype,
        Yu = Function.prototype,
        ou = Object.prototype,
        qu = su["__core-js_shared__"],
        Ou = function() {
          var uu = /[^.]+$/.exec(qu && qu.keys && qu.keys.IE_PROTO || "");
          return uu ? "Symbol(src)_1." + uu : ""
        }(),
        vu = Yu.toString,
        au = ou.hasOwnProperty,
        fu = ou.toString,
        uR = RegExp("^" + vu.call(au).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        RR = su.Symbol,
        yR = su.Uint8Array,
        ER = hu(Object.getPrototypeOf, Object),
        KR = Object.create,
        QR = ou.propertyIsEnumerable,
        mR = iu.splice,
        JR = hu(Object.keys, Object),
        NR = ZR(su, "DataView"),
        XR = ZR(su, "Map"),
        VR = ZR(su, "Promise"),
        rR = ZR(su, "Set"),
        BR = ZR(su, "WeakMap"),
        xR = ZR(Object, "create"),
        SR = vR(NR),
        pR = vR(XR),
        TR = vR(VR),
        WR = vR(rR),
        jR = vR(BR),
        HR = RR ? RR.prototype : void 0,
        dR = HR ? HR.valueOf : void 0,
        bR = HR ? HR.toString : void 0;

      function CR(uu) {
        var Ru = -1,
          yu = uu ? uu.length : 0;
        for (this.clear(); ++Ru < yu;) {
          var Eu = uu[Ru];
          this.set(Eu[0], Eu[1])
        }
      }

      function kR(uu) {
        var Ru = -1,
          yu = uu ? uu.length : 0;
        for (this.clear(); ++Ru < yu;) {
          var Eu = uu[Ru];
          this.set(Eu[0], Eu[1])
        }
      }

      function eR(uu) {
        var Ru = -1,
          yu = uu ? uu.length : 0;
        for (this.clear(); ++Ru < yu;) {
          var Eu = uu[Ru];
          this.set(Eu[0], Eu[1])
        }
      }

      function AR(uu) {
        var Ru = -1,
          yu = uu ? uu.length : 0;
        for (this.__data__ = new eR; ++Ru < yu;) this.add(uu[Ru])
      }

      function DR(uu) {
        this.__data__ = new kR(uu)
      }

      function MR(uu, Ru) {
        var yu = Ry(uu) || uy(uu) ? function(uu, Ru) {
            for (var yu = -1, Eu = Array(uu); ++yu < uu;) Eu[yu] = Ru(yu);
            return Eu
          }(uu.length, String) : [],
          Eu = yu.length,
          Ku = !!Eu;
        for (var Qu in uu) !Ru && !au.call(uu, Qu) || Ku && ("length" == Qu || PR(Qu, Eu)) || yu.push(Qu);
        return yu
      }

      function IR(uu, Ru) {
        for (var yu = uu.length; yu--;)
          if (fR(uu[yu][0], Ru)) return yu;
        return -1
      }
      CR.prototype.clear = function() {
        this.__data__ = xR ? xR(null) : {}
      }, CR.prototype.delete = function(uu) {
        return this.has(uu) && delete this.__data__[uu]
      }, CR.prototype.get = function(uu) {
        var Ru = this.__data__;
        if (xR) {
          var Eu = Ru[uu];
          return Eu === yu ? void 0 : Eu
        }
        return au.call(Ru, uu) ? Ru[uu] : void 0
      }, CR.prototype.has = function(uu) {
        var Ru = this.__data__;
        return xR ? void 0 !== Ru[uu] : au.call(Ru, uu)
      }, CR.prototype.set = function(uu, Ru) {
        return this.__data__[uu] = xR && void 0 === Ru ? yu : Ru, this
      }, kR.prototype.clear = function() {
        this.__data__ = []
      }, kR.prototype.delete = function(uu) {
        var Ru = this.__data__,
          yu = IR(Ru, uu);
        return !(yu < 0) && (yu == Ru.length - 1 ? Ru.pop() : mR.call(Ru, yu, 1), !0)
      }, kR.prototype.get = function(uu) {
        var Ru = this.__data__,
          yu = IR(Ru, uu);
        return yu < 0 ? void 0 : Ru[yu][1]
      }, kR.prototype.has = function(uu) {
        return IR(this.__data__, uu) > -1
      }, kR.prototype.set = function(uu, Ru) {
        var yu = this.__data__,
          Eu = IR(yu, uu);
        return Eu < 0 ? yu.push([uu, Ru]) : yu[Eu][1] = Ru, this
      }, eR.prototype.clear = function() {
        this.__data__ = {
          hash: new CR,
          map: new(XR || kR),
          string: new CR
        }
      }, eR.prototype.delete = function(uu) {
        return wR(this, uu).delete(uu)
      }, eR.prototype.get = function(uu) {
        return wR(this, uu).get(uu)
      }, eR.prototype.has = function(uu) {
        return wR(this, uu).has(uu)
      }, eR.prototype.set = function(uu, Ru) {
        return wR(this, uu).set(uu, Ru), this
      }, AR.prototype.add = AR.prototype.push = function(uu) {
        return this.__data__.set(uu, yu), this
      }, AR.prototype.has = function(uu) {
        return this.__data__.has(uu)
      }, DR.prototype.clear = function() {
        this.__data__ = new kR
      }, DR.prototype.delete = function(uu) {
        return this.__data__.delete(uu)
      }, DR.prototype.get = function(uu) {
        return this.__data__.get(uu)
      }, DR.prototype.has = function(uu) {
        return this.__data__.has(uu)
      }, DR.prototype.set = function(uu, Ru) {
        var yu = this.__data__;
        if (yu instanceof kR) {
          var Eu = yu.__data__;
          if (!XR || Eu.length < 199) return Eu.push([uu, Ru]), this;
          yu = this.__data__ = new eR(Eu)
        }
        return yu.set(uu, Ru), this
      };
      var GR, UR = function(uu, Ru, yu) {
        for (var Eu = -1, Ku = Object(uu), Qu = yu(uu), mu = Qu.length; mu--;) {
          var Ju = Qu[GR ? mu : ++Eu];
          if (!1 === Ru(Ku[Ju], Ju, Ku)) break
        }
        return uu
      };

      function nR(uu, Ru) {
        return uu && UR(uu, Ru, Vy)
      }

      function sR(uu, Ru) {
        for (var yu = 0, Eu = (Ru = iR(Ru, uu) ? [Ru] : zR(Ru)).length; null != uu && yu < Eu;) uu = uu[OR(Ru[yu++])];
        return yu && yu == Eu ? uu : void 0
      }

      function tR(uu, Ru) {
        return null != uu && Ru in Object(uu)
      }

      function lR(uu, Ru, yu, Eu, Ku) {
        return uu === Ru || (null == uu || null == Ru || !Qy(uu) && !my(Ru) ? uu !== uu && Ru !== Ru : function(uu, Ru, yu, Eu, Ku, Vu) {
          var Su = Ry(uu),
            Hu = Ry(Ru),
            Cu = mu,
            ku = mu;
          Su || (Cu = (Cu = hR(uu)) == Qu ? xu : Cu);
          Hu || (ku = (ku = hR(Ru)) == Qu ? xu : ku);
          var eu = Cu == xu && !wu(uu),
            Au = ku == xu && !wu(Ru),
            Du = Cu == ku;
          if (Du && !eu) return Vu || (Vu = new DR), Su || Xy(uu) ? FR(uu, Ru, yu, Eu, Ku, Vu) : function(uu, Ru, yu, Eu, Ku, Qu, mu) {
            switch (yu) {
              case bu:
                if (uu.byteLength != Ru.byteLength || uu.byteOffset != Ru.byteOffset) return !1;
                uu = uu.buffer, Ru = Ru.buffer;
              case du:
                return !(uu.byteLength != Ru.byteLength || !Eu(new yR(uu), new yR(Ru)));
              case Ju:
              case Nu:
              case Bu:
                return fR(+uu, +Ru);
              case Xu:
                return uu.name == Ru.name && uu.message == Ru.message;
              case pu:
              case Wu:
                return uu == Ru + "";
              case ru:
                var Vu = Zu;
              case Tu:
                var xu = 2 & Qu;
                if (Vu || (Vu = Pu), uu.size != Ru.size && !xu) return !1;
                var Su = mu.get(uu);
                if (Su) return Su == Ru;
                Qu |= 1, mu.set(uu, Ru);
                var Hu = FR(Vu(uu), Vu(Ru), Eu, Ku, Qu, mu);
                return mu.delete(uu), Hu;
              case ju:
                if (dR) return dR.call(uu) == dR.call(Ru)
            }
            return !1
          }(uu, Ru, Cu, yu, Eu, Ku, Vu);
          if (!(2 & Ku)) {
            var Mu = eu && au.call(uu, "__wrapped__"),
              Iu = Au && au.call(Ru, "__wrapped__");
            if (Mu || Iu) {
              var Gu = Mu ? uu.value() : uu,
                Uu = Iu ? Ru.value() : Ru;
              return Vu || (Vu = new DR), yu(Gu, Uu, Eu, Ku, Vu)
            }
          }
          if (!Du) return !1;
          return Vu || (Vu = new DR),
            function(uu, Ru, yu, Eu, Ku, Qu) {
              var mu = 2 & Ku,
                Ju = Vy(uu),
                Nu = Ju.length,
                Xu = Vy(Ru),
                Vu = Xu.length;
              if (Nu != Vu && !mu) return !1;
              var ru = Nu;
              for (; ru--;) {
                var Bu = Ju[ru];
                if (!(mu ? Bu in Ru : au.call(Ru, Bu))) return !1
              }
              var xu = Qu.get(uu);
              if (xu && Qu.get(Ru)) return xu == Ru;
              var Su = !0;
              Qu.set(uu, Ru), Qu.set(Ru, uu);
              var pu = mu;
              for (; ++ru < Nu;) {
                var Tu = uu[Bu = Ju[ru]],
                  Wu = Ru[Bu];
                if (Eu) var ju = mu ? Eu(Wu, Tu, Bu, Ru, uu, Qu) : Eu(Tu, Wu, Bu, uu, Ru, Qu);
                if (!(void 0 === ju ? Tu === Wu || yu(Tu, Wu, Eu, Ku, Qu) : ju)) {
                  Su = !1;
                  break
                }
                pu || (pu = "constructor" == Bu)
              }
              if (Su && !pu) {
                var Hu = uu.constructor,
                  du = Ru.constructor;
                Hu == du || !("constructor" in uu) || !("constructor" in Ru) || "function" == typeof Hu && Hu instanceof Hu && "function" == typeof du && du instanceof du || (Su = !1)
              }
              return Qu.delete(uu), Qu.delete(Ru), Su
            }(uu, Ru, yu, Eu, Ku, Vu)
        }(uu, Ru, lR, yu, Eu, Ku))
      }

      function gR(uu) {
        return !(!Qy(uu) || (Ru = uu, Ou && Ou in Ru)) && (Ey(uu) || wu(uu) ? uR : Mu).test(vR(uu));
        var Ru
      }

      function cR(uu) {
        return "function" == typeof uu ? uu : null == uu ? ry : "object" == typeof uu ? Ry(uu) ? function(uu, Ru) {
          if (iR(uu) && YR(Ru)) return oR(OR(uu), Ru);
          return function(yu) {
            var Eu = function(uu, Ru, yu) {
              var Eu = null == uu ? void 0 : sR(uu, Ru);
              return void 0 === Eu ? yu : Eu
            }(yu, uu);
            return void 0 === Eu && Eu === Ru ? function(uu, Ru) {
              return null != uu && function(uu, Ru, yu) {
                Ru = iR(Ru, uu) ? [Ru] : zR(Ru);
                var Eu, Ku = -1,
                  Qu = Ru.length;
                for (; ++Ku < Qu;) {
                  var mu = OR(Ru[Ku]);
                  if (!(Eu = null != uu && yu(uu, mu))) break;
                  uu = uu[mu]
                }
                if (Eu) return Eu;
                Qu = uu ? uu.length : 0;
                return !!Qu && Ky(Qu) && PR(mu, Qu) && (Ry(uu) || uy(uu))
              }(uu, Ru, tR)
            }(yu, uu) : lR(Ru, Eu, void 0, 3)
          }
        }(uu[0], uu[1]) : function(uu) {
          var Ru = function(uu) {
            var Ru = Vy(uu),
              yu = Ru.length;
            for (; yu--;) {
              var Eu = Ru[yu],
                Ku = uu[Eu];
              Ru[yu] = [Eu, Ku, YR(Ku)]
            }
            return Ru
          }(uu);
          if (1 == Ru.length && Ru[0][2]) return oR(Ru[0][0], Ru[0][1]);
          return function(yu) {
            return yu === uu || function(uu, Ru, yu, Eu) {
              var Ku = yu.length,
                Qu = Ku,
                mu = !Eu;
              if (null == uu) return !Qu;
              for (uu = Object(uu); Ku--;) {
                var Ju = yu[Ku];
                if (mu && Ju[2] ? Ju[1] !== uu[Ju[0]] : !(Ju[0] in uu)) return !1
              }
              for (; ++Ku < Qu;) {
                var Nu = (Ju = yu[Ku])[0],
                  Xu = uu[Nu],
                  Vu = Ju[1];
                if (mu && Ju[2]) {
                  if (void 0 === Xu && !(Nu in uu)) return !1
                } else {
                  var ru = new DR;
                  if (Eu) var Bu = Eu(Xu, Vu, Nu, uu, Ru, ru);
                  if (!(void 0 === Bu ? lR(Vu, Xu, Eu, 3, ru) : Bu)) return !1
                }
              }
              return !0
            }(yu, uu, Ru)
          }
        }(uu) : function(uu) {
          return iR(uu) ? (Ru = OR(uu), function(uu) {
            return null == uu ? void 0 : uu[Ru]
          }) : function(uu) {
            return function(Ru) {
              return sR(Ru, uu)
            }
          }(uu);
          var Ru
        }(uu)
      }

      function LR(uu) {
        if (! function(uu) {
            var Ru = uu && uu.constructor,
              yu = "function" == typeof Ru && Ru.prototype || ou;
            return uu === yu
          }(uu)) return JR(uu);
        var Ru = [];
        for (var yu in Object(uu)) au.call(uu, yu) && "constructor" != yu && Ru.push(yu);
        return Ru
      }

      function zR(uu) {
        return Ry(uu) ? uu : qR(uu)
      }

      function FR(uu, Ru, yu, Eu, Ku, Qu) {
        var mu = 2 & Ku,
          Ju = uu.length,
          Nu = Ru.length;
        if (Ju != Nu && !(mu && Nu > Ju)) return !1;
        var Xu = Qu.get(uu);
        if (Xu && Qu.get(Ru)) return Xu == Ru;
        var Vu = -1,
          ru = !0,
          Bu = 1 & Ku ? new AR : void 0;
        for (Qu.set(uu, Ru), Qu.set(Ru, uu); ++Vu < Ju;) {
          var xu = uu[Vu],
            Su = Ru[Vu];
          if (Eu) var pu = mu ? Eu(Su, xu, Vu, Ru, uu, Qu) : Eu(xu, Su, Vu, uu, Ru, Qu);
          if (void 0 !== pu) {
            if (pu) continue;
            ru = !1;
            break
          }
          if (Bu) {
            if (!Fu(Ru, (function(uu, Ru) {
                if (!Bu.has(Ru) && (xu === uu || yu(xu, uu, Eu, Ku, Qu))) return Bu.add(Ru)
              }))) {
              ru = !1;
              break
            }
          } else if (xu !== Su && !yu(xu, Su, Eu, Ku, Qu)) {
            ru = !1;
            break
          }
        }
        return Qu.delete(uu), Qu.delete(Ru), ru
      }

      function wR(uu, Ru) {
        var yu = uu.__data__;
        return function(uu) {
          var Ru = typeof uu;
          return "string" == Ru || "number" == Ru || "symbol" == Ru || "boolean" == Ru ? "__proto__" !== uu : null === uu
        }(Ru) ? yu["string" == typeof Ru ? "string" : "hash"] : yu.map
      }

      function ZR(uu, Ru) {
        var yu = function(uu, Ru) {
          return null == uu ? void 0 : uu[Ru]
        }(uu, Ru);
        return gR(yu) ? yu : void 0
      }
      var hR = function(uu) {
        return fu.call(uu)
      };

      function PR(uu, Ru) {
        return !!(Ru = null == Ru ? Eu : Ru) && ("number" == typeof uu || Iu.test(uu)) && uu > -1 && uu % 1 == 0 && uu < Ru
      }

      function iR(uu, Ru) {
        if (Ry(uu)) return !1;
        var yu = typeof uu;
        return !("number" != yu && "symbol" != yu && "boolean" != yu && null != uu && !Jy(uu)) || (ku.test(uu) || !Cu.test(uu) || null != Ru && uu in Object(Ru))
      }

      function YR(uu) {
        return uu === uu && !Qy(uu)
      }

      function oR(uu, Ru) {
        return function(yu) {
          return null != yu && (yu[uu] === Ru && (void 0 !== Ru || uu in Object(yu)))
        }
      }(NR && hR(new NR(new ArrayBuffer(1))) != bu || XR && hR(new XR) != ru || VR && hR(VR.resolve()) != Su || rR && hR(new rR) != Tu || BR && hR(new BR) != Hu) && (hR = function(uu) {
        var Ru = fu.call(uu),
          yu = Ru == xu ? uu.constructor : void 0,
          Eu = yu ? vR(yu) : void 0;
        if (Eu) switch (Eu) {
          case SR:
            return bu;
          case pR:
            return ru;
          case TR:
            return Su;
          case WR:
            return Tu;
          case jR:
            return Hu
        }
        return Ru
      });
      var qR = aR((function(uu) {
        var Ru;
        uu = null == (Ru = uu) ? "" : function(uu) {
          if ("string" == typeof uu) return uu;
          if (Jy(uu)) return bR ? bR.call(uu) : "";
          var Ru = uu + "";
          return "0" == Ru && 1 / uu == -1 / 0 ? "-0" : Ru
        }(Ru);
        var yu = [];
        return eu.test(uu) && yu.push(""), uu.replace(Au, (function(uu, Ru, Eu, Ku) {
          yu.push(Eu ? Ku.replace(Du, "$1") : Ru || uu)
        })), yu
      }));

      function OR(uu) {
        if ("string" == typeof uu || Jy(uu)) return uu;
        var Ru = uu + "";
        return "0" == Ru && 1 / uu == -1 / 0 ? "-0" : Ru
      }

      function vR(uu) {
        if (null != uu) {
          try {
            return vu.call(uu)
          } catch (Ru) {}
          try {
            return uu + ""
          } catch (Ru) {}
        }
        return ""
      }

      function aR(uu, Ru) {
        if ("function" != typeof uu || Ru && "function" != typeof Ru) throw new TypeError("Expected a function");
        var yu = function() {
          var Eu = arguments,
            Ku = Ru ? Ru.apply(this, Eu) : Eu[0],
            Qu = yu.cache;
          if (Qu.has(Ku)) return Qu.get(Ku);
          var mu = uu.apply(this, Eu);
          return yu.cache = Qu.set(Ku, mu), mu
        };
        return yu.cache = new(aR.Cache || eR), yu
      }

      function fR(uu, Ru) {
        return uu === Ru || uu !== uu && Ru !== Ru
      }

      function uy(uu) {
        return function(uu) {
          return my(uu) && yy(uu)
        }(uu) && au.call(uu, "callee") && (!QR.call(uu, "callee") || fu.call(uu) == Qu)
      }
      aR.Cache = eR;
      var Ry = Array.isArray;

      function yy(uu) {
        return null != uu && Ky(uu.length) && !Ey(uu)
      }

      function Ey(uu) {
        var Ru = Qy(uu) ? fu.call(uu) : "";
        return Ru == Vu || "[object GeneratorFunction]" == Ru
      }

      function Ky(uu) {
        return "number" == typeof uu && uu > -1 && uu % 1 == 0 && uu <= Eu
      }

      function Qy(uu) {
        var Ru = typeof uu;
        return !!uu && ("object" == Ru || "function" == Ru)
      }

      function my(uu) {
        return !!uu && "object" == typeof uu
      }

      function Jy(uu) {
        return "symbol" == typeof uu || my(uu) && fu.call(uu) == ju
      }
      var Ny, Xy = Lu ? (Ny = Lu, function(uu) {
        return Ny(uu)
      }) : function(uu) {
        return my(uu) && Ky(uu.length) && !!Gu[fu.call(uu)]
      };

      function Vy(uu) {
        return yy(uu) ? MR(uu) : LR(uu)
      }

      function ry(uu) {
        return uu
      }
      uu.exports = function(uu, Ru, yu) {
        var Eu, Ku = Ry(uu) || Xy(uu);
        if (Ru = cR(Ru), null == yu)
          if (Ku || Qy(uu)) {
            var Qu = uu.constructor;
            yu = Ku ? Ry(uu) ? new Qu : [] : Ey(Qu) ? Qy(Eu = ER(uu)) ? KR(Eu) : {} : {}
          } else yu = {};
        return (Ku ? zu : nR)(uu, (function(uu, Eu, Ku) {
          return Ru(yu, uu, Eu, Ku)
        })), yu
      }
    }(gQ, gQ.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      k: cQ
    } = Eu
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);