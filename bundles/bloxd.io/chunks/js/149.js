export const id = 149;
export const ids = [149];
export const modules = {
  8232: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => YI,
      g: () => Tc
    });
    var Op = {};
    cp.r(Op), cp.d(Op, {
      b: () => SO,
      h: () => YO,
      f: () => LO,
      k: () => Kc,
      n: () => sc,
      r: () => XO,
      u: () => iO,
      v: () => JO,
      x: () => mO,
      y: () => QO,
      z: () => Vc,
      D: () => qO,
      F: () => EO,
      H: () => lO,
      M: () => pO,
      K: () => oO,
      Q: () => CO,
      S: () => MO
    });
    var op = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Ip(pp) {
      return pp && pp.__esModule && Object.prototype.hasOwnProperty.call(pp, "default") ? pp.default : pp
    }
    var Sp = {
      exports: {}
    };
    ! function(pp) {
      var ip = Object.prototype.hasOwnProperty,
        cp = "~";

      function Op() {}

      function op(pp, ip, cp) {
        this.Py = pp, this.context = ip, this.once = cp || !1
      }

      function Ip(pp, ip, Op, Ip, Sp) {
        if ("function" !== typeof Op) throw new TypeError("The listener must be a function");
        var xp = new op(Op, Ip || pp, Sp),
          Lp = cp ? cp + ip : ip;
        return pp._events[Lp] ? pp._events[Lp].Py ? pp._events[Lp] = [pp._events[Lp], xp] : pp._events[Lp].push(xp) : (pp._events[Lp] = xp, pp._eventsCount++), pp
      }

      function Sp(pp, ip) {
        0 === --pp._eventsCount ? pp._events = new Op : delete pp._events[ip]
      }

      function xp() {
        this._events = new Op, this._eventsCount = 0
      }
      Object.create && (Op.prototype = Object.create(null), (new Op).__proto__ || (cp = !1)), xp.prototype.eventNames = function() {
        var pp, Op, op = [];
        if (0 === this._eventsCount) return op;
        for (Op in pp = this._events) ip.call(pp, Op) && op.push(cp ? Op.slice(1) : Op);
        return Object.getOwnPropertySymbols ? op.concat(Object.getOwnPropertySymbols(pp)) : op
      }, xp.prototype.listeners = function(pp) {
        var ip = cp ? cp + pp : pp,
          Op = this._events[ip];
        if (!Op) return [];
        if (Op.Py) return [Op.Py];
        for (var op = 0, Ip = Op.length, Sp = new Array(Ip); op < Ip; op++) Sp[op] = Op[op].Py;
        return Sp
      }, xp.prototype.listenerCount = function(pp) {
        var ip = cp ? cp + pp : pp,
          Op = this._events[ip];
        return Op ? Op.Py ? 1 : Op.length : 0
      }, xp.prototype.emit = function(pp, ip, Op, op, Ip, Sp) {
        var xp = cp ? cp + pp : pp;
        if (!this._events[xp]) return !1;
        var Lp, Yp, Dp = this._events[xp],
          Ap = arguments.length;
        if (Dp.Py) {
          switch (Dp.once && this.removeListener(pp, Dp.Py, void 0, !0), Ap) {
            case 1:
              return Dp.Py.call(Dp.context), !0;
            case 2:
              return Dp.Py.call(Dp.context, ip), !0;
            case 3:
              return Dp.Py.call(Dp.context, ip, Op), !0;
            case 4:
              return Dp.Py.call(Dp.context, ip, Op, op), !0;
            case 5:
              return Dp.Py.call(Dp.context, ip, Op, op, Ip), !0;
            case 6:
              return Dp.Py.call(Dp.context, ip, Op, op, Ip, Sp), !0
          }
          for (Yp = 1, Lp = new Array(Ap - 1); Yp < Ap; Yp++) Lp[Yp - 1] = arguments[Yp];
          Dp.Py.apply(Dp.context, Lp)
        } else {
          var Pp, Wp = Dp.length;
          for (Yp = 0; Yp < Wp; Yp++) switch (Dp[Yp].once && this.removeListener(pp, Dp[Yp].Py, void 0, !0), Ap) {
            case 1:
              Dp[Yp].Py.call(Dp[Yp].context);
              break;
            case 2:
              Dp[Yp].Py.call(Dp[Yp].context, ip);
              break;
            case 3:
              Dp[Yp].Py.call(Dp[Yp].context, ip, Op);
              break;
            case 4:
              Dp[Yp].Py.call(Dp[Yp].context, ip, Op, op);
              break;
            default:
              if (!Lp)
                for (Pp = 1, Lp = new Array(Ap - 1); Pp < Ap; Pp++) Lp[Pp - 1] = arguments[Pp];
              Dp[Yp].Py.apply(Dp[Yp].context, Lp)
          }
        }
        return !0
      }, xp.prototype.on = function(pp, ip, cp) {
        return Ip(this, pp, ip, cp, !1)
      }, xp.prototype.once = function(pp, ip, cp) {
        return Ip(this, pp, ip, cp, !0)
      }, xp.prototype.removeListener = function(pp, ip, Op, op) {
        var Ip = cp ? cp + pp : pp;
        if (!this._events[Ip]) return this;
        if (!ip) return Sp(this, Ip), this;
        var xp = this._events[Ip];
        if (xp.Py) xp.Py !== ip || op && !xp.once || Op && xp.context !== Op || Sp(this, Ip);
        else {
          for (var Lp = 0, Yp = [], Dp = xp.length; Lp < Dp; Lp++)(xp[Lp].Py !== ip || op && !xp[Lp].once || Op && xp[Lp].context !== Op) && Yp.push(xp[Lp]);
          Yp.length ? this._events[Ip] = 1 === Yp.length ? Yp[0] : Yp : Sp(this, Ip)
        }
        return this
      }, xp.prototype.YH = function(pp) {
        var ip;
        return pp ? (ip = cp ? cp + pp : pp, this._events[ip] && Sp(this, ip)) : (this._events = new Op, this._eventsCount = 0), this
      }, xp.prototype.off = xp.prototype.removeListener, xp.prototype.addListener = xp.prototype.on, xp.prefixed = cp, xp.EventEmitter = xp, pp.exports = xp
    }(Sp);
    var xp, Lp, Yp = Ip(Sp.exports);
    ! function(pp) {
      pp.assertEqual = pp => pp, pp.assertIs = function(pp) {}, pp.assertNever = function(pp) {
        throw new Error
      }, pp.arrayToEnum = pp => {
        const ip = {};
        for (const cp of pp) ip[cp] = cp;
        return ip
      }, pp.getValidEnumValues = ip => {
        const cp = pp.objectKeys(ip).filter((pp => "number" !== typeof ip[ip[pp]])),
          Op = {};
        for (const pp of cp) Op[pp] = ip[pp];
        return pp.objectValues(Op)
      }, pp.objectValues = ip => pp.objectKeys(ip).map((function(pp) {
        return ip[pp]
      })), pp.objectKeys = "function" === typeof Object.keys ? pp => Object.keys(pp) : pp => {
        const ip = [];
        for (const cp in pp) Object.prototype.hasOwnProperty.call(pp, cp) && ip.push(cp);
        return ip
      }, pp.find = (pp, ip) => {
        for (const cp of pp)
          if (ip(cp)) return cp
      }, pp.isInteger = "function" === typeof Number.isInteger ? pp => Number.isInteger(pp) : pp => "number" === typeof pp && isFinite(pp) && Math.floor(pp) === pp, pp.joinValues = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return pp.map((pp => "string" === typeof pp ? `'${pp}'` : pp)).join(ip)
      }, pp.jsonStringifyReplacer = (pp, ip) => "bigint" === typeof ip ? ip.toString() : ip
    }(xp || (xp = {})),
    function(pp) {
      pp.mergeShapes = (pp, ip) => ({
        ...pp,
        ...ip
      })
    }(Lp || (Lp = {}));
    const Dp = xp.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Ap = pp => {
        switch (typeof pp) {
          case "undefined":
            return Dp.undefined;
          case "string":
            return Dp.string;
          case "number":
            return isNaN(pp) ? Dp.nan : Dp.number;
          case "boolean":
            return Dp.boolean;
          case "function":
            return Dp.function;
          case "bigint":
            return Dp.bigint;
          case "symbol":
            return Dp.symbol;
          case "object":
            return Array.isArray(pp) ? Dp.array : null === pp ? Dp.null : pp.then && "function" === typeof pp.then && pp.catch && "function" === typeof pp.catch ? Dp.promise : "undefined" !== typeof Map && pp instanceof Map ? Dp.map : "undefined" !== typeof Set && pp instanceof Set ? Dp.set : "undefined" !== typeof Date && pp instanceof Date ? Dp.date : Dp.object;
          default:
            return Dp.unknown
        }
      },
      Pp = xp.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Wp extends Error {
      constructor(pp) {
        var ip;
        super(), ip = this, this.issues = [], this.addIssue = pp => {
          this.issues = [...this.issues, pp]
        }, this.addIssues = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          ip.issues = [...ip.issues, ...pp]
        };
        const cp = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, cp) : this.__proto__ = cp, this.name = "ZodError", this.issues = pp
      }
      get errors() {
        return this.issues
      }
      format(pp) {
        const ip = pp || function(pp) {
            return pp.message
          },
          cp = {
            _errors: []
          },
          Op = pp => {
            for (const op of pp.issues)
              if ("invalid_union" === op.code) op.unionErrors.map(Op);
              else if ("invalid_return_type" === op.code) Op(op.returnTypeError);
            else if ("invalid_arguments" === op.code) Op(op.argumentsError);
            else if (0 === op.path.length) cp._errors.push(ip(op));
            else {
              let pp = cp,
                Op = 0;
              for (; Op < op.path.length;) {
                const cp = op.path[Op];
                Op === op.path.length - 1 ? (pp[cp] = pp[cp] || {
                  _errors: []
                }, pp[cp]._errors.push(ip(op))) : pp[cp] = pp[cp] || {
                  _errors: []
                }, pp = pp[cp], Op++
              }
            }
          };
        return Op(this), cp
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, xp.jsonStringifyReplacer, 2)
      }
      get wy() {
        return 0 === this.issues.length
      }
      flatten() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pp => pp.message;
        const ip = {},
          cp = [];
        for (const Op of this.issues) Op.path.length > 0 ? (ip[Op.path[0]] = ip[Op.path[0]] || [], ip[Op.path[0]].push(pp(Op))) : cp.push(pp(Op));
        return {
          formErrors: cp,
          fieldErrors: ip
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Wp.create = pp => new Wp(pp);
    const yp = (pp, ip) => {
      let cp;
      switch (pp.code) {
        case Pp.invalid_type:
          cp = pp.received === Dp.undefined ? "Required" : `Expected ${pp.expected}, received ${pp.received}`;
          break;
        case Pp.invalid_literal:
          cp = `Invalid literal value, expected ${JSON.stringify(pp.expected,xp.jsonStringifyReplacer)}`;
          break;
        case Pp.unrecognized_keys:
          cp = `Unrecognized key(s) in object: ${xp.joinValues(pp.keys,", ")}`;
          break;
        case Pp.invalid_union:
          cp = "Invalid input";
          break;
        case Pp.invalid_union_discriminator:
          cp = `Invalid discriminator value. Expected ${xp.joinValues(pp.options)}`;
          break;
        case Pp.invalid_enum_value:
          cp = `Invalid enum value. Expected ${xp.joinValues(pp.options)}, received '${pp.received}'`;
          break;
        case Pp.invalid_arguments:
          cp = "Invalid function arguments";
          break;
        case Pp.invalid_return_type:
          cp = "Invalid function return type";
          break;
        case Pp.invalid_date:
          cp = "Invalid date";
          break;
        case Pp.invalid_string:
          "object" === typeof pp.validation ? "includes" in pp.validation ? (cp = `Invalid input: must include "${pp.validation.includes}"`, "number" === typeof pp.validation.position && (cp = `${cp} at one or more positions greater than or equal to ${pp.validation.position}`)) : "startsWith" in pp.validation ? cp = `Invalid input: must start with "${pp.validation.startsWith}"` : "endsWith" in pp.validation ? cp = `Invalid input: must end with "${pp.validation.endsWith}"` : xp.assertNever(pp.validation) : cp = "regex" !== pp.validation ? `Invalid ${pp.validation}` : "Invalid";
          break;
        case Pp.too_small:
          cp = "array" === pp.type ? `Array must contain ${pp.exact?"exactly":pp.inclusive?"at least":"more than"} ${pp.minimum} element(s)` : "string" === pp.type ? `String must contain ${pp.exact?"exactly":pp.inclusive?"at least":"over"} ${pp.minimum} character(s)` : "number" === pp.type ? `Number must be ${pp.exact?"exactly equal to ":pp.inclusive?"greater than or equal to ":"greater than "}${pp.minimum}` : "date" === pp.type ? `Date must be ${pp.exact?"exactly equal to ":pp.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(pp.minimum))}` : "Invalid input";
          break;
        case Pp.too_big:
          cp = "array" === pp.type ? `Array must contain ${pp.exact?"exactly":pp.inclusive?"at most":"less than"} ${pp.maximum} element(s)` : "string" === pp.type ? `String must contain ${pp.exact?"exactly":pp.inclusive?"at most":"under"} ${pp.maximum} character(s)` : "number" === pp.type ? `Number must be ${pp.exact?"exactly":pp.inclusive?"less than or equal to":"less than"} ${pp.maximum}` : "bigint" === pp.type ? `BigInt must be ${pp.exact?"exactly":pp.inclusive?"less than or equal to":"less than"} ${pp.maximum}` : "date" === pp.type ? `Date must be ${pp.exact?"exactly":pp.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(pp.maximum))}` : "Invalid input";
          break;
        case Pp.custom:
          cp = "Invalid input";
          break;
        case Pp.invalid_intersection_types:
          cp = "Intersection results could not be merged";
          break;
        case Pp.not_multiple_of:
          cp = `Number must be a multiple of ${pp.multipleOf}`;
          break;
        case Pp.not_finite:
          cp = "Number must be finite";
          break;
        default:
          cp = ip.defaultError, xp.assertNever(pp)
      }
      return {
        message: cp
      }
    };
    let Up = yp;

    function wp() {
      return Up
    }
    const vp = pp => {
      const {
        data: ip,
        path: cp,
        errorMaps: Op,
        issueData: op
      } = pp, Ip = [...cp, ...op.path || []], Sp = {
        ...op,
        path: Ip
      };
      let xp = "";
      const Lp = Op.filter((pp => !!pp)).slice().reverse();
      for (const Yp of Lp) xp = Yp(Sp, {
        data: ip,
        defaultError: xp
      }).message;
      return {
        ...op,
        path: Ip,
        message: op.message || xp
      }
    };

    function tp(pp, ip) {
      const cp = vp({
        issueData: ip,
        data: pp.data,
        path: pp.path,
        errorMaps: [pp.common.contextualErrorMap, pp.schemaErrorMap, wp(), yp].filter((pp => !!pp))
      });
      pp.common.issues.push(cp)
    }
    class Hp {
      constructor() {
        this.value = "valid"
      }
      pU() {
        "valid" === this.value && (this.value = "pU")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(pp, ip) {
        const cp = [];
        for (const Op of ip) {
          if ("aborted" === Op.status) return dp;
          "pU" === Op.status && pp.pU(), cp.push(Op.value)
        }
        return {
          status: pp.value,
          value: cp
        }
      }
      static async mergeObjectAsync(pp, ip) {
        const cp = [];
        for (const Op of ip) cp.push({
          key: await Op.key,
          value: await Op.value
        });
        return Hp.mergeObjectSync(pp, cp)
      }
      static mergeObjectSync(pp, ip) {
        const cp = {};
        for (const Op of ip) {
          const {
            key: ip,
            value: op
          } = Op;
          if ("aborted" === ip.status) return dp;
          if ("aborted" === op.status) return dp;
          "pU" === ip.status && pp.pU(), "pU" === op.status && pp.pU(), "__proto__" === ip.value || "undefined" === typeof op.value && !Op.alwaysSet || (cp[ip.value] = op.value)
        }
        return {
          status: pp.value,
          value: cp
        }
      }
    }
    const dp = Object.freeze({
        status: "aborted"
      }),
      ep = pp => ({
        status: "pU",
        value: pp
      }),
      jp = pp => ({
        status: "valid",
        value: pp
      }),
      kp = pp => "aborted" === pp.status,
      mp = pp => "pU" === pp.status,
      Rp = pp => "valid" === pp.status,
      qp = pp => "undefined" !== typeof Promise && pp instanceof Promise;
    var Mp;
    ! function(pp) {
      pp.errToObj = pp => "string" === typeof pp ? {
        message: pp
      } : pp || {}, pp.toString = pp => "string" === typeof pp ? pp : null === pp || void 0 === pp ? void 0 : pp.message
    }(Mp || (Mp = {}));
    class Cp {
      constructor(pp, ip, cp, Op) {
        this._cachedPath = [], this.parent = pp, this.data = ip, this._path = cp, this._key = Op
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Ep = (pp, ip) => {
      if (Rp(ip)) return {
        success: !0,
        data: ip.value
      };
      if (!pp.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const ip = new Wp(pp.common.issues);
          return this._error = ip, this._error
        }
      }
    };

    function Xp(pp) {
      if (!pp) return {};
      const {
        errorMap: ip,
        invalid_type_error: cp,
        required_error: Op,
        description: op
      } = pp;
      if (ip && (cp || Op)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (ip) return {
        errorMap: ip,
        description: op
      };
      return {
        errorMap: (pp, ip) => "invalid_type" !== pp.code ? {
          message: ip.defaultError
        } : "undefined" === typeof ip.data ? {
          message: null !== Op && void 0 !== Op ? Op : ip.defaultError
        } : {
          message: null !== cp && void 0 !== cp ? cp : ip.defaultError
        },
        description: op
      }
    }
    class lp {
      constructor(pp) {
        this.spa = this.safeParseAsync, this._def = pp, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(pp) {
        return Ap(pp.data)
      }
      _getOrReturnCtx(pp, ip) {
        return ip || {
          common: pp.parent.common,
          data: pp.data,
          parsedType: Ap(pp.data),
          schemaErrorMap: this._def.errorMap,
          path: pp.path,
          parent: pp.parent
        }
      }
      _processInputParams(pp) {
        return {
          status: new Hp,
          ctx: {
            common: pp.parent.common,
            data: pp.data,
            parsedType: Ap(pp.data),
            schemaErrorMap: this._def.errorMap,
            path: pp.path,
            parent: pp.parent
          }
        }
      }
      _parseSync(pp) {
        const ip = this._parse(pp);
        if (qp(ip)) throw new Error("Synchronous parse encountered promise.");
        return ip
      }
      _parseAsync(pp) {
        const ip = this._parse(pp);
        return Promise.resolve(ip)
      }
      parse(pp, ip) {
        const cp = this.safeParse(pp, ip);
        if (cp.success) return cp.data;
        throw cp.error
      }
      safeParse(pp, ip) {
        var cp;
        const Op = {
            common: {
              issues: [],
              async: null !== (cp = null === ip || void 0 === ip ? void 0 : ip.async) && void 0 !== cp && cp,
              contextualErrorMap: null === ip || void 0 === ip ? void 0 : ip.errorMap
            },
            path: (null === ip || void 0 === ip ? void 0 : ip.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: pp,
            parsedType: Ap(pp)
          },
          op = this._parseSync({
            data: pp,
            path: Op.path,
            parent: Op
          });
        return Ep(Op, op)
      }
      async parseAsync(pp, ip) {
        const cp = await this.safeParseAsync(pp, ip);
        if (cp.success) return cp.data;
        throw cp.error
      }
      async safeParseAsync(pp, ip) {
        const cp = {
            common: {
              issues: [],
              contextualErrorMap: null === ip || void 0 === ip ? void 0 : ip.errorMap,
              async: !0
            },
            path: (null === ip || void 0 === ip ? void 0 : ip.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: pp,
            parsedType: Ap(pp)
          },
          Op = this._parse({
            data: pp,
            path: cp.path,
            parent: cp
          }),
          op = await (qp(Op) ? Op : Promise.resolve(Op));
        return Ep(cp, op)
      }
      refine(pp, ip) {
        const cp = pp => "string" === typeof ip || "undefined" === typeof ip ? {
          message: ip
        } : "function" === typeof ip ? ip(pp) : ip;
        return this._refinement(((ip, Op) => {
          const op = pp(ip),
            Ip = () => Op.addIssue({
              code: Pp.custom,
              ...cp(ip)
            });
          return "undefined" !== typeof Promise && op instanceof Promise ? op.then((pp => !!pp || (Ip(), !1))) : !!op || (Ip(), !1)
        }))
      }
      refinement(pp, ip) {
        return this._refinement(((cp, Op) => !!pp(cp) || (Op.addIssue("function" === typeof ip ? ip(cp, Op) : ip), !1)))
      }
      _refinement(pp) {
        return new ui({
          schema: this,
          typeName: Ji.ZodEffects,
          effect: {
            type: "refinement",
            refinement: pp
          }
        })
      }
      superRefine(pp) {
        return this._refinement(pp)
      }
      optional() {
        return ji.create(this, this._def)
      }
      nullable() {
        return ki.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return Oi.create(this, this._def)
      }
      promise() {
        return ei.create(this, this._def)
      }
      or(pp) {
        return Si.create([this, pp], this._def)
      }
      and(pp) {
        return Di.create(this, pp, this._def)
      }
      transform(pp) {
        return new ui({
          ...Xp(this._def),
          schema: this,
          typeName: Ji.ZodEffects,
          effect: {
            type: "transform",
            transform: pp
          }
        })
      }
      default (pp) {
        const ip = "function" === typeof pp ? pp : () => pp;
        return new mi({
          ...Xp(this._def),
          innerType: this,
          defaultValue: ip,
          typeName: Ji.ZodDefault
        })
      }
      brand() {
        return new Ci({
          typeName: Ji.ZodBranded,
          type: this,
          ...Xp(this._def)
        })
      } catch (pp) {
        const ip = "function" === typeof pp ? pp : () => pp;
        return new Ri({
          ...Xp(this._def),
          innerType: this,
          catchValue: ip,
          typeName: Ji.ZodCatch
        })
      }
      describe(pp) {
        return new(0, this.constructor)({
          ...this._def,
          description: pp
        })
      }
      pipe(pp) {
        return Ei.create(this, pp)
      }
      readonly() {
        return Xi.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const Qp = /^c[^\s-]{8,}$/i,
      Jp = /^[a-z][a-z0-9]*$/,
      Bp = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Np = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Tp = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let fp;
    const bp = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      hp = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class ap extends lp {
      _parse(pp) {
        this._def.coerce && (pp.data = String(pp.data));
        if (this._getType(pp) !== Dp.string) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.string,
            received: ip.parsedType
          }), dp
        }
        const ip = new Hp;
        let cp;
        for (const Lp of this._def.checks)
          if ("min" === Lp.kind) pp.data.length < Lp.value && (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
            code: Pp.too_small,
            minimum: Lp.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Lp.message
          }), ip.pU());
          else if ("max" === Lp.kind) pp.data.length > Lp.value && (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          code: Pp.too_big,
          maximum: Lp.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Lp.message
        }), ip.pU());
        else if ("length" === Lp.kind) {
          const Op = pp.data.length > Lp.value,
            op = pp.data.length < Lp.value;
          (Op || op) && (cp = this._getOrReturnCtx(pp, cp), Op ? tp(cp, {
            code: Pp.too_big,
            maximum: Lp.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Lp.message
          }) : op && tp(cp, {
            code: Pp.too_small,
            minimum: Lp.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Lp.message
          }), ip.pU())
        } else if ("email" === Lp.kind) Tp.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "email",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU());
        else if ("emoji" === Lp.kind) fp || (fp = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), fp.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "emoji",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU());
        else if ("uuid" === Lp.kind) Np.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "uuid",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU());
        else if ("cuid" === Lp.kind) Qp.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "cuid",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU());
        else if ("cuid2" === Lp.kind) Jp.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "cuid2",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU());
        else if ("ulid" === Lp.kind) Bp.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "ulid",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU());
        else if ("url" === Lp.kind) try {
          new URL(pp.data)
        } catch (Sp) {
          cp = this._getOrReturnCtx(pp, cp), tp(cp, {
            validation: "url",
            code: Pp.invalid_string,
            message: Lp.message
          }), ip.pU()
        } else if ("regex" === Lp.kind) {
          Lp.regex.lastIndex = 0;
          Lp.regex.test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
            validation: "regex",
            code: Pp.invalid_string,
            message: Lp.message
          }), ip.pU())
        } else if ("trim" === Lp.kind) pp.data = pp.data.trim();
        else if ("includes" === Lp.kind) pp.data.includes(Lp.value, Lp.position) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          code: Pp.invalid_string,
          validation: {
            includes: Lp.value,
            position: Lp.position
          },
          message: Lp.message
        }), ip.pU());
        else if ("toLowerCase" === Lp.kind) pp.data = pp.data.toLowerCase();
        else if ("toUpperCase" === Lp.kind) pp.data = pp.data.toUpperCase();
        else if ("startsWith" === Lp.kind) pp.data.startsWith(Lp.value) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          code: Pp.invalid_string,
          validation: {
            startsWith: Lp.value
          },
          message: Lp.message
        }), ip.pU());
        else if ("endsWith" === Lp.kind) pp.data.endsWith(Lp.value) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          code: Pp.invalid_string,
          validation: {
            endsWith: Lp.value
          },
          message: Lp.message
        }), ip.pU());
        else if ("datetime" === Lp.kind) {
          ((Ip = Lp).precision ? Ip.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Ip.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Ip.precision}}Z$`) : 0 === Ip.precision ? Ip.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Ip.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(pp.data) || (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
            code: Pp.invalid_string,
            validation: "datetime",
            message: Lp.message
          }), ip.pU())
        } else "ip" === Lp.kind ? (Op = pp.data, ("v4" !== (op = Lp.version) && op || !bp.test(Op)) && ("v6" !== op && op || !hp.test(Op)) && (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          validation: "ip",
          code: Pp.invalid_string,
          message: Lp.message
        }), ip.pU())) : xp.assertNever(Lp);
        var Op, op, Ip;
        return {
          status: ip.value,
          value: pp.data
        }
      }
      _regex(pp, ip, cp) {
        return this.refinement((ip => pp.test(ip)), {
          validation: ip,
          code: Pp.invalid_string,
          ...Mp.errToObj(cp)
        })
      }
      _addCheck(pp) {
        return new ap({
          ...this._def,
          checks: [...this._def.checks, pp]
        })
      }
      email(pp) {
        return this._addCheck({
          kind: "email",
          ...Mp.errToObj(pp)
        })
      }
      url(pp) {
        return this._addCheck({
          kind: "url",
          ...Mp.errToObj(pp)
        })
      }
      emoji(pp) {
        return this._addCheck({
          kind: "emoji",
          ...Mp.errToObj(pp)
        })
      }
      uuid(pp) {
        return this._addCheck({
          kind: "uuid",
          ...Mp.errToObj(pp)
        })
      }
      cuid(pp) {
        return this._addCheck({
          kind: "cuid",
          ...Mp.errToObj(pp)
        })
      }
      cuid2(pp) {
        return this._addCheck({
          kind: "cuid2",
          ...Mp.errToObj(pp)
        })
      }
      ulid(pp) {
        return this._addCheck({
          kind: "ulid",
          ...Mp.errToObj(pp)
        })
      }
      ip(pp) {
        return this._addCheck({
          kind: "ip",
          ...Mp.errToObj(pp)
        })
      }
      datetime(pp) {
        var ip;
        return "string" === typeof pp ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: pp
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === pp || void 0 === pp ? void 0 : pp.precision) ? null : null === pp || void 0 === pp ? void 0 : pp.precision,
          offset: null !== (ip = null === pp || void 0 === pp ? void 0 : pp.offset) && void 0 !== ip && ip,
          ...Mp.errToObj(null === pp || void 0 === pp ? void 0 : pp.message)
        })
      }
      regex(pp, ip) {
        return this._addCheck({
          kind: "regex",
          regex: pp,
          ...Mp.errToObj(ip)
        })
      }
      includes(pp, ip) {
        return this._addCheck({
          kind: "includes",
          value: pp,
          position: null === ip || void 0 === ip ? void 0 : ip.position,
          ...Mp.errToObj(null === ip || void 0 === ip ? void 0 : ip.message)
        })
      }
      startsWith(pp, ip) {
        return this._addCheck({
          kind: "startsWith",
          value: pp,
          ...Mp.errToObj(ip)
        })
      }
      endsWith(pp, ip) {
        return this._addCheck({
          kind: "endsWith",
          value: pp,
          ...Mp.errToObj(ip)
        })
      }
      min(pp, ip) {
        return this._addCheck({
          kind: "min",
          value: pp,
          ...Mp.errToObj(ip)
        })
      }
      max(pp, ip) {
        return this._addCheck({
          kind: "max",
          value: pp,
          ...Mp.errToObj(ip)
        })
      }
      length(pp, ip) {
        return this._addCheck({
          kind: "length",
          value: pp,
          ...Mp.errToObj(ip)
        })
      }
      nonempty(pp) {
        return this.min(1, Mp.errToObj(pp))
      }
      trim() {
        return new ap({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new ap({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new ap({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((pp => "datetime" === pp.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((pp => "email" === pp.kind))
      }
      get isURL() {
        return !!this._def.checks.find((pp => "url" === pp.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((pp => "emoji" === pp.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((pp => "uuid" === pp.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((pp => "cuid" === pp.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((pp => "cuid2" === pp.kind))
      }
      get isULID() {
        return !!this._def.checks.find((pp => "ulid" === pp.kind))
      }
      get isIP() {
        return !!this._def.checks.find((pp => "ip" === pp.kind))
      }
      get minLength() {
        let pp = null;
        for (const ip of this._def.checks) "min" === ip.kind && (null === pp || ip.value > pp) && (pp = ip.value);
        return pp
      }
      get maxLength() {
        let pp = null;
        for (const ip of this._def.checks) "max" === ip.kind && (null === pp || ip.value < pp) && (pp = ip.value);
        return pp
      }
    }

    function np(pp, ip) {
      const cp = (pp.toString().split(".")[1] || "").length,
        Op = (ip.toString().split(".")[1] || "").length,
        op = cp > Op ? cp : Op;
      return parseInt(pp.toFixed(op).replace(".", "")) % parseInt(ip.toFixed(op).replace(".", "")) / Math.pow(10, op)
    }
    ap.create = pp => {
      var ip;
      return new ap({
        checks: [],
        typeName: Ji.ZodString,
        coerce: null !== (ip = null === pp || void 0 === pp ? void 0 : pp.coerce) && void 0 !== ip && ip,
        ...Xp(pp)
      })
    };
    class Fp extends lp {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(pp) {
        this._def.coerce && (pp.data = Number(pp.data));
        if (this._getType(pp) !== Dp.number) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.number,
            received: ip.parsedType
          }), dp
        }
        let ip;
        const cp = new Hp;
        for (const Op of this._def.checks)
          if ("int" === Op.kind) xp.isInteger(pp.data) || (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
            code: Pp.invalid_type,
            expected: "integer",
            received: "float",
            message: Op.message
          }), cp.pU());
          else if ("min" === Op.kind) {
          (Op.inclusive ? pp.data < Op.value : pp.data <= Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
            code: Pp.too_small,
            minimum: Op.value,
            type: "number",
            inclusive: Op.inclusive,
            exact: !1,
            message: Op.message
          }), cp.pU())
        } else if ("max" === Op.kind) {
          (Op.inclusive ? pp.data > Op.value : pp.data >= Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
            code: Pp.too_big,
            maximum: Op.value,
            type: "number",
            inclusive: Op.inclusive,
            exact: !1,
            message: Op.message
          }), cp.pU())
        } else "multipleOf" === Op.kind ? 0 !== np(pp.data, Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
          code: Pp.not_multiple_of,
          multipleOf: Op.value,
          message: Op.message
        }), cp.pU()) : "finite" === Op.kind ? Number.isFinite(pp.data) || (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
          code: Pp.not_finite,
          message: Op.message
        }), cp.pU()) : xp.assertNever(Op);
        return {
          status: cp.value,
          value: pp.data
        }
      }
      gte(pp, ip) {
        return this.setLimit("min", pp, !0, Mp.toString(ip))
      }
      gt(pp, ip) {
        return this.setLimit("min", pp, !1, Mp.toString(ip))
      }
      lte(pp, ip) {
        return this.setLimit("max", pp, !0, Mp.toString(ip))
      }
      lt(pp, ip) {
        return this.setLimit("max", pp, !1, Mp.toString(ip))
      }
      setLimit(pp, ip, cp, Op) {
        return new Fp({
          ...this._def,
          checks: [...this._def.checks, {
            kind: pp,
            value: ip,
            inclusive: cp,
            message: Mp.toString(Op)
          }]
        })
      }
      _addCheck(pp) {
        return new Fp({
          ...this._def,
          checks: [...this._def.checks, pp]
        })
      }
      int(pp) {
        return this._addCheck({
          kind: "int",
          message: Mp.toString(pp)
        })
      }
      positive(pp) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Mp.toString(pp)
        })
      }
      negative(pp) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Mp.toString(pp)
        })
      }
      nonpositive(pp) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Mp.toString(pp)
        })
      }
      nonnegative(pp) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Mp.toString(pp)
        })
      }
      multipleOf(pp, ip) {
        return this._addCheck({
          kind: "multipleOf",
          value: pp,
          message: Mp.toString(ip)
        })
      }
      finite(pp) {
        return this._addCheck({
          kind: "finite",
          message: Mp.toString(pp)
        })
      }
      safe(pp) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Mp.toString(pp)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Mp.toString(pp)
        })
      }
      get minValue() {
        let pp = null;
        for (const ip of this._def.checks) "min" === ip.kind && (null === pp || ip.value > pp) && (pp = ip.value);
        return pp
      }
      get maxValue() {
        let pp = null;
        for (const ip of this._def.checks) "max" === ip.kind && (null === pp || ip.value < pp) && (pp = ip.value);
        return pp
      }
      get isInt() {
        return !!this._def.checks.find((pp => "int" === pp.kind || "multipleOf" === pp.kind && xp.isInteger(pp.value)))
      }
      get isFinite() {
        let pp = null,
          ip = null;
        for (const cp of this._def.checks) {
          if ("finite" === cp.kind || "int" === cp.kind || "multipleOf" === cp.kind) return !0;
          "min" === cp.kind ? (null === ip || cp.value > ip) && (ip = cp.value) : "max" === cp.kind && (null === pp || cp.value < pp) && (pp = cp.value)
        }
        return Number.isFinite(ip) && Number.isFinite(pp)
      }
    }
    Fp.create = pp => new Fp({
      checks: [],
      typeName: Ji.ZodNumber,
      coerce: (null === pp || void 0 === pp ? void 0 : pp.coerce) || !1,
      ...Xp(pp)
    });
    class gp extends lp {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(pp) {
        this._def.coerce && (pp.data = BigInt(pp.data));
        if (this._getType(pp) !== Dp.bigint) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.bigint,
            received: ip.parsedType
          }), dp
        }
        let ip;
        const cp = new Hp;
        for (const Op of this._def.checks)
          if ("min" === Op.kind) {
            (Op.inclusive ? pp.data < Op.value : pp.data <= Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
              code: Pp.too_small,
              type: "bigint",
              minimum: Op.value,
              inclusive: Op.inclusive,
              message: Op.message
            }), cp.pU())
          } else if ("max" === Op.kind) {
          (Op.inclusive ? pp.data > Op.value : pp.data >= Op.value) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
            code: Pp.too_big,
            type: "bigint",
            maximum: Op.value,
            inclusive: Op.inclusive,
            message: Op.message
          }), cp.pU())
        } else "multipleOf" === Op.kind ? pp.data % Op.value !== BigInt(0) && (ip = this._getOrReturnCtx(pp, ip), tp(ip, {
          code: Pp.not_multiple_of,
          multipleOf: Op.value,
          message: Op.message
        }), cp.pU()) : xp.assertNever(Op);
        return {
          status: cp.value,
          value: pp.data
        }
      }
      gte(pp, ip) {
        return this.setLimit("min", pp, !0, Mp.toString(ip))
      }
      gt(pp, ip) {
        return this.setLimit("min", pp, !1, Mp.toString(ip))
      }
      lte(pp, ip) {
        return this.setLimit("max", pp, !0, Mp.toString(ip))
      }
      lt(pp, ip) {
        return this.setLimit("max", pp, !1, Mp.toString(ip))
      }
      setLimit(pp, ip, cp, Op) {
        return new gp({
          ...this._def,
          checks: [...this._def.checks, {
            kind: pp,
            value: ip,
            inclusive: cp,
            message: Mp.toString(Op)
          }]
        })
      }
      _addCheck(pp) {
        return new gp({
          ...this._def,
          checks: [...this._def.checks, pp]
        })
      }
      positive(pp) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Mp.toString(pp)
        })
      }
      negative(pp) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Mp.toString(pp)
        })
      }
      nonpositive(pp) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Mp.toString(pp)
        })
      }
      nonnegative(pp) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Mp.toString(pp)
        })
      }
      multipleOf(pp, ip) {
        return this._addCheck({
          kind: "multipleOf",
          value: pp,
          message: Mp.toString(ip)
        })
      }
      get minValue() {
        let pp = null;
        for (const ip of this._def.checks) "min" === ip.kind && (null === pp || ip.value > pp) && (pp = ip.value);
        return pp
      }
      get maxValue() {
        let pp = null;
        for (const ip of this._def.checks) "max" === ip.kind && (null === pp || ip.value < pp) && (pp = ip.value);
        return pp
      }
    }
    gp.create = pp => {
      var ip;
      return new gp({
        checks: [],
        typeName: Ji.ZodBigInt,
        coerce: null !== (ip = null === pp || void 0 === pp ? void 0 : pp.coerce) && void 0 !== ip && ip,
        ...Xp(pp)
      })
    };
    class Gp extends lp {
      _parse(pp) {
        this._def.coerce && (pp.data = Boolean(pp.data));
        if (this._getType(pp) !== Dp.boolean) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.boolean,
            received: ip.parsedType
          }), dp
        }
        return jp(pp.data)
      }
    }
    Gp.create = pp => new Gp({
      typeName: Ji.ZodBoolean,
      coerce: (null === pp || void 0 === pp ? void 0 : pp.coerce) || !1,
      ...Xp(pp)
    });
    class rp extends lp {
      _parse(pp) {
        this._def.coerce && (pp.data = new Date(pp.data));
        if (this._getType(pp) !== Dp.date) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.date,
            received: ip.parsedType
          }), dp
        }
        if (isNaN(pp.data.getTime())) {
          return tp(this._getOrReturnCtx(pp), {
            code: Pp.invalid_date
          }), dp
        }
        const ip = new Hp;
        let cp;
        for (const Op of this._def.checks) "min" === Op.kind ? pp.data.getTime() < Op.value && (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          code: Pp.too_small,
          message: Op.message,
          inclusive: !0,
          exact: !1,
          minimum: Op.value,
          type: "date"
        }), ip.pU()) : "max" === Op.kind ? pp.data.getTime() > Op.value && (cp = this._getOrReturnCtx(pp, cp), tp(cp, {
          code: Pp.too_big,
          message: Op.message,
          inclusive: !0,
          exact: !1,
          maximum: Op.value,
          type: "date"
        }), ip.pU()) : xp.assertNever(Op);
        return {
          status: ip.value,
          value: new Date(pp.data.getTime())
        }
      }
      _addCheck(pp) {
        return new rp({
          ...this._def,
          checks: [...this._def.checks, pp]
        })
      }
      min(pp, ip) {
        return this._addCheck({
          kind: "min",
          value: pp.getTime(),
          message: Mp.toString(ip)
        })
      }
      max(pp, ip) {
        return this._addCheck({
          kind: "max",
          value: pp.getTime(),
          message: Mp.toString(ip)
        })
      }
      get minDate() {
        let pp = null;
        for (const ip of this._def.checks) "min" === ip.kind && (null === pp || ip.value > pp) && (pp = ip.value);
        return null != pp ? new Date(pp) : null
      }
      get maxDate() {
        let pp = null;
        for (const ip of this._def.checks) "max" === ip.kind && (null === pp || ip.value < pp) && (pp = ip.value);
        return null != pp ? new Date(pp) : null
      }
    }
    rp.create = pp => new rp({
      checks: [],
      coerce: (null === pp || void 0 === pp ? void 0 : pp.coerce) || !1,
      typeName: Ji.ZodDate,
      ...Xp(pp)
    });
    class Zp extends lp {
      _parse(pp) {
        if (this._getType(pp) !== Dp.symbol) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.symbol,
            received: ip.parsedType
          }), dp
        }
        return jp(pp.data)
      }
    }
    Zp.create = pp => new Zp({
      typeName: Ji.ZodSymbol,
      ...Xp(pp)
    });
    class zp extends lp {
      _parse(pp) {
        if (this._getType(pp) !== Dp.undefined) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.undefined,
            received: ip.parsedType
          }), dp
        }
        return jp(pp.data)
      }
    }
    zp.create = pp => new zp({
      typeName: Ji.ZodUndefined,
      ...Xp(pp)
    });
    class sp extends lp {
      _parse(pp) {
        if (this._getType(pp) !== Dp.null) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.null,
            received: ip.parsedType
          }), dp
        }
        return jp(pp.data)
      }
    }
    sp.create = pp => new sp({
      typeName: Ji.ZodNull,
      ...Xp(pp)
    });
    class Kp extends lp {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(pp) {
        return jp(pp.data)
      }
    }
    Kp.create = pp => new Kp({
      typeName: Ji.ZodAny,
      ...Xp(pp)
    });
    class Vp extends lp {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(pp) {
        return jp(pp.data)
      }
    }
    Vp.create = pp => new Vp({
      typeName: Ji.ZodUnknown,
      ...Xp(pp)
    });
    class ii extends lp {
      _parse(pp) {
        const ip = this._getOrReturnCtx(pp);
        return tp(ip, {
          code: Pp.invalid_type,
          expected: Dp.never,
          received: ip.parsedType
        }), dp
      }
    }
    ii.create = pp => new ii({
      typeName: Ji.ZodNever,
      ...Xp(pp)
    });
    class ci extends lp {
      _parse(pp) {
        if (this._getType(pp) !== Dp.undefined) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.void,
            received: ip.parsedType
          }), dp
        }
        return jp(pp.data)
      }
    }
    ci.create = pp => new ci({
      typeName: Ji.ZodVoid,
      ...Xp(pp)
    });
    class Oi extends lp {
      _parse(pp) {
        const {
          ctx: ip,
          status: cp
        } = this._processInputParams(pp), Op = this._def;
        if (ip.parsedType !== Dp.array) return tp(ip, {
          code: Pp.invalid_type,
          expected: Dp.array,
          received: ip.parsedType
        }), dp;
        if (null !== Op.exactLength) {
          const pp = ip.data.length > Op.exactLength.value,
            op = ip.data.length < Op.exactLength.value;
          (pp || op) && (tp(ip, {
            code: pp ? Pp.too_big : Pp.too_small,
            minimum: op ? Op.exactLength.value : void 0,
            maximum: pp ? Op.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Op.exactLength.message
          }), cp.pU())
        }
        if (null !== Op.minLength && ip.data.length < Op.minLength.value && (tp(ip, {
            code: Pp.too_small,
            minimum: Op.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Op.minLength.message
          }), cp.pU()), null !== Op.maxLength && ip.data.length > Op.maxLength.value && (tp(ip, {
            code: Pp.too_big,
            maximum: Op.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Op.maxLength.message
          }), cp.pU()), ip.common.async) return Promise.all([...ip.data].map(((pp, cp) => Op.type._parseAsync(new Cp(ip, pp, ip.path, cp))))).then((pp => Hp.mergeArray(cp, pp)));
        const op = [...ip.data].map(((pp, cp) => Op.type._parseSync(new Cp(ip, pp, ip.path, cp))));
        return Hp.mergeArray(cp, op)
      }
      get element() {
        return this._def.type
      }
      min(pp, ip) {
        return new Oi({
          ...this._def,
          minLength: {
            value: pp,
            message: Mp.toString(ip)
          }
        })
      }
      max(pp, ip) {
        return new Oi({
          ...this._def,
          maxLength: {
            value: pp,
            message: Mp.toString(ip)
          }
        })
      }
      length(pp, ip) {
        return new Oi({
          ...this._def,
          exactLength: {
            value: pp,
            message: Mp.toString(ip)
          }
        })
      }
      nonempty(pp) {
        return this.min(1, pp)
      }
    }

    function oi(pp) {
      if (pp instanceof Ii) {
        const ip = {};
        for (const cp in pp.shape) {
          const Op = pp.shape[cp];
          ip[cp] = ji.create(oi(Op))
        }
        return new Ii({
          ...pp._def,
          shape: () => ip
        })
      }
      return pp instanceof Oi ? new Oi({
        ...pp._def,
        type: oi(pp.element)
      }) : pp instanceof ji ? ji.create(oi(pp.unwrap())) : pp instanceof ki ? ki.create(oi(pp.unwrap())) : pp instanceof Ai ? Ai.create(pp.items.map((pp => oi(pp)))) : pp
    }
    Oi.create = (pp, ip) => new Oi({
      type: pp,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Ji.ZodArray,
      ...Xp(ip)
    });
    class Ii extends lp {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const pp = this._def.shape(),
          ip = xp.objectKeys(pp);
        return this._cached = {
          shape: pp,
          keys: ip
        }
      }
      _parse(pp) {
        if (this._getType(pp) !== Dp.object) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.object,
            received: ip.parsedType
          }), dp
        }
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp), {
          shape: Op,
          keys: op
        } = this._getCached(), Ip = [];
        if (!(this._def.catchall instanceof ii && "strip" === this._def.unknownKeys))
          for (const xp in cp.data) op.includes(xp) || Ip.push(xp);
        const Sp = [];
        for (const xp of op) {
          const pp = Op[xp],
            ip = cp.data[xp];
          Sp.push({
            key: {
              status: "valid",
              value: xp
            },
            value: pp._parse(new Cp(cp, ip, cp.path, xp)),
            alwaysSet: xp in cp.data
          })
        }
        if (this._def.catchall instanceof ii) {
          const pp = this._def.unknownKeys;
          if ("passthrough" === pp)
            for (const ip of Ip) Sp.push({
              key: {
                status: "valid",
                value: ip
              },
              value: {
                status: "valid",
                value: cp.data[ip]
              }
            });
          else if ("strict" === pp) Ip.length > 0 && (tp(cp, {
            code: Pp.unrecognized_keys,
            keys: Ip
          }), ip.pU());
          else if ("strip" !== pp) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const pp = this._def.catchall;
          for (const ip of Ip) {
            const Op = cp.data[ip];
            Sp.push({
              key: {
                status: "valid",
                value: ip
              },
              value: pp._parse(new Cp(cp, Op, cp.path, ip)),
              alwaysSet: ip in cp.data
            })
          }
        }
        return cp.common.async ? Promise.resolve().then((async () => {
          const pp = [];
          for (const ip of Sp) {
            const cp = await ip.key;
            pp.push({
              key: cp,
              value: await ip.value,
              alwaysSet: ip.alwaysSet
            })
          }
          return pp
        })).then((pp => Hp.mergeObjectSync(ip, pp))) : Hp.mergeObjectSync(ip, Sp)
      }
      get shape() {
        return this._def.shape()
      }
      strict(pp) {
        return Mp.errToObj, new Ii({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== pp ? {
            errorMap: (ip, cp) => {
              var Op, op, Ip, Sp;
              const xp = null !== (Ip = null === (op = (Op = this._def).errorMap) || void 0 === op ? void 0 : op.call(Op, ip, cp).message) && void 0 !== Ip ? Ip : cp.defaultError;
              return "unrecognized_keys" === ip.code ? {
                message: null !== (Sp = Mp.errToObj(pp).message) && void 0 !== Sp ? Sp : xp
              } : {
                message: xp
              }
            }
          } : {}
        })
      }
      strip() {
        return new Ii({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Ii({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(pp) {
        return new Ii({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...pp
          })
        })
      }
      merge(pp) {
        return new Ii({
          unknownKeys: pp._def.unknownKeys,
          catchall: pp._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...pp._def.shape()
          }),
          typeName: Ji.ZodObject
        })
      }
      setKey(pp, ip) {
        return this.augment({
          [pp]: ip
        })
      }
      catchall(pp) {
        return new Ii({
          ...this._def,
          catchall: pp
        })
      }
      SW(pp) {
        const ip = {};
        return xp.objectKeys(pp).forEach((cp => {
          pp[cp] && this.shape[cp] && (ip[cp] = this.shape[cp])
        })), new Ii({
          ...this._def,
          shape: () => ip
        })
      }
      omit(pp) {
        const ip = {};
        return xp.objectKeys(this.shape).forEach((cp => {
          pp[cp] || (ip[cp] = this.shape[cp])
        })), new Ii({
          ...this._def,
          shape: () => ip
        })
      }
      deepPartial() {
        return oi(this)
      }
      partial(pp) {
        const ip = {};
        return xp.objectKeys(this.shape).forEach((cp => {
          const Op = this.shape[cp];
          pp && !pp[cp] ? ip[cp] = Op : ip[cp] = Op.optional()
        })), new Ii({
          ...this._def,
          shape: () => ip
        })
      }
      required(pp) {
        const ip = {};
        return xp.objectKeys(this.shape).forEach((cp => {
          if (pp && !pp[cp]) ip[cp] = this.shape[cp];
          else {
            let pp = this.shape[cp];
            for (; pp instanceof ji;) pp = pp._def.innerType;
            ip[cp] = pp
          }
        })), new Ii({
          ...this._def,
          shape: () => ip
        })
      }
      keyof() {
        return ti(xp.objectKeys(this.shape))
      }
    }
    Ii.create = (pp, ip) => new Ii({
      shape: () => pp,
      unknownKeys: "strip",
      catchall: ii.create(),
      typeName: Ji.ZodObject,
      ...Xp(ip)
    }), Ii.strictCreate = (pp, ip) => new Ii({
      shape: () => pp,
      unknownKeys: "strict",
      catchall: ii.create(),
      typeName: Ji.ZodObject,
      ...Xp(ip)
    }), Ii.lazycreate = (pp, ip) => new Ii({
      shape: pp,
      unknownKeys: "strip",
      catchall: ii.create(),
      typeName: Ji.ZodObject,
      ...Xp(ip)
    });
    class Si extends lp {
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp), cp = this._def.options;
        if (ip.common.async) return Promise.all(cp.map((async pp => {
          const cp = {
            ...ip,
            common: {
              ...ip.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await pp._parseAsync({
              data: ip.data,
              path: ip.path,
              parent: cp
            }),
            ctx: cp
          }
        }))).then((function(pp) {
          for (const ip of pp)
            if ("valid" === ip.result.status) return ip.result;
          for (const Op of pp)
            if ("pU" === Op.result.status) return ip.common.issues.push(...Op.ctx.common.issues), Op.result;
          const cp = pp.map((pp => new Wp(pp.ctx.common.issues)));
          return tp(ip, {
            code: Pp.invalid_union,
            unionErrors: cp
          }), dp
        }));
        {
          let pp;
          const Op = [];
          for (const Ip of cp) {
            const cp = {
                ...ip,
                common: {
                  ...ip.common,
                  issues: []
                },
                parent: null
              },
              op = Ip._parseSync({
                data: ip.data,
                path: ip.path,
                parent: cp
              });
            if ("valid" === op.status) return op;
            "pU" !== op.status || pp || (pp = {
              result: op,
              ctx: cp
            }), cp.common.issues.length && Op.push(cp.common.issues)
          }
          if (pp) return ip.common.issues.push(...pp.ctx.common.issues), pp.result;
          const op = Op.map((pp => new Wp(pp)));
          return tp(ip, {
            code: Pp.invalid_union,
            unionErrors: op
          }), dp
        }
      }
      get options() {
        return this._def.options
      }
    }
    Si.create = (pp, ip) => new Si({
      options: pp,
      typeName: Ji.ZodUnion,
      ...Xp(ip)
    });
    const xi = pp => pp instanceof wi ? xi(pp.schema) : pp instanceof ui ? xi(pp.innerType()) : pp instanceof vi ? [pp.value] : pp instanceof Hi ? pp.options : pp instanceof di ? Object.keys(pp.enum) : pp instanceof mi ? xi(pp._def.innerType) : pp instanceof zp ? [void 0] : pp instanceof sp ? [null] : null;
    class Li extends lp {
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp);
        if (ip.parsedType !== Dp.object) return tp(ip, {
          code: Pp.invalid_type,
          expected: Dp.object,
          received: ip.parsedType
        }), dp;
        const cp = this.discriminator,
          Op = ip.data[cp],
          op = this.optionsMap.get(Op);
        return op ? ip.common.async ? op._parseAsync({
          data: ip.data,
          path: ip.path,
          parent: ip
        }) : op._parseSync({
          data: ip.data,
          path: ip.path,
          parent: ip
        }) : (tp(ip, {
          code: Pp.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [cp]
        }), dp)
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
      static create(pp, ip, cp) {
        const Op = new Map;
        for (const op of ip) {
          const ip = xi(op.shape[pp]);
          if (!ip) throw new Error(`A discriminator value for key \`${pp}\` could not be extracted from all schema options`);
          for (const cp of ip) {
            if (Op.has(cp)) throw new Error(`Discriminator property ${String(pp)} has duplicate value ${String(cp)}`);
            Op.set(cp, op)
          }
        }
        return new Li({
          typeName: Ji.ZodDiscriminatedUnion,
          discriminator: pp,
          options: ip,
          optionsMap: Op,
          ...Xp(cp)
        })
      }
    }

    function Yi(pp, ip) {
      const cp = Ap(pp),
        Op = Ap(ip);
      if (pp === ip) return {
        valid: !0,
        data: pp
      };
      if (cp === Dp.object && Op === Dp.object) {
        const cp = xp.objectKeys(ip),
          Op = xp.objectKeys(pp).filter((pp => -1 !== cp.indexOf(pp))),
          op = {
            ...pp,
            ...ip
          };
        for (const Ip of Op) {
          const cp = Yi(pp[Ip], ip[Ip]);
          if (!cp.valid) return {
            valid: !1
          };
          op[Ip] = cp.data
        }
        return {
          valid: !0,
          data: op
        }
      }
      if (cp === Dp.array && Op === Dp.array) {
        if (pp.length !== ip.length) return {
          valid: !1
        };
        const cp = [];
        for (let Op = 0; Op < pp.length; Op++) {
          const op = Yi(pp[Op], ip[Op]);
          if (!op.valid) return {
            valid: !1
          };
          cp.push(op.data)
        }
        return {
          valid: !0,
          data: cp
        }
      }
      return cp === Dp.date && Op === Dp.date && +pp === +ip ? {
        valid: !0,
        data: pp
      } : {
        valid: !1
      }
    }
    class Di extends lp {
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp), Op = (pp, Op) => {
          if (kp(pp) || kp(Op)) return dp;
          const op = Yi(pp.value, Op.value);
          return op.valid ? ((mp(pp) || mp(Op)) && ip.pU(), {
            status: ip.value,
            value: op.data
          }) : (tp(cp, {
            code: Pp.invalid_intersection_types
          }), dp)
        };
        return cp.common.async ? Promise.all([this._def.left._parseAsync({
          data: cp.data,
          path: cp.path,
          parent: cp
        }), this._def.right._parseAsync({
          data: cp.data,
          path: cp.path,
          parent: cp
        })]).then((pp => {
          let [ip, cp] = pp;
          return Op(ip, cp)
        })) : Op(this._def.left._parseSync({
          data: cp.data,
          path: cp.path,
          parent: cp
        }), this._def.right._parseSync({
          data: cp.data,
          path: cp.path,
          parent: cp
        }))
      }
    }
    Di.create = (pp, ip, cp) => new Di({
      left: pp,
      right: ip,
      typeName: Ji.ZodIntersection,
      ...Xp(cp)
    });
    class Ai extends lp {
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp);
        if (cp.parsedType !== Dp.array) return tp(cp, {
          code: Pp.invalid_type,
          expected: Dp.array,
          received: cp.parsedType
        }), dp;
        if (cp.data.length < this._def.items.length) return tp(cp, {
          code: Pp.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), dp;
        !this._def.rest && cp.data.length > this._def.items.length && (tp(cp, {
          code: Pp.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), ip.pU());
        const Op = [...cp.data].map(((pp, ip) => {
          const Op = this._def.items[ip] || this._def.rest;
          return Op ? Op._parse(new Cp(cp, pp, cp.path, ip)) : null
        })).filter((pp => !!pp));
        return cp.common.async ? Promise.all(Op).then((pp => Hp.mergeArray(ip, pp))) : Hp.mergeArray(ip, Op)
      }
      get items() {
        return this._def.items
      }
      rest(pp) {
        return new Ai({
          ...this._def,
          rest: pp
        })
      }
    }
    Ai.create = (pp, ip) => {
      if (!Array.isArray(pp)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Ai({
        items: pp,
        typeName: Ji.ZodTuple,
        rest: null,
        ...Xp(ip)
      })
    };
    class Pi extends lp {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp);
        if (cp.parsedType !== Dp.object) return tp(cp, {
          code: Pp.invalid_type,
          expected: Dp.object,
          received: cp.parsedType
        }), dp;
        const Op = [],
          op = this._def.keyType,
          Ip = this._def.valueType;
        for (const Sp in cp.data) Op.push({
          key: op._parse(new Cp(cp, Sp, cp.path, Sp)),
          value: Ip._parse(new Cp(cp, cp.data[Sp], cp.path, Sp))
        });
        return cp.common.async ? Hp.mergeObjectAsync(ip, Op) : Hp.mergeObjectSync(ip, Op)
      }
      get element() {
        return this._def.valueType
      }
      static create(pp, ip, cp) {
        return new Pi(ip instanceof lp ? {
          keyType: pp,
          valueType: ip,
          typeName: Ji.ZodRecord,
          ...Xp(cp)
        } : {
          keyType: ap.create(),
          valueType: pp,
          typeName: Ji.ZodRecord,
          ...Xp(ip)
        })
      }
    }
    class Wi extends lp {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp);
        if (cp.parsedType !== Dp.map) return tp(cp, {
          code: Pp.invalid_type,
          expected: Dp.map,
          received: cp.parsedType
        }), dp;
        const Op = this._def.keyType,
          op = this._def.valueType,
          Ip = [...cp.data.entries()].map(((pp, ip) => {
            let [Ip, Sp] = pp;
            return {
              key: Op._parse(new Cp(cp, Ip, cp.path, [ip, "key"])),
              value: op._parse(new Cp(cp, Sp, cp.path, [ip, "value"]))
            }
          }));
        if (cp.common.async) {
          const pp = new Map;
          return Promise.resolve().then((async () => {
            for (const cp of Ip) {
              const Op = await cp.key,
                op = await cp.value;
              if ("aborted" === Op.status || "aborted" === op.status) return dp;
              "pU" !== Op.status && "pU" !== op.status || ip.pU(), pp.set(Op.value, op.value)
            }
            return {
              status: ip.value,
              value: pp
            }
          }))
        } {
          const pp = new Map;
          for (const cp of Ip) {
            const Op = cp.key,
              op = cp.value;
            if ("aborted" === Op.status || "aborted" === op.status) return dp;
            "pU" !== Op.status && "pU" !== op.status || ip.pU(), pp.set(Op.value, op.value)
          }
          return {
            status: ip.value,
            value: pp
          }
        }
      }
    }
    Wi.create = (pp, ip, cp) => new Wi({
      valueType: ip,
      keyType: pp,
      typeName: Ji.ZodMap,
      ...Xp(cp)
    });
    class yi extends lp {
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp);
        if (cp.parsedType !== Dp.set) return tp(cp, {
          code: Pp.invalid_type,
          expected: Dp.set,
          received: cp.parsedType
        }), dp;
        const Op = this._def;
        null !== Op.minSize && cp.data.size < Op.minSize.value && (tp(cp, {
          code: Pp.too_small,
          minimum: Op.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Op.minSize.message
        }), ip.pU()), null !== Op.maxSize && cp.data.size > Op.maxSize.value && (tp(cp, {
          code: Pp.too_big,
          maximum: Op.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Op.maxSize.message
        }), ip.pU());
        const op = this._def.valueType;

        function Ip(pp) {
          const cp = new Set;
          for (const Op of pp) {
            if ("aborted" === Op.status) return dp;
            "pU" === Op.status && ip.pU(), cp.add(Op.value)
          }
          return {
            status: ip.value,
            value: cp
          }
        }
        const Sp = [...cp.data.values()].map(((pp, ip) => op._parse(new Cp(cp, pp, cp.path, ip))));
        return cp.common.async ? Promise.all(Sp).then((pp => Ip(pp))) : Ip(Sp)
      }
      min(pp, ip) {
        return new yi({
          ...this._def,
          minSize: {
            value: pp,
            message: Mp.toString(ip)
          }
        })
      }
      max(pp, ip) {
        return new yi({
          ...this._def,
          maxSize: {
            value: pp,
            message: Mp.toString(ip)
          }
        })
      }
      size(pp, ip) {
        return this.min(pp, ip).max(pp, ip)
      }
      nonempty(pp) {
        return this.min(1, pp)
      }
    }
    yi.create = (pp, ip) => new yi({
      valueType: pp,
      minSize: null,
      maxSize: null,
      typeName: Ji.ZodSet,
      ...Xp(ip)
    });
    class Ui extends lp {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp);
        if (ip.parsedType !== Dp.function) return tp(ip, {
          code: Pp.invalid_type,
          expected: Dp.function,
          received: ip.parsedType
        }), dp;

        function cp(pp, cp) {
          return vp({
            data: pp,
            path: ip.path,
            errorMaps: [ip.common.contextualErrorMap, ip.schemaErrorMap, wp(), yp].filter((pp => !!pp)),
            issueData: {
              code: Pp.invalid_arguments,
              argumentsError: cp
            }
          })
        }

        function Op(pp, cp) {
          return vp({
            data: pp,
            path: ip.path,
            errorMaps: [ip.common.contextualErrorMap, ip.schemaErrorMap, wp(), yp].filter((pp => !!pp)),
            issueData: {
              code: Pp.invalid_return_type,
              returnTypeError: cp
            }
          })
        }
        const op = {
            errorMap: ip.common.contextualErrorMap
          },
          Ip = ip.data;
        if (this._def.returns instanceof ei) {
          const pp = this;
          return jp((async function() {
            for (var ip = arguments.length, Sp = new Array(ip), xp = 0; xp < ip; xp++) Sp[xp] = arguments[xp];
            const Lp = new Wp([]),
              Yp = await pp._def.args.parseAsync(Sp, op).catch((pp => {
                throw Lp.addIssue(cp(Sp, pp)), Lp
              })),
              Dp = await Reflect.apply(Ip, this, Yp);
            return await pp._def.returns._def.type.parseAsync(Dp, op).catch((pp => {
              throw Lp.addIssue(Op(Dp, pp)), Lp
            }))
          }))
        } {
          const pp = this;
          return jp((function() {
            for (var ip = arguments.length, Sp = new Array(ip), xp = 0; xp < ip; xp++) Sp[xp] = arguments[xp];
            const Lp = pp._def.args.safeParse(Sp, op);
            if (!Lp.success) throw new Wp([cp(Sp, Lp.error)]);
            const Yp = Reflect.apply(Ip, this, Lp.data),
              Dp = pp._def.returns.safeParse(Yp, op);
            if (!Dp.success) throw new Wp([Op(Yp, Dp.error)]);
            return Dp.data
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
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return new Ui({
          ...this._def,
          args: Ai.create(ip).rest(Vp.create())
        })
      }
      returns(pp) {
        return new Ui({
          ...this._def,
          returns: pp
        })
      }
      implement(pp) {
        return this.parse(pp)
      }
      strictImplement(pp) {
        return this.parse(pp)
      }
      static create(pp, ip, cp) {
        return new Ui({
          args: pp || Ai.create([]).rest(Vp.create()),
          returns: ip || Vp.create(),
          typeName: Ji.ZodFunction,
          ...Xp(cp)
        })
      }
    }
    class wi extends lp {
      get schema() {
        return this._def.getter()
      }
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp);
        return this._def.getter()._parse({
          data: ip.data,
          path: ip.path,
          parent: ip
        })
      }
    }
    wi.create = (pp, ip) => new wi({
      getter: pp,
      typeName: Ji.ZodLazy,
      ...Xp(ip)
    });
    class vi extends lp {
      _parse(pp) {
        if (pp.data !== this._def.value) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            received: ip.data,
            code: Pp.invalid_literal,
            expected: this._def.value
          }), dp
        }
        return {
          status: "valid",
          value: pp.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function ti(pp, ip) {
      return new Hi({
        values: pp,
        typeName: Ji.ZodEnum,
        ...Xp(ip)
      })
    }
    vi.create = (pp, ip) => new vi({
      value: pp,
      typeName: Ji.ZodLiteral,
      ...Xp(ip)
    });
    class Hi extends lp {
      _parse(pp) {
        if ("string" !== typeof pp.data) {
          const ip = this._getOrReturnCtx(pp),
            cp = this._def.values;
          return tp(ip, {
            expected: xp.joinValues(cp),
            received: ip.parsedType,
            code: Pp.invalid_type
          }), dp
        }
        if (-1 === this._def.values.indexOf(pp.data)) {
          const ip = this._getOrReturnCtx(pp),
            cp = this._def.values;
          return tp(ip, {
            received: ip.data,
            code: Pp.invalid_enum_value,
            options: cp
          }), dp
        }
        return jp(pp.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const pp = {};
        for (const ip of this._def.values) pp[ip] = ip;
        return pp
      }
      get Values() {
        const pp = {};
        for (const ip of this._def.values) pp[ip] = ip;
        return pp
      }
      get Enum() {
        const pp = {};
        for (const ip of this._def.values) pp[ip] = ip;
        return pp
      }
      extract(pp) {
        return Hi.create(pp)
      }
      exclude(pp) {
        return Hi.create(this.options.filter((ip => !pp.includes(ip))))
      }
    }
    Hi.create = ti;
    class di extends lp {
      _parse(pp) {
        const ip = xp.getValidEnumValues(this._def.values),
          cp = this._getOrReturnCtx(pp);
        if (cp.parsedType !== Dp.string && cp.parsedType !== Dp.number) {
          const pp = xp.objectValues(ip);
          return tp(cp, {
            expected: xp.joinValues(pp),
            received: cp.parsedType,
            code: Pp.invalid_type
          }), dp
        }
        if (-1 === ip.indexOf(pp.data)) {
          const pp = xp.objectValues(ip);
          return tp(cp, {
            received: cp.data,
            code: Pp.invalid_enum_value,
            options: pp
          }), dp
        }
        return jp(pp.data)
      }
      get enum() {
        return this._def.values
      }
    }
    di.create = (pp, ip) => new di({
      values: pp,
      typeName: Ji.ZodNativeEnum,
      ...Xp(ip)
    });
    class ei extends lp {
      unwrap() {
        return this._def.type
      }
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp);
        if (ip.parsedType !== Dp.promise && !1 === ip.common.async) return tp(ip, {
          code: Pp.invalid_type,
          expected: Dp.promise,
          received: ip.parsedType
        }), dp;
        const cp = ip.parsedType === Dp.promise ? ip.data : Promise.resolve(ip.data);
        return jp(cp.then((pp => this._def.type.parseAsync(pp, {
          path: ip.path,
          errorMap: ip.common.contextualErrorMap
        }))))
      }
    }
    ei.create = (pp, ip) => new ei({
      type: pp,
      typeName: Ji.ZodPromise,
      ...Xp(ip)
    });
    class ui extends lp {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Ji.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp), Op = this._def.effect || null, op = {
          addIssue: pp => {
            tp(cp, pp), pp.fatal ? ip.abort() : ip.pU()
          },
          get path() {
            return cp.path
          }
        };
        if (op.addIssue = op.addIssue.bind(op), "preprocess" === Op.type) {
          const pp = Op.transform(cp.data, op);
          return cp.common.issues.length ? {
            status: "pU",
            value: cp.data
          } : cp.common.async ? Promise.resolve(pp).then((pp => this._def.schema._parseAsync({
            data: pp,
            path: cp.path,
            parent: cp
          }))) : this._def.schema._parseSync({
            data: pp,
            path: cp.path,
            parent: cp
          })
        }
        if ("refinement" === Op.type) {
          const pp = pp => {
            const ip = Op.refinement(pp, op);
            if (cp.common.async) return Promise.resolve(ip);
            if (ip instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return pp
          };
          if (!1 === cp.common.async) {
            const Op = this._def.schema._parseSync({
              data: cp.data,
              path: cp.path,
              parent: cp
            });
            return "aborted" === Op.status ? dp : ("pU" === Op.status && ip.pU(), pp(Op.value), {
              status: ip.value,
              value: Op.value
            })
          }
          return this._def.schema._parseAsync({
            data: cp.data,
            path: cp.path,
            parent: cp
          }).then((cp => "aborted" === cp.status ? dp : ("pU" === cp.status && ip.pU(), pp(cp.value).then((() => ({
            status: ip.value,
            value: cp.value
          }))))))
        }
        if ("transform" === Op.type) {
          if (!1 === cp.common.async) {
            const pp = this._def.schema._parseSync({
              data: cp.data,
              path: cp.path,
              parent: cp
            });
            if (!Rp(pp)) return pp;
            const Ip = Op.transform(pp.value, op);
            if (Ip instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: ip.value,
              value: Ip
            }
          }
          return this._def.schema._parseAsync({
            data: cp.data,
            path: cp.path,
            parent: cp
          }).then((pp => Rp(pp) ? Promise.resolve(Op.transform(pp.value, op)).then((pp => ({
            status: ip.value,
            value: pp
          }))) : pp))
        }
        xp.assertNever(Op)
      }
    }
    ui.create = (pp, ip, cp) => new ui({
      schema: pp,
      typeName: Ji.ZodEffects,
      effect: ip,
      ...Xp(cp)
    }), ui.createWithPreprocess = (pp, ip, cp) => new ui({
      schema: ip,
      effect: {
        type: "preprocess",
        transform: pp
      },
      typeName: Ji.ZodEffects,
      ...Xp(cp)
    });
    class ji extends lp {
      _parse(pp) {
        return this._getType(pp) === Dp.undefined ? jp(void 0) : this._def.innerType._parse(pp)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    ji.create = (pp, ip) => new ji({
      innerType: pp,
      typeName: Ji.ZodOptional,
      ...Xp(ip)
    });
    class ki extends lp {
      _parse(pp) {
        return this._getType(pp) === Dp.null ? jp(null) : this._def.innerType._parse(pp)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    ki.create = (pp, ip) => new ki({
      innerType: pp,
      typeName: Ji.ZodNullable,
      ...Xp(ip)
    });
    class mi extends lp {
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp);
        let cp = ip.data;
        return ip.parsedType === Dp.undefined && (cp = this._def.defaultValue()), this._def.innerType._parse({
          data: cp,
          path: ip.path,
          parent: ip
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    mi.create = (pp, ip) => new mi({
      innerType: pp,
      typeName: Ji.ZodDefault,
      defaultValue: "function" === typeof ip.default ? ip.default : () => ip.default,
      ...Xp(ip)
    });
    class Ri extends lp {
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp), cp = {
          ...ip,
          common: {
            ...ip.common,
            issues: []
          }
        }, Op = this._def.innerType._parse({
          data: cp.data,
          path: cp.path,
          parent: {
            ...cp
          }
        });
        return qp(Op) ? Op.then((pp => ({
          status: "valid",
          value: "valid" === pp.status ? pp.value : this._def.catchValue({
            get error() {
              return new Wp(cp.common.issues)
            },
            input: cp.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Op.status ? Op.value : this._def.catchValue({
            get error() {
              return new Wp(cp.common.issues)
            },
            input: cp.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Ri.create = (pp, ip) => new Ri({
      innerType: pp,
      typeName: Ji.ZodCatch,
      catchValue: "function" === typeof ip.catch ? ip.catch : () => ip.catch,
      ...Xp(ip)
    });
    class qi extends lp {
      _parse(pp) {
        if (this._getType(pp) !== Dp.nan) {
          const ip = this._getOrReturnCtx(pp);
          return tp(ip, {
            code: Pp.invalid_type,
            expected: Dp.nan,
            received: ip.parsedType
          }), dp
        }
        return {
          status: "valid",
          value: pp.data
        }
      }
    }
    qi.create = pp => new qi({
      typeName: Ji.ZodNaN,
      ...Xp(pp)
    });
    const Mi = Symbol("zod_brand");
    class Ci extends lp {
      _parse(pp) {
        const {
          ctx: ip
        } = this._processInputParams(pp), cp = ip.data;
        return this._def.type._parse({
          data: cp,
          path: ip.path,
          parent: ip
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Ei extends lp {
      _parse(pp) {
        const {
          status: ip,
          ctx: cp
        } = this._processInputParams(pp);
        if (cp.common.async) {
          return (async () => {
            const pp = await this._def.in._parseAsync({
              data: cp.data,
              path: cp.path,
              parent: cp
            });
            return "aborted" === pp.status ? dp : "pU" === pp.status ? (ip.pU(), ep(pp.value)) : this._def.out._parseAsync({
              data: pp.value,
              path: cp.path,
              parent: cp
            })
          })()
        } {
          const pp = this._def.in._parseSync({
            data: cp.data,
            path: cp.path,
            parent: cp
          });
          return "aborted" === pp.status ? dp : "pU" === pp.status ? (ip.pU(), {
            status: "pU",
            value: pp.value
          }) : this._def.out._parseSync({
            data: pp.value,
            path: cp.path,
            parent: cp
          })
        }
      }
      static create(pp, ip) {
        return new Ei({
          in: pp,
          out: ip,
          typeName: Ji.ZodPipeline
        })
      }
    }
    class Xi extends lp {
      _parse(pp) {
        const ip = this._def.innerType._parse(pp);
        return Rp(ip) && (ip.value = Object.freeze(ip.value)), ip
      }
    }
    Xi.create = (pp, ip) => new Xi({
      innerType: pp,
      typeName: Ji.ZodReadonly,
      ...Xp(ip)
    });
    const li = function(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cp = arguments.length > 2 ? arguments[2] : void 0;
        return pp ? Kp.create().superRefine(((Op, op) => {
          var Ip, Sp;
          if (!pp(Op)) {
            const pp = "function" === typeof ip ? ip(Op) : "string" === typeof ip ? {
                message: ip
              } : ip,
              xp = null === (Sp = null !== (Ip = pp.fatal) && void 0 !== Ip ? Ip : cp) || void 0 === Sp || Sp,
              Lp = "string" === typeof pp ? {
                message: pp
              } : pp;
            op.addIssue({
              code: "custom",
              ...Lp,
              fatal: xp
            })
          }
        })) : Kp.create()
      },
      Qi = {
        object: Ii.lazycreate
      };
    var Ji;
    ! function(pp) {
      pp.ZodString = "ZodString", pp.ZodNumber = "ZodNumber", pp.ZodNaN = "ZodNaN", pp.ZodBigInt = "ZodBigInt", pp.ZodBoolean = "ZodBoolean", pp.ZodDate = "ZodDate", pp.ZodSymbol = "ZodSymbol", pp.ZodUndefined = "ZodUndefined", pp.ZodNull = "ZodNull", pp.ZodAny = "ZodAny", pp.ZodUnknown = "ZodUnknown", pp.ZodNever = "ZodNever", pp.ZodVoid = "ZodVoid", pp.ZodArray = "ZodArray", pp.ZodObject = "ZodObject", pp.ZodUnion = "ZodUnion", pp.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", pp.ZodIntersection = "ZodIntersection", pp.ZodTuple = "ZodTuple", pp.ZodRecord = "ZodRecord", pp.ZodMap = "ZodMap", pp.ZodSet = "ZodSet", pp.ZodFunction = "ZodFunction", pp.ZodLazy = "ZodLazy", pp.ZodLiteral = "ZodLiteral", pp.ZodEnum = "ZodEnum", pp.ZodEffects = "ZodEffects", pp.ZodNativeEnum = "ZodNativeEnum", pp.ZodOptional = "ZodOptional", pp.ZodNullable = "ZodNullable", pp.ZodDefault = "ZodDefault", pp.ZodCatch = "ZodCatch", pp.ZodPromise = "ZodPromise", pp.ZodBranded = "ZodBranded", pp.ZodPipeline = "ZodPipeline", pp.ZodReadonly = "ZodReadonly"
    }(Ji || (Ji = {}));
    const Bi = ap.create,
      Ni = Fp.create,
      Ti = qi.create,
      fi = gp.create,
      bi = Gp.create,
      ai = rp.create,
      ni = Zp.create,
      Fi = zp.create,
      gi = sp.create,
      Gi = Kp.create,
      ri = Vp.create,
      Zi = ii.create,
      zi = ci.create,
      si = Oi.create,
      Ki = Ii.create,
      Vi = Ii.strictCreate,
      pc = Si.create,
      ic = Li.create,
      cc = Di.create,
      Oc = Ai.create,
      oc = Pi.create,
      Ic = Wi.create,
      Sc = yi.create,
      xc = Ui.create,
      Lc = wi.create,
      Yc = vi.create,
      Dc = Hi.create,
      Ac = di.create,
      Pc = ei.create,
      Wc = ui.create,
      yc = ji.create,
      Uc = ki.create,
      wc = ui.createWithPreprocess,
      vc = Ei.create,
      tc = {
        string: pp => ap.create({
          ...pp,
          coerce: !0
        }),
        number: pp => Fp.create({
          ...pp,
          coerce: !0
        }),
        boolean: pp => Gp.create({
          ...pp,
          coerce: !0
        }),
        bigint: pp => gp.create({
          ...pp,
          coerce: !0
        }),
        date: pp => rp.create({
          ...pp,
          coerce: !0
        })
      },
      Hc = dp;
    var dc = Object.freeze({
        __proto__: null,
        defaultErrorMap: yp,
        setErrorMap: function(pp) {
          Up = pp
        },
        getErrorMap: wp,
        makeIssue: vp,
        EMPTY_PATH: [],
        addIssueToContext: tp,
        ParseStatus: Hp,
        INVALID: dp,
        DIRTY: ep,
        OK: jp,
        isAborted: kp,
        isDirty: mp,
        isValid: Rp,
        isAsync: qp,
        get util() {
          return xp
        },
        get objectUtil() {
          return Lp
        },
        ZodParsedType: Dp,
        getParsedType: Ap,
        ZodType: lp,
        ZodString: ap,
        ZodNumber: Fp,
        ZodBigInt: gp,
        ZodBoolean: Gp,
        ZodDate: rp,
        ZodSymbol: Zp,
        ZodUndefined: zp,
        ZodNull: sp,
        ZodAny: Kp,
        ZodUnknown: Vp,
        ZodNever: ii,
        ZodVoid: ci,
        ZodArray: Oi,
        ZodObject: Ii,
        ZodUnion: Si,
        ZodDiscriminatedUnion: Li,
        ZodIntersection: Di,
        ZodTuple: Ai,
        ZodRecord: Pi,
        ZodMap: Wi,
        ZodSet: yi,
        ZodFunction: Ui,
        ZodLazy: wi,
        ZodLiteral: vi,
        ZodEnum: Hi,
        ZodNativeEnum: di,
        ZodPromise: ei,
        ZodEffects: ui,
        ZodTransformer: ui,
        ZodOptional: ji,
        ZodNullable: ki,
        ZodDefault: mi,
        ZodCatch: Ri,
        ZodNaN: qi,
        BRAND: Mi,
        ZodBranded: Ci,
        ZodPipeline: Ei,
        ZodReadonly: Xi,
        custom: li,
        Schema: lp,
        ZodSchema: lp,
        late: Qi,
        get ZodFirstPartyTypeKind() {
          return Ji
        },
        coerce: tc,
        any: Gi,
        array: si,
        bigint: fi,
        boolean: bi,
        date: ai,
        discriminatedUnion: ic,
        effect: Wc,
        enum: Dc,
        function: xc,
        instanceof: function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${pp.name}`
          };
          return li((ip => ip instanceof pp), ip)
        },
        intersection: cc,
        lazy: Lc,
        literal: Yc,
        map: Ic,
        nan: Ti,
        nativeEnum: Ac,
        never: Zi,
        null: gi,
        nullable: Uc,
        number: Ni,
        object: Ki,
        oboolean: () => bi().optional(),
        onumber: () => Ni().optional(),
        optional: yc,
        ostring: () => Bi().optional(),
        pipeline: vc,
        preprocess: wc,
        promise: Pc,
        record: oc,
        set: Sc,
        strictObject: Vi,
        string: Bi,
        symbol: ni,
        transformer: Wc,
        tuple: Oc,
        undefined: Fi,
        union: pc,
        unknown: ri,
        void: zi,
        NEVER: Hc,
        ZodIssueCode: Pp,
        quotelessJson: pp => JSON.stringify(pp, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Wp
      }),
      ec = {
        exports: {}
      };
    ! function(pp) {
      var ip = function(pp) {
        var cp = 1e7,
          Op = 9007199254740992,
          op = Pp(Op),
          Ip = "0123456789abcdefghijklmnopqrstuvwxyz",
          Sp = "function" === typeof BigInt;

        function xp(pp, ip, cp, Op) {
          return "undefined" === typeof pp ? xp[0] : "undefined" !== typeof ip && (10 !== +ip || cp) ? Gp(pp, ip, cp, Op) : Kp(pp)
        }

        function Lp(pp, ip) {
          this.value = pp, this.sign = ip, this.isSmall = !1
        }

        function Yp(pp) {
          this.value = pp, this.sign = pp < 0, this.isSmall = !0
        }

        function Dp(pp) {
          this.value = pp
        }

        function Ap(pp) {
          return -Op < pp && pp < Op
        }

        function Pp(pp) {
          return pp < 1e7 ? [pp] : pp < 1e14 ? [pp % 1e7, Math.floor(pp / 1e7)] : [pp % 1e7, Math.floor(pp / 1e7) % 1e7, Math.floor(pp / 1e14)]
        }

        function Wp(pp) {
          yp(pp);
          var ip = pp.length;
          if (ip < 4 && Xp(pp, op) < 0) switch (ip) {
            case 0:
              return 0;
            case 1:
              return pp[0];
            case 2:
              return pp[0] + pp[1] * cp;
            default:
              return pp[0] + (pp[1] + pp[2] * cp) * cp
          }
          return pp
        }

        function yp(pp) {
          for (var ip = pp.length; 0 === pp[--ip];);
          pp.length = ip + 1
        }

        function Up(pp) {
          for (var ip = new Array(pp), cp = -1; ++cp < pp;) ip[cp] = 0;
          return ip
        }

        function wp(pp) {
          return pp > 0 ? Math.floor(pp) : Math.ceil(pp)
        }

        function vp(pp, ip) {
          var Op, op, Ip = pp.length,
            Sp = ip.length,
            xp = new Array(Ip),
            Lp = 0,
            Yp = cp;
          for (op = 0; op < Sp; op++) Lp = (Op = pp[op] + ip[op] + Lp) >= Yp ? 1 : 0, xp[op] = Op - Lp * Yp;
          for (; op < Ip;) Lp = (Op = pp[op] + Lp) === Yp ? 1 : 0, xp[op++] = Op - Lp * Yp;
          return Lp > 0 && xp.push(Lp), xp
        }

        function tp(pp, ip) {
          return pp.length >= ip.length ? vp(pp, ip) : vp(ip, pp)
        }

        function Hp(pp, ip) {
          var Op, op, Ip = pp.length,
            Sp = new Array(Ip),
            xp = cp;
          for (op = 0; op < Ip; op++) Op = pp[op] - xp + ip, ip = Math.floor(Op / xp), Sp[op] = Op - ip * xp, ip += 1;
          for (; ip > 0;) Sp[op++] = ip % xp, ip = Math.floor(ip / xp);
          return Sp
        }

        function dp(pp, ip) {
          var Op, op, Ip = pp.length,
            Sp = ip.length,
            xp = new Array(Ip),
            Lp = 0,
            Yp = cp;
          for (Op = 0; Op < Sp; Op++)(op = pp[Op] - Lp - ip[Op]) < 0 ? (op += Yp, Lp = 1) : Lp = 0, xp[Op] = op;
          for (Op = Sp; Op < Ip; Op++) {
            if (!((op = pp[Op] - Lp) < 0)) {
              xp[Op++] = op;
              break
            }
            op += Yp, xp[Op] = op
          }
          for (; Op < Ip; Op++) xp[Op] = pp[Op];
          return yp(xp), xp
        }

        function ep(pp, ip, Op) {
          var op, Ip, Sp = pp.length,
            xp = new Array(Sp),
            Dp = -ip,
            Ap = cp;
          for (op = 0; op < Sp; op++) Ip = pp[op] + Dp, Dp = Math.floor(Ip / Ap), Ip %= Ap, xp[op] = Ip < 0 ? Ip + Ap : Ip;
          return "number" === typeof(xp = Wp(xp)) ? (Op && (xp = -xp), new Yp(xp)) : new Lp(xp, Op)
        }

        function jp(pp, ip) {
          var Op, op, Ip, Sp, xp = pp.length,
            Lp = ip.length,
            Yp = Up(xp + Lp),
            Dp = cp;
          for (Ip = 0; Ip < xp; ++Ip) {
            Sp = pp[Ip];
            for (var Ap = 0; Ap < Lp; ++Ap) Op = Sp * ip[Ap] + Yp[Ip + Ap], op = Math.floor(Op / Dp), Yp[Ip + Ap] = Op - op * Dp, Yp[Ip + Ap + 1] += op
          }
          return yp(Yp), Yp
        }

        function kp(pp, ip) {
          var Op, op, Ip = pp.length,
            Sp = new Array(Ip),
            xp = cp,
            Lp = 0;
          for (op = 0; op < Ip; op++) Op = pp[op] * ip + Lp, Lp = Math.floor(Op / xp), Sp[op] = Op - Lp * xp;
          for (; Lp > 0;) Sp[op++] = Lp % xp, Lp = Math.floor(Lp / xp);
          return Sp
        }

        function mp(pp, ip) {
          for (var cp = []; ip-- > 0;) cp.push(0);
          return cp.concat(pp)
        }

        function Rp(pp, ip) {
          var cp = Math.max(pp.length, ip.length);
          if (cp <= 30) return jp(pp, ip);
          cp = Math.ceil(cp / 2);
          var Op = pp.slice(cp),
            op = pp.slice(0, cp),
            Ip = ip.slice(cp),
            Sp = ip.slice(0, cp),
            xp = Rp(op, Sp),
            Lp = Rp(Op, Ip),
            Yp = Rp(tp(op, Op), tp(Sp, Ip)),
            Dp = tp(tp(xp, mp(dp(dp(Yp, xp), Lp), cp)), mp(Lp, 2 * cp));
          return yp(Dp), Dp
        }

        function qp(pp, ip, Op) {
          return new Lp(pp < cp ? kp(ip, pp) : jp(ip, Pp(pp)), Op)
        }

        function Mp(pp) {
          var ip, Op, op, Ip, Sp = pp.length,
            xp = Up(Sp + Sp),
            Lp = cp;
          for (op = 0; op < Sp; op++) {
            Op = 0 - (Ip = pp[op]) * Ip;
            for (var Yp = op; Yp < Sp; Yp++) ip = Ip * pp[Yp] * 2 + xp[op + Yp] + Op, Op = Math.floor(ip / Lp), xp[op + Yp] = ip - Op * Lp;
            xp[op + Sp] = Op
          }
          return yp(xp), xp
        }

        function Cp(pp, ip) {
          var Op, op, Ip, Sp, xp = pp.length,
            Lp = Up(xp),
            Yp = cp;
          for (Ip = 0, Op = xp - 1; Op >= 0; --Op) Ip = (Sp = Ip * Yp + pp[Op]) - (op = wp(Sp / ip)) * ip, Lp[Op] = 0 | op;
          return [Lp, 0 | Ip]
        }

        function Ep(pp, ip) {
          var Op, op = Kp(ip);
          if (Sp) return [new Dp(pp.value / op.value), new Dp(pp.value % op.value)];
          var Ip, Ap = pp.value,
            vp = op.value;
          if (0 === vp) throw new Error("Cannot divide by zero");
          if (pp.isSmall) return op.isSmall ? [new Yp(wp(Ap / vp)), new Yp(Ap % vp)] : [xp[0], pp];
          if (op.isSmall) {
            if (1 === vp) return [pp, xp[0]];
            if (-1 == vp) return [pp.gp(), xp[0]];
            var tp = Math.abs(vp);
            if (tp < cp) {
              Ip = Wp((Op = Cp(Ap, tp))[0]);
              var Hp = Op[1];
              return pp.sign && (Hp = -Hp), "number" === typeof Ip ? (pp.sign !== op.sign && (Ip = -Ip), [new Yp(Ip), new Yp(Hp)]) : [new Lp(Ip, pp.sign !== op.sign), new Yp(Hp)]
            }
            vp = Pp(tp)
          }
          var ep = Xp(Ap, vp);
          if (-1 === ep) return [xp[0], pp];
          if (0 === ep) return [xp[pp.sign === op.sign ? 1 : -1], xp[0]];
          Op = Ap.length + vp.length <= 200 ? function(pp, ip) {
            var Op, op, Ip, Sp, xp, Lp, Yp, Dp = pp.length,
              Ap = ip.length,
              Pp = cp,
              yp = Up(ip.length),
              wp = ip[Ap - 1],
              vp = Math.ceil(Pp / (2 * wp)),
              tp = kp(pp, vp),
              Hp = kp(ip, vp);
            for (tp.length <= Dp && tp.push(0), Hp.push(0), wp = Hp[Ap - 1], op = Dp - Ap; op >= 0; op--) {
              for (Op = Pp - 1, tp[op + Ap] !== wp && (Op = Math.floor((tp[op + Ap] * Pp + tp[op + Ap - 1]) / wp)), Ip = 0, Sp = 0, Lp = Hp.length, xp = 0; xp < Lp; xp++) Ip += Op * Hp[xp], Yp = Math.floor(Ip / Pp), Sp += tp[op + xp] - (Ip - Yp * Pp), Ip = Yp, Sp < 0 ? (tp[op + xp] = Sp + Pp, Sp = -1) : (tp[op + xp] = Sp, Sp = 0);
              for (; 0 !== Sp;) {
                for (Op -= 1, Ip = 0, xp = 0; xp < Lp; xp++)(Ip += tp[op + xp] - Pp + Hp[xp]) < 0 ? (tp[op + xp] = Ip + Pp, Ip = 0) : (tp[op + xp] = Ip, Ip = 1);
                Sp += Ip
              }
              yp[op] = Op
            }
            return tp = Cp(tp, vp)[0], [Wp(yp), Wp(tp)]
          }(Ap, vp) : function(pp, ip) {
            for (var Op, op, Ip, Sp, xp, Lp = pp.length, Yp = ip.length, Dp = [], Ap = [], Pp = cp; Lp;)
              if (Ap.unshift(pp[--Lp]), yp(Ap), Xp(Ap, ip) < 0) Dp.push(0);
              else {
                Ip = Ap[(op = Ap.length) - 1] * Pp + Ap[op - 2], Sp = ip[Yp - 1] * Pp + ip[Yp - 2], op > Yp && (Ip = (Ip + 1) * Pp), Op = Math.ceil(Ip / Sp);
                do {
                  if (Xp(xp = kp(ip, Op), Ap) <= 0) break;
                  Op--
                } while (Op);
                Dp.push(Op), Ap = dp(Ap, xp)
              } return Dp.reverse(), [Wp(Dp), Wp(Ap)]
          }(Ap, vp), Ip = Op[0];
          var jp = pp.sign !== op.sign,
            mp = Op[1],
            Rp = pp.sign;
          return "number" === typeof Ip ? (jp && (Ip = -Ip), Ip = new Yp(Ip)) : Ip = new Lp(Ip, jp), "number" === typeof mp ? (Rp && (mp = -mp), mp = new Yp(mp)) : mp = new Lp(mp, Rp), [Ip, mp]
        }

        function Xp(pp, ip) {
          if (pp.length !== ip.length) return pp.length > ip.length ? 1 : -1;
          for (var cp = pp.length - 1; cp >= 0; cp--)
            if (pp[cp] !== ip[cp]) return pp[cp] > ip[cp] ? 1 : -1;
          return 0
        }

        function lp(pp) {
          var ip = pp.abs();
          return !ip.isUnit() && (!!(ip.equals(2) || ip.equals(3) || ip.equals(5)) || !(ip.isEven() || ip.isDivisibleBy(3) || ip.isDivisibleBy(5)) && (!!ip.lesser(49) || void 0))
        }

        function Qp(pp, cp) {
          for (var Op, op, Ip, Sp = pp.prev(), xp = Sp, Lp = 0; xp.isEven();) xp = xp.divide(2), Lp++;
          pp: for (op = 0; op < cp.length; op++)
            if (!pp.lesser(cp[op]) && !(Ip = ip(cp[op]).modPow(xp, pp)).isUnit() && !Ip.equals(Sp)) {
              for (Op = Lp - 1; 0 != Op; Op--) {
                if ((Ip = Ip.square().mod(pp)).isUnit()) return !1;
                if (Ip.equals(Sp)) continue pp
              }
              return !1
            }
          return !0
        }
        Lp.prototype = Object.create(xp.prototype), Yp.prototype = Object.create(xp.prototype), Dp.prototype = Object.create(xp.prototype), Lp.prototype.add = function(pp) {
          var ip = Kp(pp);
          if (this.sign !== ip.sign) return this.subtract(ip.gp());
          var cp = this.value,
            Op = ip.value;
          return ip.isSmall ? new Lp(Hp(cp, Math.abs(Op)), this.sign) : new Lp(tp(cp, Op), this.sign)
        }, Lp.prototype.plus = Lp.prototype.add, Yp.prototype.add = function(pp) {
          var ip = Kp(pp),
            cp = this.value;
          if (cp < 0 !== ip.sign) return this.subtract(ip.gp());
          var Op = ip.value;
          if (ip.isSmall) {
            if (Ap(cp + Op)) return new Yp(cp + Op);
            Op = Pp(Math.abs(Op))
          }
          return new Lp(Hp(Op, Math.abs(cp)), cp < 0)
        }, Yp.prototype.plus = Yp.prototype.add, Dp.prototype.add = function(pp) {
          return new Dp(this.value + Kp(pp).value)
        }, Dp.prototype.plus = Dp.prototype.add, Lp.prototype.subtract = function(pp) {
          var ip = Kp(pp);
          if (this.sign !== ip.sign) return this.add(ip.gp());
          var cp = this.value,
            Op = ip.value;
          return ip.isSmall ? ep(cp, Math.abs(Op), this.sign) : function(pp, ip, cp) {
            var Op;
            return Xp(pp, ip) >= 0 ? Op = dp(pp, ip) : (Op = dp(ip, pp), cp = !cp), "number" === typeof(Op = Wp(Op)) ? (cp && (Op = -Op), new Yp(Op)) : new Lp(Op, cp)
          }(cp, Op, this.sign)
        }, Lp.prototype.minus = Lp.prototype.subtract, Yp.prototype.subtract = function(pp) {
          var ip = Kp(pp),
            cp = this.value;
          if (cp < 0 !== ip.sign) return this.add(ip.gp());
          var Op = ip.value;
          return ip.isSmall ? new Yp(cp - Op) : ep(Op, Math.abs(cp), cp >= 0)
        }, Yp.prototype.minus = Yp.prototype.subtract, Dp.prototype.subtract = function(pp) {
          return new Dp(this.value - Kp(pp).value)
        }, Dp.prototype.minus = Dp.prototype.subtract, Lp.prototype.gp = function() {
          return new Lp(this.value, !this.sign)
        }, Yp.prototype.gp = function() {
          var pp = this.sign,
            ip = new Yp(-this.value);
          return ip.sign = !pp, ip
        }, Dp.prototype.gp = function() {
          return new Dp(-this.value)
        }, Lp.prototype.abs = function() {
          return new Lp(this.value, !1)
        }, Yp.prototype.abs = function() {
          return new Yp(Math.abs(this.value))
        }, Dp.prototype.abs = function() {
          return new Dp(this.value >= 0 ? this.value : -this.value)
        }, Lp.prototype.multiply = function(pp) {
          var ip, Op, op, Ip = Kp(pp),
            Sp = this.value,
            Yp = Ip.value,
            Dp = this.sign !== Ip.sign;
          if (Ip.isSmall) {
            if (0 === Yp) return xp[0];
            if (1 === Yp) return this;
            if (-1 === Yp) return this.gp();
            if ((ip = Math.abs(Yp)) < cp) return new Lp(kp(Sp, ip), Dp);
            Yp = Pp(ip)
          }
          return Op = Sp.length, op = Yp.length, new Lp(-.012 * Op - .012 * op + 15e-6 * Op * op > 0 ? Rp(Sp, Yp) : jp(Sp, Yp), Dp)
        }, Lp.prototype.times = Lp.prototype.multiply, Yp.prototype._multiplyBySmall = function(pp) {
          return Ap(pp.value * this.value) ? new Yp(pp.value * this.value) : qp(Math.abs(pp.value), Pp(Math.abs(this.value)), this.sign !== pp.sign)
        }, Lp.prototype._multiplyBySmall = function(pp) {
          return 0 === pp.value ? xp[0] : 1 === pp.value ? this : -1 === pp.value ? this.gp() : qp(Math.abs(pp.value), this.value, this.sign !== pp.sign)
        }, Yp.prototype.multiply = function(pp) {
          return Kp(pp)._multiplyBySmall(this)
        }, Yp.prototype.times = Yp.prototype.multiply, Dp.prototype.multiply = function(pp) {
          return new Dp(this.value * Kp(pp).value)
        }, Dp.prototype.times = Dp.prototype.multiply, Lp.prototype.square = function() {
          return new Lp(Mp(this.value), !1)
        }, Yp.prototype.square = function() {
          var pp = this.value * this.value;
          return Ap(pp) ? new Yp(pp) : new Lp(Mp(Pp(Math.abs(this.value))), !1)
        }, Dp.prototype.square = function(pp) {
          return new Dp(this.value * this.value)
        }, Lp.prototype.divmod = function(pp) {
          var ip = Ep(this, pp);
          return {
            quotient: ip[0],
            remainder: ip[1]
          }
        }, Dp.prototype.divmod = Yp.prototype.divmod = Lp.prototype.divmod, Lp.prototype.divide = function(pp) {
          return Ep(this, pp)[0]
        }, Dp.prototype.over = Dp.prototype.divide = function(pp) {
          return new Dp(this.value / Kp(pp).value)
        }, Yp.prototype.over = Yp.prototype.divide = Lp.prototype.over = Lp.prototype.divide, Lp.prototype.mod = function(pp) {
          return Ep(this, pp)[1]
        }, Dp.prototype.mod = Dp.prototype.remainder = function(pp) {
          return new Dp(this.value % Kp(pp).value)
        }, Yp.prototype.remainder = Yp.prototype.mod = Lp.prototype.remainder = Lp.prototype.mod, Lp.prototype.pow = function(pp) {
          var ip, cp, Op, op = Kp(pp),
            Ip = this.value,
            Sp = op.value;
          if (0 === Sp) return xp[1];
          if (0 === Ip) return xp[0];
          if (1 === Ip) return xp[1];
          if (-1 === Ip) return op.isEven() ? xp[1] : xp[-1];
          if (op.sign) return xp[0];
          if (!op.isSmall) throw new Error("The exponent " + op.toString() + " is too large.");
          if (this.isSmall && Ap(ip = Math.pow(Ip, Sp))) return new Yp(wp(ip));
          for (cp = this, Op = xp[1]; !0 & Sp && (Op = Op.times(cp), --Sp), 0 !== Sp;) Sp /= 2, cp = cp.square();
          return Op
        }, Yp.prototype.pow = Lp.prototype.pow, Dp.prototype.pow = function(pp) {
          var ip = Kp(pp),
            cp = this.value,
            Op = ip.value,
            op = BigInt(0),
            Ip = BigInt(1),
            Sp = BigInt(2);
          if (Op === op) return xp[1];
          if (cp === op) return xp[0];
          if (cp === Ip) return xp[1];
          if (cp === BigInt(-1)) return ip.isEven() ? xp[1] : xp[-1];
          if (ip.isNegative()) return new Dp(op);
          for (var Lp = this, Yp = xp[1];
            (Op & Ip) === Ip && (Yp = Yp.times(Lp), --Op), Op !== op;) Op /= Sp, Lp = Lp.square();
          return Yp
        }, Lp.prototype.modPow = function(pp, ip) {
          if (pp = Kp(pp), (ip = Kp(ip)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var cp = xp[1],
            Op = this.mod(ip);
          for (pp.isNegative() && (pp = pp.multiply(xp[-1]), Op = Op.modInv(ip)); pp.isPositive();) {
            if (Op.isZero()) return xp[0];
            pp.isOdd() && (cp = cp.multiply(Op).mod(ip)), pp = pp.divide(2), Op = Op.square().mod(ip)
          }
          return cp
        }, Dp.prototype.modPow = Yp.prototype.modPow = Lp.prototype.modPow, Lp.prototype.compareAbs = function(pp) {
          var ip = Kp(pp),
            cp = this.value,
            Op = ip.value;
          return ip.isSmall ? 1 : Xp(cp, Op)
        }, Yp.prototype.compareAbs = function(pp) {
          var ip = Kp(pp),
            cp = Math.abs(this.value),
            Op = ip.value;
          return ip.isSmall ? cp === (Op = Math.abs(Op)) ? 0 : cp > Op ? 1 : -1 : -1
        }, Dp.prototype.compareAbs = function(pp) {
          var ip = this.value,
            cp = Kp(pp).value;
          return (ip = ip >= 0 ? ip : -ip) === (cp = cp >= 0 ? cp : -cp) ? 0 : ip > cp ? 1 : -1
        }, Lp.prototype.compare = function(pp) {
          if (pp === 1 / 0) return -1;
          if (pp === -1 / 0) return 1;
          var ip = Kp(pp),
            cp = this.value,
            Op = ip.value;
          return this.sign !== ip.sign ? ip.sign ? 1 : -1 : ip.isSmall ? this.sign ? -1 : 1 : Xp(cp, Op) * (this.sign ? -1 : 1)
        }, Lp.prototype.compareTo = Lp.prototype.compare, Yp.prototype.compare = function(pp) {
          if (pp === 1 / 0) return -1;
          if (pp === -1 / 0) return 1;
          var ip = Kp(pp),
            cp = this.value,
            Op = ip.value;
          return ip.isSmall ? cp == Op ? 0 : cp > Op ? 1 : -1 : cp < 0 !== ip.sign ? cp < 0 ? -1 : 1 : cp < 0 ? 1 : -1
        }, Yp.prototype.compareTo = Yp.prototype.compare, Dp.prototype.compare = function(pp) {
          if (pp === 1 / 0) return -1;
          if (pp === -1 / 0) return 1;
          var ip = this.value,
            cp = Kp(pp).value;
          return ip === cp ? 0 : ip > cp ? 1 : -1
        }, Dp.prototype.compareTo = Dp.prototype.compare, Lp.prototype.equals = function(pp) {
          return 0 === this.compare(pp)
        }, Dp.prototype.eq = Dp.prototype.equals = Yp.prototype.eq = Yp.prototype.equals = Lp.prototype.eq = Lp.prototype.equals, Lp.prototype.notEquals = function(pp) {
          return 0 !== this.compare(pp)
        }, Dp.prototype.neq = Dp.prototype.notEquals = Yp.prototype.neq = Yp.prototype.notEquals = Lp.prototype.neq = Lp.prototype.notEquals, Lp.prototype.greater = function(pp) {
          return this.compare(pp) > 0
        }, Dp.prototype.gt = Dp.prototype.greater = Yp.prototype.gt = Yp.prototype.greater = Lp.prototype.gt = Lp.prototype.greater, Lp.prototype.lesser = function(pp) {
          return this.compare(pp) < 0
        }, Dp.prototype.lt = Dp.prototype.lesser = Yp.prototype.lt = Yp.prototype.lesser = Lp.prototype.lt = Lp.prototype.lesser, Lp.prototype.greaterOrEquals = function(pp) {
          return this.compare(pp) >= 0
        }, Dp.prototype.geq = Dp.prototype.greaterOrEquals = Yp.prototype.geq = Yp.prototype.greaterOrEquals = Lp.prototype.geq = Lp.prototype.greaterOrEquals, Lp.prototype.lesserOrEquals = function(pp) {
          return this.compare(pp) <= 0
        }, Dp.prototype.leq = Dp.prototype.lesserOrEquals = Yp.prototype.leq = Yp.prototype.lesserOrEquals = Lp.prototype.leq = Lp.prototype.lesserOrEquals, Lp.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Yp.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Dp.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Lp.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Yp.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Dp.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Lp.prototype.isPositive = function() {
          return !this.sign
        }, Yp.prototype.isPositive = function() {
          return this.value > 0
        }, Dp.prototype.isPositive = Yp.prototype.isPositive, Lp.prototype.isNegative = function() {
          return this.sign
        }, Yp.prototype.isNegative = function() {
          return this.value < 0
        }, Dp.prototype.isNegative = Yp.prototype.isNegative, Lp.prototype.isUnit = function() {
          return !1
        }, Yp.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Dp.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Lp.prototype.isZero = function() {
          return !1
        }, Yp.prototype.isZero = function() {
          return 0 === this.value
        }, Dp.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Lp.prototype.isDivisibleBy = function(pp) {
          var ip = Kp(pp);
          return !ip.isZero() && (!!ip.isUnit() || (0 === ip.compareAbs(2) ? this.isEven() : this.mod(ip).isZero()))
        }, Dp.prototype.isDivisibleBy = Yp.prototype.isDivisibleBy = Lp.prototype.isDivisibleBy, Lp.prototype.isPrime = function(cp) {
          var Op = lp(this);
          if (Op !== pp) return Op;
          var op = this.abs(),
            Ip = op.bitLength();
          if (Ip <= 64) return Qp(op, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Sp = Math.log(2) * Ip.toJSNumber(), xp = Math.ceil(!0 === cp ? 2 * Math.pow(Sp, 2) : Sp), Lp = [], Yp = 0; Yp < xp; Yp++) Lp.push(ip(Yp + 2));
          return Qp(op, Lp)
        }, Dp.prototype.isPrime = Yp.prototype.isPrime = Lp.prototype.isPrime, Lp.prototype.isProbablePrime = function(cp, Op) {
          var op = lp(this);
          if (op !== pp) return op;
          for (var Ip = this.abs(), Sp = cp === pp ? 5 : cp, xp = [], Lp = 0; Lp < Sp; Lp++) xp.push(ip.randBetween(2, Ip.minus(2), Op));
          return Qp(Ip, xp)
        }, Dp.prototype.isProbablePrime = Yp.prototype.isProbablePrime = Lp.prototype.isProbablePrime, Lp.prototype.modInv = function(pp) {
          for (var cp, Op, op, Ip = ip.zero, Sp = ip.one, xp = Kp(pp), Lp = this.abs(); !Lp.isZero();) cp = xp.divide(Lp), Op = Ip, op = xp, Ip = Sp, xp = Lp, Sp = Op.subtract(cp.multiply(Sp)), Lp = op.subtract(cp.multiply(Lp));
          if (!xp.isUnit()) throw new Error(this.toString() + " and " + pp.toString() + " are not co-prime");
          return -1 === Ip.compare(0) && (Ip = Ip.add(pp)), this.isNegative() ? Ip.gp() : Ip
        }, Dp.prototype.modInv = Yp.prototype.modInv = Lp.prototype.modInv, Lp.prototype.next = function() {
          var pp = this.value;
          return this.sign ? ep(pp, 1, this.sign) : new Lp(Hp(pp, 1), this.sign)
        }, Yp.prototype.next = function() {
          var pp = this.value;
          return pp + 1 < Op ? new Yp(pp + 1) : new Lp(op, !1)
        }, Dp.prototype.next = function() {
          return new Dp(this.value + BigInt(1))
        }, Lp.prototype.prev = function() {
          var pp = this.value;
          return this.sign ? new Lp(Hp(pp, 1), !0) : ep(pp, 1, this.sign)
        }, Yp.prototype.prev = function() {
          var pp = this.value;
          return pp - 1 > -Op ? new Yp(pp - 1) : new Lp(op, !0)
        }, Dp.prototype.prev = function() {
          return new Dp(this.value - BigInt(1))
        };
        for (var Jp = [1]; 2 * Jp[Jp.length - 1] <= cp;) Jp.push(2 * Jp[Jp.length - 1]);
        var Bp = Jp.length,
          Np = Jp[Bp - 1];

        function Tp(pp) {
          return Math.abs(pp) <= cp
        }

        function fp(pp, cp, Op) {
          cp = Kp(cp);
          for (var op = pp.isNegative(), Ip = cp.isNegative(), Sp = op ? pp.not() : pp, xp = Ip ? cp.not() : cp, Lp = 0, Yp = 0, Dp = null, Ap = null, Pp = []; !Sp.isZero() || !xp.isZero();) Lp = (Dp = Ep(Sp, Np))[1].toJSNumber(), op && (Lp = Np - 1 - Lp), Yp = (Ap = Ep(xp, Np))[1].toJSNumber(), Ip && (Yp = Np - 1 - Yp), Sp = Dp[0], xp = Ap[0], Pp.push(Op(Lp, Yp));
          for (var Wp = 0 !== Op(op ? 1 : 0, Ip ? 1 : 0) ? ip(-1) : ip(0), yp = Pp.length - 1; yp >= 0; yp -= 1) Wp = Wp.multiply(Np).add(ip(Pp[yp]));
          return Wp
        }
        Lp.prototype.shiftLeft = function(pp) {
          var ip = Kp(pp).toJSNumber();
          if (!Tp(ip)) throw new Error(String(ip) + " is too large for shifting.");
          if (ip < 0) return this.shiftRight(-ip);
          var cp = this;
          if (cp.isZero()) return cp;
          for (; ip >= Bp;) cp = cp.multiply(Np), ip -= Bp - 1;
          return cp.multiply(Jp[ip])
        }, Dp.prototype.shiftLeft = Yp.prototype.shiftLeft = Lp.prototype.shiftLeft, Lp.prototype.shiftRight = function(pp) {
          var ip, cp = Kp(pp).toJSNumber();
          if (!Tp(cp)) throw new Error(String(cp) + " is too large for shifting.");
          if (cp < 0) return this.shiftLeft(-cp);
          for (var Op = this; cp >= Bp;) {
            if (Op.isZero() || Op.isNegative() && Op.isUnit()) return Op;
            Op = (ip = Ep(Op, Np))[1].isNegative() ? ip[0].prev() : ip[0], cp -= Bp - 1
          }
          return (ip = Ep(Op, Jp[cp]))[1].isNegative() ? ip[0].prev() : ip[0]
        }, Dp.prototype.shiftRight = Yp.prototype.shiftRight = Lp.prototype.shiftRight, Lp.prototype.not = function() {
          return this.gp().prev()
        }, Dp.prototype.not = Yp.prototype.not = Lp.prototype.not, Lp.prototype.and = function(pp) {
          return fp(this, pp, (function(pp, ip) {
            return pp & ip
          }))
        }, Dp.prototype.and = Yp.prototype.and = Lp.prototype.and, Lp.prototype.or = function(pp) {
          return fp(this, pp, (function(pp, ip) {
            return pp | ip
          }))
        }, Dp.prototype.or = Yp.prototype.or = Lp.prototype.or, Lp.prototype.xor = function(pp) {
          return fp(this, pp, (function(pp, ip) {
            return pp ^ ip
          }))
        }, Dp.prototype.xor = Yp.prototype.xor = Lp.prototype.xor;
        var bp = 1 << 30;

        function hp(pp) {
          var ip = pp.value,
            Op = "number" === typeof ip ? ip | bp : "bigint" === typeof ip ? ip | BigInt(bp) : ip[0] + ip[1] * cp | 1073758208;
          return Op & -Op
        }

        function ap(pp, cp) {
          if (cp.compareTo(pp) <= 0) {
            var Op = ap(pp, cp.square(cp)),
              op = Op.p,
              Ip = Op.e,
              Sp = op.multiply(cp);
            return Sp.compareTo(pp) <= 0 ? {
              p: Sp,
              e: 2 * Ip + 1
            } : {
              p: op,
              e: 2 * Ip
            }
          }
          return {
            p: ip(1),
            e: 0
          }
        }

        function np(pp, ip) {
          return pp = Kp(pp), ip = Kp(ip), pp.greater(ip) ? pp : ip
        }

        function Fp(pp, ip) {
          return pp = Kp(pp), ip = Kp(ip), pp.lesser(ip) ? pp : ip
        }

        function gp(pp, ip) {
          if (pp = Kp(pp).abs(), ip = Kp(ip).abs(), pp.equals(ip)) return pp;
          if (pp.isZero()) return ip;
          if (ip.isZero()) return pp;
          for (var cp, Op, op = xp[1]; pp.isEven() && ip.isEven();) cp = Fp(hp(pp), hp(ip)), pp = pp.divide(cp), ip = ip.divide(cp), op = op.multiply(cp);
          for (; pp.isEven();) pp = pp.divide(hp(pp));
          do {
            for (; ip.isEven();) ip = ip.divide(hp(ip));
            pp.greater(ip) && (Op = ip, ip = pp, pp = Op), ip = ip.subtract(pp)
          } while (!ip.isZero());
          return op.isUnit() ? pp : pp.multiply(op)
        }
        Lp.prototype.bitLength = function() {
          var pp = this;
          return pp.compareTo(ip(0)) < 0 && (pp = pp.gp().subtract(ip(1))), 0 === pp.compareTo(ip(0)) ? ip(0) : ip(ap(pp, ip(2)).e).add(ip(1))
        }, Dp.prototype.bitLength = Yp.prototype.bitLength = Lp.prototype.bitLength;
        var Gp = function(pp, ip, cp, Op) {
          cp = cp || Ip, pp = String(pp), Op || (pp = pp.toLowerCase(), cp = cp.toLowerCase());
          var op, Sp = pp.length,
            xp = Math.abs(ip),
            Lp = {};
          for (op = 0; op < cp.length; op++) Lp[cp[op]] = op;
          for (op = 0; op < Sp; op++) {
            if ("-" !== (Ap = pp[op]) && (Ap in Lp && Lp[Ap] >= xp)) {
              if ("1" === Ap && 1 === xp) continue;
              throw new Error(Ap + " is not a valid digit in base " + ip + ".")
            }
          }
          ip = Kp(ip);
          var Yp = [],
            Dp = "-" === pp[0];
          for (op = Dp ? 1 : 0; op < pp.length; op++) {
            var Ap;
            if ((Ap = pp[op]) in Lp) Yp.push(Kp(Lp[Ap]));
            else {
              if ("<" !== Ap) throw new Error(Ap + " is not a valid character");
              var Pp = op;
              do {
                op++
              } while (">" !== pp[op] && op < pp.length);
              Yp.push(Kp(pp.slice(Pp + 1, op)))
            }
          }
          return rp(Yp, ip, Dp)
        };

        function rp(pp, ip, cp) {
          var Op, op = xp[0],
            Ip = xp[1];
          for (Op = pp.length - 1; Op >= 0; Op--) op = op.add(pp[Op].times(Ip)), Ip = Ip.times(ip);
          return cp ? op.gp() : op
        }

        function Zp(pp, cp) {
          if ((cp = ip(cp)).isZero()) {
            if (pp.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (cp.equals(-1)) {
            if (pp.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (pp.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-pp.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Op = Array.apply(null, Array(pp.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Op.unshift([1]), {
              value: [].concat.apply([], Op),
              isNegative: !1
            }
          }
          var op = !1;
          if (pp.isNegative() && cp.isPositive() && (op = !0, pp = pp.abs()), cp.isUnit()) return pp.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(pp.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: op
          };
          for (var Ip, Sp = [], xp = pp; xp.isNegative() || xp.compareAbs(cp) >= 0;) {
            Ip = xp.divmod(cp), xp = Ip.quotient;
            var Lp = Ip.remainder;
            Lp.isNegative() && (Lp = cp.minus(Lp).abs(), xp = xp.next()), Sp.push(Lp.toJSNumber())
          }
          return Sp.push(xp.toJSNumber()), {
            value: Sp.reverse(),
            isNegative: op
          }
        }

        function zp(pp, ip, cp) {
          var Op = Zp(pp, ip);
          return (Op.isNegative ? "-" : "") + Op.value.map((function(pp) {
            return function(pp, ip) {
              return pp < (ip = ip || Ip).length ? ip[pp] : "<" + pp + ">"
            }(pp, cp)
          })).join("")
        }

        function sp(pp) {
          if (Ap(+pp)) {
            var ip = +pp;
            if (ip === wp(ip)) return Sp ? new Dp(BigInt(ip)) : new Yp(ip);
            throw new Error("Invalid integer: " + pp)
          }
          var cp = "-" === pp[0];
          cp && (pp = pp.slice(1));
          var Op = pp.split(/e/i);
          if (Op.length > 2) throw new Error("Invalid integer: " + Op.join("e"));
          if (2 === Op.length) {
            var op = Op[1];
            if ("+" === op[0] && (op = op.slice(1)), (op = +op) !== wp(op) || !Ap(op)) throw new Error("Invalid integer: " + op + " is not a valid exponent.");
            var Ip = Op[0],
              xp = Ip.indexOf(".");
            if (xp >= 0 && (op -= Ip.length - xp - 1, Ip = Ip.slice(0, xp) + Ip.slice(xp + 1)), op < 0) throw new Error("Cannot include negative exponent part for integers");
            pp = Ip += new Array(op + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(pp)) throw new Error("Invalid integer: " + pp);
          if (Sp) return new Dp(BigInt(cp ? "-" + pp : pp));
          for (var Pp = [], Wp = pp.length, Up = Wp - 7; Wp > 0;) Pp.push(+pp.slice(Up, Wp)), (Up -= 7) < 0 && (Up = 0), Wp -= 7;
          return yp(Pp), new Lp(Pp, cp)
        }

        function Kp(pp) {
          return "number" === typeof pp ? function(pp) {
            if (Sp) return new Dp(BigInt(pp));
            if (Ap(pp)) {
              if (pp !== wp(pp)) throw new Error(pp + " is not an integer.");
              return new Yp(pp)
            }
            return sp(pp.toString())
          }(pp) : "string" === typeof pp ? sp(pp) : "bigint" === typeof pp ? new Dp(pp) : pp
        }
        Lp.prototype.toArray = function(pp) {
          return Zp(this, pp)
        }, Yp.prototype.toArray = function(pp) {
          return Zp(this, pp)
        }, Dp.prototype.toArray = function(pp) {
          return Zp(this, pp)
        }, Lp.prototype.toString = function(ip, cp) {
          if (ip === pp && (ip = 10), 10 !== ip) return zp(this, ip, cp);
          for (var Op, op = this.value, Ip = op.length, Sp = String(op[--Ip]); --Ip >= 0;) Op = String(op[Ip]), Sp += "0000000".slice(Op.length) + Op;
          return (this.sign ? "-" : "") + Sp
        }, Yp.prototype.toString = function(ip, cp) {
          return ip === pp && (ip = 10), 10 != ip ? zp(this, ip, cp) : String(this.value)
        }, Dp.prototype.toString = Yp.prototype.toString, Dp.prototype.toJSON = Lp.prototype.toJSON = Yp.prototype.toJSON = function() {
          return this.toString()
        }, Lp.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Lp.prototype.toJSNumber = Lp.prototype.valueOf, Yp.prototype.valueOf = function() {
          return this.value
        }, Yp.prototype.toJSNumber = Yp.prototype.valueOf, Dp.prototype.valueOf = Dp.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Vp = 0; Vp < 1e3; Vp++) xp[Vp] = Kp(Vp), Vp > 0 && (xp[-Vp] = Kp(-Vp));
        return xp.one = xp[1], xp.zero = xp[0], xp.minusOne = xp[-1], xp.max = np, xp.min = Fp, xp.gcd = gp, xp.lcm = function(pp, ip) {
          return pp = Kp(pp).abs(), ip = Kp(ip).abs(), pp.divide(gp(pp, ip)).multiply(ip)
        }, xp.isInstance = function(pp) {
          return pp instanceof Lp || pp instanceof Yp || pp instanceof Dp
        }, xp.randBetween = function(pp, ip, Op) {
          pp = Kp(pp), ip = Kp(ip);
          var op = Op || Math.random,
            Ip = Fp(pp, ip),
            Sp = np(pp, ip).subtract(Ip).add(1);
          if (Sp.isSmall) return Ip.add(Math.floor(op() * Sp));
          for (var Lp = Zp(Sp, cp).value, Yp = [], Dp = !0, Ap = 0; Ap < Lp.length; Ap++) {
            var Pp = Dp ? Lp[Ap] : cp,
              Wp = wp(op() * Pp);
            Yp.push(Wp), Wp < Pp && (Dp = !1)
          }
          return Ip.add(xp.vcp(Yp, cp, !1))
        }, xp.vcp = function(pp, ip, cp) {
          return rp(pp.map(Kp), Kp(ip || 10), cp)
        }, xp
      }();
      pp.hasOwnProperty("exports") && (pp.exports = ip)
    }(ec);
    var uc = Ip(ec.exports);

    function jc(pp, ip, cp) {
      let Op = 0;
      for (let op = 0; op < cp; op++) {
        const cp = pp[ip + op];
        if (void 0 === cp) break;
        Op += cp * 16 ** op
      }
      return Op
    }

    function kc(pp) {
      const ip = [];
      for (let cp = 0; cp < pp.length; cp++) {
        let Op = Number(pp[cp]);
        for (let pp = 0; Op || pp < ip.length; pp++) Op += 10 * (ip[pp] || 0), ip[pp] = Op % 16, Op = (Op - ip[pp]) / 16
      }
      return ip
    }
    class mc {
      static fromString(pp) {
        return new mc(function(pp) {
          const ip = kc(pp),
            cp = Array(4);
          for (let Op = 0; Op < 4; Op++) cp[3 - Op] = jc(ip, 4 * Op, 4);
          return cp
        }(pp), pp)
      }
      static fromBit(pp) {
        const ip = Array(4),
          cp = Math.floor(pp / 16);
        for (let Op = 0; Op < 4; Op++) ip[3 - Op] = Op === cp ? 1 << pp - 16 * cp : 0;
        return new mc(ip)
      }
      constructor(pp, ip) {
        this.parts = pp, this.str = ip
      }
      and(pp) {
        let {
          parts: ip
        } = pp;
        return new mc(this.parts.map(((pp, cp) => pp & ip[cp])))
      }
      or(pp) {
        let {
          parts: ip
        } = pp;
        return new mc(this.parts.map(((pp, cp) => pp | ip[cp])))
      }
      xor(pp) {
        let {
          parts: ip
        } = pp;
        return new mc(this.parts.map(((pp, cp) => pp ^ ip[cp])))
      }
      not() {
        return new mc(this.parts.map((pp => ~pp)))
      }
      equals(pp) {
        let {
          parts: ip
        } = pp;
        return this.parts.every(((pp, cp) => pp === ip[cp]))
      }
      toString() {
        if (null != this.str) return this.str;
        const pp = new Array(16);
        return this.parts.forEach(((ip, cp) => {
          const Op = kc(ip.toString());
          for (let op = 0; op < 4; op++) pp[op + 4 * cp] = Op[3 - op] || 0
        })), this.str = uc.vcp(pp, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Rc = function() {
      try {
        return BigInt, !0
      } catch (pp) {
        return !1
      }
    }();
    Rc && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const qc = {},
      Mc = Rc ? function(pp) {
        return BigInt(pp)
      } : function(pp) {
        return pp instanceof mc ? pp : ("number" === typeof pp && (pp = pp.toString()), null != qc[pp] || (qc[pp] = mc.fromString(pp)), qc[pp])
      },
      Cc = Mc(0),
      Ec = Rc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc)
      } : function() {
        let pp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc).and(pp)
      },
      Xc = Rc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc)
      } : function() {
        let pp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc).or(pp)
      },
      lc = Rc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc)
      } : function() {
        let pp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc).xor(pp)
      },
      Qc = Rc ? function(pp, ip) {
        return pp === ip
      } : function(pp, ip) {
        return null == pp || null == ip ? pp == ip : pp.equals(ip)
      };
    var Jc, Bc, Nc, Tc, fc = {
      combine: function() {
        let pp = arguments.length <= 0 ? void 0 : arguments[0];
        for (let ip = 1; ip < arguments.length; ip++) pp = Xc(pp, ip < 0 || arguments.length <= ip ? void 0 : arguments[ip]);
        return pp
      },
      add: function(pp, ip) {
        return ip === Cc ? pp : Xc(pp, ip)
      },
      remove: function(pp, ip) {
        return ip === Cc ? pp : lc(pp, Ec(pp, ip))
      },
      filter: Ec,
      invert: Rc ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cc).not()
      },
      has: function(pp, ip) {
        return Qc(Ec(pp, ip), ip)
      },
      hasAny: function(pp, ip) {
        return !Qc(Ec(pp, ip), Cc)
      },
      equals: Qc,
      deserialize: Mc,
      getFlag: Rc ? function(pp) {
        return BigInt(1) << BigInt(pp)
      } : function(pp) {
        return mc.fromBit(pp)
      }
    };
    ! function(pp) {
      pp[pp.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", pp[pp.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", pp[pp.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", pp[pp.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", pp[pp.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", pp[pp.RATELIMITED = 4002] = "RATELIMITED", pp[pp.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", pp[pp.INVALID_VERSION = 4004] = "INVALID_VERSION", pp[pp.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Jc || (Jc = {})),
    function(pp) {
      pp[pp.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", pp[pp.INVALID_COMMAND = 4002] = "INVALID_COMMAND", pp[pp.INVALID_EVENT = 4004] = "INVALID_EVENT", pp[pp.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Bc || (Bc = {})),
    function(pp) {
      pp.LANDSCAPE = "landscape", pp.PORTRAIT = "portrait"
    }(Nc || (Nc = {})),
    function(pp) {
      pp.MOBILE = "mobile", pp.DESKTOP = "desktop"
    }(Tc || (Tc = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: fc.getFlag(0),
      ADMINISTRATOR: fc.getFlag(3)
    });

    function bc(pp) {
      return wc((ip => {
        var cp;
        const [Op] = null !== (cp = Object.entries(pp).find((pp => {
          let [, cp] = pp;
          return cp === ip
        }))) && void 0 !== cp ? cp : [];
        return null != ip && void 0 === Op ? pp.UNHANDLED : ip
      }), Bi().or(Ni()))
    }
    const hc = dc.object({
        image_url: dc.string()
      }),
      ac = dc.object({
        mediaUrl: dc.string().max(1024)
      }),
      nc = dc.object({
        access_token: dc.union([dc.string(), dc.null()]).optional()
      }),
      Fc = dc.object({
        access_token: dc.string(),
        user: dc.object({
          username: dc.string(),
          discriminator: dc.string(),
          id: dc.string(),
          avatar: dc.union([dc.string(), dc.null()]).optional(),
          public_flags: dc.number(),
          global_name: dc.union([dc.string(), dc.null()]).optional()
        }),
        scopes: dc.array(function(pp) {
          const ip = li().transform((ip => {
            const cp = pp.safeParse(ip);
            return cp.success ? cp.data : pp._def.defaultValue()
          }));
          return ip.overlayType = pp, ip
        }(dc.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(dc.literal(-1)).default(-1))),
        expires: dc.string(),
        application: dc.object({
          description: dc.string(),
          icon: dc.union([dc.string(), dc.null()]).optional(),
          id: dc.string(),
          rpc_origins: dc.array(dc.string()).optional(),
          name: dc.string()
        })
      }),
      gc = dc.object({
        participants: dc.array(dc.object({
          id: dc.string(),
          username: dc.string(),
          global_name: dc.union([dc.string(), dc.null()]).optional(),
          discriminator: dc.string(),
          avatar: dc.union([dc.string(), dc.null()]).optional(),
          flags: dc.number(),
          bot: dc.boolean(),
          avatar_decoration_data: dc.union([dc.object({
            asset: dc.string(),
            skuId: dc.string().optional()
          }), dc.null()]).optional(),
          premium_type: dc.union([dc.number(), dc.null()]).optional(),
          nickname: dc.string().optional()
        }))
      });
    var Gc;
    ! function(pp) {
      pp.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", pp.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", pp.AUTHENTICATE = "AUTHENTICATE", pp.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Gc || (Gc = {}));
    const rc = dc.object({}).optional().nullable(),
      Zc = dc.void(),
      zc = {
        [Gc.INITIATE_IMAGE_UPLOAD]: {
          request: Zc,
          response: hc
        },
        [Gc.OPEN_SHARE_MOMENT_DIALOG]: {
          request: ac,
          response: rc
        },
        [Gc.AUTHENTICATE]: {
          request: nc,
          response: Fc
        },
        [Gc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Zc,
          response: gc
        }
      },
      sc = "DISPATCH";
    var Kc;
    ! function(pp) {
      pp.AUTHORIZE = "AUTHORIZE", pp.AUTHENTICATE = "AUTHENTICATE", pp.GET_GUILDS = "GET_GUILDS", pp.GET_GUILD = "GET_GUILD", pp.GET_CHANNEL = "GET_CHANNEL", pp.GET_CHANNELS = "GET_CHANNELS", pp.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", pp.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", pp.SUBSCRIBE = "SUBSCRIBE", pp.UNSUBSCRIBE = "UNSUBSCRIBE", pp.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", pp.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", pp.SET_ACTIVITY = "SET_ACTIVITY", pp.GET_SKUS = "GET_SKUS", pp.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", pp.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", pp.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", pp.START_PURCHASE = "START_PURCHASE", pp.SET_CONFIG = "SET_CONFIG", pp.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", pp.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", pp.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", pp.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", pp.CAPTURE_LOG = "CAPTURE_LOG", pp.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", pp.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", pp.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", pp.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", pp.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", pp.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", pp.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Kc || (Kc = {}));
    const Vc = Ki({
        cmd: Bi(),
        data: ri(),
        evt: gi(),
        nonce: Bi()
      }).passthrough(),
      pO = (bc(Object.assign(Object.assign({}, Fc.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), Ki({
        id: Bi(),
        username: Bi(),
        discriminator: Bi(),
        global_name: Bi().optional().nullable(),
        avatar: Bi().optional().nullable(),
        avatar_decoration_data: Ki({
          asset: Bi(),
          sku_id: Bi().optional()
        }).nullable(),
        bot: bi(),
        flags: Ni().optional().nullable(),
        premium_type: Ni().optional().nullable()
      })),
      iO = Ki({
        user: pO,
        nick: Bi().optional().nullable(),
        roles: si(Bi()),
        joined_at: Bi(),
        deaf: bi(),
        mute: bi()
      }),
      cO = Ki({
        id: Bi(),
        name: Bi().optional().nullable(),
        roles: si(Bi()).optional().nullable(),
        user: pO.optional().nullable(),
        require_colons: bi().optional().nullable(),
        managed: bi().optional().nullable(),
        animated: bi().optional().nullable(),
        available: bi().optional().nullable()
      }),
      OO = Ki({
        mute: bi(),
        deaf: bi(),
        self_mute: bi(),
        self_deaf: bi(),
        suppress: bi()
      }),
      oO = Ki({
        mute: bi(),
        nick: Bi(),
        user: pO,
        voice_state: OO,
        volume: Ni()
      }),
      IO = bc({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      SO = Ki({
        name: Bi(),
        type: Ni(),
        url: Bi().optional().nullable(),
        created_at: Ni().optional().nullable(),
        timestamps: Ki({
          start: Ni(),
          end: Ni()
        }).partial().optional().nullable(),
        application_id: Bi().optional().nullable(),
        details: Bi().optional().nullable(),
        state: Bi().optional().nullable(),
        emoji: cO.optional().nullable(),
        party: Ki({
          id: Bi().optional().nullable(),
          size: si(Ni()).optional().nullable()
        }).optional().nullable(),
        assets: Ki({
          large_image: Bi().nullable(),
          large_text: Bi().nullable(),
          small_image: Bi().nullable(),
          small_text: Bi().nullable()
        }).partial().optional().nullable(),
        secrets: Ki({
          join: Bi(),
          match: Bi()
        }).partial().optional().nullable(),
        instance: bi().optional().nullable(),
        flags: Ni().optional().nullable()
      }),
      xO = Ki({
        id: Bi(),
        type: bc({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Bi(),
        deny: Bi()
      }),
      LO = {
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
      YO = Ki({
        id: Bi(),
        type: bc(LO),
        guild_id: Bi().optional().nullable(),
        position: Ni().optional().nullable(),
        permission_overwrites: si(xO).optional().nullable(),
        name: Bi().optional().nullable(),
        topic: Bi().optional().nullable(),
        nsfw: bi().optional().nullable(),
        last_message_id: Bi().optional().nullable(),
        bitrate: Ni().optional().nullable(),
        user_limit: Ni().optional().nullable(),
        rate_limit_per_user: Ni().optional().nullable(),
        recipients: si(pO).optional().nullable(),
        icon: Bi().optional().nullable(),
        owner_id: Bi().optional().nullable(),
        application_id: Bi().optional().nullable(),
        parent_id: Bi().optional().nullable(),
        last_pin_timestamp: Bi().optional().nullable()
      }),
      DO = Ki({
        user: pO,
        guild_id: Bi(),
        status: IO,
        activities: si(SO),
        client_status: Ki({
          desktop: IO,
          mobile: IO,
          web: IO
        }).partial()
      }),
      AO = Ki({
        id: Bi(),
        name: Bi(),
        color: Ni(),
        hoist: bi(),
        position: Ni(),
        permissions: Bi(),
        managed: bi(),
        mentionable: bi()
      }),
      PO = (Ki({
        id: Bi(),
        name: Bi(),
        owner_id: Bi(),
        icon: Bi().nullable(),
        icon_hash: Bi().optional().nullable(),
        splash: Bi().nullable(),
        discovery_splash: Bi().nullable(),
        owner: bi().optional().nullable(),
        permissions: Bi().optional().nullable(),
        region: Bi(),
        afk_channel_id: Bi().nullable(),
        afk_timeout: Ni(),
        widget_enabled: bi().optional().nullable(),
        widget_channel_id: Bi().optional().nullable(),
        verification_level: Ni(),
        default_message_notifications: Ni(),
        explicit_content_filter: Ni(),
        roles: si(AO),
        emojis: si(cO),
        features: si(Bi()),
        mfa_level: Ni(),
        application_id: Bi().nullable(),
        system_channel_id: Bi().nullable(),
        system_channel_flags: Ni(),
        rules_channel_id: Bi().nullable(),
        joined_at: Bi().optional().nullable(),
        large: bi().optional().nullable(),
        unavailable: bi().optional().nullable(),
        member_count: Ni().optional().nullable(),
        voice_states: si(OO).optional().nullable(),
        members: si(iO).optional().nullable(),
        channels: si(YO).optional().nullable(),
        presences: si(DO).optional().nullable(),
        max_presences: Ni().optional().nullable(),
        max_members: Ni().optional().nullable(),
        vanity_url_code: Bi().nullable(),
        description: Bi().nullable(),
        banner: Bi().nullable(),
        premium_tier: Ni(),
        premium_subscription_count: Ni().optional().nullable(),
        preferred_locale: Bi(),
        public_updates_channel_id: Bi().nullable(),
        max_video_channel_users: Ni().optional().nullable(),
        approximate_member_count: Ni().optional().nullable(),
        approximate_presence_count: Ni().optional().nullable()
      }), Ki({
        id: Bi(),
        guild_id: Bi(),
        type: Ni(),
        name: Bi()
      })),
      WO = Ki({
        id: Bi(),
        filename: Bi(),
        size: Ni(),
        url: Bi(),
        proxy_url: Bi(),
        height: Ni().optional().nullable(),
        width: Ni().optional().nullable()
      }),
      yO = Ki({
        text: Bi(),
        icon_url: Bi().optional().nullable(),
        proxy_icon_url: Bi().optional().nullable()
      }),
      UO = Ki({
        url: Bi().optional().nullable(),
        proxy_url: Bi().optional().nullable(),
        height: Ni().optional().nullable(),
        width: Ni().optional().nullable()
      }),
      wO = UO.omit({
        proxy_url: !0
      }),
      vO = Ki({
        name: Bi().optional().nullable(),
        url: Bi().optional().nullable()
      }),
      tO = Ki({
        name: Bi().optional().nullable(),
        url: Bi().optional().nullable(),
        icon_url: Bi().optional().nullable(),
        proxy_icon_url: Bi().optional().nullable()
      }),
      HO = Ki({
        name: Bi(),
        value: Bi(),
        inline: bi()
      }),
      dO = Ki({
        title: Bi().optional().nullable(),
        type: Bi().optional().nullable(),
        description: Bi().optional().nullable(),
        url: Bi().optional().nullable(),
        timestamp: Bi().optional().nullable(),
        color: Ni().optional().nullable(),
        footer: yO.optional().nullable(),
        image: UO.optional().nullable(),
        thumbnail: UO.optional().nullable(),
        video: wO.optional().nullable(),
        provider: vO.optional().nullable(),
        author: tO.optional().nullable(),
        fields: si(HO).optional().nullable()
      }),
      eO = Ki({
        count: Ni(),
        me: bi(),
        emoji: cO
      }),
      uO = Ki({
        type: Ni(),
        party_id: Bi().optional().nullable()
      }),
      jO = Ki({
        id: Bi(),
        cover_image: Bi().optional().nullable(),
        description: Bi(),
        icon: Bi().optional().nullable(),
        name: Bi()
      }),
      kO = Ki({
        message_id: Bi().optional().nullable(),
        channel_id: Bi().optional().nullable(),
        guild_id: Bi().optional().nullable()
      }),
      mO = Ki({
        id: Bi(),
        channel_id: Bi(),
        guild_id: Bi().optional().nullable(),
        author: pO.optional().nullable(),
        member: iO.optional().nullable(),
        content: Bi(),
        timestamp: Bi(),
        edited_timestamp: Bi().optional().nullable(),
        tts: bi(),
        mention_everyone: bi(),
        mentions: si(pO),
        mention_roles: si(Bi()),
        mention_channels: si(PO),
        attachments: si(WO),
        embeds: si(dO),
        reactions: si(eO).optional().nullable(),
        nonce: pc([Bi(), Ni()]).optional().nullable(),
        pinned: bi(),
        webhook_id: Bi().optional().nullable(),
        type: Ni(),
        activity: uO.optional().nullable(),
        application: jO.optional().nullable(),
        message_reference: kO.optional().nullable(),
        flags: Ni().optional().nullable(),
        stickers: si(ri()).optional().nullable(),
        referenced_message: ri().optional().nullable()
      }),
      RO = Ki({
        id: Bi(),
        name: Bi()
      }),
      qO = Ki({
        type: bc({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Ni(),
        name: Bi()
      }),
      MO = Ki({
        type: bc({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: bi(),
        threshold: Ni(),
        shortcut: si(qO),
        delay: Ni()
      }),
      CO = Ki({
        device_id: Bi(),
        volume: Ni(),
        available_devices: si(RO)
      }),
      EO = (Ki({
        type: bc({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Bi(),
        vendor: Ki({
          name: Bi(),
          url: Bi()
        }),
        model: Ki({
          name: Bi(),
          url: Bi()
        }),
        related: si(Bi()),
        echo_cancellation: bi().optional().nullable(),
        noise_suppression: bi().optional().nullable(),
        automatic_gain_control: bi().optional().nullable(),
        hardware_mute: bi().optional().nullable()
      }), Ki({
        id: Bi(),
        name: Bi(),
        type: bc({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: Ki({
          amount: Ni(),
          currency: Bi()
        }),
        application_id: Bi(),
        flags: Ni(),
        release_date: Bi().nullable()
      })),
      XO = Ki({
        id: Bi(),
        sku_id: Bi(),
        application_id: Bi(),
        user_id: Bi(),
        gift_code_flags: Ni(),
        type: bc({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Bi().optional().nullable(),
        branches: si(Bi()).optional().nullable(),
        starts_at: Bi().optional().nullable(),
        ends_at: Bi().optional().nullable(),
        parent_id: Bi().optional().nullable(),
        consumed: bi().optional().nullable(),
        deleted: bi().optional().nullable(),
        gift_code_batch_id: Bi().optional().nullable()
      }),
      lO = (bc({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), bc({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      QO = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      JO = (bc(QO), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      BO = (bc(JO), "ERROR");
    var NO;
    ! function(pp) {
      pp.READY = "READY", pp.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", pp.SPEAKING_START = "SPEAKING_START", pp.SPEAKING_STOP = "SPEAKING_STOP", pp.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", pp.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", pp.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", pp.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", pp.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", pp.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(NO || (NO = {}));
    const TO = Vc.extend({
        evt: Ac(NO),
        nonce: Bi().nullable(),
        cmd: Yc(sc),
        data: Ki({}).passthrough()
      }),
      fO = Vc.extend({
        evt: Yc(BO),
        data: Ki({
          code: Ni(),
          message: Bi().optional()
        }).passthrough(),
        cmd: Ac(Kc),
        nonce: Bi().nullable()
      }),
      bO = TO.extend({
        evt: Bi()
      }),
      hO = pc([TO, bO, fO]);
    const aO = {
      [NO.READY]: {
        payload: TO.extend({
          evt: Yc(NO.READY),
          data: Ki({
            v: Ni(),
            config: Ki({
              cdn_host: Bi().optional(),
              api_endpoint: Bi(),
              environment: Bi()
            }),
            user: Ki({
              id: Bi(),
              username: Bi(),
              discriminator: Bi(),
              avatar: Bi().optional()
            }).optional()
          })
        })
      },
      [NO.VOICE_STATE_UPDATE]: {
        payload: TO.extend({
          evt: Yc(NO.VOICE_STATE_UPDATE),
          data: oO
        }),
        subscribeArgs: Ki({
          channel_id: Bi()
        })
      },
      [NO.SPEAKING_START]: {
        payload: TO.extend({
          evt: Yc(NO.SPEAKING_START),
          data: Ki({
            lobby_id: Bi().optional(),
            channel_id: Bi().optional(),
            user_id: Bi()
          })
        }),
        subscribeArgs: Ki({
          lobby_id: Bi().nullable().optional(),
          channel_id: Bi().nullable().optional()
        })
      },
      [NO.SPEAKING_STOP]: {
        payload: TO.extend({
          evt: Yc(NO.SPEAKING_STOP),
          data: Ki({
            lobby_id: Bi().optional(),
            channel_id: Bi().optional(),
            user_id: Bi()
          })
        }),
        subscribeArgs: Ki({
          lobby_id: Bi().nullable().optional(),
          channel_id: Bi().nullable().optional()
        })
      },
      [NO.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: TO.extend({
          evt: Yc(NO.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: Ki({
            layout_mode: bc(JO)
          })
        })
      },
      [NO.ORIENTATION_UPDATE]: {
        payload: TO.extend({
          evt: Yc(NO.ORIENTATION_UPDATE),
          data: Ki({
            screen_orientation: bc(QO),
            orientation: Ac(Nc)
          })
        })
      },
      [NO.CURRENT_USER_UPDATE]: {
        payload: TO.extend({
          evt: Yc(NO.CURRENT_USER_UPDATE),
          data: pO
        })
      },
      [NO.ENTITLEMENT_CREATE]: {
        payload: TO.extend({
          evt: Yc(NO.ENTITLEMENT_CREATE),
          data: Ki({
            entitlement: XO
          })
        })
      },
      [NO.THERMAL_STATE_UPDATE]: {
        payload: TO.extend({
          evt: Yc(NO.THERMAL_STATE_UPDATE),
          data: Ki({
            thermal_state: lO
          })
        })
      },
      [NO.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: TO.extend({
          evt: Yc(NO.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: Ki({
            participants: gc.shape.participants
          })
        })
      }
    };
    const nO = Ki({}).nullable(),
      FO = Ki({
        code: Bi()
      }),
      gO = Ki({
        guilds: si(Ki({
          id: Bi(),
          name: Bi()
        }))
      }),
      GO = Ki({
        id: Bi(),
        name: Bi(),
        icon_url: Bi().optional(),
        members: si(iO)
      }),
      rO = Ki({
        id: Bi(),
        type: bc(LO),
        guild_id: Bi().optional().nullable(),
        name: Bi().optional().nullable(),
        topic: Bi().optional().nullable(),
        bitrate: Ni().optional().nullable(),
        user_limit: Ni().optional().nullable(),
        position: Ni().optional().nullable(),
        voice_states: si(oO),
        messages: si(mO)
      }),
      ZO = Ki({
        channels: si(YO)
      }),
      zO = (rO.nullable(), rO.nullable()),
      sO = rO.nullable(),
      KO = (Ki({
        input: CO,
        output: CO,
        mode: MO,
        automatic_gain_control: bi(),
        echo_cancellation: bi(),
        noise_suppression: bi(),
        qos: bi(),
        silence_warning: bi(),
        deaf: bi(),
        mute: bi()
      }), Ki({
        evt: Bi()
      })),
      VO = Ki({
        shortcut: qO
      }),
      po = SO,
      io = Ki({
        skus: si(EO)
      }),
      co = Ki({
        entitlements: si(XO)
      }),
      Oo = si(XO).nullable(),
      oo = Ki({
        use_interactive_pip: bi()
      }),
      Io = Ki({
        locale: Bi()
      }),
      So = Ki({
        enabled: bi()
      }),
      xo = Ki({
        permissions: fi().or(Bi())
      }),
      Lo = Ki({
        iosKeyboardResizesView: yc(bi())
      }),
      Yo = Vc.extend({
        cmd: Ac(Kc),
        evt: gi()
      });

    function Do(pp) {
      let {
        cmd: ip,
        data: cp
      } = pp;
      switch (ip) {
        case Kc.AUTHORIZE:
          return FO.parse(cp);
        case Kc.CAPTURE_SHORTCUT:
          return VO.parse(cp);
        case Kc.ENCOURAGE_HW_ACCELERATION:
          return So.parse(cp);
        case Kc.GET_CHANNEL:
          return rO.parse(cp);
        case Kc.GET_CHANNELS:
          return ZO.parse(cp);
        case Kc.GET_CHANNEL_PERMISSIONS:
          return xo.parse(cp);
        case Kc.GET_GUILD:
          return GO.parse(cp);
        case Kc.GET_GUILDS:
          return gO.parse(cp);
        case Kc.GET_PLATFORM_BEHAVIORS:
          return Lo.parse(cp);
        case Kc.GET_CHANNEL:
          return rO.parse(cp);
        case Kc.SELECT_TEXT_CHANNEL:
          return sO.parse(cp);
        case Kc.SELECT_VOICE_CHANNEL:
          return zO.parse(cp);
        case Kc.SET_ACTIVITY:
          return po.parse(cp);
        case Kc.GET_SKUS_EMBEDDED:
          return io.parse(cp);
        case Kc.GET_ENTITLEMENTS_EMBEDDED:
          return co.parse(cp);
        case Kc.SET_CONFIG:
          return oo.parse(cp);
        case Kc.START_PURCHASE:
          return Oo.parse(cp);
        case Kc.SUBSCRIBE:
        case Kc.UNSUBSCRIBE:
          return KO.parse(cp);
        case Kc.USER_SETTINGS_GET_LOCALE:
          return Io.parse(cp);
        case Kc.OPEN_EXTERNAL_LINK:
        case Kc.SET_ORIENTATION_LOCK_STATE:
        case Kc.SET_CERTIFIED_DEVICES:
        case Kc.SEND_ANALYTICS_EVENT:
        case Kc.OPEN_INVITE_DIALOG:
        case Kc.CAPTURE_LOG:
        case Kc.GET_SKUS:
        case Kc.GET_ENTITLEMENTS:
          return nO.parse(cp);
        case Kc.AUTHENTICATE:
        case Kc.INITIATE_IMAGE_UPLOAD:
        case Kc.OPEN_SHARE_MOMENT_DIALOG:
        case Kc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: pp
          } = zc[ip];
          return pp.parse(cp);
        default:
          ! function(pp, ip) {
            throw ip
          }(0, new Error(`Unrecognized command ${ip}`))
      }
    }
    Ki({
      frame_id: Bi(),
      platform: Ac(Tc).optional().nullable()
    }), Ki({
      v: Yc(1),
      encoding: Yc("json").optional(),
      client_id: Bi(),
      frame_id: Bi()
    });
    const Ao = Ki({
        code: Ni(),
        message: Bi().optional()
      }),
      Po = Ki({
        evt: Bi().nullable(),
        nonce: Bi().nullable(),
        data: ri().nullable(),
        cmd: Bi()
      }).passthrough();

    function Wo(pp) {
      const ip = Po.parse(pp);
      return null != ip.evt ? ip.evt === BO ? fO.parse(ip) : function(pp) {
        const ip = pp.evt;
        if (!(ip in NO)) throw new Error(`Unrecognized event type ${pp.evt}`);
        return aO[ip].payload.parse(pp)
      }(hO.parse(ip)) : function(pp) {
        return Object.assign(Object.assign({}, pp), {
          data: Do(pp)
        })
      }(Yo.passthrough().parse(ip))
    }

    function yo(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const op = Vc.extend({
        cmd: Yc(ip),
        data: cp
      });
      return async cp => {
        const Ip = await pp({
          cmd: ip,
          args: cp,
          transfer: Op(cp)
        });
        return op.parse(Ip).data
      }
    }

    function Uo(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const cp = zc[pp].response,
        Op = Vc.extend({
          cmd: Yc(pp),
          data: cp
        });
      return cp => async op => {
        const Ip = await cp({
          cmd: pp,
          args: op,
          transfer: ip(op)
        });
        return Op.parse(Ip).data
      }
    }
    const wo = Uo(Gc.AUTHENTICATE),
      vo = pp => yo(pp, Kc.AUTHORIZE, FO),
      to = pp => yo(pp, Kc.CAPTURE_LOG, nO),
      Ho = pp => yo(pp, Kc.ENCOURAGE_HW_ACCELERATION, So),
      eo = pp => yo(pp, Kc.GET_ENTITLEMENTS_EMBEDDED, co),
      uo = pp => yo(pp, Kc.GET_SKUS_EMBEDDED, io),
      jo = pp => yo(pp, Kc.GET_CHANNEL_PERMISSIONS, xo),
      ko = pp => yo(pp, Kc.GET_PLATFORM_BEHAVIORS, Lo),
      mo = pp => yo(pp, Kc.OPEN_EXTERNAL_LINK, nO),
      Ro = pp => yo(pp, Kc.OPEN_INVITE_DIALOG, nO),
      qo = Uo(Gc.OPEN_SHARE_MOMENT_DIALOG);
    SO.SW({
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
      type: SO.shape.type.optional(),
      instance: SO.shape.instance.optional()
    }).nullable();
    const Mo = pp => yo(pp, Kc.SET_ACTIVITY, po),
      Co = pp => yo(pp, Kc.SET_CONFIG, oo);
    const Eo = pp => ({
        lock_state: pp.lock_state,
        picture_in_picture_lock_state: pp.picture_in_picture_lock_state
      }),
      Xo = pp => function(pp) {
        let {
          sendCommand: ip,
          cmd: cp,
          response: Op,
          fallbackTransform: op,
          transferTransform: Ip = () => {}
        } = pp;
        const Sp = Vc.extend({
          cmd: Yc(cp),
          data: Op
        });
        return async pp => {
          try {
            const Op = await ip({
              cmd: cp,
              args: pp,
              transfer: Ip(pp)
            });
            return Sp.parse(Op).data
          } catch (Op) {
            if (Op.code === Bc.INVALID_PAYLOAD) {
              const Op = op(pp),
                xp = await ip({
                  cmd: cp,
                  args: Op,
                  transfer: Ip(Op)
                });
              return Sp.parse(xp).data
            }
            throw Op
          }
        }
      }({
        sendCommand: pp,
        cmd: Kc.SET_ORIENTATION_LOCK_STATE,
        response: nO,
        fallbackTransform: Eo
      }),
      Qo = pp => yo(pp, Kc.START_PURCHASE, Oo),
      Jo = pp => yo(pp, Kc.USER_SETTINGS_GET_LOCALE, Io),
      Bo = Uo(Gc.INITIATE_IMAGE_UPLOAD),
      No = pp => yo(pp, Kc.GET_CHANNEL, rO),
      To = Uo(Gc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var fo = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function bo(pp) {
      return "string" === typeof pp && fo.test(pp)
    }
    for (var ho = [], ao = 0; ao < 256; ++ao) ho.push((ao + 256).toString(16).substr(1));

    function no(pp) {
      var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = (ho[pp[ip + 0]] + ho[pp[ip + 1]] + ho[pp[ip + 2]] + ho[pp[ip + 3]] + "-" + ho[pp[ip + 4]] + ho[pp[ip + 5]] + "-" + ho[pp[ip + 6]] + ho[pp[ip + 7]] + "-" + ho[pp[ip + 8]] + ho[pp[ip + 9]] + "-" + ho[pp[ip + 10]] + ho[pp[ip + 11]] + ho[pp[ip + 12]] + ho[pp[ip + 13]] + ho[pp[ip + 14]] + ho[pp[ip + 15]]).toLowerCase();
      if (!bo(cp)) throw TypeError("Stringified UUID is invalid");
      return cp
    }
    var Fo;

    function go(pp, ip, cp) {
      function Op(pp, Op, op, Ip) {
        if ("string" === typeof pp && (pp = function(pp) {
            pp = unescape(encodeURIComponent(pp));
            for (var ip = [], cp = 0; cp < pp.length; ++cp) ip.push(pp.charCodeAt(cp));
            return ip
          }(pp)), "string" === typeof Op && (Op = function(pp) {
            if (!bo(pp)) throw TypeError("Invalid UUID");
            var ip, cp = new Uint8Array(16);
            return cp[0] = (ip = parseInt(pp.slice(0, 8), 16)) >>> 24, cp[1] = ip >>> 16 & 255, cp[2] = ip >>> 8 & 255, cp[3] = 255 & ip, cp[4] = (ip = parseInt(pp.slice(9, 13), 16)) >>> 8, cp[5] = 255 & ip, cp[6] = (ip = parseInt(pp.slice(14, 18), 16)) >>> 8, cp[7] = 255 & ip, cp[8] = (ip = parseInt(pp.slice(19, 23), 16)) >>> 8, cp[9] = 255 & ip, cp[10] = (ip = parseInt(pp.slice(24, 36), 16)) / 1099511627776 & 255, cp[11] = ip / 4294967296 & 255, cp[12] = ip >>> 24 & 255, cp[13] = ip >>> 16 & 255, cp[14] = ip >>> 8 & 255, cp[15] = 255 & ip, cp
          }(Op)), 16 !== Op.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Sp = new Uint8Array(16 + pp.length);
        if (Sp.set(Op), Sp.set(pp, Op.length), (Sp = cp(Sp))[6] = 15 & Sp[6] | ip, Sp[8] = 63 & Sp[8] | 128, op) {
          Ip = Ip || 0;
          for (var xp = 0; xp < 16; ++xp) op[Ip + xp] = Sp[xp];
          return op
        }
        return no(Sp)
      }
      try {
        Op.name = pp
      } catch (op) {}
      return Op.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Op.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Op
    }

    function Go(pp) {
      return 14 + (pp + 64 >>> 9 << 4) + 1
    }

    function ro(pp, ip) {
      var cp = (65535 & pp) + (65535 & ip);
      return (pp >> 16) + (ip >> 16) + (cp >> 16) << 16 | 65535 & cp
    }

    function Zo(pp, ip, cp, Op, op, Ip) {
      return ro((Sp = ro(ro(ip, pp), ro(Op, Ip))) << (xp = op) | Sp >>> 32 - xp, cp);
      var Sp, xp
    }

    function zo(pp, ip, cp, Op, op, Ip, Sp) {
      return Zo(ip & cp | ~ip & Op, pp, ip, op, Ip, Sp)
    }

    function so(pp, ip, cp, Op, op, Ip, Sp) {
      return Zo(ip & Op | cp & ~Op, pp, ip, op, Ip, Sp)
    }

    function Ko(pp, ip, cp, Op, op, Ip, Sp) {
      return Zo(ip ^ cp ^ Op, pp, ip, op, Ip, Sp)
    }

    function Vo(pp, ip, cp, Op, op, Ip, Sp) {
      return Zo(cp ^ (ip | ~Op), pp, ip, op, Ip, Sp)
    }
    go("v3", 48, (function(pp) {
      if ("string" === typeof pp) {
        var ip = unescape(encodeURIComponent(pp));
        pp = new Uint8Array(ip.length);
        for (var cp = 0; cp < ip.length; ++cp) pp[cp] = ip.charCodeAt(cp)
      }
      return function(pp) {
        for (var ip = [], cp = 32 * pp.length, Op = "0123456789abcdef", op = 0; op < cp; op += 8) {
          var Ip = pp[op >> 5] >>> op % 32 & 255,
            Sp = parseInt(Op.charAt(Ip >>> 4 & 15) + Op.charAt(15 & Ip), 16);
          ip.push(Sp)
        }
        return ip
      }(function(pp, ip) {
        pp[ip >> 5] |= 128 << ip % 32, pp[Go(ip) - 1] = ip;
        for (var cp = 1732584193, Op = -271733879, op = -1732584194, Ip = 271733878, Sp = 0; Sp < pp.length; Sp += 16) {
          var xp = cp,
            Lp = Op,
            Yp = op,
            Dp = Ip;
          cp = zo(cp, Op, op, Ip, pp[Sp], 7, -680876936), Ip = zo(Ip, cp, Op, op, pp[Sp + 1], 12, -389564586), op = zo(op, Ip, cp, Op, pp[Sp + 2], 17, 606105819), Op = zo(Op, op, Ip, cp, pp[Sp + 3], 22, -1044525330), cp = zo(cp, Op, op, Ip, pp[Sp + 4], 7, -176418897), Ip = zo(Ip, cp, Op, op, pp[Sp + 5], 12, 1200080426), op = zo(op, Ip, cp, Op, pp[Sp + 6], 17, -1473231341), Op = zo(Op, op, Ip, cp, pp[Sp + 7], 22, -45705983), cp = zo(cp, Op, op, Ip, pp[Sp + 8], 7, 1770035416), Ip = zo(Ip, cp, Op, op, pp[Sp + 9], 12, -1958414417), op = zo(op, Ip, cp, Op, pp[Sp + 10], 17, -42063), Op = zo(Op, op, Ip, cp, pp[Sp + 11], 22, -1990404162), cp = zo(cp, Op, op, Ip, pp[Sp + 12], 7, 1804603682), Ip = zo(Ip, cp, Op, op, pp[Sp + 13], 12, -40341101), op = zo(op, Ip, cp, Op, pp[Sp + 14], 17, -1502002290), cp = so(cp, Op = zo(Op, op, Ip, cp, pp[Sp + 15], 22, 1236535329), op, Ip, pp[Sp + 1], 5, -165796510), Ip = so(Ip, cp, Op, op, pp[Sp + 6], 9, -1069501632), op = so(op, Ip, cp, Op, pp[Sp + 11], 14, 643717713), Op = so(Op, op, Ip, cp, pp[Sp], 20, -373897302), cp = so(cp, Op, op, Ip, pp[Sp + 5], 5, -701558691), Ip = so(Ip, cp, Op, op, pp[Sp + 10], 9, 38016083), op = so(op, Ip, cp, Op, pp[Sp + 15], 14, -660478335), Op = so(Op, op, Ip, cp, pp[Sp + 4], 20, -405537848), cp = so(cp, Op, op, Ip, pp[Sp + 9], 5, 568446438), Ip = so(Ip, cp, Op, op, pp[Sp + 14], 9, -1019803690), op = so(op, Ip, cp, Op, pp[Sp + 3], 14, -187363961), Op = so(Op, op, Ip, cp, pp[Sp + 8], 20, 1163531501), cp = so(cp, Op, op, Ip, pp[Sp + 13], 5, -1444681467), Ip = so(Ip, cp, Op, op, pp[Sp + 2], 9, -51403784), op = so(op, Ip, cp, Op, pp[Sp + 7], 14, 1735328473), cp = Ko(cp, Op = so(Op, op, Ip, cp, pp[Sp + 12], 20, -1926607734), op, Ip, pp[Sp + 5], 4, -378558), Ip = Ko(Ip, cp, Op, op, pp[Sp + 8], 11, -2022574463), op = Ko(op, Ip, cp, Op, pp[Sp + 11], 16, 1839030562), Op = Ko(Op, op, Ip, cp, pp[Sp + 14], 23, -35309556), cp = Ko(cp, Op, op, Ip, pp[Sp + 1], 4, -1530992060), Ip = Ko(Ip, cp, Op, op, pp[Sp + 4], 11, 1272893353), op = Ko(op, Ip, cp, Op, pp[Sp + 7], 16, -155497632), Op = Ko(Op, op, Ip, cp, pp[Sp + 10], 23, -1094730640), cp = Ko(cp, Op, op, Ip, pp[Sp + 13], 4, 681279174), Ip = Ko(Ip, cp, Op, op, pp[Sp], 11, -358537222), op = Ko(op, Ip, cp, Op, pp[Sp + 3], 16, -722521979), Op = Ko(Op, op, Ip, cp, pp[Sp + 6], 23, 76029189), cp = Ko(cp, Op, op, Ip, pp[Sp + 9], 4, -640364487), Ip = Ko(Ip, cp, Op, op, pp[Sp + 12], 11, -421815835), op = Ko(op, Ip, cp, Op, pp[Sp + 15], 16, 530742520), cp = Vo(cp, Op = Ko(Op, op, Ip, cp, pp[Sp + 2], 23, -995338651), op, Ip, pp[Sp], 6, -198630844), Ip = Vo(Ip, cp, Op, op, pp[Sp + 7], 10, 1126891415), op = Vo(op, Ip, cp, Op, pp[Sp + 14], 15, -1416354905), Op = Vo(Op, op, Ip, cp, pp[Sp + 5], 21, -57434055), cp = Vo(cp, Op, op, Ip, pp[Sp + 12], 6, 1700485571), Ip = Vo(Ip, cp, Op, op, pp[Sp + 3], 10, -1894986606), op = Vo(op, Ip, cp, Op, pp[Sp + 10], 15, -1051523), Op = Vo(Op, op, Ip, cp, pp[Sp + 1], 21, -2054922799), cp = Vo(cp, Op, op, Ip, pp[Sp + 8], 6, 1873313359), Ip = Vo(Ip, cp, Op, op, pp[Sp + 15], 10, -30611744), op = Vo(op, Ip, cp, Op, pp[Sp + 6], 15, -1560198380), Op = Vo(Op, op, Ip, cp, pp[Sp + 13], 21, 1309151649), cp = Vo(cp, Op, op, Ip, pp[Sp + 4], 6, -145523070), Ip = Vo(Ip, cp, Op, op, pp[Sp + 11], 10, -1120210379), op = Vo(op, Ip, cp, Op, pp[Sp + 2], 15, 718787259), Op = Vo(Op, op, Ip, cp, pp[Sp + 9], 21, -343485551), cp = ro(cp, xp), Op = ro(Op, Lp), op = ro(op, Yp), Ip = ro(Ip, Dp)
        }
        return [cp, Op, op, Ip]
      }(function(pp) {
        if (0 === pp.length) return [];
        for (var ip = 8 * pp.length, cp = new Uint32Array(Go(ip)), Op = 0; Op < ip; Op += 8) cp[Op >> 5] |= (255 & pp[Op / 8]) << Op % 32;
        return cp
      }(pp), 8 * pp.length))
    }));
    var pI = new Uint8Array(16);

    function iI() {
      if (!Fo && !(Fo = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Fo(pI)
    }

    function cI(pp, ip, cp) {
      var Op = (pp = pp || {}).random || (pp.rng || iI)();
      if (Op[6] = 15 & Op[6] | 64, Op[8] = 63 & Op[8] | 128, ip) {
        cp = cp || 0;
        for (var op = 0; op < 16; ++op) ip[cp + op] = Op[op];
        return ip
      }
      return no(Op)
    }

    function OI(pp, ip, cp, Op) {
      switch (pp) {
        case 0:
          return ip & cp ^ ~ip & Op;
        case 1:
        case 3:
          return ip ^ cp ^ Op;
        case 2:
          return ip & cp ^ ip & Op ^ cp & Op
      }
    }

    function oI(pp, ip) {
      return pp << ip | pp >>> 32 - ip
    }
    go("v5", 80, (function(pp) {
      var ip = [1518500249, 1859775393, 2400959708, 3395469782],
        cp = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof pp) {
        var Op = unescape(encodeURIComponent(pp));
        pp = [];
        for (var op = 0; op < Op.length; ++op) pp.push(Op.charCodeAt(op))
      } else Array.isArray(pp) || (pp = Array.prototype.slice.call(pp));
      pp.push(128);
      for (var Ip = pp.length / 4 + 2, Sp = Math.ceil(Ip / 16), xp = new Array(Sp), Lp = 0; Lp < Sp; ++Lp) {
        for (var Yp = new Uint32Array(16), Dp = 0; Dp < 16; ++Dp) Yp[Dp] = pp[64 * Lp + 4 * Dp] << 24 | pp[64 * Lp + 4 * Dp + 1] << 16 | pp[64 * Lp + 4 * Dp + 2] << 8 | pp[64 * Lp + 4 * Dp + 3];
        xp[Lp] = Yp
      }
      xp[Sp - 1][14] = 8 * (pp.length - 1) / Math.pow(2, 32), xp[Sp - 1][14] = Math.floor(xp[Sp - 1][14]), xp[Sp - 1][15] = 8 * (pp.length - 1) & 4294967295;
      for (var Ap = 0; Ap < Sp; ++Ap) {
        for (var Pp = new Uint32Array(80), Wp = 0; Wp < 16; ++Wp) Pp[Wp] = xp[Ap][Wp];
        for (var yp = 16; yp < 80; ++yp) Pp[yp] = oI(Pp[yp - 3] ^ Pp[yp - 8] ^ Pp[yp - 14] ^ Pp[yp - 16], 1);
        for (var Up = cp[0], wp = cp[1], vp = cp[2], tp = cp[3], Hp = cp[4], dp = 0; dp < 80; ++dp) {
          var ep = Math.floor(dp / 20),
            jp = oI(Up, 5) + OI(ep, wp, vp, tp) + Hp + ip[ep] + Pp[dp] >>> 0;
          Hp = tp, tp = vp, vp = oI(wp, 30) >>> 0, wp = Up, Up = jp
        }
        cp[0] = cp[0] + Up >>> 0, cp[1] = cp[1] + wp >>> 0, cp[2] = cp[2] + vp >>> 0, cp[3] = cp[3] + tp >>> 0, cp[4] = cp[4] + Hp >>> 0
      }
      return [cp[0] >> 24 & 255, cp[0] >> 16 & 255, cp[0] >> 8 & 255, 255 & cp[0], cp[1] >> 24 & 255, cp[1] >> 16 & 255, cp[1] >> 8 & 255, 255 & cp[1], cp[2] >> 24 & 255, cp[2] >> 16 & 255, cp[2] >> 8 & 255, 255 & cp[2], cp[3] >> 24 & 255, cp[3] >> 16 & 255, cp[3] >> 8 & 255, 255 & cp[3], cp[4] >> 24 & 255, cp[4] >> 16 & 255, cp[4] >> 8 & 255, 255 & cp[4]]
    }));
    class II extends Error {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(ip), this.code = pp, this.message = ip, this.name = "Discord SDK Error"
      }
    }
    const SI = ["log", "warn", "debug", "info", "error"];
    var xI;
    ! function(pp) {
      pp[pp.HANDSHAKE = 0] = "HANDSHAKE", pp[pp.FRAME = 1] = "FRAME", pp[pp.CLOSE = 2] = "CLOSE", pp[pp.HELLO = 3] = "HELLO"
    }(xI || (xI = {}));
    const LI = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class YI {
      getTransfer(pp) {
        var ip;
        switch (pp.cmd) {
          case Kc.SUBSCRIBE:
          case Kc.UNSUBSCRIBE:
            return;
          default:
            return null !== (ip = pp.transfer) && void 0 !== ip ? ip : void 0
        }
      }
      constructor(pp, ip) {
        var cp;
        if (this.eventBus = new Yp, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = pp => {
            var ip;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const cp = cI();
            null === (ip = this.source) || void 0 === ip || ip.postMessage([xI.FRAME, Object.assign(Object.assign({}, pp), {
              nonce: cp
            })], this.sourceOrigin, this.getTransfer(pp));
            return new Promise(((pp, ip) => {
              this.pendingCommands.set(cp, {
                resolve: pp,
                reject: ip
              })
            }))
          }, this.commands = (cp = this.sendCommand, {
            authenticate: wo(cp),
            authorize: vo(cp),
            captureLog: to(cp),
            encourageHardwareAcceleration: Ho(cp),
            getChannel: No(cp),
            getChannelPermissions: jo(cp),
            getEntitlements: eo(cp),
            getPlatformBehaviors: ko(cp),
            getSkus: uo(cp),
            openExternalLink: mo(cp),
            openInviteDialog: Ro(cp),
            openShareMomentDialog: qo(cp),
            setActivity: Mo(cp),
            setConfig: Co(cp),
            setOrientationLockState: Xo(cp),
            startPurchase: Qo(cp),
            userSettingsGetLocale: Jo(cp),
            initiateImageUpload: Bo(cp),
            getInstanceConnectedParticipants: To(cp)
          }), this.handleMessage = pp => {
            if (!LI.has(pp.origin)) return;
            const ip = pp.data;
            if (!Array.isArray(ip)) return;
            const [cp, Op] = ip;
            switch (cp) {
              case xI.HELLO:
                return;
              case xI.CLOSE:
                return this.handleClose(Op);
              case xI.HANDSHAKE:
                return this.handleHandshake();
              case xI.FRAME:
                return this.handleFrame(Op);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = pp, this.configuration = null !== ip && void 0 !== ip ? ip : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = Tc.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Op = new URLSearchParams(this._getSearch()),
          op = Op.get("frame_id");
        if (!op) throw new Error("frame_id query param is not defined");
        this.frameId = op;
        const Ip = Op.get("instance_id");
        if (!Ip) throw new Error("instance_id query param is not defined");
        this.instanceId = Ip;
        const Sp = Op.get("platform");
        if (!Sp) throw new Error("platform query param is not defined");
        if (Sp !== Tc.DESKTOP && Sp !== Tc.MOBILE) throw new Error(`Invalid query param "platform" of "${Sp}". Valid values are "${Tc.DESKTOP}" or "${Tc.MOBILE}"`);
        this.platform = Sp, this.guildId = Op.get("guild_id"), this.channelId = Op.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var pp;
          return [null !== (pp = window.parent.opener) && void 0 !== pp ? pp : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(pp, ip) {
        var cp;
        window.removeEventListener("message", this.handleMessage);
        const Op = cI();
        null === (cp = this.source) || void 0 === cp || cp.postMessage([xI.CLOSE, {
          code: pp,
          message: ip,
          nonce: Op
        }], this.sourceOrigin)
      }
      async subscribe(pp, ip) {
        for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
        const [Ip] = Op, Sp = this.eventBus.listenerCount(pp), xp = this.eventBus.on(pp, ip);
        return Object.values(NO).includes(pp) && pp !== NO.READY && 0 === Sp && await this.sendCommand({
          cmd: Kc.SUBSCRIBE,
          args: Ip,
          evt: pp
        }), xp
      }
      async unsubscribe(pp, ip) {
        for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
        const [Ip] = Op;
        return pp !== NO.READY && 1 === this.eventBus.listenerCount(pp) && await this.sendCommand({
          cmd: Kc.UNSUBSCRIBE,
          evt: pp,
          args: Ip
        }), this.eventBus.off(pp, ip)
      }
      async ready() {
        this.isReady || await new Promise((pp => {
          this.eventBus.once(NO.READY, pp)
        }))
      }
      handshake() {
        var pp;
        null === (pp = this.source) || void 0 === pp || pp.postMessage([xI.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(NO.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const pp = (pp, ip) => {
          this.commands.captureLog({
            level: pp,
            message: ip
          })
        };
        SI.forEach((ip => {
          ! function(pp, ip, cp) {
            const Op = pp[ip],
              op = pp;
            Op && (pp[ip] = function() {
              const pp = [].slice.call(arguments),
                Ip = "" + pp.join(" ");
              cp(ip, Ip), Op.apply(op, pp)
            })
          }(console, ip, pp)
        }))
      }
      handleClose(pp) {
        Ao.parse(pp)
      }
      handleHandshake() {}
      handleFrame(pp) {
        var ip, cp;
        let Op;
        try {
          Op = Wo(pp)
        } catch (op) {
          return console.error("Failed to parse", pp), void console.error(op)
        }
        if ("DISPATCH" === Op.cmd) this.eventBus.emit(Op.evt, Op.data);
        else {
          if (Op.evt === BO) {
            if (null != Op.nonce) return null === (ip = this.pendingCommands.get(Op.nonce)) || void 0 === ip || ip.reject(Op.data), void this.pendingCommands.delete(Op.nonce);
            this.eventBus.emit("error", new II(Op.data.code, Op.data.message))
          }
          if (null == Op.nonce) return void console.error("Missing nonce", pp);
          null === (cp = this.pendingCommands.get(Op.nonce)) || void 0 === cp || cp.resolve(Op), this.pendingCommands.delete(Op.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var DI, AI = 1e9,
      PI = !0,
      WI = "[DecimalError] ",
      yI = WI + "Invalid argument: ",
      UI = WI + "Exponent out of range: ",
      wI = Math.floor,
      vI = Math.pow,
      tI = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      HI = 1e7,
      dI = 9007199254740991,
      eI = wI(1286742750677284.5),
      uI = {};

    function jI(pp, ip) {
      var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp = pp.constructor,
        Ap = Dp.precision;
      if (!pp.s || !ip.s) return ip.s || (ip = new Dp(pp)), PI ? QI(ip, Ap) : ip;
      if (Lp = pp.d, Yp = ip.d, Sp = pp.e, op = ip.e, Lp = Lp.slice(), Ip = Sp - op) {
        for (Ip < 0 ? (Op = Lp, Ip = -Ip, xp = Yp.length) : (Op = Yp, op = Sp, xp = Lp.length), Ip > (xp = (Sp = Math.ceil(Ap / 7)) > xp ? Sp + 1 : xp + 1) && (Ip = xp, Op.length = 1), Op.reverse(); Ip--;) Op.push(0);
        Op.reverse()
      }
      for ((xp = Lp.length) - (Ip = Yp.length) < 0 && (Ip = xp, Op = Yp, Yp = Lp, Lp = Op), cp = 0; Ip;) cp = (Lp[--Ip] = Lp[Ip] + Yp[Ip] + cp) / HI | 0, Lp[Ip] %= HI;
      for (cp && (Lp.unshift(cp), ++op), xp = Lp.length; 0 == Lp[--xp];) Lp.pop();
      return ip.d = Lp, ip.e = op, PI ? QI(ip, Ap) : ip
    }

    function kI(pp, ip, cp) {
      if (pp !== ~~pp || pp < ip || pp > cp) throw Error(yI + pp)
    }

    function mI(pp) {
      var ip, cp, Op, op = pp.length - 1,
        Ip = "",
        Sp = pp[0];
      if (op > 0) {
        for (Ip += Sp, ip = 1; ip < op; ip++)(cp = 7 - (Op = pp[ip] + "").length) && (Ip += EI(cp)), Ip += Op;
        (cp = 7 - (Op = (Sp = pp[ip]) + "").length) && (Ip += EI(cp))
      } else if (0 === Sp) return "0";
      for (; Sp % 10 === 0;) Sp /= 10;
      return Ip + Sp
    }
    uI.absoluteValue = uI.abs = function() {
      var pp = new this.constructor(this);
      return pp.s && (pp.s = 1), pp
    }, uI.comparedTo = uI.cmp = function(pp) {
      var ip, cp, Op, op, Ip = this;
      if (pp = new Ip.constructor(pp), Ip.s !== pp.s) return Ip.s || -pp.s;
      if (Ip.e !== pp.e) return Ip.e > pp.e ^ Ip.s < 0 ? 1 : -1;
      for (ip = 0, cp = (Op = Ip.d.length) < (op = pp.d.length) ? Op : op; ip < cp; ++ip)
        if (Ip.d[ip] !== pp.d[ip]) return Ip.d[ip] > pp.d[ip] ^ Ip.s < 0 ? 1 : -1;
      return Op === op ? 0 : Op > op ^ Ip.s < 0 ? 1 : -1
    }, uI.decimalPlaces = uI.dp = function() {
      var pp = this,
        ip = pp.d.length - 1,
        cp = 7 * (ip - pp.e);
      if (ip = pp.d[ip])
        for (; ip % 10 == 0; ip /= 10) cp--;
      return cp < 0 ? 0 : cp
    }, uI.dividedBy = uI.div = function(pp) {
      return RI(this, new this.constructor(pp))
    }, uI.dividedToIntegerBy = uI.idiv = function(pp) {
      var ip = this.constructor;
      return QI(RI(this, new ip(pp), 0, 1), ip.precision)
    }, uI.equals = uI.eq = function(pp) {
      return !this.cmp(pp)
    }, uI.exponent = function() {
      return MI(this)
    }, uI.greaterThan = uI.gt = function(pp) {
      return this.cmp(pp) > 0
    }, uI.greaterThanOrEqualTo = uI.gte = function(pp) {
      return this.cmp(pp) >= 0
    }, uI.isInteger = uI.isint = function() {
      return this.e > this.d.length - 2
    }, uI.isNegative = uI.isneg = function() {
      return this.s < 0
    }, uI.isPositive = uI.ispos = function() {
      return this.s > 0
    }, uI.isZero = function() {
      return 0 === this.s
    }, uI.lessThan = uI.lt = function(pp) {
      return this.cmp(pp) < 0
    }, uI.lessThanOrEqualTo = uI.lte = function(pp) {
      return this.cmp(pp) < 1
    }, uI.logarithm = uI.log = function(pp) {
      var ip, cp = this,
        Op = cp.constructor,
        op = Op.precision,
        Ip = op + 5;
      if (void 0 === pp) pp = new Op(10);
      else if ((pp = new Op(pp)).s < 1 || pp.eq(DI)) throw Error(WI + "NaN");
      if (cp.s < 1) throw Error(WI + (cp.s ? "NaN" : "-Infinity"));
      return cp.eq(DI) ? new Op(0) : (PI = !1, ip = RI(XI(cp, Ip), XI(pp, Ip), Ip), PI = !0, QI(ip, op))
    }, uI.minus = uI.sub = function(pp) {
      var ip = this;
      return pp = new ip.constructor(pp), ip.s == pp.s ? JI(ip, pp) : jI(ip, (pp.s = -pp.s, pp))
    }, uI.modulo = uI.mod = function(pp) {
      var ip, cp = this,
        Op = cp.constructor,
        op = Op.precision;
      if (!(pp = new Op(pp)).s) throw Error(WI + "NaN");
      return cp.s ? (PI = !1, ip = RI(cp, pp, 0, 1).times(pp), PI = !0, cp.minus(ip)) : QI(new Op(cp), op)
    }, uI.naturalExponential = uI.exp = function() {
      return qI(this)
    }, uI.naturalLogarithm = uI.ln = function() {
      return XI(this)
    }, uI.negated = uI.neg = function() {
      var pp = new this.constructor(this);
      return pp.s = -pp.s || 0, pp
    }, uI.plus = uI.add = function(pp) {
      var ip = this;
      return pp = new ip.constructor(pp), ip.s == pp.s ? jI(ip, pp) : JI(ip, (pp.s = -pp.s, pp))
    }, uI.precision = uI.sd = function(pp) {
      var ip, cp, Op, op = this;
      if (void 0 !== pp && pp !== !!pp && 1 !== pp && 0 !== pp) throw Error(yI + pp);
      if (ip = MI(op) + 1, cp = 7 * (Op = op.d.length - 1) + 1, Op = op.d[Op]) {
        for (; Op % 10 == 0; Op /= 10) cp--;
        for (Op = op.d[0]; Op >= 10; Op /= 10) cp++
      }
      return pp && ip > cp ? ip : cp
    }, uI.squareRoot = uI.sqrt = function() {
      var pp, ip, cp, Op, op, Ip, Sp, xp = this,
        Lp = xp.constructor;
      if (xp.s < 1) {
        if (!xp.s) return new Lp(0);
        throw Error(WI + "NaN")
      }
      for (pp = MI(xp), PI = !1, 0 == (op = Math.sqrt(+xp)) || op == 1 / 0 ? (((ip = mI(xp.d)).length + pp) % 2 == 0 && (ip += "0"), op = Math.sqrt(ip), pp = wI((pp + 1) / 2) - (pp < 0 || pp % 2), Op = new Lp(ip = op == 1 / 0 ? "1e" + pp : (ip = op.toExponential()).slice(0, ip.indexOf("e") + 1) + pp)) : Op = new Lp(op.toString()), op = Sp = (cp = Lp.precision) + 3;;)
        if (Op = (Ip = Op).plus(RI(xp, Ip, Sp + 2)).times(.5), mI(Ip.d).slice(0, Sp) === (ip = mI(Op.d)).slice(0, Sp)) {
          if (ip = ip.slice(Sp - 3, Sp + 1), op == Sp && "4999" == ip) {
            if (QI(Ip, cp + 1, 0), Ip.times(Ip).eq(xp)) {
              Op = Ip;
              break
            }
          } else if ("9999" != ip) break;
          Sp += 4
        } return PI = !0, QI(Op, cp)
    }, uI.times = uI.mul = function(pp) {
      var ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp = this,
        Ap = Dp.constructor,
        Pp = Dp.d,
        Wp = (pp = new Ap(pp)).d;
      if (!Dp.s || !pp.s) return new Ap(0);
      for (pp.s *= Dp.s, cp = Dp.e + pp.e, (Lp = Pp.length) < (Yp = Wp.length) && (Ip = Pp, Pp = Wp, Wp = Ip, Sp = Lp, Lp = Yp, Yp = Sp), Ip = [], Op = Sp = Lp + Yp; Op--;) Ip.push(0);
      for (Op = Yp; --Op >= 0;) {
        for (ip = 0, op = Lp + Op; op > Op;) xp = Ip[op] + Wp[Op] * Pp[op - Op - 1] + ip, Ip[op--] = xp % HI | 0, ip = xp / HI | 0;
        Ip[op] = (Ip[op] + ip) % HI | 0
      }
      for (; !Ip[--Sp];) Ip.pop();
      return ip ? ++cp : Ip.shift(), pp.d = Ip, pp.e = cp, PI ? QI(pp, Ap.precision) : pp
    }, uI.toDecimalPlaces = uI.todp = function(pp, ip) {
      var cp = this,
        Op = cp.constructor;
      return cp = new Op(cp), void 0 === pp ? cp : (kI(pp, 0, AI), void 0 === ip ? ip = Op.rounding : kI(ip, 0, 8), QI(cp, pp + MI(cp) + 1, ip))
    }, uI.toExponential = function(pp, ip) {
      var cp, Op = this,
        op = Op.constructor;
      return void 0 === pp ? cp = BI(Op, !0) : (kI(pp, 0, AI), void 0 === ip ? ip = op.rounding : kI(ip, 0, 8), cp = BI(Op = QI(new op(Op), pp + 1, ip), !0, pp + 1)), cp
    }, uI.toFixed = function(pp, ip) {
      var cp, Op, op = this,
        Ip = op.constructor;
      return void 0 === pp ? BI(op) : (kI(pp, 0, AI), void 0 === ip ? ip = Ip.rounding : kI(ip, 0, 8), cp = BI((Op = QI(new Ip(op), pp + MI(op) + 1, ip)).abs(), !1, pp + MI(Op) + 1), op.isneg() && !op.isZero() ? "-" + cp : cp)
    }, uI.toInteger = uI.toint = function() {
      var pp = this,
        ip = pp.constructor;
      return QI(new ip(pp), MI(pp) + 1, ip.rounding)
    }, uI.toNumber = function() {
      return +this
    }, uI.toPower = uI.pow = function(pp) {
      var ip, cp, Op, op, Ip, Sp, xp = this,
        Lp = xp.constructor,
        Yp = +(pp = new Lp(pp));
      if (!pp.s) return new Lp(DI);
      if (!(xp = new Lp(xp)).s) {
        if (pp.s < 1) throw Error(WI + "Infinity");
        return xp
      }
      if (xp.eq(DI)) return xp;
      if (Op = Lp.precision, pp.eq(DI)) return QI(xp, Op);
      if (Sp = (ip = pp.e) >= (cp = pp.d.length - 1), Ip = xp.s, Sp) {
        if ((cp = Yp < 0 ? -Yp : Yp) <= dI) {
          for (op = new Lp(DI), ip = Math.ceil(Op / 7 + 4), PI = !1; cp % 2 && NI((op = op.times(xp)).d, ip), 0 !== (cp = wI(cp / 2));) NI((xp = xp.times(xp)).d, ip);
          return PI = !0, pp.s < 0 ? new Lp(DI).div(op) : QI(op, Op)
        }
      } else if (Ip < 0) throw Error(WI + "NaN");
      return Ip = Ip < 0 && 1 & pp.d[Math.max(ip, cp)] ? -1 : 1, xp.s = 1, PI = !1, op = pp.times(XI(xp, Op + 12)), PI = !0, (op = qI(op)).s = Ip, op
    }, uI.toPrecision = function(pp, ip) {
      var cp, Op, op = this,
        Ip = op.constructor;
      return void 0 === pp ? Op = BI(op, (cp = MI(op)) <= Ip.toExpNeg || cp >= Ip.toExpPos) : (kI(pp, 1, AI), void 0 === ip ? ip = Ip.rounding : kI(ip, 0, 8), Op = BI(op = QI(new Ip(op), pp, ip), pp <= (cp = MI(op)) || cp <= Ip.toExpNeg, pp)), Op
    }, uI.toSignificantDigits = uI.tosd = function(pp, ip) {
      var cp = this.constructor;
      return void 0 === pp ? (pp = cp.precision, ip = cp.rounding) : (kI(pp, 1, AI), void 0 === ip ? ip = cp.rounding : kI(ip, 0, 8)), QI(new cp(this), pp, ip)
    }, uI.toString = uI.valueOf = uI.val = uI.toJSON = uI[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var pp = this,
        ip = MI(pp),
        cp = pp.constructor;
      return BI(pp, ip <= cp.toExpNeg || ip >= cp.toExpPos)
    };
    var RI = function() {
      function pp(pp, ip) {
        var cp, Op = 0,
          op = pp.length;
        for (pp = pp.slice(); op--;) cp = pp[op] * ip + Op, pp[op] = cp % HI | 0, Op = cp / HI | 0;
        return Op && pp.unshift(Op), pp
      }

      function ip(pp, ip, cp, Op) {
        var op, Ip;
        if (cp != Op) Ip = cp > Op ? 1 : -1;
        else
          for (op = Ip = 0; op < cp; op++)
            if (pp[op] != ip[op]) {
              Ip = pp[op] > ip[op] ? 1 : -1;
              break
            } return Ip
      }

      function cp(pp, ip, cp) {
        for (var Op = 0; cp--;) pp[cp] -= Op, Op = pp[cp] < ip[cp] ? 1 : 0, pp[cp] = Op * HI + pp[cp] - ip[cp];
        for (; !pp[0] && pp.length > 1;) pp.shift()
      }
      return function(Op, op, Ip, Sp) {
        var xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp = Op.constructor,
          qp = Op.s == op.s ? 1 : -1,
          Mp = Op.d,
          Cp = op.d;
        if (!Op.s) return new Rp(Op);
        if (!op.s) throw Error(WI + "Division by zero");
        for (Lp = Op.e - op.e, kp = Cp.length, ep = Mp.length, yp = (Wp = new Rp(qp)).d = [], Yp = 0; Cp[Yp] == (Mp[Yp] || 0);) ++Yp;
        if (Cp[Yp] > (Mp[Yp] || 0) && --Lp, (tp = null == Ip ? Ip = Rp.precision : Sp ? Ip + (MI(Op) - MI(op)) + 1 : Ip) < 0) return new Rp(0);
        if (tp = tp / 7 + 2 | 0, Yp = 0, 1 == kp)
          for (Dp = 0, Cp = Cp[0], tp++;
            (Yp < ep || Dp) && tp--; Yp++) Hp = Dp * HI + (Mp[Yp] || 0), yp[Yp] = Hp / Cp | 0, Dp = Hp % Cp | 0;
        else {
          for ((Dp = HI / (Cp[0] + 1) | 0) > 1 && (Cp = pp(Cp, Dp), Mp = pp(Mp, Dp), kp = Cp.length, ep = Mp.length), dp = kp, wp = (Up = Mp.slice(0, kp)).length; wp < kp;) Up[wp++] = 0;
          (mp = Cp.slice()).unshift(0), jp = Cp[0], Cp[1] >= HI / 2 && ++jp;
          do {
            Dp = 0, (xp = ip(Cp, Up, kp, wp)) < 0 ? (vp = Up[0], kp != wp && (vp = vp * HI + (Up[1] || 0)), (Dp = vp / jp | 0) > 1 ? (Dp >= HI && (Dp = HI - 1), 1 == (xp = ip(Ap = pp(Cp, Dp), Up, Pp = Ap.length, wp = Up.length)) && (Dp--, cp(Ap, kp < Pp ? mp : Cp, Pp))) : (0 == Dp && (xp = Dp = 1), Ap = Cp.slice()), (Pp = Ap.length) < wp && Ap.unshift(0), cp(Up, Ap, wp), -1 == xp && (xp = ip(Cp, Up, kp, wp = Up.length)) < 1 && (Dp++, cp(Up, kp < wp ? mp : Cp, wp)), wp = Up.length) : 0 === xp && (Dp++, Up = [0]), yp[Yp++] = Dp, xp && Up[0] ? Up[wp++] = Mp[dp] || 0 : (Up = [Mp[dp]], wp = 1)
          } while ((dp++ < ep || void 0 !== Up[0]) && tp--)
        }
        return yp[0] || yp.shift(), Wp.e = Lp, QI(Wp, Sp ? Ip + MI(Wp) + 1 : Ip)
      }
    }();

    function qI(pp, ip) {
      var cp, Op, op, Ip, Sp, xp = 0,
        Lp = 0,
        Yp = pp.constructor,
        Dp = Yp.precision;
      if (MI(pp) > 16) throw Error(UI + MI(pp));
      if (!pp.s) return new Yp(DI);
      for (null == ip ? (PI = !1, Sp = Dp) : Sp = ip, Ip = new Yp(.03125); pp.abs().gte(.1);) pp = pp.times(Ip), Lp += 5;
      for (Sp += Math.log(vI(2, Lp)) / Math.LN10 * 2 + 5 | 0, cp = Op = op = new Yp(DI), Yp.precision = Sp;;) {
        if (Op = QI(Op.times(pp), Sp), cp = cp.times(++xp), mI((Ip = op.plus(RI(Op, cp, Sp))).d).slice(0, Sp) === mI(op.d).slice(0, Sp)) {
          for (; Lp--;) op = QI(op.times(op), Sp);
          return Yp.precision = Dp, null == ip ? (PI = !0, QI(op, Dp)) : op
        }
        op = Ip
      }
    }

    function MI(pp) {
      for (var ip = 7 * pp.e, cp = pp.d[0]; cp >= 10; cp /= 10) ip++;
      return ip
    }

    function CI(pp, ip, cp) {
      if (ip > pp.LN10.sd()) throw PI = !0, cp && (pp.precision = cp), Error(WI + "LN10 precision limit exceeded");
      return QI(new pp(pp.LN10), ip)
    }

    function EI(pp) {
      for (var ip = ""; pp--;) ip += "0";
      return ip
    }

    function XI(pp, ip) {
      var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap = 1,
        Pp = pp,
        Wp = Pp.d,
        yp = Pp.constructor,
        Up = yp.precision;
      if (Pp.s < 1) throw Error(WI + (Pp.s ? "NaN" : "-Infinity"));
      if (Pp.eq(DI)) return new yp(0);
      if (null == ip ? (PI = !1, Yp = Up) : Yp = ip, Pp.eq(10)) return null == ip && (PI = !0), CI(yp, Yp);
      if (Yp += 10, yp.precision = Yp, Op = (cp = mI(Wp)).charAt(0), Ip = MI(Pp), !(Math.abs(Ip) < 15e14)) return Lp = CI(yp, Yp + 2, Up).times(Ip + ""), Pp = XI(new yp(Op + "." + cp.slice(1)), Yp - 10).plus(Lp), yp.precision = Up, null == ip ? (PI = !0, QI(Pp, Up)) : Pp;
      for (; Op < 7 && 1 != Op || 1 == Op && cp.charAt(1) > 3;) Op = (cp = mI((Pp = Pp.times(pp)).d)).charAt(0), Ap++;
      for (Ip = MI(Pp), Op > 1 ? (Pp = new yp("0." + cp), Ip++) : Pp = new yp(Op + "." + cp.slice(1)), xp = Sp = Pp = RI(Pp.minus(DI), Pp.plus(DI), Yp), Dp = QI(Pp.times(Pp), Yp), op = 3;;) {
        if (Sp = QI(Sp.times(Dp), Yp), mI((Lp = xp.plus(RI(Sp, new yp(op), Yp))).d).slice(0, Yp) === mI(xp.d).slice(0, Yp)) return xp = xp.times(2), 0 !== Ip && (xp = xp.plus(CI(yp, Yp + 2, Up).times(Ip + ""))), xp = RI(xp, new yp(Ap), Yp), yp.precision = Up, null == ip ? (PI = !0, QI(xp, Up)) : xp;
        xp = Lp, op += 2
      }
    }

    function lI(pp, ip) {
      var cp, Op, op;
      for ((cp = ip.indexOf(".")) > -1 && (ip = ip.replace(".", "")), (Op = ip.search(/e/i)) > 0 ? (cp < 0 && (cp = Op), cp += +ip.slice(Op + 1), ip = ip.substring(0, Op)) : cp < 0 && (cp = ip.length), Op = 0; 48 === ip.charCodeAt(Op);) ++Op;
      for (op = ip.length; 48 === ip.charCodeAt(op - 1);) --op;
      if (ip = ip.slice(Op, op)) {
        if (op -= Op, cp = cp - Op - 1, pp.e = wI(cp / 7), pp.d = [], Op = (cp + 1) % 7, cp < 0 && (Op += 7), Op < op) {
          for (Op && pp.d.push(+ip.slice(0, Op)), op -= 7; Op < op;) pp.d.push(+ip.slice(Op, Op += 7));
          Op = 7 - (ip = ip.slice(Op)).length
        } else Op -= op;
        for (; Op--;) ip += "0";
        if (pp.d.push(+ip), PI && (pp.e > eI || pp.e < -eI)) throw Error(UI + cp)
      } else pp.s = 0, pp.e = 0, pp.d = [0];
      return pp
    }

    function QI(pp, ip, cp) {
      var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap = pp.d;
      for (Sp = 1, Ip = Ap[0]; Ip >= 10; Ip /= 10) Sp++;
      if ((Op = ip - Sp) < 0) Op += 7, op = ip, Yp = Ap[Dp = 0];
      else {
        if ((Dp = Math.ceil((Op + 1) / 7)) >= (Ip = Ap.length)) return pp;
        for (Yp = Ip = Ap[Dp], Sp = 1; Ip >= 10; Ip /= 10) Sp++;
        op = (Op %= 7) - 7 + Sp
      }
      if (void 0 !== cp && (xp = Yp / (Ip = vI(10, Sp - op - 1)) % 10 | 0, Lp = ip < 0 || void 0 !== Ap[Dp + 1] || Yp % Ip, Lp = cp < 4 ? (xp || Lp) && (0 == cp || cp == (pp.s < 0 ? 3 : 2)) : xp > 5 || 5 == xp && (4 == cp || Lp || 6 == cp && (Op > 0 ? op > 0 ? Yp / vI(10, Sp - op) : 0 : Ap[Dp - 1]) % 10 & 1 || cp == (pp.s < 0 ? 8 : 7))), ip < 1 || !Ap[0]) return Lp ? (Ip = MI(pp), Ap.length = 1, ip = ip - Ip - 1, Ap[0] = vI(10, (7 - ip % 7) % 7), pp.e = wI(-ip / 7) || 0) : (Ap.length = 1, Ap[0] = pp.e = pp.s = 0), pp;
      if (0 == Op ? (Ap.length = Dp, Ip = 1, Dp--) : (Ap.length = Dp + 1, Ip = vI(10, 7 - Op), Ap[Dp] = op > 0 ? (Yp / vI(10, Sp - op) % vI(10, op) | 0) * Ip : 0), Lp)
        for (;;) {
          if (0 == Dp) {
            (Ap[0] += Ip) == HI && (Ap[0] = 1, ++pp.e);
            break
          }
          if (Ap[Dp] += Ip, Ap[Dp] != HI) break;
          Ap[Dp--] = 0, Ip = 1
        }
      for (Op = Ap.length; 0 === Ap[--Op];) Ap.pop();
      if (PI && (pp.e > eI || pp.e < -eI)) throw Error(UI + MI(pp));
      return pp
    }

    function JI(pp, ip) {
      var cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp = pp.constructor,
        Wp = Pp.precision;
      if (!pp.s || !ip.s) return ip.s ? ip.s = -ip.s : ip = new Pp(pp), PI ? QI(ip, Wp) : ip;
      if (Lp = pp.d, Ap = ip.d, Op = ip.e, Yp = pp.e, Lp = Lp.slice(), Sp = Yp - Op) {
        for ((Dp = Sp < 0) ? (cp = Lp, Sp = -Sp, xp = Ap.length) : (cp = Ap, Op = Yp, xp = Lp.length), Sp > (op = Math.max(Math.ceil(Wp / 7), xp) + 2) && (Sp = op, cp.length = 1), cp.reverse(), op = Sp; op--;) cp.push(0);
        cp.reverse()
      } else {
        for ((Dp = (op = Lp.length) < (xp = Ap.length)) && (xp = op), op = 0; op < xp; op++)
          if (Lp[op] != Ap[op]) {
            Dp = Lp[op] < Ap[op];
            break
          } Sp = 0
      }
      for (Dp && (cp = Lp, Lp = Ap, Ap = cp, ip.s = -ip.s), xp = Lp.length, op = Ap.length - xp; op > 0; --op) Lp[xp++] = 0;
      for (op = Ap.length; op > Sp;) {
        if (Lp[--op] < Ap[op]) {
          for (Ip = op; Ip && 0 === Lp[--Ip];) Lp[Ip] = HI - 1;
          --Lp[Ip], Lp[op] += HI
        }
        Lp[op] -= Ap[op]
      }
      for (; 0 === Lp[--xp];) Lp.pop();
      for (; 0 === Lp[0]; Lp.shift()) --Op;
      return Lp[0] ? (ip.d = Lp, ip.e = Op, PI ? QI(ip, Wp) : ip) : new Pp(0)
    }

    function BI(pp, ip, cp) {
      var Op, op = MI(pp),
        Ip = mI(pp.d),
        Sp = Ip.length;
      return ip ? (cp && (Op = cp - Sp) > 0 ? Ip = Ip.charAt(0) + "." + Ip.slice(1) + EI(Op) : Sp > 1 && (Ip = Ip.charAt(0) + "." + Ip.slice(1)), Ip = Ip + (op < 0 ? "e" : "e+") + op) : op < 0 ? (Ip = "0." + EI(-op - 1) + Ip, cp && (Op = cp - Sp) > 0 && (Ip += EI(Op))) : op >= Sp ? (Ip += EI(op + 1 - Sp), cp && (Op = cp - op - 1) > 0 && (Ip = Ip + "." + EI(Op))) : ((Op = op + 1) < Sp && (Ip = Ip.slice(0, Op) + "." + Ip.slice(Op)), cp && (Op = cp - Sp) > 0 && (op + 1 === Sp && (Ip += "."), Ip += EI(Op))), pp.s < 0 ? "-" + Ip : Ip
    }

    function NI(pp, ip) {
      if (pp.length > ip) return pp.length = ip, !0
    }

    function TI(pp) {
      if (!pp || "object" !== typeof pp) throw Error(WI + "Object expected");
      var ip, cp, Op, op = ["precision", 1, AI, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (ip = 0; ip < op.length; ip += 3)
        if (void 0 !== (Op = pp[cp = op[ip]])) {
          if (!(wI(Op) === Op && Op >= op[ip + 1] && Op <= op[ip + 2])) throw Error(yI + cp + ": " + Op);
          this[cp] = Op
        } if (void 0 !== (Op = pp[cp = "LN10"])) {
        if (Op != Math.LN10) throw Error(yI + cp + ": " + Op);
        this[cp] = new this(Op)
      }
      return this
    }
    var fI = function pp(ip) {
      var cp, Op, op;

      function Ip(pp) {
        var ip = this;
        if (!(ip instanceof Ip)) return new Ip(pp);
        if (ip.constructor = Ip, pp instanceof Ip) return ip.s = pp.s, ip.e = pp.e, void(ip.d = (pp = pp.d) ? pp.slice() : pp);
        if ("number" === typeof pp) {
          if (0 * pp !== 0) throw Error(yI + pp);
          if (pp > 0) ip.s = 1;
          else {
            if (!(pp < 0)) return ip.s = 0, ip.e = 0, void(ip.d = [0]);
            pp = -pp, ip.s = -1
          }
          return pp === ~~pp && pp < 1e7 ? (ip.e = 0, void(ip.d = [pp])) : lI(ip, pp.toString())
        }
        if ("string" !== typeof pp) throw Error(yI + pp);
        if (45 === pp.charCodeAt(0) ? (pp = pp.slice(1), ip.s = -1) : ip.s = 1, !tI.test(pp)) throw Error(yI + pp);
        lI(ip, pp)
      }
      if (Ip.prototype = uI, Ip.ROUND_UP = 0, Ip.ROUND_DOWN = 1, Ip.ROUND_CEIL = 2, Ip.ROUND_FLOOR = 3, Ip.ROUND_HALF_UP = 4, Ip.ROUND_HALF_DOWN = 5, Ip.ROUND_HALF_EVEN = 6, Ip.ROUND_HALF_CEIL = 7, Ip.ROUND_HALF_FLOOR = 8, Ip.clone = pp, Ip.config = Ip.set = TI, void 0 === ip && (ip = {}), ip)
        for (op = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], cp = 0; cp < op.length;) ip.hasOwnProperty(Op = op[cp++]) || (ip[Op] = this[Op]);
      return Ip.config(ip), Ip
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    DI = new fI(1);
    var bI;
    ! function(pp) {
      pp.AED = "aed", pp.AFN = "afn", pp.ALL = "all", pp.AMD = "amd", pp.ANG = "ang", pp.AOA = "aoa", pp.ARS = "ars", pp.AUD = "aud", pp.AWG = "awg", pp.AZN = "azn", pp.BAM = "bam", pp.BBD = "bbd", pp.BDT = "bdt", pp.BGN = "bgn", pp.BHD = "bhd", pp.BIF = "bif", pp.BMD = "bmd", pp.BND = "bnd", pp.BOB = "bob", pp.BOV = "bov", pp.BRL = "brl", pp.BSD = "bsd", pp.BTN = "btn", pp.BWP = "bwp", pp.BYN = "byn", pp.BYR = "byr", pp.BZD = "bzd", pp.CAD = "cad", pp.CDF = "cdf", pp.CHE = "che", pp.CHF = "chf", pp.CHW = "chw", pp.CLF = "clf", pp.CLP = "clp", pp.CNY = "cny", pp.COP = "cop", pp.COU = "cou", pp.CRC = "crc", pp.CUC = "cuc", pp.CUP = "cup", pp.CVE = "cve", pp.CZK = "czk", pp.DJF = "djf", pp.DKK = "dkk", pp.DOP = "dop", pp.DZD = "dzd", pp.EGP = "egp", pp.ERN = "ern", pp.ETB = "etb", pp.EUR = "eur", pp.FJD = "fjd", pp.FKP = "fkp", pp.GBP = "gbp", pp.GEL = "gel", pp.GHS = "ghs", pp.GIP = "gip", pp.GMD = "gmd", pp.GNF = "gnf", pp.GTQ = "gtq", pp.GYD = "gyd", pp.HKD = "hkd", pp.HNL = "hnl", pp.HRK = "hrk", pp.HTG = "htg", pp.HUF = "huf", pp.IDR = "idr", pp.ILS = "ils", pp.INR = "inr", pp.IQD = "iqd", pp.IRR = "irr", pp.ISK = "isk", pp.JMD = "jmd", pp.JOD = "jod", pp.JPY = "jpy", pp.KES = "kes", pp.KGS = "kgs", pp.KHR = "khr", pp.KMF = "kmf", pp.KPW = "kpw", pp.KRW = "krw", pp.KWD = "kwd", pp.KYD = "kyd", pp.KZT = "kzt", pp.LAK = "lak", pp.LBP = "lbp", pp.LKR = "lkr", pp.LRD = "lrd", pp.LSL = "lsl", pp.LTL = "ltl", pp.LVL = "lvl", pp.LYD = "lyd", pp.MAD = "mad", pp.MDL = "mdl", pp.MGA = "mga", pp.MKD = "mkd", pp.MMK = "mmk", pp.MNT = "mnt", pp.MOP = "mop", pp.MRO = "mro", pp.MUR = "mur", pp.MVR = "mvr", pp.MWK = "mwk", pp.MXN = "mxn", pp.MXV = "mxv", pp.MYR = "myr", pp.MZN = "mzn", pp.NAD = "nad", pp.NGN = "ngn", pp.NIO = "nio", pp.NOK = "nok", pp.NPR = "npr", pp.NZD = "nzd", pp.OMR = "omr", pp.PAB = "pab", pp.PEN = "pen", pp.PGK = "pgk", pp.PHP = "php", pp.PKR = "pkr", pp.PLN = "pln", pp.PYG = "pyg", pp.QAR = "qar", pp.RON = "ron", pp.RSD = "rsd", pp.RUB = "rub", pp.RWF = "rwf", pp.SAR = "sar", pp.SBD = "sbd", pp.SCR = "scr", pp.SDG = "sdg", pp.SEK = "sek", pp.SGD = "sgd", pp.SHP = "shp", pp.SLL = "sll", pp.SOS = "sos", pp.SRD = "srd", pp.SSP = "ssp", pp.STD = "std", pp.SVC = "svc", pp.SYP = "syp", pp.SZL = "szl", pp.THB = "thb", pp.TJS = "tjs", pp.TMT = "tmt", pp.TND = "tnd", pp.TOP = "top", pp.TRY = "try", pp.TTD = "ttd", pp.TWD = "twd", pp.TZS = "tzs", pp.UAH = "uah", pp.UGX = "ugx", pp.USD = "usd", pp.USN = "usn", pp.USS = "uss", pp.UYI = "uyi", pp.UYU = "uyu", pp.UZS = "uzs", pp.VEF = "vef", pp.VND = "vnd", pp.VUV = "vuv", pp.WST = "wst", pp.XAF = "xaf", pp.XAG = "xag", pp.XAU = "xau", pp.XBA = "xba", pp.XBB = "xbb", pp.XBC = "xbc", pp.XBD = "xbd", pp.XCD = "xcd", pp.XDR = "xdr", pp.XFU = "xfu", pp.XOF = "xof", pp.XPD = "xpd", pp.XPF = "xpf", pp.XPT = "xpt", pp.XSU = "xsu", pp.XTS = "xts", pp.XUA = "xua", pp.YER = "yer", pp.ZAR = "zar", pp.ZMW = "zmw", pp.ZWL = "zwl"
    }(bI || (bI = {}));
    bI.AED, bI.AFN, bI.ALL, bI.AMD, bI.ANG, bI.AOA, bI.ARS, bI.AUD, bI.AWG, bI.AZN, bI.BAM, bI.BBD, bI.BDT, bI.BGN, bI.BHD, bI.BIF, bI.BMD, bI.BND, bI.BOB, bI.BOV, bI.BRL, bI.BSD, bI.BTN, bI.BWP, bI.BYR, bI.BYN, bI.BZD, bI.CAD, bI.CDF, bI.CHE, bI.CHF, bI.CHW, bI.CLF, bI.CLP, bI.CNY, bI.COP, bI.COU, bI.CRC, bI.CUC, bI.CUP, bI.CVE, bI.CZK, bI.DJF, bI.DKK, bI.DOP, bI.DZD, bI.EGP, bI.ERN, bI.ETB, bI.EUR, bI.FJD, bI.FKP, bI.GBP, bI.GEL, bI.GHS, bI.GIP, bI.GMD, bI.GNF, bI.GTQ, bI.GYD, bI.HKD, bI.HNL, bI.HRK, bI.HTG, bI.HUF, bI.IDR, bI.ILS, bI.INR, bI.IQD, bI.IRR, bI.ISK, bI.JMD, bI.JOD, bI.JPY, bI.KES, bI.KGS, bI.KHR, bI.KMF, bI.KPW, bI.KRW, bI.KWD, bI.KYD, bI.KZT, bI.LAK, bI.LBP, bI.LKR, bI.LRD, bI.LSL, bI.LTL, bI.LVL, bI.LYD, bI.MAD, bI.MDL, bI.MGA, bI.MKD, bI.MMK, bI.MNT, bI.MOP, bI.MRO, bI.MUR, bI.MVR, bI.MWK, bI.MXN, bI.MXV, bI.MYR, bI.MZN, bI.NAD, bI.NGN, bI.NIO, bI.NOK, bI.NPR, bI.NZD, bI.OMR, bI.PAB, bI.PEN, bI.PGK, bI.PHP, bI.PKR, bI.PLN, bI.PYG, bI.QAR, bI.RON, bI.RSD, bI.RUB, bI.RWF, bI.SAR, bI.SBD, bI.SCR, bI.SDG, bI.SEK, bI.SGD, bI.SHP, bI.SLL, bI.SOS, bI.SRD, bI.SSP, bI.STD, bI.SVC, bI.SYP, bI.SZL, bI.THB, bI.TJS, bI.TMT, bI.TND, bI.TOP, bI.TRY, bI.TTD, bI.TWD, bI.TZS, bI.UAH, bI.UGX, bI.USD, bI.USN, bI.USS, bI.UYI, bI.UYU, bI.UZS, bI.VEF, bI.VND, bI.VUV, bI.WST, bI.XAF, bI.XAG, bI.XAU, bI.XBA, bI.XBB, bI.XBC, bI.XBD, bI.XCD, bI.XDR, bI.XFU, bI.XOF, bI.XPD, bI.XPF, bI.XPT, bI.XSU, bI.XTS, bI.XUA, bI.YER, bI.ZAR, bI.ZMW, bI.ZWL;
    var hI = {
      exports: {}
    };
    ! function(pp, ip) {
      var cp = "__lodash_hash_undefined__",
        Op = 9007199254740991,
        Ip = "[object Arguments]",
        Sp = "[object Array]",
        xp = "[object Boolean]",
        Lp = "[object Date]",
        Yp = "[object Error]",
        Dp = "[object Function]",
        Ap = "[object Map]",
        Pp = "[object Number]",
        Wp = "[object Object]",
        yp = "[object Promise]",
        Up = "[object RegExp]",
        wp = "[object Set]",
        vp = "[object String]",
        tp = "[object Symbol]",
        Hp = "[object WeakMap]",
        dp = "[object ArrayBuffer]",
        ep = "[object DataView]",
        jp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        kp = /^\w*$/,
        mp = /^\./,
        Rp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        qp = /\\(\\)?/g,
        Mp = /^\[object .+?Constructor\]$/,
        Cp = /^(?:0|[1-9]\d*)$/,
        Ep = {};
      Ep["[object Float32Array]"] = Ep["[object Float64Array]"] = Ep["[object Int8Array]"] = Ep["[object Int16Array]"] = Ep["[object Int32Array]"] = Ep["[object Uint8Array]"] = Ep["[object Uint8ClampedArray]"] = Ep["[object Uint16Array]"] = Ep["[object Uint32Array]"] = !0, Ep[Ip] = Ep[Sp] = Ep[dp] = Ep[xp] = Ep[ep] = Ep[Lp] = Ep[Yp] = Ep[Dp] = Ep[Ap] = Ep[Pp] = Ep[Wp] = Ep[Up] = Ep[wp] = Ep[vp] = Ep[Hp] = !1;
      var Xp = "object" == typeof op && op && op.Object === Object && op,
        lp = "object" == typeof self && self && self.Object === Object && self,
        Qp = Xp || lp || Function("return this")(),
        Jp = ip && !ip.nodeType && ip,
        Bp = Jp && pp && !pp.nodeType && pp,
        Np = Bp && Bp.exports === Jp && Xp.process,
        Tp = function() {
          try {
            return Np && Np.binding("util")
          } catch (pp) {}
        }(),
        fp = Tp && Tp.isTypedArray;

      function bp(pp, ip) {
        for (var cp = -1, Op = pp ? pp.length : 0; ++cp < Op && !1 !== ip(pp[cp], cp, pp););
        return pp
      }

      function hp(pp, ip) {
        for (var cp = -1, Op = pp ? pp.length : 0; ++cp < Op;)
          if (ip(pp[cp], cp, pp)) return !0;
        return !1
      }

      function ap(pp) {
        var ip = !1;
        if (null != pp && "function" != typeof pp.toString) try {
          ip = !!(pp + "")
        } catch (cp) {}
        return ip
      }

      function np(pp) {
        var ip = -1,
          cp = Array(pp.size);
        return pp.forEach((function(pp, Op) {
          cp[++ip] = [Op, pp]
        })), cp
      }

      function Fp(pp, ip) {
        return function(cp) {
          return pp(ip(cp))
        }
      }

      function gp(pp) {
        var ip = -1,
          cp = Array(pp.size);
        return pp.forEach((function(pp) {
          cp[++ip] = pp
        })), cp
      }
      var Gp = Array.prototype,
        rp = Function.prototype,
        Zp = Object.prototype,
        zp = Qp["__core-js_shared__"],
        sp = function() {
          var pp = /[^.]+$/.exec(zp && zp.keys && zp.keys.IE_PROTO || "");
          return pp ? "Symbol(src)_1." + pp : ""
        }(),
        Kp = rp.toString,
        Vp = Zp.hasOwnProperty,
        ii = Zp.toString,
        ci = RegExp("^" + Kp.call(Vp).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Oi = Qp.Symbol,
        oi = Qp.Uint8Array,
        Ii = Fp(Object.getPrototypeOf, Object),
        Si = Object.create,
        xi = Zp.propertyIsEnumerable,
        Li = Gp.splice,
        Yi = Fp(Object.keys, Object),
        Di = gi(Qp, "DataView"),
        Ai = gi(Qp, "Map"),
        Pi = gi(Qp, "Promise"),
        Wi = gi(Qp, "Set"),
        yi = gi(Qp, "WeakMap"),
        Ui = gi(Object, "create"),
        wi = pc(Di),
        vi = pc(Ai),
        ti = pc(Pi),
        Hi = pc(Wi),
        di = pc(yi),
        ei = Oi ? Oi.prototype : void 0,
        ui = ei ? ei.valueOf : void 0,
        ji = ei ? ei.toString : void 0;

      function ki(pp) {
        var ip = -1,
          cp = pp ? pp.length : 0;
        for (this.clear(); ++ip < cp;) {
          var Op = pp[ip];
          this.set(Op[0], Op[1])
        }
      }

      function mi(pp) {
        var ip = -1,
          cp = pp ? pp.length : 0;
        for (this.clear(); ++ip < cp;) {
          var Op = pp[ip];
          this.set(Op[0], Op[1])
        }
      }

      function Ri(pp) {
        var ip = -1,
          cp = pp ? pp.length : 0;
        for (this.clear(); ++ip < cp;) {
          var Op = pp[ip];
          this.set(Op[0], Op[1])
        }
      }

      function qi(pp) {
        var ip = -1,
          cp = pp ? pp.length : 0;
        for (this.__data__ = new Ri; ++ip < cp;) this.add(pp[ip])
      }

      function Mi(pp) {
        this.__data__ = new mi(pp)
      }

      function Ci(pp, ip) {
        var cp = oc(pp) || Oc(pp) ? function(pp, ip) {
            for (var cp = -1, Op = Array(pp); ++cp < pp;) Op[cp] = ip(cp);
            return Op
          }(pp.length, String) : [],
          Op = cp.length,
          op = !!Op;
        for (var Ip in pp) !ip && !Vp.call(pp, Ip) || op && ("length" == Ip || ri(Ip, Op)) || cp.push(Ip);
        return cp
      }

      function Ei(pp, ip) {
        for (var cp = pp.length; cp--;)
          if (cc(pp[cp][0], ip)) return cp;
        return -1
      }
      ki.prototype.clear = function() {
        this.__data__ = Ui ? Ui(null) : {}
      }, ki.prototype.delete = function(pp) {
        return this.has(pp) && delete this.__data__[pp]
      }, ki.prototype.get = function(pp) {
        var ip = this.__data__;
        if (Ui) {
          var Op = ip[pp];
          return Op === cp ? void 0 : Op
        }
        return Vp.call(ip, pp) ? ip[pp] : void 0
      }, ki.prototype.has = function(pp) {
        var ip = this.__data__;
        return Ui ? void 0 !== ip[pp] : Vp.call(ip, pp)
      }, ki.prototype.set = function(pp, ip) {
        return this.__data__[pp] = Ui && void 0 === ip ? cp : ip, this
      }, mi.prototype.clear = function() {
        this.__data__ = []
      }, mi.prototype.delete = function(pp) {
        var ip = this.__data__,
          cp = Ei(ip, pp);
        return !(cp < 0) && (cp == ip.length - 1 ? ip.pop() : Li.call(ip, cp, 1), !0)
      }, mi.prototype.get = function(pp) {
        var ip = this.__data__,
          cp = Ei(ip, pp);
        return cp < 0 ? void 0 : ip[cp][1]
      }, mi.prototype.has = function(pp) {
        return Ei(this.__data__, pp) > -1
      }, mi.prototype.set = function(pp, ip) {
        var cp = this.__data__,
          Op = Ei(cp, pp);
        return Op < 0 ? cp.push([pp, ip]) : cp[Op][1] = ip, this
      }, Ri.prototype.clear = function() {
        this.__data__ = {
          hash: new ki,
          map: new(Ai || mi),
          string: new ki
        }
      }, Ri.prototype.delete = function(pp) {
        return Fi(this, pp).delete(pp)
      }, Ri.prototype.get = function(pp) {
        return Fi(this, pp).get(pp)
      }, Ri.prototype.has = function(pp) {
        return Fi(this, pp).has(pp)
      }, Ri.prototype.set = function(pp, ip) {
        return Fi(this, pp).set(pp, ip), this
      }, qi.prototype.add = qi.prototype.push = function(pp) {
        return this.__data__.set(pp, cp), this
      }, qi.prototype.has = function(pp) {
        return this.__data__.has(pp)
      }, Mi.prototype.clear = function() {
        this.__data__ = new mi
      }, Mi.prototype.delete = function(pp) {
        return this.__data__.delete(pp)
      }, Mi.prototype.get = function(pp) {
        return this.__data__.get(pp)
      }, Mi.prototype.has = function(pp) {
        return this.__data__.has(pp)
      }, Mi.prototype.set = function(pp, ip) {
        var cp = this.__data__;
        if (cp instanceof mi) {
          var Op = cp.__data__;
          if (!Ai || Op.length < 199) return Op.push([pp, ip]), this;
          cp = this.__data__ = new Ri(Op)
        }
        return cp.set(pp, ip), this
      };
      var Xi, li = function(pp, ip, cp) {
        for (var Op = -1, op = Object(pp), Ip = cp(pp), Sp = Ip.length; Sp--;) {
          var xp = Ip[Xi ? Sp : ++Op];
          if (!1 === ip(op[xp], xp, op)) break
        }
        return pp
      };

      function Qi(pp, ip) {
        return pp && li(pp, ip, Wc)
      }

      function Ji(pp, ip) {
        for (var cp = 0, Op = (ip = Zi(ip, pp) ? [ip] : ai(ip)).length; null != pp && cp < Op;) pp = pp[Vi(ip[cp++])];
        return cp && cp == Op ? pp : void 0
      }

      function Bi(pp, ip) {
        return null != pp && ip in Object(pp)
      }

      function Ni(pp, ip, cp, Op, op) {
        return pp === ip || (null == pp || null == ip || !Lc(pp) && !Yc(ip) ? pp !== pp && ip !== ip : function(pp, ip, cp, Op, op, Dp) {
          var yp = oc(pp),
            Hp = oc(ip),
            jp = Sp,
            kp = Sp;
          yp || (jp = (jp = Gi(pp)) == Ip ? Wp : jp);
          Hp || (kp = (kp = Gi(ip)) == Ip ? Wp : kp);
          var mp = jp == Wp && !ap(pp),
            Rp = kp == Wp && !ap(ip),
            qp = jp == kp;
          if (qp && !mp) return Dp || (Dp = new Mi), yp || Pc(pp) ? ni(pp, ip, cp, Op, op, Dp) : function(pp, ip, cp, Op, op, Ip, Sp) {
            switch (cp) {
              case ep:
                if (pp.byteLength != ip.byteLength || pp.byteOffset != ip.byteOffset) return !1;
                pp = pp.buffer, ip = ip.buffer;
              case dp:
                return !(pp.byteLength != ip.byteLength || !Op(new oi(pp), new oi(ip)));
              case xp:
              case Lp:
              case Pp:
                return cc(+pp, +ip);
              case Yp:
                return pp.name == ip.name && pp.message == ip.message;
              case Up:
              case vp:
                return pp == ip + "";
              case Ap:
                var Dp = np;
              case wp:
                var Wp = 2 & Ip;
                if (Dp || (Dp = gp), pp.size != ip.size && !Wp) return !1;
                var yp = Sp.get(pp);
                if (yp) return yp == ip;
                Ip |= 1, Sp.set(pp, ip);
                var Hp = ni(Dp(pp), Dp(ip), Op, op, Ip, Sp);
                return Sp.delete(pp), Hp;
              case tp:
                if (ui) return ui.call(pp) == ui.call(ip)
            }
            return !1
          }(pp, ip, jp, cp, Op, op, Dp);
          if (!(2 & op)) {
            var Mp = mp && Vp.call(pp, "__wrapped__"),
              Cp = Rp && Vp.call(ip, "__wrapped__");
            if (Mp || Cp) {
              var Ep = Mp ? pp.value() : pp,
                Xp = Cp ? ip.value() : ip;
              return Dp || (Dp = new Mi), cp(Ep, Xp, Op, op, Dp)
            }
          }
          if (!qp) return !1;
          return Dp || (Dp = new Mi),
            function(pp, ip, cp, Op, op, Ip) {
              var Sp = 2 & op,
                xp = Wc(pp),
                Lp = xp.length,
                Yp = Wc(ip),
                Dp = Yp.length;
              if (Lp != Dp && !Sp) return !1;
              var Ap = Lp;
              for (; Ap--;) {
                var Pp = xp[Ap];
                if (!(Sp ? Pp in ip : Vp.call(ip, Pp))) return !1
              }
              var Wp = Ip.get(pp);
              if (Wp && Ip.get(ip)) return Wp == ip;
              var yp = !0;
              Ip.set(pp, ip), Ip.set(ip, pp);
              var Up = Sp;
              for (; ++Ap < Lp;) {
                var wp = pp[Pp = xp[Ap]],
                  vp = ip[Pp];
                if (Op) var tp = Sp ? Op(vp, wp, Pp, ip, pp, Ip) : Op(wp, vp, Pp, pp, ip, Ip);
                if (!(void 0 === tp ? wp === vp || cp(wp, vp, Op, op, Ip) : tp)) {
                  yp = !1;
                  break
                }
                Up || (Up = "constructor" == Pp)
              }
              if (yp && !Up) {
                var Hp = pp.constructor,
                  dp = ip.constructor;
                Hp == dp || !("constructor" in pp) || !("constructor" in ip) || "function" == typeof Hp && Hp instanceof Hp && "function" == typeof dp && dp instanceof dp || (yp = !1)
              }
              return Ip.delete(pp), Ip.delete(ip), yp
            }(pp, ip, cp, Op, op, Dp)
        }(pp, ip, Ni, cp, Op, op))
      }

      function Ti(pp) {
        return !(!Lc(pp) || (ip = pp, sp && sp in ip)) && (Sc(pp) || ap(pp) ? ci : Mp).test(pc(pp));
        var ip
      }

      function fi(pp) {
        return "function" == typeof pp ? pp : null == pp ? yc : "object" == typeof pp ? oc(pp) ? function(pp, ip) {
          if (Zi(pp) && zi(ip)) return si(Vi(pp), ip);
          return function(cp) {
            var Op = function(pp, ip, cp) {
              var Op = null == pp ? void 0 : Ji(pp, ip);
              return void 0 === Op ? cp : Op
            }(cp, pp);
            return void 0 === Op && Op === ip ? function(pp, ip) {
              return null != pp && function(pp, ip, cp) {
                ip = Zi(ip, pp) ? [ip] : ai(ip);
                var Op, op = -1,
                  Ip = ip.length;
                for (; ++op < Ip;) {
                  var Sp = Vi(ip[op]);
                  if (!(Op = null != pp && cp(pp, Sp))) break;
                  pp = pp[Sp]
                }
                if (Op) return Op;
                Ip = pp ? pp.length : 0;
                return !!Ip && xc(Ip) && ri(Sp, Ip) && (oc(pp) || Oc(pp))
              }(pp, ip, Bi)
            }(cp, pp) : Ni(ip, Op, void 0, 3)
          }
        }(pp[0], pp[1]) : function(pp) {
          var ip = function(pp) {
            var ip = Wc(pp),
              cp = ip.length;
            for (; cp--;) {
              var Op = ip[cp],
                op = pp[Op];
              ip[cp] = [Op, op, zi(op)]
            }
            return ip
          }(pp);
          if (1 == ip.length && ip[0][2]) return si(ip[0][0], ip[0][1]);
          return function(cp) {
            return cp === pp || function(pp, ip, cp, Op) {
              var op = cp.length,
                Ip = op,
                Sp = !Op;
              if (null == pp) return !Ip;
              for (pp = Object(pp); op--;) {
                var xp = cp[op];
                if (Sp && xp[2] ? xp[1] !== pp[xp[0]] : !(xp[0] in pp)) return !1
              }
              for (; ++op < Ip;) {
                var Lp = (xp = cp[op])[0],
                  Yp = pp[Lp],
                  Dp = xp[1];
                if (Sp && xp[2]) {
                  if (void 0 === Yp && !(Lp in pp)) return !1
                } else {
                  var Ap = new Mi;
                  if (Op) var Pp = Op(Yp, Dp, Lp, pp, ip, Ap);
                  if (!(void 0 === Pp ? Ni(Dp, Yp, Op, 3, Ap) : Pp)) return !1
                }
              }
              return !0
            }(cp, pp, ip)
          }
        }(pp) : function(pp) {
          return Zi(pp) ? (ip = Vi(pp), function(pp) {
            return null == pp ? void 0 : pp[ip]
          }) : function(pp) {
            return function(ip) {
              return Ji(ip, pp)
            }
          }(pp);
          var ip
        }(pp)
      }

      function bi(pp) {
        if (! function(pp) {
            var ip = pp && pp.constructor,
              cp = "function" == typeof ip && ip.prototype || Zp;
            return pp === cp
          }(pp)) return Yi(pp);
        var ip = [];
        for (var cp in Object(pp)) Vp.call(pp, cp) && "constructor" != cp && ip.push(cp);
        return ip
      }

      function ai(pp) {
        return oc(pp) ? pp : Ki(pp)
      }

      function ni(pp, ip, cp, Op, op, Ip) {
        var Sp = 2 & op,
          xp = pp.length,
          Lp = ip.length;
        if (xp != Lp && !(Sp && Lp > xp)) return !1;
        var Yp = Ip.get(pp);
        if (Yp && Ip.get(ip)) return Yp == ip;
        var Dp = -1,
          Ap = !0,
          Pp = 1 & op ? new qi : void 0;
        for (Ip.set(pp, ip), Ip.set(ip, pp); ++Dp < xp;) {
          var Wp = pp[Dp],
            yp = ip[Dp];
          if (Op) var Up = Sp ? Op(yp, Wp, Dp, ip, pp, Ip) : Op(Wp, yp, Dp, pp, ip, Ip);
          if (void 0 !== Up) {
            if (Up) continue;
            Ap = !1;
            break
          }
          if (Pp) {
            if (!hp(ip, (function(pp, ip) {
                if (!Pp.has(ip) && (Wp === pp || cp(Wp, pp, Op, op, Ip))) return Pp.add(ip)
              }))) {
              Ap = !1;
              break
            }
          } else if (Wp !== yp && !cp(Wp, yp, Op, op, Ip)) {
            Ap = !1;
            break
          }
        }
        return Ip.delete(pp), Ip.delete(ip), Ap
      }

      function Fi(pp, ip) {
        var cp = pp.__data__;
        return function(pp) {
          var ip = typeof pp;
          return "string" == ip || "number" == ip || "symbol" == ip || "boolean" == ip ? "__proto__" !== pp : null === pp
        }(ip) ? cp["string" == typeof ip ? "string" : "hash"] : cp.map
      }

      function gi(pp, ip) {
        var cp = function(pp, ip) {
          return null == pp ? void 0 : pp[ip]
        }(pp, ip);
        return Ti(cp) ? cp : void 0
      }
      var Gi = function(pp) {
        return ii.call(pp)
      };

      function ri(pp, ip) {
        return !!(ip = null == ip ? Op : ip) && ("number" == typeof pp || Cp.test(pp)) && pp > -1 && pp % 1 == 0 && pp < ip
      }

      function Zi(pp, ip) {
        if (oc(pp)) return !1;
        var cp = typeof pp;
        return !("number" != cp && "symbol" != cp && "boolean" != cp && null != pp && !Dc(pp)) || (kp.test(pp) || !jp.test(pp) || null != ip && pp in Object(ip))
      }

      function zi(pp) {
        return pp === pp && !Lc(pp)
      }

      function si(pp, ip) {
        return function(cp) {
          return null != cp && (cp[pp] === ip && (void 0 !== ip || pp in Object(cp)))
        }
      }(Di && Gi(new Di(new ArrayBuffer(1))) != ep || Ai && Gi(new Ai) != Ap || Pi && Gi(Pi.resolve()) != yp || Wi && Gi(new Wi) != wp || yi && Gi(new yi) != Hp) && (Gi = function(pp) {
        var ip = ii.call(pp),
          cp = ip == Wp ? pp.constructor : void 0,
          Op = cp ? pc(cp) : void 0;
        if (Op) switch (Op) {
          case wi:
            return ep;
          case vi:
            return Ap;
          case ti:
            return yp;
          case Hi:
            return wp;
          case di:
            return Hp
        }
        return ip
      });
      var Ki = ic((function(pp) {
        var ip;
        pp = null == (ip = pp) ? "" : function(pp) {
          if ("string" == typeof pp) return pp;
          if (Dc(pp)) return ji ? ji.call(pp) : "";
          var ip = pp + "";
          return "0" == ip && 1 / pp == -1 / 0 ? "-0" : ip
        }(ip);
        var cp = [];
        return mp.test(pp) && cp.push(""), pp.replace(Rp, (function(pp, ip, Op, op) {
          cp.push(Op ? op.replace(qp, "$1") : ip || pp)
        })), cp
      }));

      function Vi(pp) {
        if ("string" == typeof pp || Dc(pp)) return pp;
        var ip = pp + "";
        return "0" == ip && 1 / pp == -1 / 0 ? "-0" : ip
      }

      function pc(pp) {
        if (null != pp) {
          try {
            return Kp.call(pp)
          } catch (ip) {}
          try {
            return pp + ""
          } catch (ip) {}
        }
        return ""
      }

      function ic(pp, ip) {
        if ("function" != typeof pp || ip && "function" != typeof ip) throw new TypeError("Expected a function");
        var cp = function() {
          var Op = arguments,
            op = ip ? ip.apply(this, Op) : Op[0],
            Ip = cp.cache;
          if (Ip.has(op)) return Ip.get(op);
          var Sp = pp.apply(this, Op);
          return cp.cache = Ip.set(op, Sp), Sp
        };
        return cp.cache = new(ic.Cache || Ri), cp
      }

      function cc(pp, ip) {
        return pp === ip || pp !== pp && ip !== ip
      }

      function Oc(pp) {
        return function(pp) {
          return Yc(pp) && Ic(pp)
        }(pp) && Vp.call(pp, "callee") && (!xi.call(pp, "callee") || ii.call(pp) == Ip)
      }
      ic.Cache = Ri;
      var oc = Array.isArray;

      function Ic(pp) {
        return null != pp && xc(pp.length) && !Sc(pp)
      }

      function Sc(pp) {
        var ip = Lc(pp) ? ii.call(pp) : "";
        return ip == Dp || "[object GeneratorFunction]" == ip
      }

      function xc(pp) {
        return "number" == typeof pp && pp > -1 && pp % 1 == 0 && pp <= Op
      }

      function Lc(pp) {
        var ip = typeof pp;
        return !!pp && ("object" == ip || "function" == ip)
      }

      function Yc(pp) {
        return !!pp && "object" == typeof pp
      }

      function Dc(pp) {
        return "symbol" == typeof pp || Yc(pp) && ii.call(pp) == tp
      }
      var Ac, Pc = fp ? (Ac = fp, function(pp) {
        return Ac(pp)
      }) : function(pp) {
        return Yc(pp) && xc(pp.length) && !!Ep[ii.call(pp)]
      };

      function Wc(pp) {
        return Ic(pp) ? Ci(pp) : bi(pp)
      }

      function yc(pp) {
        return pp
      }
      pp.exports = function(pp, ip, cp) {
        var Op, op = oc(pp) || Pc(pp);
        if (ip = fi(ip), null == cp)
          if (op || Lc(pp)) {
            var Ip = pp.constructor;
            cp = op ? oc(pp) ? new Ip : [] : Sc(Ip) ? Lc(Op = Ii(pp)) ? Si(Op) : {} : {}
          } else cp = {};
        return (op ? bp : Qi)(pp, (function(pp, Op, op) {
          return ip(cp, pp, Op, op)
        })), cp
      }
    }(hI, hI.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      k: aI
    } = Op
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);