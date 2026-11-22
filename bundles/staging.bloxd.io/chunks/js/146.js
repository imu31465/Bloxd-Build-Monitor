export const id = 146;
export const ids = [146];
export const modules = {
  7919: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mS,
      f: () => ai
    });
    var Dk = {};
    ik.r(Dk), ik.d(Dk, {
      c: () => bD,
      f: () => mD,
      d: () => PD,
      i: () => Ri,
      l: () => Ni,
      o: () => ID,
      q: () => eD,
      t: () => vD,
      x: () => sD,
      z: () => QD,
      C: () => Ji,
      E: () => VD,
      G: () => qD,
      K: () => zD,
      P: () => kD,
      L: () => fD,
      Q: () => uD,
      R: () => FD
    });
    var fk = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Sk(kk) {
      return kk && kk.__esModule && Object.prototype.hasOwnProperty.call(kk, "default") ? kk.default : kk
    }
    var bk = {
      exports: {}
    };
    ! function(kk) {
      var ek = Object.prototype.hasOwnProperty,
        ik = "~";

      function Dk() {}

      function fk(kk, ek, ik) {
        this.sU = kk, this.context = ek, this.once = ik || !1
      }

      function Sk(kk, ek, Dk, Sk, bk) {
        if ("function" !== typeof Dk) throw new TypeError("The listener must be a function");
        var rk = new fk(Dk, Sk || kk, bk),
          Pk = ik ? ik + ek : ek;
        return kk._events[Pk] ? kk._events[Pk].sU ? kk._events[Pk] = [kk._events[Pk], rk] : kk._events[Pk].push(rk) : (kk._events[Pk] = rk, kk._eventsCount++), kk
      }

      function bk(kk, ek) {
        0 === --kk._eventsCount ? kk._events = new Dk : delete kk._events[ek]
      }

      function rk() {
        this._events = new Dk, this._eventsCount = 0
      }
      Object.create && (Dk.prototype = Object.create(null), (new Dk).__proto__ || (ik = !1)), rk.prototype.eventNames = function() {
        var kk, Dk, fk = [];
        if (0 === this._eventsCount) return fk;
        for (Dk in kk = this._events) ek.call(kk, Dk) && fk.push(ik ? Dk.slice(1) : Dk);
        return Object.getOwnPropertySymbols ? fk.concat(Object.getOwnPropertySymbols(kk)) : fk
      }, rk.prototype.listeners = function(kk) {
        var ek = ik ? ik + kk : kk,
          Dk = this._events[ek];
        if (!Dk) return [];
        if (Dk.sU) return [Dk.sU];
        for (var fk = 0, Sk = Dk.length, bk = new Array(Sk); fk < Sk; fk++) bk[fk] = Dk[fk].sU;
        return bk
      }, rk.prototype.listenerCount = function(kk) {
        var ek = ik ? ik + kk : kk,
          Dk = this._events[ek];
        return Dk ? Dk.sU ? 1 : Dk.length : 0
      }, rk.prototype.emit = function(kk, ek, Dk, fk, Sk, bk) {
        var rk = ik ? ik + kk : kk;
        if (!this._events[rk]) return !1;
        var Pk, mk, Mk = this._events[rk],
          Kk = arguments.length;
        if (Mk.sU) {
          switch (Mk.once && this.removeListener(kk, Mk.sU, void 0, !0), Kk) {
            case 1:
              return Mk.sU.call(Mk.context), !0;
            case 2:
              return Mk.sU.call(Mk.context, ek), !0;
            case 3:
              return Mk.sU.call(Mk.context, ek, Dk), !0;
            case 4:
              return Mk.sU.call(Mk.context, ek, Dk, fk), !0;
            case 5:
              return Mk.sU.call(Mk.context, ek, Dk, fk, Sk), !0;
            case 6:
              return Mk.sU.call(Mk.context, ek, Dk, fk, Sk, bk), !0
          }
          for (mk = 1, Pk = new Array(Kk - 1); mk < Kk; mk++) Pk[mk - 1] = arguments[mk];
          Mk.sU.apply(Mk.context, Pk)
        } else {
          var xk, nk = Mk.length;
          for (mk = 0; mk < nk; mk++) switch (Mk[mk].once && this.removeListener(kk, Mk[mk].sU, void 0, !0), Kk) {
            case 1:
              Mk[mk].sU.call(Mk[mk].context);
              break;
            case 2:
              Mk[mk].sU.call(Mk[mk].context, ek);
              break;
            case 3:
              Mk[mk].sU.call(Mk[mk].context, ek, Dk);
              break;
            case 4:
              Mk[mk].sU.call(Mk[mk].context, ek, Dk, fk);
              break;
            default:
              if (!Pk)
                for (xk = 1, Pk = new Array(Kk - 1); xk < Kk; xk++) Pk[xk - 1] = arguments[xk];
              Mk[mk].sU.apply(Mk[mk].context, Pk)
          }
        }
        return !0
      }, rk.prototype.on = function(kk, ek, ik) {
        return Sk(this, kk, ek, ik, !1)
      }, rk.prototype.once = function(kk, ek, ik) {
        return Sk(this, kk, ek, ik, !0)
      }, rk.prototype.removeListener = function(kk, ek, Dk, fk) {
        var Sk = ik ? ik + kk : kk;
        if (!this._events[Sk]) return this;
        if (!ek) return bk(this, Sk), this;
        var rk = this._events[Sk];
        if (rk.sU) rk.sU !== ek || fk && !rk.once || Dk && rk.context !== Dk || bk(this, Sk);
        else {
          for (var Pk = 0, mk = [], Mk = rk.length; Pk < Mk; Pk++)(rk[Pk].sU !== ek || fk && !rk[Pk].once || Dk && rk[Pk].context !== Dk) && mk.push(rk[Pk]);
          mk.length ? this._events[Sk] = 1 === mk.length ? mk[0] : mk : bk(this, Sk)
        }
        return this
      }, rk.prototype.Gl = function(kk) {
        var ek;
        return kk ? (ek = ik ? ik + kk : kk, this._events[ek] && bk(this, ek)) : (this._events = new Dk, this._eventsCount = 0), this
      }, rk.prototype.off = rk.prototype.removeListener, rk.prototype.addListener = rk.prototype.on, rk.prefixed = ik, rk.EventEmitter = rk, kk.exports = rk
    }(bk);
    var rk, Pk, mk = Sk(bk.exports);
    ! function(kk) {
      kk.assertEqual = kk => kk, kk.assertIs = function(kk) {}, kk.assertNever = function(kk) {
        throw new Error
      }, kk.arrayToEnum = kk => {
        const ek = {};
        for (const ik of kk) ek[ik] = ik;
        return ek
      }, kk.getValidEnumValues = ek => {
        const ik = kk.objectKeys(ek).filter((kk => "number" !== typeof ek[ek[kk]])),
          Dk = {};
        for (const kk of ik) Dk[kk] = ek[kk];
        return kk.objectValues(Dk)
      }, kk.objectValues = ek => kk.objectKeys(ek).map((function(kk) {
        return ek[kk]
      })), kk.objectKeys = "function" === typeof Object.keys ? kk => Object.keys(kk) : kk => {
        const ek = [];
        for (const ik in kk) Object.prototype.hasOwnProperty.call(kk, ik) && ek.push(ik);
        return ek
      }, kk.find = (kk, ek) => {
        for (const ik of kk)
          if (ek(ik)) return ik
      }, kk.isInteger = "function" === typeof Number.isInteger ? kk => Number.isInteger(kk) : kk => "number" === typeof kk && isFinite(kk) && Math.floor(kk) === kk, kk.joinValues = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return kk.map((kk => "string" === typeof kk ? `'${kk}'` : kk)).join(ek)
      }, kk.jsonStringifyReplacer = (kk, ek) => "bigint" === typeof ek ? ek.toString() : ek
    }(rk || (rk = {})),
    function(kk) {
      kk.mergeShapes = (kk, ek) => ({
        ...kk,
        ...ek
      })
    }(Pk || (Pk = {}));
    const Mk = rk.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Kk = kk => {
        switch (typeof kk) {
          case "undefined":
            return Mk.undefined;
          case "string":
            return Mk.string;
          case "number":
            return isNaN(kk) ? Mk.nan : Mk.number;
          case "boolean":
            return Mk.boolean;
          case "function":
            return Mk.function;
          case "bigint":
            return Mk.bigint;
          case "symbol":
            return Mk.symbol;
          case "object":
            return Array.isArray(kk) ? Mk.array : null === kk ? Mk.null : kk.then && "function" === typeof kk.then && kk.catch && "function" === typeof kk.catch ? Mk.promise : "undefined" !== typeof Map && kk instanceof Map ? Mk.map : "undefined" !== typeof Set && kk instanceof Set ? Mk.set : "undefined" !== typeof Date && kk instanceof Date ? Mk.date : Mk.object;
          default:
            return Mk.unknown
        }
      },
      xk = rk.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class nk extends Error {
      constructor(kk) {
        var ek;
        super(), ek = this, this.issues = [], this.addIssue = kk => {
          this.issues = [...this.issues, kk]
        }, this.addIssues = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          ek.issues = [...ek.issues, ...kk]
        };
        const ik = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, ik) : this.__proto__ = ik, this.name = "ZodError", this.issues = kk
      }
      get errors() {
        return this.issues
      }
      format(kk) {
        const ek = kk || function(kk) {
            return kk.message
          },
          ik = {
            _errors: []
          },
          Dk = kk => {
            for (const fk of kk.issues)
              if ("invalid_union" === fk.code) fk.unionErrors.map(Dk);
              else if ("invalid_return_type" === fk.code) Dk(fk.returnTypeError);
            else if ("invalid_arguments" === fk.code) Dk(fk.argumentsError);
            else if (0 === fk.path.length) ik._errors.push(ek(fk));
            else {
              let kk = ik,
                Dk = 0;
              for (; Dk < fk.path.length;) {
                const ik = fk.path[Dk];
                Dk === fk.path.length - 1 ? (kk[ik] = kk[ik] || {
                  _errors: []
                }, kk[ik]._errors.push(ek(fk))) : kk[ik] = kk[ik] || {
                  _errors: []
                }, kk = kk[ik], Dk++
              }
            }
          };
        return Dk(this), ik
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, rk.jsonStringifyReplacer, 2)
      }
      get uU() {
        return 0 === this.issues.length
      }
      flatten() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kk => kk.message;
        const ek = {},
          ik = [];
        for (const Dk of this.issues) Dk.path.length > 0 ? (ek[Dk.path[0]] = ek[Dk.path[0]] || [], ek[Dk.path[0]].push(kk(Dk))) : ik.push(kk(Dk));
        return {
          formErrors: ik,
          fieldErrors: ek
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    nk.create = kk => new nk(kk);
    const Uk = (kk, ek) => {
      let ik;
      switch (kk.code) {
        case xk.invalid_type:
          ik = kk.received === Mk.undefined ? "Required" : `Expected ${kk.expected}, received ${kk.received}`;
          break;
        case xk.invalid_literal:
          ik = `Invalid literal value, expected ${JSON.stringify(kk.expected,rk.jsonStringifyReplacer)}`;
          break;
        case xk.unrecognized_keys:
          ik = `Unrecognized key(s) in object: ${rk.joinValues(kk.keys,", ")}`;
          break;
        case xk.invalid_union:
          ik = "Invalid input";
          break;
        case xk.invalid_union_discriminator:
          ik = `Invalid discriminator value. Expected ${rk.joinValues(kk.options)}`;
          break;
        case xk.invalid_enum_value:
          ik = `Invalid enum value. Expected ${rk.joinValues(kk.options)}, received '${kk.received}'`;
          break;
        case xk.invalid_arguments:
          ik = "Invalid function arguments";
          break;
        case xk.invalid_return_type:
          ik = "Invalid function return type";
          break;
        case xk.invalid_date:
          ik = "Invalid date";
          break;
        case xk.invalid_string:
          "object" === typeof kk.validation ? "includes" in kk.validation ? (ik = `Invalid input: must include "${kk.validation.includes}"`, "number" === typeof kk.validation.position && (ik = `${ik} at one or more positions greater than or equal to ${kk.validation.position}`)) : "startsWith" in kk.validation ? ik = `Invalid input: must start with "${kk.validation.startsWith}"` : "endsWith" in kk.validation ? ik = `Invalid input: must end with "${kk.validation.endsWith}"` : rk.assertNever(kk.validation) : ik = "regex" !== kk.validation ? `Invalid ${kk.validation}` : "Invalid";
          break;
        case xk.too_small:
          ik = "array" === kk.type ? `Array must contain ${kk.exact?"exactly":kk.inclusive?"at least":"more than"} ${kk.minimum} element(s)` : "string" === kk.type ? `String must contain ${kk.exact?"exactly":kk.inclusive?"at least":"over"} ${kk.minimum} character(s)` : "number" === kk.type ? `Number must be ${kk.exact?"exactly equal to ":kk.inclusive?"greater than or equal to ":"greater than "}${kk.minimum}` : "date" === kk.type ? `Date must be ${kk.exact?"exactly equal to ":kk.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(kk.minimum))}` : "Invalid input";
          break;
        case xk.too_big:
          ik = "array" === kk.type ? `Array must contain ${kk.exact?"exactly":kk.inclusive?"at most":"less than"} ${kk.maximum} element(s)` : "string" === kk.type ? `String must contain ${kk.exact?"exactly":kk.inclusive?"at most":"under"} ${kk.maximum} character(s)` : "number" === kk.type ? `Number must be ${kk.exact?"exactly":kk.inclusive?"less than or equal to":"less than"} ${kk.maximum}` : "bigint" === kk.type ? `BigInt must be ${kk.exact?"exactly":kk.inclusive?"less than or equal to":"less than"} ${kk.maximum}` : "date" === kk.type ? `Date must be ${kk.exact?"exactly":kk.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(kk.maximum))}` : "Invalid input";
          break;
        case xk.custom:
          ik = "Invalid input";
          break;
        case xk.invalid_intersection_types:
          ik = "Intersection results could not be merged";
          break;
        case xk.not_multiple_of:
          ik = `Number must be a multiple of ${kk.multipleOf}`;
          break;
        case xk.not_finite:
          ik = "Number must be finite";
          break;
        default:
          ik = ek.defaultError, rk.assertNever(kk)
      }
      return {
        message: ik
      }
    };
    let Hk = Uk;

    function wk() {
      return Hk
    }
    const lk = kk => {
      const {
        data: ek,
        path: ik,
        errorMaps: Dk,
        issueData: fk
      } = kk, Sk = [...ik, ...fk.path || []], bk = {
        ...fk,
        path: Sk
      };
      let rk = "";
      const Pk = Dk.filter((kk => !!kk)).slice().reverse();
      for (const mk of Pk) rk = mk(bk, {
        data: ek,
        defaultError: rk
      }).message;
      return {
        ...fk,
        path: Sk,
        message: fk.message || rk
      }
    };

    function pk(kk, ek) {
      const ik = lk({
        issueData: ek,
        data: kk.data,
        path: kk.path,
        errorMaps: [kk.common.contextualErrorMap, kk.schemaErrorMap, wk(), Uk].filter((kk => !!kk))
      });
      kk.common.issues.push(ik)
    }
    class yk {
      constructor() {
        this.value = "valid"
      }
      bH() {
        "valid" === this.value && (this.value = "bH")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(kk, ek) {
        const ik = [];
        for (const Dk of ek) {
          if ("aborted" === Dk.status) return Yk;
          "bH" === Dk.status && kk.bH(), ik.push(Dk.value)
        }
        return {
          status: kk.value,
          value: ik
        }
      }
      static async mergeObjectAsync(kk, ek) {
        const ik = [];
        for (const Dk of ek) ik.push({
          key: await Dk.key,
          value: await Dk.value
        });
        return yk.mergeObjectSync(kk, ik)
      }
      static mergeObjectSync(kk, ek) {
        const ik = {};
        for (const Dk of ek) {
          const {
            key: ek,
            value: fk
          } = Dk;
          if ("aborted" === ek.status) return Yk;
          if ("aborted" === fk.status) return Yk;
          "bH" === ek.status && kk.bH(), "bH" === fk.status && kk.bH(), "__proto__" === ek.value || "undefined" === typeof fk.value && !Dk.alwaysSet || (ik[ek.value] = fk.value)
        }
        return {
          status: kk.value,
          value: ik
        }
      }
    }
    const Yk = Object.freeze({
        status: "aborted"
      }),
      Lk = kk => ({
        status: "bH",
        value: kk
      }),
      Ck = kk => ({
        status: "valid",
        value: kk
      }),
      Ak = kk => "aborted" === kk.status,
      jk = kk => "bH" === kk.status,
      sk = kk => "valid" === kk.status,
      dk = kk => "undefined" !== typeof Promise && kk instanceof Promise;
    var Vk;
    ! function(kk) {
      kk.errToObj = kk => "string" === typeof kk ? {
        message: kk
      } : kk || {}, kk.toString = kk => "string" === typeof kk ? kk : null === kk || void 0 === kk ? void 0 : kk.message
    }(Vk || (Vk = {}));
    class Fk {
      constructor(kk, ek, ik, Dk) {
        this._cachedPath = [], this.parent = kk, this.data = ek, this._path = ik, this._key = Dk
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const uk = (kk, ek) => {
      if (sk(ek)) return {
        success: !0,
        data: ek.value
      };
      if (!kk.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const ek = new nk(kk.common.issues);
          return this._error = ek, this._error
        }
      }
    };

    function qk(kk) {
      if (!kk) return {};
      const {
        errorMap: ek,
        invalid_type_error: ik,
        required_error: Dk,
        description: fk
      } = kk;
      if (ek && (ik || Dk)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (ek) return {
        errorMap: ek,
        description: fk
      };
      return {
        errorMap: (kk, ek) => "invalid_type" !== kk.code ? {
          message: ek.defaultError
        } : "undefined" === typeof ek.data ? {
          message: null !== Dk && void 0 !== Dk ? Dk : ek.defaultError
        } : {
          message: null !== ik && void 0 !== ik ? ik : ek.defaultError
        },
        description: fk
      }
    }
    class Ik {
      constructor(kk) {
        this.spa = this.safeParseAsync, this._def = kk, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(kk) {
        return Kk(kk.data)
      }
      _getOrReturnCtx(kk, ek) {
        return ek || {
          common: kk.parent.common,
          data: kk.data,
          parsedType: Kk(kk.data),
          schemaErrorMap: this._def.errorMap,
          path: kk.path,
          parent: kk.parent
        }
      }
      _processInputParams(kk) {
        return {
          status: new yk,
          ctx: {
            common: kk.parent.common,
            data: kk.data,
            parsedType: Kk(kk.data),
            schemaErrorMap: this._def.errorMap,
            path: kk.path,
            parent: kk.parent
          }
        }
      }
      _parseSync(kk) {
        const ek = this._parse(kk);
        if (dk(ek)) throw new Error("Synchronous parse encountered promise.");
        return ek
      }
      _parseAsync(kk) {
        const ek = this._parse(kk);
        return Promise.resolve(ek)
      }
      parse(kk, ek) {
        const ik = this.safeParse(kk, ek);
        if (ik.success) return ik.data;
        throw ik.error
      }
      safeParse(kk, ek) {
        var ik;
        const Dk = {
            common: {
              issues: [],
              async: null !== (ik = null === ek || void 0 === ek ? void 0 : ek.async) && void 0 !== ik && ik,
              contextualErrorMap: null === ek || void 0 === ek ? void 0 : ek.errorMap
            },
            path: (null === ek || void 0 === ek ? void 0 : ek.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: kk,
            parsedType: Kk(kk)
          },
          fk = this._parseSync({
            data: kk,
            path: Dk.path,
            parent: Dk
          });
        return uk(Dk, fk)
      }
      async parseAsync(kk, ek) {
        const ik = await this.safeParseAsync(kk, ek);
        if (ik.success) return ik.data;
        throw ik.error
      }
      async safeParseAsync(kk, ek) {
        const ik = {
            common: {
              issues: [],
              contextualErrorMap: null === ek || void 0 === ek ? void 0 : ek.errorMap,
              async: !0
            },
            path: (null === ek || void 0 === ek ? void 0 : ek.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: kk,
            parsedType: Kk(kk)
          },
          Dk = this._parse({
            data: kk,
            path: ik.path,
            parent: ik
          }),
          fk = await (dk(Dk) ? Dk : Promise.resolve(Dk));
        return uk(ik, fk)
      }
      refine(kk, ek) {
        const ik = kk => "string" === typeof ek || "undefined" === typeof ek ? {
          message: ek
        } : "function" === typeof ek ? ek(kk) : ek;
        return this._refinement(((ek, Dk) => {
          const fk = kk(ek),
            Sk = () => Dk.addIssue({
              code: xk.custom,
              ...ik(ek)
            });
          return "undefined" !== typeof Promise && fk instanceof Promise ? fk.then((kk => !!kk || (Sk(), !1))) : !!fk || (Sk(), !1)
        }))
      }
      refinement(kk, ek) {
        return this._refinement(((ik, Dk) => !!kk(ik) || (Dk.addIssue("function" === typeof ek ? ek(ik, Dk) : ek), !1)))
      }
      _refinement(kk) {
        return new Le({
          schema: this,
          typeName: Qe.ZodEffects,
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
        return Ce.create(this, this._def)
      }
      nullable() {
        return Ae.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return ie.create(this, this._def)
      }
      promise() {
        return Ye.create(this, this._def)
      }
      or(kk) {
        return Se.create([this, kk], this._def)
      }
      and(kk) {
        return me.create(this, kk, this._def)
      }
      transform(kk) {
        return new Le({
          ...qk(this._def),
          schema: this,
          typeName: Qe.ZodEffects,
          effect: {
            type: "transform",
            transform: kk
          }
        })
      }
      default (kk) {
        const ek = "function" === typeof kk ? kk : () => kk;
        return new je({
          ...qk(this._def),
          innerType: this,
          defaultValue: ek,
          typeName: Qe.ZodDefault
        })
      }
      brand() {
        return new Fe({
          typeName: Qe.ZodBranded,
          type: this,
          ...qk(this._def)
        })
      } catch (kk) {
        const ek = "function" === typeof kk ? kk : () => kk;
        return new se({
          ...qk(this._def),
          innerType: this,
          catchValue: ek,
          typeName: Qe.ZodCatch
        })
      }
      describe(kk) {
        return new(0, this.constructor)({
          ...this._def,
          description: kk
        })
      }
      pipe(kk) {
        return ue.create(this, kk)
      }
      readonly() {
        return qe.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const zk = /^c[^\s-]{8,}$/i,
      Qk = /^[a-z][a-z0-9]*$/,
      vk = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Ek = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      hk = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let ak;
    const Wk = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      tk = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Xk extends Ik {
      _parse(kk) {
        this._def.coerce && (kk.data = String(kk.data));
        if (this._getType(kk) !== Mk.string) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.string,
            received: ek.parsedType
          }), Yk
        }
        const ek = new yk;
        let ik;
        for (const Pk of this._def.checks)
          if ("min" === Pk.kind) kk.data.length < Pk.value && (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
            code: xk.too_small,
            minimum: Pk.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Pk.message
          }), ek.bH());
          else if ("max" === Pk.kind) kk.data.length > Pk.value && (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          code: xk.too_big,
          maximum: Pk.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Pk.message
        }), ek.bH());
        else if ("length" === Pk.kind) {
          const Dk = kk.data.length > Pk.value,
            fk = kk.data.length < Pk.value;
          (Dk || fk) && (ik = this._getOrReturnCtx(kk, ik), Dk ? pk(ik, {
            code: xk.too_big,
            maximum: Pk.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Pk.message
          }) : fk && pk(ik, {
            code: xk.too_small,
            minimum: Pk.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Pk.message
          }), ek.bH())
        } else if ("email" === Pk.kind) hk.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "email",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH());
        else if ("emoji" === Pk.kind) ak || (ak = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), ak.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "emoji",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH());
        else if ("uuid" === Pk.kind) Ek.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "uuid",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH());
        else if ("cuid" === Pk.kind) zk.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "cuid",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH());
        else if ("cuid2" === Pk.kind) Qk.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "cuid2",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH());
        else if ("ulid" === Pk.kind) vk.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "ulid",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH());
        else if ("url" === Pk.kind) try {
          new URL(kk.data)
        } catch (bk) {
          ik = this._getOrReturnCtx(kk, ik), pk(ik, {
            validation: "url",
            code: xk.invalid_string,
            message: Pk.message
          }), ek.bH()
        } else if ("regex" === Pk.kind) {
          Pk.regex.lastIndex = 0;
          Pk.regex.test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
            validation: "regex",
            code: xk.invalid_string,
            message: Pk.message
          }), ek.bH())
        } else if ("trim" === Pk.kind) kk.data = kk.data.trim();
        else if ("includes" === Pk.kind) kk.data.includes(Pk.value, Pk.position) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          code: xk.invalid_string,
          validation: {
            includes: Pk.value,
            position: Pk.position
          },
          message: Pk.message
        }), ek.bH());
        else if ("toLowerCase" === Pk.kind) kk.data = kk.data.toLowerCase();
        else if ("toUpperCase" === Pk.kind) kk.data = kk.data.toUpperCase();
        else if ("startsWith" === Pk.kind) kk.data.startsWith(Pk.value) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          code: xk.invalid_string,
          validation: {
            startsWith: Pk.value
          },
          message: Pk.message
        }), ek.bH());
        else if ("endsWith" === Pk.kind) kk.data.endsWith(Pk.value) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          code: xk.invalid_string,
          validation: {
            endsWith: Pk.value
          },
          message: Pk.message
        }), ek.bH());
        else if ("datetime" === Pk.kind) {
          ((Sk = Pk).precision ? Sk.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Sk.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Sk.precision}}Z$`) : 0 === Sk.precision ? Sk.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Sk.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(kk.data) || (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
            code: xk.invalid_string,
            validation: "datetime",
            message: Pk.message
          }), ek.bH())
        } else "ip" === Pk.kind ? (Dk = kk.data, ("v4" !== (fk = Pk.version) && fk || !Wk.test(Dk)) && ("v6" !== fk && fk || !tk.test(Dk)) && (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          validation: "ip",
          code: xk.invalid_string,
          message: Pk.message
        }), ek.bH())) : rk.assertNever(Pk);
        var Dk, fk, Sk;
        return {
          status: ek.value,
          value: kk.data
        }
      }
      _regex(kk, ek, ik) {
        return this.refinement((ek => kk.test(ek)), {
          validation: ek,
          code: xk.invalid_string,
          ...Vk.errToObj(ik)
        })
      }
      _addCheck(kk) {
        return new Xk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      email(kk) {
        return this._addCheck({
          kind: "email",
          ...Vk.errToObj(kk)
        })
      }
      url(kk) {
        return this._addCheck({
          kind: "url",
          ...Vk.errToObj(kk)
        })
      }
      emoji(kk) {
        return this._addCheck({
          kind: "emoji",
          ...Vk.errToObj(kk)
        })
      }
      uuid(kk) {
        return this._addCheck({
          kind: "uuid",
          ...Vk.errToObj(kk)
        })
      }
      cuid(kk) {
        return this._addCheck({
          kind: "cuid",
          ...Vk.errToObj(kk)
        })
      }
      cuid2(kk) {
        return this._addCheck({
          kind: "cuid2",
          ...Vk.errToObj(kk)
        })
      }
      ulid(kk) {
        return this._addCheck({
          kind: "ulid",
          ...Vk.errToObj(kk)
        })
      }
      ip(kk) {
        return this._addCheck({
          kind: "ip",
          ...Vk.errToObj(kk)
        })
      }
      datetime(kk) {
        var ek;
        return "string" === typeof kk ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: kk
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === kk || void 0 === kk ? void 0 : kk.precision) ? null : null === kk || void 0 === kk ? void 0 : kk.precision,
          offset: null !== (ek = null === kk || void 0 === kk ? void 0 : kk.offset) && void 0 !== ek && ek,
          ...Vk.errToObj(null === kk || void 0 === kk ? void 0 : kk.message)
        })
      }
      regex(kk, ek) {
        return this._addCheck({
          kind: "regex",
          regex: kk,
          ...Vk.errToObj(ek)
        })
      }
      includes(kk, ek) {
        return this._addCheck({
          kind: "includes",
          value: kk,
          position: null === ek || void 0 === ek ? void 0 : ek.position,
          ...Vk.errToObj(null === ek || void 0 === ek ? void 0 : ek.message)
        })
      }
      startsWith(kk, ek) {
        return this._addCheck({
          kind: "startsWith",
          value: kk,
          ...Vk.errToObj(ek)
        })
      }
      endsWith(kk, ek) {
        return this._addCheck({
          kind: "endsWith",
          value: kk,
          ...Vk.errToObj(ek)
        })
      }
      min(kk, ek) {
        return this._addCheck({
          kind: "min",
          value: kk,
          ...Vk.errToObj(ek)
        })
      }
      max(kk, ek) {
        return this._addCheck({
          kind: "max",
          value: kk,
          ...Vk.errToObj(ek)
        })
      }
      length(kk, ek) {
        return this._addCheck({
          kind: "length",
          value: kk,
          ...Vk.errToObj(ek)
        })
      }
      nonempty(kk) {
        return this.min(1, Vk.errToObj(kk))
      }
      trim() {
        return new Xk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Xk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Xk({
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
        for (const ek of this._def.checks) "min" === ek.kind && (null === kk || ek.value > kk) && (kk = ek.value);
        return kk
      }
      get maxLength() {
        let kk = null;
        for (const ek of this._def.checks) "max" === ek.kind && (null === kk || ek.value < kk) && (kk = ek.value);
        return kk
      }
    }

    function Bk(kk, ek) {
      const ik = (kk.toString().split(".")[1] || "").length,
        Dk = (ek.toString().split(".")[1] || "").length,
        fk = ik > Dk ? ik : Dk;
      return parseInt(kk.toFixed(fk).replace(".", "")) % parseInt(ek.toFixed(fk).replace(".", "")) / Math.pow(10, fk)
    }
    Xk.create = kk => {
      var ek;
      return new Xk({
        checks: [],
        typeName: Qe.ZodString,
        coerce: null !== (ek = null === kk || void 0 === kk ? void 0 : kk.coerce) && void 0 !== ek && ek,
        ...qk(kk)
      })
    };
    class ck extends Ik {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(kk) {
        this._def.coerce && (kk.data = Number(kk.data));
        if (this._getType(kk) !== Mk.number) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.number,
            received: ek.parsedType
          }), Yk
        }
        let ek;
        const ik = new yk;
        for (const Dk of this._def.checks)
          if ("int" === Dk.kind) rk.isInteger(kk.data) || (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
            code: xk.invalid_type,
            expected: "integer",
            received: "float",
            message: Dk.message
          }), ik.bH());
          else if ("min" === Dk.kind) {
          (Dk.inclusive ? kk.data < Dk.value : kk.data <= Dk.value) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
            code: xk.too_small,
            minimum: Dk.value,
            type: "number",
            inclusive: Dk.inclusive,
            exact: !1,
            message: Dk.message
          }), ik.bH())
        } else if ("max" === Dk.kind) {
          (Dk.inclusive ? kk.data > Dk.value : kk.data >= Dk.value) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
            code: xk.too_big,
            maximum: Dk.value,
            type: "number",
            inclusive: Dk.inclusive,
            exact: !1,
            message: Dk.message
          }), ik.bH())
        } else "multipleOf" === Dk.kind ? 0 !== Bk(kk.data, Dk.value) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
          code: xk.not_multiple_of,
          multipleOf: Dk.value,
          message: Dk.message
        }), ik.bH()) : "finite" === Dk.kind ? Number.isFinite(kk.data) || (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
          code: xk.not_finite,
          message: Dk.message
        }), ik.bH()) : rk.assertNever(Dk);
        return {
          status: ik.value,
          value: kk.data
        }
      }
      gte(kk, ek) {
        return this.setLimit("min", kk, !0, Vk.toString(ek))
      }
      gt(kk, ek) {
        return this.setLimit("min", kk, !1, Vk.toString(ek))
      }
      lte(kk, ek) {
        return this.setLimit("max", kk, !0, Vk.toString(ek))
      }
      lt(kk, ek) {
        return this.setLimit("max", kk, !1, Vk.toString(ek))
      }
      setLimit(kk, ek, ik, Dk) {
        return new ck({
          ...this._def,
          checks: [...this._def.checks, {
            kind: kk,
            value: ek,
            inclusive: ik,
            message: Vk.toString(Dk)
          }]
        })
      }
      _addCheck(kk) {
        return new ck({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      int(kk) {
        return this._addCheck({
          kind: "int",
          message: Vk.toString(kk)
        })
      }
      positive(kk) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Vk.toString(kk)
        })
      }
      negative(kk) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Vk.toString(kk)
        })
      }
      nonpositive(kk) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Vk.toString(kk)
        })
      }
      nonnegative(kk) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Vk.toString(kk)
        })
      }
      multipleOf(kk, ek) {
        return this._addCheck({
          kind: "multipleOf",
          value: kk,
          message: Vk.toString(ek)
        })
      }
      finite(kk) {
        return this._addCheck({
          kind: "finite",
          message: Vk.toString(kk)
        })
      }
      safe(kk) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Vk.toString(kk)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Vk.toString(kk)
        })
      }
      get minValue() {
        let kk = null;
        for (const ek of this._def.checks) "min" === ek.kind && (null === kk || ek.value > kk) && (kk = ek.value);
        return kk
      }
      get maxValue() {
        let kk = null;
        for (const ek of this._def.checks) "max" === ek.kind && (null === kk || ek.value < kk) && (kk = ek.value);
        return kk
      }
      get isInt() {
        return !!this._def.checks.find((kk => "int" === kk.kind || "multipleOf" === kk.kind && rk.isInteger(kk.value)))
      }
      get isFinite() {
        let kk = null,
          ek = null;
        for (const ik of this._def.checks) {
          if ("finite" === ik.kind || "int" === ik.kind || "multipleOf" === ik.kind) return !0;
          "min" === ik.kind ? (null === ek || ik.value > ek) && (ek = ik.value) : "max" === ik.kind && (null === kk || ik.value < kk) && (kk = ik.value)
        }
        return Number.isFinite(ek) && Number.isFinite(kk)
      }
    }
    ck.create = kk => new ck({
      checks: [],
      typeName: Qe.ZodNumber,
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      ...qk(kk)
    });
    class Tk extends Ik {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(kk) {
        this._def.coerce && (kk.data = BigInt(kk.data));
        if (this._getType(kk) !== Mk.bigint) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.bigint,
            received: ek.parsedType
          }), Yk
        }
        let ek;
        const ik = new yk;
        for (const Dk of this._def.checks)
          if ("min" === Dk.kind) {
            (Dk.inclusive ? kk.data < Dk.value : kk.data <= Dk.value) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
              code: xk.too_small,
              type: "bigint",
              minimum: Dk.value,
              inclusive: Dk.inclusive,
              message: Dk.message
            }), ik.bH())
          } else if ("max" === Dk.kind) {
          (Dk.inclusive ? kk.data > Dk.value : kk.data >= Dk.value) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
            code: xk.too_big,
            type: "bigint",
            maximum: Dk.value,
            inclusive: Dk.inclusive,
            message: Dk.message
          }), ik.bH())
        } else "multipleOf" === Dk.kind ? kk.data % Dk.value !== BigInt(0) && (ek = this._getOrReturnCtx(kk, ek), pk(ek, {
          code: xk.not_multiple_of,
          multipleOf: Dk.value,
          message: Dk.message
        }), ik.bH()) : rk.assertNever(Dk);
        return {
          status: ik.value,
          value: kk.data
        }
      }
      gte(kk, ek) {
        return this.setLimit("min", kk, !0, Vk.toString(ek))
      }
      gt(kk, ek) {
        return this.setLimit("min", kk, !1, Vk.toString(ek))
      }
      lte(kk, ek) {
        return this.setLimit("max", kk, !0, Vk.toString(ek))
      }
      lt(kk, ek) {
        return this.setLimit("max", kk, !1, Vk.toString(ek))
      }
      setLimit(kk, ek, ik, Dk) {
        return new Tk({
          ...this._def,
          checks: [...this._def.checks, {
            kind: kk,
            value: ek,
            inclusive: ik,
            message: Vk.toString(Dk)
          }]
        })
      }
      _addCheck(kk) {
        return new Tk({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      positive(kk) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Vk.toString(kk)
        })
      }
      negative(kk) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Vk.toString(kk)
        })
      }
      nonpositive(kk) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Vk.toString(kk)
        })
      }
      nonnegative(kk) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Vk.toString(kk)
        })
      }
      multipleOf(kk, ek) {
        return this._addCheck({
          kind: "multipleOf",
          value: kk,
          message: Vk.toString(ek)
        })
      }
      get minValue() {
        let kk = null;
        for (const ek of this._def.checks) "min" === ek.kind && (null === kk || ek.value > kk) && (kk = ek.value);
        return kk
      }
      get maxValue() {
        let kk = null;
        for (const ek of this._def.checks) "max" === ek.kind && (null === kk || ek.value < kk) && (kk = ek.value);
        return kk
      }
    }
    Tk.create = kk => {
      var ek;
      return new Tk({
        checks: [],
        typeName: Qe.ZodBigInt,
        coerce: null !== (ek = null === kk || void 0 === kk ? void 0 : kk.coerce) && void 0 !== ek && ek,
        ...qk(kk)
      })
    };
    class Zk extends Ik {
      _parse(kk) {
        this._def.coerce && (kk.data = Boolean(kk.data));
        if (this._getType(kk) !== Mk.boolean) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.boolean,
            received: ek.parsedType
          }), Yk
        }
        return Ck(kk.data)
      }
    }
    Zk.create = kk => new Zk({
      typeName: Qe.ZodBoolean,
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      ...qk(kk)
    });
    class Ok extends Ik {
      _parse(kk) {
        this._def.coerce && (kk.data = new Date(kk.data));
        if (this._getType(kk) !== Mk.date) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.date,
            received: ek.parsedType
          }), Yk
        }
        if (isNaN(kk.data.getTime())) {
          return pk(this._getOrReturnCtx(kk), {
            code: xk.invalid_date
          }), Yk
        }
        const ek = new yk;
        let ik;
        for (const Dk of this._def.checks) "min" === Dk.kind ? kk.data.getTime() < Dk.value && (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          code: xk.too_small,
          message: Dk.message,
          inclusive: !0,
          exact: !1,
          minimum: Dk.value,
          type: "date"
        }), ek.bH()) : "max" === Dk.kind ? kk.data.getTime() > Dk.value && (ik = this._getOrReturnCtx(kk, ik), pk(ik, {
          code: xk.too_big,
          message: Dk.message,
          inclusive: !0,
          exact: !1,
          maximum: Dk.value,
          type: "date"
        }), ek.bH()) : rk.assertNever(Dk);
        return {
          status: ek.value,
          value: new Date(kk.data.getTime())
        }
      }
      _addCheck(kk) {
        return new Ok({
          ...this._def,
          checks: [...this._def.checks, kk]
        })
      }
      min(kk, ek) {
        return this._addCheck({
          kind: "min",
          value: kk.getTime(),
          message: Vk.toString(ek)
        })
      }
      max(kk, ek) {
        return this._addCheck({
          kind: "max",
          value: kk.getTime(),
          message: Vk.toString(ek)
        })
      }
      get minDate() {
        let kk = null;
        for (const ek of this._def.checks) "min" === ek.kind && (null === kk || ek.value > kk) && (kk = ek.value);
        return null != kk ? new Date(kk) : null
      }
      get maxDate() {
        let kk = null;
        for (const ek of this._def.checks) "max" === ek.kind && (null === kk || ek.value < kk) && (kk = ek.value);
        return null != kk ? new Date(kk) : null
      }
    }
    Ok.create = kk => new Ok({
      checks: [],
      coerce: (null === kk || void 0 === kk ? void 0 : kk.coerce) || !1,
      typeName: Qe.ZodDate,
      ...qk(kk)
    });
    class gk extends Ik {
      _parse(kk) {
        if (this._getType(kk) !== Mk.symbol) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.symbol,
            received: ek.parsedType
          }), Yk
        }
        return Ck(kk.data)
      }
    }
    gk.create = kk => new gk({
      typeName: Qe.ZodSymbol,
      ...qk(kk)
    });
    class Gk extends Ik {
      _parse(kk) {
        if (this._getType(kk) !== Mk.undefined) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.undefined,
            received: ek.parsedType
          }), Yk
        }
        return Ck(kk.data)
      }
    }
    Gk.create = kk => new Gk({
      typeName: Qe.ZodUndefined,
      ...qk(kk)
    });
    class Nk extends Ik {
      _parse(kk) {
        if (this._getType(kk) !== Mk.null) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.null,
            received: ek.parsedType
          }), Yk
        }
        return Ck(kk.data)
      }
    }
    Nk.create = kk => new Nk({
      typeName: Qe.ZodNull,
      ...qk(kk)
    });
    class Rk extends Ik {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(kk) {
        return Ck(kk.data)
      }
    }
    Rk.create = kk => new Rk({
      typeName: Qe.ZodAny,
      ...qk(kk)
    });
    class Jk extends Ik {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(kk) {
        return Ck(kk.data)
      }
    }
    Jk.create = kk => new Jk({
      typeName: Qe.ZodUnknown,
      ...qk(kk)
    });
    class ke extends Ik {
      _parse(kk) {
        const ek = this._getOrReturnCtx(kk);
        return pk(ek, {
          code: xk.invalid_type,
          expected: Mk.never,
          received: ek.parsedType
        }), Yk
      }
    }
    ke.create = kk => new ke({
      typeName: Qe.ZodNever,
      ...qk(kk)
    });
    class ee extends Ik {
      _parse(kk) {
        if (this._getType(kk) !== Mk.undefined) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.void,
            received: ek.parsedType
          }), Yk
        }
        return Ck(kk.data)
      }
    }
    ee.create = kk => new ee({
      typeName: Qe.ZodVoid,
      ...qk(kk)
    });
    class ie extends Ik {
      _parse(kk) {
        const {
          ctx: ek,
          status: ik
        } = this._processInputParams(kk), Dk = this._def;
        if (ek.parsedType !== Mk.array) return pk(ek, {
          code: xk.invalid_type,
          expected: Mk.array,
          received: ek.parsedType
        }), Yk;
        if (null !== Dk.exactLength) {
          const kk = ek.data.length > Dk.exactLength.value,
            fk = ek.data.length < Dk.exactLength.value;
          (kk || fk) && (pk(ek, {
            code: kk ? xk.too_big : xk.too_small,
            minimum: fk ? Dk.exactLength.value : void 0,
            maximum: kk ? Dk.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Dk.exactLength.message
          }), ik.bH())
        }
        if (null !== Dk.minLength && ek.data.length < Dk.minLength.value && (pk(ek, {
            code: xk.too_small,
            minimum: Dk.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Dk.minLength.message
          }), ik.bH()), null !== Dk.maxLength && ek.data.length > Dk.maxLength.value && (pk(ek, {
            code: xk.too_big,
            maximum: Dk.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Dk.maxLength.message
          }), ik.bH()), ek.common.async) return Promise.all([...ek.data].map(((kk, ik) => Dk.type._parseAsync(new Fk(ek, kk, ek.path, ik))))).then((kk => yk.mergeArray(ik, kk)));
        const fk = [...ek.data].map(((kk, ik) => Dk.type._parseSync(new Fk(ek, kk, ek.path, ik))));
        return yk.mergeArray(ik, fk)
      }
      get element() {
        return this._def.type
      }
      min(kk, ek) {
        return new ie({
          ...this._def,
          minLength: {
            value: kk,
            message: Vk.toString(ek)
          }
        })
      }
      max(kk, ek) {
        return new ie({
          ...this._def,
          maxLength: {
            value: kk,
            message: Vk.toString(ek)
          }
        })
      }
      length(kk, ek) {
        return new ie({
          ...this._def,
          exactLength: {
            value: kk,
            message: Vk.toString(ek)
          }
        })
      }
      nonempty(kk) {
        return this.min(1, kk)
      }
    }

    function De(kk) {
      if (kk instanceof fe) {
        const ek = {};
        for (const ik in kk.shape) {
          const Dk = kk.shape[ik];
          ek[ik] = Ce.create(De(Dk))
        }
        return new fe({
          ...kk._def,
          shape: () => ek
        })
      }
      return kk instanceof ie ? new ie({
        ...kk._def,
        type: De(kk.element)
      }) : kk instanceof Ce ? Ce.create(De(kk.unwrap())) : kk instanceof Ae ? Ae.create(De(kk.unwrap())) : kk instanceof Me ? Me.create(kk.items.map((kk => De(kk)))) : kk
    }
    ie.create = (kk, ek) => new ie({
      type: kk,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Qe.ZodArray,
      ...qk(ek)
    });
    class fe extends Ik {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const kk = this._def.shape(),
          ek = rk.objectKeys(kk);
        return this._cached = {
          shape: kk,
          keys: ek
        }
      }
      _parse(kk) {
        if (this._getType(kk) !== Mk.object) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.object,
            received: ek.parsedType
          }), Yk
        }
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk), {
          shape: Dk,
          keys: fk
        } = this._getCached(), Sk = [];
        if (!(this._def.catchall instanceof ke && "strip" === this._def.unknownKeys))
          for (const rk in ik.data) fk.includes(rk) || Sk.push(rk);
        const bk = [];
        for (const rk of fk) {
          const kk = Dk[rk],
            ek = ik.data[rk];
          bk.push({
            key: {
              status: "valid",
              value: rk
            },
            value: kk._parse(new Fk(ik, ek, ik.path, rk)),
            alwaysSet: rk in ik.data
          })
        }
        if (this._def.catchall instanceof ke) {
          const kk = this._def.unknownKeys;
          if ("passthrough" === kk)
            for (const ek of Sk) bk.push({
              key: {
                status: "valid",
                value: ek
              },
              value: {
                status: "valid",
                value: ik.data[ek]
              }
            });
          else if ("strict" === kk) Sk.length > 0 && (pk(ik, {
            code: xk.unrecognized_keys,
            keys: Sk
          }), ek.bH());
          else if ("strip" !== kk) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const kk = this._def.catchall;
          for (const ek of Sk) {
            const Dk = ik.data[ek];
            bk.push({
              key: {
                status: "valid",
                value: ek
              },
              value: kk._parse(new Fk(ik, Dk, ik.path, ek)),
              alwaysSet: ek in ik.data
            })
          }
        }
        return ik.common.async ? Promise.resolve().then((async () => {
          const kk = [];
          for (const ek of bk) {
            const ik = await ek.key;
            kk.push({
              key: ik,
              value: await ek.value,
              alwaysSet: ek.alwaysSet
            })
          }
          return kk
        })).then((kk => yk.mergeObjectSync(ek, kk))) : yk.mergeObjectSync(ek, bk)
      }
      get shape() {
        return this._def.shape()
      }
      strict(kk) {
        return Vk.errToObj, new fe({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== kk ? {
            errorMap: (ek, ik) => {
              var Dk, fk, Sk, bk;
              const rk = null !== (Sk = null === (fk = (Dk = this._def).errorMap) || void 0 === fk ? void 0 : fk.call(Dk, ek, ik).message) && void 0 !== Sk ? Sk : ik.defaultError;
              return "unrecognized_keys" === ek.code ? {
                message: null !== (bk = Vk.errToObj(kk).message) && void 0 !== bk ? bk : rk
              } : {
                message: rk
              }
            }
          } : {}
        })
      }
      strip() {
        return new fe({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new fe({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(kk) {
        return new fe({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...kk
          })
        })
      }
      merge(kk) {
        return new fe({
          unknownKeys: kk._def.unknownKeys,
          catchall: kk._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...kk._def.shape()
          }),
          typeName: Qe.ZodObject
        })
      }
      setKey(kk, ek) {
        return this.augment({
          [kk]: ek
        })
      }
      catchall(kk) {
        return new fe({
          ...this._def,
          catchall: kk
        })
      }
      Un(kk) {
        const ek = {};
        return rk.objectKeys(kk).forEach((ik => {
          kk[ik] && this.shape[ik] && (ek[ik] = this.shape[ik])
        })), new fe({
          ...this._def,
          shape: () => ek
        })
      }
      omit(kk) {
        const ek = {};
        return rk.objectKeys(this.shape).forEach((ik => {
          kk[ik] || (ek[ik] = this.shape[ik])
        })), new fe({
          ...this._def,
          shape: () => ek
        })
      }
      deepPartial() {
        return De(this)
      }
      partial(kk) {
        const ek = {};
        return rk.objectKeys(this.shape).forEach((ik => {
          const Dk = this.shape[ik];
          kk && !kk[ik] ? ek[ik] = Dk : ek[ik] = Dk.optional()
        })), new fe({
          ...this._def,
          shape: () => ek
        })
      }
      required(kk) {
        const ek = {};
        return rk.objectKeys(this.shape).forEach((ik => {
          if (kk && !kk[ik]) ek[ik] = this.shape[ik];
          else {
            let kk = this.shape[ik];
            for (; kk instanceof Ce;) kk = kk._def.innerType;
            ek[ik] = kk
          }
        })), new fe({
          ...this._def,
          shape: () => ek
        })
      }
      keyof() {
        return le(rk.objectKeys(this.shape))
      }
    }
    fe.create = (kk, ek) => new fe({
      shape: () => kk,
      unknownKeys: "strip",
      catchall: ke.create(),
      typeName: Qe.ZodObject,
      ...qk(ek)
    }), fe.strictCreate = (kk, ek) => new fe({
      shape: () => kk,
      unknownKeys: "strict",
      catchall: ke.create(),
      typeName: Qe.ZodObject,
      ...qk(ek)
    }), fe.lazycreate = (kk, ek) => new fe({
      shape: kk,
      unknownKeys: "strip",
      catchall: ke.create(),
      typeName: Qe.ZodObject,
      ...qk(ek)
    });
    class Se extends Ik {
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk), ik = this._def.options;
        if (ek.common.async) return Promise.all(ik.map((async kk => {
          const ik = {
            ...ek,
            common: {
              ...ek.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await kk._parseAsync({
              data: ek.data,
              path: ek.path,
              parent: ik
            }),
            ctx: ik
          }
        }))).then((function(kk) {
          for (const ek of kk)
            if ("valid" === ek.result.status) return ek.result;
          for (const Dk of kk)
            if ("bH" === Dk.result.status) return ek.common.issues.push(...Dk.ctx.common.issues), Dk.result;
          const ik = kk.map((kk => new nk(kk.ctx.common.issues)));
          return pk(ek, {
            code: xk.invalid_union,
            unionErrors: ik
          }), Yk
        }));
        {
          let kk;
          const Dk = [];
          for (const Sk of ik) {
            const ik = {
                ...ek,
                common: {
                  ...ek.common,
                  issues: []
                },
                parent: null
              },
              fk = Sk._parseSync({
                data: ek.data,
                path: ek.path,
                parent: ik
              });
            if ("valid" === fk.status) return fk;
            "bH" !== fk.status || kk || (kk = {
              result: fk,
              ctx: ik
            }), ik.common.issues.length && Dk.push(ik.common.issues)
          }
          if (kk) return ek.common.issues.push(...kk.ctx.common.issues), kk.result;
          const fk = Dk.map((kk => new nk(kk)));
          return pk(ek, {
            code: xk.invalid_union,
            unionErrors: fk
          }), Yk
        }
      }
      get options() {
        return this._def.options
      }
    }
    Se.create = (kk, ek) => new Se({
      options: kk,
      typeName: Qe.ZodUnion,
      ...qk(ek)
    });
    const be = kk => kk instanceof He ? be(kk.schema) : kk instanceof Le ? be(kk.innerType()) : kk instanceof we ? [kk.value] : kk instanceof pe ? kk.options : kk instanceof ye ? Object.keys(kk.enum) : kk instanceof je ? be(kk._def.innerType) : kk instanceof Gk ? [void 0] : kk instanceof Nk ? [null] : null;
    class re extends Ik {
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk);
        if (ek.parsedType !== Mk.object) return pk(ek, {
          code: xk.invalid_type,
          expected: Mk.object,
          received: ek.parsedType
        }), Yk;
        const ik = this.discriminator,
          Dk = ek.data[ik],
          fk = this.optionsMap.get(Dk);
        return fk ? ek.common.async ? fk._parseAsync({
          data: ek.data,
          path: ek.path,
          parent: ek
        }) : fk._parseSync({
          data: ek.data,
          path: ek.path,
          parent: ek
        }) : (pk(ek, {
          code: xk.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [ik]
        }), Yk)
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
      static create(kk, ek, ik) {
        const Dk = new Map;
        for (const fk of ek) {
          const ek = be(fk.shape[kk]);
          if (!ek) throw new Error(`A discriminator value for key \`${kk}\` could not be extracted from all schema options`);
          for (const ik of ek) {
            if (Dk.has(ik)) throw new Error(`Discriminator property ${String(kk)} has duplicate value ${String(ik)}`);
            Dk.set(ik, fk)
          }
        }
        return new re({
          typeName: Qe.ZodDiscriminatedUnion,
          discriminator: kk,
          options: ek,
          optionsMap: Dk,
          ...qk(ik)
        })
      }
    }

    function Pe(kk, ek) {
      const ik = Kk(kk),
        Dk = Kk(ek);
      if (kk === ek) return {
        valid: !0,
        data: kk
      };
      if (ik === Mk.object && Dk === Mk.object) {
        const ik = rk.objectKeys(ek),
          Dk = rk.objectKeys(kk).filter((kk => -1 !== ik.indexOf(kk))),
          fk = {
            ...kk,
            ...ek
          };
        for (const Sk of Dk) {
          const ik = Pe(kk[Sk], ek[Sk]);
          if (!ik.valid) return {
            valid: !1
          };
          fk[Sk] = ik.data
        }
        return {
          valid: !0,
          data: fk
        }
      }
      if (ik === Mk.array && Dk === Mk.array) {
        if (kk.length !== ek.length) return {
          valid: !1
        };
        const ik = [];
        for (let Dk = 0; Dk < kk.length; Dk++) {
          const fk = Pe(kk[Dk], ek[Dk]);
          if (!fk.valid) return {
            valid: !1
          };
          ik.push(fk.data)
        }
        return {
          valid: !0,
          data: ik
        }
      }
      return ik === Mk.date && Dk === Mk.date && +kk === +ek ? {
        valid: !0,
        data: kk
      } : {
        valid: !1
      }
    }
    class me extends Ik {
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk), Dk = (kk, Dk) => {
          if (Ak(kk) || Ak(Dk)) return Yk;
          const fk = Pe(kk.value, Dk.value);
          return fk.valid ? ((jk(kk) || jk(Dk)) && ek.bH(), {
            status: ek.value,
            value: fk.data
          }) : (pk(ik, {
            code: xk.invalid_intersection_types
          }), Yk)
        };
        return ik.common.async ? Promise.all([this._def.left._parseAsync({
          data: ik.data,
          path: ik.path,
          parent: ik
        }), this._def.right._parseAsync({
          data: ik.data,
          path: ik.path,
          parent: ik
        })]).then((kk => {
          let [ek, ik] = kk;
          return Dk(ek, ik)
        })) : Dk(this._def.left._parseSync({
          data: ik.data,
          path: ik.path,
          parent: ik
        }), this._def.right._parseSync({
          data: ik.data,
          path: ik.path,
          parent: ik
        }))
      }
    }
    me.create = (kk, ek, ik) => new me({
      left: kk,
      right: ek,
      typeName: Qe.ZodIntersection,
      ...qk(ik)
    });
    class Me extends Ik {
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk);
        if (ik.parsedType !== Mk.array) return pk(ik, {
          code: xk.invalid_type,
          expected: Mk.array,
          received: ik.parsedType
        }), Yk;
        if (ik.data.length < this._def.items.length) return pk(ik, {
          code: xk.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Yk;
        !this._def.rest && ik.data.length > this._def.items.length && (pk(ik, {
          code: xk.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), ek.bH());
        const Dk = [...ik.data].map(((kk, ek) => {
          const Dk = this._def.items[ek] || this._def.rest;
          return Dk ? Dk._parse(new Fk(ik, kk, ik.path, ek)) : null
        })).filter((kk => !!kk));
        return ik.common.async ? Promise.all(Dk).then((kk => yk.mergeArray(ek, kk))) : yk.mergeArray(ek, Dk)
      }
      get items() {
        return this._def.items
      }
      rest(kk) {
        return new Me({
          ...this._def,
          rest: kk
        })
      }
    }
    Me.create = (kk, ek) => {
      if (!Array.isArray(kk)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Me({
        items: kk,
        typeName: Qe.ZodTuple,
        rest: null,
        ...qk(ek)
      })
    };
    class Ke extends Ik {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk);
        if (ik.parsedType !== Mk.object) return pk(ik, {
          code: xk.invalid_type,
          expected: Mk.object,
          received: ik.parsedType
        }), Yk;
        const Dk = [],
          fk = this._def.keyType,
          Sk = this._def.valueType;
        for (const bk in ik.data) Dk.push({
          key: fk._parse(new Fk(ik, bk, ik.path, bk)),
          value: Sk._parse(new Fk(ik, ik.data[bk], ik.path, bk))
        });
        return ik.common.async ? yk.mergeObjectAsync(ek, Dk) : yk.mergeObjectSync(ek, Dk)
      }
      get element() {
        return this._def.valueType
      }
      static create(kk, ek, ik) {
        return new Ke(ek instanceof Ik ? {
          keyType: kk,
          valueType: ek,
          typeName: Qe.ZodRecord,
          ...qk(ik)
        } : {
          keyType: Xk.create(),
          valueType: kk,
          typeName: Qe.ZodRecord,
          ...qk(ek)
        })
      }
    }
    class xe extends Ik {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk);
        if (ik.parsedType !== Mk.map) return pk(ik, {
          code: xk.invalid_type,
          expected: Mk.map,
          received: ik.parsedType
        }), Yk;
        const Dk = this._def.keyType,
          fk = this._def.valueType,
          Sk = [...ik.data.entries()].map(((kk, ek) => {
            let [Sk, bk] = kk;
            return {
              key: Dk._parse(new Fk(ik, Sk, ik.path, [ek, "key"])),
              value: fk._parse(new Fk(ik, bk, ik.path, [ek, "value"]))
            }
          }));
        if (ik.common.async) {
          const kk = new Map;
          return Promise.resolve().then((async () => {
            for (const ik of Sk) {
              const Dk = await ik.key,
                fk = await ik.value;
              if ("aborted" === Dk.status || "aborted" === fk.status) return Yk;
              "bH" !== Dk.status && "bH" !== fk.status || ek.bH(), kk.set(Dk.value, fk.value)
            }
            return {
              status: ek.value,
              value: kk
            }
          }))
        } {
          const kk = new Map;
          for (const ik of Sk) {
            const Dk = ik.key,
              fk = ik.value;
            if ("aborted" === Dk.status || "aborted" === fk.status) return Yk;
            "bH" !== Dk.status && "bH" !== fk.status || ek.bH(), kk.set(Dk.value, fk.value)
          }
          return {
            status: ek.value,
            value: kk
          }
        }
      }
    }
    xe.create = (kk, ek, ik) => new xe({
      valueType: ek,
      keyType: kk,
      typeName: Qe.ZodMap,
      ...qk(ik)
    });
    class ne extends Ik {
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk);
        if (ik.parsedType !== Mk.set) return pk(ik, {
          code: xk.invalid_type,
          expected: Mk.set,
          received: ik.parsedType
        }), Yk;
        const Dk = this._def;
        null !== Dk.minSize && ik.data.size < Dk.minSize.value && (pk(ik, {
          code: xk.too_small,
          minimum: Dk.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Dk.minSize.message
        }), ek.bH()), null !== Dk.maxSize && ik.data.size > Dk.maxSize.value && (pk(ik, {
          code: xk.too_big,
          maximum: Dk.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Dk.maxSize.message
        }), ek.bH());
        const fk = this._def.valueType;

        function Sk(kk) {
          const ik = new Set;
          for (const Dk of kk) {
            if ("aborted" === Dk.status) return Yk;
            "bH" === Dk.status && ek.bH(), ik.add(Dk.value)
          }
          return {
            status: ek.value,
            value: ik
          }
        }
        const bk = [...ik.data.values()].map(((kk, ek) => fk._parse(new Fk(ik, kk, ik.path, ek))));
        return ik.common.async ? Promise.all(bk).then((kk => Sk(kk))) : Sk(bk)
      }
      min(kk, ek) {
        return new ne({
          ...this._def,
          minSize: {
            value: kk,
            message: Vk.toString(ek)
          }
        })
      }
      max(kk, ek) {
        return new ne({
          ...this._def,
          maxSize: {
            value: kk,
            message: Vk.toString(ek)
          }
        })
      }
      size(kk, ek) {
        return this.min(kk, ek).max(kk, ek)
      }
      nonempty(kk) {
        return this.min(1, kk)
      }
    }
    ne.create = (kk, ek) => new ne({
      valueType: kk,
      minSize: null,
      maxSize: null,
      typeName: Qe.ZodSet,
      ...qk(ek)
    });
    class Ue extends Ik {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk);
        if (ek.parsedType !== Mk.function) return pk(ek, {
          code: xk.invalid_type,
          expected: Mk.function,
          received: ek.parsedType
        }), Yk;

        function ik(kk, ik) {
          return lk({
            data: kk,
            path: ek.path,
            errorMaps: [ek.common.contextualErrorMap, ek.schemaErrorMap, wk(), Uk].filter((kk => !!kk)),
            issueData: {
              code: xk.invalid_arguments,
              argumentsError: ik
            }
          })
        }

        function Dk(kk, ik) {
          return lk({
            data: kk,
            path: ek.path,
            errorMaps: [ek.common.contextualErrorMap, ek.schemaErrorMap, wk(), Uk].filter((kk => !!kk)),
            issueData: {
              code: xk.invalid_return_type,
              returnTypeError: ik
            }
          })
        }
        const fk = {
            errorMap: ek.common.contextualErrorMap
          },
          Sk = ek.data;
        if (this._def.returns instanceof Ye) {
          const kk = this;
          return Ck((async function() {
            for (var ek = arguments.length, bk = new Array(ek), rk = 0; rk < ek; rk++) bk[rk] = arguments[rk];
            const Pk = new nk([]),
              mk = await kk._def.args.parseAsync(bk, fk).catch((kk => {
                throw Pk.addIssue(ik(bk, kk)), Pk
              })),
              Mk = await Reflect.apply(Sk, this, mk);
            return await kk._def.returns._def.type.parseAsync(Mk, fk).catch((kk => {
              throw Pk.addIssue(Dk(Mk, kk)), Pk
            }))
          }))
        } {
          const kk = this;
          return Ck((function() {
            for (var ek = arguments.length, bk = new Array(ek), rk = 0; rk < ek; rk++) bk[rk] = arguments[rk];
            const Pk = kk._def.args.safeParse(bk, fk);
            if (!Pk.success) throw new nk([ik(bk, Pk.error)]);
            const mk = Reflect.apply(Sk, this, Pk.data),
              Mk = kk._def.returns.safeParse(mk, fk);
            if (!Mk.success) throw new nk([Dk(mk, Mk.error)]);
            return Mk.data
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
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return new Ue({
          ...this._def,
          args: Me.create(ek).rest(Jk.create())
        })
      }
      returns(kk) {
        return new Ue({
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
      static create(kk, ek, ik) {
        return new Ue({
          args: kk || Me.create([]).rest(Jk.create()),
          returns: ek || Jk.create(),
          typeName: Qe.ZodFunction,
          ...qk(ik)
        })
      }
    }
    class He extends Ik {
      get schema() {
        return this._def.getter()
      }
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk);
        return this._def.getter()._parse({
          data: ek.data,
          path: ek.path,
          parent: ek
        })
      }
    }
    He.create = (kk, ek) => new He({
      getter: kk,
      typeName: Qe.ZodLazy,
      ...qk(ek)
    });
    class we extends Ik {
      _parse(kk) {
        if (kk.data !== this._def.value) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            received: ek.data,
            code: xk.invalid_literal,
            expected: this._def.value
          }), Yk
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

    function le(kk, ek) {
      return new pe({
        values: kk,
        typeName: Qe.ZodEnum,
        ...qk(ek)
      })
    }
    we.create = (kk, ek) => new we({
      value: kk,
      typeName: Qe.ZodLiteral,
      ...qk(ek)
    });
    class pe extends Ik {
      _parse(kk) {
        if ("string" !== typeof kk.data) {
          const ek = this._getOrReturnCtx(kk),
            ik = this._def.values;
          return pk(ek, {
            expected: rk.joinValues(ik),
            received: ek.parsedType,
            code: xk.invalid_type
          }), Yk
        }
        if (-1 === this._def.values.indexOf(kk.data)) {
          const ek = this._getOrReturnCtx(kk),
            ik = this._def.values;
          return pk(ek, {
            received: ek.data,
            code: xk.invalid_enum_value,
            options: ik
          }), Yk
        }
        return Ck(kk.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const kk = {};
        for (const ek of this._def.values) kk[ek] = ek;
        return kk
      }
      get Values() {
        const kk = {};
        for (const ek of this._def.values) kk[ek] = ek;
        return kk
      }
      get Enum() {
        const kk = {};
        for (const ek of this._def.values) kk[ek] = ek;
        return kk
      }
      extract(kk) {
        return pe.create(kk)
      }
      exclude(kk) {
        return pe.create(this.options.filter((ek => !kk.includes(ek))))
      }
    }
    pe.create = le;
    class ye extends Ik {
      _parse(kk) {
        const ek = rk.getValidEnumValues(this._def.values),
          ik = this._getOrReturnCtx(kk);
        if (ik.parsedType !== Mk.string && ik.parsedType !== Mk.number) {
          const kk = rk.objectValues(ek);
          return pk(ik, {
            expected: rk.joinValues(kk),
            received: ik.parsedType,
            code: xk.invalid_type
          }), Yk
        }
        if (-1 === ek.indexOf(kk.data)) {
          const kk = rk.objectValues(ek);
          return pk(ik, {
            received: ik.data,
            code: xk.invalid_enum_value,
            options: kk
          }), Yk
        }
        return Ck(kk.data)
      }
      get enum() {
        return this._def.values
      }
    }
    ye.create = (kk, ek) => new ye({
      values: kk,
      typeName: Qe.ZodNativeEnum,
      ...qk(ek)
    });
    class Ye extends Ik {
      unwrap() {
        return this._def.type
      }
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk);
        if (ek.parsedType !== Mk.promise && !1 === ek.common.async) return pk(ek, {
          code: xk.invalid_type,
          expected: Mk.promise,
          received: ek.parsedType
        }), Yk;
        const ik = ek.parsedType === Mk.promise ? ek.data : Promise.resolve(ek.data);
        return Ck(ik.then((kk => this._def.type.parseAsync(kk, {
          path: ek.path,
          errorMap: ek.common.contextualErrorMap
        }))))
      }
    }
    Ye.create = (kk, ek) => new Ye({
      type: kk,
      typeName: Qe.ZodPromise,
      ...qk(ek)
    });
    class Le extends Ik {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Qe.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk), Dk = this._def.effect || null, fk = {
          addIssue: kk => {
            pk(ik, kk), kk.fatal ? ek.abort() : ek.bH()
          },
          get path() {
            return ik.path
          }
        };
        if (fk.addIssue = fk.addIssue.bind(fk), "preprocess" === Dk.type) {
          const kk = Dk.transform(ik.data, fk);
          return ik.common.issues.length ? {
            status: "bH",
            value: ik.data
          } : ik.common.async ? Promise.resolve(kk).then((kk => this._def.schema._parseAsync({
            data: kk,
            path: ik.path,
            parent: ik
          }))) : this._def.schema._parseSync({
            data: kk,
            path: ik.path,
            parent: ik
          })
        }
        if ("refinement" === Dk.type) {
          const kk = kk => {
            const ek = Dk.refinement(kk, fk);
            if (ik.common.async) return Promise.resolve(ek);
            if (ek instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return kk
          };
          if (!1 === ik.common.async) {
            const Dk = this._def.schema._parseSync({
              data: ik.data,
              path: ik.path,
              parent: ik
            });
            return "aborted" === Dk.status ? Yk : ("bH" === Dk.status && ek.bH(), kk(Dk.value), {
              status: ek.value,
              value: Dk.value
            })
          }
          return this._def.schema._parseAsync({
            data: ik.data,
            path: ik.path,
            parent: ik
          }).then((ik => "aborted" === ik.status ? Yk : ("bH" === ik.status && ek.bH(), kk(ik.value).then((() => ({
            status: ek.value,
            value: ik.value
          }))))))
        }
        if ("transform" === Dk.type) {
          if (!1 === ik.common.async) {
            const kk = this._def.schema._parseSync({
              data: ik.data,
              path: ik.path,
              parent: ik
            });
            if (!sk(kk)) return kk;
            const Sk = Dk.transform(kk.value, fk);
            if (Sk instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: ek.value,
              value: Sk
            }
          }
          return this._def.schema._parseAsync({
            data: ik.data,
            path: ik.path,
            parent: ik
          }).then((kk => sk(kk) ? Promise.resolve(Dk.transform(kk.value, fk)).then((kk => ({
            status: ek.value,
            value: kk
          }))) : kk))
        }
        rk.assertNever(Dk)
      }
    }
    Le.create = (kk, ek, ik) => new Le({
      schema: kk,
      typeName: Qe.ZodEffects,
      effect: ek,
      ...qk(ik)
    }), Le.createWithPreprocess = (kk, ek, ik) => new Le({
      schema: ek,
      effect: {
        type: "preprocess",
        transform: kk
      },
      typeName: Qe.ZodEffects,
      ...qk(ik)
    });
    class Ce extends Ik {
      _parse(kk) {
        return this._getType(kk) === Mk.undefined ? Ck(void 0) : this._def.innerType._parse(kk)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Ce.create = (kk, ek) => new Ce({
      innerType: kk,
      typeName: Qe.ZodOptional,
      ...qk(ek)
    });
    class Ae extends Ik {
      _parse(kk) {
        return this._getType(kk) === Mk.null ? Ck(null) : this._def.innerType._parse(kk)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Ae.create = (kk, ek) => new Ae({
      innerType: kk,
      typeName: Qe.ZodNullable,
      ...qk(ek)
    });
    class je extends Ik {
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk);
        let ik = ek.data;
        return ek.parsedType === Mk.undefined && (ik = this._def.defaultValue()), this._def.innerType._parse({
          data: ik,
          path: ek.path,
          parent: ek
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    je.create = (kk, ek) => new je({
      innerType: kk,
      typeName: Qe.ZodDefault,
      defaultValue: "function" === typeof ek.default ? ek.default : () => ek.default,
      ...qk(ek)
    });
    class se extends Ik {
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk), ik = {
          ...ek,
          common: {
            ...ek.common,
            issues: []
          }
        }, Dk = this._def.innerType._parse({
          data: ik.data,
          path: ik.path,
          parent: {
            ...ik
          }
        });
        return dk(Dk) ? Dk.then((kk => ({
          status: "valid",
          value: "valid" === kk.status ? kk.value : this._def.catchValue({
            get error() {
              return new nk(ik.common.issues)
            },
            input: ik.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Dk.status ? Dk.value : this._def.catchValue({
            get error() {
              return new nk(ik.common.issues)
            },
            input: ik.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    se.create = (kk, ek) => new se({
      innerType: kk,
      typeName: Qe.ZodCatch,
      catchValue: "function" === typeof ek.catch ? ek.catch : () => ek.catch,
      ...qk(ek)
    });
    class de extends Ik {
      _parse(kk) {
        if (this._getType(kk) !== Mk.nan) {
          const ek = this._getOrReturnCtx(kk);
          return pk(ek, {
            code: xk.invalid_type,
            expected: Mk.nan,
            received: ek.parsedType
          }), Yk
        }
        return {
          status: "valid",
          value: kk.data
        }
      }
    }
    de.create = kk => new de({
      typeName: Qe.ZodNaN,
      ...qk(kk)
    });
    const Ve = Symbol("zod_brand");
    class Fe extends Ik {
      _parse(kk) {
        const {
          ctx: ek
        } = this._processInputParams(kk), ik = ek.data;
        return this._def.type._parse({
          data: ik,
          path: ek.path,
          parent: ek
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ue extends Ik {
      _parse(kk) {
        const {
          status: ek,
          ctx: ik
        } = this._processInputParams(kk);
        if (ik.common.async) {
          return (async () => {
            const kk = await this._def.in._parseAsync({
              data: ik.data,
              path: ik.path,
              parent: ik
            });
            return "aborted" === kk.status ? Yk : "bH" === kk.status ? (ek.bH(), Lk(kk.value)) : this._def.out._parseAsync({
              data: kk.value,
              path: ik.path,
              parent: ik
            })
          })()
        } {
          const kk = this._def.in._parseSync({
            data: ik.data,
            path: ik.path,
            parent: ik
          });
          return "aborted" === kk.status ? Yk : "bH" === kk.status ? (ek.bH(), {
            status: "bH",
            value: kk.value
          }) : this._def.out._parseSync({
            data: kk.value,
            path: ik.path,
            parent: ik
          })
        }
      }
      static create(kk, ek) {
        return new ue({
          in: kk,
          out: ek,
          typeName: Qe.ZodPipeline
        })
      }
    }
    class qe extends Ik {
      _parse(kk) {
        const ek = this._def.innerType._parse(kk);
        return sk(ek) && (ek.value = Object.freeze(ek.value)), ek
      }
    }
    qe.create = (kk, ek) => new qe({
      innerType: kk,
      typeName: Qe.ZodReadonly,
      ...qk(ek)
    });
    const Ie = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ik = arguments.length > 2 ? arguments[2] : void 0;
        return kk ? Rk.create().superRefine(((Dk, fk) => {
          var Sk, bk;
          if (!kk(Dk)) {
            const kk = "function" === typeof ek ? ek(Dk) : "string" === typeof ek ? {
                message: ek
              } : ek,
              rk = null === (bk = null !== (Sk = kk.fatal) && void 0 !== Sk ? Sk : ik) || void 0 === bk || bk,
              Pk = "string" === typeof kk ? {
                message: kk
              } : kk;
            fk.addIssue({
              code: "custom",
              ...Pk,
              fatal: rk
            })
          }
        })) : Rk.create()
      },
      ze = {
        object: fe.lazycreate
      };
    var Qe;
    ! function(kk) {
      kk.ZodString = "ZodString", kk.ZodNumber = "ZodNumber", kk.ZodNaN = "ZodNaN", kk.ZodBigInt = "ZodBigInt", kk.ZodBoolean = "ZodBoolean", kk.ZodDate = "ZodDate", kk.ZodSymbol = "ZodSymbol", kk.ZodUndefined = "ZodUndefined", kk.ZodNull = "ZodNull", kk.ZodAny = "ZodAny", kk.ZodUnknown = "ZodUnknown", kk.ZodNever = "ZodNever", kk.ZodVoid = "ZodVoid", kk.ZodArray = "ZodArray", kk.ZodObject = "ZodObject", kk.ZodUnion = "ZodUnion", kk.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", kk.ZodIntersection = "ZodIntersection", kk.ZodTuple = "ZodTuple", kk.ZodRecord = "ZodRecord", kk.ZodMap = "ZodMap", kk.ZodSet = "ZodSet", kk.ZodFunction = "ZodFunction", kk.ZodLazy = "ZodLazy", kk.ZodLiteral = "ZodLiteral", kk.ZodEnum = "ZodEnum", kk.ZodEffects = "ZodEffects", kk.ZodNativeEnum = "ZodNativeEnum", kk.ZodOptional = "ZodOptional", kk.ZodNullable = "ZodNullable", kk.ZodDefault = "ZodDefault", kk.ZodCatch = "ZodCatch", kk.ZodPromise = "ZodPromise", kk.ZodBranded = "ZodBranded", kk.ZodPipeline = "ZodPipeline", kk.ZodReadonly = "ZodReadonly"
    }(Qe || (Qe = {}));
    const ve = Xk.create,
      Ee = ck.create,
      he = de.create,
      ae = Tk.create,
      We = Zk.create,
      te = Ok.create,
      Xe = gk.create,
      Be = Gk.create,
      ce = Nk.create,
      Te = Rk.create,
      oe = Jk.create,
      Ze = ke.create,
      Oe = ee.create,
      ge = ie.create,
      Ge = fe.create,
      Ne = fe.strictCreate,
      Re = Se.create,
      Je = re.create,
      ki = me.create,
      ei = Me.create,
      ii = Ke.create,
      Di = xe.create,
      fi = ne.create,
      Si = Ue.create,
      bi = He.create,
      ri = we.create,
      Pi = pe.create,
      mi = ye.create,
      Mi = Ye.create,
      Ki = Le.create,
      xi = Ce.create,
      ni = Ae.create,
      Ui = Le.createWithPreprocess,
      Hi = ue.create,
      wi = {
        string: kk => Xk.create({
          ...kk,
          coerce: !0
        }),
        number: kk => ck.create({
          ...kk,
          coerce: !0
        }),
        boolean: kk => Zk.create({
          ...kk,
          coerce: !0
        }),
        bigint: kk => Tk.create({
          ...kk,
          coerce: !0
        }),
        date: kk => Ok.create({
          ...kk,
          coerce: !0
        })
      },
      li = Yk;
    var yi = Object.freeze({
        __proto__: null,
        defaultErrorMap: Uk,
        setErrorMap: function(kk) {
          Hk = kk
        },
        getErrorMap: wk,
        makeIssue: lk,
        EMPTY_PATH: [],
        addIssueToContext: pk,
        ParseStatus: yk,
        INVALID: Yk,
        DIRTY: Lk,
        OK: Ck,
        isAborted: Ak,
        isDirty: jk,
        isValid: sk,
        isAsync: dk,
        get util() {
          return rk
        },
        get objectUtil() {
          return Pk
        },
        ZodParsedType: Mk,
        getParsedType: Kk,
        ZodType: Ik,
        ZodString: Xk,
        ZodNumber: ck,
        ZodBigInt: Tk,
        ZodBoolean: Zk,
        ZodDate: Ok,
        ZodSymbol: gk,
        ZodUndefined: Gk,
        ZodNull: Nk,
        ZodAny: Rk,
        ZodUnknown: Jk,
        ZodNever: ke,
        ZodVoid: ee,
        ZodArray: ie,
        ZodObject: fe,
        ZodUnion: Se,
        ZodDiscriminatedUnion: re,
        ZodIntersection: me,
        ZodTuple: Me,
        ZodRecord: Ke,
        ZodMap: xe,
        ZodSet: ne,
        ZodFunction: Ue,
        ZodLazy: He,
        ZodLiteral: we,
        ZodEnum: pe,
        ZodNativeEnum: ye,
        ZodPromise: Ye,
        ZodEffects: Le,
        ZodTransformer: Le,
        ZodOptional: Ce,
        ZodNullable: Ae,
        ZodDefault: je,
        ZodCatch: se,
        ZodNaN: de,
        BRAND: Ve,
        ZodBranded: Fe,
        ZodPipeline: ue,
        ZodReadonly: qe,
        custom: Ie,
        Schema: Ik,
        ZodSchema: Ik,
        late: ze,
        get ZodFirstPartyTypeKind() {
          return Qe
        },
        coerce: wi,
        any: Te,
        array: ge,
        bigint: ae,
        boolean: We,
        date: te,
        discriminatedUnion: Je,
        effect: Ki,
        enum: Pi,
        function: Si,
        instanceof: function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${kk.name}`
          };
          return Ie((ek => ek instanceof kk), ek)
        },
        intersection: ki,
        lazy: bi,
        literal: ri,
        map: Di,
        nan: he,
        nativeEnum: mi,
        never: Ze,
        null: ce,
        nullable: ni,
        number: Ee,
        object: Ge,
        oboolean: () => We().optional(),
        onumber: () => Ee().optional(),
        optional: xi,
        ostring: () => ve().optional(),
        pipeline: Hi,
        preprocess: Ui,
        promise: Mi,
        record: ii,
        set: fi,
        strictObject: Ne,
        string: ve,
        symbol: Xe,
        transformer: Ki,
        tuple: ei,
        undefined: Be,
        union: Re,
        unknown: oe,
        void: Oe,
        NEVER: li,
        ZodIssueCode: xk,
        quotelessJson: kk => JSON.stringify(kk, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: nk
      }),
      Yi = {
        exports: {}
      };
    ! function(kk) {
      var ek = function(kk) {
        var ik = 1e7,
          Dk = 9007199254740992,
          fk = xk(Dk),
          Sk = "0123456789abcdefghijklmnopqrstuvwxyz",
          bk = "function" === typeof BigInt;

        function rk(kk, ek, ik, Dk) {
          return "undefined" === typeof kk ? rk[0] : "undefined" !== typeof ek && (10 !== +ek || ik) ? Zk(kk, ek, ik, Dk) : Rk(kk)
        }

        function Pk(kk, ek) {
          this.value = kk, this.sign = ek, this.isSmall = !1
        }

        function mk(kk) {
          this.value = kk, this.sign = kk < 0, this.isSmall = !0
        }

        function Mk(kk) {
          this.value = kk
        }

        function Kk(kk) {
          return -Dk < kk && kk < Dk
        }

        function xk(kk) {
          return kk < 1e7 ? [kk] : kk < 1e14 ? [kk % 1e7, Math.floor(kk / 1e7)] : [kk % 1e7, Math.floor(kk / 1e7) % 1e7, Math.floor(kk / 1e14)]
        }

        function nk(kk) {
          Uk(kk);
          var ek = kk.length;
          if (ek < 4 && qk(kk, fk) < 0) switch (ek) {
            case 0:
              return 0;
            case 1:
              return kk[0];
            case 2:
              return kk[0] + kk[1] * ik;
            default:
              return kk[0] + (kk[1] + kk[2] * ik) * ik
          }
          return kk
        }

        function Uk(kk) {
          for (var ek = kk.length; 0 === kk[--ek];);
          kk.length = ek + 1
        }

        function Hk(kk) {
          for (var ek = new Array(kk), ik = -1; ++ik < kk;) ek[ik] = 0;
          return ek
        }

        function wk(kk) {
          return kk > 0 ? Math.floor(kk) : Math.ceil(kk)
        }

        function lk(kk, ek) {
          var Dk, fk, Sk = kk.length,
            bk = ek.length,
            rk = new Array(Sk),
            Pk = 0,
            mk = ik;
          for (fk = 0; fk < bk; fk++) Pk = (Dk = kk[fk] + ek[fk] + Pk) >= mk ? 1 : 0, rk[fk] = Dk - Pk * mk;
          for (; fk < Sk;) Pk = (Dk = kk[fk] + Pk) === mk ? 1 : 0, rk[fk++] = Dk - Pk * mk;
          return Pk > 0 && rk.push(Pk), rk
        }

        function pk(kk, ek) {
          return kk.length >= ek.length ? lk(kk, ek) : lk(ek, kk)
        }

        function yk(kk, ek) {
          var Dk, fk, Sk = kk.length,
            bk = new Array(Sk),
            rk = ik;
          for (fk = 0; fk < Sk; fk++) Dk = kk[fk] - rk + ek, ek = Math.floor(Dk / rk), bk[fk] = Dk - ek * rk, ek += 1;
          for (; ek > 0;) bk[fk++] = ek % rk, ek = Math.floor(ek / rk);
          return bk
        }

        function Yk(kk, ek) {
          var Dk, fk, Sk = kk.length,
            bk = ek.length,
            rk = new Array(Sk),
            Pk = 0,
            mk = ik;
          for (Dk = 0; Dk < bk; Dk++)(fk = kk[Dk] - Pk - ek[Dk]) < 0 ? (fk += mk, Pk = 1) : Pk = 0, rk[Dk] = fk;
          for (Dk = bk; Dk < Sk; Dk++) {
            if (!((fk = kk[Dk] - Pk) < 0)) {
              rk[Dk++] = fk;
              break
            }
            fk += mk, rk[Dk] = fk
          }
          for (; Dk < Sk; Dk++) rk[Dk] = kk[Dk];
          return Uk(rk), rk
        }

        function Lk(kk, ek, Dk) {
          var fk, Sk, bk = kk.length,
            rk = new Array(bk),
            Mk = -ek,
            Kk = ik;
          for (fk = 0; fk < bk; fk++) Sk = kk[fk] + Mk, Mk = Math.floor(Sk / Kk), Sk %= Kk, rk[fk] = Sk < 0 ? Sk + Kk : Sk;
          return "number" === typeof(rk = nk(rk)) ? (Dk && (rk = -rk), new mk(rk)) : new Pk(rk, Dk)
        }

        function Ck(kk, ek) {
          var Dk, fk, Sk, bk, rk = kk.length,
            Pk = ek.length,
            mk = Hk(rk + Pk),
            Mk = ik;
          for (Sk = 0; Sk < rk; ++Sk) {
            bk = kk[Sk];
            for (var Kk = 0; Kk < Pk; ++Kk) Dk = bk * ek[Kk] + mk[Sk + Kk], fk = Math.floor(Dk / Mk), mk[Sk + Kk] = Dk - fk * Mk, mk[Sk + Kk + 1] += fk
          }
          return Uk(mk), mk
        }

        function Ak(kk, ek) {
          var Dk, fk, Sk = kk.length,
            bk = new Array(Sk),
            rk = ik,
            Pk = 0;
          for (fk = 0; fk < Sk; fk++) Dk = kk[fk] * ek + Pk, Pk = Math.floor(Dk / rk), bk[fk] = Dk - Pk * rk;
          for (; Pk > 0;) bk[fk++] = Pk % rk, Pk = Math.floor(Pk / rk);
          return bk
        }

        function jk(kk, ek) {
          for (var ik = []; ek-- > 0;) ik.push(0);
          return ik.concat(kk)
        }

        function sk(kk, ek) {
          var ik = Math.max(kk.length, ek.length);
          if (ik <= 30) return Ck(kk, ek);
          ik = Math.ceil(ik / 2);
          var Dk = kk.slice(ik),
            fk = kk.slice(0, ik),
            Sk = ek.slice(ik),
            bk = ek.slice(0, ik),
            rk = sk(fk, bk),
            Pk = sk(Dk, Sk),
            mk = sk(pk(fk, Dk), pk(bk, Sk)),
            Mk = pk(pk(rk, jk(Yk(Yk(mk, rk), Pk), ik)), jk(Pk, 2 * ik));
          return Uk(Mk), Mk
        }

        function dk(kk, ek, Dk) {
          return new Pk(kk < ik ? Ak(ek, kk) : Ck(ek, xk(kk)), Dk)
        }

        function Vk(kk) {
          var ek, Dk, fk, Sk, bk = kk.length,
            rk = Hk(bk + bk),
            Pk = ik;
          for (fk = 0; fk < bk; fk++) {
            Dk = 0 - (Sk = kk[fk]) * Sk;
            for (var mk = fk; mk < bk; mk++) ek = Sk * kk[mk] * 2 + rk[fk + mk] + Dk, Dk = Math.floor(ek / Pk), rk[fk + mk] = ek - Dk * Pk;
            rk[fk + bk] = Dk
          }
          return Uk(rk), rk
        }

        function Fk(kk, ek) {
          var Dk, fk, Sk, bk, rk = kk.length,
            Pk = Hk(rk),
            mk = ik;
          for (Sk = 0, Dk = rk - 1; Dk >= 0; --Dk) Sk = (bk = Sk * mk + kk[Dk]) - (fk = wk(bk / ek)) * ek, Pk[Dk] = 0 | fk;
          return [Pk, 0 | Sk]
        }

        function uk(kk, ek) {
          var Dk, fk = Rk(ek);
          if (bk) return [new Mk(kk.value / fk.value), new Mk(kk.value % fk.value)];
          var Sk, Kk = kk.value,
            lk = fk.value;
          if (0 === lk) throw new Error("Cannot divide by zero");
          if (kk.isSmall) return fk.isSmall ? [new mk(wk(Kk / lk)), new mk(Kk % lk)] : [rk[0], kk];
          if (fk.isSmall) {
            if (1 === lk) return [kk, rk[0]];
            if (-1 == lk) return [kk.ge(), rk[0]];
            var pk = Math.abs(lk);
            if (pk < ik) {
              Sk = nk((Dk = Fk(Kk, pk))[0]);
              var yk = Dk[1];
              return kk.sign && (yk = -yk), "number" === typeof Sk ? (kk.sign !== fk.sign && (Sk = -Sk), [new mk(Sk), new mk(yk)]) : [new Pk(Sk, kk.sign !== fk.sign), new mk(yk)]
            }
            lk = xk(pk)
          }
          var Lk = qk(Kk, lk);
          if (-1 === Lk) return [rk[0], kk];
          if (0 === Lk) return [rk[kk.sign === fk.sign ? 1 : -1], rk[0]];
          Dk = Kk.length + lk.length <= 200 ? function(kk, ek) {
            var Dk, fk, Sk, bk, rk, Pk, mk, Mk = kk.length,
              Kk = ek.length,
              xk = ik,
              Uk = Hk(ek.length),
              wk = ek[Kk - 1],
              lk = Math.ceil(xk / (2 * wk)),
              pk = Ak(kk, lk),
              yk = Ak(ek, lk);
            for (pk.length <= Mk && pk.push(0), yk.push(0), wk = yk[Kk - 1], fk = Mk - Kk; fk >= 0; fk--) {
              for (Dk = xk - 1, pk[fk + Kk] !== wk && (Dk = Math.floor((pk[fk + Kk] * xk + pk[fk + Kk - 1]) / wk)), Sk = 0, bk = 0, Pk = yk.length, rk = 0; rk < Pk; rk++) Sk += Dk * yk[rk], mk = Math.floor(Sk / xk), bk += pk[fk + rk] - (Sk - mk * xk), Sk = mk, bk < 0 ? (pk[fk + rk] = bk + xk, bk = -1) : (pk[fk + rk] = bk, bk = 0);
              for (; 0 !== bk;) {
                for (Dk -= 1, Sk = 0, rk = 0; rk < Pk; rk++)(Sk += pk[fk + rk] - xk + yk[rk]) < 0 ? (pk[fk + rk] = Sk + xk, Sk = 0) : (pk[fk + rk] = Sk, Sk = 1);
                bk += Sk
              }
              Uk[fk] = Dk
            }
            return pk = Fk(pk, lk)[0], [nk(Uk), nk(pk)]
          }(Kk, lk) : function(kk, ek) {
            for (var Dk, fk, Sk, bk, rk, Pk = kk.length, mk = ek.length, Mk = [], Kk = [], xk = ik; Pk;)
              if (Kk.unshift(kk[--Pk]), Uk(Kk), qk(Kk, ek) < 0) Mk.push(0);
              else {
                Sk = Kk[(fk = Kk.length) - 1] * xk + Kk[fk - 2], bk = ek[mk - 1] * xk + ek[mk - 2], fk > mk && (Sk = (Sk + 1) * xk), Dk = Math.ceil(Sk / bk);
                do {
                  if (qk(rk = Ak(ek, Dk), Kk) <= 0) break;
                  Dk--
                } while (Dk);
                Mk.push(Dk), Kk = Yk(Kk, rk)
              } return Mk.reverse(), [nk(Mk), nk(Kk)]
          }(Kk, lk), Sk = Dk[0];
          var Ck = kk.sign !== fk.sign,
            jk = Dk[1],
            sk = kk.sign;
          return "number" === typeof Sk ? (Ck && (Sk = -Sk), Sk = new mk(Sk)) : Sk = new Pk(Sk, Ck), "number" === typeof jk ? (sk && (jk = -jk), jk = new mk(jk)) : jk = new Pk(jk, sk), [Sk, jk]
        }

        function qk(kk, ek) {
          if (kk.length !== ek.length) return kk.length > ek.length ? 1 : -1;
          for (var ik = kk.length - 1; ik >= 0; ik--)
            if (kk[ik] !== ek[ik]) return kk[ik] > ek[ik] ? 1 : -1;
          return 0
        }

        function Ik(kk) {
          var ek = kk.abs();
          return !ek.isUnit() && (!!(ek.equals(2) || ek.equals(3) || ek.equals(5)) || !(ek.isEven() || ek.isDivisibleBy(3) || ek.isDivisibleBy(5)) && (!!ek.lesser(49) || void 0))
        }

        function zk(kk, ik) {
          for (var Dk, fk, Sk, bk = kk.prev(), rk = bk, Pk = 0; rk.isEven();) rk = rk.divide(2), Pk++;
          kk: for (fk = 0; fk < ik.length; fk++)
            if (!kk.lesser(ik[fk]) && !(Sk = ek(ik[fk]).modPow(rk, kk)).isUnit() && !Sk.equals(bk)) {
              for (Dk = Pk - 1; 0 != Dk; Dk--) {
                if ((Sk = Sk.square().mod(kk)).isUnit()) return !1;
                if (Sk.equals(bk)) continue kk
              }
              return !1
            }
          return !0
        }
        Pk.prototype = Object.create(rk.prototype), mk.prototype = Object.create(rk.prototype), Mk.prototype = Object.create(rk.prototype), Pk.prototype.add = function(kk) {
          var ek = Rk(kk);
          if (this.sign !== ek.sign) return this.subtract(ek.ge());
          var ik = this.value,
            Dk = ek.value;
          return ek.isSmall ? new Pk(yk(ik, Math.abs(Dk)), this.sign) : new Pk(pk(ik, Dk), this.sign)
        }, Pk.prototype.plus = Pk.prototype.add, mk.prototype.add = function(kk) {
          var ek = Rk(kk),
            ik = this.value;
          if (ik < 0 !== ek.sign) return this.subtract(ek.ge());
          var Dk = ek.value;
          if (ek.isSmall) {
            if (Kk(ik + Dk)) return new mk(ik + Dk);
            Dk = xk(Math.abs(Dk))
          }
          return new Pk(yk(Dk, Math.abs(ik)), ik < 0)
        }, mk.prototype.plus = mk.prototype.add, Mk.prototype.add = function(kk) {
          return new Mk(this.value + Rk(kk).value)
        }, Mk.prototype.plus = Mk.prototype.add, Pk.prototype.subtract = function(kk) {
          var ek = Rk(kk);
          if (this.sign !== ek.sign) return this.add(ek.ge());
          var ik = this.value,
            Dk = ek.value;
          return ek.isSmall ? Lk(ik, Math.abs(Dk), this.sign) : function(kk, ek, ik) {
            var Dk;
            return qk(kk, ek) >= 0 ? Dk = Yk(kk, ek) : (Dk = Yk(ek, kk), ik = !ik), "number" === typeof(Dk = nk(Dk)) ? (ik && (Dk = -Dk), new mk(Dk)) : new Pk(Dk, ik)
          }(ik, Dk, this.sign)
        }, Pk.prototype.minus = Pk.prototype.subtract, mk.prototype.subtract = function(kk) {
          var ek = Rk(kk),
            ik = this.value;
          if (ik < 0 !== ek.sign) return this.add(ek.ge());
          var Dk = ek.value;
          return ek.isSmall ? new mk(ik - Dk) : Lk(Dk, Math.abs(ik), ik >= 0)
        }, mk.prototype.minus = mk.prototype.subtract, Mk.prototype.subtract = function(kk) {
          return new Mk(this.value - Rk(kk).value)
        }, Mk.prototype.minus = Mk.prototype.subtract, Pk.prototype.ge = function() {
          return new Pk(this.value, !this.sign)
        }, mk.prototype.ge = function() {
          var kk = this.sign,
            ek = new mk(-this.value);
          return ek.sign = !kk, ek
        }, Mk.prototype.ge = function() {
          return new Mk(-this.value)
        }, Pk.prototype.abs = function() {
          return new Pk(this.value, !1)
        }, mk.prototype.abs = function() {
          return new mk(Math.abs(this.value))
        }, Mk.prototype.abs = function() {
          return new Mk(this.value >= 0 ? this.value : -this.value)
        }, Pk.prototype.multiply = function(kk) {
          var ek, Dk, fk, Sk = Rk(kk),
            bk = this.value,
            mk = Sk.value,
            Mk = this.sign !== Sk.sign;
          if (Sk.isSmall) {
            if (0 === mk) return rk[0];
            if (1 === mk) return this;
            if (-1 === mk) return this.ge();
            if ((ek = Math.abs(mk)) < ik) return new Pk(Ak(bk, ek), Mk);
            mk = xk(ek)
          }
          return Dk = bk.length, fk = mk.length, new Pk(-.012 * Dk - .012 * fk + 15e-6 * Dk * fk > 0 ? sk(bk, mk) : Ck(bk, mk), Mk)
        }, Pk.prototype.times = Pk.prototype.multiply, mk.prototype._multiplyBySmall = function(kk) {
          return Kk(kk.value * this.value) ? new mk(kk.value * this.value) : dk(Math.abs(kk.value), xk(Math.abs(this.value)), this.sign !== kk.sign)
        }, Pk.prototype._multiplyBySmall = function(kk) {
          return 0 === kk.value ? rk[0] : 1 === kk.value ? this : -1 === kk.value ? this.ge() : dk(Math.abs(kk.value), this.value, this.sign !== kk.sign)
        }, mk.prototype.multiply = function(kk) {
          return Rk(kk)._multiplyBySmall(this)
        }, mk.prototype.times = mk.prototype.multiply, Mk.prototype.multiply = function(kk) {
          return new Mk(this.value * Rk(kk).value)
        }, Mk.prototype.times = Mk.prototype.multiply, Pk.prototype.square = function() {
          return new Pk(Vk(this.value), !1)
        }, mk.prototype.square = function() {
          var kk = this.value * this.value;
          return Kk(kk) ? new mk(kk) : new Pk(Vk(xk(Math.abs(this.value))), !1)
        }, Mk.prototype.square = function(kk) {
          return new Mk(this.value * this.value)
        }, Pk.prototype.divmod = function(kk) {
          var ek = uk(this, kk);
          return {
            quotient: ek[0],
            remainder: ek[1]
          }
        }, Mk.prototype.divmod = mk.prototype.divmod = Pk.prototype.divmod, Pk.prototype.divide = function(kk) {
          return uk(this, kk)[0]
        }, Mk.prototype.over = Mk.prototype.divide = function(kk) {
          return new Mk(this.value / Rk(kk).value)
        }, mk.prototype.over = mk.prototype.divide = Pk.prototype.over = Pk.prototype.divide, Pk.prototype.mod = function(kk) {
          return uk(this, kk)[1]
        }, Mk.prototype.mod = Mk.prototype.remainder = function(kk) {
          return new Mk(this.value % Rk(kk).value)
        }, mk.prototype.remainder = mk.prototype.mod = Pk.prototype.remainder = Pk.prototype.mod, Pk.prototype.pow = function(kk) {
          var ek, ik, Dk, fk = Rk(kk),
            Sk = this.value,
            bk = fk.value;
          if (0 === bk) return rk[1];
          if (0 === Sk) return rk[0];
          if (1 === Sk) return rk[1];
          if (-1 === Sk) return fk.isEven() ? rk[1] : rk[-1];
          if (fk.sign) return rk[0];
          if (!fk.isSmall) throw new Error("The exponent " + fk.toString() + " is too large.");
          if (this.isSmall && Kk(ek = Math.pow(Sk, bk))) return new mk(wk(ek));
          for (ik = this, Dk = rk[1]; !0 & bk && (Dk = Dk.times(ik), --bk), 0 !== bk;) bk /= 2, ik = ik.square();
          return Dk
        }, mk.prototype.pow = Pk.prototype.pow, Mk.prototype.pow = function(kk) {
          var ek = Rk(kk),
            ik = this.value,
            Dk = ek.value,
            fk = BigInt(0),
            Sk = BigInt(1),
            bk = BigInt(2);
          if (Dk === fk) return rk[1];
          if (ik === fk) return rk[0];
          if (ik === Sk) return rk[1];
          if (ik === BigInt(-1)) return ek.isEven() ? rk[1] : rk[-1];
          if (ek.isNegative()) return new Mk(fk);
          for (var Pk = this, mk = rk[1];
            (Dk & Sk) === Sk && (mk = mk.times(Pk), --Dk), Dk !== fk;) Dk /= bk, Pk = Pk.square();
          return mk
        }, Pk.prototype.modPow = function(kk, ek) {
          if (kk = Rk(kk), (ek = Rk(ek)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var ik = rk[1],
            Dk = this.mod(ek);
          for (kk.isNegative() && (kk = kk.multiply(rk[-1]), Dk = Dk.modInv(ek)); kk.isPositive();) {
            if (Dk.isZero()) return rk[0];
            kk.isOdd() && (ik = ik.multiply(Dk).mod(ek)), kk = kk.divide(2), Dk = Dk.square().mod(ek)
          }
          return ik
        }, Mk.prototype.modPow = mk.prototype.modPow = Pk.prototype.modPow, Pk.prototype.compareAbs = function(kk) {
          var ek = Rk(kk),
            ik = this.value,
            Dk = ek.value;
          return ek.isSmall ? 1 : qk(ik, Dk)
        }, mk.prototype.compareAbs = function(kk) {
          var ek = Rk(kk),
            ik = Math.abs(this.value),
            Dk = ek.value;
          return ek.isSmall ? ik === (Dk = Math.abs(Dk)) ? 0 : ik > Dk ? 1 : -1 : -1
        }, Mk.prototype.compareAbs = function(kk) {
          var ek = this.value,
            ik = Rk(kk).value;
          return (ek = ek >= 0 ? ek : -ek) === (ik = ik >= 0 ? ik : -ik) ? 0 : ek > ik ? 1 : -1
        }, Pk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var ek = Rk(kk),
            ik = this.value,
            Dk = ek.value;
          return this.sign !== ek.sign ? ek.sign ? 1 : -1 : ek.isSmall ? this.sign ? -1 : 1 : qk(ik, Dk) * (this.sign ? -1 : 1)
        }, Pk.prototype.compareTo = Pk.prototype.compare, mk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var ek = Rk(kk),
            ik = this.value,
            Dk = ek.value;
          return ek.isSmall ? ik == Dk ? 0 : ik > Dk ? 1 : -1 : ik < 0 !== ek.sign ? ik < 0 ? -1 : 1 : ik < 0 ? 1 : -1
        }, mk.prototype.compareTo = mk.prototype.compare, Mk.prototype.compare = function(kk) {
          if (kk === 1 / 0) return -1;
          if (kk === -1 / 0) return 1;
          var ek = this.value,
            ik = Rk(kk).value;
          return ek === ik ? 0 : ek > ik ? 1 : -1
        }, Mk.prototype.compareTo = Mk.prototype.compare, Pk.prototype.equals = function(kk) {
          return 0 === this.compare(kk)
        }, Mk.prototype.eq = Mk.prototype.equals = mk.prototype.eq = mk.prototype.equals = Pk.prototype.eq = Pk.prototype.equals, Pk.prototype.notEquals = function(kk) {
          return 0 !== this.compare(kk)
        }, Mk.prototype.neq = Mk.prototype.notEquals = mk.prototype.neq = mk.prototype.notEquals = Pk.prototype.neq = Pk.prototype.notEquals, Pk.prototype.greater = function(kk) {
          return this.compare(kk) > 0
        }, Mk.prototype.gt = Mk.prototype.greater = mk.prototype.gt = mk.prototype.greater = Pk.prototype.gt = Pk.prototype.greater, Pk.prototype.lesser = function(kk) {
          return this.compare(kk) < 0
        }, Mk.prototype.lt = Mk.prototype.lesser = mk.prototype.lt = mk.prototype.lesser = Pk.prototype.lt = Pk.prototype.lesser, Pk.prototype.greaterOrEquals = function(kk) {
          return this.compare(kk) >= 0
        }, Mk.prototype.geq = Mk.prototype.greaterOrEquals = mk.prototype.geq = mk.prototype.greaterOrEquals = Pk.prototype.geq = Pk.prototype.greaterOrEquals, Pk.prototype.lesserOrEquals = function(kk) {
          return this.compare(kk) <= 0
        }, Mk.prototype.leq = Mk.prototype.lesserOrEquals = mk.prototype.leq = mk.prototype.lesserOrEquals = Pk.prototype.leq = Pk.prototype.lesserOrEquals, Pk.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, mk.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Mk.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Pk.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, mk.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Mk.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Pk.prototype.isPositive = function() {
          return !this.sign
        }, mk.prototype.isPositive = function() {
          return this.value > 0
        }, Mk.prototype.isPositive = mk.prototype.isPositive, Pk.prototype.isNegative = function() {
          return this.sign
        }, mk.prototype.isNegative = function() {
          return this.value < 0
        }, Mk.prototype.isNegative = mk.prototype.isNegative, Pk.prototype.isUnit = function() {
          return !1
        }, mk.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Mk.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Pk.prototype.isZero = function() {
          return !1
        }, mk.prototype.isZero = function() {
          return 0 === this.value
        }, Mk.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Pk.prototype.isDivisibleBy = function(kk) {
          var ek = Rk(kk);
          return !ek.isZero() && (!!ek.isUnit() || (0 === ek.compareAbs(2) ? this.isEven() : this.mod(ek).isZero()))
        }, Mk.prototype.isDivisibleBy = mk.prototype.isDivisibleBy = Pk.prototype.isDivisibleBy, Pk.prototype.isPrime = function(ik) {
          var Dk = Ik(this);
          if (Dk !== kk) return Dk;
          var fk = this.abs(),
            Sk = fk.bitLength();
          if (Sk <= 64) return zk(fk, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var bk = Math.log(2) * Sk.toJSNumber(), rk = Math.ceil(!0 === ik ? 2 * Math.pow(bk, 2) : bk), Pk = [], mk = 0; mk < rk; mk++) Pk.push(ek(mk + 2));
          return zk(fk, Pk)
        }, Mk.prototype.isPrime = mk.prototype.isPrime = Pk.prototype.isPrime, Pk.prototype.isProbablePrime = function(ik, Dk) {
          var fk = Ik(this);
          if (fk !== kk) return fk;
          for (var Sk = this.abs(), bk = ik === kk ? 5 : ik, rk = [], Pk = 0; Pk < bk; Pk++) rk.push(ek.randBetween(2, Sk.minus(2), Dk));
          return zk(Sk, rk)
        }, Mk.prototype.isProbablePrime = mk.prototype.isProbablePrime = Pk.prototype.isProbablePrime, Pk.prototype.modInv = function(kk) {
          for (var ik, Dk, fk, Sk = ek.zero, bk = ek.one, rk = Rk(kk), Pk = this.abs(); !Pk.isZero();) ik = rk.divide(Pk), Dk = Sk, fk = rk, Sk = bk, rk = Pk, bk = Dk.subtract(ik.multiply(bk)), Pk = fk.subtract(ik.multiply(Pk));
          if (!rk.isUnit()) throw new Error(this.toString() + " and " + kk.toString() + " are not co-prime");
          return -1 === Sk.compare(0) && (Sk = Sk.add(kk)), this.isNegative() ? Sk.ge() : Sk
        }, Mk.prototype.modInv = mk.prototype.modInv = Pk.prototype.modInv, Pk.prototype.next = function() {
          var kk = this.value;
          return this.sign ? Lk(kk, 1, this.sign) : new Pk(yk(kk, 1), this.sign)
        }, mk.prototype.next = function() {
          var kk = this.value;
          return kk + 1 < Dk ? new mk(kk + 1) : new Pk(fk, !1)
        }, Mk.prototype.next = function() {
          return new Mk(this.value + BigInt(1))
        }, Pk.prototype.prev = function() {
          var kk = this.value;
          return this.sign ? new Pk(yk(kk, 1), !0) : Lk(kk, 1, this.sign)
        }, mk.prototype.prev = function() {
          var kk = this.value;
          return kk - 1 > -Dk ? new mk(kk - 1) : new Pk(fk, !0)
        }, Mk.prototype.prev = function() {
          return new Mk(this.value - BigInt(1))
        };
        for (var Qk = [1]; 2 * Qk[Qk.length - 1] <= ik;) Qk.push(2 * Qk[Qk.length - 1]);
        var vk = Qk.length,
          Ek = Qk[vk - 1];

        function hk(kk) {
          return Math.abs(kk) <= ik
        }

        function ak(kk, ik, Dk) {
          ik = Rk(ik);
          for (var fk = kk.isNegative(), Sk = ik.isNegative(), bk = fk ? kk.not() : kk, rk = Sk ? ik.not() : ik, Pk = 0, mk = 0, Mk = null, Kk = null, xk = []; !bk.isZero() || !rk.isZero();) Pk = (Mk = uk(bk, Ek))[1].toJSNumber(), fk && (Pk = Ek - 1 - Pk), mk = (Kk = uk(rk, Ek))[1].toJSNumber(), Sk && (mk = Ek - 1 - mk), bk = Mk[0], rk = Kk[0], xk.push(Dk(Pk, mk));
          for (var nk = 0 !== Dk(fk ? 1 : 0, Sk ? 1 : 0) ? ek(-1) : ek(0), Uk = xk.length - 1; Uk >= 0; Uk -= 1) nk = nk.multiply(Ek).add(ek(xk[Uk]));
          return nk
        }
        Pk.prototype.shiftLeft = function(kk) {
          var ek = Rk(kk).toJSNumber();
          if (!hk(ek)) throw new Error(String(ek) + " is too large for shifting.");
          if (ek < 0) return this.shiftRight(-ek);
          var ik = this;
          if (ik.isZero()) return ik;
          for (; ek >= vk;) ik = ik.multiply(Ek), ek -= vk - 1;
          return ik.multiply(Qk[ek])
        }, Mk.prototype.shiftLeft = mk.prototype.shiftLeft = Pk.prototype.shiftLeft, Pk.prototype.shiftRight = function(kk) {
          var ek, ik = Rk(kk).toJSNumber();
          if (!hk(ik)) throw new Error(String(ik) + " is too large for shifting.");
          if (ik < 0) return this.shiftLeft(-ik);
          for (var Dk = this; ik >= vk;) {
            if (Dk.isZero() || Dk.isNegative() && Dk.isUnit()) return Dk;
            Dk = (ek = uk(Dk, Ek))[1].isNegative() ? ek[0].prev() : ek[0], ik -= vk - 1
          }
          return (ek = uk(Dk, Qk[ik]))[1].isNegative() ? ek[0].prev() : ek[0]
        }, Mk.prototype.shiftRight = mk.prototype.shiftRight = Pk.prototype.shiftRight, Pk.prototype.not = function() {
          return this.ge().prev()
        }, Mk.prototype.not = mk.prototype.not = Pk.prototype.not, Pk.prototype.and = function(kk) {
          return ak(this, kk, (function(kk, ek) {
            return kk & ek
          }))
        }, Mk.prototype.and = mk.prototype.and = Pk.prototype.and, Pk.prototype.or = function(kk) {
          return ak(this, kk, (function(kk, ek) {
            return kk | ek
          }))
        }, Mk.prototype.or = mk.prototype.or = Pk.prototype.or, Pk.prototype.xor = function(kk) {
          return ak(this, kk, (function(kk, ek) {
            return kk ^ ek
          }))
        }, Mk.prototype.xor = mk.prototype.xor = Pk.prototype.xor;
        var Wk = 1 << 30;

        function tk(kk) {
          var ek = kk.value,
            Dk = "number" === typeof ek ? ek | Wk : "bigint" === typeof ek ? ek | BigInt(Wk) : ek[0] + ek[1] * ik | 1073758208;
          return Dk & -Dk
        }

        function Xk(kk, ik) {
          if (ik.compareTo(kk) <= 0) {
            var Dk = Xk(kk, ik.square(ik)),
              fk = Dk.p,
              Sk = Dk.e,
              bk = fk.multiply(ik);
            return bk.compareTo(kk) <= 0 ? {
              p: bk,
              e: 2 * Sk + 1
            } : {
              p: fk,
              e: 2 * Sk
            }
          }
          return {
            p: ek(1),
            e: 0
          }
        }

        function Bk(kk, ek) {
          return kk = Rk(kk), ek = Rk(ek), kk.greater(ek) ? kk : ek
        }

        function ck(kk, ek) {
          return kk = Rk(kk), ek = Rk(ek), kk.lesser(ek) ? kk : ek
        }

        function Tk(kk, ek) {
          if (kk = Rk(kk).abs(), ek = Rk(ek).abs(), kk.equals(ek)) return kk;
          if (kk.isZero()) return ek;
          if (ek.isZero()) return kk;
          for (var ik, Dk, fk = rk[1]; kk.isEven() && ek.isEven();) ik = ck(tk(kk), tk(ek)), kk = kk.divide(ik), ek = ek.divide(ik), fk = fk.multiply(ik);
          for (; kk.isEven();) kk = kk.divide(tk(kk));
          do {
            for (; ek.isEven();) ek = ek.divide(tk(ek));
            kk.greater(ek) && (Dk = ek, ek = kk, kk = Dk), ek = ek.subtract(kk)
          } while (!ek.isZero());
          return fk.isUnit() ? kk : kk.multiply(fk)
        }
        Pk.prototype.bitLength = function() {
          var kk = this;
          return kk.compareTo(ek(0)) < 0 && (kk = kk.ge().subtract(ek(1))), 0 === kk.compareTo(ek(0)) ? ek(0) : ek(Xk(kk, ek(2)).e).add(ek(1))
        }, Mk.prototype.bitLength = mk.prototype.bitLength = Pk.prototype.bitLength;
        var Zk = function(kk, ek, ik, Dk) {
          ik = ik || Sk, kk = String(kk), Dk || (kk = kk.toLowerCase(), ik = ik.toLowerCase());
          var fk, bk = kk.length,
            rk = Math.abs(ek),
            Pk = {};
          for (fk = 0; fk < ik.length; fk++) Pk[ik[fk]] = fk;
          for (fk = 0; fk < bk; fk++) {
            if ("-" !== (Kk = kk[fk]) && (Kk in Pk && Pk[Kk] >= rk)) {
              if ("1" === Kk && 1 === rk) continue;
              throw new Error(Kk + " is not a valid digit in base " + ek + ".")
            }
          }
          ek = Rk(ek);
          var mk = [],
            Mk = "-" === kk[0];
          for (fk = Mk ? 1 : 0; fk < kk.length; fk++) {
            var Kk;
            if ((Kk = kk[fk]) in Pk) mk.push(Rk(Pk[Kk]));
            else {
              if ("<" !== Kk) throw new Error(Kk + " is not a valid character");
              var xk = fk;
              do {
                fk++
              } while (">" !== kk[fk] && fk < kk.length);
              mk.push(Rk(kk.slice(xk + 1, fk)))
            }
          }
          return Ok(mk, ek, Mk)
        };

        function Ok(kk, ek, ik) {
          var Dk, fk = rk[0],
            Sk = rk[1];
          for (Dk = kk.length - 1; Dk >= 0; Dk--) fk = fk.add(kk[Dk].times(Sk)), Sk = Sk.times(ek);
          return ik ? fk.ge() : fk
        }

        function gk(kk, ik) {
          if ((ik = ek(ik)).isZero()) {
            if (kk.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (ik.equals(-1)) {
            if (kk.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (kk.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-kk.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Dk = Array.apply(null, Array(kk.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Dk.unshift([1]), {
              value: [].concat.apply([], Dk),
              isNegative: !1
            }
          }
          var fk = !1;
          if (kk.isNegative() && ik.isPositive() && (fk = !0, kk = kk.abs()), ik.isUnit()) return kk.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(kk.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: fk
          };
          for (var Sk, bk = [], rk = kk; rk.isNegative() || rk.compareAbs(ik) >= 0;) {
            Sk = rk.divmod(ik), rk = Sk.quotient;
            var Pk = Sk.remainder;
            Pk.isNegative() && (Pk = ik.minus(Pk).abs(), rk = rk.next()), bk.push(Pk.toJSNumber())
          }
          return bk.push(rk.toJSNumber()), {
            value: bk.reverse(),
            isNegative: fk
          }
        }

        function Gk(kk, ek, ik) {
          var Dk = gk(kk, ek);
          return (Dk.isNegative ? "-" : "") + Dk.value.map((function(kk) {
            return function(kk, ek) {
              return kk < (ek = ek || Sk).length ? ek[kk] : "<" + kk + ">"
            }(kk, ik)
          })).join("")
        }

        function Nk(kk) {
          if (Kk(+kk)) {
            var ek = +kk;
            if (ek === wk(ek)) return bk ? new Mk(BigInt(ek)) : new mk(ek);
            throw new Error("Invalid integer: " + kk)
          }
          var ik = "-" === kk[0];
          ik && (kk = kk.slice(1));
          var Dk = kk.split(/e/i);
          if (Dk.length > 2) throw new Error("Invalid integer: " + Dk.join("e"));
          if (2 === Dk.length) {
            var fk = Dk[1];
            if ("+" === fk[0] && (fk = fk.slice(1)), (fk = +fk) !== wk(fk) || !Kk(fk)) throw new Error("Invalid integer: " + fk + " is not a valid exponent.");
            var Sk = Dk[0],
              rk = Sk.indexOf(".");
            if (rk >= 0 && (fk -= Sk.length - rk - 1, Sk = Sk.slice(0, rk) + Sk.slice(rk + 1)), fk < 0) throw new Error("Cannot include negative exponent part for integers");
            kk = Sk += new Array(fk + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(kk)) throw new Error("Invalid integer: " + kk);
          if (bk) return new Mk(BigInt(ik ? "-" + kk : kk));
          for (var xk = [], nk = kk.length, Hk = nk - 7; nk > 0;) xk.push(+kk.slice(Hk, nk)), (Hk -= 7) < 0 && (Hk = 0), nk -= 7;
          return Uk(xk), new Pk(xk, ik)
        }

        function Rk(kk) {
          return "number" === typeof kk ? function(kk) {
            if (bk) return new Mk(BigInt(kk));
            if (Kk(kk)) {
              if (kk !== wk(kk)) throw new Error(kk + " is not an integer.");
              return new mk(kk)
            }
            return Nk(kk.toString())
          }(kk) : "string" === typeof kk ? Nk(kk) : "bigint" === typeof kk ? new Mk(kk) : kk
        }
        Pk.prototype.toArray = function(kk) {
          return gk(this, kk)
        }, mk.prototype.toArray = function(kk) {
          return gk(this, kk)
        }, Mk.prototype.toArray = function(kk) {
          return gk(this, kk)
        }, Pk.prototype.toString = function(ek, ik) {
          if (ek === kk && (ek = 10), 10 !== ek) return Gk(this, ek, ik);
          for (var Dk, fk = this.value, Sk = fk.length, bk = String(fk[--Sk]); --Sk >= 0;) Dk = String(fk[Sk]), bk += "0000000".slice(Dk.length) + Dk;
          return (this.sign ? "-" : "") + bk
        }, mk.prototype.toString = function(ek, ik) {
          return ek === kk && (ek = 10), 10 != ek ? Gk(this, ek, ik) : String(this.value)
        }, Mk.prototype.toString = mk.prototype.toString, Mk.prototype.toJSON = Pk.prototype.toJSON = mk.prototype.toJSON = function() {
          return this.toString()
        }, Pk.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Pk.prototype.toJSNumber = Pk.prototype.valueOf, mk.prototype.valueOf = function() {
          return this.value
        }, mk.prototype.toJSNumber = mk.prototype.valueOf, Mk.prototype.valueOf = Mk.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Jk = 0; Jk < 1e3; Jk++) rk[Jk] = Rk(Jk), Jk > 0 && (rk[-Jk] = Rk(-Jk));
        return rk.one = rk[1], rk.zero = rk[0], rk.minusOne = rk[-1], rk.max = Bk, rk.min = ck, rk.gcd = Tk, rk.lcm = function(kk, ek) {
          return kk = Rk(kk).abs(), ek = Rk(ek).abs(), kk.divide(Tk(kk, ek)).multiply(ek)
        }, rk.isInstance = function(kk) {
          return kk instanceof Pk || kk instanceof mk || kk instanceof Mk
        }, rk.randBetween = function(kk, ek, Dk) {
          kk = Rk(kk), ek = Rk(ek);
          var fk = Dk || Math.random,
            Sk = ck(kk, ek),
            bk = Bk(kk, ek).subtract(Sk).add(1);
          if (bk.isSmall) return Sk.add(Math.floor(fk() * bk));
          for (var Pk = gk(bk, ik).value, mk = [], Mk = !0, Kk = 0; Kk < Pk.length; Kk++) {
            var xk = Mk ? Pk[Kk] : ik,
              nk = wk(fk() * xk);
            mk.push(nk), nk < xk && (Mk = !1)
          }
          return Sk.add(rk.zek(mk, ik, !1))
        }, rk.zek = function(kk, ek, ik) {
          return Ok(kk.map(Rk), Rk(ek || 10), ik)
        }, rk
      }();
      kk.hasOwnProperty("exports") && (kk.exports = ek)
    }(Yi);
    var Li = Sk(Yi.exports);

    function Ci(kk, ek, ik) {
      let Dk = 0;
      for (let fk = 0; fk < ik; fk++) {
        const ik = kk[ek + fk];
        if (void 0 === ik) break;
        Dk += ik * 16 ** fk
      }
      return Dk
    }

    function Ai(kk) {
      const ek = [];
      for (let ik = 0; ik < kk.length; ik++) {
        let Dk = Number(kk[ik]);
        for (let kk = 0; Dk || kk < ek.length; kk++) Dk += 10 * (ek[kk] || 0), ek[kk] = Dk % 16, Dk = (Dk - ek[kk]) / 16
      }
      return ek
    }
    class ji {
      static fromString(kk) {
        return new ji(function(kk) {
          const ek = Ai(kk),
            ik = Array(4);
          for (let Dk = 0; Dk < 4; Dk++) ik[3 - Dk] = Ci(ek, 4 * Dk, 4);
          return ik
        }(kk), kk)
      }
      static fromBit(kk) {
        const ek = Array(4),
          ik = Math.floor(kk / 16);
        for (let Dk = 0; Dk < 4; Dk++) ek[3 - Dk] = Dk === ik ? 1 << kk - 16 * ik : 0;
        return new ji(ek)
      }
      constructor(kk, ek) {
        this.parts = kk, this.str = ek
      }
      and(kk) {
        let {
          parts: ek
        } = kk;
        return new ji(this.parts.map(((kk, ik) => kk & ek[ik])))
      }
      or(kk) {
        let {
          parts: ek
        } = kk;
        return new ji(this.parts.map(((kk, ik) => kk | ek[ik])))
      }
      xor(kk) {
        let {
          parts: ek
        } = kk;
        return new ji(this.parts.map(((kk, ik) => kk ^ ek[ik])))
      }
      not() {
        return new ji(this.parts.map((kk => ~kk)))
      }
      equals(kk) {
        let {
          parts: ek
        } = kk;
        return this.parts.every(((kk, ik) => kk === ek[ik]))
      }
      toString() {
        if (null != this.str) return this.str;
        const kk = new Array(16);
        return this.parts.forEach(((ek, ik) => {
          const Dk = Ai(ek.toString());
          for (let fk = 0; fk < 4; fk++) kk[fk + 4 * ik] = Dk[3 - fk] || 0
        })), this.str = Li.zek(kk, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const si = function() {
      try {
        return BigInt, !0
      } catch (kk) {
        return !1
      }
    }();
    si && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const di = {},
      Vi = si ? function(kk) {
        return BigInt(kk)
      } : function(kk) {
        return kk instanceof ji ? kk : ("number" === typeof kk && (kk = kk.toString()), null != di[kk] || (di[kk] = ji.fromString(kk)), di[kk])
      },
      Fi = Vi(0),
      ui = si ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fi)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fi;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi).and(kk)
      },
      qi = si ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fi)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fi;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi).or(kk)
      },
      Ii = si ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fi)
      } : function() {
        let kk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fi;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi).xor(kk)
      },
      zi = si ? function(kk, ek) {
        return kk === ek
      } : function(kk, ek) {
        return null == kk || null == ek ? kk == ek : kk.equals(ek)
      };
    var Qi, vi, Ei, ai, Wi = {
      combine: function() {
        let kk = arguments.length <= 0 ? void 0 : arguments[0];
        for (let ek = 1; ek < arguments.length; ek++) kk = qi(kk, ek < 0 || arguments.length <= ek ? void 0 : arguments[ek]);
        return kk
      },
      add: function(kk, ek) {
        return ek === Fi ? kk : qi(kk, ek)
      },
      remove: function(kk, ek) {
        return ek === Fi ? kk : Ii(kk, ui(kk, ek))
      },
      filter: ui,
      invert: si ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi).not()
      },
      has: function(kk, ek) {
        return zi(ui(kk, ek), ek)
      },
      hasAny: function(kk, ek) {
        return !zi(ui(kk, ek), Fi)
      },
      equals: zi,
      deserialize: Vi,
      getFlag: si ? function(kk) {
        return BigInt(1) << BigInt(kk)
      } : function(kk) {
        return ji.fromBit(kk)
      }
    };
    ! function(kk) {
      kk[kk.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", kk[kk.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", kk[kk.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", kk[kk.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", kk[kk.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", kk[kk.RATELIMITED = 4002] = "RATELIMITED", kk[kk.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", kk[kk.INVALID_VERSION = 4004] = "INVALID_VERSION", kk[kk.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Qi || (Qi = {})),
    function(kk) {
      kk[kk.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", kk[kk.INVALID_COMMAND = 4002] = "INVALID_COMMAND", kk[kk.INVALID_EVENT = 4004] = "INVALID_EVENT", kk[kk.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(vi || (vi = {})),
    function(kk) {
      kk.LANDSCAPE = "landscape", kk.PORTRAIT = "portrait"
    }(Ei || (Ei = {})),
    function(kk) {
      kk.MOBILE = "mobile", kk.DESKTOP = "desktop"
    }(ai || (ai = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Wi.getFlag(0),
      ADMINISTRATOR: Wi.getFlag(3)
    });

    function ti(kk) {
      return Ui((ek => {
        var ik;
        const [Dk] = null !== (ik = Object.entries(kk).find((kk => {
          let [, ik] = kk;
          return ik === ek
        }))) && void 0 !== ik ? ik : [];
        return null != ek && void 0 === Dk ? kk.UNHANDLED : ek
      }), ve().or(Ee()))
    }
    const Xi = yi.object({
        image_url: yi.string()
      }),
      Bi = yi.object({
        mediaUrl: yi.string().max(1024)
      }),
      ci = yi.object({
        access_token: yi.union([yi.string(), yi.null()]).optional()
      }),
      Ti = yi.object({
        access_token: yi.string(),
        user: yi.object({
          username: yi.string(),
          discriminator: yi.string(),
          id: yi.string(),
          avatar: yi.union([yi.string(), yi.null()]).optional(),
          public_flags: yi.number(),
          global_name: yi.union([yi.string(), yi.null()]).optional()
        }),
        scopes: yi.array(function(kk) {
          const ek = Ie().transform((ek => {
            const ik = kk.safeParse(ek);
            return ik.success ? ik.data : kk._def.defaultValue()
          }));
          return ek.overlayType = kk, ek
        }(yi.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(yi.literal(-1)).default(-1))),
        expires: yi.string(),
        application: yi.object({
          description: yi.string(),
          icon: yi.union([yi.string(), yi.null()]).optional(),
          id: yi.string(),
          rpc_origins: yi.array(yi.string()).optional(),
          name: yi.string()
        })
      }),
      oi = yi.object({
        participants: yi.array(yi.object({
          id: yi.string(),
          username: yi.string(),
          global_name: yi.union([yi.string(), yi.null()]).optional(),
          discriminator: yi.string(),
          avatar: yi.union([yi.string(), yi.null()]).optional(),
          flags: yi.number(),
          bot: yi.boolean(),
          avatar_decoration_data: yi.union([yi.object({
            asset: yi.string(),
            skuId: yi.string().optional()
          }), yi.null()]).optional(),
          premium_type: yi.union([yi.number(), yi.null()]).optional(),
          nickname: yi.string().optional()
        }))
      });
    var Zi;
    ! function(kk) {
      kk.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", kk.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", kk.AUTHENTICATE = "AUTHENTICATE", kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Zi || (Zi = {}));
    const Oi = yi.object({}).optional().nullable(),
      gi = yi.void(),
      Gi = {
        [Zi.INITIATE_IMAGE_UPLOAD]: {
          request: gi,
          response: Xi
        },
        [Zi.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Bi,
          response: Oi
        },
        [Zi.AUTHENTICATE]: {
          request: ci,
          response: Ti
        },
        [Zi.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: gi,
          response: oi
        }
      },
      Ni = "DISPATCH";
    var Ri;
    ! function(kk) {
      kk.AUTHORIZE = "AUTHORIZE", kk.AUTHENTICATE = "AUTHENTICATE", kk.GET_GUILDS = "GET_GUILDS", kk.GET_GUILD = "GET_GUILD", kk.GET_CHANNEL = "GET_CHANNEL", kk.GET_CHANNELS = "GET_CHANNELS", kk.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", kk.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", kk.SUBSCRIBE = "SUBSCRIBE", kk.UNSUBSCRIBE = "UNSUBSCRIBE", kk.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", kk.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", kk.SET_ACTIVITY = "SET_ACTIVITY", kk.GET_SKUS = "GET_SKUS", kk.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", kk.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", kk.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", kk.START_PURCHASE = "START_PURCHASE", kk.SET_CONFIG = "SET_CONFIG", kk.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", kk.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", kk.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", kk.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", kk.CAPTURE_LOG = "CAPTURE_LOG", kk.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", kk.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", kk.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", kk.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", kk.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", kk.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", kk.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Ri || (Ri = {}));
    const Ji = Ge({
        cmd: ve(),
        data: oe(),
        evt: ce(),
        nonce: ve()
      }).passthrough(),
      kD = (ti(Object.assign(Object.assign({}, Ti.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), Ge({
        id: ve(),
        username: ve(),
        discriminator: ve(),
        global_name: ve().optional().nullable(),
        avatar: ve().optional().nullable(),
        avatar_decoration_data: Ge({
          asset: ve(),
          sku_id: ve().optional()
        }).nullable(),
        bot: We(),
        flags: Ee().optional().nullable(),
        premium_type: Ee().optional().nullable()
      })),
      eD = Ge({
        user: kD,
        nick: ve().optional().nullable(),
        roles: ge(ve()),
        joined_at: ve(),
        deaf: We(),
        mute: We()
      }),
      iD = Ge({
        id: ve(),
        name: ve().optional().nullable(),
        roles: ge(ve()).optional().nullable(),
        user: kD.optional().nullable(),
        require_colons: We().optional().nullable(),
        managed: We().optional().nullable(),
        animated: We().optional().nullable(),
        available: We().optional().nullable()
      }),
      DD = Ge({
        mute: We(),
        deaf: We(),
        self_mute: We(),
        self_deaf: We(),
        suppress: We()
      }),
      fD = Ge({
        mute: We(),
        nick: ve(),
        user: kD,
        voice_state: DD,
        volume: Ee()
      }),
      SD = ti({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      bD = Ge({
        name: ve(),
        type: Ee(),
        url: ve().optional().nullable(),
        created_at: Ee().optional().nullable(),
        timestamps: Ge({
          start: Ee(),
          end: Ee()
        }).partial().optional().nullable(),
        application_id: ve().optional().nullable(),
        details: ve().optional().nullable(),
        state: ve().optional().nullable(),
        emoji: iD.optional().nullable(),
        party: Ge({
          id: ve().optional().nullable(),
          size: ge(Ee()).optional().nullable()
        }).optional().nullable(),
        assets: Ge({
          large_image: ve().nullable(),
          large_text: ve().nullable(),
          small_image: ve().nullable(),
          small_text: ve().nullable()
        }).partial().optional().nullable(),
        secrets: Ge({
          join: ve(),
          match: ve()
        }).partial().optional().nullable(),
        instance: We().optional().nullable(),
        flags: Ee().optional().nullable()
      }),
      rD = Ge({
        id: ve(),
        type: ti({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: ve(),
        deny: ve()
      }),
      PD = {
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
      mD = Ge({
        id: ve(),
        type: ti(PD),
        guild_id: ve().optional().nullable(),
        position: Ee().optional().nullable(),
        permission_overwrites: ge(rD).optional().nullable(),
        name: ve().optional().nullable(),
        topic: ve().optional().nullable(),
        nsfw: We().optional().nullable(),
        last_message_id: ve().optional().nullable(),
        bitrate: Ee().optional().nullable(),
        user_limit: Ee().optional().nullable(),
        rate_limit_per_user: Ee().optional().nullable(),
        recipients: ge(kD).optional().nullable(),
        icon: ve().optional().nullable(),
        owner_id: ve().optional().nullable(),
        application_id: ve().optional().nullable(),
        parent_id: ve().optional().nullable(),
        last_pin_timestamp: ve().optional().nullable()
      }),
      MD = Ge({
        user: kD,
        guild_id: ve(),
        status: SD,
        activities: ge(bD),
        client_status: Ge({
          desktop: SD,
          mobile: SD,
          web: SD
        }).partial()
      }),
      KD = Ge({
        id: ve(),
        name: ve(),
        color: Ee(),
        hoist: We(),
        position: Ee(),
        permissions: ve(),
        managed: We(),
        mentionable: We()
      }),
      xD = (Ge({
        id: ve(),
        name: ve(),
        owner_id: ve(),
        icon: ve().nullable(),
        icon_hash: ve().optional().nullable(),
        splash: ve().nullable(),
        discovery_splash: ve().nullable(),
        owner: We().optional().nullable(),
        permissions: ve().optional().nullable(),
        region: ve(),
        afk_channel_id: ve().nullable(),
        afk_timeout: Ee(),
        widget_enabled: We().optional().nullable(),
        widget_channel_id: ve().optional().nullable(),
        verification_level: Ee(),
        default_message_notifications: Ee(),
        explicit_content_filter: Ee(),
        roles: ge(KD),
        emojis: ge(iD),
        features: ge(ve()),
        mfa_level: Ee(),
        application_id: ve().nullable(),
        system_channel_id: ve().nullable(),
        system_channel_flags: Ee(),
        rules_channel_id: ve().nullable(),
        joined_at: ve().optional().nullable(),
        large: We().optional().nullable(),
        unavailable: We().optional().nullable(),
        member_count: Ee().optional().nullable(),
        voice_states: ge(DD).optional().nullable(),
        members: ge(eD).optional().nullable(),
        channels: ge(mD).optional().nullable(),
        presences: ge(MD).optional().nullable(),
        max_presences: Ee().optional().nullable(),
        max_members: Ee().optional().nullable(),
        vanity_url_code: ve().nullable(),
        description: ve().nullable(),
        banner: ve().nullable(),
        premium_tier: Ee(),
        premium_subscription_count: Ee().optional().nullable(),
        preferred_locale: ve(),
        public_updates_channel_id: ve().nullable(),
        max_video_channel_users: Ee().optional().nullable(),
        approximate_member_count: Ee().optional().nullable(),
        approximate_presence_count: Ee().optional().nullable()
      }), Ge({
        id: ve(),
        guild_id: ve(),
        type: Ee(),
        name: ve()
      })),
      nD = Ge({
        id: ve(),
        filename: ve(),
        size: Ee(),
        url: ve(),
        proxy_url: ve(),
        height: Ee().optional().nullable(),
        width: Ee().optional().nullable()
      }),
      UD = Ge({
        text: ve(),
        icon_url: ve().optional().nullable(),
        proxy_icon_url: ve().optional().nullable()
      }),
      HD = Ge({
        url: ve().optional().nullable(),
        proxy_url: ve().optional().nullable(),
        height: Ee().optional().nullable(),
        width: Ee().optional().nullable()
      }),
      wD = HD.omit({
        proxy_url: !0
      }),
      lD = Ge({
        name: ve().optional().nullable(),
        url: ve().optional().nullable()
      }),
      pD = Ge({
        name: ve().optional().nullable(),
        url: ve().optional().nullable(),
        icon_url: ve().optional().nullable(),
        proxy_icon_url: ve().optional().nullable()
      }),
      yD = Ge({
        name: ve(),
        value: ve(),
        inline: We()
      }),
      YD = Ge({
        title: ve().optional().nullable(),
        type: ve().optional().nullable(),
        description: ve().optional().nullable(),
        url: ve().optional().nullable(),
        timestamp: ve().optional().nullable(),
        color: Ee().optional().nullable(),
        footer: UD.optional().nullable(),
        image: HD.optional().nullable(),
        thumbnail: HD.optional().nullable(),
        video: wD.optional().nullable(),
        provider: lD.optional().nullable(),
        author: pD.optional().nullable(),
        fields: ge(yD).optional().nullable()
      }),
      LD = Ge({
        count: Ee(),
        me: We(),
        emoji: iD
      }),
      CD = Ge({
        type: Ee(),
        party_id: ve().optional().nullable()
      }),
      AD = Ge({
        id: ve(),
        cover_image: ve().optional().nullable(),
        description: ve(),
        icon: ve().optional().nullable(),
        name: ve()
      }),
      jD = Ge({
        message_id: ve().optional().nullable(),
        channel_id: ve().optional().nullable(),
        guild_id: ve().optional().nullable()
      }),
      sD = Ge({
        id: ve(),
        channel_id: ve(),
        guild_id: ve().optional().nullable(),
        author: kD.optional().nullable(),
        member: eD.optional().nullable(),
        content: ve(),
        timestamp: ve(),
        edited_timestamp: ve().optional().nullable(),
        tts: We(),
        mention_everyone: We(),
        mentions: ge(kD),
        mention_roles: ge(ve()),
        mention_channels: ge(xD),
        attachments: ge(nD),
        embeds: ge(YD),
        reactions: ge(LD).optional().nullable(),
        nonce: Re([ve(), Ee()]).optional().nullable(),
        pinned: We(),
        webhook_id: ve().optional().nullable(),
        type: Ee(),
        activity: CD.optional().nullable(),
        application: AD.optional().nullable(),
        message_reference: jD.optional().nullable(),
        flags: Ee().optional().nullable(),
        stickers: ge(oe()).optional().nullable(),
        referenced_message: oe().optional().nullable()
      }),
      dD = Ge({
        id: ve(),
        name: ve()
      }),
      VD = Ge({
        type: ti({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Ee(),
        name: ve()
      }),
      FD = Ge({
        type: ti({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: We(),
        threshold: Ee(),
        shortcut: ge(VD),
        delay: Ee()
      }),
      uD = Ge({
        device_id: ve(),
        volume: Ee(),
        available_devices: ge(dD)
      }),
      qD = (Ge({
        type: ti({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: ve(),
        vendor: Ge({
          name: ve(),
          url: ve()
        }),
        model: Ge({
          name: ve(),
          url: ve()
        }),
        related: ge(ve()),
        echo_cancellation: We().optional().nullable(),
        noise_suppression: We().optional().nullable(),
        automatic_gain_control: We().optional().nullable(),
        hardware_mute: We().optional().nullable()
      }), Ge({
        id: ve(),
        name: ve(),
        type: ti({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: Ge({
          amount: Ee(),
          currency: ve()
        }),
        application_id: ve(),
        flags: Ee(),
        release_date: ve().nullable()
      })),
      ID = Ge({
        id: ve(),
        sku_id: ve(),
        application_id: ve(),
        user_id: ve(),
        gift_code_flags: Ee(),
        type: ti({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: ve().optional().nullable(),
        branches: ge(ve()).optional().nullable(),
        starts_at: ve().optional().nullable(),
        ends_at: ve().optional().nullable(),
        parent_id: ve().optional().nullable(),
        consumed: We().optional().nullable(),
        deleted: We().optional().nullable(),
        gift_code_batch_id: ve().optional().nullable()
      }),
      zD = (ti({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), ti({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      QD = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      vD = (ti(QD), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      ED = (ti(vD), "ERROR");
    var hD;
    ! function(kk) {
      kk.READY = "READY", kk.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", kk.SPEAKING_START = "SPEAKING_START", kk.SPEAKING_STOP = "SPEAKING_STOP", kk.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", kk.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", kk.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", kk.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", kk.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", kk.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(hD || (hD = {}));
    const aD = Ji.extend({
        evt: mi(hD),
        nonce: ve().nullable(),
        cmd: ri(Ni),
        data: Ge({}).passthrough()
      }),
      WD = Ji.extend({
        evt: ri(ED),
        data: Ge({
          code: Ee(),
          message: ve().optional()
        }).passthrough(),
        cmd: mi(Ri),
        nonce: ve().nullable()
      }),
      tD = aD.extend({
        evt: ve()
      }),
      XD = Re([aD, tD, WD]);
    const BD = {
      [hD.READY]: {
        payload: aD.extend({
          evt: ri(hD.READY),
          data: Ge({
            v: Ee(),
            config: Ge({
              cdn_host: ve().optional(),
              api_endpoint: ve(),
              environment: ve()
            }),
            user: Ge({
              id: ve(),
              username: ve(),
              discriminator: ve(),
              avatar: ve().optional()
            }).optional()
          })
        })
      },
      [hD.VOICE_STATE_UPDATE]: {
        payload: aD.extend({
          evt: ri(hD.VOICE_STATE_UPDATE),
          data: fD
        }),
        subscribeArgs: Ge({
          channel_id: ve()
        })
      },
      [hD.SPEAKING_START]: {
        payload: aD.extend({
          evt: ri(hD.SPEAKING_START),
          data: Ge({
            lobby_id: ve().optional(),
            channel_id: ve().optional(),
            user_id: ve()
          })
        }),
        subscribeArgs: Ge({
          lobby_id: ve().nullable().optional(),
          channel_id: ve().nullable().optional()
        })
      },
      [hD.SPEAKING_STOP]: {
        payload: aD.extend({
          evt: ri(hD.SPEAKING_STOP),
          data: Ge({
            lobby_id: ve().optional(),
            channel_id: ve().optional(),
            user_id: ve()
          })
        }),
        subscribeArgs: Ge({
          lobby_id: ve().nullable().optional(),
          channel_id: ve().nullable().optional()
        })
      },
      [hD.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: aD.extend({
          evt: ri(hD.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: Ge({
            layout_mode: ti(vD)
          })
        })
      },
      [hD.ORIENTATION_UPDATE]: {
        payload: aD.extend({
          evt: ri(hD.ORIENTATION_UPDATE),
          data: Ge({
            screen_orientation: ti(QD),
            orientation: mi(Ei)
          })
        })
      },
      [hD.CURRENT_USER_UPDATE]: {
        payload: aD.extend({
          evt: ri(hD.CURRENT_USER_UPDATE),
          data: kD
        })
      },
      [hD.ENTITLEMENT_CREATE]: {
        payload: aD.extend({
          evt: ri(hD.ENTITLEMENT_CREATE),
          data: Ge({
            entitlement: ID
          })
        })
      },
      [hD.THERMAL_STATE_UPDATE]: {
        payload: aD.extend({
          evt: ri(hD.THERMAL_STATE_UPDATE),
          data: Ge({
            thermal_state: zD
          })
        })
      },
      [hD.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: aD.extend({
          evt: ri(hD.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: Ge({
            participants: oi.shape.participants
          })
        })
      }
    };
    const cD = Ge({}).nullable(),
      TD = Ge({
        code: ve()
      }),
      oD = Ge({
        guilds: ge(Ge({
          id: ve(),
          name: ve()
        }))
      }),
      ZD = Ge({
        id: ve(),
        name: ve(),
        icon_url: ve().optional(),
        members: ge(eD)
      }),
      OD = Ge({
        id: ve(),
        type: ti(PD),
        guild_id: ve().optional().nullable(),
        name: ve().optional().nullable(),
        topic: ve().optional().nullable(),
        bitrate: Ee().optional().nullable(),
        user_limit: Ee().optional().nullable(),
        position: Ee().optional().nullable(),
        voice_states: ge(fD),
        messages: ge(sD)
      }),
      gD = Ge({
        channels: ge(mD)
      }),
      GD = (OD.nullable(), OD.nullable()),
      ND = OD.nullable(),
      RD = (Ge({
        input: uD,
        output: uD,
        mode: FD,
        automatic_gain_control: We(),
        echo_cancellation: We(),
        noise_suppression: We(),
        qos: We(),
        silence_warning: We(),
        deaf: We(),
        mute: We()
      }), Ge({
        evt: ve()
      })),
      JD = Ge({
        shortcut: VD
      }),
      kf = bD,
      ef = Ge({
        skus: ge(qD)
      }),
      Df = Ge({
        entitlements: ge(ID)
      }),
      ff = ge(ID).nullable(),
      Sf = Ge({
        use_interactive_pip: We()
      }),
      bf = Ge({
        locale: ve()
      }),
      rf = Ge({
        enabled: We()
      }),
      Pf = Ge({
        permissions: ae().or(ve())
      }),
      mf = Ge({
        iosKeyboardResizesView: xi(We())
      }),
      Mf = Ji.extend({
        cmd: mi(Ri),
        evt: ce()
      });

    function Kf(kk) {
      let {
        cmd: ek,
        data: ik
      } = kk;
      switch (ek) {
        case Ri.AUTHORIZE:
          return TD.parse(ik);
        case Ri.CAPTURE_SHORTCUT:
          return JD.parse(ik);
        case Ri.ENCOURAGE_HW_ACCELERATION:
          return rf.parse(ik);
        case Ri.GET_CHANNEL:
          return OD.parse(ik);
        case Ri.GET_CHANNELS:
          return gD.parse(ik);
        case Ri.GET_CHANNEL_PERMISSIONS:
          return Pf.parse(ik);
        case Ri.GET_GUILD:
          return ZD.parse(ik);
        case Ri.GET_GUILDS:
          return oD.parse(ik);
        case Ri.GET_PLATFORM_BEHAVIORS:
          return mf.parse(ik);
        case Ri.GET_CHANNEL:
          return OD.parse(ik);
        case Ri.SELECT_TEXT_CHANNEL:
          return ND.parse(ik);
        case Ri.SELECT_VOICE_CHANNEL:
          return GD.parse(ik);
        case Ri.SET_ACTIVITY:
          return kf.parse(ik);
        case Ri.GET_SKUS_EMBEDDED:
          return ef.parse(ik);
        case Ri.GET_ENTITLEMENTS_EMBEDDED:
          return Df.parse(ik);
        case Ri.SET_CONFIG:
          return Sf.parse(ik);
        case Ri.START_PURCHASE:
          return ff.parse(ik);
        case Ri.SUBSCRIBE:
        case Ri.UNSUBSCRIBE:
          return RD.parse(ik);
        case Ri.USER_SETTINGS_GET_LOCALE:
          return bf.parse(ik);
        case Ri.OPEN_EXTERNAL_LINK:
        case Ri.SET_ORIENTATION_LOCK_STATE:
        case Ri.SET_CERTIFIED_DEVICES:
        case Ri.SEND_ANALYTICS_EVENT:
        case Ri.OPEN_INVITE_DIALOG:
        case Ri.CAPTURE_LOG:
        case Ri.GET_SKUS:
        case Ri.GET_ENTITLEMENTS:
          return cD.parse(ik);
        case Ri.AUTHENTICATE:
        case Ri.INITIATE_IMAGE_UPLOAD:
        case Ri.OPEN_SHARE_MOMENT_DIALOG:
        case Ri.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: kk
          } = Gi[ek];
          return kk.parse(ik);
        default:
          ! function(kk, ek) {
            throw ek
          }(0, new Error(`Unrecognized command ${ek}`))
      }
    }
    Ge({
      frame_id: ve(),
      platform: mi(ai).optional().nullable()
    }), Ge({
      v: ri(1),
      encoding: ri("json").optional(),
      client_id: ve(),
      frame_id: ve()
    });
    const xf = Ge({
        code: Ee(),
        message: ve().optional()
      }),
      nf = Ge({
        evt: ve().nullable(),
        nonce: ve().nullable(),
        data: oe().nullable(),
        cmd: ve()
      }).passthrough();

    function Uf(kk) {
      const ek = nf.parse(kk);
      return null != ek.evt ? ek.evt === ED ? WD.parse(ek) : function(kk) {
        const ek = kk.evt;
        if (!(ek in hD)) throw new Error(`Unrecognized event type ${kk.evt}`);
        return BD[ek].payload.parse(kk)
      }(XD.parse(ek)) : function(kk) {
        return Object.assign(Object.assign({}, kk), {
          data: Kf(kk)
        })
      }(Mf.passthrough().parse(ek))
    }

    function Hf(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const fk = Ji.extend({
        cmd: ri(ek),
        data: ik
      });
      return async ik => {
        const Sk = await kk({
          cmd: ek,
          args: ik,
          transfer: Dk(ik)
        });
        return fk.parse(Sk).data
      }
    }

    function wf(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const ik = Gi[kk].response,
        Dk = Ji.extend({
          cmd: ri(kk),
          data: ik
        });
      return ik => async fk => {
        const Sk = await ik({
          cmd: kk,
          args: fk,
          transfer: ek(fk)
        });
        return Dk.parse(Sk).data
      }
    }
    const lf = wf(Zi.AUTHENTICATE),
      pf = kk => Hf(kk, Ri.AUTHORIZE, TD),
      yf = kk => Hf(kk, Ri.CAPTURE_LOG, cD),
      Yf = kk => Hf(kk, Ri.ENCOURAGE_HW_ACCELERATION, rf),
      Lf = kk => Hf(kk, Ri.GET_ENTITLEMENTS_EMBEDDED, Df),
      Cf = kk => Hf(kk, Ri.GET_SKUS_EMBEDDED, ef),
      Af = kk => Hf(kk, Ri.GET_CHANNEL_PERMISSIONS, Pf),
      jf = kk => Hf(kk, Ri.GET_PLATFORM_BEHAVIORS, mf),
      sf = kk => Hf(kk, Ri.OPEN_EXTERNAL_LINK, cD),
      df = kk => Hf(kk, Ri.OPEN_INVITE_DIALOG, cD),
      Vf = wf(Zi.OPEN_SHARE_MOMENT_DIALOG);
    bD.Un({
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
      type: bD.shape.type.optional(),
      instance: bD.shape.instance.optional()
    }).nullable();
    const Ff = kk => Hf(kk, Ri.SET_ACTIVITY, kf),
      uf = kk => Hf(kk, Ri.SET_CONFIG, Sf);
    const qf = kk => ({
        lock_state: kk.lock_state,
        picture_in_picture_lock_state: kk.picture_in_picture_lock_state
      }),
      If = kk => function(kk) {
        let {
          sendCommand: ek,
          cmd: ik,
          response: Dk,
          fallbackTransform: fk,
          transferTransform: Sk = () => {}
        } = kk;
        const bk = Ji.extend({
          cmd: ri(ik),
          data: Dk
        });
        return async kk => {
          try {
            const Dk = await ek({
              cmd: ik,
              args: kk,
              transfer: Sk(kk)
            });
            return bk.parse(Dk).data
          } catch (Dk) {
            if (Dk.code === vi.INVALID_PAYLOAD) {
              const Dk = fk(kk),
                rk = await ek({
                  cmd: ik,
                  args: Dk,
                  transfer: Sk(Dk)
                });
              return bk.parse(rk).data
            }
            throw Dk
          }
        }
      }({
        sendCommand: kk,
        cmd: Ri.SET_ORIENTATION_LOCK_STATE,
        response: cD,
        fallbackTransform: qf
      }),
      zf = kk => Hf(kk, Ri.START_PURCHASE, ff),
      Qf = kk => Hf(kk, Ri.USER_SETTINGS_GET_LOCALE, bf),
      vf = wf(Zi.INITIATE_IMAGE_UPLOAD),
      Ef = kk => Hf(kk, Ri.GET_CHANNEL, OD),
      hf = wf(Zi.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var af = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Wf(kk) {
      return "string" === typeof kk && af.test(kk)
    }
    for (var tf = [], Xf = 0; Xf < 256; ++Xf) tf.push((Xf + 256).toString(16).substr(1));

    function Bf(kk) {
      var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ik = (tf[kk[ek + 0]] + tf[kk[ek + 1]] + tf[kk[ek + 2]] + tf[kk[ek + 3]] + "-" + tf[kk[ek + 4]] + tf[kk[ek + 5]] + "-" + tf[kk[ek + 6]] + tf[kk[ek + 7]] + "-" + tf[kk[ek + 8]] + tf[kk[ek + 9]] + "-" + tf[kk[ek + 10]] + tf[kk[ek + 11]] + tf[kk[ek + 12]] + tf[kk[ek + 13]] + tf[kk[ek + 14]] + tf[kk[ek + 15]]).toLowerCase();
      if (!Wf(ik)) throw TypeError("Stringified UUID is invalid");
      return ik
    }
    var Tf;

    function of(kk, ek, ik) {
      function Dk(kk, Dk, fk, Sk) {
        if ("string" === typeof kk && (kk = function(kk) {
            kk = unescape(encodeURIComponent(kk));
            for (var ek = [], ik = 0; ik < kk.length; ++ik) ek.push(kk.charCodeAt(ik));
            return ek
          }(kk)), "string" === typeof Dk && (Dk = function(kk) {
            if (!Wf(kk)) throw TypeError("Invalid UUID");
            var ek, ik = new Uint8Array(16);
            return ik[0] = (ek = parseInt(kk.slice(0, 8), 16)) >>> 24, ik[1] = ek >>> 16 & 255, ik[2] = ek >>> 8 & 255, ik[3] = 255 & ek, ik[4] = (ek = parseInt(kk.slice(9, 13), 16)) >>> 8, ik[5] = 255 & ek, ik[6] = (ek = parseInt(kk.slice(14, 18), 16)) >>> 8, ik[7] = 255 & ek, ik[8] = (ek = parseInt(kk.slice(19, 23), 16)) >>> 8, ik[9] = 255 & ek, ik[10] = (ek = parseInt(kk.slice(24, 36), 16)) / 1099511627776 & 255, ik[11] = ek / 4294967296 & 255, ik[12] = ek >>> 24 & 255, ik[13] = ek >>> 16 & 255, ik[14] = ek >>> 8 & 255, ik[15] = 255 & ek, ik
          }(Dk)), 16 !== Dk.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var bk = new Uint8Array(16 + kk.length);
        if (bk.set(Dk), bk.set(kk, Dk.length), (bk = ik(bk))[6] = 15 & bk[6] | ek, bk[8] = 63 & bk[8] | 128, fk) {
          Sk = Sk || 0;
          for (var rk = 0; rk < 16; ++rk) fk[Sk + rk] = bk[rk];
          return fk
        }
        return Bf(bk)
      }
      try {
        Dk.name = kk
      } catch (fk) {}
      return Dk.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Dk.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Dk
    }

    function Zf(kk) {
      return 14 + (kk + 64 >>> 9 << 4) + 1
    }

    function Of(kk, ek) {
      var ik = (65535 & kk) + (65535 & ek);
      return (kk >> 16) + (ek >> 16) + (ik >> 16) << 16 | 65535 & ik
    }

    function gf(kk, ek, ik, Dk, fk, Sk) {
      return Of((bk = Of(Of(ek, kk), Of(Dk, Sk))) << (rk = fk) | bk >>> 32 - rk, ik);
      var bk, rk
    }

    function Gf(kk, ek, ik, Dk, fk, Sk, bk) {
      return gf(ek & ik | ~ek & Dk, kk, ek, fk, Sk, bk)
    }

    function Nf(kk, ek, ik, Dk, fk, Sk, bk) {
      return gf(ek & Dk | ik & ~Dk, kk, ek, fk, Sk, bk)
    }

    function Rf(kk, ek, ik, Dk, fk, Sk, bk) {
      return gf(ek ^ ik ^ Dk, kk, ek, fk, Sk, bk)
    }

    function Jf(kk, ek, ik, Dk, fk, Sk, bk) {
      return gf(ik ^ (ek | ~Dk), kk, ek, fk, Sk, bk)
    }
    of("v3", 48, (function(kk) {
      if ("string" === typeof kk) {
        var ek = unescape(encodeURIComponent(kk));
        kk = new Uint8Array(ek.length);
        for (var ik = 0; ik < ek.length; ++ik) kk[ik] = ek.charCodeAt(ik)
      }
      return function(kk) {
        for (var ek = [], ik = 32 * kk.length, Dk = "0123456789abcdef", fk = 0; fk < ik; fk += 8) {
          var Sk = kk[fk >> 5] >>> fk % 32 & 255,
            bk = parseInt(Dk.charAt(Sk >>> 4 & 15) + Dk.charAt(15 & Sk), 16);
          ek.push(bk)
        }
        return ek
      }(function(kk, ek) {
        kk[ek >> 5] |= 128 << ek % 32, kk[Zf(ek) - 1] = ek;
        for (var ik = 1732584193, Dk = -271733879, fk = -1732584194, Sk = 271733878, bk = 0; bk < kk.length; bk += 16) {
          var rk = ik,
            Pk = Dk,
            mk = fk,
            Mk = Sk;
          ik = Gf(ik, Dk, fk, Sk, kk[bk], 7, -680876936), Sk = Gf(Sk, ik, Dk, fk, kk[bk + 1], 12, -389564586), fk = Gf(fk, Sk, ik, Dk, kk[bk + 2], 17, 606105819), Dk = Gf(Dk, fk, Sk, ik, kk[bk + 3], 22, -1044525330), ik = Gf(ik, Dk, fk, Sk, kk[bk + 4], 7, -176418897), Sk = Gf(Sk, ik, Dk, fk, kk[bk + 5], 12, 1200080426), fk = Gf(fk, Sk, ik, Dk, kk[bk + 6], 17, -1473231341), Dk = Gf(Dk, fk, Sk, ik, kk[bk + 7], 22, -45705983), ik = Gf(ik, Dk, fk, Sk, kk[bk + 8], 7, 1770035416), Sk = Gf(Sk, ik, Dk, fk, kk[bk + 9], 12, -1958414417), fk = Gf(fk, Sk, ik, Dk, kk[bk + 10], 17, -42063), Dk = Gf(Dk, fk, Sk, ik, kk[bk + 11], 22, -1990404162), ik = Gf(ik, Dk, fk, Sk, kk[bk + 12], 7, 1804603682), Sk = Gf(Sk, ik, Dk, fk, kk[bk + 13], 12, -40341101), fk = Gf(fk, Sk, ik, Dk, kk[bk + 14], 17, -1502002290), ik = Nf(ik, Dk = Gf(Dk, fk, Sk, ik, kk[bk + 15], 22, 1236535329), fk, Sk, kk[bk + 1], 5, -165796510), Sk = Nf(Sk, ik, Dk, fk, kk[bk + 6], 9, -1069501632), fk = Nf(fk, Sk, ik, Dk, kk[bk + 11], 14, 643717713), Dk = Nf(Dk, fk, Sk, ik, kk[bk], 20, -373897302), ik = Nf(ik, Dk, fk, Sk, kk[bk + 5], 5, -701558691), Sk = Nf(Sk, ik, Dk, fk, kk[bk + 10], 9, 38016083), fk = Nf(fk, Sk, ik, Dk, kk[bk + 15], 14, -660478335), Dk = Nf(Dk, fk, Sk, ik, kk[bk + 4], 20, -405537848), ik = Nf(ik, Dk, fk, Sk, kk[bk + 9], 5, 568446438), Sk = Nf(Sk, ik, Dk, fk, kk[bk + 14], 9, -1019803690), fk = Nf(fk, Sk, ik, Dk, kk[bk + 3], 14, -187363961), Dk = Nf(Dk, fk, Sk, ik, kk[bk + 8], 20, 1163531501), ik = Nf(ik, Dk, fk, Sk, kk[bk + 13], 5, -1444681467), Sk = Nf(Sk, ik, Dk, fk, kk[bk + 2], 9, -51403784), fk = Nf(fk, Sk, ik, Dk, kk[bk + 7], 14, 1735328473), ik = Rf(ik, Dk = Nf(Dk, fk, Sk, ik, kk[bk + 12], 20, -1926607734), fk, Sk, kk[bk + 5], 4, -378558), Sk = Rf(Sk, ik, Dk, fk, kk[bk + 8], 11, -2022574463), fk = Rf(fk, Sk, ik, Dk, kk[bk + 11], 16, 1839030562), Dk = Rf(Dk, fk, Sk, ik, kk[bk + 14], 23, -35309556), ik = Rf(ik, Dk, fk, Sk, kk[bk + 1], 4, -1530992060), Sk = Rf(Sk, ik, Dk, fk, kk[bk + 4], 11, 1272893353), fk = Rf(fk, Sk, ik, Dk, kk[bk + 7], 16, -155497632), Dk = Rf(Dk, fk, Sk, ik, kk[bk + 10], 23, -1094730640), ik = Rf(ik, Dk, fk, Sk, kk[bk + 13], 4, 681279174), Sk = Rf(Sk, ik, Dk, fk, kk[bk], 11, -358537222), fk = Rf(fk, Sk, ik, Dk, kk[bk + 3], 16, -722521979), Dk = Rf(Dk, fk, Sk, ik, kk[bk + 6], 23, 76029189), ik = Rf(ik, Dk, fk, Sk, kk[bk + 9], 4, -640364487), Sk = Rf(Sk, ik, Dk, fk, kk[bk + 12], 11, -421815835), fk = Rf(fk, Sk, ik, Dk, kk[bk + 15], 16, 530742520), ik = Jf(ik, Dk = Rf(Dk, fk, Sk, ik, kk[bk + 2], 23, -995338651), fk, Sk, kk[bk], 6, -198630844), Sk = Jf(Sk, ik, Dk, fk, kk[bk + 7], 10, 1126891415), fk = Jf(fk, Sk, ik, Dk, kk[bk + 14], 15, -1416354905), Dk = Jf(Dk, fk, Sk, ik, kk[bk + 5], 21, -57434055), ik = Jf(ik, Dk, fk, Sk, kk[bk + 12], 6, 1700485571), Sk = Jf(Sk, ik, Dk, fk, kk[bk + 3], 10, -1894986606), fk = Jf(fk, Sk, ik, Dk, kk[bk + 10], 15, -1051523), Dk = Jf(Dk, fk, Sk, ik, kk[bk + 1], 21, -2054922799), ik = Jf(ik, Dk, fk, Sk, kk[bk + 8], 6, 1873313359), Sk = Jf(Sk, ik, Dk, fk, kk[bk + 15], 10, -30611744), fk = Jf(fk, Sk, ik, Dk, kk[bk + 6], 15, -1560198380), Dk = Jf(Dk, fk, Sk, ik, kk[bk + 13], 21, 1309151649), ik = Jf(ik, Dk, fk, Sk, kk[bk + 4], 6, -145523070), Sk = Jf(Sk, ik, Dk, fk, kk[bk + 11], 10, -1120210379), fk = Jf(fk, Sk, ik, Dk, kk[bk + 2], 15, 718787259), Dk = Jf(Dk, fk, Sk, ik, kk[bk + 9], 21, -343485551), ik = Of(ik, rk), Dk = Of(Dk, Pk), fk = Of(fk, mk), Sk = Of(Sk, Mk)
        }
        return [ik, Dk, fk, Sk]
      }(function(kk) {
        if (0 === kk.length) return [];
        for (var ek = 8 * kk.length, ik = new Uint32Array(Zf(ek)), Dk = 0; Dk < ek; Dk += 8) ik[Dk >> 5] |= (255 & kk[Dk / 8]) << Dk % 32;
        return ik
      }(kk), 8 * kk.length))
    }));
    var kS = new Uint8Array(16);

    function eS() {
      if (!Tf && !(Tf = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Tf(kS)
    }

    function iS(kk, ek, ik) {
      var Dk = (kk = kk || {}).random || (kk.rng || eS)();
      if (Dk[6] = 15 & Dk[6] | 64, Dk[8] = 63 & Dk[8] | 128, ek) {
        ik = ik || 0;
        for (var fk = 0; fk < 16; ++fk) ek[ik + fk] = Dk[fk];
        return ek
      }
      return Bf(Dk)
    }

    function DS(kk, ek, ik, Dk) {
      switch (kk) {
        case 0:
          return ek & ik ^ ~ek & Dk;
        case 1:
        case 3:
          return ek ^ ik ^ Dk;
        case 2:
          return ek & ik ^ ek & Dk ^ ik & Dk
      }
    }

    function fS(kk, ek) {
      return kk << ek | kk >>> 32 - ek
    }
    of("v5", 80, (function(kk) {
      var ek = [1518500249, 1859775393, 2400959708, 3395469782],
        ik = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof kk) {
        var Dk = unescape(encodeURIComponent(kk));
        kk = [];
        for (var fk = 0; fk < Dk.length; ++fk) kk.push(Dk.charCodeAt(fk))
      } else Array.isArray(kk) || (kk = Array.prototype.slice.call(kk));
      kk.push(128);
      for (var Sk = kk.length / 4 + 2, bk = Math.ceil(Sk / 16), rk = new Array(bk), Pk = 0; Pk < bk; ++Pk) {
        for (var mk = new Uint32Array(16), Mk = 0; Mk < 16; ++Mk) mk[Mk] = kk[64 * Pk + 4 * Mk] << 24 | kk[64 * Pk + 4 * Mk + 1] << 16 | kk[64 * Pk + 4 * Mk + 2] << 8 | kk[64 * Pk + 4 * Mk + 3];
        rk[Pk] = mk
      }
      rk[bk - 1][14] = 8 * (kk.length - 1) / Math.pow(2, 32), rk[bk - 1][14] = Math.floor(rk[bk - 1][14]), rk[bk - 1][15] = 8 * (kk.length - 1) & 4294967295;
      for (var Kk = 0; Kk < bk; ++Kk) {
        for (var xk = new Uint32Array(80), nk = 0; nk < 16; ++nk) xk[nk] = rk[Kk][nk];
        for (var Uk = 16; Uk < 80; ++Uk) xk[Uk] = fS(xk[Uk - 3] ^ xk[Uk - 8] ^ xk[Uk - 14] ^ xk[Uk - 16], 1);
        for (var Hk = ik[0], wk = ik[1], lk = ik[2], pk = ik[3], yk = ik[4], Yk = 0; Yk < 80; ++Yk) {
          var Lk = Math.floor(Yk / 20),
            Ck = fS(Hk, 5) + DS(Lk, wk, lk, pk) + yk + ek[Lk] + xk[Yk] >>> 0;
          yk = pk, pk = lk, lk = fS(wk, 30) >>> 0, wk = Hk, Hk = Ck
        }
        ik[0] = ik[0] + Hk >>> 0, ik[1] = ik[1] + wk >>> 0, ik[2] = ik[2] + lk >>> 0, ik[3] = ik[3] + pk >>> 0, ik[4] = ik[4] + yk >>> 0
      }
      return [ik[0] >> 24 & 255, ik[0] >> 16 & 255, ik[0] >> 8 & 255, 255 & ik[0], ik[1] >> 24 & 255, ik[1] >> 16 & 255, ik[1] >> 8 & 255, 255 & ik[1], ik[2] >> 24 & 255, ik[2] >> 16 & 255, ik[2] >> 8 & 255, 255 & ik[2], ik[3] >> 24 & 255, ik[3] >> 16 & 255, ik[3] >> 8 & 255, 255 & ik[3], ik[4] >> 24 & 255, ik[4] >> 16 & 255, ik[4] >> 8 & 255, 255 & ik[4]]
    }));
    class SS extends Error {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(ek), this.code = kk, this.message = ek, this.name = "Discord SDK Error"
      }
    }
    const bS = ["log", "warn", "debug", "info", "error"];
    var rS;
    ! function(kk) {
      kk[kk.HANDSHAKE = 0] = "HANDSHAKE", kk[kk.FRAME = 1] = "FRAME", kk[kk.CLOSE = 2] = "CLOSE", kk[kk.HELLO = 3] = "HELLO"
    }(rS || (rS = {}));
    const PS = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class mS {
      getTransfer(kk) {
        var ek;
        switch (kk.cmd) {
          case Ri.SUBSCRIBE:
          case Ri.UNSUBSCRIBE:
            return;
          default:
            return null !== (ek = kk.transfer) && void 0 !== ek ? ek : void 0
        }
      }
      constructor(kk, ek) {
        var ik;
        if (this.eventBus = new mk, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = kk => {
            var ek;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const ik = iS();
            null === (ek = this.source) || void 0 === ek || ek.postMessage([rS.FRAME, Object.assign(Object.assign({}, kk), {
              nonce: ik
            })], this.sourceOrigin, this.getTransfer(kk));
            return new Promise(((kk, ek) => {
              this.pendingCommands.set(ik, {
                resolve: kk,
                reject: ek
              })
            }))
          }, this.commands = (ik = this.sendCommand, {
            authenticate: lf(ik),
            authorize: pf(ik),
            captureLog: yf(ik),
            encourageHardwareAcceleration: Yf(ik),
            getChannel: Ef(ik),
            getChannelPermissions: Af(ik),
            getEntitlements: Lf(ik),
            getPlatformBehaviors: jf(ik),
            getSkus: Cf(ik),
            openExternalLink: sf(ik),
            openInviteDialog: df(ik),
            openShareMomentDialog: Vf(ik),
            setActivity: Ff(ik),
            setConfig: uf(ik),
            setOrientationLockState: If(ik),
            startPurchase: zf(ik),
            userSettingsGetLocale: Qf(ik),
            initiateImageUpload: vf(ik),
            getInstanceConnectedParticipants: hf(ik)
          }), this.handleMessage = kk => {
            if (!PS.has(kk.origin)) return;
            const ek = kk.data;
            if (!Array.isArray(ek)) return;
            const [ik, Dk] = ek;
            switch (ik) {
              case rS.HELLO:
                return;
              case rS.CLOSE:
                return this.handleClose(Dk);
              case rS.HANDSHAKE:
                return this.handleHandshake();
              case rS.FRAME:
                return this.handleFrame(Dk);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = kk, this.configuration = null !== ek && void 0 !== ek ? ek : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = ai.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Dk = new URLSearchParams(this._getSearch()),
          fk = Dk.get("frame_id");
        if (!fk) throw new Error("frame_id query param is not defined");
        this.frameId = fk;
        const Sk = Dk.get("instance_id");
        if (!Sk) throw new Error("instance_id query param is not defined");
        this.instanceId = Sk;
        const bk = Dk.get("platform");
        if (!bk) throw new Error("platform query param is not defined");
        if (bk !== ai.DESKTOP && bk !== ai.MOBILE) throw new Error(`Invalid query param "platform" of "${bk}". Valid values are "${ai.DESKTOP}" or "${ai.MOBILE}"`);
        this.platform = bk, this.guildId = Dk.get("guild_id"), this.channelId = Dk.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var kk;
          return [null !== (kk = window.parent.opener) && void 0 !== kk ? kk : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(kk, ek) {
        var ik;
        window.removeEventListener("message", this.handleMessage);
        const Dk = iS();
        null === (ik = this.source) || void 0 === ik || ik.postMessage([rS.CLOSE, {
          code: kk,
          message: ek,
          nonce: Dk
        }], this.sourceOrigin)
      }
      async subscribe(kk, ek) {
        for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
        const [Sk] = Dk, bk = this.eventBus.listenerCount(kk), rk = this.eventBus.on(kk, ek);
        return Object.values(hD).includes(kk) && kk !== hD.READY && 0 === bk && await this.sendCommand({
          cmd: Ri.SUBSCRIBE,
          args: Sk,
          evt: kk
        }), rk
      }
      async unsubscribe(kk, ek) {
        for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
        const [Sk] = Dk;
        return kk !== hD.READY && 1 === this.eventBus.listenerCount(kk) && await this.sendCommand({
          cmd: Ri.UNSUBSCRIBE,
          evt: kk,
          args: Sk
        }), this.eventBus.off(kk, ek)
      }
      async ready() {
        this.isReady || await new Promise((kk => {
          this.eventBus.once(hD.READY, kk)
        }))
      }
      handshake() {
        var kk;
        null === (kk = this.source) || void 0 === kk || kk.postMessage([rS.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(hD.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const kk = (kk, ek) => {
          this.commands.captureLog({
            level: kk,
            message: ek
          })
        };
        bS.forEach((ek => {
          ! function(kk, ek, ik) {
            const Dk = kk[ek],
              fk = kk;
            Dk && (kk[ek] = function() {
              const kk = [].slice.call(arguments),
                Sk = "" + kk.join(" ");
              ik(ek, Sk), Dk.apply(fk, kk)
            })
          }(console, ek, kk)
        }))
      }
      handleClose(kk) {
        xf.parse(kk)
      }
      handleHandshake() {}
      handleFrame(kk) {
        var ek, ik;
        let Dk;
        try {
          Dk = Uf(kk)
        } catch (fk) {
          return console.error("Failed to parse", kk), void console.error(fk)
        }
        if ("DISPATCH" === Dk.cmd) this.eventBus.emit(Dk.evt, Dk.data);
        else {
          if (Dk.evt === ED) {
            if (null != Dk.nonce) return null === (ek = this.pendingCommands.get(Dk.nonce)) || void 0 === ek || ek.reject(Dk.data), void this.pendingCommands.delete(Dk.nonce);
            this.eventBus.emit("error", new SS(Dk.data.code, Dk.data.message))
          }
          if (null == Dk.nonce) return void console.error("Missing nonce", kk);
          null === (ik = this.pendingCommands.get(Dk.nonce)) || void 0 === ik || ik.resolve(Dk), this.pendingCommands.delete(Dk.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var MS, KS = 1e9,
      xS = !0,
      nS = "[DecimalError] ",
      US = nS + "Invalid argument: ",
      HS = nS + "Exponent out of range: ",
      wS = Math.floor,
      lS = Math.pow,
      pS = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      yS = 1e7,
      YS = 9007199254740991,
      LS = wS(1286742750677284.5),
      CS = {};

    function AS(kk, ek) {
      var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk = kk.constructor,
        Kk = Mk.precision;
      if (!kk.s || !ek.s) return ek.s || (ek = new Mk(kk)), xS ? QS(ek, Kk) : ek;
      if (Pk = kk.d, mk = ek.d, bk = kk.e, fk = ek.e, Pk = Pk.slice(), Sk = bk - fk) {
        for (Sk < 0 ? (Dk = Pk, Sk = -Sk, rk = mk.length) : (Dk = mk, fk = bk, rk = Pk.length), Sk > (rk = (bk = Math.ceil(Kk / 7)) > rk ? bk + 1 : rk + 1) && (Sk = rk, Dk.length = 1), Dk.reverse(); Sk--;) Dk.push(0);
        Dk.reverse()
      }
      for ((rk = Pk.length) - (Sk = mk.length) < 0 && (Sk = rk, Dk = mk, mk = Pk, Pk = Dk), ik = 0; Sk;) ik = (Pk[--Sk] = Pk[Sk] + mk[Sk] + ik) / yS | 0, Pk[Sk] %= yS;
      for (ik && (Pk.unshift(ik), ++fk), rk = Pk.length; 0 == Pk[--rk];) Pk.pop();
      return ek.d = Pk, ek.e = fk, xS ? QS(ek, Kk) : ek
    }

    function jS(kk, ek, ik) {
      if (kk !== ~~kk || kk < ek || kk > ik) throw Error(US + kk)
    }

    function sS(kk) {
      var ek, ik, Dk, fk = kk.length - 1,
        Sk = "",
        bk = kk[0];
      if (fk > 0) {
        for (Sk += bk, ek = 1; ek < fk; ek++)(ik = 7 - (Dk = kk[ek] + "").length) && (Sk += qS(ik)), Sk += Dk;
        (ik = 7 - (Dk = (bk = kk[ek]) + "").length) && (Sk += qS(ik))
      } else if (0 === bk) return "0";
      for (; bk % 10 === 0;) bk /= 10;
      return Sk + bk
    }
    CS.absoluteValue = CS.abs = function() {
      var kk = new this.constructor(this);
      return kk.s && (kk.s = 1), kk
    }, CS.comparedTo = CS.cmp = function(kk) {
      var ek, ik, Dk, fk, Sk = this;
      if (kk = new Sk.constructor(kk), Sk.s !== kk.s) return Sk.s || -kk.s;
      if (Sk.e !== kk.e) return Sk.e > kk.e ^ Sk.s < 0 ? 1 : -1;
      for (ek = 0, ik = (Dk = Sk.d.length) < (fk = kk.d.length) ? Dk : fk; ek < ik; ++ek)
        if (Sk.d[ek] !== kk.d[ek]) return Sk.d[ek] > kk.d[ek] ^ Sk.s < 0 ? 1 : -1;
      return Dk === fk ? 0 : Dk > fk ^ Sk.s < 0 ? 1 : -1
    }, CS.decimalPlaces = CS.dp = function() {
      var kk = this,
        ek = kk.d.length - 1,
        ik = 7 * (ek - kk.e);
      if (ek = kk.d[ek])
        for (; ek % 10 == 0; ek /= 10) ik--;
      return ik < 0 ? 0 : ik
    }, CS.dividedBy = CS.div = function(kk) {
      return dS(this, new this.constructor(kk))
    }, CS.dividedToIntegerBy = CS.idiv = function(kk) {
      var ek = this.constructor;
      return QS(dS(this, new ek(kk), 0, 1), ek.precision)
    }, CS.equals = CS.eq = function(kk) {
      return !this.cmp(kk)
    }, CS.exponent = function() {
      return FS(this)
    }, CS.greaterThan = CS.gt = function(kk) {
      return this.cmp(kk) > 0
    }, CS.greaterThanOrEqualTo = CS.gte = function(kk) {
      return this.cmp(kk) >= 0
    }, CS.isInteger = CS.isint = function() {
      return this.e > this.d.length - 2
    }, CS.isNegative = CS.isneg = function() {
      return this.s < 0
    }, CS.isPositive = CS.ispos = function() {
      return this.s > 0
    }, CS.isZero = function() {
      return 0 === this.s
    }, CS.lessThan = CS.lt = function(kk) {
      return this.cmp(kk) < 0
    }, CS.lessThanOrEqualTo = CS.lte = function(kk) {
      return this.cmp(kk) < 1
    }, CS.logarithm = CS.log = function(kk) {
      var ek, ik = this,
        Dk = ik.constructor,
        fk = Dk.precision,
        Sk = fk + 5;
      if (void 0 === kk) kk = new Dk(10);
      else if ((kk = new Dk(kk)).s < 1 || kk.eq(MS)) throw Error(nS + "NaN");
      if (ik.s < 1) throw Error(nS + (ik.s ? "NaN" : "-Infinity"));
      return ik.eq(MS) ? new Dk(0) : (xS = !1, ek = dS(IS(ik, Sk), IS(kk, Sk), Sk), xS = !0, QS(ek, fk))
    }, CS.minus = CS.sub = function(kk) {
      var ek = this;
      return kk = new ek.constructor(kk), ek.s == kk.s ? vS(ek, kk) : AS(ek, (kk.s = -kk.s, kk))
    }, CS.modulo = CS.mod = function(kk) {
      var ek, ik = this,
        Dk = ik.constructor,
        fk = Dk.precision;
      if (!(kk = new Dk(kk)).s) throw Error(nS + "NaN");
      return ik.s ? (xS = !1, ek = dS(ik, kk, 0, 1).times(kk), xS = !0, ik.minus(ek)) : QS(new Dk(ik), fk)
    }, CS.naturalExponential = CS.exp = function() {
      return VS(this)
    }, CS.naturalLogarithm = CS.ln = function() {
      return IS(this)
    }, CS.negated = CS.neg = function() {
      var kk = new this.constructor(this);
      return kk.s = -kk.s || 0, kk
    }, CS.plus = CS.add = function(kk) {
      var ek = this;
      return kk = new ek.constructor(kk), ek.s == kk.s ? AS(ek, kk) : vS(ek, (kk.s = -kk.s, kk))
    }, CS.precision = CS.sd = function(kk) {
      var ek, ik, Dk, fk = this;
      if (void 0 !== kk && kk !== !!kk && 1 !== kk && 0 !== kk) throw Error(US + kk);
      if (ek = FS(fk) + 1, ik = 7 * (Dk = fk.d.length - 1) + 1, Dk = fk.d[Dk]) {
        for (; Dk % 10 == 0; Dk /= 10) ik--;
        for (Dk = fk.d[0]; Dk >= 10; Dk /= 10) ik++
      }
      return kk && ek > ik ? ek : ik
    }, CS.squareRoot = CS.sqrt = function() {
      var kk, ek, ik, Dk, fk, Sk, bk, rk = this,
        Pk = rk.constructor;
      if (rk.s < 1) {
        if (!rk.s) return new Pk(0);
        throw Error(nS + "NaN")
      }
      for (kk = FS(rk), xS = !1, 0 == (fk = Math.sqrt(+rk)) || fk == 1 / 0 ? (((ek = sS(rk.d)).length + kk) % 2 == 0 && (ek += "0"), fk = Math.sqrt(ek), kk = wS((kk + 1) / 2) - (kk < 0 || kk % 2), Dk = new Pk(ek = fk == 1 / 0 ? "1e" + kk : (ek = fk.toExponential()).slice(0, ek.indexOf("e") + 1) + kk)) : Dk = new Pk(fk.toString()), fk = bk = (ik = Pk.precision) + 3;;)
        if (Dk = (Sk = Dk).plus(dS(rk, Sk, bk + 2)).times(.5), sS(Sk.d).slice(0, bk) === (ek = sS(Dk.d)).slice(0, bk)) {
          if (ek = ek.slice(bk - 3, bk + 1), fk == bk && "4999" == ek) {
            if (QS(Sk, ik + 1, 0), Sk.times(Sk).eq(rk)) {
              Dk = Sk;
              break
            }
          } else if ("9999" != ek) break;
          bk += 4
        } return xS = !0, QS(Dk, ik)
    }, CS.times = CS.mul = function(kk) {
      var ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk = this,
        Kk = Mk.constructor,
        xk = Mk.d,
        nk = (kk = new Kk(kk)).d;
      if (!Mk.s || !kk.s) return new Kk(0);
      for (kk.s *= Mk.s, ik = Mk.e + kk.e, (Pk = xk.length) < (mk = nk.length) && (Sk = xk, xk = nk, nk = Sk, bk = Pk, Pk = mk, mk = bk), Sk = [], Dk = bk = Pk + mk; Dk--;) Sk.push(0);
      for (Dk = mk; --Dk >= 0;) {
        for (ek = 0, fk = Pk + Dk; fk > Dk;) rk = Sk[fk] + nk[Dk] * xk[fk - Dk - 1] + ek, Sk[fk--] = rk % yS | 0, ek = rk / yS | 0;
        Sk[fk] = (Sk[fk] + ek) % yS | 0
      }
      for (; !Sk[--bk];) Sk.pop();
      return ek ? ++ik : Sk.shift(), kk.d = Sk, kk.e = ik, xS ? QS(kk, Kk.precision) : kk
    }, CS.toDecimalPlaces = CS.todp = function(kk, ek) {
      var ik = this,
        Dk = ik.constructor;
      return ik = new Dk(ik), void 0 === kk ? ik : (jS(kk, 0, KS), void 0 === ek ? ek = Dk.rounding : jS(ek, 0, 8), QS(ik, kk + FS(ik) + 1, ek))
    }, CS.toExponential = function(kk, ek) {
      var ik, Dk = this,
        fk = Dk.constructor;
      return void 0 === kk ? ik = ES(Dk, !0) : (jS(kk, 0, KS), void 0 === ek ? ek = fk.rounding : jS(ek, 0, 8), ik = ES(Dk = QS(new fk(Dk), kk + 1, ek), !0, kk + 1)), ik
    }, CS.toFixed = function(kk, ek) {
      var ik, Dk, fk = this,
        Sk = fk.constructor;
      return void 0 === kk ? ES(fk) : (jS(kk, 0, KS), void 0 === ek ? ek = Sk.rounding : jS(ek, 0, 8), ik = ES((Dk = QS(new Sk(fk), kk + FS(fk) + 1, ek)).abs(), !1, kk + FS(Dk) + 1), fk.isneg() && !fk.isZero() ? "-" + ik : ik)
    }, CS.toInteger = CS.toint = function() {
      var kk = this,
        ek = kk.constructor;
      return QS(new ek(kk), FS(kk) + 1, ek.rounding)
    }, CS.toNumber = function() {
      return +this
    }, CS.toPower = CS.pow = function(kk) {
      var ek, ik, Dk, fk, Sk, bk, rk = this,
        Pk = rk.constructor,
        mk = +(kk = new Pk(kk));
      if (!kk.s) return new Pk(MS);
      if (!(rk = new Pk(rk)).s) {
        if (kk.s < 1) throw Error(nS + "Infinity");
        return rk
      }
      if (rk.eq(MS)) return rk;
      if (Dk = Pk.precision, kk.eq(MS)) return QS(rk, Dk);
      if (bk = (ek = kk.e) >= (ik = kk.d.length - 1), Sk = rk.s, bk) {
        if ((ik = mk < 0 ? -mk : mk) <= YS) {
          for (fk = new Pk(MS), ek = Math.ceil(Dk / 7 + 4), xS = !1; ik % 2 && hS((fk = fk.times(rk)).d, ek), 0 !== (ik = wS(ik / 2));) hS((rk = rk.times(rk)).d, ek);
          return xS = !0, kk.s < 0 ? new Pk(MS).div(fk) : QS(fk, Dk)
        }
      } else if (Sk < 0) throw Error(nS + "NaN");
      return Sk = Sk < 0 && 1 & kk.d[Math.max(ek, ik)] ? -1 : 1, rk.s = 1, xS = !1, fk = kk.times(IS(rk, Dk + 12)), xS = !0, (fk = VS(fk)).s = Sk, fk
    }, CS.toPrecision = function(kk, ek) {
      var ik, Dk, fk = this,
        Sk = fk.constructor;
      return void 0 === kk ? Dk = ES(fk, (ik = FS(fk)) <= Sk.toExpNeg || ik >= Sk.toExpPos) : (jS(kk, 1, KS), void 0 === ek ? ek = Sk.rounding : jS(ek, 0, 8), Dk = ES(fk = QS(new Sk(fk), kk, ek), kk <= (ik = FS(fk)) || ik <= Sk.toExpNeg, kk)), Dk
    }, CS.toSignificantDigits = CS.tosd = function(kk, ek) {
      var ik = this.constructor;
      return void 0 === kk ? (kk = ik.precision, ek = ik.rounding) : (jS(kk, 1, KS), void 0 === ek ? ek = ik.rounding : jS(ek, 0, 8)), QS(new ik(this), kk, ek)
    }, CS.toString = CS.valueOf = CS.val = CS.toJSON = CS[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var kk = this,
        ek = FS(kk),
        ik = kk.constructor;
      return ES(kk, ek <= ik.toExpNeg || ek >= ik.toExpPos)
    };
    var dS = function() {
      function kk(kk, ek) {
        var ik, Dk = 0,
          fk = kk.length;
        for (kk = kk.slice(); fk--;) ik = kk[fk] * ek + Dk, kk[fk] = ik % yS | 0, Dk = ik / yS | 0;
        return Dk && kk.unshift(Dk), kk
      }

      function ek(kk, ek, ik, Dk) {
        var fk, Sk;
        if (ik != Dk) Sk = ik > Dk ? 1 : -1;
        else
          for (fk = Sk = 0; fk < ik; fk++)
            if (kk[fk] != ek[fk]) {
              Sk = kk[fk] > ek[fk] ? 1 : -1;
              break
            } return Sk
      }

      function ik(kk, ek, ik) {
        for (var Dk = 0; ik--;) kk[ik] -= Dk, Dk = kk[ik] < ek[ik] ? 1 : 0, kk[ik] = Dk * yS + kk[ik] - ek[ik];
        for (; !kk[0] && kk.length > 1;) kk.shift()
      }
      return function(Dk, fk, Sk, bk) {
        var rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, sk = Dk.constructor,
          dk = Dk.s == fk.s ? 1 : -1,
          Vk = Dk.d,
          Fk = fk.d;
        if (!Dk.s) return new sk(Dk);
        if (!fk.s) throw Error(nS + "Division by zero");
        for (Pk = Dk.e - fk.e, Ak = Fk.length, Lk = Vk.length, Uk = (nk = new sk(dk)).d = [], mk = 0; Fk[mk] == (Vk[mk] || 0);) ++mk;
        if (Fk[mk] > (Vk[mk] || 0) && --Pk, (pk = null == Sk ? Sk = sk.precision : bk ? Sk + (FS(Dk) - FS(fk)) + 1 : Sk) < 0) return new sk(0);
        if (pk = pk / 7 + 2 | 0, mk = 0, 1 == Ak)
          for (Mk = 0, Fk = Fk[0], pk++;
            (mk < Lk || Mk) && pk--; mk++) yk = Mk * yS + (Vk[mk] || 0), Uk[mk] = yk / Fk | 0, Mk = yk % Fk | 0;
        else {
          for ((Mk = yS / (Fk[0] + 1) | 0) > 1 && (Fk = kk(Fk, Mk), Vk = kk(Vk, Mk), Ak = Fk.length, Lk = Vk.length), Yk = Ak, wk = (Hk = Vk.slice(0, Ak)).length; wk < Ak;) Hk[wk++] = 0;
          (jk = Fk.slice()).unshift(0), Ck = Fk[0], Fk[1] >= yS / 2 && ++Ck;
          do {
            Mk = 0, (rk = ek(Fk, Hk, Ak, wk)) < 0 ? (lk = Hk[0], Ak != wk && (lk = lk * yS + (Hk[1] || 0)), (Mk = lk / Ck | 0) > 1 ? (Mk >= yS && (Mk = yS - 1), 1 == (rk = ek(Kk = kk(Fk, Mk), Hk, xk = Kk.length, wk = Hk.length)) && (Mk--, ik(Kk, Ak < xk ? jk : Fk, xk))) : (0 == Mk && (rk = Mk = 1), Kk = Fk.slice()), (xk = Kk.length) < wk && Kk.unshift(0), ik(Hk, Kk, wk), -1 == rk && (rk = ek(Fk, Hk, Ak, wk = Hk.length)) < 1 && (Mk++, ik(Hk, Ak < wk ? jk : Fk, wk)), wk = Hk.length) : 0 === rk && (Mk++, Hk = [0]), Uk[mk++] = Mk, rk && Hk[0] ? Hk[wk++] = Vk[Yk] || 0 : (Hk = [Vk[Yk]], wk = 1)
          } while ((Yk++ < Lk || void 0 !== Hk[0]) && pk--)
        }
        return Uk[0] || Uk.shift(), nk.e = Pk, QS(nk, bk ? Sk + FS(nk) + 1 : Sk)
      }
    }();

    function VS(kk, ek) {
      var ik, Dk, fk, Sk, bk, rk = 0,
        Pk = 0,
        mk = kk.constructor,
        Mk = mk.precision;
      if (FS(kk) > 16) throw Error(HS + FS(kk));
      if (!kk.s) return new mk(MS);
      for (null == ek ? (xS = !1, bk = Mk) : bk = ek, Sk = new mk(.03125); kk.abs().gte(.1);) kk = kk.times(Sk), Pk += 5;
      for (bk += Math.log(lS(2, Pk)) / Math.LN10 * 2 + 5 | 0, ik = Dk = fk = new mk(MS), mk.precision = bk;;) {
        if (Dk = QS(Dk.times(kk), bk), ik = ik.times(++rk), sS((Sk = fk.plus(dS(Dk, ik, bk))).d).slice(0, bk) === sS(fk.d).slice(0, bk)) {
          for (; Pk--;) fk = QS(fk.times(fk), bk);
          return mk.precision = Mk, null == ek ? (xS = !0, QS(fk, Mk)) : fk
        }
        fk = Sk
      }
    }

    function FS(kk) {
      for (var ek = 7 * kk.e, ik = kk.d[0]; ik >= 10; ik /= 10) ek++;
      return ek
    }

    function uS(kk, ek, ik) {
      if (ek > kk.LN10.sd()) throw xS = !0, ik && (kk.precision = ik), Error(nS + "LN10 precision limit exceeded");
      return QS(new kk(kk.LN10), ek)
    }

    function qS(kk) {
      for (var ek = ""; kk--;) ek += "0";
      return ek
    }

    function IS(kk, ek) {
      var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk = 1,
        xk = kk,
        nk = xk.d,
        Uk = xk.constructor,
        Hk = Uk.precision;
      if (xk.s < 1) throw Error(nS + (xk.s ? "NaN" : "-Infinity"));
      if (xk.eq(MS)) return new Uk(0);
      if (null == ek ? (xS = !1, mk = Hk) : mk = ek, xk.eq(10)) return null == ek && (xS = !0), uS(Uk, mk);
      if (mk += 10, Uk.precision = mk, Dk = (ik = sS(nk)).charAt(0), Sk = FS(xk), !(Math.abs(Sk) < 15e14)) return Pk = uS(Uk, mk + 2, Hk).times(Sk + ""), xk = IS(new Uk(Dk + "." + ik.slice(1)), mk - 10).plus(Pk), Uk.precision = Hk, null == ek ? (xS = !0, QS(xk, Hk)) : xk;
      for (; Dk < 7 && 1 != Dk || 1 == Dk && ik.charAt(1) > 3;) Dk = (ik = sS((xk = xk.times(kk)).d)).charAt(0), Kk++;
      for (Sk = FS(xk), Dk > 1 ? (xk = new Uk("0." + ik), Sk++) : xk = new Uk(Dk + "." + ik.slice(1)), rk = bk = xk = dS(xk.minus(MS), xk.plus(MS), mk), Mk = QS(xk.times(xk), mk), fk = 3;;) {
        if (bk = QS(bk.times(Mk), mk), sS((Pk = rk.plus(dS(bk, new Uk(fk), mk))).d).slice(0, mk) === sS(rk.d).slice(0, mk)) return rk = rk.times(2), 0 !== Sk && (rk = rk.plus(uS(Uk, mk + 2, Hk).times(Sk + ""))), rk = dS(rk, new Uk(Kk), mk), Uk.precision = Hk, null == ek ? (xS = !0, QS(rk, Hk)) : rk;
        rk = Pk, fk += 2
      }
    }

    function zS(kk, ek) {
      var ik, Dk, fk;
      for ((ik = ek.indexOf(".")) > -1 && (ek = ek.replace(".", "")), (Dk = ek.search(/e/i)) > 0 ? (ik < 0 && (ik = Dk), ik += +ek.slice(Dk + 1), ek = ek.substring(0, Dk)) : ik < 0 && (ik = ek.length), Dk = 0; 48 === ek.charCodeAt(Dk);) ++Dk;
      for (fk = ek.length; 48 === ek.charCodeAt(fk - 1);) --fk;
      if (ek = ek.slice(Dk, fk)) {
        if (fk -= Dk, ik = ik - Dk - 1, kk.e = wS(ik / 7), kk.d = [], Dk = (ik + 1) % 7, ik < 0 && (Dk += 7), Dk < fk) {
          for (Dk && kk.d.push(+ek.slice(0, Dk)), fk -= 7; Dk < fk;) kk.d.push(+ek.slice(Dk, Dk += 7));
          Dk = 7 - (ek = ek.slice(Dk)).length
        } else Dk -= fk;
        for (; Dk--;) ek += "0";
        if (kk.d.push(+ek), xS && (kk.e > LS || kk.e < -LS)) throw Error(HS + ik)
      } else kk.s = 0, kk.e = 0, kk.d = [0];
      return kk
    }

    function QS(kk, ek, ik) {
      var Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk = kk.d;
      for (bk = 1, Sk = Kk[0]; Sk >= 10; Sk /= 10) bk++;
      if ((Dk = ek - bk) < 0) Dk += 7, fk = ek, mk = Kk[Mk = 0];
      else {
        if ((Mk = Math.ceil((Dk + 1) / 7)) >= (Sk = Kk.length)) return kk;
        for (mk = Sk = Kk[Mk], bk = 1; Sk >= 10; Sk /= 10) bk++;
        fk = (Dk %= 7) - 7 + bk
      }
      if (void 0 !== ik && (rk = mk / (Sk = lS(10, bk - fk - 1)) % 10 | 0, Pk = ek < 0 || void 0 !== Kk[Mk + 1] || mk % Sk, Pk = ik < 4 ? (rk || Pk) && (0 == ik || ik == (kk.s < 0 ? 3 : 2)) : rk > 5 || 5 == rk && (4 == ik || Pk || 6 == ik && (Dk > 0 ? fk > 0 ? mk / lS(10, bk - fk) : 0 : Kk[Mk - 1]) % 10 & 1 || ik == (kk.s < 0 ? 8 : 7))), ek < 1 || !Kk[0]) return Pk ? (Sk = FS(kk), Kk.length = 1, ek = ek - Sk - 1, Kk[0] = lS(10, (7 - ek % 7) % 7), kk.e = wS(-ek / 7) || 0) : (Kk.length = 1, Kk[0] = kk.e = kk.s = 0), kk;
      if (0 == Dk ? (Kk.length = Mk, Sk = 1, Mk--) : (Kk.length = Mk + 1, Sk = lS(10, 7 - Dk), Kk[Mk] = fk > 0 ? (mk / lS(10, bk - fk) % lS(10, fk) | 0) * Sk : 0), Pk)
        for (;;) {
          if (0 == Mk) {
            (Kk[0] += Sk) == yS && (Kk[0] = 1, ++kk.e);
            break
          }
          if (Kk[Mk] += Sk, Kk[Mk] != yS) break;
          Kk[Mk--] = 0, Sk = 1
        }
      for (Dk = Kk.length; 0 === Kk[--Dk];) Kk.pop();
      if (xS && (kk.e > LS || kk.e < -LS)) throw Error(HS + FS(kk));
      return kk
    }

    function vS(kk, ek) {
      var ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk = kk.constructor,
        nk = xk.precision;
      if (!kk.s || !ek.s) return ek.s ? ek.s = -ek.s : ek = new xk(kk), xS ? QS(ek, nk) : ek;
      if (Pk = kk.d, Kk = ek.d, Dk = ek.e, mk = kk.e, Pk = Pk.slice(), bk = mk - Dk) {
        for ((Mk = bk < 0) ? (ik = Pk, bk = -bk, rk = Kk.length) : (ik = Kk, Dk = mk, rk = Pk.length), bk > (fk = Math.max(Math.ceil(nk / 7), rk) + 2) && (bk = fk, ik.length = 1), ik.reverse(), fk = bk; fk--;) ik.push(0);
        ik.reverse()
      } else {
        for ((Mk = (fk = Pk.length) < (rk = Kk.length)) && (rk = fk), fk = 0; fk < rk; fk++)
          if (Pk[fk] != Kk[fk]) {
            Mk = Pk[fk] < Kk[fk];
            break
          } bk = 0
      }
      for (Mk && (ik = Pk, Pk = Kk, Kk = ik, ek.s = -ek.s), rk = Pk.length, fk = Kk.length - rk; fk > 0; --fk) Pk[rk++] = 0;
      for (fk = Kk.length; fk > bk;) {
        if (Pk[--fk] < Kk[fk]) {
          for (Sk = fk; Sk && 0 === Pk[--Sk];) Pk[Sk] = yS - 1;
          --Pk[Sk], Pk[fk] += yS
        }
        Pk[fk] -= Kk[fk]
      }
      for (; 0 === Pk[--rk];) Pk.pop();
      for (; 0 === Pk[0]; Pk.shift()) --Dk;
      return Pk[0] ? (ek.d = Pk, ek.e = Dk, xS ? QS(ek, nk) : ek) : new xk(0)
    }

    function ES(kk, ek, ik) {
      var Dk, fk = FS(kk),
        Sk = sS(kk.d),
        bk = Sk.length;
      return ek ? (ik && (Dk = ik - bk) > 0 ? Sk = Sk.charAt(0) + "." + Sk.slice(1) + qS(Dk) : bk > 1 && (Sk = Sk.charAt(0) + "." + Sk.slice(1)), Sk = Sk + (fk < 0 ? "e" : "e+") + fk) : fk < 0 ? (Sk = "0." + qS(-fk - 1) + Sk, ik && (Dk = ik - bk) > 0 && (Sk += qS(Dk))) : fk >= bk ? (Sk += qS(fk + 1 - bk), ik && (Dk = ik - fk - 1) > 0 && (Sk = Sk + "." + qS(Dk))) : ((Dk = fk + 1) < bk && (Sk = Sk.slice(0, Dk) + "." + Sk.slice(Dk)), ik && (Dk = ik - bk) > 0 && (fk + 1 === bk && (Sk += "."), Sk += qS(Dk))), kk.s < 0 ? "-" + Sk : Sk
    }

    function hS(kk, ek) {
      if (kk.length > ek) return kk.length = ek, !0
    }

    function aS(kk) {
      if (!kk || "object" !== typeof kk) throw Error(nS + "Object expected");
      var ek, ik, Dk, fk = ["precision", 1, KS, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (ek = 0; ek < fk.length; ek += 3)
        if (void 0 !== (Dk = kk[ik = fk[ek]])) {
          if (!(wS(Dk) === Dk && Dk >= fk[ek + 1] && Dk <= fk[ek + 2])) throw Error(US + ik + ": " + Dk);
          this[ik] = Dk
        } if (void 0 !== (Dk = kk[ik = "LN10"])) {
        if (Dk != Math.LN10) throw Error(US + ik + ": " + Dk);
        this[ik] = new this(Dk)
      }
      return this
    }
    var WS = function kk(ek) {
      var ik, Dk, fk;

      function Sk(kk) {
        var ek = this;
        if (!(ek instanceof Sk)) return new Sk(kk);
        if (ek.constructor = Sk, kk instanceof Sk) return ek.s = kk.s, ek.e = kk.e, void(ek.d = (kk = kk.d) ? kk.slice() : kk);
        if ("number" === typeof kk) {
          if (0 * kk !== 0) throw Error(US + kk);
          if (kk > 0) ek.s = 1;
          else {
            if (!(kk < 0)) return ek.s = 0, ek.e = 0, void(ek.d = [0]);
            kk = -kk, ek.s = -1
          }
          return kk === ~~kk && kk < 1e7 ? (ek.e = 0, void(ek.d = [kk])) : zS(ek, kk.toString())
        }
        if ("string" !== typeof kk) throw Error(US + kk);
        if (45 === kk.charCodeAt(0) ? (kk = kk.slice(1), ek.s = -1) : ek.s = 1, !pS.test(kk)) throw Error(US + kk);
        zS(ek, kk)
      }
      if (Sk.prototype = CS, Sk.ROUND_UP = 0, Sk.ROUND_DOWN = 1, Sk.ROUND_CEIL = 2, Sk.ROUND_FLOOR = 3, Sk.ROUND_HALF_UP = 4, Sk.ROUND_HALF_DOWN = 5, Sk.ROUND_HALF_EVEN = 6, Sk.ROUND_HALF_CEIL = 7, Sk.ROUND_HALF_FLOOR = 8, Sk.clone = kk, Sk.config = Sk.set = aS, void 0 === ek && (ek = {}), ek)
        for (fk = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ik = 0; ik < fk.length;) ek.hasOwnProperty(Dk = fk[ik++]) || (ek[Dk] = this[Dk]);
      return Sk.config(ek), Sk
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    MS = new WS(1);
    var tS;
    ! function(kk) {
      kk.AED = "aed", kk.AFN = "afn", kk.ALL = "all", kk.AMD = "amd", kk.ANG = "ang", kk.AOA = "aoa", kk.ARS = "ars", kk.AUD = "aud", kk.AWG = "awg", kk.AZN = "azn", kk.BAM = "bam", kk.BBD = "bbd", kk.BDT = "bdt", kk.BGN = "bgn", kk.BHD = "bhd", kk.BIF = "bif", kk.BMD = "bmd", kk.BND = "bnd", kk.BOB = "bob", kk.BOV = "bov", kk.BRL = "brl", kk.BSD = "bsd", kk.BTN = "btn", kk.BWP = "bwp", kk.BYN = "byn", kk.BYR = "byr", kk.BZD = "bzd", kk.CAD = "cad", kk.CDF = "cdf", kk.CHE = "che", kk.CHF = "chf", kk.CHW = "chw", kk.CLF = "clf", kk.CLP = "clp", kk.CNY = "cny", kk.COP = "cop", kk.COU = "cou", kk.CRC = "crc", kk.CUC = "cuc", kk.CUP = "cup", kk.CVE = "cve", kk.CZK = "czk", kk.DJF = "djf", kk.DKK = "dkk", kk.DOP = "dop", kk.DZD = "dzd", kk.EGP = "egp", kk.ERN = "ern", kk.ETB = "etb", kk.EUR = "eur", kk.FJD = "fjd", kk.FKP = "fkp", kk.GBP = "gbp", kk.GEL = "gel", kk.GHS = "ghs", kk.GIP = "gip", kk.GMD = "gmd", kk.GNF = "gnf", kk.GTQ = "gtq", kk.GYD = "gyd", kk.HKD = "hkd", kk.HNL = "hnl", kk.HRK = "hrk", kk.HTG = "htg", kk.HUF = "huf", kk.IDR = "idr", kk.ILS = "ils", kk.INR = "inr", kk.IQD = "iqd", kk.IRR = "irr", kk.ISK = "isk", kk.JMD = "jmd", kk.JOD = "jod", kk.JPY = "jpy", kk.KES = "kes", kk.KGS = "kgs", kk.KHR = "khr", kk.KMF = "kmf", kk.KPW = "kpw", kk.KRW = "krw", kk.KWD = "kwd", kk.KYD = "kyd", kk.KZT = "kzt", kk.LAK = "lak", kk.LBP = "lbp", kk.LKR = "lkr", kk.LRD = "lrd", kk.LSL = "lsl", kk.LTL = "ltl", kk.LVL = "lvl", kk.LYD = "lyd", kk.MAD = "mad", kk.MDL = "mdl", kk.MGA = "mga", kk.MKD = "mkd", kk.MMK = "mmk", kk.MNT = "mnt", kk.MOP = "mop", kk.MRO = "mro", kk.MUR = "mur", kk.MVR = "mvr", kk.MWK = "mwk", kk.MXN = "mxn", kk.MXV = "mxv", kk.MYR = "myr", kk.MZN = "mzn", kk.NAD = "nad", kk.NGN = "ngn", kk.NIO = "nio", kk.NOK = "nok", kk.NPR = "npr", kk.NZD = "nzd", kk.OMR = "omr", kk.PAB = "pab", kk.PEN = "pen", kk.PGK = "pgk", kk.PHP = "php", kk.PKR = "pkr", kk.PLN = "pln", kk.PYG = "pyg", kk.QAR = "qar", kk.RON = "ron", kk.RSD = "rsd", kk.RUB = "rub", kk.RWF = "rwf", kk.SAR = "sar", kk.SBD = "sbd", kk.SCR = "scr", kk.SDG = "sdg", kk.SEK = "sek", kk.SGD = "sgd", kk.SHP = "shp", kk.SLL = "sll", kk.SOS = "sos", kk.SRD = "srd", kk.SSP = "ssp", kk.STD = "std", kk.SVC = "svc", kk.SYP = "syp", kk.SZL = "szl", kk.THB = "thb", kk.TJS = "tjs", kk.TMT = "tmt", kk.TND = "tnd", kk.TOP = "top", kk.TRY = "try", kk.TTD = "ttd", kk.TWD = "twd", kk.TZS = "tzs", kk.UAH = "uah", kk.UGX = "ugx", kk.USD = "usd", kk.USN = "usn", kk.USS = "uss", kk.UYI = "uyi", kk.UYU = "uyu", kk.UZS = "uzs", kk.VEF = "vef", kk.VND = "vnd", kk.VUV = "vuv", kk.WST = "wst", kk.XAF = "xaf", kk.XAG = "xag", kk.XAU = "xau", kk.XBA = "xba", kk.XBB = "xbb", kk.XBC = "xbc", kk.XBD = "xbd", kk.XCD = "xcd", kk.XDR = "xdr", kk.XFU = "xfu", kk.XOF = "xof", kk.XPD = "xpd", kk.XPF = "xpf", kk.XPT = "xpt", kk.XSU = "xsu", kk.XTS = "xts", kk.XUA = "xua", kk.YER = "yer", kk.ZAR = "zar", kk.ZMW = "zmw", kk.ZWL = "zwl"
    }(tS || (tS = {}));
    tS.AED, tS.AFN, tS.ALL, tS.AMD, tS.ANG, tS.AOA, tS.ARS, tS.AUD, tS.AWG, tS.AZN, tS.BAM, tS.BBD, tS.BDT, tS.BGN, tS.BHD, tS.BIF, tS.BMD, tS.BND, tS.BOB, tS.BOV, tS.BRL, tS.BSD, tS.BTN, tS.BWP, tS.BYR, tS.BYN, tS.BZD, tS.CAD, tS.CDF, tS.CHE, tS.CHF, tS.CHW, tS.CLF, tS.CLP, tS.CNY, tS.COP, tS.COU, tS.CRC, tS.CUC, tS.CUP, tS.CVE, tS.CZK, tS.DJF, tS.DKK, tS.DOP, tS.DZD, tS.EGP, tS.ERN, tS.ETB, tS.EUR, tS.FJD, tS.FKP, tS.GBP, tS.GEL, tS.GHS, tS.GIP, tS.GMD, tS.GNF, tS.GTQ, tS.GYD, tS.HKD, tS.HNL, tS.HRK, tS.HTG, tS.HUF, tS.IDR, tS.ILS, tS.INR, tS.IQD, tS.IRR, tS.ISK, tS.JMD, tS.JOD, tS.JPY, tS.KES, tS.KGS, tS.KHR, tS.KMF, tS.KPW, tS.KRW, tS.KWD, tS.KYD, tS.KZT, tS.LAK, tS.LBP, tS.LKR, tS.LRD, tS.LSL, tS.LTL, tS.LVL, tS.LYD, tS.MAD, tS.MDL, tS.MGA, tS.MKD, tS.MMK, tS.MNT, tS.MOP, tS.MRO, tS.MUR, tS.MVR, tS.MWK, tS.MXN, tS.MXV, tS.MYR, tS.MZN, tS.NAD, tS.NGN, tS.NIO, tS.NOK, tS.NPR, tS.NZD, tS.OMR, tS.PAB, tS.PEN, tS.PGK, tS.PHP, tS.PKR, tS.PLN, tS.PYG, tS.QAR, tS.RON, tS.RSD, tS.RUB, tS.RWF, tS.SAR, tS.SBD, tS.SCR, tS.SDG, tS.SEK, tS.SGD, tS.SHP, tS.SLL, tS.SOS, tS.SRD, tS.SSP, tS.STD, tS.SVC, tS.SYP, tS.SZL, tS.THB, tS.TJS, tS.TMT, tS.TND, tS.TOP, tS.TRY, tS.TTD, tS.TWD, tS.TZS, tS.UAH, tS.UGX, tS.USD, tS.USN, tS.USS, tS.UYI, tS.UYU, tS.UZS, tS.VEF, tS.VND, tS.VUV, tS.WST, tS.XAF, tS.XAG, tS.XAU, tS.XBA, tS.XBB, tS.XBC, tS.XBD, tS.XCD, tS.XDR, tS.XFU, tS.XOF, tS.XPD, tS.XPF, tS.XPT, tS.XSU, tS.XTS, tS.XUA, tS.YER, tS.ZAR, tS.ZMW, tS.ZWL;
    var XS = {
      exports: {}
    };
    ! function(kk, ek) {
      var ik = "__lodash_hash_undefined__",
        Dk = 9007199254740991,
        Sk = "[object Arguments]",
        bk = "[object Array]",
        rk = "[object Boolean]",
        Pk = "[object Date]",
        mk = "[object Error]",
        Mk = "[object Function]",
        Kk = "[object Map]",
        xk = "[object Number]",
        nk = "[object Object]",
        Uk = "[object Promise]",
        Hk = "[object RegExp]",
        wk = "[object Set]",
        lk = "[object String]",
        pk = "[object Symbol]",
        yk = "[object WeakMap]",
        Yk = "[object ArrayBuffer]",
        Lk = "[object DataView]",
        Ck = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ak = /^\w*$/,
        jk = /^\./,
        sk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        dk = /\\(\\)?/g,
        Vk = /^\[object .+?Constructor\]$/,
        Fk = /^(?:0|[1-9]\d*)$/,
        uk = {};
      uk["[object Float32Array]"] = uk["[object Float64Array]"] = uk["[object Int8Array]"] = uk["[object Int16Array]"] = uk["[object Int32Array]"] = uk["[object Uint8Array]"] = uk["[object Uint8ClampedArray]"] = uk["[object Uint16Array]"] = uk["[object Uint32Array]"] = !0, uk[Sk] = uk[bk] = uk[Yk] = uk[rk] = uk[Lk] = uk[Pk] = uk[mk] = uk[Mk] = uk[Kk] = uk[xk] = uk[nk] = uk[Hk] = uk[wk] = uk[lk] = uk[yk] = !1;
      var qk = "object" == typeof fk && fk && fk.Object === Object && fk,
        Ik = "object" == typeof self && self && self.Object === Object && self,
        zk = qk || Ik || Function("return this")(),
        Qk = ek && !ek.nodeType && ek,
        vk = Qk && kk && !kk.nodeType && kk,
        Ek = vk && vk.exports === Qk && qk.process,
        hk = function() {
          try {
            return Ek && Ek.binding("util")
          } catch (kk) {}
        }(),
        ak = hk && hk.isTypedArray;

      function Wk(kk, ek) {
        for (var ik = -1, Dk = kk ? kk.length : 0; ++ik < Dk && !1 !== ek(kk[ik], ik, kk););
        return kk
      }

      function tk(kk, ek) {
        for (var ik = -1, Dk = kk ? kk.length : 0; ++ik < Dk;)
          if (ek(kk[ik], ik, kk)) return !0;
        return !1
      }

      function Xk(kk) {
        var ek = !1;
        if (null != kk && "function" != typeof kk.toString) try {
          ek = !!(kk + "")
        } catch (ik) {}
        return ek
      }

      function Bk(kk) {
        var ek = -1,
          ik = Array(kk.size);
        return kk.forEach((function(kk, Dk) {
          ik[++ek] = [Dk, kk]
        })), ik
      }

      function ck(kk, ek) {
        return function(ik) {
          return kk(ek(ik))
        }
      }

      function Tk(kk) {
        var ek = -1,
          ik = Array(kk.size);
        return kk.forEach((function(kk) {
          ik[++ek] = kk
        })), ik
      }
      var Zk = Array.prototype,
        Ok = Function.prototype,
        gk = Object.prototype,
        Gk = zk["__core-js_shared__"],
        Nk = function() {
          var kk = /[^.]+$/.exec(Gk && Gk.keys && Gk.keys.IE_PROTO || "");
          return kk ? "Symbol(src)_1." + kk : ""
        }(),
        Rk = Ok.toString,
        Jk = gk.hasOwnProperty,
        ke = gk.toString,
        ee = RegExp("^" + Rk.call(Jk).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        ie = zk.Symbol,
        De = zk.Uint8Array,
        fe = ck(Object.getPrototypeOf, Object),
        Se = Object.create,
        be = gk.propertyIsEnumerable,
        re = Zk.splice,
        Pe = ck(Object.keys, Object),
        me = ce(zk, "DataView"),
        Me = ce(zk, "Map"),
        Ke = ce(zk, "Promise"),
        xe = ce(zk, "Set"),
        ne = ce(zk, "WeakMap"),
        Ue = ce(Object, "create"),
        He = Re(me),
        we = Re(Me),
        le = Re(Ke),
        pe = Re(xe),
        ye = Re(ne),
        Ye = ie ? ie.prototype : void 0,
        Le = Ye ? Ye.valueOf : void 0,
        Ce = Ye ? Ye.toString : void 0;

      function Ae(kk) {
        var ek = -1,
          ik = kk ? kk.length : 0;
        for (this.clear(); ++ek < ik;) {
          var Dk = kk[ek];
          this.set(Dk[0], Dk[1])
        }
      }

      function je(kk) {
        var ek = -1,
          ik = kk ? kk.length : 0;
        for (this.clear(); ++ek < ik;) {
          var Dk = kk[ek];
          this.set(Dk[0], Dk[1])
        }
      }

      function se(kk) {
        var ek = -1,
          ik = kk ? kk.length : 0;
        for (this.clear(); ++ek < ik;) {
          var Dk = kk[ek];
          this.set(Dk[0], Dk[1])
        }
      }

      function de(kk) {
        var ek = -1,
          ik = kk ? kk.length : 0;
        for (this.__data__ = new se; ++ek < ik;) this.add(kk[ek])
      }

      function Ve(kk) {
        this.__data__ = new je(kk)
      }

      function Fe(kk, ek) {
        var ik = ii(kk) || ei(kk) ? function(kk, ek) {
            for (var ik = -1, Dk = Array(kk); ++ik < kk;) Dk[ik] = ek(ik);
            return Dk
          }(kk.length, String) : [],
          Dk = ik.length,
          fk = !!Dk;
        for (var Sk in kk) !ek && !Jk.call(kk, Sk) || fk && ("length" == Sk || oe(Sk, Dk)) || ik.push(Sk);
        return ik
      }

      function ue(kk, ek) {
        for (var ik = kk.length; ik--;)
          if (ki(kk[ik][0], ek)) return ik;
        return -1
      }
      Ae.prototype.clear = function() {
        this.__data__ = Ue ? Ue(null) : {}
      }, Ae.prototype.delete = function(kk) {
        return this.has(kk) && delete this.__data__[kk]
      }, Ae.prototype.get = function(kk) {
        var ek = this.__data__;
        if (Ue) {
          var Dk = ek[kk];
          return Dk === ik ? void 0 : Dk
        }
        return Jk.call(ek, kk) ? ek[kk] : void 0
      }, Ae.prototype.has = function(kk) {
        var ek = this.__data__;
        return Ue ? void 0 !== ek[kk] : Jk.call(ek, kk)
      }, Ae.prototype.set = function(kk, ek) {
        return this.__data__[kk] = Ue && void 0 === ek ? ik : ek, this
      }, je.prototype.clear = function() {
        this.__data__ = []
      }, je.prototype.delete = function(kk) {
        var ek = this.__data__,
          ik = ue(ek, kk);
        return !(ik < 0) && (ik == ek.length - 1 ? ek.pop() : re.call(ek, ik, 1), !0)
      }, je.prototype.get = function(kk) {
        var ek = this.__data__,
          ik = ue(ek, kk);
        return ik < 0 ? void 0 : ek[ik][1]
      }, je.prototype.has = function(kk) {
        return ue(this.__data__, kk) > -1
      }, je.prototype.set = function(kk, ek) {
        var ik = this.__data__,
          Dk = ue(ik, kk);
        return Dk < 0 ? ik.push([kk, ek]) : ik[Dk][1] = ek, this
      }, se.prototype.clear = function() {
        this.__data__ = {
          hash: new Ae,
          map: new(Me || je),
          string: new Ae
        }
      }, se.prototype.delete = function(kk) {
        return Be(this, kk).delete(kk)
      }, se.prototype.get = function(kk) {
        return Be(this, kk).get(kk)
      }, se.prototype.has = function(kk) {
        return Be(this, kk).has(kk)
      }, se.prototype.set = function(kk, ek) {
        return Be(this, kk).set(kk, ek), this
      }, de.prototype.add = de.prototype.push = function(kk) {
        return this.__data__.set(kk, ik), this
      }, de.prototype.has = function(kk) {
        return this.__data__.has(kk)
      }, Ve.prototype.clear = function() {
        this.__data__ = new je
      }, Ve.prototype.delete = function(kk) {
        return this.__data__.delete(kk)
      }, Ve.prototype.get = function(kk) {
        return this.__data__.get(kk)
      }, Ve.prototype.has = function(kk) {
        return this.__data__.has(kk)
      }, Ve.prototype.set = function(kk, ek) {
        var ik = this.__data__;
        if (ik instanceof je) {
          var Dk = ik.__data__;
          if (!Me || Dk.length < 199) return Dk.push([kk, ek]), this;
          ik = this.__data__ = new se(Dk)
        }
        return ik.set(kk, ek), this
      };
      var qe, Ie = function(kk, ek, ik) {
        for (var Dk = -1, fk = Object(kk), Sk = ik(kk), bk = Sk.length; bk--;) {
          var rk = Sk[qe ? bk : ++Dk];
          if (!1 === ek(fk[rk], rk, fk)) break
        }
        return kk
      };

      function ze(kk, ek) {
        return kk && Ie(kk, ek, Ki)
      }

      function Qe(kk, ek) {
        for (var ik = 0, Dk = (ek = Ze(ek, kk) ? [ek] : te(ek)).length; null != kk && ik < Dk;) kk = kk[Ne(ek[ik++])];
        return ik && ik == Dk ? kk : void 0
      }

      function ve(kk, ek) {
        return null != kk && ek in Object(kk)
      }

      function Ee(kk, ek, ik, Dk, fk) {
        return kk === ek || (null == kk || null == ek || !bi(kk) && !ri(ek) ? kk !== kk && ek !== ek : function(kk, ek, ik, Dk, fk, Mk) {
          var Uk = ii(kk),
            yk = ii(ek),
            Ck = bk,
            Ak = bk;
          Uk || (Ck = (Ck = Te(kk)) == Sk ? nk : Ck);
          yk || (Ak = (Ak = Te(ek)) == Sk ? nk : Ak);
          var jk = Ck == nk && !Xk(kk),
            sk = Ak == nk && !Xk(ek),
            dk = Ck == Ak;
          if (dk && !jk) return Mk || (Mk = new Ve), Uk || Mi(kk) ? Xe(kk, ek, ik, Dk, fk, Mk) : function(kk, ek, ik, Dk, fk, Sk, bk) {
            switch (ik) {
              case Lk:
                if (kk.byteLength != ek.byteLength || kk.byteOffset != ek.byteOffset) return !1;
                kk = kk.buffer, ek = ek.buffer;
              case Yk:
                return !(kk.byteLength != ek.byteLength || !Dk(new De(kk), new De(ek)));
              case rk:
              case Pk:
              case xk:
                return ki(+kk, +ek);
              case mk:
                return kk.name == ek.name && kk.message == ek.message;
              case Hk:
              case lk:
                return kk == ek + "";
              case Kk:
                var Mk = Bk;
              case wk:
                var nk = 2 & Sk;
                if (Mk || (Mk = Tk), kk.size != ek.size && !nk) return !1;
                var Uk = bk.get(kk);
                if (Uk) return Uk == ek;
                Sk |= 1, bk.set(kk, ek);
                var yk = Xe(Mk(kk), Mk(ek), Dk, fk, Sk, bk);
                return bk.delete(kk), yk;
              case pk:
                if (Le) return Le.call(kk) == Le.call(ek)
            }
            return !1
          }(kk, ek, Ck, ik, Dk, fk, Mk);
          if (!(2 & fk)) {
            var Vk = jk && Jk.call(kk, "__wrapped__"),
              Fk = sk && Jk.call(ek, "__wrapped__");
            if (Vk || Fk) {
              var uk = Vk ? kk.value() : kk,
                qk = Fk ? ek.value() : ek;
              return Mk || (Mk = new Ve), ik(uk, qk, Dk, fk, Mk)
            }
          }
          if (!dk) return !1;
          return Mk || (Mk = new Ve),
            function(kk, ek, ik, Dk, fk, Sk) {
              var bk = 2 & fk,
                rk = Ki(kk),
                Pk = rk.length,
                mk = Ki(ek),
                Mk = mk.length;
              if (Pk != Mk && !bk) return !1;
              var Kk = Pk;
              for (; Kk--;) {
                var xk = rk[Kk];
                if (!(bk ? xk in ek : Jk.call(ek, xk))) return !1
              }
              var nk = Sk.get(kk);
              if (nk && Sk.get(ek)) return nk == ek;
              var Uk = !0;
              Sk.set(kk, ek), Sk.set(ek, kk);
              var Hk = bk;
              for (; ++Kk < Pk;) {
                var wk = kk[xk = rk[Kk]],
                  lk = ek[xk];
                if (Dk) var pk = bk ? Dk(lk, wk, xk, ek, kk, Sk) : Dk(wk, lk, xk, kk, ek, Sk);
                if (!(void 0 === pk ? wk === lk || ik(wk, lk, Dk, fk, Sk) : pk)) {
                  Uk = !1;
                  break
                }
                Hk || (Hk = "constructor" == xk)
              }
              if (Uk && !Hk) {
                var yk = kk.constructor,
                  Yk = ek.constructor;
                yk == Yk || !("constructor" in kk) || !("constructor" in ek) || "function" == typeof yk && yk instanceof yk && "function" == typeof Yk && Yk instanceof Yk || (Uk = !1)
              }
              return Sk.delete(kk), Sk.delete(ek), Uk
            }(kk, ek, ik, Dk, fk, Mk)
        }(kk, ek, Ee, ik, Dk, fk))
      }

      function he(kk) {
        return !(!bi(kk) || (ek = kk, Nk && Nk in ek)) && (fi(kk) || Xk(kk) ? ee : Vk).test(Re(kk));
        var ek
      }

      function ae(kk) {
        return "function" == typeof kk ? kk : null == kk ? xi : "object" == typeof kk ? ii(kk) ? function(kk, ek) {
          if (Ze(kk) && Oe(ek)) return ge(Ne(kk), ek);
          return function(ik) {
            var Dk = function(kk, ek, ik) {
              var Dk = null == kk ? void 0 : Qe(kk, ek);
              return void 0 === Dk ? ik : Dk
            }(ik, kk);
            return void 0 === Dk && Dk === ek ? function(kk, ek) {
              return null != kk && function(kk, ek, ik) {
                ek = Ze(ek, kk) ? [ek] : te(ek);
                var Dk, fk = -1,
                  Sk = ek.length;
                for (; ++fk < Sk;) {
                  var bk = Ne(ek[fk]);
                  if (!(Dk = null != kk && ik(kk, bk))) break;
                  kk = kk[bk]
                }
                if (Dk) return Dk;
                Sk = kk ? kk.length : 0;
                return !!Sk && Si(Sk) && oe(bk, Sk) && (ii(kk) || ei(kk))
              }(kk, ek, ve)
            }(ik, kk) : Ee(ek, Dk, void 0, 3)
          }
        }(kk[0], kk[1]) : function(kk) {
          var ek = function(kk) {
            var ek = Ki(kk),
              ik = ek.length;
            for (; ik--;) {
              var Dk = ek[ik],
                fk = kk[Dk];
              ek[ik] = [Dk, fk, Oe(fk)]
            }
            return ek
          }(kk);
          if (1 == ek.length && ek[0][2]) return ge(ek[0][0], ek[0][1]);
          return function(ik) {
            return ik === kk || function(kk, ek, ik, Dk) {
              var fk = ik.length,
                Sk = fk,
                bk = !Dk;
              if (null == kk) return !Sk;
              for (kk = Object(kk); fk--;) {
                var rk = ik[fk];
                if (bk && rk[2] ? rk[1] !== kk[rk[0]] : !(rk[0] in kk)) return !1
              }
              for (; ++fk < Sk;) {
                var Pk = (rk = ik[fk])[0],
                  mk = kk[Pk],
                  Mk = rk[1];
                if (bk && rk[2]) {
                  if (void 0 === mk && !(Pk in kk)) return !1
                } else {
                  var Kk = new Ve;
                  if (Dk) var xk = Dk(mk, Mk, Pk, kk, ek, Kk);
                  if (!(void 0 === xk ? Ee(Mk, mk, Dk, 3, Kk) : xk)) return !1
                }
              }
              return !0
            }(ik, kk, ek)
          }
        }(kk) : function(kk) {
          return Ze(kk) ? (ek = Ne(kk), function(kk) {
            return null == kk ? void 0 : kk[ek]
          }) : function(kk) {
            return function(ek) {
              return Qe(ek, kk)
            }
          }(kk);
          var ek
        }(kk)
      }

      function We(kk) {
        if (! function(kk) {
            var ek = kk && kk.constructor,
              ik = "function" == typeof ek && ek.prototype || gk;
            return kk === ik
          }(kk)) return Pe(kk);
        var ek = [];
        for (var ik in Object(kk)) Jk.call(kk, ik) && "constructor" != ik && ek.push(ik);
        return ek
      }

      function te(kk) {
        return ii(kk) ? kk : Ge(kk)
      }

      function Xe(kk, ek, ik, Dk, fk, Sk) {
        var bk = 2 & fk,
          rk = kk.length,
          Pk = ek.length;
        if (rk != Pk && !(bk && Pk > rk)) return !1;
        var mk = Sk.get(kk);
        if (mk && Sk.get(ek)) return mk == ek;
        var Mk = -1,
          Kk = !0,
          xk = 1 & fk ? new de : void 0;
        for (Sk.set(kk, ek), Sk.set(ek, kk); ++Mk < rk;) {
          var nk = kk[Mk],
            Uk = ek[Mk];
          if (Dk) var Hk = bk ? Dk(Uk, nk, Mk, ek, kk, Sk) : Dk(nk, Uk, Mk, kk, ek, Sk);
          if (void 0 !== Hk) {
            if (Hk) continue;
            Kk = !1;
            break
          }
          if (xk) {
            if (!tk(ek, (function(kk, ek) {
                if (!xk.has(ek) && (nk === kk || ik(nk, kk, Dk, fk, Sk))) return xk.add(ek)
              }))) {
              Kk = !1;
              break
            }
          } else if (nk !== Uk && !ik(nk, Uk, Dk, fk, Sk)) {
            Kk = !1;
            break
          }
        }
        return Sk.delete(kk), Sk.delete(ek), Kk
      }

      function Be(kk, ek) {
        var ik = kk.__data__;
        return function(kk) {
          var ek = typeof kk;
          return "string" == ek || "number" == ek || "symbol" == ek || "boolean" == ek ? "__proto__" !== kk : null === kk
        }(ek) ? ik["string" == typeof ek ? "string" : "hash"] : ik.map
      }

      function ce(kk, ek) {
        var ik = function(kk, ek) {
          return null == kk ? void 0 : kk[ek]
        }(kk, ek);
        return he(ik) ? ik : void 0
      }
      var Te = function(kk) {
        return ke.call(kk)
      };

      function oe(kk, ek) {
        return !!(ek = null == ek ? Dk : ek) && ("number" == typeof kk || Fk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < ek
      }

      function Ze(kk, ek) {
        if (ii(kk)) return !1;
        var ik = typeof kk;
        return !("number" != ik && "symbol" != ik && "boolean" != ik && null != kk && !Pi(kk)) || (Ak.test(kk) || !Ck.test(kk) || null != ek && kk in Object(ek))
      }

      function Oe(kk) {
        return kk === kk && !bi(kk)
      }

      function ge(kk, ek) {
        return function(ik) {
          return null != ik && (ik[kk] === ek && (void 0 !== ek || kk in Object(ik)))
        }
      }(me && Te(new me(new ArrayBuffer(1))) != Lk || Me && Te(new Me) != Kk || Ke && Te(Ke.resolve()) != Uk || xe && Te(new xe) != wk || ne && Te(new ne) != yk) && (Te = function(kk) {
        var ek = ke.call(kk),
          ik = ek == nk ? kk.constructor : void 0,
          Dk = ik ? Re(ik) : void 0;
        if (Dk) switch (Dk) {
          case He:
            return Lk;
          case we:
            return Kk;
          case le:
            return Uk;
          case pe:
            return wk;
          case ye:
            return yk
        }
        return ek
      });
      var Ge = Je((function(kk) {
        var ek;
        kk = null == (ek = kk) ? "" : function(kk) {
          if ("string" == typeof kk) return kk;
          if (Pi(kk)) return Ce ? Ce.call(kk) : "";
          var ek = kk + "";
          return "0" == ek && 1 / kk == -1 / 0 ? "-0" : ek
        }(ek);
        var ik = [];
        return jk.test(kk) && ik.push(""), kk.replace(sk, (function(kk, ek, Dk, fk) {
          ik.push(Dk ? fk.replace(dk, "$1") : ek || kk)
        })), ik
      }));

      function Ne(kk) {
        if ("string" == typeof kk || Pi(kk)) return kk;
        var ek = kk + "";
        return "0" == ek && 1 / kk == -1 / 0 ? "-0" : ek
      }

      function Re(kk) {
        if (null != kk) {
          try {
            return Rk.call(kk)
          } catch (ek) {}
          try {
            return kk + ""
          } catch (ek) {}
        }
        return ""
      }

      function Je(kk, ek) {
        if ("function" != typeof kk || ek && "function" != typeof ek) throw new TypeError("Expected a function");
        var ik = function() {
          var Dk = arguments,
            fk = ek ? ek.apply(this, Dk) : Dk[0],
            Sk = ik.cache;
          if (Sk.has(fk)) return Sk.get(fk);
          var bk = kk.apply(this, Dk);
          return ik.cache = Sk.set(fk, bk), bk
        };
        return ik.cache = new(Je.Cache || se), ik
      }

      function ki(kk, ek) {
        return kk === ek || kk !== kk && ek !== ek
      }

      function ei(kk) {
        return function(kk) {
          return ri(kk) && Di(kk)
        }(kk) && Jk.call(kk, "callee") && (!be.call(kk, "callee") || ke.call(kk) == Sk)
      }
      Je.Cache = se;
      var ii = Array.isArray;

      function Di(kk) {
        return null != kk && Si(kk.length) && !fi(kk)
      }

      function fi(kk) {
        var ek = bi(kk) ? ke.call(kk) : "";
        return ek == Mk || "[object GeneratorFunction]" == ek
      }

      function Si(kk) {
        return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= Dk
      }

      function bi(kk) {
        var ek = typeof kk;
        return !!kk && ("object" == ek || "function" == ek)
      }

      function ri(kk) {
        return !!kk && "object" == typeof kk
      }

      function Pi(kk) {
        return "symbol" == typeof kk || ri(kk) && ke.call(kk) == pk
      }
      var mi, Mi = ak ? (mi = ak, function(kk) {
        return mi(kk)
      }) : function(kk) {
        return ri(kk) && Si(kk.length) && !!uk[ke.call(kk)]
      };

      function Ki(kk) {
        return Di(kk) ? Fe(kk) : We(kk)
      }

      function xi(kk) {
        return kk
      }
      kk.exports = function(kk, ek, ik) {
        var Dk, fk = ii(kk) || Mi(kk);
        if (ek = ae(ek), null == ik)
          if (fk || bi(kk)) {
            var Sk = kk.constructor;
            ik = fk ? ii(kk) ? new Sk : [] : fi(Sk) ? bi(Dk = fe(kk)) ? Se(Dk) : {} : {}
          } else ik = {};
        return (fk ? Wk : ze)(kk, (function(kk, Dk, fk) {
          return ek(ik, kk, Dk, fk)
        })), ik
      }
    }(XS, XS.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: BS
    } = Dk
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);