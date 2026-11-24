export const id = 147;
export const ids = [147];
export const modules = {
  8085: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ii,
      h: () => RI
    });
    var Xk = {};
    Ik.r(Xk), Ik.d(Xk, {
      b: () => TX,
      g: () => lX,
      f: () => yX,
      k: () => hI,
      n: () => mI,
      o: () => OX,
      q: () => MI,
      u: () => pX,
      y: () => VX,
      B: () => GX,
      C: () => rI,
      F: () => SX,
      G: () => EX,
      J: () => nX,
      N: () => DI,
      K: () => IX,
      O: () => vX,
      S: () => oX
    });
    var Tk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function ik(kk) {
      return kk && kk.__esModule && Object.prototype.hasOwnProperty.call(kk, "default") ? kk.default : kk
    }
    var yk = {
      exports: {}
    };
    ! function(kk) {
      var Fk = Object.prototype.hasOwnProperty,
        Ik = "~";

      function Xk() {}

      function Tk(kk, Fk, Ik) {
        this.Ie = kk, this.context = Fk, this.once = Ik || !1
      }

      function ik(kk, Fk, Xk, ik, yk) {
        if ("function" !== typeof Xk) throw new TypeError("The listener must be a function");
        var lk = new Tk(Xk, ik || kk, yk),
          ak = Ik ? Ik + Fk : Fk;
        return kk._events[ak] ? kk._events[ak].Ie ? kk._events[ak] = [kk._events[ak], lk] : kk._events[ak].push(lk) : (kk._events[ak] = lk, kk._eventsCount++), kk
      }

      function yk(kk, Fk) {
        0 === --kk._eventsCount ? kk._events = new Xk : delete kk._events[Fk]
      }

      function lk() {
        this._events = new Xk, this._eventsCount = 0
      }
      Object.create && (Xk.prototype = Object.create(null), (new Xk).__proto__ || (Ik = !1)), lk.prototype.eventNames = function() {
        var kk, Xk, Tk = [];
        if (0 === this._eventsCount) return Tk;
        for (Xk in kk = this._events) Fk.call(kk, Xk) && Tk.push(Ik ? Xk.slice(1) : Xk);
        return Object.getOwnPropertySymbols ? Tk.concat(Object.getOwnPropertySymbols(kk)) : Tk
      }, lk.prototype.listeners = function(kk) {
        var Fk = Ik ? Ik + kk : kk,
          Xk = this._events[Fk];
        if (!Xk) return [];
        if (Xk.Ie) return [Xk.Ie];
        for (var Tk = 0, ik = Xk.length, yk = new Array(ik); Tk < ik; Tk++) yk[Tk] = Xk[Tk].Ie;
        return yk
      }, lk.prototype.listenerCount = function(kk) {
        var Fk = Ik ? Ik + kk : kk,
          Xk = this._events[Fk];
        return Xk ? Xk.Ie ? 1 : Xk.length : 0
      }, lk.prototype.emit = function(kk, Fk, Xk, Tk, ik, yk) {
        var lk = Ik ? Ik + kk : kk;
        if (!this._events[lk]) return !1;
        var ak, qk, Lk = this._events[lk],
          tk = arguments.length;
        if (Lk.Ie) {
          switch (Lk.once && this.removeListener(kk, Lk.Ie, void 0, !0), tk) {
            case 1:
              return Lk.Ie.call(Lk.context), !0;
            case 2:
              return Lk.Ie.call(Lk.context, Fk), !0;
            case 3:
              return Lk.Ie.call(Lk.context, Fk, Xk), !0;
            case 4:
              return Lk.Ie.call(Lk.context, Fk, Xk, Tk), !0;
            case 5:
              return Lk.Ie.call(Lk.context, Fk, Xk, Tk, ik), !0;
            case 6:
              return Lk.Ie.call(Lk.context, Fk, Xk, Tk, ik, yk), !0
          }
          for (qk = 1, ak = new Array(tk - 1); qk < tk; qk++) ak[qk - 1] = arguments[qk];
          Lk.Ie.apply(Lk.context, ak)
        } else {
          var Zk, jk = Lk.length;
          for (qk = 0; qk < jk; qk++) switch (Lk[qk].once && this.removeListener(kk, Lk[qk].Ie, void 0, !0), tk) {
            case 1:
              Lk[qk].Ie.call(Lk[qk].context);
              break;
            case 2:
              Lk[qk].Ie.call(Lk[qk].context, Fk);
              break;
            case 3:
              Lk[qk].Ie.call(Lk[qk].context, Fk, Xk);
              break;
            case 4:
              Lk[qk].Ie.call(Lk[qk].context, Fk, Xk, Tk);
              break;
            default:
              if (!ak)
                for (Zk = 1, ak = new Array(tk - 1); Zk < tk; Zk++) ak[Zk - 1] = arguments[Zk];
              Lk[qk].Ie.apply(Lk[qk].context, ak)
          }
        }
        return !0
      }, lk.prototype.on = function(kk, Fk, Ik) {
        return ik(this, kk, Fk, Ik, !1)
      }, lk.prototype.once = function(kk, Fk, Ik) {
        return ik(this, kk, Fk, Ik, !0)
      }, lk.prototype.removeListener = function(kk, Fk, Xk, Tk) {
        var ik = Ik ? Ik + kk : kk;
        if (!this._events[ik]) return this;
        if (!Fk) return yk(this, ik), this;
        var lk = this._events[ik];
        if (lk.Ie) lk.Ie !== Fk || Tk && !lk.once || Xk && lk.context !== Xk || yk(this, ik);
        else {
          for (var ak = 0, qk = [], Lk = lk.length; ak < Lk; ak++)(lk[ak].Ie !== Fk || Tk && !lk[ak].once || Xk && lk[ak].context !== Xk) && qk.push(lk[ak]);
          qk.length ? this._events[ik] = 1 === qk.length ? qk[0] : qk : yk(this, ik)
        }
        return this
      }, lk.prototype.qJ = function(kk) {
        var Fk;
        return kk ? (Fk = Ik ? Ik + kk : kk, this._events[Fk] && yk(this, Fk)) : (this._events = new Xk, this._eventsCount = 0), this
      }, lk.prototype.off = lk.prototype.removeListener, lk.prototype.addListener = lk.prototype.on, lk.prefixed = Ik, lk.EventEmitter = lk, kk.exports = lk
    }(yk);
    var lk, ak, qk = ik(yk.exports);
    ! function(kk) {
      kk.assertEqual = kk => kk, kk.assertIs = function(kk) {}, kk.assertNever = function(kk) {
        throw new Error
      }, kk.arrayToEnum = kk => {
        const Fk = {};
        for (const Ik of kk) Fk[Ik] = Ik;
        return Fk
      }, kk.getValidEnumValues = Fk => {
        const Ik = kk.objectKeys(Fk).filter((kk => "number" !== typeof Fk[Fk[kk]])),
          Xk = {};
        for (const kk of Ik) Xk[kk] = Fk[kk];
        return kk.objectValues(Xk)
      }, kk.objectValues = Fk => kk.objectKeys(Fk).map((function(kk) {
        return Fk[kk]
      })), kk.objectKeys = "function" === typeof Object.keys ? kk => Object.keys(kk) : kk => {
        const Fk = [];
        for (const Ik in kk) Object.prototype.hasOwnProperty.call(kk, Ik) && Fk.push(Ik);
        return Fk
      }, kk.find = (kk, Fk) => {
        for (const Ik of kk)
          if (Fk(Ik)) return Ik
      }, kk.isInteger = "function" === typeof Number.isInteger ? kk => Number.isInteger(kk) : kk => "number" === typeof kk && isFinite(kk) && Math.floor(kk) === kk, kk.joinValues = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return kk.map((kk => "string" === typeof kk ? `'${kk}'` : kk)).join(Fk)
      }, kk.jsonStringifyReplacer = (kk, Fk) => "bigint" === typeof Fk ? Fk.toString() : Fk
    }(lk || (lk = {})),
    function(kk) {
      kk.mergeShapes = (kk, Fk) => ({
        ...kk,
        ...Fk
      })
    }(ak || (ak = {}));
    const Lk = lk.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      tk = kk => {
        switch (typeof kk) {
          case "undefined":
            return Lk.undefined;
          case "string":
            return Lk.string;
          case "number":
            return isNaN(kk) ? Lk.nan : Lk.number;
          case "boolean":
            return Lk.boolean;
          case "function":
            return Lk.function;
          case "bigint":
            return Lk.bigint;
          case "symbol":
            return Lk.symbol;
          case "object":
            return Array.isArray(kk) ? Lk.array : null === kk ? Lk.null : kk.then && "function" === typeof kk.then && kk.catch && "function" === typeof kk.catch ? Lk.promise : "undefined" !== typeof Map && kk instanceof Map ? Lk.map : "undefined" !== typeof Set && kk instanceof Set ? Lk.set : "undefined" !== typeof Date && kk instanceof Date ? Lk.date : Lk.object;
          default:
            return Lk.unknown
        }
      },
      Zk = lk.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class jk extends Error {
      constructor(kk) {
        var Fk;
        super(), Fk = this, this.issues = [], this.addIssue = kk => {
          this.issues = [...this.issues, kk]
        }, this.addIssues = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Fk.issues = [...Fk.issues, ...kk]
        };
        const Ik = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Ik) : this.__proto__ = Ik, this.name = "ZodError", this.issues = kk
      }
      get errors() {
        return this.issues
      }
      format(kk) {
        const Fk = kk || function(kk) {
            return kk.message
          },
          Ik = {
            _errors: []
          },
          Xk = kk => {
            for (const Tk of kk.issues)
              if ("invalid_union" === Tk.code) Tk.unionErrors.map(Xk);
              else if ("invalid_return_type" === Tk.code) Xk(Tk.returnTypeError);
            else if ("invalid_arguments" === Tk.code) Xk(Tk.argumentsError);
            else if (0 === Tk.path.length) Ik._errors.push(Fk(Tk));
            else {
              let kk = Ik,
                Xk = 0;
              for (; Xk < Tk.path.length;) {
                const Ik = Tk.path[Xk];
                Xk === Tk.path.length - 1 ? (kk[Ik] = kk[Ik] || {
                  _errors: []
                }, kk[Ik]._errors.push(Fk(Tk))) : kk[Ik] = kk[Ik] || {
                  _errors: []
                }, kk = kk[Ik], Xk++
              }
            }
          };
        return Xk(this), Ik
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, lk.jsonStringifyReplacer, 2)
      }
      get ye() {
        return 0 === this.issues.length
      }
      flatten() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kk => kk.message;
        const Fk = {},
          Ik = [];
        for (const Xk of this.issues) Xk.path.length > 0 ? (Fk[Xk.path[0]] = Fk[Xk.path[0]] || [], Fk[Xk.path[0]].push(kk(Xk))) : Ik.push(kk(Xk));
        return {
          formErrors: Ik,
          fieldErrors: Fk
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    jk.create = kk => new jk(kk);
    const ek = (kk, Fk) => {
      let Ik;
      switch (kk.code) {
        case Zk.invalid_type:
          Ik = kk.received === Lk.undefined ? "Required" : `Expected ${kk.expected}, received ${kk.received}`;
          break;
        case Zk.invalid_literal:
          Ik = `Invalid literal value, expected ${JSON.stringify(kk.expected,lk.jsonStringifyReplacer)}`;
          break;
        case Zk.unrecognized_keys:
          Ik = `Unrecognized key(s) in object: ${lk.joinValues(kk.keys,", ")}`;
          break;
        case Zk.invalid_union:
          Ik = "Invalid input";
          break;
        case Zk.invalid_union_discriminator:
          Ik = `Invalid discriminator value. Expected ${lk.joinValues(kk.options)}`;
          break;
        case Zk.invalid_enum_value:
          Ik = `Invalid enum value. Expected ${lk.joinValues(kk.options)}, received '${kk.received}'`;
          break;
        case Zk.invalid_arguments:
          Ik = "Invalid function arguments";
          break;
        case Zk.invalid_return_type:
          Ik = "Invalid function return type";
          break;
        case Zk.invalid_date:
          Ik = "Invalid date";
          break;
        case Zk.invalid_string:
          "object" === typeof kk.validation ? "includes" in kk.validation ? (Ik = `Invalid input: must include "${kk.validation.includes}"`, "number" === typeof kk.validation.position && (Ik = `${Ik} at one or more positions greater than or equal to ${kk.validation.position}`)) : "startsWith" in kk.validation ? Ik = `Invalid input: must start with "${kk.validation.startsWith}"` : "endsWith" in kk.validation ? Ik = `Invalid input: must end with "${kk.validation.endsWith}"` : lk.assertNever(kk.validation) : Ik = "regex" !== kk.validation ? `Invalid ${kk.validation}` : "Invalid";
          break;
        case Zk.too_small:
          Ik = "array" === kk.type ? `Array must contain ${kk.exact?"exactly":kk.inclusive?"at least":"more than"} ${kk.minimum} element(s)` : "string" === kk.type ? `String must contain ${kk.exact?"exactly":kk.inclusive?"at least":"over"} ${kk.minimum} character(s)` : "number" === kk.type ? `Number must be ${kk.exact?"exactly equal to ":kk.inclusive?"greater than or equal to ":"greater than "}${kk.minimum}` : "date" === kk.type ? `Date must be ${kk.exact?"exactly equal to ":kk.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(kk.minimum))}` : "Invalid input";
          break;
        case Zk.too_big:
          Ik = "array" === kk.type ? `Array must contain ${kk.exact?"exactly":kk.inclusive?"at most":"less than"} ${kk.maximum} element(s)` : "string" === kk.type ? `String must contain ${kk.exact?"exactly":kk.inclusive?"at most":"under"} ${kk.maximum} character(s)` : "number" === kk.type ? `Number must be ${kk.exact?"exactly":kk.inclusive?"less than or equal to":"less than"} ${kk.maximum}` : "bigint" === kk.type ? `BigInt must be ${kk.exact?"exactly":kk.inclusive?"less than or equal to":"less than"} ${kk.maximum}` : "date" === kk.type ? `Date must be ${kk.exact?"exactly":kk.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(kk.maximum))}` : "Invalid input";
          break;
        case Zk.custom:
          Ik = "Invalid input";
          break;
        case Zk.invalid_intersection_types:
          Ik = "Intersection results could not be merged";
          break;
        case Zk.not_multiple_of:
          Ik = `Number must be a multiple of ${kk.multipleOf}`;
          break;
        case Zk.not_finite:
          Ik = "Number must be finite";
          break;
        default:
          Ik = Fk.defaultError, lk.assertNever(kk)
      }
      return {
        message: Ik
      }
    };
    let wk = ek;

    function Hk() {
      return wk
    }
    const Jk = kk => {
      const {
        data: Fk,
        path: Ik,
        errorMaps: Xk,
        issueData: Tk
      } = kk, ik = [...Ik, ...Tk.path || []], yk = {
        ...Tk,
        path: ik
      };
      let lk = "";
      const ak = Xk.filter((kk => !!kk)).slice().reverse();
      for (const qk of ak) lk = qk(yk, {
        data: Fk,
        defaultError: lk
      }).message;
      return {
        ...Tk,
        path: ik,
        message: Tk.message || lk
      }
    };

    function xk(kk, Fk) {
      const Ik = Jk({
        issueData: Fk,
        data: kk.data,
        path: kk.path,
        errorMaps: [kk.common.contextualErrorMap, kk.schemaErrorMap, Hk(), ek].filter((kk => !!kk))
      });
      kk.common.issues.push(Ik)
    }
    class Pk {
      constructor() {
        this.value = "valid"
      }
      Ne() {
        "valid" === this.value && (this.value = "Ne")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(kk, Fk) {
        const Ik = [];
        for (const Xk of Fk) {
          if ("aborted" === Xk.status) return Kk;
          "Ne" === Xk.status && kk.Ne(), Ik.push(Xk.value)
        }
        return {
          status: kk.value,
          value: Ik
        }
      }
      static async mergeObjectAsync(kk, Fk) {
        const Ik = [];
        for (const Xk of Fk) Ik.push({
          key: await Xk.key,
          value: await Xk.value
        });
        return Pk.mergeObjectSync(kk, Ik)
      }
      static mergeObjectSync(kk, Fk) {
        const Ik = {};
        for (const Xk of Fk) {
          const {
            key: Fk,
            value: Tk
          } = Xk;
          if ("aborted" === Fk.status) return Kk;
          if ("aborted" === Tk.status) return Kk;
          "Ne" === Fk.status && kk.Ne(), "Ne" === Tk.status && kk.Ne(), "__proto__" === Fk.value || "undefined" === typeof Tk.value && !Xk.alwaysSet || (Ik[Fk.value] = Tk.value)
        }
        return {
          status: kk.value,
          value: Ik
        }
      }
    }
    const Kk = Object.freeze({
        status: "aborted"
      }),
      Qk = kk => ({
        status: "Ne",
        value: kk
      }),
      sk = kk => ({
        status: "valid",
        value: kk
      }),
      Vk = kk => "aborted" === kk.status,
      zk = kk => "Ne" === kk.status,
      Sk = kk => "valid" === kk.status,
      vk = kk => "undefined" !== typeof Promise && kk instanceof Promise;
    var Ek;
    ! function(kk) {
      kk.errToObj = kk => "string" === typeof kk ? {
        message: kk
      } : kk || {}, kk.toString = kk => "string" === typeof kk ? kk : null === kk || void 0 === kk ? void 0 : kk.message
    }(Ek || (Ek = {}));
    class Ok {
      constructor(kk, Fk, Ik, Xk) {
        this._cachedPath = [], this.parent = kk, this.data = Fk, this._path = Ik, this._key = Xk
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const nk = (kk, Fk) => {
      if (Sk(Fk)) return {
        success: !0,
        data: Fk.value
      };
      if (!kk.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Fk = new jk(kk.common.issues);
          return this._error = Fk, this._error
        }
      }
    };

    function Gk(kk) {
      if (!kk) return {};
      const {
        errorMap: Fk,
        invalid_type_error: Ik,
        required_error: Xk,
        description: Tk
      } = kk;
      if (Fk && (Ik || Xk)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Fk) return {
        errorMap: Fk,
        description: Tk
      };
      return {
        errorMap: (kk, Fk) => "invalid_type" !== kk.code ? {
          message: Fk.defaultError
        } : "undefined" === typeof Fk.data ? {
          message: null !== Xk && void 0 !== Xk ? Xk : Fk.defaultError
        } : {
          message: null !== Ik && void 0 !== Ik ? Ik : Fk.defaultError
        },
        description: Tk
      }
    }
    class pk {
      constructor(kk) {
        this.spa = this.safeParseAsync, this._def = kk, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(kk) {
        return tk(kk.data)
      }
      _getOrReturnCtx(kk, Fk) {
        return Fk || {
          common: kk.parent.common,
          data: kk.data,
          parsedType: tk(kk.data),
          schemaErrorMap: this._def.errorMap,
          path: kk.path,
          parent: kk.parent
        }
      }
      _processInputParams(kk) {
        return {
          status: new Pk,
          ctx: {
            common: kk.parent.common,
            data: kk.data,
            parsedType: tk(kk.data),
            schemaErrorMap: this._def.errorMap,
            path: kk.path,
            parent: kk.parent
          }
        }
      }
      _parseSync(kk) {
        const Fk = this._parse(kk);
        if (vk(Fk)) throw new Error("Synchronous parse encountered promise.");
        return Fk
      }
      _parseAsync(kk) {
        const Fk = this._parse(kk);
        return Promise.resolve(Fk)
      }
      parse(kk, Fk) {
        const Ik = this.safeParse(kk, Fk);
        if (Ik.success) return Ik.data;
        throw Ik.error
      }
      safeParse(kk, Fk) {
        var Ik;
        const Xk = {
            common: {
              issues: [],
              async: null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.async) && void 0 !== Ik && Ik,
              contextualErrorMap: null === Fk || void 0 === Fk ? void 0 : Fk.errorMap
            },
            path: (null === Fk || void 0 === Fk ? void 0 : Fk.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: kk,
            parsedType: tk(kk)
          },
          Tk = this._parseSync({
            data: kk,
            path: Xk.path,
            parent: Xk
          });
        return nk(Xk, Tk)
      }
      async parseAsync(kk, Fk) {
        const Ik = await this.safeParseAsync(kk, Fk);
        if (Ik.success) return Ik.data;
        throw Ik.error
      }
      async safeParseAsync(kk, Fk) {
        const Ik = {
            common: {
              issues: [],
              contextualErrorMap: null === Fk || void 0 === Fk ? void 0 : Fk.errorMap,
              async: !0
            },
            path: (null === Fk || void 0 === Fk ? void 0 : Fk.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: kk,
            parsedType: tk(kk)
          },
          Xk = this._parse({
            data: kk,
            path: Ik.path,
            parent: Ik
          }),
          Tk = await (vk(Xk) ? Xk : Promise.resolve(Xk));
        return nk(Ik, Tk)
      }
      refine(kk, Fk) {
        const Ik = kk => "string" === typeof Fk || "undefined" === typeof Fk ? {
          message: Fk
        } : "function" === typeof Fk ? Fk(kk) : Fk;
        return this._refinement(((Fk, Xk) => {
          const Tk = kk(Fk),
            ik = () => Xk.addIssue({
              code: Zk.custom,
              ...Ik(Fk)
            });
          return "undefined" !== typeof Promise && Tk instanceof Promise ? Tk.then((kk => !!kk || (ik(), !1))) : !!Tk || (ik(), !1)
        }))
      }
      refinement(kk, Fk) {
        return this._refinement(((Ik, Xk) => !!kk(Ik) || (Xk.addIssue("function" === typeof Fk ? Fk(Ik, Xk) : Fk), !1)))
      }
      _refinement(kk) {
        return new QF({
          schema: this,
          typeName: uF.ZodEffects,
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
        return sF.create(this, this._def)
      }
      nullable() {
        return VF.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return IF.create(this, this._def)
      }
      promise() {
        return KF.create(this, this._def)
      }
      or(kk) {
        return iF.create([this, kk], this._def)
      }
      and(kk) {
        return qF.create(this, kk, this._def)
      }
      transform(kk) {
        return new QF({
          ...Gk(this._def),
          schema: this,
          typeName: uF.ZodEffects,
          effect: {
            type: "transform",
            transform: kk
          }
        })
      }
      default (kk) {
        const Fk = "function" === typeof kk ? kk : () => kk;
        return new zF({
          ...Gk(this._def),
          innerType: this,
          defaultValue: Fk,
          typeName: uF.ZodDefault
        })
      }
      brand() {
        return new EF({
          typeName: uF.ZodBranded,
          type: this,
          ...Gk(this._def)
        })
      } catch (kk) {
        const Fk = "function" === typeof kk ? kk : () => kk;
        return new SF({
          ...Gk(this._def),
          innerType: this,
          catchValue: Fk,
          typeName: uF.ZodCatch
        })
      }
      describe(kk) {
        return new(0, this.constructor)({
          ...this._def,
          description: kk
        })
      }
      pipe(kk) {
        return OF.create(this, kk)
      }
      readonly() {
        return nF.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const uk = /^c[^\s-]{8,}$/i,
      bk = /^[a-z][a-z0-9]*$/,
      Rk = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Uk = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Ck = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Nk;
    const ck = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Wk = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class fk extends pk {
      _parse(kk) {
        this._def.coerce && (kk.data = String(kk.data));
        if (this._getType(kk) !== Lk.string) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.string,
            received: Fk.parsedType
          }), Kk
        }
        const Fk = new Pk;
        let Ik;
        for (const ak of this._def.checks)
          if ("min" === ak.kind) kk.data.length < ak.value && (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
            code: Zk.too_small,
            minimum: ak.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: ak.message
          }), Fk.Ne());
          else if ("max" === ak.kind) kk.data.length > ak.value && (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          code: Zk.too_big,
          maximum: ak.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: ak.message
        }), Fk.Ne());
        else if ("length" === ak.kind) {
          const Xk = kk.data.length > ak.value,
            Tk = kk.data.length < ak.value;
          (Xk || Tk) && (Ik = this._getOrReturnCtx(kk, Ik), Xk ? xk(Ik, {
            code: Zk.too_big,
            maximum: ak.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: ak.message
          }) : Tk && xk(Ik, {
            code: Zk.too_small,
            minimum: ak.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: ak.message
          }), Fk.Ne())
        } else if ("email" === ak.kind) Ck.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "email",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne());
        else if ("emoji" === ak.kind) Nk || (Nk = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Nk.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "emoji",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne());
        else if ("uuid" === ak.kind) Uk.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "uuid",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne());
        else if ("cuid" === ak.kind) uk.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "cuid",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne());
        else if ("cuid2" === ak.kind) bk.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "cuid2",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne());
        else if ("ulid" === ak.kind) Rk.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "ulid",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne());
        else if ("url" === ak.kind) try {
          new URL(kk.data)
        } catch (yk) {
          Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
            validation: "url",
            code: Zk.invalid_string,
            message: ak.message
          }), Fk.Ne()
        } else if ("regex" === ak.kind) {
          ak.regex.lastIndex = 0;
          ak.regex.test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
            validation: "regex",
            code: Zk.invalid_string,
            message: ak.message
          }), Fk.Ne())
        } else if ("trim" === ak.kind) kk.data = kk.data.trim();
        else if ("includes" === ak.kind) kk.data.includes(ak.value, ak.position) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          code: Zk.invalid_string,
          validation: {
            includes: ak.value,
            position: ak.position
          },
          message: ak.message
        }), Fk.Ne());
        else if ("toLowerCase" === ak.kind) kk.data = kk.data.toLowerCase();
        else if ("toUpperCase" === ak.kind) kk.data = kk.data.toUpperCase();
        else if ("startsWith" === ak.kind) kk.data.startsWith(ak.value) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          code: Zk.invalid_string,
          validation: {
            startsWith: ak.value
          },
          message: ak.message
        }), Fk.Ne());
        else if ("endsWith" === ak.kind) kk.data.endsWith(ak.value) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          code: Zk.invalid_string,
          validation: {
            endsWith: ak.value
          },
          message: ak.message
        }), Fk.Ne());
        else if ("datetime" === ak.kind) {
          ((ik = ak).precision ? ik.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ik.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ik.precision}}Z$`) : 0 === ik.precision ? ik.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ik.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(kk.data) || (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
            code: Zk.invalid_string,
            validation: "datetime",
            message: ak.message
          }), Fk.Ne())
        } else "ip" === ak.kind ? (Xk = kk.data, ("v4" !== (Tk = ak.version) && Tk || !ck.test(Xk)) && ("v6" !== Tk && Tk || !Wk.test(Xk)) && (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          validation: "ip",
          code: Zk.invalid_string,
          message: ak.message
        }), Fk.Ne())) : lk.assertNever(ak);
        var Xk, Tk, ik;
        return {
          status: Fk.value,
          value: kk.data
        }
      }
      _regex(kk, Fk, Ik) {
        return this.refinement((Fk => kk.test(Fk)), {
          validation: Fk,
          code: Zk.invalid_string,
          ...Ek.errToObj(Ik)
        })
      }
      _addCheck(kk) {
        return new fk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      email(kk) {
        return this._addCheck({
          kind: "email",
          ...Ek.errToObj(kk)
        })
      }
      url(kk) {
        return this._addCheck({
          kind: "url",
          ...Ek.errToObj(kk)
        })
      }
      emoji(kk) {
        return this._addCheck({
          kind: "emoji",
          ...Ek.errToObj(kk)
        })
      }
      uuid(kk) {
        return this._addCheck({
          kind: "uuid",
          ...Ek.errToObj(kk)
        })
      }
      cuid(kk) {
        return this._addCheck({
          kind: "cuid",
          ...Ek.errToObj(kk)
        })
      }
      cuid2(kk) {
        return this._addCheck({
          kind: "cuid2",
          ...Ek.errToObj(kk)
        })
      }
      ulid(kk) {
        return this._addCheck({
          kind: "ulid",
          ...Ek.errToObj(kk)
        })
      }
      ip(kk) {
        return this._addCheck({
          kind: "ip",
          ...Ek.errToObj(kk)
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
          ...Ek.errToObj(null === kk || void 0 === kk ? void 0 : kk.message)
        })
      }
      regex(kk, Fk) {
        return this._addCheck({
          kind: "regex",
          regex: kk,
          ...Ek.errToObj(Fk)
        })
      }
      includes(kk, Fk) {
        return this._addCheck({
          kind: "includes",
          value: kk,
          position: null === Fk || void 0 === Fk ? void 0 : Fk.position,
          ...Ek.errToObj(null === Fk || void 0 === Fk ? void 0 : Fk.message)
        })
      }
      startsWith(kk, Fk) {
        return this._addCheck({
          kind: "startsWith",
          value: kk,
          ...Ek.errToObj(Fk)
        })
      }
      endsWith(kk, Fk) {
        return this._addCheck({
          kind: "endsWith",
          value: kk,
          ...Ek.errToObj(Fk)
        })
      }
      min(kk, Fk) {
        return this._addCheck({
          kind: "min",
          value: kk,
          ...Ek.errToObj(Fk)
        })
      }
      max(kk, Fk) {
        return this._addCheck({
          kind: "max",
          value: kk,
          ...Ek.errToObj(Fk)
        })
      }
      length(kk, Fk) {
        return this._addCheck({
          kind: "length",
          value: kk,
          ...Ek.errToObj(Fk)
        })
      }
      nonempty(kk) {
        return this.min(1, Ek.errToObj(kk))
      }
      trim() {
        return new fk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new fk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new fk({
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

    function Bk(kk, Fk) {
      const Ik = (kk.toString().split(".")[1] || "").length,
        Xk = (Fk.toString().split(".")[1] || "").length,
        Tk = Ik > Xk ? Ik : Xk;
      return parseInt(kk.toFixed(Tk).replace(".", "")) % parseInt(Fk.toFixed(Tk).replace(".", "")) / Math.pow(10, Tk)
    }
    fk.create = kk => {
      var Fk;
      return new fk({
        checks: [],
        typeName: uF.ZodString,
        coerce: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.coerce) && void 0 !== Fk && Fk,
        ...Gk(kk)
      })
    };
    class dk extends pk {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(kk) {
        this._def.coerce && (kk.data = Number(kk.data));
        if (this._getType(kk) !== Lk.number) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.number,
            received: Fk.parsedType
          }), Kk
        }
        let Fk;
        const Ik = new Pk;
        for (const Xk of this._def.checks)
          if ("int" === Xk.kind) lk.isInteger(kk.data) || (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
            code: Zk.invalid_type,
            expected: "integer",
            received: "float",
            message: Xk.message
          }), Ik.Ne());
          else if ("min" === Xk.kind) {
          (Xk.inclusive ? kk.data < Xk.value : kk.data <= Xk.value) && (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
            code: Zk.too_small,
            minimum: Xk.value,
            type: "number",
            inclusive: Xk.inclusive,
            exact: !1,
            message: Xk.message
          }), Ik.Ne())
        } else if ("max" === Xk.kind) {
          (Xk.inclusive ? kk.data > Xk.value : kk.data >= Xk.value) && (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
            code: Zk.too_big,
            maximum: Xk.value,
            type: "number",
            inclusive: Xk.inclusive,
            exact: !1,
            message: Xk.message
          }), Ik.Ne())
        } else "multipleOf" === Xk.kind ? 0 !== Bk(kk.data, Xk.value) && (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
          code: Zk.not_multiple_of,
          multipleOf: Xk.value,
          message: Xk.message
        }), Ik.Ne()) : "finite" === Xk.kind ? Number.isFinite(kk.data) || (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
          code: Zk.not_finite,
          message: Xk.message
        }), Ik.Ne()) : lk.assertNever(Xk);
        return {
          status: Ik.value,
          value: kk.data
        }
      }
      gte(kk, Fk) {
        return this.setLimit("min", kk, !0, Ek.toString(Fk))
      }
      gt(kk, Fk) {
        return this.setLimit("min", kk, !1, Ek.toString(Fk))
      }
      lte(kk, Fk) {
        return this.setLimit("max", kk, !0, Ek.toString(Fk))
      }
      lt(kk, Fk) {
        return this.setLimit("max", kk, !1, Ek.toString(Fk))
      }
      setLimit(kk, Fk, Ik, Xk) {
        return new dk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: kk,
            value: Fk,
            inclusive: Ik,
            message: Ek.toString(Xk)
          }]
        })
      }
      _addCheck(kk) {
        return new dk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      int(kk) {
        return this._addCheck({
          kind: "int",
          message: Ek.toString(kk)
        })
      }
      positive(kk) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Ek.toString(kk)
        })
      }
      negative(kk) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Ek.toString(kk)
        })
      }
      nonpositive(kk) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Ek.toString(kk)
        })
      }
      nonnegative(kk) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Ek.toString(kk)
        })
      }
      multipleOf(kk, Fk) {
        return this._addCheck({
          kind: "multipleOf",
          value: kk,
          message: Ek.toString(Fk)
        })
      }
      finite(kk) {
        return this._addCheck({
          kind: "finite",
          message: Ek.toString(kk)
        })
      }
      safe(kk) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Ek.toString(kk)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Ek.toString(kk)
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
        return !!this._def.checks.find((kk => "int" === kk.kind || "multipleOf" === kk.kind && lk.isInteger(kk.value)))
      }
      get isFinite() {
        let kk = null,
          Fk = null;
        for (const Ik of this._def.checks) {
          if ("finite" === Ik.kind || "int" === Ik.kind || "multipleOf" === Ik.kind) return !0;
          "min" === Ik.kind ? (null === Fk || Ik.value > Fk) && (Fk = Ik.value) : "max" === Ik.kind && (null === kk || Ik.value < kk) && (kk = Ik.value)
        }
        return Number.isFinite(Fk) && Number.isFinite(kk)
      }
    }
    dk.create = kk => new dk({
      checks: [],
      typeName: uF.ZodNumber,
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      ...Gk(kk)
    });
    class Yk extends pk {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(kk) {
        this._def.coerce && (kk.data = BigInt(kk.data));
        if (this._getType(kk) !== Lk.bigint) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.bigint,
            received: Fk.parsedType
          }), Kk
        }
        let Fk;
        const Ik = new Pk;
        for (const Xk of this._def.checks)
          if ("min" === Xk.kind) {
            (Xk.inclusive ? kk.data < Xk.value : kk.data <= Xk.value) && (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
              code: Zk.too_small,
              type: "bigint",
              minimum: Xk.value,
              inclusive: Xk.inclusive,
              message: Xk.message
            }), Ik.Ne())
          } else if ("max" === Xk.kind) {
          (Xk.inclusive ? kk.data > Xk.value : kk.data >= Xk.value) && (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
            code: Zk.too_big,
            type: "bigint",
            maximum: Xk.value,
            inclusive: Xk.inclusive,
            message: Xk.message
          }), Ik.Ne())
        } else "multipleOf" === Xk.kind ? kk.data % Xk.value !== BigInt(0) && (Fk = this._getOrReturnCtx(kk, Fk), xk(Fk, {
          code: Zk.not_multiple_of,
          multipleOf: Xk.value,
          message: Xk.message
        }), Ik.Ne()) : lk.assertNever(Xk);
        return {
          status: Ik.value,
          value: kk.data
        }
      }
      gte(kk, Fk) {
        return this.setLimit("min", kk, !0, Ek.toString(Fk))
      }
      gt(kk, Fk) {
        return this.setLimit("min", kk, !1, Ek.toString(Fk))
      }
      lte(kk, Fk) {
        return this.setLimit("max", kk, !0, Ek.toString(Fk))
      }
      lt(kk, Fk) {
        return this.setLimit("max", kk, !1, Ek.toString(Fk))
      }
      setLimit(kk, Fk, Ik, Xk) {
        return new Yk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: kk,
            value: Fk,
            inclusive: Ik,
            message: Ek.toString(Xk)
          }]
        })
      }
      _addCheck(kk) {
        return new Yk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      positive(kk) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Ek.toString(kk)
        })
      }
      negative(kk) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Ek.toString(kk)
        })
      }
      nonpositive(kk) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Ek.toString(kk)
        })
      }
      nonnegative(kk) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Ek.toString(kk)
        })
      }
      multipleOf(kk, Fk) {
        return this._addCheck({
          kind: "multipleOf",
          value: kk,
          message: Ek.toString(Fk)
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
    Yk.create = kk => {
      var Fk;
      return new Yk({
        checks: [],
        typeName: uF.ZodBigInt,
        coerce: null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.coerce) && void 0 !== Fk && Fk,
        ...Gk(kk)
      })
    };
    class Ak extends pk {
      _parse(kk) {
        this._def.coerce && (kk.data = Boolean(kk.data));
        if (this._getType(kk) !== Lk.boolean) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.boolean,
            received: Fk.parsedType
          }), Kk
        }
        return sk(kk.data)
      }
    }
    Ak.create = kk => new Ak({
      typeName: uF.ZodBoolean,
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      ...Gk(kk)
    });
    class gk extends pk {
      _parse(kk) {
        this._def.coerce && (kk.data = new Date(kk.data));
        if (this._getType(kk) !== Lk.date) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.date,
            received: Fk.parsedType
          }), Kk
        }
        if (isNaN(kk.data.getTime())) {
          return xk(this._getOrReturnCtx(kk), {
            code: Zk.invalid_date
          }), Kk
        }
        const Fk = new Pk;
        let Ik;
        for (const Xk of this._def.checks) "min" === Xk.kind ? kk.data.getTime() < Xk.value && (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          code: Zk.too_small,
          message: Xk.message,
          inclusive: !0,
          exact: !1,
          minimum: Xk.value,
          type: "date"
        }), Fk.Ne()) : "max" === Xk.kind ? kk.data.getTime() > Xk.value && (Ik = this._getOrReturnCtx(kk, Ik), xk(Ik, {
          code: Zk.too_big,
          message: Xk.message,
          inclusive: !0,
          exact: !1,
          maximum: Xk.value,
          type: "date"
        }), Fk.Ne()) : lk.assertNever(Xk);
        return {
          status: Fk.value,
          value: new Date(kk.data.getTime())
        }
      }
      _addCheck(kk) {
        return new gk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      min(kk, Fk) {
        return this._addCheck({
          kind: "min",
          value: kk.getTime(),
          message: Ek.toString(Fk)
        })
      }
      max(kk, Fk) {
        return this._addCheck({
          kind: "max",
          value: kk.getTime(),
          message: Ek.toString(Fk)
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
    gk.create = kk => new gk({
      checks: [],
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      typeName: uF.ZodDate,
      ...Gk(kk)
    });
    class mk extends pk {
      _parse(kk) {
        if (this._getType(kk) !== Lk.symbol) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.symbol,
            received: Fk.parsedType
          }), Kk
        }
        return sk(kk.data)
      }
    }
    mk.create = kk => new mk({
      typeName: uF.ZodSymbol,
      ...Gk(kk)
    });
    class hk extends pk {
      _parse(kk) {
        if (this._getType(kk) !== Lk.undefined) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.undefined,
            received: Fk.parsedType
          }), Kk
        }
        return sk(kk.data)
      }
    }
    hk.create = kk => new hk({
      typeName: uF.ZodUndefined,
      ...Gk(kk)
    });
    class rk extends pk {
      _parse(kk) {
        if (this._getType(kk) !== Lk.null) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.null,
            received: Fk.parsedType
          }), Kk
        }
        return sk(kk.data)
      }
    }
    rk.create = kk => new rk({
      typeName: uF.ZodNull,
      ...Gk(kk)
    });
    class Dk extends pk {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(kk) {
        return sk(kk.data)
      }
    }
    Dk.create = kk => new Dk({
      typeName: uF.ZodAny,
      ...Gk(kk)
    });
    class Mk extends pk {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(kk) {
        return sk(kk.data)
      }
    }
    Mk.create = kk => new Mk({
      typeName: uF.ZodUnknown,
      ...Gk(kk)
    });
    class kF extends pk {
      _parse(kk) {
        const Fk = this._getOrReturnCtx(kk);
        return xk(Fk, {
          code: Zk.invalid_type,
          expected: Lk.never,
          received: Fk.parsedType
        }), Kk
      }
    }
    kF.create = kk => new kF({
      typeName: uF.ZodNever,
      ...Gk(kk)
    });
    class FF extends pk {
      _parse(kk) {
        if (this._getType(kk) !== Lk.undefined) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.void,
            received: Fk.parsedType
          }), Kk
        }
        return sk(kk.data)
      }
    }
    FF.create = kk => new FF({
      typeName: uF.ZodVoid,
      ...Gk(kk)
    });
    class IF extends pk {
      _parse(kk) {
        const {
          ctx: Fk,
          status: Ik
        } = this._processInputParams(kk), Xk = this._def;
        if (Fk.parsedType !== Lk.array) return xk(Fk, {
          code: Zk.invalid_type,
          expected: Lk.array,
          received: Fk.parsedType
        }), Kk;
        if (null !== Xk.exactLength) {
          const kk = Fk.data.length > Xk.exactLength.value,
            Tk = Fk.data.length < Xk.exactLength.value;
          (kk || Tk) && (xk(Fk, {
            code: kk ? Zk.too_big : Zk.too_small,
            minimum: Tk ? Xk.exactLength.value : void 0,
            maximum: kk ? Xk.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Xk.exactLength.message
          }), Ik.Ne())
        }
        if (null !== Xk.minLength && Fk.data.length < Xk.minLength.value && (xk(Fk, {
            code: Zk.too_small,
            minimum: Xk.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Xk.minLength.message
          }), Ik.Ne()), null !== Xk.maxLength && Fk.data.length > Xk.maxLength.value && (xk(Fk, {
            code: Zk.too_big,
            maximum: Xk.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Xk.maxLength.message
          }), Ik.Ne()), Fk.common.async) return Promise.all([...Fk.data].map(((kk, Ik) => Xk.type._parseAsync(new Ok(Fk, kk, Fk.path, Ik))))).then((kk => Pk.mergeArray(Ik, kk)));
        const Tk = [...Fk.data].map(((kk, Ik) => Xk.type._parseSync(new Ok(Fk, kk, Fk.path, Ik))));
        return Pk.mergeArray(Ik, Tk)
      }
      get element() {
        return this._def.type
      }
      min(kk, Fk) {
        return new IF({
          ...this._def,
          minLength: {
            value: kk,
            message: Ek.toString(Fk)
          }
        })
      }
      max(kk, Fk) {
        return new IF({
          ...this._def,
          maxLength: {
            value: kk,
            message: Ek.toString(Fk)
          }
        })
      }
      length(kk, Fk) {
        return new IF({
          ...this._def,
          exactLength: {
            value: kk,
            message: Ek.toString(Fk)
          }
        })
      }
      nonempty(kk) {
        return this.min(1, kk)
      }
    }

    function XF(kk) {
      if (kk instanceof TF) {
        const Fk = {};
        for (const Ik in kk.shape) {
          const Xk = kk.shape[Ik];
          Fk[Ik] = sF.create(XF(Xk))
        }
        return new TF({
          ...kk._def,
          shape: () => Fk
        })
      }
      return kk instanceof IF ? new IF({
        ...kk._def,
        type: XF(kk.element)
      }) : kk instanceof sF ? sF.create(XF(kk.unwrap())) : kk instanceof VF ? VF.create(XF(kk.unwrap())) : kk instanceof LF ? LF.create(kk.items.map((kk => XF(kk)))) : kk
    }
    IF.create = (kk, Fk) => new IF({
      type: kk,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: uF.ZodArray,
      ...Gk(Fk)
    });
    class TF extends pk {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const kk = this._def.shape(),
          Fk = lk.objectKeys(kk);
        return this._cached = {
          shape: kk,
          keys: Fk
        }
      }
      _parse(kk) {
        if (this._getType(kk) !== Lk.object) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.object,
            received: Fk.parsedType
          }), Kk
        }
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk), {
          shape: Xk,
          keys: Tk
        } = this._getCached(), ik = [];
        if (!(this._def.catchall instanceof kF && "strip" === this._def.unknownKeys))
          for (const lk in Ik.data) Tk.includes(lk) || ik.push(lk);
        const yk = [];
        for (const lk of Tk) {
          const kk = Xk[lk],
            Fk = Ik.data[lk];
          yk.push({
            key: {
              status: "valid",
              value: lk
            },
            value: kk._parse(new Ok(Ik, Fk, Ik.path, lk)),
            alwaysSet: lk in Ik.data
          })
        }
        if (this._def.catchall instanceof kF) {
          const kk = this._def.unknownKeys;
          if ("passthrough" === kk)
            for (const Fk of ik) yk.push({
              key: {
                status: "valid",
                value: Fk
              },
              value: {
                status: "valid",
                value: Ik.data[Fk]
              }
            });
          else if ("strict" === kk) ik.length > 0 && (xk(Ik, {
            code: Zk.unrecognized_keys,
            keys: ik
          }), Fk.Ne());
          else if ("strip" !== kk) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const kk = this._def.catchall;
          for (const Fk of ik) {
            const Xk = Ik.data[Fk];
            yk.push({
              key: {
                status: "valid",
                value: Fk
              },
              value: kk._parse(new Ok(Ik, Xk, Ik.path, Fk)),
              alwaysSet: Fk in Ik.data
            })
          }
        }
        return Ik.common.async ? Promise.resolve().then((async () => {
          const kk = [];
          for (const Fk of yk) {
            const Ik = await Fk.key;
            kk.push({
              key: Ik,
              value: await Fk.value,
              alwaysSet: Fk.alwaysSet
            })
          }
          return kk
        })).then((kk => Pk.mergeObjectSync(Fk, kk))) : Pk.mergeObjectSync(Fk, yk)
      }
      get shape() {
        return this._def.shape()
      }
      strict(kk) {
        return Ek.errToObj, new TF({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== kk ? {
            errorMap: (Fk, Ik) => {
              var Xk, Tk, ik, yk;
              const lk = null !== (ik = null === (Tk = (Xk = this._def).errorMap) || void 0 === Tk ? void 0 : Tk.call(Xk, Fk, Ik).message) && void 0 !== ik ? ik : Ik.defaultError;
              return "unrecognized_keys" === Fk.code ? {
                message: null !== (yk = Ek.errToObj(kk).message) && void 0 !== yk ? yk : lk
              } : {
                message: lk
              }
            }
          } : {}
        })
      }
      strip() {
        return new TF({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new TF({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(kk) {
        return new TF({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...kk
          })
        })
      }
      merge(kk) {
        return new TF({
          unknownKeys: kk._def.unknownKeys,
          catchall: kk._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...kk._def.shape()
          }),
          typeName: uF.ZodObject
        })
      }
      setKey(kk, Fk) {
        return this.augment({
          [kk]: Fk
        })
      }
      catchall(kk) {
        return new TF({
          ...this._def,
          catchall: kk
        })
      }
      rZ(kk) {
        const Fk = {};
        return lk.objectKeys(kk).forEach((Ik => {
          kk[Ik] && this.shape[Ik] && (Fk[Ik] = this.shape[Ik])
        })), new TF({
          ...this._def,
          shape: () => Fk
        })
      }
      omit(kk) {
        const Fk = {};
        return lk.objectKeys(this.shape).forEach((Ik => {
          kk[Ik] || (Fk[Ik] = this.shape[Ik])
        })), new TF({
          ...this._def,
          shape: () => Fk
        })
      }
      deepPartial() {
        return XF(this)
      }
      partial(kk) {
        const Fk = {};
        return lk.objectKeys(this.shape).forEach((Ik => {
          const Xk = this.shape[Ik];
          kk && !kk[Ik] ? Fk[Ik] = Xk : Fk[Ik] = Xk.optional()
        })), new TF({
          ...this._def,
          shape: () => Fk
        })
      }
      required(kk) {
        const Fk = {};
        return lk.objectKeys(this.shape).forEach((Ik => {
          if (kk && !kk[Ik]) Fk[Ik] = this.shape[Ik];
          else {
            let kk = this.shape[Ik];
            for (; kk instanceof sF;) kk = kk._def.innerType;
            Fk[Ik] = kk
          }
        })), new TF({
          ...this._def,
          shape: () => Fk
        })
      }
      keyof() {
        return JF(lk.objectKeys(this.shape))
      }
    }
    TF.create = (kk, Fk) => new TF({
      shape: () => kk,
      unknownKeys: "strip",
      catchall: kF.create(),
      typeName: uF.ZodObject,
      ...Gk(Fk)
    }), TF.strictCreate = (kk, Fk) => new TF({
      shape: () => kk,
      unknownKeys: "strict",
      catchall: kF.create(),
      typeName: uF.ZodObject,
      ...Gk(Fk)
    }), TF.lazycreate = (kk, Fk) => new TF({
      shape: kk,
      unknownKeys: "strip",
      catchall: kF.create(),
      typeName: uF.ZodObject,
      ...Gk(Fk)
    });
    class iF extends pk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk), Ik = this._def.options;
        if (Fk.common.async) return Promise.all(Ik.map((async kk => {
          const Ik = {
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
              parent: Ik
            }),
            ctx: Ik
          }
        }))).then((function(kk) {
          for (const Fk of kk)
            if ("valid" === Fk.result.status) return Fk.result;
          for (const Xk of kk)
            if ("Ne" === Xk.result.status) return Fk.common.issues.push(...Xk.ctx.common.issues), Xk.result;
          const Ik = kk.map((kk => new jk(kk.ctx.common.issues)));
          return xk(Fk, {
            code: Zk.invalid_union,
            unionErrors: Ik
          }), Kk
        }));
        {
          let kk;
          const Xk = [];
          for (const ik of Ik) {
            const Ik = {
                ...Fk,
                common: {
                  ...Fk.common,
                  issues: []
                },
                parent: null
              },
              Tk = ik._parseSync({
                data: Fk.data,
                path: Fk.path,
                parent: Ik
              });
            if ("valid" === Tk.status) return Tk;
            "Ne" !== Tk.status || kk || (kk = {
              result: Tk,
              ctx: Ik
            }), Ik.common.issues.length && Xk.push(Ik.common.issues)
          }
          if (kk) return Fk.common.issues.push(...kk.ctx.common.issues), kk.result;
          const Tk = Xk.map((kk => new jk(kk)));
          return xk(Fk, {
            code: Zk.invalid_union,
            unionErrors: Tk
          }), Kk
        }
      }
      get options() {
        return this._def.options
      }
    }
    iF.create = (kk, Fk) => new iF({
      options: kk,
      typeName: uF.ZodUnion,
      ...Gk(Fk)
    });
    const yF = kk => kk instanceof wF ? yF(kk.schema) : kk instanceof QF ? yF(kk.innerType()) : kk instanceof HF ? [kk.value] : kk instanceof xF ? kk.options : kk instanceof PF ? Object.keys(kk.enum) : kk instanceof zF ? yF(kk._def.innerType) : kk instanceof hk ? [void 0] : kk instanceof rk ? [null] : null;
    class lF extends pk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        if (Fk.parsedType !== Lk.object) return xk(Fk, {
          code: Zk.invalid_type,
          expected: Lk.object,
          received: Fk.parsedType
        }), Kk;
        const Ik = this.discriminator,
          Xk = Fk.data[Ik],
          Tk = this.optionsMap.get(Xk);
        return Tk ? Fk.common.async ? Tk._parseAsync({
          data: Fk.data,
          path: Fk.path,
          parent: Fk
        }) : Tk._parseSync({
          data: Fk.data,
          path: Fk.path,
          parent: Fk
        }) : (xk(Fk, {
          code: Zk.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Ik]
        }), Kk)
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
      static create(kk, Fk, Ik) {
        const Xk = new Map;
        for (const Tk of Fk) {
          const Fk = yF(Tk.shape[kk]);
          if (!Fk) throw new Error(`A discriminator value for key \`${kk}\` could not be extracted from all schema options`);
          for (const Ik of Fk) {
            if (Xk.has(Ik)) throw new Error(`Discriminator property ${String(kk)} has duplicate value ${String(Ik)}`);
            Xk.set(Ik, Tk)
          }
        }
        return new lF({
          typeName: uF.ZodDiscriminatedUnion,
          discriminator: kk,
          options: Fk,
          optionsMap: Xk,
          ...Gk(Ik)
        })
      }
    }

    function aF(kk, Fk) {
      const Ik = tk(kk),
        Xk = tk(Fk);
      if (kk === Fk) return {
        valid: !0,
        data: kk
      };
      if (Ik === Lk.object && Xk === Lk.object) {
        const Ik = lk.objectKeys(Fk),
          Xk = lk.objectKeys(kk).filter((kk => -1 !== Ik.indexOf(kk))),
          Tk = {
            ...kk,
            ...Fk
          };
        for (const ik of Xk) {
          const Ik = aF(kk[ik], Fk[ik]);
          if (!Ik.valid) return {
            valid: !1
          };
          Tk[ik] = Ik.data
        }
        return {
          valid: !0,
          data: Tk
        }
      }
      if (Ik === Lk.array && Xk === Lk.array) {
        if (kk.length !== Fk.length) return {
          valid: !1
        };
        const Ik = [];
        for (let Xk = 0; Xk < kk.length; Xk++) {
          const Tk = aF(kk[Xk], Fk[Xk]);
          if (!Tk.valid) return {
            valid: !1
          };
          Ik.push(Tk.data)
        }
        return {
          valid: !0,
          data: Ik
        }
      }
      return Ik === Lk.date && Xk === Lk.date && +kk === +Fk ? {
        valid: !0,
        data: kk
      } : {
        valid: !1
      }
    }
    class qF extends pk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk), Xk = (kk, Xk) => {
          if (Vk(kk) || Vk(Xk)) return Kk;
          const Tk = aF(kk.value, Xk.value);
          return Tk.valid ? ((zk(kk) || zk(Xk)) && Fk.Ne(), {
            status: Fk.value,
            value: Tk.data
          }) : (xk(Ik, {
            code: Zk.invalid_intersection_types
          }), Kk)
        };
        return Ik.common.async ? Promise.all([this._def.left._parseAsync({
          data: Ik.data,
          path: Ik.path,
          parent: Ik
        }), this._def.right._parseAsync({
          data: Ik.data,
          path: Ik.path,
          parent: Ik
        })]).then((kk => {
          let [Fk, Ik] = kk;
          return Xk(Fk, Ik)
        })) : Xk(this._def.left._parseSync({
          data: Ik.data,
          path: Ik.path,
          parent: Ik
        }), this._def.right._parseSync({
          data: Ik.data,
          path: Ik.path,
          parent: Ik
        }))
      }
    }
    qF.create = (kk, Fk, Ik) => new qF({
      left: kk,
      right: Fk,
      typeName: uF.ZodIntersection,
      ...Gk(Ik)
    });
    class LF extends pk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk);
        if (Ik.parsedType !== Lk.array) return xk(Ik, {
          code: Zk.invalid_type,
          expected: Lk.array,
          received: Ik.parsedType
        }), Kk;
        if (Ik.data.length < this._def.items.length) return xk(Ik, {
          code: Zk.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Kk;
        !this._def.rest && Ik.data.length > this._def.items.length && (xk(Ik, {
          code: Zk.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Fk.Ne());
        const Xk = [...Ik.data].map(((kk, Fk) => {
          const Xk = this._def.items[Fk] || this._def.rest;
          return Xk ? Xk._parse(new Ok(Ik, kk, Ik.path, Fk)) : null
        })).filter((kk => !!kk));
        return Ik.common.async ? Promise.all(Xk).then((kk => Pk.mergeArray(Fk, kk))) : Pk.mergeArray(Fk, Xk)
      }
      get items() {
        return this._def.items
      }
      rest(kk) {
        return new LF({
          ...this._def,
          rest: kk
        })
      }
    }
    LF.create = (kk, Fk) => {
      if (!Array.isArray(kk)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new LF({
        items: kk,
        typeName: uF.ZodTuple,
        rest: null,
        ...Gk(Fk)
      })
    };
    class tF extends pk {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk);
        if (Ik.parsedType !== Lk.object) return xk(Ik, {
          code: Zk.invalid_type,
          expected: Lk.object,
          received: Ik.parsedType
        }), Kk;
        const Xk = [],
          Tk = this._def.keyType,
          ik = this._def.valueType;
        for (const yk in Ik.data) Xk.push({
          key: Tk._parse(new Ok(Ik, yk, Ik.path, yk)),
          value: ik._parse(new Ok(Ik, Ik.data[yk], Ik.path, yk))
        });
        return Ik.common.async ? Pk.mergeObjectAsync(Fk, Xk) : Pk.mergeObjectSync(Fk, Xk)
      }
      get element() {
        return this._def.valueType
      }
      static create(kk, Fk, Ik) {
        return new tF(Fk instanceof pk ? {
          keyType: kk,
          valueType: Fk,
          typeName: uF.ZodRecord,
          ...Gk(Ik)
        } : {
          keyType: fk.create(),
          valueType: kk,
          typeName: uF.ZodRecord,
          ...Gk(Fk)
        })
      }
    }
    class ZF extends pk {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk);
        if (Ik.parsedType !== Lk.map) return xk(Ik, {
          code: Zk.invalid_type,
          expected: Lk.map,
          received: Ik.parsedType
        }), Kk;
        const Xk = this._def.keyType,
          Tk = this._def.valueType,
          ik = [...Ik.data.entries()].map(((kk, Fk) => {
            let [ik, yk] = kk;
            return {
              key: Xk._parse(new Ok(Ik, ik, Ik.path, [Fk, "key"])),
              value: Tk._parse(new Ok(Ik, yk, Ik.path, [Fk, "value"]))
            }
          }));
        if (Ik.common.async) {
          const kk = new Map;
          return Promise.resolve().then((async () => {
            for (const Ik of ik) {
              const Xk = await Ik.key,
                Tk = await Ik.value;
              if ("aborted" === Xk.status || "aborted" === Tk.status) return Kk;
              "Ne" !== Xk.status && "Ne" !== Tk.status || Fk.Ne(), kk.set(Xk.value, Tk.value)
            }
            return {
              status: Fk.value,
              value: kk
            }
          }))
        } {
          const kk = new Map;
          for (const Ik of ik) {
            const Xk = Ik.key,
              Tk = Ik.value;
            if ("aborted" === Xk.status || "aborted" === Tk.status) return Kk;
            "Ne" !== Xk.status && "Ne" !== Tk.status || Fk.Ne(), kk.set(Xk.value, Tk.value)
          }
          return {
            status: Fk.value,
            value: kk
          }
        }
      }
    }
    ZF.create = (kk, Fk, Ik) => new ZF({
      valueType: Fk,
      keyType: kk,
      typeName: uF.ZodMap,
      ...Gk(Ik)
    });
    class jF extends pk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk);
        if (Ik.parsedType !== Lk.set) return xk(Ik, {
          code: Zk.invalid_type,
          expected: Lk.set,
          received: Ik.parsedType
        }), Kk;
        const Xk = this._def;
        null !== Xk.minSize && Ik.data.size < Xk.minSize.value && (xk(Ik, {
          code: Zk.too_small,
          minimum: Xk.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Xk.minSize.message
        }), Fk.Ne()), null !== Xk.maxSize && Ik.data.size > Xk.maxSize.value && (xk(Ik, {
          code: Zk.too_big,
          maximum: Xk.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Xk.maxSize.message
        }), Fk.Ne());
        const Tk = this._def.valueType;

        function ik(kk) {
          const Ik = new Set;
          for (const Xk of kk) {
            if ("aborted" === Xk.status) return Kk;
            "Ne" === Xk.status && Fk.Ne(), Ik.add(Xk.value)
          }
          return {
            status: Fk.value,
            value: Ik
          }
        }
        const yk = [...Ik.data.values()].map(((kk, Fk) => Tk._parse(new Ok(Ik, kk, Ik.path, Fk))));
        return Ik.common.async ? Promise.all(yk).then((kk => ik(kk))) : ik(yk)
      }
      min(kk, Fk) {
        return new jF({
          ...this._def,
          minSize: {
            value: kk,
            message: Ek.toString(Fk)
          }
        })
      }
      max(kk, Fk) {
        return new jF({
          ...this._def,
          maxSize: {
            value: kk,
            message: Ek.toString(Fk)
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
    jF.create = (kk, Fk) => new jF({
      valueType: kk,
      minSize: null,
      maxSize: null,
      typeName: uF.ZodSet,
      ...Gk(Fk)
    });
    class eF extends pk {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        if (Fk.parsedType !== Lk.function) return xk(Fk, {
          code: Zk.invalid_type,
          expected: Lk.function,
          received: Fk.parsedType
        }), Kk;

        function Ik(kk, Ik) {
          return Jk({
            data: kk,
            path: Fk.path,
            errorMaps: [Fk.common.contextualErrorMap, Fk.schemaErrorMap, Hk(), ek].filter((kk => !!kk)),
            issueData: {
              code: Zk.invalid_arguments,
              argumentsError: Ik
            }
          })
        }

        function Xk(kk, Ik) {
          return Jk({
            data: kk,
            path: Fk.path,
            errorMaps: [Fk.common.contextualErrorMap, Fk.schemaErrorMap, Hk(), ek].filter((kk => !!kk)),
            issueData: {
              code: Zk.invalid_return_type,
              returnTypeError: Ik
            }
          })
        }
        const Tk = {
            errorMap: Fk.common.contextualErrorMap
          },
          ik = Fk.data;
        if (this._def.returns instanceof KF) {
          const kk = this;
          return sk((async function() {
            for (var Fk = arguments.length, yk = new Array(Fk), lk = 0; lk < Fk; lk++) yk[lk] = arguments[lk];
            const ak = new jk([]),
              qk = await kk._def.args.parseAsync(yk, Tk).catch((kk => {
                throw ak.addIssue(Ik(yk, kk)), ak
              })),
              Lk = await Reflect.apply(ik, this, qk);
            return await kk._def.returns._def.type.parseAsync(Lk, Tk).catch((kk => {
              throw ak.addIssue(Xk(Lk, kk)), ak
            }))
          }))
        } {
          const kk = this;
          return sk((function() {
            for (var Fk = arguments.length, yk = new Array(Fk), lk = 0; lk < Fk; lk++) yk[lk] = arguments[lk];
            const ak = kk._def.args.safeParse(yk, Tk);
            if (!ak.success) throw new jk([Ik(yk, ak.error)]);
            const qk = Reflect.apply(ik, this, ak.data),
              Lk = kk._def.returns.safeParse(qk, Tk);
            if (!Lk.success) throw new jk([Xk(qk, Lk.error)]);
            return Lk.data
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
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        return new eF({
          ...this._def,
          args: LF.create(Fk).rest(Mk.create())
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
      static create(kk, Fk, Ik) {
        return new eF({
          args: kk || LF.create([]).rest(Mk.create()),
          returns: Fk || Mk.create(),
          typeName: uF.ZodFunction,
          ...Gk(Ik)
        })
      }
    }
    class wF extends pk {
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
    wF.create = (kk, Fk) => new wF({
      getter: kk,
      typeName: uF.ZodLazy,
      ...Gk(Fk)
    });
    class HF extends pk {
      _parse(kk) {
        if (kk.data !== this._def.value) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            received: Fk.data,
            code: Zk.invalid_literal,
            expected: this._def.value
          }), Kk
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

    function JF(kk, Fk) {
      return new xF({
        values: kk,
        typeName: uF.ZodEnum,
        ...Gk(Fk)
      })
    }
    HF.create = (kk, Fk) => new HF({
      value: kk,
      typeName: uF.ZodLiteral,
      ...Gk(Fk)
    });
    class xF extends pk {
      _parse(kk) {
        if ("string" !== typeof kk.data) {
          const Fk = this._getOrReturnCtx(kk),
            Ik = this._def.values;
          return xk(Fk, {
            expected: lk.joinValues(Ik),
            received: Fk.parsedType,
            code: Zk.invalid_type
          }), Kk
        }
        if (-1 === this._def.values.indexOf(kk.data)) {
          const Fk = this._getOrReturnCtx(kk),
            Ik = this._def.values;
          return xk(Fk, {
            received: Fk.data,
            code: Zk.invalid_enum_value,
            options: Ik
          }), Kk
        }
        return sk(kk.data)
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
        return xF.create(kk)
      }
      exclude(kk) {
        return xF.create(this.options.filter((Fk => !kk.includes(Fk))))
      }
    }
    xF.create = JF;
    class PF extends pk {
      _parse(kk) {
        const Fk = lk.getValidEnumValues(this._def.values),
          Ik = this._getOrReturnCtx(kk);
        if (Ik.parsedType !== Lk.string && Ik.parsedType !== Lk.number) {
          const kk = lk.objectValues(Fk);
          return xk(Ik, {
            expected: lk.joinValues(kk),
            received: Ik.parsedType,
            code: Zk.invalid_type
          }), Kk
        }
        if (-1 === Fk.indexOf(kk.data)) {
          const kk = lk.objectValues(Fk);
          return xk(Ik, {
            received: Ik.data,
            code: Zk.invalid_enum_value,
            options: kk
          }), Kk
        }
        return sk(kk.data)
      }
      get enum() {
        return this._def.values
      }
    }
    PF.create = (kk, Fk) => new PF({
      values: kk,
      typeName: uF.ZodNativeEnum,
      ...Gk(Fk)
    });
    class KF extends pk {
      unwrap() {
        return this._def.type
      }
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        if (Fk.parsedType !== Lk.promise && !1 === Fk.common.async) return xk(Fk, {
          code: Zk.invalid_type,
          expected: Lk.promise,
          received: Fk.parsedType
        }), Kk;
        const Ik = Fk.parsedType === Lk.promise ? Fk.data : Promise.resolve(Fk.data);
        return sk(Ik.then((kk => this._def.type.parseAsync(kk, {
          path: Fk.path,
          errorMap: Fk.common.contextualErrorMap
        }))))
      }
    }
    KF.create = (kk, Fk) => new KF({
      type: kk,
      typeName: uF.ZodPromise,
      ...Gk(Fk)
    });
    class QF extends pk {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === uF.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk), Xk = this._def.effect || null, Tk = {
          addIssue: kk => {
            xk(Ik, kk), kk.fatal ? Fk.abort() : Fk.Ne()
          },
          get path() {
            return Ik.path
          }
        };
        if (Tk.addIssue = Tk.addIssue.bind(Tk), "preprocess" === Xk.type) {
          const kk = Xk.transform(Ik.data, Tk);
          return Ik.common.issues.length ? {
            status: "Ne",
            value: Ik.data
          } : Ik.common.async ? Promise.resolve(kk).then((kk => this._def.schema._parseAsync({
            data: kk,
            path: Ik.path,
            parent: Ik
          }))) : this._def.schema._parseSync({
            data: kk,
            path: Ik.path,
            parent: Ik
          })
        }
        if ("refinement" === Xk.type) {
          const kk = kk => {
            const Fk = Xk.refinement(kk, Tk);
            if (Ik.common.async) return Promise.resolve(Fk);
            if (Fk instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return kk
          };
          if (!1 === Ik.common.async) {
            const Xk = this._def.schema._parseSync({
              data: Ik.data,
              path: Ik.path,
              parent: Ik
            });
            return "aborted" === Xk.status ? Kk : ("Ne" === Xk.status && Fk.Ne(), kk(Xk.value), {
              status: Fk.value,
              value: Xk.value
            })
          }
          return this._def.schema._parseAsync({
            data: Ik.data,
            path: Ik.path,
            parent: Ik
          }).then((Ik => "aborted" === Ik.status ? Kk : ("Ne" === Ik.status && Fk.Ne(), kk(Ik.value).then((() => ({
            status: Fk.value,
            value: Ik.value
          }))))))
        }
        if ("transform" === Xk.type) {
          if (!1 === Ik.common.async) {
            const kk = this._def.schema._parseSync({
              data: Ik.data,
              path: Ik.path,
              parent: Ik
            });
            if (!Sk(kk)) return kk;
            const ik = Xk.transform(kk.value, Tk);
            if (ik instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Fk.value,
              value: ik
            }
          }
          return this._def.schema._parseAsync({
            data: Ik.data,
            path: Ik.path,
            parent: Ik
          }).then((kk => Sk(kk) ? Promise.resolve(Xk.transform(kk.value, Tk)).then((kk => ({
            status: Fk.value,
            value: kk
          }))) : kk))
        }
        lk.assertNever(Xk)
      }
    }
    QF.create = (kk, Fk, Ik) => new QF({
      schema: kk,
      typeName: uF.ZodEffects,
      effect: Fk,
      ...Gk(Ik)
    }), QF.createWithPreprocess = (kk, Fk, Ik) => new QF({
      schema: Fk,
      effect: {
        type: "preprocess",
        transform: kk
      },
      typeName: uF.ZodEffects,
      ...Gk(Ik)
    });
    class sF extends pk {
      _parse(kk) {
        return this._getType(kk) === Lk.undefined ? sk(void 0) : this._def.innerType._parse(kk)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    sF.create = (kk, Fk) => new sF({
      innerType: kk,
      typeName: uF.ZodOptional,
      ...Gk(Fk)
    });
    class VF extends pk {
      _parse(kk) {
        return this._getType(kk) === Lk.null ? sk(null) : this._def.innerType._parse(kk)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    VF.create = (kk, Fk) => new VF({
      innerType: kk,
      typeName: uF.ZodNullable,
      ...Gk(Fk)
    });
    class zF extends pk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk);
        let Ik = Fk.data;
        return Fk.parsedType === Lk.undefined && (Ik = this._def.defaultValue()), this._def.innerType._parse({
          data: Ik,
          path: Fk.path,
          parent: Fk
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    zF.create = (kk, Fk) => new zF({
      innerType: kk,
      typeName: uF.ZodDefault,
      defaultValue: "function" === typeof Fk.default ? Fk.default : () => Fk.default,
      ...Gk(Fk)
    });
    class SF extends pk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk), Ik = {
          ...Fk,
          common: {
            ...Fk.common,
            issues: []
          }
        }, Xk = this._def.innerType._parse({
          data: Ik.data,
          path: Ik.path,
          parent: {
            ...Ik
          }
        });
        return vk(Xk) ? Xk.then((kk => ({
          status: "valid",
          value: "valid" === kk.status ? kk.value : this._def.catchValue({
            get error() {
              return new jk(Ik.common.issues)
            },
            input: Ik.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Xk.status ? Xk.value : this._def.catchValue({
            get error() {
              return new jk(Ik.common.issues)
            },
            input: Ik.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    SF.create = (kk, Fk) => new SF({
      innerType: kk,
      typeName: uF.ZodCatch,
      catchValue: "function" === typeof Fk.catch ? Fk.catch : () => Fk.catch,
      ...Gk(Fk)
    });
    class oF extends pk {
      _parse(kk) {
        if (this._getType(kk) !== Lk.nan) {
          const Fk = this._getOrReturnCtx(kk);
          return xk(Fk, {
            code: Zk.invalid_type,
            expected: Lk.nan,
            received: Fk.parsedType
          }), Kk
        }
        return {
          status: "valid",
          value: kk.data
        }
      }
    }
    oF.create = kk => new oF({
      typeName: uF.ZodNaN,
      ...Gk(kk)
    });
    const vF = Symbol("zod_brand");
    class EF extends pk {
      _parse(kk) {
        const {
          ctx: Fk
        } = this._processInputParams(kk), Ik = Fk.data;
        return this._def.type._parse({
          data: Ik,
          path: Fk.path,
          parent: Fk
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class OF extends pk {
      _parse(kk) {
        const {
          status: Fk,
          ctx: Ik
        } = this._processInputParams(kk);
        if (Ik.common.async) {
          return (async () => {
            const kk = await this._def.in._parseAsync({
              data: Ik.data,
              path: Ik.path,
              parent: Ik
            });
            return "aborted" === kk.status ? Kk : "Ne" === kk.status ? (Fk.Ne(), Qk(kk.value)) : this._def.out._parseAsync({
              data: kk.value,
              path: Ik.path,
              parent: Ik
            })
          })()
        } {
          const kk = this._def.in._parseSync({
            data: Ik.data,
            path: Ik.path,
            parent: Ik
          });
          return "aborted" === kk.status ? Kk : "Ne" === kk.status ? (Fk.Ne(), {
            status: "Ne",
            value: kk.value
          }) : this._def.out._parseSync({
            data: kk.value,
            path: Ik.path,
            parent: Ik
          })
        }
      }
      static create(kk, Fk) {
        return new OF({
          in: kk,
          out: Fk,
          typeName: uF.ZodPipeline
        })
      }
    }
    class nF extends pk {
      _parse(kk) {
        const Fk = this._def.innerType._parse(kk);
        return Sk(Fk) && (Fk.value = Object.freeze(Fk.value)), Fk
      }
    }
    nF.create = (kk, Fk) => new nF({
      innerType: kk,
      typeName: uF.ZodReadonly,
      ...Gk(Fk)
    });
    const GF = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        return kk ? Dk.create().superRefine(((Xk, Tk) => {
          var ik, yk;
          if (!kk(Xk)) {
            const kk = "function" === typeof Fk ? Fk(Xk) : "string" === typeof Fk ? {
                message: Fk
              } : Fk,
              lk = null === (yk = null !== (ik = kk.fatal) && void 0 !== ik ? ik : Ik) || void 0 === yk || yk,
              ak = "string" === typeof kk ? {
                message: kk
              } : kk;
            Tk.addIssue({
              code: "custom",
              ...ak,
              fatal: lk
            })
          }
        })) : Dk.create()
      },
      pF = {
        object: TF.lazycreate
      };
    var uF;
    ! function(kk) {
      kk.ZodString = "ZodString", kk.ZodNumber = "ZodNumber", kk.ZodNaN = "ZodNaN", kk.ZodBigInt = "ZodBigInt", kk.ZodBoolean = "ZodBoolean", kk.ZodDate = "ZodDate", kk.ZodSymbol = "ZodSymbol", kk.ZodUndefined = "ZodUndefined", kk.ZodNull = "ZodNull", kk.ZodAny = "ZodAny", kk.ZodUnknown = "ZodUnknown", kk.ZodNever = "ZodNever", kk.ZodVoid = "ZodVoid", kk.ZodArray = "ZodArray", kk.ZodObject = "ZodObject", kk.ZodUnion = "ZodUnion", kk.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", kk.ZodIntersection = "ZodIntersection", kk.ZodTuple = "ZodTuple", kk.ZodRecord = "ZodRecord", kk.ZodMap = "ZodMap", kk.ZodSet = "ZodSet", kk.ZodFunction = "ZodFunction", kk.ZodLazy = "ZodLazy", kk.ZodLiteral = "ZodLiteral", kk.ZodEnum = "ZodEnum", kk.ZodEffects = "ZodEffects", kk.ZodNativeEnum = "ZodNativeEnum", kk.ZodOptional = "ZodOptional", kk.ZodNullable = "ZodNullable", kk.ZodDefault = "ZodDefault", kk.ZodCatch = "ZodCatch", kk.ZodPromise = "ZodPromise", kk.ZodBranded = "ZodBranded", kk.ZodPipeline = "ZodPipeline", kk.ZodReadonly = "ZodReadonly"
    }(uF || (uF = {}));
    const bF = fk.create,
      RF = dk.create,
      UF = oF.create,
      CF = Yk.create,
      NF = Ak.create,
      cF = gk.create,
      WF = mk.create,
      fF = hk.create,
      BF = rk.create,
      dF = Dk.create,
      YF = Mk.create,
      AF = kF.create,
      gF = FF.create,
      mF = IF.create,
      hF = TF.create,
      rF = TF.strictCreate,
      DF = iF.create,
      MF = lF.create,
      kI = qF.create,
      FI = LF.create,
      II = tF.create,
      XI = ZF.create,
      TI = jF.create,
      iI = eF.create,
      yI = wF.create,
      lI = HF.create,
      aI = xF.create,
      qI = PF.create,
      LI = KF.create,
      tI = QF.create,
      ZI = sF.create,
      jI = VF.create,
      eI = QF.createWithPreprocess,
      wI = OF.create,
      HI = {
        string: kk => fk.create({
          ...kk,
          coerce: !0
        }),
        number: kk => dk.create({
          ...kk,
          coerce: !0
        }),
        boolean: kk => Ak.create({
          ...kk,
          coerce: !0
        }),
        bigint: kk => Yk.create({
          ...kk,
          coerce: !0
        }),
        date: kk => gk.create({
          ...kk,
          coerce: !0
        })
      },
      JI = Kk;
    var xI = Object.freeze({
        __proto__: null,
        defaultErrorMap: ek,
        setErrorMap: function(kk) {
          wk = kk
        },
        getErrorMap: Hk,
        makeIssue: Jk,
        EMPTY_PATH: [],
        addIssueToContext: xk,
        ParseStatus: Pk,
        INVALID: Kk,
        DIRTY: Qk,
        OK: sk,
        isAborted: Vk,
        isDirty: zk,
        isValid: Sk,
        isAsync: vk,
        get util() {
          return lk
        },
        get objectUtil() {
          return ak
        },
        ZodParsedType: Lk,
        getParsedType: tk,
        ZodType: pk,
        ZodString: fk,
        ZodNumber: dk,
        ZodBigInt: Yk,
        ZodBoolean: Ak,
        ZodDate: gk,
        ZodSymbol: mk,
        ZodUndefined: hk,
        ZodNull: rk,
        ZodAny: Dk,
        ZodUnknown: Mk,
        ZodNever: kF,
        ZodVoid: FF,
        ZodArray: IF,
        ZodObject: TF,
        ZodUnion: iF,
        ZodDiscriminatedUnion: lF,
        ZodIntersection: qF,
        ZodTuple: LF,
        ZodRecord: tF,
        ZodMap: ZF,
        ZodSet: jF,
        ZodFunction: eF,
        ZodLazy: wF,
        ZodLiteral: HF,
        ZodEnum: xF,
        ZodNativeEnum: PF,
        ZodPromise: KF,
        ZodEffects: QF,
        ZodTransformer: QF,
        ZodOptional: sF,
        ZodNullable: VF,
        ZodDefault: zF,
        ZodCatch: SF,
        ZodNaN: oF,
        BRAND: vF,
        ZodBranded: EF,
        ZodPipeline: OF,
        ZodReadonly: nF,
        custom: GF,
        Schema: pk,
        ZodSchema: pk,
        late: pF,
        get ZodFirstPartyTypeKind() {
          return uF
        },
        coerce: HI,
        any: dF,
        array: mF,
        bigint: CF,
        boolean: NF,
        date: cF,
        discriminatedUnion: MF,
        effect: tI,
        enum: aI,
        function: iI,
        instanceof: function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${kk.name}`
          };
          return GF((Fk => Fk instanceof kk), Fk)
        },
        intersection: kI,
        lazy: yI,
        literal: lI,
        map: XI,
        nan: UF,
        nativeEnum: qI,
        never: AF,
        null: BF,
        nullable: jI,
        number: RF,
        object: hF,
        oboolean: () => NF().optional(),
        onumber: () => RF().optional(),
        optional: ZI,
        ostring: () => bF().optional(),
        pipeline: wI,
        preprocess: eI,
        promise: LI,
        record: II,
        set: TI,
        strictObject: rF,
        string: bF,
        symbol: WF,
        transformer: tI,
        tuple: FI,
        undefined: fF,
        union: DF,
        unknown: YF,
        void: gF,
        NEVER: JI,
        ZodIssueCode: Zk,
        quotelessJson: kk => JSON.stringify(kk, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: jk
      }),
      PI = {
        exports: {}
      };
    ! function(kk) {
      var Fk = function(kk) {
        var Ik = 1e7,
          Xk = 9007199254740992,
          Tk = Zk(Xk),
          ik = "0123456789abcdefghijklmnopqrstuvwxyz",
          yk = "function" === typeof BigInt;

        function lk(kk, Fk, Ik, Xk) {
          return "undefined" === typeof kk ? lk[0] : "undefined" !== typeof Fk && (10 !== +Fk || Ik) ? Ak(kk, Fk, Ik, Xk) : Dk(kk)
        }

        function ak(kk, Fk) {
          this.value = kk, this.sign = Fk, this.isSmall = !1
        }

        function qk(kk) {
          this.value = kk, this.sign = kk < 0, this.isSmall = !0
        }

        function Lk(kk) {
          this.value = kk
        }

        function tk(kk) {
          return -Xk < kk && kk < Xk
        }

        function Zk(kk) {
          return kk < 1e7 ? [kk] : kk < 1e14 ? [kk % 1e7, Math.floor(kk / 1e7)] : [kk % 1e7, Math.floor(kk / 1e7) % 1e7, Math.floor(kk / 1e14)]
        }

        function jk(kk) {
          ek(kk);
          var Fk = kk.length;
          if (Fk < 4 && Gk(kk, Tk) < 0) switch (Fk) {
            case 0:
              return 0;
            case 1:
              return kk[0];
            case 2:
              return kk[0] + kk[1] * Ik;
            default:
              return kk[0] + (kk[1] + kk[2] * Ik) * Ik
          }
          return kk
        }

        function ek(kk) {
          for (var Fk = kk.length; 0 === kk[--Fk];);
          kk.length = Fk + 1
        }

        function wk(kk) {
          for (var Fk = new Array(kk), Ik = -1; ++Ik < kk;) Fk[Ik] = 0;
          return Fk
        }

        function Hk(kk) {
          return kk > 0 ? Math.floor(kk) : Math.ceil(kk)
        }

        function Jk(kk, Fk) {
          var Xk, Tk, ik = kk.length,
            yk = Fk.length,
            lk = new Array(ik),
            ak = 0,
            qk = Ik;
          for (Tk = 0; Tk < yk; Tk++) ak = (Xk = kk[Tk] + Fk[Tk] + ak) >= qk ? 1 : 0, lk[Tk] = Xk - ak * qk;
          for (; Tk < ik;) ak = (Xk = kk[Tk] + ak) === qk ? 1 : 0, lk[Tk++] = Xk - ak * qk;
          return ak > 0 && lk.push(ak), lk
        }

        function xk(kk, Fk) {
          return kk.length >= Fk.length ? Jk(kk, Fk) : Jk(Fk, kk)
        }

        function Pk(kk, Fk) {
          var Xk, Tk, ik = kk.length,
            yk = new Array(ik),
            lk = Ik;
          for (Tk = 0; Tk < ik; Tk++) Xk = kk[Tk] - lk + Fk, Fk = Math.floor(Xk / lk), yk[Tk] = Xk - Fk * lk, Fk += 1;
          for (; Fk > 0;) yk[Tk++] = Fk % lk, Fk = Math.floor(Fk / lk);
          return yk
        }

        function Kk(kk, Fk) {
          var Xk, Tk, ik = kk.length,
            yk = Fk.length,
            lk = new Array(ik),
            ak = 0,
            qk = Ik;
          for (Xk = 0; Xk < yk; Xk++)(Tk = kk[Xk] - ak - Fk[Xk]) < 0 ? (Tk += qk, ak = 1) : ak = 0, lk[Xk] = Tk;
          for (Xk = yk; Xk < ik; Xk++) {
            if (!((Tk = kk[Xk] - ak) < 0)) {
              lk[Xk++] = Tk;
              break
            }
            Tk += qk, lk[Xk] = Tk
          }
          for (; Xk < ik; Xk++) lk[Xk] = kk[Xk];
          return ek(lk), lk
        }

        function Qk(kk, Fk, Xk) {
          var Tk, ik, yk = kk.length,
            lk = new Array(yk),
            Lk = -Fk,
            tk = Ik;
          for (Tk = 0; Tk < yk; Tk++) ik = kk[Tk] + Lk, Lk = Math.floor(ik / tk), ik %= tk, lk[Tk] = ik < 0 ? ik + tk : ik;
          return "number" === typeof(lk = jk(lk)) ? (Xk && (lk = -lk), new qk(lk)) : new ak(lk, Xk)
        }

        function sk(kk, Fk) {
          var Xk, Tk, ik, yk, lk = kk.length,
            ak = Fk.length,
            qk = wk(lk + ak),
            Lk = Ik;
          for (ik = 0; ik < lk; ++ik) {
            yk = kk[ik];
            for (var tk = 0; tk < ak; ++tk) Xk = yk * Fk[tk] + qk[ik + tk], Tk = Math.floor(Xk / Lk), qk[ik + tk] = Xk - Tk * Lk, qk[ik + tk + 1] += Tk
          }
          return ek(qk), qk
        }

        function Vk(kk, Fk) {
          var Xk, Tk, ik = kk.length,
            yk = new Array(ik),
            lk = Ik,
            ak = 0;
          for (Tk = 0; Tk < ik; Tk++) Xk = kk[Tk] * Fk + ak, ak = Math.floor(Xk / lk), yk[Tk] = Xk - ak * lk;
          for (; ak > 0;) yk[Tk++] = ak % lk, ak = Math.floor(ak / lk);
          return yk
        }

        function zk(kk, Fk) {
          for (var Ik = []; Fk-- > 0;) Ik.push(0);
          return Ik.concat(kk)
        }

        function Sk(kk, Fk) {
          var Ik = Math.max(kk.length, Fk.length);
          if (Ik <= 30) return sk(kk, Fk);
          Ik = Math.ceil(Ik / 2);
          var Xk = kk.slice(Ik),
            Tk = kk.slice(0, Ik),
            ik = Fk.slice(Ik),
            yk = Fk.slice(0, Ik),
            lk = Sk(Tk, yk),
            ak = Sk(Xk, ik),
            qk = Sk(xk(Tk, Xk), xk(yk, ik)),
            Lk = xk(xk(lk, zk(Kk(Kk(qk, lk), ak), Ik)), zk(ak, 2 * Ik));
          return ek(Lk), Lk
        }

        function vk(kk, Fk, Xk) {
          return new ak(kk < Ik ? Vk(Fk, kk) : sk(Fk, Zk(kk)), Xk)
        }

        function Ek(kk) {
          var Fk, Xk, Tk, ik, yk = kk.length,
            lk = wk(yk + yk),
            ak = Ik;
          for (Tk = 0; Tk < yk; Tk++) {
            Xk = 0 - (ik = kk[Tk]) * ik;
            for (var qk = Tk; qk < yk; qk++) Fk = ik * kk[qk] * 2 + lk[Tk + qk] + Xk, Xk = Math.floor(Fk / ak), lk[Tk + qk] = Fk - Xk * ak;
            lk[Tk + yk] = Xk
          }
          return ek(lk), lk
        }

        function Ok(kk, Fk) {
          var Xk, Tk, ik, yk, lk = kk.length,
            ak = wk(lk),
            qk = Ik;
          for (ik = 0, Xk = lk - 1; Xk >= 0; --Xk) ik = (yk = ik * qk + kk[Xk]) - (Tk = Hk(yk / Fk)) * Fk, ak[Xk] = 0 | Tk;
          return [ak, 0 | ik]
        }

        function nk(kk, Fk) {
          var Xk, Tk = Dk(Fk);
          if (yk) return [new Lk(kk.value / Tk.value), new Lk(kk.value % Tk.value)];
          var ik, tk = kk.value,
            Jk = Tk.value;
          if (0 === Jk) throw new Error("Cannot divide by zero");
          if (kk.isSmall) return Tk.isSmall ? [new qk(Hk(tk / Jk)), new qk(tk % Jk)] : [lk[0], kk];
          if (Tk.isSmall) {
            if (1 === Jk) return [kk, lk[0]];
            if (-1 == Jk) return [kk.nX(), lk[0]];
            var xk = Math.abs(Jk);
            if (xk < Ik) {
              ik = jk((Xk = Ok(tk, xk))[0]);
              var Pk = Xk[1];
              return kk.sign && (Pk = -Pk), "number" === typeof ik ? (kk.sign !== Tk.sign && (ik = -ik), [new qk(ik), new qk(Pk)]) : [new ak(ik, kk.sign !== Tk.sign), new qk(Pk)]
            }
            Jk = Zk(xk)
          }
          var Qk = Gk(tk, Jk);
          if (-1 === Qk) return [lk[0], kk];
          if (0 === Qk) return [lk[kk.sign === Tk.sign ? 1 : -1], lk[0]];
          Xk = tk.length + Jk.length <= 200 ? function(kk, Fk) {
            var Xk, Tk, ik, yk, lk, ak, qk, Lk = kk.length,
              tk = Fk.length,
              Zk = Ik,
              ek = wk(Fk.length),
              Hk = Fk[tk - 1],
              Jk = Math.ceil(Zk / (2 * Hk)),
              xk = Vk(kk, Jk),
              Pk = Vk(Fk, Jk);
            for (xk.length <= Lk && xk.push(0), Pk.push(0), Hk = Pk[tk - 1], Tk = Lk - tk; Tk >= 0; Tk--) {
              for (Xk = Zk - 1, xk[Tk + tk] !== Hk && (Xk = Math.floor((xk[Tk + tk] * Zk + xk[Tk + tk - 1]) / Hk)), ik = 0, yk = 0, ak = Pk.length, lk = 0; lk < ak; lk++) ik += Xk * Pk[lk], qk = Math.floor(ik / Zk), yk += xk[Tk + lk] - (ik - qk * Zk), ik = qk, yk < 0 ? (xk[Tk + lk] = yk + Zk, yk = -1) : (xk[Tk + lk] = yk, yk = 0);
              for (; 0 !== yk;) {
                for (Xk -= 1, ik = 0, lk = 0; lk < ak; lk++)(ik += xk[Tk + lk] - Zk + Pk[lk]) < 0 ? (xk[Tk + lk] = ik + Zk, ik = 0) : (xk[Tk + lk] = ik, ik = 1);
                yk += ik
              }
              ek[Tk] = Xk
            }
            return xk = Ok(xk, Jk)[0], [jk(ek), jk(xk)]
          }(tk, Jk) : function(kk, Fk) {
            for (var Xk, Tk, ik, yk, lk, ak = kk.length, qk = Fk.length, Lk = [], tk = [], Zk = Ik; ak;)
              if (tk.unshift(kk[--ak]), ek(tk), Gk(tk, Fk) < 0) Lk.push(0);
              else {
                ik = tk[(Tk = tk.length) - 1] * Zk + tk[Tk - 2], yk = Fk[qk - 1] * Zk + Fk[qk - 2], Tk > qk && (ik = (ik + 1) * Zk), Xk = Math.ceil(ik / yk);
                do {
                  if (Gk(lk = Vk(Fk, Xk), tk) <= 0) break;
                  Xk--
                } while (Xk);
                Lk.push(Xk), tk = Kk(tk, lk)
              } return Lk.reverse(), [jk(Lk), jk(tk)]
          }(tk, Jk), ik = Xk[0];
          var sk = kk.sign !== Tk.sign,
            zk = Xk[1],
            Sk = kk.sign;
          return "number" === typeof ik ? (sk && (ik = -ik), ik = new qk(ik)) : ik = new ak(ik, sk), "number" === typeof zk ? (Sk && (zk = -zk), zk = new qk(zk)) : zk = new ak(zk, Sk), [ik, zk]
        }

        function Gk(kk, Fk) {
          if (kk.length !== Fk.length) return kk.length > Fk.length ? 1 : -1;
          for (var Ik = kk.length - 1; Ik >= 0; Ik--)
            if (kk[Ik] !== Fk[Ik]) return kk[Ik] > Fk[Ik] ? 1 : -1;
          return 0
        }

        function pk(kk) {
          var Fk = kk.abs();
          return !Fk.isUnit() && (!!(Fk.equals(2) || Fk.equals(3) || Fk.equals(5)) || !(Fk.isEven() || Fk.isDivisibleBy(3) || Fk.isDivisibleBy(5)) && (!!Fk.lesser(49) || void 0))
        }

        function uk(kk, Ik) {
          for (var Xk, Tk, ik, yk = kk.prev(), lk = yk, ak = 0; lk.isEven();) lk = lk.divide(2), ak++;
          kk: for (Tk = 0; Tk < Ik.length; Tk++)
            if (!kk.lesser(Ik[Tk]) && !(ik = Fk(Ik[Tk]).modPow(lk, kk)).isUnit() && !ik.equals(yk)) {
              for (Xk = ak - 1; 0 != Xk; Xk--) {
                if ((ik = ik.square().mod(kk)).isUnit()) return !1;
                if (ik.equals(yk)) continue kk
              }
              return !1
            }
          return !0
        }
        ak.prototype = Object.create(lk.prototype), qk.prototype = Object.create(lk.prototype), Lk.prototype = Object.create(lk.prototype), ak.prototype.add = function(kk) {
          var Fk = Dk(kk);
          if (this.sign !== Fk.sign) return this.subtract(Fk.nX());
          var Ik = this.value,
            Xk = Fk.value;
          return Fk.isSmall ? new ak(Pk(Ik, Math.abs(Xk)), this.sign) : new ak(xk(Ik, Xk), this.sign)
        }, ak.prototype.plus = ak.prototype.add, qk.prototype.add = function(kk) {
          var Fk = Dk(kk),
            Ik = this.value;
          if (Ik < 0 !== Fk.sign) return this.subtract(Fk.nX());
          var Xk = Fk.value;
          if (Fk.isSmall) {
            if (tk(Ik + Xk)) return new qk(Ik + Xk);
            Xk = Zk(Math.abs(Xk))
          }
          return new ak(Pk(Xk, Math.abs(Ik)), Ik < 0)
        }, qk.prototype.plus = qk.prototype.add, Lk.prototype.add = function(kk) {
          return new Lk(this.value + Dk(kk).value)
        }, Lk.prototype.plus = Lk.prototype.add, ak.prototype.subtract = function(kk) {
          var Fk = Dk(kk);
          if (this.sign !== Fk.sign) return this.add(Fk.nX());
          var Ik = this.value,
            Xk = Fk.value;
          return Fk.isSmall ? Qk(Ik, Math.abs(Xk), this.sign) : function(kk, Fk, Ik) {
            var Xk;
            return Gk(kk, Fk) >= 0 ? Xk = Kk(kk, Fk) : (Xk = Kk(Fk, kk), Ik = !Ik), "number" === typeof(Xk = jk(Xk)) ? (Ik && (Xk = -Xk), new qk(Xk)) : new ak(Xk, Ik)
          }(Ik, Xk, this.sign)
        }, ak.prototype.minus = ak.prototype.subtract, qk.prototype.subtract = function(kk) {
          var Fk = Dk(kk),
            Ik = this.value;
          if (Ik < 0 !== Fk.sign) return this.add(Fk.nX());
          var Xk = Fk.value;
          return Fk.isSmall ? new qk(Ik - Xk) : Qk(Xk, Math.abs(Ik), Ik >= 0)
        }, qk.prototype.minus = qk.prototype.subtract, Lk.prototype.subtract = function(kk) {
          return new Lk(this.value - Dk(kk).value)
        }, Lk.prototype.minus = Lk.prototype.subtract, ak.prototype.nX = function() {
          return new ak(this.value, !this.sign)
        }, qk.prototype.nX = function() {
          var kk = this.sign,
            Fk = new qk(-this.value);
          return Fk.sign = !kk, Fk
        }, Lk.prototype.nX = function() {
          return new Lk(-this.value)
        }, ak.prototype.abs = function() {
          return new ak(this.value, !1)
        }, qk.prototype.abs = function() {
          return new qk(Math.abs(this.value))
        }, Lk.prototype.abs = function() {
          return new Lk(this.value >= 0 ? this.value : -this.value)
        }, ak.prototype.multiply = function(kk) {
          var Fk, Xk, Tk, ik = Dk(kk),
            yk = this.value,
            qk = ik.value,
            Lk = this.sign !== ik.sign;
          if (ik.isSmall) {
            if (0 === qk) return lk[0];
            if (1 === qk) return this;
            if (-1 === qk) return this.nX();
            if ((Fk = Math.abs(qk)) < Ik) return new ak(Vk(yk, Fk), Lk);
            qk = Zk(Fk)
          }
          return Xk = yk.length, Tk = qk.length, new ak(-.012 * Xk - .012 * Tk + 15e-6 * Xk * Tk > 0 ? Sk(yk, qk) : sk(yk, qk), Lk)
        }, ak.prototype.times = ak.prototype.multiply, qk.prototype._multiplyBySmall = function(kk) {
          return tk(kk.value * this.value) ? new qk(kk.value * this.value) : vk(Math.abs(kk.value), Zk(Math.abs(this.value)), this.sign !== kk.sign)
        }, ak.prototype._multiplyBySmall = function(kk) {
          return 0 === kk.value ? lk[0] : 1 === kk.value ? this : -1 === kk.value ? this.nX() : vk(Math.abs(kk.value), this.value, this.sign !== kk.sign)
        }, qk.prototype.multiply = function(kk) {
          return Dk(kk)._multiplyBySmall(this)
        }, qk.prototype.times = qk.prototype.multiply, Lk.prototype.multiply = function(kk) {
          return new Lk(this.value * Dk(kk).value)
        }, Lk.prototype.times = Lk.prototype.multiply, ak.prototype.square = function() {
          return new ak(Ek(this.value), !1)
        }, qk.prototype.square = function() {
          var kk = this.value * this.value;
          return tk(kk) ? new qk(kk) : new ak(Ek(Zk(Math.abs(this.value))), !1)
        }, Lk.prototype.square = function(kk) {
          return new Lk(this.value * this.value)
        }, ak.prototype.divmod = function(kk) {
          var Fk = nk(this, kk);
          return {
            quotient: Fk[0],
            remainder: Fk[1]
          }
        }, Lk.prototype.divmod = qk.prototype.divmod = ak.prototype.divmod, ak.prototype.divide = function(kk) {
          return nk(this, kk)[0]
        }, Lk.prototype.over = Lk.prototype.divide = function(kk) {
          return new Lk(this.value / Dk(kk).value)
        }, qk.prototype.over = qk.prototype.divide = ak.prototype.over = ak.prototype.divide, ak.prototype.mod = function(kk) {
          return nk(this, kk)[1]
        }, Lk.prototype.mod = Lk.prototype.remainder = function(kk) {
          return new Lk(this.value % Dk(kk).value)
        }, qk.prototype.remainder = qk.prototype.mod = ak.prototype.remainder = ak.prototype.mod, ak.prototype.pow = function(kk) {
          var Fk, Ik, Xk, Tk = Dk(kk),
            ik = this.value,
            yk = Tk.value;
          if (0 === yk) return lk[1];
          if (0 === ik) return lk[0];
          if (1 === ik) return lk[1];
          if (-1 === ik) return Tk.isEven() ? lk[1] : lk[-1];
          if (Tk.sign) return lk[0];
          if (!Tk.isSmall) throw new Error("The exponent " + Tk.toString() + " is too large.");
          if (this.isSmall && tk(Fk = Math.pow(ik, yk))) return new qk(Hk(Fk));
          for (Ik = this, Xk = lk[1]; !0 & yk && (Xk = Xk.times(Ik), --yk), 0 !== yk;) yk /= 2, Ik = Ik.square();
          return Xk
        }, qk.prototype.pow = ak.prototype.pow, Lk.prototype.pow = function(kk) {
          var Fk = Dk(kk),
            Ik = this.value,
            Xk = Fk.value,
            Tk = BigInt(0),
            ik = BigInt(1),
            yk = BigInt(2);
          if (Xk === Tk) return lk[1];
          if (Ik === Tk) return lk[0];
          if (Ik === ik) return lk[1];
          if (Ik === BigInt(-1)) return Fk.isEven() ? lk[1] : lk[-1];
          if (Fk.isNegative()) return new Lk(Tk);
          for (var ak = this, qk = lk[1];
            (Xk & ik) === ik && (qk = qk.times(ak), --Xk), Xk !== Tk;) Xk /= yk, ak = ak.square();
          return qk
        }, ak.prototype.modPow = function(kk, Fk) {
          if (kk = Dk(kk), (Fk = Dk(Fk)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Ik = lk[1],
            Xk = this.mod(Fk);
          for (kk.isNegative() && (kk = kk.multiply(lk[-1]), Xk = Xk.modInv(Fk)); kk.isPositive();) {
            if (Xk.isZero()) return lk[0];
            kk.isOdd() && (Ik = Ik.multiply(Xk).mod(Fk)), kk = kk.divide(2), Xk = Xk.square().mod(Fk)
          }
          return Ik
        }, Lk.prototype.modPow = qk.prototype.modPow = ak.prototype.modPow, ak.prototype.compareAbs = function(kk) {
          var Fk = Dk(kk),
            Ik = this.value,
            Xk = Fk.value;
          return Fk.isSmall ? 1 : Gk(Ik, Xk)
        }, qk.prototype.compareAbs = function(kk) {
          var Fk = Dk(kk),
            Ik = Math.abs(this.value),
            Xk = Fk.value;
          return Fk.isSmall ? Ik === (Xk = Math.abs(Xk)) ? 0 : Ik > Xk ? 1 : -1 : -1
        }, Lk.prototype.compareAbs = function(kk) {
          var Fk = this.value,
            Ik = Dk(kk).value;
          return (Fk = Fk >= 0 ? Fk : -Fk) === (Ik = Ik >= 0 ? Ik : -Ik) ? 0 : Fk > Ik ? 1 : -1
        }, ak.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var Fk = Dk(kk),
            Ik = this.value,
            Xk = Fk.value;
          return this.sign !== Fk.sign ? Fk.sign ? 1 : -1 : Fk.isSmall ? this.sign ? -1 : 1 : Gk(Ik, Xk) * (this.sign ? -1 : 1)
        }, ak.prototype.compareTo = ak.prototype.compare, qk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var Fk = Dk(kk),
            Ik = this.value,
            Xk = Fk.value;
          return Fk.isSmall ? Ik == Xk ? 0 : Ik > Xk ? 1 : -1 : Ik < 0 !== Fk.sign ? Ik < 0 ? -1 : 1 : Ik < 0 ? 1 : -1
        }, qk.prototype.compareTo = qk.prototype.compare, Lk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var Fk = this.value,
            Ik = Dk(kk).value;
          return Fk === Ik ? 0 : Fk > Ik ? 1 : -1
        }, Lk.prototype.compareTo = Lk.prototype.compare, ak.prototype.equals = function(kk) {
          return 0 === this.compare(kk)
        }, Lk.prototype.eq = Lk.prototype.equals = qk.prototype.eq = qk.prototype.equals = ak.prototype.eq = ak.prototype.equals, ak.prototype.notEquals = function(kk) {
          return 0 !== this.compare(kk)
        }, Lk.prototype.neq = Lk.prototype.notEquals = qk.prototype.neq = qk.prototype.notEquals = ak.prototype.neq = ak.prototype.notEquals, ak.prototype.greater = function(kk) {
          return this.compare(kk) > 0
        }, Lk.prototype.gt = Lk.prototype.greater = qk.prototype.gt = qk.prototype.greater = ak.prototype.gt = ak.prototype.greater, ak.prototype.lesser = function(kk) {
          return this.compare(kk) < 0
        }, Lk.prototype.lt = Lk.prototype.lesser = qk.prototype.lt = qk.prototype.lesser = ak.prototype.lt = ak.prototype.lesser, ak.prototype.greaterOrEquals = function(kk) {
          return this.compare(kk) >= 0
        }, Lk.prototype.geq = Lk.prototype.greaterOrEquals = qk.prototype.geq = qk.prototype.greaterOrEquals = ak.prototype.geq = ak.prototype.greaterOrEquals, ak.prototype.lesserOrEquals = function(kk) {
          return this.compare(kk) <= 0
        }, Lk.prototype.leq = Lk.prototype.lesserOrEquals = qk.prototype.leq = qk.prototype.lesserOrEquals = ak.prototype.leq = ak.prototype.lesserOrEquals, ak.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, qk.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Lk.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, ak.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, qk.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Lk.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, ak.prototype.isPositive = function() {
          return !this.sign
        }, qk.prototype.isPositive = function() {
          return this.value > 0
        }, Lk.prototype.isPositive = qk.prototype.isPositive, ak.prototype.isNegative = function() {
          return this.sign
        }, qk.prototype.isNegative = function() {
          return this.value < 0
        }, Lk.prototype.isNegative = qk.prototype.isNegative, ak.prototype.isUnit = function() {
          return !1
        }, qk.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Lk.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, ak.prototype.isZero = function() {
          return !1
        }, qk.prototype.isZero = function() {
          return 0 === this.value
        }, Lk.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, ak.prototype.isDivisibleBy = function(kk) {
          var Fk = Dk(kk);
          return !Fk.isZero() && (!!Fk.isUnit() || (0 === Fk.compareAbs(2) ? this.isEven() : this.mod(Fk).isZero()))
        }, Lk.prototype.isDivisibleBy = qk.prototype.isDivisibleBy = ak.prototype.isDivisibleBy, ak.prototype.isPrime = function(Ik) {
          var Xk = pk(this);
          if (Xk !== kk) return Xk;
          var Tk = this.abs(),
            ik = Tk.bitLength();
          if (ik <= 64) return uk(Tk, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var yk = Math.log(2) * ik.toJSNumber(), lk = Math.ceil(!0 === Ik ? 2 * Math.pow(yk, 2) : yk), ak = [], qk = 0; qk < lk; qk++) ak.push(Fk(qk + 2));
          return uk(Tk, ak)
        }, Lk.prototype.isPrime = qk.prototype.isPrime = ak.prototype.isPrime, ak.prototype.isProbablePrime = function(Ik, Xk) {
          var Tk = pk(this);
          if (Tk !== kk) return Tk;
          for (var ik = this.abs(), yk = Ik === kk ? 5 : Ik, lk = [], ak = 0; ak < yk; ak++) lk.push(Fk.randBetween(2, ik.minus(2), Xk));
          return uk(ik, lk)
        }, Lk.prototype.isProbablePrime = qk.prototype.isProbablePrime = ak.prototype.isProbablePrime, ak.prototype.modInv = function(kk) {
          for (var Ik, Xk, Tk, ik = Fk.zero, yk = Fk.one, lk = Dk(kk), ak = this.abs(); !ak.isZero();) Ik = lk.divide(ak), Xk = ik, Tk = lk, ik = yk, lk = ak, yk = Xk.subtract(Ik.multiply(yk)), ak = Tk.subtract(Ik.multiply(ak));
          if (!lk.isUnit()) throw new Error(this.toString() + " and " + kk.toString() + " are not co-prime");
          return -1 === ik.compare(0) && (ik = ik.add(kk)), this.isNegative() ? ik.nX() : ik
        }, Lk.prototype.modInv = qk.prototype.modInv = ak.prototype.modInv, ak.prototype.next = function() {
          var kk = this.value;
          return this.sign ? Qk(kk, 1, this.sign) : new ak(Pk(kk, 1), this.sign)
        }, qk.prototype.next = function() {
          var kk = this.value;
          return kk + 1 < Xk ? new qk(kk + 1) : new ak(Tk, !1)
        }, Lk.prototype.next = function() {
          return new Lk(this.value + BigInt(1))
        }, ak.prototype.prev = function() {
          var kk = this.value;
          return this.sign ? new ak(Pk(kk, 1), !0) : Qk(kk, 1, this.sign)
        }, qk.prototype.prev = function() {
          var kk = this.value;
          return kk - 1 > -Xk ? new qk(kk - 1) : new ak(Tk, !0)
        }, Lk.prototype.prev = function() {
          return new Lk(this.value - BigInt(1))
        };
        for (var bk = [1]; 2 * bk[bk.length - 1] <= Ik;) bk.push(2 * bk[bk.length - 1]);
        var Rk = bk.length,
          Uk = bk[Rk - 1];

        function Ck(kk) {
          return Math.abs(kk) <= Ik
        }

        function Nk(kk, Ik, Xk) {
          Ik = Dk(Ik);
          for (var Tk = kk.isNegative(), ik = Ik.isNegative(), yk = Tk ? kk.not() : kk, lk = ik ? Ik.not() : Ik, ak = 0, qk = 0, Lk = null, tk = null, Zk = []; !yk.isZero() || !lk.isZero();) ak = (Lk = nk(yk, Uk))[1].toJSNumber(), Tk && (ak = Uk - 1 - ak), qk = (tk = nk(lk, Uk))[1].toJSNumber(), ik && (qk = Uk - 1 - qk), yk = Lk[0], lk = tk[0], Zk.push(Xk(ak, qk));
          for (var jk = 0 !== Xk(Tk ? 1 : 0, ik ? 1 : 0) ? Fk(-1) : Fk(0), ek = Zk.length - 1; ek >= 0; ek -= 1) jk = jk.multiply(Uk).add(Fk(Zk[ek]));
          return jk
        }
        ak.prototype.shiftLeft = function(kk) {
          var Fk = Dk(kk).toJSNumber();
          if (!Ck(Fk)) throw new Error(String(Fk) + " is too large for shifting.");
          if (Fk < 0) return this.shiftRight(-Fk);
          var Ik = this;
          if (Ik.isZero()) return Ik;
          for (; Fk >= Rk;) Ik = Ik.multiply(Uk), Fk -= Rk - 1;
          return Ik.multiply(bk[Fk])
        }, Lk.prototype.shiftLeft = qk.prototype.shiftLeft = ak.prototype.shiftLeft, ak.prototype.shiftRight = function(kk) {
          var Fk, Ik = Dk(kk).toJSNumber();
          if (!Ck(Ik)) throw new Error(String(Ik) + " is too large for shifting.");
          if (Ik < 0) return this.shiftLeft(-Ik);
          for (var Xk = this; Ik >= Rk;) {
            if (Xk.isZero() || Xk.isNegative() && Xk.isUnit()) return Xk;
            Xk = (Fk = nk(Xk, Uk))[1].isNegative() ? Fk[0].prev() : Fk[0], Ik -= Rk - 1
          }
          return (Fk = nk(Xk, bk[Ik]))[1].isNegative() ? Fk[0].prev() : Fk[0]
        }, Lk.prototype.shiftRight = qk.prototype.shiftRight = ak.prototype.shiftRight, ak.prototype.not = function() {
          return this.nX().prev()
        }, Lk.prototype.not = qk.prototype.not = ak.prototype.not, ak.prototype.and = function(kk) {
          return Nk(this, kk, (function(kk, Fk) {
            return kk & Fk
          }))
        }, Lk.prototype.and = qk.prototype.and = ak.prototype.and, ak.prototype.or = function(kk) {
          return Nk(this, kk, (function(kk, Fk) {
            return kk | Fk
          }))
        }, Lk.prototype.or = qk.prototype.or = ak.prototype.or, ak.prototype.xor = function(kk) {
          return Nk(this, kk, (function(kk, Fk) {
            return kk ^ Fk
          }))
        }, Lk.prototype.xor = qk.prototype.xor = ak.prototype.xor;
        var ck = 1 << 30;

        function Wk(kk) {
          var Fk = kk.value,
            Xk = "number" === typeof Fk ? Fk | ck : "bigint" === typeof Fk ? Fk | BigInt(ck) : Fk[0] + Fk[1] * Ik | 1073758208;
          return Xk & -Xk
        }

        function fk(kk, Ik) {
          if (Ik.compareTo(kk) <= 0) {
            var Xk = fk(kk, Ik.square(Ik)),
              Tk = Xk.p,
              ik = Xk.e,
              yk = Tk.multiply(Ik);
            return yk.compareTo(kk) <= 0 ? {
              p: yk,
              e: 2 * ik + 1
            } : {
              p: Tk,
              e: 2 * ik
            }
          }
          return {
            p: Fk(1),
            e: 0
          }
        }

        function Bk(kk, Fk) {
          return kk = Dk(kk), Fk = Dk(Fk), kk.greater(Fk) ? kk : Fk
        }

        function dk(kk, Fk) {
          return kk = Dk(kk), Fk = Dk(Fk), kk.lesser(Fk) ? kk : Fk
        }

        function Yk(kk, Fk) {
          if (kk = Dk(kk).abs(), Fk = Dk(Fk).abs(), kk.equals(Fk)) return kk;
          if (kk.isZero()) return Fk;
          if (Fk.isZero()) return kk;
          for (var Ik, Xk, Tk = lk[1]; kk.isEven() && Fk.isEven();) Ik = dk(Wk(kk), Wk(Fk)), kk = kk.divide(Ik), Fk = Fk.divide(Ik), Tk = Tk.multiply(Ik);
          for (; kk.isEven();) kk = kk.divide(Wk(kk));
          do {
            for (; Fk.isEven();) Fk = Fk.divide(Wk(Fk));
            kk.greater(Fk) && (Xk = Fk, Fk = kk, kk = Xk), Fk = Fk.subtract(kk)
          } while (!Fk.isZero());
          return Tk.isUnit() ? kk : kk.multiply(Tk)
        }
        ak.prototype.bitLength = function() {
          var kk = this;
          return kk.compareTo(Fk(0)) < 0 && (kk = kk.nX().subtract(Fk(1))), 0 === kk.compareTo(Fk(0)) ? Fk(0) : Fk(fk(kk, Fk(2)).e).add(Fk(1))
        }, Lk.prototype.bitLength = qk.prototype.bitLength = ak.prototype.bitLength;
        var Ak = function(kk, Fk, Ik, Xk) {
          Ik = Ik || ik, kk = String(kk), Xk || (kk = kk.toLowerCase(), Ik = Ik.toLowerCase());
          var Tk, yk = kk.length,
            lk = Math.abs(Fk),
            ak = {};
          for (Tk = 0; Tk < Ik.length; Tk++) ak[Ik[Tk]] = Tk;
          for (Tk = 0; Tk < yk; Tk++) {
            if ("-" !== (tk = kk[Tk]) && (tk in ak && ak[tk] >= lk)) {
              if ("1" === tk && 1 === lk) continue;
              throw new Error(tk + " is not a valid digit in base " + Fk + ".")
            }
          }
          Fk = Dk(Fk);
          var qk = [],
            Lk = "-" === kk[0];
          for (Tk = Lk ? 1 : 0; Tk < kk.length; Tk++) {
            var tk;
            if ((tk = kk[Tk]) in ak) qk.push(Dk(ak[tk]));
            else {
              if ("<" !== tk) throw new Error(tk + " is not a valid character");
              var Zk = Tk;
              do {
                Tk++
              } while (">" !== kk[Tk] && Tk < kk.length);
              qk.push(Dk(kk.slice(Zk + 1, Tk)))
            }
          }
          return gk(qk, Fk, Lk)
        };

        function gk(kk, Fk, Ik) {
          var Xk, Tk = lk[0],
            ik = lk[1];
          for (Xk = kk.length - 1; Xk >= 0; Xk--) Tk = Tk.add(kk[Xk].times(ik)), ik = ik.times(Fk);
          return Ik ? Tk.nX() : Tk
        }

        function mk(kk, Ik) {
          if ((Ik = Fk(Ik)).isZero()) {
            if (kk.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Ik.equals(-1)) {
            if (kk.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (kk.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-kk.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Xk = Array.apply(null, Array(kk.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Xk.unshift([1]), {
              value: [].concat.apply([], Xk),
              isNegative: !1
            }
          }
          var Tk = !1;
          if (kk.isNegative() && Ik.isPositive() && (Tk = !0, kk = kk.abs()), Ik.isUnit()) return kk.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(kk.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Tk
          };
          for (var ik, yk = [], lk = kk; lk.isNegative() || lk.compareAbs(Ik) >= 0;) {
            ik = lk.divmod(Ik), lk = ik.quotient;
            var ak = ik.remainder;
            ak.isNegative() && (ak = Ik.minus(ak).abs(), lk = lk.next()), yk.push(ak.toJSNumber())
          }
          return yk.push(lk.toJSNumber()), {
            value: yk.reverse(),
            isNegative: Tk
          }
        }

        function hk(kk, Fk, Ik) {
          var Xk = mk(kk, Fk);
          return (Xk.isNegative ? "-" : "") + Xk.value.map((function(kk) {
            return function(kk, Fk) {
              return kk < (Fk = Fk || ik).length ? Fk[kk] : "<" + kk + ">"
            }(kk, Ik)
          })).join("")
        }

        function rk(kk) {
          if (tk(+kk)) {
            var Fk = +kk;
            if (Fk === Hk(Fk)) return yk ? new Lk(BigInt(Fk)) : new qk(Fk);
            throw new Error("Invalid integer: " + kk)
          }
          var Ik = "-" === kk[0];
          Ik && (kk = kk.slice(1));
          var Xk = kk.split(/e/i);
          if (Xk.length > 2) throw new Error("Invalid integer: " + Xk.join("e"));
          if (2 === Xk.length) {
            var Tk = Xk[1];
            if ("+" === Tk[0] && (Tk = Tk.slice(1)), (Tk = +Tk) !== Hk(Tk) || !tk(Tk)) throw new Error("Invalid integer: " + Tk + " is not a valid exponent.");
            var ik = Xk[0],
              lk = ik.indexOf(".");
            if (lk >= 0 && (Tk -= ik.length - lk - 1, ik = ik.slice(0, lk) + ik.slice(lk + 1)), Tk < 0) throw new Error("Cannot include negative exponent part for integers");
            kk = ik += new Array(Tk + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(kk)) throw new Error("Invalid integer: " + kk);
          if (yk) return new Lk(BigInt(Ik ? "-" + kk : kk));
          for (var Zk = [], jk = kk.length, wk = jk - 7; jk > 0;) Zk.push(+kk.slice(wk, jk)), (wk -= 7) < 0 && (wk = 0), jk -= 7;
          return ek(Zk), new ak(Zk, Ik)
        }

        function Dk(kk) {
          return "number" === typeof kk ? function(kk) {
            if (yk) return new Lk(BigInt(kk));
            if (tk(kk)) {
              if (kk !== Hk(kk)) throw new Error(kk + " is not an integer.");
              return new qk(kk)
            }
            return rk(kk.toString())
          }(kk) : "string" === typeof kk ? rk(kk) : "bigint" === typeof kk ? new Lk(kk) : kk
        }
        ak.prototype.toArray = function(kk) {
          return mk(this, kk)
        }, qk.prototype.toArray = function(kk) {
          return mk(this, kk)
        }, Lk.prototype.toArray = function(kk) {
          return mk(this, kk)
        }, ak.prototype.toString = function(Fk, Ik) {
          if (Fk === kk && (Fk = 10), 10 !== Fk) return hk(this, Fk, Ik);
          for (var Xk, Tk = this.value, ik = Tk.length, yk = String(Tk[--ik]); --ik >= 0;) Xk = String(Tk[ik]), yk += "0000000".slice(Xk.length) + Xk;
          return (this.sign ? "-" : "") + yk
        }, qk.prototype.toString = function(Fk, Ik) {
          return Fk === kk && (Fk = 10), 10 != Fk ? hk(this, Fk, Ik) : String(this.value)
        }, Lk.prototype.toString = qk.prototype.toString, Lk.prototype.toJSON = ak.prototype.toJSON = qk.prototype.toJSON = function() {
          return this.toString()
        }, ak.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, ak.prototype.toJSNumber = ak.prototype.valueOf, qk.prototype.valueOf = function() {
          return this.value
        }, qk.prototype.toJSNumber = qk.prototype.valueOf, Lk.prototype.valueOf = Lk.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Mk = 0; Mk < 1e3; Mk++) lk[Mk] = Dk(Mk), Mk > 0 && (lk[-Mk] = Dk(-Mk));
        return lk.one = lk[1], lk.zero = lk[0], lk.minusOne = lk[-1], lk.max = Bk, lk.min = dk, lk.gcd = Yk, lk.lcm = function(kk, Fk) {
          return kk = Dk(kk).abs(), Fk = Dk(Fk).abs(), kk.divide(Yk(kk, Fk)).multiply(Fk)
        }, lk.isInstance = function(kk) {
          return kk instanceof ak || kk instanceof qk || kk instanceof Lk
        }, lk.randBetween = function(kk, Fk, Xk) {
          kk = Dk(kk), Fk = Dk(Fk);
          var Tk = Xk || Math.random,
            ik = dk(kk, Fk),
            yk = Bk(kk, Fk).subtract(ik).add(1);
          if (yk.isSmall) return ik.add(Math.floor(Tk() * yk));
          for (var ak = mk(yk, Ik).value, qk = [], Lk = !0, tk = 0; tk < ak.length; tk++) {
            var Zk = Lk ? ak[tk] : Ik,
              jk = Hk(Tk() * Zk);
            qk.push(jk), jk < Zk && (Lk = !1)
          }
          return ik.add(lk.hFk(qk, Ik, !1))
        }, lk.hFk = function(kk, Fk, Ik) {
          return gk(kk.map(Dk), Dk(Fk || 10), Ik)
        }, lk
      }();
      kk.hasOwnProperty("exports") && (kk.exports = Fk)
    }(PI);
    var KI = ik(PI.exports);

    function QI(kk, Fk, Ik) {
      let Xk = 0;
      for (let Tk = 0; Tk < Ik; Tk++) {
        const Ik = kk[Fk + Tk];
        if (void 0 === Ik) break;
        Xk += Ik * 16 ** Tk
      }
      return Xk
    }

    function sI(kk) {
      const Fk = [];
      for (let Ik = 0; Ik < kk.length; Ik++) {
        let Xk = Number(kk[Ik]);
        for (let kk = 0; Xk || kk < Fk.length; kk++) Xk += 10 * (Fk[kk] || 0), Fk[kk] = Xk % 16, Xk = (Xk - Fk[kk]) / 16
      }
      return Fk
    }
    class VI {
      static fromString(kk) {
        return new VI(function(kk) {
          const Fk = sI(kk),
            Ik = Array(4);
          for (let Xk = 0; Xk < 4; Xk++) Ik[3 - Xk] = QI(Fk, 4 * Xk, 4);
          return Ik
        }(kk), kk)
      }
      static fromBit(kk) {
        const Fk = Array(4),
          Ik = Math.floor(kk / 16);
        for (let Xk = 0; Xk < 4; Xk++) Fk[3 - Xk] = Xk === Ik ? 1 << kk - 16 * Ik : 0;
        return new VI(Fk)
      }
      constructor(kk, Fk) {
        this.parts = kk, this.str = Fk
      }
      and(kk) {
        let {
          parts: Fk
        } = kk;
        return new VI(this.parts.map(((kk, Ik) => kk & Fk[Ik])))
      }
      or(kk) {
        let {
          parts: Fk
        } = kk;
        return new VI(this.parts.map(((kk, Ik) => kk | Fk[Ik])))
      }
      xor(kk) {
        let {
          parts: Fk
        } = kk;
        return new VI(this.parts.map(((kk, Ik) => kk ^ Fk[Ik])))
      }
      not() {
        return new VI(this.parts.map((kk => ~kk)))
      }
      equals(kk) {
        let {
          parts: Fk
        } = kk;
        return this.parts.every(((kk, Ik) => kk === Fk[Ik]))
      }
      toString() {
        if (null != this.str) return this.str;
        const kk = new Array(16);
        return this.parts.forEach(((Fk, Ik) => {
          const Xk = sI(Fk.toString());
          for (let Tk = 0; Tk < 4; Tk++) kk[Tk + 4 * Ik] = Xk[3 - Tk] || 0
        })), this.str = KI.hFk(kk, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const zI = function() {
      try {
        return BigInt, !0
      } catch (kk) {
        return !1
      }
    }();
    zI && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const SI = {},
      oI = zI ? function(kk) {
        return BigInt(kk)
      } : function(kk) {
        return kk instanceof VI ? kk : ("number" === typeof kk && (kk = kk.toString()), null != SI[kk] || (SI[kk] = VI.fromString(kk)), SI[kk])
      },
      vI = oI(0),
      EI = zI ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vI)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vI;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI).and(kk)
      },
      OI = zI ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vI)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vI;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI).or(kk)
      },
      nI = zI ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vI)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vI;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI).xor(kk)
      },
      GI = zI ? function(kk, Fk) {
        return kk === Fk
      } : function(kk, Fk) {
        return null == kk || null == Fk ? kk == Fk : kk.equals(Fk)
      };
    var pI, uI, bI, RI, UI = {
      combine: function() {
        let kk = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Fk = 1; Fk < arguments.length; Fk++) kk = OI(kk, Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk]);
        return kk
      },
      add: function(kk, Fk) {
        return Fk === vI ? kk : OI(kk, Fk)
      },
      remove: function(kk, Fk) {
        return Fk === vI ? kk : nI(kk, EI(kk, Fk))
      },
      filter: EI,
      invert: zI ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vI).not()
      },
      has: function(kk, Fk) {
        return GI(EI(kk, Fk), Fk)
      },
      hasAny: function(kk, Fk) {
        return !GI(EI(kk, Fk), vI)
      },
      equals: GI,
      deserialize: oI,
      getFlag: zI ? function(kk) {
        return BigInt(1) << BigInt(kk)
      } : function(kk) {
        return VI.fromBit(kk)
      }
    };
    ! function(kk) {
      kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITED = 4002] = "RATELIMITED", kk[kk.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", kk[kk.INVALID_VERSION = 4004] = "INVALID_VERSION", kk[kk.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(pI || (pI = {})),
    function(kk) {
      kk[kk.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", kk[kk.INVALID_COMMAND = 4002] = "INVALID_COMMAND", kk[kk.INVALID_EVENT = 4004] = "INVALID_EVENT", kk[kk.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(uI || (uI = {})),
    function(kk) {
      kk.LANDSCAPE = "landscape", kk.PORTRAIT = "portrait"
    }(bI || (bI = {})),
    function(kk) {
      kk.MOBILE = "mobile", kk.DESKTOP = "desktop"
    }(RI || (RI = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: UI.getFlag(0),
      ADMINISTRATOR: UI.getFlag(3)
    });

    function CI(kk) {
      return eI((Fk => {
        var Ik;
        const [Xk] = null !== (Ik = Object.entries(kk).find((kk => {
          let [, Ik] = kk;
          return Ik === Fk
        }))) && void 0 !== Ik ? Ik : [];
        return null != Fk && void 0 === Xk ? kk.UNHANDLED : Fk
      }), bF().or(RF()))
    }
    const NI = xI.object({
        image_url: xI.string()
      }),
      cI = xI.object({
        mediaUrl: xI.string().max(1024)
      }),
      WI = xI.object({
        access_token: xI.union([xI.string(), xI.null()]).optional()
      }),
      fI = xI.object({
        access_token: xI.string(),
        user: xI.object({
          username: xI.string(),
          discriminator: xI.string(),
          id: xI.string(),
          avatar: xI.union([xI.string(), xI.null()]).optional(),
          public_flags: xI.number(),
          global_name: xI.union([xI.string(), xI.null()]).optional()
        }),
        scopes: xI.array(function(kk) {
          const Fk = GF().transform((Fk => {
            const Ik = kk.safeParse(Fk);
            return Ik.success ? Ik.data : kk._def.defaultValue()
          }));
          return Fk.overlayType = kk, Fk
        }(xI.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(xI.literal(-1)).default(-1))),
        expires: xI.string(),
        application: xI.object({
          description: xI.string(),
          icon: xI.union([xI.string(), xI.null()]).optional(),
          id: xI.string(),
          rpc_origins: xI.array(xI.string()).optional(),
          name: xI.string()
        })
      }),
      BI = xI.object({
        participants: xI.array(xI.object({
          id: xI.string(),
          username: xI.string(),
          global_name: xI.union([xI.string(), xI.null()]).optional(),
          discriminator: xI.string(),
          avatar: xI.union([xI.string(), xI.null()]).optional(),
          flags: xI.number(),
          bot: xI.boolean(),
          avatar_decoration_data: xI.union([xI.object({
            asset: xI.string(),
            skuId: xI.string().optional()
          }), xI.null()]).optional(),
          premium_type: xI.union([xI.number(), xI.null()]).optional(),
          nickname: xI.string().optional()
        }))
      });
    var dI;
    ! function(kk) {
      kk.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", kk.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", kk.AUTHENTICATE = "AUTHENTICATE", kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(dI || (dI = {}));
    const YI = xI.object({}).optional().nullable(),
      AI = xI.void(),
      gI = {
        [dI.INITIATE_IMAGE_UPLOAD]: {
          request: AI,
          response: NI
        },
        [dI.OPEN_SHARE_MOMENT_DIALOG]: {
          request: cI,
          response: YI
        },
        [dI.AUTHENTICATE]: {
          request: WI,
          response: fI
        },
        [dI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: AI,
          response: BI
        }
      },
      mI = "DISPATCH";
    var hI;
    ! function(kk) {
      kk.AUTHORIZE = "AUTHORIZE", kk.AUTHENTICATE = "AUTHENTICATE", kk.GET_GUILDS = "GET_GUILDS", kk.GET_GUILD = "GET_GUILD", kk.GET_CHANNEL = "GET_CHANNEL", kk.GET_CHANNELS = "GET_CHANNELS", kk.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", kk.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", kk.SUBSCRIBE = "SUBSCRIBE", kk.UNSUBSCRIBE = "UNSUBSCRIBE", kk.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", kk.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", kk.SET_ACTIVITY = "SET_ACTIVITY", kk.GET_SKUS = "GET_SKUS", kk.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", kk.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", kk.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", kk.START_PURCHASE = "START_PURCHASE", kk.SET_CONFIG = "SET_CONFIG", kk.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", kk.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", kk.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", kk.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", kk.CAPTURE_LOG = "CAPTURE_LOG", kk.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", kk.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", kk.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", kk.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", kk.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", kk.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(hI || (hI = {}));
    const rI = hF({
        cmd: bF(),
        data: YF(),
        evt: BF(),
        nonce: bF()
      }).passthrough(),
      DI = (CI(Object.assign(Object.assign({}, fI.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), hF({
        id: bF(),
        username: bF(),
        discriminator: bF(),
        global_name: bF().optional().nullable(),
        avatar: bF().optional().nullable(),
        avatar_decoration_data: hF({
          asset: bF(),
          sku_id: bF().optional()
        }).nullable(),
        bot: NF(),
        flags: RF().optional().nullable(),
        premium_type: RF().optional().nullable()
      })),
      MI = hF({
        user: DI,
        nick: bF().optional().nullable(),
        roles: mF(bF()),
        joined_at: bF(),
        deaf: NF(),
        mute: NF()
      }),
      kX = hF({
        id: bF(),
        name: bF().optional().nullable(),
        roles: mF(bF()).optional().nullable(),
        user: DI.optional().nullable(),
        require_colons: NF().optional().nullable(),
        managed: NF().optional().nullable(),
        animated: NF().optional().nullable(),
        available: NF().optional().nullable()
      }),
      FX = hF({
        mute: NF(),
        deaf: NF(),
        self_mute: NF(),
        self_deaf: NF(),
        suppress: NF()
      }),
      IX = hF({
        mute: NF(),
        nick: bF(),
        user: DI,
        voice_state: FX,
        volume: RF()
      }),
      XX = CI({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      TX = hF({
        name: bF(),
        type: RF(),
        url: bF().optional().nullable(),
        created_at: RF().optional().nullable(),
        timestamps: hF({
          start: RF(),
          end: RF()
        }).partial().optional().nullable(),
        application_id: bF().optional().nullable(),
        details: bF().optional().nullable(),
        state: bF().optional().nullable(),
        emoji: kX.optional().nullable(),
        party: hF({
          id: bF().optional().nullable(),
          size: mF(RF()).optional().nullable()
        }).optional().nullable(),
        assets: hF({
          large_image: bF().nullable(),
          large_text: bF().nullable(),
          small_image: bF().nullable(),
          small_text: bF().nullable()
        }).partial().optional().nullable(),
        secrets: hF({
          join: bF(),
          match: bF()
        }).partial().optional().nullable(),
        instance: NF().optional().nullable(),
        flags: RF().optional().nullable()
      }),
      iX = hF({
        id: bF(),
        type: CI({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: bF(),
        deny: bF()
      }),
      yX = {
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
      lX = hF({
        id: bF(),
        type: CI(yX),
        guild_id: bF().optional().nullable(),
        position: RF().optional().nullable(),
        permission_overwrites: mF(iX).optional().nullable(),
        name: bF().optional().nullable(),
        topic: bF().optional().nullable(),
        nsfw: NF().optional().nullable(),
        last_message_id: bF().optional().nullable(),
        bitrate: RF().optional().nullable(),
        user_limit: RF().optional().nullable(),
        rate_limit_per_user: RF().optional().nullable(),
        recipients: mF(DI).optional().nullable(),
        icon: bF().optional().nullable(),
        owner_id: bF().optional().nullable(),
        application_id: bF().optional().nullable(),
        parent_id: bF().optional().nullable(),
        last_pin_timestamp: bF().optional().nullable()
      }),
      aX = hF({
        user: DI,
        guild_id: bF(),
        status: XX,
        activities: mF(TX),
        client_status: hF({
          desktop: XX,
          mobile: XX,
          web: XX
        }).partial()
      }),
      qX = hF({
        id: bF(),
        name: bF(),
        color: RF(),
        hoist: NF(),
        position: RF(),
        permissions: bF(),
        managed: NF(),
        mentionable: NF()
      }),
      LX = (hF({
        id: bF(),
        name: bF(),
        owner_id: bF(),
        icon: bF().nullable(),
        icon_hash: bF().optional().nullable(),
        splash: bF().nullable(),
        discovery_splash: bF().nullable(),
        owner: NF().optional().nullable(),
        permissions: bF().optional().nullable(),
        region: bF(),
        afk_channel_id: bF().nullable(),
        afk_timeout: RF(),
        widget_enabled: NF().optional().nullable(),
        widget_channel_id: bF().optional().nullable(),
        verification_level: RF(),
        default_message_notifications: RF(),
        explicit_content_filter: RF(),
        roles: mF(qX),
        emojis: mF(kX),
        features: mF(bF()),
        mfa_level: RF(),
        application_id: bF().nullable(),
        system_channel_id: bF().nullable(),
        system_channel_flags: RF(),
        rules_channel_id: bF().nullable(),
        joined_at: bF().optional().nullable(),
        large: NF().optional().nullable(),
        unavailable: NF().optional().nullable(),
        member_count: RF().optional().nullable(),
        voice_states: mF(FX).optional().nullable(),
        members: mF(MI).optional().nullable(),
        channels: mF(lX).optional().nullable(),
        presences: mF(aX).optional().nullable(),
        max_presences: RF().optional().nullable(),
        max_members: RF().optional().nullable(),
        vanity_url_code: bF().nullable(),
        description: bF().nullable(),
        banner: bF().nullable(),
        premium_tier: RF(),
        premium_subscription_count: RF().optional().nullable(),
        preferred_locale: bF(),
        public_updates_channel_id: bF().nullable(),
        max_video_channel_users: RF().optional().nullable(),
        approximate_member_count: RF().optional().nullable(),
        approximate_presence_count: RF().optional().nullable()
      }), hF({
        id: bF(),
        guild_id: bF(),
        type: RF(),
        name: bF()
      })),
      tX = hF({
        id: bF(),
        filename: bF(),
        size: RF(),
        url: bF(),
        proxy_url: bF(),
        height: RF().optional().nullable(),
        width: RF().optional().nullable()
      }),
      ZX = hF({
        text: bF(),
        icon_url: bF().optional().nullable(),
        proxy_icon_url: bF().optional().nullable()
      }),
      jX = hF({
        url: bF().optional().nullable(),
        proxy_url: bF().optional().nullable(),
        height: RF().optional().nullable(),
        width: RF().optional().nullable()
      }),
      eX = jX.omit({
        proxy_url: !0
      }),
      wX = hF({
        name: bF().optional().nullable(),
        url: bF().optional().nullable()
      }),
      HX = hF({
        name: bF().optional().nullable(),
        url: bF().optional().nullable(),
        icon_url: bF().optional().nullable(),
        proxy_icon_url: bF().optional().nullable()
      }),
      JX = hF({
        name: bF(),
        value: bF(),
        inline: NF()
      }),
      xX = hF({
        title: bF().optional().nullable(),
        type: bF().optional().nullable(),
        description: bF().optional().nullable(),
        url: bF().optional().nullable(),
        timestamp: bF().optional().nullable(),
        color: RF().optional().nullable(),
        footer: ZX.optional().nullable(),
        image: jX.optional().nullable(),
        thumbnail: jX.optional().nullable(),
        video: eX.optional().nullable(),
        provider: wX.optional().nullable(),
        author: HX.optional().nullable(),
        fields: mF(JX).optional().nullable()
      }),
      PX = hF({
        count: RF(),
        me: NF(),
        emoji: kX
      }),
      KX = hF({
        type: RF(),
        party_id: bF().optional().nullable()
      }),
      QX = hF({
        id: bF(),
        cover_image: bF().optional().nullable(),
        description: bF(),
        icon: bF().optional().nullable(),
        name: bF()
      }),
      sX = hF({
        message_id: bF().optional().nullable(),
        channel_id: bF().optional().nullable(),
        guild_id: bF().optional().nullable()
      }),
      VX = hF({
        id: bF(),
        channel_id: bF(),
        guild_id: bF().optional().nullable(),
        author: DI.optional().nullable(),
        member: MI.optional().nullable(),
        content: bF(),
        timestamp: bF(),
        edited_timestamp: bF().optional().nullable(),
        tts: NF(),
        mention_everyone: NF(),
        mentions: mF(DI),
        mention_roles: mF(bF()),
        mention_channels: mF(LX),
        attachments: mF(tX),
        embeds: mF(xX),
        reactions: mF(PX).optional().nullable(),
        nonce: DF([bF(), RF()]).optional().nullable(),
        pinned: NF(),
        webhook_id: bF().optional().nullable(),
        type: RF(),
        activity: KX.optional().nullable(),
        application: QX.optional().nullable(),
        message_reference: sX.optional().nullable(),
        flags: RF().optional().nullable(),
        stickers: mF(YF()).optional().nullable(),
        referenced_message: YF().optional().nullable()
      }),
      zX = hF({
        id: bF(),
        name: bF()
      }),
      SX = hF({
        type: CI({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: RF(),
        name: bF()
      }),
      oX = hF({
        type: CI({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: NF(),
        threshold: RF(),
        shortcut: mF(SX),
        delay: RF()
      }),
      vX = hF({
        device_id: bF(),
        volume: RF(),
        available_devices: mF(zX)
      }),
      EX = (hF({
        type: CI({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: bF(),
        vendor: hF({
          name: bF(),
          url: bF()
        }),
        model: hF({
          name: bF(),
          url: bF()
        }),
        related: mF(bF()),
        echo_cancellation: NF().optional().nullable(),
        noise_suppression: NF().optional().nullable(),
        automatic_gain_control: NF().optional().nullable(),
        hardware_mute: NF().optional().nullable()
      }), hF({
        id: bF(),
        name: bF(),
        type: CI({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: hF({
          amount: RF(),
          currency: bF()
        }),
        application_id: bF(),
        flags: RF(),
        release_date: bF().nullable()
      })),
      OX = hF({
        id: bF(),
        sku_id: bF(),
        application_id: bF(),
        user_id: bF(),
        gift_code_flags: RF(),
        type: CI({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: bF().optional().nullable(),
        branches: mF(bF()).optional().nullable(),
        starts_at: bF().optional().nullable(),
        ends_at: bF().optional().nullable(),
        parent_id: bF().optional().nullable(),
        consumed: NF().optional().nullable(),
        deleted: NF().optional().nullable(),
        gift_code_batch_id: bF().optional().nullable()
      }),
      nX = (CI({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), CI({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      GX = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      pX = (CI(GX), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      uX = (CI(pX), "ERROR");
    var bX;
    ! function(kk) {
      kk.READY = "READY", kk.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", kk.SPEAKING_START = "SPEAKING_START", kk.SPEAKING_STOP = "SPEAKING_STOP", kk.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", kk.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", kk.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", kk.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", kk.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", kk.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(bX || (bX = {}));
    const RX = rI.extend({
        evt: qI(bX),
        nonce: bF().nullable(),
        cmd: lI(mI),
        data: hF({}).passthrough()
      }),
      UX = rI.extend({
        evt: lI(uX),
        data: hF({
          code: RF(),
          message: bF().optional()
        }).passthrough(),
        cmd: qI(hI),
        nonce: bF().nullable()
      }),
      CX = RX.extend({
        evt: bF()
      }),
      NX = DF([RX, CX, UX]);
    const cX = {
      [bX.READY]: {
        payload: RX.extend({
          evt: lI(bX.READY),
          data: hF({
            v: RF(),
            config: hF({
              cdn_host: bF().optional(),
              api_endpoint: bF(),
              environment: bF()
            }),
            user: hF({
              id: bF(),
              username: bF(),
              discriminator: bF(),
              avatar: bF().optional()
            }).optional()
          })
        })
      },
      [bX.VOICE_STATE_UPDATE]: {
        payload: RX.extend({
          evt: lI(bX.VOICE_STATE_UPDATE),
          data: IX
        }),
        subscribeArgs: hF({
          channel_id: bF()
        })
      },
      [bX.SPEAKING_START]: {
        payload: RX.extend({
          evt: lI(bX.SPEAKING_START),
          data: hF({
            lobby_id: bF().optional(),
            channel_id: bF().optional(),
            user_id: bF()
          })
        }),
        subscribeArgs: hF({
          lobby_id: bF().nullable().optional(),
          channel_id: bF().nullable().optional()
        })
      },
      [bX.SPEAKING_STOP]: {
        payload: RX.extend({
          evt: lI(bX.SPEAKING_STOP),
          data: hF({
            lobby_id: bF().optional(),
            channel_id: bF().optional(),
            user_id: bF()
          })
        }),
        subscribeArgs: hF({
          lobby_id: bF().nullable().optional(),
          channel_id: bF().nullable().optional()
        })
      },
      [bX.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: RX.extend({
          evt: lI(bX.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: hF({
            layout_mode: CI(pX)
          })
        })
      },
      [bX.ORIENTATION_UPDATE]: {
        payload: RX.extend({
          evt: lI(bX.ORIENTATION_UPDATE),
          data: hF({
            screen_orientation: CI(GX),
            orientation: qI(bI)
          })
        })
      },
      [bX.CURRENT_USER_UPDATE]: {
        payload: RX.extend({
          evt: lI(bX.CURRENT_USER_UPDATE),
          data: DI
        })
      },
      [bX.ENTITLEMENT_CREATE]: {
        payload: RX.extend({
          evt: lI(bX.ENTITLEMENT_CREATE),
          data: hF({
            entitlement: OX
          })
        })
      },
      [bX.THERMAL_STATE_UPDATE]: {
        payload: RX.extend({
          evt: lI(bX.THERMAL_STATE_UPDATE),
          data: hF({
            thermal_state: nX
          })
        })
      },
      [bX.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: RX.extend({
          evt: lI(bX.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: hF({
            participants: BI.shape.participants
          })
        })
      }
    };
    const WX = hF({}).nullable(),
      fX = hF({
        code: bF()
      }),
      BX = hF({
        guilds: mF(hF({
          id: bF(),
          name: bF()
        }))
      }),
      dX = hF({
        id: bF(),
        name: bF(),
        icon_url: bF().optional(),
        members: mF(MI)
      }),
      YX = hF({
        id: bF(),
        type: CI(yX),
        guild_id: bF().optional().nullable(),
        name: bF().optional().nullable(),
        topic: bF().optional().nullable(),
        bitrate: RF().optional().nullable(),
        user_limit: RF().optional().nullable(),
        position: RF().optional().nullable(),
        voice_states: mF(IX),
        messages: mF(VX)
      }),
      AX = hF({
        channels: mF(lX)
      }),
      gX = (YX.nullable(), YX.nullable()),
      mX = YX.nullable(),
      hX = (hF({
        input: vX,
        output: vX,
        mode: oX,
        automatic_gain_control: NF(),
        echo_cancellation: NF(),
        noise_suppression: NF(),
        qos: NF(),
        silence_warning: NF(),
        deaf: NF(),
        mute: NF()
      }), hF({
        evt: bF()
      })),
      rX = hF({
        shortcut: SX
      }),
      DX = TX,
      MX = hF({
        skus: mF(EX)
      }),
      kT = hF({
        entitlements: mF(OX)
      }),
      FT = mF(OX).nullable(),
      IT = hF({
        use_interactive_pip: NF()
      }),
      XT = hF({
        locale: bF()
      }),
      TT = hF({
        enabled: NF()
      }),
      iT = hF({
        permissions: CF().or(bF())
      }),
      yT = hF({
        iosKeyboardResizesView: ZI(NF())
      }),
      lT = rI.extend({
        cmd: qI(hI),
        evt: BF()
      });

    function aT(kk) {
      let {
        cmd: Fk,
        data: Ik
      } = kk;
      switch (Fk) {
        case hI.AUTHORIZE:
          return fX.parse(Ik);
        case hI.CAPTURE_SHORTCUT:
          return rX.parse(Ik);
        case hI.ENCOURAGE_HW_ACCELERATION:
          return TT.parse(Ik);
        case hI.GET_CHANNEL:
          return YX.parse(Ik);
        case hI.GET_CHANNELS:
          return AX.parse(Ik);
        case hI.GET_CHANNEL_PERMISSIONS:
          return iT.parse(Ik);
        case hI.GET_GUILD:
          return dX.parse(Ik);
        case hI.GET_GUILDS:
          return BX.parse(Ik);
        case hI.GET_PLATFORM_BEHAVIORS:
          return yT.parse(Ik);
        case hI.GET_CHANNEL:
          return YX.parse(Ik);
        case hI.SELECT_TEXT_CHANNEL:
          return mX.parse(Ik);
        case hI.SELECT_VOICE_CHANNEL:
          return gX.parse(Ik);
        case hI.SET_ACTIVITY:
          return DX.parse(Ik);
        case hI.GET_SKUS_EMBEDDED:
          return MX.parse(Ik);
        case hI.GET_ENTITLEMENTS_EMBEDDED:
          return kT.parse(Ik);
        case hI.SET_CONFIG:
          return IT.parse(Ik);
        case hI.START_PURCHASE:
          return FT.parse(Ik);
        case hI.SUBSCRIBE:
        case hI.UNSUBSCRIBE:
          return hX.parse(Ik);
        case hI.USER_SETTINGS_GET_LOCALE:
          return XT.parse(Ik);
        case hI.OPEN_EXTERNAL_LINK:
        case hI.SET_ORIENTATION_LOCK_STATE:
        case hI.SET_CERTIFIED_DEVICES:
        case hI.SEND_ANALYTICS_EVENT:
        case hI.OPEN_INVITE_DIALOG:
        case hI.CAPTURE_LOG:
        case hI.GET_SKUS:
        case hI.GET_ENTITLEMENTS:
          return WX.parse(Ik);
        case hI.AUTHENTICATE:
        case hI.INITIATE_IMAGE_UPLOAD:
        case hI.OPEN_SHARE_MOMENT_DIALOG:
        case hI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: kk
          } = gI[Fk];
          return kk.parse(Ik);
        default:
          ! function(kk, Fk) {
            throw Fk
          }(0, new Error(`Unrecognized command ${Fk}`))
      }
    }
    hF({
      frame_id: bF(),
      platform: qI(RI).optional().nullable()
    }), hF({
      v: lI(1),
      encoding: lI("json").optional(),
      client_id: bF(),
      frame_id: bF()
    });
    const qT = hF({
        code: RF(),
        message: bF().optional()
      }),
      LT = hF({
        evt: bF().nullable(),
        nonce: bF().nullable(),
        data: YF().nullable(),
        cmd: bF()
      }).passthrough();

    function tT(kk) {
      const Fk = LT.parse(kk);
      return null != Fk.evt ? Fk.evt === uX ? UX.parse(Fk) : function(kk) {
        const Fk = kk.evt;
        if (!(Fk in bX)) throw new Error(`Unrecognized event type ${kk.evt}`);
        return cX[Fk].payload.parse(kk)
      }(NX.parse(Fk)) : function(kk) {
        return Object.assign(Object.assign({}, kk), {
          data: aT(kk)
        })
      }(lT.passthrough().parse(Fk))
    }

    function ZT(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Tk = rI.extend({
        cmd: lI(Fk),
        data: Ik
      });
      return async Ik => {
        const ik = await kk({
          cmd: Fk,
          args: Ik,
          transfer: Xk(Ik)
        });
        return Tk.parse(ik).data
      }
    }

    function jT(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Ik = gI[kk].response,
        Xk = rI.extend({
          cmd: lI(kk),
          data: Ik
        });
      return Ik => async Tk => {
        const ik = await Ik({
          cmd: kk,
          args: Tk,
          transfer: Fk(Tk)
        });
        return Xk.parse(ik).data
      }
    }
    const eT = jT(dI.AUTHENTICATE),
      wT = kk => ZT(kk, hI.AUTHORIZE, fX),
      HT = kk => ZT(kk, hI.CAPTURE_LOG, WX),
      JT = kk => ZT(kk, hI.ENCOURAGE_HW_ACCELERATION, TT),
      xT = kk => ZT(kk, hI.GET_ENTITLEMENTS_EMBEDDED, kT),
      PT = kk => ZT(kk, hI.GET_SKUS_EMBEDDED, MX),
      KT = kk => ZT(kk, hI.GET_CHANNEL_PERMISSIONS, iT),
      QT = kk => ZT(kk, hI.GET_PLATFORM_BEHAVIORS, yT),
      sT = kk => ZT(kk, hI.OPEN_EXTERNAL_LINK, WX),
      VT = kk => ZT(kk, hI.OPEN_INVITE_DIALOG, WX),
      zT = jT(dI.OPEN_SHARE_MOMENT_DIALOG);
    TX.rZ({
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
      type: TX.shape.type.optional(),
      instance: TX.shape.instance.optional()
    }).nullable();
    const ST = kk => ZT(kk, hI.SET_ACTIVITY, DX),
      oT = kk => ZT(kk, hI.SET_CONFIG, IT);
    const vT = kk => ({
        lock_state: kk.lock_state,
        picture_in_picture_lock_state: kk.picture_in_picture_lock_state
      }),
      ET = kk => function(kk) {
        let {
          sendCommand: Fk,
          cmd: Ik,
          response: Xk,
          fallbackTransform: Tk,
          transferTransform: ik = () => {}
        } = kk;
        const yk = rI.extend({
          cmd: lI(Ik),
          data: Xk
        });
        return async kk => {
          try {
            const Xk = await Fk({
              cmd: Ik,
              args: kk,
              transfer: ik(kk)
            });
            return yk.parse(Xk).data
          } catch (Xk) {
            if (Xk.code === uI.INVALID_PAYLOAD) {
              const Xk = Tk(kk),
                lk = await Fk({
                  cmd: Ik,
                  args: Xk,
                  transfer: ik(Xk)
                });
              return yk.parse(lk).data
            }
            throw Xk
          }
        }
      }({
        sendCommand: kk,
        cmd: hI.SET_ORIENTATION_LOCK_STATE,
        response: WX,
        fallbackTransform: vT
      }),
      OT = kk => ZT(kk, hI.START_PURCHASE, FT),
      nT = kk => ZT(kk, hI.USER_SETTINGS_GET_LOCALE, XT),
      GT = jT(dI.INITIATE_IMAGE_UPLOAD),
      pT = kk => ZT(kk, hI.GET_CHANNEL, YX),
      uT = jT(dI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var bT = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function RT(kk) {
      return "string" === typeof kk && bT.test(kk)
    }
    for (var UT = [], CT = 0; CT < 256; ++CT) UT.push((CT + 256).toString(16).substr(1));

    function NT(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ik = (UT[kk[Fk + 0]] + UT[kk[Fk + 1]] + UT[kk[Fk + 2]] + UT[kk[Fk + 3]] + "-" + UT[kk[Fk + 4]] + UT[kk[Fk + 5]] + "-" + UT[kk[Fk + 6]] + UT[kk[Fk + 7]] + "-" + UT[kk[Fk + 8]] + UT[kk[Fk + 9]] + "-" + UT[kk[Fk + 10]] + UT[kk[Fk + 11]] + UT[kk[Fk + 12]] + UT[kk[Fk + 13]] + UT[kk[Fk + 14]] + UT[kk[Fk + 15]]).toLowerCase();
      if (!RT(Ik)) throw TypeError("Stringified UUID is invalid");
      return Ik
    }
    var cT;

    function WT(kk, Fk, Ik) {
      function Xk(kk, Xk, Tk, ik) {
        if ("string" === typeof kk && (kk = function(kk) {
            kk = unescape(encodeURIComponent(kk));
            for (var Fk = [], Ik = 0; Ik < kk.length; ++Ik) Fk.push(kk.charCodeAt(Ik));
            return Fk
          }(kk)), "string" === typeof Xk && (Xk = function(kk) {
            if (!RT(kk)) throw TypeError("Invalid UUID");
            var Fk, Ik = new Uint8Array(16);
            return Ik[0] = (Fk = parseInt(kk.slice(0, 8), 16)) >>> 24, Ik[1] = Fk >>> 16 & 255, Ik[2] = Fk >>> 8 & 255, Ik[3] = 255 & Fk, Ik[4] = (Fk = parseInt(kk.slice(9, 13), 16)) >>> 8, Ik[5] = 255 & Fk, Ik[6] = (Fk = parseInt(kk.slice(14, 18), 16)) >>> 8, Ik[7] = 255 & Fk, Ik[8] = (Fk = parseInt(kk.slice(19, 23), 16)) >>> 8, Ik[9] = 255 & Fk, Ik[10] = (Fk = parseInt(kk.slice(24, 36), 16)) / 1099511627776 & 255, Ik[11] = Fk / 4294967296 & 255, Ik[12] = Fk >>> 24 & 255, Ik[13] = Fk >>> 16 & 255, Ik[14] = Fk >>> 8 & 255, Ik[15] = 255 & Fk, Ik
          }(Xk)), 16 !== Xk.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var yk = new Uint8Array(16 + kk.length);
        if (yk.set(Xk), yk.set(kk, Xk.length), (yk = Ik(yk))[6] = 15 & yk[6] | Fk, yk[8] = 63 & yk[8] | 128, Tk) {
          ik = ik || 0;
          for (var lk = 0; lk < 16; ++lk) Tk[ik + lk] = yk[lk];
          return Tk
        }
        return NT(yk)
      }
      try {
        Xk.name = kk
      } catch (Tk) {}
      return Xk.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Xk.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Xk
    }

    function fT(kk) {
      return 14 + (kk + 64 >>> 9 << 4) + 1
    }

    function BT(kk, Fk) {
      var Ik = (65535 & kk) + (65535 & Fk);
      return (kk >> 16) + (Fk >> 16) + (Ik >> 16) << 16 | 65535 & Ik
    }

    function dT(kk, Fk, Ik, Xk, Tk, ik) {
      return BT((yk = BT(BT(Fk, kk), BT(Xk, ik))) << (lk = Tk) | yk >>> 32 - lk, Ik);
      var yk, lk
    }

    function YT(kk, Fk, Ik, Xk, Tk, ik, yk) {
      return dT(Fk & Ik | ~Fk & Xk, kk, Fk, Tk, ik, yk)
    }

    function AT(kk, Fk, Ik, Xk, Tk, ik, yk) {
      return dT(Fk & Xk | Ik & ~Xk, kk, Fk, Tk, ik, yk)
    }

    function gT(kk, Fk, Ik, Xk, Tk, ik, yk) {
      return dT(Fk ^ Ik ^ Xk, kk, Fk, Tk, ik, yk)
    }

    function mT(kk, Fk, Ik, Xk, Tk, ik, yk) {
      return dT(Ik ^ (Fk | ~Xk), kk, Fk, Tk, ik, yk)
    }
    WT("v3", 48, (function(kk) {
      if ("string" === typeof kk) {
        var Fk = unescape(encodeURIComponent(kk));
        kk = new Uint8Array(Fk.length);
        for (var Ik = 0; Ik < Fk.length; ++Ik) kk[Ik] = Fk.charCodeAt(Ik)
      }
      return function(kk) {
        for (var Fk = [], Ik = 32 * kk.length, Xk = "0123456789abcdef", Tk = 0; Tk < Ik; Tk += 8) {
          var ik = kk[Tk >> 5] >>> Tk % 32 & 255,
            yk = parseInt(Xk.charAt(ik >>> 4 & 15) + Xk.charAt(15 & ik), 16);
          Fk.push(yk)
        }
        return Fk
      }(function(kk, Fk) {
        kk[Fk >> 5] |= 128 << Fk % 32, kk[fT(Fk) - 1] = Fk;
        for (var Ik = 1732584193, Xk = -271733879, Tk = -1732584194, ik = 271733878, yk = 0; yk < kk.length; yk += 16) {
          var lk = Ik,
            ak = Xk,
            qk = Tk,
            Lk = ik;
          Ik = YT(Ik, Xk, Tk, ik, kk[yk], 7, -680876936), ik = YT(ik, Ik, Xk, Tk, kk[yk + 1], 12, -389564586), Tk = YT(Tk, ik, Ik, Xk, kk[yk + 2], 17, 606105819), Xk = YT(Xk, Tk, ik, Ik, kk[yk + 3], 22, -1044525330), Ik = YT(Ik, Xk, Tk, ik, kk[yk + 4], 7, -176418897), ik = YT(ik, Ik, Xk, Tk, kk[yk + 5], 12, 1200080426), Tk = YT(Tk, ik, Ik, Xk, kk[yk + 6], 17, -1473231341), Xk = YT(Xk, Tk, ik, Ik, kk[yk + 7], 22, -45705983), Ik = YT(Ik, Xk, Tk, ik, kk[yk + 8], 7, 1770035416), ik = YT(ik, Ik, Xk, Tk, kk[yk + 9], 12, -1958414417), Tk = YT(Tk, ik, Ik, Xk, kk[yk + 10], 17, -42063), Xk = YT(Xk, Tk, ik, Ik, kk[yk + 11], 22, -1990404162), Ik = YT(Ik, Xk, Tk, ik, kk[yk + 12], 7, 1804603682), ik = YT(ik, Ik, Xk, Tk, kk[yk + 13], 12, -40341101), Tk = YT(Tk, ik, Ik, Xk, kk[yk + 14], 17, -1502002290), Ik = AT(Ik, Xk = YT(Xk, Tk, ik, Ik, kk[yk + 15], 22, 1236535329), Tk, ik, kk[yk + 1], 5, -165796510), ik = AT(ik, Ik, Xk, Tk, kk[yk + 6], 9, -1069501632), Tk = AT(Tk, ik, Ik, Xk, kk[yk + 11], 14, 643717713), Xk = AT(Xk, Tk, ik, Ik, kk[yk], 20, -373897302), Ik = AT(Ik, Xk, Tk, ik, kk[yk + 5], 5, -701558691), ik = AT(ik, Ik, Xk, Tk, kk[yk + 10], 9, 38016083), Tk = AT(Tk, ik, Ik, Xk, kk[yk + 15], 14, -660478335), Xk = AT(Xk, Tk, ik, Ik, kk[yk + 4], 20, -405537848), Ik = AT(Ik, Xk, Tk, ik, kk[yk + 9], 5, 568446438), ik = AT(ik, Ik, Xk, Tk, kk[yk + 14], 9, -1019803690), Tk = AT(Tk, ik, Ik, Xk, kk[yk + 3], 14, -187363961), Xk = AT(Xk, Tk, ik, Ik, kk[yk + 8], 20, 1163531501), Ik = AT(Ik, Xk, Tk, ik, kk[yk + 13], 5, -1444681467), ik = AT(ik, Ik, Xk, Tk, kk[yk + 2], 9, -51403784), Tk = AT(Tk, ik, Ik, Xk, kk[yk + 7], 14, 1735328473), Ik = gT(Ik, Xk = AT(Xk, Tk, ik, Ik, kk[yk + 12], 20, -1926607734), Tk, ik, kk[yk + 5], 4, -378558), ik = gT(ik, Ik, Xk, Tk, kk[yk + 8], 11, -2022574463), Tk = gT(Tk, ik, Ik, Xk, kk[yk + 11], 16, 1839030562), Xk = gT(Xk, Tk, ik, Ik, kk[yk + 14], 23, -35309556), Ik = gT(Ik, Xk, Tk, ik, kk[yk + 1], 4, -1530992060), ik = gT(ik, Ik, Xk, Tk, kk[yk + 4], 11, 1272893353), Tk = gT(Tk, ik, Ik, Xk, kk[yk + 7], 16, -155497632), Xk = gT(Xk, Tk, ik, Ik, kk[yk + 10], 23, -1094730640), Ik = gT(Ik, Xk, Tk, ik, kk[yk + 13], 4, 681279174), ik = gT(ik, Ik, Xk, Tk, kk[yk], 11, -358537222), Tk = gT(Tk, ik, Ik, Xk, kk[yk + 3], 16, -722521979), Xk = gT(Xk, Tk, ik, Ik, kk[yk + 6], 23, 76029189), Ik = gT(Ik, Xk, Tk, ik, kk[yk + 9], 4, -640364487), ik = gT(ik, Ik, Xk, Tk, kk[yk + 12], 11, -421815835), Tk = gT(Tk, ik, Ik, Xk, kk[yk + 15], 16, 530742520), Ik = mT(Ik, Xk = gT(Xk, Tk, ik, Ik, kk[yk + 2], 23, -995338651), Tk, ik, kk[yk], 6, -198630844), ik = mT(ik, Ik, Xk, Tk, kk[yk + 7], 10, 1126891415), Tk = mT(Tk, ik, Ik, Xk, kk[yk + 14], 15, -1416354905), Xk = mT(Xk, Tk, ik, Ik, kk[yk + 5], 21, -57434055), Ik = mT(Ik, Xk, Tk, ik, kk[yk + 12], 6, 1700485571), ik = mT(ik, Ik, Xk, Tk, kk[yk + 3], 10, -1894986606), Tk = mT(Tk, ik, Ik, Xk, kk[yk + 10], 15, -1051523), Xk = mT(Xk, Tk, ik, Ik, kk[yk + 1], 21, -2054922799), Ik = mT(Ik, Xk, Tk, ik, kk[yk + 8], 6, 1873313359), ik = mT(ik, Ik, Xk, Tk, kk[yk + 15], 10, -30611744), Tk = mT(Tk, ik, Ik, Xk, kk[yk + 6], 15, -1560198380), Xk = mT(Xk, Tk, ik, Ik, kk[yk + 13], 21, 1309151649), Ik = mT(Ik, Xk, Tk, ik, kk[yk + 4], 6, -145523070), ik = mT(ik, Ik, Xk, Tk, kk[yk + 11], 10, -1120210379), Tk = mT(Tk, ik, Ik, Xk, kk[yk + 2], 15, 718787259), Xk = mT(Xk, Tk, ik, Ik, kk[yk + 9], 21, -343485551), Ik = BT(Ik, lk), Xk = BT(Xk, ak), Tk = BT(Tk, qk), ik = BT(ik, Lk)
        }
        return [Ik, Xk, Tk, ik]
      }(function(kk) {
        if (0 === kk.length) return [];
        for (var Fk = 8 * kk.length, Ik = new Uint32Array(fT(Fk)), Xk = 0; Xk < Fk; Xk += 8) Ik[Xk >> 5] |= (255 & kk[Xk / 8]) << Xk % 32;
        return Ik
      }(kk), 8 * kk.length))
    }));
    var hT = new Uint8Array(16);

    function rT() {
      if (!cT && !(cT = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return cT(hT)
    }

    function DT(kk, Fk, Ik) {
      var Xk = (kk = kk || {}).random || (kk.rng || rT)();
      if (Xk[6] = 15 & Xk[6] | 64, Xk[8] = 63 & Xk[8] | 128, Fk) {
        Ik = Ik || 0;
        for (var Tk = 0; Tk < 16; ++Tk) Fk[Ik + Tk] = Xk[Tk];
        return Fk
      }
      return NT(Xk)
    }

    function MT(kk, Fk, Ik, Xk) {
      switch (kk) {
        case 0:
          return Fk & Ik ^ ~Fk & Xk;
        case 1:
        case 3:
          return Fk ^ Ik ^ Xk;
        case 2:
          return Fk & Ik ^ Fk & Xk ^ Ik & Xk
      }
    }

    function ki(kk, Fk) {
      return kk << Fk | kk >>> 32 - Fk
    }
    WT("v5", 80, (function(kk) {
      var Fk = [1518500249, 1859775393, 2400959708, 3395469782],
        Ik = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof kk) {
        var Xk = unescape(encodeURIComponent(kk));
        kk = [];
        for (var Tk = 0; Tk < Xk.length; ++Tk) kk.push(Xk.charCodeAt(Tk))
      } else Array.isArray(kk) || (kk = Array.prototype.slice.call(kk));
      kk.push(128);
      for (var ik = kk.length / 4 + 2, yk = Math.ceil(ik / 16), lk = new Array(yk), ak = 0; ak < yk; ++ak) {
        for (var qk = new Uint32Array(16), Lk = 0; Lk < 16; ++Lk) qk[Lk] = kk[64 * ak + 4 * Lk] << 24 | kk[64 * ak + 4 * Lk + 1] << 16 | kk[64 * ak + 4 * Lk + 2] << 8 | kk[64 * ak + 4 * Lk + 3];
        lk[ak] = qk
      }
      lk[yk - 1][14] = 8 * (kk.length - 1) / Math.pow(2, 32), lk[yk - 1][14] = Math.floor(lk[yk - 1][14]), lk[yk - 1][15] = 8 * (kk.length - 1) & 4294967295;
      for (var tk = 0; tk < yk; ++tk) {
        for (var Zk = new Uint32Array(80), jk = 0; jk < 16; ++jk) Zk[jk] = lk[tk][jk];
        for (var ek = 16; ek < 80; ++ek) Zk[ek] = ki(Zk[ek - 3] ^ Zk[ek - 8] ^ Zk[ek - 14] ^ Zk[ek - 16], 1);
        for (var wk = Ik[0], Hk = Ik[1], Jk = Ik[2], xk = Ik[3], Pk = Ik[4], Kk = 0; Kk < 80; ++Kk) {
          var Qk = Math.floor(Kk / 20),
            sk = ki(wk, 5) + MT(Qk, Hk, Jk, xk) + Pk + Fk[Qk] + Zk[Kk] >>> 0;
          Pk = xk, xk = Jk, Jk = ki(Hk, 30) >>> 0, Hk = wk, wk = sk
        }
        Ik[0] = Ik[0] + wk >>> 0, Ik[1] = Ik[1] + Hk >>> 0, Ik[2] = Ik[2] + Jk >>> 0, Ik[3] = Ik[3] + xk >>> 0, Ik[4] = Ik[4] + Pk >>> 0
      }
      return [Ik[0] >> 24 & 255, Ik[0] >> 16 & 255, Ik[0] >> 8 & 255, 255 & Ik[0], Ik[1] >> 24 & 255, Ik[1] >> 16 & 255, Ik[1] >> 8 & 255, 255 & Ik[1], Ik[2] >> 24 & 255, Ik[2] >> 16 & 255, Ik[2] >> 8 & 255, 255 & Ik[2], Ik[3] >> 24 & 255, Ik[3] >> 16 & 255, Ik[3] >> 8 & 255, 255 & Ik[3], Ik[4] >> 24 & 255, Ik[4] >> 16 & 255, Ik[4] >> 8 & 255, 255 & Ik[4]]
    }));
    class Fi extends Error {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Fk), this.code = kk, this.message = Fk, this.name = "Discord SDK Error"
      }
    }
    const Ii = ["log", "warn", "debug", "info", "error"];
    var Xi;
    ! function(kk) {
      kk[kk.HANDSHAKE = 0] = "HANDSHAKE", kk[kk.FRAME = 1] = "FRAME", kk[kk.CLOSE = 2] = "CLOSE", kk[kk.HELLO = 3] = "HELLO"
    }(Xi || (Xi = {}));
    const Ti = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class ii {
      getTransfer(kk) {
        var Fk;
        switch (kk.cmd) {
          case hI.SUBSCRIBE:
          case hI.UNSUBSCRIBE:
            return;
          default:
            return null !== (Fk = kk.transfer) && void 0 !== Fk ? Fk : void 0
        }
      }
      constructor(kk, Fk) {
        var Ik;
        if (this.eventBus = new qk, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = kk => {
            var Fk;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Ik = DT();
            null === (Fk = this.source) || void 0 === Fk || Fk.postMessage([Xi.FRAME, Object.assign(Object.assign({}, kk), {
              nonce: Ik
            })], this.sourceOrigin, this.getTransfer(kk));
            return new Promise(((kk, Fk) => {
              this.pendingCommands.set(Ik, {
                resolve: kk,
                reject: Fk
              })
            }))
          }, this.commands = (Ik = this.sendCommand, {
            authenticate: eT(Ik),
            authorize: wT(Ik),
            captureLog: HT(Ik),
            encourageHardwareAcceleration: JT(Ik),
            getChannel: pT(Ik),
            getChannelPermissions: KT(Ik),
            getEntitlements: xT(Ik),
            getPlatformBehaviors: QT(Ik),
            getSkus: PT(Ik),
            openExternalLink: sT(Ik),
            openInviteDialog: VT(Ik),
            openShareMomentDialog: zT(Ik),
            setActivity: ST(Ik),
            setConfig: oT(Ik),
            setOrientationLockState: ET(Ik),
            startPurchase: OT(Ik),
            userSettingsGetLocale: nT(Ik),
            initiateImageUpload: GT(Ik),
            getInstanceConnectedParticipants: uT(Ik)
          }), this.handleMessage = kk => {
            if (!Ti.has(kk.origin)) return;
            const Fk = kk.data;
            if (!Array.isArray(Fk)) return;
            const [Ik, Xk] = Fk;
            switch (Ik) {
              case Xi.HELLO:
                return;
              case Xi.CLOSE:
                return this.handleClose(Xk);
              case Xi.HANDSHAKE:
                return this.handleHandshake();
              case Xi.FRAME:
                return this.handleFrame(Xk);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = kk, this.configuration = null !== Fk && void 0 !== Fk ? Fk : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = RI.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Xk = new URLSearchParams(this._getSearch()),
          Tk = Xk.get("frame_id");
        if (!Tk) throw new Error("frame_id query param is not defined");
        this.frameId = Tk;
        const ik = Xk.get("instance_id");
        if (!ik) throw new Error("instance_id query param is not defined");
        this.instanceId = ik;
        const yk = Xk.get("platform");
        if (!yk) throw new Error("platform query param is not defined");
        if (yk !== RI.DESKTOP && yk !== RI.MOBILE) throw new Error(`Invalid query param "platform" of "${yk}". Valid values are "${RI.DESKTOP}" or "${RI.MOBILE}"`);
        this.platform = yk, this.guildId = Xk.get("guild_id"), this.channelId = Xk.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var kk;
          return [null !== (kk = window.parent.opener) && void 0 !== kk ? kk : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(kk, Fk) {
        var Ik;
        window.removeEventListener("message", this.handleMessage);
        const Xk = DT();
        null === (Ik = this.source) || void 0 === Ik || Ik.postMessage([Xi.CLOSE, {
          code: kk,
          message: Fk,
          nonce: Xk
        }], this.sourceOrigin)
      }
      async subscribe(kk, Fk) {
        for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
        const [ik] = Xk, yk = this.eventBus.listenerCount(kk), lk = this.eventBus.on(kk, Fk);
        return Object.values(bX).includes(kk) && kk !== bX.READY && 0 === yk && await this.sendCommand({
          cmd: hI.SUBSCRIBE,
          args: ik,
          evt: kk
        }), lk
      }
      async unsubscribe(kk, Fk) {
        for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
        const [ik] = Xk;
        return kk !== bX.READY && 1 === this.eventBus.listenerCount(kk) && await this.sendCommand({
          cmd: hI.UNSUBSCRIBE,
          evt: kk,
          args: ik
        }), this.eventBus.off(kk, Fk)
      }
      async ready() {
        this.isReady || await new Promise((kk => {
          this.eventBus.once(bX.READY, kk)
        }))
      }
      handshake() {
        var kk;
        null === (kk = this.source) || void 0 === kk || kk.postMessage([Xi.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(bX.READY, (() => {
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
        Ii.forEach((Fk => {
          ! function(kk, Fk, Ik) {
            const Xk = kk[Fk],
              Tk = kk;
            Xk && (kk[Fk] = function() {
              const kk = [].slice.call(arguments),
                ik = "" + kk.join(" ");
              Ik(Fk, ik), Xk.apply(Tk, kk)
            })
          }(console, Fk, kk)
        }))
      }
      handleClose(kk) {
        qT.parse(kk)
      }
      handleHandshake() {}
      handleFrame(kk) {
        var Fk, Ik;
        let Xk;
        try {
          Xk = tT(kk)
        } catch (Tk) {
          return console.error("Failed to parse", kk), void console.error(Tk)
        }
        if ("DISPATCH" === Xk.cmd) this.eventBus.emit(Xk.evt, Xk.data);
        else {
          if (Xk.evt === uX) {
            if (null != Xk.nonce) return null === (Fk = this.pendingCommands.get(Xk.nonce)) || void 0 === Fk || Fk.reject(Xk.data), void this.pendingCommands.delete(Xk.nonce);
            this.eventBus.emit("error", new Fi(Xk.data.code, Xk.data.message))
          }
          if (null == Xk.nonce) return void console.error("Missing nonce", kk);
          null === (Ik = this.pendingCommands.get(Xk.nonce)) || void 0 === Ik || Ik.resolve(Xk), this.pendingCommands.delete(Xk.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var yi, li = 1e9,
      ai = !0,
      qi = "[DecimalError] ",
      Li = qi + "Invalid argument: ",
      ti = qi + "Exponent out of range: ",
      Zi = Math.floor,
      ji = Math.pow,
      ei = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      wi = 1e7,
      Hi = 9007199254740991,
      Ji = Zi(1286742750677284.5),
      xi = {};

    function Pi(kk, Fk) {
      var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk = kk.constructor,
        tk = Lk.precision;
      if (!kk.s || !Fk.s) return Fk.s || (Fk = new Lk(kk)), ai ? Oi(Fk, tk) : Fk;
      if (ak = kk.d, qk = Fk.d, yk = kk.e, Tk = Fk.e, ak = ak.slice(), ik = yk - Tk) {
        for (ik < 0 ? (Xk = ak, ik = -ik, lk = qk.length) : (Xk = qk, Tk = yk, lk = ak.length), ik > (lk = (yk = Math.ceil(tk / 7)) > lk ? yk + 1 : lk + 1) && (ik = lk, Xk.length = 1), Xk.reverse(); ik--;) Xk.push(0);
        Xk.reverse()
      }
      for ((lk = ak.length) - (ik = qk.length) < 0 && (ik = lk, Xk = qk, qk = ak, ak = Xk), Ik = 0; ik;) Ik = (ak[--ik] = ak[ik] + qk[ik] + Ik) / wi | 0, ak[ik] %= wi;
      for (Ik && (ak.unshift(Ik), ++Tk), lk = ak.length; 0 == ak[--lk];) ak.pop();
      return Fk.d = ak, Fk.e = Tk, ai ? Oi(Fk, tk) : Fk
    }

    function Ki(kk, Fk, Ik) {
      if (kk !== ~~kk || kk < Fk || kk > Ik) throw Error(Li + kk)
    }

    function Qi(kk) {
      var Fk, Ik, Xk, Tk = kk.length - 1,
        ik = "",
        yk = kk[0];
      if (Tk > 0) {
        for (ik += yk, Fk = 1; Fk < Tk; Fk++)(Ik = 7 - (Xk = kk[Fk] + "").length) && (ik += oi(Ik)), ik += Xk;
        (Ik = 7 - (Xk = (yk = kk[Fk]) + "").length) && (ik += oi(Ik))
      } else if (0 === yk) return "0";
      for (; yk % 10 === 0;) yk /= 10;
      return ik + yk
    }
    xi.absoluteValue = xi.abs = function() {
      var kk = new this.constructor(this);
      return kk.s && (kk.s = 1), kk
    }, xi.comparedTo = xi.cmp = function(kk) {
      var Fk, Ik, Xk, Tk, ik = this;
      if (kk = new ik.constructor(kk), ik.s !== kk.s) return ik.s || -kk.s;
      if (ik.e !== kk.e) return ik.e > kk.e ^ ik.s < 0 ? 1 : -1;
      for (Fk = 0, Ik = (Xk = ik.d.length) < (Tk = kk.d.length) ? Xk : Tk; Fk < Ik; ++Fk)
        if (ik.d[Fk] !== kk.d[Fk]) return ik.d[Fk] > kk.d[Fk] ^ ik.s < 0 ? 1 : -1;
      return Xk === Tk ? 0 : Xk > Tk ^ ik.s < 0 ? 1 : -1
    }, xi.decimalPlaces = xi.dp = function() {
      var kk = this,
        Fk = kk.d.length - 1,
        Ik = 7 * (Fk - kk.e);
      if (Fk = kk.d[Fk])
        for (; Fk % 10 == 0; Fk /= 10) Ik--;
      return Ik < 0 ? 0 : Ik
    }, xi.dividedBy = xi.div = function(kk) {
      return si(this, new this.constructor(kk))
    }, xi.dividedToIntegerBy = xi.idiv = function(kk) {
      var Fk = this.constructor;
      return Oi(si(this, new Fk(kk), 0, 1), Fk.precision)
    }, xi.equals = xi.eq = function(kk) {
      return !this.cmp(kk)
    }, xi.exponent = function() {
      return zi(this)
    }, xi.greaterThan = xi.gt = function(kk) {
      return this.cmp(kk) > 0
    }, xi.greaterThanOrEqualTo = xi.gte = function(kk) {
      return this.cmp(kk) >= 0
    }, xi.isInteger = xi.isint = function() {
      return this.e > this.d.length - 2
    }, xi.isNegative = xi.isneg = function() {
      return this.s < 0
    }, xi.isPositive = xi.ispos = function() {
      return this.s > 0
    }, xi.isZero = function() {
      return 0 === this.s
    }, xi.lessThan = xi.lt = function(kk) {
      return this.cmp(kk) < 0
    }, xi.lessThanOrEqualTo = xi.lte = function(kk) {
      return this.cmp(kk) < 1
    }, xi.logarithm = xi.log = function(kk) {
      var Fk, Ik = this,
        Xk = Ik.constructor,
        Tk = Xk.precision,
        ik = Tk + 5;
      if (void 0 === kk) kk = new Xk(10);
      else if ((kk = new Xk(kk)).s < 1 || kk.eq(yi)) throw Error(qi + "NaN");
      if (Ik.s < 1) throw Error(qi + (Ik.s ? "NaN" : "-Infinity"));
      return Ik.eq(yi) ? new Xk(0) : (ai = !1, Fk = si(vi(Ik, ik), vi(kk, ik), ik), ai = !0, Oi(Fk, Tk))
    }, xi.minus = xi.sub = function(kk) {
      var Fk = this;
      return kk = new Fk.constructor(kk), Fk.s == kk.s ? ni(Fk, kk) : Pi(Fk, (kk.s = -kk.s, kk))
    }, xi.modulo = xi.mod = function(kk) {
      var Fk, Ik = this,
        Xk = Ik.constructor,
        Tk = Xk.precision;
      if (!(kk = new Xk(kk)).s) throw Error(qi + "NaN");
      return Ik.s ? (ai = !1, Fk = si(Ik, kk, 0, 1).times(kk), ai = !0, Ik.minus(Fk)) : Oi(new Xk(Ik), Tk)
    }, xi.naturalExponential = xi.exp = function() {
      return Vi(this)
    }, xi.naturalLogarithm = xi.ln = function() {
      return vi(this)
    }, xi.negated = xi.neg = function() {
      var kk = new this.constructor(this);
      return kk.s = -kk.s || 0, kk
    }, xi.plus = xi.add = function(kk) {
      var Fk = this;
      return kk = new Fk.constructor(kk), Fk.s == kk.s ? Pi(Fk, kk) : ni(Fk, (kk.s = -kk.s, kk))
    }, xi.precision = xi.sd = function(kk) {
      var Fk, Ik, Xk, Tk = this;
      if (void 0 !== kk && kk !== !!kk && 1 !== kk && 0 !== kk) throw Error(Li + kk);
      if (Fk = zi(Tk) + 1, Ik = 7 * (Xk = Tk.d.length - 1) + 1, Xk = Tk.d[Xk]) {
        for (; Xk % 10 == 0; Xk /= 10) Ik--;
        for (Xk = Tk.d[0]; Xk >= 10; Xk /= 10) Ik++
      }
      return kk && Fk > Ik ? Fk : Ik
    }, xi.squareRoot = xi.sqrt = function() {
      var kk, Fk, Ik, Xk, Tk, ik, yk, lk = this,
        ak = lk.constructor;
      if (lk.s < 1) {
        if (!lk.s) return new ak(0);
        throw Error(qi + "NaN")
      }
      for (kk = zi(lk), ai = !1, 0 == (Tk = Math.sqrt(+lk)) || Tk == 1 / 0 ? (((Fk = Qi(lk.d)).length + kk) % 2 == 0 && (Fk += "0"), Tk = Math.sqrt(Fk), kk = Zi((kk + 1) / 2) - (kk < 0 || kk % 2), Xk = new ak(Fk = Tk == 1 / 0 ? "1e" + kk : (Fk = Tk.toExponential()).slice(0, Fk.indexOf("e") + 1) + kk)) : Xk = new ak(Tk.toString()), Tk = yk = (Ik = ak.precision) + 3;;)
        if (Xk = (ik = Xk).plus(si(lk, ik, yk + 2)).times(.5), Qi(ik.d).slice(0, yk) === (Fk = Qi(Xk.d)).slice(0, yk)) {
          if (Fk = Fk.slice(yk - 3, yk + 1), Tk == yk && "4999" == Fk) {
            if (Oi(ik, Ik + 1, 0), ik.times(ik).eq(lk)) {
              Xk = ik;
              break
            }
          } else if ("9999" != Fk) break;
          yk += 4
        } return ai = !0, Oi(Xk, Ik)
    }, xi.times = xi.mul = function(kk) {
      var Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk = this,
        tk = Lk.constructor,
        Zk = Lk.d,
        jk = (kk = new tk(kk)).d;
      if (!Lk.s || !kk.s) return new tk(0);
      for (kk.s *= Lk.s, Ik = Lk.e + kk.e, (ak = Zk.length) < (qk = jk.length) && (ik = Zk, Zk = jk, jk = ik, yk = ak, ak = qk, qk = yk), ik = [], Xk = yk = ak + qk; Xk--;) ik.push(0);
      for (Xk = qk; --Xk >= 0;) {
        for (Fk = 0, Tk = ak + Xk; Tk > Xk;) lk = ik[Tk] + jk[Xk] * Zk[Tk - Xk - 1] + Fk, ik[Tk--] = lk % wi | 0, Fk = lk / wi | 0;
        ik[Tk] = (ik[Tk] + Fk) % wi | 0
      }
      for (; !ik[--yk];) ik.pop();
      return Fk ? ++Ik : ik.shift(), kk.d = ik, kk.e = Ik, ai ? Oi(kk, tk.precision) : kk
    }, xi.toDecimalPlaces = xi.todp = function(kk, Fk) {
      var Ik = this,
        Xk = Ik.constructor;
      return Ik = new Xk(Ik), void 0 === kk ? Ik : (Ki(kk, 0, li), void 0 === Fk ? Fk = Xk.rounding : Ki(Fk, 0, 8), Oi(Ik, kk + zi(Ik) + 1, Fk))
    }, xi.toExponential = function(kk, Fk) {
      var Ik, Xk = this,
        Tk = Xk.constructor;
      return void 0 === kk ? Ik = Gi(Xk, !0) : (Ki(kk, 0, li), void 0 === Fk ? Fk = Tk.rounding : Ki(Fk, 0, 8), Ik = Gi(Xk = Oi(new Tk(Xk), kk + 1, Fk), !0, kk + 1)), Ik
    }, xi.toFixed = function(kk, Fk) {
      var Ik, Xk, Tk = this,
        ik = Tk.constructor;
      return void 0 === kk ? Gi(Tk) : (Ki(kk, 0, li), void 0 === Fk ? Fk = ik.rounding : Ki(Fk, 0, 8), Ik = Gi((Xk = Oi(new ik(Tk), kk + zi(Tk) + 1, Fk)).abs(), !1, kk + zi(Xk) + 1), Tk.isneg() && !Tk.isZero() ? "-" + Ik : Ik)
    }, xi.toInteger = xi.toint = function() {
      var kk = this,
        Fk = kk.constructor;
      return Oi(new Fk(kk), zi(kk) + 1, Fk.rounding)
    }, xi.toNumber = function() {
      return +this
    }, xi.toPower = xi.pow = function(kk) {
      var Fk, Ik, Xk, Tk, ik, yk, lk = this,
        ak = lk.constructor,
        qk = +(kk = new ak(kk));
      if (!kk.s) return new ak(yi);
      if (!(lk = new ak(lk)).s) {
        if (kk.s < 1) throw Error(qi + "Infinity");
        return lk
      }
      if (lk.eq(yi)) return lk;
      if (Xk = ak.precision, kk.eq(yi)) return Oi(lk, Xk);
      if (yk = (Fk = kk.e) >= (Ik = kk.d.length - 1), ik = lk.s, yk) {
        if ((Ik = qk < 0 ? -qk : qk) <= Hi) {
          for (Tk = new ak(yi), Fk = Math.ceil(Xk / 7 + 4), ai = !1; Ik % 2 && ui((Tk = Tk.times(lk)).d, Fk), 0 !== (Ik = Zi(Ik / 2));) ui((lk = lk.times(lk)).d, Fk);
          return ai = !0, kk.s < 0 ? new ak(yi).div(Tk) : Oi(Tk, Xk)
        }
      } else if (ik < 0) throw Error(qi + "NaN");
      return ik = ik < 0 && 1 & kk.d[Math.max(Fk, Ik)] ? -1 : 1, lk.s = 1, ai = !1, Tk = kk.times(vi(lk, Xk + 12)), ai = !0, (Tk = Vi(Tk)).s = ik, Tk
    }, xi.toPrecision = function(kk, Fk) {
      var Ik, Xk, Tk = this,
        ik = Tk.constructor;
      return void 0 === kk ? Xk = Gi(Tk, (Ik = zi(Tk)) <= ik.toExpNeg || Ik >= ik.toExpPos) : (Ki(kk, 1, li), void 0 === Fk ? Fk = ik.rounding : Ki(Fk, 0, 8), Xk = Gi(Tk = Oi(new ik(Tk), kk, Fk), kk <= (Ik = zi(Tk)) || Ik <= ik.toExpNeg, kk)), Xk
    }, xi.toSignificantDigits = xi.tosd = function(kk, Fk) {
      var Ik = this.constructor;
      return void 0 === kk ? (kk = Ik.precision, Fk = Ik.rounding) : (Ki(kk, 1, li), void 0 === Fk ? Fk = Ik.rounding : Ki(Fk, 0, 8)), Oi(new Ik(this), kk, Fk)
    }, xi.toString = xi.valueOf = xi.val = xi.toJSON = xi[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var kk = this,
        Fk = zi(kk),
        Ik = kk.constructor;
      return Gi(kk, Fk <= Ik.toExpNeg || Fk >= Ik.toExpPos)
    };
    var si = function() {
      function kk(kk, Fk) {
        var Ik, Xk = 0,
          Tk = kk.length;
        for (kk = kk.slice(); Tk--;) Ik = kk[Tk] * Fk + Xk, kk[Tk] = Ik % wi | 0, Xk = Ik / wi | 0;
        return Xk && kk.unshift(Xk), kk
      }

      function Fk(kk, Fk, Ik, Xk) {
        var Tk, ik;
        if (Ik != Xk) ik = Ik > Xk ? 1 : -1;
        else
          for (Tk = ik = 0; Tk < Ik; Tk++)
            if (kk[Tk] != Fk[Tk]) {
              ik = kk[Tk] > Fk[Tk] ? 1 : -1;
              break
            } return ik
      }

      function Ik(kk, Fk, Ik) {
        for (var Xk = 0; Ik--;) kk[Ik] -= Xk, Xk = kk[Ik] < Fk[Ik] ? 1 : 0, kk[Ik] = Xk * wi + kk[Ik] - Fk[Ik];
        for (; !kk[0] && kk.length > 1;) kk.shift()
      }
      return function(Xk, Tk, ik, yk) {
        var lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk = Xk.constructor,
          vk = Xk.s == Tk.s ? 1 : -1,
          Ek = Xk.d,
          Ok = Tk.d;
        if (!Xk.s) return new Sk(Xk);
        if (!Tk.s) throw Error(qi + "Division by zero");
        for (ak = Xk.e - Tk.e, Vk = Ok.length, Qk = Ek.length, ek = (jk = new Sk(vk)).d = [], qk = 0; Ok[qk] == (Ek[qk] || 0);) ++qk;
        if (Ok[qk] > (Ek[qk] || 0) && --ak, (xk = null == ik ? ik = Sk.precision : yk ? ik + (zi(Xk) - zi(Tk)) + 1 : ik) < 0) return new Sk(0);
        if (xk = xk / 7 + 2 | 0, qk = 0, 1 == Vk)
          for (Lk = 0, Ok = Ok[0], xk++;
            (qk < Qk || Lk) && xk--; qk++) Pk = Lk * wi + (Ek[qk] || 0), ek[qk] = Pk / Ok | 0, Lk = Pk % Ok | 0;
        else {
          for ((Lk = wi / (Ok[0] + 1) | 0) > 1 && (Ok = kk(Ok, Lk), Ek = kk(Ek, Lk), Vk = Ok.length, Qk = Ek.length), Kk = Vk, Hk = (wk = Ek.slice(0, Vk)).length; Hk < Vk;) wk[Hk++] = 0;
          (zk = Ok.slice()).unshift(0), sk = Ok[0], Ok[1] >= wi / 2 && ++sk;
          do {
            Lk = 0, (lk = Fk(Ok, wk, Vk, Hk)) < 0 ? (Jk = wk[0], Vk != Hk && (Jk = Jk * wi + (wk[1] || 0)), (Lk = Jk / sk | 0) > 1 ? (Lk >= wi && (Lk = wi - 1), 1 == (lk = Fk(tk = kk(Ok, Lk), wk, Zk = tk.length, Hk = wk.length)) && (Lk--, Ik(tk, Vk < Zk ? zk : Ok, Zk))) : (0 == Lk && (lk = Lk = 1), tk = Ok.slice()), (Zk = tk.length) < Hk && tk.unshift(0), Ik(wk, tk, Hk), -1 == lk && (lk = Fk(Ok, wk, Vk, Hk = wk.length)) < 1 && (Lk++, Ik(wk, Vk < Hk ? zk : Ok, Hk)), Hk = wk.length) : 0 === lk && (Lk++, wk = [0]), ek[qk++] = Lk, lk && wk[0] ? wk[Hk++] = Ek[Kk] || 0 : (wk = [Ek[Kk]], Hk = 1)
          } while ((Kk++ < Qk || void 0 !== wk[0]) && xk--)
        }
        return ek[0] || ek.shift(), jk.e = ak, Oi(jk, yk ? ik + zi(jk) + 1 : ik)
      }
    }();

    function Vi(kk, Fk) {
      var Ik, Xk, Tk, ik, yk, lk = 0,
        ak = 0,
        qk = kk.constructor,
        Lk = qk.precision;
      if (zi(kk) > 16) throw Error(ti + zi(kk));
      if (!kk.s) return new qk(yi);
      for (null == Fk ? (ai = !1, yk = Lk) : yk = Fk, ik = new qk(.03125); kk.abs().gte(.1);) kk = kk.times(ik), ak += 5;
      for (yk += Math.log(ji(2, ak)) / Math.LN10 * 2 + 5 | 0, Ik = Xk = Tk = new qk(yi), qk.precision = yk;;) {
        if (Xk = Oi(Xk.times(kk), yk), Ik = Ik.times(++lk), Qi((ik = Tk.plus(si(Xk, Ik, yk))).d).slice(0, yk) === Qi(Tk.d).slice(0, yk)) {
          for (; ak--;) Tk = Oi(Tk.times(Tk), yk);
          return qk.precision = Lk, null == Fk ? (ai = !0, Oi(Tk, Lk)) : Tk
        }
        Tk = ik
      }
    }

    function zi(kk) {
      for (var Fk = 7 * kk.e, Ik = kk.d[0]; Ik >= 10; Ik /= 10) Fk++;
      return Fk
    }

    function Si(kk, Fk, Ik) {
      if (Fk > kk.LN10.sd()) throw ai = !0, Ik && (kk.precision = Ik), Error(qi + "LN10 precision limit exceeded");
      return Oi(new kk(kk.LN10), Fk)
    }

    function oi(kk) {
      for (var Fk = ""; kk--;) Fk += "0";
      return Fk
    }

    function vi(kk, Fk) {
      var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk = 1,
        Zk = kk,
        jk = Zk.d,
        ek = Zk.constructor,
        wk = ek.precision;
      if (Zk.s < 1) throw Error(qi + (Zk.s ? "NaN" : "-Infinity"));
      if (Zk.eq(yi)) return new ek(0);
      if (null == Fk ? (ai = !1, qk = wk) : qk = Fk, Zk.eq(10)) return null == Fk && (ai = !0), Si(ek, qk);
      if (qk += 10, ek.precision = qk, Xk = (Ik = Qi(jk)).charAt(0), ik = zi(Zk), !(Math.abs(ik) < 15e14)) return ak = Si(ek, qk + 2, wk).times(ik + ""), Zk = vi(new ek(Xk + "." + Ik.slice(1)), qk - 10).plus(ak), ek.precision = wk, null == Fk ? (ai = !0, Oi(Zk, wk)) : Zk;
      for (; Xk < 7 && 1 != Xk || 1 == Xk && Ik.charAt(1) > 3;) Xk = (Ik = Qi((Zk = Zk.times(kk)).d)).charAt(0), tk++;
      for (ik = zi(Zk), Xk > 1 ? (Zk = new ek("0." + Ik), ik++) : Zk = new ek(Xk + "." + Ik.slice(1)), lk = yk = Zk = si(Zk.minus(yi), Zk.plus(yi), qk), Lk = Oi(Zk.times(Zk), qk), Tk = 3;;) {
        if (yk = Oi(yk.times(Lk), qk), Qi((ak = lk.plus(si(yk, new ek(Tk), qk))).d).slice(0, qk) === Qi(lk.d).slice(0, qk)) return lk = lk.times(2), 0 !== ik && (lk = lk.plus(Si(ek, qk + 2, wk).times(ik + ""))), lk = si(lk, new ek(tk), qk), ek.precision = wk, null == Fk ? (ai = !0, Oi(lk, wk)) : lk;
        lk = ak, Tk += 2
      }
    }

    function Ei(kk, Fk) {
      var Ik, Xk, Tk;
      for ((Ik = Fk.indexOf(".")) > -1 && (Fk = Fk.replace(".", "")), (Xk = Fk.search(/e/i)) > 0 ? (Ik < 0 && (Ik = Xk), Ik += +Fk.slice(Xk + 1), Fk = Fk.substring(0, Xk)) : Ik < 0 && (Ik = Fk.length), Xk = 0; 48 === Fk.charCodeAt(Xk);) ++Xk;
      for (Tk = Fk.length; 48 === Fk.charCodeAt(Tk - 1);) --Tk;
      if (Fk = Fk.slice(Xk, Tk)) {
        if (Tk -= Xk, Ik = Ik - Xk - 1, kk.e = Zi(Ik / 7), kk.d = [], Xk = (Ik + 1) % 7, Ik < 0 && (Xk += 7), Xk < Tk) {
          for (Xk && kk.d.push(+Fk.slice(0, Xk)), Tk -= 7; Xk < Tk;) kk.d.push(+Fk.slice(Xk, Xk += 7));
          Xk = 7 - (Fk = Fk.slice(Xk)).length
        } else Xk -= Tk;
        for (; Xk--;) Fk += "0";
        if (kk.d.push(+Fk), ai && (kk.e > Ji || kk.e < -Ji)) throw Error(ti + Ik)
      } else kk.s = 0, kk.e = 0, kk.d = [0];
      return kk
    }

    function Oi(kk, Fk, Ik) {
      var Xk, Tk, ik, yk, lk, ak, qk, Lk, tk = kk.d;
      for (yk = 1, ik = tk[0]; ik >= 10; ik /= 10) yk++;
      if ((Xk = Fk - yk) < 0) Xk += 7, Tk = Fk, qk = tk[Lk = 0];
      else {
        if ((Lk = Math.ceil((Xk + 1) / 7)) >= (ik = tk.length)) return kk;
        for (qk = ik = tk[Lk], yk = 1; ik >= 10; ik /= 10) yk++;
        Tk = (Xk %= 7) - 7 + yk
      }
      if (void 0 !== Ik && (lk = qk / (ik = ji(10, yk - Tk - 1)) % 10 | 0, ak = Fk < 0 || void 0 !== tk[Lk + 1] || qk % ik, ak = Ik < 4 ? (lk || ak) && (0 == Ik || Ik == (kk.s < 0 ? 3 : 2)) : lk > 5 || 5 == lk && (4 == Ik || ak || 6 == Ik && (Xk > 0 ? Tk > 0 ? qk / ji(10, yk - Tk) : 0 : tk[Lk - 1]) % 10 & 1 || Ik == (kk.s < 0 ? 8 : 7))), Fk < 1 || !tk[0]) return ak ? (ik = zi(kk), tk.length = 1, Fk = Fk - ik - 1, tk[0] = ji(10, (7 - Fk % 7) % 7), kk.e = Zi(-Fk / 7) || 0) : (tk.length = 1, tk[0] = kk.e = kk.s = 0), kk;
      if (0 == Xk ? (tk.length = Lk, ik = 1, Lk--) : (tk.length = Lk + 1, ik = ji(10, 7 - Xk), tk[Lk] = Tk > 0 ? (qk / ji(10, yk - Tk) % ji(10, Tk) | 0) * ik : 0), ak)
        for (;;) {
          if (0 == Lk) {
            (tk[0] += ik) == wi && (tk[0] = 1, ++kk.e);
            break
          }
          if (tk[Lk] += ik, tk[Lk] != wi) break;
          tk[Lk--] = 0, ik = 1
        }
      for (Xk = tk.length; 0 === tk[--Xk];) tk.pop();
      if (ai && (kk.e > Ji || kk.e < -Ji)) throw Error(ti + zi(kk));
      return kk
    }

    function ni(kk, Fk) {
      var Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk = kk.constructor,
        jk = Zk.precision;
      if (!kk.s || !Fk.s) return Fk.s ? Fk.s = -Fk.s : Fk = new Zk(kk), ai ? Oi(Fk, jk) : Fk;
      if (ak = kk.d, tk = Fk.d, Xk = Fk.e, qk = kk.e, ak = ak.slice(), yk = qk - Xk) {
        for ((Lk = yk < 0) ? (Ik = ak, yk = -yk, lk = tk.length) : (Ik = tk, Xk = qk, lk = ak.length), yk > (Tk = Math.max(Math.ceil(jk / 7), lk) + 2) && (yk = Tk, Ik.length = 1), Ik.reverse(), Tk = yk; Tk--;) Ik.push(0);
        Ik.reverse()
      } else {
        for ((Lk = (Tk = ak.length) < (lk = tk.length)) && (lk = Tk), Tk = 0; Tk < lk; Tk++)
          if (ak[Tk] != tk[Tk]) {
            Lk = ak[Tk] < tk[Tk];
            break
          } yk = 0
      }
      for (Lk && (Ik = ak, ak = tk, tk = Ik, Fk.s = -Fk.s), lk = ak.length, Tk = tk.length - lk; Tk > 0; --Tk) ak[lk++] = 0;
      for (Tk = tk.length; Tk > yk;) {
        if (ak[--Tk] < tk[Tk]) {
          for (ik = Tk; ik && 0 === ak[--ik];) ak[ik] = wi - 1;
          --ak[ik], ak[Tk] += wi
        }
        ak[Tk] -= tk[Tk]
      }
      for (; 0 === ak[--lk];) ak.pop();
      for (; 0 === ak[0]; ak.shift()) --Xk;
      return ak[0] ? (Fk.d = ak, Fk.e = Xk, ai ? Oi(Fk, jk) : Fk) : new Zk(0)
    }

    function Gi(kk, Fk, Ik) {
      var Xk, Tk = zi(kk),
        ik = Qi(kk.d),
        yk = ik.length;
      return Fk ? (Ik && (Xk = Ik - yk) > 0 ? ik = ik.charAt(0) + "." + ik.slice(1) + oi(Xk) : yk > 1 && (ik = ik.charAt(0) + "." + ik.slice(1)), ik = ik + (Tk < 0 ? "e" : "e+") + Tk) : Tk < 0 ? (ik = "0." + oi(-Tk - 1) + ik, Ik && (Xk = Ik - yk) > 0 && (ik += oi(Xk))) : Tk >= yk ? (ik += oi(Tk + 1 - yk), Ik && (Xk = Ik - Tk - 1) > 0 && (ik = ik + "." + oi(Xk))) : ((Xk = Tk + 1) < yk && (ik = ik.slice(0, Xk) + "." + ik.slice(Xk)), Ik && (Xk = Ik - yk) > 0 && (Tk + 1 === yk && (ik += "."), ik += oi(Xk))), kk.s < 0 ? "-" + ik : ik
    }

    function ui(kk, Fk) {
      if (kk.length > Fk) return kk.length = Fk, !0
    }

    function bi(kk) {
      if (!kk || "object" !== typeof kk) throw Error(qi + "Object expected");
      var Fk, Ik, Xk, Tk = ["precision", 1, li, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Fk = 0; Fk < Tk.length; Fk += 3)
        if (void 0 !== (Xk = kk[Ik = Tk[Fk]])) {
          if (!(Zi(Xk) === Xk && Xk >= Tk[Fk + 1] && Xk <= Tk[Fk + 2])) throw Error(Li + Ik + ": " + Xk);
          this[Ik] = Xk
        } if (void 0 !== (Xk = kk[Ik = "LN10"])) {
        if (Xk != Math.LN10) throw Error(Li + Ik + ": " + Xk);
        this[Ik] = new this(Xk)
      }
      return this
    }
    var Ri = function kk(Fk) {
      var Ik, Xk, Tk;

      function ik(kk) {
        var Fk = this;
        if (!(Fk instanceof ik)) return new ik(kk);
        if (Fk.constructor = ik, kk instanceof ik) return Fk.s = kk.s, Fk.e = kk.e, void(Fk.d = (kk = kk.d) ? kk.slice() : kk);
        if ("number" === typeof kk) {
          if (0 * kk !== 0) throw Error(Li + kk);
          if (kk > 0) Fk.s = 1;
          else {
            if (!(kk < 0)) return Fk.s = 0, Fk.e = 0, void(Fk.d = [0]);
            kk = -kk, Fk.s = -1
          }
          return kk === ~~kk && kk < 1e7 ? (Fk.e = 0, void(Fk.d = [kk])) : Ei(Fk, kk.toString())
        }
        if ("string" !== typeof kk) throw Error(Li + kk);
        if (45 === kk.charCodeAt(0) ? (kk = kk.slice(1), Fk.s = -1) : Fk.s = 1, !ei.test(kk)) throw Error(Li + kk);
        Ei(Fk, kk)
      }
      if (ik.prototype = xi, ik.ROUND_UP = 0, ik.ROUND_DOWN = 1, ik.ROUND_CEIL = 2, ik.ROUND_FLOOR = 3, ik.ROUND_HALF_UP = 4, ik.ROUND_HALF_DOWN = 5, ik.ROUND_HALF_EVEN = 6, ik.ROUND_HALF_CEIL = 7, ik.ROUND_HALF_FLOOR = 8, ik.clone = kk, ik.config = ik.set = bi, void 0 === Fk && (Fk = {}), Fk)
        for (Tk = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Ik = 0; Ik < Tk.length;) Fk.hasOwnProperty(Xk = Tk[Ik++]) || (Fk[Xk] = this[Xk]);
      return ik.config(Fk), ik
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    yi = new Ri(1);
    var Ui;
    ! function(kk) {
      kk.AED = "aed", kk.AFN = "afn", kk.ALL = "all", kk.AMD = "amd", kk.ANG = "ang", kk.AOA = "aoa", kk.ARS = "ars", kk.AUD = "aud", kk.AWG = "awg", kk.AZN = "azn", kk.BAM = "bam", kk.BBD = "bbd", kk.BDT = "bdt", kk.BGN = "bgn", kk.BHD = "bhd", kk.BIF = "bif", kk.BMD = "bmd", kk.BND = "bnd", kk.BOB = "bob", kk.BOV = "bov", kk.BRL = "brl", kk.BSD = "bsd", kk.BTN = "btn", kk.BWP = "bwp", kk.BYN = "byn", kk.BYR = "byr", kk.BZD = "bzd", kk.CAD = "cad", kk.CDF = "cdf", kk.CHE = "che", kk.CHF = "chf", kk.CHW = "chw", kk.CLF = "clf", kk.CLP = "clp", kk.CNY = "cny", kk.COP = "cop", kk.COU = "cou", kk.CRC = "crc", kk.CUC = "cuc", kk.CUP = "cup", kk.CVE = "cve", kk.CZK = "czk", kk.DJF = "djf", kk.DKK = "dkk", kk.DOP = "dop", kk.DZD = "dzd", kk.EGP = "egp", kk.ERN = "ern", kk.ETB = "etb", kk.EUR = "eur", kk.FJD = "fjd", kk.FKP = "fkp", kk.GBP = "gbp", kk.GEL = "gel", kk.GHS = "ghs", kk.GIP = "gip", kk.GMD = "gmd", kk.GNF = "gnf", kk.GTQ = "gtq", kk.GYD = "gyd", kk.HKD = "hkd", kk.HNL = "hnl", kk.HRK = "hrk", kk.HTG = "htg", kk.HUF = "huf", kk.IDR = "idr", kk.ILS = "ils", kk.INR = "inr", kk.IQD = "iqd", kk.IRR = "irr", kk.ISK = "isk", kk.JMD = "jmd", kk.JOD = "jod", kk.JPY = "jpy", kk.KES = "kes", kk.KGS = "kgs", kk.KHR = "khr", kk.KMF = "kmf", kk.KPW = "kpw", kk.KRW = "krw", kk.KWD = "kwd", kk.KYD = "kyd", kk.KZT = "kzt", kk.LAK = "lak", kk.LBP = "lbp", kk.LKR = "lkr", kk.LRD = "lrd", kk.LSL = "lsl", kk.LTL = "ltl", kk.LVL = "lvl", kk.LYD = "lyd", kk.MAD = "mad", kk.MDL = "mdl", kk.MGA = "mga", kk.MKD = "mkd", kk.MMK = "mmk", kk.MNT = "mnt", kk.MOP = "mop", kk.MRO = "mro", kk.MUR = "mur", kk.MVR = "mvr", kk.MWK = "mwk", kk.MXN = "mxn", kk.MXV = "mxv", kk.MYR = "myr", kk.MZN = "mzn", kk.NAD = "nad", kk.NGN = "ngn", kk.NIO = "nio", kk.NOK = "nok", kk.NPR = "npr", kk.NZD = "nzd", kk.OMR = "omr", kk.PAB = "pab", kk.PEN = "pen", kk.PGK = "pgk", kk.PHP = "php", kk.PKR = "pkr", kk.PLN = "pln", kk.PYG = "pyg", kk.QAR = "qar", kk.RON = "ron", kk.RSD = "rsd", kk.RUB = "rub", kk.RWF = "rwf", kk.SAR = "sar", kk.SBD = "sbd", kk.SCR = "scr", kk.SDG = "sdg", kk.SEK = "sek", kk.SGD = "sgd", kk.SHP = "shp", kk.SLL = "sll", kk.SOS = "sos", kk.SRD = "srd", kk.SSP = "ssp", kk.STD = "std", kk.SVC = "svc", kk.SYP = "syp", kk.SZL = "szl", kk.THB = "thb", kk.TJS = "tjs", kk.TMT = "tmt", kk.TND = "tnd", kk.TOP = "top", kk.TRY = "try", kk.TTD = "ttd", kk.TWD = "twd", kk.TZS = "tzs", kk.UAH = "uah", kk.UGX = "ugx", kk.USD = "usd", kk.USN = "usn", kk.USS = "uss", kk.UYI = "uyi", kk.UYU = "uyu", kk.UZS = "uzs", kk.VEF = "vef", kk.VND = "vnd", kk.VUV = "vuv", kk.WST = "wst", kk.XAF = "xaf", kk.XAG = "xag", kk.XAU = "xau", kk.XBA = "xba", kk.XBB = "xbb", kk.XBC = "xbc", kk.XBD = "xbd", kk.XCD = "xcd", kk.XDR = "xdr", kk.XFU = "xfu", kk.XOF = "xof", kk.XPD = "xpd", kk.XPF = "xpf", kk.XPT = "xpt", kk.XSU = "xsu", kk.XTS = "xts", kk.XUA = "xua", kk.YER = "yer", kk.ZAR = "zar", kk.ZMW = "zmw", kk.ZWL = "zwl"
    }(Ui || (Ui = {}));
    Ui.AED, Ui.AFN, Ui.ALL, Ui.AMD, Ui.ANG, Ui.AOA, Ui.ARS, Ui.AUD, Ui.AWG, Ui.AZN, Ui.BAM, Ui.BBD, Ui.BDT, Ui.BGN, Ui.BHD, Ui.BIF, Ui.BMD, Ui.BND, Ui.BOB, Ui.BOV, Ui.BRL, Ui.BSD, Ui.BTN, Ui.BWP, Ui.BYR, Ui.BYN, Ui.BZD, Ui.CAD, Ui.CDF, Ui.CHE, Ui.CHF, Ui.CHW, Ui.CLF, Ui.CLP, Ui.CNY, Ui.COP, Ui.COU, Ui.CRC, Ui.CUC, Ui.CUP, Ui.CVE, Ui.CZK, Ui.DJF, Ui.DKK, Ui.DOP, Ui.DZD, Ui.EGP, Ui.ERN, Ui.ETB, Ui.EUR, Ui.FJD, Ui.FKP, Ui.GBP, Ui.GEL, Ui.GHS, Ui.GIP, Ui.GMD, Ui.GNF, Ui.GTQ, Ui.GYD, Ui.HKD, Ui.HNL, Ui.HRK, Ui.HTG, Ui.HUF, Ui.IDR, Ui.ILS, Ui.INR, Ui.IQD, Ui.IRR, Ui.ISK, Ui.JMD, Ui.JOD, Ui.JPY, Ui.KES, Ui.KGS, Ui.KHR, Ui.KMF, Ui.KPW, Ui.KRW, Ui.KWD, Ui.KYD, Ui.KZT, Ui.LAK, Ui.LBP, Ui.LKR, Ui.LRD, Ui.LSL, Ui.LTL, Ui.LVL, Ui.LYD, Ui.MAD, Ui.MDL, Ui.MGA, Ui.MKD, Ui.MMK, Ui.MNT, Ui.MOP, Ui.MRO, Ui.MUR, Ui.MVR, Ui.MWK, Ui.MXN, Ui.MXV, Ui.MYR, Ui.MZN, Ui.NAD, Ui.NGN, Ui.NIO, Ui.NOK, Ui.NPR, Ui.NZD, Ui.OMR, Ui.PAB, Ui.PEN, Ui.PGK, Ui.PHP, Ui.PKR, Ui.PLN, Ui.PYG, Ui.QAR, Ui.RON, Ui.RSD, Ui.RUB, Ui.RWF, Ui.SAR, Ui.SBD, Ui.SCR, Ui.SDG, Ui.SEK, Ui.SGD, Ui.SHP, Ui.SLL, Ui.SOS, Ui.SRD, Ui.SSP, Ui.STD, Ui.SVC, Ui.SYP, Ui.SZL, Ui.THB, Ui.TJS, Ui.TMT, Ui.TND, Ui.TOP, Ui.TRY, Ui.TTD, Ui.TWD, Ui.TZS, Ui.UAH, Ui.UGX, Ui.USD, Ui.USN, Ui.USS, Ui.UYI, Ui.UYU, Ui.UZS, Ui.VEF, Ui.VND, Ui.VUV, Ui.WST, Ui.XAF, Ui.XAG, Ui.XAU, Ui.XBA, Ui.XBB, Ui.XBC, Ui.XBD, Ui.XCD, Ui.XDR, Ui.XFU, Ui.XOF, Ui.XPD, Ui.XPF, Ui.XPT, Ui.XSU, Ui.XTS, Ui.XUA, Ui.YER, Ui.ZAR, Ui.ZMW, Ui.ZWL;
    var Ci = {
      exports: {}
    };
    ! function(kk, Fk) {
      var Ik = "__lodash_hash_undefined__",
        Xk = 9007199254740991,
        ik = "[object Arguments]",
        yk = "[object Array]",
        lk = "[object Boolean]",
        ak = "[object Date]",
        qk = "[object Error]",
        Lk = "[object Function]",
        tk = "[object Map]",
        Zk = "[object Number]",
        jk = "[object Object]",
        ek = "[object Promise]",
        wk = "[object RegExp]",
        Hk = "[object Set]",
        Jk = "[object String]",
        xk = "[object Symbol]",
        Pk = "[object WeakMap]",
        Kk = "[object ArrayBuffer]",
        Qk = "[object DataView]",
        sk = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Vk = /^\w*$/,
        zk = /^\./,
        Sk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        vk = /\\(\\)?/g,
        Ek = /^\[object .+?Constructor\]$/,
        Ok = /^(?:0|[1-9]\d*)$/,
        nk = {};
      nk["[object Float32Array]"] = nk["[object Float64Array]"] = nk["[object Int8Array]"] = nk["[object Int16Array]"] = nk["[object Int32Array]"] = nk["[object Uint8Array]"] = nk["[object Uint8ClampedArray]"] = nk["[object Uint16Array]"] = nk["[object Uint32Array]"] = !0, nk[ik] = nk[yk] = nk[Kk] = nk[lk] = nk[Qk] = nk[ak] = nk[qk] = nk[Lk] = nk[tk] = nk[Zk] = nk[jk] = nk[wk] = nk[Hk] = nk[Jk] = nk[Pk] = !1;
      var Gk = "object" == typeof Tk && Tk && Tk.Object === Object && Tk,
        pk = "object" == typeof self && self && self.Object === Object && self,
        uk = Gk || pk || Function("return this")(),
        bk = Fk && !Fk.nodeType && Fk,
        Rk = bk && kk && !kk.nodeType && kk,
        Uk = Rk && Rk.exports === bk && Gk.process,
        Ck = function() {
          try {
            return Uk && Uk.binding("util")
          } catch (kk) {}
        }(),
        Nk = Ck && Ck.isTypedArray;

      function ck(kk, Fk) {
        for (var Ik = -1, Xk = kk ? kk.length : 0; ++Ik < Xk && !1 !== Fk(kk[Ik], Ik, kk););
        return kk
      }

      function Wk(kk, Fk) {
        for (var Ik = -1, Xk = kk ? kk.length : 0; ++Ik < Xk;)
          if (Fk(kk[Ik], Ik, kk)) return !0;
        return !1
      }

      function fk(kk) {
        var Fk = !1;
        if (null != kk && "function" != typeof kk.toString) try {
          Fk = !!(kk + "")
        } catch (Ik) {}
        return Fk
      }

      function Bk(kk) {
        var Fk = -1,
          Ik = Array(kk.size);
        return kk.forEach((function(kk, Xk) {
          Ik[++Fk] = [Xk, kk]
        })), Ik
      }

      function dk(kk, Fk) {
        return function(Ik) {
          return kk(Fk(Ik))
        }
      }

      function Yk(kk) {
        var Fk = -1,
          Ik = Array(kk.size);
        return kk.forEach((function(kk) {
          Ik[++Fk] = kk
        })), Ik
      }
      var Ak = Array.prototype,
        gk = Function.prototype,
        mk = Object.prototype,
        hk = uk["__core-js_shared__"],
        rk = function() {
          var kk = /[^.]+$/.exec(hk && hk.keys && hk.keys.IE_PROTO || "");
          return kk ? "Symbol(src)_1." + kk : ""
        }(),
        Dk = gk.toString,
        Mk = mk.hasOwnProperty,
        kF = mk.toString,
        FF = RegExp("^" + Dk.call(Mk).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        IF = uk.Symbol,
        XF = uk.Uint8Array,
        TF = dk(Object.getPrototypeOf, Object),
        iF = Object.create,
        yF = mk.propertyIsEnumerable,
        lF = Ak.splice,
        aF = dk(Object.keys, Object),
        qF = BF(uk, "DataView"),
        LF = BF(uk, "Map"),
        tF = BF(uk, "Promise"),
        ZF = BF(uk, "Set"),
        jF = BF(uk, "WeakMap"),
        eF = BF(Object, "create"),
        wF = DF(qF),
        HF = DF(LF),
        JF = DF(tF),
        xF = DF(ZF),
        PF = DF(jF),
        KF = IF ? IF.prototype : void 0,
        QF = KF ? KF.valueOf : void 0,
        sF = KF ? KF.toString : void 0;

      function VF(kk) {
        var Fk = -1,
          Ik = kk ? kk.length : 0;
        for (this.clear(); ++Fk < Ik;) {
          var Xk = kk[Fk];
          this.set(Xk[0], Xk[1])
        }
      }

      function zF(kk) {
        var Fk = -1,
          Ik = kk ? kk.length : 0;
        for (this.clear(); ++Fk < Ik;) {
          var Xk = kk[Fk];
          this.set(Xk[0], Xk[1])
        }
      }

      function SF(kk) {
        var Fk = -1,
          Ik = kk ? kk.length : 0;
        for (this.clear(); ++Fk < Ik;) {
          var Xk = kk[Fk];
          this.set(Xk[0], Xk[1])
        }
      }

      function oF(kk) {
        var Fk = -1,
          Ik = kk ? kk.length : 0;
        for (this.__data__ = new SF; ++Fk < Ik;) this.add(kk[Fk])
      }

      function vF(kk) {
        this.__data__ = new zF(kk)
      }

      function EF(kk, Fk) {
        var Ik = II(kk) || FI(kk) ? function(kk, Fk) {
            for (var Ik = -1, Xk = Array(kk); ++Ik < kk;) Xk[Ik] = Fk(Ik);
            return Xk
          }(kk.length, String) : [],
          Xk = Ik.length,
          Tk = !!Xk;
        for (var ik in kk) !Fk && !Mk.call(kk, ik) || Tk && ("length" == ik || YF(ik, Xk)) || Ik.push(ik);
        return Ik
      }

      function OF(kk, Fk) {
        for (var Ik = kk.length; Ik--;)
          if (kI(kk[Ik][0], Fk)) return Ik;
        return -1
      }
      VF.prototype.clear = function() {
        this.__data__ = eF ? eF(null) : {}
      }, VF.prototype.delete = function(kk) {
        return this.has(kk) && delete this.__data__[kk]
      }, VF.prototype.get = function(kk) {
        var Fk = this.__data__;
        if (eF) {
          var Xk = Fk[kk];
          return Xk === Ik ? void 0 : Xk
        }
        return Mk.call(Fk, kk) ? Fk[kk] : void 0
      }, VF.prototype.has = function(kk) {
        var Fk = this.__data__;
        return eF ? void 0 !== Fk[kk] : Mk.call(Fk, kk)
      }, VF.prototype.set = function(kk, Fk) {
        return this.__data__[kk] = eF && void 0 === Fk ? Ik : Fk, this
      }, zF.prototype.clear = function() {
        this.__data__ = []
      }, zF.prototype.delete = function(kk) {
        var Fk = this.__data__,
          Ik = OF(Fk, kk);
        return !(Ik < 0) && (Ik == Fk.length - 1 ? Fk.pop() : lF.call(Fk, Ik, 1), !0)
      }, zF.prototype.get = function(kk) {
        var Fk = this.__data__,
          Ik = OF(Fk, kk);
        return Ik < 0 ? void 0 : Fk[Ik][1]
      }, zF.prototype.has = function(kk) {
        return OF(this.__data__, kk) > -1
      }, zF.prototype.set = function(kk, Fk) {
        var Ik = this.__data__,
          Xk = OF(Ik, kk);
        return Xk < 0 ? Ik.push([kk, Fk]) : Ik[Xk][1] = Fk, this
      }, SF.prototype.clear = function() {
        this.__data__ = {
          hash: new VF,
          map: new(LF || zF),
          string: new VF
        }
      }, SF.prototype.delete = function(kk) {
        return fF(this, kk).delete(kk)
      }, SF.prototype.get = function(kk) {
        return fF(this, kk).get(kk)
      }, SF.prototype.has = function(kk) {
        return fF(this, kk).has(kk)
      }, SF.prototype.set = function(kk, Fk) {
        return fF(this, kk).set(kk, Fk), this
      }, oF.prototype.add = oF.prototype.push = function(kk) {
        return this.__data__.set(kk, Ik), this
      }, oF.prototype.has = function(kk) {
        return this.__data__.has(kk)
      }, vF.prototype.clear = function() {
        this.__data__ = new zF
      }, vF.prototype.delete = function(kk) {
        return this.__data__.delete(kk)
      }, vF.prototype.get = function(kk) {
        return this.__data__.get(kk)
      }, vF.prototype.has = function(kk) {
        return this.__data__.has(kk)
      }, vF.prototype.set = function(kk, Fk) {
        var Ik = this.__data__;
        if (Ik instanceof zF) {
          var Xk = Ik.__data__;
          if (!LF || Xk.length < 199) return Xk.push([kk, Fk]), this;
          Ik = this.__data__ = new SF(Xk)
        }
        return Ik.set(kk, Fk), this
      };
      var nF, GF = function(kk, Fk, Ik) {
        for (var Xk = -1, Tk = Object(kk), ik = Ik(kk), yk = ik.length; yk--;) {
          var lk = ik[nF ? yk : ++Xk];
          if (!1 === Fk(Tk[lk], lk, Tk)) break
        }
        return kk
      };

      function pF(kk, Fk) {
        return kk && GF(kk, Fk, tI)
      }

      function uF(kk, Fk) {
        for (var Ik = 0, Xk = (Fk = AF(Fk, kk) ? [Fk] : cF(Fk)).length; null != kk && Ik < Xk;) kk = kk[rF(Fk[Ik++])];
        return Ik && Ik == Xk ? kk : void 0
      }

      function bF(kk, Fk) {
        return null != kk && Fk in Object(kk)
      }

      function RF(kk, Fk, Ik, Xk, Tk) {
        return kk === Fk || (null == kk || null == Fk || !yI(kk) && !lI(Fk) ? kk !== kk && Fk !== Fk : function(kk, Fk, Ik, Xk, Tk, Lk) {
          var ek = II(kk),
            Pk = II(Fk),
            sk = yk,
            Vk = yk;
          ek || (sk = (sk = dF(kk)) == ik ? jk : sk);
          Pk || (Vk = (Vk = dF(Fk)) == ik ? jk : Vk);
          var zk = sk == jk && !fk(kk),
            Sk = Vk == jk && !fk(Fk),
            vk = sk == Vk;
          if (vk && !zk) return Lk || (Lk = new vF), ek || LI(kk) ? WF(kk, Fk, Ik, Xk, Tk, Lk) : function(kk, Fk, Ik, Xk, Tk, ik, yk) {
            switch (Ik) {
              case Qk:
                if (kk.byteLength != Fk.byteLength || kk.byteOffset != Fk.byteOffset) return !1;
                kk = kk.buffer, Fk = Fk.buffer;
              case Kk:
                return !(kk.byteLength != Fk.byteLength || !Xk(new XF(kk), new XF(Fk)));
              case lk:
              case ak:
              case Zk:
                return kI(+kk, +Fk);
              case qk:
                return kk.name == Fk.name && kk.message == Fk.message;
              case wk:
              case Jk:
                return kk == Fk + "";
              case tk:
                var Lk = Bk;
              case Hk:
                var jk = 2 & ik;
                if (Lk || (Lk = Yk), kk.size != Fk.size && !jk) return !1;
                var ek = yk.get(kk);
                if (ek) return ek == Fk;
                ik |= 1, yk.set(kk, Fk);
                var Pk = WF(Lk(kk), Lk(Fk), Xk, Tk, ik, yk);
                return yk.delete(kk), Pk;
              case xk:
                if (QF) return QF.call(kk) == QF.call(Fk)
            }
            return !1
          }(kk, Fk, sk, Ik, Xk, Tk, Lk);
          if (!(2 & Tk)) {
            var Ek = zk && Mk.call(kk, "__wrapped__"),
              Ok = Sk && Mk.call(Fk, "__wrapped__");
            if (Ek || Ok) {
              var nk = Ek ? kk.value() : kk,
                Gk = Ok ? Fk.value() : Fk;
              return Lk || (Lk = new vF), Ik(nk, Gk, Xk, Tk, Lk)
            }
          }
          if (!vk) return !1;
          return Lk || (Lk = new vF),
            function(kk, Fk, Ik, Xk, Tk, ik) {
              var yk = 2 & Tk,
                lk = tI(kk),
                ak = lk.length,
                qk = tI(Fk),
                Lk = qk.length;
              if (ak != Lk && !yk) return !1;
              var tk = ak;
              for (; tk--;) {
                var Zk = lk[tk];
                if (!(yk ? Zk in Fk : Mk.call(Fk, Zk))) return !1
              }
              var jk = ik.get(kk);
              if (jk && ik.get(Fk)) return jk == Fk;
              var ek = !0;
              ik.set(kk, Fk), ik.set(Fk, kk);
              var wk = yk;
              for (; ++tk < ak;) {
                var Hk = kk[Zk = lk[tk]],
                  Jk = Fk[Zk];
                if (Xk) var xk = yk ? Xk(Jk, Hk, Zk, Fk, kk, ik) : Xk(Hk, Jk, Zk, kk, Fk, ik);
                if (!(void 0 === xk ? Hk === Jk || Ik(Hk, Jk, Xk, Tk, ik) : xk)) {
                  ek = !1;
                  break
                }
                wk || (wk = "constructor" == Zk)
              }
              if (ek && !wk) {
                var Pk = kk.constructor,
                  Kk = Fk.constructor;
                Pk == Kk || !("constructor" in kk) || !("constructor" in Fk) || "function" == typeof Pk && Pk instanceof Pk && "function" == typeof Kk && Kk instanceof Kk || (ek = !1)
              }
              return ik.delete(kk), ik.delete(Fk), ek
            }(kk, Fk, Ik, Xk, Tk, Lk)
        }(kk, Fk, RF, Ik, Xk, Tk))
      }

      function UF(kk) {
        return !(!yI(kk) || (Fk = kk, rk && rk in Fk)) && (TI(kk) || fk(kk) ? FF : Ek).test(DF(kk));
        var Fk
      }

      function CF(kk) {
        return "function" == typeof kk ? kk : null == kk ? ZI : "object" == typeof kk ? II(kk) ? function(kk, Fk) {
          if (AF(kk) && gF(Fk)) return mF(rF(kk), Fk);
          return function(Ik) {
            var Xk = function(kk, Fk, Ik) {
              var Xk = null == kk ? void 0 : uF(kk, Fk);
              return void 0 === Xk ? Ik : Xk
            }(Ik, kk);
            return void 0 === Xk && Xk === Fk ? function(kk, Fk) {
              return null != kk && function(kk, Fk, Ik) {
                Fk = AF(Fk, kk) ? [Fk] : cF(Fk);
                var Xk, Tk = -1,
                  ik = Fk.length;
                for (; ++Tk < ik;) {
                  var yk = rF(Fk[Tk]);
                  if (!(Xk = null != kk && Ik(kk, yk))) break;
                  kk = kk[yk]
                }
                if (Xk) return Xk;
                ik = kk ? kk.length : 0;
                return !!ik && iI(ik) && YF(yk, ik) && (II(kk) || FI(kk))
              }(kk, Fk, bF)
            }(Ik, kk) : RF(Fk, Xk, void 0, 3)
          }
        }(kk[0], kk[1]) : function(kk) {
          var Fk = function(kk) {
            var Fk = tI(kk),
              Ik = Fk.length;
            for (; Ik--;) {
              var Xk = Fk[Ik],
                Tk = kk[Xk];
              Fk[Ik] = [Xk, Tk, gF(Tk)]
            }
            return Fk
          }(kk);
          if (1 == Fk.length && Fk[0][2]) return mF(Fk[0][0], Fk[0][1]);
          return function(Ik) {
            return Ik === kk || function(kk, Fk, Ik, Xk) {
              var Tk = Ik.length,
                ik = Tk,
                yk = !Xk;
              if (null == kk) return !ik;
              for (kk = Object(kk); Tk--;) {
                var lk = Ik[Tk];
                if (yk && lk[2] ? lk[1] !== kk[lk[0]] : !(lk[0] in kk)) return !1
              }
              for (; ++Tk < ik;) {
                var ak = (lk = Ik[Tk])[0],
                  qk = kk[ak],
                  Lk = lk[1];
                if (yk && lk[2]) {
                  if (void 0 === qk && !(ak in kk)) return !1
                } else {
                  var tk = new vF;
                  if (Xk) var Zk = Xk(qk, Lk, ak, kk, Fk, tk);
                  if (!(void 0 === Zk ? RF(Lk, qk, Xk, 3, tk) : Zk)) return !1
                }
              }
              return !0
            }(Ik, kk, Fk)
          }
        }(kk) : function(kk) {
          return AF(kk) ? (Fk = rF(kk), function(kk) {
            return null == kk ? void 0 : kk[Fk]
          }) : function(kk) {
            return function(Fk) {
              return uF(Fk, kk)
            }
          }(kk);
          var Fk
        }(kk)
      }

      function NF(kk) {
        if (! function(kk) {
            var Fk = kk && kk.constructor,
              Ik = "function" == typeof Fk && Fk.prototype || mk;
            return kk === Ik
          }(kk)) return aF(kk);
        var Fk = [];
        for (var Ik in Object(kk)) Mk.call(kk, Ik) && "constructor" != Ik && Fk.push(Ik);
        return Fk
      }

      function cF(kk) {
        return II(kk) ? kk : hF(kk)
      }

      function WF(kk, Fk, Ik, Xk, Tk, ik) {
        var yk = 2 & Tk,
          lk = kk.length,
          ak = Fk.length;
        if (lk != ak && !(yk && ak > lk)) return !1;
        var qk = ik.get(kk);
        if (qk && ik.get(Fk)) return qk == Fk;
        var Lk = -1,
          tk = !0,
          Zk = 1 & Tk ? new oF : void 0;
        for (ik.set(kk, Fk), ik.set(Fk, kk); ++Lk < lk;) {
          var jk = kk[Lk],
            ek = Fk[Lk];
          if (Xk) var wk = yk ? Xk(ek, jk, Lk, Fk, kk, ik) : Xk(jk, ek, Lk, kk, Fk, ik);
          if (void 0 !== wk) {
            if (wk) continue;
            tk = !1;
            break
          }
          if (Zk) {
            if (!Wk(Fk, (function(kk, Fk) {
                if (!Zk.has(Fk) && (jk === kk || Ik(jk, kk, Xk, Tk, ik))) return Zk.add(Fk)
              }))) {
              tk = !1;
              break
            }
          } else if (jk !== ek && !Ik(jk, ek, Xk, Tk, ik)) {
            tk = !1;
            break
          }
        }
        return ik.delete(kk), ik.delete(Fk), tk
      }

      function fF(kk, Fk) {
        var Ik = kk.__data__;
        return function(kk) {
          var Fk = typeof kk;
          return "string" == Fk || "number" == Fk || "symbol" == Fk || "boolean" == Fk ? "__proto__" !== kk : null === kk
        }(Fk) ? Ik["string" == typeof Fk ? "string" : "hash"] : Ik.map
      }

      function BF(kk, Fk) {
        var Ik = function(kk, Fk) {
          return null == kk ? void 0 : kk[Fk]
        }(kk, Fk);
        return UF(Ik) ? Ik : void 0
      }
      var dF = function(kk) {
        return kF.call(kk)
      };

      function YF(kk, Fk) {
        return !!(Fk = null == Fk ? Xk : Fk) && ("number" == typeof kk || Ok.test(kk)) && kk > -1 && kk % 1 == 0 && kk < Fk
      }

      function AF(kk, Fk) {
        if (II(kk)) return !1;
        var Ik = typeof kk;
        return !("number" != Ik && "symbol" != Ik && "boolean" != Ik && null != kk && !aI(kk)) || (Vk.test(kk) || !sk.test(kk) || null != Fk && kk in Object(Fk))
      }

      function gF(kk) {
        return kk === kk && !yI(kk)
      }

      function mF(kk, Fk) {
        return function(Ik) {
          return null != Ik && (Ik[kk] === Fk && (void 0 !== Fk || kk in Object(Ik)))
        }
      }(qF && dF(new qF(new ArrayBuffer(1))) != Qk || LF && dF(new LF) != tk || tF && dF(tF.resolve()) != ek || ZF && dF(new ZF) != Hk || jF && dF(new jF) != Pk) && (dF = function(kk) {
        var Fk = kF.call(kk),
          Ik = Fk == jk ? kk.constructor : void 0,
          Xk = Ik ? DF(Ik) : void 0;
        if (Xk) switch (Xk) {
          case wF:
            return Qk;
          case HF:
            return tk;
          case JF:
            return ek;
          case xF:
            return Hk;
          case PF:
            return Pk
        }
        return Fk
      });
      var hF = MF((function(kk) {
        var Fk;
        kk = null == (Fk = kk) ? "" : function(kk) {
          if ("string" == typeof kk) return kk;
          if (aI(kk)) return sF ? sF.call(kk) : "";
          var Fk = kk + "";
          return "0" == Fk && 1 / kk == -1 / 0 ? "-0" : Fk
        }(Fk);
        var Ik = [];
        return zk.test(kk) && Ik.push(""), kk.replace(Sk, (function(kk, Fk, Xk, Tk) {
          Ik.push(Xk ? Tk.replace(vk, "$1") : Fk || kk)
        })), Ik
      }));

      function rF(kk) {
        if ("string" == typeof kk || aI(kk)) return kk;
        var Fk = kk + "";
        return "0" == Fk && 1 / kk == -1 / 0 ? "-0" : Fk
      }

      function DF(kk) {
        if (null != kk) {
          try {
            return Dk.call(kk)
          } catch (Fk) {}
          try {
            return kk + ""
          } catch (Fk) {}
        }
        return ""
      }

      function MF(kk, Fk) {
        if ("function" != typeof kk || Fk && "function" != typeof Fk) throw new TypeError("Expected a function");
        var Ik = function() {
          var Xk = arguments,
            Tk = Fk ? Fk.apply(this, Xk) : Xk[0],
            ik = Ik.cache;
          if (ik.has(Tk)) return ik.get(Tk);
          var yk = kk.apply(this, Xk);
          return Ik.cache = ik.set(Tk, yk), yk
        };
        return Ik.cache = new(MF.Cache || SF), Ik
      }

      function kI(kk, Fk) {
        return kk === Fk || kk !== kk && Fk !== Fk
      }

      function FI(kk) {
        return function(kk) {
          return lI(kk) && XI(kk)
        }(kk) && Mk.call(kk, "callee") && (!yF.call(kk, "callee") || kF.call(kk) == ik)
      }
      MF.Cache = SF;
      var II = Array.isArray;

      function XI(kk) {
        return null != kk && iI(kk.length) && !TI(kk)
      }

      function TI(kk) {
        var Fk = yI(kk) ? kF.call(kk) : "";
        return Fk == Lk || "[object GeneratorFunction]" == Fk
      }

      function iI(kk) {
        return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= Xk
      }

      function yI(kk) {
        var Fk = typeof kk;
        return !!kk && ("object" == Fk || "function" == Fk)
      }

      function lI(kk) {
        return !!kk && "object" == typeof kk
      }

      function aI(kk) {
        return "symbol" == typeof kk || lI(kk) && kF.call(kk) == xk
      }
      var qI, LI = Nk ? (qI = Nk, function(kk) {
        return qI(kk)
      }) : function(kk) {
        return lI(kk) && iI(kk.length) && !!nk[kF.call(kk)]
      };

      function tI(kk) {
        return XI(kk) ? EF(kk) : NF(kk)
      }

      function ZI(kk) {
        return kk
      }
      kk.exports = function(kk, Fk, Ik) {
        var Xk, Tk = II(kk) || LI(kk);
        if (Fk = CF(Fk), null == Ik)
          if (Tk || yI(kk)) {
            var ik = kk.constructor;
            Ik = Tk ? II(kk) ? new ik : [] : TI(ik) ? yI(Xk = TF(kk)) ? iF(Xk) : {} : {}
          } else Ik = {};
        return (Tk ? ck : pF)(kk, (function(kk, Xk, Tk) {
          return Fk(Ik, kk, Xk, Tk)
        })), Ik
      }
    }(Ci, Ci.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      k: Ni
    } = Xk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);