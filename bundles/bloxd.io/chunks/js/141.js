export const id = 141;
export const ids = [141];
export const modules = {
  7751: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xa,
      f: () => TB
    });
    var Rk = {};
    Bk.r(Rk), Bk.d(Rk, {
      b: () => tR,
      g: () => bR,
      e: () => XR,
      j: () => lB,
      m: () => jB,
      p: () => uR,
      q: () => QB,
      r: () => UR,
      s: () => LR,
      t: () => gR,
      v: () => nB,
      x: () => ER,
      A: () => HR,
      B: () => MR,
      G: () => IB,
      E: () => BR,
      I: () => NR,
      K: () => SR
    });
    var tk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function ak(kk) {
      return kk && kk.__esModule && Object.prototype.hasOwnProperty.call(kk, "default") ? kk.default : kk
    }
    var Xk = {
      exports: {}
    };
    ! function(kk) {
      var Fk = Object.prototype.hasOwnProperty,
        Bk = "~";

      function Rk() {}

      function tk(kk, Fk, Bk) {
        this.oe = kk, this.context = Fk, this.once = Bk || !1
      }

      function ak(kk, Fk, Rk, ak, Xk) {
        if ("function" !== typeof Rk) throw new TypeError("The listener must be a function");
        var bk = new tk(Rk, ak || kk, Xk),
          wk = Bk ? Bk + Fk : Fk;
        return kk._events[wk] ? kk._events[wk].oe ? kk._events[wk] = [kk._events[wk], bk] : kk._events[wk].push(bk) : (kk._events[wk] = bk, kk._eventsCount++), kk
      }

      function Xk(kk, Fk) {
        0 === --kk._eventsCount ? kk._events = new Rk : delete kk._events[Fk]
      }

      function bk() {
        this._events = new Rk, this._eventsCount = 0
      }
      Object.create && (Rk.prototype = Object.create(null), (new Rk).__proto__ || (Bk = !1)), bk.prototype.eventNames = function() {
        var kk, Rk, tk = [];
        if (0 === this._eventsCount) return tk;
        for (Rk in kk = this._events) Fk.call(kk, Rk) && tk.push(Bk ? Rk.slice(1) : Rk);
        return Object.getOwnPropertySymbols ? tk.concat(Object.getOwnPropertySymbols(kk)) : tk
      }, bk.prototype.listeners = function(kk) {
        var Fk = Bk ? Bk + kk : kk,
          Rk = this._events[Fk];
        if (!Rk) return [];
        if (Rk.oe) return [Rk.oe];
        for (var tk = 0, ak = Rk.length, Xk = new Array(ak); tk < ak; tk++) Xk[tk] = Rk[tk].oe;
        return Xk
      }, bk.prototype.listenerCount = function(kk) {
        var Fk = Bk ? Bk + kk : kk,
          Rk = this._events[Fk];
        return Rk ? Rk.oe ? 1 : Rk.length : 0
      }, bk.prototype.emit = function(kk, Fk, Rk, tk, ak, Xk) {
        var bk = Bk ? Bk + kk : kk;
        if (!this._events[bk]) return !1;
        var wk, dk, sk = this._events[bk],
          Vk = arguments.length;
        if (sk.oe) {
          switch (sk.once && this.removeListener(kk, sk.oe, void 0, !0), Vk) {
            case 1:
              return sk.oe.call(sk.context), !0;
            case 2:
              return sk.oe.call(sk.context, Fk), !0;
            case 3:
              return sk.oe.call(sk.context, Fk, Rk), !0;
            case 4:
              return sk.oe.call(sk.context, Fk, Rk, tk), !0;
            case 5:
              return sk.oe.call(sk.context, Fk, Rk, tk, ak), !0;
            case 6:
              return sk.oe.call(sk.context, Fk, Rk, tk, ak, Xk), !0
          }
          for (dk = 1, wk = new Array(Vk - 1); dk < Vk; dk++) wk[dk - 1] = arguments[dk];
          sk.oe.apply(sk.context, wk)
        } else {
          var Jk, Ak = sk.length;
          for (dk = 0; dk < Ak; dk++) switch (sk[dk].once && this.removeListener(kk, sk[dk].oe, void 0, !0), Vk) {
            case 1:
              sk[dk].oe.call(sk[dk].context);
              break;
            case 2:
              sk[dk].oe.call(sk[dk].context, Fk);
              break;
            case 3:
              sk[dk].oe.call(sk[dk].context, Fk, Rk);
              break;
            case 4:
              sk[dk].oe.call(sk[dk].context, Fk, Rk, tk);
              break;
            default:
              if (!wk)
                for (Jk = 1, wk = new Array(Vk - 1); Jk < Vk; Jk++) wk[Jk - 1] = arguments[Jk];
              sk[dk].oe.apply(sk[dk].context, wk)
          }
        }
        return !0
      }, bk.prototype.on = function(kk, Fk, Bk) {
        return ak(this, kk, Fk, Bk, !1)
      }, bk.prototype.once = function(kk, Fk, Bk) {
        return ak(this, kk, Fk, Bk, !0)
      }, bk.prototype.removeListener = function(kk, Fk, Rk, tk) {
        var ak = Bk ? Bk + kk : kk;
        if (!this._events[ak]) return this;
        if (!Fk) return Xk(this, ak), this;
        var bk = this._events[ak];
        if (bk.oe) bk.oe !== Fk || tk && !bk.once || Rk && bk.context !== Rk || Xk(this, ak);
        else {
          for (var wk = 0, dk = [], sk = bk.length; wk < sk; wk++)(bk[wk].oe !== Fk || tk && !bk[wk].once || Rk && bk[wk].context !== Rk) && dk.push(bk[wk]);
          dk.length ? this._events[ak] = 1 === dk.length ? dk[0] : dk : Xk(this, ak)
        }
        return this
      }, bk.prototype.qm = function(kk) {
        var Fk;
        return kk ? (Fk = Bk ? Bk + kk : kk, this._events[Fk] && Xk(this, Fk)) : (this._events = new Rk, this._eventsCount = 0), this
      }, bk.prototype.off = bk.prototype.removeListener, bk.prototype.addListener = bk.prototype.on, bk.prefixed = Bk, bk.EventEmitter = bk, kk.exports = bk
    }(Xk);
    var bk, wk, dk = ak(Xk.exports);
    ! function(kk) {
      kk.assertEqual = kk => kk, kk.assertIs = function(kk) {}, kk.assertNever = function(kk) {
        throw new Error
      }, kk.arrayToEnum = kk => {
        const Fk = {};
        for (const Bk of kk) Fk[Bk] = Bk;
        return Fk
      }, kk.getValidEnumValues = Fk => {
        const Bk = kk.objectKeys(Fk).filter((kk => "number" !== typeof Fk[Fk[kk]])),
          Rk = {};
        for (const kk of Bk) Rk[kk] = Fk[kk];
        return kk.objectValues(Rk)
      }, kk.objectValues = Fk => kk.objectKeys(Fk).map((function(kk) {
        return Fk[kk]
      })), kk.objectKeys = "function" === typeof Object.keys ? kk => Object.keys(kk) : kk => {
        const Fk = [];
        for (const Bk in kk) Object.prototype.hasOwnProperty.call(kk, Bk) && Fk.push(Bk);
        return Fk
      }, kk.find = (kk, Fk) => {
        for (const Bk of kk)
          if (Fk(Bk)) return Bk
      }, kk.isInteger = "function" === typeof Number.isInteger ? kk => Number.isInteger(kk) : kk => "number" === typeof kk && isFinite(kk) && Math.floor(kk) === kk, kk.joinValues = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return kk.map((kk => "string" === typeof kk ? `'${kk}'` : kk)).join(Fk)
      }, kk.jsonStringifyReplacer = (kk, Fk) => "bigint" === typeof Fk ? Fk.toString() : Fk
    }(bk || (bk = {})),
    function(kk) {
      kk.mergeShapes = (kk, Fk) => ({
        ...kk,
        ...Fk
      })
    }(wk || (wk = {}));
    const sk = bk.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Vk = kk => {
        switch (typeof kk) {
          case "undefined":
            return sk.undefined;
          case "string":
            return sk.string;
          case "number":
            return isNaN(kk) ? sk.nan : sk.number;
          case "boolean":
            return sk.boolean;
          case "function":
            return sk.function;
          case "bigint":
            return sk.bigint;
          case "symbol":
            return sk.symbol;
          case "object":
            return Array.isArray(kk) ? sk.array : null === kk ? sk.null : kk.then && "function" === typeof kk.then && kk.catch && "function" === typeof kk.catch ? sk.promise : "undefined" !== typeof Map && kk instanceof Map ? sk.map : "undefined" !== typeof Set && kk instanceof Set ? sk.set : "undefined" !== typeof Date && kk instanceof Date ? sk.date : sk.object;
          default:
            return sk.unknown
        }
      },
      Jk = bk.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Ak extends Error {
      constructor(kk) {
        var Fk;
        super(), Fk = this, this.issues = [], this.addIssue = kk => {
          this.issues = [...this.issues, kk]
        }, this.addIssues = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Fk.issues = [...Fk.issues, ...kk]
        };
        const Bk = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Bk) : this.__proto__ = Bk, this.name = "ZodError", this.issues = kk
      }
      get errors() {
        return this.issues
      }
      format(kk) {
        const Fk = kk || function(kk) {
            return kk.message
          },
          Bk = {
            _errors: []
          },
          Rk = kk => {
            for (const tk of kk.issues)
              if ("invalid_union" === tk.code) tk.unionErrors.map(Rk);
              else if ("invalid_return_type" === tk.code) Rk(tk.returnTypeError);
            else if ("invalid_arguments" === tk.code) Rk(tk.argumentsError);
            else if (0 === tk.path.length) Bk._errors.push(Fk(tk));
            else {
              let kk = Bk,
                Rk = 0;
              for (; Rk < tk.path.length;) {
                const Bk = tk.path[Rk];
                Rk === tk.path.length - 1 ? (kk[Bk] = kk[Bk] || {
                  _errors: []
                }, kk[Bk]._errors.push(Fk(tk))) : kk[Bk] = kk[Bk] || {
                  _errors: []
                }, kk = kk[Bk], Rk++
              }
            }
          };
        return Rk(this), Bk
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, bk.jsonStringifyReplacer, 2)
      }
      get Se() {
        return 0 === this.issues.length
      }
      flatten() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kk => kk.message;
        const Fk = {},
          Bk = [];
        for (const Rk of this.issues) Rk.path.length > 0 ? (Fk[Rk.path[0]] = Fk[Rk.path[0]] || [], Fk[Rk.path[0]].push(kk(Rk))) : Bk.push(kk(Rk));
        return {
          formErrors: Bk,
          fieldErrors: Fk
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Ak.create = kk => new Ak(kk);
    const ek = (kk, Fk) => {
      let Bk;
      switch (kk.code) {
        case Jk.invalid_type:
          Bk = kk.received === sk.undefined ? "Required" : `Expected ${kk.expected}, received ${kk.received}`;
          break;
        case Jk.invalid_literal:
          Bk = `Invalid literal value, expected ${JSON.stringify(kk.expected,bk.jsonStringifyReplacer)}`;
          break;
        case Jk.unrecognized_keys:
          Bk = `Unrecognized key(s) in object: ${bk.joinValues(kk.keys,", ")}`;
          break;
        case Jk.invalid_union:
          Bk = "Invalid input";
          break;
        case Jk.invalid_union_discriminator:
          Bk = `Invalid discriminator value. Expected ${bk.joinValues(kk.options)}`;
          break;
        case Jk.invalid_enum_value:
          Bk = `Invalid enum value. Expected ${bk.joinValues(kk.options)}, received '${kk.received}'`;
          break;
        case Jk.invalid_arguments:
          Bk = "Invalid function arguments";
          break;
        case Jk.invalid_return_type:
          Bk = "Invalid function return type";
          break;
        case Jk.invalid_date:
          Bk = "Invalid date";
          break;
        case Jk.invalid_string:
          "object" === typeof kk.validation ? "includes" in kk.validation ? (Bk = `Invalid input: must include "${kk.validation.includes}"`, "number" === typeof kk.validation.position && (Bk = `${Bk} at one or more positions greater than or equal to ${kk.validation.position}`)) : "startsWith" in kk.validation ? Bk = `Invalid input: must start with "${kk.validation.startsWith}"` : "endsWith" in kk.validation ? Bk = `Invalid input: must end with "${kk.validation.endsWith}"` : bk.assertNever(kk.validation) : Bk = "regex" !== kk.validation ? `Invalid ${kk.validation}` : "Invalid";
          break;
        case Jk.too_small:
          Bk = "array" === kk.type ? `Array must contain ${kk.exact?"exactly":kk.inclusive?"at least":"more than"} ${kk.minimum} element(s)` : "string" === kk.type ? `String must contain ${kk.exact?"exactly":kk.inclusive?"at least":"over"} ${kk.minimum} character(s)` : "number" === kk.type ? `Number must be ${kk.exact?"exactly equal to ":kk.inclusive?"greater than or equal to ":"greater than "}${kk.minimum}` : "date" === kk.type ? `Date must be ${kk.exact?"exactly equal to ":kk.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(kk.minimum))}` : "Invalid input";
          break;
        case Jk.too_big:
          Bk = "array" === kk.type ? `Array must contain ${kk.exact?"exactly":kk.inclusive?"at most":"less than"} ${kk.maximum} element(s)` : "string" === kk.type ? `String must contain ${kk.exact?"exactly":kk.inclusive?"at most":"under"} ${kk.maximum} character(s)` : "number" === kk.type ? `Number must be ${kk.exact?"exactly":kk.inclusive?"less than or equal to":"less than"} ${kk.maximum}` : "bigint" === kk.type ? `BigInt must be ${kk.exact?"exactly":kk.inclusive?"less than or equal to":"less than"} ${kk.maximum}` : "date" === kk.type ? `Date must be ${kk.exact?"exactly":kk.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(kk.maximum))}` : "Invalid input";
          break;
        case Jk.custom:
          Bk = "Invalid input";
          break;
        case Jk.invalid_intersection_types:
          Bk = "Intersection results could not be merged";
          break;
        case Jk.not_multiple_of:
          Bk = `Number must be a multiple of ${kk.multipleOf}`;
          break;
        case Jk.not_finite:
          Bk = "Number must be finite";
          break;
        default:
          Bk = Fk.defaultError, bk.assertNever(kk)
      }
      return {
        message: Bk
      }
    };
    let yk = ek;

    function fk() {
      return yk
    }
    const mk = kk => {
      const {
        data: Fk,
        path: Bk,
        errorMaps: Rk,
        issueData: tk
      } = kk, ak = [...Bk, ...tk.path || []], Xk = {
        ...tk,
        path: ak
      };
      let bk = "";
      const wk = Rk.filter((kk => !!kk)).slice().reverse();
      for (const dk of wk) bk = dk(Xk, {
        data: Fk,
        defaultError: bk
      }).message;
      return {
        ...tk,
        path: ak,
        message: tk.message || bk
      }
    };

    function Wk(kk, Fk) {
      const Bk = mk({
        issueData: Fk,
        data: kk.data,
        path: kk.path,
        errorMaps: [kk.common.contextualErrorMap, kk.schemaErrorMap, fk(), ek].filter((kk => !!kk))
      });
      kk.common.issues.push(Bk)
    }
    class vk {
      constructor() {
        this.value = "valid"
      }
      Xy() {
        "valid" === this.value && (this.value = "Xy")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(kk, Fk) {
        const Bk = [];
        for (const Rk of Fk) {
          if ("aborted" === Rk.status) return ik;
          "Xy" === Rk.status && kk.Xy(), Bk.push(Rk.value)
        }
        return {
          status: kk.value,
          value: Bk
        }
      }
      static async mergeObjectAsync(kk, Fk) {
        const Bk = [];
        for (const Rk of Fk) Bk.push({
          key: await Rk.key,
          value: await Rk.value
        });
        return vk.mergeObjectSync(kk, Bk)
      }
      static mergeObjectSync(kk, Fk) {
        const Bk = {};
        for (const Rk of Fk) {
          const {
            key: Fk,
            value: tk
          } = Rk;
          if ("aborted" === Fk.status) return ik;
          if ("aborted" === tk.status) return ik;
          "Xy" === Fk.status && kk.Xy(), "Xy" === tk.status && kk.Xy(), "__proto__" === Fk.value || "undefined" === typeof tk.value && !Rk.alwaysSet || (Bk[Fk.value] = tk.value)
        }
        return {
          status: kk.value,
          value: Bk
        }
      }
    }
    const ik = Object.freeze({
        status: "aborted"
      }),
      Yk = kk => ({
        status: "Xy",
        value: kk
      }),
      Lk = kk => ({
        status: "valid",
        value: kk
      }),
      Ok = kk => "aborted" === kk.status,
      Ek = kk => "Xy" === kk.status,
      Sk = kk => "valid" === kk.status,
      Nk = kk => "undefined" !== typeof Promise && kk instanceof Promise;
    var Hk;
    ! function(kk) {
      kk.errToObj = kk => "string" === typeof kk ? {
        message: kk
      } : kk || {}, kk.toString = kk => "string" === typeof kk ? kk : null === kk || void 0 === kk ? void 0 : kk.message
    }(Hk || (Hk = {}));
    class uk {
      constructor(kk, Fk, Bk, Rk) {
        this._cachedPath = [], this.parent = kk, this.data = Fk, this._path = Bk, this._key = Rk
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Mk = (kk, Fk) => {
      if (Sk(Fk)) return {
        success: !0,
        data: Fk.value
      };
      if (!kk.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Fk = new Ak(kk.common.issues);
          return this._error = Fk, this._error
        }
      }
    };

    function gk(kk) {
      if (!kk) return {};
      const {
        errorMap: Fk,
        invalid_type_error: Bk,
        required_error: Rk,
        description: tk
      } = kk;
      if (Fk && (Bk || Rk)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Fk) return {
        errorMap: Fk,
        description: tk
      };
      return {
        errorMap: (kk, Fk) => "invalid_type" !== kk.code ? {
          message: Fk.defaultError
        } : "undefined" === typeof Fk.data ? {
          message: null !== Rk && void 0 !== Rk ? Rk : Fk.defaultError
        } : {
          message: null !== Bk && void 0 !== Bk ? Bk : Fk.defaultError
        },
        description: tk
      }
    }
    class Uk {
      constructor(kk) {
        this.spa = this.safeParseAsync, this._def = kk, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(kk) {
        return Vk(kk.data)
      }
      _getOrReturnCtx(kk, Fk) {
        return Fk || {
          common: kk.parent.common,
          data: kk.data,
          parsedType: Vk(kk.data),
          schemaErrorMap: this._def.errorMap,
          path: kk.path,
          parent: kk.parent
        }
      }
      _processInputParams(kk) {
        return {
          status: new vk,
          ctx: {
            common: kk.parent.common,
            data: kk.data,
            parsedType: Vk(kk.data),
            schemaErrorMap: this._def.errorMap,
            path: kk.path,
            parent: kk.parent
          }
        }
      }
      _parseSync(kk) {
        const Fk = this._parse(kk);
        if (Nk(Fk)) throw new Error("Synchronous parse encountered promise.");
        return Fk
      }
      _parseAsync(kk) {
        const Fk = this._parse(kk);
        return Promise.resolve(Fk)
      }
      parse(kk, Fk) {
        const Bk = this.safeParse(kk, Fk);
        if (Bk.success) return Bk.data;
        throw Bk.error
      }
      safeParse(kk, Fk) {
        var Bk;
        const Rk = {
            common: {
              issues: [],
              async: null !== (Bk = null === Fk || void 0 === Fk ? void 0 : Fk.async) && void 0 !== Bk && Bk,
              contextualErrorMap: null === Fk || void 0 === Fk ? void 0 : Fk.errorMap
            },
            path: (null === Fk || void 0 === Fk ? void 0 : Fk.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: kk,
            parsedType: Vk(kk)
          },
          tk = this._parseSync({
            data: kk,
            path: Rk.path,
            parent: Rk
          });
        return Mk(Rk, tk)
      }
      async parseAsync(kk, Fk) {
        const Bk = await this.safeParseAsync(kk, Fk);
        if (Bk.success) return Bk.data;
        throw Bk.error
      }
      async safeParseAsync(kk, Fk) {
        const Bk = {
            common: {
              issues: [],
              contextualErrorMap: null === Fk || void 0 === Fk ? void 0 : Fk.errorMap,
              async: !0
            },
            path: (null === Fk || void 0 === Fk ? void 0 : Fk.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: kk,
            parsedType: Vk(kk)
          },
          Rk = this._parse({
            data: kk,
            path: Bk.path,
            parent: Bk
          }),
          tk = await (Nk(Rk) ? Rk : Promise.resolve(Rk));
        return Mk(Bk, tk)
      }
      refine(kk, Fk) {
        const Bk = kk => "string" === typeof Fk || "undefined" === typeof Fk ? {
          message: Fk
        } : "function" === typeof Fk ? Fk(kk) : Fk;
        return this._refinement(((Fk, Rk) => {
          const tk = kk(Fk),
            ak = () => Rk.addIssue({
              code: Jk.custom,
              ...Bk(Fk)
            });
          return "undefined" !== typeof Promise && tk instanceof Promise ? tk.then((kk => !!kk || (ak(), !1))) : !!tk || (ak(), !1)
        }))
      }
      refinement(kk, Fk) {
        return this._refinement(((Bk, Rk) => !!kk(Bk) || (Rk.addIssue("function" === typeof Fk ? Fk(Bk, Rk) : Fk), !1)))
      }
      _refinement(kk) {
        return new YF({
          schema: this,
          typeName: cF.ZodEffects,
          effect: {
            type: "refinement",
            refinement: kk
          }
        })
      }
      superRefine(kk) {
        return this._refinement(kk)
      }
      optional() {
        return oF.create(this, this._def)
      }
      nullable() {
        return LF.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return BF.create(this, this._def)
      }
      promise() {
        return iF.create(this, this._def)
      }
      or(kk) {
        return aF.create([this, kk], this._def)
      }
      and(kk) {
        return dF.create(this, kk, this._def)
      }
      transform(kk) {
        return new YF({
          ...gk(this._def),
          schema: this,
          typeName: cF.ZodEffects,
          effect: {
            type: "transform",
            transform: kk
          }
        })
      }
      default (kk) {
        const Fk = "function" === typeof kk ? kk : () => kk;
        return new OF({
          ...gk(this._def),
          innerType: this,
          defaultValue: Fk,
          typeName: cF.ZodDefault
        })
      }
      brand() {
        return new HF({
          typeName: cF.ZodBranded,
          type: this,
          ...gk(this._def)
        })
      } catch (kk) {
        const Fk = "function" === typeof kk ? kk : () => kk;
        return new EF({
          ...gk(this._def),
          innerType: this,
          catchValue: Fk,
          typeName: cF.ZodCatch
        })
      }
      describe(kk) {
        return new(0, this.constructor)({
          ...this._def,
          description: kk
        })
      }
      pipe(kk) {
        return uF.create(this, kk)
      }
      readonly() {
        return MF.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const ck = /^c[^\s-]{8,}$/i,
      Gk = /^[a-z][a-z0-9]*$/,
      Tk = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      rk = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Dk = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let zk;
    const Pk = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      hk = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class qk extends Uk {
      _parse(kk) {
        this._def.coerce && (kk.data = String(kk.data));
        if (this._getType(kk) !== sk.string) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.string,
            received: Fk.parsedType
          }), ik
        }
        const Fk = new vk;
        let Bk;
        for (const wk of this._def.checks)
          if ("min" === wk.kind) kk.data.length < wk.value && (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
            code: Jk.too_small,
            minimum: wk.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: wk.message
          }), Fk.Xy());
          else if ("max" === wk.kind) kk.data.length > wk.value && (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          code: Jk.too_big,
          maximum: wk.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: wk.message
        }), Fk.Xy());
        else if ("length" === wk.kind) {
          const Rk = kk.data.length > wk.value,
            tk = kk.data.length < wk.value;
          (Rk || tk) && (Bk = this._getOrReturnCtx(kk, Bk), Rk ? Wk(Bk, {
            code: Jk.too_big,
            maximum: wk.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: wk.message
          }) : tk && Wk(Bk, {
            code: Jk.too_small,
            minimum: wk.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: wk.message
          }), Fk.Xy())
        } else if ("email" === wk.kind) Dk.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "email",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy());
        else if ("emoji" === wk.kind) zk || (zk = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), zk.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "emoji",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy());
        else if ("uuid" === wk.kind) rk.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "uuid",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy());
        else if ("cuid" === wk.kind) ck.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "cuid",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy());
        else if ("cuid2" === wk.kind) Gk.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "cuid2",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy());
        else if ("ulid" === wk.kind) Tk.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "ulid",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy());
        else if ("url" === wk.kind) try {
          new URL(kk.data)
        } catch (Xk) {
          Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
            validation: "url",
            code: Jk.invalid_string,
            message: wk.message
          }), Fk.Xy()
        } else if ("regex" === wk.kind) {
          wk.regex.lastIndex = 0;
          wk.regex.test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
            validation: "regex",
            code: Jk.invalid_string,
            message: wk.message
          }), Fk.Xy())
        } else if ("trim" === wk.kind) kk.data = kk.data.trim();
        else if ("includes" === wk.kind) kk.data.includes(wk.value, wk.position) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          code: Jk.invalid_string,
          validation: {
            includes: wk.value,
            position: wk.position
          },
          message: wk.message
        }), Fk.Xy());
        else if ("toLowerCase" === wk.kind) kk.data = kk.data.toLowerCase();
        else if ("toUpperCase" === wk.kind) kk.data = kk.data.toUpperCase();
        else if ("startsWith" === wk.kind) kk.data.startsWith(wk.value) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          code: Jk.invalid_string,
          validation: {
            startsWith: wk.value
          },
          message: wk.message
        }), Fk.Xy());
        else if ("endsWith" === wk.kind) kk.data.endsWith(wk.value) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          code: Jk.invalid_string,
          validation: {
            endsWith: wk.value
          },
          message: wk.message
        }), Fk.Xy());
        else if ("datetime" === wk.kind) {
          ((ak = wk).precision ? ak.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ak.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ak.precision}}Z$`) : 0 === ak.precision ? ak.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ak.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(kk.data) || (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
            code: Jk.invalid_string,
            validation: "datetime",
            message: wk.message
          }), Fk.Xy())
        } else "ip" === wk.kind ? (Rk = kk.data, ("v4" !== (tk = wk.version) && tk || !Pk.test(Rk)) && ("v6" !== tk && tk || !hk.test(Rk)) && (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          validation: "ip",
          code: Jk.invalid_string,
          message: wk.message
        }), Fk.Xy())) : bk.assertNever(wk);
        var Rk, tk, ak;
        return {
          status: Fk.value,
          value: kk.data
        }
      }
      _regex(kk, Fk, Bk) {
        return this.refinement((Fk => kk.test(Fk)), {
          validation: Fk,
          code: Jk.invalid_string,
          ...Hk.errToObj(Bk)
        })
      }
      _addCheck(kk) {
        return new qk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      email(kk) {
        return this._addCheck({
          kind: "email",
          ...Hk.errToObj(kk)
        })
      }
      url(kk) {
        return this._addCheck({
          kind: "url",
          ...Hk.errToObj(kk)
        })
      }
      emoji(kk) {
        return this._addCheck({
          kind: "emoji",
          ...Hk.errToObj(kk)
        })
      }
      uuid(kk) {
        return this._addCheck({
          kind: "uuid",
          ...Hk.errToObj(kk)
        })
      }
      cuid(kk) {
        return this._addCheck({
          kind: "cuid",
          ...Hk.errToObj(kk)
        })
      }
      cuid2(kk) {
        return this._addCheck({
          kind: "cuid2",
          ...Hk.errToObj(kk)
        })
      }
      ulid(kk) {
        return this._addCheck({
          kind: "ulid",
          ...Hk.errToObj(kk)
        })
      }
      ip(kk) {
        return this._addCheck({
          kind: "ip",
          ...Hk.errToObj(kk)
        })
      }
      datetime(kk) {
        var Fk;
        return "string" === typeof kk ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: kk
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === kk || void 0 === kk ? void 0 : kk.precision) ? null : null === kk || void 0 === kk ? void 0 : kk.precision,
          offset: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.offset) && void 0 !== Fk && Fk,
          ...Hk.errToObj(null === kk || void 0 === kk ? void 0 : kk.message)
        })
      }
      regex(kk, Fk) {
        return this._addCheck({
          kind: "regex",
          regex: kk,
          ...Hk.errToObj(Fk)
        })
      }
      includes(kk, Fk) {
        return this._addCheck({
          kind: "includes",
          value: kk,
          position: null === Fk || void 0 === Fk ? void 0 : Fk.position,
          ...Hk.errToObj(null === Fk || void 0 === Fk ? void 0 : Fk.message)
        })
      }
      startsWith(kk, Fk) {
        return this._addCheck({
          kind: "startsWith",
          value: kk,
          ...Hk.errToObj(Fk)
        })
      }
      endsWith(kk, Fk) {
        return this._addCheck({
          kind: "endsWith",
          value: kk,
          ...Hk.errToObj(Fk)
        })
      }
      min(kk, Fk) {
        return this._addCheck({
          kind: "min",
          value: kk,
          ...Hk.errToObj(Fk)
        })
      }
      max(kk, Fk) {
        return this._addCheck({
          kind: "max",
          value: kk,
          ...Hk.errToObj(Fk)
        })
      }
      length(kk, Fk) {
        return this._addCheck({
          kind: "length",
          value: kk,
          ...Hk.errToObj(Fk)
        })
      }
      nonempty(kk) {
        return this.min(1, Hk.errToObj(kk))
      }
      trim() {
        return new qk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new qk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new qk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((kk => "datetime" === kk.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((kk => "email" === kk.kind))
      }
      get isURL() {
        return !!this._def.checks.find((kk => "url" === kk.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((kk => "emoji" === kk.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((kk => "uuid" === kk.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((kk => "cuid" === kk.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((kk => "cuid2" === kk.kind))
      }
      get isULID() {
        return !!this._def.checks.find((kk => "ulid" === kk.kind))
      }
      get isIP() {
        return !!this._def.checks.find((kk => "ip" === kk.kind))
      }
      get minLength() {
        let kk = null;
        for (const Fk of this._def.checks) "min" === Fk.kind && (null === kk || Fk.value > kk) && (kk = Fk.value);
        return kk
      }
      get maxLength() {
        let kk = null;
        for (const Fk of this._def.checks) "max" === Fk.kind && (null === kk || Fk.value < kk) && (kk = Fk.value);
        return kk
      }
    }

    function Ck(kk, Fk) {
      const Bk = (kk.toString().split(".")[1] || "").length,
        Rk = (Fk.toString().split(".")[1] || "").length,
        tk = Bk > Rk ? Bk : Rk;
      return parseInt(kk.toFixed(tk).replace(".", "")) % parseInt(Fk.toFixed(tk).replace(".", "")) / Math.pow(10, tk)
    }
    qk.create = kk => {
      var Fk;
      return new qk({
        checks: [],
        typeName: cF.ZodString,
        coerce: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.coerce) && void 0 !== Fk && Fk,
        ...gk(kk)
      })
    };
    class Zk extends Uk {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(kk) {
        this._def.coerce && (kk.data = Number(kk.data));
        if (this._getType(kk) !== sk.number) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.number,
            received: Fk.parsedType
          }), ik
        }
        let Fk;
        const Bk = new vk;
        for (const Rk of this._def.checks)
          if ("int" === Rk.kind) bk.isInteger(kk.data) || (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
            code: Jk.invalid_type,
            expected: "integer",
            received: "float",
            message: Rk.message
          }), Bk.Xy());
          else if ("min" === Rk.kind) {
          (Rk.inclusive ? kk.data < Rk.value : kk.data <= Rk.value) && (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
            code: Jk.too_small,
            minimum: Rk.value,
            type: "number",
            inclusive: Rk.inclusive,
            exact: !1,
            message: Rk.message
          }), Bk.Xy())
        } else if ("max" === Rk.kind) {
          (Rk.inclusive ? kk.data > Rk.value : kk.data >= Rk.value) && (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
            code: Jk.too_big,
            maximum: Rk.value,
            type: "number",
            inclusive: Rk.inclusive,
            exact: !1,
            message: Rk.message
          }), Bk.Xy())
        } else "multipleOf" === Rk.kind ? 0 !== Ck(kk.data, Rk.value) && (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
          code: Jk.not_multiple_of,
          multipleOf: Rk.value,
          message: Rk.message
        }), Bk.Xy()) : "finite" === Rk.kind ? Number.isFinite(kk.data) || (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
          code: Jk.not_finite,
          message: Rk.message
        }), Bk.Xy()) : bk.assertNever(Rk);
        return {
          status: Bk.value,
          value: kk.data
        }
      }
      gte(kk, Fk) {
        return this.setLimit("min", kk, !0, Hk.toString(Fk))
      }
      gt(kk, Fk) {
        return this.setLimit("min", kk, !1, Hk.toString(Fk))
      }
      lte(kk, Fk) {
        return this.setLimit("max", kk, !0, Hk.toString(Fk))
      }
      lt(kk, Fk) {
        return this.setLimit("max", kk, !1, Hk.toString(Fk))
      }
      setLimit(kk, Fk, Bk, Rk) {
        return new Zk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: kk,
            value: Fk,
            inclusive: Bk,
            message: Hk.toString(Rk)
          }]
        })
      }
      _addCheck(kk) {
        return new Zk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      int(kk) {
        return this._addCheck({
          kind: "int",
          message: Hk.toString(kk)
        })
      }
      positive(kk) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Hk.toString(kk)
        })
      }
      negative(kk) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Hk.toString(kk)
        })
      }
      nonpositive(kk) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Hk.toString(kk)
        })
      }
      nonnegative(kk) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Hk.toString(kk)
        })
      }
      multipleOf(kk, Fk) {
        return this._addCheck({
          kind: "multipleOf",
          value: kk,
          message: Hk.toString(Fk)
        })
      }
      finite(kk) {
        return this._addCheck({
          kind: "finite",
          message: Hk.toString(kk)
        })
      }
      safe(kk) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Hk.toString(kk)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Hk.toString(kk)
        })
      }
      get minValue() {
        let kk = null;
        for (const Fk of this._def.checks) "min" === Fk.kind && (null === kk || Fk.value > kk) && (kk = Fk.value);
        return kk
      }
      get maxValue() {
        let kk = null;
        for (const Fk of this._def.checks) "max" === Fk.kind && (null === kk || Fk.value < kk) && (kk = Fk.value);
        return kk
      }
      get isInt() {
        return !!this._def.checks.find((kk => "int" === kk.kind || "multipleOf" === kk.kind && bk.isInteger(kk.value)))
      }
      get isFinite() {
        let kk = null,
          Fk = null;
        for (const Bk of this._def.checks) {
          if ("finite" === Bk.kind || "int" === Bk.kind || "multipleOf" === Bk.kind) return !0;
          "min" === Bk.kind ? (null === Fk || Bk.value > Fk) && (Fk = Bk.value) : "max" === Bk.kind && (null === kk || Bk.value < kk) && (kk = Bk.value)
        }
        return Number.isFinite(Fk) && Number.isFinite(kk)
      }
    }
    Zk.create = kk => new Zk({
      checks: [],
      typeName: cF.ZodNumber,
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      ...gk(kk)
    });
    class pk extends Uk {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(kk) {
        this._def.coerce && (kk.data = BigInt(kk.data));
        if (this._getType(kk) !== sk.bigint) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.bigint,
            received: Fk.parsedType
          }), ik
        }
        let Fk;
        const Bk = new vk;
        for (const Rk of this._def.checks)
          if ("min" === Rk.kind) {
            (Rk.inclusive ? kk.data < Rk.value : kk.data <= Rk.value) && (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
              code: Jk.too_small,
              type: "bigint",
              minimum: Rk.value,
              inclusive: Rk.inclusive,
              message: Rk.message
            }), Bk.Xy())
          } else if ("max" === Rk.kind) {
          (Rk.inclusive ? kk.data > Rk.value : kk.data >= Rk.value) && (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
            code: Jk.too_big,
            type: "bigint",
            maximum: Rk.value,
            inclusive: Rk.inclusive,
            message: Rk.message
          }), Bk.Xy())
        } else "multipleOf" === Rk.kind ? kk.data % Rk.value !== BigInt(0) && (Fk = this._getOrReturnCtx(kk, Fk), Wk(Fk, {
          code: Jk.not_multiple_of,
          multipleOf: Rk.value,
          message: Rk.message
        }), Bk.Xy()) : bk.assertNever(Rk);
        return {
          status: Bk.value,
          value: kk.data
        }
      }
      gte(kk, Fk) {
        return this.setLimit("min", kk, !0, Hk.toString(Fk))
      }
      gt(kk, Fk) {
        return this.setLimit("min", kk, !1, Hk.toString(Fk))
      }
      lte(kk, Fk) {
        return this.setLimit("max", kk, !0, Hk.toString(Fk))
      }
      lt(kk, Fk) {
        return this.setLimit("max", kk, !1, Hk.toString(Fk))
      }
      setLimit(kk, Fk, Bk, Rk) {
        return new pk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: kk,
            value: Fk,
            inclusive: Bk,
            message: Hk.toString(Rk)
          }]
        })
      }
      _addCheck(kk) {
        return new pk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      positive(kk) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Hk.toString(kk)
        })
      }
      negative(kk) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Hk.toString(kk)
        })
      }
      nonpositive(kk) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Hk.toString(kk)
        })
      }
      nonnegative(kk) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Hk.toString(kk)
        })
      }
      multipleOf(kk, Fk) {
        return this._addCheck({
          kind: "multipleOf",
          value: kk,
          message: Hk.toString(Fk)
        })
      }
      get minValue() {
        let kk = null;
        for (const Fk of this._def.checks) "min" === Fk.kind && (null === kk || Fk.value > kk) && (kk = Fk.value);
        return kk
      }
      get maxValue() {
        let kk = null;
        for (const Fk of this._def.checks) "max" === Fk.kind && (null === kk || Fk.value < kk) && (kk = Fk.value);
        return kk
      }
    }
    pk.create = kk => {
      var Fk;
      return new pk({
        checks: [],
        typeName: cF.ZodBigInt,
        coerce: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.coerce) && void 0 !== Fk && Fk,
        ...gk(kk)
      })
    };
    class Kk extends Uk {
      _parse(kk) {
        this._def.coerce && (kk.data = Boolean(kk.data));
        if (this._getType(kk) !== sk.boolean) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.boolean,
            received: Fk.parsedType
          }), ik
        }
        return Lk(kk.data)
      }
    }
    Kk.create = kk => new Kk({
      typeName: cF.ZodBoolean,
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      ...gk(kk)
    });
    class xk extends Uk {
      _parse(kk) {
        this._def.coerce && (kk.data = new Date(kk.data));
        if (this._getType(kk) !== sk.date) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.date,
            received: Fk.parsedType
          }), ik
        }
        if (isNaN(kk.data.getTime())) {
          return Wk(this._getOrReturnCtx(kk), {
            code: Jk.invalid_date
          }), ik
        }
        const Fk = new vk;
        let Bk;
        for (const Rk of this._def.checks) "min" === Rk.kind ? kk.data.getTime() < Rk.value && (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          code: Jk.too_small,
          message: Rk.message,
          inclusive: !0,
          exact: !1,
          minimum: Rk.value,
          type: "date"
        }), Fk.Xy()) : "max" === Rk.kind ? kk.data.getTime() > Rk.value && (Bk = this._getOrReturnCtx(kk, Bk), Wk(Bk, {
          code: Jk.too_big,
          message: Rk.message,
          inclusive: !0,
          exact: !1,
          maximum: Rk.value,
          type: "date"
        }), Fk.Xy()) : bk.assertNever(Rk);
        return {
          status: Fk.value,
          value: new Date(kk.data.getTime())
        }
      }
      _addCheck(kk) {
        return new xk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      min(kk, Fk) {
        return this._addCheck({
          kind: "min",
          value: kk.getTime(),
          message: Hk.toString(Fk)
        })
      }
      max(kk, Fk) {
        return this._addCheck({
          kind: "max",
          value: kk.getTime(),
          message: Hk.toString(Fk)
        })
      }
      get minDate() {
        let kk = null;
        for (const Fk of this._def.checks) "min" === Fk.kind && (null === kk || Fk.value > kk) && (kk = Fk.value);
        return null != kk ? new Date(kk) : null
      }
      get maxDate() {
        let kk = null;
        for (const Fk of this._def.checks) "max" === Fk.kind && (null === kk || Fk.value < kk) && (kk = Fk.value);
        return null != kk ? new Date(kk) : null
      }
    }
    xk.create = kk => new xk({
      checks: [],
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      typeName: cF.ZodDate,
      ...gk(kk)
    });
    class jk extends Uk {
      _parse(kk) {
        if (this._getType(kk) !== sk.symbol) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.symbol,
            received: Fk.parsedType
          }), ik
        }
        return Lk(kk.data)
      }
    }
    jk.create = kk => new jk({
      typeName: cF.ZodSymbol,
      ...gk(kk)
    });
    class lk extends Uk {
      _parse(kk) {
        if (this._getType(kk) !== sk.undefined) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.undefined,
            received: Fk.parsedType
          }), ik
        }
        return Lk(kk.data)
      }
    }
    lk.create = kk => new lk({
      typeName: cF.ZodUndefined,
      ...gk(kk)
    });
    class nk extends Uk {
      _parse(kk) {
        if (this._getType(kk) !== sk.null) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.null,
            received: Fk.parsedType
          }), ik
        }
        return Lk(kk.data)
      }
    }
    nk.create = kk => new nk({
      typeName: cF.ZodNull,
      ...gk(kk)
    });
    class Ik extends Uk {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(kk) {
        return Lk(kk.data)
      }
    }
    Ik.create = kk => new Ik({
      typeName: cF.ZodAny,
      ...gk(kk)
    });
    class Qk extends Uk {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(kk) {
        return Lk(kk.data)
      }
    }
    Qk.create = kk => new Qk({
      typeName: cF.ZodUnknown,
      ...gk(kk)
    });
    class kF extends Uk {
      _parse(kk) {
        const Fk = this._getOrReturnCtx(kk);
        return Wk(Fk, {
          code: Jk.invalid_type,
          expected: sk.never,
          received: Fk.parsedType
        }), ik
      }
    }
    kF.create = kk => new kF({
      typeName: cF.ZodNever,
      ...gk(kk)
    });
    class FF extends Uk {
      _parse(kk) {
        if (this._getType(kk) !== sk.undefined) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.void,
            received: Fk.parsedType
          }), ik
        }
        return Lk(kk.data)
      }
    }
    FF.create = kk => new FF({
      typeName: cF.ZodVoid,
      ...gk(kk)
    });
    class BF extends Uk {
      _parse(kk) {
        const {
          ctx: Fk,
          status: Bk
        } = this._processInputParams(kk), Rk = this._def;
        if (Fk.parsedType !== sk.array) return Wk(Fk, {
          code: Jk.invalid_type,
          expected: sk.array,
          received: Fk.parsedType
        }), ik;
        if (null !== Rk.exactLength) {
          const kk = Fk.data.length > Rk.exactLength.value,
            tk = Fk.data.length < Rk.exactLength.value;
          (kk || tk) && (Wk(Fk, {
            code: kk ? Jk.too_big : Jk.too_small,
            minimum: tk ? Rk.exactLength.value : void 0,
            maximum: kk ? Rk.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Rk.exactLength.message
          }), Bk.Xy())
        }
        if (null !== Rk.minLength && Fk.data.length < Rk.minLength.value && (Wk(Fk, {
            code: Jk.too_small,
            minimum: Rk.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Rk.minLength.message
          }), Bk.Xy()), null !== Rk.maxLength && Fk.data.length > Rk.maxLength.value && (Wk(Fk, {
            code: Jk.too_big,
            maximum: Rk.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Rk.maxLength.message
          }), Bk.Xy()), Fk.common.async) return Promise.all([...Fk.data].map(((kk, Bk) => Rk.type._parseAsync(new uk(Fk, kk, Fk.path, Bk))))).then((kk => vk.mergeArray(Bk, kk)));
        const tk = [...Fk.data].map(((kk, Bk) => Rk.type._parseSync(new uk(Fk, kk, Fk.path, Bk))));
        return vk.mergeArray(Bk, tk)
      }
      get element() {
        return this._def.type
      }
      min(kk, Fk) {
        return new BF({
          ...this._def,
          minLength: {
            value: kk,
            message: Hk.toString(Fk)
          }
        })
      }
      max(kk, Fk) {
        return new BF({
          ...this._def,
          maxLength: {
            value: kk,
            message: Hk.toString(Fk)
          }
        })
      }
      length(kk, Fk) {
        return new BF({
          ...this._def,
          exactLength: {
            value: kk,
            message: Hk.toString(Fk)
          }
        })
      }
      nonempty(kk) {
        return this.min(1, kk)
      }
    }

    function RF(kk) {
      if (kk instanceof tF) {
        const Fk = {};
        for (const Bk in kk.shape) {
          const Rk = kk.shape[Bk];
          Fk[Bk] = oF.create(RF(Rk))
        }
        return new tF({
          ...kk._def,
          shape: () => Fk
        })
      }
      return kk instanceof BF ? new BF({
        ...kk._def,
        type: RF(kk.element)
      }) : kk instanceof oF ? oF.create(RF(kk.unwrap())) : kk instanceof LF ? LF.create(RF(kk.unwrap())) : kk instanceof sF ? sF.create(kk.items.map((kk => RF(kk)))) : kk
    }
    BF.create = (kk, Fk) => new BF({
      type: kk,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: cF.ZodArray,
      ...gk(Fk)
    });
    class tF extends Uk {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const kk = this._def.shape(),
          Fk = bk.objectKeys(kk);
        return this._cached = {
          shape: kk,
          keys: Fk
        }
      }
      _parse(kk) {
        if (this._getType(kk) !== sk.object) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.object,
            received: Fk.parsedType
          }), ik
        }
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk), {
          shape: Rk,
          keys: tk
        } = this._getCached(), ak = [];
        if (!(this._def.catchall instanceof kF && "strip" === this._def.unknownKeys))
          for (const bk in Bk.data) tk.includes(bk) || ak.push(bk);
        const Xk = [];
        for (const bk of tk) {
          const kk = Rk[bk],
            Fk = Bk.data[bk];
          Xk.push({
            key: {
              status: "valid",
              value: bk
            },
            value: kk._parse(new uk(Bk, Fk, Bk.path, bk)),
            alwaysSet: bk in Bk.data
          })
        }
        if (this._def.catchall instanceof kF) {
          const kk = this._def.unknownKeys;
          if ("passthrough" === kk)
            for (const Fk of ak) Xk.push({
              key: {
                status: "valid",
                value: Fk
              },
              value: {
                status: "valid",
                value: Bk.data[Fk]
              }
            });
          else if ("strict" === kk) ak.length > 0 && (Wk(Bk, {
            code: Jk.unrecognized_keys,
            keys: ak
          }), Fk.Xy());
          else if ("strip" !== kk) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const kk = this._def.catchall;
          for (const Fk of ak) {
            const Rk = Bk.data[Fk];
            Xk.push({
              key: {
                status: "valid",
                value: Fk
              },
              value: kk._parse(new uk(Bk, Rk, Bk.path, Fk)),
              alwaysSet: Fk in Bk.data
            })
          }
        }
        return Bk.common.async ? Promise.resolve().then((async () => {
          const kk = [];
          for (const Fk of Xk) {
            const Bk = await Fk.key;
            kk.push({
              key: Bk,
              value: await Fk.value,
              alwaysSet: Fk.alwaysSet
            })
          }
          return kk
        })).then((kk => vk.mergeObjectSync(Fk, kk))) : vk.mergeObjectSync(Fk, Xk)
      }
      get shape() {
        return this._def.shape()
      }
      strict(kk) {
        return Hk.errToObj, new tF({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== kk ? {
            errorMap: (Fk, Bk) => {
              var Rk, tk, ak, Xk;
              const bk = null !== (ak = null === (tk = (Rk = this._def).errorMap) || void 0 === tk ? void 0 : tk.call(Rk, Fk, Bk).message) && void 0 !== ak ? ak : Bk.defaultError;
              return "unrecognized_keys" === Fk.code ? {
                message: null !== (Xk = Hk.errToObj(kk).message) && void 0 !== Xk ? Xk : bk
              } : {
                message: bk
              }
            }
          } : {}
        })
      }
      strip() {
        return new tF({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new tF({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(kk) {
        return new tF({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...kk
          })
        })
      }
      merge(kk) {
        return new tF({
          unknownKeys: kk._def.unknownKeys,
          catchall: kk._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...kk._def.shape()
          }),
          typeName: cF.ZodObject
        })
      }
      setKey(kk, Fk) {
        return this.augment({
          [kk]: Fk
        })
      }
      catchall(kk) {
        return new tF({
          ...this._def,
          catchall: kk
        })
      }
      AA(kk) {
        const Fk = {};
        return bk.objectKeys(kk).forEach((Bk => {
          kk[Bk] && this.shape[Bk] && (Fk[Bk] = this.shape[Bk])
        })), new tF({
          ...this._def,
          shape: () => Fk
        })
      }
      omit(kk) {
        const Fk = {};
        return bk.objectKeys(this.shape).forEach((Bk => {
          kk[Bk] || (Fk[Bk] = this.shape[Bk])
        })), new tF({
          ...this._def,
          shape: () => Fk
        })
      }
      deepPartial() {
        return RF(this)
      }
      partial(kk) {
        const Fk = {};
        return bk.objectKeys(this.shape).forEach((Bk => {
          const Rk = this.shape[Bk];
          kk && !kk[Bk] ? Fk[Bk] = Rk : Fk[Bk] = Rk.optional()
        })), new tF({
          ...this._def,
          shape: () => Fk
        })
      }
      required(kk) {
        const Fk = {};
        return bk.objectKeys(this.shape).forEach((Bk => {
          if (kk && !kk[Bk]) Fk[Bk] = this.shape[Bk];
          else {
            let kk = this.shape[Bk];
            for (; kk instanceof oF;) kk = kk._def.innerType;
            Fk[Bk] = kk
          }
        })), new tF({
          ...this._def,
          shape: () => Fk
        })
      }
      keyof() {
        return mF(bk.objectKeys(this.shape))
      }
    }
    tF.create = (kk, Fk) => new tF({
      shape: () => kk,
      unknownKeys: "strip",
      catchall: kF.create(),
      typeName: cF.ZodObject,
      ...gk(Fk)
    }), tF.strictCreate = (kk, Fk) => new tF({
      shape: () => kk,
      unknownKeys: "strict",
      catchall: kF.create(),
      typeName: cF.ZodObject,
      ...gk(Fk)
    }), tF.lazycreate = (kk, Fk) => new tF({
      shape: kk,
      unknownKeys: "strip",
      catchall: kF.create(),
      typeName: cF.ZodObject,
      ...gk(Fk)
    });
    class aF extends Uk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk), Bk = this._def.options;
        if (Fk.common.async) return Promise.all(Bk.map((async kk => {
          const Bk = {
            ...Fk,
            common: {
              ...Fk.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await kk._parseAsync({
              data: Fk.data,
              path: Fk.path,
              parent: Bk
            }),
            ctx: Bk
          }
        }))).then((function(kk) {
          for (const Fk of kk)
            if ("valid" === Fk.result.status) return Fk.result;
          for (const Rk of kk)
            if ("Xy" === Rk.result.status) return Fk.common.issues.push(...Rk.ctx.common.issues), Rk.result;
          const Bk = kk.map((kk => new Ak(kk.ctx.common.issues)));
          return Wk(Fk, {
            code: Jk.invalid_union,
            unionErrors: Bk
          }), ik
        }));
        {
          let kk;
          const Rk = [];
          for (const ak of Bk) {
            const Bk = {
                ...Fk,
                common: {
                  ...Fk.common,
                  issues: []
                },
                parent: null
              },
              tk = ak._parseSync({
                data: Fk.data,
                path: Fk.path,
                parent: Bk
              });
            if ("valid" === tk.status) return tk;
            "Xy" !== tk.status || kk || (kk = {
              result: tk,
              ctx: Bk
            }), Bk.common.issues.length && Rk.push(Bk.common.issues)
          }
          if (kk) return Fk.common.issues.push(...kk.ctx.common.issues), kk.result;
          const tk = Rk.map((kk => new Ak(kk)));
          return Wk(Fk, {
            code: Jk.invalid_union,
            unionErrors: tk
          }), ik
        }
      }
      get options() {
        return this._def.options
      }
    }
    aF.create = (kk, Fk) => new aF({
      options: kk,
      typeName: cF.ZodUnion,
      ...gk(Fk)
    });
    const XF = kk => kk instanceof yF ? XF(kk.schema) : kk instanceof YF ? XF(kk.innerType()) : kk instanceof fF ? [kk.value] : kk instanceof WF ? kk.options : kk instanceof vF ? Object.keys(kk.enum) : kk instanceof OF ? XF(kk._def.innerType) : kk instanceof lk ? [void 0] : kk instanceof nk ? [null] : null;
    class bF extends Uk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        if (Fk.parsedType !== sk.object) return Wk(Fk, {
          code: Jk.invalid_type,
          expected: sk.object,
          received: Fk.parsedType
        }), ik;
        const Bk = this.discriminator,
          Rk = Fk.data[Bk],
          tk = this.optionsMap.get(Rk);
        return tk ? Fk.common.async ? tk._parseAsync({
          data: Fk.data,
          path: Fk.path,
          parent: Fk
        }) : tk._parseSync({
          data: Fk.data,
          path: Fk.path,
          parent: Fk
        }) : (Wk(Fk, {
          code: Jk.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Bk]
        }), ik)
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
      static create(kk, Fk, Bk) {
        const Rk = new Map;
        for (const tk of Fk) {
          const Fk = XF(tk.shape[kk]);
          if (!Fk) throw new Error(`A discriminator value for key \`${kk}\` could not be extracted from all schema options`);
          for (const Bk of Fk) {
            if (Rk.has(Bk)) throw new Error(`Discriminator property ${String(kk)} has duplicate value ${String(Bk)}`);
            Rk.set(Bk, tk)
          }
        }
        return new bF({
          typeName: cF.ZodDiscriminatedUnion,
          discriminator: kk,
          options: Fk,
          optionsMap: Rk,
          ...gk(Bk)
        })
      }
    }

    function wF(kk, Fk) {
      const Bk = Vk(kk),
        Rk = Vk(Fk);
      if (kk === Fk) return {
        valid: !0,
        data: kk
      };
      if (Bk === sk.object && Rk === sk.object) {
        const Bk = bk.objectKeys(Fk),
          Rk = bk.objectKeys(kk).filter((kk => -1 !== Bk.indexOf(kk))),
          tk = {
            ...kk,
            ...Fk
          };
        for (const ak of Rk) {
          const Bk = wF(kk[ak], Fk[ak]);
          if (!Bk.valid) return {
            valid: !1
          };
          tk[ak] = Bk.data
        }
        return {
          valid: !0,
          data: tk
        }
      }
      if (Bk === sk.array && Rk === sk.array) {
        if (kk.length !== Fk.length) return {
          valid: !1
        };
        const Bk = [];
        for (let Rk = 0; Rk < kk.length; Rk++) {
          const tk = wF(kk[Rk], Fk[Rk]);
          if (!tk.valid) return {
            valid: !1
          };
          Bk.push(tk.data)
        }
        return {
          valid: !0,
          data: Bk
        }
      }
      return Bk === sk.date && Rk === sk.date && +kk === +Fk ? {
        valid: !0,
        data: kk
      } : {
        valid: !1
      }
    }
    class dF extends Uk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk), Rk = (kk, Rk) => {
          if (Ok(kk) || Ok(Rk)) return ik;
          const tk = wF(kk.value, Rk.value);
          return tk.valid ? ((Ek(kk) || Ek(Rk)) && Fk.Xy(), {
            status: Fk.value,
            value: tk.data
          }) : (Wk(Bk, {
            code: Jk.invalid_intersection_types
          }), ik)
        };
        return Bk.common.async ? Promise.all([this._def.left._parseAsync({
          data: Bk.data,
          path: Bk.path,
          parent: Bk
        }), this._def.right._parseAsync({
          data: Bk.data,
          path: Bk.path,
          parent: Bk
        })]).then((kk => {
          let [Fk, Bk] = kk;
          return Rk(Fk, Bk)
        })) : Rk(this._def.left._parseSync({
          data: Bk.data,
          path: Bk.path,
          parent: Bk
        }), this._def.right._parseSync({
          data: Bk.data,
          path: Bk.path,
          parent: Bk
        }))
      }
    }
    dF.create = (kk, Fk, Bk) => new dF({
      left: kk,
      right: Fk,
      typeName: cF.ZodIntersection,
      ...gk(Bk)
    });
    class sF extends Uk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk);
        if (Bk.parsedType !== sk.array) return Wk(Bk, {
          code: Jk.invalid_type,
          expected: sk.array,
          received: Bk.parsedType
        }), ik;
        if (Bk.data.length < this._def.items.length) return Wk(Bk, {
          code: Jk.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), ik;
        !this._def.rest && Bk.data.length > this._def.items.length && (Wk(Bk, {
          code: Jk.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Fk.Xy());
        const Rk = [...Bk.data].map(((kk, Fk) => {
          const Rk = this._def.items[Fk] || this._def.rest;
          return Rk ? Rk._parse(new uk(Bk, kk, Bk.path, Fk)) : null
        })).filter((kk => !!kk));
        return Bk.common.async ? Promise.all(Rk).then((kk => vk.mergeArray(Fk, kk))) : vk.mergeArray(Fk, Rk)
      }
      get items() {
        return this._def.items
      }
      rest(kk) {
        return new sF({
          ...this._def,
          rest: kk
        })
      }
    }
    sF.create = (kk, Fk) => {
      if (!Array.isArray(kk)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new sF({
        items: kk,
        typeName: cF.ZodTuple,
        rest: null,
        ...gk(Fk)
      })
    };
    class VF extends Uk {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk);
        if (Bk.parsedType !== sk.object) return Wk(Bk, {
          code: Jk.invalid_type,
          expected: sk.object,
          received: Bk.parsedType
        }), ik;
        const Rk = [],
          tk = this._def.keyType,
          ak = this._def.valueType;
        for (const Xk in Bk.data) Rk.push({
          key: tk._parse(new uk(Bk, Xk, Bk.path, Xk)),
          value: ak._parse(new uk(Bk, Bk.data[Xk], Bk.path, Xk))
        });
        return Bk.common.async ? vk.mergeObjectAsync(Fk, Rk) : vk.mergeObjectSync(Fk, Rk)
      }
      get element() {
        return this._def.valueType
      }
      static create(kk, Fk, Bk) {
        return new VF(Fk instanceof Uk ? {
          keyType: kk,
          valueType: Fk,
          typeName: cF.ZodRecord,
          ...gk(Bk)
        } : {
          keyType: qk.create(),
          valueType: kk,
          typeName: cF.ZodRecord,
          ...gk(Fk)
        })
      }
    }
    class JF extends Uk {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk);
        if (Bk.parsedType !== sk.map) return Wk(Bk, {
          code: Jk.invalid_type,
          expected: sk.map,
          received: Bk.parsedType
        }), ik;
        const Rk = this._def.keyType,
          tk = this._def.valueType,
          ak = [...Bk.data.entries()].map(((kk, Fk) => {
            let [ak, Xk] = kk;
            return {
              key: Rk._parse(new uk(Bk, ak, Bk.path, [Fk, "key"])),
              value: tk._parse(new uk(Bk, Xk, Bk.path, [Fk, "value"]))
            }
          }));
        if (Bk.common.async) {
          const kk = new Map;
          return Promise.resolve().then((async () => {
            for (const Bk of ak) {
              const Rk = await Bk.key,
                tk = await Bk.value;
              if ("aborted" === Rk.status || "aborted" === tk.status) return ik;
              "Xy" !== Rk.status && "Xy" !== tk.status || Fk.Xy(), kk.set(Rk.value, tk.value)
            }
            return {
              status: Fk.value,
              value: kk
            }
          }))
        } {
          const kk = new Map;
          for (const Bk of ak) {
            const Rk = Bk.key,
              tk = Bk.value;
            if ("aborted" === Rk.status || "aborted" === tk.status) return ik;
            "Xy" !== Rk.status && "Xy" !== tk.status || Fk.Xy(), kk.set(Rk.value, tk.value)
          }
          return {
            status: Fk.value,
            value: kk
          }
        }
      }
    }
    JF.create = (kk, Fk, Bk) => new JF({
      valueType: Fk,
      keyType: kk,
      typeName: cF.ZodMap,
      ...gk(Bk)
    });
    class AF extends Uk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk);
        if (Bk.parsedType !== sk.set) return Wk(Bk, {
          code: Jk.invalid_type,
          expected: sk.set,
          received: Bk.parsedType
        }), ik;
        const Rk = this._def;
        null !== Rk.minSize && Bk.data.size < Rk.minSize.value && (Wk(Bk, {
          code: Jk.too_small,
          minimum: Rk.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Rk.minSize.message
        }), Fk.Xy()), null !== Rk.maxSize && Bk.data.size > Rk.maxSize.value && (Wk(Bk, {
          code: Jk.too_big,
          maximum: Rk.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Rk.maxSize.message
        }), Fk.Xy());
        const tk = this._def.valueType;

        function ak(kk) {
          const Bk = new Set;
          for (const Rk of kk) {
            if ("aborted" === Rk.status) return ik;
            "Xy" === Rk.status && Fk.Xy(), Bk.add(Rk.value)
          }
          return {
            status: Fk.value,
            value: Bk
          }
        }
        const Xk = [...Bk.data.values()].map(((kk, Fk) => tk._parse(new uk(Bk, kk, Bk.path, Fk))));
        return Bk.common.async ? Promise.all(Xk).then((kk => ak(kk))) : ak(Xk)
      }
      min(kk, Fk) {
        return new AF({
          ...this._def,
          minSize: {
            value: kk,
            message: Hk.toString(Fk)
          }
        })
      }
      max(kk, Fk) {
        return new AF({
          ...this._def,
          maxSize: {
            value: kk,
            message: Hk.toString(Fk)
          }
        })
      }
      size(kk, Fk) {
        return this.min(kk, Fk).max(kk, Fk)
      }
      nonempty(kk) {
        return this.min(1, kk)
      }
    }
    AF.create = (kk, Fk) => new AF({
      valueType: kk,
      minSize: null,
      maxSize: null,
      typeName: cF.ZodSet,
      ...gk(Fk)
    });
    class eF extends Uk {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        if (Fk.parsedType !== sk.function) return Wk(Fk, {
          code: Jk.invalid_type,
          expected: sk.function,
          received: Fk.parsedType
        }), ik;

        function Bk(kk, Bk) {
          return mk({
            data: kk,
            path: Fk.path,
            errorMaps: [Fk.common.contextualErrorMap, Fk.schemaErrorMap, fk(), ek].filter((kk => !!kk)),
            issueData: {
              code: Jk.invalid_arguments,
              argumentsError: Bk
            }
          })
        }

        function Rk(kk, Bk) {
          return mk({
            data: kk,
            path: Fk.path,
            errorMaps: [Fk.common.contextualErrorMap, Fk.schemaErrorMap, fk(), ek].filter((kk => !!kk)),
            issueData: {
              code: Jk.invalid_return_type,
              returnTypeError: Bk
            }
          })
        }
        const tk = {
            errorMap: Fk.common.contextualErrorMap
          },
          ak = Fk.data;
        if (this._def.returns instanceof iF) {
          const kk = this;
          return Lk((async function() {
            for (var Fk = arguments.length, Xk = new Array(Fk), bk = 0; bk < Fk; bk++) Xk[bk] = arguments[bk];
            const wk = new Ak([]),
              dk = await kk._def.args.parseAsync(Xk, tk).catch((kk => {
                throw wk.addIssue(Bk(Xk, kk)), wk
              })),
              sk = await Reflect.apply(ak, this, dk);
            return await kk._def.returns._def.type.parseAsync(sk, tk).catch((kk => {
              throw wk.addIssue(Rk(sk, kk)), wk
            }))
          }))
        } {
          const kk = this;
          return Lk((function() {
            for (var Fk = arguments.length, Xk = new Array(Fk), bk = 0; bk < Fk; bk++) Xk[bk] = arguments[bk];
            const wk = kk._def.args.safeParse(Xk, tk);
            if (!wk.success) throw new Ak([Bk(Xk, wk.error)]);
            const dk = Reflect.apply(ak, this, wk.data),
              sk = kk._def.returns.safeParse(dk, tk);
            if (!sk.success) throw new Ak([Rk(dk, sk.error)]);
            return sk.data
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
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return new eF({
          ...this._def,
          args: sF.create(Fk).rest(Qk.create())
        })
      }
      returns(kk) {
        return new eF({
          ...this._def,
          returns: kk
        })
      }
      implement(kk) {
        return this.parse(kk)
      }
      strictImplement(kk) {
        return this.parse(kk)
      }
      static create(kk, Fk, Bk) {
        return new eF({
          args: kk || sF.create([]).rest(Qk.create()),
          returns: Fk || Qk.create(),
          typeName: cF.ZodFunction,
          ...gk(Bk)
        })
      }
    }
    class yF extends Uk {
      get schema() {
        return this._def.getter()
      }
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        return this._def.getter()._parse({
          data: Fk.data,
          path: Fk.path,
          parent: Fk
        })
      }
    }
    yF.create = (kk, Fk) => new yF({
      getter: kk,
      typeName: cF.ZodLazy,
      ...gk(Fk)
    });
    class fF extends Uk {
      _parse(kk) {
        if (kk.data !== this._def.value) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            received: Fk.data,
            code: Jk.invalid_literal,
            expected: this._def.value
          }), ik
        }
        return {
          status: "valid",
          value: kk.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function mF(kk, Fk) {
      return new WF({
        values: kk,
        typeName: cF.ZodEnum,
        ...gk(Fk)
      })
    }
    fF.create = (kk, Fk) => new fF({
      value: kk,
      typeName: cF.ZodLiteral,
      ...gk(Fk)
    });
    class WF extends Uk {
      _parse(kk) {
        if ("string" !== typeof kk.data) {
          const Fk = this._getOrReturnCtx(kk),
            Bk = this._def.values;
          return Wk(Fk, {
            expected: bk.joinValues(Bk),
            received: Fk.parsedType,
            code: Jk.invalid_type
          }), ik
        }
        if (-1 === this._def.values.indexOf(kk.data)) {
          const Fk = this._getOrReturnCtx(kk),
            Bk = this._def.values;
          return Wk(Fk, {
            received: Fk.data,
            code: Jk.invalid_enum_value,
            options: Bk
          }), ik
        }
        return Lk(kk.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const kk = {};
        for (const Fk of this._def.values) kk[Fk] = Fk;
        return kk
      }
      get Values() {
        const kk = {};
        for (const Fk of this._def.values) kk[Fk] = Fk;
        return kk
      }
      get Enum() {
        const kk = {};
        for (const Fk of this._def.values) kk[Fk] = Fk;
        return kk
      }
      extract(kk) {
        return WF.create(kk)
      }
      exclude(kk) {
        return WF.create(this.options.filter((Fk => !kk.includes(Fk))))
      }
    }
    WF.create = mF;
    class vF extends Uk {
      _parse(kk) {
        const Fk = bk.getValidEnumValues(this._def.values),
          Bk = this._getOrReturnCtx(kk);
        if (Bk.parsedType !== sk.string && Bk.parsedType !== sk.number) {
          const kk = bk.objectValues(Fk);
          return Wk(Bk, {
            expected: bk.joinValues(kk),
            received: Bk.parsedType,
            code: Jk.invalid_type
          }), ik
        }
        if (-1 === Fk.indexOf(kk.data)) {
          const kk = bk.objectValues(Fk);
          return Wk(Bk, {
            received: Bk.data,
            code: Jk.invalid_enum_value,
            options: kk
          }), ik
        }
        return Lk(kk.data)
      }
      get enum() {
        return this._def.values
      }
    }
    vF.create = (kk, Fk) => new vF({
      values: kk,
      typeName: cF.ZodNativeEnum,
      ...gk(Fk)
    });
    class iF extends Uk {
      unwrap() {
        return this._def.type
      }
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        if (Fk.parsedType !== sk.promise && !1 === Fk.common.async) return Wk(Fk, {
          code: Jk.invalid_type,
          expected: sk.promise,
          received: Fk.parsedType
        }), ik;
        const Bk = Fk.parsedType === sk.promise ? Fk.data : Promise.resolve(Fk.data);
        return Lk(Bk.then((kk => this._def.type.parseAsync(kk, {
          path: Fk.path,
          errorMap: Fk.common.contextualErrorMap
        }))))
      }
    }
    iF.create = (kk, Fk) => new iF({
      type: kk,
      typeName: cF.ZodPromise,
      ...gk(Fk)
    });
    class YF extends Uk {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === cF.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk), Rk = this._def.effect || null, tk = {
          addIssue: kk => {
            Wk(Bk, kk), kk.fatal ? Fk.abort() : Fk.Xy()
          },
          get path() {
            return Bk.path
          }
        };
        if (tk.addIssue = tk.addIssue.bind(tk), "preprocess" === Rk.type) {
          const kk = Rk.transform(Bk.data, tk);
          return Bk.common.issues.length ? {
            status: "Xy",
            value: Bk.data
          } : Bk.common.async ? Promise.resolve(kk).then((kk => this._def.schema._parseAsync({
            data: kk,
            path: Bk.path,
            parent: Bk
          }))) : this._def.schema._parseSync({
            data: kk,
            path: Bk.path,
            parent: Bk
          })
        }
        if ("refinement" === Rk.type) {
          const kk = kk => {
            const Fk = Rk.refinement(kk, tk);
            if (Bk.common.async) return Promise.resolve(Fk);
            if (Fk instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return kk
          };
          if (!1 === Bk.common.async) {
            const Rk = this._def.schema._parseSync({
              data: Bk.data,
              path: Bk.path,
              parent: Bk
            });
            return "aborted" === Rk.status ? ik : ("Xy" === Rk.status && Fk.Xy(), kk(Rk.value), {
              status: Fk.value,
              value: Rk.value
            })
          }
          return this._def.schema._parseAsync({
            data: Bk.data,
            path: Bk.path,
            parent: Bk
          }).then((Bk => "aborted" === Bk.status ? ik : ("Xy" === Bk.status && Fk.Xy(), kk(Bk.value).then((() => ({
            status: Fk.value,
            value: Bk.value
          }))))))
        }
        if ("transform" === Rk.type) {
          if (!1 === Bk.common.async) {
            const kk = this._def.schema._parseSync({
              data: Bk.data,
              path: Bk.path,
              parent: Bk
            });
            if (!Sk(kk)) return kk;
            const ak = Rk.transform(kk.value, tk);
            if (ak instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Fk.value,
              value: ak
            }
          }
          return this._def.schema._parseAsync({
            data: Bk.data,
            path: Bk.path,
            parent: Bk
          }).then((kk => Sk(kk) ? Promise.resolve(Rk.transform(kk.value, tk)).then((kk => ({
            status: Fk.value,
            value: kk
          }))) : kk))
        }
        bk.assertNever(Rk)
      }
    }
    YF.create = (kk, Fk, Bk) => new YF({
      schema: kk,
      typeName: cF.ZodEffects,
      effect: Fk,
      ...gk(Bk)
    }), YF.createWithPreprocess = (kk, Fk, Bk) => new YF({
      schema: Fk,
      effect: {
        type: "preprocess",
        transform: kk
      },
      typeName: cF.ZodEffects,
      ...gk(Bk)
    });
    class oF extends Uk {
      _parse(kk) {
        return this._getType(kk) === sk.undefined ? Lk(void 0) : this._def.innerType._parse(kk)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    oF.create = (kk, Fk) => new oF({
      innerType: kk,
      typeName: cF.ZodOptional,
      ...gk(Fk)
    });
    class LF extends Uk {
      _parse(kk) {
        return this._getType(kk) === sk.null ? Lk(null) : this._def.innerType._parse(kk)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    LF.create = (kk, Fk) => new LF({
      innerType: kk,
      typeName: cF.ZodNullable,
      ...gk(Fk)
    });
    class OF extends Uk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        let Bk = Fk.data;
        return Fk.parsedType === sk.undefined && (Bk = this._def.defaultValue()), this._def.innerType._parse({
          data: Bk,
          path: Fk.path,
          parent: Fk
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    OF.create = (kk, Fk) => new OF({
      innerType: kk,
      typeName: cF.ZodDefault,
      defaultValue: "function" === typeof Fk.default ? Fk.default : () => Fk.default,
      ...gk(Fk)
    });
    class EF extends Uk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk), Bk = {
          ...Fk,
          common: {
            ...Fk.common,
            issues: []
          }
        }, Rk = this._def.innerType._parse({
          data: Bk.data,
          path: Bk.path,
          parent: {
            ...Bk
          }
        });
        return Nk(Rk) ? Rk.then((kk => ({
          status: "valid",
          value: "valid" === kk.status ? kk.value : this._def.catchValue({
            get error() {
              return new Ak(Bk.common.issues)
            },
            input: Bk.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Rk.status ? Rk.value : this._def.catchValue({
            get error() {
              return new Ak(Bk.common.issues)
            },
            input: Bk.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    EF.create = (kk, Fk) => new EF({
      innerType: kk,
      typeName: cF.ZodCatch,
      catchValue: "function" === typeof Fk.catch ? Fk.catch : () => Fk.catch,
      ...gk(Fk)
    });
    class SF extends Uk {
      _parse(kk) {
        if (this._getType(kk) !== sk.nan) {
          const Fk = this._getOrReturnCtx(kk);
          return Wk(Fk, {
            code: Jk.invalid_type,
            expected: sk.nan,
            received: Fk.parsedType
          }), ik
        }
        return {
          status: "valid",
          value: kk.data
        }
      }
    }
    SF.create = kk => new SF({
      typeName: cF.ZodNaN,
      ...gk(kk)
    });
    const NF = Symbol("zod_brand");
    class HF extends Uk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk), Bk = Fk.data;
        return this._def.type._parse({
          data: Bk,
          path: Fk.path,
          parent: Fk
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class uF extends Uk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Bk
        } = this._processInputParams(kk);
        if (Bk.common.async) {
          return (async () => {
            const kk = await this._def.in._parseAsync({
              data: Bk.data,
              path: Bk.path,
              parent: Bk
            });
            return "aborted" === kk.status ? ik : "Xy" === kk.status ? (Fk.Xy(), Yk(kk.value)) : this._def.out._parseAsync({
              data: kk.value,
              path: Bk.path,
              parent: Bk
            })
          })()
        } {
          const kk = this._def.in._parseSync({
            data: Bk.data,
            path: Bk.path,
            parent: Bk
          });
          return "aborted" === kk.status ? ik : "Xy" === kk.status ? (Fk.Xy(), {
            status: "Xy",
            value: kk.value
          }) : this._def.out._parseSync({
            data: kk.value,
            path: Bk.path,
            parent: Bk
          })
        }
      }
      static create(kk, Fk) {
        return new uF({
          in: kk,
          out: Fk,
          typeName: cF.ZodPipeline
        })
      }
    }
    class MF extends Uk {
      _parse(kk) {
        const Fk = this._def.innerType._parse(kk);
        return Sk(Fk) && (Fk.value = Object.freeze(Fk.value)), Fk
      }
    }
    MF.create = (kk, Fk) => new MF({
      innerType: kk,
      typeName: cF.ZodReadonly,
      ...gk(Fk)
    });
    const gF = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        return kk ? Ik.create().superRefine(((Rk, tk) => {
          var ak, Xk;
          if (!kk(Rk)) {
            const kk = "function" === typeof Fk ? Fk(Rk) : "string" === typeof Fk ? {
                message: Fk
              } : Fk,
              bk = null === (Xk = null !== (ak = kk.fatal) && void 0 !== ak ? ak : Bk) || void 0 === Xk || Xk,
              wk = "string" === typeof kk ? {
                message: kk
              } : kk;
            tk.addIssue({
              code: "custom",
              ...wk,
              fatal: bk
            })
          }
        })) : Ik.create()
      },
      UF = {
        object: tF.lazycreate
      };
    var cF;
    ! function(kk) {
      kk.ZodString = "ZodString", kk.ZodNumber = "ZodNumber", kk.ZodNaN = "ZodNaN", kk.ZodBigInt = "ZodBigInt", kk.ZodBoolean = "ZodBoolean", kk.ZodDate = "ZodDate", kk.ZodSymbol = "ZodSymbol", kk.ZodUndefined = "ZodUndefined", kk.ZodNull = "ZodNull", kk.ZodAny = "ZodAny", kk.ZodUnknown = "ZodUnknown", kk.ZodNever = "ZodNever", kk.ZodVoid = "ZodVoid", kk.ZodArray = "ZodArray", kk.ZodObject = "ZodObject", kk.ZodUnion = "ZodUnion", kk.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", kk.ZodIntersection = "ZodIntersection", kk.ZodTuple = "ZodTuple", kk.ZodRecord = "ZodRecord", kk.ZodMap = "ZodMap", kk.ZodSet = "ZodSet", kk.ZodFunction = "ZodFunction", kk.ZodLazy = "ZodLazy", kk.ZodLiteral = "ZodLiteral", kk.ZodEnum = "ZodEnum", kk.ZodEffects = "ZodEffects", kk.ZodNativeEnum = "ZodNativeEnum", kk.ZodOptional = "ZodOptional", kk.ZodNullable = "ZodNullable", kk.ZodDefault = "ZodDefault", kk.ZodCatch = "ZodCatch", kk.ZodPromise = "ZodPromise", kk.ZodBranded = "ZodBranded", kk.ZodPipeline = "ZodPipeline", kk.ZodReadonly = "ZodReadonly"
    }(cF || (cF = {}));
    const GF = qk.create,
      TF = Zk.create,
      rF = SF.create,
      DF = pk.create,
      zF = Kk.create,
      PF = xk.create,
      hF = jk.create,
      qF = lk.create,
      CF = nk.create,
      ZF = Ik.create,
      pF = Qk.create,
      KF = kF.create,
      xF = FF.create,
      jF = BF.create,
      lF = tF.create,
      nF = tF.strictCreate,
      IF = aF.create,
      QF = bF.create,
      kB = dF.create,
      FB = sF.create,
      BB = VF.create,
      RB = JF.create,
      tB = AF.create,
      aB = eF.create,
      XB = yF.create,
      bB = fF.create,
      wB = WF.create,
      dB = vF.create,
      sB = iF.create,
      VB = YF.create,
      JB = oF.create,
      AB = LF.create,
      eB = YF.createWithPreprocess,
      yB = uF.create,
      fB = {
        string: kk => qk.create({
          ...kk,
          coerce: !0
        }),
        number: kk => Zk.create({
          ...kk,
          coerce: !0
        }),
        boolean: kk => Kk.create({
          ...kk,
          coerce: !0
        }),
        bigint: kk => pk.create({
          ...kk,
          coerce: !0
        }),
        date: kk => xk.create({
          ...kk,
          coerce: !0
        })
      },
      mB = ik;
    var WB = Object.freeze({
        __proto__: null,
        defaultErrorMap: ek,
        setErrorMap: function(kk) {
          yk = kk
        },
        getErrorMap: fk,
        makeIssue: mk,
        EMPTY_PATH: [],
        addIssueToContext: Wk,
        ParseStatus: vk,
        INVALID: ik,
        DIRTY: Yk,
        OK: Lk,
        isAborted: Ok,
        isDirty: Ek,
        isValid: Sk,
        isAsync: Nk,
        get util() {
          return bk
        },
        get objectUtil() {
          return wk
        },
        ZodParsedType: sk,
        getParsedType: Vk,
        ZodType: Uk,
        ZodString: qk,
        ZodNumber: Zk,
        ZodBigInt: pk,
        ZodBoolean: Kk,
        ZodDate: xk,
        ZodSymbol: jk,
        ZodUndefined: lk,
        ZodNull: nk,
        ZodAny: Ik,
        ZodUnknown: Qk,
        ZodNever: kF,
        ZodVoid: FF,
        ZodArray: BF,
        ZodObject: tF,
        ZodUnion: aF,
        ZodDiscriminatedUnion: bF,
        ZodIntersection: dF,
        ZodTuple: sF,
        ZodRecord: VF,
        ZodMap: JF,
        ZodSet: AF,
        ZodFunction: eF,
        ZodLazy: yF,
        ZodLiteral: fF,
        ZodEnum: WF,
        ZodNativeEnum: vF,
        ZodPromise: iF,
        ZodEffects: YF,
        ZodTransformer: YF,
        ZodOptional: oF,
        ZodNullable: LF,
        ZodDefault: OF,
        ZodCatch: EF,
        ZodNaN: SF,
        BRAND: NF,
        ZodBranded: HF,
        ZodPipeline: uF,
        ZodReadonly: MF,
        custom: gF,
        Schema: Uk,
        ZodSchema: Uk,
        late: UF,
        get ZodFirstPartyTypeKind() {
          return cF
        },
        coerce: fB,
        any: ZF,
        array: jF,
        bigint: DF,
        boolean: zF,
        date: PF,
        discriminatedUnion: QF,
        effect: VB,
        enum: wB,
        function: aB,
        instanceof: function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${kk.name}`
          };
          return gF((Fk => Fk instanceof kk), Fk)
        },
        intersection: kB,
        lazy: XB,
        literal: bB,
        map: RB,
        nan: rF,
        nativeEnum: dB,
        never: KF,
        null: CF,
        nullable: AB,
        number: TF,
        object: lF,
        oboolean: () => zF().optional(),
        onumber: () => TF().optional(),
        optional: JB,
        ostring: () => GF().optional(),
        pipeline: yB,
        preprocess: eB,
        promise: sB,
        record: BB,
        set: tB,
        strictObject: nF,
        string: GF,
        symbol: hF,
        transformer: VB,
        tuple: FB,
        undefined: qF,
        union: IF,
        unknown: pF,
        void: xF,
        NEVER: mB,
        ZodIssueCode: Jk,
        quotelessJson: kk => JSON.stringify(kk, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Ak
      }),
      vB = {
        exports: {}
      };
    ! function(kk) {
      var Fk = function(kk) {
        var Bk = 1e7,
          Rk = 9007199254740992,
          tk = Jk(Rk),
          ak = "0123456789abcdefghijklmnopqrstuvwxyz",
          Xk = "function" === typeof BigInt;

        function bk(kk, Fk, Bk, Rk) {
          return "undefined" === typeof kk ? bk[0] : "undefined" !== typeof Fk && (10 !== +Fk || Bk) ? Kk(kk, Fk, Bk, Rk) : Ik(kk)
        }

        function wk(kk, Fk) {
          this.value = kk, this.sign = Fk, this.isSmall = !1
        }

        function dk(kk) {
          this.value = kk, this.sign = kk < 0, this.isSmall = !0
        }

        function sk(kk) {
          this.value = kk
        }

        function Vk(kk) {
          return -Rk < kk && kk < Rk
        }

        function Jk(kk) {
          return kk < 1e7 ? [kk] : kk < 1e14 ? [kk % 1e7, Math.floor(kk / 1e7)] : [kk % 1e7, Math.floor(kk / 1e7) % 1e7, Math.floor(kk / 1e14)]
        }

        function Ak(kk) {
          ek(kk);
          var Fk = kk.length;
          if (Fk < 4 && gk(kk, tk) < 0) switch (Fk) {
            case 0:
              return 0;
            case 1:
              return kk[0];
            case 2:
              return kk[0] + kk[1] * Bk;
            default:
              return kk[0] + (kk[1] + kk[2] * Bk) * Bk
          }
          return kk
        }

        function ek(kk) {
          for (var Fk = kk.length; 0 === kk[--Fk];);
          kk.length = Fk + 1
        }

        function yk(kk) {
          for (var Fk = new Array(kk), Bk = -1; ++Bk < kk;) Fk[Bk] = 0;
          return Fk
        }

        function fk(kk) {
          return kk > 0 ? Math.floor(kk) : Math.ceil(kk)
        }

        function mk(kk, Fk) {
          var Rk, tk, ak = kk.length,
            Xk = Fk.length,
            bk = new Array(ak),
            wk = 0,
            dk = Bk;
          for (tk = 0; tk < Xk; tk++) wk = (Rk = kk[tk] + Fk[tk] + wk) >= dk ? 1 : 0, bk[tk] = Rk - wk * dk;
          for (; tk < ak;) wk = (Rk = kk[tk] + wk) === dk ? 1 : 0, bk[tk++] = Rk - wk * dk;
          return wk > 0 && bk.push(wk), bk
        }

        function Wk(kk, Fk) {
          return kk.length >= Fk.length ? mk(kk, Fk) : mk(Fk, kk)
        }

        function vk(kk, Fk) {
          var Rk, tk, ak = kk.length,
            Xk = new Array(ak),
            bk = Bk;
          for (tk = 0; tk < ak; tk++) Rk = kk[tk] - bk + Fk, Fk = Math.floor(Rk / bk), Xk[tk] = Rk - Fk * bk, Fk += 1;
          for (; Fk > 0;) Xk[tk++] = Fk % bk, Fk = Math.floor(Fk / bk);
          return Xk
        }

        function ik(kk, Fk) {
          var Rk, tk, ak = kk.length,
            Xk = Fk.length,
            bk = new Array(ak),
            wk = 0,
            dk = Bk;
          for (Rk = 0; Rk < Xk; Rk++)(tk = kk[Rk] - wk - Fk[Rk]) < 0 ? (tk += dk, wk = 1) : wk = 0, bk[Rk] = tk;
          for (Rk = Xk; Rk < ak; Rk++) {
            if (!((tk = kk[Rk] - wk) < 0)) {
              bk[Rk++] = tk;
              break
            }
            tk += dk, bk[Rk] = tk
          }
          for (; Rk < ak; Rk++) bk[Rk] = kk[Rk];
          return ek(bk), bk
        }

        function Yk(kk, Fk, Rk) {
          var tk, ak, Xk = kk.length,
            bk = new Array(Xk),
            sk = -Fk,
            Vk = Bk;
          for (tk = 0; tk < Xk; tk++) ak = kk[tk] + sk, sk = Math.floor(ak / Vk), ak %= Vk, bk[tk] = ak < 0 ? ak + Vk : ak;
          return "number" === typeof(bk = Ak(bk)) ? (Rk && (bk = -bk), new dk(bk)) : new wk(bk, Rk)
        }

        function Lk(kk, Fk) {
          var Rk, tk, ak, Xk, bk = kk.length,
            wk = Fk.length,
            dk = yk(bk + wk),
            sk = Bk;
          for (ak = 0; ak < bk; ++ak) {
            Xk = kk[ak];
            for (var Vk = 0; Vk < wk; ++Vk) Rk = Xk * Fk[Vk] + dk[ak + Vk], tk = Math.floor(Rk / sk), dk[ak + Vk] = Rk - tk * sk, dk[ak + Vk + 1] += tk
          }
          return ek(dk), dk
        }

        function Ok(kk, Fk) {
          var Rk, tk, ak = kk.length,
            Xk = new Array(ak),
            bk = Bk,
            wk = 0;
          for (tk = 0; tk < ak; tk++) Rk = kk[tk] * Fk + wk, wk = Math.floor(Rk / bk), Xk[tk] = Rk - wk * bk;
          for (; wk > 0;) Xk[tk++] = wk % bk, wk = Math.floor(wk / bk);
          return Xk
        }

        function Ek(kk, Fk) {
          for (var Bk = []; Fk-- > 0;) Bk.push(0);
          return Bk.concat(kk)
        }

        function Sk(kk, Fk) {
          var Bk = Math.max(kk.length, Fk.length);
          if (Bk <= 30) return Lk(kk, Fk);
          Bk = Math.ceil(Bk / 2);
          var Rk = kk.slice(Bk),
            tk = kk.slice(0, Bk),
            ak = Fk.slice(Bk),
            Xk = Fk.slice(0, Bk),
            bk = Sk(tk, Xk),
            wk = Sk(Rk, ak),
            dk = Sk(Wk(tk, Rk), Wk(Xk, ak)),
            sk = Wk(Wk(bk, Ek(ik(ik(dk, bk), wk), Bk)), Ek(wk, 2 * Bk));
          return ek(sk), sk
        }

        function Nk(kk, Fk, Rk) {
          return new wk(kk < Bk ? Ok(Fk, kk) : Lk(Fk, Jk(kk)), Rk)
        }

        function Hk(kk) {
          var Fk, Rk, tk, ak, Xk = kk.length,
            bk = yk(Xk + Xk),
            wk = Bk;
          for (tk = 0; tk < Xk; tk++) {
            Rk = 0 - (ak = kk[tk]) * ak;
            for (var dk = tk; dk < Xk; dk++) Fk = ak * kk[dk] * 2 + bk[tk + dk] + Rk, Rk = Math.floor(Fk / wk), bk[tk + dk] = Fk - Rk * wk;
            bk[tk + Xk] = Rk
          }
          return ek(bk), bk
        }

        function uk(kk, Fk) {
          var Rk, tk, ak, Xk, bk = kk.length,
            wk = yk(bk),
            dk = Bk;
          for (ak = 0, Rk = bk - 1; Rk >= 0; --Rk) ak = (Xk = ak * dk + kk[Rk]) - (tk = fk(Xk / Fk)) * Fk, wk[Rk] = 0 | tk;
          return [wk, 0 | ak]
        }

        function Mk(kk, Fk) {
          var Rk, tk = Ik(Fk);
          if (Xk) return [new sk(kk.value / tk.value), new sk(kk.value % tk.value)];
          var ak, Vk = kk.value,
            mk = tk.value;
          if (0 === mk) throw new Error("Cannot divide by zero");
          if (kk.isSmall) return tk.isSmall ? [new dk(fk(Vk / mk)), new dk(Vk % mk)] : [bk[0], kk];
          if (tk.isSmall) {
            if (1 === mk) return [kk, bk[0]];
            if (-1 == mk) return [kk.bt(), bk[0]];
            var Wk = Math.abs(mk);
            if (Wk < Bk) {
              ak = Ak((Rk = uk(Vk, Wk))[0]);
              var vk = Rk[1];
              return kk.sign && (vk = -vk), "number" === typeof ak ? (kk.sign !== tk.sign && (ak = -ak), [new dk(ak), new dk(vk)]) : [new wk(ak, kk.sign !== tk.sign), new dk(vk)]
            }
            mk = Jk(Wk)
          }
          var Yk = gk(Vk, mk);
          if (-1 === Yk) return [bk[0], kk];
          if (0 === Yk) return [bk[kk.sign === tk.sign ? 1 : -1], bk[0]];
          Rk = Vk.length + mk.length <= 200 ? function(kk, Fk) {
            var Rk, tk, ak, Xk, bk, wk, dk, sk = kk.length,
              Vk = Fk.length,
              Jk = Bk,
              ek = yk(Fk.length),
              fk = Fk[Vk - 1],
              mk = Math.ceil(Jk / (2 * fk)),
              Wk = Ok(kk, mk),
              vk = Ok(Fk, mk);
            for (Wk.length <= sk && Wk.push(0), vk.push(0), fk = vk[Vk - 1], tk = sk - Vk; tk >= 0; tk--) {
              for (Rk = Jk - 1, Wk[tk + Vk] !== fk && (Rk = Math.floor((Wk[tk + Vk] * Jk + Wk[tk + Vk - 1]) / fk)), ak = 0, Xk = 0, wk = vk.length, bk = 0; bk < wk; bk++) ak += Rk * vk[bk], dk = Math.floor(ak / Jk), Xk += Wk[tk + bk] - (ak - dk * Jk), ak = dk, Xk < 0 ? (Wk[tk + bk] = Xk + Jk, Xk = -1) : (Wk[tk + bk] = Xk, Xk = 0);
              for (; 0 !== Xk;) {
                for (Rk -= 1, ak = 0, bk = 0; bk < wk; bk++)(ak += Wk[tk + bk] - Jk + vk[bk]) < 0 ? (Wk[tk + bk] = ak + Jk, ak = 0) : (Wk[tk + bk] = ak, ak = 1);
                Xk += ak
              }
              ek[tk] = Rk
            }
            return Wk = uk(Wk, mk)[0], [Ak(ek), Ak(Wk)]
          }(Vk, mk) : function(kk, Fk) {
            for (var Rk, tk, ak, Xk, bk, wk = kk.length, dk = Fk.length, sk = [], Vk = [], Jk = Bk; wk;)
              if (Vk.unshift(kk[--wk]), ek(Vk), gk(Vk, Fk) < 0) sk.push(0);
              else {
                ak = Vk[(tk = Vk.length) - 1] * Jk + Vk[tk - 2], Xk = Fk[dk - 1] * Jk + Fk[dk - 2], tk > dk && (ak = (ak + 1) * Jk), Rk = Math.ceil(ak / Xk);
                do {
                  if (gk(bk = Ok(Fk, Rk), Vk) <= 0) break;
                  Rk--
                } while (Rk);
                sk.push(Rk), Vk = ik(Vk, bk)
              } return sk.reverse(), [Ak(sk), Ak(Vk)]
          }(Vk, mk), ak = Rk[0];
          var Lk = kk.sign !== tk.sign,
            Ek = Rk[1],
            Sk = kk.sign;
          return "number" === typeof ak ? (Lk && (ak = -ak), ak = new dk(ak)) : ak = new wk(ak, Lk), "number" === typeof Ek ? (Sk && (Ek = -Ek), Ek = new dk(Ek)) : Ek = new wk(Ek, Sk), [ak, Ek]
        }

        function gk(kk, Fk) {
          if (kk.length !== Fk.length) return kk.length > Fk.length ? 1 : -1;
          for (var Bk = kk.length - 1; Bk >= 0; Bk--)
            if (kk[Bk] !== Fk[Bk]) return kk[Bk] > Fk[Bk] ? 1 : -1;
          return 0
        }

        function Uk(kk) {
          var Fk = kk.abs();
          return !Fk.isUnit() && (!!(Fk.equals(2) || Fk.equals(3) || Fk.equals(5)) || !(Fk.isEven() || Fk.isDivisibleBy(3) || Fk.isDivisibleBy(5)) && (!!Fk.lesser(49) || void 0))
        }

        function ck(kk, Bk) {
          for (var Rk, tk, ak, Xk = kk.prev(), bk = Xk, wk = 0; bk.isEven();) bk = bk.divide(2), wk++;
          kk: for (tk = 0; tk < Bk.length; tk++)
            if (!kk.lesser(Bk[tk]) && !(ak = Fk(Bk[tk]).modPow(bk, kk)).isUnit() && !ak.equals(Xk)) {
              for (Rk = wk - 1; 0 != Rk; Rk--) {
                if ((ak = ak.square().mod(kk)).isUnit()) return !1;
                if (ak.equals(Xk)) continue kk
              }
              return !1
            }
          return !0
        }
        wk.prototype = Object.create(bk.prototype), dk.prototype = Object.create(bk.prototype), sk.prototype = Object.create(bk.prototype), wk.prototype.add = function(kk) {
          var Fk = Ik(kk);
          if (this.sign !== Fk.sign) return this.subtract(Fk.bt());
          var Bk = this.value,
            Rk = Fk.value;
          return Fk.isSmall ? new wk(vk(Bk, Math.abs(Rk)), this.sign) : new wk(Wk(Bk, Rk), this.sign)
        }, wk.prototype.plus = wk.prototype.add, dk.prototype.add = function(kk) {
          var Fk = Ik(kk),
            Bk = this.value;
          if (Bk < 0 !== Fk.sign) return this.subtract(Fk.bt());
          var Rk = Fk.value;
          if (Fk.isSmall) {
            if (Vk(Bk + Rk)) return new dk(Bk + Rk);
            Rk = Jk(Math.abs(Rk))
          }
          return new wk(vk(Rk, Math.abs(Bk)), Bk < 0)
        }, dk.prototype.plus = dk.prototype.add, sk.prototype.add = function(kk) {
          return new sk(this.value + Ik(kk).value)
        }, sk.prototype.plus = sk.prototype.add, wk.prototype.subtract = function(kk) {
          var Fk = Ik(kk);
          if (this.sign !== Fk.sign) return this.add(Fk.bt());
          var Bk = this.value,
            Rk = Fk.value;
          return Fk.isSmall ? Yk(Bk, Math.abs(Rk), this.sign) : function(kk, Fk, Bk) {
            var Rk;
            return gk(kk, Fk) >= 0 ? Rk = ik(kk, Fk) : (Rk = ik(Fk, kk), Bk = !Bk), "number" === typeof(Rk = Ak(Rk)) ? (Bk && (Rk = -Rk), new dk(Rk)) : new wk(Rk, Bk)
          }(Bk, Rk, this.sign)
        }, wk.prototype.minus = wk.prototype.subtract, dk.prototype.subtract = function(kk) {
          var Fk = Ik(kk),
            Bk = this.value;
          if (Bk < 0 !== Fk.sign) return this.add(Fk.bt());
          var Rk = Fk.value;
          return Fk.isSmall ? new dk(Bk - Rk) : Yk(Rk, Math.abs(Bk), Bk >= 0)
        }, dk.prototype.minus = dk.prototype.subtract, sk.prototype.subtract = function(kk) {
          return new sk(this.value - Ik(kk).value)
        }, sk.prototype.minus = sk.prototype.subtract, wk.prototype.bt = function() {
          return new wk(this.value, !this.sign)
        }, dk.prototype.bt = function() {
          var kk = this.sign,
            Fk = new dk(-this.value);
          return Fk.sign = !kk, Fk
        }, sk.prototype.bt = function() {
          return new sk(-this.value)
        }, wk.prototype.abs = function() {
          return new wk(this.value, !1)
        }, dk.prototype.abs = function() {
          return new dk(Math.abs(this.value))
        }, sk.prototype.abs = function() {
          return new sk(this.value >= 0 ? this.value : -this.value)
        }, wk.prototype.multiply = function(kk) {
          var Fk, Rk, tk, ak = Ik(kk),
            Xk = this.value,
            dk = ak.value,
            sk = this.sign !== ak.sign;
          if (ak.isSmall) {
            if (0 === dk) return bk[0];
            if (1 === dk) return this;
            if (-1 === dk) return this.bt();
            if ((Fk = Math.abs(dk)) < Bk) return new wk(Ok(Xk, Fk), sk);
            dk = Jk(Fk)
          }
          return Rk = Xk.length, tk = dk.length, new wk(-.012 * Rk - .012 * tk + 15e-6 * Rk * tk > 0 ? Sk(Xk, dk) : Lk(Xk, dk), sk)
        }, wk.prototype.times = wk.prototype.multiply, dk.prototype._multiplyBySmall = function(kk) {
          return Vk(kk.value * this.value) ? new dk(kk.value * this.value) : Nk(Math.abs(kk.value), Jk(Math.abs(this.value)), this.sign !== kk.sign)
        }, wk.prototype._multiplyBySmall = function(kk) {
          return 0 === kk.value ? bk[0] : 1 === kk.value ? this : -1 === kk.value ? this.bt() : Nk(Math.abs(kk.value), this.value, this.sign !== kk.sign)
        }, dk.prototype.multiply = function(kk) {
          return Ik(kk)._multiplyBySmall(this)
        }, dk.prototype.times = dk.prototype.multiply, sk.prototype.multiply = function(kk) {
          return new sk(this.value * Ik(kk).value)
        }, sk.prototype.times = sk.prototype.multiply, wk.prototype.square = function() {
          return new wk(Hk(this.value), !1)
        }, dk.prototype.square = function() {
          var kk = this.value * this.value;
          return Vk(kk) ? new dk(kk) : new wk(Hk(Jk(Math.abs(this.value))), !1)
        }, sk.prototype.square = function(kk) {
          return new sk(this.value * this.value)
        }, wk.prototype.divmod = function(kk) {
          var Fk = Mk(this, kk);
          return {
            quotient: Fk[0],
            remainder: Fk[1]
          }
        }, sk.prototype.divmod = dk.prototype.divmod = wk.prototype.divmod, wk.prototype.divide = function(kk) {
          return Mk(this, kk)[0]
        }, sk.prototype.over = sk.prototype.divide = function(kk) {
          return new sk(this.value / Ik(kk).value)
        }, dk.prototype.over = dk.prototype.divide = wk.prototype.over = wk.prototype.divide, wk.prototype.mod = function(kk) {
          return Mk(this, kk)[1]
        }, sk.prototype.mod = sk.prototype.remainder = function(kk) {
          return new sk(this.value % Ik(kk).value)
        }, dk.prototype.remainder = dk.prototype.mod = wk.prototype.remainder = wk.prototype.mod, wk.prototype.pow = function(kk) {
          var Fk, Bk, Rk, tk = Ik(kk),
            ak = this.value,
            Xk = tk.value;
          if (0 === Xk) return bk[1];
          if (0 === ak) return bk[0];
          if (1 === ak) return bk[1];
          if (-1 === ak) return tk.isEven() ? bk[1] : bk[-1];
          if (tk.sign) return bk[0];
          if (!tk.isSmall) throw new Error("The exponent " + tk.toString() + " is too large.");
          if (this.isSmall && Vk(Fk = Math.pow(ak, Xk))) return new dk(fk(Fk));
          for (Bk = this, Rk = bk[1]; !0 & Xk && (Rk = Rk.times(Bk), --Xk), 0 !== Xk;) Xk /= 2, Bk = Bk.square();
          return Rk
        }, dk.prototype.pow = wk.prototype.pow, sk.prototype.pow = function(kk) {
          var Fk = Ik(kk),
            Bk = this.value,
            Rk = Fk.value,
            tk = BigInt(0),
            ak = BigInt(1),
            Xk = BigInt(2);
          if (Rk === tk) return bk[1];
          if (Bk === tk) return bk[0];
          if (Bk === ak) return bk[1];
          if (Bk === BigInt(-1)) return Fk.isEven() ? bk[1] : bk[-1];
          if (Fk.isNegative()) return new sk(tk);
          for (var wk = this, dk = bk[1];
            (Rk & ak) === ak && (dk = dk.times(wk), --Rk), Rk !== tk;) Rk /= Xk, wk = wk.square();
          return dk
        }, wk.prototype.modPow = function(kk, Fk) {
          if (kk = Ik(kk), (Fk = Ik(Fk)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Bk = bk[1],
            Rk = this.mod(Fk);
          for (kk.isNegative() && (kk = kk.multiply(bk[-1]), Rk = Rk.modInv(Fk)); kk.isPositive();) {
            if (Rk.isZero()) return bk[0];
            kk.isOdd() && (Bk = Bk.multiply(Rk).mod(Fk)), kk = kk.divide(2), Rk = Rk.square().mod(Fk)
          }
          return Bk
        }, sk.prototype.modPow = dk.prototype.modPow = wk.prototype.modPow, wk.prototype.compareAbs = function(kk) {
          var Fk = Ik(kk),
            Bk = this.value,
            Rk = Fk.value;
          return Fk.isSmall ? 1 : gk(Bk, Rk)
        }, dk.prototype.compareAbs = function(kk) {
          var Fk = Ik(kk),
            Bk = Math.abs(this.value),
            Rk = Fk.value;
          return Fk.isSmall ? Bk === (Rk = Math.abs(Rk)) ? 0 : Bk > Rk ? 1 : -1 : -1
        }, sk.prototype.compareAbs = function(kk) {
          var Fk = this.value,
            Bk = Ik(kk).value;
          return (Fk = Fk >= 0 ? Fk : -Fk) === (Bk = Bk >= 0 ? Bk : -Bk) ? 0 : Fk > Bk ? 1 : -1
        }, wk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var Fk = Ik(kk),
            Bk = this.value,
            Rk = Fk.value;
          return this.sign !== Fk.sign ? Fk.sign ? 1 : -1 : Fk.isSmall ? this.sign ? -1 : 1 : gk(Bk, Rk) * (this.sign ? -1 : 1)
        }, wk.prototype.compareTo = wk.prototype.compare, dk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var Fk = Ik(kk),
            Bk = this.value,
            Rk = Fk.value;
          return Fk.isSmall ? Bk == Rk ? 0 : Bk > Rk ? 1 : -1 : Bk < 0 !== Fk.sign ? Bk < 0 ? -1 : 1 : Bk < 0 ? 1 : -1
        }, dk.prototype.compareTo = dk.prototype.compare, sk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var Fk = this.value,
            Bk = Ik(kk).value;
          return Fk === Bk ? 0 : Fk > Bk ? 1 : -1
        }, sk.prototype.compareTo = sk.prototype.compare, wk.prototype.equals = function(kk) {
          return 0 === this.compare(kk)
        }, sk.prototype.eq = sk.prototype.equals = dk.prototype.eq = dk.prototype.equals = wk.prototype.eq = wk.prototype.equals, wk.prototype.notEquals = function(kk) {
          return 0 !== this.compare(kk)
        }, sk.prototype.neq = sk.prototype.notEquals = dk.prototype.neq = dk.prototype.notEquals = wk.prototype.neq = wk.prototype.notEquals, wk.prototype.greater = function(kk) {
          return this.compare(kk) > 0
        }, sk.prototype.gt = sk.prototype.greater = dk.prototype.gt = dk.prototype.greater = wk.prototype.gt = wk.prototype.greater, wk.prototype.lesser = function(kk) {
          return this.compare(kk) < 0
        }, sk.prototype.lt = sk.prototype.lesser = dk.prototype.lt = dk.prototype.lesser = wk.prototype.lt = wk.prototype.lesser, wk.prototype.greaterOrEquals = function(kk) {
          return this.compare(kk) >= 0
        }, sk.prototype.geq = sk.prototype.greaterOrEquals = dk.prototype.geq = dk.prototype.greaterOrEquals = wk.prototype.geq = wk.prototype.greaterOrEquals, wk.prototype.lesserOrEquals = function(kk) {
          return this.compare(kk) <= 0
        }, sk.prototype.leq = sk.prototype.lesserOrEquals = dk.prototype.leq = dk.prototype.lesserOrEquals = wk.prototype.leq = wk.prototype.lesserOrEquals, wk.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, dk.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, sk.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, wk.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, dk.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, sk.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, wk.prototype.isPositive = function() {
          return !this.sign
        }, dk.prototype.isPositive = function() {
          return this.value > 0
        }, sk.prototype.isPositive = dk.prototype.isPositive, wk.prototype.isNegative = function() {
          return this.sign
        }, dk.prototype.isNegative = function() {
          return this.value < 0
        }, sk.prototype.isNegative = dk.prototype.isNegative, wk.prototype.isUnit = function() {
          return !1
        }, dk.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, sk.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, wk.prototype.isZero = function() {
          return !1
        }, dk.prototype.isZero = function() {
          return 0 === this.value
        }, sk.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, wk.prototype.isDivisibleBy = function(kk) {
          var Fk = Ik(kk);
          return !Fk.isZero() && (!!Fk.isUnit() || (0 === Fk.compareAbs(2) ? this.isEven() : this.mod(Fk).isZero()))
        }, sk.prototype.isDivisibleBy = dk.prototype.isDivisibleBy = wk.prototype.isDivisibleBy, wk.prototype.isPrime = function(Bk) {
          var Rk = Uk(this);
          if (Rk !== kk) return Rk;
          var tk = this.abs(),
            ak = tk.bitLength();
          if (ak <= 64) return ck(tk, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Xk = Math.log(2) * ak.toJSNumber(), bk = Math.ceil(!0 === Bk ? 2 * Math.pow(Xk, 2) : Xk), wk = [], dk = 0; dk < bk; dk++) wk.push(Fk(dk + 2));
          return ck(tk, wk)
        }, sk.prototype.isPrime = dk.prototype.isPrime = wk.prototype.isPrime, wk.prototype.isProbablePrime = function(Bk, Rk) {
          var tk = Uk(this);
          if (tk !== kk) return tk;
          for (var ak = this.abs(), Xk = Bk === kk ? 5 : Bk, bk = [], wk = 0; wk < Xk; wk++) bk.push(Fk.randBetween(2, ak.minus(2), Rk));
          return ck(ak, bk)
        }, sk.prototype.isProbablePrime = dk.prototype.isProbablePrime = wk.prototype.isProbablePrime, wk.prototype.modInv = function(kk) {
          for (var Bk, Rk, tk, ak = Fk.zero, Xk = Fk.one, bk = Ik(kk), wk = this.abs(); !wk.isZero();) Bk = bk.divide(wk), Rk = ak, tk = bk, ak = Xk, bk = wk, Xk = Rk.subtract(Bk.multiply(Xk)), wk = tk.subtract(Bk.multiply(wk));
          if (!bk.isUnit()) throw new Error(this.toString() + " and " + kk.toString() + " are not co-prime");
          return -1 === ak.compare(0) && (ak = ak.add(kk)), this.isNegative() ? ak.bt() : ak
        }, sk.prototype.modInv = dk.prototype.modInv = wk.prototype.modInv, wk.prototype.next = function() {
          var kk = this.value;
          return this.sign ? Yk(kk, 1, this.sign) : new wk(vk(kk, 1), this.sign)
        }, dk.prototype.next = function() {
          var kk = this.value;
          return kk + 1 < Rk ? new dk(kk + 1) : new wk(tk, !1)
        }, sk.prototype.next = function() {
          return new sk(this.value + BigInt(1))
        }, wk.prototype.prev = function() {
          var kk = this.value;
          return this.sign ? new wk(vk(kk, 1), !0) : Yk(kk, 1, this.sign)
        }, dk.prototype.prev = function() {
          var kk = this.value;
          return kk - 1 > -Rk ? new dk(kk - 1) : new wk(tk, !0)
        }, sk.prototype.prev = function() {
          return new sk(this.value - BigInt(1))
        };
        for (var Gk = [1]; 2 * Gk[Gk.length - 1] <= Bk;) Gk.push(2 * Gk[Gk.length - 1]);
        var Tk = Gk.length,
          rk = Gk[Tk - 1];

        function Dk(kk) {
          return Math.abs(kk) <= Bk
        }

        function zk(kk, Bk, Rk) {
          Bk = Ik(Bk);
          for (var tk = kk.isNegative(), ak = Bk.isNegative(), Xk = tk ? kk.not() : kk, bk = ak ? Bk.not() : Bk, wk = 0, dk = 0, sk = null, Vk = null, Jk = []; !Xk.isZero() || !bk.isZero();) wk = (sk = Mk(Xk, rk))[1].toJSNumber(), tk && (wk = rk - 1 - wk), dk = (Vk = Mk(bk, rk))[1].toJSNumber(), ak && (dk = rk - 1 - dk), Xk = sk[0], bk = Vk[0], Jk.push(Rk(wk, dk));
          for (var Ak = 0 !== Rk(tk ? 1 : 0, ak ? 1 : 0) ? Fk(-1) : Fk(0), ek = Jk.length - 1; ek >= 0; ek -= 1) Ak = Ak.multiply(rk).add(Fk(Jk[ek]));
          return Ak
        }
        wk.prototype.shiftLeft = function(kk) {
          var Fk = Ik(kk).toJSNumber();
          if (!Dk(Fk)) throw new Error(String(Fk) + " is too large for shifting.");
          if (Fk < 0) return this.shiftRight(-Fk);
          var Bk = this;
          if (Bk.isZero()) return Bk;
          for (; Fk >= Tk;) Bk = Bk.multiply(rk), Fk -= Tk - 1;
          return Bk.multiply(Gk[Fk])
        }, sk.prototype.shiftLeft = dk.prototype.shiftLeft = wk.prototype.shiftLeft, wk.prototype.shiftRight = function(kk) {
          var Fk, Bk = Ik(kk).toJSNumber();
          if (!Dk(Bk)) throw new Error(String(Bk) + " is too large for shifting.");
          if (Bk < 0) return this.shiftLeft(-Bk);
          for (var Rk = this; Bk >= Tk;) {
            if (Rk.isZero() || Rk.isNegative() && Rk.isUnit()) return Rk;
            Rk = (Fk = Mk(Rk, rk))[1].isNegative() ? Fk[0].prev() : Fk[0], Bk -= Tk - 1
          }
          return (Fk = Mk(Rk, Gk[Bk]))[1].isNegative() ? Fk[0].prev() : Fk[0]
        }, sk.prototype.shiftRight = dk.prototype.shiftRight = wk.prototype.shiftRight, wk.prototype.not = function() {
          return this.bt().prev()
        }, sk.prototype.not = dk.prototype.not = wk.prototype.not, wk.prototype.and = function(kk) {
          return zk(this, kk, (function(kk, Fk) {
            return kk & Fk
          }))
        }, sk.prototype.and = dk.prototype.and = wk.prototype.and, wk.prototype.or = function(kk) {
          return zk(this, kk, (function(kk, Fk) {
            return kk | Fk
          }))
        }, sk.prototype.or = dk.prototype.or = wk.prototype.or, wk.prototype.xor = function(kk) {
          return zk(this, kk, (function(kk, Fk) {
            return kk ^ Fk
          }))
        }, sk.prototype.xor = dk.prototype.xor = wk.prototype.xor;
        var Pk = 1 << 30;

        function hk(kk) {
          var Fk = kk.value,
            Rk = "number" === typeof Fk ? Fk | Pk : "bigint" === typeof Fk ? Fk | BigInt(Pk) : Fk[0] + Fk[1] * Bk | 1073758208;
          return Rk & -Rk
        }

        function qk(kk, Bk) {
          if (Bk.compareTo(kk) <= 0) {
            var Rk = qk(kk, Bk.square(Bk)),
              tk = Rk.p,
              ak = Rk.e,
              Xk = tk.multiply(Bk);
            return Xk.compareTo(kk) <= 0 ? {
              p: Xk,
              e: 2 * ak + 1
            } : {
              p: tk,
              e: 2 * ak
            }
          }
          return {
            p: Fk(1),
            e: 0
          }
        }

        function Ck(kk, Fk) {
          return kk = Ik(kk), Fk = Ik(Fk), kk.greater(Fk) ? kk : Fk
        }

        function Zk(kk, Fk) {
          return kk = Ik(kk), Fk = Ik(Fk), kk.lesser(Fk) ? kk : Fk
        }

        function pk(kk, Fk) {
          if (kk = Ik(kk).abs(), Fk = Ik(Fk).abs(), kk.equals(Fk)) return kk;
          if (kk.isZero()) return Fk;
          if (Fk.isZero()) return kk;
          for (var Bk, Rk, tk = bk[1]; kk.isEven() && Fk.isEven();) Bk = Zk(hk(kk), hk(Fk)), kk = kk.divide(Bk), Fk = Fk.divide(Bk), tk = tk.multiply(Bk);
          for (; kk.isEven();) kk = kk.divide(hk(kk));
          do {
            for (; Fk.isEven();) Fk = Fk.divide(hk(Fk));
            kk.greater(Fk) && (Rk = Fk, Fk = kk, kk = Rk), Fk = Fk.subtract(kk)
          } while (!Fk.isZero());
          return tk.isUnit() ? kk : kk.multiply(tk)
        }
        wk.prototype.bitLength = function() {
          var kk = this;
          return kk.compareTo(Fk(0)) < 0 && (kk = kk.bt().subtract(Fk(1))), 0 === kk.compareTo(Fk(0)) ? Fk(0) : Fk(qk(kk, Fk(2)).e).add(Fk(1))
        }, sk.prototype.bitLength = dk.prototype.bitLength = wk.prototype.bitLength;
        var Kk = function(kk, Fk, Bk, Rk) {
          Bk = Bk || ak, kk = String(kk), Rk || (kk = kk.toLowerCase(), Bk = Bk.toLowerCase());
          var tk, Xk = kk.length,
            bk = Math.abs(Fk),
            wk = {};
          for (tk = 0; tk < Bk.length; tk++) wk[Bk[tk]] = tk;
          for (tk = 0; tk < Xk; tk++) {
            if ("-" !== (Vk = kk[tk]) && (Vk in wk && wk[Vk] >= bk)) {
              if ("1" === Vk && 1 === bk) continue;
              throw new Error(Vk + " is not a valid digit in base " + Fk + ".")
            }
          }
          Fk = Ik(Fk);
          var dk = [],
            sk = "-" === kk[0];
          for (tk = sk ? 1 : 0; tk < kk.length; tk++) {
            var Vk;
            if ((Vk = kk[tk]) in wk) dk.push(Ik(wk[Vk]));
            else {
              if ("<" !== Vk) throw new Error(Vk + " is not a valid character");
              var Jk = tk;
              do {
                tk++
              } while (">" !== kk[tk] && tk < kk.length);
              dk.push(Ik(kk.slice(Jk + 1, tk)))
            }
          }
          return xk(dk, Fk, sk)
        };

        function xk(kk, Fk, Bk) {
          var Rk, tk = bk[0],
            ak = bk[1];
          for (Rk = kk.length - 1; Rk >= 0; Rk--) tk = tk.add(kk[Rk].times(ak)), ak = ak.times(Fk);
          return Bk ? tk.bt() : tk
        }

        function jk(kk, Bk) {
          if ((Bk = Fk(Bk)).isZero()) {
            if (kk.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Bk.equals(-1)) {
            if (kk.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (kk.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-kk.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Rk = Array.apply(null, Array(kk.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Rk.unshift([1]), {
              value: [].concat.apply([], Rk),
              isNegative: !1
            }
          }
          var tk = !1;
          if (kk.isNegative() && Bk.isPositive() && (tk = !0, kk = kk.abs()), Bk.isUnit()) return kk.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(kk.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: tk
          };
          for (var ak, Xk = [], bk = kk; bk.isNegative() || bk.compareAbs(Bk) >= 0;) {
            ak = bk.divmod(Bk), bk = ak.quotient;
            var wk = ak.remainder;
            wk.isNegative() && (wk = Bk.minus(wk).abs(), bk = bk.next()), Xk.push(wk.toJSNumber())
          }
          return Xk.push(bk.toJSNumber()), {
            value: Xk.reverse(),
            isNegative: tk
          }
        }

        function lk(kk, Fk, Bk) {
          var Rk = jk(kk, Fk);
          return (Rk.isNegative ? "-" : "") + Rk.value.map((function(kk) {
            return function(kk, Fk) {
              return kk < (Fk = Fk || ak).length ? Fk[kk] : "<" + kk + ">"
            }(kk, Bk)
          })).join("")
        }

        function nk(kk) {
          if (Vk(+kk)) {
            var Fk = +kk;
            if (Fk === fk(Fk)) return Xk ? new sk(BigInt(Fk)) : new dk(Fk);
            throw new Error("Invalid integer: " + kk)
          }
          var Bk = "-" === kk[0];
          Bk && (kk = kk.slice(1));
          var Rk = kk.split(/e/i);
          if (Rk.length > 2) throw new Error("Invalid integer: " + Rk.join("e"));
          if (2 === Rk.length) {
            var tk = Rk[1];
            if ("+" === tk[0] && (tk = tk.slice(1)), (tk = +tk) !== fk(tk) || !Vk(tk)) throw new Error("Invalid integer: " + tk + " is not a valid exponent.");
            var ak = Rk[0],
              bk = ak.indexOf(".");
            if (bk >= 0 && (tk -= ak.length - bk - 1, ak = ak.slice(0, bk) + ak.slice(bk + 1)), tk < 0) throw new Error("Cannot include negative exponent part for integers");
            kk = ak += new Array(tk + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(kk)) throw new Error("Invalid integer: " + kk);
          if (Xk) return new sk(BigInt(Bk ? "-" + kk : kk));
          for (var Jk = [], Ak = kk.length, yk = Ak - 7; Ak > 0;) Jk.push(+kk.slice(yk, Ak)), (yk -= 7) < 0 && (yk = 0), Ak -= 7;
          return ek(Jk), new wk(Jk, Bk)
        }

        function Ik(kk) {
          return "number" === typeof kk ? function(kk) {
            if (Xk) return new sk(BigInt(kk));
            if (Vk(kk)) {
              if (kk !== fk(kk)) throw new Error(kk + " is not an integer.");
              return new dk(kk)
            }
            return nk(kk.toString())
          }(kk) : "string" === typeof kk ? nk(kk) : "bigint" === typeof kk ? new sk(kk) : kk
        }
        wk.prototype.toArray = function(kk) {
          return jk(this, kk)
        }, dk.prototype.toArray = function(kk) {
          return jk(this, kk)
        }, sk.prototype.toArray = function(kk) {
          return jk(this, kk)
        }, wk.prototype.toString = function(Fk, Bk) {
          if (Fk === kk && (Fk = 10), 10 !== Fk) return lk(this, Fk, Bk);
          for (var Rk, tk = this.value, ak = tk.length, Xk = String(tk[--ak]); --ak >= 0;) Rk = String(tk[ak]), Xk += "0000000".slice(Rk.length) + Rk;
          return (this.sign ? "-" : "") + Xk
        }, dk.prototype.toString = function(Fk, Bk) {
          return Fk === kk && (Fk = 10), 10 != Fk ? lk(this, Fk, Bk) : String(this.value)
        }, sk.prototype.toString = dk.prototype.toString, sk.prototype.toJSON = wk.prototype.toJSON = dk.prototype.toJSON = function() {
          return this.toString()
        }, wk.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, wk.prototype.toJSNumber = wk.prototype.valueOf, dk.prototype.valueOf = function() {
          return this.value
        }, dk.prototype.toJSNumber = dk.prototype.valueOf, sk.prototype.valueOf = sk.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Qk = 0; Qk < 1e3; Qk++) bk[Qk] = Ik(Qk), Qk > 0 && (bk[-Qk] = Ik(-Qk));
        return bk.one = bk[1], bk.zero = bk[0], bk.minusOne = bk[-1], bk.max = Ck, bk.min = Zk, bk.gcd = pk, bk.lcm = function(kk, Fk) {
          return kk = Ik(kk).abs(), Fk = Ik(Fk).abs(), kk.divide(pk(kk, Fk)).multiply(Fk)
        }, bk.isInstance = function(kk) {
          return kk instanceof wk || kk instanceof dk || kk instanceof sk
        }, bk.randBetween = function(kk, Fk, Rk) {
          kk = Ik(kk), Fk = Ik(Fk);
          var tk = Rk || Math.random,
            ak = Zk(kk, Fk),
            Xk = Ck(kk, Fk).subtract(ak).add(1);
          if (Xk.isSmall) return ak.add(Math.floor(tk() * Xk));
          for (var wk = jk(Xk, Bk).value, dk = [], sk = !0, Vk = 0; Vk < wk.length; Vk++) {
            var Jk = sk ? wk[Vk] : Bk,
              Ak = fk(tk() * Jk);
            dk.push(Ak), Ak < Jk && (sk = !1)
          }
          return ak.add(bk.MFk(dk, Bk, !1))
        }, bk.MFk = function(kk, Fk, Bk) {
          return xk(kk.map(Ik), Ik(Fk || 10), Bk)
        }, bk
      }();
      kk.hasOwnProperty("exports") && (kk.exports = Fk)
    }(vB);
    var iB = ak(vB.exports);

    function YB(kk, Fk, Bk) {
      let Rk = 0;
      for (let tk = 0; tk < Bk; tk++) {
        const Bk = kk[Fk + tk];
        if (void 0 === Bk) break;
        Rk += Bk * 16 ** tk
      }
      return Rk
    }

    function oB(kk) {
      const Fk = [];
      for (let Bk = 0; Bk < kk.length; Bk++) {
        let Rk = Number(kk[Bk]);
        for (let kk = 0; Rk || kk < Fk.length; kk++) Rk += 10 * (Fk[kk] || 0), Fk[kk] = Rk % 16, Rk = (Rk - Fk[kk]) / 16
      }
      return Fk
    }
    class LB {
      static fromString(kk) {
        return new LB(function(kk) {
          const Fk = oB(kk),
            Bk = Array(4);
          for (let Rk = 0; Rk < 4; Rk++) Bk[3 - Rk] = YB(Fk, 4 * Rk, 4);
          return Bk
        }(kk), kk)
      }
      static fromBit(kk) {
        const Fk = Array(4),
          Bk = Math.floor(kk / 16);
        for (let Rk = 0; Rk < 4; Rk++) Fk[3 - Rk] = Rk === Bk ? 1 << kk - 16 * Bk : 0;
        return new LB(Fk)
      }
      constructor(kk, Fk) {
        this.parts = kk, this.str = Fk
      }
      and(kk) {
        let {
          parts: Fk
        } = kk;
        return new LB(this.parts.map(((kk, Bk) => kk & Fk[Bk])))
      }
      or(kk) {
        let {
          parts: Fk
        } = kk;
        return new LB(this.parts.map(((kk, Bk) => kk | Fk[Bk])))
      }
      xor(kk) {
        let {
          parts: Fk
        } = kk;
        return new LB(this.parts.map(((kk, Bk) => kk ^ Fk[Bk])))
      }
      not() {
        return new LB(this.parts.map((kk => ~kk)))
      }
      equals(kk) {
        let {
          parts: Fk
        } = kk;
        return this.parts.every(((kk, Bk) => kk === Fk[Bk]))
      }
      toString() {
        if (null != this.str) return this.str;
        const kk = new Array(16);
        return this.parts.forEach(((Fk, Bk) => {
          const Rk = oB(Fk.toString());
          for (let tk = 0; tk < 4; tk++) kk[tk + 4 * Bk] = Rk[3 - tk] || 0
        })), this.str = iB.MFk(kk, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const OB = function() {
      try {
        return BigInt, !0
      } catch (kk) {
        return !1
      }
    }();
    OB && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const EB = {},
      SB = OB ? function(kk) {
        return BigInt(kk)
      } : function(kk) {
        return kk instanceof LB ? kk : ("number" === typeof kk && (kk = kk.toString()), null != EB[kk] || (EB[kk] = LB.fromString(kk)), EB[kk])
      },
      NB = SB(0),
      HB = OB ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB).and(kk)
      },
      uB = OB ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB).or(kk)
      },
      MB = OB ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NB;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB).xor(kk)
      },
      gB = OB ? function(kk, Fk) {
        return kk === Fk
      } : function(kk, Fk) {
        return null == kk || null == Fk ? kk == Fk : kk.equals(Fk)
      };
    var UB, cB, GB, TB, rB = {
      combine: function() {
        let kk = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Fk = 1; Fk < arguments.length; Fk++) kk = uB(kk, Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk]);
        return kk
      },
      add: function(kk, Fk) {
        return Fk === NB ? kk : uB(kk, Fk)
      },
      remove: function(kk, Fk) {
        return Fk === NB ? kk : MB(kk, HB(kk, Fk))
      },
      filter: HB,
      invert: OB ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : NB).not()
      },
      has: function(kk, Fk) {
        return gB(HB(kk, Fk), Fk)
      },
      hasAny: function(kk, Fk) {
        return !gB(HB(kk, Fk), NB)
      },
      equals: gB,
      deserialize: SB,
      getFlag: OB ? function(kk) {
        return BigInt(1) << BigInt(kk)
      } : function(kk) {
        return LB.fromBit(kk)
      }
    };
    ! function(kk) {
      kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITED = 4002] = "RATELIMITED", kk[kk.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", kk[kk.INVALID_VERSION = 4004] = "INVALID_VERSION", kk[kk.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(UB || (UB = {})),
    function(kk) {
      kk[kk.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", kk[kk.INVALID_COMMAND = 4002] = "INVALID_COMMAND", kk[kk.INVALID_EVENT = 4004] = "INVALID_EVENT", kk[kk.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(cB || (cB = {})),
    function(kk) {
      kk.LANDSCAPE = "landscape", kk.PORTRAIT = "portrait"
    }(GB || (GB = {})),
    function(kk) {
      kk.MOBILE = "mobile", kk.DESKTOP = "desktop"
    }(TB || (TB = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: rB.getFlag(0),
      ADMINISTRATOR: rB.getFlag(3)
    });

    function DB(kk) {
      return eB((Fk => {
        var Bk;
        const [Rk] = null !== (Bk = Object.entries(kk).find((kk => {
          let [, Bk] = kk;
          return Bk === Fk
        }))) && void 0 !== Bk ? Bk : [];
        return null != Fk && void 0 === Rk ? kk.UNHANDLED : Fk
      }), GF().or(TF()))
    }
    const zB = WB.object({
        image_url: WB.string()
      }),
      PB = WB.object({
        mediaUrl: WB.string().max(1024)
      }),
      hB = WB.object({
        access_token: WB.union([WB.string(), WB.null()]).optional()
      }),
      qB = WB.object({
        access_token: WB.string(),
        user: WB.object({
          username: WB.string(),
          discriminator: WB.string(),
          id: WB.string(),
          avatar: WB.union([WB.string(), WB.null()]).optional(),
          public_flags: WB.number(),
          global_name: WB.union([WB.string(), WB.null()]).optional()
        }),
        scopes: WB.array(function(kk) {
          const Fk = gF().transform((Fk => {
            const Bk = kk.safeParse(Fk);
            return Bk.success ? Bk.data : kk._def.defaultValue()
          }));
          return Fk.overlayType = kk, Fk
        }(WB.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(WB.literal(-1)).default(-1))),
        expires: WB.string(),
        application: WB.object({
          description: WB.string(),
          icon: WB.union([WB.string(), WB.null()]).optional(),
          id: WB.string(),
          rpc_origins: WB.array(WB.string()).optional(),
          name: WB.string()
        })
      }),
      CB = WB.object({
        participants: WB.array(WB.object({
          id: WB.string(),
          username: WB.string(),
          global_name: WB.union([WB.string(), WB.null()]).optional(),
          discriminator: WB.string(),
          avatar: WB.union([WB.string(), WB.null()]).optional(),
          flags: WB.number(),
          bot: WB.boolean(),
          avatar_decoration_data: WB.union([WB.object({
            asset: WB.string(),
            skuId: WB.string().optional()
          }), WB.null()]).optional(),
          premium_type: WB.union([WB.number(), WB.null()]).optional(),
          nickname: WB.string().optional()
        }))
      });
    var ZB;
    ! function(kk) {
      kk.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", kk.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", kk.AUTHENTICATE = "AUTHENTICATE", kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(ZB || (ZB = {}));
    const pB = WB.object({}).optional().nullable(),
      KB = WB.void(),
      xB = {
        [ZB.INITIATE_IMAGE_UPLOAD]: {
          request: KB,
          response: zB
        },
        [ZB.OPEN_SHARE_MOMENT_DIALOG]: {
          request: PB,
          response: pB
        },
        [ZB.AUTHENTICATE]: {
          request: hB,
          response: qB
        },
        [ZB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: KB,
          response: CB
        }
      },
      jB = "DISPATCH";
    var lB;
    ! function(kk) {
      kk.AUTHORIZE = "AUTHORIZE", kk.AUTHENTICATE = "AUTHENTICATE", kk.GET_GUILDS = "GET_GUILDS", kk.GET_GUILD = "GET_GUILD", kk.GET_CHANNEL = "GET_CHANNEL", kk.GET_CHANNELS = "GET_CHANNELS", kk.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", kk.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", kk.SUBSCRIBE = "SUBSCRIBE", kk.UNSUBSCRIBE = "UNSUBSCRIBE", kk.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", kk.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", kk.SET_ACTIVITY = "SET_ACTIVITY", kk.GET_SKUS = "GET_SKUS", kk.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", kk.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", kk.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", kk.START_PURCHASE = "START_PURCHASE", kk.SET_CONFIG = "SET_CONFIG", kk.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", kk.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", kk.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", kk.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", kk.CAPTURE_LOG = "CAPTURE_LOG", kk.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", kk.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", kk.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", kk.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", kk.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", kk.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(lB || (lB = {}));
    const nB = lF({
        cmd: GF(),
        data: pF(),
        evt: CF(),
        nonce: GF()
      }).passthrough(),
      IB = (DB(Object.assign(Object.assign({}, qB.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), lF({
        id: GF(),
        username: GF(),
        discriminator: GF(),
        global_name: GF().optional().nullable(),
        avatar: GF().optional().nullable(),
        avatar_decoration_data: lF({
          asset: GF(),
          sku_id: GF().optional()
        }).nullable(),
        bot: zF(),
        flags: TF().optional().nullable(),
        premium_type: TF().optional().nullable()
      })),
      QB = lF({
        user: IB,
        nick: GF().optional().nullable(),
        roles: jF(GF()),
        joined_at: GF(),
        deaf: zF(),
        mute: zF()
      }),
      kR = lF({
        id: GF(),
        name: GF().optional().nullable(),
        roles: jF(GF()).optional().nullable(),
        user: IB.optional().nullable(),
        require_colons: zF().optional().nullable(),
        managed: zF().optional().nullable(),
        animated: zF().optional().nullable(),
        available: zF().optional().nullable()
      }),
      FR = lF({
        mute: zF(),
        deaf: zF(),
        self_mute: zF(),
        self_deaf: zF(),
        suppress: zF()
      }),
      BR = lF({
        mute: zF(),
        nick: GF(),
        user: IB,
        voice_state: FR,
        volume: TF()
      }),
      RR = DB({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      tR = lF({
        name: GF(),
        type: TF(),
        url: GF().optional().nullable(),
        created_at: TF().optional().nullable(),
        timestamps: lF({
          start: TF(),
          end: TF()
        }).partial().optional().nullable(),
        application_id: GF().optional().nullable(),
        details: GF().optional().nullable(),
        state: GF().optional().nullable(),
        emoji: kR.optional().nullable(),
        party: lF({
          id: GF().optional().nullable(),
          size: jF(TF()).optional().nullable()
        }).optional().nullable(),
        assets: lF({
          large_image: GF().nullable(),
          large_text: GF().nullable(),
          small_image: GF().nullable(),
          small_text: GF().nullable()
        }).partial().optional().nullable(),
        secrets: lF({
          join: GF(),
          match: GF()
        }).partial().optional().nullable(),
        instance: zF().optional().nullable(),
        flags: TF().optional().nullable()
      }),
      aR = lF({
        id: GF(),
        type: DB({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: GF(),
        deny: GF()
      }),
      XR = {
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
      bR = lF({
        id: GF(),
        type: DB(XR),
        guild_id: GF().optional().nullable(),
        position: TF().optional().nullable(),
        permission_overwrites: jF(aR).optional().nullable(),
        name: GF().optional().nullable(),
        topic: GF().optional().nullable(),
        nsfw: zF().optional().nullable(),
        last_message_id: GF().optional().nullable(),
        bitrate: TF().optional().nullable(),
        user_limit: TF().optional().nullable(),
        rate_limit_per_user: TF().optional().nullable(),
        recipients: jF(IB).optional().nullable(),
        icon: GF().optional().nullable(),
        owner_id: GF().optional().nullable(),
        application_id: GF().optional().nullable(),
        parent_id: GF().optional().nullable(),
        last_pin_timestamp: GF().optional().nullable()
      }),
      wR = lF({
        user: IB,
        guild_id: GF(),
        status: RR,
        activities: jF(tR),
        client_status: lF({
          desktop: RR,
          mobile: RR,
          web: RR
        }).partial()
      }),
      dR = lF({
        id: GF(),
        name: GF(),
        color: TF(),
        hoist: zF(),
        position: TF(),
        permissions: GF(),
        managed: zF(),
        mentionable: zF()
      }),
      sR = (lF({
        id: GF(),
        name: GF(),
        owner_id: GF(),
        icon: GF().nullable(),
        icon_hash: GF().optional().nullable(),
        splash: GF().nullable(),
        discovery_splash: GF().nullable(),
        owner: zF().optional().nullable(),
        permissions: GF().optional().nullable(),
        region: GF(),
        afk_channel_id: GF().nullable(),
        afk_timeout: TF(),
        widget_enabled: zF().optional().nullable(),
        widget_channel_id: GF().optional().nullable(),
        verification_level: TF(),
        default_message_notifications: TF(),
        explicit_content_filter: TF(),
        roles: jF(dR),
        emojis: jF(kR),
        features: jF(GF()),
        mfa_level: TF(),
        application_id: GF().nullable(),
        system_channel_id: GF().nullable(),
        system_channel_flags: TF(),
        rules_channel_id: GF().nullable(),
        joined_at: GF().optional().nullable(),
        large: zF().optional().nullable(),
        unavailable: zF().optional().nullable(),
        member_count: TF().optional().nullable(),
        voice_states: jF(FR).optional().nullable(),
        members: jF(QB).optional().nullable(),
        channels: jF(bR).optional().nullable(),
        presences: jF(wR).optional().nullable(),
        max_presences: TF().optional().nullable(),
        max_members: TF().optional().nullable(),
        vanity_url_code: GF().nullable(),
        description: GF().nullable(),
        banner: GF().nullable(),
        premium_tier: TF(),
        premium_subscription_count: TF().optional().nullable(),
        preferred_locale: GF(),
        public_updates_channel_id: GF().nullable(),
        max_video_channel_users: TF().optional().nullable(),
        approximate_member_count: TF().optional().nullable(),
        approximate_presence_count: TF().optional().nullable()
      }), lF({
        id: GF(),
        guild_id: GF(),
        type: TF(),
        name: GF()
      })),
      VR = lF({
        id: GF(),
        filename: GF(),
        size: TF(),
        url: GF(),
        proxy_url: GF(),
        height: TF().optional().nullable(),
        width: TF().optional().nullable()
      }),
      JR = lF({
        text: GF(),
        icon_url: GF().optional().nullable(),
        proxy_icon_url: GF().optional().nullable()
      }),
      AR = lF({
        url: GF().optional().nullable(),
        proxy_url: GF().optional().nullable(),
        height: TF().optional().nullable(),
        width: TF().optional().nullable()
      }),
      eR = AR.omit({
        proxy_url: !0
      }),
      yR = lF({
        name: GF().optional().nullable(),
        url: GF().optional().nullable()
      }),
      fR = lF({
        name: GF().optional().nullable(),
        url: GF().optional().nullable(),
        icon_url: GF().optional().nullable(),
        proxy_icon_url: GF().optional().nullable()
      }),
      mR = lF({
        name: GF(),
        value: GF(),
        inline: zF()
      }),
      WR = lF({
        title: GF().optional().nullable(),
        type: GF().optional().nullable(),
        description: GF().optional().nullable(),
        url: GF().optional().nullable(),
        timestamp: GF().optional().nullable(),
        color: TF().optional().nullable(),
        footer: JR.optional().nullable(),
        image: AR.optional().nullable(),
        thumbnail: AR.optional().nullable(),
        video: eR.optional().nullable(),
        provider: yR.optional().nullable(),
        author: fR.optional().nullable(),
        fields: jF(mR).optional().nullable()
      }),
      vR = lF({
        count: TF(),
        me: zF(),
        emoji: kR
      }),
      iR = lF({
        type: TF(),
        party_id: GF().optional().nullable()
      }),
      YR = lF({
        id: GF(),
        cover_image: GF().optional().nullable(),
        description: GF(),
        icon: GF().optional().nullable(),
        name: GF()
      }),
      oR = lF({
        message_id: GF().optional().nullable(),
        channel_id: GF().optional().nullable(),
        guild_id: GF().optional().nullable()
      }),
      LR = lF({
        id: GF(),
        channel_id: GF(),
        guild_id: GF().optional().nullable(),
        author: IB.optional().nullable(),
        member: QB.optional().nullable(),
        content: GF(),
        timestamp: GF(),
        edited_timestamp: GF().optional().nullable(),
        tts: zF(),
        mention_everyone: zF(),
        mentions: jF(IB),
        mention_roles: jF(GF()),
        mention_channels: jF(sR),
        attachments: jF(VR),
        embeds: jF(WR),
        reactions: jF(vR).optional().nullable(),
        nonce: IF([GF(), TF()]).optional().nullable(),
        pinned: zF(),
        webhook_id: GF().optional().nullable(),
        type: TF(),
        activity: iR.optional().nullable(),
        application: YR.optional().nullable(),
        message_reference: oR.optional().nullable(),
        flags: TF().optional().nullable(),
        stickers: jF(pF()).optional().nullable(),
        referenced_message: pF().optional().nullable()
      }),
      OR = lF({
        id: GF(),
        name: GF()
      }),
      ER = lF({
        type: DB({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: TF(),
        name: GF()
      }),
      SR = lF({
        type: DB({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: zF(),
        threshold: TF(),
        shortcut: jF(ER),
        delay: TF()
      }),
      NR = lF({
        device_id: GF(),
        volume: TF(),
        available_devices: jF(OR)
      }),
      HR = (lF({
        type: DB({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: GF(),
        vendor: lF({
          name: GF(),
          url: GF()
        }),
        model: lF({
          name: GF(),
          url: GF()
        }),
        related: jF(GF()),
        echo_cancellation: zF().optional().nullable(),
        noise_suppression: zF().optional().nullable(),
        automatic_gain_control: zF().optional().nullable(),
        hardware_mute: zF().optional().nullable()
      }), lF({
        id: GF(),
        name: GF(),
        type: DB({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: lF({
          amount: TF(),
          currency: GF()
        }),
        application_id: GF(),
        flags: TF(),
        release_date: GF().nullable()
      })),
      uR = lF({
        id: GF(),
        sku_id: GF(),
        application_id: GF(),
        user_id: GF(),
        gift_code_flags: TF(),
        type: DB({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: GF().optional().nullable(),
        branches: jF(GF()).optional().nullable(),
        starts_at: GF().optional().nullable(),
        ends_at: GF().optional().nullable(),
        parent_id: GF().optional().nullable(),
        consumed: zF().optional().nullable(),
        deleted: zF().optional().nullable(),
        gift_code_batch_id: GF().optional().nullable()
      }),
      MR = (DB({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), DB({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      gR = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      UR = (DB(gR), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      cR = (DB(UR), "ERROR");
    var GR;
    ! function(kk) {
      kk.READY = "READY", kk.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", kk.SPEAKING_START = "SPEAKING_START", kk.SPEAKING_STOP = "SPEAKING_STOP", kk.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", kk.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", kk.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", kk.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", kk.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", kk.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(GR || (GR = {}));
    const TR = nB.extend({
        evt: dB(GR),
        nonce: GF().nullable(),
        cmd: bB(jB),
        data: lF({}).passthrough()
      }),
      rR = nB.extend({
        evt: bB(cR),
        data: lF({
          code: TF(),
          message: GF().optional()
        }).passthrough(),
        cmd: dB(lB),
        nonce: GF().nullable()
      }),
      DR = TR.extend({
        evt: GF()
      }),
      zR = IF([TR, DR, rR]);
    const PR = {
      [GR.READY]: {
        payload: TR.extend({
          evt: bB(GR.READY),
          data: lF({
            v: TF(),
            config: lF({
              cdn_host: GF().optional(),
              api_endpoint: GF(),
              environment: GF()
            }),
            user: lF({
              id: GF(),
              username: GF(),
              discriminator: GF(),
              avatar: GF().optional()
            }).optional()
          })
        })
      },
      [GR.VOICE_STATE_UPDATE]: {
        payload: TR.extend({
          evt: bB(GR.VOICE_STATE_UPDATE),
          data: BR
        }),
        subscribeArgs: lF({
          channel_id: GF()
        })
      },
      [GR.SPEAKING_START]: {
        payload: TR.extend({
          evt: bB(GR.SPEAKING_START),
          data: lF({
            lobby_id: GF().optional(),
            channel_id: GF().optional(),
            user_id: GF()
          })
        }),
        subscribeArgs: lF({
          lobby_id: GF().nullable().optional(),
          channel_id: GF().nullable().optional()
        })
      },
      [GR.SPEAKING_STOP]: {
        payload: TR.extend({
          evt: bB(GR.SPEAKING_STOP),
          data: lF({
            lobby_id: GF().optional(),
            channel_id: GF().optional(),
            user_id: GF()
          })
        }),
        subscribeArgs: lF({
          lobby_id: GF().nullable().optional(),
          channel_id: GF().nullable().optional()
        })
      },
      [GR.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: TR.extend({
          evt: bB(GR.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: lF({
            layout_mode: DB(UR)
          })
        })
      },
      [GR.ORIENTATION_UPDATE]: {
        payload: TR.extend({
          evt: bB(GR.ORIENTATION_UPDATE),
          data: lF({
            screen_orientation: DB(gR),
            orientation: dB(GB)
          })
        })
      },
      [GR.CURRENT_USER_UPDATE]: {
        payload: TR.extend({
          evt: bB(GR.CURRENT_USER_UPDATE),
          data: IB
        })
      },
      [GR.ENTITLEMENT_CREATE]: {
        payload: TR.extend({
          evt: bB(GR.ENTITLEMENT_CREATE),
          data: lF({
            entitlement: uR
          })
        })
      },
      [GR.THERMAL_STATE_UPDATE]: {
        payload: TR.extend({
          evt: bB(GR.THERMAL_STATE_UPDATE),
          data: lF({
            thermal_state: MR
          })
        })
      },
      [GR.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: TR.extend({
          evt: bB(GR.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: lF({
            participants: CB.shape.participants
          })
        })
      }
    };
    const hR = lF({}).nullable(),
      qR = lF({
        code: GF()
      }),
      CR = lF({
        guilds: jF(lF({
          id: GF(),
          name: GF()
        }))
      }),
      ZR = lF({
        id: GF(),
        name: GF(),
        icon_url: GF().optional(),
        members: jF(QB)
      }),
      pR = lF({
        id: GF(),
        type: DB(XR),
        guild_id: GF().optional().nullable(),
        name: GF().optional().nullable(),
        topic: GF().optional().nullable(),
        bitrate: TF().optional().nullable(),
        user_limit: TF().optional().nullable(),
        position: TF().optional().nullable(),
        voice_states: jF(BR),
        messages: jF(LR)
      }),
      KR = lF({
        channels: jF(bR)
      }),
      xR = (pR.nullable(), pR.nullable()),
      jR = pR.nullable(),
      lR = (lF({
        input: NR,
        output: NR,
        mode: SR,
        automatic_gain_control: zF(),
        echo_cancellation: zF(),
        noise_suppression: zF(),
        qos: zF(),
        silence_warning: zF(),
        deaf: zF(),
        mute: zF()
      }), lF({
        evt: GF()
      })),
      nR = lF({
        shortcut: ER
      }),
      IR = tR,
      QR = lF({
        skus: jF(HR)
      }),
      kt = lF({
        entitlements: jF(uR)
      }),
      Ft = jF(uR).nullable(),
      Bt = lF({
        use_interactive_pip: zF()
      }),
      Rt = lF({
        locale: GF()
      }),
      tt = lF({
        enabled: zF()
      }),
      Xt = lF({
        permissions: DF().or(GF())
      }),
      bt = lF({
        iosKeyboardResizesView: JB(zF())
      }),
      wt = nB.extend({
        cmd: dB(lB),
        evt: CF()
      });

    function dt(kk) {
      let {
        cmd: Fk,
        data: Bk
      } = kk;
      switch (Fk) {
        case lB.AUTHORIZE:
          return qR.parse(Bk);
        case lB.CAPTURE_SHORTCUT:
          return nR.parse(Bk);
        case lB.ENCOURAGE_HW_ACCELERATION:
          return tt.parse(Bk);
        case lB.GET_CHANNEL:
          return pR.parse(Bk);
        case lB.GET_CHANNELS:
          return KR.parse(Bk);
        case lB.GET_CHANNEL_PERMISSIONS:
          return Xt.parse(Bk);
        case lB.GET_GUILD:
          return ZR.parse(Bk);
        case lB.GET_GUILDS:
          return CR.parse(Bk);
        case lB.GET_PLATFORM_BEHAVIORS:
          return bt.parse(Bk);
        case lB.GET_CHANNEL:
          return pR.parse(Bk);
        case lB.SELECT_TEXT_CHANNEL:
          return jR.parse(Bk);
        case lB.SELECT_VOICE_CHANNEL:
          return xR.parse(Bk);
        case lB.SET_ACTIVITY:
          return IR.parse(Bk);
        case lB.GET_SKUS_EMBEDDED:
          return QR.parse(Bk);
        case lB.GET_ENTITLEMENTS_EMBEDDED:
          return kt.parse(Bk);
        case lB.SET_CONFIG:
          return Bt.parse(Bk);
        case lB.START_PURCHASE:
          return Ft.parse(Bk);
        case lB.SUBSCRIBE:
        case lB.UNSUBSCRIBE:
          return lR.parse(Bk);
        case lB.USER_SETTINGS_GET_LOCALE:
          return Rt.parse(Bk);
        case lB.OPEN_EXTERNAL_LINK:
        case lB.SET_ORIENTATION_LOCK_STATE:
        case lB.SET_CERTIFIED_DEVICES:
        case lB.SEND_ANALYTICS_EVENT:
        case lB.OPEN_INVITE_DIALOG:
        case lB.CAPTURE_LOG:
        case lB.GET_SKUS:
        case lB.GET_ENTITLEMENTS:
          return hR.parse(Bk);
        case lB.AUTHENTICATE:
        case lB.INITIATE_IMAGE_UPLOAD:
        case lB.OPEN_SHARE_MOMENT_DIALOG:
        case lB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: kk
          } = xB[Fk];
          return kk.parse(Bk);
        default:
          ! function(kk, Fk) {
            throw Fk
          }(0, new Error(`Unrecognized command ${Fk}`))
      }
    }
    lF({
      frame_id: GF(),
      platform: dB(TB).optional().nullable()
    }), lF({
      v: bB(1),
      encoding: bB("json").optional(),
      client_id: GF(),
      frame_id: GF()
    });
    const st = lF({
        code: TF(),
        message: GF().optional()
      }),
      Vt = lF({
        evt: GF().nullable(),
        nonce: GF().nullable(),
        data: pF().nullable(),
        cmd: GF()
      }).passthrough();

    function Jt(kk) {
      const Fk = Vt.parse(kk);
      return null != Fk.evt ? Fk.evt === cR ? rR.parse(Fk) : function(kk) {
        const Fk = kk.evt;
        if (!(Fk in GR)) throw new Error(`Unrecognized event type ${kk.evt}`);
        return PR[Fk].payload.parse(kk)
      }(zR.parse(Fk)) : function(kk) {
        return Object.assign(Object.assign({}, kk), {
          data: dt(kk)
        })
      }(wt.passthrough().parse(Fk))
    }

    function At(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const tk = nB.extend({
        cmd: bB(Fk),
        data: Bk
      });
      return async Bk => {
        const ak = await kk({
          cmd: Fk,
          args: Bk,
          transfer: Rk(Bk)
        });
        return tk.parse(ak).data
      }
    }

    function et(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Bk = xB[kk].response,
        Rk = nB.extend({
          cmd: bB(kk),
          data: Bk
        });
      return Bk => async tk => {
        const ak = await Bk({
          cmd: kk,
          args: tk,
          transfer: Fk(tk)
        });
        return Rk.parse(ak).data
      }
    }
    const yt = et(ZB.AUTHENTICATE),
      ft = kk => At(kk, lB.AUTHORIZE, qR),
      mt = kk => At(kk, lB.CAPTURE_LOG, hR),
      Wt = kk => At(kk, lB.ENCOURAGE_HW_ACCELERATION, tt),
      vt = kk => At(kk, lB.GET_ENTITLEMENTS_EMBEDDED, kt),
      it = kk => At(kk, lB.GET_SKUS_EMBEDDED, QR),
      Yt = kk => At(kk, lB.GET_CHANNEL_PERMISSIONS, Xt),
      ot = kk => At(kk, lB.GET_PLATFORM_BEHAVIORS, bt),
      Lt = kk => At(kk, lB.OPEN_EXTERNAL_LINK, hR),
      Ot = kk => At(kk, lB.OPEN_INVITE_DIALOG, hR),
      Et = et(ZB.OPEN_SHARE_MOMENT_DIALOG);
    tR.AA({
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
      type: tR.shape.type.optional(),
      instance: tR.shape.instance.optional()
    }).nullable();
    const St = kk => At(kk, lB.SET_ACTIVITY, IR),
      Nt = kk => At(kk, lB.SET_CONFIG, Bt);
    const Ht = kk => ({
        lock_state: kk.lock_state,
        picture_in_picture_lock_state: kk.picture_in_picture_lock_state
      }),
      ut = kk => function(kk) {
        let {
          sendCommand: Fk,
          cmd: Bk,
          response: Rk,
          fallbackTransform: tk,
          transferTransform: ak = () => {}
        } = kk;
        const Xk = nB.extend({
          cmd: bB(Bk),
          data: Rk
        });
        return async kk => {
          try {
            const Rk = await Fk({
              cmd: Bk,
              args: kk,
              transfer: ak(kk)
            });
            return Xk.parse(Rk).data
          } catch (Rk) {
            if (Rk.code === cB.INVALID_PAYLOAD) {
              const Rk = tk(kk),
                bk = await Fk({
                  cmd: Bk,
                  args: Rk,
                  transfer: ak(Rk)
                });
              return Xk.parse(bk).data
            }
            throw Rk
          }
        }
      }({
        sendCommand: kk,
        cmd: lB.SET_ORIENTATION_LOCK_STATE,
        response: hR,
        fallbackTransform: Ht
      }),
      Mt = kk => At(kk, lB.START_PURCHASE, Ft),
      gt = kk => At(kk, lB.USER_SETTINGS_GET_LOCALE, Rt),
      Ut = et(ZB.INITIATE_IMAGE_UPLOAD),
      ct = kk => At(kk, lB.GET_CHANNEL, pR),
      Gt = et(ZB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Tt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function rt(kk) {
      return "string" === typeof kk && Tt.test(kk)
    }
    for (var Dt = [], zt = 0; zt < 256; ++zt) Dt.push((zt + 256).toString(16).substr(1));

    function Pt(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = (Dt[kk[Fk + 0]] + Dt[kk[Fk + 1]] + Dt[kk[Fk + 2]] + Dt[kk[Fk + 3]] + "-" + Dt[kk[Fk + 4]] + Dt[kk[Fk + 5]] + "-" + Dt[kk[Fk + 6]] + Dt[kk[Fk + 7]] + "-" + Dt[kk[Fk + 8]] + Dt[kk[Fk + 9]] + "-" + Dt[kk[Fk + 10]] + Dt[kk[Fk + 11]] + Dt[kk[Fk + 12]] + Dt[kk[Fk + 13]] + Dt[kk[Fk + 14]] + Dt[kk[Fk + 15]]).toLowerCase();
      if (!rt(Bk)) throw TypeError("Stringified UUID is invalid");
      return Bk
    }
    var ht;

    function qt(kk, Fk, Bk) {
      function Rk(kk, Rk, tk, ak) {
        if ("string" === typeof kk && (kk = function(kk) {
            kk = unescape(encodeURIComponent(kk));
            for (var Fk = [], Bk = 0; Bk < kk.length; ++Bk) Fk.push(kk.charCodeAt(Bk));
            return Fk
          }(kk)), "string" === typeof Rk && (Rk = function(kk) {
            if (!rt(kk)) throw TypeError("Invalid UUID");
            var Fk, Bk = new Uint8Array(16);
            return Bk[0] = (Fk = parseInt(kk.slice(0, 8), 16)) >>> 24, Bk[1] = Fk >>> 16 & 255, Bk[2] = Fk >>> 8 & 255, Bk[3] = 255 & Fk, Bk[4] = (Fk = parseInt(kk.slice(9, 13), 16)) >>> 8, Bk[5] = 255 & Fk, Bk[6] = (Fk = parseInt(kk.slice(14, 18), 16)) >>> 8, Bk[7] = 255 & Fk, Bk[8] = (Fk = parseInt(kk.slice(19, 23), 16)) >>> 8, Bk[9] = 255 & Fk, Bk[10] = (Fk = parseInt(kk.slice(24, 36), 16)) / 1099511627776 & 255, Bk[11] = Fk / 4294967296 & 255, Bk[12] = Fk >>> 24 & 255, Bk[13] = Fk >>> 16 & 255, Bk[14] = Fk >>> 8 & 255, Bk[15] = 255 & Fk, Bk
          }(Rk)), 16 !== Rk.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Xk = new Uint8Array(16 + kk.length);
        if (Xk.set(Rk), Xk.set(kk, Rk.length), (Xk = Bk(Xk))[6] = 15 & Xk[6] | Fk, Xk[8] = 63 & Xk[8] | 128, tk) {
          ak = ak || 0;
          for (var bk = 0; bk < 16; ++bk) tk[ak + bk] = Xk[bk];
          return tk
        }
        return Pt(Xk)
      }
      try {
        Rk.name = kk
      } catch (tk) {}
      return Rk.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Rk.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Rk
    }

    function Ct(kk) {
      return 14 + (kk + 64 >>> 9 << 4) + 1
    }

    function Zt(kk, Fk) {
      var Bk = (65535 & kk) + (65535 & Fk);
      return (kk >> 16) + (Fk >> 16) + (Bk >> 16) << 16 | 65535 & Bk
    }

    function pt(kk, Fk, Bk, Rk, tk, ak) {
      return Zt((Xk = Zt(Zt(Fk, kk), Zt(Rk, ak))) << (bk = tk) | Xk >>> 32 - bk, Bk);
      var Xk, bk
    }

    function Kt(kk, Fk, Bk, Rk, tk, ak, Xk) {
      return pt(Fk & Bk | ~Fk & Rk, kk, Fk, tk, ak, Xk)
    }

    function xt(kk, Fk, Bk, Rk, tk, ak, Xk) {
      return pt(Fk & Rk | Bk & ~Rk, kk, Fk, tk, ak, Xk)
    }

    function jt(kk, Fk, Bk, Rk, tk, ak, Xk) {
      return pt(Fk ^ Bk ^ Rk, kk, Fk, tk, ak, Xk)
    }

    function lt(kk, Fk, Bk, Rk, tk, ak, Xk) {
      return pt(Bk ^ (Fk | ~Rk), kk, Fk, tk, ak, Xk)
    }
    qt("v3", 48, (function(kk) {
      if ("string" === typeof kk) {
        var Fk = unescape(encodeURIComponent(kk));
        kk = new Uint8Array(Fk.length);
        for (var Bk = 0; Bk < Fk.length; ++Bk) kk[Bk] = Fk.charCodeAt(Bk)
      }
      return function(kk) {
        for (var Fk = [], Bk = 32 * kk.length, Rk = "0123456789abcdef", tk = 0; tk < Bk; tk += 8) {
          var ak = kk[tk >> 5] >>> tk % 32 & 255,
            Xk = parseInt(Rk.charAt(ak >>> 4 & 15) + Rk.charAt(15 & ak), 16);
          Fk.push(Xk)
        }
        return Fk
      }(function(kk, Fk) {
        kk[Fk >> 5] |= 128 << Fk % 32, kk[Ct(Fk) - 1] = Fk;
        for (var Bk = 1732584193, Rk = -271733879, tk = -1732584194, ak = 271733878, Xk = 0; Xk < kk.length; Xk += 16) {
          var bk = Bk,
            wk = Rk,
            dk = tk,
            sk = ak;
          Bk = Kt(Bk, Rk, tk, ak, kk[Xk], 7, -680876936), ak = Kt(ak, Bk, Rk, tk, kk[Xk + 1], 12, -389564586), tk = Kt(tk, ak, Bk, Rk, kk[Xk + 2], 17, 606105819), Rk = Kt(Rk, tk, ak, Bk, kk[Xk + 3], 22, -1044525330), Bk = Kt(Bk, Rk, tk, ak, kk[Xk + 4], 7, -176418897), ak = Kt(ak, Bk, Rk, tk, kk[Xk + 5], 12, 1200080426), tk = Kt(tk, ak, Bk, Rk, kk[Xk + 6], 17, -1473231341), Rk = Kt(Rk, tk, ak, Bk, kk[Xk + 7], 22, -45705983), Bk = Kt(Bk, Rk, tk, ak, kk[Xk + 8], 7, 1770035416), ak = Kt(ak, Bk, Rk, tk, kk[Xk + 9], 12, -1958414417), tk = Kt(tk, ak, Bk, Rk, kk[Xk + 10], 17, -42063), Rk = Kt(Rk, tk, ak, Bk, kk[Xk + 11], 22, -1990404162), Bk = Kt(Bk, Rk, tk, ak, kk[Xk + 12], 7, 1804603682), ak = Kt(ak, Bk, Rk, tk, kk[Xk + 13], 12, -40341101), tk = Kt(tk, ak, Bk, Rk, kk[Xk + 14], 17, -1502002290), Bk = xt(Bk, Rk = Kt(Rk, tk, ak, Bk, kk[Xk + 15], 22, 1236535329), tk, ak, kk[Xk + 1], 5, -165796510), ak = xt(ak, Bk, Rk, tk, kk[Xk + 6], 9, -1069501632), tk = xt(tk, ak, Bk, Rk, kk[Xk + 11], 14, 643717713), Rk = xt(Rk, tk, ak, Bk, kk[Xk], 20, -373897302), Bk = xt(Bk, Rk, tk, ak, kk[Xk + 5], 5, -701558691), ak = xt(ak, Bk, Rk, tk, kk[Xk + 10], 9, 38016083), tk = xt(tk, ak, Bk, Rk, kk[Xk + 15], 14, -660478335), Rk = xt(Rk, tk, ak, Bk, kk[Xk + 4], 20, -405537848), Bk = xt(Bk, Rk, tk, ak, kk[Xk + 9], 5, 568446438), ak = xt(ak, Bk, Rk, tk, kk[Xk + 14], 9, -1019803690), tk = xt(tk, ak, Bk, Rk, kk[Xk + 3], 14, -187363961), Rk = xt(Rk, tk, ak, Bk, kk[Xk + 8], 20, 1163531501), Bk = xt(Bk, Rk, tk, ak, kk[Xk + 13], 5, -1444681467), ak = xt(ak, Bk, Rk, tk, kk[Xk + 2], 9, -51403784), tk = xt(tk, ak, Bk, Rk, kk[Xk + 7], 14, 1735328473), Bk = jt(Bk, Rk = xt(Rk, tk, ak, Bk, kk[Xk + 12], 20, -1926607734), tk, ak, kk[Xk + 5], 4, -378558), ak = jt(ak, Bk, Rk, tk, kk[Xk + 8], 11, -2022574463), tk = jt(tk, ak, Bk, Rk, kk[Xk + 11], 16, 1839030562), Rk = jt(Rk, tk, ak, Bk, kk[Xk + 14], 23, -35309556), Bk = jt(Bk, Rk, tk, ak, kk[Xk + 1], 4, -1530992060), ak = jt(ak, Bk, Rk, tk, kk[Xk + 4], 11, 1272893353), tk = jt(tk, ak, Bk, Rk, kk[Xk + 7], 16, -155497632), Rk = jt(Rk, tk, ak, Bk, kk[Xk + 10], 23, -1094730640), Bk = jt(Bk, Rk, tk, ak, kk[Xk + 13], 4, 681279174), ak = jt(ak, Bk, Rk, tk, kk[Xk], 11, -358537222), tk = jt(tk, ak, Bk, Rk, kk[Xk + 3], 16, -722521979), Rk = jt(Rk, tk, ak, Bk, kk[Xk + 6], 23, 76029189), Bk = jt(Bk, Rk, tk, ak, kk[Xk + 9], 4, -640364487), ak = jt(ak, Bk, Rk, tk, kk[Xk + 12], 11, -421815835), tk = jt(tk, ak, Bk, Rk, kk[Xk + 15], 16, 530742520), Bk = lt(Bk, Rk = jt(Rk, tk, ak, Bk, kk[Xk + 2], 23, -995338651), tk, ak, kk[Xk], 6, -198630844), ak = lt(ak, Bk, Rk, tk, kk[Xk + 7], 10, 1126891415), tk = lt(tk, ak, Bk, Rk, kk[Xk + 14], 15, -1416354905), Rk = lt(Rk, tk, ak, Bk, kk[Xk + 5], 21, -57434055), Bk = lt(Bk, Rk, tk, ak, kk[Xk + 12], 6, 1700485571), ak = lt(ak, Bk, Rk, tk, kk[Xk + 3], 10, -1894986606), tk = lt(tk, ak, Bk, Rk, kk[Xk + 10], 15, -1051523), Rk = lt(Rk, tk, ak, Bk, kk[Xk + 1], 21, -2054922799), Bk = lt(Bk, Rk, tk, ak, kk[Xk + 8], 6, 1873313359), ak = lt(ak, Bk, Rk, tk, kk[Xk + 15], 10, -30611744), tk = lt(tk, ak, Bk, Rk, kk[Xk + 6], 15, -1560198380), Rk = lt(Rk, tk, ak, Bk, kk[Xk + 13], 21, 1309151649), Bk = lt(Bk, Rk, tk, ak, kk[Xk + 4], 6, -145523070), ak = lt(ak, Bk, Rk, tk, kk[Xk + 11], 10, -1120210379), tk = lt(tk, ak, Bk, Rk, kk[Xk + 2], 15, 718787259), Rk = lt(Rk, tk, ak, Bk, kk[Xk + 9], 21, -343485551), Bk = Zt(Bk, bk), Rk = Zt(Rk, wk), tk = Zt(tk, dk), ak = Zt(ak, sk)
        }
        return [Bk, Rk, tk, ak]
      }(function(kk) {
        if (0 === kk.length) return [];
        for (var Fk = 8 * kk.length, Bk = new Uint32Array(Ct(Fk)), Rk = 0; Rk < Fk; Rk += 8) Bk[Rk >> 5] |= (255 & kk[Rk / 8]) << Rk % 32;
        return Bk
      }(kk), 8 * kk.length))
    }));
    var nt = new Uint8Array(16);

    function It() {
      if (!ht && !(ht = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return ht(nt)
    }

    function Qt(kk, Fk, Bk) {
      var Rk = (kk = kk || {}).random || (kk.rng || It)();
      if (Rk[6] = 15 & Rk[6] | 64, Rk[8] = 63 & Rk[8] | 128, Fk) {
        Bk = Bk || 0;
        for (var tk = 0; tk < 16; ++tk) Fk[Bk + tk] = Rk[tk];
        return Fk
      }
      return Pt(Rk)
    }

    function ka(kk, Fk, Bk, Rk) {
      switch (kk) {
        case 0:
          return Fk & Bk ^ ~Fk & Rk;
        case 1:
        case 3:
          return Fk ^ Bk ^ Rk;
        case 2:
          return Fk & Bk ^ Fk & Rk ^ Bk & Rk
      }
    }

    function Fa(kk, Fk) {
      return kk << Fk | kk >>> 32 - Fk
    }
    qt("v5", 80, (function(kk) {
      var Fk = [1518500249, 1859775393, 2400959708, 3395469782],
        Bk = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof kk) {
        var Rk = unescape(encodeURIComponent(kk));
        kk = [];
        for (var tk = 0; tk < Rk.length; ++tk) kk.push(Rk.charCodeAt(tk))
      } else Array.isArray(kk) || (kk = Array.prototype.slice.call(kk));
      kk.push(128);
      for (var ak = kk.length / 4 + 2, Xk = Math.ceil(ak / 16), bk = new Array(Xk), wk = 0; wk < Xk; ++wk) {
        for (var dk = new Uint32Array(16), sk = 0; sk < 16; ++sk) dk[sk] = kk[64 * wk + 4 * sk] << 24 | kk[64 * wk + 4 * sk + 1] << 16 | kk[64 * wk + 4 * sk + 2] << 8 | kk[64 * wk + 4 * sk + 3];
        bk[wk] = dk
      }
      bk[Xk - 1][14] = 8 * (kk.length - 1) / Math.pow(2, 32), bk[Xk - 1][14] = Math.floor(bk[Xk - 1][14]), bk[Xk - 1][15] = 8 * (kk.length - 1) & 4294967295;
      for (var Vk = 0; Vk < Xk; ++Vk) {
        for (var Jk = new Uint32Array(80), Ak = 0; Ak < 16; ++Ak) Jk[Ak] = bk[Vk][Ak];
        for (var ek = 16; ek < 80; ++ek) Jk[ek] = Fa(Jk[ek - 3] ^ Jk[ek - 8] ^ Jk[ek - 14] ^ Jk[ek - 16], 1);
        for (var yk = Bk[0], fk = Bk[1], mk = Bk[2], Wk = Bk[3], vk = Bk[4], ik = 0; ik < 80; ++ik) {
          var Yk = Math.floor(ik / 20),
            Lk = Fa(yk, 5) + ka(Yk, fk, mk, Wk) + vk + Fk[Yk] + Jk[ik] >>> 0;
          vk = Wk, Wk = mk, mk = Fa(fk, 30) >>> 0, fk = yk, yk = Lk
        }
        Bk[0] = Bk[0] + yk >>> 0, Bk[1] = Bk[1] + fk >>> 0, Bk[2] = Bk[2] + mk >>> 0, Bk[3] = Bk[3] + Wk >>> 0, Bk[4] = Bk[4] + vk >>> 0
      }
      return [Bk[0] >> 24 & 255, Bk[0] >> 16 & 255, Bk[0] >> 8 & 255, 255 & Bk[0], Bk[1] >> 24 & 255, Bk[1] >> 16 & 255, Bk[1] >> 8 & 255, 255 & Bk[1], Bk[2] >> 24 & 255, Bk[2] >> 16 & 255, Bk[2] >> 8 & 255, 255 & Bk[2], Bk[3] >> 24 & 255, Bk[3] >> 16 & 255, Bk[3] >> 8 & 255, 255 & Bk[3], Bk[4] >> 24 & 255, Bk[4] >> 16 & 255, Bk[4] >> 8 & 255, 255 & Bk[4]]
    }));
    class Ba extends Error {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Fk), this.code = kk, this.message = Fk, this.name = "Discord SDK Error"
      }
    }
    const Ra = ["log", "warn", "debug", "info", "error"];
    var ta;
    ! function(kk) {
      kk[kk.HANDSHAKE = 0] = "HANDSHAKE", kk[kk.FRAME = 1] = "FRAME", kk[kk.CLOSE = 2] = "CLOSE", kk[kk.HELLO = 3] = "HELLO"
    }(ta || (ta = {}));
    const aa = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Xa {
      getTransfer(kk) {
        var Fk;
        switch (kk.cmd) {
          case lB.SUBSCRIBE:
          case lB.UNSUBSCRIBE:
            return;
          default:
            return null !== (Fk = kk.transfer) && void 0 !== Fk ? Fk : void 0
        }
      }
      constructor(kk, Fk) {
        var Bk;
        if (this.eventBus = new dk, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = kk => {
            var Fk;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Bk = Qt();
            null === (Fk = this.source) || void 0 === Fk || Fk.postMessage([ta.FRAME, Object.assign(Object.assign({}, kk), {
              nonce: Bk
            })], this.sourceOrigin, this.getTransfer(kk));
            return new Promise(((kk, Fk) => {
              this.pendingCommands.set(Bk, {
                resolve: kk,
                reject: Fk
              })
            }))
          }, this.commands = (Bk = this.sendCommand, {
            authenticate: yt(Bk),
            authorize: ft(Bk),
            captureLog: mt(Bk),
            encourageHardwareAcceleration: Wt(Bk),
            getChannel: ct(Bk),
            getChannelPermissions: Yt(Bk),
            getEntitlements: vt(Bk),
            getPlatformBehaviors: ot(Bk),
            getSkus: it(Bk),
            openExternalLink: Lt(Bk),
            openInviteDialog: Ot(Bk),
            openShareMomentDialog: Et(Bk),
            setActivity: St(Bk),
            setConfig: Nt(Bk),
            setOrientationLockState: ut(Bk),
            startPurchase: Mt(Bk),
            userSettingsGetLocale: gt(Bk),
            initiateImageUpload: Ut(Bk),
            getInstanceConnectedParticipants: Gt(Bk)
          }), this.handleMessage = kk => {
            if (!aa.has(kk.origin)) return;
            const Fk = kk.data;
            if (!Array.isArray(Fk)) return;
            const [Bk, Rk] = Fk;
            switch (Bk) {
              case ta.HELLO:
                return;
              case ta.CLOSE:
                return this.handleClose(Rk);
              case ta.HANDSHAKE:
                return this.handleHandshake();
              case ta.FRAME:
                return this.handleFrame(Rk);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = kk, this.configuration = null !== Fk && void 0 !== Fk ? Fk : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = TB.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Rk = new URLSearchParams(this._getSearch()),
          tk = Rk.get("frame_id");
        if (!tk) throw new Error("frame_id query param is not defined");
        this.frameId = tk;
        const ak = Rk.get("instance_id");
        if (!ak) throw new Error("instance_id query param is not defined");
        this.instanceId = ak;
        const Xk = Rk.get("platform");
        if (!Xk) throw new Error("platform query param is not defined");
        if (Xk !== TB.DESKTOP && Xk !== TB.MOBILE) throw new Error(`Invalid query param "platform" of "${Xk}". Valid values are "${TB.DESKTOP}" or "${TB.MOBILE}"`);
        this.platform = Xk, this.guildId = Rk.get("guild_id"), this.channelId = Rk.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var kk;
          return [null !== (kk = window.parent.opener) && void 0 !== kk ? kk : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(kk, Fk) {
        var Bk;
        window.removeEventListener("message", this.handleMessage);
        const Rk = Qt();
        null === (Bk = this.source) || void 0 === Bk || Bk.postMessage([ta.CLOSE, {
          code: kk,
          message: Fk,
          nonce: Rk
        }], this.sourceOrigin)
      }
      async subscribe(kk, Fk) {
        for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
        const [ak] = Rk, Xk = this.eventBus.listenerCount(kk), bk = this.eventBus.on(kk, Fk);
        return Object.values(GR).includes(kk) && kk !== GR.READY && 0 === Xk && await this.sendCommand({
          cmd: lB.SUBSCRIBE,
          args: ak,
          evt: kk
        }), bk
      }
      async unsubscribe(kk, Fk) {
        for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
        const [ak] = Rk;
        return kk !== GR.READY && 1 === this.eventBus.listenerCount(kk) && await this.sendCommand({
          cmd: lB.UNSUBSCRIBE,
          evt: kk,
          args: ak
        }), this.eventBus.off(kk, Fk)
      }
      async ready() {
        this.isReady || await new Promise((kk => {
          this.eventBus.once(GR.READY, kk)
        }))
      }
      handshake() {
        var kk;
        null === (kk = this.source) || void 0 === kk || kk.postMessage([ta.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(GR.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const kk = (kk, Fk) => {
          this.commands.captureLog({
            level: kk,
            message: Fk
          })
        };
        Ra.forEach((Fk => {
          ! function(kk, Fk, Bk) {
            const Rk = kk[Fk],
              tk = kk;
            Rk && (kk[Fk] = function() {
              const kk = [].slice.call(arguments),
                ak = "" + kk.join(" ");
              Bk(Fk, ak), Rk.apply(tk, kk)
            })
          }(console, Fk, kk)
        }))
      }
      handleClose(kk) {
        st.parse(kk)
      }
      handleHandshake() {}
      handleFrame(kk) {
        var Fk, Bk;
        let Rk;
        try {
          Rk = Jt(kk)
        } catch (tk) {
          return console.error("Failed to parse", kk), void console.error(tk)
        }
        if ("DISPATCH" === Rk.cmd) this.eventBus.emit(Rk.evt, Rk.data);
        else {
          if (Rk.evt === cR) {
            if (null != Rk.nonce) return null === (Fk = this.pendingCommands.get(Rk.nonce)) || void 0 === Fk || Fk.reject(Rk.data), void this.pendingCommands.delete(Rk.nonce);
            this.eventBus.emit("error", new Ba(Rk.data.code, Rk.data.message))
          }
          if (null == Rk.nonce) return void console.error("Missing nonce", kk);
          null === (Bk = this.pendingCommands.get(Rk.nonce)) || void 0 === Bk || Bk.resolve(Rk), this.pendingCommands.delete(Rk.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var ba, wa = 1e9,
      da = !0,
      sa = "[DecimalError] ",
      Va = sa + "Invalid argument: ",
      Ja = sa + "Exponent out of range: ",
      Aa = Math.floor,
      ea = Math.pow,
      ya = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      fa = 1e7,
      ma = 9007199254740991,
      Wa = Aa(1286742750677284.5),
      va = {};

    function ia(kk, Fk) {
      var Bk, Rk, tk, ak, Xk, bk, wk, dk, sk = kk.constructor,
        Vk = sk.precision;
      if (!kk.s || !Fk.s) return Fk.s || (Fk = new sk(kk)), da ? Ma(Fk, Vk) : Fk;
      if (wk = kk.d, dk = Fk.d, Xk = kk.e, tk = Fk.e, wk = wk.slice(), ak = Xk - tk) {
        for (ak < 0 ? (Rk = wk, ak = -ak, bk = dk.length) : (Rk = dk, tk = Xk, bk = wk.length), ak > (bk = (Xk = Math.ceil(Vk / 7)) > bk ? Xk + 1 : bk + 1) && (ak = bk, Rk.length = 1), Rk.reverse(); ak--;) Rk.push(0);
        Rk.reverse()
      }
      for ((bk = wk.length) - (ak = dk.length) < 0 && (ak = bk, Rk = dk, dk = wk, wk = Rk), Bk = 0; ak;) Bk = (wk[--ak] = wk[ak] + dk[ak] + Bk) / fa | 0, wk[ak] %= fa;
      for (Bk && (wk.unshift(Bk), ++tk), bk = wk.length; 0 == wk[--bk];) wk.pop();
      return Fk.d = wk, Fk.e = tk, da ? Ma(Fk, Vk) : Fk
    }

    function Ya(kk, Fk, Bk) {
      if (kk !== ~~kk || kk < Fk || kk > Bk) throw Error(Va + kk)
    }

    function oa(kk) {
      var Fk, Bk, Rk, tk = kk.length - 1,
        ak = "",
        Xk = kk[0];
      if (tk > 0) {
        for (ak += Xk, Fk = 1; Fk < tk; Fk++)(Bk = 7 - (Rk = kk[Fk] + "").length) && (ak += Na(Bk)), ak += Rk;
        (Bk = 7 - (Rk = (Xk = kk[Fk]) + "").length) && (ak += Na(Bk))
      } else if (0 === Xk) return "0";
      for (; Xk % 10 === 0;) Xk /= 10;
      return ak + Xk
    }
    va.absoluteValue = va.abs = function() {
      var kk = new this.constructor(this);
      return kk.s && (kk.s = 1), kk
    }, va.comparedTo = va.cmp = function(kk) {
      var Fk, Bk, Rk, tk, ak = this;
      if (kk = new ak.constructor(kk), ak.s !== kk.s) return ak.s || -kk.s;
      if (ak.e !== kk.e) return ak.e > kk.e ^ ak.s < 0 ? 1 : -1;
      for (Fk = 0, Bk = (Rk = ak.d.length) < (tk = kk.d.length) ? Rk : tk; Fk < Bk; ++Fk)
        if (ak.d[Fk] !== kk.d[Fk]) return ak.d[Fk] > kk.d[Fk] ^ ak.s < 0 ? 1 : -1;
      return Rk === tk ? 0 : Rk > tk ^ ak.s < 0 ? 1 : -1
    }, va.decimalPlaces = va.dp = function() {
      var kk = this,
        Fk = kk.d.length - 1,
        Bk = 7 * (Fk - kk.e);
      if (Fk = kk.d[Fk])
        for (; Fk % 10 == 0; Fk /= 10) Bk--;
      return Bk < 0 ? 0 : Bk
    }, va.dividedBy = va.div = function(kk) {
      return La(this, new this.constructor(kk))
    }, va.dividedToIntegerBy = va.idiv = function(kk) {
      var Fk = this.constructor;
      return Ma(La(this, new Fk(kk), 0, 1), Fk.precision)
    }, va.equals = va.eq = function(kk) {
      return !this.cmp(kk)
    }, va.exponent = function() {
      return Ea(this)
    }, va.greaterThan = va.gt = function(kk) {
      return this.cmp(kk) > 0
    }, va.greaterThanOrEqualTo = va.gte = function(kk) {
      return this.cmp(kk) >= 0
    }, va.isInteger = va.isint = function() {
      return this.e > this.d.length - 2
    }, va.isNegative = va.isneg = function() {
      return this.s < 0
    }, va.isPositive = va.ispos = function() {
      return this.s > 0
    }, va.isZero = function() {
      return 0 === this.s
    }, va.lessThan = va.lt = function(kk) {
      return this.cmp(kk) < 0
    }, va.lessThanOrEqualTo = va.lte = function(kk) {
      return this.cmp(kk) < 1
    }, va.logarithm = va.log = function(kk) {
      var Fk, Bk = this,
        Rk = Bk.constructor,
        tk = Rk.precision,
        ak = tk + 5;
      if (void 0 === kk) kk = new Rk(10);
      else if ((kk = new Rk(kk)).s < 1 || kk.eq(ba)) throw Error(sa + "NaN");
      if (Bk.s < 1) throw Error(sa + (Bk.s ? "NaN" : "-Infinity"));
      return Bk.eq(ba) ? new Rk(0) : (da = !1, Fk = La(Ha(Bk, ak), Ha(kk, ak), ak), da = !0, Ma(Fk, tk))
    }, va.minus = va.sub = function(kk) {
      var Fk = this;
      return kk = new Fk.constructor(kk), Fk.s == kk.s ? ga(Fk, kk) : ia(Fk, (kk.s = -kk.s, kk))
    }, va.modulo = va.mod = function(kk) {
      var Fk, Bk = this,
        Rk = Bk.constructor,
        tk = Rk.precision;
      if (!(kk = new Rk(kk)).s) throw Error(sa + "NaN");
      return Bk.s ? (da = !1, Fk = La(Bk, kk, 0, 1).times(kk), da = !0, Bk.minus(Fk)) : Ma(new Rk(Bk), tk)
    }, va.naturalExponential = va.exp = function() {
      return Oa(this)
    }, va.naturalLogarithm = va.ln = function() {
      return Ha(this)
    }, va.negated = va.neg = function() {
      var kk = new this.constructor(this);
      return kk.s = -kk.s || 0, kk
    }, va.plus = va.add = function(kk) {
      var Fk = this;
      return kk = new Fk.constructor(kk), Fk.s == kk.s ? ia(Fk, kk) : ga(Fk, (kk.s = -kk.s, kk))
    }, va.precision = va.sd = function(kk) {
      var Fk, Bk, Rk, tk = this;
      if (void 0 !== kk && kk !== !!kk && 1 !== kk && 0 !== kk) throw Error(Va + kk);
      if (Fk = Ea(tk) + 1, Bk = 7 * (Rk = tk.d.length - 1) + 1, Rk = tk.d[Rk]) {
        for (; Rk % 10 == 0; Rk /= 10) Bk--;
        for (Rk = tk.d[0]; Rk >= 10; Rk /= 10) Bk++
      }
      return kk && Fk > Bk ? Fk : Bk
    }, va.squareRoot = va.sqrt = function() {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk = this,
        wk = bk.constructor;
      if (bk.s < 1) {
        if (!bk.s) return new wk(0);
        throw Error(sa + "NaN")
      }
      for (kk = Ea(bk), da = !1, 0 == (tk = Math.sqrt(+bk)) || tk == 1 / 0 ? (((Fk = oa(bk.d)).length + kk) % 2 == 0 && (Fk += "0"), tk = Math.sqrt(Fk), kk = Aa((kk + 1) / 2) - (kk < 0 || kk % 2), Rk = new wk(Fk = tk == 1 / 0 ? "1e" + kk : (Fk = tk.toExponential()).slice(0, Fk.indexOf("e") + 1) + kk)) : Rk = new wk(tk.toString()), tk = Xk = (Bk = wk.precision) + 3;;)
        if (Rk = (ak = Rk).plus(La(bk, ak, Xk + 2)).times(.5), oa(ak.d).slice(0, Xk) === (Fk = oa(Rk.d)).slice(0, Xk)) {
          if (Fk = Fk.slice(Xk - 3, Xk + 1), tk == Xk && "4999" == Fk) {
            if (Ma(ak, Bk + 1, 0), ak.times(ak).eq(bk)) {
              Rk = ak;
              break
            }
          } else if ("9999" != Fk) break;
          Xk += 4
        } return da = !0, Ma(Rk, Bk)
    }, va.times = va.mul = function(kk) {
      var Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk = this,
        Vk = sk.constructor,
        Jk = sk.d,
        Ak = (kk = new Vk(kk)).d;
      if (!sk.s || !kk.s) return new Vk(0);
      for (kk.s *= sk.s, Bk = sk.e + kk.e, (wk = Jk.length) < (dk = Ak.length) && (ak = Jk, Jk = Ak, Ak = ak, Xk = wk, wk = dk, dk = Xk), ak = [], Rk = Xk = wk + dk; Rk--;) ak.push(0);
      for (Rk = dk; --Rk >= 0;) {
        for (Fk = 0, tk = wk + Rk; tk > Rk;) bk = ak[tk] + Ak[Rk] * Jk[tk - Rk - 1] + Fk, ak[tk--] = bk % fa | 0, Fk = bk / fa | 0;
        ak[tk] = (ak[tk] + Fk) % fa | 0
      }
      for (; !ak[--Xk];) ak.pop();
      return Fk ? ++Bk : ak.shift(), kk.d = ak, kk.e = Bk, da ? Ma(kk, Vk.precision) : kk
    }, va.toDecimalPlaces = va.todp = function(kk, Fk) {
      var Bk = this,
        Rk = Bk.constructor;
      return Bk = new Rk(Bk), void 0 === kk ? Bk : (Ya(kk, 0, wa), void 0 === Fk ? Fk = Rk.rounding : Ya(Fk, 0, 8), Ma(Bk, kk + Ea(Bk) + 1, Fk))
    }, va.toExponential = function(kk, Fk) {
      var Bk, Rk = this,
        tk = Rk.constructor;
      return void 0 === kk ? Bk = Ua(Rk, !0) : (Ya(kk, 0, wa), void 0 === Fk ? Fk = tk.rounding : Ya(Fk, 0, 8), Bk = Ua(Rk = Ma(new tk(Rk), kk + 1, Fk), !0, kk + 1)), Bk
    }, va.toFixed = function(kk, Fk) {
      var Bk, Rk, tk = this,
        ak = tk.constructor;
      return void 0 === kk ? Ua(tk) : (Ya(kk, 0, wa), void 0 === Fk ? Fk = ak.rounding : Ya(Fk, 0, 8), Bk = Ua((Rk = Ma(new ak(tk), kk + Ea(tk) + 1, Fk)).abs(), !1, kk + Ea(Rk) + 1), tk.isneg() && !tk.isZero() ? "-" + Bk : Bk)
    }, va.toInteger = va.toint = function() {
      var kk = this,
        Fk = kk.constructor;
      return Ma(new Fk(kk), Ea(kk) + 1, Fk.rounding)
    }, va.toNumber = function() {
      return +this
    }, va.toPower = va.pow = function(kk) {
      var Fk, Bk, Rk, tk, ak, Xk, bk = this,
        wk = bk.constructor,
        dk = +(kk = new wk(kk));
      if (!kk.s) return new wk(ba);
      if (!(bk = new wk(bk)).s) {
        if (kk.s < 1) throw Error(sa + "Infinity");
        return bk
      }
      if (bk.eq(ba)) return bk;
      if (Rk = wk.precision, kk.eq(ba)) return Ma(bk, Rk);
      if (Xk = (Fk = kk.e) >= (Bk = kk.d.length - 1), ak = bk.s, Xk) {
        if ((Bk = dk < 0 ? -dk : dk) <= ma) {
          for (tk = new wk(ba), Fk = Math.ceil(Rk / 7 + 4), da = !1; Bk % 2 && ca((tk = tk.times(bk)).d, Fk), 0 !== (Bk = Aa(Bk / 2));) ca((bk = bk.times(bk)).d, Fk);
          return da = !0, kk.s < 0 ? new wk(ba).div(tk) : Ma(tk, Rk)
        }
      } else if (ak < 0) throw Error(sa + "NaN");
      return ak = ak < 0 && 1 & kk.d[Math.max(Fk, Bk)] ? -1 : 1, bk.s = 1, da = !1, tk = kk.times(Ha(bk, Rk + 12)), da = !0, (tk = Oa(tk)).s = ak, tk
    }, va.toPrecision = function(kk, Fk) {
      var Bk, Rk, tk = this,
        ak = tk.constructor;
      return void 0 === kk ? Rk = Ua(tk, (Bk = Ea(tk)) <= ak.toExpNeg || Bk >= ak.toExpPos) : (Ya(kk, 1, wa), void 0 === Fk ? Fk = ak.rounding : Ya(Fk, 0, 8), Rk = Ua(tk = Ma(new ak(tk), kk, Fk), kk <= (Bk = Ea(tk)) || Bk <= ak.toExpNeg, kk)), Rk
    }, va.toSignificantDigits = va.tosd = function(kk, Fk) {
      var Bk = this.constructor;
      return void 0 === kk ? (kk = Bk.precision, Fk = Bk.rounding) : (Ya(kk, 1, wa), void 0 === Fk ? Fk = Bk.rounding : Ya(Fk, 0, 8)), Ma(new Bk(this), kk, Fk)
    }, va.toString = va.valueOf = va.val = va.toJSON = va[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var kk = this,
        Fk = Ea(kk),
        Bk = kk.constructor;
      return Ua(kk, Fk <= Bk.toExpNeg || Fk >= Bk.toExpPos)
    };
    var La = function() {
      function kk(kk, Fk) {
        var Bk, Rk = 0,
          tk = kk.length;
        for (kk = kk.slice(); tk--;) Bk = kk[tk] * Fk + Rk, kk[tk] = Bk % fa | 0, Rk = Bk / fa | 0;
        return Rk && kk.unshift(Rk), kk
      }

      function Fk(kk, Fk, Bk, Rk) {
        var tk, ak;
        if (Bk != Rk) ak = Bk > Rk ? 1 : -1;
        else
          for (tk = ak = 0; tk < Bk; tk++)
            if (kk[tk] != Fk[tk]) {
              ak = kk[tk] > Fk[tk] ? 1 : -1;
              break
            } return ak
      }

      function Bk(kk, Fk, Bk) {
        for (var Rk = 0; Bk--;) kk[Bk] -= Rk, Rk = kk[Bk] < Fk[Bk] ? 1 : 0, kk[Bk] = Rk * fa + kk[Bk] - Fk[Bk];
        for (; !kk[0] && kk.length > 1;) kk.shift()
      }
      return function(Rk, tk, ak, Xk) {
        var bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Sk = Rk.constructor,
          Nk = Rk.s == tk.s ? 1 : -1,
          Hk = Rk.d,
          uk = tk.d;
        if (!Rk.s) return new Sk(Rk);
        if (!tk.s) throw Error(sa + "Division by zero");
        for (wk = Rk.e - tk.e, Ok = uk.length, Yk = Hk.length, ek = (Ak = new Sk(Nk)).d = [], dk = 0; uk[dk] == (Hk[dk] || 0);) ++dk;
        if (uk[dk] > (Hk[dk] || 0) && --wk, (Wk = null == ak ? ak = Sk.precision : Xk ? ak + (Ea(Rk) - Ea(tk)) + 1 : ak) < 0) return new Sk(0);
        if (Wk = Wk / 7 + 2 | 0, dk = 0, 1 == Ok)
          for (sk = 0, uk = uk[0], Wk++;
            (dk < Yk || sk) && Wk--; dk++) vk = sk * fa + (Hk[dk] || 0), ek[dk] = vk / uk | 0, sk = vk % uk | 0;
        else {
          for ((sk = fa / (uk[0] + 1) | 0) > 1 && (uk = kk(uk, sk), Hk = kk(Hk, sk), Ok = uk.length, Yk = Hk.length), ik = Ok, fk = (yk = Hk.slice(0, Ok)).length; fk < Ok;) yk[fk++] = 0;
          (Ek = uk.slice()).unshift(0), Lk = uk[0], uk[1] >= fa / 2 && ++Lk;
          do {
            sk = 0, (bk = Fk(uk, yk, Ok, fk)) < 0 ? (mk = yk[0], Ok != fk && (mk = mk * fa + (yk[1] || 0)), (sk = mk / Lk | 0) > 1 ? (sk >= fa && (sk = fa - 1), 1 == (bk = Fk(Vk = kk(uk, sk), yk, Jk = Vk.length, fk = yk.length)) && (sk--, Bk(Vk, Ok < Jk ? Ek : uk, Jk))) : (0 == sk && (bk = sk = 1), Vk = uk.slice()), (Jk = Vk.length) < fk && Vk.unshift(0), Bk(yk, Vk, fk), -1 == bk && (bk = Fk(uk, yk, Ok, fk = yk.length)) < 1 && (sk++, Bk(yk, Ok < fk ? Ek : uk, fk)), fk = yk.length) : 0 === bk && (sk++, yk = [0]), ek[dk++] = sk, bk && yk[0] ? yk[fk++] = Hk[ik] || 0 : (yk = [Hk[ik]], fk = 1)
          } while ((ik++ < Yk || void 0 !== yk[0]) && Wk--)
        }
        return ek[0] || ek.shift(), Ak.e = wk, Ma(Ak, Xk ? ak + Ea(Ak) + 1 : ak)
      }
    }();

    function Oa(kk, Fk) {
      var Bk, Rk, tk, ak, Xk, bk = 0,
        wk = 0,
        dk = kk.constructor,
        sk = dk.precision;
      if (Ea(kk) > 16) throw Error(Ja + Ea(kk));
      if (!kk.s) return new dk(ba);
      for (null == Fk ? (da = !1, Xk = sk) : Xk = Fk, ak = new dk(.03125); kk.abs().gte(.1);) kk = kk.times(ak), wk += 5;
      for (Xk += Math.log(ea(2, wk)) / Math.LN10 * 2 + 5 | 0, Bk = Rk = tk = new dk(ba), dk.precision = Xk;;) {
        if (Rk = Ma(Rk.times(kk), Xk), Bk = Bk.times(++bk), oa((ak = tk.plus(La(Rk, Bk, Xk))).d).slice(0, Xk) === oa(tk.d).slice(0, Xk)) {
          for (; wk--;) tk = Ma(tk.times(tk), Xk);
          return dk.precision = sk, null == Fk ? (da = !0, Ma(tk, sk)) : tk
        }
        tk = ak
      }
    }

    function Ea(kk) {
      for (var Fk = 7 * kk.e, Bk = kk.d[0]; Bk >= 10; Bk /= 10) Fk++;
      return Fk
    }

    function Sa(kk, Fk, Bk) {
      if (Fk > kk.LN10.sd()) throw da = !0, Bk && (kk.precision = Bk), Error(sa + "LN10 precision limit exceeded");
      return Ma(new kk(kk.LN10), Fk)
    }

    function Na(kk) {
      for (var Fk = ""; kk--;) Fk += "0";
      return Fk
    }

    function Ha(kk, Fk) {
      var Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk = 1,
        Jk = kk,
        Ak = Jk.d,
        ek = Jk.constructor,
        yk = ek.precision;
      if (Jk.s < 1) throw Error(sa + (Jk.s ? "NaN" : "-Infinity"));
      if (Jk.eq(ba)) return new ek(0);
      if (null == Fk ? (da = !1, dk = yk) : dk = Fk, Jk.eq(10)) return null == Fk && (da = !0), Sa(ek, dk);
      if (dk += 10, ek.precision = dk, Rk = (Bk = oa(Ak)).charAt(0), ak = Ea(Jk), !(Math.abs(ak) < 15e14)) return wk = Sa(ek, dk + 2, yk).times(ak + ""), Jk = Ha(new ek(Rk + "." + Bk.slice(1)), dk - 10).plus(wk), ek.precision = yk, null == Fk ? (da = !0, Ma(Jk, yk)) : Jk;
      for (; Rk < 7 && 1 != Rk || 1 == Rk && Bk.charAt(1) > 3;) Rk = (Bk = oa((Jk = Jk.times(kk)).d)).charAt(0), Vk++;
      for (ak = Ea(Jk), Rk > 1 ? (Jk = new ek("0." + Bk), ak++) : Jk = new ek(Rk + "." + Bk.slice(1)), bk = Xk = Jk = La(Jk.minus(ba), Jk.plus(ba), dk), sk = Ma(Jk.times(Jk), dk), tk = 3;;) {
        if (Xk = Ma(Xk.times(sk), dk), oa((wk = bk.plus(La(Xk, new ek(tk), dk))).d).slice(0, dk) === oa(bk.d).slice(0, dk)) return bk = bk.times(2), 0 !== ak && (bk = bk.plus(Sa(ek, dk + 2, yk).times(ak + ""))), bk = La(bk, new ek(Vk), dk), ek.precision = yk, null == Fk ? (da = !0, Ma(bk, yk)) : bk;
        bk = wk, tk += 2
      }
    }

    function ua(kk, Fk) {
      var Bk, Rk, tk;
      for ((Bk = Fk.indexOf(".")) > -1 && (Fk = Fk.replace(".", "")), (Rk = Fk.search(/e/i)) > 0 ? (Bk < 0 && (Bk = Rk), Bk += +Fk.slice(Rk + 1), Fk = Fk.substring(0, Rk)) : Bk < 0 && (Bk = Fk.length), Rk = 0; 48 === Fk.charCodeAt(Rk);) ++Rk;
      for (tk = Fk.length; 48 === Fk.charCodeAt(tk - 1);) --tk;
      if (Fk = Fk.slice(Rk, tk)) {
        if (tk -= Rk, Bk = Bk - Rk - 1, kk.e = Aa(Bk / 7), kk.d = [], Rk = (Bk + 1) % 7, Bk < 0 && (Rk += 7), Rk < tk) {
          for (Rk && kk.d.push(+Fk.slice(0, Rk)), tk -= 7; Rk < tk;) kk.d.push(+Fk.slice(Rk, Rk += 7));
          Rk = 7 - (Fk = Fk.slice(Rk)).length
        } else Rk -= tk;
        for (; Rk--;) Fk += "0";
        if (kk.d.push(+Fk), da && (kk.e > Wa || kk.e < -Wa)) throw Error(Ja + Bk)
      } else kk.s = 0, kk.e = 0, kk.d = [0];
      return kk
    }

    function Ma(kk, Fk, Bk) {
      var Rk, tk, ak, Xk, bk, wk, dk, sk, Vk = kk.d;
      for (Xk = 1, ak = Vk[0]; ak >= 10; ak /= 10) Xk++;
      if ((Rk = Fk - Xk) < 0) Rk += 7, tk = Fk, dk = Vk[sk = 0];
      else {
        if ((sk = Math.ceil((Rk + 1) / 7)) >= (ak = Vk.length)) return kk;
        for (dk = ak = Vk[sk], Xk = 1; ak >= 10; ak /= 10) Xk++;
        tk = (Rk %= 7) - 7 + Xk
      }
      if (void 0 !== Bk && (bk = dk / (ak = ea(10, Xk - tk - 1)) % 10 | 0, wk = Fk < 0 || void 0 !== Vk[sk + 1] || dk % ak, wk = Bk < 4 ? (bk || wk) && (0 == Bk || Bk == (kk.s < 0 ? 3 : 2)) : bk > 5 || 5 == bk && (4 == Bk || wk || 6 == Bk && (Rk > 0 ? tk > 0 ? dk / ea(10, Xk - tk) : 0 : Vk[sk - 1]) % 10 & 1 || Bk == (kk.s < 0 ? 8 : 7))), Fk < 1 || !Vk[0]) return wk ? (ak = Ea(kk), Vk.length = 1, Fk = Fk - ak - 1, Vk[0] = ea(10, (7 - Fk % 7) % 7), kk.e = Aa(-Fk / 7) || 0) : (Vk.length = 1, Vk[0] = kk.e = kk.s = 0), kk;
      if (0 == Rk ? (Vk.length = sk, ak = 1, sk--) : (Vk.length = sk + 1, ak = ea(10, 7 - Rk), Vk[sk] = tk > 0 ? (dk / ea(10, Xk - tk) % ea(10, tk) | 0) * ak : 0), wk)
        for (;;) {
          if (0 == sk) {
            (Vk[0] += ak) == fa && (Vk[0] = 1, ++kk.e);
            break
          }
          if (Vk[sk] += ak, Vk[sk] != fa) break;
          Vk[sk--] = 0, ak = 1
        }
      for (Rk = Vk.length; 0 === Vk[--Rk];) Vk.pop();
      if (da && (kk.e > Wa || kk.e < -Wa)) throw Error(Ja + Ea(kk));
      return kk
    }

    function ga(kk, Fk) {
      var Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk = kk.constructor,
        Ak = Jk.precision;
      if (!kk.s || !Fk.s) return Fk.s ? Fk.s = -Fk.s : Fk = new Jk(kk), da ? Ma(Fk, Ak) : Fk;
      if (wk = kk.d, Vk = Fk.d, Rk = Fk.e, dk = kk.e, wk = wk.slice(), Xk = dk - Rk) {
        for ((sk = Xk < 0) ? (Bk = wk, Xk = -Xk, bk = Vk.length) : (Bk = Vk, Rk = dk, bk = wk.length), Xk > (tk = Math.max(Math.ceil(Ak / 7), bk) + 2) && (Xk = tk, Bk.length = 1), Bk.reverse(), tk = Xk; tk--;) Bk.push(0);
        Bk.reverse()
      } else {
        for ((sk = (tk = wk.length) < (bk = Vk.length)) && (bk = tk), tk = 0; tk < bk; tk++)
          if (wk[tk] != Vk[tk]) {
            sk = wk[tk] < Vk[tk];
            break
          } Xk = 0
      }
      for (sk && (Bk = wk, wk = Vk, Vk = Bk, Fk.s = -Fk.s), bk = wk.length, tk = Vk.length - bk; tk > 0; --tk) wk[bk++] = 0;
      for (tk = Vk.length; tk > Xk;) {
        if (wk[--tk] < Vk[tk]) {
          for (ak = tk; ak && 0 === wk[--ak];) wk[ak] = fa - 1;
          --wk[ak], wk[tk] += fa
        }
        wk[tk] -= Vk[tk]
      }
      for (; 0 === wk[--bk];) wk.pop();
      for (; 0 === wk[0]; wk.shift()) --Rk;
      return wk[0] ? (Fk.d = wk, Fk.e = Rk, da ? Ma(Fk, Ak) : Fk) : new Jk(0)
    }

    function Ua(kk, Fk, Bk) {
      var Rk, tk = Ea(kk),
        ak = oa(kk.d),
        Xk = ak.length;
      return Fk ? (Bk && (Rk = Bk - Xk) > 0 ? ak = ak.charAt(0) + "." + ak.slice(1) + Na(Rk) : Xk > 1 && (ak = ak.charAt(0) + "." + ak.slice(1)), ak = ak + (tk < 0 ? "e" : "e+") + tk) : tk < 0 ? (ak = "0." + Na(-tk - 1) + ak, Bk && (Rk = Bk - Xk) > 0 && (ak += Na(Rk))) : tk >= Xk ? (ak += Na(tk + 1 - Xk), Bk && (Rk = Bk - tk - 1) > 0 && (ak = ak + "." + Na(Rk))) : ((Rk = tk + 1) < Xk && (ak = ak.slice(0, Rk) + "." + ak.slice(Rk)), Bk && (Rk = Bk - Xk) > 0 && (tk + 1 === Xk && (ak += "."), ak += Na(Rk))), kk.s < 0 ? "-" + ak : ak
    }

    function ca(kk, Fk) {
      if (kk.length > Fk) return kk.length = Fk, !0
    }

    function Ga(kk) {
      if (!kk || "object" !== typeof kk) throw Error(sa + "Object expected");
      var Fk, Bk, Rk, tk = ["precision", 1, wa, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Fk = 0; Fk < tk.length; Fk += 3)
        if (void 0 !== (Rk = kk[Bk = tk[Fk]])) {
          if (!(Aa(Rk) === Rk && Rk >= tk[Fk + 1] && Rk <= tk[Fk + 2])) throw Error(Va + Bk + ": " + Rk);
          this[Bk] = Rk
        } if (void 0 !== (Rk = kk[Bk = "LN10"])) {
        if (Rk != Math.LN10) throw Error(Va + Bk + ": " + Rk);
        this[Bk] = new this(Rk)
      }
      return this
    }
    var Ta = function kk(Fk) {
      var Bk, Rk, tk;

      function ak(kk) {
        var Fk = this;
        if (!(Fk instanceof ak)) return new ak(kk);
        if (Fk.constructor = ak, kk instanceof ak) return Fk.s = kk.s, Fk.e = kk.e, void(Fk.d = (kk = kk.d) ? kk.slice() : kk);
        if ("number" === typeof kk) {
          if (0 * kk !== 0) throw Error(Va + kk);
          if (kk > 0) Fk.s = 1;
          else {
            if (!(kk < 0)) return Fk.s = 0, Fk.e = 0, void(Fk.d = [0]);
            kk = -kk, Fk.s = -1
          }
          return kk === ~~kk && kk < 1e7 ? (Fk.e = 0, void(Fk.d = [kk])) : ua(Fk, kk.toString())
        }
        if ("string" !== typeof kk) throw Error(Va + kk);
        if (45 === kk.charCodeAt(0) ? (kk = kk.slice(1), Fk.s = -1) : Fk.s = 1, !ya.test(kk)) throw Error(Va + kk);
        ua(Fk, kk)
      }
      if (ak.prototype = va, ak.ROUND_UP = 0, ak.ROUND_DOWN = 1, ak.ROUND_CEIL = 2, ak.ROUND_FLOOR = 3, ak.ROUND_HALF_UP = 4, ak.ROUND_HALF_DOWN = 5, ak.ROUND_HALF_EVEN = 6, ak.ROUND_HALF_CEIL = 7, ak.ROUND_HALF_FLOOR = 8, ak.clone = kk, ak.config = ak.set = Ga, void 0 === Fk && (Fk = {}), Fk)
        for (tk = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Bk = 0; Bk < tk.length;) Fk.hasOwnProperty(Rk = tk[Bk++]) || (Fk[Rk] = this[Rk]);
      return ak.config(Fk), ak
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    ba = new Ta(1);
    var ra;
    ! function(kk) {
      kk.AED = "aed", kk.AFN = "afn", kk.ALL = "all", kk.AMD = "amd", kk.ANG = "ang", kk.AOA = "aoa", kk.ARS = "ars", kk.AUD = "aud", kk.AWG = "awg", kk.AZN = "azn", kk.BAM = "bam", kk.BBD = "bbd", kk.BDT = "bdt", kk.BGN = "bgn", kk.BHD = "bhd", kk.BIF = "bif", kk.BMD = "bmd", kk.BND = "bnd", kk.BOB = "bob", kk.BOV = "bov", kk.BRL = "brl", kk.BSD = "bsd", kk.BTN = "btn", kk.BWP = "bwp", kk.BYN = "byn", kk.BYR = "byr", kk.BZD = "bzd", kk.CAD = "cad", kk.CDF = "cdf", kk.CHE = "che", kk.CHF = "chf", kk.CHW = "chw", kk.CLF = "clf", kk.CLP = "clp", kk.CNY = "cny", kk.COP = "cop", kk.COU = "cou", kk.CRC = "crc", kk.CUC = "cuc", kk.CUP = "cup", kk.CVE = "cve", kk.CZK = "czk", kk.DJF = "djf", kk.DKK = "dkk", kk.DOP = "dop", kk.DZD = "dzd", kk.EGP = "egp", kk.ERN = "ern", kk.ETB = "etb", kk.EUR = "eur", kk.FJD = "fjd", kk.FKP = "fkp", kk.GBP = "gbp", kk.GEL = "gel", kk.GHS = "ghs", kk.GIP = "gip", kk.GMD = "gmd", kk.GNF = "gnf", kk.GTQ = "gtq", kk.GYD = "gyd", kk.HKD = "hkd", kk.HNL = "hnl", kk.HRK = "hrk", kk.HTG = "htg", kk.HUF = "huf", kk.IDR = "idr", kk.ILS = "ils", kk.INR = "inr", kk.IQD = "iqd", kk.IRR = "irr", kk.ISK = "isk", kk.JMD = "jmd", kk.JOD = "jod", kk.JPY = "jpy", kk.KES = "kes", kk.KGS = "kgs", kk.KHR = "khr", kk.KMF = "kmf", kk.KPW = "kpw", kk.KRW = "krw", kk.KWD = "kwd", kk.KYD = "kyd", kk.KZT = "kzt", kk.LAK = "lak", kk.LBP = "lbp", kk.LKR = "lkr", kk.LRD = "lrd", kk.LSL = "lsl", kk.LTL = "ltl", kk.LVL = "lvl", kk.LYD = "lyd", kk.MAD = "mad", kk.MDL = "mdl", kk.MGA = "mga", kk.MKD = "mkd", kk.MMK = "mmk", kk.MNT = "mnt", kk.MOP = "mop", kk.MRO = "mro", kk.MUR = "mur", kk.MVR = "mvr", kk.MWK = "mwk", kk.MXN = "mxn", kk.MXV = "mxv", kk.MYR = "myr", kk.MZN = "mzn", kk.NAD = "nad", kk.NGN = "ngn", kk.NIO = "nio", kk.NOK = "nok", kk.NPR = "npr", kk.NZD = "nzd", kk.OMR = "omr", kk.PAB = "pab", kk.PEN = "pen", kk.PGK = "pgk", kk.PHP = "php", kk.PKR = "pkr", kk.PLN = "pln", kk.PYG = "pyg", kk.QAR = "qar", kk.RON = "ron", kk.RSD = "rsd", kk.RUB = "rub", kk.RWF = "rwf", kk.SAR = "sar", kk.SBD = "sbd", kk.SCR = "scr", kk.SDG = "sdg", kk.SEK = "sek", kk.SGD = "sgd", kk.SHP = "shp", kk.SLL = "sll", kk.SOS = "sos", kk.SRD = "srd", kk.SSP = "ssp", kk.STD = "std", kk.SVC = "svc", kk.SYP = "syp", kk.SZL = "szl", kk.THB = "thb", kk.TJS = "tjs", kk.TMT = "tmt", kk.TND = "tnd", kk.TOP = "top", kk.TRY = "try", kk.TTD = "ttd", kk.TWD = "twd", kk.TZS = "tzs", kk.UAH = "uah", kk.UGX = "ugx", kk.USD = "usd", kk.USN = "usn", kk.USS = "uss", kk.UYI = "uyi", kk.UYU = "uyu", kk.UZS = "uzs", kk.VEF = "vef", kk.VND = "vnd", kk.VUV = "vuv", kk.WST = "wst", kk.XAF = "xaf", kk.XAG = "xag", kk.XAU = "xau", kk.XBA = "xba", kk.XBB = "xbb", kk.XBC = "xbc", kk.XBD = "xbd", kk.XCD = "xcd", kk.XDR = "xdr", kk.XFU = "xfu", kk.XOF = "xof", kk.XPD = "xpd", kk.XPF = "xpf", kk.XPT = "xpt", kk.XSU = "xsu", kk.XTS = "xts", kk.XUA = "xua", kk.YER = "yer", kk.ZAR = "zar", kk.ZMW = "zmw", kk.ZWL = "zwl"
    }(ra || (ra = {}));
    ra.AED, ra.AFN, ra.ALL, ra.AMD, ra.ANG, ra.AOA, ra.ARS, ra.AUD, ra.AWG, ra.AZN, ra.BAM, ra.BBD, ra.BDT, ra.BGN, ra.BHD, ra.BIF, ra.BMD, ra.BND, ra.BOB, ra.BOV, ra.BRL, ra.BSD, ra.BTN, ra.BWP, ra.BYR, ra.BYN, ra.BZD, ra.CAD, ra.CDF, ra.CHE, ra.CHF, ra.CHW, ra.CLF, ra.CLP, ra.CNY, ra.COP, ra.COU, ra.CRC, ra.CUC, ra.CUP, ra.CVE, ra.CZK, ra.DJF, ra.DKK, ra.DOP, ra.DZD, ra.EGP, ra.ERN, ra.ETB, ra.EUR, ra.FJD, ra.FKP, ra.GBP, ra.GEL, ra.GHS, ra.GIP, ra.GMD, ra.GNF, ra.GTQ, ra.GYD, ra.HKD, ra.HNL, ra.HRK, ra.HTG, ra.HUF, ra.IDR, ra.ILS, ra.INR, ra.IQD, ra.IRR, ra.ISK, ra.JMD, ra.JOD, ra.JPY, ra.KES, ra.KGS, ra.KHR, ra.KMF, ra.KPW, ra.KRW, ra.KWD, ra.KYD, ra.KZT, ra.LAK, ra.LBP, ra.LKR, ra.LRD, ra.LSL, ra.LTL, ra.LVL, ra.LYD, ra.MAD, ra.MDL, ra.MGA, ra.MKD, ra.MMK, ra.MNT, ra.MOP, ra.MRO, ra.MUR, ra.MVR, ra.MWK, ra.MXN, ra.MXV, ra.MYR, ra.MZN, ra.NAD, ra.NGN, ra.NIO, ra.NOK, ra.NPR, ra.NZD, ra.OMR, ra.PAB, ra.PEN, ra.PGK, ra.PHP, ra.PKR, ra.PLN, ra.PYG, ra.QAR, ra.RON, ra.RSD, ra.RUB, ra.RWF, ra.SAR, ra.SBD, ra.SCR, ra.SDG, ra.SEK, ra.SGD, ra.SHP, ra.SLL, ra.SOS, ra.SRD, ra.SSP, ra.STD, ra.SVC, ra.SYP, ra.SZL, ra.THB, ra.TJS, ra.TMT, ra.TND, ra.TOP, ra.TRY, ra.TTD, ra.TWD, ra.TZS, ra.UAH, ra.UGX, ra.USD, ra.USN, ra.USS, ra.UYI, ra.UYU, ra.UZS, ra.VEF, ra.VND, ra.VUV, ra.WST, ra.XAF, ra.XAG, ra.XAU, ra.XBA, ra.XBB, ra.XBC, ra.XBD, ra.XCD, ra.XDR, ra.XFU, ra.XOF, ra.XPD, ra.XPF, ra.XPT, ra.XSU, ra.XTS, ra.XUA, ra.YER, ra.ZAR, ra.ZMW, ra.ZWL;
    var Da = {
      exports: {}
    };
    ! function(kk, Fk) {
      var Bk = "__lodash_hash_undefined__",
        Rk = 9007199254740991,
        ak = "[object Arguments]",
        Xk = "[object Array]",
        bk = "[object Boolean]",
        wk = "[object Date]",
        dk = "[object Error]",
        sk = "[object Function]",
        Vk = "[object Map]",
        Jk = "[object Number]",
        Ak = "[object Object]",
        ek = "[object Promise]",
        yk = "[object RegExp]",
        fk = "[object Set]",
        mk = "[object String]",
        Wk = "[object Symbol]",
        vk = "[object WeakMap]",
        ik = "[object ArrayBuffer]",
        Yk = "[object DataView]",
        Lk = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ok = /^\w*$/,
        Ek = /^\./,
        Sk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Nk = /\\(\\)?/g,
        Hk = /^\[object .+?Constructor\]$/,
        uk = /^(?:0|[1-9]\d*)$/,
        Mk = {};
      Mk["[object Float32Array]"] = Mk["[object Float64Array]"] = Mk["[object Int8Array]"] = Mk["[object Int16Array]"] = Mk["[object Int32Array]"] = Mk["[object Uint8Array]"] = Mk["[object Uint8ClampedArray]"] = Mk["[object Uint16Array]"] = Mk["[object Uint32Array]"] = !0, Mk[ak] = Mk[Xk] = Mk[ik] = Mk[bk] = Mk[Yk] = Mk[wk] = Mk[dk] = Mk[sk] = Mk[Vk] = Mk[Jk] = Mk[Ak] = Mk[yk] = Mk[fk] = Mk[mk] = Mk[vk] = !1;
      var gk = "object" == typeof tk && tk && tk.Object === Object && tk,
        Uk = "object" == typeof self && self && self.Object === Object && self,
        ck = gk || Uk || Function("return this")(),
        Gk = Fk && !Fk.nodeType && Fk,
        Tk = Gk && kk && !kk.nodeType && kk,
        rk = Tk && Tk.exports === Gk && gk.process,
        Dk = function() {
          try {
            return rk && rk.binding("util")
          } catch (kk) {}
        }(),
        zk = Dk && Dk.isTypedArray;

      function Pk(kk, Fk) {
        for (var Bk = -1, Rk = kk ? kk.length : 0; ++Bk < Rk && !1 !== Fk(kk[Bk], Bk, kk););
        return kk
      }

      function hk(kk, Fk) {
        for (var Bk = -1, Rk = kk ? kk.length : 0; ++Bk < Rk;)
          if (Fk(kk[Bk], Bk, kk)) return !0;
        return !1
      }

      function qk(kk) {
        var Fk = !1;
        if (null != kk && "function" != typeof kk.toString) try {
          Fk = !!(kk + "")
        } catch (Bk) {}
        return Fk
      }

      function Ck(kk) {
        var Fk = -1,
          Bk = Array(kk.size);
        return kk.forEach((function(kk, Rk) {
          Bk[++Fk] = [Rk, kk]
        })), Bk
      }

      function Zk(kk, Fk) {
        return function(Bk) {
          return kk(Fk(Bk))
        }
      }

      function pk(kk) {
        var Fk = -1,
          Bk = Array(kk.size);
        return kk.forEach((function(kk) {
          Bk[++Fk] = kk
        })), Bk
      }
      var Kk = Array.prototype,
        xk = Function.prototype,
        jk = Object.prototype,
        lk = ck["__core-js_shared__"],
        nk = function() {
          var kk = /[^.]+$/.exec(lk && lk.keys && lk.keys.IE_PROTO || "");
          return kk ? "Symbol(src)_1." + kk : ""
        }(),
        Ik = xk.toString,
        Qk = jk.hasOwnProperty,
        kF = jk.toString,
        FF = RegExp("^" + Ik.call(Qk).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        BF = ck.Symbol,
        RF = ck.Uint8Array,
        tF = Zk(Object.getPrototypeOf, Object),
        aF = Object.create,
        XF = jk.propertyIsEnumerable,
        bF = Kk.splice,
        wF = Zk(Object.keys, Object),
        dF = CF(ck, "DataView"),
        sF = CF(ck, "Map"),
        VF = CF(ck, "Promise"),
        JF = CF(ck, "Set"),
        AF = CF(ck, "WeakMap"),
        eF = CF(Object, "create"),
        yF = IF(dF),
        fF = IF(sF),
        mF = IF(VF),
        WF = IF(JF),
        vF = IF(AF),
        iF = BF ? BF.prototype : void 0,
        YF = iF ? iF.valueOf : void 0,
        oF = iF ? iF.toString : void 0;

      function LF(kk) {
        var Fk = -1,
          Bk = kk ? kk.length : 0;
        for (this.clear(); ++Fk < Bk;) {
          var Rk = kk[Fk];
          this.set(Rk[0], Rk[1])
        }
      }

      function OF(kk) {
        var Fk = -1,
          Bk = kk ? kk.length : 0;
        for (this.clear(); ++Fk < Bk;) {
          var Rk = kk[Fk];
          this.set(Rk[0], Rk[1])
        }
      }

      function EF(kk) {
        var Fk = -1,
          Bk = kk ? kk.length : 0;
        for (this.clear(); ++Fk < Bk;) {
          var Rk = kk[Fk];
          this.set(Rk[0], Rk[1])
        }
      }

      function SF(kk) {
        var Fk = -1,
          Bk = kk ? kk.length : 0;
        for (this.__data__ = new EF; ++Fk < Bk;) this.add(kk[Fk])
      }

      function NF(kk) {
        this.__data__ = new OF(kk)
      }

      function HF(kk, Fk) {
        var Bk = BB(kk) || FB(kk) ? function(kk, Fk) {
            for (var Bk = -1, Rk = Array(kk); ++Bk < kk;) Rk[Bk] = Fk(Bk);
            return Rk
          }(kk.length, String) : [],
          Rk = Bk.length,
          tk = !!Rk;
        for (var ak in kk) !Fk && !Qk.call(kk, ak) || tk && ("length" == ak || pF(ak, Rk)) || Bk.push(ak);
        return Bk
      }

      function uF(kk, Fk) {
        for (var Bk = kk.length; Bk--;)
          if (kB(kk[Bk][0], Fk)) return Bk;
        return -1
      }
      LF.prototype.clear = function() {
        this.__data__ = eF ? eF(null) : {}
      }, LF.prototype.delete = function(kk) {
        return this.has(kk) && delete this.__data__[kk]
      }, LF.prototype.get = function(kk) {
        var Fk = this.__data__;
        if (eF) {
          var Rk = Fk[kk];
          return Rk === Bk ? void 0 : Rk
        }
        return Qk.call(Fk, kk) ? Fk[kk] : void 0
      }, LF.prototype.has = function(kk) {
        var Fk = this.__data__;
        return eF ? void 0 !== Fk[kk] : Qk.call(Fk, kk)
      }, LF.prototype.set = function(kk, Fk) {
        return this.__data__[kk] = eF && void 0 === Fk ? Bk : Fk, this
      }, OF.prototype.clear = function() {
        this.__data__ = []
      }, OF.prototype.delete = function(kk) {
        var Fk = this.__data__,
          Bk = uF(Fk, kk);
        return !(Bk < 0) && (Bk == Fk.length - 1 ? Fk.pop() : bF.call(Fk, Bk, 1), !0)
      }, OF.prototype.get = function(kk) {
        var Fk = this.__data__,
          Bk = uF(Fk, kk);
        return Bk < 0 ? void 0 : Fk[Bk][1]
      }, OF.prototype.has = function(kk) {
        return uF(this.__data__, kk) > -1
      }, OF.prototype.set = function(kk, Fk) {
        var Bk = this.__data__,
          Rk = uF(Bk, kk);
        return Rk < 0 ? Bk.push([kk, Fk]) : Bk[Rk][1] = Fk, this
      }, EF.prototype.clear = function() {
        this.__data__ = {
          hash: new LF,
          map: new(sF || OF),
          string: new LF
        }
      }, EF.prototype.delete = function(kk) {
        return qF(this, kk).delete(kk)
      }, EF.prototype.get = function(kk) {
        return qF(this, kk).get(kk)
      }, EF.prototype.has = function(kk) {
        return qF(this, kk).has(kk)
      }, EF.prototype.set = function(kk, Fk) {
        return qF(this, kk).set(kk, Fk), this
      }, SF.prototype.add = SF.prototype.push = function(kk) {
        return this.__data__.set(kk, Bk), this
      }, SF.prototype.has = function(kk) {
        return this.__data__.has(kk)
      }, NF.prototype.clear = function() {
        this.__data__ = new OF
      }, NF.prototype.delete = function(kk) {
        return this.__data__.delete(kk)
      }, NF.prototype.get = function(kk) {
        return this.__data__.get(kk)
      }, NF.prototype.has = function(kk) {
        return this.__data__.has(kk)
      }, NF.prototype.set = function(kk, Fk) {
        var Bk = this.__data__;
        if (Bk instanceof OF) {
          var Rk = Bk.__data__;
          if (!sF || Rk.length < 199) return Rk.push([kk, Fk]), this;
          Bk = this.__data__ = new EF(Rk)
        }
        return Bk.set(kk, Fk), this
      };
      var MF, gF = function(kk, Fk, Bk) {
        for (var Rk = -1, tk = Object(kk), ak = Bk(kk), Xk = ak.length; Xk--;) {
          var bk = ak[MF ? Xk : ++Rk];
          if (!1 === Fk(tk[bk], bk, tk)) break
        }
        return kk
      };

      function UF(kk, Fk) {
        return kk && gF(kk, Fk, VB)
      }

      function cF(kk, Fk) {
        for (var Bk = 0, Rk = (Fk = KF(Fk, kk) ? [Fk] : PF(Fk)).length; null != kk && Bk < Rk;) kk = kk[nF(Fk[Bk++])];
        return Bk && Bk == Rk ? kk : void 0
      }

      function GF(kk, Fk) {
        return null != kk && Fk in Object(kk)
      }

      function TF(kk, Fk, Bk, Rk, tk) {
        return kk === Fk || (null == kk || null == Fk || !XB(kk) && !bB(Fk) ? kk !== kk && Fk !== Fk : function(kk, Fk, Bk, Rk, tk, sk) {
          var ek = BB(kk),
            vk = BB(Fk),
            Lk = Xk,
            Ok = Xk;
          ek || (Lk = (Lk = ZF(kk)) == ak ? Ak : Lk);
          vk || (Ok = (Ok = ZF(Fk)) == ak ? Ak : Ok);
          var Ek = Lk == Ak && !qk(kk),
            Sk = Ok == Ak && !qk(Fk),
            Nk = Lk == Ok;
          if (Nk && !Ek) return sk || (sk = new NF), ek || sB(kk) ? hF(kk, Fk, Bk, Rk, tk, sk) : function(kk, Fk, Bk, Rk, tk, ak, Xk) {
            switch (Bk) {
              case Yk:
                if (kk.byteLength != Fk.byteLength || kk.byteOffset != Fk.byteOffset) return !1;
                kk = kk.buffer, Fk = Fk.buffer;
              case ik:
                return !(kk.byteLength != Fk.byteLength || !Rk(new RF(kk), new RF(Fk)));
              case bk:
              case wk:
              case Jk:
                return kB(+kk, +Fk);
              case dk:
                return kk.name == Fk.name && kk.message == Fk.message;
              case yk:
              case mk:
                return kk == Fk + "";
              case Vk:
                var sk = Ck;
              case fk:
                var Ak = 2 & ak;
                if (sk || (sk = pk), kk.size != Fk.size && !Ak) return !1;
                var ek = Xk.get(kk);
                if (ek) return ek == Fk;
                ak |= 1, Xk.set(kk, Fk);
                var vk = hF(sk(kk), sk(Fk), Rk, tk, ak, Xk);
                return Xk.delete(kk), vk;
              case Wk:
                if (YF) return YF.call(kk) == YF.call(Fk)
            }
            return !1
          }(kk, Fk, Lk, Bk, Rk, tk, sk);
          if (!(2 & tk)) {
            var Hk = Ek && Qk.call(kk, "__wrapped__"),
              uk = Sk && Qk.call(Fk, "__wrapped__");
            if (Hk || uk) {
              var Mk = Hk ? kk.value() : kk,
                gk = uk ? Fk.value() : Fk;
              return sk || (sk = new NF), Bk(Mk, gk, Rk, tk, sk)
            }
          }
          if (!Nk) return !1;
          return sk || (sk = new NF),
            function(kk, Fk, Bk, Rk, tk, ak) {
              var Xk = 2 & tk,
                bk = VB(kk),
                wk = bk.length,
                dk = VB(Fk),
                sk = dk.length;
              if (wk != sk && !Xk) return !1;
              var Vk = wk;
              for (; Vk--;) {
                var Jk = bk[Vk];
                if (!(Xk ? Jk in Fk : Qk.call(Fk, Jk))) return !1
              }
              var Ak = ak.get(kk);
              if (Ak && ak.get(Fk)) return Ak == Fk;
              var ek = !0;
              ak.set(kk, Fk), ak.set(Fk, kk);
              var yk = Xk;
              for (; ++Vk < wk;) {
                var fk = kk[Jk = bk[Vk]],
                  mk = Fk[Jk];
                if (Rk) var Wk = Xk ? Rk(mk, fk, Jk, Fk, kk, ak) : Rk(fk, mk, Jk, kk, Fk, ak);
                if (!(void 0 === Wk ? fk === mk || Bk(fk, mk, Rk, tk, ak) : Wk)) {
                  ek = !1;
                  break
                }
                yk || (yk = "constructor" == Jk)
              }
              if (ek && !yk) {
                var vk = kk.constructor,
                  ik = Fk.constructor;
                vk == ik || !("constructor" in kk) || !("constructor" in Fk) || "function" == typeof vk && vk instanceof vk && "function" == typeof ik && ik instanceof ik || (ek = !1)
              }
              return ak.delete(kk), ak.delete(Fk), ek
            }(kk, Fk, Bk, Rk, tk, sk)
        }(kk, Fk, TF, Bk, Rk, tk))
      }

      function rF(kk) {
        return !(!XB(kk) || (Fk = kk, nk && nk in Fk)) && (tB(kk) || qk(kk) ? FF : Hk).test(IF(kk));
        var Fk
      }

      function DF(kk) {
        return "function" == typeof kk ? kk : null == kk ? JB : "object" == typeof kk ? BB(kk) ? function(kk, Fk) {
          if (KF(kk) && xF(Fk)) return jF(nF(kk), Fk);
          return function(Bk) {
            var Rk = function(kk, Fk, Bk) {
              var Rk = null == kk ? void 0 : cF(kk, Fk);
              return void 0 === Rk ? Bk : Rk
            }(Bk, kk);
            return void 0 === Rk && Rk === Fk ? function(kk, Fk) {
              return null != kk && function(kk, Fk, Bk) {
                Fk = KF(Fk, kk) ? [Fk] : PF(Fk);
                var Rk, tk = -1,
                  ak = Fk.length;
                for (; ++tk < ak;) {
                  var Xk = nF(Fk[tk]);
                  if (!(Rk = null != kk && Bk(kk, Xk))) break;
                  kk = kk[Xk]
                }
                if (Rk) return Rk;
                ak = kk ? kk.length : 0;
                return !!ak && aB(ak) && pF(Xk, ak) && (BB(kk) || FB(kk))
              }(kk, Fk, GF)
            }(Bk, kk) : TF(Fk, Rk, void 0, 3)
          }
        }(kk[0], kk[1]) : function(kk) {
          var Fk = function(kk) {
            var Fk = VB(kk),
              Bk = Fk.length;
            for (; Bk--;) {
              var Rk = Fk[Bk],
                tk = kk[Rk];
              Fk[Bk] = [Rk, tk, xF(tk)]
            }
            return Fk
          }(kk);
          if (1 == Fk.length && Fk[0][2]) return jF(Fk[0][0], Fk[0][1]);
          return function(Bk) {
            return Bk === kk || function(kk, Fk, Bk, Rk) {
              var tk = Bk.length,
                ak = tk,
                Xk = !Rk;
              if (null == kk) return !ak;
              for (kk = Object(kk); tk--;) {
                var bk = Bk[tk];
                if (Xk && bk[2] ? bk[1] !== kk[bk[0]] : !(bk[0] in kk)) return !1
              }
              for (; ++tk < ak;) {
                var wk = (bk = Bk[tk])[0],
                  dk = kk[wk],
                  sk = bk[1];
                if (Xk && bk[2]) {
                  if (void 0 === dk && !(wk in kk)) return !1
                } else {
                  var Vk = new NF;
                  if (Rk) var Jk = Rk(dk, sk, wk, kk, Fk, Vk);
                  if (!(void 0 === Jk ? TF(sk, dk, Rk, 3, Vk) : Jk)) return !1
                }
              }
              return !0
            }(Bk, kk, Fk)
          }
        }(kk) : function(kk) {
          return KF(kk) ? (Fk = nF(kk), function(kk) {
            return null == kk ? void 0 : kk[Fk]
          }) : function(kk) {
            return function(Fk) {
              return cF(Fk, kk)
            }
          }(kk);
          var Fk
        }(kk)
      }

      function zF(kk) {
        if (! function(kk) {
            var Fk = kk && kk.constructor,
              Bk = "function" == typeof Fk && Fk.prototype || jk;
            return kk === Bk
          }(kk)) return wF(kk);
        var Fk = [];
        for (var Bk in Object(kk)) Qk.call(kk, Bk) && "constructor" != Bk && Fk.push(Bk);
        return Fk
      }

      function PF(kk) {
        return BB(kk) ? kk : lF(kk)
      }

      function hF(kk, Fk, Bk, Rk, tk, ak) {
        var Xk = 2 & tk,
          bk = kk.length,
          wk = Fk.length;
        if (bk != wk && !(Xk && wk > bk)) return !1;
        var dk = ak.get(kk);
        if (dk && ak.get(Fk)) return dk == Fk;
        var sk = -1,
          Vk = !0,
          Jk = 1 & tk ? new SF : void 0;
        for (ak.set(kk, Fk), ak.set(Fk, kk); ++sk < bk;) {
          var Ak = kk[sk],
            ek = Fk[sk];
          if (Rk) var yk = Xk ? Rk(ek, Ak, sk, Fk, kk, ak) : Rk(Ak, ek, sk, kk, Fk, ak);
          if (void 0 !== yk) {
            if (yk) continue;
            Vk = !1;
            break
          }
          if (Jk) {
            if (!hk(Fk, (function(kk, Fk) {
                if (!Jk.has(Fk) && (Ak === kk || Bk(Ak, kk, Rk, tk, ak))) return Jk.add(Fk)
              }))) {
              Vk = !1;
              break
            }
          } else if (Ak !== ek && !Bk(Ak, ek, Rk, tk, ak)) {
            Vk = !1;
            break
          }
        }
        return ak.delete(kk), ak.delete(Fk), Vk
      }

      function qF(kk, Fk) {
        var Bk = kk.__data__;
        return function(kk) {
          var Fk = typeof kk;
          return "string" == Fk || "number" == Fk || "symbol" == Fk || "boolean" == Fk ? "__proto__" !== kk : null === kk
        }(Fk) ? Bk["string" == typeof Fk ? "string" : "hash"] : Bk.map
      }

      function CF(kk, Fk) {
        var Bk = function(kk, Fk) {
          return null == kk ? void 0 : kk[Fk]
        }(kk, Fk);
        return rF(Bk) ? Bk : void 0
      }
      var ZF = function(kk) {
        return kF.call(kk)
      };

      function pF(kk, Fk) {
        return !!(Fk = null == Fk ? Rk : Fk) && ("number" == typeof kk || uk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < Fk
      }

      function KF(kk, Fk) {
        if (BB(kk)) return !1;
        var Bk = typeof kk;
        return !("number" != Bk && "symbol" != Bk && "boolean" != Bk && null != kk && !wB(kk)) || (Ok.test(kk) || !Lk.test(kk) || null != Fk && kk in Object(Fk))
      }

      function xF(kk) {
        return kk === kk && !XB(kk)
      }

      function jF(kk, Fk) {
        return function(Bk) {
          return null != Bk && (Bk[kk] === Fk && (void 0 !== Fk || kk in Object(Bk)))
        }
      }(dF && ZF(new dF(new ArrayBuffer(1))) != Yk || sF && ZF(new sF) != Vk || VF && ZF(VF.resolve()) != ek || JF && ZF(new JF) != fk || AF && ZF(new AF) != vk) && (ZF = function(kk) {
        var Fk = kF.call(kk),
          Bk = Fk == Ak ? kk.constructor : void 0,
          Rk = Bk ? IF(Bk) : void 0;
        if (Rk) switch (Rk) {
          case yF:
            return Yk;
          case fF:
            return Vk;
          case mF:
            return ek;
          case WF:
            return fk;
          case vF:
            return vk
        }
        return Fk
      });
      var lF = QF((function(kk) {
        var Fk;
        kk = null == (Fk = kk) ? "" : function(kk) {
          if ("string" == typeof kk) return kk;
          if (wB(kk)) return oF ? oF.call(kk) : "";
          var Fk = kk + "";
          return "0" == Fk && 1 / kk == -1 / 0 ? "-0" : Fk
        }(Fk);
        var Bk = [];
        return Ek.test(kk) && Bk.push(""), kk.replace(Sk, (function(kk, Fk, Rk, tk) {
          Bk.push(Rk ? tk.replace(Nk, "$1") : Fk || kk)
        })), Bk
      }));

      function nF(kk) {
        if ("string" == typeof kk || wB(kk)) return kk;
        var Fk = kk + "";
        return "0" == Fk && 1 / kk == -1 / 0 ? "-0" : Fk
      }

      function IF(kk) {
        if (null != kk) {
          try {
            return Ik.call(kk)
          } catch (Fk) {}
          try {
            return kk + ""
          } catch (Fk) {}
        }
        return ""
      }

      function QF(kk, Fk) {
        if ("function" != typeof kk || Fk && "function" != typeof Fk) throw new TypeError("Expected a function");
        var Bk = function() {
          var Rk = arguments,
            tk = Fk ? Fk.apply(this, Rk) : Rk[0],
            ak = Bk.cache;
          if (ak.has(tk)) return ak.get(tk);
          var Xk = kk.apply(this, Rk);
          return Bk.cache = ak.set(tk, Xk), Xk
        };
        return Bk.cache = new(QF.Cache || EF), Bk
      }

      function kB(kk, Fk) {
        return kk === Fk || kk !== kk && Fk !== Fk
      }

      function FB(kk) {
        return function(kk) {
          return bB(kk) && RB(kk)
        }(kk) && Qk.call(kk, "callee") && (!XF.call(kk, "callee") || kF.call(kk) == ak)
      }
      QF.Cache = EF;
      var BB = Array.isArray;

      function RB(kk) {
        return null != kk && aB(kk.length) && !tB(kk)
      }

      function tB(kk) {
        var Fk = XB(kk) ? kF.call(kk) : "";
        return Fk == sk || "[object GeneratorFunction]" == Fk
      }

      function aB(kk) {
        return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= Rk
      }

      function XB(kk) {
        var Fk = typeof kk;
        return !!kk && ("object" == Fk || "function" == Fk)
      }

      function bB(kk) {
        return !!kk && "object" == typeof kk
      }

      function wB(kk) {
        return "symbol" == typeof kk || bB(kk) && kF.call(kk) == Wk
      }
      var dB, sB = zk ? (dB = zk, function(kk) {
        return dB(kk)
      }) : function(kk) {
        return bB(kk) && aB(kk.length) && !!Mk[kF.call(kk)]
      };

      function VB(kk) {
        return RB(kk) ? HF(kk) : zF(kk)
      }

      function JB(kk) {
        return kk
      }
      kk.exports = function(kk, Fk, Bk) {
        var Rk, tk = BB(kk) || sB(kk);
        if (Fk = DF(Fk), null == Bk)
          if (tk || XB(kk)) {
            var ak = kk.constructor;
            Bk = tk ? BB(kk) ? new ak : [] : tB(ak) ? XB(Rk = tF(kk)) ? aF(Rk) : {} : {}
          } else Bk = {};
        return (tk ? Pk : UF)(kk, (function(kk, Rk, tk) {
          return Fk(Bk, kk, Rk, tk)
        })), Bk
      }
    }(Da, Da.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      j: za
    } = Rk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);